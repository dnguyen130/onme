import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import styled from 'styled-components';

import LocButton from '../components/buttons/LocButton';
import Input from '../components/global/Input';
import NavBar from '../components/global/NavBar';
import Header from '../components/global/Header';

const ScrollCont = styled.View`
  flex: 1;
  top: -2%;
  max-height: 60%;
`;

const CenterScrollCont = styled.ScrollView`
  flex: 1;
  z-index: -9;
`;

const NavBarCont = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const InputCont = styled.View`
  top: -4%;
  margin-left: 5%;
  margin-right: 5%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  }
});

export default function FrequentlyVisited({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Header 
          mainTitle="Frequently" 
          subTitle="Visited" 
          subWeight="700"
          iconSubName='star'
          iconSubType='material'
          iconSubColor='#FE4370'
          onPress={() => navigation.goBack()} 
        />
        <InputCont>
          <Input textInputPlaceholder="Search" borderRadius="30px" textAlign="center" />
        </InputCont>
        <ScrollCont>
          <CenterScrollCont alignItems='center'>
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
              <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
          </CenterScrollCont>
        </ScrollCont>
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
