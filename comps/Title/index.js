import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: ${props => props.changeFontSize};
  font-weight: 700;
  color: ${props => props.changeTextColor};
`;

const Title = ({
  changeText = "Welcome !",
  textColor = "#000;",
  fontSize = "36px"
}) => {
  return (
    <Text changeTextColor={textColor} changeFontSize={fontSize}>{changeText}</Text>
  );
}

export default Title;