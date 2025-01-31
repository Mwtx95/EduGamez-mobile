import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { Text, Button, useTheme, Divider, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubjectCard } from "../components/SubjectCard";
import { GameTile } from "../components/GameTile";
import { subjects } from "../constants/subjects";
import { Game } from "../types";
import { router } from "expo-router";

// TODO: Replace with actual data fetching
const mockGames: Game[] = [
  // Math Games - Comprehensive
  {
    id: "math-all-single",
    title: "Math Master",
    subject: "math",
    topic: "All Topics",
    educationLevel: "Primary",
    description: "Complete math course",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    isComprehensive: true,
    mode: "singleplayer",
  },
  {
    id: "math-all-multi",
    title: "Math Olympics",
    subject: "math",
    topic: "All Topics",
    educationLevel: "Primary",
    description: "Compete in all topics",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    isComprehensive: true,
    mode: "multiplayer",
  },
  // Math Games - Topic Specific
  {
    id: "math-algebra-single",
    title: "Algebra Quest",
    subject: "math",
    topic: "Algebra",
    educationLevel: "Primary",
    description: "Learn algebra basics",
    questions: [],
    isLocked: false,
    status: "in_progress",
    progress: 0.6,
    lastPlayed: "2023-12-13",
    badge: "Level 3",
    isNew: false,
    mode: "singleplayer",
  },
  {
    id: "math-algebra-multi",
    title: "Algebra Arena",
    subject: "math",
    topic: "Algebra",
    educationLevel: "Primary",
    description: "Algebra battles",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: false,
    mode: "multiplayer",
  },
  // Math - Trigonometry
  {
    id: "math-trig-single",
    title: "Trig Trek",
    subject: "math",
    topic: "Trigonometry",
    educationLevel: "Primary",
    description: "Master trigonometry",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "singleplayer",
  },
  {
    id: "math-trig-multi",
    title: "Trig Tournament",
    subject: "math",
    topic: "Trigonometry",
    educationLevel: "Primary",
    description: "Trig challenges",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "multiplayer",
  },
  // Math - Linear Programming
  {
    id: "math-linear-prog-single",
    title: "Linear Pro",
    subject: "math",
    topic: "Linear Programming",
    educationLevel: "Primary",
    description: "Learn optimization",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "singleplayer",
  },
  {
    id: "math-linear-prog-multi",
    title: "Linear League",
    subject: "math",
    topic: "Linear Programming",
    educationLevel: "Primary",
    description: "Compete & optimize",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "multiplayer",
  },
  // Math - Statistics
  {
    id: "math-stats-single",
    title: "Stats Safari",
    subject: "math",
    topic: "Statistics",
    educationLevel: "Primary",
    description: "Master statistics",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "singleplayer",
  },
  {
    id: "math-stats-multi",
    title: "Stats Battle",
    subject: "math",
    topic: "Statistics",
    educationLevel: "Primary",
    description: "Stats showdown",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "multiplayer",
  },
  // Math - Logarithm
  {
    id: "math-log-single",
    title: "Log Quest",
    subject: "math",
    topic: "Logarithm",
    educationLevel: "Primary",
    description: "Master logarithms",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "singleplayer",
    gameType: "logarithm",
  },
  {
    id: "math-log-multi",
    title: "Log Legends",
    subject: "math",
    topic: "Logarithm",
    educationLevel: "Primary",
    description: "Log challenges",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "multiplayer",
    gameType: "logarithm",
  },
  // Science Games - Comprehensive
  {
    id: "science-all-single",
    title: "Science Explorer",
    subject: "science",
    topic: "All Topics",
    educationLevel: "Primary",
    description: "Explore all science topics solo",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    isComprehensive: true,
    mode: "singleplayer",
  },
  {
    id: "science-all-multi",
    title: "Science Showdown",
    subject: "science",
    topic: "All Topics",
    educationLevel: "Primary",
    description: "Compete across all science topics",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    isComprehensive: true,
    mode: "multiplayer",
  },
  // Science Games - Topic Specific
  {
    id: "science-chemistry-single",
    title: "Chemistry Lab",
    subject: "science",
    topic: "Chemistry",
    educationLevel: "Primary",
    description: "Virtual chemistry experiments",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "singleplayer",
  },
  {
    id: "science-chemistry-multi",
    title: "Chemistry Challenge",
    subject: "science",
    topic: "Chemistry",
    educationLevel: "Primary",
    description: "Multiplayer chemistry competitions",
    questions: [],
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "multiplayer",
  },
];

const englishGrammarGames: Game[] = [
  {
    id: "eng_beg",
    title: "Basic Grammar",
    subject: "english",
    educationLevel: "beginner",
    topic: "grammar-beginner",
    description: "Learn basic English grammar concepts",
    questions: [], // Questions will be loaded dynamically
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "singleplayer",
    gameType: "quiz",
  },
  {
    id: "eng_int",
    title: "Intermediate Grammar",
    subject: "english",
    educationLevel: "intermediate",
    topic: "grammar-intermediate",
    description: "Master advanced grammar structures",
    questions: [], // Questions will be loaded dynamically
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "singleplayer",
    gameType: "quiz",
  },
  {
    id: "eng_adv",
    title: "Advanced Grammar",
    subject: "english",
    educationLevel: "advanced",
    topic: "grammar-advanced",
    description: "Perfect complex grammar and usage",
    questions: [], // Questions will be loaded dynamically
    isLocked: false,
    status: "not_started",
    progress: 0,
    isNew: true,
    mode: "singleplayer",
    gameType: "quiz",
  },
];

// Combine all games
const allGames = [...mockGames, ...englishGrammarGames];

export default function HomeScreen() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const { filteredGames } = useMemo(() => {
    const filtered = allGames.filter((game) => {
      const matchesSearch =
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.topic.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSubject =
        !selectedSubject || game.subject === selectedSubject;
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
  const singlePlayerGames = filteredGames.filter(
    (game) => game.mode !== "multiplayer"
  );
  const multiPlayerGames = filteredGames.filter(
    (game) => game.mode === "multiplayer"
  );

  //   <View style={styles.section}>
  //     <Text variant="titleMedium" style={styles.sectionTitle}>
  //       {title}
  //     </Text>
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle={styles.gamesScrollContent}
  //     >
  //       {games.map((game) => (
  //         <View key={game.id} style={styles.gameCard}>
  //           <GameTile
  //             game={game}
  //             onPress={() =>
  //               router.push({
  //                 pathname: "/components/GameTile",
  //                 params: { id: game.id },
  //               })
  //             }
  //           />
  //         </View>
  //       ))}
  //     </ScrollView>
  //   </View>
  // );

  const handleMultiplayerPress = () => {
    // TODO: Replace with actual premium upgrade logic
    alert("Upgrade to premium to access multiplayer games!");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Subject Selection Header */}
      <View style={styles.subjectHeaderContainer}>
        <Text variant="titleLarge" style={styles.subjectHeaderText}>
          Select a subject
        </Text>
      </View>

      {/* Subjects ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.subjectsContainer}
        contentContainerStyle={styles.subjectsContent}
      >
        {subjects.map((subject) => (
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
        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Select a topic to play
          </Text>
          <Searchbar
            placeholder="Search a topic..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.gamesScrollContent}
          >
            {singlePlayerGames
              .filter(
                (game) =>
                  game.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  game.topic.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((game) => (
                <View key={game.id} style={styles.gameCard}>
                  <GameTile
                    game={game}
                    onPress={() => {
                      // For now, just show an alert since the game route might not be set up
                      alert(`Starting game: ${game.title}`);
                    }}
                  />
                </View>
              ))}
          </ScrollView>
        </View>

        <Divider style={styles.divider} />

        {/* Multiplayer Section */}
        <View style={styles.section}>
          <View style={styles.multiplayerButtonContainer}>
            <Button
              mode="contained"
              onPress={handleMultiplayerPress}
              style={styles.multiplayerButton}
            >
              Switch to multiplayer mode
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 16,
  },
  searchBar: {
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 0,
    backgroundColor: "#fff",
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
    fontSize: 18,
  },
  gamesScrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  gameCard: {
    marginRight: 8,
  },
  divider: {
    marginVertical: 16,
  },
  subjectHeaderContainer: {
    padding: 16,
  },
  subjectHeaderText: {
    marginBottom: 4,
  },
  subjectSubheaderText: {
    color: "#666",
  },
  multiplayerButtonContainer: {
    padding: 16,
    alignItems: "center",
  },
  multiplayerButton: {
    width: "80%",
    paddingVertical: 8,
    borderRadius: 4,
  },
});
