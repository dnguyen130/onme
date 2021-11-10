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
import styled from 'styled-components/native';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <ImageBackground source={require("../assets/imgBg.png")} resizeMode="cover" style={styles.imgBg}>
          <View>
            <Title titleText="Welcome," />
            <Title titleText="Min" />
          </View>
          <View style={styles.centerCont}>
            <Input textInputPlaceholder="Search" />
          </View>
        </ImageBackground>
        <View style={styles.centerCont}>
          <Title titleSize="20px" titleText="Frequently visited" />
          <View style={styles.rowCont}>
            <Card onPress={() => navigation.navigate('Restaurant Selection')} />
            <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          </View>
          <Title titleSize="20px" titleText="Recent items" />
          <View style={styles.rowCont}>
            <Card onPress={() => navigation.navigate('Restaurant Selection')} />
            <Card onPress={() => navigation.navigate('Restaurant Selection')} />
          </View>
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
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCont: {
    alignItems: 'center'
  },
  rowCont: {
    flexDirection: 'row',
  },
  navBarCont: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  imgBg: {
    flex: 1,
    justifyContent: 'center',
    width: 438,
    height: '90%',
    padding: '10%'
  }
});