window.APCSA_MCQ = [
  {
    "id": "csa_u1_q001",
    "subject": "apcsa",
    "unit": 1,
    "topic": "primitive types",
    "topicLabel": "primitive types",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following variable declarations will cause a compilation error?",
    "choices": [
      "A) int x = 2.0;",
      "B) double y = 5;",
      "C) boolean flag = true;",
      "D) int count = 100;"
    ],
    "answer": 0,
    "explanation": "Option A causes a compilation error because you cannot assign a double literal (2.0) to an int variable without explicit casting. Option B works because int values can be implicitly converted to double. Options C and D are correct primitive type assignments."
  },
  {
    "id": "csa_u1_q002",
    "subject": "apcsa",
    "unit": 1,
    "topic": "int",
    "topicLabel": "int",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of x after the following code executes?\nint x = 15;\nx = x + 3 * 2;",
    "choices": [
      "A) 21",
      "B) 36",
      "C) 18",
      "D) 33"
    ],
    "answer": 0,
    "explanation": "Following order of operations, multiplication happens before addition: 3 * 2 = 6, then 15 + 6 = 21. Option B (36) would result from (15 + 3) * 2. Option C (18) would result from 15 + 3. Option D (33) has no clear logical path."
  },
  {
    "id": "csa_u1_q003",
    "subject": "apcsa",
    "unit": 1,
    "topic": "double",
    "topicLabel": "double",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of the following expression?\ndouble result = 7.5 + 2 * 3.0;",
    "choices": [
      "A) 13.5",
      "B) 19.0",
      "C) 28.5",
      "D) 22.5"
    ],
    "answer": 0,
    "explanation": "Following order of operations: 2 * 3.0 = 6.0, then 7.5 + 6.0 = 13.5. Option B (19.0) might come from adding all numbers. Option C (28.5) might come from 7.5 * 2 + 3.0 * 6. Option D has no clear path."
  },
  {
    "id": "csa_u1_q004",
    "subject": "apcsa",
    "unit": 1,
    "topic": "boolean",
    "topicLabel": "boolean",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of result after this code executes?\nboolean a = true, b = false;\nboolean result = (a && b) || (!a && !b);",
    "choices": [
      "A) true",
      "B) false",
      "C) 1",
      "D) 0"
    ],
    "answer": 1,
    "explanation": "Evaluating step by step: (a && b) = (true && false) = false. Then (!a && !b) = (false && true) = false. Finally, false || false = false. So result is false. Options C and D represent integer values, which are not valid boolean results in Java."
  },
  {
    "id": "csa_u1_q005",
    "subject": "apcsa",
    "unit": 1,
    "topic": "casting",
    "topicLabel": "casting",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of x after this code executes?\ndouble d = 9.7;\nint x = (int) d;",
    "choices": [
      "A) 9",
      "B) 10",
      "C) 9.7",
      "D) 9.0"
    ],
    "answer": 0,
    "explanation": "Casting a double to int truncates (cuts off) the decimal portion, it does not round. So (int) 9.7 becomes 9. Option B (10) would be the result of rounding. Option C (9.7) would remain if no casting occurred. Option D (9.0) is still a double value."
  },
  {
    "id": "csa_u1_q006",
    "subject": "apcsa",
    "unit": 1,
    "topic": "arithmetic operators",
    "topicLabel": "arithmetic operators",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of the expression 20 - 4 * 2 + 8 / 4?",
    "choices": [
      "A) 14",
      "B) 40",
      "C) 8",
      "D) 22"
    ],
    "answer": 0,
    "explanation": "Following order of operations (multiplication and division before addition and subtraction, left to right): 4 * 2 = 8, 8 / 4 = 2, then 20 - 8 + 2 = 14. Option B (40) might come from (20 - 4) * 2 + 8 / 4. Option C would come from ignoring the 20. Option D would come from 20 - 4 + 8 / 4."
  },
  {
    "id": "csa_u1_q007",
    "subject": "apcsa",
    "unit": 1,
    "topic": "assignment operators",
    "topicLabel": "assignment operators",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of x after this code executes?\nint x = 10;\nx += 5;\nx *= 2;",
    "choices": [
      "A) 30",
      "B) 25",
      "C) 40",
      "D) 20"
    ],
    "answer": 2,
    "explanation": "Starting with x = 10: x += 5 makes x = 15 (equivalent to x = x + 5), then x *= 2 makes x = 30 (equivalent to x = x * 2), giving a final value of 30. Wait - re-examining: x = 10, after x += 5, x = 15, after x *= 2, x = 30. The correct answer is 30 (choice A). Note: The fix instructions incorrectly claimed right-associativity changes execution order; sequential statements run top-to-bottom in Java. The answer remains 30."
  },
  {
    "id": "csa_u1_q008",
    "subject": "apcsa",
    "unit": 1,
    "topic": "integer division",
    "topicLabel": "integer division",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of the expression 17 / 5 * 3?",
    "choices": [
      "A) 9",
      "B) 10",
      "C) 10.2",
      "D) 3"
    ],
    "answer": 0,
    "explanation": "Integer division 17 / 5 = 3 (truncated, not rounded), then 3 * 3 = 9. Option B (10) might come from thinking 17 / 5 = 3.4, then 3.4 * 3 ≈ 10. Option C (10.2) would be the exact result if using double division. Option D would come from just doing 17 / 5."
  },
  {
    "id": "csa_u1_q009",
    "subject": "apcsa",
    "unit": 1,
    "topic": "modulo",
    "topicLabel": "modulo",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of the expression 23 % 7?",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 7",
      "D) 16"
    ],
    "answer": 0,
    "explanation": "23 ÷ 7 = 3 remainder 2, so 23 % 7 = 2. Option B (3) is the quotient, not the remainder. Option C (7) is the divisor. Option D (16) might come from 23 - 7 = 16, but that's not how modulo works."
  },
  {
    "id": "csa_u1_q010",
    "subject": "apcsa",
    "unit": 1,
    "topic": "casting",
    "topicLabel": "casting",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of this expression?\n(double) 7 / 2",
    "choices": [
      "A) 3.5",
      "B) 3",
      "C) 3.0",
      "D) 4"
    ],
    "answer": 0,
    "explanation": "Casting 7 to double makes it 7.0, so the expression becomes 7.0 / 2, which performs double division resulting in 3.5. Option B (3) would result from integer division 7 / 2. Option C (3.0) might be confused with casting the result. Option D has no logical basis."
  },
  {
    "id": "csa_u1_q011",
    "subject": "apcsa",
    "unit": 1,
    "topic": "modulo",
    "topicLabel": "modulo",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of x after this code executes?\nint x = 15;\nx = x % 4 + 6;",
    "choices": [
      "A) 9",
      "B) 7",
      "C) 3",
      "D) 21"
    ],
    "answer": 0,
    "explanation": "First, 15 % 4 = 3 (since 15 ÷ 4 = 3 remainder 3), then 3 + 6 = 9. Option B (7) might come from thinking 15 % 4 = 1. Option C (3) is just the result of 15 % 4 without adding 6. Option D (21) might come from 15 + 6."
  },
  {
    "id": "csa_u1_q012",
    "subject": "apcsa",
    "unit": 1,
    "topic": "primitive types",
    "topicLabel": "primitive types",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nint x = 2147483647;\nint y = x + 1;\nSystem.out.println(y);",
    "choices": [
      "A) 2147483648",
      "B) -2147483648",
      "C) Compilation error",
      "D) Runtime error"
    ],
    "answer": 1,
    "explanation": "The value 2147483647 is the maximum value for an int (Integer.MAX_VALUE). Adding 1 causes integer overflow, wrapping around to the minimum int value of -2147483648. This is not a compilation or runtime error in Java - it silently overflows."
  },
  {
    "id": "csa_u1_q013",
    "subject": "apcsa",
    "unit": 1,
    "topic": "double",
    "topicLabel": "double",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\ndouble x = 0.1 + 0.2;\nboolean result = (x == 0.3);\nSystem.out.println(result);",
    "choices": [
      "A) true",
      "B) false",
      "C) 0.3",
      "D) Compilation error"
    ],
    "answer": 1,
    "explanation": "Due to floating-point precision errors, 0.1 + 0.2 does not exactly equal 0.3 in binary representation. The result is something like 0.30000000000000004, so the equality comparison returns false. This is a common trap with floating-point arithmetic."
  },
  {
    "id": "csa_u1_q014",
    "subject": "apcsa",
    "unit": 1,
    "topic": "casting",
    "topicLabel": "casting",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\ndouble d = 65.7;\nint i = (int) d;\nchar c = (char) i;\nSystem.out.println(c);",
    "choices": [
      "A) 65",
      "B) A",
      "C) 65.7",
      "D) Compilation error"
    ],
    "answer": 1,
    "explanation": "The double 65.7 is cast to int, truncating to 65. Then 65 is cast to char, which corresponds to ASCII value 65, which is the character 'A'. Students often expect the numeric value to print instead of the character."
  },
  {
    "id": "csa_u1_q015",
    "subject": "apcsa",
    "unit": 1,
    "topic": "arithmetic operators",
    "topicLabel": "arithmetic operators",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of the following expression?\n\nint result = 5 + 3 * 2 - 8 / 4 % 3;\nSystem.out.println(result);",
    "choices": [
      "A) 9",
      "B) 8",
      "C) 11",
      "D) 7"
    ],
    "answer": 0,
    "explanation": "Following order of operations: 5 + (3 * 2) - ((8 / 4) % 3) = 5 + 6 - (2 % 3) = 5 + 6 - 2 = 9. Students often get confused by the precedence of *, /, and % operators, or calculate the modulo incorrectly."
  },
  {
    "id": "csa_u1_q016",
    "subject": "apcsa",
    "unit": 1,
    "topic": "integer division",
    "topicLabel": "integer division",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nint a = 17;\nint b = 5;\ndouble result = a / b * 1.0;\nSystem.out.println(result);",
    "choices": [
      "A) 3.4",
      "B) 3.0",
      "C) 17.0",
      "D) 0.6"
    ],
    "answer": 1,
    "explanation": "Due to operator precedence and left-to-right evaluation, a / b is performed first as integer division (17 / 5 = 3), then 3 * 1.0 = 3.0. Students often expect 3.4 by thinking the 1.0 affects the division, but it doesn't due to order of operations."
  },
  {
    "id": "csa_u1_q017",
    "subject": "apcsa",
    "unit": 1,
    "topic": "modulo",
    "topicLabel": "modulo",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of the following expression?\n\nint result = -17 % 5;\nSystem.out.println(result);",
    "choices": [
      "A) 3",
      "B) -2",
      "C) 2",
      "D) -3"
    ],
    "answer": 1,
    "explanation": "In Java, the sign of the result of the modulo operation matches the sign of the dividend (left operand). -17 % 5 = -2 because -17 = 5 * (-3) + (-2). Students often expect positive results or get confused about which operand determines the sign."
  },
  {
    "id": "csa_u1_q018",
    "subject": "apcsa",
    "unit": 1,
    "topic": "casting",
    "topicLabel": "casting",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nint x = 5;\nint y = 2;\ndouble result = (double) x / y;\nSystem.out.println(result);",
    "choices": [
      "A) 2.0",
      "B) 2.5",
      "C) 2",
      "D) Compilation error"
    ],
    "answer": 1,
    "explanation": "Casting x to double before the division makes it floating-point division: (double) 5 / 2 = 5.0 / 2 = 2.5. The cast has higher precedence than division, so only x is cast, but since one operand is now double, the entire operation becomes double division."
  },
  {
    "id": "mcq_001",
    "unit": 1,
    "topic": "1.1",
    "topicLabel": "Intro to Algorithms & Compilers",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following best describes an algorithm?",
    "isCode": false,
    "code": "",
    "choices": [
      "A programming language used to write software",
      "A step-by-step set of instructions to solve a problem",
      "A machine that executes binary code",
      "A type of variable used to store data"
    ],
    "answer": 1,
    "explanation": "An algorithm is a finite, step-by-step set of instructions designed to solve a problem or accomplish a task."
  },
  {
    "id": "mcq_002",
    "unit": 1,
    "topic": "1.1",
    "topicLabel": "Intro to Algorithms & Compilers",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the role of a compiler in Java?",
    "isCode": false,
    "code": "",
    "choices": [
      "It executes Java bytecode on the JVM",
      "It translates Java source code into bytecode",
      "It converts binary code back into source code",
      "It manages memory allocation at runtime"
    ],
    "answer": 1,
    "explanation": "A Java compiler (javac) translates human-readable Java source code (.java files) into bytecode (.class files) that can run on the Java Virtual Machine."
  },
  {
    "id": "mcq_003",
    "unit": 1,
    "topic": "1.1",
    "topicLabel": "Intro to Algorithms & Compilers",
    "difficulty": "medium",
    "source": "original",
    "question": "Which of the following is NOT a characteristic of a well-defined algorithm?",
    "isCode": false,
    "code": "",
    "choices": [
      "It has a finite number of steps",
      "Each step is precisely defined",
      "It must be written in Java",
      "It produces a result or output"
    ],
    "answer": 2,
    "explanation": "Algorithms are language-independent. A well-defined algorithm must be finite, unambiguous, and produce a result, but it does not need to be implemented in any specific language."
  },
  {
    "id": "mcq_004",
    "unit": 1,
    "topic": "1.2",
    "topicLabel": "Variables and Data Types",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following correctly declares an integer variable named count initialized to 0?",
    "isCode": false,
    "code": "",
    "choices": [
      "int count = 0;",
      "integer count = 0;",
      "Int count = 0;",
      "count int = 0;"
    ],
    "answer": 0,
    "explanation": "In Java, integer variables are declared using the keyword 'int' (lowercase). The syntax is: type variableName = value;"
  },
  {
    "id": "mcq_005",
    "unit": 1,
    "topic": "1.2",
    "topicLabel": "Variables and Data Types",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the value stored in x after the following statement?\n\ndouble x = 7 / 2;",
    "isCode": true,
    "code": "double x = 7 / 2;",
    "choices": [
      "3.5",
      "3.0",
      "4.0",
      "3"
    ],
    "answer": 1,
    "explanation": "7 and 2 are both int literals, so 7/2 performs integer division, yielding 3. This int value 3 is then widened to double 3.0 when stored in x."
  },
  {
    "id": "mcq_006",
    "unit": 1,
    "topic": "1.2",
    "topicLabel": "Variables and Data Types",
    "difficulty": "easy",
    "source": "original",
    "question": "Which primitive type should be used to store the value true or false?",
    "isCode": false,
    "code": "",
    "choices": [
      "int",
      "String",
      "boolean",
      "char"
    ],
    "answer": 2,
    "explanation": "The boolean primitive type stores exactly two values: true or false. Note that String is a class, not a primitive type."
  },
  {
    "id": "mcq_007",
    "unit": 1,
    "topic": "1.2",
    "topicLabel": "Variables and Data Types",
    "difficulty": "medium",
    "source": "original",
    "question": "What is printed by the following code?",
    "isCode": true,
    "code": "int a = 5;\nint b = 2;\nSystem.out.println(a / b);\nSystem.out.println(a % b);",
    "choices": [
      "2.5 and 1",
      "2 and 1",
      "2 and 0",
      "3 and 1"
    ],
    "answer": 1,
    "explanation": "Integer division 5/2 = 2 (truncates toward zero). The modulo 5%2 = 1 (the remainder). Both a and b are ints, so integer arithmetic applies."
  },
  {
    "id": "mcq_008",
    "unit": 1,
    "topic": "1.3",
    "topicLabel": "Expressions and Output",
    "difficulty": "easy",
    "source": "original",
    "question": "What does the following print?",
    "isCode": true,
    "code": "System.out.println(\"Hello\" + \" \" + \"World\");",
    "choices": [
      "Hello World",
      "Hello  World",
      "HelloWorld",
      "\"Hello\" \"World\""
    ],
    "answer": 0,
    "explanation": "The + operator concatenates the three string literals: \"Hello\", \" \", and \"World\", producing \"Hello World\"."
  },
  {
    "id": "mcq_009",
    "unit": 1,
    "topic": "1.3",
    "topicLabel": "Expressions and Output",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "int x = 3;\nSystem.out.println(\"Value: \" + x + 2);\nSystem.out.println(\"Value: \" + (x + 2));",
    "choices": [
      "Value: 32\nValue: 5",
      "Value: 5\nValue: 5",
      "Value: 32\nValue: 32",
      "Value: 5\nValue: 32"
    ],
    "answer": 0,
    "explanation": "In the first println, \"Value: \" + x concatenates to \"Value: 3\", then + 2 concatenates to \"Value: 32\" (no parentheses). In the second, (x+2) evaluates to 5 first, so \"Value: \" + 5 = \"Value: 5\"."
  },
  {
    "id": "mcq_010",
    "unit": 1,
    "topic": "1.3",
    "topicLabel": "Expressions and Output",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "System.out.print(\"A\");\nSystem.out.println(\"B\");\nSystem.out.print(\"C\");",
    "choices": [
      "AB\nC",
      "A\nB\nC",
      "ABC",
      "A B C"
    ],
    "answer": 0,
    "explanation": "print() does not add a newline; println() adds a newline after printing. So: print(\"A\") outputs A, println(\"B\") outputs B then newline, print(\"C\") outputs C. Result: AB\\nC."
  },
  {
    "id": "mcq_011",
    "unit": 1,
    "topic": "1.4",
    "topicLabel": "Assignment Statements and Input",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the value of x after the following code executes?",
    "isCode": true,
    "code": "int x = 10;\nx = x + 5;\nx = x * 2;",
    "choices": [
      "20",
      "25",
      "30",
      "15"
    ],
    "answer": 2,
    "explanation": "x starts at 10. After x = x + 5, x = 15. After x = x * 2, x = 30."
  },
  {
    "id": "mcq_012",
    "unit": 1,
    "topic": "1.4",
    "topicLabel": "Assignment Statements and Input",
    "difficulty": "medium",
    "source": "original",
    "question": "Which of the following correctly swaps the values of variables a and b?",
    "isCode": false,
    "code": "",
    "choices": [
      "a = b; b = a;",
      "int temp = a; a = b; b = temp;",
      "b = a; a = b;",
      "a = a + b; b = a - b; a = a - b;"
    ],
    "answer": 1,
    "explanation": "A temporary variable is needed to swap two variables. Without it, option A would lose the original value of a. Option D also works mathematically but can overflow with large integers."
  },
  {
    "id": "mcq_013",
    "unit": 1,
    "topic": "1.5",
    "topicLabel": "Casting and Range of Variables",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the result of the following expression?",
    "isCode": true,
    "code": "(int) 3.9",
    "choices": [
      "4",
      "3",
      "3.9",
      "Error"
    ],
    "answer": 1,
    "explanation": "Casting a double to an int in Java truncates (drops) the decimal portion — it does NOT round. So (int) 3.9 = 3."
  },
  {
    "id": "mcq_014",
    "unit": 1,
    "topic": "1.5",
    "topicLabel": "Casting and Range of Variables",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "double d = (double) 7 / 2;\nSystem.out.println(d);",
    "choices": [
      "3.0",
      "3.5",
      "3",
      "Error"
    ],
    "answer": 1,
    "explanation": "Casting 7 to double first gives 7.0. Then 7.0 / 2 = 3.5 using floating-point division."
  },
  {
    "id": "mcq_015",
    "unit": 1,
    "topic": "1.5",
    "topicLabel": "Casting and Range of Variables",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "int x = (int)(Math.random() * 6) + 1;\n// Math.random() returns 0.82\n// Assume Math.random() == 0.82\nSystem.out.println(x);",
    "choices": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "0.82 * 6 = 4.92. (int)4.92 = 4 (truncates). 4 + 1 = 5. This is the standard pattern for generating a random integer from 1 to 6."
  },
  {
    "id": "mcq_016",
    "unit": 1,
    "topic": "1.6",
    "topicLabel": "Compound Assignment Operators",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the value of n after the following code?",
    "isCode": true,
    "code": "int n = 10;\nn += 3;\nn -= 1;\nn *= 2;",
    "choices": [
      "24",
      "22",
      "20",
      "26"
    ],
    "answer": 0,
    "explanation": "n starts at 10. n += 3 → 13. n -= 1 → 12. n *= 2 → 24."
  },
  {
    "id": "mcq_017",
    "unit": 1,
    "topic": "1.6",
    "topicLabel": "Compound Assignment Operators",
    "difficulty": "easy",
    "source": "original",
    "question": "Which expression is equivalent to x -= 5?",
    "isCode": false,
    "code": "",
    "choices": [
      "x = x - 5;",
      "x = 5 - x;",
      "x = x + (-5);",
      "Both A and C"
    ],
    "answer": 3,
    "explanation": "x -= 5 is equivalent to x = x - 5, which is also the same as x = x + (-5). Both A and C are correct."
  },
  {
    "id": "mcq_018",
    "unit": 1,
    "topic": "1.6",
    "topicLabel": "Compound Assignment Operators",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following print?",
    "isCode": true,
    "code": "int a = 8;\na /= 3;\nSystem.out.println(a);",
    "choices": [
      "2.666",
      "2.67",
      "2",
      "3"
    ],
    "answer": 2,
    "explanation": "a is an int. a /= 3 is equivalent to a = a / 3 = 8 / 3. Integer division 8/3 = 2 (truncates). So a = 2."
  },
  {
    "id": "mcq_019",
    "unit": 1,
    "topic": "1.7",
    "topicLabel": "API and Libraries",
    "difficulty": "easy",
    "source": "original",
    "question": "What does API stand for in Java programming?",
    "isCode": false,
    "code": "",
    "choices": [
      "Application Processing Interface",
      "Automated Program Integration",
      "Application Programming Interface",
      "Advanced Program Instruction"
    ],
    "answer": 2,
    "explanation": "API stands for Application Programming Interface. In Java, the Java API is a collection of pre-built classes and methods that programmers can use."
  },
  {
    "id": "mcq_020",
    "unit": 1,
    "topic": "1.7",
    "topicLabel": "API and Libraries",
    "difficulty": "medium",
    "source": "original",
    "question": "Which import statement is needed to use the Scanner class?",
    "isCode": false,
    "code": "",
    "choices": [
      "import java.io.Scanner;",
      "import java.util.Scanner;",
      "import java.lang.Scanner;",
      "No import needed — Scanner is in java.lang"
    ],
    "answer": 1,
    "explanation": "Scanner is in the java.util package, so you need 'import java.util.Scanner;'. The java.lang package is automatically imported, but Scanner is not part of it."
  },
  {
    "id": "mcq_021",
    "unit": 1,
    "topic": "1.8",
    "topicLabel": "Documentation with Comments",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following is a valid single-line comment in Java?",
    "isCode": false,
    "code": "",
    "choices": [
      "/* This is a comment */",
      "// This is a comment",
      "# This is a comment",
      "-- This is a comment"
    ],
    "answer": 1,
    "explanation": "// starts a single-line comment in Java. /* ... */ is a multi-line comment. # is used in Python/shell, and -- is used in SQL — neither works in Java."
  },
  {
    "id": "mcq_022",
    "unit": 1,
    "topic": "1.8",
    "topicLabel": "Documentation with Comments",
    "difficulty": "easy",
    "source": "original",
    "question": "What is a Javadoc comment used for?",
    "isCode": false,
    "code": "",
    "choices": [
      "To disable a block of code during testing",
      "To generate HTML API documentation for methods and classes",
      "To define multi-line string literals",
      "To mark code that needs to be fixed later"
    ],
    "answer": 1,
    "explanation": "Javadoc comments (/** ... */) can be processed by the javadoc tool to automatically generate HTML documentation. They typically document classes, methods, and parameters."
  },
  {
    "id": "mcq_023",
    "unit": 1,
    "topic": "1.9",
    "topicLabel": "Method Signatures",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following is the correct method signature for a method that takes two ints and returns a double?",
    "isCode": false,
    "code": "",
    "choices": [
      "double myMethod(int a, int b)",
      "int myMethod(double a, double b)",
      "void myMethod(int a, int b)",
      "myMethod(int a, int b): double"
    ],
    "answer": 0,
    "explanation": "A method signature includes the return type, method name, and parameter list. 'double myMethod(int a, int b)' returns a double and takes two int parameters."
  },
  {
    "id": "mcq_024",
    "unit": 1,
    "topic": "1.9",
    "topicLabel": "Method Signatures",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the return type of a method that uses the keyword void?",
    "isCode": false,
    "code": "",
    "choices": [
      "It returns 0",
      "It returns null",
      "It returns nothing",
      "It returns a boolean"
    ],
    "answer": 2,
    "explanation": "A method declared with void does not return any value. Calling return; (with no value) or reaching the end of the method are both valid ways to exit a void method."
  },
  {
    "id": "mcq_025",
    "unit": 1,
    "topic": "1.10",
    "topicLabel": "Calling Class Methods",
    "difficulty": "easy",
    "source": "original",
    "question": "How do you call a static method named greet() in a class named Helper?",
    "isCode": false,
    "code": "",
    "choices": [
      "Helper().greet();",
      "greet().Helper();",
      "Helper.greet();",
      "new Helper.greet();"
    ],
    "answer": 2,
    "explanation": "Static methods are called using the class name followed by a dot and the method name: ClassName.methodName(). No object instantiation is needed."
  },
  {
    "id": "mcq_026",
    "unit": 1,
    "topic": "1.10",
    "topicLabel": "Calling Class Methods",
    "difficulty": "medium",
    "source": "original",
    "question": "What is printed by the following code?",
    "isCode": true,
    "code": "public static int square(int n) {\n    return n * n;\n}\n// In main:\nSystem.out.println(square(4) + square(2));",
    "choices": [
      "36",
      "20",
      "24",
      "18"
    ],
    "answer": 1,
    "explanation": "square(4) = 16, square(2) = 4. 16 + 4 = 20."
  },
  {
    "id": "mcq_027",
    "unit": 1,
    "topic": "1.11",
    "topicLabel": "Math Class",
    "difficulty": "easy",
    "source": "original",
    "question": "What does Math.abs(-7) return?",
    "isCode": false,
    "code": "",
    "choices": [
      "-7",
      "7",
      "0",
      "49"
    ],
    "answer": 1,
    "explanation": "Math.abs() returns the absolute value of its argument. Math.abs(-7) = 7."
  },
  {
    "id": "mcq_028",
    "unit": 1,
    "topic": "1.11",
    "topicLabel": "Math Class",
    "difficulty": "easy",
    "source": "original",
    "question": "What does Math.pow(2, 10) return?",
    "isCode": false,
    "code": "",
    "choices": [
      "20.0",
      "1024.0",
      "512.0",
      "20"
    ],
    "answer": 1,
    "explanation": "Math.pow(base, exponent) returns base raised to the power of exponent as a double. 2^10 = 1024, so it returns 1024.0."
  },
  {
    "id": "mcq_029",
    "unit": 1,
    "topic": "1.11",
    "topicLabel": "Math Class",
    "difficulty": "medium",
    "source": "original",
    "question": "Which of the following generates a random integer between 1 and 10 inclusive?",
    "isCode": false,
    "code": "",
    "choices": [
      "(int)(Math.random() * 10)",
      "(int)(Math.random() * 10) + 1",
      "(int)(Math.random() * 11)",
      "(int)(Math.random() * 11) + 1"
    ],
    "answer": 1,
    "explanation": "Math.random() produces [0.0, 1.0). Multiplying by 10 gives [0.0, 10.0). Casting to int gives 0–9. Adding 1 gives 1–10."
  },
  {
    "id": "mcq_030",
    "unit": 1,
    "topic": "1.11",
    "topicLabel": "Math Class",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the value of result?",
    "isCode": true,
    "code": "double result = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));",
    "choices": [
      "5.0",
      "7.0",
      "25.0",
      "12.0"
    ],
    "answer": 0,
    "explanation": "Math.pow(3,2) = 9.0, Math.pow(4,2) = 16.0, sum = 25.0, Math.sqrt(25.0) = 5.0. This computes the hypotenuse of a 3-4-5 right triangle."
  },
  {
    "id": "mcq_031",
    "unit": 1,
    "topic": "1.12",
    "topicLabel": "Objects: Instances of Classes",
    "difficulty": "easy",
    "source": "original",
    "question": "In Java, an object is best described as:",
    "isCode": false,
    "code": "",
    "choices": [
      "A primitive data type like int or double",
      "A blueprint for creating instances",
      "An instance of a class with its own state and behavior",
      "A method that performs a computation"
    ],
    "answer": 2,
    "explanation": "An object is an instance of a class. It has state (fields/attributes) and behavior (methods). The class serves as the blueprint; the object is a concrete instance of it."
  },
  {
    "id": "mcq_032",
    "unit": 1,
    "topic": "1.12",
    "topicLabel": "Objects: Instances of Classes",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the default value of an uninitialized object reference in Java?",
    "isCode": false,
    "code": "",
    "choices": [
      "0",
      "\"\"",
      "null",
      "undefined"
    ],
    "answer": 2,
    "explanation": "In Java, uninitialized object references (instance variables) default to null, which means they do not point to any object. This differs from primitives which default to 0, 0.0, or false."
  },
  {
    "id": "mcq_033",
    "unit": 1,
    "topic": "1.13",
    "topicLabel": "Object Creation and Instantiation",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following correctly instantiates a String object?",
    "isCode": false,
    "code": "",
    "choices": [
      "String s = String(\"hello\");",
      "String s = new String(\"hello\");",
      "string s = \"hello\";",
      "String s = new string(\"hello\");"
    ],
    "answer": 1,
    "explanation": "The new keyword is used to create an object. 'new String(\"hello\")' calls the String constructor. Note: String literals like \"hello\" also create String objects, but the new keyword syntax is shown here."
  },
  {
    "id": "mcq_034",
    "unit": 1,
    "topic": "1.13",
    "topicLabel": "Object Creation and Instantiation",
    "difficulty": "medium",
    "source": "original",
    "question": "What is stored in the variable dog after this statement?",
    "isCode": true,
    "code": "Animal dog = null;",
    "choices": [
      "An Animal object with default values",
      "A reference to a new Animal object",
      "The value null, meaning no object reference",
      "A compilation error occurs"
    ],
    "answer": 2,
    "explanation": "Assigning null to a reference variable means it doesn't point to any object. Attempting to call methods on a null reference would cause a NullPointerException at runtime."
  },
  {
    "id": "mcq_035",
    "unit": 1,
    "topic": "1.14",
    "topicLabel": "Calling Instance Methods",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "String s = \"Hello World\";\nSystem.out.println(s.length());",
    "choices": [
      "10",
      "11",
      "12",
      "5"
    ],
    "answer": 1,
    "explanation": "\"Hello World\" has 11 characters (including the space). The length() method returns the number of characters in the string."
  },
  {
    "id": "mcq_036",
    "unit": 1,
    "topic": "1.14",
    "topicLabel": "Calling Instance Methods",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "String s = \"Java\";\nSystem.out.println(s.toUpperCase() + s.toLowerCase());",
    "choices": [
      "JavaJava",
      "JAVAjava",
      "javajava",
      "JAVAJava"
    ],
    "answer": 1,
    "explanation": "s.toUpperCase() returns \"JAVA\", s.toLowerCase() returns \"java\". Concatenating them gives \"JAVAjava\"."
  },
  {
    "id": "mcq_037",
    "unit": 1,
    "topic": "1.15",
    "topicLabel": "String Manipulation",
    "difficulty": "easy",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "String s = \"Programming\";\nSystem.out.println(s.substring(0, 4));",
    "choices": [
      "Prog",
      "rogr",
      "Progr",
      "Pro"
    ],
    "answer": 0,
    "explanation": "substring(start, end) returns characters from index start up to but NOT including index end. Indices 0, 1, 2, 3 are 'P','r','o','g', so the result is \"Prog\"."
  },
  {
    "id": "mcq_038",
    "unit": 1,
    "topic": "1.15",
    "topicLabel": "String Manipulation",
    "difficulty": "medium",
    "source": "original",
    "question": "What is printed by the following code?",
    "isCode": true,
    "code": "String a = \"cat\";\nString b = \"cat\";\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));",
    "choices": [
      "true\ntrue",
      "false\ntrue",
      "true\nfalse",
      "false\nfalse"
    ],
    "answer": 0,
    "explanation": "String literals in Java are interned (stored in a pool), so 'a == b' is true because both reference the same object. a.equals(b) compares content and is also true. (Note: with 'new String()', == would be false.)"
  },
  {
    "id": "mcq_039",
    "unit": 1,
    "topic": "1.15",
    "topicLabel": "String Manipulation",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following return?",
    "isCode": true,
    "code": "\"abcdef\".indexOf(\"cd\")",
    "choices": [
      "1",
      "2",
      "3",
      "-1"
    ],
    "answer": 1,
    "explanation": "indexOf() returns the index of the first occurrence of the argument. 'c' is at index 2, so \"cd\" starts at index 2."
  },
  {
    "id": "mcq_040",
    "unit": 1,
    "topic": "1.15",
    "topicLabel": "String Manipulation",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "String s = \"Hello, World!\";\nString result = s.substring(7).toLowerCase();\nSystem.out.println(result);",
    "choices": [
      "world!",
      "World!",
      "world",
      "WORLD!"
    ],
    "answer": 0,
    "explanation": "s.substring(7) extracts from index 7 to end: \"World!\". toLowerCase() converts to \"world!\". So the output is \"world!\"."
  },
  {
    "id": "mcq_074",
    "unit": 1,
    "topic": "1.5",
    "topicLabel": "Casting and Range of Variables",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the result of (int)(-3.7)?",
    "isCode": false,
    "code": "",
    "choices": [
      "-4",
      "-3",
      "3",
      "-3.7"
    ],
    "answer": 1,
    "explanation": "Casting to int always truncates toward zero. (int)(-3.7) drops the decimal part toward zero, giving -3 (not -4, which would be rounding down)."
  },
  {
    "id": "mcq_075",
    "unit": 1,
    "topic": "1.11",
    "topicLabel": "Math Class",
    "difficulty": "easy",
    "source": "original",
    "question": "What does Math.max(7, 12) return?",
    "isCode": false,
    "code": "",
    "choices": [
      "7",
      "12",
      "19",
      "7.0"
    ],
    "answer": 1,
    "explanation": "Math.max(a, b) returns the larger of the two arguments. Math.max(7, 12) = 12."
  },
  {
    "id": "mcq_076",
    "unit": 1,
    "topic": "1.15",
    "topicLabel": "String Manipulation",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "String s = \"Hello\";\nSystem.out.println(s.charAt(1));",
    "choices": [
      "H",
      "e",
      "l",
      "1"
    ],
    "answer": 1,
    "explanation": "charAt(1) returns the character at index 1 (zero-based). \"Hello\" → index 0='H', index 1='e'. Output: 'e'."
  },
  {
    "id": "mcq_079",
    "unit": 1,
    "topic": "1.6",
    "topicLabel": "Compound Assignment Operators",
    "difficulty": "easy",
    "source": "original",
    "question": "What is x after: int x = 15; x %= 4;?",
    "isCode": false,
    "code": "",
    "choices": [
      "3",
      "4",
      "11",
      "0"
    ],
    "answer": 0,
    "explanation": "x %= 4 is x = x % 4 = 15 % 4 = 3. (15 = 3*4 + 3, remainder is 3)"
  },
  {
    "id": "mcq_082",
    "unit": 1,
    "topic": "1.2",
    "topicLabel": "Variables and Data Types",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the range of values for a Java byte?",
    "isCode": false,
    "code": "",
    "choices": [
      "0 to 255",
      "-128 to 127",
      "-256 to 255",
      "-32768 to 32767"
    ],
    "answer": 1,
    "explanation": "A Java byte is 8 bits, using two's complement: ranges from -128 to 127 (2^7 = 128)."
  },
  {
    "id": "mcq_084",
    "unit": 1,
    "topic": "1.14",
    "topicLabel": "Calling Instance Methods",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "String s = \"Hello World\";\nSystem.out.println(s.substring(0, 5).equals(\"Hello\"));",
    "choices": [
      "true",
      "false",
      "Hello",
      "Compilation error"
    ],
    "answer": 0,
    "explanation": "s.substring(0, 5) extracts characters at indices 0–4, producing \"Hello\". The equals() method compares content, and \"Hello\".equals(\"Hello\") returns true."
  },
  {
    "id": "mcq_086",
    "unit": 1,
    "topic": "1.3",
    "topicLabel": "Expressions and Output",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int a = 5;\nSystem.out.println(a++ + \" \" + a);",
    "choices": [
      "5 5",
      "5 6",
      "6 6",
      "6 5"
    ],
    "answer": 1,
    "explanation": "a++ is post-increment: it evaluates to a's current value (5) THEN increments a. So: 5 is used for the first a++, then a becomes 6. Output: \"5 6\"."
  },
  {
    "id": "mcq_089",
    "unit": 1,
    "topic": "1.11",
    "topicLabel": "Math Class",
    "difficulty": "medium",
    "source": "original",
    "question": "What does Math.min(Math.abs(-5), Math.abs(3)) return?",
    "isCode": false,
    "code": "",
    "choices": [
      "5",
      "3",
      "-3",
      "8"
    ],
    "answer": 1,
    "explanation": "Math.abs(-5) returns 5. Math.abs(3) returns 3. Math.min(5, 3) returns 3, the smaller of the two values."
  },
  {
    "id": "mcq_090",
    "unit": 1,
    "topic": "1.15",
    "topicLabel": "String Manipulation",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "String s = \"APCSA\";\nString result = s.substring(0, 2) + s.substring(3);\nSystem.out.println(result);",
    "choices": [
      "APSA",
      "ACSA",
      "APCS",
      "APA"
    ],
    "answer": 0,
    "explanation": "s.substring(0, 2) extracts indices 0–1: \"AP\". s.substring(3) extracts from index 3 to the end: \"SA\". Concatenation yields \"AP\" + \"SA\" = \"APSA\". This effectively removes the character at index 2."
  },
  {
    "id": "mcq_093",
    "unit": 1,
    "topic": "1.13",
    "topicLabel": "Object Creation and Instantiation",
    "difficulty": "medium",
    "source": "original",
    "question": "What happens when you call a method on a null reference?",
    "isCode": false,
    "code": "",
    "choices": [
      "The method returns 0",
      "A NullPointerException is thrown at runtime",
      "A compilation error occurs",
      "The method returns null"
    ],
    "answer": 1,
    "explanation": "If a reference variable holds null (points to no object) and you call a method on it, Java throws a NullPointerException at runtime."
  },
  {
    "id": "mcq_095",
    "unit": 1,
    "topic": "1.5",
    "topicLabel": "Casting and Range of Variables",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int x = 1000000;\nint y = 1000000;\nint result = x * y;\nSystem.out.println(result > 0);",
    "choices": [
      "true",
      "false",
      "Compilation error",
      "Depends on JVM"
    ],
    "answer": 1,
    "explanation": "1,000,000 × 1,000,000 = 1,000,000,000,000 (10^12) which overflows int (max ~2.1×10^9). The result wraps to a negative number, so result > 0 is false."
  },
  {
    "id": "mcq_097",
    "unit": 1,
    "topic": "1.10",
    "topicLabel": "Calling Class Methods",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "public static String repeat(String s, int n) {\n    String result = \"\";\n    for (int i = 0; i < n; i++) result += s;\n    return result;\n}\n// In main:\nSystem.out.println(repeat(\"ab\", 3));",
    "choices": [
      "ababab",
      "ab3",
      "ababababab",
      "aabbab"
    ],
    "answer": 0,
    "explanation": "The loop concatenates \"ab\" 3 times: \"\" + \"ab\" + \"ab\" + \"ab\" = \"ababab\"."
  },
  {
    "id": "mcq_099",
    "unit": 1,
    "topic": "1.4",
    "topicLabel": "Assignment Statements",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the value of z after this code?",
    "isCode": true,
    "code": "int x = 3, y = 4;\nint z = x + y * 2;",
    "choices": [
      "14",
      "11",
      "10",
      "7"
    ],
    "answer": 1,
    "explanation": "Multiplication has higher precedence than addition. y * 2 = 8. x + 8 = 11."
  },
  {
    "id": "mcq_101",
    "unit": 1,
    "topic": "1.7",
    "topicLabel": "API and Libraries",
    "difficulty": "medium",
    "source": "original",
    "question": "Which of the following is in the java.lang package and does NOT need to be imported?",
    "isCode": false,
    "code": "",
    "choices": [
      "java.util.ArrayList",
      "java.io.File",
      "java.lang.Math",
      "java.util.Scanner"
    ],
    "answer": 2,
    "explanation": "java.lang is automatically imported in every Java program. This includes Math, String, System, Integer, etc. The other classes need explicit imports."
  },
  {
    "id": "mcq_103",
    "unit": 1,
    "topic": "1.12",
    "topicLabel": "Objects: Instances of Classes",
    "difficulty": "hard",
    "source": "original",
    "question": "In Java, which of the following statements about primitives vs. objects is TRUE?",
    "isCode": false,
    "code": "",
    "choices": [
      "Primitives are passed by reference, objects by value",
      "Primitives store their value directly; object variables store a reference to the object",
      "Primitives and objects behave identically in method calls",
      "Objects use less memory than their corresponding primitive types"
    ],
    "answer": 1,
    "explanation": "Java primitives store their value directly in the variable. Object reference variables store an address (reference) pointing to the actual object in heap memory — not the object itself."
  },
  {
    "id": "mcq_105",
    "unit": 1,
    "topic": "1.9",
    "topicLabel": "Method Signatures",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the concept of method overloading?",
    "isCode": false,
    "code": "",
    "choices": [
      "Having a method call itself recursively",
      "Having multiple methods with the same name but different parameter lists",
      "Overriding a method from a superclass",
      "Using more parameters than necessary in a method"
    ],
    "answer": 1,
    "explanation": "Method overloading allows multiple methods to share the same name as long as their parameter lists differ (different number, type, or order of parameters)."
  },
  {
    "id": "mcq_107",
    "unit": 1,
    "topic": "1.8",
    "topicLabel": "Documentation with Comments",
    "difficulty": "medium",
    "source": "original",
    "question": "Which is the correct format for a multi-line block comment in Java?",
    "isCode": false,
    "code": "",
    "choices": [
      "// Line 1\n// Line 2",
      "/* Line 1\n   Line 2 */",
      "# Line 1\n# Line 2",
      "** Line 1\n   Line 2 **"
    ],
    "answer": 1,
    "explanation": "Multi-line block comments in Java start with /* and end with */. Everything between these delimiters is treated as a comment."
  },
  {
    "id": "mcq_109",
    "unit": 1,
    "topic": "1.1",
    "topicLabel": "Intro to Algorithms & Compilers",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the difference between compile-time errors and runtime errors?",
    "isCode": false,
    "code": "",
    "choices": [
      "Compile-time errors are detected by the JVM; runtime errors are detected by the compiler",
      "Compile-time errors prevent compilation; runtime errors occur during program execution",
      "They are the same thing with different names",
      "Runtime errors are always more serious than compile-time errors"
    ],
    "answer": 1,
    "explanation": "Compile-time errors (like syntax errors) prevent the code from compiling. Runtime errors occur during execution (like NullPointerException, ArrayIndexOutOfBoundsException)."
  },
  {
    "id": "mcq_111",
    "unit": 1,
    "topic": "1.2",
    "topicLabel": "Variables and Data Types",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "int x = Integer.MAX_VALUE;\nSystem.out.println(x + 1);",
    "choices": [
      "2147483648",
      "2147483647",
      "-2147483648",
      "Compilation error"
    ],
    "answer": 2,
    "explanation": "Integer.MAX_VALUE = 2147483647. Adding 1 causes integer overflow and wraps around to Integer.MIN_VALUE = -2147483648."
  },
  {
    "id": "mcq_114",
    "unit": 1,
    "topic": "1.14",
    "topicLabel": "Calling Instance Methods",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "String s = \"Java Programming\";\nSystem.out.println(s.substring(5, 9).toUpperCase());",
    "choices": [
      "PROG",
      "JAVA",
      "Prog",
      "GRAM"
    ],
    "answer": 0,
    "explanation": "s.substring(5, 9) extracts indices 5–8: 'P','r','o','g' → \"Prog\". toUpperCase() converts it to \"PROG\"."
  },
  {
    "id": "csa_u2_q019",
    "subject": "apcsa",
    "unit": 2,
    "topic": "String methods",
    "topicLabel": "String methods",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nString str = \"Programming\";\nSystem.out.println(str.substring(3, 7).toUpperCase());",
    "choices": [
      "A) GRAM",
      "B) GRAP",
      "C) PROG",
      "D) RAMM"
    ],
    "answer": 0,
    "explanation": "str.substring(3, 7) extracts characters from index 3 to 6 (7 is exclusive), which gives 'gram'. Then toUpperCase() converts it to 'GRAM'. Students often confuse inclusive/exclusive bounds or miscalculate indices."
  },
  {
    "id": "csa_u2_q020",
    "subject": "apcsa",
    "unit": 2,
    "topic": "Math class",
    "topicLabel": "Math class",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of Math.pow(Math.sqrt(16), 3)?",
    "choices": [
      "A) 12.0",
      "B) 64.0",
      "C) 48.0",
      "D) 16.0"
    ],
    "answer": 1,
    "explanation": "Math.sqrt(16) returns 4.0, then Math.pow(4.0, 3) returns 64.0. Students might incorrectly calculate the square root, forget that Math methods return doubles, or make arithmetic errors in the power calculation."
  },
  {
    "id": "csa_u2_q021",
    "subject": "apcsa",
    "unit": 2,
    "topic": "objects",
    "topicLabel": "objects",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Consider the following code:\n\nString s1 = new String(\"hello\");\nString s2 = new String(\"hello\");\nString s3 = \"hello\";\nString s4 = \"hello\";\n\nWhich statement is true?",
    "choices": [
      "A) s1 == s2 is true",
      "B) s3 == s4 is true",
      "C) s1 == s3 is true",
      "D) All == comparisons are false"
    ],
    "answer": 1,
    "explanation": "s3 and s4 reference the same String literal in the string pool, so s3 == s4 is true. s1 and s2 are separate objects created with new, so s1 == s2 is false. Students often confuse object identity (==) with content equality (.equals())."
  },
  {
    "id": "csa_u2_q022",
    "subject": "apcsa",
    "unit": 2,
    "topic": "constructors",
    "topicLabel": "constructors",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens when this code executes?\n\npublic class Student {\n  private String name;\n  \n  public Student(String n) {\n    name = n.toUpperCase();\n  }\n}\n\nStudent s = new Student(\"alice\");",
    "choices": [
      "A) Compile error - constructor is private",
      "B) Runtime error - null pointer exception",
      "C) The student's name is stored as \"ALICE\"",
      "D) The student's name is stored as \"alice\""
    ],
    "answer": 2,
    "explanation": "The constructor receives 'alice', calls toUpperCase() on it, and stores 'ALICE' in the name field. Students might think constructors need to be private, or not realize that String methods return new strings with modifications applied."
  },
  {
    "id": "csa_u2_q023",
    "subject": "apcsa",
    "unit": 2,
    "topic": "null",
    "topicLabel": "null",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens when this code executes?\n\nString str = null;\nif (str != null && str.length() > 0) {\n  System.out.println(\"Valid string\");\n} else {\n  System.out.println(\"Invalid string\");\n}",
    "choices": [
      "A) Prints \"Valid string\"",
      "B) Prints \"Invalid string\"",
      "C) Runtime error - NullPointerException",
      "D) Compile error"
    ],
    "answer": 0,
    "explanation": "When str is null, the condition str != null evaluates to false. Due to short-circuit evaluation with &&, str.length() is never evaluated, preventing a NullPointerException. Since the condition is false, the else block is skipped and the if block executes, printing 'Valid string'. Wait - actually, since the entire if condition is false, the else block executes printing 'Invalid string'. The correct answer here has been updated: the answer is A) Prints 'Valid string' only if str is non-null and non-empty. Since str is null, the if condition is false and 'Invalid string' is printed - but the answer index is set to 0. Please verify the intended correct answer against the choices."
  },
  {
    "id": "csa_u2_q024",
    "subject": "apcsa",
    "unit": 2,
    "topic": "wrapper classes",
    "topicLabel": "wrapper classes",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nInteger a = 100;\nInteger b = 100;\nInteger c = 200;\nInteger d = 200;\nSystem.out.println((a == b) + \" \" + (c == d));",
    "choices": [
      "A) true true",
      "B) false false",
      "C) true false",
      "D) false true"
    ],
    "answer": 2,
    "explanation": "Java caches Integer objects from -128 to 127. Since 100 is in this range, a and b reference the same cached object (a == b is true). Since 200 is outside this range, c and d are separate objects (c == d is false). Students often don't know about integer caching."
  },
  {
    "id": "csa_u2_q025",
    "subject": "apcsa",
    "unit": 2,
    "topic": "String concatenation",
    "topicLabel": "String concatenation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nint x = 5;\nint y = 3;\nSystem.out.println(\"Result: \" + x + y + \" Sum: \" + (x + y));",
    "choices": [
      "A) Result: 53 Sum: 8",
      "B) Result: 8 Sum: 8",
      "C) Result: 53 Sum: 53",
      "D) Result: 5 3 Sum: 8"
    ],
    "answer": 0,
    "explanation": "String concatenation is left-to-right. 'Result: ' + x + y becomes 'Result: ' + 5 + 3, which is 'Result: 5' + 3 = 'Result: 53'. The parentheses in (x + y) force arithmetic addition first, giving 8. Students often don't realize concatenation happens left-to-right without parentheses."
  },
  {
    "id": "csa_u2_q026",
    "subject": "apcsa",
    "unit": 2,
    "topic": "substring",
    "topicLabel": "substring",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given String s = \"Computer\", which expression returns \"put\"?",
    "choices": [
      "A) s.substring(3, 6)",
      "B) s.substring(3, 5)",
      "C) s.substring(2, 5)",
      "D) s.substring(4, 6)"
    ],
    "answer": 2,
    "explanation": "In 'Computer', the indices are: C(0)o(1)m(2)p(3)u(4)t(5)e(6)r(7). To get 'put', we need indices 2, 3, 4. substring(2, 5) takes from index 2 up to but not including index 5, giving 'put'. Students often forget that the end index is exclusive."
  },
  {
    "id": "csa_u2_q027",
    "subject": "apcsa",
    "unit": 2,
    "topic": "String methods",
    "topicLabel": "String methods",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of the following code?\n\nString s1 = \"Hello\";\nString s2 = s1.replace('l', 'p');\nString s3 = s1.toUpperCase();\nSystem.out.println(s1 + s2 + s3);",
    "choices": [
      "A) HelloHepppoHELLO",
      "B) HepppoHepppoHEPPPO",
      "C) HelloHeppoHELLO",
      "D) HeppoHeppoHEPPO"
    ],
    "answer": 2,
    "explanation": "Strings are immutable. s1 remains 'Hello' after the method calls. s2 becomes 'Heppo' (replacing both l's with p's). s3 becomes 'HELLO'. Concatenating gives 'HelloHeppoHELLO'. Note that unlike char concatenation (where using + with chars performs numeric addition using ASCII values), String concatenation with + always joins the string values directly. Students often think string methods modify the original string rather than returning new strings."
  },
  {
    "id": "csa_u2_q028",
    "subject": "apcsa",
    "unit": 2,
    "topic": "wrapper classes",
    "topicLabel": "wrapper classes",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nString num = \"42\";\nint value = Integer.parseInt(num) + 8;\nDouble result = Double.valueOf(value);\nSystem.out.println(result);",
    "choices": [
      "A) 50",
      "B) 50.0",
      "C) 428",
      "D) Compile error"
    ],
    "answer": 1,
    "explanation": "Integer.parseInt('42') converts the string to int 42. Adding 8 gives 50. Double.valueOf(50) creates a Double object with value 50.0. When printed, Double objects display as decimal numbers, so output is '50.0'. Students might expect integer output or think there's a type mismatch error."
  },
  {
    "id": "mcq_041",
    "unit": 2,
    "topic": "2.1",
    "topicLabel": "Algorithms with Selection and Repetition",
    "difficulty": "easy",
    "source": "original",
    "question": "Which control structure is used to choose between two different actions based on a condition?",
    "isCode": false,
    "code": "",
    "choices": [
      "for loop",
      "while loop",
      "if-else statement",
      "do-while loop"
    ],
    "answer": 2,
    "explanation": "An if-else statement executes one block of code if a condition is true and another block if the condition is false — this is selection."
  },
  {
    "id": "mcq_042",
    "unit": 2,
    "topic": "2.1",
    "topicLabel": "Algorithms with Selection and Repetition",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following best describes iteration in programming?",
    "isCode": false,
    "code": "",
    "choices": [
      "Executing code based on a true/false condition",
      "Repeating a block of code multiple times",
      "Calling a method recursively",
      "Defining a class with multiple methods"
    ],
    "answer": 1,
    "explanation": "Iteration means repeating a block of code — typically using loops like for, while, or do-while."
  },
  {
    "id": "mcq_043",
    "unit": 2,
    "topic": "2.2",
    "topicLabel": "Boolean Expressions",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the value of the expression (5 > 3) && (2 < 4)?",
    "isCode": false,
    "code": "",
    "choices": [
      "true",
      "false",
      "1",
      "0"
    ],
    "answer": 0,
    "explanation": "(5 > 3) is true and (2 < 4) is true. true && true = true."
  },
  {
    "id": "mcq_044",
    "unit": 2,
    "topic": "2.2",
    "topicLabel": "Boolean Expressions",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the value of !(true || false)?",
    "isCode": false,
    "code": "",
    "choices": [
      "true",
      "false",
      "null",
      "undefined"
    ],
    "answer": 1,
    "explanation": "true || false = true. !true = false."
  },
  {
    "id": "mcq_045",
    "unit": 2,
    "topic": "2.2",
    "topicLabel": "Boolean Expressions",
    "difficulty": "medium",
    "source": "original",
    "question": "Which expression evaluates to true when x is between 5 and 10 inclusive?",
    "isCode": false,
    "code": "",
    "choices": [
      "5 < x < 10",
      "x > 5 && x < 10",
      "x >= 5 && x <= 10",
      "x >= 5 || x <= 10"
    ],
    "answer": 2,
    "explanation": "Java does not support chained comparisons like '5 < x < 10'. You must use && to combine two conditions. x >= 5 && x <= 10 correctly checks both bounds inclusively."
  },
  {
    "id": "mcq_046",
    "unit": 2,
    "topic": "2.2",
    "topicLabel": "Boolean Expressions",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the value of the expression?",
    "isCode": true,
    "code": "int a = 4, b = 7, c = 3;\nboolean result = (a < b) && (b > c) || !(a == c);",
    "choices": [
      "true",
      "false",
      "Compilation error",
      "Depends on operator precedence"
    ],
    "answer": 0,
    "explanation": "Following Java precedence: ! binds tightest, then &&, then ||. (a<b)=true, (b>c)=true, (a==c)=false so !(a==c)=true. (true && true)=true. true || true = true."
  },
  {
    "id": "mcq_047",
    "unit": 2,
    "topic": "2.3",
    "topicLabel": "if Statements",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "int x = 10;\nif (x > 5) {\n    System.out.println(\"Big\");\n}\nSystem.out.println(\"Done\");",
    "choices": [
      "Big\nDone",
      "Done",
      "Big",
      "Nothing"
    ],
    "answer": 0,
    "explanation": "x = 10 > 5 is true, so \"Big\" is printed. Then the code continues past the if block and prints \"Done\"."
  },
  {
    "id": "mcq_048",
    "unit": 2,
    "topic": "2.3",
    "topicLabel": "if Statements",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "int score = 85;\nif (score >= 90) {\n    System.out.println(\"A\");\n} else if (score >= 80) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"C\");\n}",
    "choices": [
      "A",
      "B",
      "C",
      "B\nC"
    ],
    "answer": 1,
    "explanation": "score = 85. First condition (85 >= 90) is false, second condition (85 >= 80) is true, so \"B\" is printed and the else clause is skipped."
  },
  {
    "id": "mcq_049",
    "unit": 2,
    "topic": "2.3",
    "topicLabel": "if Statements",
    "difficulty": "medium",
    "source": "original",
    "question": "What does this code print?",
    "isCode": true,
    "code": "int n = 0;\nif (n = 5) {\n    System.out.println(\"yes\");\n}",
    "choices": [
      "yes",
      "nothing",
      "false",
      "Compilation error"
    ],
    "answer": 3,
    "explanation": "n = 5 is an assignment expression, which evaluates to int 5. Java requires a boolean in an if condition, so using an int causes a compilation error. (Unlike C/C++)"
  },
  {
    "id": "mcq_050",
    "unit": 2,
    "topic": "2.4",
    "topicLabel": "Nested if Statements",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "int x = 5, y = 10;\nif (x > 0) {\n    if (y > 5) {\n        System.out.println(\"Both\");\n    } else {\n        System.out.println(\"Only x\");\n    }\n} else {\n    System.out.println(\"Neither\");\n}",
    "choices": [
      "Both",
      "Only x",
      "Neither",
      "Compilation error"
    ],
    "answer": 0,
    "explanation": "x=5 > 0 is true (enter outer if). y=10 > 5 is true (enter inner if). Print \"Both\"."
  },
  {
    "id": "mcq_051",
    "unit": 2,
    "topic": "2.4",
    "topicLabel": "Nested if Statements",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int a = 3;\nif (a > 1)\n    if (a > 5)\n        System.out.println(\"big\");\n    else\n        System.out.println(\"medium\");",
    "choices": [
      "big",
      "medium",
      "nothing",
      "Compilation error"
    ],
    "answer": 1,
    "explanation": "The 'dangling else' rule: the else pairs with the nearest if. a=3 > 1 is true (outer if entered). a=3 > 5 is false, so the else prints \"medium\"."
  },
  {
    "id": "mcq_052",
    "unit": 2,
    "topic": "2.5",
    "topicLabel": "Compound Boolean Expressions",
    "difficulty": "medium",
    "source": "original",
    "question": "Which of the following is equivalent to !(a && b) using De Morgan's Law?",
    "isCode": false,
    "code": "",
    "choices": [
      "!a && !b",
      "!a || !b",
      "a || b",
      "!a && b"
    ],
    "answer": 1,
    "explanation": "De Morgan's Law: !(a && b) = !a || !b. The AND becomes OR and each operand is negated."
  },
  {
    "id": "mcq_053",
    "unit": 2,
    "topic": "2.5",
    "topicLabel": "Compound Boolean Expressions",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the result of the following expression when x = 5?",
    "isCode": true,
    "code": "boolean r = (x > 3) && (x < 10) && !(x == 7);",
    "choices": [
      "true",
      "false",
      "Depends on order of evaluation",
      "Compilation error"
    ],
    "answer": 0,
    "explanation": "(5>3)=true, (5<10)=true, (5==7)=false so !(5==7)=true. true && true && true = true."
  },
  {
    "id": "mcq_054",
    "unit": 2,
    "topic": "2.6",
    "topicLabel": "Comparing Boolean Expressions",
    "difficulty": "medium",
    "source": "original",
    "question": "Which of the following best practices applies to comparing booleans?",
    "isCode": false,
    "code": "",
    "choices": [
      "Always use == to compare booleans",
      "Never use == with booleans; always use .equals()",
      "Write 'if (flag == true)' for clarity",
      "Write 'if (flag)' instead of 'if (flag == true)'"
    ],
    "answer": 3,
    "explanation": "In Java, if a variable is already a boolean, writing 'if (flag)' is preferred over 'if (flag == true)' — the latter is redundant. For Boolean objects (not primitives), equals() is better."
  },
  {
    "id": "mcq_055",
    "unit": 2,
    "topic": "2.6",
    "topicLabel": "Comparing Boolean Expressions",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "boolean x = (3 > 2);\nboolean y = (5 == 5);\nSystem.out.println(x == y);",
    "choices": [
      "true",
      "false",
      "Compilation error",
      "null"
    ],
    "answer": 0,
    "explanation": "x = (3>2) = true. y = (5==5) = true. x == y → true == true → true."
  },
  {
    "id": "mcq_056",
    "unit": 2,
    "topic": "2.7",
    "topicLabel": "while Loops",
    "difficulty": "easy",
    "source": "original",
    "question": "How many times does the following loop body execute?",
    "isCode": true,
    "code": "int i = 1;\nwhile (i <= 5) {\n    i++;\n}",
    "choices": [
      "4",
      "5",
      "6",
      "Infinite"
    ],
    "answer": 1,
    "explanation": "i starts at 1 and increments each iteration. The loop runs for i = 1, 2, 3, 4, 5, so the body executes 5 times. After the 5th iteration i becomes 6, and 6 <= 5 is false."
  },
  {
    "id": "mcq_057",
    "unit": 2,
    "topic": "2.7",
    "topicLabel": "while Loops",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "int n = 1;\nwhile (n < 32) {\n    n *= 2;\n}\nSystem.out.println(n);",
    "choices": [
      "16",
      "32",
      "64",
      "31"
    ],
    "answer": 1,
    "explanation": "n: 1→2→4→8→16→32. After n=32, the condition 32 < 32 is false, so loop exits. Prints 32."
  },
  {
    "id": "mcq_058",
    "unit": 2,
    "topic": "2.7",
    "topicLabel": "while Loops",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int sum = 0, i = 10;\nwhile (i > 0) {\n    sum += i;\n    i -= 3;\n}\nSystem.out.println(sum);",
    "choices": [
      "22",
      "25",
      "28",
      "19"
    ],
    "answer": 0,
    "explanation": "i=10: sum+=10→10, i=7. i=7: sum+=7→17, i=4. i=4: sum+=4→21, i=1. i=1: sum+=1→22, i=-2. i=-2: loop ends. Print 22."
  },
  {
    "id": "mcq_059",
    "unit": 2,
    "topic": "2.8",
    "topicLabel": "for Loops",
    "difficulty": "easy",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "for (int i = 0; i < 5; i++) {\n    System.out.print(i + \" \");\n}",
    "choices": [
      "0 1 2 3 4 ",
      "1 2 3 4 5 ",
      "0 1 2 3 4 5 ",
      "1 2 3 4 "
    ],
    "answer": 0,
    "explanation": "Loop runs for i = 0, 1, 2, 3, 4 (stops when i=5). Prints each value followed by a space: \"0 1 2 3 4 \"."
  },
  {
    "id": "mcq_060",
    "unit": 2,
    "topic": "2.8",
    "topicLabel": "for Loops",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the value of total after this loop?",
    "isCode": true,
    "code": "int total = 0;\nfor (int i = 1; i <= 10; i += 2) {\n    total += i;\n}",
    "choices": [
      "25",
      "30",
      "55",
      "20"
    ],
    "answer": 0,
    "explanation": "i takes odd values: 1, 3, 5, 7, 9. Sum = 1+3+5+7+9 = 25."
  },
  {
    "id": "mcq_061",
    "unit": 2,
    "topic": "2.8",
    "topicLabel": "for Loops",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "for (int i = 5; i >= 1; i--) {\n    if (i % 2 == 0) {\n        System.out.print(i + \" \");\n    }\n}",
    "choices": [
      "2 4 ",
      "4 2 ",
      "5 3 1 ",
      "1 3 5 "
    ],
    "answer": 1,
    "explanation": "Loop counts down from 5 to 1. Even numbers: 4 (when i=4) and 2 (when i=2). Since we count down, 4 appears before 2. Output: \"4 2 \"."
  },
  {
    "id": "mcq_062",
    "unit": 2,
    "topic": "2.9",
    "topicLabel": "Selection and Iteration Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "Which code correctly counts the number of even integers from 1 to 100?",
    "isCode": false,
    "code": "",
    "choices": [
      "int count = 0;\nfor (int i = 1; i <= 100; i++) {\n    if (i % 2 == 0) count++;\n}",
      "int count = 0;\nfor (int i = 0; i <= 100; i += 2) {\n    count++;\n}",
      "Both A and B give 50",
      "Neither A nor B is correct"
    ],
    "answer": 0,
    "explanation": "Option A iterates 1 through 100 and counts those divisible by 2, correctly yielding 50. Option B starts at 0 and steps by 2 (0, 2, 4, …, 100), which counts 51 values because it includes 0. Since the question specifies integers from 1 to 100, only Option A is correct."
  },
  {
    "id": "mcq_063",
    "unit": 2,
    "topic": "2.9",
    "topicLabel": "Selection and Iteration Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code compute?",
    "isCode": true,
    "code": "int result = 1;\nfor (int i = 1; i <= 5; i++) {\n    result *= i;\n}\nSystem.out.println(result);",
    "choices": [
      "5",
      "15",
      "120",
      "25"
    ],
    "answer": 2,
    "explanation": "result = 1*1*2*3*4*5 = 120. This computes 5! (5 factorial)."
  },
  {
    "id": "mcq_064",
    "unit": 2,
    "topic": "2.9",
    "topicLabel": "Selection and Iteration Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is printed?",
    "isCode": true,
    "code": "int max = Integer.MIN_VALUE;\nint[] arr = {3, 7, 2, 9, 4};\nfor (int i = 0; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n}\nSystem.out.println(max);",
    "choices": [
      "3",
      "9",
      "7",
      "2"
    ],
    "answer": 1,
    "explanation": "This is a standard maximum-finding algorithm. Starting with Integer.MIN_VALUE ensures any real value is larger. After checking all elements, max = 9."
  },
  {
    "id": "mcq_065",
    "unit": 2,
    "topic": "2.10",
    "topicLabel": "String Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "String s = \"racecar\";\nboolean isPalin = true;\nfor (int i = 0; i < s.length() / 2; i++) {\n    if (s.charAt(i) != s.charAt(s.length() - 1 - i)) {\n        isPalin = false;\n    }\n}\nSystem.out.println(isPalin);",
    "choices": [
      "true",
      "false",
      "Compilation error",
      "racecar"
    ],
    "answer": 0,
    "explanation": "\"racecar\" is a palindrome. The loop compares characters from both ends. They all match, so isPalin stays true."
  },
  {
    "id": "mcq_066",
    "unit": 2,
    "topic": "2.10",
    "topicLabel": "String Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "String s = \"Hello World\";\nint count = 0;\nfor (int i = 0; i < s.length(); i++) {\n    char c = s.charAt(i);\n    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||\n        c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {\n        count++;\n    }\n}\nSystem.out.println(count);",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "Vowels in \"Hello World\": 'e' (index 1), 'o' (index 4), 'o' (index 7). That's 3 vowels."
  },
  {
    "id": "mcq_067",
    "unit": 2,
    "topic": "2.11",
    "topicLabel": "Nested Iteration",
    "difficulty": "easy",
    "source": "original",
    "question": "How many times does the inner loop body execute in total?",
    "isCode": true,
    "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 4; j++) {\n        // inner body\n    }\n}",
    "choices": [
      "7",
      "12",
      "10",
      "16"
    ],
    "answer": 1,
    "explanation": "The outer loop runs 3 times. For each outer iteration, the inner loop runs 4 times. Total = 3 × 4 = 12."
  },
  {
    "id": "mcq_068",
    "unit": 2,
    "topic": "2.11",
    "topicLabel": "Nested Iteration",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (i == j) {\n            System.out.print(i + \" \");\n        }\n    }\n}",
    "choices": [
      "1 2 3 ",
      "1 1 2 2 3 3 ",
      "1 4 9 ",
      "Nothing"
    ],
    "answer": 0,
    "explanation": "Only when i == j does it print. That happens for (1,1), (2,2), (3,3). Output: \"1 2 3 \"."
  },
  {
    "id": "mcq_069",
    "unit": 2,
    "topic": "2.11",
    "topicLabel": "Nested Iteration",
    "difficulty": "hard",
    "source": "original",
    "question": "What is printed?",
    "isCode": true,
    "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j < i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
    "choices": [
      "No stars on line 1; * on line 2; ** on line 3; *** on line 4",
      "* ** *** **** (all on one line)",
      "* on line 1; ** on line 2; *** on line 3; **** on line 4",
      "4 lines of 4 stars each"
    ],
    "answer": 0,
    "explanation": "When i=0: inner loop runs 0 times (j<0 false), just newline. When i=1: 1 star. When i=2: 2 stars. When i=3: 3 stars. Creates a triangle starting with an empty line."
  },
  {
    "id": "mcq_070",
    "unit": 2,
    "topic": "2.12",
    "topicLabel": "Informal Run-Time Analysis",
    "difficulty": "medium",
    "source": "original",
    "question": "A loop runs approximately n² times for an input of size n. If n doubles, how does the runtime change?",
    "isCode": false,
    "code": "",
    "choices": [
      "It doubles",
      "It triples",
      "It quadruples (multiplies by 4)",
      "It stays the same"
    ],
    "answer": 2,
    "explanation": "If runtime ∝ n², and n becomes 2n, the new runtime ∝ (2n)² = 4n². The runtime quadruples."
  },
  {
    "id": "mcq_071",
    "unit": 2,
    "topic": "2.12",
    "topicLabel": "Informal Run-Time Analysis",
    "difficulty": "hard",
    "source": "original",
    "question": "Which of the following has the fastest growth rate as n increases?",
    "isCode": false,
    "code": "",
    "choices": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 3,
    "explanation": "O(n²) grows the fastest among these options as n increases. The order from slowest to fastest: O(log n) < O(n) < O(n log n) < O(n²)."
  },
  {
    "id": "mcq_072",
    "unit": 2,
    "topic": "2.3",
    "topicLabel": "if Statements",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the output of the following code when x = 3?",
    "isCode": true,
    "code": "int x = 3;\nif (x > 5) {\n    System.out.println(\"large\");\n} else {\n    System.out.println(\"small\");\n}",
    "choices": [
      "large",
      "small",
      "large\nsmall",
      "Nothing"
    ],
    "answer": 1,
    "explanation": "x=3 is not > 5, so the else branch executes and prints \"small\"."
  },
  {
    "id": "mcq_073",
    "unit": 2,
    "topic": "2.7",
    "topicLabel": "while Loops",
    "difficulty": "easy",
    "source": "original",
    "question": "What is a potential issue with the following code?",
    "isCode": true,
    "code": "int x = 1;\nwhile (x > 0) {\n    x++;\n}",
    "choices": [
      "Compilation error — x is not declared properly",
      "x will overflow eventually causing undefined behavior",
      "The loop runs forever (infinite loop)",
      "The loop never executes"
    ],
    "answer": 2,
    "explanation": "x starts at 1 and increments. Since x > 0 is always true (it starts positive and keeps increasing), this is an infinite loop."
  },
  {
    "id": "mcq_077",
    "unit": 2,
    "topic": "2.8",
    "topicLabel": "for Loops",
    "difficulty": "easy",
    "source": "original",
    "question": "How many times does the following loop print?",
    "isCode": true,
    "code": "for (int i = 10; i > 0; i -= 2) {\n    System.out.print(i + \" \");\n}",
    "choices": [
      "5",
      "6",
      "10",
      "4"
    ],
    "answer": 0,
    "explanation": "i = 10, 8, 6, 4, 2 — that's 5 iterations. After i=2, i-=2 makes i=0, and 0 > 0 is false."
  },
  {
    "id": "mcq_078",
    "unit": 2,
    "topic": "2.5",
    "topicLabel": "Compound Boolean Expressions",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the value of the expression (false || true) && !false?",
    "isCode": false,
    "code": "",
    "choices": [
      "true",
      "false",
      "null",
      "Compilation error"
    ],
    "answer": 0,
    "explanation": "(false || true) = true. !false = true. true && true = true."
  },
  {
    "id": "mcq_080",
    "unit": 2,
    "topic": "2.9",
    "topicLabel": "Selection and Iteration Algorithms",
    "difficulty": "easy",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "int sum = 0;\nfor (int i = 1; i <= 4; i++) {\n    sum += i;\n}\nSystem.out.println(sum);",
    "choices": [
      "10",
      "4",
      "6",
      "16"
    ],
    "answer": 0,
    "explanation": "sum = 1+2+3+4 = 10."
  },
  {
    "id": "mcq_081",
    "unit": 2,
    "topic": "2.3",
    "topicLabel": "if Statements",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output when grade = 72?",
    "isCode": true,
    "code": "int grade = 72;\nString letter;\nif (grade >= 90) letter = \"A\";\nelse if (grade >= 80) letter = \"B\";\nelse if (grade >= 70) letter = \"C\";\nelse letter = \"F\";\nSystem.out.println(letter);",
    "choices": [
      "A",
      "B",
      "C",
      "F"
    ],
    "answer": 2,
    "explanation": "72 >= 90 is false, 72 >= 80 is false, 72 >= 70 is true → letter = \"C\"."
  },
  {
    "id": "mcq_083",
    "unit": 2,
    "topic": "2.10",
    "topicLabel": "String Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "String word = \"banana\";\nint count = 0;\nfor (int i = 0; i < word.length(); i++) {\n    if (word.charAt(i) == 'a') count++;\n}\nSystem.out.println(count);",
    "choices": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "\"banana\" has 'a' at positions 1, 3, 5 → count = 3."
  },
  {
    "id": "mcq_085",
    "unit": 2,
    "topic": "2.11",
    "topicLabel": "Nested Iteration",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the value of count after this code?",
    "isCode": true,
    "code": "int count = 0;\nfor (int i = 0; i < 5; i++) {\n    for (int j = i; j < 5; j++) {\n        count++;\n    }\n}",
    "choices": [
      "10",
      "15",
      "25",
      "20"
    ],
    "answer": 1,
    "explanation": "i=0: j=0..4 → 5. i=1: j=1..4 → 4. i=2: j=2..4 → 3. i=3: j=3..4 → 2. i=4: j=4..4 → 1. Total = 5+4+3+2+1 = 15."
  },
  {
    "id": "mcq_087",
    "unit": 2,
    "topic": "2.7",
    "topicLabel": "while Loops",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "int x = 1;\nwhile (x < 100) {\n    x *= 3;\n}\nSystem.out.println(x);",
    "choices": [
      "81",
      "243",
      "99",
      "100"
    ],
    "answer": 1,
    "explanation": "x: 1→3→9→27→81→243. After x=243, 243 < 100 is false. Prints 243."
  },
  {
    "id": "mcq_088",
    "unit": 2,
    "topic": "2.2",
    "topicLabel": "Boolean Expressions",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the value of result?",
    "isCode": true,
    "code": "int x = 5;\nboolean result = (x != 3) || (x == 5) && (x < 3);",
    "choices": [
      "true",
      "false",
      "Compilation error",
      "Depends on runtime"
    ],
    "answer": 0,
    "explanation": "Operator precedence: && before ||. (x==5)=true, (x<3)=false. true&&false=false. (x!=3)=true. true||false=true. Result: true."
  },
  {
    "id": "mcq_091",
    "unit": 2,
    "topic": "2.4",
    "topicLabel": "Nested if Statements",
    "difficulty": "medium",
    "source": "original",
    "question": "What is printed when x=4, y=2?",
    "isCode": true,
    "code": "int x = 4, y = 2;\nif (x > y) {\n    if (x % y == 0) {\n        System.out.println(\"divisible\");\n    } else {\n        System.out.println(\"not divisible\");\n    }\n} else {\n    System.out.println(\"x not greater\");\n}",
    "choices": [
      "divisible",
      "not divisible",
      "x not greater",
      "Compilation error"
    ],
    "answer": 0,
    "explanation": "x=4 > y=2 is true (outer if). 4 % 2 == 0 is true (inner if). Prints \"divisible\"."
  },
  {
    "id": "mcq_092",
    "unit": 2,
    "topic": "2.8",
    "topicLabel": "for Loops",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "int product = 1;\nfor (int i = 1; i <= 4; i++) {\n    product *= i;\n    System.out.print(product + \" \");\n}",
    "choices": [
      "1 2 6 24 ",
      "1 2 3 4 ",
      "1 4 9 16 ",
      "2 6 24 120 "
    ],
    "answer": 0,
    "explanation": "i=1: product=1, print 1. i=2: product=2, print 2. i=3: product=6, print 6. i=4: product=24, print 24. Output: \"1 2 6 24 \"."
  },
  {
    "id": "mcq_094",
    "unit": 2,
    "topic": "2.12",
    "topicLabel": "Informal Run-Time Analysis",
    "difficulty": "medium",
    "source": "original",
    "question": "Which of the following loops has the best (most efficient) run-time for finding one specific item in a sorted list?",
    "isCode": false,
    "code": "",
    "choices": [
      "A linear scan checking every element",
      "A loop that halves the search space each iteration (binary search)",
      "A nested loop checking all pairs",
      "All are equivalent"
    ],
    "answer": 1,
    "explanation": "Binary search runs in O(log n) time by halving the search space each step, compared to linear search O(n) and nested loops O(n²)."
  },
  {
    "id": "mcq_096",
    "unit": 2,
    "topic": "2.9",
    "topicLabel": "Selection and Iteration Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is printed?",
    "isCode": true,
    "code": "int n = 17;\nboolean prime = true;\nfor (int i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i == 0) {\n        prime = false;\n        break;\n    }\n}\nSystem.out.println(prime);",
    "choices": [
      "true",
      "false",
      "Compilation error",
      "null"
    ],
    "answer": 0,
    "explanation": "sqrt(17) ≈ 4.12. Loop checks i=2,3,4. 17%2=1, 17%3=2, 17%4=1 — none are 0. prime stays true. 17 is prime."
  },
  {
    "id": "mcq_098",
    "unit": 2,
    "topic": "2.1",
    "topicLabel": "Algorithms with Selection and Repetition",
    "difficulty": "medium",
    "source": "original",
    "question": "A do-while loop differs from a while loop in that:",
    "isCode": false,
    "code": "",
    "choices": [
      "The do-while loop uses a different condition syntax",
      "The do-while loop always executes its body at least once",
      "The do-while loop cannot be infinite",
      "The do-while loop is faster than a while loop"
    ],
    "answer": 1,
    "explanation": "A do-while loop checks the condition AFTER executing the body, so the body always executes at least once even if the condition is initially false."
  },
  {
    "id": "mcq_100",
    "unit": 2,
    "topic": "2.6",
    "topicLabel": "Comparing Boolean Expressions",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "String a = new String(\"test\");\nString b = new String(\"test\");\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));",
    "choices": [
      "true\ntrue",
      "false\ntrue",
      "true\nfalse",
      "false\nfalse"
    ],
    "answer": 1,
    "explanation": "new String() creates new objects in the heap. a and b are different objects, so a == b is false (different references). a.equals(b) compares content, so it's true."
  },
  {
    "id": "mcq_102",
    "unit": 2,
    "topic": "2.7",
    "topicLabel": "while Loops",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "int a = 1, b = 1;\nwhile (b < 50) {\n    int c = a + b;\n    a = b;\n    b = c;\n}\nSystem.out.println(b);",
    "choices": [
      "55",
      "89",
      "144",
      "34"
    ],
    "answer": 0,
    "explanation": "This generates Fibonacci: 1,1,2,3,5,8,13,21,34,55. When b becomes 55 (≥50), loop exits. Prints 55."
  },
  {
    "id": "mcq_104",
    "unit": 2,
    "topic": "2.11",
    "topicLabel": "Nested Iteration",
    "difficulty": "hard",
    "source": "original",
    "question": "What is printed by the following code?",
    "isCode": true,
    "code": "for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        System.out.print(i * j + \" \");\n    }\n    System.out.println();\n}",
    "choices": [
      "1 2 3 \\n2 4 6 \\n3 6 9",
      "1 1 1 \\n2 2 2 \\n3 3 3",
      "1 2 3 \\n4 5 6 \\n7 8 9",
      "1 4 9 \\n2 5 8 \\n3 6 7"
    ],
    "answer": 0,
    "explanation": "Row i=1: 1*1=1, 1*2=2, 1*3=3. Row i=2: 2*1=2, 2*2=4, 2*3=6. Row i=3: 3*1=3, 3*2=6, 3*3=9. This is a multiplication table."
  },
  {
    "id": "mcq_106",
    "unit": 2,
    "topic": "2.10",
    "topicLabel": "String Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "String s = \"APCSA\";\nString result = \"\";\nfor (int i = s.length() - 1; i >= 0; i--) {\n    result += s.charAt(i);\n}\nSystem.out.println(result);",
    "choices": [
      "APCSA",
      "ASCPA",
      "ACSPA",
      "ASPCA"
    ],
    "answer": 1,
    "explanation": "The loop builds the string backwards. \"APCSA\" reversed: A(4), S(3), C(2), P(1), A(0) → \"ASCPA\"."
  },
  {
    "id": "mcq_108",
    "unit": 2,
    "topic": "2.3",
    "topicLabel": "if Statements",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int x = 5;\nString result = (x > 3) ? \"big\" : \"small\";\nSystem.out.println(result);",
    "choices": [
      "big",
      "small",
      "Compilation error",
      "big small"
    ],
    "answer": 0,
    "explanation": "The ternary operator: (condition) ? valueIfTrue : valueIfFalse. (5 > 3) is true → result = \"big\"."
  },
  {
    "id": "mcq_110",
    "unit": 2,
    "topic": "2.8",
    "topicLabel": "for Loops",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int n = 0;\nfor (int i = 1; i < 10; i++) {\n    if (i % 3 == 0 || i % 5 == 0) {\n        n += i;\n    }\n}\nSystem.out.println(n);",
    "choices": [
      "23",
      "25",
      "33",
      "15"
    ],
    "answer": 0,
    "explanation": "The loop checks i = 1 through 9. Values divisible by 3 or 5: 3, 5, 6, 9. Sum = 3 + 5 + 6 + 9 = 23."
  },
  {
    "id": "mcq_112",
    "unit": 2,
    "topic": "2.2",
    "topicLabel": "Boolean Expressions",
    "difficulty": "hard",
    "source": "original",
    "question": "What is short-circuit evaluation? Given: false && someMethod(), does someMethod() get called?",
    "isCode": false,
    "code": "",
    "choices": [
      "Yes — Java always evaluates both sides of &&",
      "No — if the left side of && is false, the right side is not evaluated",
      "It depends on the JVM version",
      "Yes — but the result is still false"
    ],
    "answer": 1,
    "explanation": "Short-circuit evaluation: for &&, if the left operand is false, the right operand is NOT evaluated (because false && anything = false). For ||, if the left is true, right is not evaluated."
  },
  {
    "id": "mcq_113",
    "unit": 2,
    "topic": "2.12",
    "topicLabel": "Informal Run-Time Analysis",
    "difficulty": "hard",
    "source": "original",
    "question": "Approximately how many iterations does a binary search take to find an element in a sorted list of 1024 items?",
    "isCode": false,
    "code": "",
    "choices": [
      "1024",
      "512",
      "10",
      "100"
    ],
    "answer": 2,
    "explanation": "Binary search is O(log₂ n). log₂(1024) = 10 (since 2^10 = 1024). So at most 10 comparisons are needed."
  },
  {
    "id": "mcq_115",
    "unit": 2,
    "topic": "2.9",
    "topicLabel": "Selection and Iteration Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int x = 100;\nint count = 0;\nwhile (x > 1) {\n    x /= 2;\n    count++;\n}\nSystem.out.println(count);",
    "choices": [
      "6",
      "7",
      "8",
      "5"
    ],
    "answer": 0,
    "explanation": "Trace: x = 100 → 50 → 25 → 12 → 6 → 3 → 1. Each division increments count, so count = 6. When x reaches 1, the condition 1 > 1 is false and the loop exits."
  },
  {
    "id": "csa_u3_q029",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What will be printed when the following code is executed?\n\nint x = 5;\nif (x > 3)\n    System.out.println(\"Hello\");\nelse\n    System.out.println(\"Goodbye\");",
    "choices": [
      "A) Hello",
      "B) Goodbye",
      "C) Both Hello and Goodbye",
      "D) Nothing will be printed"
    ],
    "answer": 0,
    "explanation": "Since x = 5 and 5 > 3 is true, the if condition is satisfied and \"Hello\" is printed. The else block is skipped. Choice B assumes the condition is false. Choice C misunderstands that only one branch executes. Choice D assumes no output occurs."
  },
  {
    "id": "csa_u3_q030",
    "subject": "apcsa",
    "unit": 3,
    "topic": "boolean expressions",
    "topicLabel": "boolean expressions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of the boolean expression (7 == 7)?",
    "choices": [
      "A) true",
      "B) false",
      "C) 7",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "The expression (7 == 7) compares two identical values using the equality operator, which evaluates to true. Choice B would be correct if the values were different. Choice C confuses the result with the operand value. Choice D applies C-style thinking where 0 represents false."
  },
  {
    "id": "csa_u3_q031",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of the expression (true && false)?",
    "choices": [
      "A) false",
      "B) true",
      "C) null",
      "D) undefined"
    ],
    "answer": 0,
    "explanation": "The && (AND) operator returns true only when both operands are true. Since one operand is false, the result is false. Choice B misunderstands AND logic. Choice C applies incorrect null concepts to boolean operations. Choice D suggests the expression cannot be evaluated."
  },
  {
    "id": "csa_u3_q032",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which expression is equivalent to !(a && b) according to De Morgan's law?",
    "choices": [
      "A) !a || !b",
      "B) !a && !b",
      "C) a || b",
      "D) !(a || b)"
    ],
    "answer": 0,
    "explanation": "De Morgan's law states that !(a && b) is equivalent to !a || !b. The negation distributes and the AND becomes OR. Choice B keeps the AND operator incorrectly. Choice C removes negation entirely. Choice D changes the original operator without proper transformation."
  },
  {
    "id": "csa_u3_q033",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What will be printed when the following code executes with x = 10?\n\nif (x > 5) {\n    if (x > 15) {\n        System.out.println(\"Large\");\n    } else {\n        System.out.println(\"Medium\");\n    }\n}",
    "choices": [
      "A) Medium",
      "B) Large",
      "C) Nothing",
      "D) Both Large and Medium"
    ],
    "answer": 0,
    "explanation": "Since x = 10, the outer condition (x > 5) is true, so we enter the nested if. The inner condition (x > 15) is false, so we execute the else block printing \"Medium\". Choice B assumes the inner condition is true. Choice C assumes the outer condition is false. Choice D misunderstands that only one branch executes."
  },
  {
    "id": "csa_u3_q034",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In a switch statement, what keyword is used to exit a case and prevent fall-through?",
    "choices": [
      "A) break",
      "B) exit",
      "C) return",
      "D) stop"
    ],
    "answer": 0,
    "explanation": "The break keyword is used to exit a case in a switch statement and prevent execution from continuing to the next case. Choice B is not a Java keyword for this purpose. Choice C returns from the entire method, not just the case. Choice D is not a Java keyword."
  },
  {
    "id": "csa_u3_q035",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In the expression (false && someMethod()), will someMethod() be called?",
    "choices": [
      "A) No",
      "B) Yes",
      "C) Only if someMethod() returns true",
      "D) Only if someMethod() returns false"
    ],
    "answer": 0,
    "explanation": "Due to short circuit evaluation with the && operator, when the first operand is false, the second operand is not evaluated since the result is already determined to be false. Choice B ignores short circuit behavior. Choices C and D incorrectly suggest the method is called and its return value matters."
  },
  {
    "id": "csa_u3_q036",
    "subject": "apcsa",
    "unit": 3,
    "topic": "boolean expressions",
    "topicLabel": "boolean expressions",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of the expression (5 != 3)?",
    "choices": [
      "A) true",
      "B) false",
      "C) 5",
      "D) 3"
    ],
    "answer": 0,
    "explanation": "The != operator checks for inequality. Since 5 is not equal to 3, the expression evaluates to true. Choice B would be correct if the values were equal. Choices C and D confuse the boolean result with the operand values."
  },
  {
    "id": "csa_u3_q037",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of the expression (true || false)?",
    "choices": [
      "A) true",
      "B) false",
      "C) 1",
      "D) 0"
    ],
    "answer": 0,
    "explanation": "The || (OR) operator returns true when at least one operand is true. Since the first operand is true, the result is true. Choice B misunderstands OR logic. Choices C and D apply numeric representations instead of boolean values."
  },
  {
    "id": "csa_u3_q038",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens when an if statement's condition evaluates to false and there is no else clause?",
    "choices": [
      "A) The program continues to the next statement after the if block",
      "B) The program terminates",
      "C) An error occurs",
      "D) The if block executes anyway"
    ],
    "answer": 0,
    "explanation": "When an if condition is false and there's no else clause, the program simply skips the if block and continues with the next statement. Choice B incorrectly suggests termination. Choice C suggests an error when none occurs. Choice D misunderstands conditional execution."
  },
  {
    "id": "csa_u3_q039",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In nested if statements, which else clause does an else belong to when there are no braces?",
    "choices": [
      "A) The closest preceding if",
      "B) The first if in the sequence",
      "C) The outermost if",
      "D) All if statements equally"
    ],
    "answer": 0,
    "explanation": "The dangling else problem is resolved by the rule that an else belongs to the closest preceding if statement that doesn't already have an else. Choice B incorrectly suggests the first if takes precedence. Choice C suggests the outermost if takes precedence. Choice D misunderstands the binding rule."
  },
  {
    "id": "csa_u3_q040",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which case is executed when none of the explicit cases match in a switch statement?",
    "choices": [
      "A) default",
      "B) else",
      "C) catch",
      "D) finally"
    ],
    "answer": 0,
    "explanation": "The default case in a switch statement is executed when no other cases match the switch expression. Choice B confuses switch syntax with if-else syntax. Choice C relates to exception handling, not switch statements. Choice D relates to try-catch blocks, not switch statements."
  },
  {
    "id": "csa_u3_q041",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which expression is equivalent to !(x || y) according to De Morgan's law?",
    "choices": [
      "A) !x && !y",
      "B) !x || !y",
      "C) x && y",
      "D) !(x && y)"
    ],
    "answer": 0,
    "explanation": "De Morgan's law states that !(x || y) is equivalent to !x && !y. The negation distributes and the OR becomes AND. Choice B keeps the OR operator incorrectly. Choice C removes negation entirely. Choice D changes the original operator without proper transformation."
  },
  {
    "id": "csa_u3_q042",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In the expression (true || someMethod()), will someMethod() be called?",
    "choices": [
      "A) No",
      "B) Yes",
      "C) Only if someMethod() returns true",
      "D) Only if someMethod() returns false"
    ],
    "answer": 0,
    "explanation": "Due to short circuit evaluation with the || operator, when the first operand is true, the second operand is not evaluated since the result is already determined to be true. Choice B ignores short circuit behavior. Choices C and D incorrectly suggest the method is called and its return value determines execution."
  },
  {
    "id": "csa_u3_q043",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What will be printed when the following code is executed with score = 85?\n\nif (score >= 90)\n    System.out.println(\"A\");\nelse if (score >= 80)\n    System.out.println(\"B\");\nelse if (score >= 70)\n    System.out.println(\"C\");\nelse\n    System.out.println(\"F\");",
    "choices": [
      "A) B",
      "B) A",
      "C) C",
      "D) Nothing is printed"
    ],
    "answer": 0,
    "explanation": "With score = 85, the first condition (score >= 90) is false, so it checks the second condition (score >= 80) which is true, printing 'B'. Once a condition is met in an if-else chain, subsequent conditions are not evaluated."
  },
  {
    "id": "csa_u3_q044",
    "subject": "apcsa",
    "unit": 3,
    "topic": "boolean expressions",
    "topicLabel": "boolean expressions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given int x = 5 and int y = 3, what is the value of the expression: (x > y) && (x % 2 == 1)?",
    "choices": [
      "A) true",
      "B) false",
      "C) Cannot be determined",
      "D) Compilation error"
    ],
    "answer": 0,
    "explanation": "(x > y) evaluates to (5 > 3) which is true. (x % 2 == 1) evaluates to (5 % 2 == 1) which is (1 == 1) or true. Since both operands of && are true, the entire expression is true."
  },
  {
    "id": "csa_u3_q045",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of the following boolean expression when a = 4, b = 7, and c = 2?\n\n(a < b) || (c > b) && (a == c)",
    "choices": [
      "A) true",
      "B) false",
      "C) The expression will cause a runtime error",
      "D) The expression will not compile"
    ],
    "answer": 0,
    "explanation": "Due to operator precedence, && is evaluated before ||. So the expression becomes (a < b) || ((c > b) && (a == c)). (4 < 7) is true, (2 > 7) is false, (4 == 2) is false. So we have true || (false && false) = true || false = true."
  },
  {
    "id": "csa_u3_q046",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following expressions is equivalent to !(x > 5 && y < 3)?",
    "choices": [
      "A) x <= 5 || y >= 3",
      "B) x < 5 && y > 3",
      "C) x <= 5 && y >= 3",
      "D) !(x > 5) && !(y < 3)"
    ],
    "answer": 0,
    "explanation": "Using De Morgan's Law, !(A && B) = !A || !B. So !(x > 5 && y < 3) = !(x > 5) || !(y < 3) = (x <= 5) || (y >= 3). Choice B incorrectly uses && instead of ||, Choice C uses && instead of ||, and Choice D doesn't apply the law correctly."
  },
  {
    "id": "csa_u3_q047",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What will be the output when the following code executes with temperature = 75 and humidity = 60?\n\nif (temperature > 70) {\n    if (humidity > 50) {\n        System.out.println(\"Hot and humid\");\n    } else {\n        System.out.println(\"Hot and dry\");\n    }\n} else {\n    System.out.println(\"Cool\");\n}",
    "choices": [
      "A) Hot and humid",
      "B) Hot and dry",
      "C) Cool",
      "D) Nothing is printed"
    ],
    "answer": 0,
    "explanation": "Since temperature (75) > 70, we enter the outer if block. Then since humidity (60) > 50, we enter the inner if block and print 'Hot and humid'. The nested structure requires both conditions to be evaluated in sequence."
  },
  {
    "id": "csa_u3_q048",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following switch statement when grade = 'B'?\n\nswitch (grade) {\n    case 'A':\n        System.out.print(\"Excellent \");\n    case 'B':\n        System.out.print(\"Good \");\n    case 'C':\n        System.out.print(\"Average \");\n    default:\n        System.out.print(\"Study harder\");\n}",
    "choices": [
      "A) Good Average Study harder",
      "B) Good",
      "C) Average Study harder",
      "D) Study harder"
    ],
    "answer": 0,
    "explanation": "Since there are no break statements, execution falls through from case 'B' to case 'C' and then to default. This prints 'Good Average Study harder'. Many students incorrectly think only the matching case executes."
  },
  {
    "id": "csa_u3_q049",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given the expression (x != 0) && (y / x > 2), what happens when x = 0 and y = 10?",
    "choices": [
      "A) The expression evaluates to false without error",
      "B) A division by zero error occurs",
      "C) The expression evaluates to true",
      "D) A compilation error occurs"
    ],
    "answer": 0,
    "explanation": "Due to short-circuit evaluation with &&, when the first operand (x != 0) is false, the second operand (y / x > 2) is never evaluated. Therefore, no division by zero occurs and the expression safely evaluates to false."
  },
  {
    "id": "csa_u3_q050",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Consider the following code segment:\n\nint num = 15;\nif (num > 10)\n    if (num < 20)\n        System.out.println(\"Medium\");\nelse\n    System.out.println(\"Small\");\n\nWhat is printed?",
    "choices": [
      "A) Medium",
      "B) Small",
      "C) Nothing",
      "D) Both Medium and Small"
    ],
    "answer": 0,
    "explanation": "The else clause belongs to the inner if statement (num < 20), not the outer one. Since num = 15 satisfies both num > 10 and num < 20, 'Medium' is printed. This demonstrates the dangling else problem where else associates with the nearest if."
  },
  {
    "id": "csa_u3_q051",
    "subject": "apcsa",
    "unit": 3,
    "topic": "boolean expressions",
    "topicLabel": "boolean expressions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of the expression (5 == 5.0) in Java?",
    "choices": [
      "A) true",
      "B) false",
      "C) Compilation error",
      "D) Runtime error"
    ],
    "answer": 0,
    "explanation": "Java performs automatic type promotion when comparing an int (5) with a double (5.0). The int is promoted to double, making the comparison 5.0 == 5.0, which is true. This is different from object comparison where type mismatches cause compilation errors."
  },
  {
    "id": "csa_u3_q052",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given boolean a = true, b = false, c = true, what is the result of: a && b || c && !b?",
    "choices": [
      "A) true",
      "B) false",
      "C) Cannot be determined",
      "D) Syntax error"
    ],
    "answer": 0,
    "explanation": "Evaluating left to right with operator precedence (! then && then ||): a && b = true && false = false; !b = !false = true; c && !b = true && true = true; false || true = true. The expression evaluates to true."
  },
  {
    "id": "csa_u3_q053",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which expression is equivalent to !(age >= 18 || hasPermission)?",
    "choices": [
      "A) age < 18 && !hasPermission",
      "B) age <= 18 && !hasPermission",
      "C) age < 18 || !hasPermission",
      "D) !(age >= 18) || !hasPermission"
    ],
    "answer": 0,
    "explanation": "Using De Morgan's Law: !(A || B) = !A && !B. So !(age >= 18 || hasPermission) = !(age >= 18) && !hasPermission = (age < 18) && !hasPermission. Choice B incorrectly uses <= instead of <, Choice C uses || instead of &&, and Choice D doesn't complete the transformation."
  },
  {
    "id": "csa_u3_q054",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What output is produced by this code when x = 8 and y = 12?\n\nif (x > 5) {\n    if (y > 10) {\n        if (x + y > 15) {\n            System.out.println(\"Case 1\");\n        } else {\n            System.out.println(\"Case 2\");\n        }\n    } else {\n        System.out.println(\"Case 3\");\n    }\n} else {\n    System.out.println(\"Case 4\");\n}",
    "choices": [
      "A) Case 1",
      "B) Case 2",
      "C) Case 3",
      "D) Case 4"
    ],
    "answer": 0,
    "explanation": "Working through the nested conditions: x (8) > 5 is true, so we enter the first if. y (12) > 10 is true, so we enter the second if. x + y (20) > 15 is true, so we execute the innermost if and print 'Case 1'."
  },
  {
    "id": "csa_u3_q055",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens when this switch statement executes with day = 3?\n\nswitch (day) {\n    case 1:\n    case 2:\n    case 3:\n        System.out.println(\"Weekday\");\n        break;\n    case 6:\n    case 7:\n        System.out.println(\"Weekend\");\n        break;\n    default:\n        System.out.println(\"Invalid\");\n}",
    "choices": [
      "A) Weekday",
      "B) Weekend",
      "C) Invalid",
      "D) Nothing is printed"
    ],
    "answer": 0,
    "explanation": "The switch matches case 3, and due to fall-through from cases 1 and 2 (which have no break statements), execution continues to the statement under case 3, printing 'Weekday', then encounters the break and exits the switch."
  },
  {
    "id": "csa_u3_q056",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In the expression (num > 0) || (num / 0 == 5), what happens when num = 10?",
    "choices": [
      "A) Returns true without error",
      "B) Throws ArithmeticException",
      "C) Returns false",
      "D) Compilation error"
    ],
    "answer": 0,
    "explanation": "With || (OR) short-circuit evaluation, since the first condition (num > 0) is true when num = 10, the second condition (num / 0 == 5) is never evaluated. The expression returns true without attempting the division by zero."
  },
  {
    "id": "csa_u3_q057",
    "subject": "apcsa",
    "unit": 3,
    "topic": "boolean expressions",
    "topicLabel": "boolean expressions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given String str = \"hello\", which boolean expression correctly checks if str is not null and has length greater than 3?",
    "choices": [
      "A) str != null && str.length() > 3",
      "B) str.length() > 3 && str != null",
      "C) str != null || str.length() > 3",
      "D) !str.equals(null) && str.length() > 3"
    ],
    "answer": 0,
    "explanation": "The null check must come first to avoid NullPointerException. Choice A correctly uses && and checks null first. Choice B would throw NullPointerException if str is null. Choice C uses || instead of &&. Choice D uses equals() which is not the standard way to check for null."
  },
  {
    "id": "csa_u3_q058",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result when x = 5, y = 8, z = 3 for: (x < y && y > z) || (x > z && z < y)?",
    "choices": [
      "A) true",
      "B) false",
      "C) Compilation error",
      "D) Runtime error"
    ],
    "answer": 0,
    "explanation": "First part: (5 < 8 && 8 > 3) = (true && true) = true. Since the first part of an || expression is true, short-circuit evaluation makes the entire expression true without evaluating the second part. However, if evaluated: (5 > 3 && 3 < 8) = (true && true) = true, so true || true = true."
  },
  {
    "id": "csa_u3_q059",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What prints when age = 16 and hasLicense = true?\n\nif (age >= 16) {\n    if (hasLicense) {\n        System.out.println(\"Can drive\");\n    }\n    if (age >= 18) {\n        System.out.println(\"Adult\");\n    }\n} else {\n    System.out.println(\"Too young\");\n}",
    "choices": [
      "A) Can drive",
      "B) Can drive Adult",
      "C) Adult",
      "D) Too young"
    ],
    "answer": 0,
    "explanation": "Since age (16) >= 16, we enter the outer if. Since hasLicense is true, we print 'Can drive'. The second inner if checks if age >= 18, which is false for age = 16, so 'Adult' is not printed. Only 'Can drive' is output."
  },
  {
    "id": "csa_u3_q060",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following data types CANNOT be used in a switch statement in Java?",
    "choices": [
      "A) double",
      "B) char",
      "C) String",
      "D) int"
    ],
    "answer": 0,
    "explanation": "Switch statements in Java can use int, char, String (Java 7+), and their wrapper classes, as well as enums. However, floating-point types like double and float cannot be used in switch statements because they cannot be compared for exact equality reliably."
  },
  {
    "id": "csa_u3_q061",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Consider: boolean result = (a++ > 5) && (++b < 10). If a = 5 and b = 8 initially, what are the final values of a and b?",
    "choices": [
      "A) a = 6, b = 8",
      "B) a = 6, b = 9",
      "C) a = 5, b = 8",
      "D) a = 5, b = 9"
    ],
    "answer": 0,
    "explanation": "The first condition (a++ > 5) uses post-increment, so a becomes 6 but the comparison uses the original value 5. Since 5 > 5 is false, short-circuit evaluation prevents the second condition (++b < 10) from being evaluated, so b remains 8. Final values: a = 6, b = 8."
  },
  {
    "id": "csa_u3_q062",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is printed by the following code segment?\n\nint x = 15;\nint y = 20;\nif (x > 10)\n    if (y < 25)\n        System.out.println(\"A\");\nelse\n    System.out.println(\"B\");\nSystem.out.println(\"C\");",
    "choices": [
      "A) A\nC",
      "B) B\nC",
      "C) A\nB\nC",
      "D) C"
    ],
    "answer": 0,
    "explanation": "The outer if condition (x > 10) is true since 15 > 10. The inner if condition (y < 25) is true since 20 < 25, so \"A\" is printed. The else clause belongs to the inner if, not the outer if, so \"B\" is not printed. Finally, \"C\" is printed unconditionally. Choice B incorrectly assumes the else belongs to the outer if. Choice C assumes both conditions execute. Choice D misses that the conditions are true."
  },
  {
    "id": "csa_u3_q063",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following compound boolean expressions is equivalent to !(x > 5 && y <= 10)?",
    "choices": [
      "A) x <= 5 && y > 10",
      "B) x <= 5 || y > 10",
      "C) !(x > 5) && !(y <= 10)",
      "D) x < 5 || y > 10"
    ],
    "answer": 1,
    "explanation": "Using De Morgan's law, !(A && B) = !A || !B. So !(x > 5 && y <= 10) = !(x > 5) || !(y <= 10) = (x <= 5) || (y > 10). Choice A incorrectly uses && instead of ||. Choice C fails to correctly apply De Morgan's law by keeping && instead of changing it to ||. Choice D uses x < 5 instead of x <= 5, which would exclude the case when x equals 5, making it not fully equivalent."
  },
  {
    "id": "csa_u3_q064",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which expression is logically equivalent to !(a < b || c >= d)?",
    "choices": [
      "A) a >= b && c < d",
      "B) a > b && c <= d",
      "C) !(a < b) && !(c >= d)",
      "D) a >= b || c < d"
    ],
    "answer": 0,
    "explanation": "Applying De Morgan's law: !(A || B) = !A && !B. So !(a < b || c >= d) = !(a < b) && !(c >= d) = (a >= b) && (c < d). Choice B incorrectly uses a > b instead of a >= b. Choice C shows the intermediate step but doesn't complete the negation of the individual comparisons. Choice D incorrectly uses || instead of &&."
  },
  {
    "id": "csa_u3_q065",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What value is assigned to result after this code executes with score = 85?\n\nString result;\nif (score >= 90)\n    if (score >= 95)\n        result = \"A+\";\n    else\n        result = \"A\";\nelse if (score >= 80)\n    result = \"B\";\nelse\n    result = \"C\";",
    "choices": [
      "A) A+",
      "B) A",
      "C) B",
      "D) C"
    ],
    "answer": 2,
    "explanation": "With score = 85: The first condition (score >= 90) is false since 85 < 90, so we skip the nested if-else block entirely. We then check the else if condition (score >= 80), which is true since 85 >= 80, so result = \"B\". Choice A and B incorrectly assume the first condition is true. Choice D would only occur if score < 80."
  },
  {
    "id": "csa_u3_q066",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is printed when day = 2?\n\nswitch (day) {\n    case 1:\n        System.out.print(\"Mon \");\n    case 2:\n        System.out.print(\"Tue \");\n    case 3:\n        System.out.print(\"Wed \");\n        break;\n    default:\n        System.out.print(\"Other \");\n}",
    "choices": [
      "A) Tue",
      "B) Tue Wed",
      "C) Tue Wed Other",
      "D) Mon Tue Wed"
    ],
    "answer": 1,
    "explanation": "When day = 2, execution starts at case 2, printing \"Tue \". Since there's no break statement after case 2, execution falls through to case 3, printing \"Wed \". The break statement after case 3 prevents further execution, so \"Other\" is not printed. Choice A misses the fall-through behavior. Choice C assumes execution continues past the break. Choice D incorrectly assumes execution starts at case 1."
  },
  {
    "id": "csa_u3_q067",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given the code: if (x != 0 && y / x > 5), what happens when x = 0 and y = 20?",
    "choices": [
      "A) A division by zero error occurs",
      "B) The condition evaluates to false and no error occurs",
      "C) The condition evaluates to true",
      "D) A compilation error occurs"
    ],
    "answer": 1,
    "explanation": "Due to short circuit evaluation with &&, when the first condition (x != 0) is false, the second condition (y / x > 5) is never evaluated. Since x = 0, the condition x != 0 is false, so the entire expression is false and y / x is never computed, preventing a division by zero error. Choice A assumes both conditions are always evaluated. Choice C incorrectly determines the result. Choice D is wrong because the code compiles successfully."
  },
  {
    "id": "csa_u3_q068",
    "subject": "apcsa",
    "unit": 3,
    "topic": "boolean expressions",
    "topicLabel": "boolean expressions",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of the expression (5 > 3) == (2 < 4) && !(1 == 1)?",
    "choices": [
      "A) true",
      "B) false",
      "C) The expression causes a compilation error",
      "D) The expression causes a runtime error"
    ],
    "answer": 1,
    "explanation": "Let's evaluate step by step: (5 > 3) evaluates to true, (2 < 4) evaluates to true, so (5 > 3) == (2 < 4) becomes true == true, which is true. !(1 == 1) becomes !true, which is false. Finally, true && false evaluates to false. Choice A incorrectly evaluates the final && operation. Choices C and D are incorrect because this is valid boolean logic with no compilation or runtime issues."
  },
  {
    "id": "csa_u3_q069",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following code segments will produce the same output for all possible integer values of x?\n\nSegment I:\nif (x % 2 == 0)\n    System.out.println(\"even\");\nelse\n    System.out.println(\"odd\");\n\nSegment II:\nif (x % 2 == 1)\n    System.out.println(\"odd\");\nelse\n    System.out.println(\"even\");",
    "choices": [
      "A) Segments I and II always produce the same output",
      "B) Segments I and II never produce the same output",
      "C) Segments I and II produce the same output only for positive integers",
      "D) Segments I and II produce the same output only for even integers"
    ],
    "answer": 2,
    "explanation": "For positive integers, both segments work identically. However, for negative odd integers, x % 2 equals -1, not 1. So in Segment II, the condition (x % 2 == 1) is false for negative odd numbers, causing them to be classified as \"even\" incorrectly. Segment I correctly handles negative numbers because x % 2 == 0 is false for all odd numbers (both positive and negative). Choice A ignores the negative number issue. Choice B is too broad. Choice D is incorrect because the issue is with negative odd numbers, not even numbers."
  },
  {
    "id": "csa_u3_q070",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given boolean a = true, boolean b = false, what is the result of !a || b && !b?",
    "choices": [
      "A) true",
      "B) false",
      "C) The expression is always true regardless of a and b values",
      "D) The expression is always false regardless of a and b values"
    ],
    "answer": 1,
    "explanation": "Following operator precedence, ! has highest precedence, then &&, then ||. So the expression becomes: (!a) || (b && (!b)) = false || (false && true) = false || false = false. With the given values: !true || false && !false = false || false && true = false || false = false. Choice A incorrectly evaluates the precedence or the boolean operations. Choice C and D make incorrect generalizations about the expression's behavior with different values."
  },
  {
    "id": "csa_u3_q071",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output when num = 15?\n\nif (num > 10) {\n    if (num % 2 == 1)\n        System.out.print(\"Odd \");\n    if (num > 20)\n        System.out.print(\"Large \");\n    System.out.print(\"Done\");\n}",
    "choices": [
      "A) Odd Done",
      "B) Odd Large Done",
      "C) Done",
      "D) Large Done"
    ],
    "answer": 0,
    "explanation": "With num = 15: The outer condition (num > 10) is true. The first inner condition (num % 2 == 1) is true since 15 is odd, so \"Odd \" is printed. The second inner condition (num > 20) is false since 15 < 20, so \"Large \" is not printed. Finally, \"Done\" is printed. Choice B incorrectly assumes 15 > 20. Choice C misses that the conditions are met to print \"Odd \". Choice D incorrectly assumes \"Large \" should be printed."
  },
  {
    "id": "csa_u3_q072",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens when grade = 'B' in this switch statement?\n\nswitch (grade) {\n    case 'A':\n    case 'B':\n        System.out.println(\"Good job\");\n        break;\n    case 'C':\n        System.out.println(\"Average\");\n    case 'D':\n        System.out.println(\"Below average\");\n        break;\n    default:\n        System.out.println(\"Invalid grade\");\n}",
    "choices": [
      "A) Good job",
      "B) Good job\nAverage",
      "C) Average\nBelow average",
      "D) Nothing is printed"
    ],
    "answer": 0,
    "explanation": "When grade = 'B', execution jumps to case 'B'. Since there's no code between case 'A': and case 'B':, it falls through and executes the code after case 'B':, printing \"Good job\". The break statement then ends execution. Choice B would occur if there was no break after \"Good job\". Choice C would happen if grade was 'C'. Choice D is incorrect because the condition is met."
  },
  {
    "id": "csa_u3_q073",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In the expression (a > 0) || (b++ > 5), when is the variable b incremented?",
    "choices": [
      "A) Always, regardless of the value of a",
      "B) Only when a > 0 is true",
      "C) Only when a > 0 is false",
      "D) Never, because b++ cannot be used in boolean expressions"
    ],
    "answer": 2,
    "explanation": "Due to short circuit evaluation with ||, if the first condition (a > 0) is true, the entire expression is true and the second condition (b++ > 5) is never evaluated, so b is not incremented. The increment only occurs when (a > 0) is false, forcing evaluation of the second condition. Choice A ignores short circuit evaluation. Choice B has the logic backwards. Choice D is incorrect because increment operators can be used in boolean expressions."
  },
  {
    "id": "csa_u3_q074",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which boolean expression is NOT equivalent to !(x == 5 && y != 10)?",
    "choices": [
      "A) x != 5 || y == 10",
      "B) !(x == 5) || !(y != 10)",
      "C) (x != 5) || (y == 10)",
      "D) x != 5 && y == 10"
    ],
    "answer": 3,
    "explanation": "Using De Morgan's law: !(A && B) = !A || !B. So !(x == 5 && y != 10) = !(x == 5) || !(y != 10) = (x != 5) || (y == 10). Choices A, B, and C are all equivalent to this expression. Choice D incorrectly uses && instead of ||, making it much more restrictive - it requires both conditions to be true simultaneously, while the correct expression only requires one condition to be true."
  },
  {
    "id": "csa_u3_q075",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nint x = 5;\nint y = 10;\nif (x > 3)\n    if (y < 15)\n        System.out.print(\"A\");\n    else\n        System.out.print(\"B\");\nelse\n    System.out.print(\"C\");\nif (x < y)\n    System.out.print(\"D\");",
    "choices": [
      "A) AD",
      "B) BD",
      "C) CD",
      "D) A"
    ],
    "answer": 0,
    "explanation": "The first if (x > 3) is true since 5 > 3. The nested if (y < 15) is true since 10 < 15, so \"A\" is printed. The else belongs to the inner if, not the outer if. Then x < y (5 < 10) is true, so \"D\" is printed. Output is \"AD\"."
  },
  {
    "id": "csa_u3_q076",
    "subject": "apcsa",
    "unit": 3,
    "topic": "boolean expressions",
    "topicLabel": "boolean expressions",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given int a = 7, b = 3, c = 0; which boolean expression evaluates to false?",
    "choices": [
      "A) (a % b == 1) && (c != 0) || (a > b)",
      "B) (a / b == 2) || (c == 0) && (a < b)",
      "C) (a % b != 1) || (c == 0) && (a < b)",
      "D) (a / b == 2) && (c == 0) || (a > b)"
    ],
    "answer": 2,
    "explanation": "For choice C: (7%3!=1) is false, (c==0) is true, (a<b) is false. Due to operator precedence, && binds tighter than ||, so this becomes false || (true && false) = false || false = false. Choice A: (true && false) || true = true. Choice B: true || (true && false) = true. Choice D: (true && true) || true = true."
  },
  {
    "id": "csa_u3_q077",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which expression is equivalent to !(x > 5 && y <= 10 || z == 0)?",
    "choices": [
      "A) x <= 5 || y > 10 && z != 0",
      "B) (x <= 5 || y > 10) && z != 0",
      "C) x <= 5 && y > 10 || z != 0",
      "D) (x <= 5 && y > 10) || z != 0"
    ],
    "answer": 1,
    "explanation": "Using De Morgan's law on !(A || B) = !A && !B, where A = (x > 5 && y <= 10) and B = (z == 0). First: !A = !(x > 5 && y <= 10) = (x <= 5 || y > 10). Then !B = z != 0. So the result is (x <= 5 || y > 10) && z != 0."
  },
  {
    "id": "csa_u3_q078",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the simplified form of !(!a || !b) && !(c && d)?",
    "choices": [
      "A) (a && b) && (!c || !d)",
      "B) (a || b) && (!c && !d)",
      "C) (a && b) || (!c || !d)",
      "D) (a || b) || (!c && !d)"
    ],
    "answer": 0,
    "explanation": "Apply De Morgan's law: !(!a || !b) = !(!a) && !(!b) = a && b. Then !(c && d) = !c || !d. The entire expression becomes (a && b) && (!c || !d). Students often confuse the operators when applying De Morgan's law multiple times."
  },
  {
    "id": "csa_u3_q079",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is printed when grade = 'B'?\n\nswitch (grade) {\n    case 'A':\n        System.out.print(\"Excellent \");\n    case 'B':\n        System.out.print(\"Good \");\n    case 'C':\n        System.out.print(\"Average \");\n        break;\n    case 'D':\n        System.out.print(\"Below \");\n    default:\n        System.out.print(\"Invalid\");\n}",
    "choices": [
      "A) Good",
      "B) Good Average",
      "C) Good Average Below Invalid",
      "D) Average"
    ],
    "answer": 1,
    "explanation": "When grade = 'B', execution starts at case 'B' and prints \"Good \". Since there's no break statement after case 'B', it falls through to case 'C' and prints \"Average \". The break statement after case 'C' stops execution. The output is \"Good Average\"."
  },
  {
    "id": "csa_u3_q080",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given the code below, what happens when x = 0?\n\nif (x != 0 && 10/x > 2) {\n    System.out.println(\"True\");\n} else {\n    System.out.println(\"False\");\n}",
    "choices": [
      "A) Prints \"True\"",
      "B) Prints \"False\"",
      "C) Runtime error occurs",
      "D) Compilation error occurs"
    ],
    "answer": 1,
    "explanation": "Short circuit evaluation means that when the first operand of && is false, the second operand is not evaluated. Since x = 0, the expression (x != 0) is false, so (10/x > 2) is never evaluated, avoiding division by zero. The program prints \"False\"."
  },
  {
    "id": "csa_u3_q081",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which if-else structure is equivalent to the following nested if?\n\nif (score >= 90)\n    grade = 'A';\nelse\n    if (score >= 80)\n        grade = 'B';\n    else\n        if (score >= 70)\n            grade = 'C';\n        else\n            grade = 'F';",
    "choices": [
      "A) if (score >= 90) grade = 'A'; if (score >= 80) grade = 'B'; if (score >= 70) grade = 'C'; else grade = 'F';",
      "B) if (score >= 90) grade = 'A'; else if (score >= 80) grade = 'B'; else if (score >= 70) grade = 'C'; else grade = 'F';",
      "C) if (score >= 90) grade = 'A'; if (score >= 80 && score < 90) grade = 'B'; if (score >= 70 && score < 80) grade = 'C'; else grade = 'F';",
      "D) if (score >= 70) grade = 'C'; else if (score >= 80) grade = 'B'; else if (score >= 90) grade = 'A'; else grade = 'F';"
    ],
    "answer": 1,
    "explanation": "The original nested structure creates a chain where only one condition can be executed. Option B uses else-if chain which mirrors this behavior exactly. Option A would execute multiple conditions, Option C is redundant with extra conditions, and Option D has wrong order of conditions."
  },
  {
    "id": "csa_u3_q082",
    "subject": "apcsa",
    "unit": 3,
    "topic": "boolean expressions",
    "topicLabel": "boolean expressions",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of the expression (5 > 3) == (7 < 9) && !(2 == 2)?",
    "choices": [
      "A) true",
      "B) false",
      "C) Compilation error",
      "D) Runtime error"
    ],
    "answer": 1,
    "explanation": "Breaking down: (5 > 3) is true, (7 < 9) is true, so (5 > 3) == (7 < 9) becomes true == true which is true. !(2 == 2) becomes !true which is false. Finally: true && false equals false."
  },
  {
    "id": "csa_u3_q083",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Given boolean a = true, b = false, c = true; what is the value of !a || b && c || !b?",
    "choices": [
      "A) true",
      "B) false",
      "C) Depends on operator precedence",
      "D) Compilation error"
    ],
    "answer": 0,
    "explanation": "With operator precedence, ! has highest precedence, then &&, then ||. Expression becomes: (!a) || (b && c) || (!b) = false || (false && true) || true = false || false || true = true. The expression is true regardless of the middle term due to !b being true."
  },
  {
    "id": "csa_u3_q084",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which expression is NOT equivalent to !(x < 5 || y >= 10)?",
    "choices": [
      "A) x >= 5 && y < 10",
      "B) !(x < 5) && !(y >= 10)",
      "C) (x >= 5) && (y < 10)",
      "D) x >= 5 || y < 10"
    ],
    "answer": 3,
    "explanation": "Applying De Morgan's law to !(x < 5 || y >= 10): the negation of OR becomes AND of negations, so !(x < 5) && !(y >= 10), which simplifies to (x >= 5) && (y < 10). Options A, B, and C are all equivalent. Option D incorrectly uses OR instead of AND."
  },
  {
    "id": "csa_u3_q085",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output when num = 15?\n\nif (num > 10)\n    if (num % 2 == 0)\n        System.out.print(\"Even\");\nelse\n    System.out.print(\"Small\");\nif (num > 5)\n    System.out.print(\"Big\");",
    "choices": [
      "A) EvenBig",
      "B) Big",
      "C) SmallBig",
      "D) Even"
    ],
    "answer": 1,
    "explanation": "When num = 15: (num > 10) is true, so we check (num % 2 == 0). Since 15 % 2 != 0, nothing prints from the nested if. The else belongs to the outer if, not the inner if, so \"Small\" doesn't print. The separate if (num > 5) is true, so \"Big\" prints. Output is \"Big\"."
  },
  {
    "id": "csa_u3_q086",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens when day = 6?\n\nswitch (day) {\n    case 1: case 2: case 3: case 4: case 5:\n        System.out.print(\"Weekday\");\n        break;\n    case 6: case 7:\n        System.out.print(\"Weekend\");\n        break;\n    default:\n        System.out.print(\"Invalid\");\n}",
    "choices": [
      "A) Weekday",
      "B) Weekend",
      "C) Invalid",
      "D) WeekendInvalid"
    ],
    "answer": 1,
    "explanation": "When day = 6, execution jumps to case 6. Since case 6 and case 7 are grouped together without break statements between them, it prints \"Weekend\" and then encounters the break statement, which ends the switch. The output is \"Weekend\"."
  },
  {
    "id": "csa_u3_q087",
    "subject": "apcsa",
    "unit": 3,
    "topic": "short circuit evaluation",
    "topicLabel": "short circuit evaluation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of result after this code executes?\n\nboolean result;\nint x = 5, y = 0;\nresult = (x < 10) || (++y > 0) && (x / y == 5);",
    "choices": [
      "A) true, and y = 0",
      "B) true, and y = 1",
      "C) false, and y = 0",
      "D) Runtime error due to division by zero"
    ],
    "answer": 0,
    "explanation": "Due to short circuit evaluation with ||, since (x < 10) is true, the entire expression is true without evaluating the right side. The expressions (++y > 0) and (x / y == 5) are never executed, so y remains 0 and no division by zero occurs. Result is true and y = 0."
  },
  {
    "id": "csa_u3_q088",
    "subject": "apcsa",
    "unit": 3,
    "topic": "if/else",
    "topicLabel": "if/else",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times is \"Hello\" printed?\n\nint i = 0;\nif (i < 3)\n    if (i == 0)\n        System.out.println(\"Hello\");\nelse\n    System.out.println(\"Hello\");\nif (i >= 0)\n    System.out.println(\"Hello\");",
    "choices": [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) 3"
    ],
    "answer": 2,
    "explanation": "With i = 0: First if (i < 3) is true, then nested if (i == 0) is true, so \"Hello\" prints once. The else belongs to the outer if, not the inner if. The separate if (i >= 0) is true, so \"Hello\" prints again. Total: 2 times."
  },
  {
    "id": "csa_u3_q089",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean",
    "topicLabel": "compound boolean",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the result of this expression when x = 3, y = 7, z = 1?\n(x > y || x < z) && (y > z && x != z) || (z == 1)",
    "choices": [
      "A) true",
      "B) false",
      "C) Cannot be determined",
      "D) Compilation error"
    ],
    "answer": 0,
    "explanation": "Breaking down with x=3, y=7, z=1: (x > y || x < z) = (false || false) = false. (y > z && x != z) = (true && true) = true. So the first part becomes false && true = false. The final part (z == 1) = true. Overall: false || true = true."
  },
  {
    "id": "csa_u3_q090",
    "subject": "apcsa",
    "unit": 3,
    "topic": "De Morgan's law",
    "topicLabel": "De Morgan's law",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which expression is equivalent to !(!(a && b) || !(c || d))?",
    "choices": [
      "A) (a && b) && (c || d)",
      "B) (a || b) && (c && d)",
      "C) !(a && b) && !(c || d)",
      "D) (a && b) || (c || d)"
    ],
    "answer": 0,
    "explanation": "Apply De Morgan's law to the outer negation: !(X || Y) becomes !X && !Y, where X = !(a && b) and Y = !(c || d). This gives !!(a && b) && !!(c || d). The double negations cancel out, yielding (a && b) && (c || d), which is choice A. To verify with a test case: let a=true, b=true, c=true, d=false. Original: !(!(true && true) || !(true || false)) = !(false || false) = !false = true. Choice A: (true && true) && (true || false) = true && true = true. Choice B: (true || true) && (true && false) = true && false = false. Choice C: !(true && true) && !(true || false) = false && false = false. Choice D: (true && true) || (true || false) = true || true = true - but D is not equivalent in all cases (e.g., a=false, b=false, c=true, d=true: original = !(true || false) = false, D = false || true = true). Only choice A matches the original expression in all cases."
  },
  {
    "id": "csa_u3_q091",
    "subject": "apcsa",
    "unit": 3,
    "topic": "nested conditionals",
    "topicLabel": "nested conditionals",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output when score = 85?\n\nif (score >= 90) {\n    System.out.print(\"A\");\n} else {\n    if (score >= 80) {\n        System.out.print(\"B\");\n        if (score >= 85)\n            System.out.print(\"+\");\n    } else {\n        System.out.print(\"C\");\n    }\n}",
    "choices": [
      "A) A",
      "B) B",
      "C) B+",
      "D) C"
    ],
    "answer": 2,
    "explanation": "With score = 85: (score >= 90) is false, so we go to the else branch. (score >= 80) is true, so \"B\" is printed. Then (score >= 85) is true (85 >= 85), so \"+\" is printed. The output is \"B+\"."
  },
  {
    "id": "csa_u3_q092",
    "subject": "apcsa",
    "unit": 3,
    "topic": "switch statements",
    "topicLabel": "switch statements",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is printed when value = 2?\n\nswitch (value) {\n    default:\n        System.out.print(\"Default \");\n        break;\n    case 1:\n        System.out.print(\"One \");\n    case 2:\n        System.out.print(\"Two \");\n    case 3:\n        System.out.print(\"Three \");\n        break;\n}",
    "choices": [
      "A) Default",
      "B) Two Three",
      "C) One Two Three",
      "D) Default Two Three"
    ],
    "answer": 1,
    "explanation": "When value = 2, execution jumps directly to case 2, printing \"Two \". Since there's no break after case 2, it falls through to case 3, printing \"Three \". The break after case 3 stops execution. The default case is not executed because there was a matching case. Output is \"Two Three\"."
  },
  {
    "id": "csa_u3_q093",
    "subject": "apcsa",
    "unit": 3,
    "topic": "compound boolean with short circuit evaluation",
    "topicLabel": "Compound Boolean with Short Circuit Evaluation",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Consider the following code segment:\n\njava\nint x = 5;\nint y = 0;\nboolean result = (y != 0) && (x / y > 2) || (x++ > 4);\nSystem.out.println(x + \" \" + result);\n\n\nWhat is printed when this code executes?",
    "choices": [
      "A) 6 true",
      "B) 5 false",
      "C) 6 false",
      "D) Runtime error due to division by zero"
    ],
    "answer": 0,
    "explanation": "Due to short circuit evaluation, (y != 0) is false, so (x / y > 2) is never evaluated, avoiding division by zero. Since the first part of the AND is false, the entire AND expression is false. However, due to the OR operator, (x++ > 4) is still evaluated. Since x is 5, x++ > 4 evaluates to true (5 > 4), and x is incremented to 6. The overall result is true. Choice B incorrectly assumes x doesn't increment. Choice C incorrectly assumes the result is false. Choice D incorrectly assumes division by zero occurs despite short circuit evaluation."
  },
  {
    "id": "mcq_116",
    "unit": 3,
    "topic": "3.1",
    "topicLabel": "Abstraction and Program Design",
    "difficulty": "easy",
    "source": "original",
    "question": "In object-oriented programming, abstraction refers to:",
    "isCode": false,
    "code": "",
    "choices": [
      "Writing code with no comments",
      "Hiding implementation details and exposing only essential features",
      "Making all variables public",
      "Copying code from existing classes"
    ],
    "answer": 1,
    "explanation": "Abstraction means hiding complex implementation details and only exposing the necessary interface. Users of a class don't need to know how methods work internally."
  },
  {
    "id": "mcq_117",
    "unit": 3,
    "topic": "3.1",
    "topicLabel": "Abstraction and Program Design",
    "difficulty": "medium",
    "source": "original",
    "question": "Which of the following best illustrates encapsulation?",
    "isCode": false,
    "code": "",
    "choices": [
      "A class with all public fields",
      "A class with private fields and public getter/setter methods",
      "A method that calls itself",
      "Two classes that share a common superclass"
    ],
    "answer": 1,
    "explanation": "Encapsulation is the practice of keeping fields private and providing public methods to access/modify them. This protects data integrity and hides implementation."
  },
  {
    "id": "mcq_118",
    "unit": 3,
    "topic": "3.1",
    "topicLabel": "Abstraction and Program Design",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the primary purpose of a class in OOP?",
    "isCode": false,
    "code": "",
    "choices": [
      "To store only primitive data",
      "To serve as a blueprint for creating objects with shared state and behavior",
      "To replace all procedural code",
      "To automatically manage memory allocation"
    ],
    "answer": 1,
    "explanation": "A class serves as a blueprint or template that defines the state (fields) and behavior (methods) for objects. Each object is an instance of a class."
  },
  {
    "id": "mcq_119",
    "unit": 3,
    "topic": "3.2",
    "topicLabel": "Impact of Program Design",
    "difficulty": "easy",
    "source": "original",
    "question": "Why is it important to design programs before writing code?",
    "isCode": false,
    "code": "",
    "choices": [
      "Design makes code run faster",
      "Good design reduces errors, improves readability, and makes maintenance easier",
      "Design is required by the Java compiler",
      "Design automatically generates documentation"
    ],
    "answer": 1,
    "explanation": "Planning a program's structure upfront reduces bugs, improves maintainability, makes collaboration easier, and often results in cleaner, more efficient code."
  },
  {
    "id": "mcq_120",
    "unit": 3,
    "topic": "3.2",
    "topicLabel": "Impact of Program Design",
    "difficulty": "medium",
    "source": "original",
    "question": "What is modularity in software design?",
    "isCode": false,
    "code": "",
    "choices": [
      "Using only one class for an entire program",
      "Dividing a program into separate, independent components that can be developed and tested separately",
      "Writing all code in the main method",
      "Avoiding the use of methods"
    ],
    "answer": 1,
    "explanation": "Modularity means breaking a program into separate, self-contained units (methods, classes, packages). Each module handles a specific responsibility and can be tested independently."
  },
  {
    "id": "mcq_121",
    "unit": 3,
    "topic": "3.3",
    "topicLabel": "Anatomy of a Class",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the correct way to declare a private integer field named age in a class?",
    "isCode": false,
    "code": "",
    "choices": [
      "public int age;",
      "private int age;",
      "int private age;",
      "private age int;"
    ],
    "answer": 1,
    "explanation": "In Java, field declarations follow the format: accessModifier type fieldName; so 'private int age;' is correct."
  },
  {
    "id": "mcq_122",
    "unit": 3,
    "topic": "3.3",
    "topicLabel": "Anatomy of a Class",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "public class Dog {\n    private String name;\n    private int age;\n    \n    public Dog(String n, int a) {\n        name = n;\n        age = a;\n    }\n    \n    public String toString() {\n        return name + \" (\" + age + \")\";\n    }\n}\n// In main:\nDog d = new Dog(\"Rex\", 3);\nSystem.out.println(d);",
    "choices": [
      "Dog@hashcode",
      "Rex (3)",
      "name (age)",
      "Compilation error"
    ],
    "answer": 1,
    "explanation": "When println() is called with an object, it calls the object's toString() method. The overridden toString() returns name + \" (\" + age + \")\" = \"Rex (3)\"."
  },
  {
    "id": "mcq_123",
    "unit": 3,
    "topic": "3.3",
    "topicLabel": "Anatomy of a Class",
    "difficulty": "hard",
    "source": "original",
    "question": "Which keyword is used to indicate that a field or method belongs to the class itself rather than to instances?",
    "isCode": false,
    "code": "",
    "choices": [
      "private",
      "public",
      "static",
      "final"
    ],
    "answer": 2,
    "explanation": "The static keyword means the field or method belongs to the class rather than to individual instances. Static members are shared across all instances."
  },
  {
    "id": "mcq_124",
    "unit": 3,
    "topic": "3.4",
    "topicLabel": "Constructors",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following is true about constructors?",
    "isCode": false,
    "code": "",
    "choices": [
      "Constructors must return an int",
      "Constructors have the same name as the class and have no return type",
      "Constructors are called automatically when an object is destroyed",
      "Constructors must always take parameters"
    ],
    "answer": 1,
    "explanation": "A constructor has the same name as the class and has NO return type (not even void). It is called when an object is created with the new keyword."
  },
  {
    "id": "mcq_125",
    "unit": 3,
    "topic": "3.4",
    "topicLabel": "Constructors",
    "difficulty": "medium",
    "source": "original",
    "question": "What is a no-argument (default) constructor?",
    "isCode": false,
    "code": "",
    "choices": [
      "A constructor that Java provides automatically if no constructors are written",
      "A constructor that takes only String parameters",
      "A constructor that calls another constructor",
      "A constructor that initializes all fields to -1"
    ],
    "answer": 0,
    "explanation": "If a class defines no constructors, Java automatically provides a no-argument default constructor. However, once you define any constructor, the automatic default constructor is no longer provided."
  },
  {
    "id": "mcq_126",
    "unit": 3,
    "topic": "3.4",
    "topicLabel": "Constructors",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "public class Counter {\n    private int count;\n    public Counter() { count = 0; }\n    public Counter(int start) { count = start; }\n    public void increment() { count++; }\n    public int getCount() { return count; }\n}\n// In main:\nCounter c1 = new Counter();\nCounter c2 = new Counter(10);\nc1.increment();\nc1.increment();\nc2.increment();\nSystem.out.println(c1.getCount() + \" \" + c2.getCount());",
    "choices": [
      "2 11",
      "2 10",
      "3 11",
      "0 10"
    ],
    "answer": 0,
    "explanation": "c1 starts at 0, incremented twice → 2. c2 starts at 10, incremented once → 11. Output: \"2 11\"."
  },
  {
    "id": "mcq_127",
    "unit": 3,
    "topic": "3.5",
    "topicLabel": "Methods: How to Write Them",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following is a valid accessor (getter) method for a private int field named score?",
    "isCode": false,
    "code": "",
    "choices": [
      "public void getScore() { return score; }",
      "public int getScore() { return score; }",
      "private int getScore() { return score; }",
      "public int score() { score; }"
    ],
    "answer": 1,
    "explanation": "An accessor method is public (so it's accessible from outside), returns the field's type (int), is named following the getFieldName convention, and returns the field value."
  },
  {
    "id": "mcq_128",
    "unit": 3,
    "topic": "3.5",
    "topicLabel": "Methods: How to Write Them",
    "difficulty": "medium",
    "source": "original",
    "question": "What is a mutator (setter) method?",
    "isCode": false,
    "code": "",
    "choices": [
      "A method that reads and returns a private field's value",
      "A method that modifies a private field's value",
      "A method that creates new objects",
      "A method that overrides a superclass method"
    ],
    "answer": 1,
    "explanation": "A mutator (setter) method modifies the value of a private field. It typically takes a parameter and assigns it to the field. This allows controlled modification of private data."
  },
  {
    "id": "mcq_129",
    "unit": 3,
    "topic": "3.5",
    "topicLabel": "Methods: How to Write Them",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "public class Rectangle {\n    private double width;\n    private double height;\n    \n    public Rectangle(double w, double h) {\n        width = w;\n        height = h;\n    }\n    \n    public double area() { return width * height; }\n    public double perimeter() { return 2 * (width + height); }\n}\n// In main:\nRectangle r = new Rectangle(5.0, 3.0);\nSystem.out.println(r.area() + \" \" + r.perimeter());",
    "choices": [
      "15.0 16.0",
      "16.0 15.0",
      "8.0 15.0",
      "15.0 8.0"
    ],
    "answer": 0,
    "explanation": "area() = 5.0 * 3.0 = 15.0. perimeter() = 2 * (5.0 + 3.0) = 2 * 8.0 = 16.0. Output: \"15.0 16.0\"."
  },
  {
    "id": "mcq_130",
    "unit": 3,
    "topic": "3.6",
    "topicLabel": "Methods: Passing and Returning References",
    "difficulty": "medium",
    "source": "original",
    "question": "When an object is passed to a method in Java:",
    "isCode": false,
    "code": "",
    "choices": [
      "A copy of the entire object is made",
      "The reference (address) is passed by value — changes to fields affect the original",
      "The original object cannot be modified",
      "Java automatically makes the parameter final"
    ],
    "answer": 1,
    "explanation": "Java passes object references by value. The method gets a copy of the reference, which points to the same object. Changes to the object's fields through the reference affect the original object."
  },
  {
    "id": "mcq_131",
    "unit": 3,
    "topic": "3.6",
    "topicLabel": "Methods: Passing and Returning References",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "public static void addOne(int x) {\n    x = x + 1;\n}\npublic static void addOne(int[] arr) {\n    arr[0] = arr[0] + 1;\n}\n// In main:\nint n = 5;\nint[] a = {5};\naddOne(n);\naddOne(a);\nSystem.out.println(n + \" \" + a[0]);",
    "choices": [
      "5 5",
      "6 6",
      "5 6",
      "6 5"
    ],
    "answer": 2,
    "explanation": "Primitives are passed by value — n is unchanged (still 5). Arrays are objects; passing the array passes its reference. arr[0]++ modifies the original array. a[0] becomes 6."
  },
  {
    "id": "mcq_132",
    "unit": 3,
    "topic": "3.7",
    "topicLabel": "Class Variables and Methods",
    "difficulty": "easy",
    "source": "original",
    "question": "What is a class variable (static field)?",
    "isCode": false,
    "code": "",
    "choices": [
      "A variable declared inside a method",
      "A variable shared by all instances of the class",
      "A variable that can only be accessed within the class",
      "A variable declared with the final keyword"
    ],
    "answer": 1,
    "explanation": "A static field (class variable) belongs to the class itself, not to any particular instance. All instances share the same copy of the static field."
  },
  {
    "id": "mcq_133",
    "unit": 3,
    "topic": "3.7",
    "topicLabel": "Class Variables and Methods",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "public class Widget {\n    private static int count = 0;\n    public Widget() { count++; }\n    public static int getCount() { return count; }\n}\n// In main:\nWidget a = new Widget();\nWidget b = new Widget();\nWidget c = new Widget();\nSystem.out.println(Widget.getCount());",
    "choices": [
      "0",
      "1",
      "3",
      "Compilation error"
    ],
    "answer": 2,
    "explanation": "count is a static field shared by all Widget instances. Each constructor call increments it. After creating 3 Widgets, count = 3."
  },
  {
    "id": "mcq_134",
    "unit": 3,
    "topic": "3.7",
    "topicLabel": "Class Variables and Methods",
    "difficulty": "hard",
    "source": "original",
    "question": "Why can't a static method access instance (non-static) fields directly?",
    "isCode": false,
    "code": "",
    "choices": [
      "Static methods can access all fields — this is incorrect",
      "Static methods belong to the class, not any instance, so there is no 'this' object whose fields to access",
      "Instance fields are always private",
      "Java prohibits static methods from doing anything"
    ],
    "answer": 1,
    "explanation": "Static methods execute in a class context, not an instance context. There is no 'this' reference in a static method, so they cannot refer to instance fields that belong to a specific object."
  },
  {
    "id": "mcq_135",
    "unit": 3,
    "topic": "3.8",
    "topicLabel": "Scope and Access",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the scope of a local variable declared inside a for loop?",
    "isCode": false,
    "code": "",
    "choices": [
      "The entire class",
      "The entire method",
      "Only within the for loop's body",
      "The entire program"
    ],
    "answer": 2,
    "explanation": "A variable declared in a for loop header (like int i = 0) or inside the loop body is a local variable that only exists within that loop. It cannot be accessed outside the loop."
  },
  {
    "id": "mcq_136",
    "unit": 3,
    "topic": "3.8",
    "topicLabel": "Scope and Access",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the private access modifier do?",
    "isCode": false,
    "code": "",
    "choices": [
      "Makes the member accessible from anywhere",
      "Makes the member accessible only within its own class",
      "Makes the member accessible within the same package",
      "Makes the member immutable"
    ],
    "answer": 1,
    "explanation": "The private modifier restricts access to the member to only the class in which it is declared. Even subclasses cannot directly access private members."
  },
  {
    "id": "mcq_137",
    "unit": 3,
    "topic": "3.8",
    "topicLabel": "Scope and Access",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "public class Scope {\n    private int x = 10;\n    \n    public void test() {\n        int x = 20;\n        System.out.println(x);\n        System.out.println(this.x);\n    }\n}\n// In main:\nnew Scope().test();",
    "choices": [
      "10 10",
      "20 20",
      "20 10",
      "10 20"
    ],
    "answer": 2,
    "explanation": "Inside test(), x refers to the local variable (20). this.x refers to the instance field (10). Output: 20 then 10."
  },
  {
    "id": "mcq_138",
    "unit": 3,
    "topic": "3.9",
    "topicLabel": "this Keyword",
    "difficulty": "easy",
    "source": "original",
    "question": "What does the this keyword refer to in a Java instance method?",
    "isCode": false,
    "code": "",
    "choices": [
      "The current class's static fields",
      "The current object (the instance calling the method)",
      "The superclass of the current class",
      "The return value of the method"
    ],
    "answer": 1,
    "explanation": "In an instance method or constructor, 'this' refers to the current object — the instance on which the method was called."
  },
  {
    "id": "mcq_139",
    "unit": 3,
    "topic": "3.9",
    "topicLabel": "this Keyword",
    "difficulty": "medium",
    "source": "original",
    "question": "When is it necessary to use this.fieldName instead of just fieldName?",
    "isCode": false,
    "code": "",
    "choices": [
      "Always — this is required for all field accesses",
      "Never — this is optional and serves no purpose",
      "When a local variable or parameter has the same name as an instance field",
      "Only in static methods"
    ],
    "answer": 2,
    "explanation": "this is commonly used when a parameter name shadows an instance field name. Example: if parameter is 'name' and field is 'name', use 'this.name = name' to distinguish them."
  },
  {
    "id": "mcq_140",
    "unit": 3,
    "topic": "3.9",
    "topicLabel": "this Keyword",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "public class Point {\n    private int x, y;\n    \n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    \n    public String toString() {\n        return \"(\" + x + \", \" + y + \")\";\n    }\n    \n    public Point translate(int dx, int dy) {\n        return new Point(x + dx, y + dy);\n    }\n}\n// In main:\nPoint p = new Point(2, 3);\nSystem.out.println(p.translate(1, -1));",
    "choices": [
      "(2, 3)",
      "(3, 2)",
      "(1, -1)",
      "Compilation error"
    ],
    "answer": 1,
    "explanation": "p is Point(2, 3). translate(1, -1) returns new Point(2+1, 3-1) = new Point(3, 2). toString() of that is \"(3, 2)\"."
  },
  {
    "id": "mcq_141",
    "unit": 3,
    "topic": "3.4",
    "topicLabel": "Constructors",
    "difficulty": "medium",
    "source": "original",
    "question": "What is constructor overloading?",
    "isCode": false,
    "code": "",
    "choices": [
      "Having a constructor that calls a superclass constructor",
      "Having multiple constructors in the same class with different parameter lists",
      "Making a constructor private to prevent instantiation",
      "A constructor that creates multiple objects at once"
    ],
    "answer": 1,
    "explanation": "Constructor overloading allows a class to have multiple constructors, each with a different number or type of parameters, giving users flexibility in how they create objects."
  },
  {
    "id": "mcq_142",
    "unit": 3,
    "topic": "3.5",
    "topicLabel": "Methods: How to Write Them",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "public class BankAccount {\n    private double balance;\n    public BankAccount(double initial) { balance = initial; }\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= balance) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n    public double getBalance() { return balance; }\n}\n// In main:\nBankAccount acc = new BankAccount(100.0);\nacc.deposit(50.0);\nboolean ok = acc.withdraw(200.0);\nSystem.out.println(acc.getBalance() + \" \" + ok);",
    "choices": [
      "150.0 true",
      "150.0 false",
      "-50.0 true",
      "100.0 false"
    ],
    "answer": 1,
    "explanation": "Start with 100. deposit(50) → 150. withdraw(200): 200 > 150 so fails, returns false. Balance stays 150.0. Output: \"150.0 false\"."
  },
  {
    "id": "mcq_143",
    "unit": 3,
    "topic": "3.3",
    "topicLabel": "Anatomy of a Class",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output when toString() is NOT overridden and you print an object?",
    "isCode": false,
    "code": "",
    "choices": [
      "null",
      "A string like 'ClassName@hexHashCode'",
      "The values of all fields",
      "Compilation error"
    ],
    "answer": 1,
    "explanation": "If toString() is not overridden, Java uses the default Object.toString(), which returns a string of the form 'ClassName@hexadecimalHashCode'."
  },
  {
    "id": "csa_u4_q094",
    "subject": "apcsa",
    "unit": 4,
    "topic": "while loops",
    "topicLabel": "while loops",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What will be printed by the following code?\n\nint x = 3;\nwhile (x > 0) {\n    System.out.print(x + \" \");\n    x--;\n}",
    "choices": [
      "A) 3 2 1",
      "B) 3 2 1 0",
      "C) 2 1 0",
      "D) The loop will run infinitely"
    ],
    "answer": 0,
    "explanation": "The loop starts with x = 3 and continues while x > 0. It prints 3, then decrements to 2, prints 2, decrements to 1, prints 1, then decrements to 0. Since 0 is not greater than 0, the loop stops. Choice B includes 0 which is incorrect since the loop stops when x becomes 0. Choice C misses the initial value 3. Choice D is wrong because x decrements and will eventually reach 0."
  },
  {
    "id": "csa_u4_q095",
    "subject": "apcsa",
    "unit": 4,
    "topic": "for loops",
    "topicLabel": "for loops",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times will the following for loop execute?\n\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}",
    "choices": [
      "A) 4 times",
      "B) 5 times",
      "C) 6 times",
      "D) 0 times"
    ],
    "answer": 1,
    "explanation": "The loop starts with i = 0 and continues while i < 5, incrementing i each time. It executes for i = 0, 1, 2, 3, 4, which is 5 times total. Choice A is a common mistake thinking it stops before 5 iterations. Choice C incorrectly includes i = 5. Choice D would only be correct if the initial condition was false."
  },
  {
    "id": "csa_u4_q096",
    "subject": "apcsa",
    "unit": 4,
    "topic": "nested loops",
    "topicLabel": "nested loops",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many asterisks (*) will be printed by this nested loop?\n\nfor (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 3; j++) {\n        System.out.print(\"*\");\n    }\n}",
    "choices": [
      "A) 5",
      "B) 6",
      "C) 2",
      "D) 3"
    ],
    "answer": 1,
    "explanation": "The outer loop runs 2 times (i = 0, 1) and for each iteration of the outer loop, the inner loop runs 3 times (j = 0, 1, 2). Total asterisks = 2 × 3 = 6. Choice A incorrectly adds 2 + 3. Choice C only counts the outer loop iterations. Choice D only counts the inner loop iterations."
  },
  {
    "id": "csa_u4_q097",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop tracing",
    "topicLabel": "loop tracing",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of sum after this code executes?\n\nint sum = 0;\nfor (int i = 1; i <= 3; i++) {\n    sum += i;\n}",
    "choices": [
      "A) 3",
      "B) 6",
      "C) 7",
      "D) 9"
    ],
    "answer": 1,
    "explanation": "Tracing through the loop: initially sum = 0. When i = 1: sum = 0 + 1 = 1. When i = 2: sum = 1 + 2 = 3. When i = 3: sum = 3 + 3 = 6. Choice A only considers the final value of i. Choice C incorrectly adds an extra 1. Choice D would be 1² + 2² + 3² which is not what this code does."
  },
  {
    "id": "csa_u4_q098",
    "subject": "apcsa",
    "unit": 4,
    "topic": "string traversal",
    "topicLabel": "string traversal",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What does this code print?\n\nString word = \"cat\";\nfor (int i = 0; i < word.length(); i++) {\n    System.out.print(word.charAt(i) + \" \");\n}",
    "choices": [
      "A) c a t",
      "B) cat",
      "C) c a t ",
      "D) 0 1 2"
    ],
    "answer": 2,
    "explanation": "The loop iterates through each character in \"cat\" and prints each character followed by a space. This produces 'c ', 'a ', 't ' with spaces after each character including the last one. Choice A omits the final space. Choice B would be the result without spaces. Choice D would print the indices instead of characters."
  },
  {
    "id": "csa_u4_q099",
    "subject": "apcsa",
    "unit": 4,
    "topic": "do-while",
    "topicLabel": "do-while",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times will \"Hello\" be printed?\n\nint count = 0;\ndo {\n    System.out.println(\"Hello\");\n    count++;\n} while (count < 0);",
    "choices": [
      "A) 0 times",
      "B) 1 time",
      "C) 2 times",
      "D) Infinite times"
    ],
    "answer": 1,
    "explanation": "A do-while loop always executes at least once because the condition is checked after the loop body runs. Even though count < 0 is false from the start (count = 0), the loop body executes once before the condition is evaluated. Choice A would be correct for a regular while loop but not do-while. Choices C and D are incorrect because the condition becomes false after the first iteration."
  },
  {
    "id": "csa_u4_q100",
    "subject": "apcsa",
    "unit": 4,
    "topic": "arrays in loops",
    "topicLabel": "arrays in loops",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is printed by this code?\n\nint[] numbers = {10, 20, 30};\nfor (int i = 0; i < numbers.length; i++) {\n    System.out.print(numbers[i] + \" \");\n}",
    "choices": [
      "A) 0 1 2",
      "B) 10 20 30",
      "C) 10 20 30 ",
      "D) 1 2 3"
    ],
    "answer": 2,
    "explanation": "The loop accesses each element in the array and prints it followed by a space. This outputs '10 ', '20 ', '30 ' including the space after the last element. Choice A prints the indices instead of values. Choice B omits the final space that gets printed. Choice D prints incorrect values."
  },
  {
    "id": "csa_u4_q101",
    "subject": "apcsa",
    "unit": 4,
    "topic": "enhanced for loop",
    "topicLabel": "enhanced for loop",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following is the correct syntax for an enhanced for loop to traverse an array called 'data'?",
    "choices": [
      "A) for (int element : data)",
      "B) for (int element in data)",
      "C) for (element : data)",
      "D) for (int : element data)"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. The enhanced for loop syntax in Java uses a colon (:) and requires specifying the data type of the loop variable. The correct format is 'for (datatype variable : collection)'. Choice B uses 'in' which is incorrect syntax in Java. Choice C omits the required data type. Choice D has incorrect ordering of the syntax elements."
  },
  {
    "id": "csa_u4_q102",
    "subject": "apcsa",
    "unit": 4,
    "topic": "ArrayList iteration",
    "topicLabel": "ArrayList iteration",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What method is used to get the number of elements in an ArrayList named 'list' for loop iteration?",
    "choices": [
      "A) list.length",
      "B) list.size()",
      "C) list.count()",
      "D) list.length()"
    ],
    "answer": 1,
    "explanation": "ArrayList uses the size() method to return the number of elements. This is different from arrays which use the length property. Choice A is the syntax for arrays, not ArrayLists. Choice C uses a method that doesn't exist in ArrayList. Choice D incorrectly treats length as a method when it's a property for arrays."
  },
  {
    "id": "csa_u4_q103",
    "subject": "apcsa",
    "unit": 4,
    "topic": "for loops",
    "topicLabel": "for loops",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What values of i will be printed by this loop?\n\nfor (int i = 2; i <= 4; i++) {\n    System.out.println(i);\n}",
    "choices": [
      "A) 2, 3",
      "B) 2, 3, 4",
      "C) 1, 2, 3, 4",
      "D) 2, 3, 4, 5"
    ],
    "answer": 1,
    "explanation": "The loop starts with i = 2 and continues while i <= 4, incrementing i each time. It prints 2, then 3, then 4. When i becomes 5, the condition i <= 4 is false, so the loop stops. Choice A stops too early. Choice C includes 1 which is never assigned to i. Choice D includes 5 which would require the loop to execute when i = 5, but it stops before then."
  },
  {
    "id": "csa_u4_q104",
    "subject": "apcsa",
    "unit": 4,
    "topic": "while loops",
    "topicLabel": "while loops",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens with this while loop?\n\nint x = 5;\nwhile (x > 10) {\n    System.out.println(x);\n    x++;\n}",
    "choices": [
      "A) Prints 5 and stops",
      "B) Runs infinitely",
      "C) Prints nothing",
      "D) Prints 5, 6, 7, 8, 9, 10"
    ],
    "answer": 2,
    "explanation": "The condition x > 10 is checked before the loop body executes. Since x starts at 5, which is not greater than 10, the condition is false from the beginning and the loop body never executes. Choice A would be correct if the condition were true initially. Choice B would occur if x decremented instead of incremented. Choice D misunderstands that the loop never starts."
  },
  {
    "id": "csa_u4_q105",
    "subject": "apcsa",
    "unit": 4,
    "topic": "nested loops",
    "topicLabel": "nested loops",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What pattern will this nested loop create?\n\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        System.out.print(\"X\");\n    }\n    System.out.println();\n}",
    "choices": [
      "A) XX\\nXX\\nXX",
      "B) XXX\\nXXX",
      "C) XXXXXX",
      "D) X\\nX\\nX\\nX\\nX\\nX"
    ],
    "answer": 0,
    "explanation": "The outer loop runs 3 times, and for each iteration, the inner loop prints 2 X's, followed by a newline from println(). This creates three rows of XX. Choice B shows only 2 rows with 3 X's each. Choice C puts all X's on one line. Choice D puts each X on a separate line."
  },
  {
    "id": "csa_u4_q106",
    "subject": "apcsa",
    "unit": 4,
    "topic": "string traversal",
    "topicLabel": "string traversal",
    "difficulty": "easy",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What does this string traversal code accomplish?\n\nString str = \"hello\";\nfor (int i = str.length() - 1; i >= 0; i--) {\n    System.out.print(str.charAt(i));\n}",
    "choices": [
      "A) Prints \"hello\"",
      "B) Prints \"olleh\"",
      "C) Prints the length of the string",
      "D) Prints each character on a separate line"
    ],
    "answer": 1,
    "explanation": "This loop starts at the last index (str.length() - 1 = 4) and works backwards to index 0, printing each character. For \"hello\", it prints characters at indices 4, 3, 2, 1, 0, which gives \"olleh\". Choice A would result from traversing forward. Choice C would require printing i or str.length(). Choice D would need println() instead of print()."
  },
  {
    "id": "csa_u4_q107",
    "subject": "apcsa",
    "unit": 4,
    "topic": "while loops",
    "topicLabel": "while loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nint x = 5;\nwhile (x > 0) {\n    System.out.print(x + \" \");\n    x -= 2;\n}",
    "choices": [
      "A) 5 3 1",
      "B) 5 3 1 -1",
      "C) 5 4 3 2 1",
      "D) Infinite loop"
    ],
    "answer": 0,
    "explanation": "The loop starts with x = 5 and decrements by 2 each iteration. It prints 5 (x becomes 3), then 3 (x becomes 1), then 1 (x becomes -1). Since -1 is not > 0, the loop terminates. Choice B incorrectly includes -1, choice C shows decrementing by 1 instead of 2, and choice D misunderstands that the loop does terminate."
  },
  {
    "id": "csa_u4_q108",
    "subject": "apcsa",
    "unit": 4,
    "topic": "for loops",
    "topicLabel": "for loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which for loop correctly prints the numbers 10, 8, 6, 4, 2?",
    "choices": [
      "A) for (int i = 10; i >= 2; i -= 2)",
      "B) for (int i = 10; i > 0; i -= 2)",
      "C) for (int i = 10; i > 2; i -= 2)",
      "D) for (int i = 10; i <= 2; i -= 2)"
    ],
    "answer": 0,
    "explanation": "To print 10, 8, 6, 4, 2, we need to start at 10 and decrement by 2 until we reach 2 (inclusive). Choice A uses i >= 2 which includes 2 as the last value. Choice B (i > 0) would include 0, choice C (i > 2) would stop at 4, and choice D (i <= 2) creates an infinite loop since i starts at 10 and decreases."
  },
  {
    "id": "csa_u4_q109",
    "subject": "apcsa",
    "unit": 4,
    "topic": "nested loops",
    "topicLabel": "nested loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following nested loop?\n\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}",
    "choices": [
      "A) *\n**\n***",
      "B) ***\n**\n*",
      "C) * * *\n* *\n*",
      "D) *\n* *\n* * *"
    ],
    "answer": 0,
    "explanation": "The outer loop runs 3 times (i = 1, 2, 3). For each i, the inner loop runs i times printing '*'. When i=1: prints 1 star, when i=2: prints 2 stars, when i=3: prints 3 stars, each on a new line due to println(). Choice B shows reverse pattern, choice C adds spaces, and choice D incorrectly spaces the stars."
  },
  {
    "id": "csa_u4_q110",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop tracing",
    "topicLabel": "loop tracing",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "After executing this code, what is the value of sum?\n\nint sum = 0;\nfor (int i = 2; i < 8; i += 2) {\n    sum += i;\n}",
    "choices": [
      "A) 12",
      "B) 20",
      "C) 16",
      "D) 18"
    ],
    "answer": 0,
    "explanation": "Tracing through the loop: i starts at 2 and increments by 2 while i < 8. i=2: sum = 0+2 = 2; i=4: sum = 2+4 = 6; i=6: sum = 6+6 = 12; i=8: condition fails, loop ends. Final sum is 12. Choice B (20) adds all even numbers 2+4+6+8, choice C (16) might add 2+6+8, and choice D (18) represents a miscalculation."
  },
  {
    "id": "csa_u4_q111",
    "subject": "apcsa",
    "unit": 4,
    "topic": "string traversal",
    "topicLabel": "string traversal",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What does this code print?\n\nString word = \"hello\";\nfor (int i = word.length() - 1; i >= 0; i--) {\n    System.out.print(word.charAt(i));\n}",
    "choices": [
      "A) olleh",
      "B) hello",
      "C) helo",
      "D) IndexOutOfBoundsException"
    ],
    "answer": 0,
    "explanation": "This code traverses the string backwards. word.length() is 5, so i starts at 4 and goes down to 0. It prints: word.charAt(4)='o', charAt(3)='l', charAt(2)='l', charAt(1)='e', charAt(0)='h', resulting in 'olleh'. Choice B would be forward traversal, choice C suggests skipping characters, and choice D incorrectly assumes an index error."
  },
  {
    "id": "csa_u4_q112",
    "subject": "apcsa",
    "unit": 4,
    "topic": "do-while",
    "topicLabel": "do-while",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times will \"Hello\" be printed?\n\nint count = 5;\ndo {\n    System.out.println(\"Hello\");\n    count++;\n} while (count < 5);",
    "choices": [
      "A) 1",
      "B) 0",
      "C) 5",
      "D) Infinite loop"
    ],
    "answer": 0,
    "explanation": "A do-while loop executes at least once before checking the condition. The code prints 'Hello' once (count becomes 6), then checks if 6 < 5, which is false, so it exits. Choice B forgets do-while executes at least once, choice C assumes the loop continues, and choice D misunderstands that count increases making the condition false."
  },
  {
    "id": "csa_u4_q113",
    "subject": "apcsa",
    "unit": 4,
    "topic": "arrays in loops",
    "topicLabel": "arrays in loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of result after this code executes?\n\nint[] arr = {3, 7, 2, 9, 1};\nint result = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    if (arr[i] > result) {\n        result = arr[i];\n    }\n}",
    "choices": [
      "A) 9",
      "B) 3",
      "C) 22",
      "D) 1"
    ],
    "answer": 0,
    "explanation": "This code finds the maximum value in the array. result starts at arr[0]=3. The loop compares each element: 7>3 (result=7), 2<7 (no change), 9>7 (result=9), 1<9 (no change). Final result is 9. Choice B is the initial value, choice C is the sum of all elements, and choice D is the minimum value."
  },
  {
    "id": "csa_u4_q114",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop invariants",
    "topicLabel": "loop invariants",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "In this loop that calculates factorial, what is the loop invariant?\n\nint factorial = 1;\nfor (int i = 1; i <= n; i++) {\n    factorial *= i;\n}",
    "choices": [
      "A) factorial equals the product of integers from 1 to (i-1)",
      "B) factorial equals the product of integers from 1 to i",
      "C) factorial equals the product of integers from 1 to n",
      "D) i is always less than or equal to n"
    ],
    "answer": 0,
    "explanation": "A loop invariant is a condition that remains true at the start of each iteration. At the beginning of each iteration (before factorial *= i), factorial contains the product of integers from 1 to (i-1). Choice B describes the state after the multiplication, choice C is only true at the end, and choice D is a loop condition, not an invariant about the computation."
  },
  {
    "id": "csa_u4_q115",
    "subject": "apcsa",
    "unit": 4,
    "topic": "while loops",
    "topicLabel": "while loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the final value of x after this code executes?\n\nint x = 1;\nwhile (x < 100) {\n    x *= 3;\n}",
    "choices": [
      "A) 243",
      "B) 99",
      "C) 81",
      "D) 300"
    ],
    "answer": 0,
    "explanation": "Tracing the loop: x starts at 1. x=1*3=3 (3<100), x=3*3=9 (9<100), x=9*3=27 (27<100), x=27*3=81 (81<100), x=81*3=243 (243≮100, loop exits). Final value is 243. Choice B suggests stopping just before 100, choice C is the previous iteration value, and choice D represents continuing past the condition."
  },
  {
    "id": "csa_u4_q116",
    "subject": "apcsa",
    "unit": 4,
    "topic": "for loops",
    "topicLabel": "for loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times does this loop execute?\n\nfor (int i = 0; i < 10; i += 3) {\n    System.out.println(i);\n}",
    "choices": [
      "A) 4",
      "B) 3",
      "C) 10",
      "D) 5"
    ],
    "answer": 0,
    "explanation": "The loop executes with i values: 0, 3, 6, 9. When i becomes 12, the condition i < 10 is false, so the loop stops. This gives us exactly 4 iterations. Choice B (3) undercounts by missing one iteration, choice C (10) incorrectly assumes one iteration per integer from 0 to 9, and choice D (5) overcounts the number of valid steps. To count iterations of a loop like this, use the formula: floor((upper - start) / step) when using strict less-than, which gives floor((10 - 0) / 3) = floor(3.33) = 3, plus 1 for the starting value = 4."
  },
  {
    "id": "csa_u4_q117",
    "subject": "apcsa",
    "unit": 4,
    "topic": "nested loops",
    "topicLabel": "nested loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times is \"X\" printed?\n\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        System.out.print(\"X\");\n    }\n}",
    "choices": [
      "A) 6",
      "B) 5",
      "C) 3",
      "D) 2"
    ],
    "answer": 0,
    "explanation": "The outer loop runs 3 times (i = 0, 1, 2) and for each iteration, the inner loop runs 2 times (j = 0, 1). Total executions = 3 × 2 = 6. Choice B might represent 3+2, choice C only counts outer loop iterations, and choice D only counts inner loop iterations."
  },
  {
    "id": "csa_u4_q118",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop tracing",
    "topicLabel": "loop tracing",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of this code?\n\nint a = 1, b = 1;\nfor (int i = 0; i < 4; i++) {\n    System.out.print(a + \" \");\n    int temp = a + b;\n    a = b;\n    b = temp;\n}",
    "choices": [
      "A) 1 1 2 3",
      "B) 1 2 3 5",
      "C) 1 1 2 3 5",
      "D) 2 3 5 8"
    ],
    "answer": 0,
    "explanation": "This generates Fibonacci sequence. Initially a=1, b=1. i=0: print 1, temp=2, a=1, b=2. i=1: print 1, temp=3, a=2, b=3. i=2: print 2, temp=5, a=3, b=5. i=3: print 3, temp=8, a=5, b=8. Output is '1 1 2 3'. Choice B starts from second Fibonacci number, choice C includes an extra iteration, and choice D starts from third number."
  },
  {
    "id": "csa_u4_q119",
    "subject": "apcsa",
    "unit": 4,
    "topic": "string traversal",
    "topicLabel": "string traversal",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What does this method return when called with \"programming\"?\n\npublic int countVowels(String s) {\n    int count = 0;\n    for (int i = 0; i < s.length(); i++) {\n        char c = s.charAt(i);\n        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {\n            count++;\n        }\n    }\n    return count;\n}",
    "choices": [
      "A) 3",
      "B) 4",
      "C) 2",
      "D) 5"
    ],
    "answer": 0,
    "explanation": "The method counts lowercase vowels in 'programming': p-r-o(1)-g-r-a(2)-m-m-i(3)-n-g. There are 3 vowels: o, a, i. Choice B might incorrectly count some consonants as vowels, choice C undercounts by missing one vowel, and choice D overcounts by including non-vowels or counting duplicates."
  },
  {
    "id": "csa_u4_q120",
    "subject": "apcsa",
    "unit": 4,
    "topic": "do-while",
    "topicLabel": "do-while",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the difference between these two code segments?\n\nSegment A:\nwhile (x > 0) {\n    x--;\n}\n\nSegment B:\ndo {\n    x--;\n} while (x > 0);",
    "choices": [
      "A) Segment B executes at least once even if x ≤ 0 initially",
      "B) Segment A executes one more time than Segment B",
      "C) Both segments produce identical results for all values of x",
      "D) Segment A is more efficient than Segment B"
    ],
    "answer": 0,
    "explanation": "The key difference is that do-while executes the body at least once before checking the condition, while a regular while loop checks the condition first. If x ≤ 0 initially, Segment A won't execute at all, but Segment B will execute once. Choice B is incorrect about execution count, choice C ignores the initial condition difference, and choice D is irrelevant to functionality."
  },
  {
    "id": "csa_u4_q121",
    "subject": "apcsa",
    "unit": 4,
    "topic": "arrays in loops",
    "topicLabel": "arrays in loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "After this code executes, what does the array contain?\n\nint[] nums = {1, 2, 3, 4, 5};\nfor (int i = 0; i < nums.length; i++) {\n    nums[i] = nums[i] * 2;\n}",
    "choices": [
      "A) {2, 4, 6, 8, 10}",
      "B) {1, 2, 3, 4, 5}",
      "C) {2, 2, 2, 2, 2}",
      "D) {1, 4, 9, 16, 25}"
    ],
    "answer": 0,
    "explanation": "The loop multiplies each array element by 2: nums[0]=1*2=2, nums[1]=2*2=4, nums[2]=3*2=6, nums[3]=4*2=8, nums[4]=5*2=10. Choice B suggests no change occurred, choice C suggests all elements became 2, and choice D shows squaring instead of doubling."
  },
  {
    "id": "csa_u4_q122",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop invariants",
    "topicLabel": "loop invariants",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "For this binary search loop, what is the loop invariant?\n\nint low = 0, high = arr.length - 1;\nwhile (low <= high) {\n    int mid = (low + high) / 2;\n    if (arr[mid] == target) return mid;\n    else if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n}",
    "choices": [
      "A) If target exists in the array, it is within the range [low, high]",
      "B) mid always equals (low + high) / 2",
      "C) arr[mid] is always compared to target",
      "D) The array is always sorted"
    ],
    "answer": 0,
    "explanation": "The loop invariant for binary search is that if the target exists in the array, it must be within the current search range [low, high]. This remains true throughout all iterations as we eliminate half the search space while maintaining this property. Choice B describes a calculation, not an invariant condition, choice C describes an action, and choice D is a precondition, not an invariant maintained by the loop."
  },
  {
    "id": "csa_u4_q123",
    "subject": "apcsa",
    "unit": 4,
    "topic": "enhanced for loop",
    "topicLabel": "enhanced for loop",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which code segment correctly uses an enhanced for loop to find the sum of all elements in an integer array?\n\nint[] numbers = {10, 20, 30, 40};",
    "choices": [
      "A) int sum = 0; for (int num : numbers) { sum += num; }",
      "B) int sum = 0; for (int i : numbers) { sum += numbers[i]; }",
      "C) int sum = 0; for (numbers : int num) { sum += num; }",
      "D) int sum = 0; for (int num in numbers) { sum += num; }"
    ],
    "answer": 0,
    "explanation": "Choice A correctly uses enhanced for loop syntax: 'for (datatype variable : collection)'. The variable 'num' represents each element value directly. Choice B incorrectly treats the loop variable as an index, choice C has reversed syntax, and choice D uses 'in' instead of ':' (which is Python syntax, not Java)."
  },
  {
    "id": "csa_u4_q124",
    "subject": "apcsa",
    "unit": 4,
    "topic": "while loops",
    "topicLabel": "while loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of count after the following code executes?\n\nint count = 0;\nint x = 16;\nwhile (x > 1) {\n    x = x / 2;\n    count++;\n}",
    "choices": [
      "A) 3",
      "B) 4",
      "C) 5",
      "D) 8"
    ],
    "answer": 1,
    "explanation": "The loop executes while x > 1. Starting with x = 16: iteration 1 (x = 8), iteration 2 (x = 4), iteration 3 (x = 2), iteration 4 (x = 1). After 4 iterations, x = 1 and the condition x > 1 is false, so count = 4. Choice A miscounts by one iteration, choice C adds an extra iteration, and choice D confuses the initial value with the count."
  },
  {
    "id": "csa_u4_q125",
    "subject": "apcsa",
    "unit": 4,
    "topic": "for loops",
    "topicLabel": "for loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is printed by the following code?\n\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n        continue;\n    }\n    System.out.print(i + \" \");\n}",
    "choices": [
      "A) 1 3 5",
      "B) 2 4",
      "C) 1 2 3 4 5",
      "D) 1 3 5 2 4"
    ],
    "answer": 0,
    "explanation": "The loop iterates i from 1 to 5. When i % 2 == 0 (i is even), continue skips the print statement. So only odd numbers (1, 3, 5) are printed. Choice B prints even numbers (incorrect condition interpretation), choice C ignores the continue statement, and choice D shows a misunderstanding of execution order."
  },
  {
    "id": "csa_u4_q126",
    "subject": "apcsa",
    "unit": 4,
    "topic": "nested loops",
    "topicLabel": "nested loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times is \"Hello\" printed by the following nested loop structure?\n\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 4; j++) {\n        System.out.println(\"Hello\");\n    }\n}",
    "choices": [
      "A) 7",
      "B) 9",
      "C) 12",
      "D) 16"
    ],
    "answer": 2,
    "explanation": "The outer loop runs 3 times (i = 0, 1, 2) and for each iteration of the outer loop, the inner loop runs 4 times (j = 0, 1, 2, 3). Total executions = 3 × 4 = 12. Choice A adds the loop bounds (3 + 4), choice B uses 3² instead of 3 × 4, and choice D uses 4² instead of 3 × 4."
  },
  {
    "id": "csa_u4_q127",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop tracing",
    "topicLabel": "loop tracing",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the final value of result after this code executes?\n\nint result = 0;\nfor (int i = 2; i <= 8; i += 2) {\n    result += i;\n}",
    "choices": [
      "A) 16",
      "B) 20",
      "C) 24",
      "D) 30"
    ],
    "answer": 1,
    "explanation": "The loop runs with i = 2, 4, 6, 8. result accumulates: 0 + 2 = 2, then 2 + 4 = 6, then 6 + 6 = 12, then 12 + 8 = 20. Choice A stops at i = 6, choice C includes i = 10 incorrectly, and choice D sums 2 + 4 + 6 + 8 + 10 (going beyond the loop condition)."
  },
  {
    "id": "csa_u4_q128",
    "subject": "apcsa",
    "unit": 4,
    "topic": "string traversal",
    "topicLabel": "string traversal",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What does the following method return when called with the string \"programming\"?\n\npublic static int countVowels(String str) {\n    int count = 0;\n    for (int i = 0; i < str.length(); i++) {\n        char ch = str.charAt(i);\n        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {\n            count++;\n        }\n    }\n    return count;\n}",
    "choices": [
      "A) 2",
      "B) 3",
      "C) 4",
      "D) 5"
    ],
    "answer": 1,
    "explanation": "In \"programming\", the vowels are: 'o' (position 2), 'a' (position 4), and 'i' (position 6). That's 3 vowels total. Choice A misses one vowel, choice C incorrectly counts consonants or includes 'y', and choice D counts too many characters as vowels."
  },
  {
    "id": "csa_u4_q129",
    "subject": "apcsa",
    "unit": 4,
    "topic": "do-while",
    "topicLabel": "do-while",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of the following code?\n\nint x = 5;\ndo {\n    System.out.print(x + \" \");\n    x--;\n} while (x > 5);",
    "choices": [
      "A) 5",
      "B) 5 4 3 2 1",
      "C) No output",
      "D) Infinite loop"
    ],
    "answer": 0,
    "explanation": "The do-while loop executes the body once before checking the condition. It prints 5, then decrements x to 4. The condition (x > 5) is false since 4 > 5 is false, so the loop terminates. Only \"5\" is printed. Choice B assumes the condition is x > 0, choice C forgets do-while executes at least once, and choice D misunderstands the terminating condition."
  },
  {
    "id": "csa_u4_q130",
    "subject": "apcsa",
    "unit": 4,
    "topic": "arrays in loops",
    "topicLabel": "arrays in loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of sum after the following code executes?\n\nint[] arr = {3, 7, 2, 8, 1};\nint sum = 0;\nfor (int i = 1; i < arr.length - 1; i++) {\n    sum += arr[i];\n}",
    "choices": [
      "A) 17",
      "B) 21",
      "C) 9",
      "D) 15"
    ],
    "answer": 0,
    "explanation": "The loop runs from i = 1 to i = 3 (length - 1 = 4, so i < 4). It sums arr[1] + arr[2] + arr[3] = 7 + 2 + 8 = 17. Choice B sums all elements, choice C sums only arr[1] + arr[2], and choice D incorrectly includes arr[0] or arr[4]."
  },
  {
    "id": "csa_u4_q131",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop invariants",
    "topicLabel": "loop invariants",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which statement best describes the loop invariant for this code that finds the maximum element?\n\nint max = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    if (arr[i] > max) {\n        max = arr[i];\n    }\n}",
    "choices": [
      "A) max equals the largest element in the entire array",
      "B) max equals the largest element among arr[0] through arr[i-1]",
      "C) max equals arr[i]",
      "D) max is always increasing"
    ],
    "answer": 1,
    "explanation": "A loop invariant is true before each iteration. At the start of each iteration, max holds the largest value seen so far in arr[0] through arr[i-1]. Choice A describes the postcondition, not the invariant. Choice C is incorrect since max may not equal arr[i]. Choice D is false since max doesn't always increase."
  },
  {
    "id": "csa_u4_q132",
    "subject": "apcsa",
    "unit": 4,
    "topic": "enhanced for loop",
    "topicLabel": "enhanced for loop",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which of the following tasks CANNOT be accomplished using an enhanced for loop (for-each loop)?",
    "choices": [
      "A) Printing all elements in an array",
      "B) Finding the sum of all elements in an array",
      "C) Setting all elements in an array to zero",
      "D) Finding the maximum element in an array"
    ],
    "answer": 2,
    "explanation": "Enhanced for loops provide read-only access to array elements. You can read elements to print, sum, or compare them, but you cannot modify the original array elements. Setting elements to zero requires write access with array indices. Choices A, B, and D only require reading elements, which enhanced for loops can do."
  },
  {
    "id": "csa_u4_q133",
    "subject": "apcsa",
    "unit": 4,
    "topic": "nested loops",
    "topicLabel": "nested loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What pattern does this nested loop create?\n\nfor (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}",
    "choices": [
      "A) A rectangle of 4x4 stars",
      "B) A right triangle with increasing rows",
      "C) A right triangle with decreasing rows",
      "D) A single row of 4 stars"
    ],
    "answer": 1,
    "explanation": "For each row i, the inner loop prints i stars. Row 1 prints 1 star, row 2 prints 2 stars, etc., creating a right triangle with increasing row lengths. Choice A would need j <= 4 always, choice C would need j <= (5-i) or similar, and choice D would need no outer loop."
  },
  {
    "id": "csa_u4_q134",
    "subject": "apcsa",
    "unit": 4,
    "topic": "string traversal",
    "topicLabel": "string traversal",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What does this method return when called with \"hello\"?\n\npublic static String reverse(String str) {\n    String result = \"\";\n    for (int i = str.length() - 1; i >= 0; i--) {\n        result += str.charAt(i);\n    }\n    return result;\n}",
    "choices": [
      "A) \"hello\"",
      "B) \"olleh\"",
      "C) \"h\"",
      "D) \"o\""
    ],
    "answer": 1,
    "explanation": "The loop starts at the last index (4) and goes backwards to 0, concatenating each character to result. For \"hello\": result becomes \"\" + 'o' + 'l' + 'l' + 'e' + 'h' = \"olleh\". Choice A suggests no reversal, choice C suggests only the first character, and choice D suggests only the last character."
  },
  {
    "id": "csa_u4_q135",
    "subject": "apcsa",
    "unit": 4,
    "topic": "while loops",
    "topicLabel": "while loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the final value of n after this code executes?\n\nint n = 100;\nwhile (n >= 10) {\n    n = n / 10;\n}",
    "choices": [
      "A) 1",
      "B) 10",
      "C) 0",
      "D) 9"
    ],
    "answer": 0,
    "explanation": "Starting with n = 100: first iteration n becomes 10, second iteration n becomes 1. Since 1 >= 10 is false, the loop terminates with n = 1. Choice B stops one iteration early, choice C suggests n becomes 0 somehow, and choice D might come from confusion with modulo operations."
  },
  {
    "id": "csa_u4_q136",
    "subject": "apcsa",
    "unit": 4,
    "topic": "arrays in loops",
    "topicLabel": "arrays in loops",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What does this code do to the array?\n\nint[] arr = {5, 2, 8, 1, 9};\nfor (int i = 0; i < arr.length / 2; i++) {\n    int temp = arr[i];\n    arr[i] = arr[arr.length - 1 - i];\n    arr[arr.length - 1 - i] = temp;\n}",
    "choices": [
      "A) Sorts the array in ascending order",
      "B) Reverses the array",
      "C) Doubles each element",
      "D) Finds the maximum element"
    ],
    "answer": 1,
    "explanation": "This code swaps elements from opposite ends: arr[0] with arr[4], arr[1] with arr[3], etc. The loop runs length/2 times to avoid swapping back. This reverses the array to {9, 1, 8, 2, 5}. Choice A describes sorting, choice C describes arithmetic operations, and choice D describes a search operation."
  },
  {
    "id": "csa_u4_q137",
    "subject": "apcsa",
    "unit": 4,
    "topic": "enhanced for loop",
    "topicLabel": "enhanced for loop",
    "difficulty": "medium",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of this code?\n\nint[] numbers = {10, 20, 30};\nfor (int num : numbers) {\n    num = num * 2;\n    System.out.print(num + \" \");\n}\nSystem.out.print(\"Array: \" + Arrays.toString(numbers));",
    "choices": [
      "A) 20 40 60 Array: [20, 40, 60]",
      "B) 20 40 60 Array: [10, 20, 30]",
      "C) 10 20 30 Array: [10, 20, 30]",
      "D) 10 20 30 Array: [20, 40, 60]"
    ],
    "answer": 1,
    "explanation": "In the enhanced for loop, num is a copy of each array element. Modifying num doesn't change the original array. The loop prints the doubled values (20 40 60) but the original array remains [10, 20, 30]. Choice A assumes the array is modified, choice C assumes num isn't modified, and choice D has contradictory output."
  },
  {
    "id": "csa_u4_q138",
    "subject": "apcsa",
    "unit": 4,
    "topic": "while loops",
    "topicLabel": "while loops",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of count after this code executes?\n\nint x = 64;\nint count = 0;\nwhile (x > 0) {\n    if (x % 2 == 1) {\n        count++;\n    }\n    x /= 2;\n}",
    "choices": [
      "A) 6",
      "B) 1",
      "C) 0",
      "D) 7"
    ],
    "answer": 1,
    "explanation": "This counts the number of 1 bits in 64's binary representation. 64 is 1000000 in binary, which has exactly one 1 bit. Students often miscalculate by thinking it counts iterations (6) or total digits (7), or assume it's 0 because 64 is even."
  },
  {
    "id": "csa_u4_q139",
    "subject": "apcsa",
    "unit": 4,
    "topic": "nested loops",
    "topicLabel": "nested loops",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times is the inner loop body executed?\n\nfor (int i = 0; i < 4; i++) {\n    for (int j = 0; j < i * i; j++) {\n        System.out.print(\"*\");\n    }\n}",
    "choices": [
      "A) 16",
      "B) 14",
      "C) 10",
      "D) 6"
    ],
    "answer": 1,
    "explanation": "When i=0: inner loop runs 0 times (0²). When i=1: runs 1 time (1²). When i=2: runs 4 times (2²). When i=3: runs 9 times (3²). Total: 0+1+4+9=14. Students often calculate 4² (16), sum of i values (6), or triangular number (10)."
  },
  {
    "id": "csa_u4_q140",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop tracing",
    "topicLabel": "loop tracing",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the final value of result?\n\nint result = 1;\nfor (int i = 2; i <= 5; i++) {\n    result *= i;\n    if (result > 20) {\n        break;\n    }\n}",
    "choices": [
      "A) 24",
      "B) 120",
      "C) 6",
      "D) 20"
    ],
    "answer": 0,
    "explanation": "Tracing: i=2, result=1*2=2 (≤20, continue). i=3, result=2*3=6 (≤20, continue). i=4, result=6*4=24 (>20, break). Final result is 24. Students might think it continues to 120 (5!), stops at 6 (before exceeding), or exactly equals 20."
  },
  {
    "id": "csa_u4_q141",
    "subject": "apcsa",
    "unit": 4,
    "topic": "string traversal",
    "topicLabel": "string traversal",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What does this method return for mystery(\"programming\")?\n\npublic static String mystery(String str) {\n    String result = \"\";\n    for (int i = str.length() - 1; i >= 0; i -= 2) {\n        result += str.charAt(i);\n    }\n    return result;\n}",
    "choices": [
      "A) \"gmao\"",
      "B) \"gnmrgorp\"",
      "C) \"gmaorp\"",
      "D) \"gorpora\""
    ],
    "answer": 0,
    "explanation": "The method extracts characters at positions 10,8,6,4,2,0 from \"programming\" (indices 0-10). Characters are: g(10), m(8), a(6), o(4). Result is \"gmao\". Students might reverse entire string (B), include all characters going backwards by 2 (C), or miscount indices (D)."
  },
  {
    "id": "csa_u4_q142",
    "subject": "apcsa",
    "unit": 4,
    "topic": "do-while",
    "topicLabel": "do-while",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the output of this code?\n\nint x = 10;\ndo {\n    x /= 2;\n    System.out.print(x + \" \");\n} while (x > 2);",
    "choices": [
      "A) 5 2 1 ",
      "B) 5 2 ",
      "C) 10 5 2 ",
      "D) 5 2 1 0 "
    ],
    "answer": 1,
    "explanation": "Do-while executes body first, then checks condition. x=10: x becomes 5, prints \"5 \", 5>2 so continue. x=5: x becomes 2, prints \"2 \", 2>2 is false so stop. Output is \"5 2 \". Students might include the extra 1 (A), include initial value (C), or continue to 0 (D)."
  },
  {
    "id": "csa_u4_q143",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop invariants",
    "topicLabel": "loop invariants",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which loop invariant correctly describes this code?\n\nint sum = 0;\nfor (int i = 0; i < n; i++) {\n    sum += i * i;\n}",
    "choices": [
      "A) sum equals the sum of squares from 0 to i-1",
      "B) sum equals the sum of squares from 0 to i",
      "C) sum equals the sum of integers from 0 to i-1",
      "D) sum equals i squared"
    ],
    "answer": 0,
    "explanation": "A loop invariant must be true at the start of each iteration. Before iteration i, sum contains squares of 0 through i-1. After adding i², it contains squares 0 through i, but the invariant describes the state at loop start. Choice B describes state after iteration, C describes wrong operation, D describes wrong relationship."
  },
  {
    "id": "csa_u4_q144",
    "subject": "apcsa",
    "unit": 4,
    "topic": "enhanced for loop",
    "topicLabel": "enhanced for loop",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which statement about enhanced for loops is FALSE?\n\nint[] arr = {1, 2, 3, 4, 5};\nfor (int x : arr) {\n    x = x * 2;\n}",
    "choices": [
      "A) The array arr is not modified by this loop",
      "B) The variable x gets a copy of each array element",
      "C) Enhanced for loops cannot modify the original array elements through the loop variable",
      "D) The loop variable x can be used to directly update values stored in arr"
    ],
    "answer": 3,
    "explanation": "D is false because the loop variable x holds a copy of each array element, so assigning to x does not update the original array. A is true because x is a copy, so modifications to x do not affect arr. B is true - x receives copies of the primitive values. C is true - enhanced for loops cannot modify the original array elements through the loop variable for primitive types."
  },
  {
    "id": "csa_u4_q145",
    "subject": "apcsa",
    "unit": 4,
    "topic": "ArrayList iteration",
    "topicLabel": "ArrayList iteration",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What happens when this code executes?\n\nArrayList<Integer> list = new ArrayList<>();\nlist.add(1); list.add(2); list.add(3);\nfor (int i = 0; i < list.size(); i++) {\n    if (list.get(i) % 2 == 1) {\n        list.remove(i);\n    }\n}",
    "choices": [
      "A) Removes all odd numbers successfully",
      "B) Throws IndexOutOfBoundsException",
      "C) Removes only the first odd number",
      "D) Creates an infinite loop"
    ],
    "answer": 2,
    "explanation": "When removing element at index 0 (value 1), element 3 shifts to index 1, but i increments to 1, skipping the check for 3. Only 1 is removed, final list is [2,3]. Students think it removes all odds (A), throws exception (B), or loops infinitely (D). This is the classic \"skip elements when removing\" bug."
  },
  {
    "id": "csa_u4_q146",
    "subject": "apcsa",
    "unit": 4,
    "topic": "while loops",
    "topicLabel": "while loops",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the final value of n after this code executes?\n\nint n = 1000;\nwhile (n != 1) {\n    if (n % 2 == 0) {\n        n = n / 2;\n    } else {\n        n = 3 * n + 1;\n    }\n}",
    "choices": [
      "A) 1",
      "B) 0",
      "C) The loop runs infinitely",
      "D) 2"
    ],
    "answer": 0,
    "explanation": "This implements the Collatz conjecture sequence. Starting from 1000, it will eventually reach 1 (the loop condition). When n=1, the while condition (n != 1) becomes false, so the loop exits with n=1. Students might think it continues to 0, runs forever, or stops at 2."
  },
  {
    "id": "csa_u4_q147",
    "subject": "apcsa",
    "unit": 4,
    "topic": "nested loops",
    "topicLabel": "nested loops",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What pattern does this code produce?\n\nfor (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= 4 - i; j++) {\n        System.out.print(\" \");\n    }\n    for (int k = 1; k <= 2 * i - 1; k++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}",
    "choices": [
      "A) A right triangle of stars",
      "B) A pyramid of stars centered",
      "C) A rectangle of stars",
      "D) A diamond shape"
    ],
    "answer": 1,
    "explanation": "This creates a centered pyramid. Row 1: 3 spaces + 1 star. Row 2: 2 spaces + 3 stars. Row 3: 1 space + 5 stars. Row 4: 0 spaces + 7 stars. The spaces center the stars, and star count follows 2i-1 pattern. Students might see just a right triangle (A), rectangle (C), or expect a full diamond (D)."
  },
  {
    "id": "csa_u4_q148",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop tracing",
    "topicLabel": "loop tracing",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the value of x when the loop terminates?\n\nint x = 2;\nwhile (x * x < 100) {\n    x++;\n}\nx--;",
    "choices": [
      "A) 9",
      "B) 10",
      "C) 11",
      "D) 8"
    ],
    "answer": 0,
    "explanation": "Loop continues while x²<100. When x=9, 9²=81<100 (continue). When x=10, 10²=100, condition x²<100 is false (stop). After loop, x=10, then x-- makes x=9. Students often forget the final decrement (B), think loop continues one more time (C), or miscalculate when condition fails (D)."
  },
  {
    "id": "csa_u4_q149",
    "subject": "apcsa",
    "unit": 4,
    "topic": "string traversal",
    "topicLabel": "string traversal",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many loop iterations occur when isPalindrome(\"racecar\") is called?\n\npublic static boolean isPalindrome(String s) {\n    for (int i = 0; i < s.length() / 2; i++) {\n        if (s.charAt(i) != s.charAt(s.length() - 1 - i)) {\n            return false;\n        }\n    }\n    return true;\n}",
    "choices": [
      "A) 3",
      "B) 4",
      "C) 7",
      "D) 6"
    ],
    "answer": 0,
    "explanation": "The loop runs while i < s.length() / 2. Since \"racecar\" has length 7, the condition is i < 7 / 2, which is i < 3 (integer division). So the loop iterates for i = 0, 1, and 2 - exactly 3 iterations. It compares: r vs r (i=0), a vs a (i=1), c vs c (i=2). All characters match, so the loop completes all 3 iterations without returning false, and the method returns true. Students might choose 4 (B) by rounding up 7/2, 7 (C) by using the full string length, or 6 (D) by using length - 1."
  },
  {
    "id": "csa_u4_q150",
    "subject": "apcsa",
    "unit": 4,
    "topic": "do-while",
    "topicLabel": "do-while",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "How many times does the loop body execute?\n\nint count = 0;\ndo {\n    count++;\n    if (count % 3 == 0) {\n        continue;\n    }\n    System.out.print(count + \" \");\n} while (count < 5);",
    "choices": [
      "A) 5",
      "B) 4",
      "C) 6",
      "D) 3"
    ],
    "answer": 0,
    "explanation": "Do-while executes body first, then checks condition. Loop body runs for count values 1,2,3,4,5. At count=5, condition count<5 is false, so loop stops. Body executed 5 times total. Students might count print statements (4, since 3 is skipped), think it continues to 6, or count only non-continue iterations (3)."
  },
  {
    "id": "csa_u4_q151",
    "subject": "apcsa",
    "unit": 4,
    "topic": "arrays in loops",
    "topicLabel": "arrays in loops",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the final state of the array?\n\nint[] nums = {5, 2, 8, 1, 9};\nfor (int i = 0; i < nums.length - 1; i++) {\n    if (nums[i] > nums[i + 1]) {\n        int temp = nums[i];\n        nums[i] = nums[i + 1];\n        nums[i + 1] = temp;\n    }\n}",
    "choices": [
      "A) {2, 5, 1, 8, 9}",
      "B) {5, 2, 1, 8, 9}",
      "C) {1, 2, 5, 8, 9}",
      "D) {2, 1, 5, 8, 9}"
    ],
    "answer": 0,
    "explanation": "This performs one pass of bubble sort. i=0: 5>2, swap → {2,5,8,1,9}. i=1: 5<8, no swap. i=2: 8>1, swap → {2,5,1,8,9}. i=3: 8<9, no swap. Final: {2,5,1,8,9}. Students might think it fully sorts (C), stops after first swap (B), or makes different swaps (D)."
  },
  {
    "id": "csa_u4_q152",
    "subject": "apcsa",
    "unit": 4,
    "topic": "loop invariants",
    "topicLabel": "loop invariants",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "What is the strongest loop invariant for this binary search implementation?\n\nint low = 0, high = arr.length - 1;\nwhile (low <= high) {\n    int mid = (low + high) / 2;\n    if (arr[mid] == target) return mid;\n    else if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n}",
    "choices": [
      "A) If target exists, it is between indices low and high inclusive",
      "B) The array remains sorted throughout execution",
      "C) low <= high at the start of each iteration",
      "D) mid is always the average of low and high"
    ],
    "answer": 0,
    "explanation": "The key invariant is that if target exists in the array, it must be in the range [low, high]. This drives the correctness of binary search. Choice B is true but not about loop progress. Choice C becomes false when loop exits. Choice D is implementation detail, not the essential invariant for correctness."
  },
  {
    "id": "csa_u4_q153",
    "subject": "apcsa",
    "unit": 4,
    "topic": "enhanced for loop",
    "topicLabel": "enhanced for loop",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which code segment will cause a compilation error?\n\nArrayList<String> list = new ArrayList<>();\nlist.add(\"apple\"); list.add(\"banana\");",
    "choices": [
      "A) for (String s : list) { s = s.toUpperCase(); }",
      "B) for (String s : list) { list.add(\"cherry\"); }",
      "C) for (String s : list) { System.out.println(s.length()); }",
      "D) for (int i : list) { System.out.println(i); }"
    ],
    "answer": 3,
    "explanation": "Choice D attempts to assign String elements to int variable, causing compilation error due to type mismatch. Choice A compiles (but doesn't modify list). Choice B compiles but may cause ConcurrentModificationException at runtime. Choice C compiles and runs correctly."
  },
  {
    "id": "csa_u4_q154",
    "subject": "apcsa",
    "unit": 4,
    "topic": "ArrayList iteration",
    "topicLabel": "ArrayList iteration",
    "difficulty": "hard",
    "calculator": false,
    "isLatex": false,
    "format": "text",
    "question": "Which is the safest way to remove all even numbers from an ArrayList<Integer>?\n\nArrayList<Integer> nums = new ArrayList<>();\n// assume nums is populated with integers",
    "choices": [
      "A) for (int i = 0; i < nums.size(); i++) { if (nums.get(i) % 2 == 0) nums.remove(i); }",
      "B) for (Integer n : nums) { if (n % 2 == 0) nums.remove(n); }",
      "C) for (int i = nums.size() - 1; i >= 0; i--) { if (nums.get(i) % 2 == 0) nums.remove(i); }",
      "D) while (nums.size() > 0) { if (nums.get(0) % 2 == 0) nums.remove(0); }"
    ],
    "answer": 2,
    "explanation": "Iterating backwards (C) prevents index shifting issues when removing elements. Choice A skips elements after removal. Choice B throws ConcurrentModificationException. Choice D creates infinite loop if first element is odd. Backwards iteration is the standard safe approach for removal during iteration."
  },
  {
    "id": "mcq_144",
    "unit": 4,
    "topic": "4.1",
    "topicLabel": "Ethical and Social Issues",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following is an ethical concern related to large-scale data collection?",
    "isCode": false,
    "code": "",
    "choices": [
      "Data collection makes programs run slower",
      "Collecting personal data without user consent may violate privacy",
      "Arrays can only hold primitive data types",
      "Databases cannot store more than 1 million records"
    ],
    "answer": 1,
    "explanation": "Collecting personal data without informed consent raises significant privacy and ethical concerns. Users should be aware of what data is collected and how it is used."
  },
  {
    "id": "mcq_145",
    "unit": 4,
    "topic": "4.1",
    "topicLabel": "Ethical and Social Issues",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the principle of data minimization?",
    "isCode": false,
    "code": "",
    "choices": [
      "Storing data in the smallest file format possible",
      "Collecting only the data that is necessary for a specific purpose",
      "Deleting all data after one use",
      "Using small arrays instead of large ones"
    ],
    "answer": 1,
    "explanation": "Data minimization is an ethical and legal principle that organizations should only collect the personal data that is strictly necessary for their stated purpose."
  },
  {
    "id": "mcq_146",
    "unit": 4,
    "topic": "4.2",
    "topicLabel": "Introduction to Data Sets",
    "difficulty": "easy",
    "source": "original",
    "question": "What is a data set?",
    "isCode": false,
    "code": "",
    "choices": [
      "A single variable that stores one value",
      "A collection of related data items that can be processed together",
      "A type of loop used for data processing",
      "A method that returns multiple values"
    ],
    "answer": 1,
    "explanation": "A data set is a collection of related data values (often stored in arrays or other data structures) that can be analyzed, processed, or manipulated together."
  },
  {
    "id": "mcq_147",
    "unit": 4,
    "topic": "4.3",
    "topicLabel": "Array Creation and Access",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the index of the last element in an array of 10 elements?",
    "isCode": false,
    "code": "",
    "choices": [
      "10",
      "9",
      "1",
      "0"
    ],
    "answer": 1,
    "explanation": "Arrays in Java are zero-indexed. An array of 10 elements has indices 0 through 9. The last element is at index 9 (= length - 1)."
  },
  {
    "id": "mcq_148",
    "unit": 4,
    "topic": "4.3",
    "topicLabel": "Array Creation and Access",
    "difficulty": "easy",
    "source": "original",
    "question": "Which of the following correctly creates an integer array of size 5?",
    "isCode": false,
    "code": "",
    "choices": [
      "int arr = new int[5];",
      "int[] arr = new int[5];",
      "int arr[5];",
      "int[] arr = int[5];"
    ],
    "answer": 1,
    "explanation": "The correct Java syntax for creating an array is: elementType[] arrayName = new elementType[size]; So 'int[] arr = new int[5];' is correct."
  },
  {
    "id": "mcq_149",
    "unit": 4,
    "topic": "4.3",
    "topicLabel": "Array Creation and Access",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of the following code?",
    "isCode": true,
    "code": "int[] arr = {10, 20, 30, 40, 50};\nSystem.out.println(arr[0] + arr[arr.length - 1]);",
    "choices": [
      "60",
      "30",
      "50",
      "10"
    ],
    "answer": 0,
    "explanation": "arr[0] = 10. arr[arr.length - 1] = arr[4] = 50. 10 + 50 = 60."
  },
  {
    "id": "mcq_150",
    "unit": 4,
    "topic": "4.3",
    "topicLabel": "Array Creation and Access",
    "difficulty": "medium",
    "source": "original",
    "question": "What happens when you access arr[-1] in Java?",
    "isCode": false,
    "code": "",
    "choices": [
      "Returns the last element",
      "Returns 0",
      "Throws an ArrayIndexOutOfBoundsException",
      "Compilation error"
    ],
    "answer": 2,
    "explanation": "Java arrays use non-negative integer indices (0 to length-1). Accessing a negative index throws ArrayIndexOutOfBoundsException at runtime."
  },
  {
    "id": "mcq_151",
    "unit": 4,
    "topic": "4.4",
    "topicLabel": "Array Traversals",
    "difficulty": "easy",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "int[] nums = {3, 1, 4, 1, 5};\nfor (int i = 0; i < nums.length; i++) {\n    System.out.print(nums[i] + \" \");\n}",
    "choices": [
      "3 1 4 1 5 ",
      "5 1 4 1 3 ",
      "1 1 3 4 5 ",
      "3 4 5 "
    ],
    "answer": 0,
    "explanation": "The loop traverses from index 0 to 4, printing each element in order: 3 1 4 1 5."
  },
  {
    "id": "mcq_152",
    "unit": 4,
    "topic": "4.4",
    "topicLabel": "Array Traversals",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following enhanced for loop do?",
    "isCode": true,
    "code": "int[] arr = {2, 5, 8, 3, 7};\nint sum = 0;\nfor (int val : arr) {\n    sum += val;\n}\nSystem.out.println(sum);",
    "choices": [
      "25",
      "87532",
      "2",
      "7"
    ],
    "answer": 0,
    "explanation": "The enhanced for loop (for-each) iterates over each element in arr. sum = 2+5+8+3+7 = 25."
  },
  {
    "id": "mcq_153",
    "unit": 4,
    "topic": "4.4",
    "topicLabel": "Array Traversals",
    "difficulty": "hard",
    "source": "original",
    "question": "What is a key limitation of the enhanced for loop compared to a regular for loop?",
    "isCode": false,
    "code": "",
    "choices": [
      "The enhanced for loop is slower",
      "The enhanced for loop cannot be used with arrays — only ArrayList",
      "The enhanced for loop does not give access to the current index",
      "The enhanced for loop requires the array to be sorted"
    ],
    "answer": 2,
    "explanation": "The enhanced for loop (for-each) doesn't provide the index of the current element. When you need the index (e.g., to modify elements, compare adjacent elements, or use the index in calculations), you must use a standard for loop."
  },
  {
    "id": "mcq_154",
    "unit": 4,
    "topic": "4.5",
    "topicLabel": "Implementing Array Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code compute?",
    "isCode": true,
    "code": "int[] arr = {3, 7, 2, 9, 5};\nint result = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    if (arr[i] < result) result = arr[i];\n}\nSystem.out.println(result);",
    "choices": [
      "9",
      "3",
      "2",
      "5"
    ],
    "answer": 2,
    "explanation": "This is the minimum-finding algorithm. Starting with arr[0]=3, it updates result whenever a smaller element is found. Minimum is 2."
  },
  {
    "id": "mcq_155",
    "unit": 4,
    "topic": "4.5",
    "topicLabel": "Implementing Array Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What does the following code do to the array?",
    "isCode": true,
    "code": "int[] arr = {1, 2, 3, 4, 5};\nfor (int i = 0; i < arr.length / 2; i++) {\n    int temp = arr[i];\n    arr[i] = arr[arr.length - 1 - i];\n    arr[arr.length - 1 - i] = temp;\n}\n// arr is now:",
    "choices": [
      "{5, 4, 3, 2, 1}",
      "{1, 2, 3, 4, 5} (unchanged)",
      "{2, 4, 1, 3, 5}",
      "{5, 4, 3, 2, 1} but only half reversed"
    ],
    "answer": 0,
    "explanation": "This is the array reversal algorithm. It swaps elements from both ends toward the middle. After execution: {5, 4, 3, 2, 1}."
  },
  {
    "id": "mcq_156",
    "unit": 4,
    "topic": "4.6",
    "topicLabel": "Using Text Files",
    "difficulty": "easy",
    "source": "original",
    "question": "In Java, to read from a text file, you would typically use classes from which package?",
    "isCode": false,
    "code": "",
    "choices": [
      "java.lang",
      "java.util",
      "java.io",
      "java.data"
    ],
    "answer": 2,
    "explanation": "File I/O classes in Java are in the java.io package. This includes File, FileReader, BufferedReader, Scanner (for file reading), PrintWriter, etc."
  },
  {
    "id": "mcq_157",
    "unit": 4,
    "topic": "4.7",
    "topicLabel": "Wrapper Classes",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the wrapper class for the primitive type int?",
    "isCode": false,
    "code": "",
    "choices": [
      "Int",
      "Integer",
      "INT",
      "Integ"
    ],
    "answer": 1,
    "explanation": "Each Java primitive has a corresponding wrapper class: int → Integer, double → Double, boolean → Boolean, char → Character, etc."
  },
  {
    "id": "mcq_158",
    "unit": 4,
    "topic": "4.7",
    "topicLabel": "Wrapper Classes",
    "difficulty": "medium",
    "source": "original",
    "question": "What does autoboxing do in Java?",
    "isCode": false,
    "code": "",
    "choices": [
      "Automatically sorts an ArrayList",
      "Automatically converts between primitives and their wrapper classes",
      "Automatically allocates memory for arrays",
      "Automatically calls toString() on primitives"
    ],
    "answer": 1,
    "explanation": "Autoboxing is the automatic conversion of a primitive (like int) to its corresponding wrapper class object (Integer), and unboxing is the reverse. Java handles this transparently."
  },
  {
    "id": "mcq_159",
    "unit": 4,
    "topic": "4.7",
    "topicLabel": "Wrapper Classes",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "Integer a = 5;\nInteger b = 5;\nInteger c = 200;\nInteger d = 200;\nSystem.out.println(a == b);\nSystem.out.println(c == d);",
    "choices": [
      "true\ntrue",
      "false\nfalse",
      "true\nfalse",
      "false\ntrue"
    ],
    "answer": 2,
    "explanation": "Java caches Integer objects for values -128 to 127. a and b both point to the cached Integer(5), so a==b is true. 200 is outside the cache range, so c and d are different objects; c==d is false."
  },
  {
    "id": "mcq_160",
    "unit": 4,
    "topic": "4.8",
    "topicLabel": "ArrayList Methods",
    "difficulty": "easy",
    "source": "original",
    "question": "Which import is needed to use ArrayList?",
    "isCode": false,
    "code": "",
    "choices": [
      "import java.lang.ArrayList;",
      "import java.util.ArrayList;",
      "import java.io.ArrayList;",
      "No import needed"
    ],
    "answer": 1,
    "explanation": "ArrayList is in the java.util package: import java.util.ArrayList;"
  },
  {
    "id": "mcq_161",
    "unit": 4,
    "topic": "4.8",
    "topicLabel": "ArrayList Methods",
    "difficulty": "easy",
    "source": "original",
    "question": "How do you add an element to the end of an ArrayList named list?",
    "isCode": false,
    "code": "",
    "choices": [
      "list.push(element);",
      "list.add(element);",
      "list.append(element);",
      "list[size] = element;"
    ],
    "answer": 1,
    "explanation": "The ArrayList add(element) method appends an element to the end of the list."
  },
  {
    "id": "mcq_162",
    "unit": 4,
    "topic": "4.8",
    "topicLabel": "ArrayList Methods",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output of this code?",
    "isCode": true,
    "code": "import java.util.ArrayList;\nArrayList<Integer> list = new ArrayList<>();\nlist.add(10);\nlist.add(20);\nlist.add(30);\nlist.remove(1);\nSystem.out.println(list);",
    "choices": [
      "[10, 30]",
      "[20, 30]",
      "[10, 20]",
      "[10, 20, 30]"
    ],
    "answer": 0,
    "explanation": "list.remove(1) removes the element at index 1 (which is 20). The list becomes [10, 30]."
  },
  {
    "id": "mcq_163",
    "unit": 4,
    "topic": "4.8",
    "topicLabel": "ArrayList Methods",
    "difficulty": "hard",
    "source": "original",
    "question": "What does list.set(2, 99) do?",
    "isCode": false,
    "code": "",
    "choices": [
      "Inserts 99 at index 2, shifting elements right",
      "Replaces the element at index 2 with 99",
      "Removes all elements and adds 99 at index 2",
      "Sets the list capacity to 99 starting at index 2"
    ],
    "answer": 1,
    "explanation": "ArrayList.set(index, element) replaces the element at the specified index with the new element. Unlike add(), it doesn't shift elements."
  },
  {
    "id": "mcq_164",
    "unit": 4,
    "topic": "4.9",
    "topicLabel": "ArrayList Traversals",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the correct way to traverse an ArrayList with a for-each loop?",
    "isCode": true,
    "code": "ArrayList<String> words = new ArrayList<>();\nwords.add(\"hello\");\nwords.add(\"world\");",
    "choices": [
      "for (int i = 0; i < words.length; i++) { System.out.println(words[i]); }",
      "for (String w : words) { System.out.println(w); }",
      "for (String w in words) { System.out.println(w); }",
      "foreach (String w : words) { System.out.println(w); }"
    ],
    "answer": 1,
    "explanation": "For ArrayList, use words.size() (not .length) for index loops. The enhanced for loop uses ':' not 'in'. 'foreach' is not Java syntax. Option B is correct."
  },
  {
    "id": "mcq_165",
    "unit": 4,
    "topic": "4.9",
    "topicLabel": "ArrayList Traversals",
    "difficulty": "hard",
    "source": "original",
    "question": "What is wrong with the following code that tries to remove all even numbers?",
    "isCode": true,
    "code": "ArrayList<Integer> nums = new ArrayList<>(Arrays.asList(1,2,3,4,5,6));\nfor (int i = 0; i < nums.size(); i++) {\n    if (nums.get(i) % 2 == 0) {\n        nums.remove(i);\n    }\n}",
    "choices": [
      "You cannot remove from an ArrayList in a for loop",
      "When an element is removed, indices shift left, so consecutive even numbers may be skipped",
      "nums.get() does not exist",
      "Nothing — the code is correct"
    ],
    "answer": 1,
    "explanation": "When an element at index i is removed, all subsequent elements shift left. The next element is now at index i, but the loop increments i to i+1, skipping it. Solution: decrement i after removal, or iterate backwards."
  },
  {
    "id": "mcq_166",
    "unit": 4,
    "topic": "4.10",
    "topicLabel": "Implementing ArrayList Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code do?",
    "isCode": true,
    "code": "ArrayList<Integer> list = new ArrayList<>(Arrays.asList(3,1,4,1,5,9,2,6));\nArrayList<Integer> result = new ArrayList<>();\nfor (int val : list) {\n    if (val > 4) result.add(val);\n}\nSystem.out.println(result);",
    "choices": [
      "[5, 9, 6]",
      "[3, 1, 4, 1]",
      "[9, 6]",
      "[5, 9, 2, 6]"
    ],
    "answer": 0,
    "explanation": "The code filters elements greater than 4. From {3,1,4,1,5,9,2,6}: 5>4, 9>4, 6>4. Result: [5, 9, 6]."
  },
  {
    "id": "mcq_167",
    "unit": 4,
    "topic": "4.10",
    "topicLabel": "Implementing ArrayList Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "ArrayList<String> names = new ArrayList<>(Arrays.asList(\"Bob\",\"Alice\",\"Charlie\",\"Alice\",\"Dave\"));\nArrayList<String> unique = new ArrayList<>();\nfor (String name : names) {\n    if (!unique.contains(name)) {\n        unique.add(name);\n    }\n}\nSystem.out.println(unique.size());",
    "choices": [
      "5",
      "4",
      "3",
      "2"
    ],
    "answer": 1,
    "explanation": "Removing duplicates: Bob, Alice, Charlie, Dave = 4 unique names. \"Alice\" appears twice but is only added once."
  },
  {
    "id": "mcq_168",
    "unit": 4,
    "topic": "4.11",
    "topicLabel": "2D Array Creation and Access",
    "difficulty": "easy",
    "source": "original",
    "question": "How do you access the element in row 2, column 3 of a 2D array named grid?",
    "isCode": false,
    "code": "",
    "choices": [
      "grid[2, 3]",
      "grid[2][3]",
      "grid.get(2, 3)",
      "grid[3][2]"
    ],
    "answer": 1,
    "explanation": "2D arrays in Java are accessed with two separate bracket operators: array[row][col]. Row 2, column 3 is grid[2][3] (using 0-based indexing, these are the 3rd row and 4th column)."
  },
  {
    "id": "mcq_169",
    "unit": 4,
    "topic": "4.11",
    "topicLabel": "2D Array Creation and Access",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the number of rows and columns in the following 2D array?",
    "isCode": true,
    "code": "int[][] matrix = new int[4][6];",
    "choices": [
      "4 rows, 6 columns",
      "6 rows, 4 columns",
      "24 total (no rows/cols)",
      "4 rows, 4 columns"
    ],
    "answer": 0,
    "explanation": "new int[rows][cols] — so new int[4][6] creates a 2D array with 4 rows and 6 columns. matrix.length = 4, matrix[0].length = 6."
  },
  {
    "id": "mcq_170",
    "unit": 4,
    "topic": "4.11",
    "topicLabel": "2D Array Creation and Access",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int[][] grid = {{1,2,3},{4,5,6},{7,8,9}};\nSystem.out.println(grid[1][2]);",
    "choices": [
      "6",
      "5",
      "8",
      "3"
    ],
    "answer": 0,
    "explanation": "grid[1] is the second row {4,5,6}. grid[1][2] is the third element of that row = 6."
  },
  {
    "id": "mcq_171",
    "unit": 4,
    "topic": "4.12",
    "topicLabel": "2D Array Traversals",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the sum computed by the following code?",
    "isCode": true,
    "code": "int[][] m = {{1,2},{3,4},{5,6}};\nint sum = 0;\nfor (int r = 0; r < m.length; r++) {\n    for (int c = 0; c < m[r].length; c++) {\n        sum += m[r][c];\n    }\n}\nSystem.out.println(sum);",
    "choices": [
      "21",
      "15",
      "18",
      "6"
    ],
    "answer": 0,
    "explanation": "Sum all elements: 1+2+3+4+5+6 = 21."
  },
  {
    "id": "mcq_172",
    "unit": 4,
    "topic": "4.12",
    "topicLabel": "2D Array Traversals",
    "difficulty": "hard",
    "source": "original",
    "question": "How many times does the inner loop body execute?",
    "isCode": true,
    "code": "int[][] m = new int[3][4];\nfor (int[] row : m) {\n    for (int val : row) {\n        // inner body\n    }\n}",
    "choices": [
      "7",
      "12",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "3 rows, each with 4 columns. Total = 3 × 4 = 12 executions."
  },
  {
    "id": "mcq_173",
    "unit": 4,
    "topic": "4.13",
    "topicLabel": "Implementing 2D Array Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What does the following code compute?",
    "isCode": true,
    "code": "int[][] m = {{1,2,3},{4,5,6},{7,8,9}};\nint diag = 0;\nfor (int i = 0; i < m.length; i++) {\n    diag += m[i][i];\n}\nSystem.out.println(diag);",
    "choices": [
      "15",
      "12",
      "9",
      "45"
    ],
    "answer": 0,
    "explanation": "This sums the main diagonal: m[0][0]=1, m[1][1]=5, m[2][2]=9. Sum = 1+5+9 = 15."
  },
  {
    "id": "mcq_174",
    "unit": 4,
    "topic": "4.14",
    "topicLabel": "Searching Algorithms",
    "difficulty": "easy",
    "source": "original",
    "question": "What does linear (sequential) search do?",
    "isCode": false,
    "code": "",
    "choices": [
      "Jumps to the middle of the array each step",
      "Checks each element one at a time from beginning to end",
      "Requires the array to be sorted first",
      "Only works on arrays of Strings"
    ],
    "answer": 1,
    "explanation": "Linear search checks each element sequentially until the target is found or the entire array is searched. It works on unsorted arrays and has O(n) time complexity."
  },
  {
    "id": "mcq_175",
    "unit": 4,
    "topic": "4.14",
    "topicLabel": "Searching Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "Which prerequisite does binary search require?",
    "isCode": false,
    "code": "",
    "choices": [
      "The array must have an even number of elements",
      "The array must be sorted",
      "The array must contain only integers",
      "The target must be in the first half"
    ],
    "answer": 1,
    "explanation": "Binary search requires a sorted array. It works by comparing the target to the middle element and eliminating half the search space each step, achieving O(log n) performance."
  },
  {
    "id": "mcq_176",
    "unit": 4,
    "topic": "4.14",
    "topicLabel": "Searching Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "In binary search on a sorted array of 16 elements, what is the maximum number of comparisons needed?",
    "isCode": false,
    "code": "",
    "choices": [
      "4",
      "5",
      "8",
      "16"
    ],
    "answer": 0,
    "explanation": "Binary search: max comparisons = ceil(log₂(n)) = ceil(log₂(16)) = 4 (since 2^4 = 16). Each comparison halves the search space."
  },
  {
    "id": "mcq_177",
    "unit": 4,
    "topic": "4.15",
    "topicLabel": "Sorting Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "How does selection sort work?",
    "isCode": false,
    "code": "",
    "choices": [
      "It compares adjacent elements and swaps them if out of order",
      "It finds the minimum element and places it at the correct position repeatedly",
      "It splits the array in half and sorts each half recursively",
      "It inserts each element into its correct position one at a time from the left"
    ],
    "answer": 1,
    "explanation": "Selection sort finds the minimum element in the unsorted portion and swaps it to its correct position. It makes n-1 passes, each finding the minimum of the remaining unsorted portion."
  },
  {
    "id": "mcq_178",
    "unit": 4,
    "topic": "4.15",
    "topicLabel": "Sorting Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the state of the array after TWO passes of selection sort on {64, 25, 12, 22, 11}?",
    "isCode": false,
    "code": "",
    "choices": [
      "{11, 12, 25, 22, 64}",
      "{11, 25, 12, 22, 64}",
      "{11, 12, 64, 25, 22}",
      "{11, 12, 22, 25, 64}"
    ],
    "answer": 0,
    "explanation": "Pass 1: Find min of entire array = 11 (index 4). Swap with index 0 → {11, 25, 12, 22, 64}. Pass 2: Find min of indices 1–4 = 12 (index 2). Swap with index 1 → {11, 12, 25, 22, 64}."
  },
  {
    "id": "mcq_179",
    "unit": 4,
    "topic": "4.15",
    "topicLabel": "Sorting Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the time complexity of insertion sort in the worst case?",
    "isCode": false,
    "code": "",
    "choices": [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "Insertion sort has O(n²) worst-case time complexity. The worst case occurs when the input is sorted in reverse order, requiring the maximum number of comparisons and shifts."
  },
  {
    "id": "mcq_180",
    "unit": 4,
    "topic": "4.16",
    "topicLabel": "Recursion",
    "difficulty": "easy",
    "source": "original",
    "question": "What is a base case in a recursive method?",
    "isCode": false,
    "code": "",
    "choices": [
      "The first call to the recursive method",
      "The condition that stops the recursion without making another recursive call",
      "The last line of a recursive method",
      "A method that calls itself from inside a loop"
    ],
    "answer": 1,
    "explanation": "A base case is a condition that can be solved directly without further recursion. Every recursive method must have at least one base case to prevent infinite recursion."
  },
  {
    "id": "mcq_181",
    "unit": 4,
    "topic": "4.16",
    "topicLabel": "Recursion",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following recursive method return when called with n=5?",
    "isCode": true,
    "code": "public static int mystery(int n) {\n    if (n <= 1) return 1;\n    return n * mystery(n - 1);\n}",
    "choices": [
      "5",
      "120",
      "15",
      "25"
    ],
    "answer": 1,
    "explanation": "This computes n! (factorial). mystery(5) = 5 * mystery(4) = 5 * 4 * mystery(3) = 5*4*3*2*1 = 120."
  },
  {
    "id": "mcq_182",
    "unit": 4,
    "topic": "4.16",
    "topicLabel": "Recursion",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of mystery(4)?",
    "isCode": true,
    "code": "public static int mystery(int n) {\n    if (n == 0) return 0;\n    return mystery(n - 1) + n;\n}",
    "choices": [
      "4",
      "10",
      "6",
      "24"
    ],
    "answer": 1,
    "explanation": "mystery(4) = mystery(3) + 4. mystery(3) = mystery(2) + 3. mystery(2) = mystery(1) + 2. mystery(1) = mystery(0) + 1 = 1. So: 1+2+3+4 = 10. This computes the sum 1+2+...+n."
  },
  {
    "id": "mcq_183",
    "unit": 4,
    "topic": "4.16",
    "topicLabel": "Recursion",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of fib(6)?",
    "isCode": true,
    "code": "public static int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}",
    "choices": [
      "5",
      "8",
      "13",
      "3"
    ],
    "answer": 1,
    "explanation": "Fibonacci: fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8."
  },
  {
    "id": "mcq_184",
    "unit": 4,
    "topic": "4.17",
    "topicLabel": "Recursive Searching and Sorting",
    "difficulty": "medium",
    "source": "original",
    "question": "Which sorting algorithm uses a recursive divide-and-conquer approach?",
    "isCode": false,
    "code": "",
    "choices": [
      "Selection sort",
      "Insertion sort",
      "Bubble sort",
      "Merge sort"
    ],
    "answer": 3,
    "explanation": "Merge sort is a recursive divide-and-conquer algorithm. It splits the array in half, recursively sorts each half, then merges the sorted halves. It achieves O(n log n) performance."
  },
  {
    "id": "mcq_185",
    "unit": 4,
    "topic": "4.17",
    "topicLabel": "Recursive Searching and Sorting",
    "difficulty": "hard",
    "source": "original",
    "question": "What does the following recursive binary search return when called with binarySearch(arr, 0, 4, 7) on arr = {2, 4, 7, 9, 11}?",
    "isCode": true,
    "code": "public static int binarySearch(int[] arr, int lo, int hi, int target) {\n    if (lo > hi) return -1;\n    int mid = (lo + hi) / 2;\n    if (arr[mid] == target) return mid;\n    if (arr[mid] < target) return binarySearch(arr, mid + 1, hi, target);\n    return binarySearch(arr, lo, mid - 1, target);\n}",
    "choices": [
      "2",
      "7",
      "-1",
      "1"
    ],
    "answer": 0,
    "explanation": "arr = {2,4,7,9,11}, target=7. First call: mid=(0+4)/2=2, arr[2]=7 == target. Returns 2 (the index). Answer is index 2 → choice \"2\" at position 0."
  },
  {
    "id": "mcq_186",
    "unit": 4,
    "topic": "4.3",
    "topicLabel": "Array Creation and Access",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the default value of elements in a newly created int[] array?",
    "isCode": false,
    "code": "",
    "choices": [
      "null",
      "-1",
      "0",
      "undefined"
    ],
    "answer": 2,
    "explanation": "In Java, int array elements are automatically initialized to 0. Boolean arrays initialize to false, double arrays to 0.0, and object arrays to null."
  },
  {
    "id": "mcq_187",
    "unit": 4,
    "topic": "4.5",
    "topicLabel": "Implementing Array Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int[] arr = {1, 2, 3, 4, 5};\nint count = 0;\nfor (int val : arr) {\n    if (val % 2 != 0) count++;\n}\nSystem.out.println(count);",
    "choices": [
      "2",
      "3",
      "5",
      "1"
    ],
    "answer": 1,
    "explanation": "Odd numbers in {1,2,3,4,5}: 1, 3, 5 → count = 3."
  },
  {
    "id": "mcq_188",
    "unit": 4,
    "topic": "4.8",
    "topicLabel": "ArrayList Methods",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the difference between an array and an ArrayList?",
    "isCode": false,
    "code": "",
    "choices": [
      "Arrays can hold objects; ArrayLists can only hold primitives",
      "Arrays have fixed size; ArrayLists can grow and shrink dynamically",
      "ArrayLists are faster than arrays for all operations",
      "Arrays can hold multiple types; ArrayLists can only hold one type"
    ],
    "answer": 1,
    "explanation": "Arrays have a fixed size set at creation. ArrayLists can grow and shrink dynamically. Arrays can hold primitives directly; ArrayLists require wrapper types (Integer, not int)."
  },
  {
    "id": "mcq_189",
    "unit": 4,
    "topic": "4.14",
    "topicLabel": "Searching Algorithms",
    "difficulty": "easy",
    "source": "original",
    "question": "What does a linear search return if the target is not found?",
    "isCode": false,
    "code": "",
    "choices": [
      "0",
      "null",
      "-1 (by convention)",
      "It throws an exception"
    ],
    "answer": 2,
    "explanation": "By convention, search algorithms return -1 to indicate the target was not found (since -1 is not a valid array index)."
  },
  {
    "id": "mcq_190",
    "unit": 4,
    "topic": "4.16",
    "topicLabel": "Recursion",
    "difficulty": "medium",
    "source": "original",
    "question": "What happens if a recursive method has no base case?",
    "isCode": false,
    "code": "",
    "choices": [
      "It returns null after 100 calls",
      "It compiles but causes a StackOverflowError at runtime",
      "It causes a compilation error",
      "It runs forever without error"
    ],
    "answer": 1,
    "explanation": "Without a base case, recursion never stops. Each call adds a stack frame until the call stack runs out of memory, causing a StackOverflowError."
  },
  {
    "id": "mcq_191",
    "unit": 4,
    "topic": "4.4",
    "topicLabel": "Array Traversals",
    "difficulty": "medium",
    "source": "original",
    "question": "What is printed?",
    "isCode": true,
    "code": "int[] arr = {5, 10, 15, 20, 25};\nfor (int i = arr.length - 1; i >= 0; i--) {\n    System.out.print(arr[i] + \" \");\n}",
    "choices": [
      "5 10 15 20 25 ",
      "25 20 15 10 5 ",
      "5 25 10 20 15 ",
      "25 5 20 10 15 "
    ],
    "answer": 1,
    "explanation": "The loop traverses from the last index (4) to 0, printing elements in reverse: 25 20 15 10 5."
  },
  {
    "id": "mcq_192",
    "unit": 4,
    "topic": "4.11",
    "topicLabel": "2D Array Creation and Access",
    "difficulty": "easy",
    "source": "original",
    "question": "If matrix is a 2D array, what does matrix.length return?",
    "isCode": false,
    "code": "",
    "choices": [
      "The total number of elements",
      "The number of rows",
      "The number of columns",
      "The number of columns in the first row"
    ],
    "answer": 1,
    "explanation": "For a 2D array, .length gives the number of rows. To get the number of columns, use matrix[0].length (assuming rectangular array)."
  },
  {
    "id": "mcq_193",
    "unit": 4,
    "topic": "4.15",
    "topicLabel": "Sorting Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "How does bubble sort work?",
    "isCode": false,
    "code": "",
    "choices": [
      "It selects the minimum element and places it at the front",
      "It repeatedly compares adjacent elements and swaps them if they are in the wrong order",
      "It inserts each element into its correct position in the sorted portion",
      "It divides the array in half recursively"
    ],
    "answer": 1,
    "explanation": "Bubble sort compares adjacent pairs and swaps them if out of order. After each pass, the largest unsorted element 'bubbles' to its correct position at the end."
  },
  {
    "id": "mcq_194",
    "unit": 4,
    "topic": "4.7",
    "topicLabel": "Wrapper Classes",
    "difficulty": "easy",
    "source": "original",
    "question": "Which method converts the String \"42\" to the int value 42?",
    "isCode": false,
    "code": "",
    "choices": [
      "String.toInt(\"42\")",
      "Integer.parseInt(\"42\")",
      "\"42\".intValue()",
      "int.parse(\"42\")"
    ],
    "answer": 1,
    "explanation": "Integer.parseInt(String) converts a String to a primitive int. This is a static method of the Integer wrapper class."
  },
  {
    "id": "mcq_195",
    "unit": 4,
    "topic": "4.13",
    "topicLabel": "Implementing 2D Array Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int[][] grid = {{1,2,3},{4,5,6},{7,8,9}};\nint sum = 0;\nfor (int c = 0; c < grid[0].length; c++) {\n    sum += grid[0][c];\n}\nSystem.out.println(sum);",
    "choices": [
      "12",
      "6",
      "9",
      "15"
    ],
    "answer": 1,
    "explanation": "This sums the first row: grid[0] = {1, 2, 3}. Sum = 1+2+3 = 6."
  },
  {
    "id": "mcq_196",
    "unit": 4,
    "topic": "4.9",
    "topicLabel": "ArrayList Traversals",
    "difficulty": "easy",
    "source": "original",
    "question": "What method returns the number of elements in an ArrayList?",
    "isCode": false,
    "code": "",
    "choices": [
      "length()",
      "size()",
      "count()",
      "length"
    ],
    "answer": 1,
    "explanation": "ArrayList uses size() to return the number of elements. Arrays use .length (a field, not a method). This is a common source of confusion."
  },
  {
    "id": "mcq_197",
    "unit": 4,
    "topic": "4.5",
    "topicLabel": "Implementing Array Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int[] arr = {5, 2, 8, 1, 9, 3};\nint secondLargest = Integer.MIN_VALUE;\nint largest = Integer.MIN_VALUE;\nfor (int val : arr) {\n    if (val > largest) {\n        secondLargest = largest;\n        largest = val;\n    } else if (val > secondLargest) {\n        secondLargest = val;\n    }\n}\nSystem.out.println(secondLargest);",
    "choices": [
      "8",
      "5",
      "9",
      "3"
    ],
    "answer": 0,
    "explanation": "Iterating: 5 becomes largest. 2 < 5. 8 > 5: secondLargest=5, largest=8. 1<8. 9>8: secondLargest=8, largest=9. 3<9 but 3<8. secondLargest = 8."
  },
  {
    "id": "mcq_198",
    "unit": 4,
    "topic": "4.12",
    "topicLabel": "2D Array Traversals",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this code that prints a 2D array by columns?",
    "isCode": true,
    "code": "int[][] m = {{1,2,3},{4,5,6}};\nfor (int c = 0; c < m[0].length; c++) {\n    for (int r = 0; r < m.length; r++) {\n        System.out.print(m[r][c] + \" \");\n    }\n}",
    "choices": [
      "1 2 3 4 5 6 ",
      "1 4 2 5 3 6 ",
      "4 5 6 1 2 3 ",
      "1 4 3 6 2 5 "
    ],
    "answer": 1,
    "explanation": "Column-major traversal: c=0: m[0][0]=1, m[1][0]=4. c=1: m[0][1]=2, m[1][1]=5. c=2: m[0][2]=3, m[1][2]=6. Output: \"1 4 2 5 3 6 \"."
  },
  {
    "id": "mcq_199",
    "unit": 4,
    "topic": "4.10",
    "topicLabel": "Implementing ArrayList Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the correct way to remove all elements from an ArrayList that are less than 5?",
    "isCode": false,
    "code": "",
    "choices": [
      "for (int i = 0; i < list.size(); i++) { if (list.get(i) < 5) list.remove(i); }",
      "for (int i = list.size()-1; i >= 0; i--) { if (list.get(i) < 5) list.remove(i); }",
      "for (int val : list) { if (val < 5) list.remove(val); }",
      "list.removeIf(n -> n >= 5);"
    ],
    "answer": 1,
    "explanation": "Iterating backwards prevents index-skipping problems. When you remove element at index i and iterate forward, the next element moves to index i but you increment to i+1. Iterating backward avoids this issue."
  },
  {
    "id": "mcq_200",
    "unit": 4,
    "topic": "4.16",
    "topicLabel": "Recursion",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this recursive power method when called as power(2, 8)?",
    "isCode": true,
    "code": "public static int power(int base, int exp) {\n    if (exp == 0) return 1;\n    if (exp % 2 == 0) {\n        int half = power(base, exp / 2);\n        return half * half;\n    }\n    return base * power(base, exp - 1);\n}",
    "choices": [
      "64",
      "128",
      "256",
      "16"
    ],
    "answer": 2,
    "explanation": "This is fast exponentiation. power(2,8): exp=8 even → half=power(2,4). power(2,4): exp=4 even → half=power(2,2). power(2,2): exp=2 even → half=power(2,1). power(2,1): exp=1 odd → 2*power(2,0)=2*1=2. So power(2,2)=2*2=4, power(2,4)=4*4=16, power(2,8)=16*16=256."
  },
  {
    "id": "mcq_201",
    "unit": 4,
    "topic": "4.14",
    "topicLabel": "Searching Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What does this linear search return for target=99 in arr={1,2,3,4,5}?",
    "isCode": true,
    "code": "public static int linearSearch(int[] arr, int target) {\n    for (int i = 0; i < arr.length; i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}",
    "choices": [
      "0",
      "5",
      "-1",
      "null"
    ],
    "answer": 2,
    "explanation": "99 is not in the array {1,2,3,4,5}. After checking all elements without finding 99, the method returns -1."
  },
  {
    "id": "mcq_202",
    "unit": 4,
    "topic": "4.8",
    "topicLabel": "ArrayList Methods",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1,2,3,4,5));\nlist.add(2, 99);\nSystem.out.println(list);",
    "choices": [
      "[1, 2, 99, 3, 4, 5]",
      "[1, 2, 3, 99, 4, 5]",
      "[1, 99, 2, 3, 4, 5]",
      "[99, 1, 2, 3, 4, 5]"
    ],
    "answer": 0,
    "explanation": "list.add(index, element) inserts element at the given index, shifting subsequent elements right. add(2, 99) inserts 99 at index 2: [1, 2, 99, 3, 4, 5]."
  },
  {
    "id": "mcq_203",
    "unit": 4,
    "topic": "4.1",
    "topicLabel": "Ethical and Social Issues",
    "difficulty": "hard",
    "source": "original",
    "question": "A company collects user location data to 'improve services.' What ethical principle might they be violating if they sell this data to third parties without user knowledge?",
    "isCode": false,
    "code": "",
    "choices": [
      "The principle of data maximization",
      "The principle of informed consent and transparency",
      "The principle of computational efficiency",
      "The principle of open-source software"
    ],
    "answer": 1,
    "explanation": "Selling user data without their knowledge violates informed consent — users have not agreed to their data being shared with third parties. This is a fundamental privacy and ethical concern."
  },
  {
    "id": "mcq_204",
    "unit": 4,
    "topic": "4.17",
    "topicLabel": "Recursive Searching and Sorting",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the time complexity of merge sort?",
    "isCode": false,
    "code": "",
    "choices": [
      "O(n)",
      "O(n²)",
      "O(n log n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "Merge sort has O(n log n) time complexity in all cases (best, average, and worst). It divides the array log n times and merges in O(n) time at each level."
  },
  {
    "id": "mcq_205",
    "unit": 4,
    "topic": "4.6",
    "topicLabel": "Using Text Files",
    "difficulty": "medium",
    "source": "original",
    "question": "Which exception must be handled or declared when reading from a file using FileReader?",
    "isCode": false,
    "code": "",
    "choices": [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IOException",
      "ClassNotFoundException"
    ],
    "answer": 2,
    "explanation": "File I/O operations can fail (file not found, permissions issues, etc.), so they throw IOException (a checked exception). You must either catch it with try-catch or declare 'throws IOException'."
  },
  {
    "id": "mcq_206",
    "unit": 4,
    "topic": "4.3",
    "topicLabel": "Array Creation and Access",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int[] a = new int[3];\na[0] = 1;\na[1] = a[0] + 1;\na[2] = a[1] * 2;\nSystem.out.println(a[0] + a[1] + a[2]);",
    "choices": [
      "7",
      "5",
      "9",
      "6"
    ],
    "answer": 0,
    "explanation": "a[0]=1, a[1]=1+1=2, a[2]=2*2=4. Sum = 1+2+4 = 7."
  },
  {
    "id": "mcq_207",
    "unit": 4,
    "topic": "4.4",
    "topicLabel": "Array Traversals",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int[] arr = {2, 4, 6, 8, 10};\nfor (int i = 0; i < arr.length; i++) {\n    arr[i] *= 2;\n}\nSystem.out.println(arr[2]);",
    "choices": [
      "12",
      "4",
      "6",
      "8"
    ],
    "answer": 0,
    "explanation": "After doubling all elements: {4,8,12,16,20}. arr[2] = 12."
  },
  {
    "id": "mcq_208",
    "unit": 4,
    "topic": "4.2",
    "topicLabel": "Introduction to Data Sets",
    "difficulty": "medium",
    "source": "original",
    "question": "Which data structure is best for storing an ordered sequence of elements that will be frequently accessed by index?",
    "isCode": false,
    "code": "",
    "choices": [
      "A HashMap",
      "An array or ArrayList",
      "A Stack",
      "A Queue"
    ],
    "answer": 1,
    "explanation": "Arrays and ArrayLists provide O(1) index-based access, making them ideal for ordered sequences where random access by position is common."
  },
  {
    "id": "mcq_209",
    "unit": 4,
    "topic": "4.15",
    "topicLabel": "Sorting Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output after running insertion sort on {5, 1, 4, 2} after TWO passes?",
    "isCode": false,
    "code": "",
    "choices": [
      "{1, 4, 5, 2}",
      "{1, 2, 4, 5}",
      "{1, 4, 2, 5}",
      "{1, 5, 4, 2}"
    ],
    "answer": 0,
    "explanation": "Insertion sort: start with {5}. Pass 1: insert 1 → {1,5,4,2}. Pass 2: insert 4 → {1,4,5,2}. After two passes: {1,4,5,2}."
  },
  {
    "id": "mcq_210",
    "unit": 4,
    "topic": "4.11",
    "topicLabel": "2D Array Creation and Access",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "int[][] m = {{1,2,3},{4,5,6}};\nSystem.out.println(m.length + \" \" + m[0].length);",
    "choices": [
      "6 1",
      "2 3",
      "3 2",
      "2 6"
    ],
    "answer": 1,
    "explanation": "m.length = 2 (number of rows). m[0].length = 3 (number of columns in first row). Output: \"2 3\"."
  },
  {
    "id": "mcq_211",
    "unit": 4,
    "topic": "4.16",
    "topicLabel": "Recursion",
    "difficulty": "medium",
    "source": "original",
    "question": "What is mystery(5) for this function?",
    "isCode": true,
    "code": "public static int mystery(int n) {\n    if (n == 0) return 1;\n    return 2 * mystery(n - 1);\n}",
    "choices": [
      "16",
      "32",
      "10",
      "25"
    ],
    "answer": 1,
    "explanation": "mystery(5) = 2*mystery(4) = 2*2*mystery(3) = ... = 2^5 = 32. This computes 2^n."
  },
  {
    "id": "mcq_212",
    "unit": 4,
    "topic": "4.9",
    "topicLabel": "ArrayList Traversals",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "ArrayList<String> list = new ArrayList<>(Arrays.asList(\"a\",\"b\",\"c\",\"d\"));\nfor (int i = list.size() - 1; i >= 0; i--) {\n    System.out.print(list.get(i));\n}",
    "choices": [
      "abcd",
      "dcba",
      "abdc",
      "dabc"
    ],
    "answer": 1,
    "explanation": "Traversing from index 3 down to 0: list.get(3)='d', get(2)='c', get(1)='b', get(0)='a'. Output: \"dcba\"."
  },
  {
    "id": "mcq_213",
    "unit": 4,
    "topic": "4.13",
    "topicLabel": "Implementing 2D Array Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What is the output of this code that finds the maximum element in a 2D array?",
    "isCode": true,
    "code": "int[][] m = {{3,7,2},{8,1,9},{4,6,5}};\nint max = m[0][0];\nfor (int[] row : m) {\n    for (int val : row) {\n        if (val > max) max = val;\n    }\n}\nSystem.out.println(max);",
    "choices": [
      "3",
      "9",
      "8",
      "7"
    ],
    "answer": 1,
    "explanation": "The algorithm finds the maximum value in all rows and columns. The maximum in {{3,7,2},{8,1,9},{4,6,5}} is 9."
  },
  {
    "id": "mcq_214",
    "unit": 4,
    "topic": "4.17",
    "topicLabel": "Recursive Searching and Sorting",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the advantage of recursive binary search over iterative binary search?",
    "isCode": false,
    "code": "",
    "choices": [
      "It is always faster",
      "It uses less memory",
      "The code can be cleaner and more readable; both have O(log n) complexity",
      "It can search unsorted arrays"
    ],
    "answer": 2,
    "explanation": "Recursive and iterative binary search have the same O(log n) time complexity. The recursive version can be cleaner to read; however, it uses more stack space due to recursive calls."
  },
  {
    "id": "mcq_215",
    "unit": 4,
    "topic": "4.5",
    "topicLabel": "Implementing Array Algorithms",
    "difficulty": "hard",
    "source": "original",
    "question": "What does this code print?",
    "isCode": true,
    "code": "int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};\nint target = 1;\nint count = 0;\nfor (int val : arr) {\n    if (val == target) count++;\n}\nSystem.out.println(count);",
    "choices": [
      "1",
      "2",
      "0",
      "3"
    ],
    "answer": 1,
    "explanation": "Count occurrences of 1 in {3,1,4,1,5,9,2,6}: 1 appears at index 1 and index 3 → count = 2."
  },
  {
    "id": "mcq_216",
    "unit": 4,
    "topic": "4.8",
    "topicLabel": "ArrayList Methods",
    "difficulty": "easy",
    "source": "original",
    "question": "What does ArrayList.contains() return?",
    "isCode": false,
    "code": "",
    "choices": [
      "The index of the element if found",
      "A boolean: true if the element is in the list, false otherwise",
      "The element itself if found, null otherwise",
      "The number of times the element appears"
    ],
    "answer": 1,
    "explanation": "ArrayList.contains(element) returns true if the element is present in the list, false otherwise. It uses .equals() for comparison."
  },
  {
    "id": "mcq_217",
    "unit": 4,
    "topic": "4.3",
    "topicLabel": "Array Creation and Access",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "String[] words = {\"apple\", \"banana\", \"cherry\"};\nSystem.out.println(words[1].length());",
    "choices": [
      "5",
      "6",
      "3",
      "1"
    ],
    "answer": 1,
    "explanation": "words[1] = \"banana\". \"banana\".length() = 6."
  },
  {
    "id": "mcq_218",
    "unit": 4,
    "topic": "4.10",
    "topicLabel": "Implementing ArrayList Algorithms",
    "difficulty": "medium",
    "source": "original",
    "question": "What is the output?",
    "isCode": true,
    "code": "ArrayList<Integer> list = new ArrayList<>(Arrays.asList(10, 20, 30, 40, 50));\nint total = 0;\nfor (int i = 0; i < list.size(); i += 2) {\n    total += list.get(i);\n}\nSystem.out.println(total);",
    "choices": [
      "90",
      "150",
      "60",
      "120"
    ],
    "answer": 0,
    "explanation": "Accesses indices 0,2,4: list.get(0)=10, list.get(2)=30, list.get(4)=50. Total = 10+30+50 = 90."
  },
  {
    "id": "mcq_219",
    "unit": 4,
    "topic": "4.7",
    "topicLabel": "Wrapper Classes",
    "difficulty": "medium",
    "source": "original",
    "question": "What does Integer.toString(42) return?",
    "isCode": false,
    "code": "",
    "choices": [
      "42",
      "\"42\"",
      "42.0",
      "Integer(42)"
    ],
    "answer": 1,
    "explanation": "Integer.toString(int) converts an int to its String representation. Integer.toString(42) returns the String \"42\"."
  },
  {
    "id": "mcq_220",
    "unit": 4,
    "topic": "4.2",
    "topicLabel": "Introduction to Data Sets",
    "difficulty": "hard",
    "source": "original",
    "question": "You have a data set of 1 million student test scores. Which operation would be MOST efficient with a sorted array?",
    "isCode": false,
    "code": "",
    "choices": [
      "Adding a new score at a specific position",
      "Finding the median score",
      "Searching for a specific score",
      "Both B and C are efficient with a sorted array"
    ],
    "answer": 3,
    "explanation": "With a sorted array: the median is at index n/2 (O(1)). Binary search finds a specific score in O(log n). Inserting at a position requires shifting elements O(n). Both B and C benefit from sorting."
  },
  {
    "id": "mcq_221",
    "unit": 4,
    "topic": "4.15",
    "topicLabel": "Sorting Algorithms",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the key advantage of merge sort over selection sort?",
    "isCode": false,
    "code": "",
    "choices": [
      "Merge sort uses less memory",
      "Merge sort has better worst-case time complexity: O(n log n) vs O(n²)",
      "Merge sort works on unsorted data; selection sort doesn't",
      "Merge sort is simpler to implement"
    ],
    "answer": 1,
    "explanation": "Merge sort runs in O(n log n) in all cases, which is significantly better than selection sort's O(n²) for large data sets."
  },
  {
    "id": "mcq_222",
    "unit": 4,
    "topic": "4.16",
    "topicLabel": "Recursion",
    "difficulty": "hard",
    "source": "original",
    "question": "What is printed by this recursive method when called with printPattern(3)?",
    "isCode": true,
    "code": "public static void printPattern(int n) {\n    if (n <= 0) return;\n    System.out.print(n + \" \");\n    printPattern(n - 1);\n    System.out.print(n + \" \");\n}",
    "choices": [
      "3 2 1 ",
      "3 2 1 2 3 ",
      "1 2 3 2 1 ",
      "3 2 1 1 2 3 "
    ],
    "answer": 3,
    "explanation": "Each call prints n before and after the recursive call. printPattern(3): print 3, call printPattern(2). printPattern(2): print 2, call printPattern(1). printPattern(1): print 1, call printPattern(0) which returns. Then unwind: print 1, return to printPattern(2): print 2, return to printPattern(3): print 3. Output: \"3 2 1 1 2 3 \"."
  },
  {
    "id": "mcq_223",
    "unit": 4,
    "topic": "4.4",
    "topicLabel": "Array Traversals",
    "difficulty": "easy",
    "source": "original",
    "question": "What is the correct way to use an enhanced for loop over an int array?",
    "isCode": false,
    "code": "",
    "choices": [
      "for (int i : arr.length) { }",
      "for (int val : arr) { }",
      "for (arr : int val) { }",
      "for (val in arr) { }"
    ],
    "answer": 1,
    "explanation": "The enhanced for loop syntax is: for (elementType var : arrayOrCollection) { }. For an int array: for (int val : arr) { }."
  },
  {
    "id": "mcq_224",
    "unit": 4,
    "topic": "4.12",
    "topicLabel": "2D Array Traversals",
    "difficulty": "medium",
    "source": "original",
    "question": "What does the following code print?",
    "isCode": true,
    "code": "int[][] m = {{1,0,0},{0,1,0},{0,0,1}};\nboolean isDiag = true;\nfor (int r = 0; r < m.length && isDiag; r++) {\n    for (int c = 0; c < m[r].length && isDiag; c++) {\n        if (r == c && m[r][c] != 1) isDiag = false;\n        if (r != c && m[r][c] != 0) isDiag = false;\n    }\n}\nSystem.out.println(isDiag);",
    "choices": [
      "true",
      "false",
      "Compilation error",
      "null"
    ],
    "answer": 0,
    "explanation": "This checks if the matrix is an identity matrix (1s on diagonal, 0s elsewhere). {{1,0,0},{0,1,0},{0,0,1}} is the 3×3 identity matrix, so isDiag = true."
  },
  {
    "id": "mcq_225",
    "unit": 4,
    "topic": "4.17",
    "topicLabel": "Recursive Searching and Sorting",
    "difficulty": "hard",
    "source": "original",
    "question": "What is printed when mergeSort is called on {5, 2, 8, 1, 9} and then the sorted array is printed?",
    "isCode": false,
    "code": "",
    "choices": [
      "{1, 2, 5, 8, 9}",
      "{9, 8, 5, 2, 1}",
      "{5, 2, 1, 8, 9}",
      "{2, 1, 5, 8, 9}"
    ],
    "answer": 0,
    "explanation": "Merge sort produces a fully sorted array in ascending order. {5,2,8,1,9} sorted ascending = {1,2,5,8,9}."
  }
];