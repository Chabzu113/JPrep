'use strict';
// phys1-graph-builder.js — SVG primitives + builders for AP Physics 1 diagrams
// viewBox: 0 0 310 260
// Motion graph origin (bottom-left): x=50, y=220  |  drawing area x=65–275, y=35–205
// FBD center: x=155, y=130
//
// Color rules:
//   gravity   → #dc2626 (red)    — ALWAYS, no exceptions
//   normal    → #3b82f6 (blue)
//   friction  → #f97316 (orange)
//   tension   → #16a34a (green)
//   applied   → #8b5cf6 (purple)
//   spring    → #0891b2 (cyan)
//   net force → #eab308 (yellow)
//   object/surface → svg-axis class (theme-adaptive)
// Never use stroke='black', stroke='white', fill='black', fill='white'.

// ─── A. COLORS ────────────────────────────────────────────────────────────────

const C = {
  gravity:  '#dc2626',
  normal:   '#3b82f6',
  friction: '#f97316',
  tension:  '#16a34a',
  applied:  '#8b5cf6',
  spring:   '#0891b2',
  net:      '#eab308',
  curve:    '#3b82f6',
  curve2:   '#16a34a',
  neutral:  '#94a3b8',
};

// ─── B. CORE SVG PRIMITIVES ───────────────────────────────────────────────────

function svgOpen(extraStyle = '') {
  return `<svg viewBox='0 0 310 260' xmlns='http://www.w3.org/2000/svg' style='max-width:320px;font-family:Inter,system-ui,sans-serif;font-size:13px${extraStyle ? ';' + extraStyle : ''}'>`;
}

/** Both axes + arrowheads + labels (for motion graphs). */
function axes(xLabel, yLabel) {
  return [
    `<line x1='50' y1='220' x2='285' y2='220' stroke-width='2' class='svg-axis'/>`,
    `<line x1='50' y1='220' x2='50' y2='20' stroke-width='2' class='svg-axis'/>`,
    `<polygon points='285,220 273,215 273,225' class='svg-axis-fill'/>`,
    `<polygon points='50,20 45,32 55,32' class='svg-axis-fill'/>`,
    `<text x='282' y='238' text-anchor='end' class='svg-label'>${xLabel}</text>`,
    `<text x='16' y='125' text-anchor='middle' transform='rotate(-90,16,125)' class='svg-label'>${yLabel}</text>`,
  ].join('');
}

/**
 * Arrow vector (force arrow) from (x1,y1) to (x2,y2).
 * Arrowhead at the (x2,y2) end.
 */
function arrow(x1, y1, x2, y2, color, strokeW = 2.5) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len < 1) return '';
  const ux = dx / len;
  const uy = dy / len;
  const headLen = 10;
  const headW = 5;
  // Arrowhead base point
  const bx = x2 - ux * headLen;
  const by = y2 - uy * headLen;
  // Perpendicular
  const px = -uy * headW;
  const py = ux * headW;
  return [
    `<line x1='${x1}' y1='${y1}' x2='${bx.toFixed(1)}' y2='${by.toFixed(1)}' stroke='${color}' stroke-width='${strokeW}' fill='none'/>`,
    `<polygon points='${x2},${y2} ${(bx + px).toFixed(1)},${(by + py).toFixed(1)} ${(bx - px).toFixed(1)},${(by - py).toFixed(1)}' fill='${color}' stroke='none'/>`,
  ].join('');
}

/** Text label at (x, y). anchor: 'start'|'middle'|'end' */
function label(x, y, text, color, anchor = 'start', size = 13, bold = false) {
  const wAttr = bold ? ` font-weight='600'` : '';
  const fillAttr = color ? ` fill='${color}'` : '';
  const sizeAttr = size !== 13 ? ` font-size='${size}'` : '';
  return `<text x='${x}' y='${y}' text-anchor='${anchor}'${fillAttr}${sizeAttr}${wAttr} class='svg-label'>${text}</text>`;
}

/** Horizontal dashed reference line. */
function refH(y, x1, x2, lbl = null) {
  let s = `<line x1='${x1}' y1='${y}' x2='${x2}' y2='${y}' stroke-width='1.5' class='svg-axis svg-dashed'/>`;
  if (lbl) s += label(x1 - 4, y + 4, lbl, null, 'end');
  return s;
}

/** Vertical dashed reference line. */
function refV(x, y1, y2, lbl = null) {
  let s = `<line x1='${x}' y1='${y1}' x2='${x}' y2='${y2}' stroke-width='1.5' class='svg-axis svg-dashed'/>`;
  if (lbl) s += label(x, y2 + 14, lbl, null, 'middle');
  return s;
}

/** Small neutral dot (equilibrium point, node, etc.). */
function dot(cx, cy, color = '#94a3b8', r = 4) {
  return `<circle cx='${cx}' cy='${cy}' r='${r}' fill='${color}'/>`;
}

// ─── C. PHYSICS-SPECIFIC PRIMITIVES ──────────────────────────────────────────

/**
 * Draw a force arrow FROM object center outward.
 * angle: physics convention — 0°=right, 90°=up, 180°=left, 270°=down
 * magnitude: 0–1 scale, controls arrow length (max ~65px)
 */
function forceArrow(cx, cy, angleDeg, magnitude, color, forceLabel) {
  const rad = angleDeg * Math.PI / 180;
  const length = Math.max(30, magnitude * 65);
  // SVG y is flipped vs. physics convention
  const ex = cx + Math.cos(rad) * length;
  const ey = cy - Math.sin(rad) * length;  // negative because SVG y increases downward
  let s = arrow(cx, cy, ex, ey, color);
  // Place label just past arrowhead
  const lx = cx + Math.cos(rad) * (length + 14);
  const ly = cy - Math.sin(rad) * (length + 14);
  const anchor = Math.cos(rad) > 0.1 ? 'start' : Math.cos(rad) < -0.1 ? 'end' : 'middle';
  s += label(Math.round(lx), Math.round(ly), forceLabel, color, anchor, 12, true);
  return s;
}

/** Object box at center (cx, cy). */
function objectBox(cx, cy, w = 30, h = 30, lbl = '') {
  const x = cx - w / 2;
  const y = cy - h / 2;
  let s = `<rect x='${x}' y='${y}' width='${w}' height='${h}' fill='none' stroke-width='2' class='svg-axis'/>`;
  if (lbl) s += label(cx, cy + 5, lbl, null, 'middle', 11);
  return s;
}

/** Horizontal ground surface line with hash marks below it. */
function groundSurface(x1, x2, y) {
  const hashSpacing = 14;
  const hashLen = 8;
  let s = `<line x1='${x1}' y1='${y}' x2='${x2}' y2='${y}' stroke-width='2' class='svg-axis'/>`;
  for (let hx = x1 + 6; hx < x2 - 4; hx += hashSpacing) {
    s += `<line x1='${hx}' y1='${y}' x2='${hx - hashLen}' y2='${y + hashLen}' stroke-width='1' class='svg-axis'/>`;
  }
  return s;
}

/**
 * Inclined surface at angle θ (degrees from horizontal).
 * Goes from (bx, by) at bottom-left up to the right.
 * Returns { svg, tipX, tipY } — tip is the upper corner where object sits.
 */
function inclinedSurface(angleDeg, baseX = 60, baseY = 210, length = 180) {
  const rad = angleDeg * Math.PI / 180;
  const tipX = baseX + length * Math.cos(rad);
  const tipY = baseY - length * Math.sin(rad);
  // Triangle fill point (bottom-right corner)
  const brX = baseX + length;
  const brY = baseY;
  const svg = [
    // Incline face
    `<line x1='${Math.round(baseX)}' y1='${Math.round(baseY)}' x2='${Math.round(tipX)}' y2='${Math.round(tipY)}' stroke-width='2' class='svg-axis'/>`,
    // Base
    `<line x1='${Math.round(baseX)}' y1='${Math.round(baseY)}' x2='${Math.round(brX)}' y2='${Math.round(brY)}' stroke-width='2' class='svg-axis'/>`,
    // Vertical side
    `<line x1='${Math.round(brX)}' y1='${Math.round(brY)}' x2='${Math.round(tipX)}' y2='${Math.round(tipY)}' stroke-width='1' stroke-dasharray='3 3' class='svg-axis'/>`,
    // Angle arc
    `<path d='M ${baseX + 28},${baseY} A 28,28 0 0,0 ${Math.round(baseX + 28 * Math.cos(rad))},${Math.round(baseY - 28 * Math.sin(rad))}' fill='none' stroke-width='1' class='svg-axis'/>`,
    // Angle label
    `<text x='${Math.round(baseX + 35)}' y='${Math.round(baseY - 8)}' class='svg-label' font-size='11'>θ</text>`,
    // Hash marks on base
    ...Array.from({ length: 8 }, (_, i) => {
      const hx = baseX + 16 + i * 18;
      return `<line x1='${Math.round(hx)}' y1='${Math.round(baseY)}' x2='${Math.round(hx - 8)}' y2='${Math.round(baseY + 8)}' stroke-width='1' class='svg-axis'/>`;
    }),
  ].join('');
  return { svg, tipX: Math.round(tipX), tipY: Math.round(tipY) };
}

// ─── D. GRAPH BUILDERS ────────────────────────────────────────────────────────

// ── D1. FREE BODY DIAGRAM ─────────────────────────────────────────────────────

/**
 * Build a Free Body Diagram.
 *
 * cfg.surface: 'horizontal' | 'inclined' | 'wall-left' | 'none'
 * cfg.inclineAngle: number (degrees, required if surface === 'inclined')
 * cfg.objectLabel: string (label inside the box)
 * cfg.forces: Array of { label, angle, magnitude, color }
 *   angle: physics convention (0=right, 90=up, 180=left, 270=down)
 *   magnitude: 0.5–1.5 (1.0 = standard arrow length)
 *   color: use C.gravity / C.normal / C.friction / C.tension / C.applied etc.
 *
 * Guardrails (enforced before rendering):
 *   - gravity force (angle ~270°) color MUST be C.gravity (#dc2626)
 *   - normal perpendicular to surface (validated in validateFBD)
 *   - friction parallel to surface (validated in validateFBD)
 *   - no magnitude ≤ 0
 *   - no duplicate labels
 */
function buildFBD(cfg = {}) {
  const {
    surface = 'none',
    inclineAngle = 30,
    objectLabel = '',
    forces = [],
  } = cfg;

  // Validate before building
  const v = validateFBD(cfg);
  if (!v.valid) {
    throw new Error(`buildFBD validation failed:\n  ${v.errors.join('\n  ')}`);
  }

  let body = '';
  let cx = 155;  // object center x
  let cy = 125;  // object center y

  // Draw surface context
  if (surface === 'horizontal') {
    cy = 118;
    body += groundSurface(60, 250, 148);
  } else if (surface === 'inclined') {
    const { svg, tipX, tipY } = inclinedSurface(inclineAngle, 50, 220, 200);
    body += svg;
    // Position object center on the slope midpoint, offset perpendicular
    const mid = 0.5;
    const rad = inclineAngle * Math.PI / 180;
    cx = Math.round(50 + 200 * mid * Math.cos(rad) + 15 * (-Math.sin(rad)));
    cy = Math.round(220 - 200 * mid * Math.sin(rad) - 15 * Math.cos(rad));
    // Clamp to safe range
    cx = Math.max(80, Math.min(240, cx));
    cy = Math.max(60, Math.min(180, cy));
  } else if (surface === 'wall-left') {
    cx = 165;
    cy = 125;
    // Vertical wall on left
    body += `<line x1='80' y1='40' x2='80' y2='215' stroke-width='2' class='svg-axis'/>`;
    for (let hy = 50; hy < 215; hy += 18) {
      body += `<line x1='80' y1='${hy}' x2='68' y2='${hy + 12}' stroke-width='1' class='svg-axis'/>`;
    }
  }

  // Draw object box
  body += objectBox(cx, cy, 32, 32, objectLabel);

  // Draw each force arrow
  for (const f of forces) {
    body += forceArrow(cx, cy, f.angle, f.magnitude || 1.0, f.color, f.label);
  }

  return svgOpen() + body + '</svg>';
}

// ── D2. MOTION GRAPH ──────────────────────────────────────────────────────────

// Default axis label pairs by graph type
const MOTION_LABELS = {
  'position-time':      { x: 'Time (s)', y: 'Position (m)' },
  'velocity-time':      { x: 'Time (s)', y: 'Velocity (m/s)' },
  'acceleration-time':  { x: 'Time (s)', y: 'Acceleration (m/s²)' },
  'force-displacement': { x: 'Displacement (m)', y: 'Force (N)' },
  'force-time':         { x: 'Time (s)', y: 'Force (N)' },
  'momentum-time':      { x: 'Time (s)', y: 'Momentum (kg·m/s)' },
};

/**
 * Build a motion / kinematic graph.
 *
 * cfg.type: one of the keys in MOTION_LABELS
 * cfg.segments: Array of { x1, y1, x2, y2 } in DATA coordinates
 *   Data x: 0 → xMax (default 6)
 *   Data y: yMin → yMax (default -8 to 8; for position use 0 to 12)
 * cfg.xMax: number (default 6)
 * cfg.yMin: number (default -8)
 * cfg.yMax: number (default 8)
 * cfg.showZeroLine: bool — draw y=0 dashed horizontal (useful for v-t)
 * cfg.xLabel: string override
 * cfg.yLabel: string override
 * cfg.color: curve color (default C.curve)
 * cfg.refLines: Array of { axis:'x'|'y', value: number, lbl: string }
 *
 * Guardrails:
 *   - position-time: consecutive segments must connect (no teleportation)
 *   - all: segments must stay within [xMin=0, xMax] × [yMin, yMax]
 */
function buildMotionGraph(cfg = {}) {
  const {
    type = 'velocity-time',
    segments = [],
    xMax = 6,
    yMin = -8,
    yMax = 8,
    showZeroLine = false,
    color = C.curve,
    refLines = [],
  } = cfg;

  const v = validateMotionGraph(cfg);
  if (!v.valid) throw new Error(`buildMotionGraph failed:\n  ${v.errors.join('\n  ')}`);

  const defaults = MOTION_LABELS[type] || { x: 'x', y: 'y' };
  const xLabel = cfg.xLabel || defaults.x;
  const yLabel = cfg.yLabel || defaults.y;

  // SVG drawing area: x: 65–270, y: 35–205
  const SVG_X1 = 65, SVG_X2 = 270;
  const SVG_Y1 = 35, SVG_Y2 = 205;  // y1=top, y2=bottom

  function toSvgX(dx) {
    return SVG_X1 + (dx / xMax) * (SVG_X2 - SVG_X1);
  }
  function toSvgY(dy) {
    return SVG_Y2 - ((dy - yMin) / (yMax - yMin)) * (SVG_Y2 - SVG_Y1);
  }

  let body = axes(xLabel, yLabel);

  // y=0 reference line (useful for velocity-time)
  if (showZeroLine && yMin < 0 && yMax > 0) {
    const zeroSvgY = toSvgY(0);
    body += refH(Math.round(zeroSvgY), 50, SVG_X2);
  }

  // Extra reference lines
  for (const rl of refLines) {
    if (rl.axis === 'x') {
      const sx = Math.round(toSvgX(rl.value));
      body += refV(sx, SVG_Y1, SVG_Y2, rl.lbl || null);
    } else {
      const sy = Math.round(toSvgY(rl.value));
      body += refH(sy, 50, SVG_X2, rl.lbl || null);
    }
  }

  // Draw segments
  for (const seg of segments) {
    const sx1 = Math.round(toSvgX(seg.x1));
    const sy1 = Math.round(toSvgY(seg.y1));
    const sx2 = Math.round(toSvgX(seg.x2));
    const sy2 = Math.round(toSvgY(seg.y2));
    body += `<line x1='${sx1}' y1='${sy1}' x2='${sx2}' y2='${sy2}' stroke='${color}' stroke-width='2.5' fill='none'/>`;
    // Endpoint dot
    body += dot(sx2, sy2, color, 3);
  }
  // Start dot on first segment
  if (segments.length > 0) {
    const s0 = segments[0];
    body += dot(Math.round(toSvgX(s0.x1)), Math.round(toSvgY(s0.y1)), color, 3);
  }

  return svgOpen() + body + '</svg>';
}

// ── D3. CIRCUIT DIAGRAM ───────────────────────────────────────────────────────

/**
 * Build a DC circuit diagram.
 *
 * cfg.topology: 'series' | 'parallel' | 'series-parallel'
 * cfg.emf: string — battery label e.g. '12 V'
 * cfg.components: Array of { label, value } for series
 * cfg.branches: Array of Array<{ label, value }> for parallel branches
 *   (for series-parallel: components before branches + branches)
 * cfg.showCurrentArrow: bool — draw current direction arrow
 *
 * Guardrails:
 *   - series: 1–4 components allowed
 *   - parallel: 2–3 branches, each 1 component
 *   - series-parallel: 1 series component + 2–3 parallel branches
 *   - battery EMF label must be non-empty
 */
function buildCircuit(cfg = {}) {
  const {
    topology = 'series',
    emf = 'ε',
    components = [],
    branches = [],
    showCurrentArrow = false,
  } = cfg;

  const v = validateCircuit(cfg);
  if (!v.valid) throw new Error(`buildCircuit failed:\n  ${v.errors.join('\n  ')}`);

  let body = '';

  if (topology === 'series') {
    body += _circuitSeries(emf, components, showCurrentArrow);
  } else if (topology === 'parallel') {
    body += _circuitParallel(emf, branches, showCurrentArrow);
  } else if (topology === 'series-parallel') {
    body += _circuitSeriesParallel(emf, components, branches, showCurrentArrow);
  }

  return svgOpen() + body + '</svg>';
}

/** Draw series circuit: battery on left, N resistors on top wire. */
function _circuitSeries(emf, components, showCurrentArrow) {
  // Layout: rectangle loop
  // Left wire (battery): x=75, y=55 to y=205
  // Top wire: x=75 to x=250, y=55
  // Right wire: x=250, y=55 to y=205
  // Bottom wire: x=75 to x=250, y=205
  const LEFT = 75, RIGHT = 250, TOP = 55, BOTTOM = 205;

  let s = '';

  // Wires
  s += `<line x1='${LEFT}' y1='${TOP}' x2='${RIGHT}' y2='${TOP}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${RIGHT}' y1='${TOP}' x2='${RIGHT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${LEFT}' y1='${BOTTOM}' x2='${RIGHT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  // Left wire gap for battery: battery occupies y=95 to y=165
  s += `<line x1='${LEFT}' y1='${TOP}' x2='${LEFT}' y2='90' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${LEFT}' y1='170' x2='${LEFT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;

  // Battery symbol at x=75, center y=130
  s += _batterySymbol(LEFT, 90, 170, emf);

  // Resistors on top wire, evenly spaced
  const n = components.length;
  const segW = (RIGHT - LEFT) / (n + 1);
  for (let i = 0; i < n; i++) {
    const rx = Math.round(LEFT + (i + 1) * segW);
    s += _resistorH(rx - 22, rx + 22, TOP, components[i].label, components[i].value);
  }

  // Current arrow (on bottom wire, pointing right)
  if (showCurrentArrow) {
    const midX = Math.round((LEFT + RIGHT) / 2);
    s += arrow(midX - 15, BOTTOM, midX + 15, BOTTOM, C.tension, 2);
    s += label(midX, BOTTOM + 14, 'I', C.tension, 'middle', 11, true);
  }

  return s;
}

/** Draw parallel circuit: battery on left, parallel branches on right section. */
function _circuitParallel(emf, branches, showCurrentArrow) {
  const LEFT = 62, RIGHT = 255, TOP = 45, BOTTOM = 215;
  const BRANCH_LEFT = 130, BRANCH_RIGHT = 240;
  const n = branches.length;
  const branchH = Math.round((BOTTOM - TOP) / (n + 1));

  let s = '';

  // Outer top wire
  s += `<line x1='${LEFT}' y1='${TOP}' x2='${BRANCH_LEFT}' y2='${TOP}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${BRANCH_LEFT}' y1='${TOP}' x2='${RIGHT}' y2='${TOP}' stroke-width='2' class='svg-axis'/>`;
  // Outer bottom wire
  s += `<line x1='${LEFT}' y1='${BOTTOM}' x2='${BRANCH_LEFT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${BRANCH_LEFT}' y1='${BOTTOM}' x2='${RIGHT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  // Right wire
  s += `<line x1='${RIGHT}' y1='${TOP}' x2='${RIGHT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  // Left wire with battery gap
  s += `<line x1='${LEFT}' y1='${TOP}' x2='${LEFT}' y2='90' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${LEFT}' y1='170' x2='${LEFT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  s += _batterySymbol(LEFT, 90, 170, emf);

  // Left and right junction bus lines
  s += `<line x1='${BRANCH_LEFT}' y1='${TOP}' x2='${BRANCH_LEFT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${BRANCH_RIGHT}' y1='${TOP}' x2='${BRANCH_RIGHT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;

  // Each parallel branch resistor
  for (let i = 0; i < n; i++) {
    const by = Math.round(TOP + (i + 1) * branchH);
    const comp = branches[i][0];
    s += `<line x1='${BRANCH_LEFT}' y1='${by}' x2='${BRANCH_LEFT + 12}' y2='${by}' stroke-width='2' class='svg-axis'/>`;
    s += `<line x1='${BRANCH_RIGHT - 12}' y1='${by}' x2='${BRANCH_RIGHT}' y2='${by}' stroke-width='2' class='svg-axis'/>`;
    s += _resistorH(BRANCH_LEFT + 12, BRANCH_RIGHT - 12, by, comp.label, comp.value);
  }

  // Junction dots
  s += dot(BRANCH_LEFT, TOP, '#94a3b8', 4);
  s += dot(BRANCH_LEFT, BOTTOM, '#94a3b8', 4);
  s += dot(BRANCH_RIGHT, TOP, '#94a3b8', 4);
  s += dot(BRANCH_RIGHT, BOTTOM, '#94a3b8', 4);

  if (showCurrentArrow) {
    s += arrow(LEFT + 2, BOTTOM + 0, LEFT + 2, BOTTOM - 20, C.tension, 2);
    s += label(LEFT + 8, BOTTOM - 10, 'I', C.tension, 'start', 11, true);
  }

  return s;
}

/** Series-parallel: series component(s) before parallel branches. */
function _circuitSeriesParallel(emf, seriesComponents, branches, showCurrentArrow) {
  // Simplified layout: battery left, one series R on top, then parallel block on right
  const LEFT = 62, RIGHT = 258, TOP = 48, BOTTOM = 212;
  const SPLIT_LEFT = 170, SPLIT_RIGHT = 245;
  const n = branches.length;

  let s = '';

  // Main loop wires
  s += `<line x1='${LEFT}' y1='${TOP}' x2='${SPLIT_LEFT}' y2='${TOP}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${SPLIT_RIGHT}' y1='${TOP}' x2='${RIGHT}' y2='${TOP}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${RIGHT}' y1='${TOP}' x2='${RIGHT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${LEFT}' y1='${BOTTOM}' x2='${RIGHT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${LEFT}' y1='${TOP}' x2='${LEFT}' y2='92' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${LEFT}' y1='168' x2='${LEFT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  s += _batterySymbol(LEFT, 92, 168, emf);

  // Series component on top wire (before split)
  if (seriesComponents.length > 0) {
    const comp = seriesComponents[0];
    const midX = Math.round((LEFT + SPLIT_LEFT) / 2);
    s += _resistorH(midX - 24, midX + 24, TOP, comp.label, comp.value);
  }

  // Parallel block
  s += `<line x1='${SPLIT_LEFT}' y1='${TOP}' x2='${SPLIT_LEFT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  s += `<line x1='${SPLIT_RIGHT}' y1='${TOP}' x2='${SPLIT_RIGHT}' y2='${BOTTOM}' stroke-width='2' class='svg-axis'/>`;
  const branchH = Math.round((BOTTOM - TOP) / (n + 1));
  for (let i = 0; i < n; i++) {
    const by = Math.round(TOP + (i + 1) * branchH);
    const comp = branches[i][0];
    s += `<line x1='${SPLIT_LEFT}' y1='${by}' x2='${SPLIT_LEFT + 8}' y2='${by}' stroke-width='2' class='svg-axis'/>`;
    s += `<line x1='${SPLIT_RIGHT - 8}' y1='${by}' x2='${SPLIT_RIGHT}' y2='${by}' stroke-width='2' class='svg-axis'/>`;
    s += _resistorH(SPLIT_LEFT + 8, SPLIT_RIGHT - 8, by, comp.label, comp.value);
  }
  s += dot(SPLIT_LEFT, TOP, '#94a3b8', 4);
  s += dot(SPLIT_LEFT, BOTTOM, '#94a3b8', 4);
  s += dot(SPLIT_RIGHT, TOP, '#94a3b8', 4);
  s += dot(SPLIT_RIGHT, BOTTOM, '#94a3b8', 4);

  return s;
}

/** Vertical battery symbol between (x, y1) and (x, y2). */
function _batterySymbol(x, y1, y2, lbl) {
  const cx = x;
  const midY = Math.round((y1 + y2) / 2);
  return [
    // Long plate (+ terminal side, upper)
    `<line x1='${cx - 10}' y1='${midY - 8}' x2='${cx + 10}' y2='${midY - 8}' stroke-width='3' class='svg-axis'/>`,
    // Short plate (- terminal side, lower)
    `<line x1='${cx - 6}' y1='${midY + 4}' x2='${cx + 6}' y2='${midY + 4}' stroke-width='2' class='svg-axis'/>`,
    // + label
    label(cx + 14, midY - 6, '+', null, 'start', 11),
    // - label
    label(cx + 14, midY + 8, '−', null, 'start', 11),
    // EMF label
    label(cx - 14, midY + 2, lbl, null, 'end', 11, true),
  ].join('');
}

/** Horizontal resistor (IEC box style) from x1 to x2 at height y. */
function _resistorH(x1, x2, y, lbl, val) {
  const boxH = 14;
  const mid = Math.round((x1 + x2) / 2);
  return [
    `<rect x='${x1}' y='${y - boxH / 2}' width='${x2 - x1}' height='${boxH}' fill='none' stroke-width='1.5' class='svg-axis'/>`,
    label(mid, y - boxH / 2 - 4, lbl, null, 'middle', 11, true),
    val ? label(mid, y + boxH / 2 + 12, val, '#94a3b8', 'middle', 10) : '',
  ].join('');
}

// ── D4. STANDING WAVE ─────────────────────────────────────────────────────────

/**
 * Build a standing wave diagram.
 *
 * cfg.type: 'string' | 'open-pipe' | 'closed-pipe'
 * cfg.harmonic: number (positive integer; closed-pipe only odd)
 * cfg.showLabels: bool — show N (node) and A (antinode) markers
 * cfg.lengthLabel: string — label for total length (default 'L')
 *
 * Physics rules enforced:
 *   String (fixed–fixed):
 *     nodes at 0 and L, every L/n interval
 *     antinodes at L/2n offsets
 *     node count = n+1,  antinode count = n
 *   Open pipe (free–free):
 *     antinodes at 0 and L
 *     node count = n,  antinode count = n+1
 *   Closed pipe (fixed–free):
 *     ONLY ODD harmonics (1, 3, 5…)
 *     node at closed end (left), antinode at open end (right)
 *     node count = (n+1)/2,  antinode count = (n+1)/2
 */
function buildStandingWave(cfg = {}) {
  const {
    type = 'string',
    harmonic = 1,
    showLabels = true,
    lengthLabel = 'L',
  } = cfg;

  const v = validateStandingWave(cfg);
  if (!v.valid) throw new Error(`buildStandingWave failed:\n  ${v.errors.join('\n  ')}`);

  const n = harmonic;
  // Wave region: x: 55–255, centerline: y=130, amplitude: 55px
  const WX1 = 55, WX2 = 255, WCY = 130, AMP = 55;
  const waveLen = WX2 - WX1;

  let body = '';

  // Center dashed baseline
  body += `<line x1='${WX1}' y1='${WCY}' x2='${WX2}' y2='${WCY}' stroke-width='1' class='svg-axis svg-dashed'/>`;

  // Boundary walls
  if (type === 'string' || type === 'closed-pipe') {
    // Left fixed wall (vertical hash)
    body += `<line x1='${WX1}' y1='${WCY - 35}' x2='${WX1}' y2='${WCY + 35}' stroke-width='3' class='svg-axis'/>`;
    for (let hy = WCY - 32; hy <= WCY + 20; hy += 12) {
      body += `<line x1='${WX1}' y1='${hy}' x2='${WX1 - 8}' y2='${hy + 8}' stroke-width='1' class='svg-axis'/>`;
    }
  }
  if (type === 'string') {
    // Right fixed wall
    body += `<line x1='${WX2}' y1='${WCY - 35}' x2='${WX2}' y2='${WCY + 35}' stroke-width='3' class='svg-axis'/>`;
    for (let hy = WCY - 32; hy <= WCY + 20; hy += 12) {
      body += `<line x1='${WX2}' y1='${hy}' x2='${WX2 + 8}' y2='${hy + 8}' stroke-width='1' class='svg-axis'/>`;
    }
  }
  if (type === 'open-pipe') {
    // Pipe walls (horizontal lines above and below with open ends)
    body += `<line x1='${WX1 + 4}' y1='${WCY - 38}' x2='${WX2 - 4}' y2='${WCY - 38}' stroke-width='2' class='svg-axis'/>`;
    body += `<line x1='${WX1 + 4}' y1='${WCY + 38}' x2='${WX2 - 4}' y2='${WCY + 38}' stroke-width='2' class='svg-axis'/>`;
    body += label(WX1, WCY + 52, 'open', null, 'middle', 10);
    body += label(WX2, WCY + 52, 'open', null, 'middle', 10);
  }
  if (type === 'closed-pipe') {
    // Pipe walls with closed left, open right
    body += `<line x1='${WX1}' y1='${WCY - 38}' x2='${WX2 - 4}' y2='${WCY - 38}' stroke-width='2' class='svg-axis'/>`;
    body += `<line x1='${WX1}' y1='${WCY + 38}' x2='${WX2 - 4}' y2='${WCY + 38}' stroke-width='2' class='svg-axis'/>`;
    body += label(WX1 + 4, WCY + 52, 'closed', null, 'middle', 10);
    body += label(WX2, WCY + 52, 'open', null, 'middle', 10);
  }

  // Generate sine wave path (sampled polyline)
  // For string/closed-pipe: y(x) = A·sin(nπx/L) — zero at x=0
  // For open-pipe: y(x) = A·cos(nπx/L) — max at x=0
  const points = [];
  const SAMPLES = 120;
  for (let i = 0; i <= SAMPLES; i++) {
    const frac = i / SAMPLES;
    const dataX = frac * Math.PI * n;  // nπ total
    let amp;
    if (type === 'open-pipe') {
      amp = Math.cos(dataX);
    } else {
      amp = Math.sin(dataX);
    }
    const svgX = Math.round(WX1 + frac * waveLen);
    const svgY = Math.round(WCY - amp * AMP);
    points.push(`${svgX},${svgY}`);
  }
  body += `<polyline points='${points.join(' ')}' stroke='${C.curve}' stroke-width='2.5' fill='none'/>`;

  // Node and antinode positions
  const nodePositions = [];
  const antinodePositions = [];

  if (type === 'string') {
    // Nodes at x = 0, L/n, 2L/n, ..., L  (n+1 nodes)
    for (let i = 0; i <= n; i++) nodePositions.push(i / n);
    // Antinodes at x = L/2n, 3L/2n, ...  (n antinodes)
    for (let i = 0; i < n; i++) antinodePositions.push((2 * i + 1) / (2 * n));
  } else if (type === 'open-pipe') {
    // Antinodes at x = 0, L/n, 2L/n, ..., L  (n+1 antinodes)
    for (let i = 0; i <= n; i++) antinodePositions.push(i / n);
    // Nodes at L/2n, 3L/2n, ...  (n nodes)
    for (let i = 0; i < n; i++) nodePositions.push((2 * i + 1) / (2 * n));
  } else {
    // closed-pipe (n = odd)
    // Nodes at 0, 2L/n, 4L/n, ...  → (n+1)/2 nodes
    const nodeCount = (n + 1) / 2;
    for (let i = 0; i < nodeCount; i++) nodePositions.push((2 * i) / n);
    // Antinodes at L/n, 3L/n, ... L → (n+1)/2 antinodes
    const antCount = (n + 1) / 2;
    for (let i = 0; i < antCount; i++) antinodePositions.push((2 * i + 1) / n);
  }

  if (showLabels) {
    for (const frac of nodePositions) {
      const nx = Math.round(WX1 + frac * waveLen);
      body += dot(nx, WCY, '#dc2626', 5);
      body += label(nx, WCY + 22, 'N', '#dc2626', 'middle', 10, true);
    }
    for (const frac of antinodePositions) {
      const ax = Math.round(WX1 + frac * waveLen);
      const asvgY = type === 'open-pipe' ?
        Math.round(WCY - AMP) :
        (Math.sin((frac * Math.PI * n)) > 0 ? Math.round(WCY - AMP) : Math.round(WCY + AMP));
      body += dot(ax, asvgY, '#3b82f6', 5);
      body += label(ax, asvgY - 10, 'A', '#3b82f6', 'middle', 10, true);
    }
  }

  // Harmonic label
  const hLabel = type === 'closed-pipe' ?
    `n = ${n} (${n === 1 ? '1st' : n === 3 ? '3rd' : n === 5 ? '5th' : n + 'th'} harmonic)` :
    `n = ${n} (${n === 1 ? 'fundamental' : n === 2 ? '2nd harmonic' : n + 'th harmonic'})`;
  body += label(155, 24, hLabel, null, 'middle', 11);

  // Length label
  body += `<line x1='${WX1}' y1='${WCY + 70}' x2='${WX2}' y2='${WCY + 70}' stroke-width='1' class='svg-axis svg-dashed'/>`;
  body += label(155, WCY + 82, lengthLabel, null, 'middle', 11, true);

  return svgOpen() + body + '</svg>';
}

// ── D5. ATWOOD MACHINE ────────────────────────────────────────────────────────

/**
 * Build an Atwood machine diagram.
 *
 * cfg.m1Label: string — left mass label (default 'm₁')
 * cfg.m2Label: string — right mass label (default 'm₂')
 * cfg.m1Heavier: bool — which mass is heavier (affects arrow direction)
 * cfg.showAcceleration: bool — draw acceleration arrows
 * cfg.showTension: bool — draw tension label on rope
 */
function buildAtwood(cfg = {}) {
  const {
    m1Label = 'm₁',
    m2Label = 'm₂',
    m1Heavier = false,
    showAcceleration = true,
    showTension = true,
  } = cfg;

  const pulleyX = 155, pulleyY = 55, pulleyR = 22;
  const ropeX1 = pulleyX - pulleyR + 4;  // left rope x
  const ropeX2 = pulleyX + pulleyR - 4;  // right rope x
  const boxW = 34, boxH = 28;
  const m1Y = 155;  // center y of left mass
  const m2Y = m1Heavier ? 130 : 175;  // right mass (higher if m1 heavier means m2 rises)
  // Actually: if m1 heavier, m1 goes down, m2 goes up
  const leftY = m1Heavier ? 175 : 140;
  const rightY = m1Heavier ? 140 : 175;

  let body = '';

  // Ceiling mount
  body += `<line x1='${pulleyX - 5}' y1='22' x2='${pulleyX + 5}' y2='22' stroke-width='3' class='svg-axis'/>`;
  for (let hx = pulleyX - 18; hx <= pulleyX + 18; hx += 9) {
    body += `<line x1='${hx}' y1='22' x2='${hx - 6}' y2='14' stroke-width='1' class='svg-axis'/>`;
  }
  body += `<line x1='${pulleyX - 18}' y1='22' x2='${pulleyX + 18}' y2='22' stroke-width='2' class='svg-axis'/>`;
  // Mount line from ceiling to pulley
  body += `<line x1='${pulleyX}' y1='22' x2='${pulleyX}' y2='${pulleyY - pulleyR}' stroke-width='2' class='svg-axis'/>`;

  // Pulley circle
  body += `<circle cx='${pulleyX}' cy='${pulleyY}' r='${pulleyR}' fill='none' stroke-width='2' class='svg-axis'/>`;
  body += `<circle cx='${pulleyX}' cy='${pulleyY}' r='5' fill='#94a3b8'/>`;

  // Ropes
  const ropeTopY = pulleyY + 4;
  body += `<line x1='${ropeX1}' y1='${ropeTopY}' x2='${ropeX1}' y2='${leftY - boxH / 2}' stroke-width='2' class='svg-axis'/>`;
  body += `<line x1='${ropeX2}' y1='${ropeTopY}' x2='${ropeX2}' y2='${rightY - boxH / 2}' stroke-width='2' class='svg-axis'/>`;

  // Tension label on rope
  if (showTension) {
    body += label(ropeX1 - 8, Math.round((ropeTopY + leftY - boxH / 2) / 2), 'T', C.tension, 'end', 12, true);
    body += label(ropeX2 + 8, Math.round((ropeTopY + rightY - boxH / 2) / 2), 'T', C.tension, 'start', 12, true);
  }

  // Mass boxes
  body += objectBox(ropeX1, leftY, boxW, boxH, m1Label);
  body += objectBox(ropeX2, rightY, boxW, boxH, m2Label);

  // Acceleration arrows (downward for heavier mass, upward for lighter)
  if (showAcceleration) {
    if (m1Heavier) {
      // m1 goes down
      body += arrow(ropeX1, leftY + boxH / 2 + 5, ropeX1, leftY + boxH / 2 + 28, C.applied, 2);
      body += label(ropeX1 + 6, leftY + boxH / 2 + 22, 'a', C.applied, 'start', 11, true);
      // m2 goes up
      body += arrow(ropeX2, rightY - boxH / 2 - 5, ropeX2, rightY - boxH / 2 - 28, C.applied, 2);
      body += label(ropeX2 + 6, rightY - boxH / 2 - 14, 'a', C.applied, 'start', 11, true);
    } else {
      // m2 goes down
      body += arrow(ropeX2, rightY + boxH / 2 + 5, ropeX2, rightY + boxH / 2 + 28, C.applied, 2);
      body += label(ropeX2 + 6, rightY + boxH / 2 + 22, 'a', C.applied, 'start', 11, true);
      // m1 goes up
      body += arrow(ropeX1, leftY - boxH / 2 - 5, ropeX1, leftY - boxH / 2 - 28, C.applied, 2);
      body += label(ropeX1 + 6, leftY - boxH / 2 - 14, 'a', C.applied, 'start', 11, true);
    }
  }

  return svgOpen() + body + '</svg>';
}

// ── D6. PROJECTILE MOTION ─────────────────────────────────────────────────────

/**
 * Build a projectile motion trajectory diagram.
 *
 * cfg.angle: launch angle in degrees (15–75, default 45)
 * cfg.showComponents: bool — show vx and vy component arrows at launch
 * cfg.showPeak: bool — mark peak height with dashed lines
 * cfg.showVelocityAtPeak: bool — show horizontal velocity arrow at peak
 * cfg.labelLaunch: string — label at launch point (default 'v₀')
 */
function buildProjectile(cfg = {}) {
  const {
    angle = 45,
    showComponents = false,
    showPeak = true,
    showVelocityAtPeak = false,
    labelLaunch = 'v₀',
  } = cfg;

  if (angle < 10 || angle > 80) throw new Error(`buildProjectile: angle must be 10–80°, got ${angle}`);

  const rad = angle * Math.PI / 180;

  // Map parabola to SVG: launch at (65, 205), land at (270, 205)
  // Peak at x = midpoint, y = determined by angle
  const LAUNCH_X = 65, LAUNCH_Y = 205;
  const LAND_X = 270, LAND_Y = 205;
  const MID_X = Math.round((LAUNCH_X + LAND_X) / 2);
  // Peak height scales with angle: sin(2θ) is maximum range, but we fix range
  // and let peak height = range/2 * tan(θ) (scaled to fit)
  const rawPeakH = Math.tan(rad) * (LAND_X - LAUNCH_X) / 4;
  const peakH = Math.min(rawPeakH, 160);
  const PEAK_X = MID_X;
  const PEAK_Y = Math.round(LAUNCH_Y - peakH);

  let body = '';

  // Ground line
  body += groundSurface(55, 280, 210);

  // Parabolic path via quadratic bezier
  body += `<path d='M ${LAUNCH_X},${LAUNCH_Y} Q ${PEAK_X},${Math.round(PEAK_Y - peakH * 0.1)} ${LAND_X},${LAND_Y}' stroke='${C.curve}' stroke-width='2.5' fill='none'/>`;

  // Launch point
  body += dot(LAUNCH_X, LAUNCH_Y, C.neutral, 5);

  // Launch velocity arrow
  const arrowLen = 45;
  const vx = LAUNCH_X + Math.cos(rad) * arrowLen;
  const vy = LAUNCH_Y - Math.sin(rad) * arrowLen;
  body += arrow(LAUNCH_X, LAUNCH_Y, Math.round(vx), Math.round(vy), C.applied);
  body += label(Math.round(vx) + 4, Math.round(vy) - 4, labelLaunch, C.applied, 'start', 12, true);
  body += label(Math.round(LAUNCH_X + 22), Math.round(LAUNCH_Y - 10), `${angle}°`, null, 'start', 10);

  // Component arrows
  if (showComponents) {
    const vxComp = LAUNCH_X + Math.cos(rad) * arrowLen;
    const vyComp = LAUNCH_Y;
    body += arrow(LAUNCH_X, LAUNCH_Y, Math.round(vxComp), vyComp, C.normal, 2);
    body += arrow(LAUNCH_X, LAUNCH_Y, LAUNCH_X, Math.round(vy), C.gravity, 2);
    body += label(Math.round(vxComp / 2 + LAUNCH_X / 2), LAUNCH_Y + 14, 'v₀ₓ', C.normal, 'middle', 10);
    body += label(LAUNCH_X - 8, Math.round((LAUNCH_Y + vy) / 2), 'v₀ᵧ', C.gravity, 'end', 10);
  }

  // Peak marker
  if (showPeak && PEAK_Y < LAUNCH_Y - 20) {
    body += dot(PEAK_X, PEAK_Y, C.neutral, 5);
    body += refV(PEAK_X, PEAK_Y, LAUNCH_Y, '');
    body += label(PEAK_X + 4, PEAK_Y - 8, 'Peak', null, 'start', 10);
    if (showVelocityAtPeak) {
      body += arrow(PEAK_X - 20, PEAK_Y, PEAK_X + 20, PEAK_Y, C.normal, 2);
      body += label(PEAK_X + 22, PEAK_Y + 4, 'vₓ', C.normal, 'start', 10);
    }
  }

  // Landing point
  body += dot(LAND_X, LAND_Y, C.neutral, 5);

  return svgOpen() + body + '</svg>';
}

// ─── E. VALIDATION ────────────────────────────────────────────────────────────

/**
 * Validate FBD configuration before building.
 * Returns { valid: bool, errors: string[] }
 */
function validateFBD(cfg) {
  const errors = [];
  const { surface = 'none', inclineAngle, forces = [] } = cfg;

  // No forces at all
  if (forces.length === 0) {
    errors.push('FBD must have at least one force');
    return { valid: false, errors };
  }

  // Check for duplicate labels
  const labels = forces.map(f => f.label);
  const dupes = labels.filter((l, i) => labels.indexOf(l) !== i);
  if (dupes.length > 0) errors.push(`Duplicate force labels: ${[...new Set(dupes)].join(', ')}`);

  // No zero or negative magnitudes
  for (const f of forces) {
    if (f.magnitude !== undefined && f.magnitude <= 0) {
      errors.push(`Force '${f.label}' has non-positive magnitude ${f.magnitude}`);
    }
  }

  // Gravity check: if surface present (object on something), gravity should be ~270°
  const gravForce = forces.find(f =>
    f.label.includes('F_g') || f.label.includes('W') || f.label.includes('mg') ||
    f.label.includes('F_w') || f.label.includes('weight') || f.label.includes('gravity')
  );
  if (surface !== 'none' && !gravForce) {
    errors.push("Object on a surface should have a gravity/weight force (label F_g, W, mg, or weight)");
  }
  if (gravForce) {
    const a = ((gravForce.angle % 360) + 360) % 360;
    if (Math.abs(a - 270) > 10) {
      errors.push(`Gravity force '${gravForce.label}' must point down (angle ~270°), got ${gravForce.angle}°`);
    }
    if (gravForce.color !== C.gravity) {
      errors.push(`Gravity force '${gravForce.label}' must use color ${C.gravity} (C.gravity), got '${gravForce.color}'`);
    }
  }

  // Normal force perpendicularity check
  const normalForce = forces.find(f =>
    f.label.includes('F_N') || f.label.includes('N') && f.label.length <= 3
  );
  if (normalForce) {
    const a = ((normalForce.angle % 360) + 360) % 360;
    if (surface === 'horizontal') {
      if (Math.abs(a - 90) > 10) {
        errors.push(`Normal force on horizontal surface must point up (~90°), got ${normalForce.angle}°`);
      }
    } else if (surface === 'inclined') {
      if (inclineAngle == null) {
        errors.push("inclineAngle required when surface is 'inclined'");
      } else {
        const expectedAngle = 90 + inclineAngle;
        const diff = Math.abs(a - expectedAngle);
        if (diff > 12) {
          errors.push(`Normal force on incline (θ=${inclineAngle}°) should be ~${expectedAngle}°, got ${normalForce.angle}°`);
        }
      }
    } else if (surface === 'wall-left') {
      if (Math.abs(a - 0) > 10 && Math.abs(a - 360) > 10) {
        errors.push(`Normal force from left wall should point right (~0°), got ${normalForce.angle}°`);
      }
    }
  }

  // Friction direction check
  const frictionForce = forces.find(f =>
    f.label.includes('f') && f.label.length <= 4 || f.label.includes('friction') || f.label.includes('F_f')
  );
  if (frictionForce) {
    const a = ((frictionForce.angle % 360) + 360) % 360;
    if (surface === 'horizontal') {
      if (Math.abs(a - 0) > 10 && Math.abs(a - 180) > 10) {
        errors.push(`Friction on horizontal surface must be horizontal (0° or 180°), got ${frictionForce.angle}°`);
      }
    } else if (surface === 'inclined' && inclineAngle != null) {
      const opt1 = inclineAngle;
      const opt2 = (inclineAngle + 180) % 360;
      const diff1 = Math.abs(a - opt1);
      const diff2 = Math.abs(a - opt2);
      if (diff1 > 12 && diff2 > 12) {
        errors.push(`Friction on incline (θ=${inclineAngle}°) must be along slope (~${opt1}° or ~${opt2}°), got ${frictionForce.angle}°`);
      }
    }
    if (frictionForce.color !== C.friction) {
      errors.push(`Friction force '${frictionForce.label}' should use C.friction (${C.friction}), got '${frictionForce.color}'`);
    }
  }

  // Incline angle range
  if (surface === 'inclined') {
    if (inclineAngle == null) errors.push("inclineAngle is required when surface === 'inclined'");
    else if (inclineAngle <= 0 || inclineAngle >= 90) errors.push(`inclineAngle must be 1–89°, got ${inclineAngle}`);
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}

/**
 * Validate motion graph configuration.
 */
function validateMotionGraph(cfg) {
  const errors = [];
  const { type, segments = [], xMax = 6, yMin = -8, yMax = 8 } = cfg;

  if (!MOTION_LABELS[type]) {
    errors.push(`Unknown graph type '${type}'. Valid: ${Object.keys(MOTION_LABELS).join(', ')}`);
    return { valid: false, errors };
  }
  if (segments.length === 0) errors.push('Must provide at least one segment');
  if (xMax <= 0) errors.push('xMax must be positive');
  if (yMin >= yMax) errors.push('yMin must be less than yMax');

  for (let i = 0; i < segments.length; i++) {
    const s = segments[i];
    if (s.x1 < 0 || s.x2 > xMax) errors.push(`Segment ${i}: x values must be in [0, ${xMax}]`);
    if (s.y1 < yMin || s.y1 > yMax || s.y2 < yMin || s.y2 > yMax) {
      errors.push(`Segment ${i}: y values must be in [${yMin}, ${yMax}]`);
    }
    // Position-time continuity: each segment must start where previous ended
    if (type === 'position-time' && i > 0) {
      const prev = segments[i - 1];
      if (Math.abs(s.x1 - prev.x2) > 0.01 || Math.abs(s.y1 - prev.y2) > 0.01) {
        errors.push(`Position-time graph: segment ${i} starts at (${s.x1},${s.y1}) but segment ${i-1} ends at (${prev.x2},${prev.y2}) — discontinuous position is unphysical`);
      }
    }
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}

/**
 * Validate circuit configuration.
 */
function validateCircuit(cfg) {
  const errors = [];
  const { topology, emf, components = [], branches = [] } = cfg;

  if (!['series', 'parallel', 'series-parallel'].includes(topology)) {
    errors.push(`Unknown topology '${topology}'`);
  }
  if (!emf || emf.trim() === '') errors.push('Battery EMF label must be non-empty');

  if (topology === 'series') {
    if (components.length < 1 || components.length > 4) {
      errors.push(`Series circuit: need 1–4 components, got ${components.length}`);
    }
    for (let i = 0; i < components.length; i++) {
      if (!components[i].label) errors.push(`Component ${i} missing label`);
    }
  }

  if (topology === 'parallel') {
    if (branches.length < 2 || branches.length > 3) {
      errors.push(`Parallel circuit: need 2–3 branches, got ${branches.length}`);
    }
    for (let i = 0; i < branches.length; i++) {
      if (!branches[i] || branches[i].length !== 1) {
        errors.push(`Parallel branch ${i} must have exactly 1 component`);
      } else if (!branches[i][0].label) {
        errors.push(`Parallel branch ${i} component missing label`);
      }
    }
  }

  if (topology === 'series-parallel') {
    if (components.length < 1) errors.push('series-parallel needs at least 1 series component');
    if (branches.length < 2 || branches.length > 3) {
      errors.push(`series-parallel: need 2–3 parallel branches, got ${branches.length}`);
    }
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}

/**
 * Validate standing wave configuration.
 */
function validateStandingWave(cfg) {
  const errors = [];
  const { type, harmonic } = cfg;

  if (!['string', 'open-pipe', 'closed-pipe'].includes(type)) {
    errors.push(`Unknown wave type '${type}'. Use 'string', 'open-pipe', or 'closed-pipe'`);
  }
  if (!Number.isInteger(harmonic) || harmonic < 1) {
    errors.push(`harmonic must be a positive integer, got ${harmonic}`);
  }
  if (type === 'closed-pipe' && harmonic % 2 === 0) {
    errors.push(`Closed pipe only supports ODD harmonics (1, 3, 5…). Got harmonic=${harmonic}. Even harmonics cannot exist in a closed pipe.`);
  }
  if (harmonic > 5) {
    errors.push(`harmonic=${harmonic} will be too dense to render clearly. Max supported: 5`);
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}

/**
 * Structural validation of any generated physics SVG.
 * Run AFTER building to catch rendering-level issues.
 */
function validatePhys1Svg(svgString, graphType) {
  const errors = [];

  if (!svgString || typeof svgString !== 'string') {
    return { valid: false, errors: ['SVG string is empty or not a string'] };
  }
  if (!/<svg[^>]*viewBox/.test(svgString)) errors.push('Missing <svg with viewBox');
  if (!svgString.endsWith('</svg>')) errors.push('SVG does not end with </svg>');
  if (/stroke='black'|stroke='white'|fill='black'|fill='white'/.test(svgString)) {
    errors.push("Hardcoded black/white color found — breaks dark mode");
  }

  const type = (graphType || '').toLowerCase().replace(/[^a-z-]/g, '');

  if (type === 'fbd') {
    // Must have the gravity color (#dc2626) for a grounded object
    // (allow pure floating-object FBDs without gravity)
    const hasArrow = /<polygon[^>]*fill='#[0-9a-f]{6}'/.test(svgString);
    if (!hasArrow) errors.push('FBD appears to have no force arrows (no colored polygon arrowheads)');
  }

  if (type === 'motion-graph' || type === 'motiongraph') {
    const axisCount = (svgString.match(/class='svg-axis'/g) || []).length;
    if (axisCount < 2) errors.push('Motion graph missing axis lines');
    if (!svgString.includes('svg-axis-fill')) errors.push('Motion graph missing axis arrowheads');
  }

  if (type === 'circuit') {
    // Must have battery plates (long and short lines) and at least one resistor box
    if (!svgString.includes('<rect')) errors.push('Circuit diagram missing resistor box (rect element)');
    if ((svgString.match(/class='svg-axis'/g) || []).length < 4) {
      errors.push('Circuit diagram seems to be missing wire segments');
    }
  }

  if (type === 'standing-wave' || type === 'standingwave') {
    if (!svgString.includes('<polyline')) errors.push('Standing wave missing sine wave polyline');
  }

  if (type === 'atwood') {
    if (!svgString.includes('<circle')) errors.push('Atwood machine missing pulley circle');
  }

  if (type === 'projectile') {
    if (!svgString.includes('<path')) errors.push('Projectile diagram missing parabolic path');
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors };
}

// ─── F. SELF-TESTS ────────────────────────────────────────────────────────────

if (require.main === module) {
  const tests = [
    {
      name: 'FBD — block on horizontal surface with friction',
      type: 'fbd',
      build: () => buildFBD({
        surface: 'horizontal',
        forces: [
          { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
          { label: 'F_N', angle: 90,  magnitude: 1.0, color: C.normal },
          { label: 'F_app', angle: 0, magnitude: 0.8, color: C.applied },
          { label: 'f',   angle: 180, magnitude: 0.5, color: C.friction },
        ],
      }),
    },
    {
      name: 'FBD — hanging mass (tension only)',
      type: 'fbd',
      build: () => buildFBD({
        surface: 'none',
        forces: [
          { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
          { label: 'T',   angle: 90,  magnitude: 1.0, color: C.tension },
        ],
      }),
    },
    {
      name: 'FBD — block on inclined plane',
      type: 'fbd',
      build: () => buildFBD({
        surface: 'inclined',
        inclineAngle: 30,
        forces: [
          { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
          { label: 'F_N', angle: 120, magnitude: 0.9, color: C.normal },
          { label: 'f',   angle: 210, magnitude: 0.4, color: C.friction },
        ],
      }),
    },
    {
      name: 'Motion graph — velocity-time (constant acceleration)',
      type: 'motion-graph',
      build: () => buildMotionGraph({
        type: 'velocity-time',
        segments: [
          { x1: 0, y1: -6, x2: 6, y2: 6 },
        ],
        yMin: -8, yMax: 8,
        showZeroLine: true,
      }),
    },
    {
      name: 'Motion graph — position-time (constant velocity then rest)',
      type: 'motion-graph',
      build: () => buildMotionGraph({
        type: 'position-time',
        segments: [
          { x1: 0, y1: 0, x2: 3, y2: 9 },
          { x1: 3, y1: 9, x2: 6, y2: 9 },
        ],
        yMin: 0, yMax: 12,
        showZeroLine: false,
      }),
    },
    {
      name: 'Motion graph — force-displacement (work calculation)',
      type: 'motion-graph',
      build: () => buildMotionGraph({
        type: 'force-displacement',
        segments: [
          { x1: 0, y1: 6, x2: 4, y2: 6 },
          { x1: 4, y1: 6, x2: 6, y2: 0 },
        ],
        xMax: 6, yMin: 0, yMax: 8,
        color: C.applied,
      }),
    },
    {
      name: 'Circuit — series (3 resistors)',
      type: 'circuit',
      build: () => buildCircuit({
        topology: 'series',
        emf: '12 V',
        components: [
          { label: 'R₁', value: '2 Ω' },
          { label: 'R₂', value: '3 Ω' },
          { label: 'R₃', value: '5 Ω' },
        ],
      }),
    },
    {
      name: 'Circuit — parallel (2 branches)',
      type: 'circuit',
      build: () => buildCircuit({
        topology: 'parallel',
        emf: '9 V',
        branches: [
          [{ label: 'R₁', value: '6 Ω' }],
          [{ label: 'R₂', value: '3 Ω' }],
        ],
        showCurrentArrow: true,
      }),
    },
    {
      name: 'Circuit — series-parallel',
      type: 'circuit',
      build: () => buildCircuit({
        topology: 'series-parallel',
        emf: '24 V',
        components: [{ label: 'R₁', value: '4 Ω' }],
        branches: [
          [{ label: 'R₂', value: '6 Ω' }],
          [{ label: 'R₃', value: '3 Ω' }],
        ],
      }),
    },
    {
      name: 'Standing wave — string n=1 (fundamental)',
      type: 'standing-wave',
      build: () => buildStandingWave({ type: 'string', harmonic: 1 }),
    },
    {
      name: 'Standing wave — string n=3',
      type: 'standing-wave',
      build: () => buildStandingWave({ type: 'string', harmonic: 3 }),
    },
    {
      name: 'Standing wave — open pipe n=2',
      type: 'standing-wave',
      build: () => buildStandingWave({ type: 'open-pipe', harmonic: 2 }),
    },
    {
      name: 'Standing wave — closed pipe n=3 (3rd harmonic)',
      type: 'standing-wave',
      build: () => buildStandingWave({ type: 'closed-pipe', harmonic: 3 }),
    },
    {
      name: 'Atwood machine',
      type: 'atwood',
      build: () => buildAtwood({ m1Label: 'm₁', m2Label: 'm₂', m1Heavier: true, showTension: true }),
    },
    {
      name: 'Projectile — 45° with peak',
      type: 'projectile',
      build: () => buildProjectile({ angle: 45, showPeak: true }),
    },
    {
      name: 'Projectile — 60° with components',
      type: 'projectile',
      build: () => buildProjectile({ angle: 60, showComponents: true, showPeak: true, showVelocityAtPeak: true }),
    },
  ];

  // Guardrail error tests (should throw)
  const errorTests = [
    {
      name: 'SHOULD FAIL: gravity pointing up',
      build: () => buildFBD({
        surface: 'horizontal',
        forces: [{ label: 'F_g', angle: 90, magnitude: 1.0, color: C.gravity }],
      }),
    },
    {
      name: 'SHOULD FAIL: gravity wrong color',
      build: () => buildFBD({
        surface: 'none',
        forces: [{ label: 'F_g', angle: 270, magnitude: 1.0, color: '#000000' }],
      }),
    },
    {
      name: 'SHOULD FAIL: normal force on horizontal not pointing up',
      build: () => buildFBD({
        surface: 'horizontal',
        forces: [
          { label: 'F_g', angle: 270, color: C.gravity },
          { label: 'F_N', angle: 0, color: C.normal },
        ],
      }),
    },
    {
      name: 'SHOULD FAIL: position-time discontinuity (teleportation)',
      build: () => buildMotionGraph({
        type: 'position-time',
        segments: [
          { x1: 0, y1: 0, x2: 3, y2: 5 },
          { x1: 3, y1: 8, x2: 6, y2: 10 },  // gap: y jumps 5→8
        ],
        yMin: 0, yMax: 12,
      }),
    },
    {
      name: 'SHOULD FAIL: closed pipe even harmonic',
      build: () => buildStandingWave({ type: 'closed-pipe', harmonic: 2 }),
    },
  ];

  console.log('\n── Build tests ──');
  let passed = 0;
  const results = [];
  for (const t of tests) {
    try {
      const svg = t.build();
      const v = validatePhys1Svg(svg, t.type);
      if (!v.valid) {
        console.error(`❌ ${t.name}\n   Structural: ${v.errors.join(', ')}`);
      } else {
        console.log(`✅ ${t.name}`);
        passed++;
        results.push({ name: t.name, svg });
      }
    } catch (e) {
      console.error(`❌ ${t.name}: ${e.message}`);
    }
  }

  console.log('\n── Guardrail error tests (should all throw) ──');
  let guardPassed = 0;
  for (const t of errorTests) {
    try {
      t.build();
      console.error(`❌ ${t.name} — did NOT throw (guardrail missing!)`);
    } catch (e) {
      console.log(`✅ ${t.name}\n   → ${e.message.split('\n')[0]}`);
      guardPassed++;
    }
  }

  console.log(`\n${passed}/${tests.length} build tests passed`);
  console.log(`${guardPassed}/${errorTests.length} guardrail tests passed`);

  if (passed === tests.length && guardPassed === errorTests.length) {
    const fs = require('fs');
    fs.writeFileSync(
      __dirname + '/phys1-graphs-sample.json',
      JSON.stringify(results.map(r => ({ name: r.name, svg: r.svg })), null, 2)
    );
    console.log('\nSample SVGs written to scripts/phys1-graphs-sample.json');
  }
}

// ─── G. EXPORTS ───────────────────────────────────────────────────────────────

module.exports = {
  // Graph builders
  buildFBD,
  buildMotionGraph,
  buildCircuit,
  buildStandingWave,
  buildAtwood,
  buildProjectile,
  // Validators
  validateFBD,
  validateMotionGraph,
  validateCircuit,
  validateStandingWave,
  validatePhys1Svg,
  // Primitives (for custom diagrams)
  svgOpen,
  axes,
  arrow,
  label,
  refH,
  refV,
  dot,
  forceArrow,
  objectBox,
  groundSurface,
  inclinedSurface,
  // Color constants
  C,
};
