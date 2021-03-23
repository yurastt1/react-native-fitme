import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator, CreateStackNavigator} from '@react-navigation/stack'

i18n.translations = {
  'uk-UA': { Hello: 'Почни працювати над собою з нашою персональною дієтою та тренуйся вдома або в тренажерному залі.', Start: 'Почати'},
  en: { Hello: 'Start to work on yourself with our personal diet & training at home or in a gym.', Start: 'Start'},
};

i18n.locale = 'en' //Localization.locale;

export const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>FitMe</Text>
        <Text style={styles.text}>Start to work on yourself with our personal diet & training at home or in a gym.</Text>
      
      
        <TouchableOpacity
          onPress={()=> {
           navigation.navigate('YourGender')
          }}
          style={styles.button}
        >
          <Text style={styles.start}>Start</Text>
        </TouchableOpacity>
      

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'Mont-Heavy',
    textAlign: 'center',
    // fontWeight: 800,
    fontSize: 60
  },
  button: {
    marginBottom: 60,
    backgroundColor: 'black',
    borderRadius: 2,
    width: 323,
    height: 50,
    alignItems: 'center',
    padding: 15,
  },
  start: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    width: 323,
    textAlign: "center",
    marginBottom: 224,
    marginTop: 30,
    fontFamily: 'Mont-SemiBold',
    // fontWeight: 600
  }
  
});
