import React from 'react';
import styled from 'styled-components/native';

const Cont = styled.ScrollView`
  width: 80%;
`;

const ListText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 15px;
  font-weight: 700;
`;

const CategoryList = ({
  listOne='All',
  listTwo='Appetizers',
  listThree='Desserts',
  listFour='Seasonal',
  listFive='Trending'
}) => {
  return (
    <Cont horizontal>
      <ListText>{listOne}</ListText>
      <ListText>{listTwo}</ListText>
      <ListText>{listThree}</ListText>
      <ListText>{listFour}</ListText>
      <ListText>{listFive}</ListText>
    </Cont>
  );
}

export default CategoryList;