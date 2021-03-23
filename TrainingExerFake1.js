import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ImageBackground} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export const TrainingExerFake1 =( { navigation } )=> {
  const [sec, setSeconds] = React.useState(60);

  React.useEffect(() => {
    if (sec > 0) {
      setTimeout(() => setSeconds(sec - 1), 1000);
    } else {
      setSeconds('0:00!');
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require ('./src/img/ArrowLeft.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.end}>
        <Text style={styles.timer}>{sec > 0 ? `${Math.floor(+sec / 60)}:${(sec-Math.floor(+sec / 60)*60) > 10 ? (sec-Math.floor(+sec / 60)*60) : `0${sec-Math.floor(+sec / 60)*60}`}` : '0:00'}</Text>
      </View>
      <Text style={styles.title}>Squats</Text>
      <Text style={styles.subTitle}>A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up</Text>
    <View style={styles.buttonSep}>
        <TouchableOpacity
          onPress={()=>navigation.navigate('TrainingExerFake2')}
          style={styles.buttonCancel}
        >
          <Text style={styles.cancelText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate('TrainingExerFake2')}
          style={styles.buttonSave}
        >
          <Text style={styles.saveText}>Done</Text>
        </TouchableOpacity>
        </View>
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
    marginTop: '20%',
    marginLeft: '10%'
  },

  arrow: {
    width: 26,
    height: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: 'black',
    marginTop: '20%',
    
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
    marginBottom: 20,
    backgroundColor: '#03041A',
    borderRadius: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: 151,
    marginLeft: 20
  },
  buttonCancel: {
    marginBottom: 60,
    borderColor: '#03041A',
    borderWidth: 2,
    borderRadius: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: 151,
  },
  saveText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cancelText: {
    color: '#03041A',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
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
    height: 280,
    width: 375
  },
  subTitle: {
    width: 350,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
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
  },
  buttonSep: {
    flexDirection: 'row',
    marginTop: '30%',
    width: 320,
  },
  timer: {
    fontWeight: '800',
    fontSize: 40,
    color: 'black',
    marginTop: '50%',
  }

});
