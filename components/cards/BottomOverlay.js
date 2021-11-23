import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import Header from '../global/Header';
import Title from '../text/Title';
import BigButton from '../buttons/BigButton';

const Cont = styled.View`
  flex: 1;
  border-radius: 30px;
  background-color: #2E2E2E;
`;

const TitleCont = styled.View`
  padding: 7%;
`;

const PrimaryBtnCont = styled.View`
  margin-top: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const BottomOverlay = ({
  send = ()=>{},
  directions = ()=>{},
  removeModal = ()=>{}
}) => {
  return (
    <Cont>
      <Header 
        display='none' 
        source={require("../../assets/btmOverlayImg.png")} 
        maxHeight='23%'
        opacity={0}
        />
      <TitleCont>
        <Title 
          titleText='The Habitat'
          titleSize='30px'
          titleMargin='0 0 10px 0'
        />
        <Title 
          titleText='3700 Willingdon, Burnaby'
          titleSize='15px'
          titleMargin='0 0 10px 0'
        />
        <Title 
          titleText='Monday to Sunday 10am to 10pm'
          titleSize='15px'
          titleMargin='0 0 10px 0'
        />
      </TitleCont>
      <PrimaryBtnCont>
        <BigButton 
          width='35%' 
          buttonText='Send a drink'
          onPress={send}
          onPressIn={removeModal}
        />
        <BigButton 
          width='35%' 
          buttonText='Directions'
          bgColor='#A57760'
          onPress={directions}
          onPressIn={removeModal}
        />
      </PrimaryBtnCont>
    </Cont>
  );
}

export default BottomOverlay;