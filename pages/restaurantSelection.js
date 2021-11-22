import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import styled from 'styled-components';

import LocButton from '../components/buttons/LocButton';
import Input from '../components/global/Input';
import NavBar from '../components/global/NavBar';
import Header from '../components/global/Header';

const Cont = styled.View`
  flex: 1;
`;

const CenterScrollCont = styled.ScrollView`
  z-index: -9;
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
          <CenterScrollCont alignItems='center'>
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
          </CenterScrollCont>
        </Cont>
    </View>
  );
}