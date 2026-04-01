import fs from 'fs';
import path from 'path';

const DATA_DIR = './js/data';

const FILES = [
  { file: 'apcsa_mcq.js',       subject: 'AP CS A' },
  { file: 'apbio_mcq.js',      subject: 'AP Bio' },
  { file: 'apbio_test_mcq.js', subject: 'AP Bio (Test)' },
  { file: 'apcalc_mcq.js',     subject: 'AP Calc AB' },
  { file: 'apstats_mcq.js',    subject: 'AP Stats' },
  { file: 'apmicro_mcq.js',    subject: 'AP Micro' },
  { file: 'apmacro_mcq.js',    subject: 'AP Macro' },
  { file: 'apush_mcq.js',      subject: 'APUSH' },
  { file: 'physics_mcq.js',    subject: 'AP Physics 1' },
  { file: 'physc_mcq.js',      subject: 'AP Physics C' },
  { file: 'apgov_mcq.js',    subject: 'AP Gov' },
  { file: 'apcalcbc_mcq.js', subject: 'AP Calc BC' },
];

function extractArray(content) {
  // Handles both: window.VAR = [...] and var VAR = [...]
  const match = content.match(/(?:window\.\w+|\bvar\s+\w+|\bconst\s+\w+|\blet\s+\w+)\s*=\s*(\[[\s\S]*\])/);
  if (!match) return null;
  try {
    return new Function(`return ${match[1]}`)();
  } catch(e) {
    return null;
  }
}

let grandTotal = 0;

for (const { file, subject } of FILES) {
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.log(`MISSING: ${file}\n`);
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const questions = extractArray(content);

  if (!questions) {
    console.log(`PARSE ERROR: ${file}\n`);
    continue;
  }

  const units = {};
  for (const q of questions) {
    const u = q.unit ?? 'unknown';
    const d = q.difficulty ?? 'unknown';
    if (!units[u]) units[u] = { easy: 0, medium: 0, hard: 0, total: 0 };
    units[u][d] = (units[u][d] || 0) + 1;
    units[u].total++;
  }

  const total = questions.length;
  grandTotal += total;
  const unitKeys = Object.keys(units).sort((a, b) => Number(a) - Number(b));

  console.log(`═══════════════════════════════════════`);
  console.log(`${subject} — ${total} questions`);
  console.log(`═══════════════════════════════════════`);
  console.log(`Unit  | Easy | Med  | Hard | Total`);
  console.log(`------|------|------|------|------`);
  for (const u of unitKeys) {
    const s = units[u];
    console.log(`  ${String(u).padEnd(4)}| ${String(s.easy||0).padEnd(5)}| ${String(s.medium||0).padEnd(5)}| ${String(s.hard||0).padEnd(5)}| ${s.total}`);
  }
  console.log('');
}

console.log(`═══════════════════════════════════════`);
console.log(`GRAND TOTAL: ${grandTotal} questions`);
console.log(`═══════════════════════════════════════`);