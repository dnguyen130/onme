import React from 'react';
import styled from 'styled-components/native';

const InputCont = styled.TextInput`
  border-width: 1px;
  padding: 5px;
  min-height: 55px;
  border-radius: 15px;
  width: 353px;
`;

const Input = ({
  placeholder = "Placeholder"
}) => {
  return (
    <InputCont type="text" placeholder={placeholder}/>
  );
}

export default Input;