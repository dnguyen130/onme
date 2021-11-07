import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import styled from 'styled-components';

import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import Title from '../comps/Title';
import TextDivider from '../comps/TextDivider';
import Header from '../comps/Header';

export default function OrderSummary({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header subTitle="Order Summary" />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'flex-start',
    borderColor: 'red',
    // borderWidth: 5,
    // borderStyle: 'solid',
    // flexDirection: 'column'
  }
});