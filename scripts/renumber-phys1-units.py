#!/usr/bin/env python3
"""Phase 2: Renumber AP Physics 1 units to 2026 curriculum structure.
Usage: python3 renumber-phys1-units.py [--dry-run]

New curriculum:
  1 Kinematics           (old 1 → 1)
  2 Force & Translation  (old 2 → 2)
  3 Work/Energy/Power    (old 3 + old 4 W/E topics → 3)
  4 Linear Momentum      (old 4 COM topics + old 5 → 4)
  5 Torque & Rot Dyn     (old 7 torque topics → 5)
  6 Energy & Mom Rotation(old 7 angular/rolling topics → 6)
  7 Oscillations         (old 6 → 7)
  8 Fluids               (new, built later)
"""
import json, re, sys
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'physics_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physics_mcq.js',
]

# Unit 4 topic split — keywords that signal Work/Energy (→ new 3)
U4_WORK_ENERGY = {
    'hooke', 'energy', 'power', 'work', 'kinetic', 'potential', 'spring', 'elastic'
}
# Unit 7 topic split — keywords that signal Torque/Dynamics (→ new 5)
U7_TORQUE = {
    'torque', 'moment arm', 'rotational equilibrium', 'rotational kinematics',
    'rotational inertia', 'moment of inertia', "newton's second law rotation",
    '7.1', '7.2', 'rotational equilib'
}
# Unit 7 keywords that signal Energy/Momentum of Rotation (→ new 6)
U7_ROT_ENERGY = {
    'angular momentum', 'rolling', '7.3'
}

def new_unit(q):
    if q.get('deprecated'):
        return q['unit']  # unchanged
    u = q['unit']
    t = (q.get('topic') or '').lower()

    if u in (1, 2):
        return u
    if u == 3:
        return 3
    if u == 4:
        # Work/energy topics → 3; COM/momentum → 4
        for kw in U4_WORK_ENERGY:
            if kw in t:
                return 3
        return 4  # default: COM/momentum
    if u == 5:
        return 4
    if u == 6:
        return 7
    if u == 7:
        for kw in U7_ROT_ENERGY:
            if kw in t:
                return 6
        return 5  # default: torque/dynamics
    return u  # deprecated units 8/9 unchanged

def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    counts = {}  # old_unit -> {new_unit: count}
    after = {}   # projected new unit counts
    plan = []    # (q, new_unit) for live questions
    for q in questions:
        if q.get('deprecated'):
            continue
        old = q['unit']
        nw = new_unit(q)
        counts.setdefault(old, {}).setdefault(nw, 0)
        counts[old][nw] += 1
        after[nw] = after.get(nw, 0) + 1
        plan.append((q, nw))

    # Print mapping summary
    for old in sorted(counts):
        for nw, c in sorted(counts[old].items()):
            arrow = '->' if old != nw else '=='
            print(f'  u{old} {arrow} u{nw}: {c}q')

    changed = sum(1 for q, nw in plan if q['unit'] != nw)

    # Apply changes
    if not DRY_RUN:
        for q, nw in plan:
            q['unit'] = nw
    print(f'  After dist: {dict(sorted(after.items()))}')
    assert after.get(1, 0) >= 60,      f'Unit 1 too low: {after.get(1,0)}'
    assert after.get(7, 0) >= 60,      f'Unit 7 (Oscillations) too low: {after.get(7,0)}'
    assert 8 not in after,             'Deprecated unit 8 has live questions'
    assert 9 not in after,             'Deprecated unit 9 has live questions'
    assert sum(after.values()) == 389, f'Live count changed: {sum(after.values())}'

    print(f'  {"[DRY] " if DRY_RUN else ""}changed={changed} | {path.name}')

    if not DRY_RUN:
        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')
