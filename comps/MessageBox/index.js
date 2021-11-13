import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { Icon } from "react-native-elements";

import Title from "../Title";

const FloatingBoxCont = styled.View`
  width: ${props => props.boxWidth};
  height: ${props => props.boxHeight};
  padding: 15px;
  align-items: center;
  justify-content: flex-start;

  border-top-color: rgba(117, 117, 117, 0.5);
  border-top-width: 5px;
  
  border-left-color: rgba(117, 117, 117, 0.5);
  border-left-width: 5px;

  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-bottom-width: 5px;
  
  border-right-color: rgba(0, 0, 0, 0.5);
  border-right-width: 5px;

  border-radius: 25px;
  border-style: solid;
`

const RowCont = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`

const MessageBox = ({
  boxWidth = "100%",
  boxHeight = "120px",
  messageText = "If you were a Transformer, you'd be Optimus Fine."
}) => {
  return (
    <FloatingBoxCont boxWidth={boxWidth} boxHeight={boxHeight}>
      <RowCont>
        <Title titleText="Leave a message" titleSize="15px" titleWeight="700" titleColor="#A57760" />
        <Icon name="new-message" type="entypo" color="#FE4370" />
      </RowCont>
      <Title titleText={messageText} titleSize="13px" titleColor="#777777"/> 
    </FloatingBoxCont>
  )
}

export default MessageBox;