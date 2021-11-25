import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import NavBar from '../components/global/NavBar';
import Title from '../components/text/Title';
import Card from '../components/cards/Card';
import Header from '../components/global/Header';
import MenuCard from '../components/cards/MenuCard';

//back-end
import { getAuth } from 'firebase/auth';

const TitleCont = styled.View`
  flex-direction: row;
  margin: 3%;
  align-items: center;
`;

const RowCont = styled.ScrollView`
  flex-direction: row;
  flex: 1;
  max-height: 25%;
`;

const TitleIcon = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 3%;
`;

const NavBarCont = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  }
});

export default function Dashboard({navigation}) {
  
  const auth = getAuth();
  const user = auth.currentUser;

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header mainTitle="Welcome," subTitle={user.displayName} />
      <TitleCont>
        <TitleIcon source={require('../assets/star.png')} />
        <Title 
          titleSize="20px" 
          titleText="Frequently visited" 
          titleMarginRight="3%"
        />
        <Title 
          titleColor="#FE4370" 
          titleSize="10px" 
          titleText="See All" 
          textDecorationLine="underline"
          titleAlignSelf="center"
          onPress={() => navigation.navigate('Frequently Visited')} 
        />
      </TitleCont>
        <RowCont horizontal>
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          <Card onPress={() => navigation.navigate('Restaurant Selection')} />
        </RowCont>
        <TitleCont>
          <TitleIcon source={require('../assets/clock.png')} />
          <Title 
            titleSize="20px" 
            titleText="Recent items" 
            titleMarginRight="3%" 
          />
          <Title 
            titleColor="#FE4370" 
            titleSize="10px" 
            titleText="See All" 
            textDecorationLine="underline"
            titleAlignSelf="center"
            onPress={() => navigation.navigate('Recent Items')} 
          />
        </TitleCont>
        <RowCont horizontal>
          <MenuCard 
            onPress={() => navigation.navigate('Restaurant Selection')} 
            restaurantText="The Habitat" 
          />
          <MenuCard 
            onPress={() => navigation.navigate('Restaurant Selection')} 
            restaurantText="The Habitat" 
          />
          <MenuCard 
            onPress={() => navigation.navigate('Restaurant Selection')} 
            restaurantText="The Habitat" 
          />
          <MenuCard 
            onPress={() => navigation.navigate('Restaurant Selection')} 
            restaurantText="The Habitat" 
          />
          <MenuCard 
            onPress={() => navigation.navigate('Restaurant Selection')} 
            restaurantText="The Habitat" 
          />
          <MenuCard 
            onPress={() => navigation.navigate('Restaurant Selection')} 
            restaurantText="The Habitat" 
          />
        </RowCont>
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