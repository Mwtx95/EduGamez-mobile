import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Button, ProgressBar, Text, Surface } from 'react-native-paper';
import { QuestionCard } from '../components/QuestionCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GameScreen() {
  const { id } = useLocalSearchParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // TODO: Replace with actual game data fetching
  const mockGame = {
    questions: [
      {
        id: '1',
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
      },
      // Add more questions...
    ],
  };

  const handleAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === mockGame.questions[currentQuestion].correctAnswer;
    if (isCorrect) setScore(score + 1);

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < mockGame.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Game finished
      const passed = score >= 5;
      router.push({
        pathname: '/results',
        params: { score, passed: passed ? '1' : '0' },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Surface style={styles.progressContainer}>
        <Text>Question {currentQuestion + 1} of {mockGame.questions.length}</Text>
        <ProgressBar
          progress={(currentQuestion + 1) / mockGame.questions.length}
          style={styles.progressBar}
        />
      </Surface>

      <QuestionCard
        question={mockGame.questions[currentQuestion]}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={setSelectedAnswer}
      />

      <Button
        mode="contained"
        onPress={handleAnswer}
        disabled={!selectedAnswer}
        style={styles.button}
      >
        {currentQuestion === mockGame.questions.length - 1 ? 'Finish' : 'Next'}
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  progressContainer: {
    padding: 16,
    elevation: 2,
  },
  progressBar: {
    marginTop: 8,
    height: 8,
  },
  button: {
    margin: 16,
  },
});
