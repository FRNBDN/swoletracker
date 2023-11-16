import { StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../../components/Themed';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  const navigateToTab = (tabName: string) => {
    navigation.navigate(tabName as never);
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Swole Tracker</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigateToTab('composition')}>
          <Text style={styles.buttonText}>Body Composition</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigateToTab('cardio')}>
          <Text style={styles.buttonText}>Cardio Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigateToTab('lifting')}>
          <Text style={styles.buttonText}>Weightlifting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Aligns content at the beginning and end of the main axis (vertically)
    paddingBottom: 20, // Padding to create space at the bottom for buttons
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Adjust margin to create space between content and buttons
  },
  buttonsContainer: {
    marginBottom: 20, // Adjust margin to create space between buttons and screen bottom
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10, // Adjust margin between buttons
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
    backgroundColor: 'gray', // Adjust separator styles as needed
  },
});
