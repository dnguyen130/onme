import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

const Cont = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  border-width: 1px;
  border-color: #535353;
  border-radius: 30px;
  height: 55px;
  margin: 5px;
`;

const Button = styled.Pressable`
  align-items: center;
  justify-content: center;
  background-color: #838383;
  width: 40%;
  height: 36px;
  border-radius: 30px;
`;

const ButtonText = styled.Text`
  color: #fff;
`;

const Toggle = ({
  drinksOnPress = ()=>{},
  foodOnPress = ()=>{},
}) => {
  return (
    <Cont>
      <Button 
        onPress={drinksOnPress}
      >
        <ButtonText>Drinks</ButtonText>
      </Button>
      <Button 
        onPress={foodOnPress} 
      >
        <ButtonText>Food</ButtonText>
      </Button>
    </Cont>
  );
}
export default Toggle;