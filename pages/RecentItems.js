import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

import LocButton from '../components/buttons/LocButton';
import Input from '../components/global/Input';
import Header from '../components/global/Header';

const ScrollCont = styled.View`
  flex: 1;
`;

const CenterScrollCont = styled.ScrollView`
  flex: 1;
  z-index: -9;
`;

const InputCont = styled.View`
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

export default function RecentItems({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Header 
          mainTitle="Recent Items" 
          iconTitleName='history'
          iconTitleType='material'
          iconTitleColor='#FE4370'
          onPress={() => navigation.goBack()} 
        />
        {/* <InputCont>
          <Input textInputPlaceholder="Search" textAlign="center" />
        </InputCont> */}
        <ScrollCont>
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
        </ScrollCont>
    </View>
  );
}
