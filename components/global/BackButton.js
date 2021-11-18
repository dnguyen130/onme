import React from 'react';
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements'

const BackBtnCont = styled.TouchableOpacity`
  align-self: flex-start;
`;

const BackButton = ({
  
}) => {
  return (
    <BackBtnCont onPress={() => console.log('back btn clicked')}>
      <Icon 
        name='chevron-back-outline'
        type='ionicon'
        color='#fff'
      />
    </BackBtnCont>
  );
}

export default BackButton;