import React from 'react';
import styled from 'styled-components/native';

import Title from '../Title';
import BackButton from '../BackButton';

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  max-height: 30%;
  padding: 5%;
  border-width: 1px;
  `
;

const Header = ({
  source=require("../../assets/imgBg.png"),
  mainTitle="",
  titleWeight="700",
  subTitle="",

}) => {
  return (
    <ImgBg source={source} resizeMode="cover">
      <BackButton />
      <Title titleText={mainTitle} titleWeight={titleWeight} />
      <Title titleText={subTitle} titleWeight={titleWeight} />
    </ImgBg>
  );
}

export default Header;