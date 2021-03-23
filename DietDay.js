import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ImageBackground} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { ScrollView } from 'react-native-gesture-handler';
import Dot from './src/img/Ellipse.svg'

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]


export const DietDay =({ navigation, i, })=> {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day {i}</Text>
      <View style={styles.dishContainer}>
        <Text style={styles.dishTitle}>Breakfast</Text>
        <View style={styles.flex}>
        <Dot style={styles.dot}></Dot>
          <Text style={styles.text}>2 Toasts with salmon & avocado.</Text>
        </View>
        <View style={styles.flex}>
        <Dot style={styles.dot}></Dot>
          <Text style={styles.text}>1 apple.</Text>
        </View>    
      </View>
      <View style={styles.dishContainer}>
        <Text style={styles.dishTitle}>Lunch</Text>
        <View style={styles.flex}>
        <Dot style={styles.dot}></Dot>
          <Text style={styles.text}>Vegetable salad.</Text>
        </View>
        <View style={styles.flex}>
        <Dot style={styles.dot}></Dot>
          <Text style={styles.text}>Yogurt.</Text>
        </View>
        
      </View>
      <View style={styles.dishContainer}>
        <Text style={styles.dishTitle}>Nosh</Text>
        <View style={styles.flex}>
        </View>
        <View style={styles.flex}>
        <Dot style={styles.dot}></Dot>
          <Text style={styles.text}>Protein bar.</Text>
        </View>  
      </View>
      <View style={styles.dishContainer}>
        <Text style={styles.dishTitle}>Dinner</Text>
        <View style={styles.flex}>
        <Dot style={styles.dot}></Dot>
          <Text style={styles.text}>Tuna steak.</Text>
        </View>
        <View style={styles.flex}>
        <Dot style={styles.dot}></Dot>
          <Text style={styles.text}>Green salad.</Text>
        </View>  
      </View>
      <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonSave}
        >
          <Text style={styles.saveText}>Save</Text>
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
  title: {
    fontSize: 24,
    marginTop: '10%'
  },
  dishContainer: {
    width: 323,
    marginTop: 15,
    paddingBottom: 20,
    backgroundColor: 'rgba(3, 4, 26, 0.06)',
  },
  dishTitle: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
  flex: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 15,
  },
  dot: {
    marginTop: 9,
    marginLeft: 15,
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
  saveText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
 
});

