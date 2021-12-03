import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Modal } from 'react-native';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
import AppLoading from 'expo-app-loading';

import Title from '../components/text/Title';
import Card from '../components/cards/Card';
import Header from '../components/global/Header';
import MenuCard from '../components/cards/MenuCard';
import Input from '../components/global/Input';
import BottomOverlay from '../components/cards/BottomOverlay';

import axios from 'axios';

import { MyImages } from '../components/global/Imglist';

const ScrollView = styled.ScrollView`
  margin-left: 3%;
`;

const Cont = styled.View`
  flex: 1;
`;

//back-end
import { getAuth } from 'firebase/auth';
import { useFocusEffect } from '@react-navigation/native';

const TitleCont = styled.View`
  flex-direction: row;
  margin: 3%;
  align-items: center;
`;

const RowCont = styled.ScrollView`
  flex-direction: row;
  flex: 1;
  margin: 3% 0 3% 0;
`;

const InputCont = styled.View`
  align-items: center;
  top: -4%;
  margin-left: 5%;
  margin-right: 5%;
`;

const RestaurantWrapper = styled.View`
`

const ModalPressable = styled.Pressable`
  flex: 1;
`;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  }
});

export default function Dashboard({navigation}) {
  
  const auth = getAuth();
  const user = auth.currentUser;

  const [restaurants, setRestaurants] = useState([]);
  const [items, setItems] = useState([]);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  const GetRestaurants = async() => {
    const result = await axios.get('/restaurant.php');
    setRestaurants(result.data);
  }

  const GetItems = async() => {
    const result = await axios.get('/item.php');
    setItems(result.data);
  }

  const [modalVisible, setModalVisible] = useState(false);

  const modalFunction = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Restaurant Menu', {restaurantId: selectedId});
  }

  const Habitat = () => {
    WebBrowser.openBrowserAsync('http://maps.google.com/?q=49.251539,-123.0039377');
    // http://maps.google.com/?q=49.251539,-123.0039377
  }


  useFocusEffect(
    React.useCallback(() => {
      GetRestaurants();
      GetItems();
    }, [])
  )

  return (
    <View style={[styles.container, modalVisible ? {opacity: 0.4} : '']}>
        <StatusBar style="light" />
        <Header 
        mainTitle="Welcome," 
        subTitle={user.displayName} 
        onPress={() => navigation.goBack()} />
        <InputCont>
          <Input textInputPlaceholder="Search" textAlign="center" />
        </InputCont>
      <Cont>
        <ScrollView>
          <TitleCont>
            <Icon 
              name='star'
              type='material'
              color='#FE4370'
              size={20}
              containerStyle={{marginRight: '3%'}}
            />
            <Title 
              titleSize="20px" 
              titleText="Frequently visited" 
              titleMarginRight="3%"
              poppinsFont="PoppinsMedium"
            />
            <Title 
              titleColor="#FE4370" 
              titleSize="10px" 
              titleText="See All" 
              textDecorationLine="underline"
              titleAlignSelf="center"
              onPress={() => navigation.navigate('Frequently Visited')} 
              poppinsFont="PoppinsLight"
            />
          </TitleCont>
            <RowCont horizontal>
              {
                restaurants.map((o, i) => (
                  <RestaurantWrapper key={i}>
                    <Card
                      restaurantName={o.name}
                      restaurantAddress={o.address}
                      cardImg = {MyImages[o.picture]}
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
            </RowCont>
            <TitleCont>
              <Icon 
                name='watch-later'
                type='material'
                color='#FE4370'
                size={20}
                containerStyle={{marginRight: '3%'}}
              />
              <Title 
                titleSize="20px" 
                titleText="Recent items" 
                titleMarginRight="3%" 
                poppinsFont="PoppinsMedium"
              />
              <Title 
                titleColor="#FE4370" 
                titleSize="10px" 
                titleText="See All" 
                textDecorationLine="underline"
                titleAlignSelf="center"
                onPress={() => navigation.navigate('Recent Items')}
                poppinsFont="PoppinsLight"
              />
            </TitleCont>
            <RowCont horizontal>
              {
                items.map((o, i) => (
                  <RestaurantWrapper key={i}>
                    <MenuCard
                      itemText={o.i_name}
                      priceText={o.price}
                      cardImg = {MyImages[o.picture]}
                    />
                  </RestaurantWrapper>
                ))
              }
              {/* <MenuCard 
                onPress={() => navigation.navigate('Restaurant Selection')} 
                addOnPress={() => navigation.navigate('Order Summary')} 
                restaurantText="The Habitat" 
              /> */}
            </RowCont>
          </ScrollView>
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
