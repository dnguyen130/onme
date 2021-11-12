import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: ${props => props.titleSize};
  font-weight: ${props => props.titleWeight};
  color: ${props => props.titleColor};
  text-decoration-line: ${props => props.textDecorationLine};
  margin-right: ${props => props.titleMarginRight};;
`;

const Title = ({
  titleText = "Welcome !",
  titleColor = "#FFF",
  titleWeight = "400",
  titleSize = "36px",
  titleMarginRight = "0px",
  textDecorationLine = "none"
}) => {
  return (
    <Text 
      titleColor={titleColor}
      titleWeight={titleWeight}
      titleSize={titleSize}
      titleWeight={titleWeight}
      textDecorationLine={textDecorationLine}
      titleMarginRight={titleMarginRight}
      >
        {titleText}
    </Text>
  );
}

export default Title;