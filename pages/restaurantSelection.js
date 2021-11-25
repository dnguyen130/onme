import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableWithoutFeedback, Modal, Alert } from 'react-native';
import styled from 'styled-components/native';

import LocButton from '../components/buttons/LocButton';
import Input from '../components/global/Input';
import Header from '../components/global/Header';
import BottomOverlay from '../components/cards/BottomOverlay';

const Cont = styled.View`
  flex: 1;
`;

const ModalPressable = styled.Pressable`
  flex: 1;
`;

const CenterScrollCont = styled.ScrollView`
  z-index: -9;
`;

const InputCont = styled.View`
  align-items: center;
  top: -6%;
  margin-left: 5%;
  margin-right: 5%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  }
});

export default function RestaurantSelection({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.container, modalVisible ? {opacity: 0.4} : '']}>
        <StatusBar style="light" />
        <Header 
          mainTitle="The Habitat" 
          subTitle="3700 Willingdon Ave, Burnaby" 
          subTitleSize="15px" 
          source={require("../assets/headerImg_2.png")} 
          onPress={() => navigation.goBack()} 
        />
        <Cont>
          <InputCont>
            <Input textInputPlaceholder="Search" textAlign="center" />
          </InputCont>
          <CenterScrollCont alignItems='center'>
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
            <LocButton onPress={() => navigation.navigate('Restaurant Menu')} />
          </CenterScrollCont>
        </Cont>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <ModalPressable onPress={()=> setModalVisible(!modalVisible)} />
            <BottomOverlay 
              send={()=> navigation.navigate('Restaurant Menu')}
            />
        </Modal>
    </View>
  );
}