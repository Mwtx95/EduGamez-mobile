import React, { useState, useMemo } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Dimensions } from 'react-native';
import { Text, Button, useTheme, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubjectCard } from '../components/SubjectCard';
import { GameTile } from '../components/GameTile';
import { subjects } from '../constants/subjects';
import { Game } from '../types';
import { router } from 'expo-router';

// TODO: Replace with actual data fetching
const mockGames: Game[] = [
  // Math Games - Comprehensive
  {
    id: 'math-all-single',
    title: 'Math Master',
    subject: 'math',
    topic: 'All Topics',
    educationLevel: 'Primary',
    description: 'Complete math course',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    isComprehensive: true,
    mode: 'singleplayer',
  },
  {
    id: 'math-all-multi',
    title: 'Math Olympics',
    subject: 'math',
    topic: 'All Topics',
    educationLevel: 'Primary',
    description: 'Compete in all topics',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    isComprehensive: true,
    mode: 'multiplayer',
  },
  // Math Games - Topic Specific
  {
    id: 'math-algebra-single',
    title: 'Algebra Quest',
    subject: 'math',
    topic: 'Algebra',
    educationLevel: 'Primary',
    description: 'Learn algebra basics',
    questions: [],
    isLocked: false,
    status: 'in_progress',
    progress: 0.6,
    lastPlayed: '2023-12-13',
    badge: 'Level 3',
    isNew: false,
    mode: 'singleplayer',
  },
  {
    id: 'math-algebra-multi',
    title: 'Algebra Arena',
    subject: 'math',
    topic: 'Algebra',
    educationLevel: 'Primary',
    description: 'Algebra battles',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: false,
    mode: 'multiplayer',
  },
  // Math - Trigonometry
  {
    id: 'math-trig-single',
    title: 'Trig Trek',
    subject: 'math',
    topic: 'Trigonometry',
    educationLevel: 'Primary',
    description: 'Master trigonometry',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'singleplayer',
  },
  {
    id: 'math-trig-multi',
    title: 'Trig Tournament',
    subject: 'math',
    topic: 'Trigonometry',
    educationLevel: 'Primary',
    description: 'Trig challenges',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'multiplayer',
  },
  // Math - Linear Programming
  {
    id: 'math-linear-prog-single',
    title: 'Linear Pro',
    subject: 'math',
    topic: 'Linear Programming',
    educationLevel: 'Primary',
    description: 'Learn optimization',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'singleplayer',
  },
  {
    id: 'math-linear-prog-multi',
    title: 'Linear League',
    subject: 'math',
    topic: 'Linear Programming',
    educationLevel: 'Primary',
    description: 'Compete & optimize',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'multiplayer',
  },
  // Math - Statistics
  {
    id: 'math-stats-single',
    title: 'Stats Safari',
    subject: 'math',
    topic: 'Statistics',
    educationLevel: 'Primary',
    description: 'Master statistics',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'singleplayer',
  },
  {
    id: 'math-stats-multi',
    title: 'Stats Battle',
    subject: 'math',
    topic: 'Statistics',
    educationLevel: 'Primary',
    description: 'Stats showdown',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'multiplayer',
  },
  // Math - Logarithm
  {
    id: 'math-log-single',
    title: 'Log Quest',
    subject: 'math',
    topic: 'Logarithm',
    educationLevel: 'Primary',
    description: 'Master logarithms',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'singleplayer',
  },
  {
    id: 'math-log-multi',
    title: 'Log Legends',
    subject: 'math',
    topic: 'Logarithm',
    educationLevel: 'Primary',
    description: 'Log challenges',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'multiplayer',
  },
  // Science Games - Comprehensive
  {
    id: 'science-all-single',
    title: 'Science Explorer',
    subject: 'science',
    topic: 'All Topics',
    educationLevel: 'Primary',
    description: 'Explore all science topics solo',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    isComprehensive: true,
    mode: 'singleplayer',
  },
  {
    id: 'science-all-multi',
    title: 'Science Showdown',
    subject: 'science',
    topic: 'All Topics',
    educationLevel: 'Primary',
    description: 'Compete across all science topics',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    isComprehensive: true,
    mode: 'multiplayer',
  },
  // Science Games - Topic Specific
  {
    id: 'science-chemistry-single',
    title: 'Chemistry Lab',
    subject: 'science',
    topic: 'Chemistry',
    educationLevel: 'Primary',
    description: 'Virtual chemistry experiments',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'singleplayer',
  },
  {
    id: 'science-chemistry-multi',
    title: 'Chemistry Challenge',
    subject: 'science',
    topic: 'Chemistry',
    educationLevel: 'Primary',
    description: 'Multiplayer chemistry competitions',
    questions: [],
    isLocked: false,
    status: 'not_started',
    progress: 0,
    isNew: true,
    mode: 'multiplayer',
  }
];

export default function HomeScreen() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const { filteredGames } = useMemo(() => {
    const filtered = mockGames.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.topic.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSubject = !selectedSubject || game.subject === selectedSubject;
      return matchesSearch && matchesSubject;
    });

    // Sort games to show comprehensive ones first
    return {
      filteredGames: [...filtered].sort((a, b) => {
        if (a.isComprehensive === b.isComprehensive) return 0;
        return a.isComprehensive ? -1 : 1;
      }),
    };
  }, [searchQuery, selectedSubject]);

  // Separate games into single and multiplayer sections
  const singlePlayerGames = filteredGames.filter(game => game.mode !== 'multiplayer');
  const multiPlayerGames = filteredGames.filter(game => game.mode === 'multiplayer');

  const renderGamesSection = (games: Game[], title: string) => (
    <View style={styles.section}>
      <Text variant="titleMedium" style={styles.sectionTitle}>
        {title}
      </Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.gamesScrollContent}
      >
        {games.map(game => (
          <View key={game.id} style={styles.gameCard}>
            <GameTile
              game={game}
              onPress={() => router.push(`/game/${game.id}`)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        {/*<Searchbar*/}
        {/*  placeholder="Search games..."*/}
        {/*  onChangeText={setSearchQuery}*/}
        {/*  value={searchQuery}*/}
        {/*  style={styles.searchBar}*/}
        {/*/>*/}
      </View>

      {/* Subject Selection Header */}
      <View style={styles.subjectHeaderContainer}>
        <Text variant="titleLarge" style={styles.subjectHeaderText}>
          Select a Subject to Play
        </Text>
        {/* <Text variant="bodyMedium" style={styles.subjectSubheaderText}>
          Choose a topic that sparks your curiosity and start your learning journey!
        </Text> */}
      </View>

      {/* Subjects ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.subjectsContainer}
        contentContainerStyle={styles.subjectsContent}
      >
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
        {/* Single Player Section */}
        {renderGamesSection(
          singlePlayerGames,
          'Select a Topic to Play'
        )}

        <Divider style={styles.divider} />

        {/* Multiplayer Section */}
        {renderGamesSection(
          multiPlayerGames,
          selectedSubject 
            ? subjects.find(s => s.id === selectedSubject)?.name || 'Play Multi-player'
            : 'Play Multi-player'
        )}
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
  },
  searchBar: {
    elevation: 0,
    borderRadius: 8,
  },
  subjectsContainer: {
    flexGrow: 0,
    marginBottom: 16,
  },
  subjectsContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  gamesScrollContent: {
    paddingHorizontal: 16,
    gap: 16,
  },
  gameCard: {
    width: (Dimensions.get('window').width - 32 - 16) / 2, // Screen width - horizontal padding - gap between cards, divided by 2
  },
  divider: {
    marginVertical: 8,
  },
  subjectHeaderContainer: {
    padding: 16,
  },
  subjectHeaderText: {
    marginBottom: 4,
  },
  subjectSubheaderText: {
    color: '#666',
  },
});
