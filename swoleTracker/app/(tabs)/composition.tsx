import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BodyCompositionForm from '../../components/BodyCompositionForm';

const TabTwoScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      navigation.setOptions({
        title: 'Body Composition', // Change the title dynamically
      });
    }
  }, [isFocused, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Body Composition</Text>
      </View>
      <View style={styles.form}>
          <BodyCompositionForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
      fontSize: 45,
      fontWeight: 'bold',
      color: 'white',
  },
  titleContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '90%',
    height: '60%',
  },
});

export default TabTwoScreen;
