
// THis doesn't work
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Chip, Text, Title, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameCard } from './components/GameCard';
import { Game } from './types';

// TODO: Replace with actual data fetching
const mockGames: Game[] = [
  {
    id: '1',
    title: 'Basic Mathematics',
    subject: 'Mathematics',
    educationLevel: 'Primary',
    topic: 'Addition and Subtraction',
    questions: [],
    isLocked: false,
    description: '',
    progress: 0,
    status: 'not_started'
  },
  {
    id: '2',
    title: 'English Grammar',
    subject: 'English',
    educationLevel: 'Primary',
    topic: 'Parts of Speech',
    questions: [],
    isLocked: true,
    description: '',
    progress: 0,
    status: 'not_started'
  },
];

const subjects = ['All', 'Mathematics', 'English', 'Science', 'History'];
const levels = ['All', 'Primary', 'Secondary', 'High School'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredGames = mockGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'All' || game.subject === selectedSubject;
    const matchesLevel = selectedLevel === 'All' || game.educationLevel === selectedLevel;
    return matchesSearch && matchesSubject && matchesLevel;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>EduGamez</Title>
        <Avatar.Image size={40} source={{ uri: 'https://avatars.githubusercontent.com/u/141448135?v=4&size=64' }} />
        <Searchbar
          placeholder="Search games..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        <View style={styles.chipGroup}>
          {subjects.map(subject => (
            <Chip
              key={subject}
              selected={selectedSubject === subject}
              onPress={() => setSelectedSubject(subject)}
              style={styles.chip}
            >
              {subject}
            </Chip>
          ))}
        </View>
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        <View style={styles.chipGroup}>
          {levels.map(level => (
            <Chip
              key={level}
              selected={selectedLevel === level}
              onPress={() => setSelectedLevel(level)}
              style={styles.chip}
            >
              {level}
            </Chip>
          ))}
        </View>
      </ScrollView>

      <ScrollView style={styles.gamesContainer}>
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))
        ) : (
          <Text style={styles.noGames}>No games found</Text>
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
    backgroundColor: '#fff',
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
  },
  searchBar: {
    flex: 1,
    marginLeft: 16,
  },
  filtersContainer: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  chipGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  chip: {
    marginRight: 8,
  },
  gamesContainer: {
    flex: 1,
    padding: 8,
  },
  noGames: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
  },
});