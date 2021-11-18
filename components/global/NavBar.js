import React from 'react';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';

const Cont = styled.View`
  flex-direction: row;
  background-color: #2E2E2E;
  border-top-width: 2px;
  border-left-width: 0.5px;
  border-right-width: 0.5px;
  border-color: rgba(100, 100, 100, 1);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;
  width: 100%;
  min-height: 100px;
  justify-content: space-around;
  align-items: center;
`;

const IconCont = styled.TouchableOpacity`
  align-items: center;
`;

const MidIcon = styled.Image`
  width: 65px;
  height: 65px;
`;

const NavBarText = styled.Text`
  color: #fff;
`;

const NavBar = ({
  homeOnPress = ()=>{},
  midOnPress = ()=>{},
  settingsOnPress = ()=>{},
}) => {
  return (
    <Cont>
      <IconCont onPress={homeOnPress}>
        <Icon 
          name='home'
          type='ionicon'
          color='#fff'
        />
        <NavBarText>Home</NavBarText>
      </IconCont>
      <IconCont onPress={midOnPress}>
        <MidIcon source={require('../../assets/midIcon.png')}/>
      </IconCont>
      <IconCont onPress={settingsOnPress}>
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