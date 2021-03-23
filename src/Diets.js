import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  'uk-UA': { Diets: 'Дієти', Regular: 'Регулярні дієти', Meat: '30-денна м’ясна дієта', Fish: '30-денна рибна дієта', Vegan: 'Веган', Green: '30-денна зелена дієта', Smoothie: '30-денна смузі-дієта'},
  'en-US': { Diets: 'Diets', Regular: 'Regular Diets', Meat: '30-day meat diet', Fish: '30-day fish diet', Vegan: 'For Vegan', Green: '30-day green diet', Smoothie: '30-day smoothie diet'},
};

export const Diets = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Diets
        </Text>
        <Text style={styles.subTitle}>Regular Diets</Text>
        <TouchableOpacity>
          <ImageBackground 
            source={require ('./img/Meat.png')}
            style={styles.firstImg}
          >
          <Text style={styles.imgText}>30-day meat diet</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('FishDiet')}
        >
          <ImageBackground 
            source={require ('./img/Fish.png')}
            style={styles.firstImg}
          >
          <Text style={styles.imgText}>30-day fish diet</Text>
          </ImageBackground>
        </TouchableOpacity>
        <Text style={styles.subTitle}>
        For Vegan
        </Text>
        <TouchableOpacity>
          <ImageBackground 
            source={require ('./img/Green.png')}
            style={styles.firstImg}
          >
          <Text style={styles.imgText}>30-day green diet</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground 
            source={require ('./img/Smoothie.png')}
            style={styles.firstImg}
          >
          <Text style={styles.imgText}>30-day smoothie diet</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: 'center',
    marginTop: '20%',
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
