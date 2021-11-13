import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, ImageBackground} from 'react-native';

import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import Card from '../comps/Card'
import Header from '../comps/Header';
import MenuCard from '../comps/MenuCard';

import styled from 'styled-components/native';

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

export default function Dashboard({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header mainTitle="Welcome," subTitle="Min" />
      {/* <CenterCont> */}
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
      {/* </CenterCont> */}
    <NavBarCont>
      <NavBar />
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