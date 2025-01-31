import type { Question } from "../types/index";

// Explicitly annotate the arrays
export const algebraQuestions: Array<Question> = [
  {
    id: "alg1",
    text: "Solve for x: 2x + 5 = 13",
    options: ["x = 4", "x = 6", "x = 8", "x = 3"],
    correctAnswer: "x = 4",
    explanation: "Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4",
  },
  {
    id: "alg2",
    text: "Which expression is equivalent to (x + 3)(x - 2)?",
    options: ["x² + x - 6", "x² + 5x - 6", "x² - 5x + 6", "x² + x + 6"],
    correctAnswer: "x² + x - 6",
    explanation:
      "Using FOIL: (x)(x) + (x)(-2) + (3)(x) + (3)(-2) = x² - 2x + 3x - 6 = x² + x - 6",
  },
  {
    id: "alg3",
    text: "What is the slope of the line y = 3x - 4?",
    options: ["3", "-4", "4", "-3"],
    correctAnswer: "3",
    explanation:
      "In the equation y = mx + b, m represents the slope. Here m = 3",
  },
  {
    id: "alg4",
    text: "Simplify: 2(x + 3) - 3(x - 1)",
    options: ["−x + 9", "−x + 3", "−x + 5", "x + 5"],
    correctAnswer: "−x + 9",
    explanation: "2x + 6 - 3x + 3 = -x + 9",
  },
  {
    id: "alg5",
    text: "Factor: x² - 9",
    options: ["(x+3)(x-3)", "(x-3)(x-3)", "(x+3)(x+3)", "(x-9)(x+1)"],
    correctAnswer: "(x+3)(x-3)",
    explanation: "This is a difference of squares: a² - b² = (a+b)(a-b)",
  },
  {
    id: "alg6",
    text: "Solve: |x - 2| = 5",
    options: [
      "x = 7 or x = -3",
      "x = 3 or x = 7",
      "x = -3 or x = 3",
      "x = 2 or x = 7",
    ],
    correctAnswer: "x = 7 or x = -3",
    explanation: "x - 2 = 5 or x - 2 = -5; therefore x = 7 or x = -3",
  },
  {
    id: "alg7",
    text: "What is the y-intercept of 2x + y = 6?",
    options: ["6", "3", "2", "-6"],
    correctAnswer: "6",
    explanation: "When x = 0, y = 6",
  },
  {
    id: "alg8",
    text: "Solve: 3x + 4 > 16",
    options: ["x > 4", "x > 6", "x < 4", "x < 6"],
    correctAnswer: "x > 4",
    explanation: "Subtract 4: 3x > 12, then divide by 3: x > 4",
  },
  {
    id: "alg9",
    text: "What is the domain of f(x) = x²?",
    options: ["All real numbers", "x ≥ 0", "x ≤ 0", "x ≠ 0"],
    correctAnswer: "All real numbers",
    explanation: "A quadratic function can take any real number as input",
  },
  {
    id: "alg10",
    text: "Simplify: (x³y²)(xy³)",
    options: ["x⁴y⁵", "x³y⁶", "x⁴y⁶", "x⁵y⁵"],
    correctAnswer: "x⁴y⁵",
    explanation: "Add exponents: x³⁺¹y²⁺³ = x⁴y⁵",
  },
];

// Trigonometry Questions
export const trigonometryQuestions: Array<Question> = [
  {
    id: "trig1",
    text: "What is sin(90°)?",
    options: ["0", "1", "-1", "undefined"],
    correctAnswer: "1",
    explanation: "sin(90°) = 1 is a fundamental trigonometric value",
  },
  {
    id: "trig2",
    text: "What is the period of cos(x)?",
    options: ["2π", "π", "π/2", "4π"],
    correctAnswer: "2π",
    explanation: "The cosine function repeats every 2π radians",
  },
  {
    id: "trig3",
    text: "In a right triangle, if sin(θ) = 0.6, what is cos(θ)?",
    options: ["0.8", "0.6", "0.5", "0.4"],
    correctAnswer: "0.8",
    explanation: "Using the Pythagorean identity sin²(θ) + cos²(θ) = 1",
  },
  {
    id: "trig4",
    text: "What is tan(45°)?",
    options: ["1", "0", "undefined", "√2"],
    correctAnswer: "1",
    explanation:
      "At 45°, sin(45°) = cos(45°), so tan(45°) = sin(45°)/cos(45°) = 1",
  },
  {
    id: "trig5",
    text: "What is the range of sin(x)?",
    options: ["[-1, 1]", "[0, 1]", "[-1, 0]", "All real numbers"],
    correctAnswer: "[-1, 1]",
    explanation: "The sine function oscillates between -1 and 1",
  },
  {
    id: "trig6",
    text: "What is cos(0°)?",
    options: ["1", "0", "-1", "undefined"],
    correctAnswer: "1",
    explanation: "cos(0°) = 1 is a fundamental trigonometric value",
  },
  {
    id: "trig7",
    text: "If sin(x) = cos(x), what is x?",
    options: ["45°", "30°", "60°", "90°"],
    correctAnswer: "45°",
    explanation: "When sin(x) = cos(x), x = 45° (or π/4 radians)",
  },
  {
    id: "trig8",
    text: "What is sin²(x) + cos²(x)?",
    options: ["1", "0", "2", "depends on x"],
    correctAnswer: "1",
    explanation: "This is the fundamental Pythagorean identity",
  },
  {
    id: "trig9",
    text: "What is the period of tan(x)?",
    options: ["π", "2π", "π/2", "3π"],
    correctAnswer: "π",
    explanation: "The tangent function repeats every π radians",
  },
  {
    id: "trig10",
    text: "What is sin(30°)?",
    options: ["1/2", "√3/2", "√2/2", "1"],
    correctAnswer: "1/2",
    explanation: "sin(30°) = 1/2 is a standard angle value",
  },
];

// Linear Programming Questions
export const linearProgrammingQuestions: Array<Question> = [
  {
    id: "lp1",
    text: "What is the objective function in linear programming?",
    options: [
      "Function to be maximized or minimized",
      "Function that defines constraints",
      "Function that solves equations",
      "Function that plots graphs",
    ],
    correctAnswer: "Function to be maximized or minimized",
    explanation:
      "The objective function represents the goal to optimize in linear programming",
  },
  {
    id: "lp2",
    text: "Which method is used to solve linear programming problems graphically?",
    options: [
      "Corner Point Method",
      "Midpoint Method",
      "Center Method",
      "Random Point Method",
    ],
    correctAnswer: "Corner Point Method",
    explanation:
      "The optimal solution in linear programming occurs at a corner point of the feasible region",
  },
  {
    id: "lp3",
    text: "What is a feasible region?",
    options: [
      "Area satisfying all constraints",
      "Area outside constraints",
      "Any point on the graph",
      "Center of the graph",
    ],
    correctAnswer: "Area satisfying all constraints",
    explanation:
      "The feasible region is where all constraints are satisfied simultaneously",
  },
  {
    id: "lp4",
    text: "What type of lines form the boundaries of constraints?",
    options: ["Straight lines", "Curved lines", "Circles", "Parabolas"],
    correctAnswer: "Straight lines",
    explanation:
      "Linear programming constraints are represented by straight lines",
  },
  {
    id: "lp5",
    text: "What does an unbounded solution mean?",
    options: [
      "The solution can be infinitely large",
      "No solution exists",
      "Only one solution exists",
      "Solution is negative",
    ],
    correctAnswer: "The solution can be infinitely large",
    explanation:
      "An unbounded solution means the objective function can increase/decrease indefinitely",
  },
  {
    id: "lp6",
    text: "What is a slack variable?",
    options: [
      "Variable added to convert inequality to equation",
      "Variable that must be removed",
      "Main variable in the problem",
      "Negative variable",
    ],
    correctAnswer: "Variable added to convert inequality to equation",
    explanation:
      "Slack variables convert inequality constraints into equations by absorbing the slack",
  },
  {
    id: "lp7",
    text: "What indicates an infeasible solution?",
    options: [
      "No point satisfies all constraints",
      "Too many points satisfy constraints",
      "Negative solutions only",
      "Positive solutions only",
    ],
    correctAnswer: "No point satisfies all constraints",
    explanation:
      "When constraints are contradictory, no feasible solution exists",
  },
  {
    id: "lp8",
    text: "In the simplex method, what represents a basic feasible solution?",
    options: [
      "Corner point of feasible region",
      "Center of feasible region",
      "Any point in feasible region",
      "Point outside feasible region",
    ],
    correctAnswer: "Corner point of feasible region",
    explanation:
      "Basic feasible solutions in simplex method correspond to corner points",
  },
  {
    id: "lp9",
    text: "What is the standard form of a linear programming problem?",
    options: [
      "Maximize Z subject to ≤ constraints",
      "Minimize Z subject to ≥ constraints",
      "Both maximize and minimize Z",
      "No constraints needed",
    ],
    correctAnswer: "Maximize Z subject to ≤ constraints",
    explanation:
      "Standard form has maximization objective and less-than-or-equal-to constraints",
  },
  {
    id: "lp10",
    text: "What is the purpose of sensitivity analysis?",
    options: [
      "Study effect of parameter changes",
      "Find initial solution",
      "Draw the graph",
      "Add constraints",
    ],
    correctAnswer: "Study effect of parameter changes",
    explanation:
      "Sensitivity analysis examines how changes in parameters affect the optimal solution",
  },
];

// Statistics Questions
export const statisticsQuestions: Array<Question> = [
  {
    id: "stat1",
    text: "What is the mean of the numbers: 2, 4, 6, 8, 10?",
    options: ["6", "5", "7", "8"],
    correctAnswer: "6",
    explanation: "Sum (30) divided by count (5) equals 6",
  },
  {
    id: "stat2",
    text: "What is the median of: 1, 3, 3, 6, 7, 8, 9?",
    options: ["6", "5", "7", "3"],
    correctAnswer: "6",
    explanation: "The middle number in the ordered list is 6",
  },
  {
    id: "stat3",
    text: "What is the mode of: 2, 2, 3, 4, 4, 4, 5?",
    options: ["4", "2", "3", "5"],
    correctAnswer: "4",
    explanation: "4 appears most frequently (three times)",
  },
  {
    id: "stat4",
    text: "What is the range of: 10, 15, 20, 25, 30?",
    options: ["20", "15", "25", "30"],
    correctAnswer: "20",
    explanation: "Largest value (30) minus smallest value (10) equals 20",
  },
  {
    id: "stat5",
    text: "What type of correlation shows one variable increasing as another decreases?",
    options: ["Negative", "Positive", "Zero", "Perfect"],
    correctAnswer: "Negative",
    explanation:
      "Negative correlation indicates inverse relationship between variables",
  },
  {
    id: "stat6",
    text: "What is the probability of rolling a 6 on a fair die?",
    options: ["1/6", "1/3", "1/2", "1/4"],
    correctAnswer: "1/6",
    explanation: "One favorable outcome out of six possible outcomes",
  },
  {
    id: "stat7",
    text: "What measure of spread is most affected by outliers?",
    options: ["Standard deviation", "Range", "IQR", "Median"],
    correctAnswer: "Range",
    explanation:
      "Range only uses extreme values, making it most sensitive to outliers",
  },
  {
    id: "stat8",
    text: "In a normal distribution, what percentage falls within one standard deviation?",
    options: ["68%", "95%", "99%", "50%"],
    correctAnswer: "68%",
    explanation: "Approximately 68% of data falls within ±1 standard deviation",
  },
  {
    id: "stat9",
    text: "What is the sum of probabilities of all possible outcomes?",
    options: ["1", "0", "100", "Infinity"],
    correctAnswer: "1",
    explanation: "Total probability must equal 1 (or 100%)",
  },
  {
    id: "stat10",
    text: "What is the variance a measure of?",
    options: ["Spread", "Center", "Shape", "Position"],
    correctAnswer: "Spread",
    explanation: "Variance measures how far numbers are from their mean",
  },
];

// English Grammar Questions - Beginner
export const grammarBeginnerQuestions: Array<Question> = [
  {
    id: "gram_beg1",
    text: "Choose the correct form of the verb: She ___ to school every day.",
    options: ["go", "goes", "going", "went"],
    correctAnswer: "goes",
    explanation:
      "With third-person singular (he/she/it), we add -s to the base form of the verb.",
  },
  {
    id: "gram_beg2",
    text: "Which sentence is correct?",
    options: [
      "They is playing football.",
      "They are playing football.",
      "They am playing football.",
      "They be playing football.",
    ],
    correctAnswer: "They are playing football.",
    explanation:
      "With 'they', we use the plural form 'are' of the verb 'to be'.",
  },
  {
    id: "gram_beg3",
    text: "Select the correct article: I saw ___ elephant at the zoo.",
    options: ["a", "an", "the", "no article needed"],
    correctAnswer: "an",
    explanation: "We use 'an' before words that begin with vowel sounds.",
  },
];

// English Grammar Questions - Intermediate
export const grammarIntermediateQuestions: Array<Question> = [
  {
    id: "gram_int1",
    text: "Choose the correct conditional form: If I ___ rich, I would buy a house.",
    options: ["am", "was", "were", "had been"],
    correctAnswer: "were",
    explanation:
      "In second conditional (hypothetical present/future), we use 'were' for all persons.",
  },
  {
    id: "gram_int2",
    text: "Select the correct passive voice: The book ___ by John last year.",
    options: ["wrote", "was written", "had written", "has been written"],
    correctAnswer: "was written",
    explanation:
      "For past simple passive, we use 'was/were + past participle'.",
  },
  {
    id: "gram_int3",
    text: "Which sentence uses the present perfect correctly?",
    options: [
      "I have seen him yesterday.",
      "I have never seen him before.",
      "I have seen him tomorrow.",
      "I have see him now.",
    ],
    correctAnswer: "I have never seen him before.",
    explanation:
      "Present perfect is used for past actions with a connection to the present, often with words like 'never' and 'before'.",
  },
];

// English Grammar Questions - Advanced
export const grammarAdvancedQuestions: Array<Question> = [
  {
    id: "gram_adv1",
    text: "Choose the correct subjunctive form: It is essential that he ___ the documents by tomorrow.",
    options: ["submits", "submit", "submitted", "will submit"],
    correctAnswer: "submit",
    explanation: "After 'it is essential that', use the base form of the verb (subjunctive mood).",
  },
  {
    id: "gram_adv2",
    text: "Which sentence uses the past perfect tense correctly?",
    options: [
      "When I arrived, he was already left.",
      "When I arrived, he had already left.",
      "When I arrived, he is already left.",
      "When I arrived, he has already left.",
    ],
    correctAnswer: "When I arrived, he had already left.",
    explanation: "Past perfect is used to show an action completed before another past action.",
  },
  {
    id: "gram_adv3",
    text: "Identify the correct idiom meaning 'to stop trying':",
    options: [
      "Throw in the towel",
      "Throw under the bus",
      "Throw caution to the wind",
      "Throw a fit",
    ],
    correctAnswer: "Throw in the towel",
    explanation: "This idiom originates from boxing, where a trainer throws a towel to stop a fight.",
  }
];

export const grammarAdvancedQuestionsNextGame: Array<Question> = [
  {
    id: "gram_adv4",
    text: "Which sentence demonstrates correct use of the conditional perfect?",
    options: [
      "If I would have known, I would have come.",
      "If I had known, I would have come.",
      "If I knew, I would come.",
      "If I know, I will come.",
    ],
    correctAnswer: "If I had known, I would have come.",
    explanation: "Conditional perfect is used to express a hypothetical past action.",
  },
  {
    id: "gram_adv5",
    text: "Choose the correct meaning of the phrasal verb 'give up':",
    options: [
      "To provide something",
      "To surrender or stop trying",
      "To increase",
      "To make a gift",
    ],
    correctAnswer: "To surrender or stop trying",
    explanation: "This phrasal verb means to stop attempting something or admit defeat.",
  },
  {
    id: "gram_adv6",
    text: "Which sentence uses the reported speech correctly?",
    options: [
      "She said that she will come tomorrow.",
      "She said that she would come tomorrow.",
      "She said that she comes tomorrow.",
      "She said that she came tomorrow.",
    ],
    correctAnswer: "She said that she would come tomorrow.",
    explanation: "In reported speech, the verb is shifted back one tense from the original statement.",
  }
];

export const grammarAdvancedQuestionsThirdGame: Array<Question> = [
  {
    id: "gram_adv7",
    text: "Identify the correct usage of inversion: ___ I realized the magnitude of the problem.",
    options: ["Only then", "Then only", "Only when", "When only"],
    correctAnswer: "Only then",
    explanation: "With 'Only then' at the beginning of a sentence, we use inversion (auxiliary verb before subject).",
  },
  {
    id: "gram_adv8",
    text: "Select the sentence with correct parallel structure:",
    options: [
      "She likes swimming, to dance, and running.",
      "She likes swimming, dancing, and to run.",
      "She likes to swim, dance, and run.",
      "She likes swimming, dancing, and running.",
    ],
    correctAnswer: "She likes to swim, dance, and run.",
    explanation: "Parallel structure requires using the same grammatical form for all items in a series.",
  },
  {
    id: "gram_adv9",
    text: "Choose the correct meaning of the word 'nuance':",
    options: [
      "A subtle difference or shade of meaning",
      "A strong or obvious difference",
      "A completely different meaning",
      "No difference at all",
    ],
    correctAnswer: "A subtle difference or shade of meaning",
    explanation: "Nuance refers to a small, subtle distinction in meaning or expression.",
  }
];

export const grammarAdvancedQuestionsFourthGame: Array<Question> = [
  {
    id: "gram_adv10",
    text: "Which sentence uses the correct form of the verb 'to be' in the present perfect continuous tense?",
    options: [
      "I have been studying English for three years.",
      "I am studying English for three years.",
      "I have studied English for three years.",
      "I study English for three years.",
    ],
    correctAnswer: "I have been studying English for three years.",
    explanation: "Present perfect continuous is used to describe an action that started in the past and continues up to the present.",
  },
  {
    id: "gram_adv11",
    text: "Identify the correct use of the semicolon:",
    options: [
      "I love cooking; and baking.",
      "I love cooking and baking.",
      "I love cooking; baking.",
      "I love cooking, and baking.",
    ],
    correctAnswer: "I love cooking; baking.",
    explanation: "A semicolon is used to connect two independent clauses that are closely related in meaning.",
  },
  {
    id: "gram_adv12",
    text: "Choose the sentence with the correct use of the relative pronoun:",
    options: [
      "The book who I read was fascinating.",
      "The book that I read was fascinating.",
      "The book which I read was fascinating.",
      "The book whom I read was fascinating.",
    ],
    correctAnswer: "The book that I read was fascinating.",
    explanation: "For things, 'that' or 'which' are typically used as relative pronouns.",
  }
];
