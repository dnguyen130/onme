import React from 'react';
import styled from 'styled-components/native';

const InputCont = styled.View`
  width: 100%;
  flex: 1;
  margin: 5px;
`

const InputField = styled.TextInput`
  border-width: 1px;
  padding: 5px;
  min-height: 55px;
  border-radius: 20px;
  background-color: white;
  color: black;
  padding: 0 20px;
`;

const InputLabel = styled.Text`
  color: white;
  font-size: 14px;
`

const Input = ({
  textInputPlaceholder = "",
  textInputLabel = ""
}) => {
  return (
    <InputCont>
      <InputLabel>{textInputLabel}</InputLabel>
      <InputField placeholder={textInputPlaceholder}></InputField>
    </InputCont>
  );
}

export default Input;