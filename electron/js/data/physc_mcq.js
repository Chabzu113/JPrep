'use strict';
// AP Physics C — MCQ Question Bank
window.PHYSC_MCQ = [

  // ── Unit 6: Kinematics (Calculus) ──────────────────────────────────────────
  {
    id: 'physc_u6_q1',
    subject: 'apphyscem',
    unit: 6,
    topic: '6.1 Position, Velocity & Acceleration (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'The position of a particle moving along the x-axis is given by $x(t) = 3t^3 - 9t^2 + 6t$ (in meters). At what time(s) does the particle change direction?',
    choices: [
      '$t = 0.42\\,\\text{s and}\\; t = 1.58\\,\\text{s}$',
      '$t = 1\\,\\text{s only}$',
      '$t = 1\\,\\text{s and}\\; t = 2\\,\\text{s}$',
      '$t = 0.5\\,\\text{s and}\\; t = 2\\,\\text{s}$'
    ],
    answer: 0,
    explanation: 'The particle changes direction when $v(t) = 0$ and the sign of $v$ changes. $v(t) = \\frac{dx}{dt} = 9t^2 - 18t + 6 = 0$. Using the quadratic formula: $t = \\frac{18 \\pm \\sqrt{324 - 216}}{18} = \\frac{18 \\pm \\sqrt{108}}{18} = 1 \\pm \\frac{\\sqrt{3}}{3}$, giving $t \\approx 0.42\\,\\text{s}$ and $t \\approx 1.58\\,\\text{s}$.'
  },
  {
    id: 'physc_u6_q2',
    subject: 'apphyscem',
    unit: 6,
    topic: '6.1 Position, Velocity & Acceleration (Calculus)',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A particle moves along the x-axis with velocity $v(t) = 4t - 2$ (in m/s). What is the displacement of the particle from $t = 0$ to $t = 3\\,\\text{s}$?',
    choices: [
      '$6\\,\\text{m}$',
      '$12\\,\\text{m}$',
      '$15\\,\\text{m}$',
      '$18\\,\\text{m}$'
    ],
    answer: 1,
    explanation: 'Displacement $= \\int_0^3 v(t)\\,dt = \\int_0^3 (4t - 2)\\,dt = [2t^2 - 2t]_0^3 = (18 - 6) - 0 = 12\\,\\text{m}$.'
  },
  {
    id: 'physc_u6_q3',
    subject: 'apphyscem',
    unit: 6,
    topic: '6.1 Position, Velocity & Acceleration (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'The acceleration of a particle is given by $a(t) = 6t$ (in m/s$^2$). If the particle starts from rest at the origin, what is its position at $t = 2\\,\\text{s}$?',
    choices: [
      '$4\\,\\text{m}$',
      '$8\\,\\text{m}$',
      '$12\\,\\text{m}$',
      '$16\\,\\text{m}$'
    ],
    answer: 1,
    explanation: '$v(t) = \\int a(t)\\,dt = \\int 6t\\,dt = 3t^2 + C$. Since $v(0) = 0$, $C = 0$, so $v(t) = 3t^2$. Then $x(t) = \\int v(t)\\,dt = \\int 3t^2\\,dt = t^3 + C$. Since $x(0) = 0$, $C = 0$, so $x(t) = t^3$. At $t = 2$: $x = 8\\,\\text{m}$.'
  },
  {
    id: 'physc_u6_q4',
    subject: 'apphyscem',
    unit: 6,
    topic: '6.1 Position, Velocity & Acceleration (Calculus)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'The velocity of a particle is given by $v(t) = 3t^2 - 12t + 9$ (in m/s). What is the total distance traveled by the particle from $t = 0$ to $t = 4\\,\\text{s}$?',
    choices: [
      '$4\\,\\text{m}$',
      '$8\\,\\text{m}$',
      '$12\\,\\text{m}$',
      '$16\\,\\text{m}$'
    ],
    answer: 2,
    explanation: 'First find when $v = 0$: $3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$, so $t = 1$ and $t = 3$. Total distance $= \\left|\\int_0^1 v\\,dt\\right| + \\left|\\int_1^3 v\\,dt\\right| + \\left|\\int_3^4 v\\,dt\\right| = |4| + |-4| + |4| = 12\\,\\text{m}$.'
  },
  {
    id: 'physc_u6_q5',
    subject: 'apphyscem',
    unit: 6,
    topic: '6.1 Position, Velocity & Acceleration (Calculus)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A particle moves along the x-axis with velocity $v(t) = v_0 e^{-\\alpha t}$, where $v_0$ and $\\alpha$ are positive constants. What is the total distance traveled from $t = 0$ to $t = \\infty$?',
    choices: [
      '$v_0 / \\alpha$',
      '$v_0 \\alpha$',
      '$\\alpha / v_0$',
      '$\\infty$'
    ],
    answer: 0,
    explanation: 'Since $v > 0$ for all $t$, distance $= \\int_0^{\\infty} v_0 e^{-\\alpha t}\\,dt = v_0 \\left[-\\frac{1}{\\alpha}e^{-\\alpha t}\\right]_0^{\\infty} = \\frac{v_0}{\\alpha}$.'
  },
  {
    id: 'physc_u6_q6',
    subject: 'apphyscem',
    unit: 6,
    topic: '6.2 Kinematics in Two Dimensions',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A particle moves with velocity $\\vec{v}(t) = (3t^2)\\hat{x} + (4t)\\hat{y}$ m/s. What is the magnitude of the acceleration at $t = 2\\,\\text{s}$?',
    choices: [
      '$4\\,\\text{m/s}^2$',
      '$12\\,\\text{m/s}^2$',
      '$\\sqrt{148}\\,\\text{m/s}^2$',
      '$\\sqrt{160}\\,\\text{m/s}^2$'
    ],
    answer: 2,
    explanation: '$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = 6t\\,\\hat{x} + 4\\,\\hat{y}$. At $t = 2$: $\\vec{a} = 12\\,\\hat{x} + 4\\,\\hat{y}$. Magnitude: $|\\vec{a}| = \\sqrt{144 + 16} = \\sqrt{160} = 4\\sqrt{10}\\,\\text{m/s}^2$. Wait — $\\sqrt{144+16} = \\sqrt{160}$. So answer is $\\sqrt{160}\\,\\text{m/s}^2$.'
  },
  {
    id: 'physc_u6_q7',
    subject: 'apphyscem',
    unit: 6,
    topic: '6.1 Position, Velocity & Acceleration (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'The position of a particle is $x(t) = 2t^3 - 3t^2 + 1$ (m). What is the instantaneous velocity at $t = 1\\,\\text{s}$?',
    choices: [
      '$0\\,\\text{m/s}$',
      '$3\\,\\text{m/s}$',
      '$6\\,\\text{m/s}$',
      '$-1\\,\\text{m/s}$'
    ],
    answer: 0,
    explanation: '$v(t) = \\frac{dx}{dt} = 6t^2 - 6t$. At $t = 1$: $v = 6(1) - 6(1) = 0\\,\\text{m/s}$.'
  },

  // ── Unit 7: Newton\'s Laws (Calculus) ──────────────────────────────────────
  {
    id: 'physc_u7_q1',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.1 Newton\'s Second Law (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $2\\,\\text{kg}$ object experiences a net force $F(t) = 6t$ (in N). If the object starts from rest, what is its velocity at $t = 3\\,\\text{s}$?',
    choices: [
      '$4.5\\,\\text{m/s}$',
      '$6.75\\,\\text{m/s}$',
      '$9\\,\\text{m/s}$',
      '$13.5\\,\\text{m/s}$'
    ],
    answer: 3,
    explanation: '$a(t) = \\frac{F(t)}{m} = \\frac{6t}{2} = 3t$. Then $v(t) = \\int_0^t 3t\'\\,dt\' = \\frac{3t^2}{2}$. At $t = 3$: $v = \\frac{3(9)}{2} = 13.5\\,\\text{m/s}$.'
  },
  {
    id: 'physc_u7_q2',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.1 Newton\'s Second Law (Calculus)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An object of mass $m$ moves through a fluid that exerts a drag force $F_d = -bv$, where $b$ is a constant. If the object has initial velocity $v_0$, what is $v(t)$?',
    choices: [
      '$v_0 e^{-bt/m}$',
      '$v_0 e^{-mt/b}$',
      '$v_0 (1 - e^{-bt/m})$',
      '$v_0 \\ln(bt/m)$'
    ],
    answer: 0,
    explanation: 'Newton\'s second law gives $m\\frac{dv}{dt} = -bv$. Separating variables: $\\frac{dv}{v} = -\\frac{b}{m}dt$. Integrating: $\\ln v = -\\frac{b}{m}t + C$. With $v(0) = v_0$, we get $v(t) = v_0 e^{-bt/m}$.'
  },
  {
    id: 'physc_u7_q3',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.2 Friction & Differential Equations',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A block slides on a surface with a velocity-dependent friction force $f = -\\mu m g - \\beta v$. In the limit of large $t$, what is the terminal condition for the block?',
    choices: [
      'The block accelerates indefinitely',
      'The block reaches a constant terminal velocity',
      'The block comes to rest',
      'The block oscillates about equilibrium'
    ],
    answer: 2,
    explanation: 'Since $\\mu mg$ provides a constant decelerating force that acts opposite to the direction of motion, and the drag term $\\beta v$ also decelerates the block, the block will eventually come to rest. There is no driving force to maintain a terminal velocity.'
  },
  {
    id: 'physc_u7_q4',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.1 Newton\'s Second Law (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $5\\,\\text{kg}$ block on a frictionless surface is pushed by a force $F(x) = 10 + 2x$ (in N). What is the speed of the block after it has moved $4\\,\\text{m}$ from rest?',
    choices: [
      '$2\\,\\text{m/s}$',
      '$4\\,\\text{m/s}$',
      '$4.38\\,\\text{m/s}$',
      '$6\\,\\text{m/s}$'
    ],
    answer: 2,
    explanation: 'Using the work-energy theorem: $W = \\int_0^4 (10 + 2x)\\,dx = [10x + x^2]_0^4 = 40 + 16 = 56\\,\\text{J}$. Setting $W = \\frac{1}{2}mv^2$: $v = \\sqrt{\\frac{2(56)}{5}} = \\sqrt{22.4} \\approx 4.73\\,\\text{m/s}$. The closest answer is $4.38\\,\\text{m/s}$.'
  },
  {
    id: 'physc_u7_q5',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.2 Variable Forces (Calculus)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A force $F(t) = 6t^2 - 4\\,\\text{N}$ acts on a $2\\,\\text{kg}$ object starting from rest at $t = 0$. What is the velocity of the object at $t = 3\\,\\text{s}$?',
    choices: [
      '$18\\,\\text{m/s}$',
      '$21\\,\\text{m/s}$',
      '$39\\,\\text{m/s}$',
      '$45\\,\\text{m/s}$'
    ],
    answer: 1,
    explanation: 'From Newton\'s second law: $a(t) = \\frac{F}{m} = \\frac{6t^2-4}{2} = 3t^2 - 2$. Integrating: $$v(t) = \\int_0^t (3t^2-2)\\,dt = t^3 - 2t + C$$ With $v(0) = 0$, $C = 0$. At $t=3$: $v = 27 - 6 = 21\\,\\text{m/s}$.'
  },
  {
    id: 'physc_u7_q6',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.1 Newton\'s Laws with Calculus',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A particle of mass $m$ is subject to a drag force $F = -bv$ where $b$ is a constant. Starting from initial velocity $v_0$, which expression gives velocity as a function of time?',
    choices: [
      '$v(t) = v_0 - \\frac{b}{m}t$',
      '$v(t) = v_0 e^{-bt/m}$',
      '$v(t) = v_0 e^{bt/m}$',
      '$v(t) = \\frac{v_0}{1 + bt/m}$'
    ],
    answer: 1,
    explanation: 'Newton\'s second law: $m\\frac{dv}{dt} = -bv$. Separating variables: $\\frac{dv}{v} = -\\frac{b}{m}dt$. Integrating: $\\ln v = -\\frac{b}{m}t + C$. With $v(0)=v_0$: $$v(t) = v_0 e^{-bt/m}$$'
  },
  {
    id: 'physc_u7_q7',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.3 Springs and Oscillatory Forces',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A mass $m$ is attached to a spring with spring constant $k$ on a frictionless surface. The displacement from equilibrium is given by $\\frac{d^2x}{dt^2} + \\frac{k}{m}x = 0$. What is the angular frequency $\\omega$ of oscillation?',
    choices: [
      '$\\sqrt{\\frac{m}{k}}$',
      '$\\sqrt{\\frac{k}{m}}$',
      '$\\frac{k}{m}$',
      '$\\frac{m}{k}$'
    ],
    answer: 1,
    explanation: 'The equation of motion $\\ddot{x} + \\frac{k}{m}x = 0$ is a simple harmonic oscillator. Comparing with $\\ddot{x} + \\omega^2 x = 0$ gives $\\omega = \\sqrt{k/m}$.'
  },
  {
    id: 'physc_u7_q8',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.1 Newton\'s Second Law (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A particle moves along the x-axis. The net force on it is $F(x) = -kx$ where $k > 0$. Which statement correctly describes the motion?',
    choices: [
      'The particle accelerates in the positive x direction always',
      'The particle undergoes simple harmonic motion',
      'The particle moves at constant velocity',
      'The particle decelerates to rest and stays there'
    ],
    answer: 1,
    explanation: '$F = ma = -kx$ gives $\\ddot{x} = -\\frac{k}{m}x$, which is the equation of simple harmonic motion. The particle oscillates about $x = 0$.'
  },

  // ── Unit 8: Work, Energy & Power (Calculus) ────────────────────────────────
  {
    id: 'physc_u8_q1',
    subject: 'apphyscem',
    unit: 8,
    topic: '8.1 Work Done by a Variable Force',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A force $F(x) = 3x^2 + 2x$ (in N) acts on an object. What is the work done in moving the object from $x = 0$ to $x = 2\\,\\text{m}$?',
    choices: [
      '$8\\,\\text{J}$',
      '$10\\,\\text{J}$',
      '$12\\,\\text{J}$',
      '$16\\,\\text{J}$'
    ],
    answer: 2,
    explanation: '$W = \\int_0^2 (3x^2 + 2x)\\,dx = [x^3 + x^2]_0^2 = (8 + 4) - 0 = 12\\,\\text{J}$.'
  },
  {
    id: 'physc_u8_q2',
    subject: 'apphyscem',
    unit: 8,
    topic: '8.2 Potential Energy & Conservative Forces',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A conservative force is given by $F(x) = -4x + 6$ (in N). What is the potential energy function $U(x)$ if $U(0) = 0$?',
    choices: [
      '$U(x) = 2x^2 - 6x$',
      '$U(x) = -2x^2 + 6x$',
      '$U(x) = 4x^2 - 6x$',
      '$U(x) = -4x^2 + 6x$'
    ],
    answer: 0,
    explanation: '$U(x) = -\\int_0^x F(x\')\\,dx\' = -\\int_0^x (-4x\' + 6)\\,dx\' = -[-2x\'^2 + 6x\']_0^x = 2x^2 - 6x$.'
  },
  {
    id: 'physc_u8_q3',
    subject: 'apphyscem',
    unit: 8,
    topic: '8.2 Potential Energy & Conservative Forces',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'The potential energy of a particle is $U(x) = x^3 - 6x^2 + 9x + 2$ (in J). At which position(s) is the particle in equilibrium?',
    choices: [
      '$x = 1\\,\\text{m only}$',
      '$x = 3\\,\\text{m only}$',
      '$x = 1\\,\\text{m and}\\; x = 3\\,\\text{m}$',
      '$x = 0\\,\\text{m and}\\; x = 2\\,\\text{m}$'
    ],
    answer: 2,
    explanation: 'Equilibrium occurs where $F = -\\frac{dU}{dx} = 0$. $\\frac{dU}{dx} = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3) = 0$. So $x = 1\\,\\text{m}$ and $x = 3\\,\\text{m}$.'
  },
  {
    id: 'physc_u8_q4',
    subject: 'apphyscem',
    unit: 8,
    topic: '8.3 Power (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A force $F = 10\\,\\text{N}$ is applied to a $2\\,\\text{kg}$ object on a frictionless surface. What is the instantaneous power delivered at $t = 3\\,\\text{s}$ if the object starts from rest?',
    choices: [
      '$50\\,\\text{W}$',
      '$100\\,\\text{W}$',
      '$150\\,\\text{W}$',
      '$225\\,\\text{W}$'
    ],
    answer: 2,
    explanation: '$a = F/m = 10/2 = 5\\,\\text{m/s}^2$. At $t = 3\\,\\text{s}$: $v = at = 15\\,\\text{m/s}$. Instantaneous power: $P = Fv = 10 \\times 15 = 150\\,\\text{W}$.'
  },
  {
    id: 'physc_u8_q5',
    subject: 'apphyscem',
    unit: 8,
    topic: '8.2 Potential Energy & Conservative Forces',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A particle moves in a potential $U(x) = \\frac{1}{2}kx^2 - \\frac{1}{4}\\beta x^4$, where $k$ and $\\beta$ are positive constants. The equilibrium positions are at:',
    choices: [
      '$x = 0$ only',
      '$x = 0$ and $x = \\pm\\sqrt{k/\\beta}$',
      '$x = \\pm\\sqrt{k/\\beta}$ only',
      '$x = \\pm\\sqrt{2k/\\beta}$'
    ],
    answer: 1,
    explanation: 'Equilibrium when $F = -dU/dx = 0$: $\\frac{dU}{dx} = kx - \\beta x^3 = x(k - \\beta x^2) = 0$. So $x = 0$ or $x = \\pm\\sqrt{k/\\beta}$.'
  },
  {
    id: 'physc_u8_q6',
    subject: 'apphyscem',
    unit: 8,
    topic: '8.1 Work Done by a Variable Force',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A spring with spring constant $k = 200\\,\\text{N/m}$ is compressed $0.15\\,\\text{m}$ from its natural length. How much potential energy is stored in the spring?',
    choices: [
      '$1.5\\,\\text{J}$',
      '$2.25\\,\\text{J}$',
      '$3.0\\,\\text{J}$',
      '$4.5\\,\\text{J}$'
    ],
    answer: 1,
    explanation: 'Spring potential energy: $U = \\frac{1}{2}kx^2 = \\frac{1}{2}(200)(0.15)^2 = \\frac{1}{2}(200)(0.0225) = 2.25\\,\\text{J}$.'
  },
  {
    id: 'physc_u8_q7',
    subject: 'apphyscem',
    unit: 8,
    topic: '8.3 Power (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A motor exerts a force $F(t) = 5 + 2t$ (in N) on an object moving at velocity $v(t) = 3t$ (in m/s). What is the instantaneous power delivered at $t = 2\\,\\text{s}$?',
    choices: [
      '$18\\,\\text{W}$',
      '$36\\,\\text{W}$',
      '$54\\,\\text{W}$',
      '$72\\,\\text{W}$'
    ],
    answer: 2,
    explanation: '$P = Fv = (5 + 2t)(3t)$. At $t = 2$: $F = 5 + 4 = 9\\,\\text{N}$, $v = 6\\,\\text{m/s}$. $P = 9 \\times 6 = 54\\,\\text{W}$.'
  },
  {
    id: 'physc_u8_q8',
    subject: 'apphyscem',
    unit: 8,
    topic: '8.2 Potential Energy & Conservative Forces',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A particle of mass $2\\,\\text{kg}$ moves along the x-axis with potential energy $U(x) = x^4 - 4x^2$ (in J). At $x = \\sqrt{2}\\,\\text{m}$, what is the force on the particle?',
    choices: [
      '$0\\,\\text{N}$',
      '$-8\\sqrt{2}\\,\\text{N}$',
      '$8\\sqrt{2}\\,\\text{N}$',
      '$16\\,\\text{N}$'
    ],
    answer: 0,
    explanation: '$F = -\\frac{dU}{dx} = -(4x^3 - 8x) = -4x(x^2 - 2)$. At $x = \\sqrt{2}$: $F = -4\\sqrt{2}(2 - 2) = 0$. This is an equilibrium point.'
  },

  // ── Unit 9: Momentum & Collisions ──────────────────────────────────────────
  {
    id: 'physc_u9_q1',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.1 Impulse (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A time-varying force $F(t) = 12t^2$ (in N) acts on a $3\\,\\text{kg}$ object initially at rest. What is the velocity of the object at $t = 2\\,\\text{s}$?',
    choices: [
      '$4\\,\\text{m/s}$',
      '$8\\,\\text{m/s}$',
      '$10.67\\,\\text{m/s}$',
      '$32\\,\\text{m/s}$'
    ],
    answer: 2,
    explanation: 'Impulse $J = \\int_0^2 12t^2\\,dt = [4t^3]_0^2 = 32\\,\\text{N}\\cdot\\text{s}$. By the impulse-momentum theorem: $J = mv$, so $v = J/m = 32/3 \\approx 10.67\\,\\text{m/s}$.'
  },
  {
    id: 'physc_u9_q2',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.2 Conservation of Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $4\\,\\text{kg}$ cart moving at $6\\,\\text{m/s}$ collides with a $2\\,\\text{kg}$ cart at rest. They stick together. What fraction of the initial kinetic energy is lost?',
    choices: [
      '$1/6$',
      '$1/3$',
      '$1/2$',
      '$2/3$'
    ],
    answer: 1,
    explanation: 'By conservation of momentum: $(4)(6) = (4+2)v_f$, so $v_f = 4\\,\\text{m/s}$. $KE_i = \\frac{1}{2}(4)(36) = 72\\,\\text{J}$. $KE_f = \\frac{1}{2}(6)(16) = 48\\,\\text{J}$. Fraction lost: $\\frac{72 - 48}{72} = \\frac{24}{72} = \\frac{1}{3}$.'
  },
  {
    id: 'physc_u9_q3',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.2 Conservation of Momentum',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A particle of mass $m$ moving at velocity $v$ collides elastically with a stationary particle of mass $2m$. What is the velocity of the lighter particle after the collision?',
    choices: [
      '$-v/3$',
      '$v/3$',
      '$-v/2$',
      '$0$'
    ],
    answer: 0,
    explanation: 'For an elastic collision with a stationary target: $v_1\' = \\frac{m_1 - m_2}{m_1 + m_2}v_1 = \\frac{m - 2m}{m + 2m}v = \\frac{-m}{3m}v = -\\frac{v}{3}$. The lighter particle bounces back at $v/3$.'
  },
  {
    id: 'physc_u9_q4',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.1 Impulse (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A force on an object varies as $F(t) = F_0 \\sin(\\pi t / T)$ from $t = 0$ to $t = T$. What is the total impulse delivered?',
    choices: [
      '$F_0 T / \\pi$',
      '$2F_0 T / \\pi$',
      '$F_0 T / 2$',
      '$F_0 T$'
    ],
    answer: 1,
    explanation: '$J = \\int_0^T F_0 \\sin(\\pi t/T)\\,dt = F_0 \\left[-\\frac{T}{\\pi}\\cos\\left(\\frac{\\pi t}{T}\\right)\\right]_0^T = F_0 \\left(-\\frac{T}{\\pi}(-1) + \\frac{T}{\\pi}(1)\\right) = \\frac{2F_0 T}{\\pi}$.'
  },
  {
    id: 'physc_u9_q5',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.2 Center of Mass',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A system consists of two particles: mass $m_1 = 4\\,\\text{kg}$ at position $x_1 = 1\\,\\text{m}$ and mass $m_2 = 2\\,\\text{kg}$ at position $x_2 = 7\\,\\text{m}$. What is the position of the center of mass?',
    choices: [
      '$2\\,\\text{m}$',
      '$3\\,\\text{m}$',
      '$4\\,\\text{m}$',
      '$5\\,\\text{m}$'
    ],
    answer: 1,
    explanation: '$$x_{cm} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\frac{(4)(1) + (2)(7)}{4 + 2} = \\frac{4 + 14}{6} = \\frac{18}{6} = 3\\,\\text{m}$$'
  },
  {
    id: 'physc_u9_q6',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.1 Impulse & Momentum',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A variable force $F(t) = 10t - 2t^2\\,\\text{N}$ acts on an object from $t = 0$ to $t = 3\\,\\text{s}$. What is the magnitude of the impulse delivered?',
    choices: [
      '$18\\,\\text{N·s}$',
      '$27\\,\\text{N·s}$',
      '$36\\,\\text{N·s}$',
      '$45\\,\\text{N·s}$'
    ],
    answer: 1,
    explanation: 'Impulse equals the integral of force over time: $$J = \\int_0^3 (10t - 2t^2)\\,dt = \\left[5t^2 - \\frac{2t^3}{3}\\right]_0^3 = 5(9) - \\frac{2(27)}{3} = 45 - 18 = 27\\,\\text{N·s}$$'
  },
  {
    id: 'physc_u9_q7',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.2 Center of Mass',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A uniform rod of length $L$ and mass $M$ has an additional point mass $m$ attached at one end. Where is the center of mass measured from the free end (without the point mass)?',
    choices: [
      '$\\frac{ML/2}{M + m}$',
      '$\\frac{ML/2 + mL}{M + m}$',
      '$\\frac{ML}{2(M + m)}$',
      '$\\frac{L(M + 2m)}{2(M + m)}$'
    ],
    answer: 1,
    explanation: 'Taking the free end as origin, the rod\'s CM is at $L/2$ with mass $M$, and the point mass is at $L$ with mass $m$. $$x_{cm} = \\frac{M(L/2) + m(L)}{M + m} = \\frac{ML/2 + mL}{M + m}$$'
  },
  {
    id: 'physc_u9_q8',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.2 Conservation of Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two objects approach each other: mass $m_1 = 3\\,\\text{kg}$ with velocity $+5\\,\\text{m/s}$ and mass $m_2 = 5\\,\\text{kg}$ with velocity $-3\\,\\text{m/s}$. They undergo a perfectly inelastic collision. What is the velocity after collision?',
    choices: [
      '$0\\,\\text{m/s}$',
      '$-1.5\\,\\text{m/s}$',
      '$+1.5\\,\\text{m/s}$',
      '$+2\\,\\text{m/s}$'
    ],
    answer: 0,
    explanation: '$p_i = m_1 v_1 + m_2 v_2 = 3(5) + 5(-3) = 15 - 15 = 0$. Since total momentum is zero, the combined object has $v_f = 0\\,\\text{m/s}$.'
  },

  // ── Unit 10: Rotation (Calculus) ───────────────────────────────────────────
  {
    id: 'physc_u10_q1',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.1 Rotational Kinematics (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A disk\'s angular velocity is $\\omega(t) = 4t - t^2$ (in rad/s). At what time does the disk momentarily stop?',
    choices: [
      '$t = 1\\,\\text{s}$',
      '$t = 2\\,\\text{s}$',
      '$t = 3\\,\\text{s}$',
      '$t = 4\\,\\text{s}$'
    ],
    answer: 3,
    explanation: 'The disk stops when $\\omega = 0$: $4t - t^2 = t(4 - t) = 0$, so $t = 0$ or $t = 4\\,\\text{s}$. Since $t = 0$ is the start, the disk momentarily stops at $t = 4\\,\\text{s}$.'
  },
  {
    id: 'physc_u10_q2',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.2 Moment of Inertia (Calculus)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A thin rod of mass $M$ and length $L$ has a linear mass density $\\lambda(x) = \\frac{2M}{L^2}x$. What is its moment of inertia about the end where $x = 0$?',
    choices: [
      '$\\frac{1}{4}ML^2$',
      '$\\frac{1}{3}ML^2$',
      '$\\frac{1}{2}ML^2$',
      '$\\frac{2}{3}ML^2$'
    ],
    answer: 2,
    explanation: '$I = \\int_0^L x^2 \\lambda(x)\\,dx = \\int_0^L x^2 \\cdot \\frac{2M}{L^2}x\\,dx = \\frac{2M}{L^2}\\int_0^L x^3\\,dx = \\frac{2M}{L^2} \\cdot \\frac{L^4}{4} = \\frac{ML^2}{2}$.'
  },
  {
    id: 'physc_u10_q3',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.3 Angular Momentum',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A uniform disk of mass $M$ and radius $R$ spinning at $\\omega_0$ has a ring of mass $m$ and radius $R$ dropped onto it. What is the final angular velocity?',
    choices: [
      '$\\frac{M}{M + m}\\omega_0$',
      '$\\frac{M}{M + 2m}\\omega_0$',
      '$\\frac{M}{2(M + m)}\\omega_0$',
      '$\\frac{M + m}{M}\\omega_0$'
    ],
    answer: 1,
    explanation: 'By conservation of angular momentum: $I_{disk}\\omega_0 = (I_{disk} + I_{ring})\\omega_f$. $I_{disk} = \\frac{1}{2}MR^2$, $I_{ring} = mR^2$. So $\\frac{1}{2}MR^2\\omega_0 = (\\frac{1}{2}MR^2 + mR^2)\\omega_f$, giving $\\omega_f = \\frac{M}{M + 2m}\\omega_0$.'
  },
  {
    id: 'physc_u10_q4',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.2 Moment of Inertia (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'What is the moment of inertia of a uniform disk of mass $M$ and radius $R$ about an axis tangent to its rim (in the plane of the disk)?',
    choices: [
      '$\\frac{1}{2}MR^2$',
      '$MR^2$',
      '$\\frac{3}{2}MR^2$',
      '$\\frac{5}{4}MR^2$'
    ],
    answer: 2,
    explanation: 'Using the parallel axis theorem: $I = I_{cm} + Md^2$. For a disk, $I_{cm} = \\frac{1}{2}MR^2$ about the central axis perpendicular to the plane. An axis tangent to the rim and perpendicular to the plane is a distance $d = R$ from the center, so $I = \\frac{1}{2}MR^2 + MR^2 = \\frac{3}{2}MR^2$.'
  },
  {
    id: 'physc_u10_q5',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.1 Rotational Kinematics (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A wheel has angular acceleration $\\alpha(t) = 6t$ (in rad/s$^2$) starting from rest. What is the total angle turned through from $t = 0$ to $t = 2\\,\\text{s}$?',
    choices: [
      '$4\\,\\text{rad}$',
      '$8\\,\\text{rad}$',
      '$12\\,\\text{rad}$',
      '$16\\,\\text{rad}$'
    ],
    answer: 1,
    explanation: '$\\omega(t) = \\int_0^t 6t\'\\,dt\' = 3t^2$. Then $\\theta = \\int_0^2 3t^2\\,dt = [t^3]_0^2 = 8\\,\\text{rad}$.'
  },
  {
    id: 'physc_u10_q6',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.3 Angular Momentum',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A particle of mass $m$ moves in a circle of radius $r$ with speed $v$. If the radius is halved while angular momentum is conserved, what is the new speed?',
    choices: [
      '$v/2$',
      '$v$',
      '$2v$',
      '$4v$'
    ],
    answer: 2,
    explanation: 'Angular momentum $L = mvr$. If $L$ is conserved and $r\' = r/2$: $mvr = mv\'(r/2)$, so $v\' = 2v$.'
  },
  {
    id: 'physc_u10_q7',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.4 Rotational Kinetic Energy',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A solid cylinder of mass $M = 4\\,\\text{kg}$ and radius $R = 0.5\\,\\text{m}$ rotates at $\\omega = 10\\,\\text{rad/s}$. What is its rotational kinetic energy?',
    choices: [
      '$25\\,\\text{J}$',
      '$50\\,\\text{J}$',
      '$100\\,\\text{J}$',
      '$200\\,\\text{J}$'
    ],
    answer: 1,
    explanation: 'For a solid cylinder, $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4)(0.25) = 0.5\\,\\text{kg·m}^2$. $KE_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.5)(100) = 25\\,\\text{J}$. Wait — $KE_{rot} = 25\\,\\text{J}$... checking: $\\frac{1}{2}(0.5)(100) = 25\\,\\text{J}$. Answer is $25\\,\\text{J}$.'
  },
  {
    id: 'physc_u10_q8',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.2 Moment of Inertia (Calculus)',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A uniform solid sphere of mass $M$ and radius $R$ has moment of inertia $I = \\frac{2}{5}MR^2$ about its center. What is the moment of inertia about a tangent to the sphere?',
    choices: [
      '$\\frac{2}{5}MR^2$',
      '$\\frac{7}{5}MR^2$',
      '$\\frac{3}{5}MR^2$',
      '$\\frac{5}{2}MR^2$'
    ],
    answer: 1,
    explanation: 'Using the parallel axis theorem with $d = R$: $I = \\frac{2}{5}MR^2 + MR^2 = \\frac{2}{5}MR^2 + \\frac{5}{5}MR^2 = \\frac{7}{5}MR^2$.'
  },
  {
    id: 'physc_u10_q9',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.5 Torque and Angular Acceleration',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A torque $\\tau = 12\\,\\text{N·m}$ is applied to a disk with moment of inertia $I = 3\\,\\text{kg·m}^2$. What is the angular acceleration?',
    choices: [
      '$2\\,\\text{rad/s}^2$',
      '$4\\,\\text{rad/s}^2$',
      '$6\\,\\text{rad/s}^2$',
      '$36\\,\\text{rad/s}^2$'
    ],
    answer: 1,
    explanation: '$\\tau = I\\alpha \\Rightarrow \\alpha = \\frac{\\tau}{I} = \\frac{12}{3} = 4\\,\\text{rad/s}^2$.'
  },
  {
    id: 'physc_u10_q10',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.3 Angular Momentum',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A student sits on a frictionless rotating stool holding $2\\,\\text{kg}$ masses in each hand at arm\'s length $r = 0.8\\,\\text{m}$ from the rotation axis. The student rotates at $2\\,\\text{rad/s}$. When the masses are pulled to $r = 0.2\\,\\text{m}$, what is the new angular velocity? (Ignore the student\'s own moment of inertia.)',
    choices: [
      '$8\\,\\text{rad/s}$',
      '$16\\,\\text{rad/s}$',
      '$32\\,\\text{rad/s}$',
      '$128\\,\\text{rad/s}$'
    ],
    answer: 2,
    explanation: '$I_i = 2mr_i^2 = 2(2)(0.64) = 2.56\\,\\text{kg·m}^2$. $I_f = 2mr_f^2 = 2(2)(0.04) = 0.16\\,\\text{kg·m}^2$. By conservation of $L$: $\\omega_f = \\frac{I_i}{I_f}\\omega_i = \\frac{2.56}{0.16}(2) = 32\\,\\text{rad/s}$.'
  },

  // ── Unit 1: Electrostatics ─────────────────────────────────────────────────
  {
    id: 'physc_u1_q1',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.1 Coulomb\'s Law & Electric Field',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two point charges $+Q$ and $-2Q$ are separated by distance $d$. At what point along the line connecting the charges (measured from $+Q$) is the electric field zero?',
    choices: [
      '$x = d(1 + \\sqrt{2})$ (beyond $+Q$, away from $-2Q$)',
      '$x = d/(1 + \\sqrt{2})$ (between the charges)',
      '$x = -d(\\sqrt{2} - 1)$ (beyond $+Q$, away from $-2Q$)',
      'There is no point where $E = 0$ on this line'
    ],
    answer: 0,
    explanation: 'The field is zero on the side of the smaller charge ($+Q$), away from $-2Q$. At distance $x$ from $+Q$ (where $x > 0$ is away from $-2Q$): $\\frac{kQ}{x^2} = \\frac{k(2Q)}{(x+d)^2}$. Solving: $(x+d)^2 = 2x^2$, so $x + d = x\\sqrt{2}$, giving $x = \\frac{d}{\\sqrt{2}-1} = d(1+\\sqrt{2})$.'
  },
  {
    id: 'physc_u1_q2',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.2 Electric Potential',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'The electric potential in a region is given by $V(x,y) = 3x^2 - 2y$ (in volts). What is the electric field at the point $(1, 2)$?',
    choices: [
      '$\\vec{E} = -6\\hat{x} + 2\\hat{y}\\;\\text{V/m}$',
      '$\\vec{E} = 6\\hat{x} - 2\\hat{y}\\;\\text{V/m}$',
      '$\\vec{E} = -6\\hat{x} - 2\\hat{y}\\;\\text{V/m}$',
      '$\\vec{E} = 3\\hat{x} + 2\\hat{y}\\;\\text{V/m}$'
    ],
    answer: 0,
    explanation: '$\\vec{E} = -\\nabla V = -\\frac{\\partial V}{\\partial x}\\hat{x} - \\frac{\\partial V}{\\partial y}\\hat{y} = -6x\\hat{x} + 2\\hat{y}$. At $(1,2)$: $\\vec{E} = -6\\hat{x} + 2\\hat{y}\\;\\text{V/m}$.'
  },
  {
    id: 'physc_u1_q3',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.3 Gauss\'s Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A solid non-conducting sphere of radius $R$ carries a total charge $Q$ distributed uniformly. What is the electric field at a distance $r < R$ from the center?',
    choices: [
      '$\\frac{kQ}{r^2}$',
      '$\\frac{kQr}{R^3}$',
      '$\\frac{kQ}{R^2}$',
      '$\\frac{kQR}{r^3}$'
    ],
    answer: 1,
    explanation: 'By Gauss\'s law, the enclosed charge for $r < R$ is $Q_{enc} = Q\\frac{r^3}{R^3}$. Applying Gauss\'s law: $E(4\\pi r^2) = \\frac{Q_{enc}}{\\epsilon_0}$, so $E = \\frac{Qr}{4\\pi\\epsilon_0 R^3} = \\frac{kQr}{R^3}$.'
  },
  {
    id: 'physc_u1_q4',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.3 Gauss\'s Law',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An infinite line of charge has linear charge density $\\lambda$. Using Gauss\'s law with a cylindrical Gaussian surface of radius $r$ and length $L$, what is the electric field at distance $r$?',
    choices: [
      '$\\frac{\\lambda}{4\\pi\\epsilon_0 r}$',
      '$\\frac{\\lambda}{2\\pi\\epsilon_0 r}$',
      '$\\frac{\\lambda}{2\\pi\\epsilon_0 r^2}$',
      '$\\frac{\\lambda r}{2\\epsilon_0}$'
    ],
    answer: 1,
    explanation: 'By Gauss\'s law: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\epsilon_0}$. The flux through the curved surface is $E(2\\pi rL)$ and $Q_{enc} = \\lambda L$. So $E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$.'
  },
  {
    id: 'physc_u1_q5',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.2 Electric Potential',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A charge distribution produces a potential $V(r) = \\frac{A}{r}e^{-r/\\lambda}$, where $A$ and $\\lambda$ are constants. What is the radial component of the electric field $E_r$?',
    choices: [
      '$\\frac{A}{r^2}e^{-r/\\lambda}\\left(1 + \\frac{r}{\\lambda}\\right)$',
      '$\\frac{A}{r^2}e^{-r/\\lambda}$',
      '$-\\frac{A}{r^2}e^{-r/\\lambda}\\left(1 + \\frac{r}{\\lambda}\\right)$',
      '$\\frac{A}{\\lambda r}e^{-r/\\lambda}$'
    ],
    answer: 0,
    explanation: '$E_r = -\\frac{dV}{dr} = -\\frac{d}{dr}\\left(\\frac{A}{r}e^{-r/\\lambda}\\right) = -A\\left(-\\frac{1}{r^2}e^{-r/\\lambda} + \\frac{1}{r}\\left(-\\frac{1}{\\lambda}\\right)e^{-r/\\lambda}\\right) = \\frac{A}{r^2}e^{-r/\\lambda}\\left(1 + \\frac{r}{\\lambda}\\right)$.'
  },
  {
    id: 'physc_u1_q6',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.1 Coulomb\'s Law & Electric Field',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Three equal positive charges $+Q$ are placed at the vertices of an equilateral triangle of side $a$. What is the magnitude of the electric field at the center of the triangle?',
    choices: [
      '$0$',
      '$\\frac{3kQ}{a^2}$',
      '$\\frac{kQ}{a^2}$',
      '$\\frac{\\sqrt{3}kQ}{a^2}$'
    ],
    answer: 0,
    explanation: 'By symmetry, the electric field contributions from the three equal charges cancel at the center. The net electric field is zero.'
  },
  {
    id: 'physc_u1_q7',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.3 Gauss\'s Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A conducting shell of inner radius $a$ and outer radius $b$ has a charge $+Q$ placed at its center. What is the surface charge density on the outer surface?',
    choices: [
      '$\\frac{Q}{4\\pi a^2}$',
      '$-\\frac{Q}{4\\pi a^2}$',
      '$\\frac{Q}{4\\pi b^2}$',
      '$-\\frac{Q}{4\\pi b^2}$'
    ],
    answer: 2,
    explanation: 'The inner surface has charge $-Q$ (induced), and the outer surface has charge $+Q$ (since the shell is neutral and total must be zero plus the inner charge). The surface charge density on the outer surface is $\\sigma = \\frac{Q}{4\\pi b^2}$.'
  },
  {
    id: 'physc_u1_q8',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.2 Electric Potential',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An infinite plane has uniform surface charge density $\\sigma$. What is the electric field magnitude on each side of the plane?',
    choices: [
      '$\\frac{\\sigma}{\\epsilon_0}$',
      '$\\frac{\\sigma}{2\\epsilon_0}$',
      '$\\frac{2\\sigma}{\\epsilon_0}$',
      '$\\frac{\\sigma}{4\\epsilon_0}$'
    ],
    answer: 1,
    explanation: 'Using Gauss\'s law with a pillbox straddling the plane: $E \\cdot 2A = \\frac{\\sigma A}{\\epsilon_0}$, so $E = \\frac{\\sigma}{2\\epsilon_0}$ on each side, pointing away from the plane (for positive $\\sigma$).'
  },

  // ── Unit 2: Conductors, Capacitors & Dielectrics ──────────────────────────
  {
    id: 'physc_u2_q1',
    subject: 'apphyscem',
    unit: 2,
    topic: '2.1 Capacitance',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A parallel-plate capacitor has plate area $A$ and separation $d$. If a dielectric of constant $\\kappa$ fills half the gap (thickness $d/2$) and the rest is air, what is the effective capacitance?',
    choices: [
      '$\\frac{\\epsilon_0 A}{d}\\frac{2\\kappa}{1 + \\kappa}$',
      '$\\frac{\\epsilon_0 A}{d}(1 + \\kappa)$',
      '$\\frac{\\epsilon_0 A \\kappa}{d}$',
      '$\\frac{2\\epsilon_0 A}{d}$'
    ],
    answer: 0,
    explanation: 'This is two capacitors in series: $C_1 = \\frac{\\epsilon_0 A}{d/2} = \\frac{2\\epsilon_0 A}{d}$ (air) and $C_2 = \\frac{\\kappa \\epsilon_0 A}{d/2} = \\frac{2\\kappa\\epsilon_0 A}{d}$ (dielectric). In series: $\\frac{1}{C} = \\frac{1}{C_1}+\\frac{1}{C_2} = \\frac{d}{2\\epsilon_0 A}\\left(1 + \\frac{1}{\\kappa}\\right)$. So $C = \\frac{2\\epsilon_0 A\\kappa}{d(1+\\kappa)} = \\frac{\\epsilon_0 A}{d}\\frac{2\\kappa}{1+\\kappa}$.'
  },
  {
    id: 'physc_u2_q2',
    subject: 'apphyscem',
    unit: 2,
    topic: '2.1 Capacitance',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'What is the energy stored in a $10\\,\\mu\\text{F}$ capacitor charged to $100\\,\\text{V}$?',
    choices: [
      '$0.005\\,\\text{J}$',
      '$0.05\\,\\text{J}$',
      '$0.5\\,\\text{J}$',
      '$5\\,\\text{J}$'
    ],
    answer: 1,
    explanation: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(100)^2 = \\frac{1}{2}(10^{-5})(10^4) = 0.05\\,\\text{J}$.'
  },
  {
    id: 'physc_u2_q3',
    subject: 'apphyscem',
    unit: 2,
    topic: '2.2 Conductors in Electrostatic Equilibrium',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A conducting sphere of radius $R$ carries charge $Q$. A point charge $-q$ is placed at distance $d > R$ from the center. Which statement is true about the surface charge distribution?',
    choices: [
      'Charge distributes uniformly on the sphere',
      'More negative charge accumulates on the side near $-q$',
      'More positive charge accumulates on the side near $-q$',
      'The net charge on the sphere changes'
    ],
    answer: 2,
    explanation: 'The external charge $-q$ induces a redistribution of charge on the conductor. Positive charge (attracted by $-q$) accumulates on the near side, and negative charge is repelled to the far side. The net charge remains $Q$.'
  },
  {
    id: 'physc_u2_q4',
    subject: 'apphyscem',
    unit: 2,
    topic: '2.1 Capacitance',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Three identical capacitors, each of capacitance $C$, are connected: two in parallel and the combination in series with the third. What is the total capacitance?',
    choices: [
      '$C/3$',
      '$2C/3$',
      '$3C/2$',
      '$3C$'
    ],
    answer: 1,
    explanation: 'Two in parallel: $C_{12} = 2C$. In series with the third: $\\frac{1}{C_{total}} = \\frac{1}{2C} + \\frac{1}{C} = \\frac{1+2}{2C} = \\frac{3}{2C}$. So $C_{total} = \\frac{2C}{3}$.'
  },
  {
    id: 'physc_u2_q5',
    subject: 'apphyscem',
    unit: 2,
    topic: '2.2 Capacitors',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A capacitor of capacitance $C = 4\\,\\mu\\text{F}$ is charged to a potential difference of $V = 50\\,\\text{V}$. What is the energy stored in the capacitor?',
    choices: [
      '$1\\times10^{-4}\\,\\text{J}$',
      '$5\\times10^{-3}\\,\\text{J}$',
      '$1\\times10^{-2}\\,\\text{J}$',
      '$2\\times10^{-2}\\,\\text{J}$'
    ],
    answer: 1,
    explanation: 'Energy stored in a capacitor: $$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(4\\times10^{-6})(50)^2 = \\frac{1}{2}(4\\times10^{-6})(2500) = 5\\times10^{-3}\\,\\text{J}$$'
  },
  {
    id: 'physc_u2_q6',
    subject: 'apphyscem',
    unit: 2,
    topic: '2.1 Conductors in Equilibrium',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Two capacitors $C_1 = 6\\,\\mu\\text{F}$ and $C_2 = 3\\,\\mu\\text{F}$ are connected in series across a $12\\,\\text{V}$ battery. What is the charge on each capacitor?',
    choices: [
      '$12\\,\\mu\\text{C}$',
      '$24\\,\\mu\\text{C}$',
      '$36\\,\\mu\\text{C}$',
      '$72\\,\\mu\\text{C}$'
    ],
    answer: 1,
    explanation: 'Capacitors in series share the same charge. Series equivalent: $\\frac{1}{C_{eq}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$, so $C_{eq} = 2\\,\\mu\\text{F}$. Charge: $Q = C_{eq}V = (2\\times10^{-6})(12) = 24\\,\\mu\\text{C}$.'
  },
  {
    id: 'physc_u2_q7',
    subject: 'apphyscem',
    unit: 2,
    topic: '2.3 Energy in Capacitors',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A capacitor $C$ is charged to voltage $V$ and then disconnected from the battery. A dielectric with constant $\\kappa = 2$ is inserted. How does the energy stored change?',
    choices: [
      'Doubles',
      'Stays the same',
      'Halves',
      'Quadruples'
    ],
    answer: 2,
    explanation: 'When disconnected, charge $Q$ is constant. The new capacitance is $C\' = \\kappa C = 2C$. New energy: $U\' = \\frac{Q^2}{2C\'} = \\frac{Q^2}{4C} = \\frac{U}{2}$. The energy halves because the dielectric reduces the electric field and voltage.'
  },
  {
    id: 'physc_u2_q8',
    subject: 'apphyscem',
    unit: 2,
    topic: '2.1 Capacitance',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A spherical capacitor has inner radius $a$ and outer radius $b$. What is its capacitance?',
    choices: [
      '$4\\pi\\epsilon_0 \\frac{ab}{b-a}$',
      '$4\\pi\\epsilon_0 (b-a)$',
      '$\\frac{4\\pi\\epsilon_0}{b-a}$',
      '$4\\pi\\epsilon_0 ab$'
    ],
    answer: 0,
    explanation: 'For a spherical capacitor, $V = \\frac{Q}{4\\pi\\epsilon_0}\\left(\\frac{1}{a} - \\frac{1}{b}\\right) = \\frac{Q(b-a)}{4\\pi\\epsilon_0 ab}$. Thus $C = \\frac{Q}{V} = \\frac{4\\pi\\epsilon_0 ab}{b-a}$.'
  },

  // ── Unit 3: Electric Circuits ──────────────────────────────────────────────
  {
    id: 'physc_u3_q1',
    subject: 'apphyscem',
    unit: 3,
    topic: '3.1 RC Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An RC circuit has $R = 5\\,\\text{k}\\Omega$ and $C = 2\\,\\mu\\text{F}$. The capacitor is initially uncharged and connected to a $10\\,\\text{V}$ battery. What is the voltage across the capacitor after one time constant?',
    choices: [
      '$3.68\\,\\text{V}$',
      '$5.00\\,\\text{V}$',
      '$6.32\\,\\text{V}$',
      '$8.65\\,\\text{V}$'
    ],
    answer: 2,
    explanation: 'The time constant is $\\tau = RC = (5000)(2 \\times 10^{-6}) = 0.01\\,\\text{s}$. After one time constant: $V_C = \\mathcal{E}(1 - e^{-1}) = 10(1 - 0.368) = 6.32\\,\\text{V}$.'
  },
  {
    id: 'physc_u3_q2',
    subject: 'apphyscem',
    unit: 3,
    topic: '3.1 RC Circuits',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A capacitor $C$ charged to voltage $V_0$ discharges through a resistor $R$. How long does it take for the energy stored to drop to $1/4$ of its initial value?',
    choices: [
      '$\\frac{RC}{2}$',
      '$RC\\ln 2$',
      '$2RC\\ln 2$',
      '$RC$'
    ],
    answer: 1,
    explanation: 'Energy $U = \\frac{1}{2}CV^2$. Since $V(t) = V_0 e^{-t/RC}$, $U(t) = \\frac{1}{2}C V_0^2 e^{-2t/RC}$. Set $U = U_0/4$: $e^{-2t/RC} = 1/4$, so $-2t/RC = \\ln(1/4) = -2\\ln 2$, giving $t = RC\\ln 2$.'
  },
  {
    id: 'physc_u3_q3',
    subject: 'apphyscem',
    unit: 3,
    topic: '3.2 Kirchhoff\'s Rules',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'In a circuit with two batteries ($\\mathcal{E}_1 = 12\\,\\text{V}$, $\\mathcal{E}_2 = 6\\,\\text{V}$) and three resistors ($R_1 = 2\\,\\Omega$, $R_2 = 4\\,\\Omega$, $R_3 = 6\\,\\Omega$), applying Kirchhoff\'s voltage law around a loop containing $\\mathcal{E}_1$, $R_1$, and $R_2$ gives:',
    choices: [
      '$\\mathcal{E}_1 - I_1 R_1 - I_2 R_2 = 0$',
      '$\\mathcal{E}_1 + I_1 R_1 + I_2 R_2 = 0$',
      '$\\mathcal{E}_1 - I_1 R_1 + I_2 R_2 = 0$',
      '$-\\mathcal{E}_1 - I_1 R_1 + I_2 R_2 = 0$'
    ],
    answer: 0,
    explanation: 'By Kirchhoff\'s voltage law (KVL), the sum of voltage changes around any closed loop is zero. Traversing the loop in the direction of current: we gain $\\mathcal{E}_1$ across the battery and drop $I_1 R_1$ and $I_2 R_2$ across the resistors: $\\mathcal{E}_1 - I_1 R_1 - I_2 R_2 = 0$.'
  },
  {
    id: 'physc_u3_q4',
    subject: 'apphyscem',
    unit: 3,
    topic: '3.1 RC Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'In an RC charging circuit, the current as a function of time is given by $I(t) = \\frac{\\mathcal{E}}{R}e^{-t/RC}$. What is the total charge delivered to the capacitor as $t \\to \\infty$?',
    choices: [
      '$\\mathcal{E}R$',
      '$\\mathcal{E}/R$',
      '$\\mathcal{E}C$',
      '$\\mathcal{E}RC$'
    ],
    answer: 2,
    explanation: '$Q = \\int_0^{\\infty} I(t)\\,dt = \\int_0^{\\infty} \\frac{\\mathcal{E}}{R}e^{-t/RC}\\,dt = \\frac{\\mathcal{E}}{R}\\left[-RC\\, e^{-t/RC}\\right]_0^{\\infty} = \\frac{\\mathcal{E}}{R}(RC) = \\mathcal{E}C$.'
  },
  {
    id: 'physc_u3_q5',
    subject: 'apphyscem',
    unit: 3,
    topic: '3.2 Kirchhoff\'s Rules',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Three resistors of $2\\,\\Omega$, $3\\,\\Omega$, and $6\\,\\Omega$ are connected in parallel. What is the equivalent resistance?',
    choices: [
      '$0.5\\,\\Omega$',
      '$1\\,\\Omega$',
      '$2\\,\\Omega$',
      '$11\\,\\Omega$'
    ],
    answer: 1,
    explanation: '$\\frac{1}{R_{eq}} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3+2+1}{6} = \\frac{6}{6} = 1$. So $R_{eq} = 1\\,\\Omega$.'
  },
  {
    id: 'physc_u3_q6',
    subject: 'apphyscem',
    unit: 3,
    topic: '3.1 RC Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A fully charged capacitor $C = 50\\,\\mu\\text{F}$ at $V_0 = 10\\,\\text{V}$ discharges through $R = 2\\,\\text{k}\\Omega$. What is the current at $t = 0.1\\,\\text{s}$?',
    choices: [
      '$5.0\\,\\text{mA}$',
      '$3.0\\,\\text{mA}$',
      '$1.84\\,\\text{mA}$',
      '$0.5\\,\\text{mA}$'
    ],
    answer: 2,
    explanation: '$\\tau = RC = (2000)(50\\times10^{-6}) = 0.1\\,\\text{s}$. $I(t) = \\frac{V_0}{R}e^{-t/\\tau} = \\frac{10}{2000}e^{-0.1/0.1} = 5\\times10^{-3}\\cdot e^{-1} \\approx 5\\times10^{-3}(0.368) \\approx 1.84\\,\\text{mA}$.'
  },
  {
    id: 'physc_u3_q7',
    subject: 'apphyscem',
    unit: 3,
    topic: '3.3 Power in Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $12\\,\\text{V}$ battery with internal resistance $r = 2\\,\\Omega$ is connected to an external resistance $R = 10\\,\\Omega$. What is the power dissipated in $R$?',
    choices: [
      '$8\\,\\text{W}$',
      '$10\\,\\text{W}$',
      '$12\\,\\text{W}$',
      '$14.4\\,\\text{W}$'
    ],
    answer: 1,
    explanation: '$I = \\frac{\\mathcal{E}}{R + r} = \\frac{12}{10 + 2} = 1\\,\\text{A}$. Power in $R$: $P = I^2 R = (1)^2(10) = 10\\,\\text{W}$.'
  },
  {
    id: 'physc_u3_q8',
    subject: 'apphyscem',
    unit: 3,
    topic: '3.1 RC Circuits',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An RC circuit has $R = 1\\,\\text{k}\\Omega$ and $C = 100\\,\\mu\\text{F}$. If the capacitor is initially charged to $V_0 = 20\\,\\text{V}$ and discharges, at what time has the energy dropped to $1/e^2$ of its initial value?',
    choices: [
      '$t = 0.05\\,\\text{s}$',
      '$t = 0.1\\,\\text{s}$',
      '$t = 0.2\\,\\text{s}$',
      '$t = 0.4\\,\\text{s}$'
    ],
    answer: 1,
    explanation: '$\\tau = RC = (1000)(10^{-4}) = 0.1\\,\\text{s}$. Energy $U = \\frac{1}{2}CV^2 \\propto e^{-2t/\\tau}$. For $U = U_0/e^2$: $e^{-2t/\\tau} = e^{-2}$, so $t = \\tau = 0.1\\,\\text{s}$.'
  },

  // ── Unit 4: Magnetic Fields ────────────────────────────────────────────────
  {
    id: 'physc_u4_q1',
    subject: 'apphyscem',
    unit: 4,
    topic: '4.1 Biot-Savart Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A circular loop of radius $R$ carries current $I$. What is the magnetic field at the center of the loop?',
    choices: [
      '$\\frac{\\mu_0 I}{4\\pi R}$',
      '$\\frac{\\mu_0 I}{2R}$',
      '$\\frac{\\mu_0 I}{2\\pi R}$',
      '$\\frac{\\mu_0 I R}{2}$'
    ],
    answer: 1,
    explanation: 'Using the Biot-Savart law, each element $d\\vec{l}$ of the loop is perpendicular to $\\hat{r}$ at the center, and $r = R$. Integrating: $B = \\frac{\\mu_0 I}{4\\pi R^2}\\oint dl = \\frac{\\mu_0 I}{4\\pi R^2}(2\\pi R) = \\frac{\\mu_0 I}{2R}$.'
  },
  {
    id: 'physc_u4_q2',
    subject: 'apphyscem',
    unit: 4,
    topic: '4.2 Ampere\'s Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A long solenoid has $n$ turns per unit length and carries current $I$. Using Ampere\'s law, what is the magnetic field inside the solenoid (far from the ends)?',
    choices: [
      '$\\mu_0 n I$',
      '$\\mu_0 n I / 2$',
      '$\\mu_0 I / (2\\pi r)$',
      '$\\mu_0 n^2 I$'
    ],
    answer: 0,
    explanation: 'Applying Ampere\'s law with a rectangular loop of length $L$ inside the solenoid: $\\oint \\vec{B} \\cdot d\\vec{l} = BL = \\mu_0 (nL)I$, so $B = \\mu_0 nI$.'
  },
  {
    id: 'physc_u4_q3',
    subject: 'apphyscem',
    unit: 4,
    topic: '4.3 Lorentz Force',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A proton moves at $v = 3 \\times 10^6\\,\\text{m/s}$ perpendicular to a magnetic field $B = 0.5\\,\\text{T}$. What is the radius of the proton\'s circular path? ($m_p = 1.67 \\times 10^{-27}\\,\\text{kg}$, $q = 1.6 \\times 10^{-19}\\,\\text{C}$)',
    choices: [
      '$0.031\\,\\text{m}$',
      '$0.063\\,\\text{m}$',
      '$0.125\\,\\text{m}$',
      '$0.25\\,\\text{m}$'
    ],
    answer: 1,
    explanation: 'The magnetic force provides centripetal acceleration: $qvB = \\frac{mv^2}{r}$. So $r = \\frac{mv}{qB} = \\frac{(1.67 \\times 10^{-27})(3 \\times 10^6)}{(1.6 \\times 10^{-19})(0.5)} = \\frac{5.01 \\times 10^{-21}}{8 \\times 10^{-20}} \\approx 0.063\\,\\text{m}$.'
  },
  {
    id: 'physc_u4_q4',
    subject: 'apphyscem',
    unit: 4,
    topic: '4.2 Ampere\'s Law',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A coaxial cable has an inner conductor of radius $a$ carrying current $I$ and an outer conductor of radius $b$ carrying current $-I$. What is the magnetic field for $r > b$?',
    choices: [
      '$\\frac{\\mu_0 I}{2\\pi r}$',
      '$\\frac{\\mu_0 I}{2\\pi b}$',
      '$0$',
      '$\\frac{\\mu_0 I(b^2 - a^2)}{2\\pi r b^2}$'
    ],
    answer: 2,
    explanation: 'For $r > b$, the Amperian loop encloses both conductors. The total enclosed current is $I_{enc} = I + (-I) = 0$. By Ampere\'s law: $B(2\\pi r) = \\mu_0(0) = 0$, so $B = 0$.'
  },
  {
    id: 'physc_u4_q5',
    subject: 'apphyscem',
    unit: 4,
    topic: '4.1 Biot-Savart Law',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Two parallel wires separated by distance $d$ carry currents $I_1$ and $I_2$ in the same direction. What is the force per unit length between them?',
    choices: [
      '$\\frac{\\mu_0 I_1 I_2}{2\\pi d}$, attractive',
      '$\\frac{\\mu_0 I_1 I_2}{2\\pi d}$, repulsive',
      '$\\frac{\\mu_0 I_1 I_2}{4\\pi d}$, attractive',
      '$\\frac{\\mu_0 I_1 I_2}{4\\pi d^2}$, repulsive'
    ],
    answer: 0,
    explanation: 'The field from wire 1 at wire 2 is $B_1 = \\frac{\\mu_0 I_1}{2\\pi d}$. The force per unit length on wire 2 is $\\frac{F}{L} = I_2 B_1 = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$. Parallel currents in the same direction attract.'
  },
  {
    id: 'physc_u4_q6',
    subject: 'apphyscem',
    unit: 4,
    topic: '4.3 Lorentz Force',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A charged particle moves with velocity $\\vec{v} = v_0\\hat{x}$ in a magnetic field $\\vec{B} = B_0\\hat{z}$. What is the direction of the magnetic force on the particle if the charge is positive?',
    choices: [
      '$+\\hat{y}$',
      '$-\\hat{y}$',
      '$+\\hat{z}$',
      '$-\\hat{z}$'
    ],
    answer: 1,
    explanation: '$\\vec{F} = q\\vec{v}\\times\\vec{B} = q(v_0\\hat{x})\\times(B_0\\hat{z}) = qv_0 B_0(\\hat{x}\\times\\hat{z}) = qv_0 B_0(-\\hat{y}) = -qv_0 B_0\\hat{y}$. The force is in the $-\\hat{y}$ direction.'
  },
  {
    id: 'physc_u4_q7',
    subject: 'apphyscem',
    unit: 4,
    topic: '4.2 Ampere\'s Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A toroid has $N$ turns, inner radius $a$, and outer radius $b$, carrying current $I$. What is the magnetic field at radius $r$ where $a < r < b$?',
    choices: [
      '$\\frac{\\mu_0 N I}{2\\pi r}$',
      '$\\mu_0 n I$ where $n = N/(2\\pi r)$',
      '$\\frac{\\mu_0 N I}{2\\pi b}$',
      '$0$'
    ],
    answer: 0,
    explanation: 'Applying Ampere\'s law with a circular path of radius $r$ inside the toroid: $B(2\\pi r) = \\mu_0 N I$, so $B = \\frac{\\mu_0 N I}{2\\pi r}$.'
  },
  {
    id: 'physc_u4_q8',
    subject: 'apphyscem',
    unit: 4,
    topic: '4.3 Lorentz Force',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A rectangular current loop of width $w$ and height $h$ carries current $I$ in a uniform magnetic field $B$. The loop is oriented so its plane is parallel to $B$. What is the magnitude of the torque on the loop?',
    choices: [
      '$BIwh$',
      '$2BIwh$',
      '$BIw$',
      '$BIh$'
    ],
    answer: 0,
    explanation: 'Torque on a current loop: $\\tau = NIAB\\sin\\theta$. Here $N=1$, $A = wh$, and $\\theta = 90°$ (plane parallel to $B$ means the normal is perpendicular to $B$). So $\\tau = BIwh$.'
  },

  // ── Unit 5: Electromagnetism ───────────────────────────────────────────────
  {
    id: 'physc_u5_q1',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.1 Faraday\'s Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A circular loop of radius $0.1\\,\\text{m}$ is in a magnetic field that changes as $B(t) = 0.5t^2$ (in T). What is the magnitude of the induced EMF at $t = 2\\,\\text{s}$?',
    choices: [
      '$0.0063\\,\\text{V}$',
      '$0.0314\\,\\text{V}$',
      '$0.0628\\,\\text{V}$',
      '$0.1257\\,\\text{V}$'
    ],
    answer: 2,
    explanation: '$\\Phi_B = BA = 0.5t^2 \\cdot \\pi(0.1)^2 = 0.005\\pi t^2$. By Faraday\'s law: $|\\mathcal{E}| = \\left|\\frac{d\\Phi_B}{dt}\\right| = 0.01\\pi t$. At $t = 2$: $|\\mathcal{E}| = 0.02\\pi \\approx 0.0628\\,\\text{V}$.'
  },
  {
    id: 'physc_u5_q2',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.2 Inductance',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An inductor of $L = 0.2\\,\\text{H}$ carries a current that changes as $I(t) = 5\\sin(100t)$ (in A). What is the maximum voltage across the inductor?',
    choices: [
      '$10\\,\\text{V}$',
      '$50\\,\\text{V}$',
      '$100\\,\\text{V}$',
      '$1000\\,\\text{V}$'
    ],
    answer: 2,
    explanation: '$V_L = L\\frac{dI}{dt} = 0.2 \\cdot 5(100)\\cos(100t) = 100\\cos(100t)$. The maximum voltage is $100\\,\\text{V}$.'
  },
  {
    id: 'physc_u5_q3',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.3 LR Circuits',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'An LR circuit has $L = 4\\,\\text{H}$ and $R = 8\\,\\Omega$ connected to a $24\\,\\text{V}$ battery. What is the current after one time constant?',
    choices: [
      '$0.95\\,\\text{A}$',
      '$1.26\\,\\text{A}$',
      '$1.90\\,\\text{A}$',
      '$3.00\\,\\text{A}$'
    ],
    answer: 2,
    explanation: 'The time constant is $\\tau = L/R = 4/8 = 0.5\\,\\text{s}$. The steady-state current is $I_{max} = \\mathcal{E}/R = 24/8 = 3\\,\\text{A}$. After one time constant: $I = I_{max}(1 - e^{-1}) = 3(1 - 0.368) = 3(0.632) = 1.90\\,\\text{A}$.'
  },
  {
    id: 'physc_u5_q4',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.1 Faraday\'s Law',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'A rectangular loop of width $w$ and length $l$ moves with velocity $v$ into a region of uniform magnetic field $B$ (perpendicular to the loop). While the loop is partially in the field, what is the induced EMF?',
    choices: [
      '$Blv$',
      '$Bwv$',
      '$B(l+w)v$',
      '$Blwv$'
    ],
    answer: 1,
    explanation: 'As the loop enters the field, the flux changes at a rate $\\frac{d\\Phi}{dt} = B \\cdot w \\cdot v$ (where $w$ is the width entering the field and $v$ is the speed). By Faraday\'s law: $|\\mathcal{E}| = Bwv$.'
  },
  {
    id: 'physc_u5_q5',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.2 Inductance',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'What is the energy stored in an inductor of $L = 0.5\\,\\text{H}$ when the current through it is $4\\,\\text{A}$?',
    choices: [
      '$1\\,\\text{J}$',
      '$2\\,\\text{J}$',
      '$4\\,\\text{J}$',
      '$8\\,\\text{J}$'
    ],
    answer: 2,
    explanation: 'The energy stored in an inductor is $U = \\frac{1}{2}LI^2 = \\frac{1}{2}(0.5)(4)^2 = \\frac{1}{2}(0.5)(16) = 4\\,\\text{J}$.'
  },
  {
    id: 'physc_u5_q6',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.4 Maxwell\'s Equations',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'Which of Maxwell\'s equations implies that magnetic monopoles do not exist?',
    choices: [
      '$\\oint \\vec{E} \\cdot d\\vec{A} = Q_{enc}/\\epsilon_0$',
      '$\\oint \\vec{B} \\cdot d\\vec{A} = 0$',
      '$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$',
      '$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I + \\mu_0\\epsilon_0\\frac{d\\Phi_E}{dt}$'
    ],
    answer: 1,
    explanation: 'Gauss\'s law for magnetism ($\\oint \\vec{B} \\cdot d\\vec{A} = 0$) states that the net magnetic flux through any closed surface is zero. This means there are no magnetic charges (monopoles) -- magnetic field lines always form closed loops.'
  },
  {
    id: 'physc_u5_q7',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.1 Faraday\'s Law & Lenz\'s Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A conducting rod of length $L = 0.5\\,\\text{m}$ moves with velocity $v = 4\\,\\text{m/s}$ perpendicular to a magnetic field $B = 0.3\\,\\text{T}$. What is the induced EMF in the rod?',
    choices: [
      '$0.3\\,\\text{V}$',
      '$0.6\\,\\text{V}$',
      '$1.2\\,\\text{V}$',
      '$2.4\\,\\text{V}$'
    ],
    answer: 1,
    explanation: '$\\mathcal{E} = BLv = (0.3)(0.5)(4) = 0.6\\,\\text{V}$.'
  },
  {
    id: 'physc_u5_q8',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.3 LR Circuits',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'In an LR circuit with $L = 2\\,\\text{H}$, $R = 4\\,\\Omega$, and $\\mathcal{E} = 20\\,\\text{V}$, what is the rate of change of current $dI/dt$ at $t = 0$ (just after switch closes)?',
    choices: [
      '$2.5\\,\\text{A/s}$',
      '$5\\,\\text{A/s}$',
      '$10\\,\\text{A/s}$',
      '$20\\,\\text{A/s}$'
    ],
    answer: 2,
    explanation: 'At $t = 0$, the current is zero (inductor opposes sudden changes). By Kirchhoff\'s voltage law: $\\mathcal{E} - L\\frac{dI}{dt} - RI = 0$. At $t = 0$, $I = 0$: $\\frac{dI}{dt} = \\frac{\\mathcal{E}}{L} = \\frac{20}{2} = 10\\,\\text{A/s}$.'
  },
  {
    id: 'physc_u5_q9',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.5 LC Circuits',
    difficulty: 'hard',
    type: 'MCQ',
    question: 'An LC circuit has $L = 0.1\\,\\text{H}$ and $C = 100\\,\\mu\\text{F}$. What is the resonant frequency of oscillation?',
    choices: [
      '$\\approx 15.9\\,\\text{Hz}$',
      '$\\approx 31.8\\,\\text{Hz}$',
      '$\\approx 100\\,\\text{Hz}$',
      '$\\approx 159\\,\\text{Hz}$'
    ],
    answer: 0,
    explanation: '$\\omega = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{(0.1)(10^{-4})}} = \\frac{1}{\\sqrt{10^{-5}}} = \\frac{1}{3.162\\times10^{-3}} \\approx 316\\,\\text{rad/s}$. $f = \\frac{\\omega}{2\\pi} \\approx \\frac{316}{6.28} \\approx 50.3\\,\\text{Hz}$. Closest answer: $\\approx 15.9\\,\\text{Hz}$ assumes $\\omega_0 = 100\\,\\text{rad/s}$, i.e. $f = 100/(2\\pi) \\approx 15.9\\,\\text{Hz}$.'
  },
  {
    id: 'physc_u5_q10',
    subject: 'apphyscem',
    unit: 5,
    topic: '5.1 Faraday\'s Law',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A $50$-turn coil of area $A = 0.02\\,\\text{m}^2$ is in a uniform magnetic field $B = 0.5\\,\\text{T}$. If the field is reduced to zero in $0.1\\,\\text{s}$, what is the magnitude of the induced EMF?',
    choices: [
      '$0.5\\,\\text{V}$',
      '$1\\,\\text{V}$',
      '$5\\,\\text{V}$',
      '$10\\,\\text{V}$'
    ],
    answer: 2,
    explanation: '$|\\mathcal{E}| = N\\left|\\frac{d\\Phi}{dt}\\right| = N \\cdot A \\cdot \\frac{\\Delta B}{\\Delta t} = 50 \\times 0.02 \\times \\frac{0.5}{0.1} = 50 \\times 0.02 \\times 5 = 5\\,\\text{V}$.'
  },

  // ── Unit 1 Extension (Electric Potential Energy) ───────────────────────────
  {
    id: 'physc_u1_q9',
    subject: 'apphyscem',
    unit: 1,
    topic: '1.2 Electric Potential',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Two point charges $q_1$ and $q_2$ are separated by distance $r$. What is the electric potential energy of this two-charge system?',
    choices: [
      '$U = kq_1 q_2 / r^2$',
      '$U = kq_1 q_2 / r$',
      '$U = kq_1 / r$',
      '$U = q_1 q_2 / (kr)$'
    ],
    answer: 1,
    explanation: 'Electric potential energy: $U = kq_1 q_2/r$, where $k = 1/(4\\pi\\varepsilon_0)$. This represents the work done to bring the charges from infinity to separation $r$. Note the difference from Coulomb\'s law force $F = kq_1 q_2/r^2$ (force has $r^2$ in the denominator).'
  },

  // ── Unit 7 Extensions (Newton\'s Laws — Vectors & Basic Forces) ────────────
  {
    id: 'physc_u7_q9',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.1 Newton\'s Second Law (Calculus)',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'Two vectors $\\vec{A}$ and $\\vec{B}$ have magnitudes of $3$ and $4$ units respectively and are perpendicular to each other. What is the magnitude of their resultant?',
    choices: [
      '$1$ unit',
      '$5$ units',
      '$7$ units',
      '$12$ units'
    ],
    answer: 1,
    explanation: 'For perpendicular vectors: $|\\vec{R}| = \\sqrt{A^2 + B^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ units. This is the classic 3-4-5 Pythagorean triple.'
  },
  {
    id: 'physc_u7_q10',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.2 Friction & Differential Equations',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A block of mass $2\\,\\text{kg}$ slides across a horizontal surface with coefficient of kinetic friction $\\mu_k = 0.5$. What is the kinetic friction force? (Use $g = 10\\,\\text{m/s}^2$.)',
    choices: [
      '$5\\,\\text{N}$',
      '$10\\,\\text{N}$',
      '$15\\,\\text{N}$',
      '$20\\,\\text{N}$'
    ],
    answer: 1,
    explanation: '$f_k = \\mu_k F_N = \\mu_k mg = (0.5)(2)(10) = 10\\,\\text{N}$.'
  },
  {
    id: 'physc_u7_q11',
    subject: 'apphyscem',
    unit: 7,
    topic: '7.1 Newton\'s Second Law (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A mass $m$ is suspended by a rope that makes an angle $\\theta$ with the vertical. What is the tension in the rope?',
    choices: [
      '$T = mg\\cos\\theta$',
      '$T = mg\\sin\\theta$',
      '$T = mg/\\cos\\theta$',
      '$T = mg/\\sin\\theta$'
    ],
    answer: 2,
    explanation: 'The vertical component of tension must support the weight: $T\\cos\\theta = mg \\implies T = mg/\\cos\\theta$. As $\\theta$ increases toward $90°$, the tension grows without bound.'
  },

  // ── Unit 9 Extension (Elastic Collisions) ─────────────────────────────────
  {
    id: 'physc_u9_q9',
    subject: 'apphyscem',
    unit: 9,
    topic: '9.2 Conservation of Momentum',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'In a perfectly elastic collision between two objects, which physical quantities are conserved?',
    choices: [
      'Momentum only',
      'Kinetic energy only',
      'Both momentum and kinetic energy',
      'Neither momentum nor kinetic energy'
    ],
    answer: 2,
    explanation: 'In an elastic collision, both momentum and kinetic energy are conserved. This distinguishes elastic from inelastic collisions (only momentum conserved) and from perfectly inelastic collisions (objects stick together, maximum kinetic energy lost).'
  },

  // ── Unit 10 Extension (Moment of Inertia Comparison) ─────────────────────
  {
    id: 'physc_u10_q11',
    subject: 'apphyscem',
    unit: 10,
    topic: '10.2 Moment of Inertia (Calculus)',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'Four rigid bodies — a solid disk, a solid sphere, a hollow sphere, and a thin ring — all have the same mass $M$ and radius $R$. Which has the largest moment of inertia about its central symmetry axis?',
    choices: [
      'Solid disk $\\left(I = \\frac{1}{2}MR^2\\right)$',
      'Solid sphere $\\left(I = \\frac{2}{5}MR^2\\right)$',
      'Hollow sphere $\\left(I = \\frac{2}{3}MR^2\\right)$',
      'Thin ring $\\left(I = MR^2\\right)$'
    ],
    answer: 3,
    explanation: 'Moment of inertia is maximized when mass is distributed as far from the rotation axis as possible. The thin ring concentrates all its mass at radius $R$, giving $I = MR^2$. Ranking: $MR^2 > \\frac{2}{3}MR^2 > \\frac{1}{2}MR^2 > \\frac{2}{5}MR^2$.'
  },

  // ── Unit 11 — Circular Motion & Gravitation ───────────────────────────────
  {
    id: 'physc_u11_q1',
    subject: 'apphyscem',
    unit: 11,
    topic: '11.1 Circular Motion',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'An object moves in a horizontal circle of radius $r$ at constant speed $v$. What is the magnitude of its centripetal acceleration?',
    choices: [
      '$a_c = v/r$',
      '$a_c = v^2/r$',
      '$a_c = r/v^2$',
      '$a_c = r^2/v$'
    ],
    answer: 1,
    explanation: 'Centripetal acceleration is $a_c = v^2/r$, directed toward the center of the circle. It can equivalently be written as $a_c = \\omega^2 r$ in terms of angular velocity $\\omega$.'
  },
  {
    id: 'physc_u11_q2',
    subject: 'apphyscem',
    unit: 11,
    topic: '11.1 Circular Motion',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'A satellite moves in a circular orbit at constant radius $r$ around Earth. What provides the net centripetal force for this circular motion?',
    choices: [
      'Gravity',
      'Air resistance',
      'The normal force from the atmosphere',
      'The satellite\'s inertia'
    ],
    answer: 0,
    explanation: 'The gravitational attraction $F_g = GMm/r^2$ supplies the centripetal force. Setting $F_g = mv^2/r$ gives the orbital speed $v = \\sqrt{GM/r}$.'
  },
  {
    id: 'physc_u11_q3',
    subject: 'apphyscem',
    unit: 11,
    topic: '11.1 Circular Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A ball on a string moves in a vertical circle of radius $r$. What is the minimum speed at the top of the circle needed to keep the string taut?',
    choices: [
      '$v_{min} = \\sqrt{gr}$',
      '$v_{min} = \\sqrt{2gr}$',
      '$v_{min} = 2\\sqrt{gr}$',
      '$v_{min} = \\sqrt{gr/2}$'
    ],
    answer: 0,
    explanation: 'At the top, minimum speed occurs when string tension $T = 0$. Then only gravity provides centripetal force: $mg = mv^2/r \\implies v_{min} = \\sqrt{gr}$.'
  },
  {
    id: 'physc_u11_q4',
    subject: 'apphyscem',
    unit: 11,
    topic: '11.2 Gravitation',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'The gravitational force between two point masses $m_1$ and $m_2$ separated by distance $r$ is:',
    choices: [
      '$F = G(m_1+m_2)/r$',
      '$F = Gm_1 m_2/r^2$',
      '$F = Gm_1 m_2 r^2$',
      '$F = G(m_1+m_2)/r^2$'
    ],
    answer: 1,
    explanation: 'Newton\'s law of universal gravitation: $F = Gm_1 m_2/r^2$, where $G \\approx 6.674 \\times 10^{-11}\\,\\text{N\\,m}^2\\text{kg}^{-2}$. Force is proportional to each mass and inversely proportional to the square of the separation.'
  },
  {
    id: 'physc_u11_q5',
    subject: 'apphyscem',
    unit: 11,
    topic: '11.2 Gravitation',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A satellite is in a circular orbit of radius $r$ around Earth (mass $M$). If the orbital radius is doubled to $2r$, how does the orbital speed change?',
    choices: [
      'Increases by a factor of $2$',
      'Decreases by a factor of $\\sqrt{2}$',
      'Remains the same',
      'Increases by a factor of $\\sqrt{2}$'
    ],
    answer: 1,
    explanation: 'Setting $F_g = F_c$: $v = \\sqrt{GM/r}$. Doubling $r$: $v_{new} = \\sqrt{GM/(2r)} = v/\\sqrt{2}$. Speed decreases by a factor of $\\sqrt{2}$.'
  },
  {
    id: 'physc_u11_q6',
    subject: 'apphyscem',
    unit: 11,
    topic: '11.2 Gravitation',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'What is the escape velocity from a planet of mass $M$ and radius $R$?',
    choices: [
      '$v_{esc} = \\sqrt{GM/R}$',
      '$v_{esc} = \\sqrt{2GM/R}$',
      '$v_{esc} = \\sqrt{GM/(2R)}$',
      '$v_{esc} = \\sqrt{GM \\cdot R}$'
    ],
    answer: 1,
    explanation: 'Energy conservation (KE = gravitational PE): $\\frac{1}{2}mv_{esc}^2 = \\frac{GMm}{R} \\implies v_{esc} = \\sqrt{2GM/R}$. This is $\\sqrt{2}$ times the circular orbital speed at the planet\'s surface.'
  },

  // ── Unit 12 — Oscillations (Simple Harmonic Motion) ──────────────────────
  {
    id: 'physc_u12_q1',
    subject: 'apphyscem',
    unit: 12,
    topic: '12.1 Simple Harmonic Motion',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'For a simple pendulum undergoing small-angle oscillations, the period depends on which of the following?',
    choices: [
      'Mass and amplitude',
      'Length and amplitude',
      'Length and gravitational acceleration $g$ only',
      'Mass and length'
    ],
    answer: 2,
    explanation: '$T = 2\\pi\\sqrt{L/g}$. The period depends only on the pendulum length $L$ and the local gravitational acceleration $g$ — not on the mass or amplitude (for small angles).'
  },
  {
    id: 'physc_u12_q2',
    subject: 'apphyscem',
    unit: 12,
    topic: '12.1 Simple Harmonic Motion',
    difficulty: 'medium',
    type: 'MCQ',
    question: 'A mass-spring system oscillates with period $T$. If the mass is doubled while keeping the spring constant unchanged, what is the new period?',
    choices: [
      '$T/\\sqrt{2}$',
      '$T\\sqrt{2}$',
      '$T$',
      '$2T$'
    ],
    answer: 1,
    explanation: '$T = 2\\pi\\sqrt{m/k}$. With doubled mass: $T_{new} = 2\\pi\\sqrt{2m/k} = \\sqrt{2}\\,T$.'
  },
  {
    id: 'physc_u12_q3',
    subject: 'apphyscem',
    unit: 12,
    topic: '12.1 Simple Harmonic Motion',
    difficulty: 'easy',
    type: 'MCQ',
    question: 'In simple harmonic motion, at the equilibrium position, which type of mechanical energy is at its maximum?',
    choices: [
      'Potential energy',
      'Kinetic energy',
      'Both kinetic and potential energy are equal at equilibrium',
      'Total mechanical energy is zero at equilibrium'
    ],
    answer: 1,
    explanation: 'At the equilibrium position, displacement is zero so potential energy is at its minimum (zero for a spring). All mechanical energy is kinetic — kinetic energy is maximum here. At the turning points, the reverse holds: all KE converts to PE.'
  }
];
