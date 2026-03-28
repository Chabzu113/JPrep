# AP Test Prep

A free, offline-first AP exam practice platform built as a macOS desktop app. No backend, no account needed — all progress saved locally.

---

## Subjects Supported

| Subject | Questions | Status |
|---------|-----------|--------|
| AP Computer Science A | 225+ MCQ + 20 FRQ | ✅ Full content |
| AP Biology | 250 MCQ | ✅ Full content |
| AP Calculus AB/BC, AP Statistics, AP Physics, AP Chemistry, AP US History, AP World History, AP US Gov, AP Psychology, AP English | — | 🔜 Coming soon |

---

## Features

- **Multi-subject platform** — select any combination of 11 AP subjects at setup; switch between them anytime
- **475+ practice questions** across AP CS A and AP Biology
- **Unit tab bar** in Question Bank — instantly filter by unit with one click
- **Filterable Question Bank** — filter by unit, topic, difficulty, status (unseen / correct / incorrect)
- **5 full-length AP CS A practice tests** — 42 MCQ (90 min) + 4 FRQ (90 min), just like the real exam
- **Study Planner** — countdown to each exam, daily study log, manage your subjects
- **Manage Subjects modal** — add or remove subjects after initial setup without losing progress
- **Detailed analytics** — accuracy by unit, difficulty, and topic; weakest areas highlighted
- **Per-subject progress tracking** via localStorage (no account needed, friends get their own progress)
- **Dark mode** support
- **macOS desktop app** via Electron — native window with proper traffic light buttons

---

## AP CS A Units Covered

| Unit | Title | Exam Weight |
|------|-------|-------------|
| 1 | Using Objects and Methods | 15–25% |
| 2 | Selection and Iteration | 25–35% |
| 3 | Class Creation | 10–18% |
| 4 | Data Collections | 30–40% |

## AP Biology Units Covered

| Unit | Title |
|------|-------|
| 1 | Chemistry of Life |
| 2 | Cell Structure and Function |
| 3 | Cellular Energetics |
| 4 | Cell Communication and Cell Cycle |
| 5 | Heredity |
| 6 | Gene Expression and Regulation |
| 7 | Natural Selection |
| 8 | Ecology |

---

## Running the App

### Option 1: macOS Desktop App (Recommended)

Download the latest `APTestPrep.zip` from the releases, unzip, and open `AP Test Prep.app`.

> **First launch on a friend's Mac:** Right-click the app → Open → Open (bypasses Gatekeeper). Or run `xattr -cr "AP Test Prep.app"` in Terminal.

### Option 2: Build from Source

Requires Node.js and npm.

```bash
git clone https://github.com/Chabzu113/APCSAPractice.git
cd APCSAPractice/electron
npm install
npm start          # Run in dev mode
npm run build      # Build .app for macOS arm64
```

### Option 3: Open in Browser

```bash
open index.html
# or serve locally:
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## Practice Test Format (AP CS A)

| Section | Format | Time |
|---------|--------|------|
| Section I | 42 Multiple Choice | 90 minutes |
| (Break) | — | 10 minutes |
| Section II | 4 Free Response | 90 minutes |

**AP Score estimation:**
| Composite % | AP Score |
|-------------|----------|
| 70%+ | 5 |
| 55–69% | 4 |
| 40–54% | 3 |
| 25–39% | 2 |
| <25% | 1 |

---

## File Structure

```
APCSAPractice/
├── index.html              # Dashboard / home
├── question-bank.html      # Question bank with filters + unit tabs
├── practice-test.html      # Full-length test runner
├── review.html             # Post-test review + FRQ self-grading
├── results.html            # Analytics & progress
├── planner.html            # Study planner + manage subjects
├── subject-select.html     # First-launch subject selection
├── css/
│   ├── styles.css          # Global styles, dark mode, macOS nav fix
│   ├── components.css      # Cards, badges, buttons, etc.
│   └── planner.css         # Planner + unit tab bar + modal styles
├── js/
│   ├── subjects.js         # Subject registry (11 subjects, exam dates, topics)
│   ├── app.js              # State management, localStorage, utilities
│   ├── questionBank.js     # Question bank filter/render/unit tab logic
│   ├── testRunner.js       # Test session logic (multi-subject)
│   ├── planner.js          # Planner + manage subjects modal
│   ├── subjectSelect.js    # Onboarding subject selection
│   ├── review.js           # Review page logic
│   ├── results.js          # Analytics page logic
│   ├── scoring.js          # Score calculation
│   └── data/
│       ├── apcsa_mcq.js    # AP CS A MCQ: all units (379 questions)
│       ├── frq.js          # AP CS A FRQ bank (20 prompts)
│       ├── tests.js        # AP CS A practice test definitions
│       └── apbio_mcq.js    # AP Biology MCQ bank (250 questions)
├── electron/
│   ├── main.js             # Electron main process
│   ├── package.json        # Electron builder config
│   └── preload.js          # Preload script
└── problems/
    ├── Unit1_UsingObjectsAndMethods.java
    ├── Unit2_SelectionAndIteration.java
    ├── Unit3_ClassCreation.java
    └── Unit4_DataCollections.java
```

---

## Adding More Question Banks

Each subject in `js/subjects.js` has a `dataFiles` array. To add questions for a new subject:

1. Create `js/data/yoursubject_mcq.js` with `var YOUR_GLOBAL = [...]`
2. Add the global name to that subject's `dataFiles: ['YOUR_GLOBAL']` in `subjects.js`
3. Add `<script src="js/data/yoursubject_mcq.js"></script>` to each HTML page

---

## Resetting Progress

Click **"Reset All Progress"** on the Results page, or run in the browser console:

```js
localStorage.removeItem('apcsa_state');
location.reload();
```

---

## Disclaimer

AP® is a registered trademark of College Board. This platform is not affiliated with or endorsed by College Board. Practice questions are for educational, non-commercial use only.
