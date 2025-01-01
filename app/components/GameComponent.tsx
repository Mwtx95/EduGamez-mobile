import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Question } from "../types";

interface GameComponentProps {
  questionsCount?: number;
  onGameComplete?: (score: number, total: number) => void;
  questions: Question[];
}

export default function GameComponent({
  questionsCount = 5,
  onGameComplete,
  questions: providedQuestions,
}: GameComponentProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    startNewGame();
  }, [questionsCount, providedQuestions]);

  const startNewGame = () => {
    // Randomly select questions if more are provided than needed
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
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const isCorrect = questions[currentQuestionIndex].correctAnswer === answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
    } else {
      setGameCompleted(true);
      onGameComplete?.(score, questions.length);
    }
  };

  if (!questions.length) return null;

  if (gameCompleted) {
    const finalScore = Math.round((score / questions.length) * 10);
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Results</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreValue}>{finalScore}</Text>
            <Text style={styles.scoreMax}>/10</Text>
          </View>
          <Text style={styles.commentText}>
            {getCommentMessage(finalScore)}
          </Text>
          <TouchableOpacity style={styles.button} onPress={startNewGame}>
            <Text style={styles.buttonText}>Try Again</Text>
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
        <Text style={styles.questionText}>{currentQuestion.question}</Text>

        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option && styles.selectedOption,
                showExplanation &&
                  option === currentQuestion.correctAnswer &&
                  styles.correctOption,
                showExplanation &&
                  selectedAnswer === option &&
                  option !== currentQuestion.correctAnswer &&
                  styles.wrongOption,
              ]}
              onPress={() => !showExplanation && handleAnswer(option)}
              disabled={showExplanation}
            >
              <Text
                style={[
                  styles.optionText,
                  showExplanation &&
                    option === currentQuestion.correctAnswer &&
                    styles.correctOptionText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

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
      </View>
    </ScrollView>
  );
}

const getCommentMessage = (score: number) => {
  if (score === 10) return "Perfect! You're a master! 🏆";
  if (score >= 8) return "Great job! You're getting really good at this! 🌟";
  if (score >= 6) return "Good effort! Keep practicing to improve! 💪";
  if (score >= 4) return "Nice try! More practice will help you improve! 📚";
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
    textAlign: "center",
  },
  correctOptionText: {
    color: "#2d862f",
    fontWeight: "600",
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
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
