import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { StyleSheet, SafeAreaView, View,  Modal, Linking} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

import LocButton from '../components/buttons/LocButton';
import Input from '../components/global/Input';
import Header from '../components/global/Header';
import BottomOverlay from '../components/cards/BottomOverlay';
import Card from '../components/cards/Card'
import { MyImages } from '../components/global/Imglist';

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

const RestaurantWrapper = styled.View`
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  },
  scrollcontainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function RestaurantSelection({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const [restaurants, setRestaurants] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  const GetRestaurants = async() => {
    const result = await axios.get('/restaurant.php');
    setRestaurants(result.data);
  }

  const modalFunction = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Restaurant Menu');
  }

  useFocusEffect(
    React.useCallback(() => {
      GetRestaurants();
    }, [])
  )

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
          <CenterScrollCont contentContainerStyle={styles.scrollcontainer}>
            {
                restaurants.map((o, i) => (
                  <RestaurantWrapper key={i}>
                    <LocButton
                      name={o.name}
                      address={o.address}
                      city={o.city}
                      icon = {MyImages[o.picture]}
                      onPress = {() => {
                        setSelectedId(o.id)
                        setSelectedImage(MyImages[o.picture])
                        setSelectedAddress(o.address)
                        setSelectedTitle(o.name)
                        setModalVisible(!modalVisible)
                      }}
                    />
                  </RestaurantWrapper>
                ))
              }
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
              overlayImg={selectedImage}
              mainTitle={selectedTitle}
              addressTitle={selectedAddress}
            />
        </Modal>
    </View>
  );
}
