import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DIFFICULTY_ORDER = { hard: 0, medium: 1, easy: 2 };

function redistributeFile(filePath, varDecl) {
  const raw = readFileSync(filePath, 'utf8');

  // Extract the JSON array from the file
  const startIdx = raw.indexOf('[');
  const endIdx = raw.lastIndexOf(']');
  const prefix = raw.slice(0, startIdx);
  const suffix = raw.slice(endIdx + 1);
  const questions = JSON.parse(raw.slice(startIdx, endIdx + 1));

  // Group by unit
  const byUnit = {};
  for (const q of questions) {
    const u = q.unit;
    if (!byUnit[u]) byUnit[u] = [];
    byUnit[u].push(q);
  }

  const summary = [];

  // Process each unit
  for (const unit of Object.keys(byUnit).sort((a, b) => Number(a) - Number(b))) {
    const qs = byUnit[unit];

    // Sort: hard first, then medium, then easy; within same difficulty preserve original order
    qs.sort((a, b) => {
      const da = DIFFICULTY_ORDER[a.difficulty] ?? 1;
      const db = DIFFICULTY_ORDER[b.difficulty] ?? 1;
      return da - db;
    });

    const calcCount = Math.round(qs.length / 3);

    for (let i = 0; i < qs.length; i++) {
      qs[i].calculator = i < calcCount;
    }

    const nonCalc = qs.length - calcCount;
    summary.push({ unit, total: qs.length, calc: calcCount, nonCalc });
  }

  // Flatten back in original question order (by id)
  const idOrder = questions.map(q => q.id);
  const byId = {};
  for (const u of Object.keys(byUnit)) {
    for (const q of byUnit[u]) byId[q.id] = q;
  }
  const reordered = idOrder.map(id => byId[id]);

  const jsonOut = JSON.stringify(reordered, null, 2);
  writeFileSync(filePath, prefix + jsonOut + suffix, 'utf8');

  return summary;
}

const abPath = resolve(__dirname, '../js/data/apcalc_mcq.js');
const bcPath = resolve(__dirname, '../js/data/apcalcbc_mcq.js');

console.log('\n=== AP Calculus AB MCQ ===');
const abSummary = redistributeFile(abPath, 'var APCALC_MCQ');
console.log('Unit | Total | Calc | Non-Calc');
for (const row of abSummary) {
  console.log(`  ${row.unit}  |  ${String(row.total).padStart(3)}  |  ${String(row.calc).padStart(3)} |  ${String(row.nonCalc).padStart(3)}`);
}

console.log('\n=== AP Calculus BC MCQ ===');
const bcSummary = redistributeFile(bcPath, 'window.APCALCBC_MCQ');
console.log('Unit | Total | Calc | Non-Calc');
for (const row of bcSummary) {
  console.log(`  ${row.unit}  |  ${String(row.total).padStart(3)}  |  ${String(row.calc).padStart(3)} |  ${String(row.nonCalc).padStart(3)}`);
}

console.log('\nDone.');
