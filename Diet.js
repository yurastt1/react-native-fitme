import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, CreateStackNavigator} from '@react-navigation/stack'

import { FishDiet } from './FishDiet'
import { Diets } from './src/Diets'
import { DietDay } from './DietDay'




const Stack = createStackNavigator();
export const Diet = ({ isLoggedChanger}) => {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Diets" component={Diets} />
        <Stack.Screen name="FishDiet" component={FishDiet} />
        <Stack.Screen name="DietDay" component={DietDay} />

     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
