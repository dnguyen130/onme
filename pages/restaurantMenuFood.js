import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Input from '../comps/Input';
import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import styled from 'styled-components';
import Card from '../comps/Card';
import Header from '../comps/Header';

const CenterCont = styled.View`
  align-items: center;
`;

const TwoXTwoGrid = styled.View`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
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
        <Input textInputPlaceholder="Search" />
        <CenterCont>
          <TwoXTwoGrid>
            <Card />
            <Card />
            <Card />
            <Card />
          </TwoXTwoGrid>
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