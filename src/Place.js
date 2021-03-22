import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {
  'uk-UA': { Place: 'Місце', Home: 'ВДОМА', Gym: 'В ЗАЛІ', Save: 'Зберегти', Cancel: 'Відміна'},
  en: { Place: 'Your Place', Home: 'AT HOME', Gym: 'In A Gym', Save: 'SAVE', Cancel: 'CANCEL'},
};

i18n.locale = 'en' //Localization.locale;

export const Place = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Image 
            source={require ('./img/ArrowLeft.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{i18n.t('Place')}</Text>
      </View>
        
      <TouchableOpacity
          onPress={start}
          style={styles.buttonSave}
      >
        <Text style={styles.saveText}>{i18n.t('Home')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={start}
        style={styles.buttonCancel}
      >
        <Text style={styles.cancelText}>{i18n.t('Gym')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress={start}
          style={styles.buttonSave}
        >
          <Text style={styles.saveText}>{i18n.t('Save')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={start}
          style={styles.buttonCancel}
        >
          <Text style={styles.cancelText}>{i18n.t('Cancel')}</Text>
        </TouchableOpacity>
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
    marginTop: '20%',
    width: 323
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
    marginLeft: '25%'
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
    paddingTop: 43
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
    borderColor: '#03041A',
    borderWidth: 2,
    borderRadius: 2,
    width: 323,
    height: 50,
    alignItems: 'center',
    padding: 15,
  },
  buttonCancel: {
    marginBottom: 60,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 2,
    width: 323,
    height: 50,
    alignItems: 'center',
    padding: 15,
  },
  saveText: {
    color: '#03041A',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cancelText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
