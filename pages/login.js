import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View , SafeAreaView, ImageBackground} from 'react-native';

import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import Title from '../comps/Title';
import TextLink from '../comps/TextLink';
import TextDivider from '../comps/TextDivider';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../assets/imgBg.png")} resizeMode="cover" style={styles.imgBg}>
        <View style={styles.colCont}>
        <StatusBar style="auto" />
        <Title />
        
        <Input textInputPlaceholder = "Email"/>
        <Input textInputPlaceholder = "Password" />
        
        <View style={styles.centerCont}>
          <TextLink textColor="#fff" alignSelf="flex-end" />
          <BigButton onPress={() => navigation.navigate('Dashboard')} />
          <BigButton 
            onPress={() => navigation.navigate('Sign Up')}
            bgColor = "#BCB5B7" 
            buttonText = "Sign Up"
          />
          <TextDivider textColor="#fff" />

        </View>
        <View style={styles.rowCont}>
          <SmallButton iconColor="#699BF7" />
          <SmallButton iconName="logo-google" iconColor="#EC452E"/>
        </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCont: {
    alignItems: 'center'
  },
  rowCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  colCont: {
    justifyContent: 'space-around',
    height: '70%',
    marginHorizontal: 10
  }, 
  imgBg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  }
});