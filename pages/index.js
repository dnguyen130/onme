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
        <View style={styles.centerCont}>
          <View styles={styles.colCont}>
            <Input placeholder = "Email"/>
            <Input placeholder = "Password" />
          </View>

          <TextLink />

          <View>
            <BigButton />
            <BigButton bgColor = "#BCB5B7" buttonText = "Sign Up"/>
          </View>

          <TextDivider />
        </View>

        <View style={styles.rowCont}>
          <SmallButton />
          <SmallButton />
        </View>

        <View style={styles.centerCont}>
          <TextLink changeText = "restaurant login" />
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