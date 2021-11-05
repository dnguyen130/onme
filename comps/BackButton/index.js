import React from 'react';
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements'

const BackBtnCont = styled.TouchableOpacity`
  
`;

const BackButton = ({
  
}) => {
  return (
    <BackBtnCont onPress={() => console.log('back btn clicked')}>
      <Icon 
        name='chevron-back-outline'
        type='ionicon'
        color='#517fa4'
      />
    </BackBtnCont>
  );
}

export default BackButton;