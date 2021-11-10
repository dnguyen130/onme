import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import Title from '../Title';
import BackButton from '../BackButton';

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  max-height: 25%;
  padding: 5%;`
;

const Header = ({
  source=require("../../assets/imgBg.png"),
  mainTitle="",
  mainWeight="700",
  subTitle="",
  subWeight="400"
}) => {
  return (
    <ImgBg source={source} resizeMode="cover">
      <BackButton />
      <View>
        <Title titleText={mainTitle} titleWeight={mainWeight} />
        <Title titleText={subTitle} titleWeight={subWeight} />
      </View>
    </ImgBg>
  );
}

export default Header;