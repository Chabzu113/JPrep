var APSTATS_FRQ = [
  {
    "id": "stats_u1_frq001",
    "subject": "apstats",
    "frqType": "short",
    "title": "Classifying Variables in a School Health Survey",
    "units": [
      1
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school nurse conducts a health survey of 200 students at Jefferson High School. For each student, the following information is recorded: (1) blood type (A, B, AB, or O), (2) resting heart rate in beats per minute, (3) whether the student participates in a school sport (yes or no), and (4) number of hours of sleep the student got the previous night.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify the variable 'blood type' as categorical or quantitative. Explain your reasoning.",
        "rubric": "Earns 1 point for correctly identifying blood type as categorical AND providing a valid explanation - for example, that blood type places individuals into named groups or categories (A, B, AB, O) with no numerical meaning or order."
      },
      {
        "label": "b",
        "command": "Identify",
        "question": "Identify the variable 'resting heart rate in beats per minute' as categorical or quantitative. Explain your reasoning.",
        "rubric": "Earns 1 point for correctly identifying resting heart rate as quantitative AND explaining that it takes numerical values for which arithmetic operations (such as finding an average) are meaningful."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A student claims that 'number of hours of sleep' and 'whether the student participates in a sport' are both quantitative variables because they both involve numbers when recorded. Is the student correct? Explain.",
        "rubric": "Earns 1 point for correctly stating the student is incorrect AND distinguishing the two variables: 'number of hours of sleep' is quantitative because it is a measured numerical value, while 'whether the student participates in a sport' is categorical because it places students into two named groups (yes or no) with no numerical meaning, even if coded as 0 or 1."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies blood type as categorical and explains that it groups individuals into named categories with no numerical or arithmetic meaning.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "categorical",
          "named categories",
          "blood type groups",
          "no numerical meaning",
          "not quantitative",
          "qualitative",
          "labels individuals",
          "places into groups",
          "A B AB O",
          "no arithmetic operations possible",
          "nominal variable",
          "non-numerical classification"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly identifies resting heart rate as quantitative and explains that it is a measured numerical value for which arithmetic operations are meaningful.",
        "partLabel": "b",
        "skill": "identify",
        "keywords": [
          "quantitative",
          "numerical measurement",
          "beats per minute",
          "arithmetic operations meaningful",
          "compute average",
          "measurable quantity",
          "continuous variable",
          "numerical value",
          "differences meaningful",
          "can calculate mean",
          "ordered numeric scale",
          "measured numerically"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies the student as incorrect, labels 'hours of sleep' as quantitative and 'participates in sport' as categorical, and explains the distinction between measured numerical values and named group membership.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "student is incorrect",
          "hours of sleep quantitative",
          "sport participation categorical",
          "yes or no named groups",
          "coded as 0 or 1 still categorical",
          "no numerical meaning",
          "group membership",
          "measured numerical value",
          "arithmetic meaningful for sleep",
          "binary categorical variable",
          "numerical coding does not make quantitative",
          "distinction between categorical and quantitative"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u1_frq002",
    "subject": "apstats",
    "frqType": "short",
    "title": "Comparing Distributions of Test Scores Using Boxplots",
    "units": [
      1
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A teacher gives the same 100-point exam to two different class periods. The scores are summarized in the boxplots below (described numerically here for reference).\n\nPeriod 1 - Minimum: 52, Q1: 68, Median: 76, Q3: 84, Maximum: 98\nPeriod 2 - Minimum: 44, Q1: 62, Median: 80, Q3: 90, Maximum: 100\n\nBoth classes have 30 students. No outliers are present in either distribution.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the interquartile range (IQR) for each class period. Show your work.",
        "rubric": "Earns 1 point for correctly calculating both IQRs: Period 1 IQR = Q3 − Q1 = 84 − 68 = 16; Period 2 IQR = Q3 − Q1 = 90 − 62 = 28. Both values must be correct and the subtraction Q3 minus Q1 must be shown or implied."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Compare the centers of the two distributions using an appropriate measure. What does this tell you about the two classes?",
        "rubric": "Earns 1 point for comparing the medians (Period 1 median = 76, Period 2 median = 80) and correctly concluding that Period 2 has a higher center, meaning the typical score in Period 2 was higher than the typical score in Period 1. Must reference median specifically, not mean, since only boxplot information is available."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A student says that Period 2 performed more consistently because its maximum score (100) was higher than Period 1's maximum score (98). Is the student's reasoning correct? Explain what measure should be used to compare consistency (spread) and what it shows.",
        "rubric": "Earns 1 point for correctly stating the student's reasoning is incorrect AND identifying IQR (or range) as the appropriate measure of spread/consistency. Must state that Period 2 has a larger IQR (28 vs. 16), meaning Period 2 scores were MORE spread out or less consistent than Period 1, and that the maximum alone does not measure spread."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates IQR for both periods using Q3 minus Q1: Period 1 IQR = 16, Period 2 IQR = 28.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "IQR",
          "interquartile range",
          "Q3 minus Q1",
          "Q3 - Q1",
          "84 minus 68",
          "90 minus 62",
          "IQR equals 16",
          "IQR equals 28",
          "third quartile minus first quartile",
          "middle 50 percent spread",
          "16 and 28",
          "five-number summary"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Compares medians of the two distributions (76 vs. 80) and concludes Period 2 has a higher center or typical score.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "median",
          "center of distribution",
          "typical score",
          "Period 2 higher center",
          "median of 76",
          "median of 80",
          "Period 2 median greater than Period 1",
          "median appropriate for boxplot",
          "typical value",
          "compare medians",
          "Period 2 scored higher typically",
          "median measures center"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies student reasoning as incorrect, names IQR as the measure of spread/consistency, and concludes Period 2 is less consistent (larger IQR of 28 vs. 16). States maximum alone does not measure spread.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "student reasoning incorrect",
          "IQR measures spread",
          "interquartile range",
          "Period 2 less consistent",
          "larger IQR indicates more variability",
          "IQR 28 greater than 16",
          "maximum does not measure spread",
          "single value not a spread measure",
          "Period 1 more consistent",
          "variability comparison",
          "spread of middle 50 percent",
          "consistency measured by IQR not maximum"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u1_frq003",
    "subject": "apstats",
    "frqType": "short",
    "title": "Comparing Spread: IQR and Standard Deviation of Exam Scores",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A high school teacher recorded the following scores (out of 100) on a unit exam for two classes of 10 students each.\n\nClass A: 55, 60, 62, 65, 70, 72, 75, 78, 80, 83\nClass B: 40, 45, 65, 68, 70, 71, 72, 88, 93, 98\n\nThe teacher wants to compare the variability in performance between the two classes.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the interquartile range (IQR) for each class. Show your work by identifying Q1 and Q3 for each class.",
        "rubric": "Earns 1 point for correctly identifying Q1 and Q3 for both classes and computing the correct IQR for each. Class A: Q1 = 62, Q3 = 78, IQR = 16. Class B: Q1 = 45, Q3 = 88, IQR = 43. Allow minor rounding differences if method is correct."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "The standard deviation for Class A is approximately 8.5 and for Class B is approximately 18.6. Explain what the difference in standard deviations tells you about the two classes' exam scores.",
        "rubric": "Earns 1 point for explaining that Class B has greater variability or spread than Class A, referencing that the standard deviation measures spread around the mean, and connecting the larger standard deviation of Class B to scores being more spread out from the mean."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "The teacher notices that Class B contains two unusually low scores (40 and 45) and two unusually high scores (93 and 98). Justify which measure of spread - IQR or standard deviation - is more appropriate for comparing the typical variability of the two classes in the presence of these extreme values.",
        "rubric": "Earns 1 point for stating that the IQR is more appropriate because it is resistant to outliers or extreme values, while the standard deviation is non-resistant and is pulled by outliers, making it less representative of typical spread when extreme values are present."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates Q1, Q3, and IQR for both Class A and Class B with supporting work shown.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "IQR",
          "interquartile range",
          "Q1",
          "Q3",
          "first quartile",
          "third quartile",
          "IQR = Q3 - Q1",
          "16",
          "43",
          "quartile"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Explains that Class B has greater variability than Class A based on standard deviation, referencing spread around the mean.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "standard deviation",
          "greater variability",
          "more spread out",
          "spread around the mean",
          "Class B",
          "larger standard deviation",
          "typical distance from the mean",
          "deviation from mean",
          "variability"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Justifies that IQR is more appropriate than standard deviation when outliers or extreme values are present, citing resistance to outliers.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "IQR",
          "resistant",
          "not affected by outliers",
          "outliers",
          "extreme values",
          "standard deviation is not resistant",
          "pulled by outliers",
          "robust",
          "skewed",
          "non-resistant"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u1_frq004",
    "subject": "apstats",
    "frqType": "short",
    "title": "Interpreting a Histogram of Commute Times",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A city transportation authority surveyed 200 randomly selected commuters and recorded their one-way commute times (in minutes). The results are displayed in the histogram below.\n\n[Histogram Description]\nBin 0-10 min: 12 commuters\nBin 10-20 min: 38 commuters\nBin 20-30 min: 60 commuters\nBin 30-40 min: 52 commuters\nBin 40-50 min: 24 commuters\nBin 50-60 min: 10 commuters\nBin 60-70 min: 4 commuters\n\nThe distribution has a mean commute time of approximately 31 minutes and a median commute time of approximately 29 minutes.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the shape of the distribution of commute times as shown in the histogram. Include a description of any notable features.",
        "rubric": "Earns 1 point for correctly identifying the shape as approximately unimodal and slightly right-skewed (or skewed right), noting that the tail extends toward higher commute times and the peak (mode) is in the 20-30 minute bin."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "The mean commute time is approximately 31 minutes and the median is approximately 29 minutes. Explain how the histogram is consistent with the mean being greater than the median.",
        "rubric": "Earns 1 point for explaining that the right skew (tail toward higher values) pulls the mean toward larger values more than the median, so the mean exceeds the median, which is consistent with the longer right tail visible in the histogram for commute times above 40 minutes."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Using the histogram, calculate the relative frequency of commuters whose one-way commute time was at least 40 minutes. Show your work.",
        "rubric": "Earns 1 point for correctly adding the frequencies for the 40-50, 50-60, and 60-70 bins (24 + 10 + 4 = 38) and dividing by 200 to get a relative frequency of 0.19 or 19%. Accept equivalent decimal or percent forms."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly describes the distribution shape as unimodal and skewed right, identifying the tail and the location of the peak.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "skewed right",
          "right-skewed",
          "unimodal",
          "single peak",
          "tail to the right",
          "longer right tail",
          "peak at 20-30",
          "mode bin",
          "slightly skewed",
          "skewed toward higher values"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Explains that right skew pulls the mean above the median because extreme high values inflate the mean more than the median.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "right skew",
          "mean greater than median",
          "tail pulls the mean",
          "extreme values",
          "mean is not resistant",
          "outliers affect mean",
          "median is resistant",
          "skewed distribution",
          "high values inflate mean",
          "mean pulled toward tail"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Calculates relative frequency of commuters with commute time at least 40 minutes as 38/200 = 0.19 or 19%.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "relative frequency",
          "38",
          "200",
          "0.19",
          "19%",
          "19 percent",
          "at least 40 minutes",
          "40-50 plus 50-60 plus 60-70",
          "24 + 10 + 4",
          "proportion"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u1_frq005",
    "subject": "apstats",
    "frqType": "short",
    "title": "Comparing Spread Measures for Hospital Wait Times",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A hospital administrator recorded the emergency room wait times (in minutes) for two shifts over 10 days. The data for the Day Shift and Night Shift are summarized below.\n\nDay Shift wait times (minutes): 18, 22, 25, 27, 28, 30, 31, 33, 35, 51\nNight Shift wait times (minutes): 20, 24, 26, 28, 29, 30, 31, 33, 35, 37\n\nSummary statistics:\n- Day Shift: Mean = 30.0 min, Median = 29.0 min, Q1 = 25.0 min, Q3 = 33.5 min, Standard Deviation ≈ 8.97 min\n- Night Shift: Mean = 29.3 min, Median = 29.5 min, Q1 = 25.5 min, Q3 = 33.0 min, Standard Deviation ≈ 5.12 min\n\nThe administrator wants to determine which measure of spread - IQR or standard deviation - is more appropriate for comparing the two shifts, and whether the Day Shift contains any outliers.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Using the 1.5 × IQR rule, determine whether the value of 51 minutes in the Day Shift data is an outlier. Show your work.",
        "rubric": "Student earns 1 point for correctly computing IQR = Q3 − Q1 = 33.5 − 25.0 = 8.5, then upper fence = Q3 + 1.5(IQR) = 33.5 + 12.75 = 46.25, and correctly concluding that 51 > 46.25, so 51 is an outlier."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Explain why the IQR is a more appropriate measure of spread than the standard deviation when comparing the typical variability of the two shifts.",
        "rubric": "Student earns 1 point for explaining that the Day Shift contains an outlier (51 minutes) which inflates or distorts the standard deviation, making it not resistant, and that the IQR is resistant to outliers and therefore better represents the typical spread of the middle 50% of the data."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Despite having nearly the same median wait times, a hospital quality officer claims the Day Shift has greater variability in patient wait times than the Night Shift. Justify this claim using both the IQR and standard deviation, and describe what this difference in variability means in context.",
        "rubric": "Student earns 1 point for correctly stating that the Day Shift IQR = 8.5 min is larger than the Night Shift IQR = 7.5 min AND the Day Shift standard deviation ≈ 8.97 min is larger than the Night Shift standard deviation ≈ 5.12 min, and providing a contextual interpretation such as Day Shift wait times are more spread out or less consistent, meaning patients experience a wider range of wait times during the Day Shift."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the 1.5 × IQR outlier rule: computes IQR = 8.5, upper fence = 46.25, and concludes 51 is an outlier because it exceeds the upper fence.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "IQR",
          "interquartile range",
          "1.5 IQR rule",
          "upper fence",
          "Q3 + 1.5 times IQR",
          "outlier",
          "46.25",
          "51 is an outlier",
          "exceeds upper fence",
          "Q1 = 25",
          "Q3 = 33.5",
          "IQR = 8.5",
          "lower fence",
          "Q1 minus 1.5 times IQR",
          "outlier boundary"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Explains that the outlier inflates the standard deviation, making it non-resistant, while IQR is resistant to outliers and better measures typical spread.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "resistant measure",
          "not resistant",
          "outlier inflates standard deviation",
          "standard deviation sensitive to outliers",
          "IQR resistant to outliers",
          "skewed distribution",
          "middle 50 percent",
          "robust measure of spread",
          "distorts standard deviation",
          "IQR preferred with outliers",
          "outlier pulls standard deviation upward",
          "non-resistant statistic",
          "IQR unaffected by extreme values"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly compares both IQR (8.5 > 7.5) and standard deviation (8.97 > 5.12) for both shifts, and provides a contextual interpretation about inconsistency or variability in Day Shift wait times.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "Day Shift IQR larger",
          "IQR 8.5 greater than 7.5",
          "standard deviation 8.97 greater than 5.12",
          "more variable wait times",
          "greater spread",
          "more variability in Day Shift",
          "Day Shift less consistent",
          "wider range of wait times",
          "Night Shift more consistent",
          "both measures support greater variability",
          "contextual interpretation of spread",
          "patients experience wider range",
          "Day Shift more dispersed"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u1_frq006",
    "subject": "apstats",
    "frqType": "short",
    "title": "Z-Scores and Percentiles for Standardized Test Scores",
    "units": [
      1
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A large school district administered a standardized mathematics assessment to all 11th-grade students. The scores are approximately normally distributed with a mean of 74 points and a standard deviation of 8 points. Two students, Amara and Diego, received scores of 90 and 66, respectively. The district defines 'academic recognition' as scoring at or above the 90th percentile. A counselor is comparing the two students' performances and determining eligibility for academic recognition.\n\nUse the following standard normal table values as needed:\n- z = 1.00 → percentile ≈ 84.1%\n- z = 1.28 → percentile ≈ 90.0%\n- z = 1.50 → percentile ≈ 93.3%\n- z = 2.00 → percentile ≈ 97.7%\n- z = −1.00 → percentile ≈ 15.9%",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the z-scores for both Amara's score of 90 and Diego's score of 66. Show your work using correct notation.",
        "rubric": "Student earns 1 point for correctly computing both z-scores using the formula z = (x − μ) / σ: Amara z = (90 − 74) / 8 = 16/8 = 2.00, and Diego z = (66 − 74) / 8 = −8/8 = −1.00, with work shown and correct notation used."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Using the z-scores calculated in part (a) and the provided table, identify the approximate percentile for each student and describe what each percentile means in the context of this assessment.",
        "rubric": "Student earns 1 point for correctly identifying Amara's percentile as approximately 97.7% (z = 2.00) and Diego's percentile as approximately 15.9% (z = −1.00), with correct contextual interpretation such as Amara scored higher than approximately 97.7% of all 11th-grade students and Diego scored higher than approximately 15.9% of all 11th-grade students."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "The district requires a score at or above the 90th percentile for academic recognition. Determine the minimum raw score needed to qualify, and justify whether Amara qualifies. Explain why using only the mean to compare student performance would be misleading in this context.",
        "rubric": "Student earns 1 point for correctly computing the minimum score as x = μ + z·σ = 74 + 1.28(8) = 74 + 10.24 = 84.24, so approximately 85 points (or 84.24), concluding Amara qualifies because her score of 90 exceeds this threshold (z = 2.00 > 1.28), AND explaining that the mean alone does not account for spread or relative standing, so two students with the same mean could have very different distributions of scores, making z-scores or percentiles necessary for fair comparison."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates both z-scores using z = (x − μ) / σ: Amara z = 2.00 and Diego z = −1.00, with work shown.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "z-score formula",
          "z = (x minus mu) divided by sigma",
          "standardized score",
          "z = 2.00",
          "z = -1.00",
          "Amara z-score equals 2",
          "Diego z-score equals negative 1",
          "population mean 74",
          "standard deviation 8",
          "standardization formula",
          "(90 minus 74) divided by 8",
          "(66 minus 74) divided by 8",
          "number of standard deviations from mean",
          "negative z-score below mean"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly identifies Amara at the 97.7th percentile and Diego at the 15.9th percentile, with contextual interpretations referencing the proportion of students scored below each.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "97.7th percentile",
          "15.9th percentile",
          "Amara at 97.7 percent",
          "Diego at 15.9 percent",
          "scored higher than approximately 97.7 percent of students",
          "proportion of students scoring below",
          "percentile rank",
          "context of 11th-grade assessment",
          "97.7 percent of students scored lower than Amara",
          "15.9 percent of students scored lower than Diego",
          "standard normal table lookup",
          "cumulative area under normal curve",
          "relative position in distribution"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly calculates minimum score ≈ 84.24 using x = μ + z·σ with z = 1.28, concludes Amara qualifies, and explains that mean alone ignores spread and relative standing.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "x equals mu plus z times sigma",
          "74 plus 1.28 times 8",
          "minimum score 84.24",
          "cutoff score for academic recognition",
          "Amara qualifies for academic recognition",
          "90th percentile threshold",
          "z = 1.28 cutoff",
          "mean alone is misleading",
          "mean does not account for spread",
          "relative standing requires standard deviation",
          "z-score captures position in distribution",
          "percentile needed for fair comparison",
          "inverse normal calculation"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u2_frq007",
    "subject": "apstats",
    "frqType": "short",
    "title": "Scatterplot Description: Study Hours and Exam Scores",
    "units": [
      2
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A high school statistics teacher recorded the number of hours 20 students spent studying for a final exam and their corresponding exam scores (out of 100). The data were displayed in a scatterplot with hours studied on the horizontal axis (x-axis) and exam score on the vertical axis (y-axis). The scatterplot shows points that rise from left to right in a relatively tight band with no extreme outliers. The points do not curve and appear to follow a straight-line pattern. The hours studied ranged from 1 to 10 hours, and exam scores ranged from 52 to 96.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the direction of the association shown in the scatterplot. Explain what this direction means in context.",
        "rubric": "Earn 1 point for stating that the association is positive and explaining that as hours studied increase, exam scores tend to increase (or higher study time is associated with higher scores)."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Describe the form of the association shown in the scatterplot.",
        "rubric": "Earn 1 point for identifying the form as linear (or approximately linear / straight-line pattern) based on the scatterplot description."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Describe the strength of the association shown in the scatterplot. Justify your answer using the context given.",
        "rubric": "Earn 1 point for describing the strength as strong (or moderately strong) and justifying by referencing that the points are tightly clustered around a line (or little scatter around the linear pattern)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies the direction as positive and explains in context that higher hours studied is associated with higher exam scores.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "positive",
          "positive association",
          "positive direction",
          "as hours studied increase exam scores increase",
          "hours studied increase",
          "exam scores tend to increase",
          "upward trend",
          "rises from left to right",
          "higher study time higher score",
          "positively associated"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly identifies the form of the association as linear or approximately linear.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "linear",
          "approximately linear",
          "straight line",
          "straight-line pattern",
          "linear form",
          "linear association",
          "does not curve",
          "no curvature",
          "linear trend",
          "follows a line"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly identifies the strength as strong (or moderately strong) and references the tightness of the points around the linear pattern as justification.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "strong",
          "moderately strong",
          "tightly clustered",
          "tight band",
          "little scatter",
          "close to the line",
          "points cluster around the line",
          "small spread around the line",
          "strong linear association",
          "low variability around the pattern"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u2_frq008",
    "subject": "apstats",
    "frqType": "short",
    "title": "Residuals and Least Squares Regression: Car Speed and Braking Distance",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A traffic safety researcher collected data on the speed (in mph) of 15 cars and the distance (in feet) required to come to a complete stop after braking. The least squares regression line for predicting braking distance from speed is given by: ŷ = −14.2 + 3.8x, where x is speed in mph and ŷ is the predicted braking distance in feet. One car in the dataset was traveling at 30 mph and had an actual braking distance of 105 feet.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the predicted braking distance for a car traveling at 30 mph using the least squares regression line.",
        "rubric": "Earn 1 point for correctly substituting x = 30 into the equation and computing ŷ = −14.2 + 3.8(30) = 99.8 feet."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the residual for the car traveling at 30 mph with an actual braking distance of 105 feet.",
        "rubric": "Earn 1 point for correctly computing the residual as observed minus predicted: 105 − 99.8 = 5.2 feet."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain what the residual you calculated in part (b) tells us about how the regression line performed for this particular car.",
        "rubric": "Earn 1 point for explaining that the positive residual means the actual braking distance was greater than (or above) the predicted braking distance - the regression line underestimated the braking distance for this car."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly substitutes x = 30 into ŷ = −14.2 + 3.8x and obtains ŷ = 99.8 feet.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "99.8",
          "99.8 feet",
          "ŷ = 99.8",
          "predicted braking distance",
          "least squares regression line",
          "substitute x = 30",
          "3.8 times 30",
          "−14.2 + 3.8(30)",
          "plug in 30",
          "predicted value is 99.8"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly computes the residual as observed minus predicted: 105 − 99.8 = 5.2 feet.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "5.2",
          "5.2 feet",
          "residual",
          "observed minus predicted",
          "actual minus predicted",
          "105 − 99.8",
          "positive residual",
          "residual equals 5.2",
          "residual formula",
          "actual braking distance minus predicted braking distance"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student explains that the positive residual indicates the actual braking distance was greater than predicted, meaning the regression line underestimated braking distance for this car.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "underestimated",
          "underpredicted",
          "actual is greater than predicted",
          "above the regression line",
          "positive residual means",
          "greater than predicted",
          "regression line underestimated",
          "actual braking distance exceeded predicted",
          "overshot the prediction",
          "model underestimated stopping distance"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u2_frq009",
    "subject": "apstats",
    "frqType": "short",
    "title": "Residual Analysis for Fuel Efficiency Data",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A researcher collected data on 24 passenger vehicles, recording each vehicle's weight (in thousands of pounds) and its highway fuel efficiency (in miles per gallon, mpg). A least-squares regression line was fit to the data, yielding the equation ŷ = 48.7 − 6.2x, where x is vehicle weight and ŷ is predicted mpg. The coefficient of determination is r² = 0.81. After fitting the model, the researcher examined a residual plot (residuals vs. fitted values). The residual plot shows a clear curved, U-shaped pattern rather than a random scatter around zero.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Interpret",
        "question": "Interpret the value of the slope, −6.2, in the context of this study.",
        "rubric": "Student earns 1 point for correctly interpreting the slope in context: for each additional one thousand pounds of vehicle weight, the predicted highway fuel efficiency decreases by 6.2 miles per gallon, on average."
      },
      {
        "label": "b",
        "command": "Interpret",
        "question": "Interpret the value of r² = 0.81 in the context of this study.",
        "rubric": "Student earns 1 point for correctly stating that approximately 81% of the variability in highway fuel efficiency (mpg) is explained by the least-squares regression line with vehicle weight (or by the linear relationship with vehicle weight)."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Based on the residual plot, what does the U-shaped pattern suggest about the appropriateness of the linear model? Explain your reasoning.",
        "rubric": "Student earns 1 point for stating that the curved or U-shaped pattern in the residual plot indicates that the linear model is NOT appropriate, and explaining that a nonlinear (curved) model would better fit the data because a random scatter around zero is required to confirm linearity."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly interprets the slope in context: predicted mpg decreases by 6.2 for each additional 1,000 lbs of weight, on average.",
        "partLabel": "a",
        "skill": "interpret",
        "keywords": [
          "slope",
          "for each additional",
          "one thousand pounds",
          "predicted mpg decreases",
          "6.2 miles per gallon",
          "on average",
          "weight increases",
          "predicted fuel efficiency",
          "decrease by 6.2",
          "least-squares slope",
          "negative slope",
          "predicted highway mpg",
          "1000 lb increase"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly interprets r² = 0.81: 81% of the variability in mpg is accounted for by the linear relationship with vehicle weight.",
        "partLabel": "b",
        "skill": "interpret",
        "keywords": [
          "r squared",
          "coefficient of determination",
          "81 percent",
          "variability in mpg",
          "explained by",
          "linear relationship",
          "vehicle weight",
          "accounted for",
          "0.81",
          "variation in fuel efficiency",
          "variability in highway fuel efficiency",
          "explained by the model",
          "proportion of variation"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "States that the linear model is not appropriate because the U-shaped/curved pattern in the residual plot indicates a nonlinear relationship.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "not appropriate",
          "linear model inappropriate",
          "curved pattern",
          "U-shaped pattern",
          "residual plot",
          "nonlinear relationship",
          "random scatter around zero",
          "systematic pattern",
          "linear fit is inadequate",
          "nonlinear model",
          "curvature in residuals",
          "violates linearity condition",
          "pattern in residuals"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u2_frq010",
    "subject": "apstats",
    "frqType": "short",
    "title": "Influential Points in Sleep and GPA Study",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A high school counselor surveyed 30 students about their average nightly sleep (in hours) and their current GPA (on a 4.0 scale). A scatterplot of the data shows a moderate, positive, linear association with one clear outlier: a student who sleeps only 3 hours per night but has a GPA of 3.9. The correlation coefficient for all 30 students is r = 0.61. When the outlier is removed, the correlation coefficient increases to r = 0.79. The least-squares regression line for all 30 students is ŷ = 0.48 + 0.31x, where x is hours of sleep and ŷ is predicted GPA.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the association between nightly sleep and GPA as shown in the scatterplot, referencing direction, strength, and form.",
        "rubric": "Student earns 1 point for correctly describing all three features in context: the association is positive in direction, moderate in strength, and linear in form (all three must be addressed for full credit)."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Explain why the student who sleeps 3 hours but has a GPA of 3.9 could be considered an influential point.",
        "rubric": "Student earns 1 point for explaining that removing this point substantially changes the correlation coefficient (from 0.61 to 0.79) and/or would noticeably change the slope or position of the least-squares regression line, which is the defining characteristic of an influential point."
      },
      {
        "label": "c",
        "command": "Predict",
        "question": "Use the least-squares regression line to predict the GPA of a student who sleeps 7 hours per night. Then explain one reason why using this equation to predict the GPA of a student who sleeps 14 hours per night would be problematic.",
        "rubric": "Student earns 1 point for correctly calculating ŷ = 0.48 + 0.31(7) = 2.65 AND identifying that predicting at 14 hours is extrapolation because 14 hours is outside the range of the observed data, making the prediction unreliable."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Describes direction as positive, strength as moderate, and form as linear - all three components addressed in context.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "positive direction",
          "moderate strength",
          "linear form",
          "positive association",
          "moderate linear",
          "direction strength form",
          "as sleep increases GPA increases",
          "moderately strong positive",
          "scatterplot association",
          "positive linear relationship",
          "moderate positive linear",
          "all three components"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Explains that the point is influential because removing it substantially changes the correlation or the least-squares regression line.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "influential point",
          "removing the point",
          "substantially changes the correlation",
          "correlation increases from 0.61 to 0.79",
          "regression line changes",
          "slope changes noticeably",
          "outlier in x direction",
          "large effect on regression",
          "influential observation",
          "changes the least-squares line",
          "low x value high y value",
          "disproportionate influence"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Calculates predicted GPA = 2.65 correctly AND identifies predicting at 14 hours as extrapolation outside the data range.",
        "partLabel": "c",
        "skill": "predict",
        "keywords": [
          "2.65",
          "0.48 + 0.31(7)",
          "extrapolation",
          "outside the range of observed data",
          "14 hours outside data range",
          "observed data range",
          "unreliable prediction",
          "beyond the observed data",
          "extrapolating beyond data",
          "not appropriate to predict at 14 hours",
          "predicted GPA equals 2.65",
          "plug in 7 for x"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u2_frq011",
    "subject": "apstats",
    "frqType": "short",
    "title": "Residual Plots and Model Appropriateness for Sleep and GPA",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school psychologist collected data from 87 high school students on average nightly sleep duration (in hours) and cumulative GPA (on a 4.0 scale). She fit a least-squares regression line to predict GPA from hours of sleep. The equation of the least-squares regression line is: ŷ = 0.41 + 0.31x, where x is hours of sleep and ŷ is predicted GPA. The residual plot (residuals vs. fitted values) shows a clear curved pattern, with negative residuals at low and high fitted values and positive residuals in the middle. The coefficient of determination is r² = 0.38. One student who sleeps 11.5 hours per night has a GPA of 1.9, which is notably far from the rest of the data in both the x-direction and the y-direction.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "The psychologist concludes that the least-squares regression line is an appropriate model for these data. Explain why the residual plot provides evidence AGAINST this conclusion.",
        "rubric": "Earns 1 point for correctly identifying that the curved pattern in the residual plot indicates the linear model is not appropriate, and explaining that a non-random or systematic pattern in residuals means the linear model does not adequately capture the relationship between sleep and GPA."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Identify the student who sleeps 11.5 hours per night as a potential influential point. Explain what makes this student's data point influential in the context of least-squares regression.",
        "rubric": "Earns 1 point for correctly explaining that this point is influential because it is an outlier in the x-direction (extreme x-value, high leverage), and that removing or including it would substantially change the slope, intercept, or overall fit of the least-squares regression line."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The coefficient of determination for this regression is r² = 0.38. Interpret this value in the context of this study, and explain what it suggests about the usefulness of hours of sleep alone for predicting GPA.",
        "rubric": "Earns 1 point for correctly stating that approximately 38% of the variability in GPA is explained by the least-squares regression on hours of sleep, and concluding that hours of sleep alone is not a strong predictor of GPA because a large percentage (62%) of variability in GPA remains unexplained."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student explains that the curved, non-random, or systematic pattern in the residual plot indicates the linear model is not appropriate for these data.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "curved pattern",
          "non-random pattern",
          "systematic pattern",
          "residual plot",
          "linear model not appropriate",
          "nonlinear relationship",
          "residuals not randomly scattered",
          "pattern in residuals",
          "violates linearity condition",
          "linear fit inadequate",
          "U-shaped residuals",
          "negative residuals at extremes",
          "positive residuals in middle"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student identifies the point as influential due to its extreme x-value (high leverage) and explains that it would substantially affect the slope or regression line if removed.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "influential point",
          "outlier in x-direction",
          "high leverage",
          "extreme x-value",
          "substantially changes slope",
          "pulls the regression line",
          "changes the least-squares fit",
          "removing the point changes the line",
          "leverage point",
          "affects least-squares regression line",
          "11.5 hours extreme",
          "outlier in both directions",
          "changes intercept"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly interprets r² = 0.38 as the proportion of variability in GPA explained by the regression on sleep hours, and notes that sleep hours alone is a weak predictor since most variability is unexplained.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "38% of the variability in GPA",
          "variability in GPA explained by sleep",
          "coefficient of determination",
          "r-squared equals 0.38",
          "r² = 0.38",
          "62% of variability unexplained",
          "remaining variability not accounted for",
          "weak predictor of GPA",
          "hours of sleep alone insufficient",
          "not a strong linear predictor",
          "proportion of variation explained",
          "other variables needed"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u2_frq012",
    "subject": "apstats",
    "frqType": "short",
    "title": "Extrapolation and Least-Squares Regression for Fuel Efficiency",
    "units": [
      2
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "An automotive engineer collected data on vehicle weight (in thousands of pounds) and fuel efficiency (in miles per gallon, MPG) for a sample of 45 sedans currently in production. The weights in the dataset range from 2.5 to 4.2 thousand pounds. The least-squares regression line for predicting fuel efficiency from vehicle weight is: ŷ = 48.3 − 6.7x, where x is weight in thousands of pounds and ŷ is predicted MPG. The correlation coefficient is r = −0.89. The engineer wants to use this model to predict the fuel efficiency of a newly designed electric vehicle prototype that weighs 5.8 thousand pounds.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the association between vehicle weight and fuel efficiency as indicated by the correlation coefficient r = −0.89 and the least-squares regression equation. Address direction, strength, and what the slope value means in context.",
        "rubric": "Earns 1 point for correctly describing the association as strong, negative, and linear, and for interpreting the slope in context: for each additional one thousand pounds of vehicle weight, the predicted fuel efficiency decreases by approximately 6.7 miles per gallon."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "The engineer uses the regression equation to predict the fuel efficiency of the 5.8-thousand-pound prototype. Calculate the predicted MPG and explain why this prediction is problematic.",
        "rubric": "Earns 1 point for correctly computing ŷ = 48.3 − 6.7(5.8) = 48.3 − 38.86 = 9.44 MPG, and for identifying that 5.8 thousand pounds is outside the range of the observed data (2.5 to 4.2 thousand pounds), making this an extrapolation and therefore an unreliable prediction."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A colleague argues that because r = −0.89, the least-squares regression line explains nearly all of the variability in fuel efficiency, making the model highly reliable for any prediction. Identify the two flaws in this reasoning.",
        "rubric": "Earns 1 point for identifying both flaws: (1) r² = (−0.89)² = 0.7921, meaning approximately 79.2% - not nearly all - of the variability in MPG is explained by weight, leaving about 20.8% unexplained; and (2) even a high r² does not make extrapolation (predicting outside the data range) reliable, because the linear relationship may not hold beyond the observed data values."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student describes the association as strong and negative, references r = −0.89, and correctly interprets the slope: for each additional thousand pounds, predicted MPG decreases by 6.7.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "strong negative association",
          "negative direction",
          "strong linear relationship",
          "r = -0.89",
          "slope of -6.7",
          "predicted MPG decreases by 6.7",
          "for each additional thousand pounds",
          "predicted fuel efficiency decreases",
          "negative correlation",
          "direction strength form",
          "heavier vehicles less fuel efficient",
          "linear association between weight and MPG",
          "slope interpretation in context"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly calculates predicted MPG as 9.44 and identifies the prediction as extrapolation because 5.8 thousand pounds is outside the observed data range of 2.5 to 4.2 thousand pounds.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "predicted MPG of 9.44",
          "48.3 minus 6.7 times 5.8",
          "extrapolation",
          "outside the data range",
          "beyond observed x-values",
          "2.5 to 4.2 thousand pounds",
          "unreliable prediction",
          "5.8 not within the range",
          "predicting outside observed data",
          "extrapolating beyond data",
          "linear pattern may not extend",
          "9.44 miles per gallon",
          "cannot trust regression beyond range"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student identifies that r² ≈ 0.792 means only about 79% of variability is explained (not nearly all), and that a high r² does not validate predictions made through extrapolation outside the data range.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "r-squared equals 0.7921",
          "r² = 0.7921",
          "79.2% of variability in MPG explained",
          "20.8% of variability unexplained",
          "not nearly all variability explained",
          "high r-squared does not justify extrapolation",
          "extrapolation remains unreliable",
          "linear relationship may not hold outside range",
          "outside observed data range",
          "coefficient of determination",
          "r is not r-squared",
          "confusing r with r-squared",
          "two distinct flaws in reasoning"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u3_frq013",
    "subject": "apstats",
    "frqType": "short",
    "title": "Sampling Methods for a School Survey",
    "units": [
      3
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A principal at a large high school wants to survey students about their satisfaction with the school cafeteria. The school has 1,200 students divided equally across four grade levels: 9th, 10th, 11th, and 12th grade, with 300 students in each grade. The principal is considering two sampling methods. Method 1: Randomly select 60 students from the entire student body. Method 2: Randomly select 15 students from each of the four grade levels.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify the sampling method used in Method 1 and the sampling method used in Method 2.",
        "rubric": "Earns 1 point for correctly identifying Method 1 as simple random sampling (SRS) and Method 2 as stratified random sampling, with grade level as the strata."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Explain one statistical advantage of using Method 2 over Method 1 for this survey.",
        "rubric": "Earns 1 point for explaining that stratified random sampling ensures representation from each grade level, reducing variability and producing more precise estimates than simple random sampling, especially if satisfaction differs by grade."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Describe how the principal could use a different sampling method - systematic random sampling - to select 60 students from the 1,200 students. Be specific.",
        "rubric": "Earns 1 point for describing: number all students 1 to 1200, calculate interval k = 1200/60 = 20, randomly select a starting number between 1 and 20, then select every 20th student after that."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies Method 1 as simple random sampling and Method 2 as stratified random sampling with grade level as the stratum.",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "simple random sample",
          "SRS",
          "stratified random sample",
          "stratified sampling",
          "strata",
          "grade level",
          "stratum",
          "randomly selected from entire population",
          "each grade separately sampled",
          "proportional allocation",
          "equal-sized strata",
          "sampling frame"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Explains that stratified sampling guarantees representation from each grade and reduces variability or produces more precise estimates when groups differ in their responses.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "representation",
          "represents each grade",
          "reduces variability",
          "more precise estimates",
          "less sampling variability",
          "each stratum represented",
          "satisfaction differs by grade",
          "guaranteed representation",
          "homogeneous within strata",
          "between-group differences",
          "smaller standard error",
          "precision of estimate"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Describes systematic random sampling by numbering students, computing interval of 20, selecting a random start between 1 and 20, and selecting every 20th student.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "systematic random sampling",
          "number the students 1 to 1200",
          "sampling interval",
          "every 20th student",
          "k = 20",
          "random starting point",
          "randomly select start between 1 and 20",
          "1200 divided by 60",
          "select every kth element",
          "fixed interval",
          "ordered list",
          "periodic selection"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u3_frq014",
    "subject": "apstats",
    "frqType": "short",
    "title": "Randomization in a Sleep Study Experiment",
    "units": [
      3
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A researcher wants to investigate whether listening to white noise for 30 minutes before bed improves sleep quality in college students. She recruits 40 college students for a study. Half of the students will listen to white noise for 30 minutes before bed each night for two weeks, and the other half will follow their normal bedtime routine with no white noise. At the end of two weeks, each student's sleep quality is measured using a standardized sleep quality score.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Explain why it is important to randomly assign the 40 students to the two treatment groups rather than allowing students to choose which group they join.",
        "rubric": "Earns 1 point for explaining that randomization helps create roughly equivalent groups by distributing potential confounding variables (such as stress levels, existing sleep habits, or screen time) evenly across both groups, allowing the researcher to attribute differences in sleep quality to the white noise treatment."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Describe how the researcher could use a chance process to randomly assign the 40 students to the two groups of 20.",
        "rubric": "Earns 1 point for describing a valid chance process: for example, write each student's name on a slip of paper, place all slips in a hat, draw 20 names - those students are assigned to the white noise group and the remaining 20 are in the control group. Alternatively, number students 1-40, use a random number generator or table to select 20 unique numbers, and assign those students to the treatment group."
      },
      {
        "label": "c",
        "command": "Identify",
        "question": "Identify the control group in this experiment and explain its purpose.",
        "rubric": "Earns 1 point for identifying the group that follows their normal bedtime routine with no white noise as the control group, and explaining that the control group provides a baseline for comparison so the researcher can determine whether any change in sleep quality is due to the white noise treatment and not other factors."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Explains that random assignment distributes confounding variables evenly across groups so that differences in the response variable can be attributed to the treatment.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "random assignment",
          "randomization",
          "confounding variables",
          "evenly distributed across groups",
          "equivalent treatment groups",
          "causal conclusion",
          "cause-and-effect relationship",
          "lurking variables",
          "existing sleep habits",
          "self-selection bias",
          "attribute differences to treatment",
          "controls for extraneous variables"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Describes a valid chance process for assigning 40 students to two groups of 20, such as drawing names, using a random number table, or using a random number generator to select 20 students for the treatment group.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "random number generator",
          "random number table",
          "draw names from a hat",
          "slips of paper",
          "number students 1 to 40",
          "select 20 unique numbers",
          "chance process",
          "randomly assign to treatment",
          "assign remaining students to control",
          "sampling without replacement",
          "each student equally likely",
          "two equal groups"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies the no-white-noise group as the control group and explains it serves as a baseline for comparing sleep quality scores.",
        "partLabel": "c",
        "skill": "identify",
        "keywords": [
          "control group",
          "no white noise",
          "normal bedtime routine",
          "baseline comparison",
          "comparison group",
          "basis for comparison",
          "untreated group",
          "isolate the effect of white noise",
          "determine whether treatment caused improvement",
          "benchmark sleep quality score",
          "experimental vs control",
          "absence of treatment"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u3_frq015",
    "subject": "apstats",
    "frqType": "short",
    "title": "Blocking in a Sleep Study Experiment",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A researcher wants to investigate whether listening to white noise before bed improves sleep quality in adults. She recruits 60 volunteers: 30 who regularly report poor sleep and 30 who regularly report adequate sleep. Within each sleep-quality group, participants are randomly assigned to either listen to white noise for 20 minutes before bed or to follow their normal bedtime routine for 4 weeks. Sleep quality is measured using a validated 10-point scale at the end of the study.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Explain why the researcher chose to separate participants into poor sleepers and adequate sleepers before randomly assigning treatments, rather than randomly assigning all 60 participants at once.",
        "rubric": "Earns 1 point for explaining that sleep quality groups are used as blocks to reduce variability, because pre-existing sleep quality is a variable that could affect the response and might be unevenly distributed between treatment groups by chance, making blocking a strategy to control for this source of variation."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Describe the role of the control group in this experiment and identify which group serves as the control.",
        "rubric": "Earns 1 point for identifying the group following their normal bedtime routine as the control group and explaining that it provides a baseline for comparison so the researcher can determine whether any difference in sleep quality scores is attributable to the white noise treatment rather than other factors."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A classmate suggests that this study should be made double-blind. Explain what double-blind means in the context of this experiment and describe one challenge in implementing it here.",
        "rubric": "Earns 1 point for correctly defining double-blind as neither the participants nor those evaluating sleep quality scores knowing which treatment each participant received, AND identifying a realistic challenge such as participants knowing whether they are listening to white noise (cannot be blinded to their own treatment), making true double-blinding difficult or impossible in this context."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student explains that sleep-quality groups serve as blocks to control for variability in the response variable caused by pre-existing sleep quality differences.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "block",
          "blocking",
          "blocks",
          "reduce variability",
          "control variability",
          "pre-existing sleep quality",
          "lurking variable",
          "confound",
          "homogeneous groups within blocks",
          "account for variation",
          "blocked design",
          "nuisance variable",
          "block by sleep quality",
          "similar experimental units",
          "uneven distribution by chance",
          "isolate treatment effect",
          "randomized block design"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student identifies the normal bedtime routine group as the control group and explains its purpose as a baseline for comparison.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "control group",
          "normal bedtime routine",
          "baseline",
          "comparison group",
          "no treatment",
          "benchmark",
          "isolate the effect",
          "treatment effect",
          "basis for comparison",
          "untreated group",
          "standard condition",
          "absence of treatment",
          "reference group",
          "distinguish treatment differences"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student defines double-blind as both participants and evaluators being unaware of treatment assignment, and identifies a valid challenge such as participants knowing their own treatment.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "double-blind",
          "double blind",
          "participants unaware",
          "evaluators unaware",
          "assessors unaware",
          "neither knows treatment",
          "cannot be blinded",
          "participants know their treatment",
          "awareness of treatment assignment",
          "placebo effect",
          "bias in self-reporting",
          "challenge to blinding",
          "experimenter bias",
          "knowledge of treatment condition",
          "impossible to conceal treatment"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u3_frq016",
    "subject": "apstats",
    "frqType": "short",
    "title": "Sampling Methods and Bias in a School Survey",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A high school principal wants to estimate the proportion of students who support extending the lunch period by 10 minutes. The school has 1,200 students across four grade levels: 9th, 10th, 11th, and 12th, with 300 students in each grade. A student council member proposes surveying every student who happens to be in the library during a free period on Tuesday. The principal instead decides to randomly select 75 students from each grade level and survey them.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Identify the sampling method the principal uses and explain one advantage it has over the student council member's proposed method.",
        "rubric": "Earns 1 point for correctly identifying the principal's method as stratified random sampling (stratifying by grade level) and explaining an advantage such as ensuring each grade level is represented proportionally or reducing sampling variability compared to the convenience sample proposed by the student council member."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Identify the type of bias present in the student council member's proposed sampling method and explain how it could affect the survey results.",
        "rubric": "Earns 1 point for identifying the method as a convenience sample that introduces voluntary response bias or convenience bias, and explaining that students in the library during a free period may have systematically different opinions about lunch period length than the broader student population, causing the results to over- or underestimate the true proportion of supporters."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Even with the principal's stratified random sample, a classmate argues that response bias could still be a problem. Describe one specific way response bias might occur in this survey.",
        "rubric": "Earns 1 point for describing a specific, plausible mechanism of response bias, such as students feeling social pressure to agree with extending lunch (acquiescence bias), students answering differently if the principal or a teacher administers the survey, or the wording of the question leading students toward a particular answer (leading question), and connecting it to how responses may not reflect students' true opinions."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies stratified random sampling and provides a valid advantage over the convenience sample.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "stratified random sample",
          "stratified sampling",
          "strata",
          "grade level strata",
          "each grade represented",
          "proportional representation",
          "reduces sampling variability",
          "better representation of population",
          "random selection within strata",
          "compared to convenience sample",
          "equal stratum size",
          "ensures all grades included",
          "more precise estimate",
          "non-overlapping subgroups"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student identifies convenience sampling bias or voluntary response bias and explains its directional or systematic effect on results.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "convenience sample",
          "convenience bias",
          "voluntary response bias",
          "undercoverage",
          "not representative of population",
          "systematically different opinions",
          "library students unrepresentative",
          "biased estimate",
          "overestimate true proportion",
          "underestimate true proportion",
          "non-random selection",
          "sampling bias",
          "excludes certain students",
          "skewed sample",
          "specific subgroup overrepresented"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student describes a specific and plausible mechanism for response bias such as question wording, social pressure, or who administers the survey.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "response bias",
          "leading question",
          "question wording",
          "social desirability bias",
          "acquiescence bias",
          "pressure to agree with authority",
          "interviewer effect",
          "administrator effect",
          "true opinion not reflected",
          "biased responses",
          "wording influences answers",
          "principal administers survey",
          "fear of judgment",
          "students respond dishonestly",
          "sensitive topic bias"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u3_frq017",
    "subject": "apstats",
    "frqType": "short",
    "title": "Blocking and Confounding in a Sleep Study Experiment",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A pharmaceutical company wants to test whether a new melatonin supplement improves sleep quality compared to a placebo. Researchers recruit 120 volunteers: 60 are college students (ages 18-22) and 60 are older adults (ages 60-75). Prior research shows that age strongly influences baseline sleep quality. Researchers randomly assign participants within each age group: 30 from each age group receive the melatonin supplement and 30 from each age group receive an identical-looking sugar pill. Neither the participants nor the researchers measuring sleep quality know which treatment each participant received. Sleep quality is measured using a standardized overnight polysomnography score after 4 weeks.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Explain why age was used as a blocking variable in this experiment rather than simply randomizing all 120 participants to treatments without regard to age.",
        "rubric": "Full credit requires explaining that age is related to the response variable (sleep quality) and that blocking on age reduces variability within treatment groups, allowing researchers to more clearly detect the effect of melatonin by controlling for the confounding influence of age."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Describe the role of the placebo group in this experiment and explain what would be wrong with concluding that melatonin is effective if the placebo group were omitted.",
        "rubric": "Full credit requires identifying that the placebo group serves as a control group to isolate the effect of melatonin, and that without it researchers cannot separate the true drug effect from the placebo effect (psychological improvement due to believing one is receiving treatment), making any causal conclusion invalid."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "This experiment is described as double-blind. Explain specifically what 'double-blind' means in this context and why it is important for the validity of the results.",
        "rubric": "Full credit requires stating that double-blind means both the participants and the researchers measuring sleep quality do not know which treatment (melatonin or placebo) each participant received, and explaining that this prevents participant behavior bias and researcher/evaluator bias from influencing the measured outcomes."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student explains that blocking on age controls for age as a confounding/lurking variable because age is associated with sleep quality, reducing within-group variability and isolating the treatment effect.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "blocking variable",
          "block",
          "confounding variable",
          "lurking variable",
          "age is related to sleep quality",
          "reduce variability",
          "control for age",
          "isolate treatment effect",
          "more precise comparison",
          "nuisance variable",
          "within-block variation",
          "homogeneous groups",
          "age affects baseline sleep",
          "random assignment within blocks",
          "extraneous variable"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student identifies the placebo group as the control group needed to separate the true drug effect from the placebo effect, and explains that omitting it prevents causal conclusions about melatonin's effectiveness.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "placebo effect",
          "control group",
          "psychological improvement",
          "baseline comparison",
          "isolate the effect of melatonin",
          "cannot determine causation",
          "placebo group omitted",
          "sugar pill",
          "confound the results",
          "belief of receiving treatment",
          "no comparison group",
          "cannot attribute improvement to melatonin",
          "expectation effect",
          "treatment vs control",
          "causal inference invalid"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly defines double-blind as both participants and researchers/evaluators being unaware of treatment assignment, and explains it prevents participant behavior bias and researcher measurement/evaluation bias.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "double-blind",
          "participants do not know",
          "researchers do not know",
          "evaluator unaware",
          "prevent bias",
          "participant behavior bias",
          "researcher bias",
          "measurement bias",
          "neither participants nor researchers",
          "treatment assignment unknown",
          "blinding eliminates expectation bias",
          "unbiased measurement",
          "observer effect",
          "masked treatment",
          "placebo group indistinguishable"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u3_frq018",
    "subject": "apstats",
    "frqType": "short",
    "title": "Bias in a Voluntary Response Survey on School Policy",
    "units": [
      3
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A high school principal wants to estimate the proportion of all students in the district who support a new mandatory school uniform policy. The principal posts an online survey link on the school's social media page and collects responses from the 430 students who voluntarily click the link and complete the survey. Of these 430 respondents, 312 say they oppose the uniform policy. A statistics teacher suggests that the survey results are not trustworthy and recommends instead using a stratified random sample of students by grade level (9th-12th) to re-conduct the survey.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Identify the sampling method used by the principal and explain why this method is likely to produce a biased estimate of the proportion of all district students who oppose the uniform policy.",
        "rubric": "Full credit requires identifying the method as voluntary response sampling (or self-selected sample) and explaining that students with strong negative opinions about the policy are more likely to respond, causing the proportion opposing the policy to be overestimated - a specific description of voluntary response bias."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "Explain how stratified random sampling by grade level would improve upon the principal's original sampling method. In your response, describe how the stratified sample would be constructed.",
        "rubric": "Full credit requires explaining that stratified random sampling divides the population into strata (grade levels 9-12) and randomly selects students from each stratum, ensuring all grade levels are represented proportionally or adequately, which reduces sampling variability and eliminates voluntary response bias."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A student argues that because 430 students responded - which is a large sample - the survey results must be accurate. Justify why this argument is incorrect in the context of this survey.",
        "rubric": "Full credit requires explaining that a large sample size does not correct for bias, specifically that voluntary response bias is a systematic error that causes results to consistently miss the true population value regardless of sample size, so a larger biased sample still produces an inaccurate (biased) estimate."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student identifies voluntary response sampling (self-selected sample) and explains that students with strong opinions against the policy are more likely to participate, leading to overestimation of opposition - correctly naming voluntary response bias.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "voluntary response sample",
          "self-selected sample",
          "voluntary response bias",
          "strong opinions more likely to respond",
          "overestimate opposition",
          "not representative",
          "only those who choose to respond",
          "biased estimate",
          "undercoverage of supporters",
          "non-random selection",
          "those with strong feelings respond",
          "systematic overrepresentation",
          "online survey self-selection",
          "not all students equally likely",
          "motivated respondents"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student describes stratified random sampling by dividing students into strata by grade level and randomly selecting from each stratum, explaining this ensures representation across grades and removes voluntary response bias.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "stratified random sample",
          "strata",
          "grade level",
          "randomly select from each stratum",
          "proportional representation",
          "all grades represented",
          "random selection within strata",
          "reduces bias",
          "reduces sampling variability",
          "each subgroup represented",
          "divide population into groups",
          "9th through 12th grade",
          "random sample within each grade",
          "eliminates voluntary response bias",
          "more representative sample"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly argues that large sample size does not eliminate bias, because voluntary response bias is a systematic error that persists regardless of sample size, so the estimate remains inaccurate.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "large sample does not eliminate bias",
          "systematic error",
          "bias not reduced by sample size",
          "consistently misses true population value",
          "voluntary response bias persists",
          "accuracy requires lack of bias",
          "biased sampling method",
          "sample size does not fix bias",
          "larger biased sample still biased",
          "precision vs accuracy distinction",
          "increasing n does not remove systematic error",
          "overestimate persists with more responses",
          "unbiased method required",
          "random sampling needed",
          "repeating flawed method amplifies error"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u4_frq019",
    "subject": "apstats",
    "frqType": "short",
    "title": "Expected Value of a Raffle Ticket",
    "units": [
      4
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school carnival sells raffle tickets for $2 each. There is 1 grand prize of $50, 2 second prizes of $10 each, and 5 third prizes of $4 each. A total of 100 tickets are sold. Let X represent the net winnings (prize money minus ticket cost) for a randomly selected ticket buyer.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "List all possible values of the discrete random variable X (net winnings) and their associated probabilities.",
        "rubric": "Student correctly identifies all four possible values of X: $48 (grand prize: $50 − $2), $8 (second prize: $10 − $2), $2 (third prize: $4 − $2), and −$2 (no prize: $0 − $2), with probabilities 1/100, 2/100, 5/100, and 92/100 respectively."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the expected value E(X) of the net winnings for a randomly selected ticket buyer. Show your work.",
        "rubric": "Student correctly applies the expected value formula E(X) = Σ[x · P(X = x)] and arrives at E(X) = 48(1/100) + 8(2/100) + 2(5/100) + (−2)(92/100) = 0.48 + 0.16 + 0.10 − 1.84 = −$1.10."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Interpret the expected value you calculated in part (b) in the context of this problem.",
        "rubric": "Student correctly interprets the expected value in context, stating that if a large number of tickets are purchased, the average net winnings per ticket will be approximately −$1.10, meaning a ticket buyer loses about $1.10 per ticket on average in the long run."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies all four values of X (48, 8, 2, −2) and assigns correct probabilities (1/100, 2/100, 5/100, 92/100).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "discrete random variable",
          "net winnings",
          "X = 48",
          "X = 8",
          "X = 2",
          "X = -2",
          "probability distribution",
          "1/100",
          "2/100",
          "5/100",
          "92/100",
          "prize minus ticket cost",
          "prize minus cost",
          "no prize",
          "sample space"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies E(X) = Σ[x · P(X = x)] and obtains E(X) = −$1.10.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "E(X)",
          "expected value",
          "sum of x times P(X)",
          "weighted average",
          "-1.10",
          "Σ x P(X = x)",
          "expected value formula",
          "multiply each value by its probability",
          "0.48",
          "1.84",
          "net loss",
          "probability-weighted sum"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly interprets E(X) = −$1.10 in context: on average, a ticket buyer loses $1.10 per ticket over many repetitions.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "on average",
          "loses $1.10",
          "long run average",
          "average net winnings",
          "per ticket",
          "many tickets",
          "long run",
          "average loss",
          "interpret expected value",
          "in context",
          "law of large numbers",
          "repeated purchases",
          "average outcome"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u4_frq020",
    "subject": "apstats",
    "frqType": "short",
    "title": "Binomial Distribution and Free-Throw Shooting",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A high school basketball player makes 70% of her free-throw attempts. During a practice session, she attempts 8 free throws. Assume each attempt is independent and the probability of making any single free throw remains 0.70. Let X = the number of free throws she makes out of the 8 attempts.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "Justify why X can be modeled with a binomial distribution by verifying all required conditions.",
        "rubric": "Student verifies all four binomial conditions: (1) fixed number of trials n = 8, (2) each trial has two outcomes (make or miss), (3) probability of success p = 0.70 is constant for each trial, and (4) trials are independent of one another."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the probability that she makes exactly 6 free throws. Show your work.",
        "rubric": "Student correctly uses the binomial probability formula P(X = k) = C(n,k) · p^k · (1−p)^(n−k) with n = 8, k = 6, p = 0.70, obtaining P(X = 6) = C(8,6) · (0.70)^6 · (0.30)^2 = 28 · 0.117649 · 0.09 ≈ 0.2965."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the mean and standard deviation of X and interpret the mean in the context of this problem.",
        "rubric": "Student correctly computes mean μ = np = 8(0.70) = 5.6 and standard deviation σ = √(np(1−p)) = √(8 · 0.70 · 0.30) = √1.68 ≈ 1.30, and interprets the mean as: over many sets of 8 free-throw attempts, she is expected to make an average of 5.6 free throws per set."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student verifies all four binomial conditions: fixed trials (n = 8), two outcomes, constant probability (p = 0.70), and independence.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "fixed number of trials",
          "n = 8",
          "two outcomes",
          "success or failure",
          "make or miss",
          "constant probability",
          "p = 0.70",
          "independent trials",
          "independence",
          "binomial conditions",
          "BINS",
          "binary outcomes",
          "same probability each trial"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies binomial probability formula with n = 8, k = 6, p = 0.70 to get P(X = 6) ≈ 0.2965.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "binomial probability formula",
          "C(8,6)",
          "0.70^6",
          "0.30^2",
          "P(X = 6)",
          "0.2965",
          "28",
          "combination",
          "n choose k",
          "binompdf",
          "binomcdf",
          "exactly 6",
          "0.117649",
          "0.09"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly computes μ = np = 5.6 and σ = √(np(1−p)) ≈ 1.30, with contextual interpretation of the mean.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "mean",
          "mu = np",
          "5.6",
          "standard deviation",
          "sqrt(np(1-p))",
          "1.30",
          "expected number of free throws",
          "on average",
          "free throws made",
          "interpret mean",
          "1.68",
          "np(1-p)",
          "long run average",
          "per set of 8 attempts"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u4_frq021",
    "subject": "apstats",
    "frqType": "short",
    "title": "Expected Value and Variance of a Raffle Ticket",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school fundraiser sells 500 raffle tickets at $5 each. One ticket is drawn at random to win a $300 prize, one ticket is drawn to win a $100 prize, and one ticket is drawn to win a $50 prize. The remaining 497 tickets win nothing. Let X represent the net gain (prize amount minus ticket cost) for a randomly selected ticket purchaser. The possible values of X are $295, $95, $45, and -$5.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the expected value of X, the net gain for a randomly selected ticket purchaser. Show your work.",
        "rubric": "Student correctly computes E(X) = 295(1/500) + 95(1/500) + 45(1/500) + (-5)(497/500) = (295 + 95 + 45 - 2485)/500 = -2050/500 = -$4.10. Full credit requires correct probability weights and correct arithmetic."
      },
      {
        "label": "b",
        "command": "Interpret",
        "question": "Interpret the expected value you calculated in part (a) in the context of this raffle.",
        "rubric": "Student interprets E(X) in context: if a very large number of tickets are purchased, the average net gain per ticket purchaser would be approximately -$4.10 (a loss of $4.10). Must reference 'average' or 'long-run average' and the context of the raffle or ticket purchases."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the variance of X. Show your work.",
        "rubric": "Student correctly computes Var(X) = (295-(-4.10))^2(1/500) + (95-(-4.10))^2(1/500) + (45-(-4.10))^2(1/500) + (-5-(-4.10))^2(497/500). Numerical answer is approximately Var(X) ≈ 234.09 + 19.64 + 4.82 + 0.80 ≈ 259.35 (dollars squared). Full credit requires use of correct formula Var(X) = Σ(x - μ)^2 · P(x) with correct values."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates E(X) = -$4.10 using E(X) = Σ x·P(x) with correct values of X and corresponding probabilities (1/500, 1/500, 1/500, 497/500).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "expected value",
          "E(X)",
          "mean of X",
          "weighted average",
          "Σ x P(x)",
          "1/500",
          "497/500",
          "-4.10",
          "net gain",
          "probability distribution",
          "discrete random variable",
          "probability weight",
          "multiply and sum",
          "loss of $4.10",
          "correct probabilities"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Interprets E(X) as the long-run average net gain per ticket purchaser in the context of the raffle, correctly referencing the negative value as a loss on average.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "long-run average",
          "average net gain",
          "on average",
          "expected loss",
          "lose $4.10 on average",
          "over many tickets",
          "average outcome",
          "in the long run",
          "per ticket",
          "raffle",
          "repeated purchases",
          "average per purchaser",
          "negative expected value",
          "average loss",
          "typical outcome"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly calculates Var(X) = Σ(x - μ)^2 · P(x) using μ = -4.10 and the four outcomes with correct probabilities, arriving at approximately 259.35 dollars squared.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "variance",
          "Var(X)",
          "σ²",
          "Σ(x - μ)² P(x)",
          "squared deviation",
          "259.35",
          "dollars squared",
          "subtract mean",
          "square the deviation",
          "probability weighted",
          "spread of distribution",
          "deviation from mean",
          "four terms",
          "correct formula",
          "multiply squared deviation by probability"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u4_frq022",
    "subject": "apstats",
    "frqType": "short",
    "title": "Binomial Distribution and Free-Throw Shooting",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A college basketball player makes 72% of her free-throw attempts. During a particular game, she is fouled and attempts 8 free throws. Assume that each free-throw attempt is independent of the others and that the probability of making any single free throw is 0.72. Let X represent the number of free throws she makes out of 8 attempts.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "Justify why X can be modeled as a binomial random variable by verifying all required conditions.",
        "rubric": "Student must verify all four BINS conditions: (1) Binary outcomes - each free throw is either made or missed; (2) Independent trials - each free throw attempt is independent; (3) fixed Number of trials - n = 8; (4) Same probability of success - p = 0.72 for each attempt. All four conditions must be stated and connected to context for full credit."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the probability that she makes exactly 6 of her 8 free throws. Show your work.",
        "rubric": "Student correctly applies the binomial probability formula P(X = 6) = C(8,6) · (0.72)^6 · (0.28)^2. C(8,6) = 28, (0.72)^6 ≈ 0.1395, (0.28)^2 = 0.0784. P(X = 6) ≈ 28 · 0.1395 · 0.0784 ≈ 0.3058. Accept answers in the range 0.305 to 0.306."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the mean and standard deviation of X, and interpret the mean in context.",
        "rubric": "Student correctly computes μ = np = 8(0.72) = 5.76 free throws and σ = √(np(1-p)) = √(8 · 0.72 · 0.28) = √1.6128 ≈ 1.27 free throws. Interpretation must state that in repeated sets of 8 free throws, she would make an average of 5.76 free throws per set. Both formulas must be used correctly and the mean must be interpreted in context."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student explicitly verifies all four BINS conditions (Binary, Independent, fixed Number of trials, Same probability) connected to the free-throw context.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "BINS",
          "binary outcomes",
          "independent trials",
          "independence",
          "fixed number of trials",
          "n = 8",
          "constant probability",
          "p = 0.72",
          "success or failure",
          "binomial conditions",
          "made or missed",
          "each attempt independent",
          "two possible outcomes",
          "fixed n",
          "same p each trial"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies binomial probability formula P(X = k) = C(n,k) p^k (1-p)^(n-k) with n=8, k=6, p=0.72 to obtain P(X=6) ≈ 0.3058.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "binomial probability",
          "P(X = 6)",
          "C(8,6)",
          "combination",
          "0.72 to the 6th",
          "0.28 squared",
          "0.3058",
          "binompdf",
          "n=8 k=6 p=0.72",
          "binomial formula",
          "28 combinations",
          "complement probability 0.28",
          "exactly 6",
          "probability of exactly",
          "choose 6 from 8"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly computes μ = np = 5.76 and σ = √(np(1-p)) ≈ 1.27, and interprets the mean as the long-run average number of free throws made per 8 attempts in context.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "mean of binomial",
          "μ = np",
          "5.76",
          "standard deviation",
          "σ = √np(1-p)",
          "1.27",
          "on average",
          "long-run average",
          "expected number made",
          "interpret in context",
          "8 times 0.72",
          "average free throws per set",
          "spread of binomial",
          "√1.6128",
          "repeated sets of 8"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u4_frq023",
    "subject": "apstats",
    "frqType": "short",
    "title": "Conditional Probability and Independence in Diagnostic Testing",
    "units": [
      4
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A hospital is evaluating a rapid diagnostic test for a rare infectious disease. Based on large-scale clinical data, 2% of patients who visit the clinic actually have the disease. The test has a sensitivity of 95% (probability of a positive test given the patient has the disease) and a specificity of 90% (probability of a negative test given the patient does not have the disease). Let D = event that a randomly selected patient has the disease, and T+ = event that the test result is positive.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the probability that a randomly selected patient tests positive, P(T+). Show your work using the law of total probability.",
        "rubric": "Earns 1 point for correctly applying the law of total probability: P(T+) = P(T+|D)·P(D) + P(T+|D^c)·P(D^c) = (0.95)(0.02) + (0.10)(0.98) = 0.019 + 0.098 = 0.117."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Given that a patient tests positive, calculate the probability that the patient actually has the disease, P(D|T+). Show your work.",
        "rubric": "Earns 1 point for correctly applying Bayes' theorem: P(D|T+) = P(T+|D)·P(D) / P(T+) = 0.019 / 0.117 ≈ 0.1624. Full credit requires using the result from part (a) or an equivalent correct denominator and arriving at approximately 0.162 or 16.2%."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A hospital administrator claims that because the test has 95% sensitivity, a positive result means it is very likely the patient has the disease. Using your result from part (b), justify whether the events 'patient has the disease' and 'patient tests positive' are independent, and explain why the administrator's reasoning is or is not statistically valid.",
        "rubric": "Earns 1 point for correctly concluding the events are NOT independent (since P(D|T+) ≈ 0.162 ≠ P(D) = 0.02, the conditional probability differs from the marginal probability) AND explaining that the administrator's reasoning is flawed because the low base rate (prevalence) of 2% causes a large number of false positives relative to true positives, making the positive predictive value only about 16%, not 95%."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly applies the law of total probability to find P(T+) = (0.95)(0.02) + (0.10)(0.98) = 0.117.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "law of total probability",
          "P(T+)",
          "0.117",
          "sensitivity",
          "specificity",
          "P(T+|D)",
          "P(T+|D^c)",
          "0.95 times 0.02",
          "0.10 times 0.98",
          "total probability formula",
          "false positive rate",
          "complement of specificity",
          "0.019 plus 0.098",
          "marginal probability of positive test",
          "partition of sample space"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies Bayes' theorem to find P(D|T+) ≈ 0.162.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Bayes' theorem",
          "P(D|T+)",
          "0.162",
          "0.1624",
          "positive predictive value",
          "conditional probability",
          "0.019 divided by 0.117",
          "posterior probability",
          "16.2%",
          "Bayes rule",
          "prior probability",
          "updated probability",
          "true positive proportion",
          "numerator 0.019",
          "denominator 0.117"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly concludes events are not independent because P(D|T+) ≠ P(D), and explains that the low base rate (prevalence) inflates false positives, making the administrator's claim invalid.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "not independent",
          "P(D|T+) not equal to P(D)",
          "base rate",
          "prevalence",
          "false positives",
          "positive predictive value",
          "low prevalence",
          "0.162 not equal to 0.02",
          "administrator's reasoning is flawed",
          "independence condition fails",
          "base rate neglect",
          "conditional probability differs from marginal",
          "rare disease effect",
          "sensitivity does not equal predictive value",
          "large number of false positives relative to true positives"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u4_frq024",
    "subject": "apstats",
    "frqType": "short",
    "title": "Expected Value and Variance of a Discrete Random Variable in Insurance Pricing",
    "units": [
      4
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "An insurance company offers a one-year home warranty policy. Based on historical claims data, the company models the annual payout X (in thousands of dollars) to a randomly selected policyholder with the following probability distribution:\n\n| X (thousands $) | 0    | 1    | 5    | 10   |\n|-----------------|------|------|------|------|\n| P(X = x)        | 0.70 | 0.15 | 0.10 | 0.05 |\n\nThe company charges each policyholder a premium of $400 (i.e., $0.4 thousand) per year. Let Y = X − 0.4 represent the company's net loss per policy (positive values indicate a net loss to the company).",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the expected value E(X) and interpret it in the context of this problem.",
        "rubric": "Earns 1 point for correctly computing E(X) = 0(0.70) + 1(0.15) + 5(0.10) + 10(0.05) = 0 + 0.15 + 0.50 + 0.50 = 1.15 (thousand dollars) AND providing a contextual interpretation such as: on average, the company expects to pay out $1,150 per policyholder per year."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the variance Var(X) of the annual payout. Show all work.",
        "rubric": "Earns 1 point for correctly computing Var(X) = E(X²) − [E(X)]² where E(X²) = 0²(0.70) + 1²(0.15) + 5²(0.10) + 10²(0.05) = 0 + 0.15 + 2.50 + 5.00 = 7.65, so Var(X) = 7.65 − (1.15)² = 7.65 − 1.3225 = 6.3275 (thousand dollars squared). Accept answers correctly showing the formula and arithmetic yielding approximately 6.33."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The company is considering whether the $400 premium is sufficient to be profitable in the long run. Using E(X) and the properties of the random variable Y = X − 0.4, explain whether the premium is adequate and what the expected profit or loss per policy is for the company.",
        "rubric": "Earns 1 point for correctly identifying E(Y) = E(X) − 0.4 = 1.15 − 0.40 = 0.75 (thousand dollars = $750), interpreting this as the company expects a net loss of $750 per policy on average (the payout exceeds the premium by $750), AND concluding the $400 premium is NOT adequate or sufficient to cover expected claims."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates E(X) = 1.15 thousand dollars and provides a contextual interpretation of the expected payout.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "E(X)",
          "expected value",
          "1.15",
          "1150",
          "weighted average",
          "mean of distribution",
          "sum of x times P(x)",
          "on average",
          "expected payout",
          "thousand dollars",
          "long-run average payout",
          "discrete random variable mean",
          "probability-weighted sum",
          "mean annual payout",
          "multiply each outcome by its probability"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates Var(X) ≈ 6.3275 using E(X²) − [E(X)]².",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "Var(X)",
          "variance",
          "6.3275",
          "6.33",
          "E(X squared)",
          "E(X^2)",
          "7.65",
          "1.3225",
          "variance formula",
          "sigma squared",
          "E(X^2) minus [E(X)]^2",
          "second moment",
          "spread of distribution",
          "squared deviations weighted by probability",
          "1.15 squared"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly uses E(Y) = E(X) − 0.4 = 0.75, interprets the expected net loss of $750 per policy, and concludes the premium is insufficient.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "E(Y)",
          "0.75",
          "750 dollars",
          "net loss",
          "expected loss",
          "premium is not adequate",
          "insufficient premium",
          "E(X) minus 0.4",
          "linear transformation of expected value",
          "expected net loss per policy",
          "payout exceeds premium",
          "not profitable",
          "E(aX+b) rule",
          "expected value of shifted random variable",
          "premium does not cover expected claims"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u5_frq025",
    "subject": "apstats",
    "frqType": "short",
    "title": "Sampling Distribution of Sample Proportion: Online Shopping Survey",
    "units": [
      5
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A large retail company believes that 60% of its customers have made at least one online purchase in the past month. A random sample of 100 customers is selected and the proportion who made an online purchase is recorded. Let p-hat represent the sample proportion of customers who made an online purchase.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the shape of the sampling distribution of p-hat. Justify your answer by checking the appropriate conditions.",
        "rubric": "Earns 1 point for stating the shape is approximately normal AND verifying both np = 100(0.60) = 60 ≥ 10 and n(1-p) = 100(0.40) = 40 ≥ 10, concluding the large counts condition is met."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the mean and standard deviation of the sampling distribution of p-hat.",
        "rubric": "Earns 1 point for correctly stating the mean of p-hat equals p = 0.60 AND computing the standard deviation as sqrt(p(1-p)/n) = sqrt(0.60 × 0.40 / 100) = sqrt(0.0024) ≈ 0.0490."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Explain what it means for p-hat to be an unbiased estimator of the true population proportion p.",
        "rubric": "Earns 1 point for explaining that the mean of the sampling distribution of p-hat equals the true population proportion p = 0.60, meaning the statistic does not systematically overestimate or underestimate the parameter on average."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student states the sampling distribution is approximately normal and verifies the large counts condition: np ≥ 10 and n(1-p) ≥ 10.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "approximately normal",
          "large counts condition",
          "np >= 10",
          "n(1-p) >= 10",
          "np = 60",
          "n(1-p) = 40",
          "normal approximation",
          "success-failure condition",
          "bell-shaped distribution",
          "both conditions satisfied",
          "sample size 100",
          "np and n(1-p) both at least 10"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly calculates mean of p-hat = 0.60 and standard deviation = sqrt(0.60 × 0.40 / 100) ≈ 0.0490.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "mean of p-hat",
          "mu p-hat",
          "0.60",
          "standard deviation of p-hat",
          "sigma p-hat",
          "sqrt(p(1-p)/n)",
          "0.049",
          "0.0490",
          "standard error of proportion",
          "sqrt(0.0024)",
          "equals the population proportion",
          "p times 1 minus p divided by n"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student explains that unbiased means the mean of the sampling distribution of p-hat equals p, so the estimator does not systematically over- or underestimate the true proportion.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "unbiased estimator",
          "mean of sampling distribution",
          "equals the parameter",
          "does not systematically overestimate",
          "does not systematically underestimate",
          "mu p-hat equals p",
          "center of the distribution",
          "true population proportion",
          "long-run average",
          "no systematic bias",
          "expected value equals parameter",
          "sampling distribution centered at p"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u5_frq026",
    "subject": "apstats",
    "frqType": "short",
    "title": "Central Limit Theorem: Daily Commute Times",
    "units": [
      5
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "The distribution of daily commute times for workers in a large city is strongly right-skewed with a mean of 35 minutes and a standard deviation of 20 minutes. A transportation researcher randomly selects samples of 50 workers and records the sample mean commute time, x-bar, for each sample.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the shape of the sampling distribution of x-bar. Justify your answer.",
        "rubric": "Earns 1 point for stating the sampling distribution of x-bar is approximately normal, citing the Central Limit Theorem because the sample size n = 50 is large (generally n ≥ 30), even though the population distribution is right-skewed."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the mean and standard error of the sampling distribution of x-bar.",
        "rubric": "Earns 1 point for correctly stating the mean of x-bar = 35 minutes AND computing the standard error as sigma/sqrt(n) = 20/sqrt(50) ≈ 2.83 minutes."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A second researcher uses samples of size 200 instead of 50. Explain how increasing the sample size to 200 affects the standard error of x-bar and what this means about the variability of the sampling distribution.",
        "rubric": "Earns 1 point for correctly computing or comparing the new standard error = 20/sqrt(200) ≈ 1.41, explaining that larger sample size decreases the standard error, meaning sample means are less variable and cluster more tightly around the true population mean."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student states the sampling distribution of x-bar is approximately normal and cites the Central Limit Theorem with justification that n = 50 is sufficiently large.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "approximately normal",
          "Central Limit Theorem",
          "CLT",
          "sample size is large",
          "n = 50",
          "n >= 30",
          "large sample size",
          "despite skewed population",
          "right-skewed population",
          "CLT applies",
          "shape is approximately normal regardless of population shape",
          "sufficiently large n"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly states mean of x-bar = 35 and standard error = 20/sqrt(50) ≈ 2.83 minutes.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "mean of x-bar",
          "mu x-bar",
          "35 minutes",
          "standard error",
          "sigma divided by sqrt n",
          "20/sqrt(50)",
          "2.83",
          "2.828",
          "standard deviation of sampling distribution",
          "sigma x-bar",
          "population standard deviation divided by square root of n",
          "mean of sampling distribution equals population mean"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student explains that increasing n to 200 decreases the standard error (to approximately 1.41), resulting in less variability in the sampling distribution of x-bar.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "standard error decreases",
          "20/sqrt(200)",
          "1.41",
          "1.414",
          "less variability",
          "smaller spread",
          "sample means cluster more tightly around true mean",
          "larger sample size reduces standard error",
          "standard error inversely related to square root of n",
          "more precise estimates",
          "sampling distribution narrower",
          "standard error cut in half when sample size quadruples"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u5_frq027",
    "subject": "apstats",
    "frqType": "short",
    "title": "Sampling Distribution of Sample Proportion: Voter Support Survey",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A political polling organization believes that 62% of registered voters in a large city support a proposed transit referendum. The organization plans to randomly select a sample of 150 registered voters and record the proportion who support the referendum. Let p-hat represent the sample proportion of voters who support the referendum.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the shape, center, and spread of the sampling distribution of p-hat. Verify that the necessary conditions for this description are met.",
        "rubric": "Earns 1 point for correctly identifying the shape as approximately normal, stating the mean of p-hat equals p = 0.62, computing the standard deviation (standard error) as sqrt(0.62 × 0.38 / 150) ≈ 0.0397, AND verifying both conditions: np = 150(0.62) = 93 ≥ 10 and n(1-p) = 150(0.38) = 57 ≥ 10, and that the population is large relative to the sample (10% condition)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the probability that the sample proportion p-hat is greater than 0.68.",
        "rubric": "Earns 1 point for correctly standardizing using z = (0.68 − 0.62) / sqrt(0.62 × 0.38 / 150) ≈ 1.51 and finding P(p-hat > 0.68) = P(Z > 1.51) ≈ 0.0655. Accept equivalent values from a correctly set up normalcdf calculation."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Suppose the organization instead takes a sample of 400 voters rather than 150. Explain how this change affects the standard error of p-hat and what that means for the accuracy of the sample proportion as an estimate of the true proportion.",
        "rubric": "Earns 1 point for explaining that increasing the sample size from 150 to 400 decreases the standard error (standard deviation of p-hat) because standard error = sqrt(p(1-p)/n) and a larger n produces a smaller value, AND connecting this to less variability in p-hat, meaning the sample proportion is a more precise or more accurate estimate of the true population proportion p."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly describes the sampling distribution of p-hat: approximately normal shape, mean equal to p = 0.62, standard error = sqrt(0.62 × 0.38 / 150) ≈ 0.0397, with both Large Counts conditions verified (np ≥ 10, n(1-p) ≥ 10) and 10% condition stated.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "approximately normal",
          "mean of p-hat",
          "mu sub p-hat equals 0.62",
          "standard deviation of p-hat",
          "standard error",
          "sqrt(p(1-p)/n)",
          "0.0397",
          "large counts condition",
          "np >= 10",
          "n(1-p) >= 10",
          "10% condition",
          "sampling distribution of p-hat",
          "np = 93",
          "n(1-p) = 57",
          "population size large relative to sample"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates P(p-hat > 0.68) by standardizing to z ≈ 1.51 and finding probability ≈ 0.0655 using the normal distribution.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "z-score",
          "z = (0.68 - 0.62)",
          "divided by standard error",
          "z ≈ 1.51",
          "P(Z > 1.51)",
          "normalcdf",
          "0.0655",
          "approximately 0.065",
          "standardize",
          "normal distribution",
          "p-hat greater than 0.68",
          "upper tail probability",
          "1 minus P(Z < 1.51)"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Explains that increasing sample size to 400 decreases the standard error of p-hat, resulting in less variability and a more precise estimate of the true proportion p.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "standard error decreases",
          "larger sample size",
          "n = 400",
          "sqrt(p(1-p)/n)",
          "denominator increases",
          "less variability",
          "more precise",
          "more accurate estimate",
          "sampling variability decreases",
          "standard deviation of p-hat decreases",
          "closer to true proportion",
          "reduced spread",
          "p-hat less likely to deviate from p"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u5_frq028",
    "subject": "apstats",
    "frqType": "short",
    "title": "Central Limit Theorem and Sampling Distribution of the Mean: Coffee Shop Wait Times",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A coffee shop records the wait times (in minutes) for all customers over the past year. The distribution of individual wait times is strongly right-skewed with a population mean of μ = 4.2 minutes and a population standard deviation of σ = 2.8 minutes. A quality assurance manager randomly selects samples of n = 49 customers and computes the sample mean wait time x-bar for each sample.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe the shape, center, and spread of the sampling distribution of x-bar for samples of size n = 49. Justify your answer regarding shape.",
        "rubric": "Earns 1 point for stating the sampling distribution of x-bar is approximately normal (by the Central Limit Theorem because n = 49 ≥ 30), with mean mu sub x-bar = 4.2 minutes, and standard error = sigma / sqrt(n) = 2.8 / sqrt(49) = 0.4 minutes. Must explicitly invoke the Central Limit Theorem or reference n being sufficiently large to justify approximately normal shape."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "The manager claims that x-bar is an unbiased estimator of the population mean μ. Explain what it means for x-bar to be an unbiased estimator in the context of this problem.",
        "rubric": "Earns 1 point for explaining that x-bar is an unbiased estimator because the mean of the sampling distribution of x-bar equals the true population mean μ = 4.2 minutes, meaning that across all possible samples of size 49, the sample mean wait times do not systematically overestimate or underestimate the true average wait time. Must reference no systematic over- or under-estimation OR that the expected value of x-bar equals mu."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Would the sampling distribution of x-bar be approximately normal if the sample size were n = 8 instead of n = 49? Justify your answer.",
        "rubric": "Earns 1 point for concluding that the sampling distribution of x-bar would NOT be approximately normal for n = 8 because the Central Limit Theorem requires a sufficiently large sample size (generally n ≥ 30) when the population distribution is non-normal or skewed, and n = 8 is too small to invoke the CLT. Must reference the skewed population distribution and the sample size being insufficient for the Central Limit Theorem."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly describes the sampling distribution of x-bar as approximately normal by the Central Limit Theorem, with mean = 4.2 and standard error = 2.8/sqrt(49) = 0.4 minutes.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "approximately normal",
          "central limit theorem",
          "CLT",
          "mean of x-bar",
          "mu sub x-bar equals 4.2",
          "standard error",
          "sigma divided by sqrt(n)",
          "2.8 / sqrt(49)",
          "standard error equals 0.4",
          "sampling distribution of x-bar",
          "n = 49 sufficiently large",
          "n >= 30",
          "shape justified by CLT",
          "spread equals 0.4 minutes"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Explains that unbiasedness means the mean of the sampling distribution of x-bar equals the true population mean μ = 4.2, so the estimator does not systematically overestimate or underestimate the true mean wait time.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "unbiased estimator",
          "mean of sampling distribution equals mu",
          "expected value of x-bar equals 4.2",
          "no systematic overestimate",
          "no systematic underestimate",
          "does not consistently overestimate",
          "center of sampling distribution",
          "mu sub x-bar equals mu",
          "unbiasedness",
          "on average equals true mean",
          "4.2 minutes",
          "expected value of x-bar equals population mean",
          "long-run average of x-bar equals mu"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly concludes that the sampling distribution of x-bar would NOT be approximately normal for n = 8 because the sample size is too small to apply the Central Limit Theorem when the population is strongly right-skewed.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "not approximately normal",
          "n = 8 too small",
          "Central Limit Theorem does not apply",
          "CLT requires large sample",
          "n < 30",
          "skewed population",
          "strongly right-skewed",
          "cannot invoke CLT",
          "population shape matters",
          "sample size insufficient",
          "would be skewed",
          "sampling distribution inherits skewness",
          "n = 8 fails CLT threshold"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u5_frq029",
    "subject": "apstats",
    "frqType": "short",
    "title": "Sampling Distribution of Sample Proportions: Online Poll Bias",
    "units": [
      5
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A national health organization claims that exactly 62% of American adults get fewer than 7 hours of sleep per night. A researcher is designing two separate studies to estimate this proportion. Study A will randomly sample n = 40 adults. Study B will randomly sample n = 180 adults. Both studies will record p-hat, the sample proportion of adults who get fewer than 7 hours of sleep. Assume the true population proportion is p = 0.62.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "Justify whether the sampling distribution of p-hat for Study B can be approximated by a normal distribution. Show all necessary checks.",
        "rubric": "Student must verify both the Large Counts condition: np = 180(0.62) = 111.6 ≥ 10 AND n(1-p) = 180(0.38) = 68.4 ≥ 10, and conclude that the sampling distribution of p-hat can be approximated by a normal distribution."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the standard error of p-hat for both Study A and Study B. Then explain what the difference in these values tells a researcher about the two study designs.",
        "rubric": "Student must correctly compute SE for Study A as sqrt(0.62 * 0.38 / 40) ≈ 0.0768 and SE for Study B as sqrt(0.62 * 0.38 / 180) ≈ 0.0362, and explain that Study B has a smaller standard error, meaning p-hat values in Study B are less variable and cluster more tightly around the true proportion p = 0.62."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A colleague argues that Study A should not be used because its p-hat is a biased estimator of p since the standard error is so large. Explain whether this argument is statistically correct.",
        "rubric": "Student must correctly state that p-hat is an unbiased estimator of p regardless of sample size, meaning the mean of the sampling distribution of p-hat equals p = 0.62 for both studies. The colleague is incorrect; a larger standard error reflects greater variability (or less precision), not bias. Bias and variability are distinct properties of an estimator."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly verifies the Large Counts condition for Study B by computing np ≥ 10 and n(1-p) ≥ 10 and concludes normality is justified.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "large counts condition",
          "np greater than or equal to 10",
          "n(1-p) greater than or equal to 10",
          "111.6",
          "68.4",
          "normal approximation",
          "sampling distribution of p-hat",
          "approximately normal",
          "success-failure condition",
          "180 times 0.62",
          "180 times 0.38",
          "both conditions met"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates the standard error for both Study A (≈ 0.0768) and Study B (≈ 0.0362) using SE = sqrt(p(1-p)/n), and explains that the larger n in Study B produces less variability in p-hat.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "standard error",
          "sqrt(p(1-p)/n)",
          "0.0768",
          "0.0362",
          "larger sample size reduces standard error",
          "less variability in p-hat",
          "more precise estimate",
          "p-hat values cluster around true proportion",
          "standard deviation of sampling distribution",
          "square root of p times 1 minus p over n",
          "Study B more precise than Study A",
          "standard error formula for proportions"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly identifies that p-hat is an unbiased estimator of p for any sample size, distinguishes between bias and variability, and explains the colleague's argument is statistically incorrect.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "unbiased estimator",
          "mean of sampling distribution equals p",
          "bias and variability are distinct properties",
          "colleague is incorrect",
          "standard error reflects variability not bias",
          "expected value of p-hat equals 0.62",
          "unbiasedness independent of sample size",
          "variability does not imply bias",
          "center of sampling distribution equals p",
          "larger standard error means less precision",
          "bias refers to systematic error",
          "p-hat is unbiased for all n"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u5_frq030",
    "subject": "apstats",
    "frqType": "short",
    "title": "Central Limit Theorem and Sampling Distribution of the Mean: Assembly Line Weights",
    "units": [
      5
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A food manufacturing plant fills bags of rice. The weight of an individual bag is known to be strongly right-skewed with a population mean of μ = 16.2 ounces and a population standard deviation of σ = 3.6 ounces. A quality control inspector randomly selects samples of n = 50 bags each hour and records x-bar, the sample mean weight. A second inspector at a different facility uses samples of only n = 8 bags per hour from a population that is known to be normally distributed with the same μ = 16.2 and σ = 3.6.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Explain why the Central Limit Theorem applies to the first inspector's sampling distribution of x-bar but cannot be invoked to justify normality for the second inspector's sampling distribution.",
        "rubric": "Student must explain that the Central Limit Theorem states that for large sample sizes (generally n ≥ 30), the sampling distribution of x-bar is approximately normal regardless of the shape of the population distribution. With n = 50, the CLT applies to the first inspector even though the population is right-skewed. The second inspector has n = 8, which is too small to invoke the CLT; however, because the second inspector's population is itself normally distributed, the sampling distribution of x-bar is still exactly normal - but this is due to the normal population, not the CLT."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "For the first inspector (n = 50), calculate the probability that x-bar exceeds 17.0 ounces. Show your work including the standard error and standardized value.",
        "rubric": "Student must compute standard error = σ/sqrt(n) = 3.6/sqrt(50) ≈ 0.509, then z = (17.0 - 16.2) / 0.509 ≈ 1.57, then P(x-bar > 17.0) = P(Z > 1.57) ≈ 1 - 0.9418 = 0.0582 (accept values in range 0.057 to 0.060 depending on rounding). Student must show the standard error formula and z-score calculation for full credit."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Describe the effect on the standard error and on the shape of the sampling distribution of x-bar for the first inspector if the sample size were increased from n = 50 to n = 200, assuming σ remains the same.",
        "rubric": "Student must state that the standard error decreases (specifically, it is halved: from 3.6/sqrt(50) ≈ 0.509 to 3.6/sqrt(200) ≈ 0.255, a reduction by a factor of 2) because standard error equals σ divided by square root of n, so quadrupling n cuts the standard error in half. The shape remains approximately normal by the CLT since n = 200 is still large; the distribution becomes more tightly concentrated around μ = 16.2."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly explains that the CLT applies to the first inspector because n = 50 ≥ 30 regardless of skewed population shape, and correctly explains that the second inspector's normality comes from the normal population distribution, not the CLT, since n = 8 is too small.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "central limit theorem",
          "n equals 50 is sufficiently large",
          "n greater than or equal to 30",
          "right-skewed population shape",
          "approximately normal regardless of population shape",
          "n equals 8 too small to invoke CLT",
          "normal population guarantees normal sampling distribution",
          "CLT cannot be invoked for n equals 8",
          "sampling distribution of x-bar",
          "normality due to normal population not CLT",
          "exactly normal when population is normal",
          "CLT requires large sample size"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates the standard error as σ/sqrt(n) ≈ 0.509, computes z ≈ 1.57, and finds P(x-bar > 17.0) ≈ 0.058.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "standard error equals sigma over square root of n",
          "3.6 divided by sqrt(50)",
          "0.509",
          "z-score equals 1.57",
          "(17.0 minus 16.2) divided by 0.509",
          "P(Z greater than 1.57)",
          "0.0582",
          "0.058",
          "standardized score for x-bar",
          "normal distribution table or z-table",
          "upper tail probability",
          "1 minus 0.9418"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly states that the standard error is halved (from ≈ 0.509 to ≈ 0.255) when n quadruples from 50 to 200, and that the shape remains approximately normal with less variability around the mean.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "standard error decreases",
          "standard error is halved",
          "0.255",
          "quadrupling n halves standard error",
          "sigma divided by square root of n",
          "shape remains approximately normal by CLT",
          "more tightly concentrated around the mean",
          "less variability in sample means",
          "CLT still applies at n equals 200",
          "n equals 200 large enough for CLT",
          "inverse square root relationship between n and standard error",
          "sampling distribution narrower"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u6_frq031",
    "subject": "apstats",
    "frqType": "short",
    "title": "One Proportion Z-Test: School Lunch Program",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school district claims that 70% of students participate in the school lunch program. A researcher suspects the true proportion is lower than 70%. She randomly selects 120 students and finds that 78 of them participate in the school lunch program. She plans to conduct a one-proportion z-test at the significance level α = 0.05.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "State",
        "question": "State the null and alternative hypotheses for this test. Define the parameter in context.",
        "rubric": "Student earns the point by correctly stating H0: p = 0.70 and Ha: p < 0.70, where p is defined as the true proportion of students in the district who participate in the school lunch program."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the test statistic and p-value for this test.",
        "rubric": "Student earns the point by correctly computing p-hat = 78/120 = 0.65, the test statistic z = (0.65 − 0.70) / sqrt(0.70 × 0.30 / 120) ≈ −1.195, and reporting an approximate p-value ≈ 0.116."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Using your results from part (b), state a conclusion in the context of the problem. Use α = 0.05.",
        "rubric": "Student earns the point by correctly comparing the p-value to α = 0.05, failing to reject H0 because p-value ≈ 0.116 > 0.05, and concluding in context that there is not sufficient evidence that the true proportion of students who participate in the school lunch program is less than 70%."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly states null and alternative hypotheses with parameter defined in context.",
        "partLabel": "a",
        "skill": "state",
        "keywords": [
          "H0",
          "Ha",
          "null hypothesis",
          "alternative hypothesis",
          "p = 0.70",
          "p < 0.70",
          "true proportion",
          "proportion of students",
          "one-sided",
          "left-tailed",
          "parameter defined",
          "population proportion",
          "define p",
          "school lunch program"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates p-hat, test statistic z, and p-value.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "p-hat",
          "p̂ = 0.65",
          "78/120",
          "z-statistic",
          "z = -1.195",
          "z = -1.20",
          "test statistic",
          "p-value",
          "0.116",
          "standard error",
          "sqrt(0.70)(0.30)/120",
          "sample proportion",
          "one-proportion z-test",
          "normal approximation"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly compares p-value to alpha, fails to reject H0, and states conclusion in context.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "fail to reject H0",
          "fail to reject null",
          "p-value > 0.05",
          "alpha = 0.05",
          "not sufficient evidence",
          "do not reject",
          "less than 70%",
          "school lunch",
          "in context",
          "conclusion",
          "0.116 > 0.05",
          "insufficient evidence",
          "significance level",
          "no convincing evidence"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u6_frq032",
    "subject": "apstats",
    "frqType": "short",
    "title": "Type I and Type II Error: Sleep Study",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A sleep researcher is testing whether a new relaxation app increases the proportion of college students who get at least 7 hours of sleep per night. The researcher sets up a hypothesis test where H0: p = 0.40 and Ha: p > 0.40, where p is the true proportion of college students who get at least 7 hours of sleep per night when using the app. The test is conducted at α = 0.05.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe what a Type I error would mean in the context of this study.",
        "rubric": "Student earns the point by correctly describing a Type I error in context: concluding that the app increases the proportion of students who get at least 7 hours of sleep (rejecting H0) when in reality the true proportion is still 0.40 (H0 is true)."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Describe what a Type II error would mean in the context of this study.",
        "rubric": "Student earns the point by correctly describing a Type II error in context: failing to conclude that the app increases the proportion of students who get at least 7 hours of sleep (failing to reject H0) when in reality the app does increase the proportion above 0.40 (Ha is true)."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The researcher decides to lower the significance level from α = 0.05 to α = 0.01. Explain how this change affects the probability of making a Type II error.",
        "rubric": "Student earns the point by correctly explaining that lowering alpha from 0.05 to 0.01 decreases the probability of a Type I error but increases the probability of a Type II error (beta increases), because it becomes harder to reject H0, making it more likely to miss a true effect."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly describes Type I error in context as rejecting a true null hypothesis.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "Type I error",
          "reject H0",
          "null hypothesis is true",
          "false positive",
          "conclude the app works",
          "proportion is not greater",
          "p = 0.40",
          "rejecting a true null",
          "incorrectly conclude",
          "alpha",
          "probability of Type I error",
          "app increases sleep",
          "when it does not"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly describes Type II error in context as failing to reject a false null hypothesis.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "Type II error",
          "fail to reject H0",
          "alternative hypothesis is true",
          "false negative",
          "miss the effect",
          "app does increase",
          "proportion is greater than 0.40",
          "failing to reject a false null",
          "beta",
          "no evidence when effect exists",
          "probability of Type II error",
          "conclude no improvement",
          "true proportion above 0.40"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly explains that decreasing alpha increases the probability of a Type II error.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "Type II error increases",
          "beta increases",
          "probability of Type II error",
          "harder to reject H0",
          "lower alpha",
          "alpha = 0.01",
          "more likely to fail to reject",
          "trade-off",
          "power decreases",
          "less likely to detect",
          "more conservative",
          "critical region narrows",
          "alpha-beta trade-off"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u6_frq033",
    "subject": "apstats",
    "frqType": "short",
    "title": "Type I and Type II Error in Sleep Study Hypothesis Test",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school district claims that fewer than 30% of its high school students get at least 8 hours of sleep on school nights. A researcher conducts a hypothesis test using a random sample of 150 high school students from the district. Of the 150 students sampled, 38 reported getting at least 8 hours of sleep on school nights. The researcher sets the significance level at α = 0.05 and uses a one-proportion z-test to evaluate the district's claim.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe what a Type I error would mean in the context of this study.",
        "rubric": "Student earns 1 point for correctly describing a Type I error in context: concluding that fewer than 30% of students get at least 8 hours of sleep when in fact the true proportion is 30% or more (i.e., rejecting a true null hypothesis). The response must reference both the incorrect conclusion and the true state of reality in context."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Describe what a Type II error would mean in the context of this study, and identify one consequence of making this error for the school district.",
        "rubric": "Student earns 1 point for correctly describing a Type II error in context: failing to conclude that fewer than 30% of students get at least 8 hours of sleep when in fact the true proportion is less than 30% (i.e., failing to reject a false null hypothesis). Student should also note a real-world consequence such as the district not implementing sleep health interventions when they are actually needed."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The researcher considers lowering the significance level from α = 0.05 to α = 0.01. Explain how this change would affect the probability of a Type II error and the power of the test.",
        "rubric": "Student earns 1 point for correctly stating that lowering alpha decreases the probability of a Type I error but increases the probability of a Type II error (beta increases), and therefore the power of the test decreases. Both the effect on Type II error and the effect on power must be addressed with correct direction for full credit."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly describes Type I error in context: rejecting the null hypothesis when it is actually true, meaning concluding the proportion is less than 0.30 when it is actually 0.30 or greater.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "Type I error",
          "reject the null",
          "null hypothesis is true",
          "concluding fewer than 30%",
          "proportion is less than 0.30",
          "H0 is true",
          "false positive",
          "significance level alpha",
          "rejecting a true null hypothesis",
          "true proportion is 0.30",
          "true proportion is at least 0.30",
          "incorrectly concluding",
          "proportion of students getting 8 hours"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly describes Type II error in context: failing to reject the null hypothesis when it is actually false, meaning failing to conclude the proportion is less than 0.30 when it actually is, along with a plausible real-world consequence.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "Type II error",
          "fail to reject the null",
          "null hypothesis is false",
          "proportion is less than 0.30",
          "failing to detect",
          "beta",
          "false negative",
          "no intervention",
          "sleep program not implemented",
          "true proportion less than 0.30",
          "missing the effect",
          "failing to reject a false null",
          "district does not act"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly explains that decreasing alpha from 0.05 to 0.01 increases the probability of a Type II error (beta increases) and decreases the power of the test.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "lower alpha",
          "decrease significance level",
          "Type II error increases",
          "beta increases",
          "power decreases",
          "less likely to reject",
          "alpha-beta tradeoff",
          "alpha and beta tradeoff",
          "power of the test",
          "probability of detecting",
          "harder to reject null",
          "stricter rejection criterion",
          "probability of Type II error rises"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u6_frq034",
    "subject": "apstats",
    "frqType": "short",
    "title": "Two-Proportion Z-Interval for Vaccine Side Effect Rates",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A pharmaceutical company is comparing the proportion of participants who experienced mild side effects from two versions of a new vaccine: Formula A and Formula B. In a randomized clinical trial, 200 participants were randomly assigned to receive Formula A and 180 participants were randomly assigned to receive Formula B. Of those who received Formula A, 54 reported mild side effects. Of those who received Formula B, 63 reported mild side effects. The company wants to construct a 95% confidence interval to estimate the difference in the true proportions of participants who would experience mild side effects from Formula A versus Formula B.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "Justify that the conditions for constructing a two-proportion z-interval are met in this study.",
        "rubric": "Student earns 1 point for checking all three conditions: (1) Random - participants were randomly assigned to treatment groups; (2) Independence / 10% condition - 200 and 180 are less than 10% of all potential vaccine recipients; (3) Normal / Large Counts - all four counts (n1*p-hat1, n1*(1-p-hat1), n2*p-hat2, n2*(1-p-hat2)) are at least 10: 54, 146, 63, 117 are all ≥ 10. All three conditions must be addressed for full credit."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the 95% confidence interval for the difference in the true proportions of participants who experience mild side effects (Formula A minus Formula B). Show your work.",
        "rubric": "Student earns 1 point for correctly computing the interval. p-hat_A = 54/200 = 0.27, p-hat_B = 63/180 = 0.35. Difference in sample proportions = 0.27 - 0.35 = -0.08. SE = sqrt((0.27)(0.73)/200 + (0.35)(0.65)/180) ≈ sqrt(0.000986 + 0.001264) ≈ sqrt(0.002250) ≈ 0.04743. z* = 1.96. Margin of error = 1.96 × 0.04743 ≈ 0.0930. Interval: (-0.08 - 0.093, -0.08 + 0.093) = (-0.173, 0.013). Minor arithmetic errors with correct process still earn the point."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Based on your confidence interval, explain what conclusion the pharmaceutical company can draw about whether the two formulas differ in the proportion of participants experiencing mild side effects.",
        "rubric": "Student earns 1 point for correctly interpreting the interval in context: because the 95% confidence interval for pA - pB contains zero (from approximately -0.173 to 0.013), there is not convincing evidence that the true proportions of mild side effects differ between Formula A and Formula B. Student must reference zero being in the interval and connect to the conclusion about the two formulas."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "All three conditions for two-proportion z-interval are correctly verified: random assignment, independence/10% condition for both groups, and large counts condition with all four values at least 10.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "random assignment",
          "randomly assigned",
          "10% condition",
          "independence condition",
          "large counts condition",
          "np at least 10",
          "n(1-p) at least 10",
          "54 and 146",
          "63 and 117",
          "all counts greater than or equal to 10",
          "Normal condition",
          "two-proportion z-interval conditions",
          "randomized clinical trial",
          "independent groups"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates the two-proportion z-interval: p-hat_A = 0.27, p-hat_B = 0.35, difference = -0.08, standard error ≈ 0.0474, z* = 1.96, resulting in an interval of approximately (-0.173, 0.013).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "p-hat A equals 0.27",
          "p-hat B equals 0.35",
          "difference in sample proportions",
          "standard error of difference",
          "z* = 1.96",
          "margin of error",
          "(-0.173, 0.013)",
          "two-proportion z-interval formula",
          "square root of sum of variance terms",
          "0.27 minus 0.35",
          "negative 0.08",
          "54 divided by 200",
          "63 divided by 180"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly interprets the interval in context: since zero is contained in the interval, there is not convincing evidence of a difference in the true proportions of mild side effects between Formula A and Formula B.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "zero is in the interval",
          "interval contains zero",
          "no convincing evidence of a difference",
          "plausible that true proportions are equal",
          "difference could be zero",
          "not statistically significant difference",
          "true proportions may be equal",
          "Formula A and Formula B",
          "mild side effect rates",
          "95% confident",
          "cannot conclude the proportions differ",
          "zero is a plausible value"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u6_frq035",
    "subject": "apstats",
    "frqType": "short",
    "title": "Type I and Type II Error in Drug Efficacy Testing",
    "units": [
      6
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A pharmaceutical company is testing a new drug intended to reduce LDL cholesterol in adults with high cholesterol. Researchers set up a hypothesis test with H₀: p = 0.40 versus Hₐ: p > 0.40, where p is the true proportion of patients who experience a clinically significant reduction in LDL after 12 weeks of treatment. The significance level is set at α = 0.05. Historical data suggest the true proportion of patients who benefit is actually 0.55. The study will enroll 200 patients.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "Describe what a Type I error would mean in the context of this study, and identify a real-world consequence of making this error.",
        "rubric": "Student earns credit for correctly stating that a Type I error occurs when H₀ is rejected even though it is true - concluding that the drug works (p > 0.40) when in reality the true proportion who benefit is only 0.40 (the drug is not more effective than the baseline). A real-world consequence must be stated in context, such as the drug being approved or marketed when it is not actually more effective than assumed, wasting resources or potentially harming patients by replacing effective treatments."
      },
      {
        "label": "b",
        "command": "Describe",
        "question": "Describe what a Type II error would mean in the context of this study, and explain one way researchers could reduce the probability of making a Type II error without changing the significance level.",
        "rubric": "Student earns credit for correctly stating that a Type II error occurs when H₀ is not rejected even though it is false - failing to conclude the drug is effective when in reality p = 0.55 (the drug truly helps more than 40% of patients). Student must also identify a valid method to reduce beta (Type II error probability) without changing alpha, such as increasing the sample size (enrolling more patients), which increases the power of the test."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Given that the true proportion is p = 0.55, explain what happens to the power of this test if the researchers decide to lower the significance level from α = 0.05 to α = 0.01. Justify your answer.",
        "rubric": "Student earns credit for correctly stating that lowering alpha from 0.05 to 0.01 decreases the power of the test, and for providing a valid justification: a lower significance level requires more extreme sample evidence to reject H₀, making it harder to detect a true effect, which increases the probability of a Type II error (beta) and therefore decreases power (power = 1 − beta). Student must connect the direction of change in alpha to the direction of change in power."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly describes a Type I error in context as rejecting H₀ when it is true - concluding the drug is effective when it is not - and states a meaningful real-world consequence such as approving an ineffective drug.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "Type I error",
          "reject H₀",
          "null hypothesis is true",
          "conclude drug is effective",
          "drug does not work",
          "false positive",
          "approve ineffective drug",
          "p equals 0.40",
          "alpha equals 0.05",
          "H₀ is true",
          "proportion is only 0.40",
          "no true effect",
          "incorrectly conclude",
          "real-world consequence",
          "misleading approval"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly describes a Type II error in context as failing to reject H₀ when it is false - missing a truly effective drug - and identifies increasing sample size as a valid method to reduce beta without changing alpha.",
        "partLabel": "b",
        "skill": "describe",
        "keywords": [
          "Type II error",
          "fail to reject H₀",
          "null hypothesis is false",
          "drug is effective",
          "true proportion is 0.55",
          "false negative",
          "beta",
          "increase sample size",
          "larger sample",
          "reduce Type II error probability",
          "power increases",
          "miss true effect",
          "without changing alpha",
          "enroll more patients",
          "overlook effective drug"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly states that lowering alpha decreases power, with justification that a stricter significance level makes it harder to reject H₀, increases beta, and therefore reduces the probability of detecting a true effect.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "power decreases",
          "lower alpha",
          "alpha equals 0.01",
          "harder to reject H₀",
          "beta increases",
          "power equals 1 minus beta",
          "Type II error probability increases",
          "less likely to detect true effect",
          "stricter significance level",
          "critical region narrows",
          "more extreme evidence required",
          "reject region smaller",
          "inverse relationship alpha power",
          "true proportion 0.55",
          "failing to detect true difference"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u6_frq036",
    "subject": "apstats",
    "frqType": "short",
    "title": "Two-Proportion Z-Test for Social Media Usage",
    "units": [
      6
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A researcher wants to determine whether the proportion of teenagers who report using social media for more than 4 hours per day differs between urban and rural communities. A random sample of 180 urban teenagers found that 99 reported using social media for more than 4 hours per day. An independent random sample of 150 rural teenagers found that 63 reported using social media for more than 4 hours per day. The researcher conducts a two-proportion z-test at significance level α = 0.05.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "State the hypotheses for this test using correct notation, and verify that the conditions for inference are met.",
        "rubric": "Student earns credit for correctly stating H₀: p_urban = p_rural (or p_urban − p_rural = 0) and Hₐ: p_urban ≠ p_rural (or p_urban − p_rural ≠ 0) using proper notation, AND verifying all three conditions: (1) Random - both samples are stated to be random samples; (2) Independence - 180 < 10% of all urban teenagers and 150 < 10% of all rural teenagers (10% condition); (3) Large counts using pooled proportion p̂_c = (99 + 63)/(180 + 150) = 162/330 ≈ 0.491, then checking n₁p̂_c = 180(0.491) ≈ 88.4 ≥ 10, n₁(1−p̂_c) ≈ 91.6 ≥ 10, n₂p̂_c = 150(0.491) ≈ 73.6 ≥ 10, n₂(1−p̂_c) ≈ 76.4 ≥ 10."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the test statistic and p-value for this test. Show your work.",
        "rubric": "Student earns credit for correctly computing the pooled sample proportion p̂_c = (99 + 63)/(180 + 150) = 162/330 ≈ 0.4909, the sample proportions p̂_urban = 99/180 = 0.55 and p̂_rural = 63/150 = 0.42, the standard error SE = sqrt[p̂_c(1−p̂_c)(1/n₁ + 1/n₂)] = sqrt[0.4909(0.5091)(1/180 + 1/150)] ≈ sqrt[0.4909 × 0.5091 × 0.01222] ≈ 0.05517, and the test statistic z = (0.55 − 0.42)/0.05517 ≈ 2.36. The corresponding two-tailed p-value is approximately 0.018. Minor arithmetic errors that do not reflect conceptual misunderstanding may still earn credit if process is correct."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "State a conclusion for this test in the context of the study. Then explain what it would mean if the researcher mistakenly used α = 0.01 instead, and whether the conclusion would change.",
        "rubric": "Student earns credit for a complete conclusion at α = 0.05: since p-value ≈ 0.018 < α = 0.05, reject H₀; there is sufficient evidence to conclude that the proportion of teenagers who use social media more than 4 hours per day differs between urban and rural communities. Student must also correctly explain that at α = 0.01, since p-value ≈ 0.018 > 0.01, we would fail to reject H₀ and the conclusion would change - there would no longer be sufficient evidence of a difference, illustrating that the conclusion depends on the chosen significance level."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly states H₀ and Hₐ using two-proportion notation and verifies all three conditions (random, 10% independence, large counts with pooled proportion) with numerical support.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "H₀: p_urban = p_rural",
          "Hₐ: p_urban ≠ p_rural",
          "two-sided test",
          "null hypothesis difference equals zero",
          "alternative hypothesis",
          "random sample condition",
          "10% condition",
          "large counts condition",
          "pooled proportion",
          "p̂_c equals 162 divided by 330",
          "np̂_c at least 10",
          "n(1 minus p̂_c) at least 10",
          "independence condition",
          "normal approximation justified",
          "both samples random"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly computes pooled proportion, individual sample proportions, standard error, test statistic z ≈ 2.36, and two-tailed p-value ≈ 0.018 with work shown.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "pooled proportion",
          "p̂_c equals 162 divided by 330",
          "p̂_urban equals 0.55",
          "p̂_rural equals 0.42",
          "standard error of difference in proportions",
          "z equals 2.36",
          "z-statistic formula",
          "two-tailed p-value",
          "p-value approximately 0.018",
          "test statistic",
          "two-proportion z-test",
          "square root of pooled variance formula",
          "difference in sample proportions",
          "1 over n1 plus 1 over n2",
          "show work"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "States correct conclusion at α = 0.05 (reject H₀, sufficient evidence of a difference in context), and correctly explains that at α = 0.01 the conclusion would change to fail to reject H₀ because p-value > 0.01.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "reject H₀",
          "sufficient evidence",
          "proportion of social media users differs",
          "urban and rural teenagers",
          "p-value less than 0.05",
          "alpha equals 0.05",
          "alpha equals 0.01",
          "fail to reject H₀",
          "p-value greater than 0.01",
          "conclusion changes",
          "chosen significance level affects conclusion",
          "statistically significant at 0.05",
          "not statistically significant at 0.01",
          "context of study",
          "0.018 compared to alpha"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u7_frq037",
    "subject": "apstats",
    "frqType": "short",
    "title": "One-Sample t-Interval for Mean Sleep Duration",
    "units": [
      7
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school nurse wants to estimate the average number of hours of sleep per night for students at a large high school. She randomly selects 20 students and records their self-reported nightly sleep hours. The sample mean is x̄ = 6.8 hours with a sample standard deviation of s = 1.2 hours. Assume the population of sleep hours is approximately normally distributed.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Identify",
        "question": "Identify the appropriate inference procedure the nurse should use and state the conditions required to use it.",
        "rubric": "Student earns the point by naming a one-sample t-interval for a population mean and listing the three required conditions: random sample, normality (population normal or n ≥ 30), and independence (population at least 10n)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate a 95% confidence interval for the true mean nightly sleep hours of students at this school. Use t* = 2.093 for 19 degrees of freedom.",
        "rubric": "Student earns the point by correctly computing the interval: x̄ ± t*(s/√n) = 6.8 ± 2.093(1.2/√20) = 6.8 ± 0.562, giving approximately (6.238, 7.362). Accept equivalent correct calculations with minor rounding."
      },
      {
        "label": "c",
        "command": "Interpret",
        "question": "Interpret the 95% confidence interval calculated in part (b) in the context of this problem.",
        "rubric": "Student earns the point by stating they are 95% confident that the true mean nightly sleep hours for all students at this high school is between approximately 6.24 and 7.36 hours. Must include reference to 95% confident, true mean or population mean, and context (sleep hours / students at this school)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly identifies a one-sample t-interval for the population mean and states all three required conditions (random, normal/large sample, independence).",
        "partLabel": "a",
        "skill": "identify",
        "keywords": [
          "one-sample t-interval",
          "one sample t interval",
          "t-interval for mean",
          "t-interval for population mean",
          "random sample",
          "normality condition",
          "population normal",
          "approximately normal",
          "independence condition",
          "10n condition",
          "population at least 10 times sample",
          "degrees of freedom 19",
          "n equals 20",
          "large high school population"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies the formula x̄ ± t*(s/√n) using t* = 2.093 and n = 20 to produce an interval of approximately (6.238, 7.362).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "x-bar",
          "x̄",
          "t-star",
          "t*",
          "s divided by square root of n",
          "s/√n",
          "standard error",
          "2.093",
          "6.238",
          "7.362",
          "6.24 to 7.36",
          "margin of error",
          "0.562",
          "1.2 divided by square root of 20",
          "19 degrees of freedom"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Provides a correct contextual interpretation: 95% confident the true mean nightly sleep hours for all students at this high school falls between approximately 6.24 and 7.36 hours.",
        "partLabel": "c",
        "skill": "interpret",
        "keywords": [
          "95% confident",
          "95 percent confident",
          "true mean",
          "population mean",
          "sleep hours",
          "students at this school",
          "between 6.24 and 7.36",
          "all students at this high school",
          "nightly sleep",
          "confidence interval interpretation",
          "plausible values",
          "repeated sampling"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u7_frq038",
    "subject": "apstats",
    "frqType": "short",
    "title": "Paired t-Test for Reading Scores Before and After Tutoring",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A literacy program coordinator wants to know whether a six-week tutoring program improves students' reading scores. Eight randomly selected 4th-grade students took a standardized reading test before and after the program. The differences (After − Before) for each student were recorded, yielding a sample mean difference of x̄_d = 4.5 points and a sample standard deviation of differences s_d = 3.6 points. The coordinator will test at the α = 0.05 significance level. Assume the distribution of differences is approximately normal.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "State",
        "question": "State the appropriate null and alternative hypotheses for this test using correct notation.",
        "rubric": "Student earns the point by correctly stating H0: μ_d = 0 and Ha: μ_d > 0, where μ_d represents the true mean difference (After − Before) in reading scores. Must use correct direction (greater than) and correct parameter notation."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the test statistic for this paired t-test and identify the degrees of freedom.",
        "rubric": "Student earns the point by correctly computing t = x̄_d / (s_d / √n) = 4.5 / (3.6 / √8) = 4.5 / 1.273 ≈ 3.53, with degrees of freedom = n − 1 = 7. Accept values between 3.53 and 3.54 with df = 7."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "The p-value associated with the test statistic in part (b) is approximately 0.005. State a conclusion in the context of this problem at α = 0.05.",
        "rubric": "Student earns the point by comparing p-value (0.005) to α (0.05), concluding that since p-value < α, they reject H0, and there is sufficient evidence that the tutoring program increases mean reading scores for 4th-grade students."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "States correct null and alternative hypotheses: H0: μ_d = 0 and Ha: μ_d > 0, with μ_d defined as the true mean difference in reading scores (After − Before).",
        "partLabel": "a",
        "skill": "state",
        "keywords": [
          "H0",
          "null hypothesis",
          "Ha",
          "alternative hypothesis",
          "mu_d",
          "μ_d",
          "mean difference",
          "true mean difference",
          "equal to zero",
          "greater than zero",
          "After minus Before",
          "paired difference",
          "one-sided test",
          "right-tailed test",
          "population mean difference"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates the paired t-test statistic as approximately t = 3.53 using t = x̄_d / (s_d / √n) and states degrees of freedom = 7.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "t-statistic",
          "test statistic",
          "x-bar d",
          "x̄_d",
          "s_d",
          "standard error of differences",
          "square root of n",
          "√8",
          "3.53",
          "degrees of freedom",
          "df = 7",
          "n minus 1",
          "paired t-test",
          "4.5 divided by 1.273",
          "sample size 8"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly compares p-value (0.005) to α (0.05), rejects H0, and concludes there is sufficient evidence that the tutoring program increases mean reading scores in context.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "p-value",
          "0.005",
          "alpha",
          "α = 0.05",
          "p-value less than alpha",
          "reject H0",
          "reject null hypothesis",
          "sufficient evidence",
          "tutoring program increases reading scores",
          "mean reading scores improved",
          "statistically significant",
          "4th-grade students",
          "six-week tutoring program"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u7_frq039",
    "subject": "apstats",
    "frqType": "short",
    "title": "One-Sample t-Test: Sleep Duration in College Students",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A university health center claims that college students sleep an average of 7 hours per night. A student researcher believes the true mean sleep duration is less than 7 hours. She randomly selects 22 college students and records their nightly sleep hours. The sample produces a mean of x̄ = 6.4 hours and a standard deviation of s = 1.3 hours. Assume the distribution of sleep hours is approximately normal.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "State",
        "question": "State the appropriate null and alternative hypotheses for this test. Define any parameters you use.",
        "rubric": "Student states H0: μ = 7 and Ha: μ < 7, where μ is the true mean nightly sleep duration (in hours) for college students."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the test statistic and p-value for this test.",
        "rubric": "Student correctly computes t = (6.4 - 7) / (1.3 / √22) ≈ -2.17 with 21 degrees of freedom, and reports a p-value of approximately 0.021."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Using α = 0.05, state a conclusion in the context of the problem. Justify your answer using the p-value.",
        "rubric": "Student compares p-value ≈ 0.021 to α = 0.05, concludes that since p-value < alpha we reject H0, and interprets in context: there is convincing statistical evidence that the true mean nightly sleep duration for college students is less than 7 hours."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly states both hypotheses with parameter defined. H0: μ = 7 and Ha: μ < 7 with μ defined as the true mean sleep hours for college students.",
        "partLabel": "a",
        "skill": "state",
        "keywords": [
          "H0",
          "Ha",
          "null hypothesis",
          "alternative hypothesis",
          "mu",
          "μ = 7",
          "μ < 7",
          "true mean",
          "population mean",
          "one-sided",
          "left-tailed",
          "sleep duration",
          "parameter defined",
          "nightly sleep hours",
          "college students",
          "less than 7",
          "symbolic notation",
          "hypotheses in symbols"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates t-test statistic using t = (x̄ - μ0) / (s / √n) and identifies correct p-value using t-distribution with 21 degrees of freedom.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "t-statistic",
          "test statistic",
          "t = -2.17",
          "-2.17",
          "degrees of freedom",
          "df = 21",
          "21 degrees of freedom",
          "p-value",
          "0.021",
          "t-distribution",
          "standard error",
          "s divided by square root n",
          "1.3 divided by sqrt 22",
          "one-sample t-test",
          "sample mean minus null value",
          "x-bar minus mu-naught",
          "n = 22",
          "s = 1.3"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly compares p-value to alpha = 0.05, rejects H0, and states conclusion in context about mean sleep duration being less than 7 hours.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "reject H0",
          "reject null",
          "p-value less than alpha",
          "p-value < 0.05",
          "alpha = 0.05",
          "convincing evidence",
          "statistically significant",
          "true mean sleep",
          "less than 7 hours",
          "in context",
          "sufficient evidence",
          "since p-value < alpha",
          "conclusion in context",
          "population mean sleep duration",
          "college students sleep"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u7_frq040",
    "subject": "apstats",
    "frqType": "short",
    "title": "Paired t-Interval: Blood Pressure Before and After Meditation",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A wellness clinic conducted a study to investigate whether a 6-week meditation program reduces systolic blood pressure. Fifteen adult volunteers had their systolic blood pressure (in mmHg) recorded before and after completing the program. The differences (before − after) for the 15 participants yielded a sample mean of d̄ = 8.2 mmHg and a sample standard deviation of sd = 5.6 mmHg. A dotplot of the differences shows no strong skewness and no outliers.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Explain why a paired t-interval is more appropriate than a two-sample t-interval for this study.",
        "rubric": "Student explains that the two measurements (before and after) come from the same subjects, making the data paired/dependent rather than independent, and that using paired differences removes individual variability, making the paired t-interval more appropriate."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate a 95% confidence interval for the true mean difference in systolic blood pressure (before − after). Show your work.",
        "rubric": "Student uses the formula d̄ ± t* × (sd / √n) with df = 14, t* ≈ 2.145, and correctly computes 8.2 ± 2.145 × (5.6 / √15) ≈ 8.2 ± 3.10, yielding the interval (5.10, 11.30)."
      },
      {
        "label": "c",
        "command": "Describe",
        "question": "Interpret the confidence interval from part (b) in the context of this study.",
        "rubric": "Student states that they are 95% confident that the true mean decrease in systolic blood pressure after the 6-week meditation program is between approximately 5.10 and 11.30 mmHg, interpreted in context with correct reference to the population mean difference."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly identifies that measurements are taken on the same subjects (paired/dependent data) and explains that pairing controls for individual variability, justifying use of paired t-procedure.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "paired",
          "same subjects",
          "dependent",
          "not independent",
          "individual variability",
          "before and after",
          "matched pairs",
          "controls for",
          "paired differences",
          "two measurements per subject",
          "paired t-interval",
          "paired t-procedure",
          "removes subject-to-subject variability",
          "repeated measures",
          "same individual measured twice",
          "natural pairing"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correct calculation of paired t-interval using d̄ ± t* × (sd/√n) with df = 14, t* ≈ 2.145, yielding approximately (5.10, 11.30).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "d-bar",
          "d̄ = 8.2",
          "t*",
          "critical value",
          "2.145",
          "df = 14",
          "14 degrees of freedom",
          "sd = 5.6",
          "n = 15",
          "standard error",
          "5.6 divided by sqrt 15",
          "confidence interval",
          "(5.10, 11.30)",
          "8.2 ± 3.10",
          "margin of error",
          "paired t-interval formula",
          "sd over square root n"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correct interpretation: 95% confident the true mean decrease in systolic blood pressure is between approximately 5.10 and 11.30 mmHg, stated in context.",
        "partLabel": "c",
        "skill": "describe",
        "keywords": [
          "95% confident",
          "95 percent confident",
          "true mean difference",
          "population mean difference",
          "systolic blood pressure",
          "decrease",
          "between 5.10 and 11.30",
          "mmHg",
          "in context",
          "meditation program",
          "plausible values",
          "capture the true mean",
          "before minus after",
          "6-week program",
          "mean reduction in blood pressure",
          "all values positive"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u7_frq041",
    "subject": "apstats",
    "frqType": "short",
    "title": "Paired T-Test: Sleep Deprivation and Reaction Time",
    "units": [
      7
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A sleep researcher recruited 12 college students to investigate whether sleep deprivation increases reaction time. Each student completed a standardized reaction-time task (measured in milliseconds) after a full night of sleep (8 hours) and again after a night of sleep deprivation (4 hours or fewer), with the order randomly assigned and a one-week washout period between sessions. The differences (deprived minus rested) for the 12 students had a mean of d̄ = 18.3 ms and a standard deviation of s_d = 11.7 ms. A dotplot of the 12 differences showed a roughly symmetric distribution with no outliers.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "A classmate suggests using a two-sample t-test instead of a paired t-test for this study. Explain why the paired t-test is the correct procedure here, and identify the specific design feature that makes pairing appropriate.",
        "rubric": "Earns full credit for explaining that the two measurements (rested and deprived) come from the same subject, making the observations dependent/not independent across groups, and identifying that the within-subject (repeated measures) design is what requires pairing. Must reference that pairing controls for individual variability in baseline reaction time."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "State the null and alternative hypotheses for this test using appropriate notation, then calculate the t-test statistic. Show your work.",
        "rubric": "Earns full credit for correctly stating H0: μ_d = 0 and Ha: μ_d > 0 (or equivalent directional hypothesis in context), AND computing t = d̄ / (s_d / √n) = 18.3 / (11.7 / √12) = 18.3 / 3.378 ≈ 5.42. Must show substitution. Minor arithmetic errors may still earn credit if process is correct."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "The p-value for this test is less than 0.001. State a conclusion in the context of this study at the α = 0.05 significance level, and explain what it would mean if a Type I error were committed here.",
        "rubric": "Earns full credit for rejecting H0 because p-value < α = 0.05 AND stating in context that there is convincing evidence the mean reaction time is greater after sleep deprivation than after full sleep, AND correctly explaining that a Type I error would mean concluding sleep deprivation increases reaction time when it actually does not (false positive / rejecting a true null hypothesis)."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly justifies use of paired t-test by identifying dependence of measurements within each subject and the within-subject repeated-measures design feature that controls for individual baseline differences.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "paired t-test",
          "same subject",
          "dependent observations",
          "not independent across groups",
          "repeated measures",
          "within-subject design",
          "controls for individual variability",
          "matched pairs",
          "two measurements per subject",
          "individual baseline differences",
          "correlated measurements",
          "pairing reduces variability"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "States correct hypotheses H0: μ_d = 0 and Ha: μ_d > 0 and correctly calculates t-statistic ≈ 5.42 using t = d-bar divided by (s_d / sqrt(n)).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "H0: mu_d = 0",
          "Ha: mu_d > 0",
          "one-sided hypothesis",
          "t-statistic equals 5.42",
          "d-bar equals 18.3",
          "s_d equals 11.7",
          "sqrt(12)",
          "standard error of differences",
          "3.378",
          "paired t statistic formula",
          "test statistic calculation",
          "degrees of freedom 11"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly rejects H0 at alpha = 0.05 with contextual conclusion about sleep deprivation increasing reaction time, AND correctly identifies Type I error as concluding sleep deprivation increases reaction time when it truly does not.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "reject H0",
          "p-value less than 0.05",
          "alpha equals 0.05",
          "convincing evidence",
          "mean reaction time greater after sleep deprivation",
          "Type I error",
          "false positive",
          "rejecting a true null hypothesis",
          "sleep deprivation does not actually increase reaction time",
          "significance level",
          "p-value less than 0.001",
          "conclusion in context"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u7_frq042",
    "subject": "apstats",
    "frqType": "short",
    "title": "Two-Sample T-Interval: Commute Times by Transportation Mode",
    "units": [
      7
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A city transportation authority randomly sampled commuters who use either the subway or the bus as their primary mode of transportation. For the 35 subway commuters sampled, the mean one-way commute time was x̄₁ = 41.2 minutes with a standard deviation of s₁ = 9.8 minutes. For the 40 bus commuters sampled, the mean one-way commute time was x̄₂ = 48.7 minutes with a standard deviation of s₂ = 14.3 minutes. The transportation authority wants to estimate the true difference in mean commute times (subway minus bus) using a 95% confidence interval. A histogram of each sample showed moderate right skew with no extreme outliers.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Justify",
        "question": "Before constructing the interval, a student checks the conditions for inference. The student states: 'Because both histograms are right-skewed, the Normal condition is not met and we cannot proceed.' Critique this statement. Are the conditions for a two-sample t-interval met? Explain your reasoning fully.",
        "rubric": "Earns full credit for correctly disagreeing with the student's claim and explaining that the Central Limit Theorem applies because both sample sizes are large (n₁ = 35 ≥ 30 and n₂ = 40 ≥ 30), so the sampling distributions of the sample means are approximately Normal regardless of skew in the population. Must also address independence (random samples, and both samples are less than 10% of city commuters) and that the two groups are independent of each other."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using a t* critical value of 1.995 (based on the conservative degrees of freedom), calculate the 95% confidence interval for the difference in mean commute times (subway minus bus). Show your work.",
        "rubric": "Earns full credit for correctly computing the interval using (x̄₁ - x̄₂) ± t* × √(s₁²/n₁ + s₂²/n₂) = (41.2 - 48.7) ± 1.995 × √(9.8²/35 + 14.3²/40) = -7.5 ± 1.995 × √(2.744 + 5.1125) = -7.5 ± 1.995 × 2.802 ≈ -7.5 ± 5.59, giving interval approximately (-13.09, -1.91). Must show substitution into correct standard error formula."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Interpret the confidence interval you calculated in part (b) in context, and explain what the fact that the entire interval is negative tells the transportation authority about subway versus bus commute times.",
        "rubric": "Earns full credit for a correct interpretation stating that we are 95% confident that the true mean commute time for subway commuters is between approximately 1.91 and 13.09 minutes less than the true mean commute time for bus commuters, AND explaining that because the entire interval is negative (or equivalently, does not contain zero), this provides convincing evidence that the mean subway commute time is shorter than the mean bus commute time."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly critiques the student's claim by invoking the Central Limit Theorem for large sample sizes (n1=35, n2=40), and confirms all conditions (random, 10% condition, independence of groups, Normal/Large Sample) are met.",
        "partLabel": "a",
        "skill": "justify",
        "keywords": [
          "Central Limit Theorem",
          "large sample sizes",
          "n1 equals 35",
          "n2 equals 40",
          "approximately Normal sampling distribution",
          "random sample condition",
          "10% condition",
          "independent groups",
          "skewness does not invalidate Normal condition",
          "CLT applies for n at least 30",
          "two-sample t-interval conditions met",
          "population at least 10 times sample size"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly calculates two-sample t-interval as approximately (-13.09, -1.91) using (x̄₁ - x̄₂) ± t* × sqrt(s₁²/n₁ + s₂²/n₂) with t* = 1.995.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "two-sample t-interval",
          "x-bar1 minus x-bar2 equals negative 7.5",
          "pooled standard error",
          "sqrt(s1 squared over n1 plus s2 squared over n2)",
          "standard error equals 2.802",
          "t* equals 1.995",
          "interval approximately negative 13.09 to negative 1.91",
          "margin of error equals 5.59",
          "confidence interval formula",
          "9.8 squared divided by 35",
          "14.3 squared divided by 40"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Provides correct contextual interpretation of the interval and correctly explains that the entirely negative interval provides convincing evidence that mean subway commute time is shorter than mean bus commute time.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "95% confident",
          "true mean difference in commute times",
          "subway mean commute between 1.91 and 13.09 minutes shorter than bus",
          "interval does not contain zero",
          "entire interval is negative",
          "convincing evidence subway mean less than bus mean",
          "plausible values for true difference",
          "statistically significant difference in means",
          "population mean commute times",
          "difference subway minus bus"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u8_frq043",
    "subject": "apstats",
    "frqType": "short",
    "title": "Chi-Square Goodness of Fit: Candy Color Distribution",
    "units": [
      8
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A candy company claims that its bags of mixed fruit chews are produced so that 20% are strawberry, 20% are grape, 20% are cherry, 20% are lemon, and 20% are orange. A student randomly selects one bag containing 100 candies and counts the following: strawberry = 18, grape = 26, cherry = 17, lemon = 22, orange = 17. The student wants to test whether the color distribution matches the company's claimed proportions at the α = 0.05 significance level.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the expected count for each candy color if the company's claimed distribution is correct.",
        "rubric": "Earns 1 point for correctly computing each expected count as n × p = 100 × 0.20 = 20 for all five colors."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "State the null and alternative hypotheses for this chi-square goodness-of-fit test.",
        "rubric": "Earns 1 point for correctly stating H0: the distribution of candy colors follows the company's claimed proportions (each color is 20%) and Ha: the distribution of candy colors does not follow the company's claimed proportions."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the chi-square test statistic for this data. Show your work.",
        "rubric": "Earns 1 point for correctly applying the formula χ² = Σ(observed − expected)²/expected and arriving at χ² = (18−20)²/20 + (26−20)²/20 + (17−20)²/20 + (22−20)²/20 + (17−20)²/20 = 0.2 + 1.8 + 0.45 + 0.2 + 0.45 = 3.1."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates all five expected counts as 20 using expected count = n times p = 100 times 0.20.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "expected count",
          "n times p",
          "100 times 0.20",
          "20 per category",
          "each expected count is 20",
          "expected = np",
          "claimed proportion",
          "0.20",
          "equal proportions",
          "100 candies",
          "five categories",
          "uniform distribution"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly states H0 that the distribution matches claimed proportions (each 20%) and Ha that it does not.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "H0",
          "Ha",
          "null hypothesis",
          "alternative hypothesis",
          "distribution matches",
          "claimed proportions",
          "does not follow",
          "each color is 20%",
          "goodness of fit",
          "chi-square goodness of fit",
          "population distribution",
          "at least one proportion differs"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly applies chi-square formula and computes χ² = 3.1.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "chi-square statistic",
          "chi-squared",
          "χ²",
          "observed minus expected squared divided by expected",
          "(O-E)^2/E",
          "3.1",
          "chi-square test statistic",
          "Σ(O−E)²/E",
          "sum of squared deviations",
          "observed count",
          "expected count",
          "each term"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u8_frq044",
    "subject": "apstats",
    "frqType": "short",
    "title": "Chi-Square Test of Independence: Study Habits and Grade Level",
    "units": [
      8
    ],
    "difficulty": "easy",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school counselor surveyed a random sample of 200 high school students to investigate whether study habit preference (studying alone vs. studying in a group) is associated with grade level (underclassman: grades 9-10 vs. upperclassman: grades 11-12). The results are shown in the two-way table below.\n\n|                  | Study Alone | Study in Group | Row Total |\n|------------------|-------------|----------------|-----------|\n| Underclassman    |     48      |       52       |    100    |\n| Upperclassman    |     72      |       28       |    100    |\n| Column Total     |    120      |       80       |    200    |\n\nThe counselor wants to determine at the α = 0.05 significance level whether study habit preference and grade level are independent.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "State the null and alternative hypotheses for this chi-square test of independence.",
        "rubric": "Earns 1 point for correctly stating H0: study habit preference and grade level are independent (there is no association) and Ha: study habit preference and grade level are not independent (there is an association)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the expected count for underclassmen who prefer to study alone. Show your work.",
        "rubric": "Earns 1 point for correctly using the formula expected count = (row total × column total) / table total = (100 × 120) / 200 = 60."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A chi-square test of independence requires that all expected counts be at least 5. Using your answer from part (b) and the structure of the table, justify whether this condition is satisfied for the entire table.",
        "rubric": "Earns 1 point for verifying that all four expected counts are at least 5: underclassman/alone = 60, underclassman/group = 40, upperclassman/alone = 60, upperclassman/group = 40, and explicitly stating the condition is satisfied because all expected counts are greater than or equal to 5."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly states H0 that study habit and grade level are independent and Ha that they are not independent (association exists).",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "H0",
          "Ha",
          "null hypothesis",
          "alternative hypothesis",
          "independent",
          "not independent",
          "no association",
          "association exists",
          "study habit preference",
          "grade level",
          "chi-square test of independence",
          "two categorical variables",
          "relationship between variables"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly computes expected count for underclassmen/study alone cell as (row total × column total) / table total = (100 × 120) / 200 = 60.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "expected count",
          "row total times column total divided by table total",
          "(100)(120)/200",
          "60",
          "expected = (row total × column total) / n",
          "cell expected count",
          "formula for expected count",
          "100 times 120",
          "divide by 200",
          "marginal totals",
          "two-way table",
          "joint frequency under independence"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Verifies all four expected counts (60, 40, 60, 40) are at least 5 and concludes the condition is met.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "all expected counts at least 5",
          "expected counts greater than 5",
          "condition satisfied",
          "60",
          "40",
          "large counts condition",
          "all cells",
          "expected count condition",
          "chi-square condition",
          "none less than 5",
          "four expected counts",
          "underclassman group",
          "upperclassman alone"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u8_frq045",
    "subject": "apstats",
    "frqType": "short",
    "title": "Chi-Square Goodness of Fit: M&M Color Distribution",
    "units": [
      8
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A candy manufacturer claims that its bags of colored candies contain colors in the following proportions: 30% red, 20% orange, 20% yellow, 15% green, and 15% blue. A statistics student randomly selects a large bag and counts the following observed frequencies: red = 58, orange = 34, yellow = 42, green = 25, blue = 41. The total number of candies in the sample is 200. The student wants to determine whether the data provide convincing evidence that the actual color distribution differs from the manufacturer's claimed distribution. Use α = 0.05.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the expected count for each color category based on the manufacturer's claimed proportions and a sample size of 200.",
        "rubric": "Student earns the point by correctly computing all five expected counts: red = 0.30 × 200 = 60, orange = 0.20 × 200 = 40, yellow = 0.20 × 200 = 40, green = 0.15 × 200 = 30, blue = 0.15 × 200 = 30."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "State the null and alternative hypotheses for this test, and verify that the conditions for performing a chi-square goodness-of-fit test are met.",
        "rubric": "Student earns the point by stating H0: the color distribution follows the manufacturer's claimed proportions (30% red, 20% orange, 20% yellow, 15% green, 15% blue) and Ha: at least one proportion differs from the claimed distribution; AND verifying that the sample is random, observations are independent, and all expected counts are at least 5 (all expected counts of 60, 40, 40, 30, 30 are ≥ 5)."
      },
      {
        "label": "c",
        "command": "Calculate",
        "question": "Calculate the chi-square test statistic and identify the degrees of freedom for this test.",
        "rubric": "Student earns the point by correctly computing χ² = (58−60)²/60 + (34−40)²/40 + (42−40)²/40 + (25−30)²/30 + (41−30)²/30 = 0.067 + 0.900 + 0.100 + 0.833 + 4.033 ≈ 5.93, and identifying degrees of freedom = number of categories − 1 = 5 − 1 = 4."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates all five expected counts by multiplying each claimed proportion by the total sample size of 200: red = 60, orange = 40, yellow = 40, green = 30, blue = 30.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "expected count",
          "expected counts",
          "expected frequency",
          "claimed proportion",
          "multiply by n",
          "proportion times sample size",
          "60",
          "40",
          "30",
          "n times p",
          "np",
          "hypothesized proportion",
          "null proportion"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "States correct null hypothesis that the distribution matches claimed proportions and alternative that at least one proportion differs, AND verifies all three conditions: random sample, independence, and all expected counts ≥ 5.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "H0",
          "Ha",
          "null hypothesis",
          "alternative hypothesis",
          "at least one proportion differs",
          "claimed distribution",
          "random sample",
          "expected counts at least 5",
          "all expected counts ≥ 5",
          "independence",
          "chi-square goodness of fit",
          "conditions met",
          "10% condition",
          "large counts condition",
          "goodness-of-fit hypotheses"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly computes the chi-square test statistic as approximately 5.93 using the formula sum of (observed minus expected) squared divided by expected, and states degrees of freedom = 4.",
        "partLabel": "c",
        "skill": "calculate",
        "keywords": [
          "chi-square statistic",
          "chi-squared",
          "χ²",
          "(O − E)² / E",
          "observed minus expected",
          "squared divided by expected",
          "5.93",
          "degrees of freedom",
          "df = 4",
          "k minus 1",
          "categories minus 1",
          "sum of components",
          "chi-square components",
          "4.033"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u8_frq046",
    "subject": "apstats",
    "frqType": "short",
    "title": "Chi-Square Test of Independence: Sleep and Academic Performance",
    "units": [
      8
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school counselor surveyed 300 randomly selected high school students and recorded each student's self-reported nightly sleep category (Less than 6 hours, 6-8 hours, More than 8 hours) and their most recent semester GPA category (Below 2.5, 2.5-3.5, Above 3.5). The results are summarized in the two-way table below.\n\n|                  | Below 2.5 | 2.5-3.5 | Above 3.5 | Row Total |\n|------------------|-----------|---------|-----------|-----------|\n| Less than 6 hrs  |    42     |   38    |    10     |    90     |\n| 6-8 hours        |    28     |   72    |    40     |   140     |\n| More than 8 hrs  |    10     |   30    |    30     |    70     |\n| Column Total     |    80     |  140    |    80     |   300     |\n\nThe counselor wants to determine whether there is an association between sleep category and GPA category for high school students. Use α = 0.05.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the expected count for students who sleep less than 6 hours and have a GPA above 3.5. Show your work.",
        "rubric": "Student earns the point by correctly applying the expected count formula: expected count = (row total × column total) / table total = (90 × 80) / 300 = 7200 / 300 = 24."
      },
      {
        "label": "b",
        "command": "Explain",
        "question": "State the null and alternative hypotheses for the appropriate chi-square test, and name the type of chi-square test that should be used.",
        "rubric": "Student earns the point by correctly stating H0: there is no association between sleep category and GPA category (sleep and GPA are independent) and Ha: there is an association between sleep category and GPA category (sleep and GPA are not independent), AND identifying this as a chi-square test of independence."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "The chi-square test statistic for this table is χ² = 28.37 with a p-value of approximately 0.0001. Using α = 0.05, state a conclusion in the context of this problem.",
        "rubric": "Student earns the point by comparing p-value ≈ 0.0001 to α = 0.05, correctly rejecting H0 because p-value < α, and concluding in context that there is convincing statistical evidence of an association between sleep category and GPA category among high school students."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates the expected count for the Less than 6 hours / Above 3.5 cell using (row total × column total) / table total = (90 × 80) / 300 = 24.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "expected count",
          "expected frequency",
          "row total times column total",
          "divided by table total",
          "divided by n",
          "(90 × 80) / 300",
          "7200 / 300",
          "24",
          "expected cell count",
          "row marginal",
          "column marginal",
          "marginal totals",
          "expected value formula"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "States H0 that sleep and GPA are independent (no association) and Ha that there is an association between sleep and GPA, AND correctly names the chi-square test of independence.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "H0",
          "Ha",
          "null hypothesis",
          "alternative hypothesis",
          "no association",
          "are independent",
          "association exists",
          "not independent",
          "chi-square test of independence",
          "independence test",
          "two-way table",
          "categorical variables",
          "sleep and GPA independent",
          "test of independence hypotheses"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Compares p-value of 0.0001 to α = 0.05, rejects the null hypothesis because p-value < alpha, and concludes there is convincing evidence of an association between sleep category and GPA category in context.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "p-value less than alpha",
          "p-value < 0.05",
          "reject H0",
          "reject the null",
          "convincing evidence",
          "statistically significant",
          "association between sleep and GPA",
          "alpha = 0.05",
          "0.0001 < 0.05",
          "conclude in context",
          "evidence of association",
          "fail to support independence",
          "sufficient evidence"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u8_frq047",
    "subject": "apstats",
    "frqType": "short",
    "title": "Genetics Ratios and Chi-Square Goodness of Fit",
    "units": [
      8
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A biology researcher is studying inheritance patterns in pea plants. According to Mendelian genetics, when two heterozygous parents are crossed, the offspring should appear in a 9:3:3:1 ratio for four phenotype categories: Round-Yellow, Round-Green, Wrinkled-Yellow, and Wrinkled-Green. The researcher grows 320 offspring plants and observes the following counts: Round-Yellow = 172, Round-Green = 52, Wrinkled-Yellow = 63, Wrinkled-Green = 33. The researcher wants to determine whether the observed distribution of phenotypes is consistent with the expected 9:3:3:1 Mendelian ratio at the α = 0.05 significance level.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the expected count for each phenotype category under the 9:3:3:1 Mendelian ratio. Then verify that the conditions for a chi-square goodness-of-fit test are met.",
        "rubric": "Student correctly calculates expected counts: Round-Yellow = (9/16)(320) = 180, Round-Green = (3/16)(320) = 60, Wrinkled-Yellow = (3/16)(320) = 60, Wrinkled-Green = (1/16)(320) = 20. Student states that all expected counts are at least 5 (condition met) and that the 320 plants can be treated as independent observations (random/independent condition)."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "State the hypotheses for this test and compute the chi-square test statistic.",
        "rubric": "Student states H0: the distribution of pea plant phenotypes follows the 9:3:3:1 Mendelian ratio and Ha: the distribution does not follow the 9:3:3:1 ratio. Student correctly computes chi-square statistic: χ² = (172−180)²/180 + (52−60)²/60 + (63−60)²/60 + (33−20)²/20 = 0.356 + 1.067 + 0.150 + 8.450 = 10.022 (accept values between 9.9 and 10.1)."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Using the chi-square test statistic you calculated and 3 degrees of freedom, the p-value is approximately 0.018. State a conclusion in the context of this problem. Which phenotype category contributes most to the chi-square statistic, and what does this suggest about the deviation from Mendelian expectations?",
        "rubric": "Student states that because p-value ≈ 0.018 < α = 0.05, they reject H0 and conclude there is convincing statistical evidence that the distribution of pea plant phenotypes does not follow the 9:3:3:1 Mendelian ratio. Student identifies Wrinkled-Green as the category contributing most to the chi-square statistic (component = 8.45) and notes that more Wrinkled-Green plants were observed (33) than expected (20), suggesting a larger-than-expected deviation from Mendelian predictions for that category."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates all four expected counts using the 9:3:3:1 ratio and total n = 320, AND verifies that all expected counts are at least 5 and that observations are independent.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "expected count",
          "expected counts",
          "9/16 times 320",
          "3/16 times 320",
          "1/16 times 320",
          "180",
          "60",
          "20",
          "all expected counts at least 5",
          "large counts condition",
          "independent observations",
          "random sample condition",
          "goodness-of-fit conditions",
          "condition met",
          "each expected count at least 5"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "States correct null and alternative hypotheses in context AND computes the chi-square test statistic correctly (approximately 10.02).",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "H0",
          "Ha",
          "null hypothesis",
          "alternative hypothesis",
          "9:3:3:1 ratio",
          "Mendelian ratio",
          "distribution follows",
          "does not follow",
          "chi-square statistic",
          "chi-square test statistic",
          "(observed minus expected) squared divided by expected",
          "sum of squared differences over expected",
          "10.02",
          "10.0",
          "degrees of freedom 3",
          "df equals 3",
          "four categories minus one"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly rejects H0 using p-value < alpha = 0.05, states conclusion in context, identifies Wrinkled-Green as the largest contributing component (8.45), and interprets what this means about the deviation.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "reject H0",
          "reject the null",
          "p-value 0.018",
          "p-value less than alpha",
          "alpha equals 0.05",
          "convincing statistical evidence",
          "does not follow 9:3:3:1",
          "Wrinkled-Green",
          "largest chi-square component",
          "component 8.45",
          "observed greater than expected",
          "33 observed",
          "20 expected",
          "greatest deviation from expected",
          "statistically significant",
          "conclusion in context",
          "distribution of phenotypes"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u8_frq048",
    "subject": "apstats",
    "frqType": "short",
    "title": "Screen Time and Sleep Quality: Chi-Square Test of Homogeneity",
    "units": [
      8
    ],
    "difficulty": "hard",
    "autoGraded": true,
    "points": 3,
    "prompt": "A public health researcher randomly and independently sampled 150 teenagers from three distinct populations: those who report low daily screen time (under 2 hours), moderate screen time (2-5 hours), and high screen time (over 5 hours). Each teenager was asked to classify their sleep quality as either 'Good' or 'Poor.' The results are shown in the table below.\n\n| Sleep Quality | Low Screen Time | Moderate Screen Time | High Screen Time | Row Total |\n|---|---|---|---|---|\n| Good | 38 | 29 | 13 | 80 |\n| Poor | 12 | 21 | 37 | 70 |\n| Column Total | 50 | 50 | 50 | 150 |\n\nThe researcher wants to determine whether the distribution of sleep quality is the same across the three screen time populations at the α = 0.05 significance level.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Explain",
        "question": "Explain why a chi-square test of homogeneity, rather than a chi-square test of independence, is the appropriate procedure for this study. Include in your explanation a statement of the null and alternative hypotheses.",
        "rubric": "Student explains that a test of homogeneity is appropriate because the researcher drew separate independent random samples from three pre-defined populations (low, moderate, high screen time groups), rather than a single sample cross-classified on two variables. H0: the distribution of sleep quality (Good/Poor) is the same across all three screen time populations. Ha: the distribution of sleep quality is not the same for at least one screen time population."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the expected count for teenagers with 'Good' sleep quality in the High Screen Time group. Then calculate the contribution of this cell to the chi-square test statistic.",
        "rubric": "Expected count = (row total × column total) / grand total = (80 × 50) / 150 = 26.67. Chi-square component for this cell = (observed − expected)² / expected = (13 − 26.67)² / 26.67 = (−13.67)² / 26.67 = 186.87 / 26.67 ≈ 7.01. Accept values between 6.9 and 7.1."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "The overall chi-square test statistic for this table is approximately 21.43 with 2 degrees of freedom, yielding a p-value less than 0.001. State a conclusion and justify whether the cell you computed in part (b) provides meaningful evidence about which group is most responsible for any detected difference.",
        "rubric": "Student states that because p-value < 0.001 < α = 0.05, they reject H0 and conclude there is convincing statistical evidence that the distribution of sleep quality is not the same across all three screen time populations. Student notes that the Good/High Screen Time cell contributes approximately 7.01 out of 21.43 (roughly 33%) of the total chi-square statistic, indicating that teenagers with high screen time having far fewer good sleep outcomes than expected (13 observed vs. 26.67 expected) is a primary driver of the significant result."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly distinguishes test of homogeneity from test of independence by referencing separate independent samples from pre-defined populations, AND states correct null and alternative hypotheses in context.",
        "partLabel": "a",
        "skill": "explain",
        "keywords": [
          "test of homogeneity",
          "homogeneity",
          "separate independent samples",
          "three pre-defined populations",
          "independently sampled",
          "not a single sample",
          "multiple populations sampled separately",
          "H0",
          "Ha",
          "null hypothesis",
          "alternative hypothesis",
          "distribution of sleep quality is the same",
          "not the same across all populations",
          "at least one population differs",
          "test of independence vs homogeneity distinction"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly computes expected count for Good/High Screen Time cell as 26.67 using (row total × column total) / grand total, AND correctly computes chi-square component as approximately 7.01.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "expected count",
          "row total times column total divided by grand total",
          "80 times 50 divided by 150",
          "26.67",
          "26.7",
          "expected cell count formula",
          "chi-square component",
          "cell contribution to chi-square",
          "observed minus expected squared divided by expected",
          "13 minus 26.67",
          "13.67 squared",
          "7.01",
          "7.0",
          "Good and High Screen Time cell",
          "single cell expected count"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Rejects H0 citing p-value < 0.001 < alpha = 0.05, states conclusion in context, AND uses the cell contribution from part (b) to justify which group most drives the significant result.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "reject H0",
          "reject the null hypothesis",
          "p-value less than 0.001",
          "p-value less than alpha",
          "alpha equals 0.05",
          "convincing statistical evidence",
          "distribution of sleep quality not the same across populations",
          "high screen time group",
          "7.01 out of 21.43",
          "largest single-cell contributor",
          "33 percent of total chi-square",
          "13 observed versus 26.67 expected",
          "fewer good sleep outcomes than expected",
          "primary driver of significant result",
          "conclusion in context of sleep quality and screen time"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u9_frq049",
    "subject": "apstats",
    "frqType": "short",
    "title": "Confidence Interval for Slope: Hours Studied and Exam Score",
    "units": [
      9
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A high school statistics teacher collected data from 20 students on the number of hours they studied for a final exam (x) and their exam score (y). A least-squares regression analysis was performed, and the following output was obtained:\n\nSlope (b1): 4.32\nStandard Error of Slope (SE_b1): 1.08\nIntercept (b0): 52.7\nt* for 95% confidence (df = 18): 2.101\n\nAssume all conditions for inference for slope are met.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate the t-statistic for the slope of the regression line.",
        "rubric": "Student earns full credit by correctly dividing the slope by the standard error of the slope: t = 4.32 / 1.08 = 4.00."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate a 95% confidence interval for the true slope of the regression line relating hours studied to exam score.",
        "rubric": "Student earns full credit by correctly applying the formula b1 ± t* × SE_b1 = 4.32 ± 2.101 × 1.08, arriving at the interval (2.05, 6.59) or equivalent correct calculation."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "Interpret the 95% confidence interval calculated in part (b) in the context of this study.",
        "rubric": "Student earns full credit by stating that we are 95% confident that the true slope (true population slope / beta_1) relating hours studied to exam score is between approximately 2.05 and 6.59 points per hour studied, with correct context referencing hours studied and exam score."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates the t-statistic as slope divided by standard error of slope: t = 4.32 / 1.08 = 4.00",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "t-statistic",
          "t statistic for slope",
          "slope divided by standard error",
          "4.32 / 1.08",
          "t = 4.00",
          "SE of slope",
          "standard error of slope",
          "b1 / SE_b1",
          "test statistic for regression slope",
          "observed t value"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly applies confidence interval formula b1 ± t* × SE_b1 to obtain interval (2.05, 6.59)",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "b1 ± t* SE",
          "4.32 ± 2.101 × 1.08",
          "confidence interval for slope",
          "2.05 to 6.59",
          "(2.05, 6.59)",
          "t* = 2.101",
          "df = 18",
          "degrees of freedom 18",
          "1.08 standard error",
          "margin of error for slope",
          "critical value times standard error"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly interprets the interval in context: 95% confident the true slope (population slope beta_1) for hours studied predicting exam score is between approximately 2.05 and 6.59 points per hour",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "95% confident",
          "true slope",
          "population slope",
          "beta_1",
          "hours studied",
          "exam score",
          "2.05 and 6.59",
          "points per hour",
          "plausible values for slope",
          "for each additional hour studied",
          "expected increase in exam score",
          "interval captures true slope"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u9_frq050",
    "subject": "apstats",
    "frqType": "short",
    "title": "Significance Test for Slope: Rainfall and Crop Yield",
    "units": [
      9
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "An agricultural researcher collected data from 25 farms to investigate whether annual rainfall (in inches) is a useful linear predictor of crop yield (in bushels per acre). A least-squares regression was performed and the following computer output was produced:\n\nPredictor     Coef    SE Coef    T       P\nConstant      18.4    5.21       3.53    0.002\nRainfall       2.15   0.94       2.29    0.032\n\nS = 6.87    R-Sq = 18.3%\n\nAssume all conditions for inference for slope are met. Use a significance level of α = 0.05.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Describe",
        "question": "State the null and alternative hypotheses for a significance test to determine whether annual rainfall is a useful linear predictor of crop yield.",
        "rubric": "Student earns full credit by correctly stating H0: β1 = 0 (there is no linear relationship between rainfall and crop yield) and Ha: β1 ≠ 0 (there is a linear relationship between rainfall and crop yield), using correct notation."
      },
      {
        "label": "b",
        "command": "Identify",
        "question": "Using the computer output, identify the t-statistic and p-value for the test of the slope, and state whether you would reject or fail to reject the null hypothesis at α = 0.05.",
        "rubric": "Student earns full credit by correctly identifying t = 2.29 and p-value = 0.032, then concluding to reject H0 because p-value 0.032 < α = 0.05."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "State a conclusion in the context of this study based on the result of the significance test.",
        "rubric": "Student earns full credit by concluding in context that there is sufficient statistical evidence that annual rainfall is a useful linear predictor of crop yield (i.e., the true slope β1 is not zero), referencing the rejection of H0 and the context of rainfall and crop yield."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly states H0: β1 = 0 and Ha: β1 ≠ 0 with correct notation and context",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "H0",
          "Ha",
          "beta_1 = 0",
          "β1 = 0",
          "β1 ≠ 0",
          "null hypothesis",
          "alternative hypothesis",
          "no linear relationship",
          "two-sided",
          "slope equals zero",
          "population slope",
          "rainfall and crop yield",
          "true slope of regression line"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly identifies t = 2.29 and p-value = 0.032, and correctly rejects H0 because p-value < alpha = 0.05",
        "partLabel": "b",
        "skill": "identify",
        "keywords": [
          "t = 2.29",
          "t-statistic 2.29",
          "p-value = 0.032",
          "p-value 0.032",
          "reject H0",
          "reject null hypothesis",
          "p-value less than alpha",
          "0.032 < 0.05",
          "alpha = 0.05",
          "significance level 0.05",
          "statistically significant at 0.05",
          "from computer output"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Correctly states conclusion in context: sufficient evidence that annual rainfall is a useful linear predictor of crop yield; true slope is not zero",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "sufficient evidence",
          "statistically significant",
          "rainfall is a useful linear predictor",
          "crop yield",
          "true slope is not zero",
          "β1 ≠ 0",
          "linear relationship between rainfall and crop yield",
          "reject null",
          "useful linear predictor",
          "in context of rainfall and crop yield",
          "evidence against null hypothesis",
          "annual rainfall predicts crop yield"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u9_frq051",
    "subject": "apstats",
    "frqType": "short",
    "title": "Confidence Interval for Slope: Screen Time and GPA",
    "units": [
      9
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A school psychologist collected data from a random sample of 24 high school students to investigate the relationship between daily screen time (in hours) and GPA (on a 4.0 scale). A least-squares regression analysis was performed with screen time as the explanatory variable and GPA as the response variable. The computer output is shown below.\n\nPredictor     Coef     SE Coef     T        P\nConstant      3.821    0.214       17.86    0.000\nScreenTime   -0.112    0.041       -2.73    0.012\n\nS = 0.387    R-Sq = 25.3%\n\nAssume all conditions for inference have been met.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Calculate a 95% confidence interval for the true slope of the population regression line relating daily screen time to GPA.",
        "rubric": "Student uses b1 ± t* × SE(b1) with b1 = -0.112, SE = 0.041, and t* ≈ 2.074 for df = 22 at 95% confidence, yielding approximately (-0.197, -0.027)."
      },
      {
        "label": "b",
        "command": "Interpret",
        "question": "Interpret the confidence interval calculated in part (a) in the context of this study.",
        "rubric": "Student provides a correct contextual interpretation of the confidence interval for the slope, referencing screen time, GPA, and the direction of the relationship."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Based on the confidence interval calculated in part (a), is there convincing evidence that daily screen time is a useful linear predictor of GPA? Justify your answer.",
        "rubric": "Student correctly states that because the interval does not contain zero, there is convincing evidence that the slope is not zero and that screen time is a useful linear predictor of GPA."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly calculates the 95% confidence interval using b1 = -0.112, SE(b1) = 0.041, and t* ≈ 2.074 (df = 22), arriving at approximately (-0.197, -0.027). Both endpoints must be correct or follow from a minor arithmetic error with correct setup.",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "confidence interval",
          "slope",
          "-0.112",
          "0.041",
          "t*",
          "2.074",
          "df = 22",
          "b1 ± t* SE",
          "-0.197",
          "-0.027",
          "degrees of freedom",
          "t-interval for slope",
          "least-squares slope",
          "standard error of slope",
          "n - 2",
          "critical value",
          "regression output",
          "estimated slope"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Correctly interprets the confidence interval in context: we are 95% confident that the true slope of the population regression line relating daily screen time to GPA is between -0.197 and -0.027, meaning each additional hour of screen time is associated with a decrease of between 0.027 and 0.197 GPA points on average.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "95% confident",
          "true slope",
          "population regression line",
          "screen time",
          "GPA",
          "decrease",
          "associated with",
          "each additional hour",
          "on average",
          "between -0.197 and -0.027",
          "negative slope",
          "plausible values",
          "interval estimate",
          "contextual interpretation",
          "high school students"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly concludes there is convincing evidence that screen time is a useful linear predictor of GPA because the entire confidence interval is below zero (does not contain zero), indicating the true slope is negative and significantly different from zero.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "does not contain zero",
          "zero not in interval",
          "convincing evidence",
          "slope not zero",
          "useful linear predictor",
          "negative relationship",
          "entirely below zero",
          "statistically significant",
          "GPA",
          "screen time",
          "reject null",
          "nonzero slope",
          "interval excludes zero",
          "linear association"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u9_frq052",
    "subject": "apstats",
    "frqType": "short",
    "title": "Significance Test for Slope: Fertilizer and Crop Yield",
    "units": [
      9
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "An agricultural researcher randomly assigned different amounts of nitrogen fertilizer (in pounds per acre) to 18 test plots and recorded the wheat yield (in bushels per acre) at the end of the growing season. A least-squares regression was performed with fertilizer amount as the explanatory variable and wheat yield as the response variable. The following information was obtained from the regression output:\n\nEstimated slope (b1) = 0.43\nStandard error of slope SE(b1) = 0.18\nSample size n = 18\n\nThe researcher wants to test whether there is a positive linear relationship between fertilizer amount and wheat yield at the α = 0.05 significance level. Assume all conditions for inference have been met.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "State",
        "question": "State the null and alternative hypotheses for the researcher's significance test. Define any parameters used.",
        "rubric": "Student correctly states H0: β1 = 0 and Ha: β1 > 0 (one-sided/one-tailed), and defines β1 as the true slope of the population regression line relating fertilizer amount to wheat yield."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Calculate the t-statistic for the significance test and find (or approximate) the p-value. State the degrees of freedom used.",
        "rubric": "Student correctly computes t = (0.43 - 0) / 0.18 = 2.39, states df = 16 (n - 2), and identifies the p-value as approximately 0.015 (one-tailed) or a value consistent with t = 2.39 and df = 16."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "Based on your p-value, state a conclusion in the context of this study using α = 0.05.",
        "rubric": "Student correctly compares the p-value to α = 0.05, rejects H0 because p-value < 0.05, and concludes there is convincing statistical evidence of a positive linear relationship between fertilizer amount and wheat yield."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Student correctly states H0: β1 = 0 and Ha: β1 > 0, uses correct notation β1 (beta sub 1), and defines β1 as the true slope (or true population slope) of the linear relationship between fertilizer amount and wheat yield.",
        "partLabel": "a",
        "skill": "describe",
        "keywords": [
          "H0",
          "Ha",
          "beta1",
          "β1 = 0",
          "β1 > 0",
          "null hypothesis",
          "alternative hypothesis",
          "true slope",
          "population regression slope",
          "one-sided",
          "fertilizer",
          "wheat yield",
          "positive linear relationship",
          "one-tailed test",
          "parameter definition",
          "true population slope",
          "right-tailed",
          "slope parameter"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Student correctly calculates t = (b1 - 0) / SE(b1) = 0.43 / 0.18 = 2.39, identifies degrees of freedom as df = n - 2 = 16, and states a p-value of approximately 0.015 (one-tailed t-distribution with df = 16) or a value clearly consistent with correct method.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "t-statistic",
          "t = 2.39",
          "0.43 divided by 0.18",
          "standard error of slope",
          "df = 16",
          "n - 2",
          "degrees of freedom",
          "p-value",
          "0.015",
          "one-tailed",
          "t-distribution",
          "test statistic",
          "estimated slope divided by SE",
          "t-test for slope",
          "upper-tail probability",
          "regression slope test"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Student correctly compares p-value ≈ 0.015 to α = 0.05, states that since p-value < α = 0.05 they reject H0, and concludes in context that there is convincing (statistically significant) evidence of a positive linear relationship between the amount of nitrogen fertilizer and wheat yield.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "reject H0",
          "p-value < 0.05",
          "alpha = 0.05",
          "statistically significant",
          "convincing evidence",
          "positive linear relationship",
          "fertilizer",
          "wheat yield",
          "reject the null",
          "sufficient evidence",
          "in context",
          "p-value less than significance level",
          "nitrogen fertilizer",
          "positive association",
          "conclusion in context"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u9_frq053",
    "subject": "apstats",
    "frqType": "short",
    "title": "Significance Test for Slope: Hours Studied and Exam Scores",
    "units": [
      9
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "A high school statistics teacher collected data from 24 students on the number of hours spent studying per week (x) and their score on a standardized exam (y). A least-squares regression analysis was performed and the following output was obtained:\n\n Predictor    Coef     SE Coef    T       P\n Constant    42.37     5.81      7.29   <0.001\n Hours        3.14     1.02      3.08    0.005\n\nS = 8.43    R-sq = 31.2%\n\nThe teacher wants to determine whether there is a statistically significant positive linear relationship between hours studied and exam score at the α = 0.05 significance level.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "State",
        "question": "State the null and alternative hypotheses for the significance test for the slope of the regression line. Define any parameters used.",
        "rubric": "Earns 1 point for correctly stating H0: β1 = 0 (no linear relationship between hours studied and exam score) and Ha: β1 > 0 (positive linear relationship), with β1 defined as the true slope of the population regression line relating hours studied to exam score."
      },
      {
        "label": "b",
        "command": "Calculate",
        "question": "Using the computer output, calculate the t-statistic for the slope and identify the p-value. Then state whether the result is statistically significant at α = 0.05, justifying your answer.",
        "rubric": "Earns 1 point for correctly identifying the t-statistic as t = 3.08 (or computing b1/SE = 3.14/1.02 ≈ 3.08), identifying the two-sided p-value = 0.005 from the output (noting that since Ha is one-sided, the one-sided p-value = 0.005/2 ≈ 0.0025), and correctly concluding that because p-value < α = 0.05, the result is statistically significant."
      },
      {
        "label": "c",
        "command": "Explain",
        "question": "A classmate argues that because R-squared is only 31.2%, the linear model is not useful and the test conclusion should be ignored. Explain why this reasoning is flawed in the context of a significance test for slope.",
        "rubric": "Earns 1 point for explaining that R-squared and the significance test for slope answer different questions: R-squared measures the proportion of variability in exam scores explained by hours studied (strength/fit of the model), while the significance test determines whether the true slope β1 is different from zero (existence of a linear relationship). A statistically significant slope only means there is evidence of a real linear relationship in the population, not that the model explains a large proportion of variance. Both can coexist: a weak but real linear relationship is still a statistically detectable non-zero slope."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly states H0: β1 = 0 and Ha: β1 > 0 with β1 defined as the true population slope of the regression line relating hours studied to exam score.",
        "partLabel": "a",
        "skill": "state",
        "keywords": [
          "H0",
          "Ha",
          "beta1",
          "β1 = 0",
          "β1 > 0",
          "true slope",
          "population slope",
          "null hypothesis",
          "alternative hypothesis",
          "one-sided alternative",
          "positive linear relationship",
          "parameter defined",
          "slope equals zero",
          "true population slope defined"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Identifies t-statistic = 3.08 (or computes 3.14/1.02), correctly uses p-value = 0.005 from output (or notes one-sided p-value ≈ 0.0025), and concludes statistically significant because p-value < α = 0.05.",
        "partLabel": "b",
        "skill": "calculate",
        "keywords": [
          "t-statistic",
          "t = 3.08",
          "3.14/1.02",
          "p-value",
          "p-value = 0.005",
          "one-sided p-value",
          "p-value ≈ 0.0025",
          "alpha = 0.05",
          "statistically significant",
          "reject H0",
          "reject null hypothesis",
          "p-value less than alpha",
          "SE of slope",
          "standard error of slope"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Explains that R-squared measures proportion of variability explained (goodness of fit) while the significance test addresses whether β1 ≠ 0 (existence of linear relationship), and that these are distinct concepts that do not contradict each other.",
        "partLabel": "c",
        "skill": "explain",
        "keywords": [
          "R-squared",
          "proportion of variability explained",
          "coefficient of determination",
          "strength of linear relationship",
          "significance test for slope",
          "β1 not equal to zero",
          "different questions answered",
          "existence of linear relationship",
          "weak but statistically real relationship",
          "statistically significant slope",
          "goodness of fit",
          "variability in exam scores",
          "low R-squared does not invalidate significance",
          "non-zero slope detectable"
        ]
      }
    ],
    "sampleSolution": null
  },
  {
    "id": "stats_u9_frq054",
    "subject": "apstats",
    "frqType": "short",
    "title": "Confidence Interval for Slope: Soil Moisture and Plant Growth",
    "units": [
      9
    ],
    "difficulty": "medium",
    "autoGraded": true,
    "points": 3,
    "prompt": "An environmental scientist studied the relationship between soil moisture content (x, measured in percent) and weekly plant growth (y, measured in millimeters) for a species of native grass. Data were collected from 18 randomly selected plots. A linear regression was performed yielding the following partial output:\n\n Predictor    Coef     SE Coef\n Constant    1.85      0.94\n Moisture     0.47     0.11\n\nDegrees of freedom for error: 16\n\nAssume all conditions for inference have been verified. The critical value t* for a 95% confidence interval with 16 degrees of freedom is t* = 2.120.",
    "starterCode": null,
    "parts": [
      {
        "label": "a",
        "command": "Calculate",
        "question": "Construct a 95% confidence interval for the true slope of the population regression line relating soil moisture to weekly plant growth. Show all work.",
        "rubric": "Earns 1 point for correctly computing the confidence interval using b1 ± t* × SE(b1) = 0.47 ± 2.120 × 0.11 = 0.47 ± 0.2332, yielding the interval (0.237, 0.703). Must show the formula structure with correct values substituted."
      },
      {
        "label": "b",
        "command": "Interpret",
        "question": "Interpret the confidence interval calculated in part (a) in the context of this study.",
        "rubric": "Earns 1 point for a correct contextual interpretation: we are 95% confident that the true slope of the population regression line is between approximately 0.237 and 0.703 mm per percent soil moisture, meaning that for each 1 percentage point increase in soil moisture, the true mean weekly plant growth increases by between 0.237 mm and 0.703 mm."
      },
      {
        "label": "c",
        "command": "Justify",
        "question": "A colleague claims that because the confidence interval does not contain zero, it provides the same conclusion as a two-sided significance test for slope at α = 0.05. Justify whether the colleague's claim is correct, and identify one additional piece of information the confidence interval provides that the significance test alone does not.",
        "rubric": "Earns 1 point for correctly confirming the colleague's claim is correct (a 95% CI that excludes zero corresponds to rejecting H0: β1 = 0 at α = 0.05 in a two-sided test), AND identifying that the confidence interval also provides an estimated range of plausible values for the true slope β1 (magnitude and direction of the relationship), which the significance test alone does not give."
      }
    ],
    "rubric": [
      {
        "index": 0,
        "points": 1,
        "description": "Correctly computes CI using b1 ± t* × SE(b1) = 0.47 ± 2.120 × 0.11 = 0.47 ± 0.2332, giving interval approximately (0.237, 0.703).",
        "partLabel": "a",
        "skill": "calculate",
        "keywords": [
          "b1 ± t* × SE",
          "0.47 ± 2.120 × 0.11",
          "confidence interval for slope",
          "SE of slope",
          "standard error of slope",
          "lower bound 0.237",
          "upper bound 0.703",
          "t* = 2.120",
          "16 degrees of freedom",
          "point estimate plus or minus margin of error",
          "0.2332 margin of error",
          "95% confidence interval construction"
        ]
      },
      {
        "index": 1,
        "points": 1,
        "description": "Interprets the interval in context: 95% confident the true slope (true mean change in weekly plant growth per 1 percentage point increase in soil moisture) is between 0.237 mm and 0.703 mm.",
        "partLabel": "b",
        "skill": "explain",
        "keywords": [
          "95% confident",
          "true slope",
          "population regression line",
          "0.237 to 0.703",
          "millimeters per percent soil moisture",
          "1 percentage point increase in soil moisture",
          "true mean weekly plant growth",
          "plausible values for β1",
          "true mean change in growth",
          "context of plant growth and soil moisture",
          "interval captures true slope",
          "repeated sampling interpretation"
        ]
      },
      {
        "index": 2,
        "points": 1,
        "description": "Confirms the claim is correct (CI excluding zero ↔ reject H0 at α = 0.05 two-sided), and states that the CI additionally provides a range of plausible values for β1 (magnitude and direction of slope), which the significance test alone does not yield.",
        "partLabel": "c",
        "skill": "justify",
        "keywords": [
          "CI excludes zero",
          "reject H0",
          "two-sided significance test",
          "alpha = 0.05",
          "equivalent conclusion to significance test",
          "range of plausible values for β1",
          "magnitude of true slope",
          "direction of linear relationship",
          "significance test does not provide estimate",
          "estimate of true slope",
          "statistically significant at 0.05",
          "confidence interval provides additional information",
          "duality of confidence intervals and hypothesis tests"
        ]
      }
    ],
    "sampleSolution": null
  }
];