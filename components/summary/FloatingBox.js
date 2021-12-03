import React from "react";
import styled from "styled-components";

import Title from "../text/Title";
import ProgressCheck from "./ProgressCheck";

const FloatingBoxCont = styled.View`
  width: ${props => props.boxWidth};
  height: ${props => props.boxHeight};
  padding: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;

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

const TopTitle = styled.View`
  position: absolute;
  top: 20px;
`

const FloatingBox = ({
  boxWidth = "100px",
  boxHeight = "100px",
  
  mainTitle = "",
  mainSize = "20px",
  mainWeight = "400",
  mainMargin = "5px",

  subTitle = "",
  subSize = "20px",
  subWeight = "400",
  subMargin = "5px"
}) => {
  return (
    <FloatingBoxCont boxWidth={boxWidth} boxHeight={boxHeight}>
      <TopTitle>
      <Title titleText={mainTitle} titleSize={mainSize} titleWeight={mainWeight} titleMargin={mainMargin} />
      <Title titleText={subTitle} titleSize={subSize} titleWeight={subWeight} titleMargin={subMargin} />
      </TopTitle>
      <ProgressCheck />
    </FloatingBoxCont>
  )
}

export default FloatingBox;