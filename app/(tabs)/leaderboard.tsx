import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LeaderboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <MaterialCommunityIcons name="trophy" size={100} color="#FFD700" />
        <Text variant="headlineMedium" style={styles.title}>
          Premium Feature
        </Text>
        <Text variant="bodyLarge" style={styles.description}>
          Compete with other students and track your progress on the leaderboard
        </Text>
        <View style={styles.features}>
          <Feature icon="trophy" text="Global and local rankings" />
          <Feature icon="medal" text="Weekly challenges and rewards" />
          <Feature icon="chart-line" text="Detailed performance analytics" />
        </View>
        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.button}
        >
          Upgrade to Premium
        </Button>
      </View>
    </SafeAreaView>
  );
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <View style={styles.featureItem}>
      <MaterialCommunityIcons name={icon} size={24} color="#666" />
      <Text variant="bodyMedium" style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    marginTop: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 32,
  },
  features: {
    width: '100%',
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureText: {
    marginLeft: 12,
  },
  button: {
    width: '100%',
  },
});
