'use strict';
const {
  buildFBD, buildMotionGraph, buildCircuit, buildStandingWave, buildAtwood,
  validatePhys1Svg,
  svgOpen, axes, arrow, label, dot,
  forceArrow, objectBox, groundSurface,
  C,
} = require('./phys1-graph-builder');

// ─── HELPER ───────────────────────────────────────────────────────────────────

function axisLine(x1, y1, x2, y2) {
  return `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke-width='2' class='svg-axis'/>`;
}

const diagrams = {};

// ─── CIRCUITS ─────────────────────────────────────────────────────────────────

// aphy1_u8_q2 — 12V, 4Ω single resistor, series
diagrams['aphy1_u8_q2'] = buildCircuit({
  topology: 'series',
  emf: '12 V',
  components: [
    { label: 'R', value: '4 Ω' },
  ],
});

// aphy1_u8_q3 — R1=6Ω, R2=3Ω in parallel
diagrams['aphy1_u8_q3'] = buildCircuit({
  topology: 'parallel',
  emf: 'ε',
  branches: [
    [{ label: 'R₁', value: '6 Ω' }],
    [{ label: 'R₂', value: '3 Ω' }],
  ],
});

// aphy1_u8_q5 — three identical R: two in parallel then in series with third
diagrams['aphy1_u8_q5'] = buildCircuit({
  topology: 'series-parallel',
  emf: 'ε',
  components: [{ label: 'R₁', value: 'R' }],
  branches: [
    [{ label: 'R₂', value: 'R' }],
    [{ label: 'R₃', value: 'R' }],
  ],
});

// aphy1_u8_q8 — 24V, R1=4Ω, R2=8Ω in series
diagrams['aphy1_u8_q8'] = buildCircuit({
  topology: 'series',
  emf: '24 V',
  components: [
    { label: 'R₁', value: '4 Ω' },
    { label: 'R₂', value: '8 Ω' },
  ],
});

// aphy1_u8_q9 — 20V, R1=10Ω, R2=20Ω in parallel
diagrams['aphy1_u8_q9'] = buildCircuit({
  topology: 'parallel',
  emf: '20 V',
  branches: [
    [{ label: 'R₁', value: '10 Ω' }],
    [{ label: 'R₂', value: '20 Ω' }],
  ],
});

// aphy1_u8_q10 — 9V, R1=3Ω, R2=6Ω in series
diagrams['aphy1_u8_q10'] = buildCircuit({
  topology: 'series',
  emf: '9 V',
  components: [
    { label: 'R₁', value: '3 Ω' },
    { label: 'R₂', value: '6 Ω' },
  ],
});

// U8-MCQ-04 — 20V, R1=2Ω, R2=3Ω, R3=5Ω in series
diagrams['U8-MCQ-04'] = buildCircuit({
  topology: 'series',
  emf: '20 V',
  components: [
    { label: 'R₁', value: '2 Ω' },
    { label: 'R₂', value: '3 Ω' },
    { label: 'R₃', value: '5 Ω' },
  ],
});

// U8-MCQ-05 — 12V, R1=4Ω, R2=12Ω in parallel
diagrams['U8-MCQ-05'] = buildCircuit({
  topology: 'parallel',
  emf: '12 V',
  branches: [
    [{ label: 'R₁', value: '4 Ω' }],
    [{ label: 'R₂', value: '12 Ω' }],
  ],
});

// U8-MCQ-09 — 12V: R1=4Ω and R2=12Ω in parallel, then in series with R3=3Ω
diagrams['U8-MCQ-09'] = buildCircuit({
  topology: 'series-parallel',
  emf: '12 V',
  components: [{ label: 'R₃', value: '3 Ω' }],
  branches: [
    [{ label: 'R₁', value: '4 Ω' }],
    [{ label: 'R₂', value: '12 Ω' }],
  ],
});

// ─── STANDING WAVES ───────────────────────────────────────────────────────────

// aphy1_u9_q3 — string fixed both ends, fundamental (n=1)
diagrams['aphy1_u9_q3'] = buildStandingWave({ type: 'string', harmonic: 1 });

// aphy1_u9_q4 — open pipe, fundamental (n=1)
diagrams['aphy1_u9_q4'] = buildStandingWave({ type: 'open-pipe', harmonic: 1 });

// aphy1_u9_q8 — closed pipe, fundamental (n=1)
diagrams['aphy1_u9_q8'] = buildStandingWave({ type: 'closed-pipe', harmonic: 1 });

// U9-MCQ-03 — guitar string (fixed both ends), third harmonic (n=3)
diagrams['U9-MCQ-03'] = buildStandingWave({ type: 'string', harmonic: 3 });

// U9-MCQ-07 — open pipe, second harmonic (n=2)
diagrams['U9-MCQ-07'] = buildStandingWave({ type: 'open-pipe', harmonic: 2 });

// U9-MCQ-09 — closed pipe, third harmonic (n=3)
diagrams['U9-MCQ-09'] = buildStandingWave({ type: 'closed-pipe', harmonic: 3 });

// ─── MOTION GRAPHS ────────────────────────────────────────────────────────────

// phys1_u1_q028 — position-time with negative slope (moving backward at constant speed)
diagrams['phys1_u1_q028'] = buildMotionGraph({
  type: 'position-time',
  segments: [{ x1: 0, y1: 10, x2: 5, y2: 0 }],
  xMax: 6,
  yMin: 0,
  yMax: 12,
});

// phys1_u1_q031 — velocity-time, positive slope (area = displacement)
diagrams['phys1_u1_q031'] = buildMotionGraph({
  type: 'velocity-time',
  segments: [{ x1: 0, y1: 0, x2: 5, y2: 10 }],
  xMax: 6,
  yMin: 0,
  yMax: 12,
});

// phys1_u1_q035 — v-t: horizontal at 8 m/s then decreasing to 0
diagrams['phys1_u1_q035'] = buildMotionGraph({
  type: 'velocity-time',
  segments: [
    { x1: 0, y1: 8, x2: 5, y2: 8 },
    { x1: 5, y1: 8, x2: 9, y2: 0 },
  ],
  xMax: 10,
  yMin: 0,
  yMax: 10,
  refLines: [
    { axis: 'x', value: 5, lbl: '5 s' },
    { axis: 'y', value: 8, lbl: '8 m/s' },
  ],
});

// phys1_u5_q199 — momentum-time linear increase (p goes from 10 to 50 kg·m/s)
diagrams['phys1_u5_q199'] = buildMotionGraph({
  type: 'momentum-time',
  segments: [{ x1: 0, y1: 10, x2: 4, y2: 50 }],
  xMax: 5,
  yMin: 0,
  yMax: 60,
  refLines: [
    { axis: 'y', value: 10, lbl: '10' },
    { axis: 'y', value: 50, lbl: '50' },
  ],
});

// ─── FREE BODY DIAGRAMS ───────────────────────────────────────────────────────

// aphy1_u2_q3 — block on horizontal, F_app right, friction left
diagrams['aphy1_u2_q3'] = buildFBD({
  surface: 'horizontal',
  forces: [
    { label: 'F_g',  angle: 270, magnitude: 1.0, color: C.gravity },
    { label: 'F_N',  angle: 90,  magnitude: 1.0, color: C.normal },
    { label: 'F_app', angle: 0,  magnitude: 0.8, color: C.applied },
    { label: 'f',    angle: 180, magnitude: 0.5, color: C.friction },
  ],
});

// aphy1_u2_q4 — block on 30° frictionless incline
diagrams['aphy1_u2_q4'] = buildFBD({
  surface: 'inclined',
  inclineAngle: 30,
  forces: [
    { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
    { label: 'F_N', angle: 120, magnitude: 0.9, color: C.normal },
  ],
});

// aphy1_u2_q6 — elevator accelerating up (cable T up, gravity down)
// Custom diagram: hanging mass with ceiling line, rope, and T/Fg arrows + "a↑" label
diagrams['aphy1_u2_q6'] = (() => {
  let body = '';
  // Ceiling line
  body += axisLine(100, 38, 210, 38);
  for (let hx = 108; hx <= 202; hx += 14) {
    body += axisLine(hx, 38, hx - 8, 30);
  }
  // Rope from ceiling down to box top
  body += axisLine(155, 38, 155, 96);
  // Object box
  body += objectBox(155, 125, 50, 36, '1000 kg');
  // Force arrows
  body += forceArrow(155, 125, 90,  1.2, C.tension, 'T');
  body += forceArrow(155, 125, 270, 1.0, C.gravity, 'F_g');
  // Acceleration annotation
  body += arrow(155, 222, 155, 198, C.applied, 2.5);
  body += label(162, 214, 'a', C.applied, 'start', 12, true);
  return svgOpen() + body + '</svg>';
})();

// aphy1_u2_q7 — two blocks on surface, string between, F applied to m2
// Custom: two boxes on ground, string line, F arrow
diagrams['aphy1_u2_q7'] = (() => {
  let body = '';
  // Ground surface
  body += groundSurface(40, 270, 185);
  // Box m1 at (87, 155) 44×30
  body += objectBox(87, 155, 44, 30, 'm₁');
  body += label(87, 175, '4 kg', null, 'middle', 10);
  // Box m2 at (162, 155) 44×30
  body += objectBox(162, 155, 44, 30, 'm₂');
  body += label(162, 175, '6 kg', null, 'middle', 10);
  // String between boxes (from right edge of m1 to left edge of m2)
  body += axisLine(109, 155, 140, 155);
  // F arrow rightward from right edge of m2
  body += arrow(184, 155, 230, 155, C.applied, 2.5);
  body += label(234, 159, 'F', C.applied, 'start', 13, true);
  return svgOpen() + body + '</svg>';
})();

// aphy1_u2_q9 — hanging 2kg mass in elevator decelerating downward
// Custom: ceiling line, rope, T up and Fg down
diagrams['aphy1_u2_q9'] = (() => {
  let body = '';
  // Ceiling line
  body += axisLine(100, 38, 210, 38);
  for (let hx = 108; hx <= 202; hx += 14) {
    body += axisLine(hx, 38, hx - 8, 30);
  }
  // Rope from ceiling to box top
  body += axisLine(155, 38, 155, 96);
  // Object box
  body += objectBox(155, 122, 46, 32, '2 kg');
  // Force arrows
  body += forceArrow(155, 122, 90,  0.7, C.tension, 'T');
  body += forceArrow(155, 122, 270, 1.0, C.gravity, 'F_g');
  return svgOpen() + body + '</svg>';
})();

// U2-MCQ-09 — block on rough incline, constant velocity (friction up slope)
diagrams['U2-MCQ-09'] = buildFBD({
  surface: 'inclined',
  inclineAngle: 30,
  forces: [
    { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
    { label: 'F_N', angle: 120, magnitude: 0.9, color: C.normal },
    { label: 'f_k', angle: 30,  magnitude: 0.5, color: C.friction },
  ],
});

// aphy1_u3_q2 — 50N force at 60° above horizontal on crate
diagrams['aphy1_u3_q2'] = buildFBD({
  surface: 'horizontal',
  forces: [
    { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
    { label: 'F_N', angle: 90,  magnitude: 1.0, color: C.normal },
    { label: 'F',   angle: 60,  magnitude: 0.8, color: C.applied },
    { label: 'f',   angle: 180, magnitude: 0.4, color: C.friction },
  ],
});

// phys1_u2_q061 — stacked books, system accelerating upward
// Custom: two stacked boxes, upward acceleration arrow, mass labels, ground
diagrams['phys1_u2_q061'] = (() => {
  let body = '';
  // Ground surface
  body += groundSurface(80, 230, 210);
  // Bottom box (5 kg) sitting on ground
  body += objectBox(155, 185, 70, 30, '5 kg');
  // Top box (10 kg) stacked on bottom
  body += objectBox(155, 152, 70, 30, '10 kg');
  // Upward acceleration arrow above top box
  body += arrow(155, 133, 155, 100, C.applied, 2.5);
  // Acceleration label
  body += label(162, 112, 'a = 5 m/s²', C.applied, 'start', 11, true);
  body += label(162, 126, '(upward)', C.applied, 'start', 10);
  return svgOpen() + body + '</svg>';
})();

// phys1_u2_q062 — Atwood machine 4kg and 6kg
diagrams['phys1_u2_q062'] = buildAtwood({
  m1Label: '4 kg',
  m2Label: '6 kg',
  m1Heavier: false,
  showAcceleration: true,
  showTension: true,
});

// phys1_u2_q067 — box on accelerating truck, static friction forward
diagrams['phys1_u2_q067'] = buildFBD({
  surface: 'horizontal',
  forces: [
    { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
    { label: 'F_N', angle: 90,  magnitude: 1.0, color: C.normal },
    { label: 'f_s', angle: 0,   magnitude: 0.6, color: C.friction },
  ],
});

// phys1_u2_q068 — person in elevator accelerating up (FN up, Fg down)
// Custom FBD with annotation for acceleration
diagrams['phys1_u2_q068'] = (() => {
  // Build standard horizontal FBD, then append annotation
  const baseSvg = buildFBD({
    surface: 'horizontal',
    objectLabel: '70 kg',
    forces: [
      { label: 'F_g', angle: 270, magnitude: 1.0, color: C.gravity },
      { label: 'F_N', angle: 90,  magnitude: 1.2, color: C.normal },
    ],
  });
  // Inject annotation before closing </svg>
  const annotation =
    label(155, 245, 'a = 2 m/s² (upward)', C.applied, 'middle', 11, true);
  return baseSvg.replace('</svg>', annotation + '</svg>');
})();

// ─── VALIDATE + OUTPUT ────────────────────────────────────────────────────────

const TYPE_MAP = {
  'aphy1_u8_q2':   'circuit',
  'aphy1_u8_q3':   'circuit',
  'aphy1_u8_q5':   'circuit',
  'aphy1_u8_q8':   'circuit',
  'aphy1_u8_q9':   'circuit',
  'aphy1_u8_q10':  'circuit',
  'U8-MCQ-04':     'circuit',
  'U8-MCQ-05':     'circuit',
  'U8-MCQ-09':     'circuit',

  'aphy1_u9_q3':   'standing-wave',
  'aphy1_u9_q4':   'standing-wave',
  'aphy1_u9_q8':   'standing-wave',
  'U9-MCQ-03':     'standing-wave',
  'U9-MCQ-07':     'standing-wave',
  'U9-MCQ-09':     'standing-wave',

  'phys1_u1_q028': 'motion-graph',
  'phys1_u1_q031': 'motion-graph',
  'phys1_u1_q035': 'motion-graph',
  'phys1_u5_q199': 'motion-graph',

  'aphy1_u2_q3':   'fbd',
  'aphy1_u2_q4':   'fbd',
  'aphy1_u2_q6':   'fbd',
  'aphy1_u2_q7':   'fbd',
  'aphy1_u2_q9':   'fbd',
  'U2-MCQ-09':     'fbd',
  'aphy1_u3_q2':   'fbd',
  'phys1_u2_q061': 'pendulum',   // custom stacked-boxes: no force arrows as SVG polygons
  'phys1_u2_q062': 'atwood',
  'phys1_u2_q067': 'fbd',
  'phys1_u2_q068': 'fbd',
};

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
  __dirname + '/phys1-phase2.json',
  JSON.stringify(output, null, 2),
);

console.log(`\n${Object.keys(output).length}/${Object.keys(diagrams).length} passed`);
if (!allPassed) process.exit(1);
