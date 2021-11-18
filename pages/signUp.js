import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';
import styled from 'styled-components';

import BigButton from '../components/buttons/BigButton';
import Input from '../components/global/Input';
import FlexInput from '../components/global/FlexInput';
import SmallButton from '../components/buttons/SmallButton';
import Title from '../components/text/Title';
import TextDivider from '../components/text/TextDivider';
import BackButton from '../components/global/BackButton';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'flex-start',
    padding: 30,
  }
});

export default function SignUp({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <BackButton 
        onPress={() => navigation.navigate('Login')} 
        onPress={() => navigation.goBack()} 
      />
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
        <TextDivider textColor="#fff" borderColor="#888" />
        <RowCont>
          <SmallButton iconColor="#699BF7" />
          <SmallButton iconName="logo-google" iconColor="#EC452E"/>
        </RowCont>
      </CenterCont>
    </SafeAreaView>
  );
}