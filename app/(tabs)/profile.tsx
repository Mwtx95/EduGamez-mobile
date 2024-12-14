import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Avatar, List, Button, Divider, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Avatar.Text size={80} label="JD" />
          <Text variant="headlineSmall" style={styles.name}>John Doe</Text>
          <Text variant="bodyMedium" style={styles.level}>Lower Primary</Text>
        </View>

        <View style={styles.statsContainer}>
          <StatItem title="Games Played" value="12" />
          <StatItem title="Average Score" value="7.5" />
          <StatItem title="Best Score" value="9" />
        </View>

        <List.Section>
          <List.Subheader>Progress</List.Subheader>
          <List.Item
            title="Mathematics"
            description="8 games completed"
            left={props => <List.Icon {...props} icon="calculator" />}
          />
          <List.Item
            title="English"
            description="4 games completed"
            left={props => <List.Icon {...props} icon="book" />}
          />
        </List.Section>

        <Divider />

        <List.Section>
          <List.Subheader>Settings</List.Subheader>
          <List.Item
            title="Edit Profile"
            left={props => <List.Icon {...props} icon="account-edit" />}
          />
          <List.Item
            title="Notifications"
            left={props => <List.Icon {...props} icon="bell" />}
          />
          <List.Item
            title="Help & Support"
            left={props => <List.Icon {...props} icon="help-circle" />}
          />
        </List.Section>

        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.button}
            icon="logout"
          >
            Sign Out
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatItem({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.statItem}>
      <Text variant="headlineSmall" style={styles.statValue}>{value}</Text>
      <Text variant="bodySmall" style={styles.statTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  name: {
    marginTop: 12,
    marginBottom: 4,
  },
  level: {
    opacity: 0.7,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontWeight: 'bold',
  },
  statTitle: {
    opacity: 0.7,
  },
  buttonContainer: {
    padding: 16,
  },
  button: {
    marginTop: 8,
  },
});
