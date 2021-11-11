import React from "react";
import styled from "styled-components";
import { Icon } from "react-native-elements";

import Title from "../Title";

const IconTextCont = styled.View`

`

const LineCont = styled.View`

`

const RowCont = styled.View`
  flex-direction: row;
`

const ColCont = styled.View`

`

const ProgressCheck = ({
  
}) => {
  return (
    <IconTextCont>
      <RowCont>
        <ColCont>
          <Icon name='checkmark-circle' type='ionicon' color='#FE4370' />
          <Title titleText="Order Received" titleSize="10px"/>
        </ColCont>
        <LineCont />
        <ColCont>
          <Icon name='checkmark-circle' type='ionicon' color='#FE4370' />
          <Title titleText="Drink Sent" titleSize="10px" />
        </ColCont>
      </RowCont>
    </IconTextCont>
  )
}

export default ProgressCheck