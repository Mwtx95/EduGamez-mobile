import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, Text, Modal, Portal, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { GuestRegistrationForm } from './components/GuestRegistrationForm';

export default function WelcomeScreen() {
  const [guestModalVisible, setGuestModalVisible] = useState(false);

  const showGuestModal = () => setGuestModalVisible(true);
  const hideGuestModal = () => setGuestModalVisible(false);

  const handlePremiumFeature = () => {
    // TODO: Implement premium feature notification
    alert('This feature is only available in the premium version.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/edugamez-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text variant="headlineLarge" style={styles.title}>
            EduGamez
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            Learn Through Play
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handlePremiumFeature}
            style={styles.button}
            icon="account-key"
          >
            Login
          </Button>

          <Button
            mode="contained"
            onPress={handlePremiumFeature}
            style={styles.button}
            icon="account-plus"
          >
            Sign Up
          </Button>

          <Button
            mode="outlined"
            onPress={showGuestModal}
            style={styles.button}
            icon="account"
          >
            Continue as Guest
          </Button>
        </View>

        <Portal>
          <Modal
            visible={guestModalVisible}
            onDismiss={hideGuestModal}
            contentContainerStyle={styles.modalContainer}
          >
            <Surface style={styles.modalContent}>
              <Text variant="titleLarge" style={styles.modalTitle}>
                Quick Registration
              </Text>
              <Text variant="bodyMedium" style={styles.modalSubtitle}>
                Please provide a few details to get started
              </Text>
              <GuestRegistrationForm />
              <Button onPress={hideGuestModal} style={styles.cancelButton}>
                Cancel
              </Button>
            </Surface>
          </Modal>
        </Portal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 16,
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
  },
  button: {
    width: '100%',
  },
  modalContainer: {
    padding: 16,
  },
  modalContent: {
    padding: 24,
    borderRadius: 12,
    elevation: 5,
  },
  modalTitle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtitle: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  cancelButton: {
    marginTop: 8,
  },
});
