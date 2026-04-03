window.P1_CSA_TEST = [{
  "id": "p1_csa",
  "title": "AP Computer Science A — Practice Test 1",
  "subject": "apcsa",
  "generated": "2026-04-02T04:03:42.586Z",
  "unitDistribution": {
    "1": 8,
    "2": 12,
    "3": 6,
    "4": 14
  },
  "questions": [
    {
      "id": "pt_csa_p1_u1_001",
      "unit": 1,
      "question": "Consider the following code segment:\n\nint x = 7;\nint y = 2;\ndouble result = (double)(x / y);\nSystem.out.println(result);\n\nWhat is printed?",
      "choices": [
        "A) 3.5",
        "B) 3.0",
        "C) 3",
        "D) 4.0"
      ],
      "answer": 1,
      "explanation": "The expression x / y performs integer division first because both x and y are int, yielding 3. The cast (double) is then applied to 3, producing 3.0. Answer A is wrong because students often assume the cast promotes operands before division, but the cast only applies to the final integer result. Answer C is wrong because result is declared as double, so println prints 3.0 not 3. Answer D would require rounding, which integer division does not do.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u1_002",
      "unit": 1,
      "question": "A programmer wants to use the Math class to compute the distance between two points (x1, y1) and (x2, y2) using the formula d = sqrt((x2-x1)^2 + (y2-y1)^2). Which of the following correctly implements this computation in Java?",
      "choices": [
        "A) double d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));",
        "B) double d = Math.sqrt(Math.pow(x2 - x1, 2) * Math.pow(y2 - y1, 2));",
        "C) double d = Math.pow(Math.sqrt(x2 - x1) + Math.sqrt(y2 - y1), 2);",
        "D) double d = Math.sqrt((x2 - x1) ^ 2 + (y2 - y1) ^ 2);"
      ],
      "answer": 0,
      "explanation": "Answer A correctly calls Math.pow to square each difference and Math.sqrt on their sum. Answer B multiplies the squared differences instead of adding them, a common algebraic error. Answer C applies sqrt before squaring the individual differences and then squares the sum - an incorrect rearrangement of the formula. Answer D uses the ^ operator, which in Java is the bitwise XOR operator, not exponentiation, making it a common trap for students from other languages.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u1_003",
      "unit": 1,
      "question": "Consider the following code segment:\n\nString s = \"Programming\";\nint len = s.length();\nString sub = s.substring(0, 4);\nSystem.out.println(sub + \" \" + len);\n\nWhat is printed?",
      "choices": [
        "A) Prog 11",
        "B) Prog 10",
        "C) Prog 12",
        "D) Pro 11"
      ],
      "answer": 0,
      "explanation": "The string \"Programming\" has 11 characters, so s.length() returns 11. The method substring(0, 4) returns characters at indices 0, 1, 2, and 3 - which are 'P', 'r', 'o', 'g' - giving \"Prog\". Answer B confuses length with the last valid index (10). Answer C overcounts the string length. Answer D results from believing substring(0, 4) is exclusive on the start index side, producing only 3 characters instead of 4.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u1_004",
      "unit": 1,
      "question": "A student writes the following code:\n\nint score = 85;\nscore += 10;\nscore *= 2;\nscore -= 5;\nSystem.out.println(score);\n\nA classmate claims the final value printed is 185. Is the classmate correct?",
      "choices": [
        "A) 185 (correct, classmate is right)",
        "B) 180 (student forgot the -= 5 step)",
        "C) 190 (student stopped at *= 2 and forgot the -= 5 step)",
        "D) 175 (student applied -= 5 before *= 2)"
      ],
      "answer": 0,
      "explanation": "The classmate is correct. Each compound assignment operator modifies the running value of score sequentially, not the original value of 85. Step by step: score starts at 85; score += 10 gives 95; score *= 2 gives 190; score -= 5 gives 185. The final output is 185.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u1_005",
      "unit": 1,
      "question": "Consider the following method signature from a custom library:\n\npublic static String formatName(String first, String last, boolean lastFirst)\n\nA programmer calls the method as follows:\n\nString result = formatName(\"Alice\", \"Smith\", false);\n\nBased on the method signature and the API documentation stating that when lastFirst is false the method returns first + \" \" + last, and when lastFirst is true it returns last + \", \" + first, what is the value of result?",
      "choices": [
        "A) \"Alice Smith\"",
        "B) \"Smith, Alice\"",
        "C) \"AliceSmith\"",
        "D) \"Smith Alice\""
      ],
      "answer": 0,
      "explanation": "Because lastFirst is passed as false, the method returns first + \" \" + last, which evaluates to \"Alice\" + \" \" + \"Smith\" = \"Alice Smith\". Answer B would be the output if lastFirst were true. Answer C omits the space separator, a common misconception about string concatenation behavior. Answer D applies the wrong format - swapping names but omitting the comma - a plausible confusion between the two branches of the conditional.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u1_006",
      "unit": 1,
      "question": "Consider the following code segment:\n\nint x = 7;\nx *= 3;\nx -= 4;\nSystem.out.println(x);\n\nWhat is printed when this code segment executes?",
      "choices": [
        "A) 17",
        "B) 21",
        "C) 9",
        "D) 20"
      ],
      "answer": 0,
      "explanation": "Step through the operations: x starts at 7. After x *= 3, x = 21. After x -= 4, x = 17. So the output is 17. Choice B (21) is a common error where students forget the subtraction step. Choice C (9) might arise from incorrectly applying the operations in a different order. Choice D (20) could result from subtracting 1 from 21 instead of 4.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u1_007",
      "unit": 1,
      "question": "A programmer writes the following code:\n\nString s = \"Computer Science\";\nint len = s.length();\nString sub = s.substring(0, 8);\nSystem.out.println(sub.toLowerCase() + len);\n\nWhat is printed when this code segment executes?",
      "choices": [
        "A) computer16",
        "B) computer 16",
        "C) Computer16",
        "D) computer science16"
      ],
      "answer": 0,
      "explanation": "s.length() returns 16 (the total number of characters in \"Computer Science\" including the space). s.substring(0, 8) extracts characters from index 0 up to but not including index 8, yielding \"Computer\". Calling toLowerCase() on that gives \"computer\". Concatenating with 16 gives \"computer16\". Choice B is wrong because there is no space in the concatenation. Choice C is wrong because toLowerCase() converts all characters to lowercase. Choice D is wrong because substring(0,8) does not return the entire string.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u1_008",
      "unit": 1,
      "question": "Consider the following code segment:\n\ndouble result = Math.pow(2, 5) / Math.pow(2, 2);\nint truncated = (int) result;\nSystem.out.println(truncated + \" \" + (int)(Math.sqrt(truncated + 23)));\n\nWhich of the following correctly describes what is printed?",
      "choices": [
        "A) 8 5",
        "B) 8.0 5",
        "C) 8 31",
        "D) 7 5"
      ],
      "answer": 0,
      "explanation": "Math.pow(2,5) = 32.0 and Math.pow(2,2) = 4.0, so result = 32.0 / 4.0 = 8.0. Casting to int gives truncated = 8. For the second value: truncated + 23 = 31, and Math.sqrt(31) ≈ 5.567, which when cast to int truncates to 5. So the output is \"8 5\". Choice B is wrong because truncated is declared as int, so it prints without a decimal. Choice C is wrong because Math.sqrt(31) truncates to 5, not 31. Choice D is wrong because casting 8.0 to int yields 8, not 7 - truncation only removes the fractional part, and 8.0 has none.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_009",
      "unit": 2,
      "question": "Consider the following code segment:\n\nint x = 4;\nif (x > 5) {\n    System.out.print(\"A\");\n} else if (x > 3) {\n    System.out.print(\"B\");\n} else if (x > 1) {\n    System.out.print(\"C\");\n} else {\n    System.out.print(\"D\");\n}\n\nWhat is printed when this code segment executes?",
      "choices": [
        "A) A",
        "B) B",
        "C) BC",
        "D) BCD"
      ],
      "answer": 1,
      "explanation": "This is an if/else-if chain, so only the first true branch executes. x=4: first condition (x>5) is false; second condition (x>3) is true → prints 'B' and skips all remaining branches. The remaining else-if and else clauses are never evaluated. Result: 'B'. Option A is wrong because x>5 is false. Option C and D are wrong because in an else-if chain, once a true branch is found, execution skips the rest.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_010",
      "unit": 2,
      "question": "Consider the following method:\n\npublic static int mystery(int n) {\n    int result = 0;\n    int k = 1;\n    while (k <= n) {\n        if (k % 2 != 0) {\n            result += k;\n        }\n        k++;\n    }\n    return result;\n}\n\nWhat value is returned by the call mystery(10)?",
      "choices": [
        "A) 20",
        "B) 25",
        "C) 30",
        "D) 55"
      ],
      "answer": 1,
      "explanation": "The method sums all odd integers from 1 to n. For n=10, the odd numbers are 1, 3, 5, 7, 9. Their sum is 1+3+5+7+9 = 25. Option A (20) might result from incorrectly summing even numbers (2+4+6+8=20). Option C (30) has no logical basis. Option D (55) is the sum of all integers 1 through 10, which would be the result if the if condition were removed.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_011",
      "unit": 2,
      "question": "A student wants to write a method that returns true only when an integer n is between 10 and 50, exclusive on both ends. Which of the following boolean expressions correctly implements this condition?\n\nI.   n > 10 && n < 50\nII.  !(n <= 10 || n >= 50)\nIII. !(n <= 10) && !(n >= 50)",
      "choices": [
        "A) I only",
        "B) I and II only",
        "C) I and III only",
        "D) I, II, and III"
      ],
      "answer": 3,
      "explanation": "All three expressions are logically equivalent. Expression I directly checks 10 < n < 50. Expression II uses De Morgan's law: !(n<=10 || n>=50) = !(n<=10) && !(n>=50) = n>10 && n<50. Expression III is the expanded form of II, which equals n>10 && n<50. All three evaluate to true for exactly the same values of n. Students might think II and III differ or that only the direct form I is valid, but De Morgan's law guarantees their equivalence.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_012",
      "unit": 2,
      "question": "Consider the following code segment:\n\nString s = \"programming\";\nint count = 0;\nfor (int i = 0; i < s.length() - 1; i++) {\n    String sub = s.substring(i, i + 2);\n    if (sub.charAt(0) == sub.charAt(1)) {\n        count++;\n    }\n}\nSystem.out.println(count);\n\nWhat is printed?",
      "choices": [
        "A) 0",
        "B) 1",
        "C) 2",
        "D) 3"
      ],
      "answer": 1,
      "explanation": "The loop iterates through all consecutive character pairs in 'programming' (indices 0 through 9, giving substrings of length 2). It counts pairs where both characters are the same. The string 'programming' has characters: p-r-o-g-r-a-m-m-i-n-g. The only consecutive repeated character pair is 'm' at indices 6 and 7 (substring 'mm'). So count = 1. Option A (0) is wrong because the 'mm' pair does exist in the string. Option C (2) might result if a student mistakenly uses i <= s.length() - 1 as the loop condition combined with s.substring(i, i + 2), which would throw a StringIndexOutOfBoundsException, but a student who instead imagines the loop running one extra iteration and incorrectly counting a phantom duplicate pair would arrive at 2. Option D (3) represents a further overcount, perhaps from a student who believes 'r', 'm', and another character each appear as consecutive pairs.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_013",
      "unit": 2,
      "question": "Consider the following nested loop code segment, where n is a positive integer:\n\nint count = 0;\nfor (int i = 1; i <= n; i++) {\n    for (int j = i; j <= n; j++) {\n        count++;\n    }\n}\n\nWhich of the following best describes the number of times count is incremented in terms of n?",
      "choices": [
        "A) n^2, because there are two nested loops each running n times",
        "B) n*(n+1)/2, because the inner loop runs n, n-1, n-2, , 1 times as i increases",
        "C) n*(n-1)/2, because the inner loop starts at i+1 rather than i",
        "D) 2n, because the total iterations grow linearly with n"
      ],
      "answer": 1,
      "explanation": "When i=1, the inner loop runs from j=1 to n: n iterations. When i=2, it runs from j=2 to n: n-1 iterations. This pattern continues until i=n, where the inner loop runs 1 iteration. Total = n + (n-1) +  + 1 = n*(n+1)/2. This is a triangular number and grows quadratically (O(n^2)) but the exact count is n*(n+1)/2, not n^2. Option A is wrong because the inner loop does not always run n times - it depends on i. Option C is wrong because j starts at i, not i+1, so when i=n, j runs once, not zero times (which would give n*(n-1)/2). Option D incorrectly suggests linear growth.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_014",
      "unit": 2,
      "question": "Consider the following code segment:\n\nint x = 6;\nif (x > 8) {\n    System.out.print(\"A\");\n} else if (x > 5) {\n    System.out.print(\"B\");\n} else if (x > 3) {\n    System.out.print(\"C\");\n} else {\n    System.out.print(\"D\");\n}\n\nWhat is printed when this code segment is executed?",
      "choices": [
        "A) B",
        "B) BC",
        "C) BCD",
        "D) D"
      ],
      "answer": 0,
      "explanation": "In an if/else-if chain, only the first branch whose condition is true executes, and all remaining branches are skipped. x=6: x>8 is false, so we check x>5, which is true → prints 'B'. Because 'B' was printed, the remaining else-if and else branches are skipped entirely. Choice B is wrong because students may think multiple true conditions each print their letter. Choice C is wrong for the same reason - x>3 is also true, but that branch is never reached. Choice D is wrong because the else only runs if all prior conditions are false.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_015",
      "unit": 2,
      "question": "What value is stored in result after the following code segment executes?\n\nint result = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 != 0) {\n        result += i;\n    }\n}\n\nWhich of the following correctly describes what this algorithm computes?",
      "choices": [
        "A) The sum of all odd integers from 1 to 5, which equals 9",
        "B) The sum of all integers from 1 to 5, which equals 15",
        "C) The sum of all even integers from 1 to 5, which equals 6",
        "D) The sum of all odd integers from 1 to 5, which equals 8"
      ],
      "answer": 0,
      "explanation": "The loop iterates i = 1, 2, 3, 4, 5. The condition i % 2 != 0 is true for odd values: i=1, 3, 5. result accumulates 0+1+3+5 = 9. Choice B ignores the selection filter and sums all values. Choice C confuses the != 0 condition with == 0, which would select even numbers summing to 2+4=6. Choice D is an arithmetic error on the odd sum.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_016",
      "unit": 2,
      "question": "A student writes the following method to determine whether a string contains only uppercase letters:\n\npublic static boolean allUpperCase(String s) {\n    for (int i = 0; i < s.length(); i++) {\n        if (s.substring(i, i + 1).compareTo(\"A\") >= 0\n            && s.substring(i, i + 1).compareTo(\"Z\") <= 0) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n    return true;\n}\n\nWhich of the following calls demonstrates that the method does NOT correctly determine whether all characters are uppercase?",
      "choices": [
        "A) allUpperCase(\"Ab\") returns true instead of false",
        "B) allUpperCase(\"AB\") returns false instead of true",
        "C) allUpperCase(\"\") returns false instead of true",
        "D) allUpperCase(\"aBC\") returns true instead of false"
      ],
      "answer": 0,
      "explanation": "The method returns on the very first character without checking the rest. For 'Ab': 'A' is uppercase, so 'A'.compareTo('A') >= 0 and 'A'.compareTo('Z') <= 0 are both true, causing the method to immediately return true without ever examining 'b'. The correct answer should be false since 'b' is lowercase - this demonstrates the bug. Choice B is wrong - 'AB' correctly returns true (first char 'A' satisfies the condition), even if only one character is examined. Choice C is wrong - an empty string never enters the loop and correctly returns true from the final return statement. Choice D is wrong - for 'aBC', the first character 'a' has a higher Unicode value than 'Z' (lowercase letters have higher Unicode values than uppercase letters), so 'a'.compareTo('Z') > 0, meaning the second condition in the && is false. The else branch fires and returns false, which is coincidentally the correct result for the wrong structural reason: the method happens to reject 'aBC' correctly only because 'a' falls outside the [A-Z] range, not because it checked all characters.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_017",
      "unit": 2,
      "question": "Consider the following nested loop:\n\nint count = 0;\nfor (int i = 0; i < n; i++) {\n    for (int j = i + 1; j < n; j++) {\n        count++;\n    }\n}\n\nIf n = 5, what is the value of count after this code executes, and which of the following best describes the informal run-time complexity of this algorithm as n grows?",
      "choices": [
        "A) count = 10; the algorithm runs in O(n²) time",
        "B) count = 25; the algorithm runs in O(n²) time",
        "C) count = 10; the algorithm runs in O(n log n) time",
        "D) count = 20; the algorithm runs in O(n²) time"
      ],
      "answer": 0,
      "explanation": "When i=0, j runs 1-4 (4 iterations); i=1, j runs 2-4 (3); i=2, j runs 3-4 (2); i=3, j runs 4 (1); i=4, inner loop doesn't execute (0). Total = 4+3+2+1+0 = 10. This is n(n-1)/2, which is O(n²). Choice B incorrectly counts n² = 25 total iterations as if j started at 0 each time. Choice C gets the count right but misidentifies the complexity - n(n-1)/2 is still quadratic, not O(n log n). Choice D doubles the correct count, perhaps from confusing with a full nested loop running 0 to n-1 on both.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_018",
      "unit": 2,
      "question": "Consider the following code segment:\n\nint a = 4;\nint b = 8;\nint c = 4;\n\nboolean result = (a == c) && (b > a) || !(b == 2 * c);\n\nWhat is the value of result, and which evaluation correctly applies Java's operator precedence for boolean expressions?",
      "choices": [
        "A) false, because || is evaluated before &&, yielding: true || !(true) → true && false → false",
        "B) false, because || is evaluated before && due to left-to-right parsing",
        "C) true, because && is evaluated before ||, yielding: (true && true) || false → true",
        "D) false, because !(b == 2 * c) evaluates to false and causes the entire expression to be false"
      ],
      "answer": 2,
      "explanation": "Java operator precedence: ! (highest), then &&, then ||. Step 1: evaluate ! first - b==2*c is 8==8 → true, so !(true) = false. Step 2: evaluate && - (a==c) is 4==4 → true; (b>a) is 8>4 → true; true && true = true. Step 3: evaluate || - true || false = true. Result is true. Choice A is wrong because it incorrectly claims || is evaluated before &&, which reverses actual Java precedence, and arrives at the wrong answer. Choice B is wrong - && has higher precedence than ||; Java does not simply evaluate left-to-right for different operators. Choice D is wrong - !(b==2*c) is false, but because it is joined by ||, it does not force the entire expression to false; the left side (true) makes the || true.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_019",
      "unit": 2,
      "question": "Consider the following method:\n\npublic static int mystery(int n) {\n    int count = 0;\n    int k = 1;\n    while (k <= n) {\n        if (n % k == 0) {\n            count++;\n        }\n        k++;\n    }\n    return count;\n}\n\nWhat is returned by the call mystery(12)?",
      "choices": [
        "A) 4",
        "B) 5",
        "C) 6",
        "D) 7"
      ],
      "answer": 2,
      "explanation": "The method counts the number of divisors of n. For n = 12, the divisors are 1, 2, 3, 4, 6, and 12 - a total of 6. The loop iterates from k = 1 to k = 12, incrementing count each time 12 % k == 0. Students who answer 4 may only count prime factors (2 and 3) or confuse divisors with prime factors. Students who answer 5 may accidentally skip one divisor (often 6 or 12 itself). Students who answer 7 may incorrectly include values that do not evenly divide 12, such as k = 5.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u2_020",
      "unit": 2,
      "question": "A student writes the following code fragment to print all pairs (i, j) where i and j are both in the range [1, 3] and i is strictly less than j:\n\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (i < j) {\n            System.out.println(i + \" \" + j);\n        }\n    }\n}\n\nWhich of the following best describes the output of this code?",
      "choices": [
        "A) It prints all 9 ordered pairs (i, j) where both i and j are in [1, 3]",
        "B) It prints exactly the pairs: (1,2), (1,3), (2,3) - three lines in that order",
        "C) It prints exactly the pairs: (1,2), (2,3) - skipping (1,3) because j resets to 1 for each new i",
        "D) It prints exactly the pairs: (1,2), (1,3), (2,3), (1,3) - because the outer loop causes (1,3) to print twice"
      ],
      "answer": 1,
      "explanation": "The nested loops iterate i from 1 to 3 and j from 1 to 3 independently. The condition i < j filters only pairs where i is strictly less than j. When i=1: j=2 and j=3 satisfy the condition, printing '1 2' and '1 3'. When i=2: only j=3 satisfies the condition, printing '2 3'. When i=3: no j in [1,3] is greater than 3, so nothing prints. The total output is three lines: '1 2', '1 3', '2 3'. Option A is wrong because the filter removes equal and reversed pairs. Option C reflects a misconception that j somehow skips values based on i. Option D is wrong because each (i,j) pair is visited exactly once.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u3_021",
      "unit": 3,
      "question": "Consider the following class definition:\n\npublic class BankAccount {\n    private double balance;\n    private String owner;\n\n    public BankAccount(String name, double initialBalance) {\n        owner = name;\n        balance = initialBalance;\n    }\n\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\nWhich of the following best describes the purpose of declaring balance and owner as private?",
      "choices": [
        "A) It prevents the variables from being used inside the class methods.",
        "B) It ensures that the internal state of the object can only be accessed or modified through the class's defined methods, supporting data encapsulation.",
        "C) It makes the variables available to all subclasses but not to external classes.",
        "D) It causes a compile-time error if any method attempts to return those variables."
      ],
      "answer": 1,
      "explanation": "Declaring instance variables private enforces encapsulation - a core principle of abstraction and program design. Only the class's own methods can directly access private fields, so external code must use getters/setters. A is wrong because private variables are fully accessible within the class. C describes protected, not private. D is incorrect; private variables can freely be returned by methods within the same class.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u3_022",
      "unit": 3,
      "question": "A student writes the following class:\n\npublic class Counter {\n    private static int totalCounters = 0;\n    private int count;\n\n    public Counter() {\n        totalCounters++;\n        count = 0;\n    }\n\n    public void increment() { count++; }\n    public int getCount() { return count; }\n    public static int getTotalCounters() { return totalCounters; }\n}\n\nThe following code is executed:\n\nCounter a = new Counter();\nCounter b = new Counter();\na.increment();\na.increment();\nb.increment();\n\nWhat are the values of a.getCount(), b.getCount(), and Counter.getTotalCounters() after this code runs?",
      "choices": [
        "A) a.getCount() = 2, b.getCount() = 1, Counter.getTotalCounters() = 2",
        "B) a.getCount() = 2, b.getCount() = 1, Counter.getTotalCounters() = 3",
        "C) a.getCount() = 3, b.getCount() = 3, Counter.getTotalCounters() = 2",
        "D) a.getCount() = 2, b.getCount() = 2, Counter.getTotalCounters() = 2"
      ],
      "answer": 0,
      "explanation": "Each Counter object has its own instance variable count. a.increment() is called twice, so a.getCount() = 2. b.increment() is called once, so b.getCount() = 1. totalCounters is a static (class-level) variable incremented once per constructor call. Two objects are created, so getTotalCounters() = 2. B is wrong because totalCounters is not incremented by increment(). C confuses instance and static variables. D misattributes b's count.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u3_023",
      "unit": 3,
      "question": "Consider the following class:\n\npublic class Rectangle {\n    private int width;\n    private int height;\n\n    public Rectangle(int w, int h) {\n        width = w;\n        height = h;\n    }\n\n    public void scale(Rectangle r) {\n        r.width = r.width * 2;\n        r.height = r.height * 2;\n    }\n\n    public int getArea() { return width * height; }\n}\n\nGiven the following code segment:\n\nRectangle rect = new Rectangle(3, 4);\nrect.scale(rect);\nSystem.out.println(rect.getArea());\n\nWhat is printed?",
      "choices": [
        "A) 12",
        "B) 48",
        "C) 144",
        "D) 24"
      ],
      "answer": 1,
      "explanation": "rect.scale(rect) passes rect as the argument r, so r and rect point to the same object. Inside scale(), r.width becomes 3*2 = 6 and r.height becomes 4*2 = 8. Since r is the same object as rect, rect.getArea() returns 6*8 = 48. A (12) is the original area before scaling. C (144) would result if both dimensions were doubled twice (e.g., 12*12), a misconception that scale is applied twice. D (24) might result from only doubling one dimension. Private fields are accessible within any method of the same class, including when accessed on a parameter of that same type.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u3_024",
      "unit": 3,
      "question": "A programmer is designing a Student class and writes the following method:\n\npublic void setGrade(int grade) {\n    if (grade >= 0 && grade <= 100) {\n        this.grade = grade;\n    }\n}\n\nCompared to directly setting the grade field as public and assigning it externally, which of the following most accurately describes the advantage introduced by this design?",
      "choices": [
        "A) It allows grade to be accessed from subclasses without using inheritance.",
        "B) It improves runtime performance by reducing the number of variable assignments.",
        "C) It enforces a validity constraint on the data, preventing the object from entering an invalid state.",
        "D) It automatically throws an exception when an invalid grade is provided, alerting the caller."
      ],
      "answer": 2,
      "explanation": "This setter method validates the input before assigning it, ensuring grade is never set to an out-of-range value. This is a key benefit of encapsulation and controlled access - protecting object state integrity. A is incorrect; subclass access relates to protected/public, not setters. B is false; the if-check adds overhead, not removes it. D is incorrect; the method silently ignores invalid input rather than throwing an exception - no exception handling is present.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u3_025",
      "unit": 3,
      "question": "Consider the following incomplete class:\n\npublic class Circle {\n    private double radius;\n    private static int circleCount = 0;\n\n    public Circle(double r) {\n        radius = r;\n        circleCount++;\n    }\n\n    public Circle(Circle other) {\n        /* Line X */\n        circleCount++;\n    }\n\n    public double getRadius() { return radius; }\n    public static int getCircleCount() { return circleCount; }\n}\n\nA developer wants the copy constructor (the second constructor) to create a new Circle with the same radius as other. Which of the following replacements for /* Line X */ correctly completes the copy constructor, and what will Circle.getCircleCount() return after the following code runs?\n\nCircle c1 = new Circle(5.0);\nCircle c2 = new Circle(c1);",
      "choices": [
        "A) radius = other.getRadius(); - getCircleCount() returns 1",
        "B) this.radius = other.getRadius(); - getCircleCount() returns 2",
        "C) radius = Circle.radius; - getCircleCount() returns 2",
        "D) this.radius = other.getRadius(); - getCircleCount() returns 1"
      ],
      "answer": 1,
      "explanation": "The correct Line X is this.radius = other.getRadius(), which uses the getter to retrieve the radius from the other Circle and assigns it to the new instance's radius field. After creating c1 with new Circle(5.0) and c2 with new Circle(c1), the constructor is called twice, so circleCount = 2, making getCircleCount() return 2. Choice A has an incorrect count of 1. Choice C uses Circle.radius, which is invalid because radius is an instance field and cannot be accessed statically. Choice D has the correct Line X but incorrectly states the count is 1. Only choice B has both the correct Line X and the correct count of 2.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u3_026",
      "unit": 3,
      "question": "Consider the following class definition:\n\npublic class Counter {\n    private static int totalCount = 0;\n    private int count;\n\n    public Counter() {\n        count = 0;\n        totalCount++;\n    }\n\n    public void increment() {\n        count++;\n    }\n\n    public int getCount() {\n        return count;\n    }\n\n    public static int getTotalCount() {\n        return totalCount;\n    }\n}\n\nThe following code segment is executed:\n\nCounter a = new Counter();\nCounter b = new Counter();\na.increment();\na.increment();\nb.increment();\nCounter c = new Counter();\n\nWhat are the values of a.getCount(), b.getCount(), and Counter.getTotalCount(), respectively, after this code segment executes?",
      "choices": [
        "A) 2, 1, 3",
        "B) 2, 1, 6",
        "C) 3, 3, 3",
        "D) 2, 1, 2"
      ],
      "answer": 0,
      "explanation": "Each call to the Counter constructor increments the static variable totalCount by 1. Since three Counter objects (a, b, c) are created, totalCount equals 3. The instance variable count is tracked separately per object: a.increment() is called twice so a.getCount() returns 2, and b.increment() is called once so b.getCount() returns 1. Answer A is correct: 2, 1, 3. Choice B (2, 1, 6) reflects a misconception that totalCount counts all method calls rather than only constructor calls. Choice C (3, 3, 3) reflects a misconception that static and instance variables are shared across all instances. Choice D (2, 1, 2) reflects a misconception that totalCount only counts the first two objects created before c was instantiated.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_027",
      "unit": 4,
      "question": "Consider the following method that searches a sorted integer array using binary search:\n\npublic static int binarySearch(int[] arr, int target) {\n    int low = 0;\n    int high = arr.length - 1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}\n\nGiven the sorted array {3, 7, 11, 15, 22, 34, 45, 60}, what value is returned when the method is called with target = 34?",
      "choices": [
        "A) 4",
        "B) 5",
        "C) 6",
        "D) -1"
      ],
      "answer": 1,
      "explanation": "The array has 8 elements (indices 0-7). Iteration 1: low=0, high=7, mid=3, arr[3]=15. Since 15 < 34, low becomes 4. Iteration 2: low=4, high=7, mid=5, arr[5]=34. Since arr[5] == target, the method returns 5. Students who answer 4 may confuse the value at the index with the index itself. Students who answer 6 likely miscalculate mid in one of the iterations. Students who answer -1 incorrectly believe the target is not found.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_028",
      "unit": 4,
      "question": "A researcher collects daily step counts from 500 volunteers over 90 days and stores them in a 2D array declared as:\n\nint[][] steps = new int[500][90];\n\nShe writes the following method to compute the average daily steps for volunteer at index v:\n\npublic double avgSteps(int[][] steps, int v) {\n    int total = 0;\n    for (int d = 0; d < steps[v].length; d++) {\n        total += steps[v][d];\n    }\n    return (double) total / steps[v].length;\n}\n\nWhich of the following best describes a potential ethical concern with this data collection scenario, assuming the volunteers were not fully informed about how their data would be used beyond step counting?",
      "choices": [
        "A) The 2D array structure is inappropriate for this data, leading to inaccurate averages.",
        "B) Reusing volunteer health data for undisclosed secondary analysis violates informed consent principles.",
        "C) Storing integers instead of doubles causes precision loss that undermines data integrity.",
        "D) The researcher should use an ArrayList instead of an array to protect volunteer privacy."
      ],
      "answer": 1,
      "explanation": "This question connects data collection ethics (Topic 4.1) with a realistic scenario. The correct answer (B) identifies that using personal health data for purposes beyond what volunteers consented to raises informed consent and data privacy concerns. Choice A is incorrect because the 2D array is a perfectly valid structure for this data. Choice C conflates a technical detail (integer vs. double storage for step counts) with an ethical issue - steps are whole numbers and integer storage is appropriate. Choice D is a nonsensical conflation of data structure choice with privacy protection; the container type has no bearing on ethical data use.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_029",
      "unit": 4,
      "question": "Consider the following code segment:\n\nArrayList<Integer> nums = new ArrayList<>();\nnums.add(10);\nnums.add(20);\nnums.add(30);\nnums.add(40);\n\nfor (int i = 0; i < nums.size(); i++) {\n    if (nums.get(i) % 20 == 0) {\n        nums.remove(i);\n    }\n}\n\nSystem.out.println(nums);\n\nWhat is printed?",
      "choices": [
        "A) [10, 30]",
        "B) [10, 30, 40]",
        "C) [10, 20, 30]",
        "D) [10, 40]"
      ],
      "answer": 0,
      "explanation": "This is a classic ArrayList traversal trap (Topic 4.9). Initially: [10, 20, 30, 40]. i=0: 10%20=10, not removed. i=1: 20%20=0, removed. List becomes [10, 30, 40], i increments to 2. i=2: 40%20=0, removed. List becomes [10, 30], i increments to 3. size() is now 2, loop ends. Wait - rechecking: after removing 20 at index 1, list is [10, 30, 40]. i becomes 2. nums.get(2)=40, 40%20=0, so 40 is removed. List is [10, 30]. i becomes 3, loop ends. So [10, 30] is actually the result. However, 30 is skipped (the element that shifts to index 1 after removal of 20 is 30, but i jumps to 2, skipping 30's re-evaluation). Since 30%20=10 ≠ 0, skipping 30 doesn't change the outcome here. Final list: [10, 30]. Answer A is correct. Choice B results if students think the index skip after removing 20 causes 40 to also be skipped and never evaluated. Students who pick C think 40 is skipped but 20 is removed correctly without the index issue. Students who pick D mistrack which element is skipped.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_030",
      "unit": 4,
      "question": "The following recursive method is intended to return the sum of all elements in an integer array:\n\npublic static int arraySum(int[] arr, int index) {\n    if (index == arr.length) return 0;\n    return arr[index] + arraySum(arr, index + 1);\n}\n\nWhat is returned by the call arraySum(new int[]{4, 7, 2, 9}, 0)?",
      "choices": [
        "A) 0",
        "B) 13",
        "C) 22",
        "D) 22 is returned only if the base case used index >= arr.length instead of index == arr.length"
      ],
      "answer": 2,
      "explanation": "Tracing the recursion: arraySum({4,7,2,9}, 0) = 4 + arraySum({4,7,2,9}, 1) = 4 + 7 + arraySum({4,7,2,9}, 2) = 4 + 7 + 2 + arraySum({4,7,2,9}, 3) = 4 + 7 + 2 + 9 + arraySum({4,7,2,9}, 4). At index=4, index == arr.length (4==4), so return 0. Total: 4+7+2+9+0 = 22. Choice A (0) would result if the base case triggered immediately (e.g., wrong index). Choice B (13) might result from summing only some elements, perhaps stopping early. Choice D is a distractor testing whether students think the two base conditions behave differently - both index==arr.length and index>=arr.length produce identical results for a correctly incrementing index, so D's premise is false.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_031",
      "unit": 4,
      "question": "A student writes the following method to perform selection sort on an integer array in ascending order:\n\npublic static void selectionSort(int[] arr) {\n    for (int i = 0; i < arr.length - 1; i++) {\n        int minIndex = i;\n        for (int j = i + 1; j < arr.length; j++) {\n            if (arr[j] < arr[minIndex]) {\n                minIndex = j;\n            }\n        }\n        int temp = arr[i];\n        arr[i] = arr[minIndex];\n        arr[minIndex] = temp;\n    }\n}\n\nAfter calling selectionSort on the array {5, 3, 8, 1, 4}, what is the state of the array after exactly TWO complete iterations of the outer loop (i.e., after i=0 and i=1 have both finished)?",
      "choices": [
        "A) {1, 3, 8, 5, 4}",
        "B) {1, 3, 5, 8, 4}",
        "C) {1, 3, 4, 5, 8}",
        "D) {1, 3, 8, 4, 5}"
      ],
      "answer": 0,
      "explanation": "Starting array: {5, 3, 8, 1, 4}. i=0: Find minimum from index 0 to 4. Minimum is 1 at index 3. Swap arr[0] and arr[3]: {1, 3, 8, 5, 4}. i=1: Find minimum from index 1 to 4. Elements are 3, 8, 5, 4. Minimum is 3 at index 1. Swap arr[1] and arr[1] (same position, no change): {1, 3, 8, 5, 4}. After two iterations: {1, 3, 8, 5, 4}. Choice B is wrong - students who think the sort processes more elements per pass might expect {1,3,5,8,4}. Choice C shows a fully sorted array, which would require all iterations. Choice D misidentifies which elements are swapped in the second iteration.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_032",
      "unit": 4,
      "question": "Consider the following code segment:\n\nint[] scores = {88, 72, 95, 61, 84};\nint result = scores[0];\nfor (int i = 1; i < scores.length; i++) {\n    if (scores[i] > result) {\n        result = scores[i];\n    }\n}\nSystem.out.println(result);\n\nWhat is printed when this code segment is executed?",
      "choices": [
        "A) 88",
        "B) 72",
        "C) 95",
        "D) 84"
      ],
      "answer": 2,
      "explanation": "The algorithm initializes result to scores[0] = 88, then iterates through the remaining elements. When i=2, scores[2]=95 is greater than the current result of 88, so result becomes 95. No subsequent value exceeds 95, so 95 is printed. A) 88 is wrong - that is only the initial value. D) 84 is wrong - it is the last element but not the maximum. B) 72 is the minimum, not maximum.",
      "difficulty": "easy",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_033",
      "unit": 4,
      "question": "A researcher collects a dataset of students' names, GPAs, and zip codes to study academic performance across neighborhoods. A privacy advocate argues this dataset poses ethical risks even if names are removed. Which of the following BEST explains why the advocate's concern is valid?\n\nI. ZIP codes combined with GPA could allow re-identification of individuals in small communities.\nII. The dataset was collected without specifying how long it will be retained or who may access it.\nIII. Removing names guarantees the data is fully anonymous and no privacy risk remains.",
      "choices": [
        "A) I only",
        "B) II only",
        "C) I and II only",
        "D) I, II, and III"
      ],
      "answer": 2,
      "explanation": "Statement I is valid: quasi-identifiers like ZIP code and GPA can be combined to re-identify individuals, especially in small populations - a well-known privacy risk. Statement II is valid: lack of data governance policies (retention, access control) is a recognized ethical concern. Statement III is false and directly contradicts the advocate's position - removing names does NOT guarantee full anonymity because re-identification via indirect attributes is possible. Therefore only I and II support the advocate's concern.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_034",
      "unit": 4,
      "question": "Consider the following method:\n\npublic static ArrayList<Integer> mystery(ArrayList<Integer> list) {\n    ArrayList<Integer> result = new ArrayList<Integer>();\n    for (int i = list.size() - 1; i >= 0; i--) {\n        if (list.get(i) % 2 == 0) {\n            result.add(list.get(i));\n        }\n    }\n    return result;\n}\n\nIf list contains [3, 8, 5, 12, 7, 4], what does mystery(list) return?",
      "choices": [
        "A) [8, 12, 4]",
        "B) [4, 12, 8]",
        "C) [3, 5, 7]",
        "D) [4, 8, 12]"
      ],
      "answer": 1,
      "explanation": "The loop iterates from the last index (5) to index 0. Even numbers in order of encounter: index 5 → 4, index 3 → 12, index 1 → 8. Each is added to result in that order, producing [4, 12, 8]. A) [8, 12, 4] is the result of forward traversal - a common mistake when students ignore that the loop runs backward. C) [3, 5, 7] contains the odd values, not even. D) [4, 8, 12] would result from sorting, not the actual traversal order.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_035",
      "unit": 4,
      "question": "Consider the following recursive method:\n\npublic static int compute(int[] arr, int index) {\n    if (index == arr.length) {\n        return 0;\n    }\n    return arr[index] + compute(arr, index + 1);\n}\n\nAnd the 2D array:\nint[][] grid = {{1, 2}, {3, 4}, {5, 6}};\n\nA student wants to compute the sum of the second column (index 1) of grid using compute. Which of the following calls correctly accomplishes this?\n\nI.  compute(new int[]{grid[0][1], grid[1][1], grid[2][1]}, 0)\nII. compute(grid[1], 0)\nIII. compute(new int[]{2, 4, 6}, 0)",
      "choices": [
        "A) I only",
        "B) III only",
        "C) I and III only",
        "D) I, II, and III"
      ],
      "answer": 2,
      "explanation": "The second column values are grid[0][1]=2, grid[1][1]=4, grid[2][1]=6, so the correct sum is 12. Call I explicitly extracts column index 1 from each row into a new array {2,4,6}, so compute returns 2+4+6=12. Call III directly passes {2,4,6}, which also returns 12. Both I and III are correct. Call II passes grid[1] which is the second ROW {3,4}, not the second column - compute({3,4},0) returns 7, not 12. B is wrong because I is also correct, and D incorrectly includes II.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_036",
      "unit": 4,
      "question": "Consider the following method intended to perform a binary search on a sorted array, returning the index of target, or -1 if not found.\n\npublic static int binarySearch(int[] arr, int target) {\n    int low = 0;\n    int high = arr.length - 1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (arr[mid] == target) {\n            return mid;\n        } else if (arr[mid] < target) {\n            high = mid - 1;  // Line X\n        } else {\n            low = mid + 1;   // Line Y\n        }\n    }\n    return -1;\n}\n\nCalled with arr = {2, 5, 9, 14, 20} and target = 14, what does this method return?",
      "choices": [
        "A) 3",
        "B) -1",
        "C) 2",
        "D) 4"
      ],
      "answer": 1,
      "explanation": "The bug is on Line X and Line Y - the update directions are swapped. When arr[mid] < target, the target is in the upper half, so low should be set to mid+1, but the code incorrectly sets high = mid-1. Similarly, the else branch sets low = mid+1 when it should set high = mid-1. Tracing with target=14: low=0,high=4 → mid=2, arr[2]=9 < 14 → incorrectly sets high=1. Now high < low, loop exits, returns -1. A) 3 would be correct if the algorithm were implemented properly. C) 2 is the mid index on the first iteration. D) 4 is the last valid index in the array, which a student might expect if they believed the search advanced toward the upper end of the array before finding the target.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_037",
      "unit": 4,
      "question": "A researcher collects data from a fitness app, including users' daily step counts, sleep hours, and GPS location history. The researcher plans to publish an anonymized dataset by removing names and email addresses. Which of the following best describes a remaining ethical concern with this approach?",
      "choices": [
        "A) The dataset may not contain enough data points to draw meaningful conclusions.",
        "B) Removing names and emails fully satisfies all privacy requirements under any data ethics standard.",
        "C) Combining GPS location history with step counts may allow re-identification of individuals even without names.",
        "D) Publishing fitness data is only ethical if every user explicitly opts out of sharing."
      ],
      "answer": 2,
      "explanation": "Even after removing direct identifiers like names and emails, combinations of quasi-identifiers such as GPS location patterns and behavioral data (step counts, sleep schedules) can be cross-referenced with other datasets to re-identify individuals - a process known as re-identification or de-anonymization. This is a well-documented ethical concern. Choice A is a statistical concern, not a privacy one. Choice B is incorrect because removing names and emails alone does not guarantee anonymity. Choice D misrepresents opt-out ethics and is not a specific concern about this dataset.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_038",
      "unit": 4,
      "question": "Consider the following code segment:\n\nint[] scores = {88, 92, 75, 95, 60};\nint total = 0;\nfor (int i = 1; i < scores.length - 1; i++) {\n    total += scores[i];\n}\nSystem.out.println(total);\n\nWhat is printed when this code executes?",
      "choices": [
        "A) 410",
        "B) 262",
        "C) 322",
        "D) 350"
      ],
      "answer": 1,
      "explanation": "The loop starts at index 1 (skipping index 0, which is 88) and runs while i < scores.length - 1, meaning i < 4, so it stops before index 4 (which is 60). The loop processes indices 1, 2, and 3: scores[1]=92, scores[2]=75, scores[3]=95. Total = 92 + 75 + 95 = 262. Choice A (410) is the sum of all elements. Choice C (322) results from a student who reads i < scores.length - 1 as i <= scores.length - 1, which would include index 4 (60) but still skip index 0, giving 92+75+95+60=322. Choice D (350) results from a student who starts the loop at i=0 but correctly stops before index 4, computing 88+92+75+95=350.",
      "difficulty": "medium",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_039",
      "unit": 4,
      "question": "A programmer writes the following method intended to return the index of the largest value in an ArrayList<Integer>:\n\npublic static int maxIndex(ArrayList<Integer> list) {\n    int maxIdx = 0;\n    for (int i = 1; i < list.size(); i++) {\n        if (list.get(i) > list.get(maxIdx)) {\n            maxIdx = i;\n        }\n    }\n    return maxIdx;\n}\n\nThe programmer then calls the method with the list [3, 7, 7, 2, 5]. What does the method return, and does it behave correctly for all valid non-empty lists?",
      "choices": [
        "A) Returns 1; the method is correct for all non-empty lists because it properly tracks the index of the maximum value.",
        "B) Returns 1; however, the method fails for lists where the maximum value appears only at index 0, always returning 0 incorrectly.",
        "C) Returns 2; the method has a bug because it does not handle duplicate maximum values and always returns the last occurrence.",
        "D) Returns 0; the loop condition should be i <= list.size(), causing an IndexOutOfBoundsException before a value is returned."
      ],
      "answer": 0,
      "explanation": "The method initializes maxIdx to 0 and scans from index 1. For [3, 7, 7, 2, 5], it finds 7 at index 1 (greater than 3), updates maxIdx to 1. At index 2, list.get(2)=7 is NOT greater than list.get(1)=7 (strict >), so maxIdx stays 1. Final return is 1. The method is correct for all non-empty lists: it handles the case where the max is at index 0 (no update ever occurs, 0 is returned correctly), and correctly returns the FIRST occurrence of the maximum due to strict >. Choice B is wrong because a max at index 0 is handled correctly. Choice C is wrong because duplicate maxes return the first, not last, occurrence with strict >. Choice D is wrong because the loop condition i < list.size() is correct and no exception occurs.",
      "difficulty": "hard",
      "type": "MCQ"
    },
    {
      "id": "pt_csa_p1_u4_040",
      "unit": 4,
      "question": "A 2D array grid is declared as follows:\n\nint[][] grid = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\nThe following method is called with this array:\n\npublic static int mystery(int[][] arr) {\n    int result = 0;\n    for (int r = 0; r < arr.length; r++) {\n        for (int c = 0; c < arr[r].length; c++) {\n            if (r == c) {\n                result += arr[r][c];\n            }\n        }\n    }\n    return result;\n}\n\nWhat does mystery(grid) return?",
      "choices": [
        "A) 45",
        "B) 15",
        "C) 12",
        "D) 6"
      ],
      "answer": 1,
      "explanation": "The condition r == c selects only elements on the main diagonal of the 2D array. For a 3x3 grid: arr[0][0]=1, arr[1][1]=5, arr[2][2]=9. Sum = 1 + 5 + 9 = 15. Choice A (45) is the sum of all elements in the grid, a common error when students ignore the r==c condition. Choice C (12) might result from incorrectly summing a row or column instead of the diagonal. Choice D (6) might result from summing only the first row (1+2+3) or confusing the diagonal with another pattern.",
      "difficulty": "medium",
      "type": "MCQ"
    }
  ],
  "frqs": [
    {
      "id": "pt_csa_p1_frq_001",
      "frqType": "regular",
      "isCalc": false,
      "title": "Student Grade Tracker",
      "prompt": "A teacher wants to track student grades using a class called GradeBook. Each student has a name and a list of integer scores. The GradeBook class stores a list of students and provides methods to analyze their performance.\n\nThe following classes are used in this problem:\n\npublic class Student {\n    private String name;\n    private int[] scores;\n\n    public Student(String name, int[] scores) {\n        this.name = name;\n        this.scores = scores;\n    }\n\n    public String getName() { return name; }\n    public int[] getScores() { return scores; }\n}\n\npublic class GradeBook {\n    private ArrayList<Student> students;\n\n    public GradeBook() {\n        students = new ArrayList<Student>();\n    }\n\n    public void addStudent(Student s) {\n        students.add(s);\n    }\n\n    // Returns the average score for a given student\n    public double getAverage(Student s) { /* to be implemented in part (a) */ }\n\n    // Returns the name of the student with the highest average\n    public String getTopStudent() { /* to be implemented in part (b) */ }\n\n    // Returns a list of students whose average is at or above the given threshold\n    public ArrayList<String> getAboveAverage(double threshold) { /* to be implemented in part (c) */ }\n}",
      "parts": [
        {
          "label": "a",
          "question": "Write the getAverage method for the GradeBook class. This method takes a Student object as a parameter and returns the average (mean) of all scores stored in that student's scores array as a double. If the student has no scores (empty array), return 0.0.\n\nComplete the method below:\n\npublic double getAverage(Student s)",
          "points": 3
        },
        {
          "label": "b",
          "question": "Write the getTopStudent method for the GradeBook class. This method returns the name (as a String) of the student in the students list who has the highest average score. You may call the getAverage method written in part (a). You may assume the students list contains at least one student and all students have at least one score.\n\nComplete the method below:\n\npublic String getTopStudent()",
          "points": 4
        },
        {
          "label": "c",
          "question": "Write the getAboveAverage method for the GradeBook class. This method takes a double threshold as a parameter and returns an ArrayList of Strings containing the names of all students whose average score is greater than or equal to the threshold. The names should appear in the same order as the students appear in the students list. You may call the getAverage method written in part (a). If no students meet the threshold, return an empty ArrayList.\n\nComplete the method below:\n\npublic ArrayList<String> getAboveAverage(double threshold)",
          "points": 4
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): getAverage correctly computes the mean of the scores array",
          "points": 3,
          "guidance": "1 point: Accesses scores array via s.getScores() and correctly iterates over all elements (e.g., for loop with correct bounds). 1 point: Correctly accumulates the sum of all scores. 1 point: Returns sum divided by length as a double (handles integer division correctly, e.g., (double) sum / scores.length or sum / (double) scores.length), and returns 0.0 for empty array."
        },
        {
          "criterion": "Part (b): getTopStudent correctly identifies the student with the highest average",
          "points": 4,
          "guidance": "1 point: Initializes a variable to track the top student or top average before the loop (e.g., sets topAvg to getAverage of first student or Double.MIN_VALUE). 1 point: Iterates over all students in the students ArrayList. 1 point: Correctly calls getAverage on each student and compares to the current maximum, updating when a higher average is found. 1 point: Returns the name (getString getName()) of the top student after the loop ends."
        },
        {
          "criterion": "Part (c): getAboveAverage correctly builds and returns the list of qualifying student names",
          "points": 4,
          "guidance": "1 point: Creates a new ArrayList<String> to hold results. 1 point: Iterates over all students in the students ArrayList. 1 point: Correctly calls getAverage on each student and compares to threshold using >= operator. 1 point: Adds the qualifying student's name (getName()) to the result list and returns the completed list after the loop."
        }
      ]
    },
    {
      "id": "pt_csa_p1_frq_002",
      "frqType": "regular",
      "isCalc": false,
      "title": "Text Message Word Counter",
      "prompt": "You are writing a program to analyze text messages. A text message is represented as a String containing words separated by single spaces. There are no leading or trailing spaces, and punctuation may be attached to words (e.g., \"hello,\" counts as one word).\n\nConsider the following class:\n\npublic class TextAnalyzer {\n    private String message;\n\n    public TextAnalyzer(String message) {\n        this.message = message;\n    }\n\n    public String getMessage() { return message; }\n\n    // Returns the number of words in the message\n    public int wordCount() { /* to be implemented in part (a) */ }\n\n    // Returns the number of times a given word appears in the message (case-insensitive)\n    public int countWord(String target) { /* to be implemented in part (b) */ }\n\n    // Returns a new TextAnalyzer whose message is every nth word from this message\n    // starting with the first word\n    public TextAnalyzer everyNthWord(int n) { /* to be implemented in part (c) */ }\n}\n\nYou may use the following String methods:\n- split(String regex): splits the string by the given regex and returns a String[]\n- toLowerCase(): returns a lowercase version of the string\n- equals(String other): returns true if two strings are equal\n\nFor this problem, you may assume message is never null and always contains at least one word.",
      "parts": [
        {
          "label": "a",
          "question": "Write the wordCount method. This method returns the number of words in the message. Words are separated by single spaces.\n\nComplete the method below:\n\npublic int wordCount()",
          "points": 2
        },
        {
          "label": "b",
          "question": "Write the countWord method. This method takes a String target and returns the number of times target appears in message. The comparison should be case-insensitive (e.g., \"Hello\" and \"hello\" are the same word). You may call wordCount or use split directly.\n\nComplete the method below:\n\npublic int countWord(String target)",
          "points": 4
        },
        {
          "label": "c",
          "question": "Write the everyNthWord method. This method takes an integer n and returns a new TextAnalyzer object whose message consists of every nth word from this message, starting with the first word (index 0, then index n, then index 2n, etc.), joined by single spaces. For example, if the message is \"one two three four five\" and n is 2, the result should be a TextAnalyzer with message \"one three five\". You may assume n >= 1.\n\nComplete the method below:\n\npublic TextAnalyzer everyNthWord(int n)",
          "points": 5
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): wordCount correctly returns the number of words",
          "points": 2,
          "guidance": "1 point: Uses split(\" \") (or equivalent) to split message into an array of words. 1 point: Returns the length of the resulting array."
        },
        {
          "criterion": "Part (b): countWord correctly counts case-insensitive occurrences of target",
          "points": 4,
          "guidance": "1 point: Splits message into individual words (e.g., message.split(\" \")). 1 point: Initializes a counter variable to 0. 1 point: Iterates over all words and correctly applies case-insensitive comparison (e.g., word.toLowerCase().equals(target.toLowerCase()) or equalsIgnoreCase). 1 point: Correctly increments counter and returns final count."
        },
        {
          "criterion": "Part (c): everyNthWord correctly builds and returns a new TextAnalyzer with every nth word",
          "points": 5,
          "guidance": "1 point: Splits message into a words array using split(\" \"). 1 point: Initializes a structure (e.g., String or StringBuilder) to build the result. 1 point: Iterates through the words array using index i starting at 0, stepping by n (i += n), correctly selecting words at positions 0, n, 2n, etc. 1 point: Correctly joins selected words with single spaces (no leading/trailing spaces, or uses trim() to clean up). 1 point: Constructs and returns a new TextAnalyzer object with the resulting message string."
        }
      ]
    },
    {
      "id": "pt_csa_p1_frq_003",
      "frqType": "regular",
      "isCalc": false,
      "title": "Two-Dimensional Seating Chart",
      "prompt": "A school theater has a seating chart represented as a 2D array of integers. Each element represents the seat number assigned to that position. Rows are numbered from top (row 0) to bottom, and columns are numbered from left (column 0) to right. A seat value of 0 indicates an empty (unassigned) seat.\n\nConsider the following class:\n\npublic class TheaterSeating {\n    private int[][] seats;\n\n    /** seats[r][c] is the seat number at row r, column c.\n     *  A value of 0 indicates the seat is unassigned.\n     */\n    public TheaterSeating(int[][] seats) {\n        this.seats = seats;\n    }\n\n    // Returns the number of occupied (non-zero) seats in a given row\n    public int occupiedInRow(int row) { /* to be implemented in part (a) */ }\n\n    // Returns the row index with the most occupied seats\n    // If there is a tie, return the smaller row index\n    public int busiestRow() { /* to be implemented in part (b) */ }\n\n    // Assigns seatNum to the first empty seat found scanning left-to-right,\n    // top-to-bottom. Returns true if successful, false if no empty seat exists.\n    public boolean assignSeat(int seatNum) { /* to be implemented in part (c) */ }\n}",
      "parts": [
        {
          "label": "a",
          "question": "Write the occupiedInRow method. This method takes an integer row as a parameter and returns the number of seats in that row that are occupied (i.e., have a non-zero value).\n\nComplete the method below:\n\npublic int occupiedInRow(int row)",
          "points": 3
        },
        {
          "label": "b",
          "question": "Write the busiestRow method. This method returns the index of the row that has the most occupied seats. If two or more rows are tied for the most occupied seats, return the smallest row index among them. You may call the occupiedInRow method written in part (a).\n\nComplete the method below:\n\npublic int busiestRow()",
          "points": 4
        },
        {
          "label": "c",
          "question": "Write the assignSeat method. This method takes an integer seatNum and assigns it to the first empty seat (value 0) found by scanning the 2D array in row-major order (left to right within each row, top to bottom across rows). If an empty seat is found, assign seatNum to that position, update the seats array, and return true. If no empty seat exists, return false.\n\nComplete the method below:\n\npublic boolean assignSeat(int seatNum)",
          "points": 4
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): occupiedInRow correctly counts non-zero seats in a given row",
          "points": 3,
          "guidance": "1 point: Accesses seats[row] and iterates over the correct column range (0 to seats[row].length - 1). 1 point: Correctly identifies occupied seats with a condition (seats[row][c] != 0). 1 point: Initializes a counter, increments it for each occupied seat, and returns the final count."
        },
        {
          "criterion": "Part (b): busiestRow correctly identifies the row with the most occupied seats, breaking ties by smallest index",
          "points": 4,
          "guidance": "1 point: Initializes tracking variables (e.g., maxCount and bestRow) before the loop, with bestRow = 0 and maxCount = occupiedInRow(0) or equivalent. 1 point: Iterates over all row indices (0 to seats.length - 1). 1 point: Calls occupiedInRow for each row and correctly compares using strictly greater than (>) to ensure ties go to the smaller index. 1 point: Returns the correct bestRow index after the loop."
        },
        {
          "criterion": "Part (c): assignSeat correctly finds the first empty seat, assigns it, and returns appropriate boolean",
          "points": 4,
          "guidance": "1 point: Uses a nested loop iterating over rows (outer) and columns (inner) in the correct order (row-major). 1 point: Correctly checks if a seat is empty with seats[r][c] == 0. 1 point: Assigns seatNum to seats[r][c] when an empty seat is found. 1 point: Returns true immediately after assigning (early exit) and returns false if the loops complete without finding an empty seat."
        }
      ]
    },
    {
      "id": "pt_csa_p1_frq_004",
      "frqType": "regular",
      "isCalc": false,
      "title": "Inventory Management System",
      "prompt": "A store uses an inventory management system to track products. Each product has a name, a price, and a quantity in stock. The store wants methods to manage and query its inventory.\n\nThe following class definitions are provided:\n\npublic class Product {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public Product(String name, double price, int quantity) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public int getQuantity() { return quantity; }\n    public void setQuantity(int q) { quantity = q; }\n}\n\npublic class Inventory {\n    private ArrayList<Product> products;\n\n    public Inventory() {\n        products = new ArrayList<Product>();\n    }\n\n    public void addProduct(Product p) {\n        products.add(p);\n    }\n\n    /** Returns the total value of the inventory.\n     *  The value of each product is price * quantity.\n     */\n    public double totalValue() { /* to be implemented in part (a) */ }\n\n    /** Attempts to sell `amount` units of the product with the given name.\n     *  If the product is found and has enough quantity, reduces its quantity\n     *  by `amount` and returns true. Otherwise, returns false.\n     *  If multiple products share the same name, update only the first one found.\n     */\n    public boolean sellProduct(String name, int amount) { /* to be implemented in part (b) */ }\n\n    /** Returns an ArrayList of product names whose quantity is less than\n     *  the given threshold. Names appear in the same order as in the products list.\n     */\n    public ArrayList<String> getLowStock(int threshold) { /* to be implemented in part (c) */ }\n}",
      "parts": [
        {
          "label": "a",
          "question": "Write the totalValue method for the Inventory class. This method calculates and returns the total value of all products in the inventory. The value of a single product is its price multiplied by its quantity. The total value is the sum of the values of all products.\n\nComplete the method below:\n\npublic double totalValue()",
          "points": 3
        },
        {
          "label": "b",
          "question": "Write the sellProduct method for the Inventory class. This method takes a String name and an int amount. It searches the products list for the first product with the given name. If found and that product's quantity is greater than or equal to amount, it reduces the product's quantity by amount and returns true. If the product is not found, or if the product's quantity is less than amount, the method returns false and makes no changes.\n\nComplete the method below:\n\npublic boolean sellProduct(String name, int amount)",
          "points": 5
        },
        {
          "label": "c",
          "question": "Write the getLowStock method for the Inventory class. This method takes an int threshold and returns an ArrayList<String> containing the names of all products whose current quantity is strictly less than threshold. The names should appear in the same order as those products appear in the products list. If no products are below the threshold, return an empty ArrayList.\n\nComplete the method below:\n\npublic ArrayList<String> getLowStock(int threshold)",
          "points": 3
        }
      ],
      "rubric": [
        {
          "criterion": "Part (a): totalValue correctly sums price * quantity for all products",
          "points": 3,
          "guidance": "1 point: Initializes a double accumulator variable to 0.0 (or 0) before the loop. 1 point: Iterates over all products in the products ArrayList and correctly retrieves price and quantity via getPrice() and getQuantity(). 1 point: Correctly multiplies price by quantity for each product, accumulates the sum, and returns the final total as a double."
        },
        {
          "criterion": "Part (b): sellProduct correctly finds the product, validates quantity, updates stock, and returns the correct boolean",
          "points": 5,
          "guidance": "1 point: Iterates over all products in the products ArrayList. 1 point: Correctly compares each product's name using getName().equals(name) (not ==). 1 point: When the product is found, checks if getQuantity() >= amount before making any changes. 1 point: If the condition is met, correctly calls setQuantity with the new value (getQuantity() - amount) and returns true (with appropriate early exit). 1 point: Returns false if the product is not found after the full loop, or if found but quantity is insufficient (no modification made in that case)."
        },
        {
          "criterion": "Part (c): getLowStock correctly identifies and returns names of products with quantity below threshold",
          "points": 3,
          "guidance": "1 point: Creates a new ArrayList<String> to store results before the loop. 1 point: Iterates over all products and correctly applies the condition getQuantity() < threshold (strict less than). 1 point: Adds the product's name (getName()) to the result list for each qualifying product and returns the completed ArrayList after the loop."
        }
      ]
    }
  ]
}];
