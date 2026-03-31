// scripts/generateFRQ.mjs
// JPrep FRQ Generator + Inline Audit
// Usage: node scripts/generateFRQ.mjs --subject apbio [--unit 3] [--wipe]
// Requires: AWS credentials configured (aws configure) + Bedrock Sonnet access

import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import fs from 'fs';
import path from 'path';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const MODEL_ID = "us.anthropic.claude-sonnet-4-6";
const BATCH_SIZE = 2;
const DBQ_BATCH_SIZE = 1;
const DELAY_MS = 2500;
const MAX_TOKENS = 8192;
const DATA_DIR = './js/data';

const client = new BedrockRuntimeClient({ region: "us-east-1" });

// ─── SUBJECT DEFINITIONS ─────────────────────────────────────────────────────

const SUBJECTS = {
  apbio: {
    globalVar: 'APBIO_FRQ',
    outputFile: 'js/data/apbio_frq.js',
    idPrefix: 'bio',
    useWindow: false,
    targets: { short: 4, long: 2 },
    units: {
      1: { topics: ['water properties', 'hydrogen bonds', 'pH', 'carbon chemistry', 'macromolecules', 'proteins', 'lipids', 'carbohydrates', 'nucleic acids', 'dehydration synthesis', 'hydrolysis'] },
      2: { topics: ['cell structure', 'organelles', 'prokaryote vs eukaryote', 'membrane structure', 'fluid mosaic model', 'membrane transport', 'osmosis', 'tonicity', 'active transport', 'endocytosis', 'exocytosis'] },
      3: { topics: ['enzymes', 'activation energy', 'enzyme inhibition', 'ATP', 'glycolysis', 'Krebs cycle', 'electron transport chain', 'fermentation', 'photosynthesis', 'light reactions', 'Calvin cycle'] },
      4: { topics: ['cell signaling', 'signal transduction', 'second messengers', 'cell cycle', 'mitosis', 'cyclin CDK', 'apoptosis', 'cancer', 'checkpoints'] },
      5: { topics: ['meiosis', 'crossing over', 'independent assortment', 'Mendelian genetics', 'monohybrid cross', 'dihybrid cross', 'sex-linked traits', 'incomplete dominance', 'codominance', 'epistasis'] },
      6: { topics: ['DNA structure', 'DNA replication', 'transcription', 'RNA processing', 'translation', 'genetic code', 'mutations', 'gene regulation', 'operons', 'CRISPR', 'gel electrophoresis'] },
      7: { topics: ['natural selection', 'types of selection', 'Hardy-Weinberg', 'genetic drift', 'gene flow', 'speciation', 'phylogenetics', 'cladograms', 'molecular clocks'] },
      8: { topics: ['population growth', 'logistic growth', 'carrying capacity', 'predator-prey', 'competition', 'symbiosis', 'succession', 'energy flow', 'biogeochemical cycles', 'human impact'] },
    }
  },
  apcalc: {
    globalVar: 'APCALC_FRQ',
    outputFile: 'js/data/apcalc_frq.js',
    idPrefix: 'calc',
    useWindow: false,
    targets: { short: 4, long: 2 },
    units: {
      1: { topics: ['limits graphically', 'limits algebraically', 'limit laws', 'one-sided limits', 'limits at infinity', 'squeeze theorem', 'continuity', 'types of discontinuity', 'IVT'] },
      2: { topics: ['average rate of change', 'instantaneous rate of change', 'definition of derivative', 'differentiability', 'power rule', 'constant rule', 'sum rule', 'trig derivatives', 'higher order derivatives'] },
      3: { topics: ['chain rule', 'product rule', 'quotient rule', 'implicit differentiation', 'inverse trig derivatives', 'logarithmic differentiation'] },
      4: { topics: ['related rates', 'linearization', 'L\'Hopital\'s rule', 'mean value theorem', 'Rolle\'s theorem', 'extreme value theorem'] },
      5: { topics: ['critical points', 'first derivative test', 'second derivative test', 'concavity', 'inflection points', 'optimization', 'curve sketching'] },
      6: { topics: ['antiderivatives', 'indefinite integrals', 'Riemann sums', 'definite integrals', 'FTC part 1', 'FTC part 2', 'average value', 'net change theorem'] },
      7: { topics: ['u-substitution indefinite', 'u-substitution definite', 'trig integrals', 'long division', 'completing the square'] },
      8: { topics: ['area between curves', 'volumes disc method', 'volumes washer method', 'volumes shell method', 'arc length', 'motion problems with integrals'] },
    }
  },
  apstats: {
    globalVar: 'APSTATS_FRQ',
    outputFile: 'js/data/apstats_frq.js',
    idPrefix: 'stats',
    useWindow: false,
    targets: { short: 6 },
    units: {
      1: { topics: ['categorical vs quantitative', 'frequency tables', 'bar charts', 'histograms', 'dotplots', 'mean median mode', 'IQR standard deviation', 'boxplots', 'outliers', 'normal distribution', 'z-scores', 'percentiles'] },
      2: { topics: ['scatterplots', 'direction strength form', 'correlation coefficient', 'least squares regression', 'residuals', 'residual plots', 'coefficient of determination', 'influential points', 'extrapolation'] },
      3: { topics: ['observational study vs experiment', 'sampling methods', 'bias types', 'experimental design', 'control group', 'randomization', 'blocking', 'confounding variables', 'placebo', 'double blind'] },
      4: { topics: ['sample space', 'addition rule', 'multiplication rule', 'conditional probability', 'independence', 'discrete random variables', 'expected value', 'variance', 'binomial distribution', 'geometric distribution'] },
      5: { topics: ['sampling distribution of proportion', 'sampling distribution of mean', 'central limit theorem', 'standard error', 'unbiasedness', 'variability'] },
      6: { topics: ['one proportion z-interval', 'one proportion z-test', 'two proportion z-interval', 'two proportion z-test', 'conditions for inference', 'type I error', 'type II error', 'power'] },
      7: { topics: ['one sample t-interval', 'one sample t-test', 'two sample t-interval', 'two sample t-test', 'paired t-test', 't-distribution', 'degrees of freedom'] },
      8: { topics: ['chi-square goodness of fit', 'chi-square independence', 'chi-square homogeneity', 'expected counts', 'chi-square statistic'] },
      9: { topics: ['inference for slope', 'confidence interval for slope', 'significance test for slope', 't-statistic for slope', 'SE of slope'] },
    }
  },
  apmicro: {
    globalVar: 'APMICRO_FRQ',
    outputFile: 'js/data/apmicro_frq.js',
    idPrefix: 'micro',
    useWindow: false,
    targets: { short: 3, long: 2 },
    units: {
      1: { topics: ['scarcity', 'opportunity cost', 'PPC', 'comparative advantage', 'absolute advantage', 'trade gains', 'economic systems', 'circular flow model'] },
      2: { topics: ['law of demand', 'demand shifters', 'law of supply', 'supply shifters', 'equilibrium', 'price controls', 'price ceiling', 'price floor', 'consumer surplus', 'producer surplus', 'deadweight loss', 'elasticity', 'PED', 'PES', 'cross price elasticity', 'income elasticity'] },
      3: { topics: ['total product', 'marginal product', 'diminishing returns', 'fixed vs variable costs', 'total cost', 'marginal cost', 'average total cost', 'average variable cost', 'profit maximization', 'MR=MC', 'perfect competition short run', 'perfect competition long run', 'shutdown rule'] },
      4: { topics: ['monopoly characteristics', 'price maker', 'MR less than price', 'monopoly profit maximization', 'deadweight loss monopoly', 'price discrimination', 'natural monopoly', 'monopolistic competition', 'product differentiation', 'excess capacity', 'oligopoly', 'game theory', 'Nash equilibrium', 'collusion'] },
      5: { topics: ['derived demand', 'MRP', 'MRC', 'labor market equilibrium', 'wage determination', 'monopsony', 'minimum wage', 'labor unions', 'bilateral monopoly'] },
      6: { topics: ['negative externalities', 'positive externalities', 'Coase theorem', 'public goods', 'free rider problem', 'common resources', 'income inequality', 'Lorenz curve', 'Gini coefficient', 'government intervention'] },
    }
  },
  apmacro: {
    globalVar: 'APMACRO_FRQ',
    outputFile: 'js/data/apmacro_frq.js',
    idPrefix: 'macro',
    useWindow: false,
    targets: { short: 3, long: 2 },
    units: {
      1: { topics: ['scarcity', 'opportunity cost', 'PPC', 'comparative advantage', 'economic systems', 'circular flow', 'factor markets', 'product markets'] },
      2: { topics: ['GDP components', 'C+I+G+NX', 'real vs nominal GDP', 'GDP deflator', 'CPI', 'inflation types', 'unemployment types', 'natural rate of unemployment', 'labor force', 'business cycle'] },
      3: { topics: ['aggregate demand', 'AD shifters', 'SRAS', 'SRAS shifters', 'LRAS', 'short run equilibrium', 'long run equilibrium', 'inflationary gap', 'recessionary gap', 'fiscal policy', 'multiplier effect', 'MPC', 'MPS', 'crowding out'] },
      4: { topics: ['money functions', 'money supply M1 M2', 'banking system', 'money creation', 'money multiplier', 'reserve requirement', 'Federal Reserve', 'monetary policy tools', 'open market operations', 'discount rate', 'money market', 'loanable funds market'] },
      5: { topics: ['real interest rate', 'nominal interest rate', 'Fisher equation', 'investment demand', 'loanable funds', 'crowding out', 'financial markets', 'present value'] },
      6: { topics: ['exchange rates', 'appreciation', 'depreciation', 'balance of payments', 'current account', 'capital account', 'trade deficit', 'trade surplus', 'net exports', 'foreign exchange market'] },
    }
  },
  apush: {
    globalVar: 'APUSH_FRQ',
    outputFile: 'js/data/apush_frq.js',
    idPrefix: 'apush',
    useWindow: false,
    targets: { saq: 2, leq: 1, dbq: 1 },
    units: {
      1: { topics: ['Native American societies', 'Columbian Exchange', 'Spanish colonization', 'Portuguese exploration', 'European motives', 'demographic collapse', 'encomienda system', 'Aztec and Inca empires'] },
      2: { topics: ['Chesapeake colonies', 'New England colonies', 'Middle colonies', 'indentured servitude', 'transatlantic slave trade', 'colonial society', 'Puritan theology', 'mercantilism', 'triangular trade', 'Bacon\'s Rebellion'] },
      3: { topics: ['Salutary neglect', 'French and Indian War', 'colonial resistance', 'Declaration of Independence', 'Revolutionary War', 'Articles of Confederation', 'Constitutional Convention', 'Federalist vs Anti-Federalist'] },
      4: { topics: ['Hamilton financial plan', 'First Party System', 'Jefferson presidency', 'Louisiana Purchase', 'War of 1812', 'market revolution', 'Jacksonian democracy', 'Second Great Awakening', 'reform movements', 'abolitionism', 'women\'s rights'] },
      5: { topics: ['manifest destiny', 'Mexican-American War', 'Compromise of 1850', 'Kansas-Nebraska Act', 'Dred Scott', 'Lincoln-Douglas debates', 'secession', 'Civil War', 'Emancipation Proclamation', 'Reconstruction amendments', 'Compromise of 1877'] },
      6: { topics: ['transcontinental railroad', 'Gilded Age industry', 'robber barons', 'horizontal integration', 'vertical integration', 'labor unions', 'immigration waves', 'urbanization', 'Populist movement', 'gold vs silver debate'] },
      7: { topics: ['Progressive movement', 'muckrakers', 'trust busting', 'women\'s suffrage', 'US imperialism', 'WWI causes', 'home front WWI', 'Red Scare', 'Roaring Twenties', 'Harlem Renaissance', 'Great Depression causes', 'New Deal programs', 'WWII causes', 'Pearl Harbor', 'home front WWII', 'Hiroshima decision'] },
      8: { topics: ['Cold War origins', 'containment policy', 'Truman Doctrine', 'Marshall Plan', 'Korean War', 'McCarthyism', 'Cuban Missile Crisis', 'Civil Rights Movement', 'Brown v Board', 'Civil Rights Act 1964', 'Voting Rights Act 1965', 'Vietnam War escalation', 'anti-war movement', 'Great Society', 'Nixon détente', 'Watergate'] },
      9: { topics: ['Reagan Revolution', 'Reaganomics', 'Cold War end', 'Gulf War', 'Clinton era', 'NAFTA', '9/11', 'War on Terror', 'Iraq War', 'Obama presidency', 'ACA', 'Great Recession', 'political polarization'] },
    }
  },
  apphys1: {
    globalVar: 'PHYSICS_FRQ',
    outputFile: 'js/data/physics_frq.js',
    idPrefix: 'phys1',
    useWindow: true,
    targets: { short: 3, long: 2 },
    units: {
      1: { topics: ['position displacement', 'velocity', 'acceleration', 'kinematic equations', 'free fall', 'projectile motion', 'relative motion', 'motion graphs'] },
      2: { topics: ['Newton\'s first law', 'Newton\'s second law', 'Newton\'s third law', 'free body diagrams', 'normal force', 'friction', 'tension', 'Atwood machine', 'inclined planes'] },
      3: { topics: ['uniform circular motion', 'centripetal acceleration', 'centripetal force', 'Newton\'s law of gravitation', 'orbital motion', 'satellite speed', 'Kepler\'s laws'] },
      4: { topics: ['work', 'kinetic energy', 'work-energy theorem', 'potential energy', 'conservation of energy', 'power', 'spring potential energy', 'Hooke\'s law'] },
      5: { topics: ['momentum', 'impulse', 'impulse-momentum theorem', 'conservation of momentum', 'elastic collision', 'inelastic collision', 'perfectly inelastic collision', 'center of mass'] },
      6: { topics: ['simple harmonic motion', 'restoring force', 'period and frequency', 'spring-mass system', 'pendulum', 'amplitude', 'energy in SHM'] },
      7: { topics: ['torque', 'moment arm', 'rotational equilibrium', 'rotational inertia', 'Newton\'s second law rotation', 'angular momentum', 'conservation of angular momentum', 'rolling motion'] },
    }
  },
  apphysc: {
    globalVar: 'APPHYSCEM_FRQ',
    outputFile: 'js/data/apphyscem_frq.js',
    idPrefix: 'physc',
    useWindow: true,
    targets: { short: 3, long: 2 },
    units: {
      1: { topics: ['kinematics in 1D', 'kinematics in 2D', 'projectile motion', 'relative motion', 'kinematic equations with calculus', 'derivatives of motion', 'integrals of motion'] },
      2: { topics: ['Newton\'s laws', 'free body diagrams', 'friction', 'drag force', 'circular motion dynamics', 'non-inertial reference frames'] },
      3: { topics: ['work integral', 'kinetic energy theorem', 'potential energy functions', 'conservative forces', 'conservation of energy', 'power'] },
      4: { topics: ['impulse momentum', 'conservation of momentum', 'elastic collisions', 'inelastic collisions', 'center of mass', 'variable mass systems'] },
      5: { topics: ['torque', 'rotational inertia', 'parallel axis theorem', 'Newton\'s second law rotation', 'rolling without slipping', 'angular momentum', 'gyroscopic motion'] },
    }
  }
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function extractArray(content) {
  const match = content.match(/(?:window\.\w+|\bvar\s+\w+|\bconst\s+\w+|\blet\s+\w+)\s*=\s*(\[[\s\S]*\])/);
  if (!match) return null;
  try { return new Function(`return ${match[1]}`)(); } catch { return null; }
}

function getLastFRQIndex(questions, prefix) {
  let max = 0;
  for (const q of questions) {
    const match = q.id?.match(/(\d+)$/);
    if (match) max = Math.max(max, parseInt(match[1]));
  }
  return max;
}

async function callBedrock(prompt) {
  const body = JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: MAX_TOKENS,
    messages: [{ role: "user", content: prompt }]
  });
  const cmd = new InvokeModelCommand({
    modelId: MODEL_ID,
    body,
    contentType: "application/json",
    accept: "application/json"
  });
  const resp = await client.send(cmd);
  const decoded = JSON.parse(new TextDecoder().decode(resp.body));
  return decoded.content[0].text;
}

function parseJSON(raw) {
  const cleaned = raw.replace(/```json|```/g, '').replace(/\.\.\./g, '').replace(/\u2014/g, '-').replace(/\u2013/g, '-').trim();
  // Try direct parse first
  try {
    return JSON.parse(cleaned);
  } catch {
    // Fall back to bracket matching
    const startBracket = cleaned.indexOf('[');
    const startBrace = cleaned.indexOf('{');
    const isArray = startBracket !== -1 && (startBrace === -1 || startBracket <= startBrace);
    const openChar = isArray ? '[' : '{';
    const closeChar = isArray ? ']' : '}';
    const start = isArray ? startBracket : startBrace;
    if (start === -1) throw new Error('No JSON found in response');
    let depth = 0, end = -1;
    for (let i = start; i < cleaned.length; i++) {
      if (cleaned[i] === openChar) depth++;
      else if (cleaned[i] === closeChar) { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end === -1) throw new Error('Unterminated JSON');
    return JSON.parse(cleaned.slice(start, end + 1));
  }
}

function difficultyDistribution(target) {
  if (target === 2) return { easy: 0, medium: 1, hard: 1 };
  const easy = Math.floor(target / 3);
  const hard = Math.floor(target / 3);
  const medium = target - easy - hard;
  return { easy, medium, hard };
}

// ─── SUBJECT NAME MAP ────────────────────────────────────────────────────────

const SUBJECT_NAMES = {
  apbio: 'AP Biology', apcalc: 'AP Calculus AB', apstats: 'AP Statistics',
  apmicro: 'AP Microeconomics', apmacro: 'AP Macroeconomics',
  apush: 'AP US History', apphys1: 'AP Physics 1', apphysc: 'AP Physics C: Mechanics & E&M'
};

// ─── GENERIC FRQ GENERATION PROMPT ──────────────────────────────────────────

function buildGenericFRQPrompt(subjectKey, unit, topics, difficulty, frqType, count, startIndex) {
  const config = SUBJECTS[subjectKey];
  const subjectName = SUBJECT_NAMES[subjectKey];
  const isPhysics = subjectKey === 'apphys1' || subjectKey === 'apphysc';
  const isShort = frqType === 'short';
  const numParts = isShort ? 3 : 5;
  const points = isShort ? 3 : 5;

  const physicsRubricExtra = isPhysics ? `
    "fundamentalPrinciple": false,
    "proximity": null,` : '';

  const physicsRubricExample = isPhysics ? `
For rubric items that require citing a core law or theorem (Newton's laws, conservation laws, etc.), set "fundamentalPrinciple": true.
For rubric items involving causal reasoning, set "proximity" to an object with "cause", "connector", and "effect" arrays:
  "proximity": { "cause": ["term1", "term2"], "connector": ["leads to", "results in", "causes"], "effect": ["outcome1", "outcome2"] }` : '';

  let subjectSpecific = '';
  if (subjectKey === 'apphys1') {
    subjectSpecific = `
- Include equation-form keywords (F=ma, p=mv, KE=0.5mv^2, etc.) in addition to conceptual keywords.
- Set fundamentalPrinciple: true on rubric items that require citing a core physics law.
- Use proximity objects for causal reasoning items.`;
  } else if (subjectKey === 'apphysc') {
    subjectSpecific = `
- Questions MUST involve calculus-based reasoning throughout (derivatives, integrals, differential equations).
- Include equation-form keywords (F=ma, p=mv, KE=0.5mv^2, dv/dt, ∫F·dx, etc.).
- Set fundamentalPrinciple: true on rubric items that require citing a core physics law.
- Use proximity objects for causal reasoning items.`;
  } else if (subjectKey === 'apcalc') {
    subjectSpecific = `
- Include notation keywords (f'(x), dy/dx, lim x->0, integral notation, d/dx, ∫, etc.).
- Questions must involve computation, not just recall.`;
  } else if (subjectKey === 'apstats') {
    subjectSpecific = `
- Every question MUST use a real-world context (study, survey, experiment, dataset).
- Inference questions must require: state hypotheses + check conditions + compute + interpret in context.
- Include notation keywords (p-hat, x-bar, H0, Ha, p-value, alpha = 0.05, etc.).`;
  } else if (subjectKey === 'apmicro' || subjectKey === 'apmacro') {
    subjectSpecific = `
- Every question MUST involve graph analysis (supply/demand, cost curves, market models).
- Keywords must include graph-specific terms (shifts right, shifts left, price increases, quantity decreases, deadweight loss, etc.).`;
  }

  return `Generate exactly ${count} ${subjectName} free-response questions for Unit ${unit}.

Type: ${frqType} (${numParts} parts, ${points} points total)
Difficulty: ${difficulty}
Topics (spread across, each question on a different topic): ${topics.join(', ')}

DIFFICULTY DEFINITIONS:
- easy: single concept, direct application
- medium: 2-3 concept integration or data interpretation
- hard: multi-concept synthesis, non-standard scenario

KEYWORD QUALITY (CRITICAL — keywords drive auto-grading):
Each rubric item needs 6-10 keywords. Include the precise technical term, common student synonyms, plural/inflected forms, and short sub-phrases that would appear in a correct answer. Do not use generic words like 'increase', 'change', or 'factor' alone. Example for enzyme inhibition: ['competitive inhibitor', 'active site', 'binds to active site', 'noncompetitive inhibitor', 'allosteric site', 'substrate cannot bind', 'enzyme activity decreases']. Bad example: ['enzyme', 'molecule', 'affect'].
${subjectSpecific}

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "${config.idPrefix}_u${unit}_frq${String(startIndex).padStart(3,'0')}",
  "subject": "${subjectKey}",
  "frqType": "${frqType}",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "${difficulty}",
  "autoGraded": true,
  "points": ${points},
  "prompt": "Full scenario with enough context to answer all parts...",
  "starterCode": null,
  "parts": [
    ${Array.from({length: numParts}, (_, i) => `{ "label": "${String.fromCharCode(97+i)}", "command": "Describe/Explain/Predict/Calculate/Justify", "question": "...", "rubric": "What earns full credit for this part." }`).join(',\n    ')}
  ],
  "rubric": [
    ${Array.from({length: numParts}, (_, i) => `{
      "index": ${i},
      "points": 1,
      "description": "Full description of what earns this point",
      "partLabel": "${String.fromCharCode(97+i)}",
      "skill": "describe/explain/predict/calculate/justify",
      "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"]${physicsRubricExtra}
    }`).join(',\n    ')}
  ],
  "sampleSolution": null
}]
${physicsRubricExample}

Each question must cover a DIFFERENT topic. Generate all ${count} now.`;
}

// ─── APUSH FRQ GENERATION PROMPTS ────────────────────────────────────────────

function buildAPUSHSAQPrompt(unit, topics, difficulty, count, startIndex) {
  return `Generate exactly ${count} AP US History Short Answer Questions (SAQ) for Period ${unit}.

Difficulty: ${difficulty}
Topics (spread across): ${topics.join(', ')}

DIFFICULTY DEFINITIONS:
- easy: single concept, direct application
- medium: 2-3 concept integration or data interpretation
- hard: multi-concept synthesis, non-standard scenario

SAQ RULES:
- 3 parts following: describe → explain cause → explain effect or compare
- Each response should be 3-5 sentences
- No stimulus
- Each question on a different topic

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "apush-saq-u${unit}-${String(startIndex).padStart(2,'0')}",
  "subject": "apush",
  "frqType": "saq",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "${difficulty}",
  "points": 3,
  "prompt": "Answer (a), (b), and (c). Each response should be 3-5 sentences.",
  "stimulus": null,
  "parts": [
    { "label": "a", "question": "Briefly describe ONE development related to [topic]." },
    { "label": "b", "question": "Briefly explain ONE cause of [development]." },
    { "label": "c", "question": "Briefly explain ONE effect OR compare to [contrasting development]." }
  ],
  "sampleSolution": null
}]

Generate all ${count} now.`;
}

function buildAPUSHLEQPrompt(unit, topics, difficulty, count, startIndex) {
  return `Generate exactly ${count} AP US History Long Essay Question (LEQ) for Period ${unit}.

Difficulty: ${difficulty}
Topics (spread across): ${topics.join(', ')}

LEQ RULES:
- Must be genuinely analytical — require a thesis with a reasoning process (causation, comparison, or continuity/change over time)
- NOT a knowledge-dump question — must require argument construction
- No parts, no stimulus
- Prompt format: "Evaluate the extent to which..."
- Each question on a different topic

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "apush-leq-u${unit}-${String(startIndex).padStart(2,'0')}",
  "subject": "apush",
  "frqType": "leq",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "${difficulty}",
  "points": 6,
  "prompt": "Evaluate the extent to which...",
  "stimulus": null,
  "parts": [],
  "sampleSolution": null
}]

Generate all ${count} now.`;
}

function buildAPUSHDBQPrompt(unit, topics, difficulty, count, startIndex) {
  return `Generate exactly ${count} AP US History Document-Based Question (DBQ) for Period ${unit}.

Difficulty: ${difficulty}
Topics: ${topics.join(', ')}

DBQ RULES:
- 6 documents with VARIED perspectives (e.g. colonist, official, indigenous voice, merchant, critic, religious figure)
- All document years MUST be historically accurate within Period ${unit}
- Each document has: docNum, title, author, year, excerpt (2-4 sentences of realistic primary source content)
- Prompt format: "Using the documents and your knowledge of the period, evaluate the extent to which..."
- No parts
- Points: 7

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "apush-dbq-u${unit}-${String(startIndex).padStart(2,'0')}",
  "subject": "apush",
  "frqType": "dbq",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "hard",
  "points": 7,
  "prompt": "Using the documents and your knowledge of the period, evaluate the extent to which...",
  "stimulus": [
    { "docNum": 1, "title": "...", "author": "...", "year": 1500, "excerpt": "2-4 sentences of realistic primary source content..." },
    { "docNum": 2, "title": "...", "author": "...", "year": 1520, "excerpt": "..." },
    { "docNum": 3, "title": "...", "author": "...", "year": 1540, "excerpt": "..." },
    { "docNum": 4, "title": "...", "author": "...", "year": 1560, "excerpt": "..." },
    { "docNum": 5, "title": "...", "author": "...", "year": 1580, "excerpt": "..." },
    { "docNum": 6, "title": "...", "author": "...", "year": 1600, "excerpt": "..." }
  ],
  "parts": [],
  "sampleSolution": null
}]

Generate all ${count} now.`;
}

// ─── AUDIT PROMPTS ──────────────────────────────────────────────────────────

function buildGenericAuditPrompt(subjectKey, questions) {
  const subjectName = SUBJECT_NAMES[subjectKey];
  const isPhysics = subjectKey === 'apphys1' || subjectKey === 'apphysc';

  return `You are an expert ${subjectName} teacher. Audit these ${questions.length} FRQ questions.

Check and FIX each:
1. Every rubric item's "partLabel" matches an actual label in "parts[]" — fix mismatches
2. Every rubric item has at least 5 keywords — add more if fewer
3. Keywords are subject-specific, not generic filler (no standalone "increase", "change", "factor") — replace bad keywords with precise technical terms, student synonyms, and sub-phrases
4. Difficulty label matches actual question complexity — correct if wrong
5. Factual accuracy of question content — DROP questions with errors (add to flagged)
${isPhysics ? '6. Physics rubric items have "fundamentalPrinciple" and "proximity" fields' : ''}

${JSON.stringify(questions, null, 2)}

Return ONLY valid JSON, zero markdown:
{
  "clean": [full fixed question objects that passed all checks],
  "flagged": [{"id": "...", "issue": "description of what is wrong"}]
}`;
}

function buildAPUSHAuditPrompt(questions) {
  return `You are an expert AP US History teacher. Audit these ${questions.length} APUSH FRQ questions.

Check and FIX:
1. SAQ has exactly 3 parts with labels a, b, c
2. DBQ has exactly 6 stimulus documents with years that are historically accurate within the stated period
3. LEQ prompt is genuinely analytical, not a knowledge-dump — rewrite if needed
4. DROP any question with anachronistic content (add to flagged)

${JSON.stringify(questions, null, 2)}

Return ONLY valid JSON, zero markdown:
{
  "clean": [full fixed question objects that passed all checks],
  "flagged": [{"id": "...", "issue": "description of what is wrong"}]
}`;
}

// ─── FILE I/O ────────────────────────────────────────────────────────────────

function readExisting(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  if (!content.trim()) return [];
  const arr = extractArray(content);
  return arr || [];
}

function writeOutput(filePath, questions, config) {
  const varName = config.globalVar;
  const declaration = config.useWindow ? `'use strict';\nwindow.${varName}` : `var ${varName}`;
  fs.writeFileSync(filePath, `${declaration} = ${JSON.stringify(questions, null, 2)};`, 'utf8');
}

// ─── MAIN GENERATION LOGIC ──────────────────────────────────────────────────

async function generateForSubject(subjectKey, unitFilter, wipe) {
  const config = SUBJECTS[subjectKey];
  if (!config) {
    console.error(`Unknown subject: ${subjectKey}\nAvailable: ${Object.keys(SUBJECTS).join(', ')}`);
    process.exit(1);
  }

  const filePath = config.outputFile;
  let existing = wipe ? [] : readExisting(filePath);

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  JPrep FRQ Generator — ${subjectKey.toUpperCase()}`);
  console.log(`  Current: ${existing.length} questions${wipe ? ' (wiped)' : ''}`);
  console.log(`${'═'.repeat(60)}\n`);

  const allFlagged = [];
  let lastIndex = getLastFRQIndex(existing, config.idPrefix);
  let totalGenerated = 0;
  let totalFlagged = 0;

  const isAPUSH = subjectKey === 'apush';
  const units = Object.entries(config.units);

  for (const [unitNum, unitConfig] of units) {
    const unit = parseInt(unitNum);
    if (unitFilter !== null && unit !== unitFilter) continue;

    const currentInUnit = existing.filter(q => q.units && q.units.includes(unit));

    if (isAPUSH) {
      await generateAPUSHUnit(unit, unitConfig, config, currentInUnit, existing, allFlagged, { lastIndex, totalGenerated, totalFlagged });
    } else {
      await generateGenericUnit(subjectKey, unit, unitConfig, config, currentInUnit, existing, allFlagged, { lastIndex, totalGenerated, totalFlagged });
    }

    // Update counters from the mutable state
    lastIndex = getLastFRQIndex(existing, config.idPrefix);
    totalGenerated = existing.length - (wipe ? 0 : readExisting(filePath).length);

    // Write after every unit
    writeOutput(filePath, existing, config);
    console.log(`  → Saved ${existing.length} questions to ${filePath}`);
  }

  // Write flagged
  if (allFlagged.length > 0) {
    const flagPath = `scripts/${subjectKey}_frq_flags.json`;
    fs.writeFileSync(flagPath, JSON.stringify({ generated: new Date().toISOString(), flags: allFlagged }, null, 2));
    console.log(`\n${allFlagged.length} flagged → ${flagPath}`);
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  DONE — ${subjectKey.toUpperCase()}`);
  console.log(`  Final count: ${existing.length}`);
  console.log(`  Flagged: ${allFlagged.length}`);
  console.log(`${'═'.repeat(60)}\n`);
}

async function generateGenericUnit(subjectKey, unit, unitConfig, config, currentInUnit, existing, allFlagged, counters) {
  const targets = config.targets;
  const frqTypes = [];

  if (targets.short) {
    const currentShort = currentInUnit.filter(q => q.frqType === 'short').length;
    const need = Math.max(0, targets.short - currentShort);
    if (need > 0) frqTypes.push({ frqType: 'short', total: need });
  }
  if (targets.long) {
    const currentLong = currentInUnit.filter(q => q.frqType === 'long').length;
    const need = Math.max(0, targets.long - currentLong);
    if (need > 0) frqTypes.push({ frqType: 'long', total: need });
  }

  for (const { frqType, total } of frqTypes) {
    const dist = difficultyDistribution(total);
    console.log(`Unit ${unit} ${frqType}: need +${dist.easy}E +${dist.medium}M +${dist.hard}H`);

    const batches = [
      { difficulty: 'easy', count: dist.easy },
      { difficulty: 'medium', count: dist.medium },
      { difficulty: 'hard', count: dist.hard },
    ].filter(b => b.count > 0);

    for (const { difficulty, count } of batches) {
      let remaining = count;
      while (remaining > 0) {
        const batchCount = Math.min(BATCH_SIZE, remaining);
        counters.lastIndex++;

        process.stdout.write(`  Generating ${batchCount}x ${difficulty} ${frqType} Unit ${unit}... `);

        try {
          const genRaw = await callBedrock(
            buildGenericFRQPrompt(subjectKey, unit, unitConfig.topics, difficulty, frqType, batchCount, counters.lastIndex)
          );

          let generated;
          try {
            generated = parseJSON(genRaw);
            if (!Array.isArray(generated)) generated = [generated];
          } catch {
            console.log(`PARSE ERROR — skipping`);
            console.log(`Raw (last 500): ${genRaw.slice(-500)}`);
            remaining -= batchCount;
            await sleep(DELAY_MS);
            continue;
          }

          await sleep(1000);
          process.stdout.write(`auditing... `);

          const auditRaw = await callBedrock(buildGenericAuditPrompt(subjectKey, generated));

          let auditResult;
          try {
            auditResult = parseJSON(auditRaw);
          } catch {
            auditResult = { clean: generated, flagged: [] };
          }

          let clean = auditResult.clean || [];
          const flagged = auditResult.flagged || [];
          if (clean.length === 0 && flagged.length === 0) {
            console.warn(`  WARNING: audit returned 0 clean + 0 flagged — falling back to generated questions as-is`);
            clean = generated;
          }

          // Fix IDs
          clean.forEach((q, i) => {
            q.id = `${config.idPrefix}_u${unit}_frq${String(counters.lastIndex + i).padStart(3, '0')}`;
          });

          existing.push(...clean);
          allFlagged.push(...flagged);
          counters.totalGenerated += clean.length;
          counters.totalFlagged += flagged.length;
          remaining -= batchCount;
          counters.lastIndex += Math.max(0, clean.length - 1);

          console.log(`✓ ${clean.length} clean, ${flagged.length} flagged`);
          await sleep(DELAY_MS);

        } catch (err) {
          if (err.message && err.message.includes('Too many tokens')) {
            console.log(`FATAL: Too many tokens — ${err.message}`);
            process.exit(1);
          }
          console.log(`ERROR: ${err.message}`);
          await sleep(DELAY_MS * 2);
          remaining -= batchCount;
        }
      }
    }
  }
}

async function generateAPUSHUnit(unit, unitConfig, config, currentInUnit, existing, allFlagged, counters) {
  const targets = config.targets;

  // SAQ
  const currentSAQ = currentInUnit.filter(q => q.frqType === 'saq').length;
  const needSAQ = Math.max(0, targets.saq - currentSAQ);

  // LEQ
  const currentLEQ = currentInUnit.filter(q => q.frqType === 'leq').length;
  const needLEQ = Math.max(0, targets.leq - currentLEQ);

  // DBQ
  const currentDBQ = currentInUnit.filter(q => q.frqType === 'dbq').length;
  const needDBQ = Math.max(0, targets.dbq - currentDBQ);

  console.log(`Period ${unit}: need +${needSAQ} SAQ, +${needLEQ} LEQ, +${needDBQ} DBQ`);

  // Generate SAQs
  if (needSAQ > 0) {
    const dist = difficultyDistribution(needSAQ);
    const batches = [
      { difficulty: 'easy', count: dist.easy },
      { difficulty: 'medium', count: dist.medium },
      { difficulty: 'hard', count: dist.hard },
    ].filter(b => b.count > 0);

    for (const { difficulty, count } of batches) {
      let remaining = count;
      while (remaining > 0) {
        const batchCount = Math.min(BATCH_SIZE, remaining);
        counters.lastIndex++;

        process.stdout.write(`  Generating ${batchCount}x ${difficulty} SAQ Period ${unit}... `);

        try {
          const genRaw = await callBedrock(buildAPUSHSAQPrompt(unit, unitConfig.topics, difficulty, batchCount, counters.lastIndex));

          let generated;
          try {
            generated = parseJSON(genRaw);
            if (!Array.isArray(generated)) generated = [generated];
          } catch {
            console.log(`PARSE ERROR — skipping`);
            remaining -= batchCount;
            await sleep(DELAY_MS);
            continue;
          }

          await sleep(1000);
          process.stdout.write(`auditing... `);

          const auditRaw = await callBedrock(buildAPUSHAuditPrompt(generated));

          let auditResult;
          try {
            auditResult = parseJSON(auditRaw);
          } catch {
            auditResult = { clean: generated, flagged: [] };
          }

          let clean = auditResult.clean || [];
          const flagged = auditResult.flagged || [];
          if (clean.length === 0 && flagged.length === 0) {
            console.warn(`  WARNING: audit returned 0 clean + 0 flagged — falling back to generated questions as-is`);
            clean = generated;
          }

          clean.forEach((q, i) => {
            q.id = `apush-saq-u${unit}-${String(counters.lastIndex + i).padStart(2, '0')}`;
          });

          existing.push(...clean);
          allFlagged.push(...flagged);
          counters.totalGenerated += clean.length;
          counters.totalFlagged += flagged.length;
          remaining -= batchCount;
          counters.lastIndex += Math.max(0, clean.length - 1);

          console.log(`✓ ${clean.length} clean, ${flagged.length} flagged`);
          await sleep(DELAY_MS);

        } catch (err) {
          console.log(`ERROR: ${err.message}`);
          await sleep(DELAY_MS * 2);
          remaining -= batchCount;
        }
      }
    }
  }

  // Generate LEQs
  if (needLEQ > 0) {
    let remaining = needLEQ;
    while (remaining > 0) {
      const batchCount = Math.min(BATCH_SIZE, remaining);
      counters.lastIndex++;

      process.stdout.write(`  Generating ${batchCount}x LEQ Period ${unit}... `);

      try {
        const genRaw = await callBedrock(buildAPUSHLEQPrompt(unit, unitConfig.topics, 'hard', batchCount, counters.lastIndex));

        let generated;
        try {
          generated = parseJSON(genRaw);
          if (!Array.isArray(generated)) generated = [generated];
        } catch {
          console.log(`PARSE ERROR — skipping`);
          remaining -= batchCount;
          await sleep(DELAY_MS);
          continue;
        }

        await sleep(1000);
        process.stdout.write(`auditing... `);

        const auditRaw = await callBedrock(buildAPUSHAuditPrompt(generated));

        let auditResult;
        try {
          auditResult = parseJSON(auditRaw);
        } catch {
          auditResult = { clean: generated, flagged: [] };
        }

        let clean = auditResult.clean || [];
        const flagged = auditResult.flagged || [];
        if (clean.length === 0 && flagged.length === 0) {
          console.warn(`  WARNING: audit returned 0 clean + 0 flagged — falling back to generated questions as-is`);
          clean = generated;
        }

        clean.forEach((q, i) => {
          q.id = `apush-leq-u${unit}-${String(counters.lastIndex + i).padStart(2, '0')}`;
        });

        existing.push(...clean);
        allFlagged.push(...flagged);
        counters.totalGenerated += clean.length;
        counters.totalFlagged += flagged.length;
        remaining -= batchCount;
        counters.lastIndex += Math.max(0, clean.length - 1);

        console.log(`✓ ${clean.length} clean, ${flagged.length} flagged`);
        await sleep(DELAY_MS);

      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        await sleep(DELAY_MS * 2);
        remaining -= batchCount;
      }
    }
  }

  // Generate DBQs
  if (needDBQ > 0) {
    let remaining = needDBQ;
    while (remaining > 0) {
      const batchCount = Math.min(DBQ_BATCH_SIZE, remaining);
      counters.lastIndex++;

      process.stdout.write(`  Generating ${batchCount}x DBQ Period ${unit}... `);

      try {
        const genRaw = await callBedrock(buildAPUSHDBQPrompt(unit, unitConfig.topics, 'hard', batchCount, counters.lastIndex));

        let generated;
        try {
          generated = parseJSON(genRaw);
          if (!Array.isArray(generated)) generated = [generated];
        } catch {
          console.log(`PARSE ERROR — skipping`);
          remaining -= batchCount;
          await sleep(DELAY_MS);
          continue;
        }

        await sleep(1000);
        process.stdout.write(`auditing... `);

        const auditRaw = await callBedrock(buildAPUSHAuditPrompt(generated));

        let auditResult;
        try {
          auditResult = parseJSON(auditRaw);
        } catch {
          auditResult = { clean: generated, flagged: [] };
        }

        let clean = auditResult.clean || [];
        const flagged = auditResult.flagged || [];
        if (clean.length === 0 && flagged.length === 0) {
          console.warn(`  WARNING: audit returned 0 clean + 0 flagged — falling back to generated questions as-is`);
          clean = generated;
        }

        clean.forEach((q, i) => {
          q.id = `apush-dbq-u${unit}-${String(counters.lastIndex + i).padStart(2, '0')}`;
        });

        existing.push(...clean);
        allFlagged.push(...flagged);
        counters.totalGenerated += clean.length;
        counters.totalFlagged += flagged.length;
        remaining -= batchCount;
        counters.lastIndex += Math.max(0, clean.length - 1);

        console.log(`✓ ${clean.length} clean, ${flagged.length} flagged`);
        await sleep(DELAY_MS);

      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        await sleep(DELAY_MS * 2);
        remaining -= batchCount;
      }
    }
  }
}

// ─── ENTRY ───────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const subjectFlag = args.indexOf('--subject');
const unitFlag = args.indexOf('--unit');
const wipeFlag = args.includes('--wipe');

if (subjectFlag === -1 || !args[subjectFlag + 1]) {
  console.log(`
Usage: node scripts/generateFRQ.mjs --subject <subject> [--unit N] [--wipe]

Subjects:
  apbio     AP Biology              (4 short + 2 long per unit, 8 units)
  apcalc    AP Calculus AB           (4 short + 2 long per unit, 8 units)
  apstats   AP Statistics            (6 short per unit, 9 units)
  apmicro   AP Microeconomics        (3 short + 2 long per unit, 6 units)
  apmacro   AP Macroeconomics        (3 short + 2 long per unit, 6 units)
  apush     AP US History            (2 SAQ + 1 LEQ + 1 DBQ per period, 9 periods)
  apphys1   AP Physics 1             (3 short + 2 long per unit, 7 units)
  apphysc   AP Physics C             (3 short + 2 long per unit, 5 units)

Options:
  --unit N    Only generate for unit/period N
  --wipe      Clear output file before generating
  `);
  process.exit(0);
}

const subjectKey = args[subjectFlag + 1].toLowerCase();
const unitFilter = unitFlag !== -1 && args[unitFlag + 1] ? parseInt(args[unitFlag + 1]) : null;

generateForSubject(subjectKey, unitFilter, wipeFlag).catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
