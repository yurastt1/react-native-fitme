import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, CreateStackNavigator} from '@react-navigation/stack'
import { Profile } from './Profile'
import { PersonalInfo } from './PersonalInfo'
import { Place } from './Place'


const Stack = createStackNavigator();
export const Check = ({ isLoggedChanger}) => {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Profile" component={(props) => <Profile {...props} isLoggedChanger={isLoggedChanger} />} />
        
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
        <Stack.Screen name="Place" component={Place} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
