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
    margin: 4,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    marginBottom: 4,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
  },
  topic: {
    opacity: 0.7,
    marginBottom: 8,
    fontSize: 13,
    lineHeight: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 3,
  },
  progressText: {
    opacity: 0.7,
    fontSize: 11,
  },
  chip: {
    height: 20,
    marginLeft: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    height: 20,
  },
});
