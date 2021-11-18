import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import styled from 'styled-components';

import Input from '../components/global/Input';
import NavBar from '../components/global/NavBar';
import Header from '../components/global/Header';
import CategoryList from '../components/menu/CategoryList';
import Toggle from '../components/menu/Toggle';
import MenuCard from '../components/cards/MenuCard';

const Cont = styled.View`
  flex: 1;
  top: -4%;
  padding-bottom: 17%;
`;

const CenterCont = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  padding-bottom: 3%;
`;

const CenterScrollCont = styled.ScrollView`
  z-index: -9;
`;

const NavBarCont = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const InputCont = styled.View`
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 3%;
`;

const RowCont = styled.View`
  flex: 1;  
  flex-direction: row;
  padding: 10px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  }
});

export default function RestaurantSelection({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Header 
          mainTitle="The Habitat" 
          subTitle="3700 Willingdon Ave, Burnaby" 
          subTitleSize="15px"
          source={require("../assets/headerImg_2.png")} 
          onPress={() => navigation.goBack()} 
        />
        <Cont>
          <InputCont>
            <Input textInputPlaceholder="Search" textAlign="center" />
          </InputCont>
          <CenterCont>
            <Toggle 
              drinksOnPress={() => navigation.navigate('Restaurant Menu Drinks')} 
              foodOnPress={() => navigation.navigate('Restaurant Menu Food')}
              drinksColor='#A57760'
              foodColor='#838383'
            />
          </CenterCont>
          <CenterCont>
            <CategoryList alignSelf="flex-start"/>
          </CenterCont>
          <CenterScrollCont alignItems='center'>
            <RowCont>
              <MenuCard 
                onPress={() => navigation.navigate('Seat Map')}
                addOnPress={() => navigation.navigate('Seat Map')} 
                itemText='Ravioli Martini'
                priceText='$5.99'
              />
              <MenuCard 
                onPress={() => navigation.navigate('Seat Map')} 
                addOnPress={() => navigation.navigate('Seat Map')} 
                itemText='Moscow Mule'
                priceText='$5.99'
                cardImg = {require('../assets/drink_2.png')}
              />
             </RowCont>
             <RowCont>
              <MenuCard 
                onPress={() => navigation.navigate('Seat Map')} 
                addOnPress={() => navigation.navigate('Seat Map')} 
                itemText='Purple Goddess'
                priceText='$5.99'
                cardImg = {require('../assets/drink_3.png')}
              />
             </RowCont>
          </CenterScrollCont>
        </Cont>
      <NavBarCont>
        <NavBar 
          homeOnPress={() => navigation.navigate('Dashboard')}
          midOnPress={() => navigation.navigate('Restaurant Menu Drinks')}
          settingsOnPress={() => navigation.navigate('Settings')}
        />
      </NavBarCont>
    </View>
  );
}