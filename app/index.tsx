import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';
import { UserRegistrationForm } from './registration';
import { color } from 'react-native-elements/dist/helpers';
import { colorsDark } from 'react-native-elements/dist/config';

export default function WelcomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); UserRegistrationForm

  const handleSignIn = () => {
    // TODO: Implement sign-in logic
    console.log('Sign in with:', username, password);
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
          <Text variant="titleLarge" style={styles.subtitle}>
            Good to see you again!
          </Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            mode="outlined"
            secureTextEntry
          />
          <Button
            mode="contained"
            onPress={handleSignIn}
            style={styles.signInButton}
          >
            Sign In
          </Button>

          <View style={styles.signupLinkContainer}>
            <Text variant="bodySmall">
              Don't have an account?{' '}
              <Text
                style={styles.signupLink}
                onPress={() => router.push('/registration')}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

    // <Redirect href="/(tabs)/home" />
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
  subtitle: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '70%',
  },
  formContainer: {
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
  },
  input: {
    marginBottom: 16,
  },
  signInButton: {
    marginTop: 8,
  },
  signupLinkContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  signupLink: {
    color: '#007aff',
    textDecorationLine: 'underline',
  },
});
