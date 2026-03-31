import fs from 'fs';
import path from 'path';

const DATA_DIR = './js/data';

const FILES = [
  { file: 'apbio_frq.js',     subject: 'AP Bio' },
  { file: 'apcalc_frq.js',    subject: 'AP Calc AB' },
  { file: 'apstats_frq.js',   subject: 'AP Stats' },
  { file: 'apmicro_frq.js',   subject: 'AP Micro' },
  { file: 'apmacro_frq.js',   subject: 'AP Macro' },
  { file: 'apush_frq.js',     subject: 'APUSH' },
  { file: 'physics_frq.js',   subject: 'AP Physics 1' },
  { file: 'apphyscem_frq.js', subject: 'AP Physics C E&M' },
];

function extractArray(content) {
  const match = content.match(/(?:window\.\w+|\bvar\s+\w+|\bconst\s+\w+|\blet\s+\w+)\s*=\s*(\[[\s\S]*\])/);
  if (!match) return null;
  try {
    return new Function(`return ${match[1]}`)();
  } catch (e) {
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

  // units is an array on FRQs — count the question under each unit it belongs to
  const units = {};
  const typeCounts = {};

  for (const q of questions) {
    const qUnits = Array.isArray(q.units) ? q.units : [q.unit ?? 'unknown'];
    const d = q.difficulty ?? 'unknown';
    const t = q.frqType ?? 'unknown';

    for (const u of qUnits) {
      if (!units[u]) units[u] = { easy: 0, medium: 0, hard: 0, unknown: 0, total: 0 };
      units[u][d] = (units[u][d] || 0) + 1;
      units[u].total++;
    }

    typeCounts[t] = (typeCounts[t] || 0) + 1;
  }

  const total = questions.length;
  grandTotal += total;
  const unitKeys = Object.keys(units).sort((a, b) => {
    const na = Number(a), nb = Number(b);
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
    return String(a).localeCompare(String(b));
  });

  const typeStr = Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([t, n]) => `${t}: ${n}`)
    .join(', ');

  console.log(`═══════════════════════════════════════`);
  console.log(`${subject} — ${total} FRQs`);
  console.log(`Types: ${typeStr}`);
  console.log(`═══════════════════════════════════════`);
  console.log(`Unit  | Easy | Med  | Hard | Total`);
  console.log(`------|------|------|------|------`);
  for (const u of unitKeys) {
    const s = units[u];
    console.log(
      `  ${String(u).padEnd(4)}| ${String(s.easy || 0).padEnd(5)}| ${String(s.medium || 0).padEnd(5)}| ${String(s.hard || 0).padEnd(5)}| ${s.total}`
    );
  }
  console.log('');
}

console.log(`═══════════════════════════════════════`);
console.log(`GRAND TOTAL: ${grandTotal} FRQ questions`);
console.log(`═══════════════════════════════════════`);
