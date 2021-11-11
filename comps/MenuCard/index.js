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
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  padding: 0 0 10px 10px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 5px;
`;

const Name = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 5px;

`;

const Price = styled.Text`
  color: #fff;
  font-size: 10px;
`;

const MenuCard = ({
  cardImg = require('../../assets/drink_1.png'),
  onPress = ()=>{}
}) => {
  return (
    <CardCont onPress={onPress}>
      <CardBackground source={cardImg} resizeMode="cover" borderRadius="15px" opacity="0.8">
        <Title>The Habitat</Title>
        <Name>Zesty Calimari</Name>
        <Price>$9.99</Price>
      </CardBackground>
    </CardCont>
  );
}

export default MenuCard;