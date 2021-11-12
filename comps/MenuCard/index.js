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

const PrimaryButton = styled.Pressable`
  align-items: center;
  justify-content: center;  
  width: 25px;
  height: 25px;
  background-color: #FE4370;
  border-radius: 30px;
  margin-right: 10px;
`;

const RowCont = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ColCont = styled.View`
  flex-direction: column;
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
      <CardBackground source={cardImg} resizeMode="cover">
        <Title>The Habitat</Title>
        <RowCont>
          <ColCont>
            <Name>Zesty Calimari</Name>
            <Price>$9.99</Price>
          </ColCont>
          <PrimaryButton>
            <Name>+</Name>
          </PrimaryButton>
        </RowCont>
      </CardBackground>
    </CardCont>
  );
}

export default MenuCard;