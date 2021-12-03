import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import styled from 'styled-components';
import { Input } from 'react-native-elements';

import BigButton from '../components/buttons/BigButton';
import Title from '../components/text/Title';
import Header from '../components/global/Header';
import TextDivider from '../components/text/TextDivider';


const TitleCont = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;


const PaddingCont = styled.ScrollView`
  padding: 0 10%;
  width: 100%;
  flex: 1;
`;

const RowCont = styled.View`
  flex-direction: row;
`;

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
        mainTitle="Confirm Order" 
        source={require("../assets/images/header/headerImg_4.png")}
        onPress={() => navigation.goBack()} 
      />
      <TitleCont>
        <Title 
          titleText="Great, that's $27.97" 
          titleSize="20px"
          titleAlignSelf="center"
        />
      </TitleCont>
      <PaddingCont contentContainerStyle={styles.scrollList}>
        <Input
          label="Email"
          value="aliciayien360@gmail.com"
          labelStyle={{color: '#fff', paddingBottom: 3 }}
          inputStyle={{color: '#fff'}} 
          inputContainerStyle={{borderWidth: 2, borderBottomWidth: 2, borderRadius: 10, padding: 3}}
        />
        <Input
          label="Card Information" 
          placeholder='Number'
          value='1234 4567 8900 9876'
          labelStyle={{color: '#fff', paddingBottom: 3 }}
          inputStyle={{color: '#A57760'}} 
          placeholderTextColor='#A57760' 
          inputContainerStyle={{borderWidth: 2, borderBottomWidth: 2, borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 3}}
        />
        <RowCont>
          <Input
            placeholder='MM / YY'
            value='12 / 23'
            labelStyle={{color: '#fff'}}
            inputStyle={{color: '#A57760'}} 
            placeholderTextColor='#A57760' 
            containerStyle={{flex: 1, marginRight: -22}}
            inputContainerStyle={{marginTop: -26, borderWidth: 2, borderBottomWidth: 2, borderBottomLeftRadius: 10, padding: 3}}
          />
          <Input
            placeholder='CVC'
            value='123'
            labelStyle={{color: '#fff'}}
            inputStyle={{color: '#A57760'}} 
            placeholderTextColor='#A57760' 
            containerStyle={{flex: 1}}
            inputContainerStyle={{marginTop: -26, borderWidth: 2, borderBottomWidth: 2, borderBottomRightRadius: 10, padding: 3}}
          />
        </RowCont>
        <Input
          label="Country or Region" 
          placeholder='Country'
          value='Canada'
          labelStyle={{color: '#fff', paddingBottom: 3 }}
          inputStyle={{color: '#A57760'}} 
          placeholderTextColor='#A57760' 
          inputContainerStyle={{borderWidth: 2, borderBottomWidth: 2, borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 3}}
        />
        <Input
          placeholder='Postal or Zip Code'
          value='V1X 7S1'
          labelStyle={{color: '#fff'}}
          inputStyle={{color: '#A57760'}} 
          placeholderTextColor='#A57760' 
          inputContainerStyle={{marginTop: -26, borderWidth: 2, borderBottomWidth: 2,borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 3}}
        />
        <BigButton width="60% "buttonText="Pay Now" onPress={() => navigation.navigate('Order Confirmation')} />
      </PaddingCont>
    </View>
    )
}