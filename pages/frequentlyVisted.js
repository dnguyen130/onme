import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';


import LocButton from '../comps/LocButton';
import Input from '../comps/Input';
import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import styled from 'styled-components';

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  width: 100%;
  padding: 10%;
  border-width: 1px;
`;

const CenterCont = styled.View`
  align-items: center;
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
        <ImgBg source={require("../assets/imgBg.png")} resizeMode="cover">
          <Title titleText="Frequently" />
          <Title titleText="Visited" />
          <CenterCont>
            <Input textInputPlaceholder="Search" />
          </CenterCont>
        </ImgBg>
        <CenterCont>
          <LocButton />
          <LocButton />
          <LocButton />
          <LocButton />
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
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  }
});