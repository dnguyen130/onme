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
      <BigButton buttonText="Send Another :)" />
      <NavBar />
    </SafeAreaView>
  );
}

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