import React from 'react';
import styled from 'styled-components/native';

const InputCont = styled.TextInput`
  border-width: 1px;
  padding: 5px;
  min-height: 55px;
  border-radius: ${props => props.changeBorderRadius};
  width: 353px;
  background-color: #fff;
`;

const Input = ({
  placeholder = "Placeholder",
  borderRadius = "15px"
}) => {
  return (
    <InputCont type="text" placeholder={placeholder} changeBorderRadius={borderRadius} />
  );
}

export default Input;