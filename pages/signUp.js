import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';  

import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import Title from '../comps/Title';
import TextDivider from '../comps/TextDivider';
import styled from 'styled-components';

const CenterCont = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`

const RowCont = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`

export default function SignUp({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Title titleColor="#A57760" titleSize="32px" titleWeight="700" titleText="Sign Up" />
      <Title titleSize="32px" titleText="Create your account" />
        <RowCont>
          <Input textInputLabel="Name" textInputPlaceholder="First Name"/>
          <Input textInputPlaceholder="Last Name" />
        </RowCont>
        <RowCont>
          <Input textInputLabel="Date of Birth" textInputPlaceholder="Month" />
          <Input textInputPlaceholder="Day"/>
          <Input textInputPlaceholder="Year"/>
        </RowCont>
        <Input textInputLabel="Email"/>
        <Input textInputLabel="Create Password"/>
        <Input textInputLabel="Confirm Password"/>
        <CenterCont>
          <BigButton buttonText="Sign Up" />
          <TextDivider />
          <RowCont>
            <SmallButton />
            <SmallButton />
          </RowCont>
        </CenterCont>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'flex-start',
    borderColor: 'red',
    padding: 20,
    // borderWidth: 5,
    // borderStyle: 'solid',
    // flexDirection: 'column'
  }
});