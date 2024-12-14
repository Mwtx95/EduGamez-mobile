import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Subject } from '../constants/subjects';

interface SubjectCardProps {
  subject: Subject;
  isSelected: boolean;
  onPress: () => void;
}

export function SubjectCard({ subject, isSelected, onPress }: SubjectCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Surface
        style={[
          styles.card,
          { backgroundColor: isSelected ? subject.color : '#ffffff' },
        ]}
        elevation={2}
      >
        <MaterialCommunityIcons
          name={subject.icon}
          size={32}
          color={isSelected ? '#ffffff' : subject.color}
        />
        <Text
          variant="labelLarge"
          style={[
            styles.text,
            { color: isSelected ? '#ffffff' : '#000000' },
          ]}
        >
          {subject.name}
        </Text>
      </Surface>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 6,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 80,
  },
  text: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: 12,
  },
});
