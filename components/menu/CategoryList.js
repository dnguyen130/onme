import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

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
    PoppinsRegular: require('../../assets/Poppins-Regular.ttf'),
    PoppinsLight: require('../../assets/Poppins-Light.ttf'),
    PoppinsMedium: require('../../assets/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../../assets/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null;
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