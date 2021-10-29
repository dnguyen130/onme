import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const TextLink = ({
  changeText = "Forgot Password?"
}) => {
  return (
    <Text>{changeText}</Text>
  );
}

export default TextLink;