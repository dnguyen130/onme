import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.changeTextColor};
`;

const Line = styled.View`
  width: 27%;
  height: 2px;
  border-width: 1px;
  border-color: ${props => props.borderColor};
`;

const TextDivider = ({
  changeText = "or continue with",
  textColor = "#000",
  borderColor = "#000"
}) => {
  return (
    <Cont>
      <Line borderColor={borderColor} />
      <Text changeTextColor={textColor}>{changeText}</Text>
      <Line borderColor={borderColor} />
    </Cont>
  );
}

export default TextDivider;