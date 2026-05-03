'use strict';
// generate-phys1-migration.js
// Builds inline graphSvg replacements for all 33 questions that currently use
// external URLs or local SVG path references in js/data/physics_mcq.js.
//
// Output: scripts/phys1-migration.json  →  { questionId: svgString, ... }

const {
  buildFBD, buildMotionGraph, buildCircuit, buildStandingWave,
  buildAtwood, buildProjectile, validatePhys1Svg,
  svgOpen, axes, arrow, label, refH, refV, dot,
  forceArrow, objectBox, groundSurface, inclinedSurface, C,
} = require('./phys1-graph-builder');

// ─── CUSTOM SVG HELPERS (for diagrams beyond the standard builders) ───────────

function line(x1, y1, x2, y2, color, w = 2, dash = false) {
  const da = dash ? ` stroke-dasharray='5 3'` : '';
  return `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='${color}' stroke-width='${w}' fill='none'${da}/>`;
}
function axisLine(x1, y1, x2, y2) {
  return `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke-width='2' class='svg-axis'/>`;
}
function axisArrow(x, y, dir) {  // dir: 'right'|'up'
  if (dir === 'right') return `<polygon points='${x},${y} ${x-10},${y-5} ${x-10},${y+5}' class='svg-axis-fill'/>`;
  return `<polygon points='${x},${y} ${x-5},${y+10} ${x+5},${y+10}' class='svg-axis-fill'/>`;
}
function hashGround(x1, x2, y) {
  let s = axisLine(x1, y, x2, y);
  for (let hx = x1 + 6; hx < x2 - 4; hx += 14) {
    s += axisLine(hx, y, hx - 8, y + 8);
  }
  return s;
}
function box(x, y, w, h, lbl, lblColor) {
  let s = `<rect x='${x}' y='${y}' width='${w}' height='${h}' fill='none' stroke-width='2' class='svg-axis'/>`;
  if (lbl) s += label(x + w / 2, y + h / 2 + 4, lbl, lblColor || null, 'middle', 11, true);
  return s;
}

// ─── DIAGRAM DEFINITIONS ─────────────────────────────────────────────────────

const diagrams = {};

// ── U1-MCQ-05 — Horizontal projectile from height h ──────────────────────────
diagrams['U1-MCQ-05'] = (() => {
  let body = '';
  // Ground
  body += hashGround(50, 285, 218);
  // Platform at height
  body += axisLine(50, 78, 100, 78);
  body += axisLine(50, 78, 50, 218);
  // Height dashed
  body += line(100, 78, 100, 218, '#94a3b8', 1, true);
  // Height label
  body += label(56, 152, 'h', null, 'start', 12, true);
  // Horizontal velocity arrow at launch
  body += arrow(100, 78, 155, 78, C.applied);
  body += label(158, 74, 'v₀', C.applied, 'start', 12, true);
  // Parabolic path: horizontal launch curves down
  body += `<path d='M 100,78 Q 285,78 285,218' stroke='${C.curve}' stroke-width='2.5' fill='none'/>`;
  // Launch dot
  body += dot(100, 78, C.neutral, 5);
  // Landing dot
  body += dot(285, 218, C.neutral, 5);
  // Range dashed
  body += line(100, 224, 285, 224, '#94a3b8', 1, true);
  body += label(192, 238, 'Range', null, 'middle', 10);
  return svgOpen() + body + '</svg>';
})();

// ── U1-MCQ-08 — Boat + river current vectors ──────────────────────────────────
diagrams['U1-MCQ-08'] = (() => {
  let body = '';
  const ox = 130, oy = 190;
  // Cardinal labels
  body += label(155, 25, 'N', null, 'middle', 11);
  body += label(155, 245, 'S', null, 'middle', 11);
  body += label(50, 135, 'W', null, 'middle', 11);
  body += label(265, 135, 'E', null, 'middle', 11);
  // Light compass lines
  body += line(155, 30, 155, 240, '#94a3b8', 1, true);
  body += line(55, 130, 260, 130, '#94a3b8', 1, true);
  // River current: east (right)
  body += arrow(ox, oy, ox + 90, oy, C.normal);
  body += label(ox + 94, oy + 4, 'v_river = 3 m/s', C.normal, 'start', 10, true);
  // Boat velocity: north (up)
  body += arrow(ox, oy, ox, oy - 120, C.applied);
  body += label(ox - 6, oy - 124, 'v_boat = 4 m/s', C.applied, 'end', 10, true);
  // Resultant (diagonal)
  body += arrow(ox, oy, ox + 90, oy - 120, C.tension);
  body += label(ox + 94, oy - 122, 'v_net = ?', C.tension, 'start', 10, true);
  // Right-angle marker at origin
  body += `<path d='M ${ox + 12},${oy} L ${ox + 12},${oy - 12} L ${ox},${oy - 12}' stroke='#94a3b8' stroke-width='1' fill='none'/>`;
  // Origin dot
  body += dot(ox, oy, C.neutral, 5);
  return svgOpen() + body + '</svg>';
})();

// ── U1-MCQ-09 — Truck v-t graph (constant acceleration from rest) ─────────────
diagrams['U1-MCQ-09'] = buildMotionGraph({
  type: 'velocity-time',
  segments: [{ x1: 0, y1: 0, x2: 4, y2: 18 }],
  xMax: 5, yMin: 0, yMax: 20,
  color: C.curve,
  refLines: [
    { axis: 'x', value: 4, lbl: '4 s' },
  ],
});

// ── U2-MCQ-08 — Atwood machine M1=3kg, M2=7kg (M2 heavier) ───────────────────
diagrams['U2-MCQ-08'] = buildAtwood({
  m1Label: 'M₁ 3 kg',
  m2Label: 'M₂ 7 kg',
  m1Heavier: false,   // M2 is heavier
  showAcceleration: true,
  showTension: true,
});

// ── U2-MCQ-10 — Lawnmower pushed at angle θ below horizontal ──────────────────
diagrams['U2-MCQ-10'] = buildFBD({
  surface: 'horizontal',
  objectLabel: 'M',
  forces: [
    { label: 'F_g', angle: 270, magnitude: 0.9, color: C.gravity },
    { label: 'F_N', angle: 90,  magnitude: 1.1, color: C.normal },
    { label: 'f',   angle: 180, magnitude: 0.6, color: C.friction },
    // Applied at angle θ below horizontal = angle below 0° → use ~330° (30° below right)
    { label: 'F',   angle: 330, magnitude: 1.0, color: C.applied },
  ],
});

// ── U5-MCQ-02 — Spring explosion (two carts at rest) ─────────────────────────
diagrams['U5-MCQ-02'] = (() => {
  let body = '';
  // Track
  body += hashGround(40, 270, 175);
  // "BEFORE" label
  body += label(155, 22, 'Before (at rest)', null, 'middle', 11);
  // Cart A (left, mass 2m)
  body += box(55, 140, 50, 30, '2m', null);
  // Spring symbol between carts
  const sx = 108, sy = 155;
  for (let i = 0; i < 5; i++) {
    const zigX = sx + i * 10;
    body += axisLine(zigX, sy, zigX + 5, sy - 8);
    body += axisLine(zigX + 5, sy - 8, zigX + 10, sy);
  }
  body += axisLine(105, 155, 108, 155);
  body += axisLine(158, 155, 163, 155);
  // Cart B (right, mass m)
  body += box(163, 140, 50, 30, 'm', null);
  // "At rest" indicator
  body += label(80, 128, 'v = 0', null, 'middle', 10);
  body += label(188, 128, 'v = 0', null, 'middle', 10);
  // Arrow showing spring compressed (squeeze arrows)
  body += arrow(100, 108, 112, 108, C.friction, 2);
  body += arrow(168, 108, 156, 108, C.friction, 2);
  body += label(133, 104, 'compressed', '#94a3b8', 'middle', 9);
  // After state below
  body += label(155, 200, 'After: A ← v_A       v_B → B', null, 'middle', 10);
  return svgOpen() + body + '</svg>';
})();

// ── U5-MCQ-04 — Elastic collision, equal masses ───────────────────────────────
diagrams['U5-MCQ-04'] = (() => {
  let body = '';
  body += hashGround(40, 270, 230);
  // Before
  body += label(155, 22, 'Before', null, 'middle', 11);
  body += box(55, 80, 44, 32, 'm', null);
  body += arrow(99, 96, 135, 96, C.applied);
  body += label(138, 92, 'v₀', C.applied, 'start', 11, true);
  body += box(175, 80, 44, 32, 'm', null);
  body += label(197, 66, 'at rest', '#94a3b8', 'middle', 10);
  // Divider
  body += line(55, 132, 265, 132, '#94a3b8', 1, true);
  // After
  body += label(155, 152, 'After', null, 'middle', 11);
  body += box(55, 165, 44, 32, 'm', null);
  body += label(77, 151, 'at rest', '#94a3b8', 'middle', 10);
  body += box(175, 165, 44, 32, 'm', null);
  body += arrow(175, 181, 211, 181, C.applied);
  body += label(214, 177, 'v₀', C.applied, 'start', 11, true);
  return svgOpen() + body + '</svg>';
})();

// ── U5-MCQ-06 — 2D collision (east + north) ───────────────────────────────────
diagrams['U5-MCQ-06'] = (() => {
  let body = '';
  body += label(155, 22, 'Before Collision', null, 'middle', 11);
  // Object 1: moving east (right)
  const o1x = 60, o1y = 140;
  body += box(o1x, o1y - 16, 36, 32, '2 kg', null);
  body += arrow(o1x + 36, o1y, o1x + 80, o1y, C.applied);
  body += label(o1x + 84, o1y + 4, '3 m/s east', C.applied, 'start', 10, true);
  // Object 2: moving north (up)
  const o2x = 200, o2y = 170;
  body += box(o2x - 18, o2y - 16, 36, 32, '2 kg', null);
  body += arrow(o2x, o2y - 16, o2x, o2y - 60, C.tension);
  body += label(o2x + 4, o2y - 64, '3 m/s north', C.tension, 'start', 10, true);
  // "Collision point" indicator
  body += dot(168, 140, '#dc2626', 6);
  body += label(172, 135, 'collision', '#94a3b8', 'start', 9);
  // After label
  body += label(155, 210, 'After: combined momentum → ?', null, 'middle', 10);
  return svgOpen() + body + '</svg>';
})();

// ── U5-MCQ-07 — Force-time graph (rectangular pulse 50N, 0 to 0.4s) ───────────
diagrams['U5-MCQ-07'] = (() => {
  // Rectangular pulse: F=50 from t=0 to t=0.4, then F=0
  // Use motion graph builder with force-time type
  // Segments: horizontal at 50, then vertical drop, then horizontal at 0
  // The validator allows position continuity only for position-time, so we're fine
  return buildMotionGraph({
    type: 'force-time',
    segments: [
      { x1: 0,   y1: 50, x2: 0.4, y2: 50 },
      { x1: 0.4, y1: 50, x2: 0.4, y2: 0  },
      { x1: 0.4, y1: 0,  x2: 0.8, y2: 0  },
    ],
    xMax: 0.8, yMin: 0, yMax: 70,
    color: C.applied,
    refLines: [
      { axis: 'x', value: 0.4, lbl: '0.4 s' },
      { axis: 'y', value: 50,  lbl: '50 N'  },
    ],
  });
})();

// ── U5-MCQ-10 — Perfectly inelastic collision (5kg + 5kg) ────────────────────
diagrams['U5-MCQ-10'] = (() => {
  let body = '';
  body += hashGround(40, 270, 230);
  body += label(155, 22, 'Before', null, 'middle', 11);
  body += box(50, 80, 50, 32, '5 kg', null);
  body += arrow(100, 96, 140, 96, C.applied);
  body += label(143, 92, '10 m/s', C.applied, 'start', 10, true);
  body += box(165, 80, 50, 32, '5 kg', null);
  body += label(190, 66, 'at rest', '#94a3b8', 'middle', 10);
  body += line(50, 132, 265, 132, '#94a3b8', 1, true);
  body += label(155, 152, 'After (stick together)', null, 'middle', 11);
  body += box(95, 165, 80, 32, '10 kg', null);
  body += arrow(175, 181, 215, 181, C.applied);
  body += label(218, 177, 'v = ?', C.applied, 'start', 10, true);
  return svgOpen() + body + '</svg>';
})();

// ── U6-MCQ-04 — Simple pendulum (length L = 2.5 m) ───────────────────────────
diagrams['U6-MCQ-04'] = (() => {
  let body = '';
  const px = 155, py = 42, L = 140, angle = 22;
  const rad = angle * Math.PI / 180;
  const bx = px + L * Math.sin(rad);
  const by = py + L * Math.cos(rad);
  // Ceiling
  body += hashGround(100, 210, py - 5);
  body += axisLine(100, py - 5, 210, py - 5);
  // Pivot
  body += dot(px, py, '#94a3b8', 6);
  // String
  body += axisLine(px, py, Math.round(bx), Math.round(by));
  // Length label
  const mx = Math.round(px + (L / 2) * Math.sin(rad));
  const my = Math.round(py + (L / 2) * Math.cos(rad));
  body += label(mx + 8, my, 'L = 2.5 m', null, 'start', 11, true);
  // Bob
  body += `<circle cx='${Math.round(bx)}' cy='${Math.round(by)}' r='14' fill='none' stroke-width='2' class='svg-axis'/>`;
  // Arc showing motion
  const r2 = L;
  body += `<path d='M ${px},${py + r2} A ${r2},${r2} 0 0,1 ${Math.round(bx)},${Math.round(by)}' stroke='#94a3b8' stroke-width='1' stroke-dasharray='5 3' fill='none'/>`;
  // Vertical dashed (equilibrium)
  body += line(px, py, px, py + L, '#94a3b8', 1, true);
  // Angle label
  body += label(px + 10, py + 28, 'θ', null, 'start', 12);
  // Period formula hint
  body += label(155, 238, 'T = 2π√(L/g)', null, 'middle', 11);
  return svgOpen() + body + '</svg>';
})();

// ── U7-MCQ-09 — Torque wrench: 60N at 30° above horizontal, arm 0.8m ─────────
diagrams['U7-MCQ-09'] = (() => {
  let body = '';
  const pivotX = 68, pivotY = 160;
  const armLen = 160;
  const forceAngle = 30;  // degrees above horizontal
  const rad = forceAngle * Math.PI / 180;
  // Pivot (bolt)
  body += `<circle cx='${pivotX}' cy='${pivotY}' r='10' fill='none' stroke-width='2.5' class='svg-axis'/>`;
  body += dot(pivotX, pivotY, '#94a3b8', 4);
  // Wrench arm (horizontal)
  body += axisLine(pivotX, pivotY, pivotX + armLen, pivotY);
  body += label(pivotX + armLen / 2, pivotY + 14, 'r = 0.8 m', null, 'middle', 10, true);
  // Force arrow at 30° above horizontal at tip
  const tipX = pivotX + armLen;
  const tipY = pivotY;
  const fLen = 65;
  const fex = Math.round(tipX + fLen * Math.cos(rad));
  const fey = Math.round(tipY - fLen * Math.sin(rad));
  body += arrow(tipX, tipY, fex, fey, C.applied);
  body += label(fex + 4, fey - 4, 'F = 60 N', C.applied, 'start', 10, true);
  // Angle arc
  body += `<path d='M ${tipX + 28},${tipY} A 28,28 0 0,0 ${Math.round(tipX + 28 * Math.cos(rad))},${Math.round(tipY - 28 * Math.sin(rad))}' fill='none' stroke-width='1' class='svg-axis'/>`;
  body += label(tipX + 32, tipY - 12, '30°', null, 'start', 10);
  // Moment arm dashed perpendicular
  const perpX = tipX;
  const perpY1 = tipY - 5;
  body += line(tipX, pivotY, tipX, pivotY - 80, '#94a3b8', 1, true);
  body += label(tipX + 4, pivotY - 40, 'd⊥', '#94a3b8', 'start', 10);
  // Torque formula
  body += label(155, 228, 'τ = r × F × sin(θ)', null, 'middle', 11);
  return svgOpen() + body + '</svg>';
})();

// ── U9-MCQ-04 — Doppler effect (police car moving away from observer) ──────────
diagrams['U9-MCQ-04'] = (() => {
  let body = '';
  body += label(155, 18, 'Doppler Effect', null, 'middle', 11);
  const carX = 155, carY = 130;
  // Car (rectangle)
  body += box(carX - 22, carY - 14, 44, 24, '', null);
  body += label(carX, carY - 2, '🚓', null, 'middle', 14);  // fallback: use text
  body += label(carX, carY + 24, 'car moving →', null, 'middle', 9);
  // Motion arrow
  body += arrow(carX + 30, carY, carX + 60, carY, C.applied);
  // Wavefronts in front (compressed, moving right — car is moving away from observer on left)
  for (let i = 1; i <= 3; i++) {
    const r = 12 + i * 16;
    // Right side (in direction of travel): compressed
    body += `<path d='M ${carX + 22},${carY} A ${r * 0.6},${r} 0 0,1 ${carX + 22},${carY}' fill='none' stroke='#94a3b8' stroke-width='1'/>`;
    body += `<ellipse cx='${carX + 22 + r * 0.5}' cy='${carY}' rx='${r * 0.55}' ry='${r}' fill='none' stroke='#3b82f6' stroke-width='1' stroke-dasharray='3 2'/>`;
  }
  // Wavefronts behind (expanded, moving left — toward observer)
  for (let i = 1; i <= 3; i++) {
    const r = 14 + i * 20;
    body += `<ellipse cx='${carX - 22 - r * 0.55}' cy='${carY}' rx='${r * 0.65}' ry='${r}' fill='none' stroke='#f97316' stroke-width='1' stroke-dasharray='3 2'/>`;
  }
  // Observer on left
  body += label(52, carY + 4, '👂', null, 'middle', 16);
  body += label(52, carY + 22, 'observer', null, 'middle', 9);
  // Labels
  body += label(88, carY - 55, 'expanded\n(lower f)', '#f97316', 'middle', 9);
  body += label(218, carY - 55, 'compressed\n(higher f)', '#3b82f6', 'middle', 9);
  body += label(88, carY - 42, '(lower f)', '#f97316', 'middle', 9);
  body += label(218, carY - 42, '(higher f)', '#3b82f6', 'middle', 9);
  body += label(155, 238, 'f_obs = f_s · v/(v + v_s)  [car moving away]', null, 'middle', 9);
  return svgOpen() + body + '</svg>';
})();

// ── phys_img_q1 — Position-time graph (toy car, find greatest speed interval) ──
// Typical 4-segment: rise steep → gentle slope → flat → steeper rise
diagrams['phys_img_q1'] = buildMotionGraph({
  type: 'position-time',
  segments: [
    { x1: 0, y1: 0,  x2: 2, y2: 8  },   // interval A–B: steep (fast)
    { x1: 2, y1: 8,  x2: 4, y2: 10 },   // interval B–C: gentle (slow)
    { x1: 4, y1: 10, x2: 6, y2: 10 },   // interval C–D: flat (stopped)
  ],
  xMax: 7, yMin: 0, yMax: 12,
  refLines: [
    { axis: 'x', value: 2, lbl: '2' },
    { axis: 'x', value: 4, lbl: '4' },
    { axis: 'x', value: 6, lbl: '6' },
  ],
});

// ── phys_img_q2 — Velocity-time graph (ball launched up, find max height) ──────
// v starts positive (upward), decreases linearly to 0 at peak, continues negative
diagrams['phys_img_q2'] = buildMotionGraph({
  type: 'velocity-time',
  segments: [
    { x1: 0, y1: 15, x2: 1.5, y2: 0   },  // rising phase → peak
    { x1: 1.5, y1: 0, x2: 3, y2: -15  },  // falling phase
  ],
  xMax: 4, yMin: -18, yMax: 18,
  showZeroLine: true,
  refLines: [
    { axis: 'x', value: 1.5, lbl: '1.5 s' },
    { axis: 'y', value: 15,  lbl: 'v₀'    },
  ],
});

// ── phys_img_q3 — FBD block on inclined plane, static equilibrium ─────────────
// Normal is perpendicular to 30° slope = 120° from positive x; friction along slope
diagrams['phys_img_q3'] = buildFBD({
  surface: 'inclined',
  inclineAngle: 30,
  forces: [
    { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity  },
    { label: 'F_N', angle: 120, magnitude: 0.9, color: C.normal   },  // 90+30
    { label: 'f_s', angle: 30,  magnitude: 0.5, color: C.friction },  // up the slope
  ],
});

// ── phys_img_q4 — Block A (3kg) on table, string over pulley, Block B (2kg) hanging
diagrams['phys_img_q4'] = (() => {
  let body = '';
  // Table surface
  body += hashGround(40, 230, 130);
  body += axisLine(40, 80, 230, 80);   // table top
  body += axisLine(40, 80, 40, 250);   // left leg
  body += axisLine(230, 80, 230, 250); // right leg (where pulley is)
  // Block A on table
  body += box(90, 48, 50, 32, 'A', null);
  body += label(115, 35, '3 kg', null, 'middle', 10);
  // String from block A to pulley
  body += axisLine(140, 64, 228, 64);
  // Pulley at table edge
  body += `<circle cx='230' cy='80' r='16' fill='none' stroke-width='2' class='svg-axis'/>`;
  body += dot(230, 80, '#94a3b8', 4);
  // String drops down from pulley
  body += axisLine(230, 96, 230, 160);
  // Block B hanging
  body += box(210, 160, 40, 30, 'B', null);
  body += label(230, 148, '2 kg', null, 'middle', 10);
  // Tension labels
  body += label(184, 56, 'T', C.tension, 'middle', 11, true);
  body += label(244, 130, 'T', C.tension, 'start', 11, true);
  // Gravity on B
  body += arrow(230, 190, 230, 220, C.gravity, 2);
  body += label(234, 218, 'F_g', C.gravity, 'start', 10);
  // Frictionless note
  body += label(120, 240, 'Frictionless table and pulley', '#94a3b8', 'middle', 9);
  return svgOpen() + body + '</svg>';
})();

// ── phys_img_q5 — Roller coaster track, A at h=25m, B at h=10m ───────────────
diagrams['phys_img_q5'] = (() => {
  let body = '';
  // Ground reference
  body += hashGround(45, 275, 222);
  // Track profile: A high on left, dips, comes up to B
  // A at x=75, h=25m → y = 222 - 165 = 57... scale: 25m = 165px? too much
  // Scale: 25m ↔ 150px, so 10m = 60px
  // A at (75, 72), valley at (155, 200), B at (235, 162)
  body += `<path d='M 75,72 Q 120,220 155,198 Q 200,175 235,152' stroke='${C.curve}' stroke-width='2.5' fill='none'/>`;
  // Dashed height lines
  body += line(75, 72, 75, 222, '#94a3b8', 1, true);
  body += line(235, 152, 235, 222, '#94a3b8', 1, true);
  // Height labels
  body += label(56, 148, 'h_A = 25 m', null, 'end', 10, true);
  body += label(250, 188, 'h_B = 10 m', null, 'start', 10, true);
  // Points A and B
  body += dot(75, 72, C.neutral, 6);
  body += label(68, 62, 'A', null, 'end', 13, true);
  body += label(66, 74, 'v₀ = 0', '#94a3b8', 'end', 9);
  body += dot(235, 152, C.neutral, 6);
  body += label(242, 148, 'B', null, 'start', 13, true);
  body += label(244, 162, 'v = ?', '#94a3b8', 'start', 9);
  // Ground level label
  body += label(155, 238, 'Ground (reference level)', '#94a3b8', 'middle', 9);
  return svgOpen() + body + '</svg>';
})();

// ── phys_img_q6 — Force-displacement graph (work = area under curve) ──────────
// F=6N from x=0 to x=4m, drops linearly to 0 at x=6m
diagrams['phys_img_q6'] = buildMotionGraph({
  type: 'force-displacement',
  segments: [
    { x1: 0, y1: 6, x2: 4, y2: 6 },
    { x1: 4, y1: 6, x2: 6, y2: 0 },
  ],
  xMax: 7, yMin: 0, yMax: 8,
  color: C.applied,
  refLines: [
    { axis: 'x', value: 4, lbl: '4 m' },
    { axis: 'x', value: 6, lbl: '6 m' },
    { axis: 'y', value: 6, lbl: '6 N' },
  ],
});

// ── phys_img_q7 — Two-cart collision (before state with values) ───────────────
diagrams['phys_img_q7'] = (() => {
  let body = '';
  body += hashGround(40, 270, 195);
  body += label(155, 22, 'Before Collision', null, 'middle', 11);
  // Cart A (2kg, moving right at 3 m/s)
  body += box(55, 130, 55, 34, 'A', null);
  body += label(82, 118, '2 kg', null, 'middle', 10);
  body += arrow(110, 147, 148, 147, C.applied);
  body += label(152, 143, '3 m/s', C.applied, 'start', 10, true);
  // Cart B (1kg, at rest)
  body += box(175, 130, 55, 34, 'B', null);
  body += label(202, 118, '1 kg', null, 'middle', 10);
  body += label(202, 110, 'at rest', '#94a3b8', 'middle', 9);
  // After state
  body += label(155, 215, 'After: A → 1 m/s    B → ?', null, 'middle', 10);
  return svgOpen() + body + '</svg>';
})();

// ── phys_img_q8 — Force-time graph (triangular pulse, collision) ──────────────
// Triangular pulse: rises from 0 at t=0 to F_peak at t=0.3, back to 0 at t=0.6
diagrams['phys_img_q8'] = buildMotionGraph({
  type: 'force-time',
  segments: [
    { x1: 0,   y1: 0,  x2: 0.3, y2: 300 },
    { x1: 0.3, y1: 300, x2: 0.6, y2: 0  },
  ],
  xMax: 0.8, yMin: 0, yMax: 350,
  color: C.applied,
  refLines: [
    { axis: 'x', value: 0.3, lbl: '0.3 s' },
    { axis: 'y', value: 300, lbl: '300 N' },
  ],
});

// ── phys_img_q9 — Displacement-time graph (SHM, find period and amplitude) ────
// Sinusoidal: A=4, T=4s — build as polyline sine wave on graph axes
diagrams['phys_img_q9'] = (() => {
  const SVG_X1 = 65, SVG_X2 = 270, SVG_Y1 = 35, SVG_Y2 = 205;
  const xMax = 8, yMax = 5, yMin = -5;
  function sx(x) { return SVG_X1 + (x / xMax) * (SVG_X2 - SVG_X1); }
  function sy(y) { return SVG_Y2 - ((y - yMin) / (yMax - yMin)) * (SVG_Y2 - SVG_Y1); }
  let body = axes('Time (s)', 'Displacement (m)');
  // Zero line
  body += `<line x1='65' y1='${Math.round(sy(0))}' x2='270' y2='${Math.round(sy(0))}' stroke-width='1' class='svg-axis svg-dashed'/>`;
  // Sine wave: A=4, T=4s
  const A = 4, T = 4;
  const points = [];
  for (let i = 0; i <= 120; i++) {
    const t = (i / 120) * xMax;
    const disp = A * Math.sin(2 * Math.PI * t / T);
    points.push(`${Math.round(sx(t))},${Math.round(sy(disp))}`);
  }
  body += `<polyline points='${points.join(' ')}' stroke='${C.curve}' stroke-width='2.5' fill='none'/>`;
  // Amplitude arrow
  const peakX = Math.round(sx(1));
  const peakY = Math.round(sy(4));
  const zeroY = Math.round(sy(0));
  body += `<line x1='${peakX + 18}' y1='${zeroY}' x2='${peakX + 18}' y2='${peakY}' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3 2'/>`;
  body += label(peakX + 22, Math.round((zeroY + peakY) / 2), 'A = 4 m', '#94a3b8', 'start', 10, true);
  // Period bracket
  const t0 = Math.round(sx(0)), t1 = Math.round(sx(4));
  body += `<line x1='${t0}' y1='${SVG_Y2 + 12}' x2='${t1}' y2='${SVG_Y2 + 12}' stroke='#94a3b8' stroke-width='1'/>`;
  body += `<line x1='${t0}' y1='${SVG_Y2 + 8}' x2='${t0}' y2='${SVG_Y2 + 16}' stroke='#94a3b8' stroke-width='1'/>`;
  body += `<line x1='${t1}' y1='${SVG_Y2 + 8}' x2='${t1}' y2='${SVG_Y2 + 16}' stroke='#94a3b8' stroke-width='1'/>`;
  body += label(Math.round((t0 + t1) / 2), SVG_Y2 + 26, 'T = 4 s', '#94a3b8', 'middle', 10, true);
  return svgOpen() + body + '</svg>';
})();

// ── phys_img_q10 — Pendulum with 3 positions (find position of max speed) ──────
diagrams['phys_img_q10'] = (() => {
  let body = '';
  const px = 155, py = 45, L = 145;
  // Ceiling
  body += axisLine(80, py - 5, 230, py - 5);
  for (let hx = 86; hx < 230; hx += 14) {
    body += axisLine(hx, py - 5, hx - 8, py - 13);
  }
  // Pivot
  body += dot(px, py, '#94a3b8', 6);
  // Position 1 (left, max height)
  const angle1 = -28, r1 = (angle1 * Math.PI) / 180;
  const b1x = Math.round(px + L * Math.sin(r1));
  const b1y = Math.round(py + L * Math.cos(r1));
  body += axisLine(px, py, b1x, b1y);
  body += `<circle cx='${b1x}' cy='${b1y}' r='13' fill='none' stroke-width='2' class='svg-axis'/>`;
  body += label(b1x - 4, b1y + 4, '1', null, 'middle', 11, true);
  // Position 2 (center, max speed)
  const b2x = px, b2y = py + L;
  body += axisLine(px, py, b2x, b2y);
  body += `<circle cx='${b2x}' cy='${b2y}' r='13' fill='none' stroke-width='2' class='svg-axis'/>`;
  body += label(b2x, b2y + 4, '2', null, 'middle', 11, true);
  // Position 3 (right, max height)
  const angle3 = 28, r3 = (angle3 * Math.PI) / 180;
  const b3x = Math.round(px + L * Math.sin(r3));
  const b3y = Math.round(py + L * Math.cos(r3));
  body += axisLine(px, py, b3x, b3y);
  body += `<circle cx='${b3x}' cy='${b3y}' r='13' fill='none' stroke-width='2' class='svg-axis'/>`;
  body += label(b3x + 4, b3y + 4, '3', null, 'middle', 11, true);
  // Arc
  body += `<path d='M ${b1x},${b1y} Q ${px - 20},${b2y + 10} ${b2x},${b2y}' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4 3' fill='none'/>`;
  body += `<path d='M ${b2x},${b2y} Q ${px + 20},${b2y + 10} ${b3x},${b3y}' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4 3' fill='none'/>`;
  // Height comparison labels
  body += label(b1x - 18, b1y - 16, 'h₁', null, 'middle', 10);
  body += label(b3x + 18, b3y - 16, 'h₃', null, 'middle', 10);
  body += label(b2x, b2y + 24, 'h = 0', null, 'middle', 10);
  return svgOpen() + body + '</svg>';
})();

// ─── VALIDATE ALL ─────────────────────────────────────────────────────────────

const TYPE_MAP = {
  'U1-MCQ-05': 'projectile',
  'U1-MCQ-08': 'fbd',            // vector diagram — check as generic
  'U1-MCQ-09': 'motion-graph',
  'U2-MCQ-08': 'atwood',
  'U2-MCQ-10': 'fbd',
  'U5-MCQ-02': 'fbd',
  'U5-MCQ-04': 'fbd',
  'U5-MCQ-06': 'fbd',
  'U5-MCQ-07': 'motion-graph',
  'U5-MCQ-10': 'fbd',
  'U6-MCQ-04': 'pendulum',   // geometry diagram, no force arrows expected
  'U7-MCQ-09': 'fbd',
  'U9-MCQ-04': 'fbd',
  'phys_img_q1': 'motion-graph',
  'phys_img_q2': 'motion-graph',
  'phys_img_q3': 'fbd',
  'phys_img_q4': 'atwood',
  'phys_img_q5': 'projectile',
  'phys_img_q6': 'motion-graph',
  'phys_img_q7': 'fbd',
  'phys_img_q8': 'motion-graph',
  'phys_img_q9': 'motion-graph',
  'phys_img_q10': 'pendulum',  // geometry diagram, no force arrows expected
};

let allPassed = true;
const output = {};
console.log('── Validating all diagrams ──');
for (const [id, svg] of Object.entries(diagrams)) {
  const type = TYPE_MAP[id] || 'fbd';
  const result = validatePhys1Svg(svg, type);
  if (!result.valid) {
    console.error(`❌ ${id}: ${result.errors.join(', ')}`);
    allPassed = false;
  } else {
    console.log(`✅ ${id}`);
    output[id] = svg;
  }
}

console.log(`\n${Object.keys(output).length}/${Object.keys(diagrams).length} diagrams passed`);

const fs = require('fs');
fs.writeFileSync(__dirname + '/phys1-migration.json', JSON.stringify(output, null, 2));
console.log('Written to scripts/phys1-migration.json');
if (!allPassed) process.exit(1);
