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

  container.innerHTML = `
    <div class="planner-grid">
      <div class="planner-left">
        ${buildCountdownCard(subject, days)}
        ${buildProgressCard(subjectId, subject)}
      </div>
      <div class="planner-right">
        ${buildPhaseCard(phase, days, subject)}
        ${buildScheduleGrid(phase, subject)}
      </div>
    </div>
  `;
}

// ─── Countdown Card ───────────────────────────────────────────────────────────
function buildCountdownCard(subject, days) {
  const examDateStr = SubjectRegistry.formatExamDate(subject);

  if (days <= 0) {
    return `
      <div class="card countdown-card" style="border-top-color:${subject.color}">
        <div class="countdown-days-number" style="color:${subject.color}">🎓</div>
        <div class="countdown-past">Exam Passed</div>
        <div class="countdown-exam-date">${examDateStr}</div>
      </div>`;
  }

  return `
    <div class="card countdown-card" style="border-top-color:${subject.color}">
      <div class="countdown-days-number" style="color:${subject.color}">${days}</div>
      <div class="countdown-days-label">Days Until Exam</div>
      <div class="countdown-exam-date">${examDateStr}</div>
      <div class="countdown-clock" id="countdownClock">loading...</div>
    </div>`;
}

// ─── Phase Card ───────────────────────────────────────────────────────────────
function buildPhaseCard(phase, days, subject) {
  const content = PHASE_CONTENT[phase.phase] || PHASE_CONTENT.foundations;

  const actionButtons = subject.hasContent ? `
    <a href="question-bank.html" class="btn btn-primary btn-sm">📚 Question Bank</a>
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

// ─── Schedule Grid ────────────────────────────────────────────────────────────
function buildScheduleGrid(phase, subject) {
  const content = PHASE_CONTENT[phase.phase] || PHASE_CONTENT.foundations;
  const weekLabels = ['This Week', 'Next Week', 'Week After'];

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

  return `
    <div class="schedule-grid">
      ${content.weeks.map((tasks, i) => `
        <div class="card schedule-week-card">
          <div class="schedule-week-label">${weekLabels[i] || `Week ${i + 1}`}</div>
          <ul class="schedule-task-list">
            ${tasks.map(t => `<li>${App.escapeHtml(t)}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>`;
}

// ─── Progress Card ────────────────────────────────────────────────────────────
function buildProgressCard(subjectId, subject) {
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

  return `
    <div class="card progress-card">
      <h3>📈 Your Progress
        <span style="float:right;font-size:0.8rem;font-weight:400;color:var(--text-muted)">${overall.totalAnswered} answered · ${overall.accuracy}% accuracy</span>
      </h3>
      ${unitsHtml}
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
