#!/usr/bin/env python3
"""Phase 1: Convert AP Stats from 5-choice (A-E) to 4-choice (A-D).

Steps per question:
  1. Strip embedded 'X) ' prefixes from all choice strings.
  2. Trim to 4 choices while preserving the correct answer:
       - answer in 0-3: drop choice at index 4 (last wrong choice).
       - answer == 4:   drop choice at index 3 (old D becomes the dropped
                        wrong choice; old E slides to index 3 as new D).
  3. Update answer index if it shifted (answer 4 → 3).

Then run apstats-phase2-rebalance.py to distribute answers evenly.

Usage: python3 apstats-phase1-fix4choice.py [--dry-run]
"""
import json, re, sys
from collections import Counter
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'apstats_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'apstats_mcq.js',
]
PREFIX_RE = re.compile(r'^\s*[A-E]\)\s+')

def strip_prefix(s):
    return PREFIX_RE.sub('', s, count=1) if isinstance(s, str) else s

def process(path):
    if not path.exists():
        print(f'  SKIP (not found): {path}'); return

    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    stripped_prefixes = 0
    trimmed = 0
    ans4_fixed = 0

    for q in questions:
        choices = q.get('choices', [])
        answer  = q.get('answer')

        # 1. Strip embedded prefixes
        new_choices = [strip_prefix(c) for c in choices]
        stripped_prefixes += sum(1 for o, n in zip(choices, new_choices) if o != n)

        # 2. Trim 5 → 4
        if len(new_choices) == 5:
            if answer == 4:
                # correct is at index 4 — drop index 3 (wrong), correct slides to 3
                new_choices = new_choices[:3] + [new_choices[4]]
                new_answer  = 3
                ans4_fixed += 1
            else:
                # correct is at 0-3 — just drop index 4
                new_choices = new_choices[:4]
                new_answer  = answer
            trimmed += 1
        else:
            new_choices = new_choices
            new_answer  = answer

        if not DRY_RUN:
            q['choices'] = new_choices
            q['answer']  = new_answer

    print(f'  {"[DRY] " if DRY_RUN else ""}Stripped {stripped_prefixes} prefixes, '
          f'trimmed {trimmed} questions to 4 choices '
          f'({ans4_fixed} had answer=4 and were adjusted)')

    ans_after = Counter(
        (3 if q.get('answer') == 4 else q.get('answer'))
        if len(q.get('choices', [])) == 5 and q.get('answer') == 4
        else q.get('answer')
        for q in questions
    )
    print(f'  Answer dist after trim (projected): {dict(sorted(ans_after.items()))}')

    if not DRY_RUN:
        for q in questions:
            assert len(q['choices']) == 4, f'{q.get("id")}: wrong choice count {len(q["choices"])}'
            assert q['answer'] in (0,1,2,3), f'{q.get("id")}: bad answer {q["answer"]}'
            for c in q['choices']:
                assert not PREFIX_RE.match(c), f'{q.get("id")}: prefix not stripped: {c!r}'

        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
        print(f'  wrote {path.name}')

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')
