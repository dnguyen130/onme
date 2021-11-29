import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

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
  font-family: ${props => props.poppinsFont};
  color: #fff;
`;

const Toggle = ({
  drinksOnPress = ()=>{},
  foodOnPress = ()=>{},
  poppinsFont="PoppinsMedium"
}) => {
  const [toggle, setToggle] = useState(false);

  const DrinksOn = ({}) => {
    setToggle(false);
  }

  const FoodOn = ({}) => {
    setToggle(true);
  }

  const [loaded] = useFonts({
    PoppinsRegular: require('../../assets/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null;
  }
  
  else if (toggle === false) {
    return (
      <Cont>
        <Button 
          onPress={drinksOnPress}
          onPressIn={DrinksOn}
          bgColor='#A57760'
        >
          <ButtonText poppinsFont={poppinsFont}>Drinks</ButtonText>
        </Button>
        <Button 
          onPress={foodOnPress}
          onPressIn={FoodOn}
          bgColor='#838383'
        >
          <ButtonText poppinsFont={poppinsFont}>Food</ButtonText>
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
          <ButtonText poppinsFont={poppinsFont}>Drinks</ButtonText>
        </Button>
        <Button 
          onPress={foodOnPress}
          onPressIn={FoodOn}
          bgColor='#A57760'
          >
          <ButtonText poppinsFont={poppinsFont}>Food</ButtonText>
        </Button>
      </Cont>
    );
  }
}
export default Toggle;