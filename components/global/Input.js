import React from 'react';
import styled from 'styled-components/native';

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
`;

const InputLabel = styled.Text`
  color: white;
  font-size: ${props => props.textInputLabelSize};
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
  textContentType = 'none'
}) => {
  return (
    <InputCont>
      <InputLabel textInputLabelSize={textInputLabelSize}>{textInputLabel}</InputLabel>
      <InputField 
        borderRadius={borderRadius} 
        textAlign={textAlign}
        placeholder={textInputPlaceholder} 
        value={value} 
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        autoCompleteType={autoCompleteType}
        textContentType={textContentType} />
    </InputCont>
  );
}

export default Input;