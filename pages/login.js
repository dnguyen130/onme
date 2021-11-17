import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Video } from 'expo-av';

import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import Title from '../comps/Title';
import TextLink from '../comps/TextLink';
import TextDivider from '../comps/TextDivider';
import styled from 'styled-components/native';

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`;

const CenterCont = styled.View`
  align-items: center;
  width: 100%;
`;

const ColCont = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 10px;
`;

const RowCont = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const InputCont = styled.View`
width: 100%;
height: auto;
`;

const EmptyCont = styled.View`
  flex: 0.5;
`;

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={require("../assets/video-1.mp4")}
        style={styles.backgroundVideo}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        volume={1}
        muted={true}
        resizeMode="cover"
      />
      {/* <ImgBg source={require("../assets/imgBg.png")} resizeMode="cover"> */}
        <ColCont>
        <EmptyCont />
          <StatusBar style="auto" />
          <Title alignSelf="flex-start" />
          <InputCont>
            <Input textInputPlaceholder = "Email" textInputLabelSize="0px" />
            <Input textInputPlaceholder = "Password" textInputLabelSize="0px" />
            <TextLink textColor="#fff" alignSelf="flex-end" />
          </InputCont>
          <CenterCont>
            <BigButton onPress={() => navigation.navigate('Dashboard')} />
            <BigButton 
              onPress={() => navigation.navigate('Sign Up')}
              bgColor = "#BCB5B7" 
              buttonText = "Sign Up"
            />
          </CenterCont>
          <TextDivider textColor="#fff" />
          <RowCont>
            <SmallButton iconColor="#699BF7" />
            <SmallButton iconName="logo-google" iconColor="#EC452E"/>
          </RowCont>
        </ColCont>
      {/* </ImgBg> */}
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});