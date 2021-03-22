import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  'uk-UA': { Training: 'Тренування', Place: 'Тренування за областю', Full: 'Тренування всього тіла', Hands: 'Тренування рук', Abs: 'Тренування пресу', Settings: 'Тренування стегон', Legs: 'Тренування ніг', Type: 'Тренування за типом', Cardio: 'Кардіо', Pwr: 'Силові вправи', Stretching: 'Розтяжка'},
  en: { Training: 'Training', Place: 'Body Place Training', Full: 'Full Body Training', Hands: 'Hands Training', Abs: 'ABS Training', Hips: 'Hips Training', Legs: 'Legs Training', Type: 'Training Type', Cardio: 'Cardio', Pwr: 'Power Training', Stretching: 'Stretching'},
};

export const Training = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          {i18n.t('Training')}
        </Text>
        <Text style={styles.subTitle}>{i18n.t('Place')}</Text>
        <TouchableOpacity>
          <ImageBackground 
            source={require ('./img/FullBody.png')}
            style={styles.firstImg}
          >
          <Text style={styles.imgText}>{i18n.t('Full')}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <ImageBackground 
              source={require ('./img/Hands.png')}
              style={styles.img}
            >
            <Text style={styles.imgText}>{i18n.t('Hands')}</Text>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground 
            source={require ('./img/ABS.png')}
            style={styles.img}
          >
            <Text style={styles.imgText}>{i18n.t('Abs')}</Text>
          </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <ImageBackground 
            source={require ('./img/Hips.png')}
            style={styles.img}
          >
            <Text style={styles.imgText}>{i18n.t('Hips')}</Text>
          </ImageBackground></TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground 
            source={require ('./img/Legs.png')}
            style={styles.img}
          >
            <Text style={styles.imgText}>{i18n.t('Legs')}</Text>
          </ImageBackground>
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle}>
          {i18n.t('Type')}
        </Text>
        <View style={styles.imgContainer}>
          <TouchableOpacity>
            <ImageBackground 
            source={require ('./img/Cardio.png')}
            style={styles.img}
          >
            <Text style={styles.imgText}>{i18n.t('Cardio')}</Text>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground 
            source={require ('./img/Pwr.png')}
            style={styles.img}
          >
            <Text style={styles.imgText}>{i18n.t('Pwr')}</Text>
          </ImageBackground>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <ImageBackground 
          source={require ('./img/Stretching.png')}
          style={styles.firstImg}
        >
          <Text style={styles.imgText}>{i18n.t('Stretching')}</Text>
        </ImageBackground>
        </TouchableOpacity> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20%',
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: 'center',
  },
    subTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: 'left',
    width: 320,
    color: 'black',
    marginTop: 20,
  },
  imgText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 15
  },
  firstImg: {
    height: 146,
    width: 323,
    justifyContent: 'flex-end',
    marginTop: 21,
    marginBottom: 21,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 151,
    height: 151,
    marginTop: 21,
    justifyContent: 'flex-end',
  }
})
