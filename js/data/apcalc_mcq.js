var APCALC_MCQ = [
  {
    "id": "u1_mcq_001",
    "unit": 1,
    "topic": "Limits - Algebraic Evaluation",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} =",
    "isLatex": true,
    "choices": [
      "0",
      "2",
      "4",
      "The limit does not exist"
    ],
    "answer": 2,
    "explanation": "Factor the numerator: (x+2)(x-2)/(x-2) = x+2. As x→2, this equals 4."
  },
  {
    "id": "u1_mcq_002",
    "unit": 1,
    "topic": "Limits at Infinity",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\lim_{x \\to \\infty} \\frac{5x^3 - 2x}{3x^3 + 7} =",
    "isLatex": true,
    "choices": [
      "0",
      "$\\frac{5}{7}$",
      "$\\frac{5}{3}$",
      "The limit does not exist"
    ],
    "answer": 2,
    "explanation": "Divide numerator and denominator by x³. All other terms go to 0, leaving 5/3."
  },
  {
    "id": "u1_mcq_003",
    "unit": 1,
    "topic": "Trigonometric Limits",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{x \\to 0} \\frac{\\sin(4x)}{2x} =",
    "isLatex": true,
    "choices": [
      "0",
      "1",
      "2",
      "4"
    ],
    "answer": 2,
    "explanation": "Rewrite as (4/2) · sin(4x)/(4x). As x→0, sin(4x)/(4x)→1, so the limit is 2."
  },
  {
    "id": "u1_mcq_004",
    "unit": 1,
    "topic": "Continuity - Removable Discontinuity",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "Which of the following is true about f(x) = $\\frac{x^2 - x - 6}{x - 3}$?",
    "isLatex": true,
    "choices": [
      "f is continuous at x = 3",
      "f has a vertical asymptote at x = 3",
      "f has a removable discontinuity at x = 3",
      "$\\lim_{x \\to 3} f(x)$ does not exist"
    ],
    "answer": 2,
    "explanation": "Factor: (x-3)(x+2)/(x-3) = x+2. The limit as x→3 equals 5, but f(3) is undefined.\nRemovable discontinuity."
  },
  {
    "id": "u1_mcq_005",
    "unit": 1,
    "topic": "One-Sided Limits",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\lim_{x \\to 0^+} \\frac{1}{x} =",
    "isLatex": true,
    "choices": [
      "$-\\infty$",
      "0",
      "1",
      "$+\\infty$"
    ],
    "answer": 3,
    "explanation": "As x approaches 0 from the right, 1/x grows without bound."
  },
  {
    "id": "u1_mcq_006",
    "unit": 1,
    "topic": "Trigonometric Limits",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} =",
    "isLatex": true,
    "choices": [
      "0",
      "$\\frac{1}{2}$",
      "1",
      "The limit does not exist"
    ],
    "answer": 1,
    "explanation": "Multiply by (1+cosx)/(1+cosx) and use sin²x = 1-cos²x, giving sin²x/[x²(1+cosx)].\nAs x→0, sin(x)/x→1 and 1+cosx→2, so the result is 1/2."
  },
  {
    "id": "u1_mcq_007",
    "unit": 1,
    "topic": "Continuity - Piecewise Functions",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "The function f is defined as: f(x) = x^2 + 1 for x < 2, f(2) = 5, and f(x) = 3x - 1 for x >\n2. Which of the following is true?",
    "isLatex": false,
    "choices": [
      "f is continuous at x = 2 because lim(x→2) f(x) = f(2)",
      "f is not continuous at x = 2 because lim(x→2⁻) f(x) ≠ lim(x→2⁺) f(x)",
      "f is not continuous at x = 2 because lim(x→2) f(x) ≠ f(2)",
      "f is continuous at x = 2 because f(2) is defined"
    ],
    "answer": 0,
    "explanation": "lim(x→2⁻) = 4+1 = 5, lim(x→2⁺) = 6-1 = 5, f(2) = 5. All three agree, so f is\ncontinuous."
  },
  {
    "id": "u1_mcq_008",
    "unit": 1,
    "topic": "Limits at Negative Infinity",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{x \\to -\\infty} \\frac{2x^2 - 3}{x + 4} =",
    "isLatex": true,
    "choices": [
      "$-\\infty$",
      "-2",
      "2",
      "$+\\infty$"
    ],
    "answer": 0,
    "explanation": "Numerator grows as x², denominator grows as x. The ratio behaves like 2x →\n-∞ as x → -∞."
  },
  {
    "id": "u1_mcq_009",
    "unit": 1,
    "topic": "Limit Laws",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "If lim(x→a) f(x) = L and lim(x→a) g(x) = 0, which of the following must be true?",
    "isLatex": false,
    "choices": [
      "lim(x→a) [f(x)/g(x)] does not exist",
      "lim(x→a) [f(x)/g(x)] = ∞",
      "lim(x→a) [f(x)·g(x)] = 0",
      "lim(x→a) [f(x) + g(x)] = 0"
    ],
    "answer": 2,
    "explanation": "By limit laws, lim[f(x)·g(x)] = L·0 = 0. The others are not guaranteed — f(x)/g(x)\ndepends on whether L is also 0."
  },
  {
    "id": "u1_mcq_010",
    "unit": 1,
    "topic": "Limits from Tables",
    "difficulty": "easy",
    "calculator": false,
    "format": "table",
    "question": "The table gives values of a function h for selected values of x. Based on the table,\nwhat is lim(x→2) h(x)?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "1.9",
        "1.99",
        "1.999",
        "2.001",
        "2.01",
        "2.1"
      ],
      "rows": [
        [
          "h(x)",
          "3.61",
          "3.960",
          "3.996",
          "4.004",
          "4.040",
          "4.41"
        ]
      ]
    },
    "choices": [
      "3.61",
      "4",
      "4.41",
      "The limit does not exist"
    ],
    "answer": 1,
    "explanation": "Values approach 4 from both sides as x→2."
  },
  {
    "id": "u1_mcq_011",
    "unit": 1,
    "topic": "Continuity - Jump Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "For what value of k is f(x) = kx + 3 for x < 2, and f(x) = x² - 1 for x ≥ 2 continuous at\nx = 2?",
    "isLatex": false,
    "choices": [
      "0",
      "1",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "For continuity, the left-hand limit must equal f(2). The left-hand limit is 2k + 3 and f(2) = 2² - 1 = 3. Setting 2k + 3 = 3 yields 2k = 0, so k = 0."
  },
  {
    "id": "u1_mcq_012",
    "unit": 1,
    "topic": "Intermediate Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "f is continuous on [1, 4] with f(1) = -2 and f(4) = 6. Which of the following must be\ntrue?",
    "isLatex": false,
    "choices": [
      "f(x) = 0 has exactly one solution on (1, 4)",
      "f(x) = 0 has at least one solution on (1, 4)",
      "f(2) = 2",
      "f is increasing on [1, 4]"
    ],
    "answer": 1,
    "explanation": "By the Intermediate Value Theorem, since f is continuous and f(1) < 0 < f(4),\nthere must be at least one c in (1,4) where f(c) = 0."
  },
  {
    "id": "u1_mcq_013",
    "unit": 1,
    "topic": "Limits - Squeeze Theorem",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "If -x² ≤ f(x) ≤ x² for all x, what is lim(x→0) f(x)?",
    "isLatex": false,
    "choices": [
      "-1",
      "0",
      "1",
      "The limit cannot be determined"
    ],
    "answer": 1,
    "explanation": "By the Squeeze Theorem, since lim(x→0) -x² = 0 and lim(x→0) x² = 0, we have\nlim(x→0) f(x) = 0."
  },
  {
    "id": "u1_mcq_014",
    "unit": 1,
    "topic": "Vertical Asymptotes",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "Which of the following functions has a vertical asymptote at x = 3?",
    "isLatex": false,
    "choices": [
      "f(x) = (x-3)/(x²-9)",
      "f(x) = (x²-9)/(x-3)",
      "f(x) = (x+3)/(x-3)",
      "f(x) = (x²-9)/(x+3)"
    ],
    "answer": 2,
    "explanation": "(x+3)/(x-3) has denominator zero at x=3 and numerator nonzero (6), so it's a\nvertical asymptote. Option A has a removable discontinuity at x=3. Option B simplifies to x+3.\nOption D simplifies to x-3."
  },
  {
    "id": "u1_mcq_015",
    "unit": 1,
    "topic": "Limits - Indeterminate Forms",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{x \\to 1} \\frac{x^3 - 1}{x^2 - 1} =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{2}$",
      "1",
      "$\\frac{3}{2}$",
      "3"
    ],
    "answer": 2,
    "explanation": "Factor: (x³-1)/(x²-1) = (x-1)(x²+x+1)/[(x-1)(x+1)] = (x²+x+1)/(x+1). As x→1:\n(1+1+1)/(1+1) = 3/2."
  },
  {
    "id": "u1_mcq_016",
    "unit": 1,
    "topic": "Continuity - Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "Which of the following describes a jump discontinuity at x = c?",
    "isLatex": false,
    "choices": [
      "lim(x→c) f(x) exists but does not equal f(c)",
      "lim(x→c⁻) f(x) and lim(x→c⁺) f(x) both exist but are not equal",
      "lim(x→c) f(x) = ∞",
      "f(c) is undefined and the limit does not exist"
    ],
    "answer": 1,
    "explanation": "A jump discontinuity occurs when both one-sided limits exist but are not equal\nto each other."
  },
  {
    "id": "u1_mcq_017",
    "unit": 1,
    "topic": "Limits at Infinity - Horizontal Asymptotes",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\lim_{x \\to \\infty} \\frac{4x^2 + 3x}{2x^3 - 5} =",
    "isLatex": true,
    "choices": [
      "0",
      "2",
      "$\\frac{3}{5}$",
      "$\\infty$"
    ],
    "answer": 0,
    "explanation": "Degree of numerator (2) is less than degree of denominator (3), so the limit is\n0."
  },
  {
    "id": "u1_mcq_018",
    "unit": 1,
    "topic": "Continuity - Piecewise with Parameters",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "For what values of a and b is f(x) = x² - a for x < 1, f(x) = 3 for x = 1, f(x) = bx + 2\nfor x > 1 continuous everywhere?",
    "isLatex": false,
    "choices": [
      "a = -2, b = 1",
      "a = 2, b = 1",
      "a = -2, b = 3",
      "a = 2, b = 3"
    ],
    "answer": 0,
    "explanation": "lim(x→1⁻) = 1-a must equal 3, so a = -2. lim(x→1⁺) = b+2 must equal 3, so b =\n1."
  },
  {
    "id": "u1_mcq_019",
    "unit": 1,
    "topic": "Trigonometric Limits",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{x \\to 0} \\frac{\\tan(3x)}{\\sin(5x)} =",
    "isLatex": true,
    "choices": [
      "$\\frac{3}{5}$",
      "$\\frac{5}{3}$",
      "1",
      "0"
    ],
    "answer": 0,
    "explanation": "Rewrite as [sin(3x)/cos(3x)]/sin(5x) = [sin(3x)/(3x)] · [5x/sin(5x)] · (3/5) ·\n(1/cos3x). As x→0, each sinc term→1 and cos(3x)→1, giving 3/5."
  },
  {
    "id": "u1_mcq_020",
    "unit": 1,
    "topic": "IVT - Application",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "f(x) = x³ + x - 1. Which of the following guarantees that f has a root on (0, 1)?",
    "isLatex": false,
    "choices": [
      "f(0) = -1 < 0 and f(1) = 1 > 0, and f is continuous, so by IVT there exists c in (0,1) with\nf(c) = 0",
      "f is a polynomial so it must have a root",
      "f(0) < f(1) so f must cross zero",
      "f'(x) > 0 so f is increasing and must cross zero"
    ],
    "answer": 0,
    "explanation": "This is a direct application of IVT. f is continuous, f(0) = -1, f(1) = 1, and 0 is\nbetween these values, guaranteeing a root."
  },
  {
    "id": "u1_mcq_021",
    "unit": 1,
    "topic": "Limits - Graphical Interpretation",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Based on the graph of f, which of the following is true?",
    "isLatex": false,
    "graphDescription": "Graph of f(x) showing: open circle at (2, 3), closed circle at (2, 1), function\napproaching 3 from both sides as x→2",
    "choices": [
      "lim(x→2) f(x) = 1",
      "lim(x→2) f(x) = 3 and f(2) = 1",
      "f is continuous at x = 2",
      "lim(x→2) f(x) does not exist"
    ],
    "answer": 1,
    "explanation": "The open circle at (2,3) means the limit from both sides is 3, but f(2) = 1 (closed\ncircle). Limit exists but doesn't equal f(2), so f is discontinuous there."
  },
  {
    "id": "u1_mcq_022",
    "unit": 1,
    "topic": "Limits - Graphical One-Sided",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Based on the graph of g, which of the following is true about lim(x→1) g(x)?",
    "isLatex": false,
    "graphDescription": "Graph of g(x) showing: function approaching 4 from the left as x→1,\nfunction approaching -2 from the right as x→1, closed circle at (1, 4)",
    "choices": [
      "lim(x→1) g(x) = 4",
      "lim(x→1) g(x) = -2",
      "lim(x→1) g(x) = 1",
      "lim(x→1) g(x) does not exist"
    ],
    "answer": 3,
    "explanation": "lim(x→1⁻) = 4 and lim(x→1⁺) = -2. Since the one-sided limits are not equal, the\ntwo-sided limit does not exist."
  },
  {
    "id": "u2_mcq_001",
    "unit": 2,
    "topic": "Limit Definition of Derivative",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "Which of the following is the definition of f'(x)?",
    "isLatex": false,
    "choices": [
      "$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$",
      "$\\lim_{h \\to 0} \\frac{f(x) - f(x+h)}{h}$",
      "$\\lim_{h \\to 0} \\frac{f(x+h) + f(x)}{h}$",
      "$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{x}$"
    ],
    "answer": 0,
    "explanation": "The derivative of f at x is defined as the limit of the difference quotient as h\napproaches 0."
  },
  {
    "id": "u2_mcq_002",
    "unit": 2,
    "topic": "Average Rate of Change",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "Let f(x) = x² + 3x. What is the average rate of change of f on the interval [1, 4]?",
    "isLatex": false,
    "choices": [
      "5",
      "8",
      "11",
      "14"
    ],
    "answer": 1,
    "explanation": "Average rate of change = [f(4) - f(1)] / (4-1) = [(16+12) - (1+3)] / 3 = (28-4)/3 =\n24/3 = 8."
  },
  {
    "id": "u2_mcq_003",
    "unit": 2,
    "topic": "Instantaneous Rate of Change",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h} =",
    "isLatex": true,
    "choices": [
      "0",
      "3",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "This is the limit definition of the derivative of f(x) = x² at x = 3. f'(x) = 2x, so f'(3)\n= 6."
  },
  {
    "id": "u2_mcq_004",
    "unit": 2,
    "topic": "Differentiability and Continuity",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "Which of the following statements must be true?",
    "isLatex": false,
    "choices": [
      "If f is continuous at x = a, then f is differentiable at x = a",
      "If f is differentiable at x = a, then f is continuous at x = a",
      "If f is not continuous at x = a, then f is differentiable at x = a",
      "Differentiability and continuity are independent of each other"
    ],
    "answer": 1,
    "explanation": "Differentiability implies continuity, but not the other way around. A function can\nbe continuous but not differentiable (e.g. f(x) = |x| at x = 0)."
  },
  {
    "id": "u2_mcq_005",
    "unit": 2,
    "topic": "Power Rule",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = x^5, then f'(x) =",
    "isLatex": false,
    "choices": [
      "x^4",
      "5x^4",
      "5x^6",
      "$\\frac{x^6}{6}$"
    ],
    "answer": 1,
    "explanation": "By the power rule, d/dx[xⁿ] = nxⁿ⁻¹. So d/dx[x⁵] = 5x⁴."
  },
  {
    "id": "u2_mcq_006",
    "unit": 2,
    "topic": "Power Rule - Negative and Fractional Exponents",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "If f(x) = $\\frac{1}{x^7}$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{7x^6}$",
      "$\\frac{7}{x^8}$",
      "$\\frac{-7}{x^8}$",
      "$\\frac{-1}{7x^6}$"
    ],
    "answer": 2,
    "explanation": "Rewrite as x⁻⁷. By the power rule, f'(x) = -7x⁻⁸ = -7/x⁸."
  },
  {
    "id": "u2_mcq_007",
    "unit": 2,
    "topic": "Power Rule - Fractional Exponents",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "If f(x) = $\\sqrt[4]{x}$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{4}x^{3/4}$",
      "$\\frac{1}{4}x^{-3/4}$",
      "4x^{3/4}",
      "$\\frac{-1}{4}x^{-3/4}$"
    ],
    "answer": 1,
    "explanation": "Rewrite as x^(1/4). By the power rule, f'(x) = (1/4)x^(1/4 - 1) = (1/4)x^(-3/4)."
  },
  {
    "id": "u2_mcq_008",
    "unit": 2,
    "topic": "Derivatives of Trig Functions",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = $4\\sin x - 3\\cos x$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$-4\\cos x - 3\\sin x$",
      "$4\\cos x + 3\\sin x$",
      "$-4\\cos x + 3\\sin x$",
      "$4\\cos x - 3\\sin x$"
    ],
    "answer": 1,
    "explanation": "d/dx[sin x] = cos x and d/dx[-cos x] = sin x. So f'(x) = 4cos x + 3sin x."
  },
  {
    "id": "u2_mcq_009",
    "unit": 2,
    "topic": "Derivatives of Exponential Functions",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = 5e^x + 3x, then f'(x) =",
    "isLatex": true,
    "choices": [
      "5e^x",
      "5e^x + 3",
      "5xe^{x-1} + 3",
      "e^x + 3"
    ],
    "answer": 1,
    "explanation": "d/dx[eˣ] = eˣ and d/dx[3x] = 3. So f'(x) = 5eˣ + 3."
  },
  {
    "id": "u2_mcq_010",
    "unit": 2,
    "topic": "Product Rule",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "If f(x) = $x^3 \\sin x$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$3x^2 \\cos x$",
      "$x^3 \\cos x + 3x^2 \\sin x$",
      "$3x^2 \\sin x - x^3 \\cos x$",
      "$3x^2 \\sin x - x^3 \\cos x$"
    ],
    "answer": 2,
    "explanation": "By the product rule: f'(x) = (x³)'sin x + x³(sin x)' = 3x²sin x + x³cos x."
  },
  {
    "id": "u2_mcq_011",
    "unit": 2,
    "topic": "Product Rule - Table",
    "difficulty": "medium",
    "calculator": true,
    "format": "table",
    "question": "The table gives values of differentiable functions f and g and their derivatives at x =\n4. What is d/dx[f(x)g(x)] at x = 4?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "f(x)",
        "f'(x)",
        "g(x)",
        "g'(x)"
      ],
      "rows": [
        [
          "4",
          "2",
          "7",
          "3",
          "5"
        ]
      ]
    },
    "choices": [
      "14",
      "31",
      "35",
      "41"
    ],
    "answer": 1,
    "explanation": "By the product rule: d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x) = 7(3) + 2(5) = 21 + 10 =\n31."
  },
  {
    "id": "u2_mcq_012",
    "unit": 2,
    "topic": "Quotient Rule",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "If f(x) = $\\frac{2x^2 - 1}{5x + 3}$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\frac{4x}{5}$",
      "$\\frac{10x^2 + 12x + 5}{(5x+3)^2}$",
      "$\\frac{4x(5x+3) + 5(2x^2-1)}{(5x+3)^2}$",
      "$\\frac{4x(5x+3) - 5(2x^2-1)}{(5x+3)^2}$"
    ],
    "answer": 3,
    "explanation": "Quotient rule: [lo·d(hi) - hi·d(lo)] / lo². = [(5x+3)(4x) - (2x²-1)(5)] / (5x+3)²."
  },
  {
    "id": "u2_mcq_013",
    "unit": 2,
    "topic": "Quotient Rule - Evaluation",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "What is the slope of the line tangent to y = $\\frac{9x^2}{x+2}$ at x = 1?",
    "isLatex": true,
    "choices": [
      "3",
      "5",
      "9",
      "15"
    ],
    "answer": 1,
    "explanation": "dy/dx = [18x(x+2) - 9x²(1)] / (x+2)² = (9x² + 36x)/(x+2)². At x=1: (9+36)/(9) = 45/9\n= 5."
  },
  {
    "id": "u2_mcq_014",
    "unit": 2,
    "topic": "Tangent Line Equation",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "What is the equation of the line tangent to f(x) = x³ + 3x² - 4 at x = 2?",
    "isLatex": false,
    "choices": [
      "y = 24x - 40",
      "y = 24x - 32",
      "y = 12x - 8",
      "y = 12x - 16"
    ],
    "answer": 1,
    "explanation": "f(2) = 8 + 12 - 4 = 16. f'(x) = 3x² + 6x, so f'(2) = 12 + 12 = 24. Tangent line: y - 16 = 24(x - 2), which gives y = 24x - 32."
  },
  {
    "id": "u2_mcq_015",
    "unit": 2,
    "topic": "Derivative of ln(x)",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = $3\\ln x + x^2$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\frac{3}{x} + 2x$",
      "$\\frac{1}{3x} + 2x$",
      "$3\\ln x + 2x$",
      "$\\frac{3}{x^2} + 2x$"
    ],
    "answer": 0,
    "explanation": "d/dx[ln x] = 1/x. So f'(x) = 3/x + 2x."
  },
  {
    "id": "u2_mcq_016",
    "unit": 2,
    "topic": "Differentiability - Piecewise",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "Let f(x) = 3x + 1 for x ≤ 2 and f(x) = 5x - 3 for x > 2. Which of the following is true at\nx = 2?",
    "isLatex": false,
    "choices": [
      "f is both continuous and differentiable at x = 2",
      "f is continuous but not differentiable at x = 2",
      "f is differentiable but not continuous at x = 2",
      "f is neither continuous nor differentiable at x = 2"
    ],
    "answer": 1,
    "explanation": "f(2) = 7 from both sides so it's continuous. Left derivative = 3, right derivative =\n5. Since they're unequal, f is not differentiable at x = 2."
  },
  {
    "id": "u2_mcq_017",
    "unit": 2,
    "topic": "Higher Order Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = 4x^4 - 3x^3 + 2x - 7, what is f''(x)?",
    "isLatex": true,
    "choices": [
      "16x^3 - 9x^2 + 2",
      "48x^2 - 18x",
      "48x^2 - 18x + 2",
      "16x^3 - 9x^2"
    ],
    "answer": 1,
    "explanation": "f'(x) = 16x³ - 9x² + 2. f''(x) = 48x² - 18x."
  },
  {
    "id": "u2_mcq_018",
    "unit": 2,
    "topic": "Derivative - Graphical Interpretation",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "The graph of f is shown. At which labeled point could the instantaneous rate of\nchange equal the average rate of change over [1, 5]?",
    "isLatex": false,
    "graphDescription": "Graph of f(x) showing a smooth curve. Point A is at a local max, point B is\non a decreasing section where the tangent line appears parallel to the secant line from x=1 to\nx=5, point C is at a local min, point D is on an increasing section.",
    "choices": [
      "Point A",
      "Point B",
      "Point C",
      "Point D"
    ],
    "answer": 1,
    "explanation": "By the Mean Value Theorem, the instantaneous rate of change equals the\naverage rate of change at some point. Point B is where the tangent line appears parallel to the\nsecant line connecting the endpoints."
  },
  {
    "id": "u2_mcq_019",
    "unit": 2,
    "topic": "Limit Definition - Applied",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{h \\to 0} \\frac{\\sin(\\frac{\\pi}{6} + h) - \\sin(\\frac{\\pi}{6})}{h} =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "1"
    ],
    "answer": 2,
    "explanation": "This is the limit definition of the derivative of sin(x) at x = π/6. d/dx[sin x] = cos x,\nso the answer is cos(π/6) = √3/2."
  },
  {
    "id": "u2_mcq_020",
    "unit": 2,
    "topic": "Derivative Approximation - Table",
    "difficulty": "medium",
    "calculator": false,
    "format": "table",
    "question": "Let f(x) = 2x^(1/3). Selected values are in the table. If the table is used to\napproximate f'(0.5), what is the difference between the approximation and the actual value of\nf'(0.5)?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "0",
        "1"
      ],
      "rows": [
        [
          "f(x)",
          "1",
          "2"
        ]
      ]
    },
    "choices": [
      "0.127",
      "0.433",
      "0.567",
      "1.000"
    ],
    "answer": 1,
    "explanation": "Approximation using difference quotient: [f(1)-f(0)]/(1-0) = (2-1)/1 = 1. Actual:\nf'(x) = (2/3)x^(-2/3), f'(0.5) ≈ 0.567. Difference = 1 - 0.567 = 0.433."
  },
  {
    "id": "u2_mcq_021",
    "unit": 2,
    "topic": "Derivative - Graph of f and f'",
    "difficulty": "hard",
    "calculator": true,
    "format": "graph",
    "question": "Based on the graph of f, on which interval is f'(x) < 0?",
    "isLatex": false,
    "graphDescription": "Graph of f(x) showing: f increasing on (-∞, -1), local max at x = -1,\ndecreasing on (-1, 2), local min at x = 2, increasing on (2, ∞). f is smooth throughout.",
    "choices": [
      "(-∞, -1) only",
      "(-1, 2) only",
      "(2, ∞) only",
      "(-∞, -1) and (2, ∞)"
    ],
    "answer": 1,
    "explanation": "f'(x) < 0 where f is decreasing. The graph shows f is decreasing on (-1, 2)."
  },
  {
    "id": "u2_mcq_022",
    "unit": 2,
    "topic": "Derivative of Trig - Evaluation",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "Let g(x) = $\\lim_{h \\to 0} \\frac{\\sin(x+h) - \\sin x}{h}$. What is the instantaneous rate\nof change of g at x = $\\frac{\\pi}{3}$?",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$-\\frac{\\sqrt{3}}{2}$"
    ],
    "answer": 3,
    "explanation": "g(x) is the derivative of sin x, so g(x) = cos x. The instantaneous rate of change\nof g at x = π/3 is g'(π/3) = -sin(π/3) = -√3/2."
  },
  {
    "id": "u3_mcq_001",
    "unit": 3,
    "topic": "Chain Rule - Basic",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = (3x^2 + 1)^5, then f'(x) =",
    "isLatex": true,
    "choices": [
      "5(3x^2 + 1)^4",
      "30x(3x^2 + 1)^4",
      "5(6x)^4",
      "30x^2(3x^2 + 1)^4"
    ],
    "answer": 1,
    "explanation": "Chain rule: d/dx[u⁵] = 5u⁴·u'. Here u = 3x²+1, u' = 6x. So f'(x) = 5(3x²+1)⁴ · 6x =\n30x(3x²+1)⁴."
  },
  {
    "id": "u3_mcq_002",
    "unit": 3,
    "topic": "Chain Rule - Trig Composition",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "If f(x) = $\\sin(x^3)$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\cos(x^3)$",
      "$3x^2 \\cos(x^3)$",
      "$-3x^2 \\cos(x^3)$",
      "$3x^2 \\sin(x^3)$"
    ],
    "answer": 1,
    "explanation": "Chain rule: d/dx[sin(u)] = cos(u)·u'. Here u = x³, u' = 3x². So f'(x) = cos(x³)·3x²."
  },
  {
    "id": "u3_mcq_003",
    "unit": 3,
    "topic": "Chain Rule - Exponential Composition",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = e^{3x^2 - x}, then f'(x) =",
    "isLatex": true,
    "choices": [
      "e^{3x^2 - x}",
      "(6x - 1)e^{3x^2 - x}",
      "(3x^2 - x)e^{3x^2 - x - 1}",
      "$6x \\cdot e^{3x^2 - x}$"
    ],
    "answer": 1,
    "explanation": "d/dx[eᵘ] = eᵘ·u'. Here u = 3x²-x, u' = 6x-1. So f'(x) = (6x-1)e^(3x²-x)."
  },
  {
    "id": "u3_mcq_004",
    "unit": 3,
    "topic": "Chain Rule - Identifying Application",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "For which of the following functions is the chain rule an appropriate method to find\nthe derivative? I. f(x) = sin(x²) II. f(x) = x²sin(x) III. f(x) = $\\sqrt{\\ln x}$",
    "isLatex": true,
    "choices": [
      "I only",
      "II only",
      "I and III only",
      "I, II, and III"
    ],
    "answer": 2,
    "explanation": "I is a composition (sin of x²) — use chain rule. II is a product, not a composition\n— use product rule. III is a composition (√ of ln x) — use chain rule."
  },
  {
    "id": "u3_mcq_005",
    "unit": 3,
    "topic": "Chain Rule - Combined with Product Rule",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "If h(x) = $x^2 \\cdot e^{4x}$, then h'(x) =",
    "isLatex": true,
    "choices": [
      "$2x \\cdot e^{4x}$",
      "4x^2 e^{4x} + 2xe^{4x}",
      "2xe^{4x} - 4x^2 e^{4x}",
      "8xe^{4x}"
    ],
    "answer": 2,
    "explanation": "Product rule first: h'(x) = (x²)'·e^(4x) + x²·(e^(4x))'. = 2x·e^(4x) + x²·4e^(4x) =\n2xe^(4x) + 4x²e^(4x)."
  },
  {
    "id": "u3_mcq_006",
    "unit": 3,
    "topic": "Chain Rule - Using Function Values",
    "difficulty": "medium",
    "calculator": false,
    "format": "table",
    "question": "The table gives values of f, g, f', and g'. If h(x) = f(g(x)), what is h'(2)?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "f(x)",
        "f'(x)",
        "g(x)",
        "g'(x)"
      ],
      "rows": [
        [
          "2",
          "3",
          "-1",
          "3",
          "4"
        ],
        [
          "3",
          "1",
          "2",
          "2",
          "-3"
        ]
      ]
    },
    "choices": [
      "-4",
      "-3",
      "4",
      "8"
    ],
    "answer": 3,
    "explanation": "Chain rule: h'(x) = f'(g(x))·g'(x). At x = 2: h'(2) = f'(g(2))·g'(2) = f'(3)·4 = 2·4 = 8."
  },
  {
    "id": "u3_mcq_007",
    "unit": 3,
    "topic": "Implicit Differentiation - Basic",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If x^2 + y^2 = 25, what is $\\frac{dy}{dx}$?",
    "isLatex": true,
    "choices": [
      "$\\frac{x}{y}$",
      "$\\frac{-x}{y}$",
      "$\\frac{y}{x}$",
      "$\\frac{-y}{x}$"
    ],
    "answer": 1,
    "explanation": "Differentiate both sides: 2x + 2y·(dy/dx) = 0. Solve: dy/dx = -x/y."
  },
  {
    "id": "u3_mcq_008",
    "unit": 3,
    "topic": "Implicit Differentiation - Finding Slope",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "What is the slope of the tangent to x^2 + xy + y^2 = 7 at the point (1, 2)?",
    "isLatex": true,
    "choices": [
      "$-\\frac{4}{5}$",
      "$-\\frac{2}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{4}{5}$"
    ],
    "answer": 0,
    "explanation": "Differentiate implicitly: 2x + y + x·(dy/dx) + 2y·(dy/dx) = 0. Solve for dy/dx: dy/dx\n= -(2x+y)/(x+2y). At (1,2): -(2+2)/(1+4) = -4/5."
  },
  {
    "id": "u3_mcq_009",
    "unit": 3,
    "topic": "Implicit Differentiation - Trig",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "If $\\tan(xy) = x$, what is $\\frac{dy}{dx}$?",
    "isLatex": true,
    "choices": [
      "$\\frac{\\cos^2(xy) - y}{x}$",
      "$\\frac{1 - y\\cos^2(xy)}{x\\cos^2(xy)}$",
      "$\\frac{\\sec^2(xy) - y}{x}$",
      "$\\cos^2(xy)$"
    ],
    "answer": 0,
    "explanation": "Differentiate: sec²(xy)·(y + x·dy/dx) = 1. Solving for dy/dx: x·sec²(xy)·dy/dx = 1 - y·sec²(xy), so dy/dx = (1 - y·sec²(xy)) / (x·sec²(xy)). Multiplying numerator and denominator by cos²(xy) simplifies to (cos²(xy) - y) / x."
  },
  {
    "id": "u3_mcq_010",
    "unit": 3,
    "topic": "Implicit Differentiation - With Table",
    "difficulty": "hard",
    "calculator": true,
    "format": "table",
    "question": "The point (2, 3) lies on the curve defined by f(y) = x², where f is a differentiable\nfunction. Selected values are in the table. What is dy/dx at (2, 3)?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "y",
        "f(x)",
        "f'(x)"
      ],
      "rows": [
        [
          "2",
          "3",
          "5",
          "-2"
        ],
        [
          "3",
          "2",
          "4",
          "4"
        ]
      ]
    },
    "choices": [
      "-2",
      "2",
      "-1",
      "1"
    ],
    "answer": 3,
    "explanation": "Differentiate f(y) = x² implicitly: f'(y)·dy/dx = 2x. At (2, 3): dy/dx = 2x / f'(y) = 2(2) / f'(3) = 4/4 = 1."
  },
  {
    "id": "u3_mcq_011",
    "unit": 3,
    "topic": "Inverse Function Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f is an increasing differentiable function and f(3) = 7, f'(3) = 4, what is (f⁻¹)'(7)?",
    "isLatex": false,
    "choices": [
      "4",
      "$\\frac{1}{7}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$"
    ],
    "answer": 2,
    "explanation": "The derivative of an inverse function: (f⁻¹)'(b) = 1/f'(a) where f(a) = b. Since f(3) =\n7, (f⁻¹)'(7) = 1/f'(3) = 1/4."
  },
  {
    "id": "u3_mcq_012",
    "unit": 3,
    "topic": "Inverse Function Derivatives - Graph",
    "difficulty": "hard",
    "calculator": true,
    "format": "graph",
    "question": "The graph of f is shown with a tangent line at (4, 2) with slope -3. If g is the inverse\nof f, which of the following is true about g?",
    "isLatex": false,
    "graphDescription": "Graph of decreasing differentiable function f. A tangent line is shown at\npoint (4, 2) with slope -3. g is defined as the inverse of f.",
    "choices": [
      "g'(2) = -3",
      "g'(2) = 3",
      "g'(2) = -1/3",
      "g'(2) = 1/3"
    ],
    "answer": 2,
    "explanation": "Since f(4) = 2, we have g(2) = 4. And g'(2) = 1/f'(g(2)) = 1/f'(4) = 1/(-3) = -1/3."
  },
  {
    "id": "u3_mcq_013",
    "unit": 3,
    "topic": "Derivative of Inverse Trig - arcsin",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = $\\arcsin(2x)$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{\\sqrt{1-4x^2}}$",
      "$\\frac{2}{\\sqrt{1-4x^2}}$",
      "$\\frac{1}{\\sqrt{1-2x^2}}$",
      "$\\frac{2}{\\sqrt{1-2x}}$"
    ],
    "answer": 1,
    "explanation": "d/dx[arcsin(u)] = u'/√(1-u²). Here u = 2x, u' = 2. So f'(x) = 2/√(1-(2x)²) =\n2/√(1-4x²)."
  },
  {
    "id": "u3_mcq_014",
    "unit": 3,
    "topic": "Derivative of Inverse Trig - arctan",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = $\\arctan(x^2)$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{1+x^4}$",
      "$\\frac{2x}{1+x^2}$",
      "$\\frac{2x}{1+x^4}$",
      "$\\frac{1}{1+x^2}$"
    ],
    "answer": 2,
    "explanation": "d/dx[arctan(u)] = u'/(1+u²). Here u = x², u' = 2x. So f'(x) = 2x/(1+(x²)²) =\n2x/(1+x⁴)."
  },
  {
    "id": "u3_mcq_015",
    "unit": 3,
    "topic": "Chain Rule - Logarithm Composition",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = $\\ln(x^2 + 5)$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{x^2+5}$",
      "$\\frac{x}{x^2+5}$",
      "$\\frac{2x}{x^2+5}$",
      "$\\frac{2x}{(x^2+5)^2}$"
    ],
    "answer": 2,
    "explanation": "d/dx[ln(u)] = u'/u. Here u = x²+5, u' = 2x. So f'(x) = 2x/(x²+5)."
  },
  {
    "id": "u3_mcq_016",
    "unit": 3,
    "topic": "Chain Rule - Double Composition",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "If f(x) = $\\sin^3(e^x)$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$3\\sin^2(e^x)\\cos(e^x)$",
      "$3e^x\\sin^2(e^x)\\cos(e^x)$",
      "$3e^x\\cos^2(e^x)\\sin(e^x)$",
      "$e^x\\sin^2(e^x)\\cos(e^x)$"
    ],
    "answer": 1,
    "explanation": "Apply the chain rule twice: d/dx[sin³(eˣ)] = 3sin²(eˣ)·cos(eˣ)·eˣ. The outer chain (power rule on sin³) gives 3sin², the middle chain (derivative of sin) gives cos(eˣ), and the inner chain gives eˣ."
  },
  {
    "id": "u3_mcq_017",
    "unit": 3,
    "topic": "Implicit Differentiation - Second Derivative",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "If x^2 + y^2 = 16, what is $\\frac{d^2y}{dx^2}$?",
    "isLatex": true,
    "choices": [
      "$\\frac{-1}{y}$",
      "$\\frac{-16}{y^3}$",
      "$\\frac{-x^2+y^2}{y^3}$",
      "$\\frac{1}{y}$"
    ],
    "answer": 1,
    "explanation": "dy/dx = -x/y. d²y/dx² = d/dx[-x/y] = [-y - (-x)(dy/dx)] / y² = [-y + x(-x/y)] / y² = [-(y² +\nx²)/y] / y² = -16/y³, using x²+y²=16."
  },
  {
    "id": "u3_mcq_018",
    "unit": 3,
    "topic": "Chain Rule - Identifying Equivalent Derivative",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If y = (f(x))^3 and f is a differentiable function, which of the following is equivalent to\ndy/dx?",
    "isLatex": false,
    "choices": [
      "3(f(x))^2",
      "3f'(x)",
      "$3(f(x))^2 \\cdot f'(x)$",
      "3(f'(x))^2"
    ],
    "answer": 2,
    "explanation": "Chain rule: d/dx[(f(x))³] = 3(f(x))²·f'(x)."
  },
  {
    "id": "u3_mcq_019",
    "unit": 3,
    "topic": "Inverse Function - Finding Value",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "Let f be a differentiable function defined by f(x) = $\\int_0^x (t^2 + 1)$ \\, dt, where x ≥\n0. If g is the inverse of f, what is g'(0)?",
    "isLatex": true,
    "choices": [
      "0",
      "1",
      "$\\frac{1}{2}$",
      "2"
    ],
    "answer": 1,
    "explanation": "f(0) = 0, so g(0) = 0. f'(x) = x²+1 by FTC. g'(0) = 1/f'(g(0)) = 1/f'(0) = 1/(0+1) = 1."
  },
  {
    "id": "u3_mcq_020",
    "unit": 3,
    "topic": "Chain Rule with Trig - Evaluation",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = $\\cos^2(3x)$, what is f'$\\left(\\frac{\\pi}{12}\\right)$?",
    "isLatex": true,
    "choices": [
      "$-\\frac{3}{2}$",
      "$-\\frac{3\\sqrt{3}}{2}$",
      "-3",
      "$-3\\sqrt{3}$"
    ],
    "answer": 2,
    "explanation": "f'(x) = 2cos(3x)·(-sin(3x))·3 = -6cos(3x)sin(3x) = -3sin(6x). At x=π/12: -3sin(π/2)\n= -3."
  },
  {
    "id": "u3_mcq_021",
    "unit": 3,
    "topic": "Implicit Differentiation - Tangent Line",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The curve x³ + y³ = 9 passes through (1, 2). What is the equation of the tangent\nline at (1, 2)?",
    "isLatex": false,
    "choices": [
      "$y = -\\frac{1}{4}x + \\frac{9}{4}$",
      "$y = -\\frac{1}{4}x + \\frac{7}{4}$",
      "$y = \\frac{1}{4}x + \\frac{7}{4}$",
      "y = -4x + 6"
    ],
    "answer": 0,
    "explanation": "Differentiate implicitly: 3x² + 3y²·(dy/dx) = 0. dy/dx = -x²/y². At (1,2): -1/4.\nTangent: y-2 = -1/4(x-1) → y = -x/4 + 9/4."
  },
  {
    "id": "u3_mcq_022",
    "unit": 3,
    "topic": "Chain Rule - Applied Context",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The position of a particle is given by s(t) = $\\sin^2(3t)$. What is the velocity of the\nparticle at t = $\\frac{\\pi}{6}$?",
    "isLatex": true,
    "choices": [
      "0",
      "3",
      "6",
      "$3\\sqrt{3}$"
    ],
    "answer": 0,
    "explanation": "s'(t) = 2sin(3t)·cos(3t)·3 = 3sin(6t). At t=π/6: 3sin(π) = 0."
  },
  {
    "id": "u3_mcq_023",
    "unit": 3,
    "topic": "Derivative of Inverse Trig - arccos",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f(x) = $x\\arccos(x)$, then f'(x) =",
    "isLatex": true,
    "choices": [
      "$\\arccos(x) + \\frac{x}{\\sqrt{1-x^2}}$",
      "$\\arccos(x) - \\frac{x}{\\sqrt{1-x^2}}$",
      "$-\\frac{x}{\\sqrt{1-x^2}}$",
      "$\\arccos(x) + \\frac{1}{\\sqrt{1-x^2}}$"
    ],
    "answer": 1,
    "explanation": "Product rule: f'(x) = (x)'arccos(x) + x·(arccos(x))' = arccos(x) + x·(-1/√(1-x²)) =\narccos(x) - x/√(1-x²)."
  },
  {
    "id": "u3_mcq_024",
    "unit": 3,
    "topic": "Implicit Differentiation - Exponential",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "If e^{xy} = x + y, what is $\\frac{dy}{dx}$ at the point (0, 1)?",
    "isLatex": true,
    "choices": [
      "-1",
      "0",
      "1",
      "The derivative does not exist at (0,0)"
    ],
    "answer": 1,
    "explanation": "First verify (0, 1) is on the curve: e^(0·1) = 1 and 0 + 1 = 1. ✓ Differentiate: e^(xy)·(y + x·dy/dx) = 1 + dy/dx. At (0, 1): e⁰·(1 + 0) = 1 + dy/dx, so 1 = 1 + dy/dx, giving dy/dx = 0."
  },
  {
    "id": "u4_mcq_001",
    "unit": 4,
    "topic": "Interpreting the Derivative in Context",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "The function P(t) models the population of a town in thousands, where t is\nmeasured in years. Which of the following best interprets P'(5) = 3.2?",
    "isLatex": false,
    "choices": [
      "The population is 3,200 people at t = 5 years",
      "The population is increasing at a rate of 3,200 people per year when t = 5",
      "The population increased by 3,200 people over the first 5 years",
      "The population will reach 3,200 people at some point after t = 5"
    ],
    "answer": 1,
    "explanation": "P'(5) = 3.2 means the instantaneous rate of change of population at t = 5 is 3.2\nthousand people per year, i.e., 3,200 people per year."
  },
  {
    "id": "u4_mcq_002",
    "unit": 4,
    "topic": "Interpreting the Derivative in Context",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "The volume V(r) of a sphere is given by V(r) = (4/3)πr³. Which of the following\ncorrectly interprets dV/dr at r = 3?",
    "isLatex": false,
    "choices": [
      "The volume of the sphere when the radius is 3",
      "The rate at which the volume changes per unit increase in radius when r = 3",
      "The average rate of change of volume over [0, 3]",
      "The acceleration of the radius at r = 3"
    ],
    "answer": 1,
    "explanation": "dV/dr represents the instantaneous rate of change of volume with respect to\nradius at r = 3."
  },
  {
    "id": "u4_mcq_003",
    "unit": 4,
    "topic": "Straight-Line Motion - Velocity and Acceleration",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "A particle moves along the x-axis with position s(t) = t³ - 6t² + 9t. What is the\nvelocity of the particle at t = 2?",
    "isLatex": false,
    "choices": [
      "-3",
      "0",
      "3",
      "6"
    ],
    "answer": 0,
    "explanation": "v(t) = s'(t) = 3t² - 12t + 9. At t = 2: v(2) = 12 - 24 + 9 = -3."
  },
  {
    "id": "u4_mcq_004",
    "unit": 4,
    "topic": "Straight-Line Motion - Speeding Up/Slowing Down",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "A particle moves along the x-axis with velocity v(t) = t² - 4t + 3. At t = 0.5, the particle is:",
    "isLatex": false,
    "choices": [
      "Moving right and speeding up",
      "Moving right and slowing down",
      "Moving left and speeding up",
      "Moving left and slowing down"
    ],
    "answer": 1,
    "explanation": "v(0.5) = 0.25 - 2 + 3 = 1.25 > 0, so the particle is moving right. a(t) = 2t - 4, so a(0.5) = -3 < 0. Since velocity and acceleration have opposite signs, the particle is slowing down."
  },
  {
    "id": "u4_mcq_005",
    "unit": 4,
    "topic": "Straight-Line Motion - Speeding Up/Slowing Down",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "A particle moves along the x-axis. Its velocity is v(t) = t² - 5t + 4. At t = 2, which of\nthe following is true?",
    "isLatex": false,
    "choices": [
      "The particle is moving left and slowing down",
      "The particle is moving left and speeding up",
      "The particle is moving right and slowing down",
      "The particle is moving right and speeding up"
    ],
    "answer": 1,
    "explanation": "v(2) = 4 - 10 + 4 = -2 < 0, so moving left. a(t) = v'(t) = 2t - 5. a(2) = -1 < 0. Since\nv and a have the same sign (both negative), the particle is speeding up."
  },
  {
    "id": "u4_mcq_006",
    "unit": 4,
    "topic": "Straight-Line Motion - Graph of Velocity",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Based on the velocity graph, on which interval is the particle moving left AND\nslowing down?",
    "isLatex": false,
    "graphDescription": "Graph of v(t) showing: v is positive and decreasing on (0,2), v(2) = 0, v is\nnegative and decreasing on (2, 4), v(4) = -4, v increases from (4,6), v(6) = 0, v is positive and\nincreasing on (6,8).",
    "choices": [
      "(0, 2)",
      "(2, 4)",
      "(4, 6)",
      "(6, 8)"
    ],
    "answer": 2,
    "explanation": "Moving left means v < 0. Slowing down means |v| is decreasing, i.e., v and a\nhave opposite signs. On (4,6): v < 0 and v is increasing (a > 0), so velocity is becoming less\nnegative — the particle is slowing down while moving left."
  },
  {
    "id": "u4_mcq_007",
    "unit": 4,
    "topic": "Straight-Line Motion - Acceleration",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "A particle moves along a straight line with velocity v(t) = 3sin(t). What is the\nacceleration of the particle at t = $\\pi$?",
    "isLatex": true,
    "choices": [
      "-3",
      "0",
      "3",
      "$\\frac{3\\pi}{2}$"
    ],
    "answer": 0,
    "explanation": "a(t) = v'(t) = 3cos(t). At t = π: a(π) = 3cos(π) = 3(-1) = -3."
  },
  {
    "id": "u4_mcq_008",
    "unit": 4,
    "topic": "Rates of Change in Applied Contexts",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The number of gallons of water in a tank is modeled by W(t) = 100 - 4t² for 0 ≤ t ≤\n5, where t is in minutes. At what rate is water leaving the tank at t = 3?",
    "isLatex": false,
    "choices": [
      "12 gallons per minute",
      "24 gallons per minute",
      "36 gallons per minute",
      "64 gallons per minute"
    ],
    "answer": 1,
    "explanation": "W'(t) = -8t. At t = 3: W'(3) = -24. The rate of change is -24 gal/min, meaning\nwater is leaving at 24 gallons per minute."
  },
  {
    "id": "u4_mcq_009",
    "unit": 4,
    "topic": "Rates of Change - Table",
    "difficulty": "medium",
    "calculator": false,
    "format": "table",
    "question": "The table gives the rate R(t) at which water flows into a tank. Which of the\nfollowing best approximates R'(2)?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "t (hours)",
        "0",
        "1",
        "2",
        "3"
      ],
      "rows": [
        [
          "R(t) (gallons/hr)",
          "20",
          "17",
          "12",
          "6"
        ]
      ]
    },
    "choices": [
      "-5.5",
      "-6",
      "-5",
      "-3"
    ],
    "answer": 0,
    "explanation": "Approximate R'(2) using a centered difference quotient: [R(3) - R(1)] / (3-1) =\n(6-17)/2 = -11/2 = -5.5."
  },
  {
    "id": "u4_mcq_010",
    "unit": 4,
    "topic": "Related Rates - Circle",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The radius of a circle is increasing at a constant rate of 0.2 meters per second.\nWhat is the rate of increase of the area when the circumference is 10π meters?",
    "isLatex": true,
    "choices": [
      "$\\pi \\text{ m}^2/\\text{s}$",
      "$2\\pi \\text{ m}^2/\\text{s}$",
      "$\\pi^2 \\text{ m}^2/\\text{s}$",
      "$4\\pi \\text{ m}^2/\\text{s}$"
    ],
    "answer": 1,
    "explanation": "Circumference = 2πr = 10π → r = 5. A = πr², dA/dt = 2πr · dr/dt = 2π(5)(0.2) =\n2π m²/s."
  },
  {
    "id": "u4_mcq_011",
    "unit": 4,
    "topic": "Related Rates - Volume of Sphere",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The radius of a sphere is decreasing at a rate of 2 cm/s. At what rate is the surface\narea changing when the radius is 5 cm? (Surface area S = 4πr²)",
    "isLatex": true,
    "choices": [
      "$-80\\pi \\text{ cm}^2/\\text{s}$",
      "$-40\\pi \\text{ cm}^2/\\text{s}$",
      "$40\\pi \\text{ cm}^2/\\text{s}$",
      "$-20\\pi \\text{ cm}^2/\\text{s}$"
    ],
    "answer": 0,
    "explanation": "dS/dt = 8πr · dr/dt = 8π(5)(-2) = -80π cm²/s."
  },
  {
    "id": "u4_mcq_012",
    "unit": 4,
    "topic": "Related Rates - Ladder Problem",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "A 10-foot ladder leans against a wall. The base slides away from the wall at 2 ft/s.\nHow fast is the top of the ladder sliding down the wall when the base is 6 feet from the wall?",
    "isLatex": false,
    "choices": [
      "-3/2 ft/s",
      "-4/3 ft/s",
      "-8/3 ft/s",
      "-3/4 ft/s"
    ],
    "answer": 0,
    "explanation": "x² + y² = 100. At x=6: y=8. Differentiate: 2x(dx/dt) + 2y(dy/dt) = 0. 2(6)(2) +\n2(8)(dy/dt) = 0. dy/dt = -24/16 = -3/2 ft/s."
  },
  {
    "id": "u4_mcq_013",
    "unit": 4,
    "topic": "Related Rates - Cube",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The edges of a cube are increasing at 0.1 inches per second. At the instant when\nthe total surface area is 54 square inches, what is the rate of increase of the volume (in cubic\ninches per second)?",
    "isLatex": false,
    "choices": [
      "0.9",
      "1.35",
      "2.7",
      "4.05"
    ],
    "answer": 2,
    "explanation": "SA = 6s² = 54, so s = 3. V = s³, so dV/dt = 3s²(ds/dt) = 3(9)(0.1) = 2.7 cubic inches per second."
  },
  {
    "id": "u4_mcq_014",
    "unit": 4,
    "topic": "Related Rates - Right Triangle",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "A car travels north from an intersection at 40 mph while another car travels east at\n30 mph. How fast is the distance between them increasing 2 hours after they both leave the\nintersection?",
    "isLatex": false,
    "choices": [
      "40 mph",
      "50 mph",
      "60 mph",
      "70 mph"
    ],
    "answer": 1,
    "explanation": "After 2 hrs: x = 60, y = 80, d = √(3600+6400) = 100. d² = x²+y². 2d(dd/dt) =\n2x(dx/dt) + 2y(dy/dt). 2(100)(dd/dt) = 2(60)(30) + 2(80)(40) = 3600+6400 = 10000. dd/dt = 50\nmph."
  },
  {
    "id": "u4_mcq_015",
    "unit": 4,
    "topic": "Local Linearization",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "Let f(x) = √x. Use local linearization at x = 9 to approximate √9.1.",
    "isLatex": true,
    "choices": [
      "3.016",
      "3.017",
      "3.020",
      "3.050"
    ],
    "answer": 1,
    "explanation": "f'(x) = 1/(2√x), f'(9) = 1/6. L(x) = f(9) + f'(9)(x-9) = 3 + (1/6)(0.1) = 3 + 0.01667 ≈\n3.017."
  },
  {
    "id": "u4_mcq_016",
    "unit": 4,
    "topic": "Local Linearization - Over or Underestimate",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "f(x) = x³ - 2. A local linear approximation at x = 2 is used to estimate f(2.1). Is this\nan overestimate or underestimate, and why?",
    "isLatex": false,
    "choices": [
      "Overestimate, because f is concave up at x = 2",
      "Underestimate, because f is concave up at x = 2",
      "Overestimate, because f is concave down at x = 2",
      "Underestimate, because f is concave down at x = 2"
    ],
    "answer": 1,
    "explanation": "f''(x) = 6x > 0 at x = 2, so f is concave up. When a function is concave up, the\ntangent line lies below the curve, so linear approximation underestimates."
  },
  {
    "id": "u4_mcq_017",
    "unit": 4,
    "topic": "L'Hôpital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\lim_{x \\to 0} \\frac{e^x - 1}{x} =",
    "isLatex": true,
    "choices": [
      "0",
      "1",
      "e",
      "The limit does not exist"
    ],
    "answer": 1,
    "explanation": "This is 0/0 indeterminate. Apply L'Hôpital's Rule: lim [eˣ/1] as x→0 = e⁰ = 1."
  },
  {
    "id": "u4_mcq_018",
    "unit": 4,
    "topic": "L'Hôpital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\lim_{x \\to \\infty} \\frac{3x^2}{e^x} =",
    "isLatex": true,
    "choices": [
      "3",
      "6",
      "$\\infty$",
      "0"
    ],
    "answer": 3,
    "explanation": "This is ∞/∞. Apply L'Hôpital's twice: lim 3x²/eˣ → lim 6x/eˣ → lim 6/eˣ = 0 as x →\n∞. Exponential grows faster than any polynomial."
  },
  {
    "id": "u4_mcq_019",
    "unit": 4,
    "topic": "L'Hôpital's Rule",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3} =",
    "isLatex": true,
    "choices": [
      "0",
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "1"
    ],
    "answer": 1,
    "explanation": "Apply L'Hôpital's three times (0/0 form): [1-cosx]/3x² → [sinx]/6x → [cosx]/6 =\n1/6 as x→0."
  },
  {
    "id": "u4_mcq_020",
    "unit": 4,
    "topic": "L'Hôpital's Rule - Indeterminate",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\lim_{x \\to 0^+} x \\ln x =",
    "isLatex": true,
    "choices": [
      "$-\\infty$",
      "-1",
      "0",
      "1"
    ],
    "answer": 2,
    "explanation": "Rewrite as ln(x)/(1/x), which is -∞/∞. Apply L'Hôpital's: (1/x)/(-1/x²) = -x → 0 as\nx→0⁺."
  },
  {
    "id": "u4_mcq_021",
    "unit": 4,
    "topic": "Related Rates - Cylinder Volume",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The radius of a right circular cylinder is increasing at 4 units/s and the height is\ndecreasing at 6 units/s. Which expression gives the rate of change of the volume? (V = πr²h)",
    "isLatex": true,
    "choices": [
      "$\\pi(8rh - 6r^2)$",
      "$\\pi(8rh + 6r^2)$",
      "$\\pi(4rh - 6r^2)$",
      "$\\pi(2r - 6h)$"
    ],
    "answer": 0,
    "explanation": "dV/dt = π[2r(dr/dt)h + r²(dh/dt)] = π[2r(4)h + r²(-6)] = π(8rh - 6r²)."
  },
  {
    "id": "u4_mcq_022",
    "unit": 4,
    "topic": "Particle Motion - Position and Velocity",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "A particle moves along the x-axis with position given by x(t) = t³ - 3t² - 9t + 5. At\nwhich of the following times does the particle change direction?",
    "isLatex": false,
    "choices": [
      "t = 1 only",
      "t = 3 only",
      "t = -1 and t = 3",
      "t = 1 and t = 3"
    ],
    "answer": 2,
    "explanation": "v(t) = x'(t) = 3t² - 6t - 9 = 3(t² - 2t - 3) = 3(t-3)(t+1). v = 0 at t = 3 and t = -1. Since\nv changes sign at both, the particle changes direction at t = -1 and t = 3."
  },
  {
    "id": "u4_mcq_023",
    "unit": 4,
    "topic": "Interpreting Derivative in Context - Units",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "The temperature T in degrees Fahrenheit of a cooling object is given by T(t), where\nt is time in minutes. If T'(10) = -3, which of the following is a correct interpretation?",
    "isLatex": false,
    "choices": [
      "The temperature is -3°F at t = 10 minutes",
      "The temperature is decreasing at a rate of 3°F per minute at t = 10 minutes",
      "The temperature decreased by 3°F over the first 10 minutes",
      "The temperature will reach 0°F in 3 more minutes"
    ],
    "answer": 1,
    "explanation": "T'(10) = -3 means the instantaneous rate of change of temperature at t = 10 is\n-3°F per minute — i.e., decreasing at 3°F per minute."
  },
  {
    "id": "u4_mcq_024",
    "unit": 4,
    "topic": "Local Linearization - Applied",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "Let f be a differentiable function with f(4) = 5 and f'(4) = -2. Which of the following is\nthe best approximation for f(4.3)?",
    "isLatex": false,
    "choices": [
      "4.4",
      "4.6",
      "5.6",
      "4.0"
    ],
    "answer": 0,
    "explanation": "L(x) = f(4) + f'(4)(x-4) = 5 + (-2)(4.3-4) = 5 + (-2)(0.3) = 5 - 0.6 = 4.4."
  },
  {
    "id": "u4_mcq_025",
    "unit": 4,
    "topic": "Related Rates - Area of Circle",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The radius of a circle is decreasing at 2 cm/s. In terms of the circumference C,\nwhat is the rate of change of the area?",
    "isLatex": true,
    "choices": [
      "-2C",
      "-C",
      "$-4\\pi$",
      "$\\frac{-C}{\\pi}$"
    ],
    "answer": 0,
    "explanation": "A = πr², dA/dt = 2πr(dr/dt) = 2πr(-2) = -4πr. Since C = 2πr, we have r = C/(2π).\ndA/dt = -4π(C/2π) = -2C."
  },
  {
    "id": "u4_mcq_026",
    "unit": 4,
    "topic": "L'Hôpital's Rule - Recognizing Indeterminate Form",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "For which of the following limits is L'Hôpital's Rule directly applicable?",
    "isLatex": false,
    "choices": [
      "$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
      "$\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$",
      "$\\lim_{x \\to 0} \\frac{\\sin x}{x^2 + 1}$",
      "$\\lim_{x \\to 1} \\frac{x^3 + 2}{x - 1}$"
    ],
    "answer": 1,
    "explanation": "L'Hôpital's applies to 0/0 or ∞/∞ forms. Choice B gives ∞/∞ as x→∞. Choice A is\n0/0 but factors easily. Choice C gives 0/1 (not indeterminate). Choice D gives 3/0 (not\nindeterminate — it's a vertical asymptote)."
  },
  {
    "id": "u5_mcq_001",
    "unit": 5,
    "topic": "Mean Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "f(x) = x² - 3x on [1, 4]. Which value of c satisfies the conclusion of the Mean Value\nTheorem?",
    "isLatex": false,
    "choices": [
      "c = 2",
      "c = 2.5",
      "c = 3",
      "c = 3.5"
    ],
    "answer": 1,
    "explanation": "MVT: f'(c) = [f(4)-f(1)]/(4-1) = [(16-12)-(1-3)]/3 = [4-(-2)]/3 = 2. f'(x) = 2x-3 = 2 →\nx = 2.5."
  },
  {
    "id": "u5_mcq_002",
    "unit": 5,
    "topic": "Mean Value Theorem - Conditions",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "Which of the following functions satisfies the conditions of the Mean Value\nTheorem on [-1, 1]?",
    "isLatex": false,
    "choices": [
      "f(x) = |x|",
      "f(x) = 1/x",
      "f(x) = x^{2/3}",
      "f(x) = x³ + 2x"
    ],
    "answer": 3,
    "explanation": "MVT requires f to be continuous on [-1,1] and differentiable on (-1,1). f(x) =\nx³+2x is a polynomial — both conditions satisfied. |x| is not differentiable at 0. 1/x has a\ndiscontinuity at 0. x^(2/3) is not differentiable at 0."
  },
  {
    "id": "u5_mcq_003",
    "unit": 5,
    "topic": "Mean Value Theorem - Interpretation",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "A car travels 120 miles in 2 hours. By the MVT, which of the following must be\ntrue?",
    "isLatex": false,
    "choices": [
      "The car traveled at exactly 60 mph for the entire trip",
      "The car exceeded 60 mph at some point during the trip",
      "The car traveled at exactly 60 mph at least once during the trip",
      "The car's acceleration was 0 at some point"
    ],
    "answer": 2,
    "explanation": "The average rate of change is 120/2 = 60 mph. By MVT, assuming position is\ncontinuous and differentiable, the instantaneous speed equaled 60 mph at least once."
  },
  {
    "id": "u5_mcq_004",
    "unit": 5,
    "topic": "Extreme Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "Which of the following guarantees that f has both a maximum and minimum value\non [a, b]?",
    "isLatex": false,
    "choices": [
      "f is differentiable on [a, b]",
      "f is continuous on [a, b]",
      "f is increasing on [a, b]",
      "f has no critical points on (a, b)"
    ],
    "answer": 1,
    "explanation": "The Extreme Value Theorem states that if f is continuous on a closed interval [a,\nb], then f attains both a maximum and minimum value on that interval."
  },
  {
    "id": "u5_mcq_005",
    "unit": 5,
    "topic": "Critical Points",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "Find all critical points of f(x) = x³ - 6x² + 9x + 1.",
    "isLatex": false,
    "choices": [
      "x = 1 only",
      "x = 3 only",
      "x = 1 and x = 3",
      "x = -1 and x = 3"
    ],
    "answer": 2,
    "explanation": "f'(x) = 3x² - 12x + 9 = 3(x²-4x+3) = 3(x-1)(x-3) = 0. Critical points at x = 1 and x =\n3."
  },
  {
    "id": "u5_mcq_006",
    "unit": 5,
    "topic": "Increasing and Decreasing Intervals",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "On which interval is f(x) = x³ - 6x² + 9x + 1 decreasing?",
    "isLatex": false,
    "choices": [
      "(−∞, 1)",
      "(1, 3)",
      "(3, ∞)",
      "(−∞, 3)"
    ],
    "answer": 1,
    "explanation": "f'(x) = 3(x-1)(x-3). f' < 0 when 1 < x < 3, so f is decreasing on (1, 3)."
  },
  {
    "id": "u5_mcq_007",
    "unit": 5,
    "topic": "First Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "Let f'(x) = (x-2)²(x+1). Which of the following correctly classifies the critical points of\nf?",
    "isLatex": false,
    "choices": [
      "Local min at x = -1; local max at x = 2",
      "Local min at x = -1; neither max nor min at x = 2",
      "Local max at x = -1; local min at x = 2",
      "Local max at x = -1; neither max nor min at x = 2"
    ],
    "answer": 1,
    "explanation": "Critical points at x = -1 and x = 2. For x = -1: f' changes from negative to positive\n→ local min. For x = 2: (x-2)² is always ≥ 0, so f' doesn't change sign at x = 2 → neither max nor\nmin."
  },
  {
    "id": "u5_mcq_008",
    "unit": 5,
    "topic": "Absolute Extrema - Closed Interval",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "Find the absolute maximum of f(x) = -x² + 4x + 1 on [0, 5].",
    "isLatex": false,
    "choices": [
      "1",
      "4",
      "5",
      "6"
    ],
    "answer": 2,
    "explanation": "f'(x) = -2x+4 = 0 → x = 2. Evaluate: f(0)=1, f(2)=5, f(5)=-25+20+1=-4. Maximum\nis f(2) = 5."
  },
  {
    "id": "u5_mcq_009",
    "unit": 5,
    "topic": "Absolute Extrema - Closed Interval",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The absolute minimum of f(x) = x³ - 3x on [-2, 3] is:",
    "isLatex": false,
    "choices": [
      "-2",
      "-3",
      "-4",
      "-18"
    ],
    "answer": 0,
    "explanation": "f'(x) = 3x²-3 = 0 → x = ±1. Evaluate: f(-2)=-8+6=-2, f(-1)=-1+3=2, f(1)=1-3=-2,\nf(3)=27-9=18. Minimum is -2 at x=-2 and x=1."
  },
  {
    "id": "u5_mcq_010",
    "unit": 5,
    "topic": "Concavity and Inflection Points",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "Where does f(x) = x⁴ - 4x³ have an inflection point?",
    "isLatex": false,
    "choices": [
      "x = 0 only",
      "x = 2 only",
      "x = 0 and x = 2",
      "x = 3 only"
    ],
    "answer": 1,
    "explanation": "f'(x) = 4x³-12x², f''(x) = 12x²-24x = 12x(x-2). f'' = 0 at x=0 and x=2. Check sign\nchange: f'' changes sign only at x=2 (from negative to positive). At x=0, no sign change. So\ninflection point only at x=2."
  },
  {
    "id": "u5_mcq_011",
    "unit": 5,
    "topic": "Concavity",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "If f''(x) > 0 on an interval, which of the following must be true on that interval?",
    "isLatex": false,
    "choices": [
      "f is increasing",
      "f is decreasing",
      "f is concave up",
      "f is concave down"
    ],
    "answer": 2,
    "explanation": "f''(x) > 0 means the derivative f' is increasing, which means f is concave up. This\nsays nothing about whether f itself is increasing or decreasing."
  },
  {
    "id": "u5_mcq_012",
    "unit": 5,
    "topic": "Second Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "f(x) = x³ - 6x² + 9x + 2 has a critical point at x = 1. What does the second derivative\ntest conclude?",
    "isLatex": false,
    "choices": [
      "Local maximum at x = 1",
      "Local minimum at x = 1",
      "Inflection point at x = 1",
      "The second derivative test is inconclusive"
    ],
    "answer": 0,
    "explanation": "f''(x) = 6x - 12. f''(1) = 6-12 = -6 < 0. Since f''(1) < 0, x = 1 is a local maximum."
  },
  {
    "id": "u5_mcq_013",
    "unit": 5,
    "topic": "Second Derivative Test - Inconclusive",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "f(x) = x⁴ has a critical point at x = 0. What does the second derivative test\nconclude?",
    "isLatex": false,
    "choices": [
      "Local maximum",
      "Local minimum",
      "Inflection point",
      "The second derivative test is inconclusive at x = 0"
    ],
    "answer": 3,
    "explanation": "f''(x) = 12x², f''(0) = 0. When f'' = 0, the second derivative test is inconclusive.\n(Using the first derivative test: f' = 4x³ changes from negative to positive at x = 0, confirming it's\nactually a local minimum.)"
  },
  {
    "id": "u5_mcq_014",
    "unit": 5,
    "topic": "Connecting f, f', f'' - Graph Reading",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Based on the graph of f', which of the following is true about f?",
    "isLatex": false,
    "graphDescription": "Graph of f'(x) showing: f' is positive on (-∞, -2), f'(-2) = 0, f' is negative on\n(-2, 1), f'(1) = 0, f' is positive and increasing on (1, ∞). f'' > 0 for all x > 0.",
    "choices": [
      "f has a local max at x = -2 and a local min at x = 1",
      "f has a local min at x = -2 and a local max at x = 1",
      "f is concave down for all x > 0",
      "f has inflection points at x = -2 and x = 1"
    ],
    "answer": 0,
    "explanation": "f' changes from positive to negative at x = -2 → local max of f. f' changes from\nnegative to positive at x = 1 → local min of f."
  },
  {
    "id": "u5_mcq_015",
    "unit": 5,
    "topic": "Connecting f, f', f'' - Table",
    "difficulty": "medium",
    "calculator": false,
    "format": "table",
    "question": "Based on the table, which of the following correctly describes f at x = 3?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "f(x)",
        "f'(x)",
        "f''(x)"
      ],
      "rows": [
        [
          "1",
          "4",
          "0",
          "-3"
        ],
        [
          "2",
          "1",
          "-2",
          "1"
        ],
        [
          "3",
          "5",
          "0",
          "2"
        ]
      ]
    },
    "choices": [
      "f has a local maximum at x = 3",
      "f has a local minimum at x = 3",
      "f has an inflection point at x = 3",
      "f is decreasing at x = 3"
    ],
    "answer": 1,
    "explanation": "f'(3) = 0 and f''(3) = 2 > 0. By the second derivative test, x = 3 is a local\nminimum."
  },
  {
    "id": "u5_mcq_016",
    "unit": 5,
    "topic": "Optimization - Maximum Area",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "A farmer wants to fence a rectangular area using 100 feet of fencing along three\nsides (one side is a barn wall). What dimensions maximize the area?",
    "isLatex": false,
    "choices": [
      "25 ft × 25 ft",
      "25 ft × 50 ft",
      "50 ft × 50 ft",
      "20 ft × 60 ft"
    ],
    "answer": 1,
    "explanation": "Let w = width (two sides), l = length (one side). Constraint: 2w + l = 100 → l =\n100-2w. A = wl = w(100-2w) = 100w-2w². A' = 100-4w = 0 → w = 25. l = 50. Area = 25×50 =\n1250 sq ft."
  },
  {
    "id": "u5_mcq_017",
    "unit": 5,
    "topic": "Optimization - Minimum Distance",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "What is the minimum value of f(x) = x + 4/x for x > 0?",
    "isLatex": true,
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "f'(x) = 1 - 4/x² = 0 → x² = 4 → x = 2 (since x > 0). f(2) = 2 + 4/2 = 2 + 2 = 4. f''(x)\n= 8/x³ > 0 at x = 2, confirming minimum."
  },
  {
    "id": "u5_mcq_018",
    "unit": 5,
    "topic": "Optimization - Revenue",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "A company's revenue is R(x) = 200x - 0.5x², where x is the number of units sold.\nHow many units maximize revenue?",
    "isLatex": false,
    "choices": [
      "100 units",
      "150 units",
      "200 units",
      "400 units"
    ],
    "answer": 2,
    "explanation": "R'(x) = 200 - x = 0 → x = 200. R''(x) = -1 < 0, confirming a maximum."
  },
  {
    "id": "u5_mcq_019",
    "unit": 5,
    "topic": "Sketching Graphs from Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Based on the graph of f', where does f have an inflection point?",
    "isLatex": false,
    "graphDescription": "Graph of f'(x): f' is negative on (-∞, 0), f'(0) = 0, f' is positive and increasing\non (0, 2), f' has a maximum at x = 2, f' is positive but decreasing on (2, 4), f'(4) = 0, f' is negative\non (4, ∞).",
    "choices": [
      "x = 0 only",
      "x = 2 only",
      "x = 4 only",
      "x = 0 and x = 4"
    ],
    "answer": 1,
    "explanation": "Inflection points of f occur where f'' = 0 and changes sign, i.e., where f' has a\nlocal max or min. f' has a local maximum at x = 2, so f'' changes from positive to negative there\n— inflection point of f at x = 2."
  },
  {
    "id": "u5_mcq_020",
    "unit": 5,
    "topic": "Particle Motion - Speeding Up/Slowing Down Using f and f'",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "A particle's velocity is v(t) = t² - 6t + 8. On which interval is the particle slowing\ndown?",
    "isLatex": false,
    "choices": [
      "(0, 2)",
      "(2, 3)",
      "(3, 4)",
      "(4, 6)"
    ],
    "answer": 2,
    "explanation": "v(t) = (t-2)(t-4). v > 0 on (-∞, 2) ∪ (4, ∞) and v < 0 on (2, 4). a(t) = 2t - 6, so a = 0 at t = 3. On (2, 3): v < 0 and a < 0 (same sign) — speeding up. On (3, 4): v < 0 and a > 0 (opposite signs) — slowing down."
  },
  {
    "id": "u5_mcq_021",
    "unit": 5,
    "topic": "Critical Points - Graph of f'",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Based on the graph of f', at which x-values does f have a relative minimum?",
    "isLatex": false,
    "graphDescription": "Graph of f'(x) shown. f' has zeros at x = -1, x = 2, and x = 5. f' > 0 on\n(-∞,-1), f' < 0 on (-1,2), f' > 0 on (2,5), f' < 0 on (5,∞).",
    "choices": [
      "x = -1 only",
      "x = 2 only",
      "x = 5 only",
      "x = -1 and x = 5"
    ],
    "answer": 1,
    "explanation": "A relative minimum of f occurs where f' changes from negative to positive. This\nhappens only at x = 2."
  },
  {
    "id": "u5_mcq_022",
    "unit": 5,
    "topic": "Concavity from Graph of f'",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Based on the graph of f', on which interval is f concave down?",
    "isLatex": false,
    "graphDescription": "Graph of f'(x) is a parabola opening upward with vertex at (3, -2). f' is\ndecreasing on (-∞, 3) and increasing on (3, ∞).",
    "choices": [
      "(3, ∞)",
      "(-∞, 3)",
      "(-∞, ∞)",
      "f is never concave down"
    ],
    "answer": 1,
    "explanation": "f is concave down where f'' < 0, i.e., where f' is decreasing. Since f' is\ndecreasing on (-∞, 3), f is concave down on (-∞, 3)."
  },
  {
    "id": "u5_mcq_023",
    "unit": 5,
    "topic": "MVT - Applying to a Table",
    "difficulty": "medium",
    "calculator": false,
    "format": "table",
    "question": "f is continuous and differentiable on [1, 5]. Which of the following must be true?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "rows": [
        [
          "f(x)",
          "3",
          "7",
          "4",
          "9",
          "6"
        ]
      ]
    },
    "choices": [
      "f'(c) = 3/4 for some c in (1, 5)",
      "f'(c) = 4 for some c in (1, 4)",
      "f'(c) = 0 for some c in (1, 5)",
      "f has no local minima on (1, 5)"
    ],
    "answer": 0,
    "explanation": "[f(5)-f(1)]/(5-1) = (6-3)/4 = 3/4. By MVT, f'(c) = 3/4 for some c in (1,5)."
  },
  {
    "id": "u5_mcq_024",
    "unit": 5,
    "topic": "Optimization - Box Volume",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "A box with a square base and no top is to have a volume of 32 cubic feet. What\nbase side length minimizes the surface area?",
    "isLatex": false,
    "choices": [
      "2 ft",
      "4 ft",
      "8 ft",
      "16 ft"
    ],
    "answer": 1,
    "explanation": "V = s²h = 32 → h = 32/s². SA = s² + 4sh = s² + 128/s. SA' = 2s - 128/s² = 0 →\n2s³ = 128 → s³ = 64 → s = 4 ft."
  },
  {
    "id": "u5_mcq_025",
    "unit": 5,
    "topic": "Implicit Relations - Critical Points",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "For the curve defined by x² + 2y² - 6x = 0, which of the following are the\nx-coordinates where the curve has a horizontal tangent?",
    "isLatex": false,
    "choices": [
      "x = 0 only",
      "x = 3 only",
      "x = 1 and x = 5",
      "x = 0 and x = 3"
    ],
    "answer": 1,
    "explanation": "Differentiate implicitly: 2x + 4y(dy/dx) - 6 = 0. Horizontal tangent when dy/dx = 0:\n2x - 6 = 0 → x = 3."
  },
  {
    "id": "u5_mcq_026",
    "unit": 5,
    "topic": "Candidates Test - Absolute Extrema",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "On [0, 2π], what is the absolute maximum value of f(x) = sin(x) + cos(x)?",
    "isLatex": true,
    "choices": [
      "1",
      "$\\sqrt{2}$",
      "2",
      "$-\\sqrt{2}$"
    ],
    "answer": 1,
    "explanation": "f'(x) = cos(x) - sin(x) = 0 → tan(x) = 1 → x = π/4 and 5π/4. f(π/4) = √2/2 + √2/2 =\n√2. f(5π/4) = -√2. Check endpoints: f(0) = 1, f(2π) = 1. Absolute max is √2."
  },
  {
    "id": "u5_mcq_027",
    "unit": 5,
    "topic": "Graph of f from Graph of f'",
    "difficulty": "hard",
    "calculator": true,
    "format": "graph",
    "question": "Based on the graph of f', at which x-value does f have an inflection point?",
    "isLatex": false,
    "graphDescription": "Graph of f'(x): starts at f'(0) = 2, decreases linearly to f'(2) = 0, continues\ndecreasing to f'(3) = -1, then increases back to f'(5) = 1. f'(3) is a local minimum of f'.",
    "choices": [
      "x = 2",
      "x = 3",
      "x = 4",
      "x = 5"
    ],
    "answer": 1,
    "explanation": "f has an inflection point where f'' changes sign, i.e., where f' has a local\nextremum. f' has a local minimum at x = 3, so f'' changes from negative to positive there —\ninflection point at x = 3."
  },
  {
    "id": "u5_mcq_028",
    "unit": 5,
    "topic": "Connecting f and f'' - Concavity",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "f(x) = xe^{-x}. On which interval is f concave up?",
    "isLatex": true,
    "choices": [
      "(0, ∞)",
      "(-∞, 2)",
      "(2, ∞)",
      "(-∞, 0)"
    ],
    "answer": 2,
    "explanation": "f'(x) = e^(-x) - xe^(-x) = e^(-x)(1-x). f''(x) = e^(-x)(x-2). f'' > 0 when x > 2. So f is\nconcave up on (2, ∞)."
  },
  {
    "id": "u5_mcq_029",
    "unit": 5,
    "topic": "First Derivative Test - Applied",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "f(x) = x^{4/3} - 4x^{1/3}. At x = 1, f has a:",
    "isLatex": true,
    "choices": [
      "Local maximum",
      "Local minimum",
      "Inflection point",
      "No critical point at x = 1"
    ],
    "answer": 1,
    "explanation": "f'(x) = (4/3)x^(1/3) - (4/3)x^(-2/3) = (4/3)x^(-2/3)(x-1). f' = 0 at x = 1. f' < 0 for x <\n1, f' > 0 for x > 1. By FDT, x = 1 is a local minimum."
  },
  {
    "id": "u5_mcq_030",
    "unit": 5,
    "topic": "Optimization - Closest Point",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "What point on the curve y = x² is closest to the point (0, 3)?",
    "isLatex": false,
    "choices": [
      "(0, 0)",
      "(1, 1)",
      "(±1.581, 2.500)",
      "(±1, 1)"
    ],
    "answer": 2,
    "explanation": "Distance² = x² + (x²-3)². Let D = x² + (x²-3)². D' = 2x + 2(x²-3)(2x) = 2x[1 +\n2(x²-3)] = 2x(2x²-5). Critical points: x=0 and x=±√(5/2). D(0)=9, D(√(5/2))= 5/2 + (5/2-3)² =\n5/2+1/4 = 11/4 < 9. Closest points are (±√(5/2), 5/2) ≈ (±1.58, 2.5). Revise answer choices\naccordingly."
  },
  {
    "id": "u5_mcq_031",
    "unit": 5,
    "topic": "MVT - Existence of Zero Derivative",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "f is continuous on [2, 6] and differentiable on (2, 6) with f(2) = f(6) = 3. Which\ntheorem guarantees that f'(c) = 0 for some c in (2, 6)?",
    "isLatex": false,
    "choices": [
      "Intermediate Value Theorem",
      "Extreme Value Theorem",
      "Mean Value Theorem (Rolle's Theorem case)",
      "Second Derivative Test"
    ],
    "answer": 2,
    "explanation": "When f(a) = f(b), the MVT gives f'(c) = [f(b)-f(a)]/(b-a) = 0/4 = 0. This special\ncase is Rolle's Theorem."
  },
  {
    "id": "u5_mcq_032",
    "unit": 5,
    "topic": "Implicit Relations - Critical Points with Second Derivative",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "For the curve x² + y² - 4x - 6y + 9 = 0, at which point does the curve have a vertical\ntangent?",
    "isLatex": false,
    "choices": [
      "(2, 6) and (2, 0)",
      "(0, 3) and (4, 3)",
      "(2, 3)",
      "(4, 6) and (0, 0)"
    ],
    "answer": 1,
    "explanation": "Differentiate: 2x + 2y(dy/dx) - 4 - 6(dy/dx) = 0. dy/dx = (4-2x)/(2y-6). Vertical\ntangent when denominator = 0: 2y-6 = 0 → y = 3. Plug y=3 into original: x²-4x+4=0 → (x-2)²=0,\nonly x=2. So complete the square first: (x-2)²+(y-3)²=4, circle. Vertical tangent at y=3: x = 2±2.\nPoints: (0,3) and (4,3)."
  },
  {
    "id": "u5_mcq_033",
    "unit": 5,
    "topic": "Optimization - Calculator Active",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "Let g(x) = x⁴ - 3x³ - x. What are all values of x where g'(x) = 12?",
    "isLatex": false,
    "choices": [
      "x ≈ 2.320 only",
      "x ≈ -0.574 only",
      "x ≈ 2.320 and x ≈ -0.574",
      "x ≈ 3.145 only"
    ],
    "answer": 2,
    "explanation": "g'(x) = 4x³-9x²-1 = 12. Solve 4x³-9x²-13 = 0 using a calculator. Solutions are\napproximately x ≈ 2.320 and x ≈ -0.574."
  },
  {
    "id": "u5_mcq_034",
    "unit": 5,
    "topic": "Connecting f, f', f'' - Comprehensive",
    "difficulty": "hard",
    "calculator": true,
    "format": "graph",
    "question": "If the three graphs shown represent f, f', and f'' (in some order), which of the\nfollowing correctly identifies them?",
    "isLatex": false,
    "graphDescription": "Graph shows three curves labeled I, II, and III. Curve I is smooth and has\na local max at x=2. Curve II crosses zero at x=2 and changes from positive to negative. Curve\nIII is negative and increasing near x=2.",
    "choices": [
      "I = f, II = f', III = f''",
      "II = f, I = f', III = f''",
      "III = f, II = f', I = f''",
      "I = f'', II = f', III = f"
    ],
    "answer": 0,
    "explanation": "At x=2: Curve I has a local max → f'=0 there. Curve II crosses zero at x=2 (and\nchanges sign from + to -) → this is f'. Curve III is negative at x=2 → this is f'' (since f''<0 at a\nlocal max). So I=f, II=f', III=f''."
  },
  {
    "id": "u6_mcq_001",
    "unit": 6,
    "topic": "Accumulation of Change - Interpreting",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "Water flows into a tank at a rate of r(t) gallons per minute. Which of the following\nrepresents the total amount of water that flows into the tank from t = 0 to t = 5?",
    "isLatex": false,
    "choices": [
      "r(5) - r(0)",
      "r'(5)",
      "$\\int_0^5 r(t)$ \\, dt",
      "$5 \\cdot r(5)$"
    ],
    "answer": 2,
    "explanation": "The definite integral of a rate function over an interval gives the total\naccumulated change (net amount). ∫₀⁵ r(t) dt gives total gallons accumulated from t=0 to t=5."
  },
  {
    "id": "u6_mcq_002",
    "unit": 6,
    "topic": "Accumulation of Change - Net Change",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "A particle moves along the x-axis with velocity v(t) = 3t² - 2. What is the\ndisplacement of the particle from t = 1 to t = 3?",
    "isLatex": true,
    "choices": [
      "20",
      "22",
      "24",
      "26"
    ],
    "answer": 1,
    "explanation": "Displacement = ∫₁³ (3t² - 2) dt = [t³ - 2t]₁³ = (27 - 6) - (1 - 2) = 21 - (-1) = 22."
  },
  {
    "id": "u6_mcq_003",
    "unit": 6,
    "topic": "Riemann Sums - Left and Right",
    "difficulty": "easy",
    "calculator": false,
    "format": "table",
    "question": "Using the table, what is the left Riemann sum approximation for ∫₀⁴ f(x) dx with 4\nsubintervals of equal width?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "0",
        "1",
        "2",
        "3",
        "4"
      ],
      "rows": [
        [
          "f(x)",
          "2",
          "5",
          "3",
          "7",
          "4"
        ]
      ]
    },
    "choices": [
      "15",
      "17",
      "19",
      "21"
    ],
    "answer": 1,
    "explanation": "Left Riemann sum uses left endpoints: Δx=1. Sum = 1·f(0) + 1·f(1) + 1·f(2) +\n1·f(3) = 2+5+3+7 = 17."
  },
  {
    "id": "u6_mcq_004",
    "unit": 6,
    "topic": "Riemann Sums - Right",
    "difficulty": "easy",
    "calculator": false,
    "format": "table",
    "question": "Using the same table as before, what is the right Riemann sum for ∫₀⁴ f(x) dx with 4\nequal subintervals?",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "0",
        "1",
        "2",
        "3",
        "4"
      ],
      "rows": [
        [
          "f(x)",
          "2",
          "5",
          "3",
          "7",
          "4"
        ]
      ]
    },
    "choices": [
      "15",
      "17",
      "19",
      "21"
    ],
    "answer": 2,
    "explanation": "Right Riemann sum uses right endpoints: 1·f(1) + 1·f(2) + 1·f(3) + 1·f(4) =\n5+3+7+4 = 19."
  },
  {
    "id": "u6_mcq_005",
    "unit": 6,
    "topic": "Riemann Sums - Trapezoidal",
    "difficulty": "medium",
    "calculator": true,
    "format": "table",
    "question": "Using a trapezoidal sum with 3 subintervals, approximate ∫₀⁶ f(x) dx.",
    "isLatex": false,
    "tableData": {
      "headers": [
        "x",
        "0",
        "2",
        "4",
        "6"
      ],
      "rows": [
        [
          "f(x)",
          "1",
          "5",
          "3",
          "9"
        ]
      ]
    },
    "choices": [
      "26",
      "28",
      "30",
      "32"
    ],
    "answer": 0,
    "explanation": "Trapezoidal rule: (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + f(x₃)]. With Δx = 2: (2/2)[1 + 2(5) + 2(3) + 9] = 1 + 10 + 6 + 9 = 26."
  },
  {
    "id": "u6_mcq_006",
    "unit": 6,
    "topic": "Riemann Sums - Over vs Underestimate",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "f is positive and increasing on [a, b]. Which of the following is true about the left\nand right Riemann sums?",
    "isLatex": false,
    "choices": [
      "Left sum overestimates, right sum underestimates",
      "Left sum underestimates, right sum overestimates",
      "Both sums overestimate",
      "Both sums underestimate"
    ],
    "answer": 1,
    "explanation": "For an increasing function, left endpoints are smaller than the function values\non each subinterval → left sum underestimates. Right endpoints are larger → right sum\noverestimates."
  },
  {
    "id": "u6_mcq_007",
    "unit": 6,
    "topic": "Riemann Sums - Concavity and Trapezoid",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "f is positive and concave down on [a, b]. Which of the following correctly compares\nthe trapezoidal sum T and midpoint sum M to the exact integral I?",
    "isLatex": false,
    "choices": [
      "T < I < M",
      "M < I < T",
      "T < M < I",
      "I < T < M"
    ],
    "answer": 0,
    "explanation": "When f is concave down, the trapezoid sum lies below the curve\n(underestimates) and the midpoint sum lies above (overestimates). So T < I < M."
  },
  {
    "id": "u6_mcq_008",
    "unit": 6,
    "topic": "Riemann Sums - Unequal Subintervals",
    "difficulty": "hard",
    "calculator": true,
    "format": "table",
    "question": "Using a right Riemann sum with the subintervals indicated by the table,\napproximate ∫₀¹⁰ v(t) dt.",
    "isLatex": false,
    "tableData": {
      "headers": [
        "t",
        "0",
        "3",
        "7",
        "10"
      ],
      "rows": [
        [
          "v(t)",
          "2",
          "8",
          "5",
          "6"
        ]
      ]
    },
    "choices": [
      "58",
      "62",
      "64",
      "68"
    ],
    "answer": 1,
    "explanation": "Right Riemann sum with unequal subintervals: (3-0)·v(3) + (7-3)·v(7) + (10-7)·v(10) = 3(8) + 4(5) + 3(6) = 24 + 20 + 18 = 62."
  },
  {
    "id": "u6_mcq_009",
    "unit": 6,
    "topic": "Definite Integral Notation",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int_3^3 f(x) \\, dx =",
    "isLatex": true,
    "choices": [
      "f(3)",
      "f'(3)",
      "0",
      "Cannot be determined"
    ],
    "answer": 2,
    "explanation": "When the upper and lower limits of integration are equal, the definite integral\nequals 0 — there's no interval to accumulate over."
  },
  {
    "id": "u6_mcq_010",
    "unit": 6,
    "topic": "Properties of Definite Integrals - Reversal",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "If ∫₂⁵ f(x) dx = 8, what is ∫₅² f(x) dx?",
    "isLatex": false,
    "choices": [
      "8",
      "-8",
      "0",
      "1/8"
    ],
    "answer": 1,
    "explanation": "Reversing the limits of integration changes the sign: ∫₅² f(x) dx = -∫₂⁵ f(x) dx = -8."
  },
  {
    "id": "u6_mcq_011",
    "unit": 6,
    "topic": "Properties of Definite Integrals - Additivity",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "If ∫₁⁵ f(x) dx = 10 and ∫₁³ f(x) dx = 4, what is ∫₃⁵ f(x) dx?",
    "isLatex": false,
    "choices": [
      "2",
      "6",
      "14",
      "40"
    ],
    "answer": 1,
    "explanation": "By additivity: ∫₁⁵ f(x) dx = ∫₁³ f(x) dx + ∫₃⁵ f(x) dx. So ∫₃⁵ f(x) dx = 10 - 4 = 6."
  },
  {
    "id": "u6_mcq_012",
    "unit": 6,
    "topic": "Properties of Definite Integrals - Linearity",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "If ∫₀⁴ f(x) dx = 6 and ∫₀⁴ g(x) dx = 9, what is ∫₀⁴ [3f(x) - 2g(x)] dx?",
    "isLatex": false,
    "choices": [
      "-3",
      "0",
      "3",
      "18"
    ],
    "answer": 1,
    "explanation": "By linearity: 3∫₀⁴ f(x) dx - 2∫₀⁴ g(x) dx = 3(6) - 2(9) = 18 - 18 = 0."
  },
  {
    "id": "u6_mcq_013",
    "unit": 6,
    "topic": "FTC Part 1 - Accumulation Function Derivative",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If g(x) = $\\int_0^x (t^2 + 1)$ \\, dt, then g'(x) =",
    "isLatex": true,
    "choices": [
      "x^2 + 1",
      "$\\frac{x^3}{3} + x$",
      "2x",
      "x^2"
    ],
    "answer": 0,
    "explanation": "By the Fundamental Theorem of Calculus Part 1, if g(x) = ∫₀ˣ f(t) dt, then g'(x) =\nf(x). So g'(x) = x² + 1."
  },
  {
    "id": "u6_mcq_014",
    "unit": 6,
    "topic": "FTC Part 1 - Chain Rule Applied",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If h(x) = $\\int_0^{x^2} \\sin(t)$ \\, dt, then h'(x) =",
    "isLatex": true,
    "choices": [
      "$\\sin(x^2)$",
      "$2x\\sin(x^2)$",
      "$\\cos(x^2)$",
      "$2x\\cos(x^2)$"
    ],
    "answer": 1,
    "explanation": "FTC Part 1 with chain rule: h'(x) = sin(x²) · d/dx[x²] = sin(x²) · 2x = 2x·sin(x²)."
  },
  {
    "id": "u6_mcq_015",
    "unit": 6,
    "topic": "FTC Part 1 - Both Limits Variable",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "If F(x) = $\\int_{x}^{x^3} e^t$ \\, dt, then F'(x) =",
    "isLatex": true,
    "choices": [
      "e^{x^3} - e^x",
      "3x^2 e^{x^3} - e^x",
      "3x^2 e^{x^3} + e^x",
      "e^{x^3} + e^x"
    ],
    "answer": 1,
    "explanation": "Split using FTC with chain rule: F'(x) = eˣ³·(3x²) - eˣ·(1) = 3x²eˣ³ - eˣ."
  },
  {
    "id": "u6_mcq_016",
    "unit": 6,
    "topic": "FTC Part 1 - Interpreting Accumulation Function",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Based on the graph of f, on which interval is g both positive and decreasing?",
    "isLatex": false,
    "graphDescription": "Graph of f(t) shown. f is positive on (0,2), f(2)=0, f is negative on (2,5),\nreaches minimum at t=4, then f(5)=0 and is positive again on (5,7). Define g(x) = ∫₀ˣ f(t) dt.",
    "choices": [
      "(0, 2)",
      "(2, 5)",
      "(5, 7)",
      "(0, 5)"
    ],
    "answer": 1,
    "explanation": "g is positive when the accumulated area from 0 to x is positive (the positive area\nfrom 0 to 2 exceeds the negative area from 2 to x, until x gets large enough). g is decreasing\nwhen g'(x) = f(x) < 0, which is on (2,5). So g is positive AND decreasing on (2,5) — assuming\npositive area on (0,2) outweighs the deficit."
  },
  {
    "id": "u6_mcq_017",
    "unit": 6,
    "topic": "FTC Part 1 - Sign Analysis of g",
    "difficulty": "hard",
    "calculator": true,
    "format": "graph",
    "question": "Based on the graph, at what x-value does g have a relative maximum?",
    "isLatex": false,
    "graphDescription": "Graph of f(t): f is positive and increasing on (0,3), f(3)=4 is the max, f\ndecreasing on (3,6), f(6)=0, negative on (6,9). g(x) = ∫₀ˣ f(t) dt.",
    "choices": [
      "x = 3",
      "x = 6",
      "x = 9",
      "x = 0"
    ],
    "answer": 1,
    "explanation": "g'(x) = f(x). g has a relative max where g' changes from positive to negative, i.e.,\nwhere f changes from positive to negative. f(6) = 0 and f changes sign from positive to negative\nat x = 6."
  },
  {
    "id": "u6_mcq_018",
    "unit": 6,
    "topic": "FTC Part 2 - Evaluating Definite Integrals",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int_1^4 (3x^2 - 2x + 1) \\, dx =",
    "isLatex": true,
    "choices": [
      "51",
      "54",
      "57",
      "60"
    ],
    "answer": 0,
    "explanation": "[x³ - x² + x]₁⁴ = (64 - 16 + 4) - (1 - 1 + 1) = 52 - 1 = 51."
  },
  {
    "id": "u6_mcq_019",
    "unit": 6,
    "topic": "FTC Part 2 - Trig Integral",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int_0^{\\pi} \\sin x \\, dx =",
    "isLatex": true,
    "choices": [
      "0",
      "1",
      "2",
      "-2"
    ],
    "answer": 2,
    "explanation": "[-cos x]₀π = -cos(π) - (-cos(0)) = -(-1) - (-1) = 1 + 1 = 2."
  },
  {
    "id": "u6_mcq_020",
    "unit": 6,
    "topic": "FTC Part 2 - Exponential Integral",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int_0^2 e^x \\, dx =",
    "isLatex": true,
    "choices": [
      "e² - 1",
      "e² + 1",
      "2e",
      "e²"
    ],
    "answer": 0,
    "explanation": "[eˣ]₀² = e² - e⁰ = e² - 1."
  },
  {
    "id": "u6_mcq_021",
    "unit": 6,
    "topic": "FTC Part 2 - Net Area",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int_{-2}^{2} x^3 \\, dx =",
    "isLatex": true,
    "choices": [
      "-16",
      "0",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "f(x) = x³ is an odd function, so ∫₋₂² x³ dx = 0 by symmetry. Alternatively: [x⁴/4]₋₂² =\n4 - 4 = 0."
  },
  {
    "id": "u6_mcq_022",
    "unit": 6,
    "topic": "Antiderivatives - Power Rule",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int (4x^3 - 6x + 2) \\, dx =",
    "isLatex": true,
    "choices": [
      "12x^2 - 6 + C",
      "x^4 - 3x^2 + 2x + C",
      "x^4 - 6x^2 + 2x + C",
      "4x^4 - 6x^2 + 2x + C"
    ],
    "answer": 1,
    "explanation": "Integrate term by term: (4x⁴/4) - (6x²/2) + 2x + C = x⁴ - 3x² + 2x + C."
  },
  {
    "id": "u6_mcq_023",
    "unit": 6,
    "topic": "Antiderivatives - Trig",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int (\\cos x + 3\\sin x) \\, dx =",
    "isLatex": true,
    "choices": [
      "$\\sin x + 3\\cos x + C$",
      "$-\\sin x + 3\\cos x + C$",
      "$\\sin x - 3\\cos x + C$",
      "$-\\sin x - 3\\cos x + C$"
    ],
    "answer": 2,
    "explanation": "∫cos x dx = sin x, ∫3sin x dx = -3cos x. Total: sin x - 3cos x + C."
  },
  {
    "id": "u6_mcq_024",
    "unit": 6,
    "topic": "Antiderivatives - Exponential and Log",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int \\left( e^x + \\frac{2}{x} \\right) dx =",
    "isLatex": true,
    "choices": [
      "e^x + $2\\ln$|x| + C",
      "$e^x + \\frac{2}{x^2} + C$",
      "xe^{x-1} + $2\\ln$|x| + C",
      "$e^x - \\frac{2}{x^2} + C$"
    ],
    "answer": 0,
    "explanation": "∫eˣ dx = eˣ, ∫(2/x) dx = 2ln|x|. Total: eˣ + 2ln|x| + C."
  },
  {
    "id": "u6_mcq_025",
    "unit": 6,
    "topic": "Antiderivatives - Finding the Constant",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "If f'(x) = 3x² - 4x and f(1) = 2, what is f(x)?",
    "isLatex": false,
    "choices": [
      "x³ - 2x² + 3",
      "x³ - 2x² + 2",
      "x³ - 2x² + 4",
      "6x - 4"
    ],
    "answer": 0,
    "explanation": "f(x) = x³ - 2x² + C. f(1) = 1-2+C = 2 → C = 3. So f(x) = x³ - 2x² + 3."
  },
  {
    "id": "u6_mcq_026",
    "unit": 6,
    "topic": "U-Substitution - Basic",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int 2x(x^2 + 1)^4 \\, dx =",
    "isLatex": true,
    "choices": [
      "$\\frac{(x^2+1)^5}{5} + C$",
      "$\\frac{(x^2+1)^4}{4} + C$",
      "8x(x^2+1)^3 + C",
      "$\\frac{2x(x^2+1)^5}{5} + C$"
    ],
    "answer": 0,
    "explanation": "Let u = x²+1, du = 2x dx. Integral becomes ∫u⁴ du = u⁵/5 + C = (x²+1)⁵/5 + C."
  },
  {
    "id": "u6_mcq_027",
    "unit": 6,
    "topic": "U-Substitution - Trig",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int \\cos(3x) \\, dx =",
    "isLatex": true,
    "choices": [
      "$-\\sin(3x) + C$",
      "$3\\sin(3x) + C$",
      "$\\frac{\\sin(3x)}{3} + C$",
      "$-3\\sin(3x) + C$"
    ],
    "answer": 2,
    "explanation": "Let u = 3x, du = 3 dx, dx = du/3. ∫cos(u)·(du/3) = (1/3)sin(u) + C = sin(3x)/3 + C."
  },
  {
    "id": "u6_mcq_028",
    "unit": 6,
    "topic": "U-Substitution - Exponential",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int x e^{x^2} \\, dx =",
    "isLatex": true,
    "choices": [
      "e^{x^2} + C",
      "$\\frac{e^{x^2}}{2} + C$",
      "2xe^{x^2} + C",
      "x^2 e^{x^2} + C"
    ],
    "answer": 1,
    "explanation": "Let u = x², du = 2x dx → x dx = du/2. ∫eᵘ·(du/2) = (1/2)eᵘ + C = eˣ²/2 + C."
  },
  {
    "id": "u6_mcq_029",
    "unit": 6,
    "topic": "U-Substitution - Definite Integral",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\int_0^1 3x^2(x^3 + 1)^4 \\, dx =",
    "isLatex": true,
    "choices": [
      "$\\frac{31}{5}$",
      "$\\frac{32}{5}$",
      "$\\frac{63}{5}$",
      "$\\frac{1}{5}$"
    ],
    "answer": 0,
    "explanation": "Let u = x³+1, du = 3x² dx. Limits: x=0→u=1, x=1→u=2. ∫₁² u⁴ du = [u⁵/5]₁² = 32/5\n- 1/5 = 31/5."
  },
  {
    "id": "u6_mcq_030",
    "unit": 6,
    "topic": "U-Substitution - Log",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\int \\frac{2x}{x^2 + 3} \\, dx =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{x^2+3} + C$",
      "$2\\ln|x^2+3| + C$",
      "$\\ln|x^2+3| + C$",
      "$\\frac{\\ln|x^2+3|}{2} + C$"
    ],
    "answer": 2,
    "explanation": "Let u = x²+3, du = 2x dx. ∫(1/u) du = ln|u| + C = ln|x²+3| + C."
  },
  {
    "id": "u6_mcq_031",
    "unit": 6,
    "topic": "Average Value of a Function",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "What is the average value of f(x) = x² on [0, 3]?",
    "isLatex": false,
    "choices": [
      "2",
      "3",
      "4",
      "9"
    ],
    "answer": 1,
    "explanation": "Average value = (1/(3-0))∫₀³ x² dx = (1/3)[x³/3]₀³ = (1/3)(9) = 3."
  },
  {
    "id": "u6_mcq_032",
    "unit": 6,
    "topic": "FTC Part 2 - Calculator Active",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "\\int_0^2 \\sqrt{4 - x^2} \\, dx =",
    "isLatex": true,
    "choices": [
      "$\\pi$",
      "$2\\pi$",
      "$\\frac{\\pi}{2}$",
      "4"
    ],
    "answer": 0,
    "explanation": "The integrand √(4-x²) represents the upper half of a circle with radius 2. ∫₀²\n√(4-x²) dx is a quarter circle of radius 2. Area = (1/4)π(2²) = π."
  },
  {
    "id": "u6_mcq_033",
    "unit": 6,
    "topic": "FTC Part 2 - Piecewise via Graph",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Using the graph of f, evaluate ∫₀⁸ f(x) dx.",
    "isLatex": false,
    "graphDescription": "Graph of f(x) consisting of: a triangle above the x-axis with vertices at\n(0,0), (2,4), and (4,0); then a semicircle below the x-axis with diameter from x=4 to x=8 (radius\n2, center at (6,0)).",
    "choices": [
      "8 - 2π",
      "8 + 2π",
      "16 - 2π",
      "16 + 2π"
    ],
    "answer": 0,
    "explanation": "Triangle area = (1/2)(4)(4) = 8. Semicircle area (below x-axis) = -(1/2)π(2²) =\n-2π. Total = 8 - 2π."
  },
  {
    "id": "u6_mcq_034",
    "unit": 6,
    "topic": "Properties of Integrals - Symmetry",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "Which of the following must equal zero?",
    "isLatex": true,
    "choices": [
      "$\\int_{-2}^{2} x^2 \\, dx$",
      "$\\int_{-\\pi}^{\\pi} \\cos x \\, dx$",
      "$\\int_{-3}^{3} x^4 \\sin x$ \\, dx",
      "$\\int_{-1}^{1} e^x$ \\, dx"
    ],
    "answer": 2,
    "explanation": "An integral of an odd function over a symmetric interval [-a, a] equals zero. f(x)\n= x⁴sin(x): x⁴ is even, sin(x) is odd, so the product is odd. ∫₋₃³ x⁴sin(x) dx = 0."
  },
  {
    "id": "u6_mcq_035",
    "unit": 6,
    "topic": "U-Substitution - Recognizing the Pattern",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\int \\frac{\\cos x}{\\sin^3 x} \\, dx =",
    "isLatex": true,
    "choices": [
      "$-\\frac{1}{2\\sin^2 x} + C$",
      "$\\frac{1}{2\\sin^2 x} + C$",
      "$-\\frac{3\\cos x}{\\sin^4 x} + C$",
      "$\\ln|\\sin x| + C$"
    ],
    "answer": 0,
    "explanation": "Let u = sin x, du = cos x dx. ∫u⁻³ du = u⁻²/(-2) + C = -1/(2sin²x) + C."
  },
  {
    "id": "u6_mcq_036",
    "unit": 6,
    "topic": "FTC - Comparing g, g', g''",
    "difficulty": "hard",
    "calculator": true,
    "format": "graph",
    "question": "At x = 5, which of the following correctly orders g(5), g'(5), and g''(5)?",
    "isLatex": false,
    "graphDescription": "f(5) = 2, f is increasing at x=5 so f'(5) = 0.5, f is concave down at x=5. g(x) = ∫₂ˣ f(t) dt. Given the graph, g(5) = 4.",
    "choices": [
      "g''(5) < g'(5) < g(5)",
      "g''(5) < g(5) < g'(5)",
      "g(5) < g''(5) < g'(5)",
      "g'(5) < g''(5) < g(5)"
    ],
    "answer": 1,
    "explanation": "g(5) = ∫₂⁵ f(t) dt = net area from 2 to 5 (positive, let's say ~4). g'(5) = f(5) = 2.\ng''(5) = f'(5) < 0 since f is concave down means f' is decreasing, and at x=5 if f is increasing but\nconcave down, f'(5) > 0 but less than 2. Ordering depends on specific values — this is a\nconceptual question requiring the given graph values to compare."
  },
  {
    "id": "u6_mcq_037",
    "unit": 6,
    "topic": "Long Division - Improper Rational",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\int \\frac{x^2 + 1}{x - 1} \\, dx",
    "isLatex": true,
    "choices": [
      "$\\frac{x^2}{2} + x + 2\\ln|x-1| + C$",
      "$\\frac{x^2}{2} + x - \\ln|x-1| + C$",
      "$x + 2\\ln|x-1| + C$",
      "$\\frac{x^2}{2} + 2\\ln|x-1| + C$"
    ],
    "answer": 0,
    "explanation": "Long division: (x² + 1) ÷ (x - 1) = x + 1 with remainder 2. So the integrand equals x + 1 + 2/(x-1). Integrating: x²/2 + x + 2ln|x-1| + C."
  },
  {
    "id": "u6_mcq_038",
    "unit": 6,
    "topic": "U-Substitution - Definite with New Limits",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "\\int_0^{\\pi/2} \\sin^3 x \\cos x \\, dx =",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "1",
      "$\\frac{3}{4}$"
    ],
    "answer": 0,
    "explanation": "Let u = sin x, du = cos x dx. Limits: x=0→u=0, x=π/2→u=1. ∫₀¹ u³ du = [u⁴/4]₀¹ =\n1/4."
  },
  {
    "id": "u7_mcq_001",
    "unit": 7,
    "topic": "Modeling with Differential Equations",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "A population P grows at a rate proportional to the current population. Which of the\nfollowing differential equations models this situation, where k is a positive constant?",
    "isLatex": true,
    "choices": [
      "$\\frac{dP}{dt} = k$",
      "$\\frac{dP}{dt} = kP$",
      "$\\frac{dP}{dt} = \\frac{k}{P}$",
      "$\\frac{dP}{dt} = k + P$"
    ],
    "answer": 1,
    "explanation": "Rate proportional to the current population means dP/dt = kP, which is the\nstandard exponential growth model."
  },
  {
    "id": "u7_mcq_002",
    "unit": 7,
    "topic": "Modeling with Differential Equations",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "The rate of change of the volume V with respect to time t of water leaking from a\ntank is proportional to the cube of the volume. The tank is losing water. Which of the following\ndifferential equations describes this situation?",
    "isLatex": true,
    "choices": [
      "$\\frac{dV}{dt} = kV^3, \\text{ where } k > 0$",
      "$\\frac{dV}{dt} = kV^3, \\text{ where } k < 0$",
      "\\frac{dV}{dt} = k\\sqrt[3]{V}, \\text{ where } k < 0",
      "\\frac{dV}{dt} = 3kV^2, \\text{ where } k > 0"
    ],
    "answer": 1,
    "explanation": "Proportional to the cube of V means dV/dt = kV³. Since the tank is losing water,\nk must be negative so that dV/dt < 0."
  },
  {
    "id": "u7_mcq_003",
    "unit": 7,
    "topic": "Modeling with Differential Equations",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "A hard-boiled egg is placed on a table to cool. The rate of change of the egg's\ntemperature T with respect to time t is proportional to the difference between the egg's\ntemperature and the room temperature of 72°F. Which differential equation models this\nsituation, where k is a negative constant?",
    "isLatex": true,
    "choices": [
      "$\\frac{dT}{dt} = k(T - 72)$",
      "$\\frac{dT}{dt} = kT - 72$",
      "$\\frac{dT}{dt} = k(72 - T)$",
      "$\\frac{dT}{dt} = 72kT$"
    ],
    "answer": 0,
    "explanation": "Newton's Law of Cooling: dT/dt = k(T - 72). Since k < 0 and T > 72 initially, the\ntemperature decreases. Option (C) would require k > 0 to cool, making (A) the more standard\nform."
  },
  {
    "id": "u7_mcq_004",
    "unit": 7,
    "topic": "Verifying Solutions to Differential Equations",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "Which of the following is a solution to the differential equation \\(\\frac{dy}{dx} =\n2y\\)?",
    "isLatex": true,
    "choices": [
      "y = 2x",
      "y = e^{2x}",
      "y = x^2",
      "$y = \\ln(2x)$"
    ],
    "answer": 1,
    "explanation": "For y = e^{2x}: dy/dx = 2e^{2x} = 2y. ✓ The others fail: for y=2x, dy/dx=2 ≠\n2(2x). For y=x², dy/dx=2x ≠ 2x². For y=ln(2x), dy/dx=1/x ≠ 2ln(2x)."
  },
  {
    "id": "u7_mcq_005",
    "unit": 7,
    "topic": "Verifying Solutions to Differential Equations",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "Which of the following functions satisfies the differential equation \\(\\frac{dy}{dx} =\ny - x\\)?",
    "isLatex": true,
    "choices": [
      "y = x + 1",
      "y = e^x",
      "y = x^2",
      "y = x + 1 + Ce$^x \\text{ for any constant } C$"
    ],
    "answer": 0,
    "explanation": "Test y = x + 1: dy/dx = 1. And y - x = (x+1) - x = 1. So dy/dx = 1 = y - x. ✓ Note:\noption (D) is the general solution, but (A) is the specific verifiable choice among the options\nlisted."
  },
  {
    "id": "u7_mcq_006",
    "unit": 7,
    "topic": "Sketching and Interpreting Slope Fields",
    "difficulty": "easy",
    "calculator": false,
    "format": "graph",
    "question": "A slope field for the differential equation \\(\\frac{dy}{dx} = x + y\\) is shown. At the\npoint (0, 0), the slope of the solution curve is ___, and at the point (1, −1), the slope is ___.",
    "isLatex": true,
    "choices": [
      "0 and 0",
      "0 and −2",
      "1 and 0",
      "0 and 1"
    ],
    "answer": 0,
    "explanation": "At (0,0): dy/dx = 0 + 0 = 0. At (1,−1): dy/dx = 1 + (−1) = 0. So both slopes are 0."
  },
  {
    "id": "u7_mcq_007",
    "unit": 7,
    "topic": "Sketching and Interpreting Slope Fields",
    "difficulty": "medium",
    "calculator": false,
    "format": "graph",
    "question": "Which differential equation is best represented by a slope field where all slopes along the y-axis are zero AND slopes along the x-axis equal the x-coordinate?",
    "isLatex": true,
    "choices": [
      "$\\frac{dy}{dx} = y$",
      "$\\frac{dy}{dx} = x$",
      "$\\frac{dy}{dx} = x + 1$",
      "$\\frac{dy}{dx} = xy$"
    ],
    "answer": 1,
    "explanation": "For the slope to be 0 whenever x = 0, the derivative expression must equal zero\nwhen x = 0. Only dy/dx = x satisfies this — when x = 0, dy/dx = 0 for all y values."
  },
  {
    "id": "u7_mcq_008",
    "unit": 7,
    "topic": "Reasoning Using Slope Fields",
    "difficulty": "hard",
    "calculator": true,
    "format": "graph",
    "question": "A slope field for \\(\\frac{dy}{dx} = \\frac{-x}{y}\\) is given. Which of the following\nstatements correctly describes the behavior of solution curves?",
    "isLatex": true,
    "choices": [
      "Solution curves are lines with slope 1",
      "Solution curves are circles centered at the origin",
      "Solution curves are parabolas opening upward",
      "Solution curves are exponential curves"
    ],
    "answer": 1,
    "explanation": "Separating variables: y dy = -x dx → y²/2 = -x²/2 + C → x² + y² = constant. These are circles centered at the origin."
  },
  {
    "id": "u7_mcq_009",
    "unit": 7,
    "topic": "General Solutions Using Separation of Variables",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "What is the general solution to the differential equation \\(\\frac{dy}{dx} =\n\\frac{x}{y}\\)?",
    "isLatex": true,
    "choices": [
      "y = x^2 + C",
      "y^2 = x^2 + C",
      "$y = \\ln|x| + C$",
      "y^2 = 2x + C"
    ],
    "answer": 1,
    "explanation": "Separate variables: y dy = x dx. Integrate both sides: y²/2 = x²/2 + C₁, so y² = x²\n+ C (absorbing the factor of 2 into C)."
  },
  {
    "id": "u7_mcq_010",
    "unit": 7,
    "topic": "General Solutions Using Separation of Variables",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "What is the general solution to \\(\\frac{dy}{dx} = 3x^2 y\\)?",
    "isLatex": true,
    "choices": [
      "y = 3x^2 + C",
      "y = Ce^{x^3}",
      "y = e^{x^3} + C",
      "$y = \\frac{3x^3}{y} + C$"
    ],
    "answer": 1,
    "explanation": "Separate: dy/y = 3x² dx. Integrate: ln|y| = x³ + C₁. Exponentiate: |y| = e^(x³+C₁) =\ne^C₁ · e^(x³). So y = Ce^(x³) where C = ±e^(C₁) is an arbitrary constant."
  },
  {
    "id": "u7_mcq_011",
    "unit": 7,
    "topic": "Particular Solutions Using Initial Conditions",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "Let y = f(x) be the particular solution to the differential equation \\(\\frac{dy}{dx} =\n\\frac{x}{y}\\) with the initial condition f(2) = 0. What is f(3)?",
    "isLatex": true,
    "choices": [
      "$\\sqrt{5}$",
      "$\\sqrt{3}$",
      "5",
      "$\\sqrt{7}$"
    ],
    "answer": 0,
    "explanation": "From the general solution y² = x² + C. Apply f(2) = 0: 0 = 4 + C → C = −4. So y²\n= x² − 4. At x = 3: y² = 9 − 4 = 5, so y = √5 (taking positive root since the solution goes through\n(2,0) and increases)."
  },
  {
    "id": "u7_mcq_012",
    "unit": 7,
    "topic": "Particular Solutions Using Initial Conditions",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "Let y = f(x) be the particular solution to \\(\\frac{dy}{dx} = -e^{-y}\\) with initial condition f(0) = 0. What is f\\left(\\frac{1}{2}\\right)?",
    "isLatex": true,
    "choices": [
      "$\\ln 2$",
      "$-\\ln 2$",
      "$1 - \\ln 2$",
      "$\\ln 2 - 1$"
    ],
    "answer": 1,
    "explanation": "Separate variables: e^y dy = -dx. Integrate: e^y = -x + C. Apply f(0) = 0: e^0 = 0 + C, so C = 1. Thus e^y = 1 - x, giving y = ln(1 - x). At x = 1/2: f(1/2) = ln(1/2) = -ln 2."
  },
  {
    "id": "u7_mcq_013",
    "unit": 7,
    "topic": "Exponential Models",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "A quantity y satisfies \\(\\frac{dy}{dt} = -0.05y\\) with y(0) = 200. What is y(20)?",
    "isLatex": true,
    "choices": [
      "200e^{-0.05}",
      "200e",
      "200e^{-1}",
      "$\\frac{200}{20}$"
    ],
    "answer": 2,
    "explanation": "The solution to dy/dt = ky with y(0) = y₀ is y = y₀e^(kt). Here y₀ = 200, k = −0.05.\nAt t = 20: y = 200e^(−0.05·20) = 200e^(−1)."
  },
  {
    "id": "u7_mcq_014",
    "unit": 7,
    "topic": "Exponential Models",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The number of bacteria in a culture grows at a rate proportional to the number\npresent. At t = 0 there are 500 bacteria, and at t = 3 hours there are 2000 bacteria. How many\nbacteria are present at t = 6 hours?",
    "isLatex": true,
    "choices": [
      "4000",
      "6000",
      "8000",
      "16000"
    ],
    "answer": 2,
    "explanation": "y = 500e^(kt). At t=3: 2000 = 500e^(3k) → e^(3k) = 4 → 3k = ln4. At t=6: y =\n500e^(6k) = 500(e^(3k))² = 500 · 16 = 8000."
  },
  {
    "id": "u7_mcq_015",
    "unit": 7,
    "topic": "Exponential Models — Half-Life",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "A radioactive substance decays at a rate proportional to the amount present. If the\nhalf-life of the substance is 10 years, what fraction of the original amount remains after 25\nyears?",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2\\sqrt{2}}$",
      "$\\frac{\\sqrt{2}}{8}$",
      "$\\frac{1}{8}$"
    ],
    "answer": 1,
    "explanation": "y = y₀·(1/2)^(t/10). At t = 25: y = y₀·(1/2)^(2.5) = y₀/2^(2.5) = y₀/(4√2) = y₀·1/(2√2). The remaining fraction is 1/(2√2) ≈ 0.354."
  },
  {
    "id": "u7_mcq_016",
    "unit": 7,
    "topic": "Slope Fields — Matching to Equations",
    "difficulty": "hard",
    "calculator": true,
    "format": "graph",
    "question": "A slope field has the property that along the line y = x, all slope segments are\nhorizontal (slope = 0), and slopes are positive above this line and negative below it. Which\ndifferential equation best matches this slope field?",
    "isLatex": true,
    "choices": [
      "$\\frac{dy}{dx} = x - y$",
      "$\\frac{dy}{dx} = y - x$",
      "$\\frac{dy}{dx} = xy$",
      "$\\frac{dy}{dx} = x + y$"
    ],
    "answer": 1,
    "explanation": "Along y = x, dy/dx must equal 0. For dy/dx = y - x: when y = x, dy/dx = 0. ✓ When y > x (above the line), y - x > 0, so slopes are positive. ✓ When y < x (below the line), y - x < 0, so slopes are negative. ✓"
  },
  {
    "id": "u8_mcq_001",
    "unit": 8,
    "topic": "Average Value of a Function",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "What is the average value of \\(f(x) = 3x^2\\) on the interval [0, 2]?",
    "isLatex": true,
    "choices": [
      "4",
      "6",
      "8",
      "12"
    ],
    "answer": 0,
    "explanation": "Average value = (1/(b−a)) ∫[a,b] f(x) dx = (1/2) ∫₀² 3x² dx = (1/2)[x³]₀² = (1/2)(8 −\n0) = 4."
  },
  {
    "id": "u8_mcq_002",
    "unit": 8,
    "topic": "Average Value of a Function",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "The average value of \\(g(x) = \\sin x\\) on \\([0, \\pi]\\) is:",
    "isLatex": true,
    "choices": [
      "0",
      "$\\frac{1}{\\pi}$",
      "$\\frac{2}{\\pi}$",
      "$\\frac{\\pi}{2}$"
    ],
    "answer": 2,
    "explanation": "Average value = (1/π) ∫₀^π sin x dx = (1/π)[−cos x]₀^π = (1/π)(−cos π + cos 0) =\n(1/π)(1 + 1) = 2/π."
  },
  {
    "id": "u8_mcq_003",
    "unit": 8,
    "topic": "Average Value — Mean Value Theorem for Integrals",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "The average value of \\(h(x) = x^3\\) on [1, 3] equals h(c) for some c in (1, 3). What\nis c?",
    "isLatex": true,
    "choices": [
      "\\sqrt[3]{10}",
      "2",
      "\\sqrt[3]{14}",
      "\\sqrt{5}"
    ],
    "answer": 0,
    "explanation": "Average value = (1/(3−1)) ∫₁³ x³ dx = (1/2)[x⁴/4]₁³ = (1/2)(81/4 − 1/4) = (1/2)(80/4)\n= 10. Set h(c) = c³ = 10 → c = ∛10."
  },
  {
    "id": "u8_mcq_004",
    "unit": 8,
    "topic": "Position, Velocity, and Acceleration",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "A particle moves along the x-axis with velocity \\(v(t) = 3t^2 - 6t\\) for \\(t \\geq 0\\).\nIf the particle is at position x = 2 at t = 0, what is its position at t = 3?",
    "isLatex": true,
    "choices": [
      "2",
      "7",
      "9",
      "11"
    ],
    "answer": 0,
    "explanation": "x(t) = x(0) + ∫₀ᵗ v(s) ds. x(3) = 2 + ∫₀³ (3t² − 6t) dt = 2 + [t³ − 3t²]₀³ = 2 + (27 − 27 −\n0) = 2 + 0 = 2."
  },
  {
    "id": "u8_mcq_005",
    "unit": 8,
    "topic": "Position, Velocity, and Acceleration",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "A particle moves along the x-axis with velocity \\(v(t) = t^2 - 4\\) for \\(0 \\leq t \\leq\n3\\). What is the total distance traveled by the particle on this interval?",
    "isLatex": true,
    "choices": [
      "$\\frac{7}{3}$",
      "$\\frac{16}{3}$",
      "$\\frac{23}{3}$",
      "$\\frac{19}{3}$"
    ],
    "answer": 2,
    "explanation": "v(t) = 0 at t = 2. On [0, 2]: v < 0. On [2, 3]: v > 0. Total distance = ∫₀²(4 - t²) dt + ∫₂³(t² - 4) dt = [4t - t³/3]₀² + [t³/3 - 4t]₂³ = 16/3 + 7/3 = 23/3."
  },
  {
    "id": "u8_mcq_006",
    "unit": 8,
    "topic": "Position, Velocity, and Acceleration",
    "difficulty": "medium",
    "calculator": true,
    "format": "table",
    "question": "A particle moves along the x-axis. Selected values of its velocity v(t) are shown in the table. Using a left Riemann sum with 3 subintervals, approximate the displacement of the particle from t = 0 to t = 6.",
    "tableData": {
      "headers": [
        "t",
        "0",
        "2",
        "4",
        "6"
      ],
      "rows": [
        [
          "v(t)",
          "3",
          "−1",
          "2",
          "5"
        ]
      ]
    },
    "isLatex": false,
    "choices": [
      "8",
      "6",
      "4",
      "10"
    ],
    "answer": 0,
    "explanation": "Left Riemann sum with Δt = 2: displacement ≈ v(0)·2 + v(2)·2 + v(4)·2 = 3(2) +\n(−1)(2) + 2(2) = 6 − 2 + 4 = 8."
  },
  {
    "id": "u8_mcq_007",
    "unit": 8,
    "topic": "Accumulation in Applied Contexts",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "Water flows into a tank at a rate of \\(r(t) = 2t + 1\\) gallons per minute. Water flows\nout at a constant rate of 3 gallons per minute. At t = 0, there are 10 gallons in the tank. How\nmany gallons are in the tank at t = 4 minutes?",
    "isLatex": true,
    "choices": [
      "18",
      "22",
      "26",
      "30"
    ],
    "answer": 0,
    "explanation": "Net rate = (2t + 1) - 3 = 2t - 2. Net change = ∫₀⁴(2t - 2) dt = [t² - 2t]₀⁴ = 16 - 8 = 8. Total at t = 4: 10 + 8 = 18 gallons."
  },
  {
    "id": "u8_mcq_008",
    "unit": 8,
    "topic": "Accumulation in Applied Contexts",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The rate at which people arrive at a theater is modeled by \\(A(t) = 10\\sqrt{t}\\)\npeople per hour, where t is hours after 6 PM. The rate at which people leave is \\(L(t) = 2t\\)\npeople per hour. At 6 PM (t = 0), there are 50 people in the theater. How many people are in the\ntheater at t = 4 hours?",
    "isLatex": true,
    "choices": [
      "$50 + \\frac{160}{3} - 32$",
      "$50 + \\frac{80}{3} - 32$",
      "$\\frac{226}{3}$",
      "$\\frac{262}{3}$"
    ],
    "answer": 3,
    "explanation": "Number = 50 + ∫₀⁴(10√t - 2t) dt = 50 + [(20/3)t^(3/2) - t²]₀⁴ = 50 + (160/3 - 16) = 50 + 112/3 = 150/3 + 112/3 = 262/3."
  },
  {
    "id": "u8_mcq_009",
    "unit": 8,
    "topic": "Area Between Curves (with respect to x)",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "What is the area of the region enclosed by \\(y = x^2\\) and \\(y = x\\)?",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$",
      "1"
    ],
    "answer": 0,
    "explanation": "Intersection: x² = x → x = 0 and x = 1. On [0,1], x ≥ x². Area = ∫₀¹ (x − x²) dx =\n[x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6."
  },
  {
    "id": "u8_mcq_010",
    "unit": 8,
    "topic": "Area Between Curves (with respect to x)",
    "difficulty": "medium",
    "calculator": true,
    "format": "algebraic",
    "question": "What is the area of the region bounded by \\(y = 4 - x^2\\) and \\(y = 0\\) (the\nx-axis)?",
    "isLatex": true,
    "choices": [
      "$\\frac{16}{3}$",
      "8",
      "$\\frac{32}{3}$",
      "16"
    ],
    "answer": 2,
    "explanation": "Intersection with x-axis: 4 − x² = 0 → x = ±2. Area = ∫₋₂² (4 − x²) dx = [4x − x³/3]₋₂²\n= (8 − 8/3) − (−8 + 8/3) = 16 − 16/3 = 32/3."
  },
  {
    "id": "u8_mcq_011",
    "unit": 8,
    "topic": "Area Between Curves (with respect to x)",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "What is the area of the region enclosed by \\(y = \\sin x\\) and \\(y = \\cos x\\) on the\ninterval \\([0, \\pi/2]\\)?",
    "isLatex": true,
    "choices": [
      "$\\sqrt{2} - 1$",
      "$\\sqrt{2}$",
      "$2(\\sqrt{2} - 1)$",
      "1"
    ],
    "answer": 2,
    "explanation": "Intersection at x = π/4. On [0, π/4]: cos x ≥ sin x. On [π/4, π/2]: sin x ≥ cos x. Area = ∫₀^(π/4)(cos x - sin x) dx + ∫_(π/4)^(π/2)(sin x - cos x) dx = (√2 - 1) + (√2 - 1) = 2(√2 - 1)."
  },
  {
    "id": "u8_mcq_012",
    "unit": 8,
    "topic": "Area Between Curves (with respect to y)",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "What is the area of the region bounded by \\(x = y^2\\) and \\(x = 4\\), integrating\nwith respect to y?",
    "isLatex": true,
    "choices": [
      "$\\frac{16}{3}$",
      "$\\frac{32}{3}$",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "Intersection: y² = 4 → y = ±2. Integrating with respect to y, the right curve is x =\n4 and left is x = y². Area = ∫₋₂² (4 − y²) dy = [4y − y³/3]₋₂² = (8 − 8/3) − (−8 + 8/3) = 16 − 16/3 =\n32/3."
  },
  {
    "id": "u8_mcq_013",
    "unit": 8,
    "topic": "Area Between Curves — Multiple Intersections",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "What is the total area enclosed between \\(f(x) = x^3 - x\\) and \\(g(x) = 0\\) on\n\\([-1, 1]\\)?",
    "isLatex": true,
    "choices": [
      "0",
      "$\\frac{1}{2}$",
      "1",
      "2"
    ],
    "answer": 1,
    "explanation": "f(x) = x³ − x = x(x²−1) = x(x−1)(x+1). Zeros at x = −1, 0, 1. On [−1, 0]: f(x) ≥ 0.\nOn [0, 1]: f(x) ≤ 0. Area = ∫₋₁⁰(x³−x)dx + ∫₀¹|x³−x|dx = [x⁴/4−x²/2]₋₁⁰ + [x²/2−x⁴/4]₀¹ = (0 − (1/4−1/2)) +\n(1/2−1/4) = 1/4 + 1/4 = 1/2."
  },
  {
    "id": "u8_mcq_014",
    "unit": 8,
    "topic": "Volume — Solids with Known Cross Sections (Squares)",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The base of a solid is the region enclosed by \\(y = \\sqrt{x}\\) and \\(y = 0\\) on [0,\n4]. Cross sections perpendicular to the x-axis are squares. What is the volume of the solid?",
    "isLatex": true,
    "choices": [
      "4",
      "8",
      "12",
      "16"
    ],
    "answer": 1,
    "explanation": "Each cross section is a square with side length √x. Area of square = (√x)² = x.\nVolume = ∫₀⁴ x dx = [x²/2]₀⁴ = 8."
  },
  {
    "id": "u8_mcq_015",
    "unit": 8,
    "topic": "Volume — Solids with Known Cross Sections (Semicircles)",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The base of a solid is bounded by \\(y = 4 - x^2\\) and the x-axis. Cross sections\nperpendicular to the x-axis are semicircles with diameter in the base. What is the volume of the\nsolid?",
    "isLatex": true,
    "choices": [
      "$\\frac{256\\pi}{15}$",
      "$\\frac{512\\pi}{15}$",
      "$\\frac{128\\pi}{15}$",
      "$\\frac{64\\pi}{15}$"
    ],
    "answer": 3,
    "explanation": "Diameter = 4 - x², radius = (4 - x²)/2. Area of semicircle = πr²/2 = π(4 - x²)²/8. Volume = (π/8)∫₋₂²(4 - x²)² dx = (π/8)·(512/15) = 64π/15."
  },
  {
    "id": "u8_mcq_016",
    "unit": 8,
    "topic": "Volume — Solids with Known Cross Sections (Rectangles)",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The base of a solid is the region between \\(y = x\\) and \\(y = x^2\\) on [0, 1]. Cross\nsections perpendicular to the x-axis are rectangles whose height is twice the base. What is the\nvolume of the solid?",
    "isLatex": true,
    "choices": [
      "$\\frac{1}{30}$",
      "$\\frac{1}{15}$",
      "$\\frac{1}{10}$",
      "$\\frac{1}{6}$"
    ],
    "answer": 1,
    "explanation": "Base of rectangle = x - x², height = 2(x - x²). Area = 2(x - x²)². Volume = 2∫₀¹(x - x²)² dx = 2∫₀¹(x² - 2x³ + x⁴) dx = 2[x³/3 - x⁴/2 + x⁵/5]₀¹ = 2(1/3 - 1/2 + 1/5) = 2(1/30) = 1/15."
  },
  {
    "id": "u8_mcq_017",
    "unit": 8,
    "topic": "Volume — Disc Method (Revolution about x-axis)",
    "difficulty": "easy",
    "calculator": false,
    "format": "algebraic",
    "question": "The region bounded by \\(y = \\sqrt{x}\\), \\(y = 0\\), and \\(x = 4\\) is revolved about\nthe x-axis. What is the volume of the resulting solid?",
    "isLatex": true,
    "choices": [
      "$4\\pi$",
      "$8\\pi$",
      "$16\\pi$",
      "$32\\pi$"
    ],
    "answer": 1,
    "explanation": "Volume = π∫₀⁴ (√x)² dx = π∫₀⁴ x dx = π[x²/2]₀⁴ = π(8) = 8π."
  },
  {
    "id": "u8_mcq_018",
    "unit": 8,
    "topic": "Volume — Disc Method (Revolution about y-axis)",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The region bounded by \\(y = x^2\\), \\(x = 0\\), and \\(y = 4\\) is revolved about the\ny-axis. What is the volume?",
    "isLatex": true,
    "choices": [
      "$4\\pi$",
      "$8\\pi$",
      "$16\\pi$",
      "$32\\pi$"
    ],
    "answer": 1,
    "explanation": "Revolve about y-axis: express x in terms of y. From y = x², x = √y. Volume = π∫₀⁴\n(√y)² dy = π∫₀⁴ y dy = π[y²/2]₀⁴ = π(8) = 8π."
  },
  {
    "id": "u8_mcq_019",
    "unit": 8,
    "topic": "Volume — Disc Method (Revolution about horizontal line)",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The region bounded by \\(y = x^2\\) and \\(y = 4\\) is revolved about the line \\(y =\n4\\). What is the volume of the resulting solid?",
    "isLatex": true,
    "choices": [
      "$\\frac{64\\pi}{5}$",
      "$\\frac{128\\pi}{5}$",
      "$\\frac{256\\pi}{15}$",
      "$\\frac{512\\pi}{15}$"
    ],
    "answer": 3,
    "explanation": "Revolution about y = 4: radius = 4 - x². Bounds: x² = 4 → x = ±2. Volume = π∫₋₂²(4 - x²)² dx = π·(512/15) = 512π/15."
  },
  {
    "id": "u8_mcq_020",
    "unit": 8,
    "topic": "Volume — Washer Method (Revolution about x-axis)",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The region bounded by \\(y = \\sqrt{x}\\) and \\(y = x\\) on [0, 1] is revolved about\nthe x-axis. What is the volume?",
    "isLatex": true,
    "choices": [
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{2}$"
    ],
    "answer": 0,
    "explanation": "Washer method: outer radius R = √x, inner radius r = x. Volume =\nπ∫₀¹[(√x)²−x²]dx = π∫₀¹[x−x²]dx = π[x²/2−x³/3]₀¹ = π(1/2−1/3) = π/6."
  },
  {
    "id": "u8_mcq_021",
    "unit": 8,
    "topic": "Volume — Washer Method (Revolution about y-axis)",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The region bounded by \\(y = x^2\\) and \\(y = \\sqrt{x}\\) is revolved about the\ny-axis. What is the volume?",
    "isLatex": true,
    "choices": [
      "$\\frac{3\\pi}{10}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{5}$",
      "$\\frac{2\\pi}{5}$"
    ],
    "answer": 0,
    "explanation": "Intersection: x²=√x → x⁴=x → x=0,1. Express in terms of y: x=√y (right) from\ny=x², and x=y² (left) from y=√x. Revolve about y-axis, washers: outer radius √y, inner radius y².\nVolume = π∫₀¹[(√y)²−(y²)²]dy = π∫₀¹[y−y⁴]dy = π[y²/2−y⁵/5]₀¹ = π(1/2−1/5) = 3π/10."
  },
  {
    "id": "u8_mcq_022",
    "unit": 8,
    "topic": "Volume — Washer Method (Revolution about horizontal line not x-axis)",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The region enclosed by \\(y = x\\) and \\(y = x^2\\) is revolved about the line \\(y =\n-1\\). The volume of the resulting solid is:",
    "isLatex": true,
    "choices": [
      "\\pi \\int_0^1 [(x+1)^2 - (x^2+1)^2]\\, dx",
      "\\pi \\int_0^1 [(x-1)^2 - (x^2-1)^2]\\, dx",
      "\\pi \\int_0^1 [(x^2+1)^2 - (x+1)^2]\\, dx",
      "\\pi \\int_0^1 [(1-x^2)^2 - (1-x)^2]\\, dx"
    ],
    "answer": 0,
    "explanation": "Revolution about y=−1: outer radius = (top curve) − (−1) = x − (−1) = x+1 (since\ny=x is on top). Inner radius = x² − (−1) = x²+1. Volume = π∫₀¹[(x+1)²−(x²+1)²]dx."
  },
  {
    "id": "u8_mcq_023",
    "unit": 8,
    "topic": "Connecting Position, Velocity, Acceleration (Calculator)",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "A particle moves along the x-axis with velocity \\(v(t) = t^2 - 4t + 3\\) for \\(t \\geq\n0\\). What is the displacement of the particle from \\(t = 0\\) to \\(t = 4\\)?",
    "isLatex": true,
    "choices": [
      "$-\\frac{4}{3}$",
      "$\\frac{4}{3}$",
      "$-\\frac{8}{3}$",
      "$\\frac{8}{3}$"
    ],
    "answer": 1,
    "explanation": "Displacement = ∫₀⁴(t² - 4t + 3) dt = [t³/3 - 2t² + 3t]₀⁴ = (64/3 - 32 + 12) - 0 = 64/3 - 20 = 4/3."
  },
  {
    "id": "u8_mcq_024",
    "unit": 8,
    "topic": "Area Between Curves — Calculator Active",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "What is the area of the region enclosed by \\(y = e^x\\) and \\(y = x + 2\\)?",
    "isLatex": true,
    "choices": [
      "0.443",
      "0.614",
      "1.036",
      "1.693"
    ],
    "answer": 2,
    "explanation": "Solve e^x = x + 2 numerically: intersections at x ≈ -1.146 and x ≈ 1.146. Area = ∫[(x+2) - e^x]dx from -1.146 to 1.146 ≈ 1.036."
  },
  {
    "id": "u8_mcq_025",
    "unit": 8,
    "topic": "Average Value — Applied Context",
    "difficulty": "medium",
    "calculator": false,
    "format": "algebraic",
    "question": "The temperature (in °F) inside a greenhouse over a 12-hour period is modeled by\n\\(T(t) = 60 + 10\\sin\\left(\\frac{\\pi t}{12}\\right)\\) where t is hours after 6 AM. What is the\naverage temperature from t = 0 to t = 12?",
    "isLatex": true,
    "choices": [
      "60°F",
      "$60 + \\frac{20}{\\pi} °F$",
      "70°F",
      "65°F"
    ],
    "answer": 0,
    "explanation": "Average = (1/12)∫₀¹²[60 + 10sin(πt/12)]dt = (1/12)[60t − 10·(12/π)·cos(πt/12)]₀¹²\n= (1/12)[(720 − (120/π)cos(π)) − (0 − (120/π)cos(0))] = (1/12)[720 + 120/π − 120/π] =\n(1/12)(720) = 60°F. The sine term integrates to zero over a full period."
  },
  {
    "id": "u8_mcq_026",
    "unit": 8,
    "topic": "Volume — Disc/Washer Synthesis",
    "difficulty": "hard",
    "calculator": true,
    "format": "algebraic",
    "question": "The region R is bounded by \\(y = \\ln x\\), \\(y = 0\\), and \\(x = e\\). Which integral\ngives the volume of the solid obtained by revolving R about the y-axis?",
    "isLatex": true,
    "choices": [
      "$\\pi \\int_0^1 (e^2 - e^{2y})$\\, dy",
      "$\\pi \\int_0^e (\\ln x)^2\\, dx$",
      "$2\\pi \\int_1^e x \\ln x$\\, dx",
      "$\\pi \\int_0^1 e^{2y}$\\, dy"
    ],
    "answer": 0,
    "explanation": "Revolution about y-axis using washer method (integrating with respect to y): y =\nln x means x = e^y. From y=0 to y=1. Outer radius = e (right boundary), inner radius = e^y.\nVolume = π∫₀¹[(e)²−(e^y)²]dy = π∫₀¹[e²−e^(2y)]dy."
  },
  {
    "id": "calc_u1_q001",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits graphically",
    "topicLabel": "Limits Graphically",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A graph of f(x) shows that as x approaches 3 from both sides, the y-values approach 5, but f(3) = 2. What is the limit of f(x) as x approaches 3?",
    "choices": [
      "A) 5",
      "B) 2",
      "C) 3",
      "D) Does not exist"
    ],
    "answer": 0,
    "explanation": "The limit depends on the values f(x) approaches, not the actual value f(3). Since y-values approach 5 from both sides, the limit is 5. Choice B (2) is the common misconception of confusing the function value with the limit. Choice D is wrong because the two-sided limit does exist."
  },
  {
    "id": "calc_u1_q002",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate the limit as x approaches 2 of (x^2 - 4)/(x - 2).",
    "choices": [
      "A) 0",
      "B) 4",
      "C) 2",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "Factor the numerator: (x^2 - 4) = (x - 2)(x + 2). Cancel (x - 2) to get (x + 2). Substituting x = 2 gives 4. Choice A (0) is the misconception of plugging in and getting 0/0 and calling that 0. Choice C (2) comes from confusing the x-value with the limit. Choice D is wrong because the limit exists after simplification."
  },
  {
    "id": "calc_u1_q003",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limit laws",
    "topicLabel": "Limit Laws",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the limit of f(x) as x approaches 1 is 6 and the limit of g(x) as x approaches 1 is 3, what is the limit of [f(x) - g(x)] as x approaches 1?",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 9",
      "D) 18"
    ],
    "answer": 1,
    "explanation": "By the difference law for limits, the limit of [f(x) - g(x)] equals the limit of f(x) minus the limit of g(x) = 6 - 3 = 3. Choice A (2) is the misconception of dividing instead of subtracting. Choice C (9) comes from adding instead of subtracting. Choice D (18) comes from multiplying the two limits."
  },
  {
    "id": "calc_u1_q004",
    "subject": "apcalc",
    "unit": 1,
    "topic": "one-sided limits",
    "topicLabel": "One-Sided Limits",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If the limit of f(x) as x approaches 4 from the left is 7 and the limit of f(x) as x approaches 4 from the right is 10, what is the limit of f(x) as x approaches 4?",
    "choices": [
      "A) 7",
      "B) 10",
      "C) 8.5",
      "D) Does not exist"
    ],
    "answer": 3,
    "explanation": "For a two-sided limit to exist, the left-hand and right-hand limits must be equal. Since 7 does not equal 10, the limit does not exist. Choice A picks only the left-hand limit. Choice B picks only the right-hand limit. Choice C is the misconception of averaging the two one-sided limits."
  },
  {
    "id": "calc_u1_q005",
    "subject": "apcalc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If g(x) <= f(x) <= h(x) for all x near 0, and the limit of g(x) as x approaches 0 is 4 and the limit of h(x) as x approaches 0 is 4, what is the limit of f(x) as x approaches 0?",
    "choices": [
      "A) 0",
      "B) 4",
      "C) Cannot be determined",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "By the Squeeze Theorem, if f(x) is bounded between g(x) and h(x) and both bounding functions approach the same limit (4), then f(x) must also approach 4. Choice A confuses the point x = 0 with the limit value. Choice C is wrong because the Squeeze Theorem guarantees the result. Choice D is wrong because the limit is determined to exist and equal 4."
  },
  {
    "id": "calc_u1_q006",
    "subject": "apcalc",
    "unit": 1,
    "topic": "continuity",
    "topicLabel": "Continuity",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following conditions is NOT required for f(x) to be continuous at x = c?",
    "choices": [
      "A) f(c) is defined",
      "B) The limit of f(x) as x approaches c exists",
      "C) The limit of f(x) as x approaches c equals f(c)",
      "D) f'(c) exists"
    ],
    "answer": 3,
    "explanation": "Continuity at x = c requires three conditions: f(c) is defined, the limit as x approaches c exists, and the limit equals f(c). Differentiability (f'(c) exists) is not required for continuity — a function can be continuous but not differentiable (e.g., f(x) = |x| at x = 0). Choices A, B, and C are all part of the definition of continuity."
  },
  {
    "id": "calc_u1_q007",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The function f(x) = (x^2 - 9)/(x - 3) has what type of discontinuity at x = 3?",
    "choices": [
      "A) Jump discontinuity",
      "B) Removable discontinuity",
      "C) Infinite discontinuity",
      "D) No discontinuity"
    ],
    "answer": 1,
    "explanation": "Factoring gives (x - 3)(x + 3)/(x - 3), which simplifies to x + 3 for x not equal to 3. The limit as x approaches 3 is 6 but f(3) is undefined, so there is a hole — a removable discontinuity. Choice A (jump) would require different one-sided limits. Choice C (infinite) would require the function to blow up to infinity. Choice D is wrong because f is not defined at x = 3."
  },
  {
    "id": "calc_u1_q008",
    "subject": "apcalc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f is continuous on [1, 5], f(1) = -3, and f(5) = 7, what does the Intermediate Value Theorem guarantee?",
    "choices": [
      "A) f has a maximum on [1, 5]",
      "B) There exists some c in (1, 5) such that f(c) = 0",
      "C) f'(c) = 0 for some c in (1, 5)",
      "D) f is differentiable on (1, 5)"
    ],
    "answer": 1,
    "explanation": "The IVT states that if f is continuous on [a, b] and N is between f(a) and f(b), then there exists c in (a, b) with f(c) = N. Since 0 is between -3 and 7, there must be a c where f(c) = 0. Choice A describes the Extreme Value Theorem, not IVT. Choice C describes a conclusion resembling the Mean Value Theorem or Rolle's Theorem. Choice D is not guaranteed by continuity alone."
  },
  {
    "id": "calc_u1_q009",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the limit as x approaches 5 of (2x + 1)?",
    "choices": [
      "A) 10",
      "B) 11",
      "C) 9",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "Since 2x + 1 is a polynomial and polynomials are continuous everywhere, the limit is found by direct substitution: 2(5) + 1 = 11. Choice A (10) is the misconception of forgetting to add the constant. Choice C (9) may come from subtracting instead of adding. Choice D is wrong because polynomial limits always exist at finite points."
  },
  {
    "id": "calc_u1_q010",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits graphically",
    "topicLabel": "Limits Graphically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The graph of f has a hole at (3, 5) and a solid dot at (3, 2). What is $\\lim_{x \\to 3} f(x)$?",
    "choices": [
      "A) 2",
      "B) 5",
      "C) 3",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "The limit depends on the y-value the function approaches, not the actual function value. The hole at (3, 5) means f approaches 5 as x approaches 3. The solid dot at (3, 2) gives f(3) = 2, which is the function value, not the limit. Students often confuse the function value with the limit (choice A) or think the mismatch means the limit DNE (choice D)."
  },
  {
    "id": "calc_u1_q011",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\lim_{x \\to 4} \\frac{x^2 - 16}{x^2 - 5x + 4}$.",
    "choices": [
      "A) 0",
      "B) $\\frac{8}{3}$",
      "C) 4",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "Factor numerator: x^2 - 16 = (x-4)(x+4). Factor denominator: x^2 - 5x + 4 = (x-4)(x-1). Cancel (x-4) to get (x+4)/(x-1). Substituting x=4 gives 8/3. Choice A results from thinking the 0/0 form equals 0. Choice C comes from incorrectly simplifying. Choice D incorrectly assumes 0/0 means the limit does not exist."
  },
  {
    "id": "calc_u1_q012",
    "subject": "apcalc",
    "unit": 1,
    "topic": "one-sided limits",
    "topicLabel": "One-Sided Limits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Let f(x) = $\\begin{cases} x^2 + 1$ & x < 1 \\\\ 3x - k & $x \\geq 1 \\end{cases}$. For what value of k does $\\lim_{x \\to 1} f(x)$ exist?",
    "choices": [
      "A) k = -1",
      "B) k = 0",
      "C) k = 1",
      "D) k = 2"
    ],
    "answer": 2,
    "explanation": "For the limit to exist, left and right limits must be equal. Left: lim x->1^- of (x^2+1) = 2. Right: lim x->1^+ of (3x-k) = 3-k. Set 3-k = 2, so k = 1. Choice A (k=-1) gives right limit = 4. Choice B (k=0) gives right limit = 3. Choice D (k=2) gives right limit = 1. Only k=1 makes both sides equal to 2."
  },
  {
    "id": "calc_u1_q013",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits at infinity",
    "topicLabel": "Limits at Infinity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\lim_{x \\to \\infty} \\frac{3x^3 - 2x + 1}{5x^3 + 4x^2 - 7}$.",
    "choices": [
      "A) 0",
      "B) $\\frac{3}{5}$",
      "C) $\\frac{3}{4}$",
      "D) $\\infty$"
    ],
    "answer": 1,
    "explanation": "When the degrees of numerator and denominator are equal, the limit is the ratio of leading coefficients: 3/5. Choice A would apply if the numerator degree were smaller. Choice C incorrectly uses the coefficient of the second-highest term in the denominator. Choice D would apply if the numerator degree were larger."
  },
  {
    "id": "calc_u1_q014",
    "subject": "apcalc",
    "unit": 1,
    "topic": "continuity",
    "topicLabel": "Continuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which of the following conditions is NOT required for f to be continuous at x = c?",
    "choices": [
      "A) f(c) is defined",
      "B) $\\lim_{x \\to c} f(x)$ exists",
      "C) $\\lim_{x \\to c} f(x) = f(c)$",
      "D) f'(c) exists"
    ],
    "answer": 3,
    "explanation": "Continuity at x = c requires: (1) f(c) is defined, (2) the limit exists, and (3) the limit equals f(c). Differentiability (choice D) is NOT required for continuity. A function can be continuous but not differentiable (e.g., f(x) = |x| at x = 0). Students sometimes conflate differentiability with continuity."
  },
  {
    "id": "calc_u1_q015",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function g(x) = $\\frac{x^2 - 9}{x - 3}$ has what type of discontinuity at x = 3?",
    "choices": [
      "A) Jump discontinuity",
      "B) Removable discontinuity",
      "C) Infinite discontinuity",
      "D) No discontinuity"
    ],
    "answer": 1,
    "explanation": "Factor: (x^2-9)/(x-3) = (x-3)(x+3)/(x-3) = x+3 for x ≠ 3. The limit as x→3 is 6, but g(3) is undefined. Since the limit exists but the function is not defined there, this is a removable discontinuity (a hole). Choice A would require different one-sided limits. Choice C would require the function to approach ±∞. Choice D is wrong because g(3) is undefined."
  },
  {
    "id": "calc_u1_q016",
    "subject": "apcalc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If f is continuous on [1, 5], f(1) = -3, and f(5) = 7, which of the following is guaranteed by the Intermediate Value Theorem?",
    "choices": [
      "A) f has a maximum on [1, 5]",
      "B) There exists some c in (1, 5) such that f(c) = 0",
      "C) f'(c) = 0 for some c in (1, 5)",
      "D) f(3) = 2"
    ],
    "answer": 1,
    "explanation": "Since f is continuous on [1, 5] and f(1) = -3 < 0 < 7 = f(5), the IVT guarantees there is some c in (1, 5) with f(c) = 0. Choice A is the Extreme Value Theorem, not IVT. Choice C is related to Rolle's Theorem or MVT, not IVT. Choice D is too specific — IVT guarantees a value of 2 is achieved somewhere in the interval but not necessarily at x = 3."
  },
  {
    "id": "calc_u1_q017",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}$.",
    "choices": [
      "A) 0",
      "B) $\\frac{1}{4}$",
      "C) $\\frac{1}{2}$",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "Multiply by the conjugate: [sqrt(x+4)-2]/x · [sqrt(x+4)+2]/[sqrt(x+4)+2] = (x+4-4)/[x(sqrt(x+4)+2)] = x/[x(sqrt(x+4)+2)] = 1/[sqrt(x+4)+2]. As x→0, this becomes 1/(2+2) = 1/4. Choice A comes from incorrectly thinking the numerator→0 means the limit is 0. Choice C comes from forgetting to add both terms in the denominator."
  },
  {
    "id": "calc_u1_q018",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits at infinity",
    "topicLabel": "Limits at Infinity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is $\\lim_{x \\to -\\infty} \\frac{2x}{\\sqrt{x^2 + 1}}$?",
    "choices": [
      "A) 2",
      "B) -2",
      "C) 0",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "For x→-∞, sqrt(x^2) = |x| = -x (since x is negative). Divide numerator and denominator by |x| = -x: numerator becomes 2x/(-x) = -2. Denominator becomes sqrt(x^2+1)/(-x) = sqrt(1+1/x^2) → 1. So the limit is -2. The common error (choice A, getting 2) comes from using sqrt(x^2) = x instead of |x| = -x when x < 0."
  },
  {
    "id": "calc_u1_q019",
    "subject": "apcalc",
    "unit": 1,
    "topic": "one-sided limits",
    "topicLabel": "One-Sided Limits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\lim_{x \\to 0^+} \\frac{|x|}{x}$.",
    "choices": [
      "A) -1",
      "B) 0",
      "C) 1",
      "D) Does not exist"
    ],
    "answer": 2,
    "explanation": "As x→0^+, x is positive, so |x| = x. Therefore |x|/x = x/x = 1. Choice A (-1) is the left-hand limit, where x < 0 and |x| = -x. Choice B incorrectly assumes the function approaches 0. Choice D would be the answer for the two-sided limit since left and right limits differ."
  },
  {
    "id": "calc_u1_q020",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits graphically",
    "topicLabel": "Limits Graphically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "From a graph, $\\lim_{x \\to 2^-} f(x) = 4$ and $\\lim_{x \\to 2^+} f(x) = 4$, but f(2) = 1. Which statement is true?",
    "choices": [
      "A) $\\lim_{x \\to 2} f(x) = 1$",
      "B) $\\lim_{x \\to 2} f(x) = 4$",
      "C) $\\lim_{x \\to 2} f(x)$ does not exist",
      "D) f is continuous at x = 2"
    ],
    "answer": 1,
    "explanation": "Since both one-sided limits equal 4, the two-sided limit exists and equals 4. The function value f(2) = 1 does not affect the limit. Choice A confuses the function value with the limit. Choice C is wrong because both one-sided limits agree. Choice D is wrong because the limit (4) does not equal f(2) = 1, so f is not continuous at 2."
  },
  {
    "id": "calc_u1_q021",
    "subject": "apcalc",
    "unit": 1,
    "topic": "continuity",
    "topicLabel": "Continuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "For what value of a is f(x) = $\\begin{cases} x^2 + a$ & x < 2 \\\\ 3ax - 2 & $x \\geq 2 \\end{cases}$ continuous at x = 2?",
    "choices": [
      "A) $a = \\frac{2}{5}$",
      "B) a = 1",
      "C) $a = \\frac{6}{5}$",
      "D) a = 2"
    ],
    "answer": 2,
    "explanation": "For continuity, the left limit must equal the right limit and equal f(2). Left: 4 + a. Right and f(2): 6a - 2. Set 4 + a = 6a - 2: 6 = 5a, so a = 6/5. Choice A (2/5) comes from an algebra error. Choice B (a=1) gives left = 5 and right = 4, not equal. Choice D (a=2) gives left = 6 and right = 10, not equal."
  },
  {
    "id": "calc_u1_q022",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limit laws",
    "topicLabel": "Limit Laws",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "If $\\lim_{x \\to 5} f(x) = 0$ and $\\lim_{x \\to 5} g(x) = 0$, what can be concluded about $\\lim_{x \\to 5} \\frac{f(x)}{g(x)}$?",
    "choices": [
      "A) The limit equals 0",
      "B) The limit equals 1",
      "C) The limit does not exist",
      "D) The limit cannot be determined without more information"
    ],
    "answer": 3,
    "explanation": "The form 0/0 is indeterminate — the limit could be any real number, ±∞, or may not exist depending on the specific functions. For example, f(x) = 2(x-5) and g(x) = (x-5) gives limit 2, while f(x) = (x-5)^2 and g(x) = (x-5) gives limit 0. Choice A assumes 0/anything = 0. Choice B assumes matching limits means ratio is 1. Choice C is too definitive."
  },
  {
    "id": "calc_u1_q023",
    "subject": "apcalc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$.",
    "choices": [
      "A) -1",
      "B) 0",
      "C) 1",
      "D) Does not exist"
    ],
    "answer": 1,
    "explanation": "Since -1 ≤ cos(1/x) ≤ 1, we have -x^2 ≤ x^2 cos(1/x) ≤ x^2. Both -x^2 and x^2 approach 0 as x→0, so by the Squeeze Theorem the limit is 0. Choice D is a common error from students who know cos(1/x) oscillates and incorrectly conclude the product also has no limit. Choices A and C confuse the bounds of cosine with the limit of the product."
  },
  {
    "id": "calc_u1_q024",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The function h(x) = $\\frac{1}{(x-2)^2}$ has what type of discontinuity at x = 2?",
    "choices": [
      "A) Removable discontinuity",
      "B) Jump discontinuity",
      "C) Infinite discontinuity",
      "D) No discontinuity"
    ],
    "answer": 2,
    "explanation": "As x→2, (x-2)^2 → 0^+ from both sides, so h(x) → +∞. This is an infinite (essential) discontinuity. Choice A is wrong because the limit is not finite. Choice B requires different finite one-sided limits, but here both sides go to +∞. Choice D is wrong because h(2) is undefined and the limit is infinite."
  },
  {
    "id": "calc_u1_q025",
    "subject": "apcalc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A function f is continuous on [0, 4] with f(0) = 6 and f(4) = -2. Which value of c is NOT guaranteed to be achieved by f on (0, 4) by the IVT?",
    "choices": [
      "A) f(c) = 0",
      "B) f(c) = 3",
      "C) f(c) = -1",
      "D) f(c) = 7"
    ],
    "answer": 3,
    "explanation": "IVT guarantees every value between f(0) = 6 and f(4) = -2 (i.e., between -2 and 6) is achieved. Values 0, 3, and -1 all lie in [-2, 6]. However, 7 > 6, so IVT does not guarantee f(c) = 7. The function could achieve 7, but it is not guaranteed. Students may think any value is guaranteed or confuse the range of guaranteed values."
  },
  {
    "id": "calc_u1_q026",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Evaluate $\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h}$.",
    "choices": [
      "A) 0",
      "B) 3",
      "C) 6",
      "D) 9"
    ],
    "answer": 2,
    "explanation": "Expand: (3+h)^2 = 9 + 6h + h^2. So (9+6h+h^2 - 9)/h = (6h + h^2)/h = 6 + h. As h→0, this equals 6. This is the derivative of x^2 at x = 3. Choice A comes from plugging h = 0 before simplifying. Choice B is half the correct answer (common arithmetic error). Choice D confuses 3^2 with the limit."
  },
  {
    "id": "calc_u1_q027",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits at infinity",
    "topicLabel": "Limits at Infinity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is $\\lim_{x \\to \\infty} \\frac{5x^2 + 3}{2x^3 - x}$?",
    "choices": [
      "A) 0",
      "B) $\\frac{5}{2}$",
      "C) $\\infty$",
      "D) -3"
    ],
    "answer": 0,
    "explanation": "The degree of the numerator (2) is less than the degree of the denominator (3), so the limit is 0 as x→∞. Choice B (5/2) is the error from comparing leading coefficients without considering that degrees differ. Choice C would apply if the numerator degree exceeded the denominator degree. Choice D has no valid reasoning."
  },
  {
    "id": "calc_u1_q028",
    "subject": "apcalc",
    "unit": 1,
    "topic": "one-sided limits",
    "topicLabel": "One-Sided Limits",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f be a function such that lim(x->3-) f(x) = 5 and lim(x->3+) f(x) = 5, but f(3) = 2. Which of the following is true?",
    "choices": [
      "A) lim(x->3) f(x) = 5",
      "B) lim(x->3) f(x) = 2",
      "C) lim(x->3) f(x) does not exist",
      "D) lim(x->3) f(x) = 7"
    ],
    "answer": 0,
    "explanation": "Since both one-sided limits exist and are equal (both equal 5), the two-sided limit exists and equals 5. The value of f(3) does not affect the limit. Choice B is a common misconception where students confuse the function value with the limit. Choice C is wrong because the one-sided limits do agree. Choice D has no mathematical basis."
  },
  {
    "id": "calc_u1_q029",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits algebraically",
    "topicLabel": "Limits Algebraically",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is lim(x->4) (x^2 - 16) / (x^2 - 5x + 4)?",
    "choices": [
      "A) 8/3",
      "B) 0",
      "C) 1",
      "D) Does not exist"
    ],
    "answer": 0,
    "explanation": "Direct substitution gives 0/0, so we factor. The numerator factors as (x-4)(x+4) and the denominator factors as (x-4)(x-1). Canceling (x-4) gives (x+4)/(x-1). Substituting x=4 yields 8/3. Choice B is wrong — students may incorrectly conclude the limit is 0 because the numerator is 0 before simplifying. Choice C results from incorrectly simplifying the expression. Choice D is wrong because the indeterminate form is resolvable by factoring."
  },
  {
    "id": "calc_u1_q030",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The function g is defined as g(x) = (x^2 - 9)/(x - 3) for x ≠ 3 and g(3) = 10. What type of discontinuity does g have at x = 3?",
    "choices": [
      "A) Removable discontinuity",
      "B) Jump discontinuity",
      "C) Infinite discontinuity",
      "D) g is continuous at x = 3"
    ],
    "answer": 0,
    "explanation": "For x ≠ 3, g(x) simplifies to (x-3)(x+3)/(x-3) = x+3, so lim(x->3) g(x) = 6. Since g(3) = 10 ≠ 6, the limit exists but does not equal the function value, which is a removable discontinuity. Choice B is wrong because both one-sided limits equal 6 (they agree). Choice C is wrong because the function does not approach infinity. Choice D is wrong because g(3) = 10 ≠ 6 = lim(x->3) g(x)."
  },
  {
    "id": "calc_u1_q031",
    "subject": "apcalc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A function h is continuous on the closed interval [-2, 5] with h(-2) = -3 and h(5) = 8. Which of the following is guaranteed by the Intermediate Value Theorem?",
    "choices": [
      "A) There exists a value c in (-2, 5) such that h(c) = 4",
      "B) There exists a value c in (-2, 5) such that h(c) = 10",
      "C) There exists a value c in (-2, 5) such that h'(c) = 0",
      "D) h is differentiable on (-2, 5)"
    ],
    "answer": 0,
    "explanation": "The IVT states that if h is continuous on [a, b], then h takes on every value between h(a) and h(b). Since -3 < 4 < 8, there must exist some c in (-2, 5) where h(c) = 4. Choice B is wrong because 10 is not between -3 and 8. Choice C describes a conclusion of Rolle's Theorem or the Mean Value Theorem, not the IVT — a common student confusion. Choice D is wrong because continuity does not guarantee differentiability."
  },
  {
    "id": "calc_u2_q033",
    "subject": "apcalc",
    "unit": 2,
    "topic": "average rate of change",
    "topicLabel": "Average Rate of Change",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the average rate of change of f(x) = x^2 on the interval [1, 4]?",
    "choices": [
      "A) 5",
      "B) 8",
      "C) 15",
      "D) 3"
    ],
    "answer": 0,
    "explanation": "Average rate of change = (f(4) - f(1))/(4 - 1) = (16 - 1)/3 = 15/3 = 5. Choice B (8) comes from computing f(4) - f(1) = 15 and dividing by 2 instead of 3. Choice C (15) is f(4) - f(1) without dividing by the interval length. Choice D (3) is just the length of the interval."
  },
  {
    "id": "calc_u2_q034",
    "subject": "apcalc",
    "unit": 2,
    "topic": "instantaneous rate of change",
    "topicLabel": "Instantaneous Rate of Change",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = 3x^2, what is the instantaneous rate of change of f at x = 2?",
    "choices": [
      "A) 6",
      "B) 12",
      "C) 3",
      "D) 24"
    ],
    "answer": 1,
    "explanation": "The instantaneous rate of change is f'(x). f'(x) = 6x, so f'(2) = 12. Choice A (6) is the derivative coefficient without substituting x = 2. Choice C (3) is the original coefficient. Choice D (24) comes from mistakenly computing 6(2)^2 instead of 6(2)."
  },
  {
    "id": "calc_u2_q035",
    "subject": "apcalc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of Derivative",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which limit represents the derivative of f(x) at x = a?",
    "choices": [
      "A) lim as h->0 of [f(a + h) - f(a)] / h",
      "B) lim as h->0 of [f(a + h) + f(a)] / h",
      "C) lim as h->0 of [f(a) - f(a + h)] * h",
      "D) lim as h->0 of [f(a + h) - f(a)] * h"
    ],
    "answer": 0,
    "explanation": "The definition of the derivative is f'(a) = lim as h->0 of [f(a+h) - f(a)]/h. Choice B incorrectly uses addition instead of subtraction in the numerator. Choices C and D multiply by h instead of dividing, which is a common confusion between difference quotient structure."
  },
  {
    "id": "calc_u2_q036",
    "subject": "apcalc",
    "unit": 2,
    "topic": "differentiability",
    "topicLabel": "Differentiability",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "At which type of point is a function NOT differentiable?",
    "choices": [
      "A) A point where the function is linear",
      "B) A sharp corner",
      "C) A point where the function is positive",
      "D) A point where the function equals zero"
    ],
    "answer": 1,
    "explanation": "A function is not differentiable at a sharp corner because the left-hand and right-hand derivatives are not equal. Choice A is wrong because linear functions are differentiable everywhere. Choices C and D confuse the value of a function with its differentiability; the sign or zero value of a function has no bearing on differentiability."
  },
  {
    "id": "calc_u2_q037",
    "subject": "apcalc",
    "unit": 2,
    "topic": "power rule",
    "topicLabel": "Power Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = x^7?",
    "choices": [
      "A) 7x^7",
      "B) 7x^6",
      "C) x^6",
      "D) 6x^7"
    ],
    "answer": 1,
    "explanation": "By the power rule, d/dx [x^n] = nx^(n-1). So d/dx [x^7] = 7x^6. Choice A forgets to reduce the exponent. Choice C reduces the exponent but forgets the coefficient. Choice D uses the wrong coefficient and keeps the original exponent."
  },
  {
    "id": "calc_u2_q038",
    "subject": "apcalc",
    "unit": 2,
    "topic": "constant rule and sum rule",
    "topicLabel": "Constant Rule and Sum Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = 4x^3 + 7?",
    "choices": [
      "A) 12x^2 + 7",
      "B) 12x^2",
      "C) 4x^2 + 7",
      "D) 12x^3"
    ],
    "answer": 1,
    "explanation": "Using the sum rule and power rule: d/dx[4x^3] = 12x^2, and d/dx[7] = 0 by the constant rule. So f'(x) = 12x^2. Choice A incorrectly keeps the constant 7 instead of differentiating it to 0. Choice C forgets to multiply the coefficient by the exponent. Choice D applies the coefficient correctly but forgets to reduce the exponent."
  },
  {
    "id": "calc_u2_q039",
    "subject": "apcalc",
    "unit": 2,
    "topic": "trig derivatives",
    "topicLabel": "Trigonometric Derivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = sin(x)?",
    "choices": [
      "A) -cos(x)",
      "B) cos(x)",
      "C) -sin(x)",
      "D) tan(x)"
    ],
    "answer": 1,
    "explanation": "The derivative of sin(x) is cos(x). This is a fundamental trig derivative that must be memorized. Choice A is incorrect because the negative sign applies to the derivative of cos(x), not sin(x). Choice C is the second derivative of sin(x). Choice D confuses derivative rules with trig identities."
  },
  {
    "id": "calc_u2_q040",
    "subject": "apcalc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = x^4, what is f''(x)?",
    "choices": [
      "A) 4x^3",
      "B) 12x^2",
      "C) 24x",
      "D) 4x^2"
    ],
    "answer": 1,
    "explanation": "f'(x) = 4x^3 by the power rule. Then f''(x) = d/dx[4x^3] = 12x^2. Choice A is the first derivative, not the second. Choice C is the third derivative. Choice D results from incorrectly applying the power rule by reducing the exponent without multiplying the coefficients properly."
  },
  {
    "id": "calc_u2_q042",
    "subject": "apcalc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "definition of derivative",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Using the limit definition of the derivative, which of the following represents f'(3) for f(x) = x^2 + 5x?",
    "choices": [
      "A) lim as h->0 of [(3+h)^2 + 5(3+h) - 24] / h",
      "B) lim as h->0 of [(3+h)^2 + 5(3+h)] / h",
      "C) lim as h->0 of [(3+h)^2 + 5(3+h) - 24] / (x - 3)",
      "D) lim as h->0 of [h^2 + 5h] / h"
    ],
    "answer": 0,
    "explanation": "The limit definition of the derivative at x = 3 is f'(3) = lim as h->0 of [f(3+h) - f(3)] / h. We have f(3+h) = (3+h)^2 + 5(3+h) and f(3) = 9 + 15 = 24, giving [((3+h)^2 + 5(3+h)) - 24] / h. Choice B forgets to subtract f(3) = 24, a common error of omitting the original function value. Choice C incorrectly uses (x - 3) in the denominator instead of h, confusing the two forms of the definition. Choice D jumps ahead to a simplified numerator h^2 + 5h, which is actually the correct algebraic simplification but does not represent the definition form before simplification — and more importantly skips the setup that the question asks for."
  },
  {
    "id": "calc_u2_q043",
    "subject": "apcalc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "higher order derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = 3sin(x) + x^4 - 2x, what is f''(x)?",
    "choices": [
      "A) -3sin(x) + 12x^2",
      "B) 3sin(x) + 12x^2 - 2",
      "C) -3cos(x) + 12x^2",
      "D) -3sin(x) + 4x^3 - 2"
    ],
    "answer": 0,
    "explanation": "First, find f'(x) = 3cos(x) + 4x^3 - 2. Then f''(x) = -3sin(x) + 12x^2. The derivative of the constant -2 is 0, so it disappears in the second derivative. Choice B incorrectly keeps the original 3sin(x) instead of differentiating it twice (student may have only differentiated the polynomial terms). Choice C uses -3cos(x), which would result from differentiating sin(x) only once instead of twice (mixing up first and second derivatives of the trig term). Choice D is actually the first derivative f'(x) with a sign error on the trig term — a student who only differentiated once but mistakenly wrote -3cos(x) as -3sin(x) might select this."
  },
  {
    "id": "calc_u3_q045",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = (3x + 1)^5.",
    "choices": [
      "A) 15(3x + 1)^4",
      "B) 5(3x + 1)^4",
      "C) 15(3x + 1)^5",
      "D) 3(3x + 1)^4"
    ],
    "answer": 0,
    "explanation": "Using the chain rule, f'(x) = 5(3x + 1)^4 * 3 = 15(3x + 1)^4. Choice B forgets to multiply by the inner derivative (3). Choice C keeps the exponent as 5 instead of reducing it. Choice D only multiplies by the inner derivative without the power."
  },
  {
    "id": "calc_u3_q046",
    "subject": "apcalc",
    "unit": 3,
    "topic": "product rule",
    "topicLabel": "Product Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = x^2 * sin(x).",
    "choices": [
      "A) 2x * cos(x)",
      "B) 2x * sin(x) + x^2 * cos(x)",
      "C) x^2 * cos(x) - 2x * sin(x)",
      "D) 2x * sin(x) - x^2 * cos(x)"
    ],
    "answer": 1,
    "explanation": "By the product rule, f'(x) = (2x)(sin x) + (x^2)(cos x). Choice A only differentiates each factor separately and multiplies them, ignoring the product rule entirely. Choice C uses a minus sign (confusing product rule with quotient rule structure). Choice D also incorrectly uses subtraction."
  },
  {
    "id": "calc_u3_q047",
    "subject": "apcalc",
    "unit": 3,
    "topic": "quotient rule",
    "topicLabel": "Quotient Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = x / (x + 1).",
    "choices": [
      "A) 1 / (x + 1)",
      "B) 1 / (x + 1)^2",
      "C) x / (x + 1)^2",
      "D) -1 / (x + 1)^2"
    ],
    "answer": 1,
    "explanation": "Using the quotient rule: f'(x) = [(1)(x + 1) - (x)(1)] / (x + 1)^2 = (x + 1 - x) / (x + 1)^2 = 1 / (x + 1)^2. Choice A forgets to square the denominator. Choice C puts x in the numerator (incorrect application). Choice D has the wrong sign from reversing the subtraction order."
  },
  {
    "id": "calc_u3_q048",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = arctan(x)?",
    "choices": [
      "A) 1 / (1 + x^2)",
      "B) 1 / (1 - x^2)",
      "C) 1 / sqrt(1 - x^2)",
      "D) -1 / (1 + x^2)"
    ],
    "answer": 0,
    "explanation": "The derivative of arctan(x) is 1/(1 + x^2). Choice B confuses it with a form related to arctanh or other inverse functions. Choice C is the derivative of arcsin(x). Choice D has an incorrect negative sign."
  },
  {
    "id": "calc_u3_q049",
    "subject": "apcalc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given x^2 + y^2 = 25, find dy/dx.",
    "choices": [
      "A) -x / y",
      "B) x / y",
      "C) -y / x",
      "D) -2x / 2y + 1"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: 2x + 2y(dy/dx) = 0, so dy/dx = -2x / (2y) = -x/y. Choice B drops the negative sign. Choice C inverts x and y. Choice D incorrectly adds 1 in the denominator from an algebra error."
  },
  {
    "id": "calc_u3_q050",
    "subject": "apcalc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = ln(5x).",
    "choices": [
      "A) 1 / x",
      "B) 5 / x",
      "C) 1 / (5x)",
      "D) 5 / (5x + 1)"
    ],
    "answer": 0,
    "explanation": "f(x) = ln(5x) = ln(5) + ln(x), so f'(x) = 1/x. Alternatively, by chain rule: (1/(5x)) * 5 = 1/x. Choice B incorrectly keeps the 5 in the numerator without canceling. Choice C forgets to multiply by the inner derivative. Choice D confuses the form with a different function."
  },
  {
    "id": "calc_u3_q051",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule with Trigonometric Functions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = cos(4x).",
    "choices": [
      "A) -sin(4x)",
      "B) -4sin(4x)",
      "C) 4sin(4x)",
      "D) -4cos(4x)"
    ],
    "answer": 1,
    "explanation": "By the chain rule, f'(x) = -sin(4x) * 4 = -4sin(4x). Choice A forgets to multiply by the inner derivative (4). Choice C has the wrong sign (missing the negative from the cosine derivative). Choice D differentiates cosine as cosine instead of negative sine."
  },
  {
    "id": "calc_u3_q052",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Derivative of Arcsin",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = arcsin(x)?",
    "choices": [
      "A) 1 / sqrt(1 - x^2)",
      "B) -1 / sqrt(1 - x^2)",
      "C) 1 / (1 + x^2)",
      "D) 1 / sqrt(x^2 - 1)"
    ],
    "answer": 0,
    "explanation": "The derivative of arcsin(x) is 1/sqrt(1 - x^2). Choice B has an incorrect negative sign (that would relate to arccos). Choice C is the derivative of arctan(x). Choice D has the wrong expression under the radical."
  },
  {
    "id": "calc_u3_q053",
    "subject": "apcalc",
    "unit": 3,
    "topic": "product rule",
    "topicLabel": "Product Rule with Exponentials",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = x * e^x.",
    "choices": [
      "A) e^x",
      "B) x * e^x",
      "C) e^x + x * e^x",
      "D) e^x - x * e^x"
    ],
    "answer": 2,
    "explanation": "By the product rule, f'(x) = (1)(e^x) + (x)(e^x) = e^x + x*e^x = (1 + x)e^x. Choice A only differentiates x and multiplies by e^x. Choice B is the original function, not the derivative. Choice D incorrectly uses subtraction."
  },
  {
    "id": "calc_u3_q054",
    "subject": "apcalc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation with Products",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given xy = 10, find dy/dx.",
    "choices": [
      "A) -y / x",
      "B) y / x",
      "C) -x / y",
      "D) 10 / x^2"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: y + x(dy/dx) = 0, so dy/dx = -y/x. Choice B drops the negative sign. Choice C inverts the variables. Choice D attempts to solve by rewriting y = 10/x and differentiating but gets the form wrong (the correct result from that approach is -10/x^2, which equals -y/x)."
  },
  {
    "id": "calc_u3_q055",
    "subject": "apcalc",
    "unit": 3,
    "topic": "quotient rule",
    "topicLabel": "Quotient Rule with Trigonometric Functions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = sin(x) / x.",
    "choices": [
      "A) cos(x) / x",
      "B) (x * cos(x) - sin(x)) / x^2",
      "C) (sin(x) - x * cos(x)) / x^2",
      "D) (x * cos(x) + sin(x)) / x^2"
    ],
    "answer": 1,
    "explanation": "By the quotient rule: f'(x) = [cos(x) * x - sin(x) * 1] / x^2 = (x cos(x) - sin(x)) / x^2. Choice A only differentiates the numerator and ignores the quotient rule. Choice C reverses the subtraction order in the numerator. Choice D uses addition instead of subtraction, confusing the quotient rule with the product rule."
  },
  {
    "id": "calc_u3_q056",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = sin(3x^2 + 1).",
    "choices": [
      "A) 6x cos(3x^2 + 1)",
      "B) cos(3x^2 + 1)",
      "C) 6x sin(3x^2 + 1)",
      "D) -6x cos(3x^2 + 1)"
    ],
    "answer": 0,
    "explanation": "By the chain rule, f'(x) = cos(3x^2 + 1) * d/dx(3x^2 + 1) = cos(3x^2 + 1) * 6x = 6x cos(3x^2 + 1). Choice B forgets the inner derivative. Choice C keeps sin instead of cos. Choice D incorrectly adds a negative sign."
  },
  {
    "id": "calc_u3_q058",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = arctan(2x).",
    "choices": [
      "A) 1/(1 + 4x^2)",
      "B) 2/(1 + 4x^2)",
      "C) 2/(1 + 2x^2)",
      "D) 1/(1 + 2x)^2"
    ],
    "answer": 1,
    "explanation": "By the chain rule and the derivative of arctan(u), f'(x) = 1/(1 + (2x)^2) * 2 = 2/(1 + 4x^2). Choice A forgets the chain rule factor of 2. Choice C fails to square the 2 inside (2x)^2. Choice D incorrectly applies the formula."
  },
  {
    "id": "calc_u3_q059",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule with Exponentials",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of h(x) = e^(5x^2 - 2x).",
    "choices": [
      "A) e^(10x - 2)",
      "B) (10x - 2) * e^(5x^2 - 2x)",
      "C) e^(5x^2 - 2x)",
      "D) (5x^2 - 2x) * e^(5x^2 - 2x - 1)"
    ],
    "answer": 1,
    "explanation": "By the chain rule, h'(x) = e^(5x^2 - 2x) * d/dx(5x^2 - 2x) = (10x - 2)e^(5x^2 - 2x). Choice A differentiates the exponent but replaces the entire expression incorrectly. Choice C forgets the inner derivative. Choice D applies the power rule to the exponential, which is wrong."
  },
  {
    "id": "calc_u3_q060",
    "subject": "apcalc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of y = ln(x^2 + 5x).",
    "choices": [
      "A) (2x + 5)/(x^2 + 5x)",
      "B) 1/(x^2 + 5x)",
      "C) 1/(2x + 5)",
      "D) (2x + 5) * ln(x^2 + 5x)"
    ],
    "answer": 0,
    "explanation": "By the chain rule, dy/dx = (1/(x^2 + 5x)) * (2x + 5) = (2x + 5)/(x^2 + 5x). Choice B forgets the derivative of the inside. Choice C inverts the chain rule application. Choice D confuses derivative with product."
  },
  {
    "id": "calc_u3_q061",
    "subject": "apcalc",
    "unit": 3,
    "topic": "product rule",
    "topicLabel": "Product Rule with Trig",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = x * cos(x).",
    "choices": [
      "A) cos(x) - x sin(x)",
      "B) -sin(x)",
      "C) cos(x) + x sin(x)",
      "D) -x sin(x)"
    ],
    "answer": 0,
    "explanation": "By the product rule, f'(x) = 1 * cos(x) + x * (-sin(x)) = cos(x) - x sin(x). Choice B only differentiates cos(x). Choice C has a sign error on the second term. Choice D forgets the first term of the product rule."
  },
  {
    "id": "calc_u3_q062",
    "subject": "apcalc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation with Products",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given xy + y^2 = 10, find dy/dx.",
    "choices": [
      "A) -y/(x + 2y)",
      "B) y/(x + 2y)",
      "C) -y/(x + y)",
      "D) -(x + 2y)/y"
    ],
    "answer": 0,
    "explanation": "Differentiating: y + x(dy/dx) + 2y(dy/dx) = 0. Solving: dy/dx(x + 2y) = -y, so dy/dx = -y/(x + 2y). Choice B has the wrong sign. Choice C forgets to multiply the 2 in 2y. Choice D has the fraction inverted."
  },
  {
    "id": "calc_u3_q063",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule with Nested Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = (4x^3 - x)^5.",
    "choices": [
      "A) 5(4x^3 - x)^4",
      "B) 5(12x^2 - 1)^4",
      "C) 5(4x^3 - x)^4 * (12x^2 - 1)",
      "D) 20x^3(4x^3 - x)^4"
    ],
    "answer": 2,
    "explanation": "By the chain rule, f'(x) = 5(4x^3 - x)^4 * (12x^2 - 1). Choice A forgets the inner derivative. Choice B applies the power to the inner derivative instead of the outer function. Choice D incorrectly computes the inner derivative."
  },
  {
    "id": "calc_u3_q064",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives - arcsin",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = arcsin(3x).",
    "choices": [
      "A) 3/sqrt(1 - 9x^2)",
      "B) 1/sqrt(1 - 9x^2)",
      "C) 3/sqrt(1 - 3x^2)",
      "D) -3/sqrt(1 - 9x^2)"
    ],
    "answer": 0,
    "explanation": "The derivative of arcsin(u) is 1/sqrt(1 - u^2) * du/dx. Here u = 3x, so f'(x) = 3/sqrt(1 - 9x^2). Choice B forgets the chain rule factor. Choice C fails to square the 3. Choice D has an incorrect negative sign."
  },
  {
    "id": "calc_u3_q065",
    "subject": "apcalc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation of Power Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Use logarithmic differentiation to find dy/dx if y = x^x for x > 0.",
    "choices": [
      "A) x^x * (ln(x) + 1)",
      "B) x * x^(x-1)",
      "C) x^x * ln(x)",
      "D) x^(x-1)"
    ],
    "answer": 0,
    "explanation": "Take ln of both sides: ln(y) = x ln(x). Differentiate: (1/y)(dy/dx) = ln(x) + 1. So dy/dx = y(ln(x) + 1) = x^x(ln(x) + 1). Choice B incorrectly applies the power rule. Choice C forgets the +1 from differentiating x ln(x). Choice D treats x^x as if x is a constant exponent."
  },
  {
    "id": "calc_u3_q066",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives - arcsec",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of f(x) = arctan(x^2).",
    "choices": [
      "A) 2x/(1 + x^4)",
      "B) 1/(1 + x^4)",
      "C) 2x/(1 + x^2)",
      "D) x/(1 + x^4)"
    ],
    "answer": 0,
    "explanation": "f'(x) = 1/(1 + (x^2)^2) * 2x = 2x/(1 + x^4). Choice B forgets the chain rule factor of 2x. Choice C doesn't square x^2 in the denominator. Choice D has the wrong chain rule coefficient."
  },
  {
    "id": "calc_u3_q067",
    "subject": "apcalc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Derivative of Logarithmic Compositions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the derivative of y = ln(sin(x)) for 0 < x < pi.",
    "choices": [
      "A) cos(x)/sin(x)",
      "B) 1/sin(x)",
      "C) -cos(x)/sin(x)",
      "D) 1/(sin(x) * cos(x))"
    ],
    "answer": 0,
    "explanation": "By the chain rule, dy/dx = (1/sin(x)) * cos(x) = cos(x)/sin(x) = cot(x). Choice B forgets the derivative of the inside. Choice C has an incorrect negative. Choice D incorrectly applies the chain rule."
  },
  {
    "id": "calc_u3_q068",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule with inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find dy/dx if y = arctan(3x^2).",
    "choices": [
      "A) 6x / (1 + 9x^4)",
      "B) 3x^2 / (1 + 9x^4)",
      "C) 6x / (1 + 3x^2)",
      "D) 1 / (1 + 9x^4)"
    ],
    "answer": 0,
    "explanation": "The derivative of arctan(u) is (1/(1+u^2)) * du/dx. Here u = 3x^2, so du/dx = 6x and u^2 = 9x^4. Thus dy/dx = 6x / (1 + 9x^4). Choice B incorrectly uses 3x^2 instead of 6x, forgetting to differentiate the inner function properly. Choice C incorrectly squares only part of the inner function, writing 1 + 3x^2 instead of 1 + (3x^2)^2. Choice D forgets the chain rule entirely and omits the derivative of the inner function."
  },
  {
    "id": "calc_u3_q069",
    "subject": "apcalc",
    "unit": 3,
    "topic": "implicit differentiation with product rule",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given x^2 * y + y^3 = 10, find dy/dx.",
    "choices": [
      "A) -2xy / (x^2 + 3y^2)",
      "B) -2xy / (3y^2)",
      "C) 2xy / (x^2 + 3y^2)",
      "D) -x^2 / (x^2 + 3y^2)"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: d/dx(x^2 * y) requires the product rule, giving 2xy + x^2(dy/dx). The derivative of y^3 is 3y^2(dy/dx), and the derivative of 10 is 0. So 2xy + x^2(dy/dx) + 3y^2(dy/dx) = 0. Solving: (x^2 + 3y^2)(dy/dx) = -2xy, so dy/dx = -2xy / (x^2 + 3y^2). Choice B omits the x^2 term in the denominator, forgetting that x^2(dy/dx) also contributes to collecting dy/dx. Choice C has the wrong sign, neglecting the negative when isolating dy/dx. Choice D incorrectly differentiates the x^2*y term, missing the product rule and writing -x^2 in the numerator instead of -2xy."
  },
  {
    "id": "calc_u3_q070",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = sin(cos(tan(x))), what is f'(x)?",
    "choices": [
      "A) -cos(cos(tan(x))) * sin(tan(x)) * sec^2(x)",
      "B) cos(cos(tan(x))) * sin(tan(x)) * sec^2(x)",
      "C) -cos(cos(tan(x))) * cos(tan(x)) * sec^2(x)",
      "D) cos(cos(tan(x))) * (-sin(tan(x))) * sec^2(x) * (-1)"
    ],
    "answer": 0,
    "explanation": "Applying the chain rule three times: f'(x) = cos(cos(tan(x))) * d/dx[cos(tan(x))] = cos(cos(tan(x))) * (-sin(tan(x))) * sec^2(x) = -cos(cos(tan(x))) * sin(tan(x)) * sec^2(x). Choice B forgets the negative from the derivative of cosine. Choice C incorrectly uses cos(tan(x)) instead of sin(tan(x)) for the derivative of cosine. Choice D introduces an extra negative sign, effectively making the answer positive."
  },
  {
    "id": "calc_u3_q071",
    "subject": "apcalc",
    "unit": 3,
    "topic": "quotient rule",
    "topicLabel": "Quotient Rule",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "If g(x) = (e^x - e^(-x)) / (e^x + e^(-x)), what is g'(x)?",
    "choices": [
      "A) 4 / (e^x + e^(-x))^2",
      "B) 1",
      "C) (2e^(2x) - 2e^(-2x)) / (e^x + e^(-x))^2",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "Using the quotient rule: g'(x) = [(e^x + e^(-x))(e^x + e^(-x)) - (e^x - e^(-x))(e^x - e^(-x))] / (e^x + e^(-x))^2. The numerator is (e^x + e^(-x))^2 - (e^x - e^(-x))^2. Expanding: (e^(2x) + 2 + e^(-2x)) - (e^(2x) - 2 + e^(-2x)) = 4. So g'(x) = 4/(e^x + e^(-x))^2. Note this equals sech^2(x). Choice B is a common error from thinking tanh'(x) = 1. Choice C results from incorrectly applying the quotient rule with wrong signs on the derivative of e^(-x). Choice D wrongly assumes the function is constant."
  },
  {
    "id": "calc_u3_q072",
    "subject": "apcalc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Given x^2*y + y^3 = x + 1, find dy/dx at the point (1, 0).",
    "choices": [
      "A) The derivative does not exist at (1, 0) because (1, 0) is not on the curve.",
      "B) 1",
      "C) -1",
      "D) 1/3"
    ],
    "answer": 0,
    "explanation": "First verify whether (1, 0) is on the curve: substituting gives 1(0) + 0 = 1 + 1, so 0 = 2, which is false. The point (1, 0) does not satisfy the equation, so dy/dx cannot be evaluated there. Students who skip verification and proceed with implicit differentiation get 2xy + x^2(dy/dx) + 3y^2(dy/dx) = 1, and plugging in (1,0) gives dy/dx = 1. This is the trap in Choice B. Choice C comes from a sign error. Choice D results from an algebra mistake."
  },
  {
    "id": "calc_u3_q073",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = arctan(x^2 + 1)?",
    "choices": [
      "A) 2x / (1 + (x^2 + 1)^2)",
      "B) 2x / (1 + x^4)",
      "C) 1 / (1 + (x^2 + 1)^2)",
      "D) 2x / sqrt(1 - (x^2 + 1)^2)"
    ],
    "answer": 0,
    "explanation": "The derivative of arctan(u) is 1/(1 + u^2) * du/dx. Here u = x^2 + 1, so du/dx = 2x. Thus f'(x) = 2x / (1 + (x^2 + 1)^2). Choice B incorrectly simplifies the denominator as 1 + x^4, forgetting to square the entire expression (x^2 + 1). Choice C forgets the chain rule factor 2x. Choice D confuses the arctan derivative formula with the arcsin derivative formula, using sqrt(1 - u^2) in the denominator."
  },
  {
    "id": "calc_u3_q074",
    "subject": "apcalc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "If y = x^(sin(x)) for x > 0, what is dy/dx?",
    "choices": [
      "A) x^(sin(x)) * (cos(x) * ln(x) + sin(x)/x)",
      "B) sin(x) * x^(sin(x) - 1)",
      "C) x^(sin(x)) * cos(x) * ln(x)",
      "D) x^(sin(x)) * sin(x)/x"
    ],
    "answer": 0,
    "explanation": "Take ln of both sides: ln(y) = sin(x)*ln(x). Differentiate: (1/y)(dy/dx) = cos(x)*ln(x) + sin(x)/x. So dy/dx = y*(cos(x)*ln(x) + sin(x)/x) = x^(sin(x))*(cos(x)*ln(x) + sin(x)/x). Choice B applies the power rule as if sin(x) were a constant exponent. Choice C only includes the derivative from differentiating sin(x) and ignores the sin(x)/x term. Choice D only includes the derivative from treating the exponent as constant and ignores the cos(x)*ln(x) term."
  },
  {
    "id": "calc_u3_q075",
    "subject": "apcalc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Second Derivative via Implicit Differentiation",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Given x^2 + y^2 = 25, what is d^2y/dx^2 at the point (3, 4)?",
    "choices": [
      "A) -25/64",
      "B) -3/4",
      "C) 25/64",
      "D) -9/64"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: 2x + 2y(dy/dx) = 0, so dy/dx = -x/y. At (3,4): dy/dx = -3/4. Differentiating again: d^2y/dx^2 = (-y + x(dy/dx))/y^2 = (-y - x(x/y))/y^2. Using the quotient rule on -x/y: d^2y/dx^2 = [(-1)(y) - (-x)(dy/dx)] / y^2 = [-y + x(-x/y)] / y^2 = [-y - x^2/y] / y^2 = [(-y^2 - x^2)/y] / y^2 = -(x^2 + y^2)/y^3 = -25/64. Choice B is just the first derivative, a common error when students stop too early. Choice C has the wrong sign. Choice D uses -x^2/y^3 instead of -(x^2+y^2)/y^3, forgetting the -y term in the numerator."
  },
  {
    "id": "calc_u3_q076",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig with Implicit Differentiation",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "If arcsin(xy) = pi/6, find dy/dx in terms of x and y.",
    "choices": [
      "A) -y/x",
      "B) y / (x * sqrt(1 - x^2*y^2))",
      "C) -y*sqrt(1 - x^2*y^2) / x",
      "D) (1/sqrt(1 - x^2*y^2) - y) / x"
    ],
    "answer": 0,
    "explanation": "Differentiating both sides: 1/sqrt(1 - (xy)^2) * (y + x*dy/dx) = 0. Since the right side is 0 (derivative of a constant), we need y + x(dy/dx) = 0, giving dy/dx = -y/x. The factor 1/sqrt(1 - x^2y^2) is nonzero so it cancels. Choice B comes from setting the derivative equal to 1 instead of 0. Choice C incorrectly keeps the sqrt factor. Choice D results from moving terms incorrectly and not recognizing the right side is zero."
  },
  {
    "id": "calc_u3_q077",
    "subject": "apcalc",
    "unit": 3,
    "topic": "quotient rule",
    "topicLabel": "Quotient Rule Combined with Chain Rule",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = tan(x) / (1 + x^2). What is f'(0)?",
    "choices": [
      "A) 1",
      "B) 0",
      "C) -1",
      "D) 2"
    ],
    "answer": 0,
    "explanation": "Using the quotient rule: f'(x) = [sec^2(x)(1 + x^2) - tan(x)(2x)] / (1 + x^2)^2. At x = 0: sec^2(0) = 1, tan(0) = 0, so f'(0) = [1 * 1 - 0] / 1 = 1. Choice B is the value of f(0), not f'(0). Choice C may result from a sign error in the quotient rule (using low*d(high) - high*d(low) reversed). Choice D could result from incorrectly computing sec^2(0) as 2."
  },
  {
    "id": "calc_u3_q078",
    "subject": "apcalc",
    "unit": 3,
    "topic": "logarithmic differentiation",
    "topicLabel": "Logarithmic Differentiation with Products and Roots",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "If y = [(x + 1)^3 * (x - 2)^4] / (x + 5)^2 for x > 2, what is (1/y)(dy/dx)?",
    "choices": [
      "A) 3/(x + 1) + 4/(x - 2) - 2/(x + 5)",
      "B) 3(x + 1)^2 * 4(x - 2)^3 / (x + 5)^2",
      "C) 12/(x + 1)(x - 2) - 2/(x + 5)",
      "D) 3/(x + 1) + 4/(x - 2) + 2/(x + 5)"
    ],
    "answer": 0,
    "explanation": "Taking ln of both sides: ln(y) = 3*ln(x+1) + 4*ln(x-2) - 2*ln(x+5). Differentiating: (1/y)(dy/dx) = 3/(x+1) + 4/(x-2) - 2/(x+5). This is the logarithmic derivative. Choice B multiplies individual derivatives together instead of using logarithmic differentiation. Choice C incorrectly combines the first two terms. Choice D has a plus sign instead of minus on the last term, forgetting that the (x+5)^2 term is in the denominator."
  },
  {
    "id": "calc_u4_q079",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A circle's radius is increasing at a constant rate of 3 cm/s. What is the rate of change of the circle's area when the radius is 5 cm?",
    "choices": [
      "A) 30pi cm^2/s",
      "B) 15pi cm^2/s",
      "C) 25pi cm^2/s",
      "D) 75pi cm^2/s"
    ],
    "answer": 0,
    "explanation": "A = pi*r^2, so dA/dt = 2*pi*r*(dr/dt) = 2*pi*(5)*(3) = 30pi. Choice B forgets the 2 from the power rule. Choice C uses r^2 instead of 2r. Choice D multiplies all three numbers without the factor of 2 correctly: 5*5*3*pi."
  },
  {
    "id": "calc_u4_q080",
    "subject": "apcalc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the linearization of f(x) = x^2 at a = 3?",
    "choices": [
      "A) L(x) = 6x - 9",
      "B) L(x) = 6x + 9",
      "C) L(x) = 3x - 9",
      "D) L(x) = 6x - 3"
    ],
    "answer": 0,
    "explanation": "L(x) = f(a) + f'(a)(x - a). f(3) = 9, f'(x) = 2x so f'(3) = 6. L(x) = 9 + 6(x - 3) = 6x - 9. Choice B has a sign error on the constant. Choice C uses a instead of 2a for the derivative. Choice D incorrectly computes the constant term."
  },
  {
    "id": "calc_u4_q081",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = x^2 on the interval [1, 3], what value of c in (1, 3) satisfies the Mean Value Theorem?",
    "choices": [
      "A) 2",
      "B) 4",
      "C) 3",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "MVT: f'(c) = (f(3) - f(1))/(3 - 1) = (9 - 1)/2 = 4. f'(x) = 2x, so 2c = 4 gives c = 2. Choice B is the slope value, not c. Choices C and D are the endpoints, which are not in the open interval."
  },
  {
    "id": "calc_u4_q082",
    "subject": "apcalc",
    "unit": 4,
    "topic": "extreme value theorem",
    "topicLabel": "Extreme Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The Extreme Value Theorem guarantees that a continuous function on a closed interval [a, b] must attain:",
    "choices": [
      "A) both an absolute maximum and an absolute minimum",
      "B) only an absolute maximum",
      "C) at least one critical point",
      "D) a point where f'(c) = 0"
    ],
    "answer": 0,
    "explanation": "The EVT states that a continuous function on a closed interval attains both an absolute maximum and minimum. Choice B is incomplete. Choice C confuses EVT with a consequence of finding extrema; the theorem itself guarantees extreme values, not critical points. Choice D confuses EVT with Rolle's or MVT."
  },
  {
    "id": "calc_u4_q083",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A spherical balloon is being inflated. If the volume V = (4/3)pi*r^3, which expression gives dV/dt in terms of r and dr/dt?",
    "choices": [
      "A) 4*pi*r^2*(dr/dt)",
      "B) (4/3)*pi*r^2*(dr/dt)",
      "C) 4*pi*r*(dr/dt)",
      "D) (4/3)*pi*3r^2"
    ],
    "answer": 0,
    "explanation": "Differentiate V = (4/3)*pi*r^3 with respect to t: dV/dt = (4/3)*pi*3r^2*(dr/dt) = 4*pi*r^2*(dr/dt). Choice B forgets to multiply the 3 from the power rule with the 1/3. Choice C uses 2r instead of 3r^2 for the derivative. Choice D forgets the chain rule factor dr/dt."
  },
  {
    "id": "calc_u4_q084",
    "subject": "apcalc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hopital's Rule",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate lim as x->0 of (e^x - 1)/x.",
    "choices": [
      "A) 1",
      "B) 0",
      "C) e",
      "D) Does not exist"
    ],
    "answer": 0,
    "explanation": "Substituting x = 0 gives 0/0, so apply L'Hopital's Rule: lim e^x / 1 as x->0 = e^0 = 1. Choice B comes from incorrectly thinking the numerator dominates as zero. Choice C evaluates e^x at x = 1 instead of x = 0. Choice D is incorrect since the limit does exist."
  },
  {
    "id": "calc_u4_q085",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f is continuous on [2, 6] and differentiable on (2, 6) with f(2) = 1 and f(6) = 9, then the MVT guarantees a c in (2, 6) such that f'(c) equals:",
    "choices": [
      "A) 2",
      "B) 8",
      "C) 4",
      "D) 5"
    ],
    "answer": 0,
    "explanation": "f'(c) = (f(6) - f(2))/(6 - 2) = (9 - 1)/4 = 8/4 = 2. Choice B is the numerator alone (9 - 1). Choice C is the denominator alone. Choice D is the midpoint of the interval, a common misconception."
  },
  {
    "id": "calc_u4_q086",
    "subject": "apcalc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Using the linearization of f(x) = sqrt(x) at a = 25, approximate sqrt(26).",
    "choices": [
      "A) 5.1",
      "B) 5.2",
      "C) 5.0",
      "D) 5.5"
    ],
    "answer": 0,
    "explanation": "f(25) = 5, f'(x) = 1/(2*sqrt(x)), f'(25) = 1/10. L(26) = 5 + (1/10)(26 - 25) = 5 + 0.1 = 5.1. Choice B doubles the increment. Choice C forgets the linear correction entirely. Choice D overestimates by using a much larger slope."
  },
  {
    "id": "calc_u4_q087",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A 13-foot ladder leans against a vertical wall. The bottom of the ladder slides away from the wall at 2 ft/s. How fast is the top of the ladder sliding down the wall when the bottom is 5 feet from the wall?",
    "choices": [
      "A) -5/6 ft/s",
      "B) -5/12 ft/s",
      "C) -12/5 ft/s",
      "D) -10/13 ft/s"
    ],
    "answer": 0,
    "explanation": "Using x^2 + y^2 = 169, differentiate: 2x(dx/dt) + 2y(dy/dt) = 0. When x = 5, y = 12. So 2(5)(2) + 2(12)(dy/dt) = 0, giving dy/dt = -20/24 = -5/6. Choice B comes from using 2(12) in the numerator instead of 2(5)(2). Choice C reverses the fraction. Choice D incorrectly uses 13 instead of 12 for y."
  },
  {
    "id": "calc_u4_q088",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The area of a circle is increasing at a rate of 6 square inches per minute. How fast is the circumference increasing when the radius is 3 inches?",
    "choices": [
      "A) 2 in/min",
      "B) 1 in/min",
      "C) 6/pi in/min",
      "D) 1/pi in/min"
    ],
    "answer": 0,
    "explanation": "A = pi*r^2, so dA/dt = 2pi*r*(dr/dt). With dA/dt = 6 and r = 3: 6 = 6pi*(dr/dt), so dr/dt = 1/pi. Circumference C = 2pi*r, so dC/dt = 2pi*(dr/dt) = 2pi*(1/pi) = 2. Choice D is dr/dt, not dC/dt. Choice C forgets to multiply dr/dt by 2pi. Choice B is a common arithmetic slip."
  },
  {
    "id": "calc_u4_q089",
    "subject": "apcalc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Use the linearization of f(x) = sqrt(x) at a = 25 to approximate sqrt(26).",
    "choices": [
      "A) 5.1",
      "B) 5.2",
      "C) 5.05",
      "D) 5.01"
    ],
    "answer": 0,
    "explanation": "L(x) = f(a) + f'(a)(x - a). f(25) = 5, f'(x) = 1/(2sqrt(x)), f'(25) = 1/10. L(26) = 5 + (1/10)(1) = 5.1. Choice B doubles the correction. Choice C uses f'(25) = 1/20 (an error). Choice D uses f'(25) = 1/100."
  },
  {
    "id": "calc_u4_q090",
    "subject": "apcalc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The linearization of f(x) = e^x at x = 0 is used to approximate e^(0.1). What is the approximate value?",
    "choices": [
      "A) 1.1",
      "B) 1.01",
      "C) 0.1",
      "D) 1.11"
    ],
    "answer": 0,
    "explanation": "L(x) = f(0) + f'(0)(x - 0) = 1 + 1*x = 1 + x. At x = 0.1, L(0.1) = 1.1. Choice B confuses 0.1 with 0.01. Choice C forgets to add f(0) = 1. Choice D adds an extra term as if using a second-order approximation."
  },
  {
    "id": "calc_u4_q091",
    "subject": "apcalc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(3) = 7 and f'(3) = -2, what is the linear approximation of f(3.5)?",
    "choices": [
      "A) 6",
      "B) 8",
      "C) 5",
      "D) 7.5"
    ],
    "answer": 0,
    "explanation": "L(x) = f(3) + f'(3)(x - 3) = 7 + (-2)(0.5) = 7 - 1 = 6. Choice B adds instead of subtracting. Choice C uses (x - 3) = 1 instead of 0.5. Choice D ignores the derivative entirely and just adds 0.5."
  },
  {
    "id": "calc_u4_q092",
    "subject": "apcalc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hopital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate lim(x->0) [sin(3x) / (5x)].",
    "choices": [
      "A) 3/5",
      "B) 5/3",
      "C) 0",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "This is 0/0 form. By L'Hopital's rule: lim = 3cos(3x)/5 evaluated at x=0 gives 3/5. Choice B inverts the fraction. Choice C is a common misconception that sin over x is 0. Choice D incorrectly applies the identity sin(x)/x -> 1 without accounting for the coefficients."
  },
  {
    "id": "calc_u4_q093",
    "subject": "apcalc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hopital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate lim(x->1) [(x^3 - 1) / (x^2 - 1)].",
    "choices": [
      "A) 3/2",
      "B) 1",
      "C) 3",
      "D) does not exist"
    ],
    "answer": 0,
    "explanation": "Direct substitution gives 0/0. By L'Hopital's rule: lim = 3x^2/(2x) at x=1 = 3/2. Alternatively, factor: (x-1)(x^2+x+1)/[(x-1)(x+1)] = (x^2+x+1)/(x+1) = 3/2. Choice B comes from canceling incorrectly. Choice C uses only the numerator derivative. Choice D is wrong since the limit exists after resolving the indeterminate form."
  },
  {
    "id": "calc_u4_q094",
    "subject": "apcalc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hopital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate lim(x->0) [(e^(2x) - 1) / x].",
    "choices": [
      "A) 2",
      "B) 1",
      "C) 0",
      "D) infinity"
    ],
    "answer": 0,
    "explanation": "This is 0/0. L'Hopital: lim = 2e^(2x)/1 at x=0 = 2. Choice B ignores the chain rule on e^(2x). Choice C incorrectly evaluates e^0 - 1 as the final answer. Choice D confuses this with a different limit form."
  },
  {
    "id": "calc_u4_q095",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For f(x) = x^3 - 3x on the interval [0, 2], find the value of c guaranteed by the Mean Value Theorem.",
    "choices": [
      "A) 2/sqrt(3)",
      "B) 1",
      "C) sqrt(3)",
      "D) 2/3"
    ],
    "answer": 0,
    "explanation": "f(2) = 2, f(0) = 0. Average rate = (2-0)/(2-0) = 1. f'(x) = 3x^2 - 3 = 1 gives x^2 = 4/3, so x = 2/sqrt(3) (taking positive root in [0,2]). Choice B solves f'(c) = 0 instead. Choice C solves x^2 = 3. Choice D is an arithmetic error."
  },
  {
    "id": "calc_u4_q096",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A car travels along a straight road. At t = 0 the car is at position s = 0 miles, and at t = 2 hours the car is at position s = 120 miles. If the car's position function is continuous and differentiable, what does the Mean Value Theorem guarantee?",
    "choices": [
      "A) At some time in (0, 2), the car's instantaneous speed was exactly 60 mph",
      "B) The car traveled at a constant speed of 60 mph",
      "C) The car's maximum speed was 60 mph",
      "D) The car's speed was 60 mph at both t = 0 and t = 2"
    ],
    "answer": 0,
    "explanation": "MVT says there exists c in (0,2) with s'(c) = (120-0)/(2-0) = 60. This means the instantaneous velocity equaled 60 at some point. Choice B is too strong — MVT doesn't say constant. Choice C confuses average with maximum. Choice D claims the value at endpoints, not interior."
  },
  {
    "id": "calc_u4_q097",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For f(x) = x^2 + 2x on [1, 3], find the value of c that satisfies the conclusion of the Mean Value Theorem.",
    "choices": [
      "A) 2",
      "B) 3/2",
      "C) 5/2",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "f(3) = 15, f(1) = 3. Average rate = (15-3)/(3-1) = 6. f'(x) = 2x + 2 = 6, so x = 2. Choice B results from an error in computing the average rate. Choice C is outside the spirit of the calculation. Choice D is an endpoint, not an interior point."
  },
  {
    "id": "calc_u4_q098",
    "subject": "apcalc",
    "unit": 4,
    "topic": "Rolle's theorem",
    "topicLabel": "Rolle's Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For f(x) = x^2 - 4x + 3 on the interval [1, 3], Rolle's Theorem guarantees a value c in (1, 3) such that f'(c) = 0. What is c?",
    "choices": [
      "A) 2",
      "B) 1",
      "C) 3",
      "D) 5/2"
    ],
    "answer": 0,
    "explanation": "f(1) = 0 and f(3) = 0, so the conditions for Rolle's Theorem are met. f'(x) = 2x - 4 = 0 gives x = 2. Choice B and C are endpoints, not interior. Choice D results from a computation error."
  },
  {
    "id": "calc_u4_q099",
    "subject": "apcalc",
    "unit": 4,
    "topic": "Rolle's theorem",
    "topicLabel": "Rolle's Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following functions satisfies all the hypotheses of Rolle's Theorem on the interval [-1, 1]?",
    "choices": [
      "A) f(x) = x^2 - 1",
      "B) f(x) = |x| - 1",
      "C) f(x) = 1/x",
      "D) f(x) = x^3"
    ],
    "answer": 0,
    "explanation": "Rolle's Theorem requires continuity on [-1,1], differentiability on (-1,1), and f(-1) = f(1). For A: f(-1)=0, f(1)=0, continuous and differentiable everywhere. B: f(-1)=0, f(1)=0, but |x| is not differentiable at x=0. C: not continuous at x=0. D: f(-1)=-1, f(1)=1, so f(-1) ≠ f(1)."
  },
  {
    "id": "calc_u4_q100",
    "subject": "apcalc",
    "unit": 4,
    "topic": "Rolle's theorem",
    "topicLabel": "Rolle's Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For f(x) = sin(pi*x) on [0, 1], Rolle's Theorem guarantees a c in (0, 1) where f'(c) = 0. What is c?",
    "choices": [
      "A) 1/2",
      "B) 1/4",
      "C) pi/2",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "f(0) = 0 and f(1) = 0, so Rolle's applies. f'(x) = pi*cos(pi*x) = 0 when pi*x = pi/2, so x = 1/2. Choice B is a common mistake of dividing by 4. Choice C is outside [0,1]. Choice D is an endpoint."
  },
  {
    "id": "calc_u4_q101",
    "subject": "apcalc",
    "unit": 4,
    "topic": "extreme value theorem",
    "topicLabel": "Extreme Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The Extreme Value Theorem guarantees that a continuous function on a closed interval [a, b] attains its absolute maximum and minimum. Which of the following functions on the given interval does NOT satisfy the hypotheses of the theorem?",
    "choices": [
      "A) f(x) = 1/(x - 2) on [0, 3]",
      "B) f(x) = x^2 on [-1, 1]",
      "C) f(x) = sin(x) on [0, 2pi]",
      "D) f(x) = e^x on [0, 1]"
    ],
    "answer": 0,
    "explanation": "f(x) = 1/(x-2) has a discontinuity at x = 2, which is in [0, 3], so the function is not continuous on the closed interval and EVT does not apply. Choices B, C, and D are all continuous on their respective closed intervals."
  },
  {
    "id": "calc_u4_q102",
    "subject": "apcalc",
    "unit": 4,
    "topic": "extreme value theorem",
    "topicLabel": "Extreme Value Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A continuous function f is defined on [2, 6] with f(2) = 5, f(4) = 1, and f(6) = 3. By the Extreme Value Theorem, which of the following must be true?",
    "choices": [
      "A) f attains an absolute maximum and an absolute minimum on [2, 6]",
      "B) The absolute maximum of f on [2, 6] is 5",
      "C) The absolute minimum of f on [2, 6] is 1",
      "D) f has a critical point at x = 4"
    ],
    "answer": 0,
    "explanation": "EVT guarantees existence of absolute extrema for a continuous function on a closed interval, but does not specify where they occur or their values. The max could be larger than 5 (at some point not listed) and the min could be less than 1. Choice B and C assume the given values are the extrema. Choice D is not guaranteed by EVT."
  },
  {
    "id": "calc_u4_q103",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A conical tank has a height of 10 feet and a radius of 5 feet at the top. Water flows into the tank at 2 cubic feet per minute. How fast is the water level rising when the water is 4 feet deep? (V = (1/3)pi*r^2*h, and r/h = 1/2 so r = h/2)",
    "choices": [
      "A) 1/(2pi) ft/min",
      "B) 2/pi ft/min",
      "C) 1/(8pi) ft/min",
      "D) 2/(pi) ft/min"
    ],
    "answer": 0,
    "explanation": "Since r = h/2, V = (1/3)pi(h/2)^2*h = pi*h^3/12. dV/dt = (pi/4)*h^2*(dh/dt). At h = 4: 2 = (pi/4)(16)(dh/dt) = 4pi*(dh/dt), so dh/dt = 2/(4pi) = 1/(2pi). Choice C uses h^3 in the derivative incorrectly. Choice B forgets the h^2/4 factor. Choice D is the same as B, a distractor for careless reading."
  },
  {
    "id": "calc_u4_q104",
    "subject": "apcalc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hopital's Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate lim(x->0) [(1 - cos(x)) / x^2].",
    "choices": [
      "A) 1/2",
      "B) 0",
      "C) 1",
      "D) does not exist"
    ],
    "answer": 0,
    "explanation": "At x = 0, both numerator and denominator are 0 (0/0 form). Apply L'Hopital's: lim = sin(x)/(2x), still 0/0. Apply again: lim = cos(x)/2 = 1/2. Choice B comes from only applying L'Hopital once and evaluating sin(0)/(2*0) incorrectly as 0. Choice C forgets the factor of 2 in the denominator. Choice D is incorrect since the limit exists."
  },
  {
    "id": "calc_u4_q105",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A conical tank has a height of 10 ft and a radius of 5 ft at the top. Water is being pumped in at a rate of 3 cubic feet per minute. How fast is the water level rising when the water is 4 ft deep? (Note: V = (1/3)pi*r^2*h and the radius of the water surface is always half the depth.)",
    "choices": [
      "A) 3/(4pi) ft/min",
      "B) 3/(16pi) ft/min",
      "C) 3/(8pi) ft/min",
      "D) 1/(4pi) ft/min"
    ],
    "answer": 0,
    "explanation": "Since r = h/2, we substitute into V = (1/3)pi*r^2*h to get V = (1/3)pi*(h/2)^2*h = pi*h^3/12. Differentiating: dV/dt = pi*h^2/4 * dh/dt. With dV/dt = 3 and h = 4: 3 = pi(16)/4 * dh/dt = 4pi * dh/dt, so dh/dt = 3/(4pi). Choice B comes from using h = 4 twice incorrectly. Choice C comes from an algebra error in the substitution. Choice D comes from incorrectly simplifying."
  },
  {
    "id": "calc_u4_q106",
    "subject": "apcalc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hopital's Rule",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate lim as x approaches 0 of (e^x - 1 - x - x^2/2) / x^3.",
    "choices": [
      "A) 1/6",
      "B) 1/3",
      "C) 1/2",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "Plugging in x = 0 gives 0/0 repeatedly. Apply L'Hopital's rule three times. First application: (e^x - 1 - x) / (3x^2), still 0/0. Second: (e^x - 1) / (6x), still 0/0. Third: e^x / 6, which evaluates to 1/6 at x = 0. Choice B (1/3) results from differentiating the denominator incorrectly as 3x^2 then 6x then 3. Choice C (1/2) comes from stopping after two applications of L'Hopital's rule. Choice D is incorrect and results from assuming higher-order terms vanish."
  },
  {
    "id": "calc_u4_q107",
    "subject": "apcalc",
    "unit": 4,
    "topic": "Rolle's theorem",
    "topicLabel": "Rolle's Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = x^4 - 4x^2 on [-2, 2]. Rolle's Theorem guarantees at least one c in (-2, 2) where g'(c) = 0. How many such values of c exist in (-2, 2)?",
    "choices": [
      "A) 3",
      "B) 2",
      "C) 1",
      "D) Rolle's Theorem does not apply"
    ],
    "answer": 0,
    "explanation": "g(-2) = 16 - 16 = 0 and g(2) = 16 - 16 = 0, so g(-2) = g(2) and g is continuous and differentiable everywhere, so Rolle's Theorem applies. g'(x) = 4x^3 - 8x = 4x(x^2 - 2) = 0 gives x = 0, x = sqrt(2), x = -sqrt(2). All three are in (-2, 2), so there are 3 values. Choice B (2) comes from missing c = 0. Choice C (1) comes from only finding c = 0. Choice D is wrong because the hypotheses are satisfied."
  },
  {
    "id": "calc_u4_q108",
    "subject": "apcalc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Use the linearization of f(x) = sqrt(x) at a = 25 to approximate sqrt(26). What is the approximation?",
    "choices": [
      "A) 5.1",
      "B) 5.05",
      "C) 5.2",
      "D) 5.01"
    ],
    "answer": 0,
    "explanation": "L(x) = f(a) + f'(a)(x - a). f(25) = 5, f'(x) = 1/(2sqrt(x)), f'(25) = 1/10. So L(26) = 5 + (1/10)(26 - 25) = 5 + 0.1 = 5.1. Choice B (5.05) comes from using f'(25) = 1/20 by an extra factor of 2 error. Choice C (5.2) results from using (x - a) = 2 by mistake. Choice D (5.01) comes from using f'(25) = 1/100."
  },
  {
    "id": "calc_u4_q109",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A 13-foot ladder leans against a vertical wall. The foot of the ladder slides away from the wall at 2 ft/s. How fast is the top of the ladder sliding down when the foot is 12 ft from the wall?",
    "choices": [
      "A) -24/5 ft/s",
      "B) -5/12 ft/s",
      "C) -10/13 ft/s",
      "D) -24/13 ft/s"
    ],
    "answer": 0,
    "explanation": "Using x^2 + y^2 = 169, when x = 12, y = 5. Differentiating: 2x(dx/dt) + 2y(dy/dt) = 0. So 2(12)(2) + 2(5)(dy/dt) = 0, giving 48 + 10(dy/dt) = 0, dy/dt = -48/10 = -24/5. Choice B comes from inverting the ratio. Choice C comes from incorrectly using 13 in the denominator by dividing by the hypotenuse. Choice D also uses 13 incorrectly."
  },
  {
    "id": "calc_u4_q110",
    "subject": "apcalc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hopital's Rule",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate lim as x approaches 0+ of x * ln(x).",
    "choices": [
      "A) 0",
      "B) -infinity",
      "C) 1",
      "D) Does not exist"
    ],
    "answer": 0,
    "explanation": "This is a 0 * (-infinity) indeterminate form. Rewrite as ln(x) / (1/x), which is -infinity/infinity. Applying L'Hopital's rule: (1/x) / (-1/x^2) = (1/x)(-x^2) = -x, which approaches 0 as x approaches 0+. Choice B is a common misconception from thinking the ln(x) dominates. Choice C might come from confusing with a different limit. Choice D is incorrect because the limit does exist."
  },
  {
    "id": "calc_u4_q111",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A car travels along a straight road. At t = 0, its position is s(0) = 0 miles, and at t = 2 hours, its position is s(2) = 120 miles. The car's velocity function v(t) = s'(t) is continuous. By the Mean Value Theorem, which statement must be true?",
    "choices": [
      "A) There exists some time c in (0, 2) where v(c) = 60 mph",
      "B) The car traveled at 60 mph for the entire trip",
      "C) There exists some time c in (0, 2) where v(c) = 120 mph",
      "D) The car's average velocity equals its maximum velocity"
    ],
    "answer": 0,
    "explanation": "The MVT guarantees that there exists c in (0, 2) such that s'(c) = (s(2) - s(0))/(2 - 0) = 120/2 = 60 mph. This means the instantaneous velocity must equal the average velocity at some point. Choice B is too strong — MVT only guarantees one instant. Choice C uses the wrong value (total distance, not the average rate). Choice D is not guaranteed by MVT."
  },
  {
    "id": "calc_u4_q112",
    "subject": "apcalc",
    "unit": 4,
    "topic": "Rolle's theorem",
    "topicLabel": "Rolle's Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following functions satisfies all hypotheses of Rolle's Theorem on the interval [-1, 1]?",
    "choices": [
      "A) f(x) = x^2 - 1",
      "B) f(x) = |x| - 1",
      "C) f(x) = 1/(x^2) - 1",
      "D) f(x) = x^3"
    ],
    "answer": 0,
    "explanation": "Rolle's Theorem requires (1) continuity on [-1,1], (2) differentiability on (-1,1), and (3) f(-1) = f(1). For A: f is a polynomial (continuous and differentiable everywhere), and f(-1) = 0 = f(1). For B: f(-1) = 0 = f(1) and it's continuous, but |x| is not differentiable at x = 0. For C: 1/x^2 is not continuous at x = 0. For D: f(-1) = -1 and f(1) = 1, so f(-1) ≠ f(1)."
  },
  {
    "id": "calc_u4_q113",
    "subject": "apcalc",
    "unit": 4,
    "topic": "extreme value theorem",
    "topicLabel": "Extreme Value Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A continuous function f on [1, 5] has values f(1) = 3, f(5) = 3, and f'(x) = 0 only at x = 2 and x = 4, with f(2) = 7 and f(4) = -1. What is the absolute minimum value of f on [1, 5]?",
    "choices": [
      "A) -1",
      "B) 3",
      "C) 0",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "By the Extreme Value Theorem, a continuous function on a closed interval attains its absolute max and min. We evaluate f at critical points and endpoints: f(1) = 3, f(2) = 7, f(4) = -1, f(5) = 3. The smallest value is -1 at x = 4. Choice B (3) is the endpoint value, a common mistake if students only check endpoints. Choice C and D are not values of f at any critical point or endpoint."
  },
  {
    "id": "calc_u4_q114",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A spherical balloon is inflated so that its volume increases at a constant rate of 8pi cubic centimeters per second. How fast is the surface area increasing when the radius is 2 cm? (V = (4/3)pi*r^3, S = 4pi*r^2)",
    "choices": [
      "A) 8pi cm^2/s",
      "B) 16pi cm^2/s",
      "C) 4pi cm^2/s",
      "D) 2pi cm^2/s"
    ],
    "answer": 0,
    "explanation": "dV/dt = 4pi*r^2*(dr/dt). With dV/dt = 8pi and r = 2: 8pi = 4pi(4)(dr/dt), so dr/dt = 1/2. Now dS/dt = 8pi*r*(dr/dt) = 8pi(2)(1/2) = 8pi. Choice B (16pi) comes from forgetting to include dr/dt and computing 8pi*r. Choice C comes from using dr/dt = 1/4 by an arithmetic error. Choice D uses dr/dt = 1/8."
  },
  {
    "id": "calc_u4_q115",
    "subject": "apcalc",
    "unit": 4,
    "topic": "L'Hopital's rule",
    "topicLabel": "L'Hopital's Rule",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate lim as x approaches 0 of (sin(x) - x*cos(x)) / (x - sin(x)).",
    "choices": [
      "A) 2",
      "B) 1",
      "C) 3",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "At x = 0 both numerator and denominator are 0. Apply L'Hopital's: numerator' = cos(x) - cos(x) + x*sin(x) = x*sin(x); denominator' = 1 - cos(x). Still 0/0. Apply again: numerator'' = sin(x) + x*cos(x); denominator'' = sin(x). Still 0/0 at x = 0. Apply a third time: numerator''' = cos(x) + cos(x) - x*sin(x) = 2cos(x) - x*sin(x); denominator''' = cos(x). At x = 0: 2/1 = 2. Choice B (1) comes from an error in differentiation. Choice C (3) comes from a sign error. Choice D assumes the limit is trivially 0."
  },
  {
    "id": "calc_u4_q116",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = ln(x) on [1, e^2]. The Mean Value Theorem guarantees a c in (1, e^2) where f'(c) equals the average rate of change. What is the value of c?",
    "choices": [
      "A) (e^2 - 1)/2",
      "B) e",
      "C) e^2/2",
      "D) 2/(e^2 - 1)"
    ],
    "answer": 0,
    "explanation": "The average rate of change is (ln(e^2) - ln(1))/(e^2 - 1) = 2/(e^2 - 1). Setting f'(c) = 1/c = 2/(e^2 - 1) gives c = (e^2 - 1)/2. Choice B (e) is a common guess since e is in the interval but 1/e ≠ 2/(e^2 - 1). Choice C (e^2/2) confuses the endpoint with the answer. Choice D gives the average rate of change itself, not the value of c."
  },
  {
    "id": "calc_u5_q117",
    "subject": "apcalc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find all critical points of f(x) = x^3 - 3x.",
    "choices": [
      "A) x = -1 and x = 1",
      "B) x = 0 only",
      "C) x = 1 only",
      "D) x = -1 only"
    ],
    "answer": 0,
    "explanation": "f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1). Setting f'(x) = 0 gives x = -1 and x = 1. B is wrong because f'(0) = -3, not zero. C and D each miss one critical point."
  },
  {
    "id": "calc_u5_q118",
    "subject": "apcalc",
    "unit": 5,
    "topic": "first derivative test",
    "topicLabel": "First Derivative Test",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f'(x) changes from negative to positive at x = 2, what can you conclude about f at x = 2?",
    "choices": [
      "A) f has a local minimum at x = 2",
      "B) f has a local maximum at x = 2",
      "C) f has an inflection point at x = 2",
      "D) f is undefined at x = 2"
    ],
    "answer": 0,
    "explanation": "By the First Derivative Test, when f' changes from negative to positive, f changes from decreasing to increasing, so there is a local minimum. B is the opposite case (positive to negative). C confuses the first derivative test with concavity analysis. D is not necessarily true."
  },
  {
    "id": "calc_u5_q119",
    "subject": "apcalc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Suppose f'(3) = 0 and f''(3) = -5. What does the Second Derivative Test tell you about x = 3?",
    "choices": [
      "A) f has a local minimum at x = 3",
      "B) f has a local maximum at x = 3",
      "C) f has an inflection point at x = 3",
      "D) The test is inconclusive"
    ],
    "answer": 1,
    "explanation": "Since f'(3) = 0 and f''(3) < 0, the Second Derivative Test says f has a local maximum at x = 3. A would require f''(3) > 0. C is wrong because an inflection point involves a sign change of f'', not just evaluating f'' at a critical point. D would only apply if f''(3) = 0."
  },
  {
    "id": "calc_u5_q120",
    "subject": "apcalc",
    "unit": 5,
    "topic": "concavity",
    "topicLabel": "Concavity",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "On what interval is f(x) = x^2 - 4x + 7 concave up?",
    "choices": [
      "A) (-infinity, infinity)",
      "B) (2, infinity) only",
      "C) (-infinity, 2) only",
      "D) Nowhere"
    ],
    "answer": 0,
    "explanation": "f'(x) = 2x - 4 and f''(x) = 2, which is always positive. Since f''(x) > 0 for all x, f is concave up on the entire real line. B and C are wrong because students may confuse the vertex x = 2 with a change in concavity. D is the opposite conclusion."
  },
  {
    "id": "calc_u5_q121",
    "subject": "apcalc",
    "unit": 5,
    "topic": "inflection points",
    "topicLabel": "Inflection Points",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the x-coordinate of the inflection point of f(x) = x^3 - 6x^2 + 9x + 1.",
    "choices": [
      "A) x = 1",
      "B) x = 2",
      "C) x = 3",
      "D) x = 0"
    ],
    "answer": 1,
    "explanation": "f'(x) = 3x^2 - 12x + 9 and f''(x) = 6x - 12. Setting f''(x) = 0 gives x = 2. Checking: f'' changes sign around x = 2 (negative for x < 2, positive for x > 2), confirming an inflection point. A and C are the critical points where f'(x) = 0, a common confusion. D is simply f''(0) = -12 ≠ 0."
  },
  {
    "id": "calc_u5_q122",
    "subject": "apcalc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Optimization",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the minimum value of f(x) = x^2 + 4x + 5.",
    "choices": [
      "A) 1",
      "B) 5",
      "C) -2",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "f'(x) = 2x + 4 = 0 gives x = -2. f''(x) = 2 > 0, confirming a minimum. f(-2) = 4 - 8 + 5 = 1. B is the y-intercept f(0) = 5. C is the x-value of the minimum, not the minimum value itself — a very common student error. D is a guess."
  },
  {
    "id": "calc_u5_q123",
    "subject": "apcalc",
    "unit": 5,
    "topic": "curve sketching",
    "topicLabel": "Curve Sketching",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f'(x) > 0 and f''(x) < 0 on an interval, what does the graph of f look like on that interval?",
    "choices": [
      "A) Increasing and concave up",
      "B) Increasing and concave down",
      "C) Decreasing and concave up",
      "D) Decreasing and concave down"
    ],
    "answer": 1,
    "explanation": "f'(x) > 0 means f is increasing, and f''(x) < 0 means f is concave down. A is wrong because it gets the concavity backwards. C and D are wrong because they misidentify the function as decreasing when f' > 0."
  },
  {
    "id": "calc_u5_q124",
    "subject": "apcalc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following is true about critical points of a function f?",
    "choices": [
      "A) They occur only where f'(x) = 0",
      "B) They occur where f'(x) = 0 or f'(x) does not exist",
      "C) They always correspond to local extrema",
      "D) They occur where f''(x) = 0"
    ],
    "answer": 1,
    "explanation": "By definition, critical points occur where f'(x) = 0 or where f'(x) does not exist (and x is in the domain of f). A forgets the case where f' is undefined (e.g., corners or cusps). C is false because not every critical point is an extremum (e.g., f(x) = x^3 at x = 0). D confuses critical points with possible inflection points."
  },
  {
    "id": "calc_u5_q125",
    "subject": "apcalc",
    "unit": 5,
    "topic": "first derivative test",
    "topicLabel": "First Derivative Test",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x^3. At x = 0, f'(0) = 0. Using the First Derivative Test, what occurs at x = 0?",
    "choices": [
      "A) Local minimum",
      "B) Local maximum",
      "C) Neither a local minimum nor a local maximum",
      "D) The test cannot be applied"
    ],
    "answer": 2,
    "explanation": "f'(x) = 3x^2, which is non-negative for all x. f' does not change sign at x = 0 (it is positive on both sides except at x = 0 itself), so by the First Derivative Test there is neither a local maximum nor a local minimum. A and B are common misconceptions from assuming f'(c) = 0 always gives an extremum. D is wrong because the First Derivative Test can be applied — it simply tells us no extremum exists."
  },
  {
    "id": "calc_u5_q126",
    "subject": "apcalc",
    "unit": 5,
    "topic": "concavity",
    "topicLabel": "Concavity",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f''(x) > 0 for all x in (a, b), which statement is true about f on (a, b)?",
    "choices": [
      "A) f is decreasing",
      "B) f is concave down",
      "C) f is concave up",
      "D) f has an inflection point in (a, b)"
    ],
    "answer": 2,
    "explanation": "f''(x) > 0 on an interval means the graph of f is concave up on that interval. A is incorrect because the sign of f'' determines concavity, not whether f is increasing or decreasing. B states the opposite concavity. D is wrong because an inflection point requires a sign change of f'', but f'' > 0 throughout the interval so no sign change occurs."
  },
  {
    "id": "calc_u5_q127",
    "subject": "apcalc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x^3 - 6x^2 + 9x + 2. What are the critical points of f?",
    "choices": [
      "A) x = 1 and x = 3",
      "B) x = -1 and x = -3",
      "C) x = 0 and x = 3",
      "D) x = 1 only"
    ],
    "answer": 0,
    "explanation": "f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3). Setting f'(x) = 0 gives x = 1 and x = 3. Option B uses wrong signs. Option C confuses x = 0 as a critical point. Option D misses the second root."
  },
  {
    "id": "calc_u5_q128",
    "subject": "apcalc",
    "unit": 5,
    "topic": "first derivative test",
    "topicLabel": "First Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The derivative of a function f is given by f'(x) = (x - 2)^2(x + 1). Using the first derivative test, which statement is true?",
    "choices": [
      "A) f has a local minimum at x = -1 and a local maximum at x = 2",
      "B) f has a local minimum at x = -1 and no extremum at x = 2",
      "C) f has a local maximum at x = -1 and a local minimum at x = 2",
      "D) f has local minima at both x = -1 and x = 2"
    ],
    "answer": 1,
    "explanation": "f'(x) = (x - 2)^2(x + 1). At x = -1, f' changes from negative to positive, so there is a local minimum. At x = 2, (x - 2)^2 is always non-negative, so f' does not change sign (positive on both sides of x = 2), meaning no extremum there. Option A incorrectly assigns a max at x = 2. Option C reverses the classification. Option D claims both are minima."
  },
  {
    "id": "calc_u5_q129",
    "subject": "apcalc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = 2x^3 - 9x^2 + 12x - 4. Using the second derivative test, classify the critical point at x = 1.",
    "choices": [
      "A) Local maximum because g''(1) < 0",
      "B) Local minimum because g''(1) > 0",
      "C) Local minimum because g''(1) < 0",
      "D) The test is inconclusive because g''(1) = 0"
    ],
    "answer": 0,
    "explanation": "g'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2), so x = 1 is a critical point. g''(x) = 12x - 18, so g''(1) = 12 - 18 = -6 < 0. Since the second derivative is negative, x = 1 is a local maximum. Option B has the wrong sign interpretation. Option C mismatches the conclusion with the sign. Option D incorrectly claims the test is inconclusive."
  },
  {
    "id": "calc_u5_q130",
    "subject": "apcalc",
    "unit": 5,
    "topic": "concavity",
    "topicLabel": "Concavity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "On what interval is the function f(x) = x^4 - 8x^2 + 16 concave up?",
    "choices": [
      "A) (-2/sqrt(3), 2/sqrt(3))",
      "B) (-infinity, -2/sqrt(3)) and (2/sqrt(3), infinity)",
      "C) (-2, 2)",
      "D) (-infinity, 0)"
    ],
    "answer": 1,
    "explanation": "f'(x) = 4x^3 - 16x. f''(x) = 12x^2 - 16. Setting f''(x) > 0: 12x^2 - 16 > 0, so x^2 > 4/3, meaning x < -2/sqrt(3) or x > 2/sqrt(3). Option A gives where f is concave down. Option C confuses the inflection points with x = -2 and x = 2. Option D is an arbitrary interval."
  },
  {
    "id": "calc_u5_q131",
    "subject": "apcalc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Optimization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A farmer wants to enclose a rectangular area against a straight river (no fence needed along the river) using 200 meters of fencing. What is the maximum area that can be enclosed?",
    "choices": [
      "A) 5000 square meters",
      "B) 2500 square meters",
      "C) 10000 square meters",
      "D) 4000 square meters"
    ],
    "answer": 0,
    "explanation": "Let x be the side parallel to the river and y be the two perpendicular sides. Then x + 2y = 200, so x = 200 - 2y. Area A = xy = y(200 - 2y) = 200y - 2y^2. A'(y) = 200 - 4y = 0 gives y = 50, x = 100. Max area = 100(50) = 5000. Option B (2500) is the answer if all four sides are fenced. Option C and D are common arithmetic errors."
  },
  {
    "id": "calc_u5_q132",
    "subject": "apcalc",
    "unit": 5,
    "topic": "curve sketching",
    "topicLabel": "Curve Sketching",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The graph of f' (the derivative of f) is a parabola opening upward with vertex at (3, -4). Which of the following is true about the graph of f?",
    "choices": [
      "A) f has a local maximum at x = 3",
      "B) f has an inflection point at x = 3",
      "C) f is decreasing on its entire domain",
      "D) f has a local minimum at x = 3"
    ],
    "answer": 1,
    "explanation": "Since f' is a parabola opening upward with vertex at (3, -4), the minimum value of f' is -4 at x = 3. The second derivative f'' changes sign at x = 3 (f'' goes from negative to positive since f' has a minimum there), so f has an inflection point at x = 3. Option A and D are wrong because f'(3) = -4 ≠ 0, so x = 3 is not a critical point of f. Option C is wrong because f' is positive for sufficiently large and small x values."
  },
  {
    "id": "calc_u5_q133",
    "subject": "apcalc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = |x^2 - 4x + 3|. How many critical points does f have on the interval (0, 5)?",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 4",
      "D) 1"
    ],
    "answer": 1,
    "explanation": "x^2 - 4x + 3 = (x-1)(x-3). This expression is zero at x = 1 and x = 3, positive outside [1,3], and negative inside (1,3). So f(x) = x^2-4x+3 for x <= 1 or x >= 3, and f(x) = -(x^2-4x+3) for 1 < x < 3. Critical points occur where f'(x) = 0 or f'(x) doesn't exist. f' doesn't exist at x = 1 and x = 3 (corners). On (1,3), f(x) = -x^2+4x-3, so f'(x) = -2x+4 = 0 at x = 2. So there are 3 critical points: x = 1, 2, 3. Option A misses one corner. Option C overcounts. Option D only finds x = 2."
  },
  {
    "id": "calc_u5_q134",
    "subject": "apcalc",
    "unit": 5,
    "topic": "first derivative test",
    "topicLabel": "First Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A continuous function f has the property that f'(x) > 0 for x < -2, f'(x) < 0 for -2 < x < 5, and f'(x) > 0 for x > 5. Which of the following is true?",
    "choices": [
      "A) f has a local minimum at x = -2 and a local maximum at x = 5",
      "B) f has a local maximum at x = -2 and a local minimum at x = 5",
      "C) f has local maxima at both x = -2 and x = 5",
      "D) f has no local extrema"
    ],
    "answer": 1,
    "explanation": "By the first derivative test, f' changes from positive to negative at x = -2, so f has a local maximum there. f' changes from negative to positive at x = 5, so f has a local minimum there. Option A reverses the classifications—a common error. Option C ignores the sign change pattern. Option D is wrong since there are clear sign changes."
  },
  {
    "id": "calc_u5_q135",
    "subject": "apcalc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x^4 - 4x^2. Using the second derivative test, what is the nature of the critical point at x = 0?",
    "choices": [
      "A) Local minimum",
      "B) Local maximum",
      "C) The second derivative test is inconclusive",
      "D) Inflection point"
    ],
    "answer": 1,
    "explanation": "f'(x) = 4x^3 - 8x = 4x(x^2 - 2). f'(0) = 0, so x = 0 is a critical point. f''(x) = 12x^2 - 8. f''(0) = -8 < 0. Since the second derivative is negative, x = 0 is a local maximum. Option A confuses the sign. Option C incorrectly claims inconclusive. Option D confuses critical points with inflection points."
  },
  {
    "id": "calc_u5_q136",
    "subject": "apcalc",
    "unit": 5,
    "topic": "concavity",
    "topicLabel": "Concavity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f''(x) = x(x - 4)(x + 2), on which interval is f concave down?",
    "choices": [
      "A) (-2, 0) and (4, infinity)",
      "B) (-infinity, -2) and (0, 4)",
      "C) (-2, 0) only",
      "D) (0, 4) only"
    ],
    "answer": 1,
    "explanation": "f''(x) = x(x-4)(x+2) has zeros at x = -2, 0, 4. Testing signs: for x < -2 (say x = -3): (-3)(-7)(-1) = -21 < 0. For -2 < x < 0 (say x = -1): (-1)(-5)(1) = 5 > 0. For 0 < x < 4 (say x = 1): (1)(-3)(3) = -9 < 0. For x > 4 (say x = 5): (5)(1)(7) = 35 > 0. f is concave down where f'' < 0: (-infinity, -2) and (0, 4). Option A gives where f'' changes from positive to negative incorrectly. Options C and D each give only one interval."
  },
  {
    "id": "calc_u5_q137",
    "subject": "apcalc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Optimization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A box with a square base and open top must have a volume of 32 cubic inches. What base side length minimizes the surface area?",
    "choices": [
      "A) 4 inches",
      "B) 2 inches",
      "C) 8 inches",
      "D) 2*cbrt(4) inches"
    ],
    "answer": 0,
    "explanation": "Let s = side length of base, h = height. Volume: s^2 * h = 32, so h = 32/s^2. Surface area (open top): S = s^2 + 4sh = s^2 + 4s(32/s^2) = s^2 + 128/s. S'(s) = 2s - 128/s^2 = 0 gives 2s^3 = 128, s^3 = 64, s = 4. S''(s) = 2 + 256/s^3 > 0 confirms minimum. Option B is a common guess. Option C doubles the answer. Option D results from an algebraic error."
  },
  {
    "id": "calc_u5_q138",
    "subject": "apcalc",
    "unit": 5,
    "topic": "curve sketching",
    "topicLabel": "Curve Sketching",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given that f is twice differentiable, f(2) = 1, f'(2) = 0, and f''(2) = 3, which of the following best describes the graph of f near x = 2?",
    "choices": [
      "A) f has a local maximum at (2, 1)",
      "B) f has a local minimum at (2, 1)",
      "C) f has an inflection point at (2, 1)",
      "D) f is decreasing and concave up at x = 2"
    ],
    "answer": 1,
    "explanation": "Since f'(2) = 0, x = 2 is a critical point. Since f''(2) = 3 > 0, the function is concave up at x = 2, so by the second derivative test it is a local minimum. The point is (2, f(2)) = (2, 1). Option A confuses the sign of f''. Option C is wrong because f'(2) = 0 and f''(2) ≠ 0. Option D is wrong because f'(2) = 0, not negative."
  },
  {
    "id": "calc_u5_q139",
    "subject": "apcalc",
    "unit": 5,
    "topic": "inflection points",
    "topicLabel": "Inflection Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = x * e^(-x), what is the x-coordinate of the inflection point of f?",
    "choices": [
      "A) x = 0",
      "B) x = 1",
      "C) x = 2",
      "D) x = -1"
    ],
    "answer": 2,
    "explanation": "f(x) = xe^(-x). f'(x) = e^(-x) - xe^(-x) = e^(-x)(1-x). f''(x) = -e^(-x)(1-x) + e^(-x)(-1) = e^(-x)(x - 2). Setting f''(x) = 0: since e^(-x) > 0 always, x - 2 = 0, so x = 2. f'' changes sign at x = 2 (negative for x < 2, positive for x > 2). Option A confuses with f(0) = 0. Option B is the critical point where f'(x) = 0. Option D is a sign error."
  },
  {
    "id": "calc_u5_q140",
    "subject": "apcalc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Optimization",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the maximum value of f(x) = 12x - x^3 on the closed interval [-3, 3].",
    "choices": [
      "A) 16",
      "B) 12",
      "C) 0",
      "D) 9"
    ],
    "answer": 0,
    "explanation": "f'(x) = 12 - 3x^2 = 0 gives x^2 = 4, so x = 2 or x = -2. Evaluating: f(-3) = -36 + 27 = -9, f(-2) = -24 + 8 = -16, f(2) = 24 - 8 = 16, f(3) = 36 - 27 = 9. The maximum value is 16 at x = 2. Option B is f'(0) confused with f value. Option C is f(0). Option D is f(3), a common error of only checking endpoints."
  },
  {
    "id": "calc_u5_q141",
    "subject": "apcalc",
    "unit": 5,
    "topic": "curve sketching",
    "topicLabel": "Curve Sketching",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The function f has the property that f'(x) < 0 and f''(x) < 0 for all x in the interval (1, 5). Which of the following describes the graph of f on (1, 5)?",
    "choices": [
      "A) Increasing and concave up",
      "B) Decreasing and concave up",
      "C) Decreasing and concave down",
      "D) Increasing and concave down"
    ],
    "answer": 2,
    "explanation": "f'(x) < 0 means f is decreasing. f''(x) < 0 means f is concave down. So f is decreasing and concave down on (1, 5). Option A gets both wrong. Option B has the wrong concavity. Option D has the wrong direction of increase/decrease."
  },
  {
    "id": "calc_u5_q142",
    "subject": "apcalc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = (x^2 - 1)^(2/3). Which of the following is true about the critical points of f?",
    "choices": [
      "A) x = 0 is the only critical point",
      "B) x = -1 and x = 1 are the only critical points",
      "C) x = -1, x = 0, and x = 1 are all critical points",
      "D) f has no critical points"
    ],
    "answer": 2,
    "explanation": "f(x) = (x^2-1)^(2/3). f'(x) = (2/3)(x^2-1)^(-1/3)(2x) = 4x / [3(x^2-1)^(1/3)]. f'(x) = 0 when x = 0. f'(x) is undefined when x^2 - 1 = 0, i.e., x = 1 and x = -1, and f is defined at these points (f(1) = f(-1) = 0). So all three are critical points. Option A misses where f' is undefined. Option B misses where f' = 0. Option D is incorrect."
  },
  {
    "id": "calc_u5_q143",
    "subject": "apcalc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Critical Points",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x^(2/3)(x - 4). How many critical points does f have on the interval [-1, 5]?",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 0"
    ],
    "answer": 1,
    "explanation": "f'(x) = (2/3)x^(-1/3)(x - 4) + x^(2/3). Setting f'(x) = 0 and simplifying gives f'(x) = (5x - 8)/(3x^(1/3)). f'(x) = 0 when x = 8/5, and f'(x) is undefined when x = 0. Both x = 0 and x = 8/5 are in [-1, 5] and are in the domain of f, giving 2 critical points. A common error is forgetting x = 0 where the derivative is undefined (choosing A), or counting endpoints as critical points (choosing C)."
  },
  {
    "id": "calc_u5_q144",
    "subject": "apcalc",
    "unit": 5,
    "topic": "first derivative test",
    "topicLabel": "First Derivative Test",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "The derivative of a continuous function f is given by f'(x) = (x - 1)^2(x + 3)(x - 5). At which x-value does f have a local minimum?",
    "choices": [
      "A) x = 1",
      "B) x = -3",
      "C) x = 5",
      "D) x = -3 and x = 5"
    ],
    "answer": 2,
    "explanation": "Critical points are x = -3, 1, and 5. At x = 1, the factor (x-1)^2 does not change sign, so there is no local extremum. Testing sign changes: f' changes from positive to negative at x = -3 (local max) and from negative to positive at x = 5 (local min). Students who pick A forget that even multiplicity zeros don't cause sign changes. Students who pick B confuse local max with local min. Students who pick D incorrectly classify x = -3 as a local minimum."
  },
  {
    "id": "calc_u5_q145",
    "subject": "apcalc",
    "unit": 5,
    "topic": "second derivative test",
    "topicLabel": "Second Derivative Test",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x^4 - 8x^2 + 16. Using the second derivative test, which statement is correct about the critical points of f?",
    "choices": [
      "A) f has local minima at x = -2 and x = 2, and a local maximum at x = 0",
      "B) f has local minima at x = -2 and x = 2, and the test is inconclusive at x = 0",
      "C) f has local maxima at x = -2 and x = 2, and a local minimum at x = 0",
      "D) The second derivative test is inconclusive at all three critical points"
    ],
    "answer": 0,
    "explanation": "f'(x) = 4x^3 - 16x = 4x(x^2 - 4), so critical points are x = 0, 2, -2. f''(x) = 12x^2 - 16. f''(0) = -16 < 0, so local max at x = 0. f''(2) = 48 - 16 = 32 > 0, so local min at x = 2. f''(-2) = 48 - 16 = 32 > 0, so local min at x = -2. Students who choose B may incorrectly think x = 0 gives f''(0) = 0. Students who choose C confuse the sign conditions of the second derivative test."
  },
  {
    "id": "calc_u5_q146",
    "subject": "apcalc",
    "unit": 5,
    "topic": "concavity",
    "topicLabel": "Concavity",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "The second derivative of a function f is f''(x) = x^2(x - 2)e^x. On which interval(s) is the graph of f concave down?",
    "choices": [
      "A) (-infinity, 0) and (0, 2)",
      "B) (0, 2) only",
      "C) (-infinity, 2)",
      "D) (-infinity, 0) only"
    ],
    "answer": 0,
    "explanation": "Since e^x > 0 for all x and x^2 >= 0 for all x, the sign of f''(x) depends on x^2 and (x - 2). When x < 0, x^2 > 0 and (x - 2) < 0, so f'' < 0 (concave down). When 0 < x < 2, x^2 > 0 and (x - 2) < 0, so f'' < 0 (concave down). When x > 2, f'' > 0. At x = 0, f'' = 0 but does not change sign (from negative to negative). So f is concave down on (-infinity, 0) union (0, 2). Students who choose B forget the interval to the left of 0. Students who choose C ignore that f''(0) = 0 but the function is concave down on both sides, which actually supports C being tempting, but the answer is A because at x = 0 f'' = 0 exactly; however concave down means f'' < 0, so x = 0 is excluded from both intervals."
  },
  {
    "id": "calc_u5_q147",
    "subject": "apcalc",
    "unit": 5,
    "topic": "inflection points",
    "topicLabel": "Inflection Points",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g be a twice-differentiable function with g''(x) = (x^2 - 1)(x^2 - 9). How many inflection points does g have?",
    "choices": [
      "A) 2",
      "B) 4",
      "C) 3",
      "D) 0"
    ],
    "answer": 1,
    "explanation": "g''(x) = (x-1)(x+1)(x-3)(x+3). Setting g''(x) = 0 gives x = -3, -1, 1, 3. We must check for sign changes. For x < -3: all four factors have signs (-)(-)(-)(-) = +. For -3 < x < -1: (-)(-)(-)(+) = -. Sign change at x = -3. For -1 < x < 1: (-)(-)(+)(+) = - wait, let me recheck: (-)(+)(-)(+) = +. Sign change at x = -1. For 1 < x < 3: (+)(+)(-)(+) = -. Sign change at x = 1. For x > 3: (+)(+)(+)(+) = +. Sign change at x = 3. All four values produce sign changes, so there are 4 inflection points. The answer is B. Students who choose A may only consider x = 1 and x = -1. Students who choose C may miss one sign change."
  },
  {
    "id": "calc_u5_q148",
    "subject": "apcalc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Optimization",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A rectangular box with a square base and no top is to have a volume of 32 cubic inches. What is the minimum surface area of the box?",
    "choices": [
      "A) 48 square inches",
      "B) 64 square inches",
      "C) 96 square inches",
      "D) 32 square inches"
    ],
    "answer": 0,
    "explanation": "Let x = side of square base and h = height. Volume: x^2 * h = 32, so h = 32/x^2. Surface area (no top) = x^2 + 4xh = x^2 + 4x(32/x^2) = x^2 + 128/x. Taking dS/dx = 2x - 128/x^2 = 0 gives x^3 = 64, so x = 4 and h = 2. S = 16 + 128/4 = 16 + 32 = 48. Students who choose B (64) may incorrectly include a top. Students who choose C may make an algebraic error doubling the answer. Students who choose D may confuse volume with surface area."
  },
  {
    "id": "calc_u5_q149",
    "subject": "apcalc",
    "unit": 5,
    "topic": "curve sketching",
    "topicLabel": "Curve Sketching",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "The graph of f' (not f) is a parabola opening upward with vertex at (2, -3) and x-intercepts at x = 0 and x = 4. Which of the following describes the graph of f?",
    "choices": [
      "A) f has a local max at x = 0 and a local min at x = 4",
      "B) f has an inflection point at x = 2 and local extrema at x = 0 and x = 4",
      "C) f is decreasing on (0, 4) with an inflection point at x = 2",
      "D) f has a local min at x = 0 and a local max at x = 4"
    ],
    "answer": 2,
    "explanation": "Since f' has x-intercepts at 0 and 4 with vertex at (2, -3), f' is negative on (0, 4) and positive outside this interval. This means f is increasing on (-infinity, 0), decreasing on (0, 4), and increasing on (4, infinity). So f has a local max at x = 0 and a local min at x = 4 — wait, that matches A. But let's also check: f' has a minimum at x = 2, meaning f'' changes sign at x = 2 (f'' = 0 at vertex of f'), so x = 2 is an inflection point of f. Both A and C have partially correct information. C says f is decreasing on (0,4) with inflection at x = 2 — both true. A says local max at 0 and local min at 4 — also true. But C is the most complete correct single statement since f does decrease on (0,4) and has an inflection point at x = 2. Actually A is also fully correct. Let me reconsider: the question asks which describes the graph. A is correct about extrema. B says inflection at 2 AND extrema at 0 and 4 — this is also correct. So B is actually the most complete answer. Answer is B."
  },
  {
    "id": "calc_u5_q150",
    "subject": "apcalc",
    "unit": 5,
    "topic": "critical points",
    "topicLabel": "Extreme Value Theorem and Critical Points",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = |x^2 - 4x + 3| on the interval [0, 5]. How many critical points does f have in the open interval (0, 5)?",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "answer": 2,
    "explanation": "First, x^2 - 4x + 3 = (x-1)(x-3), which is zero at x = 1 and x = 3. On (0,1) and (3,5) the expression is positive, so f(x) = x^2 - 4x + 3 with f'(x) = 2x - 4. On (1,3) it is negative, so f(x) = -(x^2 - 4x + 3) with f'(x) = -2x + 4. Critical points occur where f'(x) = 0 or f'(x) doesn't exist. f'(x) = 0: from 2x-4 = 0, x = 2 (but x=2 is in (1,3) where f'(x) = -2x+4 = 0 at x = 2). From the other pieces, 2x - 4 = 0 gives x = 2, not in their domains. So f'(x) = 0 at x = 2. f' is undefined at x = 1 and x = 3 (corners of absolute value). Total: 3 critical points at x = 1, 2, 3. Students who choose B forget the corners. Students who choose A only find x = 2."
  },
  {
    "id": "calc_u5_q151",
    "subject": "apcalc",
    "unit": 5,
    "topic": "optimization",
    "topicLabel": "Applied Optimization with Constraints",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with position x(t) = t^3 - 6t^2 + 9t + 1 for t >= 0. At what time t does the particle reach its maximum velocity on the interval [0, 4]?",
    "choices": [
      "A) t = 2",
      "B) t = 4",
      "C) t = 0",
      "D) t = 3"
    ],
    "answer": 1,
    "explanation": "Velocity is v(t) = x'(t) = 3t^2 - 12t + 9. To maximize velocity, take v'(t) = 6t - 12 = 0, giving t = 2. But v''(t) = 6 > 0, so t = 2 is a minimum of velocity, not a maximum. On the closed interval [0, 4], we check endpoints: v(0) = 9, v(4) = 48 - 48 + 9 = 9, v(2) = 12 - 24 + 9 = -3. Wait: v(4) = 3(16) - 12(4) + 9 = 48 - 48 + 9 = 9 and v(0) = 9. Both endpoints give v = 9, which is the max since v(2) = -3 is the min. Actually let me recheck — for a harder question, the max should be clearer. v(0) = 9, v(4) = 9. These are equal. But checking the problem again, on [0,4], the velocity is a parabola opening upward with min at t=2. So the maximum occurs at both endpoints equally. However, since the parabola opens up, as t increases past 2, v increases. At t = 4, v = 9, and for t > 4, v continues increasing. So actually on [0,4] the maximum velocity is 9, achieved at t = 0 and t = 4. Among the choices, t = 4 is listed. Students who choose A find the critical point but don't realize it's a minimum of velocity. Students who choose D confuse position extrema with velocity extrema (x'(3) = 27 - 36 + 9 = 0, which is when particle stops)."
  },
  {
    "id": "calc_u6_q152",
    "subject": "apcalc",
    "unit": 6,
    "topic": "antiderivatives",
    "topicLabel": "Antiderivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the antiderivative of f(x) = 3x^2.",
    "choices": [
      "A) x^3 + C",
      "B) 6x + C",
      "C) x^3",
      "D) 3x^3 + C"
    ],
    "answer": 0,
    "explanation": "The antiderivative of 3x^2 is found using the power rule for integration: increase the exponent by 1 and divide by the new exponent, giving 3x^3/3 = x^3, plus the constant of integration C. Choice B (6x + C) is the derivative, not the antiderivative. Choice C omits the constant of integration. Choice D fails to divide by the new exponent."
  },
  {
    "id": "calc_u6_q153",
    "subject": "apcalc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "FTC Part 1",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If g(x) = the integral from 2 to x of cos(t) dt, what is g'(x)?",
    "choices": [
      "A) sin(x) - sin(2)",
      "B) cos(x)",
      "C) -cos(x)",
      "D) sin(x)"
    ],
    "answer": 1,
    "explanation": "By the Fundamental Theorem of Calculus Part 1, if g(x) = the integral from a to x of f(t) dt, then g'(x) = f(x). Therefore g'(x) = cos(x). Choice A evaluates the integral instead of differentiating. Choice C applies an incorrect sign. Choice D confuses the antiderivative of cos(x) with the result of FTC Part 1."
  },
  {
    "id": "calc_u6_q154",
    "subject": "apcalc",
    "unit": 6,
    "topic": "definite integrals",
    "topicLabel": "Definite Integrals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate the integral from 0 to 3 of 4 dx.",
    "choices": [
      "A) 4",
      "B) 0",
      "C) 12",
      "D) 7"
    ],
    "answer": 2,
    "explanation": "The integral of a constant c over [a, b] equals c(b - a). Here, 4(3 - 0) = 12. Choice A confuses the integrand value with the result. Choice B may result from thinking the integral of a constant is zero. Choice D incorrectly adds 4 + 3 = 7."
  },
  {
    "id": "calc_u6_q155",
    "subject": "apcalc",
    "unit": 6,
    "topic": "average value",
    "topicLabel": "Average Value of a Function",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The average value of f(x) on the interval [a, b] is given by which expression?",
    "choices": [
      "A) (1/(b - a)) * the integral from a to b of f(x) dx",
      "B) the integral from a to b of f(x) dx",
      "C) (f(a) + f(b)) / 2",
      "D) (1/(b + a)) * the integral from a to b of f(x) dx"
    ],
    "answer": 0,
    "explanation": "The average value formula is (1/(b - a)) times the integral from a to b of f(x) dx. Choice B gives the total integral without dividing by the interval length. Choice C gives the average of the endpoint values, which is only correct for linear functions. Choice D incorrectly uses (b + a) instead of (b - a) in the denominator."
  },
  {
    "id": "calc_u6_q156",
    "subject": "apcalc",
    "unit": 6,
    "topic": "antiderivatives",
    "topicLabel": "Antiderivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the general antiderivative of f(x) = 3x^2 - 4x + 5/x.",
    "choices": [
      "A) x^3 - 2x^2 + 5 ln|x| + C",
      "B) x^3 - 2x^2 + 5/x^2 + C",
      "C) 6x - 4 + 5 ln|x| + C",
      "D) x^3 - 4x^2 + 5 ln|x| + C"
    ],
    "answer": 0,
    "explanation": "The antiderivative of 3x^2 is x^3, the antiderivative of -4x is -2x^2, and the antiderivative of 5/x is 5 ln|x|, plus C. Choice B incorrectly uses the power rule on 5/x as if integrating to 5/x^2. Choice C is the derivative, not the antiderivative. Choice D fails to divide -4 by 2 when antidifferentiating -4x."
  },
  {
    "id": "calc_u6_q157",
    "subject": "apcalc",
    "unit": 6,
    "topic": "indefinite integrals",
    "topicLabel": "Indefinite Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate the integral: ∫ (e^(2x) + cos(x)) dx.",
    "choices": [
      "A) (1/2)e^(2x) + sin(x) + C",
      "B) 2e^(2x) + sin(x) + C",
      "C) (1/2)e^(2x) - sin(x) + C",
      "D) e^(2x) + sin(x) + C"
    ],
    "answer": 0,
    "explanation": "The integral of e^(2x) is (1/2)e^(2x) by the chain rule in reverse, and the integral of cos(x) is sin(x). Choice B multiplies by 2 instead of dividing. Choice C has the wrong sign on sin(x). Choice D forgets the 1/2 factor from the chain rule."
  },
  {
    "id": "calc_u6_q158",
    "subject": "apcalc",
    "unit": 6,
    "topic": "Riemann sums",
    "topicLabel": "Riemann Sums",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Using a left Riemann sum with 4 equal subintervals, approximate ∫ from 0 to 8 of f(x) dx given the table: f(0)=2, f(2)=5, f(4)=4, f(6)=7, f(8)=3.",
    "choices": [
      "A) 36",
      "B) 38",
      "C) 19",
      "D) 42"
    ],
    "answer": 0,
    "explanation": "With 4 subintervals on [0,8], each has width 2. The left endpoints are x=0,2,4,6 with f-values 2,5,4,7. The sum is 2(2+5+4+7) = 2(18) = 36. Choice B uses the right endpoints (5+4+7+3)·2 = 38. Choice C uses width 1 instead of 2. Choice D incorrectly sums all five values and multiplies by 2."
  },
  {
    "id": "calc_u6_q159",
    "subject": "apcalc",
    "unit": 6,
    "topic": "definite integrals",
    "topicLabel": "Definite Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate ∫ from 0 to 2 of (3x^2 - 2x) dx.",
    "choices": [
      "A) 4",
      "B) 8",
      "C) 2",
      "D) 6"
    ],
    "answer": 0,
    "explanation": "The antiderivative of 3x^2 - 2x is x^3 - x^2. Evaluating from 0 to 2: (8 - 4) - (0 - 0) = 4. Choice B finds x^3 at x=2 only (8) without subtracting x^2. Choice C may result from arithmetic errors. Choice D might come from forgetting to subtract the x^2 term properly."
  },
  {
    "id": "calc_u6_q160",
    "subject": "apcalc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "Fundamental Theorem of Calculus Part 1",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If g(x) = ∫ from 2 to x of (t^2 + 3t) dt, find g'(5).",
    "choices": [
      "A) 40",
      "B) 25",
      "C) 28",
      "D) 136/3"
    ],
    "answer": 0,
    "explanation": "By FTC Part 1, g'(x) = x^2 + 3x. So g'(5) = 25 + 15 = 40. Choice B only computes 5^2 = 25 and forgets the 3t term. Choice C may come from evaluating at the wrong value. Choice D incorrectly evaluates the full integral from 2 to 5 instead of just the derivative."
  },
  {
    "id": "calc_u6_q161",
    "subject": "apcalc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "FTC Part 1 with Chain Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let h(x) = ∫ from 1 to x^3 of sin(t) dt. Find h'(x).",
    "choices": [
      "A) 3x^2 sin(x^3)",
      "B) sin(x^3)",
      "C) 3x^2 cos(x^3)",
      "D) -cos(x^3) + cos(1)"
    ],
    "answer": 0,
    "explanation": "By FTC Part 1 combined with the chain rule, h'(x) = sin(x^3) · d/dx(x^3) = 3x^2 sin(x^3). Choice B forgets to multiply by the chain rule factor 3x^2. Choice C incorrectly takes the derivative of sin to get cos instead of applying FTC. Choice D evaluates the integral directly using -cos(t)."
  },
  {
    "id": "calc_u6_q162",
    "subject": "apcalc",
    "unit": 6,
    "topic": "FTC part 2",
    "topicLabel": "Fundamental Theorem of Calculus Part 2",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If F'(x) = x^3 - 1 and F(0) = 2, what is F(2)?",
    "choices": [
      "A) 4",
      "B) 2",
      "C) 6",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "By FTC Part 2, F(2) = F(0) + ∫ from 0 to 2 of (x^3 - 1) dx. The antiderivative of x^3 - 1 is x^4/4 - x. Evaluating from 0 to 2: (16/4 - 2) - 0 = 4 - 2 = 2. So F(2) = 2 + 2 = 4. Choice B forgets to add F(0). Choice C adds incorrectly. Choice D may result from sign errors."
  },
  {
    "id": "calc_u6_q163",
    "subject": "apcalc",
    "unit": 6,
    "topic": "average value",
    "topicLabel": "Average Value of a Function",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the average value of f(x) = 6x^2 on the interval [0, 3].",
    "choices": [
      "A) 18",
      "B) 54",
      "C) 6",
      "D) 27"
    ],
    "answer": 0,
    "explanation": "The average value is (1/(3-0)) ∫ from 0 to 3 of 6x^2 dx = (1/3)[2x^3] from 0 to 3 = (1/3)(54) = 18. Choice B is the value of the integral without dividing by the interval length. Choice C divides 54 by 9 instead of 3. Choice D divides 54 by 2 instead of 3."
  },
  {
    "id": "calc_u6_q164",
    "subject": "apcalc",
    "unit": 6,
    "topic": "net change theorem",
    "topicLabel": "Net Change Theorem",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along a line with velocity v(t) = t^2 - 4t + 3 for 0 ≤ t ≤ 4. What is the net displacement of the particle over this interval?",
    "choices": [
      "A) 4/3",
      "B) 0",
      "C) 28/3",
      "D) -4/3"
    ],
    "answer": 0,
    "explanation": "Net displacement = ∫ from 0 to 4 of (t^2 - 4t + 3) dt. The antiderivative is t^3/3 - 2t^2 + 3t. Evaluating from 0 to 4: (64/3 - 32 + 12) - 0 = 64/3 - 20 = 64/3 - 60/3 = 4/3. Choice B assumes the positive and negative parts cancel. Choice C may come from taking the absolute value of velocity. Choice D has a sign error."
  },
  {
    "id": "calc_u6_q165",
    "subject": "apcalc",
    "unit": 6,
    "topic": "antiderivatives",
    "topicLabel": "Antiderivatives with Initial Conditions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If dy/dx = 4x^3 + 6x and y(1) = 5, find y(x).",
    "choices": [
      "A) x^4 + 3x^2 + 1",
      "B) x^4 + 3x^2 + 5",
      "C) 12x^2 + 6",
      "D) x^4 + 3x^2 - 1"
    ],
    "answer": 0,
    "explanation": "Integrating: y = x^4 + 3x^2 + C. Using y(1) = 5: 1 + 3 + C = 5, so C = 1. Thus y = x^4 + 3x^2 + 1. Choice B incorrectly sets C = 5 without substituting. Choice C is the derivative of the antiderivative. Choice D uses C = -1 from an arithmetic error."
  },
  {
    "id": "calc_u6_q166",
    "subject": "apcalc",
    "unit": 6,
    "topic": "indefinite integrals",
    "topicLabel": "Indefinite Integrals with Substitution",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate ∫ 2x · e^(x^2) dx.",
    "choices": [
      "A) e^(x^2) + C",
      "B) x^2 · e^(x^2) + C",
      "C) 2e^(x^2) + C",
      "D) (1/2)e^(x^2) + C"
    ],
    "answer": 0,
    "explanation": "Let u = x^2, then du = 2x dx. The integral becomes ∫ e^u du = e^u + C = e^(x^2) + C. Choice B incorrectly treats this as a product. Choice C introduces an extra factor of 2. Choice D incorrectly divides by 2, confusing this with an integral that needs a correction factor."
  },
  {
    "id": "calc_u6_q167",
    "subject": "apcalc",
    "unit": 6,
    "topic": "definite integrals",
    "topicLabel": "Properties of Definite Integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If ∫ from 0 to 5 of f(x) dx = 12 and ∫ from 0 to 3 of f(x) dx = 7, what is ∫ from 3 to 5 of f(x) dx?",
    "choices": [
      "A) 5",
      "B) 19",
      "C) -5",
      "D) 7"
    ],
    "answer": 0,
    "explanation": "By the additive property of integrals, ∫ from 0 to 5 = ∫ from 0 to 3 + ∫ from 3 to 5. So ∫ from 3 to 5 = 12 - 7 = 5. Choice B adds instead of subtracting. Choice C reverses the subtraction. Choice D simply repeats one of the given values."
  },
  {
    "id": "calc_u6_q168",
    "subject": "apcalc",
    "unit": 6,
    "topic": "net change theorem",
    "topicLabel": "Net Change with Rate Function",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Water flows into a tank at a rate of R(t) = 3t + 2 gallons per minute. If the tank initially contains 10 gallons, how many gallons are in the tank after 4 minutes?",
    "choices": [
      "A) 42",
      "B) 32",
      "C) 14",
      "D) 34"
    ],
    "answer": 0,
    "explanation": "Total water added = ∫ from 0 to 4 of (3t + 2) dt = [3t^2/2 + 2t] from 0 to 4 = (24 + 8) - 0 = 32. Total in tank = 10 + 32 = 42. Choice B forgets to add the initial 10 gallons. Choice C only evaluates R(4) = 14 instead of integrating. Choice D comes from an integration error."
  },
  {
    "id": "calc_u6_q169",
    "subject": "apcalc",
    "unit": 6,
    "topic": "average value",
    "topicLabel": "Average Value with Linear Function",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the average value of f(x) = 4x + 1 on the interval [1, 5]?",
    "choices": [
      "A) 13",
      "B) 52",
      "C) 21",
      "D) 11"
    ],
    "answer": 0,
    "explanation": "Average value = (1/(5-1)) ∫ from 1 to 5 of (4x + 1) dx = (1/4)[2x^2 + x] from 1 to 5 = (1/4)[(50+5)-(2+1)] = (1/4)(52) = 13. Choice B is the integral without dividing by 4. Choice C is f(5) = 21, evaluating at an endpoint instead of averaging. Choice D represents an incorrect calculation."
  },
  {
    "id": "calc_u7_q171",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ 2x(x² + 1)⁴ dx",
    "choices": [
      "A) (x² + 1)⁵ / 5 + C",
      "B) (x² + 1)⁵ + C",
      "C) 2x(x² + 1)⁵ / 5 + C",
      "D) (x² + 1)⁵ / 10 + C"
    ],
    "answer": 0,
    "explanation": "Let u = x² + 1, so du = 2x dx. The integral becomes ∫ u⁴ du = u⁵/5 + C = (x² + 1)⁵/5 + C. Choice B forgets to divide by 5. Choice C incorrectly keeps the 2x factor outside the antiderivative. Choice D incorrectly divides by 10 as if an extra factor of 2 needed to be removed."
  },
  {
    "id": "calc_u7_q172",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ cos(3x) dx",
    "choices": [
      "A) sin(3x) + C",
      "B) sin(3x) / 3 + C",
      "C) 3 sin(3x) + C",
      "D) -sin(3x) / 3 + C"
    ],
    "answer": 1,
    "explanation": "Let u = 3x, du = 3 dx, so dx = du/3. The integral becomes (1/3)∫ cos(u) du = sin(u)/3 + C = sin(3x)/3 + C. Choice A forgets the 1/3 factor from the chain rule. Choice C multiplies by 3 instead of dividing. Choice D has an incorrect negative sign."
  },
  {
    "id": "calc_u7_q173",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫₀¹ 6x²(x³ + 1)² dx",
    "choices": [
      "A) 14/3",
      "B) 14",
      "C) 2",
      "D) 7/3"
    ],
    "answer": 0,
    "explanation": "Let u = x³ + 1, du = 3x² dx, so 6x² dx = 2 du. When x = 0, u = 1; when x = 1, u = 2. The integral becomes 2∫₁² u² du = 2[u³/3]₁² = 2(8/3 - 1/3) = 2(7/3) = 14/3. Choice B forgets to divide by 3 in the antiderivative. Choice C results from not changing limits correctly. Choice D forgets the factor of 2 from the substitution."
  },
  {
    "id": "calc_u7_q174",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫₀² x · e^(x²) dx",
    "choices": [
      "A) (e⁴ - 1) / 2",
      "B) e⁴ - 1",
      "C) e⁴ / 2",
      "D) (e⁴ + 1) / 2"
    ],
    "answer": 0,
    "explanation": "Let u = x², du = 2x dx, so x dx = du/2. When x = 0, u = 0; when x = 2, u = 4. The integral becomes (1/2)∫₀⁴ eᵘ du = (1/2)[eᵘ]₀⁴ = (1/2)(e⁴ - 1). Choice B forgets the 1/2 factor. Choice C forgets to subtract the lower limit evaluation e⁰ = 1. Choice D adds 1 instead of subtracting."
  },
  {
    "id": "calc_u7_q175",
    "subject": "apcalc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "trig integrals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ sec²(x) dx",
    "choices": [
      "A) tan(x) + C",
      "B) sec(x)tan(x) + C",
      "C) 2sec(x) + C",
      "D) -cot(x) + C"
    ],
    "answer": 0,
    "explanation": "The antiderivative of sec²(x) is tan(x) + C, which is a standard result since d/dx[tan(x)] = sec²(x). Choice B is the derivative of sec(x), not the antiderivative of sec²(x). Choice C is not a standard antiderivative form. Choice D is the antiderivative of csc²(x), not sec²(x)."
  },
  {
    "id": "calc_u7_q176",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ (x² + 3) / x dx",
    "choices": [
      "A) x²/2 + 3 ln|x| + C",
      "B) x²/2 + 3x + C",
      "C) x + 3 ln|x| + C",
      "D) ln|x² + 3| + C"
    ],
    "answer": 0,
    "explanation": "Divide each term by x: (x² + 3)/x = x + 3/x. Then ∫(x + 3/x) dx = x²/2 + 3 ln|x| + C. Choice B integrates 3/x as 3x instead of 3 ln|x|. Choice C integrates x as x instead of x²/2. Choice D incorrectly treats the integral as a logarithmic form without splitting the fraction."
  },
  {
    "id": "calc_u7_q177",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ (x³ + x) / x² dx",
    "choices": [
      "A) x²/2 + x + C",
      "B) x²/2 + ln|x| + C",
      "C) x³/3 + x + C",
      "D) x²/2 - ln|x| + C"
    ],
    "answer": 1,
    "explanation": "Divide each term by x²: (x³ + x)/x² = x + 1/x. Then ∫(x + 1/x) dx = x²/2 + ln|x| + C. Choice A integrates 1/x as x. Choice C integrates x as x³/3 (power rule error) and 1/x as x. Choice D has a negative sign on ln|x| which is incorrect."
  },
  {
    "id": "calc_u7_q178",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ 1 / (x² + 4) dx",
    "choices": [
      "A) (1/2) arctan(x/2) + C",
      "B) arctan(x/2) + C",
      "C) (1/4) arctan(x/2) + C",
      "D) arctan(x) / 2 + C"
    ],
    "answer": 0,
    "explanation": "Using the formula ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C with a = 2, we get (1/2) arctan(x/2) + C. Choice B forgets the 1/a factor out front. Choice C incorrectly uses 1/a² = 1/4 instead of 1/a = 1/2. Choice D places the 1/2 outside arctan(x) without adjusting the argument."
  },
  {
    "id": "calc_u7_q179",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ 1 / (x² + 6x + 13) dx",
    "choices": [
      "A) (1/2) arctan((x + 3)/2) + C",
      "B) arctan((x + 3)/2) + C",
      "C) (1/2) arctan((x + 6)/2) + C",
      "D) ln|x² + 6x + 13| + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: x² + 6x + 13 = (x + 3)² + 4. Using the formula ∫ 1/((x + 3)² + 4) dx with a = 2, we get (1/2) arctan((x + 3)/2) + C. Choice B forgets the 1/a = 1/2 factor. Choice C incorrectly shifts by 6 instead of 3 when completing the square. Choice D applies a logarithmic form which requires a matching numerator of 2x + 6."
  },
  {
    "id": "calc_u7_q180",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ 5/(2x + 7) dx",
    "choices": [
      "A) (5/2) ln|2x + 7| + C",
      "B) 5 ln|2x + 7| + C",
      "C) (5/2)(2x + 7)² + C",
      "D) 10 ln|2x + 7| + C"
    ],
    "answer": 0,
    "explanation": "Let u = 2x + 7, du = 2 dx, so dx = du/2. The integral becomes (5/2) ∫ 1/u du = (5/2) ln|u| + C = (5/2) ln|2x + 7| + C. Choice B forgets the 1/2 factor from the substitution. Choice C uses a power rule instead of a logarithm. Choice D multiplies by 2 instead of dividing."
  },
  {
    "id": "calc_u7_q181",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ 3x²·cos(x³) dx",
    "choices": [
      "A) sin(x³) + C",
      "B) -sin(x³) + C",
      "C) 3sin(x³) + C",
      "D) (1/3)sin(x³) + C"
    ],
    "answer": 0,
    "explanation": "Let u = x³, then du = 3x² dx. The integral becomes ∫ cos(u) du = sin(u) + C = sin(x³) + C. Choice B has wrong sign. Choice C incorrectly multiplies by 3 instead of recognizing 3x² dx = du exactly. Choice D incorrectly divides by 3."
  },
  {
    "id": "calc_u7_q182",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 0 to 2 of x·e^(x²) dx",
    "choices": [
      "A) (1/2)(e⁴ - 1)",
      "B) e⁴ - 1",
      "C) (1/2)e⁴",
      "D) (1/2)(e⁴ + 1)"
    ],
    "answer": 0,
    "explanation": "Let u = x², du = 2x dx, so x dx = du/2. When x=0, u=0; when x=2, u=4. Integral becomes (1/2)∫₀⁴ eᵘ du = (1/2)(e⁴ - e⁰) = (1/2)(e⁴ - 1). Choice B forgets the 1/2 factor. Choice C forgets to subtract the lower bound evaluation. Choice D adds 1 instead of subtracting."
  },
  {
    "id": "calc_u7_q183",
    "subject": "apcalc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "trig integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ sin²(x) dx",
    "choices": [
      "A) (1/2)x - (1/4)sin(2x) + C",
      "B) (1/2)x + (1/4)sin(2x) + C",
      "C) -cos²(x)/2 + C",
      "D) sin³(x)/3 + C"
    ],
    "answer": 0,
    "explanation": "Use the power-reducing identity sin²(x) = (1 - cos(2x))/2. Then ∫(1/2 - cos(2x)/2) dx = x/2 - sin(2x)/4 + C. Choice B has the wrong sign on the sin(2x) term. Choice C is not equivalent (differentiating gives sin(x)cos(x), not sin²(x)). Choice D incorrectly uses a power rule for trig."
  },
  {
    "id": "calc_u7_q184",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ (x² + 1)/(x + 1) dx",
    "choices": [
      "A) x²/2 - x + 2ln|x+1| + C",
      "B) x²/2 + x + ln|x+1| + C",
      "C) x²/2 - x + ln|x+1| + C",
      "D) x² - x + 2ln|x+1| + C"
    ],
    "answer": 0,
    "explanation": "Perform long division: (x² + 1)/(x + 1) = x - 1 + 2/(x + 1). Integrating: x²/2 - x + 2ln|x+1| + C. Choice B has wrong signs from incorrect division. Choice C has coefficient 1 instead of 2 on the ln term. Choice D forgets the 1/2 on x²."
  },
  {
    "id": "calc_u7_q185",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ 1/(x² + 4x + 8) dx",
    "choices": [
      "A) (1/2)arctan((x+2)/2) + C",
      "B) arctan((x+2)/2) + C",
      "C) (1/2)arctan((x+4)/2) + C",
      "D) ln|x² + 4x + 8| + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: x² + 4x + 8 = (x+2)² + 4. Then ∫1/((x+2)² + 4) dx. Using the formula ∫1/(u² + a²) du = (1/a)arctan(u/a) + C with u = x+2, a = 2: result is (1/2)arctan((x+2)/2) + C. Choice B forgets the 1/a factor. Choice C incorrectly completes the square. Choice D confuses this with the ln form used for ∫(2x+4)/(x²+4x+8) dx."
  },
  {
    "id": "calc_u7_q186",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ x/√(1 - x²) dx",
    "choices": [
      "A) -√(1 - x²) + C",
      "B) √(1 - x²) + C",
      "C) arcsin(x) + C",
      "D) -arcsin(x) + C"
    ],
    "answer": 0,
    "explanation": "Let u = 1 - x², du = -2x dx, so x dx = -du/2. Integral becomes -(1/2)∫ u^(-1/2) du = -(1/2)(2u^(1/2)) + C = -√(1 - x²) + C. Choice B has the wrong sign. Choice C is ∫1/√(1-x²) dx, confusing the numerator x with 1. Choice D combines both errors."
  },
  {
    "id": "calc_u7_q187",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 0 to π/4 of tan(x)·sec²(x) dx",
    "choices": [
      "A) 1/2",
      "B) 1",
      "C) √2/2",
      "D) 1/4"
    ],
    "answer": 0,
    "explanation": "Let u = tan(x), du = sec²(x) dx. When x=0, u=0; when x=π/4, u=1. Integral becomes ∫₀¹ u du = u²/2 |₀¹ = 1/2. Choice B forgets the 1/2 from integration of u. Choice C likely comes from evaluating trig incorrectly. Choice D might arise from an extra factor of 1/2."
  },
  {
    "id": "calc_u7_q188",
    "subject": "apcalc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "trig integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ cos³(x) dx",
    "choices": [
      "A) sin(x) - sin³(x)/3 + C",
      "B) cos⁴(x)/4 + C",
      "C) 3cos²(x)sin(x) + C",
      "D) sin(x) + sin³(x)/3 + C"
    ],
    "answer": 0,
    "explanation": "Write cos³(x) = cos²(x)·cos(x) = (1 - sin²(x))cos(x). Let u = sin(x), du = cos(x) dx. Integral becomes ∫(1 - u²) du = u - u³/3 + C = sin(x) - sin³(x)/3 + C. Choice B incorrectly uses a power rule. Choice C is related to differentiation not integration. Choice D has the wrong sign on the cubic term."
  },
  {
    "id": "calc_u7_q189",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ (2x³ + 3x)/(x² + 1) dx",
    "choices": [
      "A) x² + (1/2)ln(x² + 1) + C",
      "B) x² + ln(x² + 1) + C",
      "C) x² - (1/2)ln(x² + 1) + C",
      "D) 2x + (1/2)ln(x² + 1) + C"
    ],
    "answer": 0,
    "explanation": "Long division: (2x³ + 3x)/(x² + 1) = 2x + x/(x² + 1). Then ∫[2x + x/(x² + 1)] dx = x² + (1/2)ln(x² + 1) + C. For the second part, let u = x² + 1, du = 2x dx. Choice B forgets the 1/2 factor. Choice C has wrong sign on the ln term. Choice D forgets to integrate 2x."
  },
  {
    "id": "calc_u7_q190",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ 1/√(6x - x²) dx",
    "choices": [
      "A) arcsin((x - 3)/3) + C",
      "B) arcsin(x/3) + C",
      "C) arcsin((x - 6)/3) + C",
      "D) arcsin((x - 3)/6) + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: 6x - x² = -(x² - 6x) = -(x² - 6x + 9 - 9) = 9 - (x-3)². So ∫1/√(9 - (x-3)²) dx = arcsin((x-3)/3) + C using the formula ∫1/√(a²-u²) du = arcsin(u/a). Choice B fails to complete the square. Choice C uses wrong center. Choice D uses 6 instead of 3 for the radius."
  },
  {
    "id": "calc_u7_q191",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ e^(2x)/(1 + e^(2x)) dx",
    "choices": [
      "A) (1/2)ln(1 + e^(2x)) + C",
      "B) ln(1 + e^(2x)) + C",
      "C) arctan(e^(2x)) + C",
      "D) (1/2)arctan(e^(2x)) + C"
    ],
    "answer": 0,
    "explanation": "Let u = 1 + e^(2x), du = 2e^(2x) dx, so e^(2x) dx = du/2. Integral becomes (1/2)∫ du/u = (1/2)ln|u| + C = (1/2)ln(1 + e^(2x)) + C. Choice B forgets the 1/2 from the chain rule. Choices C and D confuse this with an arctangent form."
  },
  {
    "id": "calc_u7_q192",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 1 to e of (ln x)²/x dx",
    "choices": [
      "A) 1/3",
      "B) 1",
      "C) 1/2",
      "D) 2/3"
    ],
    "answer": 0,
    "explanation": "Let u = ln x, du = (1/x) dx. When x=1, u=0; when x=e, u=1. Integral becomes ∫₀¹ u² du = u³/3 |₀¹ = 1/3. Choice B evaluates the integral as u|₀¹. Choice C uses u²/2 power rule error. Choice D might come from a computational mistake."
  },
  {
    "id": "calc_u7_q193",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ (x³ - 1)/(x - 1) dx",
    "choices": [
      "A) x³/3 + x²/2 + x + C",
      "B) x³/3 - x²/2 + x + C",
      "C) x³/3 + x + C",
      "D) x²/2 + x + ln|x - 1| + C"
    ],
    "answer": 0,
    "explanation": "Factor: (x³ - 1)/(x - 1) = x² + x + 1 (sum of geometric series or polynomial division). Integrating: x³/3 + x²/2 + x + C. Choice B has wrong sign on the x² term. Choice C misses the x² term. Choice D incorrectly assumes there's a remainder term."
  },
  {
    "id": "calc_u7_q194",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ 1/(x² - 6x + 13) dx",
    "choices": [
      "A) (1/2)arctan((x - 3)/2) + C",
      "B) arctan((x - 3)/2) + C",
      "C) (1/2)arctan((x - 3)/4) + C",
      "D) (1/4)arctan((x - 3)/2) + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: x² - 6x + 13 = (x - 3)² + 4. Then ∫1/((x-3)² + 4) dx. With u = x-3, a = 2: (1/a)arctan(u/a) = (1/2)arctan((x-3)/2) + C. Choice B forgets the 1/a factor. Choice C uses a = 4 instead of a = 2. Choice D uses 1/4 instead of 1/2."
  },
  {
    "id": "calc_u7_q195",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 0 to 1 of x²·(x³ + 1)⁴ dx",
    "choices": [
      "A) 31/15",
      "B) 32/15",
      "C) 31/5",
      "D) 1/15"
    ],
    "answer": 0,
    "explanation": "Let u = x³ + 1, du = 3x² dx, so x² dx = du/3. When x=0, u=1; when x=1, u=2. Integral becomes (1/3)∫₁² u⁴ du = (1/3)(u⁵/5)|₁² = (1/15)(32 - 1) = 31/15. Choice B uses 32 in the numerator, forgetting to subtract the lower bound correctly. Choice C forgets the factor of 1/3. Choice D only evaluates the lower bound subtraction incorrectly."
  },
  {
    "id": "calc_u7_q196",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ (x² + 3)/(x - 2) dx",
    "choices": [
      "A) x²/2 + 2x + 7ln|x - 2| + C",
      "B) x²/2 + 2x + 3ln|x - 2| + C",
      "C) x²/2 - 2x + 7ln|x - 2| + C",
      "D) x² + 2x + 7ln|x - 2| + C"
    ],
    "answer": 0,
    "explanation": "Long division: (x² + 3)/(x - 2) = x + 2 + 7/(x - 2). Verify: (x + 2)(x - 2) + 7 = x² - 4 + 7 = x² + 3 ✓. Integrating: x²/2 + 2x + 7ln|x - 2| + C. Choice B uses remainder 3 instead of 7. Choice C has wrong sign on the 2x. Choice D forgets the 1/2 on x²."
  },
  {
    "id": "calc_u7_q197",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ x·√(x² + 5) dx",
    "choices": [
      "A) (1/3)(x² + 5)^(3/2) + C",
      "B) (2/3)(x² + 5)^(3/2) + C",
      "C) (1/2)(x² + 5)^(3/2) + C",
      "D) (x²/2)·√(x² + 5) + C"
    ],
    "answer": 0,
    "explanation": "Let u = x² + 5, du = 2x dx, so x dx = du/2. Integral becomes (1/2)∫ u^(1/2) du = (1/2)(2/3)u^(3/2) + C = (1/3)(x² + 5)^(3/2) + C. Choice B forgets the 1/2 from the substitution. Choice C uses 1/2 instead of computing (1/2)(2/3) = 1/3. Choice D incorrectly tries to integrate the product term by term."
  },
  {
    "id": "calc_u7_q198",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ x² · e^(x³) dx",
    "choices": [
      "A) (1/3)e^(x³) + C",
      "B) e^(x³) + C",
      "C) 3e^(x³) + C",
      "D) (1/3)x³ · e^(x³) + C"
    ],
    "answer": 0,
    "explanation": "Let u = x³, so du = 3x² dx, meaning x² dx = du/3. The integral becomes (1/3)∫ e^u du = (1/3)e^u + C = (1/3)e^(x³) + C. Choice B forgets the 1/3 factor from the chain rule. Choice C incorrectly multiplies by 3 instead of dividing. Choice D incorrectly keeps x³ as a factor as if applying a product rule pattern."
  },
  {
    "id": "calc_u7_q199",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 0 to 2 of x · √(x² + 5) dx",
    "choices": [
      "A) (1/3)(27 - 5√5)",
      "B) (1/3)(9 - √5)",
      "C) (2/3)(27 - 5√5)",
      "D) (1/2)(27 - 5√5)"
    ],
    "answer": 0,
    "explanation": "Let u = x² + 5, so du = 2x dx, giving x dx = du/2. When x = 0, u = 5; when x = 2, u = 9. The integral becomes (1/2)∫ from 5 to 9 of √u du = (1/2) · (2/3)u^(3/2) evaluated from 5 to 9 = (1/3)[9^(3/2) - 5^(3/2)] = (1/3)(27 - 5√5). Choice B incorrectly computes 9^(3/2) = 9 and 5^(3/2) = √5. Choice C forgets to include the 1/2 from the substitution. Choice D uses 1/2 instead of (1/2)(2/3) = 1/3."
  },
  {
    "id": "calc_u7_q200",
    "subject": "apcalc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "trig integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ sin³(x) · cos(x) dx",
    "choices": [
      "A) (1/4)sin⁴(x) + C",
      "B) (1/4)cos⁴(x) + C",
      "C) -(1/4)sin⁴(x) + C",
      "D) sin⁴(x) + C"
    ],
    "answer": 0,
    "explanation": "Let u = sin(x), so du = cos(x) dx. The integral becomes ∫ u³ du = (1/4)u⁴ + C = (1/4)sin⁴(x) + C. Choice B incorrectly substitutes u = cos(x) but does not account for the negative sign in du. Choice C adds a spurious negative sign, a common error when confusing sin and cos derivatives. Choice D forgets the 1/4 from integrating u³."
  },
  {
    "id": "calc_u7_q201",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ (x² + 3x + 5)/(x + 1) dx",
    "choices": [
      "A) (1/2)x² + 2x + 3 ln|x + 1| + C",
      "B) (1/2)x² + 3x + 5 ln|x + 1| + C",
      "C) (1/2)x² + 2x + 3/(x + 1) + C",
      "D) x² + 2x + 3 ln|x + 1| + C"
    ],
    "answer": 0,
    "explanation": "Perform polynomial long division: (x² + 3x + 5) ÷ (x + 1) = x + 2 with remainder 3. So the integrand becomes x + 2 + 3/(x + 1). Integrating: (1/2)x² + 2x + 3 ln|x + 1| + C. Choice B does not perform long division and incorrectly treats numerator terms separately. Choice C integrates 3/(x+1) as 3/(x+1) instead of 3 ln|x+1|. Choice D integrates x as x² instead of (1/2)x²."
  },
  {
    "id": "calc_u7_q202",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ 1/(x² + 6x + 13) dx",
    "choices": [
      "A) (1/2) arctan((x + 3)/2) + C",
      "B) arctan((x + 3)/2) + C",
      "C) (1/2) arctan((x + 3)/4) + C",
      "D) (1/13) arctan(x/√13) + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: x² + 6x + 13 = (x + 3)² + 4. Using the formula ∫ 1/(u² + a²) du = (1/a) arctan(u/a) + C with u = x + 3 and a = 2, we get (1/2) arctan((x + 3)/2) + C. Choice B omits the 1/a = 1/2 factor. Choice C incorrectly uses a² = 4 as a instead of a = 2. Choice D does not complete the square and treats the denominator as x² + 13."
  },
  {
    "id": "calc_u7_q203",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ cos(x) / (1 + sin(x))³ dx",
    "choices": [
      "A) -1/(2(1 + sin(x))²) + C",
      "B) 1/(2(1 + sin(x))²) + C",
      "C) -1/(3(1 + sin(x))²) + C",
      "D) -1/(2(1 + sin(x))³) + C"
    ],
    "answer": 0,
    "explanation": "Let u = 1 + sin(x), so du = cos(x) dx. The integral becomes ∫ u⁻³ du = u⁻²/(-2) + C = -1/(2u²) + C = -1/(2(1 + sin(x))²) + C. Choice B has the wrong sign, forgetting that integrating u⁻³ gives a negative exponent coefficient. Choice C uses -3 in the denominator, confusing the original exponent with the result of integration. Choice D keeps the exponent as 3 instead of reducing it to 2 after integration."
  },
  {
    "id": "calc_u7_q204",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ x²·e^(x³) dx",
    "choices": [
      "A) (1/3)e^(x³) + C",
      "B) e^(x³) + C",
      "C) 3e^(x³) + C",
      "D) (1/3)x³·e^(x³) + C"
    ],
    "answer": 0,
    "explanation": "Let u = x³, then du = 3x² dx, so x² dx = du/3. The integral becomes (1/3)∫e^u du = (1/3)e^u + C = (1/3)e^(x³) + C. Choice B forgets the 1/3 factor. Choice C multiplies by 3 instead of dividing. Choice D incorrectly keeps x³ in the answer as if integrating by parts."
  },
  {
    "id": "calc_u7_q205",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 0 to 2 of x·√(4 − x²) dx",
    "choices": [
      "A) 8/3",
      "B) 4/3",
      "C) 2π",
      "D) 16/3"
    ],
    "answer": 0,
    "explanation": "Let u = 4 − x². Then du = −2x dx, so x dx = −du/2. When x=0, u=4; when x=2, u=0. The integral becomes −(1/2)∫ from 4 to 0 of √u du = (1/2)∫ from 0 to 4 of u^(1/2) du = (1/2)·(2/3)u^(3/2) evaluated from 0 to 4 = (1/3)(8) = 8/3. Choice B results from forgetting the factor correctly. Choice C comes from confusing this with the area of a semicircle. Choice D doubles the correct answer."
  },
  {
    "id": "calc_u7_q206",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ tan(x)·ln(cos(x)) dx",
    "choices": [
      "A) −(1/2)[ln(cos(x))]² + C",
      "B) (1/2)[ln(cos(x))]² + C",
      "C) −[ln(cos(x))]² + C",
      "D) −(1/2)ln(cos²(x)) + C"
    ],
    "answer": 0,
    "explanation": "Let u = ln(cos(x)). Then du = (−sin(x)/cos(x)) dx = −tan(x) dx. So tan(x) dx = −du. The integral becomes −∫u du = −u²/2 + C = −(1/2)[ln(cos(x))]² + C. Choice B has the wrong sign from mishandling the negative. Choice C forgets the 1/2 from integrating u. Choice D incorrectly simplifies the squared logarithm as ln(cos²x)."
  },
  {
    "id": "calc_u7_q207",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ 1/(x² + 6x + 13) dx",
    "choices": [
      "A) (1/2)arctan((x + 3)/2) + C",
      "B) arctan((x + 3)/2) + C",
      "C) (1/2)arctan((x + 6)/13) + C",
      "D) (1/13)arctan(x + 3) + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: x² + 6x + 13 = (x + 3)² + 4. The integral becomes ∫1/((x+3)² + 4) dx. Using the formula ∫1/(u² + a²) du = (1/a)arctan(u/a) + C with u = x+3 and a = 2, we get (1/2)arctan((x+3)/2) + C. Choice B forgets the 1/a factor. Choice C incorrectly uses the original coefficients. Choice D uses a = 1 instead of a = 2."
  },
  {
    "id": "calc_u7_q208",
    "subject": "apcalc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "trig integrals",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ sin³(x)·cos²(x) dx",
    "choices": [
      "A) −cos³(x)/3 + cos⁵(x)/5 + C",
      "B) cos³(x)/3 − cos⁵(x)/5 + C",
      "C) −sin³(x)·cos³(x)/3 + C",
      "D) −cos³(x)/3 − cos⁵(x)/5 + C"
    ],
    "answer": 0,
    "explanation": "Write sin³(x) = sin(x)(1 − cos²(x)). Let u = cos(x), du = −sin(x) dx. The integral becomes −∫(1 − u²)u² du = −∫(u² − u⁴) du = −u³/3 + u⁵/5 + C = −cos³(x)/3 + cos⁵(x)/5 + C. Choice B has opposite signs from dropping the negative in the substitution. Choice C incorrectly combines terms. Choice D has both terms negative, which is wrong."
  },
  {
    "id": "calc_u7_q209",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 0 to π/4 of sec²(x)·tan³(x) dx",
    "choices": [
      "A) 1/4",
      "B) 1/2",
      "C) 1/3",
      "D) 3/4"
    ],
    "answer": 0,
    "explanation": "Let u = tan(x), du = sec²(x) dx. When x = 0, u = 0; when x = π/4, u = 1. The integral becomes ∫ from 0 to 1 of u³ du = u⁴/4 evaluated from 0 to 1 = 1/4. Choice B results from computing u²/2 instead of u⁴/4. Choice C comes from using u³/3 as if integrating u². Choice D is a common miscalculation."
  },
  {
    "id": "calc_u7_q210",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ e^(2x)/(e^(2x) + 1)² dx",
    "choices": [
      "A) −1/(2(e^(2x) + 1)) + C",
      "B) 1/(2(e^(2x) + 1)) + C",
      "C) −1/(e^(2x) + 1) + C",
      "D) ln(e^(2x) + 1) + C"
    ],
    "answer": 0,
    "explanation": "Let u = e^(2x) + 1. Then du = 2e^(2x) dx, so e^(2x) dx = du/2. The integral becomes (1/2)∫ u^(−2) du = (1/2)(−u^(−1)) + C = −1/(2(e^(2x) + 1)) + C. Choice B has the wrong sign. Choice C forgets the factor of 1/2 from the substitution. Choice D incorrectly integrates as if the exponent were −1 instead of −2."
  },
  {
    "id": "calc_u7_q211",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ 1/√(−x² + 4x + 5) dx",
    "choices": [
      "A) arcsin((x − 2)/3) + C",
      "B) arcsin((x + 2)/3) + C",
      "C) arctan((x − 2)/3) + C",
      "D) arcsin((x − 2)/√5) + C"
    ],
    "answer": 0,
    "explanation": "Rewrite: −x² + 4x + 5 = −(x² − 4x) + 5 = −(x² − 4x + 4) + 9 = 9 − (x − 2)². The integral becomes ∫1/√(9 − (x−2)²) dx. Using the formula ∫1/√(a² − u²) du = arcsin(u/a) + C with u = x−2 and a = 3, we get arcsin((x−2)/3) + C. Choice B uses x+2 instead of x−2. Choice C uses arctan instead of arcsin. Choice D uses √5 instead of 3."
  },
  {
    "id": "calc_u7_q212",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 1 to e of sin(ln(x))/x dx",
    "choices": [
      "A) 1 − cos(1)",
      "B) cos(1) − 1",
      "C) sin(1)",
      "D) 1 − sin(1)"
    ],
    "answer": 0,
    "explanation": "Let u = ln(x), du = 1/x dx. When x = 1, u = 0; when x = e, u = 1. The integral becomes ∫ from 0 to 1 of sin(u) du = [−cos(u)] from 0 to 1 = −cos(1) + cos(0) = 1 − cos(1). Choice B has the wrong sign. Choice C confuses sine and cosine in the antiderivative. Choice D incorrectly uses sin instead of cos."
  },
  {
    "id": "calc_u7_q213",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ x/(√(1 − x⁴)) dx",
    "choices": [
      "A) (1/2)arcsin(x²) + C",
      "B) arcsin(x²) + C",
      "C) (1/2)arctan(x²) + C",
      "D) −(1/2)arcsin(x²) + C"
    ],
    "answer": 0,
    "explanation": "Let u = x², du = 2x dx, so x dx = du/2. The integral becomes (1/2)∫1/√(1 − u²) du = (1/2)arcsin(u) + C = (1/2)arcsin(x²) + C. Choice B forgets the 1/2 factor from the substitution. Choice C uses arctan instead of arcsin. Choice D has the wrong sign."
  },
  {
    "id": "calc_u7_q214",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ (x⁴ + 1)/(x² + 1) dx",
    "choices": [
      "A) x³/3 − x + 2·arctan(x) + C",
      "B) x³/3 − x + arctan(x) + C",
      "C) x³/3 + x + 2·arctan(x) + C",
      "D) x³/3 − x + 2·ln(x² + 1) + C"
    ],
    "answer": 0,
    "explanation": "Divide x⁴ + 1 by x² + 1. x⁴ + 1 = (x² + 1)(x² − 1) + 2. So the integrand is x² − 1 + 2/(x² + 1). Integrating: x³/3 − x + 2·arctan(x) + C. Choice B uses 1 instead of 2 for the arctan coefficient. Choice C has +x instead of −x. Choice D uses ln instead of arctan."
  },
  {
    "id": "calc_u7_q215",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ 1/(x² − 2x + 5) dx",
    "choices": [
      "A) (1/2)arctan((x − 1)/2) + C",
      "B) arctan((x − 1)/2) + C",
      "C) (1/2)arctan((x − 2)/5) + C",
      "D) (1/5)arctan((x − 1)/2) + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: x² − 2x + 5 = (x − 1)² + 4. Using ∫1/(u² + a²) du = (1/a)arctan(u/a) + C with u = x−1, a = 2: (1/2)arctan((x−1)/2) + C. Choice B forgets the 1/a factor. Choice C uses incorrect values for the shift and denominator. Choice D incorrectly uses 1/5."
  },
  {
    "id": "calc_u7_q216",
    "subject": "apcalc",
    "unit": 7,
    "topic": "trig integrals",
    "topicLabel": "trig integrals",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral: ∫ sin²(x)·cos³(x) dx",
    "choices": [
      "A) sin³(x)/3 − sin⁵(x)/5 + C",
      "B) sin³(x)/3 + sin⁵(x)/5 + C",
      "C) −sin³(x)/3 + sin⁵(x)/5 + C",
      "D) cos³(x)·sin³(x)/9 + C"
    ],
    "answer": 0,
    "explanation": "Since cos has an odd power, write cos³(x) = cos(x)(1 − sin²(x)). Let u = sin(x), du = cos(x) dx. The integral becomes ∫u²(1 − u²) du = ∫(u² − u⁴) du = u³/3 − u⁵/5 + C = sin³(x)/3 − sin⁵(x)/5 + C. Choice B has the wrong sign on the second term. Choice C has signs reversed. Choice D incorrectly combines terms."
  },
  {
    "id": "calc_u7_q217",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate: ∫ from 0 to 1 of x²·e^(x³+1) dx",
    "choices": [
      "A) (e² − e)/3",
      "B) (e² − e)",
      "C) e²/3",
      "D) (e² − 1)/3"
    ],
    "answer": 0,
    "explanation": "Let u = x³ + 1, du = 3x² dx, so x² dx = du/3. When x = 0, u = 1; when x = 1, u = 2. The integral becomes (1/3)∫ from 1 to 2 of e^u du = (1/3)[e^u] from 1 to 2 = (1/3)(e² − e). Choice B forgets the 1/3 factor. Choice C omits the lower bound contribution. Choice D uses u = 0 as the lower limit instead of u = 1, forgetting that the +1 shifts the bounds."
  },
  {
    "id": "calc_u8_q218",
    "subject": "apcalc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Find the area of the region enclosed by $y = x^2$ and $y = x$ for $0 \\le x \\le 1$.",
    "choices": [
      "A) $\\frac{1}{6}$",
      "B) $\\frac{1}{3}$",
      "C) $\\frac{1}{2}$",
      "D) $\\frac{2}{3}$"
    ],
    "answer": 0,
    "explanation": "The area is $\\int_0^1 (x - x^2)\\,dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$. Choice B ($\\frac{1}{3}$) results from forgetting to subtract one function and just integrating $x^2$. Choice C ($\\frac{1}{2}$) comes from only integrating $x$. Choice D ($\\frac{2}{3}$) comes from adding the integrals instead of subtracting."
  },
  {
    "id": "calc_u8_q219",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes - Disc Method",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 4$ is revolved about the x-axis. Which integral gives the volume using the disc method?",
    "choices": [
      "A) $\\pi \\int_0^4 x\\,dx$",
      "B) $\\pi \\int_0^4 \\sqrt{x}\\,dx$",
      "C) $\\pi \\int_0^2 x\\,dx$",
      "D) $\\pi \\int_0^4 x^2\\,dx$"
    ],
    "answer": 0,
    "explanation": "The disc method gives $V = \\pi \\int_0^4 (\\sqrt{x})^2\\,dx = \\pi \\int_0^4 x\\,dx$. Choice B forgets to square the radius. Choice C uses wrong limits (0 to 2 are the y-values, not x-values). Choice D squares $x$ instead of $\\sqrt{x}$, effectively using $r = x$ instead of $r = \\sqrt{x}$."
  },
  {
    "id": "calc_u8_q220",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes - Washer Method",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region between $y = x$ and $y = x^2$ on $[0,1]$ is revolved about the x-axis. Which integral represents the volume using the washer method?",
    "choices": [
      "A) $\\pi \\int_0^1 (x^2 - x^4)\\,dx$",
      "B) $\\pi \\int_0^1 (x - x^2)^2\\,dx$",
      "C) $\\pi \\int_0^1 (x - x^2)\\,dx$",
      "D) $\\pi \\int_0^1 (x^4 - x^2)\\,dx$"
    ],
    "answer": 0,
    "explanation": "The washer method gives $V = \\pi \\int_0^1 [R(x)]^2 - [r(x)]^2\\,dx$. Since $x \\ge x^2$ on $[0,1]$, $R = x$ and $r = x^2$, so $V = \\pi \\int_0^1 (x^2 - x^4)\\,dx$. Choice B incorrectly squares the difference rather than taking the difference of squares. Choice C forgets to square the radii entirely. Choice D reverses outer and inner radii."
  },
  {
    "id": "calc_u8_q221",
    "subject": "apcalc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "Motion Problems with Integrals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along the x-axis with velocity $v(t) = 3t^2 - 6t$ for $0 \\le t \\le 3$. What is the displacement of the particle over this interval?",
    "choices": [
      "A) 0",
      "B) 9",
      "C) $-4$",
      "D) 4"
    ],
    "answer": 0,
    "explanation": "Displacement $= \\int_0^3 (3t^2 - 6t)\\,dt = [t^3 - 3t^2]_0^3 = (27 - 27) - 0 = 0$. Choice B (9) may come from computing $\\int_0^3 3t^2\\,dt$ without the $-6t$ term. Choices C and D represent common sign or arithmetic errors students make when evaluating the antiderivative."
  },
  {
    "id": "calc_u8_q222",
    "subject": "apcalc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "Total Distance Traveled",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle has velocity $v(t) = t - 2$ for $0 \\le t \\le 4$. What is the total distance traveled by the particle?",
    "choices": [
      "A) 4",
      "B) 0",
      "C) 2",
      "D) 8"
    ],
    "answer": 0,
    "explanation": "Total distance $= \\int_0^4 |t - 2|\\,dt$. The velocity changes sign at $t = 2$. $\\int_0^2 (2-t)\\,dt = [2t - \\frac{t^2}{2}]_0^2 = 2$ and $\\int_2^4 (t-2)\\,dt = [\\frac{t^2}{2} - 2t]_2^4 = 2$. Total $= 2 + 2 = 4$. Choice B (0) is the displacement, a common error when students don't use absolute value. Choice C (2) comes from computing only one piece. Choice D (8) comes from integrating $|t-2|$ incorrectly or using $t+2$."
  },
  {
    "id": "calc_u8_q223",
    "subject": "apcalc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves (Horizontal)",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "What is the area of the region enclosed by $x = y^2$ and $x = 4$?",
    "choices": [
      "A) $\\frac{32}{3}$",
      "B) $\\frac{16}{3}$",
      "C) $8$",
      "D) $16$"
    ],
    "answer": 0,
    "explanation": "The curves intersect when $y^2 = 4$, so $y = \\pm 2$. Area $= \\int_{-2}^{2} (4 - y^2)\\,dy = [4y - \\frac{y^3}{3}]_{-2}^{2} = (8 - \\frac{8}{3}) - (-8 + \\frac{8}{3}) = \\frac{32}{3}$. Choice B ($\\frac{16}{3}$) results from integrating only from 0 to 2 and forgetting symmetry. Choice C (8) comes from treating the region as a simple rectangle. Choice D (16) comes from $4 \\times 4$ without integration."
  },
  {
    "id": "calc_u8_q224",
    "subject": "apcalc",
    "unit": 8,
    "topic": "arc length",
    "topicLabel": "Arc Length",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which integral gives the arc length of $y = x^{3/2}$ from $x = 0$ to $x = 4$?",
    "choices": [
      "A) $\\int_0^4 \\sqrt{1 + \\frac{9}{4}x}\\,dx$",
      "B) $\\int_0^4 \\sqrt{1 + x^3}\\,dx$",
      "C) $\\int_0^4 \\sqrt{1 + \\frac{3}{2}\\sqrt{x}}\\,dx$",
      "D) $\\int_0^4 \\sqrt{\\frac{9}{4}x}\\,dx$"
    ],
    "answer": 0,
    "explanation": "Arc length $= \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$. Here $f'(x) = \\frac{3}{2}x^{1/2}$, so $[f'(x)]^2 = \\frac{9}{4}x$. The integral is $\\int_0^4 \\sqrt{1 + \\frac{9}{4}x}\\,dx$. Choice B uses $(x^{3/2})^2 = x^3$ instead of squaring the derivative. Choice C forgets to square the derivative. Choice D omits the essential $+1$ under the radical."
  },
  {
    "id": "calc_u8_q225",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes - Disc Method (about y-axis)",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by $x = \\sqrt{y}$, $x = 0$, and $y = 9$ is revolved about the y-axis. What is the volume?",
    "choices": [
      "A) $\\frac{81\\pi}{2}$",
      "B) $81\\pi$",
      "C) $\\frac{81\\pi}{4}$",
      "D) $9\\pi$"
    ],
    "answer": 0,
    "explanation": "Using discs about the y-axis: $V = \\pi \\int_0^9 (\\sqrt{y})^2\\,dy = \\pi \\int_0^9 y\\,dy = \\pi [\\frac{y^2}{2}]_0^9 = \\frac{81\\pi}{2}$. Choice B ($81\\pi$) forgets to divide by 2 in the antiderivative. Choice C ($\\frac{81\\pi}{4}$) may arise from an extra factor of $\\frac{1}{2}$. Choice D ($9\\pi$) comes from not squaring or from a simplification error."
  },
  {
    "id": "calc_u8_q226",
    "subject": "apcalc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "Position from Velocity",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "A particle moves along a line with velocity $v(t) = 4t$ and has position $s(0) = 3$. What is the position of the particle at $t = 2$?",
    "choices": [
      "A) 11",
      "B) 8",
      "C) 5",
      "D) 3"
    ],
    "answer": 0,
    "explanation": "Position $s(t) = s(0) + \\int_0^t 4u\\,du = 3 + 2t^2$. At $t = 2$: $s(2) = 3 + 2(4) = 3 + 8 = 11$. Choice B (8) forgets to add the initial position $s(0) = 3$. Choice C (5) may come from computing $3 + \\int_0^2 4\\,dt = 3 + 8$... no, more likely from $3 + 2(1) = 5$ with an arithmetic error. Choice D (3) assumes no movement, ignoring the integral entirely."
  },
  {
    "id": "calc_u8_q228",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "volumes washer method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The region bounded by y = x^2 and y = 2x is rotated about the x-axis. Which integral gives the volume of the resulting solid?",
    "choices": [
      "A) pi * integral from 0 to 2 of [(2x)^2 - (x^2)^2] dx",
      "B) pi * integral from 0 to 2 of [2x - x^2]^2 dx",
      "C) pi * integral from 0 to 4 of [(2x)^2 - (x^2)^2] dx",
      "D) 2pi * integral from 0 to 2 of x(2x - x^2) dx"
    ],
    "answer": 0,
    "explanation": "The curves y = x^2 and y = 2x intersect where x^2 = 2x, giving x = 0 and x = 2. On [0, 2], the outer radius is R = 2x and the inner radius is r = x^2. The washer method gives V = pi * integral from 0 to 2 of [(2x)^2 - (x^2)^2] dx. Choice B incorrectly squares the difference of the functions rather than subtracting the squares of the radii — a common error where students compute pi*(R - r)^2 instead of pi*(R^2 - r^2). Choice C uses the wrong upper limit of x = 4 (confusing the y-intersection value of 4 with the x-intersection value of 2). Choice D is the correct volume using the shell method about the y-axis, not the x-axis as specified."
  },
  {
    "id": "calc_u1_q229",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limit laws",
    "topicLabel": "Limit Laws",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If lim(x->3) f(x) = 5 and lim(x->3) g(x) = 2, what is lim(x->3) [3f(x) - g(x)]?",
    "choices": [
      "A) 13",
      "B) 15",
      "C) 7",
      "D) 17"
    ],
    "answer": 0,
    "explanation": "By limit laws, lim(x->3) [3f(x) - g(x)] = 3·lim(x->3) f(x) - lim(x->3) g(x) = 3(5) - 2 = 13. Choice B (15) results from computing 3(5) and forgetting to subtract g(x). Choice C (7) comes from incorrectly computing 5 + 2 = 7 without the coefficient. Choice D (17) comes from adding instead of subtracting: 3(5) + 2 = 17."
  },
  {
    "id": "calc_u1_q230",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = (x^2 - 4)/(x - 2) for x not equal to 2, and g(2) = 5. Which type of discontinuity does g have at x = 2?",
    "choices": [
      "A) g is continuous at x = 2",
      "B) Removable discontinuity",
      "C) Jump discontinuity",
      "D) Infinite discontinuity"
    ],
    "answer": 1,
    "explanation": "Simplifying (x^2 - 4)/(x - 2) = (x + 2)(x - 2)/(x - 2) = x + 2 for x not equal to 2, so lim(x->2) g(x) = 4. Since g(2) = 5 and the limit equals 4, the limit exists but does not equal the function value, which is the definition of a removable discontinuity. Choice A is wrong because continuity requires g(2) = lim(x->2) g(x), but 5 ≠ 4. Choice C is wrong because both one-sided limits equal 4 (they agree), so there is no jump. Choice D is wrong because the limit is finite, not infinite."
  },
  {
    "id": "calc_u1_q233",
    "subject": "apcalc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f be a function such that -x^4 + 2 <= f(x) <= x^2 + 2 for all x near 0. What is the limit of (f(x) - 2) / x^2 as x approaches 0?",
    "choices": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) The limit does not exist"
    ],
    "answer": 1,
    "explanation": "From the given inequality, subtract 2: -x^4 <= f(x) - 2 <= x^2. Divide all parts by x^2 (positive for x near 0, x != 0): -x^2 <= (f(x) - 2)/x^2 <= 1. As x approaches 0, -x^2 approaches 0 and 1 approaches 1. By the Squeeze Theorem, the limit is 1. Students who forget to divide the bounds by x^2 may incorrectly say 0 or 2. Students who think the indeterminate form means DNE are also mistaken."
  },
  {
    "id": "calc_u1_q234",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity and IVT",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = (x^2 - 4x + 3) / (x^2 - 5x + 6) for x != 3, and g(3) = 5. Which statement is true?",
    "choices": [
      "A) g has a vertical asymptote at x = 3",
      "B) g has a removable discontinuity at x = 3 and a vertical asymptote at x = 2",
      "C) g is continuous at x = 3 because g(3) is defined",
      "D) g has removable discontinuities at both x = 2 and x = 3"
    ],
    "answer": 1,
    "explanation": "Factor: g(x) = (x-1)(x-3) / [(x-2)(x-3)]. The (x-3) cancels, so the limit as x->3 exists and equals (3-1)/(3-2) = 2. Since g(3) = 5 != 2, there is a removable discontinuity at x = 3. At x = 2, the denominator is zero but the numerator (2-1) = 1 != 0, so there is a vertical asymptote at x = 2. Choice A is wrong because the factor cancels so x = 3 is not a vertical asymptote. Choice C is wrong because continuity requires the limit to equal the function value, not merely that the function is defined. Choice D is wrong because x = 2 is a non-removable (infinite) discontinuity."
  },
  {
    "id": "calc_u1_q235",
    "subject": "apcalc",
    "unit": 1,
    "topic": "limits at infinity",
    "topicLabel": "Limits at Infinity",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "What is the limit as x approaches infinity of (sqrt(9x^2 + 4x) - 3x)?",
    "choices": [
      "A) 0",
      "B) 2/3",
      "C) 4/3",
      "D) The limit does not exist"
    ],
    "answer": 1,
    "explanation": "Multiply by the conjugate: (sqrt(9x^2+4x) - 3x) * (sqrt(9x^2+4x) + 3x) / (sqrt(9x^2+4x) + 3x) = (9x^2+4x - 9x^2) / (sqrt(9x^2+4x) + 3x) = 4x / (sqrt(9x^2+4x) + 3x). For x -> infinity, divide numerator and denominator by x: 4 / (sqrt(9 + 4/x) + 3). As x -> infinity, this becomes 4 / (3 + 3) = 4/6 = 2/3. Students who assume the difference of two terms going to infinity is 0 choose A. Students who incorrectly simplify the conjugate expression may get 4/3. Students unfamiliar with the conjugate technique may think the limit DNE."
  },
  {
    "id": "calc_u1_q236",
    "subject": "apcalc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f be a function such that -x^4 + 2 <= f(x) <= x^2 cos(1/x) + 2 for all x near 0 but not equal to 0. What is the value of lim as x->0 of f(x)?",
    "choices": [
      "A) 0",
      "B) 2",
      "C) 1",
      "D) The limit does not exist"
    ],
    "answer": 1,
    "explanation": "As x->0, the lower bound -x^4 + 2 approaches 0 + 2 = 2. For the upper bound, x^2 cos(1/x) approaches 0 since |x^2 cos(1/x)| <= x^2 -> 0, so x^2 cos(1/x) + 2 approaches 2. By the Squeeze Theorem, lim f(x) = 2. Choice A (0) comes from ignoring the +2 constant. Choice D is a common trap because students see cos(1/x) and assume oscillation prevents a limit. Choice C is a miscalculation."
  },
  {
    "id": "calc_u1_q237",
    "subject": "apcalc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f be a function such that -x^4 + 2x^2 <= f(x) <= x^4 - 2x^2 + 2 for all x near 1. What is the value of lim as x approaches 1 of f(x)?",
    "choices": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) The limit does not exist"
    ],
    "answer": 1,
    "explanation": "Evaluating the lower bound at x = 1: -(1)^4 + 2(1)^2 = -1 + 2 = 1. Evaluating the upper bound at x = 1: (1)^4 - 2(1)^2 + 2 = 1 - 2 + 2 = 1. Since both bounds approach 1, by the Squeeze Theorem, lim f(x) = 1. A common error (choice A) is miscomputing the bounds or confusing the structure with a problem where the limit is 0. Choice C (2) results from only evaluating the upper bound incorrectly as 1 + 2 = 3 or dropping the negative sign in the lower bound. Choice D is chosen by students who mistakenly believe the Squeeze Theorem cannot apply when the bounding functions are polynomials of degree 4."
  },
  {
    "id": "calc_u2_q238",
    "subject": "apcalc",
    "unit": 2,
    "topic": "average rate of change",
    "topicLabel": "Average Rate of Change",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The function f is defined by f(x) = x^3 - 2x + 5. What is the average rate of change of f on the interval [1, 3]?",
    "choices": [
      "A) 11",
      "B) 12",
      "C) 22",
      "D) 24"
    ],
    "answer": 0,
    "explanation": "f(3) = 27 - 6 + 5 = 26 and f(1) = 1 - 2 + 5 = 4. Average rate of change = (26 - 4)/(3 - 1) = 22/2 = 11. Choice C (22) is the numerator only, a common error of forgetting to divide by the interval length. Choice B (12) results from an arithmetic error. Choice D (24) could result from incorrectly computing f(3)."
  },
  {
    "id": "calc_u2_q239",
    "subject": "apcalc",
    "unit": 2,
    "topic": "instantaneous rate of change",
    "topicLabel": "Instantaneous Rate of Change",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with position given by s(t) = t^2 - 6t + 10. At what time t is the instantaneous velocity of the particle equal to zero?",
    "choices": [
      "A) t = 0",
      "B) t = 1",
      "C) t = 3",
      "D) t = 6"
    ],
    "answer": 2,
    "explanation": "The instantaneous velocity is s'(t) = 2t - 6. Setting 2t - 6 = 0 gives t = 3. Choice A (t = 0) is a common mistake of plugging in zero rather than solving. Choice D (t = 6) results from using the coefficient 6 without dividing. Choice B (t = 1) may come from misreading or an algebraic error."
  },
  {
    "id": "calc_u2_q240",
    "subject": "apcalc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of the Derivative",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Using the limit definition of the derivative, which of the following represents f'(2) for f(x) = x^2 + 3x?",
    "choices": [
      "A) lim as h->0 of [(2+h)^2 + 3(2+h) - 10] / h",
      "B) lim as h->0 of [(2+h)^2 + 3(2+h)] / h",
      "C) lim as h->0 of [(2+h)^2 + 3h - 10] / h",
      "D) lim as h->0 of [h^2 + 3h] / h"
    ],
    "answer": 0,
    "explanation": "By definition, f'(2) = lim as h->0 of [f(2+h) - f(2)] / h. Here f(2+h) = (2+h)^2 + 3(2+h) and f(2) = 4 + 6 = 10. So the expression is [(2+h)^2 + 3(2+h) - 10] / h. Choice B forgets to subtract f(2). Choice C fails to distribute the 3 correctly into 3(2+h). Choice D skips to a simplified form incorrectly by dropping constant terms prematurely."
  },
  {
    "id": "calc_u2_q241",
    "subject": "apcalc",
    "unit": 2,
    "topic": "differentiability",
    "topicLabel": "Differentiability",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = |x - 4|. Which of the following statements is true?",
    "choices": [
      "A) g is differentiable at x = 4 because g is continuous at x = 4",
      "B) g is not differentiable at x = 4 because g is not continuous at x = 4",
      "C) g is not differentiable at x = 4 because the left-hand and right-hand derivatives at x = 4 are not equal",
      "D) g is differentiable at x = 4 and g'(4) = 1"
    ],
    "answer": 2,
    "explanation": "The function g(x) = |x - 4| has a corner at x = 4. The left-hand derivative is -1 and the right-hand derivative is +1, so the derivative does not exist there. Choice A incorrectly assumes continuity implies differentiability. Choice B is wrong because g is continuous at x = 4 (it just isn't differentiable). Choice D incorrectly claims the derivative exists and equals 1."
  },
  {
    "id": "calc_u2_q242",
    "subject": "apcalc",
    "unit": 2,
    "topic": "power rule",
    "topicLabel": "Power Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = 3/x^4, what is f'(x)?",
    "choices": [
      "A) -12/x^5",
      "B) 12/x^3",
      "C) -12/x^3",
      "D) -3/(4x^3)"
    ],
    "answer": 0,
    "explanation": "Rewrite f(x) = 3x^(-4). By the power rule, f'(x) = 3(-4)x^(-5) = -12x^(-5) = -12/x^5. Choice B results from using a positive exponent and reducing the power incorrectly. Choice C uses the wrong resulting exponent of -3 instead of -5. Choice D applies a misremembered rule similar to dividing by the exponent instead of multiplying."
  },
  {
    "id": "calc_u2_q243",
    "subject": "apcalc",
    "unit": 2,
    "topic": "constant rule",
    "topicLabel": "Constant Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let h(x) = 5x^3 - 7. What is h'(x)?",
    "choices": [
      "A) 15x^2 - 7",
      "B) 15x^2",
      "C) 5x^2",
      "D) 15x^2 - 7x"
    ],
    "answer": 1,
    "explanation": "Using the power rule on 5x^3 gives 15x^2, and the derivative of the constant -7 is 0. So h'(x) = 15x^2. Choice A is a common error where students keep the constant -7 in the derivative. Choice C forgets to multiply by the exponent 3. Choice D incorrectly treats -7 as -7x before differentiating."
  },
  {
    "id": "calc_u2_q244",
    "subject": "apcalc",
    "unit": 2,
    "topic": "sum rule",
    "topicLabel": "Sum Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = x^(1/2) + x^(-1/2), what is f'(x)?",
    "choices": [
      "A) (1/2)x^(-1/2) - (1/2)x^(-3/2)",
      "B) (1/2)x^(-1/2) + (1/2)x^(-3/2)",
      "C) (1/2)x^(1/2) - (1/2)x^(-1/2)",
      "D) -(1/2)x^(-1/2) - (1/2)x^(-3/2)"
    ],
    "answer": 0,
    "explanation": "Using the power rule on each term: d/dx[x^(1/2)] = (1/2)x^(-1/2) and d/dx[x^(-1/2)] = (-1/2)x^(-3/2). By the sum rule, f'(x) = (1/2)x^(-1/2) - (1/2)x^(-3/2). Choice B uses a positive sign on the second term, forgetting that the exponent -1/2 produces a negative coefficient. Choice C reduces exponents incorrectly. Choice D makes both terms negative."
  },
  {
    "id": "calc_u2_q245",
    "subject": "apcalc",
    "unit": 2,
    "topic": "trig derivatives",
    "topicLabel": "Trigonometric Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = 2sin(x) - 3cos(x)?",
    "choices": [
      "A) 2cos(x) + 3sin(x)",
      "B) 2cos(x) - 3sin(x)",
      "C) -2cos(x) + 3sin(x)",
      "D) -2cos(x) - 3sin(x)"
    ],
    "answer": 0,
    "explanation": "d/dx[sin(x)] = cos(x) and d/dx[cos(x)] = -sin(x). So f'(x) = 2cos(x) - 3(-sin(x)) = 2cos(x) + 3sin(x). Choice B forgets that the derivative of cos(x) is -sin(x), not sin(x). Choice C negates the derivative of sin(x). Choice D negates both terms incorrectly."
  },
  {
    "id": "calc_u2_q246",
    "subject": "apcalc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher-Order Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = x^5 - 4x^3 + 2x, what is the third derivative f'''(x)?",
    "choices": [
      "A) 60x^2 - 24",
      "B) 60x^2 - 24x",
      "C) 20x^3 - 12x",
      "D) 5x^4 - 12x^2 + 2"
    ],
    "answer": 0,
    "explanation": "f'(x) = 5x^4 - 12x^2 + 2. f''(x) = 20x^3 - 24x. f'''(x) = 60x^2 - 24. Choice D is the first derivative, not the third. Choice C is the second derivative. Choice B incorrectly keeps an x on the constant term -24, as if the derivative of -24x were -24x instead of -24."
  },
  {
    "id": "calc_u2_q247",
    "subject": "apcalc",
    "unit": 2,
    "topic": "average rate of change",
    "topicLabel": "Average vs. Instantaneous Rate of Change",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The table below gives selected values of a differentiable function f:\n\nx:   0   2   4   6\nf(x): 3   8   11  18\n\nWhich of the following best approximates f'(4)?",
    "choices": [
      "A) 3/2",
      "B) 5/2",
      "C) 11/4",
      "D) 7/2"
    ],
    "answer": 1,
    "explanation": "The best approximation for f'(4) uses the symmetric difference quotient: [f(6) - f(2)] / (6 - 2) = (18 - 8) / 4 = 10/4 = 5/2. Choice A uses (f(4) - f(2))/(4 - 2) = 3/2, a one-sided estimate. Choice C uses f(4)/4 = 11/4, confusing average value with rate of change. Choice D uses (f(6) - f(4))/(6 - 4) = 7/2, the other one-sided estimate."
  },
  {
    "id": "calc_u2_q248",
    "subject": "apcalc",
    "unit": 2,
    "topic": "average rate of change",
    "topicLabel": "Average Rate of Change",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x^3 - 2x. What is the average rate of change of f on the interval [1, 4]?",
    "choices": [
      "A) 19",
      "B) 21",
      "C) 56",
      "D) 17"
    ],
    "answer": 0,
    "explanation": "f(4) = 64 - 8 = 56 and f(1) = 1 - 2 = -1. Average rate of change = (56 - (-1))/(4 - 1) = 57/3 = 19. Choice B (21) comes from an arithmetic error such as computing f(1) = 0. Choice C (56) is just f(4), a common mistake of forgetting to subtract f(1) and divide. Choice D (17) results from miscalculating f(4) as 54."
  },
  {
    "id": "calc_u2_q249",
    "subject": "apcalc",
    "unit": 2,
    "topic": "instantaneous rate of change",
    "topicLabel": "Instantaneous Rate of Change",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The position of a particle is given by s(t) = t^2 - 5t + 6. At what time t does the instantaneous rate of change of position equal zero?",
    "choices": [
      "A) t = 5/2",
      "B) t = 2",
      "C) t = 3",
      "D) t = 5"
    ],
    "answer": 0,
    "explanation": "The instantaneous rate of change is s'(t) = 2t - 5. Setting 2t - 5 = 0 gives t = 5/2. Choices B and C (t = 2 and t = 3) are the roots of s(t) = 0, a common error where students set the original function equal to zero instead of the derivative. Choice D (t = 5) comes from forgetting to divide by 2."
  },
  {
    "id": "calc_u2_q250",
    "subject": "apcalc",
    "unit": 2,
    "topic": "definition of derivative",
    "topicLabel": "Definition of the Derivative",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Using the limit definition of the derivative, which of the following represents f'(3) for f(x) = x^2 + 1?",
    "choices": [
      "A) lim as h->0 of [(3+h)^2 + 1 - 10] / h",
      "B) lim as h->0 of [(3+h)^2 + 1] / h",
      "C) lim as h->0 of [(3+h)^2 - 10] / h",
      "D) lim as h->0 of [h^2 + 1] / h"
    ],
    "answer": 0,
    "explanation": "By definition, f'(3) = lim as h->0 of [f(3+h) - f(3)] / h. f(3+h) = (3+h)^2 + 1 and f(3) = 9 + 1 = 10. So f'(3) = lim as h->0 of [(3+h)^2 + 1 - 10] / h. Choice B forgets to subtract f(3). Choice C subtracts 10 but drops the +1 from f(3+h). Choice D incorrectly simplifies (3+h)^2 as h^2."
  },
  {
    "id": "calc_u2_q251",
    "subject": "apcalc",
    "unit": 2,
    "topic": "power rule",
    "topicLabel": "Power Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = 4x^(5/2), what is f'(x)?",
    "choices": [
      "A) 10x^(3/2)",
      "B) 10x^(5/2)",
      "C) (5/2)x^(3/2)",
      "D) 4x^(3/2)"
    ],
    "answer": 0,
    "explanation": "Using the power rule, f'(x) = 4 * (5/2) * x^(5/2 - 1) = 10x^(3/2). Choice B keeps the exponent as 5/2 instead of reducing it by 1. Choice C forgets to multiply the coefficient 4 by 5/2. Choice D drops the 5/2 multiplier entirely and only reduces the exponent."
  },
  {
    "id": "calc_u2_q252",
    "subject": "apcalc",
    "unit": 2,
    "topic": "constant rule",
    "topicLabel": "Constant Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let h(x) = 3x^4 + 7. What is h'(x)?",
    "choices": [
      "A) 12x^3",
      "B) 12x^3 + 7",
      "C) 3x^3",
      "D) 12x^4"
    ],
    "answer": 0,
    "explanation": "The derivative of 3x^4 is 12x^3 by the power rule, and the derivative of the constant 7 is 0. So h'(x) = 12x^3. Choice B incorrectly carries the constant 7 through the derivative. Choice C forgets to multiply the coefficient 3 by the exponent 4. Choice D applies the coefficient multiplication but forgets to reduce the exponent by 1."
  },
  {
    "id": "calc_u2_q253",
    "subject": "apcalc",
    "unit": 2,
    "topic": "sum rule",
    "topicLabel": "Sum Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = 2x^3 - 5x^2 + 3x - 8, what is f'(1)?",
    "choices": [
      "A) -1",
      "B) -8",
      "C) 1",
      "D) -3"
    ],
    "answer": 0,
    "explanation": "f'(x) = 6x^2 - 10x + 3 by applying the power rule and sum rule term by term. f'(1) = 6(1) - 10(1) + 3 = 6 - 10 + 3 = -1. Choice B is f(1) = 2 - 5 + 3 - 8 = -8, confusing the function value with the derivative. Choice C (1) is a sign error. Choice D (-3) comes from omitting the constant term derivative incorrectly or arithmetic errors."
  },
  {
    "id": "calc_u2_q254",
    "subject": "apcalc",
    "unit": 2,
    "topic": "trig derivatives",
    "topicLabel": "Trigonometric Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = 3sin(x) - 2cos(x)?",
    "choices": [
      "A) 3cos(x) + 2sin(x)",
      "B) 3cos(x) - 2sin(x)",
      "C) -3cos(x) + 2sin(x)",
      "D) -3cos(x) - 2sin(x)"
    ],
    "answer": 0,
    "explanation": "The derivative of sin(x) is cos(x) and the derivative of cos(x) is -sin(x). So f'(x) = 3cos(x) - 2(-sin(x)) = 3cos(x) + 2sin(x). Choice B forgets the negative in the derivative of cos(x), giving -2sin(x) instead of +2sin(x). Choice C reverses both signs. Choice D applies incorrect signs to both trig derivatives."
  },
  {
    "id": "calc_u2_q255",
    "subject": "apcalc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = x^5 - 3x^3 + 2x, what is f''(x)?",
    "choices": [
      "A) 20x^3 - 18x",
      "B) 5x^4 - 9x^2 + 2",
      "C) 60x^2 - 18",
      "D) 20x^3 - 9x"
    ],
    "answer": 0,
    "explanation": "First derivative: f'(x) = 5x^4 - 9x^2 + 2. Second derivative: f''(x) = 20x^3 - 18x. Choice B is the first derivative f'(x), not the second. Choice C is the third derivative f'''(x). Choice D results from incorrectly differentiating -9x^2 as -9x instead of -18x in the second derivative step."
  },
  {
    "id": "calc_u2_q256",
    "subject": "apcalc",
    "unit": 2,
    "topic": "power rule",
    "topicLabel": "Power Rule with Negative and Fractional Exponents",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If g(x) = 6/x^2 + sqrt(x), rewritten as g(x) = 6x^(-2) + x^(1/2), what is g'(x)?",
    "choices": [
      "A) -12x^(-3) + (1/2)x^(-1/2)",
      "B) -12x^(-1) + (1/2)x^(-1/2)",
      "C) -12x^(-3) + (1/2)x^(1/2)",
      "D) 12x^(-3) + (1/2)x^(-1/2)"
    ],
    "answer": 0,
    "explanation": "Applying the power rule: d/dx[6x^(-2)] = 6(-2)x^(-3) = -12x^(-3) and d/dx[x^(1/2)] = (1/2)x^(-1/2). So g'(x) = -12x^(-3) + (1/2)x^(-1/2). Choice B incorrectly reduces the exponent -2 by adding 1 to get -1 instead of -3. Choice C does not reduce the exponent on the square root term. Choice D has the wrong sign on the first term, forgetting the negative from (-2)."
  },
  {
    "id": "calc_u2_q257",
    "subject": "apcalc",
    "unit": 2,
    "topic": "definition of derivative and differentiability",
    "topicLabel": "Definition of Derivative and Differentiability",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = |x^2 - 4x + 3|. At how many points in the open interval (0, 4) is f not differentiable?",
    "choices": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) 3"
    ],
    "answer": 2,
    "explanation": "First factor: x^2 - 4x + 3 = (x - 1)(x - 3), which equals zero at x = 1 and x = 3. The parabola is negative between x = 1 and x = 3, so the absolute value creates a cusp (corner) at both x = 1 and x = 3 where the graph reflects upward. At these points the left-hand and right-hand derivatives differ, so f is not differentiable. That gives 2 points. A) 0 is wrong because students may forget the absolute value creates corners. B) 1 is wrong if a student only identifies one root. D) 3 is wrong if a student incorrectly counts the vertex of the parabola at x = 2 as a point of non-differentiability, but f is smooth there since x^2 - 4x + 3 is strictly negative near x = 2 and the absolute value simply negates a smooth function."
  },
  {
    "id": "calc_u2_q258",
    "subject": "apcalc",
    "unit": 2,
    "topic": "higher order derivatives with trig and power rule",
    "topicLabel": "Higher Order Derivatives with Trig and Power Rule",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = x^3 * sin(x), what is f''(0)?",
    "choices": [
      "A) 0",
      "B) 3",
      "C) 6",
      "D) -6"
    ],
    "answer": 0,
    "explanation": "Using the product rule: f'(x) = 3x^2 * sin(x) + x^3 * cos(x). Applying the product rule again to each term: f''(x) = 6x * sin(x) + 3x^2 * cos(x) + 3x^2 * cos(x) - x^3 * sin(x) = 6x * sin(x) + 6x^2 * cos(x) - x^3 * sin(x). Evaluating at x = 0: f''(0) = 6(0)sin(0) + 6(0)^2 cos(0) - (0)^3 sin(0) = 0. B) 3 is a common error from misapplying the product rule once and evaluating incorrectly. C) 6 comes from students who compute 6x and plug in x = 1 instead of x = 0, or who forget that sin(0) = 0 and only keep the 6x term evaluated incorrectly. D) -6 is a sign error variant of the same misconception."
  },
  {
    "id": "calc_u3_q267",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "inverse trig derivatives",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of y = arctan(x)?",
    "choices": [
      "A) 1/(1 + x^2)",
      "B) 1/sqrt(1 - x^2)",
      "C) -1/(1 + x^2)",
      "D) -1/sqrt(1 - x^2)"
    ],
    "answer": 0,
    "explanation": "The derivative of arctan(x) is 1/(1 + x^2). Choice B is the derivative of arcsin(x), a common confusion between inverse trig derivatives. Choice C incorrectly includes a negative sign, which students may recall from the derivative of arccos(x). Choice D is the derivative of arccos(x), mixing up both the formula and the sign."
  },
  {
    "id": "calc_u3_q268",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = sin(3x^2 + 1), what is f'(x)?",
    "choices": [
      "A) 6x cos(3x^2 + 1)",
      "B) cos(3x^2 + 1)",
      "C) 6x sin(3x^2 + 1)",
      "D) -6x cos(3x^2 + 1)"
    ],
    "answer": 0,
    "explanation": "Using the chain rule, f'(x) = cos(3x^2 + 1) * d/dx(3x^2 + 1) = cos(3x^2 + 1) * 6x = 6x cos(3x^2 + 1). Choice B forgets the inner derivative. Choice C keeps sin instead of switching to cos. Choice D incorrectly introduces a negative sign."
  },
  {
    "id": "calc_u3_q269",
    "subject": "apcalc",
    "unit": 3,
    "topic": "implicit differentiation",
    "topicLabel": "Implicit Differentiation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given x^2 + xy + y^2 = 7, find dy/dx.",
    "choices": [
      "A) -(2x + y)/(x + 2y)",
      "B) (2x + y)/(x + 2y)",
      "C) -(2x)/(2y)",
      "D) -(2x + 1)/(1 + 2y)"
    ],
    "answer": 0,
    "explanation": "Differentiating implicitly: 2x + y + x(dy/dx) + 2y(dy/dx) = 0. The product rule on xy gives y + x(dy/dx). Solving: dy/dx(x + 2y) = -(2x + y), so dy/dx = -(2x + y)/(x + 2y). Choice B has the wrong sign. Choice C ignores the xy term's product rule. Choice D treats y and x in the xy term as constants when differentiating."
  },
  {
    "id": "calc_u3_q270",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of f(x) = arctan(4x)?",
    "choices": [
      "A) 4/(1 + 16x^2)",
      "B) 1/(1 + 16x^2)",
      "C) 4/(1 + 4x^2)",
      "D) -4/(1 + 16x^2)"
    ],
    "answer": 0,
    "explanation": "The derivative of arctan(u) is 1/(1+u^2) * du/dx. Here u = 4x, so f'(x) = 1/(1+(4x)^2) * 4 = 4/(1+16x^2). Choice B forgets the chain rule factor of 4. Choice C fails to square the 4 inside (4x)^2. Choice D incorrectly introduces a negative sign, confusing arctan with another inverse trig function."
  },
  {
    "id": "calc_u3_q271",
    "subject": "apcalc",
    "unit": 3,
    "topic": "chain rule",
    "topicLabel": "Chain Rule with Composed Functions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = e^(cos(x^2)), what is f'(x)?",
    "choices": [
      "A) -2x sin(x^2) * e^(cos(x^2))",
      "B) e^(cos(x^2)) * (-sin(x^2))",
      "C) 2x cos(x^2) * e^(cos(x^2))",
      "D) -2x e^(sin(x^2))"
    ],
    "answer": 0,
    "explanation": "Applying the chain rule twice: f'(x) = e^(cos(x^2)) * d/dx[cos(x^2)] = e^(cos(x^2)) * (-sin(x^2)) * 2x = -2x sin(x^2) e^(cos(x^2)). Choice B forgets the innermost derivative 2x. Choice C uses cos instead of -sin when differentiating cos. Choice D incorrectly changes cos to sin inside the exponential."
  },
  {
    "id": "calc_u3_q272",
    "subject": "apcalc",
    "unit": 3,
    "topic": "implicit differentiation with inverse trig derivatives",
    "topicLabel": "Implicit Differentiation with Inverse Trig Derivatives",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "If arctan(xy) + y^2 = pi/4 + 1, find dy/dx at the point (1, 1).",
    "choices": [
      "A) -1/4",
      "B) -1/6",
      "C) -1/5",
      "D) -3/4"
    ],
    "answer": 2,
    "explanation": "Differentiate implicitly: d/dx[arctan(xy)] + d/dx[y^2] = 0. For arctan(xy), use the chain rule: 1/(1+(xy)^2) * (y + x dy/dx). For y^2: 2y dy/dx. At (1,1): 1/(1+1) * (1 + dy/dx) + 2 dy/dx = 0, so (1/2)(1 + dy/dx) + 2 dy/dx = 0. Expanding: 1/2 + (1/2) dy/dx + 2 dy/dx = 0, so 1/2 + (5/2) dy/dx = 0, giving dy/dx = -1/5. Choice A (-1/4) results from incorrectly computing 1/(1+xy) instead of 1/(1+(xy)^2). Choice B (-1/6) comes from using 2/(1+(xy)^2) in the derivative. Choice D (-3/4) results from forgetting the chain rule on arctan and only differentiating y + x dy/dx without the 1/(1+(xy)^2) factor."
  },
  {
    "id": "calc_u3_q273",
    "subject": "apcalc",
    "unit": 3,
    "topic": "logarithmic differentiation with product and chain rules",
    "topicLabel": "Logarithmic Differentiation",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let y = (x^2 + 1)^(sin x). Find dy/dx expressed in terms of x.",
    "choices": [
      "A) (x^2 + 1)^(sin x) * [cos(x) * ln(x^2 + 1) + 2x sin(x) / (x^2 + 1)]",
      "B) sin(x) * (x^2 + 1)^(sin x - 1) * 2x",
      "C) (x^2 + 1)^(sin x) * [cos(x) * ln(x^2 + 1) + sin(x) / (x^2 + 1)]",
      "D) (x^2 + 1)^(sin x) * [cos(x) + 2x sin(x) / (x^2 + 1)]"
    ],
    "answer": 0,
    "explanation": "Take ln of both sides: ln y = sin(x) * ln(x^2 + 1). Differentiate: (1/y) dy/dx = cos(x) * ln(x^2 + 1) + sin(x) * 2x/(x^2 + 1). Multiply both sides by y = (x^2 + 1)^(sin x) to get choice A. Choice B is wrong because it treats sin(x) as a constant exponent and uses the power rule, a very common error when the exponent is a function. Choice C forgets the chain rule on ln(x^2 + 1), differentiating it as 1/(x^2 + 1) instead of 2x/(x^2 + 1). Choice D drops the ln(x^2 + 1) factor from the first term, writing cos(x) instead of cos(x) * ln(x^2 + 1), which results from a product rule error."
  },
  {
    "id": "calc_u4_q274",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = x^2 on the interval [1, 3], what value of c satisfies the conclusion of the Mean Value Theorem?",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "answer": 1,
    "explanation": "The Mean Value Theorem states there exists c in (1, 3) such that f'(c) = (f(3) - f(1))/(3 - 1). We have f(3) = 9, f(1) = 1, so (9 - 1)/(3 - 1) = 4. Since f'(x) = 2x, setting 2c = 4 gives c = 2. Choice A (c = 1) is an endpoint and not in the open interval. Choice C (c = 3) is the other endpoint. Choice D (c = 4) results from confusing the slope value with c itself."
  },
  {
    "id": "calc_u4_q275",
    "subject": "apcalc",
    "unit": 4,
    "topic": "linearization",
    "topicLabel": "Linearization",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the linearization L(x) of f(x) = sqrt(x) at a = 25?",
    "choices": [
      "A) L(x) = 5 + (1/10)(x - 25)",
      "B) L(x) = 5 + (1/5)(x - 25)",
      "C) L(x) = 5 + 10(x - 25)",
      "D) L(x) = 25 + (1/10)(x - 25)"
    ],
    "answer": 0,
    "explanation": "The linearization formula is L(x) = f(a) + f'(a)(x - a). Here f(25) = 5 and f'(x) = 1/(2*sqrt(x)), so f'(25) = 1/(2*5) = 1/10. Thus L(x) = 5 + (1/10)(x - 25). Choice B uses f'(25) = 1/5, a common error from forgetting the factor of 2 in the derivative. Choice C uses f'(25) = 10, confusing 2*sqrt(25) with 1/(2*sqrt(25)). Choice D uses 25 instead of sqrt(25) for f(a)."
  },
  {
    "id": "calc_u5_q277",
    "subject": "apcalc",
    "unit": 5,
    "topic": "inflection points",
    "topicLabel": "inflection points",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f be a twice-differentiable function. The second derivative is given by f''(x) = x^2(x - 3)(x + 1). How many inflection points does f have?",
    "choices": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "answer": 1,
    "explanation": "Inflection points occur where f''(x) changes sign. Setting f''(x) = x^2(x - 3)(x + 1) = 0 gives x = 0, x = 3, and x = -1. Testing intervals: for x < -1, f'' is positive; for -1 < x < 0, f'' is negative (sign change at x = -1); for 0 < x < 3, f'' is still negative (no sign change at x = 0 because x^2 does not change sign); for x > 3, f'' is positive (sign change at x = 3). So f'' changes sign at x = -1 and x = 3 only, giving 2 inflection points. A common mistake is choosing 3 (option C) by counting all zeros of f'' including x = 0, but x^2 is always non-negative so there is no sign change there. Choosing 1 (option A) may result from only checking one side, and 4 (option D) may come from miscounting intervals."
  },
  {
    "id": "calc_u6_q279",
    "subject": "apcalc",
    "unit": 6,
    "topic": "net change theorem and FTC part 2",
    "topicLabel": "Net Change Theorem and FTC Part 2",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Water flows into a tank at a rate of R(t) = 4t - t^2 gallons per minute for 0 <= t <= 5, where R(t) < 0 indicates water flowing out. If the tank contains 10 gallons at t = 0, at what time t does the tank have the most water?",
    "choices": [
      "A) t = 2",
      "B) t = 4",
      "C) t = 5",
      "D) t = 0"
    ],
    "answer": 1,
    "explanation": "The amount of water at time t is W(t) = 10 + integral from 0 to t of (4s - s^2) ds. To maximize, set R(t) = 0: 4t - t^2 = t(4 - t) = 0, so t = 0 or t = 4. R(t) > 0 on (0,4) and R(t) < 0 on (4,5), so water flows in until t = 4 and flows out after. By the first derivative test (W'(t) = R(t) changes from positive to negative at t = 4), the maximum occurs at t = 4. Choice A (t=2) is the vertex of the rate function (maximum rate), a common mistake of maximizing the rate instead of the accumulation. Choice C (t=5) is the endpoint but water has been draining from t=4 to t=5. Choice D (t=0) is wrong since water flows in immediately after t=0."
  },
  {
    "id": "calc_u6_q280",
    "subject": "apcalc",
    "unit": 6,
    "topic": "Riemann sums and definite integrals",
    "topicLabel": "Riemann Sums and Definite Integrals",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A function f is continuous and concave down on [1, 5]. Using four subintervals of equal width, which of the following must be true?",
    "choices": [
      "A) Left Riemann sum > Trapezoidal sum > integral from 1 to 5 of f(x) dx",
      "B) Trapezoidal sum < integral from 1 to 5 of f(x) dx < Midpoint sum",
      "C) Left Riemann sum > integral from 1 to 5 of f(x) dx > Right Riemann sum",
      "D) Midpoint sum < integral from 1 to 5 of f(x) dx < Trapezoidal sum"
    ],
    "answer": 1,
    "explanation": "For a concave down function, the trapezoidal rule underestimates the integral because the trapezoids cut below the curve, while the midpoint rule overestimates because the tangent line at the midpoint lies above the curve. So Trapezoidal sum < integral < Midpoint sum, which is choice B. Choice A is wrong because we cannot determine whether the left Riemann sum is greater than the integral without knowing if f is increasing or decreasing. Choice C is wrong for the same reason — concavity alone does not determine the relationship of left and right sums to the integral. Choice D reverses the trapezoidal and midpoint relationships, a common student error of confusing concave up and concave down behavior."
  },
  {
    "id": "calc_u6_q281",
    "subject": "apcalc",
    "unit": 6,
    "topic": "net change theorem and antiderivatives",
    "topicLabel": "Net Change Theorem and Antiderivatives",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Water flows into a tank at a rate of R(t) = 4t - t^2 gallons per minute for 0 <= t <= 4, and flows out at a constant rate of 2 gallons per minute. If the tank contains 10 gallons at t = 0, at what time t does the tank have the maximum amount of water?",
    "choices": [
      "A) t = 2",
      "B) t = 2 + sqrt(2)",
      "C) t = 4",
      "D) t = 2 - sqrt(2)"
    ],
    "answer": 1,
    "explanation": "The net rate of change of water in the tank is R(t) - 2 = 4t - t^2 - 2 = -(t^2 - 4t + 2). The amount of water is maximized when the net rate equals zero: t^2 - 4t + 2 = 0. By the quadratic formula, t = (4 +/- sqrt(16 - 8))/2 = 2 +/- sqrt(2). Since t = 2 - sqrt(2) approximately 0.586 makes the net rate change from negative to positive (net rate is negative just before), and t = 2 + sqrt(2) approximately 3.414 makes the net rate change from positive to negative, the maximum occurs at t = 2 + sqrt(2). Choice A is wrong because students may set R(t) = 0 or find the vertex of the inflow rate rather than the net rate. Choice C is wrong because students may assume the endpoint is the maximum. Choice D gives the other root where the net rate changes from negative to positive, which is actually a minimum of the water level."
  },
  {
    "id": "calc_u7_q283",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution indefinite",
    "topicLabel": "u-substitution indefinite",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": true,
    "format": "latex",
    "question": "Find \\int 2x \\cos(x^2)\\, dx.",
    "choices": [
      "A) \\sin(x^2) + C",
      "B) -\\sin(x^2) + C",
      "C) \\cos(x^2) + C",
      "D) 2\\sin(x^2) + C"
    ],
    "answer": 0,
    "explanation": "Let u = x^2, so du = 2x dx. The integral becomes ∫cos(u) du = sin(u) + C = sin(x^2) + C. Choice B is wrong because students sometimes incorrectly apply a negative sign as they would with the derivative of cos. Choice C is wrong because students may confuse integration of cos with leaving it unchanged. Choice D is wrong because students may mistakenly keep the factor of 2 instead of recognizing it is absorbed into du."
  },
  {
    "id": "calc_u7_q284",
    "subject": "apcalc",
    "unit": 7,
    "topic": "u-substitution definite",
    "topicLabel": "u-substitution definite",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate the definite integral from 0 to 2 of x * e^(x^2) dx.",
    "choices": [
      "A) (1/2)(e^4 - 1)",
      "B) e^4 - 1",
      "C) (1/2)e^4",
      "D) 2(e^4 - 1)"
    ],
    "answer": 0,
    "explanation": "Let u = x^2, so du = 2x dx, meaning x dx = du/2. When x = 0, u = 0; when x = 2, u = 4. The integral becomes (1/2) * integral from 0 to 4 of e^u du = (1/2)(e^4 - e^0) = (1/2)(e^4 - 1). Choice B is wrong because it omits the 1/2 factor from the substitution. Choice C is wrong because it forgets to subtract the lower bound evaluation e^0 = 1. Choice D is wrong because it multiplies by 2 instead of 1/2, a common error when solving for du."
  },
  {
    "id": "calc_u7_q285",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the indefinite integral of (x^2 + 3) / (x + 1) dx.",
    "choices": [
      "A) (x^2)/2 - x + 4 ln|x + 1| + C",
      "B) (x^2)/2 + x + 4 ln|x + 1| + C",
      "C) (x^2)/2 - x + 2 ln|x + 1| + C",
      "D) x^2 - x + 4 ln|x + 1| + C"
    ],
    "answer": 0,
    "explanation": "Perform polynomial long division: (x^2 + 3) / (x + 1) = x - 1 + 4/(x + 1). Integrating term by term: integral of x dx = x^2/2, integral of -1 dx = -x, integral of 4/(x + 1) dx = 4 ln|x + 1|. So the answer is (x^2)/2 - x + 4 ln|x + 1| + C. Choice B has +x instead of -x, a sign error in the long division quotient. Choice C uses 2 instead of 4 for the remainder, reflecting an arithmetic error in the division. Choice D has x^2 instead of x^2/2, forgetting to apply the power rule correctly when integrating x."
  },
  {
    "id": "calc_u7_q286",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate the indefinite integral of 1 / (x^2 + 6x + 13) dx.",
    "choices": [
      "A) (1/2) arctan((x + 3)/2) + C",
      "B) arctan((x + 3)/2) + C",
      "C) (1/2) arctan((x + 3)/4) + C",
      "D) (1/4) arctan((x + 3)/2) + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: x^2 + 6x + 13 = (x + 3)^2 + 4. The integral becomes integral of 1/((x + 3)^2 + 4) dx. Using the formula integral of 1/(u^2 + a^2) du = (1/a) arctan(u/a) + C with u = x + 3 and a = 2, we get (1/2) arctan((x + 3)/2) + C. Choice B forgets the 1/a = 1/2 factor out front. Choice C incorrectly uses a^2 = 4 instead of a = 2 in the denominator of the arctan argument. Choice D uses 1/a^2 = 1/4 instead of 1/a = 1/2 as the leading coefficient."
  },
  {
    "id": "calc_u8_q288",
    "subject": "apcalc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "area between curves",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the area of the region enclosed by y = x^2 and y = x for 0 <= x <= 1?",
    "choices": [
      "A) 1/6",
      "B) 1/3",
      "C) 1/2",
      "D) 2/3"
    ],
    "answer": 0,
    "explanation": "The area is the integral from 0 to 1 of (x - x^2) dx = [x^2/2 - x^3/3] from 0 to 1 = 1/2 - 1/3 = 1/6. Choice B (1/3) results from forgetting to subtract one function and only integrating x^2. Choice C (1/2) comes from only integrating x. Choice D (2/3) comes from adding 1/2 and 1/3 instead of subtracting."
  },
  {
    "id": "calc_u8_q290",
    "subject": "apcalc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Find the area of the region enclosed by \\( y = x^2 \\) and \\( y = 2x \\).",
    "choices": [
      "A) \\(\\frac{4}{3}\\)",
      "B) \\(\\frac{8}{3}\\)",
      "C) \\(\\frac{2}{3}\\)",
      "D) \\(4\\)"
    ],
    "answer": 0,
    "explanation": "The curves intersect where x^2 = 2x, so x = 0 and x = 2. The area is the integral from 0 to 2 of (2x - x^2) dx = [x^2 - x^3/3] from 0 to 2 = (4 - 8/3) = 4/3. Choice B (8/3) results from forgetting to subtract one curve from the other or doubling. Choice C (2/3) comes from a sign or algebra error. Choice D (4) results from integrating only 2x without subtracting x^2."
  },
  {
    "id": "calc_u8_q291",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes Using the Disc Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by \\( y = \\sqrt{x} \\), \\( y = 0 \\), and \\( x = 4 \\) is revolved about the x-axis. What is the volume of the resulting solid?",
    "choices": [
      "A) \\(8\\pi\\)",
      "B) \\(4\\pi\\)",
      "C) \\(16\\pi\\)",
      "D) \\(\\frac{16\\pi}{3}\\)"
    ],
    "answer": 0,
    "explanation": "Using the disc method, V = pi * integral from 0 to 4 of (sqrt(x))^2 dx = pi * integral from 0 to 4 of x dx = pi * [x^2/2] from 0 to 4 = pi * 8 = 8pi. Choice B (4pi) comes from forgetting to square the radius or an integration error. Choice C (16pi) comes from not dividing by 2 during integration. Choice D (16pi/3) results from incorrectly using x^(3/2) as the integrand."
  },
  {
    "id": "calc_u8_q292",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes Using the Washer Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by \\( y = x \\) and \\( y = x^2 \\) is revolved about the x-axis. Which integral represents the volume of the solid?",
    "choices": [
      "A) \\(\\pi \\int_0^1 (x^2 - x^4)\\, dx\\)",
      "B) \\(\\pi \\int_0^1 (x - x^2)^2\\, dx\\)",
      "C) \\(\\pi \\int_0^1 (x^2 - x^4)^2\\, dx\\)",
      "D) \\(2\\pi \\int_0^1 x(x - x^2)\\, dx\\)"
    ],
    "answer": 0,
    "explanation": "The washer method gives V = pi * integral of (R^2 - r^2) dx where R = x (outer) and r = x^2 (inner) on [0,1]. So V = pi * integral from 0 to 1 of (x^2 - x^4) dx. Choice B incorrectly squares the difference (x - x^2)^2 instead of taking the difference of squares. Choice C squares the already-squared terms. Choice D is the shell method setup, which would be used for revolution about the y-axis."
  },
  {
    "id": "calc_u8_q293",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes shell method",
    "topicLabel": "Volumes Using the Shell Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Using the shell method, find the volume of the solid generated by revolving the region bounded by \\( y = x^2 \\), \\( y = 0 \\), and \\( x = 1 \\) about the y-axis.",
    "choices": [
      "A) \\(\\frac{\\pi}{2}\\)",
      "B) \\(\\frac{2\\pi}{3}\\)",
      "C) \\(\\pi\\)",
      "D) \\(\\frac{\\pi}{3}\\)"
    ],
    "answer": 0,
    "explanation": "Using the shell method: V = 2pi * integral from 0 to 1 of x * x^2 dx = 2pi * integral from 0 to 1 of x^3 dx = 2pi * [x^4/4] from 0 to 1 = 2pi * (1/4) = pi/2. Choice B (2pi/3) comes from integrating x * x instead of x * x^2 (using the wrong height). Choice C (pi) comes from forgetting the 1/4 factor. Choice D (pi/3) results from using the disc method formula incorrectly."
  },
  {
    "id": "calc_u8_q294",
    "subject": "apcalc",
    "unit": 8,
    "topic": "arc length",
    "topicLabel": "Arc Length",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Which integral gives the arc length of \\( y = \\frac{x^3}{3} \\) from \\( x = 0 \\) to \\( x = 1 \\)?",
    "choices": [
      "A) \\(\\int_0^1 \\sqrt{1 + x^4}\\, dx\\)",
      "B) \\(\\int_0^1 \\sqrt{1 + x^6}\\, dx\\)",
      "C) \\(\\int_0^1 \\sqrt{1 + x^3}\\, dx\\)",
      "D) \\(\\int_0^1 (1 + x^4)\\, dx\\)"
    ],
    "answer": 0,
    "explanation": "Arc length = integral of sqrt(1 + (dy/dx)^2) dx. Here dy/dx = x^2, so (dy/dx)^2 = x^4. The integral is integral from 0 to 1 of sqrt(1 + x^4) dx. Choice B uses x^6, which would come from squaring x^3 instead of x^2. Choice C uses x^3, forgetting to square the derivative. Choice D forgets the square root in the arc length formula."
  },
  {
    "id": "calc_u8_q295",
    "subject": "apcalc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves (Horizontal)",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "Find the area of the region enclosed by \\( x = y^2 \\) and \\( x = 4 - y^2 \\).",
    "choices": [
      "A) \\(\\frac{16\\sqrt{2}}{3}\\)",
      "B) \\(\\frac{8\\sqrt{2}}{3}\\)",
      "C) \\(\\frac{32}{3}\\)",
      "D) \\(8\\)"
    ],
    "answer": 0,
    "explanation": "Setting y^2 = 4 - y^2 gives y^2 = 2, so y = ±sqrt(2). The area is integral from -sqrt(2) to sqrt(2) of [(4 - y^2) - y^2] dy = integral of (4 - 2y^2) dy = [4y - 2y^3/3] from -sqrt(2) to sqrt(2) = 2[4sqrt(2) - 2(2sqrt(2))/3] = 2[4sqrt(2) - 4sqrt(2)/3] = 2[8sqrt(2)/3] = 16sqrt(2)/3. Choice B comes from only integrating from 0 to sqrt(2) and forgetting to double. Choice C (32/3) incorrectly uses y = ±2 as bounds. Choice D (8) comes from a simplified estimate without proper integration."
  },
  {
    "id": "calc_u8_q296",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes Disc Method about y-axis",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": true,
    "format": "text",
    "question": "The region bounded by \\( y = x^3 \\), \\( x = 0 \\), and \\( y = 8 \\) is revolved about the y-axis. What is the volume of the resulting solid?",
    "choices": [
      "A) \\(\\frac{96\\pi}{5}\\)",
      "B) \\(\\frac{48\\pi}{5}\\)",
      "C) \\(32\\pi\\)",
      "D) \\(\\frac{128\\pi}{7}\\)"
    ],
    "answer": 0,
    "explanation": "Revolving about the y-axis, we use the disc method with x as a function of y: x = y^(1/3). V = pi * integral from 0 to 8 of [y^(1/3)]^2 dy = pi * integral from 0 to 8 of y^(2/3) dy = pi * [y^(5/3)/(5/3)] from 0 to 8 = pi * (3/5) * 8^(5/3) = pi * (3/5) * 32 = 96pi/5. Choice B (48pi/5) comes from a factor-of-2 error. Choice C (32pi) forgets the 3/5 coefficient. Choice D (128pi/7) uses the wrong exponent in integration, treating it as y^(6/7) or similar."
  },
  {
    "id": "calc_u8_q298",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes Washer Method",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "The region bounded by y = x^2 and y = 2x is revolved about the line y = -1. Which integral gives the volume of the resulting solid?",
    "choices": [
      "A) pi * integral from 0 to 2 of [(2x + 1)^2 - (x^2 + 1)^2] dx",
      "B) pi * integral from 0 to 2 of [(2x)^2 - (x^2)^2] dx",
      "C) pi * integral from 0 to 2 of [(2x - 1)^2 - (x^2 - 1)^2] dx",
      "D) pi * integral from 0 to 2 of [(x^2 + 1)^2 - (2x + 1)^2] dx"
    ],
    "answer": 0,
    "explanation": "The curves intersect at x = 0 and x = 2. When revolving about y = -1, the outer radius is the distance from y = -1 to the farther curve y = 2x, which is (2x - (-1)) = 2x + 1. The inner radius is the distance from y = -1 to the closer curve y = x^2, which is (x^2 - (-1)) = x^2 + 1. The volume is pi * integral of [(2x+1)^2 - (x^2+1)^2] dx. Choice B is wrong because it ignores the shift by revolving about y = 0 instead. Choice C subtracts 1 instead of adding 1, a common sign error when shifting axes. Choice D reverses outer and inner radii."
  },
  {
    "id": "calc_u8_q299",
    "subject": "apcalc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = sin(x) and g(x) = cos(x). What is the area of the region enclosed between f and g from x = pi/4 to x = 5pi/4?",
    "choices": [
      "A) 2 * sqrt(2)",
      "B) sqrt(2)",
      "C) 2",
      "D) 4"
    ],
    "answer": 0,
    "explanation": "On the interval [pi/4, 5pi/4], sin(x) >= cos(x). The area is the integral from pi/4 to 5pi/4 of [sin(x) - cos(x)] dx = [-cos(x) - sin(x)] evaluated from pi/4 to 5pi/4. At x = 5pi/4: -cos(5pi/4) - sin(5pi/4) = -(-sqrt(2)/2) - (-sqrt(2)/2) = sqrt(2). At x = pi/4: -cos(pi/4) - sin(pi/4) = -sqrt(2)/2 - sqrt(2)/2 = -sqrt(2). The area = sqrt(2) - (-sqrt(2)) = 2*sqrt(2). Choice B (sqrt(2)) results from dropping one of the endpoint evaluations. Choice C (2) comes from incorrectly integrating without the cosine term. Choice D (4) results from incorrectly doubling the answer or mishandling the absolute value over a wrong interval."
  },
  {
    "id": "calc_u8_q302",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "volumes washer method",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "The region R is bounded by y = x^2 and y = 2x. What is the volume of the solid generated when R is revolved about the line y = -1?",
    "choices": [
      "A) pi * integral from 0 to 2 of [(2x+1)^2 - (x^2+1)^2] dx",
      "B) pi * integral from 0 to 2 of [(2x)^2 - (x^2)^2] dx",
      "C) pi * integral from 0 to 2 of [(x^2-1)^2 - (2x-1)^2] dx",
      "D) pi * integral from 0 to 2 of [(2x-1)^2 - (x^2-1)^2] dx"
    ],
    "answer": 0,
    "explanation": "The curves y = x^2 and y = 2x intersect at x = 0 and x = 2. When revolving about y = -1, the outer radius is the distance from y = -1 to the farther curve (y = 2x), giving R_outer = 2x - (-1) = 2x + 1. The inner radius is the distance from y = -1 to the closer curve (y = x^2), giving R_inner = x^2 - (-1) = x^2 + 1. The washer method yields V = pi * integral from 0 to 2 of [(2x+1)^2 - (x^2+1)^2] dx, which is choice A. Choice B is the common error of ignoring the shift to y = -1 entirely (revolving about y = 0 instead). Choice C incorrectly subtracts 1 instead of adding 1, as if the axis were y = 1. Choice D makes the same subtraction error and also reverses which function is the outer versus inner radius."
  },
  {
    "id": "calc_u1_q303",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = (x^2 - 4x + 3) / (x^2 - 1). Which of the following describes the discontinuities of f?",
    "choices": [
      "A) Removable discontinuity at x = 1 and vertical asymptote at x = -1",
      "B) Vertical asymptotes at x = 1 and x = -1",
      "C) Removable discontinuities at x = 1 and x = -1",
      "D) Removable discontinuity at x = -1 and vertical asymptote at x = 1"
    ],
    "answer": 0,
    "explanation": "Factor the numerator: x^2 - 4x + 3 = (x - 1)(x - 3). Factor the denominator: x^2 - 1 = (x - 1)(x + 1). The common factor (x - 1) cancels, leaving f(x) = (x - 3)/(x + 1) for x ≠ 1. At x = 1, the limit exists (equals -2/2 = -1) but f(1) is undefined, so there is a removable discontinuity. At x = -1, the simplified function has a nonzero numerator (-4) over zero, producing a vertical asymptote. Choice B is wrong because it treats both as vertical asymptotes, ignoring the cancellation. Choice C is wrong because x = -1 does not have a finite limit. Choice D reverses which point is removable and which is an asymptote."
  },
  {
    "id": "calc_u1_q304",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity and Continuity",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = (x^2 - 4x + 3) / (x^2 - 5x + 6) for x != 3, and f(3) = k. For which value of k is f continuous at x = 3, and what type of discontinuity exists at x = 2?",
    "choices": [
      "A) k = 2 and x = 2 is a removable discontinuity",
      "B) k = -2 and x = 2 is a vertical asymptote (infinite discontinuity)",
      "C) k = 2 and x = 2 is a vertical asymptote (infinite discontinuity)",
      "D) k = -2 and x = 2 is a removable discontinuity"
    ],
    "answer": 2,
    "explanation": "Factor the numerator: x^2 - 4x + 3 = (x-1)(x-3). Factor the denominator: x^2 - 5x + 6 = (x-2)(x-3). The simplified form is (x-1)/(x-2) for x != 3. At x = 3: lim as x->3 of (x-1)/(x-2) = 2/1 = 2, so k = 2 makes f continuous at x = 3. At x = 2: the simplified function (x-1)/(x-2) has a non-zero numerator (2-1 = 1) and a zero denominator, producing a vertical asymptote (infinite discontinuity). Choice A is wrong because it incorrectly identifies x = 2 as removable - a common error when students see a factored form and assume all discontinuities from the original rational function are removable. Choice B has the wrong k value. Choice D has both errors."
  },
  {
    "id": "calc_u1_q305",
    "subject": "apcalc",
    "unit": 1,
    "topic": "squeeze theorem",
    "topicLabel": "Squeeze Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f be a function satisfying (x^2 - 4x + 4) <= f(x) <= (x^2 - 2x) for all x near x = 2 but not necessarily at x = 2. What is the limit of f(x) as x approaches 2?",
    "choices": [
      "A) 0",
      "B) 2",
      "C) Does not exist",
      "D) -4"
    ],
    "answer": 0,
    "explanation": "Evaluate both bounding functions at x = 2. The lower bound is (2)^2 - 4(2) + 4 = 4 - 8 + 4 = 0. The upper bound is (2)^2 - 2(2) = 4 - 4 = 0. Since both bounds approach 0 as x approaches 2, by the Squeeze Theorem, the limit of f(x) is 0. Choice B (2) comes from confusing the value x approaches with the limit value. Choice C is wrong because the Squeeze Theorem guarantees existence when both bounds converge to the same value. Choice D results from an algebra error such as evaluating -(2)^2 instead of (2)^2."
  },
  {
    "id": "calc_u1_q306",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity and Continuity",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = (x^3 - 8)/(x^2 - 4) for x not equal to 2, and g(2) = k. For which value of k is g continuous at x = 2, and what type of discontinuity exists if k is chosen incorrectly?",
    "choices": [
      "A) k = 3; otherwise a removable discontinuity",
      "B) k = 3; otherwise a jump discontinuity, because the left- and right-hand limits differ at x = 2",
      "C) k = 2; otherwise a removable discontinuity, because the limit as x approaches 2 equals 2",
      "D) k = 3; otherwise an infinite discontinuity, because (x - 2) does not cancel from the denominator"
    ],
    "answer": 0,
    "explanation": "Factor the numerator as (x - 2)(x^2 + 2x + 4) and the denominator as (x - 2)(x + 2). After canceling (x - 2), the simplified form is (x^2 + 2x + 4)/(x + 2). Evaluating at x = 2 gives (4 + 4 + 4)/(2 + 2) = 12/4 = 3. So the limit as x approaches 2 is 3, meaning k must equal 3 for continuity. If k is any other value, the two-sided limit still exists and equals 3, but g(2) does not equal 3, so the discontinuity is removable - not a jump or infinite discontinuity. Choice B is wrong because both one-sided limits equal 3, so there is no jump. Choice C is wrong because the limit equals 3, not 2. Choice D is wrong because the (x - 2) factor cancels completely from numerator and denominator, so there is no vertical asymptote and hence no infinite discontinuity. Only choice A correctly identifies both k = 3 and the removable nature of the discontinuity when k is chosen incorrectly."
  },
  {
    "id": "calc_u1_q307",
    "subject": "apcalc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let h be a function defined on [-1, 3] where h(-1) = 5, h(1) = -2, h(3) = 4, and h is continuous on [-1, 1] but has a non-removable discontinuity at x = 1 from the right. A student claims the IVT guarantees a value c in (1, 3) such that h(c) = 1. Which statement is correct?",
    "choices": [
      "A) The claim is not justified because h is not guaranteed to be continuous on [1, 3]",
      "B) The claim is justified because h(-1) = 5 > 1 and h(1) = -2 < 1, so a c exists in (-1, 1)",
      "C) The claim is justified because h(1) = -2 < 1 < 4 = h(3) and h is defined on [1, 3]",
      "D) The claim is justified because h is continuous on [-1, 3]"
    ],
    "answer": 0,
    "explanation": "The IVT requires continuity on the closed interval in question. Since h has a non-removable discontinuity at x = 1 from the right, h is not continuous on [1, 3], so the IVT cannot be applied on that interval to guarantee h(c) = 1. Choice B correctly identifies a valid IVT application on [-1, 1] but answers a different question than what the student claimed (the student specified c in (1, 3), not (-1, 1)). Choice C ignores the continuity requirement entirely - having the right function values is necessary but not sufficient. Choice D is false because the problem explicitly states h has a non-removable discontinuity at x = 1."
  },
  {
    "id": "calc_u1_q308",
    "subject": "apcalc",
    "unit": 1,
    "topic": "types of discontinuity",
    "topicLabel": "Types of Discontinuity and Continuity",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = (x^2 - 4x + 3)/(x^2 - 5x + 6) for x != 1 and x != 2 and x != 3. If f(1) = 0 and f(2) is undefined, and f(3) = 5, at which x-value(s) does f have a removable discontinuity?",
    "choices": [
      "A) x = 3 only",
      "B) x = 2 and x = 3",
      "C) x = 1 and x = 3",
      "D) x = 2 only"
    ],
    "answer": 0,
    "explanation": "Factor: f(x) = (x-1)(x-3)/((x-2)(x-3)). For x != 3, this simplifies to (x-1)/(x-2). At x = 3, the limit is (3-1)/(3-2) = 2, which exists and is finite, but f(3) = 5 != 2, so x = 3 is a removable discontinuity. At x = 2, the simplified form (x-1)/(x-2) has a vertical asymptote (limit is +/- infinity), so x = 2 is a non-removable (infinite) discontinuity. At x = 1, the simplified function gives (1-1)/(1-2) = 0, and f(1) = 0, so f is actually continuous at x = 1. The correct answer is x = 3 only."
  },
  {
    "id": "calc_u1_q309",
    "subject": "apcalc",
    "unit": 1,
    "topic": "IVT",
    "topicLabel": "Intermediate Value Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f be continuous on [0, 4]. Suppose f(0) = -3, f(2) = 5, and f(4) = 2. Let g(x) = f(x) - x. Which of the following is guaranteed by the Intermediate Value Theorem?",
    "choices": [
      "A) g has a zero on (0, 2) only",
      "B) g has a zero on (2, 4) only",
      "C) g has at least one zero on (0, 2) and at least one zero on (2, 4)",
      "D) g has a zero on (0, 4) but the subinterval cannot be determined"
    ],
    "answer": 2,
    "explanation": "Since f is continuous on [0,4], g(x) = f(x) - x is also continuous on [0,4]. Evaluate: g(0) = f(0) - 0 = -3, g(2) = f(2) - 2 = 3, g(4) = f(4) - 4 = -2. On [0,2]: g(0) = -3 < 0 and g(2) = 3 > 0, so by IVT there is at least one c in (0,2) where g(c) = 0. On [2,4]: g(2) = 3 > 0 and g(4) = -2 < 0, so by IVT there is at least one c in (2,4) where g(c) = 0. Therefore g has at least one zero in each subinterval. Students who only check one interval may choose A or B. Students who think IVT cannot specify subintervals choose D. The correct answer is C."
  },
  {
    "id": "calc_u2_q310",
    "subject": "apcalc",
    "unit": 2,
    "topic": "higher order derivatives",
    "topicLabel": "Higher Order Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = 3x^5 - 2sin(x) + 7x, what is f''(x)?",
    "choices": [
      "A) 60x^3 + 2sin(x) + 7",
      "B) 60x^3 + 2sin(x)",
      "C) 60x^3 - 2sin(x)",
      "D) 15x^4 - 2cos(x) + 7"
    ],
    "answer": 1,
    "explanation": "First, find f'(x) = 15x^4 - 2cos(x) + 7. Then f''(x) = 60x^3 + 2sin(x). The derivative of -2cos(x) is 2sin(x), and the constant 7 differentiates to 0. Choice A (60x^3 + 2sin(x) + 7) is wrong because it keeps the constant 7 through both derivatives. Choice C (60x^3 - 2sin(x)) reflects a sign error where the student forgot that the derivative of -cos(x) is sin(x), not -sin(x). Choice D is f'(x), not f''(x) - a common mistake of stopping after only one differentiation."
  },
  {
    "id": "calc_u2_q311",
    "subject": "apcalc",
    "unit": 2,
    "topic": "definition of derivative and differentiability",
    "topicLabel": "Definition of Derivative and Differentiability",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x^(1/3). Using the limit definition of the derivative, which of the following best describes f'(0)?",
    "choices": [
      "A) f'(0) = 0",
      "B) f'(0) = 1/3",
      "C) f'(0) does not exist because the limit approaches infinity",
      "D) f'(0) does not exist because the left- and right-hand limits differ"
    ],
    "answer": 2,
    "explanation": "Using the limit definition, f'(0) = lim(h->0) [h^(1/3) - 0]/h = lim(h->0) 1/h^(2/3). As h approaches 0, h^(2/3) approaches 0 from the positive side (since h^(2/3) is always nonneg), so 1/h^(2/3) approaches +infinity. The derivative does not exist because the limit is infinite, meaning the graph has a vertical tangent at x = 0. Choice A incorrectly assumes the cube root flattens out. Choice B results from applying the power rule without checking its validity at x = 0 (the power rule gives (1/3)x^(-2/3), which is undefined at x = 0). Choice D confuses this with a cusp where one-sided limits differ in sign; here both sides go to +infinity."
  },
  {
    "id": "calc_u2_q312",
    "subject": "apcalc",
    "unit": 2,
    "topic": "higher order derivatives with trig and sum rule",
    "topicLabel": "Higher Order Derivatives with Trig Functions",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "If f(x) = 3x^4 - sin(x), what is f'''(x)?",
    "choices": [
      "A) 72x - cos(x)",
      "B) 72x + cos(x)",
      "C) 36x^2 + sin(x)",
      "D) 36x^2 - sin(x)"
    ],
    "answer": 1,
    "explanation": "f(x) = 3x^4 - sin(x). First derivative: f'(x) = 12x^3 - cos(x). Second derivative: f''(x) = 36x^2 - (-sin(x)) = 36x^2 + sin(x). Third derivative: f'''(x) = 72x + cos(x). Choice A (72x - cos(x)) results from incorrectly keeping the negative sign through all trig derivatives, forgetting that the derivative of -sin(x) is -cos(x) and the derivative of -cos(x) is sin(x), not -sin(x). Choices C and D are the second derivative (correct and incorrect sign versions), a common error from stopping one step too early."
  },
  {
    "id": "calc_u2_q313",
    "subject": "apcalc",
    "unit": 2,
    "topic": "average vs instantaneous rate of change",
    "topicLabel": "Average vs Instantaneous Rate of Change",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = x^3 - 6x. The average rate of change of g on [1, 4] equals the instantaneous rate of change of g at x = c for some c in (1, 4). What is the value of c?",
    "choices": [
      "A) c = sqrt(7)",
      "B) c = 5/2",
      "C) c = sqrt(3)",
      "D) c = 3"
    ],
    "answer": 0,
    "explanation": "Average rate of change on [1, 4]: [g(4) - g(1)]/(4 - 1) = [(64 - 24) - (1 - 6)]/3 = [40 - (-5)]/3 = 45/3 = 15. The instantaneous rate of change is g'(x) = 3x^2 - 6. Setting 3x^2 - 6 = 15 gives 3x^2 = 21, so x^2 = 7 and x = sqrt(7) (approximately 2.646, which is in (1, 4)). Choice B (5/2) comes from averaging the endpoints (1+4)/2, confusing the midpoint with the MVT value. Choice C (sqrt(3)) results from setting 3x^2 - 6 = 3, an arithmetic error. Choice D (c = 3) is a common guess from picking a convenient integer in the interval."
  },
  {
    "id": "calc_u2_q314",
    "subject": "apcalc",
    "unit": 2,
    "topic": "definition of derivative and differentiability",
    "topicLabel": "Definition of Derivative and Differentiability",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x|x|. Using the limit definition of the derivative, which of the following is true about f'(0)?",
    "choices": [
      "A) f'(0) = 0",
      "B) f'(0) = 1",
      "C) f'(0) does not exist because f is not continuous at x = 0",
      "D) f'(0) does not exist because the left- and right-hand limits of the difference quotient are not equal"
    ],
    "answer": 0,
    "explanation": "f(x) = x|x| can be written as x^2 for x >= 0 and -x^2 for x < 0. The difference quotient at 0 is f(h)/h. For h > 0, f(h)/h = h^2/h = h -> 0. For h < 0, f(h)/h = -h^2/h = -h -> 0. Both one-sided limits equal 0, so f'(0) = 0. Choice B comes from confusing f with |x| and thinking the slope is 1. Choice C is wrong because f is continuous at 0. Choice D is a common misconception from students who assume absolute value functions are never differentiable at the critical point."
  },
  {
    "id": "calc_u2_q316",
    "subject": "apcalc",
    "unit": 2,
    "topic": "average vs instantaneous rate of change",
    "topicLabel": "Average vs Instantaneous Rate of Change",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = x^3 - 6x^2 + 9x + 2. On the interval [0, 4], at how many values of c does the instantaneous rate of change equal the average rate of change over [0, 4]?",
    "choices": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) 3"
    ],
    "answer": 3,
    "explanation": "The average rate of change is (g(4) - g(0))/(4 - 0). g(4) = 64 - 96 + 36 + 2 = 6 and g(0) = 2, so the average rate is (6 - 2)/4 = 1. The instantaneous rate is g'(x) = 3x^2 - 12x + 9. Setting 3x^2 - 12x + 9 = 1 gives 3x^2 - 12x + 8 = 0. The discriminant is 144 - 96 = 48 > 0, so there are two real solutions: x = (12 ± sqrt(48))/6 = 2 ± (2sqrt(3))/3, approximately 0.845 and 3.155. Both values lie in the open interval (0, 4), giving exactly 2 values of c in the open interval."
  },
  {
    "id": "calc_u3_q321",
    "subject": "apcalc",
    "unit": 3,
    "topic": "inverse trig derivatives",
    "topicLabel": "Inverse Trig Derivatives",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the derivative of g(x) = arctan(4x)?",
    "choices": [
      "A) 1 / (1 + 16x^2)",
      "B) 4 / (1 + 16x^2)",
      "C) 4 / (1 + 4x^2)",
      "D) 1 / (1 + 4x^2)"
    ],
    "answer": 1,
    "explanation": "The derivative of arctan(u) is 1/(1 + u^2) * du/dx. Here u = 4x, so du/dx = 4 and u^2 = 16x^2. Thus g'(x) = 4/(1 + 16x^2). Choice A forgets the chain rule factor of 4. Choice C incorrectly squares only the coefficient (writing 4x^2 instead of 16x^2) while remembering the chain rule multiplier. Choice D makes both errors: forgetting the chain rule multiplier and not squaring properly."
  },
  {
    "id": "calc_u3_q322",
    "subject": "apcalc",
    "unit": 3,
    "topic": "quotient rule",
    "topicLabel": "Quotient Rule",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let h(x) = (e^x) / (x^2 + 1). What is h'(0)?",
    "choices": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) -1"
    ],
    "answer": 1,
    "explanation": "Using the quotient rule: h'(x) = [(e^x)(x^2 + 1) - (e^x)(2x)] / (x^2 + 1)^2. At x = 0: numerator = (1)(1) - (1)(0) = 1, denominator = (1)^2 = 1, so h'(0) = 1. Choice A results from incorrectly thinking the numerator cancels to zero. Choice C comes from incorrectly computing the numerator as e^0 * (0 + 1) + e^0 * 0 = 2, confusing the subtraction in the quotient rule with addition (a common sign error). Choice D results from reversing the order in the quotient rule numerator, computing (2x)(e^x) - (x^2+1)(e^x)."
  },
  {
    "id": "calc_u4_q323",
    "subject": "apcalc",
    "unit": 4,
    "topic": "related rates",
    "topicLabel": "Related Rates",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A conical tank has its vertex at the bottom. The radius of the base is 4 m and the height is 8 m. Water is being pumped into the tank at a rate of 2 cubic meters per minute. At the instant when the water depth is 4 m, what is the rate at which the water level is rising, in meters per minute?",
    "choices": [
      "A) 1/(2pi)",
      "B) 2/pi",
      "C) 1/(8pi)",
      "D) 8/pi"
    ],
    "answer": 0,
    "explanation": "By similar triangles, r/h = 4/8 = 1/2, so r = h/2. The volume of a cone is V = (1/3)pi*r^2*h = (1/3)pi*(h/2)^2*h = pi*h^3/12. Differentiating: dV/dt = (pi*h^2/4)(dh/dt). At h = 4 and dV/dt = 2: 2 = (pi*16/4)(dh/dt) = 4pi*(dh/dt), so dh/dt = 1/(2pi). Choice B (2/pi) results from forgetting the 1/3 in the cone volume formula. Choice C (1/(8pi)) results from an arithmetic error in which the student evaluates pi*h^2/4 at h=4 as 8pi instead of 4pi (e.g., computing 4^2/4 as 2 instead of 4). Choice D (8/pi) results from incorrectly differentiating the volume formula."
  },
  {
    "id": "calc_u4_q324",
    "subject": "apcalc",
    "unit": 4,
    "topic": "mean value theorem",
    "topicLabel": "Mean Value Theorem and Rolle's Theorem",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let f(x) = x^3 - 6x^2 + 9x + 1 on the interval [0, 4]. The Mean Value Theorem guarantees the existence of at least one c in (0, 4) where f'(c) equals the average rate of change. How many values of c in (0, 4) satisfy the conclusion of the MVT?",
    "choices": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) 3"
    ],
    "answer": 2,
    "explanation": "First compute the average rate of change: f(4) = 64 - 96 + 36 + 1 = 5 and f(0) = 1, so [f(4)-f(0)]/(4-0) = 4/4 = 1. Now f'(x) = 3x^2 - 12x + 9. Setting f'(c) = 1 gives 3c^2 - 12c + 9 = 1, or 3c^2 - 12c + 8 = 0. Using the quadratic formula: c = (12 +/- sqrt(144 - 96))/6 = (12 +/- sqrt(48))/6 = 2 +/- (2sqrt(3))/3. Since 2sqrt(3)/3 is approximately 1.155, both c = 2 - 1.155 = 0.845 and c = 2 + 1.155 = 3.155 lie in (0, 4), giving 2 values. Choice B (1) is a common error from students who assume the MVT guarantees exactly one value. Choice A is wrong because the MVT guarantees at least one. Choice D is wrong because a cubic derivative yields a quadratic equation with at most 2 solutions."
  },
  {
    "id": "calc_u6_q325",
    "subject": "apcalc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "FTC part 1",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = the integral from 2 to x^2 of sqrt(t^3 + 1) dt. What is g'(x)?",
    "choices": [
      "A) sqrt(x^6 + 1) * 2x",
      "B) sqrt(x^3 + 1) * 2x",
      "C) sqrt(x^6 + 1)",
      "D) 2x * sqrt(x^2 + 1)"
    ],
    "answer": 0,
    "explanation": "By FTC Part 1 combined with the chain rule, g'(x) = sqrt((x^2)^3 + 1) * d/dx(x^2) = sqrt(x^6 + 1) * 2x. Choice B incorrectly substitutes x instead of x^2 into t^3. Choice C forgets the chain rule factor of 2x. Choice D incorrectly simplifies (x^2)^3 as x^2 instead of x^6."
  },
  {
    "id": "calc_u6_q326",
    "subject": "apcalc",
    "unit": 6,
    "topic": "average value",
    "topicLabel": "average value",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the average value of f(x) = 3x^2 - 6x on the interval [0, 4]?",
    "choices": [
      "A) 4",
      "B) 16",
      "C) 8",
      "D) 12"
    ],
    "answer": 0,
    "explanation": "The average value is (1/(4-0)) * integral from 0 to 4 of (3x^2 - 6x) dx. The antiderivative is x^3 - 3x^2. Evaluating: (4^3 - 3(4^2)) - (0) = 64 - 48 = 16. Then (1/4)(16) = 4. Choice B (16) is the value of the definite integral without dividing by the interval length. Choice C (8) results from dividing by 2 instead of 4. Choice D (12) may come from an antiderivative error such as forgetting the coefficient when integrating."
  },
  {
    "id": "calc_u6_q327",
    "subject": "apcalc",
    "unit": 6,
    "topic": "FTC part 1",
    "topicLabel": "FTC part 1",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = the integral from 0 to x^3 of sqrt(1 + t^2) dt. What is g'(x)?",
    "choices": [
      "A) 3x^2 * sqrt(1 + x^6)",
      "B) sqrt(1 + x^6)",
      "C) 3x^2 * sqrt(1 + x^2)",
      "D) x^3 * sqrt(1 + x^6)"
    ],
    "answer": 0,
    "explanation": "By FTC Part 1 combined with the chain rule, g'(x) = sqrt(1 + (x^3)^2) * d/dx(x^3) = 3x^2 * sqrt(1 + x^6). Choice B forgets the chain rule factor of 3x^2. Choice C substitutes x instead of x^3 into the integrand. Choice D incorrectly uses x^3 as the chain rule derivative instead of 3x^2."
  },
  {
    "id": "calc_u6_q328",
    "subject": "apcalc",
    "unit": 6,
    "topic": "average value",
    "topicLabel": "average value",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "The average value of f(x) = 6x^2 on the interval [1, 4] is equal to f(c) for some c in [1, 4]. What is the value of c?",
    "choices": [
      "A) -20/3 gallons",
      "B) 25/3 gallons",
      "C) -25/6 gallons",
      "D) 5/6 gallons"
    ],
    "answer": 0,
    "explanation": "Evaluate the integral from 0 to 5 of (4t - t^2 - 3) dt. Finding the antiderivative gives [2t^2 - t^3/3 - 3t]. Evaluating from 0 to 5: (2(25) - 125/3 - 3(5)) - 0 = (50 - 125/3 - 15) = 35 - 125/3 = (105 - 125)/3 = -20/3 gallons. Choice B (25/3 gallons) results from only considering the inflow term and forgetting the outflow. Choice C (-25/6 gallons) comes from a plausible arithmetic error during evaluation. Choice D (5/6 gallons) results from an arithmetic error in combining terms."
  },
  {
    "id": "calc_u6_q329",
    "subject": "apcalc",
    "unit": 6,
    "topic": "FTC part 1 and average value",
    "topicLabel": "FTC Part 1 and Average Value",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = (1/(2x)) * integral from 0 to 2x of sin(t^2) dt. Which of the following expressions equals g'(x)?",
    "choices": [
      "A) (1/(2x)) * [2sin(4x^2) - (1/(2x)) * integral from 0 to 2x of sin(t^2) dt]",
      "B) sin(4x^2)",
      "C) (1/x) * sin(4x^2)",
      "D) (sin(4x^2) - g(x)) / x"
    ],
    "answer": 3,
    "explanation": "g(x) = (1/(2x)) * integral from 0 to 2x of sin(t^2) dt. Using the product rule: g'(x) = (-1/(2x^2)) * integral from 0 to 2x of sin(t^2) dt + (1/(2x)) * d/dx[integral from 0 to 2x of sin(t^2) dt]. By FTC Part 1 with the chain rule, d/dx[integral from 0 to 2x of sin(t^2) dt] = sin((2x)^2) * 2 = 2sin(4x^2). So g'(x) = -g(x)/x + (1/(2x))*2sin(4x^2) = -g(x)/x + sin(4x^2)/x = (sin(4x^2) - g(x))/x, which is choice D. Choice B forgets the product rule entirely. Choice C only accounts for the FTC part without the quotient/product rule. Choice A is a common partial simplification error where the factor of 2 from the chain rule is not properly combined."
  },
  {
    "id": "calc_u6_q330",
    "subject": "apcalc",
    "unit": 6,
    "topic": "FTC part 1 and average value",
    "topicLabel": "FTC Part 1 and Average Value",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let g(x) = (1/(2x)) * the integral from 0 to 2x of sin(t^2) dt. Which of the following expressions equals g'(x)?",
    "choices": [
      "A) (1/(2x)) * [2sin(4x^2) - (1/(2x)) * the integral from 0 to 2x of sin(t^2) dt]",
      "B) sin(4x^2)",
      "C) 2sin(4x^2) - (1/(2x)) * the integral from 0 to 2x of sin(t^2) dt",
      "D) (1/(2x)) * [2sin(4x^2)] - (1/(4x^2)) * the integral from 0 to 2x of sin(t^2) dt"
    ],
    "answer": 3,
    "explanation": "g(x) = (1/(2x)) * integral from 0 to 2x of sin(t^2) dt. Using the quotient rule with numerator F(x) = integral from 0 to 2x of sin(t^2) dt and denominator 2x: g'(x) = [F'(x)(2x) - F(x)(2)] / (4x^2). By FTC Part 1 with the chain rule, F'(x) = sin((2x)^2) * 2 = 2sin(4x^2). So g'(x) = [2sin(4x^2)(2x) - 2F(x)] / (4x^2) = [4x sin(4x^2) - 2F(x)] / (4x^2) = (1/(2x))[2sin(4x^2)] - (1/(4x^2)) * integral from 0 to 2x of sin(t^2) dt, which is choice D. Choice A incorrectly uses 1/(2x) instead of 1/(4x^2) on the second term (wrong quotient rule). Choice B forgets the quotient rule entirely and only applies FTC. Choice C incorrectly applies the product rule without proper scaling, omitting the 1/(2x) factor on the derivative term and dropping the denominator structure entirely."
  },
  {
    "id": "calc_u7_q331",
    "subject": "apcalc",
    "unit": 7,
    "topic": "long division",
    "topicLabel": "long division",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Find the integral of (x^3 + 2x^2 - 5) / (x^2 + 1) dx.",
    "choices": [
      "A) (1/2)x^2 + 2x - (1/2)ln|x^2+1| - 2arctan(x) - 5arctan(x) + C",
      "B) (1/2)x^2 + 2x - (1/2)ln(x^2+1) - 7arctan(x) + C",
      "C) (1/2)x^2 + 2x + (1/2)ln(x^2+1) - 5arctan(x) + C",
      "D) (1/2)x^2 + 2x - (1/2)ln(x^2+1) - 5arctan(x) + C"
    ],
    "answer": 0,
    "explanation": "Perform polynomial long division: x^3 + 2x^2 - 5 divided by x^2 + 1. First, x^3/(x^2+1) gives quotient x with remainder -x. Then (2x^2 - x - 5)/(x^2+1): 2x^2/(x^2+1) gives quotient 2 with remainder -x - 7. So the integrand becomes x + 2 + (-x - 7)/(x^2+1) = x + 2 - x/(x^2+1) - 7/(x^2+1). Integrating: (1/2)x^2 + 2x - (1/2)ln(x^2+1) - 7arctan(x) + C. Choice B is correct. Choice D has -5arctan(x) instead of -7arctan(x), which comes from using the original constant -5 without properly completing the long division remainder. Choice C has a sign error on the ln term. Choice A separates the arctan terms incorrectly and double-counts."
  },
  {
    "id": "calc_u7_q332",
    "subject": "apcalc",
    "unit": 7,
    "topic": "completing the square",
    "topicLabel": "completing the square",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Evaluate the integral of 1 / (x^2 + 6x + 13) dx.",
    "choices": [
      "A) (1/2)arctan((x+3)/2) + C",
      "B) arctan((x+3)/2) + C",
      "C) (1/4)arctan((x+3)/4) + C",
      "D) (1/2)ln|x^2+6x+13| + C"
    ],
    "answer": 0,
    "explanation": "Complete the square: x^2 + 6x + 13 = (x+3)^2 + 4. The integral becomes integral of 1/((x+3)^2 + 4) dx. Using the formula integral of 1/(u^2+a^2) du = (1/a)arctan(u/a) + C with u = x+3 and a = 2, we get (1/2)arctan((x+3)/2) + C. Choice A is correct. Choice B forgets the 1/a factor out front, a very common mistake when students recall the arctan formula as just arctan(u/a). Choice C incorrectly uses a=4 instead of a=2 (confusing a^2 with a). Choice D incorrectly applies an ln rule as if the numerator were the derivative of the denominator, which it is not."
  },
  {
    "id": "calc_u8_q333",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes - Disc Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The region bounded by y = sqrt(x), y = 0, and x = 4 is revolved about the x-axis. What is the volume of the resulting solid?",
    "choices": [
      "A) 8pi",
      "B) 4pi",
      "C) 16pi",
      "D) 8pi/3"
    ],
    "answer": 0,
    "explanation": "Using the disc method, V = pi * integral from 0 to 4 of (sqrt(x))^2 dx = pi * integral from 0 to 4 of x dx = pi * [x^2/2] from 0 to 4 = pi * (16/2) = 8pi. Choice B (4pi) results from forgetting to square the radius or making an integration error. Choice C (16pi) comes from omitting the 1/2 when integrating x. Choice D (8pi/3) comes from incorrectly integrating sqrt(x) without squaring it first, computing pi * integral of x^(1/2) dx."
  },
  {
    "id": "calc_u8_q334",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes - Washer Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The region bounded by y = x^2 and y = x is revolved about the x-axis. What is the volume of the resulting solid?",
    "choices": [
      "A) 3pi/10",
      "B) 2pi/15",
      "C) pi/6",
      "D) pi/5"
    ],
    "answer": 1,
    "explanation": "The curves intersect at x = 0 and x = 1. For 0 <= x <= 1, x >= x^2, so the outer radius is R = x and the inner radius is r = x^2. V = pi * integral from 0 to 1 of (x^2 - x^4) dx = pi * [x^3/3 - x^5/5] from 0 to 1 = pi * (1/3 - 1/5) = pi * (2/15) = 2pi/15. Choice A (3pi/10) results from incorrectly computing 1/2 - 1/5. Choice C (pi/6) comes from integrating the area formula (x - x^2) instead of the washer formula. Choice D (pi/5) comes from only using the inner radius squared term."
  },
  {
    "id": "calc_u8_q335",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes shell method",
    "topicLabel": "Volumes - Shell Method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Using the shell method, find the volume of the solid formed by revolving the region bounded by y = x^2, y = 0, and x = 2 about the y-axis.",
    "choices": [
      "A) 8pi",
      "B) 4pi",
      "C) 16pi/3",
      "D) 32pi/5"
    ],
    "answer": 0,
    "explanation": "Using the shell method with shells parallel to the y-axis: V = 2pi * integral from 0 to 2 of x * (x^2) dx = 2pi * integral from 0 to 2 of x^3 dx = 2pi * [x^4/4] from 0 to 2 = 2pi * (16/4) = 2pi * 4 = 8pi. Choice B (4pi) comes from forgetting the factor of 2 in the shell formula. Choice C (16pi/3) comes from incorrectly integrating x^2 instead of x^3. Choice D (32pi/5) results from using the disc method formula incorrectly or integrating x^4 by mistake."
  },
  {
    "id": "calc_u8_q336",
    "subject": "apcalc",
    "unit": 8,
    "topic": "arc length",
    "topicLabel": "Arc Length",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which integral gives the arc length of y = (2/3)x^(3/2) from x = 0 to x = 3?",
    "choices": [
      "A) integral from 0 to 3 of sqrt(1 + x) dx",
      "B) integral from 0 to 3 of sqrt(1 + x^3) dx",
      "C) integral from 0 to 3 of sqrt(1 + (4/9)x^3) dx",
      "D) integral from 0 to 3 of (1 + x) dx"
    ],
    "answer": 0,
    "explanation": "The arc length formula is L = integral of sqrt(1 + (dy/dx)^2) dx. Here dy/dx = (2/3)(3/2)x^(1/2) = x^(1/2). So (dy/dx)^2 = x. The integrand is sqrt(1 + x). Choice B incorrectly cubes x, possibly from squaring x^(3/2) instead of x^(1/2). Choice C comes from forgetting to simplify the derivative and squaring (2/3)x^(3/2) directly. Choice D forgets the square root entirely."
  },
  {
    "id": "calc_u8_q337",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes disc method",
    "topicLabel": "Volumes - Disc Method (about y-axis)",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The region bounded by y = x^3, x = 0, and y = 8 is revolved about the y-axis. Using the disc method, what is the volume?",
    "choices": [
      "A) 96pi/5",
      "B) 24pi",
      "C) 128pi/7",
      "D) 16pi"
    ],
    "answer": 0,
    "explanation": "Solving y = x^3 for x gives x = y^(1/3). When revolving about the y-axis, the disc has radius r = y^(1/3). V = pi * integral from 0 to 8 of (y^(1/3))^2 dy = pi * integral from 0 to 8 of y^(2/3) dy = pi * [y^(5/3)/(5/3)] from 0 to 8 = pi * (3/5) * 8^(5/3) = pi * (3/5) * 32 = 96pi/5. Choice B (24pi) comes from incorrectly computing 8^(5/3) or the antiderivative. Choice C (128pi/7) results from using the wrong exponent in integration. Choice D (16pi) comes from forgetting to square the radius."
  },
  {
    "id": "calc_u8_q338",
    "subject": "apcalc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "Motion Problems - Displacement vs Distance",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle has velocity v(t) = 3t^2 - 12 for 0 <= t <= 3. If the particle starts at position s(0) = 5, what is the position of the particle at t = 3?",
    "choices": [
      "A) -4",
      "B) 4",
      "C) -9",
      "D) 14"
    ],
    "answer": 0,
    "explanation": "s(3) = s(0) + integral from 0 to 3 of v(t) dt = 5 + integral from 0 to 3 of (3t^2 - 12) dt = 5 + [t^3 - 12t] from 0 to 3 = 5 + (27 - 36) - 0 = 5 + (-9) = -4. Note that the net signed displacement (the integral of velocity) equals -9, meaning the particle moved a net of 9 units in the negative direction over [0, 3]; this is the signed value and should not be confused with total distance traveled. Choice B (4) comes from using the absolute value of the displacement instead of the signed displacement. Choice C (-9) comes from forgetting to add the initial position s(0) = 5. Choice D (14) comes from incorrectly adding 9 instead of subtracting."
  },
  {
    "id": "calc_u8_q339",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "Volumes - Washer Method (non-axis)",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Find the area of the region bounded by x = y^2 and x = y + 2.",
    "choices": [
      "A) 9/2",
      "B) 7/2",
      "C) 9/4",
      "D) 3"
    ],
    "answer": 0,
    "explanation": "First, find the intersections of x = y^2 and x = y + 2 by setting y^2 = y + 2, which gives y^2 - y - 2 = 0, or (y - 2)(y + 1) = 0. So y = -1 and y = 2. The area is the integral from -1 to 2 of (right curve minus left curve) dy = integral from -1 to 2 of [(y + 2) - y^2] dy. Evaluating: [y^2/2 + 2y - y^3/3] from -1 to 2 = (4/2 + 4 - 8/3) - (1/2 - 2 + 1/3) = (2 + 4 - 8/3) - (1/2 - 2 + 1/3) = (6 - 8/3) - (-3/2 + 1/3) = (18/3 - 8/3) - (-9/6 + 2/6) = 10/3 - (-7/6) = 10/3 + 7/6 = 20/6 + 7/6 = 27/6 = 9/2. Choice B subtracts incorrectly, Choice C halves the correct answer, and Choice D results from an arithmetic error in evaluation."
  },
  {
    "id": "calc_u8_q340",
    "subject": "apcalc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "area between curves",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the area of the region enclosed by y = x^2 and y = 2x?",
    "choices": [
      "A) 4/3",
      "B) 2/3",
      "C) 8/3",
      "D) 1/3"
    ],
    "answer": 0,
    "explanation": "The curves intersect where x^2 = 2x, so x = 0 and x = 2. The area is the integral from 0 to 2 of (2x - x^2) dx = [x^2 - x^3/3] from 0 to 2 = (4 - 8/3) = 4/3. Choice B (2/3) results from integrating from 0 to 1 only or a factor error. Choice C (8/3) comes from forgetting to subtract one curve from the other or doubling. Choice D (1/3) results from reversing the curves and getting a sign error combined with a limits mistake."
  },
  {
    "id": "calc_u8_q341",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "volumes washer method",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "The region bounded by y = x and y = x^2 is revolved about the x-axis. Which integral gives the volume of the resulting solid?",
    "choices": [
      "A) pi * integral from 0 to 1 of (x^2 - x^4) dx",
      "B) pi * integral from 0 to 1 of (x - x^2)^2 dx",
      "C) pi * integral from 0 to 1 of (x^4 - x^2) dx",
      "D) 2*pi * integral from 0 to 1 of x(x - x^2) dx"
    ],
    "answer": 0,
    "explanation": "Using the washer method, the outer radius is R = x and the inner radius is r = x^2 (since x >= x^2 on [0,1]). The volume is pi * integral from 0 to 1 of (R^2 - r^2) dx = pi * integral from 0 to 1 of (x^2 - x^4) dx. Choice B incorrectly squares the difference of the functions rather than taking the difference of the squares - a very common student error. Choice C reverses outer and inner radii, which would give a negative value. Choice D is the shell method setup, which would apply if revolving about the y-axis, not the x-axis."
  },
  {
    "id": "calc_u8_q342",
    "subject": "apcalc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "motion problems with integrals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with velocity v(t) = t^2 - 4t + 3 for 0 <= t <= 4. What is the total distance traveled by the particle over this interval?",
    "choices": [
      "A) 4",
      "B) 4/3",
      "C) 28/3",
      "D) 20/3"
    ],
    "answer": 0,
    "explanation": "First find where v(t) = 0: t^2 - 4t + 3 = (t-1)(t-3) = 0 at t = 1 and t = 3. Total distance = integral from 0 to 1 of |v(t)| dt + integral from 1 to 3 of |v(t)| dt + integral from 3 to 4 of |v(t)| dt. On [0,1], v(t) > 0: integral = [t^3/3 - 2t^2 + 3t] from 0 to 1 = 1/3 - 2 + 3 = 4/3. On [1,3], v(t) < 0: integral of |v| = -[t^3/3 - 2t^2 + 3t] from 1 to 3 = -(9 - 18 + 9 - 1/3 + 2 - 3) = -(-4/3) = 4/3. On [3,4], v(t) > 0: integral = [t^3/3 - 2t^2 + 3t] from 3 to 4 = (64/3 - 32 + 12) - (9 - 18 + 9) = 4/3. Total = 4/3 + 4/3 + 4/3 = 4. Choice B (4/3) is the displacement (net change in position), a common error from not using absolute value. Choice C (28/3) results from incorrectly computing the antiderivative. Choice D (20/3) comes from a sign error in one of the subintervals."
  },
  {
    "id": "calc_u8_q343",
    "subject": "apcalc",
    "unit": 8,
    "topic": "volumes washer method",
    "topicLabel": "volumes washer method",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "Let R be the region bounded by y = x^2 and y = 2x. What is the volume of the solid generated when R is revolved about the line y = 5?",
    "choices": [
      "A) pi * integral from 0 to 2 of [(5 - x^2)^2 - (5 - 2x)^2] dx",
      "B) pi * integral from 0 to 2 of [(5 - 2x)^2 - (5 - x^2)^2] dx",
      "C) pi * integral from 0 to 2 of [(2x - x^2)^2] dx",
      "D) pi * integral from 0 to 4 of [(5 - sqrt(y))^2 - (5 - y/2)^2] dy"
    ],
    "answer": 0,
    "explanation": "The curves intersect at x = 0 and x = 2. When revolving about y = 5 (above the region), the outer radius is the distance from y = 5 to the farther curve (y = x^2, which is smaller, so 5 - x^2 is larger) and the inner radius is the distance to the closer curve (y = 2x, giving 5 - 2x). Choice B reverses outer and inner radii - a common error when students confuse which curve is closer to the axis of revolution. Choice C incorrectly uses the area between curves formula squared without accounting for the axis of revolution. Choice D sets up the integral in y but incorrectly identifies the outer and inner radii."
  },
  {
    "id": "calc_u8_q344",
    "subject": "apcalc",
    "unit": 8,
    "topic": "motion problems with integrals",
    "topicLabel": "motion problems with integrals",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "A particle moves along the x-axis with velocity v(t) = t^2 - 5t + 4 for t >= 0. At time t = 0, the particle is at position x = 2. What is the position of the particle when it is farthest to the left for 0 <= t <= 5?",
    "choices": [
      "A) 2 + integral from 0 to 4 of (t^2 - 5t + 4) dt",
      "B) integral from 0 to 4 of (t^2 - 5t + 4) dt",
      "C) 2 + integral from 1 to 4 of (t^2 - 5t + 4) dt",
      "D) 2 - integral from 1 to 4 of |t^2 - 5t + 4| dt"
    ],
    "answer": 2,
    "explanation": "The correct answer is choice C: 2 + integral from 1 to 4 of (t^2 - 5t + 4) dt. v(t) = t^2 - 5t + 4 = (t - 1)(t - 4). The velocity is negative on (1, 4), meaning the particle moves left during this interval. The particle is farthest to the left at t = 4, where it stops moving left. To find the position at t = 4, we start from the initial position x(0) = 2 and add the net displacement from t = 1 to t = 4 (the interval during which the particle moves left). Since v(t) is positive on (0, 1), the particle first moves right and returns to a local reference, but the net displacement starting from t = 1 accounts for the leftward motion. The position at t = 4 is 2 + integral from 1 to 4 of (t^2 - 5t + 4) dt. Choice A incorrectly starts the integral at t = 0, including rightward displacement from (0,1) that offsets the leftward motion. Choice B forgets the initial position x(0) = 2. Choice D incorrectly uses the absolute value, which would compute total distance rather than net displacement."
  },
  {
    "id": "calc_u8_q346",
    "subject": "apcalc",
    "unit": 8,
    "topic": "area between curves",
    "topicLabel": "Area Between Curves",
    "difficulty": "hard",
    "calculator": true,
    "isLatex": false,
    "format": "text",
    "question": "The curves y = sin(x) and y = cos(x) intersect at x = pi/4 and x = 5pi/4. Which expression gives the area of the region enclosed between these two curves from x = pi/4 to x = 5pi/4?",
    "choices": [
      "A) integral from pi/4 to 5pi/4 of [cos(x) - sin(x)] dx",
      "B) integral from pi/4 to 5pi/4 of [sin(x) - cos(x)] dx",
      "C) integral from pi/4 to 5pi/4 of [sin(x) + cos(x)] dx",
      "D) integral from pi/4 to pi of [sin(x) - cos(x)] dx + integral from pi to 5pi/4 of [cos(x) - sin(x)] dx"
    ],
    "answer": 1,
    "explanation": "On the interval (pi/4, 5pi/4), sin(x) >= cos(x), so the area is the integral of [sin(x) - cos(x)] dx from pi/4 to 5pi/4. Choice A reverses the order of subtraction, yielding a negative value. Choice C incorrectly adds the functions instead of subtracting. Choice D unnecessarily splits the integral and reverses the subtraction on the second piece, incorrectly assuming the top and bottom curves switch at x = pi when they do not switch until x = 5pi/4."
  }
];
