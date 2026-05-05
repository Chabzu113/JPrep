#!/usr/bin/env python3
"""Fix red and yellow document errors in APUSH DBQs.

Red fixes (factual errors):
  U5 Doc3 — wrong title/year for John Andrew Jackson memoir
  U1 Doc5 — wrong title for Sepúlveda work
  U2 Doc7 — fictional anonymous 1699 account; replace with Bluett / Job ben Solomon (1734)

Yellow fixes (accuracy issues):
  U4 Doc2 — wrong title for Finney work (should be Lectures on Revivals of Religion)
  U8 Doc4 — Silent Majority speech is off-topic; replace with Nixon New Federalism address (1969)
"""

import json, re
from pathlib import Path

ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'apush_frq.js',
    ROOT / 'electron' / 'js' / 'data' / 'apush_frq.js',
]

# ── patch definitions ─────────────────────────────────────────────────────
# key: (frq_id, docNum)  value: fields to overwrite (missing keys = keep as-is)

PATCHES = {
    # RED: Sepúlveda — wrong title
    ('apush-dbq-u1-04', 5): {
        'title': 'Democrates Alter, or On the Just Causes for War Against the Indians',
        'author': 'Juan Ginés de Sepúlveda, Spanish humanist and royal chronicler',
        # year 1547 and excerpt are already accurate — keep them
    },

    # RED: John Andrew Jackson — wrong title and year
    ('apush-dbq-u5-19', 3): {
        'title': 'The Experience of a Slave in South Carolina',
        'author': 'John Andrew Jackson, formerly enslaved man from South Carolina',
        'year': 1862,
        'excerpt': (
            'I was the slave of Robert English, a farmer in Sumter District, South Carolina. '
            'From childhood I resolved that I would one day be free, and I watched and waited '
            'for my opportunity for many years. When at last I made my escape, I travelled by '
            'night and hid by day, assisted by a small number of free colored persons who risked '
            'their own safety for mine. I eventually reached the free states and then England, '
            'where I now write these words. But let no man suppose that crossing into a free '
            'state was the end of my danger, for under the law of 1850 the slave-catcher '
            'followed me even to Boston, and I was never truly safe until I crossed the ocean. '
            'I tell my story so that those who have never felt the chain may understand '
            'what it means to be held as property in a land that calls itself free.'
        ),
    },

    # RED: Fictional 1699 anonymous account — replace with Bluett / Job ben Solomon (1734)
    ('apush-dbq-u2-36', 7): {
        'title': 'Some Memoirs of the Life of Job ben Solomon',
        'author': 'Thomas Bluett, English clergyman, recording the account of Ayuba Suleiman Diallo',
        'year': 1734,
        'excerpt': (
            'Job ben Solomon was born a free man of rank in the kingdom of Futa Bundu in Africa, '
            'the son of a high priest and himself a man of learning in the Arabic tongue and the '
            'Mohometan religion. He was taken by his enemies and sold to an English captain on '
            'the Gambia River, and transported to Maryland, where he was set to work in the '
            'tobacco fields of Mr. Tolsey in Kent Island. He bore his condition with great '
            'patience, though it was entirely contrary to his birth and education, and he was '
            'observed by all who knew him to be of a different character from the common run '
            'of slaves brought from the coast. Through the intercession of James Oglethorpe '
            'and the Royal African Company, he was at last redeemed from bondage and returned '
            'to his country — his case demonstrating that those sold into slavery in these '
            'colonies were not, as some would claim, savages without learning or rank, '
            'but men of quality and civilization torn from their proper station in the world.'
        ),
    },

    # YELLOW: Finney — wrong title
    ('apush-dbq-u4-15', 2): {
        'title': 'Lectures on Revivals of Religion',
        # author, year 1835, excerpt all accurate — keep them
    },

    # YELLOW: Nixon Silent Majority is about Vietnam, off-topic for domestic liberalism DBQ
    ('apush-dbq-u8-31', 4): {
        'title': 'Address to the Nation on Domestic Programs (New Federalism)',
        'author': 'President Richard M. Nixon',
        'year': 1969,
        'excerpt': (
            'After a third of a century of power flowing from the people and the States to '
            'Washington, it is time for a New Federalism in which power, funds, and '
            'responsibility will flow from Washington to the States and to the people. '
            'I propose a program to reverse the flow of power and resources from the States '
            'and communities to Washington, and start power and resources flowing back from '
            'Washington to the States and communities and, more important, to the people '
            'all across America. We face an urban crisis, a social crisis — and at the same '
            'time, a crisis of confidence in the capacity of government to do its job. '
            'The Great Society programs were enacted with the best of intentions, but the '
            'result has been a bureaucratic maze that frustrates both the people it is '
            'meant to help and the men and women who are trying to administer it.'
        ),
    },
}


def apply_patches(frqs):
    patched = 0
    for frq in frqs:
        fid = frq.get('id')
        docs = frq.get('stimulus')
        if not isinstance(docs, list):
            continue
        for doc in docs:
            key = (fid, doc.get('docNum'))
            if key in PATCHES:
                for field, value in PATCHES[key].items():
                    doc[field] = value
                patched += 1
                print(f'  patched {fid} doc{doc["docNum"]}: {list(PATCHES[key].keys())}')
    return patched


def process(path):
    if not path.exists():
        print(f'  SKIP (not found): {path}')
        return

    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'  ERROR: cannot parse {path}')
        return

    frqs = json.loads(m.group(1))
    n = apply_patches(frqs)
    print(f'  total patches applied: {n}')

    prefix = text[:m.start(1)]
    suffix = text[m.end(1):]
    path.write_text(prefix + json.dumps(frqs, indent=2, ensure_ascii=False) + suffix)
    print(f'  wrote {path.name}')


print('=== APUSH DBQ doc quality fixes ===')
for t in TARGETS:
    print(f'\n{t}:')
    process(t)
print('\nDone.')
