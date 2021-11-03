import React from 'react';
import styled from 'styled-components/native';

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

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

const NavBarText = styled.Text`
  color: #fff;
`;

const NavBar = ({
  icon = "https://reactnative.dev/img/tiny_logo.png",
}) => {
  return (
    <Cont>
      <IconCont>
        <Icon source={{uri:icon}}/>
        <NavBarText>Home</NavBarText>
      </IconCont>
      <IconCont>
        <Icon source={{uri:icon}}/>
        <NavBarText>Mid</NavBarText>
      </IconCont>
      <IconCont>
        <Icon source={{uri:icon}}/>
        <NavBarText>Settings</NavBarText>
      </IconCont>
    </Cont>
  );
}

export default NavBar;