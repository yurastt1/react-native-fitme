import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
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
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, CreateStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import diets from './src/img/Diets.svg'
import training from './src/img/Training.svg'
import statistics from './src/img/Statistics.svg'
import profile from './src/img/Profile.svg'
import { Check } from './src/Check'
import { Train } from './src/Train'
import { Diet } from './Diet'
import { Statistics } from './Statistics'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default class App extends React.Component {
  state= {
    isLogged: false,
  }

  isLoggedChanger= () => {
    this.setState((state)=>{
      return {isLogged: !state.isLogged}
    })
    
  } 
  
render() {
  return (
    this.state.isLogged ?
    <NavigationContainer >
       <Tab.Navigator
      barStyle={{ paddingBottom: 48 }}
      >
        <Tab.Screen name="Diet" component={Diet} 
          options={{
            tabBarLabel: 'Diets',
            tabBarIcon: (diets),
          }}
        />
        <Tab.Screen name="Train" component={Train} 
          options={{
            tabBarLabel: 'Training',
            tabBarIcon: (training),
          }}
        />
           <Tab.Screen name="Statistics" component={Statistics} 
          options={{
            tabBarLabel: 'Statistics',
            tabBarIcon: (statistics),
          }}
/>
        <Tab.Screen name="Stack1" component={(props) => <Check {...props} isLogged={this.state.isLogged} isLoggedChanger={this.isLoggedChanger} />} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: (profile),
          }}
        />
          
      </Tab.Navigator> 
    </NavigationContainer>
    : 
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Start" component={(props) => <StartScreen {...props} data={this.state.isLogged} />} />
        <Stack.Screen name="YourGender" component={YourGender} />
        <Stack.Screen name="YourGoal" component={YourGoal} />
        <Stack.Screen name="YourPlace" component={YourPlace} />
        <Stack.Screen name="YourData" component={(props) => <YourData {...props} isLogged={this.state.isLogged} isLoggedChanger={this.isLoggedChanger} />} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
