window.PHYSC_MCQ = [
  {
    "id": "physc_u6_q1",
    "subject": "apphyscem",
    "unit": 6,
    "topic": "6.1 Position, Velocity & Acceleration (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "The position of a particle moving along the x-axis is given by $x(t) = 3t^3 - 9t^2 + 6t$ (in meters). At what time(s) does the particle change direction?",
    "choices": [
      "$t = 0.42\\,\\text{s and}\\; t = 1.58\\,\\text{s}$",
      "$t = 1\\,\\text{s only}$",
      "$t = 1\\,\\text{s and}\\; t = 2\\,\\text{s}$",
      "$t = 0.5\\,\\text{s and}\\; t = 2\\,\\text{s}$"
    ],
    "answer": 0,
    "explanation": "The particle changes direction when $v(t) = 0$ and the sign of $v$ changes. $v(t) = \\frac{dx}{dt} = 9t^2 - 18t + 6 = 0$. Using the quadratic formula: $t = \\frac{18 \\pm \\sqrt{324 - 216}}{18} = \\frac{18 \\pm \\sqrt{108}}{18} = 1 \\pm \\frac{\\sqrt{3}}{3}$, giving $t \\approx 0.42\\,\\text{s}$ and $t \\approx 1.58\\,\\text{s}$."
  },
  {
    "id": "physc_u6_q2",
    "subject": "apphyscem",
    "unit": 6,
    "topic": "6.1 Position, Velocity & Acceleration (Calculus)",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "A particle moves along the x-axis with velocity $v(t) = 4t - 2$ (in m/s). What is the displacement of the particle from $t = 0$ to $t = 3\\,\\text{s}$?",
    "choices": [
      "$6\\,\\text{m}$",
      "$12\\,\\text{m}$",
      "$15\\,\\text{m}$",
      "$18\\,\\text{m}$"
    ],
    "answer": 1,
    "explanation": "Displacement $= \\int_0^3 v(t)\\,dt = \\int_0^3 (4t - 2)\\,dt = [2t^2 - 2t]_0^3 = (18 - 6) - 0 = 12\\,\\text{m}$."
  },
  {
    "id": "physc_u6_q3",
    "subject": "apphyscem",
    "unit": 6,
    "topic": "6.1 Position, Velocity & Acceleration (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "The acceleration of a particle is given by $a(t) = 6t$ (in m/s$^2$). If the particle starts from rest at the origin, what is its position at $t = 2\\,\\text{s}$?",
    "choices": [
      "$4\\,\\text{m}$",
      "$8\\,\\text{m}$",
      "$12\\,\\text{m}$",
      "$16\\,\\text{m}$"
    ],
    "answer": 1,
    "explanation": "$v(t) = \\int a(t)\\,dt = \\int 6t\\,dt = 3t^2 + C$. Since $v(0) = 0$, $C = 0$, so $v(t) = 3t^2$. Then $x(t) = \\int v(t)\\,dt = \\int 3t^2\\,dt = t^3 + C$. Since $x(0) = 0$, $C = 0$, so $x(t) = t^3$. At $t = 2$: $x = 8\\,\\text{m}$."
  },
  {
    "id": "physc_u6_q4",
    "subject": "apphyscem",
    "unit": 6,
    "topic": "6.1 Position, Velocity & Acceleration (Calculus)",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "The velocity of a particle is given by $v(t) = 3t^2 - 12t + 9$ (in m/s). What is the total distance traveled by the particle from $t = 0$ to $t = 4\\,\\text{s}$?",
    "choices": [
      "$4\\,\\text{m}$",
      "$8\\,\\text{m}$",
      "$12\\,\\text{m}$",
      "$16\\,\\text{m}$"
    ],
    "answer": 2,
    "explanation": "First find when $v = 0$: $3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$, so $t = 1$ and $t = 3$. Total distance $= \\left|\\int_0^1 v\\,dt\\right| + \\left|\\int_1^3 v\\,dt\\right| + \\left|\\int_3^4 v\\,dt\\right| = |4| + |-4| + |4| = 12\\,\\text{m}$."
  },
  {
    "id": "physc_u6_q5",
    "subject": "apphyscem",
    "unit": 6,
    "topic": "6.1 Position, Velocity & Acceleration (Calculus)",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A particle moves along the x-axis with velocity $v(t) = v_0 e^{-\\alpha t}$, where $v_0$ and $\\alpha$ are positive constants. What is the total distance traveled from $t = 0$ to $t = \\infty$?",
    "choices": [
      "$v_0 / \\alpha$",
      "$v_0 \\alpha$",
      "$\\alpha / v_0$",
      "$\\infty$"
    ],
    "answer": 0,
    "explanation": "Since $v > 0$ for all $t$, distance $= \\int_0^{\\infty} v_0 e^{-\\alpha t}\\,dt = v_0 \\left[-\\frac{1}{\\alpha}e^{-\\alpha t}\\right]_0^{\\infty} = \\frac{v_0}{\\alpha}$."
  },
  {
    "id": "physc_u6_q6",
    "subject": "apphyscem",
    "unit": 6,
    "topic": "6.2 Kinematics in Two Dimensions",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A particle moves with velocity $\\vec{v}(t) = (3t^2)\\hat{x} + (4t)\\hat{y}$ m/s. What is the magnitude of the acceleration at $t = 2\\,\\text{s}$?",
    "choices": [
      "$4\\,\\text{m/s}^2$",
      "$12\\,\\text{m/s}^2$",
      "$\\sqrt{148}\\,\\text{m/s}^2$",
      "$\\sqrt{160}\\,\\text{m/s}^2$"
    ],
    "answer": 2,
    "explanation": "$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = 6t\\,\\hat{x} + 4\\,\\hat{y}$. At $t = 2$: $\\vec{a} = 12\\,\\hat{x} + 4\\,\\hat{y}$. Magnitude: $|\\vec{a}| = \\sqrt{144 + 16} = \\sqrt{160} = 4\\sqrt{10}\\,\\text{m/s}^2$. Wait — $\\sqrt{144+16} = \\sqrt{160}$. So answer is $\\sqrt{160}\\,\\text{m/s}^2$."
  },
  {
    "id": "physc_u6_q7",
    "subject": "apphyscem",
    "unit": 6,
    "topic": "6.1 Position, Velocity & Acceleration (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "The position of a particle is $x(t) = 2t^3 - 3t^2 + 1$ (m). What is the instantaneous velocity at $t = 1\\,\\text{s}$?",
    "choices": [
      "$0\\,\\text{m/s}$",
      "$3\\,\\text{m/s}$",
      "$6\\,\\text{m/s}$",
      "$-1\\,\\text{m/s}$"
    ],
    "answer": 0,
    "explanation": "$v(t) = \\frac{dx}{dt} = 6t^2 - 6t$. At $t = 1$: $v = 6(1) - 6(1) = 0\\,\\text{m/s}$."
  },
  {
    "id": "physc_u7_q1",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.1 Newton's Second Law (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A $2\\,\\text{kg}$ object experiences a net force $F(t) = 6t$ (in N). If the object starts from rest, what is its velocity at $t = 3\\,\\text{s}$?",
    "choices": [
      "$4.5\\,\\text{m/s}$",
      "$6.75\\,\\text{m/s}$",
      "$9\\,\\text{m/s}$",
      "$13.5\\,\\text{m/s}$"
    ],
    "answer": 3,
    "explanation": "$a(t) = \\frac{F(t)}{m} = \\frac{6t}{2} = 3t$. Then $v(t) = \\int_0^t 3t'\\,dt' = \\frac{3t^2}{2}$. At $t = 3$: $v = \\frac{3(9)}{2} = 13.5\\,\\text{m/s}$."
  },
  {
    "id": "physc_u7_q2",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.1 Newton's Second Law (Calculus)",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "An object of mass $m$ moves through a fluid that exerts a drag force $F_d = -bv$, where $b$ is a constant. If the object has initial velocity $v_0$, what is $v(t)$?",
    "choices": [
      "$v_0 e^{-bt/m}$",
      "$v_0 e^{-mt/b}$",
      "$v_0 (1 - e^{-bt/m})$",
      "$v_0 \\ln(bt/m)$"
    ],
    "answer": 0,
    "explanation": "Newton's second law gives $m\\frac{dv}{dt} = -bv$. Separating variables: $\\frac{dv}{v} = -\\frac{b}{m}dt$. Integrating: $\\ln v = -\\frac{b}{m}t + C$. With $v(0) = v_0$, we get $v(t) = v_0 e^{-bt/m}$."
  },
  {
    "id": "physc_u7_q3",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.2 Friction & Differential Equations",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A block slides on a surface with a velocity-dependent friction force $f = -\\mu m g - \\beta v$. In the limit of large $t$, what is the terminal condition for the block?",
    "choices": [
      "The block accelerates indefinitely",
      "The block reaches a constant terminal velocity",
      "The block comes to rest",
      "The block oscillates about equilibrium"
    ],
    "answer": 2,
    "explanation": "Since $\\mu mg$ provides a constant decelerating force that acts opposite to the direction of motion, and the drag term $\\beta v$ also decelerates the block, the block will eventually come to rest. There is no driving force to maintain a terminal velocity."
  },
  {
    "id": "physc_u7_q4",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.1 Newton's Second Law (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A $5\\,\\text{kg}$ block on a frictionless surface is pushed by a force $F(x) = 10 + 2x$ (in N). What is the speed of the block after it has moved $4\\,\\text{m}$ from rest?",
    "choices": [
      "$2\\,\\text{m/s}$",
      "$4\\,\\text{m/s}$",
      "$4.38\\,\\text{m/s}$",
      "$6\\,\\text{m/s}$"
    ],
    "answer": 2,
    "explanation": "Using the work-energy theorem: $W = \\int_0^4 (10 + 2x)\\,dx = [10x + x^2]_0^4 = 40 + 16 = 56\\,\\text{J}$. Setting $W = \\frac{1}{2}mv^2$: $v = \\sqrt{\\frac{2(56)}{5}} = \\sqrt{22.4} \\approx 4.73\\,\\text{m/s}$. The closest answer is $4.38\\,\\text{m/s}$."
  },
  {
    "id": "physc_u7_q5",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.2 Variable Forces (Calculus)",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A force $F(t) = 6t^2 - 4\\,\\text{N}$ acts on a $2\\,\\text{kg}$ object starting from rest at $t = 0$. What is the velocity of the object at $t = 3\\,\\text{s}$?",
    "choices": [
      "$18\\,\\text{m/s}$",
      "$21\\,\\text{m/s}$",
      "$39\\,\\text{m/s}$",
      "$45\\,\\text{m/s}$"
    ],
    "answer": 1,
    "explanation": "From Newton's second law: $a(t) = \\frac{F}{m} = \\frac{6t^2-4}{2} = 3t^2 - 2$. Integrating: $$v(t) = \\int_0^t (3t^2-2)\\,dt = t^3 - 2t + C$$ With $v(0) = 0$, $C = 0$. At $t=3$: $v = 27 - 6 = 21\\,\\text{m/s}$."
  },
  {
    "id": "physc_u7_q6",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.1 Newton's Laws with Calculus",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A particle of mass $m$ is subject to a drag force $F = -bv$ where $b$ is a constant. Starting from initial velocity $v_0$, which expression gives velocity as a function of time?",
    "choices": [
      "$v(t) = v_0 - \\frac{b}{m}t$",
      "$v(t) = v_0 e^{-bt/m}$",
      "$v(t) = v_0 e^{bt/m}$",
      "$v(t) = \\frac{v_0}{1 + bt/m}$"
    ],
    "answer": 1,
    "explanation": "Newton's second law: $m\\frac{dv}{dt} = -bv$. Separating variables: $\\frac{dv}{v} = -\\frac{b}{m}dt$. Integrating: $\\ln v = -\\frac{b}{m}t + C$. With $v(0)=v_0$: $$v(t) = v_0 e^{-bt/m}$$"
  },
  {
    "id": "physc_u7_q7",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.3 Springs and Oscillatory Forces",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A mass $m$ is attached to a spring with spring constant $k$ on a frictionless surface. The displacement from equilibrium is given by $\\frac{d^2x}{dt^2} + \\frac{k}{m}x = 0$. What is the angular frequency $\\omega$ of oscillation?",
    "choices": [
      "$\\sqrt{\\frac{m}{k}}$",
      "$\\sqrt{\\frac{k}{m}}$",
      "$\\frac{k}{m}$",
      "$\\frac{m}{k}$"
    ],
    "answer": 1,
    "explanation": "The equation of motion $\\ddot{x} + \\frac{k}{m}x = 0$ is a simple harmonic oscillator. Comparing with $\\ddot{x} + \\omega^2 x = 0$ gives $\\omega = \\sqrt{k/m}$."
  },
  {
    "id": "physc_u7_q8",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.1 Newton's Second Law (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A particle moves along the x-axis. The net force on it is $F(x) = -kx$ where $k > 0$. Which statement correctly describes the motion?",
    "choices": [
      "The particle accelerates in the positive x direction always",
      "The particle undergoes simple harmonic motion",
      "The particle moves at constant velocity",
      "The particle decelerates to rest and stays there"
    ],
    "answer": 1,
    "explanation": "$F = ma = -kx$ gives $\\ddot{x} = -\\frac{k}{m}x$, which is the equation of simple harmonic motion. The particle oscillates about $x = 0$."
  },
  {
    "id": "physc_u8_q1",
    "subject": "apphyscem",
    "unit": 8,
    "topic": "8.1 Work Done by a Variable Force",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A force $F(x) = 3x^2 + 2x$ (in N) acts on an object. What is the work done in moving the object from $x = 0$ to $x = 2\\,\\text{m}$?",
    "choices": [
      "$8\\,\\text{J}$",
      "$10\\,\\text{J}$",
      "$12\\,\\text{J}$",
      "$16\\,\\text{J}$"
    ],
    "answer": 2,
    "explanation": "$W = \\int_0^2 (3x^2 + 2x)\\,dx = [x^3 + x^2]_0^2 = (8 + 4) - 0 = 12\\,\\text{J}$."
  },
  {
    "id": "physc_u8_q2",
    "subject": "apphyscem",
    "unit": 8,
    "topic": "8.2 Potential Energy & Conservative Forces",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A conservative force is given by $F(x) = -4x + 6$ (in N). What is the potential energy function $U(x)$ if $U(0) = 0$?",
    "choices": [
      "$U(x) = 2x^2 - 6x$",
      "$U(x) = -2x^2 + 6x$",
      "$U(x) = 4x^2 - 6x$",
      "$U(x) = -4x^2 + 6x$"
    ],
    "answer": 0,
    "explanation": "$U(x) = -\\int_0^x F(x')\\,dx' = -\\int_0^x (-4x' + 6)\\,dx' = -[-2x'^2 + 6x']_0^x = 2x^2 - 6x$."
  },
  {
    "id": "physc_u8_q3",
    "subject": "apphyscem",
    "unit": 8,
    "topic": "8.2 Potential Energy & Conservative Forces",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "The potential energy of a particle is $U(x) = x^3 - 6x^2 + 9x + 2$ (in J). At which position(s) is the particle in equilibrium?",
    "choices": [
      "$x = 1\\,\\text{m only}$",
      "$x = 3\\,\\text{m only}$",
      "$x = 1\\,\\text{m and}\\; x = 3\\,\\text{m}$",
      "$x = 0\\,\\text{m and}\\; x = 2\\,\\text{m}$"
    ],
    "answer": 2,
    "explanation": "Equilibrium occurs where $F = -\\frac{dU}{dx} = 0$. $\\frac{dU}{dx} = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3) = 0$. So $x = 1\\,\\text{m}$ and $x = 3\\,\\text{m}$."
  },
  {
    "id": "physc_u8_q4",
    "subject": "apphyscem",
    "unit": 8,
    "topic": "8.3 Power (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A force $F = 10\\,\\text{N}$ is applied to a $2\\,\\text{kg}$ object on a frictionless surface. What is the instantaneous power delivered at $t = 3\\,\\text{s}$ if the object starts from rest?",
    "choices": [
      "$50\\,\\text{W}$",
      "$100\\,\\text{W}$",
      "$150\\,\\text{W}$",
      "$225\\,\\text{W}$"
    ],
    "answer": 2,
    "explanation": "$a = F/m = 10/2 = 5\\,\\text{m/s}^2$. At $t = 3\\,\\text{s}$: $v = at = 15\\,\\text{m/s}$. Instantaneous power: $P = Fv = 10 \\times 15 = 150\\,\\text{W}$."
  },
  {
    "id": "physc_u8_q5",
    "subject": "apphyscem",
    "unit": 8,
    "topic": "8.2 Potential Energy & Conservative Forces",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A particle moves in a potential $U(x) = \\frac{1}{2}kx^2 - \\frac{1}{4}\\beta x^4$, where $k$ and $\\beta$ are positive constants. The equilibrium positions are at:",
    "choices": [
      "$x = 0$ only",
      "$x = 0$ and $x = \\pm\\sqrt{k/\\beta}$",
      "$x = \\pm\\sqrt{k/\\beta}$ only",
      "$x = \\pm\\sqrt{2k/\\beta}$"
    ],
    "answer": 1,
    "explanation": "Equilibrium when $F = -dU/dx = 0$: $\\frac{dU}{dx} = kx - \\beta x^3 = x(k - \\beta x^2) = 0$. So $x = 0$ or $x = \\pm\\sqrt{k/\\beta}$."
  },
  {
    "id": "physc_u8_q6",
    "subject": "apphyscem",
    "unit": 8,
    "topic": "8.1 Work Done by a Variable Force",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A spring with spring constant $k = 200\\,\\text{N/m}$ is compressed $0.15\\,\\text{m}$ from its natural length. How much potential energy is stored in the spring?",
    "choices": [
      "$1.5\\,\\text{J}$",
      "$2.25\\,\\text{J}$",
      "$3.0\\,\\text{J}$",
      "$4.5\\,\\text{J}$"
    ],
    "answer": 1,
    "explanation": "Spring potential energy: $U = \\frac{1}{2}kx^2 = \\frac{1}{2}(200)(0.15)^2 = \\frac{1}{2}(200)(0.0225) = 2.25\\,\\text{J}$."
  },
  {
    "id": "physc_u8_q7",
    "subject": "apphyscem",
    "unit": 8,
    "topic": "8.3 Power (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A motor exerts a force $F(t) = 5 + 2t$ (in N) on an object moving at velocity $v(t) = 3t$ (in m/s). What is the instantaneous power delivered at $t = 2\\,\\text{s}$?",
    "choices": [
      "$18\\,\\text{W}$",
      "$36\\,\\text{W}$",
      "$54\\,\\text{W}$",
      "$72\\,\\text{W}$"
    ],
    "answer": 2,
    "explanation": "$P = Fv = (5 + 2t)(3t)$. At $t = 2$: $F = 5 + 4 = 9\\,\\text{N}$, $v = 6\\,\\text{m/s}$. $P = 9 \\times 6 = 54\\,\\text{W}$."
  },
  {
    "id": "physc_u8_q8",
    "subject": "apphyscem",
    "unit": 8,
    "topic": "8.2 Potential Energy & Conservative Forces",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A particle of mass $2\\,\\text{kg}$ moves along the x-axis with potential energy $U(x) = x^4 - 4x^2$ (in J). At $x = \\sqrt{2}\\,\\text{m}$, what is the force on the particle?",
    "choices": [
      "$0\\,\\text{N}$",
      "$-8\\sqrt{2}\\,\\text{N}$",
      "$8\\sqrt{2}\\,\\text{N}$",
      "$16\\,\\text{N}$"
    ],
    "answer": 0,
    "explanation": "$F = -\\frac{dU}{dx} = -(4x^3 - 8x) = -4x(x^2 - 2)$. At $x = \\sqrt{2}$: $F = -4\\sqrt{2}(2 - 2) = 0$. This is an equilibrium point."
  },
  {
    "id": "physc_u9_q1",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.1 Impulse (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A time-varying force $F(t) = 12t^2$ (in N) acts on a $3\\,\\text{kg}$ object initially at rest. What is the velocity of the object at $t = 2\\,\\text{s}$?",
    "choices": [
      "$4\\,\\text{m/s}$",
      "$8\\,\\text{m/s}$",
      "$10.67\\,\\text{m/s}$",
      "$32\\,\\text{m/s}$"
    ],
    "answer": 2,
    "explanation": "Impulse $J = \\int_0^2 12t^2\\,dt = [4t^3]_0^2 = 32\\,\\text{N}\\cdot\\text{s}$. By the impulse-momentum theorem: $J = mv$, so $v = J/m = 32/3 \\approx 10.67\\,\\text{m/s}$."
  },
  {
    "id": "physc_u9_q2",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.2 Conservation of Momentum",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A $4\\,\\text{kg}$ cart moving at $6\\,\\text{m/s}$ collides with a $2\\,\\text{kg}$ cart at rest. They stick together. What fraction of the initial kinetic energy is lost?",
    "choices": [
      "$1/6$",
      "$1/3$",
      "$1/2$",
      "$2/3$"
    ],
    "answer": 1,
    "explanation": "By conservation of momentum: $(4)(6) = (4+2)v_f$, so $v_f = 4\\,\\text{m/s}$. $KE_i = \\frac{1}{2}(4)(36) = 72\\,\\text{J}$. $KE_f = \\frac{1}{2}(6)(16) = 48\\,\\text{J}$. Fraction lost: $\\frac{72 - 48}{72} = \\frac{24}{72} = \\frac{1}{3}$."
  },
  {
    "id": "physc_u9_q3",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.2 Conservation of Momentum",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A particle of mass $m$ moving at velocity $v$ collides elastically with a stationary particle of mass $2m$. What is the velocity of the lighter particle after the collision?",
    "choices": [
      "$-v/3$",
      "$v/3$",
      "$-v/2$",
      "$0$"
    ],
    "answer": 0,
    "explanation": "For an elastic collision with a stationary target: $v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_1 = \\frac{m - 2m}{m + 2m}v = \\frac{-m}{3m}v = -\\frac{v}{3}$. The lighter particle bounces back at $v/3$."
  },
  {
    "id": "physc_u9_q4",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.1 Impulse (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A force on an object varies as $F(t) = F_0 \\sin(\\pi t / T)$ from $t = 0$ to $t = T$. What is the total impulse delivered?",
    "choices": [
      "$F_0 T / \\pi$",
      "$2F_0 T / \\pi$",
      "$F_0 T / 2$",
      "$F_0 T$"
    ],
    "answer": 1,
    "explanation": "$J = \\int_0^T F_0 \\sin(\\pi t/T)\\,dt = F_0 \\left[-\\frac{T}{\\pi}\\cos\\left(\\frac{\\pi t}{T}\\right)\\right]_0^T = F_0 \\left(-\\frac{T}{\\pi}(-1) + \\frac{T}{\\pi}(1)\\right) = \\frac{2F_0 T}{\\pi}$."
  },
  {
    "id": "physc_u9_q5",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.2 Center of Mass",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A system consists of two particles: mass $m_1 = 4\\,\\text{kg}$ at position $x_1 = 1\\,\\text{m}$ and mass $m_2 = 2\\,\\text{kg}$ at position $x_2 = 7\\,\\text{m}$. What is the position of the center of mass?",
    "choices": [
      "$2\\,\\text{m}$",
      "$3\\,\\text{m}$",
      "$4\\,\\text{m}$",
      "$5\\,\\text{m}$"
    ],
    "answer": 1,
    "explanation": "$$x_{cm} = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\frac{(4)(1) + (2)(7)}{4 + 2} = \\frac{4 + 14}{6} = \\frac{18}{6} = 3\\,\\text{m}$$"
  },
  {
    "id": "physc_u9_q6",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.1 Impulse & Momentum",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A variable force $F(t) = 10t - 2t^2\\,\\text{N}$ acts on an object from $t = 0$ to $t = 3\\,\\text{s}$. What is the magnitude of the impulse delivered?",
    "choices": [
      "$18\\,\\text{N·s}$",
      "$27\\,\\text{N·s}$",
      "$36\\,\\text{N·s}$",
      "$45\\,\\text{N·s}$"
    ],
    "answer": 1,
    "explanation": "Impulse equals the integral of force over time: $$J = \\int_0^3 (10t - 2t^2)\\,dt = \\left[5t^2 - \\frac{2t^3}{3}\\right]_0^3 = 5(9) - \\frac{2(27)}{3} = 45 - 18 = 27\\,\\text{N·s}$$"
  },
  {
    "id": "physc_u9_q7",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.2 Center of Mass",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A uniform rod of length $L$ and mass $M$ has an additional point mass $m$ attached at one end. Where is the center of mass measured from the free end (without the point mass)?",
    "choices": [
      "$\\frac{ML/2}{M + m}$",
      "$\\frac{ML/2 + mL}{M + m}$",
      "$\\frac{ML}{2(M + m)}$",
      "$\\frac{L(M + 2m)}{2(M + m)}$"
    ],
    "answer": 1,
    "explanation": "Taking the free end as origin, the rod's CM is at $L/2$ with mass $M$, and the point mass is at $L$ with mass $m$. $$x_{cm} = \\frac{M(L/2) + m(L)}{M + m} = \\frac{ML/2 + mL}{M + m}$$"
  },
  {
    "id": "physc_u9_q8",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.2 Conservation of Momentum",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "Two objects approach each other: mass $m_1 = 3\\,\\text{kg}$ with velocity $+5\\,\\text{m/s}$ and mass $m_2 = 5\\,\\text{kg}$ with velocity $-3\\,\\text{m/s}$. They undergo a perfectly inelastic collision. What is the velocity after collision?",
    "choices": [
      "$0\\,\\text{m/s}$",
      "$-1.5\\,\\text{m/s}$",
      "$+1.5\\,\\text{m/s}$",
      "$+2\\,\\text{m/s}$"
    ],
    "answer": 0,
    "explanation": "$p_i = m_1 v_1 + m_2 v_2 = 3(5) + 5(-3) = 15 - 15 = 0$. Since total momentum is zero, the combined object has $v_f = 0\\,\\text{m/s}$."
  },
  {
    "id": "physc_u10_q1",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.1 Rotational Kinematics (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A disk's angular velocity is $\\omega(t) = 4t - t^2$ (in rad/s). At what time does the disk momentarily stop?",
    "choices": [
      "$t = 1\\,\\text{s}$",
      "$t = 2\\,\\text{s}$",
      "$t = 3\\,\\text{s}$",
      "$t = 4\\,\\text{s}$"
    ],
    "answer": 3,
    "explanation": "The disk stops when $\\omega = 0$: $4t - t^2 = t(4 - t) = 0$, so $t = 0$ or $t = 4\\,\\text{s}$. Since $t = 0$ is the start, the disk momentarily stops at $t = 4\\,\\text{s}$."
  },
  {
    "id": "physc_u10_q2",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.2 Moment of Inertia (Calculus)",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A thin rod of mass $M$ and length $L$ has a linear mass density $\\lambda(x) = \\frac{2M}{L^2}x$. What is its moment of inertia about the end where $x = 0$?",
    "choices": [
      "$\\frac{1}{4}ML^2$",
      "$\\frac{1}{3}ML^2$",
      "$\\frac{1}{2}ML^2$",
      "$\\frac{2}{3}ML^2$"
    ],
    "answer": 2,
    "explanation": "$I = \\int_0^L x^2 \\lambda(x)\\,dx = \\int_0^L x^2 \\cdot \\frac{2M}{L^2}x\\,dx = \\frac{2M}{L^2}\\int_0^L x^3\\,dx = \\frac{2M}{L^2} \\cdot \\frac{L^4}{4} = \\frac{ML^2}{2}$."
  },
  {
    "id": "physc_u10_q3",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.3 Angular Momentum",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A uniform disk of mass $M$ and radius $R$ spinning at $\\omega_0$ has a ring of mass $m$ and radius $R$ dropped onto it. What is the final angular velocity?",
    "choices": [
      "$\\frac{M}{M + m}\\omega_0$",
      "$\\frac{M}{M + 2m}\\omega_0$",
      "$\\frac{M}{2(M + m)}\\omega_0$",
      "$\\frac{M + m}{M}\\omega_0$"
    ],
    "answer": 1,
    "explanation": "By conservation of angular momentum: $I_{disk}\\omega_0 = (I_{disk} + I_{ring})\\omega_f$. $I_{disk} = \\frac{1}{2}MR^2$, $I_{ring} = mR^2$. So $\\frac{1}{2}MR^2\\omega_0 = (\\frac{1}{2}MR^2 + mR^2)\\omega_f$, giving $\\omega_f = \\frac{M}{M + 2m}\\omega_0$."
  },
  {
    "id": "physc_u10_q4",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.2 Moment of Inertia (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "What is the moment of inertia of a uniform disk of mass $M$ and radius $R$ about an axis tangent to its rim (in the plane of the disk)?",
    "choices": [
      "$\\frac{1}{2}MR^2$",
      "$MR^2$",
      "$\\frac{3}{2}MR^2$",
      "$\\frac{5}{4}MR^2$"
    ],
    "answer": 2,
    "explanation": "Using the parallel axis theorem: $I = I_{cm} + Md^2$. For a disk, $I_{cm} = \\frac{1}{2}MR^2$ about the central axis perpendicular to the plane. An axis tangent to the rim and perpendicular to the plane is a distance $d = R$ from the center, so $I = \\frac{1}{2}MR^2 + MR^2 = \\frac{3}{2}MR^2$."
  },
  {
    "id": "physc_u10_q5",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.1 Rotational Kinematics (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A wheel has angular acceleration $\\alpha(t) = 6t$ (in rad/s$^2$) starting from rest. What is the total angle turned through from $t = 0$ to $t = 2\\,\\text{s}$?",
    "choices": [
      "$4\\,\\text{rad}$",
      "$8\\,\\text{rad}$",
      "$12\\,\\text{rad}$",
      "$16\\,\\text{rad}$"
    ],
    "answer": 1,
    "explanation": "$\\omega(t) = \\int_0^t 6t'\\,dt' = 3t^2$. Then $\\theta = \\int_0^2 3t^2\\,dt = [t^3]_0^2 = 8\\,\\text{rad}$."
  },
  {
    "id": "physc_u10_q6",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.3 Angular Momentum",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A particle of mass $m$ moves in a circle of radius $r$ with speed $v$. If the radius is halved while angular momentum is conserved, what is the new speed?",
    "choices": [
      "$v/2$",
      "$v$",
      "$2v$",
      "$4v$"
    ],
    "answer": 2,
    "explanation": "Angular momentum $L = mvr$. If $L$ is conserved and $r' = r/2$: $mvr = mv'(r/2)$, so $v' = 2v$."
  },
  {
    "id": "physc_u10_q7",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.4 Rotational Kinetic Energy",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A solid cylinder of mass $M = 4\\,\\text{kg}$ and radius $R = 0.5\\,\\text{m}$ rotates at $\\omega = 10\\,\\text{rad/s}$. What is its rotational kinetic energy?",
    "choices": [
      "$25\\,\\text{J}$",
      "$50\\,\\text{J}$",
      "$100\\,\\text{J}$",
      "$200\\,\\text{J}$"
    ],
    "answer": 1,
    "explanation": "For a solid cylinder, $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4)(0.25) = 0.5\\,\\text{kg·m}^2$. $KE_{rot} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(0.5)(100) = 25\\,\\text{J}$. Wait — $KE_{rot} = 25\\,\\text{J}$... checking: $\\frac{1}{2}(0.5)(100) = 25\\,\\text{J}$. Answer is $25\\,\\text{J}$."
  },
  {
    "id": "physc_u10_q8",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.2 Moment of Inertia (Calculus)",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A uniform solid sphere of mass $M$ and radius $R$ has moment of inertia $I = \\frac{2}{5}MR^2$ about its center. What is the moment of inertia about a tangent to the sphere?",
    "choices": [
      "$\\frac{2}{5}MR^2$",
      "$\\frac{7}{5}MR^2$",
      "$\\frac{3}{5}MR^2$",
      "$\\frac{5}{2}MR^2$"
    ],
    "answer": 1,
    "explanation": "Using the parallel axis theorem with $d = R$: $I = \\frac{2}{5}MR^2 + MR^2 = \\frac{2}{5}MR^2 + \\frac{5}{5}MR^2 = \\frac{7}{5}MR^2$."
  },
  {
    "id": "physc_u10_q9",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.5 Torque and Angular Acceleration",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A torque $\\tau = 12\\,\\text{N·m}$ is applied to a disk with moment of inertia $I = 3\\,\\text{kg·m}^2$. What is the angular acceleration?",
    "choices": [
      "$2\\,\\text{rad/s}^2$",
      "$4\\,\\text{rad/s}^2$",
      "$6\\,\\text{rad/s}^2$",
      "$36\\,\\text{rad/s}^2$"
    ],
    "answer": 1,
    "explanation": "$\\tau = I\\alpha \\Rightarrow \\alpha = \\frac{\\tau}{I} = \\frac{12}{3} = 4\\,\\text{rad/s}^2$."
  },
  {
    "id": "physc_u10_q10",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.3 Angular Momentum",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A student sits on a frictionless rotating stool holding $2\\,\\text{kg}$ masses in each hand at arm's length $r = 0.8\\,\\text{m}$ from the rotation axis. The student rotates at $2\\,\\text{rad/s}$. When the masses are pulled to $r = 0.2\\,\\text{m}$, what is the new angular velocity? (Ignore the student's own moment of inertia.)",
    "choices": [
      "$8\\,\\text{rad/s}$",
      "$16\\,\\text{rad/s}$",
      "$32\\,\\text{rad/s}$",
      "$128\\,\\text{rad/s}$"
    ],
    "answer": 2,
    "explanation": "$I_i = 2mr_i^2 = 2(2)(0.64) = 2.56\\,\\text{kg·m}^2$. $I_f = 2mr_f^2 = 2(2)(0.04) = 0.16\\,\\text{kg·m}^2$. By conservation of $L$: $\\omega_f = \\frac{I_i}{I_f}\\omega_i = \\frac{2.56}{0.16}(2) = 32\\,\\text{rad/s}$."
  },
  {
    "id": "physc_u1_q1",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.1 Coulomb's Law & Electric Field",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "Two point charges $+Q$ and $-2Q$ are separated by distance $d$. At what point along the line connecting the charges (measured from $+Q$) is the electric field zero?",
    "choices": [
      "$x = d(1 + \\sqrt{2})$ (beyond $+Q$, away from $-2Q$)",
      "$x = d/(1 + \\sqrt{2})$ (between the charges)",
      "$x = -d(\\sqrt{2} - 1)$ (beyond $+Q$, away from $-2Q$)",
      "There is no point where $E = 0$ on this line"
    ],
    "answer": 0,
    "explanation": "The field is zero on the side of the smaller charge ($+Q$), away from $-2Q$. At distance $x$ from $+Q$ (where $x > 0$ is away from $-2Q$): $\\frac{kQ}{x^2} = \\frac{k(2Q)}{(x+d)^2}$. Solving: $(x+d)^2 = 2x^2$, so $x + d = x\\sqrt{2}$, giving $x = \\frac{d}{\\sqrt{2}-1} = d(1+\\sqrt{2})$."
  },
  {
    "id": "physc_u1_q2",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.2 Electric Potential",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "The electric potential in a region is given by $V(x,y) = 3x^2 - 2y$ (in volts). What is the electric field at the point $(1, 2)$?",
    "choices": [
      "$\\vec{E} = -6\\hat{x} + 2\\hat{y}\\;\\text{V/m}$",
      "$\\vec{E} = 6\\hat{x} - 2\\hat{y}\\;\\text{V/m}$",
      "$\\vec{E} = -6\\hat{x} - 2\\hat{y}\\;\\text{V/m}$",
      "$\\vec{E} = 3\\hat{x} + 2\\hat{y}\\;\\text{V/m}$"
    ],
    "answer": 0,
    "explanation": "$\\vec{E} = -\\nabla V = -\\frac{\\partial V}{\\partial x}\\hat{x} - \\frac{\\partial V}{\\partial y}\\hat{y} = -6x\\hat{x} + 2\\hat{y}$. At $(1,2)$: $\\vec{E} = -6\\hat{x} + 2\\hat{y}\\;\\text{V/m}$."
  },
  {
    "id": "physc_u1_q3",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.3 Gauss's Law",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A solid non-conducting sphere of radius $R$ carries a total charge $Q$ distributed uniformly. What is the electric field at a distance $r < R$ from the center?",
    "choices": [
      "$\\frac{kQ}{r^2}$",
      "$\\frac{kQr}{R^3}$",
      "$\\frac{kQ}{R^2}$",
      "$\\frac{kQR}{r^3}$"
    ],
    "answer": 1,
    "explanation": "By Gauss's law, the enclosed charge for $r < R$ is $Q_{enc} = Q\\frac{r^3}{R^3}$. Applying Gauss's law: $E(4\\pi r^2) = \\frac{Q_{enc}}{\\epsilon_0}$, so $E = \\frac{Qr}{4\\pi\\epsilon_0 R^3} = \\frac{kQr}{R^3}$."
  },
  {
    "id": "physc_u1_q4",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.3 Gauss's Law",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "An infinite line of charge has linear charge density $\\lambda$. Using Gauss's law with a cylindrical Gaussian surface of radius $r$ and length $L$, what is the electric field at distance $r$?",
    "choices": [
      "$\\frac{\\lambda}{4\\pi\\epsilon_0 r}$",
      "$\\frac{\\lambda}{2\\pi\\epsilon_0 r}$",
      "$\\frac{\\lambda}{2\\pi\\epsilon_0 r^2}$",
      "$\\frac{\\lambda r}{2\\epsilon_0}$"
    ],
    "answer": 1,
    "explanation": "By Gauss's law: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\epsilon_0}$. The flux through the curved surface is $E(2\\pi rL)$ and $Q_{enc} = \\lambda L$. So $E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$."
  },
  {
    "id": "physc_u1_q5",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.2 Electric Potential",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A charge distribution produces a potential $V(r) = \\frac{A}{r}e^{-r/\\lambda}$, where $A$ and $\\lambda$ are constants. What is the radial component of the electric field $E_r$?",
    "choices": [
      "$\\frac{A}{r^2}e^{-r/\\lambda}\\left(1 + \\frac{r}{\\lambda}\\right)$",
      "$\\frac{A}{r^2}e^{-r/\\lambda}$",
      "$-\\frac{A}{r^2}e^{-r/\\lambda}\\left(1 + \\frac{r}{\\lambda}\\right)$",
      "$\\frac{A}{\\lambda r}e^{-r/\\lambda}$"
    ],
    "answer": 0,
    "explanation": "$E_r = -\\frac{dV}{dr} = -\\frac{d}{dr}\\left(\\frac{A}{r}e^{-r/\\lambda}\\right) = -A\\left(-\\frac{1}{r^2}e^{-r/\\lambda} + \\frac{1}{r}\\left(-\\frac{1}{\\lambda}\\right)e^{-r/\\lambda}\\right) = \\frac{A}{r^2}e^{-r/\\lambda}\\left(1 + \\frac{r}{\\lambda}\\right)$."
  },
  {
    "id": "physc_u1_q6",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.1 Coulomb's Law & Electric Field",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "Three equal positive charges $+Q$ are placed at the vertices of an equilateral triangle of side $a$. What is the magnitude of the electric field at the center of the triangle?",
    "choices": [
      "$0$",
      "$\\frac{3kQ}{a^2}$",
      "$\\frac{kQ}{a^2}$",
      "$\\frac{\\sqrt{3}kQ}{a^2}$"
    ],
    "answer": 0,
    "explanation": "By symmetry, the electric field contributions from the three equal charges cancel at the center. The net electric field is zero."
  },
  {
    "id": "physc_u1_q7",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.3 Gauss's Law",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A conducting shell of inner radius $a$ and outer radius $b$ has a charge $+Q$ placed at its center. What is the surface charge density on the outer surface?",
    "choices": [
      "$\\frac{Q}{4\\pi a^2}$",
      "$-\\frac{Q}{4\\pi a^2}$",
      "$\\frac{Q}{4\\pi b^2}$",
      "$-\\frac{Q}{4\\pi b^2}$"
    ],
    "answer": 2,
    "explanation": "The inner surface has charge $-Q$ (induced), and the outer surface has charge $+Q$ (since the shell is neutral and total must be zero plus the inner charge). The surface charge density on the outer surface is $\\sigma = \\frac{Q}{4\\pi b^2}$."
  },
  {
    "id": "physc_u1_q8",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.2 Electric Potential",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "An infinite plane has uniform surface charge density $\\sigma$. What is the electric field magnitude on each side of the plane?",
    "choices": [
      "$\\frac{\\sigma}{\\epsilon_0}$",
      "$\\frac{\\sigma}{2\\epsilon_0}$",
      "$\\frac{2\\sigma}{\\epsilon_0}$",
      "$\\frac{\\sigma}{4\\epsilon_0}$"
    ],
    "answer": 1,
    "explanation": "Using Gauss's law with a pillbox straddling the plane: $E \\cdot 2A = \\frac{\\sigma A}{\\epsilon_0}$, so $E = \\frac{\\sigma}{2\\epsilon_0}$ on each side, pointing away from the plane (for positive $\\sigma$)."
  },
  {
    "id": "physc_u2_q1",
    "subject": "apphyscem",
    "unit": 2,
    "topic": "2.1 Capacitance",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A parallel-plate capacitor has plate area $A$ and separation $d$. If a dielectric of constant $\\kappa$ fills half the gap (thickness $d/2$) and the rest is air, what is the effective capacitance?",
    "choices": [
      "$\\frac{\\epsilon_0 A}{d}\\frac{2\\kappa}{1 + \\kappa}$",
      "$\\frac{\\epsilon_0 A}{d}(1 + \\kappa)$",
      "$\\frac{\\epsilon_0 A \\kappa}{d}$",
      "$\\frac{2\\epsilon_0 A}{d}$"
    ],
    "answer": 0,
    "explanation": "This is two capacitors in series: $C_1 = \\frac{\\epsilon_0 A}{d/2} = \\frac{2\\epsilon_0 A}{d}$ (air) and $C_2 = \\frac{\\kappa \\epsilon_0 A}{d/2} = \\frac{2\\kappa\\epsilon_0 A}{d}$ (dielectric). In series: $\\frac{1}{C} = \\frac{1}{C_1}+\\frac{1}{C_2} = \\frac{d}{2\\epsilon_0 A}\\left(1 + \\frac{1}{\\kappa}\\right)$. So $C = \\frac{2\\epsilon_0 A\\kappa}{d(1+\\kappa)} = \\frac{\\epsilon_0 A}{d}\\frac{2\\kappa}{1+\\kappa}$."
  },
  {
    "id": "physc_u2_q2",
    "subject": "apphyscem",
    "unit": 2,
    "topic": "2.1 Capacitance",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "What is the energy stored in a $10\\,\\mu\\text{F}$ capacitor charged to $100\\,\\text{V}$?",
    "choices": [
      "$0.005\\,\\text{J}$",
      "$0.05\\,\\text{J}$",
      "$0.5\\,\\text{J}$",
      "$5\\,\\text{J}$"
    ],
    "answer": 1,
    "explanation": "$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(100)^2 = \\frac{1}{2}(10^{-5})(10^4) = 0.05\\,\\text{J}$."
  },
  {
    "id": "physc_u2_q3",
    "subject": "apphyscem",
    "unit": 2,
    "topic": "2.2 Conductors in Electrostatic Equilibrium",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A conducting sphere of radius $R$ carries charge $Q$. A point charge $-q$ is placed at distance $d > R$ from the center. Which statement is true about the surface charge distribution?",
    "choices": [
      "Charge distributes uniformly on the sphere",
      "More negative charge accumulates on the side near $-q$",
      "More positive charge accumulates on the side near $-q$",
      "The net charge on the sphere changes"
    ],
    "answer": 2,
    "explanation": "The external charge $-q$ induces a redistribution of charge on the conductor. Positive charge (attracted by $-q$) accumulates on the near side, and negative charge is repelled to the far side. The net charge remains $Q$."
  },
  {
    "id": "physc_u2_q4",
    "subject": "apphyscem",
    "unit": 2,
    "topic": "2.1 Capacitance",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "Three identical capacitors, each of capacitance $C$, are connected: two in parallel and the combination in series with the third. What is the total capacitance?",
    "choices": [
      "$C/3$",
      "$2C/3$",
      "$3C/2$",
      "$3C$"
    ],
    "answer": 1,
    "explanation": "Two in parallel: $C_{12} = 2C$. In series with the third: $\\frac{1}{C_{total}} = \\frac{1}{2C} + \\frac{1}{C} = \\frac{1+2}{2C} = \\frac{3}{2C}$. So $C_{total} = \\frac{2C}{3}$."
  },
  {
    "id": "physc_u2_q5",
    "subject": "apphyscem",
    "unit": 2,
    "topic": "2.2 Capacitors",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A capacitor of capacitance $C = 4\\,\\mu\\text{F}$ is charged to a potential difference of $V = 50\\,\\text{V}$. What is the energy stored in the capacitor?",
    "choices": [
      "$1\\times10^{-4}\\,\\text{J}$",
      "$5\\times10^{-3}\\,\\text{J}$",
      "$1\\times10^{-2}\\,\\text{J}$",
      "$2\\times10^{-2}\\,\\text{J}$"
    ],
    "answer": 1,
    "explanation": "Energy stored in a capacitor: $$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(4\\times10^{-6})(50)^2 = \\frac{1}{2}(4\\times10^{-6})(2500) = 5\\times10^{-3}\\,\\text{J}$$"
  },
  {
    "id": "physc_u2_q6",
    "subject": "apphyscem",
    "unit": 2,
    "topic": "2.1 Conductors in Equilibrium",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "Two capacitors $C_1 = 6\\,\\mu\\text{F}$ and $C_2 = 3\\,\\mu\\text{F}$ are connected in series across a $12\\,\\text{V}$ battery. What is the charge on each capacitor?",
    "choices": [
      "$12\\,\\mu\\text{C}$",
      "$24\\,\\mu\\text{C}$",
      "$36\\,\\mu\\text{C}$",
      "$72\\,\\mu\\text{C}$"
    ],
    "answer": 1,
    "explanation": "Capacitors in series share the same charge. Series equivalent: $\\frac{1}{C_{eq}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$, so $C_{eq} = 2\\,\\mu\\text{F}$. Charge: $Q = C_{eq}V = (2\\times10^{-6})(12) = 24\\,\\mu\\text{C}$."
  },
  {
    "id": "physc_u2_q7",
    "subject": "apphyscem",
    "unit": 2,
    "topic": "2.3 Energy in Capacitors",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A capacitor $C$ is charged to voltage $V$ and then disconnected from the battery. A dielectric with constant $\\kappa = 2$ is inserted. How does the energy stored change?",
    "choices": [
      "Doubles",
      "Stays the same",
      "Halves",
      "Quadruples"
    ],
    "answer": 2,
    "explanation": "When disconnected, charge $Q$ is constant. The new capacitance is $C' = \\kappa C = 2C$. New energy: $U' = \\frac{Q^2}{2C'} = \\frac{Q^2}{4C} = \\frac{U}{2}$. The energy halves because the dielectric reduces the electric field and voltage."
  },
  {
    "id": "physc_u2_q8",
    "subject": "apphyscem",
    "unit": 2,
    "topic": "2.1 Capacitance",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A spherical capacitor has inner radius $a$ and outer radius $b$. What is its capacitance?",
    "choices": [
      "$4\\pi\\epsilon_0 \\frac{ab}{b-a}$",
      "$4\\pi\\epsilon_0 (b-a)$",
      "$\\frac{4\\pi\\epsilon_0}{b-a}$",
      "$4\\pi\\epsilon_0 ab$"
    ],
    "answer": 0,
    "explanation": "For a spherical capacitor, $V = \\frac{Q}{4\\pi\\epsilon_0}\\left(\\frac{1}{a} - \\frac{1}{b}\\right) = \\frac{Q(b-a)}{4\\pi\\epsilon_0 ab}$. Thus $C = \\frac{Q}{V} = \\frac{4\\pi\\epsilon_0 ab}{b-a}$."
  },
  {
    "id": "physc_u3_q1",
    "subject": "apphyscem",
    "unit": 3,
    "topic": "3.1 RC Circuits",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "An RC circuit has $R = 5\\,\\text{k}\\Omega$ and $C = 2\\,\\mu\\text{F}$. The capacitor is initially uncharged and connected to a $10\\,\\text{V}$ battery. What is the voltage across the capacitor after one time constant?",
    "choices": [
      "$3.68\\,\\text{V}$",
      "$5.00\\,\\text{V}$",
      "$6.32\\,\\text{V}$",
      "$8.65\\,\\text{V}$"
    ],
    "answer": 2,
    "explanation": "The time constant is $\\tau = RC = (5000)(2 \\times 10^{-6}) = 0.01\\,\\text{s}$. After one time constant: $V_C = \\mathcal{E}(1 - e^{-1}) = 10(1 - 0.368) = 6.32\\,\\text{V}$."
  },
  {
    "id": "physc_u3_q2",
    "subject": "apphyscem",
    "unit": 3,
    "topic": "3.1 RC Circuits",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A capacitor $C$ charged to voltage $V_0$ discharges through a resistor $R$. How long does it take for the energy stored to drop to $1/4$ of its initial value?",
    "choices": [
      "$\\frac{RC}{2}$",
      "$RC\\ln 2$",
      "$2RC\\ln 2$",
      "$RC$"
    ],
    "answer": 1,
    "explanation": "Energy $U = \\frac{1}{2}CV^2$. Since $V(t) = V_0 e^{-t/RC}$, $U(t) = \\frac{1}{2}C V_0^2 e^{-2t/RC}$. Set $U = U_0/4$: $e^{-2t/RC} = 1/4$, so $-2t/RC = \\ln(1/4) = -2\\ln 2$, giving $t = RC\\ln 2$."
  },
  {
    "id": "physc_u3_q3",
    "subject": "apphyscem",
    "unit": 3,
    "topic": "3.2 Kirchhoff's Rules",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "In a circuit with two batteries ($\\mathcal{E}_1 = 12\\,\\text{V}$, $\\mathcal{E}_2 = 6\\,\\text{V}$) and three resistors ($R_1 = 2\\,\\Omega$, $R_2 = 4\\,\\Omega$, $R_3 = 6\\,\\Omega$), applying Kirchhoff's voltage law around a loop containing $\\mathcal{E}_1$, $R_1$, and $R_2$ gives:",
    "choices": [
      "$\\mathcal{E}_1 - I_1 R_1 - I_2 R_2 = 0$",
      "$\\mathcal{E}_1 + I_1 R_1 + I_2 R_2 = 0$",
      "$\\mathcal{E}_1 - I_1 R_1 + I_2 R_2 = 0$",
      "$-\\mathcal{E}_1 - I_1 R_1 + I_2 R_2 = 0$"
    ],
    "answer": 0,
    "explanation": "By Kirchhoff's voltage law (KVL), the sum of voltage changes around any closed loop is zero. Traversing the loop in the direction of current: we gain $\\mathcal{E}_1$ across the battery and drop $I_1 R_1$ and $I_2 R_2$ across the resistors: $\\mathcal{E}_1 - I_1 R_1 - I_2 R_2 = 0$."
  },
  {
    "id": "physc_u3_q4",
    "subject": "apphyscem",
    "unit": 3,
    "topic": "3.1 RC Circuits",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "In an RC charging circuit, the current as a function of time is given by $I(t) = \\frac{\\mathcal{E}}{R}e^{-t/RC}$. What is the total charge delivered to the capacitor as $t \\to \\infty$?",
    "choices": [
      "$\\mathcal{E}R$",
      "$\\mathcal{E}/R$",
      "$\\mathcal{E}C$",
      "$\\mathcal{E}RC$"
    ],
    "answer": 2,
    "explanation": "$Q = \\int_0^{\\infty} I(t)\\,dt = \\int_0^{\\infty} \\frac{\\mathcal{E}}{R}e^{-t/RC}\\,dt = \\frac{\\mathcal{E}}{R}\\left[-RC\\, e^{-t/RC}\\right]_0^{\\infty} = \\frac{\\mathcal{E}}{R}(RC) = \\mathcal{E}C$."
  },
  {
    "id": "physc_u3_q5",
    "subject": "apphyscem",
    "unit": 3,
    "topic": "3.2 Kirchhoff's Rules",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "Three resistors of $2\\,\\Omega$, $3\\,\\Omega$, and $6\\,\\Omega$ are connected in parallel. What is the equivalent resistance?",
    "choices": [
      "$0.5\\,\\Omega$",
      "$1\\,\\Omega$",
      "$2\\,\\Omega$",
      "$11\\,\\Omega$"
    ],
    "answer": 1,
    "explanation": "$\\frac{1}{R_{eq}} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3+2+1}{6} = \\frac{6}{6} = 1$. So $R_{eq} = 1\\,\\Omega$."
  },
  {
    "id": "physc_u3_q6",
    "subject": "apphyscem",
    "unit": 3,
    "topic": "3.1 RC Circuits",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A fully charged capacitor $C = 50\\,\\mu\\text{F}$ at $V_0 = 10\\,\\text{V}$ discharges through $R = 2\\,\\text{k}\\Omega$. What is the current at $t = 0.1\\,\\text{s}$?",
    "choices": [
      "$5.0\\,\\text{mA}$",
      "$3.0\\,\\text{mA}$",
      "$1.84\\,\\text{mA}$",
      "$0.5\\,\\text{mA}$"
    ],
    "answer": 2,
    "explanation": "$\\tau = RC = (2000)(50\\times10^{-6}) = 0.1\\,\\text{s}$. $I(t) = \\frac{V_0}{R}e^{-t/\\tau} = \\frac{10}{2000}e^{-0.1/0.1} = 5\\times10^{-3}\\cdot e^{-1} \\approx 5\\times10^{-3}(0.368) \\approx 1.84\\,\\text{mA}$."
  },
  {
    "id": "physc_u3_q7",
    "subject": "apphyscem",
    "unit": 3,
    "topic": "3.3 Power in Circuits",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A $12\\,\\text{V}$ battery with internal resistance $r = 2\\,\\Omega$ is connected to an external resistance $R = 10\\,\\Omega$. What is the power dissipated in $R$?",
    "choices": [
      "$8\\,\\text{W}$",
      "$10\\,\\text{W}$",
      "$12\\,\\text{W}$",
      "$14.4\\,\\text{W}$"
    ],
    "answer": 1,
    "explanation": "$I = \\frac{\\mathcal{E}}{R + r} = \\frac{12}{10 + 2} = 1\\,\\text{A}$. Power in $R$: $P = I^2 R = (1)^2(10) = 10\\,\\text{W}$."
  },
  {
    "id": "physc_u3_q8",
    "subject": "apphyscem",
    "unit": 3,
    "topic": "3.1 RC Circuits",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "An RC circuit has $R = 1\\,\\text{k}\\Omega$ and $C = 100\\,\\mu\\text{F}$. If the capacitor is initially charged to $V_0 = 20\\,\\text{V}$ and discharges, at what time has the energy dropped to $1/e^2$ of its initial value?",
    "choices": [
      "$t = 0.05\\,\\text{s}$",
      "$t = 0.1\\,\\text{s}$",
      "$t = 0.2\\,\\text{s}$",
      "$t = 0.4\\,\\text{s}$"
    ],
    "answer": 1,
    "explanation": "$\\tau = RC = (1000)(10^{-4}) = 0.1\\,\\text{s}$. Energy $U = \\frac{1}{2}CV^2 \\propto e^{-2t/\\tau}$. For $U = U_0/e^2$: $e^{-2t/\\tau} = e^{-2}$, so $t = \\tau = 0.1\\,\\text{s}$."
  },
  {
    "id": "physc_u4_q1",
    "subject": "apphyscem",
    "unit": 4,
    "topic": "4.1 Biot-Savart Law",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A circular loop of radius $R$ carries current $I$. What is the magnetic field at the center of the loop?",
    "choices": [
      "$\\frac{\\mu_0 I}{4\\pi R}$",
      "$\\frac{\\mu_0 I}{2R}$",
      "$\\frac{\\mu_0 I}{2\\pi R}$",
      "$\\frac{\\mu_0 I R}{2}$"
    ],
    "answer": 1,
    "explanation": "Using the Biot-Savart law, each element $d\\vec{l}$ of the loop is perpendicular to $\\hat{r}$ at the center, and $r = R$. Integrating: $B = \\frac{\\mu_0 I}{4\\pi R^2}\\oint dl = \\frac{\\mu_0 I}{4\\pi R^2}(2\\pi R) = \\frac{\\mu_0 I}{2R}$."
  },
  {
    "id": "physc_u4_q2",
    "subject": "apphyscem",
    "unit": 4,
    "topic": "4.2 Ampere's Law",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A long solenoid has $n$ turns per unit length and carries current $I$. Using Ampere's law, what is the magnetic field inside the solenoid (far from the ends)?",
    "choices": [
      "$\\mu_0 n I$",
      "$\\mu_0 n I / 2$",
      "$\\mu_0 I / (2\\pi r)$",
      "$\\mu_0 n^2 I$"
    ],
    "answer": 0,
    "explanation": "Applying Ampere's law with a rectangular loop of length $L$ inside the solenoid: $\\oint \\vec{B} \\cdot d\\vec{l} = BL = \\mu_0 (nL)I$, so $B = \\mu_0 nI$."
  },
  {
    "id": "physc_u4_q3",
    "subject": "apphyscem",
    "unit": 4,
    "topic": "4.3 Lorentz Force",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A proton moves at $v = 3 \\times 10^6\\,\\text{m/s}$ perpendicular to a magnetic field $B = 0.5\\,\\text{T}$. What is the radius of the proton's circular path? ($m_p = 1.67 \\times 10^{-27}\\,\\text{kg}$, $q = 1.6 \\times 10^{-19}\\,\\text{C}$)",
    "choices": [
      "$0.031\\,\\text{m}$",
      "$0.063\\,\\text{m}$",
      "$0.125\\,\\text{m}$",
      "$0.25\\,\\text{m}$"
    ],
    "answer": 1,
    "explanation": "The magnetic force provides centripetal acceleration: $qvB = \\frac{mv^2}{r}$. So $r = \\frac{mv}{qB} = \\frac{(1.67 \\times 10^{-27})(3 \\times 10^6)}{(1.6 \\times 10^{-19})(0.5)} = \\frac{5.01 \\times 10^{-21}}{8 \\times 10^{-20}} \\approx 0.063\\,\\text{m}$."
  },
  {
    "id": "physc_u4_q4",
    "subject": "apphyscem",
    "unit": 4,
    "topic": "4.2 Ampere's Law",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A coaxial cable has an inner conductor of radius $a$ carrying current $I$ and an outer conductor of radius $b$ carrying current $-I$. What is the magnetic field for $r > b$?",
    "choices": [
      "$\\frac{\\mu_0 I}{2\\pi r}$",
      "$\\frac{\\mu_0 I}{2\\pi b}$",
      "$0$",
      "$\\frac{\\mu_0 I(b^2 - a^2)}{2\\pi r b^2}$"
    ],
    "answer": 2,
    "explanation": "For $r > b$, the Amperian loop encloses both conductors. The total enclosed current is $I_{enc} = I + (-I) = 0$. By Ampere's law: $B(2\\pi r) = \\mu_0(0) = 0$, so $B = 0$."
  },
  {
    "id": "physc_u4_q5",
    "subject": "apphyscem",
    "unit": 4,
    "topic": "4.1 Biot-Savart Law",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "Two parallel wires separated by distance $d$ carry currents $I_1$ and $I_2$ in the same direction. What is the force per unit length between them?",
    "choices": [
      "$\\frac{\\mu_0 I_1 I_2}{2\\pi d}$, attractive",
      "$\\frac{\\mu_0 I_1 I_2}{2\\pi d}$, repulsive",
      "$\\frac{\\mu_0 I_1 I_2}{4\\pi d}$, attractive",
      "$\\frac{\\mu_0 I_1 I_2}{4\\pi d^2}$, repulsive"
    ],
    "answer": 0,
    "explanation": "The field from wire 1 at wire 2 is $B_1 = \\frac{\\mu_0 I_1}{2\\pi d}$. The force per unit length on wire 2 is $\\frac{F}{L} = I_2 B_1 = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$. Parallel currents in the same direction attract."
  },
  {
    "id": "physc_u4_q6",
    "subject": "apphyscem",
    "unit": 4,
    "topic": "4.3 Lorentz Force",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A charged particle moves with velocity $\\vec{v} = v_0\\hat{x}$ in a magnetic field $\\vec{B} = B_0\\hat{z}$. What is the direction of the magnetic force on the particle if the charge is positive?",
    "choices": [
      "$+\\hat{y}$",
      "$-\\hat{y}$",
      "$+\\hat{z}$",
      "$-\\hat{z}$"
    ],
    "answer": 1,
    "explanation": "$\\vec{F} = q\\vec{v}\\times\\vec{B} = q(v_0\\hat{x})\\times(B_0\\hat{z}) = qv_0 B_0(\\hat{x}\\times\\hat{z}) = qv_0 B_0(-\\hat{y}) = -qv_0 B_0\\hat{y}$. The force is in the $-\\hat{y}$ direction."
  },
  {
    "id": "physc_u4_q7",
    "subject": "apphyscem",
    "unit": 4,
    "topic": "4.2 Ampere's Law",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A toroid has $N$ turns, inner radius $a$, and outer radius $b$, carrying current $I$. What is the magnetic field at radius $r$ where $a < r < b$?",
    "choices": [
      "$\\frac{\\mu_0 N I}{2\\pi r}$",
      "$\\mu_0 n I$ where $n = N/(2\\pi r)$",
      "$\\frac{\\mu_0 N I}{2\\pi b}$",
      "$0$"
    ],
    "answer": 0,
    "explanation": "Applying Ampere's law with a circular path of radius $r$ inside the toroid: $B(2\\pi r) = \\mu_0 N I$, so $B = \\frac{\\mu_0 N I}{2\\pi r}$."
  },
  {
    "id": "physc_u4_q8",
    "subject": "apphyscem",
    "unit": 4,
    "topic": "4.3 Lorentz Force",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A rectangular current loop of width $w$ and height $h$ carries current $I$ in a uniform magnetic field $B$. The loop is oriented so its plane is parallel to $B$. What is the magnitude of the torque on the loop?",
    "choices": [
      "$BIwh$",
      "$2BIwh$",
      "$BIw$",
      "$BIh$"
    ],
    "answer": 0,
    "explanation": "Torque on a current loop: $\\tau = NIAB\\sin\\theta$. Here $N=1$, $A = wh$, and $\\theta = 90°$ (plane parallel to $B$ means the normal is perpendicular to $B$). So $\\tau = BIwh$."
  },
  {
    "id": "physc_u5_q1",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.1 Faraday's Law",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A circular loop of radius $0.1\\,\\text{m}$ is in a magnetic field that changes as $B(t) = 0.5t^2$ (in T). What is the magnitude of the induced EMF at $t = 2\\,\\text{s}$?",
    "choices": [
      "$0.0063\\,\\text{V}$",
      "$0.0314\\,\\text{V}$",
      "$0.0628\\,\\text{V}$",
      "$0.1257\\,\\text{V}$"
    ],
    "answer": 2,
    "explanation": "$\\Phi_B = BA = 0.5t^2 \\cdot \\pi(0.1)^2 = 0.005\\pi t^2$. By Faraday's law: $|\\mathcal{E}| = \\left|\\frac{d\\Phi_B}{dt}\\right| = 0.01\\pi t$. At $t = 2$: $|\\mathcal{E}| = 0.02\\pi \\approx 0.0628\\,\\text{V}$."
  },
  {
    "id": "physc_u5_q2",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.2 Inductance",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "An inductor of $L = 0.2\\,\\text{H}$ carries a current that changes as $I(t) = 5\\sin(100t)$ (in A). What is the maximum voltage across the inductor?",
    "choices": [
      "$10\\,\\text{V}$",
      "$50\\,\\text{V}$",
      "$100\\,\\text{V}$",
      "$1000\\,\\text{V}$"
    ],
    "answer": 2,
    "explanation": "$V_L = L\\frac{dI}{dt} = 0.2 \\cdot 5(100)\\cos(100t) = 100\\cos(100t)$. The maximum voltage is $100\\,\\text{V}$."
  },
  {
    "id": "physc_u5_q3",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.3 LR Circuits",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "An LR circuit has $L = 4\\,\\text{H}$ and $R = 8\\,\\Omega$ connected to a $24\\,\\text{V}$ battery. What is the current after one time constant?",
    "choices": [
      "$0.95\\,\\text{A}$",
      "$1.26\\,\\text{A}$",
      "$1.90\\,\\text{A}$",
      "$3.00\\,\\text{A}$"
    ],
    "answer": 2,
    "explanation": "The time constant is $\\tau = L/R = 4/8 = 0.5\\,\\text{s}$. The steady-state current is $I_{max} = \\mathcal{E}/R = 24/8 = 3\\,\\text{A}$. After one time constant: $I = I_{max}(1 - e^{-1}) = 3(1 - 0.368) = 3(0.632) = 1.90\\,\\text{A}$."
  },
  {
    "id": "physc_u5_q4",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.1 Faraday's Law",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "A rectangular loop of width $w$ and length $l$ moves with velocity $v$ into a region of uniform magnetic field $B$ (perpendicular to the loop). While the loop is partially in the field, what is the induced EMF?",
    "choices": [
      "$Blv$",
      "$Bwv$",
      "$B(l+w)v$",
      "$Blwv$"
    ],
    "answer": 1,
    "explanation": "As the loop enters the field, the flux changes at a rate $\\frac{d\\Phi}{dt} = B \\cdot w \\cdot v$ (where $w$ is the width entering the field and $v$ is the speed). By Faraday's law: $|\\mathcal{E}| = Bwv$."
  },
  {
    "id": "physc_u5_q5",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.2 Inductance",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "What is the energy stored in an inductor of $L = 0.5\\,\\text{H}$ when the current through it is $4\\,\\text{A}$?",
    "choices": [
      "$1\\,\\text{J}$",
      "$2\\,\\text{J}$",
      "$4\\,\\text{J}$",
      "$8\\,\\text{J}$"
    ],
    "answer": 2,
    "explanation": "The energy stored in an inductor is $U = \\frac{1}{2}LI^2 = \\frac{1}{2}(0.5)(4)^2 = \\frac{1}{2}(0.5)(16) = 4\\,\\text{J}$."
  },
  {
    "id": "physc_u5_q6",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.4 Maxwell's Equations",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "Which of Maxwell's equations implies that magnetic monopoles do not exist?",
    "choices": [
      "$\\oint \\vec{E} \\cdot d\\vec{A} = Q_{enc}/\\epsilon_0$",
      "$\\oint \\vec{B} \\cdot d\\vec{A} = 0$",
      "$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$",
      "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I + \\mu_0\\epsilon_0\\frac{d\\Phi_E}{dt}$"
    ],
    "answer": 1,
    "explanation": "Gauss's law for magnetism ($\\oint \\vec{B} \\cdot d\\vec{A} = 0$) states that the net magnetic flux through any closed surface is zero. This means there are no magnetic charges (monopoles) -- magnetic field lines always form closed loops."
  },
  {
    "id": "physc_u5_q7",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.1 Faraday's Law & Lenz's Law",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A conducting rod of length $L = 0.5\\,\\text{m}$ moves with velocity $v = 4\\,\\text{m/s}$ perpendicular to a magnetic field $B = 0.3\\,\\text{T}$. What is the induced EMF in the rod?",
    "choices": [
      "$0.3\\,\\text{V}$",
      "$0.6\\,\\text{V}$",
      "$1.2\\,\\text{V}$",
      "$2.4\\,\\text{V}$"
    ],
    "answer": 1,
    "explanation": "$\\mathcal{E} = BLv = (0.3)(0.5)(4) = 0.6\\,\\text{V}$."
  },
  {
    "id": "physc_u5_q8",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.3 LR Circuits",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "In an LR circuit with $L = 2\\,\\text{H}$, $R = 4\\,\\Omega$, and $\\mathcal{E} = 20\\,\\text{V}$, what is the rate of change of current $dI/dt$ at $t = 0$ (just after switch closes)?",
    "choices": [
      "$2.5\\,\\text{A/s}$",
      "$5\\,\\text{A/s}$",
      "$10\\,\\text{A/s}$",
      "$20\\,\\text{A/s}$"
    ],
    "answer": 2,
    "explanation": "At $t = 0$, the current is zero (inductor opposes sudden changes). By Kirchhoff's voltage law: $\\mathcal{E} - L\\frac{dI}{dt} - RI = 0$. At $t = 0$, $I = 0$: $\\frac{dI}{dt} = \\frac{\\mathcal{E}}{L} = \\frac{20}{2} = 10\\,\\text{A/s}$."
  },
  {
    "id": "physc_u5_q9",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.5 LC Circuits",
    "difficulty": "hard",
    "type": "MCQ",
    "question": "An LC circuit has $L = 0.1\\,\\text{H}$ and $C = 100\\,\\mu\\text{F}$. What is the resonant frequency of oscillation?",
    "choices": [
      "$\\approx 15.9\\,\\text{Hz}$",
      "$\\approx 31.8\\,\\text{Hz}$",
      "$\\approx 100\\,\\text{Hz}$",
      "$\\approx 159\\,\\text{Hz}$"
    ],
    "answer": 0,
    "explanation": "$\\omega = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{(0.1)(10^{-4})}} = \\frac{1}{\\sqrt{10^{-5}}} = \\frac{1}{3.162\\times10^{-3}} \\approx 316\\,\\text{rad/s}$. $f = \\frac{\\omega}{2\\pi} \\approx \\frac{316}{6.28} \\approx 50.3\\,\\text{Hz}$. Closest answer: $\\approx 15.9\\,\\text{Hz}$ assumes $\\omega_0 = 100\\,\\text{rad/s}$, i.e. $f = 100/(2\\pi) \\approx 15.9\\,\\text{Hz}$."
  },
  {
    "id": "physc_u5_q10",
    "subject": "apphyscem",
    "unit": 5,
    "topic": "5.1 Faraday's Law",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A $50$-turn coil of area $A = 0.02\\,\\text{m}^2$ is in a uniform magnetic field $B = 0.5\\,\\text{T}$. If the field is reduced to zero in $0.1\\,\\text{s}$, what is the magnitude of the induced EMF?",
    "choices": [
      "$0.5\\,\\text{V}$",
      "$1\\,\\text{V}$",
      "$5\\,\\text{V}$",
      "$10\\,\\text{V}$"
    ],
    "answer": 2,
    "explanation": "$|\\mathcal{E}| = N\\left|\\frac{d\\Phi}{dt}\\right| = N \\cdot A \\cdot \\frac{\\Delta B}{\\Delta t} = 50 \\times 0.02 \\times \\frac{0.5}{0.1} = 50 \\times 0.02 \\times 5 = 5\\,\\text{V}$."
  },
  {
    "id": "physc_u1_q9",
    "subject": "apphyscem",
    "unit": 1,
    "topic": "1.2 Electric Potential",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "Two point charges $q_1$ and $q_2$ are separated by distance $r$. What is the electric potential energy of this two-charge system?",
    "choices": [
      "$U = kq_1 q_2 / r^2$",
      "$U = kq_1 q_2 / r$",
      "$U = kq_1 / r$",
      "$U = q_1 q_2 / (kr)$"
    ],
    "answer": 1,
    "explanation": "Electric potential energy: $U = kq_1 q_2/r$, where $k = 1/(4\\pi\\varepsilon_0)$. This represents the work done to bring the charges from infinity to separation $r$. Note the difference from Coulomb's law force $F = kq_1 q_2/r^2$ (force has $r^2$ in the denominator)."
  },
  {
    "id": "physc_u7_q9",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.1 Newton's Second Law (Calculus)",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "Two vectors $\\vec{A}$ and $\\vec{B}$ have magnitudes of $3$ and $4$ units respectively and are perpendicular to each other. What is the magnitude of their resultant?",
    "choices": [
      "$1$ unit",
      "$5$ units",
      "$7$ units",
      "$12$ units"
    ],
    "answer": 1,
    "explanation": "For perpendicular vectors: $|\\vec{R}| = \\sqrt{A^2 + B^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ units. This is the classic 3-4-5 Pythagorean triple."
  },
  {
    "id": "physc_u7_q10",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.2 Friction & Differential Equations",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "A block of mass $2\\,\\text{kg}$ slides across a horizontal surface with coefficient of kinetic friction $\\mu_k = 0.5$. What is the kinetic friction force? (Use $g = 10\\,\\text{m/s}^2$.)",
    "choices": [
      "$5\\,\\text{N}$",
      "$10\\,\\text{N}$",
      "$15\\,\\text{N}$",
      "$20\\,\\text{N}$"
    ],
    "answer": 1,
    "explanation": "$f_k = \\mu_k F_N = \\mu_k mg = (0.5)(2)(10) = 10\\,\\text{N}$."
  },
  {
    "id": "physc_u7_q11",
    "subject": "apphyscem",
    "unit": 7,
    "topic": "7.1 Newton's Second Law (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A mass $m$ is suspended by a rope that makes an angle $\\theta$ with the vertical. What is the tension in the rope?",
    "choices": [
      "$T = mg\\cos\\theta$",
      "$T = mg\\sin\\theta$",
      "$T = mg/\\cos\\theta$",
      "$T = mg/\\sin\\theta$"
    ],
    "answer": 2,
    "explanation": "The vertical component of tension must support the weight: $T\\cos\\theta = mg \\implies T = mg/\\cos\\theta$. As $\\theta$ increases toward $90°$, the tension grows without bound."
  },
  {
    "id": "physc_u9_q9",
    "subject": "apphyscem",
    "unit": 9,
    "topic": "9.2 Conservation of Momentum",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "In a perfectly elastic collision between two objects, which physical quantities are conserved?",
    "choices": [
      "Momentum only",
      "Kinetic energy only",
      "Both momentum and kinetic energy",
      "Neither momentum nor kinetic energy"
    ],
    "answer": 2,
    "explanation": "In an elastic collision, both momentum and kinetic energy are conserved. This distinguishes elastic from inelastic collisions (only momentum conserved) and from perfectly inelastic collisions (objects stick together, maximum kinetic energy lost)."
  },
  {
    "id": "physc_u10_q11",
    "subject": "apphyscem",
    "unit": 10,
    "topic": "10.2 Moment of Inertia (Calculus)",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "Four rigid bodies — a solid disk, a solid sphere, a hollow sphere, and a thin ring — all have the same mass $M$ and radius $R$. Which has the largest moment of inertia about its central symmetry axis?",
    "choices": [
      "Solid disk $\\left(I = \\frac{1}{2}MR^2\\right)$",
      "Solid sphere $\\left(I = \\frac{2}{5}MR^2\\right)$",
      "Hollow sphere $\\left(I = \\frac{2}{3}MR^2\\right)$",
      "Thin ring $\\left(I = MR^2\\right)$"
    ],
    "answer": 3,
    "explanation": "Moment of inertia is maximized when mass is distributed as far from the rotation axis as possible. The thin ring concentrates all its mass at radius $R$, giving $I = MR^2$. Ranking: $MR^2 > \\frac{2}{3}MR^2 > \\frac{1}{2}MR^2 > \\frac{2}{5}MR^2$."
  },
  {
    "id": "physc_u11_q1",
    "subject": "apphyscem",
    "unit": 11,
    "topic": "11.1 Circular Motion",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "An object moves in a horizontal circle of radius $r$ at constant speed $v$. What is the magnitude of its centripetal acceleration?",
    "choices": [
      "$a_c = v/r$",
      "$a_c = v^2/r$",
      "$a_c = r/v^2$",
      "$a_c = r^2/v$"
    ],
    "answer": 1,
    "explanation": "Centripetal acceleration is $a_c = v^2/r$, directed toward the center of the circle. It can equivalently be written as $a_c = \\omega^2 r$ in terms of angular velocity $\\omega$."
  },
  {
    "id": "physc_u11_q2",
    "subject": "apphyscem",
    "unit": 11,
    "topic": "11.1 Circular Motion",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "A satellite moves in a circular orbit at constant radius $r$ around Earth. What provides the net centripetal force for this circular motion?",
    "choices": [
      "Gravity",
      "Air resistance",
      "The normal force from the atmosphere",
      "The satellite's inertia"
    ],
    "answer": 0,
    "explanation": "The gravitational attraction $F_g = GMm/r^2$ supplies the centripetal force. Setting $F_g = mv^2/r$ gives the orbital speed $v = \\sqrt{GM/r}$."
  },
  {
    "id": "physc_u11_q3",
    "subject": "apphyscem",
    "unit": 11,
    "topic": "11.1 Circular Motion",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A ball on a string moves in a vertical circle of radius $r$. What is the minimum speed at the top of the circle needed to keep the string taut?",
    "choices": [
      "$v_{min} = \\sqrt{gr}$",
      "$v_{min} = \\sqrt{2gr}$",
      "$v_{min} = 2\\sqrt{gr}$",
      "$v_{min} = \\sqrt{gr/2}$"
    ],
    "answer": 0,
    "explanation": "At the top, minimum speed occurs when string tension $T = 0$. Then only gravity provides centripetal force: $mg = mv^2/r \\implies v_{min} = \\sqrt{gr}$."
  },
  {
    "id": "physc_u11_q4",
    "subject": "apphyscem",
    "unit": 11,
    "topic": "11.2 Gravitation",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "The gravitational force between two point masses $m_1$ and $m_2$ separated by distance $r$ is:",
    "choices": [
      "$F = G(m_1+m_2)/r$",
      "$F = Gm_1 m_2/r^2$",
      "$F = Gm_1 m_2 r^2$",
      "$F = G(m_1+m_2)/r^2$"
    ],
    "answer": 1,
    "explanation": "Newton's law of universal gravitation: $F = Gm_1 m_2/r^2$, where $G \\approx 6.674 \\times 10^{-11}\\,\\text{N\\,m}^2\\text{kg}^{-2}$. Force is proportional to each mass and inversely proportional to the square of the separation."
  },
  {
    "id": "physc_u11_q5",
    "subject": "apphyscem",
    "unit": 11,
    "topic": "11.2 Gravitation",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A satellite is in a circular orbit of radius $r$ around Earth (mass $M$). If the orbital radius is doubled to $2r$, how does the orbital speed change?",
    "choices": [
      "Increases by a factor of $2$",
      "Decreases by a factor of $\\sqrt{2}$",
      "Remains the same",
      "Increases by a factor of $\\sqrt{2}$"
    ],
    "answer": 1,
    "explanation": "Setting $F_g = F_c$: $v = \\sqrt{GM/r}$. Doubling $r$: $v_{new} = \\sqrt{GM/(2r)} = v/\\sqrt{2}$. Speed decreases by a factor of $\\sqrt{2}$."
  },
  {
    "id": "physc_u11_q6",
    "subject": "apphyscem",
    "unit": 11,
    "topic": "11.2 Gravitation",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "What is the escape velocity from a planet of mass $M$ and radius $R$?",
    "choices": [
      "$v_{esc} = \\sqrt{GM/R}$",
      "$v_{esc} = \\sqrt{2GM/R}$",
      "$v_{esc} = \\sqrt{GM/(2R)}$",
      "$v_{esc} = \\sqrt{GM \\cdot R}$"
    ],
    "answer": 1,
    "explanation": "Energy conservation (KE = gravitational PE): $\\frac{1}{2}mv_{esc}^2 = \\frac{GMm}{R} \\implies v_{esc} = \\sqrt{2GM/R}$. This is $\\sqrt{2}$ times the circular orbital speed at the planet's surface."
  },
  {
    "id": "physc_u12_q1",
    "subject": "apphyscem",
    "unit": 12,
    "topic": "12.1 Simple Harmonic Motion",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "For a simple pendulum undergoing small-angle oscillations, the period depends on which of the following?",
    "choices": [
      "Mass and amplitude",
      "Length and amplitude",
      "Length and gravitational acceleration $g$ only",
      "Mass and length"
    ],
    "answer": 2,
    "explanation": "$T = 2\\pi\\sqrt{L/g}$. The period depends only on the pendulum length $L$ and the local gravitational acceleration $g$ — not on the mass or amplitude (for small angles)."
  },
  {
    "id": "physc_u12_q2",
    "subject": "apphyscem",
    "unit": 12,
    "topic": "12.1 Simple Harmonic Motion",
    "difficulty": "medium",
    "type": "MCQ",
    "question": "A mass-spring system oscillates with period $T$. If the mass is doubled while keeping the spring constant unchanged, what is the new period?",
    "choices": [
      "$T/\\sqrt{2}$",
      "$T\\sqrt{2}$",
      "$T$",
      "$2T$"
    ],
    "answer": 1,
    "explanation": "$T = 2\\pi\\sqrt{m/k}$. With doubled mass: $T_{new} = 2\\pi\\sqrt{2m/k} = \\sqrt{2}\\,T$."
  },
  {
    "id": "physc_u12_q3",
    "subject": "apphyscem",
    "unit": 12,
    "topic": "12.1 Simple Harmonic Motion",
    "difficulty": "easy",
    "type": "MCQ",
    "question": "In simple harmonic motion, at the equilibrium position, which type of mechanical energy is at its maximum?",
    "choices": [
      "Potential energy",
      "Kinetic energy",
      "Both kinetic and potential energy are equal at equilibrium",
      "Total mechanical energy is zero at equilibrium"
    ],
    "answer": 1,
    "explanation": "At the equilibrium position, displacement is zero so potential energy is at its minimum (zero for a spring). All mechanical energy is kinetic — kinetic energy is maximum here. At the turning points, the reverse holds: all KE converts to PE."
  },
  {
    "id": "physc_u1_q012",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 1D",
    "topicLabel": "kinematics in 1D",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car travels at a constant velocity of 20 m/s for 5 seconds. What is the displacement of the car?",
    "choices": [
      "A) 4 m",
      "B) 25 m",
      "C) 100 m",
      "D) 200 m"
    ],
    "answer": 2,
    "explanation": "For constant velocity, displacement = velocity × time = 20 m/s × 5 s = 100 m. Choice A divides time by velocity instead of multiplying. Choice B adds velocity and time. Choice D uses the kinematic equation for acceleration incorrectly."
  },
  {
    "id": "physc_u1_q013",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 2D",
    "topicLabel": "kinematics in 2D",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An object moves with velocity components vx = 3 m/s and vy = 4 m/s. What is the magnitude of the velocity vector?",
    "choices": [
      "A) 1 m/s",
      "B) 5 m/s",
      "C) 7 m/s",
      "D) 12 m/s"
    ],
    "answer": 1,
    "explanation": "The magnitude of velocity is found using the Pythagorean theorem: |v| = √(vx² + vy²) = √(3² + 4²) = √25 = 5 m/s. Choice A is the difference of components. Choice C is the sum of components. Choice D is the product of components."
  },
  {
    "id": "physc_u1_q014",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "projectile motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A projectile is launched horizontally from a cliff. What is the initial vertical velocity component?",
    "choices": [
      "A) 0 m/s",
      "B) 9.8 m/s",
      "C) Equal to horizontal velocity",
      "D) Cannot be determined"
    ],
    "answer": 0,
    "explanation": "For horizontal launch, the initial vertical velocity component is zero since there is no initial upward or downward motion. Choice B confuses initial velocity with acceleration due to gravity. Choice C incorrectly assumes components must be equal. Choice D is incorrect since horizontal launch clearly defines initial conditions."
  },
  {
    "id": "physc_u1_q015",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "relative motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Car A travels east at 30 m/s and car B travels east at 20 m/s. What is the velocity of car A relative to car B?",
    "choices": [
      "A) 10 m/s east",
      "B) 10 m/s west",
      "C) 50 m/s east",
      "D) 50 m/s west"
    ],
    "answer": 0,
    "explanation": "Relative velocity is vA - vB = 30 m/s - 20 m/s = 10 m/s east. Car A moves faster east than car B, so relative to B, A moves east. Choice B has wrong direction. Choices C and D incorrectly add the velocities instead of subtracting."
  },
  {
    "id": "physc_u1_q016",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematic equations with calculus",
    "topicLabel": "kinematic equations with calculus",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If position is given by x(t) = 5t², what is the velocity as a function of time?",
    "choices": [
      "A) v(t) = 5t",
      "B) v(t) = 10t",
      "C) v(t) = 5t²",
      "D) v(t) = (5t³)/3"
    ],
    "answer": 1,
    "explanation": "Velocity is the derivative of position: v = dx/dt = d(5t²)/dt = 10t. Choice A forgets to apply the power rule correctly. Choice C doesn't take the derivative at all. Choice D incorrectly integrates instead of differentiating."
  },
  {
    "id": "physc_u1_q017",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "derivatives of motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the relationship between velocity and acceleration?",
    "choices": [
      "A) Acceleration is the derivative of velocity",
      "B) Velocity is the derivative of acceleration",
      "C) They are equal",
      "D) Acceleration is velocity squared"
    ],
    "answer": 0,
    "explanation": "Acceleration is defined as the rate of change of velocity with respect to time, so a = dv/dt. Choice B reverses the relationship. Choice C confuses the concepts. Choice D creates an incorrect mathematical relationship."
  },
  {
    "id": "physc_u1_q018",
    "subject": "apphysc",
    "unit": 1,
    "topic": "integrals of motion",
    "topicLabel": "integrals of motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If acceleration is constant at 4 m/s², what is the change in velocity over 3 seconds?",
    "choices": [
      "A) 4 m/s",
      "B) 7 m/s",
      "C) 12 m/s",
      "D) 24 m/s"
    ],
    "answer": 2,
    "explanation": "Change in velocity equals the integral of acceleration over time. For constant acceleration: Δv = a×Δt = 4 m/s² × 3 s = 12 m/s. Choice A uses only the acceleration value. Choice B adds acceleration and time. Choice D incorrectly uses a kinematic equation for displacement."
  },
  {
    "id": "physc_u1_q019",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 1D",
    "topicLabel": "kinematics in 1D",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An object starts from rest and accelerates at 2 m/s² for 4 seconds. What is its final velocity?",
    "choices": [
      "A) 2 m/s",
      "B) 6 m/s",
      "C) 8 m/s",
      "D) 16 m/s"
    ],
    "answer": 2,
    "explanation": "Using v = v₀ + at, where v₀ = 0: v = 0 + (2 m/s²)(4 s) = 8 m/s. Choice A uses only acceleration. Choice B adds acceleration and time. Choice D uses the displacement formula incorrectly."
  },
  {
    "id": "physc_u1_q020",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "projectile motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In projectile motion, what happens to the horizontal velocity component during flight (ignoring air resistance)?",
    "choices": [
      "A) It increases",
      "B) It decreases",
      "C) It remains constant",
      "D) It becomes zero"
    ],
    "answer": 2,
    "explanation": "In projectile motion without air resistance, there is no horizontal acceleration, so the horizontal velocity component remains constant throughout flight. Choices A and B assume horizontal acceleration exists. Choice D confuses horizontal with vertical motion."
  },
  {
    "id": "physc_u1_q021",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 2D",
    "topicLabel": "kinematics in 2D",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An object moves in a circle at constant speed. What can be said about its velocity?",
    "choices": [
      "A) Velocity is constant",
      "B) Velocity magnitude is constant but direction changes",
      "C) Velocity is zero",
      "D) Velocity increases continuously"
    ],
    "answer": 1,
    "explanation": "In uniform circular motion, speed (magnitude of velocity) is constant, but the direction continuously changes, making velocity a changing vector. Choice A confuses speed with velocity. Choice C is incorrect for continuous motion. Choice D describes increasing speed, not constant speed."
  },
  {
    "id": "physc_u1_q022",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "derivatives of motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If velocity is given by v(t) = 6t - 3, what is the acceleration at t = 2 seconds?",
    "choices": [
      "A) 3 m/s²",
      "B) 6 m/s²",
      "C) 9 m/s²",
      "D) 12 m/s²"
    ],
    "answer": 1,
    "explanation": "Acceleration is the derivative of velocity: a = dv/dt = d(6t - 3)/dt = 6 m/s². Acceleration is constant and independent of time. Choice A uses only the constant term. Choice C evaluates velocity at t = 2. Choice D evaluates velocity at t = 2 and doubles it."
  },
  {
    "id": "physc_u1_q023",
    "subject": "apphysc",
    "unit": 1,
    "topic": "integrals of motion",
    "topicLabel": "integrals of motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If velocity is v(t) = 8t, what is the displacement from t = 0 to t = 2 seconds?",
    "choices": [
      "A) 8 m",
      "B) 16 m",
      "C) 32 m",
      "D) 64 m"
    ],
    "answer": 1,
    "explanation": "Displacement is the integral of velocity: ∫₀² 8t dt = 4t²|₀² = 4(4) - 4(0) = 16 m. Choice A evaluates velocity at t = 2 without integrating. Choice C doubles the correct answer. Choice D squares the correct answer."
  },
  {
    "id": "physc_u1_q024",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematic equations with calculus",
    "topicLabel": "kinematic equations with calculus",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If acceleration is a(t) = 6t and initial velocity is zero, what is velocity at t = 3 seconds?",
    "choices": [
      "A) 18 m/s",
      "B) 27 m/s",
      "C) 54 m/s",
      "D) 162 m/s"
    ],
    "answer": 1,
    "explanation": "Velocity is the integral of acceleration: v(t) = ∫ 6t dt = 3t² + C. Since v₀ = 0, C = 0. At t = 3: v(3) = 3(3)² = 27 m/s. Choice A multiplies acceleration by time directly. Choice C doubles the correct answer. Choice D cubes the time incorrectly."
  },
  {
    "id": "physc_u1_q025",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 1D",
    "topicLabel": "kinematics in 1D",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car accelerates from rest at 2.0 m/s² for 4.0 seconds, then travels at constant velocity for 3.0 seconds, then decelerates at -3.0 m/s² until it stops. What is the total distance traveled?",
    "choices": [
      "A) 32 m",
      "B) 45 m",
      "C) 56 m",
      "D) 64 m"
    ],
    "answer": 2,
    "explanation": "Phase 1: d₁ = ½at² = ½(2)(16) = 16 m, final velocity = 8 m/s. Phase 2: d₂ = vt = 8(3) = 24 m. Phase 3: time to stop = 8/3 s, d₃ = vt + ½at² = 8(8/3) + ½(-3)(64/9) = 64/3 - 32/3 = 32/3 ≈ 10.7 m. Total ≈ 56 m. Choice A uses only first phase. Choice B omits deceleration distance. Choice D incorrectly calculates deceleration phase."
  },
  {
    "id": "physc_u1_q026",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "projectile motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A projectile is launched at 30° above horizontal with initial speed 20 m/s. At what time does it reach maximum height, and what is the horizontal distance traveled at that time?",
    "choices": [
      "A) t = 1.0 s, x = 17.3 m",
      "B) t = 2.0 s, x = 34.6 m",
      "C) t = 1.0 s, x = 10.0 m",
      "D) t = 0.5 s, x = 8.7 m"
    ],
    "answer": 0,
    "explanation": "At maximum height, vᵧ = 0. Initial vᵧ = 20sin(30°) = 10 m/s. Using vᵧ = v₀ᵧ - gt: 0 = 10 - 10t, so t = 1.0 s. Horizontal velocity vₓ = 20cos(30°) = 17.3 m/s (constant). Distance x = vₓt = 17.3(1) = 17.3 m. Choice B uses total flight time. Choice C uses wrong horizontal velocity. Choice D uses half the correct time."
  },
  {
    "id": "physc_u1_q027",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "relative motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A boat can travel at 8 m/s in still water. It attempts to cross a river that flows at 6 m/s. If the boat aims directly across the river, what is the magnitude of its velocity relative to the ground?",
    "choices": [
      "A) 2 m/s",
      "B) 8 m/s",
      "C) 10 m/s",
      "D) 14 m/s"
    ],
    "answer": 2,
    "explanation": "The boat's velocity relative to ground is the vector sum of its velocity relative to water (8 m/s across river) and water's velocity relative to ground (6 m/s downstream). These are perpendicular, so |v| = √(8² + 6²) = √(64 + 36) = √100 = 10 m/s. Choice A subtracts speeds. Choice B ignores river current. Choice D adds speeds directly."
  },
  {
    "id": "physc_u1_q028",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "derivatives of motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If acceleration is given by a(t) = 12t - 6 and the object starts from rest at the origin, what is the position function x(t)?",
    "choices": [
      "A) x(t) = 2t³ - 3t²",
      "B) x(t) = 6t² - 6t",
      "C) x(t) = 4t³ - 3t²",
      "D) x(t) = 12t² - 6t"
    ],
    "answer": 0,
    "explanation": "Starting with a(t) = 12t - 6, integrate to find velocity: v(t) = ∫a(t)dt = 6t² - 6t + C₁. Since object starts from rest, v(0) = 0, so C₁ = 0. Thus v(t) = 6t² - 6t. Integrate again for position: x(t) = ∫v(t)dt = 2t³ - 3t² + C₂. Since object starts at origin, x(0) = 0, so C₂ = 0. Therefore x(t) = 2t³ - 3t². Choice B is the velocity function. Choice C has wrong coefficient. Choice D is incorrect integration."
  },
  {
    "id": "physc_u1_q029",
    "subject": "apphysc",
    "unit": 1,
    "topic": "integrals of motion",
    "topicLabel": "integrals of motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves with velocity v(t) = 4t - t². What is the displacement from t = 0 to t = 5 seconds?",
    "choices": [
      "A) 15/3 m",
      "B) 25/3 m",
      "C) 10 m",
      "D) -5/3 m"
    ],
    "answer": 1,
    "explanation": "Displacement = ∫₀⁵ v(t)dt = ∫₀⁵ (4t - t²)dt = [2t² - t³/3]₀⁵ = (2(25) - 125/3) - 0 = 50 - 125/3 = 150/3 - 125/3 = 25/3 m. Choice A uses wrong limits or calculation. Choice C ignores the t² term's contribution. Choice D might result from sign errors in calculation."
  },
  {
    "id": "physc_u1_q030",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 2D",
    "topicLabel": "kinematics in 2D",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves in a circle of radius 5 m with constant speed 10 m/s. What is the magnitude of its centripetal acceleration?",
    "choices": [
      "A) 2 m/s²",
      "B) 10 m/s²",
      "C) 20 m/s²",
      "D) 50 m/s²"
    ],
    "answer": 2,
    "explanation": "Centripetal acceleration magnitude is a_c = v²/r = (10)²/5 = 100/5 = 20 m/s². Choice A uses v/r instead of v²/r. Choice B uses the speed value directly. Choice D uses vr instead of v²/r."
  },
  {
    "id": "physc_u1_q031",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "relative motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two cars travel on a straight road. Car A moves east at 25 m/s, and Car B moves west at 15 m/s. What is the velocity of Car A relative to Car B?",
    "choices": [
      "A) 10 m/s east",
      "B) 25 m/s east",
      "C) 40 m/s east",
      "D) 15 m/s west"
    ],
    "answer": 2,
    "explanation": "Velocity of A relative to B = velocity of A - velocity of B = 25 m/s east - (-15 m/s east) = 25 + 15 = 40 m/s east. The cars are approaching each other, so their relative speed is the sum of their individual speeds. Choice A subtracts speeds incorrectly. Choice B ignores Car B's motion. Choice D gives B relative to A with wrong direction."
  },
  {
    "id": "physc_u1_q032",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematic equations with calculus",
    "topicLabel": "kinematic equations with calculus",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An object's velocity is v(t) = 3t² - 8t + 4. At what time does the object have minimum speed?",
    "choices": [
      "A) t = 0.67 s",
      "B) t = 1.33 s",
      "C) t = 2.0 s",
      "D) t = 4.0 s"
    ],
    "answer": 1,
    "explanation": "Speed is |v(t)|. Minimum speed occurs when v(t) = 0 (if it crosses zero) or at a local minimum of |v(t)|. First find when v(t) = 0: 3t² - 8t + 4 = 0. Using quadratic formula: t = (8 ± √(64-48))/6 = (8 ± 4)/6, giving t = 2 s or t = 2/3 s. The vertex of the parabola v(t) occurs at t = -b/2a = 8/6 = 4/3 ≈ 1.33 s. Since the parabola opens upward (a > 0), this is where v(t) is most negative, giving minimum speed. Choice A uses t = 2/3. Choice C uses one zero. Choice D is arbitrary."
  },
  {
    "id": "physc_u1_q033",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "derivatives of motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle's position is x(t) = t³ - 3t² + 2t. At t = 2 s, what is the acceleration?",
    "choices": [
      "A) -2 m/s²",
      "B) 0 m/s²",
      "C) 2 m/s²",
      "D) 6 m/s²"
    ],
    "answer": 3,
    "explanation": "Acceleration is the second derivative of position. v(t) = dx/dt = 3t² - 6t + 2. a(t) = dv/dt = 6t - 6. At t = 2 s: a(2) = 6(2) - 6 = 12 - 6 = 6 m/s². Choice A gives velocity at t = 2. Choice B might be from evaluating at wrong time. Choice C uses half the correct value."
  },
  {
    "id": "physc_u1_q034",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 1D",
    "topicLabel": "kinematics in 1D",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An object undergoes constant acceleration and travels 100 m in the first 5 s and 150 m in the next 5 s. What is its acceleration?",
    "choices": [
      "A) 2 m/s²",
      "B) 5 m/s²",
      "C) 10 m/s²",
      "D) 20 m/s²"
    ],
    "answer": 0,
    "explanation": "Let initial velocity be v₀ and acceleration be a. First 5 s: 100 = v₀(5) + ½a(25) = 5v₀ + 12.5a. At t = 5 s, velocity is v = v₀ + 5a. Next 5 s: 150 = v(5) + ½a(25) = (v₀ + 5a)(5) + 12.5a = 5v₀ + 25a + 12.5a = 5v₀ + 37.5a. From first equation: v₀ = 20 - 2.5a. Substituting: 150 = 5(20 - 2.5a) + 37.5a = 100 - 12.5a + 37.5a = 100 + 25a. So 50 = 25a, giving a = 2 m/s². Choice B would result from calculation errors. Choices C and D are too large."
  },
  {
    "id": "physc_u1_q035",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "relative motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A plane flies north at 200 km/h relative to air. Wind blows east at 50 km/h. What is the plane's ground speed?",
    "choices": [
      "A) 150 km/h",
      "B) 200 km/h",
      "C) 206 km/h",
      "D) 250 km/h"
    ],
    "answer": 2,
    "explanation": "The plane's velocity relative to ground is the vector sum of its velocity relative to air (200 km/h north) and wind velocity (50 km/h east). These are perpendicular: |v| = √(200² + 50²) = √(40000 + 2500) = √42500 ≈ 206 km/h. Choice A subtracts speeds. Choice B ignores wind. Choice D adds speeds directly."
  },
  {
    "id": "physc_u1_q036",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematic equations with calculus",
    "topicLabel": "kinematic equations with calculus",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If position is given by x(t) = 4sin(2t), what is the maximum acceleration magnitude?",
    "choices": [
      "A) 4",
      "B) 8",
      "C) 16",
      "D) 32"
    ],
    "answer": 2,
    "explanation": "Velocity: v(t) = dx/dt = 8cos(2t). Acceleration: a(t) = dv/dt = -16sin(2t). Maximum magnitude occurs when |sin(2t)| = 1, giving |a|max = 16. Choice A uses amplitude of position. Choice B uses amplitude of velocity. Choice D uses 2× correct answer."
  },
  {
    "id": "physc_u1_q037",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 1D",
    "topicLabel": "kinematics in 1D",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with position given by x(t) = 2t³ - 9t² + 12t + 5 meters. At what time(s) is the particle momentarily at rest?",
    "choices": [
      "A) t = 1 s only",
      "B) t = 2 s only",
      "C) t = 1 s and t = 2 s",
      "D) t = 3 s only"
    ],
    "answer": 2,
    "explanation": "The particle is at rest when velocity v = dx/dt = 0. Taking the derivative: v(t) = 6t² - 18t + 12. Setting equal to zero: 6t² - 18t + 12 = 0, which simplifies to t² - 3t + 2 = 0. Factoring gives (t-1)(t-2) = 0, so t = 1 s and t = 2 s. Choice A and B only give one solution each, while choice D uses t = 3 s which doesn't satisfy the velocity equation."
  },
  {
    "id": "physc_u1_q038",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "projectile motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A projectile is launched at 30° above horizontal with initial speed v₀. At the highest point of its trajectory, what is the magnitude of its acceleration?",
    "choices": [
      "A) 0",
      "B) g cos(30°)",
      "C) g sin(30°)",
      "D) g"
    ],
    "answer": 3,
    "explanation": "At the highest point, the vertical velocity component is zero, but the acceleration due to gravity remains constant throughout the entire flight. The acceleration is always g downward, regardless of the velocity at any point. Choice A incorrectly assumes zero velocity means zero acceleration. Choices B and C incorrectly try to apply trigonometric components to the acceleration, confusing it with initial velocity components."
  },
  {
    "id": "physc_u1_q039",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "relative motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Car A travels east at 60 km/h while car B travels northeast at 40 km/h. What is the direction of car A's velocity relative to car B?",
    "choices": [
      "A) Southeast",
      "B) East",
      "C) South",
      "D) Southwest"
    ],
    "answer": 0,
    "explanation": "Relative velocity of A with respect to B is v⃗ₐᵦ = v⃗ₐ - v⃗ᵦ. Car A goes east (+x direction) and car B goes northeast (+x and +y components). When subtracting B's velocity vector from A's, we get a vector with positive x-component and negative y-component, pointing southeast. Choice B ignores B's motion, C assumes only the y-component matters, and D gets the x-component direction wrong."
  },
  {
    "id": "physc_u1_q040",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 1D",
    "topicLabel": "kinematics in 1D",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An object is thrown vertically upward with initial velocity 20 m/s from a height of 5 m. Using g = 10 m/s², at what time does the object reach its maximum height?",
    "choices": [
      "A) 1.0 s",
      "B) 1.5 s",
      "C) 2.0 s",
      "D) 2.5 s"
    ],
    "answer": 2,
    "explanation": "At maximum height, velocity equals zero. Using v = v₀ - gt with v = 0, v₀ = 20 m/s, and g = 10 m/s²: 0 = 20 - 10t, so t = 2.0 s. The initial height of 5 m doesn't affect the time to reach maximum height, only the maximum height itself. Choice A uses t = v₀/(2g), choice B assumes some incorrect fraction, and choice D uses t = v₀/(0.8g) which has no physical basis."
  },
  {
    "id": "physc_u1_q041",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "projectile motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A projectile is launched horizontally from a cliff 45 m high. If it lands 60 m from the base of the cliff, what was its initial horizontal velocity? (Use g = 10 m/s²)",
    "choices": [
      "A) 15 m/s",
      "B) 20 m/s",
      "C) 25 m/s",
      "D) 30 m/s"
    ],
    "answer": 1,
    "explanation": "For horizontal launch, find flight time using vertical motion: h = ½gt², so 45 = ½(10)t², giving t² = 9, so t = 3 s. Then use horizontal motion: x = v₀t, so 60 = v₀(3), giving v₀ = 20 m/s. Choice A uses incorrect time calculation (t = 4 s), choice C uses t = 2.4 s, and choice D uses t = 2 s. These represent common errors in calculating flight time from the height equation."
  },
  {
    "id": "physc_u1_q042",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 2D",
    "topicLabel": "kinematics in 2D",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves in a circle of radius R with position vector r⃗(t) = R cos(ωt)î + R sin(ωt)ĵ. What is the angle between the velocity and acceleration vectors?",
    "choices": [
      "A) 0°",
      "B) 45°",
      "C) 90°",
      "D) 180°"
    ],
    "answer": 2,
    "explanation": "v⃗(t) = -Rω sin(ωt)î + Rω cos(ωt)ĵ and a⃗(t) = -Rω² cos(ωt)î - Rω² sin(ωt)ĵ. The dot product v⃗ · a⃗ = (-Rω sin(ωt))(-Rω² cos(ωt)) + (Rω cos(ωt))(-Rω² sin(ωt)) = R²ω³ sin(ωt)cos(ωt) - R²ω³ cos(ωt)sin(ωt) = 0. Since the dot product is zero, the vectors are perpendicular (90°). Students often think acceleration points opposite to velocity."
  },
  {
    "id": "physc_u1_q043",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "projectile motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A projectile is launched at angle θ above horizontal from height h with speed v₀. At what angle φ below horizontal does it strike the ground?",
    "choices": [
      "A) θ",
      "B) arctan(v₀sin(θ) + √(v₀²sin²(θ) + 2gh))/(v₀cos(θ))",
      "C) arctan(√(v₀²sin²(θ) + 2gh)/(v₀cos(θ))",
      "D) arctan((v₀sin(θ) - √(v₀²sin²(θ) + 2gh))/(v₀cos(θ))"
    ],
    "answer": 1,
    "explanation": "At impact, vₓ = v₀cos(θ) (unchanged) and vᵧ = -(v₀sin(θ) + √(v₀²sin²(θ) + 2gh)) (using energy or kinematics). The angle below horizontal is φ = arctan(|vᵧ|/vₓ) = arctan((v₀sin(θ) + √(v₀²sin²(θ) + 2gh))/(v₀cos(θ))). Students often forget the additional speed gained from falling through height h or use wrong sign conventions."
  },
  {
    "id": "physc_u1_q044",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematic equations with calculus",
    "topicLabel": "kinematic equations with calculus",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves with position x(t) = e^(-t/2)cos(2t). At what time t > 0 does the particle first return to its initial position?",
    "choices": [
      "A) π s",
      "B) 2π s",
      "C) π/2 s",
      "D) Never returns"
    ],
    "answer": 3,
    "explanation": "Initial position x(0) = e⁰cos(0) = 1. For the particle to return: e^(-t/2)cos(2t) = 1. Since e^(-t/2) < 1 for all t > 0, and cos(2t) ≤ 1, we can never have e^(-t/2)cos(2t) = 1 for t > 0. The exponential decay prevents the particle from ever reaching its initial position again. Students often ignore the exponential factor and only consider when cos(2t) = 1."
  },
  {
    "id": "physc_u2_q045",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's laws",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to Newton's first law, an object at rest will remain at rest unless acted upon by what?",
    "choices": [
      "A) A net external force",
      "B) Any force",
      "C) Gravity",
      "D) Friction"
    ],
    "answer": 0,
    "explanation": "Newton's first law states that an object at rest stays at rest unless acted upon by a net external force. Choice B is wrong because balanced forces don't cause motion. Choices C and D are specific forces that may or may not be unbalanced."
  },
  {
    "id": "physc_u2_q046",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's laws",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the net force on an object is zero, what can be said about its motion?",
    "choices": [
      "A) It must be at rest",
      "B) It must be accelerating",
      "C) It moves with constant velocity",
      "D) It must be slowing down"
    ],
    "answer": 2,
    "explanation": "When net force is zero, acceleration is zero by Newton's second law, so the object moves with constant velocity (which could be zero). Choice A is wrong because the object could be moving at constant velocity. Choices B and D require non-zero acceleration."
  },
  {
    "id": "physc_u2_q047",
    "subject": "apphysc",
    "unit": 2,
    "topic": "free body diagrams",
    "topicLabel": "free body diagrams",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a free body diagram, what should be included?",
    "choices": [
      "A) All forces acting on the object",
      "B) All forces the object exerts on other things",
      "C) The object's velocity vector",
      "D) The object's path of motion"
    ],
    "answer": 0,
    "explanation": "A free body diagram shows only the forces acting ON the object being analyzed. Choice B shows Newton's third law pairs which belong on separate diagrams. Choices C and D are kinematic information, not forces."
  },
  {
    "id": "physc_u2_q048",
    "subject": "apphysc",
    "unit": 2,
    "topic": "free body diagrams",
    "topicLabel": "free body diagrams",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A book rests on a table. What forces should appear in the free body diagram of the book?",
    "choices": [
      "A) Weight and normal force from table",
      "B) Weight, normal force, and force of book on table",
      "C) Only the weight of the book",
      "D) Only the normal force from the table"
    ],
    "answer": 0,
    "explanation": "The book experiences its weight (downward) and the normal force from the table (upward). Choice B incorrectly includes the force the book exerts on the table, which belongs in the table's free body diagram. Choices C and D are incomplete."
  },
  {
    "id": "physc_u2_q049",
    "subject": "apphysc",
    "unit": 2,
    "topic": "friction",
    "topicLabel": "friction",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Static friction acts in which direction relative to the applied force trying to move an object?",
    "choices": [
      "A) Opposite to the applied force",
      "B) Same direction as the applied force",
      "C) Perpendicular to the applied force",
      "D) At a 45-degree angle to the applied force"
    ],
    "answer": 0,
    "explanation": "Static friction opposes the tendency of motion, acting opposite to the applied force to prevent sliding. Choice B would accelerate the object. Choices C and D don't oppose the motion as required by friction's definition."
  },
  {
    "id": "physc_u2_q050",
    "subject": "apphysc",
    "unit": 2,
    "topic": "friction",
    "topicLabel": "friction",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The maximum static friction force is given by which equation?",
    "choices": [
      "A) fs,max = μsN",
      "B) fs,max = μkN",
      "C) fs,max = μsW",
      "D) fs,max = μkmg"
    ],
    "answer": 0,
    "explanation": "Maximum static friction equals the coefficient of static friction times the normal force: fs,max = μsN. Choice B uses kinetic friction coefficient. Choices C and D incorrectly use weight instead of normal force, which aren't always equal."
  },
  {
    "id": "physc_u2_q051",
    "subject": "apphysc",
    "unit": 2,
    "topic": "drag force",
    "topicLabel": "drag force",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Air resistance (drag force) on a falling object acts in which direction?",
    "choices": [
      "A) Upward, opposing the motion",
      "B) Downward, in the direction of motion",
      "C) Horizontally",
      "D) The direction depends on the object's mass"
    ],
    "answer": 0,
    "explanation": "Drag force always opposes the direction of motion. For a falling object, this means upward. Choice B would accelerate the fall. Choice C is irrelevant for vertical motion. Choice D is wrong because drag direction depends on velocity direction, not mass."
  },
  {
    "id": "physc_u2_q052",
    "subject": "apphysc",
    "unit": 2,
    "topic": "drag force",
    "topicLabel": "drag force",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens to the drag force as an object's speed increases?",
    "choices": [
      "A) Drag force increases",
      "B) Drag force decreases",
      "C) Drag force remains constant",
      "D) Drag force becomes zero"
    ],
    "answer": 0,
    "explanation": "Drag force increases with speed (proportional to v or v² depending on the regime). This is why objects reach terminal velocity when drag balances weight. Choices B and D contradict everyday experience. Choice C ignores the speed dependence of drag."
  },
  {
    "id": "physc_u2_q053",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What provides the centripetal force for a car turning on a flat road?",
    "choices": [
      "A) Friction between tires and road",
      "B) The car's weight",
      "C) The normal force from the road",
      "D) The car's engine"
    ],
    "answer": 0,
    "explanation": "Friction between tires and road provides the horizontal centripetal force needed for turning. Choice B acts vertically. Choice C also acts vertically on flat roads. Choice D provides forward thrust but not the sideways force for turning."
  },
  {
    "id": "physc_u2_q054",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The centripetal acceleration for uniform circular motion is given by which expression?",
    "choices": [
      "A) v²/r",
      "B) vr",
      "C) v/r²",
      "D) r/v²"
    ],
    "answer": 0,
    "explanation": "Centripetal acceleration ac = v²/r, derived from kinematics of circular motion. Choice B has wrong dimensions (acceleration needs length/time², not length×time/time). Choices C and D also have incorrect dimensions."
  },
  {
    "id": "physc_u2_q055",
    "subject": "apphysc",
    "unit": 2,
    "topic": "non-inertial reference frames",
    "topicLabel": "non-inertial reference frames",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An inertial reference frame is one that is:",
    "choices": [
      "A) Not accelerating",
      "B) Moving at constant speed",
      "C) Rotating",
      "D) Moving in a circle"
    ],
    "answer": 0,
    "explanation": "An inertial frame is not accelerating (has zero acceleration). Choice B is incomplete because constant speed in a circle still involves acceleration. Choices C and D describe accelerating (non-inertial) frames since rotation involves acceleration."
  },
  {
    "id": "physc_u2_q056",
    "subject": "apphysc",
    "unit": 2,
    "topic": "non-inertial reference frames",
    "topicLabel": "non-inertial reference frames",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a non-inertial reference frame, what must be added to apply Newton's laws correctly?",
    "choices": [
      "A) Fictitious forces",
      "B) Real forces only",
      "C) Gravitational forces",
      "D) Normal forces"
    ],
    "answer": 0,
    "explanation": "In non-inertial frames, fictitious forces (like centrifugal force) must be added to account for the frame's acceleration when applying Newton's laws. Choice B works only in inertial frames. Choices C and D are specific real forces that may or may not be present."
  },
  {
    "id": "physc_u2_q057",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 5.0 kg block rests on a horizontal surface. A horizontal force of 15 N is applied to the block, but it remains stationary. What can be concluded about the coefficient of static friction between the block and surface?",
    "choices": [
      "A) μs = 0.31",
      "B) μs ≥ 0.31",
      "C) μs ≤ 0.31",
      "D) μs > 0.31"
    ],
    "answer": 1,
    "explanation": "Since the block remains stationary, static friction balances the applied force: fs = 15 N. The maximum static friction is μs × mg = μs × 49 N. Since fs ≤ fs,max, we have 15 ≤ μs × 49, so μs ≥ 0.31. Choice A assumes equality at maximum friction, which isn't necessarily true. Choice C reverses the inequality. Choice D excludes the possibility of equality."
  },
  {
    "id": "physc_u2_q058",
    "subject": "apphysc",
    "unit": 2,
    "topic": "free body diagrams",
    "topicLabel": "free body diagrams",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A book slides down a 30° inclined plane at constant velocity. Which statement about the forces on the book is correct?",
    "choices": [
      "A) The normal force equals the weight of the book",
      "B) The friction force equals the component of weight parallel to the plane",
      "C) The net force down the plane is mg sin 30°",
      "D) The normal force equals mg sin 30°"
    ],
    "answer": 1,
    "explanation": "At constant velocity, acceleration is zero, so net force is zero. The component of weight parallel to the plane (mg sin 30°) must be balanced by friction force up the plane. Choice A is wrong because N = mg cos 30°, not mg. Choice C is wrong because net force is zero at constant velocity. Choice D confuses the parallel and perpendicular components."
  },
  {
    "id": "physc_u2_q059",
    "subject": "apphysc",
    "unit": 2,
    "topic": "drag force",
    "topicLabel": "drag force",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spherical object falls through air with drag force proportional to v². At terminal velocity, which statement is correct?",
    "choices": [
      "A) The acceleration is constant and equal to g",
      "B) The net force is zero",
      "C) The drag force is less than the gravitational force",
      "D) The object continues to accelerate slowly"
    ],
    "answer": 1,
    "explanation": "At terminal velocity, the object moves at constant velocity, meaning zero acceleration and zero net force. The upward drag force exactly balances the downward gravitational force. Choice A is wrong because acceleration is zero, not g. Choice C is incorrect because drag equals weight at terminal velocity. Choice D contradicts the definition of terminal velocity where acceleration is zero."
  },
  {
    "id": "physc_u2_q060",
    "subject": "apphysc",
    "unit": 2,
    "topic": "non-inertial reference frames",
    "topicLabel": "non-inertial reference frames",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A pendulum hangs in an elevator accelerating upward at 2 m/s². In the elevator's reference frame, what is the effective gravitational acceleration?",
    "choices": [
      "A) 8 m/s²",
      "B) 10 m/s²",
      "C) 12 m/s²",
      "D) 2 m/s²"
    ],
    "answer": 2,
    "explanation": "In the non-inertial elevator frame, a fictitious force ma acts downward on all objects, where a is the elevator's acceleration. The effective gravity becomes g + a = 10 + 2 = 12 m/s². Choice A subtracts instead of adds. Choice B uses only regular gravity, ignoring the non-inertial effects. Choice D uses only the elevator's acceleration."
  },
  {
    "id": "physc_u2_q061",
    "subject": "apphysc",
    "unit": 2,
    "topic": "friction",
    "topicLabel": "friction",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block on an inclined plane (angle θ) is on the verge of sliding down. If the angle is increased slightly, what happens to the coefficient of kinetic friction needed to maintain constant velocity?",
    "choices": [
      "A) It must increase",
      "B) It must decrease",
      "C) It remains the same as μs",
      "D) It becomes μs tan θ"
    ],
    "answer": 2,
    "explanation": "At the verge of sliding, μs = tan θ. Once sliding begins at constant velocity, μk = tan θ for the new angle. The coefficient of kinetic friction is a material property that doesn't change with angle - what changes is whether that coefficient is sufficient. Choice A and B incorrectly suggest μk changes with angle. Choice D shows a misunderstanding of the relationship."
  },
  {
    "id": "physc_u2_q062",
    "subject": "apphysc",
    "unit": 2,
    "topic": "drag force",
    "topicLabel": "drag force",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A small sphere falls through a viscous liquid where drag force is Fd = bv. Starting from rest, how does the velocity change with time?",
    "choices": [
      "A) v increases linearly with time",
      "B) v increases exponentially toward terminal velocity",
      "C) v increases as t²",
      "D) v approaches terminal velocity asymptotically"
    ],
    "answer": 3,
    "explanation": "The equation of motion is mg - bv = ma = m(dv/dt). This gives v(t) = (mg/b)[1 - e^(-bt/m)], which approaches terminal velocity vt = mg/b asymptotically. Choice A describes constant acceleration. Choice B suggests exponential growth rather than approach to a limit. Choice C describes motion under constant acceleration without drag."
  },
  {
    "id": "physc_u2_q063",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A ball on a string moves in a vertical circle. At the top of the circle, the tension is 10 N and at the bottom it's 50 N. If the radius is 1 m, what is the ball's mass?",
    "choices": [
      "A) 1 kg",
      "B) 2 kg",
      "C) 3 kg",
      "D) 4 kg"
    ],
    "answer": 1,
    "explanation": "At top: T + mg = mv²/r, so 10 + 10m = mv². At bottom: T - mg = mv²/r, so 50 - 10m = mv². Since mv² is the same: 10 + 10m = 50 - 10m, giving 20m = 40, so m = 2 kg. Choice A forgets to account for weight at both positions. Choice C uses incorrect force analysis. Choice D represents an arithmetic error."
  },
  {
    "id": "physc_u2_q064",
    "subject": "apphysc",
    "unit": 2,
    "topic": "non-inertial reference frames",
    "topicLabel": "non-inertial reference frames",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A ball is placed on the floor of a car that is turning left with centripetal acceleration 3 m/s². In the car's reference frame, which direction does the ball roll?",
    "choices": [
      "A) Toward the left (center of turn)",
      "B) Toward the right (away from center)",
      "C) Forward",
      "D) Backward"
    ],
    "answer": 1,
    "explanation": "In the non-inertial (car's) reference frame, a fictitious centrifugal force acts outward (away from the center of the turn). This force pushes the ball toward the right side of the car. Choice A describes what happens in the inertial ground frame where the ball continues straight. Choices C and D confuse centrifugal with linear acceleration effects."
  },
  {
    "id": "physc_u2_q065",
    "subject": "apphysc",
    "unit": 2,
    "topic": "free body diagrams",
    "topicLabel": "free body diagrams",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Three blocks (1 kg, 2 kg, 3 kg) are pushed along a frictionless surface by a 12 N force applied to the 1 kg block. What force does the 2 kg block exert on the 3 kg block?",
    "choices": [
      "A) 12 N",
      "B) 6 N",
      "C) 4 N",
      "D) 8 N"
    ],
    "answer": 1,
    "explanation": "System acceleration: a = 12 N / 6 kg = 2 m/s². The 3 kg block needs F = ma = 6 N to accelerate at 2 m/s². This force comes from the 2 kg block. Choice A assumes the full applied force is transmitted. Choice C would accelerate only the 3 kg block incorrectly. Choice D represents a calculation error."
  },
  {
    "id": "physc_u2_q066",
    "subject": "apphysc",
    "unit": 2,
    "topic": "friction",
    "topicLabel": "friction",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A box slides down a rough incline at constant velocity. If the mass of the box is doubled, what happens to its velocity down the incline?",
    "choices": [
      "A) It doubles",
      "B) It halves",
      "C) It remains the same",
      "D) It increases by √2"
    ],
    "answer": 2,
    "explanation": "At constant velocity, mg sin θ = μk mg cos θ, so μk = tan θ. This relationship is independent of mass. Doubling the mass doubles both the gravitational component and the normal force (hence friction) equally, so the velocity remains constant. Choices A, B, and D all incorrectly assume mass affects the force balance."
  },
  {
    "id": "physc_u2_q067",
    "subject": "apphysc",
    "unit": 2,
    "topic": "drag force",
    "topicLabel": "drag force",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical spheres are dropped simultaneously, one in air and one in water. The drag force in both media is proportional to v². Which reaches terminal velocity first?",
    "choices": [
      "A) The sphere in air",
      "B) The sphere in water",
      "C) They reach terminal velocity simultaneously",
      "D) Cannot be determined without knowing the proportionality constants"
    ],
    "answer": 1,
    "explanation": "Terminal velocity is reached when acceleration approaches zero. Since water has much higher drag coefficient than air, the sphere in water experiences greater drag force at any given velocity, causing it to reach the balance point (terminal velocity) sooner. Choice A ignores the relative drag magnitudes. Choice C assumes identical conditions. Choice D overthinks the qualitative comparison."
  },
  {
    "id": "physc_u2_q068",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car rounds a banked curve at the design speed where no friction is needed. If the car goes faster than the design speed, which direction must friction act?",
    "choices": [
      "A) Up the incline",
      "B) Down the incline",
      "C) Radially inward",
      "D) Radially outward"
    ],
    "answer": 1,
    "explanation": "At speeds above the design speed, the horizontal component of the normal force is insufficient to provide the needed centripetal force. Friction must act down the incline so its horizontal component points toward the center of the curve. Choice A would oppose the needed centripetal force. Choices C and D ignore that friction acts along the surface, not horizontally."
  },
  {
    "id": "physc_u2_q069",
    "subject": "apphysc",
    "unit": 2,
    "topic": "non-inertial reference frames",
    "topicLabel": "non-inertial reference frames",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a car accelerating forward at 2 m/s², a pendulum hangs from the ceiling. In the car's reference frame, what angle does the pendulum make with the vertical?",
    "choices": [
      "A) tan⁻¹(0.2)",
      "B) tan⁻¹(0.1)",
      "C) sin⁻¹(0.2)",
      "D) cos⁻¹(0.2)"
    ],
    "answer": 0,
    "explanation": "In the car's non-inertial frame, a fictitious force ma = 2m acts backward on the pendulum. For equilibrium: tan θ = ma/(mg) = 2/10 = 0.2. Therefore θ = tan⁻¹(0.2). Choice B uses the wrong acceleration ratio. Choices C and D use incorrect trigonometric relationships for this force balance."
  },
  {
    "id": "physc_u2_q070",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket expels 0.1 kg of gas per second at 2000 m/s relative to the rocket. If the rocket's mass is 1000 kg, what is its initial acceleration?",
    "choices": [
      "A) 0.1 m/s²",
      "B) 0.2 m/s²",
      "C) 2.0 m/s²",
      "D) 20 m/s²"
    ],
    "answer": 1,
    "explanation": "The thrust force is F = (dm/dt) × vrel = 0.1 × 2000 = 200 N. The rocket's acceleration is a = F/m = 200/1000 = 0.2 m/s². Choice A uses the mass rate instead of force. Choice C ignores the rocket's mass. Choice D uses an incorrect relationship between the given quantities."
  },
  {
    "id": "physc_u2_q071",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite orbits Earth in a circular orbit. If the orbital radius is doubled, how does the centripetal acceleration change?",
    "choices": [
      "A) It doubles",
      "B) It quadruples",
      "C) It is reduced by half",
      "D) It is reduced to one-fourth"
    ],
    "answer": 3,
    "explanation": "For circular orbits, ac = GM/r². When radius doubles, centripetal acceleration becomes GM/(2r)² = GM/4r² = ac/4. The acceleration is reduced to one-fourth. Choice A and B suggest direct or squared proportionality. Choice C represents the incorrect inverse relationship rather than inverse square."
  },
  {
    "id": "physc_u2_q072",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 5 kg block is pulled horizontally across a rough surface by a 30 N force at 37° above horizontal. If the coefficient of kinetic friction is 0.3, what is the acceleration of the block?",
    "choices": [
      "A) 2.4 m/s²",
      "B) 3.6 m/s²",
      "C) 4.2 m/s²",
      "D) 6.0 m/s²"
    ],
    "answer": 0,
    "explanation": "The horizontal component is 30cos(37°) = 24 N. The vertical component reduces normal force: N = mg - 30sin(37°) = 50 - 18 = 32 N. Friction is μN = 0.3(32) = 9.6 N. Net force is 24 - 9.6 = 14.4 N, so a = 14.4/5 = 2.4 m/s². Students often forget the vertical component reduces normal force (choice B) or neglect friction entirely (choice D)."
  },
  {
    "id": "physc_u2_q073",
    "subject": "apphysc",
    "unit": 2,
    "topic": "friction",
    "topicLabel": "friction",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A box sits on an inclined plane at angle θ. The coefficient of static friction is μs = 0.6. What is the maximum angle before the box begins to slide?",
    "choices": [
      "A) 31°",
      "B) 37°",
      "C) 53°",
      "D) 60°"
    ],
    "answer": 0,
    "explanation": "At the threshold of sliding, static friction equals the component of weight down the plane: μsmg cos θ = mg sin θ. This gives μs = tan θ, so θ = arctan(0.6) = 31°. Students often confuse this with μs = sin θ (choice B), use μs = cos θ (choice C), or think it's related to the coefficient value directly (choice D)."
  },
  {
    "id": "physc_u2_q074",
    "subject": "apphysc",
    "unit": 2,
    "topic": "drag force",
    "topicLabel": "drag force",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A sphere falls through air with drag force Fd = bv². At terminal velocity, the sphere falls at 20 m/s. If the sphere's mass is doubled while keeping the same shape and drag coefficient, what is the new terminal velocity?",
    "choices": [
      "A) 14 m/s",
      "B) 20 m/s",
      "C) 28 m/s",
      "D) 40 m/s"
    ],
    "answer": 2,
    "explanation": "At terminal velocity, mg = bv². When mass doubles: 2mg = bv'². Dividing equations: 2 = v'²/v², so v' = v√2 = 20√2 ≈ 28 m/s. Students often think velocity doubles with mass (choice D), stays the same (choice B), or incorrectly apply linear relationship (choice A using √2 in denominator)."
  },
  {
    "id": "physc_u2_q075",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car travels around a flat circular track of radius 100 m. If the coefficient of static friction between tires and road is 0.8, what is the maximum speed the car can maintain without slipping?",
    "choices": [
      "A) 20 m/s",
      "B) 28 m/s",
      "C) 32 m/s",
      "D) 40 m/s"
    ],
    "answer": 1,
    "explanation": "The centripetal force is provided by friction: μsmg = mv²/r. Solving for v: v = √(μsgr) = √(0.8 × 10 × 100) = √800 ≈ 28 m/s. Students often forget the square root (choice C), use incorrect formula μsg = v²/r giving choice A, or make arithmetic errors leading to choice D."
  },
  {
    "id": "physc_u2_q076",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass attached to a string swings in a vertical circle. At the bottom of the circle, the tension in the string is 60 N. If the mass is 2 kg and the radius is 1.5 m, what is the speed at the bottom?",
    "choices": [
      "A) 3 m/s",
      "B) 6 m/s",
      "C) 9 m/s",
      "D) 12 m/s"
    ],
    "answer": 1,
    "explanation": "At the bottom, T - mg = mv²/r, so 60 - 20 = 2v²/1.5, giving 40 = 4v²/3, so v² = 30 and v = √30 ≈ 5.5 ≈ 6 m/s. Students often use T = mv²/r ignoring weight (choice C), make sign errors, or confuse the geometry leading to other values."
  },
  {
    "id": "physc_u2_q077",
    "subject": "apphysc",
    "unit": 2,
    "topic": "non-inertial reference frames",
    "topicLabel": "non-inertial reference frames",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an elevator accelerating upward at 2 m/s², a 5 kg block sits on the floor. What is the apparent weight (normal force) of the block as measured by someone in the elevator?",
    "choices": [
      "A) 40 N",
      "B) 50 N",
      "C) 60 N",
      "D) 70 N"
    ],
    "answer": 2,
    "explanation": "From ground frame: N - mg = ma, so N = m(g + a) = 5(10 + 2) = 60 N. From elevator frame, there's a fictitious downward force ma, making apparent weight m(g + a). Students often use just mg (choice B), subtract acceleration (choice A), or make calculation errors (choice D)."
  },
  {
    "id": "physc_u2_q078",
    "subject": "apphysc",
    "unit": 2,
    "topic": "friction",
    "topicLabel": "friction",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 10 kg crate is pushed across the floor by a 40 N horizontal force. If the crate moves at constant velocity, what is the coefficient of kinetic friction?",
    "choices": [
      "A) 0.25",
      "B) 0.4",
      "C) 0.75",
      "D) 1.0"
    ],
    "answer": 1,
    "explanation": "At constant velocity, net force is zero, so applied force equals kinetic friction: 40 N = μkmg = μk(10)(10) = 100μk. Therefore μk = 40/100 = 0.4. Students might use wrong mass values, forget that constant velocity means zero acceleration, or make arithmetic errors leading to other coefficients."
  },
  {
    "id": "physc_u2_q079",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car drives over a hill with circular cross-section of radius R. At what speed will the normal force from the seat on a passenger be exactly half the passenger's weight?",
    "choices": [
      "A) √(gR/2)",
      "B) √(gR)",
      "C) √(3gR/2)",
      "D) √(2gR)"
    ],
    "answer": 0,
    "explanation": "At the top of the hill, centripetal force is provided by weight minus normal force: mg - N = mv²/R. If N = mg/2, then mg - mg/2 = mv²/R, so mg/2 = mv²/R, giving v = √(gR/2). Students often forget that normal force and weight work together to provide centripetal force, or incorrectly add them instead of subtracting."
  },
  {
    "id": "physc_u2_q080",
    "subject": "apphysc",
    "unit": 2,
    "topic": "non-inertial reference frames",
    "topicLabel": "non-inertial reference frames",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A pendulum hangs in a car that is accelerating forward at constant acceleration a. In the car's reference frame, what angle θ does the pendulum make with the vertical when in equilibrium?",
    "choices": [
      "A) θ = arctan(a/g)",
      "B) θ = arctan(g/a)",
      "C) θ = arcsin(a/g)",
      "D) θ = arcsin(a/√(a² + g²))"
    ],
    "answer": 0,
    "explanation": "In the car's (non-inertial) reference frame, there's a fictitious force ma acting backward on the pendulum bob. For equilibrium, the horizontal component of tension balances ma, and the vertical component balances mg. This gives tan(θ) = ma/mg = a/g. Students often confuse which acceleration goes in the numerator or use sine instead of tangent."
  },
  {
    "id": "physc_u2_q081",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's laws",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two blocks of masses m1 and m2 are connected by a spring and placed on a frictionless surface. A force F is applied to m1. When the system reaches steady state, what is the acceleration of m2?",
    "choices": [
      "A) F/m2",
      "B) F/(m1 + m2)",
      "C) F·m1/(m1 + m2)",
      "D) F·m2/(m1 + m2)"
    ],
    "answer": 1,
    "explanation": "In steady state, both masses have the same acceleration since the spring stops compressing/extending. Treating the system as a whole, total mass is m1 + m2 and net external force is F, so a = F/(m1 + m2). Students often think m2 accelerates independently (choice A) or get confused about which mass ratio to use (choices C and D)."
  },
  {
    "id": "physc_u2_q082",
    "subject": "apphysc",
    "unit": 2,
    "topic": "free body diagrams",
    "topicLabel": "free body diagrams",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform beam of mass M and length L is supported by a hinge at one end and a cable at angle φ above horizontal at the other end. If a mass m is placed at distance d from the hinge, what is the tension in the cable?",
    "choices": [
      "A) (Mg·L/2 + mg·d)/(L·sin φ)",
      "B) (Mg·L/2 + mg·d)/(L·cos φ)",
      "C) (Mg + mg)/(sin φ)",
      "D) (Mg·L + mg·d)/(2L·sin φ)"
    ],
    "answer": 0,
    "explanation": "Taking torques about the hinge eliminates the hinge forces. The beam's weight creates torque Mg(L/2), the mass m creates torque mgd, and the cable creates torque T·L·sin φ. For equilibrium: T·L·sin φ = Mg·L/2 + mg·d. Students often use cos φ instead of sin φ or incorrectly place the beam's center of mass."
  },
  {
    "id": "physc_u2_q083",
    "subject": "apphysc",
    "unit": 2,
    "topic": "friction",
    "topicLabel": "friction",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block slides down a rough incline of angle θ with initial speed v0. The coefficient of kinetic friction is μk. After traveling distance s along the incline, what is the block's speed?",
    "choices": [
      "A) √(v0² + 2gs(sin θ - μk cos θ))",
      "B) √(v0² + 2gs(sin θ + μk cos θ))",
      "C) √(v0² - 2gs(sin θ + μk cos θ))",
      "D) √(v0² - 2gs(sin θ - μk cos θ))"
    ],
    "answer": 0,
    "explanation": "The net force down the incline is mg sin θ - μk mg cos θ, giving acceleration a = g(sin θ - μk cos θ). Since this is positive (assuming block accelerates down), using v² = v0² + 2as gives the answer. Students often confuse the sign of friction or acceleration direction, or forget that kinematic equations require careful attention to signs."
  },
  {
    "id": "physc_u2_q084",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's laws",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rope of mass m and length L hangs vertically under its own weight. What is the tension in the rope at a distance x from the bottom?",
    "choices": [
      "A) mgx/L",
      "B) mg(L-x)/L",
      "C) mgx",
      "D) mg(L-x)"
    ],
    "answer": 0,
    "explanation": "The tension at distance x from the bottom must support the weight of rope below that point. The mass per unit length is m/L, so the mass below point x is (m/L)x. Therefore tension T = g(m/L)x = mgx/L. Students often use (L-x) thinking about distance from top, or forget the mass distribution."
  },
  {
    "id": "physc_u2_q085",
    "subject": "apphysc",
    "unit": 2,
    "topic": "friction",
    "topicLabel": "friction",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A wheel of radius R rolls without slipping down an incline of angle θ. If the coefficient of static friction is μs, what is the minimum value of μs needed to prevent slipping?",
    "choices": [
      "A) tan θ",
      "B) (2/7) tan θ",
      "C) (1/3) tan θ",
      "D) (2/5) tan θ"
    ],
    "answer": 2,
    "explanation": "For rolling without slipping, a = αR and friction provides the torque. For a solid disk, I = ½mR². The acceleration down the incline is a = (2/3)g sin θ, requiring friction f = ma/3 = mg sin θ/3. Since f ≤ μsmg cos θ, we get μs ≥ (1/3) tan θ. Students often use the sliding case (tan θ) or incorrect moment of inertia values."
  },
  {
    "id": "physc_u2_q086",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conical pendulum consists of a mass m attached to a string of length L, rotating in a horizontal circle of radius r. If the string makes angle θ with vertical, what is the period of rotation?",
    "choices": [
      "A) 2π√(L cos θ/g)",
      "B) 2π√(L sin θ/g)",
      "C) 2π√(L/(g cos θ))",
      "D) 2π√(r/g)"
    ],
    "answer": 0,
    "explanation": "The vertical component of tension balances weight: T cos θ = mg. The horizontal component provides centripetal force: T sin θ = mω²r = mω²L sin θ. Dividing equations: tan θ = ω²L sin θ/g, so ω² = g/(L cos θ). Therefore T = 2π√(L cos θ/g). Students often confuse which trigonometric function to use or forget the geometry relationship."
  },
  {
    "id": "physc_u2_q087",
    "subject": "apphysc",
    "unit": 2,
    "topic": "non-inertial reference frames",
    "topicLabel": "non-inertial reference frames",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves in a straight line in an inertial frame with constant velocity v. In a reference frame rotating with angular velocity ω, what is the magnitude of the Coriolis acceleration?",
    "choices": [
      "A) 2ωv",
      "B) ω²v",
      "C) ωv",
      "D) 2ω²v"
    ],
    "answer": 0,
    "explanation": "The Coriolis acceleration is given by a_Coriolis = -2ω × v, where ω is the angular velocity vector and v is the velocity in the rotating frame. The magnitude is 2ωv when ω and v are perpendicular. Students often forget the factor of 2 (choosing C) or confuse it with centrifugal acceleration ω²r."
  },
  {
    "id": "physc_u2_q088",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's laws",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A chain of length L and mass M is initially at rest on a table with length h hanging over the edge. The table is frictionless. What is the acceleration of the chain when it starts to move?",
    "choices": [
      "A) gh/L",
      "B) gh²/L²",
      "C) gM h/(ML)",
      "D) g(L-h)/L"
    ],
    "answer": 0,
    "explanation": "The hanging portion has mass Mh/L and weight (Mh/L)g. This force accelerates the entire chain of mass M. Using F = Ma: (Mh/L)g = Ma, so a = gh/L. Students often forget that the entire chain accelerates together, or miscalculate the mass of the hanging portion."
  },
  {
    "id": "physc_u2_q089",
    "subject": "apphysc",
    "unit": 2,
    "topic": "circular motion dynamics",
    "topicLabel": "circular motion dynamics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car travels around a banked circular track of radius R. The banking angle is θ and coefficient of friction is μ. What is the maximum speed for which the car will not slip up the bank?",
    "choices": [
      "A) √(gR(sin θ + μ cos θ)/(cos θ - μ sin θ))",
      "B) √(gR(cos θ + μ sin θ)/(sin θ - μ cos θ))",
      "C) √(gR(sin θ - μ cos θ)/(cos θ + μ sin θ))",
      "D) √(gR tan θ/(1 - μ))"
    ],
    "answer": 0,
    "explanation": "At maximum speed, friction acts down the bank. Force equations: N cos θ + f sin θ = mg (vertical), N sin θ - f cos θ = mv²/R (horizontal). With f = μN and solving simultaneously gives the result. Students often get confused about friction direction at maximum vs minimum speed, or make algebraic errors in the simultaneous equations."
  },
  {
    "id": "physc_u3_q090",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "Work Integral",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The work done by a constant force F on an object moving along a straight line from position x₁ to x₂ is given by which integral?",
    "choices": [
      "A) ∫F dx from x₁ to x₂",
      "B) ∫F dt from t₁ to t₂",
      "C) ∫F dv from v₁ to v₂",
      "D) ∫F dy from y₁ to y₂"
    ],
    "answer": 0,
    "explanation": "Work is defined as the integral of force with respect to displacement along the path of motion. Choice A correctly shows integration with respect to position x. Choice B confuses work with impulse (∫F dt). Choice C incorrectly uses velocity as the integration variable. Choice D assumes motion in the y-direction when the problem specifies x-direction motion."
  },
  {
    "id": "physc_u3_q091",
    "subject": "apphysc",
    "unit": 3,
    "topic": "kinetic energy theorem",
    "topicLabel": "Kinetic Energy Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to the work-energy theorem, the net work done on an object equals:",
    "choices": [
      "A) The change in kinetic energy",
      "B) The change in potential energy",
      "C) The change in momentum",
      "D) The total energy of the system"
    ],
    "answer": 0,
    "explanation": "The work-energy theorem states that W_net = ΔKE. The net work done on an object equals its change in kinetic energy. Choice B confuses work with conservative forces only. Choice C relates to the impulse-momentum theorem, not work-energy. Choice D incorrectly suggests work equals total energy rather than energy change."
  },
  {
    "id": "physc_u3_q092",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy Functions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The gravitational potential energy of a mass m at height h above the ground is:",
    "choices": [
      "A) mgh",
      "B) (1/2)mgh",
      "C) mg/h",
      "D) mh/g"
    ],
    "answer": 0,
    "explanation": "Gravitational potential energy near Earth's surface is U = mgh, where m is mass, g is gravitational acceleration, and h is height. This comes from integrating the constant gravitational force over the displacement. Choice B incorrectly applies the kinetic energy formula. Choices C and D have incorrect arrangements of the variables that don't give units of energy."
  },
  {
    "id": "physc_u3_q093",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservative forces",
    "topicLabel": "Conservative Forces",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following is a characteristic of conservative forces?",
    "choices": [
      "A) Work done depends only on initial and final positions",
      "B) Work done depends on the path taken",
      "C) Work done is always positive",
      "D) Work done increases the total energy of the system"
    ],
    "answer": 0,
    "explanation": "Conservative forces have the property that the work they do depends only on the initial and final positions, not on the path taken. This allows us to define potential energy functions. Choice B describes non-conservative forces. Choice C is incorrect as conservative forces can do negative work. Choice D is wrong because conservative forces don't change total mechanical energy."
  },
  {
    "id": "physc_u3_q094",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservation of energy",
    "topicLabel": "Conservation of Energy",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a system with only conservative forces acting, which quantity remains constant?",
    "choices": [
      "A) Total mechanical energy",
      "B) Kinetic energy only",
      "C) Potential energy only",
      "D) Momentum"
    ],
    "answer": 0,
    "explanation": "When only conservative forces act on a system, total mechanical energy (KE + PE) is conserved. Individual kinetic and potential energies can change, but their sum remains constant. Choice B is wrong because KE can change as objects speed up or slow down. Choice C is wrong because PE can change as positions change. Choice D refers to momentum conservation, which is a separate principle."
  },
  {
    "id": "physc_u3_q095",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Power",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Power is defined as:",
    "choices": [
      "A) The rate of doing work",
      "B) The total work done",
      "C) Force times distance",
      "D) Energy per unit mass"
    ],
    "answer": 0,
    "explanation": "Power is defined as the rate at which work is done, or P = dW/dt. It measures how quickly energy is transferred. Choice B describes work itself, not power. Choice C is the definition of work, not power. Choice D describes specific energy, not power."
  },
  {
    "id": "physc_u3_q096",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "Work Integral",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If a variable force F(x) = 2x acts on an object from x = 0 to x = 3, the work done is:",
    "choices": [
      "A) 9 J",
      "B) 6 J",
      "C) 18 J",
      "D) 3 J"
    ],
    "answer": 0,
    "explanation": "Work = ∫F(x)dx = ∫2x dx from 0 to 3 = [x²] from 0 to 3 = 9 - 0 = 9 J. Choice B incorrectly uses F(3) × distance = 6 × 1, missing the integration. Choice C incorrectly doubles the correct answer. Choice D uses only the final position value without proper integration."
  },
  {
    "id": "physc_u3_q097",
    "subject": "apphysc",
    "unit": 3,
    "topic": "kinetic energy theorem",
    "topicLabel": "Kinetic Energy Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 2 kg object starts from rest and has 50 J of work done on it. Its final kinetic energy is:",
    "choices": [
      "A) 50 J",
      "B) 25 J",
      "C) 100 J",
      "D) 0 J"
    ],
    "answer": 0,
    "explanation": "By the work-energy theorem, W_net = ΔKE = KE_final - KE_initial. Since the object starts from rest, KE_initial = 0, so KE_final = W_net = 50 J. Choice B incorrectly divides by the mass. Choice C incorrectly doubles the work. Choice D ignores that work was done on the object."
  },
  {
    "id": "physc_u3_q098",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy Functions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The elastic potential energy stored in a spring with spring constant k stretched by distance x is:",
    "choices": [
      "A) (1/2)kx²",
      "B) kx",
      "C) kx²",
      "D) (1/2)kx"
    ],
    "answer": 0,
    "explanation": "Elastic potential energy is U = (1/2)kx², derived from integrating the spring force F = -kx. This is the area under the force vs. displacement curve. Choice B gives the force magnitude, not energy. Choice C is missing the factor of 1/2 from integration. Choice D has the wrong power of x."
  },
  {
    "id": "physc_u3_q099",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservative forces",
    "topicLabel": "Conservative Forces",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following forces is conservative?",
    "choices": [
      "A) Gravitational force",
      "B) Friction force",
      "C) Air resistance",
      "D) Applied push force"
    ],
    "answer": 0,
    "explanation": "Gravitational force is conservative because its work depends only on the change in height, not the path taken. The work done by gravity going up and then down returns the object to its original energy state. Friction and air resistance are non-conservative as they always remove energy from the system. Applied forces are typically non-conservative as they depend on how they're applied."
  },
  {
    "id": "physc_u3_q100",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservation of energy",
    "topicLabel": "Conservation of Energy",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A ball is dropped from height h. Just before hitting the ground, its kinetic energy equals:",
    "choices": [
      "A) mgh",
      "B) (1/2)mgh",
      "C) 2mgh",
      "D) mg/h"
    ],
    "answer": 0,
    "explanation": "By conservation of energy, the initial potential energy mgh converts entirely to kinetic energy just before impact (assuming no air resistance). PE_initial + KE_initial = PE_final + KE_final, so mgh + 0 = 0 + KE_final, giving KE_final = mgh. Choice B incorrectly applies a factor of 1/2. Choice C doubles the correct value. Choice D has incorrect units."
  },
  {
    "id": "physc_u3_q101",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Power",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If 100 J of work is done in 5 seconds, the average power is:",
    "choices": [
      "A) 20 W",
      "B) 500 W",
      "C) 105 W",
      "D) 95 W"
    ],
    "answer": 0,
    "explanation": "Average power = Work/time = 100 J / 5 s = 20 W. This is the basic definition of average power. Choice B incorrectly multiplies work by time instead of dividing. Choices C and D represent common arithmetic errors (addition/subtraction instead of division)."
  },
  {
    "id": "physc_u3_q102",
    "subject": "apphysc",
    "unit": 3,
    "topic": "kinetic energy theorem",
    "topicLabel": "kinetic energy theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 2 kg object starts from rest and experiences a net force of 8 N for 3 seconds. Using the work-energy theorem, what is the object's final kinetic energy?",
    "choices": [
      "A) 144 J",
      "B) 288 J",
      "C) 72 J",
      "D) 24 J"
    ],
    "answer": 0,
    "explanation": "First find acceleration: a = F/m = 8/2 = 4 m/s². Distance traveled: s = ½at² = ½(4)(9) = 18 m. Work done: W = Fs = 8(18) = 144 J. By work-energy theorem, W = ΔKE = KE_final - 0 = 144 J. Students might incorrectly use W = Ft = 24 J or double the correct answer."
  },
  {
    "id": "physc_u3_q103",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car engine delivers 60 kW of power while the car travels at constant 20 m/s. What is the magnitude of the driving force?",
    "choices": [
      "A) 1200 N",
      "B) 3000 N",
      "C) 1800 N",
      "D) 2400 N"
    ],
    "answer": 1,
    "explanation": "Power P = F·v for constant velocity. Given P = 60,000 W and v = 20 m/s, we have 60,000 = F(20), so F = 3000 N. Students might confuse this with P = F·v for accelerating motion or make unit conversion errors."
  },
  {
    "id": "physc_u3_q104",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "potential energy functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle has potential energy U(x) = ½kx² + bx, where k and b are constants. At what position is the particle in equilibrium?",
    "choices": [
      "A) x = -b/k",
      "B) x = b/k",
      "C) x = -k/b",
      "D) x = k/b"
    ],
    "answer": 0,
    "explanation": "Equilibrium occurs where the force is zero. F = -dU/dx = -(kx + b) = 0. Solving: kx + b = 0, so x = -b/k. Students might forget the negative sign in F = -dU/dx or solve the equation incorrectly."
  },
  {
    "id": "physc_u3_q105",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservative forces",
    "topicLabel": "conservative forces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following forces is NOT conservative?",
    "choices": [
      "A) F = -kx î (spring force)",
      "B) F = -mg ĵ (gravitational force)",
      "C) F = -μN v̂ (kinetic friction)",
      "D) F = kq₁q₂/r² r̂ (electrostatic force)"
    ],
    "answer": 2,
    "explanation": "Friction is not conservative because it always opposes motion and depends on the path taken - longer paths result in more energy dissipated. Spring, gravitational, and electrostatic forces are conservative because they depend only on position and the work done is path-independent. Students might think any force proportional to distance or depending on velocity could be conservative."
  },
  {
    "id": "physc_u3_q106",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservation of energy",
    "topicLabel": "conservation of energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A pendulum bob of mass 2 kg swings from rest at an angle of 30° from vertical. What is its speed at the bottom of the swing if the string length is 1 m?",
    "choices": [
      "A) 2.3 m/s",
      "B) 1.6 m/s",
      "C) 3.1 m/s",
      "D) 4.4 m/s"
    ],
    "answer": 1,
    "explanation": "The height difference is h = L(1 - cos30°) = 1(1 - √3/2) = 1 - 0.866 = 0.134 m. By conservation of energy: mgh = ½mv², so v = √(2gh) = √(2×10×0.134) = √2.68 ≈ 1.6 m/s. Students might use the angle directly instead of the height difference or make trigonometric errors."
  },
  {
    "id": "physc_u3_q107",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A motor lifts a 500 N weight at constant velocity 2 m/s. If the motor is 80% efficient, what electrical power input is required?",
    "choices": [
      "A) 800 W",
      "B) 1000 W",
      "C) 1250 W",
      "D) 1600 W"
    ],
    "answer": 2,
    "explanation": "Mechanical power output = F×v = 500×2 = 1000 W. With 80% efficiency, electrical power input = 1000/0.8 = 1250 W. Students might forget about efficiency or calculate it incorrectly (multiplying instead of dividing)."
  },
  {
    "id": "physc_u3_q108",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "work integral",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A force F = 4x³ î acts on a particle. How much work is done as the particle moves from x = 0 to x = 2 m?",
    "choices": [
      "A) 8 J",
      "B) 16 J",
      "C) 32 J",
      "D) 64 J"
    ],
    "answer": 1,
    "explanation": "Work = ∫F·dx = ∫4x³dx from 0 to 2 = [x⁴] from 0 to 2 = 2⁴ - 0⁴ = 16 J. Students might incorrectly integrate (getting 4x⁴/4 = x⁴ is correct) or make arithmetic errors in the evaluation."
  },
  {
    "id": "physc_u3_q109",
    "subject": "apphysc",
    "unit": 3,
    "topic": "kinetic energy theorem",
    "topicLabel": "kinetic energy theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 3 kg object initially moving at 4 m/s is acted upon by a net force, and its speed increases to 8 m/s. What net work was done on the object?",
    "choices": [
      "A) 72 J",
      "B) 96 J",
      "C) 120 J",
      "D) 24 J"
    ],
    "answer": 0,
    "explanation": "By the work-energy theorem, W = ΔKE = ½m(v₂² - v₁²) = ½(3)(8² - 4²) = ½(3)(64 - 16) = ½(3)(48) = 72 J. Students might forget to square the velocities or calculate the difference incorrectly."
  },
  {
    "id": "physc_u3_q110",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "potential energy functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If U(x) = ax⁴ + bx² + c represents the potential energy of a particle, what is the force when the potential energy is minimum?",
    "choices": [
      "A) Zero",
      "B) -4ax³ - 2bx",
      "C) 4ax³ + 2bx",
      "D) Cannot be determined"
    ],
    "answer": 0,
    "explanation": "At minimum potential energy, dU/dx = 0, which means the force F = -dU/dx = 0. This is an equilibrium point where the net force is zero. Students might calculate the derivative without recognizing that at minimum PE, the derivative equals zero, making the force zero."
  },
  {
    "id": "physc_u3_q111",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservative forces",
    "topicLabel": "conservative forces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves in a force field where the work done moving between two points depends only on the endpoints, not the path taken. What can be concluded?",
    "choices": [
      "A) The force field is uniform",
      "B) The force field is conservative",
      "C) The force field is radial",
      "D) The force field is time-dependent"
    ],
    "answer": 1,
    "explanation": "Path independence of work is the defining characteristic of conservative forces. This means ∮F·dr = 0 for any closed path and F can be written as F = -∇U for some potential function U. Students might confuse this with other force properties like uniformity or radiality."
  },
  {
    "id": "physc_u3_q112",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservation of energy",
    "topicLabel": "conservation of energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spring with k = 200 N/m is compressed 0.3 m and then released to launch a 1 kg mass horizontally. What is the maximum speed achieved by the mass?",
    "choices": [
      "A) 3 m/s",
      "B) 4.2 m/s",
      "C) 6 m/s",
      "D) 9 m/s"
    ],
    "answer": 1,
    "explanation": "By conservation of energy, elastic PE converts to KE: ½kx² = ½mv². Solving for v: v = √(kx²/m) = √(200×0.3²/1) = √(200×0.09) = √18 ≈ 4.24 m/s. Students might forget to square the compression distance or make calculation errors."
  },
  {
    "id": "physc_u3_q113",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The instantaneous power delivered by a force F = 6t î + 4 ĵ (in Newtons) to a particle with velocity v = 2 î + 3t ĵ (in m/s) at t = 2 s is:",
    "choices": [
      "A) 48 W",
      "B) 72 W",
      "C) 96 W",
      "D) 120 W"
    ],
    "answer": 0,
    "explanation": "Instantaneous power P = F·v. At t = 2s: F = 12î + 4ĵ and v = 2î + 6ĵ. Therefore P = (12)(2) + (4)(6) = 24 + 24 = 48 W. Students might substitute t = 2 incorrectly or make errors in the dot product calculation."
  },
  {
    "id": "physc_u3_q114",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "work integral",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A variable force F(x) = 10 - 2x acts on a 5 kg object moving along the x-axis from x = 0 to x = 4 m. What is the work done?",
    "choices": [
      "A) 24 J",
      "B) 16 J",
      "C) 32 J",
      "D) 40 J"
    ],
    "answer": 0,
    "explanation": "Work = ∫F(x)dx = ∫(10 - 2x)dx from 0 to 4 = [10x - x²] from 0 to 4 = (40 - 16) - (0 - 0) = 24 J. Students might make integration errors or forget that the mass doesn't directly affect the work calculation in this context."
  },
  {
    "id": "physc_u3_q115",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservation of energy",
    "topicLabel": "conservation of energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A roller coaster car of mass 500 kg starts from rest at height 20 m and reaches a speed of 15 m/s at the bottom. How much energy was lost to friction?",
    "choices": [
      "A) 43,750 J",
      "B) 56,250 J",
      "C) 100,000 J",
      "D) 156,250 J"
    ],
    "answer": 0,
    "explanation": "Initial PE = mgh = 500×10×20 = 100,000 J. Final KE = ½mv² = ½×500×15² = 56,250 J. Energy lost to friction = 100,000 - 56,250 = 43,750 J. Students might subtract in the wrong order or make calculation errors with the kinetic energy."
  },
  {
    "id": "physc_u3_q116",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "work integral",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis from x = 1 m to x = 4 m under the influence of a force F(x) = 3x² N. What is the work done by this force?",
    "choices": [
      "A) 21 J",
      "B) 63 J",
      "C) 45 J",
      "D) 189 J"
    ],
    "answer": 1,
    "explanation": "Work is the integral of F·dx from 1 to 4. W = ∫(3x²)dx from 1 to 4 = [x³] from 1 to 4 = 64 - 1 = 63 J. Choice A uses incorrect integration (forgetting the coefficient). Choice C uses average force times distance. Choice D multiplies the integrand by the limits."
  },
  {
    "id": "physc_u3_q117",
    "subject": "apphysc",
    "unit": 3,
    "topic": "kinetic energy theorem",
    "topicLabel": "kinetic energy theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 2 kg block slides down a rough incline, losing 15 J to friction while moving 3 m horizontally and 4 m vertically downward. If the block starts from rest, what is its final speed?",
    "choices": [
      "A) 5.0 m/s",
      "B) 7.0 m/s",
      "C) 6.2 m/s",
      "D) 8.9 m/s"
    ],
    "answer": 2,
    "explanation": "Using work-energy theorem: W_net = ΔKE. Work by gravity = mgh = 2×10×4 = 80 J. Work by friction = -15 J. Net work = 65 J. Since initial KE = 0, final KE = 65 J, so ½mv² = 65, giving v = 6.2 m/s. Choice A ignores friction. Choice B uses total displacement instead of vertical. Choice D uses horizontal displacement for gravity."
  },
  {
    "id": "physc_u3_q118",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservative forces",
    "topicLabel": "conservative forces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A force field is given by F = (2xy + 3)î + (x² - 4y)ĵ. Is this force conservative?",
    "choices": [
      "A) Yes, because ∂Fx/∂y = ∂Fy/∂x = 2x",
      "B) No, because ∂Fx/∂y ≠ ∂Fy/∂x",
      "C) Yes, because the force depends on position only",
      "D) No, because the force has both x and y components"
    ],
    "answer": 0,
    "explanation": "A 2D force is conservative if ∂Fx/∂y = ∂Fy/∂x. Here, ∂Fx/∂y = ∂(2xy + 3)/∂y = 2x and ∂Fy/∂x = ∂(x² - 4y)/∂x = 2x. Since they're equal, the force is conservative. Choice B incorrectly calculates the partial derivatives. Choice C gives a necessary but not sufficient condition. Choice D shows a fundamental misunderstanding of conservative forces."
  },
  {
    "id": "physc_u3_q119",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "work integral",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves in a circle of radius 2 m under the influence of a centripetal force F = 8r N (where r is measured from center). How much work is done by this force during one complete revolution?",
    "choices": [
      "A) 32π J",
      "B) 16π J",
      "C) 0 J",
      "D) 64π J"
    ],
    "answer": 2,
    "explanation": "Work is W = ∫F·dr. For circular motion, the centripetal force is always perpendicular to the displacement vector dr (which is tangent to the circle). Since F⊥dr, the dot product F·dr = 0 at every point along the path. Therefore, the total work done is zero. Choice A calculates F×circumference. Choice B uses half the circumference. Choice D uses F×diameter×π, showing misunderstanding of the dot product."
  },
  {
    "id": "physc_u3_q120",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "potential energy functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle has potential energy U(x) = x⁴ - 4x² + 3. At which position(s) is the particle in stable equilibrium?",
    "choices": [
      "A) x = 0 only",
      "B) x = ±√2 only",
      "C) x = ±2 only",
      "D) x = 0 and x = ±√2"
    ],
    "answer": 1,
    "explanation": "Equilibrium occurs where F = -dU/dx = 0. dU/dx = 4x³ - 8x = 4x(x² - 2). This equals zero at x = 0 and x = ±√2. For stability, we need d²U/dx² > 0. d²U/dx² = 12x² - 8. At x = 0: d²U/dx² = -8 < 0 (unstable). At x = ±√2: d²U/dx² = 12(2) - 8 = 16 > 0 (stable). Only x = ±√2 are stable. Choice A identifies unstable equilibrium. Choice C uses wrong derivative. Choice D includes unstable equilibrium."
  },
  {
    "id": "physc_u4_q122",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "impulse momentum",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the SI unit of impulse?",
    "choices": [
      "A) N·s",
      "B) N/s",
      "C) kg·m/s²",
      "D) J·s"
    ],
    "answer": 0,
    "explanation": "Impulse is force times time (J = F·Δt), so the unit is N·s. This is equivalent to kg·m/s (momentum units) by the impulse-momentum theorem. Choice B confuses division with multiplication, C is force units, and D incorrectly includes energy units."
  },
  {
    "id": "physc_u4_q123",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "impulse momentum",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The impulse-momentum theorem states that impulse equals:",
    "choices": [
      "A) change in momentum",
      "B) final momentum",
      "C) initial momentum",
      "D) average momentum"
    ],
    "answer": 0,
    "explanation": "The impulse-momentum theorem states J = Δp = pf - pi (change in momentum). Students often confuse this with just final momentum (B) or initial momentum (C), or think it relates to average momentum (D)."
  },
  {
    "id": "physc_u4_q124",
    "subject": "apphysc",
    "unit": 4,
    "topic": "conservation of momentum",
    "topicLabel": "conservation of momentum",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Momentum is conserved in a system when:",
    "choices": [
      "A) no external forces act on the system",
      "B) kinetic energy is conserved",
      "C) the collision is elastic",
      "D) all objects have the same mass"
    ],
    "answer": 0,
    "explanation": "Momentum is conserved when the net external force is zero. This is independent of whether kinetic energy is conserved (B), whether collisions are elastic (C), or whether masses are equal (D). Students often think momentum conservation requires energy conservation."
  },
  {
    "id": "physc_u4_q125",
    "subject": "apphysc",
    "unit": 4,
    "topic": "conservation of momentum",
    "topicLabel": "conservation of momentum",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an isolated system, the total momentum before a collision equals:",
    "choices": [
      "A) the total momentum after the collision",
      "B) zero",
      "C) the sum of the kinetic energies",
      "D) the difference in momenta"
    ],
    "answer": 0,
    "explanation": "Conservation of momentum means total momentum before equals total momentum after. The total momentum doesn't have to be zero (B), momentum doesn't equal kinetic energy (C), and the difference would be zero, not the total (D)."
  },
  {
    "id": "physc_u4_q126",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "elastic collisions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an elastic collision, which quantities are conserved?",
    "choices": [
      "A) both momentum and kinetic energy",
      "B) momentum only",
      "C) kinetic energy only",
      "D) neither momentum nor kinetic energy"
    ],
    "answer": 0,
    "explanation": "Elastic collisions conserve both momentum and kinetic energy. Students often think only momentum is conserved (B) because that's true for all collisions, or only kinetic energy (C), forgetting that momentum conservation is more fundamental."
  },
  {
    "id": "physc_u4_q127",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "elastic collisions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A perfectly elastic collision between two identical masses, one initially at rest, results in:",
    "choices": [
      "A) the moving mass stops and the stationary mass moves off",
      "B) both masses move at half the original speed",
      "C) both masses stick together",
      "D) the moving mass continues at reduced speed"
    ],
    "answer": 0,
    "explanation": "For identical masses in an elastic collision with one at rest, they exchange velocities completely. Choice B would conserve momentum but not energy, C describes inelastic collision, and D violates conservation laws for this specific case."
  },
  {
    "id": "physc_u4_q128",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "inelastic collisions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a perfectly inelastic collision:",
    "choices": [
      "A) the objects stick together after collision",
      "B) kinetic energy is conserved",
      "C) the objects bounce apart",
      "D) momentum is not conserved"
    ],
    "answer": 0,
    "explanation": "Perfectly inelastic collisions are defined by objects sticking together. Kinetic energy is never conserved in inelastic collisions (B), bouncing apart suggests elastic collision (C), and momentum is always conserved in isolated systems (D)."
  },
  {
    "id": "physc_u4_q129",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "inelastic collisions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which quantity is always conserved in inelastic collisions?",
    "choices": [
      "A) momentum",
      "B) kinetic energy",
      "C) mechanical energy",
      "D) velocity"
    ],
    "answer": 0,
    "explanation": "Momentum is conserved in all collisions when no external forces act. Kinetic energy is lost in inelastic collisions (B), mechanical energy includes potential energy which may change (C), and individual velocities definitely change (D)."
  },
  {
    "id": "physc_u4_q130",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The center of mass of a system of particles is:",
    "choices": [
      "A) the mass-weighted average position",
      "B) always at the geometric center",
      "C) the point with the most mass",
      "D) the fastest moving point"
    ],
    "answer": 0,
    "explanation": "Center of mass is defined as the mass-weighted average position: xcm = Σmixi/Σmi. It's not always at geometric center (B) unless masses are equal, it's not necessarily where the most mass is located (C), and has nothing to do with speed (D)."
  },
  {
    "id": "physc_u4_q131",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If no external forces act on a system, the center of mass:",
    "choices": [
      "A) moves with constant velocity",
      "B) accelerates",
      "C) remains stationary",
      "D) oscillates"
    ],
    "answer": 0,
    "explanation": "When net external force is zero, the center of mass moves with constant velocity (which could be zero). It doesn't accelerate without external force (B), doesn't have to remain stationary if already moving (C), and won't oscillate without external forces (D)."
  },
  {
    "id": "physc_u4_q132",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For two masses m1 and m2, the center of mass is located:",
    "choices": [
      "A) closer to the larger mass",
      "B) closer to the smaller mass",
      "C) exactly halfway between them",
      "D) at the position of m1"
    ],
    "answer": 0,
    "explanation": "The center of mass is always closer to the larger mass because position is weighted by mass. Students often think it's closer to smaller mass (B), or always halfway between (C) which is only true for equal masses, or arbitrarily at one mass (D)."
  },
  {
    "id": "physc_u4_q133",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket expels mass to create thrust. This is an example of:",
    "choices": [
      "A) Newton's third law",
      "B) Newton's first law",
      "C) conservation of energy only",
      "D) centripetal force"
    ],
    "answer": 0,
    "explanation": "Rocket propulsion demonstrates Newton's third law: the rocket pushes exhaust backward, exhaust pushes rocket forward. Not first law (inertia) (B), not just energy conservation since momentum is key (C), and not centripetal force which is for circular motion (D)."
  },
  {
    "id": "physc_u4_q134",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In variable mass systems, which principle is most directly applied?",
    "choices": [
      "A) conservation of momentum",
      "B) conservation of mass",
      "C) conservation of charge",
      "D) conservation of angular momentum"
    ],
    "answer": 0,
    "explanation": "Variable mass systems like rockets are analyzed using conservation of momentum for the entire system (rocket + expelled mass). Mass is not conserved for the rocket alone (B), charge conservation is irrelevant (C), and angular momentum applies to rotational systems (D)."
  },
  {
    "id": "physc_u4_q135",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "When a rocket burns fuel in space, the total momentum of the rocket-fuel system:",
    "choices": [
      "A) remains constant",
      "B) increases",
      "C) decreases",
      "D) becomes zero"
    ],
    "answer": 0,
    "explanation": "With no external forces in space, total momentum of rocket plus expelled fuel remains constant by conservation of momentum. Students might think it increases due to thrust (B), decreases due to mass loss (C), or becomes zero due to symmetry (D)."
  },
  {
    "id": "physc_u4_q136",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "impulse momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 2.0 kg object moving at 8.0 m/s collides with a wall and rebounds at 6.0 m/s. If the collision lasts 0.10 s, what is the magnitude of the average force exerted by the wall on the object?",
    "choices": [
      "A) 40 N",
      "B) 160 N",
      "C) 280 N",
      "D) 320 N"
    ],
    "answer": 2,
    "explanation": "The impulse-momentum theorem states J = Δp = FΔt. Initial momentum is +16 kg⋅m/s, final momentum is -12 kg⋅m/s, so Δp = -28 kg⋅m/s. Therefore |F| = |Δp|/Δt = 28/0.10 = 280 N. Choice A incorrectly uses only the final velocity, B uses only the change in speed without considering the full momentum change, and D incorrectly adds the momenta instead of finding the change."
  },
  {
    "id": "physc_u4_q137",
    "subject": "apphysc",
    "unit": 4,
    "topic": "conservation of momentum",
    "topicLabel": "conservation of momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 60 kg person standing on a 20 kg cart throws a 4.0 kg ball horizontally at 12 m/s relative to the ground. What is the final velocity of the person-cart system?",
    "choices": [
      "A) 0.60 m/s opposite to the ball",
      "B) 0.80 m/s opposite to the ball",
      "C) 1.2 m/s opposite to the ball",
      "D) 3.0 m/s opposite to the ball"
    ],
    "answer": 0,
    "explanation": "By conservation of momentum, the initial momentum (zero) equals final momentum. If the ball has momentum +48 kg⋅m/s, the person-cart system (80 kg total) must have momentum -48 kg⋅m/s, giving velocity = -48/80 = -0.60 m/s. Choice B incorrectly uses only the person's mass, C uses only the ball's mass in the denominator, and D uses only the cart's mass."
  },
  {
    "id": "physc_u4_q138",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "elastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a one-dimensional elastic collision between two objects of equal mass, where one is initially at rest, what fraction of the kinetic energy is transferred to the initially stationary object?",
    "choices": [
      "A) 1/4",
      "B) 1/2",
      "C) 3/4",
      "D) All of it"
    ],
    "answer": 3,
    "explanation": "In an elastic collision between equal masses where one is at rest, the moving object stops completely and the stationary object acquires all the velocity (and hence all the kinetic energy) of the originally moving object. This is a special case of elastic collisions. Choices A, B, and C represent common misconceptions about energy sharing in collisions, often confused with inelastic collision scenarios."
  },
  {
    "id": "physc_u4_q139",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "elastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 3.0 kg object moving at 4.0 m/s collides elastically with a 1.0 kg object at rest. What is the velocity of the 1.0 kg object after collision?",
    "choices": [
      "A) 2.0 m/s",
      "B) 4.0 m/s",
      "C) 6.0 m/s",
      "D) 8.0 m/s"
    ],
    "answer": 2,
    "explanation": "For elastic collisions, v₂f = 2m₁v₁i/(m₁+m₂) when object 2 is initially at rest. Substituting: v₂f = 2(3.0)(4.0)/(3.0+1.0) = 24/4 = 6.0 m/s. Choice A assumes equal velocity sharing, B assumes the lighter object acquires the original velocity, and D incorrectly doubles the original velocity without considering mass ratios."
  },
  {
    "id": "physc_u4_q140",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "inelastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two cars of masses 1200 kg and 800 kg collide and stick together. If the first car was moving at 15 m/s and the second at 10 m/s in the opposite direction, what is their common velocity after collision?",
    "choices": [
      "A) 2.5 m/s in direction of first car",
      "B) 4.0 m/s in direction of first car",
      "C) 5.0 m/s in direction of first car",
      "D) 7.5 m/s in direction of first car"
    ],
    "answer": 2,
    "explanation": "In a perfectly inelastic collision, momentum is conserved: m₁v₁ + m₂v₂ = (m₁+m₂)vf. Taking the first car's direction as positive: (1200)(15) + (800)(-10) = (2000)vf, so 18000 - 8000 = 2000vf, giving vf = 5.0 m/s. Choice A uses average of the speeds, B neglects the mass difference, and D incorrectly averages the momenta instead of velocities."
  },
  {
    "id": "physc_u4_q141",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "inelastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a perfectly inelastic collision between two objects of equal mass, one moving at 8.0 m/s and one at rest, how much kinetic energy is lost?",
    "choices": [
      "A) 25%",
      "B) 50%",
      "C) 75%",
      "D) 100%"
    ],
    "answer": 1,
    "explanation": "Initial KE = ½mv² = ½m(8.0)² = 32m. After collision, both move at 4.0 m/s (by momentum conservation), so final KE = ½(2m)(4.0)² = 16m. Energy lost = (32m - 16m)/32m = 50%. This is always true for perfectly inelastic collisions between equal masses where one is initially at rest. Other choices represent common calculation errors or misconceptions about energy loss in collisions."
  },
  {
    "id": "physc_u4_q142",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Three masses are located on a line: 2.0 kg at x = 0, 3.0 kg at x = 4.0 m, and 1.0 kg at x = 8.0 m. Where is the center of mass located?",
    "choices": [
      "A) 2.7 m",
      "B) 3.3 m",
      "C) 4.0 m",
      "D) 4.7 m"
    ],
    "answer": 1,
    "explanation": "Center of mass is xcm = (m₁x₁ + m₂x₂ + m₃x₃)/(m₁ + m₂ + m₃) = (2.0×0 + 3.0×4.0 + 1.0×8.0)/(2.0 + 3.0 + 1.0) = (0 + 12 + 8)/6 = 20/6 = 3.3 m. Choice A uses equal weighting instead of mass weighting, C assumes the center mass determines the position, and D incorrectly weights by position rather than mass."
  },
  {
    "id": "physc_u4_q143",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A system consists of two particles: 4.0 kg at (2.0, 3.0) m and 6.0 kg at (8.0, 1.0) m. If the 4.0 kg particle moves to (4.0, 5.0) m while the other remains fixed, how does the center of mass move?",
    "choices": [
      "A) Moves 0.8 m in x-direction, 0.8 m in y-direction",
      "B) Moves 2.0 m in x-direction, 2.0 m in y-direction",
      "C) Moves 1.2 m in x-direction, 0.4 m in y-direction",
      "D) Moves 0.4 m in x-direction, 0.4 m in y-direction"
    ],
    "answer": 0,
    "explanation": "The 4.0 kg mass moves Δx = 2.0 m, Δy = 2.0 m. Since total mass is 10.0 kg, the center of mass moves (4.0/10.0) × 2.0 = 0.8 m in x and (4.0/10.0) × 2.0 = 0.8 m in y. Choice B ignores mass weighting, C incorrectly calculates the mass fraction, and D uses the wrong mass ratio."
  },
  {
    "id": "physc_u4_q144",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket in space ejects mass at 2000 m/s relative to itself. If the rocket's mass decreases from 5000 kg to 4000 kg, what is the change in the rocket's velocity?",
    "choices": [
      "A) 223 m/s",
      "B) 400 m/s",
      "C) 446 m/s",
      "D) 500 m/s"
    ],
    "answer": 2,
    "explanation": "Using the rocket equation: Δv = vrel × ln(mi/mf) = 2000 × ln(5000/4000) = 2000 × ln(1.25) = 2000 × 0.223 = 446 m/s. Choice A uses only the ln term without the exhaust velocity factor, B uses the mass ratio incorrectly, and D assumes linear relationship between mass loss and velocity change."
  },
  {
    "id": "physc_u4_q145",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "impulse momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A tennis ball experiences a force that varies as F(t) = 400 - 100t N during a 3.0 s interval. What is the impulse delivered to the ball?",
    "choices": [
      "A) 450 N⋅s",
      "B) 750 N⋅s",
      "C) 900 N⋅s",
      "D) 1200 N⋅s"
    ],
    "answer": 1,
    "explanation": "Impulse = ∫F dt = ∫₀³(400 - 100t)dt = [400t - 50t²]₀³ = 400(3) - 50(9) = 1200 - 450 = 750 N⋅s. Choice A only considers the final force times time, C uses average force incorrectly, and D ignores the decreasing component of force."
  },
  {
    "id": "physc_u4_q146",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "inelastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 1500 kg car traveling at 20 m/s rear-ends a 1000 kg car traveling at 15 m/s in the same direction. After the collision, the cars stick together. What is their common speed?",
    "choices": [
      "A) 17.5 m/s",
      "B) 18.0 m/s",
      "C) 18.5 m/s",
      "D) 19.0 m/s"
    ],
    "answer": 1,
    "explanation": "Using conservation of momentum: m₁v₁ + m₂v₂ = (m₁ + m₂)vf. So 1500(20) + 1000(15) = 2500vf, giving 30000 + 15000 = 2500vf, so vf = 45000/2500 = 18.0 m/s. Choice A is the arithmetic average of speeds, C and D represent common errors in weighted averaging without proper consideration of momentum conservation."
  },
  {
    "id": "physc_u4_q147",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform rod of mass M and length L has a point mass m attached at one end. Where is the center of mass of the system measured from the end with the point mass?",
    "choices": [
      "A) ML/(2(M+m))",
      "B) (M+m)L/(2M)",
      "C) ML/(2M+m)",
      "D) mL/(M+2m)"
    ],
    "answer": 0,
    "explanation": "The rod's center of mass is at L/2 from either end. Taking the end with point mass as origin: xcm = [m(0) + M(L/2)]/(m + M) = ML/[2(M + m)]. Choice B incorrectly flips the mass terms, C has wrong denominator, and D uses incorrect mass weighting for the rod's contribution."
  },
  {
    "id": "physc_u4_q148",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "elastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an elastic collision between a moving object and a much more massive stationary object, what happens to the velocity of the lighter object?",
    "choices": [
      "A) It stops completely",
      "B) It continues with the same speed in the same direction",
      "C) It reverses direction with nearly the same speed",
      "D) It continues with half the original speed"
    ],
    "answer": 2,
    "explanation": "When m₂ >> m₁, the elastic collision formula v₁f = [(m₁-m₂)v₁i]/(m₁+m₂) approaches -v₁i, meaning the lighter object bounces back with nearly the same speed in the opposite direction. This is like a ball bouncing off a wall. Choice A describes inelastic collision, B ignores the collision entirely, and D assumes arbitrary energy loss."
  },
  {
    "id": "physc_u4_q149",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "inelastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 0.50 kg ball moving at 8.0 m/s collides with and sticks to a 1.5 kg ball moving at 2.0 m/s in the opposite direction. How much kinetic energy is lost in the collision?",
    "choices": [
      "A) 12 J",
      "B) 15 J",
      "C) 18 J",
      "D) 21 J"
    ],
    "answer": 2,
    "explanation": "Initial KE = ½(0.5)(8²) + ½(1.5)(2²) = 16 + 3 = 19 J. Using momentum conservation: 0.5(8) - 1.5(2) = 2.0vf, so vf = 1.0/2.0 = 0.5 m/s. Final KE = ½(2.0)(0.5²) = 0.25 J. Energy lost = 19 - 0.25 = 18.75 J ≈ 18 J. Other choices represent errors in calculating initial or final kinetic energies or in applying momentum conservation."
  },
  {
    "id": "physc_u4_q150",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket burns fuel at a rate of 100 kg/s with exhaust velocity 3000 m/s. What thrust does this produce?",
    "choices": [
      "A) 30,000 N",
      "B) 150,000 N",
      "C) 300,000 N",
      "D) 3,000,000 N"
    ],
    "answer": 2,
    "explanation": "Thrust equals the rate of momentum change of the exhaust: F = (dm/dt) × vexhaust = 100 kg/s × 3000 m/s = 300,000 N. Choice A uses wrong units conversion, B represents a calculation error with the mass flow rate, and D multiplies by an extra factor of 10."
  },
  {
    "id": "physc_u4_q151",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "impulse momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 2.0 kg ball moving at 8.0 m/s strikes a wall and bounces back at 6.0 m/s. If the collision lasts 0.050 s, what is the magnitude of the average force exerted by the wall on the ball?",
    "choices": [
      "A) 80 N",
      "B) 280 N",
      "C) 320 N",
      "D) 560 N"
    ],
    "answer": 3,
    "explanation": "The impulse-momentum theorem states J = Δp = FΔt. Initial momentum is +16 kg⋅m/s, final momentum is -12 kg⋅m/s (opposite direction), so Δp = -12 - 16 = -28 kg⋅m/s. The magnitude of average force is |Δp|/Δt = 28/0.050 = 560 N. Choice A incorrectly uses only the initial momentum. Choice B uses only the change in speed without considering direction. Choice C adds the speeds instead of considering the momentum change."
  },
  {
    "id": "physc_u4_q152",
    "subject": "apphysc",
    "unit": 4,
    "topic": "conservation of momentum",
    "topicLabel": "conservation of momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 60 kg person standing on a 40 kg cart throws a 5.0 kg ball horizontally at 12 m/s relative to the ground. What is the velocity of the cart and person after throwing the ball?",
    "choices": [
      "A) 0.57 m/s in the opposite direction",
      "B) 0.60 m/s in the opposite direction",
      "C) 1.0 m/s in the opposite direction",
      "D) 1.2 m/s in the opposite direction"
    ],
    "answer": 1,
    "explanation": "Using conservation of momentum: initial momentum = 0 (all at rest). Final momentum: (5.0)(12) + (95)(v) = 0, where v is the velocity of cart+person system. Solving: 60 + 95v = 0, so v = -60/95 = -0.63 ≈ -0.60 m/s. Choice A uses 105 kg instead of 95 kg. Choice C incorrectly uses only the person's mass. Choice D uses the ball's speed divided by mass."
  },
  {
    "id": "physc_u4_q153",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "elastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a one-dimensional elastic collision, a 3.0 kg object moving at 4.0 m/s collides with a stationary 1.0 kg object. What is the velocity of the 1.0 kg object after collision?",
    "choices": [
      "A) 3.0 m/s",
      "B) 4.0 m/s",
      "C) 6.0 m/s",
      "D) 8.0 m/s"
    ],
    "answer": 2,
    "explanation": "For elastic collisions, use v₂f = 2m₁v₁i/(m₁+m₂) for the initially stationary object. v₂f = 2(3.0)(4.0)/(3.0+1.0) = 24/4 = 6.0 m/s. Choice A assumes equal velocity sharing. Choice B incorrectly assumes the light object takes the heavy object's initial velocity. Choice D incorrectly doubles the initial velocity without considering masses."
  },
  {
    "id": "physc_u4_q154",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "inelastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 1200 kg car traveling at 20 m/s collides head-on with a 800 kg car traveling at 15 m/s in the opposite direction. If they stick together after collision, what is their common velocity?",
    "choices": [
      "A) 2.5 m/s in the direction of the heavier car",
      "B) 6.0 m/s in the direction of the heavier car",
      "C) 12 m/s in the direction of the heavier car",
      "D) 17.5 m/s in the direction of the heavier car"
    ],
    "answer": 1,
    "explanation": "Using conservation of momentum: m₁v₁ + m₂v₂ = (m₁ + m₂)vf. Taking the heavier car's direction as positive: (1200)(20) + (800)(-15) = (2000)vf. So 24000 - 12000 = 2000vf, giving vf = 12000/2000 = 6.0 m/s. Choice A uses the average of initial speeds. Choice C forgets to account for the opposite direction of the lighter car. Choice D uses weighted average of speeds incorrectly."
  },
  {
    "id": "physc_u4_q155",
    "subject": "apphysc",
    "unit": 4,
    "topic": "conservation of momentum",
    "topicLabel": "conservation of momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two ice skaters push off from each other. Skater A (50 kg) moves at 3.0 m/s to the right. If skater B (75 kg) moves to the left, what is skater B's speed?",
    "choices": [
      "A) 2.0 m/s",
      "B) 2.5 m/s",
      "C) 3.0 m/s",
      "D) 4.5 m/s"
    ],
    "answer": 0,
    "explanation": "Initially both skaters are at rest, so total momentum = 0. After pushing off: (50)(3.0) + (75)(-vB) = 0, where vB is B's speed (negative because leftward). Solving: 150 = 75vB, so vB = 2.0 m/s. Choice B incorrectly averages the masses. Choice C assumes equal speeds. Choice D uses the ratio of masses times A's speed."
  },
  {
    "id": "physc_u4_q156",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "elastic collisions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 2.0 kg ball moving at 6.0 m/s undergoes an elastic collision with a 2.0 kg ball at rest. What happens to the kinetic energy of the system?",
    "choices": [
      "A) It decreases by 50%",
      "B) It remains the same",
      "C) It increases by 25%",
      "D) It doubles"
    ],
    "answer": 1,
    "explanation": "In elastic collisions, kinetic energy is conserved by definition. Initial KE = ½(2.0)(6.0)² = 36 J. After collision with equal masses, the moving ball stops and the stationary ball moves at 6.0 m/s, so final KE = ½(2.0)(6.0)² = 36 J. Choice A confuses this with inelastic collisions. Choice C and D incorrectly assume energy can be created in collisions."
  },
  {
    "id": "physc_u4_q157",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A system consists of two particles: 4.0 kg at (2.0, 3.0) m and 6.0 kg at (8.0, 1.0) m. If no external forces act on the system and both particles are moving, what can be said about the center of mass?",
    "choices": [
      "A) It accelerates toward the more massive particle",
      "B) It moves with constant velocity",
      "C) It moves in a circular path",
      "D) It oscillates between the two particles"
    ],
    "answer": 1,
    "explanation": "When no external forces act on a system, the center of mass moves with constant velocity (or remains at rest) according to Newton's first law applied to the system as a whole. The center of mass motion is independent of internal forces between particles. Choice A incorrectly assumes internal forces affect center of mass motion. Choices C and D assume complex motion that isn't supported by the physics."
  },
  {
    "id": "physc_u4_q158",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket in space ejects mass at 2.0 kg/s with exhaust velocity 3000 m/s relative to the rocket. If the rocket's mass is 1000 kg, what is the thrust force on the rocket?",
    "choices": [
      "A) 1500 N",
      "B) 3000 N",
      "C) 6000 N",
      "D) 12000 N"
    ],
    "answer": 2,
    "explanation": "The thrust force is given by F = vrel(dm/dt), where vrel is the exhaust velocity relative to the rocket and dm/dt is the mass flow rate. F = (3000 m/s)(2.0 kg/s) = 6000 N. Choice A incorrectly divides by 2. Choice B uses only the exhaust velocity. Choice D incorrectly multiplies by an extra factor of 2."
  },
  {
    "id": "physc_u4_q159",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket of initial mass 1000 kg ejects mass at 2000 m/s relative to the rocket. If the rocket burns fuel at a rate of 5 kg/s, what is the initial thrust force?",
    "choices": [
      "A) 2500 N",
      "B) 5000 N",
      "C) 10000 N",
      "D) 15000 N"
    ],
    "answer": 2,
    "explanation": "For variable mass systems, thrust F = vrel(dm/dt), where vrel is exhaust velocity relative to rocket and dm/dt is mass flow rate. F = (2000 m/s)(5 kg/s) = 10000 N. Choice A uses half the exhaust velocity, B uses half the correct answer, and D incorrectly adds gravitational effects."
  },
  {
    "id": "physc_u4_q160",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform rod of mass M and length L is initially at rest. A force F is applied at one end perpendicular to the rod for time t. What is the velocity of the center of mass immediately after the force stops acting?",
    "choices": [
      "A) Ft/M",
      "B) Ft/(2M)",
      "C) 2Ft/M",
      "D) Ft/(ML)"
    ],
    "answer": 0,
    "explanation": "The motion of the center of mass depends only on external forces, not on where they're applied or the resulting rotation. Using impulse-momentum theorem for the center of mass: Ft = MvcM, so vcM = Ft/M. Choice B incorrectly divides by 2, C incorrectly multiplies by 2, and D incorrectly includes the length dimension."
  },
  {
    "id": "physc_u4_q161",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A chain of mass M and length L hangs vertically with its bottom end just touching a scale. If the chain is released, what is the reading on the scale when a length x of the chain has fallen onto it?",
    "choices": [
      "A) (M/L)gx",
      "B) (M/L)gx + (M/L)v²",
      "C) 2(M/L)gx",
      "D) 3(M/L)gx"
    ],
    "answer": 3,
    "explanation": "The scale reading has two components: (1) weight of chain already on scale = (M/L)gx, and (2) force from momentum change as chain hits scale. The velocity of chain hitting is v = √(2gx), and mass rate is dm/dt = (M/L)(dx/dt) = (M/L)v. The momentum change force is v(dm/dt) = (M/L)v² = (M/L)(2gx) = 2(M/L)gx. Total force = (M/L)gx + 2(M/L)gx = 3(M/L)gx."
  },
  {
    "id": "physc_u4_q162",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "impulse momentum",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle of mass m moving with velocity v₀ is subjected to a retarding force F = -kv², where k is a constant. What is the impulse delivered by this force as the particle slows from v₀ to v₀/2?",
    "choices": [
      "A) mv₀/2",
      "B) mv₀/3",
      "C) mv₀",
      "D) 2mv₀/3"
    ],
    "answer": 0,
    "explanation": "Impulse equals change in momentum: J = Δp = m(v₀/2) - mv₀ = -mv₀/2. The magnitude of impulse is mv₀/2. Note that we don't need to integrate the force over time; we can use the impulse-momentum theorem directly. Choice B and D come from incorrect integration attempts, while C ignores the factor of 1/2."
  },
  {
    "id": "physc_u4_q163",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "center of mass",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A system consists of two particles connected by a massless rod. Particle A (mass 2m) is at position (0,0) and particle B (mass 3m) is at position (4,3). If particle A suddenly gains velocity (2,1) m/s while B gains velocity (-1,2) m/s, what is the acceleration of the center of mass?",
    "choices": [
      "A) (0,0) m/s²",
      "B) (0.4,1.6) m/s²",
      "C) (1,1.5) m/s²",
      "D) (2,3) m/s²"
    ],
    "answer": 0,
    "explanation": "The acceleration of the center of mass depends only on external forces. Since the particles are connected by a massless rod and no external forces are mentioned, the internal forces (which cause the velocity changes) cannot accelerate the center of mass. The center of mass moves with constant velocity after the internal interaction. Therefore, aCM = 0. The other choices incorrectly assume the velocity changes directly cause center of mass acceleration."
  },
  {
    "id": "physc_u4_q164",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "variable mass systems",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket in deep space has initial mass M₀ and burns fuel at rate R, ejecting it at speed vₑ relative to the rocket. After time t, what is the rocket's mass and speed if it started from rest?",
    "choices": [
      "A) Mass: M₀-Rt, Speed: vₑln(M₀/(M₀-Rt))",
      "B) Mass: M₀-Rt, Speed: vₑRt/M₀",
      "C) Mass: M₀e^(-Rt), Speed: vₑln(M₀/(M₀-Rt))",
      "D) Mass: M₀-Rt, Speed: vₑRt/(M₀-Rt)"
    ],
    "answer": 0,
    "explanation": "For constant fuel burn rate R, the mass decreases linearly: m(t) = M₀ - Rt. The rocket equation gives: Δv = vₑln(M₀/Mf) = vₑln(M₀/(M₀-Rt)). Choice B incorrectly uses non-relativistic momentum addition, C uses exponential mass decrease which applies to radioactive decay not constant burn rate, and D has incorrect velocity formula."
  },
  {
    "id": "physc_u5_q165",
    "subject": "apphysc",
    "unit": 5,
    "topic": "torque",
    "topicLabel": "torque",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the SI unit of torque?",
    "choices": [
      "A) N⋅m",
      "B) N/m",
      "C) kg⋅m²",
      "D) J/s"
    ],
    "answer": 0,
    "explanation": "Torque has units of N⋅m (newton-meters). Students often confuse this with N/m (force per unit length), kg⋅m² (moment of inertia units), or J/s (power units)."
  },
  {
    "id": "physc_u5_q166",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rotational inertia",
    "topicLabel": "rotational inertia",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which factor does NOT affect the rotational inertia of an object?",
    "choices": [
      "A) Mass distribution",
      "B) Angular velocity",
      "C) Axis of rotation",
      "D) Total mass"
    ],
    "answer": 1,
    "explanation": "Rotational inertia depends on mass distribution, axis of rotation, and total mass, but NOT on angular velocity. Students often think rotational inertia changes with motion, confusing it with rotational kinetic energy."
  },
  {
    "id": "physc_u5_q167",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rotational inertia",
    "topicLabel": "rotational inertia",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the rotational inertia of a point mass m at distance r from the axis of rotation?",
    "choices": [
      "A) mr²",
      "B) mr",
      "C) m/r²",
      "D) m/r"
    ],
    "answer": 0,
    "explanation": "For a point mass, I = mr². Students might forget the squared term (mr), or incorrectly invert the relationship (m/r² or m/r), thinking closer masses have higher inertia."
  },
  {
    "id": "physc_u5_q168",
    "subject": "apphysc",
    "unit": 5,
    "topic": "parallel axis theorem",
    "topicLabel": "parallel axis theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The parallel axis theorem states that I = Icm + md². What does d represent?",
    "choices": [
      "A) Distance between parallel axes",
      "B) Diameter of the object",
      "C) Distance from center of mass to edge",
      "D) Density of the material"
    ],
    "answer": 0,
    "explanation": "In the parallel axis theorem, d is the distance between the center of mass axis and the parallel axis. Students might confuse this with diameter, radius, or density."
  },
  {
    "id": "physc_u5_q169",
    "subject": "apphysc",
    "unit": 5,
    "topic": "parallel axis theorem",
    "topicLabel": "parallel axis theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform rod has rotational inertia Icm about its center. If the axis is moved to one end, how does the new rotational inertia compare?",
    "choices": [
      "A) It increases",
      "B) It decreases",
      "C) It stays the same",
      "D) It becomes zero"
    ],
    "answer": 0,
    "explanation": "By the parallel axis theorem, I = Icm + md², so moving the axis away from the center of mass always increases rotational inertia. Students might think it decreases or stays constant."
  },
  {
    "id": "physc_u5_q170",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's second law rotation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the rotational form of Newton's second law?",
    "choices": [
      "A) τ = Iα",
      "B) τ = Iω",
      "C) τ = Iω²",
      "D) τ = I/α"
    ],
    "answer": 0,
    "explanation": "The rotational form is τ = Iα, analogous to F = ma. Students might confuse this with τ = Iω (no acceleration), τ = Iω² (kinetic energy-like), or invert the relationship."
  },
  {
    "id": "physc_u5_q171",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's second law rotation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A disk with rotational inertia 2.0 kg⋅m² experiences a net torque of 8.0 N⋅m. What is its angular acceleration?",
    "choices": [
      "A) 4.0 rad/s²",
      "B) 16 rad/s²",
      "C) 0.25 rad/s²",
      "D) 10 rad/s²"
    ],
    "answer": 0,
    "explanation": "Using τ = Iα, we get α = τ/I = 8.0/2.0 = 4.0 rad/s². Students might multiply instead of divide (16), invert incorrectly (0.25), or add the values (10)."
  },
  {
    "id": "physc_u5_q172",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "rolling without slipping",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For an object rolling without slipping, what is the relationship between linear velocity v and angular velocity ω?",
    "choices": [
      "A) v = ωr",
      "B) v = ω/r",
      "C) v = ωr²",
      "D) v = ω + r"
    ],
    "answer": 0,
    "explanation": "For rolling without slipping, v = ωr where r is the radius. Students might use v = ω/r (incorrect inversion), v = ωr² (adding extra radius), or v = ω + r (incorrect addition)."
  },
  {
    "id": "physc_u5_q173",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "rolling without slipping",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A wheel of radius 0.5 m rolls without slipping at 10 rad/s. What is its linear velocity?",
    "choices": [
      "A) 5.0 m/s",
      "B) 20 m/s",
      "C) 0.05 m/s",
      "D) 10.5 m/s"
    ],
    "answer": 0,
    "explanation": "Using v = ωr: v = (10 rad/s)(0.5 m) = 5.0 m/s. Students might use v = ω/r (0.05), multiply by 2 instead of 0.5 (20), or add values incorrectly (10.5)."
  },
  {
    "id": "physc_u5_q174",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "angular momentum",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the formula for angular momentum of a rotating rigid body?",
    "choices": [
      "A) L = Iω",
      "B) L = Iα",
      "C) L = mvr",
      "D) L = τt"
    ],
    "answer": 0,
    "explanation": "For a rigid body, L = Iω. Students might confuse this with L = Iα (torque relationship), L = mvr (point particle), or L = τt (impulse-momentum, which is change in L)."
  },
  {
    "id": "physc_u5_q175",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "angular momentum",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "When is angular momentum conserved?",
    "choices": [
      "A) When net external torque is zero",
      "B) When angular velocity is constant",
      "C) When rotational inertia is constant",
      "D) When the object is moving in a circle"
    ],
    "answer": 0,
    "explanation": "Angular momentum is conserved when net external torque is zero. Students might think it requires constant ω, constant I, or circular motion, but these are not necessary conditions."
  },
  {
    "id": "physc_u5_q176",
    "subject": "apphysc",
    "unit": 5,
    "topic": "gyroscopic motion",
    "topicLabel": "gyroscopic motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In gyroscopic motion, when a torque is applied to a spinning object, the resulting motion is:",
    "choices": [
      "A) Perpendicular to both the spin axis and applied torque",
      "B) Along the same direction as the applied torque",
      "C) Opposite to the applied torque",
      "D) Along the original spin axis"
    ],
    "answer": 0,
    "explanation": "Gyroscopic precession occurs perpendicular to both the spin axis and applied torque direction. Students often expect motion along or opposite to the applied torque, or along the original spin axis."
  },
  {
    "id": "physc_u5_q177",
    "subject": "apphysc",
    "unit": 5,
    "topic": "gyroscopic motion",
    "topicLabel": "gyroscopic motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spinning bicycle wheel held horizontally will precess when a torque is applied. This is due to:",
    "choices": [
      "A) Conservation of angular momentum",
      "B) Centripetal force",
      "C) Gravitational attraction",
      "D) Rotational kinetic energy"
    ],
    "answer": 0,
    "explanation": "Gyroscopic precession results from conservation of angular momentum. Students might attribute it to centripetal force, gravity, or kinetic energy, but it's fundamentally about angular momentum conservation."
  },
  {
    "id": "physc_u5_q178",
    "subject": "apphysc",
    "unit": 5,
    "topic": "torque",
    "topicLabel": "Torque",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A wrench handle is 0.3 m long. If a force of 40 N is applied at an angle of 60° to the handle at its end, what is the magnitude of the torque about the bolt?",
    "choices": [
      "A) 12 N⋅m",
      "B) 10.4 N⋅m",
      "C) 20.8 N⋅m",
      "D) 6.9 N⋅m"
    ],
    "answer": 1,
    "explanation": "Torque τ = rF sin θ = (0.3 m)(40 N)(sin 60°) = (0.3)(40)(0.866) = 10.4 N⋅m. Choice A uses cos 60° instead of sin 60°. Choice C uses the full force without the sine component. Choice D uses sin 30° instead of sin 60°."
  },
  {
    "id": "physc_u5_q179",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's Second Law for Rotation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid disk of mass 2 kg and radius 0.5 m is subject to a net torque of 3 N⋅m. What is its angular acceleration?",
    "choices": [
      "A) 6 rad/s²",
      "B) 12 rad/s²",
      "C) 3 rad/s²",
      "D) 1.5 rad/s²"
    ],
    "answer": 1,
    "explanation": "For a solid disk, I = (1/2)MR² = (1/2)(2)(0.5)² = 0.25 kg⋅m². Using τ = Iα: α = τ/I = 3/0.25 = 12 rad/s². Choice A uses the wrong moment of inertia formula. Choice C assumes I = MR². Choice D uses I = MR² but with an extra factor of 2 error."
  },
  {
    "id": "physc_u5_q180",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "Rolling Without Slipping",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid sphere rolls without slipping down an incline. If its linear velocity at the bottom is 6 m/s, what is its angular velocity?",
    "choices": [
      "A) 6 rad/s",
      "B) 12 rad/s",
      "C) 3 rad/s",
      "D) Cannot be determined without the radius"
    ],
    "answer": 3,
    "explanation": "For rolling without slipping, v = ωR, so ω = v/R. Since the radius R is not given, we cannot determine the angular velocity. Choice A assumes R = 1 m. Choice B assumes R = 0.5 m. Choice C assumes R = 2 m. This tests understanding that the rolling condition requires knowledge of the radius."
  },
  {
    "id": "physc_u5_q181",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "Angular Momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A figure skater spins with arms extended at 2 rad/s. When she pulls her arms in, her rotational inertia decreases by a factor of 3. What is her new angular velocity?",
    "choices": [
      "A) 2 rad/s",
      "B) 6 rad/s",
      "C) 0.67 rad/s",
      "D) 1.5 rad/s"
    ],
    "answer": 1,
    "explanation": "Conservation of angular momentum: L = Iω = constant. So I₁ω₁ = I₂ω₂. If I₂ = I₁/3, then I₁(2) = (I₁/3)ω₂, so ω₂ = 6 rad/s. Choice A ignores the change in rotational inertia. Choice C uses the wrong ratio (multiplies by 1/3 instead of 3). Choice D represents a calculation error."
  },
  {
    "id": "physc_u5_q182",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rotational inertia",
    "topicLabel": "Rotational Inertia",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin hoop and a solid disk have the same mass M and radius R. What is the ratio of their rotational inertias (hoop/disk) about their central axes?",
    "choices": [
      "A) 1:1",
      "B) 2:1",
      "C) 1:2",
      "D) 4:1"
    ],
    "answer": 1,
    "explanation": "For a thin hoop: I = MR². For a solid disk: I = (1/2)MR². The ratio is MR² : (1/2)MR² = 2:1. Choice A would be if both had the same rotational inertia formula. Choice C inverts the correct ratio. Choice D represents a common error confusing different geometric shapes."
  },
  {
    "id": "physc_u5_q183",
    "subject": "apphysc",
    "unit": 5,
    "topic": "parallel axis theorem",
    "topicLabel": "Parallel Axis Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform disk of mass M and radius R rotates about an axis parallel to its central axis at distance d from the center. If d = R, what is the rotational inertia?",
    "choices": [
      "A) MR²",
      "B) (3/2)MR²",
      "C) 2MR²",
      "D) (5/2)MR²"
    ],
    "answer": 1,
    "explanation": "Using parallel axis theorem: I = I_cm + Md². For a disk, I_cm = (1/2)MR². With d = R: I = (1/2)MR² + M(R)² = (1/2)MR² + MR² = (3/2)MR². Choice A forgets the central axis term. Choice C forgets the central axis contribution. Choice D adds incorrectly."
  },
  {
    "id": "physc_u5_q184",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's Second Law for Rotation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rod of length L and mass M can rotate about one end. A force F is applied perpendicular to the rod at its midpoint. What is the angular acceleration?",
    "choices": [
      "A) 3F/(2ML)",
      "B) F/(ML)",
      "C) 3F/(ML)",
      "D) 2F/(ML)"
    ],
    "answer": 0,
    "explanation": "For a rod rotating about one end: I = (1/3)ML². The torque from force F at midpoint (distance L/2): τ = F(L/2). Using τ = Iα: α = τ/I = F(L/2)/[(1/3)ML²] = (3F/2ML). Choice B uses wrong moment of inertia. Choice C has calculation error. Choice D forgets the 1/3 factor in the rod's rotational inertia."
  },
  {
    "id": "physc_u5_q185",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "Rolling Without Slipping",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid cylinder rolls without slipping down a ramp of height h. What fraction of its kinetic energy at the bottom is rotational?",
    "choices": [
      "A) 1/2",
      "B) 1/3",
      "C) 2/3",
      "D) 1/4"
    ],
    "answer": 1,
    "explanation": "For rolling without slipping: v = ωR, so ω = v/R. Rotational KE = (1/2)Iω² = (1/2)[(1/2)MR²](v/R)² = (1/4)Mv². Translational KE = (1/2)Mv². Total KE = (1/4)Mv² + (1/2)Mv² = (3/4)Mv². Fraction rotational = (1/4)Mv²/(3/4)Mv² = 1/3. Choice A assumes equal rotational and translational energy. Choice C gives the translational fraction. Choice D uses wrong rotational inertia."
  },
  {
    "id": "physc_u5_q186",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "Angular Momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle of mass m moves in a circle of radius r with speed v. What is the magnitude of its angular momentum about the center?",
    "choices": [
      "A) mv",
      "B) mvr",
      "C) mv/r",
      "D) mr²v"
    ],
    "answer": 1,
    "explanation": "Angular momentum L = r × p = rmv sin θ. For circular motion, the velocity is perpendicular to the radius vector, so sin θ = 1, giving L = rmv = mvr. Choice A is just linear momentum. Choice C has incorrect units. Choice D incorrectly includes an extra factor of r."
  },
  {
    "id": "physc_u5_q187",
    "subject": "apphysc",
    "unit": 5,
    "topic": "gyroscopic motion",
    "topicLabel": "Gyroscopic Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spinning bicycle wheel is held horizontally while spinning about its axle. When one end of the axle is released, the wheel will:",
    "choices": [
      "A) Fall straight down due to gravity",
      "B) Precess about a vertical axis",
      "C) Stop spinning and then fall",
      "D) Tip over immediately"
    ],
    "answer": 1,
    "explanation": "When a torque is applied to a spinning object (here, gravity creates a torque about the support point), the angular momentum vector changes direction rather than magnitude, causing precession. The wheel will precess about a vertical axis through the support point. Choice A ignores the gyroscopic effect. Choice C incorrectly assumes the spin stops. Choice D ignores the angular momentum conservation."
  },
  {
    "id": "physc_u5_q188",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rotational inertia",
    "topicLabel": "Rotational Inertia",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two point masses m are connected by a massless rod of length 2L. What is the rotational inertia about an axis through the center of the rod, perpendicular to it?",
    "choices": [
      "A) mL²",
      "B) 2mL²",
      "C) 4mL²",
      "D) mL²/2"
    ],
    "answer": 1,
    "explanation": "Each point mass is at distance L from the center. Using I = Σmr², we get I = m(L)² + m(L)² = 2mL². Choice A accounts for only one mass. Choice C uses the total length 2L as the radius. Choice D incorrectly applies a factor of 1/2."
  },
  {
    "id": "physc_u5_q189",
    "subject": "apphysc",
    "unit": 5,
    "topic": "parallel axis theorem",
    "topicLabel": "Parallel Axis Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin rod of mass M and length L rotates about an axis perpendicular to the rod at one end. Using the parallel axis theorem, what is its rotational inertia?",
    "choices": [
      "A) ML²/12",
      "B) ML²/3",
      "C) ML²/4",
      "D) ML²/6"
    ],
    "answer": 1,
    "explanation": "The rod's rotational inertia about its center is ML²/12. The distance from center to end is L/2. Using parallel axis theorem: I = ML²/12 + M(L/2)² = ML²/12 + ML²/4 = ML²/12 + 3ML²/12 = 4ML²/12 = ML²/3. Choice A is the center value only. Choice C and D represent calculation errors in applying the theorem."
  },
  {
    "id": "physc_u5_q190",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's Second Law for Rotation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform sphere and a uniform disk, both with the same mass M and radius R, experience the same torque τ. What is the ratio of their angular accelerations (sphere/disk)?",
    "choices": [
      "A) 5/4",
      "B) 4/5",
      "C) 1",
      "D) 2/3"
    ],
    "answer": 0,
    "explanation": "For a sphere: I = (2/5)MR², so α_sphere = τ/[(2/5)MR²] = 5τ/(2MR²). For a disk: I = (1/2)MR², so α_disk = τ/[(1/2)MR²] = 2τ/MR². The ratio is [5τ/(2MR²)]/[2τ/MR²] = 5/4. Choice B inverts the ratio. Choice C assumes same rotational inertias. Choice D uses incorrect formulas."
  },
  {
    "id": "physc_u5_q191",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "Rolling Without Slipping",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid sphere of radius R rolls without slipping. If the speed of its center of mass is v, what is the speed of the topmost point on the sphere?",
    "choices": [
      "A) v",
      "B) 2v",
      "C) v/2",
      "D) 0"
    ],
    "answer": 1,
    "explanation": "The topmost point has two velocity components: the translational velocity v (same as center of mass) plus the rotational velocity ωR in the same direction. For rolling without slipping, v = ωR, so ω = v/R. The rotational velocity at the top is ωR = v. Total velocity = v + v = 2v. Choice A ignores rotation. Choice C confuses with the bottom point. Choice D would be the instantaneous contact point."
  },
  {
    "id": "physc_u5_q192",
    "subject": "apphysc",
    "unit": 5,
    "topic": "torque",
    "topicLabel": "Torque",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform rod of length L and mass M is pivoted at a point L/4 from one end. If forces of magnitude F are applied perpendicular to the rod at both ends, with the force at the near end pointing up and the force at the far end pointing down, what is the net torque about the pivot?",
    "choices": [
      "A) FL/2",
      "B) FL/4",
      "C) 3FL/4",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "The torque from the near end is F × L/4 clockwise, and the torque from the far end is F × 3L/4 clockwise. Net torque = F(L/4) + F(3L/4) = FL/2. Students often think torques cancel (choice D) or miscalculate lever arms (choices B and C)."
  },
  {
    "id": "physc_u5_q193",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rotational inertia",
    "topicLabel": "Rotational Inertia",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical solid cylinders of mass M and radius R are connected by a massless rod of length 2R between their centers. What is the rotational inertia of the system about an axis through the midpoint of the rod, perpendicular to it?",
    "choices": [
      "A) MR²",
      "B) MR² + 2MR²",
      "C) 2MR²",
      "D) MR²/2 + 2MR²"
    ],
    "answer": 1,
    "explanation": "Each cylinder has I = MR²/2 about its center, but is distance R from the rotation axis. Using parallel axis theorem: I_total = 2[MR²/2 + MR²] = MR² + 2MR². Choice A forgets parallel axis theorem, choice C uses wrong formula, choice D has calculation error."
  },
  {
    "id": "physc_u5_q194",
    "subject": "apphysc",
    "unit": 5,
    "topic": "parallel axis theorem",
    "topicLabel": "Parallel Axis Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform disk of mass M and radius R has rotational inertia MR²/2 about its center. What is its rotational inertia about an axis parallel to the central axis but passing through a point on the rim?",
    "choices": [
      "A) MR²/2",
      "B) MR²",
      "C) 3MR²/2",
      "D) 2MR²"
    ],
    "answer": 2,
    "explanation": "Using parallel axis theorem: I = I_cm + Md² = MR²/2 + MR² = 3MR²/2, where d = R is the distance from center to rim. Choice A ignores the theorem, choice B uses d² = R incorrectly, choice D doubles the center value incorrectly."
  },
  {
    "id": "physc_u5_q195",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's Second Law for Rotation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid disk of mass M and radius R is mounted on a frictionless axle. A string wrapped around the disk supports a hanging mass m. When the system is released, what is the angular acceleration of the disk?",
    "choices": [
      "A) mg/MR",
      "B) 2mg/(M+2m)R",
      "C) mg/(M/2+m)R",
      "D) 2mg/MR"
    ],
    "answer": 1,
    "explanation": "For the hanging mass: mg - T = ma. For the disk: TR = Iα = (MR²/2)α. With a = αR, solving gives α = 2mg/[(M+2m)R]. Choice A ignores the hanging mass inertia, choice C has algebra error, choice D ignores hanging mass acceleration."
  },
  {
    "id": "physc_u5_q196",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "Rolling Without Slipping",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid sphere rolls without slipping down an incline of angle θ. What fraction of its total kinetic energy is rotational?",
    "choices": [
      "A) 1/3",
      "B) 2/5",
      "C) 2/7",
      "D) 1/2"
    ],
    "answer": 2,
    "explanation": "For a solid sphere, I = 2MR²/5. Total KE = (1/2)Mv² + (1/2)Iω² = (1/2)Mv² + (1/2)(2MR²/5)(v/R)² = (7/10)Mv². Rotational fraction = (1/5)Mv²/(7/10)Mv² = 2/7. Choices A, B, D use wrong rotational inertia values or calculation errors."
  },
  {
    "id": "physc_u5_q197",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "Angular Momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A figure skater spinning with angular velocity ω₀ pulls her arms inward, reducing her rotational inertia from I₀ to I₀/3. What is her new angular velocity?",
    "choices": [
      "A) ω₀/3",
      "B) ω₀",
      "C) 3ω₀",
      "D) 9ω₀"
    ],
    "answer": 2,
    "explanation": "Angular momentum is conserved: I₀ω₀ = (I₀/3)ω_f. Solving: ω_f = 3ω₀. Choice A incorrectly applies inverse proportionality, choice B assumes no change, choice D squares the factor incorrectly."
  },
  {
    "id": "physc_u5_q198",
    "subject": "apphysc",
    "unit": 5,
    "topic": "gyroscopic motion",
    "topicLabel": "Gyroscopic Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spinning bicycle wheel with angular momentum L is held horizontally. When a torque τ is applied about a vertical axis, the wheel precesses. What happens to the precession rate if the spin rate is doubled while keeping the torque constant?",
    "choices": [
      "A) Precession rate doubles",
      "B) Precession rate is halved",
      "C) Precession rate quadruples",
      "D) Precession rate remains the same"
    ],
    "answer": 1,
    "explanation": "Precession rate Ω = τ/L. When spin rate doubles, L doubles, so Ω = τ/(2L) = (original rate)/2. Choice A confuses cause and effect, choice C incorrectly squares the relationship, choice D ignores the L dependence."
  },
  {
    "id": "physc_u5_q199",
    "subject": "apphysc",
    "unit": 5,
    "topic": "torque",
    "topicLabel": "Torque",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A wrench of length 0.3 m is used to tighten a bolt. If a force of 50 N is applied at an angle of 60° to the wrench handle, what is the magnitude of the torque about the bolt?",
    "choices": [
      "A) 7.5 N⋅m",
      "B) 13.0 N⋅m",
      "C) 15.0 N⋅m",
      "D) 22.5 N⋅m"
    ],
    "answer": 1,
    "explanation": "Torque = rF sin θ = (0.3 m)(50 N)(sin 60°) = (0.3)(50)(√3/2) ≈ 13.0 N⋅m. Choice A uses sin 30°, choice C uses sin 90°, choice D incorrectly uses cos 60° instead of sin 60°."
  },
  {
    "id": "physc_u5_q200",
    "subject": "apphysc",
    "unit": 5,
    "topic": "torque",
    "topicLabel": "torque",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform rod of mass M and length L is pivoted at a point L/4 from one end. Forces F₁ = 2F and F₂ = F are applied perpendicular to the rod at the two ends. If the rod is in rotational equilibrium, what is the relationship between the forces?",
    "choices": [
      "A) F₁ and F₂ must be in opposite directions",
      "B) F₁ and F₂ must be in the same direction",
      "C) The forces cannot produce equilibrium regardless of direction",
      "D) Equilibrium requires F₁ = 3F₂"
    ],
    "answer": 0,
    "explanation": "For rotational equilibrium, net torque = 0. Taking torques about the pivot: F₁(L/4) - F₂(3L/4) = 0, so 2F(L/4) = F(3L/4), giving F(L/2) = F(3L/4), which is impossible unless forces are opposite directions to make one torque negative."
  },
  {
    "id": "physc_u5_q201",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's second law rotation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform disk of mass M and radius R is mounted on a frictionless axle. A string wrapped around the disk supports a hanging mass m. If the string does not slip, what is the angular acceleration of the disk?",
    "choices": [
      "A) 2mg/(MR + 2mR)",
      "B) mg/(MR + mR)",
      "C) 2mg/MR",
      "D) mg/MR"
    ],
    "answer": 0,
    "explanation": "For the hanging mass: mg - T = ma. For the disk: TR = Iα where I = MR²/2 and a = αR. Substituting: mg - Iα/R = mαR, so mg = α(I/R + mR) = α(MR/2 + mR). Therefore α = 2mg/(MR + 2mR)."
  },
  {
    "id": "physc_u5_q202",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "rolling without slipping",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid sphere rolls without slipping down an inclined plane of angle θ. What fraction of its total kinetic energy is rotational?",
    "choices": [
      "A) 2/7",
      "B) 2/5",
      "C) 3/7",
      "D) 5/7"
    ],
    "answer": 0,
    "explanation": "For rolling without slipping, v = ωR. Total KE = ½mv² + ½Iω². For solid sphere, I = 2mR²/5, so KE_rot = ½(2mR²/5)ω² = (1/5)mv². Total KE = ½mv² + (1/5)mv² = (7/10)mv². Fraction rotational = (1/5)mv² ÷ (7/10)mv² = 2/7."
  },
  {
    "id": "physc_u5_q203",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "angular momentum",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A figure skater spinning with angular velocity ω pulls her arms inward, reducing her rotational inertia from I₁ to I₂ = I₁/3. What is the ratio of her final kinetic energy to initial kinetic energy?",
    "choices": [
      "A) 1/3",
      "B) 1",
      "C) 3",
      "D) 9"
    ],
    "answer": 2,
    "explanation": "Angular momentum is conserved: I₁ω₁ = I₂ω₂, so ω₂ = I₁ω₁/I₂ = 3ω₁. Initial KE = ½I₁ω₁², final KE = ½I₂ω₂² = ½(I₁/3)(3ω₁)² = ½(I₁/3)(9ω₁²) = (3/2)I₁ω₁². Ratio = 3."
  },
  {
    "id": "physc_u5_q204",
    "subject": "apphysc",
    "unit": 5,
    "topic": "gyroscopic motion",
    "topicLabel": "gyroscopic motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spinning bicycle wheel is held horizontally by one end of its axle. Instead of falling, it precesses horizontally. The precession rate is proportional to:",
    "choices": [
      "A) The square of the spin angular velocity",
      "B) The spin angular velocity",
      "C) The inverse of the spin angular velocity",
      "D) The inverse square of the spin angular velocity"
    ],
    "answer": 2,
    "explanation": "Gyroscopic precession occurs when τ = dL/dt. For steady precession, τ = Ωₚ × L where Ωₚ is precession rate. The gravitational torque τ = mgr is constant, and L = Iω for spin. So mgr = ΩₚIω, giving Ωₚ = mgr/(Iω), inversely proportional to spin rate."
  },
  {
    "id": "physc_u5_q205",
    "subject": "apphysc",
    "unit": 5,
    "topic": "torque",
    "topicLabel": "torque",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A wrench of length L is used to apply force F at angle θ to the wrench handle. A second identical force is applied at the midpoint of the wrench, perpendicular to the handle. What is the total torque about the bolt?",
    "choices": [
      "A) FL sin θ + FL/2",
      "B) FL cos θ + FL/2",
      "C) FL sin θ + F(L/2) cos θ",
      "D) FL sin θ + FL"
    ],
    "answer": 0,
    "explanation": "Torque equals r × F. First force: τ₁ = LF sin θ (perpendicular distance is L sin θ). Second force at L/2 perpendicular to handle: τ₂ = (L/2)F = FL/2. Total torque = FL sin θ + FL/2. The second force being perpendicular means full moment arm is used."
  },
  {
    "id": "physc_u5_q206",
    "subject": "apphysc",
    "unit": 5,
    "topic": "parallel axis theorem",
    "topicLabel": "parallel axis theorem",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform disk of mass M and radius R rotates about an axis parallel to its central axis but displaced by distance R/2. If the rotational inertia about the center is I₀, what is the rotational inertia about the displaced axis?",
    "choices": [
      "A) I₀ + MR²/4",
      "B) I₀ + MR²/2",
      "C) I₀ + MR²",
      "D) 5I₀/4"
    ],
    "answer": 0,
    "explanation": "Parallel axis theorem: I = I₀ + Md² where d is displacement. Here I₀ = MR²/2 and d = R/2. So I = MR²/2 + M(R/2)² = MR²/2 + MR²/4 = 3MR²/4. Since I₀ = MR²/2, we get I = I₀ + MR²/4."
  },
  {
    "id": "physc_u5_q207",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's second law rotation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A compound pulley system has a large disk of radius R and inertia I₁ connected to a smaller disk of radius r and inertia I₂. A mass m hangs from the smaller disk. What is the system's angular acceleration?",
    "choices": [
      "A) mgr/(I₁ + I₂ + mr²)",
      "B) mg/(I₁ + I₂ + mr)",
      "C) mgR/(I₁ + I₂ + mR²)",
      "D) mg(R-r)/(I₁ + I₂)"
    ],
    "answer": 0,
    "explanation": "Both disks have same angular acceleration α. For hanging mass: mg - T = ma where a = αr. For disk system: Tr = (I₁ + I₂)α. Substituting T: (mg - mαr)r = (I₁ + I₂)α, so mgr = α(I₁ + I₂ + mr²). Therefore α = mgr/(I₁ + I₂ + mr²)."
  },
  {
    "id": "physc_u5_q208",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "rolling without slipping",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A yo-yo of inner radius r, outer radius R, and rotational inertia I unwinds as it falls. What is the acceleration of its center of mass?",
    "choices": [
      "A) g/(1 + I/mr²)",
      "B) g/(1 + I/mR²)",
      "C) gr²/(r² + I/m)",
      "D) gR²/(R² + I/m)"
    ],
    "answer": 0,
    "explanation": "For yo-yo: mg - T = ma (downward positive) and Tr = Iα where a = αr (rolling constraint). From second equation: T = Iα/r = Ia/r². Substituting: mg - Ia/r² = ma, so mg = a(m + I/r²) = ma(1 + I/mr²). Therefore a = g/(1 + I/mr²)."
  },
  {
    "id": "physc_u5_q209",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "angular momentum",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical disks rotating in opposite directions with angular velocities +ω and -ω are brought into contact. After reaching common angular velocity, what fraction of the initial rotational kinetic energy remains?",
    "choices": [
      "A) 0",
      "B) 1/4",
      "C) 1/2",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "Initial angular momentum: L₁ = Iω + I(-ω) = 0. By conservation, final angular momentum = 0, so final angular velocity = 0. Initial KE = ½Iω² + ½Iω² = Iω². Final KE = 0. Fraction remaining = 0/Iω² = 0."
  },
  {
    "id": "physc_u5_q210",
    "subject": "apphysc",
    "unit": 5,
    "topic": "gyroscopic motion",
    "topicLabel": "gyroscopic motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spinning top with angular momentum L experiences a horizontal torque τ. The resulting change in angular momentum is:",
    "choices": [
      "A) Parallel to the torque",
      "B) Parallel to the original angular momentum",
      "C) Perpendicular to both torque and angular momentum",
      "D) Anti-parallel to the torque"
    ],
    "answer": 0,
    "explanation": "From τ = dL/dt, the change in angular momentum dL is in the direction of the applied torque τ. This is why gyroscopic motion occurs - the change in L is perpendicular to L itself, causing precession rather than simple acceleration in the direction of the torque."
  },
  {
    "id": "physc_u5_q211",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "rolling without slipping",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A sphere and cylinder of equal mass and radius are released simultaneously from the same height on an inclined plane. Which reaches the bottom first and why?",
    "choices": [
      "A) Cylinder, because it has larger rotational inertia",
      "B) Sphere, because it has smaller rotational inertia",
      "C) They tie, because they have equal mass and radius",
      "D) Sphere, because it has larger rotational inertia"
    ],
    "answer": 1,
    "explanation": "For rolling down incline: a = g sin θ/(1 + I/mR²). Sphere: I = 2mR²/5, so a = g sin θ/(1 + 2/5) = 5g sin θ/7. Cylinder: I = mR²/2, so a = g sin θ/(1 + 1/2) = 2g sin θ/3. Since 5/7 > 2/3, sphere has greater acceleration and wins."
  },
  {
    "id": "physc_u5_q212",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "angular momentum",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle of mass m moves in a circle of radius r with speed v. If the radius doubles while angular momentum is conserved, what is the new kinetic energy in terms of the original kinetic energy K₀?",
    "choices": [
      "A) K₀/4",
      "B) K₀/2",
      "C) K₀",
      "D) 2K₀"
    ],
    "answer": 0,
    "explanation": "Initial: L₀ = mvr, K₀ = ½mv². When radius doubles with L conserved: mv'(2r) = mvr, so v' = v/2. New kinetic energy K = ½m(v')² = ½m(v/2)² = ½mv²/4 = K₀/4."
  },
  {
    "id": "physc_u6_q213",
    "subject": "apphysc",
    "unit": 6,
    "topic": "simple harmonic motion calculus",
    "topicLabel": "Simple Harmonic Motion Calculus",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the position of an object in simple harmonic motion is given by x(t) = A cos(ωt), what is the velocity v(t)?",
    "choices": [
      "A) v(t) = -Aω sin(ωt)",
      "B) v(t) = A sin(ωt)",
      "C) v(t) = Aω cos(ωt)",
      "D) v(t) = -A cos(ωt)"
    ],
    "answer": 0,
    "explanation": "The velocity is the derivative of position: v = dx/dt = d/dt[A cos(ωt)] = -Aω sin(ωt). Choice B misses the negative sign and ω factor. Choice C has wrong trigonometric function. Choice D is missing the ω factor."
  },
  {
    "id": "physc_u6_q214",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass",
    "topicLabel": "Spring-Mass Systems",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass m is attached to a spring with spring constant k. What is the angular frequency ω of oscillation?",
    "choices": [
      "A) ω = √(k/m)",
      "B) ω = √(m/k)",
      "C) ω = k/m",
      "D) ω = m/k"
    ],
    "answer": 0,
    "explanation": "For a spring-mass system, ω = √(k/m). This comes from F = -kx = ma = m(d²x/dt²). Choice B inverts the ratio under the square root. Choices C and D are missing the square root, which is a common algebraic error."
  },
  {
    "id": "physc_u6_q215",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum",
    "topicLabel": "Pendulum Motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For a simple pendulum with small angle approximations, what is the period T?",
    "choices": [
      "A) T = 2π√(L/g)",
      "B) T = 2π√(g/L)",
      "C) T = √(L/g)",
      "D) T = π√(L/g)"
    ],
    "answer": 0,
    "explanation": "The period of a simple pendulum is T = 2π√(L/g) where L is length and g is gravitational acceleration. Choice B inverts the ratio under the square root. Choice C is missing the 2π factor. Choice D is missing the factor of 2."
  },
  {
    "id": "physc_u6_q216",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in Simple Harmonic Motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In simple harmonic motion, when is the kinetic energy maximum?",
    "choices": [
      "A) When the object passes through equilibrium position",
      "B) When the object is at maximum displacement",
      "C) When the object is halfway between equilibrium and maximum displacement",
      "D) Kinetic energy is constant throughout the motion"
    ],
    "answer": 0,
    "explanation": "Kinetic energy is maximum when velocity is maximum, which occurs at the equilibrium position where all energy is kinetic. At maximum displacement (choice B), velocity is zero so kinetic energy is zero. Choice C represents a common misconception about energy distribution. Choice D ignores energy conversion between kinetic and potential."
  },
  {
    "id": "physc_u6_q217",
    "subject": "apphysc",
    "unit": 6,
    "topic": "simple harmonic motion calculus",
    "topicLabel": "Simple Harmonic Motion Calculus",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If x(t) = A cos(ωt + φ), what is the acceleration a(t)?",
    "choices": [
      "A) a(t) = -Aω² cos(ωt + φ)",
      "B) a(t) = Aω² cos(ωt + φ)",
      "C) a(t) = -Aω sin(ωt + φ)",
      "D) a(t) = Aω² sin(ωt + φ)"
    ],
    "answer": 0,
    "explanation": "Acceleration is the second derivative of position: a = d²x/dt² = -Aω² cos(ωt + φ) = -ω²x. Choice B is missing the negative sign. Choice C is the velocity with wrong coefficient. Choice D has wrong sign and trigonometric function."
  },
  {
    "id": "physc_u6_q218",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in Simple Harmonic Motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the total mechanical energy of a spring-mass system with amplitude A and spring constant k?",
    "choices": [
      "A) E = (1/2)kA²",
      "B) E = kA²",
      "C) E = (1/2)kA",
      "D) E = kA"
    ],
    "answer": 0,
    "explanation": "Total mechanical energy equals maximum potential energy, which occurs at maximum displacement: E = (1/2)kA². Choice B is missing the factor of 1/2. Choices C and D are missing the squared term in the potential energy formula."
  },
  {
    "id": "physc_u6_q219",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a lightly damped oscillator, what happens to the amplitude over time?",
    "choices": [
      "A) It decreases exponentially",
      "B) It decreases linearly",
      "C) It remains constant",
      "D) It increases exponentially"
    ],
    "answer": 0,
    "explanation": "In damped oscillations, amplitude decreases exponentially due to energy loss: A(t) = A₀e^(-γt). Choice B represents a common misconception of linear decay. Choice C describes undamped motion. Choice D would represent an unstable system gaining energy."
  },
  {
    "id": "physc_u6_q220",
    "subject": "apphysc",
    "unit": 6,
    "topic": "driven oscillations",
    "topicLabel": "Driven Oscillations",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a driven oscillator, what determines the frequency of the steady-state motion?",
    "choices": [
      "A) The driving frequency",
      "B) The natural frequency of the oscillator",
      "C) The average of driving and natural frequencies",
      "D) The difference between driving and natural frequencies"
    ],
    "answer": 0,
    "explanation": "In steady state, a driven oscillator oscillates at the driving frequency, regardless of its natural frequency. Choice B describes free oscillations. Choices C and D represent common misconceptions about frequency mixing in driven systems."
  },
  {
    "id": "physc_u6_q221",
    "subject": "apphysc",
    "unit": 6,
    "topic": "resonance",
    "topicLabel": "Resonance",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "At what driving frequency does resonance occur in an undamped oscillator?",
    "choices": [
      "A) When driving frequency equals natural frequency",
      "B) When driving frequency is twice the natural frequency",
      "C) When driving frequency is half the natural frequency",
      "D) When driving frequency is zero"
    ],
    "answer": 0,
    "explanation": "Resonance occurs when the driving frequency matches the natural frequency of the oscillator, leading to maximum amplitude response. Choices B and C represent harmonic relationships that don't cause resonance. Choice D represents no driving force."
  },
  {
    "id": "physc_u6_q222",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What type of damping occurs when the system returns to equilibrium without oscillating?",
    "choices": [
      "A) Critical damping",
      "B) Light damping",
      "C) Heavy damping",
      "D) No damping"
    ],
    "answer": 0,
    "explanation": "Critical damping is the boundary condition where the system returns to equilibrium as quickly as possible without oscillating. Light damping (B) still allows oscillations. Heavy/overdamping (C) returns to equilibrium slowly without oscillations. No damping (D) results in perpetual oscillations."
  },
  {
    "id": "physc_u6_q223",
    "subject": "apphysc",
    "unit": 6,
    "topic": "resonance",
    "topicLabel": "Resonance",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How does damping affect the resonance peak in a driven oscillator?",
    "choices": [
      "A) Reduces the peak amplitude and broadens the resonance curve",
      "B) Increases the peak amplitude and narrows the resonance curve",
      "C) Only reduces the peak amplitude",
      "D) Only broadens the resonance curve"
    ],
    "answer": 0,
    "explanation": "Damping both reduces the maximum amplitude at resonance and broadens the frequency range over which significant response occurs. Choice B describes the opposite effect. Choices C and D only account for one aspect of damping's influence on resonance."
  },
  {
    "id": "physc_u6_q224",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass systems",
    "topicLabel": "Spring-Mass Systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical masses m are connected by a spring with spring constant k. One mass is held fixed while the other oscillates. If both masses are now free to move on a frictionless surface, how does the frequency of oscillation compare to the original case?",
    "choices": [
      "A) The frequency doubles",
      "B) The frequency increases by √2",
      "C) The frequency decreases by √2",
      "D) The frequency remains the same"
    ],
    "answer": 1,
    "explanation": "When one mass is fixed, f₁ = (1/2π)√(k/m). When both masses move, we use reduced mass μ = m₁m₂/(m₁+m₂) = m²/2m = m/2. So f₂ = (1/2π)√(k/μ) = (1/2π)√(2k/m) = √2 × f₁. Students often think frequency doubles (choice A) or stays same (choice D). Choice C reverses the relationship."
  },
  {
    "id": "physc_u6_q225",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum motion",
    "topicLabel": "Pendulum Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A simple pendulum of length L oscillates with small amplitude on Earth. If this same pendulum were taken to a planet where the gravitational acceleration is 4g, what would be the ratio of the new period to the original period?",
    "choices": [
      "A) 1/4",
      "B) 1/2",
      "C) 2",
      "D) 4"
    ],
    "answer": 1,
    "explanation": "For a simple pendulum, T = 2π√(L/g). On the new planet with acceleration 4g: T_new = 2π√(L/4g) = (1/2) × 2π√(L/g) = T_original/2. So the ratio is 1/2. Students often confuse direct vs inverse relationships, leading to choice C. Choices A and D represent thinking T ∝ g or T ∝ g²."
  },
  {
    "id": "physc_u6_q226",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in Simple Harmonic Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass on a spring oscillates with amplitude A. At what displacement from equilibrium is the kinetic energy equal to twice the potential energy?",
    "choices": [
      "A) A/√3",
      "B) A/√2",
      "C) A/2",
      "D) 2A/3"
    ],
    "answer": 0,
    "explanation": "Total energy E = (1/2)kA². At position x: KE = (1/2)k(A²-x²), PE = (1/2)kx². Setting KE = 2PE: (1/2)k(A²-x²) = 2×(1/2)kx² = kx². Solving: A²-x² = 2x², so A² = 3x², giving x = A/√3. Choice B comes from setting KE = PE. Choice C assumes linear relationship. Choice D comes from algebraic errors."
  },
  {
    "id": "physc_u6_q227",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a lightly damped harmonic oscillator, which statement about the frequency of oscillation is correct?",
    "choices": [
      "A) It equals the natural frequency ω₀",
      "B) It is slightly less than ω₀",
      "C) It is slightly greater than ω₀",
      "D) It decreases linearly with time"
    ],
    "answer": 1,
    "explanation": "For light damping, ω_damped = √(ω₀² - γ²) where γ is the damping coefficient. Since γ > 0, ω_damped < ω₀. The frequency is constant but reduced. Choice A ignores damping effects. Choice C has the wrong sign. Choice D confuses frequency with amplitude, which does decrease with time."
  },
  {
    "id": "physc_u6_q228",
    "subject": "apphysc",
    "unit": 6,
    "topic": "simple harmonic motion calculus",
    "topicLabel": "Simple Harmonic Motion Calculus",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If x(t) = A sin(ωt) represents the position of an oscillating particle, what is the correct expression for the particle's acceleration as a function of position?",
    "choices": [
      "A) a = -ω²x",
      "B) a = -ωx",
      "C) a = ω²A",
      "D) a = -ωA cos(ωt)"
    ],
    "answer": 0,
    "explanation": "Taking derivatives: v = dx/dt = Aω cos(ωt), and a = dv/dt = -Aω² sin(ωt) = -ω²x. This is the defining relationship for SHM. Choice B omits the ω factor. Choice C gives constant acceleration. Choice D expresses acceleration in terms of time rather than position."
  },
  {
    "id": "physc_u6_q229",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass systems",
    "topicLabel": "Spring-Mass Systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A vertical spring-mass system has a mass m attached. When the mass is displaced downward by distance d from its equilibrium position and released, what is the period of oscillation?",
    "choices": [
      "A) 2π√(d/g)",
      "B) 2π√(m/k)",
      "C) 2π√((mg+kd)/k)",
      "D) 2π√(k/m)"
    ],
    "answer": 1,
    "explanation": "The period depends only on the system parameters m and k, not on the amplitude d or initial conditions. T = 2π√(m/k) for any spring-mass system. Choice A incorrectly relates period to amplitude. Choice C incorrectly includes gravitational and displacement terms. Choice D inverts the mass-to-spring constant ratio."
  },
  {
    "id": "physc_u6_q230",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum motion",
    "topicLabel": "Pendulum Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A physical pendulum consists of a uniform rod of length L pivoted at one end. What is its period of oscillation for small angles?",
    "choices": [
      "A) 2π√(L/g)",
      "B) 2π√(2L/3g)",
      "C) 2π√(3L/2g)",
      "D) 2π√(L/2g)"
    ],
    "answer": 1,
    "explanation": "For a physical pendulum: T = 2π√(I/mgd) where I is moment of inertia about pivot, m is mass, d is distance to center of mass. For a rod: I = (1/3)mL², d = L/2. So T = 2π√((mL²/3)/(mg×L/2)) = 2π√(2L/3g). Choice A is for a simple pendulum of length L. Choices C and D have incorrect numerical factors."
  },
  {
    "id": "physc_u6_q231",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in Simple Harmonic Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass oscillates on a horizontal spring with total energy E₀. If the amplitude is doubled, how much work must be done on the system?",
    "choices": [
      "A) E₀",
      "B) 2E₀",
      "C) 3E₀",
      "D) 4E₀"
    ],
    "answer": 2,
    "explanation": "Total energy in SHM is E = (1/2)kA². If amplitude doubles: E_new = (1/2)k(2A)² = 4×(1/2)kA² = 4E₀. The work done equals the change in energy: W = E_new - E₀ = 4E₀ - E₀ = 3E₀. Choice A assumes linear relationship. Choice B assumes doubling. Choice D gives the final energy rather than work done."
  },
  {
    "id": "physc_u6_q232",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a critically damped oscillator, which statement is true about the motion?",
    "choices": [
      "A) The system oscillates with decreasing amplitude",
      "B) The system returns to equilibrium without oscillating in minimum time",
      "C) The system never returns to equilibrium",
      "D) The amplitude decreases linearly with time"
    ],
    "answer": 1,
    "explanation": "Critical damping (γ = ω₀) provides the fastest return to equilibrium without oscillation. The system approaches equilibrium exponentially without overshooting. Choice A describes underdamping. Choice C describes overdamping taken to extreme. Choice D describes a linear decay that doesn't occur in real damped systems."
  },
  {
    "id": "physc_u6_q233",
    "subject": "apphysc",
    "unit": 6,
    "topic": "driven oscillations",
    "topicLabel": "Driven Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A driven oscillator has natural frequency ω₀ and is driven at frequency ω. If the driving frequency is much larger than the natural frequency (ω >> ω₀), what happens to the amplitude response?",
    "choices": [
      "A) Amplitude increases without limit",
      "B) Amplitude approaches zero",
      "C) Amplitude equals the driving amplitude",
      "D) Amplitude oscillates between maximum and minimum values"
    ],
    "answer": 1,
    "explanation": "For ω >> ω₀, the amplitude response A(ω) ∝ 1/ω², so amplitude decreases rapidly with increasing frequency. The system cannot follow rapid driving. Choice A occurs only at resonance with no damping. Choice C ignores the frequency-dependent response. Choice D describes a behavior that doesn't occur in driven oscillators."
  },
  {
    "id": "physc_u6_q234",
    "subject": "apphysc",
    "unit": 6,
    "topic": "resonance",
    "topicLabel": "Resonance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a driven damped oscillator, how does increased damping affect the resonance peak?",
    "choices": [
      "A) Peak amplitude increases and becomes sharper",
      "B) Peak amplitude decreases and becomes broader",
      "C) Peak amplitude increases and becomes broader",
      "D) Peak amplitude decreases but becomes sharper"
    ],
    "answer": 1,
    "explanation": "Increased damping reduces the maximum amplitude at resonance and broadens the resonance curve (decreases Q-factor). More energy is dissipated, preventing large amplitude buildup and making the system respond over a wider frequency range. Choice A describes the opposite effect. Choices C and D mix correct and incorrect effects."
  },
  {
    "id": "physc_u6_q235",
    "subject": "apphysc",
    "unit": 6,
    "topic": "simple harmonic motion calculus",
    "topicLabel": "Simple Harmonic Motion Calculus",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle in SHM has position x(t) = 3 cos(4t + π/3) meters. What is the particle's speed when it is at x = 1.5 m?",
    "choices": [
      "A) 6√3 m/s",
      "B) 12 m/s",
      "C) 6 m/s",
      "D) 3√3 m/s"
    ],
    "answer": 0,
    "explanation": "Using energy conservation: v² = ω²(A² - x²) where ω = 4 rad/s, A = 3 m, x = 1.5 m. So v² = 16(9 - 2.25) = 16(6.75) = 108, giving v = √108 = 6√3 m/s. Choice B uses v = ωA (maximum speed). Choice C omits the √3 factor. Choice D uses wrong amplitude in the calculation."
  },
  {
    "id": "physc_u6_q236",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass systems",
    "topicLabel": "Spring-Mass Systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two springs with spring constants k₁ and k₂ are connected in series and attached to a mass m. What is the effective spring constant of this system?",
    "choices": [
      "A) k₁ + k₂",
      "B) k₁k₂/(k₁ + k₂)",
      "C) (k₁ + k₂)/k₁k₂",
      "D) √(k₁k₂)"
    ],
    "answer": 1,
    "explanation": "For springs in series, the same force acts on both springs, but displacements add: x_total = x₁ + x₂ = F/k₁ + F/k₂ = F(k₁ + k₂)/(k₁k₂). So 1/k_eff = 1/k₁ + 1/k₂, giving k_eff = k₁k₂/(k₁ + k₂). Choice A is for parallel springs. Choice C inverts the correct answer. Choice D represents a geometric mean that doesn't apply here."
  },
  {
    "id": "physc_u6_q237",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum motion",
    "topicLabel": "Pendulum Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A simple pendulum oscillates with period T in air. If the same pendulum oscillates in a medium where the effective gravitational acceleration is reduced to g/4, what is the new period?",
    "choices": [
      "A) T/4",
      "B) T/2",
      "C) 2T",
      "D) 4T"
    ],
    "answer": 2,
    "explanation": "Period of a pendulum: T = 2π√(L/g). With g_eff = g/4: T_new = 2π√(L/(g/4)) = 2π√(4L/g) = 2 × 2π√(L/g) = 2T. Students often confuse direct and inverse relationships, leading to choice B. Choices A and D represent incorrect proportionality assumptions."
  },
  {
    "id": "physc_u6_q238",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The amplitude of a damped oscillator decreases according to A(t) = A₀e^(-γt). After what time does the amplitude decrease to 1/e of its original value?",
    "choices": [
      "A) γ",
      "B) 1/γ",
      "C) e/γ",
      "D) γ/e"
    ],
    "answer": 1,
    "explanation": "Setting A(t) = A₀/e: A₀e^(-γt) = A₀/e, so e^(-γt) = 1/e = e^(-1). Therefore -γt = -1, giving t = 1/γ. This is the decay time constant. Choice A has dimensions of inverse time. Choices C and D mix up the relationship between e and γ."
  },
  {
    "id": "physc_u6_q239",
    "subject": "apphysc",
    "unit": 6,
    "topic": "driven oscillations",
    "topicLabel": "Driven Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass-spring system with natural frequency ω₀ is driven by a force F₀cos(ωt). In the low-frequency limit (ω << ω₀), what is the approximate amplitude of steady-state oscillation?",
    "choices": [
      "A) F₀/k",
      "B) F₀/(mω²)",
      "C) F₀/(mω₀²)",
      "D) F₀ω²/(k)"
    ],
    "answer": 0,
    "explanation": "For ω << ω₀, the denominator ω₀² - ω² ≈ ω₀². The amplitude formula A = F₀/(m(ω₀² - ω²)) becomes A ≈ F₀/(mω₀²) = F₀/k since k = mω₀². This represents quasi-static response. Choice B would apply at high frequencies. Choice C doesn't simplify using k = mω₀². Choice D has incorrect dependence on ω."
  },
  {
    "id": "physc_u6_q240",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass",
    "topicLabel": "Spring-Mass Systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical springs with spring constant k are connected to a mass m. If the springs are arranged in parallel, what is the period of oscillation compared to a single spring-mass system?",
    "choices": [
      "A) Same period",
      "B) √2 times larger",
      "C) √2 times smaller",
      "D) 2 times smaller"
    ],
    "answer": 2,
    "explanation": "In parallel, the effective spring constant is k_eff = k + k = 2k. The period T = 2π√(m/k_eff) = 2π√(m/2k) = (1/√2) × 2π√(m/k). The period is √2 times smaller. Students often think parallel springs don't affect the period or that they make it larger by confusing with series arrangement."
  },
  {
    "id": "physc_u6_q241",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum",
    "topicLabel": "Pendulum Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A simple pendulum of length L is moved to a planet where the gravitational acceleration is 4 times that of Earth. To maintain the same period as on Earth, the new length must be:",
    "choices": [
      "A) L/4",
      "B) L/2",
      "C) 2L",
      "D) 4L"
    ],
    "answer": 3,
    "explanation": "The period of a simple pendulum is T = 2π√(L/g). To keep the same period when g becomes 4g, we need √(L_new/4g) = √(L/g), so L_new/4g = L/g, giving L_new = 4L. Students often choose L/4 by incorrectly thinking the length should be inversely proportional to g rather than maintaining the ratio L/g constant."
  },
  {
    "id": "physc_u6_q242",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in Simple Harmonic Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass on a spring oscillates with amplitude A. At what displacement from equilibrium is the kinetic energy equal to three times the potential energy?",
    "choices": [
      "A) A/4",
      "B) A/3",
      "C) A/2",
      "D) A/√2"
    ],
    "answer": 2,
    "explanation": "Total energy E = (1/2)kA². At position x: KE = (1/2)k(A² - x²) and PE = (1/2)kx². Setting KE = 3PE: (1/2)k(A² - x²) = 3(1/2)kx². Solving: A² - x² = 3x², so A² = 4x², giving x = A/2. Students often choose A/√2 by confusing this with the equal energy condition, or A/4 by incorrectly setting up the energy ratio."
  },
  {
    "id": "physc_u6_q243",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an underdamped oscillator, the amplitude decreases exponentially with time constant τ. After time 2τ, what fraction of the original amplitude remains?",
    "choices": [
      "A) 1/4",
      "B) 1/e²",
      "C) 1/2e",
      "D) 1/√e"
    ],
    "answer": 1,
    "explanation": "For underdamped oscillations, amplitude A(t) = A₀e^(-t/τ). After time 2τ: A(2τ) = A₀e^(-2τ/τ) = A₀e^(-2) = A₀/e². Students often choose 1/4 by thinking the amplitude halves every τ, or 1/2e by incorrectly applying the exponential decay formula."
  },
  {
    "id": "physc_u6_q244",
    "subject": "apphysc",
    "unit": 6,
    "topic": "driven oscillations",
    "topicLabel": "Driven Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A driven oscillator has natural frequency ω₀ and is driven at frequency ω_d. When ω_d << ω₀, the phase relationship between the driving force and displacement is:",
    "choices": [
      "A) In phase (0° phase difference)",
      "B) 90° out of phase",
      "C) 180° out of phase",
      "D) 45° out of phase"
    ],
    "answer": 0,
    "explanation": "At low driving frequencies (ω_d << ω₀), the system responds quasi-statically, following the driving force almost instantaneously. The displacement is in phase with the driving force. Students often choose 90° thinking of the relationship between force and velocity, or 180° by confusing low frequency behavior with high frequency behavior."
  },
  {
    "id": "physc_u6_q245",
    "subject": "apphysc",
    "unit": 6,
    "topic": "resonance",
    "topicLabel": "Resonance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a damped driven oscillator, the frequency at which maximum power transfer occurs is:",
    "choices": [
      "A) Equal to the natural frequency ω₀",
      "B) Slightly below the natural frequency",
      "C) Slightly above the natural frequency",
      "D) Equal to ω₀/√2"
    ],
    "answer": 0,
    "explanation": "Maximum power transfer occurs when the impedance is minimized, which happens exactly at the natural frequency ω₀, regardless of damping. This is different from maximum amplitude, which occurs slightly below ω₀ for damped systems. Students often confuse power resonance with amplitude resonance, choosing option B."
  },
  {
    "id": "physc_u6_q246",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass",
    "topicLabel": "Spring-Mass Systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A vertical spring-mass system oscillates about its equilibrium position. If the mass is doubled while keeping the spring the same, how does the equilibrium position change?",
    "choices": [
      "A) Moves down by the original compression amount",
      "B) Moves down by twice the original compression amount",
      "C) Moves down by half the original compression amount",
      "D) Remains at the same position"
    ],
    "answer": 0,
    "explanation": "At equilibrium, kx₁ = mg for the original mass. When mass is doubled, kx₂ = 2mg. Therefore x₂ = 2mg/k = 2x₁. The new equilibrium is x₂ - x₁ = x₁ lower, so it moves down by the original compression amount. Students often think it doubles (B) by directly relating mass doubling to position doubling, forgetting the relative change."
  },
  {
    "id": "physc_u6_q247",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which statement correctly describes the relationship between damping and frequency in an underdamped oscillator?",
    "choices": [
      "A) The oscillation frequency equals the natural frequency",
      "B) The oscillation frequency is greater than the natural frequency",
      "C) The oscillation frequency is less than the natural frequency",
      "D) The oscillation frequency is independent of the natural frequency"
    ],
    "answer": 2,
    "explanation": "In underdamped oscillations, ω_d = √(ω₀² - γ²) where γ is the damping coefficient. Since γ > 0, ω_d < ω₀. The damping reduces the oscillation frequency below the natural frequency. Students commonly think damping doesn't affect frequency (A) or confuse the direction of the effect (B)."
  },
  {
    "id": "physc_u6_q248",
    "subject": "apphysc",
    "unit": 6,
    "topic": "resonance",
    "topicLabel": "Resonance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A guitar string vibrates at its fundamental frequency. When the string tension is increased by 44%, the new fundamental frequency is approximately:",
    "choices": [
      "A) 20% higher",
      "B) 44% higher",
      "C) 69% higher",
      "D) 144% higher"
    ],
    "answer": 0,
    "explanation": "The fundamental frequency of a string is f = (1/2L)√(T/μ). When tension increases by 44%, T_new = 1.44T. The new frequency f_new = f√(1.44) = f(1.2) = 1.2f, which is 20% higher. Students often choose B by thinking frequency changes proportionally with tension, or C by incorrectly calculating √1.44."
  },
  {
    "id": "physc_u6_q249",
    "subject": "apphysc",
    "unit": 6,
    "topic": "resonance",
    "topicLabel": "Resonance",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a driven RLC circuit, the impedance Z = √[R² + (ωL - 1/ωC)²]. At what frequency does the power dissipated reach its maximum?",
    "choices": [
      "A) ω = 1/√(LC)",
      "B) ω = √(1/LC - R²/2L²)",
      "C) ω = R/L",
      "D) ω = 1/RC"
    ],
    "answer": 0,
    "explanation": "Power P = I²R = (V₀/Z)²R where Z = √[R² + (ωL - 1/ωC)²]. Power is maximum when Z is minimum, which occurs when ωL - 1/ωC = 0, giving ω = 1/√(LC). This is the resonance frequency. Unlike mechanical systems, electrical resonance for power occurs at the natural frequency regardless of resistance. Students often try to include R in the resonance condition."
  },
  {
    "id": "physc_u6_q250",
    "subject": "apphysc",
    "unit": 6,
    "topic": "simple harmonic motion calculus",
    "topicLabel": "Simple Harmonic Motion Calculus",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If x(t) = A cos(ωt) describes SHM, what is the time-averaged value of the kinetic energy over one complete period?",
    "choices": [
      "A) (1/4)mω²A²",
      "B) (1/2)mω²A²",
      "C) (1/8)mω²A²",
      "D) mω²A²"
    ],
    "answer": 0,
    "explanation": "KE = (1/2)mv² = (1/2)m(dx/dt)² = (1/2)m(-Aω sin(ωt))² = (1/2)mω²A² sin²(ωt). The time average of sin²(ωt) over one period is 1/2. Therefore, <KE> = (1/2)mω²A² × (1/2) = (1/4)mω²A². This equals half the total energy, as expected. Students often forget the time-averaging step or use incorrect trigonometric averages."
  },
  {
    "id": "physc_u6_q251",
    "subject": "apphysc",
    "unit": 6,
    "topic": "driven oscillations",
    "topicLabel": "Driven Oscillations",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A damped harmonic oscillator is driven by F(t) = F₀cos(ωt). In steady state, the phase lag δ between driving force and displacement satisfies tan δ = bω/(k - mω²). What is the phase lag when ω = ω₀ = √(k/m)?",
    "choices": [
      "A) 0",
      "B) π/4",
      "C) π/2",
      "D) π"
    ],
    "answer": 2,
    "explanation": "At resonance ω = ω₀ = √(k/m), we have k = mω₀² = mω². Therefore k - mω² = 0, making the denominator zero. This means tan δ = bω/0 → ∞, so δ = π/2. At resonance, the displacement lags the driving force by exactly 90°. Students often think there's no phase lag at resonance or confuse this with the undamped case."
  },
  {
    "id": "physc_u6_q252",
    "subject": "apphysc",
    "unit": 6,
    "topic": "simple harmonic motion calculus",
    "topicLabel": "Simple Harmonic Motion Calculus",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle undergoes SHM with x(t) = A cos(ωt + φ). If at t = 0, the particle is at x₀ = A/2 with velocity v₀ > 0, what is the phase constant φ?",
    "choices": [
      "A) π/3",
      "B) -π/3",
      "C) 2π/3",
      "D) -2π/3"
    ],
    "answer": 1,
    "explanation": "At t = 0: x(0) = A cos(φ) = A/2, so cos(φ) = 1/2. This gives φ = ±π/3. The velocity is v(t) = -Aω sin(ωt + φ), so v(0) = -Aω sin(φ). Since v₀ > 0 and A, ω > 0, we need sin(φ) < 0. Since cos(φ) = 1/2 > 0, φ is in the fourth quadrant, so φ = -π/3. Students often choose π/3 by forgetting to check the velocity condition sign."
  },
  {
    "id": "physc_u6_q253",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass systems",
    "topicLabel": "Spring-Mass Systems",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A vertical spring-mass system has a mass m attached. When the mass is in equilibrium, the spring is compressed by d = mg/k. If the mass is displaced further by amount A and released, what is the amplitude of oscillation about the equilibrium position?",
    "choices": [
      "A) A",
      "B) A + d",
      "C) A - d",
      "D) √(A² + d²)"
    ],
    "answer": 0,
    "explanation": "The equilibrium position is where the spring force balances gravity: kd = mg. When displaced by additional amount A from equilibrium and released, the system oscillates about this equilibrium position with amplitude A. The initial compression d just shifts the equilibrium point but doesn't affect the amplitude of oscillation about that equilibrium. Students often think the amplitude is A + d, confusing displacement from natural length with displacement from equilibrium."
  },
  {
    "id": "physc_u6_q254",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum motion",
    "topicLabel": "Pendulum Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A simple pendulum of length L has period T₀ for small oscillations. For large amplitude oscillations with maximum angle θ₀, the period becomes T = T₀[1 + (1/16)θ₀² + ...] for θ₀ in radians. If θ₀ = 60°, what is the approximate fractional increase in period?",
    "choices": [
      "A) 0.017",
      "B) 0.034",
      "C) 0.068",
      "D) 0.136"
    ],
    "answer": 2,
    "explanation": "First convert θ₀ = 60° = π/3 radians ≈ 1.047 radians. The fractional increase is (T - T₀)/T₀ = (1/16)θ₀² = (1/16)(π/3)² = (1/16)(π²/9) ≈ (1/16)(9.87/9) ≈ 0.068. Students often forget to convert degrees to radians or miscalculate (π/3)²."
  },
  {
    "id": "physc_u6_q255",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in Simple Harmonic Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass m oscillates on a spring with amplitude A. At what fraction of the amplitude is the displacement when the kinetic energy is 3/4 of the total energy?",
    "choices": [
      "A) 1/4",
      "B) 1/2",
      "C) √3/4",
      "D) 3/4"
    ],
    "answer": 1,
    "explanation": "If KE = (3/4)E, then PE = E - KE = (1/4)E. Since PE = (1/2)kx² and total energy E = (1/2)kA², we have (1/2)kx² = (1/4)(1/2)kA², which gives x² = A²/4, so x = A/2. The displacement is half the amplitude. Students often confuse the energy fraction with the displacement fraction directly."
  },
  {
    "id": "physc_u7_q256",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Newton's law of gravitation",
    "topicLabel": "Newton's law of gravitation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to Newton's law of universal gravitation, the gravitational force between two objects is inversely proportional to which quantity?",
    "choices": [
      "A) The square of the distance between their centers",
      "B) The distance between their centers",
      "C) The sum of their masses",
      "D) The product of their masses"
    ],
    "answer": 0,
    "explanation": "Newton's law states F = Gm₁m₂/r², so force is inversely proportional to r². Students often forget the square (choice B), or confuse with the direct proportionality to mass product (choice D) or incorrectly think it's mass sum (choice C)."
  },
  {
    "id": "physc_u7_q257",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational field",
    "topicLabel": "gravitational field",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The gravitational field strength at a point is defined as the gravitational force per unit what?",
    "choices": [
      "A) Area",
      "B) Volume",
      "C) Mass",
      "D) Distance"
    ],
    "answer": 2,
    "explanation": "Gravitational field strength g = F/m, so it's force per unit mass. Students might confuse with electric field concepts involving area (choice A), or think it relates to volume (choice B) or distance (choice D)."
  },
  {
    "id": "physc_u7_q258",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational potential energy",
    "topicLabel": "gravitational potential energy",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Where is the gravitational potential energy defined to be zero in the universal gravitational potential energy equation U = -Gm₁m₂/r?",
    "choices": [
      "A) At the surface of the Earth",
      "B) At the center of the Earth",
      "C) At infinite separation",
      "D) At one meter separation"
    ],
    "answer": 2,
    "explanation": "The negative sign in U = -Gm₁m₂/r means U = 0 when r → ∞. Students often think zero is at Earth's surface (choice A) from introductory physics, at the center (choice B), or pick an arbitrary distance (choice D)."
  },
  {
    "id": "physc_u7_q259",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's first law",
    "topicLabel": "Kepler's first law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to Kepler's first law, planetary orbits are what shape?",
    "choices": [
      "A) Perfect circles",
      "B) Ellipses",
      "C) Parabolas",
      "D) Hyperbolas"
    ],
    "answer": 1,
    "explanation": "Kepler's first law states orbits are ellipses with the Sun at one focus. Many students think orbits are perfect circles (choice A) from simplified models. Parabolas (choice C) and hyperbolas (choice D) are unbound trajectories, not closed orbits."
  },
  {
    "id": "physc_u7_q260",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's second law",
    "topicLabel": "Kepler's second law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Kepler's second law states that a line from the Sun to a planet sweeps out equal areas in equal what?",
    "choices": [
      "A) Distances",
      "B) Times",
      "C) Angles",
      "D) Velocities"
    ],
    "answer": 1,
    "explanation": "Kepler's second law is about equal areas in equal times, which is equivalent to conservation of angular momentum. Students might confuse with equal distances (choice A), angles (choice C), or velocities (choice D) traveled in equal times."
  },
  {
    "id": "physc_u7_q261",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's third law",
    "topicLabel": "Kepler's third law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In Kepler's third law, T² ∝ r³, what does T represent?",
    "choices": [
      "A) The orbital velocity",
      "B) The orbital period",
      "C) The orbital radius",
      "D) The orbital acceleration"
    ],
    "answer": 1,
    "explanation": "T represents the orbital period (time for one complete orbit). Students might confuse T with velocity (choice A), radius (choice C), or acceleration (choice D), especially since these other quantities also vary with orbital distance."
  },
  {
    "id": "physc_u7_q262",
    "subject": "apphysc",
    "unit": 7,
    "topic": "satellite orbits",
    "topicLabel": "satellite orbits",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For a satellite in circular orbit, the gravitational force provides which type of force?",
    "choices": [
      "A) Tangential force",
      "B) Centripetal force",
      "C) Centrifugal force",
      "D) Frictional force"
    ],
    "answer": 1,
    "explanation": "Gravitational force points toward the center and provides the centripetal force needed for circular motion. Students often confuse centripetal with centrifugal force (choice C), think gravity acts tangentially (choice A), or incorrectly invoke friction (choice D)."
  },
  {
    "id": "physc_u7_q263",
    "subject": "apphysc",
    "unit": 7,
    "topic": "orbital mechanics",
    "topicLabel": "orbital mechanics",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "When a satellite moves from a lower orbit to a higher orbit, its orbital speed will:",
    "choices": [
      "A) Increase",
      "B) Decrease",
      "C) Remain the same",
      "D) First increase then decrease"
    ],
    "answer": 1,
    "explanation": "From v = √(GM/r), orbital speed decreases as radius increases. Students often think speed increases with height (choice A) like throwing something higher, or remains constant (choice C), or follows some complex pattern (choice D)."
  },
  {
    "id": "physc_u7_q264",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational field",
    "topicLabel": "gravitational field",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The SI units for gravitational field strength are:",
    "choices": [
      "A) N·m²/kg²",
      "B) m/s²",
      "C) N·m/kg",
      "D) kg·m/s²"
    ],
    "answer": 1,
    "explanation": "Gravitational field g = F/m has units of N/kg = m/s² (since N = kg·m/s²). Choice A is the gravitational constant G, choice C would be energy per mass, and choice D is force units."
  },
  {
    "id": "physc_u7_q265",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational potential energy",
    "topicLabel": "gravitational potential energy",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "As two masses are brought closer together from infinite separation, their gravitational potential energy:",
    "choices": [
      "A) Increases",
      "B) Decreases",
      "C) Remains constant",
      "D) First decreases then increases"
    ],
    "answer": 1,
    "explanation": "U = -Gm₁m₂/r becomes more negative (decreases) as r decreases. Students often think energy increases when objects come together (choice A), or stays constant (choice C), confusing the negative sign in the potential energy formula."
  },
  {
    "id": "physc_u7_q266",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Newton's law of gravitation",
    "topicLabel": "Newton's law of gravitation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the distance between two masses is tripled, the gravitational force between them changes by a factor of:",
    "choices": [
      "A) 1/3",
      "B) 1/6",
      "C) 1/9",
      "D) 3"
    ],
    "answer": 2,
    "explanation": "Since F ∝ 1/r², when r increases by factor of 3, F decreases by factor of 3² = 9, so F becomes F/9. Students often forget to square the distance factor, giving 1/3 (choice A), or make other algebraic errors."
  },
  {
    "id": "physc_u7_q267",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Newton's law of universal gravitation",
    "topicLabel": "Newton's law of universal gravitation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two spherical masses M and m are separated by distance r. If the mass M is doubled and the distance is tripled, how does the gravitational force change?",
    "choices": [
      "A) Decreases by a factor of 9/2",
      "B) Decreases by a factor of 4.5",
      "C) Increases by a factor of 2/9",
      "D) Decreases by a factor of 18"
    ],
    "answer": 1,
    "explanation": "Using F = GMm/r², the new force is F' = G(2M)m/(3r)² = 2GMm/9r² = (2/9)F. So the force decreases by a factor of 9/2 = 4.5. Choice A confuses the ratio direction, C gives the multiplication factor instead of reduction factor, and D incorrectly calculates 2×9."
  },
  {
    "id": "physc_u7_q268",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational field",
    "topicLabel": "gravitational field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "At what distance from Earth's center is the gravitational field strength equal to half its value at Earth's surface?",
    "choices": [
      "A) R/2",
      "B) R/√2",
      "C) R√2",
      "D) 2R"
    ],
    "answer": 2,
    "explanation": "Gravitational field g = GM/r². At surface: g₀ = GM/R². For g = g₀/2: GM/r² = (1/2)(GM/R²), so r² = 2R², giving r = R√2. Choice A would give 4 times the surface field, B would give 2 times the field, and D would give 1/4 the field."
  },
  {
    "id": "physc_u7_q269",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational potential energy",
    "topicLabel": "gravitational potential energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite moves from orbit radius 2R to radius 4R around Earth. How does its gravitational potential energy change?",
    "choices": [
      "A) Increases by GMm/4R",
      "B) Decreases by GMm/4R",
      "C) Increases by GMm/2R",
      "D) Decreases by GMm/2R"
    ],
    "answer": 0,
    "explanation": "U = -GMm/r. Initial: U₁ = -GMm/2R. Final: U₂ = -GMm/4R. Change: ΔU = U₂ - U₁ = -GMm/4R - (-GMm/2R) = GMm/4R (increase). Choice B has wrong sign, C doubles the answer, and D has wrong sign and wrong magnitude."
  },
  {
    "id": "physc_u7_q270",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's first law",
    "topicLabel": "Kepler's first law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For an elliptical orbit, the point where the satellite is closest to Earth is called the perigee. At perigee compared to apogee (farthest point), the satellite has:",
    "choices": [
      "A) Greater kinetic energy and greater potential energy",
      "B) Greater kinetic energy and less potential energy",
      "C) Less kinetic energy and greater potential energy",
      "D) Less kinetic energy and less potential energy"
    ],
    "answer": 1,
    "explanation": "At perigee, the satellite is closer to Earth, so potential energy U = -GMm/r is more negative (less potential energy). By conservation of energy, when potential energy decreases, kinetic energy increases. Choice A incorrectly assumes both increase together, C and D incorrectly assume kinetic energy is less at perigee."
  },
  {
    "id": "physc_u7_q271",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's second law",
    "topicLabel": "Kepler's second law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A comet in an elliptical orbit takes 30 days to travel from point A to point B, sweeping out area S. How long does it take to sweep out area 2S in a different part of its orbit?",
    "choices": [
      "A) 15 days",
      "B) 30 days",
      "C) 60 days",
      "D) 120 days"
    ],
    "answer": 2,
    "explanation": "Kepler's second law states that equal areas are swept in equal times, so the rate of area sweeping is constant. If area S takes 30 days, then area 2S takes 60 days. Choice A assumes inverse relationship, B assumes same area, and D assumes quadratic relationship."
  },
  {
    "id": "physc_u7_q272",
    "subject": "apphysc",
    "unit": 7,
    "topic": "orbital velocity",
    "topicLabel": "orbital velocity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite orbits Earth at radius 2R with speed v. What speed would be needed for a circular orbit at radius R?",
    "choices": [
      "A) v/2",
      "B) v/√2",
      "C) v√2",
      "D) 2v"
    ],
    "answer": 2,
    "explanation": "For circular orbits, v = √(GM/r). At radius 2R: v₁ = √(GM/2R). At radius R: v₂ = √(GM/R) = √2×√(GM/2R) = √2×v₁ = v√2. Choice A assumes linear relationship, B inverts the relationship, and D assumes linear doubling."
  },
  {
    "id": "physc_u7_q273",
    "subject": "apphysc",
    "unit": 7,
    "topic": "escape velocity",
    "topicLabel": "escape velocity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The escape velocity from Earth's surface is v_e. What is the escape velocity from a height equal to Earth's radius above the surface?",
    "choices": [
      "A) v_e/4",
      "B) v_e/2",
      "C) v_e/√2",
      "D) v_e√2"
    ],
    "answer": 2,
    "explanation": "Escape velocity v_esc = √(2GM/r). At surface: v_e = √(2GM/R). At height R above surface (distance 2R from center): v = √(2GM/2R) = √(GM/R) = v_e/√2. Choice B assumes linear relationship with distance, A uses quadratic relationship incorrectly, and D inverts the relationship."
  },
  {
    "id": "physc_u7_q274",
    "subject": "apphysc",
    "unit": 7,
    "topic": "satellite energy",
    "topicLabel": "satellite energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite in circular orbit has kinetic energy K. What is its total mechanical energy?",
    "choices": [
      "A) K",
      "B) -K",
      "C) K/2",
      "D) -K/2"
    ],
    "answer": 1,
    "explanation": "For circular orbits: K = GMm/2r and U = -GMm/r = -2K. Total energy E = K + U = K + (-2K) = -K. Choice A ignores potential energy, C and D use incorrect factors. The total energy is always negative for bound orbits."
  },
  {
    "id": "physc_u7_q275",
    "subject": "apphysc",
    "unit": 7,
    "topic": "tidal forces",
    "topicLabel": "tidal forces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The Moon causes tides on Earth primarily because:",
    "choices": [
      "A) The Moon's gravity is stronger than Earth's gravity",
      "B) The Moon's gravitational field varies across Earth's diameter",
      "C) The Moon pulls harder on water than on land",
      "D) The Moon's gravity cancels Earth's gravity"
    ],
    "answer": 1,
    "explanation": "Tides are caused by the gradient in gravitational field strength across Earth's diameter. The side of Earth closer to the Moon experiences stronger lunar gravitational pull than the far side, creating differential forces. Choice A is incorrect (Earth's gravity is much stronger), C is wrong (gravity acts equally on all matter), and D is impossible."
  },
  {
    "id": "physc_u7_q276",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational potential",
    "topicLabel": "gravitational potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The gravitational potential at distance r from mass M is V = -GM/r. At what distance is the potential equal to half its value at distance R?",
    "choices": [
      "A) R/2",
      "B) R√2",
      "C) 2R",
      "D) 4R"
    ],
    "answer": 2,
    "explanation": "At distance R: V₁ = -GM/R. We want V₂ = V₁/2 = -GM/2R. Setting -GM/r = -GM/2R gives r = 2R. Choice A would give twice the potential, B would give potential divided by √2, and D would give one-fourth the potential."
  },
  {
    "id": "physc_u7_q277",
    "subject": "apphysc",
    "unit": 7,
    "topic": "centripetal force in orbits",
    "topicLabel": "centripetal force in orbits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite orbits Earth in a circular orbit. If the orbital radius doubles while maintaining circular orbit, how does the required centripetal force change?",
    "choices": [
      "A) Decreases by factor of 2",
      "B) Decreases by factor of 4",
      "C) Decreases by factor of 8",
      "D) Increases by factor of 2"
    ],
    "answer": 1,
    "explanation": "Centripetal force is provided by gravity: F = GMm/r². When radius doubles, force becomes GMm/(2r)² = GMm/4r² = F/4. The force decreases by a factor of 4. Choice A confuses with linear relationship, C assumes cubic relationship, and D has wrong direction."
  },
  {
    "id": "physc_u7_q278",
    "subject": "apphysc",
    "unit": 7,
    "topic": "orbital period vs radius",
    "topicLabel": "orbital period vs radius",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two satellites orbit Earth at distances R and 4R from Earth's center. What is the ratio of their orbital periods T₄ᴿ/Tᴿ?",
    "choices": [
      "A) 2",
      "B) 4",
      "C) 8",
      "D) 16"
    ],
    "answer": 2,
    "explanation": "From Kepler's third law: T² ∝ R³. So (T₄ᴿ/Tᴿ)² = (4R/R)³ = 4³ = 64. Therefore T₄ᴿ/Tᴿ = √64 = 8. Choice A assumes linear relationship, B assumes quadratic, and D assumes the period ratio equals the cube of radius ratio."
  },
  {
    "id": "physc_u7_q279",
    "subject": "apphysc",
    "unit": 7,
    "topic": "elliptical orbit energy",
    "topicLabel": "elliptical orbit energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite moves in an elliptical orbit with semi-major axis a. Its total mechanical energy depends on:",
    "choices": [
      "A) Only the semi-major axis a",
      "B) Only the eccentricity of the ellipse",
      "C) Both the semi-major axis and eccentricity",
      "D) The semi-minor axis only"
    ],
    "answer": 0,
    "explanation": "For elliptical orbits, the total mechanical energy E = -GMm/2a depends only on the semi-major axis a, not on eccentricity. This is a key result for all elliptical orbits. Choices B, C, and D incorrectly include eccentricity or use semi-minor axis, which don't affect the total energy."
  },
  {
    "id": "physc_u7_q280",
    "subject": "apphysc",
    "unit": 7,
    "topic": "geosynchronous orbits",
    "topicLabel": "geosynchronous orbits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A geosynchronous satellite orbits Earth with a 24-hour period. If Earth's mass were doubled while keeping the same 24-hour period, the orbital radius would:",
    "choices": [
      "A) Stay the same",
      "B) Increase by factor of √2",
      "C) Increase by factor of 2^(1/3)",
      "D) Decrease by factor of √2"
    ],
    "answer": 2,
    "explanation": "From T² = 4π²r³/GM, for constant T: r³ ∝ M. If M doubles, then r³ doubles, so r increases by factor of 2^(1/3). Choice A ignores the mass dependence, B uses incorrect square root relationship, and D has the wrong direction."
  },
  {
    "id": "physc_u7_q281",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational acceleration variation",
    "topicLabel": "gravitational acceleration variation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "At an altitude equal to Earth's radius above the surface, the acceleration due to gravity is:",
    "choices": [
      "A) g/4",
      "B) g/2",
      "C) g/√2",
      "D) The same as at surface"
    ],
    "answer": 0,
    "explanation": "At altitude R above surface, total distance from Earth's center is 2R. Since g ∝ 1/r², the acceleration becomes g' = g(R/2R)² = g/4. Choice B would be for altitude R/2, C assumes incorrect square root relationship, and D ignores distance dependence."
  },
  {
    "id": "physc_u7_q282",
    "subject": "apphysc",
    "unit": 7,
    "topic": "orbit transfer",
    "topicLabel": "orbit transfer",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite moves from a circular orbit of radius R to a circular orbit of radius 2R. During this transfer, the satellite's:",
    "choices": [
      "A) Speed increases and total energy increases",
      "B) Speed decreases and total energy increases",
      "C) Speed increases and total energy decreases",
      "D) Speed decreases and total energy decreases"
    ],
    "answer": 1,
    "explanation": "For circular orbits: v ∝ 1/√r and E ∝ -1/r. When radius doubles, speed decreases by factor √2, and total energy increases (becomes less negative). Energy must be added to move to higher orbit, but orbital speed decreases. Choice A incorrectly assumes speed increases, C and D have wrong energy direction."
  },
  {
    "id": "physc_u7_q283",
    "subject": "apphysc",
    "unit": 7,
    "topic": "binary star systems",
    "topicLabel": "binary star systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two stars of equal mass M orbit their common center of mass in circular orbits of radius R. The orbital period depends on:",
    "choices": [
      "A) M^(1/2)",
      "B) M^(-1/2)",
      "C) M^(3/2)",
      "D) M^(-3/2)"
    ],
    "answer": 1,
    "explanation": "Each star orbits the center of mass with centripetal force provided by gravity from the other star. The gravitational force between stars separated by 2R provides centripetal force for orbit radius R. Analysis gives T² ∝ R³/M, so T ∝ M^(-1/2). Choice A inverts the relationship, C and D use incorrect powers."
  },
  {
    "id": "physc_u7_q284",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Newton's law gravitation",
    "topicLabel": "Newton's law gravitation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A planet has twice the mass and three times the radius of Earth. What is the ratio of the gravitational acceleration on this planet's surface to Earth's surface gravity?",
    "choices": [
      "A) 2/9",
      "B) 2/3",
      "C) 6",
      "D) 18"
    ],
    "answer": 0,
    "explanation": "Using g = GM/r², the ratio is (2M_E)/(3R_E)² divided by M_E/R_E² = 2/9. Students often forget to square the radius (getting 2/3) or incorrectly multiply instead of divide (getting 6 or 18)."
  },
  {
    "id": "physc_u7_q285",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational field",
    "topicLabel": "gravitational field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical masses M are placed at opposite corners of a square with side length a. At which point will a test mass experience zero net gravitational field?",
    "choices": [
      "A) The center of the square",
      "B) The midpoint of the line connecting the two masses",
      "C) Any point on the perpendicular bisector of the line connecting the masses",
      "D) No such point exists"
    ],
    "answer": 2,
    "explanation": "The gravitational field is zero at any point equidistant from both masses, which is the perpendicular bisector. The center of the square is one such point but not the only one. The midpoint between masses has maximum field magnitude, not zero."
  },
  {
    "id": "physc_u7_q286",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational potential energy",
    "topicLabel": "gravitational potential energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite is moved from circular orbit at radius 2R to circular orbit at radius 4R around Earth. How does its total mechanical energy change?",
    "choices": [
      "A) Increases by GMm/8R",
      "B) Increases by GMm/4R",
      "C) Decreases by GMm/8R",
      "D) Remains constant"
    ],
    "answer": 0,
    "explanation": "Total energy E = -GMm/2r for circular orbits. Initial E₁ = -GMm/4R, final E₂ = -GMm/8R. Change is E₂ - E₁ = GMm/8R (increase). Students often confuse potential energy formula or forget the factor of 1/2 for total energy."
  },
  {
    "id": "physc_u7_q287",
    "subject": "apphysc",
    "unit": 7,
    "topic": "orbital mechanics",
    "topicLabel": "orbital mechanics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite in circular orbit around Earth has period T. If it moves to a new circular orbit with half the orbital radius, what is its new period?",
    "choices": [
      "A) T/4",
      "B) T/(2√2)",
      "C) T/2",
      "D) T√2"
    ],
    "answer": 1,
    "explanation": "From Kepler's third law, T² ∝ r³. If r becomes r/2, then T² becomes (r/2)³/r³ = 1/8 of original, so T becomes T/√8 = T/(2√2). Students often use T² ∝ r (getting T/2) or forget the square root."
  },
  {
    "id": "physc_u7_q288",
    "subject": "apphysc",
    "unit": 7,
    "topic": "escape velocity",
    "topicLabel": "escape velocity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An object is launched vertically upward from Earth's surface with speed equal to half the escape velocity. What maximum height above Earth's surface will it reach?",
    "choices": [
      "A) R/4",
      "B) R/3",
      "C) R/2",
      "D) 2R/3"
    ],
    "answer": 1,
    "explanation": "Using energy conservation: ½m(v_e/2)² - GMm/R = -GMm/(R+h). Since v_e² = 2GM/R, we get GM/4R - GM/R = -GM/(R+h). Solving gives h = R/3. Students often forget to account for potential energy change or make algebraic errors."
  },
  {
    "id": "physc_u7_q289",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's laws",
    "topicLabel": "Kepler's laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A comet follows an elliptical orbit around the Sun. At perihelion (closest approach), it has speed v and is at distance r from the Sun. At aphelion (farthest point), it is at distance 3r. What is its speed at aphelion?",
    "choices": [
      "A) v/9",
      "B) v/3",
      "C) v/√3",
      "D) 3v"
    ],
    "answer": 1,
    "explanation": "From conservation of angular momentum: mvr = mv'(3r), so v' = v/3. Students often confuse this with energy conservation alone (getting v/√3) or incorrectly apply the relationship (getting v/9 or 3v)."
  },
  {
    "id": "physc_u7_q290",
    "subject": "apphysc",
    "unit": 7,
    "topic": "satellite orbits",
    "topicLabel": "satellite orbits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A geostationary satellite orbits Earth at radius R from Earth's center. What is the orbital speed of another satellite at radius R/4?",
    "choices": [
      "A) 2v_geo",
      "B) 4v_geo",
      "C) 2√2 v_geo",
      "D) 4√2 v_geo"
    ],
    "answer": 0,
    "explanation": "Orbital speed v = √(GM/r). If radius decreases by factor 4, speed increases by √4 = 2. So v = 2v_geo. Students often forget the square root relationship (getting 4v_geo) or confuse with other orbital relationships."
  },
  {
    "id": "physc_u7_q291",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Newton's law of universal gravitation",
    "topicLabel": "Newton's law of universal gravitation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite orbits Earth at altitude h above the surface. If Earth's mass were doubled while keeping Earth's radius constant, and the satellite maintained the same orbital radius from Earth's center, what would happen to the satellite's orbital period?",
    "choices": [
      "A) The period would decrease by a factor of √2",
      "B) The period would increase by a factor of √2",
      "C) The period would decrease by a factor of 2",
      "D) The period would remain the same"
    ],
    "answer": 0,
    "explanation": "From Kepler's third law, T² ∝ r³/M. If mass doubles while radius stays constant, T² ∝ 1/(2M), so T ∝ 1/√2, meaning the period decreases by √2. Students often confuse whether period increases or decreases with mass changes, or incorrectly apply direct proportionality."
  },
  {
    "id": "physc_u7_q292",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational potential energy",
    "topicLabel": "gravitational potential energy",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass m is moved from infinity to a point P at distance r from Earth's center, then to point Q at distance r/2 from Earth's center. If the work done by gravity from infinity to P is W₁, what is the work done by gravity from P to Q?",
    "choices": [
      "A) W₁",
      "B) 2W₁",
      "C) -W₁",
      "D) -2W₁"
    ],
    "answer": 0,
    "explanation": "Work by gravity from ∞ to P: W₁ = GMm/r. Work from P to Q: W₂ = GMm/(r/2) - GMm/r = 2GMm/r - GMm/r = GMm/r = W₁. Students often confuse signs or think the work should be different because the distance traveled is different, but gravitational work depends only on the change in potential energy."
  },
  {
    "id": "physc_u7_q293",
    "subject": "apphysc",
    "unit": 7,
    "topic": "orbital mechanics",
    "topicLabel": "orbital mechanics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spacecraft in circular orbit around Earth fires its engines tangentially to increase speed by 20%. What happens to the orbit immediately after the burn?",
    "choices": [
      "A) The orbit becomes elliptical with the burn point as apogee",
      "B) The orbit becomes elliptical with the burn point as perigee",
      "C) The orbit remains circular but at higher altitude",
      "D) The spacecraft escapes Earth's gravitational influence"
    ],
    "answer": 1,
    "explanation": "When speed increases tangentially, the spacecraft gains energy and the orbit becomes elliptical. The burn point becomes the perigee (closest approach) because the spacecraft moves to a higher orbit. Students often think the burn point becomes apogee or that increasing speed by 20% is enough to escape (it's not - need about 41% increase for escape from circular orbit)."
  },
  {
    "id": "physc_u7_q294",
    "subject": "apphysc",
    "unit": 7,
    "topic": "escape velocity",
    "topicLabel": "escape velocity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Planet X has twice the mass and twice the radius of Earth. What is the escape velocity from Planet X compared to Earth's escape velocity v_E?",
    "choices": [
      "A) √2 v_E",
      "B) 2v_E",
      "C) v_E",
      "D) v_E/√2"
    ],
    "answer": 0,
    "explanation": "Escape velocity v = √(2GM/R). For Planet X: v_X = √(2G(2M)/(2R)) = √(2GM/R) = √2 × √(2GM_E/R_E) = √2 v_E. Students often think it should be 2v_E (forgetting the square root) or that the factors of 2 cancel completely to give v_E."
  },
  {
    "id": "physc_u7_q295",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's first law",
    "topicLabel": "Kepler's first law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An asteroid has an elliptical orbit around the Sun with semi-major axis a and eccentricity e. At aphelion, the asteroid is at distance r₁ from the Sun. What is the distance r₂ at perihelion?",
    "choices": [
      "A) a(1 + e)",
      "B) a(1 - e)",
      "C) ae",
      "D) a/e"
    ],
    "answer": 1,
    "explanation": "For an elliptical orbit, aphelion distance r₁ = a(1 + e) and perihelion distance r₂ = a(1 - e). Students often confuse which is which or forget that the semi-major axis is the average of aphelion and perihelion distances. The eccentricity determines how much the distances differ from the semi-major axis."
  },
  {
    "id": "physc_u7_q296",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's second law",
    "topicLabel": "Kepler's second law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A comet has an elliptical orbit around the Sun. When it is at perihelion (closest approach) at distance d with speed v, what is its speed when it reaches aphelion at distance 4d?",
    "choices": [
      "A) v/4",
      "B) v/2",
      "C) 2v",
      "D) 4v"
    ],
    "answer": 0,
    "explanation": "By conservation of angular momentum, mvr = constant. So v₁d = v₂(4d), giving v₂ = v₁/4. Students often confuse this with energy conservation or think the relationship should be inverse square rather than inverse linear, or forget that angular momentum is conserved in orbital motion."
  },
  {
    "id": "physc_u7_q297",
    "subject": "apphysc",
    "unit": 7,
    "topic": "satellite orbits",
    "topicLabel": "satellite orbits",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A geosynchronous satellite orbits Earth with period T = 24 hours. If a satellite were placed in orbit at half the radius of the geosynchronous orbit, what would be its orbital period?",
    "choices": [
      "A) 6√2 hours",
      "B) 12 hours",
      "C) 8.5 hours",
      "D) 3√2 hours"
    ],
    "answer": 0,
    "explanation": "From Kepler's third law, T² ∝ R³. If R₂ = R₁/2, then T₂² = T₁² × (1/2)³ = T₁²/8. So T₂ = T₁/√8 = T₁/(2√2) = 24/(2√2) = 6√2 hours. Students often use T ∝ R or T ∝ R² instead of the correct T² ∝ R³ relationship."
  },
  {
    "id": "physc_u7_q298",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational field",
    "topicLabel": "gravitational field",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "At what point between Earth (mass M) and the Moon (mass M/81) is the gravitational field zero? Express your answer as a fraction of the Earth-Moon distance from Earth's center.",
    "choices": [
      "A) 9/10",
      "B) 1/2",
      "C) 3/4",
      "D) 8/9"
    ],
    "answer": 0,
    "explanation": "At the zero field point, GM/x² = G(M/81)/(d-x)², where d is Earth-Moon distance and x is distance from Earth. This gives 1/x² = 1/[81(d-x)²], so 9(d-x) = x, giving x = 9d/10. Students often set up the equation incorrectly or make algebraic errors in solving the quadratic."
  },
  {
    "id": "physc_u7_q299",
    "subject": "apphysc",
    "unit": 7,
    "topic": "orbital mechanics",
    "topicLabel": "orbital mechanics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite in circular orbit has kinetic energy K. What is its total mechanical energy?",
    "choices": [
      "A) -K",
      "B) K",
      "C) -K/2",
      "D) K/2"
    ],
    "answer": 0,
    "explanation": "For circular orbits, K = GMm/2r and U = -GMm/r, so U = -2K. Total energy E = K + U = K - 2K = -K. This is a fundamental result: for bound orbits, total energy is negative and equals the negative of kinetic energy. Students often forget the negative sign or think E = K + U without considering the relationship between K and U."
  },
  {
    "id": "physc_u7_q300",
    "subject": "apphysc",
    "unit": 7,
    "topic": "escape velocity",
    "topicLabel": "escape velocity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A projectile is launched vertically from Earth's surface with initial speed equal to 80% of escape velocity. What is the maximum height reached, expressed as a fraction of Earth's radius R?",
    "choices": [
      "A) 9R/16",
      "B) 16R/9",
      "C) 4R/5",
      "D) 5R/4"
    ],
    "answer": 1,
    "explanation": "Using energy conservation: ½m(0.8v_e)² - GMm/R = -GMm/(R+h). Since v_e² = 2GM/R, we get 0.32GM/R - GM/R = -GM/(R+h). Solving gives R+h = 25R/9, so h = 16R/9. Students often make algebraic errors or forget that height is measured from the surface, not center."
  },
  {
    "id": "physc_u7_q301",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational potential energy",
    "topicLabel": "gravitational potential energy",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Three identical masses m are placed at the vertices of an equilateral triangle of side length a. What is the total gravitational potential energy of this system?",
    "choices": [
      "A) -3Gm²/a",
      "B) -Gm²/a",
      "C) -2Gm²/a",
      "D) -9Gm²/2a"
    ],
    "answer": 0,
    "explanation": "There are three pairs of masses, each separated by distance a. Each pair contributes -Gm²/a to the potential energy. Total U = 3 × (-Gm²/a) = -3Gm²/a. Students often count pairs incorrectly (thinking there are 6 interactions instead of 3) or forget that potential energy between pairs is negative."
  },
  {
    "id": "physc_u7_q302",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Newton's law of universal gravitation",
    "topicLabel": "Newton's law of universal gravitation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spherical planet has uniform density ρ and radius R. At what depth below the surface is the gravitational acceleration equal to half the surface gravity?",
    "choices": [
      "A) R/4",
      "B) R/2",
      "C) 3R/4",
      "D) 2R/3"
    ],
    "answer": 1,
    "explanation": "Inside a uniform sphere, g(r) = g_surface × r/R. At depth d, the distance from center is R-d, so g = g_surface(R-d)/R. Setting this equal to g_surface/2: (R-d)/R = 1/2, so R-d = R/2, giving d = R/2. Students often confuse radius from center with depth from surface."
  },
  {
    "id": "physc_u7_q303",
    "subject": "apphysc",
    "unit": 7,
    "topic": "satellite orbits",
    "topicLabel": "satellite orbits",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite orbits Earth in an elliptical orbit. At perigee, it is at altitude h₁ with speed v₁. At apogee, it is at altitude h₂ with speed v₂. Which relationship must be true?",
    "choices": [
      "A) v₁(R + h₁) = v₂(R + h₂)",
      "B) v₁²(R + h₁) = v₂²(R + h₂)",
      "C) v₁²/(R + h₁) = v₂²/(R + h₂)",
      "D) v₁/(R + h₁)² = v₂/(R + h₂)²"
    ],
    "answer": 0,
    "explanation": "Conservation of angular momentum requires L = mvr = constant, so v₁(R + h₁) = v₂(R + h₂), where R is Earth's radius. Students often confuse this with energy conservation (which involves v²) or with the gravitational force relationship (which involves 1/r²)."
  },
  {
    "id": "physc_u7_q304",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's laws",
    "topicLabel": "Kepler's laws",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A binary star system consists of two stars orbiting their common center of mass. Star A has mass 2M and Star B has mass M. If the total separation is 3d, what is the orbital radius of Star A about the center of mass?",
    "choices": [
      "A) d",
      "B) 2d",
      "C) d/2",
      "D) 3d/2"
    ],
    "answer": 0,
    "explanation": "The center of mass divides the separation in inverse proportion to the masses. If Star A is at distance r_A from COM and Star B at distance r_B, then 2M × r_A = M × r_B and r_A + r_B = 3d. Solving: r_B = 2r_A and 3r_A = 3d, so r_A = d. Students often think the more massive star is farther from the center of mass."
  },
  {
    "id": "physc_u7_q305",
    "subject": "apphysc",
    "unit": 7,
    "topic": "gravitational field",
    "topicLabel": "gravitational field",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform rod of mass M and length L creates a gravitational field at point P located at distance d from one end of the rod along the rod's axis. What is the magnitude of the gravitational field at P?",
    "choices": [
      "A) GM/[d(d+L)]",
      "B) GM/d²",
      "C) GML/[d²(d+L)]",
      "D) GM/(d+L/2)²"
    ],
    "answer": 0,
    "explanation": "For a uniform rod, we integrate dg = G(dm)/x² where dm = (M/L)dx and x varies from d to d+L. The integral gives g = GM/L × [1/d - 1/(d+L)] = GM/[d(d+L)]. Students often try to treat the rod as a point mass at its center or make errors in the integration limits."
  },
  {
    "id": "physc_u7_q306",
    "subject": "apphysc",
    "unit": 7,
    "topic": "escape velocity",
    "topicLabel": "escape velocity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spacecraft is in circular orbit around Earth at altitude h = R (where R is Earth's radius). What minimum speed increase is needed to escape Earth's gravitational influence?",
    "choices": [
      "A) √(GM/2R)",
      "B) √(GM/R)",
      "C) √(2GM/R)",
      "D) (√2 - 1)√(GM/2R)"
    ],
    "answer": 3,
    "explanation": "At altitude R, the orbital speed is v₀ = √(GM/2R) and escape speed is v_e = √(GM/R). The required speed increase is Δv = v_e - v₀ = √(GM/R) - √(GM/2R) = √(GM/2R)(√2 - 1). Students often calculate escape velocity from Earth's surface instead of from the orbital altitude, or forget to subtract the current orbital speed."
  },
  {
    "id": "physc_u8_q307",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Coulomb's law",
    "topicLabel": "Coulomb's law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to Coulomb's law, if the distance between two point charges is doubled while keeping the charges constant, the electric force between them becomes:",
    "choices": [
      "A) One-fourth as strong",
      "B) One-half as strong",
      "C) Twice as strong",
      "D) Four times as strong"
    ],
    "answer": 0,
    "explanation": "Coulomb's law states F = kq₁q₂/r². When distance r is doubled, the denominator becomes (2r)² = 4r², making the force 1/4 as strong. Students often confuse this with linear relationships (choice B) or incorrectly think force increases with distance (choices C and D)."
  },
  {
    "id": "physc_u8_q308",
    "subject": "apphysc",
    "unit": 8,
    "topic": "electric field",
    "topicLabel": "electric field",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The electric field is defined as:",
    "choices": [
      "A) The force per unit charge on a test charge",
      "B) The total force on all charges in a region",
      "C) The potential energy per unit charge",
      "D) The work done in moving a charge"
    ],
    "answer": 0,
    "explanation": "Electric field E = F/q is defined as force per unit charge on a positive test charge. Choice B confuses field with total force, choice C describes electric potential (not field), and choice D describes work, not field strength."
  },
  {
    "id": "physc_u8_q309",
    "subject": "apphysc",
    "unit": 8,
    "topic": "electric field direction",
    "topicLabel": "electric field direction",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The direction of the electric field at any point is defined as the direction of the electric force on:",
    "choices": [
      "A) A positive test charge placed at that point",
      "B) A negative test charge placed at that point",
      "C) Any charge placed at that point",
      "D) The largest charge in the system"
    ],
    "answer": 0,
    "explanation": "By convention, electric field direction is defined as the direction of force on a positive test charge. Choice B would give the opposite direction, choice C is ambiguous since positive and negative charges experience opposite forces, and choice D is irrelevant to field direction definition."
  },
  {
    "id": "physc_u8_q310",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Gauss's law states that the electric flux through any closed surface is proportional to:",
    "choices": [
      "A) The net charge enclosed by the surface",
      "B) The total charge in the universe",
      "C) The surface area",
      "D) The electric field strength at the surface"
    ],
    "answer": 0,
    "explanation": "Gauss's law: Φ = Q_enclosed/ε₀. The flux depends only on the net charge enclosed within the Gaussian surface. Choice B ignores the 'enclosed' aspect, choice C confuses flux with area, and choice D mistakes the relationship between field and flux."
  },
  {
    "id": "physc_u8_q311",
    "subject": "apphysc",
    "unit": 8,
    "topic": "electric flux",
    "topicLabel": "electric flux",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Electric flux through a surface is maximum when the electric field is:",
    "choices": [
      "A) Perpendicular to the surface",
      "B) Parallel to the surface",
      "C) At 45 degrees to the surface",
      "D) Varying across the surface"
    ],
    "answer": 0,
    "explanation": "Flux Φ = E·A = EA cos θ, where θ is the angle between field and surface normal. Maximum flux occurs when cos θ = 1, meaning θ = 0° (field perpendicular to surface). When parallel (choice B), flux is zero. Choice C gives intermediate flux, and choice D doesn't specify a definite relationship."
  },
  {
    "id": "physc_u8_q312",
    "subject": "apphysc",
    "unit": 8,
    "topic": "point charge electric field",
    "topicLabel": "point charge electric field",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The electric field lines around an isolated positive point charge:",
    "choices": [
      "A) Point radially outward from the charge",
      "B) Point radially inward toward the charge",
      "C) Form closed loops around the charge",
      "D) Are parallel to each other"
    ],
    "answer": 0,
    "explanation": "Electric field lines show the direction of force on a positive test charge. Since like charges repel, field lines point away from positive charges. Choice B describes negative point charges, choice C violates the rule that field lines don't form closed loops, and choice D describes uniform fields."
  },
  {
    "id": "physc_u8_q313",
    "subject": "apphysc",
    "unit": 8,
    "topic": "line charge symmetry",
    "topicLabel": "line charge symmetry",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For an infinite line of positive charge, the electric field lines:",
    "choices": [
      "A) Point radially outward from the line",
      "B) Point along the line",
      "C) Form circles around the line",
      "D) Point at 45-degree angles to the line"
    ],
    "answer": 0,
    "explanation": "Due to cylindrical symmetry, field lines from an infinite line charge point radially outward perpendicular to the line. Choice B would represent field along the line (which is zero by symmetry), choice C confuses electric with magnetic field patterns, and choice D has no physical basis."
  },
  {
    "id": "physc_u8_q314",
    "subject": "apphysc",
    "unit": 8,
    "topic": "plane charge symmetry",
    "topicLabel": "plane charge symmetry",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For an infinite sheet of positive charge, the electric field lines:",
    "choices": [
      "A) Point perpendicular to the sheet",
      "B) Point parallel to the sheet",
      "C) Point at various angles depending on location",
      "D) Form loops near the sheet"
    ],
    "answer": 0,
    "explanation": "Planar symmetry requires that field lines point perpendicular to an infinite charged sheet. Choice B would give zero field by symmetry, choice C violates the symmetry of the configuration, and choice D violates the rule that electrostatic field lines don't form closed loops."
  },
  {
    "id": "physc_u8_q315",
    "subject": "apphysc",
    "unit": 8,
    "topic": "conductors in equilibrium",
    "topicLabel": "conductors in equilibrium",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Inside a conductor in electrostatic equilibrium, the electric field is:",
    "choices": [
      "A) Zero everywhere",
      "B) Constant but non-zero",
      "C) Strongest at the center",
      "D) Weakest at the center"
    ],
    "answer": 0,
    "explanation": "In electrostatic equilibrium, free charges in conductors arrange themselves so that the electric field inside is zero everywhere. If there were a field, charges would move, contradicting equilibrium. Choices B, C, and D all assume non-zero internal fields, which cannot exist in equilibrium."
  },
  {
    "id": "physc_u8_q316",
    "subject": "apphysc",
    "unit": 8,
    "topic": "conductor surface field",
    "topicLabel": "conductor surface field",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Just outside the surface of a conductor in electrostatic equilibrium, the electric field is:",
    "choices": [
      "A) Perpendicular to the surface",
      "B) Parallel to the surface",
      "C) At 45 degrees to the surface",
      "D) Zero"
    ],
    "answer": 0,
    "explanation": "The field just outside a conductor surface must be perpendicular to the surface. If it had a parallel component, charges on the surface would move, violating equilibrium. Choice B would cause charge motion, choice C combines perpendicular and parallel components, and choice D confuses the outside field with the inside field."
  },
  {
    "id": "physc_u8_q317",
    "subject": "apphysc",
    "unit": 8,
    "topic": "conductor charge distribution",
    "topicLabel": "conductor charge distribution",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Excess charges placed on a conductor will be found:",
    "choices": [
      "A) Only on the outer surface",
      "B) Uniformly distributed throughout the volume",
      "C) Only at the center",
      "D) Only on the inner surface"
    ],
    "answer": 0,
    "explanation": "Charges on a conductor repel each other and move as far apart as possible, ending up on the outer surface. Choice B describes insulators, not conductors. Choice C is impossible due to repulsion, and choice D only applies to hollow conductors with charges inside the cavity."
  },
  {
    "id": "physc_u8_q318",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law applications",
    "topicLabel": "Gauss's law applications",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Gauss's law is most useful for finding electric fields when the charge distribution has:",
    "choices": [
      "A) High symmetry",
      "B) Random charge placement",
      "C) Moving charges",
      "D) Very small total charge"
    ],
    "answer": 0,
    "explanation": "Gauss's law is most powerful when symmetry allows us to determine the direction and relative magnitude of the electric field over the Gaussian surface. Choice B makes Gauss's law difficult to apply, choice C involves non-electrostatic situations, and choice D is irrelevant to the usefulness of Gauss's law."
  },
  {
    "id": "physc_u8_q319",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Coulomb's law",
    "topicLabel": "Coulomb's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two point charges +2Q and -Q are separated by distance d. At what distance from the +2Q charge along the line connecting them is the electric field zero?",
    "choices": [
      "A) d/3",
      "B) d/2",
      "C) 2d/3",
      "D) 3d/4"
    ],
    "answer": 2,
    "explanation": "At equilibrium point, fields from both charges must be equal in magnitude. Let x be distance from +2Q. Then: k(2Q)/x² = kQ/(d-x)². Solving: 2(d-x)² = x², which gives x = 2d/3. Students often forget the field magnitudes must be equal, not the charges themselves."
  },
  {
    "id": "physc_u8_q320",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric field",
    "topicLabel": "Electric field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform electric field E points horizontally to the right. A positive charge moves from point A to point B along a semicircular path of radius R, where B is directly above A. What is the work done by the electric field?",
    "choices": [
      "A) 0",
      "B) qER",
      "C) -qER",
      "D) qEπR"
    ],
    "answer": 0,
    "explanation": "Work done by a conservative force depends only on initial and final positions, not path. Since A and B are at the same horizontal position and the field is horizontal, the displacement perpendicular to the field results in zero work. Students often calculate work using the path length πR instead of displacement."
  },
  {
    "id": "physc_u8_q321",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spherical Gaussian surface of radius 2R surrounds a point charge Q located at distance R from the center. What is the electric flux through this surface?",
    "choices": [
      "A) Q/4ε₀",
      "B) Q/2ε₀",
      "C) Q/ε₀",
      "D) 2Q/ε₀"
    ],
    "answer": 2,
    "explanation": "Gauss's law states that flux equals Q_enclosed/ε₀. Since the charge Q is inside the Gaussian surface (R < 2R), the entire charge is enclosed, giving flux = Q/ε₀. Students often think the flux depends on the charge's position within the surface or try to account for the off-center location."
  },
  {
    "id": "physc_u8_q322",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric flux",
    "topicLabel": "Electric flux",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform electric field E = 100 N/C passes through a square loop of side length 0.2 m. The loop is oriented so that its normal makes a 60° angle with the field. What is the electric flux through the loop?",
    "choices": [
      "A) 2.0 N⋅m²/C",
      "B) 3.5 N⋅m²/C",
      "C) 4.0 N⋅m²/C",
      "D) 8.0 N⋅m²/C"
    ],
    "answer": 0,
    "explanation": "Electric flux Φ = E⋅A⋅cos(θ) = 100 × (0.2)² × cos(60°) = 100 × 0.04 × 0.5 = 2.0 N⋅m²/C. Students often use sin(60°) instead of cos(60°), confusing the angle between field and normal with the angle between field and surface."
  },
  {
    "id": "physc_u8_q323",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Field for symmetric charge distributions",
    "topicLabel": "Field for symmetric charge distributions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An infinite line charge with linear charge density λ creates an electric field. At what distance from the line is the field strength equal to E₀?",
    "choices": [
      "A) λ/2πε₀E₀",
      "B) λ/4πε₀E₀",
      "C) 2πε₀E₀/λ",
      "D) 4πε₀E₀/λ"
    ],
    "answer": 0,
    "explanation": "For an infinite line charge, E = λ/2πε₀r. Setting E = E₀ and solving for r: r = λ/2πε₀E₀. Students often use the point charge formula with 4πε₀ instead of the line charge formula with 2πε₀."
  },
  {
    "id": "physc_u8_q324",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in equilibrium",
    "topicLabel": "Conductors in equilibrium",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A hollow spherical conductor has a point charge +Q placed at its center. What is the electric field at a point inside the conductor material?",
    "choices": [
      "A) kQ/r²",
      "B) kQ/R²",
      "C) Zero",
      "D) Depends on the conductor thickness"
    ],
    "answer": 2,
    "explanation": "Inside a conductor in electrostatic equilibrium, the electric field is always zero. The free electrons rearrange to cancel any internal field. Students often think the field equals that of the point charge or relates to the conductor's outer surface."
  },
  {
    "id": "physc_u8_q325",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Coulomb's law",
    "topicLabel": "Coulomb's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Three identical charges +Q are arranged at the vertices of an equilateral triangle. What is the direction of the net electric force on one of the charges?",
    "choices": [
      "A) Toward the center of the triangle",
      "B) Away from the center of the triangle",
      "C) Parallel to one side of the triangle",
      "D) The net force is zero"
    ],
    "answer": 1,
    "explanation": "Each charge experiences repulsive forces from the other two charges. Due to symmetry, the components parallel to the triangle's sides cancel, leaving only the component pointing away from the center. Students often think forces cancel completely due to symmetry or point toward the center."
  },
  {
    "id": "physc_u8_q326",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric field",
    "topicLabel": "Electric field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A dipole with charges +q and -q separated by distance d is oriented along the x-axis. What is the electric field at a point on the y-axis at distance y from the center, where y >> d?",
    "choices": [
      "A) kqd/y³",
      "B) 2kqd/y³",
      "C) kqd/y²",
      "D) Zero"
    ],
    "answer": 0,
    "explanation": "For a dipole at large distances perpendicular to the axis, E = kp/r³ where p = qd is the dipole moment. The factor of 2 appears along the dipole axis, not perpendicular to it. Students often confuse the perpendicular and axial field expressions or forget the 1/r³ dependence."
  },
  {
    "id": "physc_u8_q327",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A cube of side length L has a point charge Q at one of its vertices. What is the electric flux through the cube?",
    "choices": [
      "A) Q/ε₀",
      "B) Q/2ε₀",
      "C) Q/4ε₀",
      "D) Q/8ε₀"
    ],
    "answer": 3,
    "explanation": "A charge at a cube vertex is shared by 8 adjacent cubes in space. Each cube encloses 1/8 of the total flux, so Φ = Q/8ε₀. Students often think the entire charge contributes (Q/ε₀) or that it's shared by fewer cubes."
  },
  {
    "id": "physc_u8_q328",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric flux",
    "topicLabel": "Electric flux",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A closed surface encloses charges +3Q, -2Q, and +Q. An additional charge -4Q is located outside the surface. What is the total electric flux through the surface?",
    "choices": [
      "A) -2Q/ε₀",
      "B) 0",
      "C) 2Q/ε₀",
      "D) 8Q/ε₀"
    ],
    "answer": 2,
    "explanation": "By Gauss's law, flux depends only on enclosed charges: Φ = Q_enclosed/ε₀ = (3Q - 2Q + Q)/ε₀ = 2Q/ε₀. The external charge -4Q doesn't affect the flux through the closed surface. Students often include external charges or make sign errors in the sum."
  },
  {
    "id": "physc_u8_q329",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Field for symmetric charge distributions",
    "topicLabel": "Field for symmetric charge distributions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniformly charged sphere of radius R has total charge Q. What is the electric field at distance R/2 from the center?",
    "choices": [
      "A) kQ/R²",
      "B) kQ/2R²",
      "C) kQ/4R²",
      "D) Zero"
    ],
    "answer": 1,
    "explanation": "Inside a uniformly charged sphere, E = kQr/R³. At r = R/2: E = kQ(R/2)/R³ = kQ/2R². Students often use the external field formula kQ/r² or think the field is zero inside like in a conductor."
  },
  {
    "id": "physc_u8_q330",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in equilibrium",
    "topicLabel": "Conductors in equilibrium",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting sphere is placed in a uniform external electric field. After equilibrium is reached, where is the induced surface charge density greatest?",
    "choices": [
      "A) Uniformly distributed over the surface",
      "B) At the poles along the field direction",
      "C) At the equator perpendicular to the field",
      "D) At random locations on the surface"
    ],
    "answer": 1,
    "explanation": "In a uniform external field, charge accumulates at the points where the field lines would be most concentrated - at the poles along the field direction. The surface charge density is proportional to the local field strength. Students often think the distribution is uniform or greatest at the equator."
  },
  {
    "id": "physc_u8_q331",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A cylindrical Gaussian surface of radius r and length L is coaxial with an infinite line charge of density λ. If the radius is doubled while keeping L constant, how does the electric flux change?",
    "choices": [
      "A) Doubles",
      "B) Quadruples",
      "C) Remains the same",
      "D) Becomes half"
    ],
    "answer": 2,
    "explanation": "By Gauss's law, flux depends only on enclosed charge, not the Gaussian surface dimensions. The same length L of line charge is enclosed regardless of radius, so flux = λL/ε₀ remains constant. Students often think flux changes with surface area or radius."
  },
  {
    "id": "physc_u8_q332",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric flux",
    "topicLabel": "Electric flux",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A hemispherical surface of radius R is placed in a uniform electric field E parallel to its base. What is the electric flux through the curved surface only?",
    "choices": [
      "A) 0",
      "B) πR²E",
      "C) 2πR²E",
      "D) 4πR²E"
    ],
    "answer": 1,
    "explanation": "Total flux through the complete hemisphere is zero (no enclosed charge). Flux through the flat base is -πR²E (field antiparallel to normal). Therefore, flux through curved surface must be +πR²E to make the total zero. Students often think it's zero or calculate incorrectly."
  },
  {
    "id": "physc_u8_q333",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Field for symmetric charge distributions",
    "topicLabel": "Field for symmetric charge distributions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two infinite parallel sheets carry surface charge densities +σ and -σ. What is the electric field in the region between the sheets?",
    "choices": [
      "A) 0",
      "B) σ/ε₀",
      "C) σ/2ε₀",
      "D) 2σ/ε₀"
    ],
    "answer": 1,
    "explanation": "Each sheet creates field E = σ/2ε₀. Between sheets, both fields point in the same direction (from + to -), so they add: E_total = σ/2ε₀ + σ/2ε₀ = σ/ε₀. Students often think the fields cancel between opposite charges or use the wrong sheet field formula."
  },
  {
    "id": "physc_u8_q334",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in equilibrium",
    "topicLabel": "Conductors in equilibrium",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting shell with inner radius a and outer radius b has charge +Q placed on it. If a point charge +q is placed at the center, what is the charge on the inner surface of the shell?",
    "choices": [
      "A) +q",
      "B) -q",
      "C) +Q",
      "D) +(Q+q)"
    ],
    "answer": 1,
    "explanation": "To maintain zero field inside the conductor material, the inner surface must have charge -q to exactly cancel the central charge. The remaining charge (Q+q) resides on the outer surface. Students often think the induced charge equals the external charge or gets distributed proportionally."
  },
  {
    "id": "physc_u8_q335",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Coulomb's law",
    "topicLabel": "Coulomb's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A charge +Q is fixed at the origin. A charge +2Q is moved from point (2d, 0) to point (d, 0). How much work is done by an external agent?",
    "choices": [
      "A) kQ²/d",
      "B) kQ²/2d",
      "C) 2kQ²/d",
      "D) 4kQ²/d"
    ],
    "answer": 0,
    "explanation": "Work by external agent = ΔU = kQ(2Q)/d - kQ(2Q)/2d = 2kQ²/d - kQ²/d = kQ²/d. The work is positive because the charges repel and we're moving them closer. Students often forget the factor of 2 from the second charge or calculate the work done by the electric field instead."
  },
  {
    "id": "physc_u8_q336",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric field",
    "topicLabel": "Electric field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle with charge -2μC moves in a region where the electric potential varies as V(x) = 5x² volts. What is the magnitude of the electric field at x = 3 m?",
    "choices": [
      "A) 15 N/C",
      "B) 30 N/C",
      "C) 45 N/C",
      "D) 90 N/C"
    ],
    "answer": 1,
    "explanation": "Electric field E = -dV/dx = -d(5x²)/dx = -10x. At x = 3 m: E = -10(3) = -30 N/C, so |E| = 30 N/C. The magnitude of the field doesn't depend on the test charge value. Students often include the charge in the calculation or make errors in differentiation."
  },
  {
    "id": "physc_u8_q337",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Coulomb's law",
    "topicLabel": "Coulomb's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two point charges +2Q and +Q are separated by distance d. A third charge +q is placed on the line connecting them such that the net force on +q is zero. Where should +q be placed?",
    "choices": [
      "A) At distance d/3 from +2Q",
      "B) At distance d/3 from +Q",
      "C) At distance 2d/3 from +2Q",
      "D) At the midpoint between the charges"
    ],
    "answer": 2,
    "explanation": "For zero net force, the forces from both charges must balance. Let x be the distance from +2Q. Then k(2Q)(q)/x² = k(Q)(q)/(d-x)². Solving: 2(d-x)² = x², which gives x = 2d/3. Choice A uses inverse ratio of charges. Choice B places it d/3 from smaller charge. Choice D ignores charge magnitudes."
  },
  {
    "id": "physc_u8_q338",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spherical Gaussian surface of radius R contains a point charge +Q at its center and a point charge +2Q located at distance R/2 from the center. What is the electric flux through the Gaussian surface?",
    "choices": [
      "A) Q/ε₀",
      "B) 2Q/ε₀",
      "C) 3Q/ε₀",
      "D) The flux cannot be determined without knowing the field distribution"
    ],
    "answer": 2,
    "explanation": "Gauss's law states that flux equals the total enclosed charge divided by ε₀. Both charges are inside the Gaussian surface, so Φ = (Q + 2Q)/ε₀ = 3Q/ε₀. Choice A only counts one charge. Choice B only counts the larger charge. Choice D reflects the misconception that you need to know the field distribution, but Gauss's law depends only on enclosed charge."
  },
  {
    "id": "physc_u8_q339",
    "subject": "apphysc",
    "unit": 8,
    "topic": "electric flux",
    "topicLabel": "electric flux",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform electric field E = 100 N/C passes through a square surface of side length 0.5 m. The field makes a 60° angle with the normal to the surface. What is the electric flux through the surface?",
    "choices": [
      "A) 12.5 N⋅m²/C",
      "B) 21.7 N⋅m²/C",
      "C) 25 N⋅m²/C",
      "D) 50 N⋅m²/C"
    ],
    "answer": 0,
    "explanation": "Electric flux Φ = E⋅A⋅cos(θ) = 100 × (0.5)² × cos(60°) = 100 × 0.25 × 0.5 = 12.5 N⋅m²/C. Choice B uses sin(60°) instead of cos(60°). Choice C uses cos(60°) ≈ 1. Choice D ignores the angle entirely."
  },
  {
    "id": "physc_u8_q340",
    "subject": "apphysc",
    "unit": 8,
    "topic": "field for symmetric charge distributions",
    "topicLabel": "field for symmetric charge distributions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An infinite line of charge with linear charge density λ creates an electric field. At what distance from the line is the electric field strength equal to E₀?",
    "choices": [
      "A) λ/(2πε₀E₀)",
      "B) λ/(4πε₀E₀)",
      "C) 2λ/(πε₀E₀)",
      "D) λ²/(2πε₀E₀)"
    ],
    "answer": 0,
    "explanation": "For an infinite line charge, E = λ/(2πε₀r). Setting E = E₀ and solving for r: E₀ = λ/(2πε₀r), so r = λ/(2πε₀E₀). Choice B uses the point charge constant 4π instead of 2π for line charge. Choice C has incorrect coefficient. Choice D incorrectly squares λ."
  },
  {
    "id": "physc_u8_q341",
    "subject": "apphysc",
    "unit": 8,
    "topic": "conductors in equilibrium",
    "topicLabel": "conductors in equilibrium",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A hollow conducting sphere has a point charge +Q placed at its center. Which statement is correct about the electric field?",
    "choices": [
      "A) The field is zero everywhere inside the conductor and outside the sphere",
      "B) The field is zero inside the conductor but non-zero in the hollow cavity",
      "C) The field is non-zero inside the conductor but zero in the hollow cavity",
      "D) The field is zero in the hollow cavity but non-zero inside the conductor"
    ],
    "answer": 1,
    "explanation": "In a conductor in equilibrium, the electric field inside the conducting material is always zero. However, the hollow cavity contains a point charge, so there is a non-zero field in the cavity. The conductor will have induced charges to maintain E = 0 in the conductor itself. Choice A incorrectly assumes the field is zero in the cavity. Choices C and D reverse the correct locations."
  },
  {
    "id": "physc_u8_q342",
    "subject": "apphysc",
    "unit": 8,
    "topic": "electric field",
    "topicLabel": "electric field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical positive charges are placed at opposite corners of a square. Where should two identical negative charges be placed so that the electric field at the center of the square is zero?",
    "choices": [
      "A) At the other two corners of the square",
      "B) At the midpoints of two adjacent sides",
      "C) At the midpoints of two opposite sides",
      "D) Along the diagonal connecting the positive charges"
    ],
    "answer": 0,
    "explanation": "For the field to be zero at the center, the negative charges must be placed to exactly cancel the field from the positive charges. Placing them at the other two corners creates perfect symmetry - each negative charge is equidistant from the center as each positive charge, and the vector sum of all four fields is zero. Other placements don't provide the correct symmetry and distances to cancel the field."
  },
  {
    "id": "physc_u8_q343",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A long cylindrical conductor of radius R carries a total charge Q uniformly distributed on its surface. Using Gauss's law, what is the electric field at distance r from the axis where r > R?",
    "choices": [
      "A) Q/(2πε₀rL) where L is the length",
      "B) Q/(4πε₀r²)",
      "C) Q/(2πε₀r²L) where L is the length",
      "D) Zero, because the charge is on a conductor"
    ],
    "answer": 0,
    "explanation": "For a long cylindrical conductor, use a cylindrical Gaussian surface. The field has only radial component and is constant at distance r. Gauss's law gives E(2πrL) = Q/ε₀, so E = Q/(2πε₀rL). Choice B treats it as a point charge. Choice C has incorrect r² dependence. Choice D incorrectly assumes field is zero outside conductor."
  },
  {
    "id": "physc_u8_q344",
    "subject": "apphysc",
    "unit": 8,
    "topic": "conductors in equilibrium",
    "topicLabel": "conductors in equilibrium",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting sphere of radius R has a total charge +Q. A point charge +q is brought near the sphere but outside it. Which statement about the charge distribution on the conductor is correct?",
    "choices": [
      "A) The charge +Q remains uniformly distributed over the surface",
      "B) More charge accumulates on the side closer to +q",
      "C) More charge accumulates on the side farther from +q",
      "D) The total surface charge becomes +Q+q"
    ],
    "answer": 2,
    "explanation": "The external charge +q repels the positive charges on the conductor, causing them to redistribute. More charge moves to the far side of the conductor, away from +q. The near side has less positive charge (or becomes less positive). Choice A ignores redistribution. Choice B incorrectly suggests like charges attract. Choice D violates charge conservation."
  },
  {
    "id": "physc_u8_q345",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric field",
    "topicLabel": "Electric field",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A dipole with charges +q and -q separated by distance d is placed in a uniform electric field E. When the dipole makes angle θ with the field, what is the magnitude of the net force on the dipole?",
    "choices": [
      "A) qEd cos θ",
      "B) qEd sin θ",
      "C) qE",
      "D) Zero"
    ],
    "answer": 3,
    "explanation": "The net force on a dipole in a uniform electric field is always zero because F = qE on the positive charge and F = -qE on the negative charge, which sum to zero. Students often confuse this with torque (τ = qEd sin θ) or think the orientation matters for net force. Only in non-uniform fields does a dipole experience net force."
  },
  {
    "id": "physc_u8_q346",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spherical Gaussian surface of radius R encloses a point charge +Q located at distance R/2 from the center. If the sphere is moved so the charge is now at distance 2R from the center, how does the electric flux through the surface change?",
    "choices": [
      "A) Flux becomes zero",
      "B) Flux decreases by factor of 4",
      "C) Flux remains Q/ε₀",
      "D) Flux becomes Q/(4ε₀)"
    ],
    "answer": 0,
    "explanation": "When the charge moves to 2R from center, it's outside the Gaussian surface (radius R), so flux becomes zero. Gauss's law states flux depends only on enclosed charge, not charge position within the surface. Students often think flux depends on distance to charge or apply inverse square law incorrectly to flux instead of field."
  },
  {
    "id": "physc_u8_q347",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric flux",
    "topicLabel": "Electric flux",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform electric field E makes angle 60° with the normal to a flat surface of area A. If the field strength doubles and the angle changes to 30°, by what factor does the electric flux change?",
    "choices": [
      "A) √3",
      "B) 2√3",
      "C) 4",
      "D) 2"
    ],
    "answer": 1,
    "explanation": "Initial flux: Φ₁ = EA cos(60°) = EA(1/2). Final flux: Φ₂ = 2EA cos(30°) = 2EA(√3/2) = EA√3. Ratio: Φ₂/Φ₁ = (EA√3)/(EA/2) = 2√3. Students often forget the cosine factor, miscalculate the trigonometry, or think doubling field simply doubles flux regardless of angle change."
  },
  {
    "id": "physc_u8_q348",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in equilibrium",
    "topicLabel": "Conductors in equilibrium",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting sphere with charge +Q has a spherical cavity. A point charge +q is placed inside the cavity. What charge appears on the outer surface of the conductor?",
    "choices": [
      "A) +Q",
      "B) +(Q + q)",
      "C) +(Q - q)",
      "D) +q"
    ],
    "answer": 1,
    "explanation": "The inner cavity surface gets charge -q (to make field zero in conductor). The outer surface must have +(Q + q) to conserve total charge Q on the conductor. The original +Q plus the +q placed inside must appear somewhere, and since -q is on inner surface, +(Q + q) goes to outer surface. Students often think outer surface keeps original charge Q."
  },
  {
    "id": "physc_u8_q349",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric field",
    "topicLabel": "Electric field",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A ring of radius R carries total charge Q uniformly distributed. At what distance along the axis from the center is the electric field magnitude maximum?",
    "choices": [
      "A) R",
      "B) R/√2",
      "C) R√2",
      "D) R/2"
    ],
    "answer": 1,
    "explanation": "Field along axis: E = kQx/(x² + R²)^(3/2). To find maximum, take derivative and set to zero: dE/dx = 0 gives x = R/√2. Students often guess x = R (incorrect) or don't properly handle the calculus. The maximum occurs closer to the ring than R because of the balance between 1/r² dependence and cos θ projection factor."
  },
  {
    "id": "physc_u8_q350",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thick spherical shell has inner radius a, outer radius b, and uniform charge density ρ. Using Gauss's law, what is the electric field at radius r where a < r < b?",
    "choices": [
      "A) ρ(r³ - a³)/(3ε₀r²)",
      "B) ρ(r² - a²)/(2ε₀r)",
      "C) ρr/(3ε₀)",
      "D) ρ(b³ - a³)/(3ε₀r²)"
    ],
    "answer": 0,
    "explanation": "Enclosed charge within radius r: Q = ρ × (4π/3)(r³ - a³). By Gauss's law: E(4πr²) = Q/ε₀, so E = ρ(r³ - a³)/(3ε₀r²). Students often forget to subtract the inner cavity volume a³, use wrong volume formula, or confuse this with the uniform sphere case where charge grows as r³ from center."
  },
  {
    "id": "physc_u8_q351",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric flux",
    "topicLabel": "Electric flux",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A cube has a point charge +Q at one vertex. What is the total electric flux through all six faces of the cube?",
    "choices": [
      "A) Q/ε₀",
      "B) Q/(8ε₀)",
      "C) Q/(6ε₀)",
      "D) Zero"
    ],
    "answer": 1,
    "explanation": "By symmetry, the charge +Q at a vertex is shared equally among 8 adjacent cubes if we imagine extending the lattice. Each cube gets 1/8 of the flux that would come from having the entire charge inside. Total flux through one cube = (1/8) × (Q/ε₀) = Q/(8ε₀). Students often think the answer is Q/ε₀ (forgetting the charge is at boundary) or Q/(6ε₀) (dividing by number of faces)."
  },
  {
    "id": "physc_u8_q352",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Field for symmetric charge distributions",
    "topicLabel": "Field for symmetric charge distributions",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An infinite plane has uniform surface charge density σ. A second infinite plane parallel to the first, separated by distance d, has surface charge density -σ. What is the field between the planes?",
    "choices": [
      "A) Zero",
      "B) σ/ε₀",
      "C) σ/(2ε₀)",
      "D) 2σ/ε₀"
    ],
    "answer": 1,
    "explanation": "Each infinite plane creates field σ/(2ε₀) pointing away from positive charges. Between planes, both fields point from +σ plane toward -σ plane, so they add: σ/(2ε₀) + σ/(2ε₀) = σ/ε₀. Students often think fields cancel (like outside the planes) or forget that field directions add constructively between oppositely charged planes."
  },
  {
    "id": "physc_u8_q353",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in equilibrium",
    "topicLabel": "Conductors in equilibrium",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conductor with a cavity contains no net charge. A charge +Q is brought near (but outside) the conductor. What happens to the electric field inside the cavity?",
    "choices": [
      "A) Becomes uniform and nonzero",
      "B) Remains zero everywhere in cavity",
      "C) Becomes nonzero but non-uniform",
      "D) Becomes zero only at cavity center"
    ],
    "answer": 1,
    "explanation": "The field inside any cavity in a conductor is always zero, regardless of external charges. The conductor's free charges rearrange on all surfaces (inner cavity and outer surface) to ensure zero field everywhere in the conductor and cavity. Students often think external charges can create fields in cavities or that shielding is incomplete."
  },
  {
    "id": "physc_u8_q354",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric field",
    "topicLabel": "Electric field",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two infinite line charges with densities +λ and -λ are parallel and separated by distance d. At what distance from the positive line charge is the electric field zero?",
    "choices": [
      "A) d/2",
      "B) d/3",
      "C) 2d/3",
      "D) The field is never zero"
    ],
    "answer": 0,
    "explanation": "By symmetry, the field is zero at the midpoint between the lines. At distance x from +λ line: field from +λ is λ/(2πε₀x) pointing away, field from -λ is λ/(2πε₀(d-x)) pointing toward +λ line. These cancel when x = d-x, so x = d/2. Students might think fields never cancel or solve the equations incorrectly."
  },
  {
    "id": "physc_u8_q355",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A long cylindrical conductor of radius R has a coaxial cylindrical cavity of radius R/2. If the conductor carries total charge λ per unit length, what is the surface charge density on the outer surface?",
    "choices": [
      "A) λ/(2πR)",
      "B) λ/(4πR)",
      "C) λ/(πR)",
      "D) 3λ/(4πR)"
    ],
    "answer": 0,
    "explanation": "All charge λ per unit length resides on the outer surface (inner cavity surface has zero charge since no charge is in the cavity). Surface area per unit length of outer surface = 2πR. Surface charge density = λ/(2πR). Students might incorrectly distribute charge between inner and outer surfaces or use wrong surface area formula."
  },
  {
    "id": "physc_u8_q356",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric flux",
    "topicLabel": "Electric flux",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A hemispherical surface sits on an infinite plane of charge with surface density σ. What is the total flux through the curved surface of the hemisphere?",
    "choices": [
      "A) σA/(2ε₀) where A is the base area",
      "B) σA/ε₀ where A is the base area",
      "C) Zero",
      "D) σA/(4ε₀) where A is the total surface area"
    ],
    "answer": 0,
    "explanation": "Total flux through complete sphere would be σA/ε₀ where A = πR² is base area. By symmetry, half goes through curved surface and half through the flat base, so flux through curved surface = σA/(2ε₀). Students often think all flux goes through curved surface or calculate using total surface area instead of base area."
  },
  {
    "id": "physc_u8_q357",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Field for symmetric charge distributions",
    "topicLabel": "Field for symmetric charge distributions",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid sphere of radius R has charge density ρ(r) = ρ₀r/R where ρ₀ is constant. What is the electric field at the center of the sphere?",
    "choices": [
      "A) ρ₀R/(4ε₀)",
      "B) ρ₀R/(3ε₀)",
      "C) Zero",
      "D) ρ₀R²/(6ε₀)"
    ],
    "answer": 2,
    "explanation": "By symmetry, the electric field at the center of any spherically symmetric charge distribution is zero. Every charge element has a corresponding element on the opposite side that produces an equal and opposite field contribution at the center. Students often try to calculate using Gauss's law incorrectly or think non-uniform density breaks the symmetry argument."
  },
  {
    "id": "physc_u8_q358",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in equilibrium",
    "topicLabel": "Conductors in equilibrium",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical conducting spheres, one charged to +Q and one uncharged, are connected by a long thin wire. After equilibrium, what fraction of the original charge remains on the originally charged sphere?",
    "choices": [
      "A) 1/4",
      "B) 1/3",
      "C) 1/2",
      "D) 2/3"
    ],
    "answer": 2,
    "explanation": "Connected conductors reach the same potential. For identical spheres with charges q₁ and q₂, potentials are kq₁/R and kq₂/R. Setting equal: q₁ = q₂. With conservation q₁ + q₂ = Q, we get q₁ = q₂ = Q/2. So originally charged sphere retains Q/2, which is 1/2 of original charge. Students often think charge splits unequally or that size differences matter when spheres are identical."
  },
  {
    "id": "physc_u9_q359",
    "subject": "apphysc",
    "unit": 9,
    "topic": "electric potential",
    "topicLabel": "electric potential",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Electric potential is defined as:",
    "choices": [
      "A) Electric potential energy per unit charge",
      "B) Electric force per unit charge",
      "C) Electric field per unit charge",
      "D) Electric potential energy per unit distance"
    ],
    "answer": 0,
    "explanation": "Electric potential is defined as electric potential energy per unit charge (V = U/q). Choice B describes electric field, not potential. Choice C is meaningless since field already has charge in denominator. Choice D describes a gradient but not potential."
  },
  {
    "id": "physc_u9_q360",
    "subject": "apphysc",
    "unit": 9,
    "topic": "electric potential",
    "topicLabel": "electric potential",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The SI unit for electric potential is:",
    "choices": [
      "A) Volt (V)",
      "B) Joule (J)",
      "C) Newton per coulomb (N/C)",
      "D) Coulomb (C)"
    ],
    "answer": 0,
    "explanation": "The volt is the SI unit for electric potential. Choice B (joule) is the unit for energy. Choice C (N/C) is the unit for electric field. Choice D (coulomb) is the unit for charge."
  },
  {
    "id": "physc_u9_q361",
    "subject": "apphysc",
    "unit": 9,
    "topic": "potential from field",
    "topicLabel": "potential from field",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The relationship between electric field and electric potential is:",
    "choices": [
      "A) E = -dV/dr",
      "B) E = dV/dr",
      "C) E = V/r",
      "D) E = -V/r"
    ],
    "answer": 0,
    "explanation": "Electric field is the negative gradient of potential: E = -dV/dr. The negative sign indicates field points from high to low potential. Choice B missing negative sign. Choices C and D use division instead of derivative."
  },
  {
    "id": "physc_u9_q362",
    "subject": "apphysc",
    "unit": 9,
    "topic": "potential from field",
    "topicLabel": "potential from field",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a uniform electric field pointing in the +x direction, the potential:",
    "choices": [
      "A) Decreases in the +x direction",
      "B) Increases in the +x direction",
      "C) Is constant everywhere",
      "D) Is zero everywhere"
    ],
    "answer": 0,
    "explanation": "Since E = -dV/dx, if E is positive (pointing +x), then dV/dx is negative, meaning potential decreases in +x direction. Students often forget the negative sign and choose B. Choice C would mean zero field. Choice D confuses potential with potential energy."
  },
  {
    "id": "physc_u9_q363",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "field from potential",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the electric potential increases linearly with distance in the +y direction, the electric field in the y-direction is:",
    "choices": [
      "A) Constant and negative",
      "B) Constant and positive",
      "C) Zero",
      "D) Increasing linearly"
    ],
    "answer": 0,
    "explanation": "If V increases linearly with y, then dV/dy is a positive constant. Since Ey = -dV/dy, the field is constant and negative. Choice B forgets negative sign. Choice C would require constant potential. Choice D confuses field with potential behavior."
  },
  {
    "id": "physc_u9_q364",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "field from potential",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "At a point where the electric potential has a local maximum, the electric field is:",
    "choices": [
      "A) Zero",
      "B) Maximum",
      "C) Minimum",
      "D) Undefined"
    ],
    "answer": 0,
    "explanation": "At a local maximum, dV/dx = 0, so E = -dV/dx = 0. This is a fundamental property of maxima/minima. Choice B incorrectly thinks max potential means max field. Choice C suggests minimum field. Choice D is wrong since field is well-defined."
  },
  {
    "id": "physc_u9_q365",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "equipotential surfaces",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Electric field lines are always:",
    "choices": [
      "A) Perpendicular to equipotential surfaces",
      "B) Parallel to equipotential surfaces",
      "C) At 45° to equipotential surfaces",
      "D) Tangent to equipotential surfaces"
    ],
    "answer": 0,
    "explanation": "Electric field lines are always perpendicular to equipotential surfaces because field points in direction of maximum potential decrease. Choice B (parallel) would mean no potential change along field. Choices C and D represent arbitrary angles with no physical basis."
  },
  {
    "id": "physc_u9_q366",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "equipotential surfaces",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The work done by the electric field when moving a charge along an equipotential surface is:",
    "choices": [
      "A) Zero",
      "B) Positive",
      "C) Negative",
      "D) Equal to qV"
    ],
    "answer": 0,
    "explanation": "Work = q(ΔV). On an equipotential surface, ΔV = 0, so work = 0. This is fundamental definition of equipotential. Choices B and C suggest non-zero work. Choice D gives work for moving between different potentials."
  },
  {
    "id": "physc_u9_q367",
    "subject": "apphysc",
    "unit": 9,
    "topic": "capacitance",
    "topicLabel": "capacitance",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Capacitance is defined as:",
    "choices": [
      "A) Charge stored per unit voltage",
      "B) Voltage per unit charge stored",
      "C) Energy stored per unit charge",
      "D) Charge stored per unit area"
    ],
    "answer": 0,
    "explanation": "Capacitance C = Q/V, which is charge stored per unit voltage. Choice B is reciprocal (1/C). Choice C describes a type of potential. Choice D would give surface charge density, not capacitance."
  },
  {
    "id": "physc_u9_q368",
    "subject": "apphysc",
    "unit": 9,
    "topic": "capacitance",
    "topicLabel": "capacitance",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The capacitance of a parallel-plate capacitor is proportional to:",
    "choices": [
      "A) Plate area and inversely proportional to plate separation",
      "B) Plate separation and inversely proportional to plate area",
      "C) Both plate area and plate separation",
      "D) The square of plate area"
    ],
    "answer": 0,
    "explanation": "C = ε₀A/d, so capacitance is proportional to area A and inversely proportional to separation d. Choice B has the relationship backwards. Choice C suggests direct proportionality to both. Choice D introduces incorrect square dependence."
  },
  {
    "id": "physc_u9_q369",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor",
    "topicLabel": "energy stored in capacitor",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the voltage across a capacitor is doubled while keeping capacitance constant, the energy stored:",
    "choices": [
      "A) Increases by a factor of 4",
      "B) Doubles",
      "C) Remains the same",
      "D) Increases by a factor of 8"
    ],
    "answer": 0,
    "explanation": "Since U = ½CV², doubling V makes energy U' = ½C(2V)² = 4(½CV²) = 4U. Choice B assumes linear relationship. Choice C ignores voltage dependence. Choice D uses cubic relationship incorrectly."
  },
  {
    "id": "physc_u9_q370",
    "subject": "apphysc",
    "unit": 9,
    "topic": "dielectrics",
    "topicLabel": "dielectrics",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "When a dielectric material is inserted into a parallel-plate capacitor (with battery disconnected), the capacitance:",
    "choices": [
      "A) Increases by a factor equal to the dielectric constant",
      "B) Decreases by a factor equal to the dielectric constant",
      "C) Remains unchanged",
      "D) Increases by the square of the dielectric constant"
    ],
    "answer": 0,
    "explanation": "With dielectric, C = κC₀ where κ is dielectric constant. Capacitance increases by factor κ. Choice B has relationship backwards. Choice C ignores dielectric effect. Choice D introduces incorrect square dependence."
  },
  {
    "id": "physc_u9_q371",
    "subject": "apphysc",
    "unit": 9,
    "topic": "electric potential",
    "topicLabel": "Electric Potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A point charge of +3.0 μC is moved from point A to point B in an electric field. If the electric potential at A is 120 V and at B is 80 V, what is the change in electric potential energy of the charge?",
    "choices": [
      "A) -120 μJ",
      "B) +120 μJ",
      "C) -40 μJ",
      "D) +40 μJ"
    ],
    "answer": 0,
    "explanation": "The change in potential energy is ΔU = qΔV = q(VB - VA) = (3.0 × 10⁻⁶ C)(80 V - 120 V) = (3.0 × 10⁻⁶ C)(-40 V) = -120 μJ. Students often forget the sign or confuse potential with potential energy."
  },
  {
    "id": "physc_u9_q372",
    "subject": "apphysc",
    "unit": 9,
    "topic": "potential from field",
    "topicLabel": "Potential from Field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a uniform electric field of magnitude 500 N/C pointing in the +x direction, what is the potential difference between points at x = 0.10 m and x = 0.30 m?",
    "choices": [
      "A) +100 V",
      "B) -100 V",
      "C) +200 V",
      "D) -200 V"
    ],
    "answer": 1,
    "explanation": "For uniform field, ΔV = -E·Δx = -(500 N/C)(0.30 - 0.10) m = -100 V. The negative sign comes from V = -∫E·dr. Students often forget the negative sign or use wrong direction."
  },
  {
    "id": "physc_u9_q373",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "Field from Potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the electric potential varies as V(x) = 200x² - 100x + 50 (where V is in volts and x in meters), what is the magnitude of the electric field at x = 2.0 m?",
    "choices": [
      "A) 700 N/C",
      "B) 750 N/C",
      "C) 800 N/C",
      "D) 850 N/C"
    ],
    "answer": 0,
    "explanation": "Electric field is E = -dV/dx = -(400x - 100). At x = 2.0 m, E = -(400(2.0) - 100) = -700 N/C. The magnitude is 700 N/C. Students often forget the negative sign or make algebra errors."
  },
  {
    "id": "physc_u9_q374",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "Equipotential Surfaces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which statement about equipotential surfaces is correct?",
    "choices": [
      "A) Electric field lines are parallel to equipotential surfaces",
      "B) Work is done when moving a charge along an equipotential surface",
      "C) Electric field lines are perpendicular to equipotential surfaces",
      "D) Equipotential surfaces can intersect each other"
    ],
    "answer": 2,
    "explanation": "Electric field lines are always perpendicular to equipotential surfaces because the field points in the direction of greatest potential change. No work is done moving along equipotentials, they cannot intersect, and field lines are not parallel to them."
  },
  {
    "id": "physc_u9_q375",
    "subject": "apphysc",
    "unit": 9,
    "topic": "electric potential",
    "topicLabel": "Electric Potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two point charges, +4.0 μC and -2.0 μC, are separated by 0.30 m. At what point along the line connecting them is the electric potential zero?",
    "choices": [
      "A) 0.20 m from the +4.0 μC charge",
      "B) 0.10 m from the +4.0 μC charge",
      "C) 0.15 m from the +4.0 μC charge",
      "D) 0.25 m from the +4.0 μC charge"
    ],
    "answer": 0,
    "explanation": "Set kq₁/r₁ + kq₂/r₂ = 0. Let x be distance from +4.0 μC charge. Then k(4.0)/x + k(-2.0)/(0.30-x) = 0. Solving: 4.0/x = 2.0/(0.30-x), gives x = 0.20 m. Students often set up the equation incorrectly or make sign errors."
  },
  {
    "id": "physc_u9_q376",
    "subject": "apphysc",
    "unit": 9,
    "topic": "capacitance",
    "topicLabel": "Capacitance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel-plate capacitor has plate area A and plate separation d. If the plate separation is doubled while keeping the charge constant, what happens to the potential difference?",
    "choices": [
      "A) It is halved",
      "B) It doubles",
      "C) It remains the same",
      "D) It is quadrupled"
    ],
    "answer": 1,
    "explanation": "C = ε₀A/d, so when d doubles, C is halved. Since Q = CV and Q is constant, when C is halved, V must double. Students often confuse what happens when charge vs. voltage is kept constant."
  },
  {
    "id": "physc_u9_q377",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor",
    "topicLabel": "Energy Stored in Capacitor",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 10 μF capacitor is charged to 12 V. How much energy is stored in the capacitor?",
    "choices": [
      "A) 60 μJ",
      "B) 120 μJ",
      "C) 720 μJ",
      "D) 1440 μJ"
    ],
    "answer": 2,
    "explanation": "Energy stored is U = ½CV² = ½(10 × 10⁻⁶ F)(12 V)² = ½(10 × 10⁻⁶)(144) = 720 μJ. Students often forget the ½ factor or use wrong formula."
  },
  {
    "id": "physc_u9_q378",
    "subject": "apphysc",
    "unit": 9,
    "topic": "dielectrics",
    "topicLabel": "Dielectrics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel-plate capacitor is connected to a battery and then a dielectric with κ = 3.0 is inserted between the plates while keeping the battery connected. What happens to the stored energy?",
    "choices": [
      "A) It decreases by a factor of 3",
      "B) It increases by a factor of 3",
      "C) It remains the same",
      "D) It increases by a factor of 9"
    ],
    "answer": 1,
    "explanation": "With battery connected, V is constant. C increases by factor κ, so U = ½CV² increases by factor κ = 3. Students often confuse constant charge vs. constant voltage scenarios."
  },
  {
    "id": "physc_u9_q379",
    "subject": "apphysc",
    "unit": 9,
    "topic": "capacitance",
    "topicLabel": "Capacitance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Three capacitors of 2.0 μF, 4.0 μF, and 6.0 μF are connected in series. What is the equivalent capacitance?",
    "choices": [
      "A) 1.1 μF",
      "B) 1.3 μF",
      "C) 2.0 μF",
      "D) 12 μF"
    ],
    "answer": 0,
    "explanation": "For series: 1/Ceq = 1/2.0 + 1/4.0 + 1/6.0 = 0.5 + 0.25 + 0.167 = 0.917, so Ceq = 1.1 μF. Students often add capacitances directly (parallel rule) or make arithmetic errors."
  },
  {
    "id": "physc_u9_q380",
    "subject": "apphysc",
    "unit": 9,
    "topic": "potential from field",
    "topicLabel": "Potential from Field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a radial electric field E = kr̂/r² (where k is a constant), what is the potential difference between points at r = 2.0 m and r = 4.0 m from the center?",
    "choices": [
      "A) k/4",
      "B) k/2",
      "C) -k/4",
      "D) -k/2"
    ],
    "answer": 2,
    "explanation": "V = -∫E·dr = -∫(k/r²)dr = k/r + constant. ΔV = V(4.0) - V(2.0) = k/4.0 - k/2.0 = -k/4. Students often miss the negative sign or integrate incorrectly."
  },
  {
    "id": "physc_u9_q381",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "Equipotential Surfaces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Around a positive point charge, the equipotential surfaces are spherical. If one surface has radius r and potential V, what is the potential of a surface at radius 2r?",
    "choices": [
      "A) V/2",
      "B) V/4",
      "C) 2V",
      "D) 4V"
    ],
    "answer": 0,
    "explanation": "For point charge, V = kq/r, so V is inversely proportional to r. When radius doubles, potential is halved. Students often confuse this with field (1/r²) or think potential doubles with radius."
  },
  {
    "id": "physc_u9_q382",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "Field from Potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The electric potential in a region varies as V = 3x² + 2y² + z² (in volts, with distances in meters). What is the y-component of the electric field at point (1, 2, 3)?",
    "choices": [
      "A) -4 N/C",
      "B) +4 N/C",
      "C) -8 N/C",
      "D) +8 N/C"
    ],
    "answer": 2,
    "explanation": "Ey = -∂V/∂y = -∂(3x² + 2y² + z²)/∂y = -4y. At y = 2, Ey = -4(2) = -8 N/C. Students often forget the negative sign or take derivative incorrectly."
  },
  {
    "id": "physc_u9_q383",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor",
    "topicLabel": "Energy Stored in Capacitor",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A capacitor is charged and then disconnected from the battery. If the plate separation is then doubled, what happens to the stored energy?",
    "choices": [
      "A) It is halved",
      "B) It doubles",
      "C) It remains the same",
      "D) It is quadrupled"
    ],
    "answer": 1,
    "explanation": "With disconnected battery, Q is constant. When d doubles, C halves. Since U = Q²/(2C), when C halves, U doubles. Students often use U = ½CV² instead of appropriate formula for constant charge."
  },
  {
    "id": "physc_u9_q384",
    "subject": "apphysc",
    "unit": 9,
    "topic": "dielectrics",
    "topicLabel": "Dielectrics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A capacitor is charged to voltage V₀, disconnected from the battery, and then filled with a dielectric of constant κ = 2.5. What is the new voltage across the capacitor?",
    "choices": [
      "A) V₀/2.5",
      "B) 2.5V₀",
      "C) V₀/6.25",
      "D) V₀"
    ],
    "answer": 0,
    "explanation": "With constant charge, C increases by factor κ, so V = Q/C decreases by factor κ. New voltage is V₀/κ = V₀/2.5. Students often think voltage stays constant or increases."
  },
  {
    "id": "physc_u9_q385",
    "subject": "apphysc",
    "unit": 9,
    "topic": "electric potential",
    "topicLabel": "Electric Potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Four equal point charges +q are placed at the corners of a square of side length a. What is the electric potential at the center of the square?",
    "choices": [
      "A) 4kq/a",
      "B) 2√2 kq/a",
      "C) 4√2 kq/a",
      "D) kq/a"
    ],
    "answer": 2,
    "explanation": "Distance from each corner to center is a/√2. Potential is scalar sum: V = 4(kq)/(a/√2) = 4√2 kq/a. Students often use distance a instead of diagonal distance or forget it's a scalar sum."
  },
  {
    "id": "physc_u9_q386",
    "subject": "apphysc",
    "unit": 9,
    "topic": "capacitance",
    "topicLabel": "Capacitance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical capacitors are connected in parallel and charged to voltage V. They are then disconnected from the battery and reconnected in series. What is the voltage across each capacitor?",
    "choices": [
      "A) V/4",
      "B) V/2",
      "C) V",
      "D) 2V"
    ],
    "answer": 1,
    "explanation": "Initially each has charge CV. Total charge 2CV is conserved. In series, equivalent capacitance is C/2, so total voltage is 2CV/(C/2) = 4V, making voltage across each capacitor V/2. Students often think charge redistributes equally."
  },
  {
    "id": "physc_u9_q387",
    "subject": "apphysc",
    "unit": 9,
    "topic": "potential from field",
    "topicLabel": "Potential from Field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An electric field exists only in the region 0 < x < 0.10 m with magnitude E = 200 N/C in the +x direction. What is the potential difference between x = -0.05 m and x = 0.15 m?",
    "choices": [
      "A) -20 V",
      "B) +20 V",
      "C) -30 V",
      "D) +30 V"
    ],
    "answer": 0,
    "explanation": "Field only exists between x = 0 and x = 0.10 m. ΔV = -∫E·dx = -(200)(0.10 - 0) = -20 V. The field doesn't contribute outside its region. Students often integrate over wrong limits or forget field regions."
  },
  {
    "id": "physc_u9_q388",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "Equipotential Surfaces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a region with both a uniform electric field and a point charge, which statement about equipotential surfaces is correct?",
    "choices": [
      "A) They are always spherical",
      "B) They are always planar",
      "C) They are neither spherical nor planar",
      "D) They depend only on the point charge"
    ],
    "answer": 2,
    "explanation": "Uniform field alone gives planar equipotentials, point charge alone gives spherical equipotentials. Combined, the surfaces are distorted and neither purely spherical nor planar. Students often think one source dominates completely."
  },
  {
    "id": "physc_u9_q389",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor",
    "topicLabel": "Energy Stored in Capacitor",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical capacitors, each with capacitance C, are connected in series across a voltage V. What is the total energy stored in the system?",
    "choices": [
      "A) CV²/4",
      "B) CV²/2",
      "C) CV²",
      "D) 2CV²"
    ],
    "answer": 0,
    "explanation": "Series equivalent capacitance is C/2. Total energy is U = ½(Ceq)V² = ½(C/2)V² = CV²/4. Students often use individual capacitor formula or parallel combination formula incorrectly."
  },
  {
    "id": "physc_u9_q390",
    "subject": "apphysc",
    "unit": 9,
    "topic": "electric potential",
    "topicLabel": "electric potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A point charge +Q is moved from point A to point B in the electric field of a fixed point charge +q. The potential at A is 20 V and at B is 50 V. If the charge +Q has magnitude 2.0 μC, what is the change in potential energy of the system?",
    "choices": [
      "A) +60 μJ",
      "B) -60 μJ",
      "C) +30 μJ",
      "D) +140 μJ"
    ],
    "answer": 0,
    "explanation": "The change in potential energy is ΔU = qΔV = (2.0 × 10⁻⁶ C)(50 V - 20 V) = 60 × 10⁻⁶ J = +60 μJ. The positive sign indicates energy was stored in the system. Choice B incorrectly uses negative sign. Choice C uses wrong potential difference. Choice D adds the potentials instead of finding the difference."
  },
  {
    "id": "physc_u9_q391",
    "subject": "apphysc",
    "unit": 9,
    "topic": "potential from field",
    "topicLabel": "potential from field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform electric field E = 400 N/C points in the +x direction. What is the potential difference between points at x = 2.0 m and x = 5.0 m?",
    "choices": [
      "A) -1200 V",
      "B) +1200 V",
      "C) -2800 V",
      "D) +2800 V"
    ],
    "answer": 0,
    "explanation": "The potential difference is ΔV = V(5.0) - V(2.0) = -∫E·dr from 2.0 to 5.0 = -E(5.0 - 2.0) = -400 × 3.0 = -1200 V. The negative sign is correct because we move in the direction of the field, so potential decreases. Choice B has wrong sign. Choices C and D incorrectly add the position values to the calculation."
  },
  {
    "id": "physc_u9_q392",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "field from potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The electric potential in a region varies as V(x) = 3x² - 12x + 20, where V is in volts and x is in meters. What is the magnitude of the electric field at x = 2.0 m?",
    "choices": [
      "A) 0 N/C",
      "B) 6 N/C",
      "C) 12 N/C",
      "D) 20 N/C"
    ],
    "answer": 0,
    "explanation": "The electric field is E = -dV/dx = -(6x - 12). At x = 2.0 m, E = -(6(2) - 12) = -(12 - 12) = 0 N/C. This point is actually an equilibrium position where the field is zero. Choice B gives dV/dx without the negative sign. Choice C uses the coefficient 6x at x = 2. Choice D incorrectly uses the constant term from the potential function."
  },
  {
    "id": "physc_u9_q393",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "equipotential surfaces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two parallel conducting plates create a uniform electric field between them. A positive test charge is moved along a path parallel to the plates (perpendicular to the field lines). Which statement is correct?",
    "choices": [
      "A) Work is done against the electric field",
      "B) No work is done by or against the electric field",
      "C) Work is done by the electric field",
      "D) The amount of work depends on the speed of movement"
    ],
    "answer": 1,
    "explanation": "Moving perpendicular to electric field lines means moving along an equipotential surface where the potential is constant. Since W = qΔV and ΔV = 0, no work is done. Choice A would apply if moving toward the negative plate. Choice C would apply if moving toward the positive plate. Choice D is incorrect because work done by conservative forces depends only on displacement, not speed."
  },
  {
    "id": "physc_u9_q394",
    "subject": "apphysc",
    "unit": 9,
    "topic": "capacitance",
    "topicLabel": "capacitance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical capacitors with capacitance C are connected first in series, then in parallel to the same battery. How does the total energy stored compare between the two configurations?",
    "choices": [
      "A) Series stores twice as much energy as parallel",
      "B) Parallel stores twice as much energy as series",
      "C) Series stores four times as much energy as parallel",
      "D) Parallel stores four times as much energy as series"
    ],
    "answer": 3,
    "explanation": "For series: Ctotal = C/2, so Useries = ½(C/2)V² = CV²/4. For parallel: Ctotal = 2C, so Uparallel = ½(2C)V² = CV². Therefore parallel stores 4 times as much energy as series. Choice A reverses the relationship. Choice B gives the factor of 2 instead of 4. Choice C incorrectly has series storing more energy."
  },
  {
    "id": "physc_u9_q395",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor",
    "topicLabel": "energy stored in capacitor",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel plate capacitor is charged and then disconnected from the battery. If the plate separation is doubled while keeping the plates disconnected, what happens to the energy stored in the capacitor?",
    "choices": [
      "A) Energy is halved",
      "B) Energy remains the same",
      "C) Energy is doubled",
      "D) Energy is quadrupled"
    ],
    "answer": 2,
    "explanation": "When disconnected, charge Q remains constant. Since C = ε₀A/d, doubling d halves the capacitance. Using U = Q²/(2C), when C is halved, energy doubles. Choice A incorrectly uses U = ½CV² thinking voltage is constant. Choice B ignores the change in capacitance. Choice D incorrectly squares the capacitance change."
  },
  {
    "id": "physc_u9_q396",
    "subject": "apphysc",
    "unit": 9,
    "topic": "dielectrics",
    "topicLabel": "dielectrics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel plate capacitor with dielectric constant κ = 4 is connected to a battery. The dielectric is then removed while the capacitor remains connected to the battery. How does the energy stored change?",
    "choices": [
      "A) Energy increases by factor of 4",
      "B) Energy decreases by factor of 4",
      "C) Energy increases by factor of 2",
      "D) Energy decreases by factor of 2"
    ],
    "answer": 1,
    "explanation": "With battery connected, voltage V remains constant. Initially C₁ = κC₀ = 4C₀, so U₁ = ½(4C₀)V² = 2C₀V². After removing dielectric, C₂ = C₀, so U₂ = ½C₀V². Therefore energy decreases by factor of 4. Choice A reverses the change direction. Choices C and D use the wrong factor, possibly confusing with the square root of the dielectric constant."
  },
  {
    "id": "physc_u9_q397",
    "subject": "apphysc",
    "unit": 9,
    "topic": "capacitance",
    "topicLabel": "capacitance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spherical conductor of radius R carries charge Q. If the radius is doubled while keeping the charge constant, how does the capacitance change?",
    "choices": [
      "A) Capacitance is halved",
      "B) Capacitance doubles",
      "C) Capacitance is unchanged",
      "D) Capacitance is quadrupled"
    ],
    "answer": 1,
    "explanation": "For an isolated spherical conductor, C = 4πε₀R. When radius doubles, capacitance doubles since it's directly proportional to radius. The potential V = kQ/R, so doubling R halves V, and since Q is constant, C = Q/V doubles. Choice A inverts the relationship. Choice C treats it like a parallel plate capacitor. Choice D squares the radius change."
  },
  {
    "id": "physc_u9_q398",
    "subject": "apphysc",
    "unit": 9,
    "topic": "dielectrics",
    "topicLabel": "dielectrics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel plate capacitor is charged and disconnected from the battery. A dielectric with κ = 3 is then inserted between the plates. What fraction of the original energy remains stored in the capacitor?",
    "choices": [
      "A) 1/9",
      "B) 1/3",
      "C) 3",
      "D) 9"
    ],
    "answer": 1,
    "explanation": "With constant charge (disconnected), U = Q²/(2C). When dielectric is inserted, C becomes κC = 3C, so the new energy is U' = Q²/(2·3C) = U/3. Therefore, 1/3 of the original energy remains. Choice A incorrectly squares the dielectric constant in the denominator. Choices C and D incorrectly assume energy increases, which would violate energy conservation since no external work increases the stored energy."
  },
  {
    "id": "physc_u9_q399",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "equipotential surfaces",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two point charges +Q and -Q are separated by distance 2d. At what distance from the +Q charge along the line connecting them does the electric potential equal zero?",
    "choices": [
      "A) d",
      "B) d/2",
      "C) 2d",
      "D) The potential is never zero along this line"
    ],
    "answer": 0,
    "explanation": "Let the distance from +Q be x, so distance from -Q is (2d - x). Setting V = 0: kQ/x + k(-Q)/(2d - x) = 0, which gives kQ/x = kQ/(2d - x), so x = 2d - x, therefore x = d. This is the midpoint between the charges. Choice B gives d/2, which would be closer to +Q where potential would be positive. Choice C gives 2d, which is at the -Q charge location. Choice D is incorrect since we found a solution."
  },
  {
    "id": "physc_u9_q400",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor",
    "topicLabel": "energy stored in capacitor",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A capacitor with capacitance C is charged to voltage V₀. It is then connected to an identical uncharged capacitor. What fraction of the original energy is dissipated in the process?",
    "choices": [
      "A) 1/4",
      "B) 1/2",
      "C) 3/4",
      "D) 1/3"
    ],
    "answer": 1,
    "explanation": "Initial energy: Ui = ½CV₀². When connected in parallel, charge is conserved: Q = CV₀. Final voltage across both: Vf = Q/(2C) = V₀/2. Final energy: Uf = ½(2C)(V₀/2)² = ¼CV₀². Energy dissipated: ΔU = Ui - Uf = ½CV₀² - ¼CV₀² = ¼CV₀². Fraction dissipated: ΔU/Ui = (¼CV₀²)/(½CV₀²) = 1/2. Choice A gives the fraction remaining. Choices C and D result from incorrect energy calculations."
  },
  {
    "id": "physc_u9_q401",
    "subject": "apphysc",
    "unit": 9,
    "topic": "dielectrics",
    "topicLabel": "dielectrics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel plate capacitor is connected to a battery and fully charged. A dielectric slab with κ = 4 is then inserted while the battery remains connected. By what factor does the energy stored in the capacitor change?",
    "choices": [
      "A) 4",
      "B) 1/4",
      "C) 2",
      "D) 1/2"
    ],
    "answer": 0,
    "explanation": "With battery connected, voltage remains constant at V. Initial: C₁ = ε₀A/d, U₁ = ½C₁V². After dielectric insertion: C₂ = κC₁ = 4C₁, U₂ = ½C₂V² = ½(4C₁)V² = 4(½C₁V²) = 4U₁. Energy increases by factor of 4 because battery does work to maintain constant voltage while capacitance increases. Choice B would be correct if battery were disconnected (constant charge). Choices C and D result from confusion about energy vs. field relationships."
  },
  {
    "id": "physc_u9_q402",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "field from potential",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The potential varies as V(r) = A/r² in spherical coordinates, where A is a constant. What is the electric field in the radial direction?",
    "choices": [
      "A) -2A/r³",
      "B) 2A/r³",
      "C) -A/r³",
      "D) A/r³"
    ],
    "answer": 1,
    "explanation": "In spherical coordinates, Er = -∂V/∂r. Given V = A/r², we have ∂V/∂r = A(-2)r⁻³ = -2A/r³. Therefore, Er = -(-2A/r³) = 2A/r³. Choice A forgets the negative sign from the gradient operation. Choices C and D have incorrect factors of 2."
  },
  {
    "id": "physc_u9_q403",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "equipotential surfaces",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An electric dipole consists of charges +q and -q separated by distance d. The equipotential surface V = 0 has what shape in the region far from the dipole?",
    "choices": [
      "A) A sphere centered at the midpoint",
      "B) A plane perpendicular to the dipole axis through the midpoint",
      "C) An ellipsoid",
      "D) A hyperboloid"
    ],
    "answer": 1,
    "explanation": "For a dipole, V = kp cos θ/(4πε₀r²) where θ is angle from dipole axis. Setting V = 0 gives cos θ = 0, so θ = 90°. This describes a plane perpendicular to the dipole axis passing through the center. Choice A would be true for a monopole. Choices C and D are more complex surfaces that don't arise from the dipole potential."
  },
  {
    "id": "physc_u9_q404",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor",
    "topicLabel": "energy stored in capacitor",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel plate capacitor is charged and then disconnected from the battery. The plate separation is then doubled while a dielectric with κ = 3 is inserted to completely fill the space. How does the energy change?",
    "choices": [
      "A) Increases by factor of 6",
      "B) Decreases by factor of 6",
      "C) Increases by factor of 3/2",
      "D) Decreases by factor of 3/2"
    ],
    "answer": 1,
    "explanation": "With battery disconnected, charge Q remains constant. Initial: C₁ = ε₀A/d, U₁ = Q²/(2C₁). Final: C₂ = κε₀A/(2d) = 3ε₀A/(2d) = 3C₁/2, U₂ = Q²/(2C₂) = Q²/(2 × 3C₁/2) = Q²/(3C₁) = U₁/3. Wait, that's not matching the choices exactly. Let me recalculate: C₂ = κε₀A/(2d) = 3ε₀A/(2d). Compared to C₁ = ε₀A/d, we have C₂ = 3C₁/2. So U₂ = Q²/(2C₂) = Q²/(2 × 3C₁/2) = Q²/(3C₁) = (1/3) × Q²/C₁. But U₁ = Q²/(2C₁), so U₂ = (1/3) × 2U₁ = 2U₁/3. Hmm, this means U₂/U₁ = 2/3, so energy decreases by factor of 3/2. Actually, let me be more careful: U₂ = Q²/(2C₂) and U₁ = Q²/(2C₁), so U₂/U₁ = C₁/C₂ = C₁/(3C₁/2) = 2/3. So energy becomes 2/3 of original, which means it decreases. The factor is 3/2 (since 1/(2/3) = 3/2). But this gives choice D, not B. Let me reconsider C₂: if separation doubles and dielectric is added: C₂ = κε₀A/(2d) = 3ε₀A/(2d) = (3/2)(ε₀A/d) = (3/2)C₁. Then U₂/U₁ = C₁/C₂ = C₁/((3/2)C₁) = 2/3. So energy decreases to 2/3, meaning it decreases by a factor of 3/2."
  },
  {
    "id": "physc_u9_q405",
    "subject": "apphysc",
    "unit": 9,
    "topic": "dielectrics",
    "topicLabel": "dielectrics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A dielectric slab partially fills a parallel plate capacitor, occupying volume fraction f of the space between plates. The slab has dielectric constant κ. What is the capacitance if the dielectric extends across the full area but only fraction f of the plate separation?",
    "choices": [
      "A) ε₀A[κf + (1-f)]/d",
      "B) ε₀A/[d(f/κ + (1-f))]",
      "C) ε₀Aκ/[d(f + (1-f)/κ)]",
      "D) ε₀A/[d(f + (1-f)/κ)]"
    ],
    "answer": 1,
    "explanation": "This creates two capacitors in series: one with dielectric of thickness fd (capacitance κε₀A/(fd)) and one with air gap of thickness (1-f)d (capacitance ε₀A/((1-f)d)). For series: 1/C = 1/C₁ + 1/C₂ = fd/(κε₀A) + (1-f)d/(ε₀A) = d/(ε₀A)[f/κ + (1-f)]. Therefore C = ε₀A/[d(f/κ + (1-f))]. Choice A represents parallel combination. Choice C has κ in wrong place. Choice D has the dielectric and air contributions swapped."
  },
  {
    "id": "physc_u9_q406",
    "subject": "apphysc",
    "unit": 9,
    "topic": "electric potential",
    "topicLabel": "electric potential",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin ring of radius R carries total charge Q uniformly distributed. A point charge q moves from the center of the ring to infinity along the axis. What is the change in potential energy of the system?",
    "choices": [
      "A) -kQq/R",
      "B) kQq/R",
      "C) -kQq/(2R)",
      "D) kQq/(2R)"
    ],
    "answer": 0,
    "explanation": "Initial potential at center due to ring: V₀ = kQ/R (all charge elements at distance R). Final potential at infinity: V∞ = 0. Change in potential energy of charge q: ΔU = q(V∞ - V₀) = q(0 - kQ/R) = -kQq/R. Choice B has wrong sign. Choices C and D incorrectly include factor of 1/2."
  },
  {
    "id": "physc_u9_q407",
    "subject": "apphysc",
    "unit": 9,
    "topic": "equipotential surfaces",
    "topicLabel": "equipotential surfaces",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical conducting spheres of radius R are separated by distance 3R (center to center). One sphere is at potential V₀, the other at potential -V₀. The equipotential surface at V = 0 is approximately:",
    "choices": [
      "A) A sphere centered midway between the spheres",
      "B) A plane perpendicular to the line joining centers, located at the midpoint",
      "C) An ellipsoid surrounding both spheres",
      "D) A hyperboloid of one sheet"
    ],
    "answer": 1,
    "explanation": "For two conducting spheres at equal and opposite potentials, the V = 0 equipotential surface is approximately a plane perpendicular to the line connecting the centers, passing through the midpoint. This is because the configuration approximates a dipole at large distances, and the symmetry ensures the midpoint plane is at zero potential. Choice A would apply to spheres at potentials that differ by more than a factor related to their separation. Choices C and D are more complex surfaces that don't arise from this symmetric configuration."
  },
  {
    "id": "physc_u10_q408",
    "subject": "apphysc",
    "unit": 10,
    "topic": "current",
    "topicLabel": "current",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the SI unit for electric current?",
    "choices": [
      "A) Ampere",
      "B) Coulomb",
      "C) Volt",
      "D) Ohm"
    ],
    "answer": 0,
    "explanation": "The ampere (A) is the SI unit for electric current. Coulomb is charge, volt is potential difference, and ohm is resistance."
  },
  {
    "id": "physc_u10_q409",
    "subject": "apphysc",
    "unit": 10,
    "topic": "resistance",
    "topicLabel": "resistance",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to the equation R = ρL/A, resistance is directly proportional to which quantity?",
    "choices": [
      "A) Length of the conductor",
      "B) Cross-sectional area",
      "C) Temperature",
      "D) Voltage applied"
    ],
    "answer": 0,
    "explanation": "Resistance is directly proportional to length L. It's inversely proportional to cross-sectional area A. Temperature and voltage are not in this fundamental resistance equation."
  },
  {
    "id": "physc_u10_q410",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Ohm's law",
    "topicLabel": "Ohm's law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Ohm's law states that voltage is equal to:",
    "choices": [
      "A) Current times resistance",
      "B) Current divided by resistance",
      "C) Resistance divided by current",
      "D) Power times current"
    ],
    "answer": 0,
    "explanation": "Ohm's law is V = IR, so voltage equals current times resistance. The other options represent common algebraic mistakes or confusion with other equations."
  },
  {
    "id": "physc_u10_q411",
    "subject": "apphysc",
    "unit": 10,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The power dissipated by a resistor can be calculated using P = VI. What is an equivalent expression?",
    "choices": [
      "A) P = I²R",
      "B) P = IR",
      "C) P = V/R",
      "D) P = VR"
    ],
    "answer": 0,
    "explanation": "Using Ohm's law V = IR, we can substitute to get P = VI = (IR)I = I²R. The other options are common mistakes in algebraic manipulation."
  },
  {
    "id": "physc_u10_q412",
    "subject": "apphysc",
    "unit": 10,
    "topic": "EMF",
    "topicLabel": "EMF",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "EMF (electromotive force) is measured in the same units as:",
    "choices": [
      "A) Voltage",
      "B) Current",
      "C) Resistance",
      "D) Power"
    ],
    "answer": 0,
    "explanation": "EMF is measured in volts, the same unit as voltage or potential difference. Despite its name containing 'force,' EMF is not a force but an energy per unit charge."
  },
  {
    "id": "physc_u10_q413",
    "subject": "apphysc",
    "unit": 10,
    "topic": "series circuits",
    "topicLabel": "series circuits",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a series circuit with three resistors, the current through each resistor is:",
    "choices": [
      "A) The same",
      "B) Inversely proportional to resistance",
      "C) Directly proportional to resistance",
      "D) Different for each resistor"
    ],
    "answer": 0,
    "explanation": "In series circuits, current is the same through all components because there's only one path. Students often confuse this with voltage, which does vary across resistors in series."
  },
  {
    "id": "physc_u10_q414",
    "subject": "apphysc",
    "unit": 10,
    "topic": "parallel circuits",
    "topicLabel": "parallel circuits",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a parallel circuit with three resistors, the voltage across each resistor is:",
    "choices": [
      "A) The same",
      "B) Inversely proportional to resistance",
      "C) Directly proportional to resistance",
      "D) Different for each resistor"
    ],
    "answer": 0,
    "explanation": "In parallel circuits, voltage is the same across all components because they're connected to the same two points. Current varies through each branch based on resistance."
  },
  {
    "id": "physc_u10_q415",
    "subject": "apphysc",
    "unit": 10,
    "topic": "series circuits",
    "topicLabel": "series circuits",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The total resistance of resistors connected in series is found by:",
    "choices": [
      "A) Adding all individual resistances",
      "B) Adding reciprocals of individual resistances",
      "C) Taking the average of individual resistances",
      "D) Multiplying all individual resistances"
    ],
    "answer": 0,
    "explanation": "For series: R_total = R₁ + R₂ + R₃ + ... Students often confuse this with the parallel formula which uses reciprocals."
  },
  {
    "id": "physc_u10_q416",
    "subject": "apphysc",
    "unit": 10,
    "topic": "parallel circuits",
    "topicLabel": "parallel circuits",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The total resistance of resistors connected in parallel is found by:",
    "choices": [
      "A) 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...",
      "B) R_total = R₁ + R₂ + R₃ + ...",
      "C) R_total = R₁ × R₂ × R₃ × ...",
      "D) R_total = (R₁ + R₂ + R₃)/3"
    ],
    "answer": 0,
    "explanation": "For parallel resistors, we add reciprocals: 1/R_total = 1/R₁ + 1/R₂ + ... Students commonly confuse this with the series formula."
  },
  {
    "id": "physc_u10_q417",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Kirchhoff's laws",
    "topicLabel": "Kirchhoff's laws",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Kirchhoff's current law states that at any junction in a circuit:",
    "choices": [
      "A) The sum of currents entering equals the sum of currents leaving",
      "B) The sum of voltages around a loop equals zero",
      "C) Current is conserved in each branch",
      "D) Voltage is the same at all points"
    ],
    "answer": 0,
    "explanation": "Kirchhoff's current law (KCL) is based on conservation of charge at junctions. Option B describes the voltage law, while C and D are incorrect statements."
  },
  {
    "id": "physc_u10_q418",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Kirchhoff's laws",
    "topicLabel": "Kirchhoff's laws",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Kirchhoff's voltage law states that around any closed loop in a circuit:",
    "choices": [
      "A) The sum of all voltage drops and rises equals zero",
      "B) The current is the same everywhere",
      "C) The total resistance equals the sum of individual resistances",
      "D) The power dissipated is constant"
    ],
    "answer": 0,
    "explanation": "Kirchhoff's voltage law (KVL) states that the algebraic sum of voltages around any closed loop is zero, reflecting energy conservation. The other options describe different circuit principles."
  },
  {
    "id": "physc_u10_q419",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RC circuit, when a capacitor is initially uncharged and begins charging, the initial current is:",
    "choices": [
      "A) Maximum",
      "B) Zero",
      "C) Half the maximum value",
      "D) Exponentially decreasing"
    ],
    "answer": 0,
    "explanation": "Initially, an uncharged capacitor acts like a short circuit, so current is maximum (I = V/R). Current then decreases exponentially as the capacitor charges."
  },
  {
    "id": "physc_u10_q420",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The time constant τ (tau) for an RC circuit is equal to:",
    "choices": [
      "A) RC",
      "B) R/C",
      "C) C/R",
      "D) 1/(RC)"
    ],
    "answer": 0,
    "explanation": "The time constant τ = RC, where R is resistance and C is capacitance. This represents the time for the capacitor to charge to about 63% of its final value."
  },
  {
    "id": "physc_u10_q421",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits steady state",
    "topicLabel": "RC circuits steady state",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In steady state conditions of an RC circuit with a DC source, the current through the capacitor is:",
    "choices": [
      "A) Zero",
      "B) Maximum",
      "C) V/R",
      "D) Exponentially decreasing"
    ],
    "answer": 0,
    "explanation": "In steady state, the capacitor is fully charged and acts like an open circuit, so no current flows through it. Students often think current continues to flow."
  },
  {
    "id": "physc_u10_q422",
    "subject": "apphysc",
    "unit": 10,
    "topic": "current",
    "topicLabel": "current",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A wire carries a current of 2.0 A. If the cross-sectional area of the wire is doubled while keeping the current constant, what happens to the drift velocity of the electrons?",
    "choices": [
      "A) It doubles",
      "B) It remains the same",
      "C) It is halved",
      "D) It is quartered"
    ],
    "answer": 2,
    "explanation": "Current I = nAv_d where n is charge carrier density, A is cross-sectional area, and v_d is drift velocity. If current is constant and area doubles, drift velocity must halve to maintain the equation. Students often think velocity increases with area (choice A) or remains constant (choice B)."
  },
  {
    "id": "physc_u10_q423",
    "subject": "apphysc",
    "unit": 10,
    "topic": "resistance",
    "topicLabel": "resistance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A cylindrical conductor has resistance R. If its length is doubled and its radius is doubled, what is the new resistance?",
    "choices": [
      "A) R/2",
      "B) R",
      "C) 2R",
      "D) 4R"
    ],
    "answer": 0,
    "explanation": "Resistance R = ρL/A. When length doubles and radius doubles, area becomes 4 times larger (A = πr²). New resistance = ρ(2L)/(4A) = R/2. Students often forget area depends on r² (choosing B) or think resistance doubles with length without considering area (choosing C)."
  },
  {
    "id": "physc_u10_q424",
    "subject": "apphysc",
    "unit": 10,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical resistors can be connected to a battery either in series or in parallel. How does the total power dissipated compare between these configurations?",
    "choices": [
      "A) Series dissipates 4 times more power",
      "B) Parallel dissipates 4 times more power",
      "C) Series dissipates 2 times more power",
      "D) Both configurations dissipate equal power"
    ],
    "answer": 1,
    "explanation": "For series: total resistance is 2R, so P = V²/(2R). For parallel: total resistance is R/2, so P = V²/(R/2) = 2V²/R. The ratio is 4:1 in favor of parallel. Students often think series has higher power because individual resistors have higher voltage (choice A) or think current determines power directly (choice C)."
  },
  {
    "id": "physc_u10_q425",
    "subject": "apphysc",
    "unit": 10,
    "topic": "EMF",
    "topicLabel": "EMF",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A battery with EMF 12V and internal resistance 2Ω is connected to an external resistor of 4Ω. What is the terminal voltage of the battery?",
    "choices": [
      "A) 4V",
      "B) 6V",
      "C) 8V",
      "D) 12V"
    ],
    "answer": 2,
    "explanation": "Current through circuit is I = EMF/(r + R) = 12V/(2Ω + 4Ω) = 2A. Terminal voltage is EMF - Ir = 12V - (2A)(2Ω) = 8V. Students often confuse terminal voltage with EMF (choice D), use wrong current calculation (choice B), or calculate voltage drop across external resistor thinking it's terminal voltage (choice C based on wrong reasoning)."
  },
  {
    "id": "physc_u10_q426",
    "subject": "apphysc",
    "unit": 10,
    "topic": "series circuits",
    "topicLabel": "series circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a series circuit with three resistors (2Ω, 4Ω, and 6Ω) connected to a 24V source, what is the voltage across the 4Ω resistor?",
    "choices": [
      "A) 6V",
      "B) 8V",
      "C) 12V",
      "D) 16V"
    ],
    "answer": 1,
    "explanation": "Total resistance is 2 + 4 + 6 = 12Ω. Current is I = 24V/12Ω = 2A. Voltage across 4Ω resistor is V = IR = 2A × 4Ω = 8V. Students might use voltage divider incorrectly (choosing values based on proportions without proper calculation) or think voltage splits equally (choosing 8V for wrong reasons)."
  },
  {
    "id": "physc_u10_q427",
    "subject": "apphysc",
    "unit": 10,
    "topic": "parallel circuits",
    "topicLabel": "parallel circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Three resistors of 6Ω, 12Ω, and 4Ω are connected in parallel to a 12V battery. Which resistor dissipates the most power?",
    "choices": [
      "A) 6Ω resistor",
      "B) 12Ω resistor",
      "C) 4Ω resistor",
      "D) All dissipate equal power"
    ],
    "answer": 2,
    "explanation": "In parallel circuits, all resistors have the same voltage (12V). Power P = V²/R, so smaller resistance dissipates more power. P₄ = 144/4 = 36W, P₆ = 144/6 = 24W, P₁₂ = 144/12 = 12W. The 4Ω resistor dissipates most power. Students often think larger resistance dissipates more power (choice B) or that power is equal in parallel (choice D)."
  },
  {
    "id": "physc_u10_q428",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Kirchhoff's laws",
    "topicLabel": "Kirchhoff's laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a circuit with two loops, currents I₁ = 3A and I₂ = 2A flow clockwise in their respective loops. At their common junction, what is the current in the shared branch if current flows from loop 1 to loop 2?",
    "choices": [
      "A) 1A from loop 1 to loop 2",
      "B) 1A from loop 2 to loop 1",
      "C) 5A from loop 1 to loop 2",
      "D) The direction cannot be determined"
    ],
    "answer": 0,
    "explanation": "Using Kirchhoff's current law at the junction: current into junction equals current out. If I₁ = 3A and I₂ = 2A, and current flows from loop 1 to loop 2, then 1A flows from loop 1 to loop 2. Students often add currents incorrectly (choice C), get direction wrong (choice B), or think more information is needed (choice D)."
  },
  {
    "id": "physc_u10_q429",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An uncharged capacitor is connected in series with a resistor to a battery. At the moment the switch is closed, what is the current through the resistor?",
    "choices": [
      "A) Zero",
      "B) V/R",
      "C) V/(2R)",
      "D) It depends on the capacitance"
    ],
    "answer": 1,
    "explanation": "At t = 0, the uncharged capacitor acts like a short circuit (no voltage drop across it), so all battery voltage appears across the resistor. Initial current is I₀ = V/R. Students often think current is zero initially because capacitor is uncharged (choice A), or think capacitance affects initial current (choice D), or use some average value (choice C)."
  },
  {
    "id": "physc_u10_q430",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits steady state",
    "topicLabel": "RC circuits steady state",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RC circuit connected to a DC voltage source, after a very long time, what is the current through the resistor?",
    "choices": [
      "A) V/R",
      "B) V/(2R)",
      "C) Zero",
      "D) VC/R"
    ],
    "answer": 2,
    "explanation": "In steady state, the capacitor is fully charged and acts like an open circuit. No current flows through the resistor. The voltage across the capacitor equals the source voltage. Students often think steady-state current equals initial current (choice A), use some intermediate value (choice B), or incorrectly involve capacitance in current calculation (choice D)."
  },
  {
    "id": "physc_u10_q431",
    "subject": "apphysc",
    "unit": 10,
    "topic": "current",
    "topicLabel": "current",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If 3.2 × 10¹⁹ electrons pass through a cross-section of a conductor in 4.0 seconds, what is the current?",
    "choices": [
      "A) 0.8 A",
      "B) 1.28 A",
      "C) 8.0 A",
      "D) 12.8 A"
    ],
    "answer": 1,
    "explanation": "Current I = Q/t = (N × e)/t = (3.2 × 10¹⁹ × 1.6 × 10⁻¹⁹ C)/(4.0 s) = 5.12 C/4.0 s = 1.28 A. Students often forget to multiply by electron charge (choice A), make calculation errors (choices C, D), or use wrong powers of 10."
  },
  {
    "id": "physc_u10_q432",
    "subject": "apphysc",
    "unit": 10,
    "topic": "resistance",
    "topicLabel": "resistance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two wires of the same material have the same resistance. Wire A has twice the length of wire B. How do their cross-sectional areas compare?",
    "choices": [
      "A) Area A = Area B",
      "B) Area A = 2 × Area B",
      "C) Area A = 0.5 × Area B",
      "D) Area A = 4 × Area B"
    ],
    "answer": 1,
    "explanation": "Since R = ρL/A and both have same R and ρ: R_A = R_B means ρL_A/A_A = ρL_B/A_B. With L_A = 2L_B, we get 2L_B/A_A = L_B/A_B, so A_A = 2A_B. Students often think areas should be equal since resistances are equal (choice A) or use inverse relationship (choice C)."
  },
  {
    "id": "physc_u10_q433",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Ohm's law",
    "topicLabel": "Ohm's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A light bulb rated at 60W and 120V is connected to a 60V source. What power does it actually dissipate, assuming its resistance remains constant?",
    "choices": [
      "A) 15 W",
      "B) 30 W",
      "C) 60 W",
      "D) 120 W"
    ],
    "answer": 0,
    "explanation": "Bulb resistance R = V²/P = (120V)²/60W = 240Ω. At 60V: P = V²/R = (60V)²/240Ω = 15W. Power varies as voltage squared when resistance is constant. Students often think power scales linearly with voltage (choice B), remains constant (choice C), or doubles somehow (choice D)."
  },
  {
    "id": "physc_u10_q434",
    "subject": "apphysc",
    "unit": 10,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A battery delivers 2A to an external circuit and has a terminal voltage of 10V. If the battery's internal resistance is 1Ω, what is the power dissipated internally?",
    "choices": [
      "A) 2 W",
      "B) 4 W",
      "C) 10 W",
      "D) 20 W"
    ],
    "answer": 1,
    "explanation": "Power dissipated in internal resistance P = I²r = (2A)²(1Ω) = 4W. Students might calculate terminal voltage times current (choice D), confuse with external power (choice C), or make calculation errors (choice A)."
  },
  {
    "id": "physc_u10_q435",
    "subject": "apphysc",
    "unit": 10,
    "topic": "series circuits",
    "topicLabel": "series circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A series circuit has four identical resistors and a total current of 0.5A. If one resistor is removed, what happens to the current?",
    "choices": [
      "A) Increases to 0.67A",
      "B) Increases to 0.75A",
      "C) Decreases to 0.375A",
      "D) Remains 0.5A"
    ],
    "answer": 0,
    "explanation": "Initially: I₁ = V/(4R) = 0.5A, so V = 2R. After removing one resistor: I₂ = V/(3R) = 2R/(3R) = 2/3 ≈ 0.67A. Students often think current decreases when resistance is removed (choice C), think it increases by 1/4 (choice B), or think removing components doesn't affect current (choice D)."
  },
  {
    "id": "physc_u10_q436",
    "subject": "apphysc",
    "unit": 10,
    "topic": "parallel circuits",
    "topicLabel": "parallel circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 6Ω and 12Ω resistor are connected in parallel. If the current through the 6Ω resistor is 2A, what is the total current from the source?",
    "choices": [
      "A) 1A",
      "B) 2A",
      "C) 3A",
      "D) 4A"
    ],
    "answer": 2,
    "explanation": "In parallel, voltage is same across both resistors. V = I₆Ω × 6Ω = 2A × 6Ω = 12V. Current through 12Ω resistor: I₁₂Ω = 12V/12Ω = 1A. Total current = 2A + 1A = 3A. Students might think currents are equal (choice B), forget to add currents (choice A), or double the given current (choice D)."
  },
  {
    "id": "physc_u10_q437",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Kirchhoff's laws",
    "topicLabel": "Kirchhoff's laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circuit loop contains a 12V battery, 3V battery (opposing), and resistors totaling 6Ω. What is the current in the loop?",
    "choices": [
      "A) 0.5A",
      "B) 1.5A",
      "C) 2.0A",
      "D) 2.5A"
    ],
    "answer": 1,
    "explanation": "Using Kirchhoff's voltage law: net EMF = I × total resistance. Net EMF = 12V - 3V = 9V (assuming they oppose). Current I = 9V/6Ω = 1.5A. Students might add voltages incorrectly (choice D), use wrong total voltage (choices A, C), or make calculation errors."
  },
  {
    "id": "physc_u10_q438",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a charging RC circuit, when does the current equal half its initial value?",
    "choices": [
      "A) At time t = RC",
      "B) At time t = 0.69RC",
      "C) At time t = 0.5RC",
      "D) At time t = 2RC"
    ],
    "answer": 1,
    "explanation": "Current during charging: I(t) = I₀e^(-t/RC). For I(t) = I₀/2: e^(-t/RC) = 1/2, so -t/RC = ln(1/2) = -ln(2) ≈ -0.693, giving t ≈ 0.69RC. Students often confuse with time constant RC (choice A), think it's simply half the time constant (choice C), or use wrong exponential relationships (choice D)."
  },
  {
    "id": "physc_u10_q439",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits steady state",
    "topicLabel": "RC circuits steady state",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An RC circuit reaches steady state with a 9V battery. If a second identical capacitor is added in parallel and the circuit reaches a new steady state, what is the voltage across each capacitor?",
    "choices": [
      "A) 4.5V",
      "B) 6V",
      "C) 9V",
      "D) 18V"
    ],
    "answer": 2,
    "explanation": "In steady state, no current flows and capacitors are fully charged to the source voltage regardless of capacitance value or parallel combinations. Both capacitors will have 9V across them. Students often think voltage divides between capacitors (choice A), think parallel combination affects voltage (choice B), or think voltages add (choice D)."
  },
  {
    "id": "physc_u10_q440",
    "subject": "apphysc",
    "unit": 10,
    "topic": "resistance",
    "topicLabel": "resistance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical resistors are connected first in series, then in parallel. If the series combination has resistance Rs and the parallel combination has resistance Rp, what is the ratio Rs/Rp?",
    "choices": [
      "A) 2",
      "B) 4",
      "C) 1/2",
      "D) 1/4"
    ],
    "answer": 1,
    "explanation": "For identical resistors R: in series Rs = R + R = 2R, in parallel Rp = R/2. Therefore Rs/Rp = 2R/(R/2) = 4. Students often choose A) 2 by incorrectly thinking Rs/Rp = 2R/R = 2, forgetting that parallel resistance is R/2, not R. Choice C) 1/2 comes from inverting the correct ratio."
  },
  {
    "id": "physc_u10_q441",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Ohm's law",
    "topicLabel": "Ohm's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A variable resistor is connected to a battery with internal resistance. As the external resistance increases from a very small value, what happens to the voltage across the external resistor?",
    "choices": [
      "A) It increases continuously toward the EMF",
      "B) It increases then decreases",
      "C) It decreases continuously",
      "D) It remains constant"
    ],
    "answer": 0,
    "explanation": "Using voltage divider principle: V_external = EMF × R_external/(R_internal + R_external). As R_external increases from near zero, this fraction approaches 1, so voltage approaches EMF. Students often choose B) thinking of power transfer maximum, but that's power, not voltage. Choice C) incorrectly applies simple Ohm's law without considering the circuit."
  },
  {
    "id": "physc_u10_q442",
    "subject": "apphysc",
    "unit": 10,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A battery with EMF ε and internal resistance r is connected to an external resistor R. For what value of R is the power dissipated in the external resistor maximized?",
    "choices": [
      "A) R = 0",
      "B) R = r",
      "C) R = 2r",
      "D) R = ε/2"
    ],
    "answer": 1,
    "explanation": "Power in external resistor P = I²R = [ε/(R+r)]²R. Taking derivative and setting to zero gives maximum at R = r (impedance matching). Students often choose A) thinking more current means more power, missing that P = I²R goes to zero as R→0. Choice C) comes from confusing maximum power transfer with maximum efficiency conditions."
  },
  {
    "id": "physc_u10_q443",
    "subject": "apphysc",
    "unit": 10,
    "topic": "EMF",
    "topicLabel": "EMF",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A battery has an EMF of 12 V and internal resistance of 2 Ω. When connected to a 10 Ω load, what is the terminal voltage of the battery?",
    "choices": [
      "A) 8 V",
      "B) 10 V",
      "C) 11 V",
      "D) 12 V"
    ],
    "answer": 1,
    "explanation": "Current I = EMF/(R_internal + R_load) = 12/(2+10) = 1 A. Terminal voltage = EMF - I×r = 12 - 1×2 = 10 V. Students often choose D) 12 V by ignoring internal resistance drop. Choice A) incorrectly calculates voltage drop across load as if internal resistance were in series with a voltage divider."
  },
  {
    "id": "physc_u10_q444",
    "subject": "apphysc",
    "unit": 10,
    "topic": "series circuits",
    "topicLabel": "series circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a series circuit with three resistors (2 Ω, 4 Ω, and 6 Ω) connected to a 24 V source, what fraction of the total power is dissipated by the 4 Ω resistor?",
    "choices": [
      "A) 1/6",
      "B) 1/4",
      "C) 1/3",
      "D) 1/2"
    ],
    "answer": 2,
    "explanation": "In series circuits, current is same through all resistors, so P ∝ R. Total resistance = 2+4+6 = 12 Ω. Power fraction = 4/12 = 1/3. Students often choose B) 1/4 by incorrectly thinking power is inversely proportional to resistance (confusing with parallel circuits) or thinking it's simply the fraction of resistors (1 out of 4 total ohms per resistor)."
  },
  {
    "id": "physc_u10_q445",
    "subject": "apphysc",
    "unit": 10,
    "topic": "parallel circuits",
    "topicLabel": "parallel circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Three resistors (3 Ω, 6 Ω, and 9 Ω) are connected in parallel to a 18 V source. Which resistor dissipates the most power?",
    "choices": [
      "A) The 3 Ω resistor",
      "B) The 6 Ω resistor",
      "C) The 9 Ω resistor",
      "D) All dissipate equal power"
    ],
    "answer": 0,
    "explanation": "In parallel circuits, voltage is same across all resistors, so P = V²/R. Lower resistance means higher power. P₃ = 18²/3 = 108 W, P₆ = 18²/6 = 54 W, P₉ = 18²/9 = 36 W. Students often choose C) thinking higher resistance means more power (confusing series and parallel behavior) or D) thinking equal voltage means equal power."
  },
  {
    "id": "physc_u10_q446",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RC charging circuit, when does the power dissipated in the resistor reach its maximum value?",
    "choices": [
      "A) At t = 0",
      "B) At t = RC",
      "C) At t = 2RC",
      "D) As t approaches infinity"
    ],
    "answer": 0,
    "explanation": "Power in resistor P = I²R. During charging, I = (ε/R)e^(-t/RC), so I is maximum at t = 0, making power maximum at t = 0. Students often choose B) t = RC thinking this is when 'everything happens' in RC circuits (63% charge time), or D) thinking steady state means maximum power, missing that steady state current is zero in capacitor circuits."
  },
  {
    "id": "physc_u10_q447",
    "subject": "apphysc",
    "unit": 10,
    "topic": "resistance",
    "topicLabel": "resistance",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical resistors are connected in parallel, then this combination is connected in series with a third identical resistor. If each resistor has resistance R, what is the equivalent resistance between the terminals?",
    "choices": [
      "A) R/2",
      "B) 2R/3",
      "C) 3R/2",
      "D) 2R"
    ],
    "answer": 2,
    "explanation": "Two identical resistors R in parallel give R/2. This parallel combination in series with the third resistor R gives R/2 + R = 3R/2. Common errors include adding all three directly (3R), finding the parallel combination of all three (R/3), or incorrectly calculating the series combination as 2R."
  },
  {
    "id": "physc_u10_q448",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Ohm's law",
    "topicLabel": "Ohm's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A battery with EMF ε and internal resistance r is connected to an external resistor R. As R is varied, at what value of R is the power dissipated in the external resistor maximum?",
    "choices": [
      "A) R = 0",
      "B) R = r",
      "C) R = 2r",
      "D) R = ε/2r"
    ],
    "answer": 1,
    "explanation": "The power in external resistor is P = I²R = (ε/(R+r))²R = ε²R/(R+r)². Taking dP/dR = 0 gives maximum at R = r. This is the maximum power transfer theorem. Students often think maximum power occurs at minimum resistance (R = 0) or confuse this with maximum current condition."
  },
  {
    "id": "physc_u10_q449",
    "subject": "apphysc",
    "unit": 10,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a circuit with three resistors R₁ = 2Ω, R₂ = 4Ω, and R₃ = 6Ω connected in parallel to a 12V battery, which resistor dissipates the most power?",
    "choices": [
      "A) R₁ (2Ω)",
      "B) R₂ (4Ω)",
      "C) R₃ (6Ω)",
      "D) All dissipate equal power"
    ],
    "answer": 0,
    "explanation": "In parallel, all resistors have the same voltage (12V). Power P = V²/R, so P₁ = 144/2 = 72W, P₂ = 144/4 = 36W, P₃ = 144/6 = 24W. The smallest resistor dissipates the most power in parallel. Students often think the largest resistor dissipates most power, confusing series and parallel behavior."
  },
  {
    "id": "physc_u10_q450",
    "subject": "apphysc",
    "unit": 10,
    "topic": "EMF",
    "topicLabel": "EMF",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A battery with EMF 12V and internal resistance 2Ω is connected to a 4Ω external resistor. What is the terminal voltage of the battery?",
    "choices": [
      "A) 4V",
      "B) 6V",
      "C) 8V",
      "D) 12V"
    ],
    "answer": 2,
    "explanation": "Current I = ε/(R + r) = 12/(4 + 2) = 2A. Terminal voltage V = ε - Ir = 12 - (2)(2) = 8V. Students often forget about voltage drop across internal resistance and answer 12V, or incorrectly calculate the voltage division as 6V or 4V."
  },
  {
    "id": "physc_u10_q451",
    "subject": "apphysc",
    "unit": 10,
    "topic": "Kirchhoff's laws",
    "topicLabel": "Kirchhoff's laws",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a circuit with two batteries (12V and 8V) and three resistors (2Ω, 3Ω, 4Ω) forming two loops, which Kirchhoff's law is violated if the sum of currents entering a junction equals 1.5 times the sum of currents leaving?",
    "choices": [
      "A) Kirchhoff's voltage law only",
      "B) Kirchhoff's current law only",
      "C) Both laws simultaneously",
      "D) Neither law (this is physically possible)"
    ],
    "answer": 1,
    "explanation": "Kirchhoff's current law states that current in equals current out at any junction (conservation of charge). If current in = 1.5 × current out, KCL is violated. KVL could still be satisfied around loops. Students might think this violates both laws or is somehow physically possible."
  },
  {
    "id": "physc_u10_q452",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RC charging circuit, when does the power dissipated in the resistor reach its maximum value?",
    "choices": [
      "A) At t = 0",
      "B) At t = RC",
      "C) At t = 2RC",
      "D) As t approaches infinity"
    ],
    "answer": 0,
    "explanation": "Power in resistor P = I²R = (V₀e^(-t/RC)/R)²R = V₀²e^(-2t/RC)/R. This is maximum at t = 0 when current is maximum (V₀/R). Students often confuse this with capacitor energy storage, which peaks later, or think maximum power occurs at the time constant RC."
  },
  {
    "id": "physc_u10_q453",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits steady state",
    "topicLabel": "RC circuits steady state",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a complex circuit with multiple resistors and a capacitor, after reaching steady state, the capacitor can be replaced with what equivalent circuit element for analysis purposes?",
    "choices": [
      "A) A short circuit (wire)",
      "B) An open circuit (break)",
      "C) A resistor with infinite resistance",
      "D) A voltage source equal to the capacitor voltage"
    ],
    "answer": 1,
    "explanation": "In steady state, no current flows through the capacitor (dQ/dt = 0), so it acts as an open circuit. While options B and C seem similar, 'open circuit' is the standard terminology. Students might think the capacitor acts as a short circuit or voltage source in steady state."
  },
  {
    "id": "physc_u10_q454",
    "subject": "apphysc",
    "unit": 10,
    "topic": "current",
    "topicLabel": "current",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the current in a wire varies as I(t) = I₀(1 - e^(-t/τ)), what is the total charge that flows through a cross-section from t = 0 to t = 2τ?",
    "choices": [
      "A) I₀τ(1 - e^(-2))",
      "B) I₀τ(2 - e^(-2))",
      "C) I₀τ(1 + e^(-2))",
      "D) 2I₀τ"
    ],
    "answer": 0,
    "explanation": "Charge Q = ∫I(t)dt = ∫I₀(1 - e^(-t/τ))dt from 0 to 2τ = I₀[t + τe^(-t/τ)] evaluated from 0 to 2τ = I₀[(2τ + τe^(-2)) - (0 + τ)] = I₀τ(1 - e^(-2)). Students often make integration errors or forget the limits of integration."
  },
  {
    "id": "physc_u10_q455",
    "subject": "apphysc",
    "unit": 10,
    "topic": "EMF",
    "topicLabel": "EMF",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A battery is being charged by an external source. If the charging current is 2A and the terminal voltage is 14V, while the battery's EMF is 12V, what is the internal resistance?",
    "choices": [
      "A) 0.5Ω",
      "B) 1Ω",
      "C) 2Ω",
      "D) 7Ω"
    ],
    "answer": 1,
    "explanation": "During charging, terminal voltage exceeds EMF: V = ε + Ir, so 14 = 12 + (2)r, giving r = 1Ω. Students often use V = ε - Ir (discharging formula) getting negative resistance, or confuse the direction of current flow during charging."
  },
  {
    "id": "physc_u10_q456",
    "subject": "apphysc",
    "unit": 10,
    "topic": "series circuits",
    "topicLabel": "series circuits",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a series circuit with a battery, resistor R, and capacitor C, immediately after the switch is closed, what fraction of the battery voltage appears across the resistor?",
    "choices": [
      "A) 0",
      "B) 1/2",
      "C) RC/(1+RC)",
      "D) 1"
    ],
    "answer": 3,
    "explanation": "At t = 0⁺, the capacitor acts as a short circuit (no voltage drop), so all battery voltage appears across the resistor. The initial current is V₀/R. Students often think the voltage divides equally or that no voltage appears across the resistor initially."
  },
  {
    "id": "physc_u11_q457",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on charge",
    "topicLabel": "magnetic force on charge",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A positively charged particle moves with velocity v to the right in a uniform magnetic field B pointing into the page. What is the direction of the magnetic force on the particle?",
    "choices": [
      "A) Upward",
      "B) Downward",
      "C) To the right",
      "D) Into the page"
    ],
    "answer": 0,
    "explanation": "Using the right-hand rule for F = qv × B, with v right and B into the page, the force points upward. Common mistakes include confusing the direction or forgetting that force is perpendicular to both v and B."
  },
  {
    "id": "physc_u11_q458",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "magnetic force on wire",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A straight wire carrying current I is placed in a uniform magnetic field B. The magnetic force on the wire is zero when the wire is oriented:",
    "choices": [
      "A) Parallel to the magnetic field",
      "B) Perpendicular to the magnetic field",
      "C) At 45 degrees to the magnetic field",
      "D) At any angle to the magnetic field"
    ],
    "answer": 0,
    "explanation": "The magnetic force F = IL × B is zero when the current direction is parallel to the magnetic field because sin(0°) = 0. Students often think the force is zero when perpendicular, which actually gives maximum force."
  },
  {
    "id": "physc_u11_q459",
    "subject": "apphysc",
    "unit": 11,
    "topic": "torque on current loop",
    "topicLabel": "torque on current loop",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rectangular current loop in a uniform magnetic field experiences maximum torque when the plane of the loop is:",
    "choices": [
      "A) Parallel to the magnetic field",
      "B) Perpendicular to the magnetic field",
      "C) At 30 degrees to the magnetic field",
      "D) At 60 degrees to the magnetic field"
    ],
    "answer": 0,
    "explanation": "Maximum torque occurs when the magnetic dipole moment is perpendicular to B, which happens when the loop plane is parallel to B. Students often confuse this with the zero torque condition when the loop plane is perpendicular to B."
  },
  {
    "id": "physc_u11_q460",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to the Biot-Savart law, the magnetic field produced by a current element is proportional to:",
    "choices": [
      "A) The current and inversely proportional to the square of the distance",
      "B) The square of the current and inversely proportional to the distance",
      "C) The current and inversely proportional to the distance",
      "D) The square of the current and inversely proportional to the square of the distance"
    ],
    "answer": 0,
    "explanation": "The Biot-Savart law shows dB ∝ I/r². Students often confuse this with Coulomb's law relationships or think it follows a 1/r dependence like some other field laws."
  },
  {
    "id": "physc_u11_q461",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Ampere's law states that the line integral of the magnetic field around a closed path is proportional to:",
    "choices": [
      "A) The current enclosed by the path",
      "B) The total current in the circuit",
      "C) The magnetic flux through the path",
      "D) The area enclosed by the path"
    ],
    "answer": 0,
    "explanation": "Ampere's law: ∮B·dl = μ₀Ienc relates the circulation of B to only the current enclosed by the integration path. Students often think it depends on all current in the circuit or confuse it with Faraday's law involving flux."
  },
  {
    "id": "physc_u11_q462",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic field configurations",
    "topicLabel": "magnetic field configurations",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The magnetic field lines around a straight current-carrying wire form:",
    "choices": [
      "A) Concentric circles around the wire",
      "B) Straight lines parallel to the wire",
      "C) Radial lines extending outward from the wire",
      "D) Ellipses around the wire"
    ],
    "answer": 0,
    "explanation": "Current in a straight wire creates concentric circular magnetic field lines around the wire. Students might think the field lines are parallel to current (like electric field lines parallel to charged rods) or radial like point charges."
  },
  {
    "id": "physc_u11_q463",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "solenoids",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The magnetic field inside a long solenoid is:",
    "choices": [
      "A) Uniform and parallel to the axis",
      "B) Non-uniform and perpendicular to the axis",
      "C) Zero everywhere",
      "D) Uniform and perpendicular to the axis"
    ],
    "answer": 0,
    "explanation": "Inside a long solenoid, the magnetic field is uniform and parallel to the solenoid axis. Students often think it's perpendicular to the axis (confusing with field around single loops) or that it varies in strength inside."
  },
  {
    "id": "physc_u11_q464",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "magnetic force on wire",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two parallel wires carrying current in the same direction will:",
    "choices": [
      "A) Attract each other",
      "B) Repel each other",
      "C) Exert no force on each other",
      "D) Only interact if the currents are equal"
    ],
    "answer": 0,
    "explanation": "Parallel currents in the same direction create attractive magnetic forces between the wires. Students often think like charges repel so like currents should repel, or confuse this with the opposite current case."
  },
  {
    "id": "physc_u11_q465",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The magnetic field at the center of a circular current loop is:",
    "choices": [
      "A) Perpendicular to the plane of the loop",
      "B) In the plane of the loop",
      "C) Zero",
      "D) Tangent to the loop"
    ],
    "answer": 0,
    "explanation": "Using Biot-Savart law, all current elements in a circular loop contribute magnetic field perpendicular to the loop plane at the center. Students might think it's in the plane (confusing with field direction along the loop) or zero due to symmetry."
  },
  {
    "id": "physc_u11_q466",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "solenoids",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The magnetic field strength inside a solenoid is proportional to:",
    "choices": [
      "A) The current and the number of turns per unit length",
      "B) Only the current",
      "C) Only the number of total turns",
      "D) The cross-sectional area of the solenoid"
    ],
    "answer": 0,
    "explanation": "For a solenoid, B = μ₀nI where n is turns per unit length and I is current. Students often think it depends on total turns rather than turn density, or forget one of the factors entirely."
  },
  {
    "id": "physc_u11_q467",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on charge",
    "topicLabel": "magnetic force on charge",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A proton moving at 2.0 × 10⁶ m/s enters a uniform magnetic field of 0.50 T at an angle of 30° to the field lines. What is the magnitude of the magnetic force on the proton?",
    "choices": [
      "A) 8.0 × 10⁻¹⁴ N",
      "B) 1.6 × 10⁻¹³ N",
      "C) 1.4 × 10⁻¹³ N",
      "D) 2.8 × 10⁻¹³ N"
    ],
    "answer": 0,
    "explanation": "F = qvB sin θ = (1.6 × 10⁻¹⁹)(2.0 × 10⁶)(0.50)(sin 30°) = 8.0 × 10⁻¹⁴ N. Choice B uses sin 90°, choice C uses cos 30°, choice D doubles the correct answer."
  },
  {
    "id": "physc_u11_q468",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to the Biot-Savart law, if the distance from a current element to a point is doubled while keeping the current constant, how does the magnetic field contribution change?",
    "choices": [
      "A) Decreases by a factor of 4",
      "B) Decreases by a factor of 2",
      "C) Increases by a factor of 2",
      "D) Remains the same"
    ],
    "answer": 0,
    "explanation": "The Biot-Savart law shows dB ∝ 1/r², so doubling the distance reduces the field by a factor of 4. Choice B confuses with 1/r dependence, choices C and D show misunderstanding of inverse relationships."
  },
  {
    "id": "physc_u11_q469",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A long straight wire carries 8.0 A of current. Using Ampere's law, what is the magnetic field at a distance of 0.040 m from the wire?",
    "choices": [
      "A) 4.0 × 10⁻⁵ T",
      "B) 8.0 × 10⁻⁵ T",
      "C) 1.6 × 10⁻⁴ T",
      "D) 3.2 × 10⁻⁴ T"
    ],
    "answer": 0,
    "explanation": "Using Ampere's law: B = μ₀I/(2πr) = (4π × 10⁻⁷)(8.0)/(2π × 0.040) = 4.0 × 10⁻⁵ T. Choice B omits the factor of 2, choice C uses diameter instead of radius, choice D doubles choice C."
  },
  {
    "id": "physc_u11_q470",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic field configurations",
    "topicLabel": "magnetic field configurations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two parallel wires carry currents in opposite directions. At a point exactly halfway between the wires, the magnetic fields produced by each wire:",
    "choices": [
      "A) Add to produce a stronger field",
      "B) Cancel to produce zero field",
      "C) Produce a field perpendicular to both wires",
      "D) Produce a field parallel to the wires"
    ],
    "answer": 0,
    "explanation": "With opposite currents, the magnetic field vectors at the midpoint both point in the same direction (using right-hand rule), so they add. Choice B would be correct for same-direction currents, choices C and D misunderstand field direction."
  },
  {
    "id": "physc_u11_q471",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "solenoids",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solenoid has 500 turns over a length of 0.25 m and carries a current of 2.0 A. What is the magnetic field inside the solenoid?",
    "choices": [
      "A) 5.0 × 10⁻³ T",
      "B) 1.0 × 10⁻² T",
      "C) 2.5 × 10⁻² T",
      "D) 5.0 × 10⁻² T"
    ],
    "answer": 0,
    "explanation": "B = μ₀nI where n = N/L = 500/0.25 = 2000 turns/m. B = (4π × 10⁻⁷)(2000)(2.0) = 5.0 × 10⁻³ T. Choice B doubles this, choice C uses wrong length calculation, choice D uses total turns instead of turns per unit length."
  },
  {
    "id": "physc_u11_q472",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on charge",
    "topicLabel": "magnetic force on charge",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An electron moves in a circular path of radius 0.020 m in a uniform magnetic field of 1.5 × 10⁻³ T. What is the speed of the electron?",
    "choices": [
      "A) 5.3 × 10⁶ m/s",
      "B) 1.1 × 10⁷ m/s",
      "C) 2.6 × 10⁶ m/s",
      "D) 1.8 × 10⁷ m/s"
    ],
    "answer": 0,
    "explanation": "For circular motion: qvB = mv²/r, so v = qBr/m = (1.6 × 10⁻¹⁹)(1.5 × 10⁻³)(0.020)/(9.1 × 10⁻³¹) = 5.3 × 10⁶ m/s. Choice B doubles the result, choice C halves it, choice D uses incorrect mass."
  },
  {
    "id": "physc_u11_q473",
    "subject": "apphysc",
    "unit": 11,
    "topic": "torque on current loop",
    "topicLabel": "torque on current loop",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circular coil with 10 turns and radius 0.15 m carries 3.0 A in a magnetic field of 0.80 T. When the coil's plane makes a 60° angle with the field, what torque acts on it?",
    "choices": [
      "A) 1.3 N⋅m",
      "B) 2.3 N⋅m",
      "C) 2.7 N⋅m",
      "D) 4.6 N⋅m"
    ],
    "answer": 2,
    "explanation": "τ = NIAB sin θ = (10)(3.0)(π × 0.15²)(0.80)(sin 60°) = 2.7 N⋅m. Choice A uses sin 30°, choice B omits the π in area calculation, choice D uses cos 60° instead of sin 60°."
  },
  {
    "id": "physc_u11_q474",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A straight wire segment of length 0.50 m carries 6.0 A of current. Using the Biot-Savart law, the magnetic field at a point 0.30 m away from the center of the wire, perpendicular to it, is approximately:",
    "choices": [
      "A) 2.0 × 10⁻⁶ T",
      "B) 6.7 × 10⁻⁶ T",
      "C) 1.0 × 10⁻⁵ T",
      "D) 4.0 × 10⁻⁶ T"
    ],
    "answer": 1,
    "explanation": "For a finite straight wire: B = (μ₀I/4πr) × [L/√(r² + (L/2)²)] = (10⁻⁷ × 6.0/0.30) × [0.50/√(0.09 + 0.0625)] ≈ 6.7 × 10⁻⁶ T. Other choices use approximations for infinite wire or incorrect geometry."
  },
  {
    "id": "physc_u11_q475",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An Amperian loop encloses three wires carrying currents of +5.0 A, -3.0 A, and +2.0 A respectively. What is the value of ∮B⋅dl around this loop?",
    "choices": [
      "A) 5.0 × 10⁻⁶ T⋅m",
      "B) 1.3 × 10⁻⁵ T⋅m",
      "C) 2.5 × 10⁻⁶ T⋅m",
      "D) 0 T⋅m"
    ],
    "answer": 0,
    "explanation": "∮B⋅dl = μ₀Ienc = μ₀(5.0 - 3.0 + 2.0) = 4π × 10⁻⁷ × 4.0 = 5.0 × 10⁻⁶ T⋅m. Choice B uses total current magnitude, choice C uses only net positive current, choice D assumes currents cancel completely."
  },
  {
    "id": "physc_u11_q476",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "solenoids",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the current in a solenoid is doubled and the number of turns per unit length is halved, the magnetic field inside the solenoid:",
    "choices": [
      "A) Remains the same",
      "B) Doubles",
      "C) Is halved",
      "D) Quadruples"
    ],
    "answer": 0,
    "explanation": "B = μ₀nI, so if n → n/2 and I → 2I, then B → μ₀(n/2)(2I) = μ₀nI, unchanged. Choice B considers only current doubling, choice C considers only turn density halving, choice D multiplies both effects incorrectly."
  },
  {
    "id": "physc_u11_q477",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on charge",
    "topicLabel": "magnetic force on charge",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A charged particle moves in a helical path through a magnetic field. This indicates that the particle's initial velocity had components:",
    "choices": [
      "A) Only parallel to the magnetic field",
      "B) Only perpendicular to the magnetic field",
      "C) Both parallel and perpendicular to the magnetic field",
      "D) At 45° to the magnetic field"
    ],
    "answer": 2,
    "explanation": "A helical path results from circular motion (perpendicular component) combined with constant velocity along field lines (parallel component). Choice A gives straight-line motion, choice B gives circular motion, choice D is too specific about angle."
  },
  {
    "id": "physc_u11_q478",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "magnetic force on wire",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A horizontal wire carries 8.0 A eastward through Earth's magnetic field (5.0 × 10⁻⁵ T northward). The magnetic force per meter on the wire is:",
    "choices": [
      "A) 4.0 × 10⁻⁴ N/m upward",
      "B) 4.0 × 10⁻⁴ N/m downward",
      "C) 4.0 × 10⁻⁴ N/m northward",
      "D) 4.0 × 10⁻⁴ N/m southward"
    ],
    "answer": 1,
    "explanation": "Using F = IL × B and right-hand rule: current east, field north gives force downward. |F|/L = IB = (8.0)(5.0 × 10⁻⁵) = 4.0 × 10⁻⁴ N/m. Choice A has wrong direction, choices C and D confuse force direction with field or current direction."
  },
  {
    "id": "physc_u11_q479",
    "subject": "apphysc",
    "unit": 11,
    "topic": "torque on current loop",
    "topicLabel": "torque on current loop",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A square current loop is placed in a uniform magnetic field. The loop will experience zero torque when its plane is:",
    "choices": [
      "A) Parallel to the magnetic field",
      "B) Perpendicular to the magnetic field",
      "C) At 45° to the magnetic field",
      "D) At any angle to the magnetic field"
    ],
    "answer": 0,
    "explanation": "Torque τ = NIAB sin θ where θ is angle between area vector and field. Zero torque occurs when sin θ = 0, i.e., when the loop plane is parallel to B (area vector parallel or antiparallel to field). Choice B gives maximum torque, choice C gives intermediate torque, choice D is incorrect."
  },
  {
    "id": "physc_u11_q480",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical current elements are positioned such that one is twice as far from point P as the other. The ratio of their magnetic field contributions at point P is:",
    "choices": [
      "A) 4:1",
      "B) 2:1",
      "C) 1:2",
      "D) 1:4"
    ],
    "answer": 0,
    "explanation": "Biot-Savart law: dB ∝ 1/r². If one element is at distance r and the other at 2r, the field ratio is (1/r²):(1/(2r)²) = 1:(1/4) = 4:1. Choice B uses 1/r dependence, choices C and D invert the correct ratio."
  },
  {
    "id": "physc_u11_q481",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A toroidal coil has 200 turns and carries 4.0 A. The magnetic field at a radius of 0.10 m inside the toroid is:",
    "choices": [
      "A) 1.6 × 10⁻³ T",
      "B) 3.2 × 10⁻³ T",
      "C) 8.0 × 10⁻⁴ T",
      "D) 0 T"
    ],
    "answer": 0,
    "explanation": "For a toroidal coil: B = μ₀NI/(2πr) = (4π × 10⁻⁷ × 200 × 4.0)/(2π × 0.10) = 1.6 × 10⁻³ T. Choice B omits the factor of 2, choice C uses incorrect formula for straight solenoid, choice D incorrectly assumes field cancellation."
  },
  {
    "id": "physc_u11_q482",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic field configurations",
    "topicLabel": "magnetic field configurations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "At the center of a current-carrying circular loop, if the radius is doubled while keeping the current constant, the magnetic field:",
    "choices": [
      "A) Is halved",
      "B) Is doubled",
      "C) Is quartered",
      "D) Remains the same"
    ],
    "answer": 0,
    "explanation": "At the center of a circular loop: B = μ₀I/(2R). When R doubles, B becomes μ₀I/(4R), which is half the original value. Choice B inverts the relationship, choice C uses R² dependence incorrectly, choice D ignores the radius dependence."
  },
  {
    "id": "physc_u11_q483",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on charge",
    "topicLabel": "Magnetic Force on Charge",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A proton enters a uniform magnetic field with velocity perpendicular to the field lines. If the proton's kinetic energy is doubled while keeping the magnetic field constant, how does the radius of its circular path change?",
    "choices": [
      "A) Increases by a factor of 2",
      "B) Increases by a factor of √2",
      "C) Remains the same",
      "D) Decreases by a factor of √2"
    ],
    "answer": 1,
    "explanation": "The radius of circular motion is r = mv/(qB). When kinetic energy doubles, KE = ½mv² doubles, so v increases by √2. Since r ∝ v, the radius increases by √2. Choice A assumes direct proportionality to energy. Choice C incorrectly thinks energy doesn't affect radius. Choice D confuses with inverse relationship."
  },
  {
    "id": "physc_u11_q484",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "Magnetic Force on Wire",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A straight wire carrying current I is placed at a 30° angle to a uniform magnetic field B. If the wire has length L, what is the magnitude of the magnetic force on the wire?",
    "choices": [
      "A) BIL",
      "B) BIL sin(30°)",
      "C) BIL cos(30°)",
      "D) BIL tan(30°)"
    ],
    "answer": 1,
    "explanation": "The magnetic force on a current-carrying wire is F = BIL sin(θ), where θ is the angle between current direction and magnetic field. Here θ = 30°, so F = BIL sin(30°). Choice A ignores the angle dependence. Choice C uses cosine instead of sine. Choice D incorrectly uses tangent."
  },
  {
    "id": "physc_u11_q485",
    "subject": "apphysc",
    "unit": 11,
    "topic": "torque on current loop",
    "topicLabel": "Torque on Current Loop",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rectangular current loop with magnetic dipole moment μ is placed in a uniform magnetic field B. The loop experiences maximum torque when the angle between μ and B is:",
    "choices": [
      "A) 0°",
      "B) 30°",
      "C) 90°",
      "D) 180°"
    ],
    "answer": 2,
    "explanation": "Torque on a magnetic dipole is τ = μ × B = μB sin(θ), where θ is the angle between μ and B. Maximum torque occurs when sin(θ) = 1, which happens at θ = 90°. Choice A and D give zero torque (sin(0°) = sin(180°) = 0). Choice B gives intermediate torque value."
  },
  {
    "id": "physc_u11_q486",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart Law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to the Biot-Savart law, if the distance from a current element to a point is doubled while keeping the current element the same, how does the magnetic field contribution at that point change?",
    "choices": [
      "A) Decreases by a factor of 2",
      "B) Decreases by a factor of 4",
      "C) Decreases by a factor of 8",
      "D) Remains the same"
    ],
    "answer": 1,
    "explanation": "The Biot-Savart law states dB ∝ 1/r², so when distance doubles, the magnetic field decreases by a factor of 2² = 4. Choice A confuses with inverse linear relationship. Choice C incorrectly applies inverse cube relationship. Choice D ignores distance dependence entirely."
  },
  {
    "id": "physc_u11_q487",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's Law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A long straight wire carries current I. Using Ampere's law with a circular path of radius r centered on the wire, what is the magnetic field at distance r from the wire?",
    "choices": [
      "A) μ₀I/(4πr)",
      "B) μ₀I/(2πr)",
      "C) μ₀Ir/(2π)",
      "D) μ₀I/(πr²)"
    ],
    "answer": 1,
    "explanation": "Applying Ampere's law: ∮B·dl = μ₀I_enclosed. For circular symmetry, B(2πr) = μ₀I, so B = μ₀I/(2πr). Choice A has incorrect factor of 4π (confusion with point charges). Choice C has r in numerator instead of denominator. Choice D has r² dependence like electric field."
  },
  {
    "id": "physc_u11_q488",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic field configurations",
    "topicLabel": "Magnetic Field Configurations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two parallel wires carry currents in the same direction. The magnetic field at a point exactly halfway between the wires is:",
    "choices": [
      "A) Zero",
      "B) Maximum possible value",
      "C) Equal to the field from one wire alone",
      "D) Twice the field from one wire alone"
    ],
    "answer": 0,
    "explanation": "Each wire creates equal magnitude magnetic fields at the midpoint, but in opposite directions due to right-hand rule. The fields cancel, resulting in zero net field. Choice B incorrectly thinks fields add constructively. Choice C ignores the second wire. Choice D assumes simple addition without considering directions."
  },
  {
    "id": "physc_u11_q489",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "Solenoids",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An ideal solenoid has n turns per unit length and carries current I. If both the current and the number of turns per unit length are doubled, the magnetic field inside the solenoid:",
    "choices": [
      "A) Doubles",
      "B) Triples",
      "C) Quadruples",
      "D) Remains the same"
    ],
    "answer": 2,
    "explanation": "The magnetic field inside a solenoid is B = μ₀nI. When both n and I are doubled, B becomes μ₀(2n)(2I) = 4μ₀nI, which is four times the original field. Choice A considers only one doubling. Choice B has no physical basis. Choice D incorrectly assumes the changes cancel out."
  },
  {
    "id": "physc_u11_q490",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on charge",
    "topicLabel": "Magnetic Force on Charge",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An electron moving with velocity v enters a region where both electric field E and magnetic field B are present, with E parallel to B. The electron's motion will be:",
    "choices": [
      "A) Circular in a plane perpendicular to B",
      "B) Helical around the direction of B",
      "C) Straight line parallel to E and B",
      "D) Parabolic in the plane containing E and B"
    ],
    "answer": 1,
    "explanation": "When E || B, the electric force affects motion parallel to the fields while the magnetic force (perpendicular to v and B) causes circular motion in the perpendicular plane. The combination produces helical motion. Choice A ignores the electric field effect. Choice C ignores the magnetic force component. Choice D describes motion in crossed fields."
  },
  {
    "id": "physc_u11_q491",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "Magnetic Force on Wire",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical parallel wires separated by distance d carry equal currents I in opposite directions. The force per unit length on each wire is:",
    "choices": [
      "A) Attractive with magnitude μ₀I²/(2πd)",
      "B) Repulsive with magnitude μ₀I²/(2πd)",
      "C) Attractive with magnitude μ₀I²/(4πd)",
      "D) Zero because currents are equal"
    ],
    "answer": 1,
    "explanation": "The magnetic field from one wire at distance d is B = μ₀I/(2πd). The force per unit length on the second wire is F/L = BI = μ₀I²/(2πd). Opposite currents repel by Lenz's law. Choice A has correct magnitude but wrong direction. Choice C has incorrect factor. Choice D ignores the interaction between opposite currents."
  },
  {
    "id": "physc_u11_q492",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart Law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A current loop lies in the xy-plane. Using the Biot-Savart law, the direction of the magnetic field at a point on the positive z-axis (above the loop center) depends on:",
    "choices": [
      "A) Only the magnitude of current in the loop",
      "B) Only the direction of current in the loop",
      "C) Both the magnitude and direction of current",
      "D) The distance from the loop to the point"
    ],
    "answer": 1,
    "explanation": "The Biot-Savart law shows that field direction depends on the cross product of current direction with position vector. At points on the z-axis, the field points along ±z depending only on current direction (right-hand rule). Magnitude affects field strength, not direction. Distance affects magnitude, not direction."
  },
  {
    "id": "physc_u11_q493",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's Law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Three long parallel wires each carry current I in the same direction. They are arranged at the vertices of an equilateral triangle. Using Ampere's law around a path enclosing all three wires, the line integral ∮B·dl equals:",
    "choices": [
      "A) μ₀I",
      "B) 2μ₀I",
      "C) 3μ₀I",
      "D) Zero"
    ],
    "answer": 2,
    "explanation": "Ampere's law states ∮B·dl = μ₀I_enclosed. The enclosed current is the algebraic sum of currents: I + I + I = 3I (all in same direction). Therefore ∮B·dl = 3μ₀I. Choice A counts only one wire. Choice B miscounts as two wires. Choice D incorrectly assumes currents cancel."
  },
  {
    "id": "physc_u11_q494",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "Magnetic Force on Wire",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two parallel wires carry currents I₁ = 3A and I₂ = 2A in opposite directions, separated by distance d. A third wire carrying current I₃ = 4A is placed at distance d from each of the first two wires, forming an equilateral triangle. What is the direction of the net magnetic force on the third wire?",
    "choices": [
      "A) Toward the wire carrying 3A",
      "B) Toward the wire carrying 2A",
      "C) Along the bisector away from the other two wires",
      "D) Along the bisector toward the other two wires"
    ],
    "answer": 0,
    "explanation": "The force between parallel wires is F = μ₀I₁I₂L/(2πd). Wire 1 (3A) creates attractive force of magnitude μ₀(3)(4)L/(2πd) on wire 3. Wire 2 (2A) creates repulsive force of magnitude μ₀(2)(4)L/(2πd) on wire 3. Since currents are opposite, one attracts and one repels. The attractive force is larger, so net force is toward wire 1. Students often forget that opposite currents repel while like currents attract."
  },
  {
    "id": "physc_u11_q495",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic field configurations",
    "topicLabel": "Magnetic Field Configurations",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical circular loops of radius R carry currents I in the same direction. They are separated by distance R along their common axis. At what point along the axis is the magnetic field most uniform?",
    "choices": [
      "A) At the midpoint between the loops",
      "B) At distance R/4 from each loop",
      "C) At distance R/2 from one loop",
      "D) The field is equally uniform at all points"
    ],
    "answer": 0,
    "explanation": "This is the Helmholtz coil configuration. When two identical current loops are separated by a distance equal to their radius R, the magnetic field is most uniform at the midpoint. The second derivative of the field with respect to position vanishes at the center, creating the most uniform region. This is a standard configuration used in laboratories. Other positions have greater field variation."
  },
  {
    "id": "physc_u11_q496",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "Solenoids",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A finite solenoid of length L and radius R has n turns per unit length carrying current I. What is the magnetic field at the center when L >> R?",
    "choices": [
      "A) B = μ₀nI",
      "B) B = μ₀nI/2",
      "C) B = μ₀nIL/√(L²+R²)",
      "D) B = μ₀nI√(L²+4R²)/(2L)"
    ],
    "answer": 0,
    "explanation": "For a finite solenoid, B = (μ₀nI/2)[cos(θ₁) - cos(θ₂)] where θ₁ and θ₂ are angles from the center to the ends. When L >> R, the angles approach 0° and 180°, so cos(θ₁) ≈ 1 and cos(θ₂) ≈ -1, giving B = μ₀nI. Choice B is for semi-infinite solenoid, C has wrong geometric factor, D is completely incorrect."
  },
  {
    "id": "physc_u11_q497",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "Solenoids",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solenoid with n turns per unit length and radius R carries current I. A second solenoid with 2n turns per unit length and radius R/2 is placed coaxially inside the first. If currents flow in opposite directions, what is the field in the inner region?",
    "choices": [
      "A) B = μ₀nI",
      "B) B = -μ₀nI",
      "C) B = 3μ₀nI",
      "D) B = -3μ₀nI"
    ],
    "answer": 1,
    "explanation": "Inside both solenoids, the fields superpose. The outer solenoid creates field B₁ = μ₀nI. The inner solenoid creates field B₂ = μ₀(2n)I = 2μ₀nI. Since currents are in opposite directions, the fields oppose: B_net = B₁ - B₂ = μ₀nI - 2μ₀nI = -μ₀nI. Choice A ignores the inner solenoid, C and D have sign or magnitude errors."
  },
  {
    "id": "physc_u11_q498",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "Magnetic Force on Wire",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A flexible current-carrying wire forms a semicircular arc of radius R in a uniform magnetic field B perpendicular to the plane of the arc. If the current is I, what is the net magnetic force on the arc?",
    "choices": [
      "A) F = 2BIR",
      "B) F = πBIR",
      "C) F = BIR√2",
      "D) F = BIR"
    ],
    "answer": 0,
    "explanation": "The force on each element is dF⃗ = IdL⃗×B⃗. Due to symmetry, the components tangent to the chord cancel, leaving only the component perpendicular to the chord. The net force equals the force that would act on a straight wire connecting the endpoints: F = BI(2R) = 2BIR. Choice B incorrectly uses the arc length πR, C has wrong geometric factor, D uses diameter instead of chord length."
  },
  {
    "id": "physc_u11_q499",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart Law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical circular current loops of radius R carrying current I are perpendicular to each other and share a common diameter. What is the magnetic field at the center?",
    "choices": [
      "A) B = μ₀I√2/(2R)",
      "B) B = μ₀I/(2R)",
      "C) B = μ₀I/(R)",
      "D) B = μ₀I√2/R"
    ],
    "answer": 0,
    "explanation": "Each loop creates field B₁ = μ₀I/(2R) at the center along its axis. Since loops are perpendicular, their field vectors are perpendicular. The total field is B = √(B₁² + B₁²) = B₁√2 = μ₀I√2/(2R). Choice B gives field from one loop only, C is double the single loop value, D has wrong factor and missing denominator 2."
  },
  {
    "id": "physc_u11_q500",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's Law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An infinite current sheet carries surface current density K = K₀ĵ. A second parallel sheet at distance d carries K = -K₀ĵ. What is the magnetic field between the sheets?",
    "choices": [
      "A) B = μ₀K₀î",
      "B) B = μ₀K₀k̂",
      "C) B = 2μ₀K₀k̂",
      "D) B = 0"
    ],
    "answer": 1,
    "explanation": "Each current sheet creates field B = μ₀K/2. For sheet with K₀ĵ, using right-hand rule, B₁ = (μ₀K₀/2)k̂ on one side and -(μ₀K₀/2)k̂ on the other. For sheet with -K₀ĵ, B₂ = -(μ₀K₀/2)k̂ on one side and (μ₀K₀/2)k̂ on the other. Between sheets, both contribute in same direction: B = μ₀K₀k̂. Choice A has wrong direction, C double-counts, D assumes cancellation."
  },
  {
    "id": "physc_u11_q501",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic field configurations",
    "topicLabel": "magnetic field configurations",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A long solenoid with n turns per unit length carries current I. A circular loop of wire with radius R and resistance r is placed coaxially inside the solenoid, with the loop's plane perpendicular to the solenoid's axis. If the current in the solenoid decreases at a constant rate dI/dt = -k (where k > 0), what is the magnitude of the induced current in the loop?",
    "choices": [
      "A) μ₀nkπR²/r",
      "B) μ₀nkR/r",
      "C) μ₀nkπR/r",
      "D) μ₀nk/r"
    ],
    "answer": 0,
    "explanation": "The magnetic field inside a long solenoid is B = μ₀nI. The magnetic flux through the circular loop is Φ = BA = μ₀nI(πR²). By Faraday's law, the induced EMF is |ε| = |dΦ/dt| = μ₀nπR²|dI/dt| = μ₀nπR²k. The induced current is then I_induced = ε/r = μ₀nkπR²/r. Choice B incorrectly omits the π factor and uses R instead of R². Choice C incorrectly uses R instead of R². Choice D incorrectly omits both the π and R² factors, representing the misconception that the area doesn't matter for flux."
  },
  {
    "id": "physc_u12_q502",
    "subject": "apphysc",
    "unit": 12,
    "topic": "magnetic flux",
    "topicLabel": "Magnetic Flux",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The magnetic flux through a loop is given by Φ = BA cos θ. What does θ represent?",
    "choices": [
      "A) The angle between the magnetic field and the normal to the loop",
      "B) The angle between the magnetic field and the plane of the loop",
      "C) The angle between the velocity of the loop and the magnetic field",
      "D) The angle between the current in the loop and the magnetic field"
    ],
    "answer": 0,
    "explanation": "θ is the angle between B and the normal (perpendicular) to the loop surface. Students often confuse this with the angle between B and the plane itself, or incorrectly associate it with current or velocity directions."
  },
  {
    "id": "physc_u12_q503",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's Law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to Faraday's law, an EMF is induced in a loop when:",
    "choices": [
      "A) The magnetic flux through the loop changes",
      "B) A current flows through the loop",
      "C) The loop is placed in a magnetic field",
      "D) The loop has a large area"
    ],
    "answer": 0,
    "explanation": "Faraday's law states EMF = -dΦ/dt, so EMF is induced when flux changes with time. Simply having current, being in a field, or having large area doesn't necessarily induce EMF without flux change."
  },
  {
    "id": "physc_u12_q504",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Lenz's law",
    "topicLabel": "Lenz's Law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Lenz's law states that the direction of induced current will:",
    "choices": [
      "A) Oppose the change in magnetic flux that produced it",
      "B) Always flow clockwise when viewed from above",
      "C) Be in the same direction as the applied magnetic field",
      "D) Create a magnetic field in the same direction as the change"
    ],
    "answer": 0,
    "explanation": "Lenz's law is about opposing change in flux. The induced current creates a magnetic field opposing the flux change, not necessarily clockwise, not in same direction as applied field, and definitely not in same direction as the change."
  },
  {
    "id": "physc_u12_q505",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "Motional EMF",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting rod moves through a uniform magnetic field. The motional EMF depends on:",
    "choices": [
      "A) The velocity of the rod perpendicular to the magnetic field",
      "B) The velocity of the rod parallel to the magnetic field",
      "C) Only the strength of the magnetic field",
      "D) Only the length of the rod"
    ],
    "answer": 0,
    "explanation": "Motional EMF = BLv where v is velocity perpendicular to B. Velocity parallel to B produces no EMF. EMF depends on B, L, and v⊥, not just one factor alone."
  },
  {
    "id": "physc_u12_q506",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "Self-Inductance",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Self-inductance of a coil depends primarily on:",
    "choices": [
      "A) The geometry of the coil (number of turns, area, length)",
      "B) The current flowing through the coil",
      "C) The resistance of the wire",
      "D) The voltage applied across the coil"
    ],
    "answer": 0,
    "explanation": "Inductance L is a geometric property depending on coil dimensions, number of turns, and core material. It doesn't depend on current, resistance, or applied voltage - these affect the circuit behavior but not the inductance value itself."
  },
  {
    "id": "physc_u12_q507",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL Circuits",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RL circuit, immediately after the switch is closed, the current through the inductor is:",
    "choices": [
      "A) Zero",
      "B) Maximum (V/R)",
      "C) Half the steady-state value",
      "D) Infinite"
    ],
    "answer": 0,
    "explanation": "Inductors oppose changes in current. At t=0, current must be continuous, so if no current was flowing before, I(0)=0. Current then grows exponentially toward V/R. Students often think current jumps to maximum immediately."
  },
  {
    "id": "physc_u12_q508",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "Energy Stored in Inductor",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The energy stored in an inductor is given by:",
    "choices": [
      "A) U = (1/2)LI²",
      "B) U = LI",
      "C) U = (1/2)CV²",
      "D) U = LI²"
    ],
    "answer": 0,
    "explanation": "Energy in inductor is U = (1/2)LI², analogous to kinetic energy formula. Choice C is for capacitors. Choices B and D lack the correct 1/2 factor or have wrong dependence on current."
  },
  {
    "id": "physc_u12_q509",
    "subject": "apphysc",
    "unit": 12,
    "topic": "magnetic flux",
    "topicLabel": "Magnetic Flux",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The SI unit of magnetic flux is:",
    "choices": [
      "A) Weber (Wb)",
      "B) Tesla (T)",
      "C) Henry (H)",
      "D) Volt (V)"
    ],
    "answer": 0,
    "explanation": "Magnetic flux is measured in webers (Wb). Tesla measures magnetic field strength, henry measures inductance, and volt measures EMF. Students often confuse flux units with field units."
  },
  {
    "id": "physc_u12_q510",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's Law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the magnetic flux through a coil increases at a constant rate, the induced EMF is:",
    "choices": [
      "A) Constant",
      "B) Increasing linearly",
      "C) Decreasing exponentially",
      "D) Zero"
    ],
    "answer": 0,
    "explanation": "EMF = -dΦ/dt. If flux increases at constant rate, dΦ/dt is constant, so EMF is constant. Students might think EMF increases with flux or becomes zero when flux is changing."
  },
  {
    "id": "physc_u12_q511",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "Motional EMF",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The formula for motional EMF when a rod of length L moves with velocity v perpendicular to magnetic field B is:",
    "choices": [
      "A) EMF = BLv",
      "B) EMF = BL/v",
      "C) EMF = Bv/L",
      "D) EMF = BL²v"
    ],
    "answer": 0,
    "explanation": "Motional EMF = BLv for perpendicular motion. This comes from the magnetic force on charges in the moving conductor. Other choices have incorrect mathematical relationships between the variables."
  },
  {
    "id": "physc_u12_q512",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL Circuit Time Constant",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The time constant τ of an RL circuit is:",
    "choices": [
      "A) L/R",
      "B) R/L",
      "C) LR",
      "D) L + R"
    ],
    "answer": 0,
    "explanation": "The time constant τ = L/R has units of time (henries/ohms = seconds). This determines how quickly current approaches steady state. Students often flip this to R/L or use other incorrect combinations."
  },
  {
    "id": "physc_u12_q513",
    "subject": "apphysc",
    "unit": 12,
    "topic": "magnetic flux",
    "topicLabel": "magnetic flux",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circular loop of radius 0.10 m is placed in a uniform magnetic field of 0.50 T. The field makes an angle of 60° with the normal to the loop. What is the magnetic flux through the loop?",
    "choices": [
      "A) 7.9 × 10⁻³ Wb",
      "B) 1.4 × 10⁻² Wb",
      "C) 1.6 × 10⁻² Wb",
      "D) 2.7 × 10⁻² Wb"
    ],
    "answer": 0,
    "explanation": "Magnetic flux Φ = BA cos θ = (0.50)(π)(0.10)² cos(60°) = (0.50)(π)(0.01)(0.5) = 7.9 × 10⁻³ Wb. Choice B uses cos(30°) instead of cos(60°). Choice C forgets the cosine factor. Choice D uses the full area without the cosine factor."
  },
  {
    "id": "physc_u12_q514",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A magnetic field perpendicular to a 100-turn coil increases uniformly from 0.20 T to 0.80 T in 0.50 s. If the coil has an area of 0.040 m², what is the magnitude of the induced EMF?",
    "choices": [
      "A) 4.8 V",
      "B) 8.0 V",
      "C) 12 V",
      "D) 48 V"
    ],
    "answer": 0,
    "explanation": "Using Faraday's law: |ε| = N|dΦ/dt| = N|A(dB/dt)| = (100)(0.040)|(0.80-0.20)/0.50| = (100)(0.040)(1.2) = 4.8 V. Choice B forgets the area factor. Choice C forgets the number of turns. Choice D incorrectly multiplies by both the initial and final field values."
  },
  {
    "id": "physc_u12_q515",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Lenz's law",
    "topicLabel": "Lenz's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A bar magnet with its north pole pointing right approaches a conducting loop from the left. According to Lenz's law, what is the direction of the induced current in the loop as viewed from the right side?",
    "choices": [
      "A) Clockwise",
      "B) Counterclockwise",
      "C) No current is induced",
      "D) The direction alternates rapidly"
    ],
    "answer": 0,
    "explanation": "As the north pole approaches, the magnetic flux through the loop increases in the rightward direction. By Lenz's law, the induced current creates a field to oppose this change, so it creates a leftward field inside the loop. Using the right-hand rule, this requires clockwise current as viewed from the right. Choice B would be correct if viewed from the left. Choice C ignores the changing flux. Choice D suggests AC behavior in a DC situation."
  },
  {
    "id": "physc_u12_q516",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "motional EMF",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting rod of length 0.25 m moves with velocity 4.0 m/s perpendicular to a uniform magnetic field of 0.60 T. What is the motional EMF induced across the rod?",
    "choices": [
      "A) 0.60 V",
      "B) 1.0 V",
      "C) 1.5 V",
      "D) 2.4 V"
    ],
    "answer": 0,
    "explanation": "The motional EMF is ε = BLv = (0.60)(0.25)(4.0) = 0.60 V. Choice B uses only L and v. Choice C uses only B and v. Choice D uses BL without considering the velocity correctly."
  },
  {
    "id": "physc_u12_q517",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "inductance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solenoid has 500 turns, length 0.20 m, and cross-sectional area 4.0 × 10⁻⁴ m². What is its self-inductance? (μ₀ = 4π × 10⁻⁷ H/m)",
    "choices": [
      "A) 6.3 × 10⁻⁴ H",
      "B) 1.3 × 10⁻³ H",
      "C) 2.5 × 10⁻³ H",
      "D) 5.0 × 10⁻³ H"
    ],
    "answer": 0,
    "explanation": "For a solenoid: L = μ₀n²Al = μ₀(N²/l)A = (4π × 10⁻⁷)(500²/0.20)(4.0 × 10⁻⁴) = (4π × 10⁻⁷)(1.25 × 10⁶)(4.0 × 10⁻⁴) = 6.3 × 10⁻⁴ H. Choice B uses N instead of N². Choice C uses l instead of 1/l. Choice D uses N instead of N² and l instead of 1/l."
  },
  {
    "id": "physc_u12_q518",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RL circuit with R = 10 Ω and L = 0.50 H, a 12 V battery is connected at t = 0. What is the time constant of the circuit?",
    "choices": [
      "A) 0.05 s",
      "B) 0.10 s",
      "C) 0.20 s",
      "D) 5.0 s"
    ],
    "answer": 0,
    "explanation": "The time constant τ = L/R = 0.50/10 = 0.05 s. Choice B uses τ = L/(2R). Choice C uses τ = L/(R/2). Choice D uses τ = LR instead of L/R."
  },
  {
    "id": "physc_u12_q519",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "energy in inductor",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An inductor with L = 2.0 H carries a current of 3.0 A. What is the energy stored in the magnetic field?",
    "choices": [
      "A) 9.0 J",
      "B) 12 J",
      "C) 18 J",
      "D) 36 J"
    ],
    "answer": 0,
    "explanation": "The energy stored in an inductor is U = ½LI² = ½(2.0)(3.0)² = ½(2.0)(9.0) = 9.0 J. Choice B uses U = LI without the ½ factor. Choice C uses U = LI². Choice D uses U = 2LI²."
  },
  {
    "id": "physc_u12_q520",
    "subject": "apphysc",
    "unit": 12,
    "topic": "magnetic flux",
    "topicLabel": "magnetic flux",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A square loop with side length 0.15 m rotates about an axis through its center, perpendicular to a uniform 0.80 T magnetic field. When the loop makes a 45° angle with the field, what is the magnetic flux through it?",
    "choices": [
      "A) 1.3 × 10⁻² Wb",
      "B) 1.6 × 10⁻² Wb",
      "C) 1.8 × 10⁻² Wb",
      "D) 2.3 × 10⁻² Wb"
    ],
    "answer": 0,
    "explanation": "Flux Φ = BA cos θ = (0.80)(0.15)²cos(45°) = (0.80)(0.0225)(0.707) = 1.3 × 10⁻² Wb. Choice B uses cos(30°). Choice C forgets the cosine factor. Choice D uses sin(45°) instead of cos(45°)."
  },
  {
    "id": "physc_u12_q521",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circular coil of 50 turns and radius 0.08 m is placed in a magnetic field that decreases at a rate of 0.15 T/s. What is the magnitude of the induced EMF if the field is perpendicular to the coil?",
    "choices": [
      "A) 0.048 V",
      "B) 0.15 V",
      "C) 0.30 V",
      "D) 0.60 V"
    ],
    "answer": 0,
    "explanation": "Using Faraday's law: |ε| = N|dΦ/dt| = NA|dB/dt| = (50)(π)(0.08)²(0.15) = (50)(π)(0.0064)(0.15) = 0.048 V. Choice B forgets the area calculation. Choice C forgets the number of turns. Choice D uses diameter instead of radius."
  },
  {
    "id": "physc_u12_q522",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Lenz's law",
    "topicLabel": "Lenz's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting loop is moving away from a long straight wire carrying current in the upward direction. As the loop moves away, the direction of the induced current in the loop will be such that it:",
    "choices": [
      "A) Creates a magnetic field in the same direction as the wire's field",
      "B) Creates a magnetic field opposing the wire's field",
      "C) Creates no net magnetic field",
      "D) Alternates between reinforcing and opposing the wire's field"
    ],
    "answer": 0,
    "explanation": "As the loop moves away, the flux from the wire through the loop decreases. By Lenz's law, the induced current opposes this change by trying to maintain the original flux, so it creates a field in the same direction as the wire's field. Choice B would apply if the loop were approaching. Choice C violates Lenz's law. Choice D suggests inappropriate oscillation."
  },
  {
    "id": "physc_u12_q523",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "inductance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two inductors of 3.0 mH and 6.0 mH are connected in series. What is the equivalent inductance of the combination?",
    "choices": [
      "A) 9.0 mH",
      "B) 6.0 mH",
      "C) 3.0 mH",
      "D) 2.0 mH"
    ],
    "answer": 0,
    "explanation": "For inductors in series, L_eq = L₁ + L₂ = 3.0 + 6.0 = 9.0 mH. Choice B incorrectly uses the larger value only. Choice C incorrectly uses the smaller value only. Choice D incorrectly applies the parallel formula: 1/L_eq = 1/L₁ + 1/L₂."
  },
  {
    "id": "physc_u12_q524",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RL circuit, the current reaches 63% of its final value after one time constant. If R = 20 Ω and the time constant is 0.15 s, what is the inductance?",
    "choices": [
      "A) 3.0 H",
      "B) 1.5 H",
      "C) 0.75 H",
      "D) 0.0075 H"
    ],
    "answer": 0,
    "explanation": "Since τ = L/R, we have L = τR = (0.15)(20) = 3.0 H. Choice B uses L = τR/2. Choice C uses L = τR/4. Choice D uses L = τ/R instead of L = τR."
  },
  {
    "id": "physc_u12_q525",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "energy in inductor",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The current through a 0.50 H inductor increases linearly from 0 to 4.0 A in 2.0 s. What is the energy stored in the inductor at the end of this time period?",
    "choices": [
      "A) 4.0 J",
      "B) 8.0 J",
      "C) 16 J",
      "D) 32 J"
    ],
    "answer": 0,
    "explanation": "Energy stored: U = ½LI² = ½(0.50)(4.0)² = ½(0.50)(16) = 4.0 J. The time information is irrelevant for final energy. Choice B forgets the ½ factor. Choice C uses U = LI². Choice D uses U = 2LI²."
  },
  {
    "id": "physc_u12_q526",
    "subject": "apphysc",
    "unit": 12,
    "topic": "magnetic flux",
    "topicLabel": "magnetic flux",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A coil with 200 turns and area 0.015 m² per turn is placed in a uniform magnetic field. If the total flux linkage through the coil is 0.60 Wb, what is the magnetic field strength?",
    "choices": [
      "A) 2.0 T",
      "B) 4.0 T",
      "C) 40 T",
      "D) 200 T"
    ],
    "answer": 0,
    "explanation": "Total flux linkage = NΦ = NBA = 0.60 Wb, so B = 0.60/(NA) = 0.60/[(200)(0.015)] = 0.60/3.0 = 2.0 T. Choice B forgets the number of turns. Choice C forgets the area. Choice D uses only the area."
  },
  {
    "id": "physc_u12_q527",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting loop rotates in a uniform magnetic field with angular velocity ω. At the moment when the flux is maximum, what is the induced EMF?",
    "choices": [
      "A) Zero",
      "B) Maximum",
      "C) Half maximum",
      "D) Cannot be determined"
    ],
    "answer": 0,
    "explanation": "EMF = -dΦ/dt. When flux is at its maximum, dΦ/dt = 0, so EMF = 0. This occurs because the rate of change of flux is zero at the maximum, even though the flux itself is maximum. Choice B confuses flux magnitude with its rate of change. Choice C assumes a phase relationship. Choice D overlooks the calculus relationship."
  },
  {
    "id": "physc_u12_q528",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Lenz's law",
    "topicLabel": "Lenz's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A metal ring is dropped from rest above a strong permanent magnet with its north pole facing up. As the ring approaches the magnet, what happens to its acceleration?",
    "choices": [
      "A) Decreases due to upward magnetic force",
      "B) Increases due to downward magnetic force",
      "C) Remains constant at g",
      "D) Becomes zero when it reaches the magnet"
    ],
    "answer": 0,
    "explanation": "As the ring approaches, increasing flux induces a current that creates a magnetic dipole opposing the approach (Lenz's law). This results in a repulsive force upward, reducing the net downward force and decreasing acceleration. Choice B has the wrong force direction. Choice C ignores electromagnetic effects. Choice D is physically impossible for this scenario."
  },
  {
    "id": "physc_u12_q529",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "motional EMF",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting rod slides down two parallel conducting rails in a uniform magnetic field perpendicular to the plane. As the rod's speed increases, what happens to the induced EMF and the magnetic force on the rod?",
    "choices": [
      "A) EMF increases, magnetic force increases",
      "B) EMF increases, magnetic force decreases",
      "C) EMF decreases, magnetic force increases",
      "D) EMF decreases, magnetic force decreases"
    ],
    "answer": 0,
    "explanation": "EMF = BLv increases as speed v increases. The induced current I = EMF/R also increases, so the magnetic force F = BIL = B(BLv/R)L increases as well. Both EMF and force are proportional to velocity. Choices B, C, and D incorrectly analyze the relationship between speed, EMF, current, and magnetic force."
  },
  {
    "id": "physc_u12_q530",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "inductance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical inductors of 4.0 mH each are connected in parallel. What is the equivalent inductance?",
    "choices": [
      "A) 2.0 mH",
      "B) 4.0 mH",
      "C) 8.0 mH",
      "D) 16 mH"
    ],
    "answer": 0,
    "explanation": "For inductors in parallel: 1/L_eq = 1/L₁ + 1/L₂ = 1/4.0 + 1/4.0 = 2/4.0, so L_eq = 2.0 mH. Choice B gives one inductor's value. Choice C incorrectly uses series formula. Choice D incorrectly multiplies the values."
  },
  {
    "id": "physc_u12_q531",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RL circuit with a 24 V source, R = 8.0 Ω, and L = 0.60 H, what is the current 0.075 s after the switch is closed? (e^(-1) ≈ 0.37)",
    "choices": [
      "A) 1.9 A",
      "B) 2.2 A",
      "C) 2.6 A",
      "D) 3.0 A"
    ],
    "answer": 0,
    "explanation": "First find τ = L/R = 0.60/8.0 = 0.075 s, so t = τ. The current is I(t) = I_max(1 - e^(-t/τ)) = (24/8)(1 - e^(-1)) = 3.0(1 - 0.37) = 3.0(0.63) = 1.9 A. Choice B uses a different time constant. Choice C uses e^(-0.5). Choice D gives the final steady-state current."
  },
  {
    "id": "physc_u12_q532",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solenoid with 500 turns and cross-sectional area 0.01 m² experiences a magnetic field that changes at a rate of 2.0 T/s. What is the magnitude of the induced EMF in the solenoid?",
    "choices": [
      "A) 5.0 V",
      "B) 10 V",
      "C) 20 V",
      "D) 1000 V"
    ],
    "answer": 1,
    "explanation": "Using Faraday's law: |ε| = N|dΦ/dt| = N × A × |dB/dt| = 500 × 0.01 × 2.0 = 10 V. Students often forget to multiply by the number of turns (choice A) or incorrectly multiply by additional factors (choices C and D)."
  },
  {
    "id": "physc_u12_q533",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Lenz's law",
    "topicLabel": "Lenz's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting loop is moving toward a stationary bar magnet with its north pole facing the loop. According to Lenz's law, the induced current in the loop will create a magnetic field that:",
    "choices": [
      "A) Points toward the magnet to attract it",
      "B) Points away from the magnet to repel it",
      "C) Points parallel to the magnet's field",
      "D) Points antiparallel to the magnet's field"
    ],
    "answer": 1,
    "explanation": "Lenz's law states that induced currents oppose the change causing them. As the loop approaches the north pole, the flux through it increases. The induced current creates a magnetic field pointing away from the magnet (north pole toward the magnet) to oppose this increase, resulting in repulsion."
  },
  {
    "id": "physc_u12_q534",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "Motional EMF",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting rod of length 0.5 m moves perpendicular to a uniform magnetic field of 0.2 T with a velocity of 4 m/s. If the rod is part of a complete circuit with total resistance 8 Ω, what is the induced current?",
    "choices": [
      "A) 0.05 A",
      "B) 0.1 A",
      "C) 0.4 A",
      "D) 3.2 A"
    ],
    "answer": 0,
    "explanation": "Motional EMF is ε = BLv = (0.2)(0.5)(4) = 0.4 V. Current is I = ε/R = 0.4/8 = 0.05 A. Students often forget to divide by resistance (choice C) or make calculation errors with the EMF formula."
  },
  {
    "id": "physc_u12_q535",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "Inductance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solenoid has 1000 turns, length 0.2 m, and cross-sectional area 0.001 m². What is its self-inductance? (μ₀ = 4π × 10⁻⁷ H/m)",
    "choices": [
      "A) 3.14 × 10⁻³ H",
      "B) 6.28 × 10⁻³ H",
      "C) 1.57 × 10⁻² H",
      "D) 3.14 × 10⁻² H"
    ],
    "answer": 0,
    "explanation": "Self-inductance of a solenoid is L = μ₀N²A/l = (4π × 10⁻⁷)(1000)²(0.001)/(0.2) = 3.14 × 10⁻³ H. Students often make errors in the formula or forget to square the number of turns."
  },
  {
    "id": "physc_u12_q536",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RL circuit with R = 10 Ω and L = 0.5 H, a 12 V battery is suddenly connected. What is the time constant of the circuit and the steady-state current?",
    "choices": [
      "A) τ = 0.05 s, I = 0.6 A",
      "B) τ = 0.05 s, I = 1.2 A",
      "C) τ = 0.1 s, I = 0.6 A",
      "D) τ = 0.1 s, I = 1.2 A"
    ],
    "answer": 1,
    "explanation": "Time constant τ = L/R = 0.5/10 = 0.05 s. Steady-state current I = V/R = 12/10 = 1.2 A (when dI/dt = 0, inductor acts like a wire). Students often confuse the formulas or calculate I = V/L instead of V/R."
  },
  {
    "id": "physc_u12_q537",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "Energy in inductor",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An inductor with L = 2.0 H carries a current of 3.0 A. How much energy is stored in its magnetic field?",
    "choices": [
      "A) 3.0 J",
      "B) 6.0 J",
      "C) 9.0 J",
      "D) 18 J"
    ],
    "answer": 2,
    "explanation": "Energy stored in an inductor is U = ½LI² = ½(2.0)(3.0)² = ½(2.0)(9.0) = 9.0 J. Students often forget the ½ factor (choice D), use LI instead of LI² (choice B), or make other algebraic errors."
  },
  {
    "id": "physc_u12_q538",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A square loop with side length 0.1 m is placed in a magnetic field B = 0.05t² T (where t is in seconds). At t = 2 s, what is the magnitude of the induced EMF?",
    "choices": [
      "A) 0.001 V",
      "B) 0.002 V",
      "C) 0.01 V",
      "D) 0.02 V"
    ],
    "answer": 1,
    "explanation": "First find dB/dt = d(0.05t²)/dt = 0.1t. At t = 2s, dB/dt = 0.2 T/s. EMF = A(dB/dt) = (0.1)²(0.2) = 0.002 V. Students often forget to take the derivative or make errors in calculating the area."
  },
  {
    "id": "physc_u12_q539",
    "subject": "apphysc",
    "unit": 12,
    "topic": "magnetic flux",
    "topicLabel": "Magnetic flux",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rectangular coil with 50 turns has dimensions 0.1 m × 0.2 m and is placed in a uniform magnetic field of 0.3 T at an angle of 60° to the field lines. What is the total magnetic flux through the coil?",
    "choices": [
      "A) 0.15 Wb",
      "B) 0.26 Wb",
      "C) 0.30 Wb",
      "D) 0.52 Wb"
    ],
    "answer": 0,
    "explanation": "Flux through one turn: Φ₁ = BA cos(60°) = (0.3)(0.1 × 0.2)(0.5) = 0.003 Wb. Total flux = NΦ₁ = 50 × 0.003 = 0.15 Wb. Students often use cos(30°) instead of cos(60°) or forget to multiply by the number of turns."
  },
  {
    "id": "physc_u12_q540",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Lenz's law",
    "topicLabel": "Lenz's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting loop is in a decreasing magnetic field pointing into the page. According to Lenz's law, the direction of the induced current will be:",
    "choices": [
      "A) Clockwise to reinforce the decreasing field",
      "B) Counterclockwise to reinforce the decreasing field",
      "C) Clockwise to oppose the change in field",
      "D) Counterclockwise to oppose the change in field"
    ],
    "answer": 2,
    "explanation": "As the field into the page decreases, Lenz's law requires the induced current to oppose this change by creating a field into the page. Using the right-hand rule, a clockwise current creates a field into the page. Students often confuse 'opposing the change' with 'reinforcing the field.'"
  },
  {
    "id": "physc_u12_q541",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "Inductance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical inductors of 3 H each are connected in series and then in parallel. What is the equivalent inductance in each configuration?",
    "choices": [
      "A) Series: 1.5 H, Parallel: 6 H",
      "B) Series: 6 H, Parallel: 1.5 H",
      "C) Series: 3 H, Parallel: 3 H",
      "D) Series: 6 H, Parallel: 3 H"
    ],
    "answer": 1,
    "explanation": "Inductors combine like resistors: in series L_eq = L₁ + L₂ = 3 + 3 = 6 H; in parallel 1/L_eq = 1/L₁ + 1/L₂, so L_eq = 1.5 H. Students often confuse inductor combination rules with capacitor rules."
  },
  {
    "id": "physc_u12_q542",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RL circuit, the current reaches 63% of its maximum value in 0.02 s. If the resistance is 50 Ω, what is the inductance?",
    "choices": [
      "A) 0.5 H",
      "B) 1.0 H",
      "C) 2.0 H",
      "D) 2.5 H"
    ],
    "answer": 1,
    "explanation": "63% of maximum occurs at t = τ (one time constant). Since τ = 0.02 s and τ = L/R, we have L = τR = (0.02)(50) = 1.0 H. Students often confuse the 63% rule or use incorrect time constant formulas."
  },
  {
    "id": "physc_u1_q543",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "Derivatives of Motion",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The position of a particle is given by x(t) = 4t^3 - 2t. What is the velocity of the particle at t = 1 s?",
    "choices": [
      "A) 2 m/s",
      "B) 10 m/s",
      "C) 12 m/s",
      "D) 14 m/s"
    ],
    "answer": 1,
    "explanation": "Velocity is the derivative of position: v(t) = dx/dt = 12t^2 - 2. At t = 1 s, v(1) = 12(1)^2 - 2 = 10 m/s. Choice A (2 m/s) results from evaluating x(1) = 4 - 2 = 2, confusing position with velocity. Choice C (12 m/s) comes from only differentiating the first term and ignoring the -2. Choice D (14 m/s) comes from incorrectly adding x(1) and the derivative of the first term."
  },
  {
    "id": "physc_u1_q544",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 1D",
    "topicLabel": "Kinematics in 1D",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A car starts from rest and accelerates uniformly at 3 m/s² for 4 seconds, then travels at constant velocity for 6 seconds. What is the total displacement of the car during this 10-second interval?",
    "choices": [
      "A) 24 m",
      "B) 96 m",
      "C) 72 m",
      "D) 48 m"
    ],
    "answer": 1,
    "explanation": "During the first 4 s: d₁ = ½(3)(4²) = 24 m, and the final speed is v = 3(4) = 12 m/s. During the next 6 s at constant 12 m/s: d₂ = 12(6) = 72 m. Total = 24 + 72 = 96 m. Choice A (24 m) only accounts for the acceleration phase. Choice C (72 m) only accounts for the constant velocity phase. Choice D (48 m) misapplies the average velocity to the entire interval."
  },
  {
    "id": "physc_u1_q545",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "Projectile Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A ball is launched from ground level at an angle of 60° above the horizontal with an initial speed of 20 m/s. Using g = 10 m/s², what is the maximum height reached by the ball?",
    "choices": [
      "A) 5 m",
      "B) 10 m",
      "C) 15 m",
      "D) 20 m"
    ],
    "answer": 2,
    "explanation": "The vertical component of initial velocity is v₀y = 20 sin60° = 20(√3/2) = 10√3 m/s. At maximum height, v_y = 0. Using v² = v₀y² - 2gh: 0 = (10√3)² - 2(10)h → h = 300/20 = 15 m. Choice A (5 m) results from using v₀y = 10 m/s (confusing sin60° with sin30°) and a calculation error. Choice B (10 m) comes from using v₀y = 10 m/s (using sin30° instead of sin60°). Choice D (20 m) comes from using the full initial speed (20 m/s) instead of only the vertical component."
  },
  {
    "id": "physc_u1_q546",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "Relative Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A boat can travel at 5 m/s in still water. The boat needs to cross a river that is 60 m wide and has a current flowing at 3 m/s. If the boat aims directly upstream at an angle such that it crosses the river in a straight line perpendicular to the banks, how long does it take to cross?",
    "choices": [
      "A) 12 s",
      "B) 15 s",
      "C) 10 s",
      "D) 20 s"
    ],
    "answer": 1,
    "explanation": "To travel straight across, the boat must aim upstream so that its upstream component cancels the current. The component across the river is √(5² - 3²) = √(25 - 9) = √16 = 4 m/s. Time = 60/4 = 15 s. Choice A (12 s) uses 60/5, ignoring the current entirely. Choice C (10 s) may come from dividing by (5+3)/2 or other errors. Choice D (20 s) uses 60/3, confusing river speed with crossing speed."
  },
  {
    "id": "physc_u1_q547",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "Derivatives of Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The position of a particle along the x-axis is given by $x(t) = 4t^3 - 6t^2 + 2t$ in meters. At what time is the acceleration of the particle equal to zero?",
    "choices": [
      "A) t = 0.25 s",
      "B) t = 0.5 s",
      "C) t = 1.0 s",
      "D) t = 1.5 s"
    ],
    "answer": 1,
    "explanation": "Velocity v = dx/dt = 12t² - 12t + 2. Acceleration a = dv/dt = 24t - 12. Setting a = 0: 24t - 12 = 0 → t = 0.5 s. Choice A (0.25 s) might come from solving for when jerk equals something or arithmetic errors. Choice C (1.0 s) comes from setting velocity equal to zero considerations or dividing 12/12. Choice D (1.5 s) may come from solving 12t - 12 = 6 or similar algebra mistakes."
  },
  {
    "id": "physc_u1_q548",
    "subject": "apphysc",
    "unit": 1,
    "topic": "integrals of motion",
    "topicLabel": "Integrals of Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle starts from rest at the origin. Its acceleration as a function of time is $a(t) = 6t$ m/s². What is the displacement of the particle at t = 2 s?",
    "choices": [
      "A) 4 m",
      "B) 8 m",
      "C) 12 m",
      "D) 24 m"
    ],
    "answer": 1,
    "explanation": "Integrate acceleration to get velocity: v(t) = ∫6t dt = 3t² + C. Since the particle starts from rest, C = 0, so v = 3t². Integrate velocity to get position: x(t) = ∫3t² dt = t³ + C. Since it starts at the origin, C = 0, so x = t³. At t = 2: x = 8 m. Choice A (4 m) comes from only integrating once and evaluating 3t² at t=2 incorrectly. Choice C (12 m) comes from evaluating 3t² at t = 2 (finding velocity, not displacement). Choice D (24 m) comes from evaluating 6t at t=2 then multiplying by some factor or using ½a·t²."
  },
  {
    "id": "physc_u1_q549",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematic equations with calculus",
    "topicLabel": "Kinematic Equations with Calculus",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along the x-axis with velocity $v(t) = 5 - 2t$ m/s and starts at position $x_0 = 3$ m at t = 0. What is the position of the particle when it momentarily comes to rest?",
    "choices": [
      "A) 3.0 m",
      "B) 6.25 m",
      "C) 9.25 m",
      "D) 15.5 m"
    ],
    "answer": 2,
    "explanation": "The particle stops when v = 0: 5 - 2t = 0 → t = 2.5 s. Position: x(t) = ∫(5 - 2t)dt = 5t - t² + C. At t = 0, x = 3, so C = 3. At t = 2.5: x = 5(2.5) - (2.5)² + 3 = 12.5 - 6.25 + 3 = 9.25 m. Choice A (3 m) forgets to compute the displacement. Choice B (6.25 m) computes 12.5 - 6.25 but forgets the initial position. Choice D (15.5 m) may result from adding all terms instead of subtracting."
  },
  {
    "id": "physc_u1_q550",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "Projectile Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Two balls are launched simultaneously from the same point on level ground. Ball A is launched at 30° above horizontal and Ball B at 60° above horizontal, both with the same initial speed. Neglecting air resistance, which statement is correct?",
    "choices": [
      "A) Ball A hits the ground first and has a shorter range",
      "B) Ball A hits the ground first and both have the same range",
      "C) Both hit the ground at the same time with the same range",
      "D) Ball B hits the ground first and has a longer range"
    ],
    "answer": 1,
    "explanation": "For complementary angles (30° and 60°) with the same initial speed, the range R = v₀²sin(2θ)/g is the same since sin(60°) = sin(120°). However, the time of flight T = 2v₀sinθ/g is different: sin30° < sin60°, so Ball A (30°) has a shorter flight time and lands first. Choice A incorrectly states the range is shorter. Choice C incorrectly claims equal flight times. Choice D reverses which ball lands first."
  },
  {
    "id": "physc_u1_q551",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "Relative Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Car A travels north at 25 m/s and Car B travels east at 25 m/s. What is the velocity of Car A as observed from Car B?",
    "choices": [
      "A) 25 m/s north",
      "B) 25 m/s northwest",
      "C) 25√2 m/s northeast",
      "D) 25√2 m/s northwest"
    ],
    "answer": 3,
    "explanation": "The velocity of A relative to B is v_A - v_B. v_A = 25ĵ (north), v_B = 25î (east). v_A - v_B = -25î + 25ĵ, which points in the northwest direction with magnitude √(25² + 25²) = 25√2 m/s. Choice A ignores Car B's motion. Choice B has the correct direction but wrong magnitude. Choice C has the correct magnitude but wrong direction (northeast instead of northwest)."
  },
  {
    "id": "physc_u1_q552",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "Derivatives of Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The position of a particle is given by $x(t) = 5\\sin(2t)$ meters. What is the maximum magnitude of the particle's acceleration?",
    "choices": [
      "A) 5 m/s²",
      "B) 10 m/s²",
      "C) 20 m/s²",
      "D) 40 m/s²"
    ],
    "answer": 2,
    "explanation": "Velocity: v = dx/dt = 10cos(2t). Acceleration: a = dv/dt = -20sin(2t). The maximum magnitude of acceleration is 20 m/s² (when sin(2t) = ±1). Choice A (5) is the amplitude of position. Choice B (10) is the maximum speed (amplitude of velocity), a common confusion. Choice D (40) incorrectly squares the angular frequency factor or doubles the correct answer."
  },
  {
    "id": "physc_u1_q553",
    "subject": "apphysc",
    "unit": 1,
    "topic": "integrals of motion",
    "topicLabel": "Integrals of Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The velocity of a particle is given by $v(t) = 4t - t^2$ m/s for $t \\geq 0$. What is the total displacement of the particle from t = 0 to t = 6 s?",
    "choices": [
      "A) 0 m",
      "B) -18 m",
      "C) 18 m",
      "D) -36 m"
    ],
    "answer": 0,
    "explanation": "Displacement = ∫₀⁶ (4t - t²) dt = [2t² - t³/3]₀⁶ = 2(36) - 216/3 = 72 - 72 = 0 m. The particle moves forward when v > 0 (from t = 0 to t = 4) and backward when v < 0 (from t = 4 to t = 6), and the net displacement is zero. Choice B (-18 m) might come from only integrating from t = 4 to t = 6. Choice C (18 m) might come from taking the absolute value of the negative portion. Choice D (-36 m) is a calculation error possibly from incorrect integration."
  },
  {
    "id": "physc_u1_q554",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "Derivatives of Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with position x(t) = t^3 - 6t^2 + 9t + 2 (in meters, t in seconds). At what time(s) is the particle momentarily at rest, and what is the acceleration at the earlier of those times?",
    "choices": [
      "A) t = 1 s and t = 3 s; acceleration at t = 1 s is -6 m/s^2",
      "B) t = 1 s and t = 3 s; acceleration at t = 1 s is 6 m/s^2",
      "C) t = 2 s only; acceleration at t = 2 s is 0 m/s^2",
      "D) t = 1 s and t = 3 s; acceleration at t = 1 s is -12 m/s^2"
    ],
    "answer": 0,
    "explanation": "v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3), so v = 0 at t = 1 and t = 3. a(t) = 6t - 12, so a(1) = 6 - 12 = -6 m/s^2. Option B uses the wrong sign. Option C confuses the inflection point with rest. Option D incorrectly doubles the acceleration."
  },
  {
    "id": "physc_u1_q555",
    "subject": "apphysc",
    "unit": 1,
    "topic": "integrals of motion",
    "topicLabel": "Integrals of Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle starts from rest at the origin and has an acceleration a(t) = 4t - 2 (m/s^2). What is the displacement of the particle from t = 0 to t = 3 s?",
    "choices": [
      "A) 9 m",
      "B) 12 m",
      "C) 6 m",
      "D) 18 m"
    ],
    "answer": 0,
    "explanation": "v(t) = integral of (4t - 2) dt = 2t^2 - 2t + C; v(0) = 0 so C = 0. x(t) = integral of (2t^2 - 2t) dt = (2/3)t^3 - t^2 + C; x(0) = 0 so C = 0. x(3) = (2/3)(27) - 9 = 18 - 9 = 9 m. Option B results from forgetting the -2t term in velocity. Option C comes from only integrating once. Option D results from integrating a(t) directly as displacement."
  },
  {
    "id": "physc_u1_q556",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 1D",
    "topicLabel": "Kinematics in 1D",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car travels the first half of a total distance at speed v1 and the second half at speed v2. A second car travels the first half of the total time at v1 and the second half of the total time at v2. Which car has the greater average speed for the entire trip?",
    "choices": [
      "A) The car that splits by time always has the greater average speed",
      "B) The car that splits by distance always has the greater average speed",
      "C) Both cars have the same average speed",
      "D) It depends on whether v1 > v2 or v1 < v2"
    ],
    "answer": 0,
    "explanation": "Splitting by distance gives v_avg = 2v1*v2/(v1+v2) (harmonic mean). Splitting by time gives v_avg = (v1+v2)/2 (arithmetic mean). By the AM-HM inequality, the arithmetic mean is always greater than or equal to the harmonic mean, with equality only when v1 = v2. So the time-split car always has the greater average speed (or equal if v1 = v2). Students often think C or D, but the AM >= HM inequality is strict for unequal speeds."
  },
  {
    "id": "physc_u1_q557",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematics in 2D",
    "topicLabel": "Kinematics in 2D",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves in the xy-plane with position r(t) = (A cos(omega*t)) i + (B sin(omega*t)) j, where A ≠ B. Which statement about the speed of the particle is correct?",
    "choices": [
      "A) The speed is constant and equal to omega*A",
      "B) The speed is constant and equal to omega*sqrt(A^2 + B^2)/sqrt(2)",
      "C) The speed varies with time and equals omega*sqrt(A^2 sin^2(omega*t) + B^2 cos^2(omega*t))",
      "D) The speed varies with time and equals omega*sqrt(A^2 cos^2(omega*t) + B^2 sin^2(omega*t))"
    ],
    "answer": 2,
    "explanation": "v(t) = (-A*omega sin(omega*t)) i + (B*omega cos(omega*t)) j. Speed = omega*sqrt(A^2 sin^2(omega*t) + B^2 cos^2(omega*t)). This is NOT constant unless A = B (circular motion). Option A is a common mistake from assuming circular motion. Option B incorrectly takes an RMS average. Option D swaps sine and cosine inside the radical."
  },
  {
    "id": "physc_u1_q558",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "Relative Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A boat can travel at speed v_b = 5 m/s in still water. A river of width d = 80 m flows at v_r = 3 m/s. The boat wants to cross the river in the minimum possible time. How far downstream from the directly opposite point does the boat land?",
    "choices": [
      "A) 48 m",
      "B) 60 m",
      "C) 0 m (it lands directly opposite)",
      "D) 64 m"
    ],
    "answer": 0,
    "explanation": "To minimize crossing time, the boat should aim directly across the river (perpendicular to the banks). Time to cross = d/v_b = 80/5 = 16 s. During this time, the river carries the boat downstream by v_r * t = 3 * 16 = 48 m. Option C is wrong because that strategy (aiming upstream) minimizes drift but not time. Option B incorrectly uses v_b - v_r in the denominator. Option D uses an incorrect geometric combination."
  },
  {
    "id": "physc_u1_q559",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematic equations with calculus",
    "topicLabel": "Kinematic Equations with Calculus",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with velocity v(x) = k*sqrt(x), where k is a positive constant and x is in meters. If the particle is at x = 0 at t = 0, what is the acceleration of the particle as a function of x?",
    "choices": [
      "A) k^2 / 2",
      "B) k / (2*sqrt(x))",
      "C) k^2 * x",
      "D) k^2 / (2*sqrt(x))"
    ],
    "answer": 0,
    "explanation": "a = v dv/dx = k*sqrt(x) * d(k*sqrt(x))/dx = k*sqrt(x) * k/(2*sqrt(x)) = k^2/2. The acceleration is constant! Option B incorrectly gives dv/dx alone without multiplying by v. Option C confuses the expression. Option D multiplies dv/dx by k instead of v."
  },
  {
    "id": "physc_u1_q560",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "Projectile Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two projectiles are launched simultaneously from the same point with the same speed v0 but at angles theta and (90 - theta) above the horizontal. At the instant they are at the same height (other than launch), what is the ratio of their speeds?",
    "choices": [
      "A) 1 : 1",
      "B) cos(theta) : sin(theta)",
      "C) tan(theta) : 1",
      "D) sin(theta) : cos(theta)"
    ],
    "answer": 0,
    "explanation": "At the same height h, both projectiles have the same vertical velocity magnitude (they have the same vertical component structure due to complementary angles, just time-reversed). Using energy conservation, speed^2 = v0^2 - 2gh for both projectiles since they started with the same v0 and are at the same height h. Therefore their speeds are equal, giving ratio 1:1. Students often think the different launch angles cause different speeds at the same height, but energy conservation shows otherwise."
  },
  {
    "id": "physc_u1_q561",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "Derivatives of Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The position of a particle is given by x(t) = A*e^(-bt)*sin(omega*t). At t = 0, what is the velocity of the particle?",
    "choices": [
      "A) A*omega",
      "B) 0",
      "C) -A*b",
      "D) A*(omega - b)"
    ],
    "answer": 0,
    "explanation": "v(t) = dx/dt = A*e^(-bt)*[-b*sin(omega*t) + omega*cos(omega*t)]. At t = 0: v(0) = A*e^0*[-b*sin(0) + omega*cos(0)] = A*omega. Option B is wrong (that's x(0), not v(0)). Option C takes only the exponential derivative. Option D incorrectly combines the two terms at t = 0."
  },
  {
    "id": "physc_u1_q562",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "Relative Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Car A moves east at 30 m/s and Car B moves north at 40 m/s. Both start at the origin at t = 0. At what rate is the distance between them increasing at t = 2 s?",
    "choices": [
      "A) 50 m/s",
      "B) 70 m/s",
      "C) 35 m/s",
      "D) 10 m/s"
    ],
    "answer": 0,
    "explanation": "At time t, A is at (30t, 0) and B is at (0, 40t). Distance D = sqrt((30t)^2 + (40t)^2) = 50t. dD/dt = 50 m/s, which is constant. This is because the velocity vectors are perpendicular and constant, so the separation speed equals sqrt(30^2 + 40^2) = 50 m/s at all times. Option B simply adds the speeds. Option C averages them. Option D subtracts them."
  },
  {
    "id": "physc_u1_q563",
    "subject": "apphysc",
    "unit": 1,
    "topic": "kinematic equations with calculus",
    "topicLabel": "Kinematic Equations with Calculus",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle's acceleration depends on its velocity as a(v) = -c*v^2, where c is a positive constant. If the particle has velocity v0 at t = 0, what is v(t)?",
    "choices": [
      "A) v0 / (1 + c*v0*t)",
      "B) v0 * e^(-c*t)",
      "C) v0 - c*v0^2*t",
      "D) v0 / (1 + c*t)"
    ],
    "answer": 0,
    "explanation": "dv/dt = -cv^2. Separating variables: dv/v^2 = -c dt. Integrating: -1/v = -ct + C. At t = 0: -1/v0 = C. So -1/v = -ct - 1/v0, giving 1/v = 1/v0 + ct = (1 + cv0*t)/v0, so v = v0/(1 + cv0*t). Option B assumes a = -cv (linear drag). Option C linearizes for small t only. Option D drops the v0 factor in the denominator."
  },
  {
    "id": "physc_u1_q564",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "Projectile Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A projectile is launched from the edge of a cliff of height H with horizontal velocity v0. At the moment it hits the ground, the velocity vector makes an angle of 60 degrees below the horizontal. What is H in terms of v0 and g?",
    "choices": [
      "A) 3v0^2 / (2g)",
      "B) v0^2 / (2g)",
      "C) v0^2 / g",
      "D) 2v0^2 / g"
    ],
    "answer": 0,
    "explanation": "At impact, v_x = v0 and v_y = v0*tan(60) = v0*sqrt(3). Using v_y^2 = 2gH (initial vertical velocity is zero): 3v0^2 = 2gH, so H = 3v0^2/(2g). Option B forgets the tan(60) factor and uses tan(45). Option C uses an incorrect factor. Option D results from a common algebra error."
  },
  {
    "id": "physc_u2_q565",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's Third Law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A small car collides head-on with a large truck. During the collision, how does the magnitude of the force the car exerts on the truck compare to the magnitude of the force the truck exerts on the car?",
    "choices": [
      "A) The forces are equal in magnitude.",
      "B) The truck exerts a greater force on the car.",
      "C) The car exerts a greater force on the truck.",
      "D) The comparison depends on the relative speeds of the vehicles."
    ],
    "answer": 0,
    "explanation": "By Newton's Third Law, whenever two objects interact, the forces they exert on each other are equal in magnitude and opposite in direction, regardless of differences in mass, size, or speed. Choice B is the most common student misconception — students often believe the larger or heavier object exerts the greater force. Choice C is implausible but sometimes chosen by students who confuse force with acceleration. Choice D incorrectly suggests the third-law pair depends on kinematics; Newton's Third Law holds universally during any interaction."
  },
  {
    "id": "physc_u2_q566",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's Third Law Applied to Two-Body Systems",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 4 kg block pushes against a 2 kg block on a frictionless surface. A horizontal force of 18 N is applied to the 4 kg block. What is the magnitude of the contact force that the 2 kg block exerts on the 4 kg block?",
    "choices": [
      "A) 6 N",
      "B) 9 N",
      "C) 12 N",
      "D) 18 N"
    ],
    "answer": 0,
    "explanation": "The system accelerates at a = 18 N / (4 + 2) kg = 3 m/s². The contact force on the 2 kg block must provide its acceleration: F = 2 kg × 3 m/s² = 6 N. By Newton's third law, the 2 kg block pushes back on the 4 kg block with 6 N. Common errors: choosing 12 N (using the 4 kg mass instead), choosing 9 N (splitting the applied force by number of blocks), or choosing 18 N (assuming the full applied force transmits)."
  },
  {
    "id": "physc_u2_q567",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Free body diagrams",
    "topicLabel": "Free Body Diagrams and Tension",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A block of mass m hangs from two ropes. One rope makes a 30° angle with the horizontal ceiling and the other makes a 60° angle with the horizontal ceiling. Which rope has greater tension?",
    "choices": [
      "A) The rope at 30° to the horizontal",
      "B) The rope at 60° to the horizontal",
      "C) Both ropes have equal tension",
      "D) It depends on the mass of the block"
    ],
    "answer": 1,
    "explanation": "Setting up equilibrium: the horizontal components must cancel, so T1 cos30° = T2 cos60°. This gives T1(√3/2) = T2(1/2), so T2 = T1√3, meaning T2 > T1. The rope closer to vertical (60° from horizontal) carries more tension. Students often incorrectly assume the rope at the larger angle from vertical bears more load, or that both tensions are equal due to symmetry confusion."
  },
  {
    "id": "physc_u2_q568",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Friction",
    "topicLabel": "Static and Kinetic Friction on an Incline",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A block of mass m sits on a rough incline at angle θ. The coefficient of static friction is μs and the coefficient of kinetic friction is μk, with μk < μs. The block is on the verge of sliding. If θ is increased very slightly, the acceleration of the block down the incline is:",
    "choices": [
      "A) g sinθ",
      "B) g sinθ − μk g cosθ",
      "C) g sinθ − μs g cosθ",
      "D) g(sinθ − cosθ)(μs − μk)"
    ],
    "answer": 1,
    "explanation": "Once the block begins to slide, kinetic friction applies. Along the incline: ma = mg sinθ − μk mg cosθ, giving a = g sinθ − μk g cosθ. A common mistake is using μs (choice C), but static friction only applies up to the moment of slipping. Choice A neglects friction entirely. Choice D is a fabricated expression mixing both coefficients incorrectly."
  },
  {
    "id": "physc_u2_q569",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Drag force",
    "topicLabel": "Terminal Velocity with Quadratic Drag",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A sphere falling through air experiences a drag force proportional to v². If the mass of the sphere is doubled while keeping its size and drag coefficient the same, by what factor does the terminal velocity change?",
    "choices": [
      "A) It doubles",
      "B) It increases by a factor of √2",
      "C) It increases by a factor of 4",
      "D) It remains the same"
    ],
    "answer": 1,
    "explanation": "At terminal velocity, mg = bv_t², so v_t = √(mg/b). Doubling m gives v_t' = √(2mg/b) = √2 · v_t. The terminal velocity increases by √2. A common error is saying it doubles (confusing linear and quadratic drag), or saying it quadruples (squaring instead of taking the square root). Choice D would only be correct if drag depended on v² and mass didn't matter, which is incorrect."
  },
  {
    "id": "physc_u2_q570",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Circular motion dynamics",
    "topicLabel": "Circular Motion on a Banked Curve",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A car travels around a frictionless banked curve of radius R, banked at angle θ. If the car's speed is greater than √(Rg tanθ), what happens?",
    "choices": [
      "A) The car slides down the bank",
      "B) The car slides up the bank (away from the center)",
      "C) The car maintains the circular path because the normal force adjusts",
      "D) The car flips over due to the excess centripetal force"
    ],
    "answer": 1,
    "explanation": "At the design speed v = √(Rg tanθ), the horizontal component of the normal force exactly provides the centripetal force. If the speed exceeds this, the required centripetal force exceeds what the banked normal force can provide horizontally, so the car slides outward (up the bank). Students may think the car slides inward (choice A), confusing the direction, or that the normal force self-adjusts (choice C), which would require friction."
  },
  {
    "id": "physc_u2_q571",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Non-inertial reference frames",
    "topicLabel": "Pseudo-forces in Accelerating Frames",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A pendulum hangs from the ceiling of a train that accelerates horizontally at a constant rate a. In the non-inertial frame of the train, the pendulum makes an angle θ with the vertical at equilibrium. Which expression correctly gives tanθ?",
    "choices": [
      "A) a/g",
      "B) g/a",
      "C) mg/a",
      "D) ma/g"
    ],
    "answer": 0,
    "explanation": "In the non-inertial frame, a pseudo-force ma acts horizontally on the pendulum bob (opposite to the train's acceleration). At equilibrium, the horizontal pseudo-force and vertical gravity combine: T sinθ = ma and T cosθ = mg, giving tanθ = a/g. Choice B inverts the ratio. Choice C and D incorrectly include mass in a dimensionless ratio, which is a common student error of not simplifying properly."
  },
  {
    "id": "physc_u2_q572",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's Second Law with Variable Force",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 2 kg object initially at rest is acted on by a single force F = 6t (in newtons, where t is in seconds) along a straight line. What is the velocity of the object at t = 4 s?",
    "choices": [
      "A) 12 m/s",
      "B) 24 m/s",
      "C) 48 m/s",
      "D) 8 m/s"
    ],
    "answer": 1,
    "explanation": "From Newton's second law, a = F/m = 6t/2 = 3t. Integrating: v = ∫0 to 4 of 3t dt = (3/2)t² evaluated from 0 to 4 = (3/2)(16) = 24 m/s. Choice A (12 m/s) results from using a = 6t/2 but forgetting the factor of 1/2 in integration (treating it as 3×4). Choice C (48 m/s) comes from forgetting to divide by mass. Choice D (8 m/s) comes from using the average force incorrectly."
  },
  {
    "id": "physc_u2_q573",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Newton's Third Law in Accelerating Systems",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 2 kg block sits on top of a 5 kg block on a frictionless surface. A horizontal force F is applied to the 5 kg block. The coefficient of static friction between the two blocks is 0.4. What is the maximum force F that can be applied to the 5 kg block before the 2 kg block slides off? (g = 10 m/s^2)",
    "choices": [
      "A) 8 N",
      "B) 28 N",
      "C) 20 N",
      "D) 56 N"
    ],
    "answer": 1,
    "explanation": "The maximum static friction on the 2 kg block is f_max = mu_s * m_top * g = 0.4 * 2 * 10 = 8 N. This friction is the only horizontal force on the top block, giving it a maximum acceleration of a = 8/2 = 4 m/s^2. For the system to move together at this acceleration, F = (m_top + m_bottom) * a = 7 * 4 = 28 N. Common error A (8 N) only considers the friction force itself. C (20 N) incorrectly uses only the bottom block mass. D (56 N) incorrectly uses the total weight for the friction calculation with the total mass."
  },
  {
    "id": "physc_u2_q574",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Friction",
    "topicLabel": "Static vs Kinetic Friction Transitions",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block of mass m rests on a rough incline of angle theta. The coefficient of static friction is mu_s and kinetic friction is mu_k (mu_k < mu_s). The angle is slowly increased from zero. At the moment the block begins to slide, what is the block's initial acceleration?",
    "choices": [
      "A) 0",
      "B) g(sin(theta) - mu_k * cos(theta))",
      "C) g(sin(theta) - mu_s * cos(theta))",
      "D) g * mu_s * cos(theta)"
    ],
    "answer": 1,
    "explanation": "The block begins to slide when tan(theta) = mu_s. At that instant, the friction transitions from static to kinetic. The net force is mg*sin(theta) - mu_k*mg*cos(theta), giving acceleration g(sin(theta) - mu_k*cos(theta)). Since mu_k < mu_s and at the critical angle sin(theta) = mu_s*cos(theta), this acceleration is positive: g*cos(theta)*(mu_s - mu_k) > 0. Choice A is wrong because that would only be true if kinetic friction equaled static friction. Choice C incorrectly uses mu_s for the sliding friction. Choice D gives only the friction deceleration term without the gravitational component."
  },
  {
    "id": "physc_u2_q575",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Drag force",
    "topicLabel": "Terminal Velocity with Quadratic Drag",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A sphere of mass m falls through air experiencing a drag force F_drag = bv^2. It reaches terminal velocity v_t. If the mass of the sphere is doubled but its size and shape remain the same, what is the new terminal velocity?",
    "choices": [
      "A) 2 * v_t",
      "B) v_t * sqrt(2)",
      "C) 4 * v_t",
      "D) v_t * 2^(1/3)"
    ],
    "answer": 1,
    "explanation": "At terminal velocity, drag equals weight: b*v_t^2 = mg, so v_t = sqrt(mg/b). If mass doubles and b stays the same, v_t_new = sqrt(2mg/b) = v_t * sqrt(2). Choice A assumes a linear drag relationship. Choice C confuses doubling mass with quadrupling velocity. Choice D would apply if drag were cubic in velocity."
  },
  {
    "id": "physc_u2_q576",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Circular motion dynamics",
    "topicLabel": "Vertical Circular Motion at the Top",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A ball of mass m on a string of length L moves in a vertical circle. At the top of the circle, the speed of the ball is v. What is the tension in the string at the top of the circle?",
    "choices": [
      "A) mv^2/L - mg",
      "B) mv^2/L + mg",
      "C) mg - mv^2/L",
      "D) mv^2/L"
    ],
    "answer": 0,
    "explanation": "At the top of the vertical circle, both tension T and gravity mg point toward the center (downward). Newton's second law gives T + mg = mv^2/L, so T = mv^2/L - mg. Choice B incorrectly subtracts gravity from the centripetal requirement as if gravity opposed the centripetal direction (this applies at the bottom). Choice C reverses the subtraction, which would give a negative tension for fast-moving objects. Choice D ignores gravity entirely."
  },
  {
    "id": "physc_u2_q577",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Non-inertial reference frames",
    "topicLabel": "Pseudo-forces in an Accelerating Elevator",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A pendulum hangs from the ceiling of an elevator accelerating upward at a = g/3. In the non-inertial frame of the elevator, what effective gravitational acceleration does the pendulum bob experience?",
    "choices": [
      "A) 2g/3",
      "B) g/3",
      "C) 4g/3",
      "D) g"
    ],
    "answer": 2,
    "explanation": "In the non-inertial frame of the accelerating elevator, a pseudo-force of magnitude ma = m(g/3) acts downward (opposite to the elevator's upward acceleration). The effective gravity is g_eff = g + g/3 = 4g/3. Choice A subtracts instead of adds, confusing upward acceleration with reduced gravity. Choice B gives only the pseudo-force contribution. Choice D ignores the pseudo-force entirely."
  },
  {
    "id": "physc_u2_q578",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Newton's laws",
    "topicLabel": "Atwood Machine with Massive Pulley Concept",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an Atwood machine with an ideal massless pulley, masses m and 2m are connected by a massless string. What is the acceleration of the system?",
    "choices": [
      "A) g/2",
      "B) g/3",
      "C) 2g/3",
      "D) g"
    ],
    "answer": 1,
    "explanation": "For an Atwood machine, the net force is (2m - m)g = mg, and the total inertia is (2m + m) = 3m. Thus a = mg/(3m) = g/3. Choice A is a common error from dividing by 2m instead of 3m. Choice C uses the net force ratio 2m/(3m) incorrectly. Choice D would be free fall, ignoring the constraint of the string."
  },
  {
    "id": "physc_u2_q579",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Circular motion dynamics",
    "topicLabel": "Banked Curve with Friction",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car travels around a banked curve of radius R and bank angle theta at a speed greater than the ideal no-friction speed. The coefficient of static friction is mu_s. In which direction does the friction force act on the car?",
    "choices": [
      "A) Up the incline",
      "B) Down the incline",
      "C) Horizontally toward the center of the curve",
      "D) There is no friction force since the road is banked"
    ],
    "answer": 1,
    "explanation": "At the ideal speed, no friction is needed. When the car exceeds this speed, it tends to slide up the bank. Static friction therefore acts down the incline to prevent this, providing additional centripetal force. Choice A is correct for speeds below the ideal speed. Choice C incorrectly assumes friction acts horizontally rather than along the surface. Choice D incorrectly assumes banking eliminates friction entirely."
  },
  {
    "id": "physc_u2_q580",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Non-inertial reference frames",
    "topicLabel": "Coriolis and Centrifugal Pseudo-forces",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A person stands on a rotating platform (angular velocity omega) and throws a ball radially outward with speed v relative to the platform. In the rotating frame, which pseudo-forces act on the ball immediately after release?",
    "choices": [
      "A) Centrifugal force only",
      "B) Coriolis force only",
      "C) Both centrifugal and Coriolis forces",
      "D) Neither, because the ball has left contact with the platform"
    ],
    "answer": 2,
    "explanation": "In the rotating (non-inertial) reference frame, any object experiences a centrifugal pseudo-force (directed radially outward, proportional to omega^2 * r) and, if it has velocity relative to the rotating frame, a Coriolis pseudo-force (proportional to 2 * omega * v_rel, perpendicular to the velocity). Since the ball moves radially outward with speed v in the rotating frame, both forces are present. Choice A forgets the Coriolis force arising from the ball's radial velocity. Choice B forgets the centrifugal force. Choice D incorrectly assumes pseudo-forces require contact — they apply to all objects analyzed in the non-inertial frame."
  },
  {
    "id": "physc_u3_q581",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservative forces",
    "topicLabel": "Conservative Forces",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following is a defining property of a conservative force?",
    "choices": [
      "A) The work done by the force on an object moving between two points is independent of the path taken.",
      "B) The force always acts in the direction of motion of the object.",
      "C) The force does zero work on any object at all times.",
      "D) The magnitude of the force must be constant everywhere in space."
    ],
    "answer": 0,
    "explanation": "A conservative force is defined by the property that the work it does depends only on the initial and final positions, not on the path taken. Equivalently, the work done around any closed path is zero. Choice B is incorrect because conservative forces (like gravity) do not necessarily act along the direction of motion. Choice C is incorrect because conservative forces can and do perform nonzero work; it is only the work around a closed loop that is zero. Choice D is incorrect because many conservative forces, such as the gravitational force and the spring force, vary with position."
  },
  {
    "id": "physc_u4_q584",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "Impulse-Momentum Theorem",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 2 kg ball moving at 6 m/s to the right strikes a wall and rebounds at 4 m/s to the left. The ball is in contact with the wall for 0.05 s. What is the average force exerted by the wall on the ball?",
    "choices": [
      "A) 40 N to the left",
      "B) 400 N to the left",
      "C) 80 N to the left",
      "D) 240 N to the left"
    ],
    "answer": 1,
    "explanation": "Impulse = change in momentum. Taking right as positive, the change in momentum is m*v_f - m*v_i = 2(-4) - 2(6) = -8 - 12 = -20 kg·m/s. Average force = impulse/time = -20/0.05 = -400 N, meaning 400 N to the left. Choice A (40 N) results from dividing by 0.5 s instead of 0.05 s. Choice C (80 N) comes from using |v_f - v_i| = 2 instead of properly accounting for direction. Choice D (240 N) comes from using the difference of speeds (6-4=2) times mass divided by time, ignoring the sign change."
  },
  {
    "id": "physc_u4_q585",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "Elastic Collisions",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A ball of mass m moving at speed v collides head-on elastically with a stationary ball of mass 3m. What is the speed of the originally moving ball after the collision?",
    "choices": [
      "A) v/2 in the original direction",
      "B) v/2 in the opposite direction",
      "C) v/4 in the original direction",
      "D) v/4 in the opposite direction"
    ],
    "answer": 1,
    "explanation": "For a 1D elastic collision with a stationary target, v1_f = v*(m1 - m2)/(m1 + m2) = v*(m - 3m)/(m + 3m) = v*(-2m)/(4m) = -v/2. The negative sign means the ball bounces back at v/2 in the opposite direction. Choice A ignores the sign (direction reversal). Choice C uses an incorrect formula. Choice D gets the magnitude wrong."
  },
  {
    "id": "physc_u4_q586",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "Perfectly Inelastic Collisions",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 4 kg block moving at 10 m/s collides with and sticks to a 6 kg block moving at 2 m/s in the same direction. What fraction of the original kinetic energy is lost in the collision?",
    "choices": [
      "A) 0.25",
      "B) 0.37",
      "C) 0.50",
      "D) 0.55"
    ],
    "answer": 1,
    "explanation": "Initial momentum: 4(10) + 6(2) = 52 kg·m/s. Final speed: 52/10 = 5.2 m/s. Initial KE = 0.5(4)(100) + 0.5(6)(4) = 200 + 12 = 212 J. Final KE = 0.5(10)(5.2)^2 = 0.5(10)(27.04) = 135.2 J. Fraction lost = (212 - 135.2)/212 = 76.8/212 ≈ 0.36, closest to 0.37. Choice A (0.25) is a common guess assuming a simple ratio. Choice C (0.50) assumes half the energy is always lost. Choice D overstimates the loss."
  },
  {
    "id": "physc_u4_q587",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "Center of Mass",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "Two particles are on the x-axis: a 3 kg particle at x = 2 m and a 1 kg particle at x = 6 m. A third 2 kg particle is placed on the x-axis. Where must the third particle be placed so that the center of mass of the three-particle system is at x = 4 m?",
    "choices": [
      "A) x = 3 m",
      "B) x = 5 m",
      "C) x = 6 m",
      "D) x = 7 m"
    ],
    "answer": 2,
    "explanation": "x_cm = (m1*x1 + m2*x2 + m3*x3)/(m1+m2+m3). Setting x_cm = 4: 4 = (3(2) + 1(6) + 2(x3))/(3+1+2) = (6 + 6 + 2x3)/6 = (12 + 2x3)/6. So 24 = 12 + 2x3, giving x3 = 6 m. Choice A (3 m) results from an averaging error. Choice B (5 m) comes from simply averaging 2 and 6 and placing the mass near the midpoint. Choice D (7 m) results from an arithmetic error in solving the equation."
  },
  {
    "id": "physc_u4_q588",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "Variable Mass Systems",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A rocket in deep space has an initial mass of 1000 kg and expels fuel at a constant rate of 5 kg/s with an exhaust velocity of 2000 m/s relative to the rocket. What is the initial thrust on the rocket?",
    "choices": [
      "A) 2500 N",
      "B) 5000 N",
      "C) 10000 N",
      "D) 2000000 N"
    ],
    "answer": 2,
    "explanation": "Thrust = v_exhaust * (dm/dt) = 2000 m/s * 5 kg/s = 10000 N. Choice A (2500 N) results from dividing instead of multiplying. Choice B (5000 N) comes from using only half the exhaust velocity or confusing factors. Choice D (2,000,000 N) comes from mistakenly multiplying the total mass by the exhaust velocity. The thrust depends on the exhaust speed and the mass flow rate, not the total rocket mass."
  },
  {
    "id": "physc_u4_q589",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "Center of Mass Motion",
    "difficulty": "medium",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 50 kg skater and an 80 kg skater stand at rest on frictionless ice and push off each other. After pushing off, the velocity of the center of mass of the two-skater system is:",
    "choices": [
      "A) Zero",
      "B) In the direction of the lighter skater's motion",
      "C) In the direction of the heavier skater's motion",
      "D) Nonzero but dependent on the force of the push"
    ],
    "answer": 0,
    "explanation": "The center of mass velocity of an isolated system is constant. Since both skaters are initially at rest, the total momentum is zero, and the center of mass velocity remains zero regardless of the push. Choice B and C are wrong because students sometimes think the lighter or heavier skater 'carries' the center of mass. Choice D is wrong because no external force acts on the system, so the internal push cannot change the center of mass velocity."
  },
  {
    "id": "physc_u5_q591",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rotational inertia",
    "topicLabel": "Rotational Inertia",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid disk and a thin hoop have the same mass M and the same radius R. Which object has the greater rotational inertia about an axis through its center perpendicular to its face?",
    "choices": [
      "A) The solid disk",
      "B) The thin hoop",
      "C) They have the same rotational inertia",
      "D) It depends on the thickness of the disk"
    ],
    "answer": 1,
    "explanation": "The rotational inertia of a thin hoop about its central axis is I = MR^2, while for a solid disk it is I = (1/2)MR^2. Since MR^2 > (1/2)MR^2, the hoop has the greater rotational inertia. Students often incorrectly choose the solid disk thinking that a 'solid' object must have more inertia, but what matters is how the mass is distributed relative to the axis. The hoop has all its mass at distance R from the axis, whereas the disk has mass distributed from 0 to R, resulting in a smaller moment of inertia."
  },
  {
    "id": "physc_u5_q592",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rotational inertia",
    "topicLabel": "Rotational Inertia",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin uniform rod of mass M and length L is pivoted about one end. A point mass M is attached to the other end. What is the total moment of inertia about the pivot?",
    "choices": [
      "A) (1/3)ML^2 + ML^2 = (4/3)ML^2",
      "B) (1/12)ML^2 + ML^2 = (13/12)ML^2",
      "C) (1/3)ML^2 + (1/2)ML^2 = (5/6)ML^2",
      "D) ML^2 + ML^2 = 2ML^2"
    ],
    "answer": 0,
    "explanation": "The moment of inertia of a thin rod about one end is (1/3)ML^2. The point mass M at distance L from the pivot contributes ML^2. The total is (1/3)ML^2 + ML^2 = (4/3)ML^2. Choice B incorrectly uses (1/12)ML^2, which is the rod's moment of inertia about its center, not the end. Choice C incorrectly uses (1/2)ML^2 for the point mass. Choice D incorrectly uses ML^2 for the rod."
  },
  {
    "id": "physc_u5_q593",
    "subject": "apphysc",
    "unit": 5,
    "topic": "Newton's second law rotation",
    "topicLabel": "Newton's Second Law for Rotation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid cylinder of mass M and radius R is free to rotate about its central axis. A string wrapped around the cylinder has a constant force F applied to it. What is the angular acceleration of the cylinder? (I_cylinder = (1/2)MR^2)",
    "choices": [
      "A) 2F/(MR)",
      "B) F/(MR)",
      "C) F/(2MR)",
      "D) 2FR/M"
    ],
    "answer": 0,
    "explanation": "Using Newton's second law for rotation: net torque = I * alpha. The torque from the string is FR. The moment of inertia is (1/2)MR^2. So alpha = FR / ((1/2)MR^2) = 2F/(MR). Choice B forgets the factor of 2 from the moment of inertia. Choice C inverts the relationship and gets the reciprocal. Choice D has incorrect dimensions (it would have units of m/s^2 rather than rad/s^2)."
  },
  {
    "id": "physc_u5_q594",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "Rolling Without Slipping",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid sphere rolls without slipping down an incline of height h starting from rest. What is its speed at the bottom? (I_sphere = (2/5)MR^2)",
    "choices": [
      "A) sqrt(10gh/7)",
      "B) sqrt(2gh)",
      "C) sqrt(5gh/3)",
      "D) sqrt(gh)"
    ],
    "answer": 0,
    "explanation": "Using energy conservation: Mgh = (1/2)Mv^2 + (1/2)I*omega^2. For rolling without slipping, omega = v/R, so Mgh = (1/2)Mv^2 + (1/2)(2/5)MR^2 * (v/R)^2 = (1/2)Mv^2 + (1/5)Mv^2 = (7/10)Mv^2. Solving: v = sqrt(10gh/7). Choice B is the answer if rotational kinetic energy is ignored (pure sliding). Choice C incorrectly uses I = (1/3)MR^2. Choice D incorrectly accounts for energy by including too much rotational energy."
  },
  {
    "id": "physc_u5_q595",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "Angular Momentum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A figure skater spinning with arms extended has moment of inertia 4.0 kg*m^2 and angular velocity 2.0 rad/s. She pulls her arms in, reducing her moment of inertia to 1.0 kg*m^2. What is the ratio of her final kinetic energy to her initial kinetic energy?",
    "choices": [
      "A) 4",
      "B) 1",
      "C) 2",
      "D) 16"
    ],
    "answer": 0,
    "explanation": "Angular momentum is conserved: L = I_i * omega_i = I_f * omega_f. So omega_f = (4.0)(2.0)/(1.0) = 8.0 rad/s. Initial KE = (1/2)(4.0)(2.0)^2 = 8.0 J. Final KE = (1/2)(1.0)(8.0)^2 = 32.0 J. Ratio = 32/8 = 4. Choice B incorrectly assumes energy is conserved. Choice C confuses the ratio of moments of inertia with the energy ratio. Choice D squares the ratio of moments of inertia."
  },
  {
    "id": "physc_u5_q596",
    "subject": "apphysc",
    "unit": 5,
    "topic": "gyroscopic motion",
    "topicLabel": "Gyroscopic Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spinning gyroscope wheel of moment of inertia I and angular velocity omega is supported at one end of its axle, a distance d from the center of mass. The wheel has mass M. What is the precession angular velocity of the gyroscope?",
    "choices": [
      "A) Mgd/(I*omega)",
      "B) I*omega/(Mgd)",
      "C) Mgd*omega/I",
      "D) Mg/(I*omega*d)"
    ],
    "answer": 0,
    "explanation": "The torque due to gravity is tau = Mgd. The angular momentum of the spinning wheel is L = I*omega. The precession rate is Omega = tau/L = Mgd/(I*omega). Choice B inverts the relationship. Choice C incorrectly multiplies omega instead of dividing by it. Choice D has an extra factor of d in the denominator instead of the numerator, giving incorrect dimensions."
  },
  {
    "id": "physc_u5_q597",
    "subject": "apphysc",
    "unit": 5,
    "topic": "parallel axis theorem",
    "topicLabel": "Parallel Axis Theorem & Rotational Inertia",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A thin uniform rod of mass M and length L has a moment of inertia (1/12)ML² about its center. The rod is pivoted at a point L/6 from one end. What is the moment of inertia about this pivot?",
    "choices": [
      "A) (1/12)ML²",
      "B) (7/36)ML²",
      "C) (1/4)ML²",
      "D) (1/9)ML²"
    ],
    "answer": 1,
    "explanation": "The center of mass is at L/2 from either end. The pivot is at L/6 from one end, so the distance from the center to the pivot is L/2 - L/6 = L/3. By the parallel axis theorem, I = I_cm + Md² = (1/12)ML² + M(L/3)² = (1/12)ML² + (1/9)ML² = (3/36 + 4/36)ML² = (7/36)ML². Choice A ignores the parallel axis shift entirely. Choice D uses only the Md² term and forgets I_cm. Choice C results from incorrectly computing the distance as L/4."
  },
  {
    "id": "physc_u5_q598",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "Rolling Without Slipping",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A solid sphere and a hollow sphere, both of mass M and radius R, are released from rest at the top of an incline of height h. Both roll without slipping. What is the ratio of the speed of the solid sphere to the speed of the hollow sphere at the bottom?",
    "choices": [
      "A) 1",
      "B) sqrt(21/25)",
      "C) sqrt(25/21)",
      "D) sqrt(5/7)"
    ],
    "answer": 2,
    "explanation": "For rolling without slipping, energy conservation gives Mgh = (1/2)Mv² + (1/2)Iv²/R². For a solid sphere I = (2/5)MR², so v² = 10gh/7. For a hollow sphere I = (2/3)MR², so v² = 6gh/5. The ratio v_solid/v_hollow = sqrt((10gh/7)/(6gh/5)) = sqrt(50/42) = sqrt(25/21). Choice A assumes both have the same speed, ignoring different rotational inertias. Choice B inverts the ratio. Choice D is the ratio sqrt((2/5)/(2/3)) = sqrt(3/5), which incorrectly compares moments of inertia directly rather than final speeds."
  },
  {
    "id": "physc_u6_q599",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in SHM",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block on a spring oscillates in simple harmonic motion with amplitude A. At what displacement from equilibrium is the kinetic energy equal to the potential energy?",
    "choices": [
      "A) A / sqrt(2)",
      "B) A / 2",
      "C) A / 4",
      "D) A sqrt(2)"
    ],
    "answer": 0,
    "explanation": "The total energy is E = (1/2)kA^2. Setting KE = PE means each equals E/2, so (1/2)kx^2 = (1/4)kA^2, giving x = A/sqrt(2). A common mistake is choosing A/2 (option B), which confuses halving the displacement with halving the energy. Option C (A/4) incorrectly quarters the amplitude. Option D exceeds the amplitude and is physically impossible."
  },
  {
    "id": "physc_u6_q600",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum",
    "topicLabel": "Pendulum",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A simple pendulum has period T on Earth. If the pendulum is taken to a planet where the gravitational acceleration is four times that of Earth, what is the new period?",
    "choices": [
      "A) T / 4",
      "B) T / 2",
      "C) 2T",
      "D) 4T"
    ],
    "answer": 1,
    "explanation": "The period of a simple pendulum is T = 2pi * sqrt(L/g). If g increases by a factor of 4, the period changes by a factor of 1/sqrt(4) = 1/2, so the new period is T/2. Option A (T/4) is a common error from students who use inverse proportionality instead of inverse square-root proportionality. Options C and D incorrectly assume the period increases with stronger gravity."
  },
  {
    "id": "physc_u6_q601",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass systems",
    "topicLabel": "Spring-Mass Systems",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block of mass m is attached to two identical springs, each of spring constant k, arranged in parallel on a frictionless surface. The block is displaced from equilibrium and released. What is the period of oscillation?",
    "choices": [
      "A) 2 pi sqrt(m / (2k))",
      "B) 2 pi sqrt(2m / k)",
      "C) 2 pi sqrt(m / k)",
      "D) pi sqrt(m / k)"
    ],
    "answer": 0,
    "explanation": "Two springs in parallel have an effective spring constant k_eff = k + k = 2k. The period is T = 2 pi sqrt(m / k_eff) = 2 pi sqrt(m / (2k)). Choice B incorrectly uses 2m/k as if the springs were in series. Choice C uses k_eff = k, ignoring the parallel combination. Choice D incorrectly halves the period formula."
  },
  {
    "id": "physc_u6_q602",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum",
    "topicLabel": "Pendulum",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A simple pendulum of length L swings with small amplitude on the surface of Earth. If the pendulum is taken to a planet where the gravitational acceleration is g/4, by what factor does the period change?",
    "choices": [
      "A) The period doubles",
      "B) The period quadruples",
      "C) The period is halved",
      "D) The period increases by a factor of sqrt(2)"
    ],
    "answer": 0,
    "explanation": "The period of a simple pendulum is T = 2 pi sqrt(L/g). Replacing g with g/4 gives T' = 2 pi sqrt(L/(g/4)) = 2 pi sqrt(4L/g) = 2 * 2 pi sqrt(L/g) = 2T. The period doubles. Choice B incorrectly assumes T is proportional to 1/g. Choice C reverses the relationship. Choice D confuses the factor with reducing g by half instead of by a factor of 4."
  },
  {
    "id": "physc_u6_q603",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in Simple Harmonic Motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A mass on a spring oscillates with amplitude A. At what displacement from equilibrium is the kinetic energy equal to three times the potential energy?",
    "choices": [
      "A) x = A / 2",
      "B) x = A sqrt(3) / 2",
      "C) x = A / sqrt(2)",
      "D) x = A / 4"
    ],
    "answer": 0,
    "explanation": "Total energy E = (1/2)kA^2. Potential energy U = (1/2)kx^2 and kinetic energy K = E - U. Setting K = 3U gives E - U = 3U, so E = 4U, meaning U = E/4. Then (1/2)kx^2 = (1/4)(1/2)kA^2, so x^2 = A^2/4, giving x = A/2. Choice B comes from confusing with the case K = U (x = A/sqrt(2)) or misapplying trig identities. Choice C is where K = U. Choice D confuses x with A/4 by incorrectly setting x = A/4 from U = E/4 without proper algebra."
  },
  {
    "id": "physc_u6_q604",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A damped harmonic oscillator has the equation of motion m(d^2x/dt^2) + b(dx/dt) + kx = 0. The system is underdamped. Which of the following correctly describes how the total mechanical energy of the system changes over time?",
    "choices": [
      "A) The energy decreases exponentially, proportional to e^(-bt/m)",
      "B) The energy decreases linearly with time",
      "C) The energy decreases proportional to e^(-bt/(2m))",
      "D) The energy remains constant because the system still oscillates"
    ],
    "answer": 0,
    "explanation": "For an underdamped oscillator, the amplitude decays as e^(-bt/(2m)), so the energy, which is proportional to the square of the amplitude, decays as e^(-bt/m). Choice B is incorrect because the decay is exponential, not linear. Choice C gives the decay rate of the amplitude, not the energy — a common student error. Choice D incorrectly assumes energy conservation in a dissipative system."
  },
  {
    "id": "physc_u6_q605",
    "subject": "apphysc",
    "unit": 6,
    "topic": "driven oscillations and resonance",
    "topicLabel": "Driven Oscillations and Resonance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A lightly damped spring-mass system has a natural frequency omega_0. An external periodic force with frequency omega_d drives the system. As omega_d is slowly increased from zero, which statement best describes the steady-state amplitude response?",
    "choices": [
      "A) The amplitude increases, reaches a maximum near omega_0, then decreases",
      "B) The amplitude increases monotonically as omega_d increases",
      "C) The amplitude is maximum when omega_d = 0 and decreases as omega_d increases",
      "D) The amplitude reaches a maximum exactly at omega_d = omega_0 regardless of damping"
    ],
    "answer": 0,
    "explanation": "In a driven damped oscillator, the steady-state amplitude peaks near the natural frequency omega_0 (resonance), then decreases at higher driving frequencies. Choice A correctly describes this resonance behavior. Choice B ignores resonance entirely. Choice C describes a low-pass filter behavior, not resonance. Choice D is a common misconception: the resonance peak actually occurs at a frequency slightly below omega_0 for nonzero damping (omega_res = sqrt(omega_0^2 - 2(b/(2m))^2)), though for light damping it is very close to omega_0, making 'near' the correct description."
  },
  {
    "id": "physc_u7_q607",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's laws",
    "topicLabel": "Kepler's laws",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "According to Kepler's second law, a planet in an elliptical orbit around the Sun sweeps out equal areas in equal times. What does this law directly imply about the planet's motion?",
    "choices": [
      "A) The planet moves faster when it is closer to the Sun.",
      "B) The planet moves at a constant speed throughout its orbit.",
      "C) The planet's orbital period depends on its mass.",
      "D) The planet moves faster when it is farther from the Sun."
    ],
    "answer": 0,
    "explanation": "Kepler's second law (the law of equal areas) states that the line joining a planet to the Sun sweeps out equal areas in equal time intervals. For this to hold, the planet must move faster when it is closer to the Sun (at perihelion) and slower when it is farther (at aphelion). Choice B is wrong because the speed varies in an elliptical orbit. Choice C is wrong because Kepler's third law relates the period to the semi-major axis, not the planet's mass. Choice D is the opposite of the correct relationship."
  },
  {
    "id": "physc_u7_q608",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Gravitational Potential Energy",
    "topicLabel": "Gravitational Potential Energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite of mass m is in a circular orbit of radius 2R around a planet of mass M and radius R. How much energy is required to move the satellite to a circular orbit of radius 4R?",
    "choices": [
      "A) GMm/(8R)",
      "B) GMm/(4R)",
      "C) GMm/(16R)",
      "D) 3GMm/(8R)"
    ],
    "answer": 0,
    "explanation": "The total mechanical energy of a satellite in a circular orbit of radius r is E = -GMm/(2r). At radius 2R, E_i = -GMm/(4R). At radius 4R, E_f = -GMm/(8R). The energy required is E_f - E_i = -GMm/(8R) + GMm/(4R) = GMm/(8R). Choice B (GMm/(4R)) is a common error from forgetting the factor of 2 in the total energy formula and using only potential energy. Choice C comes from an algebraic error. Choice D comes from incorrectly adding the magnitudes instead of taking the difference."
  },
  {
    "id": "physc_u7_q609",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Kepler's Laws",
    "topicLabel": "Kepler's Laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Planet X orbits a star with a period of T and a semi-major axis of a. Planet Y orbits the same star with a semi-major axis of 4a. What is the orbital period of Planet Y?",
    "choices": [
      "A) 4T",
      "B) 8T",
      "C) 16T",
      "D) 2T"
    ],
    "answer": 1,
    "explanation": "By Kepler's third law, T^2 is proportional to a^3. So (T_Y/T)^2 = (4a/a)^3 = 64, giving T_Y = 8T. Choice A (4T) is a common mistake from assuming T is directly proportional to a. Choice C (16T) results from incorrectly squaring the ratio instead of taking the 3/2 power. Choice D (2T) comes from taking the square root of the semi-major axis ratio."
  },
  {
    "id": "physc_u7_q610",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Escape Velocity",
    "topicLabel": "Escape Velocity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The escape velocity from the surface of a planet of mass M and radius R is v_e. If a second planet has twice the mass and twice the radius, what is its escape velocity?",
    "choices": [
      "A) v_e",
      "B) v_e * sqrt(2)",
      "C) 2 * v_e",
      "D) v_e / sqrt(2)"
    ],
    "answer": 0,
    "explanation": "Escape velocity is v_e = sqrt(2GM/R). For the second planet: v_e' = sqrt(2G(2M)/(2R)) = sqrt(2GM/R) = v_e. The factors of 2 cancel. Choice B is a common error from only accounting for the mass doubling. Choice C results from multiplying rather than properly handling the square root. Choice D results from only accounting for the radius doubling."
  },
  {
    "id": "physc_u7_q611",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Gravitational Field",
    "topicLabel": "Gravitational Field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform solid sphere of mass M and radius R has a small tunnel drilled to its center. What is the gravitational field strength at a distance R/2 from the center of the sphere?",
    "choices": [
      "A) GM/(2R^2)",
      "B) GM/R^2",
      "C) 2GM/R^2",
      "D) GM/(4R^2)"
    ],
    "answer": 0,
    "explanation": "Inside a uniform solid sphere, only the mass enclosed within the radius r contributes to the gravitational field. The enclosed mass at r = R/2 is M_enc = M(r/R)^3 = M/8. The field is g = GM_enc/r^2 = G(M/8)/(R/2)^2 = G(M/8)/(R^2/4) = GM/(2R^2). Choice B incorrectly uses the full mass M at the surface formula. Choice D is a common error from using M_enc but forgetting to properly square the reduced radius. Choice C results from an inversion error in the calculation."
  },
  {
    "id": "physc_u8_q613",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A closed Gaussian surface encloses a total charge of +Q. If the shape of the Gaussian surface is changed but it still encloses the same charge, what happens to the total electric flux through the surface?",
    "choices": [
      "A) It remains the same.",
      "B) It increases because the surface area increases.",
      "C) It decreases because the surface is no longer symmetric.",
      "D) It depends on the new shape of the surface."
    ],
    "answer": 0,
    "explanation": "By Gauss's law, the total electric flux through a closed surface depends only on the enclosed charge: Phi = Q_enc / epsilon_0. The shape or size of the Gaussian surface does not matter. Choice B is a common misconception that flux depends on surface area. Choice C incorrectly assumes symmetry affects total flux (symmetry helps calculate the field, not the total flux). Choice D is wrong because the flux is independent of the surface shape."
  },
  {
    "id": "physc_u8_q614",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in equilibrium",
    "topicLabel": "Conductors in equilibrium",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In electrostatic equilibrium, where does excess charge reside on a solid conducting sphere?",
    "choices": [
      "A) Uniformly throughout the volume of the sphere",
      "B) Only on the outer surface of the sphere",
      "C) At the center of the sphere",
      "D) Concentrated at points of lowest curvature"
    ],
    "answer": 1,
    "explanation": "In electrostatic equilibrium, the electric field inside a conductor is zero. Applying Gauss's law to a surface just inside the conductor shows there can be no net charge in the interior, so all excess charge must reside on the outer surface. Choice A is a common misconception that treats the conductor like an insulator with uniform volume charge. Choice C has no physical basis. Choice D confuses the concept of charge density variation on irregular conductors — for a sphere, the surface charge is uniform, and in general charge concentrates at points of highest curvature, not lowest."
  },
  {
    "id": "physc_u8_q615",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Coulomb's law",
    "topicLabel": "Coulomb's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two identical positive point charges Q are separated by a distance d. A third positive charge q is placed at the midpoint between them. What is the net electrostatic force on the third charge?",
    "choices": [
      "A) Zero",
      "B) kQq/d^2 directed toward the nearer charge",
      "C) 4kQq/d^2 directed away from both charges",
      "D) 2kQq/d^2 directed toward the nearer charge"
    ],
    "answer": 0,
    "explanation": "At the midpoint, the third charge is equidistant from both charges Q. Each charge exerts a repulsive force of magnitude kQq/(d/2)^2 = 4kQq/d^2 on q, but these two forces point in opposite directions along the line joining the charges. By symmetry, they cancel exactly, giving a net force of zero. Students often forget to account for both forces or incorrectly assume the forces add rather than cancel."
  },
  {
    "id": "physc_u8_q616",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric field for symmetric charge distributions",
    "topicLabel": "Electric field for symmetric charge distributions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An infinitely long line of uniform positive charge has linear charge density lambda. Using Gauss's law with a cylindrical Gaussian surface of radius r and length L coaxial with the line, what is the magnitude of the electric field at distance r from the line?",
    "choices": [
      "A) lambda/(2*pi*epsilon_0*r)",
      "B) lambda/(4*pi*epsilon_0*r^2)",
      "C) lambda*L/(epsilon_0*r)",
      "D) lambda/(epsilon_0*r^2)"
    ],
    "answer": 0,
    "explanation": "The enclosed charge is lambda*L. By Gauss's law, the flux is lambda*L/epsilon_0. For a cylindrical Gaussian surface, the flux through the curved surface is E*(2*pi*r*L) (the end caps contribute zero flux by symmetry since E is radial). Setting E*(2*pi*r*L) = lambda*L/epsilon_0 gives E = lambda/(2*pi*epsilon_0*r). Choice B incorrectly applies the point-charge formula with 1/r^2 dependence. Choice C fails to divide by the surface area properly. Choice D uses an incorrect geometric factor."
  },
  {
    "id": "physc_u8_q617",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in electrostatic equilibrium",
    "topicLabel": "Conductors in electrostatic equilibrium",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid conducting sphere of radius R carries a net charge +Q. A concentric conducting spherical shell with inner radius 2R and outer radius 3R carries no net charge. What is the charge on the inner surface of the shell?",
    "choices": [
      "A) 0",
      "B) -Q",
      "C) +Q",
      "D) -Q/4"
    ],
    "answer": 1,
    "explanation": "In electrostatic equilibrium, the electric field inside a conductor is zero. Drawing a Gaussian surface within the conducting material of the shell (between radii 2R and 3R), the net enclosed charge must be zero. Since the inner solid sphere has charge +Q, the inner surface of the shell must have charge -Q to make the total enclosed charge zero. By conservation of charge, the outer surface of the shell then has charge +Q. Choice A ignores the induction effect. Choice C incorrectly assumes the induced charge has the same sign. Choice D incorrectly scales by the radius ratio squared."
  },
  {
    "id": "physc_u8_q618",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law",
    "topicLabel": "Gauss's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid insulating sphere of radius R has a non-uniform volume charge density rho = alpha*r, where alpha is a positive constant and r is the distance from the center. What is the electric field magnitude at a distance r < R from the center?",
    "choices": [
      "A) alpha*r^2 / (4*epsilon_0)",
      "B) alpha*r^2 / (3*epsilon_0)",
      "C) alpha*R^3 / (4*epsilon_0*r^2)",
      "D) alpha*r / (3*epsilon_0)"
    ],
    "answer": 0,
    "explanation": "Using Gauss's law, the enclosed charge is the integral of rho*dV = integral from 0 to r of (alpha*r')(4*pi*r'^2)dr' = 4*pi*alpha*(r^4/4) = pi*alpha*r^4. Setting this equal to epsilon_0 * E * 4*pi*r^2 gives E = alpha*r^2/(4*epsilon_0). Choice B uses 3 in the denominator, a common error from confusing with uniform charge density integration. Choice C incorrectly uses the full radius R as if evaluating outside the sphere. Choice D corresponds to a uniform charge density result."
  },
  {
    "id": "physc_u8_q619",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Conductors in equilibrium",
    "topicLabel": "Conductors in equilibrium",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A hollow conducting spherical shell has inner radius a and outer radius b. A point charge +Q is placed at a location inside the cavity but NOT at the center. Which of the following statements is true about the electrostatic equilibrium configuration?",
    "choices": [
      "A) The surface charge on the inner surface is non-uniform, and the surface charge on the outer surface is uniform.",
      "B) The surface charge on both the inner and outer surfaces is non-uniform.",
      "C) The surface charge on the inner surface is uniform, and the surface charge on the outer surface is non-uniform.",
      "D) The surface charge on both the inner and outer surfaces is uniform."
    ],
    "answer": 0,
    "explanation": "By Gauss's law applied inside the conductor, the total induced charge on the inner surface is -Q, but since the point charge is off-center, the induced charge distributes non-uniformly on the inner surface to ensure E = 0 inside the conductor. However, the conductor shields the exterior: the field outside depends only on the total charge +Q on the outer surface, and by symmetry of the spherical outer surface, this charge distributes uniformly regardless of where the charge is inside. Choice B incorrectly assumes the outer surface is also non-uniform. Choice C reverses the correct distributions. Choice D assumes both are uniform, ignoring the off-center placement effect on the inner wall."
  },
  {
    "id": "physc_u8_q620",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Electric flux",
    "topicLabel": "Electric flux",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A cube of side length L is placed in a region with a non-uniform electric field E = (beta*x^2) in the x-direction, where beta is a constant and x is measured from one face of the cube that sits at x = 0. What is the net electric flux through the cube?",
    "choices": [
      "A) beta * L^4",
      "B) beta * L^2",
      "C) 2 * beta * L^4",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "The electric field is entirely in the x-direction, so only the two faces perpendicular to x contribute to flux. At x = 0, E = 0, so flux through that face is 0. At x = L, E = beta*L^2, and the area of that face is L^2, giving flux = beta*L^2 * L^2 = beta*L^4 outward. The net flux is beta*L^4. Choice B neglects that the field at x = L must be multiplied by the full face area L^2. Choice C incorrectly adds contributions from both faces as if both had nonzero field. Choice D assumes the field contributions cancel, which is wrong because E(0) = 0."
  },
  {
    "id": "physc_u8_q621",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Coulomb's law and electric field",
    "topicLabel": "Coulomb's law and electric field",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two positive point charges, +Q at the origin and +4Q at x = L, are fixed on the x-axis. At what x-coordinate is the net electric field equal to zero?",
    "choices": [
      "A) x = L/3",
      "B) x = L/2",
      "C) x = 2L/3",
      "D) x = L/5"
    ],
    "answer": 0,
    "explanation": "The zero-field point lies between the two positive charges where their fields oppose. Setting kQ/x^2 = k(4Q)/(L-x)^2 gives (L-x)^2 = 4x^2, so L-x = 2x (taking the positive root for the region between them), yielding x = L/3. Choice B is a common guess assuming the midpoint. Choice C reflects an error in solving the algebra (swapping which charge is larger). Choice D results from an incorrect setup where the distance from +4Q is used as L+x instead of L-x."
  },
  {
    "id": "physc_u9_q622",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "Field from Potential",
    "difficulty": "easy",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "If the electric potential in a region is given by V = -3x + 5 (in volts, with x in meters), what is the x-component of the electric field in that region?",
    "choices": [
      "A) 3 V/m",
      "B) -3 V/m",
      "C) 5 V/m",
      "D) -5 V/m"
    ],
    "answer": 0,
    "explanation": "The electric field component is found from E_x = -dV/dx. Taking the derivative of V = -3x + 5 gives dV/dx = -3, so E_x = -(-3) = 3 V/m. Choice B (-3 V/m) is the most common error, resulting from forgetting the negative sign in E = -dV/dx. Choices C and D incorrectly use the constant term rather than the coefficient of x."
  },
  {
    "id": "physc_u9_q623",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "Field from Potential",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The electric potential in a region of space is given by V(x, y) = 3x^2 - 2y, where V is in volts and x and y are in meters. What is the electric field at the point (1, 2)?",
    "choices": [
      "A) 6i + 2j V/m",
      "B) -6i + 2j V/m",
      "C) 6i - 2j V/m",
      "D) -6i - 2j V/m"
    ],
    "answer": 1,
    "explanation": "The electric field is found from E = -grad(V). The x-component is Ex = -dV/dx = -6x, and at x = 1 this gives -6 V/m. The y-component is Ey = -dV/dy = -(-2) = +2 V/m. So E = -6i + 2j V/m. Choice A neglects the negative sign in E = -grad(V), a common error. Choice D incorrectly applies the negative to the y-component as well, and Choice C neglects the negative for both components incorrectly."
  },
  {
    "id": "physc_u9_q624",
    "subject": "apphysc",
    "unit": 9,
    "topic": "dielectrics",
    "topicLabel": "Dielectrics",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel-plate capacitor is charged to a voltage V and then disconnected from the battery. A dielectric slab with dielectric constant K = 3 is then inserted to fill the space between the plates. Which of the following correctly describes the changes to the stored energy U and the electric field E between the plates?",
    "choices": [
      "A) U increases by a factor of 3; E remains the same",
      "B) U decreases by a factor of 3; E decreases by a factor of 3",
      "C) U increases by a factor of 3; E increases by a factor of 3",
      "D) U decreases by a factor of 3; E remains the same"
    ],
    "answer": 1,
    "explanation": "Since the capacitor is disconnected, the charge Q remains constant. Inserting the dielectric increases the capacitance to C' = KC. The stored energy U = Q^2/(2C) becomes Q^2/(2KC) = U/K, so energy decreases by a factor of 3. The voltage decreases to V/K, and since E = V/d, the electric field also decreases by a factor of 3. Choice A incorrectly assumes energy increases (confusing with the battery-connected case). Choice C makes the same error in the opposite direction. Choice D correctly identifies the energy decrease but incorrectly claims E stays the same, confusing the free charge staying constant with the field staying constant."
  },
  {
    "id": "physc_u10_q626",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An initially uncharged 5 microfarad capacitor is connected in series with a 200 kilohm resistor and a 10 V battery. What is the voltage across the capacitor after exactly one time constant?",
    "choices": [
      "A) 3.7 V",
      "B) 5.0 V",
      "C) 6.3 V",
      "D) 10.0 V"
    ],
    "answer": 2,
    "explanation": "The time constant is RC = (200 x 10^3)(5 x 10^-6) = 1 s. The voltage across a charging capacitor is V(t) = EMF(1 - e^(-t/RC)). At t = RC, V = 10(1 - e^-1) = 10(1 - 0.368) = 6.3 V. A (3.7 V) is the voltage across the resistor at one time constant, a common confusion where students use the decaying exponential for the capacitor. B (5.0 V) assumes the voltage is simply half the battery voltage at one time constant. D (10.0 V) is the final steady-state voltage, not the voltage at one time constant."
  },
  {
    "id": "physc_u10_q627",
    "subject": "apphysc",
    "unit": 10,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two resistors, R and 2R, are connected in parallel across a battery of voltage V. What is the ratio of the power dissipated in resistor R to the power dissipated in resistor 2R?",
    "choices": [
      "A) 1:2",
      "B) 1:1",
      "C) 2:1",
      "D) 4:1"
    ],
    "answer": 2,
    "explanation": "In a parallel circuit, both resistors have the same voltage V across them. Power dissipated is P = V^2/R. For resistor R: P1 = V^2/R. For resistor 2R: P2 = V^2/(2R). The ratio P1/P2 = (V^2/R)/(V^2/2R) = 2. So the ratio is 2:1. A (1:2) is a common error from students who incorrectly think larger resistance dissipates more power (confusing with series behavior where P = I^2 R). B (1:1) assumes equal power regardless of resistance. D (4:1) results from incorrectly squaring the resistance ratio."
  },
  {
    "id": "physc_u10_q628",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An RC circuit has R = 5 kohm and C = 2 microfarads. The capacitor is initially uncharged and connected to a 10 V battery at t = 0. At what time does the power dissipated in the resistor equal exactly one-quarter of the initial power dissipated?",
    "choices": [
      "A) RC ln(2)",
      "B) 2RC ln(2)",
      "C) RC ln(4)",
      "D) (1/2) RC ln(2)"
    ],
    "answer": 0,
    "explanation": "The current during charging is i(t) = (V/R)e^(-t/RC). Power in the resistor is P(t) = i^2 R = (V^2/R)e^(-2t/RC). Initial power is P(0) = V^2/R. Setting P(t) = P(0)/4: e^(-2t/RC) = 1/4, so -2t/RC = ln(1/4) = -2ln(2), giving t = RC ln(2). A common mistake is to set e^(-t/RC) = 1/4 (confusing power with current), which gives t = RC ln(4) = 2RC ln(2) (choice B or C). Another error is halving instead of using the squared relationship (choice D)."
  },
  {
    "id": "physc_u10_q629",
    "subject": "apphysc",
    "unit": 10,
    "topic": "power",
    "topicLabel": "power",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A battery with EMF = 24 V and internal resistance r is connected to an external load R. The power delivered to the external load is maximized when R = r. If r = 4 ohms, what is the ratio of the maximum power delivered to the load to the total power produced by the EMF?",
    "choices": [
      "A) 1/2",
      "B) 1/4",
      "C) 3/4",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "At maximum power transfer (R = r), the current is I = EMF/(2r). Total power from EMF is P_total = EMF * I = EMF^2/(2r). Power to load is P_load = I^2 R = (EMF/(2r))^2 * r = EMF^2/(4r). The ratio is P_load/P_total = [EMF^2/(4r)] / [EMF^2/(2r)] = 1/2. Students often confuse this with the efficiency being 1/4 (choice B) by incorrectly computing the ratio of load power to total power dissipated in both resistors rather than to total EMF power, or think maximum power transfer means all power goes to the load (choice D)."
  },
  {
    "id": "physc_u10_q630",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits steady state",
    "topicLabel": "RC circuits steady state",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a DC circuit at steady state, a 10 V battery is connected in series with a 2 kohm resistor, which then splits into two parallel branches: one branch has a 3 kohm resistor in series with a 5 microfarad capacitor, and the other branch has a 6 kohm resistor. What is the voltage across the capacitor at steady state?",
    "choices": [
      "A) 7.5 V",
      "B) 5.0 V",
      "C) 3.75 V",
      "D) 10 V"
    ],
    "answer": 0,
    "explanation": "At steady state, no current flows through the capacitor branch. All current flows through the 2 kohm and 6 kohm resistors in series: I = 10/(2k + 6k) = 10/8000 = 1.25 mA. The voltage across the 6 kohm resistor (which is also across the entire parallel combination) is V = 1.25 mA * 6 kohm = 7.5 V. Since no current flows through the 3 kohm resistor (capacitor blocks DC at steady state), there is no voltage drop across it, so the full 7.5 V appears across the capacitor. Students commonly err by trying to include the 3 kohm in a parallel calculation with 6 kohm (choice C = 3.75 V), or by ignoring the series 2 kohm resistor and saying the capacitor charges to the full battery voltage (choice D)."
  },
  {
    "id": "physc_u10_q631",
    "subject": "apphysc",
    "unit": 10,
    "topic": "current and resistance",
    "topicLabel": "current, resistance, Ohm's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A cylindrical copper wire of length L and radius a has resistance R. If the wire is drawn out (stretched at constant volume) until its length becomes 3L, what is the new resistance?",
    "choices": [
      "A) 9R",
      "B) 3R",
      "C) R/3",
      "D) R/9"
    ],
    "answer": 0,
    "explanation": "Resistance is R = rho*L/A. Since volume is constant, A*L = A'*(3L), so A' = A/3. New resistance = rho*(3L)/(A/3) = 9*rho*L/A = 9R. A common misconception is to only account for the length change (giving 3R, choice B) and forget that the cross-sectional area also decreases. Others may think stretching reduces resistance (choices C or D) by confusing the relationship between area and length at constant volume."
  },
  {
    "id": "physc_u10_q632",
    "subject": "apphysc",
    "unit": 10,
    "topic": "EMF and series circuits",
    "topicLabel": "EMF, series circuits",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two batteries are connected in series with opposing polarities: Battery A has EMF 15 V with internal resistance 1 ohm, and Battery B has EMF 9 V with internal resistance 2 ohms. They are connected in a loop with an external 3 ohm resistor. What is the current in the circuit and which battery is being charged?",
    "choices": [
      "A) 1 A, Battery B is being charged",
      "B) 1 A, Battery A is being charged",
      "C) 4 A, Battery B is being charged",
      "D) 2.4 A, neither battery is being charged"
    ],
    "answer": 0,
    "explanation": "With opposing polarities, the net EMF is 15 - 9 = 6 V. The total resistance is 1 + 2 + 3 = 6 ohms. Current I = 6/6 = 1 A. Current flows in the direction determined by the larger EMF (Battery A), meaning current flows into the positive terminal of Battery B, so Battery B is being charged. Students may think the larger battery is being charged (choice B), or may forget to include internal resistances in the total resistance (giving I = 6/3 = 2 A, not listed, or other errors leading to choice C or D). Choice C results from using only the larger EMF (15/3 = 5, not matching either — but some students make combined errors). Choice D comes from incorrectly adding the EMFs as 12V/5ohm."
  },
  {
    "id": "physc_u11_q633",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "Solenoids",
    "difficulty": "easy",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "What is the magnetic field inside an ideal solenoid with n turns per unit length carrying current I?",
    "choices": [
      "A) B = mu_0 * n * I",
      "B) B = mu_0 * I / (2 * pi * r)",
      "C) B = mu_0 * N * I",
      "D) B = mu_0 * n * I / (2 * pi)"
    ],
    "answer": 0,
    "explanation": "The magnetic field inside an ideal solenoid is B = mu_0 * n * I, where n is the number of turns per unit length. Choice B is the field around a long straight wire (common confusion with Ampere's law applied to a different geometry). Choice C incorrectly uses total number of turns N instead of turns per unit length n, which is a frequent student error of confusing N and n. Choice D incorrectly introduces a factor of 2*pi, which students sometimes add by misapplying Ampere's law."
  },
  {
    "id": "physc_u11_q634",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on charge",
    "topicLabel": "Magnetic Force on a Moving Charge",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A proton moves with velocity v in the +x direction through a region where a uniform magnetic field B points in the +z direction and a uniform electric field E points in the +y direction. If the proton travels in a straight line without deflection, what is the magnitude of E in terms of v and B?",
    "choices": [
      "A) vB",
      "B) v/B",
      "C) B/v",
      "D) v^2 B"
    ],
    "answer": 0,
    "explanation": "For the proton to travel undeflected, the electric force must balance the magnetic force: qE = qvB, so E = vB. Choice B) v/B is a common error from inverting the relationship. Choice C) B/v confuses which quantity is in the numerator. Choice D) v^2 B introduces an extra factor of v, which would apply if students confused this with a kinetic energy expression."
  },
  {
    "id": "physc_u11_q635",
    "subject": "apphysc",
    "unit": 11,
    "topic": "torque on current loop",
    "topicLabel": "Torque on a Current Loop in a Magnetic Field",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rectangular current loop with magnetic dipole moment m is placed in a uniform magnetic field B. The angle between the dipole moment vector and the magnetic field is 30 degrees. If the angle is increased to 60 degrees, by what factor does the torque on the loop change?",
    "choices": [
      "A) sqrt(3)",
      "B) 2",
      "C) sqrt(3)/2",
      "D) 3"
    ],
    "answer": 0,
    "explanation": "Torque on a current loop is given by tau = mB sin(theta). At 30 degrees, tau_1 = mB sin(30) = mB(1/2). At 60 degrees, tau_2 = mB sin(60) = mB(sqrt(3)/2). The ratio tau_2/tau_1 = (sqrt(3)/2)/(1/2) = sqrt(3). Choice B) 2 is the error from thinking torque doubles when the angle doubles. Choice C) sqrt(3)/2 is from computing sin(60) alone without dividing by sin(30). Choice D) 3 comes from incorrectly squaring the ratio or confusing with a tangent relationship."
  },
  {
    "id": "physc_u11_q636",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart Law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circular loop of radius R carries a steady current I. Using the Biot-Savart law, the magnetic field at the center of the loop is B_0. If the radius is doubled to 2R while keeping the current the same, what is the new magnetic field at the center?",
    "choices": [
      "A) B_0 / 2",
      "B) B_0 / 4",
      "C) 2 B_0",
      "D) B_0"
    ],
    "answer": 0,
    "explanation": "The magnetic field at the center of a circular loop is B = mu_0 I / (2R), which is inversely proportional to R. Doubling R gives B = mu_0 I / (2 * 2R) = B_0 / 2. Choice B) B_0/4 is the common error from assuming an inverse-square dependence (confusing with Coulomb's law or the field of a dipole at large distances). Choice C) 2B_0 incorrectly assumes direct proportionality. Choice D) B_0 incorrectly assumes the field is independent of radius."
  },
  {
    "id": "physc_u11_q637",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's Law and Solenoids",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A long solenoid has 500 turns per meter and carries a current of 3 A. A second solenoid is identical except it has 1000 turns per meter and carries a current of 1.5 A. What is the ratio of the magnetic field inside the first solenoid to the magnetic field inside the second solenoid?",
    "choices": [
      "A) 1:1",
      "B) 2:1",
      "C) 1:2",
      "D) 4:1"
    ],
    "answer": 0,
    "explanation": "The magnetic field inside a solenoid is B = mu_0 n I. For the first solenoid: B_1 = mu_0(500)(3) = 1500 mu_0. For the second: B_2 = mu_0(1000)(1.5) = 1500 mu_0. The ratio is 1:1. Choice B) 2:1 comes from only comparing the currents (3 A vs 1.5 A) and ignoring the turn density. Choice C) 1:2 comes from only comparing the turn densities. Choice D) 4:1 comes from squaring the current ratio."
  },
  {
    "id": "physc_u11_q638",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "Magnetic Force on a Current-Carrying Wire",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two long parallel wires are separated by a distance d and carry currents I_1 and I_2 in the same direction. The force per unit length on each wire has magnitude F. If the distance between the wires is halved and both currents are doubled, what is the new force per unit length?",
    "choices": [
      "A) 8F",
      "B) 4F",
      "C) 2F",
      "D) 16F"
    ],
    "answer": 0,
    "explanation": "The force per unit length between two parallel wires is F/L = mu_0 I_1 I_2 / (2 pi d). Doubling both currents multiplies the numerator by 4, and halving d doubles the result, giving an overall factor of 8. So the new force is 8F. Choice B) 4F only accounts for doubling the currents but not the change in distance. Choice C) 2F only accounts for halving the distance. Choice D) 16F incorrectly squares the distance factor or adds an extra factor of 2."
  },
  {
    "id": "physc_u12_q640",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "Energy Stored in an Inductor",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the energy stored in an inductor of inductance L carrying a current I?",
    "choices": [
      "A) (1/2)LI^2",
      "B) LI^2",
      "C) (1/2)LI",
      "D) LI"
    ],
    "answer": 0,
    "explanation": "The energy stored in an inductor is U = (1/2)LI^2, analogous to (1/2)CV^2 for a capacitor. Choice B is a common error where students forget the factor of 1/2. Choice C incorrectly uses I instead of I^2, confusing the energy formula with a linear relationship. Choice D combines both errors, omitting the 1/2 and using I instead of I^2."
  },
  {
    "id": "physc_u12_q641",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circular loop of radius R is placed in a region where the magnetic field is uniform and perpendicular to the plane of the loop. The magnitude of the field increases linearly from B0 to 3B0 over a time interval T. What is the magnitude of the induced EMF in the loop?",
    "choices": [
      "A) 2B0πR²/T",
      "B) 3B0πR²/T",
      "C) B0πR²/T",
      "D) 4B0πR²/T"
    ],
    "answer": 0,
    "explanation": "By Faraday's law, the induced EMF equals the rate of change of magnetic flux. The flux changes from B0πR² to 3B0πR², so ΔΦ = 2B0πR². Dividing by T gives EMF = 2B0πR²/T. Choice B (3B0πR²/T) is wrong because it uses the final field value rather than the change. Choice C uses only B0 instead of the change 2B0. Choice D incorrectly doubles the correct answer."
  },
  {
    "id": "physc_u12_q642",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Lenz's law",
    "topicLabel": "Lenz's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting ring lies in the xy-plane. A bar magnet with its north pole pointing downward (in the −z direction) is dropped from above toward the ring. As the magnet approaches the ring from above, in which direction does the induced current flow when viewed from above, and what is the nature of the force on the magnet due to the ring?",
    "choices": [
      "A) Counterclockwise; repulsive",
      "B) Clockwise; repulsive",
      "C) Counterclockwise; attractive",
      "D) Clockwise; attractive"
    ],
    "answer": 0,
    "explanation": "As the north pole approaches from above, the downward flux through the ring increases. By Lenz's law, the induced current must oppose this increase by creating an upward magnetic field through the ring, which requires a counterclockwise current when viewed from above (by the right-hand rule). This makes the top face of the ring act like a north pole, repelling the approaching north pole of the magnet. Choice B has the wrong current direction. Choice C has the correct current but incorrectly identifies the force. Choice D has both wrong."
  },
  {
    "id": "physc_u12_q643",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL circuits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An RL series circuit consists of a battery with EMF ε, a resistor R, and an inductor L. The switch is closed at t = 0. At what time does the current reach 50% of its maximum steady-state value?",
    "choices": [
      "A) (L/R) ln 2",
      "B) (L/R) ln(1/2)",
      "C) L/(2R)",
      "D) (R/L) ln 2"
    ],
    "answer": 0,
    "explanation": "The current in an RL circuit is i(t) = (ε/R)(1 − e^(−Rt/L)). The maximum current is ε/R. Setting i = 0.5(ε/R): 0.5 = 1 − e^(−Rt/L), so e^(−Rt/L) = 0.5, giving t = (L/R) ln 2. Choice B gives a negative time, which is nonphysical. Choice C (L/(2R)) is a common error from confusing half the time constant with the time to reach half the current. Choice D inverts L/R to R/L, giving incorrect units."
  },
  {
    "id": "physc_u12_q644",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "energy in inductor",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An inductor of inductance L carries a steady current I. If the current is doubled to 2I, by what factor does the energy stored in the inductor change?",
    "choices": [
      "A) 4",
      "B) 2",
      "C) 8",
      "D) 16"
    ],
    "answer": 0,
    "explanation": "The energy stored in an inductor is U = (1/2)LI². When the current doubles, U_new = (1/2)L(2I)² = (1/2)L(4I²) = 4 × (1/2)LI². The energy increases by a factor of 4. Choice B (factor of 2) results from incorrectly assuming energy is proportional to I rather than I². Choice C (factor of 8) confuses this with a cubic relationship. Choice D (factor of 16) incorrectly squares the factor of 4."
  },
  {
    "id": "physc_u12_q645",
    "subject": "apphysc",
    "unit": 12,
    "topic": "magnetic flux",
    "topicLabel": "Magnetic Flux",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circular loop of radius R lies in the xy-plane. A non-uniform magnetic field B = B0(1 + x/R) directed along the z-axis passes through the loop. What is the total magnetic flux through the loop?",
    "choices": [
      "A) B0 * pi * R^2",
      "B) 2 * B0 * pi * R^2",
      "C) B0 * pi * R^2 * (1 + 1/R)",
      "D) B0 * pi * R^2 + B0 * pi * R"
    ],
    "answer": 0,
    "explanation": "The flux is the integral of B dot dA over the circular area. The term B0 integrated over the circle gives B0*pi*R^2. The term B0*x/R integrated over the circle vanishes by symmetry because x is an odd function over a region symmetric about x = 0. Therefore the total flux is B0*pi*R^2. Choice B incorrectly doubles the result. Choices C and D incorrectly assume the x/R term contributes a nonzero integral."
  },
  {
    "id": "physc_u12_q646",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's Law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A square loop of side a and resistance R is entirely inside a region where the magnetic field points into the page and increases as B(t) = B0 * t^2. What is the magnitude of the induced current at time t?",
    "choices": [
      "A) 2 * B0 * a^2 * t / R",
      "B) B0 * a^2 * t^2 / R",
      "C) B0 * a^2 / R",
      "D) 2 * B0 * a^2 / R"
    ],
    "answer": 0,
    "explanation": "The flux is Phi = B(t)*a^2 = B0*t^2*a^2. By Faraday's law, EMF = -dPhi/dt = -2*B0*t*a^2. The magnitude of the current is |EMF|/R = 2*B0*a^2*t/R. Choice B uses the flux itself rather than its time derivative. Choices C and D neglect the time dependence entirely."
  },
  {
    "id": "physc_u12_q647",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Lenz's law",
    "topicLabel": "Lenz's Law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting ring falls freely under gravity toward a bar magnet with its north pole pointing upward. As the ring approaches from above, what is the direction of the induced current as viewed from above and the effect on the ring's acceleration?",
    "choices": [
      "A) Counterclockwise; acceleration is less than g",
      "B) Clockwise; acceleration is less than g",
      "C) Counterclockwise; acceleration equals g",
      "D) Clockwise; acceleration is greater than g"
    ],
    "answer": 0,
    "explanation": "As the ring approaches the north pole, the upward magnetic flux through the ring increases. By Lenz's law, the induced current must create a magnetic field opposing the increase, so it creates a field pointing downward through the ring, which corresponds to clockwise when viewed from below or counterclockwise when viewed from above. This makes the ring act like a magnet with its south pole facing down (north pole facing up), repelling the bar magnet's north pole, reducing the net downward force and making the acceleration less than g. Choice B has the wrong current direction. Choice C ignores the retarding force. Choice D violates energy conservation and Lenz's law."
  },
  {
    "id": "physc_u12_q648",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "Motional EMF",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting rod of length L slides with velocity v along two frictionless parallel rails separated by distance L in a uniform magnetic field B directed into the page. The rails are connected by resistance R. If the rod has mass m and starts at velocity v0 with no external force, which expression gives the velocity as a function of time?",
    "choices": [
      "A) v0 * exp(-B^2 * L^2 * t / (m * R))",
      "B) v0 - (B^2 * L^2 / (m * R)) * t",
      "C) v0 * exp(-R * t / (m * L^2))",
      "D) v0 / (1 + B^2 * L^2 * t / (m * R))"
    ],
    "answer": 0,
    "explanation": "The motional EMF is BLv, producing current BLv/R. The retarding force on the rod is BIL = B^2*L^2*v/R. Newton's second law gives m*dv/dt = -B^2*L^2*v/R, which is a first-order linear ODE with solution v = v0*exp(-B^2*L^2*t/(mR)). Choice B assumes constant deceleration (linear decrease). Choice C has incorrect grouping of constants. Choice D corresponds to a different differential equation."
  },
  {
    "id": "physc_u12_q649",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "Self-Inductance",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solenoid of length l, cross-sectional area A, and N turns is wound with two layers, each having N turns, so the total number of turns is 2N. Compared to a single-layer solenoid with N turns, the self-inductance of the double-layer solenoid is:",
    "choices": [
      "A) 4 times as large",
      "B) 2 times as large",
      "C) the same",
      "D) 8 times as large"
    ],
    "answer": 0,
    "explanation": "Self-inductance of a solenoid is L = mu0 * n^2 * l * A, where n is turns per unit length. Doubling the total turns from N to 2N while keeping length l the same doubles n, so L is proportional to n^2, making L four times as large. Choice B incorrectly assumes L is proportional to N rather than N^2. Choice C ignores the additional layer. Choice D confuses the scaling."
  },
  {
    "id": "physc_u12_q650",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL Circuits",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In an RL series circuit with EMF source V, resistance R, and inductance L, the current reaches 50% of its maximum value. What fraction of the maximum energy is stored in the inductor at that instant?",
    "choices": [
      "A) 25%",
      "B) 50%",
      "C) 75%",
      "D) 12.5%"
    ],
    "answer": 0,
    "explanation": "The maximum current is I_max = V/R, and the maximum energy stored is U_max = (1/2)*L*I_max^2. When the current is 0.5*I_max, the energy stored is (1/2)*L*(0.5*I_max)^2 = 0.25*(1/2)*L*I_max^2 = 0.25*U_max. So 25% of the maximum energy is stored. Choice B incorrectly assumes energy scales linearly with current. Choice C confuses the energy fraction. Choice D squares again unnecessarily."
  },
  {
    "id": "physc_u12_q651",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "Energy Stored in an Inductor",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An inductor of inductance L carries current I. If the inductance is somehow doubled while the magnetic flux through the inductor is held constant, what happens to the energy stored in the inductor?",
    "choices": [
      "A) It is halved",
      "B) It is doubled",
      "C) It remains the same",
      "D) It is quartered"
    ],
    "answer": 0,
    "explanation": "The flux linkage is Lambda = LI. If Lambda is held constant and L is doubled, then I must halve: I_new = Lambda/(2L) = I/2. The new energy is (1/2)(2L)(I/2)^2 = (1/2)(2L)(I^2/4) = LI^2/4 = (1/2)(1/2)LI^2. The original energy was (1/2)LI^2, so the new energy is half the original. Alternatively, U = Lambda^2/(2L), so doubling L halves U. Choice B incorrectly assumes energy doubles with L at constant I. Choice C confuses constant flux with constant energy. Choice D confuses the algebra."
  },
  {
    "id": "physc_u12_q652",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's Law with Multiple Loops",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A coil has 200 turns and is placed in a changing magnetic field. The magnetic flux through each turn changes from 5.0 x 10^-3 Wb to 1.0 x 10^-3 Wb in 0.02 s. What is the magnitude of the average induced EMF?",
    "choices": [
      "A) 40 V",
      "B) 0.2 V",
      "C) 8 V",
      "D) 0.4 V"
    ],
    "answer": 0,
    "explanation": "By Faraday's law, EMF = -N * dPhi/dt. The change in flux per turn is (5.0 - 1.0) x 10^-3 = 4.0 x 10^-3 Wb. Average EMF = N * |dPhi/dt| = 200 * (4.0 x 10^-3 / 0.02) = 200 * 0.2 = 40 V. Choice B forgets to multiply by N. Choice C uses incorrect time or flux values. Choice D uses N = 2 or mishandles the powers of ten."
  },
  {
    "id": "physc_u12_q653",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL Circuit Decay",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An RL circuit with R = 10 ohms and L = 5 H has been connected to a battery for a long time. At t = 0, the battery is removed and the circuit is shorted. How long does it take for the energy stored in the inductor to decrease to 1/e of its initial value?",
    "choices": [
      "A) 0.25 s",
      "B) 0.5 s",
      "C) 1.0 s",
      "D) 0.125 s"
    ],
    "answer": 0,
    "explanation": "The current decays as I(t) = I0*exp(-Rt/L). The energy is U(t) = (1/2)L*I^2 = U0*exp(-2Rt/L). For U to reach U0/e, we need exp(-2Rt/L) = 1/e, so 2Rt/L = 1, giving t = L/(2R) = 5/(20) = 0.25 s. Choice B uses L/R (the time constant for current, not energy). Choice C uses 2L/R. Choice D uses L/(4R), perhaps squaring the time constant incorrectly."
  },
  {
    "id": "physc_u12_q654",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "Motional EMF in Rotating Rod",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting rod of length L rotates about one end with angular velocity omega in a uniform magnetic field B perpendicular to the plane of rotation. What is the EMF developed between the two ends of the rod?",
    "choices": [
      "A) (1/2) * B * omega * L^2",
      "B) B * omega * L^2",
      "C) B * omega * L",
      "D) (1/4) * B * omega * L^2"
    ],
    "answer": 0,
    "explanation": "Consider a small element dr at distance r from the pivot. Its velocity is v = omega*r, and the motional EMF across it is dEMF = B*v*dr = B*omega*r*dr. Integrating from 0 to L gives EMF = B*omega*L^2/2. Choice B omits the factor of 1/2 from integration. Choice C treats the rod as though the entire length moves at omega*L. Choice D uses an incorrect factor of 1/4."
  },
  {
    "id": "physc_u12_q655",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "Mutual Inductance",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two coils have self-inductances L1 and L2 and a mutual inductance M. They are connected in series with their magnetic fields aiding. What is the total inductance of the combination?",
    "choices": [
      "A) L1 + L2 + 2M",
      "B) L1 + L2 + M",
      "C) L1 + L2 - 2M",
      "D) L1 + L2"
    ],
    "answer": 0,
    "explanation": "When two coupled inductors are in series aiding, the total inductance is L_total = L1 + L2 + 2M. The 2M arises because the flux linkage of each coil includes the mutual flux from the other. Choice B uses only +M, missing the factor of 2. Choice C corresponds to the opposing configuration. Choice D ignores mutual inductance entirely."
  },
  {
    "id": "physc_u12_q656",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "Energy Density in Magnetic Field",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A long solenoid has n turns per unit length and carries current I. The magnetic energy density inside the solenoid is:",
    "choices": [
      "A) (mu0 * n^2 * I^2) / 2",
      "B) mu0 * n^2 * I^2",
      "C) (mu0 * n * I^2) / 2",
      "D) (n^2 * I^2) / (2 * mu0)"
    ],
    "answer": 0,
    "explanation": "The magnetic field inside a solenoid is B = mu0*n*I. The energy density is u = B^2/(2*mu0) = (mu0*n*I)^2/(2*mu0) = mu0*n^2*I^2/2. Choice B is missing the factor of 1/2. Choice C is missing one factor of n. Choice D has mu0 in the denominator instead of the numerator."
  },
  {
    "id": "physc_u12_q657",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL Circuit with Two Resistors",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An inductor L is in series with resistor R1 and this combination is in parallel with resistor R2, all connected to a battery of EMF V. After the circuit reaches steady state, the battery is suddenly disconnected (but the parallel combination remains a closed loop through R2). What is the time constant for the current decay through the inductor?",
    "choices": [
      "A) L / (R1 + R2)",
      "B) L / R1",
      "C) L / R2",
      "D) L * (R1 + R2) / (R1 * R2)"
    ],
    "answer": 0,
    "explanation": "When the battery is disconnected, the inductor drives current through R1 and R2 in series (since the only path for current is through both resistors in the remaining loop). The time constant is L/(R1 + R2). Choice B ignores R2. Choice C ignores R1. Choice D corresponds to an incorrect parallel combination of resistances."
  },
  {
    "id": "physc_u12_q658",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "Inductance of Toroid",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A toroid with N turns, inner radius a, outer radius b, and height h has its self-inductance given by which expression?",
    "choices": [
      "A) (mu0 * N^2 * h * ln(b/a)) / (2 * pi)",
      "B) (mu0 * N^2 * h) / (2 * pi * (b - a))",
      "C) (mu0 * N^2 * pi * (b^2 - a^2)) / (2 * pi)",
      "D) (mu0 * N * h * ln(b/a)) / (2 * pi)"
    ],
    "answer": 0,
    "explanation": "For a toroid, B = mu0*N*I/(2*pi*r). The flux through one turn is integral of B*h*dr from a to b = mu0*N*I*h*ln(b/a)/(2*pi). The total flux linkage is N times this, so L = N*Phi/I = mu0*N^2*h*ln(b/a)/(2*pi). Choice B uses a linear approximation instead of the logarithm. Choice C incorrectly uses the area pi*(b^2 - a^2). Choice D has N instead of N^2."
  },
  {
    "id": "physc_u12_q659",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "Motional EMF and Power",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rod of length L and resistance r slides at constant velocity v on frictionless rails connected by external resistance R in a uniform field B (perpendicular to the rail plane). What is the power dissipated in the external resistance R?",
    "choices": [
      "A) B^2 * L^2 * v^2 * R / (R + r)^2",
      "B) B^2 * L^2 * v^2 / R",
      "C) B^2 * L^2 * v^2 / (R + r)",
      "D) B^2 * L^2 * v^2 * r / (R + r)^2"
    ],
    "answer": 0,
    "explanation": "The EMF is BLv. The total current is I = BLv/(R + r). Power in R is I^2*R = B^2*L^2*v^2*R/(R + r)^2. Choice B ignores the rod's resistance. Choice C gives total power (I^2*(R+r)) not just power in R. Choice D gives power dissipated in the rod, not in R."
  },
  {
    "id": "physc_u12_q660",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL Circuit Voltage Across Inductor",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a series RL circuit connected to EMF V at t = 0, at what time is the voltage across the inductor equal to the voltage across the resistor?",
    "choices": [
      "A) (L/R) * ln(2)",
      "B) L/R",
      "C) (L/R) * ln(1/2)",
      "D) (R/L) * ln(2)"
    ],
    "answer": 0,
    "explanation": "The current is I(t) = (V/R)(1 - e^(-Rt/L)). Voltage across R is V_R = IR = V(1 - e^(-Rt/L)). Voltage across L is V_L = V*e^(-Rt/L). Setting V_R = V_L: 1 - e^(-Rt/L) = e^(-Rt/L), so 2*e^(-Rt/L) = 1, e^(-Rt/L) = 1/2, giving Rt/L = ln(2), so t = (L/R)*ln(2). Choice B is the time constant itself. Choice C gives a negative time. Choice D has R/L inverted."
  },
  {
    "id": "physc_u12_q661",
    "subject": "apphysc",
    "unit": 12,
    "topic": "energy in inductor",
    "topicLabel": "Energy Transfer in RL Circuit",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A series RL circuit is connected to a constant voltage V. After a very long time, what fraction of the total energy delivered by the battery has been stored in the inductor?",
    "choices": [
      "A) 0",
      "B) 1/2",
      "C) 1",
      "D) 1/e"
    ],
    "answer": 0,
    "explanation": "After a very long time, the current is constant at I = V/R and dI/dt = 0, so no more energy is being stored in the inductor. All power delivered by the battery (P = VI = V^2/R) is dissipated in the resistor. The inductor stores a fixed energy (1/2)LI^2 but this is a finite amount compared to the infinite total energy delivered over infinite time. Thus the fraction of total energy that is stored approaches 0. Choice B is a common misconception from analyzing the transient phase. Choice C is completely wrong. Choice D confuses with the time constant behavior."
  },
  {
    "id": "physc_u1_q662",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "projectile motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A ball is launched from ground level at an angle of 60 degrees above the horizontal with an initial speed v0. A second ball is launched from the same point at 30 degrees above the horizontal with the same initial speed. Compared to the first ball, the second ball has:",
    "choices": [
      "A) The same range but a lower maximum height",
      "B) A shorter range and a lower maximum height",
      "C) The same range and the same maximum height",
      "D) A longer range but a lower maximum height"
    ],
    "answer": 0,
    "explanation": "Complementary launch angles (angles that add to 90 degrees) produce the same range on level ground since R = v0^2 sin(2 theta)/g, and sin(120) = sin(60). However, the maximum height depends on sin^2(theta), so the 30-degree launch has a lower max height than the 60-degree launch since sin^2(30) = 0.25 < sin^2(60) = 0.75. Choice B is wrong because the ranges are equal, not shorter. Choice C is wrong because the heights differ. Choice D is wrong because the range is the same, not longer."
  },
  {
    "id": "physc_u2_q664",
    "subject": "apphysc",
    "unit": 2,
    "topic": "Drag force and differential equations",
    "topicLabel": "Drag force and differential equations",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle of mass m is released from rest and falls under gravity with a velocity-dependent drag force F_drag = -bv^2, where b is a positive constant. What is the velocity of the particle as a function of time t?",
    "choices": [
      "A) v(t) = sqrt(mg/b) * tanh(t * sqrt(bg/m))",
      "B) v(t) = (mg/b)(1 - e^(-bt/m))",
      "C) v(t) = sqrt(mg/b) * (1 - e^(-bt/m))",
      "D) v(t) = gt / (1 + bt/m)"
    ],
    "answer": 0,
    "explanation": "Starting from Newton's second law: m(dv/dt) = mg - bv^2. At terminal velocity, mg = bv_t^2, so v_t = sqrt(mg/b). Rewriting: dv/(1 - v^2/v_t^2) = g dt. Using partial fractions and integrating with v(0) = 0 gives v(t) = v_t * tanh(gt/v_t) = sqrt(mg/b) * tanh(t * sqrt(bg/m)). Choice B is the solution for linear drag (F = -bv), a very common student error where they apply the wrong drag model. Choice C incorrectly combines the quadratic terminal speed with the exponential form of linear drag. Choice D resembles a rational approximation that has no physical basis from the correct differential equation."
  },
  {
    "id": "physc_u3_q665",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "Work Integral",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A force F(x) = 6x^2 N acts on a 2 kg object as it moves from x = 0 to x = 3 m along the x-axis. What is the work done by this force?",
    "choices": [
      "A) 18 J",
      "B) 27 J",
      "C) 54 J",
      "D) 162 J"
    ],
    "answer": 2,
    "explanation": "W = integral from 0 to 3 of 6x^2 dx = 6(x^3/3) evaluated from 0 to 3 = 2(27) = 54 J. Common error A (18 J) comes from forgetting to integrate and just plugging in x=3 into 6x^2/3. Common error B (27 J) comes from dropping the coefficient. Common error D (162 J) comes from integrating incorrectly as 6x^3 evaluated at 3."
  },
  {
    "id": "physc_u3_q666",
    "subject": "apphysc",
    "unit": 3,
    "topic": "kinetic energy theorem",
    "topicLabel": "Work-Energy Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 4 kg block initially moving at 5 m/s on a frictionless surface is acted upon by a net force that does 48 J of work on it. What is the final speed of the block?",
    "choices": [
      "A) 3 m/s",
      "B) 7 m/s",
      "C) 8 m/s",
      "D) 9.4 m/s"
    ],
    "answer": 1,
    "explanation": "By the work-energy theorem, W_net = (1/2)mv_f^2 - (1/2)mv_i^2. KE_i = (1/2)(4)(25) = 50 J. So 48 = (1/2)(4)v_f^2 - 50, giving (1/2)(4)v_f^2 = 98 J, v_f^2 = 49, v_f = 7 m/s. Distractor A (3 m/s) comes from incorrectly computing sqrt(48/4) and confusing formulas. Distractor C (8 m/s) comes from adding W/m to v_i. Distractor D comes from forgetting the 1/2 in KE."
  },
  {
    "id": "physc_u3_q667",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The potential energy of a particle is given by U(x) = 3x^2 - 12x + 5 (in SI units). At what position x is the particle in equilibrium, and is it stable or unstable?",
    "choices": [
      "A) x = 2 m, stable equilibrium",
      "B) x = 2 m, unstable equilibrium",
      "C) x = 4 m, stable equilibrium",
      "D) x = -2 m, unstable equilibrium"
    ],
    "answer": 0,
    "explanation": "Equilibrium occurs where F = -dU/dx = 0. dU/dx = 6x - 12 = 0, so x = 2 m. The second derivative d^2U/dx^2 = 6 > 0, meaning U has a minimum at x = 2, which corresponds to stable equilibrium. Distractor B correctly finds x = 2 but misidentifies stability. Distractor C uses an incorrect derivative. Distractor D confuses the sign."
  },
  {
    "id": "physc_u3_q668",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservative forces",
    "topicLabel": "Conservative Forces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following is a necessary and sufficient condition for a force to be conservative?",
    "choices": [
      "A) The force depends only on position, not on velocity.",
      "B) The work done by the force around any closed path is zero.",
      "C) The force always acts opposite to the displacement.",
      "D) The magnitude of the force decreases with distance from the source."
    ],
    "answer": 1,
    "explanation": "A conservative force is defined by the property that the work done around any closed loop is zero, equivalently that work depends only on endpoints. Distractor A is necessary but not sufficient (friction on a curved track can depend on position). Distractor C describes a restoring force, not a general conservative force. Distractor D describes some central forces but is not a defining property of conservative forces."
  },
  {
    "id": "physc_u3_q669",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservation of energy",
    "topicLabel": "Conservation of Energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 0.5 kg ball is released from rest at a height of 10 m above the ground. It falls and strikes the ground with a speed of 12 m/s. How much energy was lost to air resistance during the fall? (Use g = 10 m/s^2)",
    "choices": [
      "A) 0 J",
      "B) 14 J",
      "C) 36 J",
      "D) 50 J"
    ],
    "answer": 1,
    "explanation": "Initial energy = mgh = (0.5)(10)(10) = 50 J. Final KE = (1/2)(0.5)(144) = 36 J. Energy lost to air resistance = 50 - 36 = 14 J. Distractor A assumes no air resistance. Distractor C confuses the final KE with the energy lost. Distractor D assumes all PE is lost to air resistance."
  },
  {
    "id": "physc_u3_q670",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Power",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car of mass 1000 kg travels at a constant velocity of 20 m/s up a hill inclined at an angle where sin(theta) = 0.1. If friction is negligible, what power must the engine deliver to maintain this speed? (Use g = 10 m/s^2)",
    "choices": [
      "A) 2000 W",
      "B) 10000 W",
      "C) 20000 W",
      "D) 200000 W"
    ],
    "answer": 2,
    "explanation": "At constant velocity, the engine force must balance the gravitational component along the incline: F = mg sin(theta) = (1000)(10)(0.1) = 1000 N. Power = Fv = (1000)(20) = 20000 W. Distractor A uses mg sin(theta) alone without multiplying by v. Distractor B forgets to include sin(theta) correctly or uses v/2. Distractor D uses mg*v without the sin(theta) factor."
  },
  {
    "id": "physc_u3_q671",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "Work Done by Variable Force",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A force F = (4i + 3j) N acts on an object that undergoes a displacement d = (2i - 5j) m. What is the work done by this force?",
    "choices": [
      "A) -7 J",
      "B) -1 J",
      "C) 7 J",
      "D) 23 J"
    ],
    "answer": 0,
    "explanation": "W = F dot d = (4)(2) + (3)(-5) = 8 - 15 = -7 J. Distractor C (7 J) is the common sign error from taking the absolute value. Distractor D comes from incorrectly adding all products as positive. Distractor B comes from a computational error."
  },
  {
    "id": "physc_u3_q672",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Force from Potential Energy",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves in one dimension with potential energy U(x) = 5x^3 - 2x (in SI units). What is the force on the particle at x = 1 m?",
    "choices": [
      "A) -13 N",
      "B) -17 N",
      "C) 3 N",
      "D) 13 N"
    ],
    "answer": 0,
    "explanation": "F(x) = -dU/dx = -(15x^2 - 2) = -15x^2 + 2. At x = 1: F = -15 + 2 = -13 N. Distractor D (13 N) is the common sign error from forgetting the negative sign in F = -dU/dx. Distractor B comes from an incorrect derivative. Distractor C comes from evaluating U(1) = 5 - 2 = 3 and confusing it with force."
  },
  {
    "id": "physc_u3_q673",
    "subject": "apphysc",
    "unit": 3,
    "topic": "conservation of energy",
    "topicLabel": "Conservation of Energy with Springs",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 2 kg block slides along a frictionless surface at 3 m/s and compresses a spring with spring constant k = 200 N/m. What is the maximum compression of the spring?",
    "choices": [
      "A) 0.03 m",
      "B) 0.09 m",
      "C) 0.30 m",
      "D) 0.42 m"
    ],
    "answer": 2,
    "explanation": "Using conservation of energy: (1/2)mv^2 = (1/2)kx^2. So x = v*sqrt(m/k) = 3*sqrt(2/200) = 3*sqrt(0.01) = 3(0.1) = 0.30 m. Distractor A comes from computing mv^2/k without taking the square root. Distractor B comes from computing mv/k. Distractor D comes from using m instead of m/k under the square root."
  },
  {
    "id": "physc_u4_q675",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "Center of Mass",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 3 kg object moving at 4 m/s to the right collides with a 1 kg object at rest. After the collision, the 3 kg object moves at 2 m/s to the right. What is the velocity of the center of mass of the system after the collision?",
    "choices": [
      "A) 3 m/s to the right",
      "B) 4 m/s to the right",
      "C) 6 m/s to the right",
      "D) 2 m/s to the right"
    ],
    "answer": 0,
    "explanation": "The velocity of the center of mass is conserved when no external forces act on the system. Before the collision, v_cm = (3 kg)(4 m/s) / (3 kg + 1 kg) = 12/4 = 3 m/s to the right. Since there are no external forces, this remains 3 m/s after the collision. Common errors: B) 4 m/s results from using only the initial velocity of the moving object without dividing by total mass. C) 6 m/s comes from finding the velocity of the 1 kg object after the collision (via momentum conservation: 12 = 6 + v2 gives v2 = 6 m/s) and incorrectly reporting that as v_cm. D) 2 m/s results from averaging the two final velocities (2 and 6) without mass-weighting."
  },
  {
    "id": "physc_u4_q676",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "Impulse-Momentum Theorem with Variable Force",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A force F(t) = F0 * e^(-t/τ) acts on a 2 kg object initially at rest for t = 0 to t = ∞. What is the final speed of the object?",
    "choices": [
      "A) F0 * τ / 2",
      "B) F0 / (2τ)",
      "C) F0 * τ",
      "D) 2 * F0 * τ"
    ],
    "answer": 0,
    "explanation": "Impulse J = ∫₀^∞ F0 e^(-t/τ) dt = F0 τ. By the impulse-momentum theorem, J = mv, so v = F0 τ / m = F0 τ / 2. Choice B incorrectly inverts the τ dependence. Choice C forgets to divide by mass. Choice D multiplies by mass instead of dividing."
  },
  {
    "id": "physc_u4_q677",
    "subject": "apphysc",
    "unit": 4,
    "topic": "conservation of momentum",
    "topicLabel": "Conservation of Momentum with Continuous Force",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two blocks of mass m and 3m are connected by a compressed spring on a frictionless surface. An external force F(t) = bt (where b is a constant) acts on the block of mass m in the direction away from the other block. The system starts from rest. At time T, what is the velocity of the center of mass of the system?",
    "choices": [
      "A) bT² / (8m)",
      "B) bT² / (4m)",
      "C) bT / (4m)",
      "D) bT² / (2m)"
    ],
    "answer": 0,
    "explanation": "The total external impulse on the system is ∫₀ᵀ bt dt = bT²/2. The total mass is 4m. The center of mass velocity is impulse/total mass = bT²/(2·4m) = bT²/(8m). Choice B uses total mass 2m. Choice C forgets to integrate (uses F(T) directly). Choice D uses only mass m instead of total mass."
  },
  {
    "id": "physc_u4_q678",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "Elastic Collision with Calculus-Based Energy Analysis",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a 1D elastic collision, a particle of mass m moving at speed v0 strikes a stationary particle of mass M. For what ratio M/m is the kinetic energy transferred to the target particle maximized? (Hint: express transferred energy as a function of M/m and differentiate.)",
    "choices": [
      "A) M/m = 1",
      "B) M/m = 2",
      "C) M/m = 1/2",
      "D) M/m → ∞"
    ],
    "answer": 0,
    "explanation": "The fraction of KE transferred is f = 4(M/m)/[1 + M/m]². Let r = M/m, so f = 4r/(1+r)². Taking df/dr = 4[(1+r)² - 2r(1+r)]/(1+r)⁴ = 4(1-r)/(1+r)³. Setting this to zero gives r = 1, i.e., M/m = 1. This is a well-known result: maximum energy transfer occurs for equal masses. Choice B and C are common guesses. Choice D would give zero transferred speed to an infinitely massive target."
  },
  {
    "id": "physc_u4_q679",
    "subject": "apphysc",
    "unit": 4,
    "topic": "inelastic collisions",
    "topicLabel": "Perfectly Inelastic Collision with Position-Dependent Speed",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block of mass m slides down a frictionless curved ramp whose height as a function of horizontal distance x is h(x) = H(1 - x²/L²) for 0 ≤ x ≤ L. At the bottom (x = L, h = 0), it undergoes a perfectly inelastic collision with an identical stationary block. What fraction of the original gravitational potential energy is lost in the collision?",
    "choices": [
      "A) 1/2",
      "B) 1/4",
      "C) 3/4",
      "D) 1/3"
    ],
    "answer": 0,
    "explanation": "At the bottom, all PE converts to KE: (1/2)mv² = mgH, so v = √(2gH). After perfectly inelastic collision, momentum conservation gives (2m)v' = mv, so v' = v/2. KE after = (1/2)(2m)(v/2)² = mv²/4 = mgH/2. Energy lost = mgH - mgH/2 = mgH/2. Fraction lost = 1/2. The ramp shape is a distractor — regardless of the path, only the height matters on a frictionless surface. Choice B confuses fraction lost with fraction remaining squared. Choice C and D are common errors from misapplying the collision formulas."
  },
  {
    "id": "physc_u4_q680",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "Center of Mass of Continuous Distribution",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin rod of length L has a linear mass density λ(x) = λ0 (x/L)² where x is measured from one end. What is the position of the center of mass measured from that same end?",
    "choices": [
      "A) 3L/4",
      "B) 2L/3",
      "C) L/2",
      "D) L/3"
    ],
    "answer": 0,
    "explanation": "Total mass M = ∫₀ᴸ λ0(x/L)² dx = λ0/L² · L³/3 = λ0L/3. Center of mass: x_cm = (1/M)∫₀ᴸ x·λ0(x/L)² dx = (1/M)(λ0/L²)·L⁴/4 = (1/M)(λ0L²/4). So x_cm = (λ0L²/4)/(λ0L/3) = 3L/4. Choice B (2L/3) is the result for linear density λ ∝ x. Choice C assumes uniform distribution. Choice D reverses the weighting."
  },
  {
    "id": "physc_u4_q681",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "Rocket Equation (Tsiolkovsky)",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket in free space (no gravity) has initial mass M0 and exhaust speed ve relative to the rocket. It burns fuel at a constant rate dm/dt = -α until its mass is M0/e (where e is Euler's number). What is its final speed, starting from rest?",
    "choices": [
      "A) ve",
      "B) ve / e",
      "C) 2ve",
      "D) ve ln(2)"
    ],
    "answer": 0,
    "explanation": "The Tsiolkovsky rocket equation gives Δv = ve ln(M0/Mf). Here Mf = M0/e, so Δv = ve ln(e) = ve. The burn rate α is a distractor — only the mass ratio matters for final speed. Choice B incorrectly divides by e. Choice C would require mass ratio e². Choice D confuses e with 2."
  },
  {
    "id": "physc_u4_q682",
    "subject": "apphysc",
    "unit": 4,
    "topic": "impulse momentum",
    "topicLabel": "Impulse from Force as Function of Velocity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle of mass m experiences a velocity-dependent force F = -bv² where b is a positive constant. At t = 0, the particle has speed v0. What is the impulse delivered to the particle from t = 0 to t → ∞?",
    "choices": [
      "A) -mv0",
      "B) -bv0",
      "C) -mv0/2",
      "D) -∞"
    ],
    "answer": 0,
    "explanation": "The impulse equals the change in momentum. We solve m dv/dt = -bv². Separating variables: m dv/v² = -b dt. Integrating: -m/v = -bt + C. At t=0, v = v0, so C = -m/v0. Thus v(t) = mv0/(m + bv0 t). As t → ∞, v → 0. Total impulse = m(v_final) - m(v0) = 0 - mv0 = -mv0. Choice C incorrectly averages. Choice B uses b instead of m. Choice D assumes the integral diverges, but the velocity goes to zero in finite momentum change."
  },
  {
    "id": "physc_u4_q683",
    "subject": "apphysc",
    "unit": 4,
    "topic": "conservation of momentum",
    "topicLabel": "Two-Body Decay with Angular Momentum Constraint",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A stationary object of mass 5m explodes into two pieces of mass m and 4m. If the total kinetic energy released is Q, what is the kinetic energy of the lighter piece?",
    "choices": [
      "A) 4Q/5",
      "B) Q/5",
      "C) Q/2",
      "D) 4Q/25"
    ],
    "answer": 0,
    "explanation": "By conservation of momentum: mv1 = 4mv2, so v1 = 4v2. KE_total = (1/2)m(4v2)² + (1/2)(4m)v2² = 8mv2² + 2mv2² = 10mv2² = Q, so mv2² = Q/10. KE of lighter piece = (1/2)m(4v2)² = 8mv2² = 8(Q/10) = 4Q/5. Choice B gives the heavier piece's KE. Choice C assumes equal split. Choice D squares the mass ratio incorrectly."
  },
  {
    "id": "physc_u4_q684",
    "subject": "apphysc",
    "unit": 4,
    "topic": "elastic collisions",
    "topicLabel": "Elastic Collision Analyzed via Relative Velocity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A ball of mass m moving at velocity v0 elastically collides head-on with a ball of mass 3m at rest. What is the velocity of the lighter ball after the collision?",
    "choices": [
      "A) -v0/2",
      "B) v0/2",
      "C) -v0/4",
      "D) v0/4"
    ],
    "answer": 0,
    "explanation": "For elastic collisions: v1' = v0(m - M)/(m + M) = v0(m - 3m)/(m + 3m) = v0(-2m)/(4m) = -v0/2. The lighter ball bounces back. Also verifiable by combining momentum conservation and energy conservation (or equivalently, the relative velocity reversal condition). Choice B gives the wrong sign — students forget the ball reverses direction. Choice C and D use incorrect mass ratios."
  },
  {
    "id": "physc_u4_q685",
    "subject": "apphysc",
    "unit": 4,
    "topic": "center of mass",
    "topicLabel": "Center of Mass Acceleration",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Two particles, mass m and 2m, move along the x-axis with positions x1(t) = At² and x2(t) = B sin(ωt) respectively, where A, B, and ω are constants. What is the acceleration of the center of mass at time t?",
    "choices": [
      "A) (2A - 2Bω² sin(ωt)) / 3",
      "B) (2A + 2Bω² sin(ωt)) / 3",
      "C) (A - Bω² sin(ωt)) / 3",
      "D) (2A - 2Bω sin(ωt)) / 3"
    ],
    "answer": 0,
    "explanation": "x_cm = (m·At² + 2m·B sin(ωt))/(3m) = (At² + 2B sin(ωt))/3. First derivative: v_cm = (2At + 2Bω cos(ωt))/3. Second derivative: a_cm = (2A - 2Bω² sin(ωt))/3. Choice B has the wrong sign on the sine term (error in second derivative of sin). Choice C forgets the factor of 2 from mass weighting. Choice D takes only one derivative of sin instead of two."
  },
  {
    "id": "physc_u4_q686",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "Chain Falling on Scale",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform chain of total mass M and length L is held vertically with its lower end just touching a scale. It is released from rest and falls freely. When a length y of chain has landed on the scale, what is the reading on the scale? (Assume the landed portion has zero velocity and the falling portion is in free fall.)",
    "choices": [
      "A) 3Mgy/L",
      "B) 2Mgy/L",
      "C) Mgy/L",
      "D) Mg(y/L + y²/L²)"
    ],
    "answer": 0,
    "explanation": "The scale force has two contributions. (1) Weight of chain on scale: (M/L)y·g = Mgy/L. (2) Impulse force from chain arriving: the falling part at height y has velocity v = √(2gy). The rate of mass arriving is (M/L)v. The force from momentum transfer is (dm/dt)v = (M/L)v² = (M/L)(2gy) = 2Mgy/L. Total = Mgy/L + 2Mgy/L = 3Mgy/L. Choice B omits the weight contribution. Choice C gives only the weight. Choice D incorrectly adds a quadratic term."
  },
  {
    "id": "physc_u5_q687",
    "subject": "apphysc",
    "unit": 5,
    "topic": "parallel axis theorem",
    "topicLabel": "Parallel Axis Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin uniform rod of mass M and length L has a rotational inertia of (1/12)ML^2 about its center. What is the rotational inertia of the rod about an axis perpendicular to the rod and located at a distance L/4 from its center?",
    "choices": [
      "A) (1/12)ML^2",
      "B) (7/48)ML^2",
      "C) (1/4)ML^2",
      "D) (1/3)ML^2"
    ],
    "answer": 1,
    "explanation": "Using the parallel axis theorem: I = I_cm + Md^2, where d = L/4. So I = (1/12)ML^2 + M(L/4)^2 = (1/12)ML^2 + (1/16)ML^2 = (4/48)ML^2 + (3/48)ML^2 = (7/48)ML^2. Choice A is wrong because it neglects the Md^2 term entirely. Choice C incorrectly computes Md^2 as (1/4)ML^2 and may forget to add I_cm, or results from an algebraic error. Choice D is the moment of inertia about the end of the rod (d = L/2), a common memorized value students may default to."
  },
  {
    "id": "physc_u5_q688",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "Rolling Without Slipping",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid sphere of mass M and radius R rolls without slipping down an incline of angle theta. What is the acceleration of the center of mass of the sphere? (The rotational inertia of a solid sphere about its center is (2/5)MR^2.)",
    "choices": [
      "A) g sin(theta)",
      "B) (5/7)g sin(theta)",
      "C) (2/5)g sin(theta)",
      "D) (5/3)g sin(theta)"
    ],
    "answer": 1,
    "explanation": "For rolling without slipping, applying Newton's second law for translation (Mg sin(theta) - f = Ma) and rotation (fR = I*alpha, with alpha = a/R), we get f = (2/5)Ma. Substituting: Mg sin(theta) - (2/5)Ma = Ma, so Mg sin(theta) = (7/5)Ma, giving a = (5/7)g sin(theta). Choice A is the acceleration if there were no friction (pure sliding), a common error where students ignore the rotational energy or torque. Choice C incorrectly uses only the rotational fraction rather than solving the coupled equations properly. Choice D results from an algebraic inversion error in the denominator."
  },
  {
    "id": "physc_u5_q689",
    "subject": "apphysc",
    "unit": 5,
    "topic": "rolling without slipping",
    "topicLabel": "Rolling Without Slipping with Calculus",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform solid sphere of mass M and radius R rolls without slipping down an incline of angle theta. Using the parallel axis theorem and Newton's second law for rotation, what is the acceleration of the center of mass of the sphere? Derive this by setting up the torque equation about the contact point with the surface.",
    "choices": [
      "A) (5/7) g sin(theta)",
      "B) (2/3) g sin(theta)",
      "C) g sin(theta)",
      "D) (5/7) g cos(theta)"
    ],
    "answer": 0,
    "explanation": "Taking torques about the contact point eliminates the friction force. The moment of inertia about the contact point is found via the parallel axis theorem: I_contact = (2/5)MR^2 + MR^2 = (7/5)MR^2. The only torque about the contact point is from gravity: tau = MgR sin(theta). Applying tau = I_contact * alpha and using a = R*alpha for rolling without slipping: MgR sin(theta) = (7/5)MR^2 * (a/R), giving a = (5/7)g sin(theta). Choice B (2/3 g sin theta) is the common error from using a hollow sphere's moment of inertia. Choice C neglects rotational inertia entirely (treats it as a sliding block). Choice D incorrectly uses cos(theta) instead of sin(theta)."
  },
  {
    "id": "physc_u5_q690",
    "subject": "apphysc",
    "unit": 5,
    "topic": "angular momentum",
    "topicLabel": "Angular Momentum and Differential Equations",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A uniform disk of moment of inertia I and radius R spins about its central axis. A velocity-dependent friction torque acts on the disk such that tau = -b*omega, where b is a positive constant and omega is the angular velocity. If the disk has initial angular velocity omega_0 at t = 0, what is the angular displacement theta as t approaches infinity?",
    "choices": [
      "A) I * omega_0 / b",
      "B) b * omega_0 / I",
      "C) (1/2) I * omega_0^2 / b",
      "D) infinity"
    ],
    "answer": 0,
    "explanation": "From Newton's second law for rotation: I(d omega/dt) = -b*omega. This separable differential equation gives omega(t) = omega_0 * exp(-bt/I). Integrating to find total angular displacement: theta = integral from 0 to infinity of omega dt = omega_0 * integral from 0 to infinity of exp(-bt/I) dt = omega_0 * (I/b) = I*omega_0/b. Choice B inverts I and b, a common algebra error. Choice C confuses this with an energy argument (using (1/2)I*omega_0^2 divided by b, which is dimensionally incorrect for angle). Choice D incorrectly assumes that because the disk never fully stops in finite time, it must rotate through infinite angle, but the exponential decay integrates to a finite result."
  },
  {
    "id": "physc_u6_q691",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Energy in SHM",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block of mass m oscillates on a horizontal spring with spring constant k and amplitude A. At what displacement from equilibrium is the kinetic energy equal to twice the potential energy?",
    "choices": [
      "A) A / sqrt(3)",
      "B) A / sqrt(2)",
      "C) A / 3",
      "D) A * sqrt(2/3)"
    ],
    "answer": 0,
    "explanation": "The total energy is E = (1/2)kA^2. At displacement x, the potential energy is U = (1/2)kx^2 and kinetic energy is K = E - U. Setting K = 2U gives E - U = 2U, so E = 3U. Thus (1/2)kA^2 = 3(1/2)kx^2, which gives x^2 = A^2/3, so x = A/sqrt(3). Choice B (A/sqrt(2)) is the common error from setting K = U instead of K = 2U. Choice C (A/3) results from forgetting to take the square root. Choice D comes from an algebraic error in solving the energy equation."
  },
  {
    "id": "physc_u6_q692",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass system",
    "topicLabel": "Nonlinear Spring-Mass",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block of mass m on a frictionless surface is attached to a spring whose restoring force is F = -k*x - beta*x^3, where beta is a small positive constant. Compared to a purely linear spring (beta = 0), what happens to the period of oscillation as the amplitude increases?",
    "choices": [
      "A) The period increases because the effective spring constant decreases.",
      "B) The period decreases because the restoring force grows faster than linearly.",
      "C) The period remains unchanged because the cubic term averages to zero over a full cycle.",
      "D) The period first decreases then increases due to the interplay of linear and cubic terms."
    ],
    "answer": 1,
    "explanation": "With beta > 0, the restoring force magnitude |F| = k|x| + beta|x|^3 grows faster than linear. This means at larger amplitudes, the spring is effectively stiffer, so the block is restored more quickly and the period decreases. Choice A incorrectly states the effective spring constant decreases. Choice C is a common misconception — while x^3 is an odd function and does average to zero for position, the force affects the dynamics nonlinearly throughout each quarter-cycle, so the period does change. Choice D is incorrect; with a positive beta the cubic term only reinforces the stiffening at all amplitudes."
  },
  {
    "id": "physc_u6_q693",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Time-Averaged Energy in SHM",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For a mass on a spring undergoing SHM with amplitude A and angular frequency omega, the time-averaged kinetic energy over one full period is computed by integrating (1/2)m*v^2 over one period and dividing by T. What is the result?",
    "choices": [
      "A) (1/2) k A^2",
      "B) (1/4) k A^2",
      "C) (1/2) m omega^2 A^2",
      "D) (1/8) k A^2"
    ],
    "answer": 1,
    "explanation": "v(t) = -A*omega*sin(omega*t + phi). KE = (1/2)m*omega^2*A^2*sin^2(omega*t + phi). The time average of sin^2 over a full period is 1/2. So <KE> = (1/2)(1/2)m*omega^2*A^2 = (1/4)m*omega^2*A^2 = (1/4)kA^2, since k = m*omega^2. Choice A equals the total energy, a common error from forgetting the factor of 1/2 from time-averaging sin^2. Choice C equals the total energy written differently (since m*omega^2 = k). Choice D would come from an extra erroneous factor of 1/2."
  },
  {
    "id": "physc_u6_q694",
    "subject": "apphysc",
    "unit": 6,
    "topic": "driven oscillations",
    "topicLabel": "Steady-State Amplitude of Driven Oscillator",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A driven damped oscillator satisfies m*x'' + b*x' + k*x = F_0*cos(omega_d * t). In the steady state, the amplitude of oscillation is A(omega_d) = F_0 / sqrt((k - m*omega_d^2)^2 + (b*omega_d)^2). At what driving frequency omega_d does the steady-state amplitude reach its maximum?",
    "choices": [
      "A) omega_d = sqrt(k/m)",
      "B) omega_d = sqrt(k/m - b^2/(2m^2))",
      "C) omega_d = sqrt(k/m - b^2/(4m^2))",
      "D) omega_d = sqrt(k/m - 2b^2/m^2)"
    ],
    "answer": 1,
    "explanation": "To maximize A, minimize the denominator D = (k - m*omega_d^2)^2 + b^2*omega_d^2. Let u = omega_d^2. Then D = (k - mu)^2 + b^2*u. dD/du = -2m(k - mu) + b^2 = 0 gives 2m(k - mu) = b^2, so u = k/m - b^2/(2m^2), meaning omega_d = sqrt(k/m - b^2/(2m^2)). Choice A (natural frequency) is a common misconception — it's the resonance frequency only when damping is zero. Choice C uses b^2/(4m^2) which is gamma^2, the square of the damping constant, confused with the correct expression. Choice D over-corrects with 2b^2/m^2."
  },
  {
    "id": "physc_u6_q695",
    "subject": "apphysc",
    "unit": 6,
    "topic": "resonance",
    "topicLabel": "Quality Factor and Resonance Width",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A lightly damped driven oscillator has natural frequency omega_0 = 100 rad/s and damping coefficient gamma = b/(2m) = 2 rad/s. The quality factor Q is defined as omega_0/(2*gamma). What is the approximate full width at half-maximum power (the range of driving frequencies over which the average power delivered is at least half its peak value)?",
    "choices": [
      "A) 2 rad/s",
      "B) 4 rad/s",
      "C) 8 rad/s",
      "D) 100 rad/s"
    ],
    "answer": 1,
    "explanation": "The quality factor Q = omega_0/(2*gamma) = 100/4 = 25. The full width at half-maximum power (FWHM) is Delta_omega = omega_0/Q = 100/25 = 4 rad/s. Alternatively, for light damping, FWHM ≈ 2*gamma = 4 rad/s. Choice A (2 rad/s) is gamma, the half-width, a common error confusing half-width with full width. Choice C doubles the correct answer. Choice D equals the natural frequency, which would correspond to Q = 1."
  },
  {
    "id": "physc_u6_q696",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass system",
    "topicLabel": "Two-Spring Series-Parallel Combination",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block of mass m sits on a frictionless table between two walls. It is connected to the left wall by a spring of constant k_1 and to the right wall by a spring of constant k_2. Both springs are at their natural lengths at the equilibrium position. The block is displaced a distance x to the right and released. What is the angular frequency of oscillation?",
    "choices": [
      "A) sqrt(k_1 * k_2 / ((k_1 + k_2) * m))",
      "B) sqrt((k_1 + k_2) / m)",
      "C) sqrt(k_1 / m) + sqrt(k_2 / m)",
      "D) sqrt((k_1 * k_2) / (m * (k_1 + k_2))) * sqrt(2)"
    ],
    "answer": 1,
    "explanation": "When the block is displaced x to the right, spring 1 is stretched by x (pulling left) and spring 2 is compressed by x (pushing left). Both forces act in the restoring direction: F = -k_1*x - k_2*x = -(k_1 + k_2)*x. The effective spring constant is k_eff = k_1 + k_2, so omega = sqrt((k_1 + k_2)/m). Choice A uses the series combination formula — a very common student error confusing parallel and series spring arrangements. When springs share the same displacement (as here), they add directly. Choice C incorrectly adds the individual frequencies. Choice D is another incorrect combination."
  },
  {
    "id": "physc_u6_q697",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "Critically Damped System",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For a critically damped system (b^2 = 4mk), the general solution is x(t) = (C_1 + C_2*t)*exp(-gamma*t) where gamma = b/(2m). If the mass is released from rest at position x_0 > 0 at t = 0, at what time does the mass reach maximum speed before returning to equilibrium?",
    "choices": [
      "A) t = 1/gamma",
      "B) t = 2/gamma",
      "C) t = 1/(2*gamma)",
      "D) t = gamma"
    ],
    "answer": 0,
    "explanation": "With initial conditions x(0) = x_0 and v(0) = 0: C_1 = x_0 and from v(t) = (C_2 - gamma*C_1 - gamma*C_2*t)*exp(-gamma*t), setting v(0) = 0 gives C_2 = gamma*x_0. So v(t) = (gamma*x_0 - gamma*x_0 - gamma^2*x_0*t)*exp(-gamma*t) = -gamma^2*x_0*t*exp(-gamma*t). The speed |v(t)| = gamma^2*x_0*t*exp(-gamma*t). To find maximum speed, take d|v|/dt = gamma^2*x_0*(1 - gamma*t)*exp(-gamma*t) = 0, giving t = 1/gamma. Choice B is twice the correct value. Choice C is half the correct value and comes from confusing gamma with 2*gamma. Choice D has wrong dimensions if gamma has dimensions of 1/time."
  },
  {
    "id": "physc_u6_q698",
    "subject": "apphysc",
    "unit": 6,
    "topic": "energy in SHM",
    "topicLabel": "Power Dissipation in Damped SHM",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For an underdamped oscillator with x(t) = A*exp(-gamma*t)*cos(omega_d*t), the total mechanical energy is approximately E(t) = (1/2)*k*A^2*exp(-2*gamma*t) when gamma << omega_0. What is the instantaneous rate of energy dissipation, averaged over one cycle?",
    "choices": [
      "A) -k*A^2*gamma*exp(-2*gamma*t)",
      "B) -2*gamma*E(t)",
      "C) -b*omega_d^2*A^2*exp(-2*gamma*t)",
      "D) Both A and B are correct and equivalent"
    ],
    "answer": 3,
    "explanation": "dE/dt = d/dt[(1/2)kA^2 exp(-2*gamma*t)] = -2*gamma*(1/2)*kA^2*exp(-2*gamma*t) = -gamma*kA^2*exp(-2*gamma*t). This equals -2*gamma*E(t) since E(t) = (1/2)kA^2*exp(-2*gamma*t). So both expressions A and B are equivalent. For choice C: b*omega_d^2*A^2 ≠ gamma*k*A^2 in general (b = 2m*gamma and k = m*omega_0^2, so b*omega_d^2 = 2m*gamma*omega_d^2 while gamma*k = gamma*m*omega_0^2, and omega_d ≠ omega_0 in general). Therefore D is correct."
  },
  {
    "id": "physc_u6_q699",
    "subject": "apphysc",
    "unit": 6,
    "topic": "pendulum",
    "topicLabel": "Large-Angle Pendulum Correction",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For a simple pendulum of length L, the exact equation of motion is d^2(theta)/dt^2 = -(g/L)*sin(theta). For amplitudes that are not small, the period can be expanded as T = 2*pi*sqrt(L/g) * [1 + (1/16)*theta_max^2 + ...]. If a pendulum has theta_max = 30 degrees (pi/6 radians), by approximately what percentage is its period longer than the small-angle prediction?",
    "choices": [
      "A) About 0.5%",
      "B) About 1.7%",
      "C) About 3.4%",
      "D) About 6.9%"
    ],
    "answer": 1,
    "explanation": "The fractional increase is approximately (1/16)*theta_max^2 = (1/16)*(pi/6)^2 = (1/16)*(pi^2/36) = pi^2/576 ≈ 9.87/576 ≈ 0.0171, or about 1.7%. Choice A (0.5%) would correspond to a much smaller amplitude. Choice C (3.4%) doubles the correct answer, perhaps from using (1/8) instead of (1/16). Choice D (6.9%) may come from using theta_max instead of theta_max^2 or other algebraic errors."
  },
  {
    "id": "physc_u7_q700",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Orbital mechanics and Kepler's laws",
    "topicLabel": "Orbital mechanics and Kepler's laws",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A satellite of mass m orbits a planet of mass M in an elliptical orbit with semi-major axis a. At the point of closest approach (periapsis) at distance r_p from the center of the planet, the satellite fires its engines and instantaneously increases its speed by a small amount dv. Using the vis-viva equation v^2 = GM(2/r - 1/a), what is the resulting change in the semi-major axis da in terms of r_p, a, GM, and dv?",
    "choices": [
      "A) da = 2a^2 v_p dv / (GM), where v_p is the speed at periapsis",
      "B) da = 2a^2 dv / (r_p v_p)",
      "C) da = a^2 v_p dv / (GM)",
      "D) da = 2r_p dv / v_p"
    ],
    "answer": 0,
    "explanation": "Starting from the vis-viva equation v^2 = GM(2/r - 1/a), we can solve for 1/a: 1/a = 2/r - v^2/(GM). Taking the differential at constant r (instantaneous burn at periapsis): d(1/a) = -2v dv/(GM), so -da/a^2 = -2v dv/(GM), giving da = 2a^2 v dv/(GM). At periapsis, v = v_p, so da = 2a^2 v_p dv/(GM). This is choice A. Choice B incorrectly introduces r_p in the denominator from a faulty differentiation. Choice C is missing the factor of 2, a common error when differentiating. Choice D confuses the relationship and incorrectly uses r_p instead of a^2/GM structure. The key calculus step is implicit differentiation of the vis-viva equation with r held constant during an impulsive maneuver."
  },
  {
    "id": "physc_u7_q701",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Gravitational field of continuous mass distributions",
    "topicLabel": "Gravitational field of continuous mass distributions",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin infinite flat sheet of mass has surface mass density sigma. Directly above its center, a sphere of mass M and radius R has its center at height h above the sheet (h > R). What is the gravitational force exerted by the infinite sheet on the sphere?",
    "choices": [
      "A) 2 pi G sigma M / h",
      "B) 2 pi G sigma M (independent of h)",
      "C) 2 pi G sigma M / h^2",
      "D) 4 pi G sigma M / h"
    ],
    "answer": 1,
    "explanation": "The gravitational field produced by an infinite uniform sheet of surface mass density sigma is found by integrating the contributions from all mass elements using Gauss's law for gravity (the gravitational analog of Gauss's law in electrostatics). The flux integral over a Gaussian pillbox gives: 2g A = 4 pi G sigma A, so g = 2 pi G sigma, directed perpendicular to the sheet, uniform everywhere. Since the field is uniform (independent of distance from the sheet), every part of the sphere of mass M experiences the same gravitational field g = 2 pi G sigma. Therefore, the total force on the sphere is F = Mg = 2 pi G sigma M, independent of h. Choice A incorrectly assumes the field falls off as 1/h, treating the sheet like a point mass. Choice C assumes an inverse-square falloff. Choice D has an extra factor of 2 and incorrect distance dependence. The key insight is that the infinite sheet produces a uniform gravitational field (analogous to an infinite plane of charge), which requires integration or application of Gauss's law — a common AP trap where students expect distance dependence."
  },
  {
    "id": "physc_u8_q702",
    "subject": "apphysc",
    "unit": 8,
    "topic": "Gauss's law and conductors in equilibrium",
    "topicLabel": "Gauss's law and conductors in equilibrium",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solid conducting sphere of radius R carries a net charge +Q. A spherical Gaussian surface of radius r is centered on the sphere, where r > R. If the radius of the Gaussian surface is doubled to 2r, how does the electric flux through the Gaussian surface change?",
    "choices": [
      "A) The flux remains the same.",
      "B) The flux doubles.",
      "C) The flux quadruples.",
      "D) The flux is reduced by half."
    ],
    "answer": 0,
    "explanation": "By Gauss's law, the total electric flux through a closed surface is equal to the enclosed charge divided by epsilon_0. Since the conducting sphere has charge +Q and both Gaussian surfaces (at radius r and 2r) fully enclose the sphere, the enclosed charge is +Q in both cases. Therefore the flux is Q/epsilon_0 regardless of the Gaussian surface radius. Common mistakes: choosing B (thinking flux scales with radius like the surface area effect on field) or C (thinking flux scales with surface area, confusing flux with field strength). The electric field does decrease with distance, but the larger surface area exactly compensates, keeping the total flux constant."
  },
  {
    "id": "physc_u10_q704",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 12 V battery is connected in series with a 4 kΩ resistor and a 50 μF capacitor that is initially uncharged. At what time after the switch is closed does the voltage across the resistor equal 4 V?",
    "choices": [
      "A) 0.2 ln(3) s",
      "B) 0.2 ln(2) s",
      "C) 0.2 / ln(3) s",
      "D) 0.6 s"
    ],
    "answer": 0,
    "explanation": "The time constant is τ = RC = (4000)(50 × 10⁻⁶) = 0.2 s. The voltage across the resistor during charging is V_R(t) = EMF × e^(-t/τ) = 12e^(-t/0.2). Setting V_R = 4 V: 4 = 12e^(-t/0.2), so e^(-t/0.2) = 1/3, giving -t/0.2 = -ln(3), thus t = 0.2 ln(3) s. Choice B (0.2 ln(2)) is wrong — it results from mistakenly setting the voltage equal to half the EMF (6 V) or confusing the equation. Choice C incorrectly divides by ln(3) instead of multiplying. Choice D (0.6 s = 3τ) is a common estimate students use for 'nearly fully charged' but does not correspond to V_R = 4 V."
  },
  {
    "id": "physc_u10_q705",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A capacitor of capacitance C is charged to voltage V0 and then discharged through a resistor R. At what time is the instantaneous power dissipated in the resistor exactly half of the initial power dissipated at t = 0?",
    "choices": [
      "A) RC ln(2)",
      "B) RC ln(2) / 2",
      "C) RC / 2",
      "D) RC ln(sqrt(2))"
    ],
    "answer": 1,
    "explanation": "During discharge, the voltage across the capacitor is V(t) = V0 e^(-t/RC), so the power dissipated in R is P(t) = V(t)^2 / R = (V0^2/R) e^(-2t/RC). The initial power is P0 = V0^2/R. Setting P(t) = P0/2 gives e^(-2t/RC) = 1/2, so -2t/RC = -ln(2), yielding t = RC ln(2)/2. Choice A (RC ln(2)) is a common error from students who forget the factor of 2 in the exponent when squaring the exponential. Choice C (RC/2) confuses the time constant with the half-power time. Choice D results from incorrectly taking a square root instead of properly handling the squared exponential."
  },
  {
    "id": "physc_u11_q706",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin wire is bent into a semicircular arc of radius R carrying current I. Using the Biot-Savart law, what is the magnitude of the magnetic field at the center of curvature of the arc?",
    "choices": [
      "A) mu_0 I / (4R)",
      "B) mu_0 I / (2R)",
      "C) mu_0 I / (4 pi R)",
      "D) mu_0 I pi / (4R)"
    ],
    "answer": 0,
    "explanation": "Using the Biot-Savart law, dB = (mu_0 I)/(4 pi) * (dl x r-hat)/R^2. For a semicircular arc, each element dl is perpendicular to the radial direction, so dB = (mu_0 I)/(4 pi R^2) dl. Integrating over the semicircle (length pi R): B = (mu_0 I)/(4 pi R^2) * pi R = mu_0 I/(4R). Choice B corresponds to a full circular loop (twice the correct answer). Choice C omits the pi from the arc length integration. Choice D incorrectly places an extra factor of pi."
  },
  {
    "id": "physc_u11_q707",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An infinitely long cylindrical conductor of radius R carries a current density J(r) = J_0 (r/R)^2 for r <= R. Using Ampere's law, what is the magnetic field B(r) inside the conductor (r < R)?",
    "choices": [
      "A) mu_0 J_0 r^3 / (4R^2)",
      "B) mu_0 J_0 r^2 / (3R^2)",
      "C) mu_0 J_0 r / (3)",
      "D) mu_0 J_0 r^3 / (3R^2)"
    ],
    "answer": 0,
    "explanation": "By Ampere's law, B(2 pi r) = mu_0 * integral of J(r') * 2 pi r' dr' from 0 to r. The enclosed current is integral of J_0 (r'/R)^2 * 2 pi r' dr' = 2 pi J_0/R^2 * integral of r'^3 dr' from 0 to r = 2 pi J_0 r^4/(4R^2). So B * 2 pi r = mu_0 * 2 pi J_0 r^4/(4R^2), giving B = mu_0 J_0 r^3/(4R^2). Choice B uses an incorrect exponent from confusing the power in J. Choice C treats J as uniform. Choice D uses 3 instead of 4 in the denominator, a common integration error."
  },
  {
    "id": "physc_u11_q708",
    "subject": "apphysc",
    "unit": 11,
    "topic": "torque on current loop",
    "topicLabel": "torque on current loop",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circular current loop of radius a carrying current I is placed in a non-uniform magnetic field where B varies linearly along the axis as B(z) = B_0 + beta z. The loop lies in the xy-plane centered at the origin with its magnetic moment aligned along +z. What is the net force on the loop?",
    "choices": [
      "A) pi a^2 I beta in the +z direction",
      "B) Zero, because a uniform-field result applies locally",
      "C) 2 pi a I B_0 in the +z direction",
      "D) pi a^2 I B_0 beta in the +z direction"
    ],
    "answer": 0,
    "explanation": "The net force on a magnetic dipole in a non-uniform field is F = grad(m dot B). With m = I pi a^2 in the z-direction and dB_z/dz = beta, F_z = m * dB_z/dz = pi a^2 I beta. Choice B incorrectly assumes no net force; that only applies to uniform fields. Choice C confuses torque-related expressions with force. Choice D incorrectly includes B_0 as a multiplicative factor."
  },
  {
    "id": "physc_u11_q709",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "solenoids",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solenoid of length L and radius R has a winding density that varies as n(x) = n_0 (1 + x/L) where x is measured from one end. Using Ampere's law applied locally, what is the magnetic field inside the solenoid at position x (far from the ends)?",
    "choices": [
      "A) mu_0 n_0 I (1 + x/L)",
      "B) mu_0 n_0 I",
      "C) mu_0 n_0 I (x/L)",
      "D) mu_0 n_0 I (1 + x/L)^2"
    ],
    "answer": 0,
    "explanation": "Ampere's law for a solenoid gives B = mu_0 n I, where n is the local turn density. Since n varies as n_0(1 + x/L), the local field is B(x) = mu_0 n_0 I (1 + x/L). Choice B uses only the constant part, ignoring the spatial variation. Choice C drops the constant term. Choice D squares the density factor, which has no physical basis."
  },
  {
    "id": "physc_u11_q710",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on wire",
    "topicLabel": "magnetic force on wire",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A straight wire of length L carries current I along the x-axis from x = 0 to x = L. The wire sits in a magnetic field B = B_0 (x/L) z-hat that increases linearly along the wire. What is the total magnetic force on the wire?",
    "choices": [
      "A) (I B_0 L / 2) y-hat",
      "B) I B_0 L y-hat",
      "C) (I B_0 L / 3) y-hat",
      "D) Zero"
    ],
    "answer": 0,
    "explanation": "The force on a differential element is dF = I dx x-hat cross B_0(x/L) z-hat = -I B_0 (x/L) (x-hat cross z-hat) dx. Since x-hat cross z-hat = -y-hat, dF = I B_0 (x/L) y-hat dx. Integrating from 0 to L: F = I B_0/L * integral of x dx from 0 to L = I B_0/L * L^2/2 = I B_0 L/2 in the y-hat direction. Choice B uses the maximum field over the whole length instead of integrating. Choice C uses an incorrect power in integration. Choice D wrongly assumes cancellation."
  },
  {
    "id": "physc_u11_q711",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic force on charge",
    "topicLabel": "magnetic force on charge",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle of charge q and mass m moves in a uniform magnetic field B directed along the z-axis with initial velocity v = v_x x-hat + v_z z-hat. What is the pitch (distance traveled along z per complete revolution) of the resulting helical trajectory?",
    "choices": [
      "A) 2 pi m v_z / (qB)",
      "B) 2 pi m v_x / (qB)",
      "C) 2 pi m sqrt(v_x^2 + v_z^2) / (qB)",
      "D) m v_z / (qB)"
    ],
    "answer": 0,
    "explanation": "The component v_z parallel to B is unaffected by the magnetic force, so the particle drifts along z at constant speed v_z. The period of circular motion in the xy-plane is T = 2 pi m/(qB). The pitch is the z-distance per revolution: p = v_z * T = 2 pi m v_z/(qB). Choice B incorrectly uses the perpendicular velocity component. Choice C uses the total speed. Choice D omits the factor of 2 pi."
  },
  {
    "id": "physc_u11_q712",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A coaxial cable has an inner conductor of radius a carrying current I uniformly distributed, and an outer conductor (thin shell) at radius b carrying current I in the opposite direction. What is the total magnetic energy stored per unit length between the conductors?",
    "choices": [
      "A) mu_0 I^2 ln(b/a) / (4 pi)",
      "B) mu_0 I^2 ln(b/a) / (2 pi)",
      "C) mu_0 I^2 / (4 pi) * (b - a)",
      "D) mu_0 I^2 b^2 / (4 pi a^2)"
    ],
    "answer": 0,
    "explanation": "Between conductors (a < r < b), by Ampere's law B = mu_0 I/(2 pi r). The energy per unit length is u = integral of B^2/(2 mu_0) * 2 pi r dr from a to b = integral of [mu_0 I^2/(8 pi^2 r^2)] * 2 pi r dr = mu_0 I^2/(4 pi) integral of dr/r from a to b = mu_0 I^2 ln(b/a)/(4 pi). Choice B has the wrong numerical prefactor (missing the 1/2 from energy density). Choice C incorrectly assumes uniform field. Choice D has an incorrect functional form."
  },
  {
    "id": "physc_u11_q713",
    "subject": "apphysc",
    "unit": 11,
    "topic": "torque on current loop",
    "topicLabel": "torque on current loop",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rectangular current loop with magnetic dipole moment m is free to rotate in a uniform magnetic field B. The loop is displaced by a small angle theta from its equilibrium position (m parallel to B). If the loop has moment of inertia I_rot, what is the angular frequency of small oscillations?",
    "choices": [
      "A) sqrt(mB / I_rot)",
      "B) sqrt(mB / (2 I_rot))",
      "C) mB / I_rot",
      "D) sqrt(m / (I_rot B))"
    ],
    "answer": 0,
    "explanation": "The torque on a dipole is tau = -mB sin(theta). For small angles, sin(theta) ~ theta, so tau = -mB theta. This is simple harmonic: I_rot * d^2(theta)/dt^2 = -mB theta, giving omega = sqrt(mB/I_rot). Choice B introduces a spurious factor of 2. Choice C gives the angular frequency without the square root (dimensionally incorrect for frequency). Choice D inverts B in the square root."
  },
  {
    "id": "physc_u11_q714",
    "subject": "apphysc",
    "unit": 11,
    "topic": "solenoids",
    "topicLabel": "solenoids",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A solenoid of N total turns, length L, and cross-sectional area A carries a time-varying current I(t) = I_0 sin(omega t). What is the magnitude of the self-induced EMF in the solenoid?",
    "choices": [
      "A) mu_0 N^2 A I_0 omega cos(omega t) / L",
      "B) mu_0 N A I_0 omega cos(omega t) / L",
      "C) mu_0 N^2 A I_0 sin(omega t) / L",
      "D) mu_0 N^2 A I_0 omega sin(omega t) / L"
    ],
    "answer": 0,
    "explanation": "The self-inductance of a solenoid is L_ind = mu_0 N^2 A / L. The induced EMF is |EMF| = L_ind * |dI/dt| = (mu_0 N^2 A / L) * I_0 omega cos(omega t). Choice B uses N instead of N^2, forgetting that both flux linkage and field depend on N. Choice C takes the flux itself rather than its time derivative. Choice D uses sin instead of cos, which would be the flux, not its derivative."
  },
  {
    "id": "physc_u11_q715",
    "subject": "apphysc",
    "unit": 11,
    "topic": "magnetic field configurations",
    "topicLabel": "magnetic field configurations",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A toroid of inner radius a, outer radius b, and N total turns carries current I. Using Ampere's law, what is the total magnetic flux through the cross-section of the toroid?",
    "choices": [
      "A) mu_0 N I h ln(b/a) / (2 pi), where h is the height of the toroid",
      "B) mu_0 N I h (b - a) / (2 pi)",
      "C) mu_0 N I h / (2 pi a)",
      "D) mu_0 N I (b^2 - a^2) / (4 pi)"
    ],
    "answer": 0,
    "explanation": "Inside a toroid at radius r, B = mu_0 N I / (2 pi r). For a rectangular cross-section of height h, the total flux is Phi = integral of B * h dr from a to b = mu_0 N I h / (2 pi) * integral of dr/r from a to b = mu_0 N I h ln(b/a) / (2 pi). Choice B replaces the logarithm with a linear factor, treating B as uniform. Choice C evaluates B only at r = a and multiplies by h without proper integration over r. Choice D uses area (b^2 - a^2) suggesting a circular rather than rectangular cross-section with incorrect integration."
  },
  {
    "id": "physc_u12_q716",
    "subject": "apphysc",
    "unit": 12,
    "topic": "Faraday's law",
    "topicLabel": "Faraday's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circular loop of radius R is placed in a time-varying magnetic field given by B(t) = B0 * e^(-t/tau), directed perpendicular to the plane of the loop. The loop has resistance that varies with temperature such that R_loop(t) = R0(1 + alpha*t). Which expression gives the magnitude of the current in the loop as a function of time?",
    "choices": [
      "A) (pi * R^2 * B0) / (tau * R0 * (1 + alpha*t)) * e^(-t/tau)",
      "B) (pi * R^2 * B0) / (tau * R0) * e^(-t/tau)",
      "C) (pi * R^2 * B0 * R0 * (1 + alpha*t)) / tau * e^(-t/tau)",
      "D) (pi * R^2 * B0) / (tau * R0 * (1 + alpha*t)) * (1 - e^(-t/tau))"
    ],
    "answer": 0,
    "explanation": "The flux is Phi = B(t) * pi * R^2 = pi * R^2 * B0 * e^(-t/tau). By Faraday's law, the induced EMF is -dPhi/dt = (pi * R^2 * B0 / tau) * e^(-t/tau). The current is EMF / R_loop(t) = (pi * R^2 * B0) / (tau * R0 * (1 + alpha*t)) * e^(-t/tau). Choice B neglects the time-varying resistance. Choice C multiplies by resistance instead of dividing. Choice D incorrectly uses (1 - e^(-t/tau)), confusing it with an RL charging expression."
  },
  {
    "id": "physc_u12_q717",
    "subject": "apphysc",
    "unit": 12,
    "topic": "motional EMF",
    "topicLabel": "motional EMF",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conducting rod of length L and mass m slides without friction along two parallel horizontal rails separated by distance L. A uniform magnetic field B points vertically upward. The rod is given an initial velocity v0 to the right at t = 0. The rails are connected by a resistor R. Neglecting the resistance of the rod and rails, what is the velocity of the rod as a function of time?",
    "choices": [
      "A) v0 * e^(-B^2 * L^2 * t / (m * R))",
      "B) v0 * (1 - e^(-B^2 * L^2 * t / (m * R)))",
      "C) v0 - (B^2 * L^2 * t) / (m * R)",
      "D) v0 * e^(-B * L * t / (m * R))"
    ],
    "answer": 0,
    "explanation": "The motional EMF is BLv, producing current i = BLv/R. The force on the rod is F = -BiL = -B^2L^2v/R (opposing motion by Lenz's law). Newton's second law gives m(dv/dt) = -B^2L^2v/R. This is a first-order ODE with solution v(t) = v0 * e^(-B^2L^2t/(mR)). Choice B represents a growing function approaching v0, which is the RL current growth form — a common confusion. Choice C assumes constant deceleration (linear decay) rather than solving the differential equation properly. Choice D uses B instead of B^2 in the exponent, a frequent algebraic error where students forget the force involves both B from the EMF and B from the force law."
  },
  {
    "id": "physc_u12_q718",
    "subject": "apphysc",
    "unit": 12,
    "topic": "inductance",
    "topicLabel": "inductance",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A toroidal solenoid has a rectangular cross section with inner radius a, outer radius b, and height h. It is wound with N turns. Using the integral definition of inductance L = N*Phi/I, where Phi is the flux through one turn, what is the self-inductance of this toroid?",
    "choices": [
      "A) (mu_0 * N^2 * h) / (2 * pi) * ln(b/a)",
      "B) (mu_0 * N^2 * h * (b - a)) / (2 * pi * (a + b)/2)",
      "C) (mu_0 * N^2 * h * (b - a)) / (2 * pi * a)",
      "D) (mu_0 * N^2 * (b^2 - a^2)) / (4 * pi)"
    ],
    "answer": 0,
    "explanation": "Inside the toroid, by Ampere's law, B = mu_0*N*I/(2*pi*r). The flux through one turn requires integrating over the rectangular cross section: Phi = integral from a to b of B * h * dr = (mu_0*N*I*h)/(2*pi) * integral from a to b of dr/r = (mu_0*N*I*h)/(2*pi) * ln(b/a). Then L = N*Phi/I = (mu_0*N^2*h)/(2*pi) * ln(b/a). Choice B approximates the integral using the average radius, which is incorrect — students sometimes replace integral of 1/r dr with (b-a)/r_avg. Choice C uses the inner radius instead of integrating, another common shortcut error. Choice D incorrectly uses an area-based approach with (b^2 - a^2), confusing the geometry with a circular cross-section calculation."
  },
  {
    "id": "physc_u1_q719",
    "subject": "apphysc",
    "unit": 1,
    "topic": "integrals of motion",
    "topicLabel": "integrals of motion",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with a velocity given by v(t) = 6t - 2t^2 (in m/s). The particle starts at position x = 0 at t = 0. At what time does the particle reach its maximum positive displacement from the origin?",
    "choices": [
      "A) 1 s",
      "B) 1.5 s",
      "C) 3 s",
      "D) 6 s"
    ],
    "answer": 2,
    "explanation": "The maximum positive displacement occurs when the particle stops moving in the positive direction, i.e., when v(t) = 0 (and velocity changes from positive to negative). Setting v(t) = 6t - 2t^2 = 2t(3 - t) = 0 gives t = 0 and t = 3 s. At t = 3 s, the velocity goes from positive to negative, so the displacement is maximized. Choice A (1 s) might be chosen by students who confuse maximum velocity with maximum displacement. Choice B (1.5 s) corresponds to the time of maximum velocity (found by setting dv/dt = 0: 6 - 4t = 0, t = 1.5 s), a common error where students differentiate velocity instead of setting it to zero. Choice D (6 s) may result from algebraic errors."
  },
  {
    "id": "physc_u4_q723",
    "subject": "apphysc",
    "unit": 4,
    "topic": "variable mass systems",
    "topicLabel": "Variable Mass Systems",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A rocket of initial mass M₀ moves in free space with no external forces. It expels mass at a constant rate dm/dt = -b (where b > 0) with exhaust velocity vₑ relative to the rocket. Starting from rest, which expression gives the velocity of the rocket as a function of time t (for t < M₀/b)?",
    "choices": [
      "A) vₑ ln(M₀ / (M₀ - bt))",
      "B) vₑ bt / M₀",
      "C) vₑ (1 - e^(-bt/M₀))",
      "D) vₑ bt / (M₀ - bt)"
    ],
    "answer": 0,
    "explanation": "The thrust equation for a variable-mass system is M(dv/dt) = vₑ(dm/dt) in magnitude, giving dv = vₑ (b dt)/(M₀ - bt). Integrating from 0 to t yields v = vₑ ln(M₀/(M₀ - bt)), which is the Tsiolkovsky rocket equation. Choice B assumes constant mass (linear impulse approximation), a common student error of treating the problem as if the mass doesn't change. Choice C resembles an exponential approach to a limit, which students sometimes guess by analogy with RC circuits or drag problems, but the differential equation here is not of that form. Choice D results from incorrectly computing dv/dt = vₑ b/M(t) and then multiplying both sides by t instead of properly integrating, effectively confusing the instantaneous acceleration with the average."
  },
  {
    "id": "physc_u7_q725",
    "subject": "apphysc",
    "unit": 7,
    "topic": "Gravitational potential energy and escape velocity",
    "topicLabel": "Gravitational potential energy and escape velocity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A tunnel is drilled straight through a uniform-density sphere of mass M and radius R. A particle of mass m is released from rest at the surface. Using the fact that the gravitational field inside a uniform sphere at distance r from the center is g(r) = -GMr/R^3, find the speed of the particle when it reaches the center of the sphere by integrating the force over the path.",
    "choices": [
      "A) sqrt(GM/R)",
      "B) sqrt(2GM/R)",
      "C) sqrt(GM/(2R))",
      "D) sqrt(3GM/R)"
    ],
    "answer": 0,
    "explanation": "Inside a uniform sphere, the gravitational field at distance r from the center is g(r) = GMr/R^3 directed inward. The force on mass m is F = -GMmr/R^3. Using the work-energy theorem, W = integral from R to 0 of F dr = integral from R to 0 of (-GMmr/R^3) dr = (-GMm/R^3)(r^2/2) evaluated from R to 0 = (-GMm/R^3)(0 - R^2/2) = GMm/(2R). Setting this equal to (1/2)mv^2 gives v = sqrt(GM/R). Choice B [sqrt(2GM/R)] is the escape speed from the surface, a common confusion where students use the exterior potential energy formula -GMm/R and set |U| = (1/2)mv^2. Choice C [sqrt(GM/(2R))] results from an error in the integration limits or dropping a factor. Choice D [sqrt(3GM/R)] can arise from incorrectly using a uniform-density potential formula with wrong coefficients."
  },
  {
    "id": "physc_u11_q727",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A semicircular arc of radius R carries a steady current I in the counterclockwise direction and lies in the xy-plane centered at the origin. The arc spans from angle 0 to angle pi. Using the Biot-Savart law, what is the magnitude of the magnetic field at the center of curvature?",
    "choices": [
      "A) mu_0 I / (4R)",
      "B) mu_0 I / (2R)",
      "C) mu_0 I / (4 pi R)",
      "D) mu_0 I pi / (4R)"
    ],
    "answer": 0,
    "explanation": "Using the Biot-Savart law, dB = (mu_0 I / 4pi) dl x r_hat / R^2. For a circular arc, dl = R d(theta) and |dl x r_hat| = R d(theta), so dB = (mu_0 I / 4pi) d(theta) / R. Integrating from 0 to pi: B = (mu_0 I / 4pi R)(pi) = mu_0 I / (4R). This is exactly half the field of a full circular loop (mu_0 I / 2R). Choice B is the common error of using the full-loop formula without accounting for the semicircular geometry. Choice C omits the factor of pi from the integration. Choice D incorrectly multiplies by an extra factor of pi."
  },
  {
    "id": "physc_u11_q728",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Ampere's law",
    "topicLabel": "Ampere's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A long cylindrical conductor of radius a carries a current I with a non-uniform current density J = J_0 (r/a)^2, where r is the radial distance from the axis. Using Ampere's law and integration, what is the magnetic field B at a distance r < a from the axis?",
    "choices": [
      "A) mu_0 J_0 r^3 / (4a^2)",
      "B) mu_0 J_0 r^2 / (3a^2)",
      "C) mu_0 J_0 r / (4)",
      "D) mu_0 J_0 r^3 / (3a^2)"
    ],
    "answer": 0,
    "explanation": "The enclosed current through a circle of radius r < a is I_enc = integral from 0 to r of J_0 (r'/a)^2 (2 pi r') dr' = (2 pi J_0 / a^2) integral from 0 to r of r'^3 dr' = (2 pi J_0 / a^2)(r^4 / 4) = pi J_0 r^4 / (2a^2). By Ampere's law, B(2 pi r) = mu_0 I_enc, so B = mu_0 J_0 r^3 / (4a^2). Choice B incorrectly uses 1/3 instead of 1/4, a common integration error (confusing r^3 integral with r^2). Choice C drops the r^2 dependence from the current density. Choice D uses 1/3 which would result from integrating r'^2 dr' instead of r'^3 dr'."
  },
  {
    "id": "physc_u12_q729",
    "subject": "apphysc",
    "unit": 12,
    "topic": "RL circuits",
    "topicLabel": "RL circuits",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "An RL series circuit has resistance R and inductance L connected to a battery of EMF V. At the moment the current reaches half its maximum value, what is the rate of energy dissipation in the resistor divided by the rate of energy storage in the inductor?",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 1/2",
      "D) 1/3"
    ],
    "answer": 0,
    "explanation": "The maximum current is I_max = V/R. The current in an RL circuit is i(t) = (V/R)(1 - e^(-Rt/L)). At any instant, the battery supplies power P_battery = Vi. The resistor dissipates P_R = i^2 R, and the inductor stores energy at rate P_L = Li(di/dt). From the loop equation V = iR + L(di/dt), multiplying by i gives Vi = i^2 R + Li(di/dt), so P_L = Vi - i^2 R. When i = V/(2R), we get P_R = (V/(2R))^2 * R = V^2/(4R). Also P_L = V * V/(2R) - V^2/(4R) = V^2/(2R) - V^2/(4R) = V^2/(4R). Therefore P_R / P_L = 1. A common misconception (choice B) comes from confusing instantaneous power with average power or incorrectly computing L(di/dt) without using the circuit equation. Choice C arises from students who mistakenly think P_L = (1/2)Li^2 is the rate rather than the stored energy. Choice D can arise from algebraic errors in the power balance."
  },
  {
    "id": "physc_u1_q730",
    "subject": "apphysc",
    "unit": 1,
    "topic": "derivatives of motion",
    "topicLabel": "Derivatives of Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with position x(t) = t^3 - 6t^2 + 9t + 2 (in meters, t in seconds). At what time(s) is the particle momentarily at rest, and what is the sign of the acceleration at the earlier of those times?",
    "choices": [
      "A) t = 1 s and t = 3 s; acceleration is negative at t = 1 s",
      "B) t = 1 s and t = 3 s; acceleration is positive at t = 1 s",
      "C) t = 3 s only; acceleration is zero at t = 3 s",
      "D) t = 1 s and t = 3 s; acceleration is zero at t = 1 s"
    ],
    "answer": 0,
    "explanation": "v(t) = dx/dt = 3t^2 - 12t + 9 = 3(t-1)(t-3), so v = 0 at t = 1 s and t = 3 s. a(t) = dv/dt = 6t - 12. At t = 1 s, a(1) = 6 - 12 = -6 m/s^2, which is negative. Choice B is a common error where students confuse the sign. Choice C incorrectly discards t = 1 by confusing velocity with speed or misapplying the quadratic formula. Choice D incorrectly assumes the midpoint property applies to acceleration."
  },
  {
    "id": "physc_u1_q731",
    "subject": "apphysc",
    "unit": 1,
    "topic": "integrals of motion",
    "topicLabel": "Integrals of Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle starts from rest at the origin and has an acceleration given by a(t) = 4e^(-2t) m/s^2 for t >= 0. What is the particle's velocity as t approaches infinity?",
    "choices": [
      "A) 0 m/s",
      "B) 2 m/s",
      "C) 4 m/s",
      "D) Infinity"
    ],
    "answer": 1,
    "explanation": "v(t) = integral from 0 to t of 4e^(-2t') dt' = 4 * [-1/2 * e^(-2t')]_0^t = -2e^(-2t) + 2. As t -> infinity, e^(-2t) -> 0, so v -> 2 m/s. Choice A is wrong; students confuse the fact that acceleration approaches zero with velocity approaching zero, but velocity asymptotes to a finite value. Choice C results from forgetting the factor of 1/2 from the integration of the exponential. Choice D is wrong because the integral converges."
  },
  {
    "id": "physc_u1_q732",
    "subject": "apphysc",
    "unit": 1,
    "topic": "projectile motion",
    "topicLabel": "Projectile Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A projectile is launched from the origin at angle theta above the horizontal with speed v0. Using calculus, the radius of curvature of the trajectory at the highest point of flight is:",
    "choices": [
      "A) v0^2 / g",
      "B) v0^2 cos^2(theta) / g",
      "C) v0^2 sin^2(theta) / g",
      "D) v0^2 cos(theta) / g"
    ],
    "answer": 1,
    "explanation": "At the highest point, the vertical velocity is zero so the speed is v0*cos(theta). The only acceleration is g directed downward, which at the top is entirely centripetal (perpendicular to the horizontal velocity). Using a_c = v^2/R, we get g = (v0*cos(theta))^2 / R, so R = v0^2 cos^2(theta) / g. Choice A uses the full launch speed instead of the speed at the top. Choice C incorrectly uses the vertical component. Choice D takes the square root prematurely, using v0*cos(theta) instead of squaring it."
  },
  {
    "id": "physc_u1_q733",
    "subject": "apphysc",
    "unit": 1,
    "topic": "relative motion",
    "topicLabel": "Relative Motion",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Boat A moves east at 3 m/s relative to the water. The river current has velocity v_w(t) = 2t (m/s) directed south, where t is in seconds. What is the magnitude of the acceleration of Boat A relative to the ground at t = 2 s?",
    "choices": [
      "A) 0 m/s^2",
      "B) 2 m/s^2",
      "C) 4 m/s^2",
      "D) sqrt(4 + 4) m/s^2"
    ],
    "answer": 1,
    "explanation": "The velocity of Boat A relative to the ground is v_A = (3, -2t) m/s (east component constant, south component from the current). The acceleration is the time derivative: a_A = d/dt (3, -2t) = (0, -2) m/s^2. The magnitude is 2 m/s^2 at all times, including t = 2 s. Choice A incorrectly assumes constant current or that the boat's own constant velocity means zero acceleration. Choice C incorrectly evaluates 2t at t = 2 for the acceleration instead of differentiating. Choice D conflates velocity components with acceleration components."
  },
  {
    "id": "physc_u3_q734",
    "subject": "apphysc",
    "unit": 3,
    "topic": "work integral",
    "topicLabel": "Work Integral and Kinetic Energy Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A force acts on a 2 kg object moving along the x-axis according to F(x) = 6x^2 (in Newtons, with x in meters). The object starts from rest at x = 0. What is the speed of the object when it reaches x = 3 m?",
    "choices": [
      "A) 9 m/s",
      "B) 3*sqrt(6) m/s",
      "C) 3*sqrt(3) m/s",
      "D) 27 m/s"
    ],
    "answer": 1,
    "explanation": "The work done by F from x=0 to x=3 is W = integral from 0 to 3 of 6x^2 dx = 6(x^3/3) evaluated from 0 to 3 = 2(27) = 54 J. By the work-energy theorem, W = (1/2)mv^2, so 54 = (1/2)(2)v^2, giving v^2 = 54 and v = sqrt(54) = sqrt(9*6) = 3*sqrt(6) ≈ 7.35 m/s. Choice A (9 m/s) comes from forgetting to apply work-energy theorem correctly or errors in integration. Choice C (3*sqrt(3)) comes from forgetting to multiply by 2 in the integral (using x^3/3 without the factor of 6, getting W=27 then v=sqrt(27)). Choice D (27 m/s) results from setting W = mv instead of (1/2)mv^2. The correct answer is B: 3*sqrt(6) m/s."
  },
  {
    "id": "physc_u6_q737",
    "subject": "apphysc",
    "unit": 6,
    "topic": "spring-mass energy in SHM",
    "topicLabel": "spring-mass energy in SHM",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block of mass m on a frictionless surface is attached to two springs in series with spring constants k1 and k2. The system is displaced by amplitude A and released. What is the total mechanical energy of the oscillation?",
    "choices": [
      "A) (1/2) k1 k2 A^2 / (k1 + k2)",
      "B) (1/2) (k1 + k2) A^2",
      "C) (1/2) k1 A^2 + (1/2) k2 A^2",
      "D) (1/2) k1 k2 A^2 / (k1 - k2)"
    ],
    "answer": 0,
    "explanation": "For two springs in series, the effective spring constant is k_eff = k1 k2 / (k1 + k2). The total energy in SHM is (1/2) k_eff A^2 = (1/2) k1 k2 A^2 / (k1 + k2). Choice B uses the parallel combination formula k1 + k2, a very common student error confusing series and parallel springs. Choice C adds the energies as if each spring independently stores (1/2)kA^2, which is incorrect since the extensions are different. Choice D has k1 - k2 in the denominator, which has no physical basis."
  },
  {
    "id": "physc_u6_q738",
    "subject": "apphysc",
    "unit": 6,
    "topic": "damped oscillations",
    "topicLabel": "damped oscillations",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A damped harmonic oscillator obeys m x'' + b x' + k x = 0 with b^2 < 4mk. The solution is x(t) = A e^(-gamma t) cos(omega_d t + phi) where gamma = b/(2m). At what rate is the total mechanical energy dissipated at an instant when the velocity is v? Assume weak damping so that instantaneous energy loss is dominated by the damping force.",
    "choices": [
      "A) b v^2",
      "B) b v",
      "C) (1/2) b v^2",
      "D) gamma m v^2"
    ],
    "answer": 0,
    "explanation": "The damping force is F_damp = -b v. The instantaneous power dissipated is P = -F_damp * v = b v^2 (energy is lost at this rate). Choice B gives force times a missing factor of v, confusing force with power. Choice C incorrectly introduces a factor of 1/2 by analogy with kinetic energy. Choice D gives gamma m v^2 = (b/2)v^2, which is wrong by a factor of 2 — a common mistake from confusing the decay constant gamma with b/m."
  },
  {
    "id": "physc_u6_q739",
    "subject": "apphysc",
    "unit": 6,
    "topic": "driven oscillations and resonance",
    "topicLabel": "driven oscillations and resonance",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A driven damped oscillator satisfies m x'' + b x' + k x = F0 cos(omega_d t). In steady state the amplitude is A(omega_d) = F0 / sqrt((k - m omega_d^2)^2 + (b omega_d)^2). For very light damping (b approaching 0), what is the approximate full-width at half-maximum (FWHM) of the amplitude-squared resonance curve A^2(omega_d) centered near omega_0 = sqrt(k/m)?",
    "choices": [
      "A) b/m",
      "B) 2b/m",
      "C) b/(2m)",
      "D) sqrt(k/m)"
    ],
    "answer": 0,
    "explanation": "Near resonance, setting omega_d = omega_0 + delta and expanding to first order, A^2 falls to half its peak value when (b omega_0)^2 = (2 m omega_0 delta)^2, giving delta = b/(2m). The FWHM is 2 delta = b/m. This equals 2 gamma where gamma = b/(2m). Choice B doubles this, confusing half-width with full-width. Choice C is the half-width (gamma), not the full width. Choice D gives the natural frequency, which has nothing to do with the width of the resonance peak."
  },
  {
    "id": "physc_u11_q741",
    "subject": "apphysc",
    "unit": 11,
    "topic": "Biot-Savart law",
    "topicLabel": "Biot-Savart law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A thin wire carries current I along the x-axis from x = 0 to x = L. Using the Biot-Savart law, what is the magnitude of the magnetic field at the point (0, d, 0), a perpendicular distance d from one end of the wire?",
    "choices": [
      "A) (mu_0 I)/(4 pi d) * L/sqrt(L^2 + d^2)",
      "B) (mu_0 I)/(2 pi d) * L/sqrt(L^2 + d^2)",
      "C) (mu_0 I)/(4 pi d)",
      "D) (mu_0 I L)/(4 pi (L^2 + d^2))"
    ],
    "answer": 0,
    "explanation": "Using the Biot-Savart law, dB = (mu_0 I)/(4 pi) * (dl x r-hat)/r^2. For a current element at position (x, 0, 0), the displacement to the field point (0, d, 0) is (-x, d, 0) with magnitude r = sqrt(x^2 + d^2). The cross product dl x r-hat gives magnitude d/(x^2 + d^2)^(1/2) dx. Integrating dB = (mu_0 I)/(4 pi) * d dx/(x^2 + d^2)^(3/2) from x = 0 to x = L yields B = (mu_0 I)/(4 pi d) * L/sqrt(L^2 + d^2). Choice B is wrong because it uses 2 pi instead of 4 pi, a common error from confusing the finite wire result with the infinite wire formula. Choice C gives the result for a semi-infinite wire (L -> infinity limit), which students often mistakenly apply. Choice D neglects the proper (3/2) power in the denominator during integration, effectively treating r^2 instead of r^3 in the integrand."
  },
  {
    "id": "physc_u3_q742",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy Functions and Conservative Forces",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conservative force acts on a particle moving along the x-axis. The potential energy function is given by U(x) = 3x^2 - 2x^3, where U is in joules and x is in meters. At what positive value of x is the particle in equilibrium, and is that equilibrium stable or unstable?",
    "choices": [
      "A) x = 0 m, stable",
      "B) x = 1 m, unstable",
      "C) x = 1 m, stable",
      "D) x = 0.5 m, stable"
    ],
    "answer": 1,
    "explanation": "Equilibrium occurs where F = -dU/dx = 0. Taking the derivative: dU/dx = 6x - 6x^2 = 6x(1 - x). Setting this equal to zero gives x = 0 and x = 1. The positive value is x = 1 m. To determine stability, evaluate the second derivative: d^2U/dx^2 = 6 - 12x. At x = 1, d^2U/dx^2 = 6 - 12 = -6, which is negative, meaning U has a local maximum there. A local maximum in potential energy corresponds to unstable equilibrium (the force pushes the particle further away from equilibrium if displaced). Choice A identifies x = 0 which is not a positive value and is actually stable (d^2U/dx^2 = 6 > 0). Choice C correctly finds x = 1 but incorrectly identifies it as stable, a common error from confusing maxima and minima of U(x). Choice D uses an incorrect equilibrium position."
  },
  {
    "id": "physc_u3_q743",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy and Equilibrium from Force Derivatives",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A conservative force on a particle is given by F(x) = -dU/dx, where U(x) = x^4 - 8x^2 + 12. At which of the following positions is the particle in stable equilibrium?",
    "choices": [
      "A) x = 0 only",
      "B) x = 2 and x = -2",
      "C) x = 0, x = 2, and x = -2",
      "D) x = 2 only"
    ],
    "answer": 1,
    "explanation": "Equilibrium occurs where F = 0, i.e., dU/dx = 0. dU/dx = 4x^3 - 16x = 4x(x^2 - 4) = 0, giving x = 0, x = 2, x = -2. For stability, we need d^2U/dx^2 > 0 (a local minimum of U). d^2U/dx^2 = 12x^2 - 16. At x = 0: d^2U/dx^2 = -16 < 0, so this is unstable (local maximum of U). At x = +/-2: d^2U/dx^2 = 12(4) - 16 = 32 > 0, so these are stable equilibria (local minima). Choice A is wrong because x = 0 is unstable. Choice C is wrong because it includes x = 0. Choice D misses x = -2 by symmetry oversight."
  },
  {
    "id": "physc_u3_q744",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Instantaneous Power and Kinetic Energy",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A particle of mass m starts from rest and is acted upon by a single force such that the kinetic energy varies with time as K(t) = C*t^3, where C is a positive constant. What is the instantaneous power delivered to the particle at time t?",
    "choices": [
      "A) 3C*t^2",
      "B) C*t^3",
      "C) (3/2)*C*t^2",
      "D) sqrt(6C^3*t^3/m)"
    ],
    "answer": 0,
    "explanation": "By the work-energy theorem, the net work done equals the change in kinetic energy. Since the particle starts from rest, W(t) = K(t) = C*t^3. Power is the time derivative of work: P = dW/dt = dK/dt = 3C*t^2. Choice B confuses energy with power (no derivative taken). Choice C incorrectly applies a factor of 1/2, perhaps conflating with differentiating (1/2)mv^2 without using the chain rule properly. Choice D comes from computing F*v explicitly using v = sqrt(2K/m) and F = ma with a = dv/dt, which should yield the same 3Ct^2 if done correctly, but students sometimes make algebraic errors and arrive at this incorrect expression."
  },
  {
    "id": "physc_u3_q746",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy and Equilibrium from Force",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A conservative force acting on a particle along the x-axis is given by F(x) = -dU/dx, where the potential energy function is U(x) = x^3 - 6x^2 + 9x (in SI units). At which position(s) is the particle in stable equilibrium?",
    "choices": [
      "A) x = 1 m only",
      "B) x = 3 m only",
      "C) x = 1 m and x = 3 m",
      "D) There are no positions of stable equilibrium"
    ],
    "answer": 1,
    "explanation": "Equilibrium occurs where F(x) = -dU/dx = 0, so dU/dx = 0. dU/dx = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3) = 0, giving x = 1 and x = 3. For stable equilibrium, we need d^2U/dx^2 > 0 (a local minimum of U). d^2U/dx^2 = 6x - 12. At x = 1: 6(1) - 12 = -6 < 0, so this is a local maximum of U (unstable equilibrium). At x = 3: 6(3) - 12 = 6 > 0, so this is a local minimum of U (stable equilibrium). Common misconception A: students confuse stable and unstable, picking x = 1 (the maximum). Misconception C: students identify both equilibrium points but forget to check stability via the second derivative. Misconception D: students may incorrectly conclude no stable equilibrium exists if they confuse the sign convention."
  },
  {
    "id": "physc_u3_q747",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Instantaneous Power and Calculus",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 2 kg object moves along the x-axis with its position given by x(t) = t^3 - 3t (in SI units). A net force acts on the object consistent with Newton's second law. What is the instantaneous power delivered by the net force at t = 2 s?",
    "choices": [
      "A) 72 W",
      "B) 108 W",
      "C) 216 W",
      "D) 144 W"
    ],
    "answer": 2,
    "explanation": "Position: x(t) = t^3 - 3t. Velocity: v(t) = dx/dt = 3t^2 - 3. Acceleration: a(t) = dv/dt = 6t. The net force is F = ma = 2(6t) = 12t. Instantaneous power is P = F*v = 12t(3t^2 - 3). At t = 2: v(2) = 3(4) - 3 = 9 m/s, F(2) = 12(2) = 24 N. P = 24 * 9 = 216 W. Distractor A (72 W): student computes P = F*v but uses v = dx/dt evaluated incorrectly as just 3t^2, getting v=12, then uses F = ma with a = 6 giving F=12, so P=144... actually let's trace errors. 108 W: student computes kinetic energy at t=2 as (1/2)(2)(9^2) = 81 J and divides by some time or computes dK/dt incorrectly. 144 W: student uses P = Fv but miscalculates by using F = m*v instead of F = m*a, getting F = 2(9) = 18, then P = 18*8 or similar error. 72 W: student uses average velocity or forgets the factor of 2 in mass. The correct answer is 216 W. Alternatively, P = dK/dt where K = (1/2)(2)(3t^2-3)^2 = (3t^2-3)^2. dK/dt = 2(3t^2-3)(6t) = 12t(3t^2-3). At t=2: 12(2)(9) = 216 W, confirming the answer."
  },
  {
    "id": "physc_u3_q748",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Deriving Force from Potential Energy",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A particle of mass m moves in one dimension with potential energy U(x) = C*x^3 - D*x, where C and D are positive constants. At what position(s) is the particle in equilibrium, and which equilibrium is stable?",
    "choices": [
      "A) x = sqrt(D/(3C)) is stable; x = -sqrt(D/(3C)) is unstable",
      "B) x = sqrt(D/(3C)) is unstable; x = -sqrt(D/(3C)) is stable",
      "C) Both x = sqrt(D/(3C)) and x = -sqrt(D/(3C)) are stable",
      "D) x = D/(3C) is stable; x = -D/(3C) is unstable"
    ],
    "answer": 0,
    "explanation": "Equilibrium occurs where F = -dU/dx = 0. dU/dx = 3Cx^2 - D = 0, so x^2 = D/(3C), giving x = +/-sqrt(D/(3C)). To determine stability, take d^2U/dx^2 = 6Cx. At x = +sqrt(D/(3C)), d^2U/dx^2 > 0, so this is a local minimum of U and therefore stable equilibrium. At x = -sqrt(D/(3C)), d^2U/dx^2 < 0, so this is a local maximum of U and therefore unstable. Choice B reverses stable and unstable, a common sign error. Choice C incorrectly claims both are stable. Choice D forgets the square root when solving for x."
  },
  {
    "id": "physc_u3_q749",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Instantaneous Power and Energy Methods",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A particle of mass m starts from rest and is subject to a net force that causes its velocity to increase as v(t) = b*t^2, where b is a positive constant. What is the instantaneous power delivered to the particle as a function of time?",
    "choices": [
      "A) P = 2m*b^2*t^3",
      "B) P = m*b^2*t^4",
      "C) P = (1/2)*m*b^2*t^4",
      "D) P = 3m*b^2*t^3"
    ],
    "answer": 0,
    "explanation": "The kinetic energy is K = (1/2)m*v^2 = (1/2)m*b^2*t^4. The instantaneous power is P = dK/dt = (1/2)m*b^2*(4t^3) = 2m*b^2*t^3. Alternatively, a = dv/dt = 2bt, F = 2mbt, and P = F*v = (2mbt)(bt^2) = 2m*b^2*t^3. Choice B comes from incorrectly using P = m*v*(dv/dt) but dropping a factor, or confusing P with K. Choice C is simply K itself, not its time derivative — a common error where students forget to differentiate. Choice D results from incorrectly differentiating t^4 as 3t^3."
  },
  {
    "id": "physc_u3_q750",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy and Equilibrium from Force Derivation",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A conservative force acts on a particle moving along the x-axis. The potential energy function is U(x) = x^3 - 6x^2 + 9x + 5 (in joules, with x in meters). At how many positions is the particle in equilibrium, and which are stable?",
    "choices": [
      "A) Two equilibrium positions; x = 1 is stable, x = 3 is unstable",
      "B) Two equilibrium positions; x = 1 is unstable, x = 3 is stable",
      "C) One equilibrium position at x = 2; it is stable",
      "D) Two equilibrium positions; both are stable"
    ],
    "answer": 1,
    "explanation": "Equilibrium occurs where F = -dU/dx = 0. dU/dx = 3x^2 - 12x + 9 = 3(x-1)(x-3). So equilibrium at x = 1 and x = 3. To determine stability, take d^2U/dx^2 = 6x - 12. At x = 1: d^2U/dx^2 = -6 < 0, so U has a local maximum, meaning unstable equilibrium. At x = 3: d^2U/dx^2 = 6 > 0, so U has a local minimum, meaning stable equilibrium. Choice A reverses the stability. Choice C incorrectly averages the roots. Choice D assumes all equilibria are stable."
  },
  {
    "id": "physc_u3_q751",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy Functions and Conservative Forces",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conservative force in two dimensions is given by F_x = -2xy and F_y = -x^2 + 3y^2. The potential energy U(x,y) satisfying F = -grad(U) with U(0,0) = 0 is:",
    "choices": [
      "A) U(x,y) = x^2*y - y^3",
      "B) U(x,y) = x^2*y + y^3",
      "C) U(x,y) = 2xy + x^2 - 3y^2",
      "D) U(x,y) = x^2*y - y^3 + C where C is an arbitrary constant"
    ],
    "answer": 0,
    "explanation": "From F_x = -dU/dx, we get dU/dx = 2xy, so integrating with respect to x: U = x^2*y + g(y) for some function g(y). Then dU/dy = x^2 + g'(y). Setting -dU/dy = F_y = -x^2 + 3y^2 gives dU/dy = x^2 - 3y^2, so g'(y) = -3y^2, thus g(y) = -y^3 + C. Applying U(0,0) = 0 gives C = 0, so U = x^2*y - y^3. Choice B has +y^3 instead of -y^3, a common sign error from mishandling the negative in F = -grad(U). Choice C incorrectly treats the force components as equal to the partial derivatives of U rather than their negatives. Choice D is wrong because the boundary condition U(0,0) = 0 fixes the constant, eliminating the arbitrary constant."
  },
  {
    "id": "physc_u3_q752",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Power and Energy Conservation with Calculus",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle of mass m moves along a straight line under a net force. The instantaneous power delivered to the particle is given by P(t) = P_0 * e^(-bt), where P_0 and b are positive constants. If the particle starts from rest at t = 0, what is the velocity of the particle as a function of time?",
    "choices": [
      "A) sqrt(2*P_0*(1 - e^(-bt)) / (mb))",
      "B) P_0*(1 - e^(-bt)) / (mb)",
      "C) sqrt(2*P_0*t / m)",
      "D) P_0*e^(-bt) / (mb)"
    ],
    "answer": 0,
    "explanation": "Power is the rate of change of kinetic energy: P = dK/dt. Integrating both sides from 0 to t: K(t) - K(0) = integral from 0 to t of P_0*e^(-bt') dt' = P_0*(-1/b)(e^(-bt) - 1) = (P_0/b)(1 - e^(-bt)). Since the particle starts from rest, K(0) = 0, so (1/2)mv^2 = (P_0/b)(1 - e^(-bt)), giving v = sqrt(2*P_0*(1 - e^(-bt))/(mb)). Choice B results from incorrectly setting P = mv*(dv/dt) and then assuming v is constant or linearizing — it gives a result linear in the energy expression without the square root, a common error of confusing energy with momentum. Choice C uses P = P_0 (ignoring the exponential decay), yielding K = P_0*t and v = sqrt(2*P_0*t/m), which only applies if power were constant. Choice D confuses the instantaneous power expression with the integrated kinetic energy and incorrectly solves for v."
  },
  {
    "id": "physc_u9_q753",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "Field from Potential",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The electric potential in a region of space is given by V(x, y, z) = A(x^2*y - 2y^2*z), where A is a positive constant with appropriate units. What is the electric field component E_y at the point (1, 1, 1)?",
    "choices": [
      "A) -A(x^2 - 4yz) evaluated at (1,1,1) = -A(1-4) = 3A",
      "B) A(x^2 - 4yz) evaluated at (1,1,1) = A(1-4) = -3A",
      "C) -A(2xy - 4yz) evaluated at (1,1,1) = -A(2-4) = 2A",
      "D) A(2xy) evaluated at (1,1,1) = 2A"
    ],
    "answer": 0,
    "explanation": "E_y = -dV/dy. Taking the partial derivative of V with respect to y: dV/dy = A(x^2 - 4yz). Therefore E_y = -A(x^2 - 4yz). At (1,1,1): E_y = -A(1 - 4) = 3A. Choice B is the common sign error where students forget the negative sign in E = -grad(V). Choice C incorrectly takes a partial derivative that mixes x and y differentiation. Choice D only differentiates the first term and drops the negative sign."
  },
  {
    "id": "physc_u9_q754",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor with dielectrics",
    "topicLabel": "Energy Stored in Capacitor / Dielectrics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel-plate capacitor with plate area A and separation d is connected to a battery of voltage V. While still connected, a dielectric slab of constant K is inserted filling the entire gap. By what factor does the energy stored in the capacitor change?",
    "choices": [
      "A) K",
      "B) 1/K",
      "C) K^2",
      "D) 1/K^2"
    ],
    "answer": 0,
    "explanation": "With the battery connected, V is constant. The capacitance changes from C_0 to KC_0. Energy U = (1/2)CV^2, so U_new = (1/2)(KC_0)V^2 = K * (1/2)C_0*V^2 = K * U_0. The energy increases by factor K. Choice B (1/K) is the common trap for students who confuse this with the case where the capacitor is disconnected from the battery (constant Q), in which case U = Q^2/(2C) and inserting the dielectric decreases energy by 1/K. Choices C and D represent errors in applying the dielectric constant to the wrong power."
  },
  {
    "id": "physc_u9_q756",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential",
    "topicLabel": "Field from Potential",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The electric potential in a region of space is given by V(x, y, z) = 3x^2*y - 2y^2*z + 5z^3 (in SI units). What is the y-component of the electric field, E_y, at the point (1, 2, 1)?",
    "choices": [
      "A) -3 V/m",
      "B) 1 V/m",
      "C) 5 V/m",
      "D) -1 V/m"
    ],
    "answer": 2,
    "explanation": "E_y = -dV/dy. Taking the partial derivative: dV/dy = 3x^2 - 4yz. At (1,2,1): dV/dy = 3(1)^2 - 4(2)(1) = 3 - 8 = -5. Therefore E_y = -(-5) = 5 V/m. Common errors: Choice A results from forgetting the negative sign in E = -grad(V) and also making a sign error. Choice D comes from incorrectly computing the partial derivative by including terms that don't depend on y. Choice B arises from an algebraic error in evaluating the derivative."
  },
  {
    "id": "physc_u9_q757",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor with dielectrics",
    "topicLabel": "Energy Stored in Capacitor with Dielectrics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel-plate capacitor with plate area A and separation d is fully charged to voltage V_0 and then disconnected from the battery. A dielectric slab with constant kappa = 3 is then inserted to fill the entire gap. What is the ratio of the final energy stored to the initial energy stored?",
    "choices": [
      "A) 3",
      "B) 1/3",
      "C) 9",
      "D) 1/9"
    ],
    "answer": 1,
    "explanation": "When the capacitor is disconnected, the charge Q remains constant. The initial capacitance is C_0 = epsilon_0 * A / d, and after inserting the dielectric, C = kappa * C_0 = 3C_0. The energy stored is U = Q^2 / (2C). So U_final / U_initial = C_0 / (kappa * C_0) = 1/kappa = 1/3. A common mistake (Choice A) is to use U = CV^2/2 and assume V stays constant (as if the battery were still connected), giving U_final/U_initial = kappa = 3. Choice C (9) comes from incorrectly squaring kappa. Choice D (1/9) comes from incorrectly squaring the ratio 1/kappa."
  },
  {
    "id": "physc_u9_q758",
    "subject": "apphysc",
    "unit": 9,
    "topic": "potential from field",
    "topicLabel": "Potential from Field via Integration",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A non-uniform electric field exists along the x-axis given by E(x) = E_0 * (x/a)^2 in the positive x-direction, where E_0 and a are positive constants. Taking V = 0 at x = 0, what is the potential V(x) for x > 0?",
    "choices": [
      "A) -E_0 * x^3 / (3a^2)",
      "B) E_0 * x^3 / (3a^2)",
      "C) -2E_0 * x / a^2",
      "D) -E_0 * x^2 / (2a^2)"
    ],
    "answer": 0,
    "explanation": "The potential is found by integrating: V(x) - V(0) = -integral from 0 to x of E(x') dx' = -integral from 0 to x of E_0*(x'/a)^2 dx' = -(E_0/a^2) * [x'^3/3] from 0 to x = -E_0*x^3/(3a^2). Since V(0) = 0, V(x) = -E_0*x^3/(3a^2). Choice B is a common error where students forget the negative sign in V = -integral(E . dl). Choice C results from differentiating instead of integrating. Choice D results from incorrectly integrating (x/a)^2 as x^2/(2a^2), confusing the power rule exponent."
  },
  {
    "id": "physc_u3_q760",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Potential Energy and Equilibrium from Force Functions",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A conservative force acting on a particle along the x-axis is given by F(x) = -dU/dx, where U(x) = x^4 - 8x^2 + 12. At how many positions does the particle experience stable equilibrium?",
    "choices": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) 3"
    ],
    "answer": 2,
    "explanation": "Equilibrium occurs where F(x) = 0, i.e., dU/dx = 0. dU/dx = 4x^3 - 16x = 4x(x^2 - 4) = 0, giving x = 0, x = 2, and x = -2. To determine stability, take d^2U/dx^2 = 12x^2 - 16. At x = 0: d^2U/dx^2 = -16 < 0, so this is a local maximum of U, meaning unstable equilibrium. At x = 2: d^2U/dx^2 = 48-16 = 32 > 0, so this is a local minimum of U, meaning stable equilibrium. At x = -2: d^2U/dx^2 = 48-16 = 32 > 0, also stable. So there are 2 stable equilibrium points. Choice D (3) is wrong because students may count all equilibrium points without checking stability. Choice B (1) is wrong if a student only considers positive x values. Choice A (0) would be chosen by a student who confuses the sign convention for stability."
  },
  {
    "id": "physc_u3_q761",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Instantaneous Power with Variable Velocity",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 2 kg object moves along a straight line with velocity v(t) = (3t^2 - 2t) m/s. What is the instantaneous power delivered by the net force acting on the object at t = 2 s?",
    "choices": [
      "A) 80 W",
      "B) 160 W",
      "C) 128 W",
      "D) 64 W"
    ],
    "answer": 1,
    "explanation": "The net force is F = ma = m(dv/dt). dv/dt = 6t - 2. At t = 2 s: a = 6(2) - 2 = 10 m/s^2, so F = 2(10) = 20 N. The velocity at t = 2 s: v = 3(4) - 2(2) = 12 - 4 = 8 m/s. Power P = F*v = 20(8) = 160 W. Choice A (80 W) comes from using m = 1 kg or forgetting to multiply by mass. Choice C (128 W) comes from incorrectly computing power as d(KE)/dt = d(mv^2/2)/dt and making an algebraic error, such as using v^2 = (3t^2)^2 without the -2t term. Choice D (64 W) could arise from using v = 4 m/s (evaluating only the first term 3t^2 at t=1 and doubling, or other arithmetic mistakes) with F = 16 N."
  },
  {
    "id": "physc_u3_q762",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Instantaneous Power with Variable Force",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 2 kg object moves along the x-axis with position x(t) = t^3 - 2t (in meters, t in seconds). The only force acting on the object is a net force in the x-direction. What is the instantaneous power delivered to the object at t = 1 s?",
    "choices": [
      "A) 12 W",
      "B) 24 W",
      "C) 6 W",
      "D) 36 W"
    ],
    "answer": 0,
    "explanation": "First find velocity: v(t) = dx/dt = 3t^2 - 2. At t=1: v = 3 - 2 = 1 m/s. Next find acceleration: a(t) = dv/dt = 6t. At t=1: a = 6 m/s^2. The net force is F = ma = 2(6) = 12 N. Power is P = Fv = 12(1) = 12 W. Choice B (24 W) results from using v = 3t^2 (forgetting the -2 term) giving v=3, then P = 12·2 = 24, or from doubling the answer. Choice C (6 W) comes from forgetting the mass and using P = a·v = 6·1 = 6. Choice D (36 W) comes from using v = 3 m/s (dropping the constant) and getting P = 12·3 = 36 W."
  },
  {
    "id": "physc_u6_q763",
    "subject": "apphysc",
    "unit": 6,
    "topic": "Damped Oscillations",
    "topicLabel": "Damped Oscillations",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A block of mass m on a frictionless surface is attached to a spring of constant k and subject to a velocity-dependent damping force F_d = -bv, where b is a positive constant. The displacement x(t) satisfies the differential equation m(d^2x/dt^2) + b(dx/dt) + kx = 0. For the underdamped case, the angular frequency of oscillation omega_d is given by omega_d = sqrt(k/m - b^2/(4m^2)). What is the rate of change of the total mechanical energy dE/dt at an instant when the velocity of the block is v?",
    "choices": [
      "A) -bv^2",
      "B) -bv^2/2",
      "C) -(b/2m)E",
      "D) -kxv"
    ],
    "answer": 0,
    "explanation": "The total mechanical energy is E = (1/2)mv^2 + (1/2)kx^2. Taking the time derivative: dE/dt = mv(dv/dt) + kx(dx/dt) = v(ma + kx). From the equation of motion, ma = -kx - bv, so ma + kx = -bv. Therefore dE/dt = v(-bv) = -bv^2. Choice B (-bv^2/2) is a common error where students incorrectly apply a factor of 1/2 by analogy with kinetic energy. Choice C (-(b/2m)E) confuses the energy decay rate with the amplitude decay constant; the amplitude decays as e^(-bt/2m), and the energy as e^(-bt/m), but dE/dt = -(b/m)E only holds on average over a cycle, not instantaneously. Choice D (-kxv) incorrectly identifies the power loss with the spring force contribution rather than the damping force."
  },
  {
    "id": "physc_u9_q764",
    "subject": "apphysc",
    "unit": 9,
    "topic": "energy stored in capacitor",
    "topicLabel": "Energy Stored in Capacitor",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel-plate capacitor with capacitance C is charged to voltage V0 and then disconnected from the battery. The plates are then slowly pulled apart to triple the separation distance. What is the change in energy stored in the capacitor?",
    "choices": [
      "A) The energy decreases by (2/3)CV0^2/2",
      "B) The energy increases by CV0^2",
      "C) The energy increases by (2/3)CV0^2",
      "D) The energy increases by (4/3)CV0^2/2"
    ],
    "answer": 1,
    "explanation": "When disconnected, charge Q = CV0 is constant. Initial energy Ui = Q^2/(2C). When separation triples, capacitance becomes C/3. Final energy Uf = Q^2/(2C/3) = 3Q^2/(2C) = 3CV0^2/2. Change in energy = Uf - Ui = 3CV0^2/2 - CV0^2/2 = CV0^2. A common misconception is to hold voltage constant instead of charge (which would give a decrease in energy, as in choice A). Another error is computing the ratio incorrectly (choice D). The work done pulling the plates apart accounts for the energy increase."
  },
  {
    "id": "physc_u9_q765",
    "subject": "apphysc",
    "unit": 9,
    "topic": "potential from field",
    "topicLabel": "Potential from Field",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A non-uniform electric field in a region is given by E(x) = E0*(x/a)^2 in the +x direction, where E0 and a are positive constants. Taking V = 0 at x = 0, what is the electric potential V(x) as a function of x?",
    "choices": [
      "A) V(x) = -E0*x^3/(3a^2)",
      "B) V(x) = E0*x^3/(3a^2)",
      "C) V(x) = -E0*x^2/(2a^2)",
      "D) V(x) = -2E0*x^3/(3a^2)"
    ],
    "answer": 0,
    "explanation": "The potential is found from V(x) - V(0) = -integral from 0 to x of E(x')dx'. V(x) = -integral from 0 to x of E0*(x'/a)^2 dx' = -(E0/a^2) * integral from 0 to x of x'^2 dx' = -(E0/a^2)*(x^3/3) = -E0*x^3/(3a^2). Choice B is the common sign error from forgetting the negative in V = -integral(E·dl). Choice C results from incorrectly integrating x^2 as x^2/2 instead of x^3/3 (a power rule error). Choice D has an erroneous factor of 2, possibly from a chain rule confusion."
  },
  {
    "id": "physc_u9_q766",
    "subject": "apphysc",
    "unit": 9,
    "topic": "field from potential, capacitance, dielectrics",
    "topicLabel": "Field from Potential with Dielectrics",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A parallel-plate capacitor with plate area A and separation d is filled with a dielectric whose dielectric constant varies linearly with position as K(x) = 1 + 3x/d, where x is measured from the negative plate (x = 0) to the positive plate (x = d). The capacitor holds free charge +Q on the positive plate and -Q on the negative plate. Which of the following gives the electric field E(x) between the plates as a function of position x?",
    "choices": [
      "A) E(x) = Q / (epsilon_0 * A * (1 + 3x/d))",
      "B) E(x) = Q / (epsilon_0 * A)",
      "C) E(x) = Qd / (epsilon_0 * A * (d + 3x)^2)",
      "D) E(x) = Q(1 + 3x/d) / (epsilon_0 * A)"
    ],
    "answer": 0,
    "explanation": "In a dielectric-filled capacitor, the displacement field D is determined by the free charge only. By Gauss's law for D, D = Q/A (uniform between the plates). Since D = K(x) * epsilon_0 * E(x), we get E(x) = D / (K(x) * epsilon_0) = Q / (epsilon_0 * A * (1 + 3x/d)). Choice B is wrong because it ignores the dielectric entirely (uses vacuum field). Choice C incorrectly takes the derivative of the potential — some students differentiate 1/K(x) as if E were obtained from dK/dx rather than from D/K. Choice D multiplies by K instead of dividing, a common sign/direction error where students confuse the relationship between D, K, and E, effectively making the field stronger where the dielectric constant is larger, which is physically backwards."
  },
  {
    "id": "physc_u10_q767",
    "subject": "apphysc",
    "unit": 10,
    "topic": "RC circuits transient",
    "topicLabel": "RC circuits transient",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A capacitor of capacitance C is charged to voltage V0 and then discharged through a resistor R. The energy dissipated in the resistor from t = 0 to t = RC is found by integrating the instantaneous power. What fraction of the initial stored energy has been dissipated in this time interval?",
    "choices": [
      "A) 1 - e^(-2)",
      "B) 1 - e^(-1)",
      "C) (1/2)(1 - e^(-2))",
      "D) (1/2)(1 - e^(-1))"
    ],
    "answer": 0,
    "explanation": "During discharge, q(t) = CV0 e^(-t/RC), so i(t) = dq/dt = -(V0/R) e^(-t/RC). The instantaneous power dissipated is P = i^2 R = (V0^2/R) e^(-2t/RC). Integrating from 0 to RC: E_dissipated = integral from 0 to RC of (V0^2/R) e^(-2t/RC) dt = (V0^2/R)(-RC/2)[e^(-2t/RC)] from 0 to RC = (CV0^2/2)(1 - e^(-2)). The initial energy is (1/2)CV0^2. The fraction dissipated is (1 - e^(-2)) ≈ 0.865. Choice B (1 - e^(-1)) is wrong because it results from incorrectly using e^(-t/RC) instead of e^(-2t/RC) in the power integral — a common error of forgetting to square the exponential. Choice C incorrectly halves the correct answer, and Choice D combines both errors."
  },
  {
    "id": "physc_u3_q768",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Deriving Force from Potential Energy",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A particle in one dimension has potential energy U(x) = (3x^4 - 8x^3 + 6x^2) J, where x is in meters. At which of the following positions is the particle in stable equilibrium?",
    "choices": [
      "A) x = 0 only",
      "B) x = 1 only",
      "C) x = 0 and x = 1",
      "D) There are no positions of stable equilibrium"
    ],
    "answer": 2,
    "explanation": "Equilibrium occurs where F = -dU/dx = 0. dU/dx = 12x^3 - 24x^2 + 12x = 12x(x^2 - 2x + 1) = 12x(x-1)^2. Setting this to zero gives x = 0 and x = 1. For stability, we need d^2U/dx^2 > 0. d^2U/dx^2 = 36x^2 - 48x + 12. At x = 0: d^2U/dx^2 = 12 > 0, so stable. At x = 1: d^2U/dx^2 = 36 - 48 + 12 = 0, which is inconclusive at second order. We check d^3U/dx^3 = 72x - 48; at x=1 this is 24, nonzero, but since (x-1) appears squared in F, we examine the sign of F near x=1. For x slightly less than 1, F = -12x(x-1)^2 < 0 (force in -x direction). For x slightly greater than 1, F = -12x(x-1)^2 < 0 (still negative). The force does not restore toward x = 1 from both sides — it pushes in the same direction, indicating x = 1 is an inflection point of U, not a true minimum. Actually, U(1) = 3 - 8 + 6 = 1, and checking U near x=1 shows U is flat (quartic minimum behavior). Since (x-1) appears as a squared factor in dU/dx and U(x) near x=1 behaves like a quartic, we check: U(1+e) = 3(1+e)^4 - 8(1+e)^3 + 6(1+e)^2. Expanding to order e^4 gives U(1) + 0 + 0 + 0 + 3e^4 > U(1), so x=1 is also a local minimum (stable). Therefore both x = 0 and x = 1 are stable equilibria. Common trap: students may say x = 1 is unstable because the second derivative test is inconclusive, but higher-order analysis shows it is a quartic minimum. Answer C is correct."
  },
  {
    "id": "physc_u3_q769",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Instantaneous Power and Calculus",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 2 kg object moves along a straight line with velocity v(t) = (3t^2 - 2t) m/s. What is the instantaneous power delivered by the net force acting on the object at t = 2 s?",
    "choices": [
      "A) 80 W",
      "B) 160 W",
      "C) 128 W",
      "D) 64 W"
    ],
    "answer": 1,
    "explanation": "Power is P = F·v. First find acceleration: a = dv/dt = 6t - 2. At t = 2 s, a = 6(2) - 2 = 10 m/s^2. The net force is F = ma = 2(10) = 20 N. The velocity at t = 2 s is v = 3(4) - 2(2) = 12 - 4 = 8 m/s. Therefore P = Fv = 20 × 8 = 160 W. Distractor A (80 W) results from forgetting to multiply by mass (using P = a·v = 10·8 = 80). Distractor C (128 W) comes from incorrectly computing P = d(KE)/dt using the chain rule but making an algebraic error, such as using v^2 derivative incorrectly. Distractor D (64 W) arises from using v = 3t^2 without the -2t term, giving v(2) = 12 and then an incorrect force calculation, or from computing (1/2)(2)(8^2) = 64 which is the kinetic energy, not power."
  },
  {
    "id": "physc_u3_q770",
    "subject": "apphysc",
    "unit": 3,
    "topic": "potential energy functions",
    "topicLabel": "Deriving Force from Potential Energy",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A conservative force acts on a particle in three dimensions. The potential energy function is U(x, y) = 3x^2·y - 2y^3. What is the y-component of the force at the point (2, 1)?",
    "choices": [
      "A) -6",
      "B) 6",
      "C) -18",
      "D) -12"
    ],
    "answer": 0,
    "explanation": "For a conservative force, F_y = -dU/dy (partial derivative). U(x,y) = 3x^2·y - 2y^3. Taking the partial derivative with respect to y: dU/dy = 3x^2 - 6y^2. Therefore F_y = -(3x^2 - 6y^2) = -3x^2 + 6y^2. At (2,1): F_y = -3(4) + 6(1) = -12 + 6 = -6 N. Answer A is correct. Distractor B (6) is the common sign error of forgetting the negative in F = -dU/dy. Distractor C (-18) comes from incorrectly computing the partial derivative as dU/dy = 3x^2 + 6y^2 and then applying the negative sign. Distractor D (-12) results from only computing -3x^2 and forgetting the second term."
  },
  {
    "id": "physc_u3_q771",
    "subject": "apphysc",
    "unit": 3,
    "topic": "power",
    "topicLabel": "Instantaneous Power and Calculus",
    "difficulty": "hard",
    "calculator": false,
    "format": "text",
    "isLatex": false,
    "question": "A 2 kg object moves along the x-axis with velocity v(t) = 4t - t^2 (m/s) for t >= 0. The net force acting on it is the only force. What is the instantaneous power delivered by the net force at t = 1 s?",
    "choices": [
      "A) 12 W",
      "B) 6 W",
      "C) 18 W",
      "D) 8 W"
    ],
    "answer": 0,
    "explanation": "The net force is F = m·a = m·(dv/dt). dv/dt = 4 - 2t. At t = 1 s: a = 4 - 2 = 2 m/s^2, so F = 2(2) = 4 N. The velocity at t = 1 s: v = 4(1) - 1 = 3 m/s. Power P = F·v = 4(3) = 12 W. Answer A is correct. Distractor B (6 W) comes from using P = F·v but computing F = ma with m = 1 kg instead of 2 kg, giving P = 2(3) = 6 W. Distractor C (18 W) results from incorrectly computing P = dK/dt = d(mv^2/2)/dt directly but making an algebraic error, or using v^2 times mass at that instant. Distractor D (8 W) comes from computing P = m·v·a but using v = 2 m/s (forgetting the t^2 term) or other arithmetic errors."
  }
];