import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';

import NavBar from '../components/global/NavBar';
import Title from '../components/text/Title';
import Card from '../components/cards/Card';
import Header from '../components/global/Header';
import MenuCard from '../components/cards/MenuCard';
import Input from '../components/global/Input';

const ScrollView = styled.ScrollView`
  
`;

const Cont = styled.View`
  flex: 1;
  top: -4%;
  margin-bottom: 20%;
`;

const TitleCont = styled.View`
  flex-direction: row;
  margin: 3%;
  align-items: center;
`;

const RowCont = styled.ScrollView`
  flex-direction: row;
  flex: 1;
`;

const InputCont = styled.View`
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
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
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Header 
        mainTitle="Welcome," 
        subTitle="Min" 
        onPress={() => navigation.goBack()} />
      <Cont>
        <InputCont>
          <Input textInputPlaceholder="Search" textAlign="center" />
        </InputCont>
        <ScrollView>
          <TitleCont>
            <Icon 
              name='star'
              type='material'
              color='#FE4370'
              size={20}
              containerStyle={{marginRight: '3%'}}
            />
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
              <Icon 
                name='watch-later'
                type='material'
                color='#FE4370'
                size={20}
                containerStyle={{marginRight: '3%'}}
              />
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
                addOnPress={() => navigation.navigate('Order Summary')} 
                restaurantText="The Habitat" 
              />
              <MenuCard 
                onPress={() => navigation.navigate('Restaurant Selection')} 
                addOnPress={() => navigation.navigate('Order Summary')} 
                restaurantText="The Habitat" 
              />
              <MenuCard 
                onPress={() => navigation.navigate('Restaurant Selection')} 
                addOnPress={() => navigation.navigate('Order Summary')} 
                restaurantText="The Habitat" 
              />
              <MenuCard 
                onPress={() => navigation.navigate('Restaurant Selection')} 
                addOnPress={() => navigation.navigate('Order Summary')} 
                restaurantText="The Habitat" 
              />
              <MenuCard 
                onPress={() => navigation.navigate('Restaurant Selection')} 
                addOnPress={() => navigation.navigate('Order Summary')} 
                restaurantText="The Habitat" 
              />
              <MenuCard 
                onPress={() => navigation.navigate('Restaurant Selection')} 
                addOnPress={() => navigation.navigate('Order Summary')} 
                restaurantText="The Habitat" 
              />
            </RowCont>
          </ScrollView>
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