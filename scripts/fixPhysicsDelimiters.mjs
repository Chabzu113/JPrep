#!/usr/bin/env node
/**
 * fixPhysicsDelimiters.mjs
 *
 * Fixes Unicode math characters in AP Physics 1 and AP Physics C question banks.
 * No Issue 1 (raw LaTeX) was found in these files — all four files exclusively
 * have Issue 2 (Unicode math used instead of LaTeX).
 *
 * Replacement rules
 * ─────────────────
 * SAFE (applied unconditionally when outside existing $…$ delimiters):
 *   ½         → $\frac{1}{2}$
 *   − (U+2212) → -                   (Unicode minus → ASCII hyphen)
 *   ²         → $X^2$  (when preceded by letter or digit)
 *   ³         → $X^3$  (when preceded by letter or digit)
 *   ≈         → $\approx$
 *   ≤         → $\leq$
 *   ≥         → $\geq$
 *   ≠         → $\neq$
 *   ∞         → $\infty$
 *   × 10      → $\times$ 10          (scientific notation only)
 *
 * CONSERVATIVE (only when context strongly implies math variable, not unit):
 *   ω → $\omega$    only when followed by t or (   (ωt, ω()
 *   Δ → $\Delta X$  only when followed by exactly one letter  (Δt, Δx, Δv …)
 *   μ → $\mu$       only when NOT followed by C m s g F H T N L (SI unit prefixes)
 *
 * SKIP — flagged for manual review, not auto-replaced:
 *   σ, φ, θ  (too context-dependent)
 *
 * Fields processed:
 *   MCQ files : question, choices[], explanation
 *   FRQ files : prompt, parts[].question, parts[].rubric, rubric[].description
 *   NOT processed: rubric[].keywords[], rubric[].proximity.* (answer-matching strings)
 *
 * Usage:
 *   node scripts/fixPhysicsDelimiters.mjs            # dry-run (default, no writes)
 *   node scripts/fixPhysicsDelimiters.mjs --write    # apply changes + sync to electron/
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DRY_RUN = !process.argv.includes('--write');

const FILES = [
  {
    src: 'js/data/physics_mcq.js',
    electron: 'electron/js/data/physics_mcq.js',
    varDecl: 'window.PHYSICS_MCQ',
    type: 'mcq',
  },
  {
    src: 'js/data/physc_mcq.js',
    electron: 'electron/js/data/physc_mcq.js',
    varDecl: 'window.PHYSC_MCQ',
    type: 'mcq',
  },
  {
    src: 'js/data/physics_frq.js',
    electron: 'electron/js/data/physics_frq.js',
    varDecl: 'window.PHYSICS_FRQ',
    type: 'frq',
  },
  {
    src: 'js/data/apphyscem_frq.js',
    electron: 'electron/js/data/apphyscem_frq.js',
    varDecl: 'window.APPHYSCEM_FRQ',
    type: 'frq',
  },
];

// ─── Rule registry (for dry-run reporting) ────────────────────────────────────

const RULE_LABELS = {
  half:   '½ → $\\frac{1}{2}$',
  minus:  '− (U+2212) → -',
  sup2:   'X² → $X^2$',
  sup3:   'X³ → $X^3$',
  approx: '≈ → $\\approx$',
  leq:    '≤ → $\\leq$',
  geq:    '≥ → $\\geq$',
  neq:    '≠ → $\\neq$',
  infty:  '∞ → $\\infty$',
  times:  '× 10 → $\\times$ 10',
  omega:  'ω[t(] → $\\omega$',
  delta:  'Δ[letter] → $\\Delta X$',
  mu:     'μ (non-unit) → $\\mu$',
};

// Per-rule stats: count of field-level hits + up to 3 examples each
const ruleStats = Object.fromEntries(
  Object.keys(RULE_LABELS).map(k => [k, { count: 0, examples: [] }])
);

// Manual review: chars we skip but flag
const FLAGGED_ITEMS = [];

// ─── Parsing / serialization ──────────────────────────────────────────────────

function parseJSDataFile(content) {
  const startIdx = content.indexOf('[');
  const endIdx = content.lastIndexOf(']');
  if (startIdx === -1 || endIdx === -1) throw new Error('Array brackets not found');
  return JSON.parse(content.slice(startIdx, endIdx + 1));
}

function serializeJSDataFile(varDecl, data, strict) {
  const prefix = strict ? "'use strict';\n" : '';
  return `${prefix}${varDecl} = ${JSON.stringify(data, null, 2)};\n`;
}

// ─── Region-aware processing (skip existing $…$ blocks) ──────────────────────

const EXISTING_DELIMITERS = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;

function applyToPlainRegions(str, transform) {
  if (!str || typeof str !== 'string') return str;
  const parts = [];
  let lastIndex = 0;
  EXISTING_DELIMITERS.lastIndex = 0;
  let match;
  while ((match = EXISTING_DELIMITERS.exec(str)) !== null) {
    if (match.index > lastIndex) parts.push({ text: str.slice(lastIndex, match.index), math: false });
    parts.push({ text: match[0], math: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < str.length) parts.push({ text: str.slice(lastIndex), math: false });
  return parts.map(p => (p.math ? p.text : transform(p.text))).join('');
}

// ─── The transform (applied to plain-text regions only) ──────────────────────

function recordExample(rule, qId, field, before, after) {
  if (ruleStats[rule].examples.length < 3) {
    ruleStats[rule].examples.push({ id: qId, field, before, after });
  }
  ruleStats[rule].count++;
}

function makeTransform(qId, field) {
  return function transform(plain) {
    let s = plain;

    // ── SAFE ──────────────────────────────────────────────────────────────────

    // ½ → $\frac{1}{2}$
    if (/½/.test(s)) {
      const before = s;
      s = s.replace(/½/g, '$\\frac{1}{2}$');
      recordExample('half', qId, field, before, s);
    }

    // − (U+2212 Unicode minus) → ASCII hyphen-minus
    if (/−/.test(s)) {
      const before = s;
      s = s.replace(/−/g, '-');
      recordExample('minus', qId, field, before, s);
    }

    // X² → $X^2$ and unit fractions → $unit^2$
    // Two-pass approach:
    //   Pass 1 (extended): letter/letter² patterns like m/s², kg/m², N/C²
    //     Wraps the ENTIRE unit expression so the fraction stays together: $m/s^2$
    //   Pass 2 (simple): any remaining X² → $X^2$ (single-variable case)
    // The extended pattern requires at least one / separator, which prevents false
    // positives on math products like at² (no / → falls to simple pass → a$t^2$).
    if (/²/.test(s)) {
      const before = s;
      // Pass 1: unit fractions (e.g. m/s², N/m², kg/m²)
      s = s.replace(
        /([a-zA-Z][a-zA-Z0-9]*(?:\/[a-zA-Z][a-zA-Z0-9]*)+)(²)/g,
        (_, unit) => `$${unit}^2$`
      );
      // Pass 2: simple variables/digits not caught by pass 1
      s = s.replace(/([a-zA-Z0-9])(²)/g, '$$$1^2$$');
      if (s !== before) recordExample('sup2', qId, field, before, s);
    }

    // X³ → $X^3$ (same two-pass logic for cubic superscripts)
    if (/³/.test(s)) {
      const before = s;
      // Pass 1: unit fractions (e.g. m/s³, m³/s)
      s = s.replace(
        /([a-zA-Z][a-zA-Z0-9]*(?:\/[a-zA-Z][a-zA-Z0-9]*)+)(³)/g,
        (_, unit) => `$${unit}^3$`
      );
      // Pass 2: simple variables/digits
      s = s.replace(/([a-zA-Z0-9])(³)/g, '$$$1^3$$');
      if (s !== before) recordExample('sup3', qId, field, before, s);
    }

    // ≈ → $\approx$
    if (/≈/.test(s)) {
      const before = s;
      s = s.replace(/≈/g, '$\\approx$');
      recordExample('approx', qId, field, before, s);
    }

    // ≤ → $\leq$
    if (/≤/.test(s)) {
      const before = s;
      s = s.replace(/≤/g, '$\\leq$');
      recordExample('leq', qId, field, before, s);
    }

    // ≥ → $\geq$
    if (/≥/.test(s)) {
      const before = s;
      s = s.replace(/≥/g, '$\\geq$');
      recordExample('geq', qId, field, before, s);
    }

    // ≠ → $\neq$
    if (/≠/.test(s)) {
      const before = s;
      s = s.replace(/≠/g, '$\\neq$');
      recordExample('neq', qId, field, before, s);
    }

    // ∞ → $\infty$
    if (/∞/.test(s)) {
      const before = s;
      s = s.replace(/∞/g, '$\\infty$');
      recordExample('infty', qId, field, before, s);
    }

    // × before 10 (scientific notation) → $\times$ 10
    if (/×\s*10/.test(s)) {
      const before = s;
      // Use a function to avoid $$ ambiguity in replacement strings
      s = s.replace(/×(\s*10)/g, (_, captured) => `$\\times$${captured}`);
      recordExample('times', qId, field, before, s);
    }

    // ── CONSERVATIVE ──────────────────────────────────────────────────────────

    // ω → $\omega$  only before t or (   (ωt, ω(  — angular frequency in math)
    if (/ω[t(]/.test(s)) {
      const before = s;
      s = s.replace(/ω(?=[t(])/g, '$\\omega$');
      recordExample('omega', qId, field, before, s);
    }

    // Δ → $\Delta X$  only before a single letter (Δt, Δx, Δv, Δp, …)
    if (/Δ[a-zA-Z]/.test(s)) {
      const before = s;
      s = s.replace(/Δ([a-zA-Z])(?![a-zA-Z])/g, (_, letter) => `$\\Delta ${letter}$`);
      if (s !== before) recordExample('delta', qId, field, before, s);
    }

    // μ → $\mu$  only when NOT followed by SI unit symbols (C m s g F H T N L)
    // μC = microcoulombs, μm = micrometers, μs = microseconds, μg = micrograms, etc.
    if (/μ/.test(s)) {
      const before = s;
      s = s.replace(/μ(?![CmsgFHTNL\d])/g, '$\\mu$');
      if (s !== before) recordExample('mu', qId, field, before, s);
    }

    // ── FLAGGED (skip, collect for manual review) ─────────────────────────────
    if (/[σφθ]/.test(s)) {
      const matches = [...s.matchAll(/[σφθ]/g)].map(m => m[0]);
      const unique = [...new Set(matches)].join(', ');
      if (!FLAGGED_ITEMS.find(f => f.id === qId && f.field === field)) {
        FLAGGED_ITEMS.push({
          id: qId,
          field,
          chars: unique,
          snippet: plain.slice(0, 100),
        });
      }
    }

    return s;
  };
}

// ─── Field traversal by file type ────────────────────────────────────────────

function processString(str, qId, field) {
  if (typeof str !== 'string') return str;
  return applyToPlainRegions(str, makeTransform(qId, field));
}

function processQuestion_MCQ(q) {
  const id = q.id || '(unknown)';
  const m = { ...q };
  m.question = processString(q.question, id, 'question');
  if (Array.isArray(q.choices)) {
    m.choices = q.choices.map((c, i) => processString(c, id, `choices[${i}]`));
  }
  m.explanation = processString(q.explanation, id, 'explanation');
  return m;
}

function processQuestion_FRQ(q) {
  const id = q.id || '(unknown)';
  const m = { ...q };

  // Top-level prompt
  m.prompt = processString(q.prompt, id, 'prompt');

  // Parts array: only question and rubric (short rubric string shown to students)
  if (Array.isArray(q.parts)) {
    m.parts = q.parts.map(part => ({
      ...part,
      question: processString(part.question, id, `parts[${part.label}].question`),
      rubric:   processString(part.rubric,   id, `parts[${part.label}].rubric`),
    }));
  }

  // Rubric array: only description (shown to students)
  // Skip keywords[] and proximity.* — those are answer-matching strings
  if (Array.isArray(q.rubric)) {
    m.rubric = q.rubric.map(r => ({
      ...r,
      description: processString(r.description, id, `rubric[${r.index}].description`),
    }));
  }

  return m;
}

// ─── File-level processing ────────────────────────────────────────────────────

function processFile(fileConfig) {
  const srcPath = path.join(ROOT, fileConfig.src);
  const content = readFileSync(srcPath, 'utf8');
  const strict = content.trimStart().startsWith("'use strict'");
  const data = parseJSDataFile(content);

  const processFn = fileConfig.type === 'frq' ? processQuestion_FRQ : processQuestion_MCQ;

  // Snapshot ruleStats counts before processing this file
  const before = Object.fromEntries(Object.keys(RULE_LABELS).map(k => [k, ruleStats[k].count]));

  const modifiedData = data.map(q => {
    const original = JSON.stringify(q);
    const modified = processFn(q);
    return { original, modified, changed: JSON.stringify(modified) !== original };
  });

  // Compute per-file rule hit counts
  const after = Object.fromEntries(Object.keys(RULE_LABELS).map(k => [k, ruleStats[k].count]));
  const fileCounts = Object.fromEntries(Object.keys(RULE_LABELS).map(k => [k, after[k] - before[k]]));

  const questionsChanged = modifiedData.filter(r => r.changed).length;

  return {
    fileConfig,
    data: modifiedData.map(r => r.modified),
    content,
    strict,
    stats: { total: data.length, questionsChanged, fileCounts },
  };
}

// ─── Reporting helpers ────────────────────────────────────────────────────────

const W = 68;
const HR = '─'.repeat(W);
const HRD = '═'.repeat(W);

function trunc(str, max = 85) {
  if (!str) return '(empty)';
  const s = String(str).replace(/\n/g, '\\n');
  return s.length > max ? s.slice(0, max) + '…' : s;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

console.log(`\n${HRD}`);
console.log(`  fixPhysicsDelimiters.mjs — ${DRY_RUN ? 'DRY RUN (no files written)' : 'WRITE MODE'}`);
console.log(`${HRD}\n`);

const results = FILES.map(processFile);

// ── Per-file summary ──────────────────────────────────────────────────────────

let grandTotal = 0;
let grandChanged = 0;

for (const { fileConfig, stats, data, strict } of results) {
  grandTotal += stats.total;
  grandChanged += stats.questionsChanged;

  const rulesHit = Object.entries(stats.fileCounts).filter(([, n]) => n > 0);

  console.log(`┌─ ${fileConfig.src}`);
  console.log(`│  Total questions : ${stats.total}`);
  console.log(`│  Questions changed: ${stats.questionsChanged}`);
  console.log(`│  Rules fired (field-level hits):`);
  if (rulesHit.length === 0) {
    console.log(`│    (none)`);
  } else {
    for (const [rule, count] of rulesHit) {
      console.log(`│    ${RULE_LABELS[rule].padEnd(35)} ${count} hits`);
    }
  }

  if (!DRY_RUN) {
    const newContent = serializeJSDataFile(fileConfig.varDecl, data, strict);
    writeFileSync(path.join(ROOT, fileConfig.src), newContent, 'utf8');
    writeFileSync(path.join(ROOT, fileConfig.electron), newContent, 'utf8');
    console.log(`│`);
    console.log(`│  ✓ Written: ${fileConfig.src}`);
    console.log(`│  ✓ Written: ${fileConfig.electron}`);
  }

  console.log(`└${HR}\n`);
}

// ── Grand totals ──────────────────────────────────────────────────────────────

console.log(HR);
console.log(`  GRAND TOTALS`);
console.log(`  Total questions   : ${grandTotal}`);
console.log(`  Questions changed : ${grandChanged}`);
console.log(HR);

// ── Per-rule examples ─────────────────────────────────────────────────────────

console.log(`\n  EXAMPLES BY RULE (up to 3 per rule)\n`);

for (const [rule, label] of Object.entries(RULE_LABELS)) {
  const { count, examples } = ruleStats[rule];
  if (count === 0) continue;

  console.log(`  ── ${label}  [${count} field hits] ──`);
  for (const ex of examples) {
    console.log(`    [${ex.id}] ${ex.field}`);
    console.log(`      Before: ${trunc(ex.before)}`);
    console.log(`      After : ${trunc(ex.after)}`);
  }
  console.log();
}

// ── Manual review ─────────────────────────────────────────────────────────────

if (FLAGGED_ITEMS.length > 0) {
  console.log(HR);
  console.log(`  MANUAL REVIEW — σ / φ / θ found in ${FLAGGED_ITEMS.length} field(s)`);
  console.log(`  (these were NOT auto-replaced — too context-dependent)\n`);
  for (const item of FLAGGED_ITEMS) {
    console.log(`  [${item.id}] ${item.field}  chars: ${item.chars}`);
    console.log(`    ${item.snippet}${item.snippet.length >= 100 ? '…' : ''}`);
  }
  console.log(`\n${HR}`);
}

if (DRY_RUN) {
  console.log('\n  Dry run complete. Run with --write to apply changes.\n');
} else {
  console.log('\n  Done. All files written and synced to electron/.\n');
}
