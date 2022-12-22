import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CointItem from './src/components/CoinItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CointItem />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#585858',
    paddingTop: 50
  },
});
