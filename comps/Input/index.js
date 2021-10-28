import React from 'react';
import styled from 'styled-components/native';

const InputCont = styled.TextInput`
  border-width: 1px;
  padding: 5px;
`;

const Input = ({
  
}) => {
  return (
    <InputCont type="text" placeholder="lolol"/>
  );
}

export default Input;