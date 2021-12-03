import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import styled from 'styled-components';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Input from '../components/global/Input';
import Header from '../components/global/Header';
import Title from '../components/text/Title';
import BigButton from '../components/buttons/BigButton';


const ScrollCont = styled.View`
  flex: 1;
`;

const CenterScrollCont = styled.ScrollView`
  flex: 1;
  z-index: -9;
`;

const InputCont = styled.View`
  top: -4%;
  margin-left: 5%;
  margin-right: 5%;
`;

const RowCont = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5%;
`;

const SeatLegendRowCont = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 5%;
`;

const SeatLegend = styled.View`
  width: 20%;
  height: 42px;
  background-color: #A57760;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 10%;
`;

const SeatLegendEmpty = styled.View`
  width: 20%;
  height: 42px;
  border-color: #626262;
  border-width: 2px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 5%;
`;

const SeatMapCont = styled.View`
  width: 100%;
`;

const SeatRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10%;
`;

const Seats = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #A57760;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Text = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  font-family: "PoppinsRegular";
`;

const BtnCont = styled.View`
  position: relative;
  align-items: flex-end;
  justify-content: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  }

});

export default function SeatMap({
  navigation
}) {
  const [loaded] = useFonts({
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf')
  });

  const [selected, setSelected] = useState(false);

  if (!loaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Header 
          mainTitle="The Habitat" 
          subTitle="Who caught your eye?" 
          subWeight="700"
          subTitleSize="24px"
          source={require("../assets/images/header/headerImg_3.png")} 
          onPress={() => navigation.navigate('Restaurant Menu')} 
        />
        {/* <InputCont>
          <Input textInputPlaceholder="Search" textAlign="center" />
        </InputCont> */}
        <ScrollCont>
          <RowCont>
            <Title 
              titleText="What's their"
              titleWeight="700"
              titleSize="20px"
              />
            <Title 
              titleText=" seat number?"
              titleWeight="700"
              titleSize="20px"
              titleColor="#A57760"
              />
          </RowCont>
          <SeatLegendRowCont>
            <SeatLegendEmpty>
              <Text>Empty</Text>
            </SeatLegendEmpty>
            <SeatLegend>
              <Text>Occupied</Text>
            </SeatLegend>
          </SeatLegendRowCont>
          <CenterScrollCont>
            <SeatMapCont>
              <SeatRow>
                <Seats>
                  <Text>01</Text>
                </Seats>
                <Seats>
                  <Text>02</Text>
                </Seats>
                <Seats>
                  <Text>03</Text>
                </Seats>
              </SeatRow>
              <SeatRow>
                <Seats>
                  <Text>04</Text>
                </Seats>
                <Seats>
                  <Text>05</Text>
                </Seats>
                <Seats>
                  <Text>06</Text>
                </Seats>
              </SeatRow>
              <SeatRow>
                <Seats>
                  <Text>07</Text>
                </Seats>
                <Seats 
                style={[selected ? {backgroundColor: '#FE4370'} : {backgroundColor: '#A57760'}]}
                onPress={()=>{setSelected(!selected)}}>
                  <Text>08</Text>
                </Seats>
                <Seats>
                  <Text>09</Text>
                </Seats>
              </SeatRow>
              <SeatRow>
                <Seats>
                  <Text>10</Text>
                </Seats>
                <Seats>
                  <Text>11</Text>
                </Seats>
                <Seats>
                  <Text>12</Text>
                </Seats>
              </SeatRow>
              <SeatRow>
                <Seats>
                  <Text>13</Text>
                </Seats>
                <Seats>
                  <Text>14</Text>
                </Seats>
                <Seats>
                  <Text>15</Text>
                </Seats>
              </SeatRow>
              <SeatRow>
                <Seats>
                  <Text>16</Text>
                </Seats>
                <Seats>
                  <Text>17</Text>
                </Seats>
                <Seats>
                  <Text>18</Text>
                </Seats>
              </SeatRow>
            </SeatMapCont>
          </CenterScrollCont>
            <BtnCont>
          <BigButton width='50%' buttonText='Order Summary' onPress={() => navigation.navigate('Order Summary')} />
        </BtnCont>
        </ScrollCont>
    </View>
  );
}
