import { Question } from "../types";

// Algebra Questions
export const algebraQuestions: Question[] = [
  {
    id: "alg1",
    question: "Solve for x: 2x + 5 = 13",
    options: ["x = 4", "x = 6", "x = 8", "x = 3"],
    correctAnswer: "x = 4",
    explanation: "Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4",
  },
  {
    id: "alg2",
    question: "Which expression is equivalent to (x + 3)(x - 2)?",
    options: ["x² + x - 6", "x² + 5x - 6", "x² - 5x + 6", "x² + x + 6"],
    correctAnswer: "x² + x - 6",
    explanation:
      "Using FOIL: (x)(x) + (x)(-2) + (3)(x) + (3)(-2) = x² - 2x + 3x - 6 = x² + x - 6",
  },
  {
    id: "alg3",
    question: "What is the slope of the line y = 3x - 4?",
    options: ["3", "-4", "4", "-3"],
    correctAnswer: "3",
    explanation:
      "In the equation y = mx + b, m represents the slope. Here m = 3",
  },
  {
    id: "alg4",
    question: "Simplify: 2(x + 3) - 3(x - 1)",
    options: ["−x + 9", "−x + 3", "−x + 5", "x + 5"],
    correctAnswer: "−x + 9",
    explanation: "2x + 6 - 3x + 3 = -x + 9",
  },
  {
    id: "alg5",
    question: "Factor: x² - 9",
    options: ["(x+3)(x-3)", "(x-3)(x-3)", "(x+3)(x+3)", "(x-9)(x+1)"],
    correctAnswer: "(x+3)(x-3)",
    explanation: "This is a difference of squares: a² - b² = (a+b)(a-b)",
  },
  {
    id: "alg6",
    question: "Solve: |x - 2| = 5",
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
    question: "What is the y-intercept of 2x + y = 6?",
    options: ["6", "3", "2", "-6"],
    correctAnswer: "6",
    explanation: "When x = 0, y = 6",
  },
  {
    id: "alg8",
    question: "Solve: 3x + 4 > 16",
    options: ["x > 4", "x > 6", "x < 4", "x < 6"],
    correctAnswer: "x > 4",
    explanation: "Subtract 4: 3x > 12, then divide by 3: x > 4",
  },
  {
    id: "alg9",
    question: "What is the domain of f(x) = x²?",
    options: ["All real numbers", "x ≥ 0", "x ≤ 0", "x ≠ 0"],
    correctAnswer: "All real numbers",
    explanation: "A quadratic function can take any real number as input",
  },
  {
    id: "alg10",
    question: "Simplify: (x³y²)(xy³)",
    options: ["x⁴y⁵", "x³y⁶", "x⁴y⁶", "x⁵y⁵"],
    correctAnswer: "x⁴y⁵",
    explanation: "Add exponents: x³⁺¹y²⁺³ = x⁴y⁵",
  },
];

// Trigonometry Questions
export const trigonometryQuestions: Question[] = [
  {
    id: "trig1",
    question: "What is sin(90°)?",
    options: ["0", "1", "-1", "undefined"],
    correctAnswer: "1",
    explanation: "sin(90°) = 1 is a fundamental trigonometric value",
  },
  {
    id: "trig2",
    question: "What is the period of cos(x)?",
    options: ["2π", "π", "π/2", "4π"],
    correctAnswer: "2π",
    explanation: "The cosine function repeats every 2π radians",
  },
  {
    id: "trig3",
    question: "In a right triangle, if sin(θ) = 0.6, what is cos(θ)?",
    options: ["0.8", "0.6", "0.5", "0.4"],
    correctAnswer: "0.8",
    explanation: "Using the Pythagorean identity sin²(θ) + cos²(θ) = 1",
  },
  {
    id: "trig4",
    question: "What is tan(45°)?",
    options: ["1", "0", "undefined", "√2"],
    correctAnswer: "1",
    explanation:
      "At 45°, sin(45°) = cos(45°), so tan(45°) = sin(45°)/cos(45°) = 1",
  },
  {
    id: "trig5",
    question: "What is the range of sin(x)?",
    options: ["[-1, 1]", "[0, 1]", "[-1, 0]", "All real numbers"],
    correctAnswer: "[-1, 1]",
    explanation: "The sine function oscillates between -1 and 1",
  },
  {
    id: "trig6",
    question: "What is cos(0°)?",
    options: ["1", "0", "-1", "undefined"],
    correctAnswer: "1",
    explanation: "cos(0°) = 1 is a fundamental trigonometric value",
  },
  {
    id: "trig7",
    question: "If sin(x) = cos(x), what is x?",
    options: ["45°", "30°", "60°", "90°"],
    correctAnswer: "45°",
    explanation: "When sin(x) = cos(x), x = 45° (or π/4 radians)",
  },
  {
    id: "trig8",
    question: "What is sin²(x) + cos²(x)?",
    options: ["1", "0", "2", "depends on x"],
    correctAnswer: "1",
    explanation: "This is the fundamental Pythagorean identity",
  },
  {
    id: "trig9",
    question: "What is the period of tan(x)?",
    options: ["π", "2π", "π/2", "3π"],
    correctAnswer: "π",
    explanation: "The tangent function repeats every π radians",
  },
  {
    id: "trig10",
    question: "What is sin(30°)?",
    options: ["1/2", "√3/2", "√2/2", "1"],
    correctAnswer: "1/2",
    explanation: "sin(30°) = 1/2 is a standard angle value",
  },
];

// Linear Programming Questions
export const linearProgrammingQuestions: Question[] = [
  {
    id: "lp1",
    question: "What is the objective function in linear programming?",
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
    question:
      "Which method is used to solve linear programming problems graphically?",
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
    question: "What is a feasible region?",
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
    question: "What type of lines form the boundaries of constraints?",
    options: ["Straight lines", "Curved lines", "Circles", "Parabolas"],
    correctAnswer: "Straight lines",
    explanation:
      "Linear programming constraints are represented by straight lines",
  },
  {
    id: "lp5",
    question: "What does an unbounded solution mean?",
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
    question: "What is a slack variable?",
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
    question: "What indicates an infeasible solution?",
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
    question:
      "In the simplex method, what represents a basic feasible solution?",
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
    question: "What is the standard form of a linear programming problem?",
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
    question: "What is the purpose of sensitivity analysis?",
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
export const statisticsQuestions: Question[] = [
  {
    id: "stat1",
    question: "What is the mean of the numbers: 2, 4, 6, 8, 10?",
    options: ["6", "5", "7", "8"],
    correctAnswer: "6",
    explanation: "Sum (30) divided by count (5) equals 6",
  },
  {
    id: "stat2",
    question: "What is the median of: 1, 3, 3, 6, 7, 8, 9?",
    options: ["6", "5", "7", "3"],
    correctAnswer: "6",
    explanation: "The middle number in the ordered list is 6",
  },
  {
    id: "stat3",
    question: "What is the mode of: 2, 2, 3, 4, 4, 4, 5?",
    options: ["4", "2", "3", "5"],
    correctAnswer: "4",
    explanation: "4 appears most frequently (three times)",
  },
  {
    id: "stat4",
    question: "What is the range of: 10, 15, 20, 25, 30?",
    options: ["20", "15", "25", "30"],
    correctAnswer: "20",
    explanation: "Largest value (30) minus smallest value (10) equals 20",
  },
  {
    id: "stat5",
    question:
      "What type of correlation shows one variable increasing as another decreases?",
    options: ["Negative", "Positive", "Zero", "Perfect"],
    correctAnswer: "Negative",
    explanation:
      "Negative correlation indicates inverse relationship between variables",
  },
  {
    id: "stat6",
    question: "What is the probability of rolling a 6 on a fair die?",
    options: ["1/6", "1/3", "1/2", "1/4"],
    correctAnswer: "1/6",
    explanation: "One favorable outcome out of six possible outcomes",
  },
  {
    id: "stat7",
    question: "What measure of spread is most affected by outliers?",
    options: ["Standard deviation", "Range", "IQR", "Median"],
    correctAnswer: "Range",
    explanation:
      "Range only uses extreme values, making it most sensitive to outliers",
  },
  {
    id: "stat8",
    question:
      "In a normal distribution, what percentage falls within one standard deviation?",
    options: ["68%", "95%", "99%", "50%"],
    correctAnswer: "68%",
    explanation: "Approximately 68% of data falls within ±1 standard deviation",
  },
  {
    id: "stat9",
    question: "What is the sum of probabilities of all possible outcomes?",
    options: ["1", "0", "100", "Infinity"],
    correctAnswer: "1",
    explanation: "Total probability must equal 1 (or 100%)",
  },
  {
    id: "stat10",
    question: "What is the variance a measure of?",
    options: ["Spread", "Center", "Shape", "Position"],
    correctAnswer: "Spread",
    explanation: "Variance measures how far numbers are from their mean",
  },
];
