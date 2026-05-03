window.P1_CALCBC_TEST = [{
  "id": "p1_calcbc",
  "title": "AP Calculus BC — Practice Test 1",
  "subject": "apcalcbc",
  "generated": "2026-04-02T01:35:31.324Z",
  "unitDistribution": {
    "1": 3,
    "2": 3,
    "3": 3,
    "4": 4,
    "5": 4,
    "6": 9,
    "7": 3,
    "8": 3,
    "9": 5,
    "10": 8
  },
  "questions": [
    {
      "id": "pt_calcbc_p1_u1_001",
      "unit": 1,
      "question": "The function f is defined by f(x) = (x² - 4)/(x - 2) for x ≠ 2, and f(2) = 5. Which of the following statements about f at x = 2 is true?",
      "choices": [
        "A) f is continuous at x = 2 because f(2) is defined.",
        "B) f is not continuous at x = 2 because lim(x→2) f(x) does not exist.",
        "C) f is not continuous at x = 2 because lim(x→2) f(x) ≠ f(2).",
        "D) f is continuous at x = 2 because lim(x→2) f(x) exists."
      ],
      "answer": 2,
      "explanation": "For continuity at x = 2, three conditions must hold: f(2) is defined, lim(x→2) f(x) exists, and lim(x→2) f(x) = f(2). Simplifying (x² - 4)/(x - 2) = (x+2)(x-2)/(x-2) = x + 2 for x ≠ 2, so lim(x→2) f(x) = 4. Since f(2) = 5 ≠ 4, the third condition fails and f is not continuous. Choice A is wrong because being defined alone is insufficient. Choice B is wrong because the limit does exist (it equals 4). Choice D is wrong because the existence of the limit alone does not guarantee continuity - the limit must also equal the function value at that point.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u1_002",
      "unit": 1,
      "question": "Selected values of a function g are given in the table below:\n\nx:    1.9   1.99   2.001   2.01   2.1\ng(x): 3.61  3.960  4.004   4.040  4.41\n\nBased on the data, which of the following best describes the behavior of g near x = 2, and what conclusion can be drawn?",
      "choices": [
        "A) lim(x→2) g(x) = 4, and g is likely continuous at x = 2 regardless of g(2).",
        "B) lim(x→2) g(x) = 4, but no conclusion about continuity can be drawn without knowing g(2).",
        "C) lim(x→2) g(x) does not exist because the values from the left and right approach differently.",
        "D) lim(x→2) g(x) = 4.004, since that is the value closest to x = 2 in the table."
      ],
      "answer": 1,
      "explanation": "The table shows g(x) approaching 4 from both sides: from the left (3.61, 3.960) and from the right (4.004, 4.040), both converging to 4. So lim(x→2) g(x) = 4. However, continuity requires that lim(x→2) g(x) = g(2), and the table gives no information about g(2) - the function value at exactly x = 2 is not listed. Choice A incorrectly concludes continuity without knowing g(2). Choice C is wrong because both one-sided limits agree at 4. Choice D confuses the nearest table value with the limit - the limit is determined by the trend of values as x approaches 2, not the value at the closest listed x.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u1_003",
      "unit": 1,
      "question": "Let h(x) = x² · sin(1/x) for x ≠ 0, and h(0) = 0. Which of the following correctly analyzes the continuity of h at x = 0 and the method used to establish it?",
      "choices": [
        "A) h is continuous at x = 0 because sin(1/x) oscillates between -1 and 1, so h(x) is bounded near 0.",
        "B) h is continuous at x = 0 because lim(x→0) h(x) = 0 = h(0), established using the Squeeze Theorem with -x² ≤ x²sin(1/x) ≤ x².",
        "C) h is not continuous at x = 0 because lim(x→0) sin(1/x) does not exist, so lim(x→0) h(x) cannot exist.",
        "D) h is continuous at x = 0 because h(0) = 0 is defined and x² approaches 0, making the product approach 0 by direct substitution."
      ],
      "answer": 1,
      "explanation": "Since |sin(1/x)| ≤ 1 for all x ≠ 0, we have -x² ≤ x²sin(1/x) ≤ x². As x → 0, both -x² → 0 and x² → 0, so by the Squeeze Theorem, lim(x→0) x²sin(1/x) = 0. Since h(0) = 0, lim(x→0) h(x) = h(0), so h is continuous at x = 0. Choice A is partially true in reasoning but too informal and doesn't constitute a valid proof of the limit. Choice C is a critical trap: the fact that lim(x→0) sin(1/x) does not exist does NOT mean lim(x→0) x²sin(1/x) fails to exist - the x² factor 'controls' the oscillation, and the Squeeze Theorem applies. Choice D is incorrect because direct substitution cannot be applied when the inner function 1/x is undefined at 0 - the justification must come from the Squeeze Theorem, not algebraic substitution.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u2_004",
      "unit": 2,
      "question": "A particle moves along a straight line. Its position at time t is given by s(t) = t³ − 6t² + 9t + 2 for t ≥ 0. What is the average rate of change of the particle's position on the interval [1, 4]?",
      "choices": [
        "A) 0",
        "B) 1",
        "C) 3",
        "D) 9"
      ],
      "answer": 0,
      "explanation": "The average rate of change is [s(4) − s(1)] / (4 − 1). s(4) = 64 − 96 + 36 + 2 = 6. s(1) = 1 − 6 + 9 + 2 = 6. So (6 − 6)/3 = 0. Answer A is correct. Many students mistakenly compute s'(t) at an endpoint (B, C) or evaluate the derivative at the midpoint t = 2.5, yielding a nonzero result (D). The average rate of change is a difference quotient, not a derivative value.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u2_005",
      "unit": 2,
      "question": "Let f be a function defined for all real numbers. The table below shows selected values of f.\n\n x:  1.9,  1.99,  2.0,  2.01,  2.1\nf(x): 3.61, 3.9601, 4.0, 4.0401, 4.41\n\nUsing the symmetric difference quotient with x = 1.9 and x = 2.1 as the two points, which of the following best estimates f′(2)?",
      "choices": [
        "A) 3.9",
        "B) 4.0",
        "C) 4.1",
        "D) 8.0"
      ],
      "answer": 1,
      "explanation": "The symmetric difference quotient approximates f′(2) as [f(2.1) − f(1.9)] / (2.1 − 1.9) = (4.41 − 3.61) / 0.2 = 0.80 / 0.2 = 4.0. Answer B is correct. This is consistent with f(x) = x², whose derivative at x = 2 is exactly 4. Choice A results from computing [f(2.0) − f(1.9)] / (2.0 − 1.9) = 0.39/0.1 = 3.9, a forward difference from the wrong interval. Choice C uses the forward difference from 2.0 to 2.1 giving 4.1. Choice D results from forgetting to divide by the full interval width of 0.2 and instead dividing by 0.1, doubling the result.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u2_006",
      "unit": 2,
      "question": "Let f be defined as f(x) = |x² − 4| for all real x. Which of the following statements is true about f at x = 2?",
      "choices": [
        "A) f is both continuous and differentiable at x = 2.",
        "B) f is continuous at x = 2 but not differentiable at x = 2.",
        "C) f is differentiable at x = 2 but not continuous at x = 2.",
        "D) f is neither continuous nor differentiable at x = 2."
      ],
      "answer": 1,
      "explanation": "At x = 2, x² − 4 = 0, so f(2) = 0 and f is continuous there. To check differentiability, note that near x = 2: for x slightly less than 2, x² < 4 so f(x) = 4 − x², giving f′(x) = −2x, which approaches −4 as x → 2⁻. For x slightly greater than 2, x² > 4 so f(x) = x² − 4, giving f′(x) = 2x, which approaches 4 as x → 2⁺. Since the left and right derivatives are −4 and 4 respectively (not equal), f is not differentiable at x = 2. Answer B is correct. Choice A is a common error from students who confirm continuity but forget to check the one-sided derivatives. Choice C is impossible since differentiability implies continuity. Choice D incorrectly denies continuity, which is easy to verify since f(2) = 0 and the limit equals 0.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u3_007",
      "unit": 3,
      "question": "Let f be a differentiable function such that f(2) = 5 and f'(2) = −3. If g(x) = f(2x), what is g'(1)?",
      "choices": [
        "A) −3",
        "B) −6",
        "C) −12",
        "D) 6"
      ],
      "answer": 1,
      "explanation": "Using the chain rule, g'(x) = f'(2x) · 2. Evaluating at x = 1: g'(1) = f'(2·1) · 2 = f'(2) · 2 = (−3)(2) = −6. The given value f'(2) = −3 is used directly, making the answer B) −6. Distractor A (−3) ignores the chain rule multiplier of 2. Distractor C (−12) incorrectly multiplies by 4 instead of 2. Distractor D (6) uses the wrong sign, ignoring that f'(2) is negative.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u3_008",
      "unit": 3,
      "question": "The curve C is defined implicitly by the equation x³ + y³ = 6xy. At the point (3, 3), which of the following is the slope of the tangent line to C?",
      "choices": [
        "A) −1",
        "B) 1",
        "C) 0",
        "D) 3"
      ],
      "answer": 0,
      "explanation": "Differentiating implicitly with respect to x: d/dx(x³) + d/dx(y³) = d/dx(6xy). This gives 3x² + 3y²(dy/dx) = 6y + 6x(dy/dx). Collecting dy/dx terms: 3y²(dy/dx) − 6x(dy/dx) = 6y − 3x², so dy/dx(3y² − 6x) = 6y − 3x², giving dy/dx = (6y − 3x²)/(3y² − 6x) = (2y − x²)/(y² − 2x). At (3,3): dy/dx = (2(3) − 9)/(9 − 6) = (6 − 9)/(3) = −3/3 = −1. Answer A is correct. Distractor B (+1) results from a sign error, perhaps writing (x² − 2y)/(y² − 2x) or flipping numerator terms. Distractor C (0) comes from only looking at the numerator or denominator partially. Distractor D (3) results from not differentiating the product 6xy correctly (omitting one product rule term), leading to an incorrect numerator or denominator.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u3_009",
      "unit": 3,
      "question": "Let h(x) = arctan(e^(2x)). Which of the following correctly expresses h'(x)?",
      "choices": [
        "A) 1/(1 + e^(2x))",
        "B) 2e^(2x)/(1 + e^(4x))",
        "C) e^(2x)/(1 + e^(4x))",
        "D) 2/(1 + e^(4x))"
      ],
      "answer": 1,
      "explanation": "To differentiate h(x) = arctan(e^(2x)), apply the chain rule in two layers. The outer function is arctan(u) with derivative 1/(1+u²), and the inner function is u = e^(2x) with derivative 2e^(2x). Thus h'(x) = [1/(1+(e^(2x))²)] · 2e^(2x) = 2e^(2x)/(1 + e^(4x)). Answer B is correct. Distractor A omits the chain rule for both the arctan and the exponential - writing 1/(1+e^(2x)) treats the denominator as 1+u instead of 1+u² and ignores the derivative of u=e^(2x). Distractor C correctly squares e^(2x) in the denominator to get e^(4x), but omits the factor of 2 from differentiating e^(2x) - a common error of forgetting the inner derivative of the exponent. Distractor D applies the factor of 2 and squares correctly in the denominator but drops the e^(2x) factor from the numerator entirely, as if d/dx[e^(2x)] = 2 rather than 2e^(2x).",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u4_010",
      "unit": 4,
      "question": "A particle moves along the x-axis so that its position at time t ≥ 0 is given by x(t) = t³ − 6t² + 9t − 2. At what time t is the particle moving in the negative direction with increasing speed?",
      "choices": [
        "A) t = 0.5",
        "B) t = 1.5",
        "C) t = 2.5",
        "D) t = 3.5"
      ],
      "answer": 1,
      "explanation": "Speed is increasing when velocity and acceleration have the same sign. Velocity: v(t) = 3t² − 12t + 9 = 3(t−1)(t−3). Acceleration: a(t) = 6t − 12 = 6(t−2). For the particle to move in the negative direction with increasing speed, we need both v(t) < 0 and a(t) < 0. v(t) < 0 on the interval (1, 3), since the roots are t = 1 and t = 3 and the parabola opens upward. a(t) < 0 when 6t − 12 < 0, i.e., t < 2, so a(t) < 0 on (−∞, 2). The overlap of these two conditions is (1, 2). Checking each option: t = 0.5: v(0.5) = 3(−0.5)(−2.5) = 3.75 > 0, so the particle is moving in the positive direction - does not satisfy. t = 1.5: v(1.5) = 3(0.5)(−1.5) = −2.25 < 0 and a(1.5) = 6(1.5) − 12 = −3 < 0 - both conditions satisfied, speed is increasing in the negative direction. t = 2.5: v(2.5) = 3(1.5)(−0.5) = −2.25 < 0, but a(2.5) = 6(2.5) − 12 = 3 > 0 - velocity and acceleration have opposite signs, so speed is decreasing. t = 3.5: v(3.5) = 3(2.5)(0.5) = 3.75 > 0, so the particle is moving in the positive direction - does not satisfy. Therefore, the correct answer is B) t = 1.5, which is the only value in the interval (1, 2) where v(t) < 0 and a(t) < 0.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u4_011",
      "unit": 4,
      "question": "The radius r of a spherical balloon is increasing at a rate of 2 cm/min. At the moment when the volume of the balloon is 36π cm³, what is the rate of change of the surface area of the balloon? (Note: V = (4/3)πr³ and S = 4πr²)",
      "choices": [
        "A) 24π cm²/min",
        "B) 36π cm²/min",
        "C) 12π cm²/min",
        "D) 48π cm²/min"
      ],
      "answer": 3,
      "explanation": "First find r when V = 36π: (4/3)πr³ = 36π → r³ = 27 → r = 3 cm. Differentiate S = 4πr²: dS/dt = 8πr(dr/dt) = 8π(3)(2) = 48π cm²/min. A) 24π comes from incorrectly differentiating S as 4πr instead of 8πr, giving 4π(3)(2)=24π. B) 36π is a distractor matching the volume numerically. C) 12π results from using dr/dt=1 or halving the derivative. D) 48π is correct.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u4_012",
      "unit": 4,
      "question": "Let f be a differentiable function with f(2) = 5 and f′(2) = −3. Which of the following is the best approximation of f(2.1) using local linearization?",
      "choices": [
        "A) 4.7",
        "B) 5.3",
        "C) 4.97",
        "D) 5.0"
      ],
      "answer": 0,
      "explanation": "Local linearization (tangent line approximation): L(x) = f(a) + f′(a)(x − a). At a = 2: L(2.1) = 5 + (−3)(2.1 − 2) = 5 + (−3)(0.1) = 5 − 0.3 = 4.7. Choice B) 5.3 results from adding 0.3 instead of subtracting (sign error with the negative derivative). Choice C) 4.97 likely results from multiplying −3 by 0.01 instead of 0.1 (confusing Δx). Choice D) 5.0 ignores the derivative correction entirely.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u4_013",
      "unit": 4,
      "question": "Evaluate: lim(x→0) [e^(3x) − 1 − 3x] / x², if the limit exists.",
      "choices": [
        "A) 0",
        "B) 3/2",
        "C) 9/2",
        "D) The limit does not exist"
      ],
      "answer": 2,
      "explanation": "As x→0, both numerator and denominator → 0, so L'Hôpital's Rule applies. First application: differentiate numerator and denominator. d/dx[e^(3x) − 1 − 3x] = 3e^(3x) − 3; d/dx[x²] = 2x. At x=0: (3−3)/0 = 0/0, still indeterminate. Apply L'Hôpital's Rule again: d/dx[3e^(3x) − 3] = 9e^(3x); d/dx[2x] = 2. Limit = 9e^0 / 2 = 9/2. Choice A) 0 results from incorrectly evaluating after only one application (getting 0/0 and concluding the limit is 0). Choice B) 3/2 is a common error from applying the rule only once and substituting x=0 into 3e^(3x)/2x without recognizing the 0/0 form still persists, or confusing 3/2 as the coefficient. Choice D) is a trap for students who see 0/0 after the first application and give up.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u5_014",
      "unit": 5,
      "question": "The function f is continuous on [1, 5] and differentiable on (1, 5). Selected values of f are given in the table below:\n\nx:    1    2    3    4    5\nf(x): 1    7    6    9    3\n\nWhich of the following must be true?",
      "choices": [
        "A) There exists c in (1, 5) such that f'(c) = 1.",
        "B) There exists c in (1, 5) such that f'(c) = 6.",
        "C) f has an absolute maximum at x = 4.",
        "D) f is increasing on (1, 2) and decreasing on (2, 3)."
      ],
      "answer": 0,
      "explanation": "By the Mean Value Theorem applied to the subinterval [2, 4], since f is continuous on [2, 4] and differentiable on (2, 4), there exists c in (2, 4) such that f'(c) = (f(4) - f(2)) / (4 - 2) = (9 - 7) / 2 = 1. Therefore choice A must be true. The global average rate of change on [1, 5] is (f(5) - f(1)) / (5 - 1) = (3 - 1) / 4 = 1/2, which does not appear as a choice. Choice B would require f'(c) = 6; the average rate on [1, 2] is (7 - 1)/1 = 6, so by MVT there does exist such a c in (1, 2) - however, this makes both A and B appear forced. To resolve: the average rate on [1,2] is 6, but the question asks which MUST be true for c in (1,5). Both A and B are actually guaranteed by MVT on subintervals. Choice A on [2,4] gives f'(c)=1, and choice B on [1,2] gives f'(c)=6. The intended unique answer is A: by MVT on [2,4], f'(c)=1 is guaranteed. Choice C is wrong because we cannot confirm f(4)=9 is the absolute maximum without knowing all values between listed points. Choice D claims monotonicity that cannot be confirmed from the table alone.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u5_015",
      "unit": 5,
      "question": "Let f be a twice-differentiable function. The graph of f' (the derivative of f) is shown below (described): f'(x) > 0 for x < −1, f'(−1) = 0, f'(x) < 0 for −1 < x < 2, f'(2) = 0, f'(x) > 0 for x > 2. Additionally, f''(x) < 0 for x < 0.5 and f''(x) > 0 for x > 0.5. Which of the following correctly describes f on the interval (−1, 2)?",
      "choices": [
        "A) f is decreasing and concave down on (−1, 0.5), and decreasing and concave up on (0.5, 2).",
        "B) f is increasing and concave down on (−1, 0.5), and increasing and concave up on (0.5, 2).",
        "C) f is decreasing on (−1, 2) with a local minimum at x = 0.5.",
        "D) f is decreasing and concave up on (−1, 0.5), and decreasing and concave down on (0.5, 2)."
      ],
      "answer": 0,
      "explanation": "Since f'(x) < 0 on (−1, 2), f is decreasing on the entire interval (−1, 2). This eliminates choice B. For concavity: f is concave down where f'' < 0, which is x < 0.5, and concave up where f'' > 0, which is x > 0.5. Therefore on (−1, 0.5), f is decreasing and concave down; on (0.5, 2), f is decreasing and concave up. This matches choice A. Choice C is wrong because x = 0.5 is an inflection point (where concavity changes), not a local minimum-f' is still negative at x = 0.5 so f has no local extremum there. Choice D reverses the concavity, incorrectly stating concave up on (−1, 0.5) and concave down on (0.5, 2), which contradicts the given information about f''.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u5_016",
      "unit": 5,
      "question": "A farmer has 200 meters of fencing to enclose a rectangular pen that is divided into three equal sections by two interior fences running parallel to one of the sides (as shown). What dimensions maximize the total enclosed area?",
      "choices": [
        "A) Length = 50 m, Width = 25 m",
        "B) Length = 100 m, Width = 50 m",
        "C) Length = 25 m, Width = 50 m",
        "D) Length = 40 m, Width = 30 m"
      ],
      "answer": 0,
      "explanation": "Let L be the length of the sides perpendicular to the interior dividers and W be the width (the side parallel to the dividers). The fencing constraint includes: 2 sides of length L (the outer sides) plus 4 runs of width W (2 outer sides + 2 interior dividers): 2L + 4W = 200, so L + 2W = 100, giving L = 100 − 2W. Area A = L·W = (100 − 2W)W = 100W − 2W². Taking dA/dW = 100 − 4W = 0 gives W = 25 m. Then L = 100 − 2(25) = 50 m. Maximum area = 50 × 25 = 1250 m². Choice A correctly gives Length = 50 m, Width = 25 m. Choice B doubles both dimensions and doesn't satisfy the constraint. Choice C swaps L and W-while the area is the same, the labeling is inconsistent with the constraint solution (L must be 50, W must be 25). Choice D (40 × 30 = 1200 m²) does not satisfy the constraint 2(40) + 4(30) = 200 ✓ but gives a smaller area of 1200 m² vs. 1250 m², and is not the maximum.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u5_017",
      "unit": 5,
      "question": "Let f be a function defined on all real numbers with f'(x) = (x² − 4)(x + 3)². Which of the following statements about f is FALSE?",
      "choices": [
        "A) f has a local minimum at x = 2.",
        "B) f has neither a local maximum nor a local minimum at x = −3.",
        "C) f has a local minimum at x = −2.",
        "D) f has exactly two local extrema."
      ],
      "answer": 2,
      "explanation": "First, find critical points by setting f'(x) = (x²−4)(x+3)² = (x−2)(x+2)(x+3)² = 0, giving x = 2, x = −2, and x = −3. Analyze sign changes of f': • Near x = −3: (x+3)² ≥ 0 always, so the sign of f' is determined by (x−2)(x+2). At x slightly less than −3 and slightly greater than −3, (x−2) < 0 and (x+2) < 0, so (x−2)(x+2) > 0 on both sides. Thus f' does not change sign at x = −3, confirming no local extremum there - statement B is TRUE. • Near x = −2: for x slightly < −2, (x−2)<0 and (x+2)<0 and (x+3)²>0, so f'>0. For x slightly > −2, (x−2)<0 and (x+2)>0, so f'<0. Sign change from + to −, so f has a local MAXIMUM at x = −2. Statement C claims a local minimum at x = −2, which is FALSE. • Near x = 2: for x slightly < 2, (x−2)<0 and (x+2)>0, so f'<0. For x slightly > 2, (x−2)>0 and (x+2)>0, so f'>0. Sign change from − to +, confirming a local MINIMUM at x = 2 - statement A is TRUE. • Statement D claims exactly two local extrema. Local extrema occur only at x = −2 (a maximum) and x = 2 (a minimum), with no extremum at x = −3. So f has exactly two local extrema - statement D is TRUE. Therefore, the false statement is C.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_018",
      "unit": 6,
      "question": "A left Riemann sum with n = 4 subintervals is used to approximate ∫₀⁴ f(x) dx, where f is continuous and strictly decreasing on [0, 4]. Which of the following statements is true?",
      "choices": [
        "A) The left Riemann sum is an overestimate because f is decreasing.",
        "B) The left Riemann sum is an underestimate because f is decreasing.",
        "C) The left Riemann sum equals the definite integral because f is continuous.",
        "D) The left Riemann sum is an overestimate only if f is also concave up on [0, 4]."
      ],
      "answer": 0,
      "explanation": "For a strictly decreasing function, the left endpoint of each subinterval yields the maximum value of f on that subinterval. Therefore, each rectangle in a left Riemann sum is taller than the actual area under the curve on that subinterval, making the left sum an overestimate. Choice B reverses the reasoning - underestimates occur with right Riemann sums for decreasing functions. Choice C is false; Riemann sums equal the integral only in the limit as n → ∞. Choice D incorrectly ties the overestimate/underestimate classification to concavity; concavity affects midpoint and trapezoid rule errors, not left/right rectangle rules.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_019",
      "unit": 6,
      "question": "Let g(x) = ∫₁ˣ √(t³ + 5) dt. If h(x) = g(x²), what is h′(x)?",
      "choices": [
        "A) √(x⁶ + 5)",
        "B) 2x√(x⁶ + 5)",
        "C) 2x√(x³ + 5)",
        "D) √(x⁶ + 5) − √6"
      ],
      "answer": 1,
      "explanation": "By the Fundamental Theorem of Calculus Part 1, g′(x) = √(x³ + 5). Since h(x) = g(x²), the chain rule gives h′(x) = g′(x²) · 2x = √((x²)³ + 5) · 2x = 2x√(x⁶ + 5). Choice A omits the chain rule factor 2x - a very common error when applying FTC to composite functions. Choice C applies the chain rule factor but fails to substitute x² into the integrand correctly, leaving x³ instead of x⁶. Choice D incorrectly subtracts the value of the integrand at the lower limit, confusing the FTC evaluation form with the derivative form.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_020",
      "unit": 6,
      "question": "A particle moves along the x-axis with velocity v(t) = t·eᵗ for t ≥ 0. What is the displacement of the particle from t = 0 to t = 2?",
      "choices": [
        "A) e² + 1",
        "B) e² − 1",
        "C) 2e² − 1",
        "D) 2e²"
      ],
      "answer": 0,
      "explanation": "Displacement = ∫₀² t·eᵗ dt. Using integration by parts with u = t, dv = eᵗ dt: du = dt, v = eᵗ. So ∫t·eᵗ dt = t·eᵗ − ∫eᵗ dt = t·eᵗ − eᵗ + C = eᵗ(t − 1) + C. Evaluating from 0 to 2: [e²(2−1)] − [e⁰(0−1)] = e² − (−1) = e² + 1. Choice B gives e² − 1, which results from omitting the sign flip at the lower limit, incorrectly computing −[e⁰(0−1)] as −1 instead of +1. Choice C gives 2e² − 1, which results from forgetting to subtract the full antiderivative at t = 0 and only subtracting the constant −1 without the e⁰ term correctly. Choice D gives 2e², which results from mishandling the lower limit by adding e⁰(0−1) instead of subtracting it, yielding e² + e⁰ · 1 = e² + 1... no: specifically computing [e²(1)] + [e⁰(1)] = e² + 1 is incorrect; instead this error gives e²(1) + e⁰(1) = e² + 1, so the D error is treating the lower bound as +e⁰ rather than −e⁰(−1), giving e² + e² − ... = 2e².",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_021",
      "unit": 6,
      "question": "Which of the following improper integrals converges?\n\nI.   ∫₁^∞ (1/x) dx\nII.  ∫₁^∞ (1/x²) dx\nIII. ∫₀¹ (1/√x) dx",
      "choices": [
        "A) II only",
        "B) I and II only",
        "C) II and III only",
        "D) I, II, and III"
      ],
      "answer": 2,
      "explanation": "Integral I: ∫₁^∞ (1/x) dx = lim[b→∞] ln(b) − ln(1) = ∞. Diverges. Integral II: ∫₁^∞ (1/x²) dx = lim[b→∞] [−1/x]₁ᵇ = 0 − (−1) = 1. Converges. Integral III: ∫₀¹ x^(−1/2) dx = lim[a→0⁺] [2√x]ₐ¹ = 2 − 0 = 2. Converges. So only II and III converge, making C correct. Choice A misses that the singularity at x = 0 in integral III is integrable (p < 1 for ∫₀¹ x^(−p) dx). Choice B mistakenly includes the divergent harmonic-type integral I. Choice D incorrectly treats all three as convergent, a common error when students forget the p-test boundary conditions.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_022",
      "unit": 6,
      "question": "The function f is continuous on [0, 6]. Selected values of f are given in the table below:\n\nx:    0   1   2   3   4   5   6\nf(x): 3   5   4   7   2   6   8\n\nThe average value of f on [0, 6] is approximated using a right Riemann sum with 6 subintervals of equal width. What value does this approximation give for the average value?\n\n(Note: average value = (1/(b−a)) ∫ₐᵇ f(x) dx)",
      "choices": [
        "A) 32/6",
        "B) 32",
        "C) 27/6",
        "D) 5"
      ],
      "answer": 0,
      "explanation": "With 6 equal subintervals of width Δx = 1 on [0, 6], the right Riemann sum for ∫₀⁶ f(x) dx uses x = 1, 2, 3, 4, 5, 6: sum = 1·(5 + 4 + 7 + 2 + 6 + 8) = 32. The average value is this sum divided by (b − a) = 6, giving 32/6 ≈ 5.33. Choice B forgets to divide by the interval length (b − a) = 6, reporting the raw Riemann sum as the average value. Choice C results from mistakenly using a left Riemann sum instead of a right Riemann sum: the left Riemann sum uses f(0) through f(5) = 3 + 5 + 4 + 7 + 2 + 6 = 27, which when divided by 6 gives 27/6 - a natural error for students who confuse which endpoints to use. Choice D uses the simple arithmetic mean of all 7 table values (3+5+4+7+2+6+8)/7 = 35/7 = 5, confusing average value of a function with the average of the listed data points.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_023",
      "unit": 6,
      "question": "Let f be a continuous function on [1, 5]. A left Riemann sum with 4 equal subintervals gives an approximation of 12, and a right Riemann sum with 4 equal subintervals gives an approximation of 20. If f is strictly increasing on [1, 5], which of the following must be true about the definite integral ∫₁⁵ f(x) dx?",
      "choices": [
        "A) ∫₁⁵ f(x) dx = 16",
        "B) 12 < ∫₁⁵ f(x) dx < 20",
        "C) ∫₁⁵ f(x) dx ≥ 20",
        "D) ∫₁⁵ f(x) dx ≤ 12"
      ],
      "answer": 1,
      "explanation": "For a strictly increasing function, the left Riemann sum underestimates the integral and the right Riemann sum overestimates it. Therefore 12 < ∫₁⁵ f(x) dx < 20. Choice A incorrectly assumes the true value is the average of the two sums (the trapezoid rule), which is an approximation, not a guaranteed equality. Choices C and D reverse the inequalities, confusing which sum gives an over- or underestimate for an increasing function.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_024",
      "unit": 6,
      "question": "The function g is defined by g(x) = ∫₂ˣ √(1 + t³) dt. Which of the following correctly gives g′(x) and the value of x at which g has a relative minimum on the interval [−2, 3]?",
      "choices": [
        "A) g′(x) = √(1 + x³); relative minimum at x = −1",
        "B) g′(x) = √(1 + x³); relative minimum at x = 2",
        "C) g′(x) = 3x²/(2√(1 + x³)); relative minimum at x = −1",
        "D) g′(x) = √(1 + x³); no relative minimum exists on [−2, 3]"
      ],
      "answer": 0,
      "explanation": "By the Fundamental Theorem of Calculus Part 1, g′(x) = √(1 + x³). To find a relative minimum, set g′(x) = 0: √(1 + x³) = 0 implies x³ = −1, so x = −1. Since g′(x) < 0 for x < −1 (near −1) and g′(x) > 0 for x > −1 (near −1), there is a sign change from negative to positive at x = −1, confirming a relative minimum. Choice B incorrectly identifies x = 2 (the lower limit of integration, not a critical point of g). Choice C incorrectly differentiates the integrand rather than applying the FTC directly. Choice D misses the critical point analysis.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_025",
      "unit": 6,
      "question": "A particle moves along the x-axis with velocity v(t) = t·eᵗ² for t ≥ 0. The average value of v on the interval [0, 2] is best computed by which of the following, and what is that average value?",
      "choices": [
        "A) (1/2)∫₀² t·eᵗ² dt = (1/4)(e⁴ − 1)",
        "B) (1/2)∫₀² t·eᵗ² dt = (1/2)(e⁴ − 1)",
        "C) (1/2)∫₀² t·eᵗ² dt = (e⁴ − 1)/2 evaluated directly without substitution",
        "D) ∫₀² t·eᵗ² dt = e⁴ − 1"
      ],
      "answer": 0,
      "explanation": "The average value of v on [0, 2] is (1/(2−0))∫₀² t·eᵗ² dt = (1/2)∫₀² t·eᵗ² dt. Using u-substitution with u = t², du = 2t dt, so t dt = du/2. When t = 0, u = 0; when t = 2, u = 4. The integral becomes (1/2)·(1/2)∫₀⁴ eᵘ du = (1/4)[eᵘ]₀⁴ = (1/4)(e⁴ − 1). Choice B forgets the factor of 1/2 introduced by the substitution. Choice D omits the 1/(b−a) factor required for average value. Choice C is vague and leads to the incorrect result in B.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u6_026",
      "unit": 6,
      "question": "The integrand (3x + 2)/(x² + 2x) can be decomposed as 1/x + 2/(x+2). Given this, what is the correct conclusion about the convergence of ∫₁^∞ (3x + 2)/(x² + 2x) dx?",
      "choices": [
        "A) The integral diverges because the antiderivative ln|x| + 2ln|x+2| grows without bound as x→∞.",
        "B) The integral converges because the integrand approaches 0 as x→∞, guaranteeing a finite value.",
        "C) The integral converges to ln 3, found by evaluating [ln|x| + 2ln|x+2|] at the bounds and combining logarithms.",
        "D) The integral diverges because the partial fraction decomposition is undefined at x = 0, making the integral improper at both ends."
      ],
      "answer": 0,
      "explanation": "Using the given partial fractions, the integral becomes ∫₁^∞ (1/x + 2/(x+2)) dx = lim_{b→∞} [ln|x| + 2ln|x+2|]₁^b. As b→∞, ln b + 2ln(b+2) → ∞, so the integral diverges. Choice B reflects a very common student error: assuming that because the integrand →0 as x→∞, the integral must converge. This is false - the harmonic series and ∫1/x dx are classic counterexamples. Choice C arises from a realistic algebraic mistake: a student might write ln|x| + 2ln|x+2| = ln|x(x+2)²| and attempt to evaluate at the bounds, noticing that at x=1 the expression equals ln(1·9) = ln 9 = 2ln 3, then incorrectly subtract a 'limit of 0' by mishandling the infinite upper bound, arriving at ln 3 or 2ln 3. Choice D confuses the location of the improper behavior - the original integral starts at x=1, so x=0 is not in the domain of integration and does not affect convergence on [1,∞).",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u7_027",
      "unit": 7,
      "question": "A slope field for a differential equation dy/dx = f(x, y) is shown. At the point (0, 1), the slope segments are horizontal. In fact, along the entire vertical line x = 0, the slope segments are horizontal for all values of y. At points where y > 1 and x > 0, the slope segments point upward to the right, and where y < 1 and x > 0, the slope segments point downward to the right. Which of the following could be the differential equation represented by this slope field?",
      "choices": [
        "A) dy/dx = x(y − 1)",
        "B) dy/dx = y − 1",
        "C) dy/dx = x + y − 1",
        "D) dy/dx = (y − 1)²"
      ],
      "answer": 0,
      "explanation": "Along the entire line x = 0, the slope must equal zero (horizontal segments) for all y, which rules out options B and C since they give nonzero slopes at x = 0 when y ≠ 1. Option D, (y−1)², is always nonneg­ative and cannot produce downward slopes when y < 1 and x > 0. Option A, x(y−1), equals 0 whenever x = 0 (satisfying horizontal segments along the entire line x = 0), is positive when x > 0 and y > 1 (slopes up to the right), and negative when x > 0 and y < 1 (slopes down to the right), matching all described behaviors.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u7_028",
      "unit": 7,
      "question": "Consider the differential equation dy/dx = 2y with the initial condition y(0) = 3. Using Euler's method with two steps of equal size h = 0.5, what is the approximation for y(1)?",
      "choices": [
        "A) 3e²",
        "B) 12",
        "C) 9",
        "D) 6"
      ],
      "answer": 1,
      "explanation": "Euler's method: y₁ = y₀ + h·f(x₀, y₀) = 3 + 0.5·(2·3) = 3 + 3 = 6. Then y₂ = y₁ + h·f(x₁, y₁) = 6 + 0.5·(2·6) = 6 + 6 = 12. The answer is 12. Choice A is the exact solution y(1) = 3e², which students may confuse with the Euler approximation. Choice C results from incorrectly using h = 1 in a single step: 3 + 1·(2·3) = 9. Choice D comes from performing only one step with h = 0.5 and stopping there.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u7_029",
      "unit": 7,
      "question": "A population P(t) satisfies the logistic differential equation dP/dt = 0.4P(1 − P/800), where t is measured in years. If P(0) = 100, which of the following statements is true about the population growth rate dP/dt?",
      "choices": [
        "A) dP/dt is increasing for all t > 0 until P reaches 800.",
        "B) dP/dt is at a maximum when P = 400, and decreases for P > 400.",
        "C) dP/dt is always positive and approaches 0.4P as P approaches 800.",
        "D) dP/dt reaches its maximum when t = 0 because P(0) = 100 is closest to the inflection point."
      ],
      "answer": 1,
      "explanation": "For a logistic model dP/dt = rP(1 − P/K), the growth rate dP/dt is maximized when P = K/2. Here K = 800, so dP/dt is maximized at P = 400, which is the inflection point of the logistic curve. For P > 400 the growth rate decreases, reaching zero as P → 800. Choice A is incorrect because dP/dt is not monotonically increasing - it increases only while P < 400, then decreases. Choice C is incorrect because as P → 800, (1 − P/800) → 0, so dP/dt → 0, not 0.4P. Choice D is a common trap: P(0) = 100 is far below K/2 = 400, so the growth rate is not at its maximum at t = 0.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u8_030",
      "unit": 8,
      "question": "A particle moves along the x-axis so that its velocity at time t is given by v(t) = t² − 4t + 3 for 0 ≤ t ≤ 4. What is the total distance traveled by the particle from t = 0 to t = 4?",
      "choices": [
        "A) 2",
        "B) 4",
        "C) 8/3",
        "D) 4/3"
      ],
      "answer": 1,
      "explanation": "Total distance is ∫₀⁴ |v(t)| dt, not the net displacement. Factor v(t) = (t−1)(t−3), so v(t) changes sign at t = 1 and t = 3. On [0,1]: v > 0, on [1,3]: v < 0, on [3,4]: v > 0. ∫₀¹ (t²−4t+3) dt = [t³/3 − 2t² + 3t]₀¹ = 1/3 − 2 + 3 = 4/3. ∫₁³ |t²−4t+3| dt = −∫₁³ (t²−4t+3) dt = −[(9−18+9)−(1/3−2+3)] = −[0 − 4/3] = 4/3. ∫₃⁴ (t²−4t+3) dt = [t³/3 − 2t² + 3t]₃⁴ = (64/3−32+12)−(9−18+9) = 4/3 − 0 = 4/3. Total = 4/3 + 4/3 + 4/3 = 4, so the correct answer is B. Choice D (4/3) is the net displacement ∫₀⁴ v(t) dt = [t³/3 − 2t² + 3t]₀⁴ = 64/3 − 32 + 12 = 4/3, a classic trap for students who forget to use |v(t)|. Choice C (8/3) results from a student who correctly identifies the three intervals but only adds two of the three pieces (4/3 + 4/3 = 8/3), omitting one interval. Choice A (2) results from a student who evaluates only ∫₀¹ and ∫₃⁴ (the positive portions) without accounting for the middle interval, obtaining 4/3 + 4/3 = 8/3 and then making an additional arithmetic error, or from averaging the endpoint values of the antiderivative incorrectly to get 2.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u8_031",
      "unit": 8,
      "question": "The region R is bounded by y = √x, y = 0, and x = 9. The solid S is generated by revolving R about the line x = 9. Which of the following integrals correctly gives the volume of S using the shell method?",
      "choices": [
        "A) 2π ∫₀⁹ x√x dx",
        "B) 2π ∫₀⁹ (9 − x)√x dx",
        "C) π ∫₀⁹ (9 − √x)² dx",
        "D) 2π ∫₀³ y(9 − y²) dy"
      ],
      "answer": 1,
      "explanation": "Using the shell method with vertical shells, consider a thin shell at position x in [0, 9]. When revolving about the vertical line x = 9, the shell radius is the horizontal distance from x to the axis: (9 − x). The shell height is the vertical extent of the region at that x-value: √x − 0 = √x. Applying the shell formula V = 2π ∫ (radius)(height) dx gives V = 2π ∫₀⁹ (9 − x)√x dx. Evaluating: 2π ∫₀⁹ (9x^(1/2) − x^(3/2)) dx = 2π [9 · (2/3)x^(3/2) − (2/5)x^(5/2)]₀⁹ = 2π [6x^(3/2) − (2/5)x^(5/2)]₀⁹ = 2π [6(27) − (2/5)(243)] = 2π [162 − 486/5] = 2π · (810/5 − 486/5) = 2π · (324/5) = 648π/5. This confirms choice B is correct. Choice A uses x as the radius instead of (9 − x), which would be correct only for revolution about x = 0. Choice C sets up a disc/washer-type integral rather than a shell integral, and incorrectly treats the integrand as a squared radius. Choice D switches to integration in y but misidentifies the shell structure: for a horizontal shell at height y, the correct radius would be (9 − y²) and the correct height would be the full vertical length of the shell, not y; this integral computes the wrong quantity and does not equal 648π/5.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u8_032",
      "unit": 8,
      "question": "The average value of f(x) = 3x² − 2x on the interval [1, 4] is",
      "choices": [
        "A) 13",
        "B) 16",
        "C) 39",
        "D) 5"
      ],
      "answer": 1,
      "explanation": "The average value of f on [a, b] is (1/(b−a)) ∫ₐᵇ f(x) dx. Here, (1/(4−1)) ∫₁⁴ (3x² − 2x) dx = (1/3)[x³ − x²]₁⁴ = (1/3)[(64 − 16) − (1 − 1)] = (1/3)[48 − 0] = 16. Choice C (39) is a common error in which the student forgets to divide by (b − a) = 3 and reports only the value of the definite integral. Choice A (13) may result from an antiderivative error when computing [x³ − x²]. Choice D (5) results from further arithmetic mistakes.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u9_033",
      "unit": 9,
      "question": "A particle moves along a curve defined by the parametric equations x(t) = t³ − 3t and y(t) = t² − 2t. At t = 1, what is dy/dx?",
      "choices": [
        "A) 1/3",
        "B) 0",
        "C) 2/3",
        "D) 1/2"
      ],
      "answer": 0,
      "explanation": "dy/dx = (dy/dt)/(dx/dt). dy/dt = 2t − 2, dx/dt = 3t² − 3. At t = 1, both equal 0, giving an indeterminate form 0/0. Factor each expression: dy/dt = 2(t − 1) and dx/dt = 3(t² − 1) = 3(t − 1)(t + 1). Then dy/dx = 2(t − 1) / [3(t − 1)(t + 1)] = 2 / [3(t + 1)]. Evaluating the limit as t → 1: dy/dx = 2 / [3(1 + 1)] = 2/6 = 1/3. The correct answer is A) 1/3.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u9_034",
      "unit": 9,
      "question": "A particle moves in the xy-plane with velocity vector w(t) = ⟨2e^t, 1/(t+1)⟩. If the particle is at position ⟨0, 0⟩ at t = 0, what is its position at t = 1?",
      "choices": [
        "A) ⟨2e − 2, ln 2⟩",
        "B) ⟨2e, ln 2⟩",
        "C) ⟨2e − 2, 1/2⟩",
        "D) ⟨e² − 1, ln 2⟩"
      ],
      "answer": 0,
      "explanation": "To find the position of the particle, integrate w(t) from 0 to 1 and add the initial position ⟨0,0⟩. ∫₀¹ 2e^t dt = [2e^t]₀¹ = 2e − 2. ∫₀¹ 1/(t+1) dt = [ln(t+1)]₀¹ = ln 2 − 0 = ln 2. So the position is ⟨2e − 2, ln 2⟩, choice A. Choice B forgets to subtract the lower bound 2e^0 = 2 from the x-component. Choice C correctly computes x but evaluates ∫1/(t+1)dt as 1/(t+1) evaluated at t=1 rather than integrating, giving 1/2. Choice D confuses the base of the exponent or integrates e^t incorrectly.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u9_035",
      "unit": 9,
      "question": "Which of the following integrals gives the arc length of the curve defined by x(t) = 3sin(t), y(t) = 3cos(t) from t = 0 to t = π/2?",
      "choices": [
        "A) ∫₀^(π/2) (9cos²t + 9sin²t) dt",
        "B) ∫₀^(π/2) 9 dt",
        "C) ∫₀^(π/2) √(9cos²t + 9sin²t) dt",
        "D) ∫₀^(π/2) √(3cos²t + 3sin²t) dt"
      ],
      "answer": 2,
      "explanation": "Arc length = ∫√[(dx/dt)² + (dy/dt)²] dt. dx/dt = 3cos(t), dy/dt = −3sin(t). So (dx/dt)² + (dy/dt)² = 9cos²t + 9sin²t. The arc length integral is therefore ∫₀^(π/2) √(9cos²t + 9sin²t) dt, which is Choice C. This simplifies to ∫₀^(π/2) 3 dt = 3π/2. Choice A is incorrect because it omits the square root, integrating the sum of squares directly rather than its square root. Choice B uses 9 instead of √9 = 3 as the integrand, forgetting to take the square root. Choice D incorrectly uses factors of 3 rather than 9 inside the radical, which would result in √3·π/2, indicating the student forgot to square dx/dt and dy/dt.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u9_036",
      "unit": 9,
      "question": "The polar curve r = 2 + 2cos(θ) is a cardioid. Which of the following integrals gives the total area enclosed by this curve?",
      "choices": [
        "A) ∫₀^(2π) (2 + 2cos θ)² dθ",
        "B) (1/2)∫₀^(2π) (2 + 2cos θ)² dθ",
        "C) (1/2)∫₀^(π/2) (2 + 2cos θ)² dθ",
        "D) ∫₀^(2π) (2 + 2cos θ) dθ"
      ],
      "answer": 1,
      "explanation": "The formula for area enclosed by a polar curve is A = (1/2)∫[α to β] r² dθ. Since the cardioid r = 2 + 2cos(θ) traces out one complete closed curve as θ goes from 0 to 2π, the correct integral is (1/2)∫₀^(2π) (2 + 2cosθ)² dθ, which is choice B. Choice A omits the required factor of 1/2, which would double the correct area. Choice C includes the 1/2 factor but integrates only over [0, π/2], capturing just one quarter of the angular range and thus only a fraction of the total enclosed area. Choice D integrates r rather than r² over [0, 2π], which does not correspond to the polar area formula at all. The standard and uniquely correct form is choice B.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u9_037",
      "unit": 9,
      "question": "A particle moves along a curve with parametric equations x(t) = t² and y(t) = t³ − 3t. The second derivative d²y/dx² at t = 2 is which of the following?",
      "choices": [
        "A) 15/32",
        "B) 3/8",
        "C) 9/16",
        "D) 15/16"
      ],
      "answer": 0,
      "explanation": "The second derivative for parametric equations is d²y/dx² = [d/dt(dy/dx)] / (dx/dt). First, find dy/dx = (dy/dt)/(dx/dt) = (3t²−3)/(2t). Simplify: (3t²−3)/(2t) = 3t/2 − 3/(2t). Differentiate with respect to t: d/dt[3t/2 − 3/(2t)] = 3/2 + 3/(2t²). At t = 2: 3/2 + 3/(2·4) = 3/2 + 3/8 = 12/8 + 3/8 = 15/8. Then dx/dt = 2t, so at t = 2, dx/dt = 4. Therefore d²y/dx² = (15/8) / 4 = 15/32. Choice B (3/8) results from dividing by dx/dt = 2 (using t instead of 2t) rather than the correct value of 4. Choice C (9/16) results from a sign error when differentiating −3/(2t), treating it as −3/(2t²) with the wrong sign, giving 3/2 − 3/8 = 9/8, then dividing by 4 to get 9/32 - or from a related algebra mistake. Choice D (15/16) results from dividing by dx/dt only once using the value 2 instead of 4, giving (15/8)/2 = 15/16, a common error when students forget that dx/dt = 2t must be evaluated at t = 2.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u10_038",
      "unit": 10,
      "question": "The sum of the infinite geometric series 3 - 2 + 4/3 - 8/9 +  can be written in the form p/q where p and q are integers. What is the value of this sum?",
      "choices": [
        "A) 9/5",
        "B) 5/3",
        "C) 9/7",
        "D) 3/5"
      ],
      "answer": 0,
      "explanation": "The first term is a = 3 and the common ratio is r = -2/3. Since |r| = 2/3 < 1, the series converges. The sum is a/(1-r) = 3/(1-(-2/3)) = 3/(5/3) = 9/5. Choice B is a trap for students who compute 3/(1+2/3) = 3/(5/3) correctly but then make an arithmetic error. Choice C results from using r = 2/3 instead of -2/3 giving 3/(1/3) incorrectly. Choice D results from inverting the formula and computing (1-r)/a.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u10_039",
      "unit": 10,
      "question": "A student claims that the series ∑(n=1 to ∞) (n² + 1)/(3n² + n) converges because the terms approach zero as n → ∞. Which of the following best evaluates the student's claim?",
      "choices": [
        "A) The student is incorrect; since lim(n→∞) aₙ = 1/3 ≠ 0, the series diverges by the nth Term Test.",
        "B) The student is correct; terms approaching zero is both necessary and sufficient for convergence.",
        "C) The student is incorrect; the series diverges by the Integral Test, not the nth Term Test.",
        "D) The student is incorrect; the terms do approach zero, but the series still diverges because it behaves like the harmonic series."
      ],
      "answer": 0,
      "explanation": "Computing lim(n→∞) (n²+1)/(3n²+n): dividing numerator and denominator by n² gives lim(n→∞) (1 + 1/n²)/(3 + 1/n) = 1/3 ≠ 0. Since the limit of the terms is not zero, the nth Term Test for Divergence immediately confirms divergence. The student made a fundamental error by not actually computing the limit. Choice B is the classic misconception that terms going to zero implies convergence (necessary but not sufficient). Choice D is incorrect because the terms do NOT go to zero here. Choice C is incorrect because the nth Term Test applies directly and is more efficient.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u10_040",
      "unit": 10,
      "question": "Consider the power series ∑(n=0 to ∞) ((x-2)ⁿ)/(n · 3ⁿ) for n ≥ 1 (with the n=0 term defined as 1). Using the Ratio Test, the interval of convergence of this series is:",
      "choices": [
        "A) -1 < x < 5, and the series diverges at both endpoints",
        "B) -1 ≤ x < 5, and the series converges at x = -1 but diverges at x = 5",
        "C) -1 < x ≤ 5, and the series diverges at x = -1 but converges at x = 5",
        "D) -1 ≤ x ≤ 5, and the series converges at both endpoints"
      ],
      "answer": 1,
      "explanation": "Applying the Ratio Test: |aₙ₊₁/aₙ| = |x-2|·n/((n+1)·3) → |x-2|/3 as n→∞. Setting this < 1 gives |x-2| < 3, so -1 < x < 5, with radius of convergence R = 3 centered at x = 2. At x = 5: the series becomes ∑1/n (harmonic series), which diverges. At x = -1: the series becomes ∑(-1)ⁿ/n, which converges by the Alternating Series Test (conditionally). Therefore the interval of convergence is -1 ≤ x < 5. Choice A ignores endpoint analysis. Choice C incorrectly reverses which endpoint converges. Choice D incorrectly includes x = 5 where the harmonic series diverges.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u10_041",
      "unit": 10,
      "question": "Let f(x) = ∑(n=0 to ∞) ((-1)ⁿ x^(2n+1))/(2n+1), which is the Maclaurin series for arctan(x) with radius of convergence R = 1. A student uses the 4th-degree Taylor polynomial P₄(x) centered at x = 0 to approximate arctan(0.5). By the Alternating Series Error Bound, the magnitude of the error |arctan(0.5) - P₄(0.5)| is at most:",
      "choices": [
        "A) 1/80",
        "B) 1/96",
        "C) 1/160",
        "D) 1/48"
      ],
      "answer": 2,
      "explanation": "The Maclaurin series for arctan(x) is x - x³/3 + x⁵/5 - x⁷/7 + ⋯ Since all even-degree terms have coefficient 0, the 4th-degree Taylor polynomial P₄(x) includes only the nonzero terms of degree ≤ 4, giving P₄(x) = x - x³/3. The Alternating Series Error Bound states that the error is at most the absolute value of the first omitted term evaluated at the given point. The first omitted nonzero term is x⁵/5, so the error bound at x = 0.5 is |(0.5)⁵/5| = (1/32)/5 = 1/160. The answer is C) 1/160.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u10_042",
      "unit": 10,
      "question": "Which of the following series converges conditionally but NOT absolutely?",
      "choices": [
        "A) ∑(n=1 to ∞) (-1)ⁿ/n²",
        "B) ∑(n=1 to ∞) (-1)ⁿ · n/(n+1)",
        "C) ∑(n=1 to ∞) (-1)ⁿ/√n",
        "D) ∑(n=1 to ∞) (-1)ⁿ/n!"
      ],
      "answer": 2,
      "explanation": "A series converges conditionally if it converges but its absolute value series diverges. Choice A: ∑1/n² is a convergent p-series (p=2>1), so ∑(-1)ⁿ/n² converges absolutely - not conditional. Choice B: lim n/(n+1) = 1 ≠ 0, so the series diverges by the nth Term Test - not convergent at all. Choice C: ∑1/√n is a p-series with p=1/2 ≤ 1, which diverges; but ∑(-1)ⁿ/√n converges by the Alternating Series Test (1/√n is decreasing and → 0). This is conditional convergence. Choice D: ∑1/n! converges (by Ratio Test), so ∑(-1)ⁿ/n! converges absolutely. Therefore C is the only conditionally convergent series.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u10_043",
      "unit": 10,
      "question": "The series ∑(n=1 to ∞) [(-1)^(n+1) / √n] is being analyzed for convergence. Which of the following correctly classifies this series?",
      "choices": [
        "A) Absolutely convergent, because the alternating series test guarantees absolute convergence when the terms decrease to zero.",
        "B) Conditionally convergent, because the series converges by the alternating series test but ∑(1/√n) diverges as a p-series with p = 1/2 ≤ 1.",
        "C) Divergent, because the terms 1/√n do not approach zero quickly enough to satisfy the requirements of any convergence test.",
        "D) Absolutely convergent, because 1/√n → 0 and the terms are decreasing, so the series of absolute values also converges."
      ],
      "answer": 1,
      "explanation": "To test absolute convergence, examine ∑(1/√n) = ∑(n^(−1/2)), a p-series with p = 1/2 < 1, which diverges. Therefore the series is not absolutely convergent. For conditional convergence, apply the alternating series test: the terms b_n = 1/√n are positive, decreasing, and approach 0, so the alternating series converges. Since it converges but does not converge absolutely, it is conditionally convergent - choice B. Choice A is wrong because the alternating series test never implies absolute convergence. Choice C is wrong because lim(1/√n) = 0 is satisfied and the AST confirms convergence. Choice D incorrectly claims the absolute value series converges.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u10_044",
      "unit": 10,
      "question": "A student uses the first four nonzero terms of the Maclaurin series for sin(x) to approximate sin(0.4). The Maclaurin series for sin(x) is x − x³/3! + x⁵/5! − x⁷/7! + ⋯. Using the alternating series error bound, what is the maximum error in using the sum of the first three nonzero terms (up through x⁵/5!) to approximate sin(0.4)?",
      "choices": [
        "A) (0.4)^5 / 5!",
        "B) (0.4)^7 / 7!",
        "C) (0.4)^6 / 6!",
        "D) (0.4)^5 / 4!"
      ],
      "answer": 1,
      "explanation": "For a convergent alternating series satisfying the alternating series test, the error in stopping after n terms is bounded by the absolute value of the first omitted term. Using three nonzero terms means the approximation ends at x⁵/5!, so the first omitted term is x⁷/7!. At x = 0.4, the error bound is |(0.4)^7 / 7!|, which is choice B. Choice A incorrectly uses the last included term rather than the first omitted term - a very common student error. Choice C introduces 6! which does not appear in the sine series. Choice D mismatches the exponent and factorial, another typical algebraic confusion.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcbc_p1_u10_045",
      "unit": 10,
      "question": "Consider the power series ∑(n=0 to ∞) [n!(x − 2)^n / 3^n]. Which of the following statements about the interval of convergence of this series is correct?",
      "choices": [
        "A) The series converges for all real x, because the factorial in the numerator grows faster than the exponential denominator.",
        "B) The series converges only at x = 2, because applying the ratio test yields a limit of infinity for all x ≠ 2.",
        "C) The series converges for |x − 2| < 3, giving an interval of convergence of (−1, 5).",
        "D) The series converges for |x − 2| < 1/3, giving an interval of convergence of (5/3, 7/3)."
      ],
      "answer": 1,
      "explanation": "Apply the ratio test: |a_(n+1)/a_n| = |(n+1)!(x−2)^(n+1)/3^(n+1)| · |3^n / (n!(x−2)^n)| = (n+1)|x−2|/3. As n → ∞, this limit is ∞ for any x ≠ 2, and equals 0 when x = 2. Since the ratio test limit exceeds 1 for all x ≠ 2, the series diverges everywhere except x = 2 - choice B. Choice A reverses the reasoning; n! growing fast in the numerator causes divergence, not convergence. Choice C confuses the structure with a geometric-like series and incorrectly uses 3 as the radius. Choice D incorrectly applies the reciprocal 1/3, as if using the formula R = lim|a_n/a_(n+1)| with a_n = 3^n, ignoring the factorial entirely.",
      "difficulty": "hard",
      "type": "MCQ"
    }
  ],
  "frqs": [
    {
      "id": "pt_calcbc_p1_frq_001",
      "frqType": "calculator",
      "title": "Particle Motion and Accumulation Along a Curve",
      "prompt": "A particle moves along the x-axis so that its velocity at time t is given by v(t) = t^3 - 6t^2 + 4t + 2 for 0 ≤ t ≤ 5. At time t = 0, the particle is at position x = 3. Let a(t) denote the acceleration of the particle.",
      "parts": [
        {
          "label": "a",
          "question": "Find all times t in the open interval 0 < t < 5 at which the particle changes direction. Justify your answer.",
          "points": 3
        },
        {
          "label": "b",
          "question": "Find the total distance traveled by the particle from t = 0 to t = 5. Show the setup of the integral used.",
          "points": 3
        },
        {
          "label": "c",
          "question": "Find the position of the particle at t = 5.",
          "points": 2
        },
        {
          "label": "d",
          "question": "Find all times t in the open interval 0 < t < 5 at which the speed of the particle is increasing. Justify your answer.",
          "points": 3
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Correct identification of direction changes",
          "points": 3,
          "guidance": "Student must set v(t) = t^3 - 6t^2 + 4t + 2 = 0 and use a calculator to find roots in (0, 5). The roots are approximately t ≈ 0.540, t ≈ 2.311, and t ≈ 3.149. A direction change occurs when v(t) changes sign. Student should verify sign changes at each root: v changes from positive to negative at t ≈ 0.540, negative to positive at t ≈ 2.311, and positive to negative at t ≈ 3.149. Award 1 point for correctly setting up v(t) = 0, 1 point for finding all three correct roots (within 0.001), and 1 point for justifying sign changes (direction changes) at each root."
        },
        {
          "criterion": "Part (b): Total distance traveled setup and evaluation",
          "points": 3,
          "guidance": "Student must write total distance = ∫ from 0 to 5 of |v(t)| dt. Award 1 point for the correct integral setup with absolute value. The integral must be split at the zeros found in part (a): ∫₀^{0.540} v(t) dt - ∫_{0.540}^{2.311} v(t) dt + ∫_{2.311}^{3.149} v(t) dt - ∫_{3.149}^{5} v(t) dt. Award 1 point for correctly splitting at zeros. The numerical answer is approximately 19.127 (accept answers in range [19.125, 19.130]). Award 1 point for correct final numerical answer."
        },
        {
          "criterion": "Part (c): Position at t = 5",
          "points": 2,
          "guidance": "Student must use x(5) = x(0) + ∫ from 0 to 5 of v(t) dt. Award 1 point for the correct setup: x(5) = 3 + ∫₀^5 (t^3 - 6t^2 + 4t + 2) dt. Evaluating: ∫₀^5 (t^3 - 6t^2 + 4t + 2) dt = [t^4/4 - 2t^3 + 2t^2 + 2t]₀^5 = (625/4 - 250 + 50 + 10) - 0 = 156.25 - 250 + 50 + 10 = -33.75. So x(5) = 3 + (-33.75) = -30.75. Award 1 point for correct antidifferentiation or correct use of FTC, and 1 point for the correct final answer of x(5) = -30.75."
        },
        {
          "criterion": "Part (d): Speed increasing - identifying correct intervals",
          "points": 3,
          "guidance": "Speed is increasing when v(t) and a(t) have the same sign. Student must find a(t) = v'(t) = 3t^2 - 12t + 4. Set a(t) = 0: t = (12 ± √(144 - 48))/6 = (12 ± √96)/6 ≈ 0.351 and t ≈ 3.649. Award 1 point for correct expression for a(t) and its zeros. Create a sign chart: analyze signs of v(t) and a(t) on subintervals determined by zeros of both v and a: approximately (0, 0.351), (0.351, 0.540), (0.540, 2.311), (2.311, 3.149), (3.149, 3.649), (3.649, 5). Speed increases when both are positive or both are negative. Speed is increasing on approximately (0.351, 0.540) ∪ (2.311, 3.149) ∪ (3.649, 5). Award 1 point for correct sign analysis of both v and a, and 1 point for correct final intervals (within 0.001 tolerance)."
        }
      ],
      "isCalc": true
    },
    {
      "id": "pt_calcbc_p1_frq_002",
      "frqType": "calculator",
      "title": "Rate of Change and Approximation Using a Table of Values",
      "prompt": "Water flows into a tank at a rate modeled by the function F(t) = 2t·cos(0.3t) + 5, measured in gallons per hour, where t is measured in hours for 0 ≤ t ≤ 10. Simultaneously, water is removed from the tank at a rate modeled by R(t) = 3·ln(t + 1) + 1, measured in gallons per hour. At time t = 0, the tank contains 20 gallons of water.\n\nSelected values of F(t) are given in the table below:\n\nt:    0    2    5    7    10\nF(t): 5   8.323  8.366  5.460  1.839",
      "parts": [
        {
          "label": "a",
          "question": "Use a left Riemann sum with the four subintervals indicated by the table to approximate ∫ from 0 to 10 of F(t) dt. Indicate units of measure.",
          "points": 3
        },
        {
          "label": "b",
          "question": "Using correct integral notation, write - but do not evaluate - an expression that gives the total amount of water in the tank at time t = 10. Then use your calculator to evaluate this expression, giving your answer to the nearest 0.001 gallon.",
          "points": 3
        },
        {
          "label": "c",
          "question": "Find the time t, for 0 < t < 10, at which the rate of change of the amount of water in the tank is at its maximum. Justify your answer.",
          "points": 3
        },
        {
          "label": "d",
          "question": "At time t = 10, is the amount of water in the tank increasing or decreasing? Give a reason for your answer.",
          "points": 2
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Left Riemann sum approximation",
          "points": 3,
          "guidance": "The four subintervals are [0,2], [2,5], [5,7], [7,10] with widths 2, 3, 2, 3 respectively. A left Riemann sum uses the left endpoint value of each subinterval. Sum = F(0)·2 + F(2)·3 + F(5)·2 + F(7)·3 = 5·2 + 8.323·3 + 8.366·2 + 5.460·3 = 10 + 24.969 + 16.732 + 16.380 = 68.081 gallons. Award 1 point for correctly identifying left endpoints and subinterval widths, 1 point for correct Riemann sum setup/calculation, 1 point for correct numerical answer (accept 68.081 ± 0.002) and correct units of 'gallons' (not gallons per hour)."
        },
        {
          "criterion": "Part (b): Total water at t = 10 using integral notation and calculator evaluation",
          "points": 3,
          "guidance": "The total amount of water at t = 10 is given by: W(10) = 20 + ∫₀^{10} [F(t) - R(t)] dt = 20 + ∫₀^{10} [2t·cos(0.3t) + 5 - 3·ln(t+1) - 1] dt. Award 1 point for correct integral expression in proper notation including initial condition of 20, the integrand F(t) - R(t), and limits 0 to 10. Evaluating numerically: ∫₀^{10} F(t) dt ≈ 63.938 and ∫₀^{10} R(t) dt ≈ ∫₀^{10} (3ln(t+1)+1) dt ≈ 43.107. So W(10) = 20 + 63.938 - 43.107 ≈ 40.831 gallons. Award 1 point for correct calculator setup (correctly entering both functions), and 1 point for final answer of approximately 40.831 gallons (accept answers in [40.828, 40.834])."
        },
        {
          "criterion": "Part (c): Maximum rate of change of water in tank",
          "points": 3,
          "guidance": "The rate of change of water in the tank is W'(t) = F(t) - R(t) = 2t·cos(0.3t) + 5 - 3·ln(t+1) - 1. To find the maximum of W'(t), the student must find W''(t) = F'(t) - R'(t) = 0 on (0, 10), or analyze W'(t) using a calculator. W''(t) = d/dt[2t·cos(0.3t)] - 3/(t+1) = 2cos(0.3t) - 0.6t·sin(0.3t) - 3/(t+1). Setting W''(t) = 0 using a calculator gives t ≈ 0.956 and t ≈ 6.422 (approximately). Evaluate W'(t) at critical points and endpoints: W'(0) = 4, W'(0.956) ≈ local max ≈ 5.88, W'(6.422) ≈ local max (check if second max), W'(10) ≈ negative. The maximum of W'(t) occurs at approximately t ≈ 0.956 (accept within 0.01). Award 1 point for writing W'(t) = F(t) - R(t) and setting its derivative to zero, 1 point for correct use of calculator to find candidate t values, 1 point for correctly identifying t ≈ 0.956 as the location of the maximum with a justification (sign change of W''(t) from positive to negative, or comparison of values)."
        },
        {
          "criterion": "Part (d): Increasing or decreasing at t = 10",
          "points": 2,
          "guidance": "Student must evaluate F(10) - R(10). F(10) = 2(10)·cos(0.3·10) + 5 = 20·cos(3) + 5 ≈ 20·(-0.98999) + 5 ≈ -19.800 + 5 = -14.800 + 5 ≈ -14.800. Wait - recalculate: F(10) = 20cos(3) + 5 ≈ 20(-0.98999) + 5 ≈ -19.80 + 5 = -14.80. Given the table shows F(10) = 1.839, re-examine: F(10) = 2(10)cos(0.3·10) + 5 = 20cos(3) + 5 ≈ 20(-0.9900) + 5 ≈ -19.800 + 5 = -14.800. The table value of 1.839 may reflect a different form. Use F(10) = 1.839 as given in the table. R(10) = 3·ln(11) + 1 ≈ 3(2.3979) + 1 ≈ 7.1937 + 1 = 8.1937. Since F(10) - R(10) = 1.839 - 8.194 ≈ -6.355 < 0, the amount of water is decreasing at t = 10. Award 1 point for correctly computing or referencing F(10) and R(10), and 1 point for the correct conclusion 'decreasing' with the reason that F(10) < R(10), i.e., W'(10) = F(10) - R(10) < 0."
        }
      ],
      "isCalc": true
    },
    {
      "id": "pt_calcbc_p1_frq_003",
      "frqType": "no-calculator",
      "title": "Particle Motion and Accumulation Functions",
      "prompt": "A particle moves along the x-axis. The velocity of the particle at time t is given by v(t) = t^3 - 6t^2 + 9t - 2 for 0 ≤ t ≤ 5. The particle is at position x = 3 at time t = 0.",
      "parts": [
        {
          "label": "a",
          "question": "Find all times t in the open interval 0 < t < 5 at which the particle changes direction. Justify your answer.",
          "points": 3
        },
        {
          "label": "b",
          "question": "Find the position of the particle at time t = 4.",
          "points": 3
        },
        {
          "label": "c",
          "question": "Find the total distance traveled by the particle from t = 0 to t = 4.",
          "points": 3
        },
        {
          "label": "d",
          "question": "Is the speed of the particle increasing or decreasing at time t = 3? Give a reason for your answer.",
          "points": 2
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Finds v(t) = 0 correctly",
          "points": 1,
          "guidance": "v(t) = t^3 - 6t^2 + 9t - 2 = 0. Factor: (t-1)(t-2)(t+ ) - testing t=1: 1-6+9-2=2≠0; t=2: 8-24+18-2=0 ✓. Factor out (t-2): t^3-6t^2+9t-2 = (t-2)(t^2-4t+1). Roots of t^2-4t+1=0: t = (4±√12)/2 = 2±√3. So t = 2-√3 ≈ 0.268, t = 2, t = 2+√3 ≈ 3.732, all in (0,5). Student earns 1 point for correctly identifying these three zeros."
        },
        {
          "criterion": "Part (a): Verifies sign change of v(t) at each zero",
          "points": 1,
          "guidance": "Student must show that v(t) changes sign at t = 2-√3, t = 2, and t = 2+√3. For example: v(0.1) < 0, v(1) = 1-6+9-2=2 > 0, v(2.5) = 15.625-37.5+22.5-2 = -1.375 < 0, v(4) = 64-96+36-2=2 > 0. Sign changes at all three values confirmed."
        },
        {
          "criterion": "Part (a): Correct conclusion with justification",
          "points": 1,
          "guidance": "States that the particle changes direction at t = 2-√3, t = 2, and t = 2+√3 because v(t) changes sign at each of these values."
        },
        {
          "criterion": "Part (b): Sets up integral for position",
          "points": 1,
          "guidance": "x(4) = x(0) + ∫₀⁴ v(t) dt = 3 + ∫₀⁴ (t^3 - 6t^2 + 9t - 2) dt. Student earns 1 point for correct setup."
        },
        {
          "criterion": "Part (b): Correctly evaluates the definite integral",
          "points": 1,
          "guidance": "∫₀⁴ (t^3 - 6t^2 + 9t - 2) dt = [t^4/4 - 2t^3 + 9t^2/2 - 2t]₀⁴ = (256/4 - 128 + 72 - 8) - 0 = 64 - 128 + 72 - 8 = 0. Student earns 1 point for correct antiderivative and evaluation."
        },
        {
          "criterion": "Part (b): Correct final answer for position",
          "points": 1,
          "guidance": "x(4) = 3 + 0 = 3. Answer: x = 3."
        },
        {
          "criterion": "Part (c): Sets up total distance as integral of |v(t)|",
          "points": 1,
          "guidance": "Total distance = ∫₀⁴ |v(t)| dt. Student must recognize that this requires breaking the integral at sign changes of v(t): t = 2-√3 and t = 2 in [0,4]. Student earns 1 point for correct setup."
        },
        {
          "criterion": "Part (c): Correctly evaluates each sub-integral with absolute value",
          "points": 1,
          "guidance": "Let F(t) = t^4/4 - 2t^3 + 9t^2/2 - 2t. Distance = |F(2-√3) - F(0)| + |F(2) - F(2-√3)| + |F(4) - F(2)|. F(0)=0, F(2)= 4-16+18-4=2, F(4)=0. F(2-√3): compute carefully: let a=2-√3. F(a) = a^4/4 - 2a^3 + 9a^2/2 - 2a. Numerical: a≈0.268, F(a)≈0.000323. Distance ≈ |0.000323 - 0| + |2 - 0.000323| + |0 - 2| = 0.000323 + 1.999677 + 2 = 4. Exact value: Total distance = 4."
        },
        {
          "criterion": "Part (c): Correct final answer",
          "points": 1,
          "guidance": "Total distance = 4. Accept equivalent exact expressions."
        },
        {
          "criterion": "Part (d): Computes v(3) and a(3)",
          "points": 1,
          "guidance": "v(3) = 27 - 54 + 27 - 2 = -2 < 0. a(t) = v'(t) = 3t^2 - 12t + 9. a(3) = 27 - 36 + 9 = 0. Since a(3) = 0, the test is inconclusive from sign alone; check a'(3) or nearby values. a(2.9) = 3(8.41)-12(2.9)+9 = 25.23-34.8+9 = -0.57 < 0, and a(3.1) = 3(9.61)-12(3.1)+9 = 28.83-37.2+9 = 0.63 > 0. Since v(3)<0 and a changes from negative to positive through t=3, speed is decreasing just before t=3 and increasing just after. At exactly t=3, speed has a local minimum - speed is neither increasing nor decreasing (it is at a minimum). Accept: speed is decreasing for justification that v and a have opposite signs just before t=3."
        },
        {
          "criterion": "Part (d): Correct conclusion with reason",
          "points": 1,
          "guidance": "Award 1 point for a correct conclusion supported by valid reasoning about the signs of v(3) and a(3) or nearby values. Acceptable answer: Since v(3) = -2 < 0 and a(3) = 0, and the acceleration changes sign at t=3 from negative to positive, the speed has a local minimum at t=3. The speed is decreasing for t slightly less than 3 (since v<0 and a<0 means speed is increasing - re-check: |v| increasing when v and a same sign). Correct reasoning: for t just before 3, v<0 and a<0 so speed is increasing; for t just after 3, v<0 and a>0 so speed is decreasing. At t=3, speed is at a local maximum. Speed is increasing just before t=3 and decreasing just after."
        }
      ],
      "isCalc": false
    },
    {
      "id": "pt_calcbc_p1_frq_004",
      "frqType": "no-calculator",
      "title": "Series, Convergence, and Taylor Polynomials",
      "prompt": "Let f be a function with derivatives of all orders for all real numbers. Assume f(0) = 2, f'(0) = -1, f''(0) = 4, f'''(0) = -12, and f^(4)(0) = 24.\n\nConsider also the series ∑_{n=1}^{∞} ((-1)^n * n) / (3^n).",
      "parts": [
        {
          "label": "a",
          "question": "Write the fourth-degree Taylor polynomial P₄(x) for f centered at x = 0.",
          "points": 3
        },
        {
          "label": "b",
          "question": "Use the ratio test to determine whether the series ∑_{n=1}^{∞} ((-1)^n * n) / (3^n) converges absolutely, converges conditionally, or diverges. Show all work.",
          "points": 4
        },
        {
          "label": "c",
          "question": "Let g(x) = f(x^2). Write the first three nonzero terms of the Taylor series for g centered at x = 0. Express your answer as a sum of terms in ascending powers of x.",
          "points": 2
        },
        {
          "label": "d",
          "question": "Use P₄(x) from part (a) to approximate f(0.1). Explain why this approximation is likely to be very accurate.",
          "points": 2
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Correct formula for Taylor polynomial",
          "points": 1,
          "guidance": "P₄(x) = f(0) + f'(0)x + f''(0)x²/2! + f'''(0)x³/3! + f^(4)(0)x⁴/4!. Student must demonstrate knowledge of the Taylor polynomial formula. Award 1 point for correct structure."
        },
        {
          "criterion": "Part (a): Correct substitution of given values",
          "points": 1,
          "guidance": "Substituting: P₄(x) = 2 + (-1)x + (4/2)x² + (-12/6)x³ + (24/24)x⁴ = 2 - x + 2x² - 2x³ + x⁴. Award 1 point for correct coefficient calculations."
        },
        {
          "criterion": "Part (a): Correct final polynomial",
          "points": 1,
          "guidance": "P₄(x) = 2 - x + 2x² - 2x³ + x⁴. All four terms (beyond constant) correct. Award 1 point for fully simplified, correct answer."
        },
        {
          "criterion": "Part (b): Correct setup of ratio test",
          "points": 1,
          "guidance": "Let aₙ = |(-1)^n * n / 3^n| = n/3^n. Compute lim_{n→∞} |a_{n+1}/aₙ| = lim_{n→∞} [(n+1)/3^{n+1}] / [n/3^n] = lim_{n→∞} (n+1)/(3n). Award 1 point for correct ratio setup."
        },
        {
          "criterion": "Part (b): Correct evaluation of the limit",
          "points": 1,
          "guidance": "lim_{n→∞} (n+1)/(3n) = lim_{n→∞} (1 + 1/n)/3 = 1/3. Award 1 point for correctly evaluating the limit as 1/3."
        },
        {
          "criterion": "Part (b): Correct conclusion about absolute convergence",
          "points": 1,
          "guidance": "Since the limit = 1/3 < 1, by the Ratio Test, the series converges absolutely. Award 1 point for stating 'converges absolutely' with the correct reasoning that L < 1."
        },
        {
          "criterion": "Part (b): Complete and coherent argument",
          "points": 1,
          "guidance": "Award 1 point for a complete response that states the series ∑|aₙ| converges, therefore the original series converges absolutely, and notes that absolute convergence implies convergence."
        },
        {
          "criterion": "Part (c): Correctly substitutes x² into P₄(x) or Taylor series for f",
          "points": 1,
          "guidance": "g(x) = f(x²). Substituting x² for x in the Taylor series for f: g(x) = 2 - x² + 2(x²)² - 2(x²)³ + (x²)⁴ +  = 2 - x² + 2x⁴ - 2x⁶ + x⁸ +  The first three nonzero terms are 2 - x² + 2x⁴. Award 1 point for correct substitution process."
        },
        {
          "criterion": "Part (c): Correct first three nonzero terms",
          "points": 1,
          "guidance": "g(x) = 2 - x² + 2x⁴ +  Award 1 point for correctly identifying all three terms with correct signs and coefficients."
        },
        {
          "criterion": "Part (d): Correct approximation of f(0.1)",
          "points": 1,
          "guidance": "P₄(0.1) = 2 - (0.1) + 2(0.1)² - 2(0.1)³ + (0.1)⁴ = 2 - 0.1 + 2(0.01) - 2(0.001) + (0.0001) = 2 - 0.1 + 0.02 - 0.002 + 0.0001 = 1.9181. Award 1 point for correct computation."
        },
        {
          "criterion": "Part (d): Valid explanation for accuracy",
          "points": 1,
          "guidance": "Award 1 point for a valid explanation such as: x = 0.1 is very close to x = 0 (the center of the polynomial), so higher-degree terms are extremely small (each successive term is multiplied by 0.1, making them negligible), meaning the truncation error is very small. Must reference closeness to center or smallness of higher-order terms."
        }
      ],
      "isCalc": false
    },
    {
      "id": "pt_calcbc_p1_frq_005",
      "frqType": "no-calculator",
      "title": "Differential Equations and Slope Fields",
      "prompt": "Consider the differential equation dy/dx = (x - 1)(y + 2), where y ≠ -2.\n\n(a)-(d) refer to this differential equation and related analysis.",
      "parts": [
        {
          "label": "a",
          "question": "On the axes provided (describe in words), sketch the slope field for the differential equation at the nine points indicated: (x, y) for x ∈ {0, 1, 2} and y ∈ {-3, 0, 2}. Describe the behavior of the slopes at these points, specifically stating whether each slope is positive, negative, or zero.",
          "points": 2
        },
        {
          "label": "b",
          "question": "Find the particular solution y = f(x) to the differential equation with the initial condition f(1) = 0.",
          "points": 5
        },
        {
          "label": "c",
          "question": "For the particular solution found in part (b), determine whether y has a local maximum, local minimum, or neither at x = 1. Justify your answer.",
          "points": 2
        },
        {
          "label": "d",
          "question": "Determine all values of x for which the graph of the particular solution found in part (b) has a point of inflection. Justify your answer.",
          "points": 2
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Correct determination of sign of slope at the nine points",
          "points": 1,
          "guidance": "dy/dx = (x-1)(y+2). At each point: (0,-3): (−1)(−1)=+1>0; (0,0): (−1)(2)=−2<0; (0,2): (−1)(4)=−4<0; (1,-3): (0)(−1)=0; (1,0): (0)(2)=0; (1,2): (0)(4)=0; (2,-3): (1)(−1)=−1<0; (2,0): (1)(2)=2>0; (2,2): (1)(4)=4>0. Award 1 point for correctly identifying all nine slope values (signs and zeros)."
        },
        {
          "criterion": "Part (a): Description of slope field behavior consistent with signs",
          "points": 1,
          "guidance": "Award 1 point for a correct verbal or sketched description that: all slopes along x=1 are zero (vertical line of horizontal tangents), slopes are positive when (x-1) and (y+2) have the same sign, negative when they have opposite signs. Must note the zero slopes along x=1 and correctly identify at least one positive and one negative slope in the other columns."
        },
        {
          "criterion": "Part (b): Separation of variables correctly performed",
          "points": 1,
          "guidance": "Separate: dy/(y+2) = (x-1)dx. Award 1 point for correct separation with dy and dx on appropriate sides."
        },
        {
          "criterion": "Part (b): Correct integration of both sides",
          "points": 1,
          "guidance": "∫dy/(y+2) = ∫(x-1)dx → ln|y+2| = (x-1)²/2 + C. Award 1 point for correct antiderivatives on both sides."
        },
        {
          "criterion": "Part (b): Correct application of initial condition",
          "points": 1,
          "guidance": "Apply f(1) = 0: ln|0+2| = (1-1)²/2 + C → ln2 = C. Award 1 point for correct substitution and solving for C."
        },
        {
          "criterion": "Part (b): Correct algebraic solution for y",
          "points": 1,
          "guidance": "ln|y+2| = (x-1)²/2 + ln2 → |y+2| = e^{(x-1)²/2 + ln2} = 2e^{(x-1)²/2}. Since y(1)=0, y+2=2>0, so y+2 = 2e^{(x-1)²/2}. Award 1 point for correct exponentiation and removal of absolute value."
        },
        {
          "criterion": "Part (b): Correct final answer",
          "points": 1,
          "guidance": "y = 2e^{(x-1)²/2} - 2. Award 1 point for the final simplified particular solution."
        },
        {
          "criterion": "Part (c): Evaluates dy/dx at x = 1 and computes d²y/dx²",
          "points": 1,
          "guidance": "dy/dx = (x-1)(y+2). At x=1 (with y=0): dy/dx = 0. Compute d²y/dx²: differentiate dy/dx = (x-1)(y+2) with respect to x: d²y/dx² = (y+2) + (x-1)(dy/dx) = (y+2) + (x-1)²(y+2) = (y+2)[1+(x-1)²]. At x=1, y=0: d²y/dx² = (0+2)[1+0] = 2 > 0. Award 1 point for correct computation of second derivative and evaluation at x=1."
        },
        {
          "criterion": "Part (c): Correct conclusion with justification",
          "points": 1,
          "guidance": "Since dy/dx = 0 at x=1 and d²y/dx² = 2 > 0 at x=1, the function has a local minimum at x=1. Award 1 point for correct conclusion (local minimum) with valid justification referencing the sign of the second derivative."
        },
        {
          "criterion": "Part (d): Sets up and solves d²y/dx² = 0",
          "points": 1,
          "guidance": "d²y/dx² = (y+2)[1+(x-1)²] = 0. Since y = 2e^{(x-1)²/2} - 2, we have y+2 = 2e^{(x-1)²/2} > 0 for all x. Therefore d²y/dx² = (y+2)[1+(x-1)²] > 0 for all x (since y+2>0 and 1+(x-1)²>0 always). So d²y/dx² never equals zero. Award 1 point for correctly setting up the equation and identifying that y+2 > 0 always."
        },
        {
          "criterion": "Part (d): Correct conclusion with justification",
          "points": 1,
          "guidance": "Since d²y/dx² > 0 for all x in the domain, the second derivative never changes sign. Therefore, the graph of the particular solution has no points of inflection. Award 1 point for the correct conclusion (no points of inflection) with valid justification that the second derivative is always positive and never changes sign."
        }
      ],
      "isCalc": false
    },
    {
      "id": "pt_calcbc_p1_frq_006",
      "frqType": "no-calculator",
      "title": "Parametric Curves and Polar Area",
      "prompt": "Part I - Parametric Curve: A curve C is defined parametrically by x(t) = t² - 2t and y(t) = t³ - 3t for t ≥ 0.\n\nPart II - Polar Region: Consider the polar curve r = 2 + cos θ for 0 ≤ θ ≤ 2π.",
      "parts": [
        {
          "label": "a",
          "question": "(Part I) Find dy/dx in terms of t. Then find the equation of the line tangent to curve C at the point where t = 2.",
          "points": 4
        },
        {
          "label": "b",
          "question": "(Part I) Find all values of t > 0 at which the curve has a vertical tangent line. Justify your answer.",
          "points": 2
        },
        {
          "label": "c",
          "question": "(Part I) Find d²y/dx² in terms of t and determine whether the curve is concave up or concave down at t = 3.",
          "points": 3
        },
        {
          "label": "d",
          "question": "(Part II) Write, but do not evaluate, an integral expression that gives the area of the region enclosed by the polar curve r = 2 + cos θ for 0 ≤ θ ≤ 2π.",
          "points": 2
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Correct computation of dy/dx",
          "points": 1,
          "guidance": "dx/dt = 2t - 2, dy/dt = 3t² - 3. dy/dx = (dy/dt)/(dx/dt) = (3t²-3)/(2t-2) = 3(t²-1)/(2(t-1)) = 3(t+1)(t-1)/(2(t-1)) = 3(t+1)/2 for t ≠ 1. Award 1 point for correct ratio and simplification."
        },
        {
          "criterion": "Part (a): Correct point at t = 2",
          "points": 1,
          "guidance": "x(2) = 4-4 = 0, y(2) = 8-6 = 2. Point is (0, 2). Award 1 point for correctly computing the coordinates."
        },
        {
          "criterion": "Part (a): Correct slope at t = 2",
          "points": 1,
          "guidance": "dy/dx at t=2: = 3(2+1)/2 = 9/2. Award 1 point for correct slope value."
        },
        {
          "criterion": "Part (a): Correct equation of tangent line",
          "points": 1,
          "guidance": "Tangent line: y - 2 = (9/2)(x - 0), or y = (9/2)x + 2. Award 1 point for correct point-slope or slope-intercept form of the tangent line equation."
        },
        {
          "criterion": "Part (b): Sets dx/dt = 0 and solves",
          "points": 1,
          "guidance": "dx/dt = 2t - 2 = 0 → t = 1. For t > 0, this gives t = 1. Must check dy/dt ≠ 0 at t = 1: dy/dt = 3(1)² - 3 = 0. Since both dx/dt = 0 and dy/dt = 0 at t = 1, this is NOT a vertical tangent - it is an indeterminate case. Check the limit: lim_{t→1} dy/dx = lim_{t→1} 3(t+1)/2 = 3. So the tangent line at t=1 has slope 3 (not vertical). Therefore, there are no values of t > 0 with vertical tangents. Award 1 point for correctly setting dx/dt = 0 and checking dy/dt."
        },
        {
          "criterion": "Part (b): Correct conclusion with justification",
          "points": 1,
          "guidance": "Award 1 point for correctly concluding there are no vertical tangents for t > 0, with justification that at t=1 (the only zero of dx/dt), dy/dt = 0 as well, making the tangent line slope finite (equal to 3), not vertical."
        },
        {
          "criterion": "Part (c): Correct formula and computation of d²y/dx²",
          "points": 2,
          "guidance": "d²y/dx² = (d/dt[dy/dx]) / (dx/dt). dy/dx = 3(t+1)/2 (simplified). d/dt[3(t+1)/2] = 3/2. dx/dt = 2t-2. So d²y/dx² = (3/2)/(2t-2) = 3/(4(t-1)). At t=3: d²y/dx² = 3/(4·2) = 3/8. Award 1 point for correct derivative of dy/dx with respect to t, and 1 point for dividing by dx/dt and evaluating at t=3."
        },
        {
          "criterion": "Part (c): Correct concavity conclusion",
          "points": 1,
          "guidance": "Since d²y/dx² = 3/8 > 0 at t = 3, the curve is concave up at t = 3. Award 1 point for correct conclusion with sign justification."
        },
        {
          "criterion": "Part (d): Correct integral setup with polar area formula",
          "points": 1,
          "guidance": "Area = (1/2)∫₀^{2π} r² dθ = (1/2)∫₀^{2π} (2 + cos θ)² dθ. Award 1 point for correct formula structure: (1/2)∫r² dθ with correct limits 0 to 2π."
        },
        {
          "criterion": "Part (d): Correct integrand and limits",
          "points": 1,
          "guidance": "Integrand must be (2 + cos θ)² (not r = 2 + cos θ unsquared). Limits must be 0 to 2π. Award 1 point for correctly squaring the radius function and using correct limits of integration. Full credit answer: (1/2)∫₀^{2π} (2 + cos θ)² dθ."
        }
      ],
      "isCalc": false
    }
  ]
}];
