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
      <Card.Content style={styles.content}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name={subject?.icon || 'gamepad-variant'}
            size={32}
            color={subject?.color}
          />
          {game.progress === 0 && (
            <Chip compact mode="flat" style={styles.newChip}>
              <Text style={styles.newChipText}>NEW</Text>
            </Chip>
          )}
        </View>
        
        <View style={styles.topicContainer}>
          <Text variant="bodyMedium" style={styles.topic} numberOfLines={2}>
            {game.topic}
          </Text>
        </View>

        <ProgressBar
          progress={game.progress}
          color={subject?.color}
          style={styles.progressBar}
        />
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
});
