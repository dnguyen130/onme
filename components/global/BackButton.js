import React from 'react';
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements'

const BackBtnCont = styled.TouchableOpacity`
  align-self: flex-start;
  padding-top: ${props => props.paddingTop};
`;

const BackButton = ({
  paddingTop="0",
  onPress = ()=>{}
}) => {
  return (
    <BackBtnCont onPress={onPress} paddingTop={paddingTop}>
      <Icon 
        name='chevron-back-outline'
        type='ionicon'
        color='#fff'
      />
    </BackBtnCont>
  );
}

export default BackButton;