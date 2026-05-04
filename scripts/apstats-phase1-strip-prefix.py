#!/usr/bin/env python3
"""Phase 1: Strip embedded 'A) ', 'B) ', ... 'E) ' prefixes from choice strings.

AP Stats questions have 5 choices (A-E). The UI prepends letter labels via
String.fromCharCode(65+i), so the embedded data-side prefix causes double
labels like 'A) A) 76'. Strip the data side; UI continues to render its own.

Must run BEFORE phase2-rebalance so that swaps don't leave embedded letters
mismatched with new positions.

Usage: python3 apstats-phase1-strip-prefix.py [--dry-run]
"""
import json, re, sys
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'apstats_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'apstats_mcq.js',
]
PREFIX_RE = re.compile(r'^\s*[A-E]\)\s+')

def process(path):
    if not path.exists():
        print(f'  SKIP (not found): {path}'); return

    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    stripped = 0
    affected = 0
    for q in questions:
        had_change = False
        new_choices = []
        for c in q.get('choices', []):
            if isinstance(c, str) and PREFIX_RE.match(c):
                stripped += 1
                had_change = True
                new_choices.append(PREFIX_RE.sub('', c, count=1))
            else:
                new_choices.append(c)
        if had_change:
            affected += 1
            if not DRY_RUN:
                q['choices'] = new_choices

    print(f'  {"[DRY] " if DRY_RUN else ""}Stripped {stripped} prefixes across {affected} questions')

    if not DRY_RUN:
        for q in questions:
            assert len(q['choices']) == 5, f'{q.get("id")}: wrong choice count'
            for c in q['choices']:
                assert not PREFIX_RE.match(c), f'Prefix not stripped on {q.get("id")}: {c!r}'

        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
        print(f'  wrote {path.name}')

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')
