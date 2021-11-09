import React from 'react';
import styled from 'styled-components/native';

import { Icon } from 'react-native-elements'

const Cont = styled.View`
  flex-direction: row;
  background-color: #2E2E2E;
  border-width: 3px;
  border-color: rgba(100, 100, 100, 1);
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  min-height: 100px;
  justify-content: space-around;
  align-items: center;
`;

const IconCont = styled.TouchableOpacity`
  align-items: center;
`;

// const Icon = styled.Image`
//   width: 25px;
//   height: 25px;
// `;

const NavBarText = styled.Text`
  color: #fff;
`;

const NavBar = ({
  
}) => {
  return (
    <Cont>
      <IconCont>
        <Icon 
          name='home'
          type='ionicon'
          color='#fff'
        />
        <NavBarText>Home</NavBarText>
      </IconCont>
      <IconCont>
        <Icon 
          name='wine'
          type='ionicon'
          color='#fff'
        />
        <NavBarText>Mid</NavBarText>
      </IconCont>
      <IconCont>
        <Icon 
          name='settings'
          type='ionicon'
          color='#fff'
        />
        <NavBarText>Settings</NavBarText>
      </IconCont>
    </Cont>
  );
}

export default NavBar;