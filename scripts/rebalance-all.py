#!/usr/bin/env python3
"""Rebalance all MCQ subjects: strip embedded prefixes, enforce choice count, rebalance answers.

Per-subject config:
  - n_choices: enforced choice count (4 or 5)
  - AP Macro + Micro: 5-choice (A-E), target ~20% each
  - Everything else:  4-choice (A-D), target ~25% each

Steps per file:
  1. Delete questions with no choices (empty placeholders).
  2. Strip embedded 'A) '/'B) '/... prefixes from choice strings.
  3. Trim to n_choices if question has more (drop last wrong choice;
     if correct answer is at the dropped position, swap it to n_choices-1 first).
  4. Rebalance correct-answer positions per unit via minimum-swap.
     Bidirectionally updates letter refs (Choice A/B/...) in explanations.

Usage: python3 rebalance-all.py [--dry-run]
"""
import json, re, sys
from collections import Counter
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent

SUBJECTS = [
    # (filename,               n_choices)
    ('apbio_mcq.js',           4),
    ('apcalc_mcq.js',          4),
    ('apcalcbc_mcq.js',        4),
    ('apcsa_mcq.js',           4),
    ('apenviro_mcq.js',        4),
    ('apgov_mcq.js',           4),
    ('apmacro_mcq.js',         5),
    ('apmicro_mcq.js',         5),
    ('apush_mcq.js',           4),
    ('physics_mcq.js',         4),
]

COPIES = ['js/data', 'electron/js/data']

PREFIX_RE = re.compile(r'^\s*[A-E]\)\s+')

def make_patterns(n):
    letters = '[A-D]' if n == 4 else '[A-E]'
    return [
        re.compile(r'(\bChoice\s+)(' + letters + r')\b'),
        re.compile(r'(\bchoice\s+)(' + letters + r')\b'),
        re.compile(r'(\bOption\s+)(' + letters + r')\b'),
        re.compile(r'(\boption\s+)(' + letters + r')\b'),
        re.compile(r'(\bAnswer\s+)(' + letters + r')\b'),
        re.compile(r'(\banswer\s+)(' + letters + r')\b'),
        re.compile(r'(\()(' + letters + r')(\))'),
        re.compile(r'(\b)(' + letters + r')(\))'),
    ]

LETTERS = 'ABCDE'

def swap_letters_in_text(text, mapping, patterns):
    if not text: return text
    def make_repl(n_groups):
        def repl(m):
            new = mapping.get(m.group(2), m.group(2))
            return m.group(1) + new if n_groups == 2 else m.group(1) + new + m.group(3)
        return repl
    for pat in patterns:
        text = pat.sub(make_repl(pat.groups), text)
    return text

def swap_question(q, src, dst, patterns):
    q['choices'][src], q['choices'][dst] = q['choices'][dst], q['choices'][src]
    q['answer'] = dst
    mapping = {LETTERS[src]: LETTERS[dst], LETTERS[dst]: LETTERS[src]}
    q['explanation'] = swap_letters_in_text(q.get('explanation', ''), mapping, patterns)
    q['question']    = swap_letters_in_text(q.get('question', ''), mapping, patterns)

def plan_unit(qs_in_unit, n):
    target = len(qs_in_unit) // n
    counts = Counter(q['answer'] for q in qs_in_unit)
    surplus = sorted(((p, counts[p] - target) for p in range(n) if counts[p] > target + 1), key=lambda x: -x[1])
    deficit = [list(x) for x in sorted(((p, target - counts[p]) for p in range(n) if counts[p] < target - 1), key=lambda x: -x[1])]
    swaps = []
    for src, n_src in surplus:
        candidates = [q for q in qs_in_unit if q['answer'] == src]
        idx, remaining = 0, n_src
        while remaining > 0 and deficit:
            dst, n_dst = deficit[0]
            k = min(remaining, n_dst)
            for _ in range(k):
                if idx >= len(candidates): break
                swaps.append((candidates[idx], src, dst))
                idx += 1; remaining -= 1; deficit[0][1] -= 1
            if deficit[0][1] <= 0:
                deficit.pop(0)
    return swaps

def process(path, n_choices):
    if not path.exists():
        print(f'  SKIP (not found): {path}'); return

    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'  ERROR: cannot parse {path}'); return
    questions = json.loads(m.group(1))
    patterns  = make_patterns(n_choices)

    # 1. Delete empty questions
    before_count = len(questions)
    questions = [q for q in questions if q.get('choices') and len(q['choices']) > 0]
    deleted = before_count - len(questions)
    if deleted:
        print(f'  Deleted {deleted} empty question(s)')

    stripped_prefixes = 0
    trimmed = 0

    for q in questions:
        choices = q.get('choices', [])
        answer  = q.get('answer', 0)

        # 2. Strip embedded prefixes
        new_choices = [PREFIX_RE.sub('', c, count=1) if isinstance(c, str) else c for c in choices]
        stripped_prefixes += sum(1 for o, n in zip(choices, new_choices) if o != n)

        # 3. Trim to n_choices if needed
        if len(new_choices) > n_choices:
            if answer >= n_choices:
                # correct is beyond target — move it to last slot by swapping with slot n_choices-1
                new_choices[n_choices - 1], new_choices[answer] = new_choices[answer], new_choices[n_choices - 1]
                answer = n_choices - 1
            new_choices = new_choices[:n_choices]
            trimmed += 1

        if not DRY_RUN:
            q['choices'] = new_choices
            q['answer']  = answer

    print(f'  {"[DRY] " if DRY_RUN else ""}Stripped {stripped_prefixes} prefixes'
          + (f', trimmed {trimmed} to {n_choices} choices' if trimmed else ''))

    # 4. Rebalance per unit
    buckets = {}
    for q in questions:
        key = (q.get('subject'), q.get('unit'))
        buckets.setdefault(key, []).append(q)

    all_swaps = []
    for key in sorted(buckets, key=lambda k: (k[0] or '', k[1] or 0)):
        unit_qs = buckets[key]
        plan = plan_unit(unit_qs, n_choices)
        all_swaps.extend(plan)
        before = Counter(q['answer'] for q in unit_qs)
        proj   = Counter(before)
        for q, src, dst in plan:
            proj[src] -= 1; proj[dst] += 1
        bef = ' '.join(f'{LETTERS[i]}={before[i]:2d}' for i in range(n_choices))
        aft = ' '.join(f'{LETTERS[i]}={proj[i]:2d}'   for i in range(n_choices))
        print(f'    {str(key):<30} n={len(unit_qs):3d}  [{bef}] → [{aft}]  swaps={len(plan)}')

    print(f'  {"[DRY] " if DRY_RUN else ""}Total swaps: {len(all_swaps)}')

    if not DRY_RUN:
        for q, src, dst in all_swaps:
            swap_question(q, src, dst, patterns)

        # Guardrails
        for q in questions:
            assert len(q['choices']) == n_choices, f'{q.get("id")}: wrong choice count'
            assert q['answer'] in range(n_choices), f'{q.get("id")}: bad answer index'
        total = Counter(q['answer'] for q in questions)
        print(f'  Global final: { {LETTERS[k]: v for k,v in sorted(total.items())} }')

        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
        print(f'  wrote {path.name}')

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for fname, n_choices in SUBJECTS:
    print(f'\n── {fname} ({n_choices}-choice) ──')
    for copy in COPIES:
        path = ROOT / copy / fname
        process(path, n_choices)
print('\nDone.')
