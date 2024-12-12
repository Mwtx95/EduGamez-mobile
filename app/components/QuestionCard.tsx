import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, RadioButton, Text } from 'react-native-paper';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.question}>{question.question}</Title>
        <RadioButton.Group
          onValueChange={value => onAnswerSelect(value)}
          value={selectedAnswer || ''}
        >
          {question.options.map((option, index) => (
            <View key={index} style={styles.optionContainer}>
              <RadioButton value={option} />
              <Text onPress={() => onAnswerSelect(option)}>{option}</Text>
            </View>
          ))}
        </RadioButton.Group>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    elevation: 4,
  },
  question: {
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
});
