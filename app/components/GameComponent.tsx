import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import type { Question } from "../types/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  grammarAdvancedQuestions,
  grammarAdvancedQuestionsNextGame,
  grammarAdvancedQuestionsThirdGame,
  grammarAdvancedQuestionsFourthGame
} from "../games/mockQuestions";

interface GameComponentProps {
  questionsCount?: number;
  onGameComplete?: (score: number, total: number) => void;
  questions: Question[];
  onNextGame?: () => void;
}

export default function GameComponent({
  questionsCount = 3,
  onGameComplete,
  questions: providedQuestions,
  onNextGame,
}: GameComponentProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentGameSet, setCurrentGameSet] = useState(0);
  const gameQuestionSets = [
    grammarAdvancedQuestions,
    grammarAdvancedQuestionsNextGame,
    grammarAdvancedQuestionsThirdGame,
    grammarAdvancedQuestionsFourthGame
  ];

  useEffect(() => {
    startNewGame();
  }, [questionsCount, providedQuestions]);

  const startNewGame = () => {
    const shuffled = [...providedQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(
      0,
      Math.min(questionsCount, shuffled.length)
    );
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setGameCompleted(false);
    setIsSubmitted(false);
  };

  const handleAnswer = (answer: string) => {
    if (!isSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    const isCorrect =
      questions[currentQuestionIndex].correctAnswer === selectedAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
    setShowExplanation(!isCorrect);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setGameCompleted(true);
      onGameComplete?.(score, questions.length);
    }
  };

  const handleNextGame = () => {
    // Increment game set or reset if all sets are completed
    const nextGameSet = (currentGameSet + 1) % gameQuestionSets.length;
    setCurrentGameSet(nextGameSet);

    // Start a new game with the next question set
    const nextQuestions = gameQuestionSets[nextGameSet];
    const shuffled = [...nextQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(
      0,
      Math.min(questionsCount, shuffled.length)
    );

    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setGameCompleted(false);
    setIsSubmitted(false);
  };

  if (!questions.length) return null;

  if (gameCompleted) {
    const finalScore = Math.round((score / questions.length) * 10);
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Game Complete!</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreValue}>{score}</Text>
            <Text style={styles.scoreMax}>/{questions.length}</Text>
          </View>
          <Text style={styles.commentText}>
            {getCommentMessage(finalScore)}
          </Text>
          <TouchableOpacity style={styles.button} onPress={startNewGame}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleNextGame}
          >
            <Text style={styles.buttonText}>Next Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressBar}>
        <Text style={styles.progressText}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>

        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option && styles.selectedOption,
                isSubmitted &&
                option === currentQuestion.correctAnswer &&
                styles.correctOption,
                isSubmitted &&
                selectedAnswer === option &&
                option !== currentQuestion.correctAnswer &&
                styles.wrongOption,
              ]}
              onPress={() => !isSubmitted && handleAnswer(option)}
              disabled={isSubmitted}
            >
              <View style={styles.optionContent}>
                <Text
                  style={[
                    styles.optionText,
                    isSubmitted &&
                    option === currentQuestion.correctAnswer &&
                    styles.correctOptionText,
                  ]}
                >
                  {option}
                </Text>
                {isSubmitted &&
                  selectedAnswer === option &&
                  option !== currentQuestion.correctAnswer && (
                    <MaterialCommunityIcons
                      name="close"
                      size={24}
                      color="#ff6b6b"
                      style={styles.wrongIcon}
                    />
                  )}
                {isSubmitted && option === currentQuestion.correctAnswer && (
                  <MaterialCommunityIcons
                    name="check"
                    size={24}
                    color="#2d862f"
                    style={styles.correctIcon}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {selectedAnswer && !isSubmitted && (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Answer</Text>
          </TouchableOpacity>
        )}

        {showExplanation && (
          <View style={styles.explanationContainer}>
            <Text style={styles.explanationTitle}>Explanation:</Text>
            <Text style={styles.explanationText}>
              {currentQuestion.explanation}
            </Text>
            <TouchableOpacity style={styles.button} onPress={nextQuestion}>
              <Text style={styles.buttonText}>
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "Finish Game"}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {isSubmitted && !showExplanation && (
          <TouchableOpacity style={styles.button} onPress={nextQuestion}>
            <Text style={styles.buttonText}>
              {currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "Finish Game"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const getCommentMessage = (score: number) => {
  const percentage = (score / 10) * 100;
  if (percentage === 100) return "Perfect! You're a master! 🏆";
  if (percentage >= 80)
    return "Great job! You're getting really good at this! 🌟";
  if (percentage >= 60) return "Good effort! Keep practicing to improve! 💪";
  if (percentage >= 40)
    return "Nice try! More practice will help you improve! 📚";
  return "Don't give up! Practice makes perfect! 🎯";
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  progressBar: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  progressText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
  questionContainer: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionText: {
    fontSize: 20,
    color: "#333",
    marginBottom: 20,
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedOption: {
    backgroundColor: "#e3e3e3",
    borderColor: "#bbb",
  },
  correctOption: {
    backgroundColor: "#e7f4e8",
    borderColor: "#68c36f",
  },
  wrongOption: {
    backgroundColor: "#fee7e7",
    borderColor: "#ff6b6b",
  },
  optionText: {
    fontSize: 16,
    color: "#444",
  },
  correctOptionText: {
    color: "#2d862f",
    fontWeight: "600",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  wrongIcon: {
    marginLeft: 8,
  },
  correctIcon: {
    marginLeft: 8,
  },
  explanationContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 16,
  },
  resultContainer: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 24,
  },
  scoreValue: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#007AFF",
  },
  scoreMax: {
    fontSize: 32,
    color: "#666",
    marginLeft: 4,
  },
  commentText: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "500",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
