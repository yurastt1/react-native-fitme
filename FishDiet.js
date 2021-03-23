import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ImageBackground} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { ScrollView } from 'react-native-gesture-handler';

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]


export const FishDiet =({ navigation, i, })=> {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.top}>
        
        <ImageBackground source={require ('./src/img/Fish.png')}
            style={styles.firstImg}>
              <View style={styles.flex2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require ('./src/img/ArrowLeft.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Fish Diet</Text>
        </View>
        <Text style={styles.subTitle}>It's a largely plant-based diet of whole grains, nuts, legumes, produce and healthy fats.</Text>
        </ImageBackground>
      </View>
      <View style={styles.flex}>
      {a.map((day)=>{
        return (
        
          <TouchableOpacity style={styles.box}>
            <Text style={styles.text}>{day}</Text>
            <Text style={styles.text}>day</Text>
          </TouchableOpacity>
        )})}
        </View>
        </ScrollView>
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
    width: '100%'
  },

  arrow: {
    width: 26,
    height: 12,
  },
  title: {
    fontSize: 24,
    width: 161,
    fontWeight: "800",
    color: 'white',
    marginLeft: '30%',
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
    flexDirection: 'row',
    width: 375,
    justifyContent: 'center',
    marginTop:10,
    flexWrap: 'wrap'
  },
  sep: {flexDirection:'row', marginTop: 20},
  sepText: {
    marginLeft: 20,
    
  },
  sepTextBot: {
    marginLeft: 26
  },
  box: {
    width: 65,
    height:65,
    backgroundColor: 'black',
    marginLeft: 14,
    marginTop: 14,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  flex2: {
    flexDirection: 'row',
    marginTop: '20%',

  }
});

