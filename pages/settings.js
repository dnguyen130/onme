import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import { Input } from 'react-native-elements';

import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import Card from '../comps/Card'
import Header from '../comps/Header';
import MenuCard from '../comps/MenuCard';
import SmallButton from '../comps/SmallButton';

import styled from 'styled-components/native';

const NavBarCont = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const PaddingCont = styled.View`
  padding: 10px;
`

const PaddingContHorizontal = styled.View`
  padding: 0 30px;
`

const RowCont = styled.View`
  flex-direction: row;
  align-self: flex-end;
`


export default function Settings({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header subTitle="My Settings" subWeight="700" />
      <PaddingCont>
        <RowCont>
        <SmallButton
          buttonColor="#2E2E2E"
          buttonText="Edit"
          buttonTextcolor="#A57760"
          buttonTextWeight="700"
          buttonBorderWidth="0px"
          iconName="new-message" 
          iconBrand="entypo" 
          iconColor="#FE4370"/>
        <SmallButton 
          buttonColor="#2E2E2E"
          buttonText="Logout"
          buttonTextcolor="#A57760"
          buttonTextWeight="700"
          buttonBorderWidth="0px"
          iconName="login" 
          iconBrand="entypo" 
          iconColor="#FE4370"/>
        </RowCont>
        <PaddingContHorizontal>
          <RowCont>
            <Input label="Name" containerStyle={{flex: 2}}/>
            <Input label="Age" containerStyle={{flex: 1}} />
          </RowCont>
          <Input label="Email" />
          <Input label="Password" />
          <Input label="Two Truths and a Lie" />
          <Input />
          <Input />
        </PaddingContHorizontal>
      </PaddingCont>
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