# JPrep — AP Exam Prep Platform

A free, offline-first AP exam prep platform available as a macOS desktop app and in the browser. No account, no backend — all progress saved locally.

---

## Subjects Supported (12 total)

| Subject | MCQ Bank | FRQ Bank | Practice Test |
|---------|----------|----------|---------------|
| AP Computer Science A | ✅ | ✅ | ✅ |
| AP Biology | ✅ | ✅ | ✅ |
| AP Calculus AB | ✅ | ✅ | ✅ |
| AP Calculus BC | ✅ | ✅ | ✅ |
| AP Statistics | ✅ | ✅ | ✅ |
| AP Microeconomics | ✅ | ✅ | ✅ |
| AP Macroeconomics | ✅ | ✅ | ✅ |
| AP US History | ✅ | ✅ | ✅ |
| AP US Government & Politics | ✅ | ✅ | ✅ |
| AP Physics 1: Algebra-Based | ✅ | ✅ | ✅ |
| AP Physics C: E&M | ✅ | ✅ | ✅ |
| AP Environmental Science | ✅ | ✅ | ✅ |

---

## Features

### Question Bank
- **1,000+ practice questions** across all 12 AP subjects
- **Unit tab bar** — filter to a specific unit in one click
- **Advanced filters** — unit, topic, difficulty (easy/medium/hard), status (unseen/correct/incorrect), question type (MCQ/FRQ)
- **Smart Order (Adaptive Engine)** — surfaces the questions you need most based on your history, time since last seen, and per-unit accuracy
- **Session stats** — live accuracy badge and progress bar during practice
- **Instant feedback** — correct/incorrect shown on submission with explanations

### Practice Tests
- **12 full-length timed tests** — one per subject, matching the real AP format
- **Two-section format** — MCQ section (90 min) + FRQ section (90 min) with a break in between
- **Question navigation panel** — jump to any question; color-coded for answered, flagged, and current
- **Flag for review** — mark questions to revisit before submitting a section
- **Auto-save every 30 seconds** — resume any test if the app closes mid-session
- **Graphing calculator (Desmos)** — draggable, resizable floating panel available during tests and question bank

### Test Review & Grading
- **Full MCQ review** — see your answer vs. correct answer with explanations; filter by correct/incorrect/flagged
- **FRQ self-grading** — click-to-grade rubric items per part; score updates in real-time
- **AP score estimate** — composite score mapped to 1–5 using per-subject College Board weighting

### Analytics & Progress
- **Overall stats** — questions answered, accuracy, tests taken, last AP estimate
- **Unit mastery breakdown** — accuracy per unit with visual bars
- **Difficulty breakdown** — easy / medium / hard accuracy split
- **Weakest topics** — topics with <65% accuracy and ≥5 attempts, sorted worst-first
- **Full test history** — date, MCQ score, FRQ score, AP estimate for every test taken

### Study Planner
- **Exam countdown** — days until each subject's exam, color-coded by urgency
- **Study phase system** — auto-calculated from days remaining:
  - **Foundations** (>8 weeks) — build unit by unit
  - **Practice** (4–8 weeks) — mix tests and weak-topic drills
  - **Intensive** (2–4 weeks) — timed full tests every 3–4 days
  - **Final Prep** (<2 weeks) — only weak topics, 2+ full tests
- **Weekly roadmap** — context-specific study recommendations per phase
- **Subject insights** — weakest units, unseen coverage, questions-per-week pace, study streak
- **All-exams overview** — table showing every subject's exam date and phase at a glance

### AI Explanations (Optional)
- **Claude API integration** — get streaming AI explanations for any wrong answer
- **User-supplied API key** — stored locally, never sent anywhere except Anthropic
- Costs ~$0.001–0.005 per explanation (billed to your own account)

### Platform
- **Offline-first** — all question banks are bundled locally; no internet required
- **Dark mode** — full theme toggle across all pages, saved to localStorage
- **macOS desktop app** — native Electron app with traffic light buttons and in-app auto-update
- **Browser support** — works in any modern browser via `open index.html` or a local server
- **Mobile-responsive** — collapsing navbar, stacked layouts, touch-friendly buttons
- **LaTeX rendering** — KaTeX support for math expressions throughout
- **Per-subject progress** — separate history, test records, and analytics per subject; switch anytime

---

## Installing the macOS App

Download `JPrep-Mac.dmg` from the [latest release](https://github.com/Chabzu113/APCSAPractice/releases/latest), open it, and drag **JPrep** to Applications.

**First launch (unsigned app):** macOS will block the app since it isn't signed with an Apple certificate.

```bash
xattr -cr /Applications/JPrep.app
```

Then double-click to open normally. You only need to do this once.

**Auto-update:** JPrep checks for updates on launch and can download and install them in-app — no manual re-download needed.

---

## Running from Source

Requires Node.js and npm.

```bash
git clone https://github.com/Chabzu113/APCSAPractice.git
cd APCSAPractice/electron
npm install
npm start          # Run in dev mode
npm run build      # Build JPrep-Mac.dmg + JPrep-Mac.zip for macOS arm64
```

---

## Running in the Browser

```bash
open index.html
# or serve locally:
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## Practice Test Format

Each subject's practice test mirrors the real AP exam structure:

| Section | Format | Time |
|---------|--------|------|
| Section I | Multiple Choice (35–55 questions depending on subject) | 90 minutes |
| Break | — | — |
| Section II | Free Response (3–6 questions depending on subject) | 90 minutes |

AP score estimation uses per-subject MCQ/FRQ weighting from College Board guidelines.

---

## File Structure

```
JPrep/
├── index.html                  # Home dashboard
├── subject-select.html         # First-launch subject selection
├── question-bank.html          # Question bank with filters + adaptive engine
├── practice-test.html          # Full-length timed test runner
├── review.html                 # Post-test review + FRQ self-grading
├── results.html                # Analytics & progress dashboard
├── planner.html                # Study planner + exam countdown
├── css/
│   ├── styles.css              # Global styles, dark mode, theme variables
│   ├── components.css          # Cards, badges, buttons, modals, filters
│   └── planner.css             # Planner layout and subject management modal
├── js/
│   ├── subjects.js             # Subject registry (12 subjects, exam dates, topics)
│   ├── app.js                  # State management, localStorage, update check
│   ├── scoring.js              # Score calculation and analytics functions
│   ├── questionBank.js         # Question bank session logic
│   ├── testRunner.js           # Test simulation and timer logic
│   ├── review.js               # Post-test review logic
│   ├── results.js              # Analytics page logic
│   ├── planner.js              # Planner and subject management
│   ├── subjectSelect.js        # Onboarding flow
│   ├── aiExplainer.js          # Claude API integration
│   ├── adaptiveEngine.js       # Smart question ordering algorithm
│   ├── genericFRQGrader.js     # Auto-grading engine (keyword + rubric)
│   └── data/
│       ├── apcsa_mcq.js        # AP CS A MCQ bank
│       ├── apbio_mcq.js        # AP Biology MCQ bank
│       ├── apcalc_mcq.js       # AP Calculus AB MCQ bank
│       ├── ...                 # (one MCQ + FRQ file per subject)
│       └── tests/
│           ├── p1_csa.js       # AP CS A Practice Test 1
│           ├── p1_bio.js       # AP Biology Practice Test 1
│           └── ...             # (one test file per subject)
├── electron/
│   ├── main.js                 # Electron main process + in-app updater
│   ├── preload.js              # Context bridge for renderer IPC
│   └── package.json            # Electron Builder config (macOS + Windows)
└── problems/                   # AP CS A Java coding problems
```

---

## Resetting Progress

Click **"Reset All Progress"** on the Results page, or run in the browser console:

```js
localStorage.removeItem('apcsa_state');
location.reload();
```

---

## Disclaimer

AP® is a registered trademark of College Board. JPrep is not affiliated with or endorsed by College Board. All practice content is for educational, non-commercial use only.
