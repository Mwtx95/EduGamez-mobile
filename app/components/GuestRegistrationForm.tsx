import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, HelperText, Menu, TouchableRipple, Text } from 'react-native-paper';
import { router } from 'expo-router';

interface GuestUser {
  nickname: string;
  age: string;
  educationLevel: string;
}

interface GuestRegistrationFormProps {
  onSubmit: () => void;
}

const educationLevels = [
  'Lower Primary',
  'Upper Primary',
  'O Level',
];

export const GuestRegistrationForm: React.FC<GuestRegistrationFormProps> = ({ onSubmit }) => {
  const [guestData, setGuestData] = useState<GuestUser>({
    nickname: '',
    age: '',
    educationLevel: '',
  });
  const [errors, setErrors] = useState<Partial<GuestUser>>({});
  const [menuVisible, setMenuVisible] = useState(false);

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
      onSubmit(); // Call the onSubmit callback
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

      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <TouchableRipple onPress={() => setMenuVisible(true)}>
            <View>
              <TextInput
                label="Education Level"
                value={guestData.educationLevel}
                mode="outlined"
                style={styles.input}
                error={!!errors.educationLevel}
                editable={false}
                right={<TextInput.Icon icon="menu-down" />}
              />
            </View>
          </TouchableRipple>
        }
      >
        {educationLevels.map((level) => (
          <Menu.Item
            key={level}
            onPress={() => {
              setGuestData({ ...guestData, educationLevel: level });
              setMenuVisible(false);
            }}
            title={level}
          />
        ))}
      </Menu>
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
