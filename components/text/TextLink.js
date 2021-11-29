import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';


const Text = styled.Text`
  font-family: ${props => props.poppinsFont};
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.changeTextColor};
  align-self: ${props => props.alignSelf};
  padding-top: ${props => props.paddingTop};
`;

const TextLink = ({
  changeText = "Forgot Password?",
  textColor = "#000;",
  alignSelf = "center",
  paddingTop = '0%',
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
    <Text 
      changeTextColor={textColor} 
      alignSelf={alignSelf}
      paddingTop={paddingTop}
      poppinsFont={poppinsFont}
    >{changeText}</Text>
  );
}

export default TextLink;