import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, ImageBackground} from 'react-native';

import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import Card from '../comps/Card'
import styled from 'styled-components/native';
import Header from '../comps/Header';

const CenterCont = styled.View`
  align-items: center;
`;

const RowCont = styled.ScrollView`
  flex-direction: row;
  flex: 1;
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
      <Header mainTitle="Welcome," subTitle="Min" />
      {/* <CenterCont> */}
        <Title titleSize="20px" titleText="Frequently visited" />
        <RowCont horizontal>
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
        </RowCont>
        <Title titleSize="20px" titleText="Recent items" />
        <RowCont horizontal>
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
        </RowCont>
      {/* </CenterCont> */}
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