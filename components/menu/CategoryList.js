import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Cont = styled.ScrollView`
  width: 80%;
`;

const ListText = styled.Text`
  font-size: 15px;
  color: ${props => props.textColor};
  margin-left: 15px;
  font-weight: 700;
  font-family: ${props => props.poppinsFont};
`;

const CategoryList = ({
  listOne='All',
  listTwo='Appetizers',
  listThree='Desserts',
  listFour='Seasonal',
  listFive='Trending',
  poppinsFont="PoppinsMedium",
  textColor="#fff"
}) => {
  const [loaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null
  }
  return (
    <Cont horizontal>
      <ListText poppinsFont={poppinsFont} textColor={textColor}>{listOne}</ListText>
      <ListText poppinsFont={poppinsFont} textColor='#A57760'>{listTwo}</ListText>
      <ListText poppinsFont={poppinsFont} textColor={textColor}>{listThree}</ListText>
      <ListText poppinsFont={poppinsFont} textColor={textColor}>{listFour}</ListText>
      <ListText poppinsFont={poppinsFont} textColor={textColor}>{listFive}</ListText>
    </Cont>
  );
}

export default CategoryList;