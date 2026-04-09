#!/usr/bin/env node
/**
 * fixCalcDelimiters.mjs
 *
 * Fixes two categories of math rendering issues in AP Calc MCQ data files:
 *
 *   Issue 1 — Raw LaTeX without delimiters (34 questions):
 *     Detects question/choice strings whose entire content is bare LaTeX
 *     (contains \frac, \lim, \begin, etc. but has no $, $$, \(, or \[ wrappers)
 *     and wraps the whole field in $$ ... $$.
 *
 *   Issue 2 — Unicode math in plain text (286 questions):
 *     Replaces Unicode math characters and pseudo-math notations in plain-text
 *     regions (i.e. outside any existing $…$ or \(…\) delimiters) with proper
 *     LaTeX equivalents. Applied to question, choices, and explanation fields.
 *
 * Usage:
 *   node scripts/fixCalcDelimiters.mjs            # dry-run (default, no files written)
 *   node scripts/fixCalcDelimiters.mjs --write    # apply changes and sync to electron/
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DRY_RUN = !process.argv.includes('--write');

const FILES = [
  {
    src: 'js/data/apcalc_mcq.js',
    electron: 'electron/js/data/apcalc_mcq.js',
    varDecl: 'var APCALC_MCQ',
  },
  {
    src: 'js/data/apcalcbc_mcq.js',
    electron: 'electron/js/data/apcalcbc_mcq.js',
    varDecl: 'window.APCALCBC_MCQ',
  },
];

// ─── Parsing helpers ──────────────────────────────────────────────────────────

function parseJSDataFile(content) {
  const startIdx = content.indexOf('[');
  const endIdx = content.lastIndexOf(']');
  if (startIdx === -1 || endIdx === -1) throw new Error('Could not locate array in file');
  return JSON.parse(content.slice(startIdx, endIdx + 1));
}

function serializeJSDataFile(varDecl, data) {
  return `${varDecl} = ${JSON.stringify(data, null, 2)};\n`;
}

// ─── Region-aware string processing ──────────────────────────────────────────
// Split a string into plain-text and already-delimited math regions so that
// Issue 2 replacements never corrupt existing $…$ or \(…\) content.

const EXISTING_DELIMITERS = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;

function applyToPlainRegions(str, transform) {
  if (!str || typeof str !== 'string') return str;

  const parts = [];
  let lastIndex = 0;
  EXISTING_DELIMITERS.lastIndex = 0;
  let match;

  while ((match = EXISTING_DELIMITERS.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: str.slice(lastIndex, match.index), math: false });
    }
    parts.push({ text: match[0], math: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < str.length) {
    parts.push({ text: str.slice(lastIndex), math: false });
  }

  return parts.map(p => (p.math ? p.text : transform(p.text))).join('');
}

// ─── Issue 1: Raw LaTeX detection & wrapping ──────────────────────────────────

const LATEX_CMD = /\\(?:frac|lim|int|begin|sqrt|sum|infty|to|left|right|pi|theta|ln|cos|sin|tan|leq|geq|neq|approx|cdot|times|pm|mp|mathrm|mathbf|end|limits|partial|nabla|text|dfrac|displaystyle)\b/;

function hasAnyDelimiter(str) {
  return /\$|\\\(|\\\[/.test(str);
}

function hasRawLatex(str) {
  if (!str || typeof str !== 'string') return false;
  if (!LATEX_CMD.test(str)) return false;
  // Strip already-delimited regions; check if LaTeX commands remain outside them
  const stripped = str
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$[^$\n]+?\$/g, '')
    .replace(/\\\([\s\S]*?\\\)/g, '')
    .replace(/\\\[[\s\S]*?\\\]/g, '');
  return LATEX_CMD.test(stripped);
}

function fixBareLatex(str) {
  if (!hasRawLatex(str)) return str;
  if (hasAnyDelimiter(str)) return str; // already has some delimiters — don't touch

  const trimmed = str.trimStart();

  // Case 1: Entire string is a pure LaTeX expression (starts with \).
  // These are question/choice fields that are 100% math with no prose prefix.
  if (trimmed.startsWith('\\')) {
    return `$$${str}$$`;
  }

  // Case 2: Choice option with a letter label prefix ("A) ", "B) ", etc.)
  // followed by bare LaTeX — wrap only the math part, preserve the label.
  const choiceMatch = str.match(/^([A-D]\) )([\s\S]+)$/);
  if (choiceMatch) {
    const [, prefix, rest] = choiceMatch;
    if (rest.trimStart().startsWith('\\') && !hasAnyDelimiter(rest)) {
      return `${prefix}$${rest.trim()}$`;
    }
  }

  // Case 3: Mixed prose + embedded LaTeX (e.g. "Let f(x) = \begin{cases}...").
  // Auto-wrapping the whole string would render prose as math text — skip and
  // surface these as "needs manual review" in the report.
  return str;
}

// Collect prose+LaTeX strings that we skipped for manual review
const MIXED_LATEX_CASES = [];

// ─── Issue 2: Unicode math replacements ──────────────────────────────────────

const SUPERSCRIPT_MAP = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
};

const UNICODE_MATH_PATTERN = /[²³¹⁰⁴⁵⁶⁷⁸⁹→≤≥≠∞]|lim\([^)]*→[^)]*\)/;

function hasUnicodeMath(str) {
  return !!str && UNICODE_MATH_PATTERN.test(str);
}

// Transform applied only to plain-text regions
function unicodeMathTransform(plain) {
  let s = plain;

  // 1. lim(x→a) — must run before the standalone → replacement
  //    Handles: lim(x→2), lim(x→∞), lim(x→2⁻), lim(x→2⁺), lim(h→0), lim(n→∞)
  s = s.replace(/lim\(([a-zA-Z]+)→([^)]+)\)/g, (_, variable, value) => {
    // Convert digit+superscript-sign (2⁻ → 2^-, 2⁺ → 2^+) for one-sided limits
    const normalValue = value
      .replace(/([0-9a-zA-Z])⁻/g, '$1^-')
      .replace(/([0-9a-zA-Z])⁺/g, '$1^+')
      .replace(/∞/g, '\\infty')
      .trim();
    return `$\\lim_{${variable} \\to ${normalValue}}$`;
  });

  // 2. letter/digit + superscript digit  →  $x^n$
  s = s.replace(/([a-zA-Z0-9])(²)/g, '$$$1^2$$');
  s = s.replace(/([a-zA-Z0-9])(³)/g, '$$$1^3$$');
  s = s.replace(/([a-zA-Z0-9])(¹)/g, '$$$1^1$$');
  // Remaining high superscript digits (rare, but handle them)
  for (const [uni, digit] of Object.entries(SUPERSCRIPT_MAP)) {
    if (['²', '³', '¹'].includes(uni)) continue;
    s = s.replace(new RegExp(`([a-zA-Z0-9])${uni}`, 'g'), `$$$1^${digit}$$`);
  }

  // 3. Standalone comparison operators
  s = s.replace(/≤/g, '$\\leq$');
  s = s.replace(/≥/g, '$\\geq$');
  s = s.replace(/≠/g, '$\\neq$');
  s = s.replace(/∞/g, '$\\infty$');

  // 4. Remaining → (any that were not consumed by the lim() pattern above)
  s = s.replace(/→/g, '$\\to$');

  return s;
}

function fixUnicodeMath(str) {
  if (!hasUnicodeMath(str)) return str;
  return applyToPlainRegions(str, unicodeMathTransform);
}

// ─── Per-question processing ──────────────────────────────────────────────────

function processQuestion(q) {
  let issue1Fields = 0;
  let issue2Fields = 0;
  const diffs = []; // for dry-run reporting

  function processField(str, fieldName) {
    if (typeof str !== 'string') return str;

    // Flag mixed prose+LaTeX strings that need manual review
    if (hasRawLatex(str) && !hasAnyDelimiter(str) && !str.trimStart().startsWith('\\') && !str.match(/^[A-D]\) /)) {
      MIXED_LATEX_CASES.push({ id: q.id, field: fieldName, snippet: str.slice(0, 100) });
    }

    const after1 = fixBareLatex(str);
    const after2 = fixUnicodeMath(after1);

    if (after1 !== str) issue1Fields++;
    if (after2 !== after1) issue2Fields++;

    if (after2 !== str) {
      diffs.push({ field: fieldName, before: str, after: after2, wasIssue1: after1 !== str, wasIssue2: after2 !== after1 });
    }
    return after2;
  }

  const modified = { ...q };
  modified.question = processField(q.question, 'question');
  if (Array.isArray(q.choices)) {
    modified.choices = q.choices.map((c, i) => processField(c, `choices[${i}]`));
  }
  if (typeof q.explanation === 'string') {
    modified.explanation = processField(q.explanation, 'explanation');
  }

  const changed = issue1Fields > 0 || issue2Fields > 0;
  return { modified, changed, issue1Fields, issue2Fields, diffs };
}

// ─── File-level processing ────────────────────────────────────────────────────

function processFile(fileConfig) {
  const srcPath = path.join(ROOT, fileConfig.src);
  const content = readFileSync(srcPath, 'utf8');
  const data = parseJSDataFile(content);

  const stats = {
    total: data.length,
    modified: 0,
    issue1Questions: 0,
    issue2Questions: 0,
    sampleDiffs: [],    // up to 4 examples of each issue type
    issue1Samples: [],
    issue2Samples: [],
  };

  const modifiedData = data.map(q => {
    const { modified, changed, issue1Fields, issue2Fields, diffs } = processQuestion(q);

    if (changed) {
      stats.modified++;
      if (issue1Fields > 0) {
        stats.issue1Questions++;
        if (stats.issue1Samples.length < 4) {
          const d = diffs.find(x => x.field === 'question');
          stats.issue1Samples.push({ id: q.id, diff: d || diffs[0] });
        }
      }
      if (issue2Fields > 0) {
        stats.issue2Questions++;
        if (stats.issue2Samples.length < 4) {
          // Prefer a diff that is ONLY an Issue 2 change (not also Issue 1),
          // and prefer question/choices fields over explanation.
          const d =
            diffs.find(x => x.wasIssue2 && !x.wasIssue1 && (x.field === 'question' || x.field.startsWith('choices'))) ||
            diffs.find(x => x.wasIssue2 && !x.wasIssue1) ||
            diffs.find(x => x.wasIssue2);
          if (d) stats.issue2Samples.push({ id: q.id, diff: d });
        }
      }
    }

    return modified;
  });

  return { stats, modifiedData, fileConfig };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function truncate(str, max = 90) {
  if (!str) return '(empty)';
  const s = str.replace(/\n/g, '\\n');
  return s.length > max ? s.slice(0, max) + '…' : s;
}

console.log(`\n${'═'.repeat(65)}`);
console.log(`  fixCalcDelimiters.mjs — ${DRY_RUN ? 'DRY RUN (no files written)' : 'WRITE MODE'}`);
console.log(`${'═'.repeat(65)}\n`);

let grandTotal = 0;
let grandModified = 0;
let grandIssue1 = 0;
let grandIssue2 = 0;

const results = FILES.map(processFile);

for (const { stats, modifiedData, fileConfig } of results) {
  grandTotal += stats.total;
  grandModified += stats.modified;
  grandIssue1 += stats.issue1Questions;
  grandIssue2 += stats.issue2Questions;

  console.log(`┌─ ${fileConfig.src}`);
  console.log(`│  Total questions : ${stats.total}`);
  console.log(`│  To be modified  : ${stats.modified}`);
  console.log(`│    Issue 1 (bare LaTeX)   : ${stats.issue1Questions} questions`);
  console.log(`│    Issue 2 (unicode math) : ${stats.issue2Questions} questions`);

  if (stats.issue1Samples.length > 0) {
    console.log(`│`);
    console.log(`│  Issue 1 examples:`);
    for (const { id, diff } of stats.issue1Samples) {
      console.log(`│    [${id}] ${diff?.field}`);
      console.log(`│      Before: ${truncate(diff?.before)}`);
      console.log(`│      After : ${truncate(diff?.after)}`);
    }
  }

  if (stats.issue2Samples.length > 0) {
    console.log(`│`);
    console.log(`│  Issue 2 examples:`);
    for (const { id, diff } of stats.issue2Samples) {
      console.log(`│    [${id}] ${diff?.field}`);
      console.log(`│      Before: ${truncate(diff?.before)}`);
      console.log(`│      After : ${truncate(diff?.after)}`);
    }
  }

  if (!DRY_RUN) {
    const newContent = serializeJSDataFile(fileConfig.varDecl, modifiedData);
    const srcPath = path.join(ROOT, fileConfig.src);
    const electronPath = path.join(ROOT, fileConfig.electron);
    writeFileSync(srcPath, newContent, 'utf8');
    writeFileSync(electronPath, newContent, 'utf8');
    console.log(`│`);
    console.log(`│  ✓ Written: ${fileConfig.src}`);
    console.log(`│  ✓ Written: ${fileConfig.electron}`);
  }

  console.log(`└${'─'.repeat(63)}\n`);
}

console.log(`${'─'.repeat(65)}`);
console.log(`  TOTALS`);
console.log(`  Total questions   : ${grandTotal}`);
console.log(`  Questions changed : ${grandModified}`);
console.log(`  Issue 1 fixes     : ${grandIssue1}`);
console.log(`  Issue 2 fixes     : ${grandIssue2}`);
console.log(`${'─'.repeat(65)}\n`);

if (MIXED_LATEX_CASES.length > 0) {
  console.log(`\n${'─'.repeat(65)}`);
  console.log(`  NEEDS MANUAL REVIEW — prose+LaTeX strings (${MIXED_LATEX_CASES.length} fields)`);
  console.log(`  (LaTeX commands found outside delimiters in text that starts with prose)`);
  console.log(`${'─'.repeat(65)}`);
  for (const c of MIXED_LATEX_CASES) {
    console.log(`  [${c.id}] ${c.field}`);
    console.log(`    ${c.snippet}${c.snippet.length >= 100 ? '…' : ''}`);
  }
  console.log();
}

if (DRY_RUN) {
  console.log('  Dry run complete. Run with --write to apply changes.\n');
} else {
  console.log('  Done. All files written and synced to electron/.\n');
}
