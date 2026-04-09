// AP Practice Results / Analytics Page

function loadAllQuestionsForActiveSubject() {
  if (typeof SubjectRegistry !== 'undefined' && typeof App !== 'undefined') {
    const subject = SubjectRegistry.getSubjectById(App.getActiveSubject());
    if (subject && subject.dataFiles) {
      const allQ = [];
      subject.dataFiles.forEach(varName => {
        const arr = window[varName];
        if (Array.isArray(arr)) allQ.push(...arr);
      });
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

function initResults() {
  const activeSubjectId = App.getActiveSubject();
  const subjectData = App.getSubjectData(activeSubjectId);
  const allQ = loadAllQuestionsForActiveSubject();

  // Get subject info for dynamic title and unit data
  const subject = typeof SubjectRegistry !== 'undefined'
    ? SubjectRegistry.getSubjectById(activeSubjectId)
    : null;
  const subjectUnits = subject ? subject.units : null;

  // Update page title to show active subject name
  const titleEl = document.querySelector('h1');
  if (titleEl && subject) titleEl.textContent = `Your ${subject.shortName} Progress`;

  renderOverallStats();
  renderUnitMastery(subjectData.questionHistory || {}, allQ, subjectUnits);
  renderDifficultyBreakdown(subjectData.questionHistory || {}, allQ);
  renderWeakTopics(subjectData.questionHistory || {}, allQ);
  renderTestHistory(subjectData.testHistory || []);

  const resetBtn = document.getElementById('resetProgressBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset ALL progress? This cannot be undone.')) {
        App.resetState();
        location.reload();
      }
    });
  }
}

function renderOverallStats() {
  const el = document.getElementById('overallStats');
  if (!el) return;
  const stats = App.getOverallStats();
  const lastTest = App.getLastTestScore();
  const apDisplay = (lastTest && lastTest.estimatedScore != null) ? `AP ${lastTest.estimatedScore}` : '—';
  el.innerHTML = `
    <div class="stat-card card"><div class="stat-num">${stats.totalAnswered}</div><div class="stat-lbl">Questions Answered</div></div>
    <div class="stat-card card"><div class="stat-num">${stats.accuracy}%</div><div class="stat-lbl">Accuracy</div></div>
    <div class="stat-card card"><div class="stat-num">${stats.testsTaken}</div><div class="stat-lbl">Tests Taken</div></div>
    <div class="stat-card card"><div class="stat-num">${apDisplay}</div><div class="stat-lbl">Last AP Estimate</div></div>`;
}

function renderUnitMastery(questionHistory, allQ, subjectUnits) {
  const el = document.getElementById('unitMastery');
  if (!el) return;
  const breakdown = Scoring.calculateUnitBreakdown(questionHistory, allQ, subjectUnits);
  Scoring.renderUnitBreakdown('unitMastery', breakdown);
}

function renderDifficultyBreakdown(questionHistory, allQ) {
  const breakdown = Scoring.calculateDifficultyBreakdown(questionHistory, allQ);
  Scoring.renderDifficultyBreakdown('difficultyBreakdown', breakdown);
}

function renderWeakTopics(questionHistory, allQ) {
  const topics = Scoring.getWeakestTopics(questionHistory, allQ, 5);
  Scoring.renderWeakTopics('weakTopics', topics);
}

function renderTestHistory(history) {
  Scoring.renderTestHistory('testHistory', history);
}

document.addEventListener('DOMContentLoaded', initResults);
