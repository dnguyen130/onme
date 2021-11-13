import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState }  from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

import Input from '../comps/Input';
import NavBar from '../comps/NavBar';
import Card from '../comps/Card';
import Header from '../comps/Header';
import CategoryList from '../comps/CategoryList';
import Toggle from '../comps/Toggle';
import MenuCard from '../comps/MenuCard';

import styled from 'styled-components/native';

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

export default function RestaurantMenuFood({navigation}) {
  const [toggle, setToggle] = useState(false);

  const setDrink = () => {
    setToggle(true);
  }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header mainTitle="The Habitat" subTitle="3700 Willingdon Ave, Burnaby" subTitleSize="15px" />
        <InputCont>
          <Input textInputPlaceholder="Search" />
        </InputCont>
        <CenterCont>
          <Toggle 
            drinksOnPress={() => navigation.navigate('Restaurant Menu Drinks')} 
            foodOnPress={() => navigation.navigate('Restaurant Menu Food')}
          />
          <CategoryList alignSelf="flex-start"/>
          <RowCont>
            <MenuCard />
            <MenuCard />
          </RowCont>
          <RowCont>
            <MenuCard />
            <MenuCard />
          </RowCont>
        </CenterCont>
      <NavBarCont>
        <NavBar 
          homeOnPress={() => navigation.navigate('Dashboard')}
          midOnPress={() => navigation.navigate('Restaurant Menu Drinks')}
          settingsOnPress={() => navigation.navigate('')}
        />
      </NavBarCont>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  }
});