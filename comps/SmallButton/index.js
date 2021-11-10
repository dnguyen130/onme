import React from 'react';
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements';

const Button = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-width: 1px;
  border-radius: 10px;
  width: 117px;
  min-height: 37px;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 15px;
`;

const SmallIcon = styled.Image`
  width: 13px;
  height: 13px;
`;

const SmallButton = ({
  buttonText = "Sign in",
  iconName = "logo-facebook",
  iconColor = "#000"
}) => {
  return (
    <Button>
      <Icon 
        name={iconName}
        type='ionicon'
        color={iconColor}
      />
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}

export default SmallButton;