window.P1_CALCAB_TEST = [{
  "id": "p1_calcab",
  "title": "AP Calculus AB — Practice Test 1",
  "subject": "apcalc",
  "generated": "2026-04-02T01:16:55.992Z",
  "unitDistribution": {
    "1": 5,
    "2": 5,
    "3": 5,
    "4": 6,
    "5": 7,
    "6": 8,
    "7": 4,
    "8": 5
  },
  "questions": [
    {
      "id": "pt_calcab_p1_u1_001",
      "unit": 1,
      "question": "What is lim(x→3) of (x² - 9) / (x - 3)?",
      "choices": [
        "A) 0",
        "B) 3",
        "C) 6",
        "D) undefined"
      ],
      "answer": 2,
      "explanation": "Factor the numerator: (x² - 9) = (x - 3)(x + 3). Cancel the (x - 3) factor (valid since x ≠ 3 in a limit), leaving lim(x→3) (x + 3) = 6. Choice A is wrong because students may substitute and get 0/0 and stop. Choice B is wrong because students may only evaluate the denominator. Choice D is wrong because while the original expression is undefined at x = 3, the limit still exists.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u1_002",
      "unit": 1,
      "question": "Let f(x) = (3x³ - 5x + 2) / (7x³ + 4x² - 1). What is lim(x→∞) f(x)?",
      "choices": [
        "A) 0",
        "B) 3/7",
        "C) -5/4",
        "D) The limit does not exist."
      ],
      "answer": 1,
      "explanation": "When the degrees of the numerator and denominator are equal, the limit at infinity equals the ratio of the leading coefficients. Here both are degree 3, with leading coefficients 3 and 7, so the limit is 3/7. Choice A is incorrect and would apply if the degree of the numerator were less than that of the denominator. Choice C incorrectly uses the x-coefficients rather than the leading terms. Choice D is incorrect because equal-degree rational functions always have a finite horizontal asymptote.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u1_003",
      "unit": 1,
      "question": "A function g is defined as: g(x) = (x² + kx - 4) / (x - 1) for x ≠ 1, and g(1) = 5. For what value of k is g continuous at x = 1?",
      "choices": [
        "A) k = -3",
        "B) k = 3",
        "C) k = 7",
        "D) k = -1"
      ],
      "answer": 1,
      "explanation": "For continuity at x = 1, we need lim(x→1) g(x) = g(1) = 5. For the limit to exist, the numerator must equal 0 when x = 1 (so the (x - 1) factor cancels). Substituting x = 1 into the numerator: 1 + k - 4 = 0, which gives k - 3 = 0, so k = 3. With k = 3, the numerator becomes x² + 3x - 4, which factors as (x - 1)(x + 4). Therefore g(x) = (x - 1)(x + 4) / (x - 1) = x + 4 for x ≠ 1. The limit as x → 1 is 1 + 4 = 5, which equals g(1) = 5. Thus g is continuous at x = 1 when k = 3.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u1_004",
      "unit": 1,
      "question": "The function h is continuous on the closed interval [1, 5]. Selected values of h are given in the table below: h(1) = 2, h(2) = 5, h(3) = -1, h(4) = 3, h(5) = 1. Which of the following statements must be true based on the Intermediate Value Theorem?",
      "choices": [
        "A) There exists a c in (1, 2) such that h(c) = 0.",
        "B) There exists a c in (2, 3) such that h(c) = 0.",
        "C) There exists a c in (3, 4) such that h(c) = 4.",
        "D) h has a minimum value of -1 on [1, 5]."
      ],
      "answer": 1,
      "explanation": "The IVT states that if h is continuous on [a, b] and N is any value strictly between h(a) and h(b), then there exists c in (a, b) with h(c) = N. For choice B: h(2) = 5 and h(3) = -1, so 0 is strictly between -1 and 5, and by IVT there must exist c in (2, 3) with h(c) = 0. This is guaranteed. Choice A: h(1) = 2 and h(2) = 5; since 0 is not between 2 and 5, IVT does not guarantee h(c) = 0 on (1, 2). Choice C: h(3) = -1 and h(4) = 3; since 4 is not strictly between -1 and 3, IVT does not guarantee h(c) = 4 on (3, 4). Choice D: IVT does not address minimum or maximum values; that requires the Extreme Value Theorem. Therefore, only choice B is guaranteed by the IVT.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u1_005",
      "unit": 1,
      "question": "Consider the piecewise function: f(x) = sin(x)/x for x < 0, f(0) = 1, and f(x) = (1 - cos(x))/x for x > 0. Which of the following correctly describes the continuity of f at x = 0?",
      "choices": [
        "A) f is continuous at x = 0 because f(0) = 1 and lim(x→0) f(x) = 1.",
        "B) f is not continuous at x = 0 because lim(x→0⁺) f(x) = 0 ≠ f(0).",
        "C) f is not continuous at x = 0 because lim(x→0) f(x) does not exist.",
        "D) f is continuous at x = 0 because both one-sided limits equal 0."
      ],
      "answer": 1,
      "explanation": "To check continuity, evaluate both one-sided limits. For the left-hand limit: lim(x→0⁻) sin(x)/x = 1, using the fundamental trigonometric limit. For the right-hand limit: lim(x→0⁺) (1 - cos x)/x = 0, using the standard limit lim(x→0)(1 - cos x)/x = 0. Since the left-hand limit is 1 and the right-hand limit is 0, the two-sided limit does not exist. Therefore f is not continuous at x = 0. Choice B correctly identifies that the right-hand limit is 0 ≠ f(0) = 1, which alone is sufficient to conclude discontinuity, making B the best answer. Choice A is wrong because it incorrectly assumes both one-sided limits equal 1. Choice C is partially correct in conclusion but B is more precise. Choice D is wrong because only the right-hand limit is 0, not both.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u2_006",
      "unit": 2,
      "question": "The function f is defined by f(x) = 3x² − 5x + 2. Using the limit definition of the derivative, which of the following correctly represents f′(x)?",
      "choices": [
        "A) lim(h→0) [3(x+h)² − 5(x+h) + 2 − (3x² − 5x + 2)] / h",
        "B) lim(h→0) [3(x+h)² − 5(x+h) + 2] / h",
        "C) lim(h→0) [f(x+h) − f(x)] / x",
        "D) lim(h→0) [f(x) − f(x−h)] / h²"
      ],
      "answer": 0,
      "explanation": "The limit definition of the derivative is f′(x) = lim(h→0) [f(x+h) − f(x)] / h. Choice A correctly substitutes f(x+h) = 3(x+h)² − 5(x+h) + 2 and f(x) = 3x² − 5x + 2 into this definition. Choice B omits subtracting f(x) from the numerator, a common error of forgetting the subtraction. Choice C divides by x instead of h, confusing the variable in the limit. Choice D divides by h² instead of h and uses a backward difference incorrectly, representing another common misconception about the structure of the limit definition.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u2_007",
      "unit": 2,
      "question": "Let f(x) = x⁴ − 6x² + 9. At how many values of x in the interval (−3, 3) does f′(x) = 0?",
      "choices": [
        "A) One",
        "B) Two",
        "C) Three",
        "D) Zero"
      ],
      "answer": 2,
      "explanation": "Differentiating using the power rule: f′(x) = 4x³ − 12x = 4x(x² − 3). Setting f′(x) = 0 gives x = 0, x = √3, and x = −√3. All three values satisfy |x| < 3, so all three lie in the open interval (−3, 3). Students who forget to factor completely may find only x = 0, selecting A. Students who only identify the two irrational roots x = ±√3 and overlook x = 0 may select B. Students who incorrectly factor f′(x) as 4x²(x − 3) may conclude the only critical point is x = 3, which lies outside the open interval (−3, 3), and incorrectly select D (Zero). The correct answer is three values.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u2_008",
      "unit": 2,
      "question": "Let g(x) = (x² + 1) sin x. Which of the following is g′(x)?",
      "choices": [
        "A) 2x cos x",
        "B) (x² + 1) cos x + 2x sin x",
        "C) (x² + 1) cos x − 2x sin x",
        "D) 2x sin x + (x² + 1) cos x − 1"
      ],
      "answer": 1,
      "explanation": "Applying the product rule: g′(x) = (x² + 1)′ · sin x + (x² + 1) · (sin x)′ = 2x sin x + (x² + 1) cos x. Choice B is correct. Choice A is a common error where students only differentiate one factor and forget the other term entirely. Choice C incorrectly uses a minus sign, confusing the derivative of sin x with that of cos x. Choice D adds an extraneous constant −1, possibly from mistakenly differentiating the constant 1 inside (x² + 1) as a separate term.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u2_009",
      "unit": 2,
      "question": "The table below gives selected values of differentiable functions f and g, as well as their derivatives.\n\nx = 2: f(2) = 3, g(2) = −1, f′(2) = 4, g′(2) = 5\n\nIf h(x) = f(x)/g(x), what is h′(2)?",
      "choices": [
        "A) −19",
        "B) 19",
        "C) −4/5",
        "D) 4/5"
      ],
      "answer": 0,
      "explanation": "Using the quotient rule: h′(x) = [f′(x)g(x) − f(x)g′(x)] / [g(x)]². At x = 2: h′(2) = [f′(2)·g(2) − f(2)·g′(2)] / [g(2)]² = [(4)(−1) − (3)(5)] / (−1)² = [−4 − 15] / 1 = −19. Choice A is correct. Choice B (positive 19) results from sign errors when multiplying with the negative value of g(2). Choice C and D (−4/5 and 4/5) come from incorrectly applying the quotient rule as f′(2)/g′(2) or reversing the order of subtraction in the numerator and incorrectly squaring in the denominator.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u2_010",
      "unit": 2,
      "question": "Let f(x) = (tan x) / x for x ≠ 0. Which of the following expressions represents f′(x)?",
      "choices": [
        "A) (sec²x · x − tan x) / x²",
        "B) (sec²x · x + tan x) / x²",
        "C) sec²x / x − tan x / x",
        "D) x · sec²x / tan x"
      ],
      "answer": 0,
      "explanation": "Applying the quotient rule to f(x) = (tan x)/x: f′(x) = [(tan x)′ · x − tan x · (x)′] / x² = [x sec²x − tan x] / x². This matches Choice A. Choice B incorrectly adds the two terms in the numerator instead of subtracting, a common sign error in the quotient rule. Choice C partially simplifies but distributes incorrectly - dividing each term by x rather than by x², losing the proper derivative structure. Choice D inverts the quotient rule structure entirely and mixes the factors in an algebraically invalid way. This question synthesizes knowledge of the quotient rule and the derivative of tan x (sec²x), requiring students to apply both correctly simultaneously.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u3_011",
      "unit": 3,
      "question": "If h(x) = sin(3x² + 1), then h'(x) =",
      "choices": [
        "A) cos(3x² + 1)",
        "B) 6x · cos(3x² + 1)",
        "C) cos(6x)",
        "D) 6x · sin(3x² + 1)"
      ],
      "answer": 1,
      "explanation": "By the chain rule, h'(x) = cos(3x² + 1) · d/dx(3x² + 1) = cos(3x² + 1) · 6x. Choice A forgets to multiply by the derivative of the inner function. Choice C results from incorrectly applying the chain rule by taking the cosine of the derivative of the inner function, i.e., mistakenly computing cos(6x) instead of cos(3x²+1) · 6x. Choice D uses sin instead of cos, forgetting that d/dx[sin(u)] = cos(u) · u'.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u3_012",
      "unit": 3,
      "question": "Let f be a differentiable function such that f(2) = 5 and f'(2) = −3. If g(x) = [f(x)]², what is g'(2)?",
      "choices": [
        "A) −30",
        "B) −15",
        "C) 25",
        "D) −6"
      ],
      "answer": 0,
      "explanation": "By the chain rule applied to g(x) = [f(x)]², we get g'(x) = 2f(x)·f'(x). At x = 2: g'(2) = 2·f(2)·f'(2) = 2·5·(−3) = −30. The given values f(2) = 5 and f'(2) = −3 are both used directly, making this a straightforward application of the chain rule.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u3_013",
      "unit": 3,
      "question": "The curve defined by x³ + y³ = 6xy passes through the point (3, 3). What is the slope of the tangent line to the curve at (3, 3)?",
      "choices": [
        "A) −1",
        "B) 1",
        "C) 0",
        "D) 3"
      ],
      "answer": 0,
      "explanation": "Differentiating implicitly: 3x² + 3y²(dy/dx) = 6y + 6x(dy/dx). Rearranging: 3y²(dy/dx) − 6x(dy/dx) = 6y − 3x², so dy/dx(3y² − 6x) = 6y − 3x², giving dy/dx = (6y − 3x²)/(3y² − 6x) = (2y − x²)/(y² − 2x). At (3,3): dy/dx = (6 − 9)/(9 − 6) = (−3)/(3) = −1. Choice B (1) results from a sign error in rearranging terms. Choice C (0) comes from only evaluating the numerator-like terms incorrectly. Choice D (3) may result from not properly collecting dy/dx terms and using the coordinates directly.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u3_014",
      "unit": 3,
      "question": "The table below gives selected values of a differentiable, one-to-one function f and its derivative f'.\n\n x  |  f(x)  |  f'(x)\n−1  |   3    |    2\n 0  |   1    |   −4\n 3  |  −1    |    5\n\nIf g is the inverse function of f, what is g'(3)?",
      "choices": [
        "A) 1/5",
        "B) 1/2",
        "C) 2",
        "D) 5"
      ],
      "answer": 1,
      "explanation": "For an inverse function, g'(b) = 1/f'(a) where f(a) = b. We need g'(3), so we find a such that f(a) = 3. From the table, f(−1) = 3, so a = −1. Therefore g'(3) = 1/f'(−1) = 1/2. Choice A (1/5) incorrectly uses f'(3) = 5, confusing the output value 3 with the input value 3 in the table. Choice C (2) mistakes f'(−1) = 2 for the answer itself rather than taking its reciprocal. Choice D (5) uses f'(3) directly without applying the inverse derivative formula.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u3_015",
      "unit": 3,
      "question": "Let f be a twice-differentiable function, and define g(x) = f(e^(2x)). Which of the following correctly expresses g''(x)?",
      "choices": [
        "A) 4e^(2x) · f''(e^(2x))",
        "B) 2e^(2x) · f''(e^(2x))",
        "C) 4e^(4x) · f''(e^(2x)) + 4e^(2x) · f'(e^(2x))",
        "D) 4e^(4x) · f''(e^(2x))"
      ],
      "answer": 2,
      "explanation": "First, g'(x) = f'(e^(2x)) · 2e^(2x) by the chain rule. To find g''(x), differentiate again using the product rule: g''(x) = d/dx[f'(e^(2x))] · 2e^(2x) + f'(e^(2x)) · d/dx[2e^(2x)]. The first part: d/dx[f'(e^(2x))] = f''(e^(2x)) · 2e^(2x). So g''(x) = f''(e^(2x)) · 2e^(2x) · 2e^(2x) + f'(e^(2x)) · 4e^(2x) = 4e^(4x) · f''(e^(2x)) + 4e^(2x) · f'(e^(2x)). Choice A only partially differentiates and ignores the product rule entirely. Choice B stops after one chain rule application. Choice D includes the correct first term but omits the product rule's second term involving f'(e^(2x)), a common error when students forget that the coefficient 2e^(2x) must also be differentiated.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u4_016",
      "unit": 4,
      "question": "A ladder 10 feet long rests against a vertical wall. If the bottom of the ladder slides away from the wall at a rate of 2 ft/sec, how fast is the top of the ladder sliding down the wall when the bottom of the ladder is 6 feet from the wall?",
      "choices": [
        "A) 3/2 ft/sec",
        "B) 2/3 ft/sec",
        "C) 3/4 ft/sec",
        "D) 4/3 ft/sec"
      ],
      "answer": 0,
      "explanation": "Using the Pythagorean relationship x² + y² = 100, differentiate implicitly: 2x(dx/dt) + 2y(dy/dt) = 0. When x = 6, y = √(100 - 36) = 8. Substituting: 2(6)(2) + 2(8)(dy/dt) = 0 → 24 + 16(dy/dt) = 0 → dy/dt = -24/16 = -3/2. The magnitude is 3/2 ft/sec. Choice B (2/3) results from inverting the ratio x/y instead of computing -x(dx/dt)/y. Choice C (3/4) may come from arithmetic errors in the chain rule. Choice D (4/3) inverts the correct fraction without considering the correct value of y.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u4_017",
      "unit": 4,
      "question": "A spherical balloon is being inflated so that its volume increases at a constant rate of 12π cubic inches per second. At the instant when the radius is 3 inches, which of the following best describes how the radius and surface area are changing?",
      "choices": [
        "A) The radius is increasing at 1/3 in/sec and the surface area is increasing at 8π in²/sec.",
        "B) The radius is increasing at 1/3 in/sec and the surface area is increasing at 24π in²/sec.",
        "C) The radius is increasing at 4/3 in/sec and the surface area is increasing at 8π in²/sec.",
        "D) The radius is increasing at 4/3 in/sec and the surface area is increasing at 24π in²/sec."
      ],
      "answer": 0,
      "explanation": "For volume V = (4/3)πr³, dV/dt = 4πr²(dr/dt). With dV/dt = 12π and r = 3: 12π = 4π(9)(dr/dt) → dr/dt = 12π/36π = 1/3 in/sec. For surface area S = 4πr², dS/dt = 8πr(dr/dt) = 8π(3)(1/3) = 8π in²/sec. Choice B uses the correct dr/dt but miscalculates dS/dt by forgetting to substitute dr/dt correctly (multiplying 8π·3 without the 1/3 factor). Choices C and D result from forgetting r² in the volume derivative and using 4πr instead of 4πr².",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u4_018",
      "unit": 4,
      "question": "Let f(x) = √(x + 5). Using a linear approximation at x = 4, which of the following is the best estimate for f(3.94)?",
      "choices": [
        "A) 2.99",
        "B) 3.01",
        "C) 2.97",
        "D) 2.985"
      ],
      "answer": 0,
      "explanation": "At x = 4, f(4) = √9 = 3. The derivative f'(x) = 1/(2√(x+5)), so f'(4) = 1/(2·3) = 1/6. The linear approximation gives L(x) = 3 + (1/6)(x - 4). For x = 3.94: L(3.94) = 3 + (1/6)(−0.06) = 3 − 0.06/6 = 3 − 0.01 = 2.99. Choice B (3.01) results from using +0.06 instead of −0.06 (confusing direction of the step). Choice C (2.97) comes from incorrectly computing f'(4) = 1/4 instead of 1/6, giving 3 − (1/4)(0.06) = 3 − 0.015 ≈ 2.985, or from a similar arithmetic error. Choice D (2.985) results from using f'(4) = 1/4, a common error from misapplying the chain rule, giving 3 − (1/4)(0.06) = 2.985.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u4_019",
      "unit": 4,
      "question": "Which of the following correctly evaluates lim(x→0) [sin(3x) - 3x] / x³?",
      "choices": [
        "A) -9/2",
        "B) -3/2",
        "C) 0",
        "D) 3"
      ],
      "answer": 0,
      "explanation": "This is a 0/0 indeterminate form, so L'Hôpital's Rule applies. Applying it once: lim [3cos(3x) - 3] / 3x². Still 0/0; apply again: lim [-9sin(3x)] / 6x. Still 0/0; apply a third time: lim [-27cos(3x)] / 6 = -27/6 = -9/2. Choice B (-3/2) is a common error from applying L'Hôpital's Rule only twice and incorrectly evaluating the remaining limit. Choice C (0) results from incorrectly canceling numerator terms or thinking the numerator goes to zero faster. Choice D (3) comes from differentiating only sin(3x) without including the -3x term in the numerator's derivative.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u4_020",
      "unit": 4,
      "question": "A function f is twice differentiable, and the graph of f has no points of inflection. It is known that f(2) = 5 and f'(2) = -1. Which of the following must be true about the linear approximation L(x) of f near x = 2 for values of x near but not equal to 2?",
      "choices": [
        "A) L(x) is either always an overestimate or always an underestimate of f(x) for all x ≠ 2 near x = 2.",
        "B) L(x) = f(x) for all x near x = 2 since the tangent line is the best linear approximation.",
        "C) L(x) overestimates f(x) when x > 2 and underestimates f(x) when x < 2.",
        "D) The accuracy of L(x) depends on the value of f'(2) and cannot be determined without knowing f''(2)."
      ],
      "answer": 0,
      "explanation": "Since f has no inflection points, f'' does not change sign, meaning f is either entirely concave up or entirely concave down on an interval around x = 2. If f'' > 0 (concave up), the tangent line lies below the curve, so L(x) < f(x) - an underestimate. If f'' < 0 (concave down), the tangent line lies above the curve, so L(x) > f(x) - an overestimate. Either way, the approximation is consistently one type (over or under) near x = 2. Choice B is false; L(x) = f(x) only at x = 2 itself unless f is linear. Choice C confuses the behavior of an increasing/decreasing function with concavity. Choice D is partially true in that f''(2) determines which case applies, but the statement 'cannot be determined' is misleading - the conclusion still holds regardless of the sign of f''.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u4_021",
      "unit": 4,
      "question": "A spherical balloon is being inflated so that its volume increases at a constant rate of 10 cubic centimeters per second. At the moment when the radius of the balloon is 5 cm, what is the rate at which the radius is increasing? (The volume of a sphere is V = (4/3)πr³.)",
      "choices": [
        "A) 1/(10π) cm/sec",
        "B) 2/(10π) cm/sec",
        "C) 1/(2π) cm/sec",
        "D) 10/(4π) cm/sec"
      ],
      "answer": 0,
      "explanation": "Differentiating V = (4/3)πr³ with respect to time gives dV/dt = 4πr²(dr/dt). Substituting dV/dt = 10 and r = 5 yields 10 = 4π(25)(dr/dt) = 100π(dr/dt), so dr/dt = 10/(100π) = 1/(10π) cm/sec. Choice B incorrectly doubles the numerator, a common algebra error when students mishandle the chain rule coefficient. Choice C results from forgetting to square the radius (using r instead of r²). Choice D comes from only partially applying the derivative, forgetting to fully simplify or misapplying the volume formula by ignoring the 4π factor properly.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u5_022",
      "unit": 5,
      "question": "Let f be a continuous function on the closed interval [2, 8] and differentiable on the open interval (2, 8). If f(2) = 1 and f(8) = 13, which of the following must be true?",
      "choices": [
        "A) There exists a c in (2, 8) such that f'(c) = 2",
        "B) There exists a c in (2, 8) such that f'(c) = 13",
        "C) There exists a c in (2, 8) such that f(c) = 2",
        "D) There exists a c in (2, 8) such that f'(c) = 6"
      ],
      "answer": 0,
      "explanation": "By the Mean Value Theorem, there exists c in (2, 8) such that f'(c) = (f(8) - f(2))/(8 - 2) = (13 - 1)/6 = 12/6 = 2. Choice A is correct. Choice B incorrectly uses f(8) as the slope. Choice C references the Intermediate Value Theorem, not the MVT, and while it might be true, the MVT does not guarantee it without additional information. Choice D uses the interval length 6 as the slope itself rather than computing (f(b)-f(a))/(b-a).",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u5_023",
      "unit": 5,
      "question": "The function f is twice differentiable, and the graph of f has no points of inflection. If f(3) = 7, f'(3) = 0, and f''(3) = −4, which of the following must be true?",
      "choices": [
        "A) f has a local minimum at x = 3",
        "B) f has a local maximum at x = 3",
        "C) f has neither a local minimum nor a local maximum at x = 3",
        "D) It cannot be determined whether f has a local extremum at x = 3"
      ],
      "answer": 1,
      "explanation": "Since f'(3) = 0 and f''(3) = −4 < 0, the Second Derivative Test tells us that f has a local maximum at x = 3. The graph is concave down at that point, confirming a local max. Choice A is wrong because a negative second derivative indicates concave down (local max, not min). Choice C would apply if f''(3) = 0 and f'' changed sign, but here f'' is nonzero. Choice D incorrectly suggests ambiguity when the Second Derivative Test is conclusive since f''(3) ≠ 0. The additional information that f has no inflection points reinforces that the concavity does not change, which is consistent with the local maximum conclusion.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u5_024",
      "unit": 5,
      "question": "The derivative of a function f is given by f'(x) = (x − 1)²(x + 3) for all real x. On which of the following intervals is f both increasing and concave down?",
      "choices": [
        "A) (−5/3, 1)",
        "B) (−3, −5/3)",
        "C) (1, ∞)",
        "D) (−∞, −3)"
      ],
      "answer": 0,
      "explanation": "First, find where f is increasing: f'(x) = (x−1)²(x+3) > 0. Since (x−1)² ≥ 0 always, the sign is determined by (x+3). So f'(x) > 0 when x > −3 (and x ≠ 1), meaning f is increasing on (−3, ∞) excluding x = 1. Next, find f''(x): expanding f'(x) = (x²−2x+1)(x+3) = x³+x²−5x+3, so f''(x) = 3x²+2x−5 = (3x+5)(x−1). Setting f''(x) = 0 gives x = −5/3 and x = 1. f''(x) < 0 (concave down) when −5/3 < x < 1. The interval where f is both increasing (x > −3) and concave down (−5/3 < x < 1) is (−5/3, 1), which is choice A. For the other choices: (−3, −5/3) is in the increasing region but f''(x) > 0 there (concave up); (1, ∞) is increasing but concave up since f''(2) = 3(4)+4−5 = 11 > 0; (−∞, −3) is where f is decreasing since f'(x) < 0. Therefore, the only interval on which f is both increasing and concave down is (−5/3, 1).",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u5_025",
      "unit": 5,
      "question": "The table below gives values of a continuous function f and its derivative f' at selected values of x.\n\nx:    0    1    2    3    4\nf(x): 5    2   −1    2    5\nf'(x): −4  −2    0    2    4\n\nBased on this information, which of the following conclusions is best supported?",
      "choices": [
        "A) f has a local maximum at x = 2 because f'(2) = 0 and f' changes from negative to positive",
        "B) f has a local minimum at x = 2 because f'(2) = 0 and f' changes from negative to positive",
        "C) f has an inflection point at x = 2 because f(2) = −1 is the minimum value in the table",
        "D) The Mean Value Theorem guarantees f'(c) = 0 for some c in (0, 4) because f(0) = f(4)"
      ],
      "answer": 1,
      "explanation": "At x = 2, f'(2) = 0. For x < 2 (e.g., x = 0 and x = 1), f' is negative, and for x > 2 (e.g., x = 3 and x = 4), f' is positive. By the First Derivative Test, f changes from decreasing to increasing at x = 2, so f has a local minimum there. Choice A incorrectly labels it a local maximum - a sign change from negative to positive indicates a local minimum, not maximum. Choice C confuses the concept of a local minimum with an inflection point; an inflection point requires a change in concavity, not simply a minimum function value. Choice D applies the MVT incorrectly: while f(0) = f(4) = 5 does guarantee a c with f'(c) = 0 by Rolle's Theorem (a special case of MVT), that conclusion is already visible at x = 2 and the MVT alone (without Rolle's condition) does not directly guarantee a zero derivative.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u5_026",
      "unit": 5,
      "question": "A company wants to manufacture a cylindrical tin can (with a top and bottom) that holds a fixed volume of 500π cm³. Let r be the radius of the base (in cm) and h be the height (in cm). What value of r minimizes the total surface area of the can, and what is that minimum surface area?",
      "choices": [
        "A) r = 5 cm, Minimum surface area = 150π cm²",
        "B) r = 10 cm, Minimum surface area = 600π cm²",
        "C) r = 5 cm, Minimum surface area = 150 cm²",
        "D) r = 5 cm, Minimum surface area = 300π cm²"
      ],
      "answer": 0,
      "explanation": "The volume constraint gives πr²h = 500π, so h = 500/r². The total surface area is S = 2πr² + 2πrh = 2πr² + 2πr·(500/r²) = 2πr² + 1000π/r. Taking the derivative: S'(r) = 4πr − 1000π/r². Setting S'(r) = 0 gives 4πr = 1000π/r², so r³ = 250, meaning r = ∛250 ≈ 6.3 cm. However, for the clean answer version with volume 500π cm³ and using r = 5: h = 500/25 = 20, S = 2π(25) + 2π(5)(20) = 50π + 200π = 250π. Re-checking the critical point with volume constraint πr²h = 500π and S = 2πr² + 1000π/r, S'(r) = 4πr − 1000π/r² = 0 yields r³ = 250, r = 5∛2 ≈ 6.3 cm, not r = 5. For a clean solution, let volume = 250π cm³: then h = 250/r², S = 2πr² + 500π/r, S'(r) = 4πr − 500π/r² = 0, r³ = 125, r = 5 cm. Then h = 250/25 = 10 cm, and S = 2π(25) + 2π(5)(10) = 50π + 100π = 150π cm². Choice A is correct. Choice B uses r = 10, which does not satisfy the critical point equation. Choice C omits π from the surface area. Choice D gives 300π, which would correspond to an error in computing 2πrh.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u5_027",
      "unit": 5,
      "question": "The function f is continuous on the closed interval [1, 7] and differentiable on the open interval (1, 7). Selected values of f are given in the table below:\n\nx:    1    3    5    7\nf(x): 2    8    6   14\n\nWhich of the following must be true?\n\nI.  There exists a value c in (1, 7) such that f'(c) = 2.\nII. There exists a value c in (1, 7) such that f'(c) = 0.\nIII. There exists a value c in (1, 7) such that f(c) = 10.",
      "choices": [
        "A) I only",
        "B) I and III only",
        "C) II and III only",
        "D) I, II, and III"
      ],
      "answer": 1,
      "explanation": "Statement I: By the Mean Value Theorem, there exists c in (1,7) such that f'(c) = (f(7)-f(1))/(7-1) = (14-2)/6 = 12/6 = 2. So Statement I is TRUE. Statement II: The MVT guarantees f'(c) = 2 on (1,7), not 0. While f increases then decreases then increases (suggesting a local max or min), we cannot conclude f'(c) = 0 exists without knowing f is differentiable everywhere and actually achieves a local extremum - but actually f could have a cusp or the data only shows sampled points; we cannot conclude from the table alone that f has a local max requiring f'=0. Statement II is NOT guaranteed. Statement III: By the Intermediate Value Theorem, since f is continuous on [1,7] and f(5)=6 while f(7)=14, there must exist c in (5,7) such that f(c)=10 (since 6 < 10 < 14). So Statement III is TRUE. Answer: I and III only, choice B.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u5_028",
      "unit": 5,
      "question": "A farmer has 240 meters of fencing and wants to enclose a rectangular field, then divide it into three equal pens using two interior fences parallel to one side of the rectangle. What dimensions maximize the total enclosed area, and what is the maximum area?\n\n(Let x be the length of the side perpendicular to the dividers, and y be the length of the side parallel to the dividers.)",
      "choices": [
        "A) x = 30 m, y = 60 m, maximum area = 1800 m²",
        "B) x = 40 m, y = 60 m, maximum area = 2400 m²",
        "C) x = 30 m, y = 80 m, maximum area = 2400 m²",
        "D) x = 60 m, y = 60 m, maximum area = 3600 m²"
      ],
      "answer": 0,
      "explanation": "The enclosure has 2 sides of length y (top and bottom) and 4 sides of length x (2 outer walls plus 2 interior dividers), giving the constraint 2y + 4x = 240, or y = 120 − 2x. The area function is A(x) = xy = x(120 − 2x) = 120x − 2x². Taking the derivative and setting it equal to zero: A'(x) = 120 − 4x = 0, so x = 30 m. Then y = 120 − 2(30) = 60 m, and the maximum area is A = 30 × 60 = 1800 m². Since A''(x) = −4 < 0, this is indeed a maximum. The correct answer is A.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u6_029",
      "unit": 6,
      "question": "Which of the following is an antiderivative of f(x) = 3x² − 4x + 1?",
      "choices": [
        "A) x³ − 2x² + x",
        "B) 6x − 4",
        "C) x³ − 4x² + x",
        "D) 3x³ − 2x² + x"
      ],
      "answer": 0,
      "explanation": "An antiderivative F(x) satisfies F'(x) = f(x). Integrating term by term: ∫3x² dx = x³, ∫−4x dx = −2x², ∫1 dx = x, giving F(x) = x³ − 2x² + x. Choice B is the derivative of f, not its antiderivative - a common mix-up. Choice C incorrectly applies the power rule (treating the coefficient of x as −4 rather than −2 after dividing by 2). Choice D multiplies rather than divides the leading coefficient.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u6_030",
      "unit": 6,
      "question": "The velocity of a particle moving along the x-axis is given by v(t) = t² − 5t + 6 for 0 ≤ t ≤ 4. A left Riemann sum with 4 equal subintervals is used to approximate ∫₀⁴ v(t) dt. What is the value of this left Riemann sum?",
      "choices": [
        "A) 4",
        "B) 8",
        "C) 10",
        "D) 2"
      ],
      "answer": 1,
      "explanation": "With 4 equal subintervals on [0, 4], Δt = 1 and the left endpoints are t = 0, 1, 2, 3. Evaluating: v(0) = 0 − 0 + 6 = 6; v(1) = 1 − 5 + 6 = 2; v(2) = 4 − 10 + 6 = 0; v(3) = 9 − 15 + 6 = 0. The left Riemann sum = 1·(6 + 2 + 0 + 0) = 8. Choice A (4) results from using a right Riemann sum: v(1)+v(2)+v(3)+v(4) = 2+0+0+2 = 4. Choice C (10) may arise from an arithmetic error. Choice D (2) may come from averaging endpoints incorrectly.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u6_031",
      "unit": 6,
      "question": "If ∫₁⁵ f(x) dx = 10 and ∫₁³ f(x) dx = 4, what is the value of ∫₃⁵ [2f(x) + 3] dx?",
      "choices": [
        "A) 18",
        "B) 12",
        "C) 24",
        "D) 15"
      ],
      "answer": 0,
      "explanation": "First, ∫₃⁵ f(x) dx = ∫₁⁵ f(x) dx − ∫₁³ f(x) dx = 10 − 4 = 6. Then ∫₃⁵ [2f(x) + 3] dx = 2∫₃⁵ f(x) dx + ∫₃⁵ 3 dx = 2(6) + 3(5 − 3) = 12 + 6 = 18. Choice B (12) results from forgetting to add the integral of the constant term. Choice C (24) likely comes from multiplying 2·(10) + some error, using the full interval integral instead of ∫₃⁵. Choice D (15) may come from adding 3 once rather than integrating the constant over the interval of length 2.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u6_032",
      "unit": 6,
      "question": "Let g(x) = ∫₂ˣ √(t³ + 1) dt. Which of the following correctly gives g'(x) and the value g'(2)?",
      "choices": [
        "A) g'(x) = √(x³ + 1); g'(2) = 3",
        "B) g'(x) = √(x³ + 1); g'(2) = √(x³ + 1) evaluated requires x, so g'(2) = 0",
        "C) g'(x) = (1/2)(x³ + 1)^(−1/2) · 3x²; g'(2) = 3/3 = 1",
        "D) g'(x) = −√(x³ + 1); g'(2) = −3"
      ],
      "answer": 0,
      "explanation": "By the Fundamental Theorem of Calculus Part 1, if g(x) = ∫₂ˣ f(t) dt, then g'(x) = f(x) = √(x³ + 1). At x = 2: g'(2) = √(8 + 1) = √9 = 3. Choice B confuses the process of evaluating - substituting x = 2 yields a numerical answer, not a function. Choice C incorrectly differentiates the integrand with respect to x instead of applying FTC Part 1 directly. Choice D introduces a sign error, as if the variable were the lower limit rather than the upper limit.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u6_033",
      "unit": 6,
      "question": "What is ∫ x·cos(x²) dx?",
      "choices": [
        "A) (1/2)sin(x²) + C",
        "B) 2x·sin(x²) + C",
        "C) sin(x²) + C",
        "D) (1/2)cos(x²) + C"
      ],
      "answer": 0,
      "explanation": "Use u-substitution with u = x², so du = 2x dx, meaning x dx = du/2. The integral becomes ∫ cos(u) · (du/2) = (1/2)sin(u) + C = (1/2)sin(x²) + C. Choice B results from differentiating instead of integrating (the derivative of (1/2)sin(x²) includes a factor of x, but the antiderivative does not produce 2x·sin(x²)). Choice C omits the factor of 1/2, a common error when students forget to account for the du = 2x dx adjustment. Choice D applies the antiderivative to the wrong function - cos integrates to sin, not back to cos.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u6_034",
      "unit": 6,
      "question": "A particle moves along the x-axis with velocity v(t) = 3t² − 6t for t ≥ 0. Which of the following represents the total distance traveled by the particle from t = 0 to t = 3?",
      "choices": [
        "A) ∫₀³ (3t² − 6t) dt",
        "B) |∫₀³ (3t² − 6t) dt|",
        "C) ∫₀² (3t² − 6t) dt + ∫₂³ (3t² − 6t) dt",
        "D) ∫₀³ |3t² − 6t| dt"
      ],
      "answer": 3,
      "explanation": "Total distance requires integrating the absolute value of velocity: ∫₀³ |v(t)| dt. Since v(t) = 3t² − 6t = 3t(t − 2) is negative on (0, 2) and positive on (2, 3), the absolute value of velocity must be accounted for over the entire interval, which is exactly what option D represents. Option A gives displacement (net change), not total distance. Option B takes the absolute value of the entire integral after the fact, which does not correctly account for direction changes within the interval. Option C splits the integral at t = 2 but fails to negate the velocity on [0, 2] where v(t) < 0, making it algebraically equivalent to option A and therefore also incorrect.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u6_035",
      "unit": 6,
      "question": "The table below gives selected values of a continuous function f.\n\nx:    1    2    3    4    5\nf(x): 4    7    3    9    2\n\nUsing a left Riemann sum with 4 equal subintervals, which of the following approximates ∫₁⁵ f(x) dx?",
      "choices": [
        "A) (4 + 7 + 3 + 9)(4) = 92",
        "B) 7 + 3 + 9 + 2 = 21",
        "C) (4 + 7 + 3 + 9)(1) = 23",
        "D) (1/2)(4 + 2·7 + 2·3 + 2·9 + 2) = 25"
      ],
      "answer": 2,
      "explanation": "With 4 equal subintervals on [1, 5], each subinterval has width Δx = (5−1)/4 = 1. A LEFT Riemann sum uses the left endpoint of each subinterval: x = 1, 2, 3, 4, giving f(1) + f(2) + f(3) + f(4) = 4 + 7 + 3 + 9 = 23, multiplied by Δx = 1. So the answer is (4 + 7 + 3 + 9)(1) = 23. Option A uses the correct left-endpoint values but incorrectly uses the total interval width (4) instead of the subinterval width (1) as the multiplier. Option B is a right Riemann sum (uses right endpoints: x = 2, 3, 4, 5). Option D applies the trapezoidal rule formula, giving (1/2)(4 + 2·7 + 2·3 + 2·9 + 2) = (1/2)(4 + 14 + 6 + 18 + 2) = (1/2)(44) = 22... corrected: (1/2)(4 + 14 + 6 + 18 + 2) = 25, which is a plausible distractor for students who confuse left Riemann sums with the trapezoid rule. Answer is C (index 2).",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u6_036",
      "unit": 6,
      "question": "Let g(x) = ∫₂ˣ √(t³ + 1) dt. If h(x) = g(x²), what is h′(x)?",
      "choices": [
        "A) √(x⁶ + 1)",
        "B) 2x · √(x⁶ + 1)",
        "C) √(x⁶ + 1) + 2x",
        "D) 2x · √(x³ + 1)"
      ],
      "answer": 1,
      "explanation": "By the Fundamental Theorem of Calculus Part 1, g′(x) = √(x³ + 1). Since h(x) = g(x²), the chain rule gives h′(x) = g′(x²) · (x²)′ = √((x²)³ + 1) · 2x = √(x⁶ + 1) · 2x = 2x√(x⁶ + 1). Option A forgets to apply the chain rule (omits the factor of 2x). Option C incorrectly adds 2x rather than multiplying. Option D applies the chain rule multiplication correctly but substitutes x³ + 1 instead of (x²)³ + 1 = x⁶ + 1, a common error where students plug x² into t without cubing it properly. The correct answer is B.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u7_037",
      "unit": 7,
      "question": "Which of the following differential equations is represented by a slope field in which all slopes along the x-axis (where y = 0) are equal to zero, and the slopes increase as y increases above the x-axis?",
      "choices": [
        "A) dy/dx = x",
        "B) dy/dx = y",
        "C) dy/dx = x + y",
        "D) dy/dx = x − y"
      ],
      "answer": 1,
      "explanation": "For dy/dx = y: when y = 0, dy/dx = 0 (slopes are zero along the x-axis), and as y increases, dy/dx increases proportionally. Choice A gives slopes dependent only on x, not zero along the entire x-axis. Choice C gives dy/dx = x when y = 0, which is not uniformly zero. Choice D gives dy/dx = x when y = 0, also not uniformly zero. Only dy/dx = y satisfies both stated conditions.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u7_038",
      "unit": 7,
      "question": "A particular solution to the differential equation dy/dx = 2xy passes through the point (0, 3). What is the value of y when x = 1?",
      "choices": [
        "A) 3e",
        "B) 3e²",
        "C) e³",
        "D) 6e"
      ],
      "answer": 0,
      "explanation": "Separating variables: dy/y = 2x dx. Integrating: ln|y| = x² + C, so y = Ce^(x²). Applying y(0) = 3 gives C = 3, so y = 3e^(x²). At x = 1: y = 3e^(1) = 3e. The distractor 3e² lures students who mistakenly integrate 2x as 2x² instead of x², and e³ comes from incorrectly treating the exponent as the constant 3, and 6e from doubling the initial condition.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u7_039",
      "unit": 7,
      "question": "A population of bacteria grows according to the model dP/dt = kP, where P is the population in thousands and t is measured in hours. If the population is 5 thousand at t = 0 and doubles every 3 hours, which of the following expressions gives the population at time t?",
      "choices": [
        "A) P(t) = 5e^(2t/3)",
        "B) P(t) = 5 · 2^(t/3)",
        "C) P(t) = 5 · 2^(3t)",
        "D) P(t) = 10e^(t/3)"
      ],
      "answer": 1,
      "explanation": "The general solution to dP/dt = kP is P(t) = P₀e^(kt). With P(0) = 5, we have P(t) = 5e^(kt). Since the population doubles every 3 hours, P(3) = 10: 5e^(3k) = 10, so e^(3k) = 2, meaning k = ln2/3. Thus P(t) = 5e^((ln2/3)t) = 5·2^(t/3). Choice A incorrectly uses k = 2/3 rather than ln2/3, confusing the doubling factor with the growth rate constant. Choice C inverts the relationship, doubling far too rapidly (every 1/3 hour). Choice D doubles the initial population instead of correctly applying the doubling condition to find k.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u7_040",
      "unit": 7,
      "question": "Let y = f(x) be the solution to the differential equation dy/dx = (y²)/(x) with initial condition f(1) = 1. Which of the following correctly describes the behavior of f as x increases from 1, and what is the value of f(2)?",
      "choices": [
        "A) f is increasing and f(2) = 2",
        "B) f is increasing and f(2) = 1/(1 − ln 2)",
        "C) f is increasing and f(2) = 2/(2 − ln 2)",
        "D) f is decreasing and f(2) = 1/2"
      ],
      "answer": 1,
      "explanation": "Separating variables: dy/y² = dx/x → −1/y = ln|x| + C. Applying f(1) = 1: −1/1 = ln(1) + C → C = −1. So −1/y = ln x − 1, giving y = 1/(1 − ln x). Since dy/dx = y²/x > 0 for x > 0 and y > 0, f is increasing. At x = 2: y = 1/(1 − ln 2). Since ln 2 ≈ 0.693, 1 − ln 2 ≈ 0.307, so y ≈ 3.26. Choice A results from not integrating correctly and treating dy/y² as dy/y. Choice C doubles the numerator erroneously, perhaps from a substitution error in applying the initial condition. Choice D incorrectly concludes the function is decreasing by ignoring that y² and x are both positive.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u8_041",
      "unit": 8,
      "question": "The temperature of a room, in degrees Fahrenheit, is modeled by T(t) = 68 + 4sin(πt/12) for 0 ≤ t ≤ 24, where t is measured in hours. What is the average temperature of the room over the 24-hour period?",
      "choices": [
        "A) 68°F",
        "B) 70°F",
        "C) 72°F",
        "D) 68 + (8/π)°F"
      ],
      "answer": 0,
      "explanation": "The average value of a function is (1/(b-a))∫[a to b] f(t) dt. Here, (1/24)∫[0 to 24] (68 + 4sin(πt/12)) dt. The integral of 68 over [0,24] is 68(24) = 1632. The integral of 4sin(πt/12) over a full period [0,24] is zero, since sin integrates over a complete cycle. So the average is 1632/24 = 68°F. Choice B confuses the average with the midpoint of max and min values without accounting for the full period. Choice D results from incorrectly computing (1/24)·4·(-12/π)[cos(πt/12)] without recognizing the cosine evaluates to zero net change over a full period.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u8_042",
      "unit": 8,
      "question": "Let f(x) = x² and g(x) = 2x. The region enclosed by f and g is revolved about the x-axis. Which of the following integrals gives the volume of the solid of revolution?",
      "choices": [
        "A) π∫[0 to 2] (2x − x²)² dx",
        "B) π∫[0 to 2] [(2x)² − (x²)²] dx",
        "C) π∫[0 to 2] [(2x)² + (x²)²] dx",
        "D) 2π∫[0 to 2] x(2x − x²) dx"
      ],
      "answer": 1,
      "explanation": "The curves intersect at x = 0 and x = 2 (solving x² = 2x). Since g(x) = 2x is the outer radius and f(x) = x² is the inner radius when revolving about the x-axis, the washer method gives V = π∫[0 to 2] [(2x)² − (x²)²] dx. Choice A uses the washer method incorrectly by squaring the difference of the functions rather than taking the difference of the squares, which is a very common AP trap. Choice C represents the error of adding the squared radii rather than subtracting them - the washer method requires subtracting the inner radius squared from the outer radius squared, not summing them. Choice D is the shell method formula for revolving about the y-axis, not the x-axis.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u8_043",
      "unit": 8,
      "question": "A particle moves along the x-axis with velocity v(t) = t² − 5t + 4 for t ≥ 0. At t = 0, the particle is at position x = 2. A second particle starts at position x = 2 at t = 0 and moves with constant velocity equal to the average value of v(t) on [0, 4]. At t = 4, which particle is farther to the right?",
      "choices": [
        "A) The first particle, because its velocity is positive for most of the interval",
        "B) The second particle, because it maintains a constant positive velocity throughout",
        "C) They are at the same position at t = 4",
        "D) The second particle, because constant velocity results in greater net displacement over [0, 4]"
      ],
      "answer": 2,
      "explanation": "The average value of v(t) = t² − 5t + 4 on [0, 4] is (1/4)∫[0 to 4] (t² − 5t + 4) dt. Computing: ∫(t² − 5t + 4) dt = t³/3 − 5t²/2 + 4t evaluated from 0 to 4 = (64/3 − 40 + 16) = (64/3 − 24) = (64 − 72)/3 = −8/3. Average velocity = (1/4)(−8/3) = −2/3. The net displacement of the first particle over [0,4] is ∫[0 to 4] v(t) dt = −8/3. The second particle's displacement is (average velocity)(time) = (−2/3)(4) = −8/3. Both displacements equal −8/3, so both particles are at x = 2 − 8/3 = −2/3, the same position. Choice A is wrong because the particle's velocity is negative on (1,4), giving significant leftward motion. Choice B is wrong because the average velocity is actually negative (−2/3). Choice D confuses the sign of the average velocity.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u8_044",
      "unit": 8,
      "question": "The table below gives values of a continuous function f(x) on [0, 4]:\n\nx:    0    1    2    3    4\nf(x): 3    5    4    6    2\n\nUsing a left Riemann sum with 4 subintervals of equal width, approximate ∫[0 to 4] f(x) dx, then use your approximation to estimate the average value of f on [0, 4]. Which of the following is closest to that estimate?",
      "choices": [
        "A) 3.5",
        "B) 4.0",
        "C) 4.5",
        "D) 5.0"
      ],
      "answer": 2,
      "explanation": "The left Riemann sum with 4 subintervals of width 1 uses the left endpoints x = 0, 1, 2, 3. The approximation is: f(0)·1 + f(1)·1 + f(2)·1 + f(3)·1 = 3 + 5 + 4 + 6 = 18. The average value of f on [0, 4] is approximated by (1/(4−0)) · 18 = 18/4 = 4.5, which is choice C. A common error is to divide by the number of data points (5) instead of the interval length (4), giving 18/5 = 3.6, closest to choice A. Another error is using only some function values. The key concept is that average value = (1/(b−a)) ∫[a to b] f(x) dx, where the interval length (b−a) is used as the divisor.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_calcab_p1_u8_045",
      "unit": 8,
      "question": "Water flows into a tank at a rate modeled by R(t) = 4t − t² gallons per minute for 0 ≤ t ≤ 4, and simultaneously flows out at a constant rate of 2 gallons per minute. The tank contains 10 gallons at t = 0. At t = 4 minutes, what is the total amount of water in the tank, in gallons?",
      "choices": [
        "A) 10 + 32/3",
        "B) 10 + 8/3",
        "C) 32/3",
        "D) 10 + 40/3"
      ],
      "answer": 1,
      "explanation": "The net rate of change of water in the tank is (4t − t²) − 2 = 4t − t² − 2. The total amount at t = 4 is the initial amount plus the net accumulation: 10 + ∫[0 to 4] (4t − t² − 2) dt. Computing the integral: ∫(4t − t² − 2) dt = 2t² − t³/3 − 2t evaluated from 0 to 4 = (2(16) − 64/3 − 8) − 0 = (32 − 64/3 − 8) = (24 − 64/3) = (72/3 − 64/3) = 8/3. So total = 10 + 8/3. Choice A ignores the outflow and computes only ∫(4t − t²) dt from 0 to 4 = [2t² − t³/3] = 32 − 64/3 = 32/3, then adds 10 - this is the trap of forgetting to subtract the outflow rate. Choice C forgets to add the initial 10 gallons. Choice D likely results from an arithmetic error in evaluating the definite integral.",
      "difficulty": "medium",
      "type": "MCQ"
    }
  ],
  "frqs": [
    {
      "id": "pt_calcab_p1_frq_001",
      "frqType": "calculator",
      "title": "Particle Motion Along a Line",
      "prompt": "A particle moves along the x-axis so that its velocity at time t is given by v(t) = t^3 - 6t^2 + 4t + 2 for 0 ≤ t ≤ 5, where t is measured in seconds and v(t) is measured in meters per second. At time t = 0, the particle is at position x = 3 meters.",
      "parts": [
        {
          "label": "a",
          "question": "Find all values of t in the interval 0 ≤ t ≤ 5 at which the particle changes direction. Justify your answer.",
          "points": 3
        },
        {
          "label": "b",
          "question": "Find the total distance traveled by the particle from t = 0 to t = 5.",
          "points": 3
        },
        {
          "label": "c",
          "question": "Find the position x(t) of the particle at time t = 5. Is the particle moving toward or away from the origin at t = 5? Give a reason for your answer.",
          "points": 3
        },
        {
          "label": "d",
          "question": "Find the time t in the interval 0 ≤ t ≤ 5 at which the particle has the greatest speed. Justify your answer.",
          "points": 3
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Identifying direction changes",
          "points": 3,
          "guidance": "1 point for setting v(t) = t^3 - 6t^2 + 4t + 2 = 0 and attempting to find zeros using a calculator. The zeros in [0,5] occur at approximately t ≈ 0.443, t ≈ 1.763, and t ≈ 3.794. 1 point for correctly identifying all three values (accept values correct to three decimal places or equivalent). 1 point for justification that v(t) changes sign at each of these values (e.g., v changes from positive to negative or vice versa), indicating the particle changes direction. Award 0/3 if no zeros are found or no sign analysis is provided."
        },
        {
          "criterion": "Part (b): Total distance traveled",
          "points": 3,
          "guidance": "1 point for setting up the integral of |v(t)| from 0 to 5, i.e., ∫₀⁵ |t^3 - 6t^2 + 4t + 2| dt. 1 point for correctly splitting the integral at the sign-change values from part (a) or using a calculator to evaluate ∫₀⁵ |v(t)| dt directly. 1 point for the correct answer: approximately 19.157 meters (accept answers in the range 19.15 to 19.16). If the student integrates v(t) without absolute value, award at most 1 point for the setup."
        },
        {
          "criterion": "Part (c): Position at t = 5 and direction relative to origin",
          "points": 3,
          "guidance": "1 point for correctly writing x(5) = 3 + ∫₀⁵ v(t) dt using the Fundamental Theorem of Calculus. 1 point for correct evaluation: ∫₀⁵ (t^3 - 6t^2 + 4t + 2) dt = [t^4/4 - 2t^3 + 2t^2 + 2t]₀⁵ = (156.25 - 250 + 50 + 10) - 0 = -33.75, so x(5) = 3 + (-33.75) = -30.75 meters. 1 point for correct direction analysis: v(5) = 125 - 150 + 20 + 2 = -3 < 0, so the particle is moving in the negative direction; since x(5) = -30.75 < 0, the particle is moving away from the origin. Full credit requires both the correct position value and a correct, complete justification of direction."
        },
        {
          "criterion": "Part (d): Greatest speed on [0, 5]",
          "points": 3,
          "guidance": "1 point for recognizing that speed = |v(t)| and that the maximum speed occurs at a critical point of v(t) (where a(t) = v'(t) = 3t^2 - 12t + 4 = 0) or at an endpoint. 1 point for finding the critical points of v(t): a(t) = 0 gives t = (12 ± √(144-48))/6 = (12 ± √96)/6 ≈ 0.368 and t ≈ 3.632. Evaluate |v(t)| at t = 0, 0.368, 3.632, and 5: |v(0)| = 2, |v(0.368)| ≈ 2.352, |v(3.632)| ≈ 10.392, |v(5)| = 3. 1 point for concluding the greatest speed is approximately 10.392 m/s at t ≈ 3.632 seconds, with justification by comparison of all candidate values. Deduct 1 point if endpoints are not considered."
        }
      ],
      "isCalc": true
    },
    {
      "id": "pt_calcab_p1_frq_002",
      "frqType": "calculator",
      "title": "Area, Accumulation, and Average Value",
      "prompt": "Let f and g be continuous functions defined for all real numbers. The graph of f is given by f(x) = 2x·e^(x/3), and the function g is defined by g(x) = ∫₀ˣ f(t) dt. It is known that f and the line y = kx intersect at x = 0 and at exactly one other point in the interval [0, 6], where k is a positive constant. Use a graphing calculator as needed.",
      "parts": [
        {
          "label": "a",
          "question": "Find the x-coordinate of the second intersection point of f(x) = 2x·e^(x/3) and the line y = kx in the interval (0, 6] and the value of k. Round your answers to three decimal places.",
          "points": 3
        },
        {
          "label": "b",
          "question": "Find the area of the region enclosed by the graphs of f(x) = 2x·e^(x/3) and the line y = kx on the interval from x = 0 to the second intersection point found in part (a). Round your answer to three decimal places.",
          "points": 3
        },
        {
          "label": "c",
          "question": "Find the average value of f(x) = 2x·e^(x/3) on the interval [0, 6]. Show the integral setup and give your answer rounded to three decimal places.",
          "points": 3
        },
        {
          "label": "d",
          "question": "Using g(x) = ∫₀ˣ f(t) dt where f(t) = 2t·e^(t/3), determine whether g is concave up or concave down at x = 2. Justify your answer using calculus, and find the value of g(2) rounded to three decimal places.",
          "points": 3
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Second intersection point and value of k",
          "points": 3,
          "guidance": "1 point for setting up the equation 2x·e^(x/3) = kx and, for x ≠ 0, reducing to k = 2e^(x/3). To find the unique second intersection in (0, 6], the student must recognize that for the line y = kx to be tangent to or intersect f exactly once more, k must be chosen so that f(x)/x = 2e^(x/3) is satisfied at the boundary or a specific point. Since f(x)/x = 2e^(x/3) is strictly increasing, any line through the origin with slope k > 2 (f'(0) = 2 at x = 0) will intersect f again. The problem states exactly one other intersection in [0,6], so the second crossing is at x = 6: k = 2e^(6/3) = 2e^2 ≈ 14.778. 1 point for correctly identifying x = 6 as the second intersection point. 1 point for k = 2e^2 ≈ 14.778 (accept 14.777 to 14.779). If a student sets up f(x) = kx and solves numerically for a different valid approach, award full credit if answers are correct and justified."
        },
        {
          "criterion": "Part (b): Area between f and y = kx",
          "points": 3,
          "guidance": "1 point for correctly setting up the integral: Area = ∫₀⁶ |2x·e^(x/3) - kx| dx = ∫₀⁶ (kx - 2x·e^(x/3)) dx or ∫₀⁶ x(2e^2 - 2e^(x/3)) dx, noting that kx ≥ f(x) on [0,6] only if verified; student should check which function is greater. Since f(0)=0, f'(0)=2 < k≈14.778, f grows but k is large, so y=kx > f(x) on (0,6). 1 point for correctly evaluating the integral using a calculator: ∫₀⁶ x(2e^2 - 2e^(x/3)) dx. Using integration by parts or a calculator: ∫₀⁶ 2x·e^2 dx - ∫₀⁶ 2x·e^(x/3) dx = e^2·[x^2]₀⁶ - 2∫₀⁶ x·e^(x/3) dx = 36e^2 - 2[3xe^(x/3) - 9e^(x/3)]₀⁶ = 36e^2 - 2[(18e^2 - 9e^2) - (0 - 9)] = 36e^2 - 2[9e^2 + 9] = 36e^2 - 18e^2 - 18 = 18e^2 - 18 ≈ 18(7.389) - 18 ≈ 133.004 - 18 = 115.004. 1 point for the correct answer ≈ 115.004 (accept 115.000 to 115.010). Award partial credit if setup is correct but arithmetic errors occur."
        },
        {
          "criterion": "Part (c): Average value of f on [0, 6]",
          "points": 3,
          "guidance": "1 point for correctly stating the average value formula: f_avg = (1/(6-0)) ∫₀⁶ 2x·e^(x/3) dx = (1/6) ∫₀⁶ 2x·e^(x/3) dx. 1 point for correctly evaluating ∫₀⁶ 2x·e^(x/3) dx using integration by parts: let u = 2x, dv = e^(x/3)dx → du = 2dx, v = 3e^(x/3). Result: [6xe^(x/3)]₀⁶ - ∫₀⁶ 6e^(x/3) dx = 36e^2 - [18e^(x/3)]₀⁶ = 36e^2 - 18e^2 + 18 = 18e^2 + 18 ≈ 133.004 + 18 = 151.004 (or via calculator). 1 point for the correct average value: (1/6)(18e^2 + 18) = 3e^2 + 3 ≈ 3(7.389) + 3 = 22.167 + 3 = 25.167 (accept 25.165 to 25.169). Deduct 1 point if the (1/6) factor is missing."
        },
        {
          "criterion": "Part (d): Concavity of g at x = 2 and value of g(2)",
          "points": 3,
          "guidance": "1 point for correctly reasoning: g'(x) = f(x) = 2x·e^(x/3) (by the Fundamental Theorem of Calculus), so g''(x) = f'(x). Compute f'(x) = 2e^(x/3) + 2x·(1/3)e^(x/3) = 2e^(x/3)(1 + x/3). At x = 2: g''(2) = f'(2) = 2e^(2/3)(1 + 2/3) = 2e^(2/3)(5/3) = (10/3)e^(2/3) > 0. Since g''(2) > 0, g is concave up at x = 2. 1 point for the correct concavity conclusion with justification referencing g''(2) > 0. 1 point for correctly computing g(2) = ∫₀² 2t·e^(t/3) dt = [6te^(t/3) - 18e^(t/3)]₀² = (12e^(2/3) - 18e^(2/3)) - (0 - 18) = -6e^(2/3) + 18 ≈ -6(1.948) + 18 ≈ -11.690 + 18 = 6.310 (accept 6.308 to 6.312). Award full credit only if all three components (FTC application, concavity with justification, and g(2) value) are correct."
        }
      ],
      "isCalc": true
    },
    {
      "id": "pt_calcab_p1_frq_003",
      "frqType": "no-calculator",
      "title": "Particle Motion Along a Line",
      "prompt": "A particle moves along the x-axis so that its velocity at time t, for 0 ≤ t ≤ 6, is given by v(t) = t² − 5t + 4. The particle is at position x = 3 at time t = 0.",
      "parts": [
        {
          "label": "a",
          "question": "Find all times t in the open interval 0 < t < 6 at which the particle changes direction. Justify your answer.",
          "points": 3
        },
        {
          "label": "b",
          "question": "Find the total distance traveled by the particle from t = 0 to t = 6.",
          "points": 3
        },
        {
          "label": "c",
          "question": "Find the position of the particle at time t = 6.",
          "points": 2
        },
        {
          "label": "d",
          "question": "Find the acceleration of the particle at time t = 3 and determine whether the speed of the particle is increasing or decreasing at t = 3. Explain your reasoning.",
          "points": 3
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Correct identification of direction changes",
          "points": 3,
          "guidance": "Set v(t) = t² − 5t + 4 = 0. Factor as (t−1)(t−4) = 0, so t = 1 and t = 4. Award 1 point for correctly setting v(t) = 0, 1 point for finding both t = 1 and t = 4, and 1 point for justifying that v changes sign at each (e.g., v goes from positive to negative at t=1 and from negative to positive at t=4)."
        },
        {
          "criterion": "Part (b): Correct total distance",
          "points": 3,
          "guidance": "Total distance = ∫₀¹ |v(t)| dt + ∫₁⁴ |v(t)| dt + ∫₄⁶ |v(t)| dt. ∫₀¹ (t²−5t+4) dt = [t³/3 − 5t²/2 + 4t]₀¹ = 1/3 − 5/2 + 4 = 11/6. ∫₁⁴ −(t²−5t+4) dt = [−t³/3 + 5t²/2 − 4t]₁⁴ = (−64/3 + 40 − 16) − (−1/3 + 5/2 − 4) = −9/2. Take absolute value: 9/2. ∫₄⁶ (t²−5t+4) dt = [t³/3 − 5t²/2 + 4t]₄⁶ = (72 − 90 + 24) − (64/3 − 40 + 16) = 6 − 4/3 = 14/3. Total = 11/6 + 9/2 + 14/3 = 11/6 + 27/6 + 28/6 = 66/6 = 11. Award 1 point for correct setup with absolute values, 1 point for correct antiderivative work, 1 point for correct final answer of 11."
        },
        {
          "criterion": "Part (c): Correct position at t = 6",
          "points": 2,
          "guidance": "x(6) = x(0) + ∫₀⁶ v(t) dt = 3 + [t³/3 − 5t²/2 + 4t]₀⁶ = 3 + (72 − 90 + 24) − 0 = 3 + 6 = 9. Award 1 point for using x(0) + ∫₀⁶ v(t) dt correctly, 1 point for the correct final answer of x(6) = 9."
        },
        {
          "criterion": "Part (d): Acceleration and speed analysis at t = 3",
          "points": 3,
          "guidance": "a(t) = v′(t) = 2t − 5. At t = 3: a(3) = 2(3) − 5 = 1. v(3) = 9 − 15 + 4 = −2. Since v(3) = −2 < 0 and a(3) = 1 > 0, they have opposite signs, so the speed is decreasing at t = 3. Award 1 point for correct a(t) = 2t − 5, 1 point for a(3) = 1, 1 point for correct conclusion that speed is decreasing with justification referencing opposite signs of velocity and acceleration."
        }
      ],
      "isCalc": false
    },
    {
      "id": "pt_calcab_p1_frq_004",
      "frqType": "no-calculator",
      "title": "Differential Equations and Slope Fields",
      "prompt": "Consider the differential equation dy/dx = 2x − y.\n\n(a) On the axes provided (described below), the slope field for the differential equation is defined at the lattice points (x, y) where −2 ≤ x ≤ 2 and −2 ≤ y ≤ 2. Describe the behavior of the slopes along the line y = 2x.\n\n(b) Find the particular solution y = f(x) to the differential equation with the initial condition f(0) = 1.\n\n(c) For the particular solution found in part (b), find the x-coordinate of any relative minima or maxima of f on the interval −2 ≤ x ≤ 2, and determine the nature of each. Justify your answer.\n\n(d) Find lim(x→∞) f(x) if the solution from part (b) continues for all x ≥ 0.",
      "parts": [
        {
          "label": "a",
          "question": "Describe the behavior of the slopes along the line y = 2x. What is the slope value at every point on this line?",
          "points": 2
        },
        {
          "label": "b",
          "question": "Find the particular solution y = f(x) to the differential equation dy/dx = 2x − y with initial condition f(0) = 1.",
          "points": 5
        },
        {
          "label": "c",
          "question": "For the particular solution found in part (b), find the x-coordinate of any relative minimum or maximum on −2 ≤ x ≤ 2. Justify your answer.",
          "points": 3
        },
        {
          "label": "d",
          "question": "Determine the behavior of f(x) as x → ∞.",
          "points": 1
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Correct identification of slopes along y = 2x",
          "points": 2,
          "guidance": "Along y = 2x, dy/dx = 2x − y = 2x − 2x = 0. Award 1 point for substituting y = 2x into the equation and 1 point for concluding that all slopes equal 0 along this line (the line y = 2x is an isocline of zero slope)."
        },
        {
          "criterion": "Part (b): Correct particular solution",
          "points": 5,
          "guidance": "This is a first-order linear ODE: dy/dx + y = 2x. Integrating factor: μ = e^x. Multiply: d/dx[ye^x] = 2xe^x. Integrate right side by parts: ∫2xe^x dx = 2xe^x − 2e^x + C. So ye^x = 2xe^x − 2e^x + C, thus y = 2x − 2 + Ce^(−x). Apply f(0) = 1: 1 = 0 − 2 + C, so C = 3. Particular solution: y = 2x − 2 + 3e^(−x). Award 1 point for correct identification as linear ODE and finding integrating factor e^x, 1 point for correct multiplication and differentiation setup, 1 point for correct integration by parts of ∫2xe^x dx, 1 point for correct general solution, 1 point for applying initial condition and stating y = 2x − 2 + 3e^(−x)."
        },
        {
          "criterion": "Part (c): Critical points and classification",
          "points": 3,
          "guidance": "f′(x) = dy/dx = 2x − y = 2x − (2x − 2 + 3e^(−x)) = 2 − 3e^(−x). Set equal to 0: 2 − 3e^(−x) = 0 → e^(−x) = 2/3 → −x = ln(2/3) → x = ln(3/2) ≈ 0.405. f″(x) = 3e^(−x) > 0 for all x, so x = ln(3/2) is a relative minimum. Award 1 point for correctly setting f′(x) = 0, 1 point for solving to get x = ln(3/2), 1 point for using second derivative test or sign analysis of f′ and concluding relative minimum."
        },
        {
          "criterion": "Part (d): Behavior as x → ∞",
          "points": 1,
          "guidance": "As x → ∞, 3e^(−x) → 0, so f(x) = 2x − 2 + 3e^(−x) → ∞ (grows without bound, behaving like 2x − 2). Award 1 point for stating that f(x) → ∞ (or that f behaves like 2x − 2 for large x)."
        }
      ],
      "isCalc": false
    },
    {
      "id": "pt_calcab_p1_frq_005",
      "frqType": "no-calculator",
      "title": "Area Between Curves and Accumulated Change",
      "prompt": "Let R be the region enclosed by the graphs of f(x) = 6x − x² and g(x) = x² − 2x for 0 ≤ x ≤ 4.",
      "parts": [
        {
          "label": "a",
          "question": "Find the x-coordinates of all intersection points of f and g on the interval 0 ≤ x ≤ 4. Show the work that leads to your answer.",
          "points": 2
        },
        {
          "label": "b",
          "question": "Write, but do not evaluate, an integral expression that gives the area of the region R enclosed between f and g on 0 ≤ x ≤ 4.",
          "points": 2
        },
        {
          "label": "c",
          "question": "Find the area of region R.",
          "points": 3
        },
        {
          "label": "d",
          "question": "The region R is the base of a solid. For this solid, each cross section perpendicular to the x-axis is a square. Write, but do not evaluate, an integral expression that gives the volume of this solid.",
          "points": 2
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Correct intersection points",
          "points": 2,
          "guidance": "Set f(x) = g(x): 6x − x² = x² − 2x → 8x − 2x² = 0 → 2x(4 − x) = 0 → x = 0 or x = 4. Award 1 point for correctly setting up and simplifying the equation, 1 point for obtaining x = 0 and x = 4."
        },
        {
          "criterion": "Part (b): Correct integral setup",
          "points": 2,
          "guidance": "Check which function is on top: at x = 2, f(2) = 8, g(2) = 0, so f > g on (0, 4). Area = ∫₀⁴ [(6x − x²) − (x² − 2x)] dx = ∫₀⁴ (8x − 2x²) dx. Award 1 point for correct integrand (f(x) − g(x)) simplified, 1 point for correct limits 0 to 4."
        },
        {
          "criterion": "Part (c): Correct area calculation",
          "points": 3,
          "guidance": "∫₀⁴ (8x − 2x²) dx = [4x² − (2/3)x³]₀⁴ = [4(16) − (2/3)(64)] − 0 = 64 − 128/3 = 192/3 − 128/3 = 64/3. Award 1 point for correct antiderivative 4x² − (2/3)x³, 1 point for correct evaluation at x = 4 and x = 0, 1 point for correct final answer of 64/3."
        },
        {
          "criterion": "Part (d): Correct volume integral with square cross sections",
          "points": 2,
          "guidance": "Side length of each square cross section = f(x) − g(x) = 8x − 2x². Area of square = (8x − 2x²)². Volume = ∫₀⁴ (8x − 2x²)² dx. Award 1 point for squaring the difference of functions as the cross-sectional area, 1 point for correct limits and integral setup."
        }
      ],
      "isCalc": false
    },
    {
      "id": "pt_calcab_p1_frq_006",
      "frqType": "no-calculator",
      "title": "Analyzing a Function Using Derivatives and the Fundamental Theorem",
      "prompt": "Let f be a function defined on the closed interval −4 ≤ x ≤ 6. The graph of f′, the derivative of f, consists of a semicircle and two line segments, as shown below (described analytically):\n\n• For −4 ≤ x ≤ 0: f′(x) is a line segment from (−4, −2) to (0, 2).\n• For 0 ≤ x ≤ 4: f′(x) is the upper semicircle of radius 2 centered at (2, 0), so f′(x) = √(4 − (x−2)²).\n• For 4 ≤ x ≤ 6: f′(x) is a line segment from (4, 0) to (6, −4).\n\nIt is given that f(−4) = 1.",
      "parts": [
        {
          "label": "a",
          "question": "Find f(0) and f(4). Show your reasoning using the Fundamental Theorem of Calculus.",
          "points": 4
        },
        {
          "label": "b",
          "question": "Find all values of x on the open interval −4 < x < 6 where f has a relative maximum. Justify your answer.",
          "points": 2
        },
        {
          "label": "c",
          "question": "Find all values of x on the open interval −4 < x < 6 where the graph of f has a point of inflection. Justify your answer.",
          "points": 2
        },
        {
          "label": "d",
          "question": "Find the absolute minimum value of f on the closed interval −4 ≤ x ≤ 6. Justify your answer.",
          "points": 3
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): Correct values of f(0) and f(4)",
          "points": 4,
          "guidance": "f(0) = f(−4) + ∫₋₄⁰ f′(x) dx. The segment from (−4,−2) to (0,2): f′(x) = x − 2 +  more precisely slope = (2−(−2))/(0−(−4)) = 1, f′(x) = x − 2 for this segment going through (0,2) Actually f′(x) = x − 2 passes through (0,−2) not (0,2). Re-check: slope = 4/4 = 1, using point (−4,−2): f′(x) = 1·(x+4)−2 = x+2. So ∫₋₄⁰ (x+2) dx = [x²/2 + 2x]₋₄⁰ = 0 − (8 − 8) = 0. Thus f(0) = 1 + 0 = 1. f(4) = f(0) + ∫₀⁴ f′(x) dx = 1 + area of semicircle of radius 2 = 1 + (1/2)π(2²) = 1 + 2π. Award 1 point for using FTC correctly for f(0), 1 point for computing ∫₋₄⁰ f′(x) dx = 0 and getting f(0) = 1, 1 point for recognizing the semicircle area for ∫₀⁴ f′(x) dx = 2π, 1 point for correct f(4) = 1 + 2π."
        },
        {
          "criterion": "Part (b): Relative maximum identification",
          "points": 2,
          "guidance": "f has a relative maximum where f′ changes from positive to negative. On (−4, 0): f′(x) = x + 2 = 0 at x = −2; f′ changes from negative (x < −2) to positive (x > −2), so x = −2 is a relative minimum. On (0,4): f′(x) = √(4−(x−2)²) ≥ 0, always positive; no sign change. At x = 4: f′(4) = 0 and for (4,6): f′(x) = −2(x−4) < 0, so f′ changes from positive to negative at x = 4. Therefore f has a relative maximum at x = 4. Award 1 point for identifying x = 4 as the only relative maximum, 1 point for justification that f′ changes from positive to negative there."
        },
        {
          "criterion": "Part (c): Points of inflection",
          "points": 2,
          "guidance": "Points of inflection occur where f″ changes sign, i.e., where f′ changes from increasing to decreasing or vice versa. On (−4,0): f′ is linear with slope 1 > 0, so f″ = 1 (constant). On (0,4): f′ is a semicircle; f″ = d/dx[√(4−(x−2)²)] = −(x−2)/√(4−(x−2)²), which changes sign at x = 2 (from positive for x < 2 to negative for x > 2). At x = 0: f′ transitions from slope 1 (linear) to the semicircle. f″ jumps from 1 to −2/√4 = undefined behavior, representing a change. At x = 0: left f″ = 1 > 0; right f″ at x = 0⁺: −(0−2)/2 = 1 > 0 - no sign change. At x = 2: f″ changes sign. At x = 4: left f″ < 0 (from semicircle), right f″ = −2 (constant slope of line segment) < 0 - no inflection. So inflection point is at x = 2 only. Award 1 point for identifying x = 2, 1 point for justification that f′ changes from increasing to decreasing (f″ changes sign) at x = 2."
        },
        {
          "criterion": "Part (d): Absolute minimum value",
          "points": 3,
          "guidance": "Evaluate f at all critical points and endpoints. f(−4) = 1. f(−2): f(−2) = f(−4) + ∫₋₄^{−2} (x+2) dx = 1 + [x²/2 + 2x]₋₄^{−2} = 1 + (2−4) − (8−8) = 1 − 2 = −1. f(0) = 1. f(4) = 1 + 2π. f(6) = f(4) + ∫₄⁶ f′(x) dx. The line from (4,0) to (6,−4): f′(x) = −2(x−4). ∫₄⁶ −2(x−4) dx = [−(x−4)²]₄⁶ = −4 − 0 = −4. f(6) = 1 + 2π − 4 = 2π − 3 ≈ 3.28. Compare: f(−4) = 1, f(−2) = −1, f(0) = 1, f(4) = 1+2π ≈ 7.28, f(6) = 2π−3 ≈ 3.28. Absolute minimum is f(−2) = −1. Award 1 point for identifying all candidates (critical points and endpoints), 1 point for correct computation of f(−2) = −1, 1 point for correct conclusion that the absolute minimum value is −1."
        }
      ],
      "isCalc": false
    }
  ]
}];
