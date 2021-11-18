import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.TouchableOpacity`
  flex-direction: row;
  border-width: 3px;
  border-color: rgba(165, 119, 96, 0.5);
  border-radius: 20px;
  padding: 10px;
  width: 80%;
  min-height: 79px;
  margin-bottom: 4%;
  background-color: #2E2E2E;
  box-shadow: 0px 3px 3px #000;
`;

const TextCont = styled.View`
  justify-content: center;
  padding-left: 5%;
`;

const LocCont = styled.View`
  padding-left: 5%;
  padding-right: 5%;
`;

const NameCont = styled.View`
  flex-direction: row;
`;

const IconCont = styled.View`
  flex-direction: row;
  margin-left: 35%;
`;

const Name = styled.Text`
  font-size: 15px;
  color: #fff;
`;

const City = styled.Text`
  font-size: 12px;
  color: #fff;

`;

const Address = styled.Text`
  font-size: 10px;
  color: #fff;
`;

const LocIcon = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 30px;
`;

const SmallIcon = styled.Image`
  width: 13px;
  height: 13px;
  margin-left: 5px;
`;

const LocButton = ({
  icon = require('../../assets/resImg.png'),
  name = "The Habitat",
  city = "Burnaby",
  address = "3700 Willingdon Ave",
  onPress = ()=>{}
}) => {
  return (
    <Cont onPress={onPress}>
      <LocCont>
        <LocIcon source={icon} />
      </LocCont>
      <TextCont>
        <NameCont>
          <Name>{name}</Name>
          <IconCont>
            <SmallIcon source={require('../../assets/forkKnife.png')} />
            <SmallIcon source={require('../../assets/wineGlass.png')} />
          </IconCont>
        </NameCont>
        <City>{city}</City>
        <Address>{address}</Address>
      </TextCont>
    </Cont>
  );
}

export default LocButton;