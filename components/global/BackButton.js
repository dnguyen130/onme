import React from 'react';
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements'

const BackBtnCont = styled.TouchableOpacity`
  align-self: flex-start;
  padding-top: ${props => props.paddingTop};
  display: ${props => props.display};
`;

const BackButton = ({
  paddingTop="0",
  display='flex',
  onPress = ()=>{}
}) => {
  return (
    <BackBtnCont onPress={onPress} paddingTop={paddingTop} display={display}>
      <Icon 
        name='chevron-back-outline'
        type='ionicon'
        color='#fff'
      />
    </BackBtnCont>
  );
}

export default BackButton;