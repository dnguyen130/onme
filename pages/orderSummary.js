import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import styled from 'styled-components';
import { Divider } from 'react-native-elements';

import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import Title from '../comps/Title';
import TextDivider from '../comps/TextDivider';
import Header from '../comps/Header';
import OrderCard from '../comps/OrderCard';
import NavBar from '../comps/NavBar';
import RoundedButton from '../comps/RoundedButton';
import MessageBox from '../comps/MessageBox';

const OrderList = styled.View`
  flex: 1;
  width: 100%;
`
const TotalCont = styled.View`
  flex-direction: row;
  width: 45%;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
`

const TipCont = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`

const PaddingCont = styled.ScrollView`
  padding: 0 10%;
  width: 100%;
  flex: 1;
  `

const PinkCircleCont = styled.View`
  background-color: #FE4370;
  width: 20px;
  align-items: center;
  border-radius: 50px;
`

export default function OrderSummary({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header subTitle="Order Summary" />
      <Title titleText="Your orders for table C1" />
      <PaddingCont contentContainerStyle={styles.scrollList}>
        <OrderList>
          <OrderCard />
          <Divider color="#a57760" width={2} style={{margin:10, alignSelf:'stretch'}} />
          <OrderCard />
          <Divider color="#a57760" width={2} style={{margin:10, alignSelf:'stretch'}} />
          <OrderCard />
          <Divider color="#a57760" width={2} style={{margin:10, alignSelf:'stretch'}} />
          <OrderCard />
          <Divider color="#a57760" width={2} style={{margin:10, alignSelf:'stretch'}} />
          <OrderCard />
        </OrderList>
        <Divider color="#a57760" width={2} style={{margin:10, alignSelf:'stretch'}} />
        <TotalCont>
          <PinkCircleCont>
            <Title titleText="3" titleSize="14px" />
          </PinkCircleCont>
          <Title titleText="Total:" titleSize="17px" />
          <Title titleText="$27.97" titleSize="17px " />
        </TotalCont>
        <Title titleText="Tip:" titleSize="20px" />
        <TipCont>
          <RoundedButton titleText="15%" />
          <RoundedButton titleText="18%" roundedColor="rgba(0, 0, 0, 0)" roundedBorderWidth="1px" />
          <RoundedButton titleText="20%" roundedColor="rgba(0, 0, 0, 0)" roundedBorderWidth="1px" />
        </TipCont>
        <MessageBox />
        <BigButton buttonText="Proceed to Payment" onPress={() => navigation.navigate('Order Confirmation')} />
      </PaddingCont>
      <NavBar 
        homeOnPress={() => navigation.navigate('Dashboard')}
        midOnPress={() => navigation.navigate('Restaurant Menu Drinks')}
        settingsOnPress={() => navigation.navigate('Settings')}
      />
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
  },

  scrollList: {
    alignItems: 'center'
  }
});