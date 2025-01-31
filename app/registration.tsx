import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import { TextInput, Button, HelperText, Menu, TouchableRipple, Text } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface UserRegistration {
  username: string;
  dateOfBirth: Date | null;
  educationLevel: string;
  password: string;
  confirmPassword: string;
}

interface RegistrationFormProps {
  onSubmit: () => void;
}

const educationLevels = [
  'STD IV',
  'STD V',
  'STD VI',
  'STD VII',
  'FORM I',
  'FORM II',
  'FORM III',
  'FORM IV',
];

export const UserRegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<UserRegistration>({
    username: '',
    dateOfBirth: null,
    educationLevel: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Partial<UserRegistration>>({});
  const [menuVisible, setMenuVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Calculate age restrictions dynamically
  const getDateRestrictions = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 8); // Minimum age of 8
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 20); // Maximum age of 20
    return { maxDate, minDate };
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setUserData({ ...userData, dateOfBirth: selectedDate });
    }
  };

  const validate = () => {
    const newErrors: Partial<UserRegistration> = {};

    if (!userData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!userData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of Birth is required' as unknown as Date;
    }

    if (!userData.educationLevel.trim()) {
      newErrors.educationLevel = 'Education level is required';
    }

    if (!userData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // TODO: Save user data to local storage or state management
      onSubmit(); // Call the onSubmit callback
      router.replace('/(tabs)/home');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={userData.username}
        onChangeText={(text) => setUserData({ ...userData, username: text })}
        mode="outlined"
        style={styles.input}
        error={!!errors.username}
        maxLength={8}
        placeholderTextColor="#999"
        placeholder="E.g., Umili203"
      />
      <HelperText type="error" visible={!!errors.username}>
        {errors.username}
      </HelperText>

      <TextInput
        label="Password"
        value={userData.password}
        onChangeText={(text) => setUserData({ ...userData, password: text })}
        mode="outlined"
        style={styles.input}
        error={!!errors.password}
        secureTextEntry
      />
      <HelperText type="error" visible={!!errors.password}>
        {errors.password}
      </HelperText>

      <TextInput
        label="Confirm Password"
        value={userData.confirmPassword}
        onChangeText={(text) => setUserData({ ...userData, confirmPassword: text })}
        mode="outlined"
        style={styles.input}
        error={!!errors.confirmPassword}
        secureTextEntry
      />
      <HelperText type="error" visible={!!errors.confirmPassword}>
        {errors.confirmPassword}
      </HelperText>

      <TouchableRipple onPress={() => setShowDatePicker(true)}>
        <View pointerEvents="none">
          <TextInput
            label="Date of Birth"
            value={userData.dateOfBirth ? userData.dateOfBirth.toLocaleDateString() : ''}
            mode="outlined"
            style={styles.input}
            error={!!errors.dateOfBirth}
            editable={false}
            right={<TextInput.Icon icon="calendar" />}
            placeholderTextColor="#999"
            placeholder="date of birth"
          />
        </View>
      </TouchableRipple>
      <HelperText type="error" visible={!!errors.dateOfBirth}>
        {errors.dateOfBirth?.toString()}
      </HelperText>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={userData.dateOfBirth || getDateRestrictions().maxDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
          maximumDate={getDateRestrictions().maxDate}
          minimumDate={getDateRestrictions().minDate}
        />
      )}

      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <TouchableRipple onPress={() => setMenuVisible(true)}>
            <View>
              <TextInput
                label="Grade"
                value={userData.educationLevel}
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
        <ScrollView style={{ maxHeight: 150 }}>
          {educationLevels.map((level) => (
            <Menu.Item
              key={level}
              onPress={() => {
                setUserData({ ...userData, educationLevel: level });
                setMenuVisible(false);
              }}
              title={level}
            />
          ))}
        </ScrollView>
      </Menu>
      <HelperText type="error" visible={!!errors.educationLevel}>
        {errors.educationLevel}
      </HelperText>

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
      >
        Ready To Play
      </Button>
    </View>
  );
};

export default function UserRegistrationScreen() {
  const handleSubmit = () => {
    // TODO: Implement registration logic
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text variant="headlineMedium" style={styles.welcomeTitle}>
          Welcome to EduGamez!
        </Text>
        <Text variant="bodyLarge" style={styles.welcomeSubtitle}>
          Your exciting learning adventure starts here. Create an account and unlock a world of fun education!
        </Text>
      </View>

      <UserRegistrationForm onSubmit={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 4,
  },
  button: {
    marginTop: 16,
    borderRadius: 4,
  },
  headerContainer: {
    padding: 16,
    marginBottom: 16,
  },
  welcomeTitle: {
    marginBottom: 8,
  },
  welcomeSubtitle: {
    marginBottom: 16,
  },
}); 