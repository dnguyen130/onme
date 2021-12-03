import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Cont = styled.ScrollView`
  width: 80%;
`;

const ListText = styled.Text`
  font-size: 15px;
  color: #fff;
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
  poppinsFont="PoppinsMedium"
}) => {
  const [loaded] = useFonts({
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return <AppLoading />
  }
  return (
    <Cont horizontal>
      <ListText poppinsFont={poppinsFont}>{listOne}</ListText>
      <ListText poppinsFont={poppinsFont}>{listTwo}</ListText>
      <ListText poppinsFont={poppinsFont}>{listThree}</ListText>
      <ListText poppinsFont={poppinsFont}>{listFour}</ListText>
      <ListText poppinsFont={poppinsFont}>{listFive}</ListText>
    </Cont>
  );
}

export default CategoryList;