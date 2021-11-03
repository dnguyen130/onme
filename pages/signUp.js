import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

import LocationCard from '../comps/LocationCard';
import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import TextLink from '../comps/TextLink';
import TextDivider from '../comps/TextDivider';
import styled from 'styled-components';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Title />
        <Title />
        <View style={styles.centerCont}>
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <BigButton />
          <TextDivider />
          <SmallButton />
          <SmallButton />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCont: {
    alignItems: 'center'
  },
  rowCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  colCont: {
    justifyContent: 'space-evenly',
  }
});