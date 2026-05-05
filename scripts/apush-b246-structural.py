#!/usr/bin/env python3
"""B2 + B4 + B6 — structural/metadata fixes (no new content).

B6: set unit = units[0] on all 36 FRQs
B2: add outOfExamSpec + note to DBQs for units 1, 2, 9
B4: add rubric object to every FRQ based on frqType
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'apush_frq.js',
    ROOT / 'electron' / 'js' / 'data' / 'apush_frq.js',
]

OUT_OF_SPEC_IDS = {'apush-dbq-u1-04', 'apush-dbq-u2-36', 'apush-dbq-u9-35'}
OUT_OF_SPEC_NOTE = 'Practice DBQ — real AP exam DBQ sources are drawn from 1754–1980 only.'

LEQ_RUBRIC = {
    'thesis':             'Historically defensible claim that establishes a line of reasoning (1 pt)',
    'contextualization':  'Describes broader historical context before, during, or after the time frame (1 pt)',
    'evidence':           '2 specific examples = 1 pt; 2 examples each linked to an argument = 2 pts',
    'historicalReasoning':'Demonstrates comparison, causation, or continuity/change over time (1 pt)',
    'complexity':         'Sophisticated argumentation demonstrating complex understanding — scored manually (1 pt)',
}

DBQ_RUBRIC = {
    'thesis':            'Historically defensible claim establishing a line of reasoning (1 pt)',
    'contextualization': 'Describes broader historical context relevant to the topic (1 pt)',
    'documentEvidence':  'Accurately uses 3+ docs = 1 pt; supports argument with 4+ docs = 2 pts',
    'outsideEvidence':   'At least 1 piece of specific evidence beyond the documents (1 pt)',
    'sourcing':          'Explains POV, purpose, historical situation, or audience of 2+ docs (1 pt)',
    'complexity':        'Sophisticated argumentation — always scored manually (1 pt)',
}

SAQ_RUBRIC = {
    'eachPart': 'Each part (a, b, c) earns 1 point for a historically accurate, on-topic response of 3–5 sentences.',
    'a':        '1 pt — accurate description or explanation addressing the specific prompt',
    'b':        '1 pt — accurate description or explanation addressing the specific prompt',
    'c':        '1 pt — accurate description or explanation addressing the specific prompt',
}


def apply(frqs):
    b6 = b2 = b4 = 0
    for frq in frqs:
        # B6 — set unit
        if frq.get('unit') is None and frq.get('units'):
            frq['unit'] = frq['units'][0]
            b6 += 1

        # B2 — out-of-exam-spec flag
        if frq.get('id') in OUT_OF_SPEC_IDS:
            if not frq.get('outOfExamSpec'):
                frq['outOfExamSpec'] = True
                frq['note'] = OUT_OF_SPEC_NOTE
                b2 += 1

        # B4 — rubric
        if 'rubric' not in frq:
            ft = frq.get('frqType', '')
            if ft == 'leq':
                frq['rubric'] = LEQ_RUBRIC
            elif ft == 'dbq':
                frq['rubric'] = DBQ_RUBRIC
            elif ft == 'saq':
                frq['rubric'] = SAQ_RUBRIC
            b4 += 1

    print(f'  B6 unit set: {b6}  |  B2 flagged: {b2}  |  B4 rubric added: {b4}')
    return frqs


def process(path):
    if not path.exists():
        print(f'  SKIP: {path}'); return
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'  ERROR parsing {path}'); return
    frqs = apply(json.loads(m.group(1)))
    path.write_text(text[:m.start(1)] + json.dumps(frqs, indent=2, ensure_ascii=False) + text[m.end(1):])
    print(f'  wrote {path.name}')


print('=== B2 + B4 + B6 structural fixes ===')
for t in TARGETS:
    print(f'\n{t}:')
    process(t)
print('\nDone.')
