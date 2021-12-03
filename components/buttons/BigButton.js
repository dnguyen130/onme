import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Button = styled.TouchableOpacity`
  background-color: ${props => props.changeButtonColor};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: ${props => props.width};
  min-height: 51px;
  margin: 5px;
`;

const ButtonText = styled.Text`
  font-family: ${props => props.poppinsFont};
  color: #fff;
  font-weight: 700;
  font-size: 15px;
`;

const BigButton = ({
  buttonText = "Sign In",
  bgColor = "#FE4370;",
  width = '100%',
  onPress = ()=>{},
  onPressIn = ()=>{},
  poppinsFont="PoppinsBold"
}) => {
  const [loaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null
  }
  return (
    <Button changeButtonColor={bgColor} width={width} onPress={onPress} onPressIn={onPressIn}>
      <ButtonText poppinsFont={poppinsFont}>{buttonText}</ButtonText>
    </Button>
  );
}

export default BigButton;