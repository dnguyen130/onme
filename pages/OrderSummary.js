import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Divider } from 'react-native-elements';
import styled from 'styled-components';

import BigButton from '../components/buttons/BigButton';
import Title from '../components/text/Title';
import Header from '../components/global/Header';
import OrderCard from '../components/cards/OrderCard';
import RoundedButton from '../components/buttons/RoundedButton';
import MessageBox from '../components/summary/MessageBox';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  },

  scrollList: {
    alignItems: 'center'
  }
});

export default function OrderSummary({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header 
        subTitle="Order Summary" 
        onPress={() => navigation.goBack()} 
      />
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
    </View>
    )
}
