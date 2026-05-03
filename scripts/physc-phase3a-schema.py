#!/usr/bin/env python3
"""Phase 3a: Schema harmonization for Physics C question bank.

96 questions are missing topicLabel, calculator, isLatex, format.
723 questions are missing the type field.
Auto-fix without touching content:
  - type = 'MCQ' for all
  - topicLabel = topic (mirror)
  - calculator = False (Physics C MCQ section is no-calc historically; College Board
                       updated this — but uniform value matches the existing 723)
  - isLatex = True if question/choices/explanation contain LaTeX delimiters
  - format = 'latex' if isLatex else 'text'

Usage: python3 physc-phase3a-schema.py [--dry-run]
"""
import json, re, sys
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'physc_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physc_mcq.js',
]

LATEX_RE = re.compile(r'\$[^$]+\$|\\frac|\\sqrt|\\vec|\\hat|\\sum|\\int|\\Delta|\\omega|\\theta|\\alpha|\\beta|\\mu|\\rho|\\pi|\\text\{')

def detect_latex(q):
    blob = q.get('question', '') + ' '.join(q.get('choices', [])) + q.get('explanation', '')
    return bool(LATEX_RE.search(blob))

def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    added = {'type': 0, 'topicLabel': 0, 'calculator': 0, 'isLatex': 0, 'format': 0}
    flipped_latex = 0

    for q in questions:
        latex = detect_latex(q)
        if 'type' not in q:
            added['type'] += 1
            q['type'] = 'MCQ'
        if 'topicLabel' not in q:
            added['topicLabel'] += 1
            q['topicLabel'] = q.get('topic', '')
        if 'calculator' not in q:
            added['calculator'] += 1
            q['calculator'] = False
        if 'isLatex' not in q:
            added['isLatex'] += 1
            q['isLatex'] = latex
            if latex: flipped_latex += 1
        if 'format' not in q:
            added['format'] += 1
            q['format'] = 'latex' if latex else 'text'

    print(f'  {"[DRY] " if DRY_RUN else ""}Fields added: {added}')
    print(f'  Of {added["isLatex"]} new isLatex flags, {flipped_latex} are True')

    # ── Guardrails ───────────────────────────────────────────────────────────
    REQUIRED = ['id','subject','unit','topic','difficulty','question','choices',
                'answer','explanation','topicLabel','calculator','isLatex','format','type']
    missing = []
    for q in questions:
        for f in REQUIRED:
            if f not in q:
                missing.append((q.get('id'), f))
    assert not missing, f'Missing fields after fix: {missing[:10]}'

    if not DRY_RUN:
        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
        print(f'  wrote {path.name}')

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')
