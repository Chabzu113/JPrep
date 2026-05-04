#!/usr/bin/env python3
"""Phase 2: Rebalance correct-answer position to ~20/20/20/20/20 per unit.

AP Stats has 5 choices (A-E), so target is 1/5 per position.
Strategy: minimum-swap. For each unit bucket, move questions from surplus
positions to deficit positions via choice-pair swap.

Each swap:
  1. Swap two entries in the choices array (correct ↔ deficit-position choice).
  2. Update q['answer'] to the new index.
  3. Bidirectionally swap letter references in question/explanation text.

Run apstats-phase1-strip-prefix.py FIRST to remove embedded prefixes.

Usage: python3 apstats-phase2-rebalance.py [--dry-run]
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
LETTERS = ['A', 'B', 'C', 'D', 'E']
N_CHOICES = 5

PATTERNS = [
    re.compile(r'(\bChoice\s+)([A-E])\b'),
    re.compile(r'(\bchoice\s+)([A-E])\b'),
    re.compile(r'(\bOption\s+)([A-E])\b'),
    re.compile(r'(\boption\s+)([A-E])\b'),
    re.compile(r'(\bAnswer\s+)([A-E])\b'),
    re.compile(r'(\banswer\s+)([A-E])\b'),
    re.compile(r'(\()([A-E])(\))'),
    re.compile(r'(\b)([A-E])(\))'),
]

def swap_letters_in_text(text, mapping):
    if not text: return text
    def make_repl(n_groups):
        def repl(m):
            letter = m.group(2)
            new = mapping.get(letter, letter)
            return m.group(1) + new if n_groups == 2 else m.group(1) + new + m.group(3)
        return repl
    for pat in PATTERNS:
        text = pat.sub(make_repl(pat.groups), text)
    return text

def swap_question(q, src, dst):
    assert q['answer'] == src
    q['choices'][src], q['choices'][dst] = q['choices'][dst], q['choices'][src]
    q['answer'] = dst
    mapping = {LETTERS[src]: LETTERS[dst], LETTERS[dst]: LETTERS[src]}
    q['explanation'] = swap_letters_in_text(q.get('explanation', ''), mapping)
    q['question']    = swap_letters_in_text(q.get('question', ''), mapping)

def plan_unit(qs_in_unit):
    n = len(qs_in_unit)
    target = n // N_CHOICES
    counts = Counter(q['answer'] for q in qs_in_unit)
    surplus = sorted(((p, counts[p] - target) for p in range(N_CHOICES) if counts[p] > target + 1),
                     key=lambda x: -x[1])
    deficit = sorted(((p, target - counts[p]) for p in range(N_CHOICES) if counts[p] < target - 1),
                     key=lambda x: -x[1])
    swaps = []
    deficit = [list(x) for x in deficit]
    for src, n_src in surplus:
        candidates = [q for q in qs_in_unit if q['answer'] == src]
        idx = 0
        remaining = n_src
        while remaining > 0 and deficit:
            dst, n_dst = deficit[0]
            k = min(remaining, n_dst)
            for _ in range(k):
                if idx >= len(candidates): break
                swaps.append((candidates[idx], src, dst))
                idx += 1
                remaining -= 1
                deficit[0][1] -= 1
            if deficit[0][1] <= 0:
                deficit.pop(0)
    return swaps

def process(path):
    if not path.exists():
        print(f'  SKIP (not found): {path}'); return

    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    buckets = {}
    for q in questions:
        key = (q.get('subject'), q.get('unit'))
        buckets.setdefault(key, []).append(q)

    all_swaps = []
    for key in sorted(buckets):
        unit_qs = buckets[key]
        plan = plan_unit(unit_qs)
        all_swaps.extend(plan)
        before = Counter(q['answer'] for q in unit_qs)
        proj = Counter(before)
        for q, src, dst in plan:
            proj[src] -= 1
            proj[dst] += 1
        n = len(unit_qs)
        bef = ' '.join(f'{LETTERS[i]}={before[i]:2d}' for i in range(N_CHOICES))
        aft = ' '.join(f'{LETTERS[i]}={proj[i]:2d}' for i in range(N_CHOICES))
        print(f'  {key}: n={n:3d}  before [{bef}]  after [{aft}]  swaps={len(plan)}')

    print(f'\n  {"[DRY] " if DRY_RUN else ""}Total swaps: {len(all_swaps)}')

    if not DRY_RUN:
        for q, src, dst in all_swaps:
            swap_question(q, src, dst)

        for q in questions:
            assert len(q['choices']) == N_CHOICES, f'{q.get("id")}: bad choice count'
            assert q['answer'] in range(N_CHOICES), f'{q.get("id")}: bad answer index'

        total = Counter()
        for key, qs in buckets.items():
            c = Counter(q['answer'] for q in qs)
            n = len(qs)
            for p in range(N_CHOICES):
                total[p] += c[p]
                assert c[p] >= max(2, n // N_CHOICES - n // 4), \
                    f'{key} pos {p} too low: {c[p]} of {n}'
        print(f'  Global final: {dict(sorted(total.items()))}')

        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
        print(f'  wrote {path.name}')

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')
