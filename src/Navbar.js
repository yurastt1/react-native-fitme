import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  'uk-UA': { Diets: 'Дієта', Training: 'Тренування', Statistics: 'Статистика', Profile: 'Профіль'},
  en: { Diets: 'Diets', Training: 'Training', Statistics: 'Statistics', Profile: 'Profile'},
};

i18n.locale = Localization.locale;

export const Navbar = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.diets}>
          
          </View>
        <Text style={styles.text}>{i18n.t('Diets')}</Text>
      </View>
      

      <View>
        <View style={styles.diets}/>
        <Text style={styles.text}>{i18n.t('Training')}</Text>
      </View>

      <View>
        <View style={styles.diets}/>
        <Text style={styles.text}>{i18n.t('Statistics')}</Text>
      </View>

      <View>
        <View style={styles.diets}/>
        <Text style={styles.text}>{i18n.t('Profile')}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    color: 'red',
  },
  diets: {
    borderWidth: 1,
    
    borderColor: 'rgba(53, 57, 63, 0.6)',
    width: 72,
    height: 72,
  },
  text: {
    color: 'red'
  }
});

