import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ImageBackground} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Svg from './img/svg.svg'


export const TrainingWorkout =({ navigation })=> {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground source={require ('./img/FullBody.png')}
            style={styles.firstImg}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require ('./img/ArrowLeft.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Full Body</Text>
        <Text style={styles.subTitle}>A full body workout aims to hit all the major muscle groups in one single session.</Text>
        </ImageBackground>
      </View>
      <View style={styles.flex}>
        <View style={styles.sep}>
          <Svg width="12" height="12"/> 
          <Text style={styles.sepText}>Split Jumps</Text>
        </View>
        <Text style={styles.sepTextBot}>2 min</Text>
      
      <View style={styles.sep}>
          <Svg width="12" height="12"/> 
          <Text style={styles.sepText}>Plank</Text>
        </View>
        <Text style={styles.sepTextBot}>2 min</Text>
        <View style={styles.sep}>
          <Svg width="12" height="12"/> 
          <Text style={styles.sepText}>Squats</Text>
        </View>
        <Text style={styles.sepTextBot}>2 min</Text>
        <View style={styles.sep}>
          <Svg width="12" height="12"/> 
          <Text style={styles.sepText}>V-Up</Text>
        </View>
        <Text style={styles.sepTextBot}>2 min</Text>
      
        <View style={styles.sep}>
          <Svg width="12" height="12"/> 
          <Text style={styles.sepText}>Push-Ups</Text>
        </View>
        <Text style={styles.sepTextBot}>2 min</Text>
        </View>
        <TouchableOpacity
          onPress={()=>navigation.navigate('TrainingEx')}
          style={styles.buttonSave}
        >
          <Text style={styles.saveText}>Start</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',

  },

  arrow: {
    width: 26,
    height: 12,
  },
  title: {
    fontSize: 24,
    width: 161,
    fontWeight: "800",
    marginLeft: '25%',
    color: 'white',
    marginTop: '20%',
    marginLeft: '35%',
  },
  icons: {
    marginBottom: 50,
    marginTop: 15
  },
  input: {
    height: 27,
    width: 128,
    fontSize: 18,
    lineHeight: 27,
    paddingBottom: 5,
    fontWeight: "bold",

    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderRadius: 2,
  },
  inputContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 323,
    paddingTop: 50
  },
  inputTextLeft: {
    fontSize: 18,
    fontWeight: "600",
    width: 65
  },
  inputTextRight: {
    fontSize: 18,
    fontWeight: "600",
    width: 30
  },
  buttonSave: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#03041A',
    borderRadius: 2,
    width: 323,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  buttonCancel: {
    marginBottom: 60,
    borderColor: '#03041A',
    borderWidth: 2,
    borderRadius: 2,
    width: 323,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  saveText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cancelText: {
    color: '#03041A',
    fontSize: 16,
    fontWeight: 'bold'
  },
  toggle: {
    width: 198,
    height: 40,
    borderColor: '#03041A',
    borderWidth: 2,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  labelContaier: {
    borderColor: '#03041A',
  },
  firstImg: {
    height: 250,
    width: 375
  },
  subTitle: {
    width: 350,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 10,
    color: 'white',
  },
  flex: {
    justifyContent: 'flex-start',
    width: 323,
    marginTop:10,
  },
  sep: {flexDirection:'row', marginTop: 20},
  sepText: {
    marginLeft: 20,
    
  },
  sepTextBot: {
    marginLeft: 26
  }
});

