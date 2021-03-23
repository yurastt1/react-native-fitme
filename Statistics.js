import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {
  'uk-UA': { Data: 'Персональні дані', Age: 'Вік', Weight: 'Вага', Height: 'Зріст', Years: 'р.', kg: 'кг', cm: 'см', Done: 'Готово', Back: 'Назад',  info: 'Важливо зібрати більше інформації про вас, щоб персоналізувати тренування та дієту.'},
  'en-US': { Data: 'Personal Data', Age: 'Age', Weight: 'Weight', Height: 'Height', Years: 'y.o', kg: 'kg', cm: 'cm', Done: 'Done', Back: 'Back', info: 'It’s important to gather more information about you to personalize training and diet.'},
};

export const Statistics = ({ navigation, isLogged, isLoggedChanger }) => {
  
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
      
    </View>
  )
}

const start = () => {
  console.log(1);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});

