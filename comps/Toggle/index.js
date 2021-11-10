import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.View`
  flex-direction: row;

`;

const Button = styled.Pressable`

`;

const ButtonText = styled.Text`

`;

const Toggle = ({
  
}) => {
  return (
    <Cont>
      <Button>
        <ButtonText>Hello</ButtonText>
      </Button>
      <Button>
        <ButtonText>Hello</ButtonText>
      </Button>
    </Cont>
  );
}

export default Toggle;