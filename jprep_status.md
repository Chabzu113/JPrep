# Prep Status — April 4, 2026

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
| AP Gov | 315 | 5 units |
| AP Calc BC | 442 | 10 units |
| AP Enviro | 615 | 9 units |

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

## FRQ Bank — 428 total across 11 subjects

| Subject | FRQs | Notes |
|---------|------|-------|
| AP CS A | 25 | original |
| AP Bio | 54 | original + new |
| AP Calc AB | 50 | original |
| AP Stats | 25 | original |
| AP Micro | 25 | original |
| AP Macro | 25 | original |
| APUSH | 25 | original |
| AP Physics 1 | 25 | original |
| AP Physics C | 25 | original |
| AP Enviro | 54 | new |
| AP Calc BC | 50 | new |
| AP Gov | 25 | new (CA, QA, SCOTUS, ARG types) |

**Total:** 428 FRQs across 11 subjects (299 original + 54 Enviro + 50 Calc BC + 25 Gov)

---

## Practice Tests — 12 full-length tests, all clean

- 12 full-length practice tests generated, one per subject
- Flag issues resolved: all 625/625 questions clean (no flagged questions)
- Tests wired into app via JS wrapper files (`electron/js/data/tests/`)
- Registered in subject registry via `testFiles` property in `subjects.js`
- Script: `scripts/generatePracticeTests.mjs`
- Fix script: `scripts/applyTestFixes.mjs`
- Flagged question injection: `scripts/addFlaggedQuestions.mjs`

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
- API key format validation (`sk-ant-` prefix check), sanitization, graceful corruption handling
- **Status:** Complete and hardened

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
- **Status:** Complete

### Scoring (`js/scoring.js`)
- Per-subject AP score tables for all 12 subjects
- `estimateAPScoreForSubject(subject, rawScore)` function
- Converts raw MCQ + FRQ scores to projected 1–5 AP score
- **Status:** Complete

### Per-Section Timers (`js/subjects.js`)
- `mcqTime` and `frqTime` fields on every subject entry
- CB-accurate time limits per subject and section
- Timer state tracked via `mcqTimeRemaining` / `frqTimeRemaining` in localStorage
- **Status:** Complete

---

## Releases

| Version | Description |
|---------|-------------|
| v2.0.0 | Full multi-subject launch — all 12 subjects live with MCQ + FRQ banks |
| v2.0.1 | Practice tests — 12 full-length tests generated, flag-fixed, wired into app |
| v2.0.2 | Per-section timers — CB-accurate mcqTime/frqTime per subject |

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

## Key Scripts

| Script | Purpose |
|--------|---------|
| `scripts/generateQuestions.mjs` | Generate MCQ batches |
| `scripts/generateFRQ.mjs` | Generate FRQ banks |
| `scripts/generatePracticeTests.mjs` | Generate full-length practice tests |
| `scripts/applyFlagFixes.mjs` | Fix flagged MCQ questions |
| `scripts/applyTestFixes.mjs` | Fix flagged practice test questions |
| `scripts/addFlaggedQuestions.mjs` | Inject flagged questions into test banks |
| `scripts/dedupeMCQ.mjs` | Deduplicate MCQ banks |
| `scripts/auditDuplicates.mjs` | Audit for cross-bank duplicates |
| `scripts/countQuestions.mjs` | Count questions per subject/unit |

---

## Remaining Tasks

All major tasks complete. No outstanding work items.

### ~~1. FRQ Generation for new subjects~~ — COMPLETE
### ~~2. Flip `hasContent: true` for apgov, apcalcbc, apenviro~~ — COMPLETE
### ~~3. AI Answer Explainer hardening~~ — COMPLETE
### ~~4. Planner tab improvements~~ — COMPLETE
### ~~5. Audit Agent + CB Content Watcher~~ — NOT NEEDED
### ~~6. Practice Tests~~ — COMPLETE (v2.0.1)
### ~~7. Per-section timers~~ — COMPLETE (v2.0.2)

---

## Key Learnings / Hard Rules
- **Commit after every subject** — parallel Claude Code agents can wipe uncommitted files
- **Only Jay commits data files and subjects.js** — Claude Code never commits those
- **Batch size max 10** (3 for hard) — larger batches cause truncation
- **Opus for hard problems, Sonnet for generation**
- `dedupeMCQ.mjs` keys on question + choices — handles same-stem questions with different code/options
- **Parse error retry loop** — recovers questions one at a time instead of skipping entire batches
