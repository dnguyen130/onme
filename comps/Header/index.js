import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import Title from '../Title';
import BackButton from '../BackButton';

const Cont = styled.View`
  flex: 1;
  background-color: #A57760;
  max-height: 25%;
`;

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  max-height: 25%;
  padding: 5%;
  min-width: 100%;
  `
;

const Header = ({
  source=require("../../assets/headerImg.png"),
  mainTitle="",
  mainWeight="700",
  subTitle="",
  subWeight="400",
  subTitleSize="36px"
}) => {
  return (
    <Cont>
      <ImgBg source={source} resizeMode="cover" opacity="0.5">
        <BackButton />
        <View top="-8%">
          <Title titleText={mainTitle} titleWeight={mainWeight} />
          <Title titleText={subTitle} titleWeight={subWeight} titleSize={subTitleSize} />
        </View>
      </ImgBg>
    </Cont>
  );
}

export default Header;