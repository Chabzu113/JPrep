// Home page logic — subject cards, stats banner, redirect guard
// Loaded as an external script from index.html to satisfy CSP (no inline scripts).

// ── Redirect guard: if subjects not configured, send to subject-select ──
(function() {
  try {
    var s = JSON.parse(localStorage.getItem('apcsa_state') || '{}');
    if (!s.subjectsConfigured) { window.location.replace('subject-select.html'); }
  } catch(e) {}
})();

// Returns total question count for a subject by summing all its dataFile arrays
function getTotalQuestions(subj) {
  return (subj.dataFiles || []).reduce(function(n, f) {
    return n + ((window[f] || []).length);
  }, 0);
}

// Renders the blue stats banner with live-computed totals
function renderStatsBanner() {
  var state = App.getState();
  var selected = SubjectRegistry.getSelectedSubjectObjects(state.selectedSubjects || ['apcsa']);
  var totalQ = 0, totalU = 0;
  selected.forEach(function(s) {
    if (s.hasContent) {
      totalQ += getTotalQuestions(s);
      totalU += (s.units || []).length;
    }
  });
  var el = document.getElementById('statsBannerGrid');
  if (!el) return;
  el.innerHTML =
    '<div><div class="stat-num-lg">' + totalQ + '+</div><div class="stat-lbl-sm">Practice Questions</div></div>' +
    '<div><div class="stat-num-lg">' + totalU + '</div><div class="stat-lbl-sm">AP Units Covered</div></div>' +
    '<div><div class="stat-num-lg">📊</div><div class="stat-lbl-sm">Graphing Calculator</div></div>' +
    '<div><div class="stat-num-lg">✓</div><div class="stat-lbl-sm">FRQ with Rubrics</div></div>';
}

// Builds one subject card HTML string
function buildSubjectCard(subj) {
  if (!subj.hasContent) {
    return '<div class="card subject-card subject-card--soon">' +
      '<div class="subject-card-top">' +
        '<span class="subject-card-emoji">' + subj.emoji + '</span>' +
        '<div><div class="subject-card-name">' + subj.name + '</div>' +
        '<span class="soon-badge">Coming Soon</span></div>' +
      '</div>' +
      '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:14px">Questions and tests for this subject are in development.</p>' +
      '<a href="planner.html" class="btn btn-secondary btn-sm">📅 Study Planner</a>' +
    '</div>';
  }

  var stats = App.getSubjectOverallStats(subj.id);
  var total = getTotalQuestions(subj);
  var days = SubjectRegistry.daysUntilExam(subj);
  var pct = total > 0 ? Math.min(100, Math.round(stats.totalAnswered / total * 100)) : 0;
  var examMeta = days > 0
    ? days + ' days until exam'
    : (days === 0 ? 'Exam is today!' : 'Exam passed');

  return '<div class="card subject-card" style="border-top:3px solid ' + subj.color + '">' +
    '<div class="subject-card-top">' +
      '<span class="subject-card-emoji">' + subj.emoji + '</span>' +
      '<div style="min-width:0;flex:1">' +
        '<div class="subject-card-name">' + subj.name + '</div>' +
        '<div class="subject-card-meta">' + examMeta + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="subject-card-stats">' +
      '<span>' + stats.totalAnswered + ' answered · ' + stats.accuracy + '% accuracy</span>' +
      '<div class="subject-card-bar">' +
        '<div style="width:' + pct + '%;background:' + subj.color + '"></div>' +
      '</div>' +
      '<span class="subject-card-total">' + total + ' questions · ' + (subj.units || []).length + ' units</span>' +
    '</div>' +
    '<div class="subject-card-actions">' +
      '<a href="question-bank.html" data-subj="' + subj.id + '" class="btn btn-primary btn-sm">Study ▶</a>' +
      '<a href="practice-test.html" data-subj="' + subj.id + '" class="btn btn-secondary btn-sm">Test</a>' +
      '<a href="results.html" data-subj="' + subj.id + '" class="btn btn-secondary btn-sm">Progress</a>' +
    '</div>' +
  '</div>';
}

// Renders all enrolled subject cards into #subjectCardsGrid
function renderSubjectCards() {
  var state = App.getState();
  var selected = SubjectRegistry.getSelectedSubjectObjects(state.selectedSubjects || ['apcsa']);
  var grid = document.getElementById('subjectCardsGrid');
  if (!grid) return;
  if (!selected || selected.length === 0) {
    grid.innerHTML = '<div class="card" style="text-align:center;padding:32px;color:var(--text-muted)">No subjects selected. <a href="subject-select.html">Add subjects →</a></div>';
    return;
  }
  grid.innerHTML = selected.map(buildSubjectCard).join('');
}

document.addEventListener('DOMContentLoaded', function() {
  renderStatsBanner();
  renderSubjectCards();
  // Event delegation for subject card nav links — sets active subject before navigating
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[data-subj]');
    if (link) App.setActiveSubject(link.dataset.subj);
  });
});
