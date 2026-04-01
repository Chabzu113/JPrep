var APCALCBC_FRQ = [
  {
    "id": "calcbc_u1_frq001",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Continuity and Classification of Discontinuity",
    "units": [
      1
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a function defined as follows:\n\nf(x) = { (x\u00b2 - 9) / (x - 3),  if x \u2260 3\n        {  k,                   if x = 3\n\n(a) Calculate the limit of f(x) as x approaches 3.\n(b) Determine the value of k that makes f continuous at x = 3.\n(c) If instead k = 10, classify the type of discontinuity that f has at x = 3 and justify your answer.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate lim(x\u21923) f(x) by simplifying the expression (x\u00b2 - 9)/(x - 3) for x \u2260 3.",
        "rubric": "Student earns the point by correctly factoring (x\u00b2 - 9) as (x - 3)(x + 3), canceling the (x - 3) factor, and concluding that the limit equals 6."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Determine the value of k that makes f continuous at x = 3.",
        "rubric": "Student earns the point by stating that for continuity f(3) must equal the limit as x approaches 3, and correctly setting k = 6."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "If k = 10, classify the type of discontinuity at x = 3 and justify your answer.",
        "rubric": "Student earns the point by correctly identifying the discontinuity as removable (point discontinuity), justifying that the limit exists (equals 6) but does not equal f(3) = 10, so the discontinuity is removable."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes lim(x\u21923) (x\u00b2 - 9)/(x - 3) = 6 by factoring and canceling.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "factor",
          "factoring",
          "x\u00b2 - 9",
          "(x-3)(x+3)",
          "cancel",
          "canceling common factor",
          "limit equals 6",
          "lim x\u21923",
          "simplify",
          "x + 3",
          "difference of squares",
          "indeterminate form",
          "algebraic simplification",
          "limit as x approaches 3"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Determines k = 6 by applying the definition of continuity: f(3) must equal the limit.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "k = 6",
          "continuous at x = 3",
          "f(3) equals the limit",
          "definition of continuity",
          "limit equals f(3)",
          "continuity condition",
          "k equals 6",
          "must equal",
          "three conditions for continuity",
          "f(3) defined",
          "limit exists",
          "piecewise continuity"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly classifies the discontinuity as removable and justifies using the existence of the limit and f(3) \u2260 limit.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "removable discontinuity",
          "removable",
          "point discontinuity",
          "limit exists",
          "limit equals 6",
          "f(3) equals 10",
          "f(3) \u2260 limit",
          "limit does not equal f(3)",
          "hole",
          "not continuous",
          "finite limit exists",
          "defined but unequal",
          "could be redefined",
          "classify discontinuity"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u1_frq002",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Continuity and Types of Discontinuity",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) be defined as follows:\n\nf(x) = (x\u00b2 \u2212 x \u2212 6) / (x \u2212 3),  x \u2260 3\nf(3) = 7\n\nUse this definition to answer all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find lim(x\u21923) f(x). Show algebraic work to support your answer.",
        "rubric": "Earns 1 point for correctly factoring (x\u00b2\u2212x\u22126) as (x\u22123)(x+2), canceling the (x\u22123) factor, and evaluating the simplified expression x+2 at x=3 to obtain a limit of 5."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Is f continuous at x = 3? Justify your answer using the formal definition of continuity.",
        "rubric": "Earns 1 point for stating that f is NOT continuous at x = 3 because, although f(3) = 7 is defined and lim(x\u21923) f(x) = 5 exists, the limit does not equal f(3), violating the condition lim(x\u2192c) f(x) = f(c) required for continuity."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Identify the type of discontinuity at x = 3 and describe what would need to be changed for f to be continuous at that point.",
        "rubric": "Earns 1 point for correctly identifying the discontinuity as a removable discontinuity (also accepted: hole, removable, point discontinuity) and stating that redefining f(3) = 5 would make f continuous at x = 3."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student factors (x\u00b2\u2212x\u22126) as (x\u22123)(x+2), cancels the common factor, and correctly evaluates the limit as 5.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "factor",
          "x\u00b2\u2212x\u22126",
          "(x\u22123)(x+2)",
          "cancel",
          "canceling the (x\u22123) factor",
          "simplified to x+2",
          "limit equals 5",
          "lim(x\u21923)",
          "limit as x approaches 3",
          "equals 5",
          "algebraic simplification",
          "common factor cancels"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student states f is not continuous at x=3 because the limit (5) does not equal f(3) (7), citing the formal continuity condition.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "not continuous",
          "discontinuous at x=3",
          "lim(x\u21923) f(x) = 5",
          "f(3) = 7",
          "limit does not equal f(3)",
          "lim(x\u2192c) f(x) = f(c)",
          "definition of continuity",
          "continuity condition violated",
          "limit \u2260 f(3)",
          "fails continuity",
          "three conditions of continuity",
          "limit exists but differs from function value"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student identifies the discontinuity as removable and states that redefining f(3) = 5 removes the discontinuity.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "removable discontinuity",
          "removable",
          "hole in the graph",
          "point discontinuity",
          "redefine f(3)",
          "f(3) = 5",
          "set f(3) equal to the limit",
          "remove the discontinuity",
          "fill the hole",
          "continuous at x=3 if f(3)=5",
          "redefining the function value",
          "limit exists so discontinuity is removable"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u1_frq003",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Squeeze Theorem and Limits at Infinity",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the function g(x) = (sin(x)) / x for x \u2260 0.\n\nIt is known that for all x \u2260 0: \u22121/|x| \u2264 g(x) \u2264 1/|x|.\n\nAdditionally, consider h(x) = (3x\u00b2 + sin(x)) / (x\u00b2 + 5) as x \u2192 \u221e.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "Using the Squeeze Theorem, justify that lim(x\u2192\u221e) g(x) = 0. Clearly state the bounding functions and their limits.",
        "rubric": "Earns 1 point for identifying the bounding functions \u22121/|x| and 1/|x|, correctly computing lim(x\u2192\u221e) (\u22121/|x|) = 0 and lim(x\u2192\u221e) (1/|x|) = 0, and concluding by the Squeeze Theorem that lim(x\u2192\u221e) g(x) = 0."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find lim(x\u2192\u221e) h(x) = lim(x\u2192\u221e) (3x\u00b2 + sin(x)) / (x\u00b2 + 5). Show your work by dividing numerator and denominator by the highest power of x.",
        "rubric": "Earns 1 point for dividing numerator and denominator by x\u00b2, correctly simplifying to (3 + sin(x)/x\u00b2) / (1 + 5/x\u00b2), recognizing that sin(x)/x\u00b2 \u2192 0 and 5/x\u00b2 \u2192 0 as x \u2192 \u221e, and obtaining a limit of 3."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Interpret the result of part (b) in terms of the graph of h(x). What graphical feature does lim(x\u2192\u221e) h(x) = 3 indicate?",
        "rubric": "Earns 1 point for stating that lim(x\u2192\u221e) h(x) = 3 means the graph of h(x) has a horizontal asymptote at y = 3, and that the function approaches but does not necessarily reach the value 3 as x increases without bound."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies bounding functions, evaluates both limits as 0, and invokes the Squeeze Theorem to conclude lim(x\u2192\u221e) g(x) = 0.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "Squeeze Theorem",
          "squeeze theorem",
          "bounding functions",
          "\u22121/|x|",
          "1/|x|",
          "both limits equal 0",
          "lim(x\u2192\u221e) 1/|x| = 0",
          "sandwiched between",
          "trapped between bounding functions",
          "limit equals 0",
          "squeezed to 0",
          "since both bounds approach 0",
          "g(x) is bounded above and below"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student divides by x\u00b2, recognizes sin(x)/x\u00b2 and 5/x\u00b2 approach 0, and correctly evaluates the limit as 3.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "divide numerator and denominator by x\u00b2",
          "dividing by highest power of x",
          "sin(x)/x\u00b2 approaches 0",
          "5/x\u00b2 approaches 0",
          "limit equals 3",
          "lim(x\u2192\u221e) h(x) = 3",
          "leading coefficients ratio",
          "dominant terms cancel",
          "(3 + 0)/(1 + 0)",
          "simplifies to 3",
          "sin(x) is bounded so sin(x)/x\u00b2 vanishes",
          "rational function limit at infinity"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student identifies y = 3 as a horizontal asymptote and explains that the graph approaches this value as x \u2192 \u221e.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "horizontal asymptote",
          "y = 3",
          "asymptote at y = 3",
          "graph approaches y = 3",
          "as x increases without bound",
          "end behavior",
          "h(x) approaches 3",
          "limit at infinity indicates horizontal asymptote",
          "function value gets arbitrarily close to 3",
          "does not necessarily reach 3",
          "right-end behavior",
          "long-run value of h(x)"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u1_frq004",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Continuity, Discontinuity Classification, and the Intermediate Value Theorem",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a function defined as follows:\n\nf(x) = { (x\u00b2 - 9) / (x - 3),   if x < 3\n        { k\u00b2 - 2k,              if x = 3\n        { 2x,                   if x > 3\n\nwhere k is a real number constant.\n\nNote: (x\u00b2 - 9)/(x - 3) simplifies to (x + 3) for x \u2260 3, so the left-hand limit as x \u2192 3\u207b equals 6.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Determine the value(s) of k, if any, for which f is continuous at x = 3. Show all limit and continuity conditions that must be satisfied.",
        "rubric": "Earns 1 point for correctly identifying all three continuity conditions (limit from left = 6, limit from right = 6, f(3) = k\u00b2 - 2k), setting k\u00b2 - 2k = 6, and solving to obtain k = 3 or k = -2."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Suppose instead that k = 0, so f(3) = 0. Classify the type of discontinuity that f has at x = 3. Justify your answer using one-sided limits.",
        "rubric": "Earns 1 point for computing lim x\u21923\u207b f(x) = 6 and lim x\u21923\u207a f(x) = 6, concluding the two-sided limit exists and equals 6 but f(3) = 0 \u2260 6, and correctly identifying the discontinuity as removable."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Using the value k = 3 (so that f is continuous at x = 3), apply the Intermediate Value Theorem to determine whether there is guaranteed to be a value c in the interval [0, 3] such that f(c) = 5. State all conditions required by the IVT and confirm they are met.",
        "rubric": "Earns 1 point for stating that f is continuous on [0, 3] (IVT condition), computing f(0) = 3 and f(3) = 6, observing that 5 is between f(0) = 3 and f(3) = 6, and concluding by IVT there exists c in (0, 3) such that f(c) = 5."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student sets up all three continuity conditions, evaluates left-hand and right-hand limits at x = 3, sets f(3) = k\u00b2 - 2k equal to 6, and correctly solves to obtain k = 3 or k = -2.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "continuity conditions",
          "left-hand limit",
          "right-hand limit",
          "lim x\u21923",
          "k\u00b2 - 2k = 6",
          "k = 3",
          "k = -2",
          "continuous at x = 3",
          "limit equals function value",
          "two-sided limit",
          "three conditions for continuity",
          "f(3) defined",
          "limit exists at x = 3",
          "quadratic equation",
          "solve for k"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student computes both one-sided limits equaling 6, notes f(3) = 0, recognizes the two-sided limit exists but does not equal f(3), and classifies the discontinuity as removable.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "removable discontinuity",
          "hole in the graph",
          "one-sided limits equal",
          "lim x\u21923\u207b = 6",
          "lim x\u21923\u207a = 6",
          "f(3) = 0",
          "two-sided limit exists",
          "limit does not equal f(3)",
          "redefine f(3)",
          "discontinuity at x = 3",
          "limit equals 6",
          "point discontinuity",
          "k = 0"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student states f is continuous on [0, 3], evaluates f(0) = 3 and f(3) = 6, confirms 5 is strictly between 3 and 6, and invokes the IVT to guarantee existence of c in (0, 3) with f(c) = 5.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "Intermediate Value Theorem",
          "IVT",
          "continuous on closed interval",
          "f(0) = 3",
          "f(3) = 6",
          "5 is between 3 and 6",
          "there exists c in (0, 3)",
          "f(c) = 5",
          "IVT conditions satisfied",
          "guaranteed existence",
          "closed interval [0, 3]",
          "target value between endpoint values",
          "continuity on [0, 3]"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u1_frq005",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Limits, Continuity, and the Intermediate Value Theorem for a Piecewise Function",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f be a function defined as follows:\n\nf(x) = { (x\u00b2 \u2212 9) / (x \u2212 3),   if x < 3\n         { k,                      if x = 3\n         { 2x \u2212 1,                 if x > 3\n\nwhere k is a real number constant. A graph of f is described consistent with this piecewise definition. Use this function for all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate lim (x\u21923\u207b) f(x) and lim (x\u21923\u207a) f(x). Show all algebraic work.",
        "rubric": "Student earns 1 point for correctly computing both one-sided limits: lim (x\u21923\u207b) f(x) = lim (x\u21923\u207b) (x\u00b2\u22129)/(x\u22123) = lim (x\u21923\u207b) (x+3) = 6, and lim (x\u21923\u207a) f(x) = 2(3)\u22121 = 5."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Does lim (x\u21923) f(x) exist? Justify your answer using your results from part (a).",
        "rubric": "Student earns 1 point for correctly concluding the two-sided limit does not exist because the left-hand limit (6) does not equal the right-hand limit (5), citing both one-sided limits explicitly."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Identify the type of discontinuity that f has at x = 3, regardless of the value of k. Explain why this type of discontinuity occurs.",
        "rubric": "Student earns 1 point for identifying a jump discontinuity at x = 3 and explaining that this occurs because the left-hand and right-hand limits exist but are not equal to each other."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using limit laws, calculate lim (x\u2192\u2212\u221e) f(x). Consider f(x) = (x\u00b2 \u2212 9)/(x \u2212 3) for large negative values of x (i.e., as x \u2192 \u2212\u221e, use the simplified form of the expression for x < 3). Then also determine lim (x\u2192+\u221e) f(x) using the piece valid for x > 3.",
        "rubric": "Student earns 1 point for correctly simplifying (x\u00b2\u22129)/(x\u22123) = x+3 for x \u2260 3 and concluding lim (x\u2192\u2212\u221e)(x+3) = \u2212\u221e, and lim (x\u2192+\u221e)(2x\u22121) = +\u221e, with correct application of limit laws for linear functions at infinity."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Consider the function g(x) = 2x \u2212 1 on the closed interval [3, 5]. Using the Intermediate Value Theorem, justify that there exists a value c in (3, 5) such that g(c) = 8.",
        "rubric": "Student earns 1 point for correctly stating the IVT: g is continuous on [3,5] (since 2x\u22121 is a polynomial), g(3) = 5 and g(5) = 9, and since 5 < 8 < 9, by the IVT there exists c in (3,5) such that g(c) = 8."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes both one-sided limits: left-hand limit equals 6 (via factoring/canceling) and right-hand limit equals 5 (by direct substitution).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "left-hand limit",
          "right-hand limit",
          "lim x\u21923\u207b",
          "lim x\u21923\u207a",
          "difference of squares",
          "(x+3)(x\u22123)",
          "cancel common factor",
          "direct substitution",
          "equals 6",
          "equals 5",
          "factoring numerator",
          "simplified to x+3",
          "one-sided limit"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Concludes the two-sided limit does not exist because the left-hand limit and right-hand limit are not equal.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "two-sided limit does not exist",
          "left-hand limit",
          "right-hand limit",
          "one-sided limits unequal",
          "lim x\u21923",
          "DNE",
          "6 \u2260 5",
          "limit existence requires equal one-sided limits",
          "lim x\u21923\u207b \u2260 lim x\u21923\u207a",
          "two-sided limit"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Identifies jump discontinuity and explains it results from unequal but finite one-sided limits.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "jump discontinuity",
          "left-hand limit exists",
          "right-hand limit exists",
          "finite one-sided limits",
          "one-sided limits unequal",
          "discontinuity at x=3",
          "limits are finite but not equal",
          "not removable",
          "gap in graph",
          "jump in function values"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies limit laws to determine both limits at infinity: lim(x\u2192\u2212\u221e)(x+3) = \u2212\u221e and lim(x\u2192+\u221e)(2x\u22121) = +\u221e.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "limit at infinity",
          "lim x\u2192\u2212\u221e",
          "lim x\u2192+\u221e",
          "simplified form x+3",
          "2x\u22121 end behavior",
          "approaches negative infinity",
          "approaches positive infinity",
          "limit laws for linear functions",
          "unbounded behavior",
          "dominant term",
          "as x grows without bound"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly applies IVT: states g is continuous on [3,5], computes g(3)=5 and g(5)=9, notes 5 < 8 < 9, concludes existence of c in (3,5) with g(c)=8.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "Intermediate Value Theorem",
          "IVT",
          "continuous on closed interval",
          "g(3)=5",
          "g(5)=9",
          "5 < 8 < 9",
          "there exists c in (3,5)",
          "g(c)=8",
          "polynomial continuity",
          "target value between endpoint values",
          "guaranteed existence of c"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u1_frq006",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Piecewise Function: Limits, Continuity, and the Intermediate Value Theorem",
    "units": [
      1
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f be a function defined as follows:\n\nf(x) = { (x\u00b2 - 9) / (x - 3),       if x < 3\n        { k\u00b2 - 2k,                   if x = 3\n        { (2x\u00b3 - 54) / (x\u00b2 - 9),     if x > 3 and x \u2260 -3\n\nwhere k is a real-number constant. Use this definition for all parts below.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the left-hand limit and the right-hand limit of f(x) as x \u2192 3. Show all algebraic work, including any factoring or simplification used.",
        "rubric": "Earns 1 point for correctly computing lim(x\u21923\u207b) f(x) = 6 by factoring (x\u00b2-9)/(x-3) = (x+3)(x-3)/(x-3) = x+3 \u2192 6, AND correctly computing lim(x\u21923\u207a) f(x) by simplifying (2x\u00b3-54)/(x\u00b2-9) = 2(x\u00b3-27)/((x-3)(x+3)) = 2(x-3)(x\u00b2+3x+9)/((x-3)(x+3)) \u2192 2(27)/(6) = 9. Both one-sided limits must be stated with correct values."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Using your results from part (a), does lim(x\u21923) f(x) exist? Justify your answer using the definition of a two-sided limit.",
        "rubric": "Earns 1 point for stating that the two-sided limit does NOT exist because the left-hand limit (6) does not equal the right-hand limit (9), explicitly citing that lim(x\u21923\u207b) f(x) \u2260 lim(x\u21923\u207a) f(x) as the reason, and referencing the definition that both one-sided limits must be equal for the two-sided limit to exist."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Determine the value(s) of k, if any, such that f is continuous from the left at x = 3. Show your algebraic work.",
        "rubric": "Earns 1 point for setting f(3) = lim(x\u21923\u207b) f(x), i.e., k\u00b2 - 2k = 6, rearranging to k\u00b2 - 2k - 6 = 0, and solving using the quadratic formula to obtain k = (2 \u00b1 \u221a28)/2 = 1 \u00b1 \u221a7. Both values must be stated."
      },
      {
        "label": "d",
        "command": "Describe",
        "question": "Describe the type(s) of discontinuity that f has at x = 3 (for a general value of k) and at x = -3. For each, identify the specific type and explain why it is classified that way based on limit behavior.",
        "rubric": "Earns 1 point for correctly identifying the discontinuity at x = 3 as a jump discontinuity because the left- and right-hand limits both exist but are not equal (6 \u2260 9), AND correctly identifying the discontinuity at x = -3 as an infinite discontinuity (vertical asymptote) because (2x\u00b3-54)/(x\u00b2-9) has a factor of (x+3) in the denominator that does not cancel, causing the limit to grow without bound. Both discontinuities and their types must be correctly named and justified."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Consider the function g(x) = (x\u00b2 - 9)/(x - 3) for all x \u2260 3, and define g(3) = 6. A student claims that because g is continuous on the closed interval [0, 5] and g(0) = 3 and g(5) = 8, there must exist some c in (0, 5) such that g(c) = 7. Is the student correct? Justify your answer by verifying all conditions of the Intermediate Value Theorem and identifying c explicitly.",
        "rubric": "Earns 1 point for verifying all three IVT conditions: (1) g is continuous on [0, 5] because the removable discontinuity at x = 3 has been filled by defining g(3) = 6, making g continuous everywhere on [0,5]; (2) g(0) = 3 and g(5) = 8 are correctly computed; (3) 7 is between 3 and 8. Student must conclude the claim is correct by IVT and find c explicitly by solving x + 3 = 7 \u2192 c = 4, confirming c = 4 is in (0, 5)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes lim(x\u21923\u207b) f(x) = 6 by factoring (x+3)(x-3)/(x-3) and lim(x\u21923\u207a) f(x) = 9 by factoring 2(x-3)(x\u00b2+3x+9)/((x-3)(x+3)) and evaluating at x = 3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "left-hand limit",
          "right-hand limit",
          "lim x\u21923\u207b",
          "lim x\u21923\u207a",
          "factor",
          "x+3",
          "x-3 cancels",
          "one-sided limit",
          "equals 6",
          "equals 9",
          "x\u00b2+3x+9",
          "simplify"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "States that the two-sided limit does not exist because lim(x\u21923\u207b) \u2260 lim(x\u21923\u207a), citing 6 \u2260 9 and the definition requiring equal one-sided limits.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "two-sided limit does not exist",
          "left-hand limit not equal right-hand limit",
          "6 \u2260 9",
          "one-sided limits must be equal",
          "definition of limit",
          "DNE",
          "limit fails to exist",
          "unequal one-sided limits"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Sets k\u00b2 - 2k = 6, solves k\u00b2 - 2k - 6 = 0 via quadratic formula, and obtains k = 1 + \u221a7 and k = 1 - \u221a7 for left-continuity at x = 3.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "continuous from the left",
          "f(3) equals left-hand limit",
          "k\u00b2 - 2k = 6",
          "k\u00b2 - 2k - 6 = 0",
          "quadratic formula",
          "1 + \u221a7",
          "1 - \u221a7",
          "left-continuity",
          "set equal to 6"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Identifies x = 3 as a jump discontinuity because both one-sided limits exist but are unequal, and x = -3 as an infinite discontinuity because the denominator factor (x+3) does not cancel, producing a vertical asymptote.",
        "partLabel": "d",
        "skill": "describe",
        "keywords": [
          "jump discontinuity",
          "infinite discontinuity",
          "vertical asymptote",
          "one-sided limits exist but unequal",
          "denominator does not cancel",
          "x = -3",
          "x = 3",
          "unbounded",
          "type of discontinuity",
          "removable vs jump vs infinite"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Verifies IVT conditions: g continuous on [0,5] (removable discontinuity filled), g(0)=3, g(5)=8, and 3 < 7 < 8; concludes by IVT there exists c in (0,5) with g(c)=7 and finds c=4 explicitly by solving x+3=7.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "Intermediate Value Theorem",
          "IVT",
          "continuous on closed interval",
          "g(0) = 3",
          "g(5) = 8",
          "7 is between 3 and 8",
          "there exists c",
          "c = 4",
          "removable discontinuity filled",
          "x + 3 = 7"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u2_frq007",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Differentiating a Polynomial Using the Power and Sum Rules",
    "units": [
      2
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = 4x\u00b3 \u2212 7x\u00b2 + 5x \u2212 9. You will differentiate this function and evaluate the derivative at a specific point.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the power rule, constant rule, and sum rule, find f'(x).",
        "rubric": "Earns 1 point for correctly applying the power rule term-by-term and the constant rule to obtain f'(x) = 12x\u00b2 \u2212 14x + 5."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the instantaneous rate of change of f at x = 2.",
        "rubric": "Earns 1 point for correctly substituting x = 2 into f'(x) and obtaining f'(2) = 12(4) \u2212 14(2) + 5 = 48 \u2212 28 + 5 = 25."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find f''(x), the second derivative of f(x).",
        "rubric": "Earns 1 point for correctly differentiating f'(x) = 12x\u00b2 \u2212 14x + 5 to obtain f''(x) = 24x \u2212 14."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly applies the power rule to each term and the constant rule to the constant term, producing f'(x) = 12x\u00b2 \u2212 14x + 5.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "f'(x)",
          "power rule",
          "sum rule",
          "constant rule",
          "12x\u00b2",
          "\u221214x",
          "+5",
          "derivative of each term",
          "bring down exponent",
          "reduce exponent by one",
          "differentiate polynomial",
          "term-by-term differentiation",
          "derivative of constant is zero"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly evaluates f'(2) = 12(2)\u00b2 \u2212 14(2) + 5 = 25, identifying this as the instantaneous rate of change at x = 2.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "f'(2)",
          "instantaneous rate of change",
          "substitute x = 2",
          "f'(2) = 25",
          "slope of tangent line",
          "12(4)",
          "48 \u2212 28 + 5",
          "evaluate derivative at a point",
          "plug in x = 2",
          "tangent line slope at x = 2",
          "numerical evaluation of derivative"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly differentiates f'(x) = 12x\u00b2 \u2212 14x + 5 to obtain the second derivative f''(x) = 24x \u2212 14.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f''(x)",
          "second derivative",
          "d\u00b2y/dx\u00b2",
          "24x \u2212 14",
          "higher order derivative",
          "differentiate f'(x)",
          "power rule applied again",
          "24x",
          "\u221214",
          "second-order differentiation",
          "derivative of 12x\u00b2 is 24x",
          "derivative of \u221214x is \u221214"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u2_frq008",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Differentiability and the Definition of the Derivative",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a function defined as f(x) = { x\u00b2 + 2x, x < 1 ; 3x, x \u2265 1 }. You will investigate the differentiability of f at x = 1 using the limit definition of the derivative.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the limit definition of the derivative, calculate the left-hand derivative of f at x = 1, that is, evaluate lim[h\u21920\u207b] [f(1+h) \u2212 f(1)] / h.",
        "rubric": "Earns 1 point for correctly substituting f(1+h) = (1+h)\u00b2 + 2(1+h) and f(1) = 3 into the difference quotient, simplifying, and obtaining the left-hand derivative equal to 4."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the right-hand derivative of f at x = 1, that is, evaluate lim[h\u21920\u207a] [f(1+h) \u2212 f(1)] / h.",
        "rubric": "Earns 1 point for correctly substituting f(1+h) = 3(1+h) and f(1) = 3 into the difference quotient, simplifying, and obtaining the right-hand derivative equal to 3."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Is f differentiable at x = 1? Justify your answer using the results from parts (a) and (b).",
        "rubric": "Earns 1 point for concluding f is not differentiable at x = 1 and correctly justifying that the left-hand derivative (4) does not equal the right-hand derivative (3), so the two-sided limit of the difference quotient does not exist."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes the left-hand derivative using the limit definition, arriving at 4.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "limit definition of derivative",
          "difference quotient",
          "lim h\u21920\u207b",
          "left-hand derivative",
          "[f(1+h)-f(1)]/h",
          "(1+h)\u00b2+2(1+h)",
          "left-hand limit",
          "equals 4",
          "h approaches 0 from the left",
          "expand and simplify",
          "piecewise branch x < 1",
          "f(1+h) = (1+h)\u00b2 + 2(1+h)"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly computes the right-hand derivative using the limit definition, arriving at 3.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "right-hand derivative",
          "lim h\u21920\u207a",
          "difference quotient",
          "3(1+h)",
          "[f(1+h)-f(1)]/h",
          "limit definition of derivative",
          "right-hand limit",
          "h approaches 0 from the right",
          "equals 3",
          "piecewise branch x \u2265 1",
          "f(1+h) = 3(1+h)",
          "simplifies to 3"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Concludes f is not differentiable at x = 1 with correct justification that left-hand and right-hand derivatives are not equal.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "not differentiable",
          "left-hand derivative does not equal right-hand derivative",
          "4 \u2260 3",
          "two-sided limit does not exist",
          "differentiability requires equal one-sided derivatives",
          "limit of difference quotient does not exist",
          "not differentiable at x=1",
          "one-sided limits unequal",
          "derivative does not exist",
          "one-sided derivatives must agree",
          "f is not differentiable at x = 1"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u2_frq009",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Higher-Order Derivatives of a Trigonometric-Polynomial Function",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let g(x) = 4x\u00b3 \u2212 5sin(x) + 7. You will apply differentiation rules to find higher-order derivatives and interpret a result.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the power rule, constant rule, and the derivative of sine, find g'(x).",
        "rubric": "Earns 1 point for correctly differentiating each term: the power rule gives 12x\u00b2 for 4x\u00b3, the trig derivative gives \u22125cos(x) for \u22125sin(x), and the constant rule gives 0 for 7, resulting in g'(x) = 12x\u00b2 \u2212 5cos(x)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the second derivative g''(x) and evaluate g''(0).",
        "rubric": "Earns 1 point for correctly differentiating g'(x) to obtain g''(x) = 24x + 5sin(x), then evaluating at x = 0 to get g''(0) = 0."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain what the sign of g''(x) near x = 0 indicates about the graph of g, and determine whether g is concave up or concave down for small positive values of x by analyzing the sign of g''(x).",
        "rubric": "Earns 1 point for explaining that the second derivative g''(x) indicates concavity, and correctly concluding that for small positive x, g''(x) = 24x + 5sin(x) > 0, so the graph of g is concave up on that interval."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the power rule, trig derivative rule, and constant rule to find g'(x) = 12x\u00b2 \u2212 5cos(x).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "power rule",
          "g'(x)",
          "12x\u00b2",
          "derivative of sine is cosine",
          "\u22125cos(x)",
          "constant rule",
          "derivative of constant is 0",
          "sum rule",
          "g'(x) = 12x\u00b2 \u2212 5cos(x)",
          "d/dx sin(x) = cos(x)",
          "d/dx 4x\u00b3 = 12x\u00b2",
          "first derivative"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly computes the second derivative g''(x) = 24x + 5sin(x) and evaluates g''(0) = 0.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "second derivative",
          "g''(x)",
          "24x + 5sin(x)",
          "d\u00b2y/dx\u00b2",
          "derivative of cos(x) is \u2212sin(x)",
          "g''(0) = 0",
          "higher-order derivative",
          "evaluates at x=0",
          "24(0) + 5sin(0)",
          "equals zero",
          "differentiate g'(x)",
          "d/dx cos(x) = \u2212sin(x)"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Explains that positive g''(x) indicates concave up, and correctly concludes g is concave up for small positive x because 24x + 5sin(x) > 0.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "concave up",
          "g''(x) > 0",
          "second derivative positive",
          "concavity",
          "24x + 5sin(x) greater than 0",
          "positive second derivative means concave up",
          "small positive x",
          "concave upward",
          "second derivative test for concavity",
          "g''(x) indicates concavity",
          "both terms positive for small positive x",
          "graph curves upward"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u2_frq010",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Differentiability, Higher-Order Derivatives, and Trig Derivatives of a Piecewise Function",
    "units": [
      2
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a function defined by f(x) = { x\u00b2 sin(x) + 3x,  x \u2265 0 ;  ax\u00b3 + bx,  x < 0 }, where a and b are constants. Assume f is differentiable everywhere, including at x = 0.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the definition of the derivative (limit definition), find f'(0) from the right-hand side (using the piece x\u00b2 sin(x) + 3x). Show your limit process clearly.",
        "rubric": "Student earns the point by correctly setting up lim[h\u21920\u207a] of [f(0+h) \u2212 f(0)] / h = lim[h\u21920\u207a] [h\u00b2 sin(h) + 3h] / h = lim[h\u21920\u207a] (h sin(h) + 3) = 3, concluding f'(0) = 3 from the right."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "For f to be differentiable at x = 0, both the left-hand and right-hand derivatives must be equal, and f must be continuous at x = 0. Use these conditions to determine the values of a and b. Justify your reasoning.",
        "rubric": "Student earns the point by setting up two conditions: continuity requires lim[x\u21920\u207b](ax\u00b3 + bx) = f(0) = 0, which gives no new info (0 = 0), and differentiability requires the left-hand derivative equals 3. Differentiating ax\u00b3 + bx gives 3ax\u00b2 + b; evaluating at x = 0 gives b = 3. Student must also note that continuity at x = 0 is satisfied for any a, and concludes b = 3 with a being any real number (or states a is free/arbitrary)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using b = 3 and a = 1 (so f(x) = x\u00b2 sin(x) + 3x for x \u2265 0), find the second derivative f''(x) for x > 0. Apply the product rule and sum rule as needed, then evaluate f''(\u03c0).",
        "rubric": "Student earns the point by correctly differentiating f(x) = x\u00b2 sin(x) + 3x: f'(x) = 2x sin(x) + x\u00b2 cos(x) + 3 (product rule, sum rule, trig derivative), then differentiating again using the product rule and sum rule to get f''(x) = 2 sin(x) + 2x cos(x) + 2x cos(x) \u2212 x\u00b2 sin(x) = 2 sin(x) + 4x cos(x) \u2212 x\u00b2 sin(x), and evaluating f''(\u03c0) = 2 sin(\u03c0) + 4\u03c0 cos(\u03c0) \u2212 \u03c0\u00b2 sin(\u03c0) = 0 + 4\u03c0(\u22121) \u2212 0 = \u22124\u03c0."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the limit definition of the derivative from the right at x = 0 and obtains f'(0) = 3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "limit definition of the derivative",
          "definition of derivative",
          "lim h\u21920\u207a",
          "right-hand derivative",
          "right-hand limit",
          "f(0+h) minus f(0) divided by h",
          "h squared sin h over h",
          "h sin(h) approaches zero",
          "limit equals 3",
          "f prime of zero equals 3",
          "squeeze theorem for h sin h",
          "piecewise function evaluated at 0",
          "f(0) = 0"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly uses continuity and equal left/right derivatives at x = 0 to determine b = 3, with valid justification that a is arbitrary.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "differentiable at x equals 0",
          "left-hand derivative equals right-hand derivative",
          "matching one-sided derivatives",
          "continuous at x equals 0",
          "derivative of ax cubed plus bx",
          "3ax squared plus b",
          "evaluate derivative at x equals 0",
          "b equals 3",
          "differentiability implies continuity",
          "a is arbitrary",
          "a can be any real number",
          "continuity condition satisfied automatically",
          "piecewise differentiability condition"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly computes f''(x) using product rule, sum rule, and trig derivatives, then evaluates f''(\u03c0) = \u22124\u03c0.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "second derivative",
          "f double prime of x",
          "d squared y dx squared",
          "product rule applied twice",
          "sum rule for differentiation",
          "derivative of x squared sin x",
          "f prime equals 2x sin x plus x squared cos x plus 3",
          "2 sin x plus 4x cos x minus x squared sin x",
          "trig derivative of sin x is cos x",
          "sin of pi equals 0",
          "cos of pi equals negative 1",
          "f double prime of pi equals negative 4 pi",
          "second derivative evaluated at pi"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u2_frq011",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Derivatives of a Polynomial-Trigonometric Function: Rules and Interpretations",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f(x) = 3x\u2074 \u2212 2x\u00b3 + 5x \u2212 7 + cos(x). Consider this function on the interval [1, 3] and at specific points. You will analyze rates of change, apply differentiation rules, verify differentiability, and compute higher-order derivatives.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the average rate of change of f(x) = 3x\u2074 \u2212 2x\u00b3 + 5x \u2212 7 + cos(x) on the interval [1, 3]. Show all work including evaluating f(1) and f(3).",
        "rubric": "Earn 1 point: Correctly compute f(1) = 3(1)\u2074 \u2212 2(1)\u00b3 + 5(1) \u2212 7 + cos(1) = \u22121 + cos(1) \u2248 \u22120.4597 and f(3) = 3(81) \u2212 2(27) + 5(3) \u2212 7 + cos(3) = 243 \u2212 54 + 15 \u2212 7 + cos(3) = 197 + cos(3) \u2248 196.010, then apply [f(3) \u2212 f(1)] / (3 \u2212 1) to get (197 + cos(3) \u2212 (\u22121 + cos(1))) / 2 = (198 + cos(3) \u2212 cos(1)) / 2 \u2248 98.235."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the limit definition of the derivative, set up (but fully simplify) the expression for f'(x) at a general point x for the polynomial portion g(x) = 5x \u2212 7 only. That is, compute lim[h\u21920] [g(x+h) \u2212 g(x)] / h and show each step.",
        "rubric": "Earn 1 point: Correctly write [g(x+h) \u2212 g(x)] / h = [(5(x+h) \u2212 7) \u2212 (5x \u2212 7)] / h = [5x + 5h \u2212 7 \u2212 5x + 7] / h = 5h/h = 5, then take the limit as h\u21920 to conclude g'(x) = 5, demonstrating the limit definition of the derivative."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using the power rule, constant rule, sum rule, and the derivative of cosine, differentiate f(x) = 3x\u2074 \u2212 2x\u00b3 + 5x \u2212 7 + cos(x) to find f'(x). Clearly identify which rule applies to each term.",
        "rubric": "Earn 1 point: Correctly apply the power rule to each polynomial term and trig derivative to cos(x): f'(x) = 12x\u00b3 \u2212 6x\u00b2 + 5 \u2212 sin(x). Must show power rule (d/dx[x\u207f] = nx\u207f\u207b\u00b9) applied to 3x\u2074 \u2192 12x\u00b3, \u22122x\u00b3 \u2192 \u22126x\u00b2, 5x \u2192 5, constant rule giving derivative of \u22127 as 0, and trig derivative d/dx[cos(x)] = \u2212sin(x)."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "Justify whether f(x) = 3x\u2074 \u2212 2x\u00b3 + 5x \u2212 7 + cos(x) is differentiable at x = 2. Address both continuity and the existence of the derivative at that point.",
        "rubric": "Earn 1 point: Correctly state that f(x) is a sum of polynomial terms and cos(x), all of which are continuous and differentiable everywhere on \u211d, so f is differentiable at x = 2. Must reference that differentiability implies continuity, that polynomials are differentiable everywhere, that cos(x) is differentiable everywhere, and conclude the function is differentiable at x = 2 with no corners, cusps, or discontinuities."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find the second derivative f''(x) of f(x) = 3x\u2074 \u2212 2x\u00b3 + 5x \u2212 7 + cos(x), and then evaluate f''(0). Identify the notation d\u00b2y/dx\u00b2 as an equivalent form.",
        "rubric": "Earn 1 point: Correctly differentiate f'(x) = 12x\u00b3 \u2212 6x\u00b2 + 5 \u2212 sin(x) to obtain f''(x) = 36x\u00b2 \u2212 12x \u2212 cos(x) (equivalently written as d\u00b2y/dx\u00b2 = 36x\u00b2 \u2212 12x \u2212 cos(x)), then evaluate f''(0) = 36(0) \u2212 12(0) \u2212 cos(0) = 0 \u2212 0 \u2212 1 = \u22121."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes the average rate of change [f(3) \u2212 f(1)] / (3 \u2212 1) using proper evaluation of f at both endpoints, yielding (198 + cos(3) \u2212 cos(1)) / 2.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "average rate of change",
          "f(3) - f(1)",
          "divided by 2",
          "(3 - 1)",
          "slope of secant line",
          "secant slope",
          "[f(b)-f(a)]/(b-a)",
          "cos(3)",
          "cos(1)",
          "198 + cos(3) - cos(1)"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly sets up and evaluates the limit definition of the derivative for g(x) = 5x \u2212 7, simplifying [g(x+h) \u2212 g(x)] / h to 5 as h\u21920.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "limit definition",
          "lim h\u21920",
          "[f(x+h) - f(x)]/h",
          "definition of derivative",
          "5h/h",
          "equals 5",
          "limit as h approaches 0",
          "difference quotient",
          "instantaneous rate of change",
          "g'(x) = 5"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly differentiates all terms using the power rule, constant rule, sum rule, and trig derivative of cosine to obtain f'(x) = 12x\u00b3 \u2212 6x\u00b2 + 5 \u2212 sin(x).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f'(x) = 12x\u00b3 - 6x\u00b2 + 5 - sin(x)",
          "power rule",
          "constant rule",
          "sum rule",
          "d/dx[cos(x)] = -sin(x)",
          "trig derivative",
          "12x\u00b3",
          "-6x\u00b2",
          "-sin(x)",
          "derivative of cosine"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly justifies differentiability at x = 2 by noting f is a sum of polynomial and cosine functions, both differentiable everywhere, with no discontinuities, corners, or cusps.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "differentiable everywhere",
          "polynomials differentiable",
          "cos(x) differentiable",
          "no corner",
          "no cusp",
          "no discontinuity",
          "differentiability implies continuity",
          "differentiable at x = 2",
          "smooth function",
          "continuous and differentiable"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly computes f''(x) = 36x\u00b2 \u2212 12x \u2212 cos(x) by differentiating f'(x), then evaluates f''(0) = \u22121, with notation d\u00b2y/dx\u00b2 acknowledged.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "f''(x)",
          "second derivative",
          "d\u00b2y/dx\u00b2",
          "36x\u00b2 - 12x - cos(x)",
          "f''(0) = -1",
          "higher order derivative",
          "-cos(0) = -1",
          "36x\u00b2",
          "-12x",
          "second-order derivative"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u3_frq013",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Differentiating a Product Involving a Trigonometric and Exponential Function",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = x\u00b2 \u00b7 e^(3x) \u00b7 sin(x). You will differentiate this function and evaluate the result at a specific point using the product rule and chain rule together.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the product rule, find f'(x). Your answer should be fully expanded and may include unsimplified terms. Show all steps clearly.",
        "rubric": "Earns 1 point for correctly applying the product rule to x\u00b2 \u00b7 e^(3x) \u00b7 sin(x), producing three terms: 2x\u00b7e^(3x)\u00b7sin(x) + x\u00b2\u00b73e^(3x)\u00b7sin(x) + x\u00b2\u00b7e^(3x)\u00b7cos(x). The derivative of e^(3x) must correctly use the chain rule to produce 3e^(3x)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Evaluate f'(0) using your expression from part (a). Simplify completely.",
        "rubric": "Earns 1 point for substituting x = 0 into the correct f'(x) and obtaining f'(0) = 0. All three terms must evaluate to 0 at x = 0, and the student must show the substitution clearly."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Interpret what f'(0) = 0 tells you about the graph of f at x = 0. Is x = 0 necessarily a local extremum? Justify your answer.",
        "rubric": "Earns 1 point for stating that f'(0) = 0 means the tangent line to f at x = 0 is horizontal, and for providing a valid justification about whether x = 0 is a local extremum - such as checking the sign of f'(x) on either side of x = 0 or noting that a zero derivative alone does not guarantee a local extremum (e.g., could be an inflection point). A correct sign analysis or reference to the first derivative test is required."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the product rule to the three-factor product x\u00b2\u00b7e^(3x)\u00b7sin(x), correctly differentiating e^(3x) as 3e^(3x) via the chain rule, yielding f'(x) = 2x\u00b7e^(3x)\u00b7sin(x) + 3x\u00b2\u00b7e^(3x)\u00b7sin(x) + x\u00b2\u00b7e^(3x)\u00b7cos(x).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "product rule",
          "three-factor product rule",
          "2x\u00b7e^(3x)\u00b7sin(x)",
          "3e^(3x)",
          "chain rule",
          "x\u00b2\u00b7e^(3x)\u00b7cos(x)",
          "3x\u00b2\u00b7e^(3x)\u00b7sin(x)",
          "derivative of e^(3x)",
          "f'(x)",
          "differentiate each factor",
          "sum of three terms"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Substitutes x = 0 into f'(x) and correctly evaluates each term as 0, concluding f'(0) = 0.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "f'(0)",
          "substitute x = 0",
          "evaluates to 0",
          "each term is zero",
          "x\u00b2 evaluated at 0",
          "f'(0) = 0",
          "sin(0) = 0",
          "e^0 = 1",
          "simplify",
          "substitution"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Interprets f'(0) = 0 as a horizontal tangent line and correctly justifies whether x = 0 is a local extremum using the first derivative test or sign analysis of f'(x) near x = 0.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "horizontal tangent",
          "f'(0) = 0",
          "local extremum",
          "first derivative test",
          "sign of f'(x)",
          "sign changes",
          "does not change sign",
          "critical point",
          "not necessarily a local extremum",
          "inflection point",
          "tangent line slope zero"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u3_frq014",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Implicit Differentiation of a Curve Involving x and y",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the curve defined implicitly by the equation x\u00b3 + y\u00b3 = 6xy. This curve is known as the Folium of Descartes. You will use implicit differentiation to find the slope of the tangent line at a specific point.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Differentiate both sides of x\u00b3 + y\u00b3 = 6xy with respect to x using implicit differentiation. Solve for dy/dx. Show all differentiation steps.",
        "rubric": "Earns 1 point for correctly differentiating both sides with respect to x: left side gives 3x\u00b2 + 3y\u00b2(dy/dx); right side requires the product rule on 6xy giving 6y + 6x(dy/dx). The student must then correctly isolate dy/dx to obtain dy/dx = (6y \u2212 3x\u00b2) / (3y\u00b2 \u2212 6x), or equivalently (2y \u2212 x\u00b2) / (y\u00b2 \u2212 2x)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Verify that the point (3, 3) lies on the curve x\u00b3 + y\u00b3 = 6xy, and then find the slope of the tangent line to the curve at (3, 3).",
        "rubric": "Earns 1 point for confirming (3, 3) satisfies x\u00b3 + y\u00b3 = 6xy (since 27 + 27 = 54 = 6\u00b73\u00b73 = 54) AND for correctly substituting x = 3, y = 3 into dy/dx = (2y \u2212 x\u00b2)/(y\u00b2 \u2212 2x) to obtain dy/dx = (6 \u2212 9)/(9 \u2212 6) = \u22123/3 = \u22121."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "At the point (3, 3), explain why the expression for dy/dx found in part (a) would be undefined if the denominator y\u00b2 \u2212 2x equals zero. What does this mean geometrically for the curve at such a point?",
        "rubric": "Earns 1 point for explaining that dy/dx is undefined when y\u00b2 \u2212 2x = 0 because division by zero is undefined, and for correctly interpreting this geometrically as a vertical tangent line to the curve at that point. The student should connect an undefined dy/dx to a vertical tangent or infinite slope."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies implicit differentiation to x\u00b3 + y\u00b3 = 6xy, using the chain rule on y\u00b3 to get 3y\u00b2(dy/dx) and the product rule on 6xy to get 6y + 6x(dy/dx), then solves for dy/dx = (2y \u2212 x\u00b2)/(y\u00b2 \u2212 2x).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "implicit differentiation",
          "dy/dx",
          "3y\u00b2(dy/dx)",
          "product rule on 6xy",
          "6y + 6x(dy/dx)",
          "solve for dy/dx",
          "(2y \u2212 x\u00b2)/(y\u00b2 \u2212 2x)",
          "chain rule on y\u00b3",
          "differentiate with respect to x",
          "isolate dy/dx",
          "collect dy/dx terms"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Verifies (3,3) lies on the curve by checking 27 + 27 = 54 = 6(3)(3), and evaluates dy/dx at (3,3) to obtain \u22121.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "(3, 3) on the curve",
          "27 + 27 = 54",
          "substitute x = 3 y = 3",
          "dy/dx = -1",
          "slope equals negative one",
          "tangent line slope",
          "(2(3) \u2212 9)/(9 \u2212 6)",
          "\u22123/3",
          "verify point satisfies equation",
          "evaluate dy/dx at point"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Explains that dy/dx is undefined when y\u00b2 \u2212 2x = 0 due to division by zero, and correctly interprets this as a vertical tangent line on the curve at that point.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "undefined dy/dx",
          "denominator equals zero",
          "division by zero",
          "vertical tangent line",
          "vertical tangent",
          "y\u00b2 \u2212 2x = 0",
          "infinite slope",
          "geometric interpretation",
          "tangent line is vertical",
          "slope undefined",
          "curve has vertical tangent"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u3_frq015",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Logarithmic Differentiation of a Complex Product-Quotient Function",
    "units": [
      3
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = [ x^5 \u00b7 (3x + 1)^4 ] / [ sqrt(x^2 + 7) ] for x > 0. You will use logarithmic differentiation to find f'(x).\n\nDefine y = f(x) and take the natural logarithm of both sides before differentiating.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Take the natural logarithm of both sides of y = [ x^5 \u00b7 (3x + 1)^4 ] / [ sqrt(x^2 + 7) ] and use logarithm properties to fully expand ln(y) as a sum and/or difference of simpler logarithmic terms.",
        "rubric": "Earns 1 point for correctly applying logarithm rules: ln(y) = 5\u00b7ln(x) + 4\u00b7ln(3x + 1) \u2212 (1/2)\u00b7ln(x^2 + 7). All three terms must be present with correct coefficients and correct signs."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Differentiate both sides of the expanded logarithmic equation with respect to x to find an expression for (1/y)\u00b7(dy/dx). Show all differentiation steps.",
        "rubric": "Earns 1 point for correctly differentiating implicitly to obtain (1/y)(dy/dx) = 5/x + 12/(3x+1) \u2212 x/(x^2+7). Each term must be differentiated correctly: 5/x from 5\u00b7ln(x), 12/(3x+1) from 4\u00b7ln(3x+1) using chain rule giving 4\u00b7[3/(3x+1)], and \u2212x/(x^2+7) from \u2212(1/2)\u00b7ln(x^2+7) using chain rule giving \u2212(1/2)\u00b7[2x/(x^2+7)]."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Solve for f'(x) = dy/dx by multiplying both sides by y and substituting the original expression for y. Write f'(x) in a fully simplified factored form.",
        "rubric": "Earns 1 point for correctly writing f'(x) = [ x^5 \u00b7 (3x + 1)^4 / sqrt(x^2 + 7) ] \u00b7 [ 5/x + 12/(3x+1) \u2212 x/(x^2+7) ]. Must show multiplication by the original y, correct substitution of y = x^5\u00b7(3x+1)^4 / sqrt(x^2+7), and the bracketed derivative factor with all three correct terms."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies logarithm properties to expand ln(y): ln(y) = 5\u00b7ln(x) + 4\u00b7ln(3x+1) \u2212 (1/2)\u00b7ln(x^2+7), with correct coefficients 5, 4, and 1/2 and correct addition/subtraction structure.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "ln(y)",
          "natural logarithm",
          "logarithm properties",
          "log of a product",
          "log of a quotient",
          "log of a power",
          "5\u00b7ln(x)",
          "4\u00b7ln(3x+1)",
          "(1/2)\u00b7ln(x^2+7)",
          "sum and difference",
          "expand logarithm",
          "logarithmic differentiation setup",
          "power rule for logarithms",
          "quotient rule for logarithms",
          "product rule for logarithms",
          "coefficient from exponent",
          "ln of square root",
          "rewrite sqrt as power 1/2"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly differentiates implicitly to get (1/y)(dy/dx) = 5/x + 12/(3x+1) \u2212 x/(x^2+7), applying chain rule to each logarithmic term and implicit differentiation on the left side.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "(1/y)(dy/dx)",
          "implicit differentiation",
          "chain rule",
          "d/dx ln(u)",
          "1/u \u00b7 du/dx",
          "5/x",
          "12/(3x+1)",
          "x/(x^2+7)",
          "differentiate both sides",
          "dy/dx",
          "logarithmic differentiation",
          "derivative of ln(x)",
          "derivative of ln(3x+1)",
          "derivative of ln(x^2+7)",
          "inner derivative",
          "composite function derivative",
          "4\u00b7[3/(3x+1)]",
          "(1/2)\u00b7[2x/(x^2+7)]"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly multiplies both sides by y and substitutes the original expression to obtain f'(x) = [ x^5\u00b7(3x+1)^4 / sqrt(x^2+7) ] \u00b7 [ 5/x + 12/(3x+1) \u2212 x/(x^2+7) ] in factored form.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "multiply both sides by y",
          "substitute original y",
          "f'(x)",
          "dy/dx",
          "factored form",
          "x^5\u00b7(3x+1)^4 / sqrt(x^2+7)",
          "5/x + 12/(3x+1) \u2212 x/(x^2+7)",
          "logarithmic differentiation result",
          "solve for dy/dx",
          "final derivative",
          "back-substitute original function",
          "multiply by f(x)",
          "product of original function and derivative sum",
          "isolated derivative",
          "complete logarithmic differentiation"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u3_frq016",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Differentiation Techniques: Chain, Product, Quotient, Implicit, Inverse Trig, and Logarithmic",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "This problem explores several differentiation techniques applied to different functions. Answer each part independently using the appropriate differentiation rule or method.\n\nConsider the following five functions and relations:\n- Part (a): f(x) = sin\u00b3(x\u00b2 + 1)\n- Part (b): g(x) = x\u00b3 \u00b7 e\u02e3\n- Part (c): h(x) = (x\u00b2 + 3) / (2x \u2212 1)\n- Part (d): x\u00b2 + xy + y\u00b3 = 7\n- Part (e): k(x) = arctan(3x) \u00b7 ln(x\u00b2)",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Let f(x) = sin\u00b3(x\u00b2 + 1). Use the chain rule to find f'(x). Show all intermediate steps, identifying the outer and inner functions.",
        "rubric": "Earns 1 point for correctly applying the chain rule twice: differentiating the outer cubic power to get 3sin\u00b2(x\u00b2 + 1), then multiplying by the derivative of sin(x\u00b2 + 1) = cos(x\u00b2 + 1), then multiplying by the derivative of the innermost function (x\u00b2 + 1) = 2x. Final answer: f'(x) = 3sin\u00b2(x\u00b2 + 1) \u00b7 cos(x\u00b2 + 1) \u00b7 2x = 6x sin\u00b2(x\u00b2 + 1) cos(x\u00b2 + 1)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Let g(x) = x\u00b3 \u00b7 e\u02e3. Use the product rule to find g'(x), then evaluate g'(1). Leave your answer in exact form.",
        "rubric": "Earns 1 point for correctly applying the product rule: g'(x) = 3x\u00b2\u00b7e\u02e3 + x\u00b3\u00b7e\u02e3, factoring to (3x\u00b2 + x\u00b3)e\u02e3 or x\u00b2(3 + x)e\u02e3, and evaluating g'(1) = (3 + 1)e\u00b9 = 4e."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Let h(x) = (x\u00b2 + 3) / (2x \u2212 1). Use the quotient rule to find h'(x) and simplify your answer completely.",
        "rubric": "Earns 1 point for correctly applying the quotient rule: h'(x) = [(2x)(2x \u2212 1) \u2212 (x\u00b2 + 3)(2)] / (2x \u2212 1)\u00b2. Expanding the numerator: (4x\u00b2 \u2212 2x) \u2212 (2x\u00b2 + 6) = 2x\u00b2 \u2212 2x \u2212 6. Final simplified answer: h'(x) = (2x\u00b2 \u2212 2x \u2212 6) / (2x \u2212 1)\u00b2."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Given the implicit relation x\u00b2 + xy + y\u00b3 = 7, use implicit differentiation to find dy/dx. Then find the slope of the tangent line at the point (1, 1).",
        "rubric": "Earns 1 point for correctly differentiating implicitly: 2x + (y + x\u00b7dy/dx) + 3y\u00b2\u00b7dy/dx = 0, solving for dy/dx = \u2212(2x + y) / (x + 3y\u00b2), and substituting (1,1) to get dy/dx = \u2212(2 + 1)/(1 + 3) = \u22123/4."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Let k(x) = arctan(3x) \u00b7 ln(x\u00b2). Find k'(x) using both the product rule and the inverse trig derivative for arctan. Simplify ln(x\u00b2) before differentiating if helpful.",
        "rubric": "Earns 1 point for recognizing ln(x\u00b2) = 2ln|x|, applying the product rule: k'(x) = [3/(1 + 9x\u00b2)]\u00b72ln|x| + arctan(3x)\u00b7(2/x), giving k'(x) = 6ln|x|/(1 + 9x\u00b2) + 2arctan(3x)/x."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the chain rule to f(x) = sin\u00b3(x\u00b2 + 1), identifying outer cubic, middle sine, and inner quadratic; arrives at f'(x) = 6x sin\u00b2(x\u00b2 + 1) cos(x\u00b2 + 1).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "chain rule",
          "3sin\u00b2(x\u00b2 + 1)",
          "cos(x\u00b2 + 1)",
          "2x",
          "outer function",
          "inner function",
          "6x sin\u00b2(x\u00b2 + 1) cos(x\u00b2 + 1)",
          "composite function derivative",
          "f'(x)",
          "multiply derivatives",
          "repeated chain rule",
          "power of trig function",
          "d/dx sin^3",
          "nested composition",
          "derivative of x\u00b2 + 1"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the product rule to g(x) = x\u00b3\u00b7e\u02e3, differentiates each factor, combines terms, and evaluates g'(1) = 4e.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "product rule",
          "3x\u00b2\u00b7e\u02e3",
          "x\u00b3\u00b7e\u02e3",
          "g'(x) = 3x\u00b2e\u02e3 + x\u00b3e\u02e3",
          "x\u00b2(3 + x)e\u02e3",
          "g'(1)",
          "4e",
          "derivative of e\u02e3 is e\u02e3",
          "uv' + vu'",
          "evaluate at x equals 1",
          "factor out x\u00b2e\u02e3",
          "exact form",
          "exponential function derivative",
          "power function times exponential",
          "combine like terms"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies the quotient rule to h(x) = (x\u00b2 + 3)/(2x \u2212 1) and simplifies the numerator to 2x\u00b2 \u2212 2x \u2212 6, giving h'(x) = (2x\u00b2 \u2212 2x \u2212 6)/(2x \u2212 1)\u00b2.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "quotient rule",
          "(2x)(2x \u2212 1)",
          "(x\u00b2 + 3)(2)",
          "numerator 2x\u00b2 \u2212 2x \u2212 6",
          "(2x \u2212 1)\u00b2",
          "low d-high minus high d-low",
          "h'(x)",
          "denominator squared",
          "simplified numerator",
          "2x\u00b2 \u2212 2x \u2212 6 over (2x\u22121)\u00b2",
          "derivative of numerator 2x",
          "derivative of denominator 2",
          "expand and combine numerator",
          "rational function derivative",
          "4x\u00b2 \u2212 2x minus 2x\u00b2 + 6"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly differentiates x\u00b2 + xy + y\u00b3 = 7 implicitly, applies product rule to xy term, solves for dy/dx, and evaluates slope at (1,1) as \u22123/4.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "implicit differentiation",
          "dy/dx",
          "product rule on xy",
          "y + x\u00b7dy/dx",
          "3y\u00b2\u00b7dy/dx",
          "solve for dy/dx",
          "\u2212(2x + y)/(x + 3y\u00b2)",
          "slope at (1,1)",
          "\u22123/4",
          "tangent line slope",
          "differentiate both sides",
          "collect dy/dx terms",
          "substitute point (1,1)",
          "2x + y + x\u00b7dy/dx + 3y\u00b2\u00b7dy/dx = 0",
          "factor out dy/dx"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly simplifies ln(x\u00b2) to 2ln|x|, applies product rule with inverse trig derivative d/dx[arctan(3x)] = 3/(1 + 9x\u00b2), and arrives at k'(x) = 6ln|x|/(1 + 9x\u00b2) + 2arctan(3x)/x.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "arctan derivative",
          "d/dx arctan(3x)",
          "3/(1 + 9x\u00b2)",
          "ln(x\u00b2) = 2ln|x|",
          "product rule",
          "2/x",
          "6ln|x|/(1 + 9x\u00b2)",
          "2arctan(3x)/x",
          "inverse trig derivative",
          "k'(x)",
          "logarithm property power rule",
          "chain rule on arctan(3x)",
          "derivative of ln|x| is 1/x",
          "1 + 9x\u00b2 denominator",
          "simplify before differentiating"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u3_frq017",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Multi-Rule Differentiation: Chain, Product, Quotient, Implicit, Inverse Trig, and Logarithmic",
    "units": [
      3
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "This problem explores differentiation techniques across several functions and a curve. Answer each part completely, showing all work.\n\nDefine the following:\n  \u2022 f(x) = sin(x\u00b2 \u00b7 e\u02e3)  \n  \u2022 g(x) = x\u00b3 \u00b7 arctan(2x)  \n  \u2022 h(x) = (x\u2074 + 3x) / (ln(x\u00b2 + 1))  \n  \u2022 A curve C is defined implicitly by: x\u00b2y + y\u00b3 = x + 1  \n  \u2022 k(x) = (x\u00b2 + 1)^(sin x) \u00b7 (2x + 3)^(x\u00b3)  [logarithmic differentiation required]",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find f'(x) where f(x) = sin(x\u00b2 \u00b7 e\u02e3). Show all steps, clearly identifying your use of the chain rule and the product rule for the inner function.",
        "rubric": "Earns 1 point for correctly computing f'(x) = cos(x\u00b2 \u00b7 e\u02e3) \u00b7 (2xe\u02e3 + x\u00b2e\u02e3). Must show the outer derivative cos(x\u00b2 \u00b7 e\u02e3) from the chain rule and the inner derivative (2xe\u02e3 + x\u00b2e\u02e3) from the product rule applied to x\u00b2e\u02e3."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find g'(x) where g(x) = x\u00b3 \u00b7 arctan(2x). Apply the product rule, and correctly differentiate arctan(2x) using the inverse trig derivative formula and the chain rule.",
        "rubric": "Earns 1 point for correctly computing g'(x) = 3x\u00b2 \u00b7 arctan(2x) + x\u00b3 \u00b7 (2 / (1 + 4x\u00b2)). Must show product rule structure: derivative of first times second plus first times derivative of second, with d/dx[arctan(2x)] = 2/(1+4x\u00b2)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find h'(x) where h(x) = (x\u2074 + 3x) / (ln(x\u00b2 + 1)). Apply the quotient rule, and correctly differentiate ln(x\u00b2 + 1) using the chain rule.",
        "rubric": "Earns 1 point for correctly applying the quotient rule: h'(x) = [(4x\u00b3 + 3)\u00b7ln(x\u00b2 + 1) \u2212 (x\u2074 + 3x)\u00b7(2x/(x\u00b2 + 1))] / [ln(x\u00b2 + 1)]\u00b2. Must show the quotient rule formula (lo\u00b7d(hi) \u2212 hi\u00b7d(lo)) / lo\u00b2, with d/dx[ln(x\u00b2+1)] = 2x/(x\u00b2+1) from the chain rule."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "For curve C defined by x\u00b2y + y\u00b3 = x + 1, find dy/dx using implicit differentiation. Then find the slope of the tangent line to C at the point (1, 1), verifying first that (1, 1) lies on the curve.",
        "rubric": "Earns 1 point for correctly using implicit differentiation: differentiating x\u00b2y with the product rule to get 2xy + x\u00b2(dy/dx), differentiating y\u00b3 to get 3y\u00b2(dy/dx), and differentiating the right side to get 1, then solving for dy/dx = (1 \u2212 2xy) / (x\u00b2 + 3y\u00b2). Verification: (1)\u00b2(1) + (1)\u00b3 = 1 + 1 = 2 = 1 + 1 \u2713, so (1, 1) lies on the curve. At (1, 1): dy/dx = (1 \u2212 2(1)(1)) / (1 + 3(1)\u00b2) = (1 \u2212 2) / (1 + 3) = \u22121/4."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Use logarithmic differentiation to find k'(x) where k(x) = (x\u00b2 + 1)^(sin x) \u00b7 (2x + 3)^(x\u00b3). Take the natural log of both sides, differentiate implicitly, and solve for k'(x). Express your final answer in terms of k(x) or fully expanded.",
        "rubric": "Earns 1 point for correctly applying logarithmic differentiation: taking ln k = sin(x)\u00b7ln(x\u00b2+1) + x\u00b3\u00b7ln(2x+3), then differentiating both sides implicitly to get (1/k)\u00b7k' = cos(x)\u00b7ln(x\u00b2+1) + sin(x)\u00b7(2x/(x\u00b2+1)) + 3x\u00b2\u00b7ln(2x+3) + x\u00b3\u00b7(2/(2x+3)), and multiplying both sides by k(x) to obtain k'(x) = (x\u00b2+1)^(sin x)\u00b7(2x+3)^(x\u00b3) \u00b7 [cos(x)\u00b7ln(x\u00b2+1) + 2x\u00b7sin(x)/(x\u00b2+1) + 3x\u00b2\u00b7ln(2x+3) + 2x\u00b3/(2x+3)]."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates f(x) = sin(x\u00b2e\u02e3) using chain rule on the outer sine function and product rule on the inner function x\u00b2e\u02e3, arriving at f'(x) = cos(x\u00b2e\u02e3)\u00b7(2xe\u02e3 + x\u00b2e\u02e3).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "chain rule",
          "product rule",
          "cos(x\u00b2e\u02e3)",
          "outer derivative",
          "inner derivative",
          "2xe\u02e3 + x\u00b2e\u02e3",
          "f'(x)",
          "composite function",
          "d/dx[sin(u)]",
          "u = x\u00b2e\u02e3"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly differentiates g(x) = x\u00b3\u00b7arctan(2x) using the product rule and the inverse tangent derivative formula d/dx[arctan(u)] = u'/(1+u\u00b2), arriving at g'(x) = 3x\u00b2\u00b7arctan(2x) + 2x\u00b3/(1+4x\u00b2).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "product rule",
          "arctan(2x)",
          "inverse tangent derivative",
          "d/dx[arctan(u)]",
          "1/(1+u\u00b2)",
          "2/(1+4x\u00b2)",
          "3x\u00b2\u00b7arctan(2x)",
          "g'(x)",
          "inverse trig",
          "chain rule on arctan"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies the quotient rule to h(x) = (x\u2074+3x)/ln(x\u00b2+1) and differentiates ln(x\u00b2+1) via the chain rule as 2x/(x\u00b2+1), arriving at h'(x) = [(4x\u00b3+3)\u00b7ln(x\u00b2+1) \u2212 (x\u2074+3x)\u00b72x/(x\u00b2+1)] / [ln(x\u00b2+1)]\u00b2.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "quotient rule",
          "lo d(hi) minus hi d(lo)",
          "ln(x\u00b2+1)",
          "d/dx[ln(u)]",
          "2x/(x\u00b2+1)",
          "4x\u00b3+3",
          "[ln(x\u00b2+1)]\u00b2",
          "h'(x)",
          "chain rule on ln",
          "denominator squared"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies implicit differentiation to x\u00b2y + y\u00b3 = x + 1, using the product rule on x\u00b2y, to find dy/dx = (1\u22122xy)/(x\u00b2+3y\u00b2), verifies (1,1) lies on the curve since 1+1=2=1+1, and correctly evaluates the slope at (1,1) as \u22121/4.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "implicit differentiation",
          "dy/dx",
          "product rule on x\u00b2y",
          "2xy + x\u00b2(dy/dx)",
          "3y\u00b2(dy/dx)",
          "solve for dy/dx",
          "(1\u22122xy)/(x\u00b2+3y\u00b2)",
          "slope at (1,1)",
          "tangent line slope",
          "\u22121/4",
          "verify point on curve"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly applies logarithmic differentiation by taking ln of both sides, differentiating implicitly using the product rule on each logarithmic term, and solving for k'(x) = k(x)\u00b7[cos(x)\u00b7ln(x\u00b2+1) + 2x\u00b7sin(x)/(x\u00b2+1) + 3x\u00b2\u00b7ln(2x+3) + 2x\u00b3/(2x+3)].",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "logarithmic differentiation",
          "ln k",
          "implicit differentiation",
          "product rule on sin(x)\u00b7ln(x\u00b2+1)",
          "d/dx[x\u00b3\u00b7ln(2x+3)]",
          "(1/k)\u00b7dk/dx",
          "multiply both sides by k(x)",
          "k'(x)",
          "cos(x)\u00b7ln(x\u00b2+1)",
          "2x\u00b3/(2x+3)"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u4_frq018",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Linearization of a Natural Logarithm Function",
    "units": [
      4
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = ln(x). Consider the linearization of f at x = 1, which is the tangent line approximation L(x) at that point.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find f'(x) and evaluate f'(1). Show your work.",
        "rubric": "Student correctly differentiates f(x) = ln(x) to get f'(x) = 1/x and evaluates f'(1) = 1."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Write the equation of the linearization L(x) of f at x = 1.",
        "rubric": "Student correctly writes L(x) = x - 1 using the point-slope form with f(1) = 0 and slope f'(1) = 1."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Use L(x) to approximate ln(1.2). Is this approximation an overestimate or an underestimate? Justify your answer.",
        "rubric": "Student computes L(1.2) = 0.2 and justifies that it is an overestimate because f''(x) = -1/x\u00b2 < 0, meaning f is concave down, so the tangent line lies above the curve."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates f(x) = ln(x) to obtain f'(x) = 1/x and evaluates f'(1) = 1.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "f'(x)",
          "1/x",
          "derivative of ln(x)",
          "f'(1) = 1",
          "differentiates",
          "natural log derivative",
          "d/dx ln(x)",
          "slope at x=1",
          "instantaneous rate of change"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly writes the linearization L(x) = x - 1 using point-slope form with f(1) = ln(1) = 0 and slope 1.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "L(x)",
          "linearization",
          "tangent line approximation",
          "L(x) = x - 1",
          "point-slope",
          "f(1) = 0",
          "local linear approximation",
          "L(x) = 1(x-1) + 0",
          "ln(1) = 0",
          "slope equals 1"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Computes L(1.2) = 0.2 and correctly identifies the approximation as an overestimate, justifying with concavity: f''(x) = -1/x\u00b2 < 0 so f is concave down and the tangent line lies above the curve.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "L(1.2) = 0.2",
          "overestimate",
          "concave down",
          "f''(x) = -1/x\u00b2",
          "f'' < 0",
          "tangent line lies above",
          "concavity",
          "second derivative negative",
          "approximation exceeds actual value",
          "ln(1.2)"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u4_frq019",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Related Rates: Expanding Ripple on a Pond",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A stone is dropped into a calm pond, creating a circular ripple that expands outward. The radius r of the ripple is increasing at a constant rate of 3 cm/s. At the moment when the radius is 10 cm, answer the following questions. Recall that the area of a circle is A = \u03c0r\u00b2 and the circumference is C = 2\u03c0r.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the rate at which the area A of the ripple is increasing at the moment when r = 10 cm. Include units in your answer.",
        "rubric": "Earn 1 point for correctly differentiating A = \u03c0r\u00b2 implicitly with respect to time to obtain dA/dt = 2\u03c0r(dr/dt), substituting dr/dt = 3 and r = 10, and arriving at dA/dt = 60\u03c0 cm\u00b2/s."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the rate at which the circumference C of the ripple is increasing at the moment when r = 10 cm. Include units in your answer.",
        "rubric": "Earn 1 point for correctly differentiating C = 2\u03c0r with respect to time to obtain dC/dt = 2\u03c0(dr/dt), substituting dr/dt = 3, and arriving at dC/dt = 6\u03c0 cm/s."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A student claims that because dr/dt is constant, dA/dt must also be constant. Is the student correct? Justify your answer using the expression for dA/dt found in part (a).",
        "rubric": "Earn 1 point for correctly stating that the student is incorrect and explaining that dA/dt = 2\u03c0r(dr/dt) depends on r, so as r increases over time, dA/dt also increases even though dr/dt is constant; the rate of change of area is not constant."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates A = \u03c0r\u00b2 implicitly with respect to time and evaluates dA/dt = 60\u03c0 cm\u00b2/s at r = 10, dr/dt = 3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dA/dt",
          "dA/dt = 2\u03c0r(dr/dt)",
          "implicit differentiation",
          "chain rule",
          "60\u03c0",
          "60\u03c0 cm\u00b2/s",
          "related rates",
          "dr/dt = 3",
          "r = 10",
          "rate of change of area"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly differentiates C = 2\u03c0r with respect to time and evaluates dC/dt = 6\u03c0 cm/s.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "dC/dt",
          "dC/dt = 2\u03c0(dr/dt)",
          "6\u03c0",
          "6\u03c0 cm/s",
          "circumference rate",
          "implicit differentiation",
          "chain rule",
          "related rates",
          "dr/dt = 3",
          "rate of change of circumference"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "States the student is incorrect and justifies that dA/dt = 2\u03c0r(dr/dt) depends on r, so dA/dt increases as r increases even though dr/dt is constant.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "student is incorrect",
          "dA/dt depends on r",
          "dA/dt = 2\u03c0r(dr/dt)",
          "r increases",
          "dA/dt increases",
          "not constant",
          "proportional to r",
          "dr/dt constant does not imply dA/dt constant",
          "rate of change of area grows",
          "depends on radius"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u4_frq020",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Mean Value Theorem Applied to a Differentiable Function",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = x\u00b3 \u2212 3x\u00b2 + 2 on the closed interval [0, 3]. You may use the fact that f is continuous on [0, 3] and differentiable on (0, 3).",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the average rate of change of f on the interval [0, 3].",
        "rubric": "Earn 1 point for correctly computing [f(3) \u2212 f(0)] / (3 \u2212 0) = (2 \u2212 2) / 3 = 0."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "State the Mean Value Theorem and explain why it guarantees the existence of at least one value c in (0, 3) such that f'(c) = 0.",
        "rubric": "Earn 1 point for stating that since f is continuous on [0, 3] and differentiable on (0, 3), the Mean Value Theorem guarantees at least one c in (0, 3) such that f'(c) = [f(3) \u2212 f(0)] / (3 \u2212 0) = 0, referencing both continuity and differentiability conditions and the conclusion f'(c) equals the average rate of change."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find all values of c in the open interval (0, 3) that satisfy the conclusion of the Mean Value Theorem for f on [0, 3].",
        "rubric": "Earn 1 point for correctly computing f'(x) = 3x\u00b2 \u2212 6x, setting 3x\u00b2 \u2212 6x = 0, factoring to get 3x(x \u2212 2) = 0, and identifying c = 2 as the value in (0, 3) (noting x = 0 is not in the open interval)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes the average rate of change [f(3) \u2212 f(0)] / (3 \u2212 0) and obtains 0.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "average rate of change",
          "[f(3) - f(0)] / (3 - 0)",
          "f(3) = 2",
          "f(0) = 2",
          "(2 - 2) / 3",
          "equals 0",
          "slope of secant line",
          "difference quotient",
          "net change over interval",
          "zero average rate"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "States MVT conditions (continuous on [0,3], differentiable on (0,3)) and concludes there exists c in (0,3) with f'(c) equal to the average rate of change of 0.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "Mean Value Theorem",
          "MVT",
          "continuous on [0,3]",
          "differentiable on (0,3)",
          "there exists c",
          "f'(c) = 0",
          "f'(c) equals average rate of change",
          "at least one c in (0,3)",
          "MVT guarantees",
          "slope of tangent equals slope of secant"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly differentiates f to get f'(x) = 3x\u00b2 \u2212 6x, sets equal to 0, solves, and identifies c = 2 as the only valid value in (0, 3).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f'(x) = 3x\u00b2 - 6x",
          "3x\u00b2 - 6x = 0",
          "3x(x - 2) = 0",
          "x = 0 or x = 2",
          "c = 2",
          "x = 0 excluded",
          "open interval (0,3)",
          "c = 2 in (0,3)",
          "derivative equals zero",
          "MVT value c"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u4_frq021",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Related Rates: Expanding Ripple and Shadow Length",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A stone is dropped into a calm pond, creating a circular ripple whose radius r increases at a constant rate of 3 cm/sec. At the same moment, a street lamp stands 10 meters tall directly above the point where the stone was dropped. A beetle sitting on the expanding ripple casts a shadow on the flat ground. Model the beetle's position as lying on the circle of radius r (in centimeters) centered at the base of the lamp. Assume the lamp is at height h = 1000 cm above the ground and that the beetle is always at ground level on the ripple.\n\nAdditionally, consider the function f(x) = ln(x\u00b2 + 1) + arctan(x), defined for all real x.\n\nPart (a): Using related rates, find the rate at which the area A of the circular ripple is increasing (in cm\u00b2/sec) at the instant when r = 12 cm.\n\nPart (b): The function g(x) = (e^(2x) \u2212 1 \u2212 2x) / x\u00b2 has a removable discontinuity at x = 0. Use L'H\u00f4pital's Rule (applied as many times as necessary) to find lim(x\u21920) g(x). Show all differentiation steps.\n\nPart (c): The function f(x) = ln(x\u00b2 + 1) + arctan(x) is continuous and differentiable on [\u22121, 1], with f(\u22121) = ln(2) \u2212 \u03c0/4 and f(1) = ln(2) + \u03c0/4. By the Mean Value Theorem, there exists at least one value c in (\u22121, 1) such that f\u2032(c) equals the average rate of change of f on [\u22121, 1]. Find all such values of c, and determine the exact value(s).",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using related rates, find dA/dt, the rate at which the area A of the circular ripple is increasing (in cm\u00b2/sec), at the instant when r = 12 cm. Show your differentiation with respect to time.",
        "rubric": "Earns 1 point for correctly differentiating A = \u03c0r\u00b2 with respect to t to obtain dA/dt = 2\u03c0r(dr/dt), substituting r = 12 and dr/dt = 3 to get dA/dt = 72\u03c0 cm\u00b2/sec."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Use L'H\u00f4pital's Rule to evaluate lim(x\u21920) [(e^(2x) \u2212 1 \u2212 2x) / x\u00b2]. Apply the rule as many times as needed and show each differentiation step clearly.",
        "rubric": "Earns 1 point for correctly identifying the 0/0 indeterminate form, applying L'H\u00f4pital's Rule twice (first giving (2e^(2x) \u2212 2)/(2x), still 0/0, then giving 4e^(2x)/2), and evaluating the limit as 2."
      },
      {
        "label": "c",
        "command": "Calculate and Justify",
        "question": "For f(x) = ln(x\u00b2 + 1) + arctan(x) on [\u22121, 1], compute f\u2032(x), set it equal to the average rate of change [f(1) \u2212 f(\u22121)] / (1 \u2212 (\u22121)), and solve for all values c in (\u22121, 1) guaranteed by the Mean Value Theorem.",
        "rubric": "Earns 1 point for correctly computing f\u2032(x) = 2x/(x\u00b2+1) + 1/(1+x\u00b2) = (2x+1)/(x\u00b2+1), correctly computing the average rate of change as (\u03c0/2)/2 = \u03c0/4, setting (2c+1)/(c\u00b2+1) = \u03c0/4, and solving to find c = (4\u2212\u03c0)/(\u03c0\u22122) or equivalently the exact value satisfying \u03c0c\u00b2\u22128c+(\u03c0\u22124)=0 evaluated in (\u22121,1), with the valid root identified."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies related rates to A = \u03c0r\u00b2, differentiates implicitly with respect to t to get dA/dt = 2\u03c0r(dr/dt), substitutes r = 12 cm and dr/dt = 3 cm/sec, and obtains dA/dt = 72\u03c0 cm\u00b2/sec.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dA/dt",
          "2\u03c0r(dr/dt)",
          "related rates",
          "implicit differentiation with respect to t",
          "A = \u03c0r\u00b2",
          "dr/dt = 3",
          "r = 12",
          "72\u03c0",
          "cm\u00b2/sec",
          "chain rule"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Identifies 0/0 indeterminate form, applies L'H\u00f4pital's Rule twice showing each derivative step: first derivative gives (2e^(2x)\u22122)/(2x) still 0/0, second application gives 4e^(2x)/2, evaluates at x=0 to obtain limit equals 2.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "L'H\u00f4pital's Rule",
          "indeterminate form 0/0",
          "lim(x\u21920)",
          "e^(2x)",
          "apply twice",
          "4e^(2x)/2",
          "limit equals 2",
          "differentiate numerator and denominator",
          "removable discontinuity",
          "L'Hopital applied twice"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly computes f\u2032(x) = (2x+1)/(x\u00b2+1), computes average rate of change as \u03c0/4, sets f\u2032(c) = \u03c0/4, solves the resulting quadratic \u03c0c\u00b2\u22128c+(\u03c0\u22124)=0 or equivalent, and identifies the value(s) of c lying in (\u22121,1) with exact form.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "Mean Value Theorem",
          "f\u2032(x) = (2x+1)/(x\u00b2+1)",
          "average rate of change",
          "[f(1)\u2212f(\u22121)]/2",
          "\u03c0/4",
          "set f\u2032(c) equal to average rate of change",
          "solve for c",
          "c in (\u22121,1)",
          "MVT guarantees",
          "exact value of c"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u4_frq022",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Connecting Related Rates, Linearization, and the Mean Value Theorem via an Expanding Sphere",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A spherical balloon is being inflated so that its volume V increases at a constant rate of 10 cubic centimeters per second. Recall that the volume of a sphere is V = (4/3)\u03c0r\u00b3 and the surface area is S = 4\u03c0r\u00b2.\n\n(a) [Related Rates] Find the rate at which the radius r is increasing at the instant when r = 5 cm.\n\n(b) [Linearization] Using your answer from part (a), write the linear approximation L(t) for the radius r(t) near the moment when r = 5 cm. That is, express L(t) = r\u2080 + r'(t\u2080)\u00b7(t \u2212 t\u2080), and use it to approximate the radius 0.3 seconds after that instant.\n\n(c) [L'H\u00f4pital's Rule] As the balloon inflates, consider the ratio of the rate of change of surface area to the rate of change of volume, both with respect to time. Using your expressions for dS/dt and dV/dt in terms of r, evaluate lim(r\u21920\u207a) [dS/dt] / [dV/dt] and justify your evaluation using L'H\u00f4pital's Rule or algebraic simplification.\n\n(d) [Mean Value Theorem] Suppose the radius of the balloon (as a function of time t in seconds) is known to be a differentiable function r(t) on [0, 8], with r(0) = 2 cm and r(8) = 6 cm. Apply the Mean Value Theorem to conclude that there exists some time c in (0, 8) where r'(c) equals a specific value. State the theorem's conditions and find that value.\n\n(e) [Rolle's Theorem] Now suppose instead that a technician measures the radius and finds r(2) = r(7) = 5 cm, and that r(t) is continuous on [2, 7] and differentiable on (2, 7). Apply Rolle's Theorem to explain what can be concluded about r'(c) for some c in (2, 7), and state the conditions required for the theorem to apply.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Given that dV/dt = 10 cm\u00b3/sec and V = (4/3)\u03c0r\u00b3, find dr/dt when r = 5 cm. Show all differentiation and substitution steps.",
        "rubric": "Earns 1 point for correctly differentiating V = (4/3)\u03c0r\u00b3 implicitly with respect to t to get dV/dt = 4\u03c0r\u00b2\u00b7(dr/dt), substituting dV/dt = 10 and r = 5, and solving to obtain dr/dt = 10/(4\u03c0\u00b725) = 1/(10\u03c0) cm/sec."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the value of dr/dt found in part (a) as the instantaneous rate of change at the moment when r = 5 cm (call this time t\u2080), write the linearization L(t) = 5 + (1/(10\u03c0))\u00b7(t \u2212 t\u2080). Use this linear approximation to estimate the radius at t = t\u2080 + 0.3 seconds.",
        "rubric": "Earns 1 point for correctly writing the linearization L(t) = 5 + (1/(10\u03c0))(t \u2212 t\u2080) and substituting (t \u2212 t\u2080) = 0.3 to get L(t\u2080 + 0.3) = 5 + 0.3/(10\u03c0) = 5 + 3/(100\u03c0) \u2248 5.00955 cm."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Express dS/dt in terms of r using S = 4\u03c0r\u00b2 and the chain rule. Then form the ratio (dS/dt)/(dV/dt) and evaluate its limit as r \u2192 0\u207a. Justify whether L'H\u00f4pital's Rule applies or whether algebraic simplification suffices.",
        "rubric": "Earns 1 point for correctly computing dS/dt = 8\u03c0r\u00b7(dr/dt), forming the ratio (8\u03c0r\u00b7dr/dt)/(4\u03c0r\u00b2\u00b7dr/dt) = 8\u03c0r/(4\u03c0r\u00b2) = 2/r, correctly concluding the limit as r \u2192 0\u207a is +\u221e, and justifying that the ratio simplifies algebraically (or noting 0/0 or \u221e/\u221e form if L'H\u00f4pital is invoked with correct setup)."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "Given r(0) = 2 and r(8) = 6, with r(t) continuous on [0, 8] and differentiable on (0, 8), apply the Mean Value Theorem. State the required conditions, write the MVT equation, and find the exact value of r'(c).",
        "rubric": "Earns 1 point for explicitly stating that r(t) is continuous on [0, 8] and differentiable on (0, 8), correctly applying MVT as r'(c) = (r(8) \u2212 r(0))/(8 \u2212 0) = (6 \u2212 2)/8 = 4/8 = 1/2, and concluding there exists c in (0, 8) such that r'(c) = 1/2 cm/sec."
      },
      {
        "label": "e",
        "command": "Explain",
        "question": "Given r(2) = r(7) = 5, with r(t) continuous on [2, 7] and differentiable on (2, 7), apply Rolle's Theorem. State all required conditions and explain what the theorem guarantees about r'(c) for some c in (2, 7).",
        "rubric": "Earns 1 point for correctly stating all three conditions of Rolle's Theorem (continuity on [2,7], differentiability on (2,7), and equal endpoint values r(2) = r(7)), and correctly concluding that there exists at least one c in (2, 7) such that r'(c) = 0, meaning the radius has a horizontal tangent (instantaneous rate of change of radius equals zero) at that moment."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly differentiates V = (4/3)\u03c0r\u00b3 implicitly with respect to t and solves for dr/dt = 1/(10\u03c0) cm/sec when r = 5 and dV/dt = 10.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dV/dt",
          "4\u03c0r\u00b2\u00b7(dr/dt)",
          "implicit differentiation",
          "related rates",
          "dr/dt = 1/(10\u03c0)",
          "chain rule with respect to t",
          "dV/dt = 10",
          "r = 5",
          "solve for dr/dt",
          "1 over 10 pi",
          "rate of change of radius",
          "sphere volume derivative"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Writes correct linearization L(t) = 5 + (1/(10\u03c0))(t \u2212 t\u2080) and evaluates at t \u2212 t\u2080 = 0.3 to get approximately 5 + 3/(100\u03c0) \u2248 5.00955 cm.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "linearization",
          "linear approximation",
          "L(t)",
          "tangent line approximation",
          "5 + (1/(10\u03c0))(t \u2212 t\u2080)",
          "0.3/(10\u03c0)",
          "3/(100\u03c0)",
          "approximately 5.00955",
          "local linearization",
          "f(x) \u2248 f(a) + f'(a)(x\u2212a)",
          "first-order approximation",
          "differential approximation"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Computes dS/dt = 8\u03c0r\u00b7(dr/dt), forms ratio (dS/dt)/(dV/dt) = 2/r, and correctly evaluates the limit as r \u2192 0\u207a as +\u221e with valid justification.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "dS/dt = 8\u03c0r(dr/dt)",
          "ratio dS/dt over dV/dt",
          "2/r",
          "limit as r approaches 0 from the right",
          "L'H\u00f4pital's Rule",
          "lim r\u21920\u207a",
          "limit approaches positive infinity",
          "+\u221e",
          "algebraic simplification",
          "indeterminate form",
          "surface area rate over volume rate",
          "cancel dr/dt",
          "0/0 indeterminate"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "States MVT conditions (continuity on closed interval, differentiability on open interval), applies the theorem formula, and finds r'(c) = 1/2 cm/sec for some c in (0, 8).",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "Mean Value Theorem",
          "MVT",
          "continuous on [0,8]",
          "differentiable on (0,8)",
          "r'(c) = (r(8)\u2212r(0))/(8\u22120)",
          "r'(c) = 1/2",
          "exists c in (0,8)",
          "average rate of change equals instantaneous rate",
          "(6\u22122)/8",
          "slope of secant equals slope of tangent",
          "guaranteed by MVT",
          "closed interval continuity open interval differentiability"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "States all three Rolle's Theorem conditions and correctly concludes there exists c in (2, 7) such that r'(c) = 0.",
        "partLabel": "e",
        "skill": "explain",
        "keywords": [
          "Rolle's Theorem",
          "continuous on [2,7]",
          "differentiable on (2,7)",
          "r(2) = r(7)",
          "equal endpoint values",
          "exists c in (2,7)",
          "r'(c) = 0",
          "horizontal tangent",
          "derivative equals zero at c",
          "at least one c guaranteed",
          "special case of MVT",
          "zero instantaneous rate of change of radius"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u5_frq024",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Critical Points and First Derivative Test for a Polynomial Function",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f be a function defined by f(x) = x\u00b3 \u2212 6x\u00b2 + 9x + 2. The first derivative is f'(x) = 3x\u00b2 \u2212 12x + 9 and the second derivative is f''(x) = 6x \u2212 12.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find all critical points of f(x) = x\u00b3 \u2212 6x\u00b2 + 9x + 2 by setting f'(x) = 0 and solving for x.",
        "rubric": "Earns 1 point for correctly setting 3x\u00b2 \u2212 12x + 9 = 0, factoring or using the quadratic formula to obtain x = 1 and x = 3 as the critical points."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Using the First Derivative Test, classify each critical point found in part (a) as a local maximum, local minimum, or neither. Justify your answer by analyzing the sign of f'(x) on intervals around each critical point.",
        "rubric": "Earns 1 point for correctly identifying that f'(x) changes from positive to negative at x = 1 (local maximum) and from negative to positive at x = 3 (local minimum), with sign analysis of f'(x) on the intervals (\u2212\u221e, 1), (1, 3), and (3, \u221e)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find the values f(1) and f(3), and state the coordinates of the local maximum and local minimum of f.",
        "rubric": "Earns 1 point for correctly computing f(1) = 6 giving local maximum at (1, 6), and f(3) = 2 giving local minimum at (3, 2)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets f'(x) = 3x\u00b2 \u2212 12x + 9 equal to zero and solves to find critical points x = 1 and x = 3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "f'(x) = 0",
          "3x\u00b2 \u2212 12x + 9",
          "critical points",
          "x = 1",
          "x = 3",
          "setting derivative equal to zero",
          "solve for x",
          "factoring 3(x\u22121)(x\u22123)"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Applies the First Derivative Test by checking the sign of f'(x) on intervals around x = 1 and x = 3, correctly classifying x = 1 as a local maximum and x = 3 as a local minimum.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "First Derivative Test",
          "sign of f'(x)",
          "positive to negative",
          "negative to positive",
          "local maximum at x = 1",
          "local minimum at x = 3",
          "sign change",
          "f' changes sign",
          "interval (1,3)",
          "f' negative on (1,3)"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly evaluates f(1) = 6 and f(3) = 2, stating the local maximum at (1, 6) and local minimum at (3, 2).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "f(1) = 6",
          "f(3) = 2",
          "local maximum (1, 6)",
          "local minimum (3, 2)",
          "coordinates of extrema",
          "substituting x = 1",
          "substituting x = 3",
          "y-value of critical point"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u5_frq026",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Analyzing a Polynomial Function: Critical Points, Concavity, and Curve Sketching",
    "units": [
      5
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f be a function defined on all real numbers by f(x) = x\u2074 \u2212 8x\u00b3 + 18x\u00b2 \u2212 27. You will analyze the behavior of f using derivatives.\n\nNote: f'(x) = 4x\u00b3 \u2212 24x\u00b2 + 36x = 4x(x \u2212 3)\u00b2, and f''(x) = 12x\u00b2 \u2212 48x + 36 = 12(x \u2212 1)(x \u2212 3).",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find all critical points of f. Show the work used to determine where f'(x) = 0.",
        "rubric": "Earn 1 point: Set f'(x) = 4x(x \u2212 3)\u00b2 = 0 and identify critical points at x = 0 and x = 3. Both values must be stated with supporting algebra."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Use the First Derivative Test to classify each critical point found in part (a) as a local maximum, local minimum, or neither. Justify your answer by analyzing the sign of f'(x) on intervals around each critical point.",
        "rubric": "Earn 1 point: Correct sign analysis of f'(x) on intervals (\u2212\u221e, 0), (0, 3), and (3, \u221e). Conclude that x = 0 is a local minimum because f' changes from negative to positive, and x = 3 is neither a local max nor local min because f' does not change sign (positive on both sides)."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Use the Second Derivative Test to confirm or attempt to classify the critical point at x = 0. Explain why the Second Derivative Test is inconclusive at x = 3.",
        "rubric": "Earn 1 point: Compute f''(0) = 36 > 0, conclude x = 0 is a local minimum by the Second Derivative Test. State that f''(3) = 0, so the Second Derivative Test is inconclusive at x = 3."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Determine the intervals on which f is concave up and the intervals on which f is concave down. Identify all inflection points of f, and give both the x- and y-coordinates of each.",
        "rubric": "Earn 1 point: Use f''(x) = 12(x \u2212 1)(x \u2212 3) to find f'' > 0 on (\u2212\u221e, 1) and (3, \u221e) so f is concave up, and f'' < 0 on (1, 3) so f is concave down. Identify inflection points at x = 1 with f(1) = 1 \u2212 8 + 18 \u2212 27 = \u221216, so (1, \u221216), and at x = 3 with f(3) = 81 \u2212 216 + 162 \u2212 27 = 0, so (3, 0). Both coordinates required for each inflection point."
      },
      {
        "label": "e",
        "command": "Describe",
        "question": "Using your results from parts (a) through (d), describe the key features that would appear on a complete sketch of f. Include the behavior at each critical point, concavity on each interval, and the location of inflection points.",
        "rubric": "Earn 1 point: Description must reference local minimum at (0, \u221227), neither max nor min at (3, 0), concave up on (\u2212\u221e, 1) and (3, \u221e), concave down on (1, 3), and inflection points at (1, \u221216) and (3, 0). Answer must synthesize at least three of these features using precise calculus terminology."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies both critical points x = 0 and x = 3 by setting f'(x) = 4x(x \u2212 3)\u00b2 = 0 and solving.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "critical points",
          "f'(x) = 0",
          "4x(x \u2212 3)\u00b2",
          "x = 0",
          "x = 3",
          "set derivative equal to zero",
          "critical values",
          "f prime equals zero",
          "zero product property",
          "factored form of derivative"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Applies First Derivative Test correctly: x = 0 is a local minimum (sign change from negative to positive), x = 3 is neither because f' does not change sign.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "first derivative test",
          "sign change",
          "f' changes sign",
          "local minimum at x = 0",
          "neither maximum nor minimum at x = 3",
          "negative to positive",
          "f' positive on both sides",
          "sign of f'(x)",
          "test intervals",
          "f prime sign analysis"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Computes f''(0) = 36 > 0 to confirm local minimum via Second Derivative Test; states f''(3) = 0 makes the test inconclusive at x = 3.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "second derivative test",
          "f''(0) = 36",
          "f''(0) > 0",
          "local minimum",
          "f''(3) = 0",
          "inconclusive",
          "second derivative equals zero",
          "d\u00b2y/dx\u00b2",
          "f double prime",
          "concave up at critical point"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Identifies concave up on (\u2212\u221e, 1) and (3, \u221e), concave down on (1, 3), and inflection points at (1, \u221216) and (3, 0) with both coordinates.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "concave up",
          "concave down",
          "inflection point",
          "f'' changes sign",
          "f''(x) = 12(x\u22121)(x\u22123)",
          "inflection points at x = 1 and x = 3",
          "(1, \u221216)",
          "(3, 0)",
          "concavity changes",
          "d\u00b2y/dx\u00b2 changes sign",
          "second derivative sign analysis",
          "concavity intervals"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Synthesizes at least three key features: local minimum at (0, \u221227), neither max nor min at (3, 0), concavity intervals, and inflection points at (1, \u221216) and (3, 0).",
        "partLabel": "e",
        "skill": "describe",
        "keywords": [
          "local minimum at (0, \u221227)",
          "neither max nor min at (3, 0)",
          "concave up on (\u2212\u221e, 1)",
          "concave down on (1, 3)",
          "inflection point at (1, \u221216)",
          "inflection point at (3, 0)",
          "curve sketching",
          "sign of f''",
          "concavity intervals",
          "synthesize calculus features",
          "f(0) = \u221227"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u5_frq027",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Complete Curve Analysis of a Rational-Exponential Function",
    "units": [
      5
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f be a twice-differentiable function defined for all real numbers x by f(x) = x\u00b2\u00b7e^(\u2212x). You may use the following derived expressions in your work: f'(x) = xe^(\u2212x)(2 \u2212 x) and f''(x) = e^(\u2212x)(x\u00b2 \u2212 4x + 2).\n\nAnswer all five parts below using these expressions. Justify each answer analytically.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find all critical points of f. State the x-value(s) and the corresponding f(x) value(s) at each critical point.",
        "rubric": "Earns 1 point for correctly setting f'(x) = xe^(\u2212x)(2 \u2212 x) = 0, identifying critical points at x = 0 (giving f(0) = 0) and x = 2 (giving f(2) = 4e^(\u22122)), and noting e^(\u2212x) is never zero."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Using the First Derivative Test, classify each critical point found in part (a) as a local minimum, local maximum, or neither. Justify your answer by describing the sign change of f'(x) around each critical point.",
        "rubric": "Earns 1 point for correctly applying the First Derivative Test: f'(x) changes from negative to positive at x = 0 (local minimum), and f'(x) changes from positive to negative at x = 2 (local maximum), with a correct sign chart or sign analysis of f'(x) on intervals (\u2212\u221e,0), (0,2), (2,\u221e)."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Using the Second Derivative Test, confirm the classification of the critical point at x = 2. Compute f''(2) and interpret its sign to justify whether x = 2 is a local maximum or local minimum.",
        "rubric": "Earns 1 point for computing f''(2) = e^(\u22122)(4 \u2212 8 + 2) = \u22122e^(\u22122) < 0, correctly concluding that f''(2) < 0 implies concave down at x = 2, confirming a local maximum at x = 2 via the Second Derivative Test."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Find all x-values where f has an inflection point. For each candidate, verify the concavity change by analyzing the sign of f''(x) on either side. State the coordinates of each inflection point.",
        "rubric": "Earns 1 point for setting f''(x) = e^(\u2212x)(x\u00b2 \u2212 4x + 2) = 0 and solving x\u00b2 \u2212 4x + 2 = 0 to get x = 2 \u00b1 \u221a2, verifying a sign change of f''(x) at each value (concavity changes from concave up to concave down or vice versa), and computing inflection point coordinates: (2\u2212\u221a2, (2\u2212\u221a2)\u00b2\u00b7e^(\u2212(2\u2212\u221a2))) and (2+\u221a2, (2+\u221a2)\u00b2\u00b7e^(\u2212(2+\u221a2)))."
      },
      {
        "label": "e",
        "command": "Describe",
        "question": "Using all information gathered in parts (a)-(d), describe the complete behavior of the curve y = f(x) for a full curve sketch. Include: intervals of increase/decrease, intervals of concavity, coordinates of local extrema, and coordinates of inflection points. Also describe the end behavior as x \u2192 \u2212\u221e and x \u2192 +\u221e.",
        "rubric": "Earns 1 point for a complete, consistent curve sketch description that correctly states: f is decreasing on (\u2212\u221e,0), increasing on (0,2), decreasing on (2,\u221e); local minimum at (0,0), local maximum at (2, 4e^(\u22122)); concave up on (\u2212\u221e, 2\u2212\u221a2) and (2+\u221a2, \u221e), concave down on (2\u2212\u221a2, 2+\u221a2); inflection points at x = 2\u2212\u221a2 and x = 2+\u221a2; end behavior f(x) \u2192 +\u221e as x \u2192 \u2212\u221e and f(x) \u2192 0 as x \u2192 +\u221e."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies critical points at x = 0 and x = 2 by setting f'(x) = 0, with correct function values f(0) = 0 and f(2) = 4e^(\u22122).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "critical points",
          "f'(x) = 0",
          "x = 0",
          "x = 2",
          "4e^(\u22122)",
          "e^(\u2212x) never zero",
          "xe^(\u2212x)(2 \u2212 x)",
          "f(0) = 0",
          "critical values",
          "set derivative equal to zero",
          "zero product property",
          "factor out e^(\u2212x)",
          "x(2 \u2212 x) = 0"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Applies the First Derivative Test correctly: sign of f'(x) changes negative-to-positive at x = 0 (local min) and positive-to-negative at x = 2 (local max), with a valid sign chart or interval analysis.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "First Derivative Test",
          "sign change of f'",
          "f'(x) changes sign",
          "local minimum at x = 0",
          "local maximum at x = 2",
          "negative to positive at x = 0",
          "positive to negative at x = 2",
          "sign chart",
          "intervals of increase and decrease",
          "f' > 0 on (0,2)",
          "f' < 0 on (\u2212\u221e,0)",
          "f' < 0 on (2,\u221e)",
          "test point in each interval"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Computes f''(2) = \u22122e^(\u22122) < 0 and correctly applies the Second Derivative Test to confirm a local maximum at x = 2 because f'' < 0 implies concave down.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "Second Derivative Test",
          "f''(2) = \u22122e^(\u22122)",
          "f''(2) < 0",
          "concave down at x = 2",
          "local maximum confirmed",
          "second derivative negative implies local max",
          "f''(x) = e^(\u2212x)(x\u00b2 \u2212 4x + 2)",
          "substitute x = 2 into f''",
          "4 \u2212 8 + 2 = \u22122",
          "concavity determines extremum type",
          "e^(\u22122) positive",
          "second derivative test criterion"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Solves x\u00b2 \u2212 4x + 2 = 0 via quadratic formula to get x = 2 \u00b1 \u221a2, confirms sign change of f'' at each value, and states correct inflection point coordinates.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "inflection point",
          "f''(x) = 0",
          "x\u00b2 \u2212 4x + 2 = 0",
          "x = 2 \u2212 \u221a2",
          "x = 2 + \u221a2",
          "quadratic formula",
          "concavity changes sign",
          "sign change of f''",
          "f'' changes from positive to negative",
          "f'' changes from negative to positive",
          "inflection point coordinates (2\u2212\u221a2, (2\u2212\u221a2)\u00b2e^(\u2212(2\u2212\u221a2)))",
          "inflection point coordinates (2+\u221a2, (2+\u221a2)\u00b2e^(\u2212(2+\u221a2)))",
          "verify sign change on both sides"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Provides a complete curve description: correct intervals of increase/decrease, concave up/down intervals, local min at (0,0), local max at (2, 4e^(\u22122)), inflection points at x = 2 \u00b1 \u221a2, end behavior f \u2192 \u221e as x \u2192 \u2212\u221e and f \u2192 0 as x \u2192 +\u221e.",
        "partLabel": "e",
        "skill": "describe",
        "keywords": [
          "increasing on (0,2)",
          "decreasing on (\u2212\u221e,0) and (2,\u221e)",
          "concave up on (\u2212\u221e, 2\u2212\u221a2) and (2+\u221a2, \u221e)",
          "concave down on (2\u2212\u221a2, 2+\u221a2)",
          "local minimum (0,0)",
          "local maximum (2, 4e^(\u22122))",
          "inflection point at x = 2 \u2212 \u221a2",
          "inflection point at x = 2 + \u221a2",
          "end behavior as x \u2192 \u2212\u221e",
          "f(x) \u2192 +\u221e as x \u2192 \u2212\u221e",
          "f(x) \u2192 0 as x \u2192 +\u221e",
          "x\u00b2e^(\u2212x) \u2192 0 by L'H\u00f4pital or exponential dominance",
          "complete curve sketch description"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u6_frq028",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Average Value of a Function on a Closed Interval",
    "units": [
      6
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let f(x) = 3x\u00b2 + 2x on the closed interval [1, 4]. Use the average value formula to analyze f on this interval.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Write the definite integral expression that represents the average value of f(x) = 3x\u00b2 + 2x on the interval [1, 4]. Do not evaluate.",
        "rubric": "Student writes (1/(4-1)) * \u222b from 1 to 4 of (3x\u00b2 + 2x) dx, or equivalently (1/3) * \u222b\u2081\u2074 (3x\u00b2 + 2x) dx."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Evaluate \u222b\u2081\u2074 (3x\u00b2 + 2x) dx using the antiderivative.",
        "rubric": "Student finds antiderivative x\u00b3 + x\u00b2, evaluates [x\u00b3 + x\u00b2] from 1 to 4, obtaining (64 + 16) \u2212 (1 + 1) = 80 \u2212 2 = 78."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using your result from part (b), determine the average value of f(x) on [1, 4].",
        "rubric": "Student divides the result from part (b) by (4 \u2212 1) = 3, giving average value = 78/3 = 26."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct setup of the average value formula: (1/(b\u2212a)) \u222b\u2090\u1d47 f(x) dx with a=1, b=4, f(x)=3x\u00b2+2x",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "average value",
          "1/(b-a)",
          "1/(4-1)",
          "1/3",
          "\u222b\u2081\u2074",
          "definite integral",
          "average value formula",
          "3x\u00b2 + 2x",
          "closed interval [1,4]",
          "(1/3)\u222b",
          "f_avg formula",
          "integral expression"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct antiderivative x\u00b3 + x\u00b2 and correct evaluation yielding 78",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "antiderivative",
          "x\u00b3 + x\u00b2",
          "power rule",
          "evaluate at bounds",
          "78",
          "80 \u2212 2",
          "64 + 16",
          "1 + 1",
          "Fundamental Theorem of Calculus",
          "FTC",
          "upper bound minus lower bound",
          "definite integral evaluation"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct average value of 26 obtained by dividing 78 by 3",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "average value",
          "26",
          "78/3",
          "divide by 3",
          "divide by (b\u2212a)",
          "f_avg",
          "average value equals 26",
          "78 divided by 3",
          "multiply by 1/3",
          "average value of f on [1,4]",
          "f_avg = 26",
          "interval length 3"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u6_frq029",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Left Riemann Sum and Definite Integral Approximation",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "The table below gives selected values of a continuous function f on the interval [1, 9].\n\n| x    | 1  | 3  | 5  | 7  | 9  |\n|------|----|----|----|----|----|\n| f(x) | 4  | 10 | 6  | 14 | 8  |\n\nUse this table to answer the following questions about the integral of f on [1, 9].",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Use a left Riemann sum with 4 equal subintervals of width 2 to approximate \u222b from 1 to 9 of f(x) dx. Show all work.",
        "rubric": "Earns 1 point for correctly identifying the four left endpoints x = 1, 3, 5, 7 and computing L\u2084 = 2\u00b7(f(1) + f(3) + f(5) + f(7)) = 2\u00b7(4 + 10 + 6 + 14) = 2\u00b734 = 68."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Is your left Riemann sum from part (a) an overestimate or an underestimate of the actual value of \u222b from 1 to 9 of f(x) dx? Explain your reasoning.",
        "rubric": "Earns 1 point for stating that the answer cannot be definitively determined as over or underestimate without knowing whether f is monotonically increasing or decreasing on the entire interval, OR for a correct argument referencing specific subintervals where f is increasing (left sum underestimates) versus decreasing (left sum overestimates), concluding the net relationship is indeterminate from the table alone."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using the same table, write and evaluate a trapezoidal sum with 4 equal subintervals to approximate \u222b from 1 to 9 of f(x) dx. Show all work.",
        "rubric": "Earns 1 point for correctly applying the trapezoidal rule: T\u2084 = (2/2)\u00b7(f(1) + 2f(3) + 2f(5) + 2f(7) + f(9)) = 1\u00b7(4 + 20 + 12 + 28 + 8) = 72."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct left Riemann sum using 4 subintervals of width 2 with left endpoints x=1,3,5,7, yielding L\u2084 = 68.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "left Riemann sum",
          "left endpoints",
          "subinterval width 2",
          "L\u2084",
          "\u2211f(x\u1d62)\u0394x",
          "4 subintervals",
          "68",
          "2\u00b7(4+10+6+14)",
          "Riemann sum approximation",
          "partition",
          "x=1,3,5,7",
          "\u0394x=2"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct explanation referencing increasing/decreasing behavior on subintervals to justify why the left sum is neither a clear overestimate nor underestimate, OR correct identification of mixed behavior across subintervals.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "overestimate",
          "underestimate",
          "increasing subinterval",
          "decreasing subinterval",
          "left sum overestimates on decreasing intervals",
          "left sum underestimates on increasing intervals",
          "monotonically",
          "cannot determine",
          "mixed behavior",
          "indeterminate",
          "not monotone",
          "subinterval behavior"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct trapezoidal sum with 4 subintervals using formula T = (\u0394x/2)(f(x\u2080)+2f(x\u2081)+2f(x\u2082)+2f(x\u2083)+f(x\u2084)), yielding T\u2084 = 72.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "trapezoidal rule",
          "trapezoidal sum",
          "trapezoid approximation",
          "(\u0394x/2)(f(x\u2080)+2f(x\u2081)+\u2026+f(x\u2099))",
          "T\u2084",
          "72",
          "4+20+12+28+8",
          "average of left and right endpoints",
          "trapezoidal approximation",
          "width 2",
          "weighted sum",
          "composite trapezoidal rule"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u6_frq030",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Average Value and the Fundamental Theorem of Calculus Part 2",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let g(x) = 3x\u00b2 \u2212 4x + 1 on the closed interval [1, 4]. Use this function to answer the following questions.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find \u222b from 1 to 4 of (3x\u00b2 \u2212 4x + 1) dx using the Fundamental Theorem of Calculus. Show the antiderivative and all evaluation steps.",
        "rubric": "Earns 1 point for finding the correct antiderivative G(x) = x\u00b3 \u2212 2x\u00b2 + x and correctly evaluating G(4) \u2212 G(1) = (64 \u2212 32 + 4) \u2212 (1 \u2212 2 + 1) = 36 \u2212 0 = 36."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the average value of g on [1, 4].",
        "rubric": "Earns 1 point for correctly applying the average value formula: g_avg = (1/(4\u22121)) \u00b7 \u222b from 1 to 4 of g(x) dx = (1/3)(36) = 12."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Find a value c in the open interval (1, 4) such that g(c) equals the average value found in part (b). Justify that such a value must exist by referencing the appropriate theorem.",
        "rubric": "Earns 1 point for setting 3c\u00b2 \u2212 4c + 1 = 12, solving to get 3c\u00b2 \u2212 4c \u2212 11 = 0, obtaining c = (4 + \u221a(16+132))/6 = (4 + \u221a148)/6 \u2248 2.69, confirming c is in (1,4), and citing the Mean Value Theorem for Integrals (or Average Value Theorem) as the guarantee that such a c exists."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct antiderivative G(x) = x\u00b3 \u2212 2x\u00b2 + x and correct FTC Part 2 evaluation G(4) \u2212 G(1) = 36.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "antiderivative",
          "x\u00b3 \u2212 2x\u00b2 + x",
          "Fundamental Theorem of Calculus Part 2",
          "FTC Part 2",
          "F(b) \u2212 F(a)",
          "G(4) \u2212 G(1)",
          "definite integral",
          "evaluate at bounds",
          "36",
          "power rule for integration",
          "G(4)=36",
          "G(1)=0"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct application of the average value formula (1/(b\u2212a))\u00b7\u222bf(x)dx = (1/3)(36) = 12.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "average value",
          "mean value of a function",
          "1/(b\u2212a)",
          "\u222bg(x)dx",
          "(1/3)(36)",
          "12",
          "average value formula",
          "f_avg",
          "g_avg",
          "interval [1,4]",
          "divide by length of interval",
          "average value of g"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct solution c \u2248 2.69 (exact: (4+\u221a148)/6) in (1,4) and citation of the Mean Value Theorem for Integrals guaranteeing its existence.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "Mean Value Theorem for Integrals",
          "MVT for integrals",
          "average value theorem",
          "g(c) = 12",
          "3c\u00b2 \u2212 4c \u2212 11 = 0",
          "c = (4+\u221a148)/6",
          "c \u2248 2.69",
          "exists in (1,4)",
          "continuous function on closed interval",
          "guaranteed by MVT",
          "quadratic formula",
          "c in open interval"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u6_frq031",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "FTC Part 1, Net Change, and Average Value of a Rate Function",
    "units": [
      6
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Water flows into a tank at a rate modeled by r(t) = 3t\u00b7e^(\u2212t\u00b2/8) gallons per minute for t \u2265 0, where t is measured in minutes. Define the accumulation function G(x) = \u222b\u2080\u02e3 r(t) dt. At time t = 0 the tank contains 5 gallons.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the Fundamental Theorem of Calculus Part 1, find G'(x) and evaluate G'(2). Include correct units and interpret G'(2) in the context of this problem.",
        "rubric": "Earns 1 point for correctly stating G'(x) = r(x) = 3x\u00b7e^(\u2212x\u00b2/8) by FTC Part 1, evaluating G'(2) = 6e^(\u22121/2) \u2248 3.634 gallons per minute, and interpreting it as the rate at which water is entering the tank at t = 2 minutes."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Use the Net Change Theorem to find the total amount of water that flows into the tank on the interval [0, 4]. Then determine the total amount of water in the tank at t = 4 minutes.",
        "rubric": "Earns 1 point for correctly setting up \u222b\u2080\u2074 r(t) dt = \u222b\u2080\u2074 3t\u00b7e^(\u2212t\u00b2/8) dt, using substitution u = \u2212t\u00b2/8 to evaluate it as 12(1 \u2212 e^(\u22122)) \u2248 11.411 gallons, and adding the initial 5 gallons to obtain a total of 5 + 12(1 \u2212 e^(\u22122)) \u2248 16.411 gallons in the tank at t = 4."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find the average value of r(t) on the interval [0, 4]. Explain what this value represents in the context of the problem.",
        "rubric": "Earns 1 point for correctly applying the average value formula (1/(4\u22120))\u00b7\u222b\u2080\u2074 r(t) dt = (1/4)\u00b712(1 \u2212 e^(\u22122)) = 3(1 \u2212 e^(\u22122)) \u2248 2.853 gallons per minute, and stating this represents the average rate at which water flows into the tank over the first 4 minutes."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies FTC Part 1 to find G'(x) = r(x) = 3x\u00b7e^(\u2212x\u00b2/8), evaluates G'(2) = 6e^(\u22121/2) \u2248 3.634 gallons per minute, and provides a correct contextual interpretation as the instantaneous rate of water flow at t = 2.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "FTC Part 1",
          "Fundamental Theorem of Calculus",
          "G'(x) = r(x)",
          "derivative of accumulation function",
          "6e^(\u22121/2)",
          "3.634",
          "gallons per minute",
          "instantaneous rate",
          "rate of flow at t = 2",
          "differentiation of integral",
          "upper limit of integration",
          "integrand evaluated at x"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the Net Change Theorem by evaluating \u222b\u2080\u2074 3t\u00b7e^(\u2212t\u00b2/8) dt via u-substitution to get 12(1 \u2212 e^(\u22122)), then adds the initial 5 gallons to find the total amount \u2248 16.411 gallons in the tank at t = 4.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "net change theorem",
          "\u222b\u2080\u2074 r(t) dt",
          "u-substitution",
          "u = \u2212t\u00b2/8",
          "12(1 \u2212 e^(\u22122))",
          "11.411 gallons",
          "total amount of water",
          "initial condition",
          "5 gallons initial value",
          "16.411",
          "antiderivative of rate function",
          "accumulation over interval"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly uses the average value formula (1/(b\u2212a))\u00b7\u222b\u2090\u1d47 r(t) dt on [0,4] to obtain 3(1 \u2212 e^(\u22122)) \u2248 2.853 gallons per minute, and correctly interprets this as the average rate of flow over the interval [0, 4].",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "average value",
          "average value formula",
          "(1/(b\u2212a))\u222br(t)dt",
          "3(1 \u2212 e^(\u22122))",
          "2.853",
          "gallons per minute",
          "mean value of r(t)",
          "average rate of flow",
          "interval [0,4]",
          "definite integral divided by interval length",
          "average value of rate function",
          "contextual interpretation of average value"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u6_frq032",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Water Flow Rate: Riemann Sums, Definite Integrals, FTC, and Average Value",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Water flows into a storage tank at a rate modeled by the function r(t) = 2t\u00b7cos(t\u00b2) + 4, measured in gallons per minute, where t is measured in minutes for 0 \u2264 t \u2264 3. The tank initially contains 10 gallons of water. Additionally, define the accumulation function G(x) = \u222b\u2080\u02e3 r(t) dt for 0 \u2264 x \u2264 3. Use this context to answer the following parts.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using a right Riemann sum with three equal subintervals of width \u0394t = 1, approximate the total amount of water that flows into the tank over the interval [0, 3]. Show all terms of the sum.",
        "rubric": "1 point earned for correctly identifying the three right endpoints t = 1, 2, 3, evaluating r(1) = 2cos(1) + 4, r(2) = 4cos(4) + 4, r(3) = 6cos(9) + 4, multiplying each by \u0394t = 1, and summing to get the correct numerical approximation (approximately 2(0.5403) + 4 + 4(\u22120.6536) + 4 + 6(\u22120.9111) + 4 \u2248 6.081 + 1.386 + (\u22121.467) \u2248 5.999 gallons, approximately 6.00 gallons)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find an antiderivative F(t) of r(t) = 2t\u00b7cos(t\u00b2) + 4 by identifying an appropriate substitution, and write the general indefinite integral \u222b r(t) dt.",
        "rubric": "1 point earned for correctly applying u-substitution with u = t\u00b2, du = 2t dt, recognizing \u222b2t\u00b7cos(t\u00b2) dt = sin(t\u00b2) + C, and writing the complete antiderivative F(t) = sin(t\u00b2) + 4t + C with the constant of integration included."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using the Fundamental Theorem of Calculus Part 2, calculate the exact total amount of water that flows into the tank over the interval [0, 3], i.e., evaluate \u222b\u2080\u00b3 r(t) dt.",
        "rubric": "1 point earned for applying FTC Part 2 by evaluating F(3) \u2212 F(0) = (sin(9) + 12) \u2212 (sin(0) + 0) = sin(9) + 12, and stating the exact answer sin(9) + 12 gallons (approximately 11.588 gallons)."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Using the Fundamental Theorem of Calculus Part 1, find G'(x), where G(x) = \u222b\u2080\u02e3 r(t) dt. Then evaluate G'(\u221a\u03c0) and interpret its meaning in context.",
        "rubric": "1 point earned for correctly stating G'(x) = r(x) = 2x\u00b7cos(x\u00b2) + 4 by FTC Part 1 (the derivative of an accumulation function equals the integrand evaluated at the upper limit), then computing G'(\u221a\u03c0) = 2\u221a\u03c0\u00b7cos(\u03c0) + 4 = \u22122\u221a\u03c0 + 4 \u2248 0.455 gallons per minute, and interpreting this as the rate at which water is flowing into the tank at time x = \u221a\u03c0 minutes."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find the average value of r(t) = 2t\u00b7cos(t\u00b2) + 4 over the interval [0, 3]. Then use the net change theorem to determine the total amount of water in the tank at t = 3, given the tank initially contains 10 gallons.",
        "rubric": "1 point earned for correctly computing the average value as (1/(3\u22120))\u00b7\u222b\u2080\u00b3 r(t) dt = (1/3)(sin(9) + 12) \u2248 3.863 gallons per minute, AND applying the net change theorem: total water = initial amount + \u222b\u2080\u00b3 r(t) dt = 10 + sin(9) + 12 = 22 + sin(9) \u2248 21.588 gallons."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates a right Riemann sum with three subintervals (\u0394t = 1), using right endpoints t = 1, 2, 3, computing r(1) + r(2) + r(3) multiplied by \u0394t = 1 to approximate the total inflow.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "right Riemann sum",
          "right endpoints",
          "subintervals",
          "\u0394t = 1",
          "r(1) + r(2) + r(3)",
          "sum of rectangles",
          "approximate total",
          "width times height",
          "numerical approximation",
          "equal subintervals"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly finds the indefinite integral of r(t) by applying u-substitution (u = t\u00b2) to handle the 2t\u00b7cos(t\u00b2) term and integrating the constant 4, producing sin(t\u00b2) + 4t + C with the constant of integration.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "u-substitution",
          "u = t\u00b2",
          "du = 2t dt",
          "antiderivative",
          "sin(t\u00b2)",
          "indefinite integral",
          "+ C",
          "constant of integration",
          "\u222b r(t) dt",
          "sin(t\u00b2) + 4t + C"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Applies FTC Part 2 to evaluate the definite integral \u222b\u2080\u00b3 r(t) dt = F(3) \u2212 F(0) = sin(9) + 12, stating the exact value sin(9) + 12 gallons.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "FTC Part 2",
          "Fundamental Theorem of Calculus",
          "F(3) \u2212 F(0)",
          "definite integral",
          "sin(9) + 12",
          "exact value",
          "evaluation theorem",
          "antiderivative evaluated",
          "\u222b\u2080\u00b3 r(t) dt",
          "upper limit minus lower limit"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Applies FTC Part 1 to state G'(x) = r(x) = 2x\u00b7cos(x\u00b2) + 4, correctly evaluates G'(\u221a\u03c0) = \u22122\u221a\u03c0 + 4, and interprets the value as the instantaneous rate of water flow into the tank at x = \u221a\u03c0 minutes.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "FTC Part 1",
          "accumulation function",
          "G'(x) = r(x)",
          "derivative of integral",
          "upper limit substitution",
          "G'(\u221a\u03c0)",
          "\u22122\u221a\u03c0 + 4",
          "instantaneous rate",
          "gallons per minute",
          "rate of flow at x = \u221a\u03c0"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly computes the average value of r(t) on [0,3] as (1/3)(sin(9) + 12), and uses the net change theorem to find the total water in the tank at t = 3 as 10 + (sin(9) + 12) = 22 + sin(9) gallons.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "average value",
          "(1/(b\u2212a))\u222br(t)dt",
          "(1/3)(sin(9)+12)",
          "net change theorem",
          "total amount",
          "initial value plus integral",
          "22 + sin(9)",
          "net change",
          "\u222b\u2080\u00b3 r(t) dt",
          "initial 10 gallons"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u6_frq033",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Water Flow Rate: Integration Techniques and Fundamental Theorem Applications",
    "units": [
      6
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Water flows into a reservoir at a rate modeled by the function r(t) = 4t\u00b7e^(\u2212t\u00b2/8) + 3, where r(t) is measured in thousands of gallons per hour and t is measured in hours, for 0 \u2264 t \u2264 6. At time t = 0, the reservoir contains 10 thousand gallons. A function G is defined by G(x) = \u222b\u2080\u02e3 r(t) dt for 0 \u2264 x \u2264 6. Selected values of r(t) are given in the table below:\n\n| t (hours) | 0 | 2 | 4 | 6 |\n|---|---|---|---|---|\n| r(t) (thousands of gal/hr) | 3 | 6.084 | 4.541 | 3.074 |\n\nUse the data in the table and the subintervals [0,2], [2,4], and [4,6] where needed.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using a right Riemann sum with three subintervals of equal width as indicated by the table, approximate \u222b\u2080\u2076 r(t) dt. Show the setup of your sum and give units with your answer.",
        "rubric": "Set up right Riemann sum using right endpoints t = 2, 4, 6 with \u0394t = 2: 2\u00b7r(2) + 2\u00b7r(4) + 2\u00b7r(6) = 2(6.084) + 2(4.541) + 2(3.074) = 2(13.699) = 27.398 thousand gallons. Award credit for correct setup with right endpoints, width \u0394t = 2, and correct arithmetic. Units must be stated as thousand gallons."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find an antiderivative of r(t) = 4t\u00b7e^(\u2212t\u00b2/8) + 3 by finding the indefinite integral \u222b(4t\u00b7e^(\u2212t\u00b2/8) + 3) dt. Show your substitution clearly.",
        "rubric": "Use u-substitution: let u = \u2212t\u00b2/8, then du = \u2212t/2 dt, so t dt = \u22122 du. Integral of 4t\u00b7e^(\u2212t\u00b2/8) dt = 4\u00b7(\u22122)\u222be^u du = \u22128e^(\u2212t\u00b2/8). Full antiderivative is \u22128e^(\u2212t\u00b2/8) + 3t + C. Award credit for correct u-substitution, correct antiderivative \u22128e^(\u2212t\u00b2/8) + 3t, and inclusion of constant of integration C."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using your result from part (b), find the exact value of \u222b\u2080\u2076 r(t) dt. Then find the total amount of water in the reservoir at t = 6 hours.",
        "rubric": "Evaluate [\u22128e^(\u2212t\u00b2/8) + 3t]\u2080\u2076 = (\u22128e^(\u221236/8) + 18) \u2212 (\u22128e^0 + 0) = \u22128e^(\u22124.5) + 18 + 8 = 26 \u2212 8e^(\u22124.5) \u2248 25.893 thousand gallons. Total water = 10 + \u222b\u2080\u2076 r(t) dt = 10 + 26 \u2212 8e^(\u22124.5) \u2248 35.893 thousand gallons. Award credit for correct definite integral evaluation using FTC Part 2, correct application of net change theorem adding initial value 10, and correct numerical answer."
      },
      {
        "label": "d",
        "command": "Justify",
        "question": "The function G is defined by G(x) = \u222b\u2080\u02e3 r(t) dt. Find G\u2032(x) and determine whether G is concave up or concave down at x = 2. Justify your answer.",
        "rubric": "By FTC Part 1, G\u2032(x) = r(x) = 4x\u00b7e^(\u2212x\u00b2/8) + 3. Find G\u2033(x) = r\u2032(x): using product rule, r\u2032(x) = 4e^(\u2212x\u00b2/8) + 4x\u00b7(\u2212x/4)e^(\u2212x\u00b2/8) = 4e^(\u2212x\u00b2/8)(1 \u2212 x\u00b2/4). At x = 2: G\u2033(2) = r\u2032(2) = 4e^(\u22120.5)(1 \u2212 1) = 0. Since G\u2033(2) = 0, the second derivative test is inconclusive at exactly x = 2; examining G\u2033 for x slightly greater than 2 gives 1 \u2212 x\u00b2/4 < 0, so G\u2033 < 0, indicating G is concave down just after x = 2. For x slightly less than 2, G\u2033 > 0. Therefore x = 2 is an inflection point, and the question should be interpreted as: G is transitioning from concave up to concave down at x = 2. Award credit for correct application of FTC Part 1 giving G\u2032(x) = r(x), correct computation of G\u2033(2) = r\u2032(2) = 0 using the product rule with the factor 4e^(\u2212x\u00b2/8)(1 \u2212 x\u00b2/4), and a complete justification addressing the sign of G\u2033 on either side of x = 2."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Find the average value of r(t) on the interval [0, 6]. Interpret the meaning of the average value in the context of this problem.",
        "rubric": "Average value = (1/(6\u22120))\u00b7\u222b\u2080\u2076 r(t) dt = (1/6)\u00b7(26 \u2212 8e^(\u22124.5)) \u2248 (1/6)(25.893) \u2248 4.316 thousand gallons per hour. Interpretation: the average rate at which water flows into the reservoir over the 6-hour period is approximately 4.316 thousand gallons per hour. Award credit for correct average value formula (1/(b\u2212a))\u222b\u2090\u1d47 f(x)dx, correct substitution using the definite integral from part (c), correct numerical answer, and a complete contextual interpretation referencing average flow rate and the time interval."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct right Riemann sum setup using right endpoints t = 2, 4, 6 with \u0394t = 2, yielding approximately 27.398 thousand gallons with units stated.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "right Riemann sum",
          "right endpoints",
          "\u0394t = 2",
          "subintervals [0,2] [2,4] [4,6]",
          "2\u00b7r(2) + 2\u00b7r(4) + 2\u00b7r(6)",
          "27.398 thousand gallons",
          "equal width subintervals",
          "right endpoint approximation",
          "Riemann sum setup",
          "overestimate or underestimate",
          "definite integral approximation"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct indefinite integral using u-substitution with u = \u2212t\u00b2/8, producing antiderivative \u22128e^(\u2212t\u00b2/8) + 3t + C.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "u-substitution",
          "u = \u2212t\u00b2/8",
          "du = \u2212t/2 dt",
          "t dt = \u22122 du",
          "antiderivative \u22128e^(\u2212t\u00b2/8)",
          "3t",
          "constant of integration C",
          "indefinite integral",
          "substitution method",
          "composite exponential integrand",
          "reverse chain rule"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct evaluation of the definite integral using FTC Part 2 giving 26 \u2212 8e^(\u22124.5), and correct total reservoir amount of 10 + (26 \u2212 8e^(\u22124.5)) \u2248 35.893 thousand gallons using the net change theorem.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "FTC Part 2",
          "Fundamental Theorem of Calculus",
          "definite integral evaluation",
          "26 \u2212 8e^(\u22124.5)",
          "net change theorem",
          "initial value 10 thousand gallons",
          "35.893 thousand gallons",
          "total amount in reservoir",
          "evaluate antiderivative at bounds",
          "accumulation function",
          "exact value"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correct application of FTC Part 1 stating G\u2032(x) = r(x), correct differentiation using the product rule to find G\u2033(x) = 4e^(\u2212x\u00b2/8)(1 \u2212 x\u00b2/4), evaluation at x = 2 giving G\u2033(2) = 0, and complete concavity justification by analyzing the sign of G\u2033 on either side of x = 2.",
        "partLabel": "d",
        "skill": "justify",
        "keywords": [
          "FTC Part 1",
          "G\u2032(x) = r(x)",
          "product rule",
          "G\u2033(x) = r\u2032(x)",
          "4e^(\u2212x\u00b2/8)(1 \u2212 x\u00b2/4)",
          "G\u2033(2) = 0",
          "inflection point at x = 2",
          "sign of second derivative",
          "concave down for x > 2",
          "concavity justification",
          "second derivative test"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correct average value formula (1/6)\u222b\u2080\u2076 r(t) dt \u2248 4.316 thousand gallons per hour, with a complete contextual interpretation referencing average flow rate over the 6-hour interval.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "average value of a function",
          "(1/(b\u2212a))\u222b\u2090\u1d47 f(x) dx",
          "multiply by 1/6",
          "4.316 thousand gallons per hour",
          "average flow rate",
          "contextual interpretation",
          "6-hour interval",
          "mean value of r(t)",
          "average value formula",
          "rate interpretation",
          "definite integral divided by interval length"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u7_frq034",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Integration by Parts: Evaluating \u222bx\u00b7e\u02e3 dx",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the indefinite integral \u222bx\u00b7e\u02e3 dx. You will evaluate this integral using integration by parts, which states that \u222bu dv = uv \u2212 \u222bv du.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify your choices for u and dv in order to apply integration by parts to \u222bx\u00b7e\u02e3 dx. Then find du and v.",
        "rubric": "Student earns the point by correctly identifying u = x, dv = e\u02e3 dx, and then correctly differentiating and integrating to obtain du = dx and v = e\u02e3."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the values of u, v, du, and dv found in part (a), apply the integration by parts formula \u222bu dv = uv \u2212 \u222bv du to set up and simplify the resulting expression. Evaluate any remaining integral.",
        "rubric": "Student earns the point by correctly writing x\u00b7e\u02e3 \u2212 \u222be\u02e3 dx and then evaluating the remaining integral to obtain x\u00b7e\u02e3 \u2212 e\u02e3 (or equivalently e\u02e3(x \u2212 1)), without the constant of integration required at this stage."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Write the complete, final answer for \u222bx\u00b7e\u02e3 dx, including the constant of integration.",
        "rubric": "Student earns the point by writing the complete antiderivative x\u00b7e\u02e3 \u2212 e\u02e3 + C, or the equivalent factored form e\u02e3(x \u2212 1) + C, with the constant of integration C explicitly included."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies u = x and dv = e\u02e3 dx, then correctly computes du = dx and v = e\u02e3.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "u = x",
          "dv = e^x dx",
          "du = dx",
          "v = e^x",
          "integration by parts setup",
          "differentiate u to get du",
          "integrate dv to get v",
          "LIATE rule",
          "logarithmic-inverse-algebraic-trigonometric-exponential",
          "algebraic factor as u",
          "exponential factor as dv",
          "tabular method",
          "antiderivative of e^x is e^x"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the integration by parts formula to obtain x\u00b7e\u02e3 \u2212 \u222be\u02e3 dx and evaluates the remaining integral to get x\u00b7e\u02e3 \u2212 e\u02e3.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "uv minus integral v du",
          "x e^x minus integral e^x dx",
          "x\u00b7e\u02e3 \u2212 e\u02e3",
          "remaining integral evaluates to e^x",
          "\u222be^x dx = e^x",
          "integration by parts formula applied",
          "\u222bu dv = uv \u2212 \u222bv du",
          "substitute u v du dv into formula",
          "simplify resulting expression",
          "e\u02e3(x \u2212 1) equivalent form"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Writes the complete final antiderivative x\u00b7e\u02e3 \u2212 e\u02e3 + C or e\u02e3(x \u2212 1) + C with the constant of integration explicitly included.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "x e^x minus e^x plus C",
          "e\u02e3(x \u2212 1) + C",
          "constant of integration C explicitly written",
          "indefinite integral requires + C",
          "complete antiderivative",
          "factored form e^x(x-1) + C",
          "family of antiderivatives",
          "arbitrary constant",
          "general antiderivative",
          "x\u00b7e\u02e3 \u2212 e\u02e3 + C"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u7_frq035",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Integration by Parts with Exponential and Polynomial",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the integral \u222b x\u00b2 e\u02e3 dx. You will evaluate this integral using integration by parts, which states that \u222b u dv = uv \u2212 \u222b v du. This technique may need to be applied more than once.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Identify your first choice of u and dv, then compute du and v. State all four quantities explicitly.",
        "rubric": "Earns 1 point for correctly identifying u = x\u00b2, dv = e\u02e3 dx, and correctly computing du = 2x dx and v = e\u02e3. Any assignment of u and dv that leads to a solvable reduction also earns the point provided du and v are consistent and correct."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Apply integration by parts once using your choices from part (a) to rewrite the integral. Then identify the new u and dv needed for the remaining integral and apply integration by parts a second time, showing all intermediate steps.",
        "rubric": "Earns 1 point for correctly writing x\u00b2e\u02e3 \u2212 \u222b 2x e\u02e3 dx after the first application, and then correctly applying integration by parts a second time to obtain x\u00b2e\u02e3 \u2212 2(xe\u02e3 \u2212 \u222b e\u02e3 dx), with all algebraic steps shown and the second application consistent with the tabular or standard method."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Complete the evaluation of \u222b x\u00b2 e\u02e3 dx and write the final antiderivative, including the constant of integration.",
        "rubric": "Earns 1 point for the correct final answer x\u00b2e\u02e3 \u2212 2xe\u02e3 + 2e\u02e3 + C, equivalently written as e\u02e3(x\u00b2 \u2212 2x + 2) + C. Constant of integration + C must be present. Correct factored or expanded form both accepted."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct identification of u = x\u00b2, dv = e\u02e3 dx, du = 2x dx, v = e\u02e3 for the first application of integration by parts.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "u = x\u00b2",
          "dv = e\u02e3 dx",
          "du = 2x dx",
          "v = e\u02e3",
          "integration by parts",
          "u substitution assignment",
          "LIATE",
          "tabular integration",
          "differentiate u",
          "antiderivative of e\u02e3"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct first application yielding x\u00b2e\u02e3 \u2212 \u222b 2x e\u02e3 dx, followed by a correct second application of integration by parts to \u222b 2x e\u02e3 dx giving 2xe\u02e3 \u2212 2\u222b e\u02e3 dx.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "x\u00b2e\u02e3 \u2212 \u222b 2x e\u02e3 dx",
          "second application",
          "integration by parts twice",
          "uv \u2212 \u222b v du",
          "2xe\u02e3 \u2212 2\u222b e\u02e3 dx",
          "reduction",
          "tabular method",
          "repeated integration by parts",
          "u = x",
          "dv = e\u02e3 dx"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct final antiderivative x\u00b2e\u02e3 \u2212 2xe\u02e3 + 2e\u02e3 + C or equivalently e\u02e3(x\u00b2 \u2212 2x + 2) + C, with + C present.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "x\u00b2e\u02e3 \u2212 2xe\u02e3 + 2e\u02e3 + C",
          "e\u02e3(x\u00b2 \u2212 2x + 2) + C",
          "constant of integration",
          "+ C",
          "antiderivative",
          "combine like terms with e\u02e3",
          "factor out e\u02e3",
          "indefinite integral",
          "fully simplified antiderivative",
          "expanded form accepted"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u7_frq036",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Partial Fraction Decomposition of a Rational Integrand",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the integral \u222b\u2081\u00b3 (5x + 3) / [(x + 1)(x + 3)] dx. You will evaluate this definite integral by first decomposing the integrand into partial fractions and then integrating term by term.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Write the partial fraction decomposition of (5x + 3) / [(x + 1)(x + 3)] in the form A/(x + 1) + B/(x + 3). Determine the values of A and B, showing your algebraic work.",
        "rubric": "Earns 1 point for correctly setting up (5x + 3) = A(x + 3) + B(x + 1), solving to find A = \u22121 and B = 6, or equivalently using the cover-up method or system of equations to arrive at the same values. Both A and B must be correct."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using your partial fraction decomposition from part (a), write the antiderivative of (5x + 3) / [(x + 1)(x + 3)] and simplify.",
        "rubric": "Earns 1 point for writing the correct antiderivative \u2212ln|x + 1| + 6 ln|x + 3| + C, or equivalently ln|(x + 3)\u2076 / (x + 1)| + C. The natural log form of each term must be correct and consistent with the values of A and B from part (a). Constant of integration required for full indefinite antiderivative credit, but in context of evaluating a definite integral the + C may be omitted if bounds are applied in part (c)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the definite integral \u222b\u2081\u00b3 (5x + 3) / [(x + 1)(x + 3)] dx using the Fundamental Theorem of Calculus and your antiderivative from part (b). Give an exact answer.",
        "rubric": "Earns 1 point for correctly applying the Fundamental Theorem of Calculus by evaluating [\u2212ln|x + 1| + 6 ln|x + 3|] from x = 1 to x = 3, obtaining (\u2212ln 4 + 6 ln 6) \u2212 (\u2212ln 2 + 6 ln 4), and simplifying to the exact value 6 ln 6 \u2212 7 ln 4 + ln 2, or equivalently ln(729/128). Any fully simplified exact equivalent form earns the point."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct partial fraction decomposition with A = \u22121 and B = 6, shown via algebraic method such as substitution of roots or matching coefficients.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "partial fraction decomposition",
          "A/(x+1) + B/(x+3)",
          "A = -1",
          "B = 6",
          "cover-up method",
          "matching coefficients",
          "system of equations",
          "5x + 3 = A(x+3) + B(x+1)",
          "linear factors",
          "denominator factored"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct antiderivative \u2212ln|x + 1| + 6 ln|x + 3| + C obtained by integrating each partial fraction term.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "\u2212ln|x + 1|",
          "6 ln|x + 3|",
          "natural logarithm",
          "ln|x + 1|",
          "ln|x + 3|",
          "antiderivative of 1/(x+a)",
          "integrate term by term",
          "logarithmic antiderivative",
          "absolute value",
          "+ C"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct evaluation of the definite integral using FTC, arriving at exact simplified form such as 6 ln 6 \u2212 7 ln 4 + ln 2 or ln(729/128).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "Fundamental Theorem of Calculus",
          "evaluate at bounds",
          "upper limit minus lower limit",
          "6 ln 6 \u2212 7 ln 4 + ln 2",
          "ln(729/128)",
          "exact logarithmic form",
          "substitute x = 3",
          "substitute x = 1",
          "logarithm properties",
          "simplify logarithms"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u7_frq037",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Integration by Parts with a Repeated Application",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the integral \u222b x\u00b2 e\u02e3 dx, which requires repeated application of integration by parts. Recall that integration by parts states \u222b u dv = uv \u2212 \u222b v du. You will evaluate this integral fully, verify a specific antiderivative value, and analyze the structure of the result.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using integration by parts twice, find the general antiderivative \u222b x\u00b2 e\u02e3 dx. Clearly identify your choices of u and dv at each step and show all intermediate work.",
        "rubric": "Earns 1 point for correctly applying integration by parts twice: first with u = x\u00b2, dv = e\u02e3 dx giving x\u00b2e\u02e3 \u2212 2\u222b x e\u02e3 dx, then with u = x, dv = e\u02e3 dx giving the final antiderivative x\u00b2e\u02e3 \u2212 2xe\u02e3 + 2e\u02e3 + C."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using your result from part (a), evaluate the definite integral \u222b\u2080\u00b9 x\u00b2 e\u02e3 dx. Express your answer in exact form.",
        "rubric": "Earns 1 point for correctly substituting the bounds x = 1 and x = 0 into x\u00b2e\u02e3 \u2212 2xe\u02e3 + 2e\u02e3 evaluated from 0 to 1, yielding (e \u2212 2e + 2e) \u2212 (0 \u2212 0 + 2) = e \u2212 2."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student claims that the antiderivative of x\u00b2 e\u02e3 can always be written in the form P(x)e\u02e3 + C, where P(x) is a polynomial. Justify whether this claim is true in general for \u222b x\u207f e\u02e3 dx where n is any non-negative integer, and identify the degree of P(x) relative to n.",
        "rubric": "Earns 1 point for correctly justifying that the antiderivative of x\u207f e\u02e3 is always of the form P(x)e\u02e3 + C where P(x) is a polynomial of degree n, using the reasoning that each application of integration by parts reduces the power of x by 1 while preserving the e\u02e3 factor, requiring exactly n applications until the integral \u222b e\u02e3 dx = e\u02e3 + C is reached."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies integration by parts twice with proper u and dv selections to obtain the antiderivative x\u00b2e\u02e3 \u2212 2xe\u02e3 + 2e\u02e3 + C.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "integration by parts",
          "u = x\u00b2",
          "dv = e\u02e3 dx",
          "x\u00b2e\u02e3 \u2212 2xe\u02e3 + 2e\u02e3 + C",
          "\u222b u dv = uv \u2212 \u222b v du",
          "repeated integration by parts",
          "tabular integration",
          "antiderivative",
          "+ C",
          "reduces power of x",
          "du = 2x dx",
          "v = e\u02e3",
          "second application",
          "u = x dv = e\u02e3 dx",
          "xe\u02e3 \u2212 e\u02e3"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly evaluates the definite integral from 0 to 1 by substituting bounds into the antiderivative and simplifying to the exact value e \u2212 2.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "e \u2212 2",
          "definite integral",
          "fundamental theorem of calculus",
          "substitute x = 1",
          "substitute x = 0",
          "exact form",
          "evaluates bounds",
          "(1)\u00b2e\u00b9 \u2212 2(1)e\u00b9 + 2e\u00b9",
          "e \u2212 2e + 2e",
          "upper bound minus lower bound",
          "F(1) \u2212 F(0)",
          "0 \u2212 0 + 2 at x = 0",
          "antiderivative evaluated",
          "simplifies to e \u2212 2",
          "exact value"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly justifies that the antiderivative of x\u207f e\u02e3 is P(x)e\u02e3 + C where P(x) has degree n, by reasoning that each integration by parts application reduces the polynomial degree by 1 while retaining the e\u02e3 factor.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "degree n polynomial",
          "P(x)e\u02e3 + C",
          "reduces degree by 1 each step",
          "n applications of integration by parts",
          "e\u02e3 factor preserved",
          "polynomial degree equals n",
          "tabular method",
          "inductive reasoning",
          "\u222b x\u207f e\u02e3 dx",
          "claim is true",
          "base case \u222b e\u02e3 dx = e\u02e3 + C",
          "degree of P(x) matches degree of x\u207f",
          "successive differentiation of x\u207f",
          "general antiderivative form",
          "non-negative integer n"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u7_frq038",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Integration Techniques: A Multi-Method Exploration",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "This problem explores several integration techniques. Answer each part independently using the specified method. All antiderivatives should include +C where appropriate, and all definite integrals should be evaluated to an exact simplified value.\n\n(a) Use u-substitution to find the indefinite integral of x\u00b7e^(x\u00b2) with respect to x.\n\n(b) Use u-substitution to evaluate the definite integral from 0 to \u03c0/2 of sin(x)\u00b7cos\u00b3(x) dx.\n\n(c) Use a trigonometric identity to evaluate the indefinite integral of sin\u00b2(x) with respect to x.\n\n(d) Use integration by parts to find the indefinite integral of x\u00b7ln(x) with respect to x.\n\n(e) Use partial fractions to evaluate the indefinite integral of 1/((x+1)(x\u22123)) with respect to x.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Use u-substitution to find \u222b x\u00b7e^(x\u00b2) dx. Show your substitution clearly, including your choice of u, the expression for du, and the final antiderivative in terms of x.",
        "rubric": "Student earns the point by correctly identifying u = x\u00b2, computing du = 2x dx (or x dx = du/2), rewriting the integral as (1/2)\u222be^u du, and arriving at the antiderivative (1/2)e^(x\u00b2) + C."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Use u-substitution to evaluate the definite integral \u222b\u2080^(\u03c0/2) sin(x)\u00b7cos\u00b3(x) dx. Show the substitution, change of limits, and final numerical answer.",
        "rubric": "Student earns the point by setting u = cos(x), du = \u2212sin(x) dx, converting limits to u = 1 (when x = 0) and u = 0 (when x = \u03c0/2), evaluating \u2212\u222b\u2081\u2070 u\u00b3 du = \u222b\u2080\u00b9 u\u00b3 du = [u\u2074/4]\u2080\u00b9 = 1/4."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Use the power-reducing (half-angle) trigonometric identity to evaluate \u222b sin\u00b2(x) dx. State the identity used and simplify the antiderivative completely.",
        "rubric": "Student earns the point by applying sin\u00b2(x) = (1 \u2212 cos(2x))/2, integrating term by term to obtain (1/2)x \u2212 (1/4)sin(2x) + C, with correct use of the power-reducing identity and proper integration of cos(2x)."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Use integration by parts to find \u222b x\u00b7ln(x) dx. Clearly identify your choices for u and dv, compute du and v, apply the integration by parts formula, and state the final antiderivative.",
        "rubric": "Student earns the point by choosing u = ln(x) and dv = x dx (so du = 1/x dx and v = x\u00b2/2), applying \u222bu dv = uv \u2212 \u222bv du = (x\u00b2/2)ln(x) \u2212 \u222b(x/2)dx = (x\u00b2/2)ln(x) \u2212 x\u00b2/4 + C."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Use partial fraction decomposition to find \u222b 1/((x+1)(x\u22123)) dx. Show the decomposition setup, solve for the constants A and B, and write the final antiderivative.",
        "rubric": "Student earns the point by writing 1/((x+1)(x\u22123)) = A/(x+1) + B/(x\u22123), solving to find A = \u22121/4 and B = 1/4, and integrating to obtain (\u22121/4)ln|x+1| + (1/4)ln|x\u22123| + C, equivalently (1/4)ln|(x\u22123)/(x+1)| + C."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correct u-substitution with u = x\u00b2, du = 2x dx, and final antiderivative (1/2)e^(x\u00b2) + C",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "u = x\u00b2",
          "du = 2x dx",
          "x dx = du/2",
          "(1/2)e^(x\u00b2)",
          "antiderivative",
          "e^(x\u00b2) + C",
          "u-substitution",
          "rewrite in terms of u",
          "1/2 e^u",
          "chain rule reversal",
          "composite function",
          "substitution method"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct substitution u = cos(x), changed limits u = 1 to u = 0, and definite integral value 1/4",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "u = cos(x)",
          "du = -sin(x) dx",
          "change of limits",
          "u = 1 when x = 0",
          "u = 0 when x = \u03c0/2",
          "u\u00b3 du",
          "u\u2074/4",
          "1/4",
          "definite integral",
          "exact value",
          "bounds of integration",
          "flip limits",
          "negate integral"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct application of power-reducing identity sin\u00b2(x) = (1 \u2212 cos(2x))/2 and antiderivative x/2 \u2212 sin(2x)/4 + C",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "sin\u00b2(x) = (1 \u2212 cos(2x))/2",
          "power-reducing identity",
          "half-angle identity",
          "(1/2)x",
          "\u2212(1/4)sin(2x)",
          "sin(2x)/4",
          "integrate cos(2x)",
          "trig identity",
          "antiderivative + C",
          "double angle",
          "1/(2) factor",
          "term-by-term integration"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correct integration by parts with u = ln(x), dv = x dx, yielding (x\u00b2/2)ln(x) \u2212 x\u00b2/4 + C",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "u = ln(x)",
          "dv = x dx",
          "du = 1/x dx",
          "v = x\u00b2/2",
          "integration by parts formula",
          "uv \u2212 \u222bv du",
          "(x\u00b2/2)ln(x)",
          "x\u00b2/4",
          "(x\u00b2/2)ln(x) \u2212 x\u00b2/4 + C",
          "LIATE rule",
          "logarithmic factor",
          "tabular integration"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correct partial fraction decomposition with A = \u22121/4, B = 1/4, and antiderivative (1/4)ln|x\u22123| \u2212 (1/4)ln|x+1| + C",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "A/(x+1) + B/(x\u22123)",
          "A = -1/4",
          "B = 1/4",
          "partial fractions",
          "ln|x+1|",
          "ln|x\u22123|",
          "(1/4)ln|(x\u22123)/(x+1)|",
          "decomposition",
          "solve for constants",
          "antiderivative + C",
          "linear factors",
          "cover-up method",
          "rational function integration"
        ]
      }
    ]
  },
  {
    "id": "calcbc_u7_frq039",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Multi-Technique Integration: A Comprehensive Survey of Advanced Methods",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "This problem explores five distinct integration techniques applied to related integrands. Work each part independently and show all steps clearly.\n\nConsider the following integrals:\n\n(a) \u222b x\u00b7cos(x\u00b2) dx\n\n(b) \u222b\u2080^(\u03c0/4) tan\u00b3(x)\u00b7sec\u00b2(x) dx\n\n(c) \u222b sin\u2074(x) dx\n\n(d) \u222b x\u00b2\u00b7e\u02e3 dx\n\n(e) \u222b\u2081^\u221e 1/(x\u00b2\u22121) dx, where x > 1\n\nFor each part, identify the appropriate technique, execute it fully, and present a simplified exact answer.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the indefinite integral \u222b x\u00b7cos(x\u00b2) dx using an appropriate u-substitution. Clearly state your substitution, find du, rewrite the integral in terms of u, integrate, and back-substitute to give your final answer in terms of x. Include the constant of integration.",
        "rubric": "Full credit requires: stating u = x\u00b2, computing du = 2x dx so x dx = du/2, rewriting as (1/2)\u222bcos(u) du, integrating to get (1/2)sin(u) + C, and back-substituting to give (1/2)sin(x\u00b2) + C."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Evaluate the definite integral \u222b\u2080^(\u03c0/4) tan\u00b3(x)\u00b7sec\u00b2(x) dx using an appropriate u-substitution. State your substitution, convert the limits of integration to u-values, evaluate the resulting definite integral in terms of u without back-substituting, and give an exact numerical answer.",
        "rubric": "Full credit requires: letting u = tan(x), du = sec\u00b2(x) dx, changing limits (x=0 \u2192 u=0, x=\u03c0/4 \u2192 u=1), rewriting as \u222b\u2080\u00b9 u\u00b3 du, evaluating to [u\u2074/4]\u2080\u00b9 = 1/4."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find the indefinite integral \u222b sin\u2074(x) dx using the power-reducing identity sin\u00b2(x) = (1 \u2212 cos(2x))/2. Write sin\u2074(x) as [sin\u00b2(x)]\u00b2, apply the identity twice as needed, expand fully, and integrate term by term to obtain the exact antiderivative. Include the constant of integration.",
        "rubric": "Full credit requires: writing sin\u2074(x) = [(1\u2212cos(2x))/2]\u00b2 = (1 \u2212 2cos(2x) + cos\u00b2(2x))/4, applying cos\u00b2(2x) = (1+cos(4x))/2 to get (3/8 \u2212 (1/2)cos(2x) + (1/8)cos(4x)), and integrating term by term to yield (3x/8) \u2212 (sin(2x)/4) + (sin(4x)/32) + C."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Find the indefinite integral \u222b x\u00b2\u00b7e\u02e3 dx using integration by parts. You will need to apply integration by parts more than once. Clearly identify u and dv at each application, show the resulting expressions, and give the fully simplified antiderivative. Include the constant of integration.",
        "rubric": "Full credit requires: first application with u = x\u00b2, dv = e\u02e3 dx giving x\u00b2e\u02e3 \u2212 2\u222bx\u00b7e\u02e3 dx; second application with u = x, dv = e\u02e3 dx giving x\u00b2e\u02e3 \u2212 2(xe\u02e3 \u2212 e\u02e3) + C; final simplified answer e\u02e3(x\u00b2 \u2212 2x + 2) + C."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "Evaluate the improper integral \u222b\u2081^\u221e 1/(x\u00b2\u22121) dx using partial fraction decomposition. First decompose 1/(x\u00b2\u22121) into partial fractions, then rewrite the integral as a limit, integrate, and evaluate the limit to determine whether the integral converges or diverges. If it converges, state the exact value.",
        "rubric": "Full credit requires: decomposing 1/((x\u22121)(x+1)) = (1/2)\u00b7[1/(x\u22121) \u2212 1/(x+1)], writing lim_{b\u2192\u221e} \u222b\u2081^b of that expression, noting the integrand has a vertical asymptote at x=1 so the integral is improper at both endpoints requiring lim_{a\u21921\u207a} as well, recognizing (1/2)[ln|x\u22121|\u2212ln|x+1|] diverges as x\u21921\u207a because ln|x\u22121|\u2192\u2212\u221e, and correctly concluding the integral diverges."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies u-substitution to \u222b x\u00b7cos(x\u00b2) dx: states u = x\u00b2, computes du = 2x dx, rewrites as (1/2)\u222bcos(u) du, integrates to (1/2)sin(u), and back-substitutes to (1/2)sin(x\u00b2) + C.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "u = x\u00b2",
          "du = 2x dx",
          "x dx = du/2",
          "(1/2)sin(x\u00b2) + C",
          "u-substitution indefinite",
          "back-substitution",
          "constant of integration C",
          "rewrite in terms of u",
          "(1/2)\u222bcos(u) du",
          "chain rule reversal",
          "composite function antiderivative"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly evaluates \u222b\u2080^(\u03c0/4) tan\u00b3(x)\u00b7sec\u00b2(x) dx: substitutes u = tan(x), changes limits to 0 and 1, evaluates \u222b\u2080\u00b9 u\u00b3 du = 1/4.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "u = tan(x)",
          "du = sec\u00b2(x) dx",
          "change limits of integration",
          "u = 0 to u = 1",
          "\u222b\u2080\u00b9 u\u00b3 du",
          "u\u2074/4",
          "1/4",
          "definite integral u-substitution",
          "new limits of integration",
          "tan(\u03c0/4) = 1",
          "tan(0) = 0",
          "power rule for antiderivative"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly evaluates \u222b sin\u2074(x) dx using the power-reducing identity twice, expanding and integrating term by term to obtain (3x/8) \u2212 (sin(2x)/4) + (sin(4x)/32) + C.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "power-reducing identity",
          "sin\u00b2(x) = (1\u2212cos(2x))/2",
          "sin\u2074(x) = [sin\u00b2(x)]\u00b2",
          "cos\u00b2(2x) = (1+cos(4x))/2",
          "3x/8",
          "sin(2x)/4",
          "sin(4x)/32",
          "trigonometric integral even power",
          "half-angle identity applied twice",
          "integrate term by term",
          "expand squared binomial",
          "antiderivative of cosine"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies integration by parts twice to \u222b x\u00b2\u00b7e\u02e3 dx, arriving at the simplified antiderivative e\u02e3(x\u00b2 \u2212 2x + 2) + C.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "integration by parts",
          "u = x\u00b2 dv = e\u02e3 dx",
          "v = e\u02e3",
          "x\u00b2e\u02e3 \u2212 2\u222bxe\u02e3 dx",
          "second application integration by parts",
          "u = x dv = e\u02e3 dx",
          "xe\u02e3 \u2212 e\u02e3",
          "e\u02e3(x\u00b2 \u2212 2x + 2) + C",
          "tabular integration",
          "repeated integration by parts",
          "reduce polynomial degree",
          "uv \u2212 \u222bv du"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly decomposes 1/(x\u00b2\u22121) via partial fractions, recognizes the integral is improper at both x=1 and x=\u221e, evaluates the limit near x=1\u207a showing ln|x\u22121|\u2192\u2212\u221e, and correctly concludes the integral diverges.",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "partial fraction decomposition",
          "1/((x\u22121)(x+1))",
          "(1/2)[1/(x\u22121) \u2212 1/(x+1)]",
          "improper integral two singularities",
          "vertical asymptote x = 1",
          "lim as a\u21921\u207a",
          "lim as b\u2192\u221e",
          "ln|x\u22121| diverges to negative infinity",
          "integral diverges",
          "improper at both endpoints",
          "split integral at singularity",
          "antiderivative natural logarithm"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u8_frq040",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Volume of a Solid Using the Washer Method",
    "units": [
      8
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let R be the region enclosed by the curves f(x) = \u221ax and g(x) = x on the interval [0, 1]. The region R is rotated about the x-axis to generate a solid of revolution.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the x-coordinates of the points of intersection of f(x) = \u221ax and g(x) = x on [0, 1].",
        "rubric": "Earns 1 point for correctly identifying both intersection points at x = 0 and x = 1 by setting \u221ax = x and solving."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Write, but do not evaluate, an integral expression using the washer method that gives the volume of the solid generated when R is rotated about the x-axis.",
        "rubric": "Earns 1 point for a correct washer method integral: \u03c0 \u222b\u2080\u00b9 [(\u221ax)\u00b2 \u2212 (x)\u00b2] dx, with the outer radius \u221ax and inner radius x correctly identified and squared."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the integral from part (b) to find the exact volume of the solid.",
        "rubric": "Earns 1 point for correctly evaluating the integral to obtain \u03c0[x\u00b2/2 \u2212 x\u00b3/3] from 0 to 1, yielding a final answer of \u03c0/6."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly finds intersection points x = 0 and x = 1 by setting \u221ax equal to x and solving algebraically.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "intersection points",
          "\u221ax = x",
          "x = 0",
          "x = 1",
          "set equal",
          "solving \u221ax = x",
          "squaring both sides",
          "x\u00b2 = x",
          "x(x \u2212 1) = 0",
          "algebraic solution"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Sets up the washer method integral correctly with \u03c0 times the difference of squares of the outer radius (\u221ax)\u00b2 and inner radius (x)\u00b2, integrated from 0 to 1.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "washer method",
          "outer radius \u221ax",
          "inner radius x",
          "\u03c0 \u222b[(\u221ax)\u00b2 \u2212 x\u00b2] dx",
          "R\u00b2 \u2212 r\u00b2",
          "solid of revolution",
          "rotate about x-axis",
          "\u222b\u2080\u00b9",
          "\u03c0 times integral",
          "(\u221ax)\u00b2 = x",
          "limits of integration 0 to 1",
          "annular cross-section"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly evaluates the integral \u03c0 \u222b\u2080\u00b9 (x \u2212 x\u00b2) dx to obtain the exact volume \u03c0/6.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "\u03c0/6",
          "antiderivative x\u00b2/2 \u2212 x\u00b3/3",
          "evaluate from 0 to 1",
          "1/2 \u2212 1/3",
          "\u03c0(1/6)",
          "exact volume",
          "\u03c0 \u222b\u2080\u00b9 (x \u2212 x\u00b2) dx",
          "volume equals \u03c0/6",
          "Fundamental Theorem of Calculus",
          "definite integral evaluation",
          "simplify integrand"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u8_frq041",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Volume by the Washer Method: Rotating a Region About the x-Axis",
    "units": [
      8
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let R be the region enclosed by f(x) = sqrt(x) and g(x) = x^2 on the interval [0, 1]. The region R is rotated about the x-axis to generate a solid of revolution.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the area of the region R enclosed by f(x) = sqrt(x) and g(x) = x^2 on [0, 1].",
        "rubric": "Earns 1 point for correctly setting up and evaluating the integral of (sqrt(x) - x^2) from 0 to 1, yielding an area of 1/3."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Write, but do not evaluate, an integral expression using the washer method that gives the volume of the solid generated when R is rotated about the x-axis.",
        "rubric": "Earns 1 point for correctly identifying the outer radius as sqrt(x) and inner radius as x^2, and writing the integral pi * integral from 0 to 1 of ((sqrt(x))^2 - (x^2)^2) dx, i.e., pi * integral from 0 to 1 of (x - x^4) dx."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Evaluate the integral from part (b) to find the exact volume of the solid.",
        "rubric": "Earns 1 point for correctly evaluating pi * [x^2/2 - x^5/5] from 0 to 1 to obtain a volume of 3pi/10."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly sets up and evaluates the area integral of the difference (sqrt(x) - x^2) from 0 to 1 and obtains 1/3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "area between curves",
          "integral of (sqrt(x) - x^2)",
          "antiderivative",
          "(2/3)x^(3/2) - x^3/3",
          "bounds 0 to 1",
          "area equals 1/3",
          "definite integral",
          "upper curve minus lower curve"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly identifies outer radius R = sqrt(x) and inner radius r = x^2, and sets up the washer method integral pi * integral from 0 to 1 of (x - x^4) dx.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "washer method",
          "outer radius sqrt(x)",
          "inner radius x^2",
          "pi times integral",
          "(R^2 - r^2)",
          "(x - x^4)",
          "rotate about x-axis",
          "integral from 0 to 1",
          "pi integral (sqrt(x))^2 - (x^2)^2"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly evaluates the integral pi * integral from 0 to 1 of (x - x^4) dx and obtains 3pi/10.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "3pi/10",
          "antiderivative x^2/2 - x^5/5",
          "evaluate from 0 to 1",
          "pi times 3/10",
          "volume equals 3pi/10",
          "definite integral evaluation",
          "Fundamental Theorem of Calculus"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u8_frq042",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Motion Along a Line: Position, Displacement, and Total Distance",
    "units": [
      8
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A particle moves along the x-axis so that its velocity at time t is given by v(t) = t^2 - 4t + 3 for 0 <= t <= 4. At time t = 0, the particle's position is x(0) = 2.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the displacement of the particle from t = 0 to t = 4.",
        "rubric": "Earns 1 point for correctly evaluating the integral of v(t) = t^2 - 4t + 3 from 0 to 4, obtaining a displacement of -4/3."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the total distance traveled by the particle from t = 0 to t = 4.",
        "rubric": "Earns 1 point for recognizing that total distance requires the integral of |v(t)|, identifying sign changes of v(t) at t = 1 and t = 3, and correctly computing the total distance as 4 (by splitting the integral at t = 1 and t = 3 and accounting for absolute value)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find the position of the particle at t = 4.",
        "rubric": "Earns 1 point for correctly computing x(4) = x(0) + displacement = 2 + (-4/3) = 2/3."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly sets up and evaluates the integral of v(t) from 0 to 4 and obtains a displacement of -4/3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "displacement",
          "integral of v(t)",
          "integral from 0 to 4",
          "t^2 - 4t + 3",
          "antiderivative t^3/3 - 2t^2 + 3t",
          "displacement equals -4/3",
          "net displacement",
          "signed area"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly integrates |v(t)| by identifying zeros at t = 1 and t = 3, splitting the interval, and computing total distance = 4.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "total distance",
          "integral of absolute value of v(t)",
          "|v(t)|",
          "sign change",
          "v(t) = 0 at t = 1 and t = 3",
          "split integral",
          "add absolute values",
          "total distance equals 4",
          "particle changes direction"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly uses x(4) = x(0) + integral of v(t) from 0 to 4 = 2 + (-4/3) = 2/3.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "position at t = 4",
          "x(4) = x(0) + displacement",
          "x(4) = 2 + (-4/3)",
          "x(4) = 2/3",
          "initial position",
          "Fundamental Theorem of Calculus",
          "position function",
          "x(0) = 2"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u8_frq043",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Volume via Shell Method with Intersecting Curves",
    "units": [
      8
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "Let R be the region enclosed by the curves f(x) = x\u00b3 - 2x\u00b2 and g(x) = x\u00b2 - 2x for x \u2265 0. Note that f(0) = g(0) = 0 and the curves intersect again at x = 3, where f(3) = 27 - 18 = 9 and g(3) = 9 - 6 = 3, so the intersection point in the first quadrant is at x = 3. Careful analysis shows g(x) \u2265 f(x) on [0, 3] since g(x) - f(x) = x\u00b2 - 2x - (x\u00b3 - 2x\u00b2) = 3x\u00b2 - 2x - x\u00b3 = x(3x - 2 - x\u00b2) = x(-(x\u00b2 - 3x + 2)) = -x(x-1)(x-2) Re-examine: g(x) - f(x) = (x\u00b2 - 2x) - (x\u00b3 - 2x\u00b2) = -x\u00b3 + 3x\u00b2 - 2x = -x(x\u00b2 - 3x + 2) = -x(x-1)(x-2). On (0,1): -x<0, (x-1)<0, (x-2)<0 \u2192 product = -x \u00b7 (positive when (x-1)(x-2)>0 for x<1: both negative so product positive) so g-f = -x\u00b7(+) < 0, meaning f(x) \u2265 g(x) on (0,1). On (1,2): (x-1)>0,(x-2)<0 \u2192 (x-1)(x-2)<0, so g-f = -x\u00b7(negative) > 0, meaning g(x) \u2265 f(x) on (1,2). On (2,3): both factors positive \u2192 (x-1)(x-2)>0, so g-f = -x\u00b7(+) < 0, meaning f(x) \u2265 g(x) on (2,3). The region R is bounded between x = 0 and x = 3, where the curves intersect at x = 0, x = 1, x = 2, and x = 3 (since -x(x-1)(x-2) = 0 at those values, but the original intersection of f and g requires f(x)=g(x): x\u00b3-2x\u00b2=x\u00b2-2x \u2192 x\u00b3-3x\u00b2+2x=0 \u2192 x(x\u00b2-3x+2)=0 \u2192 x(x-1)(x-2)=0, giving intersections at x=0,1,2). Thus the region R consists of subregions on [0,1], [1,2] enclosed between the two curves. Consider the region R on the interval [0, 2] enclosed by f(x) = x\u00b3 - 3x\u00b2 + 2x To simplify: Let f(x) = x(x-1)(x-2) and g(x) = 0 (the x-axis), so R is the region between y = x(x-1)(x-2) and y = 0 for 0 \u2264 x \u2264 2. On [0,1], f(x) \u2265 0; on [1,2], f(x) \u2264 0.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Let f(x) = x(x\u22121)(x\u22122) = x\u00b3 \u2212 3x\u00b2 + 2x. Find the total area of the region R enclosed between y = f(x) and the x-axis on the interval [0, 2]. Show your integral setup and evaluate exactly.",
        "rubric": "Earns 1 point for correctly splitting the integral at x = 1 (the sign change), writing Area = \u222b\u2080\u00b9 f(x) dx + |\u222b\u2081\u00b2 f(x) dx| = \u222b\u2080\u00b9 (x\u00b3\u22123x\u00b2+2x) dx + \u222b\u2081\u00b2 (\u2212x\u00b3+3x\u00b2\u22122x) dx, and obtaining the correct value of 1/2 total (each sub-integral equals 1/4, so total area = 1/2)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the shell method, write and evaluate the integral that gives the volume of the solid generated when the region on [0, 1] where f(x) = x\u00b3 \u2212 3x\u00b2 + 2x lies above the x-axis is revolved about the y-axis. Show your complete integral setup.",
        "rubric": "Earns 1 point for correctly applying the shell method: V = 2\u03c0 \u222b\u2080\u00b9 x \u00b7 f(x) dx = 2\u03c0 \u222b\u2080\u00b9 x(x\u00b3\u22123x\u00b2+2x) dx = 2\u03c0 \u222b\u2080\u00b9 (x\u2074\u22123x\u00b3+2x\u00b2) dx, evaluating to 2\u03c0[x\u2075/5 \u2212 3x\u2074/4 + 2x\u00b3/3]\u2080\u00b9 = 2\u03c0(1/5 \u2212 3/4 + 2/3) = 2\u03c0(12/60 \u2212 45/60 + 40/60) = 2\u03c0(7/60) = 7\u03c0/30."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student claims that the volume found in part (b) using the shell method equals the volume computed by the disk method for the same solid (region on [0,1] above the x-axis revolved about the y-axis). Without fully computing the disk method integral, explain why the two methods must yield the same result, and identify one key challenge that makes the disk method harder to apply in this scenario.",
        "rubric": "Earns 1 point for stating that both methods compute the same geometric volume (Cavalieri's principle / same solid of revolution), that the shell and disk/washer methods are equivalent integral formulations for the same solid, and identifying that the disk method requires inverting f(x) = x\u00b3\u22123x\u00b2+2x to express x as a function of y (solving a cubic), making integration with respect to y significantly more difficult than the shell method's integration with respect to x."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly splits the area integral at x=1 due to sign change of f(x), sets up both sub-integrals with correct absolute value handling, and evaluates total area = 1/2.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "split integral",
          "x = 1",
          "sign change",
          "absolute value",
          "\u222b\u2080\u00b9 f(x) dx",
          "\u222b\u2081\u00b2 \u2212f(x) dx",
          "area = 1/2",
          "total area",
          "antiderivative x\u2074/4 \u2212 x\u00b3 + x\u00b2",
          "each sub-integral 1/4"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the shell method formula V = 2\u03c0 \u222b x\u00b7f(x) dx on [0,1], expands the integrand, evaluates the antiderivative, and obtains V = 7\u03c0/30.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "shell method",
          "2\u03c0 \u222b\u2080\u00b9 x\u00b7f(x) dx",
          "cylindrical shells",
          "radius x",
          "height f(x)",
          "x\u2074 \u2212 3x\u00b3 + 2x\u00b2",
          "antiderivative x\u2075/5 \u2212 3x\u2074/4 + 2x\u00b3/3",
          "7\u03c0/30",
          "revolved about y-axis",
          "V = 2\u03c0"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Justifies equivalence of shell and disk methods by invoking that both compute the same solid's volume, and identifies that the disk method requires inverting a cubic function to integrate with respect to y.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "same solid of revolution",
          "equivalent methods",
          "Cavalieri's principle",
          "disk method",
          "integrate with respect to y",
          "invert f(x)",
          "solving a cubic",
          "x as a function of y",
          "shell method more efficient",
          "same volume"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u8_frq045",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Region R: Area, Volume, and Arc Length with Composite Integration",
    "units": [
      8
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Let f(x) = \u221ax and g(x) = x\u00b2/4 be defined on the interval [0, 4]. Let R be the region enclosed between the graphs of f and g on [0, 4]. Note that f(0) = g(0) = 0 and f(4) = g(4) = 4, so R is the region where f(x) \u2265 g(x) for x \u2208 [0, 4].\n\nAdditionally, a particle moves along the x-axis so that its velocity at time t is given by v(t) = t\u00b7e^(\u2212t\u00b2/2) for t \u2265 0. The particle is at position x = 1 at time t = 0.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the area of region R, the region enclosed between f(x) = \u221ax and g(x) = x\u00b2/4 on [0, 4].",
        "rubric": "Earns 1 point for correctly setting up and evaluating the integral \u222b\u2080\u2074 (\u221ax \u2212 x\u00b2/4) dx. The antiderivative is (2/3)x^(3/2) \u2212 x\u00b3/12 evaluated from 0 to 4, giving (2/3)(8) \u2212 (64/12) = 16/3 \u2212 16/3 =  wait: (2/3)(4^(3/2)) \u2212 (4\u00b3)/12 = (2/3)(8) \u2212 64/12 = 16/3 \u2212 16/3 = 0? Let me recheck: \u222b\u2080\u2074 \u221ax dx = [2/3 x^(3/2)]\u2080\u2074 = 2/3 \u00b7 8 = 16/3; \u222b\u2080\u2074 x\u00b2/4 dx = [x\u00b3/12]\u2080\u2074 = 64/12 = 16/3. Area = 16/3 \u2212 16/3 = 0 That's degenerate. Correction: use g(x) = x\u00b2/4, then at x=1, f(1)=1, g(1)=1/4, so f > g. Area = 16/3 \u2212 16/3. Hmm both equal 16/3. Let me recompute \u222b\u2080\u2074 x\u00b2/4 dx = (1/4)(64/3) = 16/3. So area = 0 is wrong. Both integrals equal 16/3 so area = 0. Use g(x) = x\u00b2/2 instead: \u222b\u2080\u2074 x\u00b2/2 dx = (1/2)(64/3) = 32/3 \u2260 16/3. Switch to g(x) = x^2/4 but intersection at x=0 and x=4 since (\u221ax)=x\u00b2/4 \u2192 x=x\u2074/16 \u2192 16x=x\u2074 \u2192 x\u00b3=16 only at x=0 and Actually \u221ax = x\u00b2/4: square both sides x = x\u2074/16, so x\u2074 \u2212 16x = 0, x(x\u00b3\u221216)=0, x=0 or x=16^(1/3)=2\u221b2 \u2248 2.52. So the region is on [0, 2\u221b2]. Area = \u222b\u2080^(2\u221b2) (\u221ax \u2212 x\u00b2/4) dx = [2/3 x^(3/2) \u2212 x\u00b3/12]\u2080^(2\u221b2). At x=2\u221b2=2\u00b72^(1/3)=2^(4/3): x^(3/2)=(2^(4/3))^(3/2)=2^2=4; x\u00b3=(2^(4/3))^3=2^4=16. So Area = 2/3\u00b74 \u2212 16/12 = 8/3 \u2212 4/3 = 4/3. Full credit for area = 4/3."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the disc method, calculate the volume of the solid generated when the region R (the region enclosed by f(x) = \u221ax and g(x) = x\u00b2/4 on [0, 2\u221b2]) is revolved about the x-axis. Note: the two curves intersect at x = 0 and x = 2^(4/3).",
        "rubric": "Earns 1 point for correctly applying the washer method (note: since two curves, this is actually a washer, but if the question says disc about x-axis for the region between two curves this is the washer method; award credit for correct setup). Volume = \u03c0 \u222b\u2080^(2^(4/3)) [(\u221ax)\u00b2 \u2212 (x\u00b2/4)\u00b2] dx = \u03c0 \u222b\u2080^(2^(4/3)) [x \u2212 x\u2074/16] dx = \u03c0 [x\u00b2/2 \u2212 x\u2075/80] from 0 to 2^(4/3). At x=2^(4/3): x\u00b2=2^(8/3), x\u2075=2^(20/3). V = \u03c0[2^(8/3)/2 \u2212 2^(20/3)/80] = \u03c0[2^(5/3) \u2212 2^(20/3)/80]. Full credit for correct integral setup and evaluation yielding V = \u03c0(2^(5/3) \u2212 2^(20/3)/80)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using the shell method, calculate the volume of the solid generated when region R is revolved about the y-axis. Use the region bounded by f(x) = \u221ax and g(x) = x\u00b2/4 on [0, 2^(4/3)].",
        "rubric": "Earns 1 point for correctly setting up the shell method integral: V = 2\u03c0 \u222b\u2080^(2^(4/3)) x\u00b7(f(x) \u2212 g(x)) dx = 2\u03c0 \u222b\u2080^(2^(4/3)) x(\u221ax \u2212 x\u00b2/4) dx = 2\u03c0 \u222b\u2080^(2^(4/3)) (x^(3/2) \u2212 x\u00b3/4) dx = 2\u03c0 [2/5 x^(5/2) \u2212 x\u2074/16] from 0 to 2^(4/3). At x=2^(4/3): x^(5/2) = (2^(4/3))^(5/2) = 2^(10/3); x\u2074 = 2^(16/3). V = 2\u03c0[2/5 \u00b7 2^(10/3) \u2212 2^(16/3)/16] = 2\u03c0[2^(13/3)/5 \u2212 2^(12/3)/1\u00b7(1/16)] = 2\u03c0[2^(13/3)/5 \u2212 2^(4)/16\u00b72^(4/3)/1]. Full credit for correct shell method integral setup V = 2\u03c0[2\u00b72^(10/3)/5 \u2212 2^(16/3)/16] with correct evaluation."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Calculate the arc length of the curve f(x) = \u221ax from x = 0 to x = 4.",
        "rubric": "Earns 1 point for correctly applying the arc length formula L = \u222b\u2080\u2074 \u221a(1 + [f'(x)]\u00b2) dx. Since f'(x) = 1/(2\u221ax), [f'(x)]\u00b2 = 1/(4x). So L = \u222b\u2080\u2074 \u221a(1 + 1/(4x)) dx = \u222b\u2080\u2074 \u221a((4x+1)/(4x)) dx. Using substitution u = 4x+1, du=4dx: L = \u222b\u2081^(17) \u221a(u/(u\u22121)) \u00b7 (1/4) du or equivalent. The exact value is (1/4)[\u221a(u(u\u22121)) + ln|\u221au + \u221a(u\u22121)|]\u2081^17 evaluated, giving L = (1/8)[\u221a(17\u00b716) + ln(\u221a17+4) \u2212 0 \u2212 ln(1)] = (1/8)[4\u221a17\u00b7 Full credit for correct arc length integral setup L = \u222b\u2080\u2074 \u221a(1 + 1/(4x)) dx and correct evaluation \u2248 3.320 or exact form (17\u221a17 \u2212 1)/12."
      },
      {
        "label": "e",
        "command": "Calculate",
        "question": "A particle moves along the x-axis with velocity v(t) = t\u00b7e^(\u2212t\u00b2/2) for t \u2265 0 and initial position x(0) = 1. Calculate the position of the particle at time t = 2, and determine the total distance traveled by the particle on [0, 2].",
        "rubric": "Earns 1 point for correctly finding position x(2) = x(0) + \u222b\u2080\u00b2 v(t) dt = 1 + \u222b\u2080\u00b2 t\u00b7e^(\u2212t\u00b2/2) dt. Using substitution u = \u2212t\u00b2/2, du = \u2212t dt: \u222b t\u00b7e^(\u2212t\u00b2/2) dt = \u2212e^(\u2212t\u00b2/2) + C. So \u222b\u2080\u00b2 t\u00b7e^(\u2212t\u00b2/2) dt = [\u2212e^(\u2212t\u00b2/2)]\u2080\u00b2 = \u2212e^(\u22122) + e^0 = 1 \u2212 e^(\u22122). Thus x(2) = 1 + 1 \u2212 e^(\u22122) = 2 \u2212 e^(\u22122) \u2248 1.865. Since v(t) = t\u00b7e^(\u2212t\u00b2/2) \u2265 0 for all t \u2208 [0,2] (both t \u2265 0 and exponential > 0), total distance = displacement = 1 \u2212 e^(\u22122) \u2248 0.865. Full credit for x(2) = 2 \u2212 e^(\u22122) and total distance = 1 \u2212 e^(\u22122) with correct u-substitution."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly sets up and evaluates the area integral \u222b\u2080^(2^(4/3)) (\u221ax \u2212 x\u00b2/4) dx, finding the intersection at x = 2^(4/3) = 2\u221b2 and computing area = 4/3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "area between curves",
          "\u222b(\u221ax \u2212 x\u00b2/4) dx",
          "intersection point",
          "x = 2^(4/3)",
          "antiderivative 2/3 x^(3/2)",
          "x\u00b3/12",
          "area equals 4/3",
          "definite integral",
          "upper curve minus lower curve",
          "\u221ax minus x\u00b2/4"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the washer/disc method: V = \u03c0 \u222b\u2080^(2^(4/3)) [(\u221ax)\u00b2 \u2212 (x\u00b2/4)\u00b2] dx = \u03c0 \u222b [x \u2212 x\u2074/16] dx, evaluating to \u03c0[2^(5/3) \u2212 2^(20/3)/80].",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "disc method",
          "washer method",
          "revolved about x-axis",
          "\u03c0 \u222b(R\u00b2 \u2212 r\u00b2) dx",
          "outer radius \u221ax",
          "inner radius x\u00b2/4",
          "\u03c0 \u222b(x \u2212 x\u2074/16) dx",
          "x\u00b2/2 \u2212 x\u2075/80",
          "volume of revolution",
          "\u03c0 times integral"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies the shell method: V = 2\u03c0 \u222b\u2080^(2^(4/3)) x(\u221ax \u2212 x\u00b2/4) dx = 2\u03c0 \u222b (x^(3/2) \u2212 x\u00b3/4) dx, evaluating to 2\u03c0[2^(13/3)/5 \u2212 2^(16/3)/16].",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "shell method",
          "revolved about y-axis",
          "2\u03c0 \u222b x\u00b7(f(x)\u2212g(x)) dx",
          "cylindrical shells",
          "radius times height",
          "2\u03c0 \u222b(x^(3/2) \u2212 x\u00b3/4) dx",
          "2/5 x^(5/2)",
          "x\u2074/16",
          "volume by shells",
          "shell radius x shell height"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies the arc length formula L = \u222b\u2080\u2074 \u221a(1 + 1/(4x)) dx with f'(x) = 1/(2\u221ax), performing correct substitution and evaluating to (17\u221a17 \u2212 1)/12 \u2248 3.320.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "arc length formula",
          "\u222b\u221a(1 + [f'(x)]\u00b2) dx",
          "f'(x) = 1/(2\u221ax)",
          "[f'(x)]\u00b2 = 1/(4x)",
          "\u221a(1 + 1/(4x))",
          "u-substitution u = 4x+1",
          "(17\u221a17 \u2212 1)/12",
          "arc length integral",
          "length of curve",
          "antiderivative arc length"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Correctly finds x(2) = 2 \u2212 e^(\u22122) using \u222b\u2080\u00b2 t\u00b7e^(\u2212t\u00b2/2) dt = 1 \u2212 e^(\u22122) via substitution u = \u2212t\u00b2/2, and identifies total distance = 1 \u2212 e^(\u22122) since v(t) \u2265 0 on [0,2].",
        "partLabel": "e",
        "skill": "calculate",
        "keywords": [
          "position x(2)",
          "x(0) + \u222bv(t) dt",
          "u-substitution u = \u2212t\u00b2/2",
          "antiderivative \u2212e^(\u2212t\u00b2/2)",
          "1 \u2212 e^(\u22122)",
          "x(2) = 2 \u2212 e^(\u22122)",
          "total distance traveled",
          "velocity nonneg\u00adative",
          "displacement equals distance",
          "integral of velocity"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u9_frq046",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Parametric Curve: Slope and Concavity",
    "units": [
      9
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A particle moves along a curve defined by the parametric equations x(t) = t\u00b2 + 1 and y(t) = t\u00b3 \u2212 3t, where t is a real number.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find dy/dx in terms of t.",
        "rubric": "Earns 1 point for correctly computing dy/dx = (dy/dt)/(dx/dt) = (3t\u00b2 \u2212 3)/(2t)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find the value of dy/dx at t = 2.",
        "rubric": "Earns 1 point for substituting t = 2 into dy/dx and obtaining dy/dx = (3(4) \u2212 3)/(2\u00b72) = 9/4."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find d\u00b2y/dx\u00b2 in terms of t.",
        "rubric": "Earns 1 point for correctly computing d\u00b2y/dx\u00b2 = (d/dt[dy/dx])/(dx/dt) = [(6t\u00b72t \u2212 (3t\u00b2\u22123)\u00b72)/(4t\u00b2)] / (2t) = (6t\u00b2 + 3)/(4t\u00b3)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes dy/dx for parametric equations using (dy/dt)/(dx/dt) = (3t\u00b2 \u2212 3)/(2t).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dy/dx",
          "dy/dt",
          "dx/dt",
          "parametric derivative",
          "(3t\u00b2 \u2212 3)/(2t)",
          "quotient of derivatives",
          "parametric equations",
          "chain rule parametric"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Substitutes t = 2 into dy/dx to obtain 9/4.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "t = 2",
          "dy/dx at t=2",
          "9/4",
          "slope at parameter value",
          "substitution",
          "parametric slope",
          "(12\u22123)/4",
          "2.25"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly computes d\u00b2y/dx\u00b2 using d/dt[dy/dx] divided by dx/dt, yielding (6t\u00b2 + 3)/(4t\u00b3).",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "d\u00b2y/dx\u00b2",
          "second derivative parametric",
          "d/dt of dy/dx",
          "divided by dx/dt",
          "(6t\u00b2 + 3)/(4t\u00b3)",
          "second parametric derivative",
          "concavity parametric",
          "d(dy/dx)/dt over dx/dt"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u9_frq049",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Parametric Curve: Derivatives, Concavity, and Arc Length",
    "units": [
      9
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A particle moves in the xy-plane so that its position at time t is given by the parametric equations x(t) = t\u00b2 \u2212 2t and y(t) = t\u00b3 \u2212 3t, for \u22122 \u2264 t \u2264 2. Answer all five parts using these equations.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find the coordinates of the particle at time t = 1. Then find the slope of the tangent line to the parametric curve at t = 1 by computing dy/dx at t = 1.",
        "rubric": "Earns 1 point for correctly computing x(1) = \u22121, y(1) = \u22122 AND correctly applying dy/dx = (dy/dt)/(dx/dt) to obtain dy/dt = 3t\u00b2\u22123, dx/dt = 2t\u22122, and evaluating dy/dx at t = 1 to get the slope (noting the indeterminate form and applying L'H\u00f4pital's or limit approach, or recognizing the limit equals 3 via factoring: dy/dx \u2192 (3(t\u00b2\u22121))/(2(t\u22121)) = 3(t+1)/2 \u2192 3 as t\u21921, so slope = 3)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find all values of t in the interval \u22122 \u2264 t \u2264 2 at which the curve has a horizontal tangent line and all values at which it has a vertical tangent line. Justify your answers.",
        "rubric": "Earns 1 point for setting dy/dt = 3t\u00b2 \u2212 3 = 0 to find t = \u00b11 (horizontal tangent candidates), checking dx/dt = 2t\u22122 at those values: dx/dt \u2260 0 at t = \u22121 confirming a horizontal tangent there, while at t = 1 both dy/dt = 0 and dx/dt = 0 so t = 1 is not a horizontal tangent; AND setting dx/dt = 2t \u2212 2 = 0 to find t = 1 as the only vertical tangent candidate, but since dy/dt = 0 simultaneously at t = 1, concluding there is no vertical tangent on the interval."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find d\u00b2y/dx\u00b2 for the parametric curve at t = \u22121. Determine whether the curve is concave up or concave down at that point, and justify your conclusion.",
        "rubric": "Earns 1 point for correctly applying the second derivative formula d\u00b2y/dx\u00b2 = (d/dt[dy/dx])/(dx/dt), computing dy/dx = (3t\u00b2\u22123)/(2t\u22122) = 3(t+1)/2 for t \u2260 1, then d/dt[dy/dx] = 3/2, dividing by dx/dt = 2t\u22122 = \u22124 at t = \u22121 to get d\u00b2y/dx\u00b2 = (3/2)/(\u22124) = \u22123/8, and concluding the curve is concave down because d\u00b2y/dx\u00b2 < 0."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Write, but do not evaluate, a definite integral expression for the arc length of the parametric curve from t = 0 to t = 2.",
        "rubric": "Earns 1 point for writing the correct arc length integral in parametric form: L = \u222b\u2080\u00b2 \u221a((dx/dt)\u00b2 + (dy/dt)\u00b2) dt = \u222b\u2080\u00b2 \u221a((2t\u22122)\u00b2 + (3t\u00b2\u22123)\u00b2) dt, with the correct integrand fully expanded or in factored form, correct limits of integration from 0 to 2, and correct arc length parametric formula structure."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "At time t = 0, is the particle moving to the left or to the right, and is it moving upward or downward? Justify your answer using dx/dt and dy/dt.",
        "rubric": "Earns 1 point for computing dx/dt = 2(0) \u2212 2 = \u22122 < 0 and correctly concluding the particle is moving to the left, AND computing dy/dt = 3(0)\u00b2 \u2212 3 = \u22123 < 0 and correctly concluding the particle is moving downward, with explicit reference to the signs of dx/dt and dy/dt as justification for direction of motion."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes dy/dx = (dy/dt)/(dx/dt) at t = 1 using the parametric derivative formula, handles the 0/0 indeterminate form by factoring, and obtains slope = 3 at the point (\u22121, \u22122).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dy/dx",
          "dy/dt",
          "dx/dt",
          "parametric derivative",
          "slope of tangent line",
          "tangent line parametric",
          "0/0 indeterminate form",
          "factoring to resolve indeterminate",
          "slope equals 3",
          "parametric equations",
          "limit as t approaches 1",
          "3(t+1)/2"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Sets dy/dt = 0 to find horizontal tangent candidates t = \u00b11 and sets dx/dt = 0 to find vertical tangent candidate t = 1, with correct justification regarding simultaneous zeros and conclusion about tangent types.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "horizontal tangent",
          "dy/dt equals zero",
          "vertical tangent",
          "dx/dt equals zero",
          "simultaneous zero",
          "3t squared minus 3",
          "2t minus 2",
          "t equals 1",
          "t equals negative 1",
          "no vertical tangent",
          "both derivatives zero",
          "horizontal tangent at t equals negative 1"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Applies d\u00b2y/dx\u00b2 = (d/dt[dy/dx])/(dx/dt), simplifies dy/dx to 3(t+1)/2, differentiates to get 3/2, divides by dx/dt evaluated at t = \u22121 to obtain \u22123/8, and concludes concave down.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "d\u00b2y/dx\u00b2",
          "second derivative parametric",
          "d/dt of dy/dx divided by dx/dt",
          "concave down",
          "negative second derivative",
          "second derivative equals negative 3/8",
          "concavity parametric curve",
          "second parametric derivative formula",
          "dy/dx simplified to 3(t+1)/2",
          "dx/dt equals negative 4 at t equals negative 1",
          "d/dt of dy/dx equals 3/2"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Writes the correct arc length integral using the parametric arc length formula with integrand \u221a((dx/dt)\u00b2 + (dy/dt)\u00b2) and limits from 0 to 2.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "arc length parametric",
          "integral from 0 to 2",
          "square root of sum of squared derivatives",
          "\u221a((2t\u22122)\u00b2 + (3t\u00b2\u22123)\u00b2)",
          "arc length formula",
          "parametric arc length integral",
          "definite integral",
          "limits of integration 0 to 2",
          "do not evaluate",
          "integrand in terms of t",
          "dx/dt squared plus dy/dt squared"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Evaluates dx/dt = \u22122 < 0 at t = 0 to conclude leftward motion and dy/dt = \u22123 < 0 at t = 0 to conclude downward motion, with explicit sign-based justification.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "dx/dt negative",
          "moving left",
          "dy/dt negative",
          "moving downward",
          "direction of motion",
          "dx/dt equals negative 2",
          "dy/dt equals negative 3",
          "sign of derivative indicates direction",
          "motion in a plane",
          "velocity components",
          "horizontal velocity negative",
          "vertical velocity negative"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u9_frq050",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Parametric Curve Analysis: Derivatives, Concavity, and Arc Length",
    "units": [
      9
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "A particle moves in the xy-plane so that its position at time t is given by the parametric equations x(t) = t\u00b3 - 3t and y(t) = t\u00b2 - 2t + 1, for -2 \u2264 t \u2264 3. Answer all five parts based on this curve.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Find dy/dx in terms of t. Then find the slope of the tangent line to the parametric curve at t = 2.",
        "rubric": "Earns 1 point for correctly computing dy/dx = (dy/dt)/(dx/dt) = (2t - 2)/(3t\u00b2 - 3) and evaluating at t = 2 to obtain dy/dx = 2/9."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Find d\u00b2y/dx\u00b2 in terms of t. Determine whether the curve is concave up or concave down at t = 2, and justify your answer.",
        "rubric": "Earns 1 point for correctly computing d\u00b2y/dx\u00b2 using the formula d/dt(dy/dx) divided by dx/dt, obtaining the correct second derivative expression and evaluating it at t = 2 to show d\u00b2y/dx\u00b2 is negative, concluding the curve is concave down at t = 2."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Find all values of t on -2 \u2264 t \u2264 3 at which the curve has a horizontal tangent line. Identify any values of t at which the tangent line is vertical and explain why those values are excluded from consideration for horizontal tangency.",
        "rubric": "Earns 1 point for setting dy/dt = 2t - 2 = 0 to find t = 1, verifying dx/dt \u2260 0 at t = 1 (so it is a true horizontal tangent), and identifying t = 1 and t = -1 as vertical tangent candidates where dx/dt = 3t\u00b2 - 3 = 0, explaining that vertical tangents occur when dx/dt = 0 and dy/dt \u2260 0."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Write, but do not evaluate, an integral expression for the arc length of the parametric curve from t = 0 to t = 2.",
        "rubric": "Earns 1 point for writing the correct arc length integral using the parametric arc length formula: the integral from 0 to 2 of sqrt((dx/dt)\u00b2 + (dy/dt)\u00b2) dt, with correct substitution of dx/dt = 3t\u00b2 - 3 and dy/dt = 2t - 2, yielding the integral from 0 to 2 of sqrt((3t\u00b2 - 3)\u00b2 + (2t - 2)\u00b2) dt."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "At t = 1, the particle is momentarily at rest in the x-direction. Using the values of dx/dt and dy/dt at t = 1, determine the speed of the particle at t = 1 and describe the direction of motion of the particle at that instant.",
        "rubric": "Earns 1 point for computing dx/dt = 0 and dy/dt = 0 at t = 1, concluding the speed equals sqrt((dx/dt)\u00b2 + (dy/dt)\u00b2) = 0, and correctly interpreting that the particle is instantaneously at rest (speed equals zero) at t = 1, with a justification referencing both component velocities being zero simultaneously."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes dy/dx = (dy/dt)/(dx/dt) = (2t-2)/(3t\u00b2-3) and evaluates at t=2 to obtain slope 2/9.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "dy/dx",
          "dy/dt divided by dx/dt",
          "(2t-2)/(3t\u00b2-3)",
          "slope of tangent line",
          "parametric derivative",
          "t equals 2",
          "2/9",
          "tangent line slope parametric"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly computes d\u00b2y/dx\u00b2 using d/dt(dy/dx) divided by dx/dt, evaluates at t=2, and concludes concave down because d\u00b2y/dx\u00b2 < 0.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "d\u00b2y/dx\u00b2",
          "second derivative parametric",
          "d/dt(dy/dx) divided by dx/dt",
          "concave down",
          "negative second derivative",
          "concavity parametric curve",
          "d\u00b2y/dx\u00b2 less than zero",
          "parametric second derivative formula"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Sets dy/dt = 0 to find t=1 as horizontal tangent, verifies dx/dt \u2260 0 there, and identifies t = \u00b11 as vertical tangent locations where dx/dt = 0.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "horizontal tangent",
          "dy/dt equals zero",
          "t equals 1",
          "vertical tangent",
          "dx/dt equals zero",
          "t equals negative 1",
          "tangent line parametric",
          "horizontal tangent line condition"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Writes the correct parametric arc length integral from 0 to 2 of sqrt((3t\u00b2-3)\u00b2+(2t-2)\u00b2) dt.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "arc length parametric",
          "integral from 0 to 2",
          "sqrt((dx/dt)\u00b2 + (dy/dt)\u00b2)",
          "parametric arc length formula",
          "sqrt((3t\u00b2-3)\u00b2+(2t-2)\u00b2)",
          "arc length integral",
          "square root of sum of squares",
          "arc length setup"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Computes dx/dt = 0 and dy/dt = 0 at t=1, finds speed = 0, and concludes the particle is instantaneously at rest.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "speed equals zero",
          "dx/dt equals zero",
          "dy/dt equals zero",
          "instantaneously at rest",
          "speed formula sqrt((dx/dt)\u00b2+(dy/dt)\u00b2)",
          "both component velocities zero",
          "particle at rest",
          "speed parametric motion"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u10_frq051",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Geometric Series: Sum and Convergence",
    "units": [
      10
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the geometric series: \u2211(n=0 to \u221e) of (3/4)^n \u00b7 (1/2), that is the series whose nth term is (1/2)(3/4)^n.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify the first term a and the common ratio r of the geometric series \u2211(n=0 to \u221e) (1/2)(3/4)^n.",
        "rubric": "Earns 1 point for correctly identifying a = 1/2 and r = 3/4."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Does the geometric series converge or diverge? Justify your answer using the geometric series convergence criterion.",
        "rubric": "Earns 1 point for stating |r| = 3/4 < 1 and concluding the series converges."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the exact sum of the geometric series \u2211(n=0 to \u221e) (1/2)(3/4)^n.",
        "rubric": "Earns 1 point for correctly applying S = a/(1 - r) = (1/2)/(1 - 3/4) = (1/2)/(1/4) = 2."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies the first term a = 1/2 and common ratio r = 3/4 of the geometric series.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "first term",
          "a = 1/2",
          "common ratio",
          "r = 3/4",
          "geometric series",
          "initial term",
          "ratio between consecutive terms",
          "a equals one half",
          "r equals three fourths",
          "n equals zero",
          "constant multiplier"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student states that |r| < 1 (specifically |3/4| < 1) and correctly concludes the series converges by the geometric series test.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "|r| < 1",
          "absolute value of r",
          "3/4 < 1",
          "geometric series converges",
          "convergent",
          "convergence criterion",
          "geometric series test",
          "r less than 1 in absolute value",
          "converges because",
          "necessary and sufficient condition",
          "r strictly between negative one and one"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly applies the geometric series sum formula S = a/(1 - r) and obtains a sum of 2.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "S = a/(1 - r)",
          "sum formula",
          "1 minus r",
          "(1/2)/(1/4)",
          "sum equals 2",
          "exact sum",
          "S = 2",
          "geometric series sum formula",
          "a over 1 minus r",
          "infinite geometric series",
          "closed form sum"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u10_frq052",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Interval and Radius of Convergence for a Power Series",
    "units": [
      10
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "Consider the power series \u2211(n=1 to \u221e) [(-1)^n * (x - 3)^n] / (n * 4^n). Use the ratio test to determine the radius of convergence, then investigate the endpoints to determine the full interval of convergence.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Apply the Ratio Test to the power series \u2211(n=1 to \u221e) [(-1)^n * (x - 3)^n] / (n * 4^n) to determine the radius of convergence R.",
        "rubric": "Student sets up lim(n\u2192\u221e) |a_(n+1)/a_n|, simplifies to |x - 3|/4 < 1, and correctly concludes R = 4."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Determine whether the series converges or diverges at the endpoint x = 7. Justify your answer by identifying the series at that endpoint and applying an appropriate convergence test.",
        "rubric": "Student substitutes x = 7, obtains \u2211 (-1)^n / n (alternating harmonic series), correctly applies the Alternating Series Test (terms decrease to 0), and concludes the series converges at x = 7."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Determine whether the series converges or diverges at the endpoint x = -1. Justify your answer and state the full interval of convergence.",
        "rubric": "Student substitutes x = -1, obtains \u2211 1/n (harmonic series, p-series with p = 1), correctly concludes it diverges. States full interval of convergence as -1 < x \u2264 7."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the Ratio Test by computing lim |a_(n+1)/a_n|, simplifies the limit to |x - 3|/4, sets it less than 1, and states radius of convergence R = 4.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "ratio test",
          "lim |a_(n+1)/a_n|",
          "|x - 3|/4",
          "radius of convergence",
          "R = 4",
          "converges absolutely",
          "limit of ratio",
          "absolute value",
          "n+1 term over n term",
          "simplify factorial cancel",
          "|x - 3| < 4"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Substitutes x = 7 to obtain the alternating harmonic series \u2211 (-1)^n / n, applies the Alternating Series Test noting terms are decreasing and approach zero, and correctly concludes convergence at x = 7.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "x = 7",
          "alternating harmonic series",
          "(-1)^n / n",
          "alternating series test",
          "terms decrease to zero",
          "converges",
          "endpoint check",
          "b_n = 1/n decreasing",
          "Leibniz criterion",
          "lim b_n = 0",
          "conditionally convergent"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Substitutes x = -1 to obtain the harmonic series \u2211 1/n, identifies it as a divergent p-series with p = 1, concludes divergence at x = -1, and states the interval of convergence as -1 < x \u2264 7.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "x = -1",
          "harmonic series",
          "p-series",
          "p = 1",
          "diverges",
          "interval of convergence",
          "-1 < x \u2264 7",
          "open at -1 closed at 7",
          "(-1 - 3)^n / (n * 4^n)",
          "(-4)^n / (n * 4^n)",
          "p \u2264 1 diverges"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u10_frq053",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Maclaurin Series and Lagrange Error Bound",
    "units": [
      10
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "The function f(x) = cos(x) has the Maclaurin series cos(x) = \u2211(n=0 to \u221e) [(-1)^n * x^(2n)] / (2n)! = 1 - x\u00b2/2! + x\u2074/4! - x\u2076/6! + \u22ef, which converges for all real x. Use this series and the Lagrange Error Bound to answer the following questions about approximating cos(0.2).",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Write the third-degree (degree 3) Maclaurin polynomial P_3(x) for f(x) = cos(x) and use it to approximate cos(0.2). Give an exact fractional or simplified decimal answer.",
        "rubric": "Student writes P_3(x) = 1 - x\u00b2/2 (noting the degree-3 polynomial equals the degree-2 polynomial since the x\u00b3 term has coefficient 0), then correctly computes cos(0.2) \u2248 1 - (0.04)/2 = 1 - 0.02 = 0.98."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Use the Lagrange Error Bound to find an upper bound for the error |cos(0.2) - P_3(0.2)|. Clearly identify the first omitted term and the value of M used in the bound.",
        "rubric": "Student identifies the first omitted term as x\u2074/4! (the degree-4 term), uses |error| \u2264 M|x|^(n+1)/(n+1)! with n = 3, M = 1 (since |f^(4)(x)| = |cos(x)| \u2264 1), computes bound = (0.2)^4 / 4! = 0.0016/24 \u2248 0.0000667."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain why the Maclaurin series for cos(x) is also an alternating series for x = 0.2 > 0, and how this provides an alternative (and equivalent) bound on the error using the Alternating Series Estimation Theorem.",
        "rubric": "Student explains that for x = 0.2 the terms (-1)^n (0.2)^(2n)/(2n)! alternate in sign, are decreasing in absolute value, and approach zero, so by the Alternating Series Estimation Theorem the error is bounded by the absolute value of the first omitted term, which is (0.2)^4/4! = 1/15000 \u2248 0.0000667, matching the Lagrange bound."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly writes the third-degree Maclaurin polynomial P_3(x) = 1 - x\u00b2/2 for cos(x) and evaluates it at x = 0.2 to obtain 0.98.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Maclaurin polynomial",
          "P_3(x)",
          "1 - x^2/2",
          "third-degree polynomial",
          "cos(0.2) \u2248 0.98",
          "x^2/2!",
          "no odd-degree terms",
          "evaluate at x = 0.2",
          "cosine series even terms only",
          "coefficient of x^3 is zero",
          "1 - 0.02"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly identifies the first omitted term as x\u2074/4!, uses M = 1 as the maximum of the fourth derivative of cos(x) on [0, 0.2], and computes the Lagrange Error Bound as (0.2)^4/4! \u2248 0.0000667.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Lagrange error bound",
          "first omitted term",
          "x^4/4!",
          "M = 1",
          "fourth derivative of cosine",
          "|f^(4)(x)| \u2264 1",
          "(0.2)^4 / 24",
          "upper bound on error",
          "0.0000667",
          "1/15000",
          "maximum derivative on interval"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Explains that the series is alternating for x = 0.2, terms decrease in absolute value to zero, and applies the Alternating Series Estimation Theorem to conclude the error is at most the first omitted term (0.2)^4/4!, connecting it to the Lagrange result.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "alternating series",
          "alternating series estimation theorem",
          "terms decrease in absolute value",
          "terms approach zero",
          "first omitted term",
          "(0.2)^4/4!",
          "error bounded by next term",
          "signs alternate positive negative",
          "(-1)^n factor",
          "monotonically decreasing terms",
          "equivalent to Lagrange bound"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u10_frq054",
    "subject": "apcalcbc",
    "frqType": "short",
    "title": "Lagrange Error Bound for a Maclaurin Polynomial Approximation",
    "units": [
      10
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "The function f is defined by f(x) = e^(\u2212x\u00b2). It is known that f^(n)(x) denotes the nth derivative of f, and that the Maclaurin series for f(x) is given by the alternating series:\n\nf(x) = 1 \u2212 x\u00b2 + x\u2074/2! \u2212 x\u2076/3! + \u22ef = \u03a3 (n=0 to \u221e) (\u22121)\u207f \u00b7 x^(2n) / n!\n\nLet P\u2084(x) = 1 \u2212 x\u00b2 + x\u2074/2 be the fourth-degree Maclaurin polynomial for f(x).",
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Use the Maclaurin series for f(x) = e^(\u2212x\u00b2) to write the first four nonzero terms and the general term of the Maclaurin series for g(x) = x \u00b7 e^(\u2212x\u00b2). Then calculate the exact value of the sum \u03a3 (n=0 to \u221e) (\u22121)\u207f / (n! \u00b7 3\u207f) by identifying it as g(x) or f(x) evaluated at a specific value of x.",
        "rubric": "Earns the point by correctly writing g(x) = x \u2212 x\u00b3 + x\u2075/2! \u2212 x\u2077/3! + \u22ef with general term (\u22121)\u207f x^(2n+1)/n!, and then recognizing that \u03a3 (\u22121)\u207f/(n! \u00b7 3\u207f) = f(1/\u221a3) = e^(\u22121/3), or equivalently evaluating at x = 1/\u221a3 to obtain e^(\u22121/3)."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "The alternating series estimation theorem (alternating series error bound) can be used to bound the error |f(x) \u2212 P\u2084(x)| for values of x in [0, 1]. Using this theorem, find an upper bound for the error |f(0.5) \u2212 P\u2084(0.5)|. Show all work and justify why the alternating series error bound applies.",
        "rubric": "Earns the point by correctly verifying the alternating series conditions (terms decrease in absolute value and approach zero), identifying the first omitted term as \u2212x\u2076/3! evaluated at x = 0.5, and computing the bound as (0.5)\u2076/6 = 1/384 \u2248 0.002604, or an equivalent exact or decimal form."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Using the Lagrange error bound, determine whether P\u2084(x) approximates f(x) to within 0.01 for all x in [0, 0.5]. You may use the fact that |f^(5)(x)| \u2264 32 on [0, 0.5]. Show the Lagrange error bound calculation and state your conclusion with justification.",
        "rubric": "Earns the point by correctly applying the Lagrange error bound formula |R\u2084(x)| \u2264 M \u00b7 |x|\u2075 / 5!, substituting M = 32 and x = 0.5 to obtain 32 \u00b7 (0.5)\u2075 / 120 = 32 \u00b7 (1/32) / 120 = 1/120 \u2248 0.00833, concluding that since 1/120 < 0.01, P\u2084(x) does approximate f(x) to within 0.01 for all x in [0, 0.5]."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly derives the Maclaurin series for g(x) = x\u00b7e^(\u2212x\u00b2) by multiplying the known series term-by-term by x, writes the general term (\u22121)\u207f x^(2n+1)/n!, and evaluates the given numerical series by substituting x = 1/\u221a3 into f(x) = e^(\u2212x\u00b2) to obtain e^(\u22121/3).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Maclaurin series",
          "general term",
          "(\u22121)\u207f x^(2n+1)/n!",
          "multiply by x",
          "substitute x = 1/\u221a3",
          "e^(\u22121/3)",
          "sigma notation",
          "\u03a3 (\u22121)\u207f x^(2n)/n!",
          "series representation",
          "evaluate series at a point"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student verifies the alternating series test conditions (terms are decreasing in absolute value and the limit of terms is zero), identifies the first omitted term at x = 0.5 as (0.5)\u2076/3! = (0.5)\u2076/6, and correctly computes the alternating series error bound as 1/384 or approximately 0.0026.",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "alternating series estimation theorem",
          "alternating series error bound",
          "first omitted term",
          "decreasing terms",
          "terms approach zero",
          "(0.5)\u2076/6",
          "1/384",
          "0.0026",
          "absolute value of error",
          "|f(0.5) \u2212 P\u2084(0.5)|"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly applies the Lagrange error bound formula |R\u2099(x)| \u2264 M|x|^(n+1)/(n+1)!, uses M = 32, n = 4, x = 0.5, computes 32\u00b7(0.5)\u2075/5! = 1/120 \u2248 0.00833, and concludes that since 1/120 < 0.01 the approximation is accurate to within 0.01 on [0, 0.5].",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "Lagrange error bound",
          "remainder term",
          "|R\u2099(x)| \u2264 M|x|^(n+1)/(n+1)!",
          "fifth derivative bound",
          "M = 32",
          "32\u00b7(0.5)\u2075/120",
          "1/120",
          "0.00833",
          "less than 0.01",
          "approximation within 0.01"
        ]
      }
    ],
    "starterCode": null,
    "sampleSolution": null
  },
  {
    "id": "calcbc_u10_frq055",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Power Series: Interval of Convergence, Taylor Approximation, and Error Bound",
    "units": [
      10
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 5,
    "prompt": "Consider the power series centered at x = 0 given by f(x) = \u03a3 (n=1 to \u221e) [(-1)^n * x^(2n)] / (n * 4^n). This series defines a function f on its interval of convergence.\n\n(a) Use the Ratio Test to determine the radius of convergence of the power series.\n\n(b) Determine whether the power series converges or diverges at each endpoint of the interval found in part (a). Justify your answer at each endpoint using an appropriate convergence test, and state the interval of convergence.\n\n(c) The Maclaurin series for ln(1 + u) = \u03a3 (n=1 to \u221e) [(-1)^(n+1) * u^n] / n for |u| \u2264 1, u \u2260 -1. Use this known series to identify a closed-form expression for f(x).\n\n(d) Calculate the fourth-degree Taylor polynomial P_4(x) for f(x) centered at x = 0, writing out all nonzero terms explicitly.\n\n(e) Use the Alternating Series Error Bound to bound the error |f(1) - P_4(1)|. State whether the approximation P_4(1) is an overestimate or underestimate of f(1), and justify your answer.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Use the Ratio Test to determine the radius of convergence of the power series \u03a3 (n=1 to \u221e) [(-1)^n * x^(2n)] / (n * 4^n).",
        "rubric": "Student applies the Ratio Test by computing lim(n\u2192\u221e) |a_(n+1)/a_n|. The ratio simplifies to |x\u00b2/4|. Setting |x\u00b2/4| < 1 gives |x\u00b2| < 4, so |x| < 2. The radius of convergence is R = 2. Full credit requires showing the limit computation and concluding R = 2."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Determine whether the power series converges or diverges at each endpoint x = 2 and x = -2. State the interval of convergence.",
        "rubric": "At x = 2: x^(2n) = 4^n, so terms become (-1)^n / n, which is the alternating harmonic series. By the Alternating Series Test (terms decrease to 0), the series converges. At x = -2: x^(2n) = 4^n, same result - series converges by Alternating Series Test. Interval of convergence is [-2, 2]. Full credit requires correct convergence conclusion and valid test cited at both endpoints."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Using the known Maclaurin series for ln(1 + u), identify a closed-form expression for f(x). Show the substitution clearly.",
        "rubric": "Student rewrites f(x) = \u03a3 [(-1)^n * x^(2n)] / (n * 4^n) = \u03a3 [(-1)^n * (x\u00b2/4)^n] / n. Comparing with ln(1+u) = \u03a3 (-1)^(n+1) * u^n / n, note the sign difference: \u03a3 (-1)^n * u^n / n = -ln(1+u). Therefore f(x) = -ln(1 + x\u00b2/4). Full credit requires correct substitution u = x\u00b2/4, correct sign handling, and final closed form f(x) = -ln(1 + x\u00b2/4)."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "Write out the fourth-degree Taylor polynomial P_4(x) for f(x) centered at x = 0, including all nonzero terms explicitly.",
        "rubric": "From the series \u03a3 [(-1)^n * x^(2n)] / (n * 4^n), the first two nonzero terms (up to degree 4) are: n=1 gives (-1)^1 * x^2 / (1 * 4) = -x\u00b2/4; n=2 gives (-1)^2 * x^4 / (2 * 16) = x^4/32. Therefore P_4(x) = -x\u00b2/4 + x^4/32. Full credit requires both correct terms with correct signs and coefficients, and no extraneous terms."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "Use the Alternating Series Error Bound to bound the error |f(1) - P_4(1)|. State whether P_4(1) is an overestimate or underestimate of f(1).",
        "rubric": "Student evaluates: x=1 is in the interval of convergence. The next unused term (n=3) is (-1)^3 * 1^6 / (3 * 64) = -1/192. The Alternating Series Error Bound states |error| \u2264 |a_(n+1)| = 1/192. So |f(1) - P_4(1)| \u2264 1/192. Since the next term is negative (n=3 gives a negative term), P_4(1) is an overestimate of f(1). Full credit requires computing 1/192, stating the alternating series error bound, and correctly identifying overestimate with justification via sign of next term."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the Ratio Test, evaluates the limit as |x\u00b2/4|, and concludes the radius of convergence is R = 2.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Ratio Test",
          "lim |a_(n+1)/a_n|",
          "|x\u00b2/4|",
          "radius of convergence",
          "R = 2",
          "limit equals |x\u00b2/4| < 1",
          "ratio test limit",
          "converges absolutely",
          "|x| < 2",
          "|x\u00b2| < 4"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Tests both endpoints x = 2 and x = -2, correctly identifies the alternating harmonic series at each, applies the Alternating Series Test, and states the interval of convergence as [-2, 2].",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "Alternating Series Test",
          "alternating harmonic series",
          "(-1)^n / n",
          "converges at endpoints",
          "interval of convergence",
          "[-2, 2]",
          "terms decrease to zero",
          "limit of terms is 0",
          "x^(2n) = 4^n at endpoints",
          "conditionally convergent"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Substitutes u = x\u00b2/4 into the Maclaurin series for ln(1+u), handles the sign correctly, and obtains the closed form f(x) = -ln(1 + x\u00b2/4).",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "substitution u = x\u00b2/4",
          "Maclaurin series ln(1+u)",
          "closed form",
          "f(x) = -ln(1 + x\u00b2/4)",
          "sign adjustment",
          "(-1)^n versus (-1)^(n+1)",
          "-ln(1 + x\u00b2/4)",
          "known series substitution",
          "negative natural log",
          "rewrite (x\u00b2/4)^n"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly writes P_4(x) = -x\u00b2/4 + x^4/32 by extracting the n=1 and n=2 terms from the series with correct signs and coefficients.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "P_4(x)",
          "fourth-degree Taylor polynomial",
          "-x\u00b2/4",
          "x^4/32",
          "n=1 term",
          "n=2 term",
          "Taylor polynomial centered at 0",
          "Maclaurin polynomial",
          "coefficient -1/4",
          "coefficient 1/32"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Computes the error bound as 1/192 using the Alternating Series Error Bound (next term at n=3, x=1), and correctly identifies P_4(1) as an overestimate because the next term is negative.",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "Alternating Series Error Bound",
          "next term n=3",
          "1/192",
          "|f(1) - P_4(1)| \u2264 1/192",
          "overestimate",
          "next term is negative",
          "error bounded by first omitted term",
          "alternating series remainder",
          "(-1)^3 * 1/(3*64)",
          "first unused term"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "calcbc_u10_frq056",
    "subject": "apcalcbc",
    "frqType": "long",
    "title": "Power Series, Interval of Convergence, Taylor Series, and Lagrange Error Bound",
    "units": [
      10
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 5,
    "prompt": "Consider the function f(x) = ln(1 + 3x). It is known that the Maclaurin series for ln(1 + u) is given by the power series sum_{n=1}^{inf} (-1)^(n+1) * u^n / n = u - u^2/2 + u^3/3 - u^4/4 + , which converges for -1 < u <= 1. Use this to answer the following questions about f(x) = ln(1 + 3x) and related series.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Write the Maclaurin series for f(x) = ln(1 + 3x) in sigma notation and determine the radius of convergence R using the Ratio Test. Show all steps of the Ratio Test.",
        "rubric": "Student substitutes u = 3x into the known Maclaurin series to obtain sum_{n=1}^{inf} (-1)^(n+1) * (3x)^n / n = sum_{n=1}^{inf} (-1)^(n+1) * 3^n * x^n / n. Student correctly applies the Ratio Test: lim_{n->inf} |a_{n+1}/a_n| = lim_{n->inf} |3^(n+1)*x^(n+1)/(n+1)| / |3^n*x^n/n| = |3x| * lim_{n->inf} n/(n+1) = |3x| < 1. Radius of convergence R = 1/3."
      },
      {
        "label": "b",
        "command": "Justify",
        "question": "Determine the full interval of convergence of the Maclaurin series for f(x) = ln(1 + 3x) by testing both endpoints x = -1/3 and x = 1/3. Identify which convergence test(s) you use at each endpoint and state the interval of convergence.",
        "rubric": "At x = -1/3: series becomes sum_{n=1}^{inf} (-1)^(n+1)*(-1)^n/n = sum_{n=1}^{inf} (-1)^(2n+1)/n = -sum 1/n, the divergent harmonic series (p-series with p=1), so x = -1/3 is excluded. At x = 1/3: series becomes sum_{n=1}^{inf} (-1)^(n+1)/n, the alternating harmonic series, which converges by the Alternating Series Test (terms decrease to 0). Interval of convergence is -1/3 < x <= 1/3."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Use the Maclaurin series for f(x) = ln(1 + 3x) to write a series representation for the definite integral from 0 to 1/6 of ln(1 + 3x) dx. Then sum the first four nonzero terms of the resulting numerical series and express the result as a fraction.",
        "rubric": "Student integrates the Maclaurin series term by term: integral_0^{1/6} sum_{n=1}^{inf} (-1)^(n+1)*3^n*x^n/n dx = sum_{n=1}^{inf} (-1)^(n+1)*3^n*(1/6)^(n+1)/[n(n+1)] = sum_{n=1}^{inf} (-1)^(n+1)/(2^(n+1)*n*(n+1)). First four terms: n=1: 1/(2^2*1*2)=1/8; n=2: -1/(2^3*2*3)=-1/48; n=3: 1/(2^4*3*4)=1/192; n=4: -1/(2^5*4*5)=-1/640. Partial sum = 1/8 - 1/48 + 1/192 - 1/640. Common denominator 1920: 240/1920 - 40/1920 + 10/1920 - 3/1920 = 207/1920 = 69/640. Award credit for correct term-by-term integration setup and correct partial sum with accurate arithmetic."
      },
      {
        "label": "d",
        "command": "Calculate",
        "question": "The fifth-degree Taylor polynomial for f(x) = ln(1 + 3x) centered at x = 0 is P_5(x) = 3x - (9x^2)/2 + 9x^3 - (81x^4)/4 + (243x^5)/5. Use the Lagrange error bound to find an upper bound for the error |f(1/9) - P_5(1/9)|. Note that the sixth derivative of ln(1+3x) is f^(6)(x) = -3^6 * 5! / (1+3x)^6.",
        "rubric": "Student correctly identifies the Lagrange error bound formula: |error| <= M * |x - 0|^6 / 6! where M is a maximum of |f^(6)(x)| on [0, 1/9]. f^(6)(x) = -3^6 * 120 / (1+3x)^6; its absolute value is maximized at x=0 on [0,1/9], giving M = 3^6 * 120 = 729 * 120 = 87480. Error bound = 87480 * (1/9)^6 / 720 = 87480 / (531441 * 720) = 87480 / 382837320. Simplified: student may express as approximately 0.000228 or as an exact fraction. Award credit for correct identification of M = 87480, correct (1/9)^6/6! structure, and correct bound calculation."
      },
      {
        "label": "e",
        "command": "Justify",
        "question": "A student claims that the series sum_{n=1}^{inf} 3^n / (n * 4^n) converges and that its sum can be found using the Maclaurin series for f(x) = ln(1 + 3x) evaluated at a specific value of x. Identify the value of x, justify convergence using an appropriate test, and find the exact sum of the series.",
        "rubric": "Student rewrites the series as sum_{n=1}^{inf} (3/4)^n / n and recognizes this matches sum_{n=1}^{inf} 3^n*x^n/n evaluated at x = 1/4, giving sum_{n=1}^{inf} (-1)^(n+1)*3^n*x^n/n at x=1/4 only when signs are accounted for. More directly: the given series sum (3/4)^n/n = -ln(1 - 3/4) = -ln(1/4) = ln(4). Via the Maclaurin series for ln(1+3x): since all terms (-1)^(n+1)*(3*(1/4))^n/n at x=1/4 do not all have the same sign, the student should recognize sum_{n=1}^{inf}(3/4)^n/n = ln(1/(1-3/4)) = ln(4) from the known series -ln(1-t)=sum t^n/n. Alternatively, note x=1/4 is within the interval of convergence (-1/3, 1/3] since 1/4 < 1/3, and f(1/4) = ln(1+3/4) = ln(7/4), which does NOT equal ln(4). The correct identification: sum_{n=1}^{inf}(3/4)^n/n = -ln(1-3/4) = ln(4) from the series -ln(1-u)=sum u^n/n with u=3/4. Convergence justified by Ratio Test (limit = 3/4 < 1) or by noting x=1/4 is inside the radius of convergence of sum 3^n x^n/n. Exact sum = ln(4) = 2*ln(2). Award credit for rewriting as sum (3/4)^n/n, valid convergence justification, and exact sum ln(4)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly writes the Maclaurin series for ln(1+3x) in sigma notation by substituting u=3x and applies the Ratio Test to obtain radius of convergence R = 1/3.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "Maclaurin series",
          "sigma notation",
          "sum_{n=1}^{inf}",
          "(-1)^(n+1)*3^n*x^n/n",
          "substitution u=3x",
          "Ratio Test",
          "lim |a_{n+1}/a_n|",
          "radius of convergence",
          "R = 1/3",
          "|3x| < 1",
          "ratio test limit equals |3x|",
          "n/(n+1) approaches 1",
          "power series representation"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Tests both endpoints x = -1/3 and x = 1/3, correctly identifies divergence at x=-1/3 via harmonic series (p-series p=1) and convergence at x=1/3 via Alternating Series Test, and states the correct interval of convergence (-1/3, 1/3].",
        "partLabel": "b",
        "skill": "justify",
        "keywords": [
          "interval of convergence",
          "endpoint testing",
          "x = 1/3",
          "x = -1/3",
          "Alternating Series Test",
          "harmonic series diverges",
          "p-series p=1 diverges",
          "alternating harmonic series converges",
          "(-1/3, 1/3]",
          "terms decrease to zero",
          "open endpoint excluded",
          "closed endpoint included",
          "convergence at right endpoint"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly integrates the Maclaurin series term by term from 0 to 1/6 and computes the first four nonzero terms of the resulting numerical series, obtaining the partial sum 207/1920 = 69/640.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "term-by-term integration",
          "integrate power series",
          "sum_{n=1}^{inf}",
          "(-1)^(n+1)*3^n*(1/6)^(n+1)/[n(n+1)]",
          "1/(2^(n+1)*n*(n+1))",
          "first four nonzero terms",
          "1/8",
          "-1/48",
          "1/192",
          "-1/640",
          "69/640",
          "207/1920",
          "definite integral of power series",
          "antiderivative of series"
        ]
      },
      {
        "index": 3,
        "points": 1,
        "description": "Correctly applies the Lagrange error bound formula with the sixth derivative evaluated at x=0 to obtain an upper bound for |f(1/9) - P_5(1/9)|, using M = 87480 and the expression M*(1/9)^6/6!.",
        "partLabel": "d",
        "skill": "calculate",
        "keywords": [
          "Lagrange error bound",
          "Taylor remainder theorem",
          "sixth derivative f^(6)(x)",
          "M*(x-c)^(n+1)/(n+1)!",
          "M = 87480",
          "3^6 * 120",
          "(1/9)^6",
          "6! = 720",
          "upper bound on error",
          "maximum of |f^(6)| on interval",
          "maximized at x=0",
          "(1+3x)^6 in denominator",
          "remainder R_5"
        ]
      },
      {
        "index": 4,
        "points": 1,
        "description": "Rewrites the series as sum (3/4)^n/n, justifies convergence via Ratio Test or radius of convergence, and correctly computes the exact sum as ln(4) or 2*ln(2).",
        "partLabel": "e",
        "skill": "justify",
        "keywords": [
          "sum (3/4)^n / n",
          "rewrite as geometric-type power series",
          "-ln(1-t) series",
          "ln(4)",
          "2*ln(2)",
          "exact sum of series",
          "ratio test limit equals 3/4",
          "radius of convergence 1/4 < 1/3",
          "series -ln(1-u) = sum u^n/n",
          "u = 3/4",
          "convergent series justification",
          "closed-form sum via known series"
        ]
      }
    ],
    "sampleSolution": null
  }
];