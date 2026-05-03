#!/usr/bin/env python3
"""Apply Phase 3 graphSvg fields to both physics_mcq.js copies."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
PHASE3 = Path(__file__).parent / 'phys1-phase3.json'
TARGETS = [
    ROOT / 'js' / 'data' / 'physics_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'physics_mcq.js',
]

with open(PHASE3) as f:
    phase3 = json.load(f)

print(f'Loaded {len(phase3)} Phase 3 diagrams')

def apply_to_file(path):
    text = path.read_text()
    # Extract JS array
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'ERROR: could not find array in {path}')
        sys.exit(1)
    questions = json.loads(m.group(1))

    added = 0
    skipped_existing = 0
    not_found = []

    for qid, svg in phase3.items():
        matched = False
        for q in questions:
            if q.get('id') == qid:
                matched = True
                if 'graphSvg' in q:
                    skipped_existing += 1
                    print(f'  SKIP (already has graphSvg): {qid}')
                else:
                    q['graphSvg'] = svg
                    added += 1
                break
        if not matched:
            not_found.append(qid)

    if not_found:
        print(f'  WARNING: IDs not found in {path.name}: {not_found}')

    # Rebuild file
    prefix = text[:m.start(1)]
    suffix = text[m.end(1):]
    new_text = prefix + json.dumps(questions, indent=2, ensure_ascii=False) + suffix
    path.write_text(new_text)
    print(f'  {path.name}: +{added} graphSvg, {skipped_existing} skipped')

for target in TARGETS:
    print(f'\nApplying to {target.name}...')
    apply_to_file(target)

print('\nDone.')
