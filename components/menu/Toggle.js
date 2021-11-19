import React, { useState } from 'react';
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
  background-color: ${props => props.bgColor};
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
  const [toggle, setToggle] = useState(false);

  const DrinksOn = ({}) => {
    setToggle(false);
  }

  const FoodOn = ({}) => {
    setToggle(true);
  }
  
  if (toggle === false) {
    return (
      <Cont>
        <Button 
          onPress={drinksOnPress}
          onPressIn={DrinksOn}
          bgColor='#A57760'
        >
          <ButtonText>Drinks</ButtonText>
        </Button>
        <Button 
          onPress={foodOnPress}
          onPressIn={FoodOn}
          bgColor='#838383'
        >
          <ButtonText>Food</ButtonText>
        </Button>
      </Cont>
    );
  }

  else {
    return (
      <Cont>
        <Button 
          onPress={drinksOnPress}
          onPressIn={DrinksOn}
          bgColor='#838383'
          >
          <ButtonText>Drinks</ButtonText>
        </Button>
        <Button 
          onPress={foodOnPress}
          onPressIn={FoodOn}
          bgColor='#A57760'
          >
          <ButtonText>Food</ButtonText>
        </Button>
      </Cont>
    );
  }
}
export default Toggle;