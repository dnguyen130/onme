import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import LocButton from '../components/buttons/LocButton';
import Input from '../components/global/Input';
import NavBar from '../components/global/NavBar';
import Title from '../components/text/Title';

const ImgBg = styled.ImageBackground`
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function FrequentlyVisited({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header 
          mainTitle="Frequently" 
          subTitle="Visited" 
          subWeight="700"
        />
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
          settingsOnPress={() => navigation.navigate('Settings')}
        />
      </NavBarCont>
    </SafeAreaView>
  );
}
