import React from 'react';
import styled from 'styled-components/native';

const CardCont = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 179px;
  border-radius: 15px;
  background-color: #000;
  margin-left: 10px;
  margin-right: 10px;
`;

const CardBackground = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  
`;

const Name = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
`;

const Address = styled.Text`
  color: #fff;
  font-size: 10px;
`;

const Card = ({
  cardImg = require('../../assets/food_1.png'),
  restaurantName = "The Habitat",
  restaurantAddress = "3700 Willingdon Ave",
  onPress = ()=>{}
}) => {
  return (
    <CardCont onPress={onPress}>
      <CardBackground source={cardImg} resizeMode="cover" borderRadius="15px" opacity="0.5">
        <Name>{restaurantName}</Name>
        <Address>{restaurantAddress}</Address>
      </CardBackground>
    </CardCont>
  );
}

export default Card;