import React from "react";
import styled from "styled-components";
import { Icon } from "react-native-elements";

import Title from "../Title";

const OrderCardCont = styled.View`
  flex-direction: row;
  height: 80px;
  max-width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin: 10px;
`

const OrderCardImage = styled.Image`
  width: 100px;
  height: 80px;
`

const ColumnCont = styled.View`
  flex-direction: column;
`

const EndColumnCont = styled.View`
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  height: 100%;
  justify-content: space-between;
`

const RowCont = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`

const OrderCard = ({
  source=require("../../assets/imgBg.png")
}) => {
  return (
    <OrderCardCont>
      <OrderCardImage source={source} />
      <ColumnCont>
        <Title titleText="Cheese Sticks" titleSize="17px" />
        <Title titleText="$9.99" titleSize="14px" />
      </ColumnCont>
      <EndColumnCont>
        <Icon name="close" type="ionicon" color="white" />
        <RowCont>
          <Icon name="remove-circle" type="ionicon" color="#FE4370" />
          <Title titleText="1" titleSize="18px" />
          <Icon name="add-circle" type="ionicon" color="#FE4370" />
        </RowCont>
      </EndColumnCont>
    </OrderCardCont>
  )
}

export default OrderCard;