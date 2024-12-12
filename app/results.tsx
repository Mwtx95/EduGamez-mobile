import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Button, Text, Surface, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResultsScreen() {
  const { score, passed } = useLocalSearchParams();
  const isPassed = passed === '1';

  return (
    <SafeAreaView style={styles.container}>
      <Surface style={styles.resultCard}>
        <Title style={styles.title}>
          {isPassed ? 'Congratulations! 🎉' : 'Keep Trying! 💪'}
        </Title>
        
        <Text style={styles.scoreText}>
          Your Score: {score}/10
        </Text>
        
        <Text style={styles.message}>
          {isPassed 
            ? 'You\'ve unlocked the next level!'
            : 'You need at least 5 correct answers to pass. Try again!'}
        </Text>

        <View style={styles.buttonContainer}>
          {!isPassed && (
            <Button
              mode="contained"
              onPress={() => router.back()}
              style={styles.button}
            >
              Try Again
            </Button>
          )}
          
          <Button
            mode="contained"
            onPress={() => router.push('/')}
            style={styles.button}
          >
            Back to Games
          </Button>
        </View>
      </Surface>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  resultCard: {
    padding: 24,
    borderRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  message: {
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    marginTop: 8,
  },
});
