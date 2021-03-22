import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {
  'uk-UA': { Goal: 'Ваша Ціль', WeightTitle: 'Втрата ваги', WeightExp: 'Cпалити жир та схуднути', TonusTitle: 'Бути в тонусі', TonusExp: 'Тонізуйтеcь і почувайтесь здоровими', MuscleTitle: 'Більше м’язів', MuscleExp: 'Нарощуйте масу та cилу', info: 'Важливо зібрати більше інформації про вас, щоб персоналізувати тренування та дієту.'},
  en: { Goal: 'Your Goal', WeightTitle: 'Lose Weight', WeightExp: 'Burn fat & get lean', TonusTitle: 'Be in Tonus', TonusExp: 'Tone up & feel healthy', MuscleTitle: 'More Muscle', MuscleExp: 'Build mass & power', info: 'It’s important to gather more information about you to personalize training and diet.'},
};

i18n.locale = 'en' //Localization.locale;

export const YourGoal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.steps}> 
        <View style={styles.step__active}></View>
        <View style={styles.step__active}></View>
        <View style={styles.step}></View>
        <View style={styles.step}></View>
      </View>

        <Text style={styles.title}>{i18n.t('Goal')}</Text>
        <Text style={styles.text}>{i18n.t('info')}</Text>

        <View style={styles.icons}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('YourPlace')}
            style={styles.button}
          >

            <View style={styles.bt__text}>
              <Text style={styles.bt__title}>{i18n.t('WeightTitle')}</Text>
              <Text style={styles.bt__exp}>{i18n.t('WeightExp')}</Text>
            </View>
            <Image
              style={styles.logo}
              source={require ('./img/Weight.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> navigation.navigate('YourPlace')}
            style={styles.button}
          >
            <View style={styles.bt__text}>
              <Text style={styles.bt__title}>{i18n.t('TonusTitle')}</Text>
              <Text style={styles.bt__exp}>{i18n.t('TonusExp')}</Text>
            </View>
            <Image
              style={styles.logo}
              source={require ('./img/Tonus.png')}
            />
          
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=> navigation.navigate('YourPlace')}
            style={styles.button}
          >
            <View style={styles.bt__text}>
              <Text style={styles.bt__title}>{i18n.t('MuscleTitle')}</Text>
              <Text style={styles.bt__exp}>{i18n.t('MuscleExp')}</Text>
            </View>
            <Image
              style={styles.logo}
              source={require ('./img/Muscle.png')}
            />
          
          </TouchableOpacity>
        </View>
    </View>
  )
}

const start = () => {
  
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
    marginTop: 50
  }
  
});

