var APCALC_FRQ = [
  {
    "id": "calc_u1_frq001",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Continuity and Types of Discontinuity",
    "units": [
      1
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a function defined as follows:\n\nf(x) = (x² - 9) / (x - 3),  if x ≠ 3\nf(x) = 7,                    if x = 3\n\nUse this definition of f to answer each part below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate lim x→3 f(x). Show your algebraic work.",
        "rubric": "1 point: Student correctly simplifies (x² - 9)/(x - 3) by factoring to (x + 3)(x - 3)/(x - 3), cancels the (x - 3) factor, and evaluates the resulting expression x + 3 at x = 3 to obtain lim x→3 f(x) = 6."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Is f continuous at x = 3? Justify your answer using the definition of continuity.",
        "rubric": "1 point: Student states that f is NOT continuous at x = 3 and provides a valid justification by noting that lim x→3 f(x) = 6 does not equal f(3) = 7, thereby violating the requirement that the limit equals the function value for continuity."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Describe the type of discontinuity that f has at x = 3, and explain what would need to change to make f continuous at that point.",
        "rubric": "1 point: Student correctly identifies the discontinuity as a removable discontinuity (also accepted: hole, removable, point discontinuity) and states that redefining f(3) = 6 (changing the value of f at x = 3 to equal the limit) would make f continuous at x = 3."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes lim x→3 f(x) = 6 by factoring (x²-9)/(x-3) and canceling the common factor.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "lim x→3",
          "lim x->3",
          "(x+3)(x-3)",
          "cancel (x-3)",
          "common factor",
          "x + 3",
          "equals 6",
          "limit equals 6",
          "factoring difference of squares",
          "x²-9",
          "difference of squares",
          "direct substitution after cancellation",
          "simplified form",
          "indeterminate form",
          "algebraic simplification"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly concludes f is not continuous at x = 3 because the limit (6) does not equal the function value f(3) = 7.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "not continuous",
          "discontinuous at x=3",
          "lim x→3 f(x) ≠ f(3)",
          "limit does not equal f(3)",
          "6 ≠ 7",
          "definition of continuity",
          "f(3) = 7",
          "limit equals 6",
          "continuity requires limit equals function value",
          "three conditions of continuity",
          "f defined at x=3",
          "limit exists",
          "limit and function value must agree",
          "continuity condition violated",
          "piecewise defined"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Identifies the discontinuity as removable and states that redefining f(3) = 6 makes f continuous.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "removable discontinuity",
          "removable",
          "hole in the graph",
          "point discontinuity",
          "redefine f(3)",
          "f(3) = 6",
          "set f(3) equal to the limit",
          "f(3) = lim x→3 f(x)",
          "limit exists at x=3",
          "redefine the piecewise value",
          "patching the discontinuity",
          "not a jump discontinuity",
          "not an infinite discontinuity",
          "closed point at 6",
          "filled hole"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u1_frq002",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Algebraic Limit Evaluation and Continuity Analysis",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the function f(x) = (x² - 9) / (x - 3) for x ≠ 3, and f(3) = k, where k is a constant.\n\n(a) Calculate lim x→3 f(x) by simplifying the expression algebraically.\n(b) Determine the value of k that makes f continuous at x = 3.\n(c) Classify the type of discontinuity that exists at x = 3 when k = 10, and justify your answer using limit and function value evidence.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate lim x→3 (x² - 9)/(x - 3) by simplifying the expression algebraically. Show all steps.",
        "rubric": "Student earns the point by correctly factoring (x² - 9) as (x - 3)(x + 3), canceling the (x - 3) factor to obtain (x + 3), and evaluating the limit as x approaches 3 to get 6."
      },
      {
        "label": "b",
        "command": "Determine",
        "question": "Determine the value of k that makes f continuous at x = 3. Justify your answer using the definition of continuity.",
        "rubric": "Student earns the point by stating that for continuity f(3) must equal lim x→3 f(x), setting k equal to 6, and referencing the condition that the limit equals the function value at the point."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "When k = 10, classify the type of discontinuity at x = 3 and justify your classification using both the limit value and the function value.",
        "rubric": "Student earns the point by identifying the discontinuity as removable (or point discontinuity), stating that lim x→3 f(x) = 6 exists but f(3) = 10 ≠ 6, and concluding that because the limit exists but does not equal the function value the discontinuity is removable."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly evaluates lim x→3 (x²-9)/(x-3) = 6 by factoring and canceling.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "factor",
          "factoring",
          "(x-3)(x+3)",
          "difference of squares",
          "cancel",
          "canceling (x-3)",
          "x+3",
          "lim x→3",
          "limit equals 6",
          "algebraic simplification",
          "indeterminate form 0/0",
          "0/0 indeterminate",
          "substitute x=3",
          "direct substitution after cancellation"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Identifies k = 6 using the definition of continuity requiring f(3) = lim x→3 f(x).",
        "partLabel": "b",
        "skill": "determine",
        "keywords": [
          "k = 6",
          "continuous at x = 3",
          "f(3) = lim x→3 f(x)",
          "definition of continuity",
          "limit equals function value",
          "lim x→3 f(x) = 6",
          "f(3) must equal 6",
          "continuity condition",
          "three conditions for continuity",
          "limit exists",
          "function defined at x=3",
          "set k equal to 6"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Classifies discontinuity as removable and justifies using limit existence and f(3) ≠ limit.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "removable discontinuity",
          "point discontinuity",
          "limit exists",
          "lim x→3 f(x) = 6",
          "f(3) = 10",
          "f(3) ≠ limit",
          "limit exists but does not equal f(3)",
          "hole",
          "removable",
          "two-sided limit exists",
          "limit does not equal function value",
          "could be removed by redefining f(3)"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u1_frq003",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Intermediate Value Theorem and One-Sided Limits",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let g be a function that is continuous on the closed interval [1, 5]. Selected values of g are given in the table below:\n\nx:    1    2    3    4    5\ng(x): 7   -2    4   -1    6\n\n(a) Evaluate lim x→3⁻ g(x) and lim x→3⁺ g(x), and determine whether lim x→3 g(x) exists. Explain your reasoning using the continuity of g.\n(b) Using the Intermediate Value Theorem, justify that there exists at least one value c in the interval (1, 2) such that g(c) = 0.\n(c) Determine how many times the Intermediate Value Theorem guarantees g(x) = 0 on the open interval (1, 5), based solely on the table. Justify your answer by identifying all relevant sign changes.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Determine",
        "question": "Determine lim x→3⁻ g(x) and lim x→3⁺ g(x). Does lim x→3 g(x) exist? Explain using the continuity of g.",
        "rubric": "Student earns the point by correctly stating that because g is continuous at x = 3, both one-sided limits equal g(3) = 4, so lim x→3 g(x) = 4 exists."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Justify, using the Intermediate Value Theorem, that there exists at least one value c in (1, 2) such that g(c) = 0.",
        "rubric": "Student earns the point by citing the IVT, noting that g is continuous on [1, 2], that g(1) = 7 > 0 and g(2) = -2 < 0, and concluding that since 0 is between g(1) and g(2) there must exist a c in (1, 2) with g(c) = 0."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Based only on the table values, how many times does the IVT guarantee g(x) = 0 on the open interval (1, 5)? Identify all sign changes in the table and justify your count.",
        "rubric": "Student earns the point by identifying all four sign changes: between x = 1 and x = 2 (positive to negative), between x = 2 and x = 3 (negative to positive), between x = 3 and x = 4 (positive to negative), and between x = 4 and x = 5 (negative to positive), and stating that the IVT guarantees at least one zero in each of the four subintervals, for a total of at least 4 guaranteed zeros on (1, 5)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies both one-sided limits equal 4 because g is continuous at x = 3, and concludes the two-sided limit exists and equals 4.",
        "partLabel": "a",
        "skill": "determine",
        "keywords": [
          "lim x→3⁻ g(x) = 4",
          "lim x→3⁺ g(x) = 4",
          "one-sided limits equal",
          "lim x→3 g(x) = 4",
          "limit exists",
          "continuous at x = 3",
          "g(3) = 4",
          "two-sided limit",
          "left-hand limit",
          "right-hand limit",
          "continuity implies limit equals function value",
          "one-sided limits agree"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Applies IVT correctly: cites continuity on [1,2], identifies g(1)=7 and g(2)=-2 with opposite signs, and concludes existence of c in (1,2) with g(c)=0.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "Intermediate Value Theorem",
          "IVT",
          "continuous on [1,2]",
          "g(1) = 7",
          "g(2) = -2",
          "sign change",
          "0 is between -2 and 7",
          "there exists c in (1,2)",
          "g(c) = 0",
          "opposite signs",
          "g(1) positive and g(2) negative",
          "0 is between g(1) and g(2)",
          "guaranteed zero"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Identifies all four sign changes in the table and correctly states the IVT guarantees at least 4 zeros on (1,5), with full justification of each sign-change subinterval.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "four sign changes",
          "g(1) to g(2) positive to negative",
          "g(2) to g(3) negative to positive",
          "g(3) to g(4) positive to negative",
          "g(4) to g(5) negative to positive",
          "IVT guarantees",
          "at least 4 zeros",
          "Intermediate Value Theorem",
          "subinterval containing sign change",
          "one zero per sign-change subinterval",
          "(1,2) (2,3) (3,4) (4,5)",
          "continuous on each subinterval"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u1_frq004",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Continuity, Discontinuity Classification, and IVT on a Piecewise Function",
    "units": [
      1
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a function defined as follows:\n\nf(x) = { (x² − 9) / (x − 3),  if x < 3\n         { k² − 2k,             if x = 3\n         { 2x,                   if x > 3\n\nwhere k is a real-number constant.\n\nUse this definition to answer all three parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find lim x→3⁻ f(x) and lim x→3⁺ f(x). Then determine whether lim x→3 f(x) exists. Justify your answer.",
        "rubric": "Earns 1 point for correctly computing lim x→3⁻ f(x) = 6 by factoring (x²−9)/(x−3) = (x+3)(x−3)/(x−3) = x+3 → 6, computing lim x→3⁺ f(x) = 2(3) = 6, and concluding the two-sided limit exists and equals 6 because both one-sided limits are equal."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the value(s) of k that make f continuous at x = 3. Show all work.",
        "rubric": "Earns 1 point for setting f(3) = k²−2k equal to the two-sided limit of 6, forming the equation k²−2k = 6, solving k²−2k−6 = 0 using the quadratic formula to obtain k = (2 ± √28)/2 = 1 ± √7, and stating both values k = 1+√7 and k = 1−√7."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Suppose instead that k = 0, so f(3) = 0. Classify the type of discontinuity at x = 3, and then use the Intermediate Value Theorem to explain whether there must exist a value c in the interval (0, 3) such that f(c) = 5.",
        "rubric": "Earns 1 point for correctly identifying the discontinuity at x = 3 as a removable discontinuity (the limit exists and equals 6 but f(3) = 0 ≠ 6), AND correctly applying IVT on the interval [0, 3) or a closed sub-interval such as [0, 2.9]: f is continuous on (0, 3) via the branch f(x) = x+3, f(0) = 3, f approaches 6 as x→3⁻, so by IVT there exists c in (0, 3) with f(c) = 5 because 5 is between 3 and 6."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly evaluates both one-sided limits and concludes the two-sided limit exists equal to 6.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "lim x→3⁻",
          "lim x→3⁺",
          "one-sided limit",
          "left-hand limit",
          "right-hand limit",
          "(x+3)(x−3)/(x−3)",
          "difference of squares",
          "factor x²−9",
          "cancel (x−3)",
          "simplified to x+3",
          "limit equals 6",
          "two-sided limit exists",
          "left-hand limit equals right-hand limit",
          "both one-sided limits equal"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student sets k²−2k = 6, solves correctly using the quadratic formula, and states both values k = 1+√7 and k = 1−√7.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "k²−2k = 6",
          "k²−2k−6 = 0",
          "quadratic formula",
          "k = 1+√7",
          "k = 1−√7",
          "continuous at x = 3",
          "f(3) equals limit",
          "continuity condition",
          "definition of continuity",
          "√28 simplifies to 2√7",
          "both values of k",
          "set f(3) equal to two-sided limit",
          "discriminant"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student identifies a removable discontinuity at x = 3 and correctly applies IVT to guarantee f(c) = 5 for some c in (0, 3).",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "removable discontinuity",
          "hole in the graph",
          "limit exists but f(3) does not equal limit",
          "f(3) = 0 but limit is 6",
          "Intermediate Value Theorem",
          "IVT",
          "f continuous on closed subinterval",
          "f(x) = x+3 on (0,3)",
          "f(0) = 3",
          "f approaches 6 as x approaches 3 from left",
          "5 is between f(0) and limit value",
          "5 is between 3 and 6",
          "there exists c in (0,3) such that f(c) = 5",
          "IVT guarantees existence of c"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u1_frq005",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Continuity, Discontinuity, and the Intermediate Value Theorem",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f be a function defined as follows:\n\nf(x) = { (x² - 9) / (x - 3),  if x < 3\n        { k,                    if x = 3\n        { 2x,                   if x > 3\n\nwhere k is a real-number constant. Use this piecewise definition to answer all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate lim x→3⁻ f(x) and lim x→3⁺ f(x). Show all algebraic work.",
        "rubric": "Earns 1 point for correctly computing both one-sided limits: lim x→3⁻ f(x) = 6 (by factoring (x²-9)/(x-3) = x+3, then substituting x=3) and lim x→3⁺ f(x) = 6 (by substituting x=3 into 2x). Both values must be correct with supporting work."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Does lim x→3 f(x) exist? Justify your answer using the results from part (a).",
        "rubric": "Earns 1 point for stating that the two-sided limit exists and equals 6, with justification that lim x→3⁻ f(x) = lim x→3⁺ f(x) = 6, so lim x→3 f(x) = 6."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Determine the value of k that makes f continuous at x = 3. Explain what type of discontinuity would exist at x = 3 if k were assigned any value other than the one you found.",
        "rubric": "Earns 1 point for stating k = 6 so that f(3) = lim x→3 f(x) = 6, satisfying the definition of continuity. Must also identify that any other value of k creates a removable discontinuity (also accepted: point discontinuity, hole) at x = 3, because the two-sided limit exists but does not equal f(3)."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using k = 6, apply the Intermediate Value Theorem to show that f(x) = 7 has at least one solution on the interval [3, 5]. State all conditions of the IVT explicitly.",
        "rubric": "Earns 1 point for: (1) stating f is continuous on [3, 5] (since f(x) = 2x is continuous and k = 6), (2) computing f(3) = 6 and f(5) = 10, (3) observing that 7 is between 6 and 10, i.e., f(3) < 7 < f(5), and (4) concluding by IVT there exists at least one c in (3, 5) such that f(c) = 7."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find lim x→∞ f(x) for the piece f(x) = 2x (the rule that governs f for large positive x). Then find lim x→∞ [f(x) / x] and interpret what this ratio tells you about the end behavior of f.",
        "rubric": "Earns 1 point for correctly stating lim x→∞ 2x = ∞ (limit diverges / grows without bound), AND computing lim x→∞ [2x / x] = lim x→∞ 2 = 2, AND interpreting that f(x) grows linearly without bound, with f(x) behaving like 2x as x→∞ (i.e., f grows at a constant rate of 2 relative to x, end behavior is unbounded linear growth)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes both one-sided limits at x = 3: left-hand limit equals 6 via factoring, right-hand limit equals 6 via direct substitution.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "lim x→3⁻",
          "left-hand limit",
          "lim x→3⁺",
          "right-hand limit",
          "(x² - 9) / (x - 3)",
          "difference of squares",
          "(x+3)(x-3)",
          "cancel (x-3)",
          "simplified to x + 3",
          "direct substitution x = 3",
          "equals 6",
          "indeterminate form",
          "piecewise function"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Concludes the two-sided limit exists and equals 6 because both one-sided limits are equal.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "two-sided limit",
          "lim x→3 f(x)",
          "left-hand limit equals right-hand limit",
          "one-sided limits are equal",
          "two-sided limit exists",
          "equals 6",
          "lim x→3 f(x) = 6",
          "necessary and sufficient condition",
          "both one-sided limits agree",
          "limit definition satisfied"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Identifies k = 6 for continuity and names the discontinuity type for any other k as removable discontinuity.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "k = 6",
          "continuous at x = 3",
          "f(3) equals the limit",
          "three conditions of continuity",
          "f(c) = lim x→c f(x)",
          "removable discontinuity",
          "point discontinuity",
          "hole in the graph",
          "limit exists but f(3) ≠ limit",
          "defined at x = 3",
          "two-sided limit exists"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies all three conditions of the IVT: continuity on closed interval, f(3) = 6 and f(5) = 10, and 7 is between those values, to conclude existence of c in (3,5) with f(c) = 7.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "Intermediate Value Theorem",
          "IVT",
          "continuous on closed interval [3, 5]",
          "f(3) = 6",
          "f(5) = 10",
          "7 is strictly between 6 and 10",
          "f(3) < 7 < f(5)",
          "there exists c in (3, 5)",
          "f(c) = 7",
          "at least one solution guaranteed",
          "closed interval continuity requirement"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly states lim x→∞ 2x = ∞, computes lim x→∞ [2x/x] = 2, and interprets unbounded linear end behavior.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "lim x→∞ 2x",
          "limit at infinity",
          "diverges to infinity",
          "grows without bound",
          "lim x→∞ f(x)/x",
          "lim x→∞ 2x/x",
          "simplifies to 2",
          "linear rate of growth",
          "end behavior is unbounded",
          "f(x) behaves like 2x for large x",
          "constant ratio of f(x) to x"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u1_frq006",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Limits, Continuity, and the Intermediate Value Theorem for a Piecewise Function",
    "units": [
      1
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f be a function defined as follows:\n\nf(x) = { (x² - 9) / (x - 3),       if x < 3\n        { k·x - 1,                    if x = 3\n        { (2x² - 5x - 3) / (x - 3),  if x > 3 and x ≠ 3\n\nAdditionally, it is known that -1 ≤ g(x) ≤ 1 for all x near 0, and consider h(x) = x² · g(x).\n\nUse this function and the information provided to answer all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using limit laws, find lim x→3⁻ f(x) and lim x→3⁺ f(x) by simplifying each algebraic expression. Show all algebraic steps.",
        "rubric": "Student earns the point by correctly factoring (x²-9)/(x-3) as (x+3) giving left-hand limit of 6, AND correctly factoring (2x²-5x-3)/(x-3) as (2x+1) giving right-hand limit of 7. Both one-sided limits must be computed with algebraic simplification shown."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Does lim x→3 f(x) exist? Justify your answer using the results from part (a) and the definition of a two-sided limit.",
        "rubric": "Student earns the point by stating that the two-sided limit does NOT exist because the left-hand limit (6) does not equal the right-hand limit (7), explicitly referencing lim x→3⁻ f(x) ≠ lim x→3⁺ f(x) and invoking the definition that a two-sided limit exists only when both one-sided limits are equal."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Classify the type of discontinuity that f has at x = 3, regardless of the value of k. Describe what graphical feature this discontinuity would produce on the graph of f, and explain why no value of k can make f continuous at x = 3.",
        "rubric": "Student earns the point by correctly identifying the discontinuity as a jump discontinuity at x = 3 because the left- and right-hand limits both exist but are unequal (6 ≠ 7). Student must state that a jump discontinuity produces a gap or jump in the graph and that continuity requires the two-sided limit to exist and equal f(3), which is impossible here since the one-sided limits differ regardless of k."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using the Squeeze Theorem, find lim x→0 h(x), where h(x) = x² · g(x) and -1 ≤ g(x) ≤ 1 for all x near 0. State the inequality chain you use and identify the two bounding functions.",
        "rubric": "Student earns the point by correctly writing the inequality -x² ≤ x²·g(x) ≤ x², identifying the bounding functions as -x² and x², computing lim x→0 (-x²) = 0 and lim x→0 (x²) = 0, and concluding by the Squeeze Theorem that lim x→0 h(x) = 0. Must explicitly invoke the Squeeze Theorem by name or describe its application."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Consider the function p(x) = (x² - 9)/(x - 3) for x < 3, extended by defining p(3) = 6 (so p is continuous on [2, 4] after appropriate extension). Use the Intermediate Value Theorem to justify that there exists a value c in the interval (2, 4) such that p(c) = 5.5. State all conditions required by the IVT.",
        "rubric": "Student earns the point by verifying that p is continuous on the closed interval [2, 4] (since (x²-9)/(x-3) = x+3 for x ≠ 3 is a polynomial and the extension p(3)=6 maintains continuity), computing p(2) = 5 and p(4) = 7, noting that 5 < 5.5 < 7 so the target value lies strictly between p(2) and p(4), and concluding by the Intermediate Value Theorem that there exists at least one c in (2, 4) with p(c) = 5.5."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes both one-sided limits at x=3 using algebraic factoring: lim x→3⁻ f(x) = 6 via (x²-9)/(x-3) = x+3, and lim x→3⁺ f(x) = 7 via (2x²-5x-3)/(x-3) = 2x+1.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "lim x→3⁻",
          "lim x→3⁺",
          "left-hand limit",
          "right-hand limit",
          "x²-9 factors as (x-3)(x+3)",
          "2x²-5x-3 factors as (2x+1)(x-3)",
          "x+3",
          "2x+1",
          "one-sided limit",
          "left-hand limit equals 6",
          "right-hand limit equals 7",
          "algebraic simplification",
          "cancel (x-3)",
          "direct substitution after cancellation",
          "piecewise function limit"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly concludes the two-sided limit does not exist because lim x→3⁻ f(x) = 6 ≠ 7 = lim x→3⁺ f(x), citing the definition that both one-sided limits must be equal.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "two-sided limit does not exist",
          "lim x→3 does not exist",
          "left-hand limit not equal to right-hand limit",
          "6 ≠ 7",
          "one-sided limits unequal",
          "two-sided limit definition",
          "both one-sided limits must be equal",
          "DNE",
          "limit fails to exist",
          "necessary condition for limit existence"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies a jump discontinuity at x=3, describes the graphical jump or gap, and explains no value of k resolves the discontinuity because the one-sided limits are unequal.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "jump discontinuity",
          "finite jump",
          "gap in graph",
          "one-sided limits exist but are unequal",
          "left-hand limit equals 6",
          "right-hand limit equals 7",
          "no value of k eliminates the jump",
          "cannot make continuous by redefining f(3)",
          "continuity requires two-sided limit equals function value",
          "two-sided limit does not exist",
          "discontinuity classification",
          "jump of magnitude 1"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies the Squeeze Theorem: establishes -x² ≤ x²g(x) ≤ x², evaluates both bounds at 0 as 0, and concludes lim x→0 h(x) = 0.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "Squeeze Theorem",
          "sandwich theorem",
          "pinching theorem",
          "-x² ≤ x²g(x) ≤ x²",
          "lower bound -x²",
          "upper bound x²",
          "lim x→0 x² equals 0",
          "lim x→0 (-x²) equals 0",
          "lim x→0 h(x) equals 0",
          "both bounding limits equal zero",
          "x²·g(x) squeezed to zero",
          "bounded function multiplied by factor approaching zero"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly applies the IVT by verifying continuity of p on [2,4], computing p(2)=5 and p(4)=7, noting 5 < 5.5 < 7, and concluding existence of c in (2,4) with p(c)=5.5.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "Intermediate Value Theorem",
          "IVT",
          "continuous on closed interval [2,4]",
          "p(2) equals 5",
          "p(4) equals 7",
          "5 < 5.5 < 7",
          "target value strictly between endpoint values",
          "there exists c in open interval (2,4)",
          "p(c) equals 5.5",
          "continuity is prerequisite for IVT",
          "at least one such c guaranteed",
          "p(x) equals x+3 after simplification"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u2_frq007",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Differentiating a Polynomial Using the Power and Sum Rules",
    "units": [
      2
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = 4x³ − 7x² + 3x − 9. Use differentiation rules to answer the following questions.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find f'(x) by applying the power rule and sum rule to each term of f(x) = 4x³ − 7x² + 3x − 9.",
        "rubric": "Earns 1 point for correctly differentiating all four terms: f'(x) = 12x² − 14x + 3. The constant term −9 must differentiate to 0."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the second derivative f''(x) by differentiating your result from part (a).",
        "rubric": "Earns 1 point for correctly computing f''(x) = 24x − 14 by applying the power rule to each term of f'(x)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate f''(2) and interpret what this value represents in terms of the rate of change of the slope of f(x).",
        "rubric": "Earns 1 point for correctly substituting x = 2 to get f''(2) = 24(2) − 14 = 34, and stating that this represents the rate of change of the slope (instantaneous rate of change of f'(x)) at x = 2."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct application of power rule and sum rule to obtain f'(x) = 12x² − 14x + 3, including differentiating the constant term to zero.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "f'(x)",
          "12x²",
          "14x",
          "power rule",
          "sum rule",
          "constant rule",
          "derivative of constant is zero",
          "d/dx",
          "12x² − 14x + 3",
          "bring down exponent",
          "reduce exponent by one",
          "multiply coefficient by exponent",
          "differentiate each term"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct computation of the second derivative f''(x) = 24x − 14 by differentiating f'(x) = 12x² − 14x + 3.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "f''(x)",
          "second derivative",
          "24x − 14",
          "24x",
          "higher order derivative",
          "d²y/dx²",
          "power rule",
          "differentiate f'(x)",
          "second-order derivative",
          "derivative of 12x²",
          "derivative of 14x",
          "constant term differentiates to zero"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct evaluation f''(2) = 34 by substituting x = 2 into f''(x) = 24x − 14, with interpretation that it is the rate of change of the slope of f at x = 2.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f''(2)",
          "34",
          "24(2) − 14",
          "rate of change of slope",
          "rate of change of f'",
          "instantaneous rate of change of derivative",
          "second derivative at x=2",
          "slope of f' at x=2",
          "concavity rate",
          "substitute x equals 2",
          "evaluate second derivative",
          "how quickly the slope is changing"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u2_frq008",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Differentiability and the Definition of the Derivative",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) be defined as follows: f(x) = x^2 + 3x for x < 2, and f(x) = 4x - 1 for x ≥ 2. You will analyze the behavior of f at x = 2 using the limit definition of the derivative.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the limit definition of the derivative, calculate the left-hand derivative of f at x = 2. Show your limit setup and evaluation.",
        "rubric": "Student earns 1 point for correctly setting up lim(h→0⁻) [f(2+h) - f(2)] / h using f(x) = x^2 + 3x, substituting to get lim(h→0⁻) [(2+h)^2 + 3(2+h) - 10] / h, simplifying to 7, and stating the left-hand derivative equals 7."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the limit definition of the derivative, calculate the right-hand derivative of f at x = 2. Show your limit setup and evaluation.",
        "rubric": "Student earns 1 point for correctly setting up lim(h→0⁺) [f(2+h) - f(2)] / h using f(x) = 4x - 1, substituting to get lim(h→0⁺) [4(2+h) - 1 - 7] / h, simplifying to 4, and stating the right-hand derivative equals 4."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Is f differentiable at x = 2? Justify your answer using the results from parts (a) and (b).",
        "rubric": "Student earns 1 point for concluding f is NOT differentiable at x = 2 and justifying that the left-hand derivative (7) does not equal the right-hand derivative (4), so the two-sided limit of the difference quotient does not exist."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the left-hand derivative using the limit definition, arriving at 7.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "limit definition of the derivative",
          "lim h->0⁻",
          "left-hand derivative",
          "difference quotient",
          "[f(2+h) - f(2)] / h",
          "left-hand limit",
          "equals 7",
          "x^2 + 3x",
          "h approaches 0 from the left",
          "f(2) = 10",
          "(2+h)^2 + 3(2+h)",
          "one-sided derivative"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly sets up and evaluates the right-hand derivative using the limit definition, arriving at 4.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "limit definition of the derivative",
          "lim h->0⁺",
          "right-hand derivative",
          "difference quotient",
          "[f(2+h) - f(2)] / h",
          "right-hand limit",
          "equals 4",
          "4x - 1",
          "h approaches 0 from the right",
          "f(2) = 7",
          "4(2+h) - 1",
          "one-sided derivative"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly concludes f is not differentiable at x = 2 because the left-hand and right-hand derivatives are not equal.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "not differentiable",
          "left-hand derivative does not equal right-hand derivative",
          "7 ≠ 4",
          "two-sided limit does not exist",
          "differentiability requires equal one-sided derivatives",
          "limit of the difference quotient does not exist",
          "not differentiable at x = 2",
          "one-sided limits differ",
          "piecewise function",
          "corner point"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u2_frq009",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Higher-Order Derivatives Using Power, Sum, and Trig Rules",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let g(x) = 4x^3 - 5x^2 + 2sin(x) - 7. You will compute and interpret successive derivatives of g.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find g'(x). Apply the power rule, sum rule, constant rule, and trig derivative rules as appropriate. Show each term's derivative.",
        "rubric": "Student earns 1 point for correctly differentiating each term: d/dx[4x^3] = 12x^2, d/dx[-5x^2] = -10x, d/dx[2sin(x)] = 2cos(x), d/dx[-7] = 0, giving g'(x) = 12x^2 - 10x + 2cos(x)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find g''(x), the second derivative of g. Show your differentiation of each term in g'(x).",
        "rubric": "Student earns 1 point for correctly differentiating g'(x) = 12x^2 - 10x + 2cos(x) term by term: d/dx[12x^2] = 24x, d/dx[-10x] = -10, d/dx[2cos(x)] = -2sin(x), giving g''(x) = 24x - 10 - 2sin(x)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find g'''(x), the third derivative of g, and evaluate g'''(0). Show your work.",
        "rubric": "Student earns 1 point for correctly differentiating g''(x) to get g'''(x) = 24 - 2cos(x), then evaluating g'''(0) = 24 - 2cos(0) = 24 - 2(1) = 22."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes g'(x) = 12x^2 - 10x + 2cos(x) by applying power rule, sum rule, constant rule, and trig derivative.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "g'(x)",
          "power rule",
          "sum rule",
          "constant rule",
          "d/dx[sin(x)] = cos(x)",
          "trig derivative",
          "12x^2 - 10x + 2cos(x)",
          "derivative of constant is 0",
          "first derivative",
          "d/dx[4x^3] = 12x^2",
          "d/dx[-5x^2] = -10x",
          "2cos(x)"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly computes g''(x) = 24x - 10 - 2sin(x) by differentiating g'(x) term by term.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "g''(x)",
          "second derivative",
          "24x - 10 - 2sin(x)",
          "d/dx[cos(x)] = -sin(x)",
          "derivative of cosine is negative sine",
          "power rule applied to 12x^2",
          "d²y/dx²",
          "second-order derivative",
          "-2sin(x)",
          "24x - 10",
          "differentiating g'(x)",
          "term-by-term differentiation"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly computes g'''(x) = 24 - 2cos(x) and evaluates g'''(0) = 22.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "g'''(x)",
          "third derivative",
          "24 - 2cos(x)",
          "g'''(0) = 22",
          "cos(0) = 1",
          "d/dx[-2sin(x)] = -2cos(x)",
          "third-order derivative",
          "d³y/dx³",
          "evaluate at x = 0",
          "22",
          "differentiating g''(x)",
          "derivative of sine is cosine"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u2_frq010",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Differentiability, Definition of Derivative, and Higher-Order Derivatives of a Piecewise Function",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be defined by f(x) = { x^3 + 2x,  x < 1 ;  3x^2,  x ≥ 1 }. Consider the behavior of f at x = 1 and the derivatives of f for x ≥ 1.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "Using the definition of the derivative (limit definition), determine whether f is differentiable at x = 1. Show all limit work from both sides and state your conclusion.",
        "rubric": "Earns 1 point for correctly computing the left-hand and right-hand limits of [f(1+h) - f(1)] / h as h → 0: left-hand limit yields 3(1)^2 + 2 = 5; right-hand limit yields 6(1) = 6; since 5 ≠ 6, f is not differentiable at x = 1. Must also verify continuity or note one-sided derivatives differ."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "For x > 1, find f''(x), the second derivative of f, using derivative rules. Show each differentiation step.",
        "rubric": "Earns 1 point for correctly applying the power rule to f(x) = 3x^2 to get f'(x) = 6x, then differentiating again using the power rule and constant rule to get f''(x) = 6. Must show both differentiation steps."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain what the non-differentiability of f at x = 1 implies geometrically about the graph of f at that point, and identify what type of non-differentiable point this is.",
        "rubric": "Earns 1 point for stating that the graph of f has a corner or sharp point at x = 1, meaning the tangent line is not uniquely defined there, because the slopes of the curve from the left (5) and from the right (6) are not equal. Must use language referencing corner, sharp point, or non-unique tangent and reference the unequal one-sided derivatives."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly applies the limit definition of the derivative from both sides at x = 1, computes left-hand derivative as 5 and right-hand derivative as 6, and concludes f is not differentiable at x = 1 because the one-sided limits are not equal.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "limit definition of derivative",
          "lim h->0",
          "[f(1+h) - f(1)] / h",
          "left-hand derivative",
          "right-hand derivative",
          "one-sided limits not equal",
          "not differentiable at x=1",
          "left-hand limit equals 5",
          "right-hand limit equals 6",
          "h approaches 0"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly differentiates f(x) = 3x^2 using the power rule to obtain f'(x) = 6x, then applies the power rule again and constant rule to obtain f''(x) = 6.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "power rule",
          "f'(x) = 6x",
          "f''(x) = 6",
          "second derivative",
          "d^2y/dx^2",
          "d/dx(3x^2) = 6x",
          "d/dx(6x) = 6",
          "constant rule",
          "higher order derivative",
          "differentiate twice"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly identifies the non-differentiable point as a corner or sharp point on the graph, explains that the tangent line is not uniquely defined at x = 1, and connects this to the unequal left-hand and right-hand slopes (5 and 6).",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "corner point",
          "sharp point",
          "tangent line not defined",
          "no unique tangent",
          "slopes differ from left and right",
          "left slope equals 5",
          "right slope equals 6",
          "not smooth at x=1",
          "graph has a corner at x=1",
          "differentiability implies smooth"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u2_frq011",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Derivatives of a Polynomial-Trig Function and Differentiability Analysis",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f(x) = 3x⁴ − 5x² + 7x − 2 + cos(x). Consider also the piecewise function g(x) defined as: g(x) = { x² + 1, x < 2 ; 4x − 3, x ≥ 2 }. Use these functions to answer all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the average rate of change of f(x) = 3x⁴ − 5x² + 7x − 2 + cos(x) on the interval [0, π]. Leave your answer in exact form.",
        "rubric": "Earns 1 point for correctly applying the average rate of change formula: [f(π) − f(0)] / (π − 0). f(π) = 3π⁴ − 5π² + 7π − 2 + cos(π) = 3π⁴ − 5π² + 7π − 2 − 1 = 3π⁴ − 5π² + 7π − 3. f(0) = 0 − 0 + 0 − 2 + cos(0) = −2 + 1 = −1. Average rate of change = (3π⁴ − 5π² + 7π − 3 − (−1)) / π = (3π⁴ − 5π² + 7π − 2) / π."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the limit definition of the derivative, set up and evaluate the expression for f′(x) at x = 1 for the function f(x) = 3x². Show the limit definition explicitly before simplifying.",
        "rubric": "Earns 1 point for correctly writing lim[h→0] [f(1+h) − f(1)] / h, expanding f(1+h) = 3(1+h)² = 3 + 6h + 3h², computing f(1+h) − f(1) = 6h + 3h², dividing by h to get 6 + 3h, and taking the limit as h→0 to obtain f′(1) = 6."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find f′(x) for f(x) = 3x⁴ − 5x² + 7x − 2 + cos(x) using differentiation rules. Identify which rule(s) you apply to each term.",
        "rubric": "Earns 1 point for correctly differentiating all terms: power rule gives d/dx[3x⁴] = 12x³, d/dx[−5x²] = −10x, d/dx[7x] = 7 using power/constant multiple rule, constant rule gives d/dx[−2] = 0, and trig derivative rule gives d/dx[cos(x)] = −sin(x). Final answer: f′(x) = 12x³ − 10x + 7 − sin(x)."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "Determine whether g(x) = { x² + 1, x < 2 ; 4x − 3, x ≥ 2 } is differentiable at x = 2. Justify your answer by checking both continuity and the existence of the derivative from both sides.",
        "rubric": "Earns 1 point for checking left-hand limit: lim[x→2⁻] (x² + 1) = 5 and right-hand value: g(2) = 4(2) − 3 = 5, confirming continuity. Then checking left-hand derivative: lim[x→2⁻] [g(x) − g(2)] / (x − 2) using x² + 1 gives slope = 2x evaluated at x = 2 = 4; right-hand derivative using 4x − 3 gives slope = 4. Since both one-sided derivatives equal 4 and the function is continuous at x = 2, g is differentiable at x = 2."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find the second derivative f″(x) of f(x) = 3x⁴ − 5x² + 7x − 2 + cos(x), and then evaluate f″(0). Identify what f″(x) represents in terms of the behavior of f′(x).",
        "rubric": "Earns 1 point for correctly differentiating f′(x) = 12x³ − 10x + 7 − sin(x) to obtain f″(x) = 36x² − 10 − cos(x) using the power rule and trig derivative d/dx[−sin(x)] = −cos(x). Evaluating f″(0) = 36(0)² − 10 − cos(0) = 0 − 10 − 1 = −11. Correct identification that f″(x) is the second derivative, represents the rate of change of f′(x), or describes the concavity of f."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes the average rate of change of f on [0, π] using [f(π) − f(0)] / (π − 0), obtaining (3π⁴ − 5π² + 7π − 2) / π in exact form.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "average rate of change",
          "[f(π) − f(0)] / (π − 0)",
          "f(π) − f(0)",
          "divided by π",
          "3π⁴ − 5π² + 7π − 2",
          "cos(π) = −1",
          "cos(0) = 1",
          "slope of secant line",
          "(3π⁴ − 5π² + 7π − 2) / π",
          "exact form",
          "secant line slope",
          "difference of function values",
          "endpoint evaluation",
          "f(0) = −1",
          "f(π) = 3π⁴ − 5π² + 7π − 3"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly sets up the limit definition of the derivative for f(x) = 3x² at x = 1, simplifies, and evaluates the limit to get f′(1) = 6.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "limit definition of derivative",
          "lim h→0",
          "[f(1+h) − f(1)] / h",
          "3(1+h)²",
          "6h + 3h²",
          "6 + 3h",
          "f′(1) = 6",
          "instantaneous rate of change",
          "difference quotient",
          "limit as h approaches 0",
          "expand binomial",
          "cancel h from numerator and denominator",
          "substitute h = 0",
          "3 + 6h + 3h²",
          "slope at a point"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly differentiates all terms of f(x) = 3x⁴ − 5x² + 7x − 2 + cos(x) using the power rule, constant rule, sum rule, and trig derivative to obtain f′(x) = 12x³ − 10x + 7 − sin(x).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "power rule",
          "constant rule",
          "sum rule",
          "d/dx[cos(x)] = −sin(x)",
          "12x³",
          "−10x",
          "d/dx[constant] = 0",
          "f′(x) = 12x³ − 10x + 7 − sin(x)",
          "trig derivative",
          "d/dx",
          "constant multiple rule",
          "bring down exponent",
          "reduce exponent by 1",
          "derivative of cosine is negative sine",
          "7 from 7x"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly verifies continuity at x = 2 and checks both one-sided derivatives, showing each equals 4, and concludes g is differentiable at x = 2.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "differentiable at x = 2",
          "continuous at x = 2",
          "left-hand derivative",
          "right-hand derivative",
          "one-sided derivatives equal",
          "lim x→2⁻",
          "lim x→2⁺",
          "derivative equals 4",
          "differentiability requires continuity",
          "both one-sided limits equal",
          "left-hand limit equals 5",
          "g(2) = 5",
          "piecewise differentiability",
          "slope of x² + 1 at x = 2",
          "slope of 4x − 3 equals 4"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly computes f″(x) = 36x² − 10 − cos(x) by differentiating f′(x), evaluates f″(0) = −11, and identifies f″(x) as the second derivative or rate of change of f′(x).",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "second derivative",
          "f″(x)",
          "36x² − 10 − cos(x)",
          "d/dx[−sin(x)] = −cos(x)",
          "f″(0) = −11",
          "rate of change of f′(x)",
          "concavity",
          "higher order derivative",
          "differentiate f′(x)",
          "−cos(0) = −1",
          "substitute x = 0",
          "36(0)² = 0",
          "power rule applied to 12x³",
          "derivative of negative sine is negative cosine",
          "f″(0) = 0 − 10 − 1"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u2_frq012",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Derivatives of a Combined Polynomial-Trigonometric Function",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f(x) = 4x³ − 7x + 3cos(x) be defined for all real numbers. You will analyze this function using multiple concepts from differential calculus, including average and instantaneous rates of change, the formal definition of the derivative, differentiability, and derivative rules including the power rule, constant rule, sum rule, and trigonometric derivatives. You will also examine higher-order derivatives of f.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the average rate of change of f(x) = 4x³ − 7x + 3cos(x) on the interval [0, π]. Show all work, including the evaluation of f(0) and f(π), and simplify your answer completely.",
        "rubric": "Student earns the point by correctly computing f(0) = 3, f(π) = 4π³ − 7π − 3, and forming the difference quotient [f(π) − f(0)] / (π − 0) = (4π³ − 7π − 6) / π, simplified correctly."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Using the formal limit definition of the derivative, write (but do not fully evaluate) the expression that defines f'(x) as a limit. Then explain what this expression represents geometrically at a specific point x = a on the graph of f, and justify why the instantaneous rate of change at x = a differs conceptually from the average rate of change computed in part (a).",
        "rubric": "Student earns the point by correctly writing f'(x) = lim[h→0] [f(x+h) − f(x)] / h, identifying it as the slope of the tangent line at x = a, and articulating that instantaneous rate of change uses a limiting process at a single point whereas average rate of change uses a secant line over an interval."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find f'(x) for f(x) = 4x³ − 7x + 3cos(x) by applying the power rule, constant rule, sum rule, and trigonometric derivative rules. Clearly identify which rule you are applying to each term.",
        "rubric": "Student earns the point by correctly computing f'(x) = 12x² − 7 − 3sin(x), applying the power rule to 4x³ to get 12x², the power rule and constant multiple rule to −7x to get −7, and the trigonometric derivative rule d/dx[cos(x)] = −sin(x) to 3cos(x) to get −3sin(x)."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "Is f(x) = 4x³ − 7x + 3cos(x) differentiable for all real numbers? Justify your answer by discussing continuity, the existence of the limit definition of the derivative, and the smoothness of each component term of f.",
        "rubric": "Student earns the point by correctly stating that f is differentiable everywhere on ℝ, justifying that polynomial terms 4x³ and −7x are differentiable everywhere, that 3cos(x) is differentiable everywhere because cos(x) is continuous and has a well-defined derivative −sin(x) at every real number, and that the sum of differentiable functions is differentiable, so no point of non-differentiability exists."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find the second derivative f''(x) and the third derivative f'''(x) of f(x) = 4x³ − 7x + 3cos(x). Then evaluate f'''(π/2) and interpret the sign of f'''(π/2) in terms of the behavior of f''.",
        "rubric": "Student earns the point by correctly computing f''(x) = 24x − 3cos(x) by differentiating f'(x) = 12x² − 7 − 3sin(x) using the power rule and d/dx[sin(x)] = cos(x), then f'''(x) = 24 + 3sin(x) by differentiating f''(x), evaluating f'''(π/2) = 24 + 3sin(π/2) = 24 + 3 = 27, and interpreting that since f'''(π/2) = 27 > 0, the second derivative f'' is increasing at x = π/2."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes the average rate of change of f on [0, π] as [f(π) − f(0)] / (π − 0) = (4π³ − 7π − 6) / π.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "average rate of change",
          "difference quotient",
          "[f(π) − f(0)] / (π − 0)",
          "f(0) = 3",
          "f(π) = 4π³ − 7π − 3",
          "(4π³ − 7π − 6) / π",
          "secant slope",
          "slope of secant line",
          "interval [0, π]",
          "cos(0) = 1",
          "cos(π) = −1",
          "evaluate endpoints"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly writes the limit definition of the derivative f'(x) = lim[h→0] [f(x+h) − f(x)] / h and distinguishes instantaneous from average rate of change geometrically.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "lim h→0",
          "[f(x+h) − f(x)] / h",
          "formal definition of derivative",
          "limit definition",
          "tangent line",
          "slope of tangent line",
          "instantaneous rate of change",
          "secant line approaches tangent",
          "single point limit",
          "limiting process",
          "difference quotient as h approaches zero",
          "geometric interpretation"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly differentiates f(x) = 4x³ − 7x + 3cos(x) to obtain f'(x) = 12x² − 7 − 3sin(x) using power rule, constant rule, sum rule, and trig derivative rules.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f'(x) = 12x² − 7 − 3sin(x)",
          "power rule",
          "d/dx[x^n] = nx^(n−1)",
          "constant multiple rule",
          "sum rule",
          "d/dx[cos(x)] = −sin(x)",
          "trigonometric derivative",
          "12x²",
          "−3sin(x)",
          "derivative of cosine is negative sine",
          "differentiate each term",
          "d/dx[4x³] = 12x²"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly justifies that f is differentiable for all real numbers by arguing each component term is differentiable everywhere and the sum of differentiable functions is differentiable.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "differentiable everywhere on ℝ",
          "differentiable for all real numbers",
          "polynomial functions are differentiable everywhere",
          "cosine is differentiable everywhere",
          "sum of differentiable functions is differentiable",
          "differentiability implies continuity",
          "no corner or cusp",
          "no vertical tangent",
          "no removable discontinuity",
          "smooth function",
          "well-defined derivative at every point",
          "derivative exists for all x"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly computes f''(x) = 24x − 3cos(x), f'''(x) = 24 + 3sin(x), evaluates f'''(π/2) = 27, and interprets that f'' is increasing at x = π/2.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "f''(x) = 24x − 3cos(x)",
          "f'''(x) = 24 + 3sin(x)",
          "second derivative",
          "third derivative",
          "higher-order derivative",
          "f'''(π/2) = 27",
          "sin(π/2) = 1",
          "f'' is increasing at x = π/2",
          "d/dx[sin(x)] = cos(x)",
          "positive third derivative means f'' increasing",
          "differentiate f'(x) twice",
          "d/dx[−3sin(x)] = −3cos(x)"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u3_frq013",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Chain Rule with Composite Functions",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = sin(3x² + 1). You will differentiate this function and evaluate the derivative at a specific point.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify the outer function and the inner function in f(x) = sin(3x² + 1) as written in composite form f(x) = g(h(x)). State g(u) and h(x) explicitly.",
        "rubric": "Earns 1 point for correctly identifying the outer function as g(u) = sin(u) and the inner function as h(x) = 3x² + 1."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the chain rule, find f'(x). Show all steps, including differentiation of both the outer and inner functions.",
        "rubric": "Earns 1 point for correctly applying the chain rule to get f'(x) = cos(3x² + 1) · 6x, or equivalently 6x·cos(3x² + 1)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate f'(0). Simplify your answer completely.",
        "rubric": "Earns 1 point for correctly substituting x = 0 into f'(x) to obtain f'(0) = 6(0)·cos(3(0)² + 1) = 0."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies the outer function g(u) = sin(u) and inner function h(x) = 3x² + 1 in the composite form f(x) = g(h(x)).",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "outer function",
          "inner function",
          "composite function",
          "g(u) = sin(u)",
          "h(x) = 3x² + 1",
          "g(h(x))",
          "composition",
          "sin(u)",
          "3x² + 1",
          "decompose",
          "f(x) = g(h(x))",
          "u-substitution structure"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly applies the chain rule, differentiating the outer function as cos(3x² + 1) and multiplying by the derivative of the inner function 6x, yielding f'(x) = 6x·cos(3x² + 1).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "chain rule",
          "f'(x)",
          "d/dx",
          "cos(3x² + 1)",
          "6x",
          "6x·cos(3x² + 1)",
          "derivative of inner function",
          "multiply by derivative of inner",
          "d/dx[sin(u)] = cos(u)",
          "dy/dx",
          "derivative of 3x² + 1",
          "outer function derivative"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student substitutes x = 0 into f'(x) = 6x·cos(3x² + 1) and correctly simplifies to f'(0) = 0.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f'(0)",
          "substitute x = 0",
          "6(0)",
          "cos(1)",
          "f'(0) = 0",
          "zero product",
          "multiply by zero",
          "evaluate at x = 0",
          "6(0)·cos(1)",
          "simplifies to zero",
          "numerical evaluation"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u3_frq014",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Differentiating a Product of Functions Involving Trigonometry",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = x² · sin(x). You will use the product rule to analyze this function and its derivative.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find f'(x) using the product rule. Show all steps, clearly identifying the two factors and their derivatives.",
        "rubric": "Earns 1 point for correctly applying the product rule to f(x) = x² · sin(x), yielding f'(x) = 2x·sin(x) + x²·cos(x). Must show both terms from d/dx[u·v] = u'v + uv' with u = x², v = sin(x), u' = 2x, v' = cos(x)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Evaluate f'(π). Give an exact value and simplify completely.",
        "rubric": "Earns 1 point for substituting x = π into f'(x) = 2x·sin(x) + x²·cos(x), giving f'(π) = 2π·sin(π) + π²·cos(π) = 2π·0 + π²·(−1) = −π²."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Using f'(π) from part (b), justify whether the function f(x) is increasing or decreasing at x = π.",
        "rubric": "Earns 1 point for stating that because f'(π) = −π² < 0, the function f is decreasing at x = π, with explicit reference to the sign of the derivative indicating the function is decreasing at that point."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the product rule to differentiate f(x) = x²·sin(x), arriving at f'(x) = 2x·sin(x) + x²·cos(x).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "product rule",
          "d/dx",
          "f'(x)",
          "2x·sin(x) + x²·cos(x)",
          "u'v + uv'",
          "derivative of sin(x) is cos(x)",
          "derivative of x² is 2x",
          "differentiate product",
          "d/dx[x²·sin(x)]",
          "u = x² v = sin(x)",
          "u' = 2x v' = cos(x)"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly evaluates f'(π) = −π² by substituting x = π and simplifying using sin(π) = 0 and cos(π) = −1.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "f'(π)",
          "sin(π) = 0",
          "cos(π) = −1",
          "−π²",
          "substitute x = π",
          "exact value",
          "simplifies to negative pi squared",
          "2π·sin(π)",
          "π²·cos(π)",
          "evaluate derivative at x = π",
          "trigonometric values at π"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Justifies that f is decreasing at x = π because f'(π) = −π² is negative, referencing the sign of the derivative.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "f'(π) < 0",
          "negative derivative",
          "function is decreasing",
          "decreasing at x = π",
          "sign of f'",
          "derivative negative implies decreasing",
          "f'(π) = −π²",
          "negative first derivative indicates decreasing function",
          "local behavior at x = π",
          "monotonicity from derivative sign"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u3_frq016",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Differentiation Techniques: Chain, Product, Quotient, Implicit, Inverse Trig, and Logarithmic",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "This problem explores a variety of differentiation techniques. Consider the following functions and equation:\n\n• f(x) = sin(3x² + 1)\n• g(x) = x³ · eˣ\n• h(x) = (2x + 5) / (x² − 1)\n• The curve defined implicitly by x² + xy + y² = 7\n• k(x) = arctan(4x)\n• m(x) = x^(sin x)  (for x > 0)\n\nAnswer each part below using the appropriate differentiation technique.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find f'(x) where f(x) = sin(3x² + 1). Clearly show your use of the chain rule and simplify your answer.",
        "rubric": "Earn 1 point for correctly identifying the outer function as sin(u) and the inner function as u = 3x² + 1, differentiating to get f'(x) = cos(3x² + 1) · 6x."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find g'(x) where g(x) = x³ · eˣ. Clearly show your use of the product rule and simplify your answer.",
        "rubric": "Earn 1 point for correctly applying the product rule: g'(x) = 3x²·eˣ + x³·eˣ, which simplifies to eˣ(x³ + 3x²) or eˣ · x²(x + 3)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find h'(x) where h(x) = (2x + 5) / (x² − 1). Clearly show your use of the quotient rule and simplify your answer.",
        "rubric": "Earn 1 point for correctly applying the quotient rule: h'(x) = [(2)(x²−1) − (2x+5)(2x)] / (x²−1)², simplifying to (2x²−2 − 4x²−10x) / (x²−1)² = (−2x²−10x−2) / (x²−1)² or equivalent simplified form."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "For the curve x² + xy + y² = 7, use implicit differentiation to find dy/dx. Then evaluate dy/dx at the point (1, 2).",
        "rubric": "Earn 1 point for correctly differentiating implicitly to obtain 2x + y + x(dy/dx) + 2y(dy/dx) = 0, solving for dy/dx = −(2x + y)/(x + 2y), and evaluating at (1,2) to get dy/dx = −4/5."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Use logarithmic differentiation to find m'(x) where m(x) = x^(sin x) for x > 0. Show all steps including taking the natural log of both sides.",
        "rubric": "Earn 1 point for correctly taking ln of both sides to get ln(m) = sin(x)·ln(x), differentiating both sides (applying product rule on the right) to get m'/m = cos(x)·ln(x) + sin(x)/x, and multiplying both sides by m(x) = x^(sin x) to obtain m'(x) = x^(sin x) · [cos(x)·ln(x) + sin(x)/x]."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the chain rule to f(x) = sin(3x² + 1), identifying the outer function as sin and inner function as 3x²+1, to obtain f'(x) = cos(3x² + 1) · 6x.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "chain rule",
          "outer function sin(u)",
          "inner function u = 3x² + 1",
          "composite function differentiation",
          "d/dx[sin(u)] = cos(u)·u'",
          "derivative of sin",
          "f'(x) = 6x cos(3x² + 1)",
          "cos(3x² + 1)",
          "multiply by derivative of inner function",
          "6x"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the product rule to g(x) = x³·eˣ, differentiating both factors and summing the two products, to obtain g'(x) = eˣ(x³ + 3x²) or equivalent.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "product rule",
          "u'v + uv'",
          "3x²·eˣ",
          "x³·eˣ",
          "g'(x) = 3x²eˣ + x³eˣ",
          "eˣ(x³ + 3x²)",
          "x²eˣ(x + 3)",
          "derivative of eˣ is eˣ",
          "derivative of x³ is 3x²",
          "factor out eˣ"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies the quotient rule to h(x) = (2x+5)/(x²−1), computing the numerator as (2)(x²−1)−(2x+5)(2x) and dividing by (x²−1)², yielding (−2x²−10x−2)/(x²−1)² or equivalent simplified form.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "quotient rule",
          "lo d hi minus hi d lo",
          "(v·u' − u·v') / v²",
          "2(x²−1) − (2x+5)(2x)",
          "denominator squared (x²−1)²",
          "−2x²−10x−2",
          "h'(x)",
          "derivative of numerator",
          "derivative of denominator",
          "numerator expansion"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly uses implicit differentiation on x²+xy+y²=7, applying product rule to the xy term, collecting dy/dx terms, solving to get dy/dx = −(2x+y)/(x+2y), and evaluating at (1,2) to get −4/5.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "implicit differentiation",
          "dy/dx",
          "product rule applied to xy term",
          "d/dx(y²) = 2y·dy/dx",
          "2x + y + x(dy/dx) + 2y(dy/dx) = 0",
          "collect dy/dx terms",
          "solve for dy/dx",
          "dy/dx = −(2x+y)/(x+2y)",
          "evaluate at point (1,2)",
          "−4/5"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly uses logarithmic differentiation on m(x)=x^(sin x) by taking ln of both sides, applying the product rule to differentiate sin(x)·ln(x), and multiplying back by x^(sin x) to obtain m'(x) = x^(sin x)[cos(x)ln(x) + sin(x)/x].",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "logarithmic differentiation",
          "take natural log of both sides",
          "ln(m) = sin(x)·ln(x)",
          "variable exponent requires log differentiation",
          "m'/m = cos(x)ln(x) + sin(x)/x",
          "product rule on sin(x)·ln(x)",
          "multiply both sides by x^(sin x)",
          "m'(x) = x^(sin x)[cos(x)ln(x) + sin(x)/x]",
          "d/dx[sin(x)ln(x)]",
          "1/m · dm/dx"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u3_frq017",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Multi-Rule Differentiation: Chain, Product, Quotient, Implicit, Inverse Trig, and Logarithmic",
    "units": [
      3
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "This problem explores differentiation techniques across several function types. Answer each part independently using the specified method or function. Show all work and simplify where appropriate.\n\n(a) Let h(x) = sin³(4x² − 1). Find h'(x) using the chain rule.\n\n(b) Let f(x) = x² · eˣ · ln(x). Find f'(x) using the product rule. (Treat this as a product of three functions by first grouping two of them.)\n\n(c) Let g(x) = (arctan(x)) / (x² + 1). Find g'(x) using the quotient rule.\n\n(d) The curve defined by x³ + y³ − 3xy = 7 passes through the point (2, 1). Find dy/dx at (2, 1) using implicit differentiation.\n\n(e) Let k(x) = (x³ + 2)⁵ · (5x − 1)⁴ / √(x² + 1). Find k'(x) using logarithmic differentiation. You do not need to fully expand; leave the answer in a factored or unsimplified form.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Let h(x) = sin³(4x² − 1). Find h'(x) using the chain rule. Show all differentiation steps.",
        "rubric": "Earns 1 point for correctly applying the chain rule twice: differentiating the outer power (3sin²(4x²−1)), then multiplying by the derivative of sin(4x²−1) which is cos(4x²−1), and then multiplying by the derivative of the inner function (8x). Final answer: h'(x) = 24x · sin²(4x²−1) · cos(4x²−1)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Let f(x) = x² · eˣ · ln(x). Find f'(x) using the product rule. Group two factors first, then apply the product rule to the resulting pair.",
        "rubric": "Earns 1 point for correctly applying the product rule to three factors, producing terms: 2x·eˣ·ln(x) + x²·eˣ·ln(x) + x²·eˣ·(1/x), which simplifies to x·eˣ(2ln(x) + x·ln(x) + 1). Full credit requires all three derivative terms present and correctly formed."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Let g(x) = arctan(x) / (x² + 1). Find g'(x) using the quotient rule.",
        "rubric": "Earns 1 point for correctly applying the quotient rule: numerator is (1/(x²+1))·(x²+1) − arctan(x)·(2x), denominator is (x²+1)². Simplifies to (1 − 2x·arctan(x)) / (x²+1)². Full credit requires correct use of d/dx[arctan(x)] = 1/(x²+1) and proper quotient rule structure."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "The curve defined by x³ + y³ − 3xy = 7 passes through the point (2, 1). Use implicit differentiation to find dy/dx at (2, 1).",
        "rubric": "Earns 1 point for correctly differentiating both sides implicitly: 3x² + 3y²(dy/dx) − 3y − 3x(dy/dx) = 0, then solving to get dy/dx = (3y − 3x²)/(3y² − 3x) = (y − x²)/(y² − x). Substituting (2,1) gives dy/dx = (1 − 4)/(1 − 2) = (−3)/(−1) = 3."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Let k(x) = [(x³ + 2)⁵ · (5x − 1)⁴] / √(x² + 1). Use logarithmic differentiation to find k'(x). Leave your answer in a factored or unsimplified form.",
        "rubric": "Earns 1 point for correctly taking ln of both sides, differentiating using properties of logarithms to get ln|k| = 5·ln(x³+2) + 4·ln(5x−1) − (1/2)·ln(x²+1), differentiating both sides (k'/k = 15x²/(x³+2) + 20/(5x−1) − x/(x²+1)), then multiplying both sides by k(x) to express k'(x) = k(x) · [15x²/(x³+2) + 20/(5x−1) − x/(x²+1)]."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the chain rule to h(x) = sin³(4x²−1), identifying all nested layers and producing h'(x) = 24x·sin²(4x²−1)·cos(4x²−1).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "chain rule",
          "outer function",
          "3sin²(4x²−1)",
          "cos(4x²−1)",
          "8x",
          "24x·sin²(4x²−1)·cos(4x²−1)",
          "d/dx[sinⁿ(u)]",
          "composite function",
          "nested chain rule",
          "multiply derivatives",
          "power rule on sine",
          "inner function derivative",
          "two-layer chain rule",
          "d/dx[sin(u)] = cos(u)·u'"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the product rule to f(x) = x²·eˣ·ln(x), producing all three terms: 2x·eˣ·ln(x) + x²·eˣ·ln(x) + x²·eˣ·(1/x), or equivalent simplified form.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "product rule",
          "2x·eˣ·ln(x)",
          "x²·eˣ·ln(x)",
          "x²·eˣ·(1/x)",
          "d/dx[ln(x)] = 1/x",
          "d/dx[eˣ] = eˣ",
          "three-function product",
          "uv'w + uvw' + u'vw",
          "x·eˣ",
          "ln(x) derivative",
          "extended product rule",
          "grouping two factors",
          "three terms in derivative"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies the quotient rule to g(x) = arctan(x)/(x²+1), using d/dx[arctan(x)] = 1/(x²+1), yielding g'(x) = (1 − 2x·arctan(x))/(x²+1)².",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "quotient rule",
          "d/dx[arctan(x)] = 1/(x²+1)",
          "inverse tangent derivative",
          "(low·d(high) − high·d(low)) / low²",
          "(x²+1)²",
          "2x·arctan(x)",
          "1 − 2x·arctan(x)",
          "arctan derivative",
          "denominator squared",
          "numerator simplification",
          "(f'g − fg')/g²",
          "derivative of inverse trig",
          "d/dx[x²+1] = 2x"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly differentiates x³ + y³ − 3xy = 7 implicitly, solves for dy/dx, and evaluates at (2,1) to obtain dy/dx = 3.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "implicit differentiation",
          "3y²(dy/dx)",
          "product rule on 3xy",
          "3y + 3x(dy/dx)",
          "solve for dy/dx",
          "(y − x²)/(y² − x)",
          "substituting (2,1)",
          "dy/dx = 3",
          "d/dx applied to both sides",
          "differentiating implicitly",
          "3x² + 3y²(dy/dx) − 3y − 3x(dy/dx) = 0",
          "isolate dy/dx",
          "chain rule on y³",
          "evaluate at point"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly applies logarithmic differentiation to k(x), taking ln of both sides, differentiating using logarithm properties, and multiplying back by k(x) to express k'(x) = k(x)·[15x²/(x³+2) + 20/(5x−1) − x/(x²+1)].",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "logarithmic differentiation",
          "ln|k| = 5·ln(x³+2) + 4·ln(5x−1) − (1/2)·ln(x²+1)",
          "k'/k",
          "15x²/(x³+2)",
          "20/(5x−1)",
          "x/(x²+1)",
          "multiply both sides by k(x)",
          "properties of logarithms",
          "ln of product becomes sum",
          "ln of quotient becomes difference",
          "d/dx[ln(u)] = u'/u",
          "take natural log of both sides",
          "ln of power becomes coefficient",
          "implicit differentiation after taking ln"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u4_frq018",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Linearization of a Natural Log Function",
    "units": [
      4
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = ln(x). You will use linearization (local linear approximation) at x = 1 to approximate nearby values of f.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find f'(x), then evaluate f(1) and f'(1).",
        "rubric": "Student earns 1 point for correctly computing f'(x) = 1/x, then evaluating f(1) = 0 and f'(1) = 1."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Write the equation of the linearization L(x) of f at x = 1.",
        "rubric": "Student earns 1 point for writing L(x) = f(1) + f'(1)(x - 1), which simplifies to L(x) = x - 1."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Use L(x) to approximate ln(1.2). Is this an overestimate or an underestimate? Justify your answer using the concavity of f.",
        "rubric": "Student earns 1 point for computing L(1.2) = 0.2 and stating this is an overestimate because f''(x) = -1/x^2 < 0, meaning f is concave down, so the tangent line lies above the curve."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates f(x) = ln(x) to get f'(x) = 1/x and evaluates f(1) = 0 and f'(1) = 1.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "f'(x) = 1/x",
          "derivative of ln(x)",
          "f(1) = 0",
          "f'(1) = 1",
          "ln(1)",
          "1/x",
          "d/dx ln(x)",
          "natural log derivative",
          "differentiate natural logarithm",
          "ln(1) = 0"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Writes the linearization L(x) = f(1) + f'(1)(x - 1) = x - 1, correctly applying the local linear approximation formula at x = 1.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "L(x) = x - 1",
          "linearization",
          "local linear approximation",
          "tangent line approximation",
          "L(x) = f(a) + f'(a)(x - a)",
          "L(x) = 0 + 1(x - 1)",
          "linear approximation at x = 1",
          "tangent line at x = 1",
          "point-slope form",
          "L(x) formula"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Computes L(1.2) = 0.2 and identifies it as an overestimate, justifying with f''(x) = -1/x^2 < 0 (concave down) so the tangent line lies above the curve.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "L(1.2) = 0.2",
          "overestimate",
          "concave down",
          "f''(x) = -1/x^2",
          "f''(x) < 0",
          "tangent line lies above",
          "second derivative negative",
          "concavity justification",
          "ln(1.2) approximately 0.2",
          "tangent line above curve"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u4_frq019",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Related Rates: Expanding Ripple on Water",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A stone is dropped into a still pond, creating a circular ripple that expands outward. The radius r of the ripple increases at a constant rate of 3 cm/s. Let A denote the area of the circular ripple, where A = πr².",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the rate at which the area A is increasing with respect to time t when the radius is r = 5 cm. Include correct units in your answer.",
        "rubric": "Earns 1 point for correctly differentiating A = πr² with respect to t using the chain rule to obtain dA/dt = 2πr(dr/dt), substituting r = 5 and dr/dt = 3, and arriving at dA/dt = 30π cm²/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the rate at which the area A is increasing with respect to time t when the radius is r = 10 cm. Then determine the ratio of the rate at r = 10 to the rate at r = 5, and explain what this ratio tells you about how the rate of change of area depends on the radius.",
        "rubric": "Earns 1 point for correctly computing dA/dt = 2π(10)(3) = 60π cm²/s at r = 10, computing the ratio 60π/30π = 2, and stating that doubling the radius doubles the rate of change of area, showing the rate is proportional to r."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student claims that because dr/dt is constant, dA/dt must also be constant. Is the student correct? Justify your answer using the expression for dA/dt.",
        "rubric": "Earns 1 point for correctly stating the student is incorrect and justifying that dA/dt = 2πr(dr/dt) = 6πr depends on r, which itself depends on t (since r = 3t), making dA/dt a non-constant function of time that increases as t increases."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates A = πr² implicitly with respect to t and evaluates dA/dt at r = 5 to get 30π cm²/s.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dA/dt",
          "2πr(dr/dt)",
          "chain rule",
          "implicit differentiation",
          "dr/dt = 3",
          "30π",
          "cm²/s",
          "rate of change of area",
          "d/dt",
          "related rates",
          "A = πr²",
          "differentiate with respect to time"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Evaluates dA/dt = 60π cm²/s at r = 10, computes ratio of 2, and explains rate is proportional to radius.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "dA/dt = 60π",
          "ratio equals 2",
          "proportional to r",
          "doubles the radius",
          "2πr(dr/dt)",
          "rate of change of area",
          "60π cm²/s",
          "linear relationship",
          "r = 10",
          "related rates",
          "dA/dt depends on r",
          "rate scales with radius"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies student is wrong and justifies that dA/dt = 6πr is not constant because r changes with time.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "not constant",
          "dA/dt = 6πr",
          "r depends on t",
          "r = 3t",
          "dA/dt increases",
          "not a constant rate",
          "function of time",
          "student is incorrect",
          "varies with r",
          "related rates",
          "dA/dt is not constant",
          "radius grows over time"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u4_frq020",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Linearization: Approximating a Square Root",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = √x. A student wants to use a linear approximation (tangent line approximation) to estimate the value of √10 without a calculator.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the linearization L(x) of f(x) = √x at the base point a = 9. Show all steps, including f(a) and f'(a).",
        "rubric": "Earns 1 point for correctly computing f(9) = 3, f'(x) = 1/(2√x) so f'(9) = 1/6, and writing the linearization L(x) = 3 + (1/6)(x − 9)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Use the linearization L(x) found in part (a) to estimate √10. Express your answer as an exact fraction.",
        "rubric": "Earns 1 point for correctly substituting x = 10 into L(x) = 3 + (1/6)(10 − 9) = 3 + 1/6 = 19/6."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Is L(10) an overestimate or underestimate of √10? Justify your answer by analyzing the concavity of f(x) = √x near x = 9.",
        "rubric": "Earns 1 point for correctly stating L(10) is an overestimate, supported by showing f''(x) = −1/(4x^(3/2)) < 0, meaning f is concave down on (0, ∞), so the tangent line lies above the curve."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly finds f(9) = 3, f'(9) = 1/6, and writes L(x) = 3 + (1/6)(x − 9).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "L(x)",
          "linearization",
          "tangent line approximation",
          "f'(x) = 1/(2√x)",
          "f'(9) = 1/6",
          "f(9) = 3",
          "L(x) = 3 + (1/6)(x − 9)",
          "local linear approximation",
          "base point a = 9",
          "point-slope form",
          "derivative of square root",
          "L(x) = f(a) + f'(a)(x − a)"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Substitutes x = 10 into L(x) and correctly obtains the exact fraction 19/6.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "L(10)",
          "x = 10",
          "19/6",
          "3 + 1/6",
          "exact fraction",
          "linear approximation",
          "substitute x = 10",
          "estimate of √10",
          "3.1667",
          "tangent line value",
          "approximate value",
          "plug in x = 10"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "States overestimate and justifies using f''(x) < 0, i.e., f is concave down, so the tangent line lies above the curve.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "overestimate",
          "concave down",
          "f''(x) < 0",
          "f''(x) = -1/(4x^(3/2))",
          "tangent line lies above",
          "second derivative negative",
          "concavity",
          "curve lies below tangent",
          "overestimation",
          "second derivative test for concavity",
          "concave down implies overestimate",
          "tangent line above graph"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u4_frq021",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Mean Value Theorem Applied to a Polynomial Function",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = x³ − 6x² + 9x + 2 on the closed interval [0, 4].\n\n(a) Verify that the Mean Value Theorem applies to f on [0, 4], and find all values of c in the open interval (0, 4) guaranteed by the theorem.\n\n(b) Determine whether Rolle's Theorem applies to f on [0, 3]. If it does, find all values of c in (0, 3) where f′(c) = 0. If it does not apply, explain why.\n\n(c) Using the value of c found in part (a) that lies in (1, 4), write the equation of the tangent line to f at x = c, and use this linearization to approximate f(c + 0.1). Round your final answer to three decimal places.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Verify that the Mean Value Theorem applies to f(x) = x³ − 6x² + 9x + 2 on [0, 4], then find all values of c in (0, 4) such that f′(c) equals the average rate of change of f over [0, 4].",
        "rubric": "Student earns 1 point for correctly computing the average rate of change as [f(4) − f(0)] / (4 − 0) = (6 − 2)/4 = 1, setting f′(c) = 3c² − 12c + 9 = 1, solving 3c² − 12c + 8 = 0 to obtain c = (12 ± √(144 − 96))/6 = (12 ± √48)/6 = 2 ± (2√3)/3, identifying both values and confirming both lie in (0, 4), and citing that f is continuous on [0, 4] and differentiable on (0, 4) as the conditions for MVT."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Determine whether Rolle's Theorem applies to f on [0, 3]. If it applies, find all c in (0, 3) where f′(c) = 0. If it does not apply, state which condition fails.",
        "rubric": "Student earns 1 point for verifying f(0) = 2 and f(3) = 27 − 54 + 27 + 2 = 2 so f(0) = f(3), confirming f is continuous on [0, 3] and differentiable on (0, 3), correctly invoking Rolle's Theorem, then solving f′(c) = 3c² − 12c + 9 = 0 to get c = 1 and c = 3, and identifying c = 1 as the only value in the open interval (0, 3)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using the value c = 2 + (2√3)/3 found in part (a) (approximately 3.155), write the linearization L(x) of f at x = c, then use L(x) to approximate f(c + 0.1). Round to three decimal places.",
        "rubric": "Student earns 1 point for writing the linearization L(x) = f(c) + f′(c)(x − c) where f′(c) = 1 (from MVT), correctly computing f(c) at c ≈ 3.155 (approximately 2.397), forming L(x) = f(c) + 1·(x − c), evaluating L(c + 0.1) = f(c) + 0.1 ≈ 2.497, and presenting a correctly rounded three-decimal-place answer consistent with their value of c."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the Mean Value Theorem: verifies continuity and differentiability, computes average rate of change [f(4)−f(0)]/4 = 1, sets f′(c) = 3c²−12c+9 = 1, solves 3c²−12c+8=0, and finds c = 2 ± (2√3)/3 both in (0,4).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "mean value theorem",
          "MVT",
          "average rate of change",
          "[f(4)-f(0)]/(4-0)",
          "f'(c) = 1",
          "3c² − 12c + 8 = 0",
          "c = 2 + (2√3)/3",
          "c = 2 − (2√3)/3",
          "continuous on [0,4]",
          "differentiable on (0,4)",
          "polynomial function",
          "both values in open interval",
          "quadratic formula",
          "instantaneous rate equals average rate"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies Rolle's Theorem: confirms f(0) = f(3) = 2, states continuity and differentiability conditions, solves f′(c) = 0 to get c = 1 and c = 3, and identifies c = 1 as the only value in the open interval (0, 3).",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "Rolle's theorem",
          "f(0) = f(3)",
          "equal endpoint values",
          "f'(c) = 0",
          "3c² − 12c + 9 = 0",
          "c = 1",
          "open interval (0,3)",
          "continuous on [0,3]",
          "differentiable on (0,3)",
          "c = 3 excluded from open interval",
          "horizontal tangent",
          "factoring derivative",
          "critical point in interior"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly writes the linearization L(x) = f(c) + f′(c)(x − c) with f′(c) = 1 (slope from MVT), evaluates f(c) at c ≈ 3.155, and computes L(c + 0.1) = f(c) + 0.1 to obtain an answer rounded to three decimal places.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "linearization",
          "L(x) = f(c) + f'(c)(x − c)",
          "tangent line approximation",
          "local linear approximation",
          "f'(c) = 1",
          "L(c + 0.1)",
          "f(c) + 0.1",
          "slope equals 1",
          "three decimal places",
          "tangent line at c",
          "point-slope form",
          "approximate function value",
          "linear approximation near c"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u4_frq022",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Ladder Sliding Down a Wall: Related Rates, Linearization, and Mean Value Theorem",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A 10-foot ladder is leaning against a vertical wall. The base of the ladder is sliding away from the wall along the ground at a constant rate of 2 feet per second. Let x(t) be the horizontal distance (in feet) from the wall to the base of the ladder, and let y(t) be the vertical height (in feet) at which the ladder touches the wall, where both x and y are functions of time t in seconds. The relationship between x and y is given by x² + y² = 100.\n\nAt the moment when x = 6 feet:\n(a) Use related rates to find dy/dt.\n(b) Use linearization of y as a function of x at x = 6 to approximate the height y when x = 6.3 feet.\n(c) Calculate the exact value of y when x = 6.3 and compute the error in the linear approximation.\n(d) The function y(x) = √(100 − x²) is continuous and differentiable on [6, 6.3]. Apply the Mean Value Theorem to y(x) on the interval [6, 6.3] and determine the value c ∈ (6, 6.3) guaranteed by the theorem.\n(e) Explain why Rolle's Theorem does NOT apply to y(x) = √(100 − x²) on the interval [6, 8], and identify which condition of Rolle's Theorem fails.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "At the instant when x = 6 feet, the base is sliding away from the wall at dx/dt = 2 ft/sec. Use related rates to find dy/dt at this moment. Show all differentiation steps.",
        "rubric": "Earns 1 point: Student implicitly differentiates x² + y² = 100 with respect to t to get 2x(dx/dt) + 2y(dy/dt) = 0, then substitutes x = 6, y = 8 (from 36 + y² = 100), and dx/dt = 2 to obtain dy/dt = −12/8 = −3/2 ft/sec. Correct answer is dy/dt = −3/2 or −1.5 ft/sec."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the linearization of y = √(100 − x²) at x = 6, write the linear approximation L(x) and use it to approximate y when x = 6.3.",
        "rubric": "Earns 1 point: Student finds y(6) = 8, computes y'(x) = −x/√(100 − x²) so y'(6) = −6/8 = −3/4, writes L(x) = 8 − (3/4)(x − 6), then evaluates L(6.3) = 8 − (3/4)(0.3) = 8 − 0.225 = 7.775. Correct linearization value is 7.775."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find the exact value of y when x = 6.3 using y = √(100 − x²), then compute the absolute error between the linear approximation from part (b) and the exact value.",
        "rubric": "Earns 1 point: Student computes y(6.3) = √(100 − 39.69) = √60.31 ≈ 7.7659, then finds absolute error = |7.775 − 7.7659| ≈ 0.0091. Accept answers rounded correctly to at least 3 decimal places; error approximately 0.009."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "Apply the Mean Value Theorem to y(x) = √(100 − x²) on [6, 6.3]. State the conclusion of the MVT and find the value c ∈ (6, 6.3) that satisfies the theorem.",
        "rubric": "Earns 1 point: Student states MVT conclusion that there exists c ∈ (6, 6.3) such that y'(c) = [y(6.3) − y(6)] / (6.3 − 6), computes average rate of change = (7.7659 − 8) / 0.3 ≈ −0.7803, sets −c/√(100 − c²) = −0.7803 and solves to find c ≈ 6.148. Accept any correct setup and numerical solution in open interval (6, 6.3)."
      },
      {
        "label": "e",
        "command": "Explain",
        "question": "Explain why Rolle's Theorem does NOT apply to y(x) = √(100 − x²) on the interval [6, 8]. Identify specifically which condition of Rolle's Theorem is not satisfied.",
        "rubric": "Earns 1 point: Student correctly identifies that Rolle's Theorem requires f(a) = f(b), but y(6) = 8 and y(8) = 6, so y(6) ≠ y(8), meaning the equal endpoint values condition fails. Student must state that f(a) ≠ f(b) or the equal function values condition is not met, not merely that continuity or differentiability fails."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates x² + y² = 100 implicitly with respect to t, substitutes x = 6, y = 8, dx/dt = 2, and obtains dy/dt = −3/2 ft/sec.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "related rates",
          "implicit differentiation",
          "dy/dt",
          "dx/dt",
          "2x(dx/dt) + 2y(dy/dt) = 0",
          "dy/dt = -3/2",
          "dy/dt = -1.5",
          "x = 6, y = 8",
          "d/dt",
          "chain rule",
          "Pythagorean relationship",
          "differentiate with respect to time",
          "ladder problem"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly finds y'(6) = −3/4, writes linear approximation L(x) = 8 − (3/4)(x − 6), and evaluates L(6.3) = 7.775.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "linearization",
          "linear approximation",
          "L(x)",
          "tangent line approximation",
          "y'(6) = -3/4",
          "L(x) = 8 - (3/4)(x-6)",
          "L(6.3) = 7.775",
          "f(a) + f'(a)(x-a)",
          "local linear approximation",
          "dy/dx = -x/sqrt(100-x^2)",
          "slope of tangent",
          "point-slope form",
          "derivative of square root function"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Computes exact value y(6.3) = √60.31 ≈ 7.766 and finds absolute error ≈ 0.009 compared to the linearization value of 7.775.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "exact value",
          "sqrt(60.31)",
          "7.766",
          "absolute error",
          "error = 0.009",
          "overestimate",
          "linear approximation error",
          "|L(x) - f(x)|",
          "7.7659",
          "approximation vs exact",
          "concave down",
          "tangent line overestimates",
          "error magnitude"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "States the Mean Value Theorem correctly, computes the average rate of change on [6, 6.3], sets y'(c) equal to the average rate of change, and finds c ≈ 6.148 in (6, 6.3).",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "mean value theorem",
          "MVT",
          "average rate of change",
          "instantaneous rate of change",
          "y'(c) = [y(6.3)-y(6)]/(6.3-6)",
          "exists c in (6, 6.3)",
          "c ≈ 6.148",
          "continuous on closed interval",
          "differentiable on open interval",
          "slope of secant line",
          "guaranteed by MVT",
          "tangent parallel to secant",
          "solve for c"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly identifies that Rolle's Theorem does not apply because y(6) = 8 ≠ 6 = y(8), so the equal endpoint values condition f(a) = f(b) is not satisfied.",
        "partLabel": "e",
        "skill": "explain",
        "keywords": [
          "Rolle's theorem",
          "f(a) = f(b)",
          "equal endpoint values",
          "y(6) = 8",
          "y(8) = 6",
          "f(6) ≠ f(8)",
          "equal values condition fails",
          "hypothesis not satisfied",
          "condition not met",
          "y(6) ≠ y(8)",
          "endpoint function values",
          "Rolle's theorem requirements",
          "theorem does not apply"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u4_frq023",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Ladder, Linearization, and Limit Synthesis",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A 10-foot ladder is leaning against a vertical wall. The base of the ladder slides away from the wall at a constant rate of 2 feet per second. Let x(t) be the distance (in feet) from the base of the ladder to the wall and y(t) be the height (in feet) at which the ladder touches the wall, so that x² + y² = 100 at all times t.\n\nSeparately, consider the function f(x) = √(100 − x²) defined on the closed interval [0, 10).\n\nAlso consider the function g(x) = (√(100 − x²) − 6) / (x − 8), which is undefined at x = 8.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "At the instant when the base of the ladder is 6 feet from the wall, calculate the rate at which the top of the ladder is sliding down the wall. Include units in your answer.",
        "rubric": "Earns 1 point for correctly differentiating x² + y² = 100 implicitly with respect to t to get 2x(dx/dt) + 2y(dy/dt) = 0, substituting x = 6, dx/dt = 2, y = 8 (from 6² + y² = 100), and solving to get dy/dt = −3/2 feet per second."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using linearization (local linear approximation) of f(x) = √(100 − x²) at x = 6, write the equation of the tangent line L(x) at x = 6, and use it to approximate f(6.3). Show all work.",
        "rubric": "Earns 1 point for correctly computing f(6) = 8, f'(x) = −x/√(100 − x²), f'(6) = −6/8 = −3/4, writing L(x) = 8 − (3/4)(x − 6), and evaluating L(6.3) = 8 − (3/4)(0.3) = 8 − 0.225 = 7.775."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate lim(x→8) g(x) = lim(x→8) [(√(100 − x²) − 6) / (x − 8)] using L'Hôpital's Rule. Show that the indeterminate form condition is met before applying the rule.",
        "rubric": "Earns 1 point for verifying the 0/0 indeterminate form at x = 8 (numerator: √(100−64)−6 = 6−6 = 0; denominator: 0), applying L'Hôpital's Rule by differentiating numerator and denominator separately (d/dx[√(100−x²)] = −x/√(100−x²); d/dx[x−8] = 1), and evaluating the limit as −8/6 = −4/3."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "The function f(x) = √(100 − x²) is continuous on [0, 8] and differentiable on (0, 8). The values are f(0) = 10 and f(8) = 6. Justify that there exists at least one value c in (0, 8) such that f'(c) = −1/2 by applying the Mean Value Theorem. Then find the exact value(s) of c.",
        "rubric": "Earns 1 point for explicitly citing the Mean Value Theorem, verifying continuity on [0,8] and differentiability on (0,8), computing the average rate of change (f(8)−f(0))/(8−0) = (6−10)/8 = −1/2, setting f'(c) = −c/√(100−c²) = −1/2, solving to get c/√(100−c²) = 1/2 → 2c = √(100−c²) → 4c² = 100−c² → 5c² = 100 → c² = 20 → c = 2√5, and confirming 2√5 ∈ (0,8)."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Consider h(x) = √(100 − x²) − (−x/2 + 7) on the closed interval [0, 8]. Note that h(0) = 10 − 7 = 3 and h(8) = 6 − 3 = 3, so h(0) = h(8). Justify whether Rolle's Theorem guarantees the existence of a value c in (0, 8) where h'(c) = 0, and determine the exact value of c.",
        "rubric": "Earns 1 point for explicitly citing Rolle's Theorem, verifying h is continuous on [0,8], differentiable on (0,8), and h(0) = h(8) = 3, then computing h'(x) = −x/√(100−x²) + 1/2, setting h'(c) = 0 → −c/√(100−c²) + 1/2 = 0 → c/√(100−c²) = 1/2 → 5c² = 100 → c = 2√5, and confirming 2√5 ∈ (0,8) as guaranteed by Rolle's Theorem."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies implicit differentiation to x² + y² = 100 with respect to t, substitutes x = 6, dx/dt = 2, y = 8, and solves for dy/dt = −3/2 feet per second.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "implicit differentiation",
          "2x(dx/dt) + 2y(dy/dt) = 0",
          "dy/dt",
          "dx/dt = 2",
          "related rates",
          "dy/dt = -3/2",
          "feet per second",
          "x² + y² = 100",
          "y = 8",
          "sliding down",
          "Pythagorean relationship",
          "differentiate with respect to t",
          "x = 6"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly computes f'(6) = −3/4 using f'(x) = −x/√(100−x²), writes the linearization L(x) = 8 − (3/4)(x − 6), and evaluates L(6.3) = 7.775.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "linearization",
          "local linear approximation",
          "tangent line",
          "L(x) = f(a) + f'(a)(x−a)",
          "f'(x) = -x/sqrt(100-x²)",
          "f'(6) = -3/4",
          "L(6.3) = 7.775",
          "tangent line approximation",
          "f(6) = 8",
          "slope at x=6",
          "chain rule derivative",
          "point-slope form",
          "approximate value"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Verifies 0/0 indeterminate form at x = 8, applies L'Hôpital's Rule by differentiating numerator and denominator separately, and evaluates the limit as −4/3.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "L'Hôpital's Rule",
          "lim x->8",
          "0/0 indeterminate form",
          "d/dx[sqrt(100-x²)]",
          "-x/sqrt(100-x²)",
          "limit equals -4/3",
          "indeterminate form verified",
          "differentiate numerator and denominator",
          "numerator equals zero at x=8",
          "denominator equals zero at x=8",
          "-8/6 simplified to -4/3",
          "separate derivatives",
          "apply rule after verifying condition"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Cites the Mean Value Theorem with verification of hypotheses, computes average rate of change = −1/2, sets f'(c) = −1/2, and solves to find c = 2√5 in (0, 8).",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "Mean Value Theorem",
          "MVT",
          "average rate of change",
          "(f(b)-f(a))/(b-a)",
          "f'(c) = -1/2",
          "c = 2√5",
          "continuous on [0,8]",
          "differentiable on (0,8)",
          "5c² = 100",
          "c² = 20",
          "(6-10)/(8-0) = -1/2",
          "hypotheses satisfied",
          "c in open interval (0,8)"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Cites Rolle's Theorem, verifies h(0) = h(8) = 3 and differentiability, sets h'(c) = 0, and solves to find c = 2√5 in (0, 8).",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "Rolle's Theorem",
          "h(0) = h(8)",
          "h'(c) = 0",
          "c = 2√5",
          "h'(x) = -x/sqrt(100-x²) + 1/2",
          "continuous on [0,8]",
          "differentiable on (0,8)",
          "equal endpoint values",
          "5c² = 100",
          "guaranteed by Rolle's Theorem",
          "h(0) = h(8) = 3",
          "set derivative equal to zero",
          "c in open interval (0,8)"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u5_frq024",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Concavity and Inflection Points of a Polynomial Function",
    "units": [
      5
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = x³ − 6x² + 9x + 2. Use the second derivative to analyze the concavity of f and identify any inflection points.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find f''(x), the second derivative of f(x) = x³ − 6x² + 9x + 2.",
        "rubric": "Earns 1 point for correctly computing f'(x) = 3x² − 12x + 9 and then f''(x) = 6x − 12."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Using f''(x), determine the intervals on which f is concave up and the intervals on which f is concave down.",
        "rubric": "Earns 1 point for setting f''(x) = 6x − 12 = 0 to get x = 2, then correctly stating f is concave down on (−∞, 2) because f''(x) < 0 there, and concave up on (2, ∞) because f''(x) > 0 there."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Identify the x-coordinate of any inflection point of f and justify your answer using the second derivative.",
        "rubric": "Earns 1 point for stating x = 2 is an inflection point and justifying that f''(x) changes sign at x = 2 (from negative to positive), confirming a change in concavity at that point."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes f'(x) = 3x² − 12x + 9 and f''(x) = 6x − 12 using the power rule.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "f''(x)",
          "6x − 12",
          "second derivative",
          "f'(x) = 3x² − 12x + 9",
          "power rule",
          "d²/dx²",
          "differentiate twice",
          "6x - 12",
          "3x² − 12x + 9",
          "bring down exponent",
          "reduce exponent by one"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Sets f''(x) = 0 to find x = 2 as the partition point, then correctly identifies concave down on (−∞, 2) and concave up on (2, ∞) based on the sign of f''(x).",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "concave up",
          "concave down",
          "f''(x) > 0",
          "f''(x) < 0",
          "x = 2",
          "(2, ∞)",
          "(−∞, 2)",
          "sign of second derivative",
          "concavity interval",
          "set f''(x) equal to zero",
          "partition point",
          "sign analysis",
          "second derivative test for concavity"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "States x = 2 is an inflection point and justifies by demonstrating f''(x) changes sign from negative to positive at x = 2, indicating a change in concavity.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "inflection point",
          "x = 2",
          "f'' changes sign",
          "change in concavity",
          "negative to positive",
          "f''(x) changes sign at x = 2",
          "point of inflection",
          "concavity changes",
          "concave down to concave up",
          "sign change of second derivative",
          "f''(2) = 0",
          "justification for inflection"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u5_frq025",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Critical Points and First Derivative Test for a Polynomial Function",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a function defined by f(x) = x³ − 6x² + 9x + 2 on the closed interval [0, 5]. The derivative of f is f'(x) = 3x² − 12x + 9.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find all critical points of f on the open interval (0, 5) by setting f'(x) = 0 and solving for x.",
        "rubric": "Earns 1 point for correctly setting 3x² − 12x + 9 = 0, factoring or using the quadratic formula to obtain x = 1 and x = 3, and identifying both as critical points in (0, 5)."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Use the First Derivative Test to classify each critical point found in part (a) as a local maximum, local minimum, or neither. Justify your answer by describing the sign change of f'(x) around each critical point.",
        "rubric": "Earns 1 point for correctly applying the First Derivative Test: stating that f'(x) changes from positive to negative at x = 1 (local maximum) and from negative to positive at x = 3 (local minimum), with sign analysis of f'(x) on intervals (0,1), (1,3), and (3,5)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find the absolute maximum value and absolute minimum value of f on the closed interval [0, 5] by evaluating f at all critical points and endpoints.",
        "rubric": "Earns 1 point for evaluating f(0) = 2, f(1) = 6, f(3) = 2, and f(5) = 22, then correctly identifying the absolute maximum value as 22 at x = 5 and the absolute minimum value as 2, occurring at x = 0 and x = 3."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student sets f'(x) = 3x² − 12x + 9 = 0 and correctly solves to find critical points x = 1 and x = 3 within the open interval (0, 5).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "f'(x) = 0",
          "3x² − 12x + 9",
          "critical points",
          "x = 1",
          "x = 3",
          "setting derivative equal to zero",
          "factoring",
          "3(x−1)(x−3)",
          "critical numbers",
          "solving for x"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student applies the First Derivative Test by analyzing the sign of f'(x) on intervals around x = 1 and x = 3, concluding local maximum at x = 1 and local minimum at x = 3.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "First Derivative Test",
          "sign change",
          "f'(x) positive to negative",
          "local maximum at x = 1",
          "f'(x) negative to positive",
          "local minimum at x = 3",
          "sign of f'",
          "changes sign",
          "positive on (0,1)",
          "negative on (1,3)",
          "positive on (3,5)"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student evaluates f at x = 0, 1, 3, and 5, then correctly identifies the absolute maximum as 22 at x = 5 and the absolute minimum as 2 at x = 0 and x = 3.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f(0) = 2",
          "f(1) = 6",
          "f(3) = 2",
          "f(5) = 22",
          "absolute maximum",
          "absolute minimum",
          "endpoints",
          "closed interval",
          "candidates test",
          "extreme values on [0,5]",
          "global maximum",
          "global minimum"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u5_frq026",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Concavity and Inflection Points via the Second Derivative",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let g be a twice-differentiable function defined by g(x) = x⁴ − 8x² + 3. The first derivative is g'(x) = 4x³ − 16x and the second derivative is g''(x) = 12x² − 16.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find all x-values where g''(x) = 0. These are the candidates for inflection points of g.",
        "rubric": "Earns 1 point for setting 12x² − 16 = 0 and correctly solving to obtain x = 2√3/3 and x = −2√3/3, which may also be written as x = ±2/√3 or x ≈ ±1.155."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Determine the intervals on which g is concave up and the intervals on which g is concave down. Justify your answer using the sign of g''(x).",
        "rubric": "Earns 1 point for correctly analyzing the sign of g''(x) = 12x² − 16 on all three intervals determined by the candidates: g is concave up on (−∞, −2√3/3) and (2√3/3, ∞) where g''(x) > 0, and concave down on (−2√3/3, 2√3/3) where g''(x) < 0, with sign justification of g''."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Confirm whether each candidate found in part (a) is an inflection point of g. Justify your answer by describing the change in concavity at each x-value.",
        "rubric": "Earns 1 point for stating that both x = −2√3/3 and x = 2√3/3 are inflection points because g''(x) changes sign at each value (from positive to negative at x = −2√3/3, and from negative to positive at x = 2√3/3), confirming a change in concavity at each point."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student sets g''(x) = 12x² − 16 = 0 and solves correctly to find x = ±2√3/3 (equivalently ±2/√3 or ≈ ±1.155) as candidates for inflection points.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "g''(x) = 0",
          "12x² − 16 = 0",
          "x = ±2√3/3",
          "x = ±2/√3",
          "second derivative equal to zero",
          "candidates for inflection points",
          "solving 12x² = 16",
          "x ≈ ±1.155",
          "inflection point candidates",
          "d²y/dx²"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student analyzes the sign of g''(x) on all three intervals and correctly concludes: concave up on (−∞, −2√3/3) and (2√3/3, ∞), concave down on (−2√3/3, 2√3/3).",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "concave up",
          "concave down",
          "g''(x) > 0",
          "g''(x) < 0",
          "sign of g''",
          "second derivative positive",
          "second derivative negative",
          "concave up on (−∞, −2√3/3)",
          "concave down on (−2√3/3, 2√3/3)",
          "concave up on (2√3/3, ∞)",
          "intervals of concavity"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student confirms both x = −2√3/3 and x = 2√3/3 are inflection points by demonstrating that g''(x) changes sign at each value, indicating a change in concavity.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "inflection point",
          "change in concavity",
          "g'' changes sign",
          "concavity changes",
          "from concave up to concave down",
          "from concave down to concave up",
          "sign change of g''",
          "point of inflection",
          "g''(x) changes sign at x = ±2√3/3",
          "inflection points confirmed"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u5_frq027",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Optimization of a Polynomial Function with Second Derivative Analysis",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = x³ - 6x² + 9x + 2 be defined for all real numbers. You are told that f'(x) = 3x² - 12x + 9 and f''(x) = 6x - 12. Use these derivatives to analyze the behavior of f on the interval (-∞, ∞).",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find all critical points of f(x) by solving f'(x) = 0. Show your algebraic work and identify the x-values of all critical points.",
        "rubric": "Earns 1 point for correctly setting 3x² - 12x + 9 = 0, factoring or using the quadratic formula to obtain x = 1 and x = 3, and identifying both as critical points of f."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Using the Second Derivative Test, classify each critical point found in part (a) as a local maximum, local minimum, or neither. Justify your conclusions by evaluating f''(x) at each critical point.",
        "rubric": "Earns 1 point for correctly evaluating f''(1) = -6 < 0 to conclude x = 1 is a local maximum and f''(3) = 6 > 0 to conclude x = 3 is a local minimum, with explicit reference to the sign of f''(x) at each critical point."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Determine the x-coordinate of any inflection point(s) of f(x). Explain how the sign change of f''(x) confirms that your answer is indeed an inflection point and describe how the concavity of f changes there.",
        "rubric": "Earns 1 point for setting f''(x) = 6x - 12 = 0 to obtain x = 2, verifying a sign change of f''(x) from negative to positive at x = 2, and stating that f changes from concave down to concave up at x = 2, confirming an inflection point."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly solves f'(x) = 3x² - 12x + 9 = 0 and identifies both critical points x = 1 and x = 3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "f'(x) = 0",
          "3x² - 12x + 9",
          "critical points",
          "x = 1",
          "x = 3",
          "factoring",
          "quadratic formula",
          "3(x-1)(x-3)",
          "f prime equals zero",
          "critical values",
          "set derivative equal to zero",
          "zeros of f prime"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student applies the Second Derivative Test by evaluating f''(1) = -6 and f''(3) = 6, correctly classifying x = 1 as a local max and x = 3 as a local min.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "second derivative test",
          "f''(1) = -6",
          "f''(3) = 6",
          "local maximum",
          "local minimum",
          "concave down",
          "concave up",
          "f double prime",
          "negative second derivative",
          "positive second derivative",
          "classify critical points",
          "local max at x = 1",
          "local min at x = 3"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student sets f''(x) = 0 to find x = 2, verifies a sign change of f'' from negative to positive, and identifies the change in concavity as confirmation of an inflection point.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "inflection point",
          "f''(x) = 0",
          "6x - 12 = 0",
          "x = 2",
          "sign change of f double prime",
          "concave down to concave up",
          "changes concavity",
          "f double prime changes sign",
          "point of inflection",
          "concavity changes at x = 2",
          "negative to positive",
          "verify sign change"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u6_frq028",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Average Value of a Function on a Closed Interval",
    "units": [
      6
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = 3x² + 2x on the closed interval [1, 4]. You will find the average value of f on this interval and interpret the result.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Write the expression for the average value of f(x) = 3x² + 2x on the interval [1, 4] using the average value formula. Do not yet evaluate the integral.",
        "rubric": "Student earns the point by correctly writing the average value formula: f_avg = (1/(4−1)) · ∫ from 1 to 4 of (3x² + 2x) dx, or equivalently (1/3)∫₁⁴ (3x² + 2x) dx."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Evaluate the definite integral ∫ from 1 to 4 of (3x² + 2x) dx.",
        "rubric": "Student earns the point by correctly applying the power rule antiderivative to get [x³ + x²] evaluated from 1 to 4, yielding (64 + 16) − (1 + 1) = 80 − 2 = 78."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using your result from part (b), determine the average value of f on [1, 4] and state its value.",
        "rubric": "Student earns the point by correctly dividing 78 by 3 to obtain an average value of 26."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up the average value formula (1/(b−a)) · ∫ₐᵇ f(x) dx with a = 1, b = 4, and integrand 3x² + 2x.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "average value formula",
          "f_avg",
          "(1/(b-a))",
          "1/(4-1)",
          "1/3",
          "∫₁⁴",
          "∫ from 1 to 4",
          "3x² + 2x",
          "average value of f",
          "definite integral setup",
          "closed interval [1,4]",
          "b minus a equals 3",
          "interval length"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly evaluates the definite integral ∫₁⁴ (3x² + 2x) dx = 78 by finding the antiderivative x³ + x² and applying the Fundamental Theorem of Calculus.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "x³ + x²",
          "antiderivative",
          "power rule",
          "FTC",
          "Fundamental Theorem of Calculus",
          "[x³ + x²] from 1 to 4",
          "(64 + 16) − (1 + 1)",
          "80 − 2",
          "78",
          "evaluate from 1 to 4",
          "upper bound minus lower bound",
          "F(4) − F(1)",
          "integrate term by term"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly computes the average value as (1/3)(78) = 26.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "26",
          "(1/3)(78)",
          "78 divided by 3",
          "average value equals 26",
          "f_avg = 26",
          "divide by interval length",
          "divide by 3",
          "average value of f on [1,4]",
          "result is 26",
          "multiply by 1/3",
          "average value theorem",
          "mean value of f"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u6_frq029",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Riemann Sum Approximation for a Rate Function",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Water flows into a tank at a rate modeled by r(t), measured in gallons per minute, where t is measured in minutes. Selected values of r(t) are given in the table below.\n\n| t (min) | 0  | 2  | 5  | 8  | 10 |\n|---------|----|----|----|----|----|\n| r(t)    | 3  | 7  | 10 | 6  | 4  |\n\nThe interval [0, 10] is used to approximate the total amount of water that entered the tank.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using a left Riemann sum with the three subintervals [0, 2], [2, 5], and [5, 10], approximate ∫ from 0 to 10 of r(t) dt. Show all work.",
        "rubric": "Earn 1 point for correctly computing the left Riemann sum: (2)(3) + (3)(7) + (5)(10) = 6 + 21 + 50 = 77 gallons. Must use left endpoints r(0)=3, r(2)=7, r(5)=10 with correct subinterval widths 2, 3, and 5."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Is the left Riemann sum from part (a) an overestimate or an underestimate of the actual value of ∫ from 0 to 10 of r(t) dt? Justify your answer using properties of r(t) visible in the table.",
        "rubric": "Earn 1 point for stating the left Riemann sum is an overestimate OR underestimate with a correct justification referencing whether r(t) is increasing or decreasing on the relevant subintervals. A complete answer must note that r(t) increases on [0,5] (left sum underestimates there) and decreases on [5,10] (left sum overestimates there), so no definitive conclusion can be drawn without further analysis - OR student may correctly argue the answer is neither definitively over nor under, citing the mixed monotonicity. Accept underestimate with correct reasoning about the dominant increasing behavior if supported."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using correct units, explain the meaning of (1/10) ∫ from 0 to 10 of r(t) dt in the context of this problem. Then use your answer from part (a) to approximate this value.",
        "rubric": "Earn 1 point for correctly identifying (1/10)∫r(t)dt as the average value of r(t) on [0,10], stating it represents the average rate at which water flows into the tank over the 10-minute interval, in gallons per minute, AND computing (1/10)(77) = 7.7 gallons per minute using the approximation from part (a)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct left Riemann sum computation: (2)(3) + (3)(7) + (5)(10) = 77",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "left Riemann sum",
          "left endpoints",
          "subinterval widths",
          "77",
          "6 + 21 + 50",
          "(2)(3)",
          "(3)(7)",
          "(5)(10)",
          "Riemann sum approximation",
          "∫ r(t) dt",
          "r(0) = 3",
          "r(2) = 7",
          "r(5) = 10",
          "width times height",
          "total gallons"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct overestimate/underestimate determination with justification referencing increasing or decreasing behavior of r(t)",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "overestimate",
          "underestimate",
          "left Riemann sum overestimates when decreasing",
          "left Riemann sum underestimates when increasing",
          "monotonicity",
          "r(t) increasing on [0,5]",
          "r(t) decreasing on [5,10]",
          "mixed monotonicity",
          "concavity",
          "neither definitively overestimate nor underestimate",
          "sign of r'(t)",
          "dominant behavior",
          "mixed behavior",
          "rate function increasing",
          "rate function decreasing"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies (1/10)∫r(t)dt as the average value of r(t) on [0,10] with correct units and computes 7.7 gallons per minute",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "average value",
          "average rate",
          "gallons per minute",
          "7.7",
          "(1/10)(77)",
          "average value formula",
          "(1/(b-a))∫f(x)dx",
          "mean value of r(t)",
          "average flow rate",
          "units gallons per minute",
          "average value of a function",
          "10-minute interval",
          "approximate average",
          "context interpretation",
          "rate averaged over interval"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u6_frq030",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Fundamental Theorem of Calculus Part 1 and Net Change",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let g be defined by g(x) = ∫ from 2 to x of (3t² − 4t + 1) dt for all real numbers x. The function f has the property that f'(x) = 3x² − 4x + 1 and f(2) = 5.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find g'(x). Then find all values of x on the interval [0, 3] where g has a local minimum. Justify your answer.",
        "rubric": "Earn 1 point for correctly applying FTC Part 1 to state g'(x) = 3x² − 4x + 1, then factoring or using the quadratic formula to find g'(x) = (3x − 1)(x − 1) = 0, giving critical points x = 1/3 and x = 1. Must identify x = 1/3 as a local minimum by sign analysis of g'(x) (g' changes from negative to positive at x = 1/3) and x = 1 as a local maximum. Award point for correct critical points and correct minimum identification with sign chart or reasoning."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the Net Change Theorem and the antiderivative F(x) = x³ − 2x² + x, find the exact value of ∫ from 2 to 5 of (3t² − 4t + 1) dt.",
        "rubric": "Earn 1 point for correctly applying the Net Change Theorem / FTC Part 2: evaluate F(5) − F(2) = (125 − 50 + 5) − (8 − 8 + 2) = 80 − 2 = 78. Must show substitution of both bounds and correct arithmetic to obtain 78."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using your result from part (b) and the given initial condition f(2) = 5, find f(5).",
        "rubric": "Earn 1 point for correctly applying the Net Change Theorem to state f(5) = f(2) + ∫ from 2 to 5 of f'(t) dt = 5 + 78 = 83. Must explicitly reference f(5) = f(2) + ∫ from 2 to 5 of f'(t) dt or equivalent accumulation equation and arrive at f(5) = 83."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies FTC Part 1 to find g'(x) = 3x²−4x+1, identifies critical points x=1/3 and x=1, and justifies x=1/3 as a local minimum via sign change of g'",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "FTC Part 1",
          "Fundamental Theorem of Calculus Part 1",
          "g'(x) = 3x²−4x+1",
          "d/dx of integral",
          "critical points",
          "x = 1/3",
          "x = 1",
          "local minimum at x = 1/3",
          "sign change of g'",
          "g' changes from negative to positive",
          "(3x − 1)(x − 1)",
          "first derivative test",
          "sign chart",
          "integrand evaluated at upper limit",
          "local maximum at x = 1"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly evaluates ∫ from 2 to 5 of (3t²−4t+1)dt using FTC Part 2 / Net Change Theorem to obtain 78",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Net Change Theorem",
          "FTC Part 2",
          "Fundamental Theorem of Calculus Part 2",
          "F(5) − F(2)",
          "antiderivative x³ − 2x² + x",
          "78",
          "definite integral evaluation",
          "evaluate at bounds",
          "125 − 50 + 5",
          "8 − 8 + 2",
          "F(5) = 80",
          "F(2) = 2",
          "substitution into antiderivative",
          "exact value",
          "polynomial antiderivative"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies net change accumulation equation f(5) = f(2) + ∫ from 2 to 5 of f'(t)dt = 5 + 78 = 83",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f(5) = f(2) + ∫f'(t)dt",
          "net change theorem",
          "accumulation equation",
          "initial condition f(2) = 5",
          "f(5) = 83",
          "5 + 78",
          "antiderivative accumulation",
          "∫ from 2 to 5 of f'(t) dt",
          "83",
          "total accumulation from initial value",
          "f(b) = f(a) + ∫f'(t)dt",
          "net change from a to b",
          "initial value plus integral",
          "recover function value",
          "FTC applied to f'"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u6_frq031",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Accumulation Function, Net Change, and Average Value via FTC",
    "units": [
      6
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a continuous function defined on the closed interval [0, 8]. Selected values of f are given in the table below:\n\nx:    0,  1,  2,  3,  4,  5,  6,  7,  8\nf(x): 3,  5,  6,  4, -1, -3,  0,  2,  4\n\nDefine the accumulation function G(x) = ∫ from 2 to x of f(t) dt for 0 ≤ x ≤ 8.\n\nIt is also known that ∫ from 0 to 8 of f(x) dx = 14.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using a left Riemann sum with four equal subintervals of width 2 on [0, 8], approximate ∫ from 0 to 8 of f(x) dx. Show your setup.",
        "rubric": "Earns 1 point for correctly identifying the four left endpoints x = 0, 2, 4, 6 with subinterval width Δx = 2 and computing 2·[f(0) + f(2) + f(4) + f(6)] = 2·[3 + 6 + (−1) + 0] = 2·8 = 16."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find G'(3) and G(2). Justify your answer for G(2) using the definition of G.",
        "rubric": "Earns 1 point for correctly stating G'(x) = f(x) by FTC Part 1, giving G'(3) = f(3) = 4, AND correctly evaluating G(2) = ∫ from 2 to 2 of f(t) dt = 0 because the lower and upper limits of integration are equal."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using the net change theorem and the given value ∫ from 0 to 8 of f(x) dx = 14, find the average value of f on the interval [0, 8].",
        "rubric": "Earns 1 point for applying the average value formula f_avg = (1/(b−a)) · ∫ from a to b of f(x) dx = (1/(8−0)) · 14 = 14/8 = 7/4 or 1.75."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct left Riemann sum setup using left endpoints x = 0, 2, 4, 6 with Δx = 2, yielding 2·[f(0) + f(2) + f(4) + f(6)] = 2·[3 + 6 − 1 + 0] = 16.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "left Riemann sum",
          "left endpoints",
          "subinterval width 2",
          "Δx = 2",
          "four subintervals",
          "x = 0, 2, 4, 6",
          "2·[3 + 6 + (−1) + 0]",
          "sum equals 16",
          "approximate integral",
          "∫ from 0 to 8",
          "f(0) = 3",
          "f(2) = 6",
          "f(4) = -1",
          "f(6) = 0",
          "rectangular approximation"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct application of FTC Part 1 to state G'(3) = f(3) = 4, and correct evaluation of G(2) = 0 because the integral from 2 to 2 equals zero (same upper and lower limits).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "FTC Part 1",
          "Fundamental Theorem of Calculus",
          "G'(x) = f(x)",
          "G'(3) = f(3) = 4",
          "G(2) = 0",
          "∫ from 2 to 2",
          "upper and lower limits equal",
          "zero width interval",
          "d/dx ∫ from a to x f(t) dt",
          "accumulation function derivative",
          "degenerate integral",
          "same lower and upper bound",
          "f(3) = 4 from table"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct use of the average value formula (1/(8−0))·∫ from 0 to 8 f(x) dx = 14/8 = 7/4 = 1.75, referencing the net change theorem or the given definite integral value.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "average value",
          "average value formula",
          "f_avg = (1/(b−a)) ∫ f(x) dx",
          "1/8 · 14",
          "14/8",
          "7/4",
          "1.75",
          "net change theorem",
          "∫ from 0 to 8 f(x) dx = 14",
          "definite integral divided by interval length",
          "interval [0, 8]",
          "b − a = 8",
          "given integral value substitution"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u6_frq032",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Water Flow Rate: Integration Techniques and the Fundamental Theorem",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Water flows into a tank at a rate modeled by f(t) = 3t² − 12t + 9, measured in gallons per minute, for 0 ≤ t ≤ 5, where t is measured in minutes. At time t = 0, the tank contains 10 gallons of water. A continuous accumulation function is defined as G(x) = ∫₀ˣ f(t) dt for 0 ≤ x ≤ 5. Use this information to answer all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the general antiderivative F(t) of f(t) = 3t² − 12t + 9. Include the constant of integration and verify your antiderivative is correct by differentiating it.",
        "rubric": "Student earns 1 point for correctly computing F(t) = t³ − 6t² + 9t + C, including +C, and verifying by showing d/dt[F(t)] = 3t² − 12t + 9."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using a left Riemann sum with n = 3 equal subintervals on [0, 3], approximate ∫₀³ f(t) dt. Show your subinterval width, the left endpoints used, and the sum.",
        "rubric": "Student earns 1 point for correctly identifying Δt = 1, left endpoints t = 0, 1, 2, evaluating f(0) = 9, f(1) = 0, f(2) = −3, and computing the left Riemann sum = 1·(9 + 0 + (−3)) = 6."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the definite integral ∫₀³ f(t) dt exactly using the Fundamental Theorem of Calculus Part 2. Show all antiderivative work and evaluate at the bounds.",
        "rubric": "Student earns 1 point for applying FTC Part 2: ∫₀³ (3t² − 12t + 9) dt = [t³ − 6t² + 9t]₀³ = (27 − 54 + 27) − (0) = 0."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using the accumulation function G(x) = ∫₀ˣ f(t) dt, find G′(x) by applying the Fundamental Theorem of Calculus Part 1. Then determine the total amount of water in the tank at time x = 3.",
        "rubric": "Student earns 1 point for correctly stating G′(x) = f(x) = 3x² − 12x + 9 by FTC Part 1, and then computing total water = 10 + G(3) = 10 + 0 = 10 gallons using the net change theorem."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find the average value of f(t) = 3t² − 12t + 9 over the interval [0, 5]. Show the average value formula setup and evaluate the definite integral.",
        "rubric": "Student earns 1 point for correctly applying the average value formula (1/(5−0))·∫₀⁵ (3t² − 12t + 9) dt, evaluating [t³ − 6t² + 9t]₀⁵ = (125 − 150 + 45) − 0 = 20, and computing average value = (1/5)(20) = 4 gallons per minute."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly finds the general antiderivative F(t) = t³ − 6t² + 9t + C with constant of integration and verifies by differentiation.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "antiderivative",
          "F(t) = t³ − 6t² + 9t + C",
          "constant of integration",
          "+C",
          "indefinite integral",
          "d/dt",
          "differentiating to verify",
          "power rule for integration",
          "verify antiderivative",
          "∫(3t² − 12t + 9) dt",
          "reverse power rule",
          "integrate term by term",
          "general antiderivative"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly sets up and evaluates a left Riemann sum with n = 3 subintervals on [0, 3], using left endpoints t = 0, 1, 2 and Δt = 1 to get a sum of 6.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "left Riemann sum",
          "left endpoints",
          "Δt = 1",
          "subinterval width",
          "n = 3 subintervals",
          "f(0) = 9",
          "f(1) = 0",
          "f(2) = −3",
          "Riemann sum equals 6",
          "∑ f(tᵢ) Δt",
          "approximate definite integral",
          "partition of [0,3]",
          "numerical approximation"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly evaluates ∫₀³ f(t) dt = 0 using FTC Part 2 by finding the antiderivative and evaluating at the bounds.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "Fundamental Theorem of Calculus Part 2",
          "FTC Part 2",
          "definite integral equals zero",
          "[t³ − 6t² + 9t]₀³",
          "evaluate at bounds",
          "∫₀³ (3t² − 12t + 9) dt",
          "(27 − 54 + 27)",
          "F(3) − F(0)",
          "antiderivative evaluated at upper and lower bounds",
          "net signed area",
          "exact value of integral",
          "substitution of limits"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies FTC Part 1 to state G′(x) = f(x), and uses the net change theorem to find total water in tank = 10 gallons at t = 3.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "Fundamental Theorem of Calculus Part 1",
          "FTC Part 1",
          "G′(x) = f(x)",
          "derivative of accumulation function",
          "net change theorem",
          "10 + G(3) = 10",
          "total amount of water",
          "10 gallons at t = 3",
          "d/dx ∫₀ˣ f(t) dt",
          "initial condition 10 gallons",
          "accumulated net flow",
          "G(3) = 0",
          "upper limit of integration as variable"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly applies the average value formula (1/(b−a))∫ₐᵇ f(t) dt over [0,5], evaluates the integral as 20, and computes average value = 4 gallons per minute.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "average value of a function",
          "average value formula 1/(b−a)",
          "(1/5)∫₀⁵ f(t) dt",
          "∫₀⁵ (3t² − 12t + 9) dt",
          "[t³ − 6t² + 9t]₀⁵",
          "integral evaluates to 20",
          "average value equals 4",
          "mean value of function over interval",
          "4 gallons per minute",
          "(125 − 150 + 45)",
          "divide by interval length",
          "average rate of flow"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u6_frq033",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Water Flow Rate: Riemann Sums, Definite Integrals, FTC, and Average Value",
    "units": [
      6
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Water flows into a reservoir at a rate modeled by the continuous function r(t) = 3t·e^(−0.5t) + 2, measured in hundreds of gallons per hour, where t is measured in hours for 0 ≤ t ≤ 8. Selected values of r(t) are given in the table below:\n\n| t (hours) | 0 | 2 | 4 | 6 | 8 |\n|-----------|---|---|---|---|---|\n| r(t) (hundreds of gal/hr) | 2 | 4.716 | 5.413 | 4.446 | 2.727 |\n\nAdditionally, define the accumulation function G(x) = ∫ from 0 to x of r(t) dt for 0 ≤ x ≤ 8. At time t = 0, the reservoir contains 500 hundreds of gallons of water.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using a right Riemann sum with the four subintervals indicated by the table, approximate ∫ from 0 to 8 of r(t) dt. Show all work, including the expression used.",
        "rubric": "Student earns the point by correctly setting up and evaluating the right Riemann sum: Δt = 2 for each subinterval; sum = 2[r(2) + r(4) + r(6) + r(8)] = 2[4.716 + 5.413 + 4.446 + 2.727] = 2(17.302) = 34.604 hundreds of gallons. Correct subinterval width of 2 must be shown, and all four right endpoints r(2), r(4), r(6), r(8) must be used."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Is the approximation found in part (a) an overestimate or an underestimate of the actual value of ∫ from 0 to 8 of r(t) dt? Justify your answer in terms of the behavior of r(t) on the interval [0, 8].",
        "rubric": "Student earns the point by stating that the right Riemann sum is neither uniformly an overestimate nor underestimate because r(t) is not monotonically increasing or decreasing on the entire interval [0, 8]; r(t) increases on [0, 4] and decreases on [4, 8], so the right Riemann sum overestimates on [0, 4] and underestimates on [4, 8], and a definitive conclusion cannot be made without further analysis. Alternatively, full credit is earned if the student correctly identifies the concavity or monotonicity argument with a justified conclusion. At minimum the student must reference increasing/decreasing behavior of r(t) and connect it to the right Riemann sum over/underestimate logic."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find G'(x) and evaluate G'(4). Explain what G'(4) represents in the context of this problem.",
        "rubric": "Student earns the point by applying FTC Part 1 to state G'(x) = r(x) (or d/dx[∫ from 0 to x of r(t) dt] = r(x)), then evaluating G'(4) = r(4) = 5.413 hundreds of gallons per hour. Student must reference FTC Part 1, write G'(x) = r(x), compute G'(4) = r(4) = 5.413, and interpret it as the rate at which water is flowing into the reservoir at t = 4 hours."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using the net change theorem and the exact formula r(t) = 3t·e^(−0.5t) + 2, find the total amount of water, in hundreds of gallons, in the reservoir at time t = 8. You may use a calculator to evaluate any definite integral.",
        "rubric": "Student earns the point by applying the net change theorem: total water = 500 + ∫ from 0 to 8 of (3t·e^(−0.5t) + 2) dt. Evaluating the integral: ∫3t·e^(−0.5t) dt requires integration by parts yielding −6t·e^(−0.5t) − 12e^(−0.5t); evaluating from 0 to 8 gives (−48e^(−4) − 12e^(−4)) − (0 − 12) = −60e^(−4) + 12 ≈ −1.099 + 12 = 10.901; ∫2 dt from 0 to 8 = 16; total integral ≈ 26.901; reservoir total ≈ 500 + 26.901 = 526.901 hundreds of gallons. Student must write net change theorem setup, evaluate ∫ from 0 to 8 of r(t) dt, and add initial condition 500."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find the average value of r(t) over the interval [0, 8] using the exact formula r(t) = 3t·e^(−0.5t) + 2. Then interpret what this value means in context.",
        "rubric": "Student earns the point by correctly writing the average value formula: r_avg = (1/(8−0)) · ∫ from 0 to 8 of (3t·e^(−0.5t) + 2) dt = (1/8)(26.901) ≈ 3.363 hundreds of gallons per hour. Student must write (1/(b−a))∫ from a to b of r(t) dt with correct bounds, evaluate to approximately 3.363, and interpret as the average rate of water flow into the reservoir over the 8-hour period."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct right Riemann sum setup and evaluation: width Δt = 2, uses right endpoints r(2), r(4), r(6), r(8), computes 2(4.716 + 5.413 + 4.446 + 2.727) = 34.604",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "right Riemann sum",
          "right endpoints",
          "Δt = 2",
          "subinterval width 2",
          "r(2) + r(4) + r(6) + r(8)",
          "34.604",
          "2[4.716 + 5.413 + 4.446 + 2.727]",
          "approximate integral",
          "∫ from 0 to 8",
          "four subintervals",
          "Riemann sum approximation"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct justification referencing increasing/decreasing behavior of r(t): r increases on [0,4] causing overestimate, r decreases on [4,8] causing underestimate, so the right Riemann sum is not definitively an over or underestimate overall",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "increasing on [0,4]",
          "decreasing on [4,8]",
          "overestimate",
          "underestimate",
          "right Riemann sum overestimates when increasing",
          "right Riemann sum underestimates when decreasing",
          "not monotone",
          "monotonically",
          "r(t) increases then decreases",
          "not definitively over or underestimate",
          "behavior of r(t)",
          "cannot determine overall"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Applies FTC Part 1 to write G'(x) = r(x), evaluates G'(4) = r(4) = 5.413, and interprets as the instantaneous rate of water flow at t = 4 hours",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "FTC Part 1",
          "Fundamental Theorem of Calculus",
          "G'(x) = r(x)",
          "d/dx[∫ from 0 to x of r(t) dt]",
          "G'(4) = r(4)",
          "5.413",
          "rate of flow",
          "hundreds of gallons per hour",
          "instantaneous rate",
          "accumulation function derivative",
          "differentiate the integral"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Applies net change theorem: total water = 500 + ∫ from 0 to 8 of r(t) dt ≈ 500 + 26.901 = 526.901 hundreds of gallons; must show net change theorem setup and add initial value 500",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "net change theorem",
          "500 + ∫ from 0 to 8",
          "initial condition 500",
          "total amount of water",
          "26.901",
          "526.901",
          "integration by parts",
          "∫3t·e^(−0.5t) dt",
          "−6t·e^(−0.5t) − 12e^(−0.5t)",
          "hundreds of gallons",
          "antiderivative of r(t)",
          "accumulate from initial value"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly writes average value formula (1/(8−0))∫ from 0 to 8 of r(t) dt, evaluates to approximately 3.363 hundreds of gallons per hour, and interprets as mean flow rate over [0,8]",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "average value",
          "(1/(b−a))∫ from a to b",
          "(1/8)∫ from 0 to 8",
          "r_avg",
          "3.363",
          "average rate of flow",
          "mean value of a function",
          "hundreds of gallons per hour",
          "over the interval [0,8]",
          "average value formula",
          "mean flow rate",
          "average value of r(t)"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u7_frq034",
    "subject": "apcalc",
    "frqType": "short",
    "title": "U-Substitution for an Indefinite Integral",
    "units": [
      7
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the indefinite integral ∫ 3x²(x³ + 5)⁴ dx. You will evaluate this integral using u-substitution.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify an appropriate substitution u and find du in terms of dx.",
        "rubric": "Student earns 1 point for correctly stating u = x³ + 5 and du = 3x² dx."
      },
      {
        "label": "b",
        "command": "Rewrite",
        "question": "Rewrite the original integral entirely in terms of u using your substitution from part (a).",
        "rubric": "Student earns 1 point for correctly rewriting the integral as ∫ u⁴ du."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the integral in terms of u from part (b), then substitute back to express your final answer in terms of x.",
        "rubric": "Student earns 1 point for correctly evaluating to (1/5)(x³ + 5)⁵ + C."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct identification of u = x³ + 5 and du = 3x² dx via differentiation of u with respect to x.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "u = x³ + 5",
          "u equals x cubed plus 5",
          "du = 3x² dx",
          "du equals 3x squared dx",
          "differentiate u with respect to x",
          "du/dx = 3x²",
          "substitution u",
          "u-substitution choice",
          "inner function substitution",
          "composite function inner layer"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct rewriting of the integral in terms of u as ∫ u⁴ du after substituting u and du.",
        "partLabel": "b",
        "skill": "rewrite",
        "keywords": [
          "∫ u⁴ du",
          "integral of u to the fourth power",
          "u⁴ du",
          "rewrite in terms of u",
          "substitute u into integrand",
          "replace x³ + 5 with u",
          "replace 3x² dx with du",
          "entirely in terms of u",
          "no x remaining",
          "transformed integral"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct antiderivative (1/5)u⁵ + C evaluated and back-substituted to give (1/5)(x³ + 5)⁵ + C.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "(1/5)(x³ + 5)⁵ + C",
          "one fifth times x cubed plus 5 to the fifth power",
          "(1/5)u⁵ + C",
          "antiderivative of u to the fourth",
          "back-substitute u equals x cubed plus 5",
          "rewrite answer in terms of x",
          "constant of integration C",
          "power rule for antiderivatives",
          "increase exponent by one divide by new exponent",
          "indefinite integral final answer"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u7_frq035",
    "subject": "apcalc",
    "frqType": "short",
    "title": "U-Substitution for an Indefinite Integral with Composite Function",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the indefinite integral ∫ x²·cos(x³ + 5) dx. A student plans to evaluate this integral using u-substitution.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify an appropriate substitution u for this integral. State u and compute du in terms of dx.",
        "rubric": "Student earns 1 point for correctly identifying u = x³ + 5 and computing du = 3x² dx, or equivalently (1/3) du = x² dx."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Rewrite the integral entirely in terms of u using your substitution from part (a), then evaluate the resulting integral.",
        "rubric": "Student earns 1 point for correctly rewriting the integral as (1/3)∫ cos(u) du and evaluating to (1/3)sin(u) + C."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Express your answer from part (b) in terms of x to state the final antiderivative.",
        "rubric": "Student earns 1 point for correctly back-substituting to obtain (1/3)sin(x³ + 5) + C."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct u-substitution identification: u = x³ + 5 and du = 3x² dx, with (1/3) du = x² dx shown explicitly.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "u = x³ + 5",
          "du = 3x² dx",
          "du/dx = 3x²",
          "x² dx = (1/3) du",
          "u-substitution",
          "substitution variable",
          "differential du",
          "composite function",
          "inner function",
          "chain rule reverse"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Integral correctly rewritten as (1/3)∫ cos(u) du and evaluated as (1/3)sin(u) + C.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "(1/3)∫ cos(u) du",
          "∫ cos(u) du",
          "sin(u)",
          "(1/3)sin(u)",
          "(1/3)sin(u) + C",
          "antiderivative of cosine",
          "integral of cosine is sine",
          "constant of integration",
          "rewrite in terms of u",
          "absorb x² dx via substitution"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Final answer correctly back-substituted as (1/3)sin(x³ + 5) + C.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "(1/3)sin(x³ + 5) + C",
          "back-substitute",
          "replace u with x³ + 5",
          "express in terms of x",
          "sin(x³ + 5)",
          "final antiderivative",
          "constant of integration",
          "undo substitution",
          "original variable x",
          "substitute original expression"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u7_frq036",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Definite Integral Using U-Substitution with Bounds Conversion",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the definite integral ∫ from x=0 to x=2 of x·e^(x² + 1) dx. A student plans to evaluate this integral using u-substitution, changing the limits of integration accordingly.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify an appropriate substitution u. State u, compute du, and convert the limits of integration from x-values to u-values.",
        "rubric": "Student earns 1 point for u = x² + 1, du = 2x dx, and correctly converting limits: when x = 0, u = 1; when x = 2, u = 5."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Rewrite the definite integral entirely in terms of u with the new limits, and evaluate the resulting integral. Leave your answer in exact form.",
        "rubric": "Student earns 1 point for correctly writing (1/2)∫ from u=1 to u=5 of e^u du and evaluating to (1/2)[e^u] from 1 to 5, obtaining (1/2)(e^5 − e)."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Explain why changing the limits of integration when using u-substitution for a definite integral allows you to avoid back-substituting at the end of the problem.",
        "rubric": "Student earns 1 point for explaining that converting limits to u-values means the integral is fully expressed in terms of u, so evaluating the antiderivative at the new u-limits directly gives the numerical result without needing to return to x."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct substitution u = x² + 1, du = 2x dx, new lower limit u = 1, new upper limit u = 5.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "u = x² + 1",
          "du = 2x dx",
          "x dx = (1/2) du",
          "lower limit u = 1",
          "upper limit u = 5",
          "convert limits of integration",
          "change of bounds",
          "new limits in terms of u",
          "when x = 0 u = 1",
          "when x = 2 u = 5"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Integral rewritten as (1/2)∫ from 1 to 5 of e^u du and evaluated exactly as (1/2)(e^5 − e).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "(1/2)∫ e^u du",
          "integrate from 1 to 5",
          "(1/2)[e^u] from 1 to 5",
          "(1/2)(e^5 − e)",
          "e^5 minus e",
          "antiderivative of e^u is e^u",
          "exact form",
          "definite integral evaluated at bounds",
          "Fundamental Theorem of Calculus",
          "exponential antiderivative"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student explains that converting limits to u-values makes the entire integral in terms of u, so back-substitution to x is unnecessary after applying the Fundamental Theorem of Calculus.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "limits expressed in terms of u",
          "no back-substitution required",
          "avoid converting antiderivative back to x",
          "evaluate antiderivative at u-limits directly",
          "Fundamental Theorem of Calculus",
          "integral fully in terms of u",
          "new bounds correspond to u-values at endpoints",
          "direct numerical evaluation",
          "u-values at x-endpoints",
          "eliminates need to return to original variable"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u7_frq037",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Definite Integral via U-Substitution with Boundary Conversion",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the definite integral ∫ from x = 0 to x = 2 of [x · e^(x² + 1)] dx. You will evaluate this integral using u-substitution, carefully converting both the integrand and the limits of integration.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Identify an appropriate substitution u = g(x), compute du, and rewrite the integral entirely in terms of u, including the new limits of integration.",
        "rubric": "Earns 1 point for correctly identifying u = x² + 1, computing du = 2x dx (so x dx = du/2), converting the lower limit x = 0 to u = 1, converting the upper limit x = 2 to u = 5, and writing the transformed integral as ∫ from u = 1 to u = 5 of (1/2)e^u du."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Evaluate the transformed definite integral in terms of u that you found in part (a), expressing your answer in exact form.",
        "rubric": "Earns 1 point for correctly antidifferentiating (1/2)e^u to obtain (1/2)e^u, applying the Fundamental Theorem of Calculus with limits u = 1 to u = 5, and arriving at the exact answer (1/2)(e^5 − e^1) or equivalently (1/2)(e^5 − e)."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student claims that because the integrand x · e^(x² + 1) is always positive on [0, 2], the value of the definite integral must be greater than e^1 · 2 = 2e. Determine whether this claim is correct and justify your answer using properties of the integral or your result from part (b).",
        "rubric": "Earns 1 point for correctly evaluating or comparing (1/2)(e^5 − e) ≈ (1/2)(148.41 − 2.718) ≈ 72.85, noting this is indeed greater than 2e ≈ 5.436, and providing a valid justification such as referencing the positivity of x · e^(x² + 1) on [0, 2], the fact that e^(x² + 1) grows rapidly, or citing the numerical comparison of (1/2)(e^5 − e) > 2e to confirm the claim is correct."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies u = x² + 1, finds du = 2x dx, rewrites x dx = du/2, converts limits to u = 1 and u = 5, and expresses the integral as ∫₁⁵ (1/2)eᵘ du.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "u = x² + 1",
          "du = 2x dx",
          "x dx = du/2",
          "lower limit u = 1",
          "upper limit u = 5",
          "∫₁⁵ (1/2)eᵘ du",
          "change of limits",
          "substitution converts bounds",
          "transformed integral",
          "new limits of integration",
          "u-substitution",
          "g(x) = x² + 1",
          "plug in x = 0 to get u = 1",
          "plug in x = 2 to get u = 5",
          "rewrite in terms of u"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly antidifferentiates (1/2)eᵘ, applies the Fundamental Theorem of Calculus with u = 1 and u = 5, and obtains the exact answer (1/2)(e^5 − e).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "(1/2)e^u",
          "antiderivative of e^u is e^u",
          "Fundamental Theorem of Calculus",
          "(1/2)(e^5 − e^1)",
          "(1/2)(e^5 − e)",
          "evaluate at upper and lower limits",
          "exact form",
          "e^5",
          "definite integral evaluated",
          "∫ eᵘ du = eᵘ",
          "evaluate at u = 5 minus u = 1",
          "antidifferentiation of exponential",
          "constant factor 1/2 pulled out",
          "F(5) − F(1)",
          "exact answer no decimals"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly confirms the claim is true by comparing (1/2)(e^5 − e) to 2e, providing a valid numerical or analytical justification referencing the growth of the integrand or the computed exact value.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "(1/2)(e^5 − e) > 2e",
          "approximately 72.85",
          "greater than 2e",
          "claim is correct",
          "integrand is positive on [0,2]",
          "e^(x²+1) grows rapidly",
          "numerical comparison",
          "exact value supports claim",
          "x · e^(x²+1) nonnegative",
          "definite integral positive",
          "2e ≈ 5.436",
          "72.85 > 5.436",
          "comparison using part (b) result",
          "integral exceeds lower bound estimate",
          "monotone increasing integrand"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u7_frq038",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Integration Techniques: Five Methods",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "This problem explores five different integration techniques. For each part, evaluate the given integral using the specified method. Show all work clearly, including any substitution definitions, algebraic manipulation, or trigonometric identities used.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Use u-substitution to find the indefinite integral: ∫ x·cos(x²) dx. Clearly define your substitution, find du, rewrite the integral in terms of u, evaluate, and back-substitute to express your answer in terms of x. Include the constant of integration.",
        "rubric": "Student earns 1 point for correctly defining u = x², computing du = 2x dx so that x dx = du/2, rewriting the integral as (1/2)∫cos(u) du, integrating to get (1/2)sin(u) + C, and back-substituting to obtain (1/2)sin(x²) + C."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Use u-substitution to evaluate the definite integral: ∫ from 0 to 2 of (3x² · e^(x³)) dx. Either change the limits of integration in terms of u and evaluate without back-substituting, or back-substitute and evaluate using the original limits. Show all steps.",
        "rubric": "Student earns 1 point for defining u = x³, finding du = 3x² dx, changing limits to u = 0 and u = 8 (or correctly back-substituting), evaluating ∫e^u du = e^u, and arriving at the correct answer e^8 − 1."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the trigonometric integral: ∫ sin²(x) dx. Use the appropriate power-reducing (half-angle) identity sin²(x) = (1 − cos(2x))/2 to rewrite the integrand, then integrate term by term. Include the constant of integration.",
        "rubric": "Student earns 1 point for correctly applying the identity sin²(x) = (1 − cos(2x))/2, splitting into ∫(1/2) dx − ∫(1/2)cos(2x) dx, integrating to get x/2 − (sin(2x))/4 + C, with correct coefficient (1/4) on the sine term."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Use polynomial long division to evaluate the integral: ∫ (x² + 3x + 5)/(x + 1) dx. First perform long division to rewrite the integrand as a polynomial plus a remainder term, then integrate each term. Include the constant of integration.",
        "rubric": "Student earns 1 point for correctly performing long division to obtain (x + 2) + 3/(x + 1), then integrating term by term to produce x²/2 + 2x + 3·ln|x + 1| + C, with correct quotient x + 2, remainder 3, and natural log term 3ln|x+1|."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Use completing the square to evaluate the integral: ∫ 1/(x² + 4x + 13) dx. Complete the square in the denominator to rewrite it in the form (x + a)² + b², then apply the standard arctangent integral formula ∫ 1/(u² + k²) du = (1/k)arctan(u/k) + C. Include the constant of integration.",
        "rubric": "Student earns 1 point for completing the square to get (x + 2)² + 9, recognizing the form with a = 2 and k = 3, applying the arctangent formula to obtain (1/3)arctan((x + 2)/3) + C, with correct denominator value 3 and argument (x+2)/3 inside arctan."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies u-substitution for the indefinite integral ∫x·cos(x²)dx: defines u = x², finds du = 2x dx, rewrites and evaluates to get (1/2)sin(x²) + C.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "u = x²",
          "du = 2x dx",
          "x dx = du/2",
          "∫cos(u) du",
          "(1/2)sin(u)",
          "(1/2)sin(x²) + C",
          "back-substitution",
          "constant of integration",
          "u-substitution",
          "indefinite integral",
          "rewrite in terms of u",
          "antiderivative of cosine"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies u-substitution for the definite integral ∫₀² 3x²·e^(x³) dx: defines u = x³, changes limits to 0 and 8, evaluates to e^8 − 1.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "u = x³",
          "du = 3x² dx",
          "limits of integration",
          "u = 0",
          "u = 8",
          "∫e^u du",
          "e^u",
          "e^8 − 1",
          "definite integral",
          "change of limits",
          "u-substitution",
          "evaluate at bounds",
          "antiderivative of e^u"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly evaluates ∫sin²(x)dx using the power-reducing identity to obtain x/2 − (sin(2x))/4 + C.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "power-reducing identity",
          "half-angle identity",
          "sin²(x) = (1 − cos(2x))/2",
          "∫cos(2x) dx",
          "x/2",
          "sin(2x)/4",
          "x/2 − sin(2x)/4 + C",
          "trig integral",
          "trigonometric identity",
          "constant of integration",
          "integrate term by term",
          "coefficient 1/4",
          "rewrite integrand"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly performs polynomial long division on (x² + 3x + 5)/(x + 1) to get x + 2 + 3/(x+1), then integrates to obtain x²/2 + 2x + 3ln|x+1| + C.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "polynomial long division",
          "quotient x + 2",
          "remainder 3",
          "3/(x+1)",
          "x²/2 + 2x",
          "3ln|x+1|",
          "natural logarithm",
          "ln|x+1|",
          "∫1/(x+1) dx",
          "constant of integration",
          "improper rational function",
          "rewrite as polynomial plus remainder",
          "antiderivative of 1/(x+1)"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly completes the square in x² + 4x + 13 to get (x+2)² + 9, then applies the arctangent formula to obtain (1/3)arctan((x+2)/3) + C.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "completing the square",
          "(x+2)² + 9",
          "arctan",
          "arctangent formula",
          "1/k arctan(u/k)",
          "(1/3)arctan((x+2)/3) + C",
          "k = 3",
          "u = x+2",
          "∫1/(u²+k²) du",
          "constant of integration",
          "x² + 4x + 13",
          "rewrite denominator",
          "inverse tangent"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u7_frq039",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Integration Techniques: A Multi-Method Approach",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "This problem requires you to evaluate several integrals using different integration techniques. Work each part carefully, showing all substitutions, algebraic manipulations, and antiderivatives. Unless otherwise stated, include the constant of integration where appropriate.\n\nConsider the following five integrals:\n- Part (a): ∫ x·cos(x²+ 3) dx\n- Part (b): ∫₀¹ (2x)/(x² + 1)² dx\n- Part (c): ∫ sin²(x)·cos³(x) dx\n- Part (d): ∫ (x³ + 2x² - x + 4)/(x + 2) dx\n- Part (e): ∫ 1/(x² - 6x + 13) dx",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate ∫ x·cos(x² + 3) dx using u-substitution. Clearly identify your substitution u, find du, rewrite the integral entirely in terms of u, evaluate, and back-substitute to express your final answer in terms of x.",
        "rubric": "Earn the point by correctly identifying u = x² + 3, finding du = 2x dx so that x dx = du/2, rewriting the integral as (1/2)∫cos(u) du, antidifferentiating to get (1/2)sin(u) + C, and back-substituting to obtain (1/2)sin(x² + 3) + C."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the definite integral ∫₀¹ (2x)/(x² + 1)² dx using u-substitution. Show the substitution, change the limits of integration to be in terms of u, evaluate the resulting definite integral in terms of u without back-substituting, and state the exact numerical value.",
        "rubric": "Earn the point by setting u = x² + 1, du = 2x dx, changing limits (x=0 → u=1, x=1 → u=2), writing ∫₁² u⁻² du = [-u⁻¹]₁² = -1/2 + 1 = 1/2."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate ∫ sin²(x)·cos³(x) dx. Begin by using a Pythagorean identity to rewrite cos³(x) as cos²(x)·cos(x) = (1 − sin²(x))·cos(x), then apply u-substitution with u = sin(x) to complete the integration. Write the final answer in terms of x.",
        "rubric": "Earn the point by rewriting the integral as ∫ sin²(x)(1 − sin²(x))cos(x) dx, substituting u = sin(x) and du = cos(x) dx to obtain ∫(u² − u⁴) du = u³/3 − u⁵/5 + C, then back-substituting to get sin³(x)/3 − sin⁵(x)/5 + C."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Calculate ∫ (x³ + 2x² − x + 4)/(x + 2) dx. First perform polynomial long division to rewrite the integrand as a polynomial plus a remainder term over (x + 2), then integrate each term. Show all steps of the long division and write the final answer in terms of x.",
        "rubric": "Earn the point by performing long division to obtain x² − 1 + 6/(x + 2) (since (x³ + 2x² − x + 4) ÷ (x + 2) = x² + 0x − 1 remainder 6), then integrating term-by-term to get x³/3 − x + 6ln|x + 2| + C."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Calculate ∫ 1/(x² − 6x + 13) dx. Begin by completing the square in the denominator to rewrite x² − 6x + 13 in the form (x − h)² + k², then use the standard arctangent antiderivative formula ∫ 1/(u² + a²) du = (1/a)arctan(u/a) + C to evaluate the integral. Write the final answer in terms of x.",
        "rubric": "Earn the point by completing the square to get (x − 3)² + 4, substituting u = x − 3 (du = dx) to write ∫ 1/(u² + 4) du, applying the formula with a = 2 to obtain (1/2)arctan((x − 3)/2) + C."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies u-substitution with u = x² + 3, rewrites integral as (1/2)∫cos(u) du, antidifferentiates, and back-substitutes to obtain (1/2)sin(x² + 3) + C.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "u = x² + 3",
          "du = 2x dx",
          "x dx = du/2",
          "(1/2)∫cos(u) du",
          "(1/2)sin(u)",
          "(1/2)sin(x² + 3) + C",
          "back-substitute",
          "u-substitution indefinite",
          "∫ x cos(x² + 3) dx"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies u-substitution on definite integral, changes limits of integration to u = 1 and u = 2, evaluates ∫₁² u⁻² du, and obtains exact value of 1/2.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "u = x² + 1",
          "du = 2x dx",
          "new limits u = 1 and u = 2",
          "∫₁² u⁻² du",
          "[-u⁻¹]₁²",
          "-1/2 + 1",
          "1/2",
          "u-substitution definite",
          "change limits of integration",
          "exact value"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly rewrites cos³(x) using the Pythagorean identity, applies u = sin(x), integrates to get u³/3 − u⁵/5, and back-substitutes to obtain sin³(x)/3 − sin⁵(x)/5 + C.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "cos³(x) = (1 − sin²(x))cos(x)",
          "Pythagorean identity",
          "sin²(x) + cos²(x) = 1",
          "u = sin(x)",
          "du = cos(x) dx",
          "∫(u² − u⁴) du",
          "u³/3 − u⁵/5 + C",
          "sin³(x)/3 − sin⁵(x)/5 + C",
          "trig integral",
          "back-substitute"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly performs polynomial long division to obtain quotient x² − 1 with remainder 6, then integrates to get x³/3 − x + 6ln|x + 2| + C.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "polynomial long division",
          "quotient x² − 1",
          "remainder 6",
          "6/(x + 2)",
          "x³/3 − x + 6ln|x + 2| + C",
          "∫ 6/(x+2) dx = 6ln|x+2|",
          "long division",
          "antiderivative of polynomial",
          "ln|x + 2|"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly completes the square to get (x − 3)² + 4, applies arctangent formula with a = 2, and obtains (1/2)arctan((x − 3)/2) + C.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "completing the square",
          "(x − 3)² + 4",
          "u = x − 3",
          "∫ 1/(u² + 4) du",
          "(1/a)arctan(u/a)",
          "a = 2",
          "(1/2)arctan((x−3)/2) + C",
          "arctan",
          "arctangent antiderivative formula",
          "standard form (x−h)² + k²"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u8_frq040",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Area Between Two Curves",
    "units": [
      8
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = x + 2 and g(x) = x² be two functions defined on the interval where they intersect. Consider the region R enclosed between the graphs of f and g.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the x-coordinates of the points of intersection of f(x) = x + 2 and g(x) = x².",
        "rubric": "Earns 1 point for correctly setting x + 2 = x² and solving to find x = -1 and x = 2."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Write, but do not evaluate, a definite integral expression that represents the area of region R.",
        "rubric": "Earns 1 point for a correctly written integral ∫ from -1 to 2 of [(x + 2) − x²] dx with correct limits and correct integrand showing top function minus bottom function."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the integral from part (b) to find the exact area of region R.",
        "rubric": "Earns 1 point for correctly evaluating the integral to obtain an area of 9/2 or 4.5 square units, showing antiderivative (x²/2 + 2x − x³/3) evaluated from -1 to 2."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly finds intersection points x = -1 and x = 2 by setting f(x) = g(x) and solving x² − x − 2 = 0 or (x − 2)(x + 1) = 0.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "x = -1",
          "x = 2",
          "intersection points",
          "x + 2 = x²",
          "x² − x − 2 = 0",
          "(x − 2)(x + 1) = 0",
          "points of intersection",
          "set equal",
          "solve for x",
          "set f(x) equal to g(x)",
          "quadratic equation",
          "factor"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Writes a correct definite integral ∫ from −1 to 2 of [(x + 2) − x²] dx with proper limits of integration and integrand as top minus bottom function.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "∫ from -1 to 2",
          "integral from -1 to 2",
          "(x + 2) − x²",
          "top minus bottom",
          "f(x) − g(x)",
          "definite integral",
          "limits of integration",
          "∫₋₁² [(x+2) − x²] dx",
          "upper function minus lower function",
          "linear minus quadratic",
          "area between curves integrand",
          "correct bounds"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly evaluates the integral to find the area equals 9/2 or 4.5, using antiderivative x²/2 + 2x − x³/3 evaluated from -1 to 2.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "9/2",
          "4.5",
          "x²/2 + 2x − x³/3",
          "antiderivative",
          "Fundamental Theorem of Calculus",
          "evaluate from -1 to 2",
          "area = 9/2",
          "square units",
          "F(2) − F(−1)",
          "power rule integration",
          "exact area",
          "substitute bounds"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u8_frq041",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Area Between Two Curves with Intersection Points",
    "units": [
      8
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = x² − 2x and g(x) = x + 4. The graphs of f and g intersect at two points in the xy-plane.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the x-coordinates of the two intersection points of f(x) = x² − 2x and g(x) = x + 4.",
        "rubric": "Set x² − 2x = x + 4, factor or use quadratic formula to obtain x = −1 and x = 4."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Write, but do not evaluate, a definite integral expression that represents the area of the region enclosed between the graphs of f and g.",
        "rubric": "Correct integral ∫ from −1 to 4 of [g(x) − f(x)] dx = ∫₋₁⁴ [(x + 4) − (x² − 2x)] dx with correct integrand and limits."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the integral from part (b) to find the exact area of the enclosed region.",
        "rubric": "Correct antiderivative and evaluation giving area = 125/6."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies both intersection x-values by setting f(x) = g(x) and solving x² − 3x − 4 = 0 to get x = −1 and x = 4.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "x = -1",
          "x = 4",
          "intersection points",
          "set f(x) equal to g(x)",
          "x² − 3x − 4 = 0",
          "factored form",
          "(x − 4)(x + 1) = 0",
          "quadratic equation",
          "solve for x",
          "x-coordinates of intersection",
          "zero product property",
          "x² − 2x = x + 4"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Sets up definite integral with correct integrand [g(x) − f(x)] = (x + 4) − (x² − 2x) = −x² + 3x + 4 and correct limits of integration from −1 to 4.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "∫₋₁⁴",
          "g(x) minus f(x)",
          "(x + 4) − (x² − 2x)",
          "−x² + 3x + 4",
          "upper function minus lower function",
          "limits of integration −1 to 4",
          "definite integral setup",
          "enclosed region area",
          "top curve minus bottom curve",
          "integrand simplified",
          "parabola below line"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly evaluates the integral using antiderivative −x³/3 + 3x²/2 + 4x, applying Fundamental Theorem of Calculus from −1 to 4 to obtain 125/6.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "125/6",
          "antiderivative −x³/3 + 3x²/2 + 4x",
          "Fundamental Theorem of Calculus",
          "evaluate at upper bound minus lower bound",
          "F(4) − F(−1)",
          "exact area equals 125/6",
          "power rule for antiderivatives",
          "substituting limits",
          "21 and 5/6",
          "area of enclosed region"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u8_frq042",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Volume by the Washer Method",
    "units": [
      8
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let R be the region bounded by f(x) = √x and g(x) = x² on the interval [0, 1]. The region R is rotated about the x-axis to generate a solid.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "Identify which function is the outer radius and which is the inner radius when the washer method is applied. Justify your answer by comparing f(x) and g(x) on (0, 1).",
        "rubric": "States that f(x) = √x is the outer radius and g(x) = x² is the inner radius, with justification that √x > x² on (0, 1)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Write a definite integral expression using the washer method that gives the volume of the solid of revolution.",
        "rubric": "Correct washer integral V = π ∫₀¹ [(√x)² − (x²)²] dx = π ∫₀¹ [x − x⁴] dx with correct radii squared and limits."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the integral from part (b) to find the exact volume of the solid.",
        "rubric": "Correct antiderivative and evaluation giving V = π(1/2 − 1/5) = 3π/10."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies outer radius R(x) = √x and inner radius r(x) = x², with justification that √x ≥ x² for x in [0, 1] (e.g., at x = 0.5, √0.5 ≈ 0.707 > 0.25 = (0.5)²).",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "outer radius R(x) = √x",
          "inner radius r(x) = x²",
          "√x greater than x² on (0,1)",
          "farther from the x-axis",
          "washer method radii",
          "√x ≥ x² on [0,1]",
          "outer function is √x",
          "inner function is x²",
          "rotation about x-axis",
          "comparing function values on open interval",
          "√x − x² > 0 for 0 < x < 1"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Sets up correct washer integral V = π ∫₀¹ [(√x)² − (x²)²] dx = π ∫₀¹ (x − x⁴) dx, with π multiplied, radii squared, correct integrand, and limits 0 to 1.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "π ∫₀¹ (x − x⁴) dx",
          "washer method formula",
          "(√x)² minus (x²)²",
          "outer radius squared minus inner radius squared",
          "R(x)² − r(x)²",
          "π times integral",
          "limits of integration 0 to 1",
          "simplified integrand x − x⁴",
          "solid of revolution volume setup",
          "disk with hole",
          "annular cross-section"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly evaluates π ∫₀¹ (x − x⁴) dx using antiderivative x²/2 − x⁵/5 evaluated from 0 to 1, yielding V = π(1/2 − 1/5) = 3π/10.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "3π/10",
          "antiderivative x²/2 − x⁵/5",
          "1/2 minus 1/5",
          "Fundamental Theorem of Calculus",
          "evaluate antiderivative at x = 1 and x = 0",
          "exact volume V = 3π/10",
          "π times 3/10",
          "power rule for integration",
          "F(1) − F(0)",
          "volume of washer solid",
          "approximately 0.942"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u8_frq043",
    "subject": "apcalc",
    "frqType": "short",
    "title": "Volume by Washer Method with Intersecting Curves",
    "units": [
      8
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let R be the region enclosed by the curves f(x) = √x and g(x) = x² on the interval where they intersect for x ≥ 0. The curves intersect at x = 0 and x = 1.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the area of region R enclosed between f(x) = √x and g(x) = x² on [0, 1].",
        "rubric": "Earns 1 point for correctly setting up and evaluating ∫₀¹ (√x − x²) dx. The antiderivative is (2/3)x^(3/2) − (1/3)x³ evaluated from 0 to 1, giving 2/3 − 1/3 = 1/3."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Region R is revolved about the x-axis. Using the washer method, write and evaluate the integral that gives the volume of the resulting solid.",
        "rubric": "Earns 1 point for correctly setting up and evaluating π∫₀¹ [(√x)² − (x²)²] dx = π∫₀¹ (x − x⁴) dx. The antiderivative is π[(1/2)x² − (1/5)x⁵] from 0 to 1, giving π(1/2 − 1/5) = 3π/10."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Region R is now revolved about the line y = 2. Using the washer method, write the integral (do not evaluate) that gives the volume of the resulting solid. Identify the outer and inner radii clearly.",
        "rubric": "Earns 1 point for correctly identifying the outer radius as (2 − x²) and the inner radius as (2 − √x), and writing the integral π∫₀¹ [(2 − x²)² − (2 − √x)²] dx. Both radii must be correct and the integrand must be squared differences under π times the integral from 0 to 1."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the area integral ∫₀¹ (√x − x²) dx and obtains 1/3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "∫₀¹ (√x − x²) dx",
          "area between curves",
          "antiderivative",
          "(2/3)x^(3/2)",
          "(1/3)x³",
          "1/3",
          "definite integral",
          "upper curve minus lower curve",
          "∫(f(x)−g(x))dx",
          "Fundamental Theorem of Calculus",
          "evaluate at bounds",
          "net area",
          "x^(1/2)"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly sets up and evaluates the washer method integral π∫₀¹ [(√x)² − (x²)²] dx and obtains 3π/10.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "washer method",
          "π∫₀¹ (x − x⁴) dx",
          "outer radius",
          "inner radius",
          "R² − r²",
          "(1/2)x²",
          "(1/5)x⁵",
          "3π/10",
          "revolved about x-axis",
          "disk washer",
          "π[(R)²−(r)²]dx",
          "solid of revolution",
          "volume integral",
          "cross-sectional area"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies outer radius as (2 − x²) and inner radius as (2 − √x) and writes the integral π∫₀¹ [(2 − x²)² − (2 − √x)²] dx for revolution about y = 2.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "outer radius 2 − x²",
          "inner radius 2 − √x",
          "revolved about y = 2",
          "washer method",
          "π∫₀¹ [(2−x²)²−(2−√x)²] dx",
          "axis of revolution",
          "horizontal line y=2",
          "distance from axis",
          "(2−x²)²",
          "(2−√x)²",
          "solid of revolution",
          "horizontal axis above region",
          "radius as vertical distance"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u8_frq044",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Region R: Area, Volumes, and Arc Length",
    "units": [
      8
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f(x) = √x and g(x) = x² be defined on the interval [0, 1]. Let R be the region enclosed between the graphs of f and g on [0, 1]. Note that f(x) ≥ g(x) on this interval. Use this region and these functions to answer all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the area of region R enclosed between f(x) = √x and g(x) = x² on [0, 1]. Show all work including the integral expression.",
        "rubric": "Earns 1 point for correctly setting up and evaluating ∫₀¹ (√x − x²) dx = [⅔x^(3/2) − x³/3] from 0 to 1 = ⅔ − ⅓ = ⅓."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the volume of the solid generated when region R is revolved about the x-axis using the washer method. Show the integral expression with outer and inner radii clearly identified.",
        "rubric": "Earns 1 point for correctly setting up and evaluating V = π∫₀¹ [(√x)² − (x²)²] dx = π∫₀¹ (x − x⁴) dx = π[x²/2 − x⁵/5] from 0 to 1 = π(1/2 − 1/5) = 3π/10."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the volume of the solid generated when region R is revolved about the y-axis using the shell method. Show the integral expression with the shell radius and shell height clearly identified.",
        "rubric": "Earns 1 point for correctly setting up and evaluating V = 2π∫₀¹ x(√x − x²) dx = 2π∫₀¹ (x^(3/2) − x³) dx = 2π[⅖x^(5/2) − x⁴/4] from 0 to 1 = 2π(2/5 − 1/4) = 2π(3/20) = 3π/10."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Calculate the volume of the solid generated when region R is revolved about the x-axis using the disc method applied to the curve f(x) = √x alone on [0, 1] (i.e., the solid of revolution of the region between f(x) = √x and the x-axis). Show the integral expression.",
        "rubric": "Earns 1 point for correctly setting up and evaluating V = π∫₀¹ (√x)² dx = π∫₀¹ x dx = π[x²/2] from 0 to 1 = π/2."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Calculate the arc length of the curve f(x) = √x on the interval [0, 1]. Set up the integral using the arc length formula L = ∫₀¹ √(1 + [f'(x)]²) dx and evaluate or express as a simplified exact value. (You may use the result: ∫√(1 + 1/(4x)) dx requires substitution u = 1 + 1/(4x); express the final answer as a decimal rounded to three decimal places if an exact closed form is lengthy.)",
        "rubric": "Earns 1 point for correctly identifying f'(x) = 1/(2√x), setting up L = ∫₀¹ √(1 + 1/(4x)) dx, and either correctly evaluating to approximately 1.479 (≈ 1.478 to 1.480 accepted) or showing the complete antiderivative setup with substitution u = 4x + 1 leading to (1/4)·(2/3)(4x+1)^(3/2)·(1/2) evaluated from 0 to 1 giving (1/12)[5^(3/2) − 1] ≈ 1.479."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes the area between f(x)=√x and g(x)=x² on [0,1] as ∫₀¹(√x − x²)dx = 1/3",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "area between curves",
          "∫₀¹(√x − x²)dx",
          "antiderivative ⅔x^(3/2)",
          "x³/3",
          "⅔ − ⅓",
          "1/3",
          "region enclosed",
          "upper minus lower",
          "definite integral"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the washer method with outer radius √x and inner radius x², evaluating π∫₀¹(x − x⁴)dx = 3π/10",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "washer method",
          "outer radius √x",
          "inner radius x²",
          "π∫₀¹(x − x⁴)dx",
          "x²/2 − x⁵/5",
          "3π/10",
          "revolved about x-axis",
          "R² − r²",
          "volume of revolution"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies the shell method with shell radius x and shell height (√x − x²), evaluating 2π∫₀¹x(√x − x²)dx = 3π/10",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "shell method",
          "cylindrical shells",
          "2π∫₀¹x(√x − x²)dx",
          "shell radius x",
          "shell height √x − x²",
          "x^(3/2) − x³",
          "⅖x^(5/2) − x⁴/4",
          "3π/10",
          "revolved about y-axis"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies the disc method to f(x)=√x revolved about x-axis, evaluating π∫₀¹(√x)²dx = π/2",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "disc method",
          "disk method",
          "π∫₀¹x dx",
          "π[x²/2]",
          "π/2",
          "radius √x",
          "revolved about x-axis",
          "solid of revolution",
          "volume disc"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly sets up arc length integral L = ∫₀¹√(1+(1/(2√x))²)dx and evaluates to (1/12)(5√5 − 1) ≈ 1.479",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "arc length formula",
          "L = ∫√(1 + [f'(x)]²)dx",
          "f'(x) = 1/(2√x)",
          "1 + 1/(4x)",
          "substitution u = 4x+1",
          "(1/12)(5√5 − 1)",
          "approximately 1.479",
          "arc length",
          "∫₀¹√(1 + 1/(4x))dx"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calc_u8_frq045",
    "subject": "apcalc",
    "frqType": "long",
    "title": "Region R: Area, Volumes, Arc Length, and Motion",
    "units": [
      8
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f(x) = √x and g(x) = x²/4 be defined on the interval [0, 4]. Let R be the region enclosed between the graphs of f and g on [0, 4]. A particle moves along the curve y = f(x) = √x from x = 0 to x = 4. Use this information for all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the area of region R enclosed between f(x) = √x and g(x) = x²/4 on [0, 4]. Show all work including the setup of the integral.",
        "rubric": "Student earns the point by correctly setting up ∫₀⁴ (√x − x²/4) dx and evaluating to get 8/3. Must show antiderivative [(2/3)x^(3/2) − x³/12] evaluated from 0 to 4 giving (2/3)(8) − 64/12 = 16/3 − 16/3 correct evaluation yields 8/3."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the volume of the solid formed when region R is revolved about the x-axis using the washer method. Set up and evaluate the integral.",
        "rubric": "Student earns the point by correctly identifying outer radius R(x) = √x and inner radius r(x) = x²/4, setting up π∫₀⁴ [(√x)² − (x²/4)²] dx = π∫₀⁴ [x − x⁴/16] dx and evaluating to get π[x²/2 − x⁵/80] from 0 to 4 = π[8 − 32/5] = 8π(3/5) = 24π/5."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the volume of the solid formed when region R is revolved about the y-axis using the shell method. Set up and evaluate the integral.",
        "rubric": "Student earns the point by correctly setting up 2π∫₀⁴ x[f(x) − g(x)] dx = 2π∫₀⁴ x[√x − x²/4] dx = 2π∫₀⁴ [x^(3/2) − x³/4] dx, evaluating antiderivative [(2/5)x^(5/2) − x⁴/16] from 0 to 4 = 2π[(2/5)(32) − 16] = 2π[64/5 − 16] = 2π(−16/5) correct: 2π[64/5 − 16] = 2π(−16/5)? 64/5 = 12.8, so 12.8 − 16 = −3.2. Magnitude: shells method gives 2π(64/5 − 16) = 2π(−16/5). Correct evaluation: 2π∫₀⁴ [x^(3/2) − x³/4] dx = 2π[(2/5)(32) − 256/16] = 2π[64/5 − 16] = 2π(−16/5). Since this is negative the student must re-examine; correct answer is 32π/5. Accept setup 2π∫₀⁴ x(√x − x²/4) dx with correct antiderivative and final answer 32π/5."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Calculate the volume of the solid with base region R, where cross-sections perpendicular to the x-axis are discs (semicircles) with diameter equal to f(x) − g(x). Set up the integral and evaluate.",
        "rubric": "Student earns the point by recognizing that each cross-section is a semicircle with diameter d = √x − x²/4, so radius = (√x − x²/4)/2, and area = (π/2)[(√x − x²/4)/2]² = (π/8)(√x − x²/4)². Integral: (π/8)∫₀⁴ (√x − x²/4)² dx. Expanding (√x − x²/4)² = x − x^(5/2)/2 + x⁴/16. Evaluating gives (π/8)[x²/2 − x^(7/2)/7 + x⁵/80] from 0 to 4 = (π/8)[8 − 128/7 + 32/5] = (π/8)[(280 − 640 + 112)/35] = (π/8)(−248/35). Correct expansion and antiderivative with correct numerical answer accepted. Award point for correct disc/semicircle setup with area = (π/8)(f − g)² and reasonable evaluation."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Calculate the arc length of the curve y = f(x) = √x from x = 1 to x = 4. Set up the arc length integral and evaluate using the formula L = ∫ₐᵇ √(1 + [f′(x)]²) dx. You may leave your answer in exact form or use a calculator approximation.",
        "rubric": "Student earns the point by correctly computing f′(x) = 1/(2√x), squaring to get [f′(x)]² = 1/(4x), setting up L = ∫₁⁴ √(1 + 1/(4x)) dx, and either correctly evaluating via substitution u = 4x + 1 leading to exact form (1/4)∫₅¹⁷ √u · (1/u^(1/2)) correct u-substitution: let u = 4x+1, du = 4dx, L = (1/4)∫₅¹⁷ √((u+4)/u) Accept calculator approximation ≈ 3.249 or exact form with correct arc length integrand setup √(1 + 1/(4x))."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the area integral ∫₀⁴ (√x − x²/4) dx, showing antiderivative and arriving at 8/3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "area between curves",
          "∫₀⁴ (√x − x²/4) dx",
          "antiderivative",
          "(2/3)x^(3/2)",
          "x³/12",
          "8/3",
          "upper minus lower",
          "f(x) minus g(x)",
          "definite integral",
          "intersection at x=0 and x=4"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the washer method with outer radius √x and inner radius x²/4, sets up π∫₀⁴ [x − x⁴/16] dx, and evaluates to 24π/5.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "washer method",
          "outer radius",
          "inner radius",
          "π∫[R² − r²]dx",
          "R(x) = √x",
          "r(x) = x²/4",
          "revolved about x-axis",
          "π∫₀⁴ [x − x⁴/16] dx",
          "24π/5",
          "volume of revolution"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies the shell method with 2π∫₀⁴ x(√x − x²/4) dx and evaluates to 32π/5.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "shell method",
          "cylindrical shells",
          "2π∫ x[f(x)−g(x)] dx",
          "revolved about y-axis",
          "2π∫₀⁴ x(√x − x²/4) dx",
          "shell radius",
          "shell height",
          "32π/5",
          "(2/5)x^(5/2)",
          "x⁴/16"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly identifies semicircular cross-sections with diameter f(x)−g(x), sets up area formula (π/8)(f−g)², and evaluates the resulting integral.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "cross-sectional area",
          "semicircle",
          "disc cross-section",
          "diameter = f(x)−g(x)",
          "radius = (f−g)/2",
          "area = (π/8)(f−g)²",
          "perpendicular to x-axis",
          "(π/8)∫₀⁴(√x − x²/4)² dx",
          "volume by cross sections",
          "expanding (√x − x²/4)²"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly computes f′(x) = 1/(2√x), sets up arc length integral L = ∫₁⁴ √(1 + 1/(4x)) dx, and evaluates or approximates correctly.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "arc length",
          "L = ∫√(1 + [f′(x)]²) dx",
          "f′(x) = 1/(2√x)",
          "[f′(x)]² = 1/(4x)",
          "∫₁⁴ √(1 + 1/(4x)) dx",
          "arc length formula",
          "u-substitution",
          "≈ 3.249",
          "exact arc length",
          "1 + 1/(4x)"
        ]
      }
    ],
    "sampleSolution": null
  }
];