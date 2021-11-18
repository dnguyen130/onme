import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.changeTextColor};
`;


const TextDivider = ({
  changeText = "or continue with",
  textColor = "#000;"
}) => {
  return (
    <Text changeTextColor={textColor}>{changeText}</Text>
  );
}

export default TextDivider;