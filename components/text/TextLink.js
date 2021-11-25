import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.changeTextColor};
  align-self: ${props => props.alignSelf};
  padding-top: ${props => props.paddingTop};
`;

const TextLink = ({
  changeText = "Forgot Password?",
  textColor = "#000;",
  alignSelf = "center",
  paddingTop = '0%'
}) => {
  return (
    <Text 
      changeTextColor={textColor} 
      alignSelf={alignSelf}
      paddingTop={paddingTop}
    >{changeText}</Text>
  );
}

export default TextLink;