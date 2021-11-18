import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Title from '../text/Title';
import BackButton from './BackButton';

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  max-height: 25%;
  min-width: 100%;
  `
;

const TitleCont = styled.View`
  justify-content: flex-end;
`;

const Header = ({
  source=require("../../assets/headerImg.png"),
  mainTitle="",
  mainWeight="700",
  subTitle="",
  subWeight="400"
}) => {
  return (
    <ImgBg 
      source={source} 
      resizeMode="cover"
    >
      <LinearGradient 
        colors={['rgba(0,0,0,1)', 'rgba(165, 119, 96, 0.5)']} 
        style={{flex: 1, width: "100%", height: "100%", padding: "5%", justifyContent: "space-between"}}
        start={{ x: 0, y: 0.98 }}
        end={{ x: 0, y: 0 }}
      >
        <BackButton />
        <TitleCont>
          <Title titleText={mainTitle} titleWeight={mainWeight} />
          <Title titleText={subTitle} titleWeight={subWeight} />
        </TitleCont>
      </LinearGradient>
    </ImgBg>
  );
}

export default Header;