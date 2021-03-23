import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, CreateStackNavigator} from '@react-navigation/stack'
import { Profile } from './Profile'
import { TrainingEx } from './TrainingEx'
import { Training } from './Training'
import { TrainingWorkout } from './TrainingWorkout'
import { TrainingExerFake } from '../TrainingExerFake'
import { TrainingExerFake1 } from '../TrainingExerFake1'
import { TrainingExerFake2 } from '../TrainingExerFake2'
import { TrainingExerFake3 } from '../TrainingExerFake3'
import { TrainingExerDone } from '../TrainingExerDone'




const Stack = createStackNavigator();
export const Train = ({ isLoggedChanger}) => {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Training" component={Training} />
        <Stack.Screen name="mama" component={TrainingWorkout} />
        
        <Stack.Screen name="TrainingEx" component={TrainingEx} />
        <Stack.Screen name="TrainingExerFake" component={TrainingExerFake} />
        <Stack.Screen name="TrainingExerFake1" component={TrainingExerFake1} />
        <Stack.Screen name="TrainingExerFake2" component={TrainingExerFake2} />
        <Stack.Screen name="TrainingExerFake3" component={TrainingExerFake3} />
        <Stack.Screen name="TrainingExerDone" component={TrainingExerDone} />

     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
