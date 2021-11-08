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
import OrderCard from '../comps/OrderCard';

const OrderList = styled.View`
  align-items: center;
  flex: 1;
  max-width: 90%;
`

export default function OrderSummary({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header subTitle="Order Summary" />
      <Title titleText="Your orders for table C1" />
      <OrderList>
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </OrderList>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    borderColor: 'red',
    // borderWidth: 5,
    // borderStyle: 'solid',
    // flexDirection: 'column'
  }
});