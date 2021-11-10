import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import Title from '../comps/Title';
import TextLink from '../comps/TextLink';
import TextDivider from '../comps/TextDivider';
import styled from 'styled-components/native';

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  width: 100%;
`;

const CenterCont = styled.View`
  align-items: center;
`;

const RowCont = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImgBg source={require("../assets/imgBg.png")} resizeMode="cover">
        <StatusBar style="auto" />
        <Title />
        
        <Input textInputPlaceholder = "Email"/>
        <Input textInputPlaceholder = "Password" />
        
        <CenterCont>
          <TextLink textColor="#fff" />
          <BigButton onPress={() => navigation.navigate('Dashboard')} />
          <BigButton 
            onPress={() => navigation.navigate('Sign Up')}
            bgColor = "#BCB5B7" 
            buttonText = "Sign Up"
          />
          <TextDivider textColor="#fff" />

        </CenterCont>
        <RowCont>
          <SmallButton iconColor="#699BF7" />
          <SmallButton iconName="logo-google" iconColor="#EC452E"/>
        </RowCont>
      </ImgBg>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});