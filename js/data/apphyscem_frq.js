'use strict';
window.APPHYSCEM_FRQ = [
  {
    "id": "physc_u1_frq001",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Velocity from a Position Function Using Derivatives",
    "units": [
      1
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A particle moves along the x-axis. Its position as a function of time is given by x(t) = 3t³ − 6t² + 2, where x is in meters and t is in seconds. The particle starts at t = 0.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Derive an expression for the velocity of the particle as a function of time by differentiating x(t). Show your work.",
        "rubric": "Student earns 1 point for correctly differentiating x(t) = 3t³ − 6t² + 2 to obtain v(t) = dx/dt = 9t² − 12t."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using your expression from part (a), determine the time(s) at which the particle is instantaneously at rest. Show your work.",
        "rubric": "Student earns 1 point for setting v(t) = 9t² − 12t = 0, factoring to get t(9t − 12) = 0, and correctly identifying t = 0 s and t = 4/3 s (≈ 1.33 s) as the times when the particle is at rest."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Derive an expression for the acceleration of the particle as a function of time by differentiating v(t), and evaluate the acceleration at t = 1 s.",
        "rubric": "Student earns 1 point for correctly differentiating v(t) = 9t² − 12t to obtain a(t) = dv/dt = 18t − 12, and evaluating a(1) = 18(1) − 12 = 6 m/s²."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly takes the first derivative of x(t) = 3t³ − 6t² + 2 with respect to time to obtain v(t) = 9t² − 12t using the power rule.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "v(t) = 9t² − 12t",
          "dx/dt",
          "first derivative",
          "power rule",
          "differentiate x(t)",
          "9t² − 12t",
          "derivative of position",
          "velocity function",
          "bring down exponent",
          "multiply coefficient by exponent",
          "constant term vanishes",
          "derivative of 3t³ is 9t²",
          "derivative of 6t² is 12t"
        ],
        "fundamentalPrinciple": "Velocity is defined as the first derivative of position with respect to time: v(t) = dx/dt.",
        "proximity": {
          "cause": [
            "differentiate x(t) with respect to t",
            "apply power rule to each term"
          ],
          "connector": [
            "yields",
            "gives",
            "produces",
            "results in"
          ],
          "effect": [
            "v(t) = 9t² − 12t",
            "velocity function expressed in terms of t"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student sets v(t) = 0, correctly factors or uses the quadratic formula on 9t² − 12t = 0, and identifies both t = 0 s and t = 4/3 s (approximately 1.33 s) as times when the particle is instantaneously at rest.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "v(t) = 0",
          "9t² − 12t = 0",
          "t = 0",
          "t = 4/3",
          "t ≈ 1.33 s",
          "instantaneously at rest",
          "factor out t",
          "zero velocity",
          "set velocity equal to zero",
          "t(9t − 12) = 0",
          "9t − 12 = 0",
          "two solutions",
          "particle momentarily stopped"
        ],
        "fundamentalPrinciple": "A particle is instantaneously at rest when its velocity equals zero: v(t) = 0.",
        "proximity": {
          "cause": [
            "v(t) = 0",
            "velocity equals zero"
          ],
          "connector": [
            "indicates",
            "means",
            "corresponds to",
            "implies"
          ],
          "effect": [
            "particle at rest",
            "instantaneously at rest",
            "no motion at that instant",
            "particle momentarily stationary"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly differentiates v(t) = 9t² − 12t to obtain a(t) = dv/dt = 18t − 12, and correctly evaluates a(1) = 18(1) − 12 = 6 m/s².",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "a(t) = 18t − 12",
          "dv/dt",
          "second derivative",
          "d²x/dt²",
          "18t − 12",
          "a(1) = 6 m/s²",
          "6 m/s²",
          "differentiate velocity",
          "acceleration function",
          "derivative of 9t² is 18t",
          "derivative of 12t is 12",
          "substitute t = 1",
          "evaluate at t equals 1"
        ],
        "fundamentalPrinciple": "Acceleration is defined as the first derivative of velocity with respect to time, equivalently the second derivative of position: a(t) = dv/dt = d²x/dt².",
        "proximity": {
          "cause": [
            "differentiate v(t) = 9t² − 12t with respect to t",
            "apply power rule to velocity function"
          ],
          "connector": [
            "yields",
            "gives",
            "produces",
            "results in"
          ],
          "effect": [
            "a(t) = 18t − 12",
            "acceleration of 6 m/s² at t = 1 s"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u1_frq002",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Velocity from Acceleration Integration in 1D",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A particle moves along the x-axis. Its acceleration is given as a function of time by a(t) = 6t − 4, where a is in m/s² and t is in seconds. At t = 0, the particle's velocity is v₀ = 2 m/s and its position is x₀ = 0 m. Use calculus-based methods to answer the following questions.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Derive an expression for the velocity v(t) of the particle as a function of time by integrating the acceleration function. Use the initial condition v(0) = 2 m/s to determine the constant of integration.",
        "rubric": "Student earns the point by correctly integrating a(t) = 6t − 4 with respect to time to obtain v(t) = 3t² − 4t + 2, and explicitly applying the initial condition v(0) = 2 to find C = 2."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using your expression for v(t), find all times t > 0 at which the particle is instantaneously at rest (v = 0). Show your calculus-based work.",
        "rubric": "Student earns the point by setting v(t) = 3t² − 4t + 2 = 0 and correctly applying the quadratic formula or factoring, arriving at the discriminant b² − 4ac = 16 − 24 = −8 < 0, and concluding that no real solutions exist - the particle is never at rest for t > 0."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Using the derivative dv/dt, justify whether the speed of the particle is increasing or decreasing at t = 1 s. Your response must explicitly reference the signs of both v(t) and a(t) at t = 1 s.",
        "rubric": "Student earns the point by evaluating v(1) = 3(1)² − 4(1) + 2 = 1 m/s > 0 and a(1) = 6(1) − 4 = 2 m/s² > 0, then correctly reasoning that because velocity and acceleration have the same sign, the speed (magnitude of velocity) is increasing at t = 1 s."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly integrates a(t) = 6t − 4 to obtain v(t) = 3t² − 4t + C, then applies initial condition v(0) = 2 m/s to find C = 2, yielding v(t) = 3t² − 4t + 2.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "∫a dt",
          "∫(6t − 4) dt",
          "v(t) = 3t² − 4t + 2",
          "constant of integration",
          "initial condition v(0) = 2",
          "antiderivative of acceleration",
          "integrate acceleration",
          "C = 2",
          "v(t) = 3t^2 - 4t + 2",
          "indefinite integral",
          "velocity function",
          "kinematic integration",
          "v equals integral of a dt"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "integrating a(t) = 6t − 4 with respect to time",
            "applying initial condition v(0) = 2 m/s",
            "evaluating constant of integration C"
          ],
          "connector": [
            "yields",
            "results in",
            "gives",
            "produces"
          ],
          "effect": [
            "v(t) = 3t² − 4t + 2",
            "constant of integration C = 2 determined",
            "complete velocity function established"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Sets v(t) = 0, correctly evaluates the discriminant of 3t² − 4t + 2 = 0 as b² − 4ac = 16 − 24 = −8 < 0, and concludes the particle is never instantaneously at rest for t > 0.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "v(t) = 0",
          "3t² − 4t + 2 = 0",
          "quadratic formula",
          "discriminant",
          "b² − 4ac",
          "16 − 24 = −8",
          "negative discriminant",
          "no real roots",
          "never at rest",
          "no real solutions",
          "instantaneously at rest",
          "zero velocity",
          "particle never stops",
          "discriminant less than zero"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "setting v(t) = 0 and solving 3t² − 4t + 2 = 0",
            "computing discriminant b² − 4ac = 16 − 24 = −8",
            "negative discriminant value"
          ],
          "connector": [
            "implies",
            "means",
            "shows",
            "indicates"
          ],
          "effect": [
            "no real solutions exist",
            "particle is never instantaneously at rest",
            "v(t) never equals zero for t > 0",
            "velocity remains nonzero for all positive time"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Evaluates v(1) = 1 m/s > 0 and a(1) = dv/dt|_(t=1) = 2 m/s² > 0, then correctly justifies that same-sign velocity and acceleration means speed is increasing at t = 1 s.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "v(1) = 1 m/s",
          "a(1) = dv/dt = 2 m/s²",
          "dv/dt positive",
          "velocity and acceleration same sign",
          "speed increasing",
          "magnitude of velocity increasing",
          "both positive",
          "a(1) = 6(1) − 4 = 2",
          "speed is |v|",
          "same direction",
          "speeding up",
          "acceleration in direction of motion",
          "v(1) = 3(1)² − 4(1) + 2 = 1",
          "net force in direction of velocity",
          "velocity not changing sign"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "v(1) = 1 m/s > 0 and a(1) = 2 m/s² > 0",
            "velocity and acceleration are both positive at t = 1 s",
            "acceleration is in the same direction as velocity"
          ],
          "connector": [
            "means",
            "implies",
            "results in",
            "indicates"
          ],
          "effect": [
            "speed is increasing at t = 1 s",
            "magnitude of velocity is increasing",
            "particle is speeding up",
            "rate of change of speed is positive"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u1_frq003",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Calculus-Based 2D Motion with Non-Constant Acceleration",
    "units": [
      1
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A particle moves in the xy-plane. Its position as a function of time is given by the vector components:\n\nx(t) = 4t³ − 6t²\ny(t) = 3t² − 2t³\n\nwhere x and y are in meters and t is in seconds. The particle starts at the origin at t = 0.\n\n(a) Derive expressions for the x- and y-components of the particle's velocity and acceleration as functions of time using differentiation.\n\n(b) At t = 1 s, determine whether the speed of the particle is increasing or decreasing. Justify your answer using the dot product of the velocity and acceleration vectors.\n\n(c) Starting from the velocity components found in part (a), use integration to find the displacement of the particle from t = 0 to t = 2 s, and compute the magnitude of this displacement.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Derive expressions for the x- and y-components of velocity and acceleration as functions of time by differentiating x(t) and y(t).",
        "rubric": "Earns 1 point for correctly differentiating both position components to obtain vx(t) = 12t² − 12t, vy(t) = 6t − 6t², ax(t) = 24t − 12, and ay(t) = 6 − 12t using the power rule for derivatives."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "At t = 1 s, determine whether the speed of the particle is increasing or decreasing. Justify your answer by computing the dot product v · a.",
        "rubric": "Earns 1 point for evaluating v and a at t = 1 s (v = (0, 0) m/s and a = (12, −6) m/s²), correctly computing the dot product v · a = 0, and concluding that speed is neither increasing nor decreasing (instantaneously constant or the particle is at a momentary rest), with justification that the sign of v · a determines whether speed increases or decreases."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Integrate the velocity components from t = 0 to t = 2 s to find the displacement vector, then calculate the magnitude of the displacement.",
        "rubric": "Earns 1 point for correctly integrating vx(t) = 12t² − 12t and vy(t) = 6t − 6t² from 0 to 2 to obtain Δx = [4t³ − 6t²] from 0 to 2 = 32 − 24 = 8 m and Δy = [3t² − 2t³] from 0 to 2 = 12 − 16 = −4 m, then computing the magnitude |Δr| = √(8² + (−4)²) = √(64 + 16) = √80 = 4√5 ≈ 8.94 m."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates both x(t) and y(t) to obtain all four component functions: vx(t) = 12t² − 12t, vy(t) = 6t − 6t², ax(t) = 24t − 12, ay(t) = 6 − 12t using power rule differentiation.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "vx = 12t² − 12t",
          "vy = 6t − 6t²",
          "ax = 24t − 12",
          "ay = 6 − 12t",
          "dx/dt",
          "dy/dt",
          "d²x/dt²",
          "d²y/dt²",
          "power rule",
          "differentiation",
          "velocity component",
          "acceleration component",
          "first derivative of position",
          "second derivative of position",
          "polynomial differentiation"
        ],
        "fundamentalPrinciple": "Velocity is the first time derivative of position and acceleration is the second time derivative of position; v(t) = dr/dt, a(t) = dv/dt = d²r/dt².",
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Evaluates velocity and acceleration at t = 1 s, computes the dot product v · a, correctly identifies v = (0, 0) m/s at t = 1 s, and concludes speed is instantaneously zero or not changing based on v · a = 0.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "dot product",
          "v · a",
          "v · a = 0",
          "speed increasing",
          "speed decreasing",
          "instantaneously at rest",
          "v = (0, 0) m/s",
          "velocity zero at t = 1 s",
          "sign of dot product",
          "d|v|/dt = (v · a)/|v|",
          "rate of change of speed",
          "vx(1) = 0",
          "vy(1) = 0",
          "a = (12, −6) m/s²",
          "speed neither increasing nor decreasing"
        ],
        "fundamentalPrinciple": "The rate of change of speed equals the scalar projection of acceleration onto velocity: d|v|/dt = (v · a)/|v|. When v · a > 0 speed increases, when v · a < 0 speed decreases, and when v · a = 0 (or v = 0) speed is instantaneously not changing.",
        "proximity": {
          "cause": [
            "dot product v · a equals zero",
            "velocity vector is zero at t = 1 s",
            "vx and vy are both zero at t = 1 s"
          ],
          "connector": [
            "indicates",
            "means",
            "results in",
            "implies",
            "shows that"
          ],
          "effect": [
            "speed is not increasing",
            "speed is not decreasing",
            "instantaneous rest",
            "rate of change of speed is zero",
            "speed is momentarily constant"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly integrates vx and vy from 0 to 2 s to find Δx = 8 m and Δy = −4 m, then computes |Δr| = √80 = 4√5 ≈ 8.94 m.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "∫vx dt",
          "∫vy dt",
          "Δx = 8 m",
          "Δy = −4 m",
          "displacement magnitude",
          "|Δr| = √80",
          "4√5",
          "8.94 m",
          "definite integral",
          "∫₀² vx dt",
          "antiderivative of velocity",
          "displacement vector components",
          "Pythagorean theorem for magnitude",
          "√(Δx² + Δy²)",
          "∫₀² vy dt"
        ],
        "fundamentalPrinciple": "Displacement is the definite integral of velocity over a time interval: Δr = ∫v dt. The magnitude of the 2D displacement vector is |Δr| = √(Δx² + Δy²).",
        "proximity": null
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u1_frq004",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Variable Acceleration and Projectile Launch from a Moving Platform",
    "units": [
      1
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A small projectile launcher sits on a cart that moves along a straight horizontal track. At time t = 0, the cart has velocity v₀ = 4.0 m/s in the +x direction. The cart then decelerates due to friction; its velocity as a function of time is described by the expression v_cart(t) = 4.0 − 3.0t² (in m/s, with t in seconds). At exactly t = 1.0 s, the launcher fires a ball with a muzzle speed of 10.0 m/s directed at an angle of 37° above the horizontal, measured relative to the ground. The ball is launched from a height of 0 m above the ground (ground level). Take g = 10.0 m/s² downward and ignore air resistance. Use sin 37° = 0.60 and cos 37° = 0.80.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using calculus, determine the acceleration of the cart as a function of time, a_cart(t), and find the position of the cart at t = 1.0 s, given that the cart starts at x = 0 at t = 0.",
        "rubric": "Differentiate v_cart(t) = 4.0 − 3.0t² with respect to time to obtain a_cart(t) = −6.0t m/s². Then integrate v_cart(t) from 0 to 1.0 s to get position: x(t) = 4.0t − t³; at t = 1.0 s, x = 4.0(1.0) − (1.0)³ = 3.0 m."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Determine the velocity of the cart at the instant the ball is fired (t = 1.0 s), and then find the initial velocity components of the ball relative to the ground at the moment of launch.",
        "rubric": "v_cart at t = 1.0 s: v_cart = 4.0 − 3.0(1.0)² = 1.0 m/s. The ball's velocity relative to ground = muzzle velocity relative to cart plus cart velocity. The muzzle velocity components relative to cart: v_x,muzzle = 10.0 cos37° = 8.0 m/s, v_y,muzzle = 10.0 sin37° = 6.0 m/s. Relative to ground: v_x0 = 8.0 + 1.0 = 9.0 m/s, v_y0 = 6.0 m/s."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using the initial velocity components of the ball relative to the ground found in part (b), determine the time the ball is in the air and the horizontal range of the ball (measured from its launch point) when it returns to ground level.",
        "rubric": "Vertical motion: y(t) = v_y0·t − ½g·t² = 0 at landing. 6.0t − 5.0t² = 0 → t(6.0 − 5.0t) = 0 → t = 1.2 s (non-zero solution). Horizontal range: Δx = v_x0·t = 9.0 × 1.2 = 10.8 m."
      },
      {
        "label": "d",
        "command": "Explain",
        "question": "A student claims that the horizontal range of the ball would be the same whether or not the cart was moving at the moment of launch, as long as the muzzle speed and launch angle (both measured relative to the ground) remain 10.0 m/s and 37°. Explain whether this claim is correct, referencing the principle of relative motion and the independence of horizontal and vertical motion components.",
        "rubric": "The student's claim is correct only if the launch parameters (speed and angle) are already measured relative to the ground. Since projectile motion depends solely on the initial velocity components relative to the ground, and horizontal/vertical motions are independent once launched, any additional cart velocity is already incorporated into the ground-frame components. The relative motion principle means only the ground-frame initial conditions determine trajectory; the cart's motion before launch is irrelevant once those ground-frame components are set."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "After the ball is launched at t = 1.0 s, the cart continues to decelerate. Using calculus, find the total distance the cart travels from t = 1.0 s until it momentarily stops, and determine the time at which it stops.",
        "rubric": "Set v_cart(t) = 0: 4.0 − 3.0t² = 0 → t² = 4/3 → t = 2/√3 ≈ 1.155 s. Distance from t = 1.0 s to t = 2/√3 s: integrate v_cart from 1.0 to 2/√3: ∫[4.0 − 3.0t²]dt = [4.0t − t³] evaluated from 1.0 to 2/√3. At t = 2/√3: 4(2/√3) − (2/√3)³ = 8/√3 − 8/(3√3) = 24/(3√3) − 8/(3√3) = 16/(3√3) ≈ 3.079 m. At t = 1.0: 4.0 − 1.0 = 3.0 m. Distance = 3.079 − 3.0 ≈ 0.079 m (approximately 16/(3√3) − 3 m)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates v_cart(t) = 4.0 − 3.0t² to obtain a_cart(t) = −6.0t m/s², and correctly integrates v_cart(t) from 0 to 1.0 s to find x(1.0) = 3.0 m.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dv/dt",
          "derivative of velocity",
          "a_cart = -6.0t",
          "differentiate v_cart",
          "integrate v_cart",
          "∫v dt",
          "position 3.0 m",
          "x = 4t - t³",
          "antiderivative of velocity",
          "acceleration function of time",
          "power rule",
          "definite integral from 0 to 1"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "v_cart(t) = 4.0 - 3.0t²",
            "differentiation with respect to time"
          ],
          "connector": [
            "yields",
            "produces",
            "gives"
          ],
          "effect": [
            "a_cart(t) = -6.0t m/s²",
            "position x = 3.0 m at t = 1.0 s"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies relative motion to find v_cart(1.0) = 1.0 m/s, then adds cart velocity to muzzle velocity components to get ground-frame launch velocity: v_x0 = 9.0 m/s, v_y0 = 6.0 m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "relative motion principle",
          "v_cart = 1.0 m/s",
          "muzzle velocity components",
          "v_x0 = 9.0 m/s",
          "v_y0 = 6.0 m/s",
          "vector addition of velocities",
          "cos37° = 0.80",
          "sin37° = 0.60",
          "ground-frame reference",
          "velocity components at launch",
          "v_x,muzzle = 8.0 m/s",
          "superposition of velocities"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "cart velocity at t=1.0 s",
            "muzzle velocity components relative to cart"
          ],
          "connector": [
            "adds to",
            "combined with",
            "superimposed on"
          ],
          "effect": [
            "ground-frame launch velocity",
            "v_x0 = 9.0 m/s",
            "v_y0 = 6.0 m/s"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly uses projectile motion equations to find time of flight t = 1.2 s and horizontal range = 10.8 m from launch point.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "y = v_y0 t - 1/2 g t²",
          "time of flight 1.2 s",
          "horizontal range 10.8 m",
          "sets y = 0 for landing",
          "kinematic equations for projectile",
          "Δx = v_x0 · t",
          "parabolic trajectory",
          "quadratic factored to find t",
          "projectile motion independence",
          "g = 10 m/s² downward",
          "6t - 5t² = 0",
          "non-zero time solution"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "initial vertical velocity v_y0 = 6.0 m/s",
            "gravitational acceleration g = 10 m/s²"
          ],
          "connector": [
            "determines",
            "yields",
            "gives"
          ],
          "effect": [
            "time of flight t = 1.2 s",
            "horizontal range 10.8 m"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly explains that the claim is valid because projectile trajectory depends only on ground-frame initial velocity components; the independence of horizontal and vertical motion and the relative motion principle confirm that cart motion before launch does not alter the trajectory once ground-frame components are fixed.",
        "partLabel": "d",
        "skill": "explain",
        "keywords": [
          "relative motion principle",
          "ground-frame reference frame",
          "independence of horizontal and vertical components",
          "initial velocity components determine trajectory",
          "ground-frame launch velocity fixed",
          "superposition of velocities",
          "claim is correct",
          "projectile path unchanged",
          "cart motion irrelevant after launch",
          "trajectory depends on initial conditions",
          "horizontal range identical",
          "Galilean relativity"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "ground-frame initial velocity components",
            "independence of horizontal and vertical motion"
          ],
          "connector": [
            "determines",
            "dictates",
            "results in"
          ],
          "effect": [
            "identical trajectory",
            "same horizontal range",
            "same time of flight"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly sets v_cart(t) = 0 to find stop time t = 2/√3 ≈ 1.155 s, then evaluates the definite integral ∫₁^(2/√3) v_cart dt to find the distance traveled ≈ 0.079 m (16/(3√3) − 3 m).",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "set v_cart = 0 to find stop time",
          "t = 2/√3 ≈ 1.155 s",
          "definite integral of velocity",
          "∫v_cart dt from 1 to 2/√3",
          "distance traveled after t = 1.0 s",
          "antiderivative 4t - t³",
          "upper limit of integration 2/√3",
          "distance ≈ 0.079 m",
          "16/(3√3) - 3 m",
          "displacement while decelerating",
          "v positive throughout interval",
          "cart momentarily at rest"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "v_cart(t) = 4.0 - 3.0t² set equal to zero",
            "definite integral of v_cart from t=1.0 to t=2/√3"
          ],
          "connector": [
            "yields",
            "gives",
            "determines"
          ],
          "effect": [
            "stop time t = 2/√3 ≈ 1.155 s",
            "distance ≈ 0.079 m traveled after launch"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u1_frq005",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Variable-Acceleration Projectile with Calculus-Based Kinematics",
    "units": [
      1
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A small drone is launched from a rooftop at height H = 80 m above the ground. At time t = 0, the drone has an initial horizontal velocity v₀ₓ = 12 m/s and zero vertical velocity. After launch, a horizontal thruster produces a time-varying horizontal acceleration given by aₓ(t) = 6t − 4 (in m/s²), while the only vertical acceleration is due to gravity, aᵧ = −g = −10 m/s² (downward positive taken as negative). A ground-level observer stands at a horizontal distance d = 50 m from the base of the building directly below the launch point and moves toward the building at a constant speed u = 2 m/s starting at t = 0. Use g = 10 m/s² throughout.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using integration of the horizontal acceleration function aₓ(t) = 6t − 4, derive expressions for the horizontal velocity vₓ(t) and horizontal position x(t) of the drone as functions of time. Apply the appropriate initial conditions.",
        "rubric": "Student must integrate aₓ(t) = 6t − 4 to obtain vₓ(t) = 3t² − 4t + 12 (applying v₀ₓ = 12 m/s), then integrate again to obtain x(t) = t³ − 2t² + 12t. Both integrations must be shown with constants of integration evaluated using initial conditions x(0) = 0 and vₓ(0) = 12 m/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Determine the time t_land at which the drone strikes the ground. Then calculate the horizontal position x(t_land) of the drone at the moment of impact. (Hint: Use the vertical kinematic equation with aᵧ = −10 m/s² and y₀ = 80 m.)",
        "rubric": "Student sets y(t) = 80 − ½(10)t² = 0, solving to get t_land = 4 s. Then substitutes into x(t) = t³ − 2t² + 12t: x(4) = 64 − 32 + 48 = 80 m."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The horizontal acceleration has a zero crossing at some time t*. Find t* by setting aₓ(t*) = 0, and explain using the derivative of velocity (dv/dt) what physical significance this moment has for the drone's horizontal motion.",
        "rubric": "Student sets 6t − 4 = 0 to get t* = 2/3 s. Explanation must state that dv/dt = aₓ = 0 at t* means horizontal velocity has a local minimum (the horizontal speed is momentarily not changing / instantaneous rate of change of horizontal velocity is zero), and since the second derivative of vₓ with respect to t is positive (d²vₓ/dt² = 6 > 0), this is a minimum of horizontal velocity, meaning vₓ is at its lowest value before increasing again."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "The observer on the ground starts at x_obs = 50 m (measured from the base of the building) and moves toward the building at u = 2 m/s, so x_obs(t) = 50 − 2t. Using relative motion, determine the position of the drone relative to the observer, x_rel(t) = x_drone(t) − x_obs(t), and find the time(s) at which the drone is directly above the observer.",
        "rubric": "Student writes x_rel(t) = (t³ − 2t² + 12t) − (50 − 2t) = t³ − 2t² + 14t − 50. Sets x_rel = 0: t³ − 2t² + 14t − 50 = 0. Testing t = 2: 8 − 8 + 28 − 50 = −22 ≠ 0. Testing t ≈ 2.5 or using numerical/factoring methods - the real root is approximately t ≈ 2.83 s (acceptable range 2.8-2.9 s). Credit earned for correct expression of x_rel(t) = t³ − 2t² + 14t − 50 AND setting it equal to zero with a valid solution method yielding t ≈ 2.83 s."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "A student claims that the total horizontal displacement of the drone can be found by computing ∫₀^(t_land) vₓ(t) dt rather than evaluating x(t_land) directly, and that both methods must give the same result. Justify whether the student is correct, referencing the fundamental theorem of calculus and the relationship between velocity and displacement.",
        "rubric": "Student must correctly state that by the fundamental theorem of calculus, ∫₀^T vₓ(t) dt = x(T) − x(0), and since x(0) = 0 the integral equals x(T) = x(t_land). Evaluating ∫₀⁴ (3t² − 4t + 12) dt = [t³ − 2t² + 12t]₀⁴ = 64 − 32 + 48 = 80 m confirms the same result. Student must explicitly cite the antiderivative relationship dx/dt = vₓ or the fundamental theorem of calculus connecting the integral of velocity to displacement."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly integrates aₓ(t) = 6t − 4 twice with proper initial conditions to obtain vₓ(t) = 3t² − 4t + 12 and x(t) = t³ − 2t² + 12t.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "integrate aₓ(t)",
          "antiderivative of 6t minus 4",
          "vₓ(t) = 3t² − 4t + 12",
          "x(t) = t³ − 2t² + 12t",
          "constant of integration",
          "initial condition v₀ₓ = 12",
          "x(0) = 0",
          "∫(6t−4)dt",
          "indefinite integral of acceleration",
          "integrate velocity to get position",
          "apply initial conditions",
          "evaluate constant C"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "integrating aₓ(t) = 6t − 4",
            "applying initial condition vₓ(0) = 12"
          ],
          "connector": [
            "yields",
            "produces",
            "gives"
          ],
          "effect": [
            "vₓ(t) = 3t² − 4t + 12",
            "x(t) = t³ − 2t² + 12t",
            "position as a function of time"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly solves for t_land = 4 s using vertical free-fall from H = 80 m and substitutes into x(t) to obtain x = 80 m.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "y(t) = 80 − 5t²",
          "t_land = 4 s",
          "free fall",
          "vertical kinematic equation",
          "x(4) = 80 m",
          "½gt²",
          "sets y equal to zero",
          "time of flight",
          "horizontal range at impact",
          "substitution into x(t)",
          "y₀ = 80 m",
          "ground level y = 0"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "y(t) = 80 − 5t² = 0",
            "drone reaches ground level"
          ],
          "connector": [
            "gives",
            "yields",
            "results in"
          ],
          "effect": [
            "t_land = 4 s",
            "horizontal impact position x = 80 m",
            "time of flight determined"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Finds t* = 2/3 s by setting aₓ = 0 and explains that dv/dt = 0 indicates a minimum of horizontal velocity because the second derivative is positive.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "t* = 2/3 s",
          "dv/dt = 0",
          "aₓ = 0",
          "minimum horizontal velocity",
          "second derivative positive",
          "d²vₓ/dt² = 6",
          "instantaneous rate of change of velocity is zero",
          "local minimum of vₓ",
          "horizontal speed momentarily not changing",
          "zero crossing of acceleration",
          "6t − 4 = 0",
          "concave up velocity curve"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "aₓ(t) = 0",
            "dv/dt = 0"
          ],
          "connector": [
            "indicates",
            "means",
            "corresponds to"
          ],
          "effect": [
            "local minimum of horizontal velocity",
            "horizontal velocity stops decreasing and begins increasing",
            "minimum vₓ at t* = 2/3 s"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly writes x_rel(t) = t³ − 2t² + 14t − 50 using relative motion and finds the real root t ≈ 2.83 s.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "relative position",
          "x_rel = x_drone − x_obs",
          "t³ − 2t² + 14t − 50",
          "x_obs(t) = 50 − 2t",
          "sets x_rel = 0",
          "t ≈ 2.83 s",
          "directly above observer",
          "relative displacement equals zero",
          "observer reference frame",
          "subtracts observer position from drone position",
          "cubic equation root",
          "numerical solution method"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "x_rel(t) = 0",
            "drone and observer at same horizontal position"
          ],
          "connector": [
            "means",
            "results in",
            "indicates"
          ],
          "effect": [
            "drone is directly above observer",
            "horizontal separation is zero",
            "t ≈ 2.83 s"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Justifies that ∫₀⁴ vₓ(t) dt = x(4) − x(0) = 80 m by explicitly invoking the fundamental theorem of calculus and the antiderivative relationship dx/dt = vₓ.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "fundamental theorem of calculus",
          "∫₀^T vₓ dt = x(T) − x(0)",
          "dx/dt = vₓ",
          "antiderivative of velocity is position",
          "displacement equals integral of velocity",
          "∫₀⁴ (3t²−4t+12) dt = 80",
          "[t³−2t²+12t]₀⁴",
          "both methods yield same result",
          "net horizontal displacement",
          "student is correct",
          "velocity is rate of change of position",
          "area under velocity-time curve equals displacement"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "integral of velocity over time interval",
            "∫vₓ dt from 0 to t_land"
          ],
          "connector": [
            "equals",
            "gives",
            "yields"
          ],
          "effect": [
            "net horizontal displacement",
            "x(T) − x(0) = 80 m",
            "same result as direct evaluation of x(t_land)"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u2_frq006",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Block on a Rough Inclined Plane - Free Body Diagram and Newton's Second Law",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A block of mass m = 4.0 kg is placed on a fixed inclined plane that makes an angle θ = 30° with the horizontal. The coefficient of kinetic friction between the block and the surface is μk = 0.20. The block is given a brief push and then released, sliding down the incline. Take g = 10 m/s².\n\nAnswer each part for the block as it slides down the incline after the push.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Draw and describe a complete free body diagram for the block as it slides down the incline. Identify every force acting on the block, giving the name of each force, its direction, and the object exerting it.",
        "rubric": "Student earns the point by correctly identifying all three forces: (1) gravitational force mg directed straight downward exerted by Earth, (2) normal force N directed perpendicular to the incline surface outward exerted by the incline, and (3) kinetic friction force fk directed up the incline (opposing motion) exerted by the incline surface. All three must be present with correct directions."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using Newton's second law in component form, write the differential equation of motion (in the form m dv/dt = ) for the block along the incline direction, and solve for the magnitude of the block's acceleration a as it slides down.",
        "rubric": "Student earns the point by correctly applying Newton's second law along the incline: m(dv/dt) = mg sinθ − μk mg cosθ, then solving to get a = g(sinθ − μk cosθ) = 10(sin30° − 0.20·cos30°) = 10(0.500 − 0.173) ≈ 3.27 m/s² ≈ 3.3 m/s²."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student claims that if the angle θ were decreased sufficiently, the block would not slide even if given the same push, eventually coming to rest on the incline. Justify whether this claim is correct using the expression for acceleration derived in part (b) and the condition for the net force along the incline.",
        "rubric": "Student earns the point by recognizing that when mg sinθ < fk = μk mg cosθ, i.e., tanθ < μk, the net force along the incline is directed up the incline (opposing any downward motion), so the block decelerates and comes to rest; since static friction can then hold it, the claim is correct."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies all three forces in the free body diagram: gravitational force (weight) mg downward, normal force N perpendicular to incline surface, and kinetic friction fk directed up the incline opposing sliding motion.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "gravitational force",
          "weight mg downward",
          "normal force perpendicular to incline",
          "kinetic friction up the incline",
          "opposing motion",
          "free body diagram",
          "three forces",
          "friction opposes sliding",
          "normal force exerted by surface",
          "Earth exerts gravity",
          "incline exerts normal force",
          "contact force",
          "force diagram"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student applies Newton's second law in component form along the incline, writes m(dv/dt) = mg sinθ − μk mg cosθ, and correctly solves for acceleration a = g(sinθ − μk cosθ) ≈ 3.3 m/s².",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Newton's second law",
          "ΣF = ma",
          "m dv/dt",
          "mg sinθ",
          "μk mg cosθ",
          "a = g(sinθ − μk cosθ)",
          "component along incline",
          "net force along incline",
          "3.3 m/s²",
          "3.27 m/s²",
          "kinetic friction force",
          "incline component of gravity",
          "differential equation of motion"
        ],
        "fundamentalPrinciple": true,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student justifies the claim by showing that when tanθ < μk (i.e., mg sinθ < μk mg cosθ), the net force along the incline opposes downward motion, causing deceleration to rest, and static friction maintains equilibrium.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "tanθ < μk",
          "mg sinθ < μk mg cosθ",
          "net force opposes motion",
          "deceleration along incline",
          "block comes to rest",
          "static friction maintains equilibrium",
          "friction force exceeds gravitational component along incline",
          "negative acceleration along incline",
          "net force directed up the incline",
          "angle of repose",
          "gravitational component less than friction",
          "kinetic friction decelerates block"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "tanθ < μk",
            "mg sinθ < μk mg cosθ",
            "friction force exceeds gravitational component along incline"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "net force directed up the incline",
            "block decelerates",
            "block comes to rest",
            "static friction maintains equilibrium"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u2_frq007",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Circular Motion on a Banked Curve with Friction",
    "units": [
      2
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A car of mass m travels at constant speed v around a circular banked curve of radius R. The road is banked at angle θ above the horizontal, and the coefficient of static friction between the tires and the road is μs. The car does not skid. A coordinate system is defined with the x-axis pointing toward the center of the circular path (horizontal, inward) and the y-axis pointing vertically upward. Gravitational acceleration is g.\n\nFor parts (a) and (b), consider the general case where friction is present. For part (c), consider the special case of the ideal banking angle where no friction is required.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Draw and label a free body diagram of the car as seen from behind (looking along the direction of travel). Identify all forces acting on the car, indicating their directions, and explain why the net vertical acceleration is zero while the net horizontal acceleration is directed toward the center of the curve.",
        "rubric": "Earns 1 point for correctly identifying the normal force N perpendicular to the banked surface (directed up and inward), the weight mg directed straight downward, and the static friction force fs directed up the bank (inward and upward) for a car traveling at or below the ideal speed. The student must state that vertical equilibrium (ay = 0) requires the vertical components of N and fs to balance mg, while the horizontal components of N and fs provide the centripetal acceleration ac = v²/R directed toward the center, consistent with Newton's second law in the radial direction: ΣFx = mv²/R."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using Newton's second law applied to both the vertical and horizontal (radial) directions, derive an expression for the normal force N acting on the car in terms of m, g, θ, v, R, and μs. Assume the car is on the verge of sliding down the bank (friction acts up the incline).",
        "rubric": "Earns 1 point for correctly applying Newton's second law in both directions and solving for N. Vertical equation: N cosθ + fs sinθ − mg = 0, where fs = μsN. Substituting: N cosθ + μsN sinθ = mg, so N(cosθ + μs sinθ) = mg, giving N = mg / (cosθ + μs sinθ). The radial equation ΣF = mv²/R must be referenced: N sinθ − fs cosθ = mv²/R, consistent with the setup. Full credit requires correct algebraic manipulation isolating N."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "For the frictionless (ideal) banking case, show that the ideal banking angle θ_ideal satisfies tan(θ_ideal) = v²/(Rg), and explain using Newton's second law why this angle produces zero friction force. Then determine the units of v²/(Rg) to confirm it is dimensionless.",
        "rubric": "Earns 1 point for correctly deriving tan(θ_ideal) = v²/(Rg) from the frictionless equations: vertical equilibrium N cosθ = mg and radial Newton's second law N sinθ = mv²/R; dividing these equations yields sinθ/cosθ = tanθ = v²/(Rg). Student must state that at this specific angle the normal force alone supplies both the vertical support and the centripetal force mv²/R, requiring zero static friction force (fs = 0). Unit check: [v²/(Rg)] = (m²/s²)/((m)(m/s²)) = dimensionless, confirming tanθ is unitless."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct free body diagram with normal force perpendicular to banked surface, weight mg downward, static friction up the bank; correct explanation that vertical components sum to zero (ay = 0) and horizontal components provide centripetal acceleration v²/R toward center via Newton's second law.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "normal force perpendicular to banked surface",
          "weight mg directed downward",
          "static friction force up the incline",
          "centripetal acceleration v²/R toward center",
          "net vertical force zero ay = 0",
          "ΣFx = mv²/R radial direction",
          "Newton's second law radial direction",
          "free body diagram banked curve",
          "vertical equilibrium component balance",
          "horizontal net force directed toward center",
          "N perpendicular to road surface",
          "inward horizontal component of normal force",
          "friction directed up the bank inward and upward",
          "no vertical acceleration constant speed",
          "centripetal force provided by horizontal components"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "horizontal components of normal force and static friction acting inward"
          ],
          "connector": [
            "provide",
            "result in",
            "supply"
          ],
          "effect": [
            "centripetal acceleration v²/R toward center",
            "net inward force mv²/R satisfying Newton's second law"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct derivation of N = mg / (cosθ + μs sinθ) by applying Newton's second law vertically (N cosθ + μsN sinθ = mg) and referencing the radial equation (N sinθ − μsN cosθ = mv²/R); correct algebraic isolation of N.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "N cosθ + μs N sinθ = mg vertical equation",
          "N = mg divided by cosθ + μs sinθ",
          "static friction fs = μsN substitution",
          "vertical equilibrium force balance",
          "radial Newton's second law centripetal",
          "N sinθ − μsN cosθ = mv²/R",
          "normal force expression banked curve friction",
          "static friction coefficient μs on the verge of sliding",
          "Newton's second law applied in two perpendicular directions",
          "algebraic isolation of normal force N",
          "factoring N from vertical equation",
          "N(cosθ + μs sinθ) = mg factored form",
          "car on verge of sliding down bank",
          "friction directed up the incline resisting sliding",
          "component decomposition along x and y axes"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "static friction force fs = μsN acting up the bank"
          ],
          "connector": [
            "contributes to",
            "adds to",
            "assists in balancing"
          ],
          "effect": [
            "vertical force balance with weight mg",
            "N(cosθ + μs sinθ) = mg leading to N = mg/(cosθ + μs sinθ)"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct derivation of tan(θ_ideal) = v²/(Rg) by dividing the frictionless radial equation N sinθ = mv²/R by the vertical equation N cosθ = mg; correct justification that fs = 0 because normal force alone supplies centripetal force and vertical support; correct unit analysis confirming v²/(Rg) is dimensionless.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "tan θ_ideal = v²/(Rg) ideal banking condition",
          "N sinθ = mv²/R frictionless radial equation",
          "N cosθ = mg frictionless vertical equation",
          "dividing radial equation by vertical equation cancels N",
          "frictionless ideal banking angle derivation",
          "fs = 0 zero static friction required",
          "normal force alone provides centripetal force mv²/R",
          "dimensionless unit check v²/(Rg)",
          "tanθ unitless ratio confirms angle expression",
          "ideal speed no friction needed at this angle",
          "sinθ over cosθ equals tanθ algebraic step",
          "N cancels when dividing two Newton's law equations",
          "unit analysis m²/s² divided by m times m/s²",
          "vertical support and centripetal force from N alone",
          "no tendency to slide up or down the bank at ideal angle"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "banking angle equal to ideal angle θ_ideal where tanθ = v²/(Rg)"
          ],
          "connector": [
            "results in",
            "causes",
            "means that"
          ],
          "effect": [
            "zero static friction force required fs = 0",
            "normal force alone provides mv²/R centripetal force and balances mg vertically"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u2_frq008",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Conical Pendulum with Velocity-Dependent Drag in a Rotating Frame",
    "units": [
      2
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A small sphere of mass m is attached to a massless string of length L and moves in a horizontal circle of radius r on a frictionless surface inside a large rotating platform. The platform rotates at constant angular velocity ω about a vertical axis. An observer standing on the rotating platform observes the sphere to be stationary. A second observer in an inertial (lab) frame watches the sphere undergo uniform circular motion. The sphere also experiences a small velocity-dependent drag force of magnitude F_d = bv, where b is a positive drag coefficient and v is the speed of the sphere as measured in the inertial frame. For parts (a) and (b), treat the drag force as negligible (b ≈ 0). For part (c), restore the drag force.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "From the perspective of the non-inertial rotating reference frame, the sphere appears stationary. Explain, citing Newton's laws and the concept of a fictitious force, why the non-inertial observer must introduce a pseudo-force to account for the sphere's equilibrium, and identify the direction and magnitude of that pseudo-force in terms of m, ω, and r.",
        "rubric": "Earns 1 point for correctly identifying the centrifugal pseudo-force (magnitude mω²r, directed radially outward) as the fictitious force that the non-inertial observer introduces to apply Newton's first law in the rotating frame, and for stating that in the inertial frame no such force exists and the string tension provides the net centripetal force."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the inertial (lab) frame analysis and Newton's second law in its differential form, derive an expression for the tension T in the string as a function of m, ω, and r. Then write the equation of motion as a second-order differential equation in polar coordinates for the radial coordinate r(t), and verify that r = constant is a valid solution when T = mω²r.",
        "rubric": "Earns 1 point for correctly applying Newton's second law in the radial direction (ΣF_r = m·a_r = −mω²r, so T = mω²r), writing the radial equation of motion m(r̈ − rθ̇²) = −T, substituting T = mω²r and θ̇ = ω to obtain r̈ = 0, and concluding r = constant satisfies the differential equation."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Now restore the drag force F_d = bv acting opposite to the sphere's instantaneous velocity in the inertial frame, where v = rω is the tangential speed. Write a differential equation governing the tangential component of the sphere's motion. Without solving it fully, justify using calculus-based reasoning why the sphere cannot maintain uniform circular motion at fixed radius r, and describe qualitatively how r(t) evolves over time.",
        "rubric": "Earns 1 point for writing the tangential equation of motion m·(dv/dt) = −bv (or equivalently m·r·(dω/dt) = −brω, giving dω/dt = −(b/m)ω), recognizing this implies ω decays exponentially as ω(t) = ω₀e^(−bt/m), and justifying that as ω decreases the centripetal acceleration rω² decreases below T/m causing a net inward force, so r(t) decreases (the sphere spirals inward)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies the centrifugal fictitious pseudo-force of magnitude mω²r directed radially outward in the rotating frame, invokes Newton's first law to explain apparent equilibrium in the non-inertial frame, and contrasts this with the inertial frame where the string tension alone supplies the centripetal acceleration.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "centrifugal force",
          "fictitious force",
          "pseudo-force",
          "non-inertial reference frame",
          "rotating frame",
          "mω²r",
          "radially outward",
          "Newton's first law",
          "apparent equilibrium",
          "centripetal acceleration",
          "string tension",
          "inertial frame contrast",
          "net radial force zero"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "rotating reference frame",
            "non-inertial frame",
            "angular velocity ω"
          ],
          "connector": [
            "requires",
            "introduces",
            "results in"
          ],
          "effect": [
            "centrifugal pseudo-force",
            "fictitious force mω²r outward",
            "apparent equilibrium of sphere"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly applies Newton's second law in the radial direction to obtain T = mω²r, writes the radial differential equation of motion m(r̈ − rθ̇²) = −T in polar coordinates, substitutes T = mω²r and θ̇ = ω to obtain r̈ = 0, and explicitly verifies r = constant is a valid solution.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Newton's second law",
          "ΣF = ma",
          "radial equation of motion",
          "T = mω²r",
          "m(r̈ − rθ̇²) = −T",
          "r̈ = 0",
          "polar coordinates",
          "centripetal force",
          "second-order differential equation",
          "r = constant",
          "radial acceleration",
          "θ̇ = ω",
          "uniform circular motion verification"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "string tension T",
            "centripetal requirement",
            "uniform circular motion"
          ],
          "connector": [
            "gives",
            "yields",
            "results in"
          ],
          "effect": [
            "T = mω²r",
            "r̈ = 0",
            "constant radius solution verified"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student writes the tangential differential equation m·(dv/dt) = −bv or equivalently m·(dω/dt) = −bω, recognizes the exponential decay solution ω(t) = ω₀e^(−bt/m) from separation of variables or linear ODE reasoning, argues that decaying ω means centripetal acceleration rω² becomes insufficient to maintain circular orbit, and concludes r(t) decreases as the sphere spirals inward.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "drag force F_d = bv",
          "tangential equation of motion",
          "m dv/dt = −bv",
          "dω/dt = −(b/m)ω",
          "exponential decay",
          "ω(t) = ω₀e^(−bt/m)",
          "centripetal acceleration decreases",
          "net inward force",
          "spirals inward",
          "r(t) decreases",
          "separation of variables",
          "velocity-dependent damping",
          "tangential deceleration",
          "insufficient centripetal force"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "velocity-dependent drag force bv",
            "tangential deceleration",
            "decreasing angular velocity"
          ],
          "connector": [
            "causes",
            "leads to",
            "results in"
          ],
          "effect": [
            "centripetal acceleration rω² insufficient",
            "net inward radial force",
            "radius r(t) decreases, sphere spirals inward"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u2_frq009",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Block on a Rotating Turntable with Friction and Non-Inertial Analysis",
    "units": [
      2
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A small block of mass m = 0.50 kg is placed on a horizontal turntable at a distance r = 0.30 m from the rotation axis. The turntable starts from rest and its angular velocity increases at a constant rate α = 2.0 rad/s² (angular acceleration). The coefficient of static friction between the block and the turntable surface is μs = 0.60, and the coefficient of kinetic friction is μk = 0.40. The turntable surface is horizontal and g = 9.8 m/s². As the turntable spins up, the block must be kept in place by static friction. At some critical angular velocity ωc, the block begins to slip. After slipping begins, the block experiences a velocity-dependent drag force in addition to kinetic friction, given by F_drag = bv, where b = 0.10 N·s/m and v is the speed of the block relative to the turntable surface. Use calculus-based reasoning throughout your responses.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Draw and describe a complete free body diagram of the block as viewed from an inertial (lab) frame at an instant when the turntable is spinning at angular velocity ω < ωc. Identify every force acting on the block, including both the centripetal and tangential components of the net friction force, and state the direction of each force.",
        "rubric": "Student must identify all forces: normal force N upward, weight mg downward, and the static friction force. The static friction must be resolved into (or described as having) a centripetal component directed radially inward (toward the rotation axis) equal to mω²r, and a tangential component directed tangentially in the direction of angular acceleration equal to mαr. The net friction force is the vector sum of these two components. No fictitious forces appear in the inertial frame."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Derive an expression for the critical angular velocity ωc at which the block first begins to slip. Express your answer in terms of m, r, α, μs, and g. Then calculate the numerical value of ωc.",
        "rubric": "The magnitude of the net static friction force has centripetal component mω²r and tangential component mαr. Slipping begins when the total required friction equals μs·mg: sqrt((mω²r)² + (mαr)²) = μs·mg. Solving: ωc⁴ + α² = (μs g/r)² → ωc⁴ = (μs g/r)² − α² = (19.6)² − (2.0)² = 384.16 − 4.0 = 380.16, so ωc² = sqrt(380.16) ≈ 19.50, ωc ≈ 4.41 rad/s. Full credit for correct setup of vector magnitude condition and correct algebra leading to ωc ≈ 4.4 rad/s."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "After the block begins to slip, the net tangential force on the block (relative to the turntable surface) is given by Newton's second law: m(dv/dt) = −μk·mg − bv, where v is the speed of the block relative to the turntable surface and the right-hand side represents opposing forces. Set up and solve this first-order linear differential equation to find v(t), the speed of the block relative to the turntable as a function of time after slipping begins. Let v(0) = v₀ at the moment slipping starts.",
        "rubric": "Student must correctly identify the ODE: m dv/dt = −μk m g − b v. Rearranging: dv/dt = −(μk g) − (b/m)v. This is a first-order linear ODE. Let τ = m/b (time constant). Particular solution: v_particular = −μk m g / b. General solution: v(t) = (v₀ + μk m g/b)e^(−(b/m)t) − μk m g / b. Full credit requires separation of variables or integrating factor method, correct identification of the time constant m/b, and the correct form of v(t) with initial condition applied."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "A student observes the system from the non-inertial reference frame of the rotating turntable at angular velocity ω (after slipping begins). In this frame, the student claims the block appears to accelerate radially outward. Justify whether this is correct by identifying the fictitious (pseudo) force(s) present in the rotating frame, writing the equation of motion in the rotating frame, and explaining the physical origin of each fictitious force term.",
        "rubric": "In the rotating (non-inertial) reference frame, two fictitious forces appear: the centrifugal force (mω²r directed radially outward) and the Coriolis force (−2m(ω × v_rel) directed perpendicular to the relative velocity). The equation of motion in the rotating frame is: m a_rel = F_real + mω²r r̂ − 2m(ω × v_rel). The centrifugal force mω²r acts outward and exceeds the centripetal friction once slipping starts, causing apparent outward acceleration. The student's claim is correct: the net fictitious outward force (centrifugal) combined with kinetic friction produces an apparent radially outward acceleration in the rotating frame. Full credit requires naming both fictitious forces, stating their directions, and correctly writing or describing the rotating-frame equation of motion."
      },
      {
        "label": "e",
        "command": "Predict",
        "question": "Using your result from part (c), predict what happens to the relative speed v(t) as t → ∞. Does the block reach a terminal relative speed? If so, derive an expression for this terminal speed v_terminal in terms of the given quantities, and explain physically why the block stops accelerating relative to the turntable surface at that speed.",
        "rubric": "As t → ∞, the exponential term e^(−(b/m)t) → 0, so v(t) → −μk m g / b. Since speed is positive, the terminal relative speed magnitude is v_terminal = μk m g / b. Numerically: v_terminal = (0.40)(0.50)(9.8)/0.10 = 19.6 m/s. Physically, terminal speed is reached when the drag force bv exactly balances the kinetic friction force μk m g, so the net tangential force is zero and dv/dt = 0 (Newton's second law gives zero net force). Full credit requires taking the limit, stating v_terminal = μk m g / b, the numerical value, and the physical explanation invoking Newton's second law with zero net force at terminal speed."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct and complete free body diagram with all forces identified: normal force upward, weight downward, static friction decomposed into centripetal (radially inward, mω²r) and tangential (tangential direction, mαr) components; no fictitious forces in inertial frame.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "free body diagram",
          "normal force",
          "weight mg",
          "static friction",
          "centripetal component",
          "radially inward toward rotation axis",
          "tangential component",
          "mω²r centripetal friction",
          "mαr tangential friction",
          "inertial reference frame",
          "vector decomposition",
          "no fictitious forces",
          "net friction vector sum"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "block undergoes circular motion with angular acceleration",
            "static friction is the only horizontal force in inertial frame"
          ],
          "connector": [
            "requires",
            "results in",
            "provides"
          ],
          "effect": [
            "centripetal component mω²r directed radially inward",
            "tangential component mαr directed tangentially",
            "static friction supplies both centripetal and tangential acceleration"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct derivation of ωc by setting the vector magnitude of net required static friction equal to μs·mg, solving the resulting equation, and arriving at ωc ≈ 4.4 rad/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "static friction limit",
          "μs mg maximum static friction",
          "sqrt((mω²r)² + (mαr)²)",
          "centripetal friction component mω²r",
          "tangential friction component mαr",
          "critical angular velocity ωc",
          "vector magnitude of net friction",
          "slipping onset condition",
          "ωc⁴ = (μs g/r)² − α²",
          "4.4 rad/s numerical result",
          "19.6 rad²/s² intermediate value",
          "impending slip",
          "quartic equation in ωc"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net friction magnitude equals maximum static friction μs mg",
            "centripetal and tangential friction components grow with ω and α"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes"
          ],
          "effect": [
            "block begins to slip at ωc",
            "critical angular velocity ωc ≈ 4.4 rad/s reached",
            "static friction limit exceeded"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly sets up first-order linear ODE m dv/dt = −μk mg − bv, solves using separation of variables or integrating factor, identifies time constant τ = m/b, and writes correct solution v(t) = (v₀ + μk mg/b)e^(−(b/m)t) − μk mg/b.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "first-order linear ODE",
          "m dv/dt = −μk mg − bv",
          "separation of variables",
          "integrating factor method",
          "time constant τ = m/b",
          "exponential decay solution",
          "e^(−bt/m) decaying exponential",
          "particular solution −μk mg/b",
          "homogeneous solution Ce^(−bt/m)",
          "initial condition v(0) = v₀",
          "v(t) = (v₀ + μk mg/b)e^(−bt/m) − μk mg/b",
          "velocity-dependent drag",
          "kinetic friction opposing relative motion"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "kinetic friction μk mg and velocity-dependent drag bv oppose relative motion",
            "net tangential force is −μk mg − bv"
          ],
          "connector": [
            "leads to",
            "results in",
            "produces"
          ],
          "effect": [
            "exponentially decaying relative speed",
            "solution v(t) = (v₀ + μk mg/b)e^(−bt/m) − μk mg/b",
            "relative speed asymptotically approaches terminal value"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly identifies centrifugal force (mω²r radially outward) and Coriolis force (−2m ω×v_rel) as fictitious forces in the rotating frame, writes the rotating-frame equation of motion, and explains that the centrifugal force causes apparent outward acceleration, validating the student's observation.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "non-inertial rotating reference frame",
          "centrifugal force mω²r radially outward",
          "Coriolis force −2m(ω × v_rel)",
          "fictitious pseudo force",
          "rotating-frame equation of motion",
          "m a_rel = F_real + mω²r r̂ − 2m(ω × v_rel)",
          "apparent radially outward acceleration",
          "centrifugal exceeds centripetal friction after slip",
          "Coriolis perpendicular to relative velocity",
          "physical origin of fictitious forces",
          "frame non-inertial due to rotation",
          "block appears to accelerate outward"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "centrifugal force mω²r directed outward in rotating frame",
            "non-inertial rotating reference frame introduces fictitious forces"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "apparent radially outward acceleration of block",
            "block appears to move outward in rotating frame",
            "student's observation is correct"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly takes the limit as t→∞ to find v_terminal = μk mg/b ≈ 19.6 m/s, and explains physically that at terminal speed the drag force bv_terminal equals kinetic friction μk mg so net force is zero (Newton's second law, dv/dt = 0).",
        "partLabel": "e",
        "skill": "predict",
        "keywords": [
          "terminal relative speed",
          "v_terminal = μk mg/b",
          "limit as t approaches infinity",
          "exponential term vanishes to zero",
          "net tangential force equals zero",
          "dv/dt = 0 at terminal speed",
          "drag force bv_terminal balances kinetic friction μk mg",
          "bv = μk mg force balance",
          "Newton's second law zero net force",
          "19.6 m/s numerical terminal speed",
          "asymptotic approach to terminal speed",
          "relative acceleration ceases"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "drag force bv increases proportionally with relative speed",
            "kinetic friction μk mg remains constant"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes"
          ],
          "effect": [
            "net tangential force equals zero",
            "terminal relative speed v_terminal = μk mg/b reached",
            "dv/dt = 0 and relative acceleration vanishes"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u2_frq010",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Conical Pendulum with Velocity-Dependent Drag in a Rotating Reference Frame",
    "units": [
      2
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A small sphere of mass m = 0.25 kg is attached to a massless string of length L = 0.80 m and swings as a conical pendulum, tracing a horizontal circle at a constant half-angle θ from the vertical. The sphere moves through air that exerts a drag force directed opposite to the velocity of magnitude F_drag = bv, where b = 0.018 N·s/m is a drag coefficient and v is the instantaneous speed of the sphere. The coefficient of static friction between the sphere and any surface it contacts is not relevant here, but the sphere does pass through a thin horizontal ring of radius R fixed to a rotating platform. The platform rotates with constant angular velocity Ω about the vertical axis coinciding with the string's pivot. An observer (Observer A) stands in the inertial lab frame; a second observer (Observer B) is seated on the rotating platform and rotates with it at angular velocity Ω.\n\nFor parts (a)-(c), ignore drag (b = 0). For parts (d) and (e), include drag.\n\nGiven/Known quantities: m = 0.25 kg, L = 0.80 m, g = 9.8 m/s², b = 0.018 N·s/m. The sphere moves in steady circular motion at half-angle θ (measured from vertical). The radius of the circular path is r = L sin θ, and the height drop from pivot is h = L cos θ.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Draw and describe the free body diagram of the sphere as seen by Observer A (inertial frame) while it undergoes steady conical pendulum motion at angle θ. Identify every force acting on the sphere, state its direction, and explain why each force is present. Do not include drag for this part.",
        "rubric": "Full credit requires: (1) identifying tension T along the string directed toward the pivot (upward and inward), (2) identifying weight mg directed straight downward, (3) stating that the net (resultant) force is directed horizontally toward the center of the circular path (centripetal direction), and (4) explaining that no vertical acceleration exists so the vertical component of tension equals mg, while the horizontal component of tension provides the centripetal force mv²/r = mω²r. No fictitious or pseudo-forces may appear in the inertial-frame FBD."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using Newton's second law applied to the sphere in the inertial frame, derive an expression for the angular velocity ω of the conical pendulum as a function of g, L, and θ only. Show all calculus-based or algebraic steps starting from the component equations.",
        "rubric": "Full credit requires writing the two Newton's-second-law component equations: T cosθ − mg = 0 and T sinθ = mω²r = mω²L sinθ, then dividing to eliminate T, yielding g/cosθ = ω²L, and solving to obtain ω = √(g / (L cosθ)). Correct final expression ω = √(g/(L cosθ)) or equivalent period T = 2π√(L cosθ / g) earns the point."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Observer B, seated on the rotating platform turning at exactly ω (the conical pendulum's own angular velocity), observes the sphere to be stationary. Explain the forces Observer B must introduce to apply Newton's second law in their non-inertial rotating reference frame, and write the equation of equilibrium that Observer B uses to confirm the sphere is stationary. Address specifically the centrifugal pseudo-force and whether a Coriolis force appears for this observer.",
        "rubric": "Full credit requires: (1) identifying the centrifugal pseudo-force mω²r directed radially outward in the rotating frame, (2) stating that because the sphere is stationary in Observer B's frame its velocity in that frame is zero, so the Coriolis force 2m(v′ × Ω) = 0 vanishes, and (3) writing the radial equilibrium: T sinθ − mω²r = 0 and vertical equilibrium T cosθ = mg, consistent with the inertial-frame result. Must explicitly state Coriolis force is absent because relative velocity in rotating frame is zero."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Now include the linear drag force F_drag = bv opposing the velocity. The sphere still moves in a horizontal circle of radius r = L sinθ, but the drag force acts tangentially (opposing motion). Write the differential equation governing the tangential component of motion (i.e., the equation for dv/dt in the tangential direction) and solve it to find v(t), given that at t = 0 the sphere has speed v₀. Use the values m = 0.25 kg and b = 0.018 N·s/m to find the time constant τ.",
        "rubric": "Full credit requires: (1) writing the tangential Newton's-second-law equation m(dv/dt) = −bv (drag is the only tangential force since tension and gravity have no tangential component for steady circular geometry), (2) separating variables and integrating: ∫dv/v = −(b/m)∫dt to obtain ln(v/v₀) = −(b/m)t, (3) exponential solution v(t) = v₀ e^(−bt/m) = v₀ e^(−t/τ), and (4) computing τ = m/b = 0.25/0.018 ≈ 13.9 s."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Because drag continuously removes energy, the sphere spirals inward and θ decreases over time. Using energy methods and the expression for v(t) from part (d), write an integral expression for the total mechanical energy dissipated by drag from t = 0 to t → ∞, evaluate it, and justify whether this result is consistent with the work-energy theorem. Express your answer in terms of m, b, and v₀.",
        "rubric": "Full credit requires: (1) writing the power dissipated P(t) = F_drag · v = bv² = b v₀² e^(−2bt/m), (2) setting up the integral W_drag = ∫₀^∞ b v₀² e^(−2bt/m) dt, (3) evaluating: W_drag = b v₀² · [m/(2b)] = mv₀²/2, and (4) justifying this equals the initial kinetic energy (1/2)mv₀² by the work-energy theorem - all initial KE is ultimately dissipated by drag as t→∞, consistent with ΔKE = W_net."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct free body diagram and force identification in the inertial frame: tension T toward pivot (upward-inward), weight mg downward, net force centripetal (horizontal toward center), vertical equilibrium T cosθ = mg, no fictitious forces.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "tension T",
          "string tension directed toward pivot",
          "weight mg downward",
          "gravitational force mg",
          "centripetal direction",
          "net force directed toward center",
          "net force horizontal",
          "vertical equilibrium",
          "T cosθ = mg",
          "horizontal component T sinθ",
          "inertial frame",
          "no fictitious force",
          "no pseudo-force",
          "free body diagram",
          "upward and inward tension",
          "centripetal acceleration",
          "mω²r centripetal"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "tension component upward",
            "weight mg downward",
            "tension component inward"
          ],
          "connector": [
            "results in",
            "provides",
            "balances"
          ],
          "effect": [
            "centripetal acceleration toward center",
            "circular motion at constant θ",
            "vertical equilibrium zero net vertical force"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct derivation of ω = √(g / (L cosθ)) using Newton's second law component equations, eliminating T, and correct algebra/calculus steps.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "T cosθ = mg",
          "T sinθ = mω²r",
          "mω²L sinθ centripetal",
          "divide component equations to eliminate T",
          "eliminate tension T",
          "tanθ = ω²r/g",
          "ω² = g/(L cosθ)",
          "ω = √(g/(L cosθ))",
          "Newton's second law components",
          "centripetal acceleration ω²r",
          "vertical component equation",
          "horizontal component equation",
          "r = L sinθ substitution",
          "angular velocity expression"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "horizontal net force equals centripetal requirement",
            "vertical net force equals zero"
          ],
          "connector": [
            "leads to",
            "gives",
            "yields after dividing"
          ],
          "effect": [
            "ω = √(g/(L cosθ))",
            "angular velocity depends on L and θ"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct identification of centrifugal pseudo-force mω²r outward in rotating frame, statement that Coriolis force vanishes because sphere velocity in rotating frame is zero, and correct equilibrium equations in non-inertial frame.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "centrifugal pseudo-force",
          "mω²r directed radially outward",
          "fictitious force in rotating frame",
          "non-inertial rotating reference frame",
          "pseudo-force introduced by non-inertial frame",
          "Coriolis force 2m(v′×Ω)",
          "relative velocity in rotating frame is zero",
          "Coriolis force vanishes",
          "Coriolis term equals zero",
          "sphere stationary in rotating frame",
          "radial equilibrium T sinθ = mω²r",
          "vertical equilibrium T cosθ = mg",
          "equilibrium in rotating frame",
          "Observer B non-inertial",
          "platform angular velocity Ω = ω"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "sphere stationary in rotating frame",
            "relative velocity v′ equals zero in rotating frame"
          ],
          "connector": [
            "causes",
            "results in",
            "means that"
          ],
          "effect": [
            "Coriolis force 2mv′×Ω vanishes",
            "only centrifugal pseudo-force remains",
            "radial equilibrium T sinθ = mω²r"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correct differential equation m dv/dt = −bv, separation of variables, integration to obtain v(t) = v₀ e^(−bt/m), and correct time constant τ = m/b ≈ 13.9 s.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "m dv/dt = −bv",
          "tangential Newton's second law",
          "drag only tangential force",
          "tension has no tangential component",
          "gravity has no tangential component",
          "separation of variables dv/v = −(b/m)dt",
          "∫dv/v = −(b/m)∫dt",
          "ln(v/v₀) = −(b/m)t",
          "v(t) = v₀ e^(−bt/m)",
          "exponential decay of speed",
          "time constant τ = m/b",
          "τ = 0.25/0.018",
          "τ ≈ 13.9 s",
          "first-order linear ODE",
          "linear drag opposes velocity"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "linear drag force bv in tangential direction",
            "no other tangential force component"
          ],
          "connector": [
            "leads to",
            "produces",
            "results in"
          ],
          "effect": [
            "exponential speed decay v(t) = v₀ e^(−t/τ)",
            "time constant τ = m/b ≈ 13.9 s"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correct power dissipation P = bv², correct integral W = ∫₀^∞ bv₀²e^(−2bt/m)dt = mv₀²/2, and explicit justification that this equals initial kinetic energy via work-energy theorem.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "power dissipated P = F_drag · v = bv²",
          "P(t) = bv₀² e^(−2bt/m)",
          "energy dissipation rate",
          "W_drag = ∫₀^∞ bv₀² e^(−2bt/m) dt",
          "improper integral evaluated",
          "∫e^(−2bt/m) dt = m/(2b)",
          "W_drag = mv₀²/2",
          "initial kinetic energy (1/2)mv₀²",
          "work-energy theorem ΔKE = W_net",
          "all kinetic energy dissipated as t→∞",
          "final speed approaches zero",
          "energy fully removed by drag",
          "consistent with work-energy theorem",
          "net work equals change in kinetic energy"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "drag dissipation over infinite time",
            "exponential decay of speed to zero"
          ],
          "connector": [
            "results in",
            "equals",
            "is consistent with"
          ],
          "effect": [
            "total energy dissipated equals mv₀²/2",
            "equals initial kinetic energy (1/2)mv₀²",
            "confirmed by work-energy theorem"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u3_frq011",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Work Integral for a Variable Force",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A particle of mass 2.0 kg moves along the x-axis under the influence of a single variable force given by F(x) = 6x² − 4x (in Newtons), where x is in meters. The particle starts from rest at x = 0 and moves to x = 3.0 m.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the work integral, calculate the total work done by F(x) on the particle as it moves from x = 0 to x = 3.0 m. Show all integration steps.",
        "rubric": "Student sets up and evaluates W = ∫₀³ (6x² − 4x) dx, obtaining W = [2x³ − 2x²]₀³ = 2(27) − 2(9) = 54 − 18 = 36 J."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the work-kinetic energy theorem, calculate the speed of the particle at x = 3.0 m.",
        "rubric": "Student correctly applies W_net = ΔKE = ½mv² − 0, substitutes W = 36 J and m = 2.0 kg, and solves to obtain v = 6.0 m/s."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A second force G(x) = −(6x² − 4x) is now also applied to the particle simultaneously with F(x). Justify, without performing any integration, what the speed of the particle will be at x = 3.0 m if it again starts from rest at x = 0.",
        "rubric": "Student recognizes that F(x) + G(x) = 0 everywhere, so the net force is zero and the net work W_net = 0. By the work-kinetic energy theorem, ΔKE = 0, meaning the particle remains at rest (v = 0 m/s) throughout the motion."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the work integral W = ∫₀³ (6x² − 4x) dx, applying the power rule to each term, evaluating the antiderivative 2x³ − 2x² at the limits, and arriving at W = 36 J.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "W = ∫F dx",
          "∫(6x² − 4x) dx",
          "work integral",
          "antiderivative",
          "2x³ − 2x²",
          "36 J",
          "definite integral",
          "power rule",
          "limits of integration",
          "W = 36",
          "variable force",
          "evaluate at upper limit",
          "evaluate at lower limit"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "variable force F(x) = 6x² − 4x",
            "displacement from x = 0 to x = 3",
            "antiderivative 2x³ − 2x²"
          ],
          "connector": [
            "integrated over",
            "evaluated between limits",
            "yields"
          ],
          "effect": [
            "total work = 36 J",
            "W = 54 − 18",
            "W = 36 J"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the work-kinetic energy theorem W_net = ΔKE = ½mv² − ½mv₀², substitutes W = 36 J and m = 2.0 kg with v₀ = 0, and solves to obtain v = 6.0 m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "work-kinetic energy theorem",
          "W_net = ΔKE",
          "ΔKE = ½mv²",
          "KE = 0.5mv²",
          "36 = ½(2.0)v²",
          "v = 6 m/s",
          "6.0 m/s",
          "net work equals change in kinetic energy",
          "starts from rest",
          "v₀ = 0",
          "solve for final speed",
          "kinetic energy from rest"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net work W = 36 J",
            "mass m = 2.0 kg",
            "particle starts from rest"
          ],
          "connector": [
            "substituted into",
            "using work-kinetic energy theorem",
            "solving for v"
          ],
          "effect": [
            "v = 6.0 m/s",
            "final speed is 6 m/s",
            "ΔKE = 36 J"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student recognizes that the two forces are equal and opposite (net force = 0, net work = 0) and invokes the work-kinetic energy theorem to conclude the particle's speed remains v = 0 m/s.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "net force is zero",
          "F + G = 0",
          "net work equals zero",
          "W_net = 0",
          "work-kinetic energy theorem",
          "ΔKE = 0",
          "speed is zero",
          "v = 0",
          "remains at rest",
          "cancel",
          "equal and opposite forces",
          "superposition of forces",
          "no net work done"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net force equals zero",
            "F(x) + G(x) = 0",
            "net work = 0"
          ],
          "connector": [
            "leads to",
            "results in",
            "therefore"
          ],
          "effect": [
            "ΔKE = 0",
            "speed remains zero",
            "particle stays at rest",
            "v = 0 m/s"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u3_frq012",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Variable Force, Work-Energy Theorem, and Power on a Sliding Block",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A block of mass m = 2.0 kg slides along a frictionless horizontal surface. A horizontal force F(x) = (6x² − 4x) N acts on the block, where x is in meters. The block starts from rest at x = 0.\n\n(a) Calculate the net work done on the block by F(x) as it moves from x = 0 to x = 3.0 m using the work integral.\n\n(b) Using the work-energy theorem, determine the speed of the block at x = 3.0 m.\n\n(c) If the block reaches x = 3.0 m at time t = 2.0 s, calculate the instantaneous power delivered by F(x) at that position.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the net work done on the block by F(x) as it moves from x = 0 to x = 3.0 m using the work integral ∫F·dx.",
        "rubric": "Student sets up and evaluates W = ∫₀³ (6x² − 4x) dx = [2x³ − 2x²]₀³ = (54 − 18) − 0 = 36 J."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the work-energy theorem, determine the speed of the block at x = 3.0 m.",
        "rubric": "Student applies W_net = ΔKE = ½mv² − 0, substitutes W = 36 J and m = 2.0 kg, solves for v = 6.0 m/s."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "If the block reaches x = 3.0 m at time t = 2.0 s, calculate the instantaneous power delivered by F(x) at that position.",
        "rubric": "Student evaluates F at x = 3.0 m: F(3) = 6(9) − 4(3) = 54 − 12 = 42 N, then uses P = F·v = 42 × 6.0 = 252 W."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the definite work integral W = ∫₀³ (6x² − 4x) dx, applies antiderivative [2x³ − 2x²], and obtains W = 36 J.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "work integral",
          "∫F·dx",
          "W = ∫F dx",
          "antiderivative",
          "2x³ − 2x²",
          "definite integral",
          "36 J",
          "W = 36",
          "∫₀³",
          "6x² − 4x",
          "variable force work",
          "integrate force over displacement",
          "work done by non-constant force",
          "evaluate from 0 to 3",
          "54 − 18"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "variable force F(x) = 6x² − 4x",
            "displacement from x = 0 to x = 3 m"
          ],
          "connector": [
            "integrated over",
            "computed via",
            "yields"
          ],
          "effect": [
            "net work W = 36 J",
            "antiderivative evaluated at bounds",
            "work done on block"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the work-energy theorem W_net = ΔKE = ½mv² − ½mv₀², substitutes W = 36 J, m = 2.0 kg, v₀ = 0, and solves to obtain v = 6.0 m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "work-energy theorem",
          "W_net = ΔKE",
          "½mv²",
          "KE = 0.5mv²",
          "net work equals change in kinetic energy",
          "v = 6.0 m/s",
          "v = 6 m/s",
          "starts from rest",
          "v₀ = 0",
          "36 = ½(2)v²",
          "kinetic energy from rest",
          "solve for final speed",
          "m = 2.0 kg",
          "W_net = 36 J substituted",
          "square root of 36"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net work",
            "W_net = 36 J"
          ],
          "connector": [
            "equals",
            "results in",
            "determines"
          ],
          "effect": [
            "change in kinetic energy",
            "ΔKE",
            "v = 6.0 m/s"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Evaluates F(3) = 6(3)² − 4(3) = 42 N, then applies instantaneous power P = F·v = 42 × 6.0 = 252 W.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "instantaneous power",
          "P = Fv",
          "P = F·v",
          "dW/dt",
          "F(3) = 42 N",
          "42 N",
          "252 W",
          "P = 252",
          "power delivered by force",
          "evaluate F at x = 3",
          "substitute x = 3 into F(x)",
          "6(9) − 4(3)",
          "force times velocity",
          "instantaneous rate of work",
          "v = 6.0 m/s used in power"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "force F(3) = 42 N",
            "instantaneous velocity v = 6.0 m/s at x = 3 m"
          ],
          "connector": [
            "multiplied by",
            "applied in",
            "gives"
          ],
          "effect": [
            "instantaneous power P = 252 W",
            "rate of work done by F at x = 3 m"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u3_frq013",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Variable Force, Potential Energy, and Conservation of Energy on a Curved Track",
    "units": [
      3
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A particle of mass m = 0.50 kg moves along the x-axis under the influence of a single conservative force whose potential energy function is given by U(x) = αx⁴ − βx², where α = 3.0 J/m⁴ and β = 12.0 J/m². The particle starts from rest at x = 0.\n\n(a) Derive an expression for the force F(x) acting on the particle as a function of position by differentiating U(x). Identify all equilibrium positions and classify each as stable or unstable.\n\n(b) Using the work-energy theorem in integral form, calculate the net work done on the particle as it moves from x = 0 to x = 2.0 m. Then state the kinetic energy of the particle at x = 2.0 m.\n\n(c) At x = 2.0 m the particle has the kinetic energy found in part (b). Determine the instantaneous power delivered by force F to the particle at x = 2.0 m. Express your answer in watts.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Derive/Explain",
        "question": "Derive an expression for the force F(x) acting on the particle by differentiating U(x) with respect to x. Identify all equilibrium positions and classify each as stable or unstable.",
        "rubric": "Earns 1 point for correctly computing F(x) = −dU/dx = −4αx³ + 2βx = −12x³ + 24x, correctly identifying equilibrium positions at x = 0 and x = ±√(β/2α) = ±√2 m (where F = 0), and correctly classifying x = 0 as unstable (d²U/dx² < 0 at x = 0, since d²U/dx² = 12αx² − 2β evaluated at x=0 gives −2β = −24 < 0) and x = ±√2 m as stable (d²U/dx² > 0 there)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the work-energy theorem in integral form W = ∫F dx, calculate the net work done on the particle as it moves from x = 0 to x = 2.0 m. State the resulting kinetic energy at x = 2.0 m.",
        "rubric": "Earns 1 point for evaluating W = ∫₀² (−12x³ + 24x) dx = [−3x⁴ + 12x²]₀² = (−48 + 48) − 0 = 0 J, or equivalently using ΔU = U(2) − U(0) = (3)(16) − (12)(4) − 0 = 48 − 48 = 0 J so W_conservative = −ΔU = 0 J, and concluding KE at x = 2.0 m equals 0 J (particle started from rest and net work is zero)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Determine the instantaneous power delivered by force F to the particle at x = 2.0 m, given the kinetic energy found in part (b).",
        "rubric": "Earns 1 point for recognizing that since KE = 0 at x = 2.0 m, the speed v = 0 there, and applying P = F·v = F(2.0) × 0 = 0 W, correctly concluding instantaneous power P = 0 W at x = 2.0 m despite F(2.0) = −12(8) + 24(2) = −96 + 48 = −48 N being nonzero."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly derives F(x) = −dU/dx = −4αx³ + 2βx = −12x³ + 24x; identifies equilibrium points at x = 0, x = +√2 m, x = −√2 m by setting F = 0; classifies x = 0 as unstable using second derivative test (d²U/dx²|₀ < 0) and x = ±√2 m as stable (d²U/dx² > 0).",
        "partLabel": "a",
        "skill": "derive",
        "keywords": [
          "F = −dU/dx",
          "negative derivative of potential energy",
          "F(x) = −12x³ + 24x",
          "equilibrium F equals zero",
          "stable equilibrium d²U/dx² > 0",
          "unstable equilibrium d²U/dx² < 0",
          "x = ±√2 stable",
          "x = 0 unstable",
          "second derivative test potential energy",
          "conservative force equilibrium",
          "local minimum potential energy stable",
          "local maximum potential energy unstable",
          "set force equal to zero to find equilibrium",
          "−4αx³ + 2βx = 0",
          "x(−4αx² + 2β) = 0"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "d²U/dx² < 0 at x = 0",
            "local maximum of U at x = 0"
          ],
          "connector": [
            "results in",
            "indicates",
            "classifies as"
          ],
          "effect": [
            "unstable equilibrium at x = 0",
            "particle accelerates away from x = 0"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly evaluates W = ∫₀² F dx = ∫₀² (−12x³ + 24x) dx = [−3x⁴ + 12x²]₀² = 0 J, or uses W = −ΔU = −[U(2)−U(0)] = 0 J; applies work-energy theorem W_net = ΔKE to conclude KE at x = 2.0 m equals 0 J since particle started from rest.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "W = ∫F dx",
          "definite integral work from x=0 to x=2",
          "∫(−12x³ + 24x)dx",
          "antiderivative −3x⁴ + 12x²",
          "W = −ΔU conservative force",
          "net work equals zero joules",
          "work-energy theorem W_net = ΔKE",
          "KE = 0 J at x = 2.0 m",
          "started from rest KE₀ = 0",
          "conservation of mechanical energy",
          "U(2) = 3(16) − 12(4) = 0",
          "U(0) = 0 initial potential energy",
          "ΔU = 0 implies ΔKE = 0",
          "evaluate definite integral bounds",
          "−3x⁴ + 12x² evaluated at x = 2"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net work W = 0 J",
            "particle starts from rest at x = 0"
          ],
          "connector": [
            "results in",
            "leads to",
            "implies"
          ],
          "effect": [
            "kinetic energy equals zero at x = 2.0 m",
            "speed is zero at x = 2.0 m"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies P = F·v; recognizes that KE = 0 implies speed v = 0 at x = 2.0 m via KE = ½mv²; concludes instantaneous power P = F(2.0)·v = (−48 N)(0 m/s) = 0 W, even though the force is nonzero at that location.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "P = F·v instantaneous power",
          "P = Fv cosθ scalar product",
          "KE = ½mv² equals zero",
          "v = 0 m/s at x = 2.0 m",
          "instantaneous power equals zero watts",
          "F(2) = −48 N nonzero force",
          "speed zero despite nonzero force",
          "P = 0 W final answer",
          "dW/dt rate of work",
          "KE = 0 implies v = 0 from energy relation",
          "power is product of force and velocity",
          "zero velocity means zero power transfer",
          "carry forward KE from part b",
          "F evaluated at x = 2.0 m",
          "−12(2)³ + 24(2) = −48 N"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "kinetic energy equals zero at x = 2.0 m",
            "v = 0 derived from KE = ½mv²"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "instantaneous power P = 0 W",
            "no energy transfer rate at that instant despite nonzero force"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u3_frq014",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Variable Force, Energy, and Power on a Sliding Block",
    "units": [
      3
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A block of mass m = 2.0 kg starts from rest at position x = 0 on a frictionless horizontal surface. A single horizontal force acts on the block whose magnitude varies with position as F(x) = 3x² − 4x + 6 (in Newtons, with x in meters). The block moves in the positive x-direction.\n\n(a) Calculate the work done by F(x) as the block moves from x = 0 to x = 3 m using the work integral.\n\n(b) Using the work-energy theorem, determine the speed of the block at x = 3 m.\n\n(c) A potential energy function U(x) is defined such that U(0) = 0. Derive an expression for U(x) associated with the force F(x), and evaluate U(3).\n\n(d) Determine whether F(x) is a conservative force. Justify your answer using the relationship between force and potential energy, specifically by showing that F(x) can be expressed as the negative derivative of a scalar potential function.\n\n(e) At x = 3 m, the block has the speed found in part (b). Using conservation of energy, find the position x > 3 m (if any) where the block would momentarily come to rest if an additional constant resistive force f = 5 N (opposing motion) were applied starting at x = 3 m. Then calculate the average power delivered by the net force over the interval from x = 3 m to that stopping point, given that the time elapsed over that interval is t = 1.8 s.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the work done by F(x) = 3x² − 4x + 6 as the block moves from x = 0 to x = 3 m using the work integral W = ∫F(x) dx.",
        "rubric": "Student sets up and evaluates the definite integral ∫₀³ (3x² − 4x + 6) dx. Antiderivative is x³ − 2x² + 6x. Evaluating from 0 to 3 gives (27 − 18 + 18) − 0 = 27 J."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the work-energy theorem, determine the speed of the block at x = 3 m. The block starts from rest.",
        "rubric": "Student correctly applies the work-energy theorem W_net = ΔKE = ½mv² − 0. Using W = 27 J and m = 2.0 kg: 27 = ½(2.0)v², so v² = 27, v = √27 = 3√3 ≈ 5.20 m/s."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Derive the potential energy function U(x) associated with F(x), given U(0) = 0, and evaluate U(3).",
        "rubric": "Student uses U(x) = −∫F(x) dx = −(x³ − 2x² + 6x) + C; applying U(0) = 0 gives C = 0. So U(x) = −x³ + 2x² − 6x. U(3) = −27 + 18 − 18 = −27 J."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "Determine whether F(x) is a conservative force. Justify using the relationship F(x) = −dU/dx.",
        "rubric": "Student takes −dU/dx where U(x) = −x³ + 2x² − 6x: −dU/dx = −(−3x² + 4x − 6) = 3x² − 4x + 6 = F(x). This confirms F(x) is conservative because it equals the negative gradient of a scalar potential function."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Starting at x = 3 m with the speed from part (b), a constant resistive force f = 5 N opposes motion. Using conservation of energy, find where the block stops. Then calculate the average power delivered by the net force over this interval if the elapsed time is t = 1.8 s.",
        "rubric": "KE at x=3 is 27 J. Net work by resistive force over distance d: −5d. Energy at stop: 27 − 5d = 0, so d = 5.4 m; block stops at x = 8.4 m. Average power = ΔKE/Δt = (0 − 27)/1.8 = −15 W (magnitude 15 W, net power is −15 W)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the work integral ∫₀³ (3x² − 4x + 6) dx to obtain W = 27 J.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "work integral",
          "∫F dx",
          "∫F(x)dx",
          "definite integral",
          "antiderivative",
          "x³ − 2x² + 6x",
          "27 J",
          "W = ∫F·dx",
          "evaluate from 0 to 3",
          "variable force work",
          "integrate force over displacement"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the work-energy theorem W_net = ΔKE = ½mv² to find v = 3√3 ≈ 5.20 m/s at x = 3 m.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "work-energy theorem",
          "W_net = ΔKE",
          "KE = ½mv²",
          "kinetic energy",
          "½mv²",
          "v = √27",
          "3√3",
          "5.2 m/s",
          "starts from rest",
          "net work equals change in kinetic energy",
          "initial kinetic energy zero",
          "solve for velocity"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net work W = 27 J done on block",
            "block starts from rest"
          ],
          "connector": [
            "equals change in kinetic energy",
            "work-energy theorem gives",
            "implies"
          ],
          "effect": [
            "v = 3√3 ≈ 5.20 m/s at x = 3 m",
            "kinetic energy equals 27 J"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly derives U(x) = −x³ + 2x² − 6x using U(x) = −∫F(x) dx with boundary condition U(0) = 0, and evaluates U(3) = −27 J.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "potential energy function",
          "U(x) = −∫F dx",
          "negative integral of force",
          "U(x) = −x³ + 2x² − 6x",
          "U(0) = 0",
          "boundary condition",
          "U(3) = −27 J",
          "antiderivative of force",
          "integration constant",
          "apply initial condition",
          "constant of integration equals zero"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 3,
        "points": 1,
        "description": "Justifies that F(x) is conservative by showing F(x) = −dU/dx recovers the original force expression, confirming it derives from a scalar potential.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "conservative force",
          "F = −dU/dx",
          "negative gradient",
          "scalar potential function",
          "path independent",
          "−dU/dx = 3x² − 4x + 6",
          "recovers F(x)",
          "potential energy exists",
          "dU/dx",
          "differentiate potential energy",
          "negative derivative of U equals F",
          "force derivable from potential"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "scalar potential function U(x) exists",
            "F = −dU/dx"
          ],
          "connector": [
            "confirms",
            "proves",
            "demonstrates"
          ],
          "effect": [
            "F(x) is conservative",
            "work is path independent",
            "energy is conserved"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Uses conservation of energy / work-energy theorem with resistive force to find stopping position x = 8.4 m (d = 5.4 m from x = 3), and correctly computes average power = −15 W (or magnitude 15 W).",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "conservation of energy",
          "work done by resistive force",
          "−fd = −ΔKE",
          "5.4 m",
          "x = 8.4 m",
          "average power",
          "P = ΔKE/Δt",
          "P = W/t",
          "−15 W",
          "15 W",
          "KE = 27 J",
          "block momentarily at rest",
          "resistive force does negative work",
          "net work over stopping distance"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "resistive force f = 5 N opposes motion",
            "initial kinetic energy 27 J at x = 3 m"
          ],
          "connector": [
            "removes kinetic energy over distance d",
            "does negative work equal to initial KE",
            "results in"
          ],
          "effect": [
            "block stops at x = 8.4 m after traveling 5.4 m",
            "net average power delivered is −15 W"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u4_frq015",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Impulse and Change in Momentum of a Braking Cart",
    "units": [
      4
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A cart of mass m = 2.0 kg moves along a frictionless horizontal track with an initial velocity of v₀ = 6.0 m/s in the positive x-direction. A braking force is applied to the cart that varies with time according to F(t) = −4t N, where t is measured in seconds and the force acts in the negative x-direction. The braking force is applied from t = 0 to t = 3.0 s.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the impulse delivered to the cart by the braking force over the interval t = 0 to t = 3.0 s. Show your integral setup and evaluation.",
        "rubric": "Student earns the point by correctly setting up and evaluating the definite integral J = ∫₀³ F(t) dt = ∫₀³ (−4t) dt = −2t² evaluated from 0 to 3, yielding J = −18 N·s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the impulse-momentum theorem, determine the velocity of the cart at t = 3.0 s.",
        "rubric": "Student earns the point by correctly applying J = Δp = m·vf − m·v₀, substituting −18 = 2.0·vf − 2.0·(6.0), and solving to obtain vf = −3.0 m/s (or stating the cart moves in the negative x-direction at 3.0 m/s)."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A student claims that because the net force on the cart is not constant, the impulse-momentum theorem cannot be used to find the change in momentum. Is the student correct? Justify your answer by referencing the calculus-based form of the impulse-momentum theorem.",
        "rubric": "Student earns the point by correctly stating the student is wrong and citing that the impulse-momentum theorem holds for any time-varying force via J = ∫F dt = Δp, where the integral accounts for the changing force; a constant force is not required."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the definite integral of F(t) = −4t from 0 to 3 s to obtain J = −18 N·s",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "impulse",
          "J = ∫F dt",
          "∫₀³ (−4t) dt",
          "definite integral",
          "antiderivative −2t²",
          "−18 N·s",
          "N·s",
          "area under force-time graph",
          "integrate force over time",
          "evaluate from 0 to 3",
          "impulse as integral"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "force function F(t) = −4t",
            "integration over time interval 0 to 3 s"
          ],
          "connector": [
            "yields",
            "evaluates to"
          ],
          "effect": [
            "impulse J = −18 N·s",
            "net impulse in negative x-direction"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the impulse-momentum theorem J = Δp = m·vf − m·v₀ and solves for vf = −3.0 m/s",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "impulse-momentum theorem",
          "J = Δp",
          "J = mvf − mv₀",
          "p = mv",
          "vf = −3.0 m/s",
          "change in momentum",
          "Δp = −18 kg·m/s",
          "negative x-direction",
          "final velocity",
          "initial momentum",
          "solve for vf"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "impulse J = −18 N·s",
            "initial momentum mv₀ = 12 kg·m/s"
          ],
          "connector": [
            "results in",
            "gives"
          ],
          "effect": [
            "final velocity vf = −3.0 m/s",
            "change in momentum Δp = −18 kg·m/s"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies the student as wrong and justifies using the calculus-based form J = ∫F dt = Δp, which applies to any force function, constant or variable",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "student is incorrect",
          "impulse-momentum theorem",
          "J = ∫F dt",
          "time-varying force",
          "variable force",
          "Δp = ∫F dt",
          "holds for any force function",
          "calculus-based form",
          "not limited to constant force",
          "Newton's second law in integral form",
          "F(t) integrated over time interval",
          "general form of impulse"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "time-varying force F(t)",
            "integral ∫F dt taken over time interval"
          ],
          "connector": [
            "still yields",
            "is equal to"
          ],
          "effect": [
            "change in momentum Δp",
            "impulse-momentum theorem remains valid for variable forces"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u4_frq016",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Variable Mass Rocket Propulsion and Momentum",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A rocket of initial total mass M₀ = 800 kg (including fuel) is launched from rest in deep space, far from any gravitational fields. The rocket engine expels fuel at a constant exhaust speed v_e = 2500 m/s relative to the rocket. The fuel burns at a constant mass flow rate dm/dt = −5 kg/s (mass decreases at 5 kg/s). The rocket burns fuel for a total time T = 60 s, after which the remaining mass is M_f = 800 − (5)(60) = 500 kg.\n\n(a) Starting from Newton's second law applied to the rocket-fuel system, derive the rocket equation: M(dv/dt) = −v_e (dM/dt), where M is the instantaneous rocket mass and v is the rocket's speed.\n\n(b) Using the rocket equation, calculate the final speed of the rocket at t = T = 60 s. Express your answer to three significant figures.\n\n(c) During the burn, explain whether the net external impulse delivered to the rocket-fuel system by the thrust force equals the change in momentum of the rocket alone. Justify your answer by referencing the variable mass system and the role of the expelled fuel's momentum.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Derive",
        "question": "Starting from Newton's second law applied to the rocket-fuel system, derive the rocket equation: M(dv/dt) = −v_e (dM/dt).",
        "rubric": "Earns 1 point for correctly applying Newton's second law to the variable mass system: considering the momentum of the rocket plus an infinitesimal mass element dm of exhaust in a time interval dt, writing dp_system/dt = 0 (no external forces), obtaining M dv = −v_e dM, and arriving at the rocket equation M(dv/dt) = −v_e(dM/dt)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the rocket equation, calculate the final speed of the rocket at t = T = 60 s.",
        "rubric": "Earns 1 point for separating variables to get dv = −v_e (dM/M), integrating both sides (∫dv from 0 to v_f and ∫dM/M from M₀ to M_f), applying the Tsiolkovsky rocket equation v_f = v_e ln(M₀/M_f) = 2500 ln(800/500) ≈ 2500 × 0.470 ≈ 1175 m/s (accept 1170-1180 m/s)."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Explain whether the net external impulse delivered to the rocket-fuel system by the thrust force equals the change in momentum of the rocket alone.",
        "rubric": "Earns 1 point for recognizing that the impulse-momentum theorem applies to the entire system (rocket + expelled fuel): the total momentum change of the system equals the external impulse, but because the expelled fuel carries away momentum, the rocket's momentum change alone does NOT equal the total external impulse; the rocket momentum change equals the external impulse minus the momentum carried away by the exhaust."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Derives the rocket equation M(dv/dt) = −v_e(dM/dt) by applying Newton's second law or conservation of momentum to the rocket-plus-exhaust system, correctly accounting for the momentum of expelled mass dm in time dt.",
        "partLabel": "a",
        "skill": "derive",
        "keywords": [
          "Newton's second law",
          "dp/dt",
          "d(mv)/dt",
          "conservation of momentum",
          "rocket equation",
          "M dv = -v_e dM",
          "variable mass",
          "exhaust momentum",
          "dM/dt",
          "infinitesimal mass element",
          "thrust force",
          "momentum of expelled gas",
          "no external forces",
          "isolated system",
          "dp_system = 0"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "expelled fuel mass dm in time dt",
            "exhaust velocity v_e relative to rocket"
          ],
          "connector": [
            "results in",
            "produces",
            "causes"
          ],
          "effect": [
            "reaction force on rocket",
            "M(dv/dt) = -v_e(dM/dt)",
            "rocket accelerates forward"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly separates variables and integrates the rocket equation to obtain the Tsiolkovsky rocket equation v_f = v_e ln(M₀/M_f), then substitutes M₀ = 800 kg, M_f = 500 kg, v_e = 2500 m/s to compute v_f ≈ 1175 m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Tsiolkovsky rocket equation",
          "v_f = v_e ln(M_0/M_f)",
          "separation of variables",
          "integrate dv = -v_e dM/M",
          "∫dM/M = ln(M)",
          "ln(800/500)",
          "ln(M_0/M_f)",
          "1175 m/s",
          "natural logarithm",
          "mass ratio",
          "definite integral",
          "initial mass 800 kg",
          "final mass 500 kg",
          "exhaust speed 2500 m/s",
          "delta-v"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly explains that the impulse-momentum theorem applies to the entire rocket-fuel system; the rocket's momentum change alone does not equal the total external impulse because expelled exhaust carries away momentum, so Δp_rocket ≠ J_external; the sum Δp_rocket + Δp_exhaust = J_external.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "impulse-momentum theorem",
          "J = Δp_system",
          "expelled fuel carries momentum",
          "exhaust momentum",
          "Δp_rocket ≠ J_external",
          "variable mass system",
          "total system momentum",
          "momentum of exhaust",
          "Δp_rocket + Δp_exhaust = J",
          "rocket alone does not account for all momentum",
          "open system",
          "mass leaves the system",
          "total momentum change includes exhaust",
          "system boundary",
          "momentum carried away by expelled gas"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "expelled exhaust mass leaving the system",
            "exhaust carries momentum away from rocket"
          ],
          "connector": [
            "results in",
            "means that",
            "causes"
          ],
          "effect": [
            "rocket momentum change is less than total external impulse",
            "Δp_rocket ≠ J_external",
            "system momentum is split between rocket and exhaust"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u4_frq018",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Rocket Sled: Variable Mass, Impulse, and Collision Analysis",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A rocket sled of initial total mass M₀ = 80 kg (including fuel) rests on a frictionless horizontal track. The rocket engine expels exhaust at a constant speed u = 120 m/s relative to the sled and burns fuel at a constant rate dm/dt = 2.0 kg/s for a total burn time of 10 s. After the fuel is exhausted, the sled (now mass M_f = 60 kg) travels along the frictionless track and undergoes a collision with a stationary target block of mass m_b = 20 kg. In the collision, the sled and block stick together (perfectly inelastic collision). Use g = 10 m/s².\n\nUseful relations: The rocket (Tsiolkovsky) equation gives the thrust force as F_thrust = u |dm/dt|. The velocity gained by a rocket expelling mass is given by Δv = u ln(M₀/M_f). The impulse-momentum theorem states J = ΔP = ∫F dt.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the variable-mass (rocket) equation of motion, write a differential equation for the sled's velocity v(t) during the burn phase (assuming no external friction). Then calculate the thrust force F_thrust exerted on the sled by the expelled exhaust.",
        "rubric": "Student writes M(t) dv/dt = u|dm/dt| (the rocket equation), identifies M(t) = M₀ − (dm/dt)t = 80 − 2t kg, and correctly computes F_thrust = u|dm/dt| = 120 × 2.0 = 240 N."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the Tsiolkovsky rocket equation Δv = u ln(M₀/M_f), determine the speed of the sled immediately after the burn phase ends (at t = 10 s). Show all steps including substitution of values.",
        "rubric": "Student correctly substitutes Δv = 120 × ln(80/60) = 120 × ln(4/3) ≈ 120 × 0.2877 ≈ 34.5 m/s, with clear identification of M₀ = 80 kg, M_f = 60 kg, u = 120 m/s."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "After the burn, the sled (mass 60 kg, speed v_sled ≈ 34.5 m/s) collides and sticks with the stationary block (mass 20 kg). Using conservation of momentum, find the velocity of the combined sled-block system immediately after the collision. Then calculate the kinetic energy lost in the collision.",
        "rubric": "Student applies conservation of momentum p_i = p_f: (60)(34.5) = (60+20)v_f giving v_f = 2070/80 ≈ 25.9 m/s. KE lost = ½(60)(34.5²) − ½(80)(25.9²) ≈ 35,777 − 26,832 ≈ 8,900 J (accept answers consistent with their v_sled). Student explicitly states momentum is conserved because no external horizontal net force acts during collision."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "Justify whether kinetic energy is conserved in the sled-block collision. In your justification, reference the type of collision and the internal energy changes that account for any kinetic energy lost.",
        "rubric": "Student identifies the collision as perfectly inelastic (objects stick together), states KE is NOT conserved, and explains that the lost KE is converted to internal energy (heat, deformation, sound). Student must reference that momentum IS conserved but KE is not, citing the inelastic nature of the collision."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find the position of the center of mass of the sled-block system at the moment of collision (just before impact). Define the origin as the sled's initial position. The sled traveled the entire burn distance from rest, and the block was initially located 200 m from the origin. Use the fact that under constant thrust and linearly decreasing mass, the distance traveled during the burn can be approximated as x_sled ≈ 155 m (you may use this given value). Calculate x_cm of the sled-block system just before the collision.",
        "rubric": "Student applies x_cm = (m₁x₁ + m₂x₂)/(m₁+m₂) = (60×155 + 20×200)/(60+20) = (9300 + 4000)/80 = 13300/80 = 166.25 m ≈ 166 m from the origin. Correct formula, correct substitution of masses and positions, and correct arithmetic earn the point."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly writes the rocket equation of motion M(t) dv/dt = u|dm/dt| and computes thrust force F_thrust = 240 N using F = u(dm/dt) = 120 × 2.0.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "rocket equation",
          "variable mass",
          "M(t) dv/dt = u|dm/dt|",
          "thrust force",
          "F_thrust = u|dm/dt|",
          "240 N",
          "dm/dt = 2.0 kg/s",
          "differential equation of motion",
          "exhaust speed",
          "Newton's second law variable mass",
          "linearly decreasing mass",
          "M(t) = 80 − 2t",
          "momentum of expelled gas",
          "reaction force"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "exhaust expelled at speed u relative to sled",
            "dm/dt = 2.0 kg/s mass flow rate"
          ],
          "connector": [
            "results in",
            "produces",
            "by Newton's third law generates"
          ],
          "effect": [
            "thrust force 240 N on sled",
            "net acceleration of variable-mass sled"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies Tsiolkovsky rocket equation Δv = u ln(M₀/M_f) with M₀ = 80 kg, M_f = 60 kg, u = 120 m/s to obtain v_f ≈ 34.5 m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Tsiolkovsky rocket equation",
          "Δv = u ln(M₀/M_f)",
          "ln(80/60)",
          "ln(4/3)",
          "34.5 m/s",
          "natural logarithm",
          "mass ratio M₀/M_f",
          "burn phase final velocity",
          "rocket equation integration",
          "exhaust velocity 120 m/s",
          "propellant mass 20 kg",
          "post-burn sled speed",
          "0.2877 logarithm value"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "fuel mass expelled from M₀ = 80 kg to M_f = 60 kg",
            "exhaust speed u = 120 m/s relative to sled"
          ],
          "connector": [
            "results in velocity change given by",
            "yields"
          ],
          "effect": [
            "sled velocity 34.5 m/s after burn",
            "Δv proportional to logarithm of mass ratio"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies conservation of momentum for perfectly inelastic collision to find v_f ≈ 25.9 m/s and calculates kinetic energy lost ≈ 8,900 J (or consistent with their v_sled).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "conservation of momentum",
          "perfectly inelastic collision",
          "p_i = p_f",
          "m₁v₁ = (m₁+m₂)v_f",
          "v_f ≈ 25.9 m/s",
          "kinetic energy lost",
          "ΔKE ≈ 8900 J",
          "KE = ½mv²",
          "no net external horizontal force",
          "combined system velocity",
          "sled 60 kg block 20 kg",
          "total mass 80 kg post-collision",
          "momentum conserved during collision"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "60 kg sled at 34.5 m/s strikes stationary 20 kg block",
            "objects stick together in perfectly inelastic collision"
          ],
          "connector": [
            "results in",
            "leads to"
          ],
          "effect": [
            "combined velocity 25.9 m/s by momentum conservation",
            "kinetic energy loss of approximately 8900 J to internal energy",
            "single post-collision velocity for combined system"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Justifies that kinetic energy is NOT conserved because the collision is perfectly inelastic; lost KE converts to internal energy (deformation, heat, sound); momentum is conserved but KE is not.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "perfectly inelastic collision",
          "kinetic energy not conserved",
          "internal energy increase",
          "plastic deformation",
          "thermal energy heat",
          "momentum conserved",
          "KE converted to internal energy",
          "objects stick together",
          "sound energy dissipated",
          "energy transformation inelastic",
          "non-conservative collision",
          "coefficient of restitution zero",
          "total mechanical energy decreases"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "objects permanently stick together",
            "perfectly inelastic collision with relative velocity zero after impact"
          ],
          "connector": [
            "causes",
            "results in",
            "means that"
          ],
          "effect": [
            "kinetic energy is not conserved",
            "lost KE converted to internal energy via deformation and heat",
            "momentum remains conserved despite KE loss"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly calculates the center of mass position using x_cm = (m₁x₁ + m₂x₂)/(m₁+m₂) = (60×155 + 20×200)/80 = 166.25 m ≈ 166 m.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "center of mass position",
          "x_cm = (m₁x₁ + m₂x₂)/(m₁+m₂)",
          "166.25 m",
          "166 m",
          "mass-weighted average position",
          "sled position 155 m",
          "block position 200 m",
          "60 kg sled mass",
          "20 kg block mass",
          "total mass 80 kg denominator",
          "center of mass formula",
          "13300 divided by 80",
          "two-body center of mass"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u4_frq019",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Variable-Mass Rocket with Mid-Flight Elastic Probe Ejection",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A rocket of initial total mass M₀ = 800 kg (including fuel) moves in deep space (no gravity, no air resistance) along the +x-axis. Its engine ejects mass at a constant rate α = 4 kg/s with exhaust speed u = 2500 m/s relative to the rocket. The rocket burns fuel for a total time T = 100 s, starting from rest.\n\nAt exactly t = 50 s into the burn, when the rocket has some instantaneous mass m(50) and velocity v(50), a small scientific probe of mass m_p = 50 kg is elastically ejected from the nose of the rocket along the x-axis. The probe and the remaining rocket body (mass m_r = m(50) − 50 kg) separate during a very brief interaction (Δt → 0) that imparts equal and opposite internal impulses. After separation, the probe moves with velocity v_probe and the rocket body (with its remaining fuel and still-firing engine) moves with velocity v_rocket_after. The coefficient of restitution for this elastic separation is e = 1, and the relative speed of separation equals the relative speed of approach (which, since they were moving together just before ejection, equals the speed imparted by the internal spring mechanism: Δv_rel = 300 m/s, meaning v_probe − v_rocket_after = 300 m/s in the lab frame, with the probe moving faster).\n\nAfter the separation, the rocket body (mass m_r, still burning) continues under the Tsiolkovsky rocket equation with the same α and u for the remaining 50 s of burn time.\n\nUse the following: ln(2) ≈ 0.693, ln(300/250) ≈ 0.182, ln(350/300) ≈ 0.154.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the variable-mass (Tsiolkovsky) rocket equation, derive an expression for the rocket's velocity as a function of time v(t) for 0 ≤ t ≤ 50 s, and evaluate v(50 s). Show all calculus steps.",
        "rubric": "Student must start from the rocket equation M(dv/dt) = u·α, recognize M(t) = M₀ − αt = 800 − 4t, separate variables and integrate: ∫dv = uα·∫dt/(M₀−αt) from 0 to t, yielding v(t) = u·ln(M₀/(M₀−αt)). At t = 50 s: m(50) = 800 − 4(50) = 600 kg; v(50) = 2500·ln(800/600) = 2500·ln(4/3) ≈ 2500(0.2877) ≈ 719 m/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Immediately after the elastic probe ejection at t = 50 s, determine the velocities of the probe (v_probe) and the rocket body (v_rocket_after) in the lab frame. Use conservation of momentum and the given elastic separation condition.",
        "rubric": "Student must apply conservation of momentum for the brief separation: m(50)·v(50) = m_p·v_probe + m_r·v_rocket_after, where m(50)=600 kg, v(50)≈719 m/s, m_p=50 kg, m_r=550 kg. Second equation from elastic condition: v_probe − v_rocket_after = 300 m/s. Solving: 600(719) = 50·v_probe + 550·v_rocket_after and v_probe = v_rocket_after + 300. Substituting: 431400 = 50(v_rocket_after+300) + 550·v_rocket_after = 600·v_rocket_after + 15000 → v_rocket_after = (431400−15000)/600 = 416400/600 = 694 m/s; v_probe = 994 m/s."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "The probe ejection is described as elastic (e = 1). Verify whether kinetic energy is conserved during this separation event, and justify whether this is physically consistent with the definition of an elastic collision. Show your calculation of ΔKE.",
        "rubric": "Student must calculate KE before: ½(600)(719)² ≈ ½(600)(517,061) ≈ 1.551×10⁸ J. KE after: ½(50)(994)² + ½(550)(694)² = ½(50)(988,036) + ½(550)(481,636) = 24,700,900 + 132,449,900 ≈ 1.572×10⁸ J. ΔKE ≈ +2.1×10⁶ J (energy was added by the spring/explosive mechanism). Student must justify that a true elastic collision conserves KE without external energy input; because a spring mechanism adds energy, e=1 defines only the kinematic restitution condition (relative speed), not strict energy conservation - this is an internally driven separation, not a passive elastic collision."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "After the probe separation, the rocket body (initial mass m_r = 550 kg, initial velocity v_rocket_after ≈ 694 m/s) continues burning for 50 more seconds with the same α = 4 kg/s and u = 2500 m/s. Derive an expression for the rocket body's velocity as a function of time t' (where t' = 0 is the moment of separation) and calculate the rocket body's final velocity at t' = 50 s.",
        "rubric": "Student must reapply Tsiolkovsky: M(t') = 550 − 4t'; dv = u·α·dt'/(550−4t'); integrating: v(t') = v_rocket_after + u·ln(550/(550−4t')). At t'=50: mass = 550−200 = 350 kg; v_final = 694 + 2500·ln(550/350) = 694 + 2500·ln(11/7) ≈ 694 + 2500(0.452) ≈ 694 + 1130 = 1824 m/s. Accept answers using ln(550/350)=ln(1.571)≈0.452."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "At t' = 50 s (end of burn), find the x-coordinate of the system's center of mass, measured from the rocket's position at the moment of probe separation (x = 0 at t' = 0). Assume the probe travels at constant velocity v_probe = 994 m/s after separation (no engine), and the rocket body's position must be found by integrating its velocity. Express the center-of-mass position in terms of the final masses and positions.",
        "rubric": "Student must compute positions at t'=50 s. Probe (constant velocity): x_probe = v_probe · t' = 994 × 50 = 49,700 m. Rocket body position: x_rocket = ∫₀⁵⁰ v(t') dt' = ∫₀⁵⁰ [694 + 2500·ln(550/(550−4t'))] dt'. Splitting: 694(50) + 2500·∫₀⁵⁰ ln(550/(550−4t'))dt'. The integral ∫₀⁵⁰ ln(550/(550−4t'))dt' evaluated via substitution s=550−4t' gives approximately 13.28 s, so x_rocket ≈ 34,700 + 2500(13.28) ≈ 34,700 + 33,200 = 67,900 m. x_cm = (m_p·x_probe + m_r·x_rocket)/(m_p + m_r) = (50×49,700 + 350×67,900)/400 = (2,485,000 + 23,765,000)/400 = 26,250,000/400 = 65,625 m. Full credit for correct integral setup and application of center-of-mass formula even if arithmetic differs slightly."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly derives and evaluates v(50 s) ≈ 719 m/s using the Tsiolkovsky rocket equation with calculus integration, showing dv = u·α·dt/(M₀−αt) and integrating to obtain v(t) = u·ln(M₀/(M₀−αt)).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Tsiolkovsky rocket equation",
          "variable mass system",
          "dv = u·alpha·dt/(M0 - alpha*t)",
          "v(t) = u·ln(M0/(M0 - alpha*t))",
          "separable differential equation",
          "integration of 1/(M0 - alpha*t)",
          "v(50) = 2500·ln(4/3)",
          "719 m/s",
          "exhaust velocity relative to rocket",
          "mass flow rate alpha",
          "starts from rest initial condition",
          "M(t) = 800 - 4t"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "constant mass ejection rate alpha",
            "exhaust speed u relative to rocket"
          ],
          "connector": [
            "leads to",
            "results in",
            "produces"
          ],
          "effect": [
            "logarithmic velocity increase",
            "v(t) = u·ln(M₀/(M₀−αt))",
            "v(50) ≈ 719 m/s"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies conservation of linear momentum and the elastic restitution condition (v_probe − v_rocket_after = 300 m/s) simultaneously to solve for v_probe ≈ 994 m/s and v_rocket_after ≈ 694 m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "conservation of linear momentum",
          "total momentum before equals total momentum after",
          "m(50)·v(50) = m_p·v_probe + m_r·v_rocket_after",
          "elastic separation condition",
          "relative speed of separation equals 300 m/s",
          "v_probe - v_rocket_after = 300 m/s",
          "coefficient of restitution e = 1",
          "v_probe = 994 m/s",
          "v_rocket_after = 694 m/s",
          "system of two simultaneous equations",
          "internal impulse equal and opposite",
          "brief interaction delta-t approaches zero"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "internal impulse from spring mechanism",
            "elastic ejection restitution condition e=1"
          ],
          "connector": [
            "results in",
            "determines",
            "yields"
          ],
          "effect": [
            "probe velocity 994 m/s",
            "rocket body velocity 694 m/s after separation"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Calculates KE before and after separation, identifies that KE increases (ΔKE > 0 due to spring/explosive mechanism), and correctly justifies that e=1 only enforces the kinematic restitution condition, not strict passive energy conservation.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "kinetic energy before separation KE_i = 0.5·(600)·(719)^2",
          "kinetic energy after separation KE_f",
          "KE = 0.5·m·v^2",
          "delta KE greater than zero",
          "energy added by internal spring or explosive mechanism",
          "elastic collision requires no net energy input",
          "coefficient of restitution e=1 defines only kinematic condition",
          "relative speed of separation equals relative speed of approach",
          "internally driven separation not passive elastic collision",
          "KE_f approximately 1.572 × 10^8 J",
          "KE_i approximately 1.551 × 10^8 J",
          "delta KE approximately 2.1 × 10^6 J"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "internal spring or explosive mechanism adds energy",
            "energy input during separation event"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "kinetic energy increases after separation",
            "ΔKE > 0",
            "not a passive elastic collision despite e=1"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly re-applies the Tsiolkovsky rocket equation with new initial conditions (m_r = 550 kg, v_rocket_after = 694 m/s) and integrates to find v_final ≈ 1824 m/s at t' = 50 s, using v(t') = v_rocket_after + u·ln(550/(550−4t')).",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "Tsiolkovsky equation reapplied with new initial conditions",
          "new initial mass m_r = 550 kg",
          "new initial velocity v_rocket_after = 694 m/s",
          "v(t') = 694 + 2500·ln(550/(550 - 4t'))",
          "remaining burn time 50 s",
          "final rocket body mass 350 kg",
          "ln(550/350) = ln(11/7) ≈ 0.452",
          "v_final ≈ 1824 m/s",
          "dv/dt' = u·alpha / m(t')",
          "integration of variable mass differential equation",
          "M(t') = 550 - 4t'",
          "t-prime measured from separation event"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "continued fuel ejection at rate alpha after separation",
            "new initial conditions m_r and v_rocket_after"
          ],
          "connector": [
            "results in",
            "produces",
            "leads to"
          ],
          "effect": [
            "rocket body accelerates to approximately 1824 m/s",
            "logarithmic velocity gain over remaining 50 s burn"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly computes probe and rocket body positions at t' = 50 s (probe via constant velocity, rocket via integral of v(t')), then applies the center-of-mass formula x_cm = (m_p·x_probe + m_r·x_rocket)/(m_p + m_r) with correct final masses and positions.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "center of mass formula x_cm = (m1·x1 + m2·x2)/(m1 + m2)",
          "x_probe = v_probe · t' = 994 × 50 = 49700 m",
          "x_rocket = integral of v(t') dt' over 0 to 50",
          "integration of Tsiolkovsky velocity profile to get position",
          "probe moves at constant velocity no engine",
          "final probe mass m_p = 50 kg",
          "final rocket body mass m_r = 350 kg",
          "weighted average position of two subsystems",
          "x_cm ≈ 65625 m from separation point",
          "x_rocket ≈ 67900 m",
          "substitution s = 550 - 4t' to evaluate position integral",
          "origin defined at rocket position at moment of separation"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "different velocities after separation",
            "rocket body accelerates while probe moves at constant velocity"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes"
          ],
          "effect": [
            "different positions at t' = 50 s",
            "center of mass at approximately 65625 m from separation point"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u5_frq020",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Rolling Without Slipping Down an Incline",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A solid uniform sphere of mass M and radius R is released from rest at the top of a fixed inclined plane of height h and angle θ. The sphere rolls without slipping down the entire length of the incline. The rotational inertia of a solid sphere about its center of mass is I_cm = (2/5)MR². Assume no energy is lost to air resistance or deformation.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using energy conservation and the rolling-without-slipping constraint v = Rω, derive an expression for the translational speed v of the sphere's center of mass at the bottom of the incline. Express your answer in terms of M, g, h, and R as needed.",
        "rubric": "Earns 1 point for correctly applying conservation of energy with both translational and rotational kinetic energy terms - Mgh = (1/2)Mv² + (1/2)I_cm·ω², substituting I_cm = (2/5)MR² and ω = v/R, and algebraically solving to obtain v = √(10gh/7)."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Explain why the rolling-without-slipping condition requires that a static friction force acts on the sphere at the contact point, and state the role that friction plays in the energy analysis performed in part (a).",
        "rubric": "Earns 1 point for explaining that static friction provides the net torque about the center of mass that angularly accelerates the sphere (τ = I_cm·α = f·R), and that because the contact point has zero instantaneous velocity under rolling without slipping, static friction does no work and therefore does not appear as an energy loss in the energy conservation equation."
      },
      {
        "label": "c",
        "command": "Predict",
        "question": "A hollow thin-walled spherical shell of the same mass M and radius R (rotational inertia I = (2/3)MR²) is released from the same height h on the same incline. Without performing a full calculation, predict whether the hollow shell reaches the bottom with a speed greater than, less than, or equal to v found in part (a). Justify your prediction using calculus-based reasoning about how rotational inertia affects the distribution of energy.",
        "rubric": "Earns 1 point for correctly predicting that the hollow shell reaches the bottom with a speed less than v = √(10gh/7), and justifying that because I_shell = (2/3)MR² > I_solid = (2/5)MR², a larger fraction of the fixed total mechanical energy Mgh is stored as rotational kinetic energy (1/2)Iω², leaving less energy available as translational kinetic energy (1/2)Mv², yielding a smaller v."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct derivation using energy conservation with both translational and rotational KE, applying rolling constraint ω = v/R and I_cm = (2/5)MR², arriving at v = √(10gh/7).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Mgh = (1/2)Mv² + (1/2)Iω²",
          "rolling without slipping",
          "v = Rω",
          "ω = v/R",
          "I_cm = (2/5)MR²",
          "v = sqrt(10gh/7)",
          "√(10gh/7)",
          "conservation of energy",
          "rotational kinetic energy",
          "translational kinetic energy",
          "gravitational potential energy",
          "substitute rolling constraint",
          "algebraic simplification",
          "total mechanical energy",
          "kinetic energy sum"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "gravitational potential energy Mgh",
            "rolling without slipping constraint v = Rω"
          ],
          "connector": [
            "converts to",
            "equals",
            "is distributed as"
          ],
          "effect": [
            "translational kinetic energy (1/2)Mv²",
            "rotational kinetic energy (1/2)Iω²",
            "v = √(10gh/7)"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct explanation that static friction provides the torque for angular acceleration and does no work because the contact point velocity is zero under rolling without slipping.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "static friction",
          "torque",
          "τ = fR",
          "angular acceleration",
          "I_cm·α",
          "contact point",
          "zero instantaneous velocity at contact",
          "no work done by friction",
          "rolling without slipping constraint",
          "does not dissipate energy",
          "net torque about center of mass",
          "friction force at contact point",
          "work-energy theorem",
          "non-slip condition",
          "instantaneous rest at contact"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "static friction",
            "torque at contact point"
          ],
          "connector": [
            "provides",
            "causes",
            "results in"
          ],
          "effect": [
            "angular acceleration",
            "rolling without slipping",
            "no energy loss"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct prediction that the hollow shell is slower, justified by its larger rotational inertia storing a greater fraction of total energy as rotational KE, leaving less as translational KE.",
        "partLabel": "c",
        "skill": "predict",
        "keywords": [
          "less than v",
          "hollow shell slower",
          "I_shell = (2/3)MR²",
          "larger rotational inertia",
          "greater fraction of total energy stored rotationally",
          "rotational kinetic energy (1/2)Iω²",
          "less translational kinetic energy (1/2)Mv²",
          "same total mechanical energy Mgh",
          "energy distribution between rotation and translation",
          "I_solid = (2/5)MR²",
          "mass distribution farther from axis",
          "higher moment of inertia reduces final speed",
          "same initial potential energy",
          "rolling constraint ω = v/R unchanged",
          "v_shell = sqrt(10gh/5) less than sqrt(10gh/7) is incorrect - v_shell = sqrt(6gh/5)"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "larger rotational inertia I_shell = (2/3)MR²",
            "mass concentrated at outer radius"
          ],
          "connector": [
            "results in",
            "means",
            "leads to"
          ],
          "effect": [
            "more energy stored as rotational KE",
            "less translational KE available",
            "smaller final translational speed"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u5_frq021",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Rolling Without Slipping on an Inclined Plane",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A solid uniform cylinder of mass M and radius R is released from rest at the top of an inclined plane of height h and angle θ above the horizontal. The cylinder rolls without slipping down the entire length of the incline. The moment of inertia of a solid cylinder about its central axis is I = (1/2)MR². Assume no energy is lost to air resistance.\n\nThe no-slip condition requires that the velocity of the center of mass v_cm and the angular velocity ω satisfy v_cm = Rω at all times. You may use energy methods or Newton's second law in rotational and translational forms.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Derive",
        "question": "Using energy conservation, derive an expression for the translational speed of the center of mass v_cm of the cylinder at the bottom of the incline in terms of M, g, h, and any other given quantities. Show all calculus-based or algebraic steps clearly.",
        "rubric": "1 point: Correctly applies conservation of energy, writing Mgh = (1/2)Mv_cm² + (1/2)Iω², substitutes I = (1/2)MR² and the rolling constraint ω = v_cm/R, simplifies to Mgh = (3/4)Mv_cm², and solves to obtain v_cm = sqrt(4gh/3)."
      },
      {
        "label": "b",
        "command": "Derive",
        "question": "Using Newton's second law in both translational form (ΣF = Ma_cm) and rotational form (Στ = Iα) along with the rolling constraint a_cm = Rα, derive the linear acceleration a_cm of the cylinder's center of mass down the incline. Express your answer in terms of g and θ.",
        "rubric": "1 point: Correctly writes ΣF = Mg sinθ − f = Ma_cm and Στ = fR = Iα = (1/2)MR²(a_cm/R), solves the system to eliminate the static friction force f, and obtains a_cm = (2/3)g sinθ."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "If the solid cylinder were replaced by a thin-walled hollow cylinder of the same mass M and radius R (moment of inertia I = MR²) released from the same height h, explain - without recalculating - whether the hollow cylinder arrives at the bottom with a greater, lesser, or equal translational speed compared to the solid cylinder. Justify your reasoning using the energy equation and the role of rotational inertia.",
        "rubric": "1 point: Correctly identifies that the hollow cylinder has a larger moment of inertia (I = MR² vs I = (1/2)MR²), so a greater fraction of the total mechanical energy Mgh is stored as rotational kinetic energy (1/2)Iω², leaving less energy available as translational kinetic energy (1/2)Mv_cm², resulting in a smaller v_cm at the bottom compared to the solid cylinder."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student applies conservation of mechanical energy, correctly substitutes I = (1/2)MR² and the rolling constraint ω = v_cm/R into KE_rot = (1/2)Iω², combines translational and rotational kinetic energy terms, and solves to obtain v_cm = sqrt(4gh/3).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "conservation of energy",
          "Mgh = (1/2)Mv² + (1/2)Iω²",
          "rolling constraint v = Rω",
          "ω = v_cm/R",
          "rotational kinetic energy",
          "translational kinetic energy",
          "v_cm = sqrt(4gh/3)",
          "(3/4)Mv_cm²",
          "gravitational potential energy converted",
          "no slipping condition",
          "moment of inertia substitution",
          "I = (1/2)MR²",
          "energy partitioned between translation and rotation",
          "started from rest"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "rolling without slipping",
            "rolling constraint v_cm = Rω"
          ],
          "connector": [
            "results in",
            "requires"
          ],
          "effect": [
            "rotational kinetic energy term included in energy equation",
            "energy partitioned between translation and rotation",
            "reduced translational speed compared to sliding"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly applies Newton's second law in translational form ΣF = Ma_cm and rotational form Στ = Iα, uses rolling constraint a_cm = Rα, eliminates static friction force f from the two equations, and arrives at a_cm = (2/3)g sinθ.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Newton's second law rotational form",
          "Στ = Iα",
          "ΣF = Ma_cm",
          "static friction torque",
          "fR = Iα",
          "rolling constraint a_cm = Rα",
          "a_cm = (2/3)g sinθ",
          "eliminate static friction force",
          "Mg sinθ − f = Ma_cm",
          "translational and rotational equations coupled",
          "torque about center of mass",
          "simultaneous equations",
          "friction acts at contact point",
          "acceleration reduced below g sinθ"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "static friction force at contact point",
            "torque about center of mass from friction"
          ],
          "connector": [
            "causes",
            "produces"
          ],
          "effect": [
            "angular acceleration α coupled to linear acceleration",
            "rolling constraint a_cm = Rα satisfied",
            "linear acceleration reduced below g sinθ"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly states that the hollow cylinder arrives with a lesser translational speed, citing that its larger moment of inertia I = MR² causes a greater fraction of the fixed total energy Mgh to be stored as rotational kinetic energy, leaving less energy as translational kinetic energy and thus a smaller v_cm.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "larger moment of inertia",
          "hollow cylinder I = MR²",
          "greater rotational kinetic energy fraction",
          "less translational kinetic energy",
          "smaller v_cm at bottom",
          "hollow cylinder arrives slower",
          "energy partitioning between rotation and translation",
          "total mechanical energy Mgh fixed",
          "more energy stored rotationally",
          "rotational inertia increases with mass distribution farther from axis",
          "solid cylinder I = (1/2)MR² comparison",
          "same height same total energy",
          "lesser translational speed"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "larger moment of inertia of hollow cylinder",
            "hollow cylinder I = MR² versus solid I = (1/2)MR²"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes"
          ],
          "effect": [
            "greater fraction of total energy stored as rotational KE",
            "smaller translational speed at bottom",
            "hollow cylinder arrives at bottom slower than solid cylinder"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u5_frq022",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Angular Momentum and Gyroscopic Precession of a Spinning Disk",
    "units": [
      5
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A uniform solid disk of mass M = 0.80 kg and radius R = 0.12 m is mounted at the end of a massless horizontal axle of length d = 0.25 m. The other end of the axle is attached to a frictionless pivot fixed to a vertical wall. The disk spins about the axle with angular velocity ω_s = 120 rad/s. The spin axis is horizontal. Gravity acts downward with g = 9.8 m/s².\n\n(a) The gravitational torque about the pivot causes the axle to precess in a horizontal circle. Using the angular momentum of the spinning disk, derive an expression for the precession angular velocity Ω in terms of M, g, d, R, and ω_s by analyzing the rate of change of the angular momentum vector dL/dt.\n\n(b) The disk's spin angular momentum vector L points along the axle (away from the wall). As the axle precesses, the tip of the L vector traces a horizontal circle of radius |L|. Using the calculus definition dL⃗/dt and the geometry of the precessing angular momentum vector, justify why the gravitational torque τ = Mgd must equal |L|·Ω, and calculate the numerical value of Ω in rad/s.\n\n(c) A student claims that the total mechanical energy of the disk-axle system is conserved during steady precession because gravity does no net work over one full precession cycle. Justify or refute this claim using the work-energy theorem in rotational form, specifically addressing the net torque, the displacement of the center of mass, and the constancy of both ω_s and Ω.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Derive",
        "question": "Using the angular momentum of the spinning disk and the calculus relationship dL/dt = τ_net, derive an expression for the precession angular velocity Ω in terms of M, g, d, R, and ω_s.",
        "rubric": "Earns 1 point for correctly identifying L = I·ω_s = (1/2)MR²·ω_s, recognizing that gravity produces torque τ = Mgd about the pivot, setting τ = dL/dt = L·Ω, and solving to obtain Ω = Mgd / [(1/2)MR²ω_s] = 2gd/(R²ω_s)."
      },
      {
        "label": "b",
        "command": "Justify and Calculate",
        "question": "Using the calculus definition dL⃗/dt and the geometry of the precessing angular momentum vector, justify why τ = |L|·Ω, and calculate the numerical value of Ω in rad/s.",
        "rubric": "Earns 1 point for correctly arguing that as L precesses, |dL⃗/dt| = |L|·Ω (analogous to centripetal acceleration geometry, dθ/dt = Ω for a vector of fixed magnitude rotating in a plane), equating this to τ = Mgd, and computing Ω = 2(9.8)(0.25)/[(0.12)²(120)] ≈ 2gd/(R²ω_s) = 4.9/1.728 ≈ 2.84 rad/s."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Justify or refute the student's claim that total mechanical energy is conserved during steady precession, using the work-energy theorem in rotational form and addressing the net torque, center-of-mass displacement, and constancy of ω_s and Ω.",
        "rubric": "Earns 1 point for correctly justifying the claim: during steady precession the center of mass moves in a horizontal circle at constant height, so gravitational potential energy is constant (W_gravity = ∫τ·dθ = 0 over one cycle because torque is always perpendicular to the displacement of the axle tip); ω_s and Ω both remain constant so rotational kinetic energy (1/2)Iω_s² and precessional KE are unchanged; the net work done by all torques over one cycle is zero, consistent with the work-energy theorem ΔKE_rot = ∫τ_net·dθ = 0."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Derives Ω = 2gd/(R²ω_s) by applying dL/dt = τ_net with L = (1/2)MR²ω_s and τ = Mgd, then solving for Ω.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dL/dt = τ",
          "L = (1/2)MR²ω_s",
          "rotational inertia of disk I = (1/2)MR²",
          "moment of inertia solid disk",
          "torque τ = Mgd",
          "gravitational torque about pivot",
          "Ω = Mgd/Iω_s",
          "Ω = 2gd/(R²ω_s)",
          "spin angular momentum",
          "precession angular velocity",
          "net torque equals rate of change of angular momentum",
          "angular momentum vector changes direction",
          "Newton's second law rotational form",
          "dL/dt equals net external torque"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "gravitational torque τ = Mgd about pivot",
            "spin angular momentum L = Iω_s = (1/2)MR²ω_s"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes"
          ],
          "effect": [
            "precession angular velocity Ω = Mgd/Iω_s",
            "angular momentum vector rotates horizontally at rate Ω"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Justifies |dL⃗/dt| = |L|·Ω using vector calculus geometry (fixed-magnitude vector rotating at rate Ω), equates to τ = Mgd, and calculates Ω ≈ 2.84 rad/s.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "|dL/dt| = |L|Ω",
          "fixed magnitude vector rotating in horizontal plane",
          "dL/dt analogous to centripetal velocity relation",
          "arc length swept by vector tip equals |L|dθ",
          "Ω = τ/|L|",
          "Ω = Mgd / [(1/2)MR²ω_s]",
          "Ω ≈ 2.84 rad/s",
          "precession rate numerical calculation",
          "angular momentum tip traces horizontal circle",
          "torque perpendicular to L vector",
          "dθ/dt = Ω for rotating vector",
          "vector rate of change proportional to angular speed",
          "gyroscopic precession geometry",
          "magnitude of dL/dt equals |L| times angular speed of precession"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "angular momentum vector of fixed magnitude |L| rotating in horizontal plane",
            "horizontal precession at angular rate Ω"
          ],
          "connector": [
            "results in",
            "gives",
            "implies"
          ],
          "effect": [
            "|dL⃗/dt| = |L|·Ω equals gravitational torque Mgd",
            "Ω ≈ 2.84 rad/s calculated numerically"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly justifies energy conservation: center of mass moves at constant height so W_gravity = 0; gravitational torque is perpendicular to axle angular displacement so net work per cycle is zero; ω_s and Ω constant implies ΔKE_rot = 0, consistent with work-energy theorem ∫τ_net·dθ = 0.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "center of mass moves at constant height",
          "gravitational potential energy constant",
          "torque perpendicular to axle angular displacement",
          "W = ∫τ dθ = 0 over full precession cycle",
          "work-energy theorem rotational form ΔKE_rot = ∫τ_net dθ",
          "ω_s remains constant no spin-down",
          "Ω constant steady precession",
          "no net work done by gravity over one complete cycle",
          "total mechanical energy conserved claim supported",
          "KE_rot = (1/2)Iω_s² unchanged",
          "precessional kinetic energy unchanged",
          "gravitational torque always horizontal perpendicular to velocity of axle tip",
          "zero net change in kinetic energy per cycle",
          "work done by torque zero when torque perpendicular to displacement"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "gravitational torque always perpendicular to instantaneous velocity of axle tip",
            "center of mass traces horizontal circle at fixed height above ground"
          ],
          "connector": [
            "leads to",
            "results in",
            "means"
          ],
          "effect": [
            "zero net work done by gravity per complete precession cycle",
            "total mechanical energy conserved",
            "ΔKE_rot = 0 consistent with work-energy theorem"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u5_frq023",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Rolling Cylinder on an Inclined Plane: Rotational Dynamics and Angular Momentum",
    "units": [
      5
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A solid uniform cylinder of mass M = 2.0 kg and radius R = 0.10 m is released from rest at the top of a fixed inclined plane of length L = 1.5 m and angle θ = 30° above the horizontal. The cylinder rolls without slipping down the entire incline. The moment of inertia of a solid cylinder about its central axis is I_cm = (1/2)MR². A smaller, thin rod of mass m = 0.50 kg and length 2R is later welded symmetrically across a diameter of the cylinder's circular face (its center coincides with the cylinder's central axis) to form a composite object. Treat g = 10 m/s².\n\n(a) Using Newton's second law for rotation (Στ = Iα), derive a differential equation of motion for the original solid cylinder rolling without slipping down the incline, and solve it to find the linear acceleration a of the cylinder's center of mass.\n\n(b) Using the parallel axis theorem, calculate the rotational inertia I_rod of the thin rod about the central axis of the cylinder after it is welded to the cylinder's face. The moment of inertia of a thin rod about its center (perpendicular axis) is I_rod_cm = (1/12)m(2R)².\n\n(c) The composite object (cylinder + welded rod) is now set rolling without slipping from rest down the same incline. Using energy methods and the rolling-without-slipping constraint v = Rω, calculate the speed v_f of the composite object's center of mass at the bottom of the incline. Express your answer in terms of M, m, R, g, L, and θ, and evaluate numerically.\n\n(d) Calculate the magnitude of the angular momentum L_ang of the original solid cylinder (without the rod) about its contact point with the incline at the instant it reaches the bottom of the incline after rolling from rest. Use the result from part (a) and the parallel axis theorem for angular momentum if needed.\n\n(e) A gyroscope is constructed from the original solid cylinder spinning at high angular velocity ω_s about its central (symmetry) axis, with its axle held horizontally and one end of the axle placed on a frictionless pivot. The axle has length d = 0.30 m and the cylinder's center of mass is at distance d from the pivot. Explain, using the relationship between torque and the rate of change of angular momentum (τ = dL/dt), why the gyroscope precesses rather than falling, and derive an expression for the precession angular velocity Ω in terms of M, g, d, I_cm, and ω_s.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using Newton's second law for rotation (Στ = Iα), derive a differential equation of motion for the original solid cylinder rolling without slipping down the incline, and solve it to find the linear acceleration a of the cylinder's center of mass.",
        "rubric": "Student applies Στ = Iα about the contact point (or separately applies ΣF = Ma and Στ = I_cm·α with the no-slip constraint a = Rα). Torque due to gravity about contact point is MgR sinθ; moment of inertia about contact point is (3/2)MR² by parallel axis theorem. This gives MgR sinθ = (3/2)MR²·(a/R), yielding a = (2/3)g sinθ = (2/3)(10)(0.5) = 10/3 ≈ 3.33 m/s²."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the parallel axis theorem, calculate the rotational inertia I_rod of the thin rod about the central axis of the cylinder after it is welded to the cylinder's face. The moment of inertia of a thin rod about its center (perpendicular axis) is I_rod_cm = (1/12)m(2R)².",
        "rubric": "Student correctly identifies that the rod's center of mass coincides with the cylinder's axis (distance d_parallel = 0), so the parallel axis theorem gives I_rod = I_rod_cm + m·(0)² = (1/12)m(2R)² = (1/3)mR². Numerically: (1/3)(0.50)(0.01) = 1.67 × 10⁻³ kg·m²."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "The composite object (cylinder + welded rod) is now set rolling without slipping from rest down the same incline. Using energy methods and the rolling-without-slipping constraint v = Rω, calculate the speed v_f of the composite object's center of mass at the bottom of the incline.",
        "rubric": "Student applies conservation of energy: MgL sinθ = (1/2)(M+m)v² + (1/2)I_total·ω², where I_total = (1/2)MR² + (1/3)mR², and substitutes ω = v/R to get v_f = sqrt[2MgL sinθ / (M + m + I_total/R²)]. Numerically: I_total/R² = 1/2·M + 1/3·m = 1.0 + 0.167 = 1.167 kg; denominator = (2.0 + 0.5 + 1.167) = 3.667 kg; v_f = sqrt(2·2.0·10·1.5·0.5 / 3.667) = sqrt(30/3.667) ≈ 2.86 m/s."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Calculate the magnitude of the angular momentum L_ang of the original solid cylinder (without the rod) about its contact point with the incline at the instant it reaches the bottom of the incline after rolling from rest.",
        "rubric": "Student uses kinematics v_f = sqrt(2aL) with a = (2/3)g sinθ to find v_f = sqrt(2·(10/3)·1.5) = sqrt(10) ≈ 3.16 m/s, then ω = v_f/R = 31.6 rad/s. Angular momentum about contact point: L = I_contact·ω = (3/2)MR²·ω = (3/2)(2.0)(0.01)(31.6) ≈ 0.949 kg·m²/s. Alternatively L = Mv_f·R + I_cm·ω gives same result."
      },
      {
        "label": "e",
        "command": "Explain",
        "question": "Explain, using the relationship τ = dL/dt, why the gyroscope precesses rather than falling, and derive an expression for the precession angular velocity Ω in terms of M, g, d, I_cm, and ω_s.",
        "rubric": "Student explains that the gravitational torque τ = Mgd is perpendicular to the spin angular momentum vector L_s = I_cm·ω_s (horizontal), so dL/dt = τ is perpendicular to L_s, causing L to change direction (precess) rather than magnitude. The rate of change |dL/dt| = L_s·Ω = I_cm·ω_s·Ω equals the torque magnitude Mgd, giving Ω = Mgd / (I_cm·ω_s)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies Newton's second law for rotation (Στ = Iα) with the rolling-without-slipping constraint (a = Rα) to derive the linear acceleration a = (2/3)g sinθ ≈ 3.33 m/s².",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Στ = Iα",
          "Newton's second law for rotation",
          "rolling without slipping",
          "no-slip constraint a = Rα",
          "torque due to gravity",
          "gravitational torque MgR sinθ",
          "parallel axis theorem contact point",
          "moment of inertia about contact point (3/2)MR²",
          "a = (2/3)g sinθ",
          "linear acceleration 3.33 m/s²",
          "static friction torque",
          "differential equation of motion",
          "rotational dynamics incline"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "gravitational torque MgR sinθ about contact point",
            "no-slip constraint a = Rα",
            "moment of inertia about contact point (3/2)MR²"
          ],
          "connector": [
            "leads to",
            "results in",
            "gives"
          ],
          "effect": [
            "linear acceleration a = (2/3)g sinθ",
            "a ≈ 3.33 m/s²",
            "constant translational acceleration down incline"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the parallel axis theorem to find I_rod about the cylinder's central axis, recognizing the rod's center of mass lies on the axis (d = 0), giving I_rod = (1/3)mR² = 1.67 × 10⁻³ kg·m².",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "parallel axis theorem",
          "I = I_cm + md²",
          "rod center of mass coincides with cylinder axis",
          "offset distance d = 0",
          "I_rod_cm = (1/12)m(2R)²",
          "I_rod = (1/3)mR²",
          "rotational inertia of thin rod",
          "no additional md² correction term",
          "axis of rotation through rod midpoint",
          "1.67 × 10⁻³ kg·m²",
          "moment of inertia calculation composite object",
          "perpendicular axis rod"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "rod's center of mass coincides with cylinder central axis",
            "offset distance d = 0",
            "parallel axis theorem I = I_cm + md²"
          ],
          "connector": [
            "means",
            "results in",
            "therefore"
          ],
          "effect": [
            "no additional md² correction term",
            "I_rod = (1/3)mR²",
            "rotational inertia equals I_rod_cm about cylinder axis"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly uses conservation of energy with the rolling-without-slipping constraint (v = Rω, ω = v/R) and the composite moment of inertia I_total = (1/2)MR² + (1/3)mR² to find v_f ≈ 2.86 m/s.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "conservation of mechanical energy",
          "gravitational potential energy MgL sinθ",
          "translational kinetic energy (1/2)(M+m)v²",
          "rotational kinetic energy (1/2)I_total·ω²",
          "rolling without slipping constraint v = Rω",
          "substitution ω = v/R",
          "composite moment of inertia I_total = (1/2)MR² + (1/3)mR²",
          "effective inertia denominator M + m + I_total/R²",
          "v_f = sqrt[2MgL sinθ / (M + m + I_total/R²)]",
          "v_f ≈ 2.86 m/s",
          "energy partitioned between translation and rotation",
          "no energy loss rolling without slipping"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "larger total rotational inertia of composite object",
            "added rod mass m increases I_total",
            "more gravitational PE converted to rotational KE"
          ],
          "connector": [
            "results in",
            "leads to",
            "causes"
          ],
          "effect": [
            "smaller final translational speed v_f compared to cylinder alone",
            "v_f ≈ 2.86 m/s",
            "greater fraction of energy stored as rotational kinetic energy"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly calculates the final speed using kinematics (v_f² = 2aL), finds ω = v_f/R, then computes angular momentum about the contact point using L = I_contact·ω = (3/2)MR²·ω ≈ 0.949 kg·m²/s.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "angular momentum L = Iω",
          "moment of inertia about contact point I_contact = (3/2)MR²",
          "parallel axis theorem for angular momentum",
          "kinematic equation v_f² = 2aL",
          "no-slip constraint ω = v/R",
          "angular velocity at bottom of incline",
          "angular momentum about point of contact",
          "L_ang ≈ 0.949 kg·m²/s",
          "L = Mv_f·R + I_cm·ω",
          "rolling cylinder angular momentum",
          "v_f = sqrt(2aL) ≈ 3.16 m/s",
          "ω = v_f/R ≈ 31.6 rad/s"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "angular velocity ω at bottom of incline",
            "moment of inertia about contact point (3/2)MR²",
            "no-slip relation ω = v_f/R"
          ],
          "connector": [
            "determines",
            "gives",
            "results in"
          ],
          "effect": [
            "angular momentum about contact point L = I_contact·ω",
            "L_ang ≈ 0.949 kg·m²/s"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly explains that gravitational torque is perpendicular to spin angular momentum, so dL/dt causes precession rather than tipping, and derives Ω = Mgd / (I_cm·ω_s).",
        "partLabel": "e",
        "skill": "explain",
        "keywords": [
          "τ = dL/dt",
          "gravitational torque Mgd perpendicular to spin angular momentum",
          "spin angular momentum L_s = I_cm·ω_s",
          "torque vector perpendicular to angular momentum vector",
          "dL perpendicular to L causes direction change not magnitude change",
          "precession angular velocity Ω",
          "Ω = Mgd / (I_cm·ω_s)",
          "gyroscopic precession",
          "horizontal spin axis",
          "rate of change of angular momentum equals applied torque",
          "L_s·Ω = Mgd",
          "angular momentum vector sweeps out cone"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "gravitational torque Mgd perpendicular to horizontal spin angular momentum L_s",
            "τ ⊥ L_s so dL/dt ⊥ L_s"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "angular momentum vector changes direction not magnitude",
            "gyroscope precesses horizontally rather than falling",
            "precession rate Ω = Mgd / (I_cm·ω_s)"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u5_frq024",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Composite Disk-Rod System: Rotational Dynamics, Rolling, and Angular Momentum",
    "units": [
      5
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A composite rigid body consists of a uniform solid disk of mass M and radius R rigidly attached at its center to one end of a thin uniform rod of mass M and length 2R. The rod extends radially outward from the disk's center along the x-axis. The entire assembly can rotate about a fixed frictionless axle that passes through the far end of the rod (the end opposite the disk), perpendicular to the plane of the disk. A light string is wrapped around the rim of the disk; the string runs vertically downward and supports a hanging block of mass m = M/2. The system is released from rest.\n\nIn a separate scenario (parts d and e), the axle is removed and the disk alone (mass M, radius R) is released from rest at the top of an inclined plane of height H and angle θ, rolling without slipping to the bottom. At the bottom of the incline, the disk's axle is suddenly locked to a long, massless gyroscope gimbal arm of length L oriented horizontally, and the spinning disk is observed to precess.\n\nUse the following symbols where needed: M, R, H, θ, g, L, and t for time. All integrals and derivatives must be shown explicitly.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using integration, derive the rotational inertia of the composite disk-rod system about the fixed axle at the far end of the rod. Show the integral setup for each component, apply the parallel axis theorem where appropriate, and express your answer in terms of M and R.",
        "rubric": "Full credit requires: (1) correct integral for the solid disk's rotational inertia about its own center I_disk = (1/2)MR², shown via I = ∫r² dm with appropriate area mass density σ = M/(πR²); (2) correct application of the parallel axis theorem to shift the disk's inertia to the axle: I_disk_axle = (1/2)MR² + M(2R)² = (9/2)MR²; (3) correct integral for the thin rod about its far end using I = ∫₀^{2R} (M/2R)x² dx = (2/3)MR²; (4) total I_total = (9/2)MR² + (2/3)MR² = (31/6)MR²."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Apply Newton's second law for rotation to the system to find the angular acceleration α of the assembly immediately after release, and then express the angular velocity ω(t) as a function of time by integrating α. Express answers in terms of M, R, g, and t.",
        "rubric": "Full credit requires: (1) correct net torque from the hanging block τ_net = (M/2)g·R (torque arm is radius R of disk); (2) Newton's second law for rotation τ_net = I_total·α applied correctly, giving α = (M/2·g·R)/((31/6)MR²) = 3g/(31R); (3) integration dω/dt = α → ω(t) = ∫α dt = (3g/(31R))t, with ω(0)=0 initial condition stated."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "As the block descends and the system rotates, the angular momentum of the system changes. Identify the external torque responsible and explain, using the rotational form of Newton's second law (dL/dt = τ_ext), why the angular momentum of the disk-rod-block system is NOT conserved. Then write an expression for L(t) as a function of time.",
        "rubric": "Full credit requires: (1) identification of the gravitational force on the hanging block (weight Mg/2) acting at moment arm R as the non-zero external torque; (2) explicit statement that angular momentum is not conserved because τ_ext ≠ 0, citing dL/dt = τ_ext as the governing law; (3) L(t) = I_total·ω(t) = (31/6)MR²·(3g/(31R))t = (MgRt)/2, or equivalently L(t) = τ_ext·t = (MgR/2)t, with correct derivation."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "For the separate rolling scenario: derive the translational speed v of the disk's center of mass at the bottom of the incline of height H using energy conservation. Explicitly account for both translational and rotational kinetic energy, and use the rolling-without-slipping constraint v = Rω to eliminate ω. Express v in terms of g and H.",
        "rubric": "Full credit requires: (1) energy conservation equation MgH = (1/2)Mv² + (1/2)I_cm·ω², with I_cm = (1/2)MR² for solid disk stated; (2) rolling without slipping constraint v = Rω used to write ω = v/R, substituting to get MgH = (1/2)Mv² + (1/4)Mv²= (3/4)Mv²; (3) solving correctly to give v = √(4gH/3)."
      },
      {
        "label": "e",
        "command": "Describe",
        "question": "After the disk reaches the bottom of the incline with the spin angular momentum L_s found from part (d), it is mounted on the horizontal gimbal arm of length L and begins to precess. Derive an expression for the precession angular velocity Ω_p in terms of M, g, R, L, and v (from part d), and describe the direction of precession relative to the gravitational torque using the right-hand rule and the vector relationship τ = dL/dt.",
        "rubric": "Full credit requires: (1) spin angular momentum L_s = I_cm·ω = (1/2)MR²·(v/R) = MRv/2 stated correctly; (2) gravitational torque τ = MgL identified as the torque causing precession, acting horizontally perpendicular to L_s; (3) precession rate derived from Ω_p = τ/L_s = MgL/(MRv/2) = 2gL/(Rv); (4) correct description of precession direction using right-hand rule: torque vector τ = r × F points horizontally, causing L_s to rotate (precess) in the horizontal plane in the direction of τ, consistent with dL/dt = τ_ext."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly derives the total rotational inertia of the composite system about the axle at the far end of the rod using integration and the parallel axis theorem, arriving at I_total = (31/6)MR².",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "parallel axis theorem",
          "I = I_cm + Md²",
          "rotational inertia",
          "moment of inertia",
          "I = ∫r² dm",
          "I_disk = (1/2)MR²",
          "shift to axle",
          "I_disk_axle = (9/2)MR²",
          "I_rod = (2/3)MR²",
          "I_rod integral from 0 to 2R",
          "31/6 MR²",
          "area mass density",
          "linear mass density M/2R",
          "superposition of inertias",
          "composite rigid body"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies Newton's second law for rotation (τ_net = Iα) to find α = 3g/(31R) and integrates to obtain ω(t) = (3g/(31R))t.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "τ_net = Iα",
          "Newton's second law for rotation",
          "net torque on system",
          "angular acceleration α",
          "α = τ/I",
          "dω/dt = α",
          "integrate angular acceleration over time",
          "ω(t) = αt",
          "torque arm equals disk radius R",
          "α = 3g/(31R)",
          "ω(t) = 3gt/(31R)",
          "initial condition ω(0) = 0",
          "hanging block weight torque",
          "τ = (M/2)gR"
        ],
        "fundamentalPrinciple": true,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly explains why angular momentum is not conserved by identifying the non-zero external gravitational torque and citing dL/dt = τ_ext, and writes L(t) = (MgR/2)t.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "dL/dt = τ_ext",
          "angular momentum not conserved",
          "external torque nonzero",
          "gravitational force on hanging block",
          "τ_ext = MgR/2",
          "L(t) = τ_ext · t",
          "angular impulse-momentum theorem",
          "L = Iω",
          "net external torque nonzero",
          "rotational impulse equals change in angular momentum",
          "weight of block at moment arm R",
          "L(t) = (MgR/2)t",
          "angular momentum accumulates over time"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "nonzero external torque",
            "gravitational force on hanging block acts at moment arm R"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes"
          ],
          "effect": [
            "angular momentum changes with time",
            "dL/dt ≠ 0",
            "angular momentum not conserved"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies energy conservation including both translational and rotational KE, uses rolling without slipping constraint v = Rω, and solves to obtain v = √(4gH/3).",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "conservation of energy",
          "MgH = (1/2)Mv² + (1/2)Iω²",
          "rolling without slipping",
          "no-slip constraint v = Rω",
          "I_cm = (1/2)MR² solid disk",
          "rotational kinetic energy (1/4)Mv²",
          "translational kinetic energy (1/2)Mv²",
          "v = √(4gH/3)",
          "gravitational potential energy converted to kinetic energy",
          "ω = v/R substitution",
          "total kinetic energy = (3/4)Mv²",
          "rolling disk speed less than frictionless slide",
          "height H fully converted"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "rolling without slipping constraint links v and ω",
            "rotational kinetic energy must be included alongside translational"
          ],
          "connector": [
            "results in",
            "leads to"
          ],
          "effect": [
            "v = √(4gH/3)",
            "final speed reduced compared to frictionless sliding"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly derives the precession angular velocity Ω_p = 2gL/(Rv) and describes the precession direction using the right-hand rule and the vector relationship τ = dL/dt.",
        "partLabel": "e",
        "skill": "describe",
        "keywords": [
          "gyroscopic precession",
          "Ω_p = τ/L_s",
          "precession angular velocity",
          "spin angular momentum L_s = MRv/2",
          "gravitational torque τ = MgL",
          "τ = dL/dt vector relationship",
          "right-hand rule for torque direction",
          "precesses in horizontal plane",
          "Ω_p = 2gL/(Rv)",
          "torque perpendicular to spin angular momentum",
          "L_s vector rotates without changing magnitude",
          "gimbal arm length L as moment arm",
          "I_cm·ω spin calculation",
          "cross product r × F for torque direction"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "gravitational torque acting on spinning disk at end of gimbal arm",
            "torque vector perpendicular to spin angular momentum vector"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "gyroscopic precession in horizontal plane",
            "angular momentum vector rotates horizontally at rate Ω_p",
            "Ω_p = 2gL/(Rv)"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u3_frq025",
    "subject": "apphysc",
    "frqType": "long",
    "title": "Variable Force, Energy, and Power on a Sliding Block",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "A block of mass m = 2.0 kg moves along the x-axis on a frictionless horizontal surface. A single horizontal force acts on the block and varies with position according to F(x) = αx − βx², where α = 12 N/m and β = 3 N/m². The block starts from rest at x = 0.\n\n(a) Use the work integral to calculate the work done by F(x) as the block moves from x = 0 to x = 3.0 m.\n\n(b) Using the work-kinetic energy theorem, determine the speed of the block at x = 3.0 m.\n\n(c) Treating F(x) as a conservative force, derive the potential energy function U(x) associated with F(x). Set U(0) = 0.\n\n(d) Justify whether F(x) = αx − βx² qualifies as a conservative force, referencing a calculus-based condition.\n\n(e) At x = 3.0 m, a second constant force F₂ = 8.0 N is also applied in the +x direction while F(x) continues to act. Calculate the instantaneous power delivered by F₂ alone at that instant.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Use the work integral ∫F·dx to calculate the work done by F(x) = αx − βx² as the block moves from x = 0 to x = 3.0 m, with α = 12 N/m and β = 3 N/m².",
        "rubric": "Student sets up W = ∫₀³ (12x − 3x²) dx, evaluates to [6x² − x³]₀³ = 54 − 27 = 27 J."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the work-kinetic energy theorem and the result from part (a), determine the speed of the block at x = 3.0 m. The block starts from rest.",
        "rubric": "Student applies W_net = ΔKE = ½mv² − 0, solves 27 = ½(2.0)v², obtains v = √27 ≈ 5.2 m/s."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Treating F(x) as a conservative force, derive the potential energy function U(x) by integrating, using the condition U(0) = 0.",
        "rubric": "Student writes F = −dU/dx, so U(x) = −∫F dx = −∫(αx − βx²)dx = −(α/2)x² + (β/3)x³ + C; applies U(0)=0 giving C=0; final answer U(x) = −6x² + x³ (in joules, with x in meters)."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "Justify whether F(x) = αx − βx² qualifies as a conservative force. Reference a calculus-based condition in your justification.",
        "rubric": "Student states that a force is conservative if it depends only on position (not velocity or time) and the curl of F is zero (or in 1D, dF/dy = dF/dz = 0 trivially, and work is path-independent); F(x) depends only on x, so it is conservative and a valid potential energy function exists."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "At x = 3.0 m, a second constant force F₂ = 8.0 N is applied in the +x direction in addition to F(x). Using the speed found in part (b), calculate the instantaneous power delivered by F₂ alone at x = 3.0 m.",
        "rubric": "Student uses P = F₂·v = (8.0 N)(√27 m/s) ≈ (8.0)(5.196) ≈ 41.6 W; accept answers in range 41-42 W with correct formula P = Fv."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the work integral W = ∫₀³ (12x − 3x²) dx, obtaining W = 27 J.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "work integral",
          "∫F dx",
          "∫F·dx",
          "W = ∫F dx",
          "12x − 3x²",
          "6x² − x³",
          "27 J",
          "definite integral",
          "work done by variable force",
          "antiderivative",
          "variable force work",
          "position-dependent force",
          "evaluate from 0 to 3",
          "polynomial integration",
          "net work"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "F(x) = 12x − 3x²",
            "displacement from x=0 to x=3 m"
          ],
          "connector": [
            "integrated over",
            "evaluated as",
            "yields"
          ],
          "effect": [
            "W = 27 J",
            "work done by variable force",
            "area under F-x curve"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Applies the work-kinetic energy theorem W_net = ΔKE = ½mv² to find v = √27 ≈ 5.2 m/s at x = 3.0 m.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "work-kinetic energy theorem",
          "W_net = ΔKE",
          "W = ½mv²",
          "kinetic energy",
          "KE = 0.5mv²",
          "starts from rest",
          "v = √27",
          "5.2 m/s",
          "net work equals change in kinetic energy",
          "ΔKE",
          "initial KE zero",
          "v² = 2W/m",
          "frictionless surface",
          "solve for speed",
          "work-energy principle"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net work done",
            "W = 27 J"
          ],
          "connector": [
            "equals",
            "results in",
            "gives"
          ],
          "effect": [
            "change in kinetic energy",
            "v ≈ 5.2 m/s",
            "speed at x = 3 m"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Derives U(x) = −6x² + x³ correctly using F = −dU/dx and applying U(0) = 0 as the boundary condition.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "F = −dU/dx",
          "potential energy function",
          "U(x) = −6x² + x³",
          "dU/dx",
          "integrate force",
          "U(0) = 0",
          "boundary condition",
          "conservative potential",
          "−(α/2)x²",
          "(β/3)x³",
          "antiderivative of force",
          "negative gradient of potential",
          "constant of integration",
          "reference point",
          "U(x) derivation"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "F = −dU/dx",
            "U(0) = 0 boundary condition"
          ],
          "connector": [
            "yields",
            "integrating gives",
            "applying gives"
          ],
          "effect": [
            "U(x) = −6x² + x³",
            "potential energy function",
            "C = 0"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Justifies that F(x) is conservative because it depends only on position x, the curl is zero (or path-independence holds), and a valid potential energy function exists via F = −dU/dx.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "conservative force",
          "depends only on position",
          "curl of F equals zero",
          "path-independent",
          "∇ × F = 0",
          "F = −dU/dx",
          "potential energy exists",
          "work path independent",
          "1D conservative",
          "function of x only",
          "not velocity dependent",
          "not time dependent",
          "closed path work zero",
          "scalar potential function",
          "gradient of potential"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "force depends only on position x",
            "curl F = 0"
          ],
          "connector": [
            "implies",
            "means",
            "demonstrates"
          ],
          "effect": [
            "conservative force",
            "path-independent work",
            "valid potential energy function"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Calculates instantaneous power P = F₂·v = (8.0)(√27) ≈ 41.6 W using the speed from part (b).",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "instantaneous power",
          "P = Fv",
          "P = F·v",
          "power equation",
          "8.0 N",
          "√27 m/s",
          "5.2 m/s",
          "41.6 W",
          "P = dW/dt",
          "product of force and velocity",
          "power delivered by F₂",
          "constant force power",
          "power at x = 3 m",
          "dot product force velocity",
          "rate of work done"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "F₂ = 8.0 N",
            "v = √27 m/s at x = 3 m"
          ],
          "connector": [
            "multiplied by",
            "gives",
            "yields"
          ],
          "effect": [
            "P ≈ 41.6 W",
            "instantaneous power by F₂",
            "rate of energy delivery"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "physc_u4_frq026",
    "subject": "apphysc",
    "frqType": "short",
    "title": "Variable Mass Rocket Propulsion and Momentum",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A rocket of initial total mass M₀ = 800 kg (including fuel) is launched from rest in deep space, far from any gravitational fields. The rocket expels exhaust gas at a constant speed v_ex = 2400 m/s relative to the rocket. The rocket burns fuel at a constant rate dm/dt = −6 kg/s (so the rocket loses 6 kg of mass per second). The rocket's mass as a function of time is m(t) = M₀ + (dm/dt)t = 800 − 6t kg, valid while fuel remains.\n\nThe rocket equation (Tsiolkovsky equation) states:\n  m(t) · dv/dt = −v_ex · (dm/dt)\n\nwhere v is the rocket's velocity in the inertial frame and dm/dt is the rate of change of rocket mass.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Derive an expression for the thrust force F_thrust acting on the rocket at any time t during the burn. Then calculate the numerical value of the thrust force.",
        "rubric": "Student earns the point by correctly identifying thrust as F_thrust = −v_ex · (dm/dt), substituting v_ex = 2400 m/s and dm/dt = −6 kg/s, and obtaining F_thrust = 14,400 N (14.4 kN). Must show the product of exhaust speed and mass flow rate."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the rocket equation, set up and evaluate the definite integral to find the rocket's velocity v(t) as a function of time. Then determine the rocket's speed at t = 50 s.",
        "rubric": "Student earns the point by separating variables in m(t)·dv/dt = −v_ex·(dm/dt) to get dv = −v_ex·(dm/m), integrating from v=0 to v and from M₀ to m(t) to obtain v(t) = v_ex · ln(M₀/m(t)) = 2400·ln(800/(800−6t)), and evaluating at t = 50 s: m(50)=500 kg, v(50)=2400·ln(800/500)=2400·ln(1.6)≈1131 m/s."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A student claims that because no external forces act on the rocket-plus-exhaust system in deep space, the total momentum of the system must remain zero throughout the burn (since it started from rest). Explain whether this claim is correct and identify the physical principle that governs this situation.",
        "rubric": "Student earns the point by correctly affirming the claim using conservation of linear momentum: with no external forces, the total momentum of the rocket plus all expelled exhaust gas equals zero at all times (p_total = 0). The rocket gains forward momentum equal in magnitude to the backward momentum carried away by the exhaust, consistent with Newton's third law and the impulse-momentum theorem applied to the system."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly derives thrust force as the product of exhaust speed and mass flow rate: F_thrust = v_ex · |dm/dt| = 2400 × 6 = 14,400 N",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "thrust force",
          "F_thrust = v_ex · (dm/dt)",
          "exhaust speed",
          "mass flow rate",
          "14400 N",
          "14.4 kN",
          "rocket thrust",
          "propulsive force",
          "dm/dt",
          "reaction force",
          "exhaust velocity",
          "Newton's second law variable mass",
          "mass ejection rate",
          "v_ex times dm/dt",
          "2400 times 6"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "exhaust expelled at v_ex relative to rocket",
            "mass ejected at rate |dm/dt|",
            "momentum transfer to exhaust"
          ],
          "connector": [
            "produces",
            "results in",
            "gives"
          ],
          "effect": [
            "thrust force of 14400 N",
            "net propulsive force on rocket",
            "F_thrust = v_ex · |dm/dt|"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly separates variables, integrates dv = −v_ex dm/m to get v(t) = v_ex · ln(M₀/m(t)), and evaluates at t = 50 s to obtain approximately 1131 m/s",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "dv = −v_ex dm/m",
          "separation of variables",
          "∫dv",
          "natural logarithm",
          "v(t) = v_ex ln(M₀/m(t))",
          "Tsiolkovsky equation",
          "rocket equation integral",
          "ln(800/500)",
          "1131 m/s",
          "2400 ln(1.6)",
          "definite integral",
          "mass ratio",
          "variable mass integration",
          "logarithmic velocity",
          "m(50) = 500 kg",
          "initial mass over final mass"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "separation of variables in rocket equation",
            "integrating dv = −v_ex dm/m",
            "mass decreasing from M₀ to m(t)"
          ],
          "connector": [
            "yields",
            "leads to",
            "produces"
          ],
          "effect": [
            "v(t) = v_ex · ln(M₀/m(t))",
            "velocity of 1131 m/s at t = 50 s",
            "logarithmic dependence on mass ratio"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly invokes conservation of total linear momentum for the rocket-plus-exhaust system, stating total momentum remains zero because no external forces act, with rocket momentum and exhaust momentum equal and opposite",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "conservation of momentum",
          "no external forces",
          "total momentum zero",
          "p_rocket + p_exhaust = 0",
          "Newton's third law",
          "impulse-momentum theorem",
          "system momentum conserved",
          "exhaust carries momentum",
          "equal and opposite momentum",
          "isolated system",
          "zero net external force",
          "started from rest",
          "p_total = 0",
          "rocket plus exhaust system",
          "backward momentum of exhaust"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "no external forces act on system",
            "isolated system in deep space",
            "zero net impulse on rocket-plus-exhaust system"
          ],
          "connector": [
            "leads to",
            "results in",
            "requires"
          ],
          "effect": [
            "total momentum remains zero",
            "rocket momentum equals negative exhaust momentum",
            "conservation of linear momentum holds throughout burn"
          ]
        }
      }
    ],
    "sampleSolution": null
  }
];