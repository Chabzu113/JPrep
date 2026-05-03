#!/usr/bin/env node
// Phase 4: Recall → Scenario stem rewrites for AP Micro MCQ bank
// Applies new scenario-based question stems to 62 identified recall questions.
// Run: node scripts/rewrite_recall_questions.js

'use strict';
const fs = require('fs');

const WEB  = 'js/data/apmicro_mcq.js';
const ELEC = 'electron/js/data/apmicro_mcq.js';

// Each entry: { id, question [, explanation] }
// Only fields listed will be patched; choices and answer are never touched.
const PATCHES = [

  // ── UNIT 1 ──────────────────────────────────────────────────────────────
  {
    id: 'micro-u1-e001',
    question: 'A village in Southeast Asia has fertile farmland, a river, and a large workforce, yet its residents cannot satisfy all their desires for food, housing, healthcare, and entertainment. An economist studying this village would conclude that the village is experiencing which of the following?',
    explanation: 'Scarcity is the fundamental economic problem: limited resources cannot satisfy unlimited human wants. The village has resources, but they are insufficient to fulfill every desire—this is the universal condition of scarcity.'
  },
  {
    id: 'micro-u1-e005',
    question: "Country A is currently producing at a point on its production possibilities curve. The government is considering four economic initiatives. Which of the following would cause an outward shift of Country A's entire production possibilities curve?",
    explanation: 'Economic growth, represented by an outward shift of the PPC, is caused by more resources (Land, Labor, Capital, Entrepreneurship) or better technology. None of the other options increase the economy\'s productive capacity.'
  },
  {
    id: 'micro-u1-m006',
    question: 'A congressional debate on minimum wage policy produces the following statements from economists and policymakers. Which of the following is a normative economic statement?',
    explanation: "Normative statements express value judgments about what 'ought to be.' Positive statements describe what 'is'—they are testable facts or predictions. 'The government should increase the minimum wage to help the poor' is a value judgment, not a factual claim."
  },
  {
    id: 'micro-u1-h009',
    question: "Country B possesses enough land, labor, and capital to produce on its production possibilities curve, yet due to widespread unemployment and misallocation of resources it is currently producing inside the PPC. Which of the following must be true about Country B's current situation?",
    explanation: 'A point inside the PPC signals that the economy is not using all of its resources efficiently—due to unemployment or misallocation. The economy could produce more of both goods by moving to the curve without needing new resources or technology.'
  },
  {
    id: 'micro-u1-e013',
    question: "A furniture company owns a warehouse, woodworking machinery, delivery trucks, and computers used to manage its operations. An economist categorizing this firm's factors of production would classify these assets as which of the following?",
    explanation: 'Physical (real) capital refers to human-made tools, machinery, and facilities used to produce other goods and services. Money and financial assets are financial capital, which is not a factor of production in economics.'
  },
  {
    id: 'micro-u1-e016',
    question: 'A university economics department is listing research topics and must assign each to either the microeconomics or macroeconomics faculty. Which of the following research questions belongs to the microeconomics faculty?',
    explanation: 'Microeconomics focuses on individual decision-making units—firms, households, and specific markets. Questions about national unemployment, inflation, fiscal policy, and exchange rates are macroeconomic topics.'
  },
  {
    id: 'micro-u1-h033',
    question: "Country C produces only wheat and cotton. No matter where it operates along its production possibilities curve, it always sacrifices exactly 2 bushels of wheat for each additional pound of cotton produced. Which of the following must be true about Country C's economy?",
    explanation: 'A straight-line PPC indicates constant opportunity costs. This occurs when resources are equally productive in both uses—perfectly substitutable between the two goods—so the trade-off ratio never changes as production shifts.'
  },
  {
    id: 'micro-u1-m034',
    question: 'Worker A can assemble 10 computers per hour, while Worker B can assemble only 6 computers per hour using identical equipment and workspace. An economist comparing the two workers would say that Worker A has a(n):',
    explanation: 'Absolute advantage is measured by output per unit of input (productivity). Worker A produces more computers per hour than Worker B, regardless of opportunity cost considerations.'
  },
  {
    id: 'micro-u1-e039',
    question: 'A textbook publisher is designing two separate economics courses. Which of the following topics would appear in the Microeconomics course but not in the Macroeconomics course?',
    explanation: 'Individual firm behavior—such as pricing decisions—is the hallmark of microeconomics. Inflation, the government deficit, national output, and total employment are macroeconomic topics.'
  },
  {
    id: 'micro_u1_q001',
    question: "Despite having oil reserves, coastal fishing waters, and millions of workers, a nation still cannot provide all its citizens with the housing, food, technology, and healthcare they desire. This situation illustrates which of the following economic concepts?",
    explanation: 'Scarcity is the fundamental economic problem: resources are limited while human wants are unlimited. This applies universally—even resource-rich nations face scarcity. Choice B confuses scarcity with poverty, C refers to temporary market shortages, D focuses only on poor countries, and E describes a temporary phenomenon rather than the universal condition.'
  },
  {
    id: 'micro_u1_q130',
    question: "Country A produces two goods: automobiles and soybeans. Its production possibilities curve is bowed outward (concave to the origin). Starting from a point of balanced production, the government reallocates resources toward automobile manufacturing. As Country A moves further along its PPC in the direction of more automobiles, which of the following must be true?",
    explanation: 'A bowed-outward PPC reflects the law of increasing opportunity costs. As the economy produces more automobiles, it must divert resources increasingly less suited to auto production, so the opportunity cost per additional automobile rises. C is correct: imperfect resource adaptability is why opportunity cost increases with specialization. A is wrong—absolute advantage does not affect opportunity costs, and a bowed PPC cannot have constant costs. B is a common misconception. D is wrong—moving along the curve trades one good for the other; it does not increase both. E confuses reallocation (movement along the curve) with economic growth (outward shift).'
  },

  // ── UNIT 2 ──────────────────────────────────────────────────────────────
  {
    id: 'micro-u2-m004',
    question: 'An automobile manufacturer is evaluating how four proposed changes would affect its production costs. Which of the following would cause the supply curve for automobiles to shift to the right?',
    explanation: 'Technological improvements lower production costs, allowing firms to profitably supply more at every price level—a rightward shift of supply. Higher input costs, fewer firms, and consumer actions reduce supply.'
  },
  {
    id: 'micro-u2-e015',
    question: 'An economics class is analyzing how different characteristics of goods affect consumer responsiveness to price changes. Which of the following characteristics would make the demand for a good more price elastic?',
    explanation: 'Time is a key determinant of elasticity. Over a longer period, consumers can find substitutes, adjust habits, or switch products, making their demand more responsive (more elastic) to price changes.'
  },
  {
    id: 'micro-u2-m018',
    question: 'The government imposes a new excise tax on the sale of gasoline. Which of the following will most likely occur in the gasoline market as a result?',
    explanation: 'An excise tax creates a wedge between the price consumers pay and the amount producers receive. This reduces the total quantity traded below the efficient level, generating deadweight loss—a loss of market efficiency.'
  },
  {
    id: 'micro-u2-e019',
    question: 'The government sets a minimum price for wheat at $8 per bushel. The current equilibrium price of wheat is $6 per bushel. Which of the following will result from this binding price floor?',
    explanation: 'A binding price floor is set above the equilibrium price. At $8, quantity supplied exceeds quantity demanded, creating a surplus of wheat that cannot clear at the artificially high floor price.'
  },
  {
    id: 'micro-u2-e029',
    question: 'The price of a key raw material used in the production of Good Z falls significantly. Which of the following will result in the market for Good Z?',
    explanation: 'Lower input costs make production more profitable, enabling firms to supply more at every price level. This shifts the supply curve to the right, increasing market supply of Good Z.'
  },
  {
    id: 'micro-u2-e033',
    question: 'A consumer research firm is tracking the umbrella market and wants to identify changes that affect quantity demanded versus shifts of the entire demand curve. Which of the following changes would cause a movement along the demand curve for umbrellas, rather than a shift of the curve itself?',
    explanation: 'Only a change in the price of the good itself causes a movement along the demand curve (a change in quantity demanded). All other factors—income, related goods\' prices, tastes, expectations—shift the entire demand curve.'
  },
  {
    id: 'micro-u2-h049',
    question: 'A gasoline retailer is studying how consumers respond to fuel price changes. In comparing short-run behavior (this week) to long-run behavior (over the next five years), which of the following statements about price elasticity of demand is correct?',
    explanation: 'In the long run, consumers have more time to find alternatives—buy more fuel-efficient cars, move closer to work, switch to public transit—making their demand more responsive (elastic) to price changes than in the short run.'
  },
  {
    id: 'micro-u2-m050',
    question: 'A city government imposes a binding rent control law, capping apartment rents below their equilibrium level. Besides the well-known shortage of available apartments, which of the following is a common unintended consequence of this rent ceiling?',
    explanation: 'With more renters than units available and landlords unable to raise prices, landlords have little incentive to maintain quality. They often reduce spending on repairs and upkeep, leading to deterioration in apartment quality over time.'
  },
  {
    id: 'micro-u2-h061',
    question: "Consumer incomes rise sharply (increasing demand for a normal good) while a drought simultaneously devastates crop yields (decreasing supply). Both shifts occur at the same time in this agricultural market. Which of the following outcomes is certain to occur?",
    explanation: 'Both a rightward demand shift and a leftward supply shift push equilibrium price upward, so the price increase is unambiguous. The quantity effect is indeterminate: demand increase raises Q while supply decrease lowers Q—the net effect depends on the relative magnitude of each shift.'
  },

  // ── UNIT 3 ──────────────────────────────────────────────────────────────
  {
    id: 'micro-u3-e001',
    question: 'A small bakery has one oven (fixed capital) and hires workers one at a time. The first worker produces 20 loaves per hour; the second adds 18 more; the third adds only 12 more. Which of the following laws does this pattern illustrate?',
    explanation: 'Diminishing marginal returns refers specifically to the marginal product (additional output per additional worker) eventually decreasing as more variable inputs are added to a fixed input. Total output is still rising—but by smaller and smaller increments.'
  },
  {
    id: 'micro-u3-h003',
    question: "A textile factory is adding workers to a fixed number of sewing machines. As each additional worker is hired, output per worker-hour is still rising. What must be true about the factory's marginal cost of production during this phase?",
    explanation: 'Marginal product and marginal cost move in opposite directions. When workers are becoming more specialized and productive (rising MP), each additional unit of output costs less to produce—so marginal cost is falling.'
  },
  {
    id: 'micro-u3-e004',
    question: 'A local pizza restaurant pays $3,000 per month in rent, $12 per hour in wages to delivery drivers, and $2 per pound for flour. Which of the following is most likely a fixed cost for this restaurant in the short run?',
    explanation: 'Fixed costs do not vary with the level of output in the short run. Rent must be paid regardless of whether the restaurant produces 1 pizza or 1,000. Wages, flour, electricity, and boxes all vary with output level.'
  },
  {
    id: 'micro-u3-m010',
    question: "Maria left a $60,000-per-year accounting job to open her own bakery. She uses $50,000 of personal savings to fund the business and works full-time managing it. Which of the following would be considered an implicit cost of Maria's bakery?",
    explanation: 'Implicit costs are opportunity costs of using resources already owned by the entrepreneur—they require no out-of-pocket payment. The forgone salary Maria could have earned at her accounting job is an implicit cost.'
  },
  {
    id: 'micro-u3-e014',
    question: "Apex Manufacturing operates a plant with 20 machines and 50 workers. It can adjust the number of workers on short notice, but retooling or adding new production lines requires at least two years. Which of the following best describes Apex's current production time horizon?",
    explanation: 'The short run is not a fixed calendar period—it is any time frame in which at least one factor of production cannot be changed. Apex can vary labor immediately but cannot change its capital stock, so it is operating in the short run.'
  },
  {
    id: 'micro-u3-h034',
    question: 'A crop farm is adding seasonal workers to harvest a fixed amount of farmland. As more workers are hired, each additional worker harvests slightly less grain than the previous one—but each worker still adds to total output. Which of the following must be true during this phase of production?',
    explanation: 'When marginal product is falling but still positive, each additional unit of output requires slightly more labor than the last—so marginal cost is rising. Total product is still increasing (MP > 0), so total output has not yet declined.'
  },
  {
    id: 'micro-u3-m037',
    question: "RetailCorp has expanded from 50 stores to 5,000 stores worldwide. Despite bulk-purchasing discounts, the company's long-run average total cost has begun rising as it grows larger. Which of the following is the most likely cause of this outcome?",
    explanation: 'Diseconomies of scale are a long-run concept arising from the increasing complexity of managing a massive organization. Communication breakdowns, bureaucratic inefficiency, and coordination failures raise per-unit costs as the firm grows very large. Diminishing marginal returns is a short-run, not long-run, concept.'
  },
  {
    id: 'micro-u3-e050',
    question: 'A warehouse employs workers to pack boxes. With 10 workers, total output is 500 boxes per hour. When an 11th worker is added, workers begin crowding each other and total output drops to 490 boxes per hour. Which of the following must be true about the 11th worker?',
    explanation: "When the marginal product of a worker is negative, each additional unit added to total output is negative—meaning total output itself decreases. The 11th worker is 'getting in the way,' so total production falls."
  },
  {
    id: 'micro-u3-e053',
    question: 'An entrepreneur withdraws $200,000 from a savings account—where it was earning 4% annual interest—to fund a new restaurant. Which of the following best describes the $8,000 in foregone interest for the restaurant business?',
    explanation: 'Implicit costs are opportunity costs that do not require an out-of-pocket payment. The foregone interest income is a real economic cost of running the restaurant, even though no check is written for it.'
  },
  {
    id: 'micro-u3-e070',
    question: "Prestige Motors is planning a major capacity expansion over the next several years during which it will adjust every factor of production—factory size, number of production lines, and management structure. An economist would describe this planning horizon as which of the following?",
    explanation: 'The long run is defined as the period in which all factors of production are variable—no inputs are fixed. This is not a calendar period but a planning horizon in which the firm can freely change its entire production setup.'
  },

  // ── UNIT 4 ──────────────────────────────────────────────────────────────
  {
    id: 'micro-u4-e001',
    question: "PharmaCo holds the only patent for a life-saving medication with no close substitutes. When the firm determines how many units to produce, it must consider how each additional unit affects the price it can charge for all units. Which of the following best characterizes PharmaCo's market position?",
    explanation: "Because a monopolist is the sole producer, it faces the entire downward-sloping market demand curve. To sell more units, it must lower the price—unlike a price-taking firm in perfect competition, which faces a horizontal (perfectly elastic) demand curve."
  },
  {
    id: 'micro-u4-h006',
    question: "A used-car dealership has perfect information about each customer's maximum willingness to pay and charges every buyer exactly that maximum. Compared to a standard monopolist charging a single price, which of the following is true about this perfectly price-discriminating dealership?",
    explanation: "Perfect price discrimination (first-degree) is efficient—the firm produces until P = MC, eliminating deadweight loss. However, by charging each consumer their exact reservation price, the firm captures every dollar of consumer surplus for itself, leaving consumers with zero surplus."
  },
  {
    id: 'micro-u4-h008',
    question: "In a city with many hair salons, each salon differentiates its service and faces a downward-sloping demand curve. In long-run equilibrium, each salon earns zero economic profit but operates at a quantity smaller than the output that would minimize its average total cost. An economist calls this outcome which of the following?",
    explanation: "Excess capacity means each monopolistically competitive firm produces below its productively efficient output level (the minimum ATC point). It does not mean the firm is 'wasteful'—it simply means average costs are higher than they would be if the firm produced more."
  },
  {
    id: 'micro-u4-e009',
    question: "The commercial aircraft manufacturing industry is dominated by two large companies that supply the vast majority of the world's airlines. Before adjusting prices or expanding capacity, each firm carefully monitors the other's decisions. Which of the following market structures best describes this industry?",
    explanation: 'An oligopoly is characterized by a small number of large, mutually interdependent firms. Because the actions of one firm directly affect the others, strategic behavior—watching rivals before acting—is the defining feature of oligopolistic markets.'
  },
  {
    id: 'micro-u4-h010',
    question: "Two rival airlines are each choosing between charging a high fare or a low fare. Given the fares both airlines have chosen, neither airline can increase its profits by unilaterally switching to a different fare—even though both could earn more if they cooperated. This stable outcome describes which of the following?",
    explanation: "A Nash Equilibrium is a stable outcome where no individual player can improve by changing strategy alone, given the other's strategy. It is not necessarily the best joint outcome—the Prisoners' Dilemma shows that Nash equilibria can leave both players worse off than a cooperative solution."
  },
  {
    id: 'micro-u4-e014',
    question: "A biotechnology firm spent 15 years and $2 billion developing a new cancer treatment. The government granted the firm a 20-year exclusive right to produce this drug, legally preventing any competitor from selling it. Which of the following best explains how the firm maintains its monopoly?",
    explanation: "Patents and copyrights are legal barriers to entry granted by the government. They give the holder exclusive rights to produce a product, blocking competitors from entering the market and allowing the monopolist to earn long-run economic profits."
  },
  {
    id: 'micro-u4-h017',
    question: "A monopolist and a monopolistically competitive firm are both operating in the short run and maximizing their respective profits. Despite their differences in market structure and long-run profitability, which of the following is true for BOTH firms?",
    explanation: "All profit-maximizing firms—including monopolists, monopolistic competitors, and oligopolists—produce where MR = MC. This rule maximizes profit (or minimizes loss) regardless of market structure. Price-taking firms where P = MR also follow this rule implicitly."
  },
  {
    id: 'micro-u4-m022',
    question: "The government imposes a $10 million annual lump-sum tax on a monopolist that was previously maximizing profit at output Q* and price P*. After the tax is imposed, which of the following will change for the monopolist?",
    explanation: "A lump-sum tax is a fixed cost. It shifts the ATC curve upward but does not affect marginal cost. Because the profit-maximizing rule MR = MC is unchanged, the firm continues to produce Q* at price P*. Only economic profit (total revenue minus total cost including the tax) falls."
  },
  {
    id: 'micro-u4-e025',
    question: "The three largest airlines on a major domestic route are considering lowering ticket prices after fuel costs fall. Despite the cost savings, each airline keeps its prices stable, fearing that any price cut would be immediately matched by rivals, leaving all three worse off. Which of the following best explains this behavior?",
    explanation: "Oligopolists are mutually interdependent. If one firm cuts prices, rivals will match the cut to protect market share, triggering a price war that leaves everyone with lower profits. This fear of retaliation—not collusion—is why prices tend to be sticky in oligopolistic markets."
  },
  {
    id: 'micro-u4-h036',
    question: "A monopolist has been gradually increasing output and has reached the quantity at which its marginal revenue equals zero. At this specific output level, which of the following is true?",
    explanation: "Total revenue (TR) reaches its maximum value when MR = 0—the point at which the demand curve is unit elastic. Note that this is NOT the profit-maximizing point (which requires MR = MC). If MC > 0, the monopolist will produce less than the TR-maximizing quantity."
  },
  {
    id: 'micro-u4-e038',
    question: "An antitrust economist is categorizing industries by market structure. In which of the following industries would the economist most likely find strategic interdependence among a few dominant firms—the key characteristic of an oligopoly?",
    explanation: "A few large companies (such as Verizon, AT&T, and T-Mobile) dominate the wireless market, each closely tracking the pricing and promotional decisions of the others. Wheat farming and local restaurants are close to perfect competition; public water utilities are natural monopolies."
  },
  {
    id: 'micro-u4-m042',
    question: "A market analyst comparing a wheat farmer (price taker in perfect competition) to a cable company (sole provider in a city) notes that unlike the wheat farmer, the cable company cannot be assigned a unique supply curve showing quantity supplied at each price. Which of the following explains this difference?",
    explanation: "A competitive firm's supply curve is derived from its MC curve because price equals MR. A monopolist sets quantity based on where MR = MC, but because MR < P and the monopolist faces the entire demand curve, the same price could be associated with different quantities depending on demand conditions—so no unique supply curve exists."
  },
  {
    id: 'micro-u4-e055',
    question: "A rural county needs a bridge built over a river. Once built, the bridge can handle all expected traffic at essentially zero extra cost per user, and building a second bridge alongside it would be economically wasteful. Economists argue that only one operator should serve this crossing. Which of the following best illustrates this type of market?",
    explanation: "A natural monopoly exists when a single firm can supply the entire market at a lower cost than multiple competitors due to economies of scale. Bridges (and utilities like water and electricity) have high fixed costs but near-zero marginal costs per additional user."
  },
  {
    id: 'micro_u4_q044',
    question: "EnergyMax Corp is the sole electricity provider in a region and can raise or lower its price by adjusting how much it produces. In contrast, wheat farmers in a competitive grain market must accept whatever price the market determines. Which of the following best describes the key difference in these firms' market power?",
    explanation: "A monopolist is a price maker because it faces the entire downward-sloping market demand curve and can influence the market price by controlling quantity. A competitive firm is a price taker that cannot influence the market price. Choice B is wrong because monopolists don't produce at minimum ATC. Choice C is wrong because monopolists can earn long-run economic profit. Choice D is wrong because monopolists face downward-sloping demand. Choice E is wrong because monopolists set P > MC."
  },
  {
    id: 'micro_u4_q045',
    question: "Pharma Inc. is the only producer of a patented drug with no close substitutes. To sell 100 more units, it must lower its price from $50 to $48. In contrast, a wheat farmer who raises the price above the $4 market rate loses all customers immediately. Which of the following best explains why Pharma Inc. faces a downward-sloping demand curve while the wheat farmer faces a horizontal one?",
    explanation: "B is correct: Pharma Inc. is the sole supplier of a product with no close substitutes, so it faces the entire downward-sloping market demand curve. The wheat farmer's product is identical to all competitors', so buyers will switch away instantly if the price rises above market—creating a perfectly elastic (horizontal) demand. Cost structure (A), pricing level (C), economies of scale (D), and regulation (E) do not explain the fundamental difference in demand curve shape."
  },
  {
    id: 'micro_u4_q046',
    question: "StreamMax is the only streaming service in a region and currently sells 1,000 subscriptions at $15 per month. To attract 200 additional subscribers, it must lower its monthly subscription price. Assuming StreamMax cannot charge different prices to different customers, which of the following must StreamMax do to sell those additional subscriptions?",
    explanation: "C is correct: a monopolist faces a downward-sloping demand curve, so to sell more units it must lower the price on all units sold (no price discrimination). A is wrong—higher prices reduce quantity demanded. B ignores the price-quantity relationship on the demand curve. D describes perfect price discrimination, which StreamMax cannot practice here. E is incorrect as pricing decisions generally do not require regulatory approval."
  },

  // ── UNIT 5 ──────────────────────────────────────────────────────────────
  {
    id: 'micro-u5-m007',
    question: "A software firm is analyzing four proposed changes to determine which would increase its demand for programmers (shift the labor demand curve to the right). Which of the following would have that effect?",
    explanation: "Labor demand equals the Marginal Revenue Product (MRP = MP × P). If worker productivity (MP) rises, each worker generates more revenue for the firm at every wage level, shifting the labor demand curve to the right. A lower output price reduces MRP; fewer firms reduce market demand; lower wages move along the curve rather than shifting it."
  },
  {
    id: 'micro-u5-e009',
    question: "The state medical board extends the residency requirement for licensed surgeons from 4 years to 7 years. Assuming wages remain unchanged, which of the following best describes the likely effect on the labor market for surgeons?",
    explanation: "Higher barriers to entry—longer required education—reduce the number of workers willing and able to enter the profession, shifting the labor supply curve to the left. This decreases the supply of surgeons and tends to push the equilibrium wage upward."
  },
  {
    id: 'micro-u5-e013',
    question: "A manufacturing firm pays for its workers to complete an advanced technical training program. After the program, each worker can produce significantly more units per hour. Which of the following outcomes would an economist most likely predict from this investment in human capital?",
    explanation: "Education and training (human capital investment) raise workers' marginal product (MP), which increases their Marginal Revenue Product (MRP = MP × P). Higher MRP shifts labor demand to the right, raising the equilibrium wage. Workers become more productive and are paid more as a result."
  },
  {
    id: 'micro-u5-m017',
    question: "A top professional basketball player earns $40 million per year. A sports economist estimates that this player would still choose to play professional basketball even if paid only $500,000 per year. The remaining $39.5 million is best described as which of the following?",
    explanation: "Economic rent is the payment to a factor of production above and beyond its opportunity cost (the minimum needed to keep it in its current use). The superstar would play for $500,000, so the extra $39.5 million is pure economic rent—payment in excess of opportunity cost."
  },
  {
    id: 'micro-u5-e031',
    question: "HealthCare Co. is reviewing expenditures to determine which ones represent investments in human capital—improvements to the internal knowledge and skills of individuals. Which of the following does NOT represent an investment in human capital?",
    explanation: "Human capital refers to the knowledge, skills, and abilities embedded in individual workers. Attending training, completing residencies, and learning languages all increase a worker's human capital. Hiring a new manager acquires an external resource but does not improve the knowledge of existing employees—it is simply purchasing labor, not investing in human capital."
  },

  // ── UNIT 6 ──────────────────────────────────────────────────────────────
  {
    id: 'micro-u6-e001',
    question: "The federal government funds an air-traffic control system that guides all aircraft through U.S. airspace. No airline can be prevented from using the system, and one airline's use does not reduce its availability to other airlines. An economist would classify this service using which pair of characteristics?",
    explanation: "Public goods are defined by two properties: non-excludability (you cannot prevent people from using it once it is provided) and non-rivalry (one person's use does not diminish its availability to others). Air-traffic control and national defense are classic examples."
  },
  {
    id: 'micro-u6-e005',
    question: "A neighborhood association is raising funds to install street lighting throughout the area. Every resident will benefit from safer, better-lit streets regardless of whether they donated. Many residents decline to contribute, counting on others to pay while still enjoying the lighting for free. This behavior best illustrates a problem associated with which of the following?",
    explanation: "The free-rider problem arises with public goods because non-excludability means people cannot be prevented from benefiting even if they do not pay. Rational individuals have an incentive to let others fund the good—undermining the private market's ability to provide it at an efficient level."
  },
  {
    id: 'micro-u6-h015',
    question: "An insurance company observes that drivers with comprehensive collision coverage have significantly more at-fault accidents per year than drivers with high-deductible plans—even after controlling for driving experience and age. An economist analyzing this behavioral pattern would identify it as an example of which of the following?",
    explanation: "Moral hazard is a post-contract change in behavior: once insured, people take on more risk because they bear less of the cost of adverse outcomes. Comprehensive coverage reduces the personal cost of accidents, so insured drivers become less cautious. Option A (adverse selection) is a pre-contract problem; Option C is a negative externality; Option D (buying a lemon) is an asymmetric information problem at the time of purchase."
  },
  {
    id: 'micro-u6-m026',
    question: "A lighthouse guides all ships safely past dangerous coastal rocks, and each ship that uses its beam does not reduce the light available to other ships. A shared fishing lake, by contrast, becomes depleted as more boats fish it. Which of the following correctly identifies the key economic difference between a lighthouse and a shared fishing lake?",
    explanation: "The key distinction is rivalry. A lighthouse is non-rivalrous—one ship's use does not reduce its availability to others. A shared fishery is rivalrous—each fish caught reduces the stock available to others. Both a lighthouse and a shared fishery are non-excludable (difficult to restrict access), which is why they each create market problems."
  },
  {
    id: 'micro-u6-e028',
    question: "A government economist is cataloging market externalities and listing examples of each type. Among the following market situations, which is an example of a positive externality in production?",
    explanation: "The beekeeper's production of honey creates an uncompensated side-benefit for nearby apple farmers (pollination). This is a positive externality in production—a third party benefits from the production activity without paying for it. Getting a college degree is a consumption externality; noise from a band is a negative externality; a carbon tax is a corrective policy, not an externality; and factory pollution is a negative externality."
  },
  {
    id: 'micro_u6_q092',
    question: "A steel mill near a residential neighborhood releases sulfur dioxide into the air, raising residents' healthcare costs and lowering property values. These costs are borne by people who are not buyers or sellers of steel. Which of the following best describes the mill's impact on the community?",
    explanation: "A negative externality occurs when production or consumption imposes uncompensated costs on third parties outside the market transaction. The steel mill's pollution harms residents who have no role in the steel market. This is distinct from a positive externality (benefits to third parties), and it is not related to the classification of the good as public or private."
  },
  {
    id: 'micro_u6_q093',
    question: "A software company invests heavily in training its engineers in cutting-edge machine learning. Many of these engineers later move to other firms or launch startups, spreading knowledge and innovation throughout the regional tech industry—at no cost to those other firms. Which of the following best describes the broader economic impact of the company's training program?",
    explanation: "A positive externality occurs when an action benefits third parties who do not pay for it. The software company's training creates knowledge spillovers that benefit competing firms and the broader economy without compensation. Students might confuse this with a negative externality or the free-rider problem, but the key here is the uncompensated benefit flowing outward to third parties."
  },
  {
    id: 'micro_u6_q096',
    question: "Several towns share a regional flood-control levee system. Once built, no town can be excluded from the protection it provides. Each town's government delays funding, expecting the others to pay while still receiving flood protection. In this scenario, towns are doing which of the following?",
    explanation: "The free-rider problem occurs when people (or towns) benefit from a non-excludable good without paying for it. Because the levee protects all towns regardless of who funds it, each town has an incentive to free-ride—leading to underprovision of the levee. This is not about overpaying (A), transportation mode (C), creating externalities (D), or perfect competition (E)."
  },
  {
    id: 'micro_u6_q101',
    question: "The U.S. military defends all American citizens simultaneously. Adding more citizens to the country does not reduce the protection available to existing citizens, and no citizen can be denied the protection once it is provided. Which of the following best explains why national defense is classified as a pure public good?",
    explanation: "National defense is a pure public good because it exhibits both non-rivalry (one person's consumption doesn't reduce availability to others) and non-excludability (cannot prevent people from benefiting once it's provided). High cost (A) and government provision (B) are incidental. Equal benefit to all (D) is often false—those near military bases benefit differently. Creating positive externalities (E) is a related but separate concept from being a public good."
  },
  {
    id: 'micro_u6_q119',
    question: "A private shipping company considers building and operating a lighthouse to guide vessels past dangerous coastal rocks. After analysis, it realizes that once the lighthouse is lit, it cannot charge individual ship captains for using the light—any passing ship benefits automatically. The company cancels the project. Which of the following best explains why the private market failed to provide this lighthouse?",
    explanation: "Public goods are non-excludable: once provided, it is impossible (or impractical) to prevent people from benefiting regardless of payment. This creates a free-rider problem—consumers have no incentive to pay voluntarily—making it unprofitable for private firms to supply the good. Choice A confuses cost with excludability. B is factually incorrect about regulations. D confuses public goods with externalities. E ignores that the real barrier is non-excludability, not low demand."
  },
  {
    id: 'micro_u6_q135',
    question: "A plastics factory discharges waste into a river, reducing fish populations and harming a downstream fishing company. An environmental economist suggests the factory and fishing company could negotiate a private solution—without government intervention—by paying the factory to reduce emissions or compensating the fishing company for damages. However, the economist warns that one specific condition could prevent this private bargaining from working. Which of the following conditions would most likely prevent the two parties from reaching an efficient private solution, according to the Coase theorem?",
    explanation: "The Coase theorem states that private parties can reach an efficient outcome regardless of the initial assignment of property rights, as long as property rights are well-defined and transaction costs are low. High transaction costs (C) are the primary barrier preventing Coasean bargaining from achieving efficiency. (A) is wrong—relative valuations do not prevent bargaining; the party who values the outcome more will simply pay. (B) is wrong—clearly defined property rights actually facilitate Coasean solutions. (D) is wrong—Coase specifically addresses cases where government intervention is unnecessary. (E) is wrong—willingness to pay is exactly the type of bargaining the theorem predicts will occur."
  }
];

function applyPatches(src) {
  let data;
  try {
    const modified = src.replace(/^var APMICRO_MCQ\s*=\s*/, '');
    data = JSON.parse(modified.replace(/;\s*$/, ''));
  } catch(e) {
    console.error('Parse error:', e.message);
    process.exit(1);
  }

  let changed = 0;
  for (const patch of PATCHES) {
    const q = data.find(x => x.id === patch.id);
    if (!q) { console.warn(`⚠  NOT FOUND: ${patch.id}`); continue; }
    q.question = patch.question;
    if (patch.explanation) q.explanation = patch.explanation;
    changed++;
    console.log(`✅ ${patch.id}`);
  }

  const out = 'var APMICRO_MCQ = ' + JSON.stringify(data, null, 2) + ';\n';
  console.log(`\nPatched ${changed} / ${PATCHES.length} questions.`);
  return out;
}

function main() {
  const webSrc  = fs.readFileSync(WEB,  'utf8');
  const result  = applyPatches(webSrc);

  fs.writeFileSync(WEB,  result, 'utf8');
  fs.writeFileSync(ELEC, result, 'utf8');

  console.log(`\n✅ Written → ${WEB}`);
  console.log(`✅ Written → ${ELEC}`);
}

main();
