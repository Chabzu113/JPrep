#!/usr/bin/env python3
"""B3 — add primary/secondary source stimulus to first SAQ per unit (9 SAQs)."""
import json, re
from pathlib import Path

ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'apush_frq.js',
    ROOT / 'electron' / 'js' / 'data' / 'apush_frq.js',
]

STIMULI = {
    'apush-saq-u1-01': {
        'type': 'secondary',
        'title': 'A Short Account of the Destruction of the Indies',
        'author': 'Bartolome de las Casas, Dominican friar',
        'year': 1542,
        'excerpt': (
            'The reason the Christians have murdered on such a vast scale is purely greed. '
            'They have set out to line their pockets with gold and to amass private fortunes '
            'as quickly as possible. Their insatiable greed and overweening ambition know no '
            'bounds; the land is fertile and rich, the inhabitants simple and submissive.'
        ),
    },
    'apush-saq-u2-05': {
        'type': 'primary',
        'title': 'Declaration in the Name of the People',
        'author': 'Nathaniel Bacon',
        'year': 1676,
        'excerpt': (
            'We appeal to the country itself what and of what nature their oppressions have '
            'been, and by what cabal and mystery the designs of many of those whom we call '
            'great men have been transacted and carried on. Let us trace these men in '
            'authority from the first rise, and see whether they have not stepped from '
            'the degree of servants to the degree of masters and owners of large estates.'
        ),
    },
    'apush-saq-u3-08': {
        'type': 'primary',
        'title': 'The Declaration of Independence',
        'author': 'Thomas Jefferson and the Continental Congress',
        'year': 1776,
        'excerpt': (
            'We hold these truths to be self-evident, that all men are created equal, that '
            'they are endowed by their Creator with certain unalienable Rights, that among '
            'these are Life, Liberty and the pursuit of Happiness. That to secure these '
            'rights, Governments are instituted among Men, deriving their just powers from '
            'the consent of the governed.'
        ),
    },
    'apush-saq-u4-12': {
        'type': 'primary',
        'title': 'Special Message to Congress on Indian Removal',
        'author': 'President Andrew Jackson',
        'year': 1830,
        'excerpt': (
            'It will separate the Indians from immediate contact with settlements of whites, '
            'free them from the power of the States, enable them to pursue happiness in their '
            'own way and under their own rude institutions, and retard the progress of decay '
            'which is lessening their numbers. Doubtless it will be painful to leave the '
            'graves of their fathers, but what do they more than our ancestors did or than '
            'our children are now doing?'
        ),
    },
    'apush-saq-u5-16': {
        'type': 'primary',
        'title': 'Speech on the Dred Scott Decision',
        'author': 'Senator William Seward of New York',
        'year': 1858,
        'excerpt': (
            'The interests and fortunes of the slaveholders have given them a supreme '
            'direction of the policy of the federal government. They have used that direction '
            'to extend slavery over territories once dedicated to freedom. There is an '
            'irrepressible conflict between opposing and enduring forces, and it means that '
            'the United States must and will, sooner or later, become either entirely a '
            'slaveholding nation, or entirely a free-labor nation.'
        ),
    },
    'apush-saq-u6-20': {
        'type': 'primary',
        'title': 'The Gospel of Wealth',
        'author': 'Andrew Carnegie',
        'year': 1889,
        'excerpt': (
            'The law of competition may be sometimes hard for the individual, but it is best '
            'for the race, because it insures the survival of the fittest in every department. '
            'We accept and welcome, therefore, as conditions to which we must accommodate '
            'ourselves, great inequality of environment, the concentration of business in the '
            'hands of a few, and the law of competition between these, as being not only '
            'beneficial but essential for the future progress of the race.'
        ),
    },
    'apush-saq-u7-24': {
        'type': 'primary',
        'title': 'First Fireside Chat',
        'author': 'President Franklin D. Roosevelt',
        'year': 1933,
        'excerpt': (
            'I want to talk for a few minutes with the people of the United States about '
            'banking. First of all, let me state the simple fact that when you deposit money '
            'in a bank the bank does not put the money into a safe deposit vault. The '
            'Government does not intend that the history of the past few years shall be '
            'repeated. We do not want and will not have another epidemic of bank failures.'
        ),
    },
    'apush-saq-u8-28': {
        'type': 'primary',
        'title': 'Letter from Birmingham Jail',
        'author': 'Reverend Martin Luther King Jr.',
        'year': 1963,
        'excerpt': (
            'We know through painful experience that freedom is never voluntarily given by '
            'the oppressor; it must be demanded by the oppressed. One has not only a legal '
            'but a moral responsibility to obey just laws. Conversely, one has a moral '
            'responsibility to disobey unjust laws. Any law that degrades human personality '
            'is unjust. All segregation statutes are unjust because segregation distorts '
            'the soul and damages the personality.'
        ),
    },
    'apush-saq-u9-32': {
        'type': 'primary',
        'title': 'Address to the National Association of Evangelicals',
        'author': 'President Ronald Reagan',
        'year': 1983,
        'excerpt': (
            'I urge you to beware the temptation of pride — the temptation of blithely '
            'declaring yourselves above it all and label both sides equally at fault, to '
            'ignore the facts of history and the aggressive impulses of an evil empire, '
            'to simply call the arms race a giant misunderstanding and thereby remove '
            'yourself from the struggle between right and wrong and good and evil.'
        ),
    },
}


def apply(frqs):
    added = 0
    for frq in frqs:
        fid = frq.get('id')
        if fid in STIMULI and frq.get('stimulus') is None:
            frq['stimulus'] = STIMULI[fid]
            added += 1
            print(f'  added stimulus to {fid}')
    return added


def process(path):
    if not path.exists():
        print(f'  SKIP: {path}'); return
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'  ERROR parsing {path}'); return
    frqs = json.loads(m.group(1))
    n = apply(frqs)
    print(f'  total: {n}')
    path.write_text(text[:m.start(1)] + json.dumps(frqs, indent=2, ensure_ascii=False) + text[m.end(1):])
    print(f'  wrote {path.name}')


print('=== B3 SAQ stimuli ===')
for t in TARGETS:
    print(f'\n{t}:')
    process(t)
print('\nDone.')
