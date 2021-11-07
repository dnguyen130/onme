import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: ${props => props.titleSize};
  font-weight: ${props => props.titleWeight};
  color: ${props => props.titleColor};
`;

const Title = ({
  titleText = "Welcome !",
  titleColor = "#FFF",
  titleWeight = "400",
  titleSize = "36px"
}) => {
  return (
    <Text 
      titleColor={titleColor}
      titleWeight={titleWeight}
      titleSize={titleSize}
      titleWeight={titleWeight}
      >
        {titleText}
    </Text>
  );
}

export default Title;