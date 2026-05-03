#!/usr/bin/env python3
"""Phase 2: Fix 54 stray questions mislabeled as apphyscem that are actually Mechanics.

These questions have old-style numbered topics (6.x–12.x) and were pre-existing
with subject=apphyscem. They need:
  - subject → apphysc
  - unit remapped to new 7-unit CB Mechanics structure
  - topic updated to match clean labels already used in Mechanics bank

Usage: python3 physc-phase2-fix-strays.py [--dry-run]

Old unit → New unit mapping:
  6  → 1  (Kinematics)
  7  → 2  (Newton's Laws)
  8  → 3  (Work, Energy, Power)
  9  → 4  (Systems of Particles & Linear Momentum)
  10 → 5  (Rotation)
  11 → 2 or 7 (Circular Motion → 2, Gravitation → 7)
  12 → 6  (Oscillations)
"""
import json, re, sys
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'physc_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physc_mcq.js',
]

# Old numbered topic → (new_unit, clean_topic)
TOPIC_MAP = {
    '6.1 Position, Velocity & Acceleration (Calculus)': (1, 'derivatives of motion'),
    '6.2 Kinematics in Two Dimensions':                 (1, 'kinematics in 2D'),

    "7.1 Newton's Second Law (Calculus)":               (2, "Newton's laws"),
    "7.1 Newton's Laws with Calculus":                  (2, "Newton's laws"),
    '7.2 Friction & Differential Equations':            (2, 'drag force and differential equations'),
    '7.2 Variable Forces (Calculus)':                   (2, 'drag force and differential equations'),
    '7.3 Springs and Oscillatory Forces':               (2, "Newton's laws"),

    '8.1 Work Done by a Variable Force':                (3, 'work integral'),
    '8.2 Potential Energy & Conservative Forces':       (3, 'conservation of energy'),
    '8.3 Power (Calculus)':                             (3, 'power'),

    '9.1 Impulse (Calculus)':                           (4, 'impulse momentum'),
    '9.1 Impulse & Momentum':                           (4, 'impulse momentum'),
    '9.2 Conservation of Momentum':                     (4, 'conservation of momentum'),
    '9.2 Center of Mass':                               (4, 'center of mass'),

    '10.1 Rotational Kinematics (Calculus)':            (5, 'rotational inertia'),
    '10.2 Moment of Inertia (Calculus)':                (5, 'rotational inertia'),
    '10.3 Angular Momentum':                            (5, 'angular momentum'),
    '10.4 Rotational Kinetic Energy':                   (5, 'rolling without slipping'),
    '10.5 Torque and Angular Acceleration':             (5, 'torque'),

    '11.1 Circular Motion':                             (2, 'circular motion dynamics'),
    '11.2 Gravitation':                                 (7, "Newton's law of universal gravitation"),

    '12.1 Simple Harmonic Motion':                      (6, 'simple harmonic motion calculus'),
}

def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    # Build plan: (q, new_subject, new_unit, new_topic)
    plan = []
    for q in questions:
        if q.get('subject') != 'apphyscem':
            continue
        topic = q.get('topic', '')
        if topic not in TOPIC_MAP:
            continue
        new_unit, new_topic = TOPIC_MAP[topic]
        plan.append((q, 'apphysc', new_unit, new_topic))

    fixed = len(plan)
    print(f'  {"[DRY] " if DRY_RUN else ""}Fixed: {fixed} stray Mechanics questions')

    # Compute projected state for guardrails
    from collections import Counter
    overrides = {id(q): (s, u, t) for q, s, u, t in plan}
    proj_subj  = []
    proj_units = {}
    for q in questions:
        ov = overrides.get(id(q))
        s = ov[0] if ov else q.get('subject')
        u = ov[1] if ov else q.get('unit')
        proj_subj.append(s)
        proj_units[id(q)] = (s, u)

    subj       = Counter(proj_subj)
    units_mech = Counter(u for s, u in proj_units.values() if s == 'apphysc')
    units_em   = Counter(u for s, u in proj_units.values() if s == 'apphyscem')

    print(f'  Mechanics total: {subj["apphysc"]} | E&M total: {subj["apphyscem"]}')
    print(f'  Mech by unit: {dict(sorted(units_mech.items()))}')
    print(f'  E&M by unit:  {dict(sorted(units_em.items()))}')

    assert subj['apphysc'] + subj['apphyscem'] == len(questions), 'Total mismatch'
    assert all(u in range(1, 8) for u in units_mech), \
        f'Mechanics question outside units 1-7: {set(units_mech)-set(range(1,8))}'
    assert all(u in range(8, 14) for u in units_em), \
        f'E&M question outside units 8-13: {set(units_em)-set(range(8,14))}'
    for u in range(1, 8):
        assert units_mech[u] >= 50, f'Mech unit {u} only has {units_mech[u]} questions'
    for u in range(8, 14):
        assert units_em[u] >= 15, f'E&M unit {u} only has {units_em[u]} questions'

    if not DRY_RUN:
        for q, s, u, t in plan:
            q['subject'] = s
            q['unit']    = u
            q['topic']   = t
        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)
        print(f'  wrote {path.name}')

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    print(f'\n{t.name}:')
    process(t)
print('\nDone.')
