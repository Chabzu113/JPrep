/**
 * smokeTestFRQGraders.mjs
 *
 * Smoke-tests GenericFRQGrader and APUSHGrader against real FRQ data.
 * Run with:  node scripts/smokeTestFRQGraders.mjs
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── File loader helpers ──────────────────────────────────────────────────────

/** Execute a browser-style JS file that uses `var X = [...]` at top level.
 *  Returns the value of `returnVar` from that file's scope. */
function loadDataFile(relPath, returnVar) {
  const code = readFileSync(path.join(ROOT, relPath), 'utf8');
  // eslint-disable-next-line no-new-func
  return new Function('window', code + '\nreturn ' + returnVar + ';')({});
}

/** Execute a browser-style JS file that assigns to window.X.
 *  Merges everything it sets onto `win`. */
function loadIntoWindow(relPath, win, extraParams, extraArgs) {
  const code = readFileSync(path.join(ROOT, relPath), 'utf8');
  const paramNames = ['window', ...(extraParams || [])];
  const args       = [win,      ...(extraArgs   || [])];
  // eslint-disable-next-line no-new-func
  new Function(...paramNames, code)(...args);
}

// ── Load shared window and grader files ─────────────────────────────────────

const win = {};

const FRQ_CONFIGS = loadDataFile('js/data/frqConfigs.js', 'FRQ_CONFIGS');
win.FRQ_CONFIGS   = FRQ_CONFIGS;    // make accessible via window.FRQ_CONFIGS too

loadIntoWindow('js/genericFRQGrader.js', win);
// APUSHGrader references FRQ_CONFIGS as a free variable; pass it explicitly
// so closures inside the IIFE capture it via scope chain.
loadIntoWindow('js/apushGrader.js', win, ['FRQ_CONFIGS'], [FRQ_CONFIGS]);

const { GenericFRQGrader, APUSHGrader } = win;

// ── Load FRQ data banks ──────────────────────────────────────────────────────

const NON_APUSH_BANKS = [
  { subject: 'apbio',    file: 'js/data/apbio_frq.js',    varName: 'APBIO_FRQ'    },
  { subject: 'apmicro',  file: 'js/data/apmicro_frq.js',  varName: 'APMICRO_FRQ'  },
  { subject: 'apmacro',  file: 'js/data/apmacro_frq.js',  varName: 'APMACRO_FRQ'  },
  { subject: 'apgov',    file: 'js/data/apgov_frq.js',    varName: 'APGOV_FRQ'    },
  { subject: 'apenviro', file: 'js/data/apenviro_frq.js',  varName: 'APENVIRO_FRQ'  },
  { subject: 'apcsa',    file: 'js/data/apcsa_frq.js',    varName: 'APCSA_FRQ'     },
];

const APUSH_DATA = loadDataFile('js/data/apush_frq.js', 'APUSH_FRQ');

// ── Ideal-answer builder for GenericFRQGrader ────────────────────────────────
// There is no idealResponse on question objects.  Instead we build a text that
// contains the first keyword for every rubric item associated with each part,
// which is guaranteed to satisfy the keyword-bucket scan.
function buildGenericIdealAnswer(question) {
  const answerObj = {};
  const partLabels = (question.parts || []).map(p => p.label);
  for (const label of partLabels) {
    answerObj[label] = '';
  }

  for (const item of (question.rubric || [])) {
    const label = item.partLabel || partLabels[0];
    if (!(label in answerObj)) answerObj[label] = '';
    const kws = (item.keywords || []).slice(0, 4);
    answerObj[label] += ' ' + kws.join('. ') + '. ';
  }
  return answerObj;
}

function buildGenericGarbageAnswer(question) {
  const answerObj = {};
  for (const part of (question.parts || [])) {
    answerObj[part.label] = 'xkqzwv blorp nope';
  }
  if (Object.keys(answerObj).length === 0) {
    answerObj['a'] = 'xkqzwv blorp nope';
  }
  return answerObj;
}

// ── Ideal-answer builder for APUSHGrader ────────────────────────────────────
// Uses standard evidence terms + causal connectors from FRQ_CONFIGS.
function buildAPUSHIdealText(question) {
  const unitNum = (question.units || [])[0] || 1;
  const unitCfg = (FRQ_CONFIGS.apush.units || {})[unitNum] || {};
  const terms   = (unitCfg.standard || []).slice(0, 6);
  const niche   = (unitCfg.niche    || []).slice(0, 2);

  // Craft a paragraph that hits: prior-era keyword, reasoning word, evidence
  // terms, causal connectors, and transitional phrases.
  const t = terms.length >= 2 ? terms : ['colonial expansion', 'economic growth'];
  const n = niche.length  >= 1 ? niche : ['regional trade'];

  return (
    `Prior to this period, historical forces fundamentally shaped society. ` +
    `The ${t[0]} caused significant changes because it led to the transformation of ` +
    `colonial structures. While ${t[1] || t[0]} demonstrated continuity in some regions, ` +
    `comparison shows that ${t[2] || t[0]} resulted in increased tensions. ` +
    `Although ${t[3] || t[0]} altered power dynamics, the ${n[0]} contributed to ` +
    `further shifts in economic organization. The ${t[4] || t[0]} prompted resistance, ` +
    `whereas ${t[5] || t[0]} primarily reinforced existing hierarchies. ` +
    `To a greater extent, these developments stemmed from earlier patterns rooted in ` +
    `the consequences of the Columbian Exchange and European imperial ambitions.`
  );
}

function buildAPUSHIdealAnswer(question) {
  const frqType = question.frqType;
  const idealText = buildAPUSHIdealText(question);

  if (frqType === 'saq') {
    return { a: idealText, b: idealText, c: idealText };
  }
  // leq / dbq — single string
  return idealText;
}

function buildAPUSHGarbageAnswer(question) {
  const frqType = question.frqType;
  const garbage = 'xkqzwv blorp nope';
  if (frqType === 'saq') {
    return { a: garbage, b: garbage, c: garbage };
  }
  return garbage;
}

// ── Test runner ──────────────────────────────────────────────────────────────

const results = [];   // { subject, total, passA, passB, issues[] }

// ── Non-APUSH banks ──────────────────────────────────────────────────────────

for (const bank of NON_APUSH_BANKS) {
  const allQuestions = loadDataFile(bank.file, bank.varName);
  const autoGraded   = allQuestions.filter(q => q.autoGraded === true);
  const sample       = autoGraded.slice(0, 5);

  let passA = 0, passB = 0;
  const issues = [];

  for (const q of sample) {
    const subjectConfig = FRQ_CONFIGS[q.subject] || {};
    const unitNum       = (q.units || [])[0] || 1;
    const totalMax      = (q.rubric || []).reduce((s, r) => s + (r.points || 1), 0);

    // ── Test A: ideal answer ───────────────────────────────────────────────
    let resultA;
    try {
      const answerObj = buildGenericIdealAnswer(q);
      resultA = GenericFRQGrader.grade(answerObj, q.frqType, unitNum, q, subjectConfig);
    } catch (err) {
      issues.push(`CRASH Test A [${q.id}]: ${err.message}`);
      continue;
    }

    const earnedA = resultA.score.total;
    const maxA    = resultA.score.max || totalMax;
    const passRate = maxA > 0 ? earnedA / maxA : 0;

    if (passRate >= 0.6) {
      passA++;
    } else {
      const notAwarded = (resultA.points_earned || [])
        .filter(p => !p.awarded)
        .map(p => `"${p.description.slice(0, 60)}"`)
        .join('; ');
      issues.push(`FAIL-A [${q.id}] score=${earnedA}/${maxA} — not awarded: ${notAwarded}`);
    }

    // ── Test B: garbage answer ─────────────────────────────────────────────
    let resultB;
    try {
      const garbageObj = buildGenericGarbageAnswer(q);
      resultB = GenericFRQGrader.grade(garbageObj, q.frqType, unitNum, q, subjectConfig);
    } catch (err) {
      issues.push(`CRASH Test B [${q.id}]: ${err.message}`);
      continue;
    }

    const earnedB = resultB.score.total;
    if (earnedB === 0) {
      passB++;
    } else {
      const wrongFired = (resultB.points_earned || [])
        .filter(p => p.awarded)
        .map(p => `"${p.description.slice(0, 60)}"`)
        .join('; ');
      issues.push(`FAIL-B [${q.id}] garbage earned ${earnedB}pts — fired: ${wrongFired}`);
    }
  }

  results.push({
    subject: bank.subject,
    total:   sample.length,
    passA,
    passB,
    issues,
  });
}

// ── APUSH bank ───────────────────────────────────────────────────────────────

{
  const frqTypes = ['saq', 'leq', 'dbq'];
  let passA = 0, passB = 0, total = 0;
  const issues = [];

  for (const frqType of frqTypes) {
    const typed  = APUSH_DATA.filter(q => q.autoGraded === true && q.frqType === frqType);
    const sample = typed.slice(0, 3);

    for (const q of sample) {
      total++;
      const unitNum = (q.units || [])[0] || 1;

      // ── Test A: ideal answer ─────────────────────────────────────────────
      let resultA;
      try {
        const answer = buildAPUSHIdealAnswer(q);
        resultA = APUSHGrader.grade(answer, q.frqType, unitNum, 'apush', q);
      } catch (err) {
        issues.push(`CRASH Test A [${q.id}]: ${err.message}`);
        continue;
      }

      if (resultA.score && typeof resultA.score.total === 'number' && resultA.score.total >= 1) {
        passA++;
      } else {
        issues.push(
          `FAIL-A [${q.id}] frqType=${frqType} score=${resultA.score ? resultA.score.total : 'n/a'} — expected >= 1`
        );
      }

      // ── Test B: garbage answer ───────────────────────────────────────────
      let resultB;
      try {
        const garbage = buildAPUSHGarbageAnswer(q);
        resultB = APUSHGrader.grade(garbage, q.frqType, unitNum, 'apush', q);
      } catch (err) {
        issues.push(`CRASH Test B [${q.id}]: ${err.message}`);
        continue;
      }

      if (resultB.score && typeof resultB.score.total === 'number') {
        passB++;
      } else {
        issues.push(`FAIL-B [${q.id}] frqType=${frqType} — score.total is not a number`);
      }
    }
  }

  results.push({ subject: 'apush', total, passA, passB, issues });
}

// ── Summary table ─────────────────────────────────────────────────────────────

const COL = { subject: 10, tested: 6, passA: 14, passB: 14, issues: 6 };

function pad(str, len) {
  return String(str).padEnd(len);
}

console.log('');
console.log(
  pad('Subject',  COL.subject) + ' | ' +
  pad('Tested',   COL.tested)  + ' | ' +
  pad('Test A',   COL.passA)   + ' | ' +
  pad('Test B',   COL.passB)   + ' | ' +
  'Issues'
);
console.log('-'.repeat(COL.subject + COL.tested + COL.passA + COL.passB + COL.issues + 12));

let anyWarn = false;

for (const r of results) {
  const rateA = r.total > 0 ? r.passA / r.total : 0;
  const rateB = r.total > 0 ? r.passB / r.total : 0;

  const labelA = `${r.passA}/${r.total} (${Math.round(rateA * 100)}%)`;
  const labelB = `${r.passB}/${r.total} (${Math.round(rateB * 100)}%)`;

  const warnA = rateA < 0.8 ? ' ⚠' : '';
  const warnB = rateB < 1.0 ? ' ⚠' : '';

  if (warnA || warnB) anyWarn = true;

  console.log(
    pad(r.subject,          COL.subject) + ' | ' +
    pad(r.total,            COL.tested)  + ' | ' +
    pad(labelA + warnA,     COL.passA)   + ' | ' +
    pad(labelB + warnB,     COL.passB)   + ' | ' +
    r.issues.length
  );
}

console.log('');

// ── Print issues ─────────────────────────────────────────────────────────────

const allIssues = results.flatMap(r => r.issues.map(msg => ({ subject: r.subject, msg })));

if (allIssues.length === 0) {
  console.log('All tests passed with no issues.');
} else {
  for (const { subject, msg } of allIssues) {
    const isWarn = msg.startsWith('FAIL') || msg.startsWith('CRASH');
    console.log((isWarn ? 'WARN: ' : '') + '[' + subject + '] ' + msg);
  }
}

console.log('');

// ── Final verdict ─────────────────────────────────────────────────────────────

if (!anyWarn && allIssues.length === 0) {
  console.log('✓ Smoke test PASSED');
} else {
  const failCount = allIssues.length;
  console.log(`✗ Smoke test finished with ${failCount} issue(s) — see WARN lines above.`);
  process.exit(1);
}
