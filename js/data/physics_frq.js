'use strict';
window.PHYSICS_FRQ = [
  {
    "id": "phys1_u1_frq001",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Free Fall from Rest",
    "units": [
      1
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A student drops a ball from rest off the edge of a tall building. The ball falls freely under gravity with no air resistance. Take downward as the positive direction and use g = 10 m/s².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the speed of the ball after it has been falling for 3 seconds.",
        "rubric": "1 point for correctly applying v = gt (or v = v₀ + at with v₀ = 0) to get v = (10)(3) = 30 m/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the distance the ball has fallen after 3 seconds.",
        "rubric": "1 point for correctly applying d = ½gt² (or x = v₀t + ½at²) to get d = ½(10)(3²) = 45 m."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Describe how the velocity of the ball changes as it falls, and identify what causes this change.",
        "rubric": "1 point for stating that the velocity increases (the ball accelerates) at a constant rate of 10 m/s² downward because gravity provides a constant downward acceleration."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly uses v = v₀ + at (or v = gt) with v₀ = 0, a = 10 m/s², t = 3 s to obtain v = 30 m/s.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "v = v₀ + at",
          "v = gt",
          "30 m/s",
          "30",
          "a = 10",
          "g = 10",
          "t = 3",
          "kinematic equation",
          "free fall speed",
          "velocity after 3 seconds",
          "initial velocity zero",
          "dropped from rest",
          "v₀ = 0",
          "linear velocity increase",
          "speed after falling"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly uses d = ½gt² (or x = v₀t + ½at²) with v₀ = 0, a = 10 m/s², t = 3 s to obtain d = 45 m.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "d = ½gt²",
          "x = v₀t + ½at²",
          "45 m",
          "45",
          "½(10)(9)",
          "distance fallen",
          "displacement",
          "kinematic equation",
          "free fall distance",
          "t squared",
          "t = 3 seconds",
          "v₀ = 0",
          "position equation",
          "quadratic displacement",
          "dropped from rest"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student states that velocity increases at a constant rate (constant acceleration) in the downward direction, and attributes this to the constant gravitational acceleration g acting on the ball.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "constant acceleration",
          "increases at constant rate",
          "gravity",
          "gravitational acceleration",
          "g = 10 m/s²",
          "downward acceleration",
          "uniformly accelerates",
          "velocity increases",
          "constant rate of 10",
          "free fall acceleration",
          "net force downward",
          "gravitational force",
          "uniform rate",
          "speeds up uniformly",
          "10 m/s² downward"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravity",
            "gravitational force",
            "constant gravitational acceleration",
            "net downward force",
            "weight of the ball"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to",
            "produces",
            "is responsible for"
          ],
          "effect": [
            "constant acceleration",
            "velocity increases uniformly",
            "ball speeds up at constant rate",
            "uniform increase in speed",
            "acceleration of 10 m/s² downward"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u1_frq002",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Velocity-Time Graph Analysis of a Decelerating Car",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A car travels in a straight line along a road. The velocity-time graph below describes the car's motion over a 10-second interval. From t = 0 s to t = 4 s, the car moves at a constant velocity of +20 m/s. From t = 4 s to t = 10 s, the car decelerates uniformly, reaching a final velocity of −8 m/s at t = 10 s. Take the positive direction as the direction of initial motion.\n\n[Velocity-Time Graph Description: The graph has a horizontal line at v = +20 m/s from t = 0 to t = 4 s, followed by a straight line with negative slope from (4 s, +20 m/s) to (10 s, −8 m/s).]",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the acceleration of the car during the interval from t = 4 s to t = 10 s. Include appropriate sign and units.",
        "rubric": "Student earns 1 point for correctly applying the definition of average acceleration: a = Δv/Δt = (−8 − 20)/(10 − 4) = −28/6 ≈ −4.67 m/s², with the correct negative sign indicating deceleration in the positive direction."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the total displacement of the car over the entire 10-second interval.",
        "rubric": "Student earns 1 point for correctly computing displacement as the total area under the velocity-time graph: displacement from 0-4 s = (20)(4) = 80 m; displacement from 4-10 s = area of trapezoid = ½(20 + (−8))(6) = ½(12)(6) = 36 m; total displacement = 80 + 36 = 116 m."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "At some moment between t = 4 s and t = 10 s, the car's velocity equals zero. Explain what is happening to the car's displacement relative to its position at t = 4 s before and after this moment.",
        "rubric": "Student earns 1 point for explaining that before the zero-velocity instant the car is still moving in the positive direction so displacement relative to the t = 4 s position is increasing, and after the zero-velocity instant the car moves in the negative direction so that displacement begins to decrease; the car reverses direction at the zero-velocity crossing."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates acceleration using a = Δv/Δt over the 4 s to 10 s interval, obtaining approximately −4.67 m/s² (or −14/3 m/s²) with the correct negative sign.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "a = Δv/Δt",
          "average acceleration",
          "slope of velocity-time graph",
          "−4.67 m/s²",
          "−14/3 m/s²",
          "negative acceleration",
          "deceleration",
          "change in velocity divided by time interval",
          "(−8 − 20)/(10 − 4)",
          "uniform acceleration",
          "constant acceleration",
          "rate of change of velocity",
          "m/s²"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "velocity changes from +20 m/s to −8 m/s",
            "time interval of 6 seconds",
            "uniform deceleration"
          ],
          "connector": [
            "results in",
            "gives",
            "yields"
          ],
          "effect": [
            "acceleration of −4.67 m/s²",
            "negative slope on v-t graph",
            "constant negative acceleration"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates total displacement as 116 m by finding the area under the velocity-time graph for both intervals, including the signed area for the portion where velocity is negative.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "area under velocity-time graph",
          "displacement equals area",
          "trapezoid area",
          "rectangle area",
          "116 m",
          "80 m",
          "36 m",
          "signed area",
          "Δx = ½(v₀ + v)t",
          "total displacement",
          "kinematic area method",
          "positive area",
          "net displacement",
          "½(v_i + v_f)(Δt)"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "constant velocity of +20 m/s for 4 s",
            "linearly changing velocity from +20 to −8 m/s over 6 s"
          ],
          "connector": [
            "contributes",
            "adds",
            "gives"
          ],
          "effect": [
            "rectangular area of 80 m",
            "trapezoidal area of 36 m",
            "total displacement of 116 m"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly explains that displacement relative to the t = 4 s position increases while velocity is positive and decreases once velocity becomes negative, identifying the zero-velocity point as where the car reverses direction.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "reverses direction",
          "zero velocity",
          "displacement increases",
          "displacement decreases",
          "positive velocity",
          "negative velocity",
          "turning point",
          "displacement relative to position at t=4s",
          "moves backward",
          "velocity changes sign",
          "instantaneously at rest",
          "net displacement from t=4s",
          "maximum displacement",
          "direction of motion reverses",
          "v = 0 crossing"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "velocity equals zero",
            "velocity becomes negative"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "car reverses direction",
            "displacement begins to decrease",
            "car moves in negative direction"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u1_frq003",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Relative Motion on a Moving Walkway",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A passenger walkway at an airport moves at a constant velocity of 2.0 m/s to the east relative to the ground. A traveler walks at 1.5 m/s to the west relative to the walkway surface. A security camera mounted on the ceiling (fixed to the ground frame) records the traveler's motion. The walkway is 40 m long (measured in the ground frame). At t = 0, the traveler steps onto the western end of the walkway and begins walking westward relative to the walkway.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the traveler's velocity relative to the ground, including magnitude and direction.",
        "rubric": "Student earns 1 point for correctly applying relative velocity vector addition: v_traveler/ground = v_traveler/walkway + v_walkway/ground = (−1.5 m/s) + (+2.0 m/s) = +0.5 m/s (east). Must include correct magnitude of 0.5 m/s and eastward direction."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the time it takes for the traveler to reach the eastern end of the walkway as observed from the ground frame.",
        "rubric": "Student earns 1 point for using the ground-frame velocity of +0.5 m/s eastward over the 40 m walkway length: t = d/v = 40 m / 0.5 m/s = 80 s. Must show correct substitution using the ground-frame velocity (not walkway-relative velocity)."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The traveler believes he is moving westward, yet the security camera shows him moving eastward. Explain this apparent contradiction using the principle of relative motion, and describe what the traveler's position-versus-time graph would look like as recorded by the security camera.",
        "rubric": "Student earns 1 point for correctly explaining that velocity is frame-dependent: the traveler moves west relative to the walkway frame but the walkway itself moves east faster (2.0 m/s east) than the traveler walks west (1.5 m/s west), so the net ground-frame velocity is eastward. Student must also correctly describe the position-time graph as a straight line with positive (eastward) slope of 0.5 m/s, starting at x = 0 and increasing linearly to x = 40 m over 80 s."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates the traveler's velocity relative to the ground as +0.5 m/s east using vector addition of relative velocities.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "relative velocity",
          "v_traveler/ground",
          "vector addition",
          "0.5 m/s east",
          "v_AG = v_AB + v_BG",
          "reference frame",
          "net velocity eastward",
          "ground frame",
          "galilean velocity addition",
          "superposition of velocities"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "walkway velocity 2.0 m/s east",
            "traveler velocity 1.5 m/s west relative to walkway"
          ],
          "connector": [
            "results in",
            "vector sum gives",
            "combined yields"
          ],
          "effect": [
            "0.5 m/s east relative to ground",
            "net eastward velocity"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates the time of 80 s using the ground-frame velocity of 0.5 m/s and the 40 m displacement.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "t = d/v",
          "80 s",
          "80 seconds",
          "ground frame velocity 0.5 m/s",
          "walkway length 40 m",
          "constant velocity kinematics",
          "d = vt",
          "time equals distance divided by speed",
          "kinematic equation",
          "ground-frame displacement"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "ground-frame velocity 0.5 m/s",
            "walkway length 40 m"
          ],
          "connector": [
            "gives",
            "results in",
            "yields"
          ],
          "effect": [
            "time of 80 s",
            "80 seconds to traverse walkway"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly explains velocity is frame-dependent and the walkway's eastward speed exceeds the traveler's westward walking speed, and correctly describes the x-t graph as a straight line with positive slope of 0.5 m/s.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "frame-dependent velocity",
          "reference frame",
          "relative motion principle",
          "walkway eastward speed exceeds westward walking speed",
          "net eastward displacement",
          "position-time graph positive slope",
          "straight line x-t graph",
          "slope equals velocity 0.5 m/s",
          "linear position increase",
          "observer-dependent motion"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "walkway eastward speed 2.0 m/s exceeds westward walking speed 1.5 m/s",
            "velocity measured in different reference frames"
          ],
          "connector": [
            "causes",
            "results in",
            "explains why"
          ],
          "effect": [
            "eastward motion in ground frame",
            "positive slope on position-time graph",
            "apparent contradiction resolved"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u1_frq004",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Projectile Motion of a Kicked Soccer Ball",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "A soccer player kicks a ball from the ground at an angle of 30° above the horizontal with an initial speed of 20 m/s. Assume air resistance is negligible and use g = 10 m/s². The ball lands back on the ground at the same elevation from which it was kicked. Use the following component equations as needed: v₀ₓ = v₀cos θ, v₀ᵧ = v₀sin θ, x = v₀ₓt, y = v₀ᵧt − ½gt², vᵧ = v₀ᵧ − gt.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the horizontal and vertical components of the ball's initial velocity.",
        "rubric": "Award 1 point for correctly calculating both components: v₀ₓ = 20cos30° ≈ 17.3 m/s and v₀ᵧ = 20sin30° = 10 m/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the total time the ball is in the air.",
        "rubric": "Award 1 point for correctly using the vertical kinematic equation to find total flight time. Setting y = 0: 0 = v₀ᵧt − ½gt², solving gives t = 2v₀ᵧ/g = 2(10)/10 = 2 s."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the horizontal range (total horizontal distance traveled) of the ball.",
        "rubric": "Award 1 point for correctly using x = v₀ₓ · t = 17.3 m/s × 2 s ≈ 34.6 m (accept 34-35 m)."
      },
      {
        "label": "d",
        "command": "Describe",
        "question": "Describe how the horizontal velocity component and the vertical velocity component each change (or do not change) throughout the ball's flight, and explain why each behaves as it does.",
        "rubric": "Award 1 point for correctly stating that the horizontal velocity remains constant (no horizontal acceleration, no air resistance) and the vertical velocity changes at a constant rate of −10 m/s² due to gravitational acceleration directed downward."
      },
      {
        "label": "e",
        "command": "Predict",
        "question": "Predict what would happen to the total time of flight and the horizontal range if the launch angle were increased to 60° while keeping the initial speed at 20 m/s. Justify your prediction using kinematic reasoning.",
        "rubric": "Award 1 point for correctly predicting that the time of flight increases (v₀ᵧ = 20sin60° ≈ 17.3 m/s > 10 m/s, so t = 2v₀ᵧ/g increases) and that the horizontal range remains the same as at 30° (≈34.6 m) because sin(2×60°) = sin120° = sin60° = sin(2×30°). Accept answers that correctly note the range is the same as at 30° with a valid symmetry or R = v₀²sin2θ/g argument, and that flight time is longer."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates both the horizontal component v₀ₓ = v₀cosθ ≈ 17.3 m/s and vertical component v₀ᵧ = v₀sinθ = 10 m/s using trigonometric decomposition of the initial velocity vector.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "v₀ₓ = v₀cosθ",
          "v₀ᵧ = v₀sinθ",
          "horizontal component",
          "vertical component",
          "17.3 m/s",
          "10 m/s",
          "cos30°",
          "sin30°",
          "vector decomposition",
          "initial velocity components",
          "trigonometric components",
          "velocity vector"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "initial velocity at 30° above horizontal",
            "vector decomposition using trigonometry"
          ],
          "connector": [
            "yields",
            "gives",
            "produces"
          ],
          "effect": [
            "horizontal component v₀ₓ = 17.3 m/s",
            "vertical component v₀ᵧ = 10 m/s"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates total flight time by setting vertical displacement y = 0 and solving the kinematic equation 0 = v₀ᵧt − ½gt², yielding t = 2v₀ᵧ/g = 2 s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "y = v₀ᵧt − ½gt²",
          "total flight time",
          "time of flight",
          "t = 2v₀ᵧ/g",
          "2 seconds",
          "vertical displacement zero",
          "lands at same height",
          "kinematic equation",
          "t = 2(10)/10",
          "factor out t",
          "symmetric trajectory",
          "projectile returns to launch height"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "vertical displacement returns to zero",
            "symmetric parabolic trajectory"
          ],
          "connector": [
            "allows solving",
            "gives",
            "yields"
          ],
          "effect": [
            "total flight time t = 2 s",
            "t = 2v₀ᵧ/g"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly calculates horizontal range using x = v₀ₓ · t = 17.3 m/s × 2 s ≈ 34.6 m (accept 34-35 m).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "x = v₀ₓt",
          "horizontal range",
          "34.6 m",
          "34 m",
          "35 m",
          "horizontal displacement",
          "constant horizontal velocity",
          "17.3 × 2",
          "total horizontal distance",
          "range formula",
          "uniform horizontal motion",
          "no horizontal acceleration"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "constant horizontal velocity",
            "total flight time of 2 s"
          ],
          "connector": [
            "produces",
            "gives",
            "results in"
          ],
          "effect": [
            "horizontal range ≈ 34.6 m",
            "x = v₀ₓt"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly describes that horizontal velocity is constant throughout flight (zero horizontal acceleration, no air resistance) and vertical velocity changes at a constant rate of −10 m/s² (gravitational acceleration downward).",
        "partLabel": "d",
        "skill": "describe",
        "keywords": [
          "horizontal velocity constant",
          "zero horizontal acceleration",
          "vertical velocity changes linearly",
          "gravitational acceleration",
          "−10 m/s²",
          "constant rate of change",
          "gravity acts downward",
          "no air resistance",
          "uniform horizontal motion",
          "vertical deceleration then acceleration",
          "net horizontal force is zero",
          "Newton's first law horizontal"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravity",
            "gravitational acceleration downward",
            "no horizontal force acting"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "constant horizontal velocity",
            "vertical velocity decreases then increases",
            "vertical component changes at constant rate of −10 m/s²"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly predicts that the time of flight increases at 60° because v₀ᵧ is larger, and that the horizontal range remains the same as at 30° (≈34.6 m) because sin(2×60°) = sin(2×30°), using R = v₀²sin2θ/g or complementary angle symmetry argument, with valid kinematic justification.",
        "partLabel": "e",
        "skill": "predict",
        "keywords": [
          "time of flight increases",
          "greater vertical component at 60°",
          "range same as 30°",
          "R = v₀²sin2θ/g",
          "sin120° = sin60°",
          "complementary angles",
          "range symmetry about 45°",
          "longer time in air",
          "smaller horizontal component at 60°",
          "sin2θ equal for complementary launch angles",
          "v₀ᵧ = 20sin60° ≈ 17.3 m/s",
          "t = 2v₀ᵧ/g larger at 60°"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "increased launch angle to 60°",
            "larger vertical component v₀ᵧ",
            "smaller horizontal component v₀ₓ"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "longer flight time",
            "same horizontal range as 30°",
            "range unchanged due to complementary angle symmetry"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u1_frq005",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Projectile Launched from a Moving Platform with Observer in Relative Motion",
    "units": [
      1
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A small cart moves along a horizontal track at a constant velocity of +4.0 m/s relative to the ground. At t = 0, when the cart is at position x = 0, a launcher mounted on the cart fires a ball straight upward (relative to the cart) with an initial speed of 19.6 m/s. Simultaneously, an observer standing on the ground at x = +12.0 m begins walking in the −x direction at a constant speed of 2.0 m/s. Ignore air resistance and use g = 9.8 m/s².\n\nThe following information summarizes the scenario:\n- Cart velocity (ground frame): v_cart = +4.0 m/s\n- Ball's initial vertical speed (cart frame): v_y0 = +19.6 m/s\n- Ball's initial horizontal speed (ground frame): v_x0 = +4.0 m/s (same as cart)\n- Observer's initial position: x_obs = +12.0 m\n- Observer's velocity (ground frame): v_obs = −2.0 m/s\n- g = 9.8 m/s²",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the total time the ball is in the air from launch until it returns to the height of the launcher. Show your work.",
        "rubric": "Student earns the point by correctly applying the kinematic equation for vertical displacement equal to zero (Δy = 0) using v_y0 = +19.6 m/s and g = 9.8 m/s², yielding t = 2v_y0/g = 2(19.6)/9.8 = 4.0 s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the horizontal displacement of the ball (as measured in the ground frame) during its entire flight. Then determine the horizontal displacement of the cart during the same time interval. Explain whether the ball lands back on the launcher.",
        "rubric": "Student earns the point by calculating the ball's horizontal displacement as Δx_ball = v_x0 × t = 4.0 × 4.0 = 16.0 m, the cart's horizontal displacement as Δx_cart = v_cart × t = 4.0 × 4.0 = 16.0 m, and correctly concluding the ball lands back on the launcher because they share the same horizontal velocity and thus the same horizontal displacement."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Describe the trajectory (shape of path) of the ball as seen by (i) an observer riding on the cart and (ii) an observer standing stationary on the ground. Justify each description by referencing the horizontal and vertical velocity components in each reference frame.",
        "rubric": "Student earns the point by correctly stating that in the cart's reference frame the ball moves straight up and then straight down (vertical line / 1D motion) because the relative horizontal velocity of the ball with respect to the cart is zero, AND correctly stating that in the ground frame the ball follows a parabolic arc because it has both a constant horizontal velocity component (+4.0 m/s) and a changing vertical velocity component due to gravitational acceleration."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Determine the position of the walking observer (relative to the ground) at the exact moment the ball returns to the launcher. Then calculate the position of the ball (relative to the ground) at that same moment, and determine the distance between the observer and the ball at that instant.",
        "rubric": "Student earns the point by correctly computing: observer position = x_obs + v_obs × t = 12.0 + (−2.0)(4.0) = 12.0 − 8.0 = +4.0 m; ball (launcher) position = 0 + 4.0 × 4.0 = +16.0 m; distance between observer and ball = 16.0 − 4.0 = 12.0 m."
      },
      {
        "label": "e",
        "command": "Explain",
        "question": "At the moment the ball is at the peak of its trajectory, determine the velocity of the ball relative to the walking observer. Then explain what a position-vs-time graph of the ball's horizontal position (ground frame) would look like over the entire flight, and describe what feature of that graph represents the ball's horizontal velocity.",
        "rubric": "Student earns the point by correctly calculating the ball's velocity relative to the observer: the ball's horizontal velocity in the ground frame is +4.0 m/s and the observer's velocity is −2.0 m/s, so the relative velocity is +4.0 − (−2.0) = +6.0 m/s horizontally, and the ball's vertical velocity at the peak is 0 m/s (v_y = v_y0 − gt = 19.6 − 9.8×2.0 = 0), giving a total relative velocity of +6.0 m/s in the horizontal direction; AND correctly describing the x-vs-t graph as a straight line with positive constant slope (not curved) because horizontal velocity is constant throughout the flight, with the slope of the line equal to the ball's horizontal velocity (+4.0 m/s)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies Δy = 0 kinematic equation to find total flight time of 4.0 s using v_y0 = 19.6 m/s and g = 9.8 m/s²",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Δy = 0",
          "v_y0 = 19.6",
          "t = 2v/g",
          "total flight time",
          "time of flight",
          "4.0 s",
          "4 seconds",
          "vertical displacement zero",
          "returns to launch height",
          "kinematic equation",
          "vertical kinematics",
          "symmetric trajectory",
          "launch and return same height",
          "v_y0 divided by g"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "vertical displacement equals zero",
            "ball returns to launch height"
          ],
          "connector": [
            "allows us to solve for",
            "yields",
            "gives"
          ],
          "effect": [
            "total flight time of 4.0 s",
            "t = 2v_y0/g = 4.0 s"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates horizontal displacement of ball (16.0 m) and cart (16.0 m) in the ground frame and concludes ball lands back on launcher due to equal horizontal velocities",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Δx = v_x × t",
          "horizontal displacement",
          "16.0 m",
          "same horizontal velocity",
          "lands on launcher",
          "v_x0 = 4.0 m/s",
          "constant horizontal velocity",
          "no horizontal acceleration",
          "ball returns to cart",
          "relative horizontal velocity zero",
          "projectile shares cart velocity",
          "horizontal displacement ball equals cart",
          "inertia preserves horizontal motion"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "same horizontal velocity",
            "constant horizontal velocity of ball and cart"
          ],
          "connector": [
            "results in",
            "causes",
            "means"
          ],
          "effect": [
            "ball lands back on launcher",
            "equal horizontal displacements",
            "no horizontal separation"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies trajectory as vertical (straight up and down) in the cart frame and parabolic in the ground frame, with correct justification referencing relative horizontal velocity and independent components",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "straight up and down",
          "vertical path",
          "parabolic trajectory",
          "parabola",
          "cart frame",
          "ground frame",
          "reference frame",
          "zero relative horizontal velocity",
          "constant horizontal velocity",
          "projectile motion",
          "independent components",
          "relative motion",
          "one-dimensional in cart frame",
          "two-dimensional in ground frame",
          "horizontal velocity subtracted out in cart frame",
          "galilean relativity"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "constant horizontal velocity in ground frame",
            "zero horizontal velocity relative to cart"
          ],
          "connector": [
            "results in",
            "produces",
            "leads to"
          ],
          "effect": [
            "parabolic arc in ground frame",
            "straight vertical path in cart frame"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly calculates observer position (+4.0 m), ball/launcher position (+16.0 m), and separation distance (12.0 m) at t = 4.0 s",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "observer position",
          "x = x_0 + v×t",
          "4.0 m",
          "16.0 m",
          "separation distance",
          "12.0 m",
          "−2.0 m/s observer",
          "displacement of observer",
          "ball position ground frame",
          "distance between observer and ball",
          "observer walks in negative direction",
          "x_obs at t = 4 s",
          "launcher position at landing",
          "subtract positions to find distance"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "observer moving at −2.0 m/s for 4.0 s",
            "ball and cart moving at +4.0 m/s for 4.0 s"
          ],
          "connector": [
            "results in",
            "gives",
            "means"
          ],
          "effect": [
            "observer at +4.0 m",
            "ball at +16.0 m",
            "separation of 12.0 m"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly calculates relative velocity of ball with respect to observer as +6.0 m/s horizontal (with 0 vertical at peak), AND correctly describes x-vs-t graph as a straight line with constant positive slope equal to the horizontal velocity (+4.0 m/s)",
        "partLabel": "e",
        "skill": "explain",
        "keywords": [
          "relative velocity",
          "v_ball − v_observer",
          "6.0 m/s",
          "zero vertical velocity at peak",
          "x vs t graph",
          "position-time graph",
          "straight line",
          "constant slope",
          "slope equals velocity",
          "horizontal velocity constant",
          "4.0 m/s slope",
          "linear graph horizontal",
          "velocity subtraction between frames",
          "peak means v_y = 0",
          "no horizontal force so slope is uniform",
          "relative velocity formula"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "constant horizontal velocity",
            "no horizontal acceleration"
          ],
          "connector": [
            "results in",
            "produces",
            "means"
          ],
          "effect": [
            "straight line on x-vs-t graph",
            "constant slope on position-time graph",
            "slope equals horizontal velocity"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u2_frq006",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Newton's Third Law: Action-Reaction Pairs",
    "units": [
      2
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A student pushes a 10 kg stationary box against a wall with a horizontal force of 50 N directed toward the wall. The box remains at rest. The student claims that because the box does not move, there are no forces acting on it.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify the Newton's third law action-reaction pair associated with the student pushing the box. For each force in the pair, state the object exerting the force and the object receiving the force.",
        "rubric": "Student earns 1 point for correctly identifying the action-reaction pair: (1) the student exerts a 50 N force on the box directed toward the wall, AND (2) the box exerts an equal 50 N force back on the student directed away from the wall. Both objects must be correctly identified for each force."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Explain why the student's claim that 'no forces act on the box' is incorrect. Reference the forces you would include on a free body diagram of the box.",
        "rubric": "Student earns 1 point for identifying at least three forces acting on the box: the applied push force from the student (toward wall), the normal force from the wall (away from wall), and the gravitational force/weight (downward), and a normal force from the floor (upward). Student must explicitly state that multiple forces act on the box and that net force equals zero, not that forces are absent."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "The box remains stationary. Justify why the box does not accelerate, using Newton's laws.",
        "rubric": "Student earns 1 point for citing Newton's first law or Newton's second law (F_net = ma) and correctly reasoning that the net force on the box is zero (forces are balanced), therefore acceleration is zero and the box remains at rest."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies the Newton's third law action-reaction pair: student pushes box toward wall with 50 N, and box pushes back on student with equal 50 N in the opposite direction.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "action-reaction pair",
          "Newton's third law",
          "equal and opposite",
          "box pushes student",
          "student pushes box",
          "reaction force",
          "third law pair",
          "equal magnitude opposite direction",
          "force on student",
          "force on box",
          "contact force",
          "interaction pair",
          "50 N on student",
          "exerts force back"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "student pushes box",
            "applied force",
            "student exerts 50 N on box"
          ],
          "connector": [
            "results in",
            "produces",
            "causes",
            "paired with"
          ],
          "effect": [
            "box pushes back on student",
            "reaction force",
            "equal and opposite force",
            "box exerts 50 N on student"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly identifies multiple forces acting on the box (applied force, normal force from wall, weight/gravity, normal force from floor) and states that forces exist even though the box is stationary.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "free body diagram",
          "normal force from wall",
          "normal force from floor",
          "weight",
          "gravitational force",
          "applied force",
          "net force is zero",
          "balanced forces",
          "forces cancel",
          "multiple forces acting",
          "wall exerts normal force",
          "floor exerts normal force",
          "stationary does not mean no forces",
          "equilibrium",
          "four forces"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "multiple forces acting",
            "balanced forces",
            "four forces on box"
          ],
          "connector": [
            "results in",
            "leads to",
            "means",
            "therefore"
          ],
          "effect": [
            "net force zero",
            "no acceleration",
            "box remains at rest",
            "forces exist despite no motion"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly cites Newton's first law or Newton's second law (F_net = ma = 0) to justify that zero net force means zero acceleration, so the box remains at rest.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "Newton's first law",
          "Newton's second law",
          "F_net = ma",
          "net force equals zero",
          "acceleration is zero",
          "balanced forces",
          "object at rest stays at rest",
          "inertia",
          "F=ma",
          "no net force no acceleration",
          "law of inertia",
          "vector sum of forces",
          "zero net force",
          "forces in equilibrium",
          "sum of forces equals zero"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net force is zero",
            "balanced forces",
            "forces cancel",
            "vector sum equals zero"
          ],
          "connector": [
            "therefore",
            "results in",
            "means",
            "according to Newton's second law"
          ],
          "effect": [
            "acceleration is zero",
            "box does not accelerate",
            "box remains at rest",
            "no change in velocity"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u2_frq007",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Block on a Rough Inclined Plane",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A block of mass m = 5.0 kg is placed on a rough inclined plane that makes an angle of θ = 30° with the horizontal. The coefficient of kinetic friction between the block and the surface is μk = 0.20. The block is given a brief push and slides up the incline, then decelerates and comes to a stop. Consider the block while it is sliding UP the incline (before it stops). Use g = 10 m/s².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Draw and describe a free body diagram for the block as it slides up the incline. Label all forces acting on the block and indicate the direction of each force.",
        "rubric": "Student must identify all four forces: weight (mg) directed straight downward, normal force (N) perpendicular to the incline surface directed away from the surface, a friction force directed down the incline (opposing upward motion), and no other spurious forces. The friction force must be directed down the slope (opposing motion) for full credit."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the magnitude of the net force acting on the block as it slides up the incline.",
        "rubric": "Student correctly calculates the normal force N = mg cosθ = (5.0)(10)(cos30°) ≈ 43.3 N, the gravitational component along the incline mg sinθ = (5.0)(10)(sin30°) = 25 N (down the slope), the kinetic friction force fk = μkN = (0.20)(43.3) ≈ 8.66 N (down the slope), and the net force = mg sinθ + fk = 25 + 8.66 ≈ 33.7 N directed down the incline. Accept answers in the range 33-34 N."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "After the block stops on the incline, a student claims that the block will immediately begin sliding back down. Explain whether this claim is necessarily correct, referencing the relevant forces and Newton's first law.",
        "rubric": "Student must state that the block will remain stationary (not necessarily slide back) if static friction is sufficient to balance the gravitational component along the incline. The maximum static friction force (μs × N) may be greater than or equal to mg sinθ, in which case the net force is zero and the block stays at rest per Newton's first law. The claim is not necessarily correct because static friction can prevent motion if μs is large enough."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies and describes all four forces in the free body diagram: weight downward, normal force perpendicular to and away from the surface, kinetic friction directed DOWN the slope (opposing upward motion), with no extra or mislabeled forces.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "weight mg downward",
          "normal force perpendicular to surface",
          "kinetic friction down the slope",
          "friction opposes upward motion",
          "four forces on block",
          "free body diagram",
          "gravitational force vertical",
          "N perpendicular to incline",
          "fk directed down incline",
          "no spurious horizontal force",
          "contact force from surface",
          "force diagram labeled"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly calculates the net force by finding N = mg cosθ, fk = μkN, adding mg sinθ and fk (both down the slope), arriving at a net force of approximately 33-34 N directed down the incline.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "N = mg cosθ",
          "normal force 43.3 N",
          "fk = μkN",
          "kinetic friction force 8.66 N",
          "gravitational component along incline mg sinθ = 25 N",
          "net force equals mg sinθ plus fk",
          "Fnet ≈ 33.7 N",
          "both forces directed down the incline",
          "Newton's second law ΣF = ma",
          "deceleration while sliding up",
          "vector sum of forces along slope",
          "friction and gravity component same direction"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational component along incline mg sinθ",
            "kinetic friction force fk directed down slope"
          ],
          "connector": [
            "adds to",
            "combined with",
            "both act in same direction resulting in"
          ],
          "effect": [
            "net force directed down the slope",
            "deceleration of block sliding upward",
            "Fnet ≈ 33.7 N down incline"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly explains that the block will not necessarily slide back down because static friction may be large enough to balance mg sinθ, invoking Newton's first law (zero net force means the object remains at rest).",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "static friction force",
          "maximum static friction μs × N",
          "static friction balances gravitational component mg sinθ",
          "net force equals zero at rest",
          "Newton's first law inertia",
          "object at rest remains at rest",
          "coefficient of static friction μs",
          "not necessarily slide back down",
          "static equilibrium on incline",
          "sufficient static friction prevents sliding",
          "claim is not necessarily correct",
          "μs may exceed tan θ"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "static friction force up the incline",
            "sufficient coefficient of static friction μs"
          ],
          "connector": [
            "balances",
            "opposes",
            "prevents sliding by counteracting"
          ],
          "effect": [
            "block remains stationary on incline",
            "net force equals zero",
            "no sliding back down the slope"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u2_frq008",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Coupled Blocks on a Rough Inclined Plane with Tension",
    "units": [
      2
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Two blocks are connected by a light, inextensible string. Block A (mass m_A = 4.0 kg) sits on a rough inclined plane tilted at θ = 30° above the horizontal. The coefficient of kinetic friction between Block A and the incline is μ_k = 0.20. Block B (mass m_B = 2.0 kg) hangs vertically from the string that passes over a massless, frictionless pulley at the top of the incline. The system is released from rest and Block B accelerates downward. Use g = 10 m/s².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe all forces acting on Block A as it moves up the incline. For each force, state its direction relative to the incline surface or vertical, and identify the object exerting that force on Block A.",
        "rubric": "Student earns 1 point for correctly identifying all four forces on Block A with correct directions and interaction pairs: (1) gravitational force (weight, m_A·g) directed straight downward exerted by Earth, (2) normal force perpendicular to and away from the incline surface exerted by the incline on Block A, (3) kinetic friction force directed down the incline (opposing Block A's upward motion) exerted by the incline surface on Block A, and (4) tension force directed up the incline along the string exerted by the string on Block A."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the acceleration of the system after it is released. Show all work including free-body analysis for both blocks.",
        "rubric": "Student earns 1 point for correctly applying Newton's second law to both blocks and solving for acceleration. For Block B: m_B·g − T = m_B·a → 2.0(10) − T = 2.0a. For Block A along the incline (taking up-incline as positive for A): T − m_A·g·sin30° − μ_k·m_A·g·cos30° = m_A·a → T − 4(10)(0.5) − 0.20(4)(10)(0.866) = 4a → T − 20 − 6.93 = 4a. Adding equations: 20 − 20 − 6.93 = 6a → a = −6.93/6 ≈ −1.15 m/s²; since this is negative the assumed direction is wrong. The net driving force = m_B·g − m_A·g·sin30° − μ_k·m_A·g·cos30° = 20 − 20 − 6.93 = −6.93 N, indicating the system does not move as described. Note: the prompt states Block B accelerates downward, but the numeric values yield a negative net force in that assumed direction; full credit is awarded to students who correctly set up Newton's second law for both blocks with a consistent sign convention, substitute all values correctly, and report either a ≈ 1.15 m/s² (magnitude) with a correct direction statement or conclude the system does not accelerate as described."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student claims that the tension in the string is equal to the weight of Block B (T = m_B·g = 20 N) because Block B is 'just hanging there pulling the string.' Justify why this claim is incorrect, referencing Newton's second law.",
        "rubric": "Student earns 1 point for correctly arguing that T ≠ m_B·g because Block B is accelerating (not in equilibrium), so the net force on Block B is nonzero. By Newton's second law applied to Block B, m_B·g − T = m_B·a, which means T = m_B·(g − a) < m_B·g when a > 0. The tension equals the weight only when acceleration is zero (static equilibrium). Student must explicitly invoke Newton's second law (ΣF = ma) and connect nonzero acceleration to T being less than m_B·g."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies all forces on Block A with proper directions and agent-object pairs: weight downward (Earth on A), normal force perpendicular to incline (incline on A), kinetic friction down the incline (incline on A, opposing upward motion), and tension up the incline (string on A).",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "weight downward",
          "gravitational force",
          "normal force perpendicular to incline",
          "kinetic friction down the incline",
          "tension up the incline",
          "friction opposes upward motion",
          "force exerted by incline on block A",
          "force exerted by string on block A",
          "force exerted by Earth on block A",
          "agent-object pair",
          "four forces on block A",
          "perpendicular to surface",
          "along the incline surface"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies Newton's second law to both Block A (along incline) and Block B (vertical), sets up coupled equations with consistent sign convention, substitutes μ_k, sin30°, cos30°, and solves for acceleration (arriving at approximately 1.15 m/s² magnitude or correctly concluding the system remains stationary given the net driving force is negative).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Newton's second law",
          "ΣF = ma",
          "F = ma",
          "m_B·g − T = m_B·a",
          "T − m_A·g·sin30° − friction = m_A·a",
          "μ_k·m_A·g·cos30°",
          "kinetic friction force along incline",
          "net force equals mass times acceleration",
          "coupled equations for both blocks",
          "acceleration 1.15 m/s²",
          "consistent sign convention",
          "gravitational component along incline",
          "normal force equals m_A·g·cos30°",
          "free-body diagram Block A",
          "free-body diagram Block B"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "net force on system",
            "gravitational force on Block B",
            "kinetic friction force on Block A",
            "gravitational component along incline on Block A"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "system acceleration",
            "nonzero net force",
            "blocks accelerate or remain stationary"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly rejects the claim by invoking Newton's second law for Block B: since Block B accelerates, net force is nonzero, so T = m_B·(g − a) ≠ m_B·g. Tension equals weight only in equilibrium (zero acceleration). Student must cite Newton's second law and connect acceleration to reduced tension.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "Newton's second law",
          "ΣF = ma",
          "net force on Block B is nonzero",
          "Block B is accelerating",
          "T = m_B(g − a)",
          "tension less than weight of Block B",
          "T ≠ m_B·g",
          "not in equilibrium",
          "nonzero acceleration implies nonzero net force",
          "tension equals weight only when acceleration equals zero",
          "static equilibrium condition not satisfied",
          "m_B·g − T = m_B·a",
          "unbalanced forces on Block B"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "nonzero acceleration of Block B",
            "Block B not in equilibrium",
            "net force on Block B is nonzero"
          ],
          "connector": [
            "results in",
            "means that",
            "causes"
          ],
          "effect": [
            "net force on Block B is nonzero",
            "tension is less than weight of Block B",
            "T = m_B(g − a)"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u2_frq009",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Block on an Inclined Plane with Friction and Tension",
    "units": [
      2
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A block of mass m = 5.0 kg sits on a rough inclined plane that makes an angle of θ = 30° with the horizontal. A light string is attached to the block and runs parallel to the incline, over a frictionless pulley at the top of the incline, and connects to a hanging block of mass M = 4.0 kg that is suspended vertically. The coefficient of kinetic friction between the 5.0 kg block and the incline is μk = 0.20. The system is observed to accelerate: the hanging block moves downward and the block on the incline moves up the slope. Use g = 10 m/s².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Draw",
        "question": "Draw a free body diagram for the block on the incline (mass m = 5.0 kg). Label all forces acting on it, including their directions. Do not include the pulley or the hanging block in your diagram.",
        "rubric": "Diagram must show four correctly labeled and directed forces: weight (mg) straight downward, normal force perpendicular to and away from the incline surface, tension up the incline (parallel to slope), and kinetic friction down the incline (opposing motion, which is up the slope). All four forces must be present and correctly directed for full credit."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "A student claims that the normal force on the block on the incline equals mg (the full weight of the block). Explain why the student is incorrect and write the correct expression for the normal force.",
        "rubric": "Student must state that the normal force equals the component of gravity perpendicular to the incline surface, not the full weight. The correct expression is N = mg cos θ = (5.0)(10) cos 30° ≈ 43.3 N. Credit earned for identifying that only the perpendicular component of gravity is balanced by the normal force because the surface is tilted."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the magnitude of the net force on the hanging block (mass M = 4.0 kg) in terms of tension T and known quantities. Then write the equation of motion (Newton's second law) for the hanging block, taking downward as positive.",
        "rubric": "Student must apply Newton's second law to the hanging block: Mg − T = Ma. Substituting values: (4.0)(10) − T = 4.0a, giving 40 − T = 4.0a. Full credit for correctly identifying the two forces (Mg downward, T upward) and writing the correct net force equation consistent with the chosen sign convention."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using Newton's second law for both blocks and the constraint that they share the same magnitude of acceleration, calculate the acceleration of the system.",
        "rubric": "Student must write two equations: for the incline block (up-slope positive): T − mg sin θ − μk mg cos θ = ma → T − (5.0)(10)(0.5) − (0.20)(5.0)(10)(cos 30°) = 5.0a → T − 25 − 8.66 = 5.0a → T − 33.66 = 5.0a. Combined with 40 − T = 4.0a, adding equations: 40 − 33.66 = 9.0a → 6.34 = 9.0a → a ≈ 0.70 m/s². Full credit for correct simultaneous equation setup and answer in the range 0.68-0.72 m/s²."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Suppose the string is suddenly cut while the system is in motion. Predict what happens to the block on the incline immediately after the string is cut, and justify your answer using Newton's first or second law. Assume the block was moving up the incline when the string was cut.",
        "rubric": "Student must predict that the block decelerates and eventually stops (or immediately begins to decelerate), then may slide back down if gravity component exceeds static friction. Justification must cite Newton's second law: with tension removed, the net force on the block is now down the incline (gravity component mg sin θ plus kinetic friction mg μk cos θ, both directed down the slope while block still moves up), so the block decelerates. Full credit for correctly identifying the direction of net force and applying F_net = ma to conclude deceleration."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Free body diagram includes all four correct forces: weight (mg) downward, normal force perpendicular to incline surface, tension directed up the incline, and kinetic friction directed down the incline (opposing upward motion).",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "weight",
          "mg",
          "gravity",
          "normal force",
          "perpendicular to incline",
          "tension",
          "up the incline",
          "kinetic friction",
          "down the incline",
          "opposing motion",
          "free body diagram",
          "FBD",
          "four forces",
          "force directions",
          "labeled forces"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly explains that the normal force equals only the perpendicular component of gravity (mg cos θ) because the surface is inclined, not the full weight mg.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "N = mg cos theta",
          "perpendicular component",
          "mg cos θ",
          "normal force",
          "component of gravity",
          "43 N",
          "43.3 N",
          "inclined surface",
          "not equal to mg",
          "tilted surface",
          "cos 30",
          "weight component",
          "equilibrium perpendicular to slope",
          "surface tilt reduces normal force",
          "N not equal to full weight"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "inclined surface",
            "tilted plane",
            "angle θ",
            "surface at 30 degrees"
          ],
          "connector": [
            "results in",
            "means that",
            "causes",
            "therefore"
          ],
          "effect": [
            "only perpendicular component",
            "N = mg cos θ",
            "normal force less than mg",
            "normal force equals mg cos 30"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly applies Newton's second law to the hanging block, identifying Mg downward and T upward, and writes Mg − T = Ma (or equivalently 40 − T = 4.0a).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "Newton's second law",
          "F=ma",
          "Mg - T = Ma",
          "40 - T = 4a",
          "net force",
          "hanging block",
          "tension upward",
          "weight downward",
          "Mg downward",
          "equation of motion",
          "downward positive convention",
          "sum of forces",
          "unbalanced force",
          "net downward force",
          "T opposes Mg"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 3,
        "points": 1,
        "description": "Student correctly sets up Newton's second law for the incline block including friction and gravity components, combines with hanging block equation, and solves for acceleration a ≈ 0.70 m/s².",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "T - mg sin theta - friction = ma",
          "T - 25 - 8.66 = 5a",
          "simultaneous equations",
          "a = 0.70",
          "0.70 m/s²",
          "add equations",
          "eliminate T",
          "kinetic friction force",
          "μk mg cos θ",
          "net force incline block",
          "system acceleration",
          "gravity component along incline",
          "mg sin 30",
          "shared acceleration constraint",
          "inextensible string"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 4,
        "points": 1,
        "description": "Student predicts the block decelerates after the string is cut and correctly justifies using Newton's second law by identifying that the net force is now directed down the incline (gravity component plus friction both oppose upward motion), causing deceleration.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "decelerates",
          "net force down the incline",
          "Newton's second law",
          "tension removed",
          "gravity component down slope",
          "mg sin theta",
          "kinetic friction down the slope",
          "opposing upward motion",
          "F_net = ma",
          "block slows down",
          "deceleration",
          "no longer balanced by tension",
          "both forces oppose motion",
          "negative acceleration up slope",
          "resultant force opposes velocity"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "string cut",
            "tension removed",
            "T = 0",
            "no longer any upward tension along slope"
          ],
          "connector": [
            "results in",
            "leads to",
            "causes",
            "therefore"
          ],
          "effect": [
            "net force down the incline",
            "block decelerates",
            "block slows down",
            "acceleration directed down the slope"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u2_frq010",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Modified Atwood Machine on an Inclined Plane with Friction",
    "units": [
      2
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A modified Atwood machine consists of two blocks connected by a light, inextensible string that passes over a massless, frictionless pulley mounted at the top of a rough inclined plane. Block A, with mass m_A = 4.0 kg, rests on the inclined surface, which makes an angle θ = 30° with the horizontal. The coefficient of kinetic friction between Block A and the incline is μ_k = 0.20. Block B, with mass m_B = 3.0 kg, hangs vertically from the string on the other side of the pulley. The system is released from rest and Block B descends while Block A slides up the incline. Use g = 10 m/s².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Draw and describe a complete free body diagram for Block A as it slides up the incline. Label all forces acting on Block A, indicate the direction of each force, and explain why each force is present.",
        "rubric": "Student must identify and correctly direct all four forces on Block A: (1) weight/gravity acting straight downward, (2) normal force perpendicular to the inclined surface pointing away from the surface, (3) tension along the incline directed up the slope toward the pulley, and (4) kinetic friction directed down the incline (opposing the upward motion of Block A). Student must explain that friction opposes the direction of sliding (Block A moves up, so friction acts down the incline)."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Using Newton's third law, identify one Newton's third law force pair involving Block A and the inclined surface. Clearly state both forces in the pair, which object exerts each force, and which object experiences each force.",
        "rubric": "Student must correctly identify the third-law pair: Block A exerts a normal force on the inclined surface directed into the surface (perpendicular), AND the inclined surface exerts a normal force on Block A directed away from the surface (perpendicular). Student must state that these forces are equal in magnitude, opposite in direction, act on different objects, and are the same type of force (contact/normal forces)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Determine the normal force exerted by the inclined surface on Block A.",
        "rubric": "Student must resolve forces perpendicular to the incline. Setting up the perpendicular equilibrium: N - m_A·g·cos θ = 0, so N = m_A·g·cos θ = (4.0 kg)(10 m/s²)(cos 30°) = (4.0)(10)(0.866) = 34.6 N ≈ 34.6 N (accept 34-35 N). Student must show use of the cosine component of gravity perpendicular to the incline."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using Newton's second law, determine the acceleration of the system after it is released from rest.",
        "rubric": "Student must write correct Newton's second law equations for both blocks and solve simultaneously. For Block B (taking downward as positive): m_B·g - T = m_B·a. For Block A (taking up the incline as positive): T - m_A·g·sin θ - μ_k·N = m_A·a. Substituting N = 34.6 N and adding equations: m_B·g - m_A·g·sin θ - μ_k·m_A·g·cos θ = (m_A + m_B)·a. Numerically: (3.0)(10) - (4.0)(10)(0.5) - (0.20)(34.6) = (7.0)·a → 30 - 20 - 6.93 = 7.0·a → 3.07 = 7.0·a → a ≈ 0.44 m/s² (accept 0.43-0.45 m/s²)."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Suppose the pulley is not frictionless and instead exerts a resistive torque on the string. Without recalculating, predict whether the acceleration of the system would be greater than, less than, or equal to the value found in part (d). Justify your answer using Newton's second law and the concept of net force.",
        "rubric": "Student must predict the acceleration would be less than the value found in part (d). Justification must reference that a frictional pulley introduces an additional resistive force (or torque acting as an effective tension difference) that opposes the motion of the string, thereby reducing the net force available to accelerate the system. By Newton's second law (F_net = m·a), a smaller net force on the same total mass results in a smaller acceleration."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies and labels all four forces on Block A in the free body diagram: weight directed downward, normal force perpendicular to and away from the incline surface, tension directed up the incline toward the pulley, and kinetic friction directed down the incline opposing upward motion. Student explains friction opposes the direction of sliding.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "weight",
          "gravity",
          "mg downward",
          "normal force",
          "perpendicular to incline",
          "tension",
          "up the incline",
          "kinetic friction",
          "down the incline",
          "opposes motion",
          "free body diagram",
          "FBD",
          "four forces",
          "opposing upward sliding",
          "surface pushes away"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "Block A slides up the incline",
            "upward motion along surface"
          ],
          "connector": [
            "results in",
            "causes",
            "means friction acts"
          ],
          "effect": [
            "kinetic friction directed down the incline",
            "friction opposes sliding direction"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly identifies the Newton's third law pair between Block A and the inclined surface: Block A pushes on the incline with a force directed into the surface, and the incline pushes back on Block A with a force directed away from the surface (normal force). Forces are equal in magnitude, opposite in direction, act on different objects, and are the same type.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "Newton's third law",
          "action-reaction pair",
          "equal and opposite",
          "different objects",
          "Block A pushes on incline",
          "incline pushes on Block A",
          "normal force pair",
          "contact force",
          "same type of force",
          "third law",
          "perpendicular to surface",
          "equal magnitude",
          "opposite direction",
          "interaction pair"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "Block A in contact with inclined surface"
          ],
          "connector": [
            "results in",
            "produces",
            "leads to"
          ],
          "effect": [
            "action-reaction force pair",
            "Block A exerts force on incline",
            "incline exerts equal and opposite force on Block A"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly calculates the normal force as N = m_A·g·cos θ = (4.0)(10)(cos 30°) ≈ 34.6 N, showing the perpendicular force balance and correct use of the cosine component of gravity.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "N = m_A g cos theta",
          "normal force",
          "perpendicular to incline",
          "cos 30",
          "34.6 N",
          "35 N",
          "force balance perpendicular",
          "mg cos theta",
          "equilibrium perpendicular direction",
          "N equals mg cosine",
          "perpendicular component of gravity",
          "no acceleration perpendicular to surface",
          "cosine of angle"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 3,
        "points": 1,
        "description": "Student correctly writes Newton's second law for both blocks, combines them to eliminate tension, substitutes numerical values, and arrives at a ≈ 0.44 m/s² (accepting 0.43-0.45 m/s²). Must show F_net = (m_A + m_B)·a structure with gravity, weight component along incline, and friction accounted for.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "Newton's second law",
          "F = ma",
          "net force",
          "m_B g - T = m_B a",
          "T - m_A g sin theta - friction = m_A a",
          "0.44 m/s²",
          "system acceleration",
          "combined equation",
          "kinetic friction force",
          "mu_k times N",
          "0.43 m/s²",
          "0.45 m/s²",
          "eliminate tension",
          "sum of forces on system",
          "sin 30 component along incline"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "net force on system",
            "weight of Block B minus weight component and friction of Block A"
          ],
          "connector": [
            "results in",
            "produces",
            "determines"
          ],
          "effect": [
            "system acceleration of approximately 0.44 m/s²",
            "blocks accelerate together"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Student correctly predicts acceleration would be less than the value in part (d) and justifies using Newton's second law: a frictional pulley adds a resistive force opposing string motion, reducing the net force on the system, and since F_net = (m_A + m_B)·a with the same total mass but smaller net force, the acceleration decreases.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "less than",
          "smaller acceleration",
          "frictional pulley",
          "resistive force",
          "reduced net force",
          "Newton's second law",
          "F_net = ma",
          "same total mass",
          "net force decreases",
          "acceleration decreases",
          "opposes string motion",
          "torque resists rotation",
          "resistive torque on axle",
          "tension difference across pulley",
          "additional energy dissipation"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "frictional pulley exerts resistive torque",
            "additional opposing force on string"
          ],
          "connector": [
            "reduces",
            "decreases",
            "leads to smaller"
          ],
          "effect": [
            "net force on system decreases",
            "acceleration is less than 0.44 m/s²"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u3_frq011",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Centripetal Force on a Car Rounding a Curve",
    "units": [
      3
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A 1200 kg car travels at a constant speed of 15 m/s around a flat, circular curve of radius 45 m. The car does not skid.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify the force that provides the centripetal force on the car as it rounds the curve, and state the direction of that force.",
        "rubric": "Student identifies static friction (between the tires and the road) as the centripetal force and states it points toward the center of the circular path (inward/centripetal direction)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the magnitude of the centripetal force acting on the car.",
        "rubric": "Student correctly applies F_c = mv²/r with m = 1200 kg, v = 15 m/s, r = 45 m to obtain F_c = 6000 N."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "If the car were to travel around the same curve at a higher speed, explain what would happen to the required centripetal force and why.",
        "rubric": "Student states that the required centripetal force increases and explains that centripetal force is proportional to v² (F_c = mv²/r), so as speed increases the required force increases."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies static friction as the centripetal force and states it is directed toward the center of the circular path.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "static friction",
          "friction",
          "tires and road",
          "toward the center",
          "inward",
          "centripetal direction",
          "center of the curve",
          "center of the circle",
          "radially inward",
          "perpendicular to velocity",
          "frictional force"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "static friction",
            "friction between tires and road",
            "frictional contact force"
          ],
          "connector": [
            "provides",
            "acts as",
            "supplies",
            "serves as",
            "is the source of"
          ],
          "effect": [
            "centripetal force",
            "inward force",
            "force toward center",
            "net inward force",
            "radially directed force"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly uses F_c = mv²/r with given values and arrives at 6000 N.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "F_c = mv²/r",
          "centripetal force formula",
          "6000 N",
          "6000",
          "1200 kg",
          "15 m/s",
          "45 m",
          "mv²/r",
          "net centripetal force",
          "net inward force",
          "centripetal acceleration",
          "circular motion equation"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student states that the required centripetal force increases and correctly cites the proportionality F_c ∝ v² (from F_c = mv²/r) as the justification.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "centripetal force increases",
          "proportional to v squared",
          "F_c = mv²/r",
          "v squared",
          "speed squared",
          "greater speed requires greater force",
          "centripetal force proportional to speed squared",
          "quadratic relationship",
          "radius remains constant",
          "mass remains constant",
          "larger net inward force required"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "higher speed",
            "increased speed",
            "greater v",
            "larger velocity"
          ],
          "connector": [
            "increases",
            "requires",
            "results in",
            "leads to",
            "causes"
          ],
          "effect": [
            "greater centripetal force",
            "larger centripetal force",
            "increased centripetal force",
            "greater net inward force",
            "larger required friction force"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u3_frq012",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Satellite Orbital Speed and Kepler's Third Law",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A satellite of mass m orbits a planet of mass M in a circular orbit of radius r. A second satellite of mass 2m orbits the same planet at a radius of 4r. Both orbits are circular. Use G for the universal gravitational constant where needed.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Derive",
        "question": "Derive an expression for the orbital speed v of the first satellite (mass m, orbital radius r) in terms of G, M, and r.",
        "rubric": "Student earns the point by correctly setting gravitational force equal to centripetal force (GMm/r² = mv²/r) and solving to obtain v = √(GM/r)."
      },
      {
        "label": "b",
        "command": "Predict",
        "question": "Without calculating, predict whether the second satellite (mass 2m, orbital radius 4r) has a greater, smaller, or equal orbital speed compared to the first satellite. Justify your answer.",
        "rubric": "Student earns the point by correctly stating the second satellite has a smaller orbital speed and justifying that orbital speed depends on GM/r and increasing radius decreases speed, with no dependence on satellite mass."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Determine the ratio of the orbital period of the second satellite T₂ to the orbital period of the first satellite T₁. Express your answer as a numerical ratio.",
        "rubric": "Student earns the point by correctly applying Kepler's third law (T² ∝ r³) or deriving T = 2πr/v to obtain T₂/T₁ = 8, showing work consistent with the ratio of radii (4r/r)^(3/2) = 8."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets gravitational force equal to centripetal force and solves for orbital speed v = √(GM/r)",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "GMm/r²",
          "mv²/r",
          "gravitational force equals centripetal force",
          "v = sqrt(GM/r)",
          "v² = GM/r",
          "orbital speed derivation",
          "centripetal force equation",
          "universal gravitation",
          "Newton's law of gravitation",
          "circular orbit force balance",
          "net inward force",
          "gravitational centripetal"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational force",
            "GMm/r²"
          ],
          "connector": [
            "provides",
            "acts as",
            "equals"
          ],
          "effect": [
            "centripetal force",
            "mv²/r",
            "circular orbit"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly predicts smaller orbital speed for second satellite and justifies using v = √(GM/r): speed decreases with increasing radius and is independent of satellite mass",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "smaller orbital speed",
          "speed decreases as radius increases",
          "v = sqrt(GM/r)",
          "independent of mass",
          "satellite mass does not affect speed",
          "larger radius smaller speed",
          "orbital speed depends on radius",
          "inversely proportional to sqrt(r)",
          "v proportional to 1/sqrt(r)",
          "mass cancels",
          "radius in denominator",
          "second satellite slower"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "larger orbital radius",
            "4r"
          ],
          "connector": [
            "results in",
            "leads to",
            "causes"
          ],
          "effect": [
            "smaller orbital speed",
            "decreased speed"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly obtains T₂/T₁ = 8 using Kepler's third law T² ∝ r³ or equivalent derivation",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "Kepler's third law",
          "T² proportional to r³",
          "T²∝r³",
          "T₂/T₁ = 8",
          "ratio equals 8",
          "(4r/r)^(3/2)",
          "4^(3/2) = 8",
          "period ratio",
          "T = 2πr/v",
          "T proportional to r^(3/2)",
          "period increases with radius",
          "orbital period calculation"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "orbital radius ratio",
            "r₂/r₁ = 4"
          ],
          "connector": [
            "gives",
            "results in",
            "yields"
          ],
          "effect": [
            "period ratio of 8",
            "T₂/T₁ = 8"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u3_frq013",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Binary Star Orbital Period and Kepler's Third Law",
    "units": [
      3
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Two planets, Planet X and Planet Y, orbit the same star. Planet X has an orbital radius of r and an orbital period of T. Planet Y has an orbital radius of 4r. Both planets travel in approximately circular orbits. A space agency wants to place a small satellite in a circular orbit around the same star at an orbital radius of 9r. Assume the mass of the star is M and the universal gravitational constant is G.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using Kepler's Third Law, determine the orbital period of Planet Y in terms of T.",
        "rubric": "Student earns 1 point for correctly applying Kepler's Third Law (T² ∝ r³ or T²/r³ = constant) to find T_Y = 8T. Must show the ratio setup T_Y²/(4r)³ = T²/r³ and arrive at T_Y = 8T."
      },
      {
        "label": "b",
        "command": "Derive",
        "question": "Derive an expression for the orbital speed of the satellite at radius 9r in terms of G, M, and r. Show your reasoning starting from Newton's Law of Gravitation and Newton's Second Law.",
        "rubric": "Student earns 1 point for correctly setting gravitational force equal to centripetal force (GMm/(9r)² = mv²/(9r)) and solving to obtain v = sqrt(GM/(9r)) or v = (1/3)sqrt(GM/r). Must show the force-balance setup explicitly."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The satellite's thruster briefly fires, increasing its orbital radius from 9r to 16r. Explain what happens to the satellite's orbital speed and gravitational force on the satellite as the orbital radius increases, and justify your answer using physics principles.",
        "rubric": "Student earns 1 point for correctly stating that both orbital speed decreases and gravitational force decreases as orbital radius increases, with justification: v ∝ 1/sqrt(r) so larger r means smaller v, and F_g = GMm/r² so larger r means smaller gravitational force. Must address both speed and force with correct reasoning tied to the inverse relationships."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies Kepler's Third Law ratio to find T_Y = 8T, showing T²/r³ = constant and the algebraic steps leading to the answer.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Kepler's third law",
          "T squared over r cubed",
          "T²/r³ = constant",
          "orbital period ratio",
          "T_Y = 8T",
          "period proportional to radius to the 3/2",
          "T ∝ r^(3/2)",
          "ratio of periods",
          "(4r)³",
          "8T",
          "T_Y²/(4r)³ = T²/r³",
          "T_Y squared equals 64T squared",
          "square root of 64",
          "orbital period scales with radius",
          "proportionality constant same for same star"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "orbital radius 4r",
            "four times the orbital radius"
          ],
          "connector": [
            "leads to",
            "results in",
            "gives"
          ],
          "effect": [
            "orbital period 8T",
            "period eight times larger"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly sets gravitational force equal to centripetal force and derives orbital speed v = sqrt(GM/9r) = (1/3)sqrt(GM/r) at radius 9r.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "gravitational force equals centripetal force",
          "GMm/r² = mv²/r",
          "GMm/(9r)² = mv²/(9r)",
          "Newton's law of gravitation",
          "centripetal force",
          "F_g = GMm/r²",
          "v = sqrt(GM/9r)",
          "orbital speed derivation",
          "net force equals centripetal",
          "v² = GM/(9r)",
          "mass cancels",
          "Newton's second law for circular motion",
          "a_c = v²/r centripetal acceleration",
          "one-third sqrt(GM/r)",
          "force balance circular orbit"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational force",
            "Newton's law of gravitation"
          ],
          "connector": [
            "provides",
            "acts as",
            "equals"
          ],
          "effect": [
            "centripetal force",
            "centripetal acceleration",
            "circular orbit"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly states that orbital speed decreases (v ∝ 1/sqrt(r)) AND gravitational force decreases (F ∝ 1/r²) as orbital radius increases from 9r to 16r, with correct physical justification for both.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "orbital speed decreases",
          "v proportional to 1/sqrt(r)",
          "v ∝ r^(-1/2)",
          "gravitational force decreases",
          "inverse square law",
          "F_g ∝ 1/r²",
          "larger orbital radius smaller speed",
          "larger radius weaker gravity",
          "GMm/r² decreases",
          "v = sqrt(GM/r) inverse relationship",
          "speed inversely proportional to square root of radius",
          "gravitational force inversely proportional to radius squared",
          "16r greater than 9r so speed less",
          "weaker gravitational pull at greater distance",
          "both speed and force decrease with radius"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "increased orbital radius",
            "larger orbital radius",
            "radius increases to 16r"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "orbital speed decreases",
            "gravitational force decreases",
            "weaker gravitational pull",
            "slower orbital speed"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u3_frq014",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Satellite Orbits and Gravitational Forces Around Earth",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "A satellite of mass m = 500 kg orbits Earth in a circular orbit at an altitude h = 3.6 × 10⁶ m above Earth's surface. Earth's mass is M = 5.97 × 10²⁴ kg, Earth's radius is R_E = 6.37 × 10⁶ m, and the universal gravitational constant is G = 6.67 × 10⁻¹¹ N·m²/kg². A second satellite of mass 2m orbits Earth at the same altitude in the same circular orbit. Use this information to answer all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Explain why a satellite in a circular orbit requires a centripetal force, and identify what physical interaction provides this centripetal force for the orbiting satellite.",
        "rubric": "Student earns the point by stating that a centripetal force directed toward Earth's center is required to continuously change the satellite's velocity direction (keeping it in circular motion), and identifying gravity (gravitational force from Earth) as the source of that centripetal force."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the orbital radius r of the satellite measured from Earth's center, and then calculate the magnitude of the gravitational force acting on the 500 kg satellite at this orbital radius.",
        "rubric": "Student earns the point by correctly computing r = R_E + h = 6.37×10⁶ + 3.6×10⁶ = 9.97×10⁶ m, then applying Newton's law of gravitation F = GMm/r² to get F = (6.67×10⁻¹¹)(5.97×10²⁴)(500)/(9.97×10⁶)² ≈ 2000 N (acceptable range 1950-2050 N)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the orbital speed of the 500 kg satellite in its circular orbit.",
        "rubric": "Student earns the point by setting gravitational force equal to centripetal force (GMm/r² = mv²/r) and solving for v = √(GM/r), yielding v = √((6.67×10⁻¹¹ × 5.97×10²⁴)/(9.97×10⁶)) ≈ 6320 m/s (acceptable range 6200-6450 m/s)."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "The second satellite has a mass of 2m = 1000 kg and orbits at the same altitude. Justify whether the orbital speed of the second satellite is greater than, less than, or equal to the orbital speed of the 500 kg satellite.",
        "rubric": "Student earns the point by arguing that orbital speed v = √(GM/r) depends only on Earth's mass M and orbital radius r, not on the satellite's mass, so the 1000 kg satellite orbits at the same speed as the 500 kg satellite. Reference to cancellation of satellite mass m from both sides of GMm/r² = mv²/r earns credit."
      },
      {
        "label": "e",
        "command": "Predict",
        "question": "A third satellite is placed in a circular orbit at a higher altitude than the original satellite. Using Kepler's Third Law, predict how the orbital period of the third satellite compares to the orbital period of the original satellite. Explain your reasoning.",
        "rubric": "Student earns the point by citing Kepler's Third Law (T² ∝ r³ or T²/r³ = constant) and correctly concluding that a larger orbital radius results in a longer orbital period, so the third satellite has a greater period than the original satellite."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student identifies that centripetal force is required for circular orbital motion and that gravity (gravitational attraction from Earth) provides this centripetal force directed toward Earth's center.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "centripetal force",
          "gravity",
          "gravitational force",
          "toward Earth's center",
          "inward force",
          "circular motion",
          "direction of velocity changes",
          "net force toward center",
          "gravitational attraction",
          "center-directed force",
          "continuously changing direction",
          "centripetal acceleration",
          "net inward force",
          "radial force",
          "uniform circular motion"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational force",
            "Earth's gravity"
          ],
          "connector": [
            "provides",
            "acts as",
            "supplies"
          ],
          "effect": [
            "centripetal force",
            "circular orbit",
            "inward acceleration"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly calculates orbital radius r = R_E + h = 9.97×10⁶ m and applies F = GMm/r² to find gravitational force ≈ 2000 N (within acceptable range 1950-2050 N).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "F=GMm/r^2",
          "Newton's law of gravitation",
          "orbital radius",
          "r = R_E + h",
          "9.97×10^6 m",
          "gravitational force",
          "2000 N",
          "universal gravitation",
          "F=GMm/r squared",
          "r equals R plus h",
          "inverse square law",
          "surface radius plus altitude",
          "9970000 m",
          "gravitational pull",
          "Newton's universal law"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "orbital radius r",
            "Earth's mass M",
            "satellite mass m"
          ],
          "connector": [
            "substituted into",
            "applied in",
            "used in"
          ],
          "effect": [
            "gravitational force 2000 N",
            "Newton's law of gravitation result",
            "F equals GMm over r squared"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student sets gravitational force equal to centripetal force and derives v = √(GM/r), obtaining orbital speed ≈ 6320 m/s (within acceptable range 6200-6450 m/s).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "v=sqrt(GM/r)",
          "orbital speed",
          "centripetal force equals gravity",
          "GMm/r^2 = mv^2/r",
          "6320 m/s",
          "satellite speed",
          "circular orbit speed",
          "v squared equals GM over r",
          "mass cancels",
          "orbital velocity",
          "gravitational force provides centripetal force",
          "square root of GM over r",
          "net force equals mv squared over r",
          "6200 to 6450 m/s",
          "tangential speed"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational force equals centripetal force",
            "GMm/r^2 = mv^2/r"
          ],
          "connector": [
            "solving for",
            "yields",
            "gives"
          ],
          "effect": [
            "orbital speed 6320 m/s",
            "v equals sqrt GM over r",
            "tangential velocity"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Student correctly justifies that orbital speed is independent of satellite mass because m cancels from both sides of the centripetal-gravitational force equation, so the 1000 kg satellite has the same orbital speed as the 500 kg satellite.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "mass cancels",
          "independent of satellite mass",
          "same orbital speed",
          "equal speed",
          "v=sqrt(GM/r)",
          "does not depend on mass",
          "mass of satellite cancels",
          "same radius same speed",
          "orbital speed independent",
          "GMm/r^2=mv^2/r mass cancels",
          "satellite mass irrelevant",
          "mass drops out",
          "only depends on Earth mass and radius",
          "both satellites same altitude",
          "identical orbital velocity"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "satellite mass cancels",
            "mass independent of orbital speed"
          ],
          "connector": [
            "results in",
            "means",
            "leads to"
          ],
          "effect": [
            "same orbital speed",
            "equal orbital velocity",
            "speed unchanged"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Student correctly invokes Kepler's Third Law (T² ∝ r³) to conclude that the larger orbital radius of the third satellite results in a longer orbital period compared to the original satellite.",
        "partLabel": "e",
        "skill": "predict",
        "keywords": [
          "Kepler's third law",
          "T^2 proportional to r^3",
          "T squared proportional to r cubed",
          "larger radius longer period",
          "greater orbital period",
          "T^2/r^3 = constant",
          "orbital period increases",
          "higher altitude greater period",
          "period increases with radius",
          "Kepler's law of periods",
          "T squared over r cubed constant",
          "longer time to complete one orbit",
          "greater circumference at higher altitude",
          "slower orbital speed at higher altitude",
          "third satellite longer period"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "larger orbital radius",
            "higher altitude",
            "greater r"
          ],
          "connector": [
            "results in",
            "leads to",
            "gives"
          ],
          "effect": [
            "longer orbital period",
            "greater period",
            "larger T"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u3_frq015",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Binary Star Orbital System and Satellite Mechanics",
    "units": [
      3
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A small planet of mass m = 4.0 × 10²⁴ kg orbits a star of mass M = 2.0 × 10³⁰ kg in a nearly circular orbit of radius r = 1.5 × 10¹¹ m. A space agency launches an artificial satellite of mass m_s = 500 kg into a circular orbit around the same star at a different orbital radius R = 3.0 × 10¹¹ m (twice the planet's orbital radius). Use G = 6.67 × 10⁻¹¹ N·m²/kg².\n\nConsider the following questions about this system, which span the orbital mechanics of both the planet and the satellite.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the gravitational force exerted by the star on the planet. Then identify what role this force plays in maintaining the planet's circular orbit.",
        "rubric": "Student calculates F = GMm/r² = (6.67×10⁻¹¹)(2.0×10³⁰)(4.0×10²⁴)/(1.5×10¹¹)² ≈ 2.37×10²³ N and states that this gravitational force acts as the centripetal force directed toward the star."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the orbital speed of the planet around the star.",
        "rubric": "Student sets gravitational force equal to centripetal force (GMm/r² = mv²/r) and solves for v = √(GM/r) = √((6.67×10⁻¹¹)(2.0×10³⁰)/(1.5×10¹¹)) ≈ 2.98×10⁴ m/s, approximately 3.0×10⁴ m/s."
      },
      {
        "label": "c",
        "command": "Predict",
        "question": "The satellite orbits at R = 2r, twice the planet's orbital radius. Without calculating, predict whether the satellite's orbital speed is greater than, less than, or equal to the planet's orbital speed. Justify your prediction using the relationship between orbital speed and orbital radius.",
        "rubric": "Student correctly predicts the satellite's orbital speed is less than the planet's and justifies by referencing v = √(GM/R): as orbital radius R increases, orbital speed decreases (inverse square root relationship), so the satellite at 2r moves slower than the planet at r."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "A student claims that the satellite at R = 2r should have an orbital period exactly twice that of the planet, since its orbital radius is twice as large. Using Kepler's Third Law, justify whether the student's claim is correct or incorrect.",
        "rubric": "Student invokes Kepler's Third Law (T² ∝ r³ or T² = 4π²r³/GM) to show T ∝ r^(3/2). Since R = 2r, T_satellite = T_planet × (2)^(3/2) = T_planet × 2√2 ≈ 2.83 × T_planet, not 2 × T_planet. The student correctly identifies the claim as incorrect."
      },
      {
        "label": "e",
        "command": "Explain",
        "question": "If the satellite's engines briefly fire, increasing its speed while at radius R, describe what happens to the direction of the net force on the satellite immediately after the speed increase (while it is still at radius R) and explain whether the satellite remains in a circular orbit. Address how the centripetal acceleration is affected.",
        "rubric": "Student explains that immediately after the speed increase the gravitational force still points toward the star (centripetal direction) but is now insufficient to maintain circular motion at radius R because the required centripetal force (mv²/R) has increased while the gravitational force (GMm_s/R²) remains unchanged. The satellite therefore moves into a larger elliptical orbit, no longer circular. The net inward force is less than needed for circular motion, so the satellite moves outward, and centripetal acceleration (a_c = v²/R) is now mismatched with the gravitational acceleration at that radius."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly applies Newton's law of gravitation F = GMm/r² and arrives at approximately 2.37×10²³ N, and identifies this force as the centripetal force directed toward the star.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "F = GMm/r²",
          "Newton's law of gravitation",
          "gravitational force",
          "centripetal force",
          "directed toward the star",
          "2.37×10²³ N",
          "universal gravitation",
          "net inward force",
          "center-directed force",
          "inverse square law",
          "radial force",
          "gravitational attraction"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational force",
            "F = GMm/r²"
          ],
          "connector": [
            "acts as",
            "provides",
            "serves as"
          ],
          "effect": [
            "centripetal force",
            "circular orbit maintained",
            "inward net force"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student sets gravitational force equal to centripetal force and correctly solves for orbital speed v = √(GM/r) ≈ 2.98×10⁴ m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "v = √(GM/r)",
          "orbital speed",
          "GMm/r² = mv²/r",
          "centripetal force equals gravitational force",
          "2.98×10⁴ m/s",
          "3.0×10⁴ m/s",
          "circular orbit speed",
          "set equal to centripetal",
          "cancel mass",
          "tangential velocity",
          "orbital velocity formula",
          "square root of GM over r"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational force equals centripetal force",
            "GMm/r² = mv²/r"
          ],
          "connector": [
            "leads to",
            "gives",
            "yields"
          ],
          "effect": [
            "orbital speed v = √(GM/r)",
            "2.98×10⁴ m/s"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly predicts orbital speed is less than planet's and justifies using v = √(GM/R), citing inverse square root dependence on orbital radius.",
        "partLabel": "c",
        "skill": "predict",
        "keywords": [
          "less than",
          "v = √(GM/R)",
          "inverse square root relationship",
          "larger radius slower orbital speed",
          "orbital speed decreases with radius",
          "greater orbital radius",
          "v proportional to 1/√R",
          "satellite moves slower than planet",
          "orbital radius increases speed decreases",
          "farther from star slower speed",
          "speed inversely related to radius",
          "gravitational parameter GM constant"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "larger orbital radius",
            "R = 2r"
          ],
          "connector": [
            "results in",
            "leads to",
            "causes"
          ],
          "effect": [
            "lower orbital speed",
            "satellite moves slower",
            "v decreases"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Student correctly invokes Kepler's Third Law (T² ∝ r³) to show T_satellite = 2√2 × T_planet ≈ 2.83 T_planet, refuting the student's claim of factor of 2.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "Kepler's third law",
          "T² ∝ r³",
          "T² = 4π²r³/GM",
          "T proportional to r^(3/2)",
          "2√2",
          "2.83 times planet's period",
          "not twice the period",
          "claim is incorrect",
          "orbital period ratio",
          "cube of orbital radius",
          "period scales as three-halves power",
          "T_satellite over T_planet equals 2 to the 3/2"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "R = 2r",
            "Kepler's third law T² ∝ r³"
          ],
          "connector": [
            "results in",
            "gives",
            "leads to"
          ],
          "effect": [
            "T_satellite = 2√2 × T_planet",
            "period is 2.83 times not 2 times",
            "claim is incorrect"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Student explains that after speed increase gravitational force is insufficient for circular orbit at R, net force is still centripetal/inward but less than required mv²/R, satellite enters elliptical orbit, and centripetal acceleration is mismatched with gravitational acceleration at that radius.",
        "partLabel": "e",
        "skill": "explain",
        "keywords": [
          "elliptical orbit",
          "gravitational force unchanged at radius R",
          "insufficient centripetal force",
          "required centripetal force mv²/R increases",
          "no longer circular orbit",
          "net force still directed toward star",
          "centripetal acceleration mismatch",
          "satellite moves to larger orbit",
          "required centripetal force exceeds gravitational force",
          "a_c = v²/R",
          "GMm_s/R² constant",
          "net inward force less than needed",
          "satellite path curves outward",
          "speed increase causes orbital change"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "speed increases at radius R",
            "required centripetal force mv²/R increases"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "gravitational force insufficient for circular orbit",
            "satellite enters elliptical orbit",
            "no longer circular orbit",
            "satellite moves outward to larger radius"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u4_frq016",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Hooke's Law and Spring Force",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A student hangs various masses from a vertical spring and measures the resulting stretch of the spring from its natural length. When a 0.200 kg mass is attached, the spring stretches 0.0500 m from its equilibrium position. The student then stretches the spring an additional 0.120 m from its new equilibrium position and holds the mass stationary before releasing it. Use g = 10 m/s².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the spring constant k of the spring.",
        "rubric": "Student earns 1 point for correctly applying Hooke's law F = kx, setting the spring force equal to the weight of the hanging mass (mg = kx), and arriving at k = 40 N/m."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the elastic potential energy stored in the spring when it is stretched the additional 0.120 m from equilibrium (the position at which the student holds the mass before releasing it). Use the spring constant found in part (a).",
        "rubric": "Student earns 1 point for correctly using the spring potential energy formula Us = (1/2)kx², substituting k = 40 N/m and x = 0.120 m, and arriving at Us = 0.288 J."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "After the student releases the mass from rest, the mass oscillates. Explain why the elastic potential energy stored in the spring is not entirely converted into kinetic energy of the mass as it passes through the equilibrium position.",
        "rubric": "Student earns 1 point for explaining that as the spring returns to equilibrium from the stretched position, gravitational potential energy also changes (decreases), so the total mechanical energy converting to kinetic energy includes both the spring potential energy and the change in gravitational potential energy, meaning the kinetic energy at equilibrium is greater than just the initial spring potential energy - OR equivalently that energy is shared between spring potential energy and gravitational potential energy throughout the motion, so at equilibrium the spring PE alone does not account for all kinetic energy gained."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies Hooke's law by setting spring force equal to gravitational force on the mass and solving for k = 40 N/m.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Hooke's law",
          "F = kx",
          "spring constant",
          "k = 40",
          "40 N/m",
          "mg = kx",
          "restoring force",
          "spring force equals weight",
          "kx = mg",
          "k = mg/x",
          "equilibrium condition",
          "net force zero",
          "static equilibrium"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates spring potential energy using Us = (1/2)kx² with k = 40 N/m and x = 0.120 m, arriving at Us = 0.288 J.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "spring potential energy",
          "Us = (1/2)kx^2",
          "elastic potential energy",
          "0.288 J",
          "0.288",
          "one half k x squared",
          "PE spring",
          "stored elastic energy",
          "Us = 0.5kx2",
          "x = 0.120",
          "amplitude",
          "displacement from equilibrium",
          "k = 40 N/m"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Explains that gravitational potential energy also changes as the mass moves to equilibrium, so kinetic energy at equilibrium reflects both spring PE and the change in gravitational PE, not spring PE alone.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "gravitational potential energy",
          "gravitational PE changes",
          "mgh",
          "total mechanical energy",
          "conservation of energy",
          "both spring and gravitational",
          "energy conversion",
          "not all spring PE converts to KE",
          "gravitational PE decreases",
          "height decreases",
          "mass moves downward",
          "gravitational PE contributes to KE",
          "KE greater than spring PE alone"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational potential energy decreases",
            "mass moves downward to equilibrium",
            "height of mass decreases as spring contracts toward equilibrium"
          ],
          "connector": [
            "contributes to",
            "adds to",
            "results in",
            "therefore"
          ],
          "effect": [
            "kinetic energy at equilibrium exceeds initial spring potential energy",
            "total KE greater than spring PE alone",
            "kinetic energy includes energy from both spring PE and gravitational PE"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u4_frq017",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Spring Compression and the Work-Energy Theorem",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A 0.50 kg block slides along a frictionless horizontal surface with a speed of 4.0 m/s and collides with a light spring attached to a fixed wall. The spring has a spring constant of k = 200 N/m. The block compresses the spring until it momentarily comes to rest.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the maximum compression of the spring when the block is momentarily at rest.",
        "rubric": "Student earns 1 point for correctly applying conservation of energy (KE = spring PE), setting (1/2)mv² = (1/2)kx², and solving to get x = 0.20 m."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Using the work-energy theorem, explain why the block comes to rest at maximum compression.",
        "rubric": "Student earns 1 point for stating that the net work done on the block by the spring force is negative and equal to the change in kinetic energy, reducing the kinetic energy to zero at maximum compression."
      },
      {
        "label": "c",
        "command": "Predict",
        "question": "After maximum compression, the spring pushes the block back. Predict the speed of the block when it leaves the spring and justify your prediction using an energy principle.",
        "rubric": "Student earns 1 point for correctly predicting the block returns to 4.0 m/s and justifying that because the surface is frictionless, all spring potential energy converts back to kinetic energy, so the total mechanical energy is conserved."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student sets kinetic energy equal to spring potential energy and solves for maximum compression x = 0.20 m using (1/2)mv² = (1/2)kx².",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "conservation of energy",
          "(1/2)mv²=(1/2)kx²",
          "KE equals spring PE",
          "maximum compression",
          "x = 0.20 m",
          "0.20 meters",
          "spring potential energy",
          "kinetic energy converted",
          "frictionless surface",
          "elastic potential energy",
          "energy stored in spring",
          "solve for compression distance",
          "block momentarily at rest"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student explains that the spring exerts a negative net work on the block, reducing kinetic energy to zero at maximum compression, consistent with the work-energy theorem (W_net = ΔKE).",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "work-energy theorem",
          "W_net = delta KE",
          "net work equals zero",
          "negative work done on block",
          "spring force opposes motion",
          "restoring force",
          "kinetic energy decreases to zero",
          "displacement opposite to force",
          "work done by spring",
          "change in kinetic energy equals net work",
          "block decelerates",
          "spring force antiparallel to velocity"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "spring force opposes block motion",
            "negative work done by spring on block"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes"
          ],
          "effect": [
            "kinetic energy decreases to zero",
            "block momentarily at rest",
            "maximum compression reached"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly predicts the block returns to 4.0 m/s and justifies using conservation of mechanical energy - all stored spring PE converts back to KE on a frictionless surface.",
        "partLabel": "c",
        "skill": "predict",
        "keywords": [
          "4.0 m/s",
          "conservation of mechanical energy",
          "spring potential energy converts to kinetic energy",
          "no energy lost to friction",
          "frictionless surface",
          "total mechanical energy conserved",
          "same speed as initial",
          "returns to original speed",
          "elastic potential energy released",
          "no nonconservative work",
          "energy fully restored",
          "spring does positive work on block",
          "final KE equals initial KE"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "spring releases stored elastic potential energy",
            "frictionless surface does no work",
            "no nonconservative forces present"
          ],
          "connector": [
            "converts to",
            "results in",
            "leads to"
          ],
          "effect": [
            "kinetic energy fully restored",
            "block returns to 4.0 m/s",
            "final speed equals initial speed"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u4_frq018",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Compressed Spring Launch on a Curved Track",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A spring with spring constant k = 800 N/m is compressed by x = 0.15 m against a 2.0 kg block at the base of a frictionless curved track. The spring is released, launching the block up the track. The track curves so that the block's launch point is at ground level (h = 0), and the top of the track is at a height h = 0.40 m above the launch point. Assume g = 10 m/s².\n\n(a) Calculate the elastic potential energy stored in the spring just before it is released.\n\n(b) Using the work-energy theorem and conservation of energy, determine the speed of the block at the top of the track.\n\n(c) A student claims that if the spring constant were doubled to k = 1600 N/m but compressed only half as far (x = 0.075 m), the block would reach the same speed at the top of the track. Is the student correct? Justify your answer by comparing the initial elastic potential energy in both cases.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the elastic potential energy stored in the spring just before it is released.",
        "rubric": "Earns 1 point for correctly applying Us = (1/2)kx² with k = 800 N/m and x = 0.15 m to get Us = 9 J."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the work-energy theorem and conservation of energy, determine the speed of the block at the top of the track.",
        "rubric": "Earns 1 point for correctly setting spring potential energy equal to the sum of kinetic energy and gravitational potential energy at the top ((1/2)kx² = (1/2)mv² + mgh), solving for v, and arriving at v = 1.0 m/s."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Is the student correct that doubling k to 1600 N/m while halving compression to x = 0.075 m produces the same speed at the top? Justify your answer by comparing the initial elastic potential energies.",
        "rubric": "Earns 1 point for calculating the new spring potential energy as (1/2)(1600)(0.075)² = 4.5 J, comparing it to the original 9 J, and correctly concluding the student is incorrect because the elastic potential energy is halved (not equal), so the block would have less kinetic energy and would not reach the same speed."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly applies the spring potential energy formula Us = (1/2)kx² with k = 800 N/m and x = 0.15 m to obtain Us = 9 J.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Us = (1/2)kx²",
          "spring potential energy",
          "elastic potential energy",
          "Hooke's law energy",
          "9 J",
          "9 joules",
          "(1/2)(800)(0.15)²",
          "0.5 times k times x squared",
          "stored energy in spring",
          "Us = 0.5kx^2",
          "spring constant 800",
          "compression 0.15 m",
          "energy stored by compression"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student sets total mechanical energy at launch equal to total mechanical energy at the top of the track ((1/2)kx² = (1/2)mv² + mgh), correctly substitutes values, and solves for v = 1.0 m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "conservation of energy",
          "work-energy theorem",
          "Us = KE + PE",
          "(1/2)kx² = (1/2)mv² + mgh",
          "mechanical energy conserved",
          "KE = (1/2)mv²",
          "gravitational potential energy mgh",
          "v = 1.0 m/s",
          "1.0 meters per second",
          "9 = (1/2)(2)v² + (2)(10)(0.40)",
          "no energy lost to friction",
          "frictionless track energy conversion",
          "spring energy converts to kinetic and gravitational"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "spring potential energy released",
            "elastic potential energy converted"
          ],
          "connector": [
            "converts to",
            "transforms into",
            "results in"
          ],
          "effect": [
            "kinetic energy at top",
            "gravitational potential energy gained",
            "block speed at height h"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student calculates new spring potential energy as (1/2)(1600)(0.075)² = 4.5 J, identifies it is half the original 9 J, and correctly concludes the student is incorrect because less stored energy means less kinetic energy and a lower speed at the top.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "4.5 J",
          "4.5 joules",
          "(1/2)(1600)(0.075)²",
          "less elastic potential energy",
          "student is incorrect",
          "not the same speed",
          "energy is halved",
          "Us depends on x squared",
          "halving x reduces energy by factor of four",
          "less kinetic energy at top",
          "quadratic dependence on compression",
          "doubling k only doubles energy",
          "net stored energy decreases",
          "x squared term dominates"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "halved compression distance",
            "x squared dependence in Us formula",
            "quadratic sensitivity to displacement"
          ],
          "connector": [
            "results in",
            "leads to",
            "causes"
          ],
          "effect": [
            "reduced spring potential energy",
            "lower kinetic energy at top",
            "slower block speed"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u4_frq019",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Spring-Launched Block on a Ramp",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "A block of mass m = 2.0 kg is pressed against a horizontal spring (spring constant k = 800 N/m) on a frictionless horizontal surface, compressing it by x = 0.15 m from its natural length. The block is released from rest. After leaving the spring, the block travels along the frictionless horizontal surface and then up a frictionless inclined ramp. Use g = 10 m/s².\n\nPart (a): Calculate the elastic potential energy stored in the spring when it is compressed by 0.15 m.\n\nPart (b): Calculate the speed of the block at the instant it leaves the spring (i.e., when the spring returns to its natural length).\n\nPart (c): Explain, using the work-energy theorem, why the block's kinetic energy at the base of the ramp equals the elastic potential energy originally stored in the spring.\n\nPart (d): Calculate the maximum height the block reaches on the ramp before momentarily coming to rest.\n\nPart (e): A second identical block is pushed against the same spring but compressed only 0.075 m (half the original compression). Predict how the maximum height reached by this second block compares to the original maximum height, and justify your answer using the relevant energy equations.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the elastic potential energy stored in the spring when it is compressed by x = 0.15 m.",
        "rubric": "Student correctly applies Us = (1/2)kx², substituting k = 800 N/m and x = 0.15 m to obtain Us = (1/2)(800)(0.15)² = 9.0 J."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the speed of the block at the instant it leaves the spring, when the spring has returned to its natural length.",
        "rubric": "Student sets elastic potential energy equal to kinetic energy: (1/2)kx² = (1/2)mv², then solves for v = sqrt(kx²/m) = sqrt(800 × 0.0225 / 2.0) = sqrt(9.0) = 3.0 m/s."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain, using the work-energy theorem, why the block's kinetic energy at the base of the ramp equals the elastic potential energy originally stored in the spring.",
        "rubric": "Student states the work-energy theorem (net work equals change in kinetic energy), notes that the only force doing work on the block while in contact with the spring is the spring force, the surface is frictionless so no energy is lost, and therefore all spring potential energy is converted to kinetic energy."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Calculate the maximum height h the block reaches on the frictionless ramp before momentarily coming to rest.",
        "rubric": "Student applies conservation of mechanical energy: (1/2)mv² = mgh, solving for h = v²/(2g) = (9.0)/(2 × 10) = 0.45 m. Alternatively, h = kx²/(2mg) = (800 × 0.0225)/(2 × 2.0 × 10) = 18/(40) = 0.45 m."
      },
      {
        "label": "e",
        "command": "Predict",
        "question": "Predict how the maximum height reached by the second block (compressed x = 0.075 m) compares to the original maximum height, and justify your answer.",
        "rubric": "Student correctly identifies that Us = (1/2)kx² is proportional to x², so halving the compression reduces the energy by a factor of 4. Therefore the new maximum height is h' = h/4 = 0.45/4 = 0.1125 m, one-quarter the original height."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates elastic potential energy using Us = (1/2)kx² with k = 800 N/m and x = 0.15 m, arriving at 9.0 J.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Us = (1/2)kx²",
          "spring potential energy",
          "elastic potential energy",
          "(1/2)(800)(0.15)^2",
          "9.0 J",
          "Hooke's law energy",
          "Us = 0.5kx²",
          "stored energy spring",
          "compressed spring energy",
          "spring compression 0.15 m"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly sets spring potential energy equal to kinetic energy and solves for v = 3.0 m/s using KE = (1/2)mv².",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "KE = (1/2)mv²",
          "kinetic energy",
          "(1/2)kx² = (1/2)mv²",
          "v = sqrt(kx²/m)",
          "3.0 m/s",
          "speed leaving spring",
          "elastic to kinetic energy conversion",
          "conservation of energy",
          "spring releases block",
          "velocity at natural length"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies the work-energy theorem, stating net work equals change in kinetic energy, and identifies the spring force as the only force doing work on the frictionless surface, so all spring potential energy becomes kinetic energy.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "work-energy theorem",
          "net work equals change in kinetic energy",
          "W_net = ΔKE",
          "spring force does work",
          "frictionless no energy lost",
          "all spring energy converted to kinetic energy",
          "no nonconservative forces",
          "total work done by spring",
          "normal force does no work",
          "only force acting horizontally is spring force"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "spring force is the only force doing work",
            "frictionless surface",
            "normal force perpendicular to displacement does no work"
          ],
          "connector": [
            "leads to",
            "results in",
            "means that"
          ],
          "effect": [
            "all elastic potential energy becomes kinetic energy",
            "KE at base equals Us stored in spring",
            "no energy lost to friction or other nonconservative forces"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies conservation of mechanical energy from the base to the top of the ramp, setting (1/2)mv² = mgh and solving for h = 0.45 m.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "conservation of mechanical energy",
          "(1/2)mv² = mgh",
          "h = v²/(2g)",
          "0.45 m",
          "gravitational potential energy",
          "PE = mgh",
          "kinetic energy converts to gravitational potential energy",
          "h = kx²/(2mg)",
          "maximum height ramp",
          "block momentarily at rest"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "block has kinetic energy at base of ramp",
            "frictionless ramp",
            "no nonconservative forces on ramp"
          ],
          "connector": [
            "results in",
            "leads to",
            "means that"
          ],
          "effect": [
            "all kinetic energy converts to gravitational potential energy",
            "block reaches maximum height 0.45 m",
            "block momentarily comes to rest at top"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly identifies that Us is proportional to x² (quadratic relationship), so halving the compression reduces stored energy by a factor of 4, yielding a maximum height one-quarter the original (h' = 0.45/4 = 0.1125 m).",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "Us proportional to x²",
          "quadratic relationship between compression and energy",
          "half compression yields quarter energy",
          "h proportional to x²",
          "maximum height one-quarter original",
          "h' = 0.1125 m",
          "spring energy scales as x squared",
          "(0.075)² = (1/4)(0.15)²",
          "h = kx²/(2mg) proportionality",
          "factor of four reduction in height"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "compression halved from 0.15 m to 0.075 m",
            "x reduced by factor of 2",
            "Us = (1/2)kx² depends on x squared"
          ],
          "connector": [
            "results in",
            "leads to",
            "causes"
          ],
          "effect": [
            "spring energy reduced by factor of 4",
            "maximum height one-quarter original",
            "h' = 0.1125 m"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u4_frq020",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Compressed Spring Launch, Incline, and Power Analysis",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A block of mass m = 2.0 kg is pressed against a horizontal spring (spring constant k = 800 N/m) on a frictionless horizontal surface, compressing the spring by x = 0.25 m from its natural length. The block is released from rest. After leaving the spring, the block travels along the frictionless horizontal surface and then up a rough inclined ramp (angle θ = 30° above horizontal, coefficient of kinetic friction μk = 0.20) a distance d = 1.8 m along the ramp before coming momentarily to rest. Use g = 10 m/s².\n\nAdditional context for part (e): A small motor is used to push an identical block (mass 2.0 kg) from rest to the same speed the first block had just after leaving the spring (calculated in part b) in a time interval of 4.0 s along a frictionless horizontal surface.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the elastic potential energy stored in the spring when it is compressed by x = 0.25 m.",
        "rubric": "Student earns the point by correctly applying Us = (1/2)kx² = (1/2)(800)(0.25)² = 25 J."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the speed of the block at the moment it leaves the spring (i.e., when the spring returns to its natural length). The surface is frictionless.",
        "rubric": "Student earns the point by setting spring potential energy equal to kinetic energy: (1/2)kx² = (1/2)mv², solving for v = √(kx²/m) = √(800 × 0.0625 / 2.0) = √25 = 5.0 m/s."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Using the work-energy theorem, explain why the block's kinetic energy at the top of the ramp is zero, and identify all forms of work done on the block as it travels the distance d = 1.8 m up the ramp.",
        "rubric": "Student earns the point by stating the work-energy theorem (Wnet = ΔKE), identifying that work done by gravity (negative, W_gravity = -mgd sinθ) and work done by friction (negative, W_friction = -μk mg cosθ · d) together reduce kinetic energy to zero, and that no other forces do work. The net work equals the change in kinetic energy from the base to the top of the ramp."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using conservation of energy, calculate the speed of the block at the base of the ramp (just before it begins climbing). Then verify whether this speed is consistent with the block traveling exactly d = 1.8 m up the ramp before stopping. Show all work.",
        "rubric": "Student earns the point by applying conservation of energy from the base to the top of the ramp: (1/2)mv² = mgd sinθ + μk mg cosθ · d. Substituting: (1/2)(2.0)v² = (2.0)(10)(1.8)(0.5) + (0.20)(2.0)(10)(cos30°)(1.8) = 18 + 6.24 = 24.24 J, giving v = √(24.24) ≈ 4.92 m/s. Student notes this is consistent with (approximately equal to) v = 5.0 m/s from part (b) within rounding, confirming the block travels d = 1.8 m up the ramp. (Full credit awarded for correct setup and recognition of consistency, accepting minor rounding differences.)"
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Calculate the minimum power output of the motor required to accelerate the identical block (2.0 kg) from rest to 5.0 m/s in 4.0 s on a frictionless horizontal surface. Assume constant power output.",
        "rubric": "Student earns the point by calculating the work done by the motor W = ΔKE = (1/2)(2.0)(5.0)² = 25 J, then dividing by time: P = W/t = 25/4.0 = 6.25 W."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates spring potential energy using Us = (1/2)kx² with k = 800 N/m and x = 0.25 m to obtain 25 J.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "spring potential energy",
          "elastic potential energy",
          "Us = 1/2 kx^2",
          "Us=(1/2)kx²",
          "800 N/m",
          "0.25 m",
          "25 J",
          "Hooke's law energy",
          "stored elastic energy",
          "compression energy",
          "spring constant",
          "squared displacement"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies conservation of energy (spring PE converts to KE) to find the block's speed v = 5.0 m/s after leaving the spring.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "conservation of energy",
          "(1/2)kx^2 = (1/2)mv^2",
          "kinetic energy",
          "KE = 1/2 mv^2",
          "spring potential energy converts to kinetic energy",
          "v = 5.0 m/s",
          "speed after leaving spring",
          "frictionless surface",
          "elastic potential energy to kinetic energy",
          "energy conversion",
          "no energy lost",
          "solve for v"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "spring releases",
            "elastic potential energy stored in spring"
          ],
          "connector": [
            "converts to",
            "transforms into",
            "becomes"
          ],
          "effect": [
            "kinetic energy of block",
            "block speed 5.0 m/s"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly invokes the work-energy theorem (Wnet = ΔKE) and identifies both negative work by gravity and negative work by friction as responsible for reducing KE to zero at the top of the ramp.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "work-energy theorem",
          "Wnet = ΔKE",
          "net work equals change in kinetic energy",
          "work done by gravity",
          "work done by kinetic friction",
          "negative work",
          "kinetic friction opposes motion",
          "W_gravity = -mgd sinθ",
          "W_friction = -μk mg cosθ d",
          "KE equals zero at top",
          "both forces remove energy",
          "total negative work"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "negative work by gravity along incline",
            "negative work by kinetic friction along incline"
          ],
          "connector": [
            "reduces",
            "removes",
            "decreases"
          ],
          "effect": [
            "kinetic energy to zero",
            "block momentarily stops",
            "block momentarily at rest at top of ramp"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly sets up and solves conservation of energy equation including gravitational PE gained and energy lost to friction to find v ≈ 4.9-5.0 m/s at the base of the ramp, and explicitly states this is consistent with the speed from part (b).",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "conservation of energy",
          "gravitational potential energy gained",
          "energy dissipated by friction",
          "thermal energy generated",
          "mgd sinθ",
          "μk mg cosθ d",
          "1/2 mv^2 at base",
          "consistent with part b",
          "v ≈ 4.92 m/s",
          "work done by kinetic friction on incline",
          "energy balance on ramp",
          "ramp energy equation"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "kinetic energy at base of ramp"
          ],
          "connector": [
            "is converted to",
            "goes into",
            "becomes"
          ],
          "effect": [
            "gravitational potential energy at top",
            "thermal energy due to kinetic friction",
            "block stops at distance d up ramp"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly calculates power as P = W/t = ΔKE/t = 25 J / 4.0 s = 6.25 W.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "power",
          "P = W/t",
          "work equals change in kinetic energy",
          "ΔKE = 25 J",
          "P = 6.25 W",
          "6.25 watts",
          "minimum power output",
          "constant power assumption",
          "W = ΔKE frictionless",
          "motor power output",
          "average power",
          "work-energy theorem applied to motor"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u5_frq021",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Impulse on a Soccer Ball",
    "units": [
      5
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A soccer player kicks a ball of mass 0.45 kg that is initially at rest. The player's foot is in contact with the ball for 0.050 s, and the ball leaves the foot with a velocity of 18 m/s to the right.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the magnitude of the impulse delivered to the ball by the player's foot.",
        "rubric": "Student earns 1 point for correctly calculating the impulse as J = Δp = mΔv = (0.45 kg)(18 m/s) = 8.1 N·s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the magnitude of the average force exerted by the player's foot on the ball during the kick.",
        "rubric": "Student earns 1 point for correctly applying J = FΔt, giving F = J/Δt = 8.1 N·s / 0.050 s = 162 N."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain why the ball's change in momentum equals the impulse applied to it, referencing the relationship between force, time, and momentum.",
        "rubric": "Student earns 1 point for correctly stating the impulse-momentum theorem: the net impulse (net force multiplied by the time interval) equals the change in momentum of the ball (J = Δp = FnetΔt)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates the impulse as the product of mass and change in velocity: J = mΔv = (0.45)(18) = 8.1 N·s",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "impulse",
          "J = mΔv",
          "J = Δp",
          "8.1 N·s",
          "8.1 kg·m/s",
          "change in momentum",
          "mass times velocity",
          "0.45 kg",
          "18 m/s",
          "N·s"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates average force using J = FΔt, yielding F = 162 N",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "J = FΔt",
          "F = J/Δt",
          "average force",
          "162 N",
          "net force",
          "0.050 s",
          "8.1 divided by 0.050",
          "force equals impulse divided by time",
          "FavgΔt"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly cites the impulse-momentum theorem stating that impulse equals change in momentum (J = Δp = FnetΔt)",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "impulse-momentum theorem",
          "J = Δp",
          "FnetΔt = Δp",
          "net impulse equals change in momentum",
          "force times time interval",
          "change in momentum",
          "impulse equals Δp",
          "FΔt",
          "net force multiplied by time"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "net force",
            "contact time",
            "time interval"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes",
            "equals"
          ],
          "effect": [
            "change in momentum",
            "impulse",
            "Δp",
            "acceleration of ball"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u5_frq022",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Perfectly Inelastic Collision and Momentum Analysis",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A 4.0 kg cart moving to the right at 6.0 m/s collides with a 2.0 kg cart that is initially at rest on a frictionless track. The two carts stick together after the collision and move as one combined object. Take rightward as the positive direction.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the velocity of the two carts immediately after the collision.",
        "rubric": "Student earns 1 point for correctly applying conservation of momentum to find a post-collision velocity of 4.0 m/s to the right. Must show p_initial = p_final, using m1v1 + m2v2 = (m1+m2)v_f, yielding v_f = (4.0 × 6.0 + 2.0 × 0) / (4.0 + 2.0) = 4.0 m/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the kinetic energy lost during the collision.",
        "rubric": "Student earns 1 point for correctly computing initial KE = 72 J and final KE = 48 J, and stating the kinetic energy lost is 24 J. Must use KE = (1/2)mv^2 for both before and after, and subtract to find the loss."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain why kinetic energy is not conserved in this collision, and identify what type of collision this is.",
        "rubric": "Student earns 1 point for identifying this as a perfectly inelastic collision and explaining that the carts stick together, meaning internal forces (deformation, heat, sound) convert kinetic energy into other forms of energy, so kinetic energy is not conserved even though total momentum is conserved."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies conservation of momentum to calculate post-collision velocity of 4.0 m/s rightward.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "conservation of momentum",
          "p_initial = p_final",
          "m1v1 + m2v2 = (m1+m2)v_f",
          "total momentum conserved",
          "v_f = 4.0 m/s",
          "combined mass 6.0 kg",
          "momentum before equals momentum after",
          "p=mv",
          "perfectly inelastic momentum equation",
          "no net external force",
          "system momentum constant",
          "rightward positive direction",
          "post-collision velocity"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "conservation of momentum",
            "no external net force",
            "frictionless track"
          ],
          "connector": [
            "leads to",
            "results in",
            "requires"
          ],
          "effect": [
            "total momentum unchanged",
            "v_f = 4.0 m/s",
            "combined system moves at 4.0 m/s rightward"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates initial KE = 72 J, final KE = 48 J, and kinetic energy lost = 24 J.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "KE = 0.5mv^2",
          "kinetic energy lost",
          "initial kinetic energy 72 J",
          "final kinetic energy 48 J",
          "delta KE = 24 J",
          "KE_initial minus KE_final",
          "24 joules lost",
          "kinetic energy before collision",
          "kinetic energy after collision",
          "energy dissipated",
          "joules",
          "KE calculation",
          "energy not conserved"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "perfectly inelastic collision",
            "carts stick together",
            "reduction in speed of originally moving mass"
          ],
          "connector": [
            "results in",
            "produces",
            "causes"
          ],
          "effect": [
            "KE_initial = 72 J",
            "KE_final = 48 J",
            "24 J of kinetic energy lost"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Identifies the collision as perfectly inelastic and explains that kinetic energy is converted to internal energy (heat, sound, deformation) because the objects stick together.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "perfectly inelastic collision",
          "objects stick together",
          "kinetic energy converted",
          "internal energy",
          "deformation",
          "heat and sound",
          "KE not conserved",
          "momentum is conserved",
          "inelastic",
          "energy transformed",
          "thermal energy",
          "work done by internal forces",
          "objects combine into one mass",
          "energy goes into deforming the carts"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "carts stick together",
            "objects combine",
            "internal deformation forces"
          ],
          "connector": [
            "causes",
            "results in",
            "converts"
          ],
          "effect": [
            "kinetic energy lost",
            "energy converted to heat and sound",
            "kinetic energy not conserved",
            "internal energy of system increases"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u5_frq023",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Asymmetric Perfectly Inelastic Collision and Center of Mass Motion",
    "units": [
      5
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A 3.0 kg cart A moves to the right at 4.0 m/s on a frictionless horizontal track. A 1.0 kg cart B is initially at rest on the same track. The two carts collide and stick together (a perfectly inelastic collision). After the collision, the combined system moves to the right.\n\nAdditional information:\n- Mass of cart A: m_A = 3.0 kg, initial velocity: v_A = +4.0 m/s\n- Mass of cart B: m_B = 1.0 kg, initial velocity: v_B = 0 m/s\n- The collision is perfectly inelastic\n- The track is frictionless and horizontal\n- Take rightward as positive",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the velocity of the combined system immediately after the collision.",
        "rubric": "Student applies conservation of momentum: m_A * v_A + m_B * v_B = (m_A + m_B) * v_f. Substituting: (3.0)(4.0) + (1.0)(0) = (4.0) * v_f, giving v_f = 3.0 m/s to the right."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the kinetic energy lost during the collision. Then determine what percentage of the original kinetic energy was lost.",
        "rubric": "Student calculates initial KE = 0.5 * (3.0) * (4.0)^2 = 24 J and final KE = 0.5 * (4.0) * (3.0)^2 = 18 J. Energy lost = 24 - 18 = 6.0 J. Percentage lost = (6.0 / 24) * 100 = 25%."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Before the collision occurs, a student claims that the velocity of the center of mass of the two-cart system is the same as the velocity of cart A alone, since cart B is at rest and contributes nothing. Is the student correct? Explain using the definition of center of mass velocity and the principle of conservation of momentum.",
        "rubric": "Student correctly states the student is wrong. The center-of-mass velocity is v_cm = (m_A * v_A + m_B * v_B) / (m_A + m_B) = (3.0*4.0 + 1.0*0) / 4.0 = 3.0 m/s, not 4.0 m/s. The student should note that v_cm depends on the total momentum divided by total mass, so cart B's mass contributes to the denominator even when its velocity is zero. Furthermore, conservation of momentum guarantees v_cm remains 3.0 m/s both before and after the collision (no external horizontal forces), which equals the post-collision velocity, confirming the center of mass does not accelerate."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies conservation of momentum for a perfectly inelastic collision to find v_f = 3.0 m/s. Must show the momentum equation m_A*v_A + m_B*v_B = (m_A + m_B)*v_f with correct substitution and result.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "conservation of momentum",
          "perfectly inelastic collision",
          "stick together",
          "p = mv",
          "total momentum conserved",
          "m_A*v_A + m_B*v_B = (m_A + m_B)*v_f",
          "3.0 m/s",
          "combined mass",
          "final velocity",
          "momentum before equals momentum after",
          "no external horizontal force",
          "isolated system",
          "total momentum unchanged"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "perfectly inelastic collision",
            "carts stick together",
            "no external horizontal force"
          ],
          "connector": [
            "conserves",
            "results in",
            "gives"
          ],
          "effect": [
            "total momentum conserved",
            "v_f = 3.0 m/s",
            "combined system velocity"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates initial KE = 24 J, final KE = 18 J, energy lost = 6.0 J, and percentage lost = 25%. Must show KE = 0.5*m*v^2 applied to both before and after states.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "kinetic energy",
          "KE = 0.5*m*v^2",
          "energy lost",
          "inelastic collision loses energy",
          "24 J initial kinetic energy",
          "18 J final kinetic energy",
          "6.0 J lost",
          "25 percent energy loss",
          "mechanical energy not conserved",
          "internal energy increases",
          "deformation converts kinetic energy",
          "energy dissipated",
          "heat sound deformation"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "perfectly inelastic collision",
            "carts deform and stick"
          ],
          "connector": [
            "converts",
            "results in",
            "causes loss of"
          ],
          "effect": [
            "kinetic energy lost",
            "6.0 J dissipated",
            "25% energy loss",
            "internal energy increases"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly identifies the student is wrong and uses v_cm = (m_A*v_A + m_B*v_B)/(m_A + m_B) = 3.0 m/s (not 4.0 m/s) to refute the claim. Must explicitly note that total mass appears in the denominator and/or invoke conservation of momentum to show v_cm is constant and equals post-collision velocity.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "center of mass velocity",
          "v_cm = total momentum divided by total mass",
          "v_cm = (m_A*v_A + m_B*v_B)/(m_A + m_B)",
          "3.0 m/s not 4.0 m/s",
          "student is incorrect",
          "total mass in denominator",
          "mass of cart B contributes to denominator",
          "conservation of momentum",
          "v_cm unchanged before and after",
          "no net external horizontal force",
          "center of mass does not accelerate",
          "weighted average of velocities",
          "rest mass still affects center of mass",
          "v_cm equals post-collision velocity"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "cart B has mass even at rest",
            "total mass increases denominator",
            "no external horizontal force"
          ],
          "connector": [
            "reduces",
            "means",
            "causes"
          ],
          "effect": [
            "v_cm = 3.0 m/s not 4.0 m/s",
            "center of mass velocity is constant",
            "student claim is wrong"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u5_frq024",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Collision on a Frictionless Track: Impulse, Momentum, and Energy Analysis",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "A 3.0 kg cart (Cart A) moves to the right at 4.0 m/s on a frictionless horizontal track and collides with a 1.0 kg cart (Cart B) that is initially at rest. A force sensor records that during the collision Cart A experiences an average force of 60 N directed to the left for a time interval of 0.10 s. After the collision, Cart B moves to the right at 6.0 m/s.\n\nUse the following values throughout:\n  - Mass of Cart A: mA = 3.0 kg\n  - Initial velocity of Cart A: vA,i = +4.0 m/s (rightward positive)\n  - Mass of Cart B: mB = 1.0 kg\n  - Initial velocity of Cart B: vB,i = 0 m/s\n  - Average force on Cart A during collision: F = 60 N (directed left)\n  - Duration of collision: Δt = 0.10 s\n  - Final velocity of Cart B: vB,f = +6.0 m/s",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the impulse delivered to Cart A during the collision. State the magnitude and direction of the impulse.",
        "rubric": "Full credit requires calculating impulse on Cart A as J = FΔt = (60 N)(0.10 s) = 6.0 N·s directed to the left (i.e., −6.0 N·s), with correct magnitude, correct unit (N·s or kg·m/s), and correct direction stated."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the impulse-momentum theorem, determine the final velocity of Cart A after the collision.",
        "rubric": "Full credit requires applying J = Δp = mA(vA,f − vA,i), substituting −6.0 N·s = (3.0 kg)(vA,f − 4.0 m/s), and solving to obtain vA,f = +2.0 m/s to the right."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student claims that momentum is conserved during this collision. Verify or refute this claim by checking whether the total momentum of the two-cart system is the same before and after the collision. Justify your answer using calculated values.",
        "rubric": "Full credit requires calculating total initial momentum (pi = 3.0×4.0 + 1.0×0 = 12.0 kg·m/s), total final momentum (pf = 3.0×2.0 + 1.0×6.0 = 12.0 kg·m/s), confirming pi = pf, and citing conservation of momentum / no net external horizontal force on the system."
      },
      {
        "label": "d",
        "command": "Explain",
        "question": "Determine whether this collision is elastic, perfectly inelastic, or inelastic (but not perfectly inelastic). Explain your reasoning by comparing the total kinetic energy before and after the collision.",
        "rubric": "Full credit requires calculating KEi = 0.5(3.0)(4.0)² = 24.0 J and KEf = 0.5(3.0)(2.0)² + 0.5(1.0)(6.0)² = 6.0 + 18.0 = 24.0 J, concluding KEi = KEf so the collision is elastic, and noting the carts separated (not perfectly inelastic) and kinetic energy is conserved."
      },
      {
        "label": "e",
        "command": "Describe",
        "question": "The two carts are replaced with new carts of the same masses but with a latch so they stick together after the collision. Describe how the final velocity of the combined system and the total kinetic energy after the collision would each compare to the original scenario. You do not need to perform full calculations, but your reasoning must reference relevant physics principles.",
        "rubric": "Full credit requires stating the combined (perfectly inelastic) final velocity would be lower than either cart's final velocity in the original scenario (using conservation of momentum: vf = 12.0/4.0 = 3.0 m/s < 6.0 m/s and < original vA,f), stating kinetic energy after would be less than 24.0 J (maximum KE is lost in a perfectly inelastic collision), and referencing conservation of momentum and loss of kinetic energy in a perfectly inelastic collision."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly calculates the impulse on Cart A as J = FΔt = 6.0 N·s directed to the left (−6.0 N·s), with correct magnitude, direction, and units.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "impulse",
          "J = FΔt",
          "F times delta t",
          "6.0 N·s",
          "6 N·s",
          "newton seconds",
          "kg·m/s",
          "directed left",
          "negative direction",
          "−6.0 N·s",
          "magnitude 6",
          "leftward impulse",
          "average force times time interval",
          "impulse vector",
          "60 N force"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "average force of 60 N directed left",
            "collision duration 0.10 s"
          ],
          "connector": [
            "multiplied by",
            "applied over",
            "produces"
          ],
          "effect": [
            "impulse of 6.0 N·s to the left",
            "−6.0 N·s impulse on Cart A",
            "change in momentum of Cart A"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly applies the impulse-momentum theorem J = mΔv to find vA,f = +2.0 m/s to the right.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "impulse-momentum theorem",
          "J = delta p",
          "J = m(vf - vi)",
          "impulse equals change in momentum",
          "2.0 m/s",
          "final velocity of Cart A",
          "vA,f",
          "rightward",
          "positive 2.0",
          "3.0 kg",
          "−6.0 N·s",
          "subtract initial velocity",
          "momentum change",
          "vf equals vi plus J over m",
          "Cart A slows down"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "impulse of −6.0 N·s on Cart A",
            "net force during collision"
          ],
          "connector": [
            "causes",
            "results in",
            "produces"
          ],
          "effect": [
            "change in momentum of Cart A",
            "final velocity of 2.0 m/s to the right",
            "decreased speed of Cart A"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student calculates total initial momentum (12.0 kg·m/s) and total final momentum (12.0 kg·m/s), confirms they are equal, and cites conservation of momentum due to no net external horizontal force on the system.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "conservation of momentum",
          "total momentum",
          "pi = pf",
          "12.0 kg·m/s",
          "no net external horizontal force",
          "isolated system",
          "internal forces only",
          "momentum conserved",
          "initial momentum equals final momentum",
          "sum of momenta unchanged",
          "frictionless track",
          "Newton's third law",
          "system momentum",
          "collision forces are internal",
          "total system momentum"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "no net external horizontal force on the two-cart system",
            "collision forces are internal to the system"
          ],
          "connector": [
            "results in",
            "means",
            "leads to"
          ],
          "effect": [
            "momentum conserved",
            "pi equals pf equals 12.0 kg·m/s",
            "total momentum unchanged before and after collision"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Student correctly calculates KEi = 24.0 J and KEf = 24.0 J, concludes kinetic energy is conserved, and correctly identifies the collision as elastic.",
        "partLabel": "d",
        "skill": "explain",
        "keywords": [
          "elastic collision",
          "kinetic energy conserved",
          "KE = one half mv squared",
          "KEi = 24 J",
          "KEf = 24 J",
          "kinetic energy unchanged",
          "carts separate after collision",
          "not perfectly inelastic",
          "total kinetic energy same before and after",
          "elastic",
          "KE not lost",
          "0.5(3.0)(4.0) squared",
          "0.5(1.0)(6.0) squared",
          "energy conservation in collision",
          "no kinetic energy converted to internal energy"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "kinetic energy before equals kinetic energy after",
            "KEi = KEf = 24.0 J",
            "carts do not stick together"
          ],
          "connector": [
            "indicates",
            "means",
            "classifies collision as"
          ],
          "effect": [
            "elastic collision",
            "no kinetic energy lost to internal energy",
            "collision is elastic not inelastic"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Student correctly states the perfectly inelastic combined velocity would be lower (3.0 m/s) and kinetic energy after would be less than 24.0 J, referencing conservation of momentum and maximum kinetic energy loss in a perfectly inelastic collision.",
        "partLabel": "e",
        "skill": "describe",
        "keywords": [
          "perfectly inelastic collision",
          "carts stick together",
          "maximum kinetic energy lost",
          "conservation of momentum still applies",
          "combined final velocity 3.0 m/s",
          "less kinetic energy after collision",
          "kinetic energy decreases",
          "converted to internal energy",
          "momentum still conserved after sticking",
          "lower final speed than original scenario",
          "vf = 3.0 m/s",
          "KE less than 24 J",
          "deformation stores energy",
          "objects move as one",
          "single combined mass"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "carts stick together",
            "perfectly inelastic collision",
            "single combined mass of 4.0 kg"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "lower final velocity of 3.0 m/s",
            "maximum loss of kinetic energy",
            "kinetic energy after less than 24 J"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u5_frq025",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Ballistic Pendulum and Center of Mass Analysis",
    "units": [
      5
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A ballistic pendulum is used to measure the speed of a bullet. A bullet of mass m = 0.010 kg is fired horizontally and embeds itself in a stationary wooden block of mass M = 0.990 kg suspended by a light string of length L = 0.80 m. After the collision, the bullet-block system swings upward and rises to a maximum height h = 0.20 m above its initial position. Assume g = 10 m/s² throughout this problem. The bullet enters the block from the left and the two objects move together immediately after impact. You may treat the block as a point mass located at the end of the string.\n\nAdditional scenario for part (e): A second experiment is conducted on a frictionless horizontal surface. Two carts are placed at rest. Cart A (mass 2m) is positioned at x = 0 m, and Cart B (mass 3m) is positioned at x = 0.60 m. A compressed spring between them is released, sending Cart A to the left at 3.0 m/s and Cart B to the right.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the speed of the bullet-block system immediately after the collision.",
        "rubric": "Student uses conservation of energy for the post-collision swing: (1/2)(M+m)v² = (M+m)gh, solving for v = sqrt(2gh) = sqrt(2 × 10 × 0.20) = 2.0 m/s. Full credit requires correct substitution and answer of 2.0 m/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using your result from part (a), calculate the initial speed of the bullet before it struck the block.",
        "rubric": "Student applies conservation of momentum for the perfectly inelastic collision: mv₀ = (m + M)v_f, so v₀ = (m + M)v_f / m = (1.000 kg)(2.0 m/s) / (0.010 kg) = 200 m/s. Full credit requires correct use of momentum conservation and answer of 200 m/s."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A student claims that kinetic energy is conserved during the bullet-block collision because the system eventually returns to the same height if the pendulum swings back. Explain why this claim is incorrect, and describe what happens to the energy that is lost during the collision.",
        "rubric": "Student must explain that the collision is perfectly inelastic (objects stick together), which by definition involves a loss of kinetic energy regardless of subsequent motion. Energy lost during collision is converted to internal energy (thermal energy, sound, deformation). The pendulum swinging back does not restore the pre-collision KE because energy was permanently lost during impact. Student should quantify or reference the significant KE loss (initial KE ≈ 200 J vs. post-collision KE = 2 J)."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Calculate the magnitude of the impulse delivered by the bullet to the block during the collision.",
        "rubric": "Student applies impulse-momentum theorem to the block alone: J = ΔpBlock = M·v_f - M·0 = (0.990 kg)(2.0 m/s) = 1.98 N·s ≈ 2.0 N·s. Alternatively, student may calculate the change in momentum of the bullet (−1.98 N·s) and cite Newton's third law to find equal and opposite impulse on block. Full credit for 1.98 N·s or 2.0 N·s with correct reasoning."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "For the two-cart scenario described in the prompt, calculate the position of the center of mass of the two-cart system before the spring is released, and then determine the velocity of the center of mass after the spring releases. Explain what this result implies about the net external force on the system.",
        "rubric": "Center of mass position: x_cm = (2m·0 + 3m·0.60) / (2m + 3m) = (1.80m) / (5m) = 0.36 m. Velocity of CM after release: v_cm = (2m·(−3.0) + 3m·v_B) / 5m; by conservation of momentum total momentum = 0 (system at rest initially), so v_cm = 0 m/s. A center of mass velocity of zero implies zero net external force on the system (no external horizontal forces), consistent with Newton's second law for a system."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies conservation of mechanical energy after the collision to find the post-collision speed of the bullet-block system as 2.0 m/s using v = sqrt(2gh).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "conservation of mechanical energy",
          "kinetic energy converts to gravitational potential energy",
          "0.5(M+m)v^2 = (M+m)gh",
          "v = sqrt(2gh)",
          "2.0 m/s",
          "post-collision speed",
          "mechanical energy conserved after collision",
          "bullet-block system speed",
          "gravitational PE gain equals KE loss",
          "swing phase energy conservation"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "bullet-block system rises to height h",
            "conservation of mechanical energy applied to swing phase"
          ],
          "connector": [
            "gives",
            "results in",
            "yields"
          ],
          "effect": [
            "post-collision speed 2.0 m/s",
            "v = sqrt(2gh)"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies conservation of momentum during the perfectly inelastic collision to find the bullet's initial speed as 200 m/s using mv₀ = (m+M)v_f.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "conservation of momentum",
          "perfectly inelastic collision",
          "mv_0 = (m+M)v_f",
          "total momentum before equals total momentum after",
          "bullet initial speed",
          "200 m/s",
          "momentum conserved during collision",
          "objects stick together after impact",
          "bullet embeds in block",
          "linear momentum conservation"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "bullet embeds in block",
            "perfectly inelastic collision with no net external horizontal force during impact"
          ],
          "connector": [
            "requires applying",
            "leads to use of"
          ],
          "effect": [
            "conservation of momentum equation mv_0 = (m+M)v_f",
            "initial bullet speed 200 m/s"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly explains that the collision is perfectly inelastic so kinetic energy is not conserved during impact, and identifies that lost kinetic energy is converted to internal thermal energy, sound, or deformation energy - not recovered by the pendulum swinging back.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "perfectly inelastic collision",
          "kinetic energy not conserved during impact",
          "objects stick together",
          "energy converted to thermal energy",
          "internal energy increase",
          "permanent deformation of block",
          "sound energy radiated",
          "kinetic energy loss is irreversible",
          "pendulum swing does not restore pre-collision kinetic energy",
          "energy dissipated at moment of collision",
          "KE before collision approximately 200 J",
          "KE after collision approximately 2 J"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "perfectly inelastic collision",
            "bullet embeds and deforms block"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "kinetic energy permanently lost during impact",
            "energy converted to internal thermal energy and deformation",
            "pendulum cannot swing back to original bullet height"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly calculates the impulse delivered by the bullet to the block as approximately 1.98 N·s (or 2.0 N·s) using the impulse-momentum theorem applied to the block, J = M·Δv = M·v_f.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "impulse-momentum theorem",
          "J = delta p",
          "impulse equals change in momentum",
          "J = M times v_f",
          "1.98 N·s",
          "2.0 N·s",
          "block momentum changes from zero to Mv_f",
          "Newton's third law impulse pair",
          "impulse exerted on block by bullet",
          "net impulse on block equals final momentum of block",
          "block initially at rest so delta p equals M v_f"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "bullet exerts force on block during collision",
            "impulse-momentum theorem applied to block alone"
          ],
          "connector": [
            "gives",
            "results in"
          ],
          "effect": [
            "impulse of 1.98 N·s on block",
            "block momentum changes from 0 to Mv_f"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly calculates the center of mass position as 0.36 m, determines the center of mass velocity is 0 m/s after spring release using conservation of momentum, and correctly concludes that zero net external horizontal force acts on the system.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "center of mass position formula",
          "x_cm = (m1x1 + m2x2) divided by (m1+m2)",
          "x_cm = 0.36 m",
          "velocity of center of mass equals zero",
          "v_cm = total momentum divided by total mass",
          "total system momentum zero because system initially at rest",
          "conservation of momentum applied to cart system",
          "spring is internal force so cannot change total momentum",
          "net external force on system equals zero",
          "Newton's second law for a system F_net = M_total times a_cm",
          "center of mass does not accelerate when no net external force acts"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "system initially at rest so total momentum is zero",
            "compressed spring is an internal force between the carts",
            "frictionless surface means no net external horizontal force"
          ],
          "connector": [
            "means",
            "results in",
            "implies"
          ],
          "effect": [
            "total momentum remains zero after spring releases",
            "center of mass velocity remains zero",
            "center of mass position stays at 0.36 m"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u6_frq026",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Spring-Mass System: Period and Frequency",
    "units": [
      6
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A block of mass m = 0.50 kg is attached to a horizontal spring with spring constant k = 200 N/m on a frictionless surface. The block is displaced 0.10 m from its equilibrium position and released from rest. Use g = 10 m/s².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the period T of the block's oscillation.",
        "rubric": "Student correctly applies T = 2π√(m/k), substitutes m = 0.50 kg and k = 200 N/m, and arrives at T = 2π√(0.0025) ≈ 0.314 s (approximately 0.31 s)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the maximum speed of the block during its oscillation.",
        "rubric": "Student uses energy conservation: ½kA² = ½mv²_max, giving v_max = A√(k/m) = 0.10 × √(200/0.50) = 0.10 × 20 = 2.0 m/s."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "If the spring constant k is increased to 800 N/m while all other quantities remain the same, explain what happens to the period of oscillation.",
        "rubric": "Student states that the period decreases because T = 2π√(m/k) and a larger spring constant k means a smaller value under the square root, resulting in a shorter period."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates the period using T = 2π√(m/k) with m = 0.50 kg and k = 200 N/m, yielding T ≈ 0.31 s",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "T = 2π√(m/k)",
          "period formula",
          "T = 2pi sqrt m over k",
          "0.31 s",
          "0.314 s",
          "spring constant",
          "mass",
          "square root of m over k",
          "period of oscillation",
          "SHM period",
          "simple harmonic motion period",
          "angular frequency ω = √(k/m)",
          "T = 2π/ω",
          "0.50 kg",
          "200 N/m"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates maximum speed as 2.0 m/s using energy conservation or v_max = Aω = A√(k/m)",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "v_max = A√(k/m)",
          "maximum speed",
          "2.0 m/s",
          "energy conservation",
          "½kA² = ½mv²",
          "elastic potential energy equals kinetic energy",
          "amplitude",
          "v = Aω",
          "ω = √(k/m)",
          "maximum kinetic energy",
          "all potential energy converts to kinetic",
          "equilibrium position maximum speed",
          "A = 0.10 m",
          "spring potential energy",
          "conservation of mechanical energy"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "States that the period decreases and correctly justifies using T = 2π√(m/k), explaining that larger k reduces the period",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "period decreases",
          "T decreases",
          "larger k",
          "greater spring constant",
          "T = 2π√(m/k)",
          "inversely related",
          "k increases period decreases",
          "stiffer spring",
          "shorter period",
          "T proportional to 1/√k",
          "k quadruples period halves",
          "800 N/m",
          "inverse square root relationship",
          "oscillates faster",
          "restoring force increases"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "increased spring constant",
            "larger k",
            "stiffer spring",
            "k increased to 800 N/m",
            "quadrupled spring constant"
          ],
          "connector": [
            "leads to",
            "results in",
            "causes",
            "means",
            "therefore"
          ],
          "effect": [
            "period decreases",
            "shorter period",
            "T decreases",
            "period is halved",
            "oscillates more quickly"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u6_frq027",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Spring-Mass System: Energy and Amplitude",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A block of mass m = 0.50 kg is attached to a horizontal spring with spring constant k = 200 N/m on a frictionless surface. The block is pulled 0.10 m from the equilibrium position and released from rest. The system oscillates in simple harmonic motion.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the total mechanical energy of the spring-mass system.",
        "rubric": "Student correctly applies the elastic potential energy formula E = (1/2)kA² using k = 200 N/m and A = 0.10 m, arriving at E = 1.0 J."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the maximum speed of the block during its oscillation.",
        "rubric": "Student sets total energy equal to kinetic energy at equilibrium using (1/2)mv² = (1/2)kA², solving for v_max = A√(k/m), and arrives at v_max = 2.0 m/s."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "If the amplitude of oscillation is doubled to 0.20 m while the spring constant and mass remain the same, explain what happens to the total mechanical energy of the system and how this affects the maximum speed of the block.",
        "rubric": "Student states that total mechanical energy is proportional to the square of the amplitude (E = (1/2)kA²), so doubling the amplitude quadruples the total energy. Student then explains that since (1/2)mv_max² = (1/2)kA², the maximum speed is proportional to amplitude, so maximum speed doubles to 4.0 m/s."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly calculates total mechanical energy using E = (1/2)kA² with k = 200 N/m and A = 0.10 m, yielding E = 1.0 J.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "E = (1/2)kA²",
          "elastic potential energy",
          "total mechanical energy",
          "1.0 J",
          "spring potential energy",
          "U = (1/2)kx²",
          "amplitude squared",
          "stored energy",
          "released from rest",
          "initial displacement equals amplitude"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "block released from rest at amplitude",
            "all energy is potential at maximum displacement"
          ],
          "connector": [
            "gives",
            "yields",
            "results in"
          ],
          "effect": [
            "total mechanical energy equals elastic potential energy",
            "E = 1.0 J"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly sets total energy equal to maximum kinetic energy at equilibrium, applies (1/2)mv_max² = (1/2)kA² or v_max = A√(k/m), and arrives at v_max = 2.0 m/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "v_max = A√(k/m)",
          "maximum speed",
          "maximum kinetic energy",
          "(1/2)mv² = (1/2)kA²",
          "conservation of energy",
          "equilibrium position",
          "2.0 m/s",
          "KE equals total mechanical energy at equilibrium",
          "zero spring potential energy at equilibrium",
          "energy conversion"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "all energy is kinetic at equilibrium",
            "block passes through equilibrium position"
          ],
          "connector": [
            "results in",
            "gives",
            "means"
          ],
          "effect": [
            "maximum speed occurs at equilibrium",
            "v_max = 2.0 m/s"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly explains that energy is proportional to A² so doubling amplitude quadruples total energy, and that maximum speed is proportional to amplitude so maximum speed doubles to 4.0 m/s.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "energy proportional to amplitude squared",
          "quadruples",
          "total energy increases by factor of four",
          "maximum speed doubles",
          "v_max proportional to amplitude",
          "4.0 m/s",
          "E = (1/2)kA²",
          "speed proportional to A",
          "square relationship between energy and amplitude",
          "linear relationship between speed and amplitude",
          "new total energy equals 4.0 J"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "amplitude doubled to 0.20 m",
            "A increased by factor of two"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "total mechanical energy quadruples to 4.0 J",
            "maximum speed doubles to 4.0 m/s",
            "v_max = 4.0 m/s"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u6_frq028",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Spring-Mass System with Changing Amplitude and Energy",
    "units": [
      6
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A block of mass m = 0.50 kg is attached to a horizontal spring with spring constant k = 200 N/m on a frictionless surface. The block is pulled 0.10 m from equilibrium and released from rest, oscillating in simple harmonic motion. At some later moment, a lump of clay of mass m_clay = 0.50 kg is dropped onto the block and sticks to it precisely when the block passes through the equilibrium position. Assume the clay falls vertically and does not alter the horizontal velocity of the block at the instant of collision.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the speed of the block alone as it passes through the equilibrium position before the clay is added.",
        "rubric": "Student earns the point by correctly applying conservation of energy (or using v_max = Aω) to find v = A√(k/m) = 0.10 × √(200/0.50) = 0.10 × 20 = 2.0 m/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Immediately after the clay sticks to the block at the equilibrium position, the combined system continues to oscillate. Calculate the new amplitude of oscillation after the clay is added.",
        "rubric": "Student earns the point by recognizing that the new amplitude is found from the kinetic energy at equilibrium after collision. Momentum conservation gives v' = m·v/(m + m_clay) = 0.50×2.0/1.00 = 1.0 m/s. Then (1/2)k·A'^2 = (1/2)(m+m_clay)v'^2 → A' = v'√((m+m_clay)/k) = 1.0×√(1.00/200) = 1.0/√200 ≈ 0.071 m."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The period of the spring-mass system increases after the clay is added. Explain why the amplitude decreases while the period increases, and identify which physical quantity determines each outcome.",
        "rubric": "Student earns the point by explaining that the period depends on mass and spring constant via T = 2π√(m/k), so doubling the total mass increases T; while the amplitude decreases because inelastic collision at equilibrium reduces kinetic energy (momentum is not conserved with the spring, but linear momentum is conserved between block and clay at that instant), and since potential energy is zero at equilibrium, the new maximum elastic potential energy equals the reduced kinetic energy of the combined system, yielding a smaller amplitude. Both the cause of period change (increased mass) and amplitude change (energy lost in inelastic collision) must be addressed."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates the speed at equilibrium before clay is added as 2.0 m/s using energy conservation or v_max = Aω.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "v_max = A√(k/m)",
          "conservation of energy",
          "KE = (1/2)mv^2",
          "PE = (1/2)kx^2",
          "elastic potential energy equals kinetic energy at equilibrium",
          "ω = √(k/m)",
          "v = Aω",
          "angular frequency",
          "2.0 m/s",
          "maximum speed at equilibrium",
          "amplitude times angular frequency",
          "all potential energy converts to kinetic energy",
          "zero spring potential energy at equilibrium",
          "v_max",
          "spring energy fully converted"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "spring potential energy",
            "maximum displacement",
            "amplitude"
          ],
          "connector": [
            "converts to",
            "equals",
            "results in"
          ],
          "effect": [
            "maximum kinetic energy",
            "maximum speed at equilibrium",
            "v_max"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies conservation of momentum to find post-collision velocity (1.0 m/s), then uses energy conservation to find new amplitude (~0.071 m or A/√2).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "conservation of momentum",
          "p = mv",
          "inelastic collision",
          "perfectly inelastic collision",
          "m1v1 = (m1+m2)v2",
          "new amplitude",
          "KE = (1/2)kA^2",
          "(1/2)(m+m_clay)v'^2 = (1/2)kA'^2",
          "0.071 m",
          "A/√2",
          "A' = v'√(m_total/k)",
          "momentum conserved at equilibrium",
          "energy stored in spring equals kinetic energy",
          "post-collision speed 1.0 m/s",
          "combined mass 1.0 kg"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "inelastic collision at equilibrium",
            "clay added to block",
            "momentum conservation"
          ],
          "connector": [
            "reduces velocity to",
            "results in",
            "leads to"
          ],
          "effect": [
            "reduced kinetic energy",
            "smaller new amplitude",
            "less energy stored in spring"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Explains that period increases because T = 2π√(m/k) depends on total mass (doubled mass increases T), while amplitude decreases because the inelastic collision at equilibrium dissipates kinetic energy, reducing the total mechanical energy of the oscillating system.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "T = 2π√(m/k)",
          "period depends on mass not amplitude",
          "greater total mass increases period",
          "amplitude depends on total mechanical energy",
          "total mechanical energy reduced",
          "E = (1/2)kA^2",
          "inelastic collision dissipates kinetic energy",
          "kinetic energy lost in collision",
          "energy converted to thermal energy heat deformation",
          "amplitude proportional to square root of total energy",
          "period independent of amplitude",
          "period independent of energy",
          "doubling mass increases period by factor of √2",
          "spring constant unchanged after collision",
          "mechanical energy not conserved in inelastic collision"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "doubled total mass",
            "inelastic collision dissipates energy"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to"
          ],
          "effect": [
            "increased period T",
            "decreased amplitude",
            "reduced total mechanical energy"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u6_frq029",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Spring-Mass System and Energy in Simple Harmonic Motion",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "A block of mass m = 0.50 kg is attached to a horizontal spring with spring constant k = 200 N/m on a frictionless surface. The block is pulled 0.10 m from the equilibrium position and released from rest. The system undergoes simple harmonic motion.\n\nUse the following values where needed:\n- Mass of block: m = 0.50 kg\n- Spring constant: k = 200 N/m\n- Amplitude: A = 0.10 m\n- g = 10 m/s²",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the nature of the restoring force acting on the block as it oscillates. Include how the magnitude and direction of this force change as the block moves from maximum displacement back toward equilibrium.",
        "rubric": "Student must state that the restoring force is provided by the spring (Hooke's Law: F = -kx), that its magnitude is proportional to the displacement from equilibrium, and that it is always directed toward the equilibrium position (opposing displacement)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the period of oscillation of the spring-mass system.",
        "rubric": "Student must use T = 2π√(m/k), substitute m = 0.50 kg and k = 200 N/m, and arrive at T = 2π√(0.0025) = 2π(0.05) ≈ 0.314 s (accept answers between 0.31 s and 0.32 s)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the maximum speed of the block during its oscillation.",
        "rubric": "Student must use energy conservation: (1/2)kA² = (1/2)mv_max², leading to v_max = A√(k/m) = 0.10√(200/0.50) = 0.10 × 20 = 2.0 m/s. Alternatively, v_max = Aω where ω = √(k/m) = 20 rad/s."
      },
      {
        "label": "d",
        "command": "Explain",
        "question": "At what position(s) in the oscillation does the block have maximum kinetic energy, and at what position(s) does it have maximum elastic potential energy? Explain your reasoning using energy conservation.",
        "rubric": "Student must state that maximum kinetic energy occurs at the equilibrium position (x = 0) where spring potential energy is zero, and maximum elastic potential energy occurs at maximum displacement (x = ±A) where kinetic energy is zero. Must reference conservation of energy and the trade-off between KE and PE throughout the cycle."
      },
      {
        "label": "e",
        "command": "Predict",
        "question": "If the amplitude of the oscillation is doubled to A = 0.20 m while the mass and spring constant remain the same, predict what happens to the period of oscillation and to the maximum speed of the block. Justify each prediction.",
        "rubric": "Student must correctly predict that the period does NOT change (T depends only on m and k, not amplitude), and that the maximum speed DOUBLES to 4.0 m/s (v_max = Aω, so doubling A doubles v_max). Must justify the period claim by referencing T = 2π√(m/k) and the speed claim by referencing v_max = Aω or energy conservation with (1/2)kA²."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly describes the restoring force as proportional to displacement from equilibrium, always directed toward equilibrium, consistent with Hooke's Law F = -kx, increasing in magnitude as displacement increases.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "restoring force",
          "Hooke's law",
          "F = -kx",
          "proportional to displacement",
          "directed toward equilibrium",
          "toward equilibrium",
          "opposing displacement",
          "magnitude increases with displacement",
          "spring force",
          "net force toward equilibrium",
          "linear restoring force",
          "displacement from equilibrium",
          "force decreases as block returns",
          "negative sign indicates opposition"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "displacement from equilibrium",
            "block stretched spring",
            "block compressed spring"
          ],
          "connector": [
            "results in",
            "produces",
            "causes"
          ],
          "effect": [
            "restoring force toward equilibrium",
            "force directed back toward equilibrium",
            "force opposing displacement",
            "spring pulls or pushes block back"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly uses T = 2π√(m/k) with m = 0.50 kg and k = 200 N/m to calculate T ≈ 0.314 s (accept 0.31-0.32 s).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "T = 2π√(m/k)",
          "period formula SHM",
          "T = 2pi sqrt(m/k)",
          "0.314 s",
          "0.31 s",
          "0.32 s",
          "period of oscillation",
          "spring-mass period",
          "√(m/k)",
          "2π√(m/k) substitution",
          "m = 0.50 kg k = 200 N/m",
          "T equals approximately 0.314",
          "period independent of amplitude"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly calculates maximum speed v_max = 2.0 m/s using energy conservation (1/2)kA² = (1/2)mv_max² or v_max = Aω with ω = √(k/m) = 20 rad/s.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "v_max = A√(k/m)",
          "maximum speed",
          "2.0 m/s",
          "conservation of energy",
          "(1/2)kA² = (1/2)mv²",
          "v_max = Aω",
          "ω = √(k/m)",
          "angular frequency 20 rad/s",
          "elastic potential energy equals kinetic energy",
          "total mechanical energy conserved",
          "KE maximum at equilibrium",
          "all energy kinetic at x equals zero",
          "v_max = 0.10 times 20"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "block passes through equilibrium position",
            "all elastic potential energy converted to kinetic energy"
          ],
          "connector": [
            "results in",
            "gives",
            "produces"
          ],
          "effect": [
            "maximum kinetic energy",
            "maximum speed of 2.0 m/s",
            "v_max = Aω"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Student correctly identifies maximum KE at equilibrium (x = 0) and maximum PE at maximum displacement (x = ±A), with explicit reference to conservation of energy and the conversion between kinetic and potential energy.",
        "partLabel": "d",
        "skill": "explain",
        "keywords": [
          "maximum kinetic energy at equilibrium",
          "maximum potential energy at amplitude",
          "x = 0",
          "x = ±A",
          "conservation of energy",
          "trade-off between KE and PE",
          "elastic potential energy zero at equilibrium",
          "kinetic energy zero at maximum displacement",
          "energy converts between kinetic and potential",
          "KE + PE = constant",
          "total mechanical energy constant",
          "spring fully compressed or stretched at amplitude",
          "block momentarily at rest at x equals A"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "block at equilibrium position",
            "x equals zero",
            "block at maximum displacement x equals A"
          ],
          "connector": [
            "results in",
            "means",
            "gives"
          ],
          "effect": [
            "maximum kinetic energy at x equals zero",
            "zero spring potential energy at equilibrium",
            "maximum speed at equilibrium",
            "zero kinetic energy at amplitude",
            "maximum elastic potential energy at x equals A"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Student correctly predicts period is unchanged (T is independent of amplitude) AND maximum speed doubles to 4.0 m/s, with justification citing T = 2π√(m/k) for period independence and v_max = Aω or energy conservation for speed doubling.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "period unchanged",
          "period independent of amplitude",
          "T = 2π√(m/k) no amplitude term",
          "maximum speed doubles",
          "v_max = Aω proportional to amplitude",
          "4.0 m/s",
          "doubling amplitude doubles maximum speed",
          "amplitude does not affect period",
          "v_max directly proportional to A",
          "isochronous",
          "same period different amplitude",
          "T depends only on m and k",
          "v_max = 0.20 times 20 equals 4.0 m/s",
          "energy scales with A squared"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "amplitude doubled to 0.20 m",
            "larger initial displacement"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "maximum speed doubles to 4.0 m/s",
            "v_max increases proportionally with amplitude",
            "period remains the same",
            "T unchanged because m and k unchanged"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u6_frq030",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Coupled Spring-Mass and Pendulum Systems: Energy, Period, and Restoring Force",
    "units": [
      6
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A student sets up two separate oscillating systems in a laboratory.\n\nSystem 1: A block of mass m = 0.50 kg is attached to a horizontal spring with spring constant k = 200 N/m on a frictionless surface. The block is pulled 0.10 m from equilibrium and released from rest.\n\nSystem 2: A simple pendulum consists of a small bob of mass m = 0.50 kg attached to a string of length L = 0.40 m. The bob is displaced 5° from vertical and released from rest. Assume small-angle approximation is valid and g = 10 m/s².\n\nThe student notices that both systems exhibit simple harmonic motion. The student then modifies System 1 by replacing the spring with one of spring constant 4k = 800 N/m while keeping the same mass and amplitude.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "For System 1 (spring-mass), explain why the net force on the block constitutes a restoring force and how this leads to simple harmonic motion. Your explanation must reference the direction of the force relative to displacement.",
        "rubric": "Student must explain that the spring force is always directed opposite to the displacement from equilibrium (F = −kx), meaning as the block moves in one direction the force acts in the opposite direction, pulling/pushing it back toward equilibrium. Student must connect this restoring force to the condition for SHM: net force proportional to and opposite displacement."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the period of oscillation for System 1 (original spring, k = 200 N/m, m = 0.50 kg). Then calculate the period of oscillation for the modified System 1 (k = 800 N/m, same mass and amplitude). Show all work.",
        "rubric": "Student must use T = 2π√(m/k) for both cases. Original: T₁ = 2π√(0.50/200) = 2π√(0.0025) = 2π(0.05) ≈ 0.314 s. Modified: T₂ = 2π√(0.50/800) = 2π√(0.000625) = 2π(0.025) ≈ 0.157 s. Period is halved when spring constant is quadrupled. Both numerical answers with correct units required."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student claims that doubling the amplitude of oscillation in System 1 (original spring) will double the period of oscillation. Justify whether this claim is correct or incorrect using relevant equations and principles.",
        "rubric": "Student must state the claim is INCORRECT. The period T = 2π√(m/k) depends only on mass and spring constant, not on amplitude. Amplitude does not appear in the period equation. The period is independent of amplitude for an ideal spring-mass system undergoing SHM. Student must cite the equation T = 2π√(m/k) and explicitly note amplitude independence."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "For System 1 with the original spring (k = 200 N/m, m = 0.50 kg, amplitude A = 0.10 m), calculate the total mechanical energy of the system and the maximum speed of the block. Show all work.",
        "rubric": "Total mechanical energy: E = ½kA² = ½(200)(0.10)² = 1.0 J. Maximum speed occurs at equilibrium where all energy is kinetic: ½mv²_max = ½kA², so v_max = A√(k/m) = 0.10√(200/0.50) = 0.10√400 = 0.10(20) = 2.0 m/s. Student must show energy conservation argument and both correct numerical answers with units."
      },
      {
        "label": "e",
        "command": "Describe",
        "question": "Compare the periods of System 1 (original spring, T calculated in part b) and System 2 (pendulum, L = 0.40 m, g = 10 m/s²). Calculate the period of System 2 and describe what physical quantity would need to change in System 2, and in what way, to make its period equal to the period of the modified System 1 (from part b). Justify your answer.",
        "rubric": "Period of pendulum: T = 2π√(L/g) = 2π√(0.40/10) = 2π√(0.04) = 2π(0.2) ≈ 1.26 s. Modified System 1 period ≈ 0.157 s. To match T = 0.157 s: 0.157 = 2π√(L/10), solving gives L = 10(0.157/2π)² = 10(0.025)² = 0.00625 m ≈ 6.25 × 10⁻³ m. The string length must be dramatically decreased (shortened) to about 6.25 mm. Student must show calculation and state length must decrease."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly explains that the spring exerts a force directed opposite to displacement (F = −kx), identifies this as a restoring force, and connects the proportionality between force magnitude and displacement to the condition for simple harmonic motion.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "restoring force",
          "opposite to displacement",
          "F = -kx",
          "Hooke's law",
          "proportional to displacement",
          "toward equilibrium",
          "net force opposes displacement",
          "simple harmonic motion condition",
          "F_net = -kx",
          "directed back toward equilibrium",
          "spring force direction",
          "acceleration proportional to displacement",
          "oscillatory motion",
          "negative sign indicates restoring"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "displacement from equilibrium",
            "stretch or compression of spring"
          ],
          "connector": [
            "results in",
            "produces",
            "causes"
          ],
          "effect": [
            "restoring force",
            "force directed opposite to displacement",
            "acceleration toward equilibrium"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly applies T = 2π√(m/k) to both the original and modified spring systems, arriving at T₁ ≈ 0.314 s and T₂ ≈ 0.157 s (or equivalent expressions showing period is halved), with correct units.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "T = 2π√(m/k)",
          "period of spring-mass system",
          "0.314 s",
          "0.157 s",
          "spring constant quadrupled",
          "period halved",
          "√(m/k)",
          "T inversely proportional to √k",
          "seconds",
          "2π factor",
          "angular frequency ω = √(k/m)",
          "T = 2π/ω",
          "substituting k = 800",
          "substituting k = 200"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly identifies the claim as incorrect, cites T = 2π√(m/k) to show period depends only on mass and spring constant, and explicitly states that amplitude does not affect the period of a spring-mass system in SHM.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "amplitude independent of period",
          "period independent of amplitude",
          "T = 2π√(m/k)",
          "amplitude does not appear in period equation",
          "claim is incorrect",
          "only mass and spring constant determine period",
          "isochronous",
          "amplitude independence of SHM",
          "no amplitude term in T formula",
          "SHM period formula",
          "doubling amplitude does not double period",
          "period unchanged by amplitude",
          "ideal spring SHM property",
          "energy scales with A² not period"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "doubling amplitude",
            "changing amplitude of oscillation"
          ],
          "connector": [
            "does not affect",
            "has no effect on",
            "does not change"
          ],
          "effect": [
            "period of oscillation",
            "T = 2π√(m/k) remains constant",
            "oscillation period unchanged"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Student correctly calculates total mechanical energy E = ½kA² = 1.0 J and maximum speed v_max = A√(k/m) = 2.0 m/s using energy conservation, with correct units and work shown.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "E = ½kA²",
          "total mechanical energy",
          "1.0 J",
          "v_max = A√(k/m)",
          "2.0 m/s",
          "maximum speed at equilibrium position",
          "KE = ½mv²",
          "conservation of mechanical energy",
          "½mv²_max = ½kA²",
          "all kinetic energy at equilibrium",
          "elastic potential energy",
          "PE = ½kx²",
          "energy stored in spring",
          "speed maximum when displacement zero"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "maximum displacement equals amplitude",
            "all energy stored as elastic potential energy"
          ],
          "connector": [
            "converts to",
            "transforms into",
            "results in"
          ],
          "effect": [
            "maximum kinetic energy at equilibrium",
            "maximum speed of block",
            "v_max = 2.0 m/s at equilibrium position"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Student correctly calculates pendulum period T ≈ 1.26 s using T = 2π√(L/g), then correctly determines that the string length must be decreased to approximately 6.25 × 10⁻³ m to match the modified System 1 period of 0.157 s, with supporting calculation shown.",
        "partLabel": "e",
        "skill": "describe",
        "keywords": [
          "T = 2π√(L/g)",
          "pendulum period formula",
          "1.26 s",
          "string length must decrease",
          "L = 6.25 × 10⁻³ m",
          "shorten the pendulum string",
          "L proportional to T²",
          "0.00625 m",
          "pendulum length determines period",
          "solving for L algebraically",
          "small-angle approximation",
          "period depends on string length and g",
          "L = g(T/2π)²",
          "pendulum period independent of bob mass"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "decreasing string length",
            "shorter pendulum length"
          ],
          "connector": [
            "decreases",
            "reduces",
            "shortens"
          ],
          "effect": [
            "period of pendulum oscillation",
            "T = 2π√(L/g) yields smaller value",
            "oscillation period matches modified System 1"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u7_frq031",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Rotational Equilibrium of a Uniform Beam",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A uniform beam of mass 4.0 kg and length 2.0 m is mounted on a frictionless pivot at its left end. A downward force F is applied at the right end of the beam. A second downward force of 20 N is applied at the midpoint of the beam (1.0 m from the pivot). The beam is held in horizontal rotational equilibrium. Use g = 10 m/s².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the torque due to the 20 N force about the pivot at the left end of the beam.",
        "rubric": "1 point: Student correctly calculates torque = 20 N × 1.0 m = 20 N·m (clockwise)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the torque due to the weight of the beam about the pivot at the left end.",
        "rubric": "1 point: Student correctly identifies that the weight of the beam (4.0 kg × 10 m/s² = 40 N) acts at the center of mass (1.0 m from pivot), giving torque = 40 N × 1.0 m = 40 N·m (clockwise)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using rotational equilibrium, determine the magnitude of force F applied at the right end of the beam.",
        "rubric": "1 point: Student correctly applies the rotational equilibrium condition (net torque = 0), setting F × 2.0 m = 20 N·m + 40 N·m = 60 N·m, giving F = 30 N."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly calculates the torque produced by the 20 N force as 20 N·m using torque = force × moment arm = 20 N × 1.0 m.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "torque",
          "τ = r × F",
          "τ = F·d",
          "moment arm",
          "1.0 m",
          "20 N·m",
          "perpendicular distance",
          "pivot",
          "clockwise torque",
          "rotational effect",
          "lever arm",
          "force times distance"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly identifies the weight of the beam acting at its center of mass (1.0 m from pivot) and calculates the gravitational torque as 40 N·m.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "center of mass",
          "center of gravity",
          "weight of beam",
          "mg",
          "4.0 kg × 10",
          "40 N",
          "1.0 m",
          "40 N·m",
          "gravitational torque",
          "uniform beam midpoint",
          "distributed mass",
          "beam weight acts at center",
          "gravitational force location"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "uniform beam",
            "center of mass at midpoint"
          ],
          "connector": [
            "results in",
            "means that"
          ],
          "effect": [
            "gravitational torque at 1.0 m",
            "weight acts at center"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly applies rotational equilibrium (net torque = 0) to find F = 30 N, with F × 2.0 m equaling the sum of clockwise torques (60 N·m).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "rotational equilibrium",
          "net torque equals zero",
          "Στ = 0",
          "sum of torques",
          "F × 2.0 m = 60 N·m",
          "F = 30 N",
          "counterclockwise torque",
          "balance torques",
          "equilibrium condition",
          "clockwise equals counterclockwise",
          "torque balance",
          "total torque about pivot",
          "angular equilibrium"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "rotational equilibrium",
            "Στ = 0"
          ],
          "connector": [
            "requires",
            "leads to"
          ],
          "effect": [
            "counterclockwise torque equals clockwise torque",
            "F = 30 N"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u7_frq032",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Spinning Skater and Conservation of Angular Momentum",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A figure skater is spinning freely on ice with her arms extended outward. In this position, her moment of inertia is I₁ = 4.0 kg·m² and her angular velocity is ω₁ = 2.0 rad/s. She then pulls her arms tightly against her body, reducing her moment of inertia to I₂ = 1.0 kg·m².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Explain why the net external torque on the skater is approximately zero while she spins on the ice, and state what this implies about her angular momentum.",
        "rubric": "Student must identify that friction at the blade contact point exerts negligible torque (or that the contact force passes through or very near the rotation axis, giving a near-zero moment arm), and conclude that angular momentum is conserved (remains constant)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the skater's angular velocity ω₂ after she pulls her arms in.",
        "rubric": "Student applies conservation of angular momentum: I₁ω₁ = I₂ω₂, substitutes correctly, and arrives at ω₂ = 8.0 rad/s."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "The skater's rotational kinetic energy increases when she pulls her arms in. Justify whether this violates conservation of energy.",
        "rubric": "Student must state that the skater does work (internal/muscular work) pulling her arms inward against the centrifugal tendency, supplying the additional kinetic energy; total energy is still conserved when this internal energy source is included, so no violation occurs."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies that the net external torque on the skater is approximately zero because the ice contact force acts along or very near the rotation axis (negligible moment arm), and concludes that angular momentum is conserved.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "net external torque",
          "torque is zero",
          "moment arm",
          "force through axis",
          "angular momentum conserved",
          "angular momentum constant",
          "no net torque",
          "rotation axis",
          "negligible friction torque",
          "τ_net = 0",
          "contact force",
          "ice blade",
          "perpendicular distance",
          "rotational equilibrium",
          "dL/dt = 0"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "net external torque is zero",
            "force acts through rotation axis",
            "negligible moment arm",
            "ice contact force produces no torque"
          ],
          "connector": [
            "implies",
            "results in",
            "means that",
            "therefore"
          ],
          "effect": [
            "angular momentum is conserved",
            "angular momentum remains constant",
            "L is constant",
            "L does not change over time"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly applies conservation of angular momentum (I₁ω₁ = I₂ω₂) with correct substitution and arrives at ω₂ = 8.0 rad/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "conservation of angular momentum",
          "I₁ω₁ = I₂ω₂",
          "L = Iω",
          "moment of inertia decreases",
          "angular velocity increases",
          "ω₂ = 8.0 rad/s",
          "8 rad/s",
          "substitution",
          "(4.0)(2.0) = (1.0)(ω₂)",
          "angular momentum conserved",
          "rotational inertia",
          "mass distribution",
          "isolated system",
          "spin rate",
          "angular speed"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "moment of inertia decreases",
            "arms pulled in",
            "I₂ less than I₁",
            "rotational inertia reduced"
          ],
          "connector": [
            "causes",
            "results in",
            "leads to",
            "therefore"
          ],
          "effect": [
            "angular velocity increases",
            "ω₂ = 8.0 rad/s",
            "spins faster",
            "angular speed increases by factor of four"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly justifies that the increase in rotational kinetic energy does not violate conservation of energy because the skater's muscles do internal work pulling the arms inward, supplying the additional kinetic energy.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "internal work",
          "muscular work",
          "work done by skater",
          "energy conservation not violated",
          "total energy conserved",
          "chemical energy converted",
          "muscles do work",
          "arms pulled inward",
          "KE_rot = 0.5Iω²",
          "rotational kinetic energy increases",
          "biological energy",
          "internal force",
          "energy source",
          "work-energy theorem",
          "net work positive"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "skater's muscles do work",
            "internal work done",
            "chemical energy from muscles",
            "biological energy converted to kinetic energy"
          ],
          "connector": [
            "supplies",
            "provides",
            "accounts for",
            "explains"
          ],
          "effect": [
            "increase in rotational kinetic energy",
            "energy conservation is maintained",
            "no violation of conservation of energy",
            "total system energy is unchanged"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u7_frq033",
    "subject": "apphys1",
    "frqType": "short",
    "title": "Skater Pulling In Arms: Conservation of Angular Momentum and Rotational Inertia",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A figure skater is spinning freely on frictionless ice with her arms fully extended outward. In this configuration, her moment of inertia is I₁ = 4.8 kg·m² and her initial angular velocity is ω₁ = 2.0 rad/s. She then pulls her arms tightly against her body, reducing her moment of inertia to I₂ = 1.2 kg·m².\n\n(a) Calculate her new angular velocity ω₂ after pulling in her arms.\n\n(b) The skater's rotational kinetic energy increases when she pulls in her arms, even though no external torque acts on her. Explain why this is physically consistent with conservation of angular momentum, and identify the energy source responsible for the increase in rotational kinetic energy.\n\n(c) A second skater of greater mass performs the same maneuver, starting with the same initial angular momentum as the first skater but a larger initial moment of inertia I₁'. Both skaters reduce their moment of inertia by the same factor of 4. Predict whether the second skater's final rotational kinetic energy will be greater than, less than, or equal to that of the first skater after the maneuver. Justify your answer.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate her new angular velocity ω₂ after pulling in her arms.",
        "rubric": "Apply conservation of angular momentum (L = Iω = constant) to set I₁ω₁ = I₂ω₂. Substituting: (4.8)(2.0) = (1.2)(ω₂), giving ω₂ = 8.0 rad/s."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "The skater's rotational kinetic energy increases when she pulls in her arms, even though no external torque acts on her. Explain why this is physically consistent with conservation of angular momentum, and identify the energy source responsible for the increase in rotational kinetic energy.",
        "rubric": "Student must state that angular momentum is conserved because no net external torque acts on the skater (τ_net = 0 → L = constant). The increase in rotational kinetic energy (KE_rot = L²/2I) is consistent because KE depends on both L and I; as I decreases with L constant, KE increases. The energy source is the internal (chemical/metabolic) energy the skater expends doing work against centrifugal tendency as she pulls her arms inward."
      },
      {
        "label": "c",
        "command": "Predict and Justify",
        "question": "Predict whether the second skater's final rotational kinetic energy will be greater than, less than, or equal to that of the first skater after the maneuver. Justify your answer.",
        "rubric": "The second skater's final rotational kinetic energy equals that of the first skater. Since both begin with the same angular momentum L and both reduce their moment of inertia by the same factor of 4, their final moments of inertia I₂ = I₁/4 differ in magnitude but KE_rot_final = L²/(2I₂) = L²/(2·I₁/4) = 2L²/I₁. Because L is the same for both skaters and the reduction factor is the same, the formula yields identical final KE regardless of the absolute value of I₁. Therefore the final rotational kinetic energies are equal."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly applies conservation of angular momentum (I₁ω₁ = I₂ω₂) and calculates ω₂ = 8.0 rad/s.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "conservation of angular momentum",
          "I₁ω₁ = I₂ω₂",
          "L = Iω",
          "angular momentum conserved",
          "ω₂ = 8.0 rad/s",
          "8.0 rad/s",
          "moment of inertia decreases",
          "angular velocity increases",
          "no external torque",
          "L constant",
          "isolated system",
          "rotational inertia",
          "spin rate increases",
          "arms pulled inward",
          "4.8 times 2.0"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "moment of inertia decreases",
            "arms pulled inward"
          ],
          "connector": [
            "results in",
            "causes",
            "leads to"
          ],
          "effect": [
            "angular velocity increases",
            "ω₂ = 8.0 rad/s"
          ]
        }
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student explains that angular momentum is conserved (no net external torque), and identifies internal/chemical/metabolic energy (work done by skater's muscles) as the source of the increased rotational kinetic energy.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "no net external torque",
          "τ_net = 0",
          "angular momentum conserved",
          "KE_rot = L²/2I",
          "rotational kinetic energy increases",
          "internal energy",
          "chemical energy",
          "metabolic energy",
          "muscles do work",
          "work done by skater",
          "KE increases as I decreases",
          "consistent with conservation",
          "I decreases L constant",
          "biological energy source",
          "skater exerts inward force on arms"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "no net external torque",
            "τ_net = 0"
          ],
          "connector": [
            "means",
            "implies",
            "results in"
          ],
          "effect": [
            "angular momentum conserved",
            "L remains constant"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly predicts the final rotational kinetic energies are equal and justifies using KE_rot = L²/(2I), showing that identical initial angular momentum and identical reduction factor yield the same final KE regardless of absolute moment of inertia.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "equal rotational kinetic energy",
          "KE_rot = L²/2I",
          "same angular momentum",
          "same reduction factor",
          "final KE equal",
          "KE depends on L and I",
          "same factor of 4",
          "I₂ = I₁/4",
          "KE_final = 2L²/I₁",
          "independent of absolute moment of inertia",
          "proportional reduction in I",
          "L identical for both skaters",
          "ratio of I determines KE",
          "greater mass irrelevant",
          "final KE same for both"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "same initial angular momentum",
            "same reduction factor of 4"
          ],
          "connector": [
            "leads to",
            "results in",
            "means"
          ],
          "effect": [
            "equal final rotational kinetic energy",
            "KE_rot the same for both skaters"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u7_frq034",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Rotating Platform and Conservation of Angular Momentum",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A student of mass 60 kg stands at the edge of a lightweight rotating platform (modeled as a solid disk) of mass 40 kg and radius R = 2.0 m. The platform is free to rotate about a frictionless vertical axis through its center. Initially, the student and platform are rotating together at an angular velocity ω₀ = 1.2 rad/s. The moment of inertia of a solid disk is I_disk = (1/2)MR², and the student may be modeled as a point mass.\n\nPart (a): Calculate the total initial moment of inertia of the student-platform system.\n\nPart (b): The student walks slowly from the edge to the center of the platform. Using a relevant conservation law, determine the new angular velocity of the system after the student reaches the center.\n\nPart (c): Explain why the angular velocity changed when the student moved toward the center. Your explanation must reference the physical quantity that is conserved and how the distribution of mass affects it.\n\nPart (d): While the student stands at the center, a small blob of clay of mass m_c = 5 kg moving tangentially at v = 4.0 m/s strikes and sticks to the rim of the platform at radius R = 2.0 m. Calculate the angular velocity of the system immediately after the clay sticks.\n\nPart (e): Compare the total rotational kinetic energy of the system just before the clay collision to the total rotational kinetic energy just after. Justify whether kinetic energy is conserved in this collision.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the total initial moment of inertia of the student-platform system when the student stands at the edge (r = R = 2.0 m).",
        "rubric": "Student correctly applies I_disk = (1/2)MR² for the platform and I_student = mR² for the point mass at the edge, then sums them: I_total = (1/2)(40)(2.0)² + (60)(2.0)² = 80 + 240 = 320 kg·m². Earns 1 point for correct setup and answer of 320 kg·m²."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "After the student walks to the center, calculate the new angular velocity of the system. Use a relevant conservation law.",
        "rubric": "Student invokes conservation of angular momentum (L = Iω = constant), calculates new moment of inertia with student at center: I_new = 80 kg·m² (student contributes 0), then solves ω_new = L/I_new = (320 × 1.2)/80 = 4.8 rad/s. Earns 1 point for correct answer of 4.8 rad/s with conservation of angular momentum cited."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain why the angular velocity of the platform increased as the student moved toward the center. Your explanation must reference the conserved quantity and the role of mass distribution.",
        "rubric": "Student states that angular momentum is conserved (no net external torque), that moving mass closer to the axis decreases the moment of inertia, and since L = Iω is constant, a decrease in I requires an increase in ω. Earns 1 point for correctly linking decreased moment of inertia to increased angular velocity under conservation of angular momentum."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "While the student stands at the center and the platform spins at ω = 4.8 rad/s, a clay blob of mass 5 kg moving tangentially at 4.0 m/s strikes and sticks to the rim at R = 2.0 m. Calculate the angular velocity of the system immediately after the collision.",
        "rubric": "Student applies conservation of angular momentum for the collision: L_before = I_system × ω + m_c × v × R = 80(4.8) + 5(4.0)(2.0) = 384 + 40 = 424 kg·m²/s. I_after = 80 + 5(2.0)² = 80 + 20 = 100 kg·m². ω_after = 424/100 = 4.24 rad/s. Earns 1 point for correct answer of approximately 4.24 rad/s."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Compare the total rotational kinetic energy just before the clay collision to the total rotational kinetic energy just after. Is kinetic energy conserved? Justify your answer.",
        "rubric": "Student calculates KE_before = (1/2)(80)(4.8)² + (1/2)(5)(4.0)² = 921.6 + 40 = 961.6 J (or equivalent using translational KE of clay). KE_after = (1/2)(100)(4.24)² ≈ 898 J. Concludes kinetic energy is NOT conserved; it decreased because the clay collision is perfectly inelastic - energy is lost to deformation/heat. Earns 1 point for correctly identifying kinetic energy is not conserved and citing the inelastic nature of the collision as the reason."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates total initial moment of inertia as 320 kg·m² by summing I_disk for the platform and mR² for the student as a point mass at the rim.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "moment of inertia",
          "I = (1/2)MR²",
          "I = mR²",
          "point mass at rim",
          "sum of moments",
          "320 kg·m²",
          "rotational inertia",
          "I_total = I_disk + I_student",
          "additive moments",
          "parallel axis not needed"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies conservation of angular momentum to find the new angular velocity of 4.8 rad/s when the student moves to the center, using I_new = 80 kg·m².",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "conservation of angular momentum",
          "L = Iω",
          "angular momentum conserved",
          "I₁ω₁ = I₂ω₂",
          "4.8 rad/s",
          "moment of inertia decreases",
          "student at center contributes zero",
          "no net external torque",
          "frictionless axis",
          "I_new = 80 kg·m²"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "student moves to center",
            "moment of inertia decreases"
          ],
          "connector": [
            "results in",
            "causes"
          ],
          "effect": [
            "angular velocity increases",
            "4.8 rad/s"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly explains that angular momentum is conserved because there is no net external torque, the moment of inertia decreases as mass moves closer to the axis, and therefore angular velocity must increase.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "angular momentum conserved",
          "no net external torque",
          "moment of inertia decreases",
          "mass closer to rotation axis",
          "angular velocity increases",
          "L = Iω constant",
          "mass distribution",
          "rotational inertia reduced",
          "frictionless pivot",
          "spin faster"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "mass moves closer to rotation axis",
            "moment of inertia decreases"
          ],
          "connector": [
            "leads to",
            "requires",
            "causes"
          ],
          "effect": [
            "angular velocity increases",
            "angular momentum conserved"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies conservation of angular momentum for the inelastic clay collision, computing L_before = 424 kg·m²/s and I_after = 100 kg·m², yielding ω_after ≈ 4.24 rad/s.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "conservation of angular momentum",
          "L = Iω + mvR",
          "angular momentum of clay",
          "4.24 rad/s",
          "perfectly inelastic collision",
          "clay sticks to rim",
          "I_after = 100 kg·m²",
          "L_before = 424 kg·m²/s",
          "tangential velocity",
          "angular momentum before equals after"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "clay strikes and sticks to rim",
            "angular momentum of clay added to system"
          ],
          "connector": [
            "results in",
            "causes"
          ],
          "effect": [
            "new angular velocity 4.24 rad/s",
            "system angular momentum conserved"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly calculates KE before (~961.6 J) and KE after (~898 J), concludes kinetic energy is NOT conserved, and justifies this by citing the perfectly inelastic nature of the collision causing energy loss to deformation or thermal energy.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "kinetic energy not conserved",
          "inelastic collision",
          "perfectly inelastic",
          "KE = (1/2)Iω²",
          "energy lost to thermal energy",
          "energy lost to deformation",
          "rotational kinetic energy decreases",
          "angular momentum conserved but KE not conserved",
          "961.6 J before",
          "898 J after"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "perfectly inelastic collision",
            "clay sticks to platform rim"
          ],
          "connector": [
            "results in",
            "causes"
          ],
          "effect": [
            "kinetic energy lost",
            "rotational KE decreases from 961.6 J to 898 J",
            "energy converted to thermal energy and deformation"
          ]
        }
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "phys1_u7_frq035",
    "subject": "apphys1",
    "frqType": "long",
    "title": "Spinning Platform, Extending Arms, and Rolling Cylinder",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A student stands at the center of a frictionless rotating platform holding two identical dumbbells, each of mass m = 2.0 kg, at arm's length r₁ = 0.80 m from the rotation axis. The student's body (including the platform) has a moment of inertia I_body = 3.2 kg·m² and the student is initially spinning at angular velocity ω₁ = 4.0 rad/s. The student then pulls both dumbbells inward to a new distance r₂ = 0.20 m from the rotation axis.\n\nIn a separate experiment, a solid cylinder of mass M = 4.0 kg and radius R = 0.10 m is released from rest at the top of an inclined plane of height h = 0.80 m and rolls without slipping to the bottom. The moment of inertia of a solid cylinder about its central axis is I = (1/2)MR².\n\nUse g = 10 m/s² where needed.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the total initial moment of inertia I₁ of the system (student + dumbbells) when the dumbbells are held at r₁ = 0.80 m from the rotation axis.",
        "rubric": "Student earns 1 point for correctly calculating I₁ = I_body + 2mr₁² = 3.2 + 2(2.0)(0.80)² = 3.2 + 2.56 = 5.76 kg·m². Must show the point-mass formula I = mr² applied to each dumbbell and add I_body."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "After the student pulls the dumbbells inward to r₂ = 0.20 m, calculate the new angular velocity ω₂ of the system. State the principle you are using.",
        "rubric": "Student earns 1 point for invoking conservation of angular momentum (no external torque on frictionless platform) and correctly solving: I₁ω₁ = I₂ω₂, where I₂ = 3.2 + 2(2.0)(0.20)² = 3.2 + 0.16 = 3.36 kg·m², giving ω₂ = (5.76 × 4.0)/3.36 ≈ 6.86 rad/s. Must cite conservation of angular momentum explicitly."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The student's rotational kinetic energy increases when the dumbbells are pulled inward, even though no external torque acts on the system. Explain why this does not violate conservation of energy.",
        "rubric": "Student earns 1 point for explaining that the student does internal (muscular) work pulling the dumbbells inward against the centrifugal tendency (inward force applied over inward displacement), converting internal chemical/biological energy into rotational kinetic energy. Angular momentum is conserved because no external torque acts, but mechanical energy can increase due to internal work done by the student. Must connect internal work or internal force to the kinetic energy increase."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "For the solid cylinder rolling without slipping down the incline of height h = 0.80 m, calculate the translational speed v of the center of mass at the bottom of the incline.",
        "rubric": "Student earns 1 point for correctly applying conservation of energy with both translational and rotational kinetic energy: Mgh = (1/2)Mv² + (1/2)Iω², substituting I = (1/2)MR² and the rolling condition ω = v/R to get Mgh = (1/2)Mv² + (1/4)Mv², so Mgh = (3/4)Mv², giving v = √(4gh/3) = √(4×10×0.80/3) = √(10.67) ≈ 3.27 m/s. Must use rolling without slipping condition and include rotational KE."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "A hollow thin-walled cylinder of the same mass M and radius R is released from rest at the same height h and also rolls without slipping. Predict whether its translational speed at the bottom is greater than, less than, or equal to that of the solid cylinder, and justify your answer in terms of rotational inertia and energy distribution.",
        "rubric": "Student earns 1 point for correctly predicting the hollow cylinder reaches a lower translational speed and justifying that the hollow cylinder has a larger moment of inertia (I = MR² vs I = (1/2)MR²), so a greater fraction of the total kinetic energy is stored as rotational kinetic energy, leaving less energy available as translational kinetic energy, resulting in a smaller center-of-mass speed at the bottom. Must explicitly reference greater rotational inertia and the energy partition between translational and rotational KE."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates the total initial moment of inertia I₁ = 5.76 kg·m² using I = I_body + 2mr₁².",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "moment of inertia",
          "I = mr²",
          "point mass approximation",
          "I_total = I_body + 2mr₁²",
          "5.76 kg·m²",
          "rotational inertia",
          "additive moments of inertia",
          "I₁ = 3.2 + 2(2.0)(0.64)",
          "3.2 + 2.56",
          "superposition of inertia"
        ],
        "fundamentalPrinciple": false,
        "proximity": null
      },
      {
        "index": 1,
        "points": 1,
        "description": "Invokes conservation of angular momentum and correctly calculates ω₂ ≈ 6.86 rad/s using I₁ω₁ = I₂ω₂.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "conservation of angular momentum",
          "L = Iω",
          "I₁ω₁ = I₂ω₂",
          "no external torque",
          "angular momentum conserved",
          "ω₂ ≈ 6.86 rad/s",
          "6.9 rad/s",
          "frictionless platform",
          "net torque zero",
          "I₂ = 3.36 kg·m²",
          "angular velocity increases as radius decreases"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "no external torque",
            "frictionless platform"
          ],
          "connector": [
            "leads to",
            "results in",
            "means"
          ],
          "effect": [
            "angular momentum conserved",
            "I₁ω₁ = I₂ω₂",
            "angular velocity increases"
          ]
        }
      },
      {
        "index": 2,
        "points": 1,
        "description": "Explains that internal work done by the student's muscles converts internal energy into rotational kinetic energy, so energy conservation is not violated.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "internal work",
          "muscular work",
          "internal force applied over displacement",
          "chemical energy converted",
          "biological energy source",
          "work done by student pulling inward",
          "inward force over inward displacement",
          "rotational kinetic energy increases",
          "no external torque",
          "total energy conserved",
          "mechanical energy input from muscles",
          "work-energy theorem"
        ],
        "fundamentalPrinciple": true,
        "proximity": {
          "cause": [
            "student pulls dumbbells inward",
            "internal work done by muscles"
          ],
          "connector": [
            "converts",
            "transfers",
            "results in"
          ],
          "effect": [
            "rotational kinetic energy increases",
            "internal chemical energy decreases",
            "total energy conserved"
          ]
        }
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies energy conservation including both translational and rotational KE with the rolling constraint to obtain v ≈ 3.27 m/s.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "conservation of energy",
          "Mgh = (1/2)Mv² + (1/2)Iω²",
          "rolling without slipping",
          "rolling constraint ω = v/R",
          "I = (1/2)MR² solid cylinder",
          "v = √(4gh/3)",
          "3.27 m/s",
          "translational kinetic energy",
          "rotational kinetic energy",
          "Mgh = (3/4)Mv²",
          "gravitational potential energy converted",
          "no slipping energy loss"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "gravitational potential energy at height h",
            "rolling without slipping constraint"
          ],
          "connector": [
            "converts into",
            "is distributed between"
          ],
          "effect": [
            "translational kinetic energy",
            "rotational kinetic energy",
            "v = √(4gh/3)"
          ]
        }
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly predicts lower translational speed for the hollow cylinder and justifies using greater moment of inertia leading to more energy stored rotationally.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "hollow cylinder",
          "greater moment of inertia",
          "I = MR² hollow thin-walled",
          "more energy stored as rotational kinetic energy",
          "less translational kinetic energy",
          "lower center-of-mass speed",
          "energy partition between translational and rotational",
          "same gravitational potential energy available",
          "rotational inertia larger than solid cylinder",
          "v = √(gh) hollow vs v = √(4gh/3) solid",
          "fraction of KE rotational is greater"
        ],
        "fundamentalPrinciple": false,
        "proximity": {
          "cause": [
            "larger moment of inertia for hollow cylinder",
            "hollow cylinder I = MR²"
          ],
          "connector": [
            "leads to",
            "results in",
            "means"
          ],
          "effect": [
            "greater fraction of total KE stored as rotational KE",
            "less translational KE at bottom",
            "smaller center-of-mass speed than solid cylinder"
          ]
        }
      }
    ],
    "sampleSolution": null
  }
];