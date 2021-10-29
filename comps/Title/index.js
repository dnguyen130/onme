import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: 36px;
  font-weight: 700;
`;

const Title = ({
  changeText = "Welcome"
}) => {
  return (
    <Text>{changeText}</Text>
  );
}

export default Title;