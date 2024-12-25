import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, HelperText, Menu, TouchableRipple, Text } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { router } from 'expo-router';

interface GuestUser {
  username: string;
  dateOfBirth: Date | null;
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
    username: '',
    dateOfBirth: null,
    educationLevel: '',
  });
  const [errors, setErrors] = useState<Partial<GuestUser>>({});
  const [menuVisible, setMenuVisible] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

 const validate = () => {
  const newErrors: Partial<GuestUser> = {};
  const phoneNumberRegex = /\d{8}/;

  if (!guestData.username.trim()) {
    newErrors.username = 'Username is required';
  } else if (guestData.username.length > 8) {
    newErrors.username = 'Username must be at most 8 characters';
  } else if (phoneNumberRegex.test(guestData.username)) {
    newErrors.username = 'Username should not contain a phone number';
  }

  if (!guestData.dateOfBirth) {
    newErrors.dateOfBirth = 'Date of Birth is required' as unknown as Date;
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
      router.replace('/(tabs)/home');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={guestData.username}
        onChangeText={(text) => setGuestData({ ...guestData, username: text })}
        mode="outlined"
        style={styles.input}
        error={!!errors.username}
        maxLength={8}
      />
      <HelperText type="error" visible={!!errors.username}>
        {errors.username}
      </HelperText>

      <TouchableRipple onPress={() => setDatePickerVisible(true)}>
        <View pointerEvents="none">
          <TextInput
            label="Date of Birth"
            value={guestData.dateOfBirth ? guestData.dateOfBirth.toDateString() : ''}
            mode="outlined"
            style={styles.input}
            error={!!errors.dateOfBirth}
            editable={false}
            right={<TextInput.Icon icon="calendar" />}
          />
        </View>
      </TouchableRipple>
      <HelperText type="error" visible={!!errors.dateOfBirth}>
        {errors.dateOfBirth?.toString()}
      </HelperText>

        <DatePickerModal
            mode="single"
            visible={datePickerVisible}
            onDismiss={() => setDatePickerVisible(false)}
            date={guestData.dateOfBirth || undefined}
            onConfirm={(date) => {
                setGuestData({ ...guestData, dateOfBirth: date.date || null });
                setDatePickerVisible(false);
            }}
            locale="en" // Add the required locale property
        />

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