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
  overlayImg = require('../../assets/images/restaurant/habitat.png'),
  send = ()=>{},
  directions = ()=>{},
  mainTitle = "The Habitat",
  addressTitle = "3700 Willingdon Ave, Burnaby",
  openingHours = 'Monday to Sunday 10am to 10pm'
}) => {
  return (
    <Cont>
      <Img source={overlayImg} />
        <TitleCont>
          <Title 
            titleText={mainTitle}
            titleSize='30px'
            titleMargin='0 0 10px 0'
            titleColor='#A57760'
          />
          <Title 
            titleText={addressTitle}
            titleSize='15px'
            titleMargin='0 0 10px 0'
            poppinsFont='PoppinsMedium'
          />
          {/* <Title 
            titleText={openingHours}
            titleSize='15px'
            titleMargin='0 0 10px 0'
            poppinsFont='PoppinsMedium'
          /> */}
        </TitleCont>
        <PrimaryBtnCont>
          <BigButton 
            width='35%' 
            buttonText='Send a drink'
            onPress={send}
          />
          <BigButton 
            width='35%' 
            buttonText='Directions'
            bgColor='#A57760'
            onPress={directions}
          />
        </PrimaryBtnCont>
    </Cont>
  );
}

export default BottomOverlay;