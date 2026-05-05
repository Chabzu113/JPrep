#!/usr/bin/env python3
"""AP Gov fix: rebalance answer distribution + add type:'MCQ'.

Strategy:
  - Strip embedded 'X) ' prefixes from choice strings.
  - Rotate choices so the correct answer lands at a target index (cycling
    0→1→2→3→0…) to achieve ~25% distribution for each answer position.
  - Re-apply A)/B)/C)/D) prefixes after rotation.
  - Add type:'MCQ' to every question.
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'apgov_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'apgov_mcq.js',
]

PREFIX_RE = re.compile(r'^\s*[A-D]\)\s*')
LABELS = ['A) ', 'B) ', 'C) ', 'D) ']


def strip_prefix(s):
    return PREFIX_RE.sub('', s) if isinstance(s, str) else s


def process(path):
    if not path.exists():
        print(f'  SKIP: {path}'); return

    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'  ERROR parsing {path}'); return

    questions = json.loads(m.group(1))
    rebalanced = type_added = 0

    for i, q in enumerate(questions):
        # Add type
        if 'type' not in q:
            q['type'] = 'MCQ'
            type_added += 1

        choices = q.get('choices', [])
        answer  = q.get('answer')
        if not choices or answer is None or len(choices) != 4:
            continue

        # Strip existing prefixes
        bare = [strip_prefix(c) for c in choices]

        # Target index cycles 0→1→2→3 across all questions
        target = i % 4

        if answer == target:
            # Already at target; just rewrite with clean prefixes
            q['choices'] = [LABELS[j] + bare[j] for j in range(4)]
            continue

        # Rotate bare list so correct answer moves to target position.
        # Build new order: put correct answer at target, fill remaining
        # slots with wrong answers in original relative order.
        correct_text = bare[answer]
        wrongs = [bare[j] for j in range(4) if j != answer]

        # wrong slots = all indices except target, in order
        wrong_slots = [j for j in range(4) if j != target]
        new_bare = [''] * 4
        new_bare[target] = correct_text
        for slot, wrong in zip(wrong_slots, wrongs):
            new_bare[slot] = wrong

        q['choices'] = [LABELS[j] + new_bare[j] for j in range(4)]
        q['answer']  = target
        rebalanced  += 1

    from collections import Counter
    dist = dict(sorted(Counter(q['answer'] for q in questions).items()))
    vals = list(dist.values())
    skew = max(vals) / min(vals) if min(vals) > 0 else float('inf')
    print(f'  rebalanced: {rebalanced}  |  type added: {type_added}')
    print(f'  answer dist: {dist}  skew={skew:.2f}x')

    path.write_text(
        text[:m.start(1)]
        + json.dumps(questions, indent=2, ensure_ascii=False)
        + text[m.end(1):]
    )
    print(f'  wrote {path.name}')


print('=== AP Gov fix: rebalance + type ===')
for t in TARGETS:
    print(f'\n{t}:')
    process(t)
print('\nDone.')
