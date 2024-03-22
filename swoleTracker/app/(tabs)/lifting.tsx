import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function TabFourScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      navigation.setOptions({
        title: 'Weightlifting', // Change the title dynamically
      });
    }
  }, [isFocused, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weightlifting</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/lifting.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
