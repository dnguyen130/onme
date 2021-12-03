import React from "react";
import styled from "styled-components";
import { Icon } from "react-native-elements";

import Title from "../text/Title";

const IconTextCont = styled.View`

`

const LineCont = styled.View`
  width: 50px;
  height: 1px;
  border-width: 1px;
  border-style: dashed;
  border-color: #fff;
`

const RowCont = styled.View`
  flex-direction: row;
  align-items: center;
`

const ColCont = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  width: 50px;
`

const ProgressCheck = ({
  
}) => {
  return (
    <IconTextCont>
      <RowCont>
        <ColCont>
          <Icon name='checkmark-circle' type='ionicon' color='#FE4370' />
          <Title titleText="Order" titleSize="10px" titleAlignSelf="center"/>
          <Title titleText="Received" titleSize="10px" titleAlignSelf="center"/>
        </ColCont>
          <LineCont />
        <ColCont>
          <Icon name='checkmark-circle' type='ionicon' color='#FE4370' />
          <Title titleText="Drink" titleSize="10px" titleAlignSelf="center" />
          <Title titleText="Sent" titleSize="10px" titleAlignSelf="center" />
        </ColCont>
      </RowCont>
    </IconTextCont>
  )
}

export default ProgressCheck