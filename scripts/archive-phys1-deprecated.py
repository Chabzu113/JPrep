#!/usr/bin/env python3
"""Phase 1: Archive deprecated AP Physics 1 questions (old curriculum topics removed in 2026).
Archives: all Unit 8 (E&M), all Unit 9 (Waves), Unit 3 Circular/Gravity topics.
Usage: python3 archive-phys1-deprecated.py [--dry-run]
"""
import json, re, sys
from pathlib import Path

DRY_RUN = '--dry-run' in sys.argv

ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'physics_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physics_mcq.js',
]

# Topics in Unit 3 that are being REMOVED (circular motion & gravitation)
CIRCULAR_GRAVITY_TOPICS = {
    'centripetal acceleration', 'centripetal force', 'uniform circular motion',
    'orbital motion', "kepler's laws", 'newton\'s law of gravitation',
    'satellite speed', 'gravitational force', 'gravitational field',
    'circular motion', 'gravitation',
}

def should_archive(q):
    unit = q.get('unit')
    topic = (q.get('topic') or '').lower()
    if unit in (8, 9):
        return True
    if unit == 3:
        for t in CIRCULAR_GRAVITY_TOPICS:
            if t in topic:
                return True
    return False

def process(path):
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: could not parse {path}'); sys.exit(1)
    questions = json.loads(m.group(1))

    archived = 0
    already = 0
    for q in questions:
        if q.get('deprecated'):
            already += 1
            continue
        if should_archive(q):
            if not DRY_RUN:
                q['deprecated'] = True
            archived += 1

    surviving = len(questions) - already - archived
    print(f'  {"[DRY-RUN] " if DRY_RUN else ""}  {path.name}: archive={archived}, already_deprecated={already}, surviving={surviving}')

    # Guard: sanity check counts
    assert archived >= 150, f'Expected >=150 archived, got {archived}'
    assert archived <= 200, f'Expected <=200 archived, got {archived}'
    assert surviving >= 300, f'Surviving count {surviving} seems too low'

    if not DRY_RUN:
        prefix = text[:m.start(1)]
        suffix = text[m.end(1):]
        path.write_text(prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix)

print(f'{"=== DRY RUN ===" if DRY_RUN else "=== LIVE RUN ==="}')
for t in TARGETS:
    process(t)
print('Done.')
