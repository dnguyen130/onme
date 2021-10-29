import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

import LocationCard from './comps/LocationCard';
import BigButton from './comps/BigButton';
import Input from './comps/Input';
import SmallButton from './comps/SmallButton';
import NavBar from './comps/NavBar';
import Title from './comps/Title';
import TextLink from './comps/TextLink';
import TextDivider from './comps/TextDivider';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <StatusBar style="auto" />
        <LocationCard />
        <NavBar /> */}
      <View style={styles.centerCont}>
        <Title />
        <Input placeholder = "Email"/>
        <Input placeholder = "Password" />
        <LocationCard />

        <TextLink />
        <BigButton />
        <BigButton bgColor = "#BCB5B7" buttonText = "Sign Up"/>
        <TextDivider />
      </View>
      <View style={styles.rowCont}>
        <SmallButton />
        <SmallButton />
      </View>
      <View style={styles.centerCont}>
        <TextLink changeText = "restaurant login" />
      </View>


      </ScrollView>
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
    alignItems: 'center',
  },
  rowCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    paddingLeft: 50,
    paddingRight: 50,
  }
});
