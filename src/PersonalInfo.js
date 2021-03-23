import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {
  'uk-UA': { Data: 'Персональні дані', Gennder: 'Стать', Man: 'Чоловік', Woman: 'Жінка', Age: 'Вік', Weight: 'Вага', Height: 'Зріст', Years: 'р.', kg: 'кг', cm: 'см', Save: 'Зберегти', Cancel: 'Назад',  info: 'Важливо зібрати більше інформації про вас, щоб персоналізувати тренування та дієту.'},
  'en-US': { Data: 'Personal Info', Gender: 'Gender', Man: 'Man', Woman: 'Woman', Age: 'Age', Weight: 'Weight', Height: 'Height', Years: 'y.o', kg: 'kg', cm: 'cm', Save: 'Save', Cancel: 'Cancel', info: 'It’s important to gather more information about you to personalize training and diet.'},
};

export const PersonalInfo = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require ('./img/ArrowLeft.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Personal Info</Text>
      </View>
      <View style={styles.icons}>
          <View>
            <View style={styles.inputContainer}>  
              <Text style={styles.inputTextLeft}>Age</Text>
                <TextInput
                style={styles.input}
                placeholder="23"         
                />
              <Text style={styles.inputTextRight}>y.o</Text>
            </View>     
          </View>
          <View>
            <View style={styles.inputContainer}>  
              <Text style={styles.inputTextLeft}>Weight</Text>
                <TextInput
                style={styles.input}
                placeholder="50"         
                />
              <Text style={styles.inputTextRight}>kg</Text>
            </View>     
          </View>
          <View>
            <View style={styles.inputContainer}>  
              <Text style={styles.inputTextLeft}>Height</Text>
                <TextInput
                style={styles.input}
                placeholder="165"         
                />
              <Text style={styles.inputTextRight}>cm</Text>
            </View>     
          </View>
          <View>
            <View style={styles.inputContainer}>  
              <Text style={styles.inputTextLeft}>Gender</Text>
              <View>
                <TouchableOpacity
                  onPress={toggleSwitch}
                  style={styles.toggle}
                >
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>
                      {isEnabled || 'Man' }
                    </Text>
                  </View>
                  <View style={styles.labelContaier}>
                    <Text style={styles.label}>
                      {!isEnabled || 'Woman' }
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>     
          </View>
        </View>
        
        <TouchableOpacity
          onPress={start}
          style={styles.buttonSave}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonCancel}
        >
          <Text style={styles.cancelText}>Cancel</Text>
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
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: '20%',
    marginLeft: 20,
  },

  arrow: {
    width: 26,
    height: 12,
  },
  title: {
    fontSize: 24,
    width: 161,
    fontWeight: "800",
    marginLeft: '20%'
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
  }
});

