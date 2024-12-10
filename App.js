import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './Navigation';



import TodoScreen from './src/screens/TodoScreen';
import BAR from './src/screens/ProgessBar';



export default function App() {
  return (
    <SafeAreaView>
      <View>
      <Navigation/>
      </View>
    </SafeAreaView>
  );
}


