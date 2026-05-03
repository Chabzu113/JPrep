// scripts/auditContentQuality.mjs
// JPrep MCQ Content Quality Auditor
// Usage: node scripts/auditContentQuality.mjs <subject>
// Example: node scripts/auditContentQuality.mjs apbio
// Requires: AWS credentials configured (aws configure) + Bedrock Sonnet access

import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import fs from 'fs';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const MODEL_ID  = "us.anthropic.claude-sonnet-4-6";
const BATCH_SIZE = 20;
const DELAY_MS   = 1000;

const client = new BedrockRuntimeClient({ region: "us-east-1" });

// ─── SUBJECT MAP ─────────────────────────────────────────────────────────────

const SUBJECTS = {
  apcsa:    { name: 'AP Computer Science A',               file: 'js/data/apcsa_mcq.js'    },
  apbio:    { name: 'AP Biology',                          file: 'js/data/apbio_mcq.js'    },
  apcalc:   { name: 'AP Calculus AB',                      file: 'js/data/apcalc_mcq.js'   },
  apcalcbc: { name: 'AP Calculus BC',                      file: 'js/data/apcalcbc_mcq.js' },
  apstats:  { name: 'AP Statistics',                       file: 'js/data/apstats_mcq.js'  },
  apmicro:  { name: 'AP Microeconomics',                   file: 'js/data/apmicro_mcq.js'  },
  apmacro:  { name: 'AP Macroeconomics',                   file: 'js/data/apmacro_mcq.js'  },
  apush:    { name: 'AP US History',                       file: 'js/data/apush_mcq.js'    },
  apphys1:  { name: 'AP Physics 1',                        file: 'js/data/physics_mcq.js'  },
  apphysc:  { name: 'AP Physics C: E&M',                   file: 'js/data/physc_mcq.js'    },
  apgov:    { name: 'AP United States Government',         file: 'js/data/apgov_mcq.js'    },
  apenviro: { name: 'AP Environmental Science',            file: 'js/data/apenviro_mcq.js' },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function extractArray(content) {
  const match = content.match(/(?:window\.\w+|\bvar\s+\w+|\bconst\s+\w+|\blet\s+\w+)\s*=\s*(\[[\s\S]*\])/);
  if (!match) return null;
  try { return new Function(`return ${match[1]}`)(); } catch { return null; }
}

function parseJSON(raw) {
  const cleaned = raw.replace(/```json|```/g, '').replace(/\.\.\./g, '').trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    // bracket matching fallback
    const startBracket = cleaned.indexOf('[');
    const startBrace   = cleaned.indexOf('{');
    const isArray      = startBracket !== -1 && (startBrace === -1 || startBracket <= startBrace);
    const openChar     = isArray ? '[' : '{';
    const closeChar    = isArray ? ']' : '}';
    const start        = isArray ? startBracket : startBrace;
    if (start === -1) throw new Error('No JSON found in response');
    let depth = 0, end = -1, inString = false, i = start;
    while (i < cleaned.length) {
      const ch = cleaned[i];
      if (inString) {
        if (ch === '\\') { i += 2; continue; }
        if (ch === '"') inString = false;
      } else {
        if (ch === '"') inString = true;
        else if (ch === openChar) depth++;
        else if (ch === closeChar) { depth--; if (depth === 0) { end = i; break; } }
      }
      i++;
    }
    if (end === -1) throw new Error('Unterminated JSON');
    return JSON.parse(cleaned.slice(start, end + 1));
  }
}

// ─── BEDROCK CALL ────────────────────────────────────────────────────────────

async function callBedrock(prompt) {
  const body = JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }]
  });
  const cmd = new InvokeModelCommand({
    modelId: MODEL_ID,
    body,
    contentType: "application/json",
    accept: "application/json"
  });
  const resp    = await client.send(cmd);
  const decoded = JSON.parse(new TextDecoder().decode(resp.body));
  return decoded.content[0].text;
}

// ─── AUDIT PROMPT ─────────────────────────────────────────────────────────────

function buildAuditPrompt(subjectName, questions) {
  const formatted = questions.map(q => ({
    id:          q.id,
    unit:        q.unit,
    difficulty:  q.difficulty,
    question:    q.question,
    choices:     q.choices,
    answer:      q.answer,   // 0-indexed integer
    explanation: q.explanation
  }));

  return `You are an expert ${subjectName} teacher reviewing AI-generated multiple choice questions.

Audit each question below. Flag ONLY questions that have a genuine problem. Most questions should pass.

Issue types (use exactly these strings):
- "wrong_answer"         — the marked correct answer (choices[answer]) is factually or mathematically wrong
- "ambiguous"            — more than one choice could reasonably be defended as correct given the question stem
- "implausible_choices"  — one or more distractors is obviously wrong, nonsensical, or gives away the correct answer
- "out_of_scope"         — tests content clearly outside the AP ${subjectName} curriculum for the listed unit

Severity levels:
- "high"   — would actively mislead students or is factually wrong
- "medium" — would confuse students or reduce question validity
- "low"    — minor quality issue, passable but could be improved

CRITICAL RULES:
- Only flag a question if the problem is clear and specific. Do not flag healthy questions.
- For wrong_answer: you must be certain the correct answer is wrong, not merely imprecise.
- For ambiguous: there must be a real second defensible choice, not just theoretical nitpicking.
- For out_of_scope: only flag if the topic is genuinely not covered in the AP course for that unit.
- Return an empty array [] if no questions have issues.

Questions to audit:
${JSON.stringify(formatted, null, 2)}

Return ONLY a valid JSON array of flagged questions. Return [] if none are flagged. Zero markdown, no preamble.
Each element:
{
  "id": "question id",
  "issue": "wrong_answer | ambiguous | implausible_choices | out_of_scope",
  "detail": "one sentence explaining the specific problem",
  "severity": "high | medium | low"
}`;
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function auditSubject(subjectKey) {
  const config = SUBJECTS[subjectKey];
  if (!config) {
    console.error(`Unknown subject: ${subjectKey}`);
    console.error(`Available: ${Object.keys(SUBJECTS).join(', ')}`);
    process.exit(1);
  }

  if (!fs.existsSync(config.file)) {
    console.error(`MCQ bank not found: ${config.file}`);
    process.exit(1);
  }

  const content   = fs.readFileSync(config.file, 'utf8');
  const questions = extractArray(content);
  if (!questions || !Array.isArray(questions)) {
    console.error(`Could not parse MCQ array from ${config.file}`);
    process.exit(1);
  }

  const flagPath    = `scripts/${subjectKey}_content_flags.json`;
  const totalQ      = questions.length;
  const totalBatches = Math.ceil(totalQ / BATCH_SIZE);

  // Load existing flags if resuming
  let existingFlags = [];
  let processedIds  = new Set();
  if (fs.existsSync(flagPath)) {
    try {
      const saved   = JSON.parse(fs.readFileSync(flagPath, 'utf8'));
      existingFlags = saved.flags || [];
      processedIds  = new Set(saved.processedIds || []);
      console.log(`Resuming — ${processedIds.size} questions already processed, ${existingFlags.length} flags loaded`);
    } catch {
      console.log(`Could not read existing flag file — starting fresh`);
    }
  }

  // Filter to unprocessed questions
  const remaining = questions.filter(q => !processedIds.has(q.id));

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  JPrep Content Audit — ${config.name}`);
  console.log(`  Total questions: ${totalQ}`);
  console.log(`  To process: ${remaining.length}`);
  console.log(`  Batch size: ${BATCH_SIZE}`);
  console.log(`${'═'.repeat(60)}\n`);

  let allFlags   = [...existingFlags];
  let batchNum   = 0;
  let errorCount = 0;

  for (let i = 0; i < remaining.length; i += BATCH_SIZE) {
    const batch = remaining.slice(i, i + BATCH_SIZE);
    batchNum++;

    const batchLabel = `Batch ${batchNum}/${Math.ceil(remaining.length / BATCH_SIZE)} (q${i + 1}–${Math.min(i + BATCH_SIZE, remaining.length)})`;
    process.stdout.write(`  ${batchLabel}... `);

    let batchFlags = [];
    try {
      const raw  = await callBedrock(buildAuditPrompt(config.name, batch));
      const result = parseJSON(raw);

      if (Array.isArray(result)) {
        batchFlags = result;
      } else {
        console.log(`UNEXPECTED FORMAT — expected array, got ${typeof result}`);
        errorCount++;
      }

      // Mark all questions in this batch as processed
      for (const q of batch) processedIds.add(q.id);

      allFlags.push(...batchFlags);

      console.log(`${batchFlags.length > 0 ? `⚠ ${batchFlags.length} flag(s)` : '✓ clean'}`);

    } catch (err) {
      console.log(`ERROR — ${err.message}`);
      errorCount++;
    }

    // Incremental save after every batch
    const saveData = {
      generated:    new Date().toISOString(),
      subject:      subjectKey,
      totalReviewed: processedIds.size,
      processedIds: [...processedIds],
      flags:        allFlags
    };
    fs.writeFileSync(flagPath, JSON.stringify(saveData, null, 2), 'utf8');

    if (i + BATCH_SIZE < remaining.length) {
      await sleep(DELAY_MS);
    }
  }

  // ─── SUMMARY ────────────────────────────────────────────────────────────────

  const totalReviewed = processedIds.size;
  const totalFlagged  = allFlags.length;
  const flagRate      = totalReviewed > 0 ? ((totalFlagged / totalReviewed) * 100).toFixed(1) : '0.0';

  const bySeverity = { high: 0, medium: 0, low: 0 };
  const byIssue    = { wrong_answer: 0, ambiguous: 0, implausible_choices: 0, out_of_scope: 0 };
  for (const f of allFlags) {
    if (bySeverity[f.severity]   !== undefined) bySeverity[f.severity]++;
    if (byIssue[f.issue]         !== undefined) byIssue[f.issue]++;
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  AUDIT COMPLETE — ${config.name}`);
  console.log(`  Reviewed : ${totalReviewed} / ${totalQ}`);
  console.log(`  Flagged  : ${totalFlagged} (${flagRate}%)`);
  if (errorCount > 0) console.log(`  Errors   : ${errorCount} batches`);
  console.log(`\n  By severity:`);
  console.log(`    high   : ${bySeverity.high}`);
  console.log(`    medium : ${bySeverity.medium}`);
  console.log(`    low    : ${bySeverity.low}`);
  console.log(`\n  By issue type:`);
  console.log(`    wrong_answer        : ${byIssue.wrong_answer}`);
  console.log(`    ambiguous           : ${byIssue.ambiguous}`);
  console.log(`    implausible_choices : ${byIssue.implausible_choices}`);
  console.log(`    out_of_scope        : ${byIssue.out_of_scope}`);
  console.log(`\n  Flags saved → ${flagPath}`);
  console.log(`${'═'.repeat(60)}\n`);
}

// ─── ENTRY ───────────────────────────────────────────────────────────────────

const subject = process.argv[2]?.toLowerCase();
if (!subject) {
  console.log(`
Usage: node scripts/auditContentQuality.mjs <subject>

Subjects:
  apcsa     AP Computer Science A
  apbio     AP Biology
  apcalc    AP Calculus AB
  apcalcbc  AP Calculus BC
  apstats   AP Statistics
  apmicro   AP Microeconomics
  apmacro   AP Macroeconomics
  apush     AP US History
  apphys1   AP Physics 1
  apphysc   AP Physics C: E&M
  apgov     AP Government
  apenviro  AP Environmental Science

Output: scripts/<subject>_content_flags.json
`);
  process.exit(0);
}

auditSubject(subject).catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
