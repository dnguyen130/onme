import React from 'react';
import styled from 'styled-components/native';

const CardCont = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 179px;
  border-radius: 15px;
  /* background-color: #FE4370; */
`;

const CardBackground = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Name = styled.Text`
  color: #fff;
`;

const Address = styled.Text`
  color: #fff;
`;

const Card = ({
  icon = require('../../assets/food_1.png'),
  onPress = ()=>{}
}) => {
  return (
    <CardCont onPress={onPress}>
      <CardBackground source={icon} resizeMode="cover" borderRadius="15px">
        <Name>Earl's</Name>
        <Address>4700 Kingsway</Address>
      </CardBackground>
    </CardCont>
  );
}

export default Card;