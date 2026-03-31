import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '../js/data');

const subjects = [
  { file: 'apcsa_mcq.js',   label: 'AP CS A' },
  { file: 'apbio_mcq.js',   label: 'AP Bio' },
  { file: 'apcalc_mcq.js',  label: 'AP Calc AB' },
  { file: 'apstats_mcq.js', label: 'AP Stats' },
  { file: 'apmicro_mcq.js', label: 'AP Micro' },
  { file: 'apmacro_mcq.js', label: 'AP Macro' },
  { file: 'apush_mcq.js',   label: 'APUSH' },
  { file: 'physics_mcq.js', label: 'AP Physics 1' },
  { file: 'physc_mcq.js',   label: 'AP Physics C' },
];

let grandTotal = 0;

for (const { file, label } of subjects) {
  const filePath = join(dataDir, file);
  let questions;

  try {
    const raw = readFileSync(filePath, 'utf-8');
    const json = raw.replace(/^var\s+\w+\s*=\s*/, '').replace(/;\s*$/, '');
    questions = JSON.parse(json);
  } catch (e) {
    console.log(`⚠️  ${label} — could not read ${file}: ${e.message}\n`);
    continue;
  }

  const units = {};
  for (const q of questions) {
    const u = q.unit ?? '?';
    const d = q.difficulty ?? 'unknown';
    if (!units[u]) units[u] = { easy: 0, medium: 0, hard: 0 };
    if (d === 'easy') units[u].easy++;
    else if (d === 'medium') units[u].medium++;
    else if (d === 'hard') units[u].hard++;
  }

  const sep = '═'.repeat(55);
  console.log(sep);
  console.log(`${label} — ${questions.length} questions`);
  console.log(sep);
  console.log('Unit  | Easy | Med  | Hard | Total');
  console.log('------|------|------|------|------');

  let subjectTotal = 0;
  for (const u of Object.keys(units).sort((a, b) => Number(a) - Number(b))) {
    const { easy, medium, hard } = units[u];
    const total = easy + medium + hard;
    subjectTotal += total;
    console.log(`  ${String(u).padEnd(4)}| ${String(easy).padEnd(5)}| ${String(medium).padEnd(5)}| ${String(hard).padEnd(5)}| ${total}`);
  }

  console.log(`\nTotal: ${subjectTotal}\n`);
  grandTotal += subjectTotal;
}

console.log('═'.repeat(55));
console.log(`GRAND TOTAL: ${grandTotal} questions`);
console.log('═'.repeat(55));
