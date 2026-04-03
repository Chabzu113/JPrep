// scripts/applyTestFixes.mjs
// Applies AI-suggested fixes to flagged questions in each subject's practice test JSON file.
// Usage: node scripts/applyTestFixes.mjs [--subject <subject>]
// Requires: AWS credentials configured (aws configure) + Bedrock Sonnet access

import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import fs from 'fs';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const MODEL_ID = "us.anthropic.claude-sonnet-4-6";

const client = new BedrockRuntimeClient({ region: "us-east-1" });

// ─── TEST FILE MAP ────────────────────────────────────────────────────────────

const TEST_FILES = {
  apcalc:   'js/data/tests/p1_calcab.json',
  apcalcbc: 'js/data/tests/p1_calcbc.json',
  apstats:  'js/data/tests/p1_stats.json',
  apmicro:  'js/data/tests/p1_micro.json',
  apmacro:  'js/data/tests/p1_macro.json',
  apush:    'js/data/tests/p1_ush.json',
  apphys1:  'js/data/tests/p1_phys1.json',
  apphysc:  'js/data/tests/p1_physcem.json',
  apgov:    'js/data/tests/p1_gov.json',
  apenviro: 'js/data/tests/p1_enviro.json',
  apbio:    'js/data/tests/p1_bio.json',
  apcsa:    'js/data/tests/p1_csa.json',
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

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
  const filePath = TEST_FILES[subjectKey];
  const flagPath = `scripts/${subjectKey}_test_flags.json`;

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

  if (!fs.existsSync(filePath)) {
    console.log(`[${subjectKey}] Data file not found: ${filePath} — skipping.`);
    return;
  }

  const testData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const questions = testData.questions || [];
  const frqs = testData.frqs || [];

  let fixedCount = 0;
  let errorCount = 0;
  let skippedCount = 0;

  for (const flag of actionable) {
    const qIdx = questions.findIndex(q => q.id === flag.id);
    const fIdx = qIdx === -1 ? frqs.findIndex(q => q.id === flag.id) : -1;

    if (qIdx === -1 && fIdx === -1) {
      console.log(`  SKIP  ${flag.id} — not found in data file`);
      skippedCount++;
      continue;
    }

    const arrayName = qIdx !== -1 ? 'questions' : 'frqs';
    const idx = qIdx !== -1 ? qIdx : fIdx;
    const arr = qIdx !== -1 ? questions : frqs;

    if (arr[idx].flagged !== true) {
      console.log(`  SKIP  ${flag.id} — already fixed`);
      skippedCount++;
      continue;
    }

    process.stdout.write(`  FIX   ${flag.id} (${arrayName}) ... `);

    try {
      const raw = await callBedrock(buildFixPrompt(arr[idx], flag.fix));
      const corrected = parseJsonObject(raw);

      if (!corrected || typeof corrected !== 'object' || Array.isArray(corrected)) {
        console.log(`PARSE ERROR — skipping`);
        errorCount++;
        continue;
      }

      // Preserve the original id in case the model changed it
      corrected.id = arr[idx].id;
      // Remove flagged marker
      delete corrected.flagged;
      arr[idx] = corrected;
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

  fs.writeFileSync(filePath, JSON.stringify(testData, null, 2), 'utf8');

  console.log(`  Written ${filePath}`);
  console.log(`  Fixed: ${fixedCount} | Errors: ${errorCount} | Skipped: ${skippedCount + (flags.length - actionable.length)}`);
}

// ─── ENTRY ───────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const subjectFlag = args.indexOf('--subject');
const subjectsToRun = subjectFlag !== -1 && args[subjectFlag + 1]
  ? [args[subjectFlag + 1].toLowerCase()]
  : Object.keys(TEST_FILES);

(async () => {
  for (const subject of subjectsToRun) {
    if (!TEST_FILES[subject]) {
      console.error(`Unknown subject: ${subject}. Available: ${Object.keys(TEST_FILES).join(', ')}`);
      continue;
    }
    await processSubject(subject);
  }
  console.log('\nDone.');
})().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
