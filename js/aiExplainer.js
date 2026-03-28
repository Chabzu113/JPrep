// AI Explainer — streams Claude explanations for wrong answers
// Attaches to window.AIExplainer (no imports, no modules)

(function () {
  const STORAGE_KEY = 'jprep_api_key';

  // ── API Key Management ────────────────────────────────────────────────────

  function getKey() {
    return localStorage.getItem(STORAGE_KEY) || '';
  }

  function setKey(key) {
    localStorage.setItem(STORAGE_KEY, key.trim());
  }

  function hasKey() {
    return !!getKey();
  }

  // ── Settings Modal ────────────────────────────────────────────────────────

  function openSettings() {
    // Remove any existing modal
    const existing = document.getElementById('ai-explainer-modal-overlay');
    if (existing) existing.remove();

    const alreadyHasKey = hasKey();

    const overlay = document.createElement('div');
    overlay.id = 'ai-explainer-modal-overlay';
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:9999',
      'display:flex', 'align-items:center', 'justify-content:center',
      'background:rgba(0,0,0,0.6)', 'padding:16px'
    ].join(';');

    const modal = document.createElement('div');
    modal.style.cssText = [
      'background:var(--bg-card,#1e2130)',
      'border:1px solid var(--border-color,#2e3347)',
      'border-radius:12px',
      'padding:28px 28px 24px',
      'width:100%',
      'max-width:420px',
      'box-sizing:border-box',
      'font-family:inherit',
      'color:var(--text-primary,#e2e8f0)'
    ].join(';');

    const title = document.createElement('h2');
    title.textContent = alreadyHasKey ? 'AI Explainer Settings' : 'Enable AI Answer Explanations';
    title.style.cssText = 'margin:0 0 12px;font-size:1.15rem;font-weight:600;';

    const body = document.createElement('p');
    body.style.cssText = 'margin:0 0 16px;font-size:0.9rem;line-height:1.5;color:var(--text-primary,#e2e8f0);opacity:0.85;';

    if (alreadyHasKey) {
      body.textContent = 'Your API key is saved. You can update it below.';
    } else {
      body.textContent =
        'JPrep can explain why you got a question wrong using Claude AI. ' +
        'You\u2019ll need your own Anthropic API key \u2014 each explanation ' +
        'costs a fraction of a cent and is billed to your account.';
    }

    const input = document.createElement('input');
    input.type = 'password';
    input.placeholder = 'Paste your API key here (sk-ant-...)';
    input.value = alreadyHasKey ? getKey() : '';
    input.style.cssText = [
      'width:100%',
      'box-sizing:border-box',
      'padding:10px 12px',
      'border-radius:8px',
      'border:1px solid var(--border-color,#2e3347)',
      'background:var(--bg-secondary,#151827)',
      'color:var(--text-primary,#e2e8f0)',
      'font-size:0.875rem',
      'outline:none',
      'margin-bottom:8px'
    ].join(';');

    input.addEventListener('focus', function () {
      input.style.borderColor = '#3B82F6';
    });
    input.addEventListener('blur', function () {
      input.style.borderColor = 'var(--border-color,#2e3347)';
    });

    const btnRow = document.createElement('div');
    btnRow.style.cssText = 'display:flex;gap:10px;justify-content:flex-end;margin-top:16px;';

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.cssText = [
      'padding:9px 18px',
      'border-radius:8px',
      'border:1px solid var(--border-color,#2e3347)',
      'background:transparent',
      'color:var(--text-primary,#e2e8f0)',
      'font-size:0.875rem',
      'cursor:pointer'
    ].join(';');

    const saveBtn = document.createElement('button');
    saveBtn.textContent = alreadyHasKey ? 'Save' : 'Save & Enable';
    saveBtn.style.cssText = [
      'padding:9px 18px',
      'border-radius:8px',
      'border:none',
      'background:#3B82F6',
      'color:#fff',
      'font-size:0.875rem',
      'font-weight:600',
      'cursor:pointer'
    ].join(';');

    function closeModal() {
      overlay.remove();
    }

    cancelBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    saveBtn.addEventListener('click', function () {
      const val = input.value.trim();
      if (val) {
        setKey(val);
      }
      closeModal();
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') saveBtn.click();
      if (e.key === 'Escape') closeModal();
    });

    btnRow.appendChild(cancelBtn);
    btnRow.appendChild(saveBtn);

    modal.appendChild(title);
    modal.appendChild(body);

    if (!alreadyHasKey) {
      const link = document.createElement('a');
      link.href = 'https://console.anthropic.com';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Get a free API key at console.anthropic.com';
      link.style.cssText = [
        'display:inline-block',
        'margin-bottom:16px',
        'font-size:0.85rem',
        'color:#3B82F6',
        'text-decoration:none'
      ].join(';');
      link.addEventListener('mouseover', function () { link.style.textDecoration = 'underline'; });
      link.addEventListener('mouseout', function () { link.style.textDecoration = 'none'; });
      modal.appendChild(link);
    }

    modal.appendChild(input);
    modal.appendChild(btnRow);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Focus input after paint
    requestAnimationFrame(function () { input.focus(); });
  }

  // ── Explain ───────────────────────────────────────────────────────────────

  function letterFor(index) {
    return String.fromCharCode(65 + index); // 0→A, 1→B, …
  }

  function buildPrompt(q, selectedIndex) {
    const choiceLines = q.choices.map(function (c, i) {
      return letterFor(i) + ') ' + c;
    }).join('\n');

    return (
      'The student answered an AP ' + q.subject + ' question incorrectly.\n\n' +
      'Topic: ' + q.topic + '\n' +
      'Question: ' + q.question + '\n\n' +
      'Answer choices:\n' + choiceLines + '\n\n' +
      'Student selected: ' + letterFor(selectedIndex) + ') ' + q.choices[selectedIndex] + '\n' +
      'Correct answer: ' + letterFor(q.answer) + ') ' + q.choices[q.answer] + '\n' +
      'Answer key: ' + q.explanation + '\n\n' +
      'In 3\u20134 sentences: explain why the correct answer is right and why the student\u2019s choice is wrong. Be direct.'
    );
  }

  async function explain(q, selectedIndex, containerEl) {
    if (!hasKey()) {
      openSettings();
      return;
    }

    containerEl.textContent = '\u2756 Thinking\u2026';

    const requestBody = {
      model: 'claude-sonnet-4-6',
      max_tokens: 600,
      stream: true,
      system: 'You are a concise AP exam tutor. Explain answers clearly and directly. No filler.',
      messages: [
        { role: 'user', content: buildPrompt(q, selectedIndex) }
      ]
    };

    let response;
    try {
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': getKey(),
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify(requestBody)
      });
    } catch (err) {
      containerEl.textContent = 'Network error: ' + (err.message || 'Could not reach the API.');
      return;
    }

    if (!response.ok) {
      if (response.status === 400) {
        const body = await response.text();
        console.log('Anthropic 400 response body:', body);
        containerEl.textContent = 'API 400 error: ' + body;
      } else if (response.status === 401) {
        containerEl.textContent = 'Invalid API key \u2014 click \u2756 AI to update it.';
      } else {
        containerEl.textContent = 'API error (' + response.status + '). Please try again.';
      }
      return;
    }

    // Stream the SSE response
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let accumulated = '';
    let streamedText = '';
    containerEl.textContent = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      accumulated += decoder.decode(value, { stream: true });
      const lines = accumulated.split('\n');
      // Keep the last (possibly incomplete) line in the buffer
      accumulated = lines.pop();

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line.startsWith('data: ')) continue;
        const jsonStr = line.slice(6).trim();
        if (jsonStr === '[DONE]') continue;
        let event;
        try {
          event = JSON.parse(jsonStr);
        } catch (_) {
          continue;
        }
        if (event.type === 'content_block_delta' && event.delta && event.delta.text) {
          streamedText += event.delta.text;
          containerEl.textContent = streamedText;
        }
      }
    }

    // Flush any remaining buffer
    if (accumulated.trim().startsWith('data: ')) {
      const jsonStr = accumulated.trim().slice(6).trim();
      if (jsonStr && jsonStr !== '[DONE]') {
        try {
          const event = JSON.parse(jsonStr);
          if (event.type === 'content_block_delta' && event.delta && event.delta.text) {
            streamedText += event.delta.text;
          }
        } catch (_) {}
      }
    }

    // Render markdown after streaming completes
    containerEl.innerHTML = streamedText
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }

  // ── Export ────────────────────────────────────────────────────────────────

  window.AIExplainer = {
    getKey: getKey,
    setKey: setKey,
    hasKey: hasKey,
    openSettings: openSettings,
    explain: explain
  };
})();
