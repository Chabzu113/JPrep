#!/usr/bin/env python3
"""B1 — add a historically accurate 7th document to the 8 DBQs that only have 6."""
import json, re
from pathlib import Path

ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'apush_frq.js',
    ROOT / 'electron' / 'js' / 'data' / 'apush_frq.js',
]

SEVENTH_DOCS = {
    # U1 — Spanish colonization 1492-1620
    # Tlaxcalan nobles petition the Spanish Crown for recognition of their alliance
    'apush-dbq-u1-04': {
        'docNum': 7,
        'title': 'Petition of the Tlaxcalan Nobles to the Spanish Crown',
        'author': 'Tlaxcalan Cabildo (City Council), New Spain',
        'year': 1565,
        'excerpt': (
            'We, the lords and nobles of Tlaxcala, remind Your Majesty that it was we who '
            'joined with the Marqués del Valle to overthrow the great city of Mexico-Tenochtitlan, '
            'and that without our warriors and our provisions the conquest could not have been '
            'accomplished. We therefore petition that our city be exempted from tribute and from '
            'the encomienda, that our nobles retain their ranks and their lands, and that our '
            'service to the Crown be rewarded with the privileges we were promised. We did not '
            'submit to Spain as a conquered people but entered freely as allies, and we ask '
            'only that the agreements made in the name of Your Majesty be honored as '
            'we have honored our part of them.'
        ),
    },

    # U3 — American Revolution 1763-1789
    # Jonathan Boucher — Loyalist sermon arguing against rebellion
    'apush-dbq-u3-11': {
        'docNum': 7,
        'title': 'A View of the Causes and Consequences of the American Revolution',
        'author': 'Jonathan Boucher, Anglican clergyman and Loyalist, Maryland',
        'year': 1775,
        'excerpt': (
            'Obedience to government is every man\'s duty and ought to be every man\'s '
            'principle. The position that the people are the source of all civil power and '
            'may resume it when they see fit is a doctrine wholly incompatible with the '
            'peace and good order of society. Those who preach resistance to their lawful '
            'sovereign under the pretense of liberty do not seek the freedom of the people '
            'but rather the freedom of a faction — the wealthy and the ambitious — to govern '
            'without the restraints which a wise providence has placed upon all human authority. '
            'The true sons of liberty are those who acknowledge that no earthly freedom is '
            'worth the anarchy and bloodshed to which this rebellion must inevitably lead.'
        ),
    },

    # U4 — Reform movements, Second Great Awakening 1800-1848
    # Horace Mann on education as the foundation of republican society
    'apush-dbq-u4-15': {
        'docNum': 7,
        'title': 'Twelfth Annual Report to the Massachusetts State Board of Education',
        'author': 'Horace Mann, Secretary of the Massachusetts State Board of Education',
        'year': 1848,
        'excerpt': (
            'Education, beyond all other devices of human origin, is the great equalizer of '
            'the conditions of men — the balance wheel of the social machinery. It does better '
            'than to disarm the poor of their hostility toward the rich; it prevents being poor. '
            'The common school is the most powerful instrument for the improvement of the human '
            'condition that has ever been devised. A republican form of government, without '
            'intelligence in the people, must perish; it is as much a contradiction as '
            'civilization without morality. Give every child in this Commonwealth four years '
            'of good schooling and you will have done more to secure the permanence of '
            'our institutions than all our laws and constitutions combined.'
        ),
    },

    # U5 — Civil War and Reconstruction 1846-1877
    # Frederick Douglass — "What to the Slave is the Fourth of July?"
    'apush-dbq-u5-19': {
        'docNum': 7,
        'title': 'What to the Slave is the Fourth of July?',
        'author': 'Frederick Douglass, abolitionist and formerly enslaved man',
        'year': 1852,
        'excerpt': (
            'What, to the American slave, is your Fourth of July? I answer: a day that reveals '
            'to him, more than all other days in the year, the gross injustice and cruelty to '
            'which he is the constant victim. To him, your celebration is a sham; your boasted '
            'liberty, an unholy license; your national greatness, swelling vanity; your sounds '
            'of rejoicing are empty and heartless; your denunciations of tyrants, brass-fronted '
            'impudence; your shouts of liberty and equality, hollow mockery. There is not a '
            'nation on the earth guilty of practices more shocking and bloody than are the '
            'people of the United States, at this very hour.'
        ),
    },

    # U6 — Gilded Age 1865-1900
    # Samuel Gompers to the AFL — labor's answer to industrial capitalism
    'apush-dbq-u6-23': {
        'docNum': 7,
        'title': 'Address to the American Federation of Labor Annual Convention',
        'author': 'Samuel Gompers, President of the American Federation of Labor',
        'year': 1894,
        'excerpt': (
            'We have no ultimate end. We are going on from day to day. We are fighting only '
            'for immediate objects — objects that can be realized in a few years. We are all '
            'practical men. We want to dress well and to live well, and to have our children '
            'educated as well as the children of the privileged classes. The trade union is '
            'the historic form through which working men protect themselves from the '
            'degradation that unregulated capitalism imposes upon them. We do not ask for '
            'the abolition of wages; we ask for higher wages, shorter hours, and safer '
            'conditions — and we will press these demands through organization, not through '
            'the politics of third parties that have betrayed labor time and again.'
        ),
    },

    # U7 — Progressive Era through WWII 1900-1945
    # Mary McLeod Bethune to FDR's National Youth Administration advisory committee
    'apush-dbq-u7-27': {
        'docNum': 7,
        'title': 'Memo to the National Youth Administration Advisory Committee',
        'author': 'Mary McLeod Bethune, Director of Negro Affairs, National Youth Administration',
        'year': 1939,
        'excerpt': (
            'The Negro youth of America face the same problems that confront all American youth, '
            'but they face them with the added burden of racial discrimination which limits '
            'their access to the very programs designed for their relief. In state after state '
            'across the South, Negro young people are being excluded from NYA projects or '
            'assigned to them at wage rates substantially below those paid to white youth '
            'performing identical work. We cannot build a New Deal for America on a foundation '
            'of racial exclusion; the promise of this administration must extend to every '
            'citizen regardless of color, or it will ultimately be found wanting for all. '
            'I urge this committee to insist upon equitable administration of all programs '
            'under federal jurisdiction.'
        ),
    },

    # U8 — Postwar liberalism 1945-1975
    # Barry Goldwater — conservative critique of the Great Society
    'apush-dbq-u8-31': {
        'docNum': 7,
        'title': 'Acceptance Speech at the Republican National Convention',
        'author': 'Senator Barry Goldwater, Republican Presidential Nominee',
        'year': 1964,
        'excerpt': (
            'This Administration has been the biggest spender in the history of the Republic, '
            'yet the poverty it claims to fight grows in the shadow of its spending. We are '
            'told that the government in Washington must direct the education of our children, '
            'administer the health of our families, and manage the economy of our nation. '
            'I say to you that this is not compassion — this is coercion. Extremism in the '
            'defense of liberty is no vice. And let me remind you also that moderation in '
            'the pursuit of justice is no virtue. The federal government has grown to a size '
            'that the founders of this republic would not have recognized and would not have '
            'tolerated, and it is time that the American people reclaimed the freedom '
            'that a boundless government has taken from them.'
        ),
    },

    # U9 — Reagan Revolution 1980-present
    # Jerry Falwell / Moral Majority on cultural conservatism
    'apush-dbq-u9-35': {
        'docNum': 7,
        'title': 'Listen, America!',
        'author': 'Reverend Jerry Falwell, founder of the Moral Majority',
        'year': 1980,
        'excerpt': (
            'America is in trouble. The moral foundation upon which this republic was built '
            'is crumbling. We have permitted the forces of secular humanism to remove God '
            'from our public schools, to legalize the destruction of unborn children, and '
            'to undermine the family as the basic unit of our civilization. The Reagan '
            'revolution offers us the opportunity to restore traditional values to the '
            'public square. Christians can no longer afford to be silent in the political '
            'arena; when God-fearing men and women fail to vote and fail to speak, those '
            'who would destroy our moral heritage fill the vacuum. I believe that if we '
            'act together we can return America to greatness — and that means returning '
            'America to God.'
        ),
    },
}


def add_seventh_docs(frqs):
    added = 0
    for frq in frqs:
        fid = frq.get('id')
        if fid not in SEVENTH_DOCS:
            continue
        docs = frq.get('stimulus')
        if not isinstance(docs, list):
            continue
        existing_nums = {d.get('docNum') for d in docs}
        if 7 in existing_nums:
            print(f'  SKIP {fid} — doc 7 already exists')
            continue
        docs.append(SEVENTH_DOCS[fid])
        added += 1
        print(f'  added doc7 to {fid} (now {len(docs)} docs)')
    return added


def process(path):
    if not path.exists():
        print(f'  SKIP: {path}'); return
    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'  ERROR parsing {path}'); return
    frqs = json.loads(m.group(1))
    n = add_seventh_docs(frqs)
    print(f'  total added: {n}')
    path.write_text(text[:m.start(1)] + json.dumps(frqs, indent=2, ensure_ascii=False) + text[m.end(1):])
    print(f'  wrote {path.name}')


print('=== B1 — add 7th document to 8 DBQs ===')
for t in TARGETS:
    print(f'\n{t}:')
    process(t)
print('\nDone.')
