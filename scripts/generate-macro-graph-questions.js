'use strict';
const fs = require('fs');
const b = require('./macro-graph-builder.js');

const questions = [];

// ─── UNIT 1 — PPC (4 questions) ───────────────────────────────────────────────

{
  const svg = b.buildPPC({ points: [{label:'A',x:100,y:58,color:'#3b82f6'},{label:'B',x:165,y:100,color:'#16a34a'},{label:'C',x:120,y:130,color:'#dc2626'}], xLabel:'Capital Goods', yLabel:'Consumer Goods' });
  const check = b.validateGraphSvg(svg, 'ppc');
  if (!check.valid) throw new Error(`macro_graph_u1_001 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u1_001 passed');
  questions.push({
    id: "macro_graph_u1_001",
    subject: "apmacro",
    unit: 1,
    topic: "Production Possibilities Curve",
    topicLabel: "Production Possibilities Curve",
    difficulty: "medium",
    source: "Generated",
    question: "The graph below shows a bowed-out production possibilities curve (PPC) with three labeled points. Which point represents a combination of goods that is both attainable and productively efficient?",
    graphSvg: svg,
    choices: [
      "A) Point A only, because it lies outside the PPC.",
      "B) Point B only, because it lies on the PPC.",
      "C) Point C only, because it lies inside the PPC.",
      "D) Both B and C, because both are attainable by the economy.",
      "E) None of the points; efficiency requires a straight-line PPC."
    ],
    answer: 2,
    explanation: "A point ON the PPC (point B) is both attainable (reachable with current resources) and productively efficient (no resources are wasted). Point A lies outside the PPC, making it currently unattainable. Point C lies inside the PPC, meaning the economy is attainable but not efficient — some resources are idle. Efficiency and attainability together require a point on the frontier."
  });
}

{
  const svg = b.buildPPC({ shift: true, showGrowthArrow: true, xLabel:'Capital Goods', yLabel:'Consumer Goods' });
  const check = b.validateGraphSvg(svg, 'ppc');
  if (!check.valid) throw new Error(`macro_graph_u1_002 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u1_002 passed');
  questions.push({
    id: "macro_graph_u1_002",
    subject: "apmacro",
    unit: 1,
    topic: "Production Possibilities Curve",
    topicLabel: "Production Possibilities Curve",
    difficulty: "easy",
    source: "Generated",
    question: "The graph below shows a country's production possibilities curve shifting outward from PPC₁ to PPC₂. Which of the following best explains this shift?",
    graphSvg: svg,
    choices: [
      "A) A decrease in unemployment moved the economy from inside to the frontier.",
      "B) The economy reallocated resources from consumer goods to capital goods.",
      "C) Technological progress or an increase in productive resources expanded the economy's maximum output.",
      "D) An increase in consumer demand raised desired production of both goods.",
      "E) The economy moved along PPC₁ toward greater capital goods production."
    ],
    answer: 3,
    explanation: "An outward shift of the entire PPC represents economic growth — an increase in the economy's maximum productive capacity. This is caused by technological advances, a larger labor force, more capital, or better resource quality. Option A (moving from inside to the curve) reduces unemployment but does not shift the PPC itself. Reallocating resources (B) or changing demand (D) only moves the economy along the existing frontier."
  });
}

{
  const svg = b.buildPPC({ points: [{label:'A',x:148,y:77,color:'#16a34a'},{label:'B',x:122,y:130,color:'#dc2626'}], xLabel:'Capital Goods', yLabel:'Consumer Goods' });
  const check = b.validateGraphSvg(svg, 'ppc');
  if (!check.valid) throw new Error(`macro_graph_u1_003 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u1_003 passed');
  questions.push({
    id: "macro_graph_u1_003",
    subject: "apmacro",
    unit: 1,
    topic: "Production Possibilities Curve",
    topicLabel: "Production Possibilities Curve",
    difficulty: "medium",
    source: "Generated",
    question: "The graph below shows a bowed-out production possibilities curve. The economy begins at point A on the curve. If the economy moves to point B, which of the following best describes what has occurred?",
    graphSvg: svg,
    choices: [
      "A) The economy achieved economic growth by increasing its productive capacity.",
      "B) The economy reallocated resources from consumer goods to capital goods.",
      "C) Some resources became idle — for example, unemployment increased.",
      "D) The economy became more productively efficient by reducing waste.",
      "E) A new technology shifted the PPC inward, reducing productive capacity."
    ],
    answer: 3,
    explanation: "Point B lies inside the PPC, indicating the economy is no longer using all available resources efficiently. Moving from an on-frontier point (A) to an interior point (B) means some resources have become idle — typically rising unemployment or unused capital. This is NOT economic growth (which shifts the curve outward) and NOT a reallocation (which stays on the frontier). Option E incorrectly attributes an interior point to a PPC shift."
  });
}

{
  const svg = b.buildPPC({ points: [{label:'A',x:97,y:55,color:'#16a34a'},{label:'B',x:200,y:130,color:'#3b82f6'}], xLabel:'Capital Goods', yLabel:'Consumer Goods' });
  const check = b.validateGraphSvg(svg, 'ppc');
  if (!check.valid) throw new Error(`macro_graph_u1_004 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u1_004 passed');
  questions.push({
    id: "macro_graph_u1_004",
    subject: "apmacro",
    unit: 1,
    topic: "Production Possibilities Curve",
    topicLabel: "Production Possibilities Curve",
    difficulty: "medium",
    source: "Generated",
    question: "The graph below shows a bowed-out production possibilities curve. Moving from point A to point B increases production of capital goods. Which of the following correctly describes the opportunity cost of this movement?",
    graphSvg: svg,
    choices: [
      "A) Zero, because both A and B are on the PPC and therefore equally efficient.",
      "B) Constant, because both points represent full productive efficiency.",
      "C) The amount of consumer goods that must be given up to produce more capital goods.",
      "D) Negative, because more capital goods increase future productive capacity.",
      "E) The total dollar value of capital goods produced at point B."
    ],
    answer: 3,
    explanation: "Opportunity cost is always measured as what is sacrificed. Moving along the PPC from A to B trades consumer goods (vertical axis) for capital goods (horizontal axis) — the opportunity cost is the consumer goods given up. The bowed-out shape reflects the law of increasing opportunity costs: as more capital goods are produced, each additional unit requires giving up ever-larger quantities of consumer goods. Being on the PPC means efficiency, not zero opportunity cost."
  });
}

// ─── UNIT 3 — AD/AS (8 questions) ─────────────────────────────────────────────

{
  const svg = b.buildADAS({ showLRAS: true, lrasX: 215, showEquilibrium: true, showGap: true });
  const check = b.validateGraphSvg(svg, 'adas');
  if (!check.valid) throw new Error(`macro_graph_u3_001 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u3_001 passed');
  questions.push({
    id: "macro_graph_u3_001",
    subject: "apmacro",
    unit: 3,
    topic: "AD/AS Model",
    topicLabel: "AD/AS Model",
    difficulty: "medium",
    source: "Generated",
    question: "The AD/AS graph below shows an economy in short-run equilibrium at the intersection of AD and SRAS. The vertical LRAS curve represents potential GDP (Y*). Based on the graph, which of the following correctly identifies the gap and an appropriate policy response?",
    graphSvg: svg,
    choices: [
      "A) An inflationary gap exists; the government should raise taxes to cool the economy.",
      "B) A recessionary gap exists; expansionary fiscal policy (increase G or cut taxes) would shift AD rightward to close the gap.",
      "C) The economy is at full employment; no fiscal or monetary policy action is needed.",
      "D) A recessionary gap exists; contractionary monetary policy would close the gap by raising interest rates.",
      "E) An inflationary gap exists; the central bank should lower interest rates to reduce investment."
    ],
    answer: 2,
    explanation: "When short-run equilibrium output (Y_e, where AD meets SRAS) lies to the LEFT of potential GDP (LRAS = Y*), the economy is producing below capacity — a recessionary gap with cyclical unemployment above the natural rate. Expansionary fiscal policy (increase G or cut taxes) shifts AD rightward toward Y*. Contractionary policy (D, E) would deepen the recession. An inflationary gap (A, E) occurs when Y_e > Y*, the opposite of what is shown."
  });
}

{
  const svg = b.buildADAS({ showLRAS: false, adShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'adas');
  if (!check.valid) throw new Error(`macro_graph_u3_002 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u3_002 passed');
  questions.push({
    id: "macro_graph_u3_002",
    subject: "apmacro",
    unit: 3,
    topic: "AD/AS Model",
    topicLabel: "AD/AS Model",
    difficulty: "medium",
    source: "Generated",
    question: "The AD/AS graph below shows aggregate demand shifting rightward from AD₁ to AD₂ while short-run aggregate supply remains unchanged. What are the short-run effects on the price level and real GDP?",
    graphSvg: svg,
    choices: [
      "A) Price level falls; real GDP falls.",
      "B) Price level rises; real GDP rises.",
      "C) Price level rises; real GDP falls.",
      "D) Price level is unchanged; only real GDP rises because SRAS is fixed.",
      "E) Real GDP is unchanged; only the price level rises because of the quantity theory."
    ],
    answer: 2,
    explanation: "A rightward AD shift along an unchanged SRAS moves the equilibrium up and to the right: both price level and real GDP increase in the short run. This is the standard demand-pull result — increased total spending (from higher C, I, G, or Xn) raises output and prices simultaneously. Option C (stagflation) results from a leftward SRAS shift. Options D and E misunderstand that SRAS is upward-sloping, not horizontal."
  });
}

{
  const svg = b.buildADAS({ showLRAS: false, adShift: 'left', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'adas');
  if (!check.valid) throw new Error(`macro_graph_u3_003 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u3_003 passed');
  questions.push({
    id: "macro_graph_u3_003",
    subject: "apmacro",
    unit: 3,
    topic: "AD/AS Model",
    topicLabel: "AD/AS Model",
    difficulty: "medium",
    source: "Generated",
    question: "The AD/AS graph below shows aggregate demand shifting leftward from AD₁ to AD₂. Which of the following events most likely caused this shift?",
    graphSvg: svg,
    choices: [
      "A) A major tax cut increasing household disposable income.",
      "B) A large increase in government infrastructure spending.",
      "C) A sharp decline in business investment due to pessimistic profit expectations.",
      "D) A reduction in the central bank's policy interest rate stimulating borrowing.",
      "E) A surge in export demand driven by strong economic growth abroad."
    ],
    answer: 3,
    explanation: "A leftward AD shift reflects decreased total spending at every price level. A sharp drop in business investment reduces the I component in GDP = C + I + G + Xn, shifting AD left. Options A, B, D, and E all raise spending (C, G, I, Xn respectively) and would shift AD rightward. Business pessimism — not external shocks or policy stimulus — is the correct cause of a leftward shift here."
  });
}

{
  const svg = b.buildADAS({ showLRAS: false, srasShift: 'left', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'adas');
  if (!check.valid) throw new Error(`macro_graph_u3_004 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u3_004 passed');
  questions.push({
    id: "macro_graph_u3_004",
    subject: "apmacro",
    unit: 3,
    topic: "AD/AS Model",
    topicLabel: "AD/AS Model",
    difficulty: "hard",
    source: "Generated",
    question: "The AD/AS graph below shows short-run aggregate supply shifting leftward from SRAS₁ to SRAS₂ while AD remains unchanged. Which of the following correctly describes the short-run outcome and the economic condition it represents?",
    graphSvg: svg,
    choices: [
      "A) Real GDP rises and the price level falls — a favorable supply shock.",
      "B) Both real GDP and the price level rise — demand-pull inflation from excess spending.",
      "C) Real GDP falls and the price level rises simultaneously — stagflation caused by a negative supply shock.",
      "D) Both real GDP and the price level fall — a deflationary recession from collapsing demand.",
      "E) Only the price level changes; real GDP is unaffected because firms always produce at potential."
    ],
    answer: 3,
    explanation: "A leftward SRAS shift (negative supply shock — e.g., oil price spike, higher wages, natural disaster) raises production costs. The new equilibrium has lower real GDP AND a higher price level: stagflation. This is the only AD/AS scenario where inflation and recession occur simultaneously. It is especially difficult for policymakers: expansionary policy reduces unemployment but worsens inflation; contractionary policy reduces inflation but deepens the recession."
  });
}

{
  const svg = b.buildADAS({ showLRAS: true, lrasX: 130, showEquilibrium: true, showGap: true });
  const check = b.validateGraphSvg(svg, 'adas');
  if (!check.valid) throw new Error(`macro_graph_u3_005 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u3_005 passed');
  questions.push({
    id: "macro_graph_u3_005",
    subject: "apmacro",
    unit: 3,
    topic: "AD/AS Model",
    topicLabel: "AD/AS Model",
    difficulty: "medium",
    source: "Generated",
    question: "The AD/AS graph below shows an economy where the short-run equilibrium output (Y_e) exceeds potential GDP (Y*). Which of the following correctly identifies this situation and an appropriate policy response?",
    graphSvg: svg,
    choices: [
      "A) A recessionary gap; increase government spending to restore full employment.",
      "B) Full employment equilibrium; no policy intervention is needed.",
      "C) An inflationary gap; contractionary fiscal policy (raise taxes or cut government spending) would reduce AD and close the gap.",
      "D) A recessionary gap; the central bank should lower interest rates.",
      "E) An inflationary gap; the central bank should purchase government bonds to expand the money supply."
    ],
    answer: 3,
    explanation: "When Y_e > Y* (short-run equilibrium to the RIGHT of LRAS), the economy is overheating — producing beyond sustainable capacity, unemployment is below the natural rate, and wages are rising. This is an inflationary gap. Contractionary fiscal policy (higher taxes or lower G) shifts AD leftward, reducing output back toward Y*. Option E (buying bonds) is expansionary monetary policy and would widen, not close, an inflationary gap."
  });
}

{
  const svg = b.buildADAS({ showLRAS: false, srasShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'adas');
  if (!check.valid) throw new Error(`macro_graph_u3_006 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u3_006 passed');
  questions.push({
    id: "macro_graph_u3_006",
    subject: "apmacro",
    unit: 3,
    topic: "AD/AS Model",
    topicLabel: "AD/AS Model",
    difficulty: "medium",
    source: "Generated",
    question: "The AD/AS graph below shows short-run aggregate supply shifting rightward from SRAS₁ to SRAS₂. Which of the following events is most consistent with this shift?",
    graphSvg: svg,
    choices: [
      "A) A sharp increase in oil prices raising input costs for all producers.",
      "B) Significant new union contracts raising nominal wages across industries.",
      "C) A major technological improvement lowering per-unit production costs economy-wide.",
      "D) A depreciation of the domestic currency increasing the price of imported inputs.",
      "E) A government-mandated minimum wage increase raising labor costs for firms."
    ],
    answer: 3,
    explanation: "A rightward SRAS shift means lower per-unit production costs — firms can supply more output at every price level. A major economy-wide productivity improvement achieves exactly this, shifting SRAS right: real GDP rises and the price level falls (a favorable supply shock). Options A, B, D, and E all raise production costs, shifting SRAS leftward and producing stagflation."
  });
}

{
  const svg = b.buildADAS({ showLRAS: true, lrasX: 175, adShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'adas');
  if (!check.valid) throw new Error(`macro_graph_u3_007 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u3_007 passed');
  questions.push({
    id: "macro_graph_u3_007",
    subject: "apmacro",
    unit: 3,
    topic: "AD/AS Model",
    topicLabel: "AD/AS Model",
    difficulty: "hard",
    source: "Generated",
    question: "The AD/AS graph below shows aggregate demand shifting rightward from AD₁ to AD₂ while LRAS marks potential GDP. After the AD shift, which of the following describes the new short-run equilibrium and the long-run self-correction that follows without policy?",
    graphSvg: svg,
    choices: [
      "A) A recessionary gap opens; SRAS shifts left over time, further reducing output.",
      "B) Full employment is maintained; AD shifts have no effect because LRAS is fixed.",
      "C) An inflationary gap opens; in the long run rising wages shift SRAS leftward, returning output to Y* at a higher price level.",
      "D) An inflationary gap opens; in the long run AD automatically falls back to AD₁.",
      "E) A recessionary gap opens; fiscal policy is required to restore full employment."
    ],
    answer: 3,
    explanation: "The rightward AD shift pushes the new short-run equilibrium to the right of LRAS, creating an inflationary gap (Y_e > Y*). In the long run, the tight labor market causes wages to rise, increasing per-unit production costs. This shifts SRAS leftward until output returns to Y* — now at an even higher price level. No policy is needed; the economy self-corrects through wage and price adjustment, a core result of the long-run model."
  });
}

{
  const svg = b.buildADAS({ showLRAS: true, lrasX: 175, adShift: 'left', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'adas');
  if (!check.valid) throw new Error(`macro_graph_u3_008 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u3_008 passed');
  questions.push({
    id: "macro_graph_u3_008",
    subject: "apmacro",
    unit: 3,
    topic: "AD/AS Model",
    topicLabel: "AD/AS Model",
    difficulty: "hard",
    source: "Generated",
    question: "The AD/AS graph below shows aggregate demand shifting leftward from AD₁ to AD₂. LRAS represents potential GDP. If no policy action is taken, what is the long-run self-correction mechanism?",
    graphSvg: svg,
    choices: [
      "A) LRAS shifts leftward to match the lower level of aggregate demand permanently.",
      "B) AD automatically shifts back rightward as consumer confidence recovers quickly.",
      "C) SRAS shifts rightward over time as wages and input prices fall, restoring output to Y* at a lower price level.",
      "D) The price level and real GDP remain permanently below their original levels without intervention.",
      "E) The economy requires central bank action to lower interest rates before any adjustment can occur."
    ],
    answer: 3,
    explanation: "The leftward AD shift creates a recessionary gap (Y_e < Y*). With output below potential, unemployment rises above the natural rate, putting downward pressure on wages. As wages fall, per-unit production costs drop, shifting SRAS rightward until real GDP returns to Y* — at a lower price level. LRAS does not change; it reflects productive capacity, not demand. Long-run self-correction does not require policy — it occurs through the wage and price flexibility built into the model."
  });
}

// ─── UNIT 4 — Money Market (4 questions) ──────────────────────────────────────

{
  const svg = b.buildMoneyMarket({ msShift: 'right', showRateLabels: true, showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'moneymarket');
  if (!check.valid) throw new Error(`macro_graph_u4_001 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u4_001 passed');
  questions.push({
    id: "macro_graph_u4_001",
    subject: "apmacro",
    unit: 4,
    topic: "Money Market",
    topicLabel: "Money Market",
    difficulty: "medium",
    source: "Generated",
    question: "The money market graph below shows the money supply shifting rightward from MS₁ to MS₂, lowering the nominal interest rate from i₁ to i₂. Which Federal Reserve action directly causes this shift?",
    graphSvg: svg,
    choices: [
      "A) The Fed raises the required reserve ratio, reducing banks' lending capacity.",
      "B) The Fed sells government bonds to commercial banks, withdrawing reserves.",
      "C) The Fed purchases government bonds, injecting new reserves into the banking system.",
      "D) The Fed raises the discount rate, making it more costly for banks to borrow reserves.",
      "E) The federal government increases spending, automatically expanding the money supply."
    ],
    answer: 3,
    explanation: "An open-market purchase (the Fed buys government bonds) credits banks' reserve accounts, expanding the monetary base and shifting MS rightward. The greater money supply lowers the nominal interest rate from i₁ to i₂. Raising the reserve ratio (A), selling bonds (B), or raising the discount rate (D) all reduce or restrict money supply. Government spending (E) does not directly control the money supply — that is the Fed's role."
  });
}

{
  const svg = b.buildMoneyMarket({ msShift: 'left', showRateLabels: true, showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'moneymarket');
  if (!check.valid) throw new Error(`macro_graph_u4_002 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u4_002 passed');
  questions.push({
    id: "macro_graph_u4_002",
    subject: "apmacro",
    unit: 4,
    topic: "Money Market",
    topicLabel: "Money Market",
    difficulty: "medium",
    source: "Generated",
    question: "The money market graph below shows the money supply shifting leftward from MS₁ to MS₂, raising the nominal interest rate. What is the most likely effect on the broader economy as this higher interest rate takes hold?",
    graphSvg: svg,
    choices: [
      "A) Investment and consumer borrowing increase as money becomes more valuable.",
      "B) The price level immediately falls to zero because money is now scarcer.",
      "C) Investment and consumer borrowing fall as borrowing costs rise, reducing aggregate demand and output.",
      "D) Real GDP rises because higher interest rates attract foreign capital and increase net exports.",
      "E) The money multiplier increases automatically, fully offsetting the leftward MS shift."
    ],
    answer: 3,
    explanation: "A leftward MS shift (contractionary monetary policy via open-market bond sales, higher reserve requirement, or higher discount rate) raises the nominal interest rate. Higher borrowing costs reduce business investment and household spending on credit, which decreases aggregate demand, slowing real GDP growth and fighting inflation. Option D partially reflects a capital inflow effect but overstates it — net exports are also hurt by currency appreciation."
  });
}

{
  const svg = b.buildMoneyMarket({ mdShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'moneymarket');
  if (!check.valid) throw new Error(`macro_graph_u4_003 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u4_003 passed');
  questions.push({
    id: "macro_graph_u4_003",
    subject: "apmacro",
    unit: 4,
    topic: "Money Market",
    topicLabel: "Money Market",
    difficulty: "medium",
    source: "Generated",
    question: "The money market graph below shows money demand shifting rightward from MD₁ to MD₂ while the money supply is unchanged. Which of the following events most likely caused this increase in money demand?",
    graphSvg: svg,
    choices: [
      "A) The Federal Reserve conducted an open-market purchase of government bonds.",
      "B) Households shifted their wealth from cash into long-term savings bonds.",
      "C) Nominal GDP increased significantly, raising the volume and value of transactions in the economy.",
      "D) The central bank lowered the required reserve ratio for commercial banks.",
      "E) The price level fell, reducing the nominal value of all transactions."
    ],
    answer: 3,
    explanation: "Money demand reflects how much money households and firms wish to hold for transactions, precaution, and speculation. When nominal GDP rises, the volume and value of transactions increases — people need to hold more money — shifting MD rightward and raising the interest rate along the fixed vertical MS. Options A and D expand the money supply (not demand). Options B and E would reduce, not increase, money demand."
  });
}

{
  const svg = b.buildMoneyMarket({ mdShift: 'left', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'moneymarket');
  if (!check.valid) throw new Error(`macro_graph_u4_004 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u4_004 passed');
  questions.push({
    id: "macro_graph_u4_004",
    subject: "apmacro",
    unit: 4,
    topic: "Money Market",
    topicLabel: "Money Market",
    difficulty: "medium",
    source: "Generated",
    question: "The money market graph below shows money demand shifting leftward from MD₁ to MD₂ while the money supply is unchanged. Which of the following events is most consistent with this shift?",
    graphSvg: svg,
    choices: [
      "A) A rapid increase in nominal GDP requiring more money for daily transactions.",
      "B) Rising inflation causing households to increase precautionary cash holdings.",
      "C) Widespread adoption of digital payment apps reducing households' need to hold physical money.",
      "D) A central bank decision to raise the federal funds rate target.",
      "E) An increase in the price level raising the nominal cost of all transactions."
    ],
    answer: 3,
    explanation: "Money demand falls when technology or institutional changes reduce the need to hold money. Widespread digital payment adoption (mobile pay, credit cards) allows the same transaction volume with less cash, shifting MD leftward and lowering the equilibrium interest rate. Options A, B, and E increase transaction or precautionary demand for money (rightward shifts). Option D affects money supply/rate policy but does not shift the MD curve itself."
  });
}

// ─── UNIT 4 — Loanable Funds (3 questions) ────────────────────────────────────

{
  const svg = b.buildLoanableFunds({ demandShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'loanablefunds');
  if (!check.valid) throw new Error(`macro_graph_u4_005 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u4_005 passed');
  questions.push({
    id: "macro_graph_u4_005",
    subject: "apmacro",
    unit: 4,
    topic: "Loanable Funds Market",
    topicLabel: "Loanable Funds Market",
    difficulty: "hard",
    source: "Generated",
    question: "The loanable funds market graph below shows the demand for loanable funds shifting rightward from D_LF₁ to D_LF₂, raising the real interest rate. Which of the following most likely explains this shift, and what is its effect on private investment?",
    graphSvg: svg,
    choices: [
      "A) An increase in household saving shifted supply right, lowering borrowing costs for firms.",
      "B) A decrease in business confidence reduced loan demand and lowered the real interest rate.",
      "C) Increased government borrowing to finance a budget deficit raised demand for funds, pushing up the real interest rate and crowding out private investment.",
      "D) A reduction in the government deficit reduced pressure on interest rates, encouraging more private investment.",
      "E) An inflow of foreign capital increased the supply of loanable funds, lowering the interest rate."
    ],
    answer: 3,
    explanation: "When the government runs a budget deficit it must borrow in the loanable funds market, shifting D_LF rightward. The higher real interest rate makes borrowing more expensive for private firms, reducing private investment — this is crowding out. The key mechanism: government demand shift raises r, which moves firms leftward along their unchanged investment demand curve, reducing I. Options A and E are supply-side shifts. Options B and D imply demand falling, the opposite of what is shown."
  });
}

{
  const svg = b.buildLoanableFunds({ supplyShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'loanablefunds');
  if (!check.valid) throw new Error(`macro_graph_u4_006 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u4_006 passed');
  questions.push({
    id: "macro_graph_u4_006",
    subject: "apmacro",
    unit: 4,
    topic: "Loanable Funds Market",
    topicLabel: "Loanable Funds Market",
    difficulty: "hard",
    source: "Generated",
    question: "The loanable funds market graph below shows the supply of loanable funds shifting rightward from S_LF₁ to S_LF₂, lowering the real interest rate. Which of the following events most directly causes this shift, and what is the likely macroeconomic effect?",
    graphSvg: svg,
    choices: [
      "A) The government increased its budget deficit, demanding more funds from the market.",
      "B) Business optimism led firms to increase planned investment and demand more loans.",
      "C) Foreign investors purchased more domestic financial assets, increasing the supply of loanable funds and lowering the real interest rate.",
      "D) Households reduced their saving rate, decreasing the funds available to borrowers.",
      "E) The central bank raised the required reserve ratio, limiting banks' ability to lend."
    ],
    answer: 3,
    explanation: "Foreign capital inflows increase the domestic supply of loanable funds — foreign investors bring additional funds into the domestic market, shifting S_LF rightward. The lower real interest rate stimulates private investment and economic growth. Options A and B shift demand rightward (raising rates). Options D and E reduce supply (shifting S_LF leftward, raising rates). The foreign capital inflow mechanism is critical for understanding open-economy macroeconomics."
  });
}

{
  const svg = b.buildLoanableFunds({ demandShift: 'left', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'loanablefunds');
  if (!check.valid) throw new Error(`macro_graph_u4_007 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u4_007 passed');
  questions.push({
    id: "macro_graph_u4_007",
    subject: "apmacro",
    unit: 4,
    topic: "Loanable Funds Market",
    topicLabel: "Loanable Funds Market",
    difficulty: "medium",
    source: "Generated",
    question: "The loanable funds market graph below shows the demand for loanable funds shifting leftward from D_LF₁ to D_LF₂. Which of the following is most likely to have caused this shift?",
    graphSvg: svg,
    choices: [
      "A) The government significantly increased its budget deficit, borrowing more from financial markets.",
      "B) Rising business confidence led firms to expand investment and borrow more.",
      "C) A pessimistic economic outlook caused firms to reduce planned investment spending and borrow less.",
      "D) Foreign investors increased purchases of domestic financial assets.",
      "E) An increase in household saving rates expanded the supply of loanable funds."
    ],
    answer: 3,
    explanation: "When firms become pessimistic about future profits, they cut planned investment and reduce borrowing, shifting D_LF leftward. The lower demand reduces both the equilibrium real interest rate and the quantity of funds borrowed. Options A and B shift demand rightward (raising rates). Options D and E are supply-side changes that do not affect the demand curve. Distinguishing shifts in demand vs. supply in the loanable funds market is a key AP Macro skill."
  });
}

// ─── UNIT 5 — Phillips Curve (3 questions) ────────────────────────────────────

{
  const svg = b.buildPhillipsCurve({ showLRPC: false, showPoint: { x: 105, y: 70, label: 'A' } });
  const check = b.validateGraphSvg(svg, 'phillipscurve');
  if (!check.valid) throw new Error(`macro_graph_u5_001 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u5_001 passed');
  questions.push({
    id: "macro_graph_u5_001",
    subject: "apmacro",
    unit: 5,
    topic: "Phillips Curve",
    topicLabel: "Phillips Curve",
    difficulty: "medium",
    source: "Generated",
    question: "The graph below shows a short-run Phillips curve (SRPC) with point A marked. If the central bank wants to reduce the inflation rate from the level shown at point A, which of the following best describes the tradeoff involved?",
    graphSvg: svg,
    choices: [
      "A) No tradeoff exists; contractionary policy reduces inflation without affecting unemployment.",
      "B) Reducing inflation requires moving leftward along the SRPC, which also lowers unemployment.",
      "C) Reducing inflation requires contractionary policy that moves the economy rightward along the SRPC, accepting higher unemployment in the short run.",
      "D) The SRPC is vertical, so inflation can be reduced without any change in unemployment.",
      "E) Reducing inflation requires shifting the entire SRPC curve leftward through fiscal policy."
    ],
    answer: 3,
    explanation: "The downward-sloping SRPC embodies the short-run tradeoff: lower inflation comes at the cost of higher unemployment. Contractionary monetary policy (raising interest rates) reduces total spending, lowering inflation but pushing unemployment rightward along the SRPC. Option A denies the tradeoff. Option B is wrong about direction — lower inflation means moving right (higher unemployment), not left. A vertical SRPC (D) describes the LRPC, not the SRPC."
  });
}

{
  const svg = b.buildPhillipsCurve({ showLRPC: true, lrpcX: 175 });
  const check = b.validateGraphSvg(svg, 'phillipscurve');
  if (!check.valid) throw new Error(`macro_graph_u5_002 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u5_002 passed');
  questions.push({
    id: "macro_graph_u5_002",
    subject: "apmacro",
    unit: 5,
    topic: "Phillips Curve",
    topicLabel: "Phillips Curve",
    difficulty: "medium",
    source: "Generated",
    question: "The graph below shows both a short-run Phillips curve (SRPC) and a long-run Phillips curve (LRPC). Which of the following correctly explains why the LRPC is vertical?",
    graphSvg: svg,
    choices: [
      "A) In the long run, the central bank can set any desired inflation rate with no side effects.",
      "B) In the long run, higher inflation causes unemployment to rise proportionally.",
      "C) In the long run, workers and firms adjust their inflation expectations, returning unemployment to the natural rate regardless of the inflation rate.",
      "D) The LRPC is vertical because nominal interest rates do not affect real variables in the long run.",
      "E) Full employment is defined as zero unemployment, which is where the LRPC intersects the x-axis."
    ],
    answer: 3,
    explanation: "The LRPC is vertical at the natural rate of unemployment (NRU) because in the long run, all inflation expectations are fully adjusted. Workers negotiate wages based on the actual inflation rate, restoring the real wage to its equilibrium level. Once expectations catch up, there is no remaining short-run tradeoff — unemployment returns to the NRU regardless of the inflation rate chosen. Persistent attempts to hold unemployment below NRU only produce accelerating inflation."
  });
}

{
  const svg = b.buildPhillipsCurve({ showLRPC: true, lrpcX: 175, srpcShift: 'right' });
  const check = b.validateGraphSvg(svg, 'phillipscurve');
  if (!check.valid) throw new Error(`macro_graph_u5_003 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u5_003 passed');
  questions.push({
    id: "macro_graph_u5_003",
    subject: "apmacro",
    unit: 5,
    topic: "Phillips Curve",
    topicLabel: "Phillips Curve",
    difficulty: "hard",
    source: "Generated",
    question: "The graph below shows the short-run Phillips curve shifting rightward from SRPC₁ to SRPC₂. What does this shift represent, and which event most likely caused it?",
    graphSvg: svg,
    choices: [
      "A) A movement along the original SRPC to a lower-inflation, higher-unemployment point.",
      "B) Expansionary monetary policy shifted the SRPC right by increasing aggregate demand.",
      "C) A negative supply shock (such as an oil price spike) caused higher inflation AND higher unemployment simultaneously, shifting the SRPC rightward.",
      "D) Improved central bank credibility reduced inflationary expectations, shifting the SRPC leftward.",
      "E) A reduction in cyclical unemployment moved the economy rightward toward the LRPC."
    ],
    answer: 3,
    explanation: "A rightward SRPC shift means the economy now faces BOTH higher unemployment AND higher inflation at every point compared to the original curve — this is the graphical representation of stagflation. A negative supply shock (oil price spike) reduces output and raises prices simultaneously, generating this unfavorable shift. Option A is a movement along, not a shift of, the SRPC. Option B (expansionary policy) moves the economy along the SRPC. Option D describes a leftward shift (improvement), the opposite."
  });
}

// ─── UNIT 6 — FOREX (4 questions) ─────────────────────────────────────────────

{
  const svg = b.buildFOREX({ currency: 'Dollars', demandShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'forex');
  if (!check.valid) throw new Error(`macro_graph_u6_001 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u6_001 passed');
  questions.push({
    id: "macro_graph_u6_001",
    subject: "apmacro",
    unit: 6,
    topic: "Foreign Exchange Market",
    topicLabel: "Foreign Exchange Market",
    difficulty: "medium",
    source: "Generated",
    question: "The graph below shows the foreign exchange market for U.S. dollars. Demand for dollars shifts rightward from D_e₁ to D_e₂, causing the dollar to appreciate. Which of the following events most likely caused this increase in demand for dollars?",
    graphSvg: svg,
    choices: [
      "A) U.S. consumers increased purchases of imported goods, supplying more dollars to the FOREX market.",
      "B) The Federal Reserve lowered interest rates, making U.S. assets less attractive to foreign investors.",
      "C) Foreign investors increased purchases of U.S. financial assets in response to higher U.S. interest rates.",
      "D) U.S. exports fell due to a global recession, reducing foreign demand for dollars.",
      "E) The U.S. government ran a larger trade deficit, increasing the supply of dollars abroad."
    ],
    answer: 3,
    explanation: "Foreign investors buy U.S. financial assets (bonds, stocks) using dollars. When U.S. interest rates rise relative to foreign rates, U.S. assets offer a better return, attracting foreign capital and increasing demand for dollars (D_e shifts right). The dollar appreciates: the exchange rate rises (more foreign currency per dollar). Options A and E increase the supply of dollars (depreciation). Option B would reduce foreign demand for dollar assets."
  });
}

{
  const svg = b.buildFOREX({ currency: 'Dollars', supplyShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'forex');
  if (!check.valid) throw new Error(`macro_graph_u6_002 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u6_002 passed');
  questions.push({
    id: "macro_graph_u6_002",
    subject: "apmacro",
    unit: 6,
    topic: "Foreign Exchange Market",
    topicLabel: "Foreign Exchange Market",
    difficulty: "medium",
    source: "Generated",
    question: "The graph below shows the foreign exchange market for U.S. dollars. The supply of dollars shifts rightward from S_e₁ to S_e₂, causing the dollar to depreciate. Which of the following best explains this shift?",
    graphSvg: svg,
    choices: [
      "A) Foreign investors purchased more U.S. Treasury bonds, demanding more dollars.",
      "B) U.S. exports increased as foreign economies grew, raising demand for dollars abroad.",
      "C) U.S. consumers increased purchases of imported goods, supplying more dollars to buy foreign currency.",
      "D) The Federal Reserve raised interest rates, attracting foreign capital and strengthening the dollar.",
      "E) The U.S. government reduced its trade deficit, decreasing the supply of dollars in circulation."
    ],
    answer: 3,
    explanation: "The supply of dollars in FOREX comes from Americans who exchange dollars for foreign currencies to buy imports. When U.S. consumers buy more imports, they supply more dollars to FOREX markets, shifting S_e rightward and depreciating the dollar (the exchange rate falls — foreigners get more dollars per unit of their currency). Options A and B increase demand for dollars (appreciation). Options D and E reduce supply or increase demand, also causing appreciation."
  });
}

{
  const svg = b.buildFOREX({ currency: 'Dollars', demandShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'forex');
  if (!check.valid) throw new Error(`macro_graph_u6_003 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u6_003 passed');
  questions.push({
    id: "macro_graph_u6_003",
    subject: "apmacro",
    unit: 6,
    topic: "Foreign Exchange Market",
    topicLabel: "Foreign Exchange Market",
    difficulty: "hard",
    source: "Generated",
    question: "The graph below shows the FOREX market for U.S. dollars, with demand shifting rightward from D_e₁ to D_e₂ and the dollar appreciating. Which of the following correctly describes the likely effect on the U.S. trade balance?",
    graphSvg: svg,
    choices: [
      "A) Exports increase and imports decrease, improving the current account balance.",
      "B) Both exports and imports increase, leaving the trade balance unchanged.",
      "C) Exports decrease and imports increase, worsening the U.S. current account (larger trade deficit).",
      "D) Only the capital account is affected; the current account is independent of exchange rate movements.",
      "E) The trade balance improves because a stronger dollar raises foreigners' purchasing power for U.S. goods."
    ],
    answer: 3,
    explanation: "Dollar appreciation makes U.S. exports more expensive for foreign buyers (fewer exports) and makes foreign goods cheaper for U.S. consumers (more imports). Both effects worsen the current account: exports fall and imports rise, increasing the trade deficit. This links the capital account (foreign investment → dollar demand → appreciation) to the current account (appreciation → trade deficit). Option E is backwards — a stronger dollar raises U.S. consumers' purchasing power, not foreigners'."
  });
}

{
  const svg = b.buildFOREX({ currency: 'Euros', demandShift: 'right', showEquilibrium: true });
  const check = b.validateGraphSvg(svg, 'forex');
  if (!check.valid) throw new Error(`macro_graph_u6_004 failed: ${check.errors.join(', ')}`);
  console.log('macro_graph_u6_004 passed');
  questions.push({
    id: "macro_graph_u6_004",
    subject: "apmacro",
    unit: 6,
    topic: "Foreign Exchange Market",
    topicLabel: "Foreign Exchange Market",
    difficulty: "medium",
    source: "Generated",
    question: "The graph below shows the foreign exchange market for euros. Demand for euros shifts rightward from D_e₁ to D_e₂. Which of the following events most likely caused this increase in demand for euros?",
    graphSvg: svg,
    choices: [
      "A) European interest rates fell, making euro-denominated assets less attractive to U.S. investors.",
      "B) U.S. exports to Europe increased, reducing U.S. demand for euros.",
      "C) U.S. consumers and investors increased purchases of European goods and financial assets, demanding more euros.",
      "D) The European Central Bank expanded the money supply, depreciating the euro.",
      "E) The Federal Reserve raised U.S. interest rates, increasing U.S. investor demand for dollar assets."
    ],
    answer: 3,
    explanation: "Demand for euros from U.S. residents rises when they need more euros to buy European imports or euro-denominated financial assets. Increased U.S. purchases of European goods and assets shifts D_e rightward, causing the euro to appreciate (more dollars per euro). Option A reduces demand for euros. Option D causes euro depreciation (supply increase). Option E directs investment toward the U.S., reducing euro demand."
  });
}

// ─── Output ───────────────────────────────────────────────────────────────────

const outPath = __dirname + '/macro-graphs-output.json';
fs.writeFileSync(outPath, JSON.stringify(questions, null, 2));
console.log(`\nAll ${questions.length} questions passed validation.`);
console.log(`Output written to scripts/macro-graphs-output.json`);
