import React from "react";
import styled from "styled-components";
import { Icon } from "react-native-elements";

import Title from "../Title";

const IconTextCont = styled.View`

`

const LineCont = styled.View`
  width: 40px;
  border-radius: 1px;
  height: 1px;
  border-style: dashed;
  border-top-width: 5px;
  border-top-color: gray;
`

const RowCont = styled.View`
  flex-direction: row;
  align-items: center;
`

const ColCont = styled.View`
  margin: 20px;
`

const ProgressCheck = ({
  
}) => {
  return (
    <IconTextCont>
      <RowCont>
        <ColCont>
          <Icon name='checkmark-circle' type='ionicon' color='#FE4370' />
          <Title titleText="Order" titleSize="10px" titleAlign="center"/>
          <Title titleText="Received" titleSize="10px" titleAlign="center"/>
        </ColCont>
        <LineCont />
        <ColCont>
          <Icon name='checkmark-circle' type='ionicon' color='#FE4370' />
          <Title titleText="Drink" titleSize="10px" titleAlign="center" />
          <Title titleText="Sent" titleSize="10px" titleAlign="center" />
        </ColCont>
      </RowCont>
    </IconTextCont>
  )
}

export default ProgressCheck