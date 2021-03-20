import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {
  'uk-UA': { Data: 'Персональні дані', Age: 'Вік', Weight: 'Вага', Height: 'Зріст', Years: 'р.', kg: 'кг', cm: 'см', Done: 'Готово', Back: 'Назад',  info: 'Важливо зібрати більше інформації про вас, щоб персоналізувати тренування та дієту.'},
  en: { Data: 'Personal Data', Age: 'Age', Weight: 'Weight', Height: 'Height', Years: 'y.o', kg: 'kg', cm: 'cm', Done: 'Done', Back: 'Back', info: 'It’s important to gather more information about you to personalize training and diet.'},
};

i18n.locale = 'en' //Localization.locale;

export const YourData = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.steps}> 
        <View style={styles.step__active}></View>
        <View style={styles.step__active}></View>
        <View style={styles.step__active}></View>
        <View style={styles.step__active}></View>
      </View>

        <Text style={styles.title}>{i18n.t('Data')}</Text>
        <Text style={styles.text}>{i18n.t('info')}</Text>

        <View style={styles.icons}>
          <View>
            <View style={styles.inputContainer}>  
              <Text style={styles.inputTextLeft}>{i18n.t('Age')}</Text>
                <TextInput
                style={styles.input}
                placeholder="23"         
                />
              <Text style={styles.inputTextRight}>{i18n.t('Years')}</Text>
            </View>     
          </View>
          <View>
            <View style={styles.inputContainer}>  
              <Text style={styles.inputTextLeft}>{i18n.t('Weight')}</Text>
                <TextInput
                style={styles.input}
                placeholder="50"         
                />
              <Text style={styles.inputTextRight}>{i18n.t('kg')}</Text>
            </View>     
          </View>
          <View>
            <View style={styles.inputContainer}>  
              <Text style={styles.inputTextLeft}>{i18n.t('Height')}</Text>
                <TextInput
                style={styles.input}
                placeholder="165"         
                />
              <Text style={styles.inputTextRight}>{i18n.t('cm')}</Text>
            </View>     
          </View>
        </View>

        <TouchableOpacity
          onPress={start}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{i18n.t('Done')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={start}
          style={styles.back}
        >
          <Image
            style={styles.logo}
            source={require ('./img/Back.png')}
          />

          <Text style={styles.back}>{i18n.t('Back')}</Text>
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
    width: 6,
    height: 12,
    marginRight: 26,
    color: 'red'
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
  button: {
    marginBottom: 60,
    backgroundColor: 'black',
    borderRadius: 2,
    width: 323,
    height: 50,
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  back: {
    flexDirection: 'row',
  }
});

