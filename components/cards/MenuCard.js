import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const CardCont = styled.Pressable`
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
  margin-right: 5px;
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
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 5px;
  font-family: ${props => props.poppinsFont};
`;

const Name = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 5px;
  font-family: ${props => props.poppinsFont};
`;

const Price = styled.Text`
  color: #fff;
  font-size: 10px;
  font-family: ${props => props.poppinsFont};
`;

const Plus = styled.Text`
  color: #fff;
  font-size: 15px;
  font-family: ${props => props.poppinsFont};
`;

const MenuCard = ({
  cardImg = require('../../assets/drink_1.png'),
  restaurantText = "",
  itemText = "Zesty Calimari",
  priceText = "$9.99",
  onPress = ()=>{},
  addOnPress = ()=>{},
  poppinsFont="PoppinsMedium"
}) => {
  const [loaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return <AppLoading />
  }
  return (
    <CardCont onPress={onPress}>
      <CardBackground 
      source={cardImg} 
      resizeMode="cover"
      opacity={0.8}
      >
      <LinearGradient 
          colors={['rgba(0,0,0,0.8)', 'rgba(196, 196, 196, 0)']} 
          style={{flex: 1, justifyContent: 'flex-end', width: 155, padding: 10 }}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.2, y: 0.2 }}
          >
        <Title poppinsFont={poppinsFont}>{restaurantText}</Title>
        <RowCont>
          <ColCont>
            <Name poppinsFont={poppinsFont}>{itemText}</Name>
            <Price poppinsFont="PoppinsLight">{priceText}</Price>
          </ColCont>
          <PrimaryButton onPress={addOnPress}>
            <Plus poppinsFont="PoppinsBold">+</Plus>
          </PrimaryButton>
        </RowCont>
      </LinearGradient>
      </CardBackground>
    </CardCont>
  );
}

export default MenuCard;