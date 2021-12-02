import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

import { Icon } from 'react-native-elements';

const Button = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${props => props.buttonColor};
  justify-content: space-evenly;
  align-items: center;
  border-width: ${props => props.buttonBorderWidth};
  border-color: #BFBFBF;
  border-radius: 10px;
  width: 117px;
  height: 37px;
`;

const ButtonText = styled.Text`
  font-family: ${props => props.poppinsFont};
  color: ${props => props.buttonTextcolor};
  font-size: 15px;
  font-weight: ${props => props.buttonTextWeight};
`;

const SmallButton = ({
  buttonText = "Sign in",
  iconName = "logo-facebook",
  iconBrand = 'ionicon',
  iconColor = "#000",
  buttonTextcolor = "#777777",
  buttonColor = "#FFF",
  buttonTextWeight = "400",
  buttonBorderWidth = "1px",
  onPress = () => {},
  poppinsFont="PoppinsRegular"
}) => {
  const [loaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null;
  }
  return (
    <Button buttonColor={buttonColor} buttonBorderWidth={buttonBorderWidth} onPress={onPress}>
      <Icon 
        name={iconName}
        type={iconBrand}
        color={iconColor}
      />
      <ButtonText 
        buttonTextcolor={buttonTextcolor} 
        buttonTextWeight={buttonTextWeight} 
        poppinsFont={poppinsFont}>{buttonText}</ButtonText>
    </Button>
  );
}

export default SmallButton;