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
  margin: 0 10px;
  overflow: hidden;
`;

const CardBackground = styled.ImageBackground`
  justify-content: flex-end;
  height: 100%;
  width: 100%;
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
      <LinearGradient 
          colors={['rgba(0,0,0,0.8)', 'rgba(196, 196, 196, 0)']} 
          style={{flex: 1, justifyContent: 'flex-end', width: 155, padding: 10 }}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.2, y: 0.2 }}
          >
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
      </LinearGradient>
      </CardBackground>
    </CardCont>
  );
}

export default MenuCard;