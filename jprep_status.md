# Prep Status — April 1, 2026

**App:** JPrep (renamed from APCSAPractice throughout UI)
**GitHub:** github.com/Chabzu113 (APCSAPractice repo)
**Stack:** Vanilla JS, HTML/CSS, Electron, KaTeX, Desmos, localStorage only. No framework, no backend. Also runs in browser via local server.

---

## Question Bank — 6,343 MCQ total across 12 subjects

| Subject | Questions | Notes |
|---------|-----------|-------|
| AP CS A | 379 | 4 units |
| AP Bio | 540 | 8 units |
| AP Calc AB | 524 | 8 units |
| AP Stats | 598 | 9 units |
| AP Micro | 434 | 6 units |
| AP Macro | 431 | 6 units |
| APUSH | 669 | 9 units |
| AP Physics 1 | 564 | 7 units |
| AP Physics C | 832 | 5 units |
| AP Gov | 315 | 5 units, added today |
| AP Calc BC | 442 | 10 units, added today |
| AP Enviro | 615 | 9 units, added today |

All banks deduped via `scripts/dedupeMCQ.mjs` — zero duplicates confirmed.

**Generation script:** `scripts/generateQuestions.mjs`
**Model:** `us.anthropic.claude-sonnet-4-6` (Sonnet 4.6)
**Flag fix script:** `scripts/applyFlagFixes.mjs`
**Dedup scripts:** `scripts/dedupeMCQ.mjs`, `scripts/auditDuplicates.mjs`
**Count script:** `scripts/countQuestions.mjs`

### Generation config
- Batch size 10 (hard: 3)
- max_tokens: 8192
- Target: 70 questions/unit (20% easy, 50% medium, 30% hard)
- Parse fixes: em dash stripping, string-aware bracket matcher, choice label normalization, per-question retry on parse error with full debug dump to `scripts/parse_error_debug.txt`

---

## Features Completed

### New Subjects — AP Gov, AP Calc BC, AP Environmental Science
- **AP Gov:** 315 MCQ + 25 FRQ (CA, QA, SCOTUS, ARG types) — live with full MCQ and FRQ banks wired into app
- **AP Calc BC:** 442 MCQ + 50 FRQ — live with full MCQ and FRQ banks wired into app
- **AP Environmental Science:** 615 MCQ + 54 FRQ — live with full MCQ and FRQ banks wired into app
- `generateFRQ.mjs` extended to support `apgov`, `apcalcbc`, and `apenviro`
- `frqConfigs.js` has grading configs for all three subjects
- `questionBank.js` FRQ type display mapping extended to handle CA, QA, SCOTUS, and ARG types for AP Gov

### Core App
- Multi-subject dashboard with subject switcher
- Question bank with filtering by unit, difficulty, topic, question type
- Practice test mode (timed)
- Results and progress tracking (localStorage)
- Review mode with explanations
- Dark mode (Discord/Linear-style navy palette)
- KaTeX math rendering with `isLatexString()` detection
- Desmos graphing calculator integration
- Electron desktop packaging + browser mode

### Adaptive Engine (`js/adaptiveEngine.js`)
- Tracks question history via localStorage
- Priority scoring: surfaces weak topics and spaced repetition
- Exposed in UI as "Smart Order" sort option in question bank
- **Status:** Complete and wired in

### AI Answer Explainer (`js/aiExplainer.js`)
- User supplies their own Anthropic API key (stored in localStorage)
- Direct browser fetch to Anthropic API (no backend needed)
- Streaming markdown responses
- Model: `claude-sonnet-4-6`
- Context-aware settings modal (onboarding vs. update UI)
- **Status:** Complete
- **TODO:** API key format validation (`sk-ant-` prefix check), sanitization, graceful corruption handling

### APUSH FRQ Grader (`js/apushGrader.js`)
- Full rubric engine for DBQ, LEQ, SAQ
- Bugs fixed: sourcing tokenization, overly generous contextualization fallback
- **Status:** Complete and tested

### Generic FRQ Grader (`js/genericFRQGrader.js`)
- **Status:** Complete

### Study Planner (`planner.html`, `js/planner.js`)
- Exam countdown per subject
- Study phase detection
- Weekly game plan recommendations
- Exam dates updated to correct 2026 CB schedule
- **Status:** Functional, planner improvements TBD

---

## 2026 AP Exam Dates

| Subject | Date | Time |
|---------|------|------|
| AP Bio | May 4, 2026 | AM |
| AP Micro | May 4, 2026 | PM |
| AP Gov | May 5, 2026 | PM |
| AP Physics 1 | May 6, 2026 | PM |
| AP Stats | May 7, 2026 | AM |
| APUSH | May 8, 2026 | AM |
| AP Macro | May 8, 2026 | PM |
| AP Calc AB/BC | May 11, 2026 | AM |
| AP Phys C E&M | May 14, 2026 | PM |
| AP CS A | May 15, 2026 | PM |

---

## Model IDs
- **Sonnet 4.6:** `us.anthropic.claude-sonnet-4-6`
- **Opus 4.6:** `us.anthropic.claude-opus-4-6-v1`

---

## Remaining Tasks

### 1. ~~FRQ Generation for new subjects~~ — COMPLETE
### 2. ~~Flip `hasContent: true` for apgov, apcalcbc, apenviro~~ — COMPLETE

### 3. AI Answer Explainer hardening (new chat)
- API key format validation (`sk-ant-` prefix)
- Sanitization and graceful corruption handling

### 4. Planner tab improvements (new chat)

### 5. Audit Agent + CB Content Watcher (new chat)
- Audit Agent: Lambda + Bedrock + S3
- CB Content Watcher: EventBridge + Lambda + SNS

### 6. Build and ship (new chat)
- Electron packaging and release

---

## Key Learnings / Hard Rules
- **Commit after every subject** — parallel Claude Code agents can wipe uncommitted files
- **Only Jay commits data files and subjects.js** — Claude Code never commits those
- **Batch size max 10** (3 for hard) — larger batches cause truncation
- **Opus for hard problems, Sonnet for generation**
- `dedupeMCQ.mjs` keys on question + choices — handles same-stem questions with different code/options
- **Parse error retry loop** — recovers questions one at a time instead of skipping entire batches
