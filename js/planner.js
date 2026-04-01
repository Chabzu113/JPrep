// AP Practice — Study Planner Page

let _countdownInterval = null;
let _activeTabId = null;
let _selectedSubjects = [];
let _modalSelectedSet = new Set();

// ─── Phase study recommendations ─────────────────────────────────────────────
const PHASE_CONTENT = {
  foundations: {
    description: `You have plenty of time — use it to build strong fundamentals. Work through the question bank unit by unit in order. Focus on accuracy, not speed. Aim for 20–30 questions per study session. Read every explanation carefully, even for questions you got right.`,
    weeks: [
      ['Review Unit 1 concepts', 'Do 20 MCQs from Unit 1', 'Read explanations for every miss', 'Re-attempt incorrect questions'],
      ['Move to Unit 2 concepts', 'Mix Unit 1 + Unit 2 practice', 'Track your weak topics', 'Do 1 FRQ with full rubric'],
      ['Continue Unit 3 & 4', 'Take a short timed drill (15 Qs)', 'Review weakest topic from Week 2', 'Celebrate your progress 🎉']
    ]
  },
  practice: {
    description: `You have 1–2 months — time to step it up. Mix question bank sessions with full unit reviews. Start paying close attention to your weak areas in the Progress page. Take at least one full-length practice test this week and review every wrong answer the same day.`,
    weeks: [
      ['Take a full practice test', 'Review all incorrect answers', 'Drill weakest 2 topics in Q Bank', 'Re-do missed questions'],
      ['Mixed difficulty MCQ drill', 'Review 2 FRQs with rubric', 'Focus on weak units only', 'Check your accuracy trend'],
      ['Another full practice test', 'Compare scores — find the delta', 'Target remaining weak topics', 'Rest day — you earned it']
    ]
  },
  intensive: {
    description: `You're 2–4 weeks out — it's crunch time. Take a timed practice test every 3–4 days. Use the results to identify exactly which topics need the most work, then drill those in the question bank. Quality over quantity — every session should have a goal.`,
    weeks: [
      ['Timed full practice test', 'Immediate full review', 'Drill top 3 weak topics', 'FRQ timed practice'],
      ['Timed MCQ section only', 'Review FRQ rubric points', 'Re-test weak areas', 'Rest & light review'],
      ['Final full practice test', 'Review every question', 'Quick skim all unit notes', 'Sleep well the night before 💤']
    ]
  },
  finalprep: {
    description: `The exam is less than 2 weeks away — stay focused and calm. Only practice weak topics. Take at least 2 timed full-length practice tests. After each test, review every wrong answer the same day. Don't try to learn new material — reinforce what you know.`,
    weeks: [
      ['Weak-topic MCQs only', 'Timed full practice test', 'Full test review same day', 'Light FRQ reading'],
      ['One more timed practice test', 'Review every wrong answer', 'Quick skim all units', 'Rest — you\'ve got this 🌟'],
      ['Exam week: light review only', 'Skim weak topics once more', 'Sleep 8h the night before', '🎯 Exam day — crush it!']
    ]
  },
  past: {
    description: `This exam has passed. Your practice data is preserved so you can review your performance and see how you did. Keep up the great work on your other subjects!`,
    weeks: [
      ['Review your practice test results', 'Check your Progress page', 'Compare to your other subjects', 'Celebrate your hard work 🎉'],
      ['Focus on remaining exams', 'Use the planner for upcoming tests', 'Share the app with friends', 'Keep grinding! 💪'],
      ['Reflect on what worked', 'Apply strategies to next exam', 'Take a well-deserved break', 'You did it! 🎓']
    ]
  }
};

// ─── Insights Engine ─────────────────────────────────────────────────────────
function getPlannerInsights(subjectId) {
  const subject = SubjectRegistry.getSubjectById(subjectId);

  // Return zeroed object for subjects without content
  if (!subject || !subject.hasContent || !subject.units || subject.units.length === 0) {
    return {
      unitStats: [], weakUnits: [], unseenUnits: [],
      totalQuestions: 0, totalAnswered: 0, coveragePct: 0,
      pacePer7Days: 0, projectedCoverage: 0, streak: 0,
      testsTaken: 0, totalWrongCount: 0, daysUntilExam: subject ? SubjectRegistry.daysUntilExam(subject) : 0
    };
  }

  // Load all questions from window globals
  const allQ = [];
  (subject.dataFiles || []).forEach(f => {
    const arr = window[f];
    if (Array.isArray(arr)) allQ.push(...arr);
  });

  const state = App.getState();
  const bucket = (state.subjects && state.subjects[subjectId]) || {};
  const questionHistory = bucket.questionHistory || {};

  // Per-unit stats
  const unitStats = subject.units.map(u => {
    const unitQ = allQ.filter(q => q.unit === u.num);
    let seen = 0, correct = 0;
    unitQ.forEach(q => {
      const h = questionHistory[q.id];
      if (h && h.seen) { seen++; if (h.correct) correct++; }
    });
    return {
      unitNum: u.num,
      unitTitle: u.title,
      total: unitQ.length,
      seen,
      correct,
      accuracy: seen > 0 ? correct / seen : 0,
      wrongCount: seen - correct
    };
  });

  const weakUnits = unitStats
    .filter(u => u.accuracy < 0.65 && u.seen >= 5)
    .sort((a, b) => a.accuracy - b.accuracy);

  const unseenUnits = unitStats.filter(u => u.seen === 0);

  const totalQuestions = unitStats.reduce((s, u) => s + u.total, 0);
  const totalAnswered = unitStats.reduce((s, u) => s + u.seen, 0);
  const coveragePct = totalQuestions > 0 ? Math.round(totalAnswered / totalQuestions * 100) : 0;

  // Pace: questions answered in last 7 days
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  let pacePer7Days = 0;
  Object.values(questionHistory).forEach(h => {
    if (h.lastSeen && h.lastSeen >= sevenDaysAgo) pacePer7Days++;
  });

  const daysUntilExam = SubjectRegistry.daysUntilExam(subject);

  // Projected coverage
  let projectedCoverage;
  if (daysUntilExam > 0 && totalQuestions > 0) {
    projectedCoverage = Math.min(100, Math.round(
      (totalAnswered + pacePer7Days * (daysUntilExam / 7)) / totalQuestions * 100
    ));
  } else {
    projectedCoverage = coveragePct;
  }

  // Streak: consecutive calendar days ending today with activity
  let streak = 0;
  const datesToCheck = new Set();
  Object.values(questionHistory).forEach(h => {
    if (h.lastSeen) datesToCheck.add(new Date(h.lastSeen).toDateString());
  });
  const day = new Date();
  while (true) {
    if (datesToCheck.has(day.toDateString())) {
      streak++;
      day.setDate(day.getDate() - 1);
    } else {
      break;
    }
  }

  const testsTaken = App.getSubjectOverallStats(subjectId).testsTaken;
  const totalWrongCount = unitStats.reduce((s, u) => s + u.wrongCount, 0);

  return {
    unitStats, weakUnits, unseenUnits,
    totalQuestions, totalAnswered, coveragePct,
    pacePer7Days, daysUntilExam, projectedCoverage,
    streak, testsTaken, totalWrongCount
  };
}

// ─── Today's Focus Card ──────────────────────────────────────────────────────
function buildTodaysFocusCard(insights, subject) {
  // Determine focus unit by priority
  let focus = null;
  if (insights.weakUnits.length > 0) {
    focus = insights.weakUnits[0];
  } else if (insights.unseenUnits.length > 0) {
    focus = insights.unseenUnits[0];
  } else {
    // Lowest accuracy unit with at least 1 seen question
    const candidates = insights.unitStats.filter(u => u.seen >= 1).sort((a, b) => a.accuracy - b.accuracy);
    if (candidates.length > 0) focus = candidates[0];
  }

  if (!focus && insights.totalAnswered === 0) {
    return `
      <div class="card" style="border-left:4px solid ${subject.color};margin-bottom:16px">
        <h3>\u{1F4CD} Today's Focus</h3>
        <p style="color:var(--text-muted)">Start practicing to unlock your personalized focus recommendations</p>
        <a href="question-bank.html" class="btn btn-primary btn-sm">Go to Question Bank</a>
      </div>`;
  }

  if (!focus) return '';

  const accDisplay = focus.seen > 0 ? Math.round(focus.accuracy * 100) + '% accuracy' : 'Not started';
  const remaining = focus.total - focus.seen;

  return `
    <div class="card" style="border-left:4px solid ${subject.color};margin-bottom:16px">
      <h3>\u{1F4CD} Today's Focus</h3>
      <div style="font-size:1.05rem;font-weight:600;margin-bottom:4px">Unit ${focus.unitNum} &mdash; ${App.escapeHtml(focus.unitTitle)}</div>
      <div style="font-size:0.9rem;color:var(--text-muted);margin-bottom:10px">${accDisplay} &middot; ${remaining} question${remaining !== 1 ? 's' : ''} remaining</div>
      <a href="question-bank.html?unit=${focus.unitNum}" class="btn btn-primary btn-sm">Drill it &rarr;</a>
    </div>`;
}

// ─── Dynamic Task List ───────────────────────────────────────────────────────
function buildDynamicTaskList(insights, subject, phase) {
  if (!subject.hasContent && phase.phase !== 'past') {
    return `
      <div class="card schedule-week-card" style="grid-column:1/-1">
        <div class="schedule-week-label">Study Schedule</div>
        <div class="coming-soon-note">
          ${subject.emoji} Question bank content for <strong>${subject.name}</strong> is coming soon.<br>
          Use the countdown and phase guide above to plan your external study sessions.
        </div>
      </div>`;
  }

  if (insights.totalAnswered === 0) {
    return `
      <div class="card">
        <h3>\u{1F4CB} Your Study Plan</h3>
        <p style="color:var(--text-muted)">Complete some practice questions to unlock your personalized study plan</p>
        <a href="question-bank.html" class="btn btn-primary btn-sm">Start Practicing</a>
      </div>`;
  }

  const tasks = [];

  if (insights.weakUnits.length > 0) {
    const u = insights.weakUnits[0];
    tasks.push({
      label: 'Drill your weakest unit',
      note: `Unit ${u.unitNum} \u2014 ${Math.round(u.accuracy * 100)}% accuracy`,
      href: `question-bank.html?unit=${u.unitNum}`,
      btnText: 'Practice'
    });
  }

  if (insights.totalWrongCount > 0) {
    tasks.push({
      label: 'Re-attempt wrong answers',
      note: `${insights.totalWrongCount} question${insights.totalWrongCount !== 1 ? 's' : ''} to retry`,
      href: 'question-bank.html?status=incorrect',
      btnText: 'Retry'
    });
  }

  if (insights.unseenUnits.length > 0) {
    const u = insights.unseenUnits[0];
    tasks.push({
      label: 'Start a new unit',
      note: `Unit ${u.unitNum} \u2014 ${App.escapeHtml(u.unitTitle)}`,
      href: `question-bank.html?unit=${u.unitNum}`,
      btnText: 'Start'
    });
  }

  if (insights.testsTaken < 2) {
    tasks.push({
      label: 'Take a full practice test',
      note: `${insights.testsTaken} test${insights.testsTaken !== 1 ? 's' : ''} completed so far`,
      href: 'practice-test.html',
      btnText: 'Go'
    });
  }

  tasks.push({
    label: 'Review your progress',
    note: `${insights.coveragePct}% of question bank covered`,
    href: 'results.html',
    btnText: 'View'
  });

  const rows = tasks.slice(0, 5).map(t => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-color)">
      <div>
        <div style="font-weight:600;font-size:0.95rem">${App.escapeHtml(t.label)}</div>
        <div style="font-size:0.82rem;color:var(--text-muted)">${t.note}</div>
      </div>
      <a href="${t.href}" class="btn btn-secondary btn-sm" style="white-space:nowrap;margin-left:12px">${App.escapeHtml(t.btnText)}</a>
    </div>
  `).join('');

  return `
    <div class="card">
      <h3>\u{1F4CB} Your Study Plan</h3>
      ${rows}
    </div>`;
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function initPlanner() {
  const state = App.getState();

  // Guard: must have subjects configured
  if (!state.subjectsConfigured || !state.selectedSubjects || state.selectedSubjects.length === 0) {
    App.navigateTo('subject-select.html');
    return;
  }

  _selectedSubjects = SubjectRegistry.getSelectedSubjectObjects(state.selectedSubjects);
  _activeTabId = state.activeSubject;

  // Make sure activeSubject is actually in selectedSubjects
  if (!_selectedSubjects.find(s => s.id === _activeTabId)) {
    _activeTabId = _selectedSubjects[0].id;
    App.setActiveSubject(_activeTabId);
  }

  renderTabs();
  renderPlannerContent(_activeTabId);
  renderAllExamsTable();
  startCountdownTick();

  // Wire manage-subjects modal
  document.getElementById('manageSubjectsBtn')?.addEventListener('click', openManageModal);
  document.getElementById('modalCloseBtn')?.addEventListener('click', closeManageModal);
  document.getElementById('modalSaveBtn')?.addEventListener('click', saveModalChanges);
  document.getElementById('manageSubjectsModal')?.addEventListener('click', function(e) {
    if (e.target.id === 'manageSubjectsModal') closeManageModal();
  });
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────
function renderTabs() {
  const container = document.getElementById('plannerTabs');
  if (!container) return;

  container.innerHTML = _selectedSubjects.map(s => `
    <button class="planner-tab ${s.id === _activeTabId ? 'active' : ''}"
            data-id="${s.id}"
            style="${s.id === _activeTabId ? `color:${s.color}` : ''}">
      ${s.emoji} ${s.shortName}
    </button>
  `).join('');

  container.querySelectorAll('.planner-tab').forEach(tab => {
    tab.addEventListener('click', () => setActiveTab(tab.dataset.id));
  });
}

function setActiveTab(id) {
  _activeTabId = id;
  App.setActiveSubject(id);

  // Update tab active states
  document.querySelectorAll('.planner-tab').forEach(t => {
    const subject = SubjectRegistry.getSubjectById(t.dataset.id);
    const isActive = t.dataset.id === id;
    t.classList.toggle('active', isActive);
    t.style.color = isActive && subject ? subject.color : '';
  });

  renderPlannerContent(id);
  updateAllExamsTable(id);

  // Restart countdown for new subject
  if (_countdownInterval) clearInterval(_countdownInterval);
  startCountdownTick();
}

// ─── Main Planner Content ─────────────────────────────────────────────────────
function renderPlannerContent(subjectId) {
  const container = document.getElementById('plannerContent');
  if (!container) return;

  const subject = SubjectRegistry.getSubjectById(subjectId);
  if (!subject) return;

  const days = SubjectRegistry.daysUntilExam(subject);
  const phase = SubjectRegistry.getStudyPhase(days);
  const insights = getPlannerInsights(subjectId);

  container.innerHTML = `
    ${buildTodaysFocusCard(insights, subject)}
    <div class="planner-grid">
      <div class="planner-left">
        ${buildCountdownCard(subject, days, insights)}
        ${buildProgressCard(subjectId, subject, insights)}
      </div>
      <div class="planner-right">
        ${buildPhaseCard(phase, days, subject, insights)}
        ${buildDynamicTaskList(insights, subject, phase)}
      </div>
    </div>
  `;
}

// ─── Countdown Card ───────────────────────────────────────────────────────────
function buildCountdownCard(subject, days, insights) {
  const examDateStr = SubjectRegistry.formatExamDate(subject);

  if (days <= 0) {
    return `
      <div class="card countdown-card" style="border-top-color:${subject.color}">
        <div class="countdown-days-number" style="color:${subject.color}">🎓</div>
        <div class="countdown-past">Exam Passed</div>
        <div class="countdown-exam-date">${examDateStr}</div>
      </div>`;
  }

  const streakHtml = insights.streak >= 2
    ? `<div style="margin-top:8px;font-size:0.9rem;color:var(--text-muted)">🔥 ${insights.streak}-day streak</div>`
    : '';

  return `
    <div class="card countdown-card" style="border-top-color:${subject.color}">
      <div class="countdown-days-number" style="color:${subject.color}">${days}</div>
      <div class="countdown-days-label">Days Until Exam</div>
      <div class="countdown-exam-date">${examDateStr}</div>
      <div class="countdown-clock" id="countdownClock">loading...</div>
      ${streakHtml}
    </div>`;
}

// ─── Phase Card ───────────────────────────────────────────────────────────────
function buildPhaseCard(phase, days, subject, insights) {
  const content = PHASE_CONTENT[phase.phase] || PHASE_CONTENT.foundations;

  const qbankLink = subject.hasContent && insights.weakUnits.length > 0
    ? `<a href="question-bank.html?unit=${insights.weakUnits[0].unitNum}" class="btn btn-primary btn-sm">📚 Drill Unit ${insights.weakUnits[0].unitNum}</a>`
    : `<a href="question-bank.html" class="btn btn-primary btn-sm">📚 Question Bank</a>`;

  const actionButtons = subject.hasContent ? `
    ${qbankLink}
    <a href="practice-test.html" class="btn btn-secondary btn-sm">📝 Practice Test</a>
    <a href="results.html" class="btn btn-secondary btn-sm">📊 Progress</a>
  ` : `
    <a href="planner.html" class="btn btn-secondary btn-sm">📅 View All Exams</a>
  `;

  return `
    <div class="card phase-card">
      <div class="phase-header">
        <span class="phase-badge" style="background:${phase.color}">${phase.label}</span>
        <span class="phase-title">${days > 0 ? `${days} days to go` : 'Exam complete'}</span>
      </div>
      <p class="phase-description">${content.description}</p>
      <div class="phase-actions">${actionButtons}</div>
    </div>`;
}


// ─── Progress Card ────────────────────────────────────────────────────────────
function buildProgressCard(subjectId, subject, insights) {
  if (!subject.hasContent || subject.units.length === 0) {
    return `
      <div class="card progress-card">
        <h3>📈 Your Progress</h3>
        <div class="coming-soon-note">${subject.emoji} Content coming soon</div>
      </div>`;
  }

  const unitsHtml = subject.units.map(u => {
    const stats = App.getUnitStats(u.num);
    const pct = stats.total > 0 ? Math.round((stats.seen / stats.total) * 100) : 0;
    const acc = stats.seen > 0 ? stats.accuracy : null;
    return `
      <div class="unit-mini-bar">
        <div class="unit-mini-label">
          <strong>Unit ${u.num}</strong>
          <span>${stats.seen}/${stats.total} seen${acc !== null ? ' · ' + acc + '% acc' : ''}</span>
        </div>
        <div class="unit-mini-track">
          <div class="unit-mini-fill" style="width:${pct}%;background:${subject.color}"></div>
        </div>
      </div>`;
  }).join('');

  const overall = App.getSubjectOverallStats(subjectId);

  const projColor = insights.projectedCoverage >= 70 ? '#10B981'
    : insights.projectedCoverage >= 40 ? '#d97706'
    : '#EF4444';

  const paceHtml = insights.pacePer7Days > 0
    ? `<div style="margin-top:8px;font-size:0.85rem;color:var(--text-muted)">${insights.pacePer7Days} question${insights.pacePer7Days !== 1 ? 's' : ''} this week</div>`
    : '';

  const coverageHtml = `
    <div style="margin-top:4px;font-size:0.85rem;color:${projColor}">
      ${insights.coveragePct}% of bank covered &middot; on track to reach ${insights.projectedCoverage}% by exam day
    </div>`;

  return `
    <div class="card progress-card">
      <h3>📈 Your Progress
        <span style="float:right;font-size:0.8rem;font-weight:400;color:var(--text-muted)">${overall.totalAnswered} answered · ${overall.accuracy}% accuracy</span>
      </h3>
      ${unitsHtml}
      ${paceHtml}
      ${coverageHtml}
      <div style="margin-top:12px;text-align:center">
        <a href="results.html" class="btn btn-secondary btn-sm" style="font-size:0.8rem">Full Analytics →</a>
      </div>
    </div>`;
}

// ─── All Exams Table ──────────────────────────────────────────────────────────
function renderAllExamsTable() {
  const table = document.getElementById('allExamsTable');
  if (!table) return;

  const sorted = [..._selectedSubjects].sort((a, b) =>
    new Date(a.examDate) - new Date(b.examDate)
  );

  table.innerHTML = `
    <thead>
      <tr>
        <th>Subject</th>
        <th>Exam Date</th>
        <th>Days Left</th>
        <th>Phase</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${sorted.map(s => {
        const days = SubjectRegistry.daysUntilExam(s);
        const phase = SubjectRegistry.getStudyPhase(days);
        const badgeClass = days > 60 ? 'days-badge-far' : days > 30 ? 'days-badge-mid' : days > 14 ? 'days-badge-close' : days > 0 ? 'days-badge-urgent' : 'days-badge-past';
        const daysText = days > 0 ? `${days} days` : 'Passed';
        const isCurrent = s.id === _activeTabId;
        return `
          <tr>
            <td><div class="exam-subject-name"><span>${s.emoji}</span>${s.name}</div></td>
            <td>${SubjectRegistry.formatExamDate(s)}</td>
            <td><span class="days-badge ${badgeClass}">${daysText}</span></td>
            <td><span style="font-size:0.85rem;color:${phase.color};font-weight:600">${phase.label}</span></td>
            <td>
              <button class="switch-subject-btn ${isCurrent ? 'current' : ''}"
                      data-id="${s.id}"
                      ${isCurrent ? 'disabled' : ''}>
                ${isCurrent ? 'Viewing' : 'Switch'}
              </button>
            </td>
          </tr>`;
      }).join('')}
    </tbody>`;

  // Wire switch buttons
  table.querySelectorAll('.switch-subject-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => setActiveTab(btn.dataset.id));
  });
}

function updateAllExamsTable(activeId) {
  // Just re-render with new active id context
  _activeTabId = activeId;
  renderAllExamsTable();
  // Re-wire after re-render
  const table = document.getElementById('allExamsTable');
  if (table) {
    table.querySelectorAll('.switch-subject-btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => setActiveTab(btn.dataset.id));
    });
  }
}

// ─── Live Countdown Tick ──────────────────────────────────────────────────────
function startCountdownTick() {
  updateCountdownClock();
  _countdownInterval = setInterval(updateCountdownClock, 1000);
}

function updateCountdownClock() {
  const clockEl = document.getElementById('countdownClock');
  if (!clockEl) return;

  const subject = SubjectRegistry.getSubjectById(_activeTabId);
  if (!subject) return;

  const now = new Date();
  const exam = new Date(subject.examDate);
  const diffMs = exam - now;

  if (diffMs <= 0) {
    clockEl.textContent = '';
    return;
  }

  // Time remaining in the current day
  const totalSeconds = Math.floor(diffMs / 1000);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  clockEl.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')} today`;
}

// ─── Manage Subjects Modal ────────────────────────────────────────────────────

function openManageModal() {
  const state = App.getState();
  // Seed the set with current selections
  _modalSelectedSet = new Set(state.selectedSubjects || []);
  renderModalGrid();
  updateModalCount();
  document.getElementById('manageSubjectsModal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeManageModal() {
  document.getElementById('manageSubjectsModal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function renderModalGrid() {
  const grid = document.getElementById('modalSubjectGrid');
  if (!grid) return;

  grid.innerHTML = SubjectRegistry.SUBJECTS.map(s => {
    const isSelected = _modalSelectedSet.has(s.id);
    return `
      <div class="card subject-card ${isSelected ? 'selected' : ''}"
           data-id="${s.id}"
           style="--subject-color:${s.color}; border-left-color:${s.color}; cursor:pointer">
        <div class="subject-card-checkmark">✓</div>
        <div class="subject-card-top">
          <span class="subject-card-emoji">${s.emoji}</span>
          <span class="subject-card-name">${s.name}</span>
        </div>
        <div class="subject-card-desc">${s.description}</div>
        <div class="subject-card-exam">📅 ${SubjectRegistry.formatExamDate(s)}</div>
        <div class="subject-card-badges">
          ${s.hasContent
            ? `<span class="badge badge-content">✓ Questions Available</span>`
            : `<span class="badge" style="background:var(--bg-secondary);color:var(--text-muted)">Coming Soon</span>`}
        </div>
      </div>`;
  }).join('');

  // Wire click handlers
  grid.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      if (_modalSelectedSet.has(id)) {
        _modalSelectedSet.delete(id);
        card.classList.remove('selected');
      } else {
        _modalSelectedSet.add(id);
        card.classList.add('selected');
      }
      updateModalCount();
    });
  });
}

function updateModalCount() {
  const count = _modalSelectedSet.size;
  const countEl = document.getElementById('modalSelectedCount');
  const saveBtn = document.getElementById('modalSaveBtn');
  if (countEl) countEl.textContent = `${count} subject${count !== 1 ? 's' : ''} selected`;
  if (saveBtn) saveBtn.disabled = count === 0;
}

function saveModalChanges() {
  const newIds = [..._modalSelectedSet];
  if (newIds.length === 0) return;

  const state = App.getState();

  // Preserve existing subject data buckets; create new ones for newly added subjects
  const subjects = { ...(state.subjects || {}) };
  newIds.forEach(id => {
    if (!subjects[id]) {
      subjects[id] = { questionHistory: {}, testHistory: [], studyMinutes: 0 };
    }
  });

  // If currently active subject is being removed, switch to first in new list
  const newActiveSubject = newIds.includes(state.activeSubject)
    ? state.activeSubject
    : newIds[0];

  App.updateState({ selectedSubjects: newIds, activeSubject: newActiveSubject, subjects });

  closeManageModal();

  // Re-init planner with the updated subject list
  _selectedSubjects = SubjectRegistry.getSelectedSubjectObjects(newIds);
  _activeTabId = newActiveSubject;
  if (_countdownInterval) clearInterval(_countdownInterval);
  renderTabs();
  renderPlannerContent(_activeTabId);
  renderAllExamsTable();
  startCountdownTick();
}

document.addEventListener('DOMContentLoaded', initPlanner);
