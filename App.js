import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar'
import { StartScreen } from './src/StartScreen'
import { YourGender } from './src/YourGender'
import { YourGoal } from './src/YourGoal'
import { YourPlace } from './src/YourPlace'
import { YourData } from './src/YourData'
import { Profile } from './src/Profile'
import { PersonalInfo } from './src/PersonalInfo'
import { Place } from './src/Place'
import { Training } from './src/Training'
import { Diets } from './src/Diets'



export default function App() {
  return (
    <View style={styles.container}>

      <Diets />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
