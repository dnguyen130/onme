import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Cont = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
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
  poppinsFont="PoppinsMedium"
}) => {
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
  return (
    <Cont>
      <Line borderColor={borderColor} />
      <Text changeTextColor={textColor} poppinsFont={poppinsFont}>{changeText}</Text>
      <Line borderColor={borderColor} />
    </Cont>
  );
}

export default TextDivider;