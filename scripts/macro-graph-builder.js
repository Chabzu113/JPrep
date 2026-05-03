'use strict';
// macro-graph-builder.js — SVG primitives + graph builders for AP Macro diagrams
// viewBox: 0 0 310 260  |  origin (bottom-left): x=50, y=220
// Drawing area: x ~65–275, y ~35–205

// ─── A. CORE SVG PRIMITIVES ──────────────────────────────────────────────────

function svgOpen() {
  return `<svg viewBox='0 0 310 260' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:13px'>`;
}

/**
 * Both axes + arrowheads + labels.
 * @param {string} xLabel
 * @param {string} yLabel
 */
function axes(xLabel, yLabel) {
  return [
    // X-axis
    `<line x1='50' y1='220' x2='290' y2='220' stroke-width='2' class='svg-axis'/>`,
    // Y-axis
    `<line x1='50' y1='220' x2='50' y2='20' stroke-width='2' class='svg-axis'/>`,
    // X-arrowhead
    `<polygon points='290,220 278,215 278,225' class='svg-axis-fill'/>`,
    // Y-arrowhead
    `<polygon points='50,20 45,32 55,32' class='svg-axis-fill'/>`,
    // X-axis label
    `<text x='290' y='238' text-anchor='end' class='svg-label'>${xLabel}</text>`,
    // Y-axis label (rotated)
    `<text x='16' y='125' text-anchor='middle' transform='rotate(-90,16,125)' class='svg-label'>${yLabel}</text>`,
  ].join('');
}

/**
 * Straight colored line with optional label near end.
 * @param {number} x1 @param {number} y1 @param {number} x2 @param {number} y2
 * @param {string} color  hex color
 * @param {string|null} label
 * @param {number} labelDx  offset from x2
 * @param {number} labelDy  offset from y2
 */
function straightLine(x1, y1, x2, y2, color, label = null, labelDx = 6, labelDy = 0) {
  let s = `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='${color}' stroke-width='2.5' fill='none'/>`;
  if (label) {
    const lx = Math.min(x2 + labelDx, 278);
    s += `<text x='${lx}' y='${y2 + labelDy}' fill='${color}' font-size='13' font-weight='600' class='svg-label'>${label}</text>`;
  }
  return s;
}

/**
 * Vertical line from y=220 to y=20, for LRAS, MS, LRPC.
 * @param {number} x
 * @param {string} color
 * @param {string|null} label
 * @param {boolean} dashed
 */
function verticalLine(x, color, label = null, dashed = false) {
  const dashAttr = dashed ? ` stroke-dasharray='5 3'` : '';
  let s = `<line x1='${x}' y1='220' x2='${x}' y2='20' stroke='${color}' stroke-width='2.5' fill='none'${dashAttr}/>`;
  if (label) {
    s += `<text x='${x + 4}' y='32' fill='${color}' font-size='13' font-weight='600' class='svg-label'>${label}</text>`;
  }
  return s;
}

/**
 * Horizontal dashed reference line (P*), from Y-axis to equilibrium x.
 * @param {number} y       the y-coordinate of the price level
 * @param {number} x1      start x (typically 50 = Y-axis)
 * @param {number} x2      end x (equilibrium x)
 * @param {string|null} label
 */
function refLineH(y, x1, x2, label = null) {
  let s = `<line x1='${x1}' y1='${y}' x2='${x2}' y2='${y}' stroke-width='1.5' class='svg-axis svg-dashed'/>`;
  if (label) {
    s += `<text x='${x1 - 4}' y='${y + 4}' text-anchor='end' class='svg-label'>${label}</text>`;
  }
  return s;
}

/**
 * Vertical dashed reference line (Y*, Q*), from equilibrium y down to X-axis.
 * @param {number} x       the x-coordinate
 * @param {number} y1      start y (equilibrium y)
 * @param {number} y2      end y (typically 220 = X-axis)
 * @param {string|null} label
 */
function refLineV(x, y1, y2, label = null) {
  let s = `<line x1='${x}' y1='${y1}' x2='${x}' y2='${y2}' stroke-width='1.5' class='svg-axis svg-dashed'/>`;
  if (label) {
    s += `<text x='${x}' y='${y2 + 14}' text-anchor='middle' class='svg-label'>${label}</text>`;
  }
  return s;
}

/**
 * Equilibrium dot (grey, works in both light/dark).
 */
function dot(cx, cy) {
  return `<circle cx='${cx}' cy='${cy}' r='5' fill='#94a3b8'/>`;
}

/**
 * Bowed-out PPC bezier curve.
 * @param {number} x0 start x  @param {number} y0 start y
 * @param {number} x1 end x    @param {number} y1 end y
 * @param {string} color
 * @param {string|null} label
 * @param {boolean} dashed
 */
function ppcPath(x0, y0, x1, y1, color, label = null, dashed = false) {
  // Bowed-out bezier: control point pushes the curve outward
  const cx = x1;
  const cy = y0;
  const dashAttr = dashed ? ` stroke-dasharray='5 3'` : '';
  let s = `<path d='M ${x0},${y0} Q ${cx},${cy} ${x1},${y1}' stroke='${color}' stroke-width='2.5' fill='none'${dashAttr}/>`;
  if (label) {
    // Place label near the middle of the curve
    const mx = Math.round((x0 + cx + x1) / 3 + 8);
    const my = Math.round((y0 + cy + y1) / 3 - 4);
    s += `<text x='${mx}' y='${my}' fill='${color}' font-size='13' font-weight='600' class='svg-label'>${label}</text>`;
  }
  return s;
}

/**
 * Small horizontal arrow showing shift direction.
 * @param {number} x1   tail x
 * @param {number} x2   head x
 * @param {number} y    y position
 * @param {string} color
 */
function shiftArrow(x1, x2, y, color) {
  const dir = x2 > x1 ? 1 : -1;
  const headX = x2;
  return [
    `<line x1='${x1}' y1='${y}' x2='${x2 - dir * 8}' y2='${y}' stroke='${color}' stroke-width='2' fill='none'/>`,
    `<polygon points='${headX},${y} ${headX - dir * 8},${y - 5} ${headX - dir * 8},${y + 5}' fill='${color}' stroke='none'/>`,
  ].join('');
}

// ─── B. GRAPH-TYPE BUILDERS ──────────────────────────────────────────────────

// Intersection of standard downward (65,40)→(270,200) and upward (65,200)→(270,40):
// x = 167, y = 120
const STD_IX = 167;
const STD_IY = 120;

/**
 * Build a PPC diagram.
 * @param {object} cfg
 *   shift {bool}         - draw PPC₁ (faded) + PPC₂ (shifted out, solid)
 *   xLabel {string}
 *   yLabel {string}
 *   points {Array}       - [{label, x, y, color}]
 *   showGrowthArrow {bool}
 */
function buildPPC(cfg = {}) {
  const {
    xLabel = 'Good X',
    yLabel = 'Good Y',
    shift = false,
    points = [],
    showGrowthArrow = false,
  } = cfg;

  let body = axes(xLabel, yLabel);

  if (shift) {
    // PPC₁ faded
    body += ppcPath(52, 38, 220, 205, '#93c5fd', 'PPC₁', true);
    // PPC₂ shifted out (solid, larger)
    body += ppcPath(52, 38, 255, 210, '#3b82f6', 'PPC₂');
    if (showGrowthArrow) {
      body += shiftArrow(190, 230, 100, '#dc2626');
    }
  } else {
    body += ppcPath(52, 38, 240, 215, '#3b82f6', 'PPC');
  }

  // Labeled points
  for (const pt of points) {
    const color = pt.color || '#94a3b8';
    body += `<circle cx='${pt.x}' cy='${pt.y}' r='5' fill='${color}'/>`;
    body += `<text x='${pt.x + 8}' y='${pt.y - 4}' fill='${color}' font-size='13' font-weight='600' class='svg-label'>${pt.label}</text>`;
  }

  return svgOpen() + body + '</svg>';
}

/**
 * Build an AD-AS diagram.
 * @param {object} cfg
 *   lrasX {number}        default 175
 *   adShift {'right'|'left'|null}
 *   srasShift {'right'|'left'|null}
 *   showLRAS {bool}
 *   showEquilibrium {bool}
 *   showGap {bool}        - draw double-headed arrow between LRAS and equilibrium X
 */
function buildADAS(cfg = {}) {
  const {
    lrasX = 175,
    adShift = null,
    srasShift = null,
    showLRAS = true,
    showEquilibrium = true,
    showGap = false,
  } = cfg;

  let body = axes('Real GDP', 'Price Level');

  // AD
  if (adShift) {
    const dx = adShift === 'right' ? 30 : -30;
    // faded original
    body += straightLine(65, 40, 270, 200, '#93c5fd', 'AD₁', 4, 0);
    // shifted solid
    body += straightLine(65 + dx, 40, 270 + dx, 200, '#3b82f6', 'AD₂', 4, 0);
    // shift arrow at mid-height
    body += shiftArrow(167, 167 + dx, 120, '#dc2626');
  } else {
    body += straightLine(65, 40, 270, 200, '#3b82f6', 'AD', 4, 0);
  }

  // SRAS
  if (srasShift) {
    const dx = srasShift === 'right' ? 30 : -30;
    body += straightLine(65, 200, 270, 40, '#86efac', 'SRAS₁', 4, -6);
    body += straightLine(65 + dx, 200, 270 + dx, 40, '#16a34a', 'SRAS₂', 4, -6);
    body += shiftArrow(167, 167 + dx, 120, '#dc2626');
  } else {
    body += straightLine(65, 200, 270, 40, '#16a34a', 'SRAS', 4, -6);
  }

  // LRAS vertical
  if (showLRAS) {
    body += verticalLine(lrasX, '#f97316', 'LRAS');
  }

  // Equilibrium: where AD and SRAS intersect (approximate)
  let eqX = STD_IX;
  let eqY = STD_IY;
  if (adShift) {
    const dx = adShift === 'right' ? 30 : -30;
    eqX = STD_IX + dx / 2;
    eqY = STD_IY;
  }
  if (srasShift) {
    const dx = srasShift === 'right' ? 30 : -30;
    eqX = STD_IX + dx / 2;
    eqY = STD_IY;
  }

  if (showEquilibrium) {
    body += refLineH(eqY, 50, eqX, 'P*');
    body += refLineV(eqX, eqY, 220, 'Y*');
    body += dot(eqX, eqY);
  }

  // Recessionary/inflationary gap arrow
  if (showGap && showLRAS) {
    const gapX1 = Math.min(eqX, lrasX) + 4;
    const gapX2 = Math.max(eqX, lrasX) - 4;
    if (gapX2 > gapX1) {
      const gy = eqY - 18;
      body += `<line x1='${gapX1}' y1='${gy}' x2='${gapX2}' y2='${gy}' stroke='#dc2626' stroke-width='1.5' fill='none'/>`;
      body += `<polygon points='${gapX1},${gy} ${gapX1 + 7},${gy - 4} ${gapX1 + 7},${gy + 4}' fill='#dc2626' stroke='none'/>`;
      body += `<polygon points='${gapX2},${gy} ${gapX2 - 7},${gy - 4} ${gapX2 - 7},${gy + 4}' fill='#dc2626' stroke='none'/>`;
      const midX = Math.round((gapX1 + gapX2) / 2);
      body += `<text x='${midX}' y='${gy - 4}' text-anchor='middle' fill='#dc2626' font-size='11' font-weight='600' class='svg-label'>Gap</text>`;
    }
  }

  return svgOpen() + body + '</svg>';
}

/**
 * Build a Money Market diagram.
 * @param {object} cfg
 *   msShift {'right'|'left'|null}
 *   mdShift {'right'|'left'|null}
 *   showEquilibrium {bool}
 *   showRateLabels {bool}    - adds i₁/i₂ on Y-axis
 */
function buildMoneyMarket(cfg = {}) {
  const {
    msShift = null,
    mdShift = null,
    showEquilibrium = true,
    showRateLabels = false,
  } = cfg;

  let body = axes('Quantity of Money', 'Interest Rate (i)');

  // MS vertical supply
  const msX = 167;
  if (msShift) {
    const dx = msShift === 'right' ? 35 : -35;
    body += verticalLine(msX, '#86efac', 'MS₁');
    body += verticalLine(msX + dx, '#16a34a', 'MS₂');
    body += shiftArrow(msX + (dx > 0 ? 8 : -8), msX + dx - (dx > 0 ? 8 : -8), 60, '#dc2626');
  } else {
    body += verticalLine(msX, '#16a34a', 'MS');
  }

  // MD downward
  if (mdShift) {
    const dx = mdShift === 'right' ? 35 : -35;
    body += straightLine(65, 40, 270, 200, '#93c5fd', 'MD₁', 4, 0);
    body += straightLine(65 + dx, 40, 270 + dx, 200, '#3b82f6', 'MD₂', 4, 0);
    body += shiftArrow(167, 167 + dx, 120, '#dc2626');
  } else {
    body += straightLine(65, 40, 270, 200, '#3b82f6', 'MD', 4, 0);
  }

  // eqY: y where the CURRENT MD line crosses x=msX
  // For mdShift, use the shifted MD endpoints
  let mdX1 = 65, mdY1 = 40, mdX2 = 270, mdY2 = 200;
  if (mdShift) {
    const mdDx = mdShift === 'right' ? 35 : -35;
    mdX1 = 65 + mdDx; mdX2 = 270 + mdDx;
  }
  const eqY = Math.round(mdY1 + (msX - mdX1) * (mdY2 - mdY1) / (mdX2 - mdX1));

  if (showEquilibrium) {
    body += refLineH(eqY, 50, msX, 'i*');
    body += dot(msX, eqY);
  }

  if (showRateLabels && msShift) {
    const dx = msShift === 'right' ? 35 : -35;
    const newEqX = msX + dx;
    const newEqY = Math.round(40 + (newEqX - 65) * (200 - 40) / (270 - 65));
    body += refLineH(newEqY, 50, newEqX, 'i₂');
    // rename original
    // (already drawn i*, add i₁ label near original)
    body += `<text x='46' y='${eqY + 4}' text-anchor='end' class='svg-label'>i₁</text>`;
    body += dot(newEqX, newEqY);
  }

  return svgOpen() + body + '</svg>';
}

/**
 * Build a Loanable Funds diagram.
 * @param {object} cfg
 *   demandShift {'right'|'left'|null}
 *   supplyShift {'right'|'left'|null}
 *   showEquilibrium {bool}
 */
function buildLoanableFunds(cfg = {}) {
  const {
    demandShift = null,
    supplyShift = null,
    showEquilibrium = true,
  } = cfg;

  let body = axes('Quantity of Loanable Funds', 'Real Interest Rate (r)');

  // D_LF downward sloping
  if (demandShift) {
    const dx = demandShift === 'right' ? 30 : -30;
    body += straightLine(65, 40, 270, 200, '#93c5fd', 'D_LF₁', 4, 0);
    body += straightLine(65 + dx, 40, 270 + dx, 200, '#3b82f6', 'D_LF₂', 4, 0);
    body += shiftArrow(167, 167 + dx, 120, '#dc2626');
  } else {
    body += straightLine(65, 40, 270, 200, '#3b82f6', 'D_LF', 4, 0);
  }

  // S_LF upward sloping
  if (supplyShift) {
    const dx = supplyShift === 'right' ? 30 : -30;
    body += straightLine(65, 200, 270, 40, '#86efac', 'S_LF₁', 4, -6);
    body += straightLine(65 + dx, 200, 270 + dx, 40, '#16a34a', 'S_LF₂', 4, -6);
    body += shiftArrow(167, 167 + dx, 120, '#dc2626');
  } else {
    body += straightLine(65, 200, 270, 40, '#16a34a', 'S_LF', 4, -6);
  }

  if (showEquilibrium) {
    let eqX = STD_IX;
    let eqY = STD_IY;
    if (demandShift) { const dx = demandShift === 'right' ? 30 : -30; eqX += dx / 2; }
    if (supplyShift) { const dx = supplyShift === 'right' ? 30 : -30; eqX += dx / 2; }
    body += refLineH(eqY, 50, eqX, 'r*');
    body += refLineV(eqX, eqY, 220, 'Q*');
    body += dot(eqX, eqY);
  }

  return svgOpen() + body + '</svg>';
}

/**
 * Build a Phillips Curve diagram.
 * @param {object} cfg
 *   showLRPC {bool}
 *   lrpcX {number}     default 175 (natural rate of unemployment)
 *   srpcShift {'right'|'left'|null}
 *   showPoint { x, y, label } | null
 */
function buildPhillipsCurve(cfg = {}) {
  const {
    showLRPC = false,
    lrpcX = 175,
    srpcShift = null,
    showPoint = null,
  } = cfg;

  let body = axes('Unemployment Rate', 'Inflation Rate');

  // SRPC downward sloping
  if (srpcShift) {
    const dx = srpcShift === 'right' ? 30 : -30;
    body += straightLine(65, 40, 270, 200, '#93c5fd', 'SRPC₁', 4, 0);
    body += straightLine(65 + dx, 40, 270 + dx, 200, '#3b82f6', 'SRPC₂', 4, 0);
    body += shiftArrow(167, 167 + dx, 120, '#dc2626');
  } else {
    body += straightLine(65, 40, 270, 200, '#3b82f6', 'SRPC', 4, 0);
  }

  // LRPC vertical
  if (showLRPC) {
    body += verticalLine(lrpcX, '#f97316', 'LRPC');
  }

  // Optional marked point
  if (showPoint) {
    const { x, y, label } = showPoint;
    body += dot(x, y);
    body += `<text x='${x + 8}' y='${y - 4}' fill='#94a3b8' font-size='13' font-weight='600' class='svg-label'>${label}</text>`;
  }

  return svgOpen() + body + '</svg>';
}

/**
 * Build a Foreign Exchange Market diagram.
 * @param {object} cfg
 *   currency {string}    default 'Foreign Currency'
 *   demandShift {'right'|'left'|null}
 *   supplyShift {'right'|'left'|null}
 *   showEquilibrium {bool}
 */
function buildFOREX(cfg = {}) {
  const {
    currency = 'Foreign Currency',
    demandShift = null,
    supplyShift = null,
    showEquilibrium = true,
  } = cfg;

  let body = axes(`Quantity of ${currency}`, 'Exchange Rate');

  // D_e downward
  if (demandShift) {
    const dx = demandShift === 'right' ? 30 : -30;
    body += straightLine(65, 40, 270, 200, '#93c5fd', 'D_e₁', 4, 0);
    body += straightLine(65 + dx, 40, 270 + dx, 200, '#3b82f6', 'D_e₂', 4, 0);
    body += shiftArrow(167, 167 + dx, 120, '#dc2626');
  } else {
    body += straightLine(65, 40, 270, 200, '#3b82f6', 'D_e', 4, 0);
  }

  // S_e upward
  if (supplyShift) {
    const dx = supplyShift === 'right' ? 30 : -30;
    body += straightLine(65, 200, 270, 40, '#86efac', 'S_e₁', 4, -6);
    body += straightLine(65 + dx, 200, 270 + dx, 40, '#16a34a', 'S_e₂', 4, -6);
    body += shiftArrow(167, 167 + dx, 120, '#dc2626');
  } else {
    body += straightLine(65, 200, 270, 40, '#16a34a', 'S_e', 4, -6);
  }

  if (showEquilibrium) {
    let eqX = STD_IX;
    let eqY = STD_IY;
    if (demandShift) { const dx = demandShift === 'right' ? 30 : -30; eqX += dx / 2; }
    if (supplyShift) { const dx = supplyShift === 'right' ? 30 : -30; eqX += dx / 2; }
    body += refLineH(eqY, 50, eqX, 'e*');
    body += refLineV(eqX, eqY, 220, 'Q*');
    body += dot(eqX, eqY);
  }

  return svgOpen() + body + '</svg>';
}

// ─── C. VALIDATION ───────────────────────────────────────────────────────────

/**
 * Validate a generated SVG string.
 * @param {string} svgString
 * @param {string} graphType  'ppc'|'adas'|'moneymarket'|'loanablefunds'|'phillipscurve'|'forex'
 * @returns {{ valid: boolean, errors?: string[] }}
 */
function validateGraphSvg(svgString, graphType) {
  const errors = [];

  if (!svgString || typeof svgString !== 'string') {
    return { valid: false, errors: ['SVG string is empty or not a string'] };
  }

  // 1. Has opening <svg with viewBox
  if (!/<svg[^>]*viewBox/.test(svgString)) {
    errors.push('Missing <svg with viewBox attribute');
  }

  // 2. Has class='svg-axis' at least 2 times
  const axisMatches = (svgString.match(/class='svg-axis'/g) || []).length;
  if (axisMatches < 2) {
    errors.push(`Expected at least 2 class='svg-axis' occurrences, found ${axisMatches}`);
  }

  // 3. Has class='svg-axis-fill' at least 2 times (arrowheads)
  const arrowMatches = (svgString.match(/class='svg-axis-fill'/g) || []).length;
  if (arrowMatches < 2) {
    errors.push(`Expected at least 2 class='svg-axis-fill' occurrences, found ${arrowMatches}`);
  }

  // 4. Has class='svg-label' at least 2 times (axis text labels)
  const labelMatches = (svgString.match(/class='svg-label'/g) || []).length;
  if (labelMatches < 2) {
    errors.push(`Expected at least 2 class='svg-label' occurrences, found ${labelMatches}`);
  }

  // 5. Has at least one economic curve with hardcoded stroke color
  // Must have a <line or <path with stroke='#... (not svg-axis)
  if (!/<(?:line|path)[^>]*stroke='#[0-9a-fA-F]/.test(svgString)) {
    errors.push('No economic curve found (line or path with hardcoded stroke color)');
  }

  // 6. No raw black/white fill or stroke (dark mode safety)
  if (/stroke='black'|stroke='white'|fill='black'|fill='white'/.test(svgString)) {
    errors.push("Found hardcoded stroke='black', stroke='white', fill='black', or fill='white' — breaks dark mode");
  }

  // 7. Graph-type-specific checks
  const type = (graphType || '').toLowerCase().replace(/[^a-z]/g, '');

  if (type === 'adas') {
    if (!svgString.includes('AD')) errors.push("ADAS graph missing 'AD' label");
    if (!svgString.includes('SRAS')) errors.push("ADAS graph missing 'SRAS' label");
  }

  if (type === 'moneymarket') {
    if (!svgString.includes('MD')) errors.push("Money market graph missing 'MD' label");
    if (!svgString.includes('MS')) errors.push("Money market graph missing 'MS' label");
  }

  if (type === 'loanablefunds') {
    const hasLF = svgString.includes('D_LF') || svgString.includes('S_LF') ||
      (svgString.includes('>D<') || svgString.includes('>S<'));
    if (!hasLF) errors.push("Loanable funds graph missing 'D_LF' or 'S_LF' labels");
  }

  if (type === 'phillipscurve') {
    if (!svgString.includes('SRPC')) errors.push("Phillips curve graph missing 'SRPC' label");
  }

  if (type === 'forex') {
    const hasFX = svgString.includes('D_e') || svgString.includes('S_e') ||
      svgString.includes('Demand') || svgString.includes('Supply');
    if (!hasFX) errors.push("FOREX graph missing demand/supply labels (D_e, S_e, Demand, or Supply)");
  }

  if (type === 'ppc') {
    if (!svgString.includes('PPC')) errors.push("PPC graph missing 'PPC' label");
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }
  return { valid: true };
}

// ─── D. MAIN (self-test) ─────────────────────────────────────────────────────

if (require.main === module) {
  const tests = [
    { type: 'ppc', svg: buildPPC({ shift: true }) },
    { type: 'adas', svg: buildADAS({ showLRAS: true, adShift: 'right' }) },
    { type: 'adas', svg: buildADAS({ showLRAS: true, showGap: true, lrasX: 210 }) },
    { type: 'moneymarket', svg: buildMoneyMarket({ msShift: 'right', showRateLabels: true }) },
    { type: 'loanablefunds', svg: buildLoanableFunds({ demandShift: 'right' }) },
    { type: 'phillipscurve', svg: buildPhillipsCurve({ showLRPC: true, srpcShift: 'right' }) },
    { type: 'forex', svg: buildFOREX({ demandShift: 'right', currency: 'Euros' }) },
  ];

  let allPassed = true;
  tests.forEach(({ type, svg }, i) => {
    const result = validateGraphSvg(svg, type);
    if (!result.valid) {
      console.error(`❌ Test ${i + 1} (${type}) FAILED:`, result.errors);
      allPassed = false;
    } else {
      console.log(`✅ Test ${i + 1} (${type}) passed`);
    }
  });

  if (allPassed) {
    const fs = require('fs');
    fs.writeFileSync(
      __dirname + '/macro-graphs-sample.json',
      JSON.stringify(tests.map(t => t.svg), null, 2)
    );
    console.log('\nSample SVGs written to scripts/macro-graphs-sample.json');
  }
}

module.exports = {
  buildPPC,
  buildADAS,
  buildMoneyMarket,
  buildLoanableFunds,
  buildPhillipsCurve,
  buildFOREX,
  validateGraphSvg,
  // primitives (exported for use in generation scripts)
  svgOpen,
  axes,
  straightLine,
  verticalLine,
  refLineH,
  refLineV,
  dot,
  ppcPath,
  shiftArrow,
};
