import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export const PersonalInfo =()=> {
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
