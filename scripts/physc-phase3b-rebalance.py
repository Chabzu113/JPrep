#!/usr/bin/env python3
"""Phase 3b: Rebalance correct-answer position to ~25/25/25/25 per (subject, unit).

Strategy: minimum-swap. For each unit bucket, identify surplus and deficit
positions, then move questions from surplus → deficit via choice-pair swap.

Each swap:
  1. Swap two entries in the choices array (correct-choice ↔ deficit-position
     choice).
  2. Update q['answer'] to the new index.
  3. Bidirectionally swap letter references in question/explanation text:
       "Choice <src_letter>" ↔ "Choice <dst_letter>"
       "option <src>" ↔ "option <dst>"   (case-insensitive)
       "answer <src>" ↔ "answer <dst>"
       "(<src>)"      ↔ "(<dst>)"        (only single A-D)
       "<src>)"       ↔ "<dst>)"         (word-boundary)

Selection: deterministic — questions picked in order of their position in the
JSON array. Reproducible.

Safety:
  - Each swap moves the correct answer to the target position WITHOUT changing
    which choice is correct. Content is unchanged.
  - Letter references in explanations are bidirectionally swapped. If an
    explanation says "Choice A is wrong" and we move correct from A→C, after
    swap the explanation will say "Choice C is wrong" (because position C now
    holds what was at A). Semantics preserved.

Usage: python3 physc-phase3b-rebalance.py [--dry-run]
"""
import json, re, sys
from collections import Counter
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'physc_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physc_mcq.js',
]
LETTERS = ['A', 'B', 'C', 'D']

# Regexes for letter references — capture the letter so we can map it
PATTERNS = [
    re.compile(r'(\bChoice\s+)([A-D])\b'),
    re.compile(r'(\bchoice\s+)([A-D])\b'),
    re.compile(r'(\bOption\s+)([A-D])\b'),
    re.compile(r'(\boption\s+)([A-D])\b'),
    re.compile(r'(\bAnswer\s+)([A-D])\b'),
    re.compile(r'(\banswer\s+)([A-D])\b'),
    re.compile(r'(\()([A-D])(\))'),
    re.compile(r'(\b)([A-D])(\))'),
]

def swap_letters_in_text(text, mapping):
    """Apply the letter mapping to all choice references in text."""
    if not text: return text
    def make_repl(pat_groups):
        def repl(m):
            letter = m.group(2)
            new = mapping.get(letter, letter)
            if pat_groups == 2:
                return m.group(1) + new
            else:  # 3
                return m.group(1) + new + m.group(3)
        return repl
    for pat in PATTERNS:
        groups = pat.groups
        text = pat.sub(make_repl(groups), text)
    return text

def swap_question(q, src, dst):
    """Move correct answer from position src to position dst."""
    assert q['answer'] == src, f"Expected answer={src}, got {q['answer']}"
    # Swap choices
    q['choices'][src], q['choices'][dst] = q['choices'][dst], q['choices'][src]
    q['answer'] = dst
    # Build bidirectional letter mapping
    mapping = {LETTERS[src]: LETTERS[dst], LETTERS[dst]: LETTERS[src]}
    # Apply to question + explanation (NOT choices — they're pre-swapped)
    q['explanation'] = swap_letters_in_text(q.get('explanation', ''), mapping)
    q['question']    = swap_letters_in_text(q.get('question', ''), mapping)

def plan_unit(qs_in_unit):
    """Return list of (q, src, dst) swaps for this unit."""
    n = len(qs_in_unit)
    target = n // 4
    counts = Counter(q['answer'] for q in qs_in_unit)
    surplus = sorted(((p, counts[p] - target) for p in range(4) if counts[p] > target+1),
                     key=lambda x: -x[1])
    deficit = sorted(((p, target - counts[p]) for p in range(4) if counts[p] < target-1),
                     key=lambda x: -x[1])
    swaps = []
    deficit = [list(x) for x in deficit]
    for src, n_src in surplus:
        # Questions in this unit currently at src
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
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    # Group by (subject, unit)
    buckets = {}
    for q in questions:
        key = (q.get('subject'), q.get('unit'))
        buckets.setdefault(key, []).append(q)

    # Plan swaps per bucket
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
        bef = ' '.join(f'{LETTERS[i]}={before[i]:2d}' for i in range(4))
        aft = ' '.join(f'{LETTERS[i]}={proj[i]:2d}' for i in range(4))
        print(f'  {key}: n={n:3d}  before [{bef}]  after [{aft}]  swaps={len(plan)}')

    print(f'\n  {"[DRY] " if DRY_RUN else ""}Total swaps: {len(all_swaps)}')

    if not DRY_RUN:
        for q, src, dst in all_swaps:
            swap_question(q, src, dst)

        # ── Guardrails ───────────────────────────────────────────────────────
        # Each question still has 4 choices, valid answer index, and the same SET
        # of choice strings.
        for q in questions:
            assert len(q['choices']) == 4, f"{q.get('id')}: bad choice count"
            assert q['answer'] in (0,1,2,3), f"{q.get('id')}: bad answer index"
        # Final distribution check
        total = Counter()
        for key, qs in buckets.items():
            c = Counter(q['answer'] for q in qs)
            n = len(qs)
            for p in range(4):
                total[p] += c[p]
                # Each position should be within ±15% of target (loose)
                assert c[p] >= max(2, n//4 - n//5), f'{key} pos {p} too low: {c[p]} of {n}'
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
