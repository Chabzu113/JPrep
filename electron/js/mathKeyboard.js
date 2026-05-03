// mathKeyboard.js — Math input toolbar for FRQ text editors
window.MathKeyboard = (function () {
  const MATH_SUBJECTS = ['apphyscem', 'apphys1', 'apcalcab', 'apcalcbc', 'apstats'];

  // Button definitions: [label, insertion, cursorOffset]
  // cursorOffset: how many chars from end of insertion to place cursor
  // (negative = move cursor left inside wrapper brackets)
  const BUTTONS = [
    { label: 'x²',      insert: '^2',           cursor: 0 },
    { label: 'x³',      insert: '^3',           cursor: 0 },
    { label: 'xⁿ',      insert: '^',            cursor: 0 },
    { label: 'x₀',      insert: '_0',           cursor: 0 },
    { label: 'd/dt',    insert: 'd/dt[{sel}]',  cursor: 1, wrap: true },
    { label: 'd²/dt²',  insert: 'd^2/dt^2[{sel}]', cursor: 1, wrap: true },
    { label: '∫',       insert: '∫[{sel}]dt',   cursor: 3, wrap: true },
    { label: '√',       insert: 'sqrt({sel})',  cursor: 1, wrap: true },
    { label: 'Δ',       insert: 'Δ',            cursor: 0 },
    { label: 'θ',       insert: 'θ',            cursor: 0 },
    { label: 'ω',       insert: 'ω',            cursor: 0 },
    { label: 'α',       insert: 'α',            cursor: 0 },
    { label: 'μ',       insert: 'μ',            cursor: 0 },
    { label: '→',       insert: '→',            cursor: 0 },
    { label: '∞',       insert: '∞',            cursor: 0 },
  ];

  function shouldShow(question) {
    return MATH_SUBJECTS.includes((question.subject || '').toLowerCase());
  }

  function renderToolbar(targetTextareaId) {
    const btnHtml = BUTTONS.map((btn, i) =>
      `<button class="math-keyboard-btn" data-target="${targetTextareaId}" data-idx="${i}" title="${btn.insert}" type="button">${btn.label}</button>`
    ).join('');
    return `<div class="math-keyboard-toolbar" data-for="${targetTextareaId}">
  <span class="math-keyboard-label">Math</span>
  <div class="math-keyboard-btn-row">${btnHtml}</div>
</div>`;
  }

  function insertAtCursor(textarea, btn) {
    const start = textarea.selectionStart;
    const end   = textarea.selectionEnd;
    const selected = textarea.value.slice(start, end);
    const val = textarea.value;

    let insertion;
    let cursorPos;

    if (btn.wrap) {
      // Replace {sel} placeholder with any selected text
      insertion = btn.insert.replace('{sel}', selected);
      // Place cursor inside the closing bracket/paren
      cursorPos = start + insertion.length - btn.cursor;
    } else {
      insertion = btn.insert;
      cursorPos = start + insertion.length;
    }

    textarea.value = val.slice(0, start) + insertion + val.slice(end);
    textarea.selectionStart = cursorPos;
    textarea.selectionEnd   = cursorPos;
    textarea.focus();

    // Trigger input event so any listeners know the value changed
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function wireToolbar(container) {
    container.querySelectorAll('.math-keyboard-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = this.dataset.target;
        const idx      = parseInt(this.dataset.idx, 10);
        const textarea = document.getElementById(targetId);
        if (!textarea) return;
        insertAtCursor(textarea, BUTTONS[idx]);
      });
    });
  }

  return { shouldShow, renderToolbar, wireToolbar };
})();
