// AP Practice — Subject Selection Page

const selectedSet = new Set();

function initSubjectSelect() {
  const state = App.getState();

  // Pre-select any already-saved subjects so returning users see their current picks
  (state.selectedSubjects || []).forEach(id => selectedSet.add(id));

  renderSubjectGrid();
  updateConfirmButton();
  wireEvents();
}

function renderSubjectGrid() {
  const container = document.getElementById('subjectGrid');
  if (!container) return;

  container.innerHTML = SubjectRegistry.SUBJECTS.map(subject => {
    const days = SubjectRegistry.daysUntilExam(subject);
    const examStr = SubjectRegistry.formatExamDate(subject);
    const daysLabel = days > 0 ? `${days} day${days !== 1 ? 's' : ''} away` : 'Exam passed';
    const isSelected = selectedSet.has(subject.id);

    return `
      <div class="subject-card card ${isSelected ? 'selected' : ''}"
           data-id="${subject.id}"
           style="border-left-color:${subject.color};--subject-color:${subject.color}">
        <div class="subject-card-checkmark">✓</div>
        <div class="subject-card-top">
          <span class="subject-card-emoji">${subject.emoji}</span>
          <span class="subject-card-name">${subject.name}</span>
        </div>
        <div class="subject-card-desc">${subject.description}</div>
        <div class="subject-card-exam">📅 ${examStr} · ${daysLabel}</div>
        <div class="subject-card-badges">
          ${subject.hasContent ? '<span class="badge badge-content">✓ Questions Available</span>' : ''}
        </div>
      </div>`;
  }).join('');
}

function wireEvents() {
  const grid = document.getElementById('subjectGrid');
  if (grid) {
    grid.addEventListener('click', e => {
      const card = e.target.closest('.subject-card');
      if (!card) return;
      const id = card.dataset.id;
      if (selectedSet.has(id)) {
        selectedSet.delete(id);
        card.classList.remove('selected');
      } else {
        selectedSet.add(id);
        card.classList.add('selected');
      }
      updateConfirmButton();
    });
  }

  const confirmBtn = document.getElementById('confirmBtn');
  if (confirmBtn) confirmBtn.addEventListener('click', confirmSelection);
}

function updateConfirmButton() {
  const confirmBtn = document.getElementById('confirmBtn');
  const countEl = document.getElementById('selectedCount');
  const n = selectedSet.size;

  if (countEl) {
    countEl.innerHTML = n === 0
      ? 'No subjects selected'
      : `<strong>${n}</strong> subject${n !== 1 ? 's' : ''} selected`;
  }

  if (confirmBtn) {
    confirmBtn.disabled = n === 0;
    confirmBtn.textContent = n === 0
      ? 'Select a subject to start →'
      : `Start Studying ${n} Subject${n !== 1 ? 's' : ''} →`;
  }
}

function confirmSelection() {
  if (selectedSet.size === 0) return;

  const ids = [...selectedSet];
  const state = App.getState();

  // Build per-subject buckets, preserving any existing data
  const subjects = { ...(state.subjects || {}) };
  ids.forEach(id => {
    if (!subjects[id]) {
      subjects[id] = { questionHistory: {}, testHistory: [], studyMinutes: 0 };
    }
  });

  // Keep current active subject if it's still selected, otherwise use first in list
  const activeSubject = ids.includes(state.activeSubject) ? state.activeSubject : ids[0];

  App.updateState({
    selectedSubjects: ids,
    subjectsConfigured: true,
    activeSubject,
    subjects
  });

  App.navigateTo('index.html');
}

document.addEventListener('DOMContentLoaded', initSubjectSelect);
