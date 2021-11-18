import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

import Title from '../text/Title';
import BackButton from './BackButton';

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  max-height: 29%;
  min-width: 100%;
  `
;

const TitleCont = styled.View`
  justify-content: flex-end;
  padding-bottom: 3%;
`;

const RowCont = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Header = ({
  source=require("../../assets/headerImg.png"),
  mainTitle="",
  mainWeight="700",
  subTitle="",
  subWeight="400",
  subTitleSize="36px",
  iconTitleName='',
  iconTitleType='',
  iconTitleColor='',
  iconSubName='',
  iconSubType='',
  iconSubColor='',
  onPress = ()=>{}
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
        <BackButton paddingTop='7%' onPress={onPress} />
        <TitleCont>
          <RowCont>
            <Title titleText={mainTitle} titleWeight={mainWeight} /> 
            <Icon 
              name={iconTitleName}
              type={iconTitleType}
              color={iconTitleColor}
              containerStyle={{marginLeft: 5}}
            />
          </RowCont>
          <RowCont>
            <Title titleText={subTitle} titleWeight={subWeight} titleSize={subTitleSize} />
            <Icon 
              name={iconSubName}
              type={iconSubType}
              color={iconSubColor}
              containerStyle={{marginLeft: 5}}
            />
          </RowCont>
        </TitleCont>
      </LinearGradient>
    </ImgBg>
  );
}

export default Header;