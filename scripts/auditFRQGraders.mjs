import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'js', 'data');

const BANKS = [
  { file: 'apbio_frq.js',    varName: 'APBIO_FRQ',    subject: 'AP Biology' },
  { file: 'apcsa_frq.js',    varName: 'APCSA_FRQ',    subject: 'AP CS A' },
  { file: 'apmicro_frq.js',  varName: 'APMICRO_FRQ',  subject: 'AP Microeconomics' },
  { file: 'apmacro_frq.js',  varName: 'APMACRO_FRQ',  subject: 'AP Macroeconomics' },
  { file: 'apgov_frq.js',    varName: 'APGOV_FRQ',    subject: 'AP Government' },
  { file: 'apenviro_frq.js', varName: 'APENVIRO_FRQ', subject: 'AP Environmental Science' },
  { file: 'apush_frq.js',    varName: 'APUSH_FRQ',    subject: 'AP US History' },
];

const VALID_APUSH_TYPES = new Set(['LEQ', 'DBQ', 'SAQ', 'ARG']);

// Use Function constructor (not eval) to extract the global array from a JS file
function loadBank(filePath, varName) {
  const code = fs.readFileSync(filePath, 'utf8');
  // eslint-disable-next-line no-new-func
  const fn = new Function(`${code}; return ${varName};`);
  return fn();
}

function auditBank(bank) {
  const filePath = path.join(DATA_DIR, bank.file);

  if (!fs.existsSync(filePath)) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`${bank.subject} (${bank.file})`);
    console.log(`${'='.repeat(60)}`);
    console.log(`WARN: file not found — skipping`);
    return;
  }

  let questions;
  try {
    questions = loadBank(filePath, bank.varName);
  } catch (err) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`${bank.subject} (${bank.file})`);
    console.log(`${'='.repeat(60)}`);
    console.log(`WARN: failed to load bank — ${err.message}`);
    return;
  }

  const warns = [];
  let totalRubricItems = 0;
  let totalKeywords = 0;

  console.log(`\n${'='.repeat(60)}`);
  console.log(`${bank.subject} (${bank.file})`);
  console.log(`${'='.repeat(60)}`);
  console.log(`Total FRQs: ${questions.length}`);

  for (const q of questions) {
    const qid = q.id ?? '(no id)';

    // 2. Missing autoGraded: true
    if (q.autoGraded !== true) {
      warns.push(`WARN: [${qid}] missing autoGraded: true`);
    }

    const rubric = Array.isArray(q.rubric) ? q.rubric : [];
    const partLabels = new Set((q.parts ?? []).map(p => p.label));

    for (const item of rubric) {
      totalRubricItems++;
      const desc = item.description ?? '(no description)';
      const kw = Array.isArray(item.keywords) ? item.keywords : [];
      totalKeywords += kw.length;

      // 3. fundamentalPrinciple === true
      if (item.fundamentalPrinciple === true) {
        warns.push(`WARN: [${qid}] rubric item has fundamentalPrinciple=true — "${desc}"`);
      }

      // 4. partLabel set but not present in parts[].label
      if (item.partLabel != null && item.partLabel !== '' && !partLabels.has(item.partLabel)) {
        warns.push(`WARN: [${qid}] rubric item has bad partLabel "${item.partLabel}" (not in parts) — "${desc}"`);
      }

      // 5. 0 keywords
      if (kw.length === 0) {
        warns.push(`WARN: [${qid}] rubric item has 0 keywords — "${desc}"`);
      }

      // 7. APCSA: skill !== 'code' but looks like code-writing
      if (bank.varName === 'APCSA_FRQ' && item.skill !== 'code') {
        const codeHeuristic = /\b(write|implement|code|method|class)\b/i.test(desc);
        if (codeHeuristic) {
          warns.push(`WARN: [${qid}] skill="${item.skill}" but description looks like code-writing — "${desc}"`);
        }
      }
    }

    // 8. APUSH: frqType must be one of LEQ/DBQ/SAQ/ARG (case-insensitive)
    if (bank.varName === 'APUSH_FRQ') {
      const normalized = (q.frqType ?? '').toUpperCase();
      if (!VALID_APUSH_TYPES.has(normalized)) {
        warns.push(`WARN: [${qid}] frqType="${q.frqType}" is not one of LEQ, DBQ, SAQ, ARG`);
      }
    }
  }

  // 6. Average keywords per rubric item
  const avg = totalRubricItems > 0
    ? (totalKeywords / totalRubricItems).toFixed(2)
    : 'N/A (no rubric items)';
  console.log(`Rubric items: ${totalRubricItems}  |  Avg keywords/item: ${avg}`);

  if (warns.length === 0) {
    console.log('No issues found.');
  } else {
    console.log(`\nIssues (${warns.length}):`);
    for (const w of warns) {
      console.log(`  ${w}`);
    }
  }
}

for (const bank of BANKS) {
  auditBank(bank);
}

console.log(`\n${'='.repeat(60)}`);
console.log('Audit complete.');
