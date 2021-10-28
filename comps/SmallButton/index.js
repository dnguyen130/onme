import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
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

const SmallButton = ({
  buttonText = "Sign in"
}) => {
  return (
    <Button>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}

export default SmallButton;