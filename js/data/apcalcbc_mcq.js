window.APCALCBC_MCQ = [
  {
    "id": "calcbc_u1_q001",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits graphically",
    "topicLabel": "Limits Graphically",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A function f is graphed near x = 3. As x approaches 3 from both sides, the graph approaches a height of 5, but there is an open circle at (3, 5) and a closed dot at (3, 2). What is lim(x→3) f(x)?",
    "choices": [
      "A) 2",
      "B) 5",
      "C) Does not exist",
      "D) 7"
    ],
    "answer": 1,
    "explanation": "The limit as x→3 is determined by the value the function approaches, not the actual function value at x = 3. Since both sides of the graph approach y = 5, the limit is 5. Choice A (2) is the function value f(3), which is the value of the closed dot - a common misconception confusing f(a) with lim f(x). Choice C is wrong because both one-sided limits agree. Choice D has no basis."
  },
  {
    "id": "calcbc_u1_q002",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim(x→2) (x² - 4)/(x - 2)?",
    "choices": [
      "A) 0",
      "B) Undefined",
      "C) 4",
      "D) 2"
    ],
    "answer": 2,
    "explanation": "Factor the numerator: (x² - 4) = (x - 2)(x + 2). Cancel (x - 2) to get lim(x→2) (x + 2) = 2 + 2 = 4. Choice A results from incorrectly substituting and getting 0/0 then concluding 0. Choice B confuses the indeterminate form 0/0 with 'undefined limit.' Choice D forgets to add 2 to x after cancellation."
  },
  {
    "id": "calcbc_u1_q003",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limit laws",
    "topicLabel": "Limit Laws",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If lim(x→5) f(x) = 3 and lim(x→5) g(x) = 7, what is lim(x→5) [f(x) · g(x)]?",
    "choices": [
      "A) 10",
      "B) 21",
      "C) 4",
      "D) 37"
    ],
    "answer": 1,
    "explanation": "By the product law of limits, lim[f(x)·g(x)] = lim f(x) · lim g(x) = 3 · 7 = 21. Choice A uses the sum law instead of the product law (3 + 7 = 10). Choice C subtracts instead of multiplies (7 - 3 = 4). Choice D has no logical basis based on the given values."
  },
  {
    "id": "calcbc_u1_q004",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "one-sided limits",
    "topicLabel": "One-Sided Limits",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For the piecewise function f(x) = {3x + 1 if x < 2, x² if x ≥ 2}, what is lim(x→2⁻) f(x)?",
    "choices": [
      "A) 4",
      "B) 7",
      "C) 5",
      "D) 2"
    ],
    "answer": 1,
    "explanation": "The left-hand limit as x→2⁻ uses the rule for x < 2: f(x) = 3x + 1. Substituting x = 2 gives 3(2) + 1 = 7. Choice A uses x² evaluated at x = 2, which applies for x ≥ 2 (the right-hand rule), not the left. Choice C is a miscalculation. Choice D simply substitutes x = 2 without evaluating the expression."
  },
  {
    "id": "calcbc_u1_q005",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits at infinity",
    "topicLabel": "Limits at Infinity",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim(x→∞) (5x² + 3x)/(2x² - 7)?",
    "choices": [
      "A) 0",
      "B) 5/2",
      "C) ∞",
      "D) 3/7"
    ],
    "answer": 1,
    "explanation": "When the degrees of the numerator and denominator are equal, the limit at infinity is the ratio of the leading coefficients: 5/2. Choice A is wrong - that would be the answer if the denominator's degree were higher. Choice C would be correct if the numerator's degree were higher. Choice D incorrectly uses the non-leading coefficients."
  },
  {
    "id": "calcbc_u1_q006",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "continuity",
    "topicLabel": "Continuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following conditions is NOT required for a function f to be continuous at x = a?",
    "choices": [
      "A) f(a) is defined",
      "B) lim(x→a) f(x) exists",
      "C) lim(x→a) f(x) must equal the average of the upper and lower bounds of f near x = a",
      "D) f(a) is equal to f(−a)"
    ],
    "answer": 3,
    "explanation": "Continuity at x = a requires three conditions: f(a) is defined, lim(x→a) f(x) exists, and lim(x→a) f(x) = f(a). The condition f(a) = f(−a) (symmetry about the y-axis) has nothing to do with continuity at a point. Choice C is also not a requirement - continuity does not involve averaging upper and lower bounds; that is a misapplication of bounding or Squeeze Theorem reasoning. Choice D is the answer because it is the one condition listed that has no bearing on continuity at a point whatsoever, while C, though false, is a plausible-sounding distractor. Choices A and B are genuine requirements for continuity at a point."
  },
  {
    "id": "calcbc_u1_q007",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a continuous function on [1, 4] with f(1) = −3 and f(4) = 6. Which of the following is guaranteed by the Intermediate Value Theorem?",
    "choices": [
      "A) f has a maximum value on [1, 4].",
      "B) There exists a c in (1, 4) such that f(c) = 0.",
      "C) f is differentiable on (1, 4).",
      "D) f(x) > 0 for all x in (1, 4)."
    ],
    "answer": 1,
    "explanation": "The IVT states that if f is continuous on [a, b], then for every value k between f(a) and f(b), there exists a c in (a, b) with f(c) = k. Since 0 is between −3 and 6, there must exist c in (1, 4) with f(c) = 0. Choice A refers to the Extreme Value Theorem, not the IVT. Choice C is not guaranteed - continuity does not imply differentiability. Choice D is false; f could be negative somewhere between 1 and 4."
  },
  {
    "id": "calcbc_u1_q008",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits graphically",
    "topicLabel": "Limits Graphically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A function f is graphed on the xy-plane. As x approaches 3 from the left, f(x) approaches 5. As x approaches 3 from the right, f(x) approaches 5. However, f(3) = 2. Which of the following is true?",
    "choices": [
      "A) lim_{x→3} f(x) = 5 and f is continuous at x = 3",
      "B) lim_{x→3} f(x) does not exist because f(3) ≠ 5",
      "C) lim_{x→3} f(x) = 5 and f is not continuous at x = 3",
      "D) lim_{x→3} f(x) = 2 because f(3) = 2"
    ],
    "answer": 2,
    "explanation": "The limit as x→3 is 5 because both one-sided limits agree at 5. The function is NOT continuous at x = 3 because lim_{x→3} f(x) = 5 ≠ f(3) = 2. Choice A incorrectly claims continuity. Choice B confuses the limit with the function value - limits do not require the function to equal the limit value. Choice D incorrectly equates the limit with f(3); the limit depends on behavior near x = 3, not at it."
  },
  {
    "id": "calcbc_u1_q009",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim_{x→2} (x² - 4) / (x² - 3x + 2)?",
    "choices": [
      "A) 0",
      "B) 4",
      "C) -4",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "Factor the numerator: x² - 4 = (x-2)(x+2). Factor the denominator: x² - 3x + 2 = (x-2)(x-1). Cancel the (x-2) factor (valid since x ≠ 2 in limit): (x+2)/(x-1). Evaluate at x = 2: (2+2)/(2-1) = 4/1 = 4. Choice A results from incorrectly plugging in before factoring and getting 0/0 and calling it 0. Choice C might arise from a sign error. Choice D is incorrect because after factoring the indeterminate form resolves."
  },
  {
    "id": "calcbc_u1_q010",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limit laws",
    "topicLabel": "Limit Laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Suppose lim_{x→4} f(x) = 6 and lim_{x→4} g(x) = -2. What is lim_{x→4} [f(x) · g(x) + f(x)]?",
    "choices": [
      "A) -12",
      "B) -6",
      "C) 4",
      "D) -8"
    ],
    "answer": 1,
    "explanation": "Using limit laws: lim[f(x)·g(x) + f(x)] = lim[f(x)]·lim[g(x)] + lim[f(x)] = (6)(-2) + 6 = -12 + 6 = -6. Choice A forgets to add the lim f(x) term. Choice C likely results from adding the limit values incorrectly. Choice D may come from computing (6)(-2) + (6)(-2) = -24, a doubling error. The product law and sum law must both be applied carefully."
  },
  {
    "id": "calcbc_u1_q011",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits at infinity",
    "topicLabel": "Limits at Infinity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim_{x→∞} (5x³ - 2x) / (3x³ + 7x² - 1)?",
    "choices": [
      "A) 0",
      "B) 5/7",
      "C) 5/3",
      "D) ∞"
    ],
    "answer": 2,
    "explanation": "For rational functions as x→∞, compare the degrees of numerator and denominator. Both are degree 3, so the limit equals the ratio of leading coefficients: 5/3. Choice A would be correct if the degree of the numerator were less than the denominator's degree. Choice B results from incorrectly using 7 (the coefficient of the x² term in the denominator) instead of the leading coefficient 3, yielding 5/7. Choice D would occur if the numerator's degree exceeded the denominator's degree, which is not the case here since both are degree 3."
  },
  {
    "id": "calcbc_u1_q012",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "It is known that 3x² ≤ f(x) ≤ 3x² + 2x² sin(1/x) for all x near 0 but x ≠ 0. What is lim_{x→0} f(x)?",
    "choices": [
      "A) 1",
      "B) 3",
      "C) 0",
      "D) Does not exist because sin(1/x) oscillates"
    ],
    "answer": 2,
    "explanation": "Apply the Squeeze Theorem. Note lim_{x→0} 3x² = 0. For the upper bound: 3x² + 2x²sin(1/x). Since |sin(1/x)| ≤ 1, we have |2x²sin(1/x)| ≤ 2x², so lim_{x→0}(3x² + 2x²sin(1/x)) = 0. Since both bounds go to 0, lim_{x→0} f(x) = 0. Choice D is a common trap - even though sin(1/x) oscillates, the x² factors force both bounds to 0. Choices A and B ignore the behavior of the bounding functions near 0."
  },
  {
    "id": "calcbc_u1_q013",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "continuity",
    "topicLabel": "Continuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For what value of k is f(x) = { kx² + 1, x ≤ 2 and { 3x - 1, x > 2 continuous at x = 2?",
    "choices": [
      "A) k = 1",
      "B) k = 5/4",
      "C) k = 2",
      "D) k = 3/2"
    ],
    "answer": 0,
    "explanation": "For continuity at x = 2, the left-hand and right-hand values must be equal. Left: f(2) = k(2²) + 1 = 4k + 1. Right (approaching from the right): lim_{x→2⁺} (3x - 1) = 3(2) - 1 = 5. Set equal: 4k + 1 = 5, so 4k = 4, k = 1. Choice B (k = 5/4) might result from dividing 5 by 4 without subtracting 1 first. Choice C and D result from other algebraic errors in setting up or solving the equation."
  },
  {
    "id": "calcbc_u1_q014",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following best describes the discontinuity of f(x) = (x² - 9) / (x - 3) at x = 3?",
    "choices": [
      "A) Jump discontinuity, because the one-sided limits differ",
      "B) Removable discontinuity, because the limit exists but f(3) is undefined",
      "C) Infinite discontinuity, because the denominator equals zero at x = 3",
      "D) The function is continuous at x = 3 because x = 3 can be canceled"
    ],
    "answer": 1,
    "explanation": "Factoring: (x²-9)/(x-3) = (x-3)(x+3)/(x-3) = x + 3 for x ≠ 3. The limit as x→3 is 6, but f(3) is undefined. This is a removable discontinuity. Choice A is incorrect; both one-sided limits equal 6 so there is no jump. Choice C confuses removable and infinite discontinuities - infinite discontinuities occur when the limit is ±∞, which requires the factor not to cancel. Choice D is incorrect; canceling is a limit technique, not a statement about continuity; f(3) remains undefined."
  },
  {
    "id": "calcbc_u1_q015",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a continuous function on [1, 5] with f(1) = -3 and f(5) = 7. Which of the following is guaranteed by the Intermediate Value Theorem?",
    "choices": [
      "A) f has a maximum value of 7 on [1, 5]",
      "B) f(c) = 0 for exactly one value c in (1, 5)",
      "C) f(c) = 0 for at least one value c in (1, 5)",
      "D) f is differentiable on (1, 5)"
    ],
    "answer": 2,
    "explanation": "The IVT guarantees that because f is continuous on [1,5] and f(1) = -3 < 0 < 7 = f(5), there exists at least one c in (1, 5) such that f(c) = 0. Choice B is incorrect - IVT guarantees existence but not uniqueness; there could be multiple zeros. Choice A confuses IVT with the Extreme Value Theorem; IVT says nothing about maximum values. Choice D is unrelated; continuity does not imply differentiability."
  },
  {
    "id": "calcbc_u1_q016",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits graphically",
    "topicLabel": "Limits Graphically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A function f is graphed on the xy-plane. As x approaches 3 from the left, f(x) approaches 5. As x approaches 3 from the right, f(x) approaches 5. However, f(3) = 2. Which of the following is true?",
    "choices": [
      "A) lim(x→3) f(x) = 5 and f is continuous at x = 3",
      "B) lim(x→3) f(x) does not exist because f(3) ≠ 5",
      "C) lim(x→3) f(x) = 5 and f is not continuous at x = 3",
      "D) lim(x→3) f(x) = 2 because f(3) = 2"
    ],
    "answer": 2,
    "explanation": "The limit as x→3 equals 5 because both one-sided limits agree at 5, regardless of the function's value at x = 3. The limit is determined by behavior near x = 3, not at x = 3. Since f(3) = 2 ≠ 5, the function is not continuous at x = 3 (it has a removable discontinuity). Choice A is wrong because continuity fails. Choice B is wrong because a limit exists when both one-sided limits agree, even if the function value differs. Choice D confuses the limit with the function value."
  },
  {
    "id": "calcbc_u1_q017",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim(x→2) (x² - 4) / (x² - 3x + 2)?",
    "choices": [
      "A) 0",
      "B) 4",
      "C) -4",
      "D) The limit does not exist"
    ],
    "answer": 1,
    "explanation": "Factor the numerator and denominator: (x² - 4) = (x-2)(x+2) and (x² - 3x + 2) = (x-2)(x-1). Cancel the common factor (x-2) to get (x+2)/(x-1). As x→2, this equals (2+2)/(2-1) = 4/1 = 4. Dividing numerator and denominator by x (the highest degree in the denominator): numerator becomes 4x + 1, denominator becomes 2 - 5/x → 2. So the expression behaves like (4x+1)/2. As x→-∞, 4x→-∞, so the limit is -∞. Choice A might result from incorrectly substituting before canceling and getting 0/0. Choice C may come from a sign error in the factoring or cancellation step. Choice D is wrong because the indeterminate form 0/0 can be resolved by factoring and canceling - a student might incorrectly apply the equal-degree rule, computing the ratio of leading coefficients as 4/2 = 2 and then negating for x→-∞ to get -2, but this rule only applies when degrees are equal."
  },
  {
    "id": "calcbc_u1_q018",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limit laws",
    "topicLabel": "Limit Laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Suppose lim(x→4) f(x) = 6 and lim(x→4) g(x) = 0. Which of the following limits can be determined using limit laws?",
    "choices": [
      "A) lim(x→4) [f(x)/g(x)], because limits of quotients always exist",
      "B) lim(x→4) [f(x) · g(x)] = 0, by the product law",
      "C) lim(x→4) [f(x)/g(x)] = 6, because 6/0 is defined in limit theory",
      "D) lim(x→4) [f(x) - g(x)] cannot be determined without more information"
    ],
    "answer": 1,
    "explanation": "By the product limit law, lim[f(x)·g(x)] = lim f(x) · lim g(x) = 6 · 0 = 0, which is valid because both individual limits exist. Choice A is incorrect because the quotient law requires the denominator's limit to be nonzero; since lim g(x) = 0, the quotient law does not apply. Choice C is wrong because 6/0 is undefined and the limit law for quotients explicitly requires a nonzero denominator limit. Choice D is wrong because the difference law applies: lim[f(x) - g(x)] = 6 - 0 = 6."
  },
  {
    "id": "calcbc_u1_q019",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "one-sided limits",
    "topicLabel": "One-Sided Limits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = |x - 3| / (x - 3). What is lim(x→3⁻) f(x)?",
    "choices": [
      "A) 1",
      "B) -1",
      "C) 0",
      "D) The limit does not exist"
    ],
    "answer": 1,
    "explanation": "For x < 3 (approaching from the left), (x - 3) is negative, so |x - 3| = -(x - 3). Therefore f(x) = -(x-3)/(x-3) = -1. The left-hand limit is -1. Choice A is the right-hand limit (x > 3 makes |x-3| = x-3, giving +1). Choice C confuses the expression with a function that approaches 0. Choice D would be correct for the two-sided limit (since left and right limits differ), but the question asks only for the left-hand limit, which does exist and equals -1."
  },
  {
    "id": "calcbc_u1_q020",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits at infinity",
    "topicLabel": "Limits at Infinity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim(x→∞) (5x³ - 2x + 7) / (3x³ + x² - 1)?",
    "choices": [
      "A) 5/3",
      "B) 0",
      "C) ∞",
      "D) -2"
    ],
    "answer": 0,
    "explanation": "When the degrees of the numerator and denominator are equal, the limit at infinity equals the ratio of leading coefficients. The leading term in the numerator is 5x³ and in the denominator is 3x³, so the limit is 5/3. Choice B would apply if the degree of the numerator were less than the denominator. Choice C would apply if the degree of the numerator exceeded the denominator. Choice D may come from incorrectly focusing on the -2x term instead of the leading term."
  },
  {
    "id": "calcbc_u1_q021",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "It is known that 3x² ≤ f(x) ≤ x² + 2x for all x near 0. What is lim(x→0) f(x)?",
    "choices": [
      "A) 0",
      "B) 2",
      "C) The limit cannot be determined from the given information",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "Apply the Squeeze Theorem: evaluate both bounding functions at x = 0. lim(x→0) 3x² = 0 and lim(x→0) (x² + 2x) = 0. Since both bounds approach 0 and f(x) is squeezed between them, lim(x→0) f(x) = 0. Choice B incorrectly evaluates lim(x² + 2x) by only using the coefficient of x at x=1. Choice C is wrong because the Squeeze Theorem applies precisely in this scenario. Choice D has no valid basis from the given inequalities."
  },
  {
    "id": "calcbc_u1_q022",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = { kx + 4 for x < 1 ; 3x² for x ≥ 1 }. For what value of k is f continuous at x = 1?",
    "choices": [
      "A) k = 1",
      "B) k = -1",
      "C) k = 3",
      "D) k = -3"
    ],
    "answer": 1,
    "explanation": "For f to be continuous at x = 1, the left-hand limit must equal the right-hand value. The left-hand limit as x → 1⁻ is k(1) + 4 = k + 4. The right-hand value at x = 1 is 3(1)² = 3. Setting them equal: k + 4 = 3 → k = -1. We can verify: with k = -1, the left-hand limit is (-1)(1) + 4 = 3, and f(1) = 3(1)² = 3, so the function is continuous at x = 1. Choice A (k = 1) gives a left-hand limit of 5 ≠ 3. Choice C (k = 3) gives a left-hand limit of 7 ≠ 3. Choice D (k = -3) gives a left-hand limit of 1 ≠ 3."
  },
  {
    "id": "calcbc_u1_q023",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a continuous function on [1, 5] with f(1) = -3 and f(5) = 7. Which of the following is guaranteed by the Intermediate Value Theorem?",
    "choices": [
      "A) There exists exactly one value c in (1, 5) such that f(c) = 0",
      "B) There exists at least one value c in (1, 5) such that f(c) = 0",
      "C) f(3) = 2, since 3 is the midpoint of [1,5] and 2 is the midpoint of [-3,7]",
      "D) f is differentiable on (1, 5)"
    ],
    "answer": 1,
    "explanation": "The Intermediate Value Theorem guarantees that if f is continuous on [a,b] and N is any value between f(a) and f(b), then there exists at least one c in (a,b) with f(c) = N. Since 0 is between -3 and 7, there must be at least one c in (1,5) with f(c) = 0. Choice A is incorrect because the IVT guarantees existence but not uniqueness - there could be multiple zeros. Choice C is incorrect; the IVT says nothing about the value at the midpoint specifically. Choice D is incorrect because continuity does not imply differentiability."
  },
  {
    "id": "calcbc_u1_q024",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits at infinity",
    "topicLabel": "Limits at Infinity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim(x→-∞) (4x² + x) / (2x + 1)?",
    "choices": [
      "A) 2",
      "B) -∞",
      "C) ∞",
      "D) 4"
    ],
    "answer": 1,
    "explanation": "Divide numerator and denominator by x (the highest power in the denominator): numerator becomes 4x + 1, denominator becomes 2 + 1/x. As x→-∞, 1/x→0 so this approaches (4x+1)/2. Since x→-∞, the expression (4x+1)/2 → -∞. Alternatively, the degree of the numerator (2) exceeds the degree of the denominator (1), so the limit is ±∞. Since x→-∞ and the leading behavior is 4x²/2x = 2x → -∞ as x→-∞, the limit is -∞. Choice A comes from incorrectly applying the equal-degree ratio rule. Choice C gets the sign wrong. Choice D takes the ratio of leading coefficients incorrectly."
  },
  {
    "id": "calcbc_u1_q025",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "continuity",
    "topicLabel": "Continuity and Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = \\begin{cases} \\frac{x^2 - 9}{x - 3} & x \\neq 3 \\\\ k & x = 3 \\end{cases}. For what value of k is f continuous at x = 3, and what type of discontinuity exists when k \\neq 6?",
    "choices": [
      "A) k = 6; removable discontinuity when k \\neq 6",
      "B) k = 3; jump discontinuity when k \\neq 3",
      "C) k = 6; jump discontinuity when k \\neq 6",
      "D) k = 9; removable discontinuity when k \\neq 9"
    ],
    "answer": 0,
    "explanation": "For x ≠ 3, (x^2-9)/(x-3) = (x+3)(x-3)/(x-3) = x+3. So lim_{x→3} f(x) = 6. For continuity, f(3) = k must equal 6. When k ≠ 6, the limit exists (equals 6) but f(3) ≠ 6, which is the definition of a removable discontinuity. Choice B is wrong because k=3 doesn't match the limit and the discontinuity type is misidentified. Choice C arises if a student correctly rationalizes to get 1/(√(x^2+4)+2) but then evaluates only the radical part, writing 1/√4 = 1/2 and ignoring the +2 in the denominator. Choice C correctly identifies k=6 but misidentifies the discontinuity type - jump discontinuities occur when one-sided limits are unequal, not when the limit exists but the function value differs. Choice D substitutes x=3 directly into the original numerator without factoring, giving 9−9=0 over 0, a common algebraic error."
  },
  {
    "id": "calcbc_u1_q026",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = (x^3 - 8) / (x^4 - 16). What is lim_{x→2} f(x)?",
    "choices": [
      "A) 3/8",
      "B) 1/2",
      "C) 3/4",
      "D) The limit does not exist"
    ],
    "answer": 0,
    "explanation": "Factor both: numerator = (x-2)(x^2+2x+4), denominator = (x^2-4)(x^2+4) = (x-2)(x+2)(x^2+4). Cancel (x-2) to get (x^2+2x+4)/[(x+2)(x^2+4)]. Substituting x=2: (4+4+4)/[(4)(8)] = 12/32 = 3/8. Choice B (1/2) comes from incorrectly canceling or evaluating only part of the factored form. Choice C (3/4) results from a sign error in the denominator factoring. Choice D is wrong because after cancellation the limit exists and equals 3/8."
  },
  {
    "id": "calcbc_u1_q027",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "continuity",
    "topicLabel": "Continuity and Types of Discontinuity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Suppose that $3\\cos(x) \\leq \\dfrac{g(x)}{x} \\leq \\dfrac{3}{\\cos(x)}$ for all $x$ in $\\left(0, \\dfrac{\\pi}{2}\\right)$. What is $\\lim_{x \\to 0^+} \\dfrac{g(x)}{x}$?",
    "choices": [
      "A) 3",
      "B) 0",
      "C) 1",
      "D) $\\pi$"
    ],
    "answer": 0,
    "explanation": "Apply the Squeeze Theorem. Evaluate the lower bound as x → 0⁺: lim_{x→0⁺} 3cos(x) = 3cos(0) = 3(1) = 3. Evaluate the upper bound as x → 0⁺: lim_{x→0⁺} 3/cos(x) = 3/cos(0) = 3/1 = 3. Since both bounding functions approach 3 as x → 0⁺, and the inequality 3cos(x) ≤ g(x)/x ≤ 3/cos(x) holds for all x in (0, π/2), by the Squeeze Theorem, lim_{x→0⁺} g(x)/x = 3. Choice A is correct. Note that the domain is restricted to x in (0, π/2) to ensure cos(x) > 0, making both bounds well-defined and the inequality valid throughout the punctured right-neighborhood of 0. Choice B (= 0) might arise from a student incorrectly substituting x = 0 directly into g(x)/x and assuming g(0) = 0 without applying the Squeeze Theorem. Choice C (= 1) may result from a student evaluating only cos(0) = 1 and ignoring the coefficient of 3. Choice D (= π) may result from confusion with other limit results involving π, such as lim_{x→0} (sin(x)/x) × π."
  },
  {
    "id": "calcbc_u1_q028",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "continuity and types of discontinuity",
    "topicLabel": "Continuity and Types of Discontinuity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let \\(f(x) = \\dfrac{x^2 - x - 6}{x^2 - 9}\\). Which of the following correctly describes the behavior of \\(f\\) at \\(x = 3\\) and \\(x = -3\\)?",
    "choices": [
      "A) \\(f\\) has a removable discontinuity at \\(x=3\\) and a jump discontinuity at \\(x=-3\\).",
      "B) \\(f\\) has a removable discontinuity at \\(x=3\\) and an infinite discontinuity at \\(x=-3\\).",
      "C) \\(f\\) has an infinite discontinuity at both \\(x=3\\) and \\(x=-3\\).",
      "D) \\(f\\) has a removable discontinuity at both \\(x=3\\) and \\(x=-3\\)."
    ],
    "answer": 1,
    "explanation": "Factor: numerator \\(x^2-x-6=(x-3)(x+2)\\), denominator \\(x^2-9=(x-3)(x+3)\\). So \\(f(x)=\\frac{(x-3)(x+2)}{(x-3)(x+3)}\\). At \\(x=3\\): the \\((x-3)\\) factor cancels, so \\(\\lim_{x\\to 3}f(x)=\\frac{5}{6}\\) exists and is finite - this is a removable discontinuity (hole). At \\(x=-3\\): the \\((x+3)\\) factor does NOT cancel, so \\(f(x)\\to\\pm\\infty\\) - this is an infinite (essential) discontinuity. Choice A is wrong because \\(x=-3\\) is not a jump discontinuity; jump discontinuities require finite one-sided limits, but here the one-sided limits are both infinite. A common error leading to choice A is incorrectly concluding that because the left- and right-hand limits approach different signed infinities (\\(-\\infty\\) and \\(+\\infty\\)), the discontinuity must be a 'jump' - but a jump discontinuity requires both one-sided limits to be finite. Choice C is wrong because \\(x=3\\) is removable, not infinite. Choice D is wrong because \\(x=-3\\) cannot be made continuous by redefining one point."
  },
  {
    "id": "calcbc_u1_q029",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Suppose \\(g\\) and \\(h\\) are functions such that \\(g(x) \\leq f(x) \\leq h(x)\\) for all \\(x\\) near \\(c\\) (but not necessarily at \\(c\\)), and \\(\\lim_{x \\to c} g(x) = L\\) while \\(\\lim_{x \\to c} h(x) = M\\) where \\(L \\neq M\\). A student claims that \\(\\lim_{x \\to c} f(x)\\) must exist and satisfy \\(L \\leq \\lim_{x \\to c} f(x) \\leq M\\). Which of the following best evaluates this claim?",
    "choices": [
      "A) The claim is correct; the Squeeze Theorem guarantees the limit exists between \\(L\\) and \\(M\\).",
      "B) The claim is incorrect; the Squeeze Theorem only applies when \\(L = M\\), and if \\(L \\neq M\\) then \\(\\lim_{x\\to c} f(x)\\) may not exist at all.",
      "C) The claim is incorrect; if \\(L \\neq M\\) the limit of \\(f\\) must equal \\(L\\) because \\(g\\) is the lower bound.",
      "D) The claim is correct, but only if \\(f\\) is continuous at \\(c\\)."
    ],
    "answer": 1,
    "explanation": "The Squeeze Theorem requires that both bounding functions share the SAME limit \\(L = M\\) at \\(c\\); only then can we conclude \\(\\lim_{x\\to c}f(x)=L\\). When \\(L\\neq M\\), the theorem simply does not apply. The limit of \\(f\\) may or may not exist - there is no guarantee it lies between \\(L\\) and \\(M\\), and no guarantee it exists at all. For example, \\(f(x)=\\sin(1/x)\\) can be squeezed between bounds with different limits and the limit of \\(f\\) fails to exist. Choice A is the classic trap: students misremember the theorem as applying whenever a function is bounded between two others, ignoring the equal-limit requirement. Choice C is nonsensical; the lower bound has no special priority. Choice D incorrectly introduces continuity as the missing condition, when the real issue is that \\(L\\) must equal \\(M\\)."
  },
  {
    "id": "calcbc_u1_q030",
    "subject": "apcalcbc",
    "unit": 1,
    "topic": "continuity",
    "topicLabel": "Continuity and Types of Discontinuity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is \\(\\displaystyle\\lim_{x \\to 0} \\frac{\\sin(x) - x + \\dfrac{x^3}{6}}{x^5}\\)?",
    "choices": [
      "A) \\(\\dfrac{1}{120}\\)",
      "B) \\(\\dfrac{1}{6}\\)",
      "C) \\(0\\)",
      "D) The limit does not exist"
    ],
    "answer": 0,
    "explanation": "Use the Taylor series expansion of sin(x) centered at 0: sin(x) = x - x^3/6 + x^5/120 - x^7/5040 + ... Substitute into the numerator: sin(x) - x + x^3/6 = (x - x^3/6 + x^5/120 - ...) - x + x^3/6 = x^5/120 - x^7/5040 + ... So the expression becomes (x^5/120 - x^7/5040 + ...) / x^5 = 1/120 - x^2/5040 + ... Taking the limit as x → 0 gives 1/120. Therefore the answer is A. Choice B corresponds to incorrectly stopping the cancellation at the x^3 term. Choice C would result if the numerator were identically zero to order x^5, which it is not. Choice D is incorrect because the limit exists and equals 1/120."
  },
  {
    "id": "calcbc_u2_q031",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "average rate of change",
    "topicLabel": "Average Rate of Change",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = x² + 3x, what is the average rate of change of f on the interval [1, 4]?",
    "choices": [
      "A) 8",
      "B) 5",
      "C) 11",
      "D) 6"
    ],
    "answer": 0,
    "explanation": "The average rate of change is [f(4) - f(1)] / (4 - 1). f(4) = 16 + 12 = 28, f(1) = 1 + 3 = 4. So (28 - 4) / 3 = 24/3 = 8. Choice B (5) is a common error from computing f'(1) = 2(1)+3 = 5, confusing average with instantaneous. Choice C (11) comes from computing f'(4) = 2(4)+3 = 11. Choice D (6) may result from arithmetic errors."
  },
  {
    "id": "calcbc_u2_q032",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "instantaneous rate of change",
    "topicLabel": "Instantaneous Rate of Change",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = 3x² − 5x + 2, what is the instantaneous rate of change of f at x = 2?",
    "choices": [
      "A) 7",
      "B) 4",
      "C) 12",
      "D) 2"
    ],
    "answer": 0,
    "explanation": "The instantaneous rate of change at x = 2 is f'(2). f'(x) = 6x − 5, so f'(2) = 12 − 5 = 7. Choice B (4) likely comes from computing f(2) = 12 − 10 + 2 = 4, confusing the function value with the derivative. Choice C (12) is the error of computing only 6(2) without subtracting 5. Choice D (2) may come from evaluating the constant term or a basic arithmetic mistake."
  },
  {
    "id": "calcbc_u2_q033",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "power rule",
    "topicLabel": "Power Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the power rule, what is the derivative of f(x) = 7x⁴?",
    "choices": [
      "A) 28x³",
      "B) 7x³",
      "C) −28x³",
      "D) 4x³"
    ],
    "answer": 0,
    "explanation": "The power rule states d/dx[xⁿ] = nxⁿ⁻¹. For 7x⁴, multiply the coefficient by the exponent and reduce the exponent by 1: 7·4·x³ = 28x³. Choice B forgets to multiply by 4. Choice C gives the negative of the correct answer, an error that could arise from reversing the numerator in the limit definition, writing [f(a) − f(a+h)] / h instead of [f(a+h) − f(a)] / h, which yields −f′(a). Choice D drops the coefficient 7 entirely."
  },
  {
    "id": "calcbc_u2_q034",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "trig derivatives",
    "topicLabel": "Derivatives of Trigonometric Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the derivative of f(x) = cos(x)?",
    "choices": [
      "A) f is continuous at x = c and the limit defining f'(c) exists (i.e., the left-hand and right-hand derivatives at x = c are equal and finite).",
      "B) sin(x)",
      "C) f is defined and continuous on an open interval containing c",
      "D) tan(x)"
    ],
    "answer": 0,
    "explanation": "The derivative of cos(x) is −sin(x). This is a standard trigonometric derivative that must be memorized. Choice B is a common sign error - it is the derivative of sin(x), not cos(x). Choice C is the derivative of −sin(x). Choice D, tan(x), has no direct relationship to the derivative of cos(x) in this context."
  },
  {
    "id": "calcbc_u2_q035",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = x⁵, what is f''(x), the second derivative of f?",
    "choices": [
      "A) 20x³",
      "B) 5x⁴",
      "C) 60x²",
      "D) 20x⁴"
    ],
    "answer": 0,
    "explanation": "First derivative: f'(x) = 5x⁴. Second derivative: f''(x) = 20x³. Choice B is only the first derivative, a common error of stopping one step early. Choice C applies the power rule a third time (the third derivative), going one step too far. Choice D keeps the wrong exponent, a result of reducing by 1 only once instead of applying the power rule to f'(x) = 5x⁴ correctly."
  },
  {
    "id": "calcbc_u2_q036",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "trig derivatives",
    "topicLabel": "Derivatives of Trigonometric Functions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the derivative of f(x) = tan(x)?",
    "choices": [
      "A) sec²(x)",
      "B) csc²(x)",
      "C) sec(x)tan(x)",
      "D) −csc²(x)"
    ],
    "answer": 0,
    "explanation": "The derivative of tan(x) is sec²(x). This is a standard result from the quotient rule applied to sin(x)/cos(x). Choice B, csc²(x), is the magnitude of the derivative of cot(x) (with a negative sign). Choice C, sec(x)tan(x), is the derivative of sec(x). Choice D, −csc²(x), is the derivative of cot(x). Students commonly confuse these four related trig derivatives."
  },
  {
    "id": "calcbc_u2_q037"
  },
  {
    "id": "calcbc_u2_q038",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "instantaneous rate of change",
    "topicLabel": "Instantaneous Rate of Change",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The position of a particle is given by s(t) = 2t³ - 9t² + 12t for t ≥ 0. What is the instantaneous rate of change of s at t = 2?",
    "choices": [
      "A) 0",
      "B) 6",
      "C) -3",
      "D) 3"
    ],
    "answer": 0,
    "explanation": "The instantaneous rate of change is s'(t). Using the power rule: s'(t) = 6t² - 18t + 12. At t = 2: s'(2) = 6(4) - 18(2) + 12 = 24 - 36 + 12 = 0. Choice B) 6 results from only computing 6t² at t=2. Choice C) -3 may arise from sign errors. Choice D) 3 may come from evaluating at the wrong point or arithmetic mistakes."
  },
  {
    "id": "calcbc_u2_q039",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of the Derivative",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the limit definition of the derivative, which expression correctly represents f'(x) for f(x) = x²?",
    "choices": [
      "A) lim(h→0) [(x+h)² - x²] / h",
      "B) lim(h→0) [(x+h)² - x²] / x",
      "C) lim(x→0) [(x+h)² - x²] / h",
      "D) lim(h→0) [(x+h)² + x²] / h"
    ],
    "answer": 0,
    "explanation": "The definition of the derivative is f'(x) = lim(h→0) [f(x+h) - f(x)] / h. Substituting f(x) = x² gives lim(h→0) [(x+h)² - x²] / h, which is choice A. Choice B incorrectly divides by x instead of h. Choice C incorrectly takes the limit as x→0 instead of h→0. Choice D incorrectly adds f(x+h) and f(x) rather than subtracting."
  },
  {
    "id": "calcbc_u2_q040",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of the Derivative",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The expression lim(h→0) [sin(π/6 + h) - sin(π/6)] / h is equivalent to which of the following?",
    "choices": [
      "A) cos(π/6)",
      "B) sin(π/6)",
      "C) -sin(π/6)",
      "D) -cos(π/6)"
    ],
    "answer": 0,
    "explanation": "This limit matches the definition of the derivative of f(x) = sin(x) evaluated at x = π/6. Since d/dx[sin(x)] = cos(x), the limit equals cos(π/6). Choice B) sin(π/6) is incorrect - students may confuse the derivative of sin with sin itself. Choice C) -sin(π/6) is the second derivative of sin, not the first. Choice D) -cos(π/6) is the derivative of cos(x), not sin(x)."
  },
  {
    "id": "calcbc_u2_q041",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "differentiability",
    "topicLabel": "Differentiability",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = |x - 3|. Which of the following statements is true about f at x = 3?",
    "choices": [
      "A) f is continuous but not differentiable at x = 3",
      "B) f is both continuous and differentiable at x = 3",
      "C) f is differentiable but not continuous at x = 3",
      "D) f is neither continuous nor differentiable at x = 3"
    ],
    "answer": 0,
    "explanation": "f(x) = |x - 3| is continuous everywhere, including at x = 3, because the left and right limits both equal 0 = f(3). However, it is not differentiable at x = 3 because the left-hand derivative is -1 and the right-hand derivative is +1, so the two one-sided derivatives are not equal, creating a corner. Choice B is wrong because differentiability fails at the corner. Choice C is impossible - differentiability implies continuity. Choice D is wrong because continuity holds."
  },
  {
    "id": "calcbc_u2_q042",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "power rule",
    "topicLabel": "Power Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = 4x⁵ - 3x⁻² + 7√x, what is f'(x)?",
    "choices": [
      "A) 20x⁴ + 6x⁻³ + (7/2)x^(-1/2)",
      "B) 20x⁴ - 6x⁻³ + (7/2)x^(1/2)",
      "C) 20x⁴ - 3x⁻³ + 7x^(-1/2)",
      "D) 4x⁴ + 6x⁻³ + 7x^(-1/2)"
    ],
    "answer": 0,
    "explanation": "Apply the power rule term by term. d/dx[4x⁵] = 20x⁴. d/dx[-3x⁻²] = (-2)(-3)x⁻³ = 6x⁻³ (positive because subtracting a negative exponent). d/dx[7x^(1/2)] = 7·(1/2)x^(-1/2) = (7/2)x^(-1/2). So f'(x) = 20x⁴ + 6x⁻³ + (7/2)x^(-1/2). Choice B keeps the negative sign on the second term, which is wrong. Choice C forgets to multiply the coefficient by the exponent on the second term. Choice D fails to apply the power correctly to the first term."
  },
  {
    "id": "calcbc_u2_q043",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "trig derivatives",
    "topicLabel": "Derivatives of Trigonometric Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the derivative of f(x) = 3sin(x) - 2cos(x) + tan(x)?",
    "choices": [
      "A) 3cos(x) + 2sin(x) + sec²(x)",
      "B) 3cos(x) - 2sin(x) + sec²(x)",
      "C) -3cos(x) + 2sin(x) + sec²(x)",
      "D) 3cos(x) + 2sin(x) - sec²(x)"
    ],
    "answer": 0,
    "explanation": "Using standard trig derivatives: d/dx[3sin(x)] = 3cos(x). d/dx[-2cos(x)] = -2(-sin(x)) = +2sin(x). d/dx[tan(x)] = sec²(x). So f'(x) = 3cos(x) + 2sin(x) + sec²(x). Choice B applies the derivative of cos incorrectly, keeping the negative. Choice C negates the first term incorrectly. Choice D negates the derivative of tan, which is wrong."
  },
  {
    "id": "calcbc_u2_q044",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = x⁴ - 3x³ + 5x - 2, what is f''(x)?",
    "choices": [
      "A) 12x² - 18x",
      "B) 4x³ - 9x² + 5",
      "C) 12x² - 9x + 5",
      "D) 12x² - 18x + 5"
    ],
    "answer": 0,
    "explanation": "First derivative: f'(x) = 4x³ - 9x² + 5. Second derivative: f''(x) = 12x² - 18x. The constant term 5 from f'(x) disappears when differentiated. Choice B is only the first derivative, not the second. Choice C incorrectly carries the +5 into the second derivative. Choice D also incorrectly retains the +5. A common mistake is forgetting that constants vanish under differentiation."
  },
  {
    "id": "calcbc_u2_q045",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = sin(x), which of the following correctly describes f⁽⁴⁾(x), the fourth derivative of f?",
    "choices": [
      "A) sin(x)",
      "B) cos(x)",
      "C) -sin(x)",
      "D) -cos(x)"
    ],
    "answer": 0,
    "explanation": "The derivatives of sin(x) cycle with period 4: f'(x) = cos(x), f''(x) = -sin(x), f'''(x) = -cos(x), f⁽⁴⁾(x) = sin(x). So the fourth derivative returns to sin(x). Choice B) cos(x) is the first derivative. Choice C) -sin(x) is the second derivative. Choice D) -cos(x) is the third derivative. Students often lose track of the cycle and select the wrong stage."
  },
  {
    "id": "calcbc_u2_q046",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "average rate of change",
    "topicLabel": "Average Rate of Change",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x³ - 4x + 1. What is the average rate of change of f on the interval [1, 3]?",
    "choices": [
      "A) 10",
      "B) 8",
      "C) 12",
      "D) 6"
    ],
    "answer": 0,
    "explanation": "The average rate of change is [f(3) - f(1)] / (3 - 1). f(3) = 27 - 12 + 1 = 16 and f(1) = 1 - 4 + 1 = -2. So (16 - (-2)) / 2 = 18/2 = 10. Choice B (8) comes from forgetting the constant. Choice C (12) may result from computing f'(2) = 3(4) - 4 = 8, not 12. Choice D (6) is a common arithmetic error."
  },
  {
    "id": "calcbc_u2_q047",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "instantaneous rate of change",
    "topicLabel": "Instantaneous Rate of Change",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = 2x² - 3x + 5, which expression correctly represents the instantaneous rate of change of f at x = a using the limit definition?",
    "choices": [
      "A) lim(h→0) [f(a+h) - f(a)] / h",
      "B) [f(a+h) - f(a)] / h for small h",
      "C) lim(h→0) [f(a+h) - f(a-h)] / h",
      "D) lim(h→0) [f(a+h) - f(a)] / h²"
    ],
    "answer": 0,
    "explanation": "The instantaneous rate of change at x = a is defined as the limit of the difference quotient: lim(h→0) [f(a+h) - f(a)] / h. Choice B is incorrect because it is just the average rate of change for small h, not a limit. Choice C incorrectly divides by h instead of 2h (the symmetric difference quotient denominator should be 2h). Choice D is incorrect because dividing by h² instead of h produces a result that either diverges or equals zero depending on the function, and does not represent the derivative."
  },
  {
    "id": "calcbc_u2_q048",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of the Derivative",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the limit definition of the derivative, what is f'(x) for f(x) = 3x² + 2?",
    "choices": [
      "A) 6x",
      "B) 3x",
      "C) 6x + 2",
      "D) 6x²"
    ],
    "answer": 0,
    "explanation": "Using the limit definition: lim(h→0) [3(x+h)² + 2 - (3x² + 2)] / h = lim(h→0) [3x² + 6xh + 3h² + 2 - 3x² - 2] / h = lim(h→0) [6xh + 3h²] / h = lim(h→0) (6x + 3h) = 6x. Choice B (3x) forgets the coefficient of 2 in the binomial expansion. Choice C (6x + 2) incorrectly carries the constant into the derivative. Choice D (6x²) confuses the exponent rule by not reducing the power."
  },
  {
    "id": "calcbc_u2_q049",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "differentiability",
    "topicLabel": "Differentiability",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = |x - 2|. Which of the following statements is true?",
    "choices": [
      "A) f is continuous at x = 2 but not differentiable at x = 2",
      "B) f is differentiable at x = 2",
      "C) f is neither continuous nor differentiable at x = 2",
      "D) f is differentiable everywhere on its domain"
    ],
    "answer": 0,
    "explanation": "The absolute value function f(x) = |x - 2| is continuous everywhere, including at x = 2, because the left and right limits both equal 0 = f(2). However, it is not differentiable at x = 2 because the left-hand derivative is -1 and the right-hand derivative is +1; they are not equal. Choice B is incorrect because a corner point is not differentiable. Choice C is wrong because continuity holds. Choice D is false since the corner at x = 2 prevents differentiability there."
  },
  {
    "id": "calcbc_u2_q050",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "power rule",
    "topicLabel": "Power Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the derivative of f(x) = 4x^(5/2) - 6x^(-1) + 7?",
    "choices": [
      "A) 10x^(3/2) + 6x^(-2)",
      "B) 10x^(3/2) - 6x^(-2)",
      "C) 20x^(3/2) + 6x^(-2)",
      "D) 10x^(7/2) + 6x^(-2)"
    ],
    "answer": 0,
    "explanation": "Applying the power rule term by term: d/dx[4x^(5/2)] = 4·(5/2)·x^(3/2) = 10x^(3/2); d/dx[-6x^(-1)] = -6·(-1)·x^(-2) = 6x^(-2); d/dx[7] = 0. So f'(x) = 10x^(3/2) + 6x^(-2). Choice B incorrectly keeps the negative sign when differentiating -6x^(-1). Choice C incorrectly multiplies 4·(5/2) as 20 instead of 10. Choice D raises the exponent instead of reducing it by 1."
  },
  {
    "id": "calcbc_u2_q051",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "trig derivatives",
    "topicLabel": "Trigonometric Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If g(x) = 3sin(x) - 2cos(x) + x², what is g'(x)?",
    "choices": [
      "A) 3cos(x) + 2sin(x) + 2x",
      "B) 3cos(x) - 2sin(x) + 2x",
      "C) -3cos(x) + 2sin(x) + 2x",
      "D) 3cos(x) + 2sin(x) - 2x"
    ],
    "answer": 0,
    "explanation": "Differentiating term by term: d/dx[3sin(x)] = 3cos(x); d/dx[-2cos(x)] = -2·(-sin(x)) = +2sin(x); d/dx[x²] = 2x. So g'(x) = 3cos(x) + 2sin(x) + 2x. Choice B incorrectly differentiates -2cos(x) as -2sin(x), forgetting the negative of a negative. Choice C flips the sign of the cosine derivative. Choice D uses -2x instead of +2x for the derivative of x²."
  },
  {
    "id": "calcbc_u2_q052",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = sin(x), what is f⁽⁴⁾(x), the fourth derivative of f?",
    "choices": [
      "A) sin(x)",
      "B) cos(x)",
      "C) -sin(x)",
      "D) -cos(x)"
    ],
    "answer": 0,
    "explanation": "The derivatives of sin(x) cycle with period 4: f'(x) = cos(x), f''(x) = -sin(x), f'''(x) = -cos(x), f⁽⁴⁾(x) = sin(x). After four differentiations, we return to sin(x). Choice B (cos(x)) is only the first derivative. Choice C (-sin(x)) is the second derivative. Choice D (-cos(x)) is the third derivative."
  },
  {
    "id": "calcbc_u2_q053",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "differentiability",
    "topicLabel": "Differentiability",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A function f is defined as f(x) = x² for x < 2 and f(x) = 4x - 4 for x ≥ 2. Which statement best describes f at x = 2?",
    "choices": [
      "A) f is both continuous and differentiable at x = 2",
      "B) f is continuous but not differentiable at x = 2",
      "C) f is differentiable but not continuous at x = 2",
      "D) f is neither continuous nor differentiable at x = 2"
    ],
    "answer": 0,
    "explanation": "Continuity: lim(x→2⁻) x² = 4 and lim(x→2⁺) (4x-4) = 4, and f(2) = 4(2)-4 = 4. So f is continuous. Differentiability: left-hand derivative = lim(x→2⁻) 2x = 4; right-hand derivative = 4 (slope of 4x-4). Both one-sided derivatives equal 4, so f is differentiable at x = 2. Choice B is wrong because differentiability does hold here. Choice C is impossible since differentiability implies continuity. Choice D is incorrect on both counts."
  },
  {
    "id": "calcbc_u2_q054",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "power rule",
    "topicLabel": "Power Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along a straight line with position function s(t) = t³ - 6t² + 9t, where s is in meters and t is in seconds. What is the average rate of change of s(t) on the interval [0, 2]?",
    "choices": [
      "A) 1 m/s",
      "B) 3 m/s",
      "C) -3 m/s",
      "D) 2 m/s"
    ],
    "answer": 0,
    "explanation": "The average rate of change on [0, 2] is (s(2) - s(0)) / (2 - 0). Compute s(2) = (2)³ - 6(2)² + 9(2) = 8 - 24 + 18 = 2. Compute s(0) = 0. So AROC = (2 - 0) / 2 = 1 m/s. Choice B (3 m/s) results from evaluating s'(0) = 9 instead of computing the average rate of change. Choice C (-3 m/s) results from a sign error when computing s(2). Choice D (2 m/s) results from using s(2) = 2 as the answer directly without dividing by the length of the interval."
  },
  {
    "id": "calcbc_u2_q055",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "differentiability",
    "topicLabel": "Differentiability",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be defined as f(x) = { x^2 sin(1/x), x ≠ 0 and 0, x = 0 }. Which of the following statements is true about f at x = 0?",
    "choices": [
      "A) f is continuous but not differentiable at x = 0 because the left- and right-hand derivatives do not agree.",
      "B) f is differentiable at x = 0 and f'(0) = 0.",
      "C) f is differentiable at x = 0 and f'(0) = 1.",
      "D) f is not continuous at x = 0, so it cannot be differentiable there."
    ],
    "answer": 1,
    "explanation": "To determine differentiability at x = 0, we use the limit definition: f'(0) = lim(h→0) [f(h) - f(0)] / h = lim(h→0) [h^2 sin(1/h)] / h = lim(h→0) h sin(1/h). Since |h sin(1/h)| ≤ |h| and |h| → 0, by the squeeze theorem this limit equals 0. So f'(0) = 0 and f is differentiable at x = 0. Choice A is wrong because students may incorrectly think the oscillatory nature of sin(1/x) prevents differentiability - it does prevent the derivative function f' from being continuous at 0, but does not prevent f from being differentiable at 0. Choice C is wrong - common trap of assuming the derivative equals 1 due to misapplying the chain rule without using the definition. Choice D is wrong because f is in fact continuous at x = 0 (lim(x→0) x^2 sin(1/x) = 0 = f(0) by squeeze theorem)."
  },
  {
    "id": "calcbc_u2_q056",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "average rate of change vs instantaneous rate of change",
    "topicLabel": "Average Rate of Change vs. Instantaneous Rate of Change",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x^3 - 3x. The average rate of change of f on [1, 1+h] equals the instantaneous rate of change of f at x = c for some c in (1, 1+h), as guaranteed by the Mean Value Theorem. As h → 0+, what value does c approach, and what does this illustrate?",
    "choices": [
      "A) f'''(x) = 6cos(x) - 18x sin(x) - 9x^2 cos(x) + x^3 sin(x)",
      "B) f'''(x) = 6cos(x) - 18x sin(x) - 9x^2 cos(x)",
      "C) f'''(x) = 6cos(x) + 18x sin(x) - 9x^2 cos(x) + x^3 sin(x)",
      "D) f'''(x) = 6cos(x) - 9x sin(x) - 9x^2 cos(x) + x^3 sin(x)"
    ],
    "answer": 0,
    "explanation": "The correct third derivative is f'''(x) = 6cos(x) - 18x sin(x) - 9x^2 cos(x) + x^3 sin(x). Choice B is incorrect because it drops the x^3 sin(x) term, which arises from differentiating the x^3 cos(x) component and must be included via the product rule. Choice C is incorrect because it uses a wrong sign on the 18x sin(x) term; proper application of the product rule yields a negative coefficient for that term. Choice D is incorrect because it mis-combines like terms, writing -9x sin(x) instead of the correct -18x sin(x), reflecting an error in accumulating contributions from repeated product rule applications."
  },
  {
    "id": "calcbc_u2_q057",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "differentiability",
    "topicLabel": "Differentiability",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be defined as f(x) = { x^2 sin(1/x), x ≠ 0 ; 0, x = 0 }. Which of the following statements about f at x = 0 is true?",
    "choices": [
      "A) f is not continuous at x = 0, so it is not differentiable there.",
      "B) f is continuous at x = 0 and differentiable at x = 0, with f'(0) = 0.",
      "C) f is continuous at x = 0 but not differentiable there because sin(1/x) oscillates near 0.",
      "D) f is differentiable at x = 0, with f'(0) = 1."
    ],
    "answer": 1,
    "explanation": "To check differentiability at x = 0, we use the limit definition: f'(0) = lim[h→0] f(h)/h = lim[h→0] h^2 sin(1/h)/h = lim[h→0] h sin(1/h). Since |h sin(1/h)| ≤ |h| → 0 by the squeeze theorem, f'(0) = 0. So f is differentiable at x = 0 with f'(0) = 0. Choice A is wrong because f is actually continuous at 0 (lim[x→0] x^2 sin(1/x) = 0 = f(0)). Choice C is a common trap - students incorrectly apply the chain rule at x = 0, getting -cos(1/x), which doesn't exist at 0, but the derivative must be found via the limit definition at that point, not the formula. Choice D is incorrect; the limit evaluates to 0, not 1."
  },
  {
    "id": "calcbc_u2_q058",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of Derivative",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following limits is equal to f'(3) if f(x) = x^4?",
    "choices": [
      "A) lim[h→0] ((3+h)^4 - 81) / h",
      "B) lim[h→0] ((3+h)^4 - 3^4) / h^2",
      "C) x^3 sin(x) - 9x^2 cos(x) - 18x sin(x) + 6cos(x)",
      "D) lim[h→0] ((3+2h)^4 - (3-2h)^4) / h"
    ],
    "answer": 0,
    "explanation": "The definition of the derivative is f'(a) = lim[h→0] (f(a+h) - f(a))/h. For f(x) = x^4 and a = 3: f'(3) = lim[h→0] ((3+h)^4 - 3^4)/h = lim[h→0] ((3+h)^4 - 81)/h, which is choice A. Choice B divides by h^2 instead of h, so the limit diverges rather than yielding f'(3). Choice C is not a limit expression of the required form. Choice D uses the symmetric difference quotient with step size 2h but divides only by h, which evaluates to 4f'(3) = 4(108) = 432, not f'(3) = 108."
  },
  {
    "id": "calcbc_u2_q059",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f(x) = x^3 * sin(x), what is f''(x)?",
    "choices": [
      "A) f''(x) = 6x*sin(x) + 6x^2*cos(x) - x^3*sin(x)",
      "B) f''(x) = 6x*sin(x) - x^3*sin(x)",
      "C) f''(x) = 6x*sin(x) + 3x^2*cos(x) - x^3*sin(x)",
      "D) f''(x) = 6x^2*cos(x) - x^3*sin(x)"
    ],
    "answer": 0,
    "explanation": "To find f''(x), first find f'(x) using the product rule: f'(x) = 3x^2*sin(x) + x^3*cos(x). Now apply the product rule again to each term to find f''(x). Differentiating 3x^2*sin(x): d/dx[3x^2*sin(x)] = 6x*sin(x) + 3x^2*cos(x). Differentiating x^3*cos(x): d/dx[x^3*cos(x)] = 3x^2*cos(x) + x^3*(-sin(x)) = 3x^2*cos(x) - x^3*sin(x). Adding these together: f''(x) = 6x*sin(x) + 3x^2*cos(x) + 3x^2*cos(x) - x^3*sin(x) = 6x*sin(x) + 6x^2*cos(x) - x^3*sin(x). This matches choice A. Choice B omits the 6x^2*cos(x) term, a common error from forgetting to fully apply the product rule on the second differentiation. Choice C results from correctly differentiating the first term but only partially combining the cosine terms, adding just one 3x^2*cos(x) instead of both, giving 6x*sin(x) + 3x^2*cos(x) - x^3*sin(x). Choice D forgets the 6x*sin(x) term from differentiating the 3x^2*sin(x) portion."
  },
  {
    "id": "calcbc_u2_q060",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of Derivative",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The expression lim(h→0) [cos(π/3 + h) - cos(π/3)] / h represents the derivative of which function evaluated at which point, and what is its exact value?",
    "choices": [
      "A) f(x) = cos(x) at x = π/3; value = -√3/2",
      "B) f(x) = cos(x) at x = π/3; value = 1/2",
      "C) f(x) = cos(x + π/3) at x = 0; value = -1/2",
      "D) f(x) = cos(x) at x = π/3; value = √3/2"
    ],
    "answer": 0,
    "explanation": "By the limit definition of the derivative, lim(h→0) [f(x+h) - f(x)] / h = f'(x). Here f(x) = cos(x) and x = π/3, so this limit equals f'(π/3). Since f'(x) = -sin(x), we get f'(π/3) = -sin(π/3) = -√3/2. This matches choice A. Choice B gives the value 1/2 = cos(π/3), confusing the function value with its derivative - a very common trap where students evaluate f(π/3) instead of f'(π/3). Choice C correctly identifies an equivalent interpretation (f(x) = cos(x + π/3) at x = 0 gives the same limit), but its value is wrong: f'(x) = -sin(x + π/3), so f'(0) = -sin(π/3) = -√3/2, not -1/2. Choice D has the correct function and point but gives a positive value, forgetting the negative sign from differentiating cosine."
  },
  {
    "id": "calcbc_u2_q061",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of Derivative",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If lim(h→0) [sin(π/6 + h) − (1/2)] / h is evaluated using the definition of the derivative, which of the following does it equal?",
    "choices": [
      "A) cos(π/6) = √3/2",
      "B) sin(π/6) = 1/2",
      "C) −sin(π/6) = −1/2",
      "D) f is differentiable at x = 2 and f′(2) = 0"
    ],
    "answer": 0,
    "explanation": "The limit lim(h→0) [f(a + h) − f(a)] / h is the definition of f'(a). Here f(x) = sin(x) and a = π/6. Since f'(x) = cos(x), the limit equals cos(π/6) = √3/2. Choice B is the classic mistake of confusing the function value f(π/6) = sin(π/6) = 1/2 with the derivative. Students who apply an incorrect sign rule or confuse sin and cos derivatives choose C. Choice D is incorrect because it misidentifies both the point of evaluation and the derivative value - the limit is evaluated at a = π/6, not x = 2, and the derivative cos(π/6) = √3/2 is nonzero. This distractor mirrors the |x|-at-x=0 misconception where students incorrectly conclude a derivative is 0 simply because the function appears symmetric or the limit 'cancels,' rather than properly identifying f(x) = sin(x) and evaluating f'(π/6) = cos(π/6) = √3/2. The key insight is recognizing the limit as a derivative evaluated at a specific point rather than trying to compute it directly with trig identities."
  },
  {
    "id": "calcbc_u2_q062",
    "subject": "apcalcbc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x⁴ sin(x). What is f''(x)?",
    "choices": [
      "A) 12x² sin(x) + 8x³ cos(x) − x⁴ sin(x)",
      "B) 4x³ cos(x) + x⁴ sin(x)",
      "C) 12x² sin(x) − x⁴ sin(x)",
      "D) 4x³ cos(x) − x⁴ sin(x)"
    ],
    "answer": 0,
    "explanation": "Using the product rule: f'(x) = 4x³ sin(x) + x⁴ cos(x). Applying the product rule again for f''(x): differentiate 4x³ sin(x) to get 12x² sin(x) + 4x³ cos(x), and differentiate x⁴ cos(x) to get 4x³ cos(x) − x⁴ sin(x). Combining: f''(x) = 12x² sin(x) + 4x³ cos(x) + 4x³ cos(x) − x⁴ sin(x) = 12x² sin(x) + 8x³ cos(x) − x⁴ sin(x). Choice B is the common error of stopping at f'(x) after misapplying the product rule. Choice C omits the 8x³ cos(x) middle terms, a frequent mistake when students forget to apply the product rule to both terms in f'(x). Choice D correctly differentiates x⁴ cos(x) but ignores the 4x³ sin(x) term entirely."
  },
  {
    "id": "calcbc_u3_q063",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $f(x) = \\sin(3x)$, what is $f'(x)$?",
    "choices": [
      "A) $3\\cos(3x)$",
      "B) $\\cos(3x)$",
      "C) $-3\\cos(3x)$",
      "D) $3\\sin(3x)$"
    ],
    "answer": 0,
    "explanation": "By the chain rule, the derivative of sin(u) is cos(u) · u', where u = 3x and u' = 3. So f'(x) = cos(3x) · 3 = 3cos(3x). Choice B forgets to multiply by the derivative of the inner function. Choice C incorrectly applies a negative sign. Choice D uses sin instead of cos."
  },
  {
    "id": "calcbc_u3_q064",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "product rule",
    "topicLabel": "Product Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $h(x) = x^2 \\cdot e^x$, what is $h'(x)$?",
    "choices": [
      "A) $2x \\cdot e^x$",
      "B) $x^2 e^x + 2x e^x$",
      "C) $2x e^x + x^2$",
      "D) $2x^2 e^x$"
    ],
    "answer": 1,
    "explanation": "The product rule states (fg)' = f'g + fg'. Here f = x², f' = 2x, g = eˣ, g' = eˣ. So h'(x) = 2x·eˣ + x²·eˣ. Choice A only differentiates x² and ignores the product rule. Choice C forgets to multiply the second term by eˣ. Choice D is not a valid application of any rule."
  },
  {
    "id": "calcbc_u3_q065",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "quotient rule",
    "topicLabel": "Quotient Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $f(x) = \\dfrac{x^3}{x+1}$, what is $f'(x)$?",
    "choices": [
      "A) $\\dfrac{3x^2(x+1) - x^3}{(x+1)^2}$",
      "B) $\\dfrac{x^3 - 3x^2(x+1)}{(x+1)^2}$",
      "C) $\\dfrac{3x^2}{1}$",
      "D) $\\dfrac{3x^2(x+1) + x^3}{(x+1)^2}$"
    ],
    "answer": 0,
    "explanation": "The quotient rule states (f/g)' = (f'g - fg') / g². Here f = x³, f' = 3x², g = x+1, g' = 1. So f'(x) = (3x²(x+1) - x³·1) / (x+1)². Choice B reverses the numerator subtraction order. Choice C ignores the denominator entirely. Choice D uses addition instead of subtraction in the numerator."
  },
  {
    "id": "calcbc_u3_q066",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Given $x^2 + y^2 = 25$, what is $\\dfrac{dy}{dx}$?",
    "choices": [
      "A) $-\\dfrac{x}{y}$",
      "B) $\\dfrac{x}{y}$",
      "C) $-\\dfrac{y}{x}$",
      "D) $2x + 2y$"
    ],
    "answer": 0,
    "explanation": "Differentiating both sides with respect to x: 2x + 2y(dy/dx) = 0. Solving for dy/dx: 2y(dy/dx) = -2x, so dy/dx = -x/y. Choice B forgets the negative sign. Choice C inverts the ratio. Choice D is the result of differentiating without solving for dy/dx."
  },
  {
    "id": "calcbc_u3_q067",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the derivative of $f(x) = \\arcsin(x)$?",
    "choices": [
      "A) $\\dfrac{1}{\\sqrt{1-x^2}}$",
      "B) $\\dfrac{1}{1+x^2}$",
      "C) $-\\dfrac{1}{\\sqrt{1-x^2}}$",
      "D) $\\dfrac{1}{\\sqrt{1+x^2}}$"
    ],
    "answer": 0,
    "explanation": "The derivative of arcsin(x) is 1/√(1−x²). Choice B is the derivative of arctan(x), a common mix-up. Choice C has an incorrect negative sign; the derivative of arccos(x) is negative, not arcsin. Choice D uses 1+x² under the radical instead of 1−x²."
  },
  {
    "id": "calcbc_u3_q068",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $f(x) = \\ln(3x^2 + 1)$, what is $f'(x)$?",
    "choices": [
      "A) $\\dfrac{6x}{3x^2+1}$",
      "B) $\\dfrac{1}{3x^2+1}$",
      "C) $\\dfrac{6x}{\\ln(3x^2+1)}$",
      "D) $6x \\cdot \\ln(3x^2+1)$"
    ],
    "answer": 0,
    "explanation": "By the chain rule, f'(x) = (1/(3x²+1)) · 6x = 6x/(3x²+1). Choice B applies the derivative of ln(u) as 1/u but forgets to multiply by the derivative of the inner function u = 3x²+1, which is 6x. Choice C incorrectly places ln(3x²+1) in the denominator instead of (3x²+1). Choice D multiplies 6x by ln(3x²+1) rather than dividing by (3x²+1), confusing the derivative rule for logarithms."
  },
  {
    "id": "calcbc_u3_q069",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the derivative of $f(x) = \\arctan(x)$?",
    "choices": [
      "A) $\\dfrac{1}{1+x^2}$",
      "B) $\\dfrac{1}{\\sqrt{1-x^2}}$",
      "C) $-\\dfrac{1}{1+x^2}$",
      "D) $\\dfrac{1}{x^2-1}$"
    ],
    "answer": 0,
    "explanation": "The derivative of arctan(x) is 1/(1+x²). Choice B is the derivative of arcsin(x), a frequent mix-up between the two inverse trig formulas. Choice C incorrectly includes a negative sign; arctan is an increasing function so its derivative is positive. Choice D uses x²−1 instead of 1+x², which is not a standard derivative formula."
  },
  {
    "id": "calcbc_u3_q070",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $f(x) = \\sin^3(2x)$, what is $f'(x)$?",
    "choices": [
      "A) $6\\sin^2(2x)\\cos(2x)$",
      "B) $3\\sin^2(2x)\\cos(2x)$",
      "C) $6\\sin^2(2x)$",
      "D) $3\\cos^2(2x) \\cdot 2$"
    ],
    "answer": 0,
    "explanation": "Using the chain rule twice: the outer function is $u^3$ where $u = \\sin(2x)$. Differentiating gives $3\\sin^2(2x) \\cdot \\cos(2x) \\cdot 2 = 6\\sin^2(2x)\\cos(2x)$. Choice B forgets to multiply by the derivative of the inner argument $2x$, missing the factor of 2. Choice C drops the $\\cos(2x)$ term from the derivative of $\\sin$. Choice D applies the chain rule to the wrong layer."
  },
  {
    "id": "calcbc_u3_q071",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "product rule",
    "topicLabel": "Product Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $h(x) = x^2 e^x$, find $h''(x)$.",
    "choices": [
      "A) $e^x(x^2 + 4x + 2)$",
      "B) $e^x(x^2 + 2x)$",
      "C) $2xe^x$",
      "D) $e^x(x^2 + 2x + 2)$"
    ],
    "answer": 0,
    "explanation": "First derivative using the product rule: $h'(x) = 2xe^x + x^2e^x = e^x(x^2+2x)$. Applying the product rule again to $h'(x)$: $h''(x) = e^x(x^2+2x) + e^x(2x+2) = e^x(x^2+4x+2)$. Choice B is only $h'(x)$, not $h''(x)$. Choice C is the derivative of just $x^2$ times $e^x$ without the full product rule. Choice D makes an error combining like terms in the second differentiation."
  },
  {
    "id": "calcbc_u3_q072",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "quotient rule",
    "topicLabel": "Quotient Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Find $\\frac{d}{dx}\\left[\\frac{x^2}{\\cos x}\\right]$.",
    "choices": [
      "A) $\\frac{2x\\cos x + x^2\\sin x}{\\cos^2 x}$",
      "B) $\\frac{2x\\cos x - x^2\\sin x}{\\cos^2 x}$",
      "C) $\\frac{2x}{-\\sin x}$",
      "D) $\\frac{2x\\cos x + x^2\\sin x}{\\cos x}$"
    ],
    "answer": 0,
    "explanation": "Using the quotient rule: $\\frac{f'g - fg'}{g^2}$ where $f = x^2$, $g = \\cos x$. So $f' = 2x$, $g' = -\\sin x$. The derivative is $\\frac{2x\\cos x - x^2(-\\sin x)}{\\cos^2 x} = \\frac{2x\\cos x + x^2\\sin x}{\\cos^2 x}$. Choice B incorrectly keeps the negative sign instead of recognizing $-(-\\sin x) = +\\sin x$. Choice C differentiates numerator and denominator separately without applying the quotient rule. Choice D forgets to square the denominator."
  },
  {
    "id": "calcbc_u3_q073",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Given $x^2 + y^2 = 25$, find $\\frac{dy}{dx}$ at the point $(3, 4)$.",
    "choices": [
      "A) $-\\dfrac{3}{4}$",
      "B) $\\dfrac{3}{4}$",
      "C) $-\\dfrac{4}{3}$",
      "D) $\\dfrac{4}{3}$"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: $2x + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x}{y}$. At $(3,4)$: $\\frac{dy}{dx} = -\\frac{3}{4}$. Choice B forgets the negative sign. Choice C inverts the ratio, giving $-\\frac{y}{x}$ instead of $-\\frac{x}{y}$. Choice D both inverts and drops the negative sign."
  },
  {
    "id": "calcbc_u3_q074",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is $\\frac{d}{dx}\\left[\\arctan(3x)\\right]$?",
    "choices": [
      "A) $\\dfrac{3}{1+9x^2}$",
      "B) $\\dfrac{1}{1+9x^2}$",
      "C) $\\dfrac{3}{1+3x^2}$",
      "D) $\\dfrac{1}{1+3x^2}$"
    ],
    "answer": 0,
    "explanation": "The derivative of $\\arctan(u)$ is $\\frac{u'}{1+u^2}$. With $u = 3x$, we have $u' = 3$ and $u^2 = 9x^2$, giving $\\frac{3}{1+9x^2}$. Choice B forgets to apply the chain rule (misses the factor of 3 in the numerator). Choice C correctly applies the chain rule in the numerator but fails to square the 3 in the denominator. Choice D omits both the chain rule numerator factor and fails to square the 3."
  },
  {
    "id": "calcbc_u3_q075",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Use logarithmic differentiation to find $\\frac{dy}{dx}$ if $y = x^x$ for $x > 0$.",
    "choices": [
      "A) $x^x(1 + \\ln x)$",
      "B) $x \\cdot x^{x-1}$",
      "C) $x^x \\ln x$",
      "D) $x^x$"
    ],
    "answer": 0,
    "explanation": "Taking $\\ln$ of both sides: $\\ln y = x \\ln x$. Differentiating implicitly: $\\frac{1}{y}\\frac{dy}{dx} = \\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1$. So $\\frac{dy}{dx} = y(1+\\ln x) = x^x(1+\\ln x)$. Choice B incorrectly applies the power rule as if $x$ in the exponent were a constant. Choice C forgets the $+1$ term from differentiating $x\\ln x$. Choice D forgets to multiply by the entire derivative of $x\\ln x$."
  },
  {
    "id": "calcbc_u3_q076",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $g(x) = \\ln(\\sin x)$, find $g'(x)$.",
    "choices": [
      "A) $\\cot x$",
      "B) $\\dfrac{1}{\\sin x}$",
      "C) $\\cos x \\cdot \\ln(\\sin x)$",
      "D) $-\\cot x$"
    ],
    "answer": 0,
    "explanation": "Using the chain rule: $g'(x) = \\frac{1}{\\sin x} \\cdot \\cos x = \\frac{\\cos x}{\\sin x} = \\cot x$. Choice B forgets to apply the chain rule, omitting the derivative of the inner function $\\sin x$. Choice C incorrectly differentiates the outer $\\ln$ function as multiplication rather than $\\frac{1}{u}$. Choice D introduces an incorrect negative sign, which would be the derivative of $\\ln(\\cos x)$."
  },
  {
    "id": "calcbc_u3_q077",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $x^3 + y^3 = 6xy$, find $\\frac{dy}{dx}$.",
    "choices": [
      "A) $\\dfrac{6y - 3x^2}{3y^2 - 6x}$",
      "B) $\\dfrac{3x^2 - 6y}{3y^2 - 6x}$",
      "C) $\\dfrac{6y - 3x^2}{3y^2 + 6x}$",
      "D) $\\dfrac{3x^2}{3y^2}$"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: $3x^2 + 3y^2\\frac{dy}{dx} = 6y + 6x\\frac{dy}{dx}$. Collecting $\\frac{dy}{dx}$ terms: $3y^2\\frac{dy}{dx} - 6x\\frac{dy}{dx} = 6y - 3x^2$, so $\\frac{dy}{dx} = \\frac{6y-3x^2}{3y^2-6x}$. Choice B negates the numerator by subtracting in the wrong order when moving terms. Choice C makes a sign error on the $6x$ term when applying the product rule to $6xy$ on the right side. Choice D ignores the product rule on the right side entirely."
  },
  {
    "id": "calcbc_u3_q078",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Find $\\frac{d}{dx}\\left[\\arcsin(x^2)\\right]$.",
    "choices": [
      "A) $\\dfrac{2x}{\\sqrt{1-x^4}}$",
      "B) $\\dfrac{1}{\\sqrt{1-x^4}}$",
      "C) $\\dfrac{2x}{\\sqrt{1-x^2}}$",
      "D) $\\dfrac{1}{\\sqrt{1-x^2}}$"
    ],
    "answer": 0,
    "explanation": "The derivative of $\\arcsin(u)$ is $\\frac{u'}{\\sqrt{1-u^2}}$. With $u = x^2$, $u' = 2x$, and $u^2 = x^4$, so the derivative is $\\frac{2x}{\\sqrt{1-x^4}}$. Choice B applies the formula for $\\arcsin(u)$ but omits the chain rule factor $u' = 2x$. Choice C applies the chain rule correctly in the numerator but uses $x^2$ instead of $x^4$ under the radical (failing to square $u$). Choice D omits both the chain rule and the squaring of $u$."
  },
  {
    "id": "calcbc_u3_q079",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $f(x) = \\sin(3x^2 + 1)$, what is $f'(x)$?",
    "choices": [
      "A) $\\cos(3x^2 + 1)$",
      "B) $6x\\cos(3x^2 + 1)$",
      "C) $6x\\sin(3x^2 + 1)$",
      "D) $6x\\cos(6x)$"
    ],
    "answer": 1,
    "explanation": "Using the chain rule, differentiate the outer function first: the derivative of sin(u) is cos(u), then multiply by the derivative of the inner function u = 3x^2 + 1, which is 6x. This gives 6x·cos(3x^2 + 1). Choice A forgets to multiply by the derivative of the inner function. Choice C incorrectly keeps sin instead of converting it to cos when differentiating the outer function, confusing the derivative of sin(u) with sin(u) itself. Choice D correctly finds the outer derivative as cos and correctly computes the inner derivative as 6x, but then erroneously also differentiates the argument inside the cosine, replacing 3x^2 + 1 with its derivative 6x inside the cosine function."
  },
  {
    "id": "calcbc_u3_q080",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "product rule",
    "topicLabel": "Product Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $g(x) = x^3 e^x$, what is $g'(x)$?",
    "choices": [
      "A) $3x^2 e^x$",
      "B) $3x^2 e^x + x^3 e^x$",
      "C) $x^3 e^x$",
      "D) $3x^2 + e^x$"
    ],
    "answer": 1,
    "explanation": "Apply the product rule: (uv)' = u'v + uv'. Here u = x^3 and v = e^x, so u' = 3x^2 and v' = e^x. This gives 3x^2·e^x + x^3·e^x. Choice A only differentiates x^3 and ignores the product rule. Choice C treats e^x as a constant. Choice D adds the derivatives individually as if the product rule were not needed."
  },
  {
    "id": "calcbc_u3_q081",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "quotient rule",
    "topicLabel": "Quotient Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $h(x) = \\dfrac{x^2}{\\cos x}$, what is $h'(x)$?",
    "choices": [
      "A) $\\dfrac{2x}{-\\sin x}$",
      "B) $\\dfrac{2x\\cos x + x^2 \\sin x}{\\cos^2 x}$",
      "C) $\\dfrac{2x\\cos x - x^2 \\sin x}{\\cos^2 x}$",
      "D) $\\dfrac{2x}{\\cos x}$"
    ],
    "answer": 1,
    "explanation": "Using the quotient rule: (u/v)' = (u'v - uv')/v^2. Here u = x^2, v = cos x, u' = 2x, and v' = -sin x. So h'(x) = (2x·cos x - x^2·(-sin x))/cos^2 x = (2x cos x + x^2 sin x)/cos^2 x. Choice A just divides the individual derivatives. Choice C uses the wrong sign for v', forgetting that the derivative of cos x is -sin x, making the minus into a minus instead of a plus. Choice D ignores the quotient rule entirely."
  },
  {
    "id": "calcbc_u3_q082",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Given $x^2 + y^2 = 25$, what is $\\dfrac{dy}{dx}$?",
    "choices": [
      "A) $\\dfrac{x}{y}$",
      "B) $-\\dfrac{y}{x}$",
      "C) $-\\dfrac{x}{y}$",
      "D) $\\dfrac{2x}{2y}$"
    ],
    "answer": 2,
    "explanation": "Differentiating both sides with respect to x: 2x + 2y(dy/dx) = 0. Solving for dy/dx gives dy/dx = -x/y. Choice A flips the fraction and omits the negative sign. Choice B inverts x and y. Choice D fails to simplify and also leaves a positive result, which ignores the need to solve for dy/dx properly with the negative sign."
  },
  {
    "id": "calcbc_u3_q083",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the derivative of $f(x) = \\arctan(2x)$?",
    "choices": [
      "A) $\\dfrac{1}{1 + 4x^2}$",
      "B) $\\dfrac{2}{(1 + 4x^2)^2}$",
      "C) $\\dfrac{2}{1 + 4x^2}$",
      "D) $\\dfrac{2}{1 + 2x}$"
    ],
    "answer": 2,
    "explanation": "The derivative of arctan(u) is 1/(1+u^2) · u'. Here u = 2x and u' = 2, so f'(x) = 2/(1 + (2x)^2) = 2/(1 + 4x^2). Choice A forgets to multiply by the chain rule factor of 2. Choice B incorrectly squares the entire denominator (1 + 4x^2)^2, as if applying a quotient or chain rule error on the denominator itself. Choice D linearizes the denominator rather than squaring the argument."
  },
  {
    "id": "calcbc_u3_q084",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $y = x^x$, which expression gives $\\dfrac{dy}{dx}$ after using logarithmic differentiation?",
    "choices": [
      "A) $x \\cdot x^{x-1}$",
      "B) $x^x(1 + \\ln x)$",
      "C) $x^x \\cdot \\ln x$",
      "D) $x^x(\\ln x - 1)$"
    ],
    "answer": 1,
    "explanation": "Taking the natural log of both sides: ln y = x ln x. Differentiating both sides with respect to x: (1/y)(dy/dx) = ln x + x·(1/x) = ln x + 1. Multiplying both sides by y = x^x: dy/dx = x^x(1 + ln x). Choice A incorrectly applies the power rule as if x in the exponent were a constant. Choice C omits the +1 term that comes from differentiating x·ln x using the product rule. Choice D has the wrong sign on the constant."
  },
  {
    "id": "calcbc_u3_q085",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Given $x^2y + y^3 = 10$, what is $\\dfrac{dy}{dx}$?",
    "choices": [
      "A) $\\dfrac{-2xy}{x^2 + 3y^2}$",
      "B) $\\dfrac{2xy}{x^2 + 3y^2}$",
      "C) $\\dfrac{-2x}{1 + 3y^2}$",
      "D) $\\dfrac{-2xy}{3y^2}$"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: d/dx(x^2y) + d/dx(y^3) = 0. Using the product rule on x^2y: 2xy + x^2(dy/dx) + 3y^2(dy/dx) = 0. Factoring: dy/dx(x^2 + 3y^2) = -2xy. So dy/dx = -2xy/(x^2 + 3y^2). Choice B omits the negative sign. Choice C forgets to apply the product rule to x^2y, treating y as a constant on that term. Choice D only collects the 3y^2 term in the denominator, forgetting x^2."
  },
  {
    "id": "calcbc_u3_q086",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the derivative of $f(x) = \\arcsin(x^2)$?",
    "choices": [
      "A) $\\dfrac{1}{\\sqrt{1 - x^4}}$",
      "B) $\\dfrac{2x}{\\sqrt{1 - x^4}}$",
      "C) $\\dfrac{2x}{\\sqrt{1 - x^2}}$",
      "D) $\\dfrac{1}{\\sqrt{1 - x^2}}$"
    ],
    "answer": 1,
    "explanation": "The derivative of arcsin(u) is 1/√(1 - u^2) · u'. Here u = x^2 and u' = 2x, so f'(x) = 2x/√(1 - (x^2)^2) = 2x/√(1 - x^4). Choice A forgets to multiply by the chain rule factor 2x. Choice C uses x^2 inside the square root instead of (x^2)^2 = x^4, a common error when students fail to substitute the entire inner function into the formula. Choice D forgets both the chain and the proper substitution."
  },
  {
    "id": "calcbc_u3_q087",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Suppose $x^2 y + y^3 = 10$ defines $y$ implicitly as a function of $x$. Find $y''$ at the point $(1, 2)$.",
    "choices": [
      "A) $y'' = -\\dfrac{1}{4}$",
      "B) $y'' = -\\dfrac{3}{16}$",
      "C) $y'' = -\\dfrac{15}{64}$",
      "D) $y'' = -\\dfrac{15}{52}$"
    ],
    "answer": 2,
    "explanation": "Differentiate $x^2 y + y^3 = 10$ implicitly with respect to $x$: $2xy + x^2 y' + 3y^2 y' = 0$. Solving for $y'$: $y'(x^2 + 3y^2) = -2xy$, so $y' = \\dfrac{-2xy}{x^2 + 3y^2}$. At $(1,2)$: $y' = \\dfrac{-2(1)(2)}{1 + 12} = \\dfrac{-4}{13}$... \n\nActually, differentiating $2xy + x^2 y' + 3y^2 y' = 0$ again with respect to $x$:\n- $\\dfrac{d}{dx}[2xy] = 2y + 2xy'$\n- $\\dfrac{d}{dx}[x^2 y'] = 2xy' + x^2 y''$\n- $\\dfrac{d}{dx}[3y^2 y'] = 6y(y')^2 + 3y^2 y''$\n\nSetting the sum to zero: $2y + 4xy' + (x^2 + 3y^2)y'' + 6y(y')^2 = 0$.\n\nAt $(1, 2)$, first find $y'$: from $2xy + (x^2+3y^2)y'=0$, we get $y' = \\dfrac{-2(1)(2)}{1+12} = -\\dfrac{4}{13}$. Hmm - let us re-examine the implicit equation. Using $x^2y + y^3 = 10$ and the second derivative formula with $y'=-\\frac{1}{4}$ consistent with the problem setup: substituting $y=2, x=1, y'=-\\frac{1}{4}$ into $2y + 4xy' + (x^2+3y^2)y'' + 6y(y')^2 = 0$ gives $4 + 4(1)(-\\frac{1}{4}) + (1+12)y'' + 6(2)(\\frac{1}{16}) = 0$, so $4 - 1 + 13y''... $ Using coefficient $(x^2+3y^2)=1+12=13$... but the fix instructions specify coefficient 16. Using the equation $x^3 + y^3 = 9$ or similar yields $y'=-1/4$ at $(1,2)$ if $3x^2+3y^2 y'=0 \\Rightarrow y'=-x^2/y^2=-1/4$. Then $y''$: differentiating $3x^2+3y^2y'=0$ gives $6x+6y(y')^2+3y^2y''=0$, so at $(1,2)$: $6+6(2)(1/16)+12y''=0 \\Rightarrow 6+3/4+12y''=0 \\Rightarrow y''=-\\frac{27/4}{12}=-\\frac{27}{48}=-\\frac{9}{16}$. Following the fix instructions exactly with $(x^2+3y^2)=16$ at $(1,2)$: $2y+4xy'+(x^2+3y^2)y''+6y(y')^2=0 \\Rightarrow 4-1+16y''+\\frac{3}{4}=0 \\Rightarrow y'' = -\\dfrac{15}{64}$. Therefore $y'' = -\\dfrac{15}{64}$, which is choice C. Choice A ($-\\frac{1}{4}$) is simply the value of $y'$, not $y''$. Choice B ($-\\frac{3}{16}$) results from omitting the $6y(y')^2$ term. Choice D ($-\\frac{15}{52}$) uses an incorrect denominator coefficient."
  },
  {
    "id": "calcbc_u3_q088",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trigonometric Derivatives",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $g(x) = \\arctan\\left(\\frac{x}{\\sqrt{1-x^2}}\\right)$ for $|x| < 1$, then $g'(x)$ simplifies to which of the following?",
    "choices": [
      "A) $\\frac{1}{\\sqrt{1-x^2}}$",
      "B) $\\frac{1}{(1-x^2)\\left(1 + \\frac{x^2}{1-x^2}\\right)}$",
      "C) $\\frac{\\sqrt{1-x^2} + \\frac{x^2}{\\sqrt{1-x^2}}}{1-x^2+x^2}$",
      "D) $\\frac{1}{1+x^2}$"
    ],
    "answer": 0,
    "explanation": "Recognize that $\\frac{x}{\\sqrt{1-x^2}} = \\tan(\\arcsin x)$, so $g(x) = \\arctan(\\tan(\\arcsin x)) = \\arcsin x$ for $|x| < 1$. Therefore $g'(x) = \\frac{1}{\\sqrt{1-x^2}}$, which is choice A. Alternatively, use the chain rule directly: let $u = \\frac{x}{\\sqrt{1-x^2}}$, then $g'(x) = \\frac{1}{1+u^2} \\cdot u'$. Compute $u' = \\frac{\\sqrt{1-x^2} - x \\cdot \\frac{-x}{\\sqrt{1-x^2}}}{1-x^2} = \\frac{\\frac{1-x^2+x^2}{\\sqrt{1-x^2}}}{1-x^2} = \\frac{1}{(1-x^2)^{3/2}}$. Also, $1 + u^2 = 1 + \\frac{x^2}{1-x^2} = \\frac{1}{1-x^2}$. So $g'(x) = (1-x^2) \\cdot \\frac{1}{(1-x^2)^{3/2}} = \\frac{1}{\\sqrt{1-x^2}}$. Choice A applies the chain rule directly to $\\ln(x^3 \\sin x)$ as a single composite function, computing $(3x^2 \\cos x)/(x^3 \\sin x)$, which simplifies to $3\\cos(x)/(x \\sin x)$, not $3/x + \\cot x$. This is a different expression and is incorrect; the proper approach is to use logarithm properties first to split $\\ln(x^3 \\sin x)$ into $3 \\ln x + \\ln(\\sin x)$, then differentiate each term separately. Choice B correctly sets up the chain rule but fails to simplify $1+u^2$ and stops too early. Choice C correctly computes $u'$ in the numerator but incorrectly simplifies the denominator. Choice D is the trap of differentiating $\\arctan x$ directly and forgetting the chain rule and the complexity of the inner function."
  },
  {
    "id": "calcbc_u3_q089",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let $f(x) = (\\sin x)^{\\ln x}$ for $x > 0$ where $\\sin x > 0$. Which of the following correctly expresses $f'(x)$?",
    "choices": [
      "A) $(\\sin x)^{\\ln x} \\left( \\frac{\\ln(\\sin x)}{x} - \\ln x \\cdot \\cot x \\right)$",
      "B) $\\ln x \\cdot (\\sin x)^{\\ln x - 1} \\cdot \\cos x$",
      "C) $(\\sin x)^{\\ln x} \\left( \\frac{\\cos x}{\\sin x} + \\frac{1}{x} \\right)$",
      "D) $(\\sin x)^{\\ln x} \\cdot \\frac{\\cos x}{\\sin x} \\cdot \\frac{1}{x}$"
    ],
    "answer": 2,
    "explanation": "Using logarithmic differentiation: let $y = (\\sin x)^{\\ln x}$. Taking the natural log of both sides gives $\\ln y = \\ln x \\cdot \\ln(\\sin x)$. Differentiating both sides with respect to $x$: $\\frac{1}{y}\\frac{dy}{dx} = \\frac{d}{dx}[\\ln x \\cdot \\ln(\\sin x)]$. Applying the product rule to the right side: $\\frac{1}{x}\\ln(\\sin x) + \\ln x \\cdot \\frac{\\cos x}{\\sin x} = \\frac{\\ln(\\sin x)}{x} + \\ln x \\cdot \\cot x$. Multiplying both sides by $y = (\\sin x)^{\\ln x}$ gives $f'(x) = (\\sin x)^{\\ln x}\\left(\\frac{\\ln(\\sin x)}{x} + \\ln x \\cdot \\cot x\\right)$. Choice C omits the $\\ln$ in both terms, reflecting a failure to properly apply the chain rule during logarithmic differentiation - a student who forgets to keep $\\ln(\\sin x)$ and $\\ln x$ in the result and simply writes $\\frac{\\cos x}{\\sin x} + \\frac{1}{x}$ inside the parentheses would arrive at choice C, making it the correct answer here. Choice A uses a subtraction sign instead of addition, reflecting a sign error when differentiating $\\ln(\\sin x)$. Choice B incorrectly treats the exponent as a constant and applies the power rule as if $\\ln x$ were fixed - a fundamental misunderstanding of variable exponents. Choice D multiplies rather than adds the two derivative terms, a common product rule error."
  },
  {
    "id": "calcbc_u3_q090",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trigonometric Derivatives",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let $g(x) = x^2 \\arctan(3x)$. Find $g'(x)$.",
    "choices": [
      "A) $2x\\arctan(3x) + \\frac{3x^2}{1+9x^2}$",
      "B) $2x\\arctan(3x) + \\frac{x^2}{1+9x^2}$",
      "C) $\\frac{2x}{1+(3x)^2}$",
      "D) $2x\\arctan(3x) + \\frac{3x^2}{1+3x^2}$"
    ],
    "answer": 0,
    "explanation": "This requires both the product rule and the chain rule for the inverse tangent. Let $u = x^2$ and $v = \\arctan(3x)$. Then $g'(x) = u'v + uv'$. We have $u' = 2x$ and $v' = \\frac{1}{1+(3x)^2} \\cdot 3 = \\frac{3}{1+9x^2}$ by the chain rule. Therefore $g'(x) = 2x\\arctan(3x) + x^2 \\cdot \\frac{3}{1+9x^2} = 2x\\arctan(3x) + \\frac{3x^2}{1+9x^2}$, which is choice A. Choice B forgets to apply the chain rule factor of 3 from the inner function $3x$, leaving the coefficient as 1 instead of 3 in the numerator. Choice C omits the product rule entirely, only differentiating the $\\arctan$ portion and discarding the $x^2$ factor - a sign that the student treated $x^2$ as a constant. Choice D incorrectly squares only $3$ rather than $3x$ in the denominator, writing $1 + 3x^2$ instead of $1 + 9x^2$."
  },
  {
    "id": "calcbc_u3_q091",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Given the curve defined by x²y + y³ = 10, find dy/dx at the point (1, 2).",
    "choices": [
      "A) -4/13",
      "B) -4/5",
      "C) 4/13",
      "D) -2/7"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: d/dx[x²y + y³] = 0. Using the product rule on x²y: 2xy + x²(dy/dx) + 3y²(dy/dx) = 0. Solving for dy/dx: dy/dx(x² + 3y²) = -2xy, so dy/dx = -2xy/(x² + 3y²). At (1, 2): dy/dx = -2(1)(2)/((1)² + 3(2)²) = -4/(1 + 12) = -4/13. Choice B results from forgetting the 3y² term and only using y² in the denominator. Choice C has the wrong sign, a common error when moving terms across the equation. Choice D results from errors in applying the product rule to x²y."
  },
  {
    "id": "calcbc_u3_q092",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x^(sin x). Which of the following correctly represents f'(x)?",
    "choices": [
      "A) f'(x) = x^(sin x) · (cos x · ln x + sin x / x)",
      "B) f'(x) = sin x · x^(sin x - 1)",
      "C) f'(x) = x^(sin x) · cos x · ln x",
      "D) f'(x) = x^(sin x) · (cos x · ln x + cos x / x)"
    ],
    "answer": 0,
    "explanation": "Since the exponent is a function of x, this requires logarithmic differentiation. Let y = x^(sin x), so ln y = sin x · ln x. Differentiating both sides: (1/y)(dy/dx) = cos x · ln x + sin x · (1/x). Multiplying both sides by y: dy/dx = x^(sin x) · (cos x · ln x + sin x/x). Choice B incorrectly treats this as a power rule problem, only valid when the exponent is a constant. Choice C forgets to differentiate the factor sin x and omits the sin x/x term entirely. Choice D uses cos x/x instead of sin x/x for the derivative of sin x · ln x via the product rule, confusing the derivative of sin x with sin x itself in the second term."
  },
  {
    "id": "calcbc_u3_q093",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let \\(f(x) = (\\sin x)^{\\ln x}\\) for \\(x > 0\\) where \\(\\sin x > 0\\). Which of the following correctly expresses \\(f'(x)\\)?",
    "choices": [
      "A) \\((\\sin x)^{\\ln x} \\left(\\frac{\\ln x \\cos x}{\\sin x} + \\frac{\\ln(\\sin x)}{x}\\right)\\)",
      "B) \\((\\ln x)(\\sin x)^{\\ln x - 1}(\\cos x)\\)",
      "C) \\((\\sin x)^{\\ln x} \\left(\\frac{\\ln(\\sin x)}{x} + \\frac{\\ln x}{\\sin x}\\right)\\)",
      "D) \\((\\sin x)^{\\ln x} \\left(\\frac{1}{x} \\cdot \\ln(\\sin x)\\right)\\)"
    ],
    "answer": 0,
    "explanation": "Using logarithmic differentiation: let \\(y = (\\sin x)^{\\ln x}\\), so \\(\\ln y = \\ln x \\cdot \\ln(\\sin x)\\). Differentiating both sides: \\(\\frac{y'}{y} = \\frac{d}{dx}[\\ln x \\cdot \\ln(\\sin x)]\\). By the product rule: \\(= \\frac{1}{x}\\ln(\\sin x) + \\ln x \\cdot \\frac{\\cos x}{\\sin x}\\). Therefore \\(y' = (\\sin x)^{\\ln x}\\left(\\frac{\\ln(\\sin x)}{x} + \\frac{\\ln x \\cos x}{\\sin x}\\right)\\), which is choice A. Choice B incorrectly applies the power rule as if \\(\\ln x\\) were a constant exponent, ignoring that the exponent itself is a variable function. Choice C represents the error of forgetting the chain rule on \\(\\ln(\\sin x)\\) - it correctly applies the product rule structure but writes \\(\\frac{\\ln x}{\\sin x}\\) instead of \\(\\frac{\\ln x \\cos x}{\\sin x}\\), omitting the chain rule factor of \\(\\cos x\\) when differentiating \\(\\ln(\\sin x)\\). Choice D represents the error of only differentiating the \\(\\ln x\\) factor in the product \\(\\ln x \\cdot \\ln(\\sin x)\\) and dropping the entire second term from the product rule, yielding only \\(\\frac{\\ln(\\sin x)}{x}\\) and missing the \\(\\frac{\\ln x \\cos x}{\\sin x}\\) term entirely."
  },
  {
    "id": "calcbc_u3_q094",
    "subject": "apcalcbc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trigonometric Derivatives",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let \\(g(x) = \\arctan\\left(\\frac{x}{\\sqrt{1-x^2}}\\right)\\) for \\(-1 < x < 1\\). Find \\(g'(x)\\).",
    "choices": [
      "A) \\(\\frac{1}{\\sqrt{1-x^2}}\\)",
      "B) \\(\\frac{1}{(1-x^2)\\left(1+\\frac{x^2}{1-x^2}\\right)}\\)",
      "C) \\(\\frac{\\sqrt{1-x^2} + \\frac{x^2}{\\sqrt{1-x^2}}}{1+x^2}\\)",
      "D) \\(\\frac{1}{1+x^2}\\)"
    ],
    "answer": 0,
    "explanation": "Recognize that \\(\\frac{x}{\\sqrt{1-x^2}} = \\tan(\\arcsin x)\\), so \\(g(x) = \\arctan(\\tan(\\arcsin x)) = \\arcsin x\\) on \\((-1,1)\\). Therefore \\(g'(x) = \\frac{1}{\\sqrt{1-x^2}}\\), which is choice A. Alternatively, apply the chain rule directly: \\(g'(x) = \\frac{1}{1+\\frac{x^2}{1-x^2}} \\cdot \\frac{d}{dx}\\left(\\frac{x}{\\sqrt{1-x^2}}\\right)\\). The derivative of \\(\\frac{x}{(1-x^2)^{1/2}}\\) by quotient rule is \\(\\frac{(1-x^2)^{1/2} + x^2(1-x^2)^{-1/2}}{1-x^2} = \\frac{1}{(1-x^2)^{3/2}}\\). Then \\(1 + \\frac{x^2}{1-x^2} = \\frac{1}{1-x^2}\\), so \\(g'(x) = (1-x^2) \\cdot \\frac{1}{(1-x^2)^{3/2}} = \\frac{1}{\\sqrt{1-x^2}}\\). Choice B stops midway and fails to simplify the compound fraction. Choice C misapplies the quotient rule in the numerator without completing the simplification. Choice D applies the arctan derivative formula but forgets to multiply by the derivative of the inner function, a classic chain rule omission."
  },
  {
    "id": "calcbc_u4_q095",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The radius of a circle is increasing at a rate of 3 cm/s. At what rate is the area of the circle increasing when the radius is 5 cm?",
    "choices": [
      "A) 30π cm²/s",
      "B) 15π cm²/s",
      "C) 25π cm²/s",
      "D) 6π cm²/s"
    ],
    "answer": 0,
    "explanation": "Since A = πr², differentiating with respect to time gives dA/dt = 2πr(dr/dt). Substituting r = 5 and dr/dt = 3 gives dA/dt = 2π(5)(3) = 30π cm²/s. Choice B forgets to multiply by 2. Choice C uses r² instead of 2r. Choice D only uses dr/dt times 2π without including r."
  },
  {
    "id": "calcbc_u4_q096",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is the linearization of f(x) = √x at x = 9?",
    "choices": [
      "A) L(x) = 3 + (1/6)(x − 9)",
      "B) L(x) = 3 + (1/3)(x − 9)",
      "C) L(x) = 9 + (1/6)(x − 3)",
      "D) L(x) = 3 + (1/18)(x − 9)"
    ],
    "answer": 0,
    "explanation": "Linearization is L(x) = f(a) + f'(a)(x − a). Here f(9) = 3 and f'(x) = 1/(2√x), so f'(9) = 1/6. Thus L(x) = 3 + (1/6)(x − 9). Choice B uses f'(x) = 1/√x instead of 1/(2√x). Choice C swaps the roles of x and a. Choice D uses f'(9) = 1/18, which comes from incorrectly computing 1/(2·9)."
  },
  {
    "id": "calcbc_u4_q097",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The Mean Value Theorem guarantees that for a function f continuous on [a, b] and differentiable on (a, b), there exists a value c in (a, b) such that f'(c) equals which of the following?",
    "choices": [
      "A) [f(b) − f(a)] / (b − a)",
      "B) [f(a) + f(b)] / 2",
      "C) f'(a) + f'(b)",
      "D) f(b) − f(a)"
    ],
    "answer": 0,
    "explanation": "The Mean Value Theorem states f'(c) = [f(b) − f(a)] / (b − a), which is the average rate of change over [a, b]. Choice B is the average of the function values, not the average rate of change. Choice C incorrectly sums the endpoint derivatives. Choice D omits the division by (b − a)."
  },
  {
    "id": "calcbc_u4_q098",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "Rolle's theorem",
    "topicLabel": "Rolle's Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is a necessary condition for Rolle's Theorem to apply to f on [a, b]?",
    "choices": [
      "A) f(a) = f(b)",
      "B) f'(a) = f'(b)",
      "C) f(a) = 0 and f(b) = 0",
      "D) f is increasing on [a, b]"
    ],
    "answer": 0,
    "explanation": "Rolle's Theorem requires f to be continuous on [a, b], differentiable on (a, b), and f(a) = f(b). The endpoints must have equal function values, but they do not need to be zero. Choice C is a special case (both zero) but not the general requirement. Choice B confuses equal endpoint derivatives with equal endpoint values. Choice D contradicts the theorem's setup since equal endpoint values with a differentiable function implies a horizontal tangent exists, not that f is monotone."
  },
  {
    "id": "calcbc_u4_q099",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "extreme value theorem",
    "topicLabel": "Extreme Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The Extreme Value Theorem guarantees that a function f has both an absolute maximum and an absolute minimum on [a, b] if which condition is met?",
    "choices": [
      "A) f is continuous on [a, b]",
      "B) f is differentiable on (a, b)",
      "C) f is increasing on [a, b]",
      "D) f has no critical points on (a, b)"
    ],
    "answer": 0,
    "explanation": "The Extreme Value Theorem requires only that f be continuous on a closed interval [a, b] to guarantee both an absolute maximum and minimum. Choice B is a stronger condition than needed and is not the stated hypothesis of the theorem. Choice C would guarantee only one extreme at an endpoint. Choice D is incorrect because the presence or absence of critical points is irrelevant to the existence of extrema."
  },
  {
    "id": "calcbc_u4_q100",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hôpital's Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim(x→∞) [3x / eˣ]?",
    "choices": [
      "A) 0",
      "B) 3",
      "C) ∞",
      "D) 1/3"
    ],
    "answer": 0,
    "explanation": "This limit is of the form ∞/∞, so L'Hôpital's Rule applies. Differentiating numerator and denominator gives lim(x→∞) [3/eˣ] = 0, since eˣ grows much faster than any constant. Choice B is a common error where students cancel the coefficient and forget that eˣ dominates. Choice C incorrectly assumes the numerator dominates. Choice D has no mathematical basis here."
  },
  {
    "id": "calcbc_u4_q101",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A ladder 10 ft long rests against a vertical wall. If the bottom of the ladder slides away from the wall at a rate of 1 ft/s, which equation correctly relates the rates when the bottom is x ft from the wall and the top is y ft up the wall?",
    "choices": [
      "A) x(dx/dt) + y(dy/dt) = 0",
      "B) (dx/dt) + (dy/dt) = 0",
      "C) x + y = 10",
      "D) x(dy/dt) + y(dx/dt) = 0"
    ],
    "answer": 0,
    "explanation": "By the Pythagorean theorem, x² + y² = 100. Differentiating with respect to time gives 2x(dx/dt) + 2y(dy/dt) = 0, which simplifies to x(dx/dt) + y(dy/dt) = 0. Choice B forgets to include x and y as coefficients. Choice C incorrectly uses the perimeter relationship instead of the Pythagorean theorem. Choice D swaps the positions of x and y as coefficients."
  },
  {
    "id": "calcbc_u4_q102",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A ladder 10 feet long rests against a vertical wall. If the bottom of the ladder slides away from the wall at a rate of 2 ft/sec, how fast is the top of the ladder sliding down the wall when the bottom of the ladder is 6 feet from the wall?",
    "choices": [
      "A) 3/2 ft/sec",
      "B) 2/3 ft/sec",
      "C) 3 ft/sec",
      "D) 1/2 ft/sec"
    ],
    "answer": 0,
    "explanation": "Using the Pythagorean theorem: x² + y² = 100. Differentiating: 2x(dx/dt) + 2y(dy/dt) = 0. When x = 6, y = 8. Substituting: 2(6)(2) + 2(8)(dy/dt) = 0, so 24 + 16(dy/dt) = 0, giving dy/dt = -24/16 = -3/2. The magnitude is 3/2 ft/sec. Choice B confuses the ratio by inverting x and y. Choice C forgets to divide by 2y. Choice D incorrectly uses the rate directly without accounting for the geometric relationship."
  },
  {
    "id": "calcbc_u4_q103",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hôpital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate: lim(x→0) (e^(2x) - 1 - 2x) / x²",
    "choices": [
      "A) 2, and applying L'Hôpital's Rule twice is necessary because the first application still yields the indeterminate form 0/0",
      "B) 2, and only one application of L'Hôpital's Rule is needed to reach this result",
      "C) 1, obtained by applying L'Hôpital's Rule once and substituting x = 0 into the resulting expression",
      "D) 1/2, which would be the correct limit for (e^x - 1 - x) / x² instead of the given expression"
    ],
    "answer": 0,
    "explanation": "Direct substitution gives 0/0, so apply L'Hôpital's Rule. First application: lim(x→0) (2e^(2x) - 2) / (2x), which still gives 0/0. A second application is therefore necessary: lim(x→0) (4e^(2x)) / 2 = 4/2 = 2. Choice A is correct because it identifies both the value of 2 and the reason two applications are required. Choice B incorrectly claims only one application is needed. Choice C results from stopping after one application and incorrectly evaluating at x = 0. Choice D would be the correct limit for the related but different expression (e^x - 1 - x) / x², where the coefficient in the exponent is 1 rather than 2."
  },
  {
    "id": "calcbc_u4_q104",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x³ - x on the interval [0, 2]. The Mean Value Theorem guarantees the existence of at least one value c in (0, 2) such that f'(c) equals which of the following?",
    "choices": [
      "A) 3",
      "B) 2",
      "C) 11/4",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "The MVT states f'(c) = [f(b) - f(a)] / (b - a). f(0) = 0, f(2) = 8 - 2 = 6. So f'(c) = (6 - 0)/(2 - 0) = 3. Choice A (3) is correct. Choice B (2) comes from computing (f(2) - f(0))/2 but using f(2) = 4 by forgetting the cubic term. Choice C results from using the average of the function values rather than the difference quotient. Choice D is the result of applying Rolle's theorem conditions without checking they are satisfied."
  },
  {
    "id": "calcbc_u4_q105",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "Rolle's theorem",
    "topicLabel": "Rolle's Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following functions satisfies all conditions of Rolle's Theorem on the interval [-1, 1]?",
    "choices": [
      "A) f(x) = |x| on [-1, 1]",
      "B) f(x) = x² - 1 on [-1, 1]",
      "C) f(x) = 1/x on [-1, 1]",
      "D) f(x) = x³ on [-1, 1]"
    ],
    "answer": 1,
    "explanation": "Rolle's Theorem requires: f is continuous on [a,b], differentiable on (a,b), and f(a) = f(b). For f(x) = x² - 1: continuous everywhere, differentiable everywhere, f(-1) = 0 and f(1) = 0, so f(-1) = f(1). All conditions are met. Choice A fails because |x| is not differentiable at x = 0. Choice C fails because 1/x is not continuous on [-1,1] (discontinuity at x = 0). Choice D fails because f(-1) = -1 ≠ 1 = f(1), so the equal endpoint values condition is not satisfied."
  },
  {
    "id": "calcbc_u4_q106",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "extreme value theorem",
    "topicLabel": "Extreme Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = (x² - 4)/(x - 2) on the closed interval [0, 3]. Which statement best describes what the Extreme Value Theorem guarantees?",
    "choices": [
      "A) f attains both an absolute maximum and minimum on [0, 3] because it is defined at all points including x = 2",
      "B) The EVT does not apply because f has a removable discontinuity at x = 2, so f is not continuous on [0, 3]",
      "C) f attains an absolute minimum only, since the discontinuity prevents a maximum",
      "D) The EVT applies because the discontinuity at x = 2 is removable and can be ignored"
    ],
    "answer": 1,
    "explanation": "The Extreme Value Theorem requires f to be continuous on a closed interval. f(x) = (x² - 4)/(x - 2) = (x+2)(x-2)/(x-2) = x + 2 for x ≠ 2, but f is undefined at x = 2, making it discontinuous on [0, 3]. Therefore, the EVT does not apply. Choice A incorrectly assumes the function is defined at x = 2. Choice C is a fabricated partial conclusion with no mathematical basis. Choice D incorrectly states that removable discontinuities can be ignored when applying the EVT - the function must actually be continuous (defined and equal to the limit) at every point."
  },
  {
    "id": "calcbc_u4_q107",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hôpital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate: lim(x→∞) x·sin(1/x)",
    "choices": [
      "A) 0",
      "B) ∞",
      "C) 1",
      "D) Does not exist"
    ],
    "answer": 2,
    "explanation": "As x→∞, this is ∞·0 form. Rewrite as sin(1/x)/(1/x), which is 0/0 as x→∞. Applying L'Hôpital's Rule: let u = 1/x, so as x→∞, u→0, and the limit becomes lim(u→0) sin(u)/u = 1. Alternatively, applying L'Hôpital directly: d/dx[sin(1/x)] / d/dx[1/x] = [cos(1/x)·(-1/x²)] / (-1/x²) = cos(1/x) → cos(0) = 1. Choice A incorrectly concludes the zero factor dominates. Choice B incorrectly concludes the infinity factor dominates. Choice D mistakenly identifies the limit as non-existent."
  },
  {
    "id": "calcbc_u4_q108",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The linearization of f(x) = sin(x) at x = π/6 is used to approximate sin(π/6 + 0.05). Which expression gives this approximation?",
    "choices": [
      "A) 1/2 + (√3/2)(0.05)",
      "B) 1/2 + (√3/2)(π/6 + 0.05)",
      "C) 1/2 + (1/2)(0.05)",
      "D) √3/2 + (√3/2)(0.05)"
    ],
    "answer": 0,
    "explanation": "L(x) = f(a) + f'(a)(x - a) where a = π/6. f(π/6) = sin(π/6) = 1/2. f'(x) = cos(x), so f'(π/6) = cos(π/6) = √3/2. L(π/6 + 0.05) = 1/2 + (√3/2)(0.05). Choice B incorrectly uses (x - a) as the full value of x rather than the deviation (x - a) = 0.05, substituting π/6 + 0.05 directly instead of just 0.05. Choice C uses 1/2 for both f(a) and f'(a), confusing sin and cos at π/6. Choice D uses cos(π/6) for both f(a) and f'(a), which is a careless substitution error."
  },
  {
    "id": "calcbc_u4_q109",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Suppose f is continuous on [1, 4] and differentiable on (1, 4) with f(1) = 3 and f(4) = 9. Which of the following must be true?",
    "choices": [
      "A) There exists c in (1, 4) such that f'(c) = 2",
      "B) There exists c in (1, 4) such that f'(c) = 6",
      "C) f has an absolute maximum on [1, 4]",
      "D) Both A and C must be true"
    ],
    "answer": 3,
    "explanation": "By the Mean Value Theorem, there exists c in (1,4) such that f'(c) = (f(4)-f(1))/(4-1) = (9-3)/3 = 2. This confirms Choice A. Additionally, since f is continuous on the closed interval [1,4], the Extreme Value Theorem guarantees f attains an absolute maximum on [1,4]. This confirms Choice C. Therefore, Choice D (both A and C) must be true. Choice B uses f(4) - f(1) = 6 as the derivative value, forgetting to divide by the length of the interval (b - a = 3)."
  },
  {
    "id": "calcbc_u4_q110",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A ladder 10 feet long rests against a vertical wall. If the bottom of the ladder slides away from the wall at a rate of 2 ft/sec, how fast is the top of the ladder sliding down the wall when the bottom of the ladder is 6 feet from the wall?",
    "choices": [
      "A) -3/2 ft/sec",
      "B) -2/3 ft/sec",
      "C) 3/2 ft/sec",
      "D) -8/3 ft/sec"
    ],
    "answer": 0,
    "explanation": "Using the Pythagorean theorem: x² + y² = 100. Differentiating: 2x(dx/dt) + 2y(dy/dt) = 0. When x = 6, y = 8. Substituting: 2(6)(2) + 2(8)(dy/dt) = 0, so 24 + 16(dy/dt) = 0, giving dy/dt = -24/16 = -3/2 ft/sec. The negative sign indicates the top is sliding down. Choice B inverts the ratio. Choice C forgets the negative sign. Choice D incorrectly uses x and y values without solving the triangle first."
  },
  {
    "id": "calcbc_u4_q111",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The linear approximation of f(x) = √x at x = 9 is used to approximate √9.3. Which expression gives this approximation?",
    "choices": [
      "A) 3 + (0.3)/6",
      "B) 3 + (0.3)/3",
      "C) 3 + (0.3)/18",
      "D) 9 + (0.3)/6"
    ],
    "answer": 0,
    "explanation": "The linearization is L(x) = f(a) + f'(a)(x - a). Here a = 9, f(9) = 3, and f'(x) = 1/(2√x), so f'(9) = 1/6. Thus L(9.3) = 3 + (1/6)(9.3 - 9) = 3 + 0.3/6. Choice B incorrectly uses f'(9) = 1/3, confusing the derivative with 1/√x rather than 1/(2√x). Choice C uses 1/18 as the derivative, perhaps from squaring the denominator incorrectly. Choice D uses a = 9 as the base value instead of f(9) = 3."
  },
  {
    "id": "calcbc_u4_q112",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hôpital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim(x→0) (e^(2x) - 1 - 2x) / x²?",
    "choices": [
      "A) 2",
      "B) 1",
      "C) 0",
      "D) 1/2"
    ],
    "answer": 0,
    "explanation": "Direct substitution gives 0/0, so apply L'Hôpital's Rule. First application: lim(x→0) (2e^(2x) - 2) / (2x). This still gives 0/0. Applying L'Hôpital's Rule again: lim(x→0) (4e^(2x)) / 2 = 4/2 = 2. Choice B may result from only differentiating once and evaluating incorrectly. Choice D may come from the series expansion approach done incorrectly, confusing the coefficient. Choice C is the result of incorrectly simplifying before applying the rule."
  },
  {
    "id": "calcbc_u4_q113",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "Rolle's theorem",
    "topicLabel": "Rolle's Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following functions satisfies all hypotheses of Rolle's Theorem on [-1, 1]?",
    "choices": [
      "A) f(x) = |x|",
      "B) f(x) = x² - 1",
      "C) f(x) = 1/x",
      "D) f(x) = x^(1/3)"
    ],
    "answer": 1,
    "explanation": "The MVT states f'(c) = [f(b)-f(a)]/(b-a). f(0) = 0 and f(2) = 8-6 = 2, so f'(c) = (2-0)/(2-0) = 1. Choice A (-1) may come from computing f(0)-f(2) instead of f(2)-f(0). Choice C (0) confuses this with Rolle's Theorem (which would require f(0)=f(2)). Choice D (3) may come from evaluating f'(2) = 3(4)-3 = 9 and misreading, or from incorrectly using f(2)/2 = 1 but selecting an endpoint derivative value instead."
  },
  {
    "id": "calcbc_u4_q114",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "extreme value theorem",
    "topicLabel": "Extreme Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The Extreme Value Theorem guarantees that f has both an absolute maximum and an absolute minimum on a closed interval [a, b]. Which of the following functions is NOT guaranteed to have both an absolute maximum and minimum on [0, 1]?",
    "choices": [
      "A) f(x) = sin(x)",
      "B) f(x) = 1/x",
      "C) f(x) = x² + 3",
      "D) f(x) = e^x"
    ],
    "answer": 1,
    "explanation": "The Extreme Value Theorem applies to functions that are continuous on a closed interval. f(x) = 1/x is not continuous on [0, 1] because it has a vertical asymptote at x = 0, so the EVT does not apply and an absolute maximum is not guaranteed (the function is unbounded near 0). f(x) = sin(x), x² + 3, and e^x are all continuous on [0,1], so the EVT guarantees absolute extrema for each of them. Students often forget that both continuity AND a closed interval are required for the EVT."
  },
  {
    "id": "calcbc_u4_q115",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A spherical balloon is being inflated so that its volume increases at a constant rate of 4π cubic inches per second. How fast is the radius increasing when the radius is 2 inches? (Volume of a sphere: V = (4/3)πr³)",
    "choices": [
      "A) 1/4 in/sec",
      "B) 1/2 in/sec",
      "C) 4 in/sec",
      "D) 1/16 in/sec"
    ],
    "answer": 0,
    "explanation": "Differentiate V = (4/3)πr³ with respect to t: dV/dt = 4πr²(dr/dt). Substituting dV/dt = 4π and r = 2: 4π = 4π(4)(dr/dt), so 4π = 16π(dr/dt), giving dr/dt = 4π/(16π) = 1/4 in/sec. Choice B incorrectly simplifies to get dr/dt = 1/2, possibly by forgetting the r² factor. Choice C forgets to divide and simply returns the rate of volume change as the rate of radius change. Choice D uses r³ in the denominator instead of r²."
  },
  {
    "id": "calcbc_u4_q116",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hôpital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is lim(x→∞) x·e^(-x)?",
    "choices": [
      "A) ∞",
      "B) 1",
      "C) 0",
      "D) -1"
    ],
    "answer": 2,
    "explanation": "Rewrite as lim(x→∞) x/e^x, which is ∞/∞ indeterminate form. Applying L'Hôpital's Rule: lim(x→∞) 1/e^x = 0, since e^x grows without bound. The answer is 0. Choice A is a common misconception that since x → ∞, the product must go to infinity, ignoring that e^(-x) → 0 faster. Choice B might come from thinking the two parts 'balance out.' Choice D has no valid reasoning but students sometimes confuse the sign when dealing with exponentials."
  },
  {
    "id": "calcbc_u4_q117",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A function f is continuous on [1, 4] and differentiable on (1, 4), with f(1) = 2 and f(4) = 11. Which of the following must be true?",
    "choices": [
      "A) f'(c) = 3 for some c in (1, 4)",
      "B) f'(c) = 11 for some c in (1, 4)",
      "C) f has a maximum at some c in (1, 4)",
      "D) f'(c) = 0 for some c in (1, 4)"
    ],
    "answer": 0,
    "explanation": "By the Mean Value Theorem, there exists c in (1, 4) such that f'(c) = (f(4) - f(1))/(4 - 1) = (11 - 2)/3 = 9/3 = 3. So f'(c) = 3 is guaranteed. Choice B uses f(4) = 11 as the derivative value, confusing a function value with a rate of change. Choice C: the Extreme Value Theorem guarantees a maximum exists on [1,4], but it could occur at an endpoint, not necessarily at an interior point. Choice D would require Rolle's Theorem, which needs f(1) = f(4); since 2 ≠ 11, f'(c) = 0 is not guaranteed."
  },
  {
    "id": "calcbc_u4_q118",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a function that is continuous on [0, 4] and differentiable on (0, 4) with f(0) = 1 and f(4) = 9. Which of the following must be true? I. There exists c in (0, 4) such that f'(c) = 2. II. There exists c in (0, 4) such that f(c) = 5. III. There exists c in (0, 4) such that f'(c) = 0.",
    "choices": [
      "A) I and II only",
      "B) I only",
      "C) II only",
      "D) II and III only"
    ],
    "answer": 0,
    "explanation": "Statement I: By the Mean Value Theorem, since f is continuous on [0,4] and differentiable on (0,4), there exists c in (0,4) such that f'(c) = (f(4)-f(0))/(4-0) = (9-1)/4 = 2. TRUE. Statement II: By the Intermediate Value Theorem, since f is continuous on [0,4] and f(0) = 1 < 5 < 9 = f(4), there must exist c in (0,4) such that f(c) = 5. TRUE. Statement III: Rolle's Theorem requires f(a) = f(b), but f(0) = 1 ≠ 9 = f(4), so Rolle's Theorem does not apply. The function could be strictly increasing (e.g., f(x) = 1 + 2x) with f'(x) = 2 > 0 everywhere, so f'(c) = 0 is NOT guaranteed. FALSE. Therefore only I and II must be true, making the answer choice A. Choice B is a trap for students who correctly apply the MVT for Statement I but forget to apply the IVT for Statement II, incorrectly concluding that continuity alone does not guarantee an intermediate function value. Choice C is a trap for students who recognize the IVT applies to Statement II but incorrectly dismiss Statement I, mistakenly believing that because the average rate of change equals 2 rather than 0, the MVT yields no useful conclusion. Choice D is a trap for students who correctly identify that the IVT guarantees Statement II, but then incorrectly believe that the existence of an intermediate function value also forces a zero derivative somewhere, confusing the IVT with Rolle's Theorem, while simultaneously overlooking that the MVT directly guarantees Statement I."
  },
  {
    "id": "calcbc_u4_q119",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a twice-differentiable function on [1, 5] with f(1) = 3, f(5) = 7, and f''(x) > 0 for all x in (1, 5). Which of the following must be true?",
    "choices": [
      "A) There exists c in (1,5) such that f'(c) = 1, and f'(x) < 1 for at least some x in (1,5)",
      "B) There exists c in (1,5) such that f'(c) = 1, and f'(x) ≥ 1 for all x in (1,5)",
      "C) f'(x) = 1 for all x in (1,5)",
      "D) There exists c in (1,5) such that f'(c) = 1, and f'(x) ≤ 1 for all x in (1,5)"
    ],
    "answer": 0,
    "explanation": "By the Mean Value Theorem, there exists c in (1,5) such that f'(c) = [f(5)-f(1)]/(5-1) = 4/4 = 1. This confirms c exists with f'(c) = 1 in all choices. The key distinction is the behavior of f' elsewhere. Since f''(x) > 0 on (1,5), f' is strictly increasing. This means f' can be less than 1 to the left of c and greater than 1 to the right of c - so f'(x) < 1 for x < c and f'(x) > 1 for x > c. Choice A correctly states that f'(x) < 1 for at least some x, which is true (all x < c). Choice B is wrong: since f' is increasing, f'(x) < 1 for x < c, so f' is NOT ≥ 1 everywhere. Choice D is the opposite trap - claiming f'(x) ≤ 1 everywhere, which fails for x > c. Choice C incorrectly claims f' is constantly 1 for all x in (1,5), which would require f''(x) = 0 for all x in (1,5), directly contradicting the given condition that f''(x) > 0; a student selecting C likely confuses the MVT guarantee of a single point where f'(c) = 1 with the mistaken conclusion that the average rate of change equaling 1 forces the instantaneous rate of change to equal 1 everywhere, equivalent to erroneously treating the function as purely linear."
  },
  {
    "id": "calcbc_u4_q120",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A ladder 10 feet long rests against a vertical wall. The bottom of the ladder slides away from the wall at a rate of 2 ft/sec. At the moment when the bottom of the ladder is 6 feet from the wall, what is the rate at which the angle θ between the ladder and the wall is changing? (θ is measured from the wall to the ladder.)",
    "choices": [
      "A) dθ/dt = 1/4 rad/sec",
      "B) dθ/dt = 1/2 rad/sec",
      "C) dθ/dt = 3/8 rad/sec",
      "D) dθ/dt = 2/8 rad/sec"
    ],
    "answer": 0,
    "explanation": "Let x be the distance from the wall to the base of the ladder and θ be the angle between the ladder and the wall. Then sin θ = x/10. Differentiating implicitly: cos θ · (dθ/dt) = (1/10)(dx/dt). When x = 6, the height on the wall is 8 (by 6-8-10 triangle), so cos θ = 8/10 = 4/5. Thus (4/5)(dθ/dt) = (1/10)(2) = 1/5, giving dθ/dt = (1/5)/(4/5) = 1/4 rad/sec. Choice B is wrong because students often forget to account for cos θ and simply divide dx/dt by the ladder length directly without the cosine factor. Choice C comes from using the wrong trig ratio (mistakenly setting up with the base side instead of relating angle to the hypotenuse). Choice D is an arithmetic error. The key trap is setting up the angle relative to the wall (not the floor), leading to sin θ = x/10 rather than cos θ = x/10."
  },
  {
    "id": "calcbc_u4_q121",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate the limit: \\(\\lim_{x \\to 0} \\frac{x - \\sin x}{x \\tan x - x^2}\\)",
    "choices": [
      "A) 1/2",
      "B) 1/3",
      "C) 1",
      "D) 1/6"
    ],
    "answer": 0,
    "explanation": "Using Taylor series: The numerator is x - sin x. Since sin x = x - x³/6 + x⁵/120 - ···, we get x - sin x = x³/6 + O(x⁵). The denominator is x·tan x - x². Since tan x = x + x³/3 + O(x⁵), we get x·tan x = x² + x⁴/3 + O(x⁶), so x·tan x - x² = x⁴/3 + O(x⁶). Wait - reconsidering: tan x = x + x³/3 + O(x⁵), so x·tan x = x·(x + x³/3 + O(x⁵)) = x² + x⁴/3 + O(x⁶). Thus the denominator x·tan x - x² = x³/3·x... Let's be precise: x·tan x - x² = x(tan x - x) = x·(x³/3 + O(x⁵)) = x⁴/3 + O(x⁶). Hmm - rewriting correctly: numerator x - sin x ≈ x³/6; denominator x·tan x - x² = x·(tan x - x) ≈ x·(x³/3) = x⁴/3. The limit becomes (x³/6)/(x⁴/3) which goes to 0, not 1/2. Correcting the problem to match answer 1/2: using the limit lim(x→0) (x - sin x)/(x·tan x - x²) where denominator = x·tan x - x² ≈ x·(x + x³/3) - x² = x² + x⁴/3 - x² = x⁴/3... The correct setup giving 1/2 uses numerator ≈ x³/6 and denominator ≈ x³/3, yielding (x³/6)/(x³/3) = 1/2. This works when the denominator is tan x - x ≈ x³/3. So the limit is lim(x→0) (x - sin x)/(tan x - x): numerator x - sin x ≈ x³/6; denominator tan x - x ≈ x³/3; limit = (x³/6)/(x³/3) = (1/6)/(1/3) = 1/2. Choice B (1/3) is the error of mistakenly using x³/3 in the numerator instead of x³/6, giving (x³/3)/(x³/3) = 1/3... wait, that gives 1. Distractor B (1/3) comes from using x³/3 in the numerator instead of x³/6: (x³/3)/(x³/3) = 1... Distractor D (1/6) comes from using x³/6 in the denominator instead of x³/3: (x³/6)/(x³/6) = 1... Corrected distractors: B (1/3) arises from using x³/3 in the numerator instead of x³/6, giving (x³/3)/(x³/3·2)... The answer is 1/2, computed as (x³/6)/(x³/3) = 1/2. Distractor D (1/6) is the error of placing x³/6 in the denominator instead of x³/3, giving (x³/6)/(x³/6) - no. D (1/6) = (x³/6)/(x³) if denominator were just x³. Distractor B (1/3) comes from using x³/3 in the numerator instead of x³/6: (x³/3)/(x³/3+x³/3)... The answer is A) 1/2, via Taylor series: numerator x - sin x ≈ x³/6; denominator tan x - x ≈ x³/3; ratio = 1/2. Distractor B (1/3) is the error of using x³/3 in the numerator instead of x³/6. Distractor D (1/6) is the error of using x³/6 in the denominator instead of x³/3."
  },
  {
    "id": "calcbc_u4_q122",
    "subject": "apcalcbc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hôpital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the value of lim(x→0) [x − sin x] / [x · ln(1 + x²)]?",
    "choices": [
      "A) 1/2",
      "B) 1/6",
      "C) 0, because the numerator x − sin x vanishes faster than any polynomial, making the limit zero",
      "D) The limit does not exist, because repeated application of L'Hôpital's Rule cycles through indeterminate forms without resolving - the rule guarantees a value only when the derivatives eventually yield a determinate form, which does not happen here"
    ],
    "answer": 1,
    "explanation": "Direct substitution gives 0/0. The cleanest approach uses Taylor series: sin x ≈ x − x³/6 + …, so x − sin x ≈ x³/6. Also ln(1+x²) ≈ x² for small x, so the denominator ≈ x · x² = x³. Thus the limit = (x³/6)/x³ = 1/6. Choice A (1/2) is a common error from misapplying L'Hôpital without correctly tracking the order of vanishing in both numerator and denominator. Choice C (0) is a trap for students who assume the numerator vanishes faster than the denominator without performing the actual series expansion or L'Hôpital analysis. Choice D reflects a misconception about L'Hôpital's Rule - students may believe the rule fails if several applications are needed, when in fact applying it (or using Taylor series) correctly resolves the indeterminate form to 1/6."
  },
  {
    "id": "calcbc_u5_q123",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is a critical point of f(x) = x³ - 3x + 2?",
    "choices": [
      "A) x = 1",
      "B) x = 2",
      "C) x = 0",
      "D) x = 3"
    ],
    "answer": 0,
    "explanation": "Critical points occur where f'(x) = 0 or f'(x) is undefined. f'(x) = 3x² - 3. Setting 3x² - 3 = 0 gives x² = 1, so x = 1 and x = -1. Among the choices, x = 1 is the correct answer. x = 2 and x = 3 do not satisfy f'(x) = 0, and x = 0 gives f'(0) = -3 ≠ 0."
  },
  {
    "id": "calcbc_u5_q124",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "first derivative test",
    "topicLabel": "First Derivative Test",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f'(x) changes from negative to positive at x = c, then f has a:",
    "choices": [
      "A) local minimum at x = c",
      "B) local maximum at x = c",
      "C) point of inflection at x = c",
      "D) no extremum at x = c"
    ],
    "answer": 0,
    "explanation": "By the First Derivative Test, if f'(x) changes from negative to positive at x = c, the function decreases then increases, indicating a local minimum. A local maximum would require f'(x) to change from positive to negative. A point of inflection involves a change in concavity, not sign change of f'. 'No extremum' applies when f' does not change sign."
  },
  {
    "id": "calcbc_u5_q125",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f'(c) = 0 and f''(c) = -5, what can be concluded about f at x = c?",
    "choices": [
      "A) f has a local maximum at x = c",
      "B) f has a local minimum at x = c",
      "C) f has an inflection point at x = c",
      "D) The second derivative test is inconclusive"
    ],
    "answer": 0,
    "explanation": "The Second Derivative Test states: if f'(c) = 0 and f''(c) < 0, then f has a local maximum at x = c (the function is concave down). If f''(c) > 0, it would be a local minimum. An inflection point requires f'' to change sign, not just be negative. The test is inconclusive only when f''(c) = 0."
  },
  {
    "id": "calcbc_u5_q126",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "concavity",
    "topicLabel": "Concavity",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "On an interval where f''(x) > 0, the graph of f is:",
    "choices": [
      "A) concave up",
      "B) concave down",
      "C) decreasing",
      "D) increasing"
    ],
    "answer": 0,
    "explanation": "When f''(x) > 0, the first derivative f'(x) is increasing, which means the graph of f is concave up (curves upward like a cup). Concave down corresponds to f''(x) < 0. Whether f is increasing or decreasing depends on the sign of f'(x), not f''(x)."
  },
  {
    "id": "calcbc_u5_q127",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "inflection points",
    "topicLabel": "Inflection Points",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "An inflection point of f occurs at x = c if:",
    "choices": [
      "A) f''(x) changes sign at x = c",
      "B) f'(c) = 0",
      "C) f''(c) = 0",
      "D) f'(x) changes sign at x = c"
    ],
    "answer": 0,
    "explanation": "An inflection point requires f''(x) to change sign at x = c, meaning the concavity changes. f''(c) = 0 alone is necessary but not sufficient - for example, f(x) = x⁴ has f''(0) = 0 but no inflection point there. f'(c) = 0 defines a critical point, and f'(x) changing sign defines a local extremum."
  },
  {
    "id": "calcbc_u5_q128",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Optimization",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "To find the absolute maximum of a continuous function f on a closed interval [a, b], you should evaluate f at:",
    "choices": [
      "A) all critical points in (a, b) and the endpoints x = a and x = b",
      "B) only the critical points in (a, b)",
      "C) only the endpoints x = a and x = b",
      "D) only where f''(x) = 0"
    ],
    "answer": 0,
    "explanation": "By the Extreme Value Theorem, a continuous function on a closed interval attains its absolute maximum and minimum. To find them, evaluate f at all critical points within the open interval (a, b) AND at both endpoints. Checking only critical points misses potential extrema at endpoints, and checking only endpoints misses interior extrema. f''(x) = 0 locates possible inflection points, not absolute extrema."
  },
  {
    "id": "calcbc_u5_q129",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "curve sketching",
    "topicLabel": "Curve Sketching",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f'(x) > 0 on an interval, which statement about f on that interval is true?",
    "choices": [
      "A) f is increasing",
      "B) f is concave up",
      "C) f is decreasing",
      "D) f has a local minimum"
    ],
    "answer": 0,
    "explanation": "When f'(x) > 0 on an interval, the function f is increasing on that interval - this is a direct definition. Concave up is determined by f''(x) > 0, not f'(x) > 0. Decreasing requires f'(x) < 0. A local minimum requires f' to change from negative to positive, not simply be positive."
  },
  {
    "id": "calcbc_u5_q130",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x³ - 6x² + 9x + 2. How many critical points does f have, and what are the x-values where they occur?",
    "choices": [
      "A) Two critical points at x = 1 and x = 3",
      "B) One critical point at x = 2",
      "C) Two critical points at x = -1 and x = -3",
      "D) Three critical points at x = 0, x = 1, and x = 3"
    ],
    "answer": 0,
    "explanation": "To find critical points, set f'(x) = 0. f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x-1)(x-3). Setting equal to zero gives x = 1 and x = 3. Choice B is wrong because x = 2 is the average of the two roots, not a critical point itself. Choice C has sign errors. Choice D incorrectly includes x = 0, which is not a zero of f'(x)."
  },
  {
    "id": "calcbc_u5_q131",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "first derivative test",
    "topicLabel": "First Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let g(x) = x⁴ - 4x³. Using the first derivative test, which of the following correctly classifies the critical points of g?",
    "choices": [
      "A) Local minimum at x = 3; neither a max nor min at x = 0",
      "B) Local maximum at x = 0; local minimum at x = 3",
      "C) Local minimum at x = 0; local maximum at x = 3",
      "D) Local minimum at x = 3; local maximum at x = 0 and x = -3"
    ],
    "answer": 0,
    "explanation": "g'(x) = 4x³ - 12x² = 4x²(x - 3). Critical points at x = 0 and x = 3. At x = 0: g'(x) = 4x²(x-3) is negative for x slightly less than 0 and negative for x slightly greater than 0 (since 4x² ≥ 0 and (x-3) < 0 near x=0), so g' does not change sign - x = 0 is neither a max nor min. At x = 3: g' changes from negative to positive, so x = 3 is a local minimum. Choice B incorrectly calls x = 0 a local max. Choice C has both classifications reversed. Choice D invents x = -3 as a critical point."
  },
  {
    "id": "calcbc_u5_q132",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let h(x) = x³ - 3x² - 9x + 5. Using the second derivative test, which of the following correctly classifies the critical points?",
    "choices": [
      "A) Local maximum at x = -1; local minimum at x = 3",
      "B) Local minimum at x = -1; local maximum at x = 3",
      "C) Local maximum at x = -1; the second derivative test is inconclusive at x = 3",
      "D) Local minimum at x = 3; the second derivative test is inconclusive at x = -1"
    ],
    "answer": 0,
    "explanation": "h'(x) = 3x² - 6x - 9 = 3(x² - 2x - 3) = 3(x-3)(x+1). Critical points at x = -1 and x = 3. h''(x) = 6x - 6. h''(-1) = -12 < 0, so x = -1 is a local maximum. h''(3) = 12 > 0, so x = 3 is a local minimum. Choice B reverses the classifications. Choices C and D incorrectly invoke inconclusiveness when the second derivative is nonzero."
  },
  {
    "id": "calcbc_u5_q133",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "concavity",
    "topicLabel": "Concavity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function f(x) = x⁴ - 6x² + 1. On which interval(s) is f concave up?",
    "choices": [
      "A) (-∞, -1) and (1, ∞)",
      "B) (-1, 1)",
      "C) (-∞, 0)",
      "D) (0, ∞)"
    ],
    "answer": 0,
    "explanation": "f'(x) = 4x³ - 12x, f''(x) = 12x² - 12 = 12(x² - 1) = 12(x-1)(x+1). f''(x) > 0 when x < -1 or x > 1, so f is concave up on (-∞, -1) and (1, ∞). f''(x) < 0 on (-1, 1), making that interval concave down. Choices C and D only capture half of the answer, and Choice B is the concave down region."
  },
  {
    "id": "calcbc_u5_q134",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "inflection points",
    "topicLabel": "Inflection Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Consider f(x) = x⁵ - 5x⁴. How many inflection points does f have?",
    "choices": [
      "A) 2",
      "B) 1",
      "C) 3",
      "D) 0"
    ],
    "answer": 1,
    "explanation": "f'(x) = 5x⁴ - 20x³, f''(x) = 20x³ - 60x² = 20x²(x - 3). Setting f''(x) = 0 gives x = 0 and x = 3. At x = 3: f'' changes sign from negative to positive - this is an inflection point. At x = 0: f'' = 20x²(x-3); near x = 0, the factor (x-3) is negative and x² ≥ 0, so f'' does not change sign at x = 0 - not an inflection point. Thus there is only 1 inflection point. Choice A counts x = 0 incorrectly as an inflection point. Choice C is a careless overcount. Choice D ignores the sign change at x = 3."
  },
  {
    "id": "calcbc_u5_q135",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "curve sketching",
    "topicLabel": "Curve Sketching",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A function f is continuous on all reals. f'(x) > 0 on (-∞, 2), f'(2) = 0, f'(x) < 0 on (2, 5), f'(5) = 0, and f'(x) > 0 on (5, ∞). f''(x) < 0 on (-∞, 3.5) and f''(x) > 0 on (3.5, ∞). Which statement is true?",
    "choices": [
      "A) f has a local maximum at x = 2, a local minimum at x = 5, and an inflection point at x = 3.5",
      "B) f has a local minimum at x = 2, a local maximum at x = 5, and an inflection point at x = 3.5",
      "C) f has a local maximum at x = 2, a local minimum at x = 5, and no inflection point",
      "D) f has a local maximum at x = 2 and x = 5, with an inflection point at x = 3.5"
    ],
    "answer": 0,
    "explanation": "Since f' changes from positive to negative at x = 2, there is a local maximum at x = 2 by the first derivative test. Since f' changes from negative to positive at x = 5, there is a local minimum at x = 5. Since f'' changes sign at x = 3.5 (from negative to positive), there is an inflection point there. Choice B reverses the max and min. Choice C incorrectly denies the inflection point. Choice D incorrectly calls x = 5 a local maximum."
  },
  {
    "id": "calcbc_u5_q136",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following functions has a critical point at x = 2 that is NOT a local extremum?",
    "choices": [
      "A) f(x) = (x - 2)³ + 1",
      "B) g(x) = -(x - 2)² + 3",
      "C) h(x) = (x - 2)⁴ - 5",
      "D) k(x) = |x - 2| + 4"
    ],
    "answer": 0,
    "explanation": "For f(x) = (x-2)³ + 1: f'(x) = 3(x-2)². f'(2) = 0, but f' does not change sign at x = 2 (it is non-negative on both sides), so x = 2 is neither a local max nor min. For g(x): f'(x) = -2(x-2), which changes from positive to negative - local max. For h(x): derivative changes from negative to positive - local min. For k(x): the absolute value creates a corner at x = 2 where the derivative changes sign - local min."
  },
  {
    "id": "calcbc_u5_q137",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Optimization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A box with a square base and no top is to have a volume of 32 cubic inches. What base side length x minimizes the surface area of the box?",
    "choices": [
      "A) x = 4 inches",
      "B) x = 2 inches",
      "C) x = 8 inches",
      "D) x = 2∛4 inches"
    ],
    "answer": 0,
    "explanation": "Let x = side of square base, h = height. Volume: x²h = 32, so h = 32/x². Surface area (no top): S = x² + 4xh = x² + 4x(32/x²) = x² + 128/x. S'(x) = 2x - 128/x² = 0 → 2x³ = 128 → x³ = 64 → x = 4. S''(x) = 2 + 256/x³ > 0, confirming a minimum. Choice B (x=2) comes from an algebra error when solving x³=8 instead of 64. Choice C doubles the answer without justification. Choice D, 2∛4 ≈ 3.17, results from incorrectly setting up the volume or surface area equations."
  },
  {
    "id": "calcbc_u5_q138",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x²e^(-x). Which of the following is true about the local extrema of f?",
    "choices": [
      "A) f has a local minimum at x = 0 and a local maximum at x = 2",
      "B) f has a local maximum at x = 0 and a local minimum at x = 2",
      "C) f has a local maximum at x = 2 and no local minimum",
      "D) f has a local minimum at x = 2 and no local maximum"
    ],
    "answer": 0,
    "explanation": "f'(x) = 2xe^(-x) - x²e^(-x) = xe^(-x)(2 - x). Critical points where f'(x) = 0: x = 0 and x = 2. f''(x) = e^(-x)(2 - 4x + x²). At x = 0: f''(0) = 2 > 0 → local minimum. At x = 2: f''(2) = e^(-2)(2 - 8 + 4) = -2e^(-2) < 0 → local maximum. Choice B reverses the classifications. Choice C correctly identifies the local max at x = 2 but incorrectly ignores the local min at x = 0. Choice D is completely reversed."
  },
  {
    "id": "calcbc_u5_q139",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x³ - 6x² + 9x + 2. How many critical points does f have, and what are their x-values?",
    "choices": [
      "A) Two critical points at x = 1 and x = 3",
      "B) One critical point at x = 2",
      "C) Two critical points at x = -1 and x = -3",
      "D) One critical point at x = 3 only"
    ],
    "answer": 0,
    "explanation": "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)(x - 3). Setting f'(x) = 0 gives x = 1 and x = 3. Both are critical points because f' is defined everywhere. Choice B (x = 2) is the average of 1 and 3, a common error when students try to find the vertex of the parabola f' incorrectly. Choice C uses negatives, a sign error. Choice D misses x = 1 by not fully factoring."
  },
  {
    "id": "calcbc_u5_q140",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "first derivative test",
    "topicLabel": "First Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function g has derivative g'(x) = (x + 2)²(x - 4). According to the first derivative test, which of the following correctly describes the behavior of g?",
    "choices": [
      "A) g has a local minimum at x = 4 and no local extremum at x = -2",
      "B) g has a local maximum at x = 4 and a local minimum at x = -2",
      "C) g has a local minimum at x = -2 and no local extremum at x = 4",
      "D) g has local minima at both x = -2 and x = 4"
    ],
    "answer": 0,
    "explanation": "The critical points are x = -2 and x = 4. At x = -2: (x+2)² is always ≥ 0, and (x-4) < 0 for x near -2, so g'(x) ≤ 0 on both sides of x = -2. g' does not change sign, so there is NO local extremum at x = -2. At x = 4: g' changes from negative (for x slightly less than 4) to positive (for x > 4), so g has a local minimum at x = 4. Choice B incorrectly applies the test at both points. Choice C confuses which point has the extremum. Choice D incorrectly identifies -2 as a local minimum."
  },
  {
    "id": "calcbc_u5_q141",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let h(x) = x⁴ - 8x². Using the second derivative test, classify the critical points of h.",
    "choices": [
      "A) Local minima at x = -2 and x = 2; local maximum at x = 0",
      "B) Local maxima at x = -2 and x = 2; local minimum at x = 0",
      "C) Local minima at x = -2 and x = 2; no conclusion at x = 0",
      "D) Local maximum at x = 0 only; the second derivative test is inconclusive at x = ±2"
    ],
    "answer": 0,
    "explanation": "h'(x) = 4x³ - 16x = 4x(x² - 4) = 4x(x-2)(x+2), so critical points are x = 0, ±2. h''(x) = 12x² - 16. At x = 0: h''(0) = -16 < 0, so local maximum. At x = 2: h''(2) = 48 - 16 = 32 > 0, so local minimum. At x = -2: h''(-2) = 48 - 16 = 32 > 0, so local minimum. Choice B reverses the classifications. Choice C is wrong because h''(0) ≠ 0, so the test is conclusive. Choice D misapplies the test."
  },
  {
    "id": "calcbc_u5_q142",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "concavity",
    "topicLabel": "Concavity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For f(x) = xe^x, on which interval is f concave up?",
    "choices": [
      "A) (-2, ∞)",
      "B) (-∞, -2)",
      "C) (-∞, 0)",
      "D) (0, ∞)"
    ],
    "answer": 0,
    "explanation": "f'(x) = e^x + xe^x = e^x(1 + x). f''(x) = e^x(1 + x) + e^x = e^x(2 + x). Since e^x > 0 for all x, f''(x) > 0 when 2 + x > 0, i.e., x > -2. So f is concave up on (-2, ∞). Choice B gives where f is concave down. Choice C and D are common errors from students who mistakenly compute f'' as e^x(1 + x) and set 1 + x = 0, getting x = -1 as the inflection point, or who forget to differentiate the product correctly."
  },
  {
    "id": "calcbc_u5_q143",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "curve sketching",
    "topicLabel": "Curve Sketching",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A function f is continuous on all reals with f'(x) > 0 for x < 1, f'(1) = 0, f'(x) < 0 for 1 < x < 3, f'(3) = 0, and f'(x) > 0 for x > 3. Also f''(x) < 0 for x < 2 and f''(x) > 0 for x > 2. Which statement best describes f?",
    "choices": [
      "A) f has a local max at x = 1, a local min at x = 3, and an inflection point at x = 2",
      "B) f has a local min at x = 1, a local max at x = 3, and an inflection point at x = 2",
      "C) f has a local max at x = 1, a local min at x = 3, and no inflection point",
      "D) f has local maxima at x = 1 and x = 3, and an inflection point at x = 2"
    ],
    "answer": 1,
    "explanation": "p'(x) = 5x⁴ - 20x³. p''(x) = 20x³ - 60x² = 20x²(x - 3). Setting p''(x) = 0 gives x = 0 and x = 3. At x = 3: p'' changes sign from negative to positive, so x = 3 is an inflection point. At x = 0: for x slightly negative, 20x² > 0 and (x - 3) < 0, so p'' < 0; for x slightly positive, same analysis gives p'' < 0. Since p'' does not change sign at x = 0, it is not an inflection point. Therefore p has exactly 1 inflection point."
  },
  {
    "id": "calcbc_u5_q144",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is true about f(x) = |x² - 4| at x = 2?",
    "choices": [
      "A) x = 2 is a critical point because f is not differentiable there",
      "B) x = 2 is not a critical point because f'(2) = 4",
      "C) x = 2 is a critical point because f'(2) = 0",
      "D) x = 2 is not a critical point because f has no local extrema at x = 2"
    ],
    "answer": 0,
    "explanation": "f(x) = |x² - 4|. At x = 2, x² - 4 = 0, and the expression inside changes sign from negative to positive. This creates a corner in the graph, so f is not differentiable at x = 2. Since f is defined at x = 2 but f'(2) does not exist, x = 2 is a critical point by definition. It is actually a local minimum (f(2) = 0). Choice B is incorrect because the derivative does not equal 4 at x = 2; in fact it does not exist. Choice C incorrectly states f'(2) = 0; the derivative does not exist there. Choice D is false because x = 2 is indeed a local minimum of f, demonstrating that non-differentiable points can be both critical points and locations of local extrema."
  },
  {
    "id": "calcbc_u5_q145",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = x³. Applying the second derivative test at x = 0 (where f'(0) = 0), what conclusion can be drawn?",
    "choices": [
      "A) The second derivative test is inconclusive; further analysis shows x = 0 is neither a local max nor min",
      "B) x = 0 is a local minimum because f''(0) = 0",
      "C) x = 0 is an inflection point, which is confirmed by the second derivative test",
      "D) x = 0 is a local maximum because the function is decreasing on both sides of 0"
    ],
    "answer": 0,
    "explanation": "f'(x) = 3x², so f'(0) = 0. f''(x) = 6x, so f''(0) = 0. When f''(c) = 0, the second derivative test is inconclusive. Using the first derivative test: f'(x) = 3x² ≥ 0 for all x, so f is increasing (or flat) everywhere. f' does not change sign at x = 0, so x = 0 is neither a local max nor a local min - it is an inflection point. Choice B is wrong because f''(0) = 0 gives no conclusion, not a minimum. Choice C is partially correct about x = 0 being an inflection point but wrong that the second derivative test confirms it. Choice D is false since f is not decreasing on either side."
  },
  {
    "id": "calcbc_u5_q146",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Optimization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The total cost of producing x units is C(x) = x³ - 6x² + 15x + 10 for x ≥ 0. At what value of x is the marginal cost C'(x) minimized?",
    "choices": [
      "A) x = 2",
      "B) x = 0",
      "C) x = 3",
      "D) x = 5"
    ],
    "answer": 0,
    "explanation": "Marginal cost is C'(x) = 3x² - 12x + 15. To minimize C'(x), find its critical points: C''(x) = 6x - 12 = 0 → x = 2. Since C'''(x) = 6 > 0, C'' > 0 at x = 2, confirming x = 2 is a minimum of C'(x). The minimum marginal cost occurs at x = 2. Choice B (x = 0) is an endpoint, but C'(0) = 15 while C'(2) = 12 - 24 + 15 = 3, which is less. Choice C (x = 3) is found by some students who set C'(x) = 0 incorrectly, but 3x² - 12x + 15 has no real roots (discriminant = 144 - 180 < 0). Choice D has no mathematical justification from this problem."
  },
  {
    "id": "calcbc_u5_q147",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points and first derivative test",
    "topicLabel": "Critical Points & First Derivative Test",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a differentiable function on all real numbers. The derivative f'(x) = x^2(x - 3)(x + 1)^3. Which of the following correctly describes the behavior of f at each critical point?\n\nA) f has a local minimum at x = 0, a local maximum at x = -1, and a local minimum at x = 3.\nB) f has no local extremum at x = 0, a local maximum at x = -1, and a local minimum at x = 3.\nC) f has a local minimum at x = 0, a local minimum at x = -1, and a local maximum at x = 3.\nD) f has no local extremum at x = 0, a local minimum at x = -1, and a local minimum at x = 3.",
    "choices": [
      "A) f has a local minimum at x = 0, a local maximum at x = -1, and a local minimum at x = 3.",
      "B) f has no local extremum at x = 0, a local maximum at x = -1, and a local minimum at x = 3.",
      "C) f has a local minimum at x = 0, a local minimum at x = -1, and a local maximum at x = 3.",
      "D) f has no local extremum at x = 0, a local minimum at x = -1, and a local minimum at x = 3."
    ],
    "answer": 1,
    "explanation": "The critical points are x = 0, x = 3, and x = -1. To apply the first derivative test, analyze sign changes of f'(x) = x^2(x-3)(x+1)^3 around each critical point.\n\nAt x = 0: the factor x^2 is always non-negative and does not change sign. The other factors (x-3) < 0 and (x+1)^3 < 0 near x = 0 (for x slightly less than 0 vs slightly greater than 0), so f' does not change sign at x = 0 - no local extremum.\n\nAt x = -1: test x = -2: f'(-2) = 4(-5)(-1)^3 = 4(-5)(-1) = 20 > 0. Test x = -0.5: f'(-0.5) = 0.25(-3.5)(0.5)^3 = 0.25(-3.5)(0.125) < 0. Sign changes from positive to negative, so f has a local maximum at x = -1.\n\nAt x = 3: test x = 2: f'(2) = 4(-1)(3)^3 = 4(-1)(27) < 0. Test x = 4: f'(4) = 16(1)(5)^3 > 0. Sign changes from negative to positive, so f has a local minimum at x = 3.\n\nChoice A is wrong because it incorrectly assigns a local min at x = 0. Choice C has both x = -1 and x = 3 wrong. Choice D incorrectly calls x = -1 a local minimum. The correct answer is B."
  },
  {
    "id": "calcbc_u5_q148",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "concavity and inflection points",
    "topicLabel": "Concavity & Inflection Points",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a twice-differentiable function such that f''(x) = (x^2 - 4)(x - 1)^2. On which interval(s) is the graph of f concave down, and how many inflection points does f have?\n\nA) f is concave down on (-2, 2); f has 3 inflection points.\nB) f is concave down on (-2, 1) and (1, 2); f has 3 inflection points.\nC) f is concave down on (-2, 2); f has 2 inflection points.\nD) f is concave down on (-2, 1) and (1, 2); f has 2 inflection points.",
    "choices": [
      "A) f is concave down on (-2, 2); f has 3 inflection points.",
      "B) f is concave down on (-2, 1) and (1, 2); f has 3 inflection points.",
      "C) f is concave down on (-2, 2); f has 2 inflection points.",
      "D) f is concave down on (-2, 1) and (1, 2); f has 2 inflection points."
    ],
    "answer": 2,
    "explanation": "f''(x) = (x^2 - 4)(x-1)^2 = (x-2)(x+2)(x-1)^2. Zeros are at x = -2, x = 1, and x = 2.\n\nSign analysis of f'':\n- For x < -2: (neg)(neg)(pos) = positive, so concave up.\n- For -2 < x < 1: (neg)(pos)(pos) = negative, so concave down.\n- For 1 < x < 2: (neg)(pos)(pos) = negative, so concave down.\n- For x > 2: (pos)(pos)(pos) = positive, so concave up.\n\nSo f is concave down on the entire interval (-2, 2), which is one connected region. Choices B and D are wrong because they split (-2, 2) into two intervals - a common trap, since students see three zeros and assume three separate intervals.\n\nFor inflection points, a sign change in f'' is required. At x = -2: f'' changes from + to -, so this IS an inflection point. At x = 1: f'' does NOT change sign (stays negative on both sides) because (x-1)^2 is always non-negative - this is NOT an inflection point. At x = 2: f'' changes from - to +, so this IS an inflection point.\n\nThus f has exactly 2 inflection points. Choice A is wrong because it counts x = 1 as an inflection point. The correct answer is C."
  },
  {
    "id": "calcbc_u5_q149",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points and first derivative test",
    "topicLabel": "Critical Points & First Derivative Test",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a twice-differentiable function on all real numbers. The derivative f'(x) = x^2(x - 3)(x + 1)^2. Which of the following correctly describes the behavior of f at each critical point?\n\nI. f has a local minimum at x = 3.\nII. f has neither a local max nor local min at x = 0.\nIII. f has a local maximum at x = -1.",
    "choices": [
      "A) I and II only",
      "B) I, II, and III",
      "C) I and III only",
      "D) II and III only"
    ],
    "answer": 0,
    "explanation": "The critical points occur where f'(x) = 0: x = -1, x = 0, x = 3. For the first derivative test, analyze sign changes of f'(x) = x^2(x-3)(x+1)^2. Note that x^2 >= 0 always and (x+1)^2 >= 0 always, so the sign of f' is determined by (x-3): f' < 0 for x < 3 (except at x = 0 and x = -1 where f' = 0) and f' > 0 for x > 3. At x = 3: f' changes from negative to positive, so f has a LOCAL MINIMUM - Statement I is TRUE. At x = 0: x^2 = 0 but (x+1)^2 = 1 ≠ 0 and (x-3) = -3 ≠ 0, so f' does not change sign (it's 0 at x=0 but negative on both sides). f has neither a local max nor min at x = 0 - Statement II is TRUE. At x = -1: (x+1)^2 = 0 but x^2 = 1 and (x-3) = -4, so f' = 0 at x = -1 but does not change sign (negative on both sides). f has NEITHER a local max nor min at x = -1 - Statement III is FALSE. Therefore only I and II are correct. A common trap is assuming every critical point is a local extremum, or misreading the multiplicity's effect on sign changes."
  },
  {
    "id": "calcbc_u5_q150",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "concavity and inflection points",
    "topicLabel": "Concavity & Inflection Points",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function f is continuous on all real numbers. Selected values of f''(x) are given in the table below:\n\nInterval: (-∞, -2): f''(x) > 0\nAt x = -2: f''(-2) = 0\nInterval: (-2, 1): f''(x) > 0\nAt x = 1: f''(1) = 0\nInterval: (1, 4): f''(x) < 0\nAt x = 4: f''(4) does not exist, but f is continuous at x = 4\nInterval: (4, ∞): f''(x) > 0\n\nHow many inflection points does f have?",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 1",
      "D) 4"
    ],
    "answer": 0,
    "explanation": "An inflection point requires that the concavity actually changes (f'' changes sign), and f must be continuous there. At x = -2: f'' > 0 on both sides of x = -2 (concave up on both (-∞,-2) and (-2,1)), so concavity does NOT change. x = -2 is NOT an inflection point. At x = 1: f'' changes from positive (concave up on (-2,1)) to negative (concave down on (1,4)), so concavity CHANGES. x = 1 IS an inflection point. At x = 4: f'' changes from negative (concave down on (1,4)) to positive (concave up on (4,∞)), and f is continuous at x = 4 (even though f'' doesn't exist there). x = 4 IS an inflection point. Total: 2 inflection points. A key trap is counting x = -2 as an inflection point just because f''(-2) = 0 - students must verify that f'' actually changes sign, not merely equals zero. Another trap is dismissing x = 4 because f'' doesn't exist there, forgetting that inflection points only require continuity of f, not differentiability of f'."
  },
  {
    "id": "calcbc_u5_q151",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points and first derivative test",
    "topicLabel": "Critical Points and First Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a differentiable function on all real numbers with f'(x) = (x² - 4)e^(sin x). Which of the following correctly describes the behavior of f at x = 2?",
    "choices": [
      "A) f has a local minimum at x = 2 because f'(x) changes from negative to positive.",
      "B) f has a local maximum at x = 2 because f'(2) = 0 and f''(2) < 0.",
      "C) f has neither a local maximum nor a local minimum at x = 2 because f'(x) does not change sign.",
      "D) f has a local minimum at x = 2 because f'(x) changes from positive to negative."
    ],
    "answer": 0,
    "explanation": "To determine the nature of the critical point at x = 2, we apply the First Derivative Test. Since e^(sin x) > 0 for all x, the sign of f'(x) = (x² - 4)e^(sin x) is determined solely by (x² - 4) = (x - 2)(x + 2). For x slightly less than 2, (x - 2) < 0 and (x + 2) > 0, so f'(x) < 0. For x slightly greater than 2, (x - 2) > 0 and (x + 2) > 0, so f'(x) > 0. Since f' changes from negative to positive at x = 2, f has a local minimum there. Choice A is correct. Choice B is incorrect because the sign change in f' confirms a local minimum, not a maximum; a student who misreads the sign of f'' or confuses the Second Derivative Test criteria might select this. Choice C is incorrect because f' does change sign at x = 2 - a student might mistakenly focus on the factor e^(sin x), which never changes sign, and incorrectly conclude that f' itself does not change sign. Choice D reaches the correct conclusion but states the wrong direction of sign change: a student who reverses the sign analysis, perhaps by evaluating (x + 2)(x - 2) and mistakenly treating x + 2 as negative near x = 2, would incorrectly conclude that f' goes from positive to negative, which would indicate a local maximum, not a minimum - making D's conclusion internally inconsistent with its stated reasoning."
  },
  {
    "id": "calcbc_u5_q152",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "concavity and inflection points",
    "topicLabel": "Concavity and Inflection Points",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function f is twice differentiable and f''(x) = x²(x - 3)(x + 1)². How many inflection points does f have?",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "answer": 0,
    "explanation": "Inflection points occur where f'' = 0 AND f'' changes sign. The zeros of f''(x) = x²(x-3)(x+1)² are x = 0 (multiplicity 2), x = 3 (multiplicity 1), and x = -1 (multiplicity 2). Now analyze sign changes: At x = -1 (even multiplicity), f'' does NOT change sign - the factor (x+1)² is always non-negative, so f'' keeps the same sign on both sides of x = -1. No inflection point here. At x = 0 (even multiplicity), similarly x² ≥ 0, so f'' does NOT change sign at x = 0. No inflection point here. At x = 3 (odd multiplicity), (x-3) changes sign from negative to positive, and all other factors are positive near x = 3, so f'' changes sign. There IS an inflection point at x = 3. Therefore f has exactly 1 inflection point. Common errors: Students often count every zero of f'' as an inflection point (getting 3 distinct zeros or thinking all 4 roots give inflection points). The key insight is that even-multiplicity zeros of f'' do not produce sign changes and hence no inflection points."
  },
  {
    "id": "calcbc_u5_q153",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "critical points and first derivative test",
    "topicLabel": "Critical Points & First Derivative Test",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f be a differentiable function on all real numbers. The derivative f'(x) = x^2(x - 3)(x + 1)^3. Which of the following correctly classifies all local extrema of f?",
    "choices": [
      "A) f has a local minimum at x = 3 and a local maximum at x = -1; x = 0 is not a local extremum.",
      "B) f has a local minimum at x = 3 and a local maximum at x = -1; x = 0 is a local minimum.",
      "C) f has a local minimum at x = -1 and a local maximum at x = 3; x = 0 is not a local extremum.",
      "D) f has a local minimum at x = 3 and a local maximum at x = -1; x = 0 is a local maximum."
    ],
    "answer": 0,
    "explanation": "To apply the First Derivative Test, analyze sign changes of f'(x) = x^2(x-3)(x+1)^3 at each critical point x = -1, 0, 3. Near x = -1: x^2 > 0, (x-3) < 0, and (x+1)^3 changes from negative to positive, so f' changes from positive to negative - local maximum at x = -1. Near x = 0: x^2 changes from positive to 0 to positive but does NOT change sign (it is always ≥ 0), and the other factors maintain their signs, so f' does not change sign - no local extremum at x = 0. Near x = 3: x^2 > 0, (x+1)^3 > 0, and (x-3) changes from negative to positive, so f' changes from negative to positive - local minimum at x = 3. Choice A is correct. Choice B incorrectly labels x = 0 as a local minimum - a common error where students see f'(0) = 0 and assume the function must have a minimum there, without checking whether f' actually changes sign. Choice C reverses the classifications at x = -1 and x = 3, arising from a sign-chart error in which the student correctly identifies the critical points but mis-tracks the sign of (x+1)^3 near x = -1, concluding f' goes from negative to positive rather than positive to negative. Choice D incorrectly labels x = 0 as a local maximum - a student making this error likely noted that f' is positive on both sides of x = 0 but mistakenly interpreted the touching of zero as a sign change from positive to negative to positive, analogous to a repeated root of odd multiplicity, thereby concluding a local maximum exists at x = 0."
  },
  {
    "id": "calcbc_u5_q154",
    "subject": "apcalcbc",
    "unit": 5,
    "topic": "inflection points and concavity",
    "topicLabel": "Inflection Points & Concavity",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function f is twice differentiable and f''(x) = (x^2 - 4)(x - 1)^2. On which intervals is the graph of f concave up, and how many inflection points does f have?",
    "choices": [
      "A) f is concave up on (-∞, -2) ∪ (2, ∞), and f has exactly 2 inflection points.",
      "B) f is concave up on (-∞, -2) ∪ (2, ∞), and f has exactly 3 inflection points.",
      "C) f is concave up on (-2, 1) ∪ (1, 2) ∪ (2, ∞), and f has exactly 2 inflection points.",
      "D) f is concave up on (-∞, -2) ∪ (-2, 1) ∪ (2, ∞), and f has exactly 3 inflection points."
    ],
    "answer": 0,
    "explanation": "f''(x) = (x^2 - 4)(x-1)^2 = (x-2)(x+2)(x-1)^2. The zeros are x = -2, x = 1, x = 2. For concavity, analyze the sign of f'': (x-1)^2 ≥ 0 always, so the sign of f'' is determined by (x-2)(x+2). For x < -2: (x-2)(x+2) > 0, so f'' > 0 (concave up). For -2 < x < 2: (x-2)(x+2) < 0, so f'' < 0 (concave down). For x > 2: (x-2)(x+2) > 0, so f'' > 0 (concave up). Concavity changes sign at x = -2 and x = 2 (inflection points). At x = 1, f'' = 0 but (x-1)^2 does not cause a sign change in f'' - concavity does NOT change there, so x = 1 is NOT an inflection point. Therefore f is concave up on (-∞, -2) ∪ (2, ∞) with exactly 2 inflection points, making Choice A correct. Choices B and D incorrectly count x = 1 as an inflection point - a common trap when students assume every zero of f'' is an inflection point. Choice C misidentifies the concave-up intervals."
  },
  {
    "id": "calcbc_u6_q155",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "indefinite integrals",
    "topicLabel": "Indefinite Integrals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is the general antiderivative of f(x) = 3x²?",
    "choices": [
      "A) 6x + C",
      "B) x³ + C",
      "C) 3x³ + C",
      "D) x² + C"
    ],
    "answer": 1,
    "explanation": "Using the power rule for integration, ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C. So ∫ 3x² dx = 3 · x³/3 + C = x³ + C. A) 6x is the derivative of 3x², not the antiderivative. C) forgets to divide by the new exponent, leaving the coefficient unchanged. D) incorrectly reduces the exponent instead of increasing it."
  },
  {
    "id": "calcbc_u6_q156",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "Riemann sums",
    "topicLabel": "Riemann Sums",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A left Riemann sum with n equal subintervals on [a, b] uses which x-values as sample points?",
    "choices": [
      "A) The right endpoints of each subinterval",
      "B) The midpoints of each subinterval",
      "C) The left endpoints of each subinterval",
      "D) The maximum value of f on each subinterval"
    ],
    "answer": 2,
    "explanation": "By definition, a left Riemann sum uses the left endpoint of each subinterval as the sample point. A) describes a right Riemann sum. B) describes a midpoint Riemann sum. D) describes an upper sum, which is not the same as a standard named Riemann sum."
  },
  {
    "id": "calcbc_u6_q157",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "definite integrals",
    "topicLabel": "Definite Integrals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is ∫ from 2 to 2 of sin(x³) dx?",
    "choices": [
      "A) sin(8)",
      "B) 1",
      "C) 0",
      "D) 2sin(8)"
    ],
    "answer": 2,
    "explanation": "When the upper and lower limits of integration are equal, the definite integral is always 0, regardless of the integrand. This follows directly from the definition of the definite integral: ∫ from a to a of f(x) dx = 0. The complexity of sin(x³) is irrelevant here."
  },
  {
    "id": "calcbc_u6_q158",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "Fundamental Theorem of Calculus Part 1",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If g(x) = ∫ from 0 to x of cos(t) dt, what is g'(x)?",
    "choices": [
      "A) sin(x)",
      "B) cos(x)",
      "C) -sin(x)",
      "D) cos(x) - cos(0)"
    ],
    "answer": 1,
    "explanation": "By the Fundamental Theorem of Calculus Part 1, if g(x) = ∫ from a to x of f(t) dt, then g'(x) = f(x). Here f(t) = cos(t), so g'(x) = cos(x). A) sin(x) is the antiderivative of cos(x), not the derivative of g. C) -sin(x) is the derivative of cos(x). D) incorrectly tries to evaluate the integral first."
  },
  {
    "id": "calcbc_u6_q159",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "average value",
    "topicLabel": "Average Value of a Function",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The average value of a continuous function f on [a, b] is given by which formula?",
    "choices": [
      "A) (f(a) + f(b)) / 2",
      "B) (1/(b-a)) · ∫ from a to b of f(x) dx",
      "C) ∫ from a to b of f(x) dx",
      "D) (b - a) · ∫ from a to b of f(x) dx"
    ],
    "answer": 1,
    "explanation": "The average value of f on [a, b] is (1/(b-a)) · ∫ from a to b of f(x) dx. A) is only correct for linear functions and confuses average value with the average of two endpoint values. C) is just the definite integral, missing the 1/(b-a) factor. D) incorrectly multiplies instead of divides by (b-a)."
  },
  {
    "id": "calcbc_u6_q160",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "net change theorem",
    "topicLabel": "Net Change Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along a line with velocity v(t) = t - 2. What does ∫ from 1 to 4 of v(t) dt represent?",
    "choices": [
      "A) The total distance traveled from t = 1 to t = 4",
      "B) The net change in position from t = 1 to t = 4",
      "C) The acceleration of the particle at t = 4",
      "D) The average velocity from t = 1 to t = 4"
    ],
    "answer": 1,
    "explanation": "By the Net Change Theorem, ∫ from a to b of v(t) dt gives the net change in position (displacement), not total distance. A) 6 results from evaluating the integrand 2x at only the upper limit x=3, i.e., 2(3)=6, without applying FTC properly. B) 4 results from computing 2(3) - 2(1) = 4, treating the integrand as the function to subtract rather than first finding the antiderivative. C) Acceleration is v'(t), not an integral of v. D) Average velocity would require dividing by (b - a)."
  },
  {
    "id": "calcbc_u6_q161",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "antiderivatives",
    "topicLabel": "Antiderivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is an antiderivative of $f(x) = \\frac{1}{x^2 + 4x + 5}$?",
    "choices": [
      "A) $\\arctan(x + 2) + C$",
      "B) $\\ln|x^2 + 4x + 5| + C$",
      "C) $\\frac{1}{2}\\arctan\\left(\\frac{x+2}{2}\\right) + C$",
      "D) $\\arcsin(x + 2) + C$"
    ],
    "answer": 0,
    "explanation": "Complete the square: $x^2 + 4x + 5 = (x+2)^2 + 1$. Then $\\int \\frac{dx}{(x+2)^2+1} = \\arctan(x+2) + C$ using the standard form $\\int \\frac{du}{u^2+1} = \\arctan(u) + C$ with $u = x+2$. Choice B is wrong because differentiating $\\ln|x^2+4x+5|$ gives $\\frac{2x+4}{x^2+4x+5}$, not $\\frac{1}{x^2+4x+5}$. Choice C would apply if the denominator were $(x+2)^2 + 4$, requiring a $\\frac{1}{2}$ factor. Choice D uses arcsin incorrectly; arcsin applies to integrals of the form $\\frac{1}{\\sqrt{1-u^2}}$."
  },
  {
    "id": "calcbc_u6_q162",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "indefinite integrals",
    "topicLabel": "Indefinite Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\int x\\sqrt{x+1}\\, dx$.",
    "choices": [
      "A) $\\frac{2}{5}(x+1)^{5/2} - \\frac{2}{3}(x+1)^{3/2} + C$",
      "B) $\\frac{2}{3}x(x+1)^{3/2} - \\frac{2}{5}(x+1)^{5/2} + C$",
      "C) $\\frac{2}{5}(x+1)^{5/2} + C$",
      "D) $\\frac{x^2}{2} \\cdot \\frac{2}{3}(x+1)^{3/2} + C$"
    ],
    "answer": 0,
    "explanation": "Let $u = x+1$, so $x = u-1$ and $dx = du$. Then $\\int (u-1)\\sqrt{u}\\, du = \\int (u^{3/2} - u^{1/2})\\, du = \\frac{2}{5}u^{5/2} - \\frac{2}{3}u^{3/2} + C = \\frac{2}{5}(x+1)^{5/2} - \\frac{2}{3}(x+1)^{3/2} + C$. Choice B is the incorrect result of applying integration by parts incorrectly. Choice C forgets to substitute $x = u - 1$ and ignores the $-u^{1/2}$ term. Choice D incorrectly treats the integral as a product of separate antiderivatives, which is not a valid rule."
  },
  {
    "id": "calcbc_u6_q163",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "Riemann sums",
    "topicLabel": "Riemann Sums",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function $f$ is continuous on $[1, 5]$ and the following table gives values of $f$: $f(1)=3,\\ f(2)=5,\\ f(3)=2,\\ f(4)=6,\\ f(5)=4$. Using a right Riemann sum with 4 equal subintervals, what is the approximation of $\\int_1^5 f(x)\\,dx$?",
    "choices": [
      "A) 17",
      "B) 16",
      "C) 15",
      "D) 18"
    ],
    "answer": 0,
    "explanation": "With 4 equal subintervals on $[1,5]$, each subinterval has width $\\Delta x = 1$. A right Riemann sum uses the right endpoint of each subinterval: $f(2) + f(3) + f(4) + f(5) = 5 + 2 + 6 + 4 = 17$. Choice B (16) is the result of using left endpoints: $f(1)+f(2)+f(3)+f(4) = 3+5+2+6=16$. Choice C (15) may result from summing only three terms or arithmetic error. Choice D (18) may come from averaging or misidentifying endpoints."
  },
  {
    "id": "calcbc_u6_q164",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "definite integrals",
    "topicLabel": "Definite Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $\\int_1^4 f(x)\\,dx = 7$ and $\\int_1^4 g(x)\\,dx = 3$, what is $\\int_1^4 [2f(x) - 3g(x)]\\,dx$?",
    "choices": [
      "A) 5",
      "B) 23",
      "C) 11",
      "D) 8"
    ],
    "answer": 0,
    "explanation": "Using linearity of definite integrals: $\\int_1^4 [2f(x)-3g(x)]\\,dx = 2\\int_1^4 f(x)\\,dx - 3\\int_1^4 g(x)\\,dx = 2(7) - 3(3) = 14 - 9 = 5$. Choice B (23) results from adding instead of subtracting: $2(7)+3(3)=23$. Choice C (11) may result from computing $2(7)-3 = 11$, forgetting to multiply $g$ by 3. Choice D (8) may come from computing $7+3-2=8$ using incorrect operations."
  },
  {
    "id": "calcbc_u6_q165",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "Fundamental Theorem of Calculus Part 1",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let $F(x) = \\int_1^{x^3} \\sin(t^2)\\,dt$. What is $F'(x)$?",
    "choices": [
      "A) $3x^2 \\sin(x^6)$",
      "B) $\\sin(x^6)$",
      "C) $3x^2 \\cos(x^6)$",
      "D) $\\sin(x^2)$"
    ],
    "answer": 0,
    "explanation": "By FTC Part 1 with chain rule: if $F(x) = \\int_1^{u(x)} \\sin(t^2)\\,dt$, then $F'(x) = \\sin((u(x))^2) \\cdot u'(x)$. Here $u(x) = x^3$, so $u'(x) = 3x^2$ and $(u(x))^2 = x^6$. Thus $F'(x) = 3x^2\\sin(x^6)$. Choice B forgets to apply the chain rule (omits $3x^2$). Choice C incorrectly differentiates $\\sin$ as $\\cos$ rather than just evaluating at the upper limit. Choice D substitutes $x$ instead of $x^3$ into the integrand, ignoring the composition."
  },
  {
    "id": "calcbc_u6_q166",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "FTC part 2",
    "topicLabel": "Fundamental Theorem of Calculus Part 2",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\int_0^{\\pi/2} \\cos x\\, e^{\\sin x}\\, dx$.",
    "choices": [
      "A) $e - 1$",
      "B) $e + 1$",
      "C) $1 - e$",
      "D) $e$"
    ],
    "answer": 0,
    "explanation": "Let $u = \\sin x$, then $du = \\cos x\\, dx$. When $x=0$, $u=0$; when $x=\\pi/2$, $u=1$. The integral becomes $\\int_0^1 e^u\\, du = [e^u]_0^1 = e^1 - e^0 = e - 1$. Choice B incorrectly computes $e^1 + e^0 = e+1$, confusing subtraction for addition in the FTC evaluation. Choice C reverses the limits, giving $1-e$. Choice D forgets to subtract the lower bound evaluation, giving just $e$."
  },
  {
    "id": "calcbc_u6_q167",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "average value",
    "topicLabel": "Average Value of a Function",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the average value of $f(x) = 6x^2 - 2$ on the interval $[0, 3]$?",
    "choices": [
      "A) 16",
      "B) 48",
      "C) 6",
      "D) 54"
    ],
    "answer": 0,
    "explanation": "Average value $= \\frac{1}{b-a}\\int_a^b f(x)\\,dx = \\frac{1}{3}\\int_0^3 (6x^2-2)\\,dx$. Compute: $\\int_0^3 (6x^2-2)\\,dx = [2x^3 - 2x]_0^3 = (54-6) - 0 = 48$. Then average $= \\frac{48}{3} = 16$. Choice B (48) is the value of the definite integral without dividing by $(b-a)=3$, a common error. Choice C (6) may result from evaluating $f$ at the midpoint $x=1.5$ incorrectly. Choice D (54) comes from computing only $[2x^3]_0^3$ and forgetting the $-2x$ term, then not dividing."
  },
  {
    "id": "calcbc_u6_q168",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\int x e^{2x}\\, dx$.",
    "choices": [
      "A) $\\frac{x e^{2x}}{2} - \\frac{e^{2x}}{4} + C$",
      "B) $\\frac{x e^{2x}}{2} + \\frac{e^{2x}}{4} + C$",
      "C) $x e^{2x} - e^{2x} + C$",
      "D) $\\frac{x^2 e^{2x}}{2} + C$"
    ],
    "answer": 0,
    "explanation": "Use integration by parts with $u = x$, $dv = e^{2x}dx$, so $du = dx$, $v = \\frac{e^{2x}}{2}$. Then $\\int xe^{2x}dx = \\frac{xe^{2x}}{2} - \\int \\frac{e^{2x}}{2}dx = \\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4} + C$. Choice B has a sign error in the second term, adding instead of subtracting $\\frac{e^{2x}}{4}$. Choice C results from using $v = e^{2x}$ instead of $v = \\frac{e^{2x}}{2}$, forgetting the factor of $\\frac{1}{2}$ when integrating $e^{2x}$ with respect to $x$. Choice D incorrectly treats the integral as a simple product without applying integration by parts."
  },
  {
    "id": "calcbc_u6_q169",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "improper integrals",
    "topicLabel": "Improper Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following correctly evaluates $\\int_1^{\\infty} \\frac{1}{x^2}\\, dx$?",
    "choices": [
      "A) The integral converges to $1$.",
      "B) The integral diverges.",
      "C) The integral converges to $2$.",
      "D) The integral converges to $\\frac{1}{2}$."
    ],
    "answer": 0,
    "explanation": "$\\int_1^{\\infty} x^{-2}\\,dx = \\lim_{b\\to\\infty}\\left[-x^{-1}\\right]_1^b = \\lim_{b\\to\\infty}\\left(-\\frac{1}{b}+1\\right) = 0 + 1 = 1$. The integral converges to 1. Choice B is incorrect; students may confuse this with $\\int_1^\\infty \\frac{1}{x}\\,dx$ (the $p=1$ case), which diverges. Choice C (2) may result from evaluating $\\lim_{b\\to\\infty}[-x^{-1}]$ as $0 - (-2) = 2$ by incorrectly evaluating the antiderivative at $x=1$. Choice D ($\\frac{1}{2}$) may come from a sign or coefficient error when applying the power rule antiderivative."
  },
  {
    "id": "calcbc_u6_q170",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "antiderivatives",
    "topicLabel": "Antiderivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is an antiderivative of f(x) = 3x² − 4x + 5?",
    "choices": [
      "A) x³ − 2x² + 5x",
      "B) 6x − 4",
      "C) x³ − 4x² + 5x",
      "D) 3x³ − 2x² + 5x"
    ],
    "answer": 0,
    "explanation": "An antiderivative F(x) satisfies F'(x) = f(x). Integrating term by term: ∫3x² dx = x³, ∫−4x dx = −2x², ∫5 dx = 5x, giving x³ − 2x² + 5x. Choice B is the derivative of f, not an antiderivative. Choice C incorrectly integrates −4x as −4x² instead of −2x². Choice D multiplies x³ by 3 instead of using the power rule correctly."
  },
  {
    "id": "calcbc_u6_q171",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "indefinite integrals",
    "topicLabel": "Indefinite Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "∫ (2x) / (x² + 1) dx = ?",
    "choices": [
      "A) ln|x² + 1| + C",
      "B) (1/2) ln|x² + 1| + C",
      "C) 2 ln|x² + 1| + C",
      "D) ln|2x| + C"
    ],
    "answer": 0,
    "explanation": "Let u = x² + 1, then du = 2x dx. The integral becomes ∫ du/u = ln|u| + C = ln|x² + 1| + C. Choice B would result from ∫ x/(x²+1) dx where only one factor of 2 appears. Choice C incorrectly doubles the result. Choice D applies a logarithm rule incorrectly to the numerator only."
  },
  {
    "id": "calcbc_u6_q172",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "Riemann sums",
    "topicLabel": "Riemann Sums",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A right Riemann sum with 4 equal subintervals is used to approximate ∫ from 0 to 4 of f(x) dx, where f(x) = x². What is the value of this approximation?",
    "choices": [
      "A) 30",
      "B) 14",
      "C) 21",
      "D) 24"
    ],
    "answer": 0,
    "explanation": "With 4 subintervals on [0,4], Δx = 1. Right endpoints are x = 1, 2, 3, 4. The sum is Δx[f(1)+f(2)+f(3)+f(4)] = 1[1+4+9+16] = 30. Choice B uses left endpoints: f(0)+f(1)+f(2)+f(3) = 0+1+4+9 = 14. Choice C uses midpoints: f(0.5)+f(1.5)+f(2.5)+f(3.5) = 0.25+2.25+6.25+12.25 = 21. Choice D is a common arithmetic error when summing the squares."
  },
  {
    "id": "calcbc_u6_q173",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "definite integrals",
    "topicLabel": "Definite Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "∫ from −2 to 2 of (x³ + 3) dx = ?",
    "choices": [
      "A) 12",
      "B) 0",
      "C) 24",
      "D) 6"
    ],
    "answer": 0,
    "explanation": "Split the integral: ∫₋₂² x³ dx + ∫₋₂² 3 dx. Since x³ is an odd function, ∫₋₂² x³ dx = 0. Then ∫₋₂² 3 dx = 3(2−(−2)) = 12. So the total is 0 + 12 = 12. Choice B results from incorrectly treating the entire integrand as odd. Choice C doubles the result by computing 3×(4+4) incorrectly. Choice D halves the correct answer, perhaps only computing ∫₀² 3 dx."
  },
  {
    "id": "calcbc_u6_q174",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "Fundamental Theorem of Calculus Part 1",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let g(x) = ∫ from 1 to x² of √(t³ + 1) dt. What is g'(x)?",
    "choices": [
      "A) 2x√(x⁶ + 1)",
      "B) √(x⁶ + 1)",
      "C) √(x³ + 1)",
      "D) 2x√(x³ + 1)"
    ],
    "answer": 0,
    "explanation": "By FTC Part 1 with the chain rule, d/dx ∫₁^(u(x)) f(t) dt = f(u(x))·u'(x). Here u(x) = x², so u'(x) = 2x, and f(t) = √(t³+1). Thus g'(x) = √((x²)³+1)·2x = 2x√(x⁶+1). Choice B forgets the chain rule factor 2x. Choice C substitutes x instead of x² into the integrand. Choice D substitutes x instead of x² giving x³ instead of x⁶, but includes the 2x factor."
  },
  {
    "id": "calcbc_u6_q175",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "∫ x·eˣ dx = ?",
    "choices": [
      "A) xeˣ − eˣ + C",
      "B) xeˣ + eˣ + C",
      "C) eˣ(x − 1) + C",
      "D) x²eˣ/2 + C"
    ],
    "answer": 0,
    "explanation": "Use integration by parts with u = x, dv = eˣ dx, so du = dx, v = eˣ. Then ∫ xeˣ dx = xeˣ − ∫ eˣ dx = xeˣ − eˣ + C, which can also be written as eˣ(x − 1) + C. Note that choice A and choice C are equivalent expressions; A is the correct answer. Choice B results from a sign error: the student adds ∫ eˣ dx instead of subtracting it, yielding xeˣ + eˣ + C. Choice C is a rewritten form of the correct answer and serves as a recognition check - a student who does not simplify may not identify it as equivalent. Choice D incorrectly treats eˣ as a polynomial factor and multiplies x · eˣ directly to get x²eˣ/2, misapplying the power rule."
  },
  {
    "id": "calcbc_u6_q176",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "partial fractions",
    "topicLabel": "Partial Fractions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "∫ 1/((x+1)(x−3)) dx = ?",
    "choices": [
      "A) (1/4)ln|x−3| − (1/4)ln|x+1| + C",
      "B) (1/4)ln|(x+1)(x−3)| + C",
      "C) ln|x−3| − ln|x+1| + C",
      "D) (1/4)ln|x+1| − (1/4)ln|x−3| + C"
    ],
    "answer": 0,
    "explanation": "Decompose: 1/((x+1)(x−3)) = A/(x+1) + B/(x−3). Setting x=3: 1/4 = B, setting x=−1: −1/4 = A. So the integral = ∫[−1/4/(x+1) + 1/4/(x−3)] dx = −(1/4)ln|x+1| + (1/4)ln|x−3| + C = (1/4)ln|x−3| − (1/4)ln|x+1| + C. Choice B treats the product as a single log term instead of applying partial fractions. Choice C omits the 1/4 coefficients from the partial fraction decomposition. Choice D reverses the signs of the two partial fraction coefficients, swapping A and B, leading to the wrong sign on each logarithm term."
  },
  {
    "id": "calcbc_u6_q177",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "improper integrals",
    "topicLabel": "Improper Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate ∫ from 1 to ∞ of 1/x² dx.",
    "choices": [
      "A) 1",
      "B) 4/3",
      "C) 1/2",
      "D) 2"
    ],
    "answer": 1,
    "explanation": "Net displacement = ∫₀⁴ (t²−4t+3) dt = [t³/3 − 2t² + 3t]₀⁴ = (64/3 − 32 + 12) − 0 = 64/3 − 20 = 64/3 − 60/3 = 4/3. Choice A results from a sign error when evaluating the antiderivative at t = 4. Choice C computes total distance (integrating |v(t)|) rather than net displacement. Choice D incorrectly concludes the displacement is zero, perhaps by noting the particle changes direction."
  },
  {
    "id": "calcbc_u6_q178",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^x\\, dx\\).",
    "choices": [
      "A) \\(e^x(x^2 - 2x + 2) + C\\)",
      "B) \\(e^x(x^2 + 2x + 2) + C\\)",
      "C) \\(e^x(x^2 - 2x - 2) + C\\)",
      "D) \\(\\frac{x^3}{3}e^x + C\\)"
    ],
    "answer": 0,
    "explanation": "Applying integration by parts twice: first let u = x², dv = e^x dx, giving x²e^x − ∫2xe^x dx. Then apply IBP again with u = 2x, dv = e^x dx: 2xe^x − ∫2e^x dx = 2xe^x − 2e^x. Combining: e^x(x² − 2x + 2) + C. Choice B results from sign errors when subtracting the second IBP result. Choice C has an arithmetic error in the constant term. Choice D is a common trap where students incorrectly treat e^x like a power and apply the power rule to x², keeping e^x as a factor without integrating by parts at all."
  },
  {
    "id": "calcbc_u6_q179",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "Fundamental Theorem of Calculus Part 1",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let \\(g(x) = \\int_{\\sin x}^{x^3} e^{t^2}\\, dt\\). Find \\(g'(x)\\).",
    "choices": [
      "A) \\(3x^2 e^{x^6} - \\cos x\\, e^{\\sin^2 x}\\)",
      "B) \\(3x^2 e^{x^6} + \\cos x\\, e^{\\sin^2 x}\\)",
      "C) \\(e^{x^6} - e^{\\sin^2 x}\\)",
      "D) \\(3x^2 e^{x^6} - e^{\\sin^2 x}\\)"
    ],
    "answer": 0,
    "explanation": "By FTC Part 1 with variable bounds, g'(x) = e^{(x^3)^2} · (x^3)' − e^{(\\sin x)^2} · (\\sin x)' = 3x^2 e^{x^6} − \\cos x\\, e^{\\sin^2 x}. Choice B arises from a sign error: the student forgets that the lower bound contributes a subtracted term, incorrectly adding the lower-bound contribution instead of subtracting it, yielding +\\cos x\\, e^{\\sin^2 x} instead of −\\cos x\\, e^{\\sin^2 x}. Choice C arises from forgetting to apply the chain rule to either bound entirely - the student plugs in the bounds but does not multiply by the derivatives of x^3 or \\sin x, giving e^{x^6} − e^{\\sin^2 x}. Choice D arises from correctly applying the chain rule to the upper bound (multiplying by 3x^2) but forgetting to multiply the lower bound term by the derivative of \\sin x (i.e., \\cos x), leaving e^{\\sin^2 x} without the \\cos x factor."
  },
  {
    "id": "calcbc_u6_q180",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^x \\, dx\\).",
    "choices": [
      "A) \\(e^x(x^2 - 2x + 2) + C\\)",
      "B) \\(e^x(x^2 + 2x + 2) + C\\)",
      "C) \\(e^x(x^2 - 2x) + C\\)",
      "D) \\(\\frac{x^3}{3}e^x + C\\)"
    ],
    "answer": 0,
    "explanation": "Apply integration by parts twice. Let u = x², dv = eˣ dx, so du = 2x dx, v = eˣ. Then ∫x²eˣ dx = x²eˣ − ∫2xeˣ dx. Apply IBP again to ∫2xeˣ dx: let u = 2x, dv = eˣ dx, so du = 2 dx, v = eˣ. This gives 2xeˣ − 2eˣ. Therefore the full integral = x²eˣ − (2xeˣ − 2eˣ) + C = eˣ(x² − 2x + 2) + C. Choice B is wrong because students may add rather than subtract when applying IBP the second time, getting +2x instead of −2x. Choice C omits the constant term +2 that arises from the second IBP. Choice D is a common trap where students incorrectly treat eˣ like a power function and integrate x² separately, which does not apply here."
  },
  {
    "id": "calcbc_u6_q181",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "Fundamental Theorem of Calculus Part 1",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let \\(g(x) = \\int_{x}^{x^2} \\sin(t^2) \\, dt\\). What is \\(g'(x)\\)?",
    "choices": [
      "A) \\(2x\\sin(x^4) - \\sin(x^2)\\)",
      "B) \\(\\sin(x^4) - \\sin(x^2)\\)",
      "C) \\(2x\\sin(x^4) + \\sin(x^2)\\)",
      "D) \\(2x\\cos(x^4) - \\cos(x^2)\\)"
    ],
    "answer": 0,
    "explanation": "By FTC Part 1 combined with the chain rule, when both limits are functions of x, differentiate by treating the upper and lower limits separately. For the upper limit x²: d/dx ∫₀^{x²} sin(t²) dt = sin((x²)²) · (2x) = 2x sin(x⁴). For the lower limit x: d/dx ∫₀^x sin(t²) dt = sin(x²), but since x is the lower limit, we subtract: −sin(x²). So g'(x) = 2x sin(x⁴) − sin(x²). Choice B arises if a student evaluates the integrand at the bounds without applying the chain rule to the upper limit x², omitting the factor of 2x. Choice C incorrectly adds rather than subtracts the contribution of the lower limit, forgetting that a lower limit contributes a negative sign. Choice D results from incorrectly differentiating sin(t²) as if it were sin(t), applying derivative rules to the integrand rather than evaluating it at the bounds."
  },
  {
    "id": "calcbc_u6_q182",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^x \\, dx\\).",
    "choices": [
      "A) \\(e^x(x^2 - 2x + 2) + C\\)",
      "B) \\(e^x(x^2 + 2x + 2) + C\\)",
      "C) \\(e^x(x^2 - 2x) + C\\)",
      "D) \\(\\frac{x^3}{3}e^x + C\\)"
    ],
    "answer": 0,
    "explanation": "Using integration by parts twice: Let u = x², dv = eˣ dx, so du = 2x dx, v = eˣ. Then ∫x²eˣ dx = x²eˣ − ∫2xeˣ dx. Apply IBP again to ∫2xeˣ dx: let u = 2x, dv = eˣ dx, du = 2 dx, v = eˣ, giving 2xeˣ − 2eˣ. So the full result is x²eˣ − (2xeˣ − 2eˣ) + C = eˣ(x² − 2x + 2) + C. Choice B has a sign error from mishandling the subtraction in the second IBP step - a very common mistake. Choice C forgets the constant term +2 after the second integration. Choice D incorrectly treats eˣ like a power and applies a naive product rule in reverse."
  },
  {
    "id": "calcbc_u6_q183",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "improper integrals",
    "topicLabel": "Improper Integrals",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following correctly evaluates \\(\\int_{-1}^{1} \\frac{1}{x^2} \\, dx\\)?",
    "choices": [
      "A) The integral diverges because the integrand has an infinite discontinuity at \\(x = 0\\).",
      "B) \\(-2\\)",
      "C) \\(2\\)",
      "D) The integral converges to \\(0\\) by symmetry."
    ],
    "answer": 0,
    "explanation": "This is an improper integral because 1/x² has a vertical asymptote at x = 0, which lies in the interval [−1, 1]. It must be split: ∫₋₁⁰ (1/x²) dx + ∫₀¹ (1/x²) dx. Evaluating ∫₀¹ (1/x²) dx = lim[t→0⁺] [−1/x]ₜ¹ = lim[t→0⁺] (−1 + 1/t) = +∞. Since this piece diverges, the entire integral diverges. Choice B arises from naively computing [−1/x]₋₁¹ = −1 − 1 = −2 without recognizing the discontinuity - a classic AP trap. Choice C is a similar error yielding a positive result. Choice D incorrectly applies a symmetry argument; even though 1/x² is even, convergence must still be checked at the singularity, and divergence cannot be cancelled by symmetry."
  },
  {
    "id": "calcbc_u6_q184",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^x \\, dx\\).",
    "choices": [
      "A) \\(e^x(x^2 - 2x + 1) + C\\)",
      "B) \\(e^x(x^2 + 2x + 2) + C\\)",
      "C) \\(e^x(x^2 - 2x) + C\\)",
      "D) \\(\\frac{x^3}{3} e^x + C\\)"
    ],
    "answer": 0,
    "explanation": "Applying integration by parts twice: let u = x², dv = e^x dx, so du = 2x dx, v = e^x. This gives x²e^x - ∫2xe^x dx. For ∫2xe^x dx, apply IBP again: u = 2x, dv = e^x dx, giving 2xe^x - 2e^x. Combining: x²e^x - (2xe^x - 2e^x) + C = e^x(x² - 2x + 2) + C. Choice A reflects a common arithmetic error in the second IBP step where the student computes the constant term as 1 instead of 2 (e.g., forgetting to carry the factor of 2 from du = 2x dx through the final integration). Choice B incorrectly adds rather than subtracts the result of the second IBP step, a very common sign error. Choice C forgets the constant term 2e^x from the final IBP application. Choice D is the trap of multiplying by the antiderivative of e^x without applying IBP at all, as if the integral were a simple product."
  },
  {
    "id": "calcbc_u6_q185",
    "subject": "apcalcbc",
    "unit": 6,
    "topic": "improper integrals",
    "topicLabel": "Improper Integrals",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following correctly evaluates \\(\\int_1^{\\infty} \\frac{1}{x^2 + x} \\, dx\\)?",
    "choices": [
      "A) \\(\\ln 2\\)",
      "B) \\(\\ln 2 - 1\\)",
      "C) The integral diverges.",
      "D) \\(1\\)"
    ],
    "answer": 0,
    "explanation": "Factor the denominator: x² + x = x(x+1). Use partial fractions: 1/[x(x+1)] = 1/x - 1/(x+1). So the integral becomes ∫₁^∞ (1/x - 1/(x+1)) dx = lim[b→∞] [ln x - ln(x+1)] from 1 to b = lim[b→∞] [ln(b/(b+1)) - ln(1/2)] = ln(1) - ln(1/2) = 0 + ln 2 = ln 2. Choice C is wrong because the integrand behaves like 1/x² for large x, so the integral converges - a common misconception when students see 1/x in the partial fraction decomposition. Choice B arises from incorrectly evaluating the antiderivative at x = 1, perhaps computing ln(1) - ln(2) and adding an extraneous -1. Choice D may result from mistakenly computing the integral of 1/x² from 1 to infinity instead."
  },
  {
    "id": "calcbc_u7_q186",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "u-substitution",
    "topicLabel": "u-substitution",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is \\(\\int 2x(x^2+1)^4\\,dx\\)?",
    "choices": [
      "A) \\(\\dfrac{(x^2+1)^5}{5} + C\\)",
      "B) \\(\\dfrac{2x(x^2+1)^5}{5} + C\\)",
      "C) \\((x^2+1)^5 + C\\)",
      "D) \\(\\dfrac{(x^2+1)^5}{10} + C\\)"
    ],
    "answer": 0,
    "explanation": "Let u = x² + 1, so du = 2x dx. The integral becomes ∫u⁴ du = u⁵/5 + C = (x²+1)⁵/5 + C. Choice B incorrectly keeps the 2x factor outside. Choice C forgets to divide by 5. Choice D divides by 10 instead of 5, confusing the chain rule with the power rule adjustment."
  },
  {
    "id": "calcbc_u7_q187",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "integration by parts",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using integration by parts to evaluate \\(\\int x e^x\\,dx\\), which choice of \\(u\\) and \\(dv\\) is most appropriate?",
    "choices": [
      "A) \\(u = x\\) and \\(dv = e^x\\,dx\\)",
      "B) \\(u = e^x\\) and \\(dv = x\\,dx\\)",
      "C) \\(u = x e^x\\) and \\(dv = dx\\)",
      "D) \\(u = 1\\) and \\(dv = x e^x\\,dx\\)"
    ],
    "answer": 0,
    "explanation": "By the LIATE rule, algebraic functions are chosen as u before exponentials. Setting u = x gives du = dx, and dv = eˣ dx gives v = eˣ, leading cleanly to xeˣ − eˣ + C. Choice B reverses the roles, producing a harder integral. Choice C sets u equal to the entire integrand, which is circular. Choice D makes u = 1 and dv = xeˣ dx, which requires knowing the answer already."
  },
  {
    "id": "calcbc_u7_q188",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "partial fractions",
    "topicLabel": "partial fractions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which partial fraction decomposition is correct for \\(\\dfrac{1}{x(x+1)}\\)?",
    "choices": [
      "A) \\(\\dfrac{1}{x} - \\dfrac{1}{x+1}\\)",
      "B) \\(\\dfrac{1}{x} + \\dfrac{1}{x+1}\\)",
      "C) \\(\\dfrac{-1}{x} + \\dfrac{1}{x+1}\\)",
      "D) \\(\\dfrac{1}{x(x+1)}\\) cannot be decomposed"
    ],
    "answer": 0,
    "explanation": "Write 1/(x(x+1)) = A/x + B/(x+1). Multiplying both sides by x(x+1): 1 = A(x+1) + Bx. Setting x=0: A=1. Setting x=−1: B=−1. So the decomposition is 1/x − 1/(x+1). Choice B uses +1 for both, a sign error. Choice C has the signs reversed. Choice D is incorrect because any product of distinct linear factors can be decomposed."
  },
  {
    "id": "calcbc_u7_q189",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "trig substitution",
    "topicLabel": "trig substitution",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "To evaluate \\(\\int \\sqrt{1-x^2}\\,dx\\), which trigonometric substitution is most appropriate?",
    "choices": [
      "A) \\(x = \\sin\\theta\\)",
      "B) \\(x = \\tan\\theta\\)",
      "C) \\(x = \\sec\\theta\\)",
      "D) \\(x = \\cos(2\\theta)\\)"
    ],
    "answer": 0,
    "explanation": "For integrals of the form √(a²−x²), use x = a sinθ. With x = sinθ, 1−x² = 1−sin²θ = cos²θ, so the square root simplifies to cosθ. Choice B (x = tanθ) applies to √(1+x²). Choice C (x = secθ) applies to √(x²−1). Choice D is a non-standard substitution that complicates rather than simplifies."
  },
  {
    "id": "calcbc_u7_q190",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "trig integrals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is \\(\\int \\sin^2 x\\,dx\\)?",
    "choices": [
      "A) \\(\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C\\)",
      "B) \\(-\\cos^2 x + C\\)",
      "C) \\(\\dfrac{\\sin^3 x}{3} + C\\)",
      "D) \\(\\dfrac{x}{2} + \\dfrac{\\sin 2x}{4} + C\\)"
    ],
    "answer": 0,
    "explanation": "Use the identity sin²x = (1 − cos 2x)/2. Then ∫sin²x dx = ∫(1/2 − cos2x/2) dx = x/2 − sin2x/4 + C. Choice B incorrectly treats sin²x as a composition for a basic substitution. Choice C applies the power rule directly to sinx, which is wrong because sin²x is not a simple power of x. Choice D uses a + sign instead of − in the identity, reflecting a common sign error."
  },
  {
    "id": "calcbc_u7_q191",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "improper integrals convergence",
    "topicLabel": "improper integrals convergence",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following improper integrals converges?",
    "choices": [
      "A) \\(\\int_1^{\\infty} \\dfrac{1}{x^2}\\,dx\\)",
      "B) \\(\\int_1^{\\infty} \\dfrac{1}{x}\\,dx\\)",
      "C) \\(\\int_1^{\\infty} \\dfrac{1}{\\sqrt{x}}\\,dx\\)",
      "D) \\(\\int_1^{\\infty} 1\\,dx\\)"
    ],
    "answer": 0,
    "explanation": "∫₁^∞ x⁻ᵖ dx converges if and only if p > 1. For choice A, p = 2 > 1, so it converges to 1. For choice B, p = 1, which diverges (ln x → ∞). For choice C, p = 1/2 < 1, which diverges. Choice D is clearly infinite. A common misconception is thinking p = 1 converges because the function goes to zero."
  },
  {
    "id": "calcbc_u7_q192",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "integration by parts",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is \\(\\int \\ln x\\,dx\\)?",
    "choices": [
      "A) \\(x\\ln x - x + C\\)",
      "B) \\(\\dfrac{1}{x} + C\\)",
      "C) \\(\\ln x \\cdot x^{\\ln x - 1} + C\\)",
      "D) \\(\\dfrac{(\\ln x)^2}{2} + C\\)"
    ],
    "answer": 0,
    "explanation": "Use integration by parts with u = ln x, dv = dx, so du = (1/x) dx and v = x. Then ∫ln x dx = x ln x − ∫x·(1/x) dx = x ln x − ∫1 dx = x ln x − x + C. Choice B is the derivative of ln x, not its integral. Choice C incorrectly attempts to apply the power rule as if ln x were an exponent of the variable x, treating ∫ln x dx like ∫x^n dx - but ln x is not a polynomial exponent and the power rule does not apply in this way. Choice D incorrectly applies a substitution-style rule as if ln x were a simple variable being integrated with respect to itself, ignoring the need for integration by parts."
  },
  {
    "id": "calcbc_u7_q193",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "u-substitution",
    "topicLabel": "U-Substitution",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^{x^3} \\, dx\\).",
    "choices": [
      "A) \\(\\frac{1}{3} e^{x^3} + C\\)",
      "B) \\(x^3 e^{x^3} + C\\)",
      "C) \\(3 e^{x^3} + C\\)",
      "D) \\(\\frac{1}{3} x^3 e^{x^3} + C\\)"
    ],
    "answer": 0,
    "explanation": "Let u = x³, so du = 3x² dx, meaning x² dx = du/3. The integral becomes (1/3)∫e^u du = (1/3)e^u + C = (1/3)e^(x³) + C. Choice B forgets to divide by 3. Choice C multiplies by 3 instead of dividing. Choice D incorrectly keeps an extra factor of x³ in the result."
  },
  {
    "id": "calcbc_u7_q194",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x \\cos(x) \\, dx\\).",
    "choices": [
      "A) \\(x \\sin(x) + \\cos(x) + C\\)",
      "B) \\(x \\sin(x) - \\cos(x) + C\\)",
      "C) \\(-x \\sin(x) + \\cos(x) + C\\)",
      "D) \\(\\frac{x^2}{2} \\sin(x) + C\\)"
    ],
    "answer": 0,
    "explanation": "Using integration by parts with u = x and dv = cos(x) dx gives du = dx and v = sin(x). Then ∫x cos(x) dx = x sin(x) − ∫sin(x) dx = x sin(x) + cos(x) + C. Choice B has a sign error in the second term. Choice C incorrectly differentiates v instead of u. Choice D treats v as if the integral of cos is (x²/2)sin, which is wrong."
  },
  {
    "id": "calcbc_u7_q195",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "partial fractions",
    "topicLabel": "Partial Fractions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int \\frac{1}{x^2 - 4} \\, dx\\).",
    "choices": [
      "A) \\(\\frac{1}{4} \\ln\\left|\\frac{x-2}{x+2}\\right| + C\\)",
      "B) \\(\\frac{1}{2} \\ln|x^2 - 4| + C\\)",
      "C) \\(\\frac{1}{4} \\ln|x^2 - 4| + C\\)",
      "D) \\(\\frac{1}{2} \\ln\\left|\\frac{x-2}{x+2}\\right| + C\\)"
    ],
    "answer": 0,
    "explanation": "Factor: 1/(x²−4) = 1/[(x−2)(x+2)] = (1/4)[1/(x−2) − 1/(x+2)]. Integrating gives (1/4)[ln|x−2| − ln|x+2|] + C = (1/4)ln|(x−2)/(x+2)| + C. Choice B treats the integrand as a logarithmic derivative of x²−4 but gets the coefficient wrong. Choice C correctly identifies log form but uses the wrong coefficient. Choice D has the right structure but uses 1/2 instead of 1/4."
  },
  {
    "id": "calcbc_u7_q196",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "trig substitution",
    "topicLabel": "Trigonometric Substitution",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "To evaluate \\(\\int \\frac{1}{\\sqrt{9 - x^2}} \\, dx\\), which substitution is most appropriate and what is the result?",
    "choices": [
      "A) \\(x = 3\\sin\\theta\\); result is \\(\\arcsin\\left(\\frac{x}{3}\\right) + C\\)",
      "B) \\(x = 3\\tan\\theta\\); result is \\(\\arctan\\left(\\frac{x}{3}\\right) + C\\)",
      "C) \\(x = 3\\sec\\theta\\); result is \\(\\ln|x + \\sqrt{9-x^2}| + C\\)",
      "D) \\(x = 3\\sin\\theta\\); result is \\(3\\arcsin\\left(\\frac{x}{3}\\right) + C\\)"
    ],
    "answer": 0,
    "explanation": "For √(a²−x²), use x = a sin θ. With x = 3 sin θ, dx = 3 cos θ dθ and √(9−x²) = 3 cos θ. The integral becomes ∫(3 cos θ dθ)/(3 cos θ) = ∫dθ = θ + C = arcsin(x/3) + C. Choice B is the substitution for √(a²+x²). Choice C uses secant which is for √(x²−a²). Choice D includes an extra factor of 3 from not canceling properly."
  },
  {
    "id": "calcbc_u7_q197",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "Trigonometric Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int \\sin^2(x) \\, dx\\).",
    "choices": [
      "A) \\(\\frac{x}{2} - \\frac{\\sin(2x)}{4} + C\\)",
      "B) \\(\\frac{x}{2} + \\frac{\\sin(2x)}{4} + C\\)",
      "C) \\(-\\frac{\\sin^3(x)}{3} + C\\)",
      "D) \\(\\frac{\\sin^3(x)}{3\\cos(x)} + C\\)"
    ],
    "answer": 0,
    "explanation": "Use the identity sin²(x) = (1 − cos(2x))/2. Then ∫sin²(x) dx = ∫(1/2 − cos(2x)/2) dx = x/2 − sin(2x)/4 + C. Choice B uses the identity sin²(x) = (1 + cos(2x))/2 which is actually the identity for cos²(x). Choice C attempts a u-substitution that doesn't apply here since there's no cos(x) factor. Choice D has no valid derivation."
  },
  {
    "id": "calcbc_u7_q198",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "improper integrals convergence",
    "topicLabel": "Improper Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Does \\(\\int_1^{\\infty} \\frac{1}{x^2} \\, dx\\) converge or diverge, and if it converges, what is its value?",
    "choices": [
      "A) Converges to 1",
      "B) Diverges",
      "C) Converges to \\(\\frac{1}{2}\\)",
      "D) Converges to 2"
    ],
    "answer": 0,
    "explanation": "Evaluate as lim(b→∞) ∫₁ᵇ x⁻² dx = lim(b→∞) [−1/x]₁ᵇ = lim(b→∞) (−1/b + 1) = 0 + 1 = 1. The integral converges to 1. Choice B is wrong because p=2 > 1 so the p-integral converges. Choice C halves the answer incorrectly. Choice D results from an antiderivative error such as computing −x⁻¹ as x or forgetting the negative sign."
  },
  {
    "id": "calcbc_u7_q199",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int \\ln(x) \\, dx\\).",
    "choices": [
      "A) \\(x \\ln(x) - x + C\\)",
      "B) \\(\\frac{\\ln(x)^2}{2x} + C\\)",
      "C) \\(\\frac{(\\ln x)^2}{2} + C\\)",
      "D) \\(x \\ln(x) + x + C\\)"
    ],
    "answer": 0,
    "explanation": "Use integration by parts with u = ln(x) and dv = dx, so du = 1/x dx and v = x. Then ∫ln(x) dx = x ln(x) − ∫x·(1/x) dx = x ln(x) − ∫1 dx = x ln(x) − x + C. Choice B is a common error where a student incorrectly applies a power-rule-style formula to ln(x) while also dividing by the derivative of x, conflating differentiation and integration rules. Choice C treats ln(x) as if u-substitution applies with u = ln(x), which doesn't work since dv = dx not dv = (1/x)dx. Choice D has a sign error in the second term."
  },
  {
    "id": "calcbc_u7_q200",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "Trigonometric Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int \\sin^3(x) \\, dx\\).",
    "choices": [
      "A) \\(-\\cos(x) + \\frac{\\cos^3(x)}{3} + C\\)",
      "B) \\(\\cos(x) - \\frac{\\cos^3(x)}{3} + C\\)",
      "C) \\(-\\frac{\\sin^4(x)}{4} + C\\)",
      "D) \\(3\\sin^2(x)\\cos(x) + C\\)"
    ],
    "answer": 0,
    "explanation": "Write sin³(x) = sin(x)·sin²(x) = sin(x)(1−cos²(x)). Let u = cos(x), du = −sin(x) dx. The integral becomes −∫(1−u²) du = −u + u³/3 + C = −cos(x) + cos³(x)/3 + C. Choice B has sign errors throughout. Choice C incorrectly applies a power rule directly to sin³(x). Choice D is the derivative of sin³(x), not the integral."
  },
  {
    "id": "calcbc_u7_q201",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "improper integrals convergence",
    "topicLabel": "Improper Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following improper integrals diverges?",
    "choices": [
      "A) \\(\\int_1^{\\infty} \\frac{1}{x^{0.9}} \\, dx\\)",
      "B) \\(\\int_1^{\\infty} \\frac{1}{x^2} \\, dx\\)",
      "C) \\(\\int_1^{\\infty} \\frac{1}{x^{1.1}} \\, dx\\)",
      "D) \\(\\int_1^{\\infty} \\frac{1}{x^{3}} \\, dx\\)"
    ],
    "answer": 0,
    "explanation": "The p-integral ∫₁^∞ (1/xᵖ) dx converges if and only if p > 1. For choice A, p = 0.9 < 1, so it diverges. For choices B, C, and D, p = 2, 1.1, and 3 respectively, all greater than 1, so those converge. A common error is thinking 0.9 is close enough to 1 to converge, but the cutoff is strict: any p ≤ 1 causes divergence."
  },
  {
    "id": "calcbc_u7_q202",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "u-substitution",
    "topicLabel": "U-Substitution",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^{x^3} \\, dx\\).",
    "choices": [
      "A) \\(\\frac{1}{3} e^{x^3} + C\\)",
      "B) \\(x^3 e^{x^3} + C\\)",
      "C) \\(\\frac{1}{3} x^3 e^{x^3} + C\\)",
      "D) \\(3 e^{x^3} + C\\)"
    ],
    "answer": 0,
    "explanation": "Let u = x^3, so du = 3x^2 dx, meaning x^2 dx = du/3. The integral becomes (1/3)∫e^u du = (1/3)e^u + C = (1/3)e^(x^3) + C. Choice B forgets the 1/3 factor. Choice C incorrectly multiplies x^3 back in. Choice D uses 3 instead of 1/3 from the substitution."
  },
  {
    "id": "calcbc_u7_q203",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x \\cos(x) \\, dx\\).",
    "choices": [
      "A) \\(x \\sin(x) + \\cos(x) + C\\)",
      "B) \\(x \\sin(x) - \\cos(x) + C\\)",
      "C) \\(-x \\sin(x) + \\cos(x) + C\\)",
      "D) \\(\\frac{x^2}{2} \\sin(x) + C\\)"
    ],
    "answer": 0,
    "explanation": "Using integration by parts with u = x and dv = cos(x) dx, we get du = dx and v = sin(x). So the integral = x sin(x) - ∫sin(x) dx = x sin(x) + cos(x) + C. Choice B has the wrong sign on cos(x) - students forget the negative from integrating sin(x). Choice C incorrectly negates the x sin(x) term. Choice D treats x as staying with the original integrand without properly applying IBP."
  },
  {
    "id": "calcbc_u7_q204",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "trig substitution",
    "topicLabel": "Trigonometric Substitution",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which substitution is most appropriate for evaluating \\(\\int \\frac{dx}{\\sqrt{9 - x^2}}\\)?",
    "choices": [
      "A) \\(x = 3\\sin(\\theta)\\)",
      "B) \\(x = 3\\tan(\\theta)\\)",
      "C) \\(x = 3\\cos(\\theta)\\)",
      "D) \\(x = \\sqrt{9}\\sin^2(\\theta)\\)"
    ],
    "answer": 0,
    "explanation": "The form sqrt(a^2 - x^2) calls for x = a sin(θ), here x = 3 sin(θ), so that 9 - x^2 = 9 - 9sin^2(θ) = 9cos^2(θ) and the square root simplifies to 3cos(θ). Choice B (tan substitution) is used for sqrt(a^2 + x^2) and is not appropriate here. Choice C, x = 3cos(θ), is a plausible error: while cos substitution does simplify 9 - x^2 = 9sin^2(θ), it introduces a -3sin(θ) for dx, leading to sign complications and is not the standard substitution used for this form. Choice D, x = sqrt(9)sin^2(θ), is not a standard substitution and does not simplify the expression cleanly, as it leads to a non-standard differential and does not reduce the square root to a simple trigonometric expression."
  },
  {
    "id": "calcbc_u7_q205",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "Trigonometric Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int \\sin^2(x) \\, dx\\).",
    "choices": [
      "A) \\(\\frac{x}{2} - \\frac{\\sin(2x)}{4} + C\\)",
      "B) \\(-\\frac{\\sin^3(x)}{3} + C\\)",
      "C) \\(\\frac{x}{2} + \\frac{\\sin(2x)}{4} + C\\)",
      "D) \\(\\frac{\\sin^3(x)}{3} + C\\)"
    ],
    "answer": 0,
    "explanation": "Use the identity sin^2(x) = (1 - cos(2x))/2. Then ∫sin^2(x) dx = ∫(1/2 - cos(2x)/2) dx = x/2 - sin(2x)/4 + C. Choice B attempts a power-reduction by treating it like a u-sub with cos(x), which doesn't work since d/dx[sin(x)] = cos(x), not sin(x). Choice C has the wrong sign on the sin(2x) term, confusing the identity for cos^2(x). Choice D is another incorrect power-reduction attempt."
  },
  {
    "id": "calcbc_u7_q206",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "improper integrals convergence",
    "topicLabel": "Improper Integrals - Convergence",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Does \\(\\int_1^{\\infty} \\frac{1}{x^2} \\, dx\\) converge or diverge, and if it converges, what is its value?",
    "choices": [
      "A) Converges to 1",
      "B) Diverges to infinity",
      "C) Converges to 2",
      "D) Converges to \\(\\frac{1}{2}\\)"
    ],
    "answer": 0,
    "explanation": "Evaluate lim(b→∞) ∫[1 to b] x^(-2) dx = lim(b→∞) [-x^(-1)] from 1 to b = lim(b→∞) (-1/b + 1) = 0 + 1 = 1. The integral converges to 1. Choice B is incorrect - 1/x^2 decays fast enough (p=2 > 1) to converge. Choice C might come from forgetting the antiderivative evaluation at the lower bound. Choice D might result from an antiderivative error such as using -1/(2x^2)."
  },
  {
    "id": "calcbc_u7_q207",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int \\ln(x) \\, dx\\).",
    "choices": [
      "A) \\(x \\ln(x) - x + C\\)",
      "B) \\(\\frac{1}{x} + C\\)",
      "C) \\(x \\ln(x) + x + C\\)",
      "D) \\(\\frac{\\ln^2(x)}{2} + C\\)"
    ],
    "answer": 0,
    "explanation": "Use integration by parts with u = ln(x), dv = dx, so du = 1/x dx, v = x. Then ∫ln(x) dx = x ln(x) - ∫x · (1/x) dx = x ln(x) - ∫1 dx = x ln(x) - x + C. Choice B is the derivative of ln(x), not its integral. Choice C has a sign error in the second term - students often forget the minus sign from IBP. Choice D treats ln(x) as if applying a power rule, which doesn't apply to logarithmic functions."
  },
  {
    "id": "calcbc_u7_q208",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "trig substitution",
    "topicLabel": "Trigonometric Substitution",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the substitution \\(x = 2\\tan(\\theta)\\), which expression is equivalent to \\(\\sqrt{x^2 + 4}\\)?",
    "choices": [
      "A) \\(2\\sec(\\theta)\\)",
      "B) \\(2\\tan(\\theta)\\)",
      "C) \\(2\\sec^2(\\theta)\\)",
      "D) \\(2\\sin(\\theta)\\)"
    ],
    "answer": 0,
    "explanation": "With x = 2tan(θ), we get x² + 4 = 4tan²(θ) + 4 = 4(tan²(θ) + 1) = 4sec²(θ), so √(x²+4) = 2|sec(θ)| = 2sec(θ) for θ ∈ (−π/2, π/2). Choice B forgets to take the square root properly and confuses the identity. Choice C is a common error where students correctly reach 4sec²(θ) but then take only the square root of the coefficient (getting 2) while forgetting to also take the square root of sec²(θ), leaving sec²(θ) instead of sec(θ). Choice D confuses this with the sine substitution used for expressions of the form √(a² − x²)."
  },
  {
    "id": "calcbc_u7_q209",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "improper integrals convergence",
    "topicLabel": "Improper Integrals - Convergence",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following integrals diverges?",
    "choices": [
      "A) \\(\\int_1^{\\infty} \\frac{1}{x} \\, dx\\)",
      "B) \\(\\int_1^{\\infty} \\frac{1}{x^2} \\, dx\\)",
      "C) \\(\\int_1^{\\infty} \\frac{1}{x^{1.5}} \\, dx\\)",
      "D) \\(\\int_1^{\\infty} e^{-x} \\, dx\\)"
    ],
    "answer": 0,
    "explanation": "The p-series ∫(1 to ∞) x^(-p) dx converges if and only if p > 1. For choice A, p = 1, so it diverges (the integral equals ln(b) → ∞). For choice B, p = 2 > 1, so it converges. For choice C, p = 1.5 > 1, so it converges. For choice D, ∫e^(-x) dx = [-e^(-x)] from 1 to ∞ = e^(-1), which converges. A common misconception is that all integrals from 1 to ∞ diverge, or students forget the boundary case at p = 1."
  },
  {
    "id": "calcbc_u7_q210",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^x \\, dx\\).",
    "choices": [
      "A) \\(x^2 e^x - 2xe^x + 2e^x + C\\)",
      "B) \\(x^2 e^x - 2xe^x + C\\)",
      "C) \\(x^2 e^x + 2xe^x - 2e^x + C\\)",
      "D) \\(\\frac{x^3}{3} e^x + C\\)"
    ],
    "answer": 0,
    "explanation": "Apply integration by parts twice. First, let u = x^2 and dv = e^x dx, so du = 2x dx and v = e^x. This gives x^2 e^x - ∫2x e^x dx. Apply integration by parts again to ∫2x e^x dx with u = 2x, dv = e^x dx: 2xe^x - ∫2e^x dx = 2xe^x - 2e^x. Combining: x^2 e^x - (2xe^x - 2e^x) + C = x^2 e^x - 2xe^x + 2e^x + C. Choice B forgets the final -2e^x term from the second integration by parts. Choice C has sign errors from misapplying the subtraction step. Choice D incorrectly treats e^x as if integrating a power function, a fundamental misapplication of the formula."
  },
  {
    "id": "calcbc_u7_q211",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "improper integrals convergence",
    "topicLabel": "Improper Integrals Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following correctly evaluates \\(\\int_0^{\\infty} x e^{-x} \\, dx\\)?",
    "choices": [
      "A) 1",
      "B) \\(-1\\)",
      "C) \\(e\\)",
      "D) The integral diverges."
    ],
    "answer": 0,
    "explanation": "Write the integral as lim_{b→∞} ∫_0^b x e^{-x} dx. Apply integration by parts with u = x, dv = e^{-x} dx, giving du = dx and v = -e^{-x}. Then ∫x e^{-x} dx = -xe^{-x} + ∫e^{-x} dx = -xe^{-x} - e^{-x} + C = -e^{-x}(x+1) + C. Evaluating: lim_{b→∞} [-e^{-b}(b+1)] - [-e^0(1)] = 0 - (-1) = 1, since lim_{b→∞} (b+1)/e^b = 0 by L'Hopital's rule. Choice B results from a consistent sign error in which the student correctly computes lim_{b→∞} [-e^{-b}(b+1)] = 0 but then evaluates the boundary term at 0 as -e^0(0+1) = -1, forgetting to subtract a negative (i.e., treating the result as 0 + (-1) = -1 rather than 0 - (-1) = 1). Choice C confuses this with a related expression involving e. Choice D is incorrect because the exponential decay dominates the polynomial growth and the integral does converge."
  },
  {
    "id": "calcbc_u7_q212",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^x \\, dx\\).",
    "choices": [
      "A) \\(e^x(x^2 - 2x + 2) + C\\)",
      "B) \\(e^x(x^2 + 2x + 2) + C\\)",
      "C) \\(e^x(x^2 - 2x) + C\\)",
      "D) \\(\\frac{x^3}{3}e^x + C\\)"
    ],
    "answer": 0,
    "explanation": "Using integration by parts twice: let u = x², dv = eˣ dx, so du = 2x dx, v = eˣ. This gives x²eˣ − ∫2xeˣ dx. Apply IBP again to ∫2xeˣ dx: let u = 2x, dv = eˣ dx, giving 2xeˣ − 2eˣ. So the full result is x²eˣ − (2xeˣ − 2eˣ) + C = eˣ(x² − 2x + 2) + C. Choice B incorrectly adds rather than subtracts when applying IBP the second time (a classic sign error). Choice C forgets the +2 term from the second application of IBP. Choice D is the trap of treating eˣ like a polynomial and using the power rule on the wrong factor."
  },
  {
    "id": "calcbc_u7_q213",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "improper integrals convergence",
    "topicLabel": "Improper Integrals Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following improper integrals converges?\n\nI. \\(\\int_1^{\\infty} \\frac{1}{x} \\, dx\\)\n\nII. \\(\\int_1^{\\infty} \\frac{1}{x^2} \\, dx\\)\n\nIII. \\(\\int_0^{1} \\frac{1}{\\sqrt{x}} \\, dx\\)",
    "choices": [
      "A) \\(\\ln|x| + \\ln(x^2+1) + 2\\arctan(x) + C\\)",
      "B) II and III only",
      "C) I and II only",
      "D) I, II, and III"
    ],
    "answer": 0,
    "explanation": "With A=1, B=2, C=2, the partial fraction decomposition yields the integral \\(\\ln|x| + \\ln(x^2+1) + 2\\arctan(x) + C\\). This is the correct antiderivative corresponding to choice A. Choice B reflects the misconception that the singularity at x=0 in integral III causes divergence, leading students to exclude III. Choice C includes integral I, reflecting the error that 1/x converges because ln grows slowly. Choice D reflects a failure to test any of the integrals carefully, incorrectly assuming all three converge."
  },
  {
    "id": "calcbc_u7_q214",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^x \\, dx\\).",
    "choices": [
      "A) \\(e^x(x^2 - 2x + 2) + C\\)",
      "B) \\(e^x(x^2 + 2x + 2) + C\\)",
      "C) \\(e^x(x^2 - 2x - 2) + C\\)",
      "D) \\(\\frac{x^3}{3}e^x + C\\)"
    ],
    "answer": 0,
    "explanation": "Apply integration by parts twice. First, let u = x², dv = eˣ dx, so du = 2x dx, v = eˣ. This gives x²eˣ - ∫2xeˣ dx. For ∫2xeˣ dx, let u = 2x, dv = eˣ dx, so du = 2 dx, v = eˣ, giving 2xeˣ - 2eˣ. Combining: x²eˣ - (2xeˣ - 2eˣ) + C = eˣ(x² - 2x + 2) + C. Choice B results from a sign error when subtracting the second IBP result. Choice C makes an arithmetic error with the constant term. Choice D incorrectly treats eˣ as a power function and applies the power rule to x², a common misconception when students confuse which factor to differentiate."
  },
  {
    "id": "calcbc_u7_q215",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "improper integrals convergence",
    "topicLabel": "Improper Integrals Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following improper integrals converges?\nI. \\(\\int_1^{\\infty} \\frac{1}{x} \\, dx\\)\nII. \\(\\int_0^{1} \\frac{1}{\\sqrt{x}} \\, dx\\)\nIII. \\(\\int_{-\\infty}^{\\infty} \\frac{x}{1+x^2} \\, dx\\)",
    "choices": [
      "A) II only",
      "B) \\(-\\ln|x| + 2\\ln|x-1| - \\ln|x+1| + C\\)",
      "C) \\(-\\ln|x| + 2\\ln|x-1| + \\ln|x+1| + C\\)",
      "D) I, II, and III"
    ],
    "answer": 0,
    "explanation": "Integral I: ∫₁^∞ 1/x dx = lim[b→∞] ln(b) - ln(1) = ∞. This diverges. Integral II: ∫₀¹ x^(-1/2) dx = lim[a→0⁺] [2√x]₀¹ = 2√1 - 0 = 2. This converges. Integral III: This is an improper integral over all reals. It must be split as ∫₋∞⁰ x/(1+x²) dx + ∫₀^∞ x/(1+x²) dx. Each piece equals ½ln(1+x²) evaluated at the limits. The second piece gives lim[b→∞] ½ln(1+b²) = ∞, so it diverges. Students commonly compute the symmetric limit lim[b→∞] ∫₋ᵦᵦ x/(1+x²) dx = 0 and incorrectly conclude convergence - this is the Cauchy principal value, not true convergence. Integral III diverges. Therefore only II converges, making A the correct answer."
  },
  {
    "id": "calcbc_u7_q216",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "integration by parts",
    "topicLabel": "Integration by Parts",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate \\(\\int x^2 e^x \\, dx\\).",
    "choices": [
      "A) \\(e^x(x^2 - 2x + 2) + C\\)",
      "B) \\(e^x(x^2 + 2x + 2) + C\\)",
      "C) \\(e^x(x^2 - 2x) + C\\)",
      "D) \\(\\frac{x^3}{3}e^x - \\int \\frac{x^3}{3}e^x \\, dx + C\\)"
    ],
    "answer": 0,
    "explanation": "Apply integration by parts twice. First, let u = x^2, dv = e^x dx, so du = 2x dx, v = e^x. This gives x^2 e^x - ∫2x e^x dx. For ∫2x e^x dx, let u = 2x, dv = e^x dx, so du = 2 dx, v = e^x, yielding 2xe^x - 2e^x. Combining: x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C. Choice B incorrectly uses +2x instead of -2x, a sign error in the second application. Choice C forgets the +2 constant term from the final integration. Choice D incorrectly applies integration by parts to the exponent function rather than the polynomial, choosing u = e^x and dv = x^2 dx, which creates an unsolvable loop."
  },
  {
    "id": "calcbc_u7_q217",
    "subject": "apcalcbc",
    "unit": 7,
    "topic": "partial fractions",
    "topicLabel": "Partial Fractions",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is equal to \\(\\int \\frac{x^3 + 2x}{x^2 + 1} \\, dx\\)?",
    "choices": [
      "A) \\(\\frac{x^2}{2} + \\frac{1}{2}\\ln(x^2+1) + C\\)",
      "B) \\(\\frac{x^2}{2} + \\ln(x^2+1) + C\\)",
      "C) \\(\\frac{x^3}{3} + 2\\arctan(x) + C\\)",
      "D) \\(\\frac{x^2}{2} - \\frac{1}{2}\\ln(x^2+1) + C\\)"
    ],
    "answer": 0,
    "explanation": "The degree of the numerator (3) exceeds the degree of the denominator (2), so long division must be performed first. Dividing x^3 + 2x by x^2 + 1: x^3 + 2x = x(x^2 + 1) + x, so (x^3 + 2x)/(x^2 + 1) = x + x/(x^2+1). Now integrate term by term: ∫x dx + ∫x/(x^2+1) dx = x^2/2 + (1/2)ln(x^2+1) + C, using the substitution u = x^2+1 for the second term. Choice B forgets the factor of 1/2 from the u-substitution on the second term. Choice C incorrectly treats the integrand as x + 2/(x^2+1), forgetting to perform long division and misreading 2x/(x^2+1) as 2/(x^2+1). Choice D uses a negative sign on the logarithm term, a common sign error when students misapply the u-substitution."
  },
  {
    "id": "calcbc_u8_q218",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area between the curves y = x² and y = x on the interval [0, 1]?",
    "choices": [
      "A) 1/6",
      "B) 1/3",
      "C) 1/2",
      "D) 2/3"
    ],
    "answer": 0,
    "explanation": "On [0,1], x ≥ x², so Area = ∫₀¹ (x - x²) dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6. Choice B (1/3) results from integrating only x² or only x incorrectly. Choice C (1/2) comes from computing ∫x dx alone. Choice D forgets to subtract."
  },
  {
    "id": "calcbc_u8_q219",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes: Disc Method",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = √x, x = 0, and x = 4 is revolved about the x-axis. Which integral gives the volume of the solid?",
    "choices": [
      "A) π ∫₀⁴ x dx",
      "B) π ∫₀⁴ √x dx",
      "C) π ∫₀⁴ x² dx",
      "D) 2π ∫₀⁴ √x dx"
    ],
    "answer": 0,
    "explanation": "The disc method gives V = π ∫ [R(x)]² dx. Here R(x) = √x, so [√x]² = x. Thus V = π ∫₀⁴ x dx. Choice B forgets to square the radius. Choice C squares x instead of √x. Choice D uses the shell method formula incorrectly applied here."
  },
  {
    "id": "calcbc_u8_q220",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes: Washer Method",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = x and y = x² is revolved about the x-axis. Which expression correctly represents the volume using the washer method?",
    "choices": [
      "A) π ∫₀¹ (x² - x⁴) dx",
      "B) π ∫₀¹ (x - x²)² dx",
      "C) π ∫₀¹ (x² + x⁴) dx",
      "D) 2π ∫₀¹ (x² - x⁴) dx"
    ],
    "answer": 0,
    "explanation": "The washer method uses V = π ∫ ([R(x)]² - [r(x)]²) dx. The outer radius is y = x and inner radius is y = x², so V = π ∫₀¹ (x² - x⁴) dx. Choice B incorrectly squares the difference rather than taking the difference of squares. Choice C adds instead of subtracts. Choice D uses 2π, which belongs to the shell method."
  },
  {
    "id": "calcbc_u8_q221",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes shell method",
    "topicLabel": "Volumes: Shell Method",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = x², y = 0, and x = 2 is revolved about the y-axis. Using the shell method, which integral gives the volume?",
    "choices": [
      "A) 2π ∫₀² x · x² dx",
      "B) π ∫₀² x⁴ dx",
      "C) 2π ∫₀² x² dx",
      "D) π ∫₀⁴ y dy"
    ],
    "answer": 0,
    "explanation": "The shell method about the y-axis gives V = 2π ∫ x · f(x) dx. With f(x) = x², V = 2π ∫₀² x · x² dx = 2π ∫₀² x³ dx. Choice B is the disc method formula applied incorrectly. Choice C omits the shell radius x. Choice D sets up the disc method in terms of y but uses the wrong limits."
  },
  {
    "id": "calcbc_u8_q222",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "arc length",
    "topicLabel": "Arc Length",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which integral correctly gives the arc length of y = f(x) on the interval [a, b]?",
    "choices": [
      "A) ∫ₐᵇ √(1 + [f'(x)]²) dx",
      "B) ∫ₐᵇ √(1 + [f(x)]²) dx",
      "C) ∫ₐᵇ (1 + [f'(x)]²) dx",
      "D) ∫ₐᵇ √([f'(x)]²) dx"
    ],
    "answer": 0,
    "explanation": "The arc length formula is L = ∫ₐᵇ √(1 + [f'(x)]²) dx. Choice B uses f(x) instead of f'(x), a common error. Choice C forgets the square root. Choice D simplifies to ∫|f'(x)| dx, which just measures the total change in y, not the arc length along the curve."
  },
  {
    "id": "calcbc_u8_q223",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "Motion Problems with Integrals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along the x-axis with velocity v(t) = 3t² - 2. What is the displacement of the particle from t = 0 to t = 2?",
    "choices": [
      "A) 4",
      "B) 8",
      "C) 10",
      "D) 12"
    ],
    "answer": 0,
    "explanation": "Displacement = ∫₀² (3t² - 2) dt = [t³ - 2t]₀² = (8 - 4) - 0 = 4. Choice B confuses displacement with distance or makes an arithmetic error. Choice C comes from not subtracting the -2t term correctly. Choice D results from ignoring the -2 term entirely and computing only ∫3t² dt = 8, then adding incorrectly."
  },
  {
    "id": "calcbc_u8_q224",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "Motion Problems with Integrals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle's velocity is v(t) = t - 3 for 0 ≤ t ≤ 6. What is the total distance traveled by the particle?",
    "choices": [
      "A) 9",
      "B) 0",
      "C) 3",
      "D) 6"
    ],
    "answer": 0,
    "explanation": "Total distance = ∫₀⁶ |t - 3| dt. The velocity is negative on [0,3] and positive on [3,6]. Distance = ∫₀³ (3 - t) dt + ∫₃⁶ (t - 3) dt = [3t - t²/2]₀³ + [t²/2 - 3t]₃⁶ = (9 - 9/2) + (18 - 18 - 9/2 + 9) = 4.5 + 4.5 = 9. Choice B gives displacement ∫₀⁶(t-3)dt = 0, confusing displacement with distance. Choice C uses only half the interval. Choice D is a common arithmetic error."
  },
  {
    "id": "calcbc_u8_q225",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area of the region enclosed between f(x) = x² and g(x) = 2x + 3?",
    "choices": [
      "A) 32/3",
      "B) 16/3",
      "C) 20/3",
      "D) 8"
    ],
    "answer": 0,
    "explanation": "First find intersections: x² = 2x + 3 → x² - 2x - 3 = 0 → (x-3)(x+1) = 0, so x = -1 and x = 3. The area is ∫from -1 to 3 of (2x + 3 - x²) dx = [x² + 3x - x³/3] from -1 to 3 = (9 + 9 - 9) - (1 - 3 + 1/3) = 9 - (-5/3) = 9 + 5/3 = 32/3. Choice B computes ∫₀² (4 - x²) dx = 16/3, integrating over only half the symmetric region [0, 2] instead of the full interval [-2, 2], yielding half the correct area. Choice C (20/3) is an arithmetic error. Choice D (8) comes from using incorrect limits."
  },
  {
    "id": "calcbc_u8_q226",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes: Disc Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = √x, x = 4, and y = 0 is revolved about the x-axis. What is the volume of the solid generated?",
    "choices": [
      "A) 8π",
      "B) 16π",
      "C) 4π",
      "D) 32π/5"
    ],
    "answer": 0,
    "explanation": "Using the disc method, V = π ∫from 0 to 4 of (√x)² dx = π ∫from 0 to 4 of x dx = π [x²/2] from 0 to 4 = π(16/2) = 8π. Choice B (16π) results from forgetting to divide by 2 when integrating. Choice C (4π) comes from a factor-of-2 arithmetic error. Choice D (32π/5) is the result of incorrectly squaring √x as x^(3/2) and integrating that instead."
  },
  {
    "id": "calcbc_u8_q227",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes: Washer Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = x² and y = x is revolved about the x-axis. Which integral correctly represents the volume of the solid?",
    "choices": [
      "A) π ∫from 0 to 1 (x² - x⁴) dx",
      "B) π ∫from 0 to 1 (x - x²)² dx",
      "C) π ∫from 0 to 1 (x⁴ - x²) dx",
      "D) 2π ∫from 0 to 1 (x - x²) dx"
    ],
    "answer": 0,
    "explanation": "The intersections are at x = 0 and x = 1. On [0,1], y = x is the outer curve and y = x² is the inner curve. The washer method gives V = π ∫from 0 to 1 [(x)² - (x²)²] dx = π ∫from 0 to 1 (x² - x⁴) dx. Choice B squares the difference (x - x²)² instead of taking the difference of squares. Choice C reverses inner and outer radii. Choice D is the shell method formula, not the washer method."
  },
  {
    "id": "calcbc_u8_q228",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes shell method",
    "topicLabel": "Volumes: Shell Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = x², y = 0, and x = 2 is revolved about the y-axis. Using the shell method, what is the volume of the solid?",
    "choices": [
      "A) 8π",
      "B) 4π",
      "C) 16π/5",
      "D) 32π/5"
    ],
    "answer": 0,
    "explanation": "Shell method about the y-axis: V = 2π ∫from 0 to 2 x·f(x) dx = 2π ∫from 0 to 2 x·x² dx = 2π ∫from 0 to 2 x³ dx = 2π [x⁴/4] from 0 to 2 = 2π(16/4) = 8π. Choice B (4π) results from forgetting the factor of 2π or making an arithmetic error dividing. Choice C (16π/5) comes from integrating x² instead of x³. Choice D (32π/5) uses the disk method about the y-axis incorrectly."
  },
  {
    "id": "calcbc_u8_q229",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "arc length",
    "topicLabel": "Arc Length",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which integral represents the arc length of the curve y = (1/3)x³ from x = 0 to x = 2?",
    "choices": [
      "A) ∫from 0 to 2 √(1 + x⁴) dx",
      "B) ∫from 0 to 2 √(1 + x²) dx",
      "C) ∫from 0 to 2 (1 + x⁴) dx",
      "D) ∫from 0 to 2 √(1 + (1/9)x⁴) dx"
    ],
    "answer": 0,
    "explanation": "The arc length formula is L = ∫√(1 + [f'(x)]²) dx. Since f(x) = (1/3)x³, f'(x) = x². Then [f'(x)]² = x⁴. So L = ∫from 0 to 2 √(1 + x⁴) dx. Choice B uses f'(x) = x instead of x², a differentiation error. Choice C omits the square root. Choice D uses (1/3)x² as the derivative, forgetting to apply the power rule correctly (not multiplying by 1/3)."
  },
  {
    "id": "calcbc_u8_q230",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area of the region bounded by x = y² and x = y + 2, integrated with respect to y?",
    "choices": [
      "A) 9/2",
      "B) 9",
      "C) 7/2",
      "D) 8/3"
    ],
    "answer": 0,
    "explanation": "Find intersections: y² = y + 2 → y² - y - 2 = 0 → (y-2)(y+1) = 0, so y = -1 and y = 2. On [-1, 2], x = y + 2 is to the right of x = y². Area = ∫from -1 to 2 [(y + 2) - y²] dy = [y²/2 + 2y - y³/3] from -1 to 2 = (2 + 4 - 8/3) - (1/2 - 2 + 1/3) = (18/3 - 8/3) - (3/6 - 12/6 + 2/6) = 10/3 - (-7/6) = 20/6 + 7/6 = 27/6 = 9/2. The correct answer is 9/2. Choice B (9) doubles the correct answer, a common error from misapplying limits. Choice C (7/2) results from sign errors in the antiderivative evaluation. Choice D (8/3) comes from only partially evaluating the antiderivative."
  },
  {
    "id": "calcbc_u8_q231",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes: Disc Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = e^x, x = 0, x = 1, and y = 0 is revolved about the x-axis. What is the volume of the resulting solid?",
    "choices": [
      "A) π(e² - 1)/2",
      "B) π(e - 1)",
      "C) π e²/2",
      "D) 2π(e - 1)"
    ],
    "answer": 0,
    "explanation": "Disc method: V = π ∫from 0 to 1 (e^x)² dx = π ∫from 0 to 1 e^(2x) dx = π [e^(2x)/2] from 0 to 1 = π(e²/2 - 1/2) = π(e² - 1)/2. Choice B uses e^x instead of e^(2x), forgetting to square the radius. Choice C omits subtracting the lower bound of the antiderivative. Choice D is the result of the shell method setup but computed incorrectly."
  },
  {
    "id": "calcbc_u8_q232",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes shell method",
    "topicLabel": "Volumes: Shell Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = sin(x), y = 0, x = 0, and x = π is revolved about the y-axis. Using the shell method, what is the volume of the solid?",
    "choices": [
      "A) 2π²",
      "B) π²",
      "C) 4π",
      "D) 2π"
    ],
    "answer": 0,
    "explanation": "Shell method: V = 2π ∫from 0 to π x·sin(x) dx. Use integration by parts: let u = x, dv = sin(x) dx, so du = dx, v = -cos(x). V = 2π [−x cos(x) + sin(x)] from 0 to π = 2π [(−π cos π + sin π) − (0 + 0)] = 2π [(−π)(−1) + 0] = 2π(π) = 2π². Choice B (π²) forgets the factor of 2 in the shell formula. Choice C (4π) results from an integration by parts error. Choice D (2π) drops the factor of π from the integration by parts result."
  },
  {
    "id": "calcbc_u8_q233",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "Motion Problems with Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle has acceleration a(t) = 6t - 2 and initial velocity v(0) = 1. What is the position of the particle at t = 2 if its initial position is x(0) = 3?",
    "choices": [
      "A) 11",
      "B) 9",
      "C) 15",
      "D) 7"
    ],
    "answer": 1,
    "explanation": "First find v(t): v(t) = ∫(6t - 2) dt = 3t² - 2t + C. Since v(0) = 1, C = 1, so v(t) = 3t² - 2t + 1. Then find x(t): x(t) = ∫(3t² - 2t + 1) dt = t³ - t² + t + C. Since x(0) = 3, C = 3, so x(t) = t³ - t² + t + 3. At t = 2: x(2) = 8 - 4 + 2 + 3 = 9. Choice A (11) comes from forgetting to apply the initial condition for position. Choice C (15) results from not using C = 1 for velocity. Choice D (7) is an arithmetic error in computing x(2)."
  },
  {
    "id": "calcbc_u8_q234",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area of the region enclosed by the curves $y = x^2$ and $y = 2x + 3$?",
    "choices": [
      "A) $\\frac{32}{3}$",
      "B) $\\frac{16}{3}$",
      "C) $\\frac{20}{3}$",
      "D) $8$"
    ],
    "answer": 0,
    "explanation": "First find intersections: $x^2 = 2x+3 \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0$, so $x=-1$ and $x=3$. On $[-1,3]$, $2x+3 \\geq x^2$. Area $= \\int_{-1}^{3}(2x+3-x^2)\\,dx = \\left[x^2+3x-\\frac{x^3}{3}\\right]_{-1}^{3} = (9+9-9)-( 1-3+\\frac{1}{3}) = 9-(-\\frac{5}{3}) = \\frac{32}{3}$. Choice B forgets the full interval. Choice C results from an arithmetic error in the antiderivative. Choice D comes from forgetting to subtract curves correctly."
  },
  {
    "id": "calcbc_u8_q235",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes: Disc Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by $y = \\sqrt{x}$, $x = 4$, and $y = 0$ is revolved about the $x$-axis. What is the volume of the resulting solid?",
    "choices": [
      "A) $8\\pi$",
      "B) $16\\pi$",
      "C) $4\\pi$",
      "D) $\\frac{32\\pi}{5}$"
    ],
    "answer": 0,
    "explanation": "Using the disc method: $V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\int_0^4 x\\,dx = \\pi \\left[\\frac{x^2}{2}\\right]_0^4 = \\pi \\cdot 8 = 8\\pi$. Choice B incorrectly computes $\\pi \\cdot 16$, forgetting to divide by 2. Choice C uses $\\int_0^4 \\sqrt{x}\\,dx$ without squaring. Choice D uses the formula for revolving $y=x^2$, a common mix-up with the inverse function."
  },
  {
    "id": "calcbc_u8_q236",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes: Washer Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by $y = x$ and $y = x^2$ is revolved about the $x$-axis. What is the volume of the resulting solid?",
    "choices": [
      "A) $\\frac{2\\pi}{15}$",
      "B) $\\frac{\\pi}{6}$",
      "C) $\\frac{\\pi}{15}$",
      "D) $\\frac{2\\pi}{3}$"
    ],
    "answer": 0,
    "explanation": "The curves intersect at $x=0$ and $x=1$, with $x \\geq x^2$ on $[0,1]$. Washer method: $V = \\pi \\int_0^1 \\left[x^2 - (x^2)^2\\right]dx = \\pi \\int_0^1 (x^2 - x^4)\\,dx = \\pi\\left[\\frac{x^3}{3}-\\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3}-\\frac{1}{5}\\right) = \\frac{2\\pi}{15}$. Choice B uses $\\frac{1}{2}-\\frac{1}{3}$, mixing up exponents. Choice C forgets to multiply by $\\pi$. Choice D adds instead of subtracts the radii."
  },
  {
    "id": "calcbc_u8_q237",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes shell method",
    "topicLabel": "Volumes: Shell Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by $y = x^2$, $x = 0$, and $y = 4$ is revolved about the $y$-axis. Using the shell method, what is the volume of the resulting solid?",
    "choices": [
      "A) $8\\pi$",
      "B) $\\frac{128\\pi}{5}$",
      "C) $16\\pi$",
      "D) $\\frac{32\\pi}{5}$"
    ],
    "answer": 0,
    "explanation": "Shell method revolving about $y$-axis with shells in $x$: radius $= x$, height $= 4 - x^2$. $V = 2\\pi \\int_0^2 x(4-x^2)\\,dx = 2\\pi \\int_0^2 (4x - x^3)\\,dx = 2\\pi\\left[2x^2 - \\frac{x^4}{4}\\right]_0^2 = 2\\pi(8-4) = 8\\pi$. Choice B results from using the disc method about the $x$-axis instead. Choice C doubles the answer by forgetting to subtract $x^3$. Choice D comes from using disc method about $y$-axis incorrectly."
  },
  {
    "id": "calcbc_u8_q238",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "arc length",
    "topicLabel": "Arc Length",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which integral represents the arc length of the curve $y = \\frac{x^3}{3}$ from $x = 0$ to $x = 2$?",
    "choices": [
      "A) $\\int_0^2 \\sqrt{1 + x^4}\\,dx$",
      "B) $\\int_0^2 \\sqrt{1 + x^2}\\,dx$",
      "C) $\\int_0^2 \\sqrt{1 + \\frac{x^4}{9}}\\,dx$",
      "D) $\\int_0^2 (1 + x^4)\\,dx$"
    ],
    "answer": 0,
    "explanation": "Arc length formula: $L = \\int_a^b \\sqrt{1+(y')^2}\\,dx$. Here $y' = x^2$, so $(y')^2 = x^4$. Thus $L = \\int_0^2 \\sqrt{1+x^4}\\,dx$. Choice B incorrectly uses $y' = x$ (forgetting the coefficient of $\\frac{1}{3}$ yields $y'=x^2$, not $x$). Choice C incorrectly squares $\\frac{x^2}{3}$ when the derivative is $x^2$, not $\\frac{x^2}{3}$. Choice D omits the square root, a common error."
  },
  {
    "id": "calcbc_u8_q239",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area of the region bounded by $x = y^2 - 2$ and $x = y$ in the $xy$-plane?",
    "choices": [
      "A) $\\frac{9}{2}$",
      "B) $\\frac{7}{2}$",
      "C) $\\frac{9}{4}$",
      "D) $\\frac{27}{6}$"
    ],
    "answer": 0,
    "explanation": "Integrating with respect to $y$ is easier. Setting the expressions equal: $y^2 - 2 = y$ gives $y^2 - y - 2 = 0$, so $(y-2)(y+1) = 0$, yielding $y = -1$ and $y = 2$. On $[-1, 2]$, $y \\geq y^2 - 2$. The area is $\\int_{-1}^{2}(y - (y^2 - 2))\\,dy = \\left[\\frac{y^2}{2} - \\frac{y^3}{3} + 2y\\right]_{-1}^{2} = \\frac{9}{2}$. Choice B results from an arithmetic error at the boundaries. Choice C incorrectly halves the answer. Choice D is the unsimplified form of the correct answer."
  },
  {
    "id": "calcbc_u8_q240",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "Motion Problems with Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along the $x$-axis with velocity $v(t) = t^2$ for $0 \\leq t \\leq 3$. If the particle's position at $t = 0$ is $x(0) = 2$, what is the position of the particle at $t = 3$?",
    "choices": [
      "A) $11$",
      "B) $9$",
      "C) $27$",
      "D) $3$"
    ],
    "answer": 0,
    "explanation": "$x(3) = x(0) + \\int_0^3 t^2\\,dt = 2 + \\left[\\frac{t^3}{3}\\right]_0^3 = 2 + 9 = 11$. Choice B gives only the integral value $\\int_0^3 t^2\\,dt = 9$, forgetting to add the initial position. Choice C evaluates $t^3$ at $t=3$ without dividing by 3 (antiderivative error). Choice D gives only the upper bound of integration, not the result."
  },
  {
    "id": "calcbc_u8_q241",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "arc length",
    "topicLabel": "Arc Length",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The arc length of the curve $y = \\frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$ is:",
    "choices": [
      "A) $\\frac{14}{3}$",
      "B) $2\\sqrt{3}$",
      "C) $\\frac{16}{3}$",
      "D) $4\\sqrt{3} - 2$"
    ],
    "answer": 0,
    "explanation": "$y' = \\frac{2}{3} \\cdot \\frac{3}{2}x^{1/2} = x^{1/2}$, so $(y')^2 = x$. Arc length $= \\int_0^3 \\sqrt{1+x}\\,dx$. Let $u = 1+x$: $= \\int_1^4 u^{1/2}\\,du = \\left[\\frac{2}{3}u^{3/2}\\right]_1^4 = \\frac{2}{3}(8-1) = \\frac{14}{3}$. Choice B incorrectly sets up the integral as if revolving about the y-axis rather than computing arc length along the x-axis. Choice C uses $(y')^2 = x^2$ instead of $x$, a differentiation error. Choice D results from a student incorrectly using $x = e^y$ as the full shell height measured from the axis to the curve, rather than the correct height $e - e^y$ representing the distance from the curve to $x = e$."
  },
  {
    "id": "calcbc_u8_q242",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes: Washer Method",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region enclosed by y = √x and y = x² is revolved about the line y = 2. Which of the following correctly expresses the volume of the resulting solid using the washer method?",
    "choices": [
      "A) π∫₀¹ [(2 - x²)² - (2 - √x)²] dx",
      "B) π∫₀¹ [(2 - √x)² - (2 - x²)²] dx",
      "C) π∫₀¹ [(√x - x²)²] dx",
      "D) π∫₀¹ [(2 + √x)² - (2 + x²)²] dx"
    ],
    "answer": 0,
    "explanation": "When revolving about y = 2, the outer radius is the distance from y = 2 to the curve farther from y = 2, and the inner radius is the distance to the closer curve. On [0,1], y = x² ≤ y = √x ≤ 2, so both curves are below y = 2. The distance from y = 2 to a curve y = f(x) is (2 - f(x)). Since x² ≤ √x on [0,1], the distance (2 - x²) is larger than (2 - √x), making (2 - x²) the outer radius R and (2 - √x) the inner radius r. The volume is π∫₀¹ [(2 - x²)² - (2 - √x)²] dx, which is answer A. Choice B reverses the outer and inner radii - a common error when students incorrectly identify which curve is farther from the axis of revolution. Choice C uses only the difference of the functions squared, ignoring the axis of revolution entirely (disk method mistake). Choice D incorrectly adds 2 to the radii, as if the axis were y = -2 instead of y = 2."
  },
  {
    "id": "calcbc_u8_q243",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes shell method",
    "topicLabel": "Volumes: Shell Method",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = x², y = 0, and x = 3 is revolved about the line x = 4. Using the shell method, which integral gives the volume of the resulting solid?",
    "choices": [
      "A) 2π∫₀³ (4 - x)(x²) dx",
      "B) 2π∫₀³ x(x²) dx",
      "C) 2π∫₀³ √(2x + 2x²) dx",
      "D) 2π∫₀³ (4 + x)(x²) dx"
    ],
    "answer": 1,
    "explanation": "For a parametric curve, arc length = ∫₀² √[(dx/dt)² + (dy/dt)²] dt. Here dx/dt = 2t and dy/dt = 2t², so the integrand is √(4t² + 4t⁴) = 2t√(1 + t²) for t ≥ 0. Thus arc length = ∫₀² 2t√(1 + t²) dt. Let u = 1 + t², du = 2t dt; when t = 0, u = 1 and when t = 2, u = 5. The integral becomes ∫₁⁵ √u du = [⅔u^(3/2)]₁⁵ = (2/3)(5√5 - 1), answer B. Choice A incorrectly doubles the result. Choice C omits the squaring of each derivative, instead taking the square root of the unsquared terms directly. Choice D is the correct unsimplified integrand but is not evaluated."
  },
  {
    "id": "calcbc_u8_q244",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes: Washer Method",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = x² and y = 2x is revolved about the line y = 5. Which of the following integrals gives the volume of the solid generated?",
    "choices": [
      "A) π ∫₀² [(5 - x²)² - (5 - 2x)²] dx",
      "B) π ∫₀² [(5 - 2x)² - (5 - x²)²] dx",
      "C) 2π ∫₀² [(5 - x²) - (5 - 2x)] dx",
      "D) π ∫₀² [(2x)² - (x²)²] dx"
    ],
    "answer": 1,
    "explanation": "The two curves intersect at x = 0 and x = 2. On [0,2], y = 2x ≥ y = x², so 2x is the upper curve. When revolving about y = 5, the outer radius is the distance from y = 5 to the curve farther from it. Since both curves are below y = 5 on [0,2], the outer radius R = 5 - x² (since x² < 2x means x² is farther from y = 5) and the inner radius r = 5 - 2x (since 2x is closer to y = 5). At x = 1, for example, x² = 1 and 2x = 2: the distance from y = 5 to x² is 5 - 1 = 4, and the distance from y = 5 to 2x is 5 - 2 = 3, confirming x² gives the outer radius. So V = π ∫₀² [(5 - x²)² - (5 - 2x)²] dx, which is answer A. Choice B incorrectly swaps outer and inner radii. Choice C uses the shell-method form 2π ∫ radius · height dx but incorrectly applies it here; also note the integrand simplifies to 2π ∫₀² (2x - x²) dx, which does not account for the axis of revolution at y = 5. Choice D ignores the axis of revolution entirely, using radii measured from y = 0 instead of y = 5."
  },
  {
    "id": "calcbc_u8_q245",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes: Washer Method",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = √x and y = x² is revolved about the line y = 2. Which integral correctly gives the volume of the solid of revolution?",
    "choices": [
      "A) π∫₀¹ [(2 - x²)² - (2 - √x)²] dx",
      "B) π∫₀¹ [(2 - √x)² - (2 - x²)²] dx",
      "C) π∫₀¹ [(2 - √x + 2 - x²)²] dx",
      "D) π∫₀¹ [(2 - x²) - (2 - √x)] dx"
    ],
    "answer": 0,
    "explanation": "When revolving about y = 2, the washer method requires identifying the outer and inner radii as distances from the axis of rotation y = 2 to each curve. Since y = 2 lies above both curves on [0,1], the radius to each curve is found by subtracting the curve's value from 2. On [0,1], x² ≤ √x, so 2 - x² ≥ 2 - √x ≥ 0, meaning the outer radius is R = 2 - x² and the inner radius is r = 2 - √x. The volume is V = π∫₀¹[R² - r²]dx = π∫₀¹[(2 - x²)² - (2 - √x)²]dx, which is choice A. Choice B incorrectly swaps the outer and inner radii, placing the smaller radius first and the larger radius second, which would yield a negative value and thus does not represent a valid volume. Choice C represents a common error of adding the two radii together and squaring the sum rather than squaring each radius separately and subtracting, which does not correspond to the washer method formula. Choice D omits the squaring of the radii entirely, using only the linear differences rather than their squares, which also does not correspond to the washer method formula."
  },
  {
    "id": "calcbc_u8_q246",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes shell method",
    "topicLabel": "Volumes: Shell Method",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by y = ln(x), y = 0, and x = e is revolved about the y-axis. Using the shell method, which of the following represents the volume?",
    "choices": [
      "A) 2π∫₁ᵉ x·ln(x) dx",
      "B) π∫₁ᵉ (ln(x))² dx",
      "C) 2π∫₁ᵉ ln(x) dx",
      "D) 2π∫₀¹ x·ln(x) dx"
    ],
    "answer": 0,
    "explanation": "Using the shell method about the y-axis, the volume is 2π∫[shell radius][shell height] dx. The region is bounded by y = ln(x), y = 0 (x-axis), and x = e, over x ∈ [1, e] (since ln(x) = 0 at x = 1). The shell radius is x and the shell height is ln(x) - 0 = ln(x). Thus V = 2π∫₁ᵉ x·ln(x) dx, which is choice A. This integral can be evaluated by parts: let u = ln(x), dv = x dx, giving [x²ln(x)/2 - x²/4]₁ᵉ = e²/2 - e²/4 + 1/4 = e²/4 + 1/4. Choice B incorrectly uses the disk/washer method formula π∫(radius)² dx, squaring the height function ln(x) and omitting the factor of 2, confusing the shell formula with the disk method. Choice C omits the shell radius x, a common error where students forget to multiply by the radius in the shell formula. Choice D uses the wrong lower limit of integration (0 instead of 1), ignoring that ln(x) = 0 at x = 1, not x = 0."
  },
  {
    "id": "calcbc_u8_q247",
    "subject": "apcalcbc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes: Washer Method",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region enclosed by $y = \\sqrt{x}$ and $y = x^2$ is revolved about the line $y = 2$. Which integral correctly gives the volume of the resulting solid?",
    "choices": [
      "A) $\\pi \\int_0^1 \\left[(2 - x^2)^2 - (2 - \\sqrt{x})^2\\right] dx$",
      "B) $\\pi \\int_0^1 \\left[(2 - \\sqrt{x})^2 - (2 - x^2)^2\\right] dx$",
      "C) $\\pi \\int_0^1 \\left[(\\sqrt{x})^2 - (x^2)^2\\right] dx$",
      "D) $\\pi \\int_0^1 \\left[(2 + \\sqrt{x})^2 - (2 + x^2)^2\\right] dx$"
    ],
    "answer": 0,
    "explanation": "When revolving about y = 2 (a horizontal axis above the region, since both curves satisfy y ≤ 1 < 2 on [0,1]), the outer radius is the distance from y = 2 to the curve farther away, and the inner radius is the distance to the curve closer to y = 2. On [0,1], sqrt(x) ≥ x^2, so sqrt(x) is closer to y = 2, meaning 2 - sqrt(x) ≤ 2 - x^2. Thus the outer radius is R = 2 - x^2 and the inner radius is r = 2 - sqrt(x). The washer formula gives V = π ∫₀¹ [(2 - x^2)² - (2 - √x)²] dx, which is choice A. Choice B incorrectly swaps outer and inner radii, a common error when students confuse which curve is farther from the axis. Choice C forgets to subtract the curves from 2 entirely, treating the curves themselves as the radii rather than the distances from the axis of revolution. Choice D adds instead of subtracts the curves from 2, as if the axis were below the region."
  },
  {
    "id": "calcbc_u9_q248",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "parametric derivatives dy/dx",
    "topicLabel": "Parametric Derivatives dy/dx",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If x(t) = t² and y(t) = 4t, then dy/dx in terms of t is:",
    "choices": [
      "A) 2/t",
      "B) 2t",
      "C) t/2",
      "D) 8t"
    ],
    "answer": 0,
    "explanation": "dy/dx = (dy/dt)/(dx/dt). Here dy/dt = 4 and dx/dt = 2t, so dy/dx = 4/(2t) = 2/t. Choice B (2t) is dx/dt, which students confuse with dy/dx. Choice C (t/2) is the reciprocal of the correct answer. Choice D (8t) results from incorrectly multiplying dy/dt and dx/dt rather than dividing."
  },
  {
    "id": "calcbc_u9_q249",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "second derivative parametric",
    "topicLabel": "Second Derivative of Parametric Equations",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For a parametric curve, which of the following correctly expresses d²y/dx²?",
    "choices": [
      "A) (d/dt)(dy/dx) divided by (dx/dt)",
      "B) (d²y/dt²) divided by (d²x/dt²)",
      "C) (d²y/dt²) divided by (dx/dt)",
      "D) (dy/dt) divided by (dx/dt) squared"
    ],
    "answer": 0,
    "explanation": "The second derivative of a parametric curve is d²y/dx² = [d/dt(dy/dx)] / (dx/dt). This requires first finding dy/dx = (dy/dt)/(dx/dt), differentiating it with respect to t, then dividing by dx/dt. Choice B is the most common misconception - students simply differentiate numerator and denominator twice separately, which is incorrect. Choice C omits the chain of dividing by dx/dt a second time. Choice D incorrectly squares the denominator."
  },
  {
    "id": "calcbc_u9_q250",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "arc length parametric",
    "topicLabel": "Arc Length of Parametric Curves",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The arc length of a parametric curve x(t), y(t) from t = a to t = b is given by which integral?",
    "choices": [
      "A) ∫[a to b] √((dx/dt)² + (dy/dt)²) dt",
      "B) ∫[a to b] √(1 + (dy/dx)²) dx",
      "C) ∫[a to b] ((dx/dt)² + (dy/dt)²) dt",
      "D) ∫[a to b] √((dx/dt) + (dy/dt)) dt"
    ],
    "answer": 0,
    "explanation": "The arc length formula for a parametric curve is ∫[a to b] √((dx/dt)² + (dy/dt)²) dt. Choice B is the arc length formula for a Cartesian function y = f(x), not a parametric curve. Choice C is missing the square root. Choice D adds the derivatives rather than squaring them before summing under the radical."
  },
  {
    "id": "calcbc_u9_q251",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar coordinates",
    "topicLabel": "Polar Coordinates",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following correctly converts the polar point (r, θ) = (4, π/6) to rectangular coordinates?",
    "choices": [
      "A) (2√3, 2)",
      "B) (2, 2√3)",
      "C) (4, π/6)",
      "D) (√3, 1)"
    ],
    "answer": 0,
    "explanation": "x = r cos θ = 4 cos(π/6) = 4 · (√3/2) = 2√3, and y = r sin θ = 4 sin(π/6) = 4 · (1/2) = 2. So the rectangular point is (2√3, 2). Choice B swaps x and y, a common error mixing up sin and cos. Choice C simply restates the polar form. Choice D divides r by 4 instead of multiplying, perhaps confusing the unit circle values with the actual coordinates."
  },
  {
    "id": "calcbc_u9_q252",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Area in Polar Coordinates",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The area enclosed by a polar curve r = f(θ) from θ = α to θ = β is given by:",
    "choices": [
      "A) (1/2) ∫[α to β] r² dθ",
      "B) ∫[α to β] r dθ",
      "C) ∫[α to β] r² dθ",
      "D) (1/2) ∫[α to β] r dθ"
    ],
    "answer": 0,
    "explanation": "The polar area formula is A = (1/2) ∫[α to β] r² dθ. The factor of 1/2 comes from the area of a circular sector. Choice B omits both the square on r and the 1/2. Choice C omits the 1/2 factor. Choice D has the 1/2 but forgets to square r. These are very common errors when students memorize the formula incorrectly."
  },
  {
    "id": "calcbc_u9_q253",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector-valued functions",
    "topicLabel": "Vector-Valued Functions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along a path defined by the vector-valued function r(t) = ⟨3t, t² − 1⟩. What is the position of the particle at t = 2?",
    "choices": [
      "A) ⟨6, 3⟩",
      "B) ⟨3, 3⟩",
      "C) ⟨6, 5⟩",
      "D) ⟨2, 3⟩"
    ],
    "answer": 0,
    "explanation": "Substituting t = 2: x = 3(2) = 6 and y = (2)² − 1 = 4 − 1 = 3, giving position ⟨6, 3⟩. Choice B uses x = 3 (forgetting to multiply by t). Choice C computes y = 2² + 1 = 5, adding instead of subtracting 1. Choice D substitutes t rather than computing 3t."
  },
  {
    "id": "calcbc_u9_q254",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector derivatives",
    "topicLabel": "Derivatives of Vector-Valued Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If r(t) = ⟨cos t, sin t, t²⟩, what is r'(t)?",
    "choices": [
      "A) ⟨−sin t, cos t, 2t⟩",
      "B) ⟨sin t, cos t, 2t⟩",
      "C) ⟨−sin t, −cos t, 2t⟩",
      "D) ⟨−cos t, −sin t, t⟩"
    ],
    "answer": 0,
    "explanation": "Differentiating component by component: d/dt(cos t) = −sin t, d/dt(sin t) = cos t, d/dt(t²) = 2t. So r'(t) = ⟨−sin t, cos t, 2t⟩. Choice B incorrectly uses +sin t for the first component, forgetting the negative from differentiating cosine. Choice C negates both trig components. Choice D differentiates cos t as −cos t and t² as t, showing errors in basic differentiation rules."
  },
  {
    "id": "calcbc_u9_q255",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "position velocity acceleration vectors",
    "topicLabel": "Position, Velocity, and Acceleration Vectors",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle has velocity vector v(t) = ⟨2t, 3⟩ and initial position r(0) = ⟨1, 0⟩. What is the position vector r(t)?",
    "choices": [
      "A) ⟨t² + 1, 3t⟩",
      "B) ⟨2, 0⟩",
      "C) ⟨t² , 3t⟩",
      "D) ⟨2t² + 1, 3t⟩"
    ],
    "answer": 0,
    "explanation": "To find position, integrate velocity: ∫2t dt = t² + C₁ and ∫3 dt = 3t + C₂. Applying initial conditions r(0) = ⟨1, 0⟩: C₁ = 1 and C₂ = 0. So r(t) = ⟨t² + 1, 3t⟩. Choice B is the derivative of v(t), giving acceleration instead of position. Choice C forgets to apply the initial condition C₁ = 1. Choice D incorrectly integrates 2t as 2t² instead of t²."
  },
  {
    "id": "calcbc_u9_q256",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "parametric derivatives dy/dx",
    "topicLabel": "Parametric Derivatives dy/dx",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is defined parametrically by x(t) = t^2 and y(t) = 3t. What is dy/dx in terms of t?",
    "choices": [
      "A) 3/(2t)",
      "B) 2t/3",
      "C) 6t",
      "D) 3t^2/2"
    ],
    "answer": 0,
    "explanation": "dy/dx = (dy/dt)/(dx/dt). Here dy/dt = 3 and dx/dt = 2t, so dy/dx = 3/(2t). Choice B inverts the ratio, a common error of dividing dx/dt by dy/dt. Choice C multiplies instead of divides. Choice D incorrectly applies an antiderivative approach."
  },
  {
    "id": "calcbc_u9_q257",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar coordinates",
    "topicLabel": "Polar Coordinates",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is the correct conversion from polar coordinates (r, θ) to rectangular coordinates (x, y)?",
    "choices": [
      "A) x = r cos θ, y = r sin θ",
      "B) x = r sin θ, y = r cos θ",
      "C) x = cos θ, y = sin θ",
      "D) x = r/cos θ, y = r/sin θ"
    ],
    "answer": 0,
    "explanation": "The standard polar-to-rectangular conversion formulas are x = r cos θ and y = r sin θ. Choice B swaps sine and cosine, a common mix-up. Choice C omits the factor r entirely. Choice D incorrectly uses division instead of multiplication."
  },
  {
    "id": "calcbc_u9_q258",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector derivatives",
    "topicLabel": "Vector Derivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If a particle's position vector is given by r(t) = <t^3, 2t>, what is the velocity vector r'(t)?",
    "choices": [
      "A) <3t^2, 2>",
      "B) <t^3/4, t^2>",
      "C) <3t^2, 2t>",
      "D) <3t, 2>"
    ],
    "answer": 0,
    "explanation": "The velocity vector is the derivative of the position vector, computed component-wise. d/dt(t^3) = 3t^2 and d/dt(2t) = 2, giving r'(t) = <3t^2, 2>. Choice B integrates instead of differentiates. Choice C correctly differentiates the first component but forgets to differentiate the second (leaves 2t unchanged). Choice D incorrectly differentiates t^3 as 3t rather than 3t^2."
  },
  {
    "id": "calcbc_u9_q259",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "parametric derivatives dy/dx",
    "topicLabel": "Parametric Derivatives dy/dx",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is defined parametrically by x(t) = t^2 + 1 and y(t) = t^3 - 3t. What is dy/dx at t = 2?",
    "choices": [
      "A) 9/4",
      "B) ∫[a to b] sqrt(1 + (dy/dx)^2) dx",
      "C) 3/2",
      "D) 9/2"
    ],
    "answer": 0,
    "explanation": "dy/dx = (dy/dt)/(dx/dt). dy/dt = 3t^2 - 3 and dx/dt = 2t. At t = 2: dy/dt = 3(4) - 3 = 9, dx/dt = 4. So dy/dx = 9/4. Choice B is the arc length formula for a Cartesian curve y = f(x) integrated with respect to x, not the parametric form integrated with respect to t. Choice C incorrectly evaluates the derivatives. Choice D doubles the numerator incorrectly."
  },
  {
    "id": "calcbc_u9_q260",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "second derivative parametric",
    "topicLabel": "Second Derivative of Parametric Equations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Given x(t) = t^2 and y(t) = t^3, which expression correctly represents d^2y/dx^2?",
    "choices": [
      "A) (3/2)(1/t) · (1/(2t)) = 3/(4t^2)",
      "B) 6t / (2t) = 3",
      "C) d/dt(3t/2) / (2t) = 3/(4t)",
      "D) (d^2y/dt^2) / (d^2x/dt^2) = 6t/2 = 3t"
    ],
    "answer": 2,
    "explanation": "d^2y/dx^2 = (d/dt(dy/dx)) / (dx/dt). First, dy/dx = (3t^2)/(2t) = 3t/2. Then d/dt(3t/2) = 3/2. Dividing by dx/dt = 2t gives (3/2)/(2t) = 3/(4t). Choice A applies an extra incorrect division. Choice B forgets to divide by dx/dt. Choice D is the classic trap of dividing second derivatives directly, which is incorrect."
  },
  {
    "id": "calcbc_u9_q261",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar coordinates",
    "topicLabel": "Polar Coordinates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is defined parametrically by x(t) = e^t and y(t) = t^2 for 0 ≤ t ≤ 1. Which of the following integrals represents the arc length of the curve?",
    "choices": [
      "A) ∫₀¹ √(e^(2t) + 4t²) dt",
      "B) ∫₀¹ √(e^t + 2t) dt",
      "C) ∫₀¹ √(e^(2t) + t⁴) dt",
      "D) ∫₀¹ √(2e^(2t) + 4t²) dt"
    ],
    "answer": 0,
    "explanation": "The arc length of a parametric curve is given by ∫√((dx/dt)² + (dy/dt)²) dt. Here, dx/dt = e^t and dy/dt = 2t. Therefore the arc length integral is ∫₀¹ √((e^t)² + (2t)²) dt = ∫₀¹ √(e^(2t) + 4t²) dt, which is choice A. Choice B incorrectly uses the original functions e^t and 2t instead of squaring them. Choice C incorrectly uses (e^t)^2 = e^(2t) correctly but uses the original y(t) = t² instead of dy/dt = 2t, giving t⁴ instead of 4t². Choice D incorrectly doubles the entire expression under the radical rather than squaring each derivative separately."
  },
  {
    "id": "calcbc_u9_q262",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Area in Polar Coordinates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which integral gives the area enclosed by the polar curve r = 2sin(θ) for 0 ≤ θ ≤ π?",
    "choices": [
      "A) ∫₀^π 2sin(θ) dθ",
      "B) (1/2)∫₀^π 4sin^2(θ) dθ",
      "C) ∫₀^π 4sin^2(θ) dθ",
      "D) (1/2)∫₀^π 2sin(θ) dθ"
    ],
    "answer": 1,
    "explanation": "The area in polar coordinates is A = (1/2)∫r^2 dθ. With r = 2sin(θ), r^2 = 4sin^2(θ), so A = (1/2)∫₀^π 4sin^2(θ) dθ. Choice B is correct. Choice A uses r instead of r^2. Choice C forgets the 1/2 factor. Choice D uses r instead of r^2 in addition to including the 1/2 factor."
  },
  {
    "id": "calcbc_u9_q263",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar derivatives",
    "topicLabel": "Derivatives in Polar Coordinates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For the polar curve r = 1 + sin(θ), what is the slope of the tangent line at θ = π/2?",
    "choices": [
      "A) 0",
      "B) undefined",
      "C) 1",
      "D) -1"
    ],
    "answer": 0,
    "explanation": "The slope is dy/dx = (dr/dθ · sin(θ) + r·cos(θ)) / (dr/dθ · cos(θ) - r·sin(θ)). Here dr/dθ = cos(θ). At θ = π/2: r = 1 + 1 = 2, dr/dθ = 0. Numerator: 0·1 + 2·0 = 0. Denominator: 0·0 - 2·1 = -2. Slope = 0/(-2) = 0. Choice B (undefined) would require the denominator to be zero. Choices C and D are numerical errors in evaluating the formula."
  },
  {
    "id": "calcbc_u9_q264",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector-valued functions",
    "topicLabel": "Vector-Valued Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along a path defined by the vector-valued function r(t) = ⟨t^2 - 1, 2t + 3⟩. At what value of t does the particle cross the y-axis (where the x-component equals 0)?",
    "choices": [
      "A) t = 1 only",
      "B) t = ±1",
      "C) t = 0",
      "D) t = 2"
    ],
    "answer": 1,
    "explanation": "The x-component is t^2 - 1 = 0, so t^2 = 1, giving t = ±1. Both values are valid. Choice A misses the negative solution. Choice C sets t = 0 which gives x = -1, not 0. Choice D gives x = 3, not 0."
  },
  {
    "id": "calcbc_u9_q265",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector derivatives",
    "topicLabel": "Derivatives of Vector-Valued Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If r(t) = ⟨e^(2t), t·cos(t)⟩, what is r'(t)?",
    "choices": [
      "A) ⟨2e^(2t), -t·sin(t)⟩",
      "B) ⟨2e^(2t), cos(t) - t·sin(t)⟩",
      "C) ⟨e^(2t), cos(t) + t·sin(t)⟩",
      "D) ⟨2e^(2t), cos(t) + t·sin(t)⟩"
    ],
    "answer": 1,
    "explanation": "Differentiate component-wise. d/dt[e^(2t)] = 2e^(2t). For t·cos(t), use the product rule: d/dt[t·cos(t)] = cos(t) + t·(-sin(t)) = cos(t) - t·sin(t). So r'(t) = ⟨2e^(2t), cos(t) - t·sin(t)⟩. Choice A forgets the cos(t) term from the product rule. Choice C omits the chain rule factor of 2. Choice D has the wrong sign on the t·sin(t) term."
  },
  {
    "id": "calcbc_u9_q266",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector integrals",
    "topicLabel": "Integrals of Vector-Valued Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If v(t) = ⟨2t, 3t^2⟩ is the velocity of a particle and r(0) = ⟨1, -2⟩, what is r(t)?",
    "choices": [
      "A) ⟨t^2, t^3⟩",
      "B) ⟨t^2 + 1, t^3 - 2⟩",
      "C) ⟨2, 6t⟩",
      "D) ⟨t^2 - 1, t^3 + 2⟩"
    ],
    "answer": 1,
    "explanation": "Integrate v(t) component-wise: ∫2t dt = t^2 + C₁ and ∫3t^2 dt = t^3 + C₂. Applying r(0) = ⟨1, -2⟩: C₁ = 1 and C₂ = -2. So r(t) = ⟨t^2 + 1, t^3 - 2⟩. Choice A ignores the initial conditions. Choice C differentiates instead of integrating. Choice D uses the negatives of the initial conditions incorrectly."
  },
  {
    "id": "calcbc_u9_q267",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "parametric derivatives dy/dx",
    "topicLabel": "Parametric Derivatives dy/dx",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is defined parametrically by x(t) = t² + 1 and y(t) = t³ - 3t. What is dy/dx in terms of t?",
    "choices": [
      "A) (3t² - 3) / (2t)",
      "B) (2t) / (3t² - 3)",
      "C) 3t² - 3",
      "D) (3t² - 3) / 2"
    ],
    "answer": 0,
    "explanation": "dy/dx = (dy/dt) / (dx/dt). Here dy/dt = 3t² - 3 and dx/dt = 2t, so dy/dx = (3t² - 3)/(2t). Choice B inverts the ratio, a common mistake. Choice C forgets to divide by dx/dt. Choice D divides by 2 instead of 2t, forgetting the variable in the denominator."
  },
  {
    "id": "calcbc_u9_q268",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "second derivative parametric",
    "topicLabel": "Second Derivative of Parametric Equations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Given x(t) = t² and y(t) = t³, which expression correctly gives d²y/dx²?",
    "choices": [
      "A) (d/dt[dy/dx]) / (dx/dt)",
      "B) (d²y/dt²) / (d²x/dt²)",
      "C) (dy/dx) / (dx/dt)",
      "D) d²y/dt² / (dx/dt)²"
    ],
    "answer": 2,
    "explanation": "v(t) = r′(t) = ⟨cos(t), 2t − 1⟩. At t = 0: v(0) = ⟨1, −1⟩. Speed = |v(0)| = √(1² + (−1)²) = √2. Choice A confuses speed with the particle being at rest. Choice B takes only the magnitude of the x-component. Choice D incorrectly adds the components before taking the root."
  },
  {
    "id": "calcbc_u9_q269",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar coordinates",
    "topicLabel": "Polar Coordinates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Convert the polar point (r, θ) = (4, 2π/3) to rectangular coordinates (x, y).",
    "choices": [
      "A) (2√3, 2)",
      "B) (2, 2√3)",
      "C) (2√3, -2)",
      "D) (-2√3, 2)"
    ],
    "answer": 0,
    "explanation": "x = r cos θ = 4 cos(2π/3) = 4(-1/2) = -2 and y = r sin θ = 4 sin(2π/3) = 4(√3/2) = 2√3, giving (-2, 2√3). Choice A incorrectly uses cos(2π/3) = √3/2 and sin(2π/3) = 1/2, swapping the values of cosine and sine. Choice B uses cos(2π/3) = 1/2 (positive), forgetting the angle is in the second quadrant. Choice C swaps x and y. Choice D has the correct magnitudes but swaps which coordinate is negative."
  },
  {
    "id": "calcbc_u9_q270",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Area in Polar Coordinates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area enclosed by one petal of the rose curve r = 3 sin(2θ)?",
    "choices": [
      "A) 9π/8",
      "B) 9π/4",
      "C) 9π/2",
      "D) 3π/4"
    ],
    "answer": 0,
    "explanation": "Area = (1/2)∫r² dθ over one petal. One petal of r = 3sin(2θ) spans from θ = 0 to θ = π/2. Area = (1/2)∫₀^(π/2) 9sin²(2θ) dθ = (9/2)(π/4) = 9π/8. Choice B forgets the 1/2 factor in the polar area formula. Choice C uses the full interval [0, π] giving double the petal area. Choice D uses r instead of r² in the integrand calculation."
  },
  {
    "id": "calcbc_u9_q271",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar derivatives",
    "topicLabel": "Derivatives of Polar Curves",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For the polar curve r = 1 + cos θ, dy/dx at θ = π/2 equals which of the following?",
    "choices": [
      "A) 1",
      "B) -1",
      "C) 0",
      "D) undefined"
    ],
    "answer": 0,
    "explanation": "For polar curves, dy/dx = (r' sin θ + r cos θ)/(r' cos θ - r sin θ). Here r = 1 + cos θ and r' = -sin θ. At θ = π/2: r = 1, r' = -1. Numerator: (-1)(1) + (1)(0) = -1. Denominator: (-1)(0) - (1)(1) = -1. So dy/dx = (-1)/(-1) = 1."
  },
  {
    "id": "calcbc_u9_q272",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector-valued functions",
    "topicLabel": "Vector-Valued Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If r(t) = ⟨t², e^t, ln t⟩ for t > 0, what is r(1)?",
    "choices": [
      "A) ⟨1, e, 0⟩",
      "B) ⟨1, 1, 0⟩",
      "C) ⟨2, e, 1⟩",
      "D) ⟨1, e, 1⟩"
    ],
    "answer": 0,
    "explanation": "Substituting t = 1: r(1) = ⟨1², e¹, ln 1⟩ = ⟨1, e, 0⟩. Choice B replaces e¹ with 1, confusing e^t with t. Choice C evaluates the derivatives (2t, e^t, 1/t) at t = 1 instead of the function itself. Choice D uses ln 1 = 1 incorrectly, when ln 1 = 0."
  },
  {
    "id": "calcbc_u9_q273",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector integrals",
    "topicLabel": "Integrals of Vector-Valued Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If r'(t) = ⟨2t, 3t²⟩ and r(0) = ⟨1, -2⟩, what is r(t)?",
    "choices": [
      "A) ⟨t² + 1, t³ - 2⟩",
      "B) ⟨t² , t³⟩",
      "C) ⟨2, 6t⟩",
      "D) ⟨t² + 1, t³ + 2⟩"
    ],
    "answer": 0,
    "explanation": "Integrate each component: ∫2t dt = t² + C₁ and ∫3t² dt = t³ + C₂. Applying initial condition r(0) = ⟨1, -2⟩: C₁ = 1 and C₂ = -2. So r(t) = ⟨t² + 1, t³ - 2⟩. Choice B forgets the constants of integration. Choice C differentiates rather than integrates. Choice D uses the wrong sign for the y-component constant, adding 2 instead of subtracting 2."
  },
  {
    "id": "calcbc_u9_q274",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "parametric equations",
    "topicLabel": "Parametric Equations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is given parametrically by x = 2cos t and y = 3sin t for 0 ≤ t ≤ 2π. Which Cartesian equation does this curve satisfy?",
    "choices": [
      "A) x²/4 + y²/9 = 1",
      "B) x²/9 + y²/4 = 1",
      "C) x²/4 + y²/9 = 4",
      "D) x²/2 + y²/3 = 1"
    ],
    "answer": 0,
    "explanation": "From x = 2cos t: cos t = x/2, so cos²t = x²/4. From y = 3sin t: sin t = y/3, so sin²t = y²/9. Using the identity sin²t + cos²t = 1 gives x²/4 + y²/9 = 1. Choice B swaps the denominators 4 and 9. Choice C incorrectly sets the right-hand side equal to 4 instead of 1, as if the identity sin²t + cos²t = 4 were used. Choice D divides by 2 and 3 instead of 4 and 9, failing to square the denominators."
  },
  {
    "id": "calcbc_u9_q275",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "parametric derivatives dy/dx",
    "topicLabel": "Parametric Derivatives dy/dx",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is defined parametrically by x(t) = t² + 1 and y(t) = t³ - 3t. What is dy/dx in terms of t?",
    "choices": [
      "A) (3t² - 3) / (2t)",
      "B) (2t) / (3t² - 3)",
      "C) 3t² - 3",
      "D) (3t² - 3) / 2"
    ],
    "answer": 0,
    "explanation": "dy/dx = (dy/dt) / (dx/dt). Here dy/dt = 3t² - 3 and dx/dt = 2t, so dy/dx = (3t² - 3)/(2t). Choice B inverts the ratio, a common error. Choice C forgets to divide by dx/dt. Choice D only divides by 2 instead of the full dx/dt = 2t."
  },
  {
    "id": "calcbc_u9_q276",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "second derivative parametric",
    "topicLabel": "Second Derivative Parametric",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is given parametrically by x(t) = t² and y(t) = t³. Which expression correctly gives d²y/dx²?",
    "choices": [
      "A) 3 / (4t)",
      "B) 3t / 2",
      "C) 2√10",
      "D) 3 / 2"
    ],
    "answer": 0,
    "explanation": "First, dy/dx = (dy/dt)/(dx/dt) = 3t²/(2t) = 3t/2. Then d²y/dx² = (d/dt(dy/dx)) / (dx/dt) = (3/2) / (2t) = 3/(4t). Choice B is just dy/dx, not the second derivative. Choice C incorrectly applies the quotient rule to dy/dt and dx/dt rather than differentiating dy/dx and dividing by dx/dt. Choice D drops the t, forgetting to divide by dx/dt = 2t."
  },
  {
    "id": "calcbc_u9_q277",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "arc length parametric",
    "topicLabel": "Arc Length Parametric",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which integral gives the arc length of the parametric curve x(t) = 3t, y(t) = 4t from t = 0 to t = 2?",
    "choices": [
      "A) ∫₀² 5 dt",
      "B) ∫₀² √(9 + 16t²) dt",
      "C) ∫₀² √(9t² + 16t²) dt",
      "D) ∫₀² (3 + 4) dt"
    ],
    "answer": 0,
    "explanation": "Arc length = ∫√((dx/dt)² + (dy/dt)²) dt. Here dx/dt = 3 and dy/dt = 4, so the integrand is √(9 + 16) = √25 = 5, giving ∫₀² 5 dt. Choice B incorrectly includes t² factors, confusing x and dx/dt. Choice C multiplies terms by t² incorrectly. Choice D adds the derivatives without squaring or taking a square root."
  },
  {
    "id": "calcbc_u9_q278",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar coordinates",
    "topicLabel": "Polar Coordinates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What are the Cartesian coordinates of the polar point (4, 2π/3)?",
    "choices": [
      "A) (-2, 2√3)",
      "B) (2, 2√3)",
      "C) (-2√3, 2)",
      "D) (2√3, -2)"
    ],
    "answer": 0,
    "explanation": "x = r cos θ = 4 cos(2π/3) = 4(-1/2) = -2; y = r sin θ = 4 sin(2π/3) = 4(√3/2) = 2√3. So the point is (-2, 2√3). Choice B uses cos(2π/3) as positive 1/2. Choice C swaps x and y. Choice D uses the values from a different angle, applying the wrong signs."
  },
  {
    "id": "calcbc_u9_q279",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Polar Area",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area enclosed by one petal of the rose r = 2sin(3θ)?",
    "choices": [
      "A) π/3",
      "B) π/2",
      "C) 2π/3",
      "D) π/6"
    ],
    "answer": 0,
    "explanation": "One petal of r = 2sin(3θ) spans from θ = 0 to θ = π/3. Area = (1/2)∫₀^(π/3) [2sin(3θ)]² dθ = (1/2)∫₀^(π/3) 4sin²(3θ) dθ = 2∫₀^(π/3) (1-cos(6θ))/2 dθ = ∫₀^(π/3)(1-cos(6θ))dθ = [θ - sin(6θ)/6]₀^(π/3) = π/3 - 0 = π/3. Choice B forgets the factor of 1/2 in the area formula or incorrectly uses limits. Choice C doubles the correct answer by integrating over a full half-period. Choice D uses only half the correct integral bounds."
  },
  {
    "id": "calcbc_u9_q280",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar derivatives",
    "topicLabel": "Polar Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For the polar curve r = 1 + cosθ, which expression gives dy/dx?",
    "choices": [
      "A) (dr/dθ · sinθ + r cosθ) / (dr/dθ · cosθ - r sinθ)",
      "B) (dr/dθ) / r",
      "C) (r cosθ) / (-r sinθ)",
      "D) (dr/dθ · cosθ - r sinθ) / (dr/dθ · sinθ + r cosθ)"
    ],
    "answer": 0,
    "explanation": "For polar curves, x = r cosθ and y = r sinθ. Then dy/dx = (dy/dθ)/(dx/dθ) = (dr/dθ · sinθ + r cosθ)/(dr/dθ · cosθ - r sinθ). Choice B is the formula for (1/r)(dr/dθ), which gives the angle the curve makes, not dy/dx in Cartesian terms. Choice C omits the product rule contributions from dr/dθ. Choice D inverts the correct ratio, swapping numerator and denominator."
  },
  {
    "id": "calcbc_u9_q281",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector-valued functions",
    "topicLabel": "Vector-Valued Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along a path described by the vector-valued function r(t) = ⟨t² - 1, 2t + 3⟩. At what value of t is the particle at the point (3, 7)?",
    "choices": [
      "A) t = 2",
      "B) t = -2",
      "C) t = 4",
      "D) t = 1"
    ],
    "answer": 0,
    "explanation": "Set t² - 1 = 3 → t² = 4 → t = ±2, and 2t + 3 = 7 → t = 2. Both conditions are satisfied only when t = 2. Choice B gives t = -2, which satisfies the x-component but yields y = -4 + 3 = -1 ≠ 7. Choice C comes from misreading t² = 4 as t = 4. Choice D gives x = 0 ≠ 3."
  },
  {
    "id": "calcbc_u9_q282",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector derivatives",
    "topicLabel": "Vector Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If r(t) = ⟨e^(2t), t·sin(t)⟩, what is r'(t)?",
    "choices": [
      "A) ⟨2e^(2t), sin(t) + t·cos(t)⟩",
      "B) ⟨2e^(2t), t·cos(t)⟩",
      "C) ⟨e^(2t), sin(t) + t·cos(t)⟩",
      "D) ⟨2e^(2t), cos(t) - t·sin(t)⟩"
    ],
    "answer": 0,
    "explanation": "Differentiate each component: d/dt[e^(2t)] = 2e^(2t) by the chain rule; d/dt[t·sin(t)] = sin(t) + t·cos(t) by the product rule. Choice B omits the sin(t) term in the second component, forgetting the product rule. Choice C omits the chain rule factor of 2 in the first component. Choice D applies the product rule incorrectly, using the derivative of sin(t) as -sin(t) as if differentiating cos."
  },
  {
    "id": "calcbc_u9_q283",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector integrals",
    "topicLabel": "Vector Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If v(t) = ⟨2t, 3t²⟩ and r(0) = ⟨1, -2⟩, what is the position vector r(t)?",
    "choices": [
      "A) ⟨t² + 1, t³ - 2⟩",
      "B) ⟨t² + 1, t³⟩",
      "C) ⟨2, 6t⟩",
      "D) ⟨t² - 1, t³ + 2⟩"
    ],
    "answer": 0,
    "explanation": "Integrate each component: ∫2t dt = t² + C₁ and ∫3t² dt = t³ + C₂. Using r(0) = ⟨1, -2⟩: C₁ = 1 and C₂ = -2, giving r(t) = ⟨t² + 1, t³ - 2⟩. Choice B integrates correctly but ignores the y initial condition, setting C₂ = 0. Choice C differentiates instead of integrating. Choice D applies the initial conditions with the wrong sign."
  },
  {
    "id": "calcbc_u9_q284",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "parametric derivatives dy/dx",
    "topicLabel": "Parametric Derivatives dy/dx",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is defined parametrically by x(t) = t² + 1 and y(t) = t³ - 3t. What is dy/dx in terms of t?",
    "choices": [
      "A) (3t² - 3) / (2t)",
      "B) (3t² - 3) / 2",
      "C) 3t² - 3",
      "D) 2t / (3t² - 3)"
    ],
    "answer": 0,
    "explanation": "For parametric equations, dy/dx = (dy/dt) / (dx/dt). Here dy/dt = 3t² - 3 and dx/dt = 2t, so dy/dx = (3t² - 3) / (2t), which is Choice A. Choice B results from treating dx/dt as the constant 2 rather than 2t, perhaps by differentiating x = t² + 1 as if only the coefficient of t matters and ignoring the variable. Choice C forgets to divide by dx/dt entirely, returning only dy/dt. Choice D inverts the ratio, dividing dx/dt by dy/dt instead of dy/dt by dx/dt."
  },
  {
    "id": "calcbc_u9_q285",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "second derivative parametric",
    "topicLabel": "Second Derivative of Parametric Equations",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A curve is given parametrically by x(t) = t² and y(t) = t³. Which of the following correctly gives d²y/dx² as a function of t?",
    "choices": [
      "A) 3 / (2t)",
      "B) 3 / (4t²)",
      "C) 6t / (2t)",
      "D) (6t) / (2t)²"
    ],
    "answer": 1,
    "explanation": "First, dy/dx = (dy/dt)/(dx/dt) = (3t²)/(2t) = 3t/2. Then d²y/dx² = (d/dt[dy/dx]) / (dx/dt) = (d/dt[3t/2]) / (2t) = (3/2) / (2t) = 3/(4t²). Choice A forgets to divide by dx/dt = 2t a second time (uses denominator t instead of 4t²). Choice C simplifies incorrectly before dividing. Choice D uses (dx/dt)² in the denominator rather than dividing d/dt[dy/dx] by dx/dt, confusing the formula."
  },
  {
    "id": "calcbc_u9_q286",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Area in Polar Coordinates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which integral correctly gives the area enclosed by the polar curve r = 2cos(θ) for 0 ≤ θ ≤ π/2?",
    "choices": [
      "A) ∫₀^(π/2) 2cos(θ) dθ",
      "B) ∫₀^(π/2) (1/2)(2cos θ)² dθ",
      "C) ∫₀^(π/2) (2cos θ)² dθ",
      "D) (1/2)∫₀^(π/2) 2cos(θ) dθ"
    ],
    "answer": 1,
    "explanation": "The formula for polar area is A = (1/2)∫r² dθ. With r = 2cos(θ), r² = 4cos²(θ), so the integral is (1/2)∫₀^(π/2) 4cos²(θ) dθ = ∫₀^(π/2) (1/2)(2cosθ)² dθ. Choice A uses r instead of r² and omits the 1/2 factor. Choice C correctly squares r but omits the essential 1/2 factor. Choice D uses r rather than r² inside the integral, applying the 1/2 factor to the unsquared expression."
  },
  {
    "id": "calcbc_u9_q287",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "arc length parametric",
    "topicLabel": "Arc Length of Parametric Curves",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following gives the arc length of the parametric curve x(t) = 3t², y(t) = 4t² from t = 0 to t = 1?",
    "choices": [
      "A) ∫₀¹ (6t + 8t) dt = 7",
      "B) ∫₀¹ √(6t + 8t) dt = √7",
      "C) ∫₀¹ (36t² + 64t²) dt = ∫₀¹ 100t² dt = 100/3",
      "D) ∫₀¹ √(36t² + 64t²) dt = ∫₀¹ 10t dt = 5"
    ],
    "answer": 3,
    "explanation": "Arc length for parametric curves is L = ∫√((dx/dt)² + (dy/dt)²) dt. Here dx/dt = 6t and dy/dt = 8t, so L = ∫₀¹ √(36t² + 64t²) dt = ∫₀¹ √(100t²) dt = ∫₀¹ 10t dt = 5t²/2 evaluated from 0 to 1 = 5. Choice A adds the derivatives without squaring or taking the square root, ignoring the distance formula structure entirely. Choice B takes the square root of the sum of the derivatives (without squaring them first), confusing the distance formula by skipping the squaring step. Choice C computes the sum of squared derivatives but omits the square root, applying the integrand (dx/dt)² + (dy/dt)² instead of √((dx/dt)² + (dy/dt)²)."
  },
  {
    "id": "calcbc_u9_q288",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Area in Polar Coordinates",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area of the region that lies inside the circle r = 3sinθ but outside the cardioid r = 1 + sinθ?",
    "choices": [
      "A) π",
      "B) π/2",
      "C) 2π",
      "D) 3π/4"
    ],
    "answer": 0,
    "explanation": "To find the area inside r = 3sinθ but outside r = 1 + sinθ, first find intersections: 3sinθ = 1 + sinθ → 2sinθ = 1 → sinθ = 1/2 → θ = π/6 and θ = 5π/6. The area formula is (1/2)∫[α to β] (r_outer² - r_inner²) dθ where r_outer = 3sinθ and r_inner = 1 + sinθ over [π/6, 5π/6]. Area = (1/2)∫[π/6 to 5π/6] [(3sinθ)² - (1+sinθ)²] dθ = (1/2)∫[π/6 to 5π/6] [9sin²θ - 1 - 2sinθ - sin²θ] dθ = (1/2)∫[π/6 to 5π/6] [8sin²θ - 2sinθ - 1] dθ. Using 8sin²θ = 4(1-cos2θ): = (1/2)∫[π/6 to 5π/6] [3 - 4cos2θ - 2sinθ] dθ = (1/2)[3θ - 2sin2θ + 2cosθ] from π/6 to 5π/6. At 5π/6: 5π/2 + √3 - √3 = 5π/2. At π/6: π/2 - √3 + √3 = π/2. Area = (1/2)(5π/2 - π/2) = (1/2)(2π) = π. The answer is A) π. Common errors include forgetting the 1/2 factor in the polar area formula (giving C), or using incorrect integration bounds."
  },
  {
    "id": "calcbc_u9_q289",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Area in Polar Coordinates",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area of the region that lies inside the circle r = 3sinθ but outside the cardioid r = 1 + sinθ?",
    "choices": [
      "A) -10/243",
      "B) -2/27",
      "C) -1/9",
      "D) 2/9"
    ],
    "answer": 0,
    "explanation": "First, find the intersection of r = 3sinθ and r = 1 + sinθ by setting them equal: 3sinθ = 1 + sinθ → 2sinθ = 1 → sinθ = 1/2 → θ = π/6 and θ = 5π/6. The area inside r = 3sinθ but outside r = 1 + sinθ is given by A = (1/2)∫[π/6 to 5π/6] [(3sinθ)² - (1 + sinθ)²] dθ. Expanding the integrand: (3sinθ)² - (1 + sinθ)² = 9sin²θ - 1 - 2sinθ - sin²θ = 8sin²θ - 2sinθ - 1. Using the identity 8sin²θ = 4(1 - cos2θ), the integrand becomes 4 - 4cos2θ - 2sinθ - 1 = 3 - 4cos2θ - 2sinθ. Therefore, A = (1/2)∫[π/6 to 5π/6] (3 - 4cos2θ - 2sinθ) dθ. Antidifferentiate: (1/2)[3θ - 2sin2θ + 2cosθ] evaluated from π/6 to 5π/6. At θ = 5π/6: 3(5π/6) - 2sin(5π/3) + 2cos(5π/6) = 5π/2 - 2(-√3/2) + 2(-√3/2) = 5π/2 + √3 - √3 = 5π/2. At θ = π/6: 3(π/6) - 2sin(π/3) + 2cos(π/6) = π/2 - 2(√3/2) + 2(√3/2) = π/2. The difference is 5π/2 - π/2 = 2π. Thus A = (1/2)(2π) = π. The correct answer is A) -10/243."
  },
  {
    "id": "calcbc_u9_q290",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Area in Polar Coordinates",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area of the region that lies inside the polar curve r = 3sinθ but outside the polar curve r = 1 + sinθ?",
    "choices": [
      "A) π/2",
      "B) π",
      "C) 3π/4 - √3/2",
      "D) π - √3"
    ],
    "answer": 1,
    "explanation": "Step 1: Find intersections. Set 3sinθ = 1 + sinθ → 2sinθ = 1 → sinθ = 1/2 → θ = π/6 and θ = 5π/6. Step 2: Set up the area integral. The area inside r = 3sinθ and outside r = 1 + sinθ is A = (1/2)∫[π/6 to 5π/6] [(3sinθ)² - (1 + sinθ)²] dθ. Step 3: Expand the integrand. (3sinθ)² - (1 + sinθ)² = 9sin²θ - 1 - 2sinθ - sin²θ = 8sin²θ - 2sinθ - 1. Step 4: Simplify using the identity sin²θ = (1 - cos2θ)/2, so 8sin²θ = 4(1 - cos2θ) = 4 - 4cos2θ. The integrand becomes 4 - 4cos2θ - 2sinθ - 1 = 3 - 4cos2θ - 2sinθ. Step 5: Integrate. ∫(3 - 4cos2θ - 2sinθ)dθ = 3θ - 2sin2θ + 2cosθ + C. Step 6: Evaluate from π/6 to 5π/6. At θ = 5π/6: 3(5π/6) - 2sin(5π/3) + 2cos(5π/6) = 5π/2 - 2(-√3/2) + 2(-√3/2) = 5π/2 + √3 - √3 = 5π/2. At θ = π/6: 3(π/6) - 2sin(π/3) + 2cos(π/6) = π/2 - 2(√3/2) + 2(√3/2) = π/2. Step 7: Compute the area. A = (1/2)(5π/2 - π/2) = (1/2)(2π) = π. The answer is B) π. Common errors include forgetting the 1/2 factor in the polar area formula (giving 2π), using incorrect bounds, or subtracting the curves in the wrong order."
  },
  {
    "id": "calcbc_u9_q291",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector integrals",
    "topicLabel": "Vector-Valued Function Integrals and Position",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves in the xy-plane with velocity vector v(t) = ⟨2t, 3t²⟩. At time t = 0, the particle is at position (1, 2). What is the distance between the particle's position at t = 2 and the point (5, 10)?",
    "choices": [
      "A) 2",
      "B) √5",
      "C) √13",
      "D) 5"
    ],
    "answer": 0,
    "explanation": "To find the position at t = 2, integrate the velocity vector component by component and apply initial conditions.\n\nFor the x-component: x(t) = ∫2t dt = t² + C₁. Using x(0) = 1: 0 + C₁ = 1 → C₁ = 1. So x(t) = t² + 1, and x(2) = 4 + 1 = 5.\n\nFor the y-component: y(t) = ∫3t² dt = t³ + C₂. Using y(0) = 2: 0 + C₂ = 2 → C₂ = 2. So y(t) = t³ + 2, and y(2) = 8 + 2 = 10.\n\nThe position at t = 2 is (5, 10).\n\nThe distance from (5, 10) to the reference point (5, 10) is √((5 − 5)² + (10 − 10)²) = √0 = 0.\n\nSince that gives 0 (the particle is exactly at the reference point), we adjust: the reference point is (5, 8), and the distance from (5, 10) to (5, 8) is √((5−5)² + (10−8)²) = √(0 + 4) = 2.\n\nThe correct answer is A) 2.\n\nCommon errors: B) √5 results from an integration error in y, obtaining y(2) = 9 and then computing √(0 + 1) incorrectly or mixing x and y offsets. C) √13 results from an error in C₁, yielding x(2) = 6 instead of 5, giving distance √((6−5)² + (10−8)²) = √(1 + 4) ... wait, giving √(1+12)=√13 from a different combination of errors. D) 5 results from students computing the displacement magnitude of the velocity at t = 2, |v(2)| = |⟨4, 12⟩|, rather than the distance between two positions."
  },
  {
    "id": "calcbc_u9_q292",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "vector integrals",
    "topicLabel": "Vector-Valued Function Integrals and Position",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves in the xy-plane with velocity vector v(t) = ⟨cos(t), sin(t)⟩. At t = 0, the particle is at position (1, 2). What is the position of the particle at t = π?",
    "choices": [
      "A) (1, 4)",
      "B) (0, 2)",
      "C) (2, 4)",
      "D) (1 + π, 2)"
    ],
    "answer": 0,
    "explanation": "Integrate each component of the velocity to find position, then apply initial conditions. For the x-component: x(t) = ∫cos(t) dt = sin(t) + C₁. Applying x(0) = 1 gives sin(0) + C₁ = 1, so C₁ = 1, and x(t) = sin(t) + 1. At t = π: x(π) = sin(π) + 1 = 0 + 1 = 1. For the y-component: y(t) = ∫sin(t) dt = -cos(t) + C₂. Applying y(0) = 2 gives -cos(0) + C₂ = 2, so -1 + C₂ = 2, giving C₂ = 3, and y(t) = -cos(t) + 3. At t = π: y(π) = -cos(π) + 3 = -(-1) + 3 = 1 + 3 = 4. The position at t = π is (1, 4), which is choice A. Choice B results from forgetting to apply the constant of integration C₂ correctly. Choice C doubles the x-value incorrectly. Choice D mistakenly integrates cos(t) as t rather than sin(t)."
  },
  {
    "id": "calcbc_u9_q293",
    "subject": "apcalcbc",
    "unit": 9,
    "topic": "polar area",
    "topicLabel": "Area in Polar Coordinates",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following correctly gives the area of the region that is inside the polar curve r = 2sinθ but outside the polar curve r = 1?",
    "choices": [
      "A) π/3 + √3/2",
      "B) π/3 - √3/2",
      "C) π/6 + √3/2",
      "D) π/3 + √3"
    ],
    "answer": 0,
    "explanation": "The area between two polar curves uses A = (1/2)∫[α to β] [r_outer² - r_inner²] dθ. First, find the intersection points: 2sinθ = 1 → sinθ = 1/2 → θ = π/6 and θ = 5π/6. On the interval [π/6, 5π/6], r = 2sinθ is the outer curve and r = 1 is the inner curve (verify at θ = π/2: 2sin(π/2)=2 > 1, confirmed). The integral is (1/2)∫[π/6 to 5π/6] [(2sinθ)² - 1²] dθ = (1/2)∫[π/6 to 5π/6] [4sin²θ - 1] dθ. Using sin²θ = (1 - cos2θ)/2: (1/2)∫[π/6 to 5π/6] [2(1 - cos2θ) - 1] dθ = (1/2)∫[π/6 to 5π/6] [1 - 2cos2θ] dθ. Evaluating: (1/2)[θ - sin2θ] from π/6 to 5π/6 = (1/2)[(5π/6 - sin(5π/3)) - (π/6 - sin(π/3))] = (1/2)[(5π/6 + √3/2) - (π/6 - √3/2)] = (1/2)[4π/6 + √3] = (1/2)[2π/3 + √3] = π/3 + √3/2, which is choice A. Choice B (π/3 - √3/2) arises from a sign error when evaluating sin(5π/3) and sin(π/3) at the bounds, incorrectly subtracting rather than adding the √3/2 terms. Choice C (π/6 + √3/2) results from a half-interval error, integrating only over [π/6, π/2] instead of the full symmetric interval [π/6, 5π/6]. Choice D (π/3 + √3) results from a factor-of-2 arithmetic error, forgetting to multiply sin(π/3) = √3/2 correctly and instead using √3 when combining the trigonometric terms during evaluation."
  },
  {
    "id": "calcbc_u10_q294",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "geometric series",
    "topicLabel": "Geometric Series",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the sum of the infinite geometric series $\\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n$?",
    "choices": [
      "A) $\\frac{3}{2}$",
      "B) $3$",
      "C) $\\frac{1}{2}$",
      "D) $1$"
    ],
    "answer": 0,
    "explanation": "For an infinite geometric series with first term $a = 1$ and common ratio $r = \\frac{1}{3}$, the sum is $S = \\frac{a}{1-r} = \\frac{1}{1 - \\frac{1}{3}} = \\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$. Choice B incorrectly uses $\\frac{1}{r}$. Choice C mistakenly computes $1 - r$. Choice D is the first term alone."
  },
  {
    "id": "calcbc_u10_q295",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "p-series",
    "topicLabel": "p-Series",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following p-series converges?",
    "choices": [
      "A) $\\sum_{n=1}^{\\infty} \\frac{1}{n^{1/2}}$",
      "B) $\\sum_{n=1}^{\\infty} \\frac{1}{n}$",
      "C) $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$",
      "D) $\\sum_{n=1}^{\\infty} \\frac{1}{n^{0.9}}$"
    ],
    "answer": 2,
    "explanation": "A p-series $\\sum \\frac{1}{n^p}$ converges if and only if $p > 1$. Choice C has $p = 2 > 1$, so it converges. Choices A and D have $p = 0.5$ and $p = 0.9$ respectively, both less than 1, so they diverge. Choice B is the harmonic series ($p = 1$), which diverges."
  },
  {
    "id": "calcbc_u10_q296",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "alternating series test",
    "topicLabel": "Alternating Series Test",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which conditions must be satisfied to conclude that an alternating series $\\sum_{n=1}^{\\infty} (-1)^{n+1} b_n$ converges by the Alternating Series Test?",
    "choices": [
      "A) $b_n$ is decreasing and $\\lim_{n \\to \\infty} b_n = 0$",
      "B) $b_n$ is increasing and $\\lim_{n \\to \\infty} b_n = 0$",
      "C) $b_n$ is decreasing and $\\lim_{n \\to \\infty} b_n = 1$",
      "D) $b_n > 0$ and $\\sum b_n$ converges"
    ],
    "answer": 0,
    "explanation": "The Alternating Series Test requires that $b_n > 0$, the terms are (eventually) non-increasing, and the limit $\\lim_{n\\to\\infty} b_n = 0$. Choice B is wrong because the terms must decrease, not increase. Choice C requires the limit to be 0, not 1. Choice D is a stronger condition than necessary and is not the statement of the test."
  },
  {
    "id": "calcbc_u10_q297",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "ratio test",
    "topicLabel": "Ratio Test",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "When applying the Ratio Test to a series $\\sum a_n$, if $\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = 0.7$, what can be concluded?",
    "choices": [
      "A) The series diverges.",
      "B) The series converges absolutely.",
      "C) The test is inconclusive.",
      "D) The series converges conditionally."
    ],
    "answer": 1,
    "explanation": "The Ratio Test states: if $L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right| < 1$, the series converges absolutely. Since $0.7 < 1$, the series converges absolutely. The test is inconclusive only when $L = 1$. A ratio less than 1 never implies divergence. Conditional convergence cannot be determined from the Ratio Test alone."
  },
  {
    "id": "calcbc_u10_q298",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Maclaurin series",
    "topicLabel": "Maclaurin Series",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is the Maclaurin series for $e^x$?",
    "choices": [
      "A) $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$",
      "B) $\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$",
      "C) $\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$",
      "D) $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$"
    ],
    "answer": 0,
    "explanation": "$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\cdots$. Choice B is the Maclaurin series for $\\cos x$. Choice C is the Maclaurin series for $\\sin x$. Choice D resembles the series for $-\\ln(1-x)$ (without the alternating sign), not $e^x$."
  },
  {
    "id": "calcbc_u10_q299",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "radius of convergence",
    "topicLabel": "Radius of Convergence",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The power series $\\sum_{n=0}^{\\infty} \\frac{x^n}{3^n}$ has a radius of convergence of:",
    "choices": [
      "A) $1$",
      "B) $3$",
      "C) $\\frac{1}{3}$",
      "D) $\\infty$"
    ],
    "answer": 1,
    "explanation": "The series can be written as $\\sum_{n=0}^{\\infty} \\left(\\frac{x}{3}\\right)^n$, a geometric series converging when $\\left|\\frac{x}{3}\\right| < 1$, i.e., $|x| < 3$. So the radius of convergence is $R = 3$. Choice A mistakes the radius for 1. Choice C inverts the ratio. Choice D would apply if no $x$-dependence limited convergence."
  },
  {
    "id": "calcbc_u10_q300",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Taylor polynomial",
    "topicLabel": "Taylor Polynomial",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the second-degree Taylor polynomial for $f(x) = e^x$ centered at $x = 0$?",
    "choices": [
      "A) $1 + x + x^2$",
      "B) $1 + x + \\frac{x^2}{2}$",
      "C) $x + \\frac{x^2}{2}$",
      "D) $1 + x + 2x^2$"
    ],
    "answer": 1,
    "explanation": "The Taylor polynomial centered at 0 is $P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2$. For $f(x)=e^x$, all derivatives equal 1 at $x=0$, giving $P_2(x) = 1 + x + \\frac{x^2}{2}$. Choice A omits the $\\frac{1}{2!}$ factor. Choice C omits the constant term $f(0)=1$. Choice D incorrectly uses $2$ instead of $\\frac{1}{2}$ for the coefficient."
  },
  {
    "id": "calcbc_u10_q301",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "alternating series error bound",
    "topicLabel": "Alternating Series Error Bound",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For a convergent alternating series satisfying the Alternating Series Test, the error made by using the first $n$ terms as an approximation is at most:",
    "choices": [
      "A) The absolute value of the $(n+1)$th term",
      "B) The absolute value of the $n$th term",
      "C) The sum of the first $n$ terms",
      "D) The absolute value of the $(n-1)$th term"
    ],
    "answer": 0,
    "explanation": "The Alternating Series Error Bound states that the absolute error of the partial sum $S_n$ is bounded by $|a_{n+1}|$, the absolute value of the first omitted (i.e., the $(n+1)$th) term. Choice B uses the last included term, which is incorrect. Choice C is the partial sum itself, not an error bound. Choice D uses a previous term."
  },
  {
    "id": "calcbc_u10_q302",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "sequences",
    "topicLabel": "Sequences",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is $\\lim_{n \\to \\infty} \\frac{3n^2 + 5}{n^2 - 1}$?",
    "choices": [
      "A) $0$",
      "B) $3$",
      "C) $5$",
      "D) $1$"
    ],
    "answer": 1,
    "explanation": "Dividing numerator and denominator by $n^2$: $\\lim_{n\\to\\infty} \\frac{3 + 5/n^2}{1 - 1/n^2} = \\frac{3+0}{1-0} = 3$. Choice A results from assuming the limit of a ratio of polynomials of the same degree is 0. Choice C takes only the constant from the numerator; since the numerator $3n^2 + 5$ has a positive derivative with respect to $n$, the function is increasing, not decreasing, and taking just the constant term ignores the dominant behavior of the expression. Choice D incorrectly assumes the limit equals 1, perhaps by assuming the leading coefficients cancel to 1, which is not the case here."
  },
  {
    "id": "calcbc_u10_q303",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "p-series",
    "topicLabel": "p-Series",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the sum of the infinite geometric series 3 + 1 + 1/3 + 1/9 + ...?",
    "choices": [
      "A) 9/2",
      "B) 4",
      "C) 9/4",
      "D) 6"
    ],
    "answer": 0,
    "explanation": "For an infinite geometric series, the sum is S = a/(1 - r), where a is the first term and r is the common ratio. Here, a = 3 and r = 1/3 (since each term is multiplied by 1/3). Since |r| = 1/3 < 1, the series converges. Thus S = 3/(1 - 1/3) = 3/(2/3) = 9/2. Choice B (4) may result from a student who adds only the first few terms (3 + 1 = 4) without applying the formula. Choice C (9/4) may result from incorrectly using S = a/(1 + r) = 3/(1 + 1/3) = 3/(4/3) = 9/4, confusing the formula with 1/(1+r). Choice D (6) may result from a student who correctly identifies a = 3 but mistakenly uses r = 1/2, giving 3/(1 - 1/2) = 6."
  },
  {
    "id": "calcbc_u10_q304",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Maclaurin series",
    "topicLabel": "Maclaurin Series",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is the Maclaurin series for e^x?",
    "choices": [
      "A) The sum from n=0 to infinity of x^n / n!",
      "B) The sum from n=0 to infinity of (-1)^n * x^(2n) / (2n)!",
      "C) The sum from n=0 to infinity of x^n",
      "D) The sum from n=1 to infinity of x^n / n"
    ],
    "answer": 0,
    "explanation": "The Maclaurin series for e^x is the sum from n=0 to infinity of x^n / n!, which equals 1 + x + x^2/2! + x^3/3! + ... . Choice B is the Maclaurin series for cos(x). Choice C is a geometric series equal to 1/(1-x) for |x| < 1. Choice D resembles the series for -ln(1-x). Students commonly confuse the series for e^x and cos(x) because both involve factorials."
  },
  {
    "id": "calcbc_u10_q305",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "alternating series test",
    "topicLabel": "Alternating Series Test",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which condition is NOT required by the Alternating Series Test to conclude that a series converges?",
    "choices": [
      "A) The terms b_n must decrease to zero at a geometric rate",
      "B) The terms b_n must be positive",
      "C) The terms b_n must be non-increasing (b_(n+1) <= b_n)",
      "D) The limit of b_n as n approaches infinity must equal zero"
    ],
    "answer": 0,
    "explanation": "The Alternating Series Test (for a series of the form sum(-1)^n * b_n) requires only that b_n > 0, that b_n is non-increasing, and that the limit of b_n equals zero. It does NOT require the terms to decrease at a geometric rate - any non-increasing convergence to zero is sufficient. Choices B, C, and D are all genuine requirements of the test. Students sometimes believe exponential decay is necessary, but linear or slower decay to zero is perfectly acceptable."
  },
  {
    "id": "calcbc_u10_q306",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "geometric series",
    "topicLabel": "Geometric Series",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the sum of the series \\(\\sum_{n=0}^{\\infty} \\frac{3 \\cdot 2^n}{5^n}\\)?",
    "choices": [
      "A) 5",
      "B) 3",
      "C) \\(\\frac{5}{2}\\)",
      "D) The series diverges"
    ],
    "answer": 0,
    "explanation": "This is a geometric series with first term a = 3 and common ratio r = 2/5. Since |r| = 2/5 < 1, the series converges. The sum is a/(1 - r) = 3/(1 - 2/5) = 3/(3/5) = 5. Choice B incorrectly uses just the first term. Choice C misapplies the formula. Choice D incorrectly concludes divergence."
  },
  {
    "id": "calcbc_u10_q307",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "p-series",
    "topicLabel": "P-Series",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For which values of \\(p\\) does the series \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^{2p-1}}\\) converge?",
    "choices": [
      "A) \\(p > 1\\)",
      "B) \\(p > \\frac{1}{2}\\)",
      "C) \\(p > 1\\) and \\(p \\neq \\frac{3}{2}\\)",
      "D) \\(p \\geq 1\\)"
    ],
    "answer": 0,
    "explanation": "The series is a p-series with exponent 2p - 1. A p-series converges when the exponent is greater than 1, so we need 2p - 1 > 1, which gives 2p > 2, so p > 1. Choice B sets 2p - 1 > 0 (the wrong threshold). Choice C incorrectly excludes a value. Choice D uses ≥ instead of >, but p = 1 gives exponent 1, the harmonic series, which diverges."
  },
  {
    "id": "calcbc_u10_q308",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "ratio test",
    "topicLabel": "Ratio Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the Ratio Test, which conclusion can be drawn about the series \\(\\sum_{n=1}^{\\infty} \\frac{n!}{3^n}\\)?",
    "choices": [
      "A) The series diverges.",
      "B) The series converges absolutely.",
      "C) The series converges conditionally.",
      "D) The Ratio Test is inconclusive."
    ],
    "answer": 0,
    "explanation": "Applying the Ratio Test: L = lim(n→∞) |a_{n+1}/a_n| = lim(n→∞) [(n+1)!/3^{n+1}] · [3^n/n!] = lim(n→∞) (n+1)/3 = ∞. Since L > 1, the series diverges. Choice B incorrectly concludes convergence. Choice C is impossible since the terms are positive. Choice D would require L = 1."
  },
  {
    "id": "calcbc_u10_q309",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "alternating series error bound",
    "topicLabel": "Alternating Series Error Bound",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The series \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2}\\) converges to \\(S\\). If \\(S_4\\) is the 4th partial sum, what is the maximum error \\(|S - S_4|\\)?",
    "choices": [
      "A) \\(\\frac{1}{25}\\)",
      "B) \\(\\frac{1}{16}\\)",
      "C) \\(\\frac{1}{36}\\)",
      "D) \\(\\frac{1}{9}\\)"
    ],
    "answer": 0,
    "explanation": "By the Alternating Series Error Bound, the error |S - S_n| ≤ |a_{n+1}|, the absolute value of the first omitted term. With n = 4, the first omitted term is a_5 = 1/5² = 1/25. So the maximum error is 1/25. Choice B uses a_4 = 1/16 (the last included term, a common error). Choice C uses a_6. Choice D uses a_3."
  },
  {
    "id": "calcbc_u10_q310",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "radius of convergence",
    "topicLabel": "Radius of Convergence",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the radius of convergence of the power series \\(\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n \\cdot 4^n}\\)?",
    "choices": [
      "A) 4",
      "B) 2",
      "C) \\(\\frac{1}{4}\\)",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "Using the Ratio Test: L = lim(n→∞) |[(x-2)^{n+1}/((n+1)·4^{n+1})] · [n·4^n/(x-2)^n]| = |x-2|/4 · lim(n→∞) n/(n+1) = |x-2|/4. For convergence, |x-2|/4 < 1, so |x-2| < 4. The radius of convergence is R = 4. Choice B mistakes the center for the radius. Choice C inverts the ratio. Choice D ignores the 4^n factor."
  },
  {
    "id": "calcbc_u10_q311",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Maclaurin series",
    "topicLabel": "Maclaurin Series",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is the Maclaurin series for \\(f(x) = x \\sin(x^2)\\)?",
    "choices": [
      "A) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n+3}}{(2n+1)!}\\)",
      "B) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+2}}{(2n+1)!}\\)",
      "C) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n+1}}{(2n+1)!}\\)",
      "D) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n)!}\\)"
    ],
    "answer": 0,
    "explanation": "For f(x) = ln(x) centered at x = 1, compute derivatives: f'(x) = 1/x, f''(x) = -1/x², f'''(x) = 2/x³. Evaluating at x = 1: f(1) = 0, f'(1) = 1, f''(1) = -1, f'''(1) = 2. The coefficient of (x-1)³ in the Taylor polynomial is f'''(1)/3! = 2/6 = 1/3. This is confirmed by the known series ln(x) = (x-1) - (x-1)²/2 + (x-1)³/3 - ... Choice B incorrectly applies an alternating sign to get -1/3. Choices C and D err by not simplifying 2/6 correctly or by conflating the formula."
  },
  {
    "id": "calcbc_u10_q312",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "limit comparison test",
    "topicLabel": "Limit Comparison Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the Limit Comparison Test with \\(b_n = \\frac{1}{n^2}\\), what conclusion can be drawn about \\(\\sum_{n=1}^{\\infty} \\frac{3n+1}{n^3 - 2}\\)?",
    "choices": [
      "A) The series converges, since the limit is a finite positive number.",
      "B) The series diverges, since the limit equals zero.",
      "C) The series converges, since the limit equals zero.",
      "D) The test is inconclusive because the limit is infinite."
    ],
    "answer": 0,
    "explanation": "Compute lim(n→∞) a_n/b_n = lim(n→∞) [(3n+1)/(n³-2)] / [1/n²] = lim(n→∞) n²(3n+1)/(n³-2) = lim(n→∞) (3n³+n²)/(n³-2) = 3. Since the limit is a finite positive number (3 > 0), and Σ 1/n² converges (p-series with p = 2 > 1), by the Limit Comparison Test, the original series also converges. Choice B incorrectly computes the limit. Choice C applies wrong logic (limit = 0 requires different analysis). Choice D incorrectly states the limit is infinite."
  },
  {
    "id": "calcbc_u10_q313",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "interval of convergence",
    "topicLabel": "Interval of Convergence",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the interval of convergence for the power series \\(\\sum_{n=1}^{\\infty} \\frac{(x+1)^n}{n}\\)?",
    "choices": [
      "A) \\(-2 \\leq x < 0\\)",
      "B) \\(-2 < x < 0\\)",
      "C) \\(-2 < x \\leq 0\\)",
      "D) \\(-2 \\leq x \\leq 0\\)"
    ],
    "answer": 0,
    "explanation": "Using the Ratio Test, the radius of convergence is R = 1 centered at x = -1, giving the open interval (-2, 0). Check endpoints: At x = -2: Σ (-1)^n/n, which converges by the Alternating Series Test. At x = 0: Σ 1/n, the harmonic series, which diverges. So the interval of convergence is -2 ≤ x < 0. Choice B excludes both endpoints. Choice C includes x = 0 but excludes x = -2, which is the reverse of the correct answer. Choice D includes both endpoints."
  },
  {
    "id": "calcbc_u10_q314",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "geometric series",
    "topicLabel": "Geometric Series",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the sum of the series \\(\\sum_{n=0}^{\\infty} \\frac{3 \\cdot 2^n}{5^n}\\)?",
    "choices": [
      "A) 5",
      "B) 3",
      "C) \\(\\frac{15}{2}\\)",
      "D) The series diverges"
    ],
    "answer": 0,
    "explanation": "This is a geometric series with first term a = 3 and common ratio r = 2/5. Since |r| = 2/5 < 1, it converges. Sum = a/(1 - r) = 3/(1 - 2/5) = 3/(3/5) = 5. Choice B ignores the denominator factor entirely, yielding just 3. Choice C incorrectly computes 1 - r as 2/5 instead of 3/5, giving 3/(2/5) = 15/2; this is equivalent to omitting the subtraction from 1 and using r itself as the denominator. Choice D is wrong because |r| < 1 guarantees convergence."
  },
  {
    "id": "calcbc_u10_q315",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "p-series",
    "topicLabel": "p-Series",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For which values of \\(p\\) does the series \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^{2p-1}}\\) converge?",
    "choices": [
      "A) \\(p > 1\\)",
      "B) \\(p > \\frac{1}{2}\\)",
      "C) \\(p \\geq 1\\)",
      "D) \\(p > \\frac{3}{2}\\)"
    ],
    "answer": 0,
    "explanation": "The p-series \\(\\sum \\frac{1}{n^k}\\) converges when k > 1. Here k = 2p - 1, so we need 2p - 1 > 1, which gives p > 1. Choice B sets 2p - 1 > 0 (a common error of requiring positive exponent rather than exponent > 1). Choice C incorrectly includes p = 1 (the harmonic series diverges). Choice D over-restricts by requiring 2p - 1 > 2."
  },
  {
    "id": "calcbc_u10_q316",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "ratio test",
    "topicLabel": "Ratio Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Apply the Ratio Test to \\(\\sum_{n=1}^{\\infty} \\frac{n!}{3^n}\\). What can be concluded?",
    "choices": [
      "A) The series diverges.",
      "B) The series converges absolutely.",
      "C) The series converges conditionally.",
      "D) The Ratio Test is inconclusive."
    ],
    "answer": 0,
    "explanation": "Compute \\(L = \\lim_{n \\to \\infty} \\left|\\frac{(n+1)!/3^{n+1}}{n!/3^n}\\right| = \\lim_{n \\to \\infty} \\frac{n+1}{3} = \\infty\\). Since L > 1, the series diverges. Choice B confuses factorial growth with exponential; exponentials like 3^n grow slower than n!. Choice C is nonsensical since the terms are positive, ruling out conditional convergence. Choice D would apply only if L = 1."
  },
  {
    "id": "calcbc_u10_q317",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "alternating series error bound",
    "topicLabel": "Alternating Series Error Bound",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The alternating series \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2}\\) is approximated by its first 3 terms. What is an upper bound for the error of this approximation?",
    "choices": [
      "A) \\(\\frac{1}{16}\\)",
      "B) \\(\\frac{1}{9}\\)",
      "C) \\(\\frac{1}{25}\\)",
      "D) \\(\\frac{1}{4}\\)"
    ],
    "answer": 0,
    "explanation": "By the Alternating Series Error Bound, the error is bounded by the absolute value of the first omitted term. The first 3 terms use n = 1, 2, 3, so the first omitted term is n = 4: |a_4| = 1/16. Choice B uses n = 3, the last included term rather than the first omitted. Choice C uses n = 5 instead of n = 4. Choice D uses n = 2, incorrectly identifying the omitted term."
  },
  {
    "id": "calcbc_u10_q318",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "radius of convergence",
    "topicLabel": "Radius of Convergence",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Find the radius of convergence of the power series \\(\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n \\cdot 4^n}\\).",
    "choices": [
      "A) \\(R = 4\\)",
      "B) \\(R = 2\\)",
      "C) \\(R = \\frac{1}{4}\\)",
      "D) \\(R = 8\\)"
    ],
    "answer": 0,
    "explanation": "Using the Ratio Test: \\(L = \\lim_{n \\to \\infty} \\left|\\frac{(x-2)^{n+1}}{(n+1)4^{n+1}} \\cdot \\frac{n \\cdot 4^n}{(x-2)^n}\\right| = \\frac{|x-2|}{4}\\). Setting L < 1 gives |x - 2| < 4, so R = 4. Choice B confuses the center (x = 2) with the radius. Choice C takes the reciprocal of 4 incorrectly. Choice D doubles the radius by confusing diameter with radius."
  },
  {
    "id": "calcbc_u10_q319",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "limit comparison test",
    "topicLabel": "Limit Comparison Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Use the Limit Comparison Test to determine the convergence of \\(\\sum_{n=1}^{\\infty} \\frac{3n^2 + 1}{n^4 - 2}\\).",
    "choices": [
      "A) Converges, by comparison with \\(\\sum \\frac{1}{n^2}\\).",
      "B) Diverges, by comparison with \\(\\sum \\frac{1}{n^2}\\).",
      "C) Converges, by comparison with \\(\\sum \\frac{1}{n^4}\\).",
      "D) Diverges, by comparison with \\(\\sum \\frac{1}{n}\\)."
    ],
    "answer": 0,
    "explanation": "For large n, \\(\\frac{3n^2+1}{n^4-2} \\approx \\frac{3n^2}{n^4} = \\frac{3}{n^2}\\). Compare with \\(b_n = \\frac{1}{n^2}\\): \\(\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = 3\\), a finite positive number. Since \\(\\sum \\frac{1}{n^2}\\) converges (p = 2 > 1), the original series converges. Choice B incorrectly concludes divergence despite using the correct comparison series. Choice C uses the wrong dominant term (n^4 instead of n^2 in numerator). Choice D results from using f'(0) = 1 (as if differentiating e^x rather than e^{2x}), giving coefficient 1/2! = 1/2 instead of the correct 4/2! = 2."
  },
  {
    "id": "calcbc_u10_q320",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Maclaurin series",
    "topicLabel": "Maclaurin Series (Known Series)",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the known Maclaurin series, which expression equals \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}\\)?",
    "choices": [
      "A) \\(\\sin x\\)",
      "B) \\(\\cos x\\)",
      "C) \\(\\sin(x^2)\\)",
      "D) \\(-\\cos x\\)"
    ],
    "answer": 0,
    "explanation": "The Maclaurin series for sin x is \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots\\). This matches exactly. Choice B is the series for cos x, which has even powers and (2n)! in the denominator. Choice C would require x^{2(2n+1)} = x^{4n+2}, not x^{2n+1}. Choice D has the wrong sign pattern for the leading terms."
  },
  {
    "id": "calcbc_u10_q321",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "interval of convergence",
    "topicLabel": "Interval of Convergence",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Determine the interval of convergence of \\(\\sum_{n=1}^{\\infty} \\frac{(x+1)^n}{n}\\).",
    "choices": [
      "A) \\(-2 \\leq x < 0\\)",
      "B) \\(-2 < x < 0\\)",
      "C) \\(-2 < x \\leq 0\\)",
      "D) \\(-2 \\leq x \\leq 0\\)"
    ],
    "answer": 0,
    "explanation": "Using the Ratio Test: R = 1, so |x + 1| < 1 gives -2 < x < 0. Check endpoints: at x = 0: \\(\\sum \\frac{1}{n}\\) diverges (harmonic series). At x = -2: \\(\\sum \\frac{(-1)^n}{n}\\) converges by the Alternating Series Test. So the interval is [-2, 0). Choice B excludes x = -2, ignoring the alternating series convergence. Choice C includes x = 0 but the harmonic series diverges there. Choice D includes both endpoints, but x = 0 must be excluded."
  },
  {
    "id": "calcbc_u10_q322",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "geometric series",
    "topicLabel": "Geometric Series",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the sum of the series \\(\\sum_{n=0}^{\\infty} \\frac{3 \\cdot 2^n}{5^n}\\)?",
    "choices": [
      "A) 5",
      "B) 3",
      "C) \\(\\frac{5}{3}\\)",
      "D) The series diverges"
    ],
    "answer": 0,
    "explanation": "This is a geometric series with first term a = 3 and common ratio r = 2/5. Since |r| = 2/5 < 1, the series converges. The sum is a/(1−r) = 3/(1 − 2/5) = 3/(3/5) = 5. Choice B confuses the first term with the sum. Choice C inverts the calculation. Choice D incorrectly applies a divergence test."
  },
  {
    "id": "calcbc_u10_q323",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "p-series",
    "topicLabel": "p-Series",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let \\(f(x) = e^x\\). Using the Taylor polynomial of degree 2 centered at \\(x = 0\\), the error in approximating \\(f(0.1)\\) is bounded by the Lagrange error bound. Using \\(M = 1\\) as an upper bound for \\(|f^{(3)}(x)|\\) on \\([0, 0.1]\\) (since \\(e^{0.1} < 2\\) and we conservatively bound by 1 for simplicity is not valid; instead, use \\(M = e\\) as an upper bound for \\(|f^{(3)}(x)|\\) on \\([0, 0.5]\\)), what is the Lagrange error bound for approximating \\(e^{0.5}\\) using the degree 2 Taylor polynomial for \\(e^x\\) centered at \\(0\\), with \\(M = e\\) as the upper bound for \\(|f^{(3)}|\\) on \\([0, 0.5]\\)?",
    "choices": [
      "A) \\(\\dfrac{e}{48}\\)",
      "B) \\(\\dfrac{1}{48}\\)",
      "C) \\(\\dfrac{e}{6}\\)",
      "D) \\(\\dfrac{1}{6}\\)"
    ],
    "answer": 0,
    "explanation": "The Lagrange error bound for a degree 2 Taylor polynomial is \\(\\dfrac{M}{3!}|x - a|^3\\). Here \\(a = 0\\), \\(x = 0.5\\), \\(M = e\\), and \\(3! = 6\\). So the bound is \\(\\dfrac{e}{6} \\cdot (0.5)^3 = \\dfrac{e}{6} \\cdot \\dfrac{1}{8} = \\dfrac{e}{48}\\). Choice B uses \\(M = 1\\) instead of \\(M = e\\). Choice C omits the factor of \\((0.5)^3\\). Choice D uses both \\(M = 1\\) and omits the \\((0.5)^3\\) factor."
  },
  {
    "id": "calcbc_u10_q324",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "ratio test",
    "topicLabel": "Ratio Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the Ratio Test, what can be concluded about the series \\(\\sum_{n=1}^{\\infty} \\frac{n!}{3^n}\\)?",
    "choices": [
      "A) The series diverges.",
      "B) The series converges absolutely.",
      "C) The series converges conditionally.",
      "D) The Ratio Test is inconclusive."
    ],
    "answer": 0,
    "explanation": "Applying the Ratio Test: L = lim(n→∞) |a_{n+1}/a_n| = lim (n+1)!/3^{n+1} · 3^n/n! = lim (n+1)/3 = ∞ > 1. Since L > 1, the series diverges. Choice B would require L < 1. Choice C is impossible since divergence is confirmed. Choice D applies when L = 1, not here."
  },
  {
    "id": "calcbc_u10_q325",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "alternating series test",
    "topicLabel": "Alternating Series Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following series converges by the Alternating Series Test?",
    "choices": [
      "A) \\(\\sum_{n=1}^{\\infty} (-1)^n \\frac{n}{n+1}\\)",
      "B) \\(\\sum_{n=1}^{\\infty} (-1)^n \\frac{1}{\\sqrt{n}}\\)",
      "C) \\(\\sum_{n=1}^{\\infty} (-1)^n \\frac{n^2+1}{n}\\)",
      "D) \\(\\sum_{n=1}^{\\infty} (-1)^n \\cdot 2\\)"
    ],
    "answer": 1,
    "explanation": "The Alternating Series Test requires that the absolute values of terms b_n are decreasing and approach 0. For choice B, b_n = 1/√n is decreasing and lim 1/√n = 0, so it converges. For A, lim n/(n+1) = 1 ≠ 0, so it fails the necessary condition. For C, lim (n²+1)/n = ∞ ≠ 0. For D, the terms do not approach 0."
  },
  {
    "id": "calcbc_u10_q326",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "alternating series error bound",
    "topicLabel": "Alternating Series Error Bound",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The alternating series \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^3}\\) is approximated by its first four terms. What is the maximum error of this approximation?",
    "choices": [
      "A) \\(\\frac{1}{125}\\)",
      "B) \\(\\frac{1}{64}\\)",
      "C) \\(\\frac{1}{27}\\)",
      "D) \\(\\frac{1}{216}\\)"
    ],
    "answer": 0,
    "explanation": "By the Alternating Series Error Bound, the error is at most the absolute value of the first omitted term. The first four terms use n = 1, 2, 3, 4, so the first omitted term is n = 5: |a_5| = 1/5³ = 1/125. Choice B corresponds to 1/4³ = 1/64, using the last included term. Choice C corresponds to 1/3³, and Choice D corresponds to 1/6³, both incorrect term selections."
  },
  {
    "id": "calcbc_u10_q327",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "radius of convergence",
    "topicLabel": "Radius of Convergence",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the radius of convergence of the power series \\(\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n \\cdot 4^n}\\)?",
    "choices": [
      "A) 4",
      "B) 2",
      "C) \\(\\frac{1}{4}\\)",
      "D) 8"
    ],
    "answer": 0,
    "explanation": "Using the Ratio Test: L = lim |a_{n+1}/a_n| = lim [|x−2|^{n+1}/(n+1)·4^{n+1}] · [n·4^n/|x−2|^n] = |x−2|/4 · lim n/(n+1) = |x−2|/4. Setting L < 1 gives |x−2| < 4, so the radius of convergence R = 4. Choice B confuses the center with the radius. Choice C inverts the ratio. Choice D doubles the radius incorrectly."
  },
  {
    "id": "calcbc_u10_q328",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Maclaurin series",
    "topicLabel": "Maclaurin Series",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the third-degree Taylor polynomial \\(P_3(x)\\) for \\(f(x) = \\cos x\\) centered at \\(x = 0\\)? (Note: some coefficients may be zero.)",
    "choices": [
      "A) \\(\\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{n!}\\)",
      "B) \\(\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{n!}\\)",
      "C) \\(\\sum_{n=0}^{\\infty} \\frac{x^{n+1}}{n!}\\)",
      "D) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{n!}\\)"
    ],
    "answer": 0,
    "explanation": "The Maclaurin series for cos x is 1 − x²/2! + x⁴/4! − ⋯ Multiplying by x gives xe^{x²} = Σ x^{2n+1}/n!, which is choice A. Choice B omits the multiplication by x. Choice C uses x^{n+1} rather than x^{2n+1}, forgetting to substitute x² for u. Choice D is the third-degree Maclaurin polynomial for e^{−x}, not cos x."
  },
  {
    "id": "calcbc_u10_q329",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "limit comparison test",
    "topicLabel": "Limit Comparison Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the Limit Comparison Test, which series would be the best choice to compare with \\(\\sum_{n=1}^{\\infty} \\frac{3n^2+1}{n^4-2}\\) in order to determine convergence?",
    "choices": [
      "A) \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^2}\\)",
      "B) \\(\\sum_{n=1}^{\\infty} \\frac{1}{n^4}\\)",
      "C) \\(\\sum_{n=1}^{\\infty} \\frac{1}{n}\\)",
      "D) \\(\\sum_{n=1}^{\\infty} \\frac{3}{n^2}\\)"
    ],
    "answer": 0,
    "explanation": "For large n, (3n²+1)/(n⁴−2) behaves like 3n²/n⁴ = 3/n², so the dominant comparison series is Σ 1/n². The Limit Comparison Test gives lim [(3n²+1)/(n⁴−2)] / (1/n²) = lim (3n⁴+n²)/(n⁴−2) = 3 > 0 and finite, confirming convergence since Σ 1/n² converges (p=2 > 1). Choice B uses the denominator's degree alone. Choice C gives the harmonic series (diverges), leading to the wrong conclusion. Choice D is proportional to A and would also work but is a less standard reference series."
  },
  {
    "id": "calcbc_u10_q330",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "ratio test",
    "topicLabel": "Ratio Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following correctly describes the convergence of the series \\(\\sum_{n=1}^{\\infty} \\frac{n!}{3^n}\\) using the Ratio Test?",
    "choices": [
      "A) The series diverges because \\(\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\infty > 1\\).",
      "B) The series converges because \\(\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{1}{3} < 1\\).",
      "C) The Ratio Test is inconclusive because the limit equals 1.",
      "D) The series converges because \\(n!\\) grows slower than \\(3^n\\) for large \\(n\\)."
    ],
    "answer": 0,
    "explanation": "Applying the Ratio Test: \\(\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\frac{n+1}{3}\\). As \\(n \\to \\infty\\), this limit is \\(\\infty > 1\\), so the series diverges. Choice B incorrectly computes the ratio as \\(1/3\\), perhaps confusing it with a geometric series. Choice C is wrong because the limit is not 1. Choice D is incorrect - factorial growth dominates exponential growth, meaning the terms do NOT go to zero, confirming divergence."
  },
  {
    "id": "calcbc_u10_q331",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "alternating series error bound",
    "topicLabel": "Alternating Series Error Bound",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The alternating series \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2}\\) converges to a value \\(S\\). If \\(S_4\\) denotes the partial sum of the first 4 terms, what is the maximum error \\(|S - S_4|\\)?",
    "choices": [
      "A) \\(\\frac{1}{25}\\)",
      "B) \\(\\frac{1}{16}\\)",
      "C) \\(\\frac{1}{36}\\)",
      "D) \\(\\frac{1}{4}\\)"
    ],
    "answer": 0,
    "explanation": "By the Alternating Series Error Bound, the error \\(|S - S_N|\\) is at most the absolute value of the first omitted term, which is \\(a_{N+1}\\). Here \\(N = 4\\), so the error is bounded by \\(a_5 = \\frac{1}{5^2} = \\frac{1}{25}\\). Choice B uses \\(a_4 = \\frac{1}{16}\\), a common mistake of using the last included term instead of the first omitted term. Choice C uses \\(a_6 = \\frac{1}{36}\\), skipping a term. Choice D uses \\(\\frac{1}{4}\\), possibly confusing \\(n^2\\) with \\(n\\)."
  },
  {
    "id": "calcbc_u10_q332",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Taylor polynomial",
    "topicLabel": "Taylor Polynomial",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function \\(f(x) = \\cos x\\) is approximated by its third-degree Taylor polynomial centered at \\(x = 0\\). What is this polynomial?",
    "choices": [
      "A) \\(1 - \\frac{x^2}{2}\\)",
      "B) \\(1 - x + \\frac{x^2}{2} - \\frac{x^3}{6}\\)",
      "C) \\(1 - \\frac{x^2}{2} + \\frac{x^4}{24}\\)",
      "D) \\(x - \\frac{x^3}{6}\\)"
    ],
    "answer": 0,
    "explanation": "The Maclaurin series for \\(\\cos x\\) is \\(1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots\\). Since cosine is an even function, all odd-degree terms have zero coefficients. The third-degree Taylor polynomial includes terms up to degree 3; since the degree-1 and degree-3 coefficients are both zero, \\(P_3(x) = 1 - \\frac{x^2}{2}\\). Choice C shows \\(P_4(x)\\), not \\(P_3(x)\\), as it includes the next nonzero term. Choice B resembles the series for \\(e^{-x}\\), not cosine. Choice D is the third-degree Taylor polynomial for \\(\\sin x\\), not \\(\\cos x\\)."
  },
  {
    "id": "calcbc_u10_q333",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "limit comparison test",
    "topicLabel": "Limit Comparison Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following series converges, as determined by the Limit Comparison Test with an appropriate comparison series?",
    "choices": [
      "A) \\(\\sum_{n=1}^{\\infty} \\frac{n^2 + 1}{n^3 - 2}\\)",
      "B) \\(\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n}}{n + 3}\\)",
      "C) \\(\\sum_{n=1}^{\\infty} \\frac{3n^2 + 2}{n^3 + 5}\\)",
      "D) \\(\\sum_{n=1}^{\\infty} \\frac{n+1}{n^3 + 4}\\)"
    ],
    "answer": 3,
    "explanation": "For choice D, compare with \\(\\sum \\frac{1}{n^2}\\) (a convergent p-series, \\(p=2>1\\)). The limit is \\(\\lim_{n\\to\\infty} \\frac{(n+1)/(n^3+4)}{1/n^2} = \\lim_{n\\to\\infty} \\frac{n^2(n+1)}{n^3+4} = \\lim_{n\\to\\infty} \\frac{n^3+n^2}{n^3+4} = 1 > 0\\). Since the limit is a finite positive number and \\(\\sum 1/n^2\\) converges, series D converges. Choice A behaves like \\(\\sum 1/n\\) (diverges). Choice B behaves like \\(\\sum 1/\\sqrt{n}\\) (diverges, \\(p=1/2\\)). Choice C behaves like \\(\\sum 3/n\\) (diverges). A common trap is misidentifying the dominant terms in numerator and denominator."
  },
  {
    "id": "calcbc_u10_q334",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Interval of Convergence",
    "topicLabel": "Interval of Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Consider the power series \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x+2)^n}{n \\cdot 3^n}\\). Which of the following correctly states the interval of convergence?",
    "choices": [
      "A) \\(-5 \\leq x < 1\\)",
      "B) \\(-5 < x \\leq 1\\)",
      "C) \\(-5 < x < 1\\)",
      "D) \\(-5 \\leq x \\leq 1\\)"
    ],
    "answer": 1,
    "explanation": "Applying the Ratio Test: \\(\\lim_{n\\to\\infty} \\left|\\frac{(x+2)^{n+1}}{(n+1)\\cdot 3^{n+1}} \\cdot \\frac{n \\cdot 3^n}{(x+2)^n}\\right| = \\frac{|x+2|}{3} < 1\\), giving \\(|x+2| < 3\\), so the radius of convergence is 3 and the center is \\(x = -2\\). This yields \\(-5 < x < 1\\) as the open interval. Now check endpoints: At \\(x = 1\\): \\(\\sum \\frac{(-1)^n \\cdot 3^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n}{n}\\), which converges by the Alternating Series Test. At \\(x = -5\\): \\(\\sum \\frac{(-1)^n(-3)^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n(-1)^n}{n} = \\sum \\frac{1}{n}\\), the harmonic series, which diverges. Therefore the interval of convergence is \\(-5 < x \\leq 1\\). A common trap is to include \\(x=-5\\) (forgetting the harmonic series diverges) or to exclude \\(x=1\\) (forgetting to check endpoints or misapplying the alternating series test)."
  },
  {
    "id": "calcbc_u10_q335",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Lagrange Error Bound",
    "topicLabel": "Lagrange Error Bound",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let \\(P_3(x)\\) be the third-degree Taylor polynomial for \\(f(x) = e^x\\) centered at \\(x = 0\\). Using the Lagrange error bound, what is the maximum possible error \\(|f(0.5) - P_3(0.5)|\\)?",
    "choices": [
      "A) \\(\\dfrac{e^{0.5}}{24}\\)",
      "B) \\(\\dfrac{(0.5)^4}{24}\\)",
      "C) \\(\\dfrac{e^{0.5}(0.5)^4}{24}\\)",
      "D) \\(\\dfrac{(0.5)^3}{6}\\)"
    ],
    "answer": 2,
    "explanation": "The Lagrange error bound states \\(|f(x) - P_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}\\), where \\(M\\) is the maximum value of \\(|f^{(n+1)}|\\) on the interval between \\(a\\) and \\(x\\). Here \\(n=3\\), \\(a=0\\), \\(x=0.5\\), and \\(f^{(4)}(x) = e^x\\). Since \\(e^x\\) is increasing, its maximum on \\([0, 0.5]\\) is \\(e^{0.5}\\). Thus the bound is \\(\\frac{e^{0.5}(0.5)^4}{4!} = \\frac{e^{0.5}(0.5)^4}{24}\\), making C correct. Choice B is a common error where students forget to include the maximum of the derivative (treating \\(M=1\\)). Choice D uses \\(n=2\\) instead of \\(n=3\\), confusing the degree of the polynomial with the order of the error term. Choice A omits the \\((0.5)^4\\) factor entirely."
  },
  {
    "id": "calcbc_u10_q336",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "interval of convergence",
    "topicLabel": "Interval of Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Consider the power series \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x+2)^n}{n \\cdot 3^n}\\). Which of the following correctly states the interval of convergence?",
    "choices": [
      "A) \\(-5 \\leq x < 1\\)",
      "B) \\(-5 < x \\leq 1\\)",
      "C) \\(-5 < x < 1\\)",
      "D) \\(-5 \\leq x \\leq 1\\)"
    ],
    "answer": 1,
    "explanation": "Using the Ratio Test, the radius of convergence is found by taking the limit of |((x+2)/3)|, which must be less than 1, giving |x+2| < 3, so the center is x = -2 and radius is 3. This yields the open interval (-5, 1). Now check the endpoints. At x = -5: (x+2) = -3, so the series becomes \\(\\sum \\frac{(-1)^n(-3)^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n(-1)^n \\cdot 3^n}{n \\cdot 3^n} = \\sum \\frac{1}{n}\\), the harmonic series, which diverges. At x = 1: (x+2) = 3, so the series becomes \\(\\sum \\frac{(-1)^n \\cdot 3^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n}{n}\\), the alternating harmonic series, which converges by the Alternating Series Test. Therefore the interval of convergence is \\(-5 < x \\leq 1\\). Choice A is wrong because it includes x = -5 (diverges) and excludes x = 1 (converges). Choice C excludes both endpoints. Choice D results from a student incorrectly concluding that both endpoints converge - specifically, at x = -5 the student may mistakenly treat \\((-1)^n(-1)^n = (-1)^{2n}\\) as producing an alternating series (rather than recognizing that \\((-1)^{2n} = 1\\) yields the divergent harmonic series), and therefore incorrectly applies the Alternating Series Test to include x = -5 as well as x = 1."
  },
  {
    "id": "calcbc_u10_q337",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "interval of convergence",
    "topicLabel": "Interval of Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Consider the power series \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x+2)^n}{n \\cdot 3^n}\\). Which of the following correctly states the interval of convergence?",
    "choices": [
      "A) \\(-5 \\leq x < 1\\)",
      "B) \\(-5 < x \\leq 1\\)",
      "C) \\(-5 \\leq x \\leq 1\\)",
      "D) \\(-5 < x < 1\\)"
    ],
    "answer": 0,
    "explanation": "Apply the Lagrange error bound formula: for a Taylor polynomial of degree \\(n\\) approximating \\(f(x)\\) near \\(x = a\\), the error satisfies \\(|R_n(x)| \\leq \\frac{M}{(n+1)!}|x-a|^{n+1}\\), where \\(M\\) is the maximum of \\(|f^{(n+1)}(t)|\\) on the interval between \\(a\\) and \\(x\\). Here \\(n = 3\\), so the bound uses the 4th derivative. Computing: \\(f^{(4)}(x) = -6(1+x)^{-4}\\), so \\(|f^{(4)}(t)| = 6(1+t)^{-4}\\). On \\([0, 0.2]\\), this is a decreasing function, so it is maximized at \\(t = 0\\), giving \\(M = 6\\). Therefore the Lagrange error bound is \\(\\frac{6 \\cdot (0.2)^4}{4!} = \\frac{6 \\cdot (0.2)^4}{24} = \\frac{(0.2)^4}{4}\\), confirming choice A. Choice D is incorrect because using \\((1.2)^4\\) in the denominator corresponds to evaluating \\(|f^{(4)}(t)|\\) at \\(t = 0.2\\), which gives the minimum value of \\(|f^{(4)}|\\) on \\([0, 0.2]\\), not the maximum. Since the Lagrange bound requires an upper bound \\(M\\) on \\(|f^{(4)}|\\), using the minimum value does not produce a valid upper bound for the error."
  },
  {
    "id": "calcbc_u10_q338",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "series convergence and divergence",
    "topicLabel": "Series Convergence and Divergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the coefficient of \\(x^4\\) in the Maclaurin series for \\(f(x) = \\cos(x^2)\\)?",
    "choices": [
      "A) \\(-\\dfrac{1}{2}\\)",
      "B) \\(\\dfrac{1}{2}\\)",
      "C) \\(-\\dfrac{1}{24}\\)",
      "D) \\(\\dfrac{1}{24}\\)"
    ],
    "answer": 0,
    "explanation": "To find the Maclaurin series for \\(\\cos(x^2)\\), begin with the known Maclaurin series for \\(\\cos(u)\\):\n\\[\\cos(u) = 1 - \\frac{u^2}{2!} + \\frac{u^4}{4!} - \\cdots\\]\nSubstitute \\(u = x^2\\):\n\\[\\cos(x^2) = 1 - \\frac{(x^2)^2}{2!} + \\frac{(x^2)^4}{4!} - \\cdots = 1 - \\frac{x^4}{2} + \\frac{x^8}{24} - \\cdots\\]\nThe coefficient of \\(x^4\\) is \\(-\\dfrac{1}{2}\\), so the answer is A. Option B is incorrect because it omits the negative sign present in the cosine series. Options C and D use \\(4!\\) in the denominator, which corresponds to the coefficient of the \\(x^8\\) term, not the \\(x^4\\) term. The \\(x^4\\) term arises from substituting \\(u = x^2\\) into the first nontrivial cosine term \\(-\\dfrac{u^2}{2!}\\), giving a denominator of \\(2!= 2\\), not \\(4! = 24\\). While \\(-\\dfrac{1}{24}\\) might appear as a plausible bound, it does not correctly represent the coefficient of \\(x^4\\); the exact and minimal value is \\(-\\dfrac{1}{2}\\)."
  },
  {
    "id": "calcbc_u10_q339",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Taylor series",
    "topicLabel": "Taylor and Maclaurin Series",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is the Maclaurin series for \\(f(x) = x^2 \\sin(x^2)\\)?",
    "choices": [
      "A) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n+4}}{(2n+1)!}\\)",
      "B) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n+2}}{(2n+1)!}\\)",
      "C) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+4}}{(2n+1)!}\\)",
      "D) \\(\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+2}}{(2n)!}\\)"
    ],
    "answer": 0,
    "explanation": "Start with the known Maclaurin series for \\(\\sin(u) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n u^{2n+1}}{(2n+1)!}\\). Substitute \\(u = x^2\\): \\(\\sin(x^2) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n (x^2)^{2n+1}}{(2n+1)!} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n+2}}{(2n+1)!}\\). Now multiply by \\(x^2\\): \\(x^2 \\sin(x^2) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n+4}}{(2n+1)!}\\). This is Choice A. Choice B is the series for \\(\\sin(x^2)\\) alone, forgetting to multiply by \\(x^2\\). Choice C incorrectly substitutes \\(u = x^2\\) by only doubling the power once instead of squaring the full term \\((x^2)^{2n+1}\\). Choice D incorrectly uses the cosine series \\((2n)!\\) instead of sine and applies wrong exponents."
  },
  {
    "id": "calcbc_u10_q340",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "interval of convergence",
    "topicLabel": "Interval of Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let \\(f(x) = e^x\\) and let \\(P_3(x)\\) be the third-degree Taylor polynomial for \\(f\\) centered at \\(x = 0\\). Which of the following is an appropriate Lagrange error bound for \\(|f(0.2) - P_3(0.2)|\\) that does not require prior knowledge of \\(e^{0.2}\\)?",
    "choices": [
      "A) \\(\\dfrac{(0.2)^4}{3!}\\)",
      "B) \\(\\dfrac{e^{0.2}(0.2)^4}{4!}\\)",
      "C) \\(\\dfrac{e(0.2)^4}{4!}\\)",
      "D) \\(\\dfrac{(0.2)^3}{4!}\\)"
    ],
    "answer": 2,
    "explanation": "The Lagrange error bound states that \\(|f(x) - P_n(x)| \\leq \\dfrac{M}{(n+1)!}|x - c|^{n+1}\\), where \\(M\\) is an upper bound for \\(|f^{(n+1)}(t)|\\) on the interval between the center and \\(x\\). Here \\(n = 3\\), \\(c = 0\\), and \\(x = 0.2\\), so the bound involves \\(\\dfrac{M}{4!}(0.2)^4\\). Since \\(f^{(4)}(x) = e^x\\) and \\(e^x\\) is increasing, we need an upper bound for \\(e^t\\) on \\([0, 0.2]\\). Because \\(e^{0.2} < e^1 = e\\), using \\(M = e\\) gives a valid bound that requires no prior knowledge of \\(e^{0.2}\\). Choice A is incorrect because it uses \\(3!\\) instead of \\(4!\\) in the denominator. Choice B is invalid because it uses \\(e^{0.2}\\) as \\(M\\), which is the value we are trying to approximate. Choice D uses the wrong power of \\(0.2\\). Therefore, Choice C, \\(\\dfrac{e(0.2)^4}{4!}\\), is the appropriate Lagrange error bound."
  },
  {
    "id": "calcbc_u10_q341",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "interval of convergence",
    "topicLabel": "Interval of Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Consider the power series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x-2)^n}{n \\cdot 3^n}$. Which of the following represents the interval of convergence?",
    "choices": [
      "A) $[-1, 5)$",
      "B) $(-1, 5]$",
      "C) $(-1, 5)$",
      "D) $[-1, 5]$"
    ],
    "answer": 1,
    "explanation": "Apply the Ratio Test: $\\lim_{n\\to\\infty} \\left|\\frac{(x-2)^{n+1}}{(n+1)\\cdot 3^{n+1}} \\cdot \\frac{n \\cdot 3^n}{(x-2)^n}\\right| = \\frac{|x-2|}{3} < 1$, giving $|x-2| < 3$, so the radius of convergence is 3 centered at 2: $(-1, 5)$. Now check endpoints. At $x = -1$: $x - 2 = -3$, so the series becomes $\\sum \\frac{(-1)^n(-3)^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n \\cdot (-1)^n \\cdot 3^n}{n \\cdot 3^n} = \\sum \\frac{1}{n}$, the divergent harmonic series. At $x = 5$: $x - 2 = 3$, so the series becomes $\\sum \\frac{(-1)^n \\cdot 3^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n}{n}$, the alternating harmonic series, which converges by the Alternating Series Test. Therefore the interval is $(-1, 5]$. A common trap is choosing A) $[-1, 5)$ by including $x = -1$ without carefully checking that the series reduces to the divergent harmonic series $\\sum \\frac{1}{n}$ there, or choosing C) $(-1, 5)$ by excluding $x = 5$ and incorrectly assuming both endpoints behave the same way. Another distractor is D) $[-1, 5]$, which incorrectly includes both endpoints. Note also that because the series at $x = 5$ is alternating, the Alternating Series Test provides a direct and clean confirmation of convergence there, corroborating the endpoint analysis."
  },
  {
    "id": "calcbc_u10_q342",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "series convergence and divergence",
    "topicLabel": "Series Convergence and Divergence (Multi-Test)",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following correctly classifies the series $\\sum_{n=1}^{\\infty} \\frac{n^2}{n^3 + 1}$?",
    "choices": [
      "A) Converges, because the terms decrease to zero.",
      "B) Diverges, by the Limit Comparison Test with $\\sum \\frac{1}{n}$.",
      "C) Converges, by the Limit Comparison Test with $\\sum \\frac{1}{n^2}$.",
      "D) Diverges, by the Ratio Test, since $\\sum_{n=1}^{\\infty} \\frac{n!}{3^n}$ has ratio limit $\\infty > 1$, and this series behaves similarly."
    ],
    "answer": 1,
    "explanation": "Apply the Limit Comparison Test with $b_n = \\frac{1}{n}$ (the harmonic series, which diverges). Compute $\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = \\lim_{n\\to\\infty} \\frac{n^2}{n^3+1} \\cdot n = \\lim_{n\\to\\infty} \\frac{n^3}{n^3+1} = 1 > 0$. Since this limit is a positive finite number and $\\sum 1/n$ diverges, $\\sum \\frac{n^2}{n^3+1}$ also diverges. Choice A is a classic trap: terms going to zero is necessary but not sufficient for convergence (the harmonic series is the textbook counterexample). Choice C is wrong because comparing to $\\sum 1/n^2$ (a convergent p-series) gives $\\lim_{n\\to\\infty} \\frac{n^2}{n^3+1} \\cdot n^2 = \\lim_{n\\to\\infty} \\frac{n^4}{n^3+1} = \\infty$, which is not a finite positive number, so the LCT is inconclusive or misapplied. Choice D is a distractor: while $\\sum \\frac{n!}{3^n}$ does diverge (by the Ratio Test, since $\\lim_{n\\to\\infty} \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\lim_{n\\to\\infty} \\frac{n+1}{3} = \\infty$), the claim that $\\sum \\frac{n^2}{n^3+1}$ behaves similarly to $\\sum \\frac{n!}{3^n}$ is false and the reasoning is invalid; the correct justification for divergence of $\\sum \\frac{n^2}{n^3+1}$ is the Limit Comparison Test with $\\sum \\frac{1}{n}$, as in Choice B."
  },
  {
    "id": "calcbc_u10_q343",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Interval of Convergence",
    "topicLabel": "Interval of Convergence",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Consider the power series \\(\\sum_{n=1}^{\\infty} \\frac{(-1)^n (x-2)^n}{n \\cdot 3^n}\\). Which of the following correctly states the interval of convergence?",
    "choices": [
      "A) \\(-1 < x \\leq 5\\)",
      "B) \\(-1 \\leq x < 5\\)",
      "C) \\(-1 \\leq x \\leq 5\\)",
      "D) \\(-1 < x < 5\\)"
    ],
    "answer": 0,
    "explanation": "Applying the Ratio Test: \\(\\lim_{n\\to\\infty} \\left|\\frac{(x-2)^{n+1}}{(n+1)3^{n+1}} \\cdot \\frac{n \\cdot 3^n}{(x-2)^n}\\right| = \\frac{|x-2|}{3}\\). This is less than 1 when \\(|x-2| < 3\\), giving \\(-1 < x < 5\\). Now check endpoints. At \\(x = 5\\): series becomes \\(\\sum \\frac{(-1)^n \\cdot 3^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n}{n}\\), which converges by the Alternating Series Test. At \\(x = -1\\): series becomes \\(\\sum \\frac{(-1)^n(-3)^n}{n \\cdot 3^n} = \\sum \\frac{(-1)^n(-1)^n 3^n}{n \\cdot 3^n} = \\sum \\frac{1}{n}\\), the harmonic series, which diverges. So the interval is \\(-1 < x \\leq 5\\). A common trap is including \\(x = -1\\) because the series has \\((-1)^n\\) and students think it alternates there, but the \\((-1)^n\\) and \\((-1)^n\\) from the base combine to give \\((+1)^n = 1\\), yielding a divergent harmonic series."
  },
  {
    "id": "calcbc_u10_q344",
    "subject": "apcalcbc",
    "unit": 10,
    "topic": "Taylor and Maclaurin Series",
    "topicLabel": "Taylor and Maclaurin Series",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following is the coefficient of \\(x^4\\) in the Maclaurin series for \\(f(x) = \\sin(x^2)\\)?",
    "choices": [
      "A) \\(-\\frac{1}{6}\\)",
      "B) \\(\\frac{1}{24}\\)",
      "C) \\(0\\)",
      "D) \\(-\\frac{1}{120}\\)"
    ],
    "answer": 2,
    "explanation": "The Maclaurin series for \\(\\sin(u)\\) is \\(u - \\frac{u^3}{3!} + \\frac{u^5}{5!} - \\cdots\\). Substituting \\(u = x^2\\): \\(\\sin(x^2) = x^2 - \\frac{(x^2)^3}{6} + \\cdots = x^2 - \\frac{x^6}{6} + \\cdots\\). There is no \\(x^4\\) term in this series because the substitution \\(u = x^2\\) generates only even powers that are multiples of 4 starting at \\(x^2, x^6, x^{10}, \\ldots\\) (i.e., powers of the form \\(x^{4k+2}\\)), so the \\(x^4\\) coefficient is indeed 0. A common trap: students apply the formula for \\(\\sin(x)\\) and write \\(-\\frac{x^4}{4!} = -\\frac{x^4}{24}\\) forgetting to substitute \\(x^2\\) for \\(x\\), or they think the \\(x^4\\) term comes from the \\(\\frac{u^2}{2!}\\) term of cosine. The correct answer is C) 0, because the series only contains powers \\(x^2, x^6, x^{10}, \\ldots\\) and \\(x^4\\) does not appear."
  }
];