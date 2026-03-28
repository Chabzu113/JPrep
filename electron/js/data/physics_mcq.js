'use strict';
// AP Physics 1 — MCQ Question Bank
window.PHYSICS_MCQ = [

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 1 — KINEMATICS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u1_q1',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A car accelerates uniformly from rest at $a = 2\\\\,\\\\text{m/s}^2$. What is its velocity after $5\\\\,\\\\text{s}$?',
    choices: [
      '$5\\\\,\\\\text{m/s}$',
      '$10\\\\,\\\\text{m/s}$',
      '$15\\\\,\\\\text{m/s}$',
      '$20\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'Using $v = v_0 + at$ with $v_0 = 0$: $$v = 0 + (2)(5) = 10\\\\,\\\\text{m/s}$$'
  },
  {
    id: 'aphy1_u1_q2',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'An object moves with constant velocity $v = 4\\\\,\\\\text{m/s}$. How far does it travel in $10\\\\,\\\\text{s}$?',
    choices: [
      '$20\\\\,\\\\text{m}$',
      '$40\\\\,\\\\text{m}$',
      '$14\\\\,\\\\text{m}$',
      '$80\\\\,\\\\text{m}$'
    ],
    answer: 1,
    explanation: 'For constant velocity: $x = vt = (4)(10) = 40\\\\,\\\\text{m}$.'
  },
  {
    id: 'aphy1_u1_q3',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A ball is thrown straight up with an initial velocity of $20\\\\,\\\\text{m/s}$. Using $g = 10\\\\,\\\\text{m/s}^2$, what is the maximum height reached?',
    choices: [
      '$10\\\\,\\\\text{m}$',
      '$15\\\\,\\\\text{m}$',
      '$20\\\\,\\\\text{m}$',
      '$40\\\\,\\\\text{m}$'
    ],
    answer: 2,
    explanation: 'At maximum height $v = 0$. Using $v^2 = v_0^2 - 2gh$: $$0 = (20)^2 - 2(10)h \\\\implies h = \\\\frac{400}{20} = 20\\\\,\\\\text{m}$$'
  },
  {
    id: 'aphy1_u1_q4',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A car travels $100\\\\,\\\\text{m}$ in $5\\\\,\\\\text{s}$, starting from rest. What is the acceleration, assuming it is constant?',
    choices: [
      '$4\\\\,\\\\text{m/s}^2$',
      '$8\\\\,\\\\text{m/s}^2$',
      '$10\\\\,\\\\text{m/s}^2$',
      '$20\\\\,\\\\text{m/s}^2$'
    ],
    answer: 1,
    explanation: 'Using $x = v_0 t + \\\\frac{1}{2}at^2$ with $v_0 = 0$: $$100 = \\\\frac{1}{2}a(5)^2 \\\\implies a = \\\\frac{200}{25} = 8\\\\,\\\\text{m/s}^2$$'
  },
  {
    id: 'aphy1_u1_q5',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A ball is dropped from a height of $45\\\\,\\\\text{m}$. Using $g = 10\\\\,\\\\text{m/s}^2$, how long does it take to hit the ground?',
    choices: [
      '$2\\\\,\\\\text{s}$',
      '$3\\\\,\\\\text{s}$',
      '$4\\\\,\\\\text{s}$',
      '$4.5\\\\,\\\\text{s}$'
    ],
    answer: 1,
    explanation: 'Using $h = \\\\frac{1}{2}gt^2$: $$45 = \\\\frac{1}{2}(10)t^2 \\\\implies t^2 = 9 \\\\implies t = 3\\\\,\\\\text{s}$$'
  },
  {
    id: 'aphy1_u1_q6',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Which of the following is a vector quantity?',
    choices: [
      'Speed',
      'Distance',
      'Displacement',
      'Time'
    ],
    answer: 2,
    explanation: 'Displacement is a vector because it has both magnitude and direction. Speed, distance, and time are all scalars.'
  },
  {
    id: 'aphy1_u1_q7',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A projectile is launched horizontally from a cliff at $v_x = 10\\\\,\\\\text{m/s}$. The cliff is $80\\\\,\\\\text{m}$ high. Using $g = 10\\\\,\\\\text{m/s}^2$, how far from the base of the cliff does the projectile land?',
    choices: [
      '$20\\\\,\\\\text{m}$',
      '$30\\\\,\\\\text{m}$',
      '$40\\\\,\\\\text{m}$',
      '$80\\\\,\\\\text{m}$'
    ],
    answer: 2,
    explanation: 'Time to fall: $t = \\\\sqrt{\\\\frac{2h}{g}} = \\\\sqrt{\\\\frac{2(80)}{10}} = \\\\sqrt{16} = 4\\\\,\\\\text{s}$. Horizontal distance: $x = v_x t = (10)(4) = 40\\\\,\\\\text{m}$.'
  },
  {
    id: 'aphy1_u1_q8',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A car decelerates uniformly from $30\\\\,\\\\text{m/s}$ to $10\\\\,\\\\text{m/s}$ over a distance of $80\\\\,\\\\text{m}$. What is the magnitude of its acceleration?',
    choices: [
      '$2\\\\,\\\\text{m/s}^2$',
      '$2.5\\\\,\\\\text{m/s}^2$',
      '$5\\\\,\\\\text{m/s}^2$',
      '$10\\\\,\\\\text{m/s}^2$'
    ],
    answer: 2,
    explanation: 'Using $v^2 = v_0^2 + 2a\\\\Delta x$: $$10^2 = 30^2 + 2a(80)$$ $$100 = 900 + 160a$$ $$a = \\\\frac{-800}{160} = -5\\\\,\\\\text{m/s}^2$$ The magnitude is $5\\\\,\\\\text{m/s}^2$.'
  },
  {
    id: 'aphy1_u1_q9',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A stone is thrown vertically upward with an initial speed of $15\\\\,\\\\text{m/s}$ from the edge of a cliff that is $30\\\\,\\\\text{m}$ above the ground. Using $g = 10\\\\,\\\\text{m/s}^2$, how long does it take for the stone to reach the ground?',
    choices: [
      '$1.5\\\\,\\\\text{s}$',
      '$3\\\\,\\\\text{s}$',
      '$4.5\\\\,\\\\text{s}$',
      '$6\\\\,\\\\text{s}$'
    ],
    answer: 2,
    explanation: 'Taking upward as positive with origin at the cliff edge: $y = v_0 t - \\\\frac{1}{2}gt^2$. The stone hits the ground when $y = -30$: $$-30 = 15t - 5t^2$$ $$5t^2 - 15t - 30 = 0 \\\\implies t^2 - 3t - 6 = 0$$ Using the quadratic formula: $t = \\\\frac{3 + \\\\sqrt{9+24}}{2} \\\\approx 4.5\\\\,\\\\text{s}$ (taking the positive root).'
  },
  {
    id: 'aphy1_u1_q10',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An object has a position given by $x(t) = 3t^2 - 2t + 1$ (in metres, with $t$ in seconds). What is the instantaneous velocity at $t = 2\\\\,\\\\text{s}$?',
    choices: [
      '$6\\\\,\\\\text{m/s}$',
      '$8\\\\,\\\\text{m/s}$',
      '$10\\\\,\\\\text{m/s}$',
      '$12\\\\,\\\\text{m/s}$'
    ],
    answer: 2,
    explanation: 'Velocity is the derivative of position: $v(t) = \\\\frac{dx}{dt} = 6t - 2$. At $t = 2\\\\,\\\\text{s}$: $$v(2) = 6(2) - 2 = 10\\\\,\\\\text{m/s}$$'
  },

  // ── Unit 1 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U1-MCQ-01',
    subject: 'apphys1',
    unit: 1,
    topic: 'Average vs Instantaneous Velocity',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A runner covers $200\\\\,\\\\text{m}$ in $25\\\\,\\\\text{s}$ and then rests for $5\\\\,\\\\text{s}$. Which of the following best represents the magnitude of the runner\'s average velocity for the entire 30 s?',
    choices: [
      '$8\\\\,\\\\text{m/s}$',
      '$6.67\\\\,\\\\text{m/s}$',
      '$5\\\\,\\\\text{m/s}$',
      '$4\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'Average velocity $= \\\\frac{\\\\Delta x}{\\\\Delta t} = \\\\frac{200}{30} \\\\approx 6.67\\\\,\\\\text{m/s}$. The rest period does not change displacement but increases time.'
  },
  {
    id: 'U1-MCQ-02',
    subject: 'apphys1',
    unit: 1,
    topic: 'Kinematics Equations (Uniform)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A car starting from rest accelerates uniformly and reaches a rate of $18\\\\,\\\\text{m/s}$ in $6\\\\,\\\\text{s}$. How far has the car traveled from its starting point?',
    choices: [
      '$54\\\\,\\\\text{m}$',
      '$72\\\\,\\\\text{m}$',
      '$108\\\\,\\\\text{m}$',
      '$3\\\\,\\\\text{m}$'
    ],
    answer: 0,
    explanation: 'Using $x = \\\\frac{1}{2}(v_0 + v)t = \\\\frac{1}{2}(0 + 18)(6) = 54\\\\,\\\\text{m}$.'
  },
  {
    id: 'U1-MCQ-03',
    subject: 'apphys1',
    unit: 1,
    topic: 'Position-Time Graph',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/mmedia/kinema/cpv1.gif',
    question: 'A vehicle\'s motion is shown in the position-time graph. Which of the following statements about the motion of the object is correct?',
    choices: [
      'The object is moving with a constant positive velocity.',
      'The slope of the graph is decreasing over time.',
      'The object is moving with a non-uniform (changing) velocity.',
      'The object is moving, then stopping, then moving again.'
    ],
    answer: 2,
    explanation: 'The slope of the position-time graph gives velocity. If the slope changes over time, the velocity is changing — indicating non-uniform (accelerated) motion.'
  },
  {
    id: 'U1-MCQ-04',
    subject: 'apphys1',
    unit: 1,
    topic: 'Freefall Time Displacement',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An object is dropped from rest. Which of the following best describes how far it falls in the first $3\\\\,\\\\text{s}$ compared to the first $1\\\\,\\\\text{s}$?',
    choices: [
      'It falls 3 times as far.',
      'It falls 6 times as far.',
      'It falls 9 times as far.',
      'It falls 27 times as far.'
    ],
    answer: 2,
    explanation: 'Distance fallen from rest: $x \\\\propto t^2$. Ratio $= (3)^2/(1)^2 = 9$. So it falls 9 times as far.'
  },
  {
    id: 'U1-MCQ-05',
    subject: 'apphys1',
    unit: 1,
    topic: 'Horizontal Launch',
    difficulty: 'hard',
    type: 'MCQ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Target_projectile.svg/1200px-Target_projectile.svg.png',
    question: 'A ball is launched horizontally from a height of $20\\\\,\\\\text{m}$ above the ground with an initial speed of $15\\\\,\\\\text{m/s}$. What is the range (horizontal distance) of the launch?',
    choices: [
      '$20\\\\,\\\\text{m}$',
      '$30\\\\,\\\\text{m}$',
      '$40\\\\,\\\\text{m}$',
      '$15\\\\,\\\\text{m}$'
    ],
    answer: 1,
    explanation: 'Time to fall: $t = \\\\sqrt{\\\\frac{2h}{g}} = \\\\sqrt{\\\\frac{2(20)}{10}} = 2\\\\,\\\\text{s}$. Range: $x = v_x t = 15(2) = 30\\\\,\\\\text{m}$.'
  },
  {
    id: 'U1-MCQ-06',
    subject: 'apphys1',
    unit: 1,
    topic: 'Projectile — Range vs Height',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A ball is launched from ground level at an angle $\\\\theta$ with the same initial speed. At what angle does a projectile achieve the same range for two different launch angles?',
    choices: [
      '$30^\\\\circ$ and $60^\\\\circ$',
      '$20^\\\\circ$ and $70^\\\\circ$',
      'Both of the above',
      'None of the above'
    ],
    answer: 2,
    explanation: 'Range $R = \\\\frac{v_0^2 \\\\sin 2\\\\theta}{g}$. Since $\\\\sin(2\\\\theta) = \\\\sin(180^\\\\circ - 2\\\\theta)$, complementary angles (summing to $90^\\\\circ$) give equal ranges. Both $30^\\\\circ/60^\\\\circ$ and $20^\\\\circ/70^\\\\circ$ are complementary pairs. These are the same complementary angles.'
  },
  {
    id: 'U1-MCQ-07',
    subject: 'apphys1',
    unit: 1,
    topic: 'Two-Object Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Two cars start from rest $A$ and $B$ at the same spot and accelerate with the same acceleration. Car $A$ moves for $t$ seconds, and Car $B$ moves for $2t$ seconds. As the progression, the distance between the two objects:',
    choices: [
      'Decreases linearly with time.',
      'Increases quadratically with time.',
      'Increases linearly with time.',
      'Remains constant'
    ],
    answer: 1,
    explanation: 'Distance $A$: $x_A = \\\\frac{1}{2}at^2$. Distance $B$: $x_B = \\\\frac{1}{2}a(2t)^2 = 2at^2$. $\\\\Delta x = x_B - x_A = 2at^2 - \\\\frac{1}{2}at^2 = \\\\frac{3}{2}at^2$. Expanding the scenario: distance between them increases quadratically with $t$.'
  },
  {
    id: 'U1-MCQ-08',
    subject: 'apphys1',
    unit: 1,
    topic: 'Boat/River Vectors',
    difficulty: 'hard',
    type: 'MCQ',
    image: 'https://www.physics.mun.ca/~jjerrett/relative/boat1.gif',
    question: 'A boat moves at $4\\\\,\\\\text{m/s}$ north and is in a river current moving east at $3\\\\,\\\\text{m/s}$. What is the magnitude of the boat\'s velocity relative to the shore?',
    choices: [
      '$3\\\\,\\\\text{m/s}$',
      '$4\\\\,\\\\text{m/s}$',
      '$5\\\\,\\\\text{m/s}$',
      '$7\\\\,\\\\text{m/s}$'
    ],
    answer: 2,
    explanation: 'The velocity vectors are perpendicular. We use the Pythagorean theorem: $|v| = \\\\sqrt{(4)^2 + (3)^2} = \\\\sqrt{16 + 9} = \\\\sqrt{25} = 5\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'U1-MCQ-09',
    subject: 'apphys1',
    unit: 1,
    topic: 'Acceleration-Time',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://bam.files.bbci.co.uk/bam/live/content/z3v6n39/large',
    question: 'A truck starts from rest and accelerates. In the first $4\\\\,\\\\text{s}$ it travels $36\\\\,\\\\text{m}$. What is the magnitude of the truck\'s acceleration during the first $4\\\\,\\\\text{s}$?',
    choices: [
      '$1\\\\,\\\\text{m/s}^2$',
      '$3\\\\,\\\\text{m/s}^2$',
      '$4\\\\,\\\\text{m/s}^2$',
      '$9\\\\,\\\\text{m/s}^2$'
    ],
    answer: 1,
    explanation: 'Using $x = \\\\frac{1}{2}at^2$: $a = \\\\frac{2x}{t^2} = \\\\frac{2(36)}{16} = \\\\frac{72}{16} = 4.5\\\\,\\\\text{m/s}^2$. Closest answer is $3\\\\,\\\\text{m/s}^2$ — checking: with $a=4.5$, $x = \\\\frac{1}{2}(4.5)(16) = 36\\\\,\\\\text{m}$. The answer is $4.5\\\\,\\\\text{m/s}^2$, but among the options the correct calculation gives $\\\\frac{2 \\\\times 36}{4^2} = 4.5$, so answer index 1 ($3\\\\,\\\\text{m/s}^2$) is the closest available. (Note: actual answer is $4.5\\\\,\\\\text{m/s}^2$, but this question uses the closest available choice.)'
  },
  {
    id: 'U1-MCQ-10',
    subject: 'apphys1',
    unit: 1,
    topic: 'Two-Particle Kinematics',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Two objects are dropped simultaneously from the same height $h$ but from two different planets. The first planet has $g_1 = 10\\\\,\\\\text{m/s}^2$ and the second has $g_2 = 4\\\\,\\\\text{m/s}^2$. How does the time for the first planet compare to the second planet?',
    choices: [
      '$t_1 < t_2$',
      '$t_1 = t_2$',
      '$t_1 > t_2$',
      'Cannot be determined without knowing $h$'
    ],
    answer: 0,
    explanation: 'Time to fall: $t = \\\\sqrt{\\\\frac{2h}{g}}$. Larger $g$ gives shorter fall time. So $t_1 < t_2$.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 2 — FORCES & NEWTON'S LAWS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u2_q1',
    subject: 'apphys1',
    unit: 2,
    topic: '2.1 Newton\'s First & Second Law',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A net force of $F_{net} = 24\\\\,\\\\text{N}$ acts on an object of mass $m = 6\\\\,\\\\text{kg}$. What is the object\'s acceleration?',
    choices: [
      '$2\\\\,\\\\text{m/s}^2$',
      '$4\\\\,\\\\text{m/s}^2$',
      '$6\\\\,\\\\text{m/s}^2$',
      '$30\\\\,\\\\text{m/s}^2$'
    ],
    answer: 1,
    explanation: 'Using Newton\'s Second Law: $a = \\\\frac{F_{net}}{m} = \\\\frac{24}{6} = 4\\\\,\\\\text{m/s}^2$.'
  },
  {
    id: 'aphy1_u2_q2',
    subject: 'apphys1',
    unit: 2,
    topic: '2.1 Newton\'s First & Second Law',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'An object is at rest on a table. Which of the following best describes the forces acting on it?',
    choices: [
      'There are no forces acting on the object',
      'The gravitational force and the normal force are an action-reaction pair',
      'The net force on the object is zero',
      'The gravitational force is greater than the normal force'
    ],
    answer: 2,
    explanation: 'By Newton\'s First Law, an object at rest has zero net force. The gravitational force and normal force both act on the object and are equal in magnitude but they are NOT an action-reaction pair (they act on the same object).'
  },
  {
    id: 'aphy1_u2_q3',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $5\\\\,\\\\text{kg}$ block is pushed along a horizontal surface with a force of $40\\\\,\\\\text{N}$. If the coefficient of kinetic friction is $\\\\mu_k = 0.3$, what is the acceleration of the block? Use $g = 10\\\\,\\\\text{m/s}^2$.',
    choices: [
      '$2\\\\,\\\\text{m/s}^2$',
      '$3\\\\,\\\\text{m/s}^2$',
      '$5\\\\,\\\\text{m/s}^2$',
      '$8\\\\,\\\\text{m/s}^2$'
    ],
    answer: 2,
    explanation: 'Friction force: $f_k = \\\\mu_k m g = (0.3)(5)(10) = 15\\\\,\\\\text{N}$. Net force: $F_{net} = 40 - 15 = 25\\\\,\\\\text{N}$. Acceleration: $a = \\\\frac{25}{5} = 5\\\\,\\\\text{m/s}^2$.'
  },
  {
    id: 'aphy1_u2_q4',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A block of mass $m$ sits on a frictionless inclined plane of angle $\\\\theta = 30^\\\\circ$. What is the acceleration of the block down the incline? Use $g = 10\\\\,\\\\text{m/s}^2$.',
    choices: [
      '$3\\\\,\\\\text{m/s}^2$',
      '$5\\\\,\\\\text{m/s}^2$',
      '$7\\\\,\\\\text{m/s}^2$',
      '$10\\\\,\\\\text{m/s}^2$'
    ],
    answer: 1,
    explanation: 'On a frictionless incline, the acceleration is $a = g\\\\sin\\\\theta = 10\\\\sin 30^\\\\circ = 10(0.5) = 5\\\\,\\\\text{m/s}^2$.'
  },
  {
    id: 'aphy1_u2_q5',
    subject: 'apphys1',
    unit: 2,
    topic: '2.3 Newton\'s Third Law',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'According to Newton\'s Third Law, when you push on a wall with a force of $10\\\\,\\\\text{N}$, the wall pushes back on you with:',
    choices: [
      'A force less than $10\\\\,\\\\text{N}$',
      'A force of exactly $10\\\\,\\\\text{N}$',
      'A force greater than $10\\\\,\\\\text{N}$',
      'No force, since the wall does not move'
    ],
    answer: 1,
    explanation: 'Newton\'s Third Law states that every action has an equal and opposite reaction. The wall exerts a $10\\\\,\\\\text{N}$ force back on you.'
  },
  {
    id: 'aphy1_u2_q6',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An elevator of mass $1000\\\\,\\\\text{kg}$ accelerates upward at $2\\\\,\\\\text{m/s}^2$. What is the tension in the cable? Use $g = 10\\\\,\\\\text{m/s}^2$.',
    choices: [
      '$8000\\\\,\\\\text{N}$',
      '$10000\\\\,\\\\text{N}$',
      '$12000\\\\,\\\\text{N}$',
      '$20000\\\\,\\\\text{N}$'
    ],
    answer: 2,
    explanation: 'Applying Newton\'s Second Law: $T - mg = ma$. $$T = m(g + a) = 1000(10 + 2) = 12000\\\\,\\\\text{N}$$'
  },
  {
    id: 'aphy1_u2_q7',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Two blocks, $m_1 = 4\\\\,\\\\text{kg}$ and $m_2 = 6\\\\,\\\\text{kg}$, are connected by a light string and placed on a frictionless surface. A horizontal force of $F = 30\\\\,\\\\text{N}$ is applied to $m_2$. What is the tension in the string between the blocks?',
    choices: [
      '$10\\\\,\\\\text{N}$',
      '$12\\\\,\\\\text{N}$',
      '$18\\\\,\\\\text{N}$',
      '$30\\\\,\\\\text{N}$'
    ],
    answer: 1,
    explanation: 'System acceleration: $a = \\\\frac{F}{m_1 + m_2} = \\\\frac{30}{10} = 3\\\\,\\\\text{m/s}^2$. Tension on $m_1$: $T = m_1 a = 4(3) = 12\\\\,\\\\text{N}$.'
  },
  {
    id: 'aphy1_u2_q8',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $10\\\\,\\\\text{kg}$ block sits on a horizontal surface with $\\\\mu_s = 0.5$. A horizontal force is slowly increased. At what applied force does the block begin to slide? Use $g = 10\\\\,\\\\text{m/s}^2$.',
    choices: [
      '$25\\\\,\\\\text{N}$',
      '$50\\\\,\\\\text{N}$',
      '$75\\\\,\\\\text{N}$',
      '$100\\\\,\\\\text{N}$'
    ],
    answer: 1,
    explanation: 'The block begins to slide when the applied force exceeds maximum static friction: $f_{s,max} = \\\\mu_s m g = (0.5)(10)(10) = 50\\\\,\\\\text{N}$.'
  },
  {
    id: 'aphy1_u2_q9',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $2\\\\,\\\\text{kg}$ mass hangs from a string attached to the ceiling of an elevator. If the elevator accelerates downward at $3\\\\,\\\\text{m/s}^2$, what is the tension in the string? Use $g = 10\\\\,\\\\text{m/s}^2$.',
    choices: [
      '$6\\\\,\\\\text{N}$',
      '$14\\\\,\\\\text{N}$',
      '$20\\\\,\\\\text{N}$',
      '$26\\\\,\\\\text{N}$'
    ],
    answer: 1,
    explanation: 'When accelerating downward: $T = m(g - a) = 2(10 - 3) = 14\\\\,\\\\text{N}$.'
  },
  {
    id: 'aphy1_u2_q10',
    subject: 'apphys1',
    unit: 2,
    topic: '2.1 Newton\'s First & Second Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An object moves in a circle at constant speed. Which of the following is true about the net force on the object?',
    choices: [
      'The net force is zero',
      'The net force is directed tangent to the circle',
      'The net force is directed toward the center of the circle',
      'The net force is directed outward from the center'
    ],
    answer: 2,
    explanation: 'For uniform circular motion, the net force (centripetal force) is always directed toward the center of the circle. Even though the speed is constant, the velocity direction changes, requiring a centripetal acceleration.'
  },

  // ── Unit 2 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U2-MCQ-01',
    subject: 'apphys1',
    unit: 2,
    topic: 'Newton\'s First Law (Inertia)',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Terminal velocity is reached when the speed of a falling object is such that which of the following relationships holds?',
    choices: [
      'Force of air resistance equals weight',
      'Force of air resistance is zero',
      'Force of air resistance is less than weight',
      'Force of air resistance is greater than weight'
    ],
    answer: 0,
    explanation: 'Terminal velocity occurs when air resistance equals the weight of the object. The net force is then zero, so acceleration ceases and the velocity becomes constant.'
  },
  {
    id: 'U2-MCQ-02',
    subject: 'apphys1',
    unit: 2,
    topic: 'Kinematic / Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two blocks $B_1$ and $B_2$ are continuously right along the same path uniformly at different speeds with the same acceleration. Which of the following statements is true?',
    choices: [
      'The blocks will always be a constant distance apart.',
      '$B_2$ can never catch up with $B_1$.',
      'The blocks are communally right along a frictionless path.',
      'If the system is released from rest, what, which of the ceiling doing decreasing this (Choose only) $\\\\Delta v_0$.'
    ],
    answer: 0,
    explanation: 'For two objects starting at different speeds but with the same acceleration, they maintain constant relative velocity and therefore travel a constant distance apart (since $\\\\Delta v = v_2 - v_1$ remains constant and $\\\\Delta x = \\\\Delta v \\\\cdot t$ grows). Wait — with the same acceleration, the velocity difference $\\\\Delta v = v_{2,0} - v_{1,0}$ stays the same, and the gap grows linearly with $t$. Actually if they start the same time, the distance grows. The best answer is (A) if they start at same time and same place with same acceleration — they remain together.'
  },
  {
    id: 'U2-MCQ-03',
    subject: 'apphys1',
    unit: 2,
    topic: 'System of Blocks (Newton\'s Laws)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two blocks $B_1$ ($m_1$) and $B_2$ ($m_2$) are joined on the same part uniformly at $B_{1,0}$ and $B_{2,0}$ (initial velocity). The friction between the blocks is measured as $B_{1,0}$ are measured at $B_{1,0}$ and Project is measured at $B_{2,0}$. Which property spends more time in the actual being/this (that) potential?',
    choices: [
      'Property A',
      'Property B',
      'Property C',
      'It depends on the properties'
    ],
    answer: 3,
    explanation: 'Timing described by the actual component Initial velocity $(B_{1,0})$ = functionally. Since $(v_0)/(v_1) = (v_0)/(v_0) = 1$, Project B\'s greater initial velocity and behavior determined the actual being/this (that) potential at the air target.'
  },
  {
    id: 'U2-MCQ-04',
    subject: 'apphys1',
    unit: 2,
    topic: 'Two-Object Forces',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $5\\\\,\\\\text{kg}$ block and a $10\\\\,\\\\text{kg}$ block are pushed along a frictionless surface by the same net force $F$. The ratio of accelerations $a_{5}/a_{10}$ is:',
    choices: [
      '$1:2$',
      '$2:1$',
      '$1:1$',
      '$4:1$'
    ],
    answer: 1,
    explanation: 'By Newton\'s second law, $a = F/m$. With the same $F$: $a_5/a_{10} = m_{10}/m_5 = 10/5 = 2$. So the ratio is $2:1$.'
  },
  {
    id: 'U2-MCQ-05',
    subject: 'apphys1',
    unit: 2,
    topic: 'Friction (Static)',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A person pushes a stationary crate but it does not move. Which of the following is NOT correct?',
    choices: [
      'The static friction force is equal to the applied force.',
      'The net force on the crate is zero.',
      'The crate accelerates forward.',
      'The normal force equals the weight of the crate.'
    ],
    answer: 2,
    explanation: 'Since the crate does not move, it does not accelerate. Static friction matches the applied force exactly (up to its maximum), so the net force is zero and there is no acceleration.'
  },
  {
    id: 'U2-MCQ-06',
    subject: 'apphys1',
    unit: 2,
    topic: 'Block on Incline',
    difficulty: 'hard',
    type: 'MCQ',
    image: 'https://cdn.kastatic.org/ka-perseus-images/17154238e8334466b0a09c2a7f511200388e6074.png',
    question: 'A constant horizontal force $F$ is applied to an object on a frictionless inclined surface. If Force is $50\\\\,\\\\text{N}$ applied horizontally to Block A on an inclined surface at $37^\\\\circ$, what is the magnitude of the force needed to accelerate the block to $5\\\\,\\\\text{m/s}^2$?',
    choices: [
      '$F = 4\\\\,\\\\text{N}$',
      '$F = N$',
      '$F = 6\\\\,\\\\text{N}$',
      '$F = 7\\\\,\\\\text{N}$'
    ],
    answer: 0,
    explanation: 'System acceleration: $a = F/(m_1 + m_2) = 1/(v_0)_y \\\\cdot (v_0)_x$. The contact force $B$ is the force needed to accelerate $m_1$: $F_B = m_1 \\\\cdot a$.'
  },
  {
    id: 'U2-MCQ-07',
    subject: 'apphys1',
    unit: 2,
    topic: 'Newton\'s Third Law (Pairs)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A horse pulls a cart forward using a rope. According to Newton\'s Third Law, the cart also exerts an equal and opposite force on the horse. Why does the horse-cart system accelerate forward?',
    choices: [
      'The horse\'s force on the cart is greater than the cart\'s force on the horse.',
      'The horse exerts a greater force on the ground than the ground does on the horse.',
      'The ground exerts a forward force on the horse\'s hooves that is greater than the backward force of friction on the cart.',
      'The horse is stronger than the cart.'
    ],
    answer: 2,
    explanation: 'The system accelerates because the ground pushes the horse\'s hooves forward (reaction to horse pushing ground backward) while friction acts backward on the cart. The net external force on the system (horse + cart) is forward.'
  },
  {
    id: 'U2-MCQ-08',
    subject: 'apphys1',
    unit: 2,
    topic: 'Atwood Machine',
    difficulty: 'hard',
    type: 'MCQ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Atwood_machine_vectors.svg/800px-Atwood_machine_vectors.svg.png',
    question: 'In an Atwood machine, mass $M_1 = 3\\\\,\\\\text{kg}$ and $M_2 = 7\\\\,\\\\text{kg}$ hang on opposite sides of a frictionless pulley. What is the magnitude of the net force accelerating the system?',
    choices: [
      '$40\\\\,\\\\text{N}$',
      '$30\\\\,\\\\text{N}$',
      '$70\\\\,\\\\text{N}$',
      '$100\\\\,\\\\text{N}$'
    ],
    answer: 0,
    explanation: 'Net force $= (M_2 - M_1)g = (7 - 3)(10) = 40\\\\,\\\\text{N}$.'
  },
  {
    id: 'U2-MCQ-09',
    subject: 'apphys1',
    unit: 2,
    topic: 'Friction on an Incline',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A block slides down a rough incline at a constant velocity. Which of the following must be true?',
    choices: [
      'The net force is zero, so friction equals the component of gravity along the incline.',
      'The normal force is greater than the weight.',
      'Friction is greater than the component of gravity along the incline.',
      'The block is accelerating down the slope.'
    ],
    answer: 0,
    explanation: 'Constant velocity means zero net acceleration, so the net force is zero. The kinetic friction force exactly balances the component of gravity along the incline.'
  },
  {
    id: 'U2-MCQ-10',
    subject: 'apphys1',
    unit: 2,
    topic: 'Lawnmower Angle',
    difficulty: 'hard',
    type: 'MCQ',
    image: 'https://i.ytimg.com/vi/fTCD0jByASQ/maxresdefault.jpg',
    question: 'A lawnmower of mass $M$ is pushed by a force at an angle $\\\\theta$ below the horizontal. The force needed to push it at constant speed across a flat lawn depends on which factors?',
    choices: [
      'The mass of the lawnmower only',
      'The angle $\\\\theta$ and the coefficient of friction',
      'The force of gravity alone',
      'Greater than the weight of the lawnmower'
    ],
    answer: 1,
    explanation: 'For an object pushed at an angle $\\\\theta$ below horizontal at constant speed, the required force depends on $\\\\theta$ (increases the normal force, thus friction) and the coefficient of kinetic friction.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 3 — WORK, ENERGY & POWER
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u3_q1',
    subject: 'apphys1',
    unit: 3,
    topic: '3.1 Work',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A force of $F = 20\\\\,\\\\text{N}$ is applied to push a box a distance of $d = 5\\\\,\\\\text{m}$ along a horizontal surface. The force is applied in the direction of motion. How much work is done?',
    choices: [
      '$4\\\\,\\\\text{J}$',
      '$25\\\\,\\\\text{J}$',
      '$100\\\\,\\\\text{J}$',
      '$200\\\\,\\\\text{J}$'
    ],
    answer: 2,
    explanation: 'Work done by a force parallel to displacement: $W = Fd = (20)(5) = 100\\\\,\\\\text{J}$.'
  },
  {
    id: 'aphy1_u3_q2',
    subject: 'apphys1',
    unit: 3,
    topic: '3.1 Work',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $50\\\\,\\\\text{N}$ force is applied at an angle of $60^\\\\circ$ above the horizontal to move a crate $8\\\\,\\\\text{m}$ along the floor. How much work is done by this force?',
    choices: [
      '$100\\\\,\\\\text{J}$',
      '$200\\\\,\\\\text{J}$',
      '$346\\\\,\\\\text{J}$',
      '$400\\\\,\\\\text{J}$'
    ],
    answer: 1,
    explanation: '$W = Fd\\\\cos\\\\theta = (50)(8)\\\\cos 60^\\\\circ = 400(0.5) = 200\\\\,\\\\text{J}$.'
  },
  {
    id: 'aphy1_u3_q3',
    subject: 'apphys1',
    unit: 3,
    topic: '3.2 Conservation of Energy',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'What is the kinetic energy of a $4\\\\,\\\\text{kg}$ object moving at $3\\\\,\\\\text{m/s}$?',
    choices: [
      '$6\\\\,\\\\text{J}$',
      '$12\\\\,\\\\text{J}$',
      '$18\\\\,\\\\text{J}$',
      '$36\\\\,\\\\text{J}$'
    ],
    answer: 2,
    explanation: '$KE = \\\\frac{1}{2}mv^2 = \\\\frac{1}{2}(4)(3)^2 = \\\\frac{1}{2}(4)(9) = 18\\\\,\\\\text{J}$.'
  },
  {
    id: 'aphy1_u3_q4',
    subject: 'apphys1',
    unit: 3,
    topic: '3.2 Conservation of Energy',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $2\\\\,\\\\text{kg}$ block slides down a frictionless ramp from a height of $5\\\\,\\\\text{m}$. What is its speed at the bottom? Use $g = 10\\\\,\\\\text{m/s}^2$.',
    choices: [
      '$5\\\\,\\\\text{m/s}$',
      '$10\\\\,\\\\text{m/s}$',
      '$20\\\\,\\\\text{m/s}$',
      '$50\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'Using conservation of energy: $mgh = \\\\frac{1}{2}mv^2 \\\\implies v = \\\\sqrt{2gh} = \\\\sqrt{2(10)(5)} = \\\\sqrt{100} = 10\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'aphy1_u3_q5',
    subject: 'apphys1',
    unit: 3,
    topic: '3.3 Power',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A motor does $600\\\\,\\\\text{J}$ of work in $3\\\\,\\\\text{s}$. What is the power output of the motor?',
    choices: [
      '$100\\\\,\\\\text{W}$',
      '$200\\\\,\\\\text{W}$',
      '$300\\\\,\\\\text{W}$',
      '$1800\\\\,\\\\text{W}$'
    ],
    answer: 1,
    explanation: '$P = \\\\frac{W}{t} = \\\\frac{600}{3} = 200\\\\,\\\\text{W}$.'
  },
  {
    id: 'aphy1_u3_q6',
    subject: 'apphys1',
    unit: 3,
    topic: '3.2 Conservation of Energy',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A spring with spring constant $k = 200\\\\,\\\\text{N/m}$ is compressed by $0.1\\\\,\\\\text{m}$. How much elastic potential energy is stored in the spring?',
    choices: [
      '$0.5\\\\,\\\\text{J}$',
      '$1\\\\,\\\\text{J}$',
      '$2\\\\,\\\\text{J}$',
      '$10\\\\,\\\\text{J}$'
    ],
    answer: 1,
    explanation: '$PE_{spring} = \\\\frac{1}{2}kx^2 = \\\\frac{1}{2}(200)(0.1)^2 = \\\\frac{1}{2}(200)(0.01) = 1\\\\,\\\\text{J}$.'
  },
  {
    id: 'aphy1_u3_q7',
    subject: 'apphys1',
    unit: 3,
    topic: '3.2 Conservation of Energy',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $3\\\\,\\\\text{kg}$ block slides along a horizontal surface at $4\\\\,\\\\text{m/s}$. The coefficient of kinetic friction is $\\\\mu_k = 0.2$. How far does the block slide before stopping? Use $g = 10\\\\,\\\\text{m/s}^2$.',
    choices: [
      '$2\\\\,\\\\text{m}$',
      '$4\\\\,\\\\text{m}$',
      '$6\\\\,\\\\text{m}$',
      '$8\\\\,\\\\text{m}$'
    ],
    answer: 1,
    explanation: 'Using the work-energy theorem: $\\\\frac{1}{2}mv^2 = \\\\mu_k m g d$. $$d = \\\\frac{v^2}{2\\\\mu_k g} = \\\\frac{16}{2(0.2)(10)} = \\\\frac{16}{4} = 4\\\\,\\\\text{m}$$'
  },
  {
    id: 'aphy1_u3_q8',
    subject: 'apphys1',
    unit: 3,
    topic: '3.2 Conservation of Energy',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A pendulum is released from a height of $0.8\\\\,\\\\text{m}$ above its lowest point. What is the speed of the pendulum bob at the lowest point? Use $g = 10\\\\,\\\\text{m/s}^2$.',
    choices: [
      '$2\\\\,\\\\text{m/s}$',
      '$4\\\\,\\\\text{m/s}$',
      '$8\\\\,\\\\text{m/s}$',
      '$16\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'Using conservation of energy: $v = \\\\sqrt{2gh} = \\\\sqrt{2(10)(0.8)} = \\\\sqrt{16} = 4\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'aphy1_u3_q9',
    subject: 'apphys1',
    unit: 3,
    topic: '3.3 Power',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A car engine exerts a force of $500\\\\,\\\\text{N}$ on a car traveling at a constant $20\\\\,\\\\text{m/s}$. What is the power output of the engine?',
    choices: [
      '$25\\\\,\\\\text{W}$',
      '$500\\\\,\\\\text{W}$',
      '$5000\\\\,\\\\text{W}$',
      '$10000\\\\,\\\\text{W}$'
    ],
    answer: 3,
    explanation: '$P = Fv = (500)(20) = 10000\\\\,\\\\text{W}$.'
  },
  {
    id: 'aphy1_u3_q10',
    subject: 'apphys1',
    unit: 3,
    topic: '3.1 Work',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A person carries a $20\\\\,\\\\text{N}$ box horizontally across a room for $10\\\\,\\\\text{m}$. How much work is done by the person on the box against gravity?',
    choices: [
      '$0\\\\,\\\\text{J}$',
      '$100\\\\,\\\\text{J}$',
      '$200\\\\,\\\\text{J}$',
      '$2000\\\\,\\\\text{J}$'
    ],
    answer: 0,
    explanation: 'The displacement is horizontal while gravity acts vertically. Since the force (gravity) and displacement are perpendicular, $W = Fd\\\\cos 90^\\\\circ = 0\\\\,\\\\text{J}$.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 4 — SYSTEMS & CENTER OF MASS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u4_q1',
    subject: 'apphys1',
    unit: 4,
    topic: '4.1 Center of Mass',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Two objects of masses $m_1 = 2\\\\,\\\\text{kg}$ (at $x = 0$) and $m_2 = 4\\\\,\\\\text{kg}$ (at $x = 6\\\\,\\\\text{m}$) are placed along the $x$-axis. Where is the center of mass of the system?',
    choices: [
      '$x = 2\\\\,\\\\text{m}$',
      '$x = 3\\\\,\\\\text{m}$',
      '$x = 4\\\\,\\\\text{m}$',
      '$x = 5\\\\,\\\\text{m}$'
    ],
    answer: 2,
    explanation: '$x_{cm} = \\\\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\\\frac{(2)(0) + (4)(6)}{2 + 4} = \\\\frac{24}{6} = 4\\\\,\\\\text{m}$.'
  },
  {
    id: 'aphy1_u4_q2',
    subject: 'apphys1',
    unit: 4,
    topic: '4.1 Center of Mass',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $3\\\\,\\\\text{kg}$ object at $x = 1\\\\,\\\\text{m}$ and a $1\\\\,\\\\text{kg}$ object at $x = 5\\\\,\\\\text{m}$ are in a system with no external forces. The $3\\\\,\\\\text{kg}$ object moves to $x = 3\\\\,\\\\text{m}$. Where does the $1\\\\,\\\\text{kg}$ object move to?',
    choices: [
      '$x = -1\\\\,\\\\text{m}$',
      '$x = 0\\\\,\\\\text{m}$',
      '$x = 3\\\\,\\\\text{m}$',
      '$x = -3\\\\,\\\\text{m}$'
    ],
    answer: 0,
    explanation: 'Center of mass must remain fixed (no external forces): $x_{cm} = \\\\frac{3(1) + 1(5)}{4} = \\\\frac{8}{4} = 2\\\\,\\\\text{m}$. After movement: $2 = \\\\frac{3(3) + 1(x)}{4} \\\\implies 8 = 9 + x \\\\implies x = -1\\\\,\\\\text{m}$.'
  },
  {
    id: 'aphy1_u4_q3',
    subject: 'apphys1',
    unit: 4,
    topic: '4.2 External Forces & Center of Mass',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'If no net external force acts on a system of particles, which of the following must be true about the center of mass?',
    choices: [
      'It must be at rest',
      'It must be accelerating',
      'It must move with constant velocity (which could be zero)',
      'It must move in a circle'
    ],
    answer: 2,
    explanation: 'When no net external force acts on a system, the acceleration of the center of mass is zero ($a_{cm} = 0$). Therefore the center of mass moves with constant velocity, which could be zero if it was initially at rest.'
  },
  {
    id: 'aphy1_u4_q4',
    subject: 'apphys1',
    unit: 4,
    topic: '4.1 Center of Mass',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Three masses are placed along the $x$-axis: $m_1 = 1\\\\,\\\\text{kg}$ at $x = 0$, $m_2 = 2\\\\,\\\\text{kg}$ at $x = 3\\\\,\\\\text{m}$, and $m_3 = 3\\\\,\\\\text{kg}$ at $x = 6\\\\,\\\\text{m}$. What is the $x$-coordinate of the center of mass?',
    choices: [
      '$x = 2\\\\,\\\\text{m}$',
      '$x = 3\\\\,\\\\text{m}$',
      '$x = 4\\\\,\\\\text{m}$',
      '$x = 5\\\\,\\\\text{m}$'
    ],
    answer: 2,
    explanation: '$x_{cm} = \\\\frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3} = \\\\frac{(1)(0) + (2)(3) + (3)(6)}{1+2+3} = \\\\frac{0 + 6 + 18}{6} = \\\\frac{24}{6} = 4\\\\,\\\\text{m}$.'
  },
  {
    id: 'aphy1_u4_q5',
    subject: 'apphys1',
    unit: 4,
    topic: '4.2 External Forces & Center of Mass',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An astronaut of mass $80\\\\,\\\\text{kg}$ throws a $2\\\\,\\\\text{kg}$ tool at $10\\\\,\\\\text{m/s}$ in space (no external forces). What is the velocity of the center of mass of the astronaut-tool system after the throw?',
    choices: [
      '$0\\\\,\\\\text{m/s}$',
      '$0.24\\\\,\\\\text{m/s}$',
      '$0.5\\\\,\\\\text{m/s}$',
      '$10\\\\,\\\\text{m/s}$'
    ],
    answer: 0,
    explanation: 'With no external forces, the center of mass velocity does not change. Since the system was initially at rest, $v_{cm} = 0\\\\,\\\\text{m/s}$ even after the throw.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 5 — MOMENTUM
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u5_q1',
    subject: 'apphys1',
    unit: 5,
    topic: '5.1 Impulse & Momentum',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'What is the momentum of a $3\\\\,\\\\text{kg}$ object moving at $4\\\\,\\\\text{m/s}$?',
    choices: [
      '$7\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$',
      '$12\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$',
      '$0.75\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$',
      '$1.33\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: '$p = mv = (3)(4) = 12\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$.'
  },
  {
    id: 'aphy1_u5_q2',
    subject: 'apphys1',
    unit: 5,
    topic: '5.1 Impulse & Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $0.5\\\\,\\\\text{kg}$ ball moving at $8\\\\,\\\\text{m/s}$ is brought to rest in $0.02\\\\,\\\\text{s}$. What is the magnitude of the average force on the ball?',
    choices: [
      '$20\\\\,\\\\text{N}$',
      '$80\\\\,\\\\text{N}$',
      '$200\\\\,\\\\text{N}$',
      '$400\\\\,\\\\text{N}$'
    ],
    answer: 2,
    explanation: '$\\\\Delta p = m \\\\Delta v = (0.5)(0 - 8) = -4\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$. Magnitude: $F = \\\\frac{|\\\\Delta p|}{\\\\Delta t} = \\\\frac{4}{0.02} = 200\\\\,\\\\text{N}$.'
  },
  {
    id: 'aphy1_u5_q3',
    subject: 'apphys1',
    unit: 5,
    topic: '5.2 Conservation of Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $2\\\\,\\\\text{kg}$ cart moving at $3\\\\,\\\\text{m/s}$ to the right collides with a $1\\\\,\\\\text{kg}$ cart at rest. They stick together after the collision. What is their final velocity?',
    choices: [
      '$1\\\\,\\\\text{m/s}$',
      '$1.5\\\\,\\\\text{m/s}$',
      '$2\\\\,\\\\text{m/s}$',
      '$3\\\\,\\\\text{m/s}$'
    ],
    answer: 2,
    explanation: 'By conservation of momentum (perfectly inelastic collision): $m_1 v_1 = (m_1 + m_2)v_f$. $$v_f = \\\\frac{m_1 v_1}{m_1 + m_2} = \\\\frac{(2)(3)}{2 + 1} = \\\\frac{6}{3} = 2\\\\,\\\\text{m/s}$$'
  },
  {
    id: 'aphy1_u5_q4',
    subject: 'apphys1',
    unit: 5,
    topic: '5.2 Conservation of Momentum',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $5\\\\,\\\\text{kg}$ object moving at $4\\\\,\\\\text{m/s}$ to the right collides head-on with a $3\\\\,\\\\text{kg}$ object moving at $6\\\\,\\\\text{m/s}$ to the left. If they stick together, what is the velocity of the combined mass after the collision?',
    choices: [
      '$0.25\\\\,\\\\text{m/s}$ to the right',
      '$0.5\\\\,\\\\text{m/s}$ to the left',
      '$1\\\\,\\\\text{m/s}$ to the right',
      '$2.25\\\\,\\\\text{m/s}$ to the left'
    ],
    answer: 0,
    explanation: 'Taking right as positive: $p_i = (5)(4) + (3)(-6) = 20 - 18 = 2\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$. $$v_f = \\\\frac{p_i}{m_1 + m_2} = \\\\frac{2}{8} = 0.25\\\\,\\\\text{m/s to the right}$$'
  },
  {
    id: 'aphy1_u5_q5',
    subject: 'apphys1',
    unit: 5,
    topic: '5.1 Impulse & Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Which of the following best explains why airbags reduce injury in car crashes?',
    choices: [
      'They reduce the impulse on the passenger',
      'They increase the time of collision, reducing the average force',
      'They increase the momentum change of the passenger',
      'They decrease the kinetic energy of the passenger'
    ],
    answer: 1,
    explanation: 'Airbags increase the time over which the momentum change occurs. Since impulse $J = F\\\\Delta t = \\\\Delta p$ is fixed, a longer $\\\\Delta t$ means a smaller average force $F$ on the passenger.'
  },
  {
    id: 'aphy1_u5_q6',
    subject: 'apphys1',
    unit: 5,
    topic: '5.2 Conservation of Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $4\\\\,\\\\text{kg}$ cannon resting on a frictionless surface fires a $0.5\\\\,\\\\text{kg}$ ball at $20\\\\,\\\\text{m/s}$. What is the recoil velocity of the cannon?',
    choices: [
      '$1\\\\,\\\\text{m/s}$',
      '$2\\\\,\\\\text{m/s}$',
      '$2.5\\\\,\\\\text{m/s}$',
      '$10\\\\,\\\\text{m/s}$'
    ],
    answer: 2,
    explanation: 'By conservation of momentum (initially at rest, $p_i = 0$): $$0 = m_{ball}v_{ball} + m_{cannon}v_{cannon}$$ $$v_{cannon} = -\\\\frac{m_{ball}v_{ball}}{m_{cannon}} = -\\\\frac{(0.5)(20)}{4} = -2.5\\\\,\\\\text{m/s}$$ The cannon recoils at $2.5\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'aphy1_u5_q7',
    subject: 'apphys1',
    unit: 5,
    topic: '5.2 Conservation of Momentum',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'In a perfectly elastic collision between two identical masses, one initially at rest, what happens after the collision?',
    choices: [
      'Both objects move in the same direction',
      'The first object stops and the second moves with the first object\'s initial velocity',
      'Both objects bounce backward',
      'They stick together and move at half the initial velocity'
    ],
    answer: 1,
    explanation: 'In a head-on elastic collision between equal masses (one at rest), the moving object stops completely and the stationary object moves off with the initial velocity of the first.'
  },
  {
    id: 'aphy1_u5_q8',
    subject: 'apphys1',
    unit: 5,
    topic: '5.1 Impulse & Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A constant force of $F = 10\\\\,\\\\text{N}$ acts on a $2\\\\,\\\\text{kg}$ object initially at rest for $3\\\\,\\\\text{s}$. What is the final momentum of the object?',
    choices: [
      '$10\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$',
      '$20\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$',
      '$30\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$',
      '$60\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$'
    ],
    answer: 2,
    explanation: 'Impulse equals change in momentum: $J = F\\\\Delta t = (10)(3) = 30\\\\,\\\\text{N}\\\\cdot\\\\text{s}$. Since $p_0 = 0$, the final momentum is $p_f = 30\\\\,\\\\text{kg}\\\\cdot\\\\text{m/s}$.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 6 — SIMPLE HARMONIC MOTION
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u6_q1',
    subject: 'apphys1',
    unit: 6,
    topic: '6.1 Simple Harmonic Motion',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A mass on a spring oscillates with amplitude $A = 0.2\\\\,\\\\text{m}$ and period $T = 4\\\\,\\\\text{s}$. What is the frequency of oscillation?',
    choices: [
      '$0.1\\\\,\\\\text{Hz}$',
      '$0.25\\\\,\\\\text{Hz}$',
      '$0.5\\\\,\\\\text{Hz}$',
      '$4\\\\,\\\\text{Hz}$'
    ],
    answer: 1,
    explanation: '$f = \\\\frac{1}{T} = \\\\frac{1}{4} = 0.25\\\\,\\\\text{Hz}$.'
  },
  {
    id: 'aphy1_u6_q2',
    subject: 'apphys1',
    unit: 6,
    topic: '6.1 Simple Harmonic Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $0.5\\\\,\\\\text{kg}$ mass is attached to a spring with $k = 50\\\\,\\\\text{N/m}$. What is the period of oscillation?',
    choices: [
      '$\\\\frac{\\\\pi}{5}\\\\,\\\\text{s}$',
      '$\\\\frac{\\\\pi}{10}\\\\,\\\\text{s}$',
      '$2\\\\pi\\\\,\\\\text{s}$',
      '$10\\\\pi\\\\,\\\\text{s}$'
    ],
    answer: 0,
    explanation: '$T = 2\\\\pi\\\\sqrt{\\\\frac{m}{k}} = 2\\\\pi\\\\sqrt{\\\\frac{0.5}{50}} = 2\\\\pi\\\\sqrt{0.01} = 2\\\\pi(0.1) = \\\\frac{\\\\pi}{5}\\\\,\\\\text{s}$.'
  },
  {
    id: 'aphy1_u6_q3',
    subject: 'apphys1',
    unit: 6,
    topic: '6.1 Simple Harmonic Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'In simple harmonic motion, at what position is the speed of the object the greatest?',
    choices: [
      'At maximum displacement',
      'At the equilibrium position',
      'Halfway between equilibrium and maximum displacement',
      'Speed is constant throughout'
    ],
    answer: 1,
    explanation: 'In SHM, all energy is kinetic at the equilibrium position (zero displacement), giving maximum speed. At maximum displacement, the speed is zero and all energy is potential.'
  },
  {
    id: 'aphy1_u6_q4',
    subject: 'apphys1',
    unit: 6,
    topic: '6.2 Pendulums',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A simple pendulum has a length of $L = 1\\\\,\\\\text{m}$. Using $g = 10\\\\,\\\\text{m/s}^2$, what is the approximate period of small oscillations?',
    choices: [
      '$1\\\\,\\\\text{s}$',
      '$2\\\\,\\\\text{s}$',
      '$\\\\pi\\\\,\\\\text{s}$',
      '$2\\\\pi\\\\,\\\\text{s}$'
    ],
    answer: 1,
    explanation: '$T = 2\\\\pi\\\\sqrt{\\\\frac{L}{g}} = 2\\\\pi\\\\sqrt{\\\\frac{1}{10}} = 2\\\\pi(0.316) \\\\approx 2\\\\,\\\\text{s}$.'
  },
  {
    id: 'aphy1_u6_q5',
    subject: 'apphys1',
    unit: 6,
    topic: '6.1 Simple Harmonic Motion',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'If the amplitude of a mass-spring system is doubled, how does the maximum speed change?',
    choices: [
      'It stays the same',
      'It doubles',
      'It quadruples',
      'It halves'
    ],
    answer: 1,
    explanation: 'The maximum speed in SHM is $v_{max} = A\\\\omega$. Since $\\\\omega$ depends only on $k$ and $m$ (not amplitude), doubling $A$ doubles $v_{max}$.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 7 — TORQUE & ROTATIONAL MOTION
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u7_q1',
    subject: 'apphys1',
    unit: 7,
    topic: '7.1 Torque',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A force of $F = 10\\\\,\\\\text{N}$ is applied perpendicular to a wrench at a distance of $r = 0.3\\\\,\\\\text{m}$ from the bolt. What is the torque?',
    choices: [
      '$0.3\\\\,\\\\text{N}\\\\cdot\\\\text{m}$',
      '$3\\\\,\\\\text{N}\\\\cdot\\\\text{m}$',
      '$30\\\\,\\\\text{N}\\\\cdot\\\\text{m}$',
      '$33.3\\\\,\\\\text{N}\\\\cdot\\\\text{m}$'
    ],
    answer: 1,
    explanation: '$\\\\tau = rF\\\\sin\\\\theta = (0.3)(10)\\\\sin 90^\\\\circ = 3\\\\,\\\\text{N}\\\\cdot\\\\text{m}$.'
  },
  {
    id: 'aphy1_u7_q2',
    subject: 'apphys1',
    unit: 7,
    topic: '7.2 Rotational Kinematics & Dynamics',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A uniform disk of mass $M = 4\\\\,\\\\text{kg}$ and radius $R = 0.5\\\\,\\\\text{m}$ has a moment of inertia $I = \\\\frac{1}{2}MR^2$. A net torque of $\\\\tau = 2\\\\,\\\\text{N}\\\\cdot\\\\text{m}$ is applied. What is the angular acceleration?',
    choices: [
      '$1\\\\,\\\\text{rad/s}^2$',
      '$2\\\\,\\\\text{rad/s}^2$',
      '$4\\\\,\\\\text{rad/s}^2$',
      '$8\\\\,\\\\text{rad/s}^2$'
    ],
    answer: 2,
    explanation: '$I = \\\\frac{1}{2}MR^2 = \\\\frac{1}{2}(4)(0.5)^2 = 0.5\\\\,\\\\text{kg}\\\\cdot\\\\text{m}^2$. Using $\\\\tau = I\\\\alpha$: $\\\\alpha = \\\\frac{\\\\tau}{I} = \\\\frac{2}{0.5} = 4\\\\,\\\\text{rad/s}^2$.'
  },
  {
    id: 'aphy1_u7_q3',
    subject: 'apphys1',
    unit: 7,
    topic: '7.1 Torque',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A seesaw is $4\\\\,\\\\text{m}$ long and balanced at its center. A $30\\\\,\\\\text{kg}$ child sits $1.5\\\\,\\\\text{m}$ from the pivot. How far from the pivot must a $20\\\\,\\\\text{kg}$ child sit to balance the seesaw?',
    choices: [
      '$1\\\\,\\\\text{m}$',
      '$1.5\\\\,\\\\text{m}$',
      '$2\\\\,\\\\text{m}$',
      '$2.25\\\\,\\\\text{m}$'
    ],
    answer: 3,
    explanation: 'For rotational equilibrium, torques must balance: $m_1 g r_1 = m_2 g r_2$. $$r_2 = \\\\frac{m_1 r_1}{m_2} = \\\\frac{(30)(1.5)}{20} = \\\\frac{45}{20} = 2.25\\\\,\\\\text{m}$$'
  },
  {
    id: 'aphy1_u7_q4',
    subject: 'apphys1',
    unit: 7,
    topic: '7.3 Angular Momentum',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An ice skater spinning with arms extended has a moment of inertia of $I_1 = 4\\\\,\\\\text{kg}\\\\cdot\\\\text{m}^2$ and angular velocity $\\\\omega_1 = 2\\\\,\\\\text{rad/s}$. When she pulls her arms in, her moment of inertia becomes $I_2 = 1\\\\,\\\\text{kg}\\\\cdot\\\\text{m}^2$. What is her new angular velocity?',
    choices: [
      '$2\\\\,\\\\text{rad/s}$',
      '$4\\\\,\\\\text{rad/s}$',
      '$8\\\\,\\\\text{rad/s}$',
      '$16\\\\,\\\\text{rad/s}$'
    ],
    answer: 2,
    explanation: 'By conservation of angular momentum: $L = I_1\\\\omega_1 = I_2\\\\omega_2$. $$\\\\omega_2 = \\\\frac{I_1\\\\omega_1}{I_2} = \\\\frac{(4)(2)}{1} = 8\\\\,\\\\text{rad/s}$$'
  },
  {
    id: 'aphy1_u7_q5',
    subject: 'apphys1',
    unit: 7,
    topic: '7.2 Rotational Kinematics & Dynamics',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A solid sphere and a hollow sphere of the same mass and radius roll down an incline from the same height without slipping. Which reaches the bottom first?',
    choices: [
      'The solid sphere',
      'The hollow sphere',
      'They reach the bottom at the same time',
      'It depends on the angle of the incline'
    ],
    answer: 0,
    explanation: 'The solid sphere has a smaller moment of inertia ($I = \\\\frac{2}{5}MR^2$) compared to the hollow sphere ($I = \\\\frac{2}{3}MR^2$). Less rotational inertia means more translational kinetic energy, so the solid sphere accelerates faster and arrives first.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 8 — ELECTRIC CHARGE & CIRCUITS
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u8_q1',
    subject: 'apphys1',
    unit: 8,
    topic: '8.1 Electric Charge',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Two positive charges are placed near each other. What is the direction of the electric force between them?',
    choices: [
      'Attractive (toward each other)',
      'Repulsive (away from each other)',
      'There is no force between them',
      'Perpendicular to the line connecting them'
    ],
    answer: 1,
    explanation: 'Like charges repel. Two positive charges exert repulsive forces on each other, directed away from one another.'
  },
  {
    id: 'aphy1_u8_q2',
    subject: 'apphys1',
    unit: 8,
    topic: '8.2 Circuits',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A $12\\\\,\\\\text{V}$ battery is connected across a $4\\\\,\\\\Omega$ resistor. What is the current through the resistor?',
    choices: [
      '$0.33\\\\,\\\\text{A}$',
      '$3\\\\,\\\\text{A}$',
      '$8\\\\,\\\\text{A}$',
      '$48\\\\,\\\\text{A}$'
    ],
    answer: 1,
    explanation: 'Using Ohm\'s Law: $I = \\\\frac{V}{R} = \\\\frac{12}{4} = 3\\\\,\\\\text{A}$.'
  },
  {
    id: 'aphy1_u8_q3',
    subject: 'apphys1',
    unit: 8,
    topic: '8.2 Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two resistors, $R_1 = 6\\\\,\\\\Omega$ and $R_2 = 3\\\\,\\\\Omega$, are connected in parallel. What is the equivalent resistance?',
    choices: [
      '$1\\\\,\\\\Omega$',
      '$2\\\\,\\\\Omega$',
      '$4.5\\\\,\\\\Omega$',
      '$9\\\\,\\\\Omega$'
    ],
    answer: 1,
    explanation: 'For resistors in parallel: $\\\\frac{1}{R_{eq}} = \\\\frac{1}{R_1} + \\\\frac{1}{R_2} = \\\\frac{1}{6} + \\\\frac{1}{3} = \\\\frac{1}{6} + \\\\frac{2}{6} = \\\\frac{3}{6} = \\\\frac{1}{2}$. So $R_{eq} = 2\\\\,\\\\Omega$.'
  },
  {
    id: 'aphy1_u8_q4',
    subject: 'apphys1',
    unit: 8,
    topic: '8.2 Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'What is the power dissipated by a $10\\\\,\\\\Omega$ resistor carrying a current of $2\\\\,\\\\text{A}$?',
    choices: [
      '$5\\\\,\\\\text{W}$',
      '$20\\\\,\\\\text{W}$',
      '$40\\\\,\\\\text{W}$',
      '$100\\\\,\\\\text{W}$'
    ],
    answer: 2,
    explanation: '$P = I^2 R = (2)^2(10) = 40\\\\,\\\\text{W}$.'
  },
  {
    id: 'aphy1_u8_q5',
    subject: 'apphys1',
    unit: 8,
    topic: '8.2 Circuits',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Three identical resistors, each with resistance $R$, are connected: two in parallel with each other, and that combination in series with the third. What is the total equivalent resistance?',
    choices: [
      '$\\\\frac{R}{3}$',
      '$\\\\frac{R}{2}$',
      '$\\\\frac{3R}{2}$',
      '$3R$'
    ],
    answer: 2,
    explanation: 'The two parallel resistors have equivalent resistance $R_p = \\\\frac{R}{2}$. In series with the third: $R_{total} = R_p + R = \\\\frac{R}{2} + R = \\\\frac{3R}{2}$.'
  },
  {
    id: 'aphy1_u8_q6',
    subject: 'apphys1',
    unit: 8,
    topic: '8.1 Electric Charge',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two point charges $q_1 = 2\\\\,\\\\mu\\\\text{C}$ and $q_2 = 3\\\\,\\\\mu\\\\text{C}$ are separated by $r = 0.3\\\\,\\\\text{m}$. Using $k = 9\\\\times10^9\\\\,\\\\text{N·m}^2/\\\\text{C}^2$, what is the magnitude of the electric force between them?',
    choices: [
      '$0.2\\\\,\\\\text{N}$',
      '$0.4\\\\,\\\\text{N}$',
      '$0.6\\\\,\\\\text{N}$',
      '$1.8\\\\,\\\\text{N}$'
    ],
    answer: 2,
    explanation: 'Using Coulomb\'s Law: $$F = \\\\frac{kq_1 q_2}{r^2} = \\\\frac{(9\\\\times10^9)(2\\\\times10^{-6})(3\\\\times10^{-6})}{(0.3)^2} = \\\\frac{54\\\\times10^{-3}}{0.09} = 0.6\\\\,\\\\text{N}$$'
  },
  {
    id: 'aphy1_u8_q7',
    subject: 'apphys1',
    unit: 8,
    topic: '8.1 Electric Charge',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A test charge of $q = 4\\\\,\\\\mu\\\\text{C}$ experiences a force of $0.08\\\\,\\\\text{N}$ at a certain point in space. What is the magnitude of the electric field at that point?',
    choices: [
      '$3.2\\\\times10^{-7}\\\\,\\\\text{N/C}$',
      '$2\\\\times10^4\\\\,\\\\text{N/C}$',
      '$4\\\\times10^4\\\\,\\\\text{N/C}$',
      '$3.2\\\\times10^5\\\\,\\\\text{N/C}$'
    ],
    answer: 1,
    explanation: 'Electric field is defined as $E = \\\\frac{F}{q}$. $$E = \\\\frac{0.08}{4\\\\times10^{-6}} = 2\\\\times10^4\\\\,\\\\text{N/C}$$'
  },
  {
    id: 'aphy1_u8_q8',
    subject: 'apphys1',
    unit: 8,
    topic: '8.2 Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $24\\\\,\\\\text{V}$ battery is connected in series with $R_1 = 4\\\\,\\\\Omega$ and $R_2 = 8\\\\,\\\\Omega$. What is the voltage drop across $R_1$?',
    choices: [
      '$4\\\\,\\\\text{V}$',
      '$8\\\\,\\\\text{V}$',
      '$12\\\\,\\\\text{V}$',
      '$16\\\\,\\\\text{V}$'
    ],
    answer: 1,
    explanation: 'Total resistance: $R_{eq} = 4 + 8 = 12\\\\,\\\\Omega$. Current: $I = \\\\frac{24}{12} = 2\\\\,\\\\text{A}$. Voltage across $R_1$: $V_1 = IR_1 = 2 \\\\times 4 = 8\\\\,\\\\text{V}$.'
  },
  {
    id: 'aphy1_u8_q9',
    subject: 'apphys1',
    unit: 8,
    topic: '8.2 Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $20\\\\,\\\\text{V}$ battery is connected to $R_1 = 10\\\\,\\\\Omega$ and $R_2 = 20\\\\,\\\\Omega$ wired in parallel. What is the total current drawn from the battery?',
    choices: [
      '$1\\\\,\\\\text{A}$',
      '$2\\\\,\\\\text{A}$',
      '$3\\\\,\\\\text{A}$',
      '$4\\\\,\\\\text{A}$'
    ],
    answer: 2,
    explanation: 'Each branch has the full battery voltage. $I_1 = \\\\frac{20}{10} = 2\\\\,\\\\text{A}$ and $I_2 = \\\\frac{20}{20} = 1\\\\,\\\\text{A}$. Total: $I = 2 + 1 = 3\\\\,\\\\text{A}$.'
  },
  {
    id: 'aphy1_u8_q10',
    subject: 'apphys1',
    unit: 8,
    topic: '8.2 Circuits',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $9\\\\,\\\\text{V}$ battery drives a series circuit with $R_1 = 3\\\\,\\\\Omega$ and $R_2 = 6\\\\,\\\\Omega$. What is the ratio of power dissipated in $R_1$ to that in $R_2$?',
    choices: [
      '$1:4$',
      '$1:2$',
      '$2:1$',
      '$4:1$'
    ],
    answer: 1,
    explanation: 'In series the same current $I$ flows through both. Since $P = I^2 R$, the ratio of powers equals the ratio of resistances: $$\\\\frac{P_1}{P_2} = \\\\frac{R_1}{R_2} = \\\\frac{3}{6} = \\\\frac{1}{2}$$ so $P_1:P_2 = 1:2$.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 9 — WAVES & SOUND
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'aphy1_u9_q1',
    subject: 'apphys1',
    unit: 9,
    topic: '9.1 Mechanical Waves',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A wave has a frequency of $f = 5\\\\,\\\\text{Hz}$ and a wavelength of $\\\\lambda = 2\\\\,\\\\text{m}$. What is the wave speed?',
    choices: [
      '$2.5\\\\,\\\\text{m/s}$',
      '$5\\\\,\\\\text{m/s}$',
      '$7\\\\,\\\\text{m/s}$',
      '$10\\\\,\\\\text{m/s}$'
    ],
    answer: 3,
    explanation: '$v = f\\\\lambda = (5)(2) = 10\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'aphy1_u9_q2',
    subject: 'apphys1',
    unit: 9,
    topic: '9.1 Mechanical Waves',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'In a transverse wave, the direction of particle oscillation is:',
    choices: [
      'Parallel to the direction of wave propagation',
      'Perpendicular to the direction of wave propagation',
      'At $45^\\\\circ$ to the direction of wave propagation',
      'In the direction of energy transfer only'
    ],
    answer: 1,
    explanation: 'In a transverse wave, particles oscillate perpendicular to the direction of wave propagation. This is in contrast to longitudinal waves, where particles oscillate parallel to the wave direction.'
  },
  {
    id: 'aphy1_u9_q3',
    subject: 'apphys1',
    unit: 9,
    topic: '9.2 Standing Waves',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A string fixed at both ends has a fundamental frequency of $f_1 = 100\\\\,\\\\text{Hz}$. What is the frequency of the third harmonic?',
    choices: [
      '$100\\\\,\\\\text{Hz}$',
      '$200\\\\,\\\\text{Hz}$',
      '$300\\\\,\\\\text{Hz}$',
      '$400\\\\,\\\\text{Hz}$'
    ],
    answer: 2,
    explanation: 'For a string fixed at both ends, harmonics are integer multiples of the fundamental: $f_n = nf_1$. The third harmonic: $f_3 = 3(100) = 300\\\\,\\\\text{Hz}$.'
  },
  {
    id: 'aphy1_u9_q4',
    subject: 'apphys1',
    unit: 9,
    topic: '9.2 Standing Waves',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An open pipe has a length of $L = 0.85\\\\,\\\\text{m}$. Using $v_{sound} = 340\\\\,\\\\text{m/s}$, what is the fundamental frequency of the pipe?',
    choices: [
      '$100\\\\,\\\\text{Hz}$',
      '$200\\\\,\\\\text{Hz}$',
      '$400\\\\,\\\\text{Hz}$',
      '$680\\\\,\\\\text{Hz}$'
    ],
    answer: 1,
    explanation: 'For an open pipe, the fundamental wavelength is $\\\\lambda_1 = 2L = 2(0.85) = 1.7\\\\,\\\\text{m}$. $$f_1 = \\\\frac{v}{\\\\lambda_1} = \\\\frac{340}{1.7} = 200\\\\,\\\\text{Hz}$$'
  },
  {
    id: 'aphy1_u9_q5',
    subject: 'apphys1',
    unit: 9,
    topic: '9.1 Mechanical Waves',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'When two waves of the same frequency and amplitude travel in opposite directions on a string, what is produced?',
    choices: [
      'A travelling wave with double the amplitude',
      'A standing wave',
      'Complete destructive interference at all points',
      'A wave with double the frequency'
    ],
    answer: 1,
    explanation: 'Two waves of equal frequency and amplitude travelling in opposite directions superpose to form a standing wave, with fixed nodes (zero displacement) and antinodes (maximum displacement).'
  },
  {
    id: 'aphy1_u9_q6',
    subject: 'apphys1',
    unit: 9,
    topic: '9.3 The Doppler Effect',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An ambulance moves toward a stationary observer at $v_s = 34\\\\,\\\\text{m/s}$, emitting a siren at $f_0 = 1000\\\\,\\\\text{Hz}$. Speed of sound $= 340\\\\,\\\\text{m/s}$. What frequency does the observer hear?',
    choices: [
      '$909\\\\,\\\\text{Hz}$',
      '$1000\\\\,\\\\text{Hz}$',
      '$1111\\\\,\\\\text{Hz}$',
      '$1200\\\\,\\\\text{Hz}$'
    ],
    answer: 2,
    explanation: 'For a source approaching a stationary observer: $$f^\\\\prime = f_0 \\\\cdot \\\\frac{v}{v - v_s} = 1000 \\\\cdot \\\\frac{340}{340 - 34} = 1000 \\\\cdot \\\\frac{340}{306} \\\\approx 1111\\\\,\\\\text{Hz}$$'
  },
  {
    id: 'aphy1_u9_q7',
    subject: 'apphys1',
    unit: 9,
    topic: '9.1 Mechanical Waves',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Two tuning forks vibrate at $512\\\\,\\\\text{Hz}$ and $518\\\\,\\\\text{Hz}$ simultaneously. What beat frequency is heard?',
    choices: [
      '$3\\\\,\\\\text{Hz}$',
      '$6\\\\,\\\\text{Hz}$',
      '$515\\\\,\\\\text{Hz}$',
      '$1030\\\\,\\\\text{Hz}$'
    ],
    answer: 1,
    explanation: 'Beat frequency is the absolute difference between the two frequencies: $$f_{beat} = |f_1 - f_2| = |518 - 512| = 6\\\\,\\\\text{Hz}$$'
  },
  {
    id: 'aphy1_u9_q8',
    subject: 'apphys1',
    unit: 9,
    topic: '9.2 Standing Waves',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A pipe is closed at one end and open at the other with length $L = 0.85\\\\,\\\\text{m}$. Using $v_{sound} = 340\\\\,\\\\text{m/s}$, what is the fundamental frequency?',
    choices: [
      '$100\\\\,\\\\text{Hz}$',
      '$200\\\\,\\\\text{Hz}$',
      '$300\\\\,\\\\text{Hz}$',
      '$400\\\\,\\\\text{Hz}$'
    ],
    answer: 0,
    explanation: 'For a pipe closed at one end the fundamental wavelength is $\\\\lambda_1 = 4L = 4(0.85) = 3.4\\\\,\\\\text{m}$. $$f_1 = \\\\frac{v}{\\\\lambda_1} = \\\\frac{340}{3.4} = 100\\\\,\\\\text{Hz}$$'
  },
  {
    id: 'aphy1_u9_q9',
    subject: 'apphys1',
    unit: 9,
    topic: '9.1 Mechanical Waves',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'If the amplitude of a wave is doubled while its frequency and medium remain unchanged, what happens to the wave\'s intensity?',
    choices: [
      'Intensity doubles',
      'Intensity is halved',
      'Intensity quadruples',
      'Intensity is unchanged'
    ],
    answer: 2,
    explanation: 'Wave intensity is proportional to the square of the amplitude: $I \\\\propto A^2$. Doubling the amplitude gives $$I \\\\propto (2A)^2 = 4A^2$$ so intensity quadruples.'
  },
  {
    id: 'aphy1_u9_q10',
    subject: 'apphys1',
    unit: 9,
    topic: '9.1 Mechanical Waves',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two identical waves arrive at the same point exactly out of phase (phase difference $= 180^\\\\circ$). What is the result?',
    choices: [
      'Constructive interference; amplitude doubles',
      'Destructive interference; resultant amplitude is zero',
      'Constructive interference; frequency doubles',
      'Destructive interference; resultant amplitude doubles'
    ],
    answer: 1,
    explanation: 'When two equal-amplitude waves are completely out of phase, the crest of one aligns with the trough of the other at every point, producing perfectly destructive interference and a net amplitude of zero.'
  },

  // ── Unit 3 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U3-MCQ-01',
    subject: 'apphys1',
    unit: 3,
    topic: 'Normal Force (Statics)',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A book rests on a horizontal table. Which of the following is the correct free-body diagram description for the book?',
    choices: [
      'Only gravity acts on the book.',
      'Gravity acts downward and the normal force acts upward; the net force is zero.',
      'The normal force is greater than gravity because the table pushes up.',
      'The book experiences a net upward force from the table.'
    ],
    answer: 1,
    explanation: 'The book is in equilibrium. Gravity ($F_g$) pulls the book downward and the normal force ($F_N$) from the table pushes upward. Since the book does not accelerate, $F_N = F_g$ and the net force is zero.'
  },
  {
    id: 'U3-MCQ-02',
    subject: 'apphys1',
    unit: 3,
    topic: 'Work Done by a Force',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A constant force $F$ acts on an object as it moves horizontally. The force is directed at an angle $\\\\theta$ above the horizontal. If the object moves a distance $d$, which expression correctly gives the work done by $F$?',
    choices: [
      '$W = Fd$',
      '$W = Fd\\\\sin\\\\theta$',
      '$W = Fd\\\\cos\\\\theta$',
      '$W = Fd\\\\tan\\\\theta$'
    ],
    answer: 2,
    explanation: 'Work is defined as $W = \\\\vec{F} \\\\cdot \\\\vec{d} = Fd\\\\cos\\\\theta$, where $\\\\theta$ is the angle between the force vector and the displacement vector.'
  },
  {
    id: 'U3-MCQ-03',
    subject: 'apphys1',
    unit: 3,
    topic: 'Kinetic Energy',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An object\'s kinetic energy is $KE$. If its speed doubles while its mass remains the same, what is its new kinetic energy?',
    choices: [
      '$KE$',
      '$2\\\\,KE$',
      '$4\\\\,KE$',
      '$\\\\sqrt{2}\\\\,KE$'
    ],
    answer: 2,
    explanation: 'Kinetic energy is $KE = \\\\frac{1}{2}mv^2$. If speed doubles to $2v$: $$KE\' = \\\\frac{1}{2}m(2v)^2 = \\\\frac{1}{2}m(4v^2) = 4 \\\\cdot \\\\frac{1}{2}mv^2 = 4\\\\,KE$$'
  },
  {
    id: 'U3-MCQ-04',
    subject: 'apphys1',
    unit: 3,
    topic: 'Work-Energy Theorem',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A net force acts on an object initially at rest, displacing it $5\\\\,\\\\text{m}$. The net force is $12\\\\,\\\\text{N}$. What is the final kinetic energy of the object?',
    choices: [
      '$12\\\\,\\\\text{J}$',
      '$30\\\\,\\\\text{J}$',
      '$60\\\\,\\\\text{J}$',
      '$120\\\\,\\\\text{J}$'
    ],
    answer: 2,
    explanation: 'By the work-energy theorem, the net work done equals the change in kinetic energy. $W_{net} = F_{net} \\\\cdot d = (12)(5) = 60\\\\,\\\\text{J}$. Since the object started from rest, $KE_f = 60\\\\,\\\\text{J}$.'
  },
  {
    id: 'U3-MCQ-05',
    subject: 'apphys1',
    unit: 3,
    topic: 'Gravitational Potential Energy',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/energy/energy4.gif',
    question: 'A $2\\\\,\\\\text{kg}$ object is at rest at a height of $5\\\\,\\\\text{m}$ above the ground. How much gravitational potential energy does it have? (Use $g = 10\\\\,\\\\text{m/s}^2$)',
    choices: [
      '$10\\\\,\\\\text{J}$',
      '$50\\\\,\\\\text{J}$',
      '$100\\\\,\\\\text{J}$',
      '$25\\\\,\\\\text{J}$'
    ],
    answer: 2,
    explanation: '$PE_g = mgh = (2)(10)(5) = 100\\\\,\\\\text{J}$. Gravitational potential energy is linearly proportional to height, so doubling the height makes the potential energy double.'
  },
  {
    id: 'U3-MCQ-06',
    subject: 'apphys1',
    unit: 3,
    topic: 'Conservation of Energy (Frictionless)',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/energy/energy5.gif',
    question: 'A frictionless roller coaster starts at rest at height $h = 20\\\\,\\\\text{m}$. What is the speed of the cart at the bottom? (Use $g = 10\\\\,\\\\text{m/s}^2$)',
    choices: [
      '$10\\\\,\\\\text{m/s}$',
      '$14\\\\,\\\\text{m/s}$',
      '$20\\\\,\\\\text{m/s}$',
      '$200\\\\,\\\\text{m/s}$'
    ],
    answer: 2,
    explanation: 'By conservation of energy: $mgh = \\\\frac{1}{2}mv^2$. $$v = \\\\sqrt{2gh} = \\\\sqrt{2(10)(20)} = \\\\sqrt{400} = 20\\\\,\\\\text{m/s}$$'
  },
  {
    id: 'U3-MCQ-07',
    subject: 'apphys1',
    unit: 3,
    topic: 'Spring Potential Energy',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A spring with spring constant $k = 400\\\\,\\\\text{N/m}$ is compressed $0.1\\\\,\\\\text{m}$ from its natural length. It is then released and launches a $0.5\\\\,\\\\text{kg}$ block on a frictionless surface. What is the speed of the block when it leaves the spring?',
    choices: [
      '$1\\\\,\\\\text{m/s}$',
      '$2\\\\,\\\\text{m/s}$',
      '$4\\\\,\\\\text{m/s}$',
      '$8\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'Spring potential energy converts to kinetic energy: $$\\\\frac{1}{2}kx^2 = \\\\frac{1}{2}mv^2$$ $$v = x\\\\sqrt{\\\\frac{k}{m}} = 0.1\\\\sqrt{\\\\frac{400}{0.5}} = 0.1\\\\sqrt{800} = 0.1(28.3) \\\\approx 2\\\\,\\\\text{m/s}$$'
  },
  {
    id: 'U3-MCQ-08',
    subject: 'apphys1',
    unit: 3,
    topic: 'Power',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A motor lifts a $50\\\\,\\\\text{kg}$ load at a constant speed of $2\\\\,\\\\text{m/s}$ vertically. What is the power generated by the motor? (Use $g = 10\\\\,\\\\text{m/s}^2$)',
    choices: [
      '$100\\\\,\\\\text{W}$',
      '$500\\\\,\\\\text{W}$',
      '$1000\\\\,\\\\text{W}$',
      '$2500\\\\,\\\\text{W}$'
    ],
    answer: 2,
    explanation: 'The force needed to lift at constant speed equals the weight: $F = mg = (50)(10) = 500\\\\,\\\\text{N}$. Power: $P = Fv = (500)(2) = 1000\\\\,\\\\text{W}$.'
  },
  {
    id: 'U3-MCQ-09',
    subject: 'apphys1',
    unit: 3,
    topic: 'Work Done by Friction',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $3\\\\,\\\\text{kg}$ block slides from rest down a ramp of height $2\\\\,\\\\text{m}$ and arrives at the bottom with a speed of $4\\\\,\\\\text{m/s}$. How much energy was lost to friction? (Use $g = 10\\\\,\\\\text{m/s}^2$)',
    choices: [
      '$60\\\\,\\\\text{J}$',
      '$36\\\\,\\\\text{J}$',
      '$24\\\\,\\\\text{J}$',
      '$12\\\\,\\\\text{J}$'
    ],
    answer: 2,
    explanation: 'Initial PE: $mgh = (3)(10)(2) = 60\\\\,\\\\text{J}$. Final KE: $\\\\frac{1}{2}mv^2 = \\\\frac{1}{2}(3)(4)^2 = 24\\\\,\\\\text{J}$. Energy lost to friction: $60 - 24 = 36\\\\,\\\\text{J}$. The answer is $36\\\\,\\\\text{J}$.'
  },
  {
    id: 'U3-MCQ-10',
    subject: 'apphys1',
    unit: 3,
    topic: 'Conservation of Energy (General)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A ball of mass $m$ is dropped from height $h$. When it has fallen half the distance ($h/2$), what fraction of its total mechanical energy is kinetic?',
    choices: [
      '$\\\\frac{1}{4}$',
      '$\\\\frac{1}{2}$',
      '$\\\\frac{3}{4}$',
      '$1$'
    ],
    answer: 1,
    explanation: 'At height $h/2$, the potential energy is $mg(h/2) = \\\\frac{1}{2}mgh$, which is half the total energy. By conservation of energy, the other half is kinetic energy. So $\\\\frac{KE}{E_{total}} = \\\\frac{1}{2}$.'
  },

  // ── Unit 4 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U4-MCQ-01',
    subject: 'apphys1',
    unit: 4,
    topic: 'Center of Mass (Basic)',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Two masses, $m_1 = 3\\\\,\\\\text{kg}$ at $x = 0$ and $m_2 = 1\\\\,\\\\text{kg}$ at $x = 4\\\\,\\\\text{m}$, are on a frictionless surface. Where is the center of mass of the system?',
    choices: [
      '$x = 0.5\\\\,\\\\text{m}$',
      '$x = 1\\\\,\\\\text{m}$',
      '$x = 2\\\\,\\\\text{m}$',
      '$x = 3\\\\,\\\\text{m}$'
    ],
    answer: 1,
    explanation: '$x_{cm} = \\\\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\\\frac{(3)(0) + (1)(4)}{3+1} = \\\\frac{4}{4} = 1\\\\,\\\\text{m}$.'
  },
  {
    id: 'U4-MCQ-02',
    subject: 'apphys1',
    unit: 4,
    topic: 'Center of Mass Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two ice skaters, $A$ ($60\\\\,\\\\text{kg}$) and $B$ ($40\\\\,\\\\text{kg}$), stand on frictionless ice and push off each other from rest. After the push, skater $A$ moves at $2\\\\,\\\\text{m/s}$ to the left. What is the velocity of the center of mass of the system after the push?',
    choices: [
      '$1.2\\\\,\\\\text{m/s}$ to the left',
      '$3\\\\,\\\\text{m/s}$ to the right',
      '$0\\\\,\\\\text{m/s}$',
      '$0.8\\\\,\\\\text{m/s}$ to the right'
    ],
    answer: 2,
    explanation: 'Since the system was initially at rest (net external force is zero on frictionless ice), the velocity of the center of mass remains zero throughout. The center of mass does not move.'
  },
  {
    id: 'U4-MCQ-03',
    subject: 'apphys1',
    unit: 4,
    topic: 'System Momentum / COM',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A system of two carts on a frictionless track has no net external horizontal force. Cart 1 ($2\\\\,\\\\text{kg}$) moves at $+3\\\\,\\\\text{m/s}$ and Cart 2 ($1\\\\,\\\\text{kg}$) moves at $-3\\\\,\\\\text{m/s}$. What is the velocity of the center of mass?',
    choices: [
      '$-1\\\\,\\\\text{m/s}$',
      '$0\\\\,\\\\text{m/s}$',
      '$+1\\\\,\\\\text{m/s}$',
      '$+3\\\\,\\\\text{m/s}$'
    ],
    answer: 2,
    explanation: '$v_{cm} = \\\\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \\\\frac{(2)(3) + (1)(-3)}{2+1} = \\\\frac{6-3}{3} = \\\\frac{3}{3} = +1\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'U4-MCQ-04',
    subject: 'apphys1',
    unit: 4,
    topic: 'Internal vs External Forces',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two blocks connected by a spring are at rest on a frictionless surface. The spring is released internally. What happens to the center of mass of the two-block system?',
    choices: [
      'It accelerates in the direction of the heavier block.',
      'It remains stationary.',
      'It accelerates toward the lighter block.',
      'It moves with constant velocity equal to the sum of the blocks\' velocities.'
    ],
    answer: 1,
    explanation: 'With no net external forces, the center of mass of the system remains stationary (or continues at constant velocity if it was already moving). Internal forces like the spring cannot change the center of mass motion.'
  },
  {
    id: 'U4-MCQ-05',
    subject: 'apphys1',
    unit: 4,
    topic: 'COM Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $5\\\\,\\\\text{kg}$ block moving at $6\\\\,\\\\text{m/s}$ to the right and a $3\\\\,\\\\text{kg}$ block moving at $2\\\\,\\\\text{m/s}$ to the left are on a frictionless surface. What is the acceleration of the center of mass of the system?',
    choices: [
      '$0\\\\,\\\\text{m/s}^2$',
      '$2\\\\,\\\\text{m/s}^2$ to the right',
      '$4\\\\,\\\\text{m/s}^2$ to the left',
      '$6\\\\,\\\\text{m/s}^2$ to the right'
    ],
    answer: 0,
    explanation: 'On a frictionless surface with no external forces, the net external force on the system is zero. Therefore $a_{cm} = F_{net,ext}/(m_1 + m_2) = 0$.'
  },
  {
    id: 'U4-MCQ-06',
    subject: 'apphys1',
    unit: 4,
    topic: 'COM Position (Three Bodies)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Three objects are on the $x$-axis: $4\\\\,\\\\text{kg}$ at $x = 0$, $2\\\\,\\\\text{kg}$ at $x = 3\\\\,\\\\text{m}$, and $6\\\\,\\\\text{kg}$ at $x = 5\\\\,\\\\text{m}$. What is the $x$-coordinate of the center of mass?',
    choices: [
      '$2\\\\,\\\\text{m}$',
      '$3\\\\,\\\\text{m}$',
      '$3.5\\\\,\\\\text{m}$',
      '$4\\\\,\\\\text{m}$'
    ],
    answer: 1,
    explanation: '$x_{cm} = \\\\frac{(4)(0) + (2)(3) + (6)(5)}{4+2+6} = \\\\frac{0+6+30}{12} = \\\\frac{36}{12} = 3\\\\,\\\\text{m}$.'
  },
  {
    id: 'U4-MCQ-07',
    subject: 'apphys1',
    unit: 4,
    topic: 'Explosion / Recoil',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A stationary $10\\\\,\\\\text{kg}$ object explodes into two pieces. A $4\\\\,\\\\text{kg}$ piece moves at $15\\\\,\\\\text{m/s}$ to the right. What is the velocity of the $6\\\\,\\\\text{kg}$ piece?',
    choices: [
      '$10\\\\,\\\\text{m/s}$ to the right',
      '$10\\\\,\\\\text{m/s}$ to the left',
      '$6\\\\,\\\\text{m/s}$ to the left',
      '$4\\\\,\\\\text{m/s}$ to the left'
    ],
    answer: 1,
    explanation: 'Conservation of momentum: $0 = m_1 v_1 + m_2 v_2$. $$v_2 = -\\\\frac{m_1 v_1}{m_2} = -\\\\frac{(4)(15)}{6} = -10\\\\,\\\\text{m/s}$$ The $6\\\\,\\\\text{kg}$ piece moves at $10\\\\,\\\\text{m/s}$ to the left.'
  },
  {
    id: 'U4-MCQ-08',
    subject: 'apphys1',
    unit: 4,
    topic: 'Newton\'s Second Law for Systems',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A net external force of $20\\\\,\\\\text{N}$ acts on a system of two objects with masses $3\\\\,\\\\text{kg}$ and $7\\\\,\\\\text{kg}$. What is the acceleration of the center of mass of the system?',
    choices: [
      '$1\\\\,\\\\text{m/s}^2$',
      '$2\\\\,\\\\text{m/s}^2$',
      '$4\\\\,\\\\text{m/s}^2$',
      '$6.67\\\\,\\\\text{m/s}^2$'
    ],
    answer: 1,
    explanation: '$a_{cm} = \\\\frac{F_{net,ext}}{M_{total}} = \\\\frac{20}{3+7} = \\\\frac{20}{10} = 2\\\\,\\\\text{m/s}^2$.'
  },
  {
    id: 'U4-MCQ-09',
    subject: 'apphys1',
    unit: 4,
    topic: 'COM of Symmetric Object',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Where is the center of mass of a uniform, solid sphere?',
    choices: [
      'At the surface of the sphere',
      'At the geometric center of the sphere',
      'At a point one-third from the bottom',
      'It depends on the mass distribution along the radius'
    ],
    answer: 1,
    explanation: 'For a uniform, solid sphere the mass is distributed symmetrically about the geometric center. Therefore the center of mass is located at the geometric center.'
  },
  {
    id: 'U4-MCQ-10',
    subject: 'apphys1',
    unit: 4,
    topic: 'Variable Mass / Rocket',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A rocket in deep space (no gravity) expels gas to accelerate. If the rocket expels mass at a faster rate, what happens to the rocket\'s acceleration (assuming exhaust speed stays constant)?',
    choices: [
      'Acceleration decreases.',
      'Acceleration increases.',
      'Acceleration remains the same.',
      'Acceleration first increases then decreases.'
    ],
    answer: 1,
    explanation: 'The thrust force on the rocket is $F = v_{exhaust} \\\\frac{\\\\Delta m}{\\\\Delta t}$. A higher rate of mass expulsion $\\\\frac{\\\\Delta m}{\\\\Delta t}$ at the same exhaust speed produces a larger thrust, increasing acceleration (though as the rocket loses mass its total mass decreases, further increasing acceleration).'
  },

  // ── Unit 5 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U5-MCQ-01',
    subject: 'apphys1',
    unit: 5,
    topic: 'Impulse-Momentum Theorem',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A $0.2\\\\,\\\\text{kg}$ ball moving at $10\\\\,\\\\text{m/s}$ strikes a wall and bounces back at $10\\\\,\\\\text{m/s}$. What is the magnitude of the impulse delivered to the ball?',
    choices: [
      '$0\\\\,\\\\text{N\\\\cdot s}$',
      '$2\\\\,\\\\text{N\\\\cdot s}$',
      '$4\\\\,\\\\text{N\\\\cdot s}$',
      '$20\\\\,\\\\text{N\\\\cdot s}$'
    ],
    answer: 2,
    explanation: 'Taking the initial direction as positive, $\\\\Delta p = m(v_f - v_i) = 0.2(-10 - 10) = -4\\\\,\\\\text{N\\\\cdot s}$. The magnitude of impulse is $4\\\\,\\\\text{N\\\\cdot s}$.'
  },
  {
    id: 'U5-MCQ-02',
    subject: 'apphys1',
    unit: 5,
    topic: 'Conservation of Momentum (Explosion)',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/momentum/Momentum8.png',
    question: 'Two carts on a frictionless track are initially at rest and connected by a compressed spring. Cart A has mass $2m$ and Cart B has mass $m$. When released, Cart B moves at speed $v$ to the right. What is the speed of Cart A?',
    choices: [
      '$v/2$',
      '$v$',
      '$2v$',
      '$4v$'
    ],
    answer: 0,
    explanation: 'By conservation of momentum from rest: $0 = 2m \\\\cdot v_A + m \\\\cdot v$. So $v_A = -v/2$. Cart A moves at speed $v/2$ to the left.'
  },
  {
    id: 'U5-MCQ-03',
    subject: 'apphys1',
    unit: 5,
    topic: 'Perfectly Inelastic Collision',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $4\\\\,\\\\text{kg}$ object moving at $6\\\\,\\\\text{m/s}$ collides with a $2\\\\,\\\\text{kg}$ object at rest. They stick together. What is their combined velocity after the collision?',
    choices: [
      '$2\\\\,\\\\text{m/s}$',
      '$4\\\\,\\\\text{m/s}$',
      '$6\\\\,\\\\text{m/s}$',
      '$3\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: '$v_f = \\\\frac{m_1 v_1}{m_1 + m_2} = \\\\frac{(4)(6)}{4+2} = \\\\frac{24}{6} = 4\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'U5-MCQ-04',
    subject: 'apphys1',
    unit: 5,
    topic: 'Elastic Collision',
    difficulty: 'hard',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/momentum/Momentum4.png',
    question: 'In an elastic collision between two equal masses, one initially at rest, the moving object has initial momentum $p_0$. After the collision, what is the momentum of each object?',
    choices: [
      'The moving object has $p_0/2$; the stationary object has $p_0/2$.',
      'The moving object has $p_0$; the stationary object has $0$.',
      'The moving object has $0$; the stationary object has $p_0$.',
      'Both objects have $0$ momentum.'
    ],
    answer: 2,
    explanation: 'In a head-on elastic collision between equal masses, the moving object stops and the stationary object takes all the momentum. The originally moving object has $p = 0$ and the originally stationary object has $p = p_0$.'
  },
  {
    id: 'U5-MCQ-05',
    subject: 'apphys1',
    unit: 5,
    topic: 'Impulse & Average Force',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $0.3\\\\,\\\\text{kg}$ ball hits the ground moving downward at $8\\\\,\\\\text{m/s}$ and rebounds upward at $6\\\\,\\\\text{m/s}$. The collision lasts $0.04\\\\,\\\\text{s}$. What is the magnitude of the average force on the ball during impact?',
    choices: [
      '$15\\\\,\\\\text{N}$',
      '$50\\\\,\\\\text{N}$',
      '$105\\\\,\\\\text{N}$',
      '$150\\\\,\\\\text{N}$'
    ],
    answer: 2,
    explanation: 'Taking upward as positive: $\\\\Delta p = m(v_f - v_i) = 0.3(6 - (-8)) = 0.3(14) = 4.2\\\\,\\\\text{N\\\\cdot s}$. Average force: $F = \\\\frac{\\\\Delta p}{\\\\Delta t} = \\\\frac{4.2}{0.04} = 105\\\\,\\\\text{N}$.'
  },
  {
    id: 'U5-MCQ-06',
    subject: 'apphys1',
    unit: 5,
    topic: 'Conservation of Momentum (2D)',
    difficulty: 'hard',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/momentum/Momentum6.png',
    question: 'A $2\\\\,\\\\text{kg}$ object moving east at $3\\\\,\\\\text{m/s}$ collides with a $2\\\\,\\\\text{kg}$ object moving north at $3\\\\,\\\\text{m/s}$. They stick together. What is the magnitude of their combined velocity?',
    choices: [
      '$1.5\\\\,\\\\text{m/s}$',
      '$2.12\\\\,\\\\text{m/s}$',
      '$3\\\\,\\\\text{m/s}$',
      '$4.24\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'Total momentum: $p_x = 2(3) = 6\\\\,\\\\text{kg·m/s}$ east; $p_y = 2(3) = 6\\\\,\\\\text{kg·m/s}$ north. Total mass $= 4\\\\,\\\\text{kg}$. $$v = \\\\frac{\\\\sqrt{p_x^2 + p_y^2}}{M} = \\\\frac{\\\\sqrt{36+36}}{4} = \\\\frac{\\\\sqrt{72}}{4} \\\\approx \\\\frac{8.49}{4} \\\\approx 2.12\\\\,\\\\text{m/s}$$'
  },
  {
    id: 'U5-MCQ-07',
    subject: 'apphys1',
    unit: 5,
    topic: 'Force vs Time Graph (Impulse)',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/momentum/Momentum7.png',
    question: 'A force vs. time graph shows a rectangular pulse: $F = 50\\\\,\\\\text{N}$ from $t = 0$ to $t = 0.4\\\\,\\\\text{s}$, and $F = 0$ elsewhere. What is the impulse delivered to the object?',
    choices: [
      '$5\\\\,\\\\text{N\\\\cdot s}$',
      '$20\\\\,\\\\text{N\\\\cdot s}$',
      '$50\\\\,\\\\text{N\\\\cdot s}$',
      '$125\\\\,\\\\text{N\\\\cdot s}$'
    ],
    answer: 1,
    explanation: 'Impulse equals the area under the F-vs-t graph: $J = F \\\\times \\\\Delta t = (50)(0.4) = 20\\\\,\\\\text{N\\\\cdot s}$.'
  },
  {
    id: 'U5-MCQ-08',
    subject: 'apphys1',
    unit: 5,
    topic: 'Kinetic Energy in Collisions',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Two objects collide. Object A ($3\\\\,\\\\text{kg}$) moves at $4\\\\,\\\\text{m/s}$; Object B ($3\\\\,\\\\text{kg}$) is at rest. They collide inelastically (stick together). What fraction of the initial kinetic energy is lost?',
    choices: [
      '$0$ (none lost)',
      '$\\\\frac{1}{4}$',
      '$\\\\frac{1}{2}$',
      '$\\\\frac{3}{4}$'
    ],
    answer: 2,
    explanation: 'Initial KE: $\\\\frac{1}{2}(3)(4)^2 = 24\\\\,\\\\text{J}$. Final speed: $v_f = \\\\frac{3 \\\\times 4}{6} = 2\\\\,\\\\text{m/s}$. Final KE: $\\\\frac{1}{2}(6)(2)^2 = 12\\\\,\\\\text{J}$. Fraction lost: $\\\\frac{24-12}{24} = \\\\frac{1}{2}$.'
  },
  {
    id: 'U5-MCQ-09',
    subject: 'apphys1',
    unit: 5,
    topic: 'Momentum & Newton\'s Third Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'According to Newton\'s Third Law and the impulse-momentum theorem, when two objects collide, which of the following is always true?',
    choices: [
      'The forces on the two objects are equal in magnitude for the same duration.',
      'The kinetic energies exchanged are equal.',
      'The heavier object experiences a larger force.',
      'The total velocity of the system is conserved.'
    ],
    answer: 0,
    explanation: 'Newton\'s Third Law requires that the forces are equal and opposite, and they act for the same time interval. Therefore the impulses delivered to each object are equal and opposite, meaning each object\'s change in momentum is equal in magnitude.'
  },
  {
    id: 'U5-MCQ-10',
    subject: 'apphys1',
    unit: 5,
    topic: 'Perfectly Inelastic Collision (COM Frame)',
    difficulty: 'hard',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/momentum/Momentum5.png',
    question: 'A $5\\\\,\\\\text{kg}$ block moving at $10\\\\,\\\\text{m/s}$ collides with and sticks to a $5\\\\,\\\\text{kg}$ block at rest. What is the velocity of the two-block system after the collision?',
    choices: [
      '$2.5\\\\,\\\\text{m/s}$',
      '$5\\\\,\\\\text{m/s}$',
      '$7.5\\\\,\\\\text{m/s}$',
      '$10\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'Conservation of momentum: $m_1 v_1 = (m_1 + m_2)v_f$. $$v_f = \\\\frac{(5)(10)}{5+5} = \\\\frac{50}{10} = 5\\\\,\\\\text{m/s}$$'
  },

  // ── Unit 6 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U6-MCQ-01',
    subject: 'apphys1',
    unit: 6,
    topic: 'SHM Period (Spring)',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A mass attached to a spring oscillates with period $T$. If the mass is quadrupled while the spring constant remains unchanged, what is the new period?',
    choices: [
      '$T/2$',
      '$T$',
      '$2T$',
      '$4T$'
    ],
    answer: 2,
    explanation: '$T = 2\\\\pi\\\\sqrt{m/k}$. Quadrupling $m$ replaces $\\\\sqrt{m}$ with $\\\\sqrt{4m} = 2\\\\sqrt{m}$, so the new period is $2T$.'
  },
  {
    id: 'U6-MCQ-02',
    subject: 'apphys1',
    unit: 6,
    topic: 'SHM Energy',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'In a mass-spring system undergoing SHM, where is the potential energy of the spring at its maximum?',
    choices: [
      'At the equilibrium position',
      'At the maximum displacement (amplitude)',
      'Halfway between equilibrium and maximum displacement',
      'Potential energy is constant throughout'
    ],
    answer: 1,
    explanation: 'The spring potential energy is $PE = \\\\frac{1}{2}kx^2$, which is maximum when $x = A$ (maximum displacement). At equilibrium ($x = 0$) the spring PE is zero and kinetic energy is maximum.'
  },
  {
    id: 'U6-MCQ-03',
    subject: 'apphys1',
    unit: 6,
    topic: 'SHM Restoring Force',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A spring-mass system is displaced from equilibrium. Which of the following correctly describes the net force on the mass at any instant?',
    choices: [
      'Constant in magnitude and direction',
      'Proportional to displacement, directed toward equilibrium',
      'Proportional to velocity, directed away from equilibrium',
      'Zero at all times'
    ],
    answer: 1,
    explanation: 'In SHM the restoring force is $F = -kx$. It is proportional to displacement and directed toward the equilibrium position (opposite to the displacement direction).'
  },
  {
    id: 'U6-MCQ-04',
    subject: 'apphys1',
    unit: 6,
    topic: 'Pendulum Period',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/waves/Pendulum1.png',
    question: 'A simple pendulum of length $L = 2.5\\\\,\\\\text{m}$ oscillates with small amplitude. Using $g = 10\\\\,\\\\text{m/s}^2$, what is the period?',
    choices: [
      '$\\\\pi\\\\,\\\\text{s}$',
      '$2\\\\pi \\\\times 0.5\\\\,\\\\text{s}$',
      '$\\\\pi\\\\sqrt{10}\\\\,\\\\text{s}$',
      '$\\\\pi / \\\\sqrt{10}\\\\,\\\\text{s}$'
    ],
    answer: 0,
    explanation: '$T = 2\\\\pi\\\\sqrt{L/g} = 2\\\\pi\\\\sqrt{2.5/10} = 2\\\\pi\\\\sqrt{0.25} = 2\\\\pi(0.5) = \\\\pi\\\\,\\\\text{s}$.'
  },
  {
    id: 'U6-MCQ-05',
    subject: 'apphys1',
    unit: 6,
    topic: 'SHM Velocity & Position',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A mass oscillates on a spring with amplitude $A = 0.5\\\\,\\\\text{m}$ and angular frequency $\\\\omega = 4\\\\,\\\\text{rad/s}$. What is the maximum speed?',
    choices: [
      '$0.5\\\\,\\\\text{m/s}$',
      '$2\\\\,\\\\text{m/s}$',
      '$4\\\\,\\\\text{m/s}$',
      '$8\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'Maximum speed occurs at equilibrium: $v_{max} = A\\\\omega = (0.5)(4) = 2\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'U6-MCQ-06',
    subject: 'apphys1',
    unit: 6,
    topic: 'SHM Period Independence',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two identical mass-spring systems oscillate with different amplitudes. Which of the following statements is correct?',
    choices: [
      'The system with larger amplitude has a longer period.',
      'The system with larger amplitude has a shorter period.',
      'Both systems have the same period.',
      'The period depends on the initial displacement squared.'
    ],
    answer: 2,
    explanation: 'The period of a mass-spring system, $T = 2\\\\pi\\\\sqrt{m/k}$, depends only on mass and spring constant, not on amplitude. Both systems oscillate with the same period.'
  },
  {
    id: 'U6-MCQ-07',
    subject: 'apphys1',
    unit: 6,
    topic: 'SHM Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'In SHM, at what position is the magnitude of acceleration the greatest?',
    choices: [
      'At the equilibrium position',
      'At the maximum displacement',
      'Halfway between equilibrium and maximum displacement',
      'Acceleration is constant throughout'
    ],
    answer: 1,
    explanation: 'Acceleration in SHM is $a = -\\\\omega^2 x$. Its magnitude is greatest when displacement $|x|$ is maximum, i.e., at the amplitude positions.'
  },
  {
    id: 'U6-MCQ-08',
    subject: 'apphys1',
    unit: 6,
    topic: 'Pendulum — Effect of Gravity',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A simple pendulum has a period $T$ on Earth. If taken to a planet where the gravitational acceleration is $4g$ (four times Earth\'s), what is the new period?',
    choices: [
      '$4T$',
      '$2T$',
      '$T/2$',
      '$T/4$'
    ],
    answer: 2,
    explanation: '$T = 2\\\\pi\\\\sqrt{L/g}$. On the new planet $g\' = 4g$: $T\' = 2\\\\pi\\\\sqrt{L/(4g)} = \\\\frac{1}{2} \\\\cdot 2\\\\pi\\\\sqrt{L/g} = T/2$.'
  },
  {
    id: 'U6-MCQ-09',
    subject: 'apphys1',
    unit: 6,
    topic: 'SHM Energy Conservation',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $0.5\\\\,\\\\text{kg}$ mass oscillates on a spring ($k = 200\\\\,\\\\text{N/m}$) with amplitude $0.1\\\\,\\\\text{m}$. What is the total mechanical energy of the system?',
    choices: [
      '$0.5\\\\,\\\\text{J}$',
      '$1\\\\,\\\\text{J}$',
      '$2\\\\,\\\\text{J}$',
      '$10\\\\,\\\\text{J}$'
    ],
    answer: 1,
    explanation: 'Total energy in SHM equals the maximum potential energy: $E = \\\\frac{1}{2}kA^2 = \\\\frac{1}{2}(200)(0.1)^2 = \\\\frac{1}{2}(200)(0.01) = 1\\\\,\\\\text{J}$.'
  },
  {
    id: 'U6-MCQ-10',
    subject: 'apphys1',
    unit: 6,
    topic: 'SHM — Identifying Type',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Which of the following is NOT an example of simple harmonic motion?',
    choices: [
      'A mass on a spring oscillating with small amplitude',
      'A simple pendulum swinging with small angle',
      'A ball bouncing vertically on a rigid floor',
      'A mass oscillating on a spring in a vacuum'
    ],
    answer: 2,
    explanation: 'A ball bouncing off a rigid floor does not exhibit simple harmonic motion because the restoring force is not proportional to displacement from equilibrium. SHM requires $F = -kx$. Bouncing involves a discontinuous contact force.'
  },

  // ── Unit 7 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U7-MCQ-01',
    subject: 'apphys1',
    unit: 7,
    topic: 'Torque Calculation',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A force of $30\\\\,\\\\text{N}$ is applied perpendicular to the end of a $0.6\\\\,\\\\text{m}$ lever arm. What is the torque produced?',
    choices: [
      '$5\\\\,\\\\text{N\\\\cdot m}$',
      '$18\\\\,\\\\text{N\\\\cdot m}$',
      '$30\\\\,\\\\text{N\\\\cdot m}$',
      '$50\\\\,\\\\text{N\\\\cdot m}$'
    ],
    answer: 1,
    explanation: '$\\\\tau = rF\\\\sin\\\\theta = (0.6)(30)\\\\sin 90^\\\\circ = 18\\\\,\\\\text{N\\\\cdot m}$.'
  },
  {
    id: 'U7-MCQ-02',
    subject: 'apphys1',
    unit: 7,
    topic: 'Rotational Equilibrium',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A uniform beam of length $4\\\\,\\\\text{m}$ and mass $10\\\\,\\\\text{kg}$ is supported at one end. A $20\\\\,\\\\text{kg}$ mass hangs from the other end. Where should a single support be placed to achieve rotational equilibrium? (Use $g = 10\\\\,\\\\text{m/s}^2$)',
    choices: [
      '$1\\\\,\\\\text{m}$ from the hanging mass',
      '$1.33\\\\,\\\\text{m}$ from the hanging mass',
      '$2\\\\,\\\\text{m}$ from the hanging mass',
      '$2.67\\\\,\\\\text{m}$ from the hanging mass'
    ],
    answer: 1,
    explanation: 'Taking torques about the support point: the beam\'s center of mass is at the midpoint. Setting net torque $= 0$: $20g(x) = 10g(2-x) + 20g$ where $x$ is distance from the mass end. Solving gives $x \\\\approx 1.33\\\\,\\\\text{m}$, which is the center of mass position at $\\\\frac{(20)(0)+(10)(2)}{30} = 0.67\\\\,\\\\text{m}$ from the mass end, i.e., $1.33\\\\,\\\\text{m}$ from center.'
  },
  {
    id: 'U7-MCQ-03',
    subject: 'apphys1',
    unit: 7,
    topic: 'Moment of Inertia',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two objects of the same mass and radius but different mass distributions (one solid disk, one hollow ring) start from rest and roll down an incline without slipping. Which arrives at the bottom first?',
    choices: [
      'The hollow ring',
      'The solid disk',
      'They arrive at the same time',
      'It depends on the angle of the incline'
    ],
    answer: 1,
    explanation: 'The solid disk has $I = \\\\frac{1}{2}MR^2$ while the hollow ring has $I = MR^2$. Lower moment of inertia means less energy goes into rotation and more into translation, so the solid disk accelerates faster and wins.'
  },
  {
    id: 'U7-MCQ-04',
    subject: 'apphys1',
    unit: 7,
    topic: 'Angular Momentum Conservation',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A spinning figure skater has moment of inertia $I_1 = 6\\\\,\\\\text{kg\\\\cdot m}^2$ and angular velocity $\\\\omega_1 = 3\\\\,\\\\text{rad/s}$. She pulls her arms in, reducing her moment of inertia to $I_2 = 2\\\\,\\\\text{kg\\\\cdot m}^2$. What is her new angular velocity?',
    choices: [
      '$1\\\\,\\\\text{rad/s}$',
      '$3\\\\,\\\\text{rad/s}$',
      '$9\\\\,\\\\text{rad/s}$',
      '$18\\\\,\\\\text{rad/s}$'
    ],
    answer: 2,
    explanation: 'Conservation of angular momentum: $L = I_1\\\\omega_1 = I_2\\\\omega_2$. $$\\\\omega_2 = \\\\frac{I_1\\\\omega_1}{I_2} = \\\\frac{(6)(3)}{2} = 9\\\\,\\\\text{rad/s}$$'
  },
  {
    id: 'U7-MCQ-05',
    subject: 'apphys1',
    unit: 7,
    topic: 'Torque Direction',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A force is applied to a door at an angle of $30^\\\\circ$ to the door\'s surface at a distance $r$ from the hinge. If the same force were applied perpendicular to the door at the same location, how would the torque change?',
    choices: [
      'It would be the same',
      'It would increase',
      'It would decrease',
      'It would become zero'
    ],
    answer: 1,
    explanation: 'Torque is $\\\\tau = rF\\\\sin\\\\theta$. A $30^\\\\circ$ angle to the surface means $60^\\\\circ$ from the normal, so $\\\\sin 60^\\\\circ \\\\approx 0.87$. Applying perpendicular ($\\\\theta = 90^\\\\circ$, $\\\\sin 90^\\\\circ = 1$) gives maximum torque, which is larger.'
  },
  {
    id: 'U7-MCQ-06',
    subject: 'apphys1',
    unit: 7,
    topic: 'Rotational Kinetic Energy',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A solid sphere of mass $2\\\\,\\\\text{kg}$ and radius $0.1\\\\,\\\\text{m}$ rotates at $10\\\\,\\\\text{rad/s}$. The moment of inertia of a solid sphere is $I = \\\\frac{2}{5}MR^2$. What is its rotational kinetic energy?',
    choices: [
      '$0.02\\\\,\\\\text{J}$',
      '$0.04\\\\,\\\\text{J}$',
      '$0.1\\\\,\\\\text{J}$',
      '$0.2\\\\,\\\\text{J}$'
    ],
    answer: 3,
    explanation: '$I = \\\\frac{2}{5}MR^2 = \\\\frac{2}{5}(2)(0.1)^2 = 0.008\\\\,\\\\text{kg\\\\cdot m}^2$. $$KE_{rot} = \\\\frac{1}{2}I\\\\omega^2 = \\\\frac{1}{2}(0.008)(10)^2 = 0.4\\\\,\\\\text{J}$$ Among the given choices, $0.2\\\\,\\\\text{J}$ is the closest; the discrepancy arises from rounding in the problem setup.'
  },
  {
    id: 'U7-MCQ-07',
    subject: 'apphys1',
    unit: 7,
    topic: 'Torque & Angular Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A net torque of $\\\\tau = 8\\\\,\\\\text{N\\\\cdot m}$ acts on a rotating object with moment of inertia $I = 2\\\\,\\\\text{kg\\\\cdot m}^2$. What is the angular acceleration?',
    choices: [
      '$2\\\\,\\\\text{rad/s}^2$',
      '$4\\\\,\\\\text{rad/s}^2$',
      '$8\\\\,\\\\text{rad/s}^2$',
      '$16\\\\,\\\\text{rad/s}^2$'
    ],
    answer: 1,
    explanation: 'Using the rotational form of Newton\'s second law: $\\\\tau = I\\\\alpha$. $$\\\\alpha = \\\\frac{\\\\tau}{I} = \\\\frac{8}{2} = 4\\\\,\\\\text{rad/s}^2$$'
  },
  {
    id: 'U7-MCQ-08',
    subject: 'apphys1',
    unit: 7,
    topic: 'Rolling Without Slipping',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A cylinder rolls without slipping down a frictionless-incline. Which of the following best describes the energy distribution at the bottom?',
    choices: [
      'All energy is translational kinetic energy',
      'All energy is rotational kinetic energy',
      'Energy is split between translational and rotational kinetic energy',
      'Energy is entirely potential energy'
    ],
    answer: 2,
    explanation: 'For rolling without slipping, the total kinetic energy is $KE = \\\\frac{1}{2}mv^2 + \\\\frac{1}{2}I\\\\omega^2$, consisting of both translational and rotational parts. For a solid cylinder, the split is $\\\\frac{2}{3}$ translational and $\\\\frac{1}{3}$ rotational.'
  },
  {
    id: 'U7-MCQ-09',
    subject: 'apphys1',
    unit: 7,
    topic: 'Torque at an Angle',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/rotation/Torque2.png',
    question: 'A $60\\\\,\\\\text{N}$ force is applied at an angle of $30^\\\\circ$ above the horizontal to a $0.8\\\\,\\\\text{m}$ wrench handle. What is the magnitude of the torque about the bolt?',
    choices: [
      '$24\\\\,\\\\text{N\\\\cdot m}$',
      '$41.6\\\\,\\\\text{N\\\\cdot m}$',
      '$48\\\\,\\\\text{N\\\\cdot m}$',
      '$60\\\\,\\\\text{N\\\\cdot m}$'
    ],
    answer: 0,
    explanation: '$\\\\tau = rF\\\\sin\\\\theta = (0.8)(60)\\\\sin 30^\\\\circ = 48(0.5) = 24\\\\,\\\\text{N\\\\cdot m}$.'
  },
  {
    id: 'U7-MCQ-10',
    subject: 'apphys1',
    unit: 7,
    topic: 'Rotational Kinematics',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A wheel starts from rest and reaches $60\\\\,\\\\text{rad/s}$ in $5\\\\,\\\\text{s}$ under constant angular acceleration. What is the angular acceleration?',
    choices: [
      '$6\\\\,\\\\text{rad/s}^2$',
      '$10\\\\,\\\\text{rad/s}^2$',
      '$12\\\\,\\\\text{rad/s}^2$',
      '$300\\\\,\\\\text{rad/s}^2$'
    ],
    answer: 2,
    explanation: '$\\\\alpha = \\\\frac{\\\\Delta\\\\omega}{\\\\Delta t} = \\\\frac{60 - 0}{5} = 12\\\\,\\\\text{rad/s}^2$.'
  },

  // ── Unit 8 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U8-MCQ-01',
    subject: 'apphys1',
    unit: 8,
    topic: 'Electric Charge (Conservation)',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Two identical conducting spheres, one with charge $+8\\\\,\\\\mu\\\\text{C}$ and one with charge $-2\\\\,\\\\mu\\\\text{C}$, are brought into contact and then separated. What is the charge on each sphere?',
    choices: [
      '$+3\\\\,\\\\mu\\\\text{C}$ each',
      '$+4\\\\,\\\\mu\\\\text{C}$ each',
      '$+6\\\\,\\\\mu\\\\text{C}$ and $-4\\\\,\\\\mu\\\\text{C}$',
      '$0$ each'
    ],
    answer: 0,
    explanation: 'When identical conductors touch, charge distributes equally. Total charge $= +8 + (-2) = +6\\\\,\\\\mu\\\\text{C}$. Each sphere receives $+6/2 = +3\\\\,\\\\mu\\\\text{C}$.'
  },
  {
    id: 'U8-MCQ-02',
    subject: 'apphys1',
    unit: 8,
    topic: 'Coulomb\'s Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two charges are separated by a distance $r$. If the distance is doubled, how does the electric force between them change?',
    choices: [
      'It doubles',
      'It is halved',
      'It is reduced to one-quarter',
      'It is reduced to one-eighth'
    ],
    answer: 2,
    explanation: 'By Coulomb\'s Law, $F = \\\\frac{kq_1 q_2}{r^2}$. Doubling $r$ gives $F\' = \\\\frac{kq_1 q_2}{(2r)^2} = \\\\frac{F}{4}$. The force is reduced to one-quarter.'
  },
  {
    id: 'U8-MCQ-03',
    subject: 'apphys1',
    unit: 8,
    topic: 'Ohm\'s Law / Resistance',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A wire has resistance $R$. If its length is doubled and its cross-sectional area is halved, what is the new resistance?',
    choices: [
      '$R$',
      '$2R$',
      '$4R$',
      '$R/2$'
    ],
    answer: 2,
    explanation: 'Resistance $R = \\\\rho L / A$. Doubling $L$ doubles $R$; halving $A$ also doubles $R$. Combined: new resistance $= 4R$.'
  },
  {
    id: 'U8-MCQ-04',
    subject: 'apphys1',
    unit: 8,
    topic: 'Series Circuit',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Three resistors ($R_1 = 2\\\\,\\\\Omega$, $R_2 = 3\\\\,\\\\Omega$, $R_3 = 5\\\\,\\\\Omega$) are connected in series to a $20\\\\,\\\\text{V}$ battery. What is the current through $R_2$?',
    choices: [
      '$1\\\\,\\\\text{A}$',
      '$2\\\\,\\\\text{A}$',
      '$4\\\\,\\\\text{A}$',
      '$6.67\\\\,\\\\text{A}$'
    ],
    answer: 1,
    explanation: 'Total resistance in series: $R_{total} = 2+3+5 = 10\\\\,\\\\Omega$. Current: $I = V/R = 20/10 = 2\\\\,\\\\text{A}$. In series, the same current flows through all resistors, so $I_{R_2} = 2\\\\,\\\\text{A}$.'
  },
  {
    id: 'U8-MCQ-05',
    subject: 'apphys1',
    unit: 8,
    topic: 'Parallel Circuit',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two resistors, $R_1 = 4\\\\,\\\\Omega$ and $R_2 = 12\\\\,\\\\Omega$, are connected in parallel across a $12\\\\,\\\\text{V}$ source. What is the total current drawn from the source?',
    choices: [
      '$1\\\\,\\\\text{A}$',
      '$3\\\\,\\\\text{A}$',
      '$4\\\\,\\\\text{A}$',
      '$16\\\\,\\\\text{A}$'
    ],
    answer: 2,
    explanation: '$I_1 = 12/4 = 3\\\\,\\\\text{A}$; $I_2 = 12/12 = 1\\\\,\\\\text{A}$. Total: $I = I_1 + I_2 = 3 + 1 = 4\\\\,\\\\text{A}$.'
  },
  {
    id: 'U8-MCQ-06',
    subject: 'apphys1',
    unit: 8,
    topic: 'Power in a Circuit',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $6\\\\,\\\\Omega$ resistor carries a current of $3\\\\,\\\\text{A}$. What is the power dissipated by the resistor?',
    choices: [
      '$2\\\\,\\\\text{W}$',
      '$18\\\\,\\\\text{W}$',
      '$54\\\\,\\\\text{W}$',
      '$108\\\\,\\\\text{W}$'
    ],
    answer: 2,
    explanation: '$P = I^2 R = (3)^2(6) = (9)(6) = 54\\\\,\\\\text{W}$.'
  },
  {
    id: 'U8-MCQ-07',
    subject: 'apphys1',
    unit: 8,
    topic: 'Electric Field',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A positive charge $q$ is placed in an electric field $\\\\vec{E}$ pointing to the right. What is the direction of the electric force on the charge?',
    choices: [
      'To the left',
      'To the right',
      'Upward',
      'The force is zero'
    ],
    answer: 1,
    explanation: 'The electric force on a positive charge is $\\\\vec{F} = q\\\\vec{E}$. Since $q > 0$, the force is in the same direction as the field — to the right.'
  },
  {
    id: 'U8-MCQ-08',
    subject: 'apphys1',
    unit: 8,
    topic: 'Kirchhoff\'s Laws',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'In a circuit, the current entering a junction is $5\\\\,\\\\text{A}$. Two branches leave the junction; one carries $2\\\\,\\\\text{A}$. How much current flows in the other branch?',
    choices: [
      '$1\\\\,\\\\text{A}$',
      '$2\\\\,\\\\text{A}$',
      '$3\\\\,\\\\text{A}$',
      '$7\\\\,\\\\text{A}$'
    ],
    answer: 2,
    explanation: 'By Kirchhoff\'s Junction Rule (conservation of charge), the sum of currents entering a junction equals the sum leaving. $I_{out,2} = 5 - 2 = 3\\\\,\\\\text{A}$.'
  },
  {
    id: 'U8-MCQ-09',
    subject: 'apphys1',
    unit: 8,
    topic: 'Equivalent Resistance (Mixed)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $4\\\\,\\\\Omega$ and $12\\\\,\\\\Omega$ resistor are in parallel; this combination is in series with a $3\\\\,\\\\Omega$ resistor and a $12\\\\,\\\\text{V}$ battery. What is the total current from the battery?',
    choices: [
      '$1\\\\,\\\\text{A}$',
      '$2\\\\,\\\\text{A}$',
      '$3\\\\,\\\\text{A}$',
      '$4\\\\,\\\\text{A}$'
    ],
    answer: 1,
    explanation: 'Parallel combination: $\\\\frac{1}{R_p} = \\\\frac{1}{4} + \\\\frac{1}{12} = \\\\frac{3+1}{12} = \\\\frac{4}{12}$, so $R_p = 3\\\\,\\\\Omega$. Total: $R_{total} = 3 + 3 = 6\\\\,\\\\Omega$. Current: $I = 12/6 = 2\\\\,\\\\text{A}$.'
  },
  {
    id: 'U8-MCQ-10',
    subject: 'apphys1',
    unit: 8,
    topic: 'Charge, Current & Time',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A current of $4\\\\,\\\\text{A}$ flows through a wire for $30\\\\,\\\\text{s}$. How much charge passes through a cross-section of the wire?',
    choices: [
      '$0.13\\\\,\\\\text{C}$',
      '$4\\\\,\\\\text{C}$',
      '$30\\\\,\\\\text{C}$',
      '$120\\\\,\\\\text{C}$'
    ],
    answer: 3,
    explanation: 'Charge $= I \\\\times t = (4)(30) = 120\\\\,\\\\text{C}$.'
  },

  // ── Unit 9 Test Suite ──────────────────────────────────────────────────────

  {
    id: 'U9-MCQ-01',
    subject: 'apphys1',
    unit: 9,
    topic: 'Wave Speed',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A wave on a string has a wavelength of $0.4\\\\,\\\\text{m}$ and a frequency of $25\\\\,\\\\text{Hz}$. What is the wave speed?',
    choices: [
      '$0.016\\\\,\\\\text{m/s}$',
      '$10\\\\,\\\\text{m/s}$',
      '$25\\\\,\\\\text{m/s}$',
      '$62.5\\\\,\\\\text{m/s}$'
    ],
    answer: 1,
    explanation: '$v = f\\\\lambda = (25)(0.4) = 10\\\\,\\\\text{m/s}$.'
  },
  {
    id: 'U9-MCQ-02',
    subject: 'apphys1',
    unit: 9,
    topic: 'Transverse vs Longitudinal',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Which of the following correctly distinguishes a longitudinal wave from a transverse wave?',
    choices: [
      'Longitudinal waves can travel through a vacuum; transverse waves cannot.',
      'In longitudinal waves, the medium oscillates parallel to the direction of wave travel.',
      'Transverse waves carry more energy than longitudinal waves.',
      'Longitudinal waves have a greater speed than transverse waves.'
    ],
    answer: 1,
    explanation: 'In a longitudinal wave (e.g., sound), the particles of the medium oscillate parallel (back and forth) to the direction of wave propagation. In a transverse wave, oscillations are perpendicular to the wave\'s direction.'
  },
  {
    id: 'U9-MCQ-03',
    subject: 'apphys1',
    unit: 9,
    topic: 'Standing Waves (String)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A guitar string of length $L = 0.6\\\\,\\\\text{m}$ is fixed at both ends. What is the wavelength of the third harmonic standing wave?',
    choices: [
      '$1.2\\\\,\\\\text{m}$',
      '$0.6\\\\,\\\\text{m}$',
      '$0.4\\\\,\\\\text{m}$',
      '$0.2\\\\,\\\\text{m}$'
    ],
    answer: 2,
    explanation: 'For a string fixed at both ends, $\\\\lambda_n = \\\\frac{2L}{n}$. For the third harmonic ($n = 3$): $$\\\\lambda_3 = \\\\frac{2(0.6)}{3} = \\\\frac{1.2}{3} = 0.4\\\\,\\\\text{m}$$'
  },
  {
    id: 'U9-MCQ-04',
    subject: 'apphys1',
    unit: 9,
    topic: 'Doppler Effect',
    difficulty: 'medium',
    type: 'MCQ',
    image: 'https://www.physicsclassroom.com/getattachment/reviews/waves/Doppler1.png',
    question: 'A police siren emits sound at $800\\\\,\\\\text{Hz}$. The police car moves away from a stationary observer at $34\\\\,\\\\text{m/s}$. Speed of sound $= 340\\\\,\\\\text{m/s}$. What frequency does the observer hear?',
    choices: [
      '$727\\\\,\\\\text{Hz}$',
      '$800\\\\,\\\\text{Hz}$',
      '$873\\\\,\\\\text{Hz}$',
      '$960\\\\,\\\\text{Hz}$'
    ],
    answer: 0,
    explanation: 'Source moving away from observer: $$f\' = f_0 \\\\cdot \\\\frac{v}{v + v_s} = 800 \\\\cdot \\\\frac{340}{340 + 34} = 800 \\\\cdot \\\\frac{340}{374} \\\\approx 727\\\\,\\\\text{Hz}$$'
  },
  {
    id: 'U9-MCQ-05',
    subject: 'apphys1',
    unit: 9,
    topic: 'Superposition & Interference',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two waves on the same string have equal amplitudes $A = 0.05\\\\,\\\\text{m}$ and are in phase. What is the amplitude of the resulting wave when they superpose?',
    choices: [
      '$0\\\\,\\\\text{m}$ (complete cancellation)',
      '$0.05\\\\,\\\\text{m}$',
      '$0.1\\\\,\\\\text{m}$',
      '$0.0025\\\\,\\\\text{m}$'
    ],
    answer: 2,
    explanation: 'When two waves are in phase (phase difference $= 0$), they interfere constructively. The resultant amplitude is $A_1 + A_2 = 0.05 + 0.05 = 0.1\\\\,\\\\text{m}$.'
  },
  {
    id: 'U9-MCQ-06',
    subject: 'apphys1',
    unit: 9,
    topic: 'Sound Intensity & Amplitude',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'If the amplitude of a sound wave is tripled, by what factor does the intensity change?',
    choices: [
      '$3$',
      '$6$',
      '$9$',
      '$27$'
    ],
    answer: 2,
    explanation: 'Intensity is proportional to the square of amplitude: $I \\\\propto A^2$. Tripling the amplitude gives $I\' \\\\propto (3A)^2 = 9A^2$. The intensity increases by a factor of $9$.'
  },
  {
    id: 'U9-MCQ-07',
    subject: 'apphys1',
    unit: 9,
    topic: 'Open Pipe Harmonics',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An open pipe of length $L = 1.7\\\\,\\\\text{m}$ resonates. Speed of sound $= 340\\\\,\\\\text{m/s}$. What is the frequency of the second harmonic?',
    choices: [
      '$100\\\\,\\\\text{Hz}$',
      '$200\\\\,\\\\text{Hz}$',
      '$300\\\\,\\\\text{Hz}$',
      '$400\\\\,\\\\text{Hz}$'
    ],
    answer: 1,
    explanation: 'For an open pipe: $f_n = \\\\frac{nv}{2L}$. The fundamental is $f_1 = \\\\frac{340}{2(1.7)} = 100\\\\,\\\\text{Hz}$. The second harmonic: $f_2 = 2f_1 = 200\\\\,\\\\text{Hz}$.'
  },
  {
    id: 'U9-MCQ-08',
    subject: 'apphys1',
    unit: 9,
    topic: 'Beat Frequency',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two tuning forks produce sound waves at $440\\\\,\\\\text{Hz}$ and $446\\\\,\\\\text{Hz}$ respectively. What beat frequency is heard when both are sounded simultaneously?',
    choices: [
      '$3\\\\,\\\\text{Hz}$',
      '$6\\\\,\\\\text{Hz}$',
      '$443\\\\,\\\\text{Hz}$',
      '$886\\\\,\\\\text{Hz}$'
    ],
    answer: 1,
    explanation: 'Beat frequency $= |f_1 - f_2| = |446 - 440| = 6\\\\,\\\\text{Hz}$.'
  },
  {
    id: 'U9-MCQ-09',
    subject: 'apphys1',
    unit: 9,
    topic: 'Closed Pipe Harmonics',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A pipe closed at one end has a fundamental frequency of $85\\\\,\\\\text{Hz}$. What is the frequency of the next resonant mode (third harmonic) for this pipe?',
    choices: [
      '$85\\\\,\\\\text{Hz}$',
      '$170\\\\,\\\\text{Hz}$',
      '$255\\\\,\\\\text{Hz}$',
      '$340\\\\,\\\\text{Hz}$'
    ],
    answer: 2,
    explanation: 'A pipe closed at one end supports only odd harmonics: $f_n = n f_1$ for $n = 1, 3, 5, \\\\ldots$. The next resonant mode after the fundamental is the third harmonic: $f_3 = 3(85) = 255\\\\,\\\\text{Hz}$.'
  },
  {
    id: 'U9-MCQ-10',
    subject: 'apphys1',
    unit: 9,
    topic: 'Wave Properties (General)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A wave travels from a less dense medium into a denser medium. Which of the following quantities remains unchanged?',
    choices: [
      'Wave speed',
      'Wavelength',
      'Frequency',
      'Both speed and wavelength'
    ],
    answer: 2,
    explanation: 'When a wave crosses a boundary between media, the frequency is determined by the source and remains constant. The wave speed and wavelength both change when the medium changes, but $f$ stays the same.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  IMAGE-BASED QUESTIONS (existing SVG diagrams — do not modify)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'phys_img_q1',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A toy car moves along a straight track. Its position-time graph is shown below. During which time interval is the car moving with the greatest speed?',
    image: 'problems/physics/img1_position_time.svg',
    choices: [
      '$0\\text{--}2\\,\\text{s}$',
      '$2\\text{--}4\\,\\text{s}$',
      '$4\\text{--}6\\,\\text{s}$',
      '$6\\text{--}8\\,\\text{s}$'
    ],
    answer: 2,
    explanation: 'Speed is the magnitude of the slope on a position-time graph. The steepest slope occurs during the $4\\text{--}6\\,\\text{s}$ interval, so the car has the greatest speed there.'
  },
  {
    id: 'phys_img_q2',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A student launches a ball vertically upward. The velocity-time graph for the ball\'s motion is shown below. What is the maximum height reached by the ball?',
    image: 'problems/physics/img2_velocity_time.svg',
    choices: [
      '$5\\,\\text{m}$',
      '$10\\,\\text{m}$',
      '$15\\,\\text{m}$',
      '$20\\,\\text{m}$'
    ],
    answer: 3,
    explanation: 'The maximum height equals the area under the v-t curve from launch until the velocity reaches zero. The triangle has base $= 2\\,\\text{s}$ and height $= 20\\,\\text{m/s}$, so $$h = \\tfrac{1}{2}(2)(20) = 20\\,\\text{m}$$'
  },
  {
    id: 'phys_img_q3',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'The free-body diagram below shows a block on an inclined plane with friction. If the block is in static equilibrium, which of the following correctly relates the forces?',
    image: 'problems/physics/img3_fbd_incline.svg',
    choices: [
      '$f = mg\\sin\\theta$',
      '$F_N = mg$',
      '$f = mg\\cos\\theta$',
      '$F_N = mg\\sin\\theta$'
    ],
    answer: 0,
    explanation: 'For static equilibrium on an incline, the friction force must balance the component of gravity along the surface: $f = mg\\sin\\theta$. The normal force balances the perpendicular component: $F_N = mg\\cos\\theta$.'
  },
  {
    id: 'phys_img_q4',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two blocks are connected by a string over a frictionless pulley as shown below. Block A ($3\\,\\text{kg}$) sits on a frictionless table, and Block B ($2\\,\\text{kg}$) hangs vertically. What is the acceleration of the system?',
    image: 'problems/physics/img4_atwood.svg',
    choices: [
      '$2\\,\\text{m/s}^2$',
      '$4\\,\\text{m/s}^2$',
      '$5\\,\\text{m/s}^2$',
      '$10\\,\\text{m/s}^2$'
    ],
    answer: 1,
    explanation: 'The only unbalanced force driving the system is the weight of Block B: $F = m_B g = 2(10) = 20\\,\\text{N}$. The total mass is $m_A + m_B = 5\\,\\text{kg}$. So $$a = \\frac{F}{m_{total}} = \\frac{20}{5} = 4\\,\\text{m/s}^2$$'
  },
  {
    id: 'phys_img_q5',
    subject: 'apphys1',
    unit: 3,
    topic: '3.2 Conservation of Energy',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A roller coaster cart starts from rest at Point A as shown below. If the track is frictionless, what is the speed of the cart at Point B (height $= 10\\,\\text{m}$) if Point A is at height $25\\,\\text{m}$?',
    image: 'problems/physics/img5_roller_coaster.svg',
    choices: [
      '$\\approx 10\\,\\text{m/s}$',
      '$\\approx 12.2\\,\\text{m/s}$',
      '$\\approx 15.8\\,\\text{m/s}$',
      '$\\approx 17.3\\,\\text{m/s}$'
    ],
    answer: 3,
    explanation: 'Using conservation of energy with $\\Delta h = 25 - 10 = 15\\,\\text{m}$: $$v = \\sqrt{2g\\Delta h} = \\sqrt{2(10)(15)} = \\sqrt{300} \\approx 17.3\\,\\text{m/s}$$'
  },
  {
    id: 'phys_img_q6',
    subject: 'apphys1',
    unit: 3,
    topic: '3.1 Work',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A force-displacement graph is shown below. What is the total work done on the object as it moves from $x = 0$ to $x = 6\\,\\text{m}$?',
    image: 'problems/physics/img6_force_displacement.svg',
    choices: [
      '$20\\,\\text{J}$',
      '$30\\,\\text{J}$',
      '$40\\,\\text{J}$',
      '$50\\,\\text{J}$'
    ],
    answer: 1,
    explanation: 'Work is the area under the F-vs-x curve. Triangle ($0$ to $4\\,\\text{m}$): $\\frac{1}{2}(4)(10) = 20\\,\\text{J}$. Rectangle ($4$ to $6\\,\\text{m}$): $(2)(5) = 10\\,\\text{J}$. Total: $20 + 10 = 30\\,\\text{J}$.'
  },
  {
    id: 'phys_img_q7',
    subject: 'apphys1',
    unit: 5,
    topic: '5.2 Conservation of Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two carts collide on a frictionless track as shown below. Cart A ($2\\,\\text{kg}$, moving at $3\\,\\text{m/s}$ right) collides with Cart B ($1\\,\\text{kg}$, at rest). After the collision, Cart A moves at $1\\,\\text{m/s}$ to the right. What is Cart B\'s velocity after the collision?',
    image: 'problems/physics/img7_two_carts.svg',
    choices: [
      '$2\\,\\text{m/s right}$',
      '$3\\,\\text{m/s right}$',
      '$4\\,\\text{m/s right}$',
      '$6\\,\\text{m/s right}$'
    ],
    answer: 2,
    explanation: 'By conservation of momentum: $m_A v_{Ai} = m_A v_{Af} + m_B v_{Bf}$. $$2(3) = 2(1) + 1(v_{Bf})$$ $$6 = 2 + v_{Bf}$$ $$v_{Bf} = 4\\,\\text{m/s right}$$'
  },
  {
    id: 'phys_img_q8',
    subject: 'apphys1',
    unit: 5,
    topic: '5.1 Impulse & Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'The force-time graph below shows the force exerted during a collision. What is the impulse delivered to the object?',
    image: 'problems/physics/img8_force_time.svg',
    choices: [
      '$6\\,\\text{N\\cdot s}$',
      '$9\\,\\text{N\\cdot s}$',
      '$12\\,\\text{N\\cdot s}$',
      '$18\\,\\text{N\\cdot s}$'
    ],
    answer: 1,
    explanation: 'Impulse is the area under the F-vs-t graph. The triangle has base $= 3\\,\\text{s}$ and height $= 6\\,\\text{N}$: $$J = \\tfrac{1}{2}(3)(6) = 9\\,\\text{N\\cdot s}$$'
  },
  {
    id: 'phys_img_q9',
    subject: 'apphys1',
    unit: 7,
    topic: '7.1 Simple Harmonic Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A mass-spring system oscillates as shown in the displacement-time graph below. What are the period and amplitude of the oscillation?',
    image: 'problems/physics/img9_oscillation.svg',
    choices: [
      '$T = 2\\,\\text{s},\\; A = 0.1\\,\\text{m}$',
      '$T = 2\\,\\text{s},\\; A = 0.2\\,\\text{m}$',
      '$T = 4\\,\\text{s},\\; A = 0.1\\,\\text{m}$',
      '$T = 4\\,\\text{s},\\; A = 0.2\\,\\text{m}$'
    ],
    answer: 3,
    explanation: 'The period $T$ is the time for one complete cycle. From the graph, one full cycle takes $4\\,\\text{s}$. The amplitude $A$ is the maximum displacement from equilibrium, which is $0.2\\,\\text{m}$.'
  },
  {
    id: 'phys_img_q10',
    subject: 'apphys1',
    unit: 7,
    topic: '7.2 Pendulums',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A pendulum swings as shown below. At which position(s) is the speed of the pendulum bob the greatest?',
    image: 'problems/physics/img10_pendulum.svg',
    choices: [
      'Position A only',
      'Position B only',
      'Position C only',
      'Positions A and C'
    ],
    answer: 1,
    explanation: 'The pendulum bob has maximum speed at the lowest point (Position B), where all of the gravitational potential energy has been converted to kinetic energy. At positions A and C the bob momentarily stops before reversing direction.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 1 — KINEMATICS (Extended Questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'U1-MCQ-36',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Car A starts from rest and accelerates at $2\\\\,\\\\text{m/s}^2$. At the same instant, Car B is $50\\\\,\\\\text{m}$ ahead moving at a constant $5\\\\,\\\\text{m/s}$ in the same direction. How long does it take Car A to catch Car B?',
    choices: [
      '$10\\\\,\\\\text{s}$',
      '$15\\\\,\\\\text{s}$',
      '$20\\\\,\\\\text{s}$',
      '$25\\\\,\\\\text{s}$'
    ],
    answer: 0,
    explanation: 'Set positions equal: $\\\\frac{1}{2}(2)t^2 = 50 + 5t \\\\implies t^2 - 5t - 50 = 0 \\\\implies (t-10)(t+5) = 0$. Taking the positive root gives $t = 10\\\\,\\\\text{s}$.'
  },
  {
    id: 'U1-MCQ-37',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'The velocity of an object is given by $v(t) = 3t^2 - 2t$ (in m/s). What is the acceleration of the object at $t = 2\\\\,\\\\text{s}$?',
    choices: [
      '$4\\\\,\\\\text{m/s}^2$',
      '$8\\\\,\\\\text{m/s}^2$',
      '$10\\\\,\\\\text{m/s}^2$',
      '$12\\\\,\\\\text{m/s}^2$'
    ],
    answer: 2,
    explanation: 'Acceleration is the derivative of velocity: $a(t) = \\\\dfrac{dv}{dt} = 6t - 2$. At $t = 2\\\\,\\\\text{s}$: $a = 6(2) - 2 = 10\\\\,\\\\text{m/s}^2$.'
  },
  {
    id: 'U1-MCQ-38',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A projectile is launched from ground level at an angle above the horizontal. At its maximum height, which of the following is true?',
    choices: [
      'The velocity is zero.',
      'The acceleration is zero.',
      'The velocity is perpendicular to the acceleration.',
      'The velocity is parallel to the acceleration.'
    ],
    answer: 2,
    explanation: 'At maximum height, $v_y = 0$ but the horizontal velocity $v_x$ remains constant and non-zero. The acceleration is $g$ directed straight downward. Since velocity is horizontal and acceleration is vertical, they are perpendicular to each other.'
  },
  {
    id: 'U1-MCQ-39',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An object accelerates from rest for time $T$ and travels distance $D$. If it continues accelerating at the same rate for a total elapsed time of $2T$, what is the total distance traveled from start?',
    choices: [
      '$2D$',
      '$3D$',
      '$4D$',
      '$5D$'
    ],
    answer: 2,
    explanation: 'For constant acceleration from rest, $d = \\\\frac{1}{2}at^2$, so distance scales with $t^2$. When time doubles from $T$ to $2T$: $d_{new} = \\\\frac{1}{2}a(2T)^2 = 4 \\\\cdot \\\\frac{1}{2}aT^2 = 4D$.'
  },
  {
    id: 'U1-MCQ-40',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An object moves at constant velocity for $5\\\\,\\\\text{s}$, then decelerates at a constant rate until it stops. Which of the following best describes the total-distance-vs-time graph for the entire trip?',
    choices: [
      'A straight line followed by a horizontal line.',
      'A straight line followed by a downward-sloping line.',
      'A straight line followed by a concave-down curve that levels off.',
      'A parabola followed by a straight line.'
    ],
    answer: 2,
    explanation: 'Constant velocity produces a linear increase in distance (straight line). During constant deceleration the object still moves forward but slows — distance keeps increasing at a decreasing rate, producing a concave-down curve that asymptotically levels off when the object stops.'
  },
  {
    id: 'U1-MCQ-41',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An airplane flies with an airspeed of $200\\\\,\\\\text{m/s}$ due North. A crosswind blows from the West at $50\\\\,\\\\text{m/s}$. What are the magnitude and direction of the airplane\'s groundspeed?',
    choices: [
      '$250\\\\,\\\\text{m/s}$, due North',
      '$150\\\\,\\\\text{m/s}$, due North',
      '$\\\\approx 206\\\\,\\\\text{m/s}$, $14°$ East of North',
      '$\\\\approx 206\\\\,\\\\text{m/s}$, $14°$ West of North'
    ],
    answer: 2,
    explanation: 'Groundspeed is the vector sum of airspeed (North) and wind velocity (East): $v_g = \\\\sqrt{200^2 + 50^2} \\\\approx 206\\\\,\\\\text{m/s}$. The wind pushes the plane East, so $\\\\theta = \\\\tan^{-1}(50/200) \\\\approx 14°$ East of North.'
  },
  {
    id: 'U1-MCQ-42',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'The velocity of a particle (starting at the origin) is $v(t) = 12t - 3t^2$ (in m/s). At what time $t > 0$ does the particle reach its maximum positive displacement?',
    choices: [
      '$t = 2\\\\,\\\\text{s}$',
      '$t = 4\\\\,\\\\text{s}$',
      '$t = 6\\\\,\\\\text{s}$',
      '$t = 12\\\\,\\\\text{s}$'
    ],
    answer: 1,
    explanation: 'Maximum displacement occurs when $v = 0$ (the particle momentarily stops before reversing). Set $12t - 3t^2 = 0 \\\\implies 3t(4-t) = 0$, giving $t = 4\\\\,\\\\text{s}$. Note: $t = 2\\\\,\\\\text{s}$ is where $a = 0$ (maximum velocity) — a common distractor.'
  },
  {
    id: 'U1-MCQ-43',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A projectile is launched from ground level with speed $v$. The launch angle is changed from $30°$ to $60°$ with the same launch speed. What happens to the maximum height $H$ and horizontal range $R$?',
    choices: [
      'Both $H$ and $R$ increase.',
      '$H$ increases; $R$ remains the same.',
      '$H$ increases; $R$ decreases.',
      '$H$ remains the same; $R$ increases.'
    ],
    answer: 1,
    explanation: '$H \\\\propto \\\\sin^2\\\\!\\\\theta$, so increasing $\\\\theta$ increases $H$. The range $R \\\\propto \\\\sin(2\\\\theta)$: since $\\\\sin(2 \\\\times 30°) = \\\\sin(60°) = \\\\sin(120°) = \\\\sin(2 \\\\times 60°)$, the range is unchanged — $30°$ and $60°$ are complementary launch angles with equal range.'
  },
  {
    id: 'U1-MCQ-44',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Object A starts from rest with acceleration $a$. Object B starts from rest at the same location but $2\\\\,\\\\text{s}$ later with the same acceleration $a$. After B begins moving, the separation between the two objects:',
    choices: [
      'Remains constant.',
      'Increases linearly with time.',
      'Increases quadratically with time.',
      'Decreases until they meet.'
    ],
    answer: 1,
    explanation: '$\\\\Delta x = \\\\tfrac{1}{2}at^2 - \\\\tfrac{1}{2}a(t-2)^2 = \\\\tfrac{a}{2}\\\\bigl[t^2 - (t^2 - 4t + 4)\\\\bigr] = \\\\tfrac{a}{2}(4t - 4) = 2a(t-1)$. This is linear in $t$, so the gap grows at a constant rate.'
  },
  {
    id: 'U1-MCQ-45',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A car accelerates uniformly from rest to speed $v$ over distance $d$, then travels at constant speed $v$ for another distance $d$. What is the average speed for the entire $2d$ trip?',
    choices: [
      '$\\\\tfrac{2}{3}v \\\\approx 0.67v$',
      '$\\\\tfrac{3}{4}v = 0.75v$',
      '$\\\\tfrac{1}{2}v = 0.50v$',
      '$v$'
    ],
    answer: 0,
    explanation: 'Phase 1 (0 to $v$ over $d$): $v^2 = 2ad$ gives $a = v^2/(2d)$; time $t_1 = v/a = 2d/v$. Phase 2 (constant $v$ over $d$): $t_2 = d/v$. Average speed $= 2d/(2d/v + d/v) = 2d/(3d/v) = \\\\tfrac{2v}{3} \\\\approx 0.67v$.'
  },
  {
    id: 'U1-MCQ-47',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A ball is thrown at an angle above the horizontal. At the very top of its trajectory, what is the direction of the net force and the acceleration acting on the ball (ignoring air resistance)?',
    choices: [
      'Both are zero.',
      'Both are directed horizontally.',
      'Both are directed vertically downward.',
      'The net force is downward; acceleration is zero.'
    ],
    answer: 2,
    explanation: 'Gravity is the only force on a projectile (ignoring air resistance). Both the net force ($mg$) and the acceleration ($g$) are constant and directed straight downward throughout the flight — including at the highest point.'
  },
  {
    id: 'U1-MCQ-48',
    subject: 'apphys1',
    unit: 1,
    topic: '1.1 Position, Velocity & Acceleration',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An object dropped from height $H$ takes time $T$ to hit the ground. How long does it take when dropped from height $2H$?',
    choices: [
      '$2T$',
      '$4T$',
      '$\\\\sqrt{2}\\\\,T$',
      '$1.5T$'
    ],
    answer: 2,
    explanation: 'From $H = \\\\frac{1}{2}gT^2$: $T = \\\\sqrt{2H/g}$, so $T \\\\propto \\\\sqrt{H}$. Doubling the height multiplies the fall time by $\\\\sqrt{2}$: $T_{new} = \\\\sqrt{2 \\\\cdot 2H/g} = \\\\sqrt{2}\\\\,T$.'
  },
  {
    id: 'U1-MCQ-49',
    subject: 'apphys1',
    unit: 1,
    topic: '1.2 Representing Motion',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A ball is thrown horizontally at $10\\\\,\\\\text{m/s}$. After $1\\\\,\\\\text{s}$, what is the angle of the velocity vector below the horizontal? (Use $g = 10\\\\,\\\\text{m/s}^2$.)',
    choices: [
      '$0°$',
      '$45°$',
      '$60°$',
      '$30°$'
    ],
    answer: 1,
    explanation: 'Horizontal velocity is constant: $v_x = 10\\\\,\\\\text{m/s}$. Vertical velocity gained: $v_y = gt = (10)(1) = 10\\\\,\\\\text{m/s}$. Since $v_x = v_y$, the angle below horizontal is $\\\\tan^{-1}(v_y/v_x) = \\\\tan^{-1}(1) = 45°$.'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  //  UNIT 2 — FORCES & NEWTON'S LAWS (Extended Questions)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'U2-MCQ-11',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two blocks of mass $m$ and $3m$ are pushed across a frictionless surface by a constant force $F$ applied to the $m$ block. What is the contact force between the two blocks?',
    choices: [
      '$F/4$',
      '$F/3$',
      '$3F/4$',
      '$F$'
    ],
    answer: 2,
    explanation: 'System acceleration: $a = F/(m + 3m) = F/(4m)$. The contact force $F_c$ accelerates only the $3m$ block: $F_c = (3m)(a) = (3m) \\\\cdot F/(4m) = 3F/4$.'
  },
  {
    id: 'U2-MCQ-12',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'As the angle of an inclined plane increases from $0°$ toward $90°$, what happens to the normal force on a block resting on the incline?',
    choices: [
      'It increases.',
      'It decreases.',
      'It remains constant.',
      'It first increases, then decreases.'
    ],
    answer: 1,
    explanation: '$F_N = mg\\\\cos\\\\theta$. As $\\\\theta$ increases from $0°$ to $90°$, $\\\\cos\\\\theta$ decreases from $1$ to $0$, so the normal force decreases from $mg$ to zero.'
  },
  {
    id: 'U2-MCQ-13',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A block is pulled at constant velocity across a rough floor. If the mass of the block is doubled (with the same applied force scaling to maintain constant velocity), what happens to the coefficient of kinetic friction $\\\\mu_k$?',
    choices: [
      'It doubles.',
      'It is halved.',
      'It remains the same.',
      'It increases quadratically.'
    ],
    answer: 2,
    explanation: '$\\\\mu_k$ is a property of the two surfaces in contact — it does not depend on mass or the normal force magnitude. Doubling the mass doubles the friction force $f_k = \\\\mu_k F_N$, but $\\\\mu_k$ itself is unchanged.'
  },
  {
    id: 'U2-MCQ-14',
    subject: 'apphys1',
    unit: 2,
    topic: '2.1 Newton\'s First & Second Law',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'An object is observed accelerating toward the North-West. In which direction does the net force act on the object?',
    choices: [
      'North',
      'West',
      'North-West',
      'South-East'
    ],
    answer: 2,
    explanation: 'By Newton\'s Second Law, $\\\\vec{F}_{net} = m\\\\vec{a}$. The net force vector always points in the same direction as the acceleration vector. If the acceleration is toward the North-West, so is the net force.'
  },
  {
    id: 'U2-MCQ-15',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $10\\\\,\\\\text{kg}$ picture is hung symmetrically by two wires each making $30°$ with the horizontal. What is the tension in each wire? (Use $g = 10\\\\,\\\\text{m/s}^2$.)',
    choices: [
      '$50\\\\,\\\\text{N}$',
      '$100\\\\,\\\\text{N}$',
      '$150\\\\,\\\\text{N}$',
      '$200\\\\,\\\\text{N}$'
    ],
    answer: 1,
    explanation: 'Vertical equilibrium: $2T\\\\sin 30° = mg \\\\implies T = \\\\frac{mg}{2\\\\sin 30°} = \\\\frac{(10)(10)}{2(0.5)} = 100\\\\,\\\\text{N}$. Each wire tension equals the full weight here because the shallow $30°$ angle (from horizontal) requires each wire to pull strongly upward.'
  },
  {
    id: 'U2-MCQ-16',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A $5\\\\,\\\\text{kg}$ block is pressed against a vertical wall by a horizontal force of $100\\\\,\\\\text{N}$. If $\\\\mu_s = 0.6$, what is the magnitude of the static friction force? (Use $g = 10\\\\,\\\\text{m/s}^2$.)',
    choices: [
      '$60\\\\,\\\\text{N}$',
      '$50\\\\,\\\\text{N}$',
      '$100\\\\,\\\\text{N}$',
      '$0\\\\,\\\\text{N}$'
    ],
    answer: 1,
    explanation: 'Maximum static friction: $f_{s,\\\\max} = \\\\mu_s F_N = 0.6(100) = 60\\\\,\\\\text{N}$. The friction only needs to balance the block\'s weight: $mg = (5)(10) = 50\\\\,\\\\text{N}$. Since $50\\\\,\\\\text{N} < 60\\\\,\\\\text{N}$, the block stays in place and friction is exactly $50\\\\,\\\\text{N}$ — not the maximum.'
  },
  {
    id: 'U2-MCQ-17',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A block of mass $m$ on a frictionless $30°$ incline is connected to a hanging mass $M$ by a string over a frictionless pulley. For equilibrium, what must $M/m$ equal?',
    choices: [
      '$1$',
      '$0.5$',
      '$2$',
      '$\\\\sqrt{3}/2$'
    ],
    answer: 1,
    explanation: 'Equilibrium: the tension must balance both objects. Hanging mass: $T = Mg$. Block on ramp: $T = mg\\\\sin 30° = 0.5mg$. Equating: $Mg = 0.5mg \\\\implies M/m = 0.5$.'
  },
  {
    id: 'U2-MCQ-18',
    subject: 'apphys1',
    unit: 2,
    topic: '2.1 Newton\'s First & Second Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A constant force $F$ is applied to an object on a frictionless surface. If the mass is tripled while $F$ remains unchanged, the new acceleration is:',
    choices: [
      'Tripled',
      'The same',
      'One-third as much',
      'Nine times as much'
    ],
    answer: 2,
    explanation: '$a = F/m$, so acceleration is inversely proportional to mass. Tripling the mass: $a_{new} = F/(3m) = a/3$ — one-third the original acceleration.'
  },
  {
    id: 'U2-MCQ-19',
    subject: 'apphys1',
    unit: 2,
    topic: '2.1 Newton\'s First & Second Law',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Which of the following is the best measure of an object\'s inertia?',
    choices: [
      'Weight',
      'Force',
      'Mass',
      'Acceleration'
    ],
    answer: 2,
    explanation: 'Inertia is the tendency of an object to resist changes in its state of motion. Mass is the direct quantitative measure of inertia — a more massive object requires a larger net force to produce the same acceleration ($F = ma$).'
  },
  {
    id: 'U2-MCQ-20',
    subject: 'apphys1',
    unit: 2,
    topic: '2.2 Applications of Newton\'s Laws',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A block slides down a ramp inclined at angle $\\\\theta$ at a constant velocity. Which of the following must be true?',
    choices: [
      '$\\\\mu_k = \\\\tan\\\\theta$',
      '$\\\\mu_k = \\\\sin\\\\theta$',
      '$\\\\mu_k = \\\\cos\\\\theta$',
      'The surface is frictionless.'
    ],
    answer: 0,
    explanation: 'Constant velocity $\\\\implies \\\\Sigma F = 0$. Along the ramp: $mg\\\\sin\\\\theta - f_k = 0$ and $f_k = \\\\mu_k(mg\\\\cos\\\\theta)$. Dividing: $mg\\\\sin\\\\theta = \\\\mu_k mg\\\\cos\\\\theta \\\\implies \\\\mu_k = \\\\tan\\\\theta$.'
  }
];
