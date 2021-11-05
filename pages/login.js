import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, ImageBackground} from 'react-native';

import LocationCard from '../comps/LocationCard';
import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import TextLink from '../comps/TextLink';
import TextDivider from '../comps/TextDivider';
import styled from 'styled-components';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../assets/imgBg.png")} resizeMode="cover" style={styles.imgBg}>
        <StatusBar style="auto" />
        <Title />
        
        <Input textInputPlaceholder = "Email"/>
        <Input textInputPlaceholder = "Password" />
        
        <View style={styles.centerCont}>
          <TextLink textColor="#fff" />
          <BigButton onPress={() => navigation.navigate('Dashboard')} />
          <BigButton 
            onPress={() => navigation.navigate('Sign Up')}
            bgColor = "#BCB5B7" 
            buttonText = "Sign Up"
          />
          <TextDivider textColor="#fff" />

        </View>
        <View style={styles.rowCont}>
          <SmallButton />
          <SmallButton />
        </View>
        <View style={styles.centerCont}>
          <TextLink textColor="#fff" changeText = "restaurant login" />
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
    justifyContent: 'space-around'
  }, 
  imgBg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  }
});