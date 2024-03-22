import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BodyCompositionForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [weight, setWeight] = useState('');
  const [muscle, setMuscle] = useState('');
  const [fat, setFat] = useState('');
  const [water, setWater] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');
  const [bmi, setBMI] = useState('');

  const handleSubmit = () => {
    // Handle form submission (e.g., send data to Google Sheets)
    // You can use an API call or any other method to save the data.
    console.log('Form submitted:', {
      date,
      time,
      weight,
      muscle,
      fat,
      water,
      fatPercentage,
      bmi,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Weight (kg)"
        placeholderTextColor="white" // White placeholder text
        value={weight}
        onChangeText={setWeight}
        style={styles.input}
      />
      <TextInput
        placeholder="Muscle (kg)"
        placeholderTextColor="white" // White placeholder text
        value={muscle}
        onChangeText={setMuscle}
        style={styles.input}
      />
        <TextInput
        placeholder="Fat (kg)"
        placeholderTextColor="white" // White placeholder text
        value={fat}
        onChangeText={setFat}
        style={styles.input}
      />
      <TextInput
      placeholder="Water (kg)"
      placeholderTextColor="white" // White placeholder text
      value={water}
      onChangeText={setWater}
      style={styles.input}
    />
    <TextInput
      placeholder="Fat (%)"
      placeholderTextColor="white" // White placeholder text
      value={fatPercentage}
      onChangeText={setFatPercentage}
      style={styles.input}
    />
    <TextInput
      placeholder="BMI"
      placeholderTextColor="white" // White placeholder text
      value={bmi}
      onChangeText={setBMI}
      style={styles.input}
    />
      <Button  title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black', // Black background
    height: '100%', // Take 100% of height
    justifyContent: 'flex-end', // Align items to the bottom
    marginBottom: 30,
  },
  submit: {
    height: 50,
  },
  input: {
    backgroundColor: 'black', // Black background
    padding: 4,
    marginBottom: 16,
    color: 'white', // White text color
    borderBottomWidth: 1,
    borderBottomColor: '#141414', // Dar gray border color
  },

});

export default BodyCompositionForm;


