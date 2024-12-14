import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ReviewItem {
  id: string;
  subject: string;
  topic: string;
  lastAttemptDate: string;
  score: number;
}

const mockReviewItems: ReviewItem[] = [
  {
    id: '1',
    subject: 'Mathematics',
    topic: 'Addition and Subtraction',
    lastAttemptDate: '2023-12-13',
    score: 7,
  },
  {
    id: '2',
    subject: 'English',
    topic: 'Parts of Speech',
    lastAttemptDate: '2023-12-12',
    score: 6,
  },
];

export default function ReviewScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineSmall" style={styles.title}>Today's Review</Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Review your recent games to improve your scores
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {mockReviewItems.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{item.subject}</Text>
              <Text variant="bodyMedium">{item.topic}</Text>
              <Text variant="bodySmall" style={{ color: theme.colors.outline }}>
                Last attempt: {item.lastAttemptDate}
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.outline }}>
                Previous score: {item.score}/10
              </Text>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => {}}>
                Review Now
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  title: {
    marginBottom: 4,
  },
  subtitle: {
    opacity: 0.7,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});
