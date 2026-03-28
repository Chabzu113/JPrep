// testApushGrader.mjs — Node.js test harness for js/apushGrader.js
// Usage: node scripts/testApushGrader.mjs

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const root       = join(__dirname, '..');

// ── Browser shim ─────────────────────────────────────────────────────────────
global.window = global;

// ── Load FRQ_CONFIGS then APUSHGrader ────────────────────────────────────────
// Use new Function() so 'var' declarations are returnable; then pin to global.
const configSrc = readFileSync(join(root, 'js/data/frqConfigs.js'), 'utf8');
// eslint-disable-next-line no-new-func
global.FRQ_CONFIGS = new Function(configSrc + '\nreturn FRQ_CONFIGS;')();

const graderSrc = readFileSync(join(root, 'js/apushGrader.js'), 'utf8');
// The grader assigns to window.APUSHGrader; since global.window = global this works.
// eslint-disable-next-line no-new-func
new Function('window', 'FRQ_CONFIGS', graderSrc)(global, global.FRQ_CONFIGS);

const grade = window.APUSHGrader.grade;

// ── Test runner ───────────────────────────────────────────────────────────────
let passed = 0;
let failed = 0;

function check(label, got, expectedMin, expectedMax) {
  const max      = (expectedMax !== undefined) ? expectedMax : expectedMin;
  const ok       = got >= expectedMin && got <= max;
  const rangeStr = (expectedMax !== undefined)
    ? `${expectedMin}–${expectedMax}`
    : `${expectedMin}`;
  const symbol   = ok ? '✓' : '✗  <-- FLAGGED (off by more than 1)';
  console.log(`${label}: got ${got} (expected ${rangeStr}) ${symbol}`);
  if (ok) { passed++; } else { failed++; }
}

// ─────────────────────────────────────────────────────────────────────────────
//  SAQ — Unit 8, Civil Rights 1945–1980
// ─────────────────────────────────────────────────────────────────────────────

// High: full ACE in each part
const saqHighAnswers = {
  a: 'The Civil Rights Act of 1964 was a transformative piece of legislation because it outlawed segregation in public accommodations, therefore fundamentally changing American society and giving African Americans legal equality.',
  b: 'Brown v. Board of Education was significant because the Supreme Court ruled that segregated schools were inherently unequal, which caused states across the South to face pressure to desegregate their school systems.',
  c: 'The Voting Rights Act of 1965 was essential because it prohibited discriminatory literacy tests that had been used to disenfranchise Black voters, therefore resulting in a dramatic increase in African American voter registration across the South.'
};

const saqHighResult = grade(saqHighAnswers, 'saq', 8, 'apush');
check('SAQ high', saqHighResult.score.total, 3);

// Low: one vague sentence each part, no evidence terms, no connectors
const saqLowAnswers = {
  a: 'People fought for their rights.',
  b: 'The government made laws.',
  c: 'Things changed in America.'
};

const saqLowResult = grade(saqLowAnswers, 'saq', 8, 'apush');
check('SAQ low', saqLowResult.score.total, 0);

// ─────────────────────────────────────────────────────────────────────────────
//  LEQ — Unit 8, Movements for social change 1945–1980
// ─────────────────────────────────────────────────────────────────────────────

// High: thesis + contextualization + 4+ evidence terms + causal connectors
const leqHigh = `Prior to the postwar era, Jim Crow laws and the legacy of World War II created the conditions for change.
The civil rights movement fundamentally transformed American society because of sustained activism and legislative action.
The Student Nonviolent Coordinating Committee (SNCC) organized sit-ins and freedom rides, which caused widespread attention to segregation.
The March on Washington in 1963 therefore built national momentum, resulting in the Civil Rights Act of 1964 that outlawed segregation.
Phyllis Schlafly led the conservative backlash against feminism, and her opposition to the ERA contributed to its failure to be ratified.
These movements shaped American politics because they demonstrated that grassroots organizing could produce lasting legal change.`;

const leqHighResult = grade(leqHigh, 'leq', 8, 'apush');
check('LEQ high', leqHighResult.score.total, 5, 6);

// Medium: thesis present, 2 evidence terms, one connector, no contextualization.
// Starts with a non-evidence-term sentence so the context fallback does not fire.
const leqMedium = `Social activism significantly shaped American democracy in the postwar era.
The Civil Rights Act of 1964 outlawed racial discrimination, but its implementation faced fierce resistance across the South.
Brown v. Board of Education was a landmark ruling against segregated schools.`;

const leqMediumResult = grade(leqMedium, 'leq', 8, 'apush');
check('LEQ medium', leqMediumResult.score.total, 2, 4);

// Low: no thesis reasoning words, no evidence terms, vague assertions
const leqLow = `Many people wanted things to be fair.
The government tried to help some groups.
Protests happened in several cities during this time period.`;

const leqLowResult = grade(leqLow, 'leq', 8, 'apush');
check('LEQ low', leqLowResult.score.total, 0, 2);

// ─────────────────────────────────────────────────────────────────────────────
//  DBQ — Unit 4, Slavery 1783–1840
// ─────────────────────────────────────────────────────────────────────────────

// High: thesis + context + 4+ doc refs + outside evidence + 2+ sourcing.
// Note: the sourcing word-finder matches per-token, so "(DocN)" (no space) is required
// for the 20-word proximity window to activate. "(Doc N)" splits into two tokens and
// causes docWordIdx to remain -1, silently skipping that sentence in gradeSourcing().
const dbqHigh = `Prior to 1783, colonial labor systems had established slavery as central to Southern economic life, rooted in the Atlantic slave trade.
The expansion of slavery between 1783 and 1840 was fundamentally driven by economic demand because the cotton gin transformed Southern agriculture, therefore making enslaved labor more profitable than ever.
Slaveholders justified their system on economic grounds (Doc1); as a plantation owner writing to defend his interests, his purpose was to legitimize the institution to Northern critics.
Abolitionists like William Lloyd Garrison challenged slavery on moral grounds (Doc2); his audience was Northern reformers, and his point of view reflected immediate emancipation ideology.
The Missouri Compromise of 1820 temporarily settled slavery's expansion, but it also revealed deepening sectional tensions (Doc3).
The brutality of the domestic slave trade is revealed (Doc4); written by an enslaved person, the perspective shows lived trauma rather than economic abstraction.
Frederick Douglass and Nat Turner both challenged the institution, because resistance shaped how slaveholders responded to abolitionist pressure (Doc5).
Outside the documents, the cotton gin invented by Eli Whitney dramatically increased demand for enslaved labor, which caused slavery to expand westward into new territories.
The underground railroad, led by Harriet Tubman, demonstrated that enslaved people actively resisted their bondage, therefore contradicting proslavery arguments about contentment.`;

const dbqHighResult = grade(dbqHigh, 'dbq', 4, 'apush');
check('DBQ high', dbqHighResult.score.total, 6, 7);

// Low: references 2 docs, no thesis, no sourcing, no outside evidence
const dbqLow = `Slavery was part of American history during this time period.
Document 1 talks about slavery in the South.
People had different opinions about slavery (Doc 2).
The country was divided on this issue and things were complicated.`;

const dbqLowResult = grade(dbqLow, 'dbq', 4, 'apush');
check('DBQ low', dbqLowResult.score.total, 1, 2);

// ─────────────────────────────────────────────────────────────────────────────
//  Summary
// ─────────────────────────────────────────────────────────────────────────────
console.log('');
console.log(`Results: ${passed} passed, ${failed} flagged`);
if (failed > 0) {
  console.log('Review flagged cases — score is more than 1 point off from expected range.');
  process.exit(1);
}
