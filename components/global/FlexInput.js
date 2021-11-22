import React from 'react';
import styled from 'styled-components/native';

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
`;

const InputLabel = styled.Text`
  color: white;
  font-size: ${props => props.textInputLabelSize};
`

const FlexInput = ({
  textInputPlaceholder = "",
  textInputLabel = "",
  textInputLabelSize = "14px",
  onChangeText = () => {},
  value="",
  autoCompleteType = "off",
  secureTextEntry = false
}) => {
  return (
    <InputCont>
      <InputLabel textInputLabelSize={textInputLabelSize}>{textInputLabel}</InputLabel>
      <InputField placeholder={textInputPlaceholder} onChangeText={onChangeText} value={value} autoCompleteType={autoCompleteType} secureTextEntry={secureTextEntry} />
    </InputCont>
  );
}

export default FlexInput;