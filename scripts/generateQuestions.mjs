// scripts/generateQuestions.mjs
// JPrep Question Generator + Inline Audit
// Usage: node scripts/generateQuestions.mjs --subject apbio
// Requires: AWS credentials configured (aws configure) + Bedrock Sonnet access

import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import fs from 'fs';
import path from 'path';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const MODEL_ID = "us.anthropic.claude-sonnet-4-6";
const BATCH_SIZE = 10;
const DELAY_MS = 2000;
const DATA_DIR = './js/data';
const SESSION_TOKEN_LIMIT = 5000000;

const client = new BedrockRuntimeClient({ region: "us-east-1" });

// ─── SUBJECT DEFINITIONS ─────────────────────────────────────────────────────

const SUBJECTS = {
  apcsa: {
    globalVar: 'APCSA_MCQ',
    outputFile: 'js/data/apcsa_mcq.js',
    idPrefix: 'csa',
    units: {
      1: { target: 70, topics: ['primitive types', 'int', 'double', 'boolean', 'casting', 'arithmetic operators', 'assignment operators', 'integer division', 'modulo'] },
      2: { target: 70, topics: ['String methods', 'Math class', 'objects', 'constructors', 'method calls', 'null', 'wrapper classes', 'String concatenation', 'charAt', 'substring', 'indexOf'] },
      3: { target: 70, topics: ['if/else', 'boolean expressions', 'compound boolean', 'De Morgan\'s law', 'nested conditionals', 'switch statements', 'short circuit evaluation'] },
      4: { target: 70, topics: ['while loops', 'for loops', 'nested loops', 'loop tracing', 'string traversal', 'do-while', 'arrays in loops', 'loop invariants', 'enhanced for loop', 'ArrayList iteration'] },
    }
  },
  apbio: {
    globalVar: 'APBIO_MCQ',
    outputFile: 'js/data/apbio_mcq.js',
    idPrefix: 'bio',
    units: {
      1: { target: 70, topics: ['water properties', 'hydrogen bonds', 'pH', 'carbon chemistry', 'macromolecules', 'proteins', 'lipids', 'carbohydrates', 'nucleic acids', 'dehydration synthesis', 'hydrolysis'] },
      2: { target: 70, topics: ['cell structure', 'organelles', 'prokaryote vs eukaryote', 'membrane structure', 'fluid mosaic model', 'membrane transport', 'osmosis', 'tonicity', 'active transport', 'endocytosis', 'exocytosis'] },
      3: { target: 70, topics: ['enzymes', 'activation energy', 'enzyme inhibition', 'ATP', 'glycolysis', 'Krebs cycle', 'electron transport chain', 'fermentation', 'photosynthesis', 'light reactions', 'Calvin cycle'] },
      4: { target: 70, topics: ['cell signaling', 'signal transduction', 'second messengers', 'cell cycle', 'mitosis', 'cyclin CDK', 'apoptosis', 'cancer', 'checkpoints'] },
      5: { target: 70, topics: ['meiosis', 'crossing over', 'independent assortment', 'Mendelian genetics', 'monohybrid cross', 'dihybrid cross', 'sex-linked traits', 'incomplete dominance', 'codominance', 'epistasis'] },
      6: { target: 70, topics: ['DNA structure', 'DNA replication', 'transcription', 'RNA processing', 'translation', 'genetic code', 'mutations', 'gene regulation', 'operons', 'CRISPR', 'gel electrophoresis'] },
      7: { target: 70, topics: ['natural selection', 'types of selection', 'Hardy-Weinberg', 'genetic drift', 'gene flow', 'speciation', 'phylogenetics', 'cladograms', 'molecular clocks'] },
      8: { target: 70, topics: ['population growth', 'logistic growth', 'carrying capacity', 'predator-prey', 'competition', 'symbiosis', 'succession', 'energy flow', 'biogeochemical cycles', 'human impact'] },
    }
  },
  apcalc: {
    globalVar: 'APCALC_MCQ',
    outputFile: 'js/data/apcalc_mcq.js',
    idPrefix: 'calc',
    units: {
      1: { target: 70, topics: ['limits graphically', 'limits algebraically', 'limit laws', 'one-sided limits', 'limits at infinity', 'squeeze theorem', 'continuity', 'types of discontinuity', 'IVT'] },
      2: { target: 70, topics: ['average rate of change', 'instantaneous rate of change', 'definition of derivative', 'differentiability', 'power rule', 'constant rule', 'sum rule', 'trig derivatives', 'higher order derivatives'] },
      3: { target: 70, topics: ['chain rule', 'product rule', 'quotient rule', 'implicit differentiation', 'inverse trig derivatives', 'logarithmic differentiation'] },
      4: { target: 70, topics: ['related rates', 'linearization', 'L\'Hopital\'s rule', 'mean value theorem', 'Rolle\'s theorem', 'extreme value theorem'] },
      5: { target: 70, topics: ['critical points', 'first derivative test', 'second derivative test', 'concavity', 'inflection points', 'optimization', 'curve sketching'] },
      6: { target: 70, topics: ['antiderivatives', 'indefinite integrals', 'Riemann sums', 'definite integrals', 'FTC part 1', 'FTC part 2', 'average value', 'net change theorem'] },
      7: { target: 70, topics: ['u-substitution indefinite', 'u-substitution definite', 'trig integrals', 'long division', 'completing the square'] },
      8: { target: 70, topics: ['area between curves', 'volumes disc method', 'volumes washer method', 'volumes shell method', 'arc length', 'motion problems with integrals'] },
    }
  },
  apstats: {
    globalVar: 'APSTATS_MCQ',
    outputFile: 'js/data/apstats_mcq.js',
    idPrefix: 'stats',
    units: {
      1: { target: 70, topics: ['categorical vs quantitative', 'frequency tables', 'bar charts', 'histograms', 'dotplots', 'mean median mode', 'IQR standard deviation', 'boxplots', 'outliers', 'normal distribution', 'z-scores', 'percentiles'] },
      2: { target: 70, topics: ['scatterplots', 'direction strength form', 'correlation coefficient', 'least squares regression', 'residuals', 'residual plots', 'coefficient of determination', 'influential points', 'extrapolation'] },
      3: { target: 70, topics: ['observational study vs experiment', 'sampling methods', 'bias types', 'experimental design', 'control group', 'randomization', 'blocking', 'confounding variables', 'placebo', 'double blind'] },
      4: { target: 70, topics: ['sample space', 'addition rule', 'multiplication rule', 'conditional probability', 'independence', 'discrete random variables', 'expected value', 'variance', 'binomial distribution', 'geometric distribution'] },
      5: { target: 70, topics: ['sampling distribution of proportion', 'sampling distribution of mean', 'central limit theorem', 'standard error', 'unbiasedness', 'variability'] },
      6: { target: 70, topics: ['one proportion z-interval', 'one proportion z-test', 'two proportion z-interval', 'two proportion z-test', 'conditions for inference', 'type I error', 'type II error', 'power'] },
      7: { target: 70, topics: ['one sample t-interval', 'one sample t-test', 'two sample t-interval', 'two sample t-test', 'paired t-test', 't-distribution', 'degrees of freedom'] },
      8: { target: 70, topics: ['chi-square goodness of fit', 'chi-square independence', 'chi-square homogeneity', 'expected counts', 'chi-square statistic'] },
      9: { target: 70, topics: ['inference for slope', 'confidence interval for slope', 'significance test for slope', 't-statistic for slope', 'SE of slope'] },
    }
  },
  apmicro: {
    globalVar: 'APMICRO_MCQ',
    outputFile: 'js/data/apmicro_mcq.js',
    idPrefix: 'micro',
    units: {
      1: { target: 70, topics: ['scarcity', 'opportunity cost', 'PPC', 'comparative advantage', 'absolute advantage', 'trade gains', 'economic systems', 'circular flow model'] },
      2: { target: 70, topics: ['law of demand', 'demand shifters', 'law of supply', 'supply shifters', 'equilibrium', 'price controls', 'price ceiling', 'price floor', 'consumer surplus', 'producer surplus', 'deadweight loss', 'elasticity', 'PED', 'PES', 'cross price elasticity', 'income elasticity'] },
      3: { target: 70, topics: ['total product', 'marginal product', 'diminishing returns', 'fixed vs variable costs', 'total cost', 'marginal cost', 'average total cost', 'average variable cost', 'profit maximization', 'MR=MC', 'perfect competition short run', 'perfect competition long run', 'shutdown rule'] },
      4: { target: 70, topics: ['monopoly characteristics', 'price maker', 'MR less than price', 'monopoly profit maximization', 'deadweight loss monopoly', 'price discrimination', 'natural monopoly', 'monopolistic competition', 'product differentiation', 'excess capacity', 'oligopoly', 'game theory', 'Nash equilibrium', 'collusion'] },
      5: { target: 70, topics: ['derived demand', 'MRP', 'MRC', 'labor market equilibrium', 'wage determination', 'monopsony', 'minimum wage', 'labor unions', 'bilateral monopoly'] },
      6: { target: 70, topics: ['negative externalities', 'positive externalities', 'Coase theorem', 'public goods', 'free rider problem', 'common resources', 'income inequality', 'Lorenz curve', 'Gini coefficient', 'government intervention'] },
    }
  },
  apmacro: {
    globalVar: 'APMACRO_MCQ',
    outputFile: 'js/data/apmacro_mcq.js',
    idPrefix: 'macro',
    units: {
      1: { target: 70, topics: ['scarcity', 'opportunity cost', 'PPC', 'comparative advantage', 'economic systems', 'circular flow', 'factor markets', 'product markets'] },
      2: { target: 70, topics: ['GDP components', 'C+I+G+NX', 'real vs nominal GDP', 'GDP deflator', 'CPI', 'inflation types', 'unemployment types', 'natural rate of unemployment', 'labor force', 'business cycle'] },
      3: { target: 70, topics: ['aggregate demand', 'AD shifters', 'SRAS', 'SRAS shifters', 'LRAS', 'short run equilibrium', 'long run equilibrium', 'inflationary gap', 'recessionary gap', 'fiscal policy', 'multiplier effect', 'MPC', 'MPS', 'crowding out'] },
      4: { target: 70, topics: ['money functions', 'money supply M1 M2', 'banking system', 'money creation', 'money multiplier', 'reserve requirement', 'Federal Reserve', 'monetary policy tools', 'open market operations', 'discount rate', 'money market', 'loanable funds market'] },
      5: { target: 70, topics: ['real interest rate', 'nominal interest rate', 'Fisher equation', 'investment demand', 'loanable funds', 'crowding out', 'financial markets', 'present value'] },
      6: { target: 70, topics: ['exchange rates', 'appreciation', 'depreciation', 'balance of payments', 'current account', 'capital account', 'trade deficit', 'trade surplus', 'net exports', 'foreign exchange market'] },
    }
  },
  apush: {
    globalVar: 'APUSH_MCQ',
    outputFile: 'js/data/apush_mcq.js',
    idPrefix: 'apush',
    units: {
      1: { target: 70, topics: ['Native American societies', 'Columbian Exchange', 'Spanish colonization', 'Portuguese exploration', 'European motives', 'demographic collapse', 'encomienda system', 'Aztec and Inca empires'] },
      2: { target: 70, topics: ['Chesapeake colonies', 'New England colonies', 'Middle colonies', 'indentured servitude', 'transatlantic slave trade', 'colonial society', 'Puritan theology', 'mercantilism', 'triangular trade', 'Bacon\'s Rebellion'] },
      3: { target: 70, topics: ['Salutary neglect', 'French and Indian War', 'colonial resistance', 'Declaration of Independence', 'Revolutionary War', 'Articles of Confederation', 'Constitutional Convention', 'Federalist vs Anti-Federalist'] },
      4: { target: 70, topics: ['Hamilton financial plan', 'First Party System', 'Jefferson presidency', 'Louisiana Purchase', 'War of 1812', 'market revolution', 'Jacksonian democracy', 'Second Great Awakening', 'reform movements', 'abolitionism', 'women\'s rights'] },
      5: { target: 70, topics: ['manifest destiny', 'Mexican-American War', 'Compromise of 1850', 'Kansas-Nebraska Act', 'Dred Scott', 'Lincoln-Douglas debates', 'secession', 'Civil War', 'Emancipation Proclamation', 'Reconstruction amendments', 'Compromise of 1877'] },
      6: { target: 70, topics: ['transcontinental railroad', 'Gilded Age industry', 'robber barons', 'horizontal integration', 'vertical integration', 'labor unions', 'immigration waves', 'urbanization', 'Populist movement', 'gold vs silver debate'] },
      7: { target: 70, topics: ['Progressive movement', 'muckrakers', 'trust busting', 'women\'s suffrage', 'US imperialism', 'WWI causes', 'home front WWI', 'Red Scare', 'Roaring Twenties', 'Harlem Renaissance', 'Great Depression causes', 'New Deal programs', 'WWII causes', 'Pearl Harbor', 'home front WWII', 'Hiroshima decision'] },
      8: { target: 70, topics: ['Cold War origins', 'containment policy', 'Truman Doctrine', 'Marshall Plan', 'Korean War', 'McCarthyism', 'Cuban Missile Crisis', 'Civil Rights Movement', 'Brown v Board', 'Civil Rights Act 1964', 'Voting Rights Act 1965', 'Vietnam War escalation', 'anti-war movement', 'Great Society', 'Nixon détente', 'Watergate'] },
      9: { target: 70, topics: ['Reagan Revolution', 'Reaganomics', 'Cold War end', 'Gulf War', 'Clinton era', 'NAFTA', '9/11', 'War on Terror', 'Iraq War', 'Obama presidency', 'ACA', 'Great Recession', 'political polarization'] },
    }
  },
  apphys1: {
    globalVar: 'PHYSICS_MCQ',
    outputFile: 'js/data/physics_mcq.js',
    idPrefix: 'phys1',
    units: {
      1: { target: 70, topics: ['position displacement', 'velocity', 'acceleration', 'kinematic equations', 'free fall', 'projectile motion', 'relative motion', 'motion graphs'] },
      2: { target: 70, topics: ['Newton\'s first law', 'Newton\'s second law', 'Newton\'s third law', 'free body diagrams', 'normal force', 'friction', 'tension', 'Atwood machine', 'inclined planes'] },
      3: { target: 70, topics: ['uniform circular motion', 'centripetal acceleration', 'centripetal force', 'Newton\'s law of gravitation', 'orbital motion', 'satellite speed', 'Kepler\'s laws'] },
      4: { target: 70, topics: ['work', 'kinetic energy', 'work-energy theorem', 'potential energy', 'conservation of energy', 'power', 'spring potential energy', 'Hooke\'s law'] },
      5: { target: 70, topics: ['momentum', 'impulse', 'impulse-momentum theorem', 'conservation of momentum', 'elastic collision', 'inelastic collision', 'perfectly inelastic collision', 'center of mass'] },
      6: { target: 70, topics: ['simple harmonic motion', 'restoring force', 'period and frequency', 'spring-mass system', 'pendulum', 'amplitude', 'energy in SHM'] },
      7: { target: 70, topics: ['torque', 'moment arm', 'rotational equilibrium', 'rotational inertia', 'Newton\'s second law rotation', 'angular momentum', 'conservation of angular momentum', 'rolling motion'] },
      8: { target: 70, topics: ['electric charge', 'Coulomb\'s law', 'electric field', 'field lines', 'electric potential', 'capacitors', 'current', 'resistance', 'Ohm\'s law'] },
      9: { target: 70, topics: ['DC circuits', 'series circuits', 'parallel circuits', 'Kirchhoff\'s laws', 'power dissipation', 'voltmeter ammeter'] },
    }
  },
  apphysc: {
    globalVar: 'PHYSC_MCQ',
    outputFile: 'js/data/physc_mcq.js',
    idPrefix: 'physc',
    units: {
      1:  { target: 70, topics: ['kinematics in 1D', 'kinematics in 2D', 'projectile motion', 'relative motion', 'kinematic equations with calculus', 'derivatives of motion', 'integrals of motion'] },
      2:  { target: 70, topics: ['Newton\'s laws', 'free body diagrams', 'friction', 'drag force', 'circular motion dynamics', 'non-inertial reference frames'] },
      3:  { target: 70, topics: ['work integral', 'kinetic energy theorem', 'potential energy functions', 'conservative forces', 'conservation of energy', 'power'] },
      4:  { target: 70, topics: ['impulse momentum', 'conservation of momentum', 'elastic collisions', 'inelastic collisions', 'center of mass', 'variable mass systems'] },
      5:  { target: 70, topics: ['torque', 'rotational inertia', 'parallel axis theorem', 'Newton\'s second law rotation', 'rolling without slipping', 'angular momentum', 'gyroscopic motion'] },
      6:  { target: 70, topics: ['simple harmonic motion calculus', 'spring-mass', 'pendulum', 'energy in SHM', 'damped oscillations', 'driven oscillations', 'resonance'] },
      7:  { target: 70, topics: ['Newton\'s law gravitation', 'gravitational field', 'gravitational potential energy', 'orbital mechanics', 'escape velocity', 'Kepler\'s laws', 'satellite orbits'] },
      8:  { target: 70, topics: ['Coulomb\'s law', 'electric field', 'Gauss\'s law', 'electric flux', 'field for symmetric charge distributions', 'conductors in equilibrium'] },
      9:  { target: 70, topics: ['electric potential', 'potential from field', 'field from potential', 'equipotential surfaces', 'capacitance', 'energy stored in capacitor', 'dielectrics'] },
      10: { target: 70, topics: ['current', 'resistance', 'Ohm\'s law', 'power', 'EMF', 'series circuits', 'parallel circuits', 'Kirchhoff\'s laws', 'RC circuits transient', 'RC circuits steady state'] },
      11: { target: 70, topics: ['magnetic force on charge', 'magnetic force on wire', 'torque on current loop', 'Biot-Savart law', 'Ampere\'s law', 'magnetic field configurations', 'solenoids'] },
      12: { target: 70, topics: ['magnetic flux', 'Faraday\'s law', 'Lenz\'s law', 'motional EMF', 'inductance', 'RL circuits', 'energy in inductor'] },
    }
  },
  apgov: {
    globalVar: 'APGOV_MCQ',
    outputFile: 'js/data/apgov_mcq.js',
    idPrefix: 'gov',
    units: {
      1: { target: 70, topics: ['popular sovereignty', 'social contract', 'natural rights', 'limited government', 'separation of powers', 'checks and balances', 'federalism', 'Articles of Confederation', 'Constitutional Convention', 'Virginia Plan', 'New Jersey Plan', 'Great Compromise', 'enumerated powers', 'necessary and proper clause', 'Supremacy Clause', 'McCulloch v Maryland', 'categorical grants', 'block grants', 'dual federalism', 'cooperative federalism'] },
      2: { target: 70, topics: ['Article I', 'bicameralism', 'House vs Senate', 'filibuster', 'cloture', 'gerrymandering', 'legislative process', 'Article II', 'executive orders', 'veto power', 'commander in chief', 'cabinet', 'bureaucracy', 'iron triangles', 'Article III', 'judicial review', 'Marbury v Madison', 'federal court structure', 'judicial activism', 'judicial restraint'] },
      3: { target: 70, topics: ['First Amendment', 'free speech limits', 'Schenck v United States', 'Tinker v Des Moines', 'establishment clause', 'Engel v Vitale', 'Fourth Amendment', 'exclusionary rule', 'Miranda v Arizona', 'Gideon v Wainwright', '14th Amendment', 'equal protection', 'incorporation doctrine', 'Brown v Board', 'Civil Rights Act 1964', 'Voting Rights Act 1965', 'affirmative action', 'suspect classification'] },
      4: { target: 70, topics: ['political socialization', 'political ideology', 'liberal vs conservative', 'party identification', 'public opinion polls', 'sampling', 'question wording effects', 'ideological realignment', 'generational effects', 'political spectrum'] },
      5: { target: 70, topics: ['voter registration', 'voter turnout', 'rational ignorance', 'Electoral College', 'campaign finance', 'PACs', 'Super PACs', 'Citizens United', 'incumbency advantage', 'third parties', 'interest groups', 'lobbying', 'free rider problem', 'media agenda setting', 'framing', 'party realignment', 'primary elections'] },
    }
  },
  apcalcbc: {
    globalVar: 'APCALCBC_MCQ',
    outputFile: 'js/data/apcalcbc_mcq.js',
    idPrefix: 'calcbc',
    units: {
      1: { target: 40, topics: ['limits graphically', 'limits algebraically', 'limit laws', 'one-sided limits', 'limits at infinity', 'squeeze theorem', 'continuity', 'types of discontinuity', 'IVT'] },
      2: { target: 40, topics: ['average rate of change', 'instantaneous rate of change', 'definition of derivative', 'differentiability', 'power rule', 'trig derivatives', 'higher order derivatives'] },
      3: { target: 40, topics: ['chain rule', 'product rule', 'quotient rule', 'implicit differentiation', 'inverse trig derivatives', 'logarithmic differentiation'] },
      4: { target: 40, topics: ['related rates', 'linearization', 'L\'Hopital\'s rule', 'mean value theorem', 'Rolle\'s theorem', 'extreme value theorem'] },
      5: { target: 40, topics: ['critical points', 'first derivative test', 'second derivative test', 'concavity', 'inflection points', 'optimization', 'curve sketching'] },
      6: { target: 40, topics: ['antiderivatives', 'indefinite integrals', 'Riemann sums', 'definite integrals', 'FTC part 1', 'FTC part 2', 'average value', 'net change theorem', 'integration by parts', 'partial fractions', 'improper integrals'] },
      7: { target: 40, topics: ['u-substitution', 'integration by parts', 'partial fractions', 'trig substitution', 'trig integrals', 'improper integrals convergence', 'long division integration'] },
      8: { target: 40, topics: ['area between curves', 'volumes disc method', 'volumes washer method', 'volumes shell method', 'arc length', 'motion problems with integrals'] },
      9: { target: 70, topics: ['parametric equations', 'parametric derivatives dy/dx', 'second derivative parametric', 'arc length parametric', 'polar coordinates', 'polar area', 'polar derivatives', 'vector-valued functions', 'vector derivatives', 'vector integrals', 'position velocity acceleration vectors'] },
      10: { target: 70, topics: ['sequences', 'series', 'convergence divergence', 'geometric series', 'p-series', 'integral test', 'comparison test', 'limit comparison test', 'ratio test', 'alternating series test', 'alternating series error bound', 'power series', 'radius of convergence', 'interval of convergence', 'Taylor series', 'Maclaurin series', 'Taylor polynomial', 'Lagrange error bound', 'known series e^x sin x cos x ln(1+x)'] },
    }
  },
  apenviro: {
    globalVar: 'APENVIRO_MCQ',
    outputFile: 'js/data/apenviro_mcq.js',
    idPrefix: 'enviro',
    units: {
      1: { target: 70, topics: ['ecosystems', 'biomes', 'food chains', 'food webs', 'trophic levels', 'energy flow', 'biogeochemical cycles', 'carbon cycle', 'nitrogen cycle', 'phosphorus cycle', 'water cycle', 'primary productivity'] },
      2: { target: 70, topics: ['biodiversity', 'natural selection', 'ecological succession', 'island biogeography', 'keystone species', 'species richness', 'extinction', 'biotic interactions'] },
      3: { target: 70, topics: ['population growth', 'exponential growth', 'logistic growth', 'carrying capacity', 'survivorship curves', 'age structure diagrams', 'demographic transition', 'total fertility rate', 'human population growth'] },
      4: { target: 70, topics: ['plate tectonics', 'soil formation', 'soil horizons', 'erosion', 'weathering', 'aquifers', 'watersheds', 'El Nino', 'atmospheric layers', 'Coriolis effect', 'ocean currents'] },
      5: { target: 70, topics: ['deforestation', 'agriculture impacts', 'irrigation', 'pesticides', 'overfishing', 'mining impacts', 'urban sprawl', 'desertification', 'sustainable agriculture', 'aquaculture'] },
      6: { target: 70, topics: ['fossil fuels', 'nuclear energy', 'solar energy', 'wind energy', 'hydroelectric power', 'geothermal energy', 'biomass energy', 'energy efficiency', 'CAFE standards'] },
      7: { target: 70, topics: ['air pollution', 'primary vs secondary pollutants', 'particulate matter', 'ground level ozone', 'smog', 'acid rain', 'thermal inversion', 'Clean Air Act', 'CFCs', 'Montreal Protocol', 'indoor air pollution'] },
      8: { target: 70, topics: ['water pollution', 'point source', 'nonpoint source', 'eutrophication', 'hypoxic zones', 'biomagnification', 'bioaccumulation', 'oil spills', 'wastewater treatment', 'solid waste', 'hazardous waste', 'Clean Water Act'] },
      9: { target: 70, topics: ['climate change', 'greenhouse gases', 'greenhouse effect', 'CO2 emissions', 'sea level rise', 'ocean acidification', 'feedback loops', 'albedo', 'Paris Agreement', 'cap and trade', 'ozone depletion', 'loss of biodiversity', 'habitat fragmentation', 'invasive species'] },
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

function getLastIndex(questions) {
  let max = 0;
  for (const q of questions) {
    const match = q.id?.match(/_q(\d+)$/);
    if (match) max = Math.max(max, parseInt(match[1]));
  }
  return max;
}

async function callBedrock(prompt) {
  const body = JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    max_tokens: 128000,
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
  const usage = decoded.usage || {};
  callBedrock._lastTokens = (usage.input_tokens || 0) + (usage.output_tokens || 0);
  return decoded.content[0].text;
}

// ─── PROMPTS ─────────────────────────────────────────────────────────────────

function buildGeneratePrompt(subjectKey, unit, topics, difficulty, count, startIndex) {
  const config = SUBJECTS[subjectKey];
  const fiveChoices = ['apmicro', 'apmacro', 'apstats'].includes(subjectKey);
  const subjectName = {
    apcsa: 'AP Computer Science A', apbio: 'AP Biology', apcalc: 'AP Calculus AB',
    apstats: 'AP Statistics', apmicro: 'AP Microeconomics', apmacro: 'AP Macroeconomics',
    apush: 'AP US History', apphys1: 'AP Physics 1', apphysc: 'AP Physics C: Mechanics & E&M',
    apgov: 'AP United States Government and Politics', apcalcbc: 'AP Calculus BC',
    apenviro: 'AP Environmental Science'
  }[subjectKey];

  const ECON_HARD_GUARDRAILS = {
    apmicro: {
      1: `- Do not write more than one comparative advantage calculation question per batch.
- Do not anchor hard questions to the circular flow model — too shallow for hard.
- Do not write PPC questions where the answer depends on whether the economy is currently inside or on the frontier — keep operating point and frontier shift as separate, clearly stated concepts.`,
      2: `THIS IS A WHITELIST UNIT — only write questions from the approved types below. Do not write any question type not on this list.

APPROVED TYPES:
1. DOUBLE-SHIFT INDETERMINATE: Two shifters move simultaneously (e.g. input cost rises AND consumer income rises). Ask which outcome — price or quantity — is indeterminate. The correct answer must be the variable whose direction genuinely cannot be determined without knowing relative magnitudes. The other variable must be determinately identified in the stem or a distractor.

2. TAX INCIDENCE WITH GIVEN NUMBERS: Provide explicit PED and PES values as numbers (e.g. PED = 0.4, PES = 1.2). Ask which party bears more of the tax burden and why. All reasoning must be fully deterministic from the numbers given. Use the rule: more inelastic side bears more burden.

3. CROSS-PRICE OR INCOME ELASTICITY CALCULATION: Give explicit percentage changes (e.g. price of X rises 10%, quantity demanded of Y falls 15%). Ask the student to calculate XED or YED and classify the relationship. Fully deterministic.

4. PRICE FLOOR QUANTITY OUTCOMES: Ask about quantity supplied, quantity demanded, and surplus size under a binding price floor. Do NOT ask about welfare or surplus changes — quantity outcomes only. Fully unambiguous.

5. ELASTICITY AND TOTAL REVENUE: Give a PED value (elastic or inelastic, or a number) and a price change direction. Ask what happens to total revenue. Fully deterministic.

DO NOT WRITE: Consumer surplus under price ceilings, producer surplus under price floors, DWL decomposition, tax welfare effects without explicit numbers, any question where the correct answer depends on unstated elasticity magnitudes, or any question involving long-run supply chain reasoning that introduces new markets.`,
      3: `- Profit/loss questions must explicitly state where P sits relative to ATC and AVC. Never leave the profit/loss position implied — state it in the stem.
- Do not conflate profit-maximizing output (MR = MC) with break-even output (P = min ATC) — these are different points on the cost curve diagram.
- Long-run self-correction questions are safe and strongly preferred.`,
      4: `- Price discrimination questions must specify the degree (1st, 2nd, or 3rd). Do not write questions about "price discrimination and welfare" without specifying which degree — welfare effects differ significantly across degrees.
- Natural monopoly regulation questions must specify the pricing rule being applied (MC pricing vs. fair return / ATC pricing). Never leave this ambiguous.
- Game theory and Nash equilibrium questions are safe and strongly preferred — use payoff matrices with explicit numbers as the primary vehicle for hard questions here.`,
      5: `THIS IS A WHITELIST UNIT — only write questions from the approved types below. Do not write any question type not on this list.

APPROVED TYPES:
1. MRP CHAIN: A change in the product market (price rises/falls, productivity shifts) flows through to the factor market. Ask about the effect on wage and/or employment. Chain: product price rises → MRP = P × MP shifts right → firm hires more labor → wage rises along labor supply curve. Fully deterministic.

2. MONOPSONY GRAPH REASONING: Describe a monopsony diagram. Ask how wage and employment under monopsony compare to the competitive outcome. Correct answer: wage is below MRP, employment is below competitive level. OR: Ask where the monopsony sets employment (where MRC = MRP) and what wage it pays (reading off the labor supply curve at that employment level).

3. MINIMUM WAGE UNDER MONOPSONY WITH SPECIFIED RANGE: Describe a monopsony. State explicitly that the minimum wage is set BETWEEN the monopsony wage and the competitive wage. Ask what happens to wage and employment. Correct answer: both rise. If minimum wage is set ABOVE competitive wage, employment falls — the question must specify which range the minimum wage falls in. Never leave this ambiguous.

4. MRC VS SUPPLY CURVE: Ask why MRC lies above the labor supply curve for a monopsony. Correct answer: to hire one more worker, the firm must raise the wage for all workers, so the marginal cost of that worker exceeds just their wage.

DO NOT WRITE: Bilateral monopoly questions of any kind — wage and employment are both indeterminate at the AP level. Do not write questions where the minimum wage position relative to the competitive wage is unstated.`,
      6: `- Coase theorem questions must always specify: (a) transaction costs are zero, and (b) property rights are clearly defined. Only then is the Coase outcome determinate. Never write a Coase question without stating both conditions explicitly in the stem.
- Pigouvian tax/subsidy questions are safe and strongly preferred.
- Lorenz curve and Gini coefficient questions are safe.
- Public goods questions are safe — focus on excludability and rivalry distinctions.`,
    },
    apmacro: {
      1: `- Same as Micro Unit 1. No circular flow hard questions — too shallow.
- No more than one comparative advantage calculation question per batch.`,
      2: `THIS IS A WHITELIST UNIT — only write questions from the approved types below. Do not write any question type not on this list.

APPROVED TYPES:
1. REAL VS NOMINAL CALCULATION: Give explicit nominal GDP and GDP deflator values (or CPI values). Ask the student to calculate real GDP or the inflation rate. Fully deterministic. Include a distractor that uses the wrong formula direction (e.g. multiplying instead of dividing by the deflator).

2. UNEMPLOYMENT RATE CALCULATION: Give explicit labor force and unemployed counts. Ask for unemployment rate. Fully deterministic. Include distractors that use the wrong denominator (total population instead of labor force) or wrong numerator.

3. UNEMPLOYMENT TYPE IDENTIFICATION: Describe a specific scenario (e.g. a worker laid off because their skill is obsolete due to technology). Ask which type of unemployment this represents. Correct answer must be unambiguous from the scenario. Include distractors that describe scenarios for different unemployment types.

4. POLICY → UNEMPLOYMENT TYPE: Ask which type of unemployment expansionary fiscal or monetary policy directly reduces. Correct answer: cyclical only. Distractors must include structural and frictional (policy does NOT directly fix these).

5. GDP COMPONENTS CHAIN: Describe an economic event and ask which GDP component (C, I, G, NX) changes and in which direction. Fully deterministic.

DO NOT WRITE: Questions asking which measure (CPI vs GDP deflator) is more accurate or better — this is evaluative and not CB-testable. Do not write questions claiming expansionary policy reduces structural or frictional unemployment.`,
      3: `- Balanced budget multiplier questions must show the explicit arithmetic in the explanation: spending multiplier minus tax multiplier = 1/(1-MPC) - MPC/(1-MPC) = 1. Do not just assert the result.
- AD-AS graph chain questions are strongly preferred — describe a shock, ask about SR equilibrium, then LR self-correction outcome. These are fully deterministic.
- Crowding out chain questions are safe and strongly preferred.
- Multiplier calculation questions must give explicit MPC values.`,
      4: `- Never conflate the federal funds rate and the discount rate. Be precise: open market operations → federal funds rate (indirect). Fed sets discount rate directly. A question stem or explanation that uses these interchangeably will be flagged.
- Money market and loanable funds graph chain questions are strongly preferred.
- Money multiplier calculation questions are safe — give explicit reserve ratio.`,
      5: `- No present value calculation questions — beyond AP scope.
- If present value appears, keep it conceptual only: higher real interest rate → lower PV of future returns → investment demand falls.
- Crowding out chain questions are strongly preferred: government borrows more → demand for loanable funds shifts right → real interest rate rises → private investment falls → AD shifts left by less than fiscal stimulus.
- Fisher equation questions are safe: give nominal rate and inflation, ask for real.`,
      6: `THIS IS A WHITELIST UNIT — only write questions from the approved types below. Do not write any question type not on this list.

APPROVED TYPES:
1. INTEREST RATE → FX CHAIN: A domestic policy changes the real interest rate. Trace the full chain: real interest rate rises → foreign investors demand more domestic financial assets → demand for domestic currency rises in FX market → domestic currency appreciates → exports more expensive for foreigners → net exports fall → AD shifts left. Question must ask about a variable at least 2 steps downstream. The stem must reference capital flows explicitly so the model is forced to include that step. Do not skip the capital flows step.

2. FX GRAPH SHIFT: Describe a specific event (e.g. domestic inflation rises, making exports less competitive). Ask which curve shifts in the foreign exchange market, in which direction, and what happens to the exchange rate. Fully deterministic from the described event.

3. TRADE BALANCE CHAIN: Describe a change in exchange rate (appreciation or depreciation). Ask what happens to exports, imports, and the current account balance. Appreciation → exports fall, imports rise, current account worsens. Depreciation → exports rise, imports fall, current account improves. Fully deterministic.

4. BOP ACCOUNTING: State that the current account is in surplus/deficit. Ask what must be true of the capital account. Correct answer: capital account is in the opposite position (they sum to zero). Include a distractor that gets the direction right but the account name wrong, and one that claims both can be in surplus.

DO NOT WRITE: Questions where the interest rate → exchange rate chain skips the capital flows step. Do not write questions about current account and capital account where the relationship (sum to zero) is left for the student to derive without being anchored in the stem — this produces ambiguous distractors. Do not write questions claiming both BOP accounts can simultaneously be in surplus or deficit.`,
    },
  };

  const econGuardrailBlock = ((subjectKey === 'apmicro' || subjectKey === 'apmacro') && difficulty === 'hard')
    ? (ECON_HARD_GUARDRAILS[subjectKey]?.[unit]
        ? `\n\nUNIT-SPECIFIC GUARDRAILS — avoid these known error patterns for this unit:\n${ECON_HARD_GUARDRAILS[subjectKey][unit]}`
        : '')
    : '';

  const econHardBlock = ((subjectKey === 'apmicro' || subjectKey === 'apmacro') && difficulty === 'hard') ? `

HARD ECON REQUIREMENTS — these override the generic hard rule above:
Every hard question MUST do at least one of the following:

OPTION A — GRAPH REASONING (at least 40% of hard questions should be this type):
Base the question on a named AP Econ graph. Describe the initial state, describe a change, and ask the student to identify the effect on a specific variable read off the graph. Named graphs for AP Macro: AD-AS model, Short-Run Phillips Curve, Long-Run Phillips Curve, Money Market, Loanable Funds Market, Foreign Exchange Market. Named graphs for AP Micro: Supply and Demand, PPC, MC/ATC/AVC cost curves, Perfect competition firm diagram, Monopoly diagram, MRP/factor market diagram, Externality diagram with MSC/MSB.
Question stem format: "In the [graph name], if [condition], which of the following correctly describes [specific variable]?"

OPTION B — MULTI-MARKET CHAIN:
An event in one market causes a sequence of effects across two or more connected markets. The question asks about a variable at the END of the chain, not the immediate first-order effect.
Example chain: Fed sells bonds → money supply decreases → nominal interest rate rises in money market → investment falls → AD shifts left in AD-AS → price level and real GDP change.
The correct answer requires the student to trace at least 2 steps. Distractors should describe correct outcomes for earlier steps in the chain (plausible if you stopped reasoning one step too early).

OPTION C — SR vs LR WITH SELF-CORRECTION:
A shock or policy has a clear short-run effect. The question asks what happens AFTER the self-correcting mechanism plays out in the long run. The student must know what adjusts (wages for macro, entry/exit for micro) and in which direction.

OPTION D — MULTIPLIER OR ELASTICITY CALCULATION WITH A TRAP:
Give the student a specific number (MPC, price elasticity value, reserve ratio) and ask them to calculate or compare outcomes. Include a distractor that uses the wrong multiplier formula (e.g. tax multiplier instead of spending multiplier, or forgetting the negative sign on tax multiplier).

DISTRACTOR RULES FOR HARD ECON:
- Every wrong answer must describe something economically real and correct — just for a different scenario, a different step in the chain, or the short run instead of long run.
- Do not use obviously wrong statements. A student who half-studied should be able to make a reasonable case for at least 2 of the 4 wrong answers.
- Keep all 5 choices roughly the same length and specificity. Do not make the correct answer the longest or most detailed.
- Never generate more than 5 answer choices. AP Econ uses exactly 5 choices (A through E). If you find yourself writing a sixth option, delete it before responding. The choices array in the JSON must have exactly 5 elements.` : '';

  return `Generate exactly ${count} ${subjectName} multiple choice questions.

Unit: ${unit} | Difficulty: ${difficulty}
Topics (spread across all): ${topics.join(', ')}

RULES:
- Easy: single concept, one-step logic, direct recall
- Medium: 2-3 step reasoning, applying concept to scenario
- Hard: multi-concept synthesis, common AP traps, requires deep understanding${subjectKey === 'apphysc' ? '; MUST involve calculus-based reasoning (derivatives, integrals, differential equations)' : ''}
- Distractors MUST represent real student misconceptions — plausible, not absurd
- No anachronisms, no joke answers, no absurd options
- Each question should cover a different topic
${fiveChoices ? '- Use exactly 5 choices (AP Econ/Stats format)' : '- Use exactly 4 choices'}${econHardBlock}${econGuardrailBlock}

Return ONLY a valid JSON array, zero markdown:
[{
  "id": "${config.idPrefix}_u${unit}_q${String(startIndex).padStart(3,'0')}",
  "subject": "${subjectKey}",
  "unit": ${unit},
  "topic": "topic name",
  "topicLabel": "topic name",
  "difficulty": "${difficulty}",
  "calculator": false,
  "isLatex": false,
  "format": "text",
  "question": "Question text?",
  "choices": ${fiveChoices ? '["A) ...", "B) ...", "C) ...", "D) ...", "E) ..."]' : '["A) ...", "B) ...", "C) ...", "D) ..."]'},
  "answer": 0,
  "explanation": "Why correct answer is right and why common wrong answers are wrong."
}]

answer is 0-indexed integer. Generate all ${count} now. Output the JSON array only. Do not write any text before or after the array. Start your response with [ and end with ].`;
}

function buildAuditPrompt(subjectKey, questions) {
  const subjectName = {
    apcsa: 'AP Computer Science A', apbio: 'AP Biology', apcalc: 'AP Calculus AB',
    apstats: 'AP Statistics', apmicro: 'AP Microeconomics', apmacro: 'AP Macroeconomics',
    apush: 'AP US History', apphys1: 'AP Physics 1', apphysc: 'AP Physics C',
    apgov: 'AP United States Government and Politics', apcalcbc: 'AP Calculus BC',
    apenviro: 'AP Environmental Science'
  }[subjectKey];

  return `You are an expert ${subjectName} teacher. Audit these ${questions.length} questions.

Check each:
1. Is the answer factually/mathematically correct?
2. Are distractors plausible (not absurd or anachronistic)?
3. Is difficulty label appropriate?
4. Is the question unambiguous with one clear correct answer?

${JSON.stringify(questions, null, 2)}

Return ONLY valid JSON, zero markdown:
{
  "clean": [full question objects that passed all checks],
  "flagged": [{"id": "...", "issue": "what is wrong", "fix": "suggested fix or null"}]
}`;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function generateForSubject(subjectKey, targetOverride, difficultyFilter = null, unitFilter = null) {
  const config = SUBJECTS[subjectKey];
  if (!config) {
    console.error(`Unknown subject: ${subjectKey}\nAvailable: ${Object.keys(SUBJECTS).join(', ')}`);
    process.exit(1);
  }

  const filePath = config.outputFile;
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let existing = extractArray(content);
  if (!existing) { console.error(`Could not parse ${filePath}`); process.exit(1); }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  JPrep Generator — ${subjectKey.toUpperCase()}`);
  console.log(`  Current: ${existing.length} questions`);
  console.log(`${'═'.repeat(60)}\n`);

  const allFlagged = [];
  let lastIndex = getLastIndex(existing);
  let totalGenerated = 0;
  let totalFlagged = 0;
  let sessionTokens = 0;

  for (const [unitNum, unitConfig] of Object.entries(config.units)) {
    const unit = parseInt(unitNum);
    if (unitFilter !== null && unit !== unitFilter) continue;

    const currentInUnit = existing.filter(q => q.unit === unit);
    const currentEasy = currentInUnit.filter(q => q.difficulty === 'easy').length;
    const currentMed  = currentInUnit.filter(q => q.difficulty === 'medium').length;
    const currentHard = currentInUnit.filter(q => q.difficulty === 'hard').length;

    const hardDirectMode = difficultyFilter === 'hard' && targetOverride !== null;
    const target    = targetOverride || unitConfig.target || 70;
    const targetE   = Math.ceil(target * 0.20);
    const targetM   = Math.ceil(target * 0.50);
    const targetH   = Math.ceil(target * 0.30);
    const needEasy  = hardDirectMode ? 0 : Math.max(0, targetE - currentEasy);
    const needMed   = hardDirectMode ? 0 : Math.max(0, targetM - currentMed);
    const needHard  = hardDirectMode ? targetOverride : Math.max(0, targetH - currentHard);

    console.log(`Unit ${unit}: have ${currentInUnit.length} | need +${needEasy}E +${needMed}M +${needHard}H`);

    const batches = [
      { difficulty: 'easy',   count: needEasy },
      { difficulty: 'medium', count: needMed  },
      { difficulty: 'hard',   count: needHard },
    ].filter(b => b.count > 0 && (!difficultyFilter || b.difficulty === difficultyFilter));

    for (const { difficulty, count } of batches) {
      let remaining = count;

      while (remaining > 0) {
        const maxBatch = difficulty === 'hard' ? 3 : BATCH_SIZE;
        const batchCount = Math.min(maxBatch, remaining);
        lastIndex++;

        process.stdout.write(`  Generating ${batchCount}x ${difficulty} Unit ${unit}... `);

        try {
          const genRaw = await callBedrock(
            buildGeneratePrompt(subjectKey, unit, unitConfig.topics, difficulty, batchCount, lastIndex)
          );
          sessionTokens += callBedrock._lastTokens || 0;

          let generated;
          try {
            const cleaned = genRaw
              .replace(/```json|```/g, '')
              .replace(/\.\.\./g, '')
              .replace(/\u2014/g, '-')
              .replace(/\u2013/g, '-')
              .replace(/"([A-D])"(\)[^"]*?)"/g, '"$1$2"')
              .replace(/"([A-D])": "([^"]*)"/g, '"$1) $2"')
              .trim();
            // Try direct parse first
            try {
              generated = JSON.parse(cleaned);
            } catch {
              // Fall back to extracting the array using bracket matching
              const start = cleaned.indexOf('[');
              if (start === -1) throw new Error('No JSON array found in response');
              let depth = 0, end = -1, inString = false, i = start;
              while (i < cleaned.length) {
                const ch = cleaned[i];
                if (inString) {
                  if (ch === '\\') { i += 2; continue; } // skip escaped char
                  if (ch === '"') inString = false;
                } else {
                  if (ch === '"') inString = true;
                  else if (ch === '[') depth++;
                  else if (ch === ']') { depth--; if (depth === 0) { end = i; break; } }
                }
                i++;
              }
              if (end === -1) throw new Error('Unterminated JSON array');
              generated = JSON.parse(cleaned.slice(start, end + 1));
            }
          } catch {
            console.log(`PARSE ERROR — retrying one at a time...`);
            fs.writeFileSync('scripts/parse_error_debug.txt', genRaw, 'utf8');
            let recovered = 0;
            for (let r = 0; r < batchCount; r++) {
              await sleep(DELAY_MS);
              try {
                const singleRaw = await callBedrock(
                  buildGeneratePrompt(subjectKey, unit, unitConfig.topics, difficulty, 1, lastIndex + r)
                );
                const singleCleaned = singleRaw
                  .replace(/```json|```/g, '')
                  .replace(/\.\.\./g, '')
                  .replace(/\u2014/g, '-')
                  .replace(/\u2013/g, '-')
                  .replace(/"([A-D])"(\)[^"]*?)"/g, '"$1$2"')
                  .trim();
                let singleParsed;
                try {
                  singleParsed = JSON.parse(singleCleaned);
                } catch {
                  const start2 = singleCleaned.indexOf('[');
                  if (start2 === -1) throw new Error('no array');
                  let depth2 = 0, end2 = -1, inStr2 = false, j = start2;
                  while (j < singleCleaned.length) {
                    const c = singleCleaned[j];
                    if (inStr2) { if (c === '\\') { j += 2; continue; } if (c === '"') inStr2 = false; }
                    else { if (c === '"') inStr2 = true; else if (c === '[') depth2++; else if (c === ']') { depth2--; if (depth2 === 0) { end2 = j; break; } } }
                    j++;
                  }
                  if (end2 === -1) throw new Error('unterminated');
                  singleParsed = JSON.parse(singleCleaned.slice(start2, end2 + 1));
                }
                if (Array.isArray(singleParsed) && singleParsed.length > 0) {
                  existing.push(singleParsed[0]);
                  recovered++;
                }
              } catch {
                console.log(`  single retry ${r + 1} failed — skipping`);
              }
            }
            console.log(`  recovered ${recovered}/${batchCount} from retry`);
            remaining -= batchCount;
            await sleep(DELAY_MS);
            continue;
          }

          await sleep(1000);
          process.stdout.write(`auditing... `);

          const auditRaw = await callBedrock(buildAuditPrompt(subjectKey, generated));
          sessionTokens += callBedrock._lastTokens || 0;

          let auditResult;
          try {
            const cleaned = auditRaw.replace(/```json|```/g, '').trim();
            try {
              auditResult = JSON.parse(cleaned);
            } catch {
              const match = cleaned.match(/\{[\s\S]*\}/);
              if (!match) throw new Error('No JSON object found');
              auditResult = JSON.parse(match[0]);
            }
          } catch {
            auditResult = { clean: generated, flagged: [] };
          }

          const clean   = auditResult.clean   || [];
          const flagged = auditResult.flagged || [];

          // Fix IDs sequentially
          clean.forEach((q, i) => {
            q.id = `${config.idPrefix}_u${unit}_q${String(lastIndex + i).padStart(3,'0')}`;
          });

          existing = [...existing, ...clean];
          allFlagged.push(...flagged);
          totalGenerated += clean.length;
          totalFlagged   += flagged.length;
          remaining      -= batchCount;
          lastIndex      += clean.length - 1;

          console.log(`✓ ${clean.length} clean, ${flagged.length} flagged`);
          await sleep(DELAY_MS);

          if (sessionTokens >= SESSION_TOKEN_LIMIT) {
            console.warn(`\nSession token limit reached — saving progress and stopping.`);
            const usesWindow = content.includes('window.');
            const varName = config.globalVar;
            const declaration = usesWindow ? `window.${varName}` : `var ${varName}`;
            fs.writeFileSync(filePath, `${declaration} = ${JSON.stringify(existing, null, 2)};`, 'utf8');
            if (allFlagged.length > 0) {
              const flagPath = `scripts/${subjectKey}_generation_flags.json`;
              fs.writeFileSync(flagPath, JSON.stringify({ generated: new Date().toISOString(), flags: allFlagged }, null, 2));
            }
            return;
          }

        } catch (err) {
          if (err.message && err.message.includes('Too many tokens')) {
            console.log(`FATAL: Too many tokens — ${err.message}`);
            process.exit(1);
          }
          console.log(`ERROR: ${err.message}`);
          await sleep(DELAY_MS * 2);
        }
      }
    }

    // Intermediate save after each unit
    const usesWindowUnit = content.includes('window.');
    const declarationUnit = usesWindowUnit ? `window.${config.globalVar}` : `var ${config.globalVar}`;
    fs.writeFileSync(filePath, `${declarationUnit} = ${JSON.stringify(existing, null, 2)};`, 'utf8');
    console.log(`  [saved ${existing.length} questions after unit ${unit}]`);
  }

  // Write file
  console.log(`\nWriting ${existing.length} questions to ${filePath}...`);
  const usesWindow = content.includes('window.');
  const varName = config.globalVar;
  const declaration = usesWindow ? `window.${varName}` : `var ${varName}`;
  fs.writeFileSync(filePath, `${declaration} = ${JSON.stringify(existing, null, 2)};`, 'utf8');

  // Write flagged
  if (allFlagged.length > 0) {
    const flagPath = `scripts/${subjectKey}_generation_flags.json`;
    fs.writeFileSync(flagPath, JSON.stringify({ generated: new Date().toISOString(), flags: allFlagged }, null, 2));
    console.log(`${allFlagged.length} flagged → ${flagPath}`);
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  DONE — ${subjectKey.toUpperCase()}`);
  console.log(`  Generated: ${totalGenerated} | Flagged: ${totalFlagged}`);
  console.log(`  Final count: ${existing.length}`);
  console.log(`${'═'.repeat(60)}\n`);
}

// ─── ENTRY ───────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const flag = args.indexOf('--subject');
const targetFlag = args.indexOf('--target');
const targetOverride = targetFlag !== -1 && args[targetFlag + 1] ? parseInt(args[targetFlag + 1], 10) : null;
const difficultyFlagIdx = args.indexOf('--difficulty');
const difficultyFilter = difficultyFlagIdx !== -1 && args[difficultyFlagIdx + 1] ? args[difficultyFlagIdx + 1].toLowerCase() : null;
const unitFlagIdx = args.indexOf('--unit');
const unitFilter = unitFlagIdx !== -1 && args[unitFlagIdx + 1] ? parseInt(args[unitFlagIdx + 1], 10) : null;

if (flag === -1 || !args[flag + 1]) {
  console.log(`
Usage: node scripts/generateQuestions.mjs --subject <subject> [--difficulty <easy|medium|hard>] [--unit <number>] [--target <number>]

Subjects:
  apcsa     AP Computer Science A
  apbio     AP Biology
  apcalc    AP Calc AB
  apstats   AP Statistics
  apmicro   AP Microeconomics
  apmacro   AP Macroeconomics
  apush     AP US History
  apphys1   AP Physics 1
  apphysc   AP Physics C

Flags:
  --difficulty  Only generate questions for this difficulty (easy|medium|hard)
                With --difficulty hard, --target sets the direct hard count per unit
  --unit        Only process this unit number
  --target      Override the per-unit total target (or direct hard count when --difficulty hard)
  `);
  process.exit(0);
}

generateForSubject(args[flag + 1].toLowerCase(), targetOverride, difficultyFilter, unitFilter).catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});