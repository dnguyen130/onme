import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const InputCont = styled.View`
  min-height: 55px;
  width: 100%;
`

const InputField = styled.TextInput`
  min-height: 55px;
  border-radius: ${props => props.borderRadius};
  background-color: white;
  color: black;
  padding: 0 20px;
  text-align: ${props => props.textAlign};
  font-family: ${props => props.poppinsFont};
`;

const InputLabel = styled.Text`
  color: white;
  font-size: ${props => props.textInputLabelSize};
  font-family: ${props => props.poppinsFont};
  padding-bottom: 5px;
`

const Input = ({
  textInputPlaceholder = "",
  textInputLabel = "",
  textInputLabelSize = "14px",
  borderRadius="20px",
  textAlign="auto",
  value = "",
  secureTextEntry = false,
  onChangeText = () => {},
  autoCompleteType = 'off',
  textContentType = 'none',
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
        borderRadius={borderRadius} 
        textAlign={textAlign}
        placeholder={textInputPlaceholder} 
        value={value} 
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        autoCompleteType={autoCompleteType}
        textContentType={textContentType}
        poppinsFont="PoppinsMedium" />
    </InputCont>
  );
}

export default Input;