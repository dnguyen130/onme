import React from 'react';
import styled from 'styled-components/native';

const CardCont = styled.View`
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 179px;
  border-radius: 15px;
  background-color: #FE4370;
`;

const Name = styled.Text`

`;

const Address = styled.Text`

`;

const Card = ({
  
}) => {
  return (
    <CardCont>
      <Name>Earl's</Name>
      <Address>4700 Kingsway</Address>
    </CardCont>
  );
}

export default Card;