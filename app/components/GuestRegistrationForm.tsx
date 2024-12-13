import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { router } from 'expo-router';

interface GuestUser {
  nickname: string;
  age: string;
  educationLevel: string;
}

export const GuestRegistrationForm = () => {
  const [guestData, setGuestData] = useState<GuestUser>({
    nickname: '',
    age: '',
    educationLevel: '',
  });
  const [errors, setErrors] = useState<Partial<GuestUser>>({});

  const validate = () => {
    const newErrors: Partial<GuestUser> = {};
    if (!guestData.nickname.trim()) {
      newErrors.nickname = 'Nickname is required';
    }
    if (!guestData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(guestData.age)) || Number(guestData.age) < 5) {
      newErrors.age = 'Please enter a valid age (5 or above)';
    }
    if (!guestData.educationLevel.trim()) {
      newErrors.educationLevel = 'Education level is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // TODO: Save guest data to local storage or state management
      router.push('/home');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nickname"
        value={guestData.nickname}
        onChangeText={(text) => setGuestData({ ...guestData, nickname: text })}
        mode="outlined"
        style={styles.input}
        error={!!errors.nickname}
      />
      <HelperText type="error" visible={!!errors.nickname}>
        {errors.nickname}
      </HelperText>

      <TextInput
        label="Age"
        value={guestData.age}
        onChangeText={(text) => setGuestData({ ...guestData, age: text })}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
        error={!!errors.age}
      />
      <HelperText type="error" visible={!!errors.age}>
        {errors.age}
      </HelperText>

      <TextInput
        label="Education Level"
        value={guestData.educationLevel}
        onChangeText={(text) => setGuestData({ ...guestData, educationLevel: text })}
        mode="outlined"
        style={styles.input}
        error={!!errors.educationLevel}
      />
      <HelperText type="error" visible={!!errors.educationLevel}>
        {errors.educationLevel}
      </HelperText>

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
      >
        Start Playing
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 4,
  },
  button: {
    marginTop: 16,
  },
});
