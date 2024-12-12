import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { router } from 'expo-router';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card
      style={styles.card}
      onPress={() => !game.isLocked && router.push(`/game/${game.id}`)}
    >
      <Card.Content>
        <Title>{game.title}</Title>
        <Paragraph>{`${game.subject} - ${game.topic}`}</Paragraph>
        <Paragraph>{`Level: ${game.educationLevel}`}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <IconButton
          icon={game.isLocked ? 'lock' : 'play'}
          disabled={game.isLocked}
          onPress={() => router.push(`/game/${game.id}`)}
        />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    elevation: 4,
  },
});
