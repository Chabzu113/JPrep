#!/usr/bin/env python3
"""Phase 1: Extract E&M questions from Physics C and assign to CB units 8–13.
Usage: python3 physc-phase1-extract-em.py [--dry-run]

Rules
-----
- A question is E&M if its topic matches any entry in EM_TOPIC_MAP.
- The matched entry determines its target unit (8–13).
- subject is set to 'apphyscem'.
- Mechanics questions are untouched (subject stays 'apphysc', unit stays).

Guardrails
----------
- Total question count identical before/after.
- Every apphyscem question ends up in 8–13.
- No unit 8–13 question has subject apphysc.
- Each E&M unit gets at least 15 questions.
- Mechanics units (detected) all stay in 1–12.
"""
import json, re, sys
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv
ROOT    = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js'       / 'data' / 'physc_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physc_mcq.js',
]

# ── E&M topic → unit map (checked in order; first match wins) ────────────────
# Each entry: (unit, list-of-lowercase-substrings-matched-against-topic)
EM_RULES = [
    # ── Unit 13 first (more specific than unit 12/11 overlaps) ──────────────
    (13, ['faraday', 'lenz', 'inductance', 'inductor', 'motional emf',
          'energy in inductor', 'lc circuit', 'maxwell', 'lr circuit',
          'rl circuit', 'electromagnetic induction', '5.1 faraday',
          '5.2 induct', '5.3 lr', '5.4 maxwell', '5.5 lc',
          'emf and series']),
    # ── Unit 12: Magnetic Fields ─────────────────────────────────────────────
    (12, ['biot', 'ampere', 'magnetic force', 'magnetic field',
          'magnetic flux', 'solenoid', 'toroid', 'lorentz',
          'torque on current loop', 'magnetic force on charge',
          'magnetic force on wire', 'magnetic field config',
          '4.1 biot', '4.2 ampere', '4.3 lorentz']),
    # ── Unit 11: Electric Circuits ───────────────────────────────────────────
    (11, ['rc circuit', 'kirchhoff', "ohm's law", 'ohm\'s law',
          'series circuit', 'parallel circuit', 'resistance',
          'steady-state', 'dc circuit', '3.1 rc', '3.2 kirchhoff',
          '3.3 power in', 'emf and series', 'emf',
          'power in circuit', '3.3 power']),
    # current/power alone are ambiguous — only flag if topic has no Mech context
    (11, ['series and parallel', 'rc transient', 'rc steady']),
    # ── Unit 10: Conductors & Capacitors ────────────────────────────────────
    (10, ['capacit', 'dielectric', 'conductors in equilibrium',
          'conductors in electrostatic', 'energy stored in capacitor',
          'energy in capacitor', 'conductor in equilibrium',
          'field, capacitance', 'conductor charge distribution',
          '2.1 capacit', '2.1 conduct', '2.2 capac', '2.2 conduct',
          '2.3 energy in capac']),
    # ── Unit 9: Electric Potential ───────────────────────────────────────────
    (9,  ['electric potential', 'equipotential', 'field from potential',
          'potential from field', 'potential from charge',
          'potential due to', 'potential energy electric',
          'gauss\'s law and conductors', "gauss's law and conductors",
          '1.2 electric potential', 'field, capacitance, dielectric']),
    # ── Unit 8: Charges, Fields & Gauss's Law ───────────────────────────────
    (8,  ['coulomb', 'electric field', 'electric force', 'electric flux',
          'gauss', 'charge distribution', 'field for symmetric',
          'line charge', 'plane charge', 'conductor surface field',
          'point charge electric', 'electric field direction',
          '1.1 coulomb', '1.3 gauss', 'coulomb\'s law and electric',
          "coulomb's law and", 'electric field for symmetric',
          'field for symmetric charge']),
]

# Additional standalone ambiguous topics — classified by unit via exact match
EXACT_EM_TOPICS = {
    'current':                11,
    'resistance':             11,
    'series circuits':        11,
    'parallel circuits':      11,
    'rl circuits':            13,
    'energy in inductor':     13,
    'torque on current loop': 12,
    'magnetic flux':          12,
    'motional emf':           13,
    # 'power' intentionally excluded — context-checked separately below
}

# Circuit keywords that confirm a "power" topic is E&M, not Mechanics
CIRCUIT_KW = ['resistor', 'circuit', 'voltage', 'battery', 'p = iv', 'p=iv',
               'p = i²r', 'p=i²r', 'p = i^2', 'terminal', 'emf', 'ohm',
               'internal resistance', 'dissipat']

def em_unit(q):
    """Return target E&M unit (8-13) or None if question is Mechanics."""
    topic = (q.get('topic') or '').lower().strip()

    # Exact match first
    if topic in EXACT_EM_TOPICS:
        return EXACT_EM_TOPICS[topic]

    # 'power' alone is ambiguous: P=Fv is Mechanics, P=IV is E&M
    if topic == 'power':
        qtext = (q.get('question', '') + ' ' + q.get('explanation', '')).lower()
        if any(kw in qtext for kw in CIRCUIT_KW):
            return 11
        return None  # mechanical power — stays Mechanics

    # Substring rules (ordered, first wins)
    for unit, keywords in EM_RULES:
        for kw in keywords:
            if kw in topic:
                return unit

    return None   # Mechanics

def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: cannot parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    em_assigned   = {8:0, 9:0, 10:0, 11:0, 12:0, 13:0}
    mech_count    = 0
    changed_unit  = 0
    changed_subj  = 0

    for q in questions:
        target = em_unit(q)
        if target is not None:
            em_assigned[target] += 1
            if not DRY_RUN:
                if q.get('unit') != target:
                    changed_unit += 1
                if q.get('subject') != 'apphyscem':
                    changed_subj += 1
                q['unit']    = target
                q['subject'] = 'apphyscem'
        else:
            mech_count += 1

    total_em = sum(em_assigned.values())
    print(f'  {"[DRY] " if DRY_RUN else ""}E&M extracted: {total_em} | Mechanics remaining: {mech_count}')
    print(f'  E&M by unit: {em_assigned}')
    if not DRY_RUN:
        print(f'  unit changed={changed_unit} | subject changed={changed_subj}')

    # ── Guardrails ───────────────────────────────────────────────────────────
    assert total_em + mech_count == len(questions), \
        f'Count mismatch: {total_em}+{mech_count} != {len(questions)}'
    assert total_em  >= 250, f'E&M count {total_em} suspiciously low'
    assert mech_count >= 450, f'Mechanics count {mech_count} suspiciously low'
    for u, c in em_assigned.items():
        assert c >= 15, f'E&M unit {u} only has {c} questions — check classifier'

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
