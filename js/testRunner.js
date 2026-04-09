// AP Practice Test Runner
// Note: isLatexString, renderMath, mathSpan, renderFRQPromptText, initDesmos,
// toggleDesmos are all global functions defined in app.js (loaded first).

// ─── State ────────────────────────────────────────────────────────────────────
let currentTest = null;
let currentSection = 'intro';
let currentQuestion = 0;
let mcqAnswers = {};
let frqAnswers = {};
let flagged = new Set();
let timer = null;
let mcqTimeRemaining = 5400;
let currentMCQPart = 0; // 0 = Part A, 1 = Part B (only used for subjects with mcqParts)
let frqTimeRemaining = 5400;
let autoSaveInterval = null;
let mcqQuestions = [];
let frqQuestions = [];
let pendingConfirmAction = null;

// ─── Event delegation (CSP-safe — no inline onclick) ─────────────────────────
document.addEventListener('click', function(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  switch (el.dataset.action) {
    case 'selectTest':       selectTest(el.dataset.testId, el.dataset.subjectId); break;
    case 'setActiveSubject': App.setActiveSubject(el.dataset.subjectId); break;
    case 'selectAnswer':     selectAnswer(el.dataset.qId, parseInt(el.dataset.choice), parseInt(el.dataset.index)); break;
    case 'renderMCQQuestion': renderMCQQuestion(parseInt(el.dataset.index)); break;
    case 'renderFRQQuestion': renderFRQQuestion(parseInt(el.dataset.index)); break;
    case 'renderHubScreen':  renderHubScreen(); break;
    case 'toggleZoom':       el.classList.toggle('zoomed'); break;
  }
});

// ─── Load test bank for active subject ───────────────────────────────────────
function loadTestsForActiveSubject() {
  if (typeof SubjectRegistry !== 'undefined' && typeof App !== 'undefined') {
    const subject = SubjectRegistry.getSubjectById(App.getActiveSubject());
    if (subject && subject.testFiles) {
      const tests = [];
      subject.testFiles.forEach(varName => {
        const arr = window[varName];
        if (Array.isArray(arr)) tests.push(...arr);
      });
      if (tests.length > 0) return tests;
    }
  }
  // Fallback: legacy global for AP CS A
  return typeof PRACTICE_TESTS !== 'undefined' ? PRACTICE_TESTS : [];
}

function loadAllQuestionsForActiveSubject() {
  if (typeof SubjectRegistry !== 'undefined' && typeof App !== 'undefined') {
    const subject = SubjectRegistry.getSubjectById(App.getActiveSubject());
    if (subject && subject.dataFiles) {
      const allQ = [];
      subject.dataFiles.forEach(varName => {
        const arr = window[varName];
        if (Array.isArray(arr)) allQ.push(...arr);
      });
      // Also load test-only question banks (not shown in question bank)
      (subject.testDataFiles || []).forEach(varName => {
        const arr = window[varName];
        if (Array.isArray(arr)) allQ.push(...arr);
      });
      if (allQ.length > 0) return allQ;
    }
  }
  // Fallback: legacy globals for AP CS A
  return [
    ...(typeof APCSA_MCQ !== 'undefined' ? APCSA_MCQ : []),
    ...(typeof APCSA_FRQ !== 'undefined' ? APCSA_FRQ : [])
  ];
}

// ─── Hub Navbar toggle ────────────────────────────────────────────────────────
function setTestMode(isTest) {
  const hub = document.getElementById('hubNavbar');
  const test = document.getElementById('testNavbar');
  if (hub)  hub.classList.toggle('hidden', isTest);
  if (test) test.classList.toggle('hidden', !isTest);
}

function goBackToHub() {
  if (currentSection === 'mcq' || currentSection === 'frq') {
    if (!confirm('Leave this test? Your progress is auto-saved.')) return;
    stopTimer(); clearInterval(autoSaveInterval);
  }
  currentTest = null; currentSection = 'intro'; currentMCQPart = 0;
  mcqAnswers = {}; frqAnswers = {}; flagged = new Set();
  renderHubScreen();
}

function saveAndExit() {
  saveActiveTest();
  stopTimer();
  clearInterval(autoSaveInterval);
  currentSection = 'intro';
  renderHubScreen();
}

// ─── Hub Screen — all practice tests across all subjects ──────────────────────
function renderHubScreen() {
  setTestMode(false);
  showScreen('introScreen');
  const screen = document.getElementById('introScreen');
  if (!screen) return;

  const allSubjects = (window.SubjectRegistry && window.SubjectRegistry.SUBJECTS) || [];
  const state = App.getState();

  const inProgressMap = {};
  try {
    (state.selectedSubjects || []).forEach(sid => {
      const key = sid + '_active_test';
      const raw = localStorage.getItem(key);
      if (raw) {
        const data = JSON.parse(raw);
        if (data && data.testId) inProgressMap[data.testId] = data;
      }
    });
  } catch(e) { console.warn('localStorage read error:', e); }

  const selectedIds = new Set(state.selectedSubjects || []);
  const subjectsWithTests = allSubjects.filter(s =>
    selectedIds.has(s.id) &&
    s.hasContent &&
    (s.testFiles || []).some(v => Array.isArray(window[v]) && window[v].length > 0)
  );

  let html = `<div style="max-width:940px;margin:0 auto;padding:36px 24px">
    <div style="margin-bottom:36px">
      <h1 style="font-size:2rem;font-weight:800;margin-bottom:4px">Practice Tests</h1>
      <p style="color:var(--text-muted)">Full-length timed exams with self-graded FRQs. Progress is auto-saved.</p>
    </div>`;

  if (!subjectsWithTests.length) {
    html += `<div style="text-align:center;padding:60px;color:var(--text-muted)">No practice tests available for your selected subjects yet.<br><br><a href="subject-select.html" style="color:var(--accent-blue)">Update your subjects →</a></div>`;
  }

  for (const subject of subjectsWithTests) {
    const tests = [];
    (subject.testFiles || []).forEach(v => { const a = window[v]; if (Array.isArray(a)) tests.push(...a); });
    if (!tests.length) continue;

    const subjHist = ((state.subjects || {})[subject.id] || {}).testHistory || [];
    const accent = subject.color || '#3B82F6';

    html += `<div style="margin-bottom:40px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid var(--border-color)">
        <span style="font-size:1.3rem">${subject.emoji}</span>
        <span style="font-weight:700;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-secondary)">${subject.name}</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:14px">`;

    for (const test of tests) {
      const mcqCnt = (test.mcqIds || test.questions || []).length;
      const frqCnt = (test.frqIds || test.frqs || []).length;
      const results = subjHist.filter(r => r.testId === test.id).sort((a,b) => b.date - a.date);
      const latest = results[0];
      const isProg = !!inProgressMap[test.id];

      let badgeHtml = '', barHtml = '', actionsHtml = '';

      if (latest) {
        const pct = Math.round((latest.mcqCorrect / latest.mcqTotal) * 100);
        const scoreColor = pct >= 70 ? '#10B981' : pct >= 50 ? '#F59E0B' : '#EF4444';
        badgeHtml = `<span style="background:rgba(16,185,129,0.12);color:#10B981;padding:2px 9px;border-radius:99px;font-size:0.7rem;font-weight:700;white-space:nowrap">✓ Done</span>`;
        barHtml = `<div style="margin-top:12px">
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:5px">
            <span style="color:var(--text-muted)">MCQ Score</span>
            <span style="font-weight:700;color:${scoreColor}">${latest.mcqCorrect}/${latest.mcqTotal} &nbsp; ${pct}%</span>
          </div>
          <div style="height:6px;background:var(--bg-secondary);border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${scoreColor};border-radius:99px;transition:width 0.6s"></div>
          </div></div>`;
        actionsHtml = `<div style="display:flex;gap:8px;margin-top:14px">
          <button data-action="selectTest" data-test-id="${test.id}" data-subject-id="${subject.id}" style="flex:1" class="btn btn-secondary btn-sm">Retake</button>
          <a href="review.html" data-action="setActiveSubject" data-subject-id="${subject.id}" style="flex:1;text-align:center" class="btn btn-primary btn-sm">Results →</a>
        </div>`;
      } else if (isProg) {
        const answeredCnt = inProgressMap[test.id].mcqAnswers ? Object.keys(inProgressMap[test.id].mcqAnswers).length : 0;
        const pct = mcqCnt > 0 ? Math.round((answeredCnt / mcqCnt) * 100) : 0;
        badgeHtml = `<span style="background:rgba(245,158,11,0.12);color:#F59E0B;padding:2px 9px;border-radius:99px;font-size:0.7rem;font-weight:700;white-space:nowrap">⏱ In Progress</span>`;
        barHtml = `<div style="margin-top:12px">
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:5px">
            <span style="color:var(--text-muted)">MCQ Answered</span>
            <span style="font-weight:700;color:#F59E0B">${answeredCnt} / ${mcqCnt}</span>
          </div>
          <div style="height:6px;background:var(--bg-secondary);border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:#F59E0B;border-radius:99px"></div>
          </div></div>`;
        actionsHtml = `<button data-action="selectTest" data-test-id="${test.id}" data-subject-id="${subject.id}" style="width:100%;margin-top:14px" class="btn btn-primary">Resume Test →</button>`;
      } else {
        barHtml = `<div style="margin-top:12px;height:6px;background:var(--bg-secondary);border-radius:99px"></div>`;
        actionsHtml = `<button data-action="selectTest" data-test-id="${test.id}" data-subject-id="${subject.id}" style="width:100%;margin-top:14px" class="btn btn-primary">Start Test →</button>`;
      }

      // Shorten title — strip subject name prefix
      const shortTitle = test.title.replace(/^AP (Computer Science A|Biology|Calculus|Physics|Statistics|Government|History|Economics)\s*/i, '');

      html += `<div class="card" style="padding:18px;border-left:3px solid ${accent}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px">
          <div style="font-weight:700;font-size:0.97rem;line-height:1.3">${shortTitle}</div>
          ${badgeHtml}
        </div>
        <div style="font-size:0.78rem;color:var(--text-muted)">${mcqCnt} MCQ &nbsp;·&nbsp; ${frqCnt} FRQ &nbsp;·&nbsp; 3 hrs</div>
        ${barHtml}
        ${actionsHtml}
      </div>`;
    }
    html += `</div></div>`;
  }
  html += `</div>`;
  screen.innerHTML = html;
}

// ─── Select and load a specific test ─────────────────────────────────────────
function selectTest(testId, subjectId) {
  App.setActiveSubject(subjectId);

  const subject = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(subjectId) : null;
  if (!subject) return;

  const tests = [];
  (subject.testFiles || []).forEach(v => { const a = window[v]; if (Array.isArray(a)) tests.push(...a); });
  currentTest = tests.find(t => t.id === testId);
  if (!currentTest) { renderHubScreen(); return; }

  // If test has embedded questions, use them directly (new JSON format)
  if (currentTest.questions && Array.isArray(currentTest.questions)) {
    mcqQuestions = currentTest.questions;
    // Normalize rubric field: map criterion → description for manual grading UI
    frqQuestions = (currentTest.frqs || []).map(f => {
      if (f.rubric) {
        f.rubric = f.rubric.map(r => ({
          ...r,
          description: r.description || r.criterion || '',
        }));
      }
      // Tag APUSH FRQs so the grader routes correctly
      if (currentTest.subject === 'apush') f.subject = 'apush';
      return f;
    });
  } else {
  const allQ = loadAllQuestionsForActiveSubject();
  const allMCQ = allQ.filter(q => q.choices || !Array.isArray(q.units));
  const frqPool = allQ.filter(q => Array.isArray(q.units) || q.parts);

  mcqQuestions = (currentTest.mcqIds || []).map(id => allMCQ.find(q => q.id === id)).filter(Boolean);
  frqQuestions = (currentTest.frqIds || []).map(id => frqPool.find(f => f.id === id)).filter(Boolean);
  } // end ID-based lookup

  try {
    const activeKey = App.subjectStorageKey('active_test');
    const saved = localStorage.getItem(activeKey) || localStorage.getItem('apcsa_active_test');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.testId === testId && confirm('Resume your in-progress test?')) {
        mcqAnswers = data.mcqAnswers || {};
        frqAnswers = data.frqAnswers || {};
        flagged = new Set(data.flagged || []);
        mcqTimeRemaining = data.mcqTimeRemaining ?? 5400;
        frqTimeRemaining = data.frqTimeRemaining ?? 5400;
        setTestMode(true);
        if (data.section === 'mcq') { startSection('mcq'); renderMCQQuestion(data.currentQuestion || 0); return; }
        if (data.section === 'frq') { startSection('frq'); renderFRQQuestion(data.currentQuestion || 0); return; }
      } else {
        localStorage.removeItem(activeKey);
        localStorage.removeItem('apcsa_active_test');
      }
    }
  } catch(e) { console.warn('localStorage read error:', e); }

  const refBtn = document.getElementById('refSheetBtn');
  if (refBtn) {
    const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(subjectId) : null;
    refBtn.classList.toggle('hidden', !(subj && subj.referenceSheet));
  }
  setTestMode(true);
  renderIntroScreen();
  showScreen('introScreen');
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function initTestRunner() {
  wireButtons();
  const testId = App.getUrlParam('testId');
  if (testId) {
    // Deep link to a specific test
    const subjectId = App.getUrlParam('subject') || App.getActiveSubject();
    selectTest(testId, subjectId);
  } else {
    // Default: show the hub
    renderHubScreen();
  }
}

function showScreen(screenId) {
  ['introScreen','mcqScreen','breakScreen','frqScreen','doneScreen'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== screenId);
  });
}

function renderIntroScreen() {
  const el = document.getElementById('introScreen');
  if (!el || !currentTest) return;
  const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
  const frqMin = subj && subj.frqTime ? Math.round(subj.frqTime / 60) : 90;
  let mcqRowsHtml;
  if (subj && subj.mcqParts) {
    const pA = subj.mcqParts[0];
    const pB = subj.mcqParts[1];
    mcqRowsHtml = `
        <div style="padding:14px 0;border-bottom:1px solid var(--border-color)">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span><strong>Section I</strong> — Multiple Choice</span>
            <span style="color:var(--text-muted)">${mcqQuestions.length} questions · ${Math.round((pA.time + pB.time) / 60)} min</span>
          </div>
          <div style="font-size:0.85rem;color:var(--text-muted);padding-left:8px;line-height:1.8">
            Part A: ${pA.count} questions · ${Math.round(pA.time / 60)} min · No calculator<br>
            Part B: ${pB.count} questions · ${Math.round(pB.time / 60)} min · Calculator permitted
          </div>
        </div>`;
  } else {
    const mcqMin = subj && subj.mcqTime ? Math.round(subj.mcqTime / 60) : 90;
    mcqRowsHtml = `
        <div style="display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-color)">
          <span><strong>Section I</strong> — Multiple Choice</span>
          <span style="color:var(--text-muted)">${mcqQuestions.length} questions · ${mcqMin} min</span>
        </div>`;
  }
  el.innerHTML = `
    <div style="max-width:600px;margin:60px auto;padding:0 20px;text-align:center">
      <div style="font-size:2.5rem;margin-bottom:16px">📝</div>
      <h1 style="font-size:2rem;font-weight:800;margin-bottom:8px">${currentTest.title}</h1>
      <p style="color:var(--text-muted);margin-bottom:32px">${currentTest.description}</p>
      <div class="card" style="text-align:left;margin-bottom:28px">
        ${mcqRowsHtml}
        <div style="display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-color)">
          <span><strong>Section II</strong> — Free Response</span>
          <span style="color:var(--text-muted)">${frqQuestions.length} questions · ${frqMin} min</span>
        </div>
        <div style="padding:14px 0;color:var(--text-muted);font-size:0.9rem;line-height:1.8">
          No feedback during the test · Flag questions to revisit · FRQs self-graded after · Progress auto-saved
        </div>
      </div>
      <button class="btn btn-primary btn-lg" id="startTestBtn">Start Test →</button>
      <br><a href="#" id="allTestsLink" style="display:inline-block;margin-top:16px;color:var(--text-muted);font-size:0.9rem">← All Tests</a>
    </div>`;
}

function wireButtons() {
  // Wire up static buttons (navbar goBack + desmos) that can't use inline onclick due to CSP
  const goBackBtn = document.getElementById('goBackBtn');
  if (goBackBtn) goBackBtn.addEventListener('click', e => { e.preventDefault(); goBackToHub(); });
  const desmosBtn = document.getElementById('desmosBtn');
  if (desmosBtn) desmosBtn.addEventListener('click', toggleDesmos);
  const desmosClose = document.getElementById('desmos-close');
  if (desmosClose) desmosClose.addEventListener('click', toggleDesmos);
  const refSheetBtn = document.getElementById('refSheetBtn');
  if (refSheetBtn) refSheetBtn.addEventListener('click', () => {
    const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
    if (subj && subj.referenceSheet) window.open(subj.referenceSheet, '_blank');
  });

  // Event delegation for dynamically-rendered buttons
  document.addEventListener('click', e => {
    if (e.target.id === 'startTestBtn') startSection('mcq');
    if (e.target.id === 'startFRQBtn') startSection('frq');
    if (e.target.id === 'saveExitBtn') saveAndExit();
    if (e.target.id === 'submitSectionBtn') {
      if (currentSection === 'mcq') confirmSubmit('mcq');
      else if (currentSection === 'frq') confirmSubmit('frq');
    }
    if (e.target.id === 'confirmSubmit') { hideModal(); if (pendingConfirmAction) { pendingConfirmAction(); pendingConfirmAction = null; } }
    if (e.target.id === 'cancelSubmit') { hideModal(); pendingConfirmAction = null; }
    if (e.target.id === 'prevMCQ') goPrevMCQ();
    if (e.target.id === 'nextMCQ') goNextMCQ();
    if (e.target.id === 'prevFRQ') goPrevFRQ();
    if (e.target.id === 'nextFRQ') goNextFRQ();
    // Dynamically-rendered "← All Tests" link in test intro screen
    if (e.target.id === 'allTestsLink') { e.preventDefault(); goBackToHub(); }
  });
}

// ─── Section Start ────────────────────────────────────────────────────────────
function startSection(section) {
  currentSection = section;
  currentQuestion = 0;
  stopTimer();

  if (section === 'mcq') {
    const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
    mcqTimeRemaining = (subj && subj.mcqParts) ? subj.mcqParts[0].time : ((subj && subj.mcqTime) || 5400);
    currentMCQPart = 0;
    const desmosBtn = document.getElementById('desmosBtn');
    if (desmosBtn && subj && subj.mcqParts) {
      desmosBtn.style.display = subj.mcqParts[0].calculator ? '' : 'none';
    } else if (desmosBtn) {
      desmosBtn.style.display = '';
    }
    showScreen('mcqScreen');
    updateTimerDisplay();
    startTimer();
    renderMCQQuestion(0);
    renderQuestionNav();
    autoSaveInterval = setInterval(saveActiveTest, 30000);
  } else if (section === 'break') {
    showScreen('breakScreen');
    renderBreakScreen();
  } else if (section === 'frq') {
    const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
    frqTimeRemaining = (subj && subj.frqTime) || 5400;
    showScreen('frqScreen');
    updateTimerDisplay();
    startTimer();
    renderFRQQuestion(0);
    renderFRQNav();
    autoSaveInterval = setInterval(saveActiveTest, 30000);
  }
}

// ─── Timer ────────────────────────────────────────────────────────────────────
function startTimer() {
  stopTimer();
  timer = setInterval(() => {
    if (currentSection === 'mcq') mcqTimeRemaining = Math.max(0, mcqTimeRemaining - 1);
    else frqTimeRemaining = Math.max(0, frqTimeRemaining - 1);
    updateTimerDisplay();
    if ((currentSection === 'mcq' ? mcqTimeRemaining : frqTimeRemaining) === 0) { stopTimer(); currentSection === 'mcq' ? finishMCQ() : finishFRQ(); }
  }, 1000);
}

function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }

function updateTimerDisplay() {
  const el = document.getElementById('timerDisplay');
  if (!el) return;
  const t = currentSection === 'frq' ? frqTimeRemaining : mcqTimeRemaining;
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  el.textContent = `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.className = 'timer';
  if (t <= 600) el.classList.add('warning');
  if (t <= 60) el.classList.add('danger');
}

// ─── MCQ ──────────────────────────────────────────────────────────────────────
function renderMCQQuestion(index) {
  currentQuestion = index;
  const q = mcqQuestions[index];
  if (!q) return;

  const answered = Object.values(mcqAnswers).filter(v => v !== undefined).length;
  const pct = Math.round((answered / mcqQuestions.length) * 100);
  const fillEl = document.getElementById('mcqProgressFill');
  if (fillEl) fillEl.style.width = pct + '%';

  const numEl = document.getElementById('mcqQuestionNum');
  const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
  if (numEl) {
    if (subj && subj.mcqParts) {
      const part = subj.mcqParts[currentMCQPart];
      const partStart = currentMCQPart === 0 ? 0 : subj.mcqParts[0].count;
      numEl.textContent = `${part.label} — Question ${index - partStart + 1} of ${part.count}`;
    } else {
      numEl.textContent = `Question ${index + 1} of ${mcqQuestions.length}`;
    }
  }

  const flagBtn = document.getElementById('flagBtn');
  if (flagBtn) {
    const isFlagged = flagged.has(q.id);
    flagBtn.textContent = isFlagged ? '⚑ Flagged' : '⚑ Flag';
    flagBtn.className = 'flag-btn' + (isFlagged ? ' flagged' : '');
    flagBtn.onclick = () => { isFlagged ? flagged.delete(q.id) : flagged.add(q.id); renderMCQQuestion(index); };
  }

  const content = document.getElementById('mcqQuestionContent');
  if (!content) return;
  const sel = mcqAnswers[q.id];

  // Build question text — renderFRQPromptText handles plain text, bare LaTeX,
  // and $…$/$$…$$ delimiter syntax (Physics/Calc/Stats questions)
  const questionHtml = `<div class="question-text">${renderFRQPromptText(q.question || '')}</div>`;

  // Table (for format:"table" questions — q.format preserves algebraic/table/graph)
  const tableHtml = q.format === 'table' && q.tableData ? buildTableHtml(q.tableData) : '';

  // Graph description (for format:"graph" questions — Desmos handles visualization)
  const graphHtml = q.format === 'graph' && q.graphDescription
    ? `<div class="graph-description"><span>📈</span> ${App.escapeHtml(q.graphDescription)}</div>`
    : '';

  // Code block (for CS A questions)
  const codeHtml = q.isCode && q.code ? App.renderCode(q.code) : '';

  // Diagram / image (Physics diagrams, or generic question images)
  const imgSrc = q.image || q.diagram;
  const diagramHtml = imgSrc
    ? `<div class="question-image-wrap">
         <img class="physics-diagram-img" data-physics-diagram
              src="${App.escapeHtml(imgSrc)}"
              alt="Diagram" loading="lazy">
         <span class="physics-diagram-hint">Click to expand</span>
       </div>`
    : '';

  content.innerHTML = `
    ${questionHtml}
    ${tableHtml}
    ${graphHtml}
    ${codeHtml}
    ${diagramHtml}
    <div class="choices-list">
      ${(q.choices || []).map((c, ci) => `
        <div class="choice-item${sel === ci ? ' selected' : ''}" data-action="selectAnswer" data-q-id="${q.id}" data-choice="${ci}" data-index="${index}">
          <span class="choice-label">${String.fromCharCode(65+ci)})</span>
          <span>${renderFRQPromptText(c)}</span>
        </div>`).join('')}
    </div>`;

  // Render any KaTeX spans after setting innerHTML
  renderMath(content);
  // Attach lightbox + dark-mode invert to any diagram images
  if (window.PhysicsRenderer) PhysicsRenderer.upgradeDiagrams(content);

  const prevBtn = document.getElementById('prevMCQ');
  const nextBtn = document.getElementById('nextMCQ');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) {
    const subjNext = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
    if (subjNext && subjNext.mcqParts && currentMCQPart === 0 && index === subjNext.mcqParts[0].count - 1) {
      nextBtn.textContent = 'Submit Part A →';
    } else if (index === mcqQuestions.length - 1) {
      nextBtn.textContent = 'Submit Section';
    } else {
      nextBtn.textContent = 'Next →';
    }
  }
  renderQuestionNav();
}

function selectAnswer(questionId, choiceIndex, qIndex) {
  mcqAnswers[questionId] = choiceIndex;
  renderMCQQuestion(qIndex);
}

function renderQuestionNav() {
  const grid = document.getElementById('navGrid');
  if (!grid) return;
  grid.innerHTML = mcqQuestions.map((q, i) => {
    let cls = 'q-num';
    if (mcqAnswers[q.id] !== undefined) cls += ' answered';
    if (flagged.has(q.id)) cls += ' flagged';
    if (i === currentQuestion && currentSection === 'mcq') cls += ' current';
    return `<button class="${cls}" data-action="renderMCQQuestion" data-index="${i}">${i+1}</button>`;
  }).join('');
}

function goNextMCQ() {
  const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
  if (subj && subj.mcqParts && currentMCQPart === 0 && currentQuestion === subj.mcqParts[0].count - 1) {
    confirmSubmit('mcq-partA');
  } else if (currentQuestion < mcqQuestions.length - 1) {
    renderMCQQuestion(currentQuestion + 1);
  } else {
    confirmSubmit('mcq');
  }
}
function goPrevMCQ() { if (currentQuestion > 0) renderMCQQuestion(currentQuestion - 1); }

function finishMCQ() {
  stopTimer(); clearInterval(autoSaveInterval);
  localStorage.removeItem(App.subjectStorageKey('active_test'));
  localStorage.removeItem('apcsa_active_test');
  renderBreakScreen(); showScreen('breakScreen');
}

function finishPartA() {
  stopTimer();
  currentMCQPart = 1;
  const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
  const partB = subj && subj.mcqParts ? subj.mcqParts[1] : null;
  mcqTimeRemaining = partB ? partB.time : 2700;

  // Show/hide Desmos based on Part B calculator flag
  const desmosBtn = document.getElementById('desmosBtn');
  if (desmosBtn) desmosBtn.style.display = (partB && partB.calculator) ? '' : 'none';

  // Show Part A complete mini-break screen inside the break screen
  const el = document.getElementById('breakScreen');
  if (el) {
    const answeredA = mcqQuestions.slice(0, subj.mcqParts[0].count).filter(q => mcqAnswers[q.id] !== undefined).length;
    el.innerHTML = `
      <div style="max-width:520px;margin:80px auto;text-align:center;padding:0 20px">
        <div style="font-size:2.5rem;margin-bottom:16px">✏️</div>
        <h2 style="font-size:1.8rem;font-weight:800;margin-bottom:8px">Part A Complete!</h2>
        <p style="color:var(--text-muted);margin-bottom:8px">You answered ${answeredA} of ${subj.mcqParts[0].count} questions.</p>
        <p style="color:var(--text-muted);margin-bottom:8px">You may now use your calculator.</p>
        <p style="color:var(--text-muted);margin-bottom:32px">Part B: ${partB ? partB.count : 15} questions · ${partB ? Math.floor(partB.time / 60) : 45} minutes</p>
        <button class="btn btn-primary btn-lg" id="startPartBBtn">Start Part B →</button>
      </div>`;
  }
  showScreen('breakScreen');

  // Wire the Part B start button
  document.getElementById('startPartBBtn').addEventListener('click', () => {
    showScreen('mcqScreen');
    updateTimerDisplay();
    startTimer();
    renderMCQQuestion(subj.mcqParts[0].count); // start at question 31
    renderQuestionNav();
  });
}

// ─── Break ────────────────────────────────────────────────────────────────────
function renderBreakScreen() {
  const el = document.getElementById('breakScreen');
  if (!el) return;
  const answered = Object.keys(mcqAnswers).length;
  el.innerHTML = `
    <div style="max-width:520px;margin:80px auto;text-align:center;padding:0 20px">
      <div style="font-size:2.5rem;margin-bottom:16px">✅</div>
      <h2 style="font-size:1.8rem;font-weight:800;margin-bottom:8px">Section I Complete!</h2>
      <p style="color:var(--text-muted);margin-bottom:8px">You answered ${answered} of ${mcqQuestions.length} MCQ questions.</p>
      <p style="color:var(--text-muted);margin-bottom:32px">Take a short break, then start Section II.</p>
      <button class="btn btn-primary btn-lg" id="startFRQBtn">Start Section II →</button>
    </div>`;
}

// ─── FRQ ──────────────────────────────────────────────────────────────────────
function renderFRQQuestion(index) {
  currentQuestion = index;
  const frq = frqQuestions[index];
  if (!frq) return;

  const numEl = document.getElementById('frqQuestionNum');
  if (numEl) numEl.textContent = `FRQ ${index + 1} of ${frqQuestions.length}`;

  const frqFillEl = document.getElementById('frqProgressFill');
  if (frqFillEl) {
    const frqAnswered = frqQuestions.filter(f =>
      frqAnswers[f.id] && Object.values(frqAnswers[f.id]).some(v => v && v.trim())
    ).length;
    frqFillEl.style.width = Math.round((frqAnswered / frqQuestions.length) * 100) + '%';
  }

  const flagBtn = document.getElementById('frqFlagBtn');
  if (flagBtn) {
    const isFlagged = flagged.has(frq.id);
    flagBtn.textContent = isFlagged ? '⚑ Flagged' : '⚑ Flag';
    flagBtn.className = 'flag-btn' + (isFlagged ? ' flagged' : '');
    flagBtn.onclick = () => { isFlagged ? flagged.delete(frq.id) : flagged.add(frq.id); renderFRQQuestion(index); };
  }

  if (!frqAnswers[frq.id]) frqAnswers[frq.id] = {};
  const saved = frqAnswers[frq.id];

  const content = document.getElementById('frqQuestionContent');
  if (!content) return;
  // Build DBQ document block if applicable
  const frqTypeLower = (frq.frqType || frq.type || '').toLowerCase();
  const frqRawDocs   = frq.documents || frq.stimulus || [];
  const frqDocsHtml  = (frqTypeLower === 'dbq' && frqRawDocs.length > 0)
    ? `<div class="dbq-stimulus-container" style="margin-bottom:20px">
         <div class="dbq-stimulus-header">📄 Documents (${frqRawDocs.length})</div>
         <div class="dbq-documents-scroll">
           ${frqRawDocs.map(function(doc, i) {
             const num      = doc.id || doc.docNum || (i + 1);
             const source   = doc.source || doc.attribution || '';
             const text     = doc.content || doc.excerpt || '';
             const docType  = doc.docType || 'text';
             const typeIcon = {
               data_table: '📊 Data Table', map: '🗺️ Map', diagram: '📐 Diagram',
               political_cartoon: '🖼️ Political Cartoon', advertisement: '📰 Advertisement',
               photo: '📷 Photograph', poster: '🪧 Poster', chart: '📈 Chart'
             }[docType] || '';
             const typeBadge  = typeIcon ? '<span class="dbq-doc-type-badge">' + typeIcon + '</span>' : '';
             const contentCls = docType !== 'text' ? ' dbq-visual-desc' : '';
             const imgUrl     = doc.imageUrl || '';
             if (imgUrl) {
               return '<div class="dbq-document-card">' +
                 '<div class="dbq-document-source">Document ' + num + ' — ' + App.escapeHtml(source) + typeBadge + '</div>' +
                 '<img class="dbq-visual-image" src="' + imgUrl + '" alt="' + App.escapeHtml(source) + '" loading="lazy" data-action="toggleZoom">' +
                 '<div class="dbq-visual-caption">' + App.escapeHtml(text) + '</div>' +
                 '</div>';
             }
             return '<div class="dbq-document-card">' +
               '<div class="dbq-document-source">Document ' + num + ' — ' + App.escapeHtml(source) + typeBadge + '</div>' +
               '<div class="dbq-document-content' + contentCls + '">' + App.escapeHtml(text) + '</div>' +
               '</div>';
           }).join('')}
         </div>
       </div>`
    : '';

  content.innerHTML = `
    <div style="margin-bottom:20px">
      <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
        <span class="badge badge-frq">${frq.type || frq.frqType || 'FRQ'}</span>
        <span class="badge badge-unit">${frq.source || 'Original'}</span>
      </div>
      <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:12px">${App.escapeHtml(frq.title)}</h3>
      <div style="white-space:pre-wrap;line-height:1.7;color:var(--text-primary);margin-bottom:16px">${renderFRQPromptText(frq.prompt || '')}</div>
      ${(() => { const src = frq.image || frq.diagram; return src ? `<div class="question-image-wrap"><img class="physics-diagram-img" data-physics-diagram src="${App.escapeHtml(src)}" alt="Diagram" loading="lazy"><span class="physics-diagram-hint">Click to expand</span></div>` : ''; })()}
      ${frq.starterCode ? `<p style="font-weight:600;margin-bottom:6px">Given code:</p>${App.renderCode(frq.starterCode)}` : ''}
    </div>
    ${frqDocsHtml}
    ${(frq.parts && frq.parts.length > 0
      ? frq.parts
      : (frq.frqType === 'dbq' || frq.frqType === 'leq')
          ? [{ label: 'essay', question: 'Write your full essay response here.' }]
          : frq.frqType === 'saq'
              ? [{ label: 'a', question: 'Part (a)' }, { label: 'b', question: 'Part (b)' }, { label: 'c', question: 'Part (c)' }]
              : []
    ).map(p => {
      const instruction = p.instruction || ((p.command ? p.command + ': ' : '') + (p.question || ''));
      const pointsHtml = p.points !== undefined ? `<span class="frq-points">· ${p.points} pt${p.points!==1?'s':''}</span>` : '';
      const placeholder = frq.starterCode ? 'Write your Java code here...' : 'Write your answer here...';
      return `
      <div class="frq-part">
        <div class="frq-part-label">Part (${p.label}) ${pointsHtml}</div>
        <div class="frq-part-instruction">${renderFRQPromptText(instruction)}</div>
        ${p.image ? `<div class="question-image-wrap frq-part-image"><img class="physics-diagram-img" data-physics-diagram src="${App.escapeHtml(p.image)}" alt="Diagram" loading="lazy"><span class="physics-diagram-hint">Click to expand</span></div>` : ''}
        <textarea class="frq-textarea" placeholder="${placeholder}"
          data-frq-id="${frq.id}" data-part-label="${p.label}">${App.escapeHtml(saved[p.label] || '')}</textarea>
      </div>`;
    }).join('')}`;

  content.querySelectorAll('.frq-textarea').forEach(ta => {
    ta.addEventListener('input', () => saveFRQInput(ta.dataset.frqId, ta.dataset.partLabel, ta.value));
  });

  // Render any LaTeX that was embedded as data-latex spans
  renderMath(content);
  // Attach lightbox + dark-mode invert to any diagram/image tags
  if (window.PhysicsRenderer) PhysicsRenderer.upgradeDiagrams(content);

  const prevBtn = document.getElementById('prevFRQ');
  const nextBtn = document.getElementById('nextFRQ');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.textContent = index === frqQuestions.length - 1 ? 'Submit Test' : 'Next →';
  renderFRQNav();
}

function saveFRQInput(frqId, part, text) {
  if (!frqAnswers[frqId]) frqAnswers[frqId] = {};
  frqAnswers[frqId][part] = text;
}

function renderFRQNav() {
  const grid = document.getElementById('frqNavGrid');
  if (!grid) return;
  grid.innerHTML = frqQuestions.map((f, i) => {
    const hasAny = frqAnswers[f.id] && Object.values(frqAnswers[f.id]).some(v => v && v.trim());
    let cls = 'q-num';
    if (hasAny) cls += ' answered';
    if (flagged.has(f.id)) cls += ' flagged';
    if (i === currentQuestion) cls += ' current';
    return `<button class="${cls}" data-action="renderFRQQuestion" data-index="${i}">FRQ ${i+1}</button>`;
  }).join('');
}

function goNextFRQ() { if (currentQuestion < frqQuestions.length - 1) renderFRQQuestion(currentQuestion + 1); else confirmSubmit('frq'); }
function goPrevFRQ() { if (currentQuestion > 0) renderFRQQuestion(currentQuestion - 1); }

function finishFRQ() {
  stopTimer(); clearInterval(autoSaveInterval);
  mcqQuestions.forEach(q => { if (mcqAnswers[q.id] !== undefined) App.recordAnswer(q.id, mcqAnswers[q.id] === q.answer); });
  const mcqCorrect = mcqQuestions.filter(q => mcqAnswers[q.id] === q.answer).length;
  const result = {
    testId: currentTest.id, testTitle: currentTest.title, date: Date.now(),
    mcqIds: currentTest.mcqIds, frqIds: currentTest.frqIds || [],
    frqObjects: frqQuestions.length > 0 ? frqQuestions.map(f => ({
      ...f,
      subject: f.subject || currentTest.subject || App.getActiveSubject()
    })) : [],
    mcqAnswers, frqAnswers, flagged: [...flagged],
    mcqCorrect, mcqTotal: mcqQuestions.length,
    frqSelfGrades: {}, frqTotal: 0, frqMax: (typeof Scoring !== 'undefined' && Scoring.AP_SCORE_TABLES)
      ? (Scoring.AP_SCORE_TABLES[App.getActiveSubject()] || Scoring.AP_SCORE_TABLES._default).frqMax
      : 28,
    estimatedScore: App.estimateAPScore(mcqCorrect, 0)
  };
  App.saveTestResult(result);
  localStorage.removeItem(App.subjectStorageKey('active_test'));
  localStorage.removeItem('apcsa_active_test');

  // AP score + percentile estimate based on MCQ only (FRQ not graded yet)
  const mcqPct = mcqQuestions.length > 0 ? mcqCorrect / mcqQuestions.length : 0;
  const mcqPctDisplay = Math.round(mcqPct * 100);
  const subjectId = App.getActiveSubject();
  const estScore = (typeof Scoring !== 'undefined' && Scoring.estimateAPScoreForSubject)
    ? Scoring.estimateAPScoreForSubject(mcqCorrect, mcqQuestions.length, 0, subjectId)
    : (mcqPct >= 0.75 ? 5 : mcqPct >= 0.60 ? 4 : mcqPct >= 0.45 ? 3 : mcqPct >= 0.30 ? 2 : 1);

  const PERCENTILES = {
    apcsa: { 5:'~top 25%', 4:'~top 50%', 3:'~top 70%', 2:'~top 85%', 1:'bottom 15%' },
    apbio: { 5:'~top 15%', 4:'~top 35%', 3:'~top 55%', 2:'~top 75%', 1:'bottom 25%' },
    _default: { 5:'~top 20%', 4:'~top 45%', 3:'~top 65%', 2:'~top 82%', 1:'bottom 18%' }
  };
  const pTable = PERCENTILES[App.getActiveSubject()] || PERCENTILES._default;
  const percentile = pTable[estScore];
  const scoreColors = { 5:'#10B981', 4:'#3B82F6', 3:'#F59E0B', 2:'#F97316', 1:'#EF4444' };
  const scoreColor = scoreColors[estScore];
  const scoreLabels = { 5:'Excellent', 4:'Great', 3:'Proficient', 2:'Developing', 1:'Needs Work' };

  showScreen('doneScreen');
  document.getElementById('doneScreen').innerHTML = `
    <div style="max-width:520px;margin:60px auto;text-align:center;padding:0 20px">
      <div style="font-size:3rem;margin-bottom:16px">🎉</div>
      <h2 style="font-size:1.8rem;font-weight:800;margin-bottom:24px">Test Complete!</h2>

      <!-- MCQ Score -->
      <div class="card" style="text-align:left;margin-bottom:20px;padding:20px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <span style="font-weight:600">MCQ Score</span>
          <span style="font-weight:700;font-size:1.1rem">${mcqCorrect} / ${mcqQuestions.length} &nbsp; <span style="color:${scoreColor}">${mcqPctDisplay}%</span></span>
        </div>
        <div style="height:8px;background:var(--bg-secondary);border-radius:99px;overflow:hidden">
          <div style="height:100%;width:${mcqPctDisplay}%;background:${scoreColor};border-radius:99px;transition:width 0.8s"></div>
        </div>
      </div>

      <!-- AP Score -->
      <div class="card" style="margin-bottom:20px;padding:24px">
        <div style="font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:8px">Estimated AP Score (MCQ only)</div>
        <div style="font-size:4rem;font-weight:900;color:${scoreColor};line-height:1">${estScore}</div>
        <div style="font-size:0.95rem;font-weight:600;color:${scoreColor};margin-top:4px">${scoreLabels[estScore]}</div>
        <div style="margin-top:10px;font-size:0.85rem;color:var(--text-muted)">Approx. percentile: <strong>${percentile}</strong></div>
        <div style="margin-top:6px;font-size:0.78rem;color:var(--text-muted)">Grade your FRQs to refine this estimate</div>
      </div>

      <a href="review.html" class="btn btn-primary btn-lg" style="width:100%;margin-bottom:12px">Review &amp; Grade FRQs →</a>
      <button data-action="renderHubScreen" class="btn btn-secondary" style="width:100%">← Back to Tests</button>
    </div>`;
}

// ─── Auto Save ────────────────────────────────────────────────────────────────
function saveActiveTest() {
  try {
    localStorage.setItem(App.subjectStorageKey('active_test'), JSON.stringify({
      testId: currentTest?.id, section: currentSection,
      mcqAnswers, frqAnswers, flagged: [...flagged], mcqTimeRemaining, frqTimeRemaining,
      currentQuestion
    }));
  } catch(e) { console.warn('auto-save error:', e); }
}

// ─── Confirm Modal ────────────────────────────────────────────────────────────
function confirmSubmit(section) {
  if (section === 'mcq-partA') {
    const subj = window.SubjectRegistry ? window.SubjectRegistry.getSubjectById(App.getActiveSubject()) : null;
    const partACount = (subj && subj.mcqParts) ? subj.mcqParts[0].count : 30;
    const answeredPartA = mcqQuestions.slice(0, partACount).filter(q => mcqAnswers[q.id] !== undefined).length;
    const unansweredPartA = partACount - answeredPartA;
    const msg = `You answered ${answeredPartA}/${partACount} Part A questions.${unansweredPartA > 0 ? ` <strong>${unansweredPartA} unanswered.</strong>` : ''} You cannot return to Part A after submitting.`;
    showModal('Submit Part A?', msg);
    pendingConfirmAction = finishPartA;
    return;
  }
  const unanswered = section === 'mcq'
    ? mcqQuestions.length - Object.keys(mcqAnswers).filter(id => mcqAnswers[id] !== undefined).length
    : 0;
  const msg = section === 'mcq'
    ? `You answered ${mcqQuestions.length - unanswered}/${mcqQuestions.length} questions.${unanswered > 0 ? ` <strong>${unanswered} unanswered.</strong>` : ''}`
    : 'This will end the test. You can review and self-grade FRQs after.';
  showModal(section === 'mcq' ? 'Submit Section I?' : 'Submit Test?', msg);
  pendingConfirmAction = section === 'mcq' ? finishMCQ : finishFRQ;
}

function showModal(title, body) {
  const m = document.getElementById('submitModal');
  const t = document.getElementById('submitModalTitle');
  const b = document.getElementById('submitModalBody');
  if (t) t.textContent = title;
  if (b) b.innerHTML = body;
  if (m) m.classList.remove('hidden');
}
function hideModal() { const m = document.getElementById('submitModal'); if (m) m.classList.add('hidden'); }

document.addEventListener('DOMContentLoaded', initTestRunner);
