import React from 'react';
import styled from 'styled-components/native';

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
  buttonText = "Sign in"
}) => {
  return (
    <Button>
      <SmallIcon source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}

export default SmallButton;