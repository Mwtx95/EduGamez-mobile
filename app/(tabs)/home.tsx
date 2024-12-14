import React, { useState, useMemo } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Searchbar, Text, Button, useTheme, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubjectCard } from '../components/SubjectCard';
import { GameTile } from '../components/GameTile';
import { subjects } from '../constants/subjects';
import { Game } from '../types';
import { router } from 'expo-router';

// TODO: Replace with actual data fetching
const mockGames: Game[] = [
  {
    id: '1',
    title: 'Basic Algebra',
    subject: 'math',
    topic: 'Algebra',
    educationLevel: 'Primary',
    description: 'Learn basic algebraic concepts',
    questions: [],
    isLocked: false,
    status: 'in_progress',
    progress: 0.6,
    lastPlayed: '2023-12-13',
    badge: 'Level 3',
    isNew: false,
  },
  {
    id: '2',
    title: 'Chemical Reactions',
    subject: 'science',
    topic: 'Chemistry',
    educationLevel: 'Primary',
    description: 'Explore basic chemical reactions',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
  },
  // Add more mock games...
];

export default function HomeScreen() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const filteredGames = useMemo(() => {
    return mockGames.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.topic.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSubject = !selectedSubject || game.subject === selectedSubject;
      return matchesSearch && matchesSubject;
    });
  }, [searchQuery, selectedSubject]);

  const recommendedGames = useMemo(() => {
    return mockGames.filter(game => game.isNew || game.status === 'in_progress')
      .slice(0, 4);
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search games..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>

      {/* Subjects ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.subjectsContainer}
        contentContainerStyle={styles.subjectsContent}
      >
        <SubjectCard
          subject={{
            id: 'all',
            name: 'All Subjects',
            icon: 'apps',
            color: theme.colors.primary,
            topics: [],
          }}
          isSelected={!selectedSubject}
          onPress={() => setSelectedSubject(null)}
        />
        {subjects.map(subject => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            isSelected={selectedSubject === subject.id}
            onPress={() => setSelectedSubject(subject.id)}
          />
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {/* Recommended Section */}
        {recommendedGames.length > 0 && (
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Recommended for You
            </Text>
            <View style={styles.gamesGrid}>
              {recommendedGames.map(game => (
                <GameTile
                  key={game.id}
                  game={game}
                  onPress={() => router.push(`/game/${game.id}`)}
                />
              ))}
            </View>
          </View>
        )}

        <Divider style={styles.divider} />

        {/* All Games Section */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            {selectedSubject ? subjects.find(s => s.id === selectedSubject)?.name : 'All Games'}
          </Text>
          <View style={styles.gamesGrid}>
            {filteredGames.map(game => (
              <GameTile
                key={game.id}
                game={game}
                onPress={() => router.push(`/game/${game.id}`)}
              />
            ))}
          </View>
        </View>
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
    padding: 12,
    backgroundColor: '#fff',
    elevation: 4,
  },
  searchBar: {
    elevation: 0,
  },
  subjectsContainer: {
    backgroundColor: '#fff',
    elevation: 4,
    maxHeight: 100, // Adjusted to fit subject cards perfectly
  },
  subjectsContent: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 12,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  divider: {
    marginVertical: 6,
  },
});
