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
  max-height: 50%;
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
  overlayImg = require('../../assets/images/menu/drink/drinksOverlay_1.png'),
  add = ()=>{},
}) => {
  return (
    <Cont>
      <Img source={overlayImg} />
        <TitleCont>
          <Title 
            titleText='Ravioli Martini'
            titleSize='20px'
            titleMargin='0 0 10px 0'
            poppinsFont='PoppinsMedium'
          />
          <Title 
            titleText='$5.99'
            titleSize='18px'
            titleMargin='0 0 10px 0'
            titleColor='#A57760'
          />
          <Title 
            titleText='A delicious martini made out of ravioli, made of gin, rum and all the good stuff.'
            titleSize='18px'
            titleMargin='0 0 10px 0'
            poppinsFont='PoppinsRegular'
          />
        </TitleCont>
        <PrimaryBtnCont>
          <BigButton 
            width='50%' 
            buttonText='Add to cart'
            onPress={add}
          />
        </PrimaryBtnCont>
    </Cont>
  );
}

export default BottomOverlay;