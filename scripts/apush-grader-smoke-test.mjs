// apush-grader-smoke-test.mjs
// Tests 3 SAQs, 3 LEQs, 3 DBQs each at bad / mid / best quality.
// Usage: node scripts/apush-grader-smoke-test.mjs

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const root       = join(__dirname, '..');

// ── shims + load grader ───────────────────────────────────────────────────
global.window = global;
const configSrc = readFileSync(join(root, 'js/data/frqConfigs.js'), 'utf8');
global.FRQ_CONFIGS = new Function(configSrc + '\nreturn FRQ_CONFIGS;')();
const graderSrc = readFileSync(join(root, 'js/apushGrader.js'), 'utf8');
new Function('window', 'FRQ_CONFIGS', graderSrc)(global, global.FRQ_CONFIGS);
const grade = window.APUSHGrader.grade;

// ── helper ────────────────────────────────────────────────────────────────
const COLS = 80;
const hr   = (ch = '─') => ch.repeat(COLS);

function showResult(label, result, maxPts) {
  const { score } = result;
  const total = score.total ?? score.earned ?? 0;
  const bar   = '█'.repeat(total) + '░'.repeat(maxPts - total);
  console.log(`  ${label.padEnd(6)} │ ${bar} ${total}/${maxPts}`);

  // Show breakdown
  const bd = score.breakdown;
  if (bd) {
    const parts = Object.entries(bd)
      .filter(([, v]) => v !== null && v !== undefined)
      .map(([k, v]) => `${k}:${v}`)
      .join('  ');
    console.log(`         │ ${parts}`);
  }

  // Show first feedback line if any
  const fb = result.feedback;
  if (fb) {
    const lines = (Array.isArray(fb) ? fb : [fb])
      .flatMap(f => (typeof f === 'string' ? [f] : Object.values(f)))
      .filter(Boolean);
    if (lines[0]) console.log(`         │ ↳ ${String(lines[0]).slice(0, 72)}`);
  }
}

function section(title) {
  console.log('\n' + hr('═'));
  console.log(`  ${title}`);
  console.log(hr('═'));
}

function subsection(id, prompt) {
  console.log('\n' + hr());
  console.log(`  ${id}`);
  console.log(`  "${prompt.slice(0, 74)}${prompt.length > 74 ? '…' : ''}"`);
  console.log(hr());
}

// ══════════════════════════════════════════════════════════════════════════
//  SAQs  (3 pts each)
// ══════════════════════════════════════════════════════════════════════════
section('SAQ TESTS  (max 3 pts each)');

// ── SAQ 1: Unit 1 — Spanish colonization / encomienda ──────────────────
subsection('apush-saq-u1-01',
  'Native Resistance and Adaptation Within the Encomienda System');

const saq1Bad = {
  a: 'Native peoples did not like the Spanish.',
  b: 'Disease killed many people and things got worse.',
  c: 'Both empires were similar because Spain controlled them.',
};
const saq1Mid = {
  a: 'Indigenous peoples resisted the encomienda system through various means including the Pueblo Revolt, which challenged Spanish control in the Southwest.',
  b: 'The Columbian Exchange brought smallpox to the Americas, which caused a demographic collapse among native populations, reducing the labor supply for the encomienda system.',
  c: 'One difference is that the Aztec empire had a centralized tribute network that Spain could co-opt, whereas the Inca empire required more direct administration because the Inca state had been more integrated.',
};
const saq1Best = {
  a: 'Indigenous peoples actively undermined the encomienda system through flight, foot-dragging, and armed revolt. The Pueblo Revolt of 1680 drove Spanish settlers from New Mexico for twelve years, demonstrating that coercive labor extraction could provoke sustained organized resistance rather than passive compliance. Native flight to frontier regions beyond encomendero reach also eroded the labor pool that made encomiendas profitable, therefore forcing the Spanish to develop alternative labor systems.',
  b: 'The demographic collapse caused by Old World diseases such as smallpox, measles, and typhus killed an estimated 50–90% of the indigenous population within a century of contact, destroying the labor base on which the encomienda depended. Because the mita and encomienda required tribute and labor from large settled communities, population collapse made it physically impossible for surviving workers to meet tribute quotas, resulting in widespread famine and the collapse of entire encomienda grants. This forced the Spanish Crown to experiment with the repartimiento system and accelerate African slave imports to sustain colonial production.',
  c: 'A key difference is that the Aztec empire\'s pre-existing tribute infrastructure allowed Spanish officials to substitute themselves at the top of an already-functioning system, enabling relatively rapid administrative consolidation in New Spain by the 1530s. The Inca state had been more directly administered, meaning its collapse created a greater political vacuum; persistent resistance from the Neo-Inca state at Vilcabamba and civil wars among the conquistadors meant that effective Spanish control of Peru was not fully established until Viceroy Toledo\'s reorganization in the 1570s, nearly fifty years after the conquest.',
};

showResult('bad',  grade(saq1Bad,  'saq', 1, 'apush'), 3);
showResult('mid',  grade(saq1Mid,  'saq', 1, 'apush'), 3);
showResult('best', grade(saq1Best, 'saq', 1, 'apush'), 3);

// ── SAQ 2: Unit 5 — Compromise of 1850 / Reconstruction ───────────────
subsection('apush-saq-u5-16',
  'The Compromise of 1850 and the Limits of Legislative Settlement');

const saq2Bad = {
  a: 'The Compromise of 1850 was bad because it made people angry.',
  b: 'Popular sovereignty let people vote on slavery which caused problems.',
  c: 'The North and South had different views about the law.',
};
const saq2Mid = {
  a: 'The Fugitive Slave Act, part of the Compromise of 1850, required Northern citizens to help return escaped enslaved people, which outraged many Northerners and increased antislavery sentiment.',
  b: 'Popular sovereignty allowed settlers in new territories to vote on slavery, which caused conflict because pro-slavery and antislavery settlers flooded into Kansas, resulting in violence known as Bleeding Kansas.',
  c: 'Northerners saw the Fugitive Slave Act as an unconstitutional expansion of federal power that violated personal liberty laws, while Southerners saw it as a constitutional protection of property rights guaranteed by the Fifth Amendment.',
};
const saq2Best = {
  a: 'The Fugitive Slave Act of 1850, the most controversial component of the Compromise, directly implicated Northern citizens in slavery by requiring them to assist in the capture and return of freedom-seeking people, thereby transforming slavery from a distant Southern institution into a Northern moral dilemma. Many Northern communities enacted personal liberty laws in direct defiance of the Act, and dramatic rescue attempts in cities like Boston mobilized antislavery opinion in ways that no previous legislation had. Rather than preserving sectional harmony, the Act energized the abolitionist movement and drove many previously neutral Northerners toward the antislavery cause.',
  b: 'Popular sovereignty, as embedded in the Kansas-Nebraska Act that built on the Compromise\'s framework, created an immediate incentive for both pro-slavery and antislavery settlers to flood into Kansas to determine its future status, producing a violent competition that contemporaries called Bleeding Kansas. The mechanism was the replacement of a fixed geographic boundary — the Missouri Compromise line — with a democratic process that could be manipulated by whoever could put more settlers on the ground first. This turned western territories into contested battlegrounds for the future of slavery rather than peaceful regions gradually integrating into the union.',
  c: 'The fundamental difference in how North and South interpreted the Fugitive Slave Act revealed irreconcilable conceptions of federal power: Northerners argued that requiring Northern officials and citizens to participate in slave-catching was an unconstitutional extension of Southern power over free states, violating the principle that each state had authority over its own domestic institutions. Southerners, by contrast, insisted the Act was a constitutionally required protection of property rights, and that Northern resistance to it was itself an unconstitutional nullification of federal law. Each section\'s position was internally consistent but incompatible with the other, suggesting the Compromise had merely postponed rather than resolved the underlying conflict.',
};

showResult('bad',  grade(saq2Bad,  'saq', 5, 'apush'), 3);
showResult('mid',  grade(saq2Mid,  'saq', 5, 'apush'), 3);
showResult('best', grade(saq2Best, 'saq', 5, 'apush'), 3);

// ── SAQ 3: Unit 8 — McCarthyism / Cold War ─────────────────────────────
subsection('apush-saq-u8-28',
  'McCarthyism and the Limits of Anti-Communist Consensus');

const saq3Bad = {
  a: 'McCarthyism was when the government accused people of being communists.',
  b: 'The Korean War made things hard for Truman and McCarthy used that.',
  c: 'McCarthyism was different from COINTELPRO because they happened at different times.',
};
const saq3Mid = {
  a: 'McCarthyism undermined democratic principles because it used guilt by association and loyalty oaths to silence dissent, which was the same kind of repression America claimed to oppose in Soviet communism.',
  b: 'After China fell to communism in 1949 and the Korean War began in 1950, Democrats were politically vulnerable to charges of being soft on communism, which made it easier for McCarthy to maintain his accusations without serious challenge.',
  c: 'McCarthyism targeted government employees and academics through public congressional hearings, while COINTELPRO operated covertly through illegal surveillance and targeted civil rights and anti-war activists rather than suspected communists.',
};
const saq3Best = {
  a: 'McCarthyism\'s most damaging contradiction was that in defending democratic freedom against Soviet totalitarianism, it deployed totalitarian tools — guilt by association, secret informants, loyalty oaths, and blacklisting without due process — that mirrored the very system it claimed to oppose. The House Un-American Activities Committee and McCarthy\'s Senate subcommittee destroyed careers based on associations, suspected beliefs, and refusal to name names rather than on actual criminal acts, violating the presumption of innocence fundamental to American law. This hypocrisy undermined America\'s credibility in the Cold War struggle, as Soviet propagandists used HUAC hearings and the execution of the Rosenbergs to argue that American democracy was no freer than communist governance.',
  b: 'The "Who Lost China?" narrative Republicans developed after Mao\'s 1949 victory created a political trap: any Democrat who questioned McCarthy\'s evidence risked being accused of protecting communist infiltrators responsible for the fall of China. The Korean War\'s frustrating stalemate reinforced this dynamic by making Truman appear weak on communism even as American troops fought and died to contain it. McCarthy exploited this defensive posture with maximum aggression, knowing that the political cost of challenging him — being labeled a communist sympathizer — exceeded the cost of letting his accusations stand, which silenced potential Democratic opposition and gave him credibility disproportionate to his actual evidence.',
  c: 'A fundamental difference was in targets, methods, and legal framework: McCarthyism operated through public congressional hearings targeting primarily white intellectuals, government employees, and Hollywood figures suspected of Communist Party affiliation, with the exposure itself — the public accusation — functioning as the punishment. COINTELPRO, by contrast, was a covert FBI program operating outside any congressional authorization that specifically targeted Black civil rights organizations including the SCLC and Black Panther Party, along with antiwar groups and the American Indian Movement, using illegal wiretaps, forged documents, and deliberate provocation to destroy these organizations from within. The shift from public exposure to covert destruction reflected both the government\'s more sophisticated counter-insurgency toolkit and the explicitly racial dimension of its definition of subversion.',
};

showResult('bad',  grade(saq3Bad,  'saq', 8, 'apush'), 3);
showResult('mid',  grade(saq3Mid,  'saq', 8, 'apush'), 3);
showResult('best', grade(saq3Best, 'saq', 8, 'apush'), 3);

// ══════════════════════════════════════════════════════════════════════════
//  LEQs  (6 pts each)
// ══════════════════════════════════════════════════════════════════════════
section('LEQ TESTS  (max 6 pts each)');

// ── LEQ 1: Unit 3 — Colonial resistance / independence ─────────────────
subsection('apush-leq-u3-10',
  'Ideological vs. Economic Roots of Colonial Resistance');

const leq1Bad =
  `The American Revolution happened because the colonists wanted freedom.
   The British taxed them and they got angry.
   People fought and eventually won independence.`;

const leq1Mid =
  `The American Revolution was primarily ideological rather than economic.
   The Stamp Act and Townshend Acts provoked resistance, but colonists had already
   developed ideas about self-governance during salutary neglect.
   Thomas Paine's Common Sense argued for independence on natural rights grounds,
   which caused many colonists to shift from defending English liberties to claiming
   universal rights. The Declaration of Independence therefore represented a genuine
   ideological transformation. However, economic interests also shaped resistance
   since merchants benefited from smuggling and protested trade restrictions.`;

const leq1Best =
  `Prior to 1763, decades of salutary neglect had allowed colonial assemblies to develop
   the practical habit of self-governance, creating an expectation of constitutional rights
   that Britain\'s post-war assertions of parliamentary sovereignty would violate.
   Although economic grievances initially triggered resistance, the American Revolution was
   driven more fundamentally by ideological transformation because colonists progressively
   radicalized their arguments from English constitutional rights to universal natural rights,
   a shift that made continued membership in the British empire intellectually impossible.
   The escalation of colonial arguments demonstrates this ideological development: the initial
   response to the Stamp Act framed resistance in terms of no taxation without representation,
   asserting traditional English liberties. By 1776, the Declaration of Independence had
   abandoned English constitutional law entirely, claiming that governments derive their just
   powers from the consent of the governed and that any government destructive of natural
   rights may be altered or abolished — a genuinely revolutionary philosophical position.
   The economic argument is insufficient because Britain repealed the Stamp Act in 1766
   and most Townshend duties in 1770, yet resistance continued and intensified, whereas
   purely economic grievances should have diminished once the specific taxes were removed.
   Colonists\' insistence on the repeal of the Declaratory Act, which simply asserted
   Parliament\'s right to legislate in all cases, showed they were defending a principle
   of self-governance rather than a specific economic complaint.
   The Federalist Papers and Anti-Federalist debates of 1787–1788 further demonstrate
   that the Revolution\'s ideological legacy — the question of how to structure legitimate
   government — continued to drive political conflict long after economic grievances with
   Britain had been resolved.`;

showResult('bad',  grade(leq1Bad,  'leq', 3, 'apush'), 6);
showResult('mid',  grade(leq1Mid,  'leq', 3, 'apush'), 6);
showResult('best', grade(leq1Best, 'leq', 3, 'apush'), 6);

// ── LEQ 2: Unit 6 — Industrial consolidation / Gilded Age ──────────────
subsection('apush-leq-u6-22',
  'Industrial Consolidation and Its Challengers in the Gilded Age');

const leq2Bad =
  `The Gilded Age was a time of big businesses and inequality.
   Andrew Carnegie made a lot of money in steel.
   Workers were treated badly and formed unions to fight back.`;

const leq2Mid =
  `The Gilded Age transformed American economic and political life because industrial
   consolidation concentrated power in a small number of corporations.
   Andrew Carnegie used vertical integration to dominate the steel industry, which caused
   smaller competitors to fail and workers to lose bargaining power.
   The Homestead Strike of 1892 demonstrated the limits of labor resistance against
   consolidated capital. The Knights of Labor and the American Federation of Labor both
   challenged corporate power, but the AFL focused on skilled workers while the Knights
   sought broader solidarity. The Populist movement demanded railroad regulation and
   an income tax, resulting in the Interstate Commerce Commission, though its initial
   powers were limited.`;

const leq2Best =
  `Before the Gilded Age, American manufacturing was organized around artisan production
   and small competitive firms; the railroads\' creation of a continental market and new
   technologies of steel production and oil refining made industrial consolidation both
   possible and, from a capitalist perspective, rational.
   While industrial consolidation generated genuine productivity gains and material abundance,
   it simultaneously concentrated economic and political power in ways that threatened
   democratic governance and generated the organized movements that would force regulatory
   constraints on corporate power — making the Gilded Age transformative in both directions.
   Andrew Carnegie\'s vertical integration of the steel industry, which brought iron ore mines,
   coking coal, railroads, and finishing mills under single ownership, demonstrates how
   consolidation transformed production: steel prices fell dramatically, enabling the
   construction of railroads and skyscrapers, while Carnegie\'s control of the entire
   production chain eliminated workers\' ability to disrupt any single bottleneck.
   The Homestead Strike of 1892 therefore ended in the permanent destruction of the
   Amalgamated Association of Iron and Steel Workers, showing that consolidation had
   fundamentally altered the balance of power between capital and labor.
   The political response demonstrates that consolidation\'s challengers were equally
   consequential: the Grange movement and the Populist Party demanded railroad regulation,
   resulting in the Interstate Commerce Commission; the Sherman Antitrust Act reflected
   the political system\'s recognition that monopoly power threatened competition itself;
   and Samuel Gompers\' AFL pursued pure-and-simple unionism as a pragmatic response
   to the failure of the Knights of Labor\'s broader industrial vision.
   The Gilded Age\'s most significant legacy was revealing the inadequacy of
   nineteenth-century governmental structures to regulate an industrial economy,
   creating the pressure that would produce the Progressive Era\'s regulatory state.`;

showResult('bad',  grade(leq2Bad,  'leq', 6, 'apush'), 6);
showResult('mid',  grade(leq2Mid,  'leq', 6, 'apush'), 6);
showResult('best', grade(leq2Best, 'leq', 6, 'apush'), 6);

// ── LEQ 3: Unit 9 — Reagan Revolution ─────────────────────────────────
subsection('apush-leq-u9-34',
  'Continuity and Change in American Global Power and Domestic Consensus');

const leq3Bad =
  `Ronald Reagan was president in the 1980s and he changed a lot of things.
   He cut taxes and built up the military.
   After he left, other presidents continued his policies.`;

const leq3Mid =
  `Reagan\'s presidency fundamentally transformed domestic priorities because his supply-side
   economics and military buildup reshaped fiscal policy for decades.
   The Reagan tax cuts reduced government revenue, which caused large deficits that
   constrained domestic spending throughout the 1990s and contributed to budget conflicts.
   The Cold War arms race drove military spending higher, therefore crowding out social programs.
   However, demographic change and cultural conservatism were also important domestic forces:
   the Moral Majority mobilized evangelical Christians and contributed to Reagan\'s coalition.
   The collapse of the Soviet Union in 1991 allowed a brief "peace dividend," but
   September 11 and the War on Terror restarted military spending pressures.`;

const leq3Best =
  `By 1981, the stagflation of the 1970s had discredited Keynesian demand management and
   created an opening for the supply-side economics that Reagan\'s coalition — combining
   economic libertarians, evangelical Christians, and disaffected working-class Democrats —
   had been developing since Goldwater\'s 1964 campaign.
   While American global power commitments — Cold War military spending, the War on Terror —
   shaped domestic priorities through their budgetary consequences, internal forces including
   demographic change, partisan realignment, and economic transformation were more significant
   in determining the direction of American society between 1981 and 2012, because the
   most consequential domestic political developments were responses to internal social
   changes rather than to foreign policy imperatives.
   Reagan\'s defense buildup, funded by deficit spending rather than tax increases, produced
   structural deficits that constrained fiscal politics for the following three decades and
   drove the budget confrontations that defined the Clinton era — demonstrating that Cold War
   commitments had real domestic budgetary consequences.
   However, the rise of the Christian Right and the Moral Majority, the demographic
   transformation produced by immigration from Latin America and Asia, and the deindustrialization
   of the Rust Belt driven by globalization were fundamentally internal developments that
   reshaped the electorate and the party system independently of foreign policy. Obama\'s 2008
   coalition — built on minority voters, young voters, and college-educated whites — reflected
   demographic change that had been building for decades, not a response to any foreign policy event.
   The Tea Party movement of 2009, which emerged in direct response to domestic spending and
   the Affordable Care Act rather than to any foreign policy development, demonstrates that
   by the Obama era the most politically energizing issues were overwhelmingly domestic.
   Reaganomics, supply-side economics, and the conservative revolution thus had a durable
   domestic legacy primarily through their reshaping of tax policy, regulatory philosophy,
   and partisan identity — consequences that persisted long after the Cold War ended.`;

showResult('bad',  grade(leq3Bad,  'leq', 9, 'apush'), 6);
showResult('mid',  grade(leq3Mid,  'leq', 9, 'apush'), 6);
showResult('best', grade(leq3Best, 'leq', 9, 'apush'), 6);

// ══════════════════════════════════════════════════════════════════════════
//  DBQs  (7 pts each — complexity always manual, shown as 6 auto-gradeable)
// ══════════════════════════════════════════════════════════════════════════
section('DBQ TESTS  (max 7 pts — complexity manual, expect ≤6 auto)');

// ── DBQ 1: Unit 2 — Bacon's Rebellion / slavery shift ──────────────────
subsection('apush-dbq-u2-36',
  'Labor, Race, and Social Control in the Seventeenth-Century English Colonies');

const dbq1Bad =
  `Slavery became more common in Virginia over time.
   Document 1 mentions servants working on plantations.
   People disagreed about labor and race (Doc 2).
   The colony had many problems during this period.`;

const dbq1Mid =
  `The shift from indentured servitude to racial slavery was driven by elite desires for
   social control as much as economic necessity.
   Bacon\'s Rebellion showed that freed indentured servants were dangerous (Doc1); the
   author\'s perspective as a planter reveals his fear of the landless poor.
   Virginia planters explicitly calculated that enslaved labor was more profitable (Doc4);
   his purpose as a tobacco planter was to defend economic investment.
   The headright system and indentured servitude created a class of armed, landless men
   who had nothing to lose, which caused colonial elites to seek a more controllable labor force.
   The Virginia Slave Codes legally defined racial slavery as permanent and hereditary (Doc6).
   Outside the documents, Nat Turner\'s rebellion centuries later demonstrated that racial
   slavery never eliminated resistance, complicating the social control argument.`;

const dbq1Best =
  `During the 1640s–1670s, the Chesapeake tobacco economy produced significant planter
   wealth while creating a volatile class of freed indentured servants who were landless,
   armed, and resentful — a social problem that Bacon\'s Rebellion in 1676 made impossible
   to ignore and that drove the systematic transition to racial chattel slavery.
   The shift from indentured servitude to racial slavery was primarily driven by colonial
   elites\' desire for social control rather than economic necessity, because the specific
   timing and character of the transition was shaped by the fear of interracial class
   alliance revealed by Bacon\'s Rebellion rather than by any sudden change in the
   economics of enslaved versus servant labor.
   Richard Norwood\'s account reveals the core social problem: freed servants grew restless
   and discontented, demanding land as though they were gentlemen (Doc1); as a Virginia
   planter writing for an English audience, his purpose was to legitimate the colonial
   hierarchy while acknowledging its instability, showing that elite concern about freed
   servants predated the rebellion itself.
   Giles Bland\'s testimony captures the perspective of the rebellion\'s participants:
   men who had labored in tobacco fields only to find themselves landless and indebted
   joined Bacon because they had exhausted legal options (Doc2); his point of view as a
   rebel officer explains why Bacon\'s forces drew from multiple racial groups, since
   economic grievance rather than racial identity was the unifying factor.
   William Berkeley explicitly acknowledged the danger: freed servants presented a
   dangerous and ungovernable element and he urged finding a labor force that would not
   swell the ranks of the discontented upon gaining freedom (Doc3); his purpose as Royal
   Governor was to maintain order, revealing that the transition to slavery was consciously
   framed as a solution to the political problem of free white labor.
   The economic calculation appears in William Fitzhugh\'s 1684 letter, where he calculated
   that enslaved labor was cheaper in the long run because children were also enslaved —
   an investment that multiplied itself (Doc4). Outside the documents, the Royal African
   Company\'s loss of its slave trade monopoly in 1698 reduced the price of enslaved people,
   making the economic case for the transition more compelling precisely when social control
   demands had already made it politically necessary.
   The legal architecture of racial slavery — the partus sequitur ventrem doctrine that
   children followed the condition of the mother (Doc6) — demonstrates that planters were
   not merely substituting one labor system for another but constructing an entirely new
   system of hereditary, racial unfreedom designed to be self-reproducing and permanent.
   Samuel Sewall\'s antislavery pamphlet shows that contemporaries recognized the moral
   dimensions of this choice (Doc5); his point of view as a Massachusetts magistrate
   outside the plantation economy allowed him to critique what Chesapeake planters
   rationalized as necessity.`;

showResult('bad',  grade(dbq1Bad,  'dbq', 2, 'apush'), 7);
showResult('mid',  grade(dbq1Mid,  'dbq', 2, 'apush'), 7);
showResult('best', grade(dbq1Best, 'dbq', 2, 'apush'), 7);

// ── DBQ 2: Unit 5 — Slavery expansion / Civil War ──────────────────────
subsection('apush-dbq-u5-19',
  'Slavery, Expansion, and the Fracturing of the Union');

const dbq2Bad =
  `The Civil War was caused by slavery and states\' rights.
   Document 1 shows that people disagreed about the territories.
   The country split apart because of these disagreements (Doc 2).`;

const dbq2Mid =
  `The expansion of slavery into western territories was the primary cause of the Civil War.
   David Wilmot\'s Proviso argued that slavery should be excluded from territories won in
   the Mexican War (Doc1); his purpose as a Northern Democrat was to preserve western
   land for free white labor.
   Calhoun\'s address shows that Southerners framed slavery\'s expansion as a constitutional
   right (Doc2), while Lincoln argued that the nation could not endure permanently half
   slave and half free (Doc5). The Dred Scott decision removed any possibility of
   congressional compromise (Doc4) because it declared that Congress had no authority
   to restrict slavery anywhere. Outside the documents, John Brown\'s raid on Harper\'s
   Ferry intensified sectional polarization because it convinced Southerners that
   Northern abolitionists intended to incite slave rebellion.`;

const dbq2Best =
  `Between 1820 and 1850, a series of legislative compromises had managed the question of
   slavery\'s expansion by maintaining a geographic boundary and a Senate balance between
   slave and free states; the Mexican War destroyed both by adding vast territories whose
   status could not be settled by existing formulas, making the conflict over slavery\'s
   expansion the central crisis of American political life.
   The question of slavery\'s expansion into new territories, rather than disagreements
   over constitutional authority or economic interests, was the primary cause of sectional
   conflict because the other issues — tariffs, internal improvements, states\' rights —
   had all been managed through compromise, whereas slavery\'s expansion in a republic
   committed to majority rule created a zero-sum conflict in which both sections\' core
   interests were irreconcilable.
   The Wilmot Proviso represents the Northern free-labor position at its most explicit:
   David Wilmot sought to reserve western territories for free white labor and argued
   that the blessings of freedom should extend over every acre of territory acquired
   from Mexico (Doc1); his point of view as a Northern Democrat who opposed slavery on
   economic rather than moral grounds shows that even non-abolitionists found slavery\'s
   expansion unacceptable, broadening the anti-expansion coalition beyond committed
   abolitionists.
   Calhoun\'s Southern Address articulates the constitutional logic of the pro-slavery
   position: that the right of property in slaves was recognized by the Constitution and
   that excluding slaveholders from common territories was a violation of that compact
   (Doc2); written to Southern constituents, his purpose was to build a united Southern
   front by framing the issue as constitutional rights rather than merely economic interest.
   The Dred Scott decision represents the judicial endpoint of Calhoun\'s logic: Chief
   Justice Taney ruled that Congress had no authority to restrict slavery in the territories,
   making a legislative settlement constitutionally impossible (Doc4); as a Southern
   slaveholder himself, his perspective shaped a ruling that eliminated the middle ground
   and forced the question to its ultimate resolution.
   Outside the documents, the Kansas-Nebraska Act of 1854, which repealed the Missouri
   Compromise line and led to the violent guerrilla war of Bleeding Kansas, demonstrates
   that the expansion question could not be depoliticized through the mechanism of popular
   sovereignty — the Kansas crisis destroyed the second party system and produced the
   Republican Party as an explicitly sectional response.
   Lincoln\'s argument in the Alton debate that the nation could not endure permanently
   half slave and half free captures the ultimate ideological stakes (Doc5): the existence
   of slavery in half the country was not merely a regional arrangement but a permanent
   challenge to the free-labor ideology that defined Northern economic and political identity,
   making continued union under those conditions increasingly unacceptable to the Northern majority.`;

showResult('bad',  grade(dbq2Bad,  'dbq', 5, 'apush'), 7);
showResult('mid',  grade(dbq2Mid,  'dbq', 5, 'apush'), 7);
showResult('best', grade(dbq2Best, 'dbq', 5, 'apush'), 7);

// ── DBQ 3: Unit 8 — Postwar liberalism 1945-1975 ───────────────────────
subsection('apush-dbq-u8-31',
  'Consensus or Conflict: The Limits of American Liberalism, 1945-1975');

const dbq3Bad =
  `The liberal reform agenda tried to help people but had mixed results.
   Document 1 is about civil rights.
   The Great Society was a set of programs (Doc 2).
   There were protests and conflicts during this period.`;

const dbq3Mid =
  `The liberal reform agenda achieved significant legislative victories but failed to
   address fundamental economic inequality.
   Martin Luther King Jr. criticized the white moderate for preferring negative peace
   to positive peace (Doc1); his purpose as a civil rights leader was to demand urgency.
   Johnson\'s Great Society aimed to end poverty and racial injustice (Doc2), but
   Fannie Lou Hamer\'s testimony reveals that the Democratic Party itself excluded
   Black Southerners from full participation (Doc3), which caused movement activists
   to question whether working within the system could produce genuine change.
   Nixon\'s New Federalism address proposed dismantling Great Society programs (Doc4);
   his purpose was to roll back federal power therefore reshaping the reform agenda.
   Outside the documents, the assassination of Martin Luther King Jr. in 1968 and
   the subsequent riots demonstrated the limits of legislative reform in addressing
   structural economic inequality.`;

const dbq3Best =
  `The Great Society programs of the mid-1960s represented the high-water mark of
   postwar American liberalism, enacted at a moment of unprecedented legislative
   momentum following Kennedy\'s assassination and Johnson\'s landslide victory;
   but the Vietnam War, urban uprisings, and conservative backlash converged to
   undermine both the programs and the coalition that had created them by the early 1970s.
   The liberal reform agenda achieved historic legislative victories in civil rights
   and social policy, but its inability to address structural economic inequality and
   racial justice beyond the formal legal level — combined with the political costs
   of the Vietnam War and the rise of conservative opposition — meant that it transformed
   American life without fully addressing the fundamental inequalities it had promised to end.
   King\'s Letter from Birmingham Jail articulates the central tension of liberal reform:
   that freedom is never voluntarily given by the oppressor but must be demanded, and that
   white moderates who preferred negative peace to positive peace were as great an obstacle
   as explicit segregationists (Doc1); his historical situation as a jailed activist in
   Birmingham gave his critique moral authority and addressed it specifically to the liberal
   white allies whose moderation he found more frustrating than outright opposition.
   Johnson\'s Great Society address frames the liberal program in its most ambitious terms —
   demanding an end to poverty and racial injustice, to which we are totally committed (Doc2);
   his purpose as president was to build legislative momentum, and the speech represents
   the ideological high point of postwar liberalism before Vietnam consumed his presidency.
   Fannie Lou Hamer\'s testimony before the credentials committee reveals the limits of
   liberal inclusion from below: even as Johnson was declaring war on poverty, Black
   Mississippians seeking recognition within the Democratic Party were being silenced
   to preserve the Southern white vote (Doc3); her point of view as a MFDP delegate
   who had been beaten for attempting to register voters shows that liberal coalition
   management could require sacrificing Black political interests for white Southern support.
   Nixon\'s New Federalism address explicitly frames the conservative response as a
   rejection of centralized Great Society governance (Doc4); his purpose was to dismantle
   the administrative architecture of the liberal state by returning power to states that
   were in many cases hostile to the civil rights gains the Great Society had produced.
   The NOW Statement of Purpose demonstrates that liberal reform generated its own
   internal challengers: second-wave feminism emerged precisely because the civil rights
   framework had not been extended to gender equality (Doc6), requiring a new movement
   to demand what liberalism had promised but not delivered.
   Outside the documents, the War on Poverty\'s Community Action Programs generated
   significant local political mobilization among poor communities, but Congressional
   conservatives gutted their funding after they began challenging local Democratic machines —
   demonstrating that the liberal reform agenda contained its own internal limits,
   generating mobilization that the political system then moved to contain.`;

showResult('bad',  grade(dbq3Bad,  'dbq', 8, 'apush'), 7);
showResult('mid',  grade(dbq3Mid,  'dbq', 8, 'apush'), 7);
showResult('best', grade(dbq3Best, 'dbq', 8, 'apush'), 7);

// ══════════════════════════════════════════════════════════════════════════
console.log('\n' + hr('═'));
console.log('  Done — review scores above for expected bad < mid < best ordering.');
console.log(hr('═') + '\n');
