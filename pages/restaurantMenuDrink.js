import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import Input from '../components/global/Input';
import NavBar from '../components/global/NavBar';
import Header from '../components/global/Header';
import CategoryList from '../components/menu/CategoryList';
import Toggle from '../components/menu/Toggle';
import MenuCard from '../components/cards/MenuCard';

const CenterCont = styled.View`
  align-items: center;
`;

const RowCont = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const NavBarCont = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const InputCont = styled.View`
  padding-bottom: 5%;
  top: -4%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  }
});

export default function RestaurantMenuDrink({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header mainTitle="The Habitat" subTitle="3700 Willingdon Ave, Burnaby" subTitleSize="15px" />
        <InputCont>
          <Input textInputPlaceholder="Search" />
        </InputCont>
        <CenterCont>
          <Toggle drinksOnPress={() => navigation.navigate('Restaurant Menu Drinks')} foodOnPress={() => navigation.navigate('Restaurant Menu Food')} />
          <CategoryList alignSelf="flex-start"/>
          <RowCont>
            <MenuCard onPress={() => navigation.navigate('Order Summary')} />
            <MenuCard onPress={() => navigation.navigate('Order Summary')} />
          </RowCont>
          <RowCont>
          <MenuCard onPress={() => navigation.navigate('Order Summary')} />
            <MenuCard onPress={() => navigation.navigate('Order Summary')} />
          </RowCont>
        </CenterCont>
      <NavBarCont>
        <NavBar 
          homeOnPress={() => navigation.navigate('Dashboard')}
          midOnPress={() => navigation.navigate('Restaurant Menu Drinks')}
          settingsOnPress={() => navigation.navigate('Settings')}
        />
      </NavBarCont>
    </SafeAreaView>
  );
}