import React, { useState } from "react";
import { StyleSheet, View, Modal, SafeAreaView } from "react-native";
import {
  Card,
  Text,
  ProgressBar,
  Chip,
  Portal,
  IconButton,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Game } from "../types";
import { subjects } from "../constants/subjects";
import GameComponent from "./GameComponent";
import {
  algebraQuestions,
  trigonometryQuestions,
  linearProgrammingQuestions,
  statisticsQuestions,
  grammarBeginnerQuestions,
  grammarIntermediateQuestions,
  grammarAdvancedQuestions,
} from "../games/mockQuestions";

interface GameTileProps {
  game: Game;
  onPress: () => void;
}

export function GameTile({ game, onPress }: GameTileProps) {
  const [showGame, setShowGame] = useState(false);
  const subject = subjects.find((s) => s.id === game.subject);

  const getLevel = (progress: number) => {
    if (progress === 0) return 0;
    return Math.min(5, Math.ceil(progress * 5));
  };

  const level = getLevel(game.progress || 0);

  const handleGameComplete = (score: number, total: number) => {
    // Update progress based on score
    const newProgress = score / total;
    // TODO: Update game progress in your state management system
    console.log(`Game completed with score: ${score}/${total}`);
    setShowGame(false);
  };

  const getGameQuestions = () => {
    const topic = game.topic.toLowerCase();
    if (topic.includes("algebra")) return algebraQuestions;
    if (topic.includes("trigonometry")) return trigonometryQuestions;
    if (topic.includes("linear")) return linearProgrammingQuestions;
    if (topic.includes("statistics")) return statisticsQuestions;
    if (topic.includes("grammar")) {
      if (topic.includes("beginner")) return grammarBeginnerQuestions;
      if (topic.includes("intermediate")) return grammarIntermediateQuestions;
      if (topic.includes("advanced")) return grammarAdvancedQuestions;
    }
    return algebraQuestions; // Default fallback
  };

  const handlePress = () => {
    setShowGame(true);
  };

  return (
    <>
      <Card style={styles.card} onPress={handlePress}>
        <Card.Content style={styles.content}>
          <View style={styles.header}>
            <MaterialCommunityIcons
              name={subject?.icon || "gamepad-variant"}
              size={32}
              color={subject?.color}
            />
            <View style={styles.levelContainer}>
              {level === 0 ? (
                <Chip compact mode="flat" style={styles.newChip}>
                  <Text style={styles.newChipText}>NEW</Text>
                </Chip>
              ) : (
                <Chip
                  compact
                  mode="flat"
                  style={[
                    styles.levelChip,
                    { backgroundColor: subject?.color + "20" },
                  ]}
                >
                  <Text style={[styles.levelText, { color: subject?.color }]}>
                    LVL {level}
                  </Text>
                </Chip>
              )}
            </View>
          </View>

          <View style={styles.topicContainer}>
            <Text variant="bodyMedium" style={styles.topic} numberOfLines={2}>
              {game.topic}
            </Text>
          </View>

          <View style={styles.progressContainer}>
            <Text variant="bodySmall" style={styles.progressText}>
              {Math.round((game.progress || 0) * 100)}%
            </Text>
            <ProgressBar
              progress={game.progress || 0}
              color={subject?.color}
              style={styles.progressBar}
            />
          </View>
        </Card.Content>
      </Card>

      <Portal>
        <Modal
          visible={showGame}
          onDismiss={() => setShowGame(false)}
          style={styles.modal}
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <IconButton
                icon="close"
                size={24}
                onPress={() => setShowGame(false)}
              />
              <Text style={styles.modalTitle}>{game.topic}</Text>
              <View style={{ width: 48 }} /> {/* Spacer for alignment */}
            </View>
            <View style={styles.modalContent}>
              <GameComponent
                questionsCount={10}
                onGameComplete={handleGameComplete}
                questions={getGameQuestions()}
              />
            </View>
          </SafeAreaView>
        </Modal>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 160,
    marginRight: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    elevation: 4,
  },
  content: {
    padding: 12,
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topicContainer: {
    height: 48,
    justifyContent: "center",
  },
  topic: {
    fontWeight: "500",
    color: "#333",
    textAlign: "left",
  },
  newChip: {
    backgroundColor: "#FFD700",
    height: 28,
  },
  newChipText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
  },
  progressContainer: {
    gap: 4,
  },
  progressText: {
    textAlign: "right",
    color: "#666",
    fontSize: 12,
  },
  levelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  levelChip: {
    height: 28,
  },
  levelText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  modal: {
    margin: 0,
    padding: 0,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  modalContent: {
    flex: 1,
  },
});
