import React from 'react';
import styled from 'styled-components/native';

const InputCont = styled.View`
  width: 100%;
  flex: 1;
`

const InputField = styled.TextInput`
  border-width: 1px;
  padding: 5px;
  min-height: 55px;
  border-radius: 20px;
  background-color: white;
  color: #9C9C9C;
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
      <InputField>{textInputPlaceholder}</InputField>
    </InputCont>
  );
}

export default Input;