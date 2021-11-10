import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.changeTextColor};
  align-self: ${props => props.alignSelf};

`;

const TextLink = ({
  changeText = "Forgot Password?",
  textColor = "#000;",
  alignSelf = "center"
}) => {
  return (
    <Text changeTextColor={textColor} alignSelf={alignSelf}>{changeText}</Text>
  );
}

export default TextLink;