// scripts/generateQuestions.mjs
// JPrep Question Generator + Inline Audit
// Usage: node scripts/generateQuestions.mjs --subject apbio
// Requires: AWS credentials configured (aws configure) + Bedrock Sonnet access

import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import fs from 'fs';
import path from 'path';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const MODEL_ID = "us.anthropic.claude-opus-4-6-v1";
const BATCH_SIZE = 10;
const DELAY_MS = 2000;
const DATA_DIR = './js/data';

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
  return decoded.content[0].text;
}

// ─── PROMPTS ─────────────────────────────────────────────────────────────────

function buildGeneratePrompt(subjectKey, unit, topics, difficulty, count, startIndex) {
  const config = SUBJECTS[subjectKey];
  const fiveChoices = ['apmicro', 'apmacro', 'apstats'].includes(subjectKey);
  const subjectName = {
    apcsa: 'AP Computer Science A', apbio: 'AP Biology', apcalc: 'AP Calculus AB',
    apstats: 'AP Statistics', apmicro: 'AP Microeconomics', apmacro: 'AP Macroeconomics',
    apush: 'AP US History', apphys1: 'AP Physics 1', apphysc: 'AP Physics C: Mechanics & E&M'
  }[subjectKey];

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
${fiveChoices ? '- Use exactly 5 choices (AP Econ/Stats format)' : '- Use exactly 4 choices'}

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

answer is 0-indexed integer. Generate all ${count} now.`;
}

function buildAuditPrompt(subjectKey, questions) {
  const subjectName = {
    apcsa: 'AP Computer Science A', apbio: 'AP Biology', apcalc: 'AP Calculus AB',
    apstats: 'AP Statistics', apmicro: 'AP Microeconomics', apmacro: 'AP Macroeconomics',
    apush: 'AP US History', apphys1: 'AP Physics 1', apphysc: 'AP Physics C'
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

async function generateForSubject(subjectKey) {
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

  for (const [unitNum, unitConfig] of Object.entries(config.units)) {
    const unit = parseInt(unitNum);
    const currentInUnit = existing.filter(q => q.unit === unit);
    const currentEasy = currentInUnit.filter(q => q.difficulty === 'easy').length;
    const currentMed  = currentInUnit.filter(q => q.difficulty === 'medium').length;
    const currentHard = currentInUnit.filter(q => q.difficulty === 'hard').length;

    const target    = unitConfig.target || 70;
    const targetE   = Math.ceil(target * 0.20);
    const targetM   = Math.ceil(target * 0.50);
    const targetH   = Math.ceil(target * 0.30);
    const needEasy  = Math.max(0, targetE - currentEasy);
    const needMed   = Math.max(0, targetM - currentMed);
    const needHard  = Math.max(0, targetH - currentHard);

    console.log(`Unit ${unit}: have ${currentInUnit.length} | need +${needEasy}E +${needMed}M +${needHard}H`);

    const batches = [
      { difficulty: 'easy',   count: needEasy },
      { difficulty: 'medium', count: needMed  },
      { difficulty: 'hard',   count: needHard },
    ].filter(b => b.count > 0);

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

          let generated;
          try {
            const cleaned = genRaw.replace(/```json|```/g, '').replace(/\.\.\./g, '').replace(/\u2014/g, '-').replace(/\u2013/g, '-').trim();
            // Try direct parse first
            try {
              generated = JSON.parse(cleaned);
            } catch {
              // Fall back to extracting the array using bracket matching
              const start = cleaned.indexOf('[');
              if (start === -1) throw new Error('No JSON array found in response');
              let depth = 0, end = -1;
              for (let i = start; i < cleaned.length; i++) {
                if (cleaned[i] === '[') depth++;
                else if (cleaned[i] === ']') { depth--; if (depth === 0) { end = i; break; } }
              }
              if (end === -1) throw new Error('Unterminated JSON array');
              generated = JSON.parse(cleaned.slice(start, end + 1));
            }
          } catch {
            console.log(`PARSE ERROR — skipping`);
            console.log(`Raw (last 500): ${genRaw.slice(-500)}`);
            remaining -= batchCount;
            await sleep(DELAY_MS);
            continue;
          }

          await sleep(1000);
          process.stdout.write(`auditing... `);

          const auditRaw = await callBedrock(buildAuditPrompt(subjectKey, generated));

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

if (flag === -1 || !args[flag + 1]) {
  console.log(`
Usage: node scripts/generateQuestions.mjs --subject <subject>

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
  `);
  process.exit(0);
}

generateForSubject(args[flag + 1].toLowerCase()).catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});