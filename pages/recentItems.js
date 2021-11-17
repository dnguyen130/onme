import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import LocButton from '../components/buttons/LocButton';
import Input from '../components/global/Input';
import NavBar from '../components/global/NavBar';
import Title from '../components/text/Title';
=======
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

import LocButton from '../comps/LocButton';
import Input from '../comps/Input';
import NavBar from '../comps/NavBar';
import Header from '../comps/Header';
import styled from 'styled-components';
>>>>>>> f9a3846ef917a3fc3e75e83cab39ef783e4bd4cd

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

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function RecentItems({navigation}) {
=======
const InputCont = styled.View`
  padding-bottom: 5%;
  top: -4%;
`;

export default function FrequentlyVisited({navigation}) {
>>>>>>> f9a3846ef917a3fc3e75e83cab39ef783e4bd4cd
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header 
          mainTitle="Recent Items" 
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
<<<<<<< HEAD
}
=======
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  }
});
>>>>>>> f9a3846ef917a3fc3e75e83cab39ef783e4bd4cd
