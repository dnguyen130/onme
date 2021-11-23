import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Modal } from 'react-native';
import styled from 'styled-components';

import Input from '../components/global/Input';
import Header from '../components/global/Header';
import CategoryList from '../components/menu/CategoryList';
import Toggle from '../components/menu/Toggle';
import MenuCard from '../components/cards/MenuCard';

const Cont = styled.View`
  flex: 1;
`;

const CenterCont = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 3%;
`;

const CenterScrollCont = styled.ScrollView`
  z-index: -9;
`;

const InputCont = styled.View`
  top: -6%;
  margin-left: 5%;
  margin-right: 5%;
`;

const RowCont = styled.View`
  flex: 1;  
  flex-direction: row;
  padding: 10px;
`;

const ModalCont = styled.View`
  top: 79%;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  height: 80px;
  border-radius: 30px;
  background-color: #A57760;
`;

const ModalText = styled.Text`

`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  }
});

export default function RestaurantSelection({navigation}) {
  const [toggle, setToggle] = useState(false);

  const DrinksOn = () => {
    setToggle(false);
  }

  const FoodOn = () => {
    setToggle(true);
  }

  const [modalVisible, setModalVisible] = useState(false);

  setTimeout(() => {
    setModalVisible(false);
  }, 3000);
  
  if (toggle === false) {
    return (
      <View style={styles.container}>
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
            <CenterCont>
              <Toggle
                drinksOnPress={DrinksOn}
                foodOnPress={FoodOn}
              />
            </CenterCont>
            <CenterCont>
              <CategoryList 
              alignSelf="flex-start"
              listTwo='Cocktails'
              listThree='Shooters'
              listFour='Mocktails'/>
            </CenterCont>
            <CenterScrollCont alignItems='center'>
              <RowCont>
                <MenuCard 
                  // onPress={() => navigation.navigate('Seat Map')}
                  addOnPress={() => setModalVisible(!modalVisible)}
                  itemText='Ravioli Martini'
                  priceText='$5.99'
                />
                <MenuCard 
                  onPress={() => navigation.navigate('Seat Map')} 
                  addOnPress={() => navigation.navigate('Seat Map')} 
                  itemText='Moscow Mule'
                  priceText='$5.99'
                  cardImg = {require('../assets/drink_2.png')}
                />
              </RowCont>
              <RowCont>
                <MenuCard 
                  onPress={() => navigation.navigate('Seat Map')} 
                  addOnPress={() => navigation.navigate('Seat Map')} 
                  itemText='Purple Goddess'
                  priceText='$5.99'
                  cardImg = {require('../assets/drink_3.png')}
                />
              </RowCont>
            </CenterScrollCont>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <ModalCont>
                <ModalText>
                  (Item Name Here) has been added to your cart  
                </ModalText>
              </ModalCont>
            </Modal>
          </Cont>
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
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
            <CenterCont>
              <Toggle
                drinksOnPress={DrinksOn}
                foodOnPress={FoodOn}
              />
            </CenterCont>
            <CenterCont>
              <CategoryList alignSelf="flex-start" />
            </CenterCont>
            <CenterScrollCont alignItems='center'>
              <RowCont>
                <MenuCard 
                  onPress={() => navigation.navigate('Seat Map')}
                  addOnPress={() => navigation.navigate('Seat Map')} 
                  itemText='Zesty Calimari'
                  priceText='$9.99'
                  cardImg = {require('../assets/food_2.png')}
                />
                <MenuCard 
                  onPress={() => navigation.navigate('Seat Map')}
                  addOnPress={() => navigation.navigate('Seat Map')} 
                  itemText='Cheese Sticks'
                  priceText='$9.99'
                  cardImg = {require('../assets/food_1.png')}
                />
               </RowCont>
               <RowCont>
                <MenuCard 
                  onPress={() => navigation.navigate('Seat Map')}
                  addOnPress={() => navigation.navigate('Seat Map')} 
                  itemText='Dry Ribs'
                  priceText='$9.99'
                  cardImg = {require('../assets/food_3.png')}
                />
                <MenuCard 
                  onPress={() => navigation.navigate('Seat Map')}
                  addOnPress={() => navigation.navigate('Seat Map')} 
                  itemText='Winner C'
                  priceText='$9.99'
                  cardImg = {require('../assets/food_4.png')}
                />
               </RowCont>
            </CenterScrollCont>
          </Cont>
      </View>
    );
  }
}