import React from 'react';
import styled from 'styled-components/native';

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
  color: ${props => props.buttonTextcolor};
  font-size: 15px;
  font-weight: ${props => props.buttonTextWeight};
`;

const SmallIcon = styled.Image`
  width: 13px;
  height: 13px;
`;

const SmallButton = ({
  buttonText = "Sign in",
  iconName = "logo-facebook",
  iconBrand = 'ionicon',
  iconColor = "#000",
  buttonTextcolor = "#000",
  buttonColor = "#FFF",
  buttonTextWeight = "400",
  buttonBorderWidth = "1px"
}) => {
  return (
    <Button buttonColor={buttonColor} buttonBorderWidth={buttonBorderWidth}>
      <Icon 
        name={iconName}
        type={iconBrand}
        color={iconColor}
      />
      <ButtonText buttonTextcolor={buttonTextcolor} buttonTextWeight={buttonTextWeight} >{buttonText}</ButtonText>
    </Button>
  );
}

export default SmallButton;