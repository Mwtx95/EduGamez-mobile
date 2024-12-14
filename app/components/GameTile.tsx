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

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name={subject?.icon || 'gamepad-variant'}
            size={24}
            color={subject?.color}
          />
          {game.isNew && (
            <Chip compact mode="flat" style={[styles.chip, { backgroundColor: '#FFD700' }]}>
              New
            </Chip>
          )}
        </View>
        
        <Text variant="titleMedium" style={styles.title}>
          {game.title}
        </Text>
        
        <Text variant="bodySmall" style={styles.topic}>
          {game.topic}
        </Text>

        <View style={styles.progressContainer}>
          <ProgressBar
            progress={game.progress}
            color={subject?.color}
            style={styles.progressBar}
          />
          <Text variant="labelSmall" style={styles.progressText}>
            {Math.round(game.progress * 100)}%
          </Text>
        </View>

        {game.badge && (
          <Chip compact mode="outlined" style={styles.badge}>
            {game.badge}
          </Chip>
        )}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    flex: 1,
    maxWidth: '45%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    marginBottom: 4,
  },
  topic: {
    opacity: 0.7,
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 4,
  },
  progressText: {
    opacity: 0.7,
  },
  chip: {
    height: 24,
  },
  badge: {
    alignSelf: 'flex-start',
  },
});
