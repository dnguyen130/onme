import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const InputCont = styled.View`
  min-height: 55px;
  margin: 0 3px;
  flex: 1;
`

const InputField = styled.TextInput`
  border-width: 1px;
  min-height: 55px;
  border-radius: 20px;
  background-color: white;
  color: black;
  padding: 0 20px;
  font-family: ${props => props.poppinsFont};
`;

const InputLabel = styled.Text`
  font-family: ${props => props.poppinsFont};
  color: white;
  font-size: ${props => props.textInputLabelSize};
  padding-bottom: 5px;
`

const FlexInput = ({
  textInputPlaceholder = "",
  textInputLabel = "",
  textInputLabelSize = "14px",
  value = "",
  onChangeText = () => {},
  poppinsFont="PoppinsSemiBold"
}) => {
  const [loaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return <AppLoading />
  }
  return (
    <InputCont>
      <InputLabel 
        textInputLabelSize={textInputLabelSize}
        poppinsFont={poppinsFont}>{textInputLabel}</InputLabel>
      <InputField 
      placeholder={textInputPlaceholder}
      value={value}
      onChangeText={onChangeText} 
      poppinsFont="PoppinsMedium" />
    </InputCont>
  );
}

export default FlexInput;