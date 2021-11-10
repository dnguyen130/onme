import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, ImageBackground} from 'react-native';

import LocationCard from '../comps/LocationCard';
import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import NavBar from '../comps/NavBar';
import Title from '../comps/Title';
import TextLink from '../comps/TextLink';
import TextDivider from '../comps/TextDivider';
import Card from '../comps/Card'
import styled from 'styled-components';
import Header from '../comps/Header';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header mainTitle="Welcome," subTitle="Min" />
      <View style={styles.centerCont}>
        <Title titleSize="20px" titleText="Frequently visited" />
        <View style={styles.rowCont}>
          <Card />
          <Card />
        </View>
        <Title titleSize="20px" titleText="Recent items" />
        <View style={styles.rowCont}>
          <Card />
          <Card />
        </View>
      </View>
    <View style={styles.navBarCont}>
      <NavBar />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  },
  centerCont: {
    alignItems: 'center'
  },
  rowCont: {
    flexDirection: 'row',
  },
  colCont: {
    justifyContent: 'space-evenly',
  },
  navBarCont: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  }
});