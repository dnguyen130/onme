import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

import LocButton from '../comps/LocButton';
import Input from '../comps/Input';
import NavBar from '../comps/NavBar';
import Header from '../comps/Header';
import styled from 'styled-components';

const ScrollCont = styled.View`
  flex: 1;
  top: 3%;
  max-height: 60%;
`;

const CenterScrollCont = styled.ScrollView`
  z-index: -9;
`;

const NavBarCont = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const InputCont = styled.View`
  padding-bottom: 5%;
  top: -4%;
`;

export default function RestaurantSelection({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header mainTitle="The Habitat" subTitle="3700 Willingdon Ave, Burnaby" subTitleSize="15px" />
        <InputCont>
          <Input textInputPlaceholder="Search" />
        </InputCont>
        <ScrollCont>
          <CenterScrollCont alignItems='center'>
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu Food')} />
          </CenterScrollCont>
        </ScrollCont>
      <NavBarCont>
        <NavBar 
          homeOnPress={() => navigation.navigate('Dashboard')}
          midOnPress={() => navigation.navigate('Restaurant Menu Drinks')}
          settingsOnPress={() => navigation.navigate('')}
        />
      </NavBarCont>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  }
});