import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {
  'uk-UA': { Gender: 'Ваша Стать', Man: 'Чоловік', Woman: 'Жінка', info: 'Важливо зібрати більше інформації про вас, щоб персоналізувати тренування та дієту.'},
  en: { Gender: 'Your Gender', Man: 'Man', Woman: 'Woman', info: 'It’s important to gather more information about you to personalize training and diet.'},
};

i18n.locale = 'en' //Localization.locale;

export const YourGender = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.steps}> 
        <View style={styles.step__active}></View>
        <View style={styles.step}></View>
        <View style={styles.step}></View>
        <View style={styles.step}></View>
      </View>

        <Text style={styles.title}>{i18n.t('Gender')}</Text>
        <Text style={styles.text}>{i18n.t('info')}</Text>

        <View style={styles.icons}>
          <TouchableOpacity
            onPress={start}
            style={styles.left}
          >
          
          <Image
              style={styles.logo}
              source={require ('./img/Man1.png')}
            />
            <Text style={styles.gend}>{i18n.t('Man')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={start}
            style={styles.right}
          >
          
            <Image
              style={styles.logo}
              source={require ('./img/Woman1.png')}
            />
            <Text style={styles.gend}>{i18n.t('Woman')}</Text>
          </TouchableOpacity>
        </View>

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
  },
  icons: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 84
  },
  title: {
    fontSize: 30,
    marginTop: '10%'
  },
  text: {
    width: 323,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  gend: {
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    width: 106,
    height: 106,
  },
  steps: {
    flexDirection: 'row',
  },
  step: {
    borderWidth: 1,
    borderColor: '#03041A',
    borderRadius: 6,
    width: 40,
    height: 4,
    marginLeft: 10,
  },
  step__active: {
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#03041A',
    marginLeft: 10,
    width: 40,
    height: 4,
  }
});

