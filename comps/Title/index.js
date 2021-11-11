import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: ${props => props.titleSize};
  font-weight: ${props => props.titleWeight};
  color: ${props => props.titleColor};
  margin: ${props => props.titleMargin};
`;

const Title = ({
  titleText = "Welcome !",
  titleColor = "#FFF",
  titleWeight = "400",
  titleSize = "36px",
  titleMargin = "0px"
}) => {
  return (
    <Text 
      titleColor={titleColor}
      titleWeight={titleWeight}
      titleSize={titleSize}
      titleWeight={titleWeight}
      titleMargin={titleMargin}
      >
        {titleText}
    </Text>
  );
}

export default Title;