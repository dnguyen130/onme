import React from 'react';
import styled from 'styled-components/native';

const InputCont = styled.TextInput`
  border-width: 1px;
  padding: 5px;
  min-height: 55px;
  border-radius: 15px;
`;

const Input = ({
  
}) => {
  return (
    <InputCont type="text" placeholder="Placeholder"/>
  );
}

export default Input;