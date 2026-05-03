'use strict';
const {
  buildFBD,
  validatePhys1Svg,
  svgOpen, arrow, label, dot,
  forceArrow, objectBox, groundSurface,
  C,
} = require('./phys1-graph-builder');

function axLine(x1, y1, x2, y2, sw = 2) {
  return `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke-width='${sw}' class='svg-axis'/>`;
}

const diagrams = {};

// ─── SHM MASS-SPRING DIAGRAM ──────────────────────────────────────────────────
// Horizontal spring + mass at equilibrium with position axis: −A, 0, +A
// Used for all 10 SHM conceptual questions.

function buildSHM() {
  let body = '';

  // Wall (left side)
  body += axLine(45, 72, 45, 192, 3);
  for (let wy = 79; wy < 192; wy += 14) {
    body += axLine(45, wy, 32, wy + 10, 1);
  }

  // Spring coil: 5 full coils from x=55 to x=135, centred at y=128
  body += [
    `<path d='`,
    `M 45,128 L 55,128 `,
    `Q 59,113 63,128 Q 67,143 71,128 `,
    `Q 75,113 79,128 Q 83,143 87,128 `,
    `Q 91,113 95,128 Q 99,143 103,128 `,
    `Q 107,113 111,128 Q 115,143 119,128 `,
    `Q 123,113 127,128 Q 131,143 135,128 `,
    `L 147,128`,
    `' stroke='${C.spring}' stroke-width='2' fill='none'/>`,
  ].join('');
  body += label(90, 106, 'k', C.spring, 'middle', 10);

  // Track
  body += axLine(45, 145, 268, 145);

  // Mass box at equilibrium (left edge = 147, right edge = 183)
  body += objectBox(165, 128, 36, 34, 'm');

  // Position axis at y=182
  body += axLine(68, 182, 252, 182, 1.5);
  body += `<polygon points='252,182 241,177 241,187' class='svg-axis-fill'/>`;
  body += label(255, 186, 'x', null, 'start', 12);

  const positions = [
    { x: 90,  lbl: '−A' },
    { x: 165, lbl: '0'  },
    { x: 240, lbl: '+A' },
  ];
  for (const p of positions) {
    body += `<line x1='${p.x}' y1='145' x2='${p.x}' y2='182' stroke-width='1' stroke-dasharray='4 3' class='svg-axis'/>`;
    body += axLine(p.x, 178, p.x, 186, 1.5);
    body += label(p.x, 198, p.lbl, null, 'middle', 12);
  }

  // Energy state labels
  body += label(90,  215, 'v = 0',     C.neutral, 'middle', 10);
  body += label(90,  227, '|a| = max', C.neutral, 'middle', 10);
  body += label(165, 215, 'v = max',   C.curve,   'middle', 10);
  body += label(165, 227, 'a = 0',     C.curve,   'middle', 10);
  body += label(240, 215, 'v = 0',     C.neutral, 'middle', 10);
  body += label(240, 227, '|a| = max', C.neutral, 'middle', 10);

  return svgOpen() + body + '</svg>';
}

const shmSvg = buildSHM();
const shmIds = [
  'aphy1_u6_q3',  'U6-MCQ-02',     'U6-MCQ-03',     'U6-MCQ-07',
  'phys1_u6_q209','phys1_u6_q210', 'phys1_u6_q211',
  'phys1_u6_q213','phys1_u6_q214', 'phys1_u6_q233',
];
for (const id of shmIds) diagrams[id] = shmSvg;

// ─── TWO-ROPE TENSION ─────────────────────────────────────────────────────────
// phys1_u2_q069: sign hangs from V-shape rope, 30° from vertical each side.

diagrams['phys1_u2_q069'] = (() => {
  let body = '';

  // Ceiling
  body += axLine(80, 40, 230, 40);
  for (let hx = 88; hx < 224; hx += 14) {
    body += axLine(hx, 40, hx - 8, 30, 1);
  }

  // 30° from vertical: horizontal offset = 110 * tan(30°) ≈ 64 px
  const lax = 91, rax = 219, sy = 40;   // anchor points on ceiling
  const mx = 155, my = 150;             // mass centre

  // Rope lines (physical context)
  body += axLine(lax, sy, mx, my, 1.5);
  body += axLine(rax, sy, mx, my, 1.5);

  // Vertical dashed reference lines at anchors for angle annotation
  body += `<line x1='${lax}' y1='40' x2='${lax}' y2='88' stroke-width='1' stroke-dasharray='3 3' class='svg-axis'/>`;
  body += `<line x1='${rax}' y1='40' x2='${rax}' y2='88' stroke-width='1' stroke-dasharray='3 3' class='svg-axis'/>`;
  body += label(106, 70, '30°', null, 'start', 10);
  body += label(196, 70, '30°', null, 'end',   10);

  // Sign box
  body += objectBox(mx, my, 50, 30, '');
  body += label(mx, my + 5, 'Sign', null, 'middle', 11);

  // FBD force arrows on sign
  body += forceArrow(mx, my, 120, 0.85, C.tension, 'T₁');  // up-left
  body += forceArrow(mx, my,  60, 0.85, C.tension, 'T₂');  // up-right
  body += forceArrow(mx, my, 270, 0.80, C.gravity, 'W');   // down

  return svgOpen() + body + '</svg>';
})();

// ─── VERTICAL CIRCLE — BOTTOM (tension greatest) ──────────────────────────────
// phys1_u3_q092, phys1_u3_q104: ball at bottom; T > Fg

const _vcBottom = (() => {
  let body = '';
  const cx = 155, cy = 110, r = 75;

  // Circle track
  body += `<circle cx='${cx}' cy='${cy}' r='${r}' fill='none' stroke-width='2' class='svg-axis'/>`;
  body += dot(cx, cy, C.neutral, 4);  // centre

  const bx = cx, by = cy + r;  // ball at bottom (y=185)
  body += dot(bx, by, '#94a3b8', 6);

  // Dashed string from centre to ball
  body += `<line x1='${cx}' y1='${cy}' x2='${bx}' y2='${by}' stroke-width='1.5' stroke-dasharray='5 4' class='svg-axis'/>`;

  // T up (toward centre)
  body += arrow(bx, by, bx, by - 62, C.tension, 2.5);
  body += label(bx + 6, by - 38, 'T', C.tension, 'start', 13, true);

  // F_g down
  body += arrow(bx, by, bx, by + 48, C.gravity, 2.5);
  body += label(bx + 6, by + 40, 'F_g', C.gravity, 'start', 12, true);

  // Equation hint
  body += label(cx, by + 66, 'T − F_g = mv²/r  →  T is maximum here', C.neutral, 'middle', 10);

  // "Bottom" label
  body += label(bx + 12, by + 4, 'Bottom', null, 'start', 10);

  return svgOpen() + body + '</svg>';
})();

diagrams['phys1_u3_q092'] = _vcBottom;
diagrams['phys1_u3_q104'] = _vcBottom;

// ─── BANKED CURVE FBD ─────────────────────────────────────────────────────────
// phys1_u3_q097: car on frictionless banked road; horizontal component of N = centripetal.

diagrams['phys1_u3_q097'] = buildFBD({
  surface: 'inclined',
  inclineAngle: 25,
  forces: [
    { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
    { label: 'F_N', angle: 115, magnitude: 1.0, color: C.normal },
  ],
});

// ─── VERTICAL CIRCLE — TOP (T = 0) ───────────────────────────────────────────
// phys1_u3_q116: at top, string tension = 0; gravity alone is centripetal.

diagrams['phys1_u3_q116'] = (() => {
  let body = '';
  const cx = 155, cy = 155, r = 75;

  // Circle track
  body += `<circle cx='${cx}' cy='${cy}' r='${r}' fill='none' stroke-width='2' class='svg-axis'/>`;
  body += dot(cx, cy, C.neutral, 4);

  const bx = cx, by = cy - r;  // ball at top (y=80)
  body += dot(bx, by, '#94a3b8', 6);

  // Dashed string (zero tension)
  body += `<line x1='${cx}' y1='${cy}' x2='${bx}' y2='${by}' stroke-width='1.5' stroke-dasharray='5 4' class='svg-axis'/>`;

  // T = 0 label
  body += label(bx + 10, by - 6, 'T = 0', C.tension, 'start', 11);

  // F_g down (toward centre at top)
  body += arrow(bx, by, bx, by + 60, C.gravity, 2.5);
  body += label(bx + 6, by + 48, 'F_g', C.gravity, 'start', 12, true);

  // Physics note
  body += label(cx, by - 22, 'mg = mv²/r  →  v_top = √(gr)', C.neutral, 'middle', 10);

  // "Top" label
  body += label(bx - 14, by + 4, 'Top', null, 'end', 10);

  return svgOpen() + body + '</svg>';
})();

// ─── BEAM WITH SINGLE SUPPORT ─────────────────────────────────────────────────
// U7-MCQ-02: 4 m beam (10 kg), 20 kg mass at one end. Find support location.

diagrams['U7-MCQ-02'] = (() => {
  let body = '';

  // Scale: 4 m = 180 px  →  1 m = 45 px
  // Beam from x=65 to x=245, y=115
  const y0 = 115;
  body += axLine(65, y0, 245, y0, 4);

  // Hanging mass at LEFT end (x=65): rope + box + Fg
  body += axLine(65, y0, 65, y0 + 22, 1.5);  // rope
  body += objectBox(65, y0 + 38, 44, 28, '20 kg');
  body += arrow(65, y0 + 52, 65, y0 + 82, C.gravity, 2.5);
  body += label(72, y0 + 78, 'F_g', C.gravity, 'start', 11);

  // Beam's own weight at centre (x=155)
  body += arrow(155, y0, 155, y0 + 50, C.gravity, 2.5);
  body += label(161, y0 + 44, '10g', C.gravity, 'start', 11);
  body += label(155, y0 - 14, 'beam COM', null, 'middle', 10);

  // Support triangle at 0.67 m from left end  →  x = 65 + 30 = 95
  const sx = 95;
  body += `<polygon points='${sx},${y0} ${sx - 12},${y0 + 20} ${sx + 12},${y0 + 20}' fill='#94a3b8' stroke='none'/>`;
  body += axLine(sx - 16, y0 + 20, sx + 16, y0 + 20);

  // Support label
  body += label(sx, y0 + 34, '0.67 m', null, 'middle', 10);
  body += label(sx, y0 + 46, 'from end', null, 'middle', 10);

  // 4 m dimension line above beam
  body += axLine(65, y0 - 28, 245, y0 - 28, 1);
  body += axLine(65,  y0 - 32, 65,  y0 - 24, 1);
  body += axLine(245, y0 - 32, 245, y0 - 24, 1);
  body += label(155, y0 - 34, '4 m', null, 'middle', 11);

  return svgOpen() + body + '</svg>';
})();

// ─── SEESAW BALANCE ───────────────────────────────────────────────────────────
// aphy1_u7_q3: 4 m seesaw, pivot at centre; 30 kg at 1.5 m, find distance for 20 kg.

diagrams['aphy1_u7_q3'] = (() => {
  let body = '';

  // Beam: x=75 to x=237 (schematic; pivot at x=155), y=125
  const y0 = 125;
  body += axLine(75, y0, 237, y0, 4);

  // Pivot triangle at centre (x=155)
  body += `<polygon points='155,${y0} 143,${y0 + 20} 167,${y0 + 20}' fill='#94a3b8' stroke='none'/>`;
  body += axLine(139, y0 + 20, 171, y0 + 20);
  body += label(155, y0 + 34, 'pivot', null, 'middle', 10);

  // 30 kg child at 1.5 m left of pivot  (scale ~32 px/m → 48 px)
  const c1x = 107;  // 155 − 48
  body += objectBox(c1x, y0 - 34, 36, 26, '30 kg');
  body += arrow(c1x, y0 - 21, c1x, y0 - 7, C.gravity, 2.5);

  // 1.5 m label between child and pivot
  body += axLine(c1x, y0 + 10, 155, y0 + 10, 1);
  body += axLine(c1x, y0 + 7,  c1x, y0 + 13, 1);
  body += axLine(155,  y0 + 7,  155,  y0 + 13, 1);
  body += label(131, y0 + 22, '1.5 m', null, 'middle', 10);

  // 20 kg child on right  (1m ≈ 32px, so position label shows "d = ?")
  const c2x = 220;  // placeholder right-side position
  body += objectBox(c2x, y0 - 34, 36, 26, '20 kg');
  body += arrow(c2x, y0 - 21, c2x, y0 - 7, C.gravity, 2.5);

  // "d = ?" label between pivot and child
  body += axLine(155,  y0 + 10, c2x, y0 + 10, 1);
  body += axLine(155,  y0 + 7,  155,  y0 + 13, 1);
  body += axLine(c2x,  y0 + 7,  c2x,  y0 + 13, 1);
  body += label(187, y0 + 22, 'd = ?', null, 'middle', 10);

  // Torque balance annotation
  body += label(155, y0 + 46, 'm₁r₁ = m₂r₂', C.neutral, 'middle', 11);
  body += label(155, y0 + 60, '30(1.5) = 20·d  →  d = 2.25 m', C.neutral, 'middle', 10);

  return svgOpen() + body + '</svg>';
})();

// ─── ROD WITH TWO TORQUES ─────────────────────────────────────────────────────
// phys1_u7_q283: rod pivoted at centre; F₁ at L/4 left, F₂ at L/3 right.

diagrams['phys1_u7_q283'] = (() => {
  let body = '';

  // Rod: x=65 to x=245 (L = 180 px), y=100
  const y0 = 100;
  body += axLine(65, y0, 245, y0, 4);

  // Pivot at centre (x=155)
  body += `<polygon points='155,${y0} 143,${y0 + 18} 167,${y0 + 18}' fill='#94a3b8' stroke='none'/>`;
  body += axLine(139, y0 + 18, 171, y0 + 18);
  body += label(155, y0 + 30, 'pivot', null, 'middle', 10);

  // F₁ at L/4 from pivot on LEFT  →  x = 155 − 45 = 110
  const f1x = 110;
  body += arrow(f1x, y0, f1x, y0 + 65, C.applied, 2.5);
  body += label(f1x + 6, y0 + 57, 'F₁', C.applied, 'start', 13, true);

  body += axLine(f1x, y0 - 16, 155, y0 - 16, 1);
  body += axLine(f1x, y0 - 19, f1x, y0 - 13, 1);
  body += axLine(155,  y0 - 19, 155,  y0 - 13, 1);
  body += label(132, y0 - 22, 'L/4', null, 'middle', 11);

  // F₂ at L/3 from pivot on RIGHT  →  x = 155 + 60 = 215
  const f2x = 215;
  body += arrow(f2x, y0, f2x, y0 + 65, C.normal, 2.5);
  body += label(f2x + 6, y0 + 57, 'F₂', C.normal, 'start', 13, true);

  body += axLine(155,  y0 - 16, f2x, y0 - 16, 1);
  body += axLine(155,  y0 - 19, 155,  y0 - 13, 1);
  body += axLine(f2x,  y0 - 19, f2x,  y0 - 13, 1);
  body += label(185, y0 - 22, 'L/3', null, 'middle', 11);

  // Equilibrium condition
  body += label(155, 210, 'F₁(L/4) = F₂(L/3)', C.neutral, 'middle', 11);
  body += label(155, 224, 'F₁ = (4/3) F₂', C.neutral, 'middle', 11, true);

  return svgOpen() + body + '</svg>';
})();

// ─── VALIDATE + OUTPUT ────────────────────────────────────────────────────────

const TYPE_MAP = {};
// SHM diagrams: geometry only, no strict FBD polygon check
for (const id of shmIds) TYPE_MAP[id] = 'pendulum';

// Two-rope: has forceArrow polygons → validate as fbd
TYPE_MAP['phys1_u2_q069'] = 'fbd';

// Vertical circles: custom geometry, no polygon arrowheads from primitives
TYPE_MAP['phys1_u3_q092'] = 'pendulum';
TYPE_MAP['phys1_u3_q104'] = 'pendulum';

// Banked curve: built with buildFBD → validate as fbd
TYPE_MAP['phys1_u3_q097'] = 'fbd';

// Vertical circle top T=0: custom geometry
TYPE_MAP['phys1_u3_q116'] = 'pendulum';

// Torque diagrams: custom geometry
TYPE_MAP['U7-MCQ-02']      = 'pendulum';
TYPE_MAP['aphy1_u7_q3']    = 'pendulum';
TYPE_MAP['phys1_u7_q283']  = 'pendulum';

let allPassed = true;
const output = {};

for (const [id, svg] of Object.entries(diagrams)) {
  const r = validatePhys1Svg(svg, TYPE_MAP[id]);
  if (!r.valid) {
    console.error('❌', id, r.errors.join(', '));
    allPassed = false;
  } else {
    console.log('✅', id);
    output[id] = svg;
  }
}

require('fs').writeFileSync(
  __dirname + '/phys1-phase3.json',
  JSON.stringify(output, null, 2),
);

const n = Object.keys(output).length;
const total = Object.keys(diagrams).length;
console.log(`\n${n}/${total} passed — phys1-phase3.json written`);
if (!allPassed) process.exit(1);
