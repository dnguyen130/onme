import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

import LocButton from '../comps/LocButton';
import Input from '../comps/Input';
import NavBar from '../comps/NavBar';
import Header from '../comps/Header';
import styled from 'styled-components';

const CenterCont = styled.ScrollView`
  position: absolute;
  top: 35%;
  left: 10%;
  max-height: 100%;
  z-index: -9;
`;

const NavBarCont = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header mainTitle="The Habitat" subTitle="3700 Willingdon Ave, Burnaby" />
        <View>
          <Input textInputPlaceholder="Search" />
        </View>
          <CenterCont alignItems='center' justifyContent='center'>
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton />
              <LocButton />
              <LocButton/>
              <LocButton />
              <LocButton />
              <LocButton />
              <LocButton/>
              <LocButton />
          </CenterCont>
      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  }
});