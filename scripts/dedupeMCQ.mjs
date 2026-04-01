import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SUBJECTS = [
  { file: 'js/data/apcsa_mcq.js'    },
  { file: 'js/data/apbio_mcq.js'    },
  { file: 'js/data/apcalc_mcq.js'   },
  { file: 'js/data/apstats_mcq.js'  },
  { file: 'js/data/apmicro_mcq.js'  },
  { file: 'js/data/apmacro_mcq.js'  },
  { file: 'js/data/apush_mcq.js'    },
  { file: 'js/data/physics_mcq.js'  },
  { file: 'js/data/physc_mcq.js'    },
  { file: 'js/data/apgov_mcq.js'    },
  { file: 'js/data/apcalcbc_mcq.js' },
  { file: 'js/data/apenviro_mcq.js' },
];

function parseFileWithVarName(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Handles: window.VAR = [...];  |  var VAR = [...];  |  VAR = [...];
  const match = content.match(/^(?:var\s+)?(?:window\.)?(\w+)\s*=/);
  if (!match) throw new Error('could not find variable declaration pattern');
  const varName = match[1];
  const usesWindow = /^window\./.test(content);
  const usesVar = /^var\s+/.test(content);
  const stripped = content
    .replace(/^(?:var\s+)?(?:window\.)?[\w]+\s*=\s*/, '')
    .replace(/;\s*$/, '')
    .trim();
  return { varName, usesWindow, usesVar, questions: JSON.parse(stripped) };
}

console.log(`${'File'.padEnd(22)} ${'Before'.padStart(7)} ${'After'.padStart(7)} ${'Removed'.padStart(9)}`);
console.log('-'.repeat(50));

let totalBefore = 0;
let totalRemoved = 0;

for (const { file } of SUBJECTS) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] ${file}: not found`);
    continue;
  }

  let varName, usesWindow, usesVar, questions;
  try {
    ({ varName, usesWindow, usesVar, questions } = parseFileWithVarName(filePath));
  } catch (e) {
    console.log(`[ERROR] ${file}: ${e.message}`);
    continue;
  }

  const before = questions.length;
  const seen = new Set();
  const deduped = [];

  for (const q of questions) {
    const normalize = s => s.toLowerCase().trim().replace(/\s+/g, ' ').replace(/['']/g, "'").replace(/[""]/g, '"').replace(/\u2014/g, '-').replace(/\u2013/g, '-');
    const key = normalize((q.question || '') + '||' + (q.choices || []).join('||'));
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(q);
    }
  }

  const after = deduped.length;
  const removed = before - after;

  if (removed > 0) {
    const prefix = usesWindow ? `window.${varName}` : usesVar ? `var ${varName}` : varName;
    const output = `${prefix} = ${JSON.stringify(deduped, null, 2)};\n`;
    fs.writeFileSync(filePath, output, 'utf8');
  }

  const label = path.basename(file);
  console.log(`${label.padEnd(22)} ${String(before).padStart(7)} ${String(after).padStart(7)} ${String(removed).padStart(9)}`);
  totalBefore += before;
  totalRemoved += removed;
}

console.log('-'.repeat(50));
console.log(`${'TOTAL'.padEnd(22)} ${String(totalBefore).padStart(7)} ${String(totalBefore - totalRemoved).padStart(7)} ${String(totalRemoved).padStart(9)}`);

if (totalRemoved === 0) {
  console.log('\nNo duplicates found. All files unchanged.');
} else {
  console.log(`\nDone. Removed ${totalRemoved} duplicate(s). Files with changes rewritten in place.`);
}
