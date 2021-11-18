import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Video } from 'expo-av';

import BigButton from '../components/buttons/BigButton';
import Input from '../components/global/Input';
import SmallButton from '../components/buttons/SmallButton';
import Title from '../components/text/Title';
import TextLink from '../components/text/TextLink';
import TextDivider from '../components/text/TextDivider';

const CenterCont = styled.View`
  align-items: center;
  width: 100%;
`;

const ColCont = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 80%;
  padding: 10px;
`;

const RowCont = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

const InputCont = styled.View`
width: 100%;
height: auto;
`;

const EmptyCont = styled.View`
  flex: 0.5;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Video
        source={require("../assets/video-1.mp4")}
        style={styles.backgroundVideo}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        volume={1}
        isMuted={true}
        resizeMode="cover"
      />
        <ColCont>
          <EmptyCont />
          <Title alignSelf="flex-start" />
          <InputCont>
            <Input textInputPlaceholder = "Email" textInputLabelSize="0px" />
            <Input textInputPlaceholder = "Password" textInputLabelSize="0px" />
            <TextLink 
              textColor="#fff" 
              alignSelf="flex-end" 
              paddingTop='5%'
            />
          </InputCont>
          <CenterCont>
            <BigButton onPress={() => navigation.navigate('Dashboard')} />
            <BigButton 
              onPress={() => navigation.navigate('Sign Up')}
              bgColor = "#BCB5B7" 
              buttonText = "Sign Up"
            />
          </CenterCont>
          <TextDivider textColor="#fff" borderColor="#888" />
          <RowCont>
            <SmallButton iconColor="#699BF7" />
            <SmallButton iconName="logo-google" iconColor="#EC452E"/>
          </RowCont>
        </ColCont>
    </SafeAreaView>
  );
}
