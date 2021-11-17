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
}) => {
  return (
    <Cont horizontal>
      <ListText>All</ListText>
      <ListText>Appetizers</ListText>
      <ListText>Desserts</ListText>
      <ListText>Seasonal</ListText>
      <ListText>Trending</ListText>
    </Cont>
  );
}

export default CategoryList;