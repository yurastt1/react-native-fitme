import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Profile1 from './img/Profile.svg'
import TrainPlace from './img/TrainPlace.svg'
import Sound from './img/Sound.svg'
import Goal from './img/Goal.svg'
import Language from './img/Language.svg'
import Terms from './img/Terms.svg'
import ArrowRight from './img/ArrowRight.svg'

i18n.translations = {
  'uk-UA': { Profile: 'Профіль', About: 'Про мене', Personal: 'Персональні Дані', Place: 'Місце тренувань', Goal: 'Твоя ціль', Settings: 'Налаштування', Sound: 'Звук', Language: 'Мова', Terms: 'Політика умов'},
  'en-US': { Profile: 'Profile', About: 'About me', Personal: 'Personal Info', Place: 'Training Place', Goal: 'Your Goal', Settings: 'Settings', Sound: 'Sound', Language: 'Language', Terms: 'Terms Policy'},
};

export const Profile = ({ navigation, isLoggedChanger }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('Profile')}</Text>
      <Text style={styles.subTitle}>{i18n.t('About')}</Text>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.buttons}  onPress={()=> {
           navigation.navigate('PersonalInfo')
          }}>
        <View style={styles.buttons__spacing}>
          <View style={styles.logo}>
            <Profile1
              
            />
          </View>
          <Text style={styles.text}>{i18n.t('Personal')}</Text>
        </View>
        <View style={styles.arrow__container}>
        <ArrowRight 
          style={styles.arrow}
        />
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={()=> {
           navigation.navigate('Place')
          }}>
        <View style={styles.buttons__spacing}>
        <View style={styles.logo}>

          <TrainPlace
          style={styles.logo}
          />
        </View>

          <Text style={styles.text}>{i18n.t('Place')}</Text>
        </View>
        <View style={styles.arrow__container}>
        <ArrowRight 
          style={styles.arrow}
        />
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <View style={styles.buttons__spacing}>
        <View style={styles.logo}>

          <Goal 
          style={styles.logo}
          />
        </View>
          <Text style={styles.text}>{i18n.t('Goal')}</Text>
        </View>
        <View style={styles.arrow__container}>
        <ArrowRight 
          style={styles.arrow}
        />
        </View>
        
      </TouchableOpacity>
      <Text style={styles.subTitle}>{i18n.t('Settings')}</Text>
      <View style={styles.line}></View>
      <View style={styles.buttons}>
        <View style={styles.buttons__spacing}>
        <View style={styles.logo}>

          <Sound 
            style={styles.logo}
          />
        </View>
          <Text style={styles.text}>{i18n.t('Sound')}</Text>
        </View>
        <View style={styles.arrow__container}>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
      </View>
      <TouchableOpacity style={styles.buttons}>
        <View style={styles.buttons__spacing}>
        <View style={styles.img__container}>
        <View style={styles.logo}>

            <Language
            style={styles.img}
            />
          </View>
          </View>
          <Text style={styles.text}>{i18n.t('Language')}</Text>
        </View>
        <View style={styles.buttons__spacing}>
          <Text style={styles.text__right}>English</Text>
          <View style={styles.arrow__container}>
            <ArrowRight 
              style={styles.arrow}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <View style={styles.buttons__spacing}>
        <View style={styles.img}>
          <View style={styles.img__container}>
          <View style={styles.logo}>

            <Terms
            style={styles.img}
            />
          </View>
          </View>
        </View>
          <Text style={styles.text}>{i18n.t('Terms')}</Text>
        </View>
        <View style={styles.buttons__spacing}>
          <View style={styles.arrow__container}>
            <ArrowRight 
              style={styles.arrow}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCancel} onPress={isLoggedChanger}>
        <Text style={styles.cancelText}>Delete all my data</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: '20%'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: 'left',
    width: 320,
    color: 'rgba(3, 4, 26, 0.5)',
  },
  line: {
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#03041A',
    opacity: 0.15,
    marginLeft: 10,
    width: 335,
    height: 0,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
    width: 323,
    marginTop: 24,

  },

  buttons__spacing: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text__right: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 21,
    color: 'rgba(3, 4, 25, 0.5)',
  },
  logo: {
    height: 30,
    width: 30, 
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 14,
  },
  arrow__container: {
    height: 20,
    justifyContent: 'center'
  },
  arrow: {
    height: 12,
    width: 6,
  },
  img: {
    height: 32,
    width: 25,
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
  cancelText: {
    color: '#03041A',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
