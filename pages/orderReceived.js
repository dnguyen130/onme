import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

<<<<<<< HEAD
import BigButton from '../components/buttons/BigButton';
import NavBar from '../components/global/NavBar';
import Header from '../components/global/Header';
import FloatingBox from '../components/summary/FloatingBox';
=======
import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import TextLink from '../comps/TextLink';
import TextDivider from '../comps/TextDivider';
import Card from '../comps/Card'
import styled from 'styled-components';
import Header from '../comps/Header';
import FloatingBox from '../comps/FloatingBox';

export default function OrderConfirmation({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header subTitle="Order Confirmation" subWeight="700" />
      <FloatingBox 
        boxHeight="40%" 
        boxWidth="70%" 
        mainTitle="Awesome, Order Received!" mainSize="15px"
        subTitle="We hope you get some :)" subSize="15px" 
      />
      <BigButton buttonText="Send Another :)" onPress={() => navigation.navigate('Restaurant Menu Drinks')} />
      <NavBar 
        homeOnPress={() => navigation.navigate('Dashboard')}
        midOnPress={() => navigation.navigate('Restaurant Menu Drinks')}
        settingsOnPress={() => navigation.navigate('Settings')}
      />
    </SafeAreaView>
  );
}
>>>>>>> f9a3846ef917a3fc3e75e83cab39ef783e4bd4cd

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  centerCont: {
    alignItems: 'center'
  },
  rowCont: {
    flexDirection: 'row',
  },
  colCont: {
    justifyContent: 'space-evenly',
  },
  navBarCont: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  }
});

export default function OrderConfirmation({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header subTitle="Order Confirmation" subWeight="700" />
      <FloatingBox 
        boxHeight="40%" 
        boxWidth="70%" 
        mainTitle="Awesome, Order Received!" mainSize="15px"
        subTitle="We hope you get some :)" subSize="15px" 
      />
      <BigButton buttonText="Send Another :)" />
      <NavBar />
    </SafeAreaView>
  );
}