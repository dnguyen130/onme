import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: #FE4370;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  width: 353px;
  min-height: 53px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 15px;
`;

const BigButton = ({
  buttonText = "Sign In"
}) => {
  return (
    <Button>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}

export default BigButton;