import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const CardCont = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 179px;
  border-radius: 15px;
  background-color: #000;
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
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
      <CardBackground source={cardImg} resizeMode="cover">
        <LinearGradient 
          colors={['rgba(0,0,0,0.8)', 'rgba(196, 196, 196, 0)']} 
          style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 155}}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.2, y: 0.2 }}
          >
        <Name>{restaurantName}</Name>
        <Address>{restaurantAddress}</Address>
        </LinearGradient>
      </CardBackground>
    </CardCont>
  );
}

export default Card;