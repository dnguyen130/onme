import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: ${props => props.changeButtonColor};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  width: 80%;
  min-height: 53px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 15px;
`;

const BigButton = ({
  buttonText = "Sign In",
  bgColor = "#FE4370;",
  onPress = ()=>{}
}) => {
  return (
    <Button changeButtonColor={bgColor} onPress={onPress}>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}

export default BigButton;