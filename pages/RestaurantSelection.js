import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View,  Modal, Linking} from 'react-native';
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

  const modalFunction = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Restaurant Menu');
  }

  const Habitat = () => {
    Linking.openURL('http://maps.google.com/?q=49.251539,-123.0039377');
    // http://maps.google.com/?q=49.251539,-123.0039377
  }
  return (
    <View style={[styles.container, modalVisible ? {opacity: 0.4} : '']}>
        <StatusBar style="light" />
        <Header 
          mainTitle="Where would you like to go?"
          source={require("../assets/images/header/headerImg_2.png")} 
          onPress={() => navigation.goBack()} 
        />
        <Cont>
          <InputCont>
            <Input textInputPlaceholder="Search" textAlign="center" />
          </InputCont>
          <CenterScrollCont alignItems='center'>
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
            <LocButton onPress={() => setModalVisible(!modalVisible)} />
          </CenterScrollCont>
        </Cont>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <ModalPressable onPress={()=> setModalVisible(!modalVisible)} />
            <BottomOverlay 
              send={modalFunction}
              directions={Habitat}
            />
        </Modal>
    </View>
  );
}
