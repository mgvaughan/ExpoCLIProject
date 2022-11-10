import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.textStyle}>#crushingit</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  container3: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 40,
    fontFamily: 'Optima-Regular'
  }
});
