import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: ${props => props.titleSize};
  font-weight: ${props => props.titleWeight};
  color: ${props => props.titleColor};
  margin: ${props => props.titleMargin};
  text-align: ${props => props.titleAlign};
  text-decoration-line: ${props => props.textDecorationLine};
  margin-right: ${props => props.titleMarginRight};
  align-self: ${props => props.titleAlignSelf};
`;

const Title = ({
  titleText = "Welcome !",
  titleColor = "#FFF",
  titleWeight = "400",
  titleSize = "36px",
  titleMargin = "0px",
  titleAlign = "left",
  titleMarginRight = "0px",
  textDecorationLine = "none",
  titleAlignSelf = "flex-start"
}) => {
  return (
    <Text 
      titleColor={titleColor}
      titleWeight={titleWeight}
      titleSize={titleSize}
      titleWeight={titleWeight}
      titleMargin={titleMargin}
      titleAlign={titleAlign}
      textDecorationLine={textDecorationLine}
      titleMarginRight={titleMarginRight}
      titleAlignSelf={titleAlignSelf}
      >
        {titleText}
    </Text>
  );
}

export default Title;