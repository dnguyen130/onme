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
  margin-left: 3%;
`;

const Cont = styled.View`
  flex: 1;
  /* border-width: 1px; */
`;

const TitleCont = styled.View`
  flex-direction: row;
  margin: 3%;
  align-items: center;
`;

const RowCont = styled.ScrollView`
  flex-direction: row;
  flex: 1;
  margin: 3% 0 3% 0;
`;

const InputCont = styled.View`
  align-items: center;
  top: -4%;
  margin-left: 5%;
  margin-right: 5%;
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
        <InputCont>
          <Input textInputPlaceholder="Search" textAlign="center" />
        </InputCont>
      <Cont>
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
    </View>
  );
}