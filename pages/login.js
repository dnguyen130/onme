import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Video from 'react-native-video';

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
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const InputCont = styled.View`
width: 100%;
height: auto;
`

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Video
        source={require("../assets/video-1.mp4")}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      /> */}
      <ImgBg source={require("../assets/imgBg.png")} resizeMode="cover">
        <ColCont>
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
            <TextDivider textColor="#fff" />
          </CenterCont>
          <RowCont>
            <SmallButton iconColor="#699BF7" />
            <SmallButton iconName="logo-google" iconColor="#EC452E"/>
          </RowCont>
        </ColCont>
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
  backgroundVideo: {
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  }
});