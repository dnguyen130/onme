import React from 'react';
import styled from 'styled-components/native';

const InputCont = styled.View`
  min-height: 55px;
  width: 100%;
`

const InputField = styled.TextInput`
  border-width: 1px;
  min-height: 55px;
  border-radius: 20px;
  background-color: white;
  color: black;
  padding: 0 20px;
`;

const InputLabel = styled.Text`
  color: white;
  font-size: ${props => props.textInputLabelSize};
`

const Input = ({
  textInputLabel = "",
  textInputPlaceholder = "",
  textInputLabelSize = "14px",
  value="",
  autoCompleteType = "off",
  secureTextEntry = false,
  onChangeText = () => {}
}) => {
  return (
    <InputCont>
      <InputLabel textInputLabelSize={textInputLabelSize}>{textInputLabel}</InputLabel>
      <InputField 
      placeholder={textInputPlaceholder} 
      value={value} 
      autoCompleteType={autoCompleteType} 
      onChangeText={onChangeText} 
      secureTextEntry={secureTextEntry} />
    </InputCont>
  );
}

export default Input;