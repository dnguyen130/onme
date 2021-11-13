import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';  

import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import FlexInput from '../comps/FlexInput';
import SmallButton from '../comps/SmallButton';
import Title from '../comps/Title';
import TextDivider from '../comps/TextDivider';
import styled from 'styled-components';

const CenterCont = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`

const RowCont = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  flex: 1;
`

export default function SignUp({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Title titleColor="#A57760" titleSize="32px" titleWeight="700" titleText="Sign Up" />
      <Title titleSize="32px" titleText="Create your account" />
      <RowCont>
        <FlexInput textInputLabel="Name" textInputPlaceholder="First Name"/>
        <FlexInput textInputPlaceholder="Last Name" />
      </RowCont>
      <RowCont>
        <FlexInput textInputLabel="Date of Birth" textInputPlaceholder="Month" />
        <FlexInput textInputPlaceholder="Day"/>
        <FlexInput textInputPlaceholder="Year"/>
      </RowCont>
      <RowCont>
        <Input textInputLabel="Email"/>
      </RowCont>
      <RowCont>
        <Input textInputLabel="Create Password"/>
      </RowCont>
      <RowCont>
        <Input textInputLabel="Confirm Password"/>
      </RowCont>
      <CenterCont>
        <BigButton onPress={() => navigation.navigate('Dashboard')} buttonText="Sign Up" />
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
    padding: 30,
  }
});