// scripts/applyFlagFixes.mjs
// Applies AI-suggested fixes to flagged questions in each subject's data file.
// Usage: node scripts/applyFlagFixes.mjs [--subject <subject>]
// Requires: AWS credentials configured (aws configure) + Bedrock Sonnet access

import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import fs from 'fs';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const MODEL_ID = "us.anthropic.claude-sonnet-4-6";

const client = new BedrockRuntimeClient({ region: "us-east-1" });

// ─── SUBJECT MAP ─────────────────────────────────────────────────────────────

const SUBJECTS = {
  apstats:  { globalVar: 'APSTATS_MCQ',  outputFile: 'js/data/apstats_mcq.js'  },
  apcalc:   { globalVar: 'APCALC_MCQ',   outputFile: 'js/data/apcalc_mcq.js'   },
  apbio:    { globalVar: 'APBIO_MCQ',    outputFile: 'js/data/apbio_mcq.js'    },
  apcsa:    { globalVar: 'APCSA_MCQ',    outputFile: 'js/data/apcsa_mcq.js'    },
  apmicro:  { globalVar: 'APMICRO_MCQ',  outputFile: 'js/data/apmicro_mcq.js'  },
  apmacro:  { globalVar: 'APMACRO_MCQ',  outputFile: 'js/data/apmacro_mcq.js'  },
  apush:    { globalVar: 'APUSH_MCQ',    outputFile: 'js/data/apush_mcq.js'    },
  apphys1:  { globalVar: 'PHYSICS_MCQ',  outputFile: 'js/data/physics_mcq.js'  },
  apphysc:  { globalVar: 'PHYSC_MCQ',    outputFile: 'js/data/physc_mcq.js'    },
  apgov:    { globalVar: 'APGOV_MCQ',    outputFile: 'js/data/apgov_mcq.js'    },
  apcalcbc: { globalVar: 'APCALCBC_MCQ', outputFile: 'js/data/apcalcbc_mcq.js' },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function extractArray(content) {
  const match = content.match(/(?:window\.\w+|\bvar\s+\w+|\bconst\s+\w+|\blet\s+\w+)\s*=\s*(\[[\s\S]*\])/);
  if (!match) return null;
  try { return new Function(`return ${match[1]}`)(); } catch { return null; }
}

async function callBedrock(prompt) {
  const body = JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }]
  });
  const cmd = new InvokeModelCommand({
    modelId: MODEL_ID,
    body,
    contentType: "application/json",
    accept: "application/json"
  });
  const resp = await client.send(cmd);
  const decoded = JSON.parse(new TextDecoder().decode(resp.body));
  return decoded.content[0].text;
}

function parseJsonObject(raw) {
  const cleaned = raw
    .replace(/```json|```/g, '')
    .replace(/\u2014/g, '-')
    .replace(/\u2013/g, '-')
    .trim();

  // Try direct parse
  try { return JSON.parse(cleaned); } catch { /* fall through */ }

  // Extract via bracket matching (object)
  const start = cleaned.indexOf('{');
  if (start !== -1) {
    let depth = 0, end = -1;
    for (let i = start; i < cleaned.length; i++) {
      if (cleaned[i] === '{') depth++;
      else if (cleaned[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end !== -1) {
      try { return JSON.parse(cleaned.slice(start, end + 1)); } catch { /* fall through */ }
    }
  }

  return null;
}

function buildFixPrompt(question, fixInstructions) {
  return `You are an expert AP exam question editor. Apply the following fix instructions to the question below.

ORIGINAL QUESTION:
${JSON.stringify(question, null, 2)}

FIX INSTRUCTIONS:
${fixInstructions}

Return ONLY the corrected question as a single JSON object with the same fields as the original. Do not include markdown, do not include any explanation — just the raw JSON object.`;
}

// ─── CORE ────────────────────────────────────────────────────────────────────

async function processSubject(subjectKey) {
  const config = SUBJECTS[subjectKey];
  const flagPath = `scripts/${subjectKey}_generation_flags.json`;

  if (!fs.existsSync(flagPath)) {
    console.log(`[${subjectKey}] No flag file found — skipping.`);
    return;
  }

  const flagData = JSON.parse(fs.readFileSync(flagPath, 'utf8'));
  const flags = flagData.flags || [];
  const actionable = flags.filter(f => f.fix !== null);

  if (actionable.length === 0) {
    console.log(`[${subjectKey}] ${flags.length} flags, 0 with fixes — skipping.`);
    return;
  }

  console.log(`\n[${subjectKey}] ${flags.length} total flags, ${actionable.length} with fixes.`);

  const filePath = config.outputFile;
  if (!fs.existsSync(filePath)) {
    console.log(`[${subjectKey}] Data file not found: ${filePath} — skipping.`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const questions = extractArray(content);
  if (!questions) {
    console.log(`[${subjectKey}] Could not parse data file — skipping.`);
    return;
  }

  let fixedCount = 0;
  let errorCount = 0;

  for (const flag of actionable) {
    const idx = questions.findIndex(q => q.id === flag.id);
    if (idx === -1) {
      console.log(`  SKIP  ${flag.id} — not found in data file`);
      continue;
    }

    process.stdout.write(`  FIX   ${flag.id} ... `);

    try {
      const raw = await callBedrock(buildFixPrompt(questions[idx], flag.fix));
      const corrected = parseJsonObject(raw);

      if (!corrected || typeof corrected !== 'object' || Array.isArray(corrected)) {
        console.log(`PARSE ERROR — skipping`);
        errorCount++;
        continue;
      }

      // Preserve the original id in case the model changed it
      corrected.id = questions[idx].id;
      questions[idx] = corrected;
      fixedCount++;
      console.log(`OK`);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      errorCount++;
    }
  }

  if (fixedCount === 0) {
    console.log(`  No questions were updated — not writing file.`);
    return;
  }

  // Write back in the same format as generateQuestions.mjs
  const usesWindow = content.includes('window.');
  const varName = config.globalVar;
  const declaration = usesWindow ? `window.${varName}` : `var ${varName}`;
  fs.writeFileSync(filePath, `${declaration} = ${JSON.stringify(questions, null, 2)};`, 'utf8');

  console.log(`  Written ${questions.length} questions to ${filePath}`);
  console.log(`  Fixed: ${fixedCount} | Errors: ${errorCount} | Skipped (null fix): ${flags.length - actionable.length}`);
}

// ─── ENTRY ───────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const subjectFlag = args.indexOf('--subject');
const subjectsToRun = subjectFlag !== -1 && args[subjectFlag + 1]
  ? [args[subjectFlag + 1].toLowerCase()]
  : Object.keys(SUBJECTS);

(async () => {
  for (const subject of subjectsToRun) {
    if (!SUBJECTS[subject]) {
      console.error(`Unknown subject: ${subject}. Available: ${Object.keys(SUBJECTS).join(', ')}`);
      continue;
    }
    await processSubject(subject);
  }
  console.log('\nDone.');
})().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
