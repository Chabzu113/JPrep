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
  },
  apgov: {
    globalVar: 'APGOV_FRQ',
    outputFile: 'js/data/apgov_frq.js',
    idPrefix: 'gov',
    useWindow: false,
    targets: { ca: 2, qa: 1, scotus: 1, arg: 1 },
    units: {
      1: { topics: ['Constitution', 'federalism', 'separation of powers', 'checks and balances', 'amendments', 'Bill of Rights', 'enumerated powers', 'reserved powers', 'concurrent powers'] },
      2: { topics: ['Congress structure', 'lawmaking process', 'presidential powers', 'executive orders', 'bureaucracy', 'federal courts', 'judicial review', 'Marbury v Madison', 'McCulloch v Maryland', 'iron triangles', 'interest group lobbying'] },
      3: { topics: ['incorporation doctrine', 'First Amendment', 'Fourth Amendment', 'due process', 'equal protection', 'Brown v Board', 'affirmative action', 'voting rights', 'civil liberties vs civil rights', 'selective incorporation'] },
      4: { topics: ['political ideology', 'public opinion', 'polling', 'media influence', 'political socialization', 'party platforms', 'interest groups', 'PACs', 'campaign finance', 'Citizens United', 'linkage institutions'] },
      5: { topics: ['voter turnout', 'electoral college', 'gerrymandering', 'third parties', 'Duverger\'s law', 'linkage institutions', 'political parties', 'candidate-centered campaigns', 'incumbency advantage'] },
    }
  },
  apcalcbc: {
    globalVar: 'APCALCBC_FRQ',
    outputFile: 'js/data/apcalcbc_frq.js',
    idPrefix: 'calcbc',
    useWindow: false,
    targets: { short: 4, long: 2 },
    units: {
      1: { topics: ['limits graphically', 'limits algebraically', 'limit laws', 'one-sided limits', 'limits at infinity', 'squeeze theorem', 'continuity', 'types of discontinuity', 'IVT'] },
      2: { topics: ['average rate of change', 'instantaneous rate of change', 'definition of derivative', 'differentiability', 'power rule', 'constant rule', 'sum rule', 'trig derivatives', 'higher order derivatives'] },
      3: { topics: ['chain rule', 'product rule', 'quotient rule', 'implicit differentiation', 'inverse trig derivatives', 'logarithmic differentiation'] },
      4: { topics: ['related rates', 'linearization', 'L\'Hopital\'s rule', 'mean value theorem', 'Rolle\'s theorem', 'extreme value theorem'] },
      5: { topics: ['critical points', 'first derivative test', 'second derivative test', 'concavity', 'inflection points', 'optimization', 'curve sketching'] },
      6: { topics: ['antiderivatives', 'indefinite integrals', 'Riemann sums', 'definite integrals', 'FTC part 1', 'FTC part 2', 'average value', 'net change theorem'] },
      7: { topics: ['u-substitution indefinite', 'u-substitution definite', 'trig integrals', 'integration by parts', 'partial fractions', 'improper integrals'] },
      8: { topics: ['area between curves', 'volumes disc method', 'volumes washer method', 'volumes shell method', 'arc length', 'motion problems with integrals'] },
      9: { topics: ['parametric equations', 'parametric derivatives dy/dx', 'second derivatives parametric', 'arc length parametric', 'polar coordinates', 'polar area', 'polar curve derivatives', 'vector-valued functions', 'motion in a plane'] },
      10: { topics: ['sequences', 'series convergence', 'geometric series', 'p-series', 'alternating series test', 'ratio test', 'comparison test', 'limit comparison test', 'integral test', 'power series', 'interval of convergence', 'radius of convergence', 'Taylor series', 'Maclaurin series', 'Lagrange error bound'] },
    }
  },
  apenviro: {
    globalVar: 'APENVIRO_FRQ',
    outputFile: 'js/data/apenviro_frq.js',
    idPrefix: 'enviro',
    useWindow: false,
    targets: { short: 4, long: 2 },
    units: {
      1: { topics: ['ecosystems', 'biomes', 'carbon cycle', 'nitrogen cycle', 'phosphorus cycle', 'hydrologic cycle', 'primary productivity', 'net primary productivity', 'trophic levels', 'energy flow', 'food webs', 'food chains', '10% rule'] },
      2: { topics: ['biodiversity', 'ecosystem services', 'island biogeography', 'species-area relationship', 'ecological tolerance', 'range of tolerance', 'ecological succession', 'primary succession', 'secondary succession', 'keystone species', 'adaptations'] },
      3: { topics: ['population dynamics', 'exponential growth', 'logistic growth', 'carrying capacity', 'survivorship curves', 'age structure diagrams', 'demographic transition model', 'total fertility rate', 'doubling time', 'rule of 70'] },
      4: { topics: ['plate tectonics', 'soil formation', 'soil horizons', 'soil composition', 'atmosphere layers', 'global wind patterns', 'Hadley cells', 'watersheds', 'solar radiation', 'seasons', 'Coriolis effect', 'El Niño', 'La Niña', 'rain shadow effect'] },
      5: { topics: ['tragedy of the commons', 'deforestation', 'green revolution', 'agricultural practices', 'irrigation impacts', 'pesticides', 'integrated pest management', 'meat production', 'overfishing', 'bycatch', 'mining impacts', 'urbanization', 'ecological footprint', 'CITES', 'environmental policy'] },
      6: { topics: ['renewable vs nonrenewable energy', 'fossil fuels', 'coal', 'natural gas', 'oil', 'nuclear power', 'hydroelectric power', 'solar energy', 'wind energy', 'hydrogen fuel cells', 'EROI', 'energy conservation', 'energy efficiency'] },
      7: { topics: ['air pollution', 'primary vs secondary pollutants', 'photochemical smog', 'thermal inversion', 'indoor air pollutants', 'acid deposition', 'acid rain', 'ozone depletion', 'CFCs', 'stratospheric ozone', 'Clean Air Act'] },
      8: { topics: ['water pollution', 'point source vs nonpoint source', 'eutrophication', 'hypoxic zones', 'bioaccumulation', 'biomagnification', 'persistent organic pollutants', 'heavy metals', 'solid waste', 'MSW', 'landfills', 'recycling', 'waste reduction'] },
      9: { topics: ['greenhouse effect', 'greenhouse gases', 'climate change', 'global warming', 'carbon sequestration', 'ocean warming', 'ocean acidification', 'sea level rise', 'invasive species', 'endangered species', 'habitat fragmentation', 'biodiversity loss', 'IPCC', 'Paris Agreement'] },
    }
  },
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
  const cleaned = raw
    .replace(/```json|```/g, '')
    .replace(/\.\.\./g, '')
    .replace(/\u2014/g, '-')
    .replace(/\u2013/g, '-')
    .replace(/"([A-D])"(\)[^"]*?)"/g, '"$1$2"')
    .replace(/"([A-D])": "([^"]*)"/g, '"$1) $2"')
    .trim();
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
    let depth = 0, end = -1, inString = false, i = start;
    while (i < cleaned.length) {
      const ch = cleaned[i];
      if (inString) {
        if (ch === '\\') { i += 2; continue; }
        if (ch === '"') inString = false;
      } else {
        if (ch === '"') inString = true;
        else if (ch === openChar) depth++;
        else if (ch === closeChar) { depth--; if (depth === 0) { end = i; break; } }
      }
      i++;
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
  apush: 'AP US History', apphys1: 'AP Physics 1', apphysc: 'AP Physics C: Mechanics & E&M',
  apgov: 'AP Government and Politics', apcalcbc: 'AP Calculus BC', apenviro: 'AP Environmental Science'
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
  } else if (subjectKey === 'apcalcbc') {
    subjectSpecific = `
- Include notation keywords (f'(x), dy/dx, d²y/dx², parametric, polar, series notation, sigma, interval of convergence, etc.).
- Questions must involve computation, not just recall.
- For Units 9-10, make the scenario context explicit (parametric curve, polar graph, power series, etc.).`;
  } else if (subjectKey === 'apenviro') {
    subjectSpecific = `
- Every question MUST use a real-world environmental context (ecosystem study, pollution event, energy policy scenario, etc.).
- Calculation questions (energy EROI, population growth, 10% rule, doubling time) must show the setup clearly.
- Keywords must be scientifically precise — no vague terms like 'environment', 'pollution', 'change'.`;
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
- 3 parts with escalating analytical demand — NO softballs
- Part (a): Identify a NUANCED or underrepresented development — NOT the obvious textbook example. Must require students to distinguish between surface-level and deeper historical significance (e.g. "Briefly describe a development that complicated [broad trend] rather than reinforced it.")
- Part (b): Explain causation with SPECIFICITY — must require students to name a particular force, group, policy, or event as cause and explain the mechanism of causation, not just correlation (e.g. "Briefly explain how [specific factor] contributed to [development] by describing the process through which it operated.")
- Part (c): Either (A) a sophisticated comparison requiring students to identify a MEANINGFUL similarity OR difference between two distinct time periods, groups, or regions — not just surface-level contrast; OR (B) a multi-layered effect analysis requiring students to explain both an immediate AND a long-term consequence, or both an intended AND unintended consequence
- Each response should be 3-5 sentences
- No stimulus
- Each question on a different, specific topic — no vague or recycled themes

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "apush-saq-u${unit}-${String(startIndex).padStart(2,'0')}",
  "subject": "apush",
  "frqType": "saq",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "${difficulty}",
  "points": 3,
  "prompt": "Answer (a), (b), and (c). Each response should be approximately 3-5 sentences.",
  "stimulus": null,
  "parts": [
    { "label": "a", "question": "Briefly describe ONE development related to [specific nuanced aspect of topic] that complicated or challenged [broader trend]." },
    { "label": "b", "question": "Briefly explain how [specific cause] contributed to [development described in (a)] by describing the mechanism through which it operated." },
    { "label": "c", "question": "Briefly explain ONE significant similarity OR difference between [specific group/period/region] and [contrasting group/period/region] in their [experience/response/outcome] regarding [topic]." }
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
- Must demand a sophisticated, defensible thesis — not a restatement of the prompt
- Must require students to construct a complex argument: a clear line of reasoning with at least two distinct categories of evidence (e.g. political + economic, or domestic + foreign)
- Must address multiple perspectives, competing forces, or span more than one time period — questions that can be answered with a single narrative are REJECTED
- Must use one of these reasoning skills explicitly: causation (require identifying multiple causes with relative weight), comparison (require a nuanced similarity AND difference across groups/regions/periods), or continuity and change over time (require identifying what changed, what persisted, AND why)
- The claim in the prompt must be genuinely debatable — avoid prompts where the "extent" is obvious or where only one side has strong evidence
- Prompt format: "Evaluate the extent to which..." — NO prompts that ask students to simply "describe" or "explain"
- No parts, no stimulus
- Each question on a distinctly different topic — do not repeat themes

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
- exactly 7 documents with VARIED perspectives — include at minimum: one supporter, one critic, one marginalized/non-elite voice (e.g. enslaved person, indigenous leader, laborer, woman), one government/official source, and two additional contrasting viewpoints
- All document years MUST be historically accurate within Period ${unit}
- Each document has: docNum, title, author, year, excerpt (2-4 sentences of realistic primary source content with period-accurate vocabulary and tone)
- Prompt MUST require students to: (1) evaluate complexity by addressing both supporting and contradicting evidence, (2) engage with a counterargument or limitation of the argument, and (3) use ALL 7 documents — the prompt should not be answerable without cross-referencing multiple documents
- Prompt format: "Using all seven documents and your knowledge of the period, evaluate the extent to which..." — the claim must be debatable, not obviously true
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
  "prompt": "Using all seven documents and your knowledge of the period, evaluate the extent to which...",
  "stimulus": [
    { "docNum": 1, "title": "...", "author": "...", "year": 1500, "excerpt": "2-4 sentences of realistic primary source content..." },
    { "docNum": 2, "title": "...", "author": "...", "year": 1520, "excerpt": "..." },
    { "docNum": 3, "title": "...", "author": "...", "year": 1540, "excerpt": "..." },
    { "docNum": 4, "title": "...", "author": "...", "year": 1560, "excerpt": "..." },
    { "docNum": 5, "title": "...", "author": "...", "year": 1580, "excerpt": "..." },
    { "docNum": 6, "title": "...", "author": "...", "year": 1600, "excerpt": "..." },
    { "docNum": 7, "title": "...", "author": "...", "year": 1620, "excerpt": "..." }
  ],
  "parts": [],
  "sampleSolution": null
}]

Generate all ${count} now.`;
}

// ─── APGOV FRQ GENERATION PROMPTS ────────────────────────────────────────────

function buildAPGOVCAPrompt(unit, topics, difficulty, count, startIndex) {
  return `Generate exactly ${count} AP Government and Politics Concept Application (CA) FRQ(s) for Unit ${unit}.

Difficulty: ${difficulty}
Topics (spread across): ${topics.join(', ')}

DIFFICULTY DEFINITIONS:
- easy: single concept, direct application
- medium: 2-3 concept integration or data interpretation
- hard: multi-concept synthesis, non-standard scenario

CA RULES:
- 3 parts (a, b, c), 3 points total
- Grounded in a realistic political scenario: proposed legislation, court case, executive action, or political event
- Part (a): Identify a foundational concept directly illustrated by the scenario
- Part (b): Explain how the concept applies to the scenario — must require genuine application, not definition recall
- Part (c): Explain a tradeoff, tension, or competing interest created by or within the scenario
- No softballs — each part must require students to apply concepts to a novel situation, not recite definitions
- Each question must cover a DIFFERENT topic

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "gov-ca-u${unit}-${String(startIndex).padStart(2,'0')}",
  "subject": "apgov",
  "frqType": "ca",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "${difficulty}",
  "points": 3,
  "prompt": "Full realistic political scenario with enough context to answer all parts...",
  "stimulus": null,
  "parts": [
    { "label": "a", "question": "Identify a foundational concept illustrated by the scenario." },
    { "label": "b", "question": "Explain how [concept from part a] applies to the described situation." },
    { "label": "c", "question": "Explain a tradeoff or tension that the scenario creates between [competing interest 1] and [competing interest 2]." }
  ],
  "rubric": [
    { "index": 0, "points": 1, "description": "Full description of what earns the point for part (a)", "partLabel": "a", "skill": "identify", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] },
    { "index": 1, "points": 1, "description": "Full description of what earns the point for part (b)", "partLabel": "b", "skill": "explain", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] },
    { "index": 2, "points": 1, "description": "Full description of what earns the point for part (c)", "partLabel": "c", "skill": "explain", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] }
  ],
  "sampleSolution": null
}]

Generate all ${count} now.`;
}

function buildAPGOVQAPrompt(unit, topics, difficulty, count, startIndex) {
  return `Generate exactly ${count} AP Government and Politics Quantitative Analysis (QA) FRQ(s) for Unit ${unit}.

Difficulty: ${difficulty}
Topics (spread across): ${topics.join(', ')}

QA RULES:
- 4 parts (a, b, c, d), 4 points total
- Based on a text-described data source (polling data, bar chart, table, or electoral map described in text — no actual image)
- The stimulus MUST include specific numbers (percentages, vote totals, approval ratings, etc.)
- Part (a): Describe a pattern in the data (what the numbers show)
- Part (b): Draw a conclusion from the data (what the pattern means politically)
- Part (c): Explain how the data relates to a specific political science concept
- Part (d): Explain a limitation of the data or an alternative explanation for the pattern
- Each question must cover a DIFFERENT topic

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "gov-qa-u${unit}-${String(startIndex).padStart(2,'0')}",
  "subject": "apgov",
  "frqType": "qa",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "${difficulty}",
  "points": 4,
  "prompt": "Use the data described below to answer parts (a) through (d).",
  "stimulus": "Text description of the data source with specific numbers, e.g.: 'A 2022 Gallup poll shows approval ratings for Congress: 18% approve among Republicans, 22% among Democrats, and 14% among Independents. Approval has declined from 35% in 2010.'",
  "parts": [
    { "label": "a", "question": "Describe a pattern shown in the data." },
    { "label": "b", "question": "Draw a conclusion about [political phenomenon] based on the data." },
    { "label": "c", "question": "Explain how the data relates to [specific political science concept]." },
    { "label": "d", "question": "Explain ONE limitation of the data or an alternative explanation for the pattern described in part (a)." }
  ],
  "rubric": [
    { "index": 0, "points": 1, "description": "Full description of what earns the point for part (a)", "partLabel": "a", "skill": "describe", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] },
    { "index": 1, "points": 1, "description": "Full description of what earns the point for part (b)", "partLabel": "b", "skill": "explain", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] },
    { "index": 2, "points": 1, "description": "Full description of what earns the point for part (c)", "partLabel": "c", "skill": "explain", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] },
    { "index": 3, "points": 1, "description": "Full description of what earns the point for part (d)", "partLabel": "d", "skill": "explain", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] }
  ],
  "sampleSolution": null
}]

Generate all ${count} now.`;
}

function buildAPGOVSCOTUSPrompt(unit, topics, difficulty, count, startIndex) {
  const requiredCases = [
    'Marbury v. Madison', 'McCulloch v. Maryland', 'Schenck v. United States',
    'Brown v. Board of Education', 'Baker v. Carr', 'Engel v. Vitale',
    'Gideon v. Wainwright', 'Tinker v. Des Moines', 'New York Times v. United States',
    'Wisconsin v. Yoder', 'Roe v. Wade', 'Shaw v. Reno',
    'United States v. Lopez', 'McDonald v. Chicago', 'Citizens United v. FEC'
  ];
  return `Generate exactly ${count} AP Government and Politics SCOTUS Comparison FRQ(s) for Unit ${unit}.

Difficulty: ${difficulty}
Topics (spread across): ${topics.join(', ')}
Required AP Gov SCOTUS cases (must cite one): ${requiredCases.join(', ')}

SCOTUS COMPARISON RULES:
- 3 parts (a, b, c), 3 points total
- Must cite ONE required SCOTUS case from the list above AND one non-required case
- Part (a): Describe the holding of the required SCOTUS case
- Part (b): Explain how the non-required case is similar to OR different from the required case in its constitutional reasoning or outcome
- Part (c): Explain the broader constitutional principle or precedent at stake across both cases
- Each question must cover a DIFFERENT topic

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "gov-scotus-u${unit}-${String(startIndex).padStart(2,'0')}",
  "subject": "apgov",
  "frqType": "scotus",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "${difficulty}",
  "points": 3,
  "prompt": "Use your knowledge of [Required Case] and [Non-Required Case] to answer parts (a) through (c).",
  "stimulus": null,
  "requiredCase": "Name of the required AP Gov SCOTUS case used",
  "nonRequiredCase": "Name of the non-required case used",
  "parts": [
    { "label": "a", "question": "Describe the holding of [Required Case]." },
    { "label": "b", "question": "Explain how [Non-Required Case] is [similar to / different from] [Required Case] in its constitutional reasoning." },
    { "label": "c", "question": "Explain the broader constitutional principle or precedent that both cases address." }
  ],
  "rubric": [
    { "index": 0, "points": 1, "description": "Full description of what earns the point for part (a)", "partLabel": "a", "skill": "describe", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] },
    { "index": 1, "points": 1, "description": "Full description of what earns the point for part (b)", "partLabel": "b", "skill": "explain", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] },
    { "index": 2, "points": 1, "description": "Full description of what earns the point for part (c)", "partLabel": "c", "skill": "explain", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] }
  ],
  "sampleSolution": null
}]

Generate all ${count} now.`;
}

function buildAPGOVARGPrompt(unit, topics, difficulty, count, startIndex) {
  return `Generate exactly ${count} AP Government and Politics Argument Essay (ARG) FRQ(s) for Unit ${unit}.

Difficulty: hard
Topics (spread across): ${topics.join(', ')}

ARG RULES:
- No parts, 6 points total
- Prompt format: "Develop an argument that explains..." — the claim must be GENUINELY DEBATABLE
- Must require students to:
  1. Write a defensible claim responding to the prompt
  2. Support it with at least TWO pieces of specific evidence from different categories (foundational document, required SCOTUS case, or political institution)
  3. Address a counterargument and explain why the argument still holds
  4. Explain how the argument relates to a specific political science concept
- Reject prompts where one side has overwhelming evidence — the claim must be contestable
- Each question must cover a DIFFERENT topic

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "gov-arg-u${unit}-${String(startIndex).padStart(2,'0')}",
  "subject": "apgov",
  "frqType": "arg",
  "title": "Descriptive Title",
  "units": [${unit}],
  "difficulty": "hard",
  "points": 6,
  "prompt": "Develop an argument that explains [genuinely debatable claim about a political science concept]...",
  "stimulus": null,
  "parts": [],
  "rubric": [
    { "index": 0, "points": 1, "description": "States a defensible claim or thesis that responds to the prompt", "partLabel": null, "skill": "argue", "keywords": ["defensible claim", "thesis", "responds to prompt", "debatable position", "political argument", "policy position"] },
    { "index": 1, "points": 2, "description": "Supports the argument with at least two specific pieces of evidence from different categories (foundational document, required SCOTUS case, or political institution)", "partLabel": null, "skill": "argue", "keywords": ["evidence", "foundational document", "SCOTUS case", "political institution", "specific example", "supports claim"] },
    { "index": 2, "points": 2, "description": "Addresses a counterargument and explains why the argument still holds", "partLabel": null, "skill": "argue", "keywords": ["counterargument", "opposing view", "despite", "however", "concede", "rebuttal", "acknowledges"] },
    { "index": 3, "points": 1, "description": "Explains how the argument relates to a specific political science concept", "partLabel": null, "skill": "explain", "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"] }
  ],
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
2. DBQ has exactly 7 stimulus documents with years that are historically accurate within the stated period
3. LEQ prompt is genuinely analytical, not a knowledge-dump — rewrite if needed
4. DROP any question with anachronistic content (add to flagged)

${JSON.stringify(questions, null, 2)}

Return ONLY valid JSON, zero markdown:
{
  "clean": [full fixed question objects that passed all checks],
  "flagged": [{"id": "...", "issue": "description of what is wrong"}]
}`;
}

function buildAPGOVAuditPrompt(questions) {
  const requiredCases = [
    'Marbury v. Madison', 'McCulloch v. Maryland', 'Schenck v. United States',
    'Brown v. Board of Education', 'Baker v. Carr', 'Engel v. Vitale',
    'Gideon v. Wainwright', 'Tinker v. Des Moines', 'New York Times v. United States',
    'Wisconsin v. Yoder', 'Roe v. Wade', 'Shaw v. Reno',
    'United States v. Lopez', 'McDonald v. Chicago', 'Citizens United v. FEC'
  ];
  return `You are an expert AP Government and Politics teacher. Audit these ${questions.length} AP Gov FRQ questions.

Check and FIX:
1. CA questions have exactly 3 parts with labels a, b, c
2. QA questions have exactly 4 parts with labels a, b, c, d — AND the stimulus is text-described with specific numbers (not a vague description)
3. SCOTUS questions cite a real required AP Gov case from this list: ${requiredCases.join(', ')} — flag if the required case is not on this list
4. ARG prompts are genuinely debatable — rewrite any prompt where only one side has strong evidence
5. Every rubric item has at least 5 subject-specific keywords — add more if fewer
6. DROP any question with factual errors (add to flagged)

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
  const isAPGOV = subjectKey === 'apgov';
  const units = Object.entries(config.units);

  for (const [unitNum, unitConfig] of units) {
    const unit = parseInt(unitNum);
    if (unitFilter !== null && unit !== unitFilter) continue;

    const currentInUnit = existing.filter(q => q.units && q.units.includes(unit));

    if (isAPUSH) {
      await generateAPUSHUnit(unit, unitConfig, config, currentInUnit, existing, allFlagged, { lastIndex, totalGenerated, totalFlagged });
    } else if (isAPGOV) {
      await generateAPGOVUnit(unit, unitConfig, config, currentInUnit, existing, allFlagged, { lastIndex, totalGenerated, totalFlagged });
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
            fs.writeFileSync('scripts/frq_parse_error_debug.txt', raw, 'utf8');
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
            fs.writeFileSync('scripts/frq_parse_error_debug.txt', raw, 'utf8');
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
          fs.writeFileSync('scripts/frq_parse_error_debug.txt', raw, 'utf8');
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
          fs.writeFileSync('scripts/frq_parse_error_debug.txt', raw, 'utf8');
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

async function generateAPGOVUnit(unit, unitConfig, config, currentInUnit, existing, allFlagged, counters) {
  const targets = config.targets;

  // CA
  const currentCA = currentInUnit.filter(q => q.frqType === 'ca').length;
  const needCA = Math.max(0, targets.ca - currentCA);

  // QA
  const currentQA = currentInUnit.filter(q => q.frqType === 'qa').length;
  const needQA = Math.max(0, targets.qa - currentQA);

  // SCOTUS
  const currentSCOTUS = currentInUnit.filter(q => q.frqType === 'scotus').length;
  const needSCOTUS = Math.max(0, targets.scotus - currentSCOTUS);

  // ARG
  const currentARG = currentInUnit.filter(q => q.frqType === 'arg').length;
  const needARG = Math.max(0, targets.arg - currentARG);

  console.log(`Unit ${unit}: need +${needCA} CA, +${needQA} QA, +${needSCOTUS} SCOTUS, +${needARG} ARG`);

  // Generate CAs
  if (needCA > 0) {
    const dist = difficultyDistribution(needCA);
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
        process.stdout.write(`  Generating ${batchCount}x ${difficulty} CA Unit ${unit}... `);
        try {
          const genRaw = await callBedrock(buildAPGOVCAPrompt(unit, unitConfig.topics, difficulty, batchCount, counters.lastIndex));
          let generated;
          try {
            generated = parseJSON(genRaw);
            if (!Array.isArray(generated)) generated = [generated];
          } catch {
            console.log(`PARSE ERROR — skipping`);
            fs.writeFileSync('scripts/frq_parse_error_debug.txt', raw, 'utf8');
            remaining -= batchCount;
            await sleep(DELAY_MS);
            continue;
          }
          await sleep(1000);
          process.stdout.write(`auditing... `);
          const auditRaw = await callBedrock(buildAPGOVAuditPrompt(generated));
          let auditResult;
          try { auditResult = parseJSON(auditRaw); } catch { auditResult = { clean: generated, flagged: [] }; }
          let clean = auditResult.clean || [];
          const flagged = auditResult.flagged || [];
          if (clean.length === 0 && flagged.length === 0) { clean = generated; }
          clean.forEach((q, i) => { q.id = `gov-ca-u${unit}-${String(counters.lastIndex + i).padStart(2, '0')}`; });
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

  // Generate QAs
  if (needQA > 0) {
    const dist = difficultyDistribution(needQA);
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
        process.stdout.write(`  Generating ${batchCount}x ${difficulty} QA Unit ${unit}... `);
        try {
          const genRaw = await callBedrock(buildAPGOVQAPrompt(unit, unitConfig.topics, difficulty, batchCount, counters.lastIndex));
          let generated;
          try {
            generated = parseJSON(genRaw);
            if (!Array.isArray(generated)) generated = [generated];
          } catch {
            console.log(`PARSE ERROR — skipping`);
            fs.writeFileSync('scripts/frq_parse_error_debug.txt', raw, 'utf8');
            remaining -= batchCount;
            await sleep(DELAY_MS);
            continue;
          }
          await sleep(1000);
          process.stdout.write(`auditing... `);
          const auditRaw = await callBedrock(buildAPGOVAuditPrompt(generated));
          let auditResult;
          try { auditResult = parseJSON(auditRaw); } catch { auditResult = { clean: generated, flagged: [] }; }
          let clean = auditResult.clean || [];
          const flagged = auditResult.flagged || [];
          if (clean.length === 0 && flagged.length === 0) { clean = generated; }
          clean.forEach((q, i) => { q.id = `gov-qa-u${unit}-${String(counters.lastIndex + i).padStart(2, '0')}`; });
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

  // Generate SCOTUS
  if (needSCOTUS > 0) {
    const dist = difficultyDistribution(needSCOTUS);
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
        process.stdout.write(`  Generating ${batchCount}x ${difficulty} SCOTUS Unit ${unit}... `);
        try {
          const genRaw = await callBedrock(buildAPGOVSCOTUSPrompt(unit, unitConfig.topics, difficulty, batchCount, counters.lastIndex));
          let generated;
          try {
            generated = parseJSON(genRaw);
            if (!Array.isArray(generated)) generated = [generated];
          } catch {
            console.log(`PARSE ERROR — skipping`);
            fs.writeFileSync('scripts/frq_parse_error_debug.txt', raw, 'utf8');
            remaining -= batchCount;
            await sleep(DELAY_MS);
            continue;
          }
          await sleep(1000);
          process.stdout.write(`auditing... `);
          const auditRaw = await callBedrock(buildAPGOVAuditPrompt(generated));
          let auditResult;
          try { auditResult = parseJSON(auditRaw); } catch { auditResult = { clean: generated, flagged: [] }; }
          let clean = auditResult.clean || [];
          const flagged = auditResult.flagged || [];
          if (clean.length === 0 && flagged.length === 0) { clean = generated; }
          clean.forEach((q, i) => { q.id = `gov-scotus-u${unit}-${String(counters.lastIndex + i).padStart(2, '0')}`; });
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

  // Generate ARGs (DBQ_BATCH_SIZE like DBQ)
  if (needARG > 0) {
    let remaining = needARG;
    while (remaining > 0) {
      const batchCount = Math.min(DBQ_BATCH_SIZE, remaining);
      counters.lastIndex++;
      process.stdout.write(`  Generating ${batchCount}x ARG Unit ${unit}... `);
      try {
        const genRaw = await callBedrock(buildAPGOVARGPrompt(unit, unitConfig.topics, 'hard', batchCount, counters.lastIndex));
        let generated;
        try {
          generated = parseJSON(genRaw);
          if (!Array.isArray(generated)) generated = [generated];
        } catch {
          console.log(`PARSE ERROR — skipping`);
          fs.writeFileSync('scripts/frq_parse_error_debug.txt', raw, 'utf8');
          remaining -= batchCount;
          await sleep(DELAY_MS);
          continue;
        }
        await sleep(1000);
        process.stdout.write(`auditing... `);
        const auditRaw = await callBedrock(buildAPGOVAuditPrompt(generated));
        let auditResult;
        try { auditResult = parseJSON(auditRaw); } catch { auditResult = { clean: generated, flagged: [] }; }
        let clean = auditResult.clean || [];
        const flagged = auditResult.flagged || [];
        if (clean.length === 0 && flagged.length === 0) { clean = generated; }
        clean.forEach((q, i) => { q.id = `gov-arg-u${unit}-${String(counters.lastIndex + i).padStart(2, '0')}`; });
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
  apbio     AP Biology                    (4 short + 2 long per unit, 8 units)
  apcalc    AP Calculus AB                (4 short + 2 long per unit, 8 units)
  apcalcbc  AP Calculus BC                (4 short + 2 long per unit, 10 units)
  apstats   AP Statistics                 (6 short per unit, 9 units)
  apmicro   AP Microeconomics             (3 short + 2 long per unit, 6 units)
  apmacro   AP Macroeconomics             (3 short + 2 long per unit, 6 units)
  apush     AP US History                 (2 SAQ + 1 LEQ + 1 DBQ per period, 9 periods)
  apgov     AP Government and Politics    (2 CA + 1 QA + 1 SCOTUS + 1 ARG per unit, 5 units)
  apenviro  AP Environmental Science      (4 short + 2 long per unit, 9 units)
  apphys1   AP Physics 1                  (3 short + 2 long per unit, 7 units)
  apphysc   AP Physics C                  (3 short + 2 long per unit, 5 units)

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
