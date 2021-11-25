import React from 'react';
import styled from 'styled-components/native';

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
  color: #fff;
  font-weight: 700;
  font-size: 15px;
`;

const BigButton = ({
  buttonText = "Sign In",
  bgColor = "#FE4370;",
  width = '100%',
  onPress = ()=>{},
  onPressIn = ()=>{}
}) => {
  return (
    <Button changeButtonColor={bgColor} width={width} onPress={onPress} onPressIn={onPressIn}>
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
}

export default BigButton;