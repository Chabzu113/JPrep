// scripts/generatePracticeTests.mjs
// JPrep Practice Test Generator
// Usage: node scripts/generatePracticeTests.mjs --subject apcalc --test 1
// Requires: AWS credentials configured (aws configure) + Bedrock Sonnet access

import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import fs from 'fs';
import path from 'path';

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const MODEL_ID = "us.anthropic.claude-sonnet-4-6";
const BATCH_SIZE = 5;
const DELAY_MS = 2000;
const DATA_DIR = './js/data/tests';
const SESSION_TOKEN_LIMIT = 5000000;

const client = new BedrockRuntimeClient({ region: "us-east-1" });

// ─── EXAM CONFIG ─────────────────────────────────────────────────────────────

const EXAM_CONFIG = {
  apcalc:   { mcqCount: 45, frqs: [
    { frqType: 'calculator',    count: 2 },
    { frqType: 'no-calculator', count: 4 }
  ]},
  apcalcbc: { mcqCount: 45, frqs: [
    { frqType: 'calculator',    count: 2 },
    { frqType: 'no-calculator', count: 4 }
  ]},
  apstats:  { mcqCount: 40, frqs: [
    { frqType: 'short',              count: 5 },
    { frqType: 'investigative-task', count: 1 }
  ]},
  apmicro:  { mcqCount: 60, frqs: [
    { frqType: 'long',  count: 1 },
    { frqType: 'short', count: 2 }
  ]},
  apmacro:  { mcqCount: 60, frqs: [
    { frqType: 'long',  count: 1 },
    { frqType: 'short', count: 2 }
  ]},
  apush:    { mcqCount: 55, frqs: [
    { frqType: 'saq', count: 4 },
    { frqType: 'dbq', count: 1 },
    { frqType: 'leq', count: 1 }
  ]},
  apphys1:  { mcqCount: 50, frqs: [
    { frqType: 'experimental', count: 2 },
    { frqType: 'regular',      count: 3 }
  ]},
  apphysc:  { mcqCount: 35, frqs: [
    { frqType: 'regular', count: 3 }
  ]},
  apgov:    { mcqCount: 55, frqs: [
    { frqType: 'concept-application', count: 1 },
    { frqType: 'scotus-comparison',   count: 1 },
    { frqType: 'argument-essay',      count: 1 },
    { frqType: 'quantitative',        count: 1 }
  ]},
  apenviro: { mcqCount: 80, frqs: [
    { frqType: 'regular', count: 3 }
  ]},
  apbio:    { mcqCount: 60, frqs: [
    { frqType: 'short', count: 4 },
    { frqType: 'long',  count: 2 }
  ]},
  apcsa:    { mcqCount: 40, frqs: [
    { frqType: 'regular', count: 4 }
  ]}
};

// ─── SUBJECT MAPPINGS ────────────────────────────────────────────────────────

// EXAM_CONFIG key → subjects.js id
const SUBJECTS_JS_ID_MAP = {
  apcalc:   'apcalcab',
  apcalcbc: 'apcalcbc',
  apstats:  'apstats',
  apmicro:  'apmicro',
  apmacro:  'apmacro',
  apush:    'apush',
  apphys1:  'apphys1',
  apphysc:  'apphyscem',
  apgov:    'apgov',
  apenviro: 'apenviro',
  apbio:    'apbio',
  apcsa:    'apcsa',
};

const SUBJECT_NAMES = {
  apcalc:   'AP Calculus AB',
  apcalcbc: 'AP Calculus BC',
  apstats:  'AP Statistics',
  apmicro:  'AP Microeconomics',
  apmacro:  'AP Macroeconomics',
  apush:    'AP US History',
  apphys1:  'AP Physics 1',
  apphysc:  'AP Physics C: E&M',
  apgov:    'AP United States Government and Politics',
  apenviro: 'AP Environmental Science',
  apbio:    'AP Biology',
  apcsa:    'AP Computer Science A',
};

// ─── LOAD SUBJECTS FROM subjects.js ──────────────────────────────────────────

function loadSubjectsFromFile() {
  const content = fs.readFileSync('js/subjects.js', 'utf8');
  const marker = 'const SUBJECTS = ';
  const startPos = content.indexOf(marker);
  if (startPos === -1) throw new Error('Could not find SUBJECTS array in js/subjects.js');
  const arrStart = content.indexOf('[', startPos);

  let depth = 0, i = arrStart, inSingle = false, inDouble = false;
  while (i < content.length) {
    const ch = content[i];
    if (inSingle) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === "'") inSingle = false;
    } else if (inDouble) {
      if (ch === '\\') { i += 2; continue; }
      if (ch === '"') inDouble = false;
    } else {
      if (ch === "'") inSingle = true;
      else if (ch === '"') inDouble = true;
      else if (ch === '[') depth++;
      else if (ch === ']') { depth--; if (depth === 0) break; }
    }
    i++;
  }

  const arrStr = content.slice(arrStart, i + 1);
  return new Function(`return ${arrStr}`)();
}

function getSubjectUnits(subjectKey) {
  const sjsId = SUBJECTS_JS_ID_MAP[subjectKey];
  if (!sjsId) throw new Error(`No subjects.js mapping for ${subjectKey}`);

  const subjects = loadSubjectsFromFile();
  const subject = subjects.find(s => s.id === sjsId);
  if (!subject) throw new Error(`Subject ${sjsId} not found in subjects.js`);

  return { units: subject.units, name: subject.name };
}

// ─── WEIGHT PARSING & DISTRIBUTION ──────────────────────────────────────────

function parseWeight(weightStr) {
  if (!weightStr) return null;
  const match = weightStr.match(/(\d+)\s*[\u2013\-]\s*(\d+)/);
  if (!match) return null;
  return (parseInt(match[1]) + parseInt(match[2])) / 2;
}

function computeDistribution(units, mcqCount) {
  const parsed = units.map(u => ({
    num: u.num,
    title: u.title,
    topics: u.topics || [],
    midpoint: parseWeight(u.weight),
  }));

  const hasWeights = parsed.some(u => u.midpoint !== null);

  if (!hasWeights) {
    const base = Math.floor(mcqCount / parsed.length);
    let extra = mcqCount - base * parsed.length;
    return parsed.map((u, idx) => ({ ...u, count: base + (idx < extra ? 1 : 0) }));
  }

  const totalWeight = parsed.reduce((s, u) => s + (u.midpoint || 0), 0);

  const allocations = parsed.map(u => {
    const raw = ((u.midpoint || 0) / totalWeight) * mcqCount;
    return { ...u, raw, count: Math.floor(raw), remainder: raw - Math.floor(raw) };
  });

  let total = allocations.reduce((s, u) => s + u.count, 0);
  const needed = mcqCount - total;

  // Largest remainder method: sort by fractional part descending, add 1 to top units
  const indices = allocations.map((_, i) => i).sort((a, b) => allocations[b].remainder - allocations[a].remainder);
  for (let i = 0; i < needed; i++) {
    allocations[indices[i]].count++;
  }

  return allocations;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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

function normalizeStem(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim().slice(0, 120);
}

const SELF_CORRECTION_PATTERNS = [
  'wait -', 'wait\u2014', 'correcting:', 'let me recalculate',
  'recalculating:', 'answer index should be', 'the correct answer is'
];

function hasSelfCorrection(explanation) {
  if (!explanation) return false;
  const lower = explanation.toLowerCase();
  return SELF_CORRECTION_PATTERNS.some(p => lower.includes(p));
}

function parseJsonArray(raw) {
  const cleaned = raw
    .replace(/```json|```/g, '')
    .replace(/\.\.\./g, '')
    .replace(/\u2014/g, '-')
    .replace(/\u2013/g, '-')
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf('[');
    if (start === -1) throw new Error('No JSON array found in response');
    let depth = 0, end = -1, inString = false, i = start;
    while (i < cleaned.length) {
      const ch = cleaned[i];
      if (inString) {
        if (ch === '\\') { i += 2; continue; }
        if (ch === '"') inString = false;
      } else {
        if (ch === '"') inString = true;
        else if (ch === '[') depth++;
        else if (ch === ']') { depth--; if (depth === 0) { end = i; break; } }
      }
      i++;
    }
    if (end === -1) throw new Error('Unterminated JSON array');
    return JSON.parse(cleaned.slice(start, end + 1));
  }
}

function parseJsonObject(raw) {
  const cleaned = raw.replace(/```json|```/g, '').trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const match = cleaned.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('No JSON object found');
    return JSON.parse(match[0]);
  }
}

// ─── PROMPTS ─────────────────────────────────────────────────────────────────

function buildMcqPrompt(subjectKey, unitNum, unitTitle, topics, count, startIndex, subjectId, testNum) {
  const subjectName = SUBJECT_NAMES[subjectKey];
  const fiveChoices = ['apmicro', 'apmacro', 'apstats'].includes(subjectKey);
  const choiceCount = fiveChoices ? 5 : 4;
  const choiceLetters = fiveChoices ? 'A, B, C, D, E' : 'A, B, C, D';

  let subjectSpecific = '';
  if (subjectKey === 'apush') {
    subjectSpecific = `\n- CRITICAL: Every question must require document analysis, causation, or contextualization reasoning. No trivial recall of names/dates alone.`;
  }
  if (subjectKey === 'apphysc') {
    subjectSpecific = `\n- Questions MUST involve calculus-based reasoning (derivatives, integrals, differential equations).`;
  }

  const topicList = topics && topics.length > 0
    ? topics.map(t => t.label || t.value || t).join(', ')
    : unitTitle;

  return `Generate exactly ${count} ${subjectName} multiple-choice questions for Unit ${unitNum}: ${unitTitle}.

These questions are for a FULL-LENGTH TIMED PRACTICE EXAM (Practice Test ${testNum}). They must be DISTINCT in style and content from typical drill/review questions:
- Prioritize application, analysis, and synthesis over simple recall
- Questions should mirror the complexity and format of real AP exam questions
- Include realistic scenarios, data interpretation, or multi-step reasoning where appropriate

Topics to cover: ${topicList}

DIFFICULTY MIX (approximate):
- 20% easy: single concept, one-step logic
- 50% medium: 2-3 step reasoning, applying concepts to scenarios
- 30% hard: multi-concept synthesis, common AP traps, deep understanding required

Each question must have exactly ${choiceCount} choices (${choiceLetters}).
Distractors MUST represent real student misconceptions — plausible, not absurd.
No anachronisms, no joke answers, no absurd options.${subjectSpecific}

Return ONLY a valid JSON array, zero markdown. Start with [ and end with ].
[{
  "id": "pt_${subjectId}_p${testNum}_u${unitNum}_${String(startIndex).padStart(3, '0')}",
  "unit": ${unitNum},
  "question": "Question text?",
  "choices": [${fiveChoices ? '"A) ...", "B) ...", "C) ...", "D) ...", "E) ..."' : '"A) ...", "B) ...", "C) ...", "D) ..."'}],
  "answer": 0,
  "explanation": "Why the correct answer is right and why common wrong answers are wrong.",
  "difficulty": "easy|medium|hard",
  "type": "MCQ"
}]

answer is a 0-indexed integer (0-${choiceCount - 1}). Generate all ${count} questions now. Output the JSON array only. Do not write any text before or after the array. Start your response with [ and end with ].`;
}

function buildAuditPrompt(subjectKey, questions) {
  const subjectName = SUBJECT_NAMES[subjectKey];

  return `You are an expert ${subjectName} teacher. Audit these ${questions.length} practice test questions.

Check each:
1. Is the answer factually/mathematically correct?
2. Are distractors plausible (not absurd or anachronistic)?
3. Is there exactly one clear correct answer — no ambiguity?
4. Does the question align with real AP exam style and difficulty?

${JSON.stringify(questions, null, 2)}

Return ONLY valid JSON, zero markdown:
{
  "clean": [IDs of questions that passed all checks],
  "flagged": [{"id": "...", "issue": "what is wrong", "fix": "suggested fix or null"}]
}`;
}

function buildFrqPrompt(subjectKey, frqType, count, subjectId, testNum, startIndex) {
  const subjectName = SUBJECT_NAMES[subjectKey];

  let typeSpecific = '';
  if (subjectKey === 'apush' && frqType === 'dbq') {
    typeSpecific = `
CRITICAL DBQ REQUIREMENTS:
- Include exactly 7 documents with VARIED PERSPECTIVES:
  * At minimum: 1 supporter, 1 critic, 1 marginalized voice, 1 government source
  * Documents should span different time periods within the topic
  * Include a mix of text excerpts, political cartoons (described), charts/data, and official documents
- The prompt must require a DEFENSIBLE THESIS with complex argumentation
- NO softball questions — require students to grapple with genuine historical tensions and contradictions
- Each document must have: source attribution, date, and a substantive excerpt
- The topic must involve debatable claims where reasonable historians disagree`;
  }
  if (subjectKey === 'apush' && frqType === 'leq') {
    typeSpecific = `
CRITICAL LEQ REQUIREMENTS:
- Prompt must present a DEBATABLE historical claim requiring nuanced analysis
- Must require complicating narratives — no one-sided questions
- Students must be able to argue multiple defensible positions
- Require synthesis across time periods or themes`;
  }
  if (subjectKey === 'apush' && frqType === 'saq') {
    typeSpecific = `
CRITICAL SAQ REQUIREMENTS:
- Each SAQ must have exactly 3 parts (a, b, c) testing different historical thinking skills
- Prompt must present DEBATABLE claims requiring nuanced analysis
- Must require complicating narratives — no one-sided questions
- Parts should test: identification, explanation, and evaluation/comparison`;
  }

  const isCalc = ['calculator', 'investigative-task'].includes(frqType);

  return `Generate exactly ${count} ${subjectName} free-response question(s) of type "${frqType}" for Practice Test ${testNum}.

This is for a full-length timed practice exam. FRQs should match real AP exam rigor and format.
${typeSpecific}

Each FRQ must include:
- A detailed prompt with all necessary context
- Multiple parts (labeled a, b, c, etc.) with point values
- A complete scoring rubric so graders have clear guidance

Return ONLY a valid JSON array, zero markdown. Start with [ and end with ].
[{
  "id": "pt_${subjectId}_p${testNum}_frq_${String(startIndex).padStart(3, '0')}",
  "frqType": "${frqType}",
  "isCalc": ${isCalc},
  "title": "Descriptive title for this FRQ",
  "prompt": "Full question prompt with all necessary context...",
  "parts": [
    { "label": "a", "question": "Part a question text", "points": 3 }
  ],
  "rubric": [
    { "criterion": "Description of what earns points", "points": 3, "guidance": "What a correct response looks like" }
  ]
}]

Generate all ${count} FRQ(s) now. Output the JSON array only. Do not write any text before or after the array. Start your response with [ and end with ].`;
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function generatePracticeTest(subjectKey, testNum) {
  const examConfig = EXAM_CONFIG[subjectKey];
  if (!examConfig) {
    console.error(`Unknown subject: ${subjectKey}\nAvailable: ${Object.keys(EXAM_CONFIG).join(', ')}`);
    process.exit(1);
  }

  const sjsId = SUBJECTS_JS_ID_MAP[subjectKey];
  const subjectId = sjsId.replace(/^ap/, '');

  // Load unit info from subjects.js
  const { units, name: fullName } = getSubjectUnits(subjectKey);

  // Compute distribution
  const distribution = computeDistribution(units, examConfig.mcqCount);
  const unitDistribution = {};
  for (const u of distribution) {
    unitDistribution[String(u.num)] = u.count;
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  JPrep Practice Test Generator`);
  console.log(`  ${fullName} — Practice Test ${testNum}`);
  console.log(`  MCQs: ${examConfig.mcqCount} | FRQs: ${examConfig.frqs.reduce((s, f) => s + f.count, 0)}`);
  console.log(`${'═'.repeat(60)}`);
  console.log(`\nUnit distribution:`);
  for (const u of distribution) {
    console.log(`  Unit ${u.num} (${u.title}): ${u.count} MCQs`);
  }
  console.log('');

  // Ensure output directory
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const outputFile = path.join(DATA_DIR, `p${testNum}_${subjectId}.json`);
  const allQuestions = [];
  const allFlagged = [];
  let sessionTokens = 0;
  let globalMcqIndex = 1;

  // ── MCQ Generation ──────────────────────────────────────────────────────

  const seenStems = new Set();

  for (const unitInfo of distribution) {
    if (unitInfo.count === 0) {
      console.log(`[${subjectKey}] Unit ${unitInfo.num}: 0 questions — skipping`);
      continue;
    }

    console.log(`[${subjectKey}] Unit ${unitInfo.num}: generating ${unitInfo.count} questions...`);

    const unitQuestions = [];
    let remaining = unitInfo.count;
    let unitQIndex = globalMcqIndex;

    while (remaining > 0) {
      const batchCount = Math.min(BATCH_SIZE, remaining);

      process.stdout.write(`  Generating ${batchCount}x Unit ${unitInfo.num}... `);

      try {
        const genRaw = await callBedrock(
          buildMcqPrompt(subjectKey, unitInfo.num, unitInfo.title, unitInfo.topics,
            batchCount, unitQIndex, subjectId, testNum)
        );
        sessionTokens += callBedrock._lastTokens || 0;

        let generated;
        try {
          generated = parseJsonArray(genRaw).slice(0, batchCount);
        } catch {
          console.log(`PARSE ERROR — retrying one at a time...`);
          fs.writeFileSync('scripts/parse_error_debug.txt', genRaw, 'utf8');
          let recovered = 0;
          for (let r = 0; r < batchCount; r++) {
            await sleep(DELAY_MS);
            try {
              const singleRaw = await callBedrock(
                buildMcqPrompt(subjectKey, unitInfo.num, unitInfo.title, unitInfo.topics,
                  1, unitQIndex + r, subjectId, testNum)
              );
              sessionTokens += callBedrock._lastTokens || 0;
              const singleParsed = parseJsonArray(singleRaw);
              if (Array.isArray(singleParsed) && singleParsed.length > 0) {
                const q = singleParsed[0];
                q.id = `pt_${subjectId}_p${testNum}_u${unitInfo.num}_${String(unitQIndex + r).padStart(3, '0')}`;
                q.unit = unitInfo.num;
                q.type = 'MCQ';
                unitQuestions.push(q);
                recovered++;
              }
            } catch {
              console.log(`  single retry ${r + 1} failed — skipping`);
            }
          }
          console.log(`  recovered ${recovered}/${batchCount} from retry`);
          remaining -= batchCount;
          unitQIndex += batchCount;
          await sleep(DELAY_MS);
          continue;
        }

        // Fix IDs sequentially
        generated.forEach((q, i) => {
          q.id = `pt_${subjectId}_p${testNum}_u${unitInfo.num}_${String(unitQIndex + i).padStart(3, '0')}`;
          q.unit = unitInfo.num;
          q.type = 'MCQ';
          if (hasSelfCorrection(q.explanation)) {
            q.flagged = true;
          }
        });

        // Dedup: skip questions with stems already seen
        let added = 0;
        for (const q of generated) {
          const stem = normalizeStem(q.question || '');
          if (seenStems.has(stem)) continue;
          seenStems.add(stem);
          unitQuestions.push(q);
          added++;
        }
        const skipped = generated.length - added;
        remaining -= added;
        unitQIndex += batchCount;

        console.log(`✓ ${added} generated${skipped > 0 ? ` (${skipped} dupes skipped)` : ''}`);
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

    globalMcqIndex = unitQIndex;

    // ── Inline Audit ──────────────────────────────────────────────────────

    if (unitQuestions.length > 0) {
      process.stdout.write(`  Auditing Unit ${unitInfo.num}... `);
      try {
        await sleep(1000);
        const auditRaw = await callBedrock(buildAuditPrompt(subjectKey, unitQuestions));
        sessionTokens += callBedrock._lastTokens || 0;

        let auditResult;
        try {
          auditResult = parseJsonObject(auditRaw);
        } catch {
          auditResult = { clean: [], flagged: [] };
        }

        const flagged = auditResult.flagged || [];
        const flaggedIds = new Set(flagged.map(f => f.id));

        // Mark flagged questions in output
        for (const q of unitQuestions) {
          if (flaggedIds.has(q.id)) {
            q.flagged = true;
          }
        }

        allFlagged.push(...flagged);
        console.log(`✓ ${flagged.length} flagged`);
      } catch (err) {
        console.log(`audit error: ${err.message} — continuing`);
      }
    }

    allQuestions.push(...unitQuestions);

    // Intermediate save after each unit — crash recovery
    const testData = {
      id: `p${testNum}_${subjectId}`,
      title: `${fullName} — Practice Test ${testNum}`,
      subject: subjectKey,
      generated: new Date().toISOString(),
      unitDistribution,
      questions: allQuestions,
      frqs: [],
    };
    fs.writeFileSync(outputFile, JSON.stringify(testData, null, 2), 'utf8');
    console.log(`[${subjectKey}] Unit ${unitInfo.num}: done. ${unitQuestions.length} questions written.`);

    if (sessionTokens >= SESSION_TOKEN_LIMIT) {
      console.warn(`\nSession token limit reached — saving progress and stopping.`);
      if (allFlagged.length > 0) {
        const flagPath = `scripts/${subjectKey}_test_flags.json`;
        fs.writeFileSync(flagPath, JSON.stringify({ generated: new Date().toISOString(), flags: allFlagged }, null, 2));
      }
      return;
    }
  }

  // ── FRQ Generation ──────────────────────────────────────────────────────

  console.log(`\n${'─'.repeat(40)}`);
  console.log(`Generating FRQs...`);

  const allFrqs = [];
  let frqIndex = 1;

  for (const frqConfig of examConfig.frqs) {
    process.stdout.write(`  ${frqConfig.count}x ${frqConfig.frqType}... `);

    try {
      const frqRaw = await callBedrock(
        buildFrqPrompt(subjectKey, frqConfig.frqType, frqConfig.count, subjectId, testNum, frqIndex)
      );
      sessionTokens += callBedrock._lastTokens || 0;

      let frqs;
      try {
        frqs = parseJsonArray(frqRaw);
      } catch {
        console.log(`PARSE ERROR — retrying one at a time...`);
        fs.writeFileSync('scripts/frq_parse_error_debug.txt', frqRaw, 'utf8');

        let recovered = 0;
        for (let r = 0; r < frqConfig.count; r++) {
          await sleep(DELAY_MS);
          try {
            const singleRaw = await callBedrock(
              buildFrqPrompt(subjectKey, frqConfig.frqType, 1, subjectId, testNum, frqIndex + r)
            );
            sessionTokens += callBedrock._lastTokens || 0;
            const singleParsed = parseJsonArray(singleRaw);
            if (Array.isArray(singleParsed) && singleParsed.length > 0) {
              const f = singleParsed[0];
              f.id = `pt_${subjectId}_p${testNum}_frq_${String(frqIndex + r).padStart(3, '0')}`;
              f.frqType = frqConfig.frqType;
              f.isCalc = ['calculator', 'investigative-task'].includes(frqConfig.frqType);
              allFrqs.push(f);
              recovered++;
            }
          } catch {
            console.log(`  single FRQ retry ${r + 1} failed — skipping`);
          }
        }
        console.log(`  recovered ${recovered}/${frqConfig.count} from retry`);
        frqIndex += frqConfig.count;
        await sleep(DELAY_MS);
        continue;
      }

      // Fix IDs
      frqs.forEach((f, i) => {
        f.id = `pt_${subjectId}_p${testNum}_frq_${String(frqIndex + i).padStart(3, '0')}`;
        f.frqType = frqConfig.frqType;
        f.isCalc = ['calculator', 'investigative-task'].includes(frqConfig.frqType);
      });

      allFrqs.push(...frqs);
      frqIndex += frqs.length;

      console.log(`✓ ${frqs.length} generated`);
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

  // ── Final Write ─────────────────────────────────────────────────────────

  // Safety net: ensure all IDs are unique
  const idCounts = {};
  for (const q of allQuestions) {
    idCounts[q.id] = (idCounts[q.id] || 0) + 1;
  }
  const dupeIds = Object.keys(idCounts).filter(id => idCounts[id] > 1);
  if (dupeIds.length > 0) {
    console.warn(`WARNING: ${dupeIds.length} duplicate IDs found — reassigning`);
    const seen = new Set();
    let maxIdx = allQuestions.length;
    for (const q of allQuestions) {
      if (seen.has(q.id)) {
        q.id = q.id.replace(/\d{3}$/, String(maxIdx++).padStart(3, '0'));
      } else {
        seen.add(q.id);
      }
    }
  }

  const testData = {
    id: `p${testNum}_${subjectId}`,
    title: `${fullName} — Practice Test ${testNum}`,
    subject: subjectKey,
    generated: new Date().toISOString(),
    unitDistribution,
    questions: allQuestions,
    frqs: allFrqs,
  };

  fs.writeFileSync(outputFile, JSON.stringify(testData, null, 2), 'utf8');

  // Write flags
  if (allFlagged.length > 0) {
    const flagPath = `scripts/${subjectKey}_test_flags.json`;
    fs.writeFileSync(flagPath, JSON.stringify({ generated: new Date().toISOString(), flags: allFlagged }, null, 2));
    console.log(`${allFlagged.length} flagged → ${flagPath}`);
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  DONE — ${subjectKey.toUpperCase()} Practice Test ${testNum}`);
  console.log(`  MCQs: ${allQuestions.length} | FRQs: ${allFrqs.length}`);
  console.log(`  Output: ${outputFile}`);
  console.log(`${'═'.repeat(60)}\n`);
}

// ─── ENTRY ───────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const subjectFlag = args.indexOf('--subject');
const testFlag = args.indexOf('--test');

if (subjectFlag === -1 || !args[subjectFlag + 1]) {
  console.log(`
Usage: node scripts/generatePracticeTests.mjs --subject <subject> [--test <N>]

Subjects:
  ${Object.keys(EXAM_CONFIG).map(k => `${k.padEnd(12)} ${SUBJECT_NAMES[k]}`).join('\n  ')}

Options:
  --test N    Practice test number (default: 1)
  `);
  process.exit(0);
}

const subjectKey = args[subjectFlag + 1].toLowerCase();
const testNum = testFlag !== -1 && args[testFlag + 1] ? parseInt(args[testFlag + 1], 10) : 1;

generatePracticeTest(subjectKey, testNum).catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
