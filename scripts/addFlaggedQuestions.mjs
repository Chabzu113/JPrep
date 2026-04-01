// scripts/addFlaggedQuestions.mjs
// JPrep Flagged Question Replacer
// Usage: node scripts/addFlaggedQuestions.mjs --subject apcalcbc
// Reads scripts/{subject}_generation_flags.json and generates corrected replacement questions.

import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import fs from 'fs';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const MODEL_ID = "us.anthropic.claude-sonnet-4-6";
const DELAY_MS = 2000;
const SAVE_INTERVAL = 10;
const SESSION_TOKEN_LIMIT = 5000000;

const client = new BedrockRuntimeClient({ region: "us-east-1" });

// ─── SUBJECT DEFINITIONS ─────────────────────────────────────────────────────

const SUBJECTS = {
  apcsa: {
    globalVar: 'APCSA_MCQ',
    outputFile: 'js/data/apcsa_mcq.js',
    idPrefix: 'csa',
  },
  apbio: {
    globalVar: 'APBIO_MCQ',
    outputFile: 'js/data/apbio_mcq.js',
    idPrefix: 'bio',
  },
  apcalc: {
    globalVar: 'APCALC_MCQ',
    outputFile: 'js/data/apcalc_mcq.js',
    idPrefix: 'calc',
  },
  apstats: {
    globalVar: 'APSTATS_MCQ',
    outputFile: 'js/data/apstats_mcq.js',
    idPrefix: 'stats',
  },
  apmicro: {
    globalVar: 'APMICRO_MCQ',
    outputFile: 'js/data/apmicro_mcq.js',
    idPrefix: 'micro',
  },
  apmacro: {
    globalVar: 'APMACRO_MCQ',
    outputFile: 'js/data/apmacro_mcq.js',
    idPrefix: 'macro',
  },
  apush: {
    globalVar: 'APUSH_MCQ',
    outputFile: 'js/data/apush_mcq.js',
    idPrefix: 'apush',
  },
  apphys1: {
    globalVar: 'PHYSICS_MCQ',
    outputFile: 'js/data/physics_mcq.js',
    idPrefix: 'phys1',
  },
  apphysc: {
    globalVar: 'PHYSC_MCQ',
    outputFile: 'js/data/physc_mcq.js',
    idPrefix: 'physc',
  },
  apgov: {
    globalVar: 'APGOV_MCQ',
    outputFile: 'js/data/apgov_mcq.js',
    idPrefix: 'gov',
  },
  apcalcbc: {
    globalVar: 'APCALCBC_MCQ',
    outputFile: 'js/data/apcalcbc_mcq.js',
    idPrefix: 'calcbc',
  },
  apenviro: { globalVar: 'APENVIRO_MCQ', outputFile: 'js/data/apenviro_mcq.js', idPrefix: 'enviro' },
};

const SUBJECT_NAMES = {
  apcsa: 'AP Computer Science A',
  apbio: 'AP Biology',
  apcalc: 'AP Calculus AB',
  apstats: 'AP Statistics',
  apmicro: 'AP Microeconomics',
  apmacro: 'AP Macroeconomics',
  apush: 'AP US History',
  apphys1: 'AP Physics 1',
  apphysc: 'AP Physics C: Mechanics & E&M',
  apgov: 'AP United States Government and Politics',
  apcalcbc: 'AP Calculus BC',
  apenviro: 'AP Environmental Science',
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

function getLastIndex(questions) {
  let max = 0;
  for (const q of questions) {
    const match = q.id?.match(/_q(\d+)$/);
    if (match) max = Math.max(max, parseInt(match[1]));
  }
  return max;
}

async function callBedrock(prompt) {
  const body = JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 128000,
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
  const usage = decoded.usage || {};
  callBedrock._lastTokens = (usage.input_tokens || 0) + (usage.output_tokens || 0);
  return decoded.content[0].text;
}

function saveFile(filePath, content, questions, config) {
  const usesWindow = content.includes('window.');
  const declaration = usesWindow ? `window.${config.globalVar}` : `var ${config.globalVar}`;
  fs.writeFileSync(filePath, `${declaration} = ${JSON.stringify(questions, null, 2)};`, 'utf8');
}

// ─── PROMPT ──────────────────────────────────────────────────────────────────

function buildFixPrompt(subjectKey, flag, newId) {
  const subjectName = SUBJECT_NAMES[subjectKey];
  const fiveChoices = ['apmicro', 'apmacro', 'apstats'].includes(subjectKey);

  // Extract unit number from original ID (e.g. calcbc_u1_q006 → 1)
  const unitMatch = flag.id.match(/_u(\d+)_/);
  const unit = unitMatch ? parseInt(unitMatch[1]) : null;

  return `You are an expert ${subjectName} teacher. A question was flagged during generation and needs a corrected replacement.

Subject: ${subjectName}
Original question ID: ${flag.id}${unit !== null ? `\nUnit: ${unit}` : ''}

Issue with the original question:
${flag.issue}

Fix instructions:
${flag.fix}

Generate ONE corrected replacement question as a JSON object. The question should fix the identified issue while testing the same concept from the same unit.
${fiveChoices ? 'Use exactly 5 choices (A through E) — AP Econ/Stats format.' : 'Use exactly 4 choices (A through D).'}
Distractors must represent real student misconceptions — plausible, not absurd.

Return ONLY a valid JSON object, zero markdown, no text before or after:
{
  "id": "${newId}",
  "subject": "${subjectKey}",
  "unit": ${unit !== null ? unit : 'UNIT_NUMBER'},
  "topic": "topic name",
  "topicLabel": "topic name",
  "difficulty": "easy|medium|hard",
  "calculator": false,
  "isLatex": false,
  "format": "text",
  "question": "Question text?",
  "choices": ${fiveChoices ? '["A) ...", "B) ...", "C) ...", "D) ...", "E) ..."]' : '["A) ...", "B) ...", "C) ...", "D) ..."]'},
  "answer": 0,
  "explanation": "Why correct answer is right and why each wrong answer is wrong."
}

answer is a 0-indexed integer. Output the JSON object only.`;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function processFlaggedQuestions(subjectKey) {
  const config = SUBJECTS[subjectKey];
  if (!config) {
    console.error(`Unknown subject: ${subjectKey}\nAvailable: ${Object.keys(SUBJECTS).join(', ')}`);
    process.exit(1);
  }

  const flagsPath = `scripts/${subjectKey}_generation_flags.json`;
  if (!fs.existsSync(flagsPath)) {
    console.error(`Flags file not found: ${flagsPath}`);
    process.exit(1);
  }

  const filePath = config.outputFile;
  if (!fs.existsSync(filePath)) {
    console.error(`Data file not found: ${filePath}`);
    process.exit(1);
  }

  const flagsData = JSON.parse(fs.readFileSync(flagsPath, 'utf8'));
  const flags = flagsData.flags || [];

  if (flags.length === 0) {
    console.log(`No flags found in ${flagsPath}`);
    process.exit(0);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let existing = extractArray(content);
  if (!existing) {
    console.error(`Could not parse ${filePath}`);
    process.exit(1);
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  JPrep Flagged Replacer — ${subjectKey.toUpperCase()}`);
  console.log(`  Flags to process: ${flags.length}`);
  console.log(`  Current bank: ${existing.length} questions`);
  console.log(`${'═'.repeat(60)}\n`);

  let lastIndex = getLastIndex(existing);
  let totalAdded = 0;
  let totalFailed = 0;
  let sessionTokens = 0;

  for (let i = 0; i < flags.length; i++) {
    const flag = flags[i];
    lastIndex++;
    const newId = `${config.idPrefix}_u${flag.id.match(/_u(\d+)_/)?.[1] ?? '0'}_q${String(lastIndex).padStart(3, '0')}`;

    process.stdout.write(`  [${i + 1}/${flags.length}] ${flag.id} → ${newId}... `);

    try {
      const raw = await callBedrock(buildFixPrompt(subjectKey, flag, newId));
      sessionTokens += callBedrock._lastTokens || 0;

      let question;
      try {
        const cleaned = raw.replace(/```json|```/g, '').replace(/\.\.\./g, '').trim();
        try {
          question = JSON.parse(cleaned);
        } catch {
          const start = cleaned.indexOf('{');
          if (start === -1) throw new Error('No JSON object found');
          let depth = 0, end = -1;
          for (let j = start; j < cleaned.length; j++) {
            if (cleaned[j] === '{') depth++;
            else if (cleaned[j] === '}') { depth--; if (depth === 0) { end = j; break; } }
          }
          if (end === -1) throw new Error('Unterminated JSON object');
          question = JSON.parse(cleaned.slice(start, end + 1));
        }
      } catch (parseErr) {
        console.log(`PARSE ERROR — skipping (${parseErr.message})`);
        totalFailed++;
        lastIndex--;
        await sleep(DELAY_MS);
        continue;
      }

      // Ensure ID is set correctly
      question.id = newId;

      existing.push(question);
      totalAdded++;
      console.log(`✓`);

      // Save every SAVE_INTERVAL questions
      if (totalAdded % SAVE_INTERVAL === 0) {
        saveFile(filePath, content, existing, config);
        console.log(`  [saved ${existing.length} questions after ${totalAdded} added]`);
      }

      if (sessionTokens >= SESSION_TOKEN_LIMIT) {
        console.warn(`\nSession token limit reached — saving progress and stopping.`);
        saveFile(filePath, content, existing, config);
        break;
      }

      await sleep(DELAY_MS);
    } catch (err) {
      if (err.message && err.message.includes('Too many tokens')) {
        console.log(`FATAL: Too many tokens — ${err.message}`);
        process.exit(1);
      }
      console.log(`ERROR: ${err.message}`);
      totalFailed++;
      lastIndex--;
      await sleep(DELAY_MS * 2);
    }
  }

  // Final save
  saveFile(filePath, content, existing, config);
  console.log(`\nWriting ${existing.length} questions to ${filePath}...`);

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  DONE — ${subjectKey.toUpperCase()}`);
  console.log(`  Flags processed: ${flags.length} | Added: ${totalAdded} | Failed: ${totalFailed}`);
  console.log(`  Final count: ${existing.length}`);
  console.log(`${'═'.repeat(60)}\n`);
}

// ─── ENTRY ───────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const flag = args.indexOf('--subject');

if (flag === -1 || !args[flag + 1]) {
  console.log(`
Usage: node scripts/addFlaggedQuestions.mjs --subject <subject>

Subjects:
  apcsa      AP Computer Science A
  apbio      AP Biology
  apcalc     AP Calculus AB
  apstats    AP Statistics
  apmicro    AP Microeconomics
  apmacro    AP Macroeconomics
  apush      AP US History
  apphys1    AP Physics 1
  apphysc    AP Physics C
  apgov      AP United States Government and Politics
  apcalcbc   AP Calculus BC
`);
  process.exit(1);
}

const subjectKey = args[flag + 1];
processFlaggedQuestions(subjectKey);
