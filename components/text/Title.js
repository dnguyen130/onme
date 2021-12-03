import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Text = styled.Text`
  font-family: ${props => props.poppinsFont};
  font-size: ${props => props.titleSize};
  font-weight: ${props => props.titleWeight};
  color: ${props => props.titleColor};
  margin: ${props => props.titleMargin};
  text-align: ${props => props.titleAlign};
  text-decoration-line: ${props => props.textDecorationLine};
  margin-right: ${props => props.titleMarginRight};
  align-self: ${props => props.titleAlignSelf};
`;

const Title = ({
  titleText = "Welcome !",
  titleColor = "#FFF",
  titleWeight = "400",
  titleSize = "36px",
  titleMargin = "0px",
  titleAlign = "left",
  titleMarginRight = "0px",
  textDecorationLine = "none",
  onPress = () => {},
  titleAlignSelf = "flex-start",
  poppinsFont = "PoppinsSemiBold"
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
    <Text 
      titleColor={titleColor}
      titleWeight={titleWeight}
      titleSize={titleSize}
      titleWeight={titleWeight}
      titleMargin={titleMargin}
      titleAlign={titleAlign}
      textDecorationLine={textDecorationLine}
      titleMarginRight={titleMarginRight}
      onPress={onPress}
      titleAlignSelf={titleAlignSelf}
      poppinsFont={poppinsFont}
      >
        {titleText}
    </Text>
  );
}

export default Title;