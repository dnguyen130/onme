import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import Title from '../text/Title';
import BigButton from '../buttons/BigButton';

const Cont = styled.View`
  flex: 1;
  background-color: #2E2E2E;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const Img = styled.Image`
  flex: 1;
  max-height: 40%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const TitleCont = styled.View`
  padding: 7%;
`;

const PrimaryBtnCont = styled.View`
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
      <Img source={require('../../assets/btmOverlayImg.png')} />
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
            // onPressIn={removeModal}
          />
        </PrimaryBtnCont>
    </Cont>
  );
}

export default BottomOverlay;