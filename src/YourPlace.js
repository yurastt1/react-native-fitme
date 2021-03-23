import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {
  'uk-UA': { Place: 'Обери місце', Home: 'Вдома', Gym: 'В спортзалі', info: 'Важливо зібрати більше інформації про вас, щоб персоналізувати тренування та дієту.'},
  en: { Place: 'Your Place', info: 'It’s important to gather more information about you to personalize training and diet.', Home: 'At home', Gym: 'In a Gym'},
};

i18n.locale = 'en' //Localization.locale;

export const YourPlace = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.steps}> 
        <View style={styles.step__active}></View>
        <View style={styles.step__active}></View>
        <View style={styles.step__active}></View>
        <View style={styles.step}></View>
      </View>

        <Text style={styles.title}>Your Place</Text>
        <Text style={styles.text}>It’s important to gather more information about you to personalize training and diet.</Text>

        <View style={styles.icons}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('YourData')}
            style={styles.button}
          >

            <View style={styles.bt__text}>
              <Text style={styles.bt__title}>At home</Text>
            </View>
            <Image
              style={styles.logo}
              source={require ('./img/Home.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> navigation.navigate('YourData')}
            style={styles.button}
          >
            <View style={styles.bt__text}>
              <Text style={styles.bt__title}>In a Gym</Text>
            </View>
            <Image
              style={styles.logo}
              source={require ('./img/Gym.png')}
            />
          
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
  logo: {
    width: 24,
    height: 24,
    marginRight: 26,
  },
  button: {
    width: 323,
    height: 83,
    marginBottom: 26,
    borderWidth: 1,
    borderColor: '#03041A',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  bt__text: {
    marginLeft: 26
  },
  bt__title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  bt__exp: {
    fontSize: 14
  },
  steps: {
    flexDirection: 'row',
    marginTop: '20%',
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
  },
  icons: {
    marginBottom: 50,
    marginTop: 84
  }
  
});

