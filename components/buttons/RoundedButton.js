import React from 'react';
import styled from 'styled-components';

import Title from '../text/Title';

const RoundedCont = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 50px;
  height: 40px;
  background-color: ${props => props.roundedColor};
  border-color: #A57760;
  border-style: solid;
  border-width: ${props => props.roundedBorderWidth};
  border-radius: 10px;
  flex: 1;
  margin: 10px;
`

const RoundedButton = ({
  titleText = "%",
  titleSize = "18px",
  roundedColor = "#FE4370",
  roundedBorderWidth = "0px",
  onPress = ()=>{}
}) => {
  return (
    <RoundedCont roundedColor={roundedColor} roundedBorderWidth={roundedBorderWidth} onPress={onPress}>
      <Title titleText={titleText} titleSize={titleSize} titleAlignSelf="center" />
    </RoundedCont>
  );
}

export default RoundedButton;