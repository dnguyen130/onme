import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import BigButton from '../components/buttons/BigButton';
import NavBar from '../components/global/NavBar';
import Header from '../components/global/Header';
import FloatingBox from '../components/summary/FloatingBox';
import styled from 'styled-components/native';

const CenterCont = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20%;
`;

const NavBarCont = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  }
});

export default function OrderConfirmation({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Header 
          subTitle="Order Confirmation" subWeight="700" 
          onPress={() => navigation.goBack()} 
        />
      <CenterCont>
        <FloatingBox 
          boxHeight="50%" 
          boxWidth="70%" 
          mainTitle="Awesome, Order Received!" mainSize="15px"
          subTitle="We hope you get some :)" subSize="15px" 
        />
        <BigButton buttonText="Send Another :)" width='50%' onPress={() => navigation.navigate('Restaurant Menu')}/>
      </CenterCont>
      <NavBarCont>
        <NavBar 
          homeOnPress={() => navigation.navigate('Dashboard')}
          midOnPress={() => navigation.navigate('Restaurant Menu')}
          settingsOnPress={() => navigation.navigate('Settings')}
        />
      </NavBarCont>
    </View>
  );
}