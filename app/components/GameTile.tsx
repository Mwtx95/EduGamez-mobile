import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, ProgressBar, Chip } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Game } from '../types';
import { subjects } from '../constants/subjects';

interface GameTileProps {
  game: Game;
  onPress: () => void;
}

export function GameTile({ game, onPress }: GameTileProps) {
  const subject = subjects.find(s => s.id === game.subject);

  const getLevel = (progress: number) => {
    if (progress === 0) return 0;
    return Math.min(5, Math.ceil(progress * 5));
  };

  const level = getLevel(game.progress);

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.content}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name={subject?.icon || 'gamepad-variant'}
            size={32}
            color={subject?.color}
          />
          <View style={styles.levelContainer}>
            {level === 0 ? (
              <Chip compact mode="flat" style={styles.newChip}>
                <Text style={styles.newChipText}>NEW</Text>
              </Chip>
            ) : (
              <Chip compact mode="flat" style={[styles.levelChip, { backgroundColor: subject?.color + '20' }]}>
                <Text style={[styles.levelText, { color: subject?.color }]}>LVL {level}</Text>
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
            {Math.round(game.progress * 100)}%
          </Text>
          <ProgressBar
            progress={game.progress}
            color={subject?.color}
            style={styles.progressBar}
          />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 160,
    marginRight: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
    elevation: 4,
  },
  content: {
    padding: 12,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicContainer: {
    height: 48,
    justifyContent: 'center',
  },
  topic: {
    fontWeight: '500',
    color: '#333',
    textAlign: 'left',
  },
  newChip: {
    backgroundColor: '#FFD700',
    height: 28,
  },
  newChipText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
  },
  progressContainer: {
    gap: 4,
  },
  progressText: {
    textAlign: 'right',
    color: '#666',
    fontSize: 12,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  levelChip: {
    height: 28,
  },
  levelText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
