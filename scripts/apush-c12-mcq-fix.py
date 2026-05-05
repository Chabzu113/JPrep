#!/usr/bin/env python3
"""C1 + C2 — standardize APUSH MCQ topicLabels to official CB codes and add type:'MCQ'.

C2: add type:'MCQ' to every question (one-liner).
C1: two passes
  Pass 1 — canonical variants: multiple verbose versions of the same code → one CB label.
  Pass 2 — non-standard labels: informal/event names → correct CB topic code + title.
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).parent.parent
TARGETS = [
    ROOT / 'js' / 'data' / 'apush_mcq.js',
    ROOT / 'electron' / 'js' / 'data' / 'apush_mcq.js',
]

# ── Pass 1: canonicalize duplicate code variants ──────────────────────────
# All variants of the same topic code → single official CB 2026 label
CANONICAL = {
    '1.2 Native American Societies':                         '1.2 Native American Societies Before European Contact',
    '1.3 European Exploration':                              '1.3 European Exploration in the Americas',
    '1.4 Columbian Exchange':                                '1.4 Columbian Exchange, Spanish Exploration, and Conquest',
    '1.5 Labor, Slavery, and Caste':                         '1.5 Labor, Slavery, and Caste in the Spanish Colonial System',
    '2.7 Comparison':                                        '2.7 Comparison in Period 2',
    '4.13 Society of the South':                             '4.13 The Society of the South in the Early Republic',
    '4.2 Rise of Political Parties':                         '4.2 The Rise of Political Parties and the Era of Jefferson',
    '4.2 Rise of Political Parties and the Era of Jefferson':'4.2 The Rise of Political Parties and the Era of Jefferson',
    '4.5 Market Revolution':                                 '4.5 Market Revolution: Industrialization',
    '4.9 Development of American Culture':                   '4.9 The Development of an American Culture',
    '5.4 Compromise of 1850':                                '5.4 The Compromise of 1850',
    '5.5 Sectional Conflict':                                '5.5 Sectional Conflict: Regional Differences',
    '5.7 Election of 1860':                                  '5.7 Election of 1860 and Secession',
    '5.8 Military Conflict':                                 '5.8 Military Conflict in the Civil War',
    '5.9 Government Policies':                               '5.9 Government Policies During the Civil War',
    '6.12 Controversies over Government':                    '6.12 Controversies over the Role of Government in the Gilded Age',
    '6.12 Controversies over the Role of Government':        '6.12 Controversies over the Role of Government in the Gilded Age',
    '6.2 Westward Expansion':                                '6.2 Westward Expansion: Economic Development',
    '6.3 Westward Expansion':                                '6.3 Westward Expansion: Social and Cultural Development',
    '6.3 Westward Expansion: Economic Development':          '6.2 Westward Expansion: Economic Development',
    '6.8 Immigration and Migration':                         '6.8 Immigration and Migration in the Gilded Age',
    '7.12 WWII: Mobilization':                               '7.12 World War II: Mobilization',
    '7.13 WWII: Military':                                   '7.13 World War II: Military and Diplomacy',
    '7.13 World War II: Military':                           '7.13 World War II: Military and Diplomacy',
    '7.14 WWII: Home Front':                                 '7.14 World War II: Home Front',
    '7.2 Imperialism':                                       '7.2 Imperialism: Debates',
    '7.5 WWI: Diplomacy':                                    '7.5 World War I: Military and Diplomacy',
    '7.5 WWI: Military':                                     '7.5 World War I: Military and Diplomacy',
    '7.6 WWI: Home Front':                                   '7.6 World War I: Home Front',
    '7.7 WWI: Victory':                                      '7.7 World War I: Victory and Aftermath',
    '7.8 1920s: Cultural Controversies':                     '7.8 1920s: Cultural and Political Controversies',
    '8.12 The Counterculture':                               '8.12 The Youth Culture of the 1960s',
    '8.13 Environmentalism':                                 '8.14 The 1970s: Challenges',
    '8.14 1970s: The Energy Crisis and Stagflation':         '8.14 The 1970s: Challenges',
    '8.15 1970s':                                            '8.15 Politics and Culture in the 1970s',
    '8.15 1970s Foreign Policy':                             '8.15 Politics and Culture in the 1970s',
    '8.2 The Cold War':                                      '8.2 The Cold War from 1945 to 1980',
    '8.4 Culture after 1945':                                '8.5 Culture after 1945',
    '8.4 Postwar Culture':                                   '8.5 Culture after 1945',
    '8.4 Economy After 1945':                                '8.4 Economy after 1945',
    '8.4 Postwar Economy':                                   '8.4 Economy after 1945',
    '8.6 Civil Rights Movement':                             '8.6 Early Steps in the Civil Rights Movement (1940s and 1950s)',
    '8.6 The Civil Rights Movement':                         '8.6 Early Steps in the Civil Rights Movement (1940s and 1950s)',
    '8.7 Civil Rights in the 1960s':                         '8.7 The Civil Rights Movement Intensifies (1960s)',
    '8.7 The Civil Rights Movement in the 1960s':            '8.7 The Civil Rights Movement Intensifies (1960s)',
    '9.2 Conservative Movement':                             '9.2 The Conservative Movement of the 1980s',
    '9.2 The Conservative Movement':                         '9.2 The Conservative Movement of the 1980s',
}

# ── Pass 2: non-standard informal labels → CB topic code + title ──────────
NON_STANDARD = {
    '1970s Stagflation':          '8.14 The 1970s: Challenges',
    '9/11':                       '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'ACA':                        '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'Articles of Confederation':  '3.7 The Articles of Confederation',
    'Aztec and Inca empires':     '1.2 Native American Societies Before European Contact',
    'Aztec empire':               '1.2 Native American Societies Before European Contact',
    "Bacon's Rebellion":          '2.6 Slavery in the British Colonies',
    'Brown v Board':              '8.6 Early Steps in the Civil Rights Movement (1940s and 1950s)',
    'Chesapeake colonies':        '2.3 The Regions of British Colonies',
    'Civil Rights Act 1964':      '8.7 The Civil Rights Movement Intensifies (1960s)',
    'Civil War Home Front':       '5.9 Government Policies During the Civil War',
    'Civil War Origins':          '5.5 Sectional Conflict: Regional Differences',
    'Civil War Strategy':         '5.8 Military Conflict in the Civil War',
    'Civil War Turning Points':   '5.8 Military Conflict in the Civil War',
    'Clinton era':                '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'Cold War end':               '9.3 The End of the Cold War',
    'Cold War origins':           '8.2 The Cold War from 1945 to 1980',
    'Colonial resistance':        '3.3 Taxation Without Representation',
    'Columbian Exchange':         '1.4 Columbian Exchange, Spanish Exploration, and Conquest',
    'Compromise of 1850':         '5.4 The Compromise of 1850',
    'Compromise of 1877':         '5.12 Controversies over Reconstruction',
    'Congressional Reconstruction':'5.10 Reconstruction',
    'Cuban Missile Crisis':       '8.2 The Cold War from 1945 to 1980',
    'Declaration of Independence':'3.5 The American Revolution',
    'Emancipation Proclamation':  '5.9 Government Policies During the Civil War',
    'European motives':           '1.3 European Exploration in the Americas',
    'Federalist vs Anti-Federalist':'3.8 The Constitutional Convention and Debates over Ratification',
    'Fifteenth Amendment':        '5.10 Reconstruction',
    'French and Indian War':      '3.2 The Seven Years War (French and Indian War)',
    'Gilded Age industry':        '6.6 The Rise of Industrial Capitalism',
    'Gold vs Silver Debate':      '6.12 Controversies over the Role of Government in the Gilded Age',
    'Great Recession':            '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'Gulf War':                   '9.3 The End of the Cold War',
    'Hamilton financial plan':    '3.10 Shaping a New Republic',
    'Immigration Waves':          '6.8 Immigration and Migration in the Gilded Age',
    'Inca empire':                '1.2 Native American Societies Before European Contact',
    'Iraq War':                   '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'Jacksonian democracy':       '4.8 Jackson and Federal Power',
    'Jefferson presidency':       '4.2 The Rise of Political Parties and the Era of Jefferson',
    'Labor Unions':               '6.7 Labor in the Gilded Age',
    'Lincoln-Douglas Debates':    '5.6 Failure of Compromise',
    'Louisiana Purchase':         '4.4 America on the World Stage',
    'Marshall Plan':              '8.2 The Cold War from 1945 to 1980',
    'McCarthyism':                '8.3 The Red Scare',
    'Mexican-American War':       '5.3 The Mexican-American War',
    'Middle colonies':            '2.3 The Regions of British Colonies',
    'NAFTA':                      '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'Native American societies':  '1.2 Native American Societies Before European Contact',
    'New Deal programs':          '7.10 New Deal Policies',
    'New England colonies':       '2.3 The Regions of British Colonies',
    'Obama presidency':           '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'Portuguese exploration':     '1.3 European Exploration in the Americas',
    'Puritan theology':           '2.3 The Regions of British Colonies',
    'Reagan Revolution':          '9.2 The Conservative Movement of the 1980s',
    'Reaganomics':                '9.2 The Conservative Movement of the 1980s',
    'Reconstruction Amendments':  '5.10 Reconstruction',
    'Reconstruction Implementation':'5.10 Reconstruction',
    'Reconstruction Resistance':  '5.11 Failure of Reconstruction',
    'Robber Barons':              '6.6 The Rise of Industrial Capitalism',
    'Salutary neglect':           '2.4 Transatlantic Trade',
    'Secession Crisis':           '5.7 Election of 1860 and Secession',
    'Second Great Awakening':     '4.10 The Second Great Awakening',
    'Spanish colonization':       '1.5 Labor, Slavery, and Caste in the Spanish Colonial System',
    'Transcontinental Railroad':  '6.2 Westward Expansion: Economic Development',
    'Truman Doctrine':            '8.2 The Cold War from 1945 to 1980',
    'Urbanization':               '6.8 Immigration and Migration in the Gilded Age',
    'Vertical Integration':       '6.6 The Rise of Industrial Capitalism',
    'Vietnam War escalation':     '8.9 The Vietnam War',
    'Voting Rights Act 1965':     '8.7 The Civil Rights Movement Intensifies (1960s)',
    'War of 1812':                '4.4 America on the World Stage',
    'War on Terror':              '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'Watergate':                  '8.15 Politics and Culture in the 1970s',
    'abolitionism':               '4.11 An Age of Reform',
    'colonial society':           '2.3 The Regions of British Colonies',
    'containment policy':         '8.2 The Cold War from 1945 to 1980',
    'demographic collapse':       '1.5 Labor, Slavery, and Caste in the Spanish Colonial System',
    'encomienda system':          '1.5 Labor, Slavery, and Caste in the Spanish Colonial System',
    'gold vs silver debate':      '6.12 Controversies over the Role of Government in the Gilded Age',
    'horizontal integration':     '6.6 The Rise of Industrial Capitalism',
    'immigration waves':          '6.8 Immigration and Migration in the Gilded Age',
    'indentured servitude':       '2.6 Slavery in the British Colonies',
    'labor unions':               '6.7 Labor in the Gilded Age',
    'market revolution':          '4.5 Market Revolution: Industrialization',
    'mercantilism':               '2.4 Transatlantic Trade',
    'political polarization':     '9.7 Domestic Developments in the 1990s through the Early 21st Century',
    'reform movements':           '4.11 An Age of Reform',
    'robber barons':              '6.6 The Rise of Industrial Capitalism',
    'transatlantic slave trade':  '2.6 Slavery in the British Colonies',
    'triangular trade':           '2.4 Transatlantic Trade',
    'vertical integration':       '6.6 The Rise of Industrial Capitalism',
    "women's rights":             '4.11 An Age of Reform',
}

ALL_FIXES = {**CANONICAL, **NON_STANDARD}


def process(path):
    if not path.exists():
        print(f'  SKIP: {path}'); return

    text = path.read_text()
    m = re.search(r'=\s*(\[.*\])\s*;?\s*$', text, re.DOTALL)
    if not m:
        print(f'  ERROR parsing {path}'); return

    questions = json.loads(m.group(1))
    c1 = c2 = 0

    for q in questions:
        # C2 — add type field
        if 'type' not in q:
            q['type'] = 'MCQ'
            c2 += 1

        # C1 — fix topicLabel
        label = q.get('topicLabel', '')
        if label and label in ALL_FIXES:
            q['topicLabel'] = ALL_FIXES[label]
            c1 += 1

    # Verify: count remaining non-standard labels
    remaining = [q['topicLabel'] for q in questions
                 if q.get('topicLabel') and not re.match(r'^\d+\.\d+', q['topicLabel'])]

    print(f'  C1 relabeled: {c1}  |  C2 type added: {c2}  |  remaining non-standard: {len(remaining)}')
    if remaining:
        print(f'  still non-standard: {sorted(set(remaining))}')

    path.write_text(text[:m.start(1)] + json.dumps(questions, indent=2, ensure_ascii=False) + text[m.end(1):])
    print(f'  wrote {path.name}')


print('=== C1 + C2 APUSH MCQ fixes ===')
for t in TARGETS:
    print(f'\n{t}:')
    process(t)
print('\nDone.')
