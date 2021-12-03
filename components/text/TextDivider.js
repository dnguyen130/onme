import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Cont = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: ${props => props.addMargin};
`;

const Text = styled.Text`
  font-family: ${props => props.poppinsFont};
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.changeTextColor};
`;

const Line = styled.View`
  width: 27%;
  height: 2px;
  border-width: 1px;
  border-color: ${props => props.borderColor};
`;

const TextDivider = ({
  changeText = "or continue with",
  textColor = "#000",
  borderColor = "#000",
  poppinsFont="PoppinsMedium",
  addMargin="0px"
}) => {
  const [loaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null
  }
  return (
    <Cont addMargin={addMargin}>
      <Line borderColor={borderColor} />
      <Text changeTextColor={textColor} poppinsFont={poppinsFont}>{changeText}</Text>
      <Line borderColor={borderColor} />
    </Cont>
  );
}

export default TextDivider;