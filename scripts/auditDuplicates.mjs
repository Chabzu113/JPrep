import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SUBJECTS = [
  { file: 'js/data/apcsa_mcq.js',    label: 'APCSA'    },
  { file: 'js/data/apbio_mcq.js',    label: 'APBIO'    },
  { file: 'js/data/apcalc_mcq.js',   label: 'APCALC'   },
  { file: 'js/data/apstats_mcq.js',  label: 'APSTATS'  },
  { file: 'js/data/apmicro_mcq.js',  label: 'APMICRO'  },
  { file: 'js/data/apmacro_mcq.js',  label: 'APMACRO'  },
  { file: 'js/data/apush_mcq.js',    label: 'APUSH'    },
  { file: 'js/data/physics_mcq.js',  label: 'APPHYS1'  },
  { file: 'js/data/physc_mcq.js',    label: 'APPHYSC'  },
  { file: 'js/data/apgov_mcq.js',    label: 'APGOV'    },
  { file: 'js/data/apcalcbc_mcq.js', label: 'APCALCBC' },
  { file: 'js/data/apenviro_mcq.js', label: 'APENVIRO' },
];

function parseFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Handles: window.VAR = [...];  |  var VAR = [...];  |  VAR = [...];
  const stripped = content
    .replace(/^(?:var\s+)?(?:window\.)?[\w]+\s*=\s*/, '')
    .replace(/;\s*$/, '')
    .trim();
  return JSON.parse(stripped);
}

const summaryRows = [];

for (const { file, label } of SUBJECTS) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] ${label}: file not found (${file})`);
    continue;
  }

  let questions;
  try {
    questions = parseFile(filePath);
  } catch (e) {
    console.log(`[ERROR] ${label}: parse failed — ${e.message}`);
    continue;
  }

  const total = questions.length;
  const seen = new Set();
  const dupes = [];

  for (const q of questions) {
    const normalize = s => s.toLowerCase().trim().replace(/\s+/g, ' ').replace(/['']/g, "'").replace(/[""]/g, '"').replace(/\u2014/g, '-').replace(/\u2013/g, '-');
    const key = normalize((q.question || '') + '||' + (q.choices || []).join('||'));
    if (seen.has(key)) {
      dupes.push(q.question || '');
    } else {
      seen.add(key);
    }
  }

  summaryRows.push({ label, total, dupeCount: dupes.length });

  if (dupes.length > 0) {
    console.log(`\n=== ${label} — ${dupes.length} duplicate(s) ===`);
    for (const text of dupes) {
      console.log(`  • ${text.slice(0, 80)}${text.length > 80 ? '...' : ''}`);
    }
  }
}

// Summary table
console.log('\n' + '='.repeat(56));
console.log('SUMMARY');
console.log('='.repeat(56));
console.log(`${'Subject'.padEnd(12)} ${'Total'.padStart(7)} ${'Duplicates'.padStart(12)}`);
console.log('-'.repeat(56));

let totalAll = 0;
let totalDupes = 0;
for (const { label, total, dupeCount } of summaryRows) {
  const flag = dupeCount > 0 ? ' ***' : '';
  console.log(`${label.padEnd(12)} ${String(total).padStart(7)} ${String(dupeCount).padStart(12)}${flag}`);
  totalAll += total;
  totalDupes += dupeCount;
}

console.log('-'.repeat(56));
console.log(`${'TOTAL'.padEnd(12)} ${String(totalAll).padStart(7)} ${String(totalDupes).padStart(12)}`);
