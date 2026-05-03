'use strict';
const fs   = require('fs');
const path = require('path');

/* ── Palette ─────────────────────────────────────────────────────────────── */
const B  = '#3b82f6'; // demand / MR
const G  = '#16a34a'; // supply
const R  = '#dc2626'; // MC / negative
const Pu = '#9333ea'; // ATC
const Or = '#f97316'; // AVC / MFC
const Am = '#d97706'; // tax wedge / amber
const Te = '#0891b2'; // MRP / teal
const Gr = '#94a3b8'; // reference gray
const Na = '#1e40af'; // PPC / navy

/* ── SVG micro-helpers ───────────────────────────────────────────────────── */
// All attributes use single quotes so the strings are safe inside JSON double-quoted fields.

const W = (body, w = 300, h = 250) =>
  `<svg viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg' style='max-width:${w + 20}px;font-family:Inter,system-ui,sans-serif;font-size:12px'>${body}</svg>`;

// Standard axes + labels
function AX(x0 = 50, y0 = 210, xe = 275, yt = 20, xL = 'Quantity', yL = 'Price') {
  const mx = Math.round((x0 + xe) / 2);
  const my = Math.round((y0 + yt) / 2);
  return `<line x1='${x0}' y1='${y0}' x2='${xe}' y2='${y0}' stroke-width='2' class='svg-axis'/>`
    + `<line x1='${x0}' y1='${y0}' x2='${x0}' y2='${yt}' stroke-width='2' class='svg-axis'/>`
    + `<polygon points='${xe},${y0} ${xe - 11},${y0 - 5} ${xe - 11},${y0 + 5}' class='svg-axis-fill'/>`
    + `<polygon points='${x0},${yt} ${x0 - 5},${yt + 11} ${x0 + 5},${yt + 11}' class='svg-axis-fill'/>`
    + `<text x='${mx}' y='${y0 + 28}' text-anchor='middle' class='svg-label'>${xL}</text>`
    + `<text x='14' y='${my}' text-anchor='middle' transform='rotate(-90,14,${my})' class='svg-label'>${yL}</text>`;
}

const LN  = (x1, y1, x2, y2, c, sw = 2.5) =>
  `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='${c}' stroke-width='${sw}'/>`;
const DL  = (x1, y1, x2, y2, c = Gr, sw = 1.4) =>
  `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='${c}' stroke-width='${sw}' stroke-dasharray='5,3'/>`;
const DOT = (x, y, c, r = 4) => `<circle cx='${x}' cy='${y}' r='${r}' fill='${c}'/>`;
const TXT = (x, y, t, c, a = 'middle', s = 11, bold = false) =>
  `<text x='${x}' y='${y}' text-anchor='${a}' font-size='${s}' fill='${c}'${bold ? " font-weight='600'" : ''}>${t}</text>`;
const CLS = (x, y, t, a = 'end', s = 11) =>
  `<text x='${x}' y='${y}' text-anchor='${a}' font-size='${s}' class='svg-label'>${t}</text>`;
const CV  = (d, c, sw = 2.5) => `<path d='${d}' stroke='${c}' stroke-width='${sw}' fill='none'/>`;
const BOX = (x, y, bw, bh, c, op = 0.4) =>
  `<rect x='${x}' y='${y}' width='${bw}' height='${bh}' fill='${c}' opacity='${op}'/>`;
const TRI = (pts, c, op = 0.38) => `<polygon points='${pts}' fill='${c}' opacity='${op}'/>`;
const ARW = (x1, y1, x2, y2, c, sw = 1.8) =>           // double-headed arrow
  `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='${c}' stroke-width='${sw}'/>`
  + `<polygon points='${x2},${y1} ${x2 - 8},${y1 - 4} ${x2 - 8},${y1 + 4}' fill='${c}'/>`
  + `<polygon points='${x1},${y1} ${x1 + 8},${y1 - 4} ${x1 + 8},${y1 + 4}' fill='${c}'/>`;

/* ── Graph builders ──────────────────────────────────────────────────────── */

/*
 * Standard S/D coordinate system (300×250 viewBox):
 *   Origin at (50, 210), y-axis to y=20, x-axis to x=275
 *   D: (65,45)→(255,195)   slope in SVG px: +150/190 = 0.789
 *   S: (65,195)→(255,45)   slope in SVG px: -150/190 = -0.789
 *   Equilibrium: x=160, y=120  (both curves cross here)
 *
 * Key points on D at given y:  x = 65 + (y-45)/150 * 190
 * Key points on S at given y:  x = 65 + (195-y)/150 * 190
 */
function sdBase(extras = '') {
  return W(
    AX(50, 210, 275, 20)
    + LN(65, 45, 255, 195, B)   + TXT(259, 198, 'D', B, 'start', 12, true)
    + LN(65, 195, 255, 45, G)   + TXT(259, 48,  'S', G, 'start', 12, true)
    + extras
  );
}

// Equilibrium dashes + P*/Q* labels
function eqLines(eqX = 160, eqY = 120) {
  return DL(50, eqY, eqX, eqY) + CLS(46, eqY + 4, 'P*')
    + DL(eqX, eqY, eqX, 210)   + CLS(eqX, 224, 'Q*', 'middle');
}

// S/D with price floor (above equilibrium)
function sdPriceFloor() {
  const pfY = 78;                         // P_floor y-coord (above P* at 120)
  const qdX = Math.round(65 + (pfY - 45) / 150 * 190);   // 109
  const qsX = Math.round(65 + (195 - pfY) / 150 * 190);  // 213
  return sdBase(
    eqLines()
    + LN(50, pfY, 265, pfY, R, 2.2) + TXT(44, pfY + 4, 'P_f', R, 'end', 11, true)
    + DL(qdX, pfY, qdX, 210, B) + TXT(qdX, 224, 'Q_D', B, 'middle', 11)
    + DL(qsX, pfY, qsX, 210, G) + TXT(qsX, 224, 'Q_S', G, 'middle', 11)
    + ARW(qdX + 2, 202, qsX - 2, 202, R) + TXT(161, 198, 'Surplus', R, 'middle', 10)
  );
}

// S/D with price ceiling (below equilibrium)
function sdPriceCeiling() {
  const pcY = 162;
  const qsX = Math.round(65 + (195 - pcY) / 150 * 190);  // 109
  const qdX = Math.round(65 + (pcY - 45) / 150 * 190);   // 213
  return sdBase(
    eqLines()
    + LN(50, pcY, 265, pcY, R, 2.2) + TXT(44, pcY + 4, 'P_c', R, 'end', 11, true)
    + DL(qsX, pcY, qsX, 210, G) + TXT(qsX, 224, 'Q_S', G, 'middle', 11)
    + DL(qdX, pcY, qdX, 210, B) + TXT(qdX, 224, 'Q_D', B, 'middle', 11)
    + ARW(qsX + 2, 202, qdX - 2, 202, R) + TXT(161, 198, 'Shortage', R, 'middle', 10)
  );
}

// S/D with DWL triangle from price ceiling
function sdDWL() {
  const pcY = 162;
  const qsX = 109;   // Q_S at price ceiling
  // D at x=109: y = 45 + (109-65)/190*150 = 45+34.7 = 79.7 ≈ 80
  const dAtQs = 80;
  return sdBase(
    eqLines()
    + TRI(`${qsX},${pcY} ${qsX},${dAtQs} 160,120`, Am)
    + LN(50, pcY, 265, pcY, R, 2) + TXT(44, pcY + 4, 'P_c', R, 'end', 11, true)
    + DL(qsX, pcY, qsX, 210) + CLS(qsX, 224, 'Q_S', 'middle')
    + TXT(130, 120, 'DWL', Am, 'middle', 10, true)
    + DOT(160, 120, Gr, 3)
  );
}

// Tax incidence — steeper D (inelastic consumers bear more)
// D steep: (65,30)→(200,195)  slope = 165/135 = 1.222
// S flat:  (65,195)→(255,65)  slope = -130/190 = -0.684
// Equilibrium: 30+1.222*(x-65) = 195-0.684*(x-65) → 1.906*(x-65)=165 → x=151.6≈152, y=30+1.222*87=136
// S' (tax up 60px): (65,135)→(255,5) → clip at y=20: x=65+(135-20)/130*190=65+168=233
// New eq D∩S': 30+1.222*(x-65)=135-0.684*(x-65) → 1.906*(x-65)=105 → x=65+55.1=120, y=30+1.222*55=97
// Pc=97 (consumers pay), Pp on orig S at x=120: y=195-0.684*(120-65)=195-37.6=157
// Consumer burden (in price up): 136→97 = 39px.  Producer burden: 136→157 = 21px. Consumers bear more.
function sdTax() {
  const EQX = 152, EQY = 136;
  const NQX = 120, PcY = 97, PpY = 157;
  return W(
    AX(50, 210, 275, 20)
    + LN(65, 30, 200, 195, B, 2.5) + TXT(204, 198, 'D', B, 'start', 12, true)
    + LN(65, 195, 255, 65, G, 2.5) + TXT(259, 68, 'S', G, 'start', 12, true)
    + LN(65, 135, 233, 20, G, 2)   + TXT(236, 23, "S'", G, 'start', 11, true)
    + DL(50, EQY, EQX, EQY) + CLS(46, EQY + 4, 'P*')
    + DL(EQX, EQY, EQX, 210) + CLS(EQX, 224, 'Q*', 'middle')
    + DL(50, PcY, NQX, PcY, B) + TXT(44, PcY + 4, 'P_c', B, 'end', 11)
    + DL(50, PpY, NQX, PpY, G) + TXT(44, PpY + 4, 'P_p', G, 'end', 11)
    + DL(NQX, PcY, NQX, 210) + CLS(NQX, 224, 'Q_T', 'middle')
    + LN(NQX + 18, PcY, NQX + 18, PpY, Am, 1.8)
    + TXT(NQX + 28, (PcY + PpY) / 2 + 4, 'Tax', Am, 'start', 10, true)
    + DOT(NQX, PcY, B, 3) + DOT(EQX, EQY, Gr, 3)
  );
}

// Supply increase (rightward shift)
// S': (105,195)→(275,52) — parallel to original S shifted +40px right
// New eq: x=180, y=136 (lower price, higher quantity)
function sdSupplyShift() {
  return sdBase(
    LN(105, 195, 270, 52, G, 2) + TXT(274, 55, "S'", G, 'start', 11, true)
    + DL(50, 120, 160, 120) + CLS(46, 124, 'P*')
    + DL(160, 120, 160, 210) + CLS(160, 224, 'Q*', 'middle')
    + DL(50, 136, 180, 136) + CLS(46, 140, "P'")
    + DL(180, 136, 180, 210) + CLS(180, 224, "Q'", 'middle')
    + DOT(160, 120, Gr, 3) + DOT(180, 136, G, 3)
  );
}

// Demand decrease (leftward shift)
// D': (50,65)→(215,195) — same slope as D, shifted -40px left
// New eq: x=140, y=136 (lower price, lower quantity)
function sdDemandShift() {
  return sdBase(
    LN(50, 65, 215, 195, B, 2) + TXT(218, 198, "D'", B, 'start', 11, true)
    + DL(50, 120, 160, 120) + CLS(46, 124, 'P*')
    + DL(160, 120, 160, 210) + CLS(160, 224, 'Q*', 'middle')
    + DL(50, 136, 140, 136) + CLS(46, 140, "P'")
    + DL(140, 136, 140, 210) + CLS(140, 224, "Q'", 'middle')
    + DOT(160, 120, Gr, 3) + DOT(140, 136, B, 3)
  );
}

/* PPC builders ────────────────────────────────────────────────────────────── */
// Bowed PPC: M(50,35) Q(50,210) (215,210)  — quadratic bezier, corner control point
function ppcBowed(extras = '', xGood = 'Good X', yGood = 'Good Y') {
  const mx = 132, my = 122;
  return W(
    `<line x1='50' y1='210' x2='230' y2='210' stroke-width='2' class='svg-axis'/>`
    + `<line x1='50' y1='210' x2='50' y2='25' stroke-width='2' class='svg-axis'/>`
    + `<polygon points='230,210 219,205 219,215' class='svg-axis-fill'/>`
    + `<polygon points='50,25 45,36 55,36' class='svg-axis-fill'/>`
    + CLS(140, 238, xGood, 'middle', 12)
    + `<text x='14' y='118' text-anchor='middle' transform='rotate(-90,14,118)' font-size='12' class='svg-label'>${yGood}</text>`
    + CV(`M 50,35 Q 50,210 215,210`, Na, 2.5)
    + extras
  );
}

// Straight-line PPC
function ppcStraight(extras = '') {
  return W(
    `<line x1='50' y1='210' x2='230' y2='210' stroke-width='2' class='svg-axis'/>`
    + `<line x1='50' y1='210' x2='50' y2='25' stroke-width='2' class='svg-axis'/>`
    + `<polygon points='230,210 219,205 219,215' class='svg-axis-fill'/>`
    + `<polygon points='50,25 45,36 55,36' class='svg-axis-fill'/>`
    + CLS(140, 238, 'Good X', 'middle', 12)
    + `<text x='14' y='118' text-anchor='middle' transform='rotate(-90,14,118)' font-size='12' class='svg-label'>Good Y</text>`
    + LN(50, 35, 215, 210, Na, 2.5)
    + extras
  );
}

/* Cost curve builder (310×250) ──────────────────────────────────────────── */
// Fixed curve paths (cubic beziers, single-quoted, no newlines):
//   AVC: min ≈ (145,140) — orange dashed
//   ATC: min ≈ (162,92)  — purple
//   MC:  crosses AVC min, crosses ATC min, then rises steeply — red
//
// MR_y: y-coordinate of the horizontal P=MR line (lower y = higher price)
// Q1_x: x-coordinate where MC = MR (profit-max output)
function costCurves(MR_y, Q1_x, opts = {}) {
  const { showProfit = false, showLoss = false, showBreakeven = false, showShutdown = false } = opts;
  const x0 = 50, y0 = 210;

  // ATC value at Q1_x (approximated from bezier shape):
  //   At x=145: ~125;  x=160: ~92;  x=175: ~97;  x=185: ~105;  x=195: ~115
  function atcAt(x) {
    if (x <= 130) return 140;
    if (x <= 145) return 125;
    if (x <= 162) return 92 + (x - 162) * 0;   // min
    if (x <= 175) return 92 + (x - 162) * 0.38;
    if (x <= 190) return 97 + (x - 175) * 0.53;
    return 105 + (x - 190) * 0.7;
  }
  const atcY = Math.round(atcAt(Q1_x));

  let extras = '';

  // P=MR horizontal line
  extras += LN(x0, MR_y, 275, MR_y, B, 2.2)
    + TXT(278, MR_y + 4, 'P=MR', B, 'start', 10, true);

  // MC = MR intersection
  extras += DL(Q1_x, MR_y, Q1_x, y0) + CLS(Q1_x, 224, 'Q*', 'middle')
    + DL(x0, atcY, Q1_x, atcY, Pu) + TXT(x0 - 4, atcY + 4, 'ATC', Pu, 'end', 10)
    + TXT(x0 - 4, MR_y + 4, 'P', B, 'end', 10)
    + DOT(Q1_x, MR_y, B, 4);

  if (showProfit && MR_y < atcY) {
    extras += BOX(x0, MR_y, Q1_x - x0, atcY - MR_y, G, 0.35)
      + TXT((x0 + Q1_x) / 2, (MR_y + atcY) / 2 + 4, 'Profit', G, 'middle', 10, true);
  }
  if (showLoss && MR_y > atcY) {
    extras += BOX(x0, atcY, Q1_x - x0, MR_y - atcY, R, 0.3)
      + TXT((x0 + Q1_x) / 2, (atcY + MR_y) / 2 + 4, 'Loss', R, 'middle', 10, true);
  }
  if (showBreakeven) {
    extras += DOT(162, 92, Pu, 5) + TXT(170, 88, 'Break-even', Pu, 'start', 10)
      + DOT(145, 140, Or, 5) + TXT(153, 136, 'Shutdown pt.', Or, 'start', 10);
  }
  if (showShutdown) {
    // P line below AVC — show it's below the AVC curve visually
    extras += TXT(Q1_x + 8, MR_y - 6, 'P < AVC', R, 'start', 10, true);
  }

  return W(
    AX(x0, y0, 290, 20, 'Quantity', 'Price / Cost')
    + CV(`M 70,185 C 100,130 128,128 145,140 C 162,152 195,162 235,178`, Or, 1.8)
    + TXT(238, 181, 'AVC', Or, 'start', 11, true)
    + CV(`M 70,162 C 100,95 135,88 162,92 C 185,97 210,110 240,130`, Pu, 2)
    + TXT(243, 133, 'ATC', Pu, 'start', 11, true)
    + CV(`M 70,180 C 90,140 108,132 120,135 C 138,140 148,140 162,92 C 172,60 192,44 225,38`, R, 2.5)
    + TXT(228, 40, 'MC', R, 'start', 11, true)
    + extras
  , 310, 250);
}

/* Monopoly graph (310×250) ─────────────────────────────────────────────── */
// D:  (70,35)→(250,195)  slope = 160/180 = 0.889
// MR: (70,35)→(160,215)  (same y-intercept, twice slope → hits x-axis at midpoint Q)
// MC: (70,165)→(240,68)  upward sloping (lower y = higher cost as Q rises)
// ATC: U-shaped cubic bezier, min ≈ (155,105)
// Qm: where MC=MR ≈ x=132, y_MR≈132, y_D≈104 (Pm), ATC at Qm ≈ 118 → Pm>ATC → profit
function monopolyGraph(opts = {}) {
  const { showProfit = false, showDWL = false, showLRTangency = false } = opts;
  const x0 = 50, y0 = 210;

  // D at x:  y = 35 + 160/180*(x-70) = 35 + 0.889*(x-70)
  // MR at x: y = 35 + 160/90*(x-70)  = 35 + 1.778*(x-70)  (hits y0=210 at x=70+175/1.778=70+98.4=168)
  // MC at x: y = 165 + (68-165)/(240-70)*(x-70) = 165 - 0.571*(x-70)
  // MC=MR:  165-0.571*(x-70) = 35+1.778*(x-70) → 130 = 2.349*(x-70) → x-70=55.3 → x=125
  // y_MR at x=125: 35+1.778*55 = 35+97.8 = 132.8 ≈ 133
  // Pm (D at x=125): 35+0.889*55 = 35+48.9 = 83.9 ≈ 84
  // ATC at x=125 (from bezier, left of min): ≈ 115
  // Pm=84 < ATC=115 → LOSS. Need to adjust.
  //
  // To get profit: use Qm=145, Pm=D(145)=35+0.889*75=35+66.7=101.7≈102
  // ATC at x=145 ≈ 105 → Pm=102 < ATC=105 → still tiny loss.
  // Use Qm=155, Pm=D(155)=35+0.889*85=35+75.6=110.6≈111, ATC at 155≈103 → Pm=111>ATC=103 → PROFIT ✓
  const Qm_x = 155, Pm_y = 111, ATC_Qm = 103;
  // Qc (competitive) where MC=D: 165-0.571*(x-70)=35+0.889*(x-70) → 130=1.46*(x-70) → x=159 ≈ x=160
  const Qc_x = 160, Pc_y = Math.round(35 + 0.889 * (160 - 70)); // =115

  let extras = '';
  extras += DL(x0, Pm_y, Qm_x, Pm_y, B) + TXT(x0 - 4, Pm_y + 4, 'P_m', B, 'end', 11)
    + DL(Qm_x, Pm_y, Qm_x, y0) + CLS(Qm_x, 224, 'Q_m', 'middle')
    + DOT(Qm_x, Pm_y, B, 4);

  if (showProfit) {
    extras += BOX(x0, Pm_y, Qm_x - x0, ATC_Qm - Pm_y, G, 0.35)
      + TXT((x0 + Qm_x) / 2, (Pm_y + ATC_Qm) / 2 + 4, 'Profit', G, 'middle', 10, true)
      + DL(x0, ATC_Qm, Qm_x, ATC_Qm, Pu) + TXT(x0 - 4, ATC_Qm + 4, 'ATC', Pu, 'end', 10);
  }
  if (showDWL) {
    // DWL triangle: (Qm_x, Pm_y), (Qc_x, Pc_y), and where MC hits D at Qc
    extras += TRI(`${Qm_x},${Pm_y} ${Qc_x},${Pc_y} ${Qm_x},${Pc_y}`, Am)
      + DL(x0, Pc_y, Qc_x, Pc_y) + TXT(x0 - 4, Pc_y + 4, 'P_c', Gr, 'end', 10)
      + DL(Qc_x, Pc_y, Qc_x, y0) + CLS(Qc_x, 224, 'Q_c', 'middle')
      + TXT((Qm_x + Qc_x) / 2, (Pm_y + Pc_y) / 2 + 4, 'DWL', Am, 'middle', 10, true);
  }

  return W(
    AX(x0, y0, 285, 20, 'Quantity', 'Price / Cost')
    + LN(70, 35, 250, 195, B, 2.5) + TXT(254, 198, 'D=AR', B, 'start', 11, true)
    + LN(70, 35, 162, 210, '#7c3aed', 2)  + TXT(165, 210, 'MR', '#7c3aed', 'start', 11, true)
    + LN(70, 165, 240, 68, R, 2.5)        + TXT(243, 71, 'MC', R, 'start', 11, true)
    + CV(`M 70,150 C 100,100 125,96 155,103 C 182,110 210,122 240,140`, Pu, 2)
    + TXT(243, 143, 'ATC', Pu, 'start', 11, true)
    + extras
  , 310, 250);
}

/* Labor market builder (310×250) ────────────────────────────────────────── */
// MRP (labor demand): (70,40)→(250,190)  downward sloping (in SVG: y increases → lower wage)
// SL  (labor supply): (70,190)→(250,40)  upward sloping
// Competitive eq: (160,115)
// MFC: above SL — (70,130)→(250,40) shifted up
function laborGraph(opts = {}) {
  const { showMono = false, showMinWage = false, minWageY = 0 } = opts;
  const x0 = 50, y0 = 210;

  // Monopsony:
  //   MFC steeper than SL. MFC: (70,60)→(180,210) (roughly)
  //   Monopsony eq: MRP=MFC → x=145, y_MFC≈145 (employment), wage on SL at x=145 = ?
  //   SL at x=145: y = 190-(190-40)/(250-70)*(145-70) = 190-150/180*75 = 190-62.5=127.5≈128 → W_mono=128
  //   Competitive eq (MRP=SL): x=160, y=115 → W_comp=115
  // In SVG: lower y = higher wage. W_mono(y=128) < W_comp(y=115) → monopsony pays less ✓
  // L_mono=145 < L_comp=160 → monopsony hires fewer ✓

  let extras = '';
  extras += LN(70, 40, 250, 190, Te, 2.5) + TXT(254, 193, 'MRP', Te, 'start', 11, true);
  extras += LN(70, 190, 250, 40, G, 2.5)  + TXT(254, 43, 'S_L', G, 'start', 11, true);

  if (!showMono) {
    // Competitive: just show eq
    extras += DL(50, 115, 160, 115) + CLS(46, 119, 'W*')
      + DL(160, 115, 160, 210) + CLS(160, 224, 'L*', 'middle')
      + DOT(160, 115, '#ef4444', 4);
  } else {
    // Monopsony: show MFC, two equilibria
    extras += LN(70, 60, 185, 210, Or, 2) + TXT(188, 210, 'MFC', Or, 'start', 11, true);
    // Mono eq at x=145
    const monoX = 145, mfcY = 145, wMonoY = 128;
    extras += DL(50, mfcY, monoX, mfcY, Or)   // MFC=MRP line
      + DL(monoX, mfcY, monoX, 210) + CLS(monoX, 224, 'L_m', 'middle')
      + DL(50, wMonoY, monoX, wMonoY, G) + CLS(46, wMonoY + 4, 'W_m')
      + DOT(monoX, mfcY, Or, 4) + DOT(monoX, wMonoY, G, 3)
      // Competitive reference
      + DL(50, 115, 160, 115, '#94a3b8', 1.2) + CLS(46, 119, 'W_c')
      + DL(160, 115, 160, 210, '#94a3b8', 1.2) + CLS(160, 224, 'L_c', 'middle');
    if (showMinWage && minWageY > 0) {
      extras += LN(50, minWageY, 265, minWageY, R, 2)
        + TXT(44, minWageY + 4, 'W_min', R, 'end', 11, true);
    }
  }

  return W(
    AX(x0, y0, 270, 20, 'Labor (Workers)', 'Wage')
    + extras
  , 310, 250);
}

/* Externality graph (310×250) ───────────────────────────────────────────── */
// D=MPB: (70,40)→(250,190)
// MPC (supply):  (70,190)→(250,80)  upward sloping, shallower
// MSC: above MPC by fixed external cost — (70,140)→(250,30)
// Market eq (D=MPC): x=?  Socially optimal (D=MSC): x=?
// MPC at x: y = 190-(190-80)/(250-70)*(x-70) = 190-110/180*(x-70) = 190-0.611*(x-70)
// D   at x: y = 40+(190-40)/(250-70)*(x-70)  = 40+150/180*(x-70)  = 40+0.833*(x-70)
// Market eq: 190-0.611*(x-70)=40+0.833*(x-70) → 150=1.444*(x-70) → x=174, y=40+0.833*104=126.6≈127
// MSC (30px above MPC): y = 160-0.611*(x-70)
// Social opt (D=MSC): 40+0.833*(x-70)=160-0.611*(x-70) → 1.444*(x-70)=120 → x=153, y=40+0.833*83=109
// Pigouvian tax = MSC-MPC at Q_opt=153: MPC(153)=190-0.611*83=139; MSC(153)=160-0.611*83=109; tax=30px
function negExtGraph() {
  const Qm_x = 174, Qm_y = 127;  // market eq
  const Qs_x = 153, Qs_y = 109;  // social optimum (D=MSC)
  const MPC_at_Qs = Math.round(190 - 0.611 * (Qs_x - 70)); // 139
  const MSC_at_Qs = Qs_y;  // 109 (D=MSC at social opt)
  return W(
    AX(50, 210, 280, 20, 'Quantity', 'Price / Cost')
    + LN(70, 40, 250, 190, B, 2.5)  + TXT(254, 193, 'D=MPB', B, 'start', 11, true)
    + LN(70, 190, 250, 80, G, 2.5)  + TXT(254, 83, 'MPC', G, 'start', 11, true)
    + LN(70, 140, 250, 30, R, 2)    + TXT(254, 33, 'MSC', R, 'start', 11, true)
    // Market eq
    + DL(50, Qm_y, Qm_x, Qm_y) + CLS(46, Qm_y + 4, 'P_m')
    + DL(Qm_x, Qm_y, Qm_x, 210) + CLS(Qm_x, 224, 'Q_m', 'middle')
    + DOT(Qm_x, Qm_y, Gr, 3)
    // Social opt
    + DL(50, Qs_y, Qs_x, Qs_y) + CLS(46, Qs_y + 4, 'P*')
    + DL(Qs_x, Qs_y, Qs_x, 210) + CLS(Qs_x, 224, 'Q*', 'middle')
    + DOT(Qs_x, Qs_y, R, 4)
    // Pigouvian tax bracket (vertical distance MSC-MPC at Q*)
    + LN(Qs_x + 20, Qs_y, Qs_x + 20, MPC_at_Qs, Am, 1.8)
    + TXT(Qs_x + 30, (Qs_y + MPC_at_Qs) / 2 + 4, 'Tax', Am, 'start', 10, true)
  , 310, 250);
}

// Positive externality graph
// D=MPB: (70,40)→(250,190)
// MSB: above MPB — (70,20)→(250,160)  (shifted up 20px)
// MPC (supply): (70,190)→(250,70)
// Market eq (D=MPC): 40+0.833*(x-70)=190-0.611*(x-70) → same as before: x=174, y=127
// Social opt (MSB=MPC): (20+0.833*(x-70))=(190-0.611*(x-70)) → 1.444*(x-70)=170 → x=188, y=20+0.833*118=118.3≈118
// Subsidy = MSB-MPB at Q_opt: = 20px (the vertical shift)
function posExtGraph() {
  const Qm_x = 174, Qm_y = 127;
  const Qs_x = 188, Qs_y = 118;
  const MPB_at_Qs = Math.round(40 + 0.833 * (Qs_x - 70)); // 40+98=138
  const MSB_at_Qs = Qs_y; // 118
  return W(
    AX(50, 210, 280, 20, 'Quantity', 'Price / Cost')
    + LN(70, 40, 250, 190, B, 2.5)  + TXT(254, 193, 'D=MPB', B, 'start', 11, true)
    + LN(70, 20, 250, 160, '#7c3aed', 2) + TXT(254, 163, 'MSB', '#7c3aed', 'start', 11, true)
    + LN(70, 190, 250, 70, G, 2.5)  + TXT(254, 73, 'MPC=S', G, 'start', 11, true)
    + DL(50, Qm_y, Qm_x, Qm_y) + CLS(46, Qm_y + 4, 'P_m')
    + DL(Qm_x, Qm_y, Qm_x, 210) + CLS(Qm_x, 224, 'Q_m', 'middle')
    + DOT(Qm_x, Qm_y, Gr, 3)
    + DL(50, Qs_y, Qs_x, Qs_y) + CLS(46, Qs_y + 4, 'P*')
    + DL(Qs_x, Qs_y, Qs_x, 210) + CLS(Qs_x, 224, 'Q*', 'middle')
    + DOT(Qs_x, Qs_y, '#7c3aed', 4)
    + LN(Qs_x + 20, Qs_y, Qs_x + 20, MPB_at_Qs, Am, 1.8)
    + TXT(Qs_x + 30, (Qs_y + MPB_at_Qs) / 2 + 4, 'Sub.', Am, 'start', 10, true)
  , 310, 250);
}

// Lorenz curve
function lorenzGraph() {
  return W(
    AX(50, 210, 260, 20, 'Cumulative % Population', 'Cumulative % Income')
    + CLS(155, 224, '0%→100%', 'middle', 10)
    + LN(50, 210, 260, 20, Gr, 1.5)   // 45-degree line of perfect equality
    + TXT(254, 16, 'Perfect Equality', Gr, 'start', 10)
    + CV(`M 50,210 C 100,210 160,190 260,20`, Na, 2.5)  // Lorenz curve
    + TXT(180, 170, 'Lorenz Curve', Na, 'middle', 11, true)
    // Gini shading between 45-deg line and Lorenz curve
    + `<path d='M 50,210 L 260,20 C 160,190 100,210 50,210 Z' fill='${Am}' opacity='0.25'/>`
    + TXT(130, 145, 'A', Am, 'middle', 13, true)
    + TXT(175, 110, 'B', Na, 'middle', 13, true)
  , 310, 250);
}

/* ── Validation ──────────────────────────────────────────────────────────── */
function validate(q, seenIds) {
  const errs = [];
  for (const f of ['id','subject','unit','topic','topicLabel','difficulty','source','question','choices','answer','explanation']) {
    if (q[f] === undefined) errs.push(`Missing field: ${f}`);
  }
  if (Array.isArray(q.choices) && q.choices.length !== 5)
    errs.push(`choices.length=${q.choices.length} (expected 5)`);
  if (typeof q.answer === 'number' && (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 4))
    errs.push(`answer out of bounds: ${q.answer}`);
  if (Array.isArray(q.choices) && q.choices.some(c => /^[A-E]\)\s/.test(String(c))))
    errs.push('Choice has embedded label prefix (A) B) etc.)');
  if (q.graphSvg) {
    const s = q.graphSvg;
    if (!s.trim().startsWith('<svg'))   errs.push('graphSvg does not start with <svg');
    if (!s.trim().endsWith('</svg>'))   errs.push('graphSvg does not end with </svg>');
    if (/[\n\r\t]/.test(s))             errs.push('graphSvg contains raw newline/tab');
    if (s.includes('"'))                errs.push('graphSvg contains unescaped double quote');
    if (!s.includes('svg-axis'))        errs.push('graphSvg missing class svg-axis');
    if (!s.includes('svg-label'))       errs.push('graphSvg missing class svg-label');
  }
  if (q.tableData) {
    if (!Array.isArray(q.tableData.headers)) errs.push('tableData.headers must be an array');
    if (!Array.isArray(q.tableData.rows))    errs.push('tableData.rows must be an array');
  }
  if (!q.graphSvg && !q.tableData)
    errs.push('Question has no visual stimulus (graphSvg or tableData)');
  if (seenIds.has(q.id)) errs.push(`Duplicate ID: ${q.id}`);
  try { JSON.parse(JSON.stringify(q)); } catch (e) { errs.push(`JSON roundtrip failed: ${e.message}`); }
  return errs;
}

/* ── Question definitions ────────────────────────────────────────────────── */
// buildSvg functions run after all builders are defined — no circular deps.
const NEW_QUESTIONS = [

  // ── UNIT 1: PPC ─────────────────────────────────────────────────────────────
  {
    id: 'micro_graph_u1_001', subject: 'apmicro', unit: 1,
    topic: 'PPC and opportunity cost', topicLabel: 'Production Possibilities Curve',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows a bowed-out production possibilities curve (PPC) with points A and B. Moving from point A to point B increases production of Good X. Which of the following must be true about opportunity cost?',
    buildSvg: () => ppcBowed(
      DOT(85, 90, R, 5) + TXT(93, 87, 'A', R, 'start', 12, true)
      + DOT(155, 155, R, 5) + TXT(163, 152, 'B', R, 'start', 12, true)
    ),
    choices: [
      'The opportunity cost of Good X decreases because the economy becomes more efficient.',
      'The opportunity cost of Good X remains constant because both points are on the PPC.',
      'The opportunity cost of Good X increases because resources are not perfectly adaptable.',
      'The opportunity cost of Good Y decreases because less of it is produced.',
      'The opportunity cost of Good X cannot be determined without knowing the slope at each point.',
    ],
    answer: 2,
    explanation: 'A bowed-out PPC reflects the law of increasing opportunity costs. As the economy moves from A to B and produces more of Good X, it must reallocate resources that are progressively less suited for Good X production, so each additional unit of Good X requires giving up increasing amounts of Good Y. Both points being on the PPC only means the economy is efficient — not that opportunity cost is constant (that applies to a straight-line PPC). The opportunity cost of Good Y is not directly addressed by this movement.',
  },
  {
    id: 'micro_graph_u1_002', subject: 'apmicro', unit: 1,
    topic: 'PPC and opportunity cost', topicLabel: 'Production Possibilities Curve',
    difficulty: 'easy', source: 'Generated',
    question: 'The graph below shows a straight-line production possibilities curve. Which of the following statements about this economy is correct?',
    buildSvg: () => ppcStraight(
      CLS(220, 214, '200', 'middle', 10) + CLS(46, 38, '200', 'end', 10)
      + CLS(135, 214, '100', 'middle', 10) + CLS(46, 124, '100', 'end', 10)
      + DL(135, 124, 135, 210, Gr, 1.2) + DL(50, 124, 135, 124, Gr, 1.2)
    ),
    choices: [
      'The opportunity cost of Good X increases as more of it is produced.',
      'The opportunity cost of Good X is constant at 1 unit of Good Y per unit of Good X.',
      'The economy faces increasing opportunity costs due to resource specialization.',
      'Resources are equally productive in both goods, so opportunity cost is zero.',
      'The economy cannot produce at any point on this curve without economic growth.',
    ],
    answer: 1,
    explanation: 'A straight-line PPC indicates constant opportunity costs — each additional unit of Good X always requires giving up the same number of units of Good Y, regardless of how much is already produced. This occurs when resources are equally productive in both uses. From the graph, going from 0 to 200 units of Good X costs 200 units of Good Y, so the opportunity cost is 1:1. A bowed-out (not straight) PPC reflects increasing opportunity costs. Resources being equally productive does not mean opportunity cost is zero — there is always a trade-off.',
  },
  {
    id: 'micro_graph_u1_003', subject: 'apmicro', unit: 1,
    topic: 'PPC and economic growth', topicLabel: 'Production Possibilities Curve',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows a country\'s original PPC (solid) and a new PPC after a change (dashed). Which of the following best explains the shift shown?',
    buildSvg: () => W(
      `<line x1='50' y1='210' x2='230' y2='210' stroke-width='2' class='svg-axis'/>`
      + `<line x1='50' y1='210' x2='50' y2='25' stroke-width='2' class='svg-axis'/>`
      + `<polygon points='230,210 219,205 219,215' class='svg-axis-fill'/>`
      + `<polygon points='50,25 45,36 55,36' class='svg-axis-fill'/>`
      + CLS(140, 238, 'Capital Goods', 'middle', 12)
      + `<text x='14' y='118' text-anchor='middle' transform='rotate(-90,14,118)' font-size='12' class='svg-label'>Consumer Goods</text>`
      + CV(`M 50,35 Q 50,210 215,210`, Na, 2.5)
      + TXT(200, 198, 'PPC', Na, 'end', 11, true)
      + CV(`M 50,35 Q 50,210 255,210`, Na, 2)
      + `<line x1='185' y1='193' x2='245' y2='210' stroke='${Na}' stroke-width='2' stroke-dasharray='6,3'/>`
      + TXT(248, 206, "PPC'", Na, 'start', 11, true)
      + DOT(215, 210, Na, 4) + DOT(255, 210, Na, 4)
    ),
    choices: [
      'The country discovered new consumer goods technology, shifting the entire PPC outward equally.',
      'A new capital goods technology improved productivity only in capital goods, rotating the PPC outward along the capital axis.',
      'The country reduced unemployment, moving from inside to outside the PPC.',
      'Increased consumer demand shifted the PPC rightward along the consumer goods axis.',
      'A new trade agreement allowed the country to produce beyond its original PPC.',
    ],
    answer: 1,
    explanation: 'The graph shows the PPC rotating outward along the capital goods (horizontal) axis — the consumer goods maximum (vertical intercept) stays the same, but the maximum capital goods output increases. This occurs when a technological improvement affects only capital goods production, increasing the maximum possible capital output without changing the maximum consumer goods output. A general technological improvement would shift both endpoints outward. Moving from inside to the PPC represents reduced unemployment, not a shift of the curve itself. Demand does not shift the PPC — only changes in resources or technology do.',
  },
  {
    id: 'micro_table_u1_004', subject: 'apmicro', unit: 1,
    topic: 'Comparative advantage', topicLabel: 'Comparative Advantage and Trade',
    difficulty: 'medium', source: 'Generated',
    format: 'table',
    question: 'The table below shows the maximum daily output of wheat (bushels) and cloth (yards) for Country A and Country B using all available resources. Based on this data, which of the following correctly identifies each country\'s comparative advantage?',
    tableData: {
      headers: ['', 'Wheat (bushels/day)', 'Cloth (yards/day)'],
      rows: [
        ['Country A', '120', '60'],
        ['Country B', '80', '80'],
      ],
    },
    choices: [
      'Country A has a comparative advantage in both goods because it can produce more wheat.',
      'Country B has a comparative advantage in wheat; Country A has a comparative advantage in cloth.',
      'Country A has a comparative advantage in wheat; Country B has a comparative advantage in cloth.',
      'Neither country has a comparative advantage because Country A has an absolute advantage in wheat.',
      'Both countries have equal comparative advantage because they face the same opportunity costs.',
    ],
    answer: 2,
    explanation: 'Comparative advantage is determined by opportunity cost, not absolute output. Country A: 1 wheat costs 60/120 = 0.5 cloth; 1 cloth costs 120/60 = 2 wheat. Country B: 1 wheat costs 80/80 = 1 cloth; 1 cloth costs 80/80 = 1 wheat. Country A has a lower opportunity cost for wheat (0.5 cloth vs. 1 cloth) → comparative advantage in wheat. Country B has a lower opportunity cost for cloth (1 wheat vs. 2 wheat) → comparative advantage in cloth. Country A has an absolute advantage in wheat but this does not determine comparative advantage. Both countries can always benefit from specializing according to comparative advantage.',
  },

  // ── UNIT 2: SUPPLY & DEMAND ───────────────────────────────────────────────
  {
    id: 'micro_graph_u2_003', subject: 'apmicro', unit: 2,
    topic: 'Price Controls', topicLabel: 'Price Floors and Ceilings',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows the market for apartments. A price ceiling is set at P_c. Which of the following correctly describes the result of this price ceiling?',
    buildSvg: () => sdPriceCeiling(),
    choices: [
      'A surplus of (Q_S - Q_D) units results because supply exceeds demand at P_c.',
      'A shortage of (Q_D - Q_S) units results because quantity demanded exceeds quantity supplied at P_c.',
      'The market remains in equilibrium because the price ceiling is set below P*.',
      'Producer surplus increases because landlords can charge P_c to all renters.',
      'The price ceiling has no effect because markets always return to P*.',
    ],
    answer: 1,
    explanation: 'A price ceiling set below the equilibrium price (P*) prevents the price from rising to its market-clearing level. At P_c, quantity demanded (Q_D) exceeds quantity supplied (Q_S), creating a shortage equal to Q_D - Q_S. The graph shows Q_D > Q_S at P_c, confirming a shortage. A surplus would occur with a price floor above equilibrium, not a price ceiling below it. The market cannot return to P* because the ceiling legally prevents prices from rising above P_c. Producer surplus falls because landlords receive a lower price than the equilibrium.',
  },
  {
    id: 'micro_graph_u2_004', subject: 'apmicro', unit: 2,
    topic: 'Tax incidence', topicLabel: 'Tax Incidence and Elasticity',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows a market before and after a per-unit tax is imposed. S shifts up to S\'. P_c is the price consumers pay, P_p is the price producers receive, and P* is the original equilibrium. Based on the graph, which of the following is true about the tax burden?',
    buildSvg: () => sdTax(),
    choices: [
      'Consumers and producers share the burden equally because the tax is split evenly.',
      'Producers bear the entire burden because the supply curve shifts.',
      'Consumers bear more of the burden because demand is more inelastic than supply in this market.',
      'Producers bear more of the burden because they receive a lower after-tax price.',
      'Neither consumers nor producers bear the burden; government collects all the revenue.',
    ],
    answer: 2,
    explanation: 'Tax incidence depends on the relative elasticities of supply and demand. The graph shows demand (D) is steeper than supply (S), meaning demand is relatively more inelastic. The consumer burden equals (P* − P_c) in price terms — the price consumers pay rises from P* to P_c. The producer burden equals (P_p − P*) — the price producers receive falls from P* to P_p. Because the demand curve is steeper (more inelastic), the consumer burden (P_c − P*) is larger than the producer burden (P* − P_p). The party with the more inelastic curve always bears more of the tax burden, regardless of who legally remits the tax.',
  },
  {
    id: 'micro_graph_u2_005', subject: 'apmicro', unit: 2,
    topic: 'Deadweight loss', topicLabel: 'Market Efficiency and Deadweight Loss',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows a market with a price ceiling at P_c. The shaded triangle represents the deadweight loss. Which of the following best explains why deadweight loss occurs in this market?',
    buildSvg: () => sdDWL(),
    choices: [
      'Deadweight loss occurs because consumers pay a lower price, reducing government tax revenue.',
      'Deadweight loss occurs because mutually beneficial transactions between Q_S and Q* no longer take place.',
      'Deadweight loss occurs because producer surplus is fully transferred to consumers at P_c.',
      'Deadweight loss occurs because the supply curve shifts leftward in response to the ceiling.',
      'Deadweight loss occurs because the government must subsidize producers to keep them in the market.',
    ],
    answer: 1,
    explanation: 'Deadweight loss is the loss of total economic surplus that results from market inefficiency. The price ceiling limits output to Q_S — all transactions between Q_S and Q* that would have been mutually beneficial (the buyer\'s value exceeds the seller\'s cost) no longer occur. This lost surplus is not captured by anyone — it is simply gone, represented by the shaded triangle. The triangle\'s area equals the sum of the consumer and producer surplus that would have been created at those units. DWL is not about tax revenue (there is no tax here), and the supply curve does not shift — it is the quantity transacted that falls below Q*.',
  },
  {
    id: 'micro_graph_u2_006', subject: 'apmicro', unit: 2,
    topic: 'Supply and demand shifts', topicLabel: 'Supply and Demand',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows an increase in supply from S to S\' in a competitive market. Which of the following correctly describes the new equilibrium compared to the original?',
    buildSvg: () => sdSupplyShift(),
    choices: [
      'Price rises to P\' and quantity falls to Q\', because more supply always increases prices.',
      'Price falls to P\' and quantity rises to Q\', because the supply increase lowers prices and raises output.',
      'Price and quantity both remain at P* and Q* because demand did not change.',
      'Price falls to P\' but quantity remains at Q* because buyers do not respond to lower prices.',
      'Quantity rises to Q\' but price remains at P* because the supply shift is exactly offset by demand.',
    ],
    answer: 1,
    explanation: 'When supply increases (shifts rightward from S to S\'), the new equilibrium is found where S\' intersects the unchanged demand curve. At the original price P*, there is now a surplus because Q_S > Q_D, which drives the price down. The lower price encourages more consumption, so equilibrium quantity rises. The new equilibrium has a lower price (P\') and higher quantity (Q\'). Demand unchanged means the demand curve does not move — it does not mean the equilibrium quantity stays the same, because equilibrium is determined by the intersection of both curves.',
  },
  {
    id: 'micro_graph_u2_007', subject: 'apmicro', unit: 2,
    topic: 'Supply and demand shifts', topicLabel: 'Supply and Demand',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows a decrease in demand from D to D\' in a competitive market. Which of the following correctly describes the adjustment to the new equilibrium?',
    buildSvg: () => sdDemandShift(),
    choices: [
      'Producers respond to the surplus at P* by raising prices, restoring the original equilibrium.',
      'At P*, there is now a surplus, which drives the price down until the market clears at P\' and Q\'.',
      'At P*, there is now a shortage, which drives the price up until the market clears at P\' and Q\'.',
      'Quantity adjusts to Q\' immediately, but price remains at P* due to price stickiness.',
      'The supply curve shifts left in response to the demand decrease, doubling the price decline.',
    ],
    answer: 1,
    explanation: 'When demand decreases (shifts leftward from D to D\'), at the original price P* sellers now want to sell more than buyers want to buy — a surplus emerges. This surplus puts downward pressure on price as sellers compete for fewer buyers. Price falls until the quantity demanded equals quantity supplied at the new lower price P\' and lower quantity Q\'. The supply curve does not shift in response to a demand change — only the equilibrium point moves along the existing supply curve. Price stickiness is not a feature of a competitive market model.',
  },

  // ── UNIT 3: COSTS / PERFECT COMPETITION ───────────────────────────────────
  {
    id: 'micro_table_u3_002', subject: 'apmicro', unit: 3,
    topic: 'Production costs', topicLabel: 'Cost Curves and Short-Run Costs',
    difficulty: 'medium', source: 'Generated',
    format: 'table',
    question: 'The table below shows cost data for a firm in the short run. Based on this data, at which output level is Average Total Cost (ATC) minimized?',
    tableData: {
      headers: ['Output (Q)', 'Total Fixed Cost ($)', 'Total Variable Cost ($)', 'Total Cost ($)', 'ATC ($)'],
      rows: [
        ['1', '60', '40', '100', '100.00'],
        ['2', '60', '70', '130', '65.00'],
        ['3', '60', '90', '150', '50.00'],
        ['4', '60', '120', '180', '45.00'],
        ['5', '60', '160', '220', '44.00'],
        ['6', '60', '210', '270', '45.00'],
        ['7', '60', '280', '340', '48.57'],
      ],
    },
    choices: [
      'Q = 3, because total variable cost is minimized at that output.',
      'Q = 4, because total cost is lowest per unit at that output relative to nearby units.',
      'Q = 5, because ATC reaches its minimum value of $44.00 at that output.',
      'Q = 6, because total cost is $270 which is divisible by 6.',
      'Q = 1, because fixed costs are spread over the fewest units at that output.',
    ],
    answer: 2,
    explanation: 'ATC is minimized at the output where TC/Q is lowest. Reading from the table: ATC falls from $100 at Q=1 to $44 at Q=5, then rises to $45 at Q=6 and $48.57 at Q=7. Therefore ATC is minimized at Q=5 with ATC=$44.00. This is the efficient scale of production. ATC at Q=4 is $45, which is higher than at Q=5. Total variable cost being low does not indicate ATC is minimized — ATC includes fixed costs. ATC at Q=1 is the highest because fixed costs are spread over only one unit.',
  },
  {
    id: 'micro_graph_u3_003', subject: 'apmicro', unit: 3,
    topic: 'Shutdown and break-even', topicLabel: 'Cost Curves and Short-Run Costs',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows the cost curves for a perfectly competitive firm with two labeled points. Which of the following correctly identifies the shutdown point and the break-even point?',
    buildSvg: () => costCurves(92, 162, { showBreakeven: true }),
    choices: [
      'The shutdown point is where ATC is minimized; the break-even point is where AVC is minimized.',
      'The shutdown point is where AVC is minimized; the break-even point is where ATC is minimized.',
      'Both points occur where MC intersects the MR line.',
      'The shutdown point is where MC = ATC; the break-even point is where P = MR.',
      'The shutdown point occurs at zero output; the break-even point is where TR = TC.',
    ],
    answer: 1,
    explanation: 'The shutdown point is the minimum of the AVC curve — the price below which the firm cannot cover its variable costs and is better off producing zero output in the short run. If P falls below min AVC, the firm should shut down because operating losses exceed fixed costs. The break-even point is the minimum of the ATC curve — the price at which the firm earns exactly zero economic profit (TR = TC). Between these two prices (P > min AVC but P < min ATC), the firm continues to operate in the short run because it covers variable costs and makes a partial contribution toward fixed costs, minimizing its losses.',
  },
  {
    id: 'micro_graph_u3_004', subject: 'apmicro', unit: 3,
    topic: 'Profit maximization', topicLabel: 'Perfect Competition and Profit Maximization',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows cost curves for a perfectly competitive firm. The shaded rectangle represents the firm\'s economic profit. At which output and price is the firm maximizing profit, and what is true about its situation?',
    buildSvg: () => costCurves(75, 190, { showProfit: true }),
    choices: [
      'The firm produces where P = ATC, earning zero economic profit in the long run.',
      'The firm produces at Q* where MC = MR = P, and earns positive economic profit because P > ATC.',
      'The firm produces beyond Q* to maximize total revenue, earning maximum accounting profit.',
      'The firm is in long-run equilibrium because economic profit always attracts new entrants.',
      'The firm should expand output until price equals the minimum of ATC.',
    ],
    answer: 1,
    explanation: 'A profit-maximizing firm produces where MC = MR, which equals P in perfect competition. At Q*, P exceeds ATC (the market price is above the average total cost at that output), creating a positive economic profit represented by the shaded rectangle: profit per unit = (P - ATC) × Q*. Producing beyond Q* would mean MC > MR, reducing profit. The firm is NOT in long-run equilibrium — the positive economic profit will attract new entrants, shifting the supply curve right and eventually driving price down to the break-even point (P = min ATC). Maximizing revenue (where MR = 0) is not the same as maximizing profit.',
  },
  {
    id: 'micro_graph_u3_005', subject: 'apmicro', unit: 3,
    topic: 'Long-run equilibrium', topicLabel: 'Long-Run Competitive Equilibrium',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows a perfectly competitive firm in long-run equilibrium. The price line is tangent to the ATC curve at its minimum. Which of the following must be true at this equilibrium?',
    buildSvg: () => costCurves(92, 162, {}),
    choices: [
      'The firm is earning a positive economic profit because price exceeds AVC.',
      'The firm is incurring a loss because fixed costs are still positive in the long run.',
      'The firm earns zero economic profit; P = MC = min ATC, and the market is allocatively and productively efficient.',
      'The firm will exit the industry because zero economic profit means accounting losses.',
      'New firms will continue entering the market because P > AVC at this equilibrium.',
    ],
    answer: 2,
    explanation: 'In long-run competitive equilibrium, free entry and exit drive economic profit to zero. When P = min ATC, the firm covers all costs including the opportunity cost of resources (normal profit) but earns no economic profit. At this point, P = MC (allocative efficiency — output is at the socially optimal level) and P = min ATC (productive efficiency — output is at the lowest possible average cost). Zero economic profit does not mean an accounting loss — the firm earns a normal (accounting) profit sufficient to keep it in the industry. Since P = AVC < P and since AVC < ATC, P must be above AVC at this point, but that does not imply economic profit.',
  },
  {
    id: 'micro_graph_u3_006', subject: 'apmicro', unit: 3,
    topic: 'Shutdown decision', topicLabel: 'Cost Curves and Short-Run Costs',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows cost curves for a perfectly competitive firm where the market price P is below the AVC curve at the profit-maximizing output Q*. What should the firm do, and why?',
    buildSvg: () => costCurves(170, 140, { showShutdown: true }),
    choices: [
      'Continue producing at Q* because covering fixed costs reduces the loss.',
      'Expand output beyond Q* until price intersects ATC, eliminating the loss.',
      'Shut down immediately and produce zero output, because P < AVC means losses exceed fixed costs.',
      'Exit the industry permanently, because a firm facing losses can never recover.',
      'Lower its price to attract more buyers and restore profitability.',
    ],
    answer: 2,
    explanation: 'The shutdown rule states that a firm should cease production in the short run when price falls below the minimum average variable cost (P < AVC). When P < AVC, the firm cannot even cover its variable costs from revenue. By producing at Q*, it loses its entire fixed cost PLUS a portion of variable costs. By shutting down, it loses only its fixed costs — which cannot be avoided in the short run. Since losing only fixed costs is better than losing fixed costs plus uncovered variable costs, shutdown minimizes losses. This is a short-run decision — the firm does not necessarily exit permanently; if market conditions improve, it may resume production.',
  },

  // ── UNIT 4: IMPERFECT COMPETITION ─────────────────────────────────────────
  {
    id: 'micro_graph_u4_001', subject: 'apmicro', unit: 4,
    topic: 'Monopoly profit maximization', topicLabel: 'Monopoly',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows a monopolist\'s demand (D=AR), marginal revenue (MR), marginal cost (MC), and average total cost (ATC) curves. The shaded rectangle represents economic profit. Which of the following correctly identifies the profit-maximizing output, price, and profit per unit?',
    buildSvg: () => monopolyGraph({ showProfit: true }),
    choices: [
      'The monopolist produces where D = ATC and charges a price equal to minimum ATC.',
      'The monopolist produces where MR = MC at Q_m, charges price P_m from the demand curve, and earns (P_m − ATC) per unit.',
      'The monopolist produces where P = MC at Q_m to achieve allocative efficiency.',
      'The monopolist produces where MR = 0 to maximize total revenue rather than profit.',
      'The monopolist charges a price equal to MC at Q_m and earns a normal profit only.',
    ],
    answer: 1,
    explanation: 'A monopolist maximizes profit by producing where MR = MC, giving output Q_m. The price is not set where MR = MC — instead, the monopolist goes up to the demand curve at Q_m to find the maximum price consumers will pay, which is P_m. Economic profit per unit equals (P_m − ATC) at Q_m, and total profit equals this margin times Q_m (the shaded rectangle). Unlike a perfectly competitive firm, the monopolist sets P > MC, causing allocative inefficiency. Producing where MR = 0 maximizes total revenue, not profit. The monopolist earns positive economic profit as long as P_m > ATC at Q_m.',
  },
  {
    id: 'micro_graph_u4_002', subject: 'apmicro', unit: 4,
    topic: 'Monopoly deadweight loss', topicLabel: 'Monopoly',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows a monopoly with deadweight loss (DWL) highlighted. Q_m is the monopoly output, Q_c is the competitive output, P_m is the monopoly price, and P_c is the competitive price. Which of the following best explains why DWL exists?',
    buildSvg: () => monopolyGraph({ showDWL: true }),
    choices: [
      'DWL exists because the monopolist earns economic profit, which is a transfer from consumers to producers.',
      'DWL exists because the monopolist produces Q_m < Q_c, eliminating transactions between Q_m and Q_c where consumers valued the good more than its marginal cost.',
      'DWL exists because the monopolist charges P_m > ATC, raising prices above the break-even level.',
      'DWL exists because MR is below the demand curve, reducing the price that consumers pay.',
      'DWL exists because the monopolist faces a downward-sloping demand curve rather than a horizontal one.',
    ],
    answer: 1,
    explanation: 'Deadweight loss from monopoly arises because the monopolist restricts output to Q_m (where MR = MC) rather than the socially optimal Q_c (where P = MC). At any unit between Q_m and Q_c, the consumer\'s willingness to pay (shown by the demand curve) exceeds the marginal cost of production — these are mutually beneficial transactions that would occur in a competitive market but do not occur under monopoly. The DWL triangle represents this lost surplus that neither consumers nor the monopolist capture. Economic profit (consumer surplus transferred to the producer) is not DWL — it is a redistribution. DWL is surplus that is destroyed entirely.',
  },
  {
    id: 'micro_table_u4_003', subject: 'apmicro', unit: 4,
    topic: 'Game theory and Nash equilibrium', topicLabel: 'Oligopoly and Game Theory',
    difficulty: 'hard', source: 'Generated',
    format: 'table',
    question: 'The payoff matrix below shows the annual profits (in millions) for Firm A and Firm B based on their pricing strategies. Each cell shows (Firm A profit, Firm B profit). What is the Nash equilibrium of this game?',
    tableData: {
      headers: ['', 'Firm B: High Price', 'Firm B: Low Price'],
      rows: [
        ['Firm A: High Price', '($12M, $12M)', '($3M, $18M)'],
        ['Firm A: Low Price', '($18M, $3M)', '($8M, $8M)'],
      ],
    },
    choices: [
      'Both firms charge high prices, each earning $12M, because collusion maximizes joint profit.',
      'Firm A charges low price, Firm B charges high price, because Firm A is the market leader.',
      'Both firms charge low prices, each earning $8M, because low price is a dominant strategy for each firm.',
      'Both firms charge high prices, each earning $12M, because neither has an incentive to deviate.',
      'Firm A charges high price, Firm B charges low price, because Firm B has the cost advantage.',
    ],
    answer: 2,
    explanation: 'A Nash equilibrium occurs when no player can improve their payoff by unilaterally changing their strategy. Checking Firm A\'s dominant strategy: if Firm B prices high, Firm A earns $18M (low) vs. $12M (high) → Firm A prefers low. If Firm B prices low, Firm A earns $8M (low) vs. $3M (high) → Firm A prefers low. Low price is a dominant strategy for Firm A. By symmetry, low price is also dominant for Firm B. Both choosing low price ($8M, $8M) is the Nash equilibrium — neither firm can gain by switching alone. The ($12M, $12M) outcome requires both to charge high, but each has an individual incentive to defect to low price, so it is not a Nash equilibrium. This is a classic prisoner\'s dilemma.',
  },
  {
    id: 'micro_graph_u4_004', subject: 'apmicro', unit: 4,
    topic: 'Monopolistic competition', topicLabel: 'Monopolistic Competition',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows a monopolistically competitive firm in long-run equilibrium, where the demand curve is tangent to the ATC curve. Which of the following correctly describes this firm\'s situation?',
    buildSvg: () => W(
      AX(50, 210, 285, 20, 'Quantity', 'Price / Cost')
      + LN(70, 40, 240, 185, B, 2.5)    + TXT(244, 188, 'D', B, 'start', 11, true)
      + LN(70, 40, 158, 210, '#7c3aed', 2) + TXT(161, 210, 'MR', '#7c3aed', 'start', 11, true)
      + LN(70, 165, 235, 72, R, 2.5)    + TXT(238, 75, 'MC', R, 'start', 11, true)
      + CV(`M 70,148 C 100,98 125,90 148,93 C 172,97 200,110 235,130`, Pu, 2)
      + TXT(238, 133, 'ATC', Pu, 'start', 11, true)
      // Tangency at approx (148, 93): D at x=148: y=40+(185-40)/(240-70)*(148-70)=40+145/170*78=40+66.5=106.5... adjust
      // Let tangency at x=140, y=103: D(140)=40+145/170*70=40+59.7=99.7≈100; ATC≈103 close enough visually
      + DL(50, 100, 140, 100) + CLS(46, 104, 'P=ATC')
      + DL(140, 100, 140, 210) + CLS(140, 224, 'Q*', 'middle')
      + DOT(140, 100, Pu, 4)
    , 310, 250),
    choices: [
      'The firm is earning positive economic profit because it produces on the downward-sloping portion of demand.',
      'The firm is in long-run equilibrium earning zero economic profit, but it operates with excess capacity.',
      'The firm is productively efficient because it produces at the minimum of its ATC curve.',
      'The firm will attract new entrants because the tangency point means above-normal returns.',
      'The firm produces the allocatively efficient output because P = MC at the tangency point.',
    ],
    answer: 1,
    explanation: 'In long-run monopolistic competition, free entry and exit drive economic profit to zero, so the demand curve becomes tangent to ATC (P = ATC). The firm earns zero economic profit — just enough to cover all costs including a normal return. However, the tangency occurs to the LEFT of the minimum ATC point, meaning the firm is NOT productively efficient (it does not produce at minimum ATC). This results in excess capacity — the firm could reduce ATC by producing more, but profit-maximization keeps it at a lower output. Since P > MC at the tangency (the demand curve is above MR where MR = MC), the firm is also not allocatively efficient.',
  },
  {
    id: 'micro_graph_u4_005', subject: 'apmicro', unit: 4,
    topic: 'Monopoly vs competitive output', topicLabel: 'Monopoly',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph shows a monopolist with demand (D), marginal revenue (MR), and marginal cost (MC). Q_m is the monopoly output and Q_c is the output that would prevail under perfect competition. Compared to the competitive outcome, the monopolist\'s equilibrium results in which of the following?',
    buildSvg: () => monopolyGraph({ showDWL: false }),
    choices: [
      'A lower price and higher output than the competitive equilibrium.',
      'The same price as competition but lower output, causing consumer surplus to increase.',
      'A higher price (P_m) and lower output (Q_m) than competition, reducing consumer surplus and creating deadweight loss.',
      'The same output as competition but a higher price, transferring all surplus to the monopolist.',
      'A higher price and higher output because the monopolist has superior productive efficiency.',
    ],
    answer: 2,
    explanation: 'A monopolist sets MR = MC to determine Q_m and then charges P_m from the demand curve. Because MR < P for a monopolist (unlike a competitive firm where P = MR), the monopolist produces less than the competitive output Q_c (where P = MC). The monopoly price P_m is higher than the competitive price (which would equal MC). This higher price and lower output reduce consumer surplus and create deadweight loss — the value of foregone transactions between Q_m and Q_c. Some consumer surplus is also transferred to the monopolist as producer surplus (profit), but this is redistribution rather than DWL.',
  },

  // ── UNIT 5: FACTOR MARKETS ────────────────────────────────────────────────
  {
    id: 'micro_table_u5_001', subject: 'apmicro', unit: 5,
    topic: 'Marginal revenue product', topicLabel: 'Factor Markets and MRP',
    difficulty: 'hard', source: 'Generated',
    format: 'table',
    question: 'The table below shows the output and revenue data for a perfectly competitive firm that sells its product at $4 per unit. The market wage is $28 per worker per day. How many workers should the firm hire to maximize profit?',
    tableData: {
      headers: ['Workers', 'Total Output (units)', 'Marginal Product (MP)', 'MRP = MP × Price ($)', 'Wage ($)'],
      rows: [
        ['1', '10', '10', '$40', '$28'],
        ['2', '18', '8',  '$32', '$28'],
        ['3', '24', '6',  '$24', '$28'],
        ['4', '28', '4',  '$16', '$28'],
        ['5', '30', '2',  '$8',  '$28'],
      ],
    },
    choices: [
      '1 worker, because the first worker generates the highest MRP.',
      '2 workers, because MRP ($32) exceeds the wage ($28) and MRP falls below wage for the third worker.',
      '3 workers, because the firm should hire until MRP equals exactly the wage.',
      '4 workers, because total output is maximized at 28 units with 4 workers.',
      '5 workers, because hiring all available workers maximizes total revenue.',
    ],
    answer: 1,
    explanation: 'The profit-maximizing rule for hiring is MRP = Wage (MFC). The firm should hire workers as long as MRP ≥ Wage. Worker 1: MRP = $40 > $28 → hire. Worker 2: MRP = $32 > $28 → hire. Worker 3: MRP = $24 < $28 → do not hire. The firm maximizes profit by hiring 2 workers. At worker 2, MRP ($32) still exceeds the wage ($28), so hiring generates net benefit. Adding worker 3 would cost $28 in wages but generate only $24 in revenue, reducing profit by $4. The firm hires the first worker because it has the highest MRP, not instead of the second — the hiring rule compares each worker\'s MRP to the wage independently.',
  },
  {
    id: 'micro_graph_u5_002', subject: 'apmicro', unit: 5,
    topic: 'Monopsony', topicLabel: 'Monopsony and Labor Market Power',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows a monopsony labor market with MRP (labor demand), labor supply (S_L), marginal factor cost (MFC), and two equilibrium points. W_c and L_c represent the competitive wage and employment level; W_m and L_m represent the monopsony outcomes. Which of the following correctly describes the monopsony outcome compared to the competitive market?',
    buildSvg: () => laborGraph({ showMono: true }),
    choices: [
      'The monopsony pays a higher wage (W_m > W_c) and hires more workers (L_m > L_c) than the competitive market.',
      'The monopsony pays the same wage as competition but restricts employment to maximize profit.',
      'The monopsony pays a lower wage (W_m < W_c) and hires fewer workers (L_m < L_c) compared to competition.',
      'The monopsony pays the competitive wage W_c but hires workers only up to L_m to reduce costs.',
      'The monopsony and competitive markets produce identical outcomes because labor supply is perfectly elastic.',
    ],
    answer: 2,
    explanation: 'A monopsonist maximizes profit by hiring where MRP = MFC (not MRP = wage). Because MFC lies above the labor supply curve (each additional worker raises the wage for all workers, not just the marginal one), the MFC = MRP intersection occurs at a lower employment level (L_m) than the competitive equilibrium (L_c where MRP = S_L = wage). The monopsonist then reads the wage from the supply curve at L_m, giving W_m — which is below the competitive wage W_c. Both the wage and employment are reduced below competitive levels, creating a deadweight loss. This market power resembles monopoly in the product market: restriction of quantity and reduction of price paid.',
  },
  {
    id: 'micro_graph_u5_003', subject: 'apmicro', unit: 5,
    topic: 'Monopsony and minimum wage', topicLabel: 'Monopsony and Labor Market Power',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows a monopsony labor market. The government imposes a minimum wage at W_min, set between the monopsony wage W_m and the competitive wage W_c. Which of the following describes the most likely effect of this minimum wage?',
    buildSvg: () => laborGraph({ showMono: true, showMinWage: true, minWageY: 118 }),
    choices: [
      'Employment falls below L_m because the minimum wage always reduces employment in any labor market.',
      'The minimum wage has no effect in a monopsony because the firm is a wage-setter, not a wage-taker.',
      'Both wages and employment increase toward the competitive level, because the minimum wage eliminates the monopsony\'s ability to pay below W_min.',
      'The firm exits the market because the higher wage makes production unprofitable.',
      'Employment stays at L_m but wages rise to W_min, leaving employment unchanged.',
    ],
    answer: 2,
    explanation: 'In a monopsony, a minimum wage set between W_m and W_c can simultaneously raise both wages AND employment — the opposite of what happens in a competitive market. Here\'s why: below the minimum wage, the firm\'s effective MFC becomes flat at W_min (it can hire additional workers at W_min without raising wages for all workers, because the minimum wage is binding). This makes the effective MFC equal to the supply curve up to the point where supply and W_min intersect. The firm now hires more workers than L_m and pays W_min > W_m. This is a key distinction from competitive markets where a minimum wage above equilibrium always reduces employment.',
  },
  {
    id: 'micro_graph_u5_004', subject: 'apmicro', unit: 5,
    topic: 'Competitive labor market', topicLabel: 'Factor Markets and MRP',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows a competitive labor market in equilibrium. Which of the following would cause both the equilibrium wage and employment level to increase?',
    buildSvg: () => laborGraph({ showMono: false }),
    choices: [
      'A decrease in the price of the product that workers produce, shifting the MRP curve leftward.',
      'An increase in immigration that expands the labor supply, shifting S_L rightward.',
      'An increase in the price of the product that workers produce, shifting the MRP curve rightward.',
      'A government-imposed wage ceiling set below the equilibrium wage W*.',
      'A decrease in the number of firms in the industry, reducing demand for labor.',
    ],
    answer: 2,
    explanation: 'In a competitive labor market, the demand for labor is the marginal revenue product curve (MRP = MP × Price). If the output price rises, MRP increases at every employment level, shifting the MRP (labor demand) curve rightward. A rightward shift in labor demand, with supply unchanged, raises both the equilibrium wage and equilibrium employment. A decrease in output price shifts MRP left, reducing both wage and employment. Immigration increases labor supply (shifts S_L right), which lowers wages and increases employment — wages and employment move in opposite directions. A wage ceiling below equilibrium creates a labor shortage.',
  },

  // ── UNIT 6: MARKET FAILURE ────────────────────────────────────────────────
  {
    id: 'micro_graph_u6_001', subject: 'apmicro', unit: 6,
    topic: 'Negative externalities', topicLabel: 'Externalities and Market Failure',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows a market with a negative externality. D = MPB is the demand (marginal private benefit), MPC is the marginal private cost (supply), and MSC is the marginal social cost. The bracket labeled "Tax" shows the optimal Pigouvian tax. Which of the following correctly describes the relationship between Q_m and Q*?',
    buildSvg: () => negExtGraph(),
    choices: [
      'Q_m < Q* because the market underproduces when there is a negative externality.',
      'Q_m = Q* because the market always produces the socially optimal quantity without intervention.',
      'Q_m > Q* because the market overproduces when producers do not bear the full social cost.',
      'Q_m > Q* because the Pigouvian tax shifts the demand curve leftward, reducing output.',
      'Q_m < Q* because the MSC curve being above MPC means producers earn lower profits.',
    ],
    answer: 2,
    explanation: 'With a negative externality, producers only account for their marginal private cost (MPC), not the full marginal social cost (MSC = MPC + marginal external cost). The market equilibrium (Q_m) occurs where demand (MPB) intersects MPC. The socially optimal output (Q*) occurs where MPB intersects MSC — at a lower quantity, because MSC > MPC. Thus Q_m > Q* — the market overproduces relative to the social optimum. The optimal Pigouvian tax equals the marginal external cost at Q* (the vertical distance between MSC and MPC at that output), which is shown by the bracket. This tax internalizes the externality, causing producers to act as if MSC were their private cost.',
  },
  {
    id: 'micro_graph_u6_002', subject: 'apmicro', unit: 6,
    topic: 'Positive externalities', topicLabel: 'Externalities and Market Failure',
    difficulty: 'hard', source: 'Generated',
    question: 'The graph below shows a market with a positive externality. D = MPB is the market demand, MSB is the marginal social benefit, and MPC = S is the supply. The bracket shows the optimal per-unit subsidy. Which of the following correctly identifies the market failure and the government\'s role?',
    buildSvg: () => posExtGraph(),
    choices: [
      'The market overproduces at Q_m; a per-unit tax equal to the subsidy bracket corrects the inefficiency.',
      'The market underproduces at Q_m < Q* because buyers do not capture the full social benefit; a per-unit subsidy shifts demand rightward to achieve Q*.',
      'The market produces at Q* naturally because firms internalize positive externalities through higher prices.',
      'The market underproduces at Q_m, and a quantity restriction is needed to move output to Q*.',
      'The subsidy shifts the supply curve rightward, raising output to Q* by lowering producers\' costs.',
    ],
    answer: 1,
    explanation: 'With a positive externality, the market demand curve (MPB) understates the true social benefit (MSB > MPB) because third parties also benefit from the good. The market equilibrium Q_m occurs where MPC intersects MPB — which is below the socially optimal output Q* (where MPC = MSB). The government can correct this underproduction with a per-unit subsidy equal to the marginal external benefit at Q* (the vertical distance between MSB and MPB shown by the bracket). The subsidy raises the effective demand from MPB to MSB, shifting the demand curve rightward and increasing output to Q*. Examples include education, vaccines, and research — markets underprovide these relative to the social optimum.',
  },
  {
    id: 'micro_graph_u6_003', subject: 'apmicro', unit: 6,
    topic: 'Lorenz curve', topicLabel: 'Income Inequality and the Lorenz Curve',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows a Lorenz curve for a country\'s income distribution. Region A is between the 45-degree line and the Lorenz curve; region B is below the Lorenz curve. Which of the following correctly describes the Gini coefficient and what a more curved Lorenz curve would imply?',
    buildSvg: () => lorenzGraph(),
    choices: [
      'The Gini coefficient equals region B divided by (A + B); a more curved Lorenz curve implies less inequality.',
      'The Gini coefficient equals region A divided by (A + B); a more curved Lorenz curve implies greater inequality.',
      'The Gini coefficient equals region A alone; it is unaffected by the shape of the Lorenz curve.',
      'The Gini coefficient equals 1 − (A + B); a Gini of 0 represents perfect inequality.',
      'The Gini coefficient is the total area under the Lorenz curve; a larger area means more equality.',
    ],
    answer: 1,
    explanation: 'The Gini coefficient measures income inequality as the ratio of the area between the line of perfect equality (45-degree line) and the Lorenz curve (region A) to the total area below the 45-degree line (A + B). Gini = A / (A + B). A Gini of 0 means perfect equality (the Lorenz curve coincides with the 45-degree line, so A = 0). A Gini of 1 means perfect inequality. A more curved (bowed outward) Lorenz curve means the bottom X% of the population receives a smaller share of income — region A is larger relative to (A + B), so the Gini coefficient is higher, indicating greater inequality. A flatter Lorenz curve (closer to the 45-degree line) implies a Gini closer to 0 and less inequality.',
  },
  {
    id: 'micro_graph_u6_004', subject: 'apmicro', unit: 6,
    topic: 'Negative externalities', topicLabel: 'Externalities and Market Failure',
    difficulty: 'medium', source: 'Generated',
    question: 'The graph below shows a market with a negative externality where MSC lies above MPC. Which of the following best describes what happens to market output and total welfare if no government intervention occurs?',
    buildSvg: () => W(
      AX(50, 210, 280, 20, 'Quantity', 'Price / Cost')
      + LN(70, 40, 250, 190, B, 2.5)  + TXT(254, 193, 'D = MPB', B, 'start', 11, true)
      + LN(70, 190, 250, 80, G, 2.5)  + TXT(254, 83, 'MPC = S', G, 'start', 11, true)
      + LN(70, 140, 250, 30, R, 2)    + TXT(254, 33, 'MSC', R, 'start', 11, true)
      // Market eq (D=MPC): x=174, y=127 (from negExtGraph calc)
      + DL(50, 127, 174, 127, B) + CLS(46, 131, 'P_m')
      + DL(174, 127, 174, 210) + CLS(174, 224, 'Q_m', 'middle')
      + DOT(174, 127, B, 4)
      // Social opt (D=MSC): x=153, y=109
      + DL(50, 109, 153, 109, R, 1.2) + CLS(46, 113, 'P*')
      + DL(153, 109, 153, 210, R, 1.2) + CLS(153, 224, 'Q*', 'middle')
      + DOT(153, 109, R, 3)
      // DWL triangle
      + TRI(`153,109 174,127 153,127`, Am)
      + TXT(160, 125, 'DWL', Am, 'middle', 10, true)
    , 310, 250),
    choices: [
      'The market produces at Q* (the social optimum) because competition forces producers to internalize all costs.',
      'The market produces at Q_m > Q*, generating deadweight loss because the external cost is not reflected in MPC.',
      'The market produces at Q_m < Q*, underproducing because consumers do not value the good highly enough.',
      'The market produces at Q* because the demand curve already incorporates all social benefits and costs.',
      'The market produces at Q_m but total welfare is maximized because private and social costs are equal at equilibrium.',
    ],
    answer: 1,
    explanation: 'Without intervention, the market produces where D (MPB) = MPC, giving Q_m. However, MSC > MPC because of the external cost imposed on third parties not in the transaction. The socially optimal output Q* is where MPB = MSC — lower than Q_m. At units between Q* and Q_m, the marginal social cost exceeds the marginal social benefit: society would be better off not producing those units. The deadweight loss triangle (shaded) represents this welfare loss from overproduction. Producers ignore the external cost because it falls on others, not themselves. A Pigouvian tax equal to the marginal external cost at Q* would internalize this cost and move output to Q*.',
  },
];

/* ── Main ────────────────────────────────────────────────────────────────── */
function main() {
  const FILES = [
    path.join(__dirname, '../js/data/apmicro_mcq.js'),
    path.join(__dirname, '../electron/js/data/apmicro_mcq.js'),
  ];

  const raw = fs.readFileSync(FILES[0], 'utf8');
  const existing = JSON.parse(raw.replace('var APMICRO_MCQ = ', '').replace(/;\s*$/, ''));
  const seenIds  = new Set(existing.map(q => q.id));

  // Build SVGs at runtime by calling builder functions in questions
  const built = NEW_QUESTIONS.map(q => typeof q.buildSvg === 'function'
    ? { ...q, graphSvg: q.buildSvg(), buildSvg: undefined }
    : q
  ).map(q => { delete q.buildSvg; return q; });

  let ok = true;
  built.forEach((q, i) => {
    const errs = validate(q, seenIds);
    if (errs.length) {
      console.error(`\n❌ Q${i + 1} (${q.id || 'NO_ID'}):`);
      errs.forEach(e => console.error(`   • ${e}`));
      ok = false;
    } else {
      seenIds.add(q.id);
      console.log(`✅ ${q.id}`);
    }
  });
  if (!ok) { console.error('\n⛔ Aborted — fix errors above.'); process.exit(1); }

  const all = [...existing, ...built];

  // File-level: full JSON roundtrip
  let parsed;
  try {
    const out = 'var APMICRO_MCQ = ' + JSON.stringify(all, null, 2) + ';';
    parsed = JSON.parse(out.replace('var APMICRO_MCQ = ', '').replace(/;\s*$/, ''));
  } catch (e) {
    console.error('\n⛔ Final JSON.parse failed:', e.message);
    process.exit(1);
  }
  if (parsed.length !== all.length) {
    console.error(`\n⛔ Count mismatch after parse: ${parsed.length} vs ${all.length}`);
    process.exit(1);
  }

  const output = 'var APMICRO_MCQ = ' + JSON.stringify(all, null, 2) + ';';
  FILES.forEach(f => { fs.writeFileSync(f, output, 'utf8'); console.log(`✅ Written → ${f}`); });
  console.log(`\n🎉 Done! ${existing.length} → ${all.length} questions (+${built.length})`);
}

main();

module.exports = {
  W, AX, LN, DL, DOT, TXT, CLS, CV, BOX, TRI, ARW,
  sdBase, sdPriceFloor, sdPriceCeiling, sdDWL, sdTax,
  sdSupplyShift, sdDemandShift,
  ppcBowed, ppcStraight,
  costCurves, monopolyGraph, laborGraph,
  negExtGraph, posExtGraph, lorenzGraph,
};
