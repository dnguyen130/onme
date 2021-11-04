import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

import BigButton from '../comps/BigButton';
import Input from '../comps/Input';
import SmallButton from '../comps/SmallButton';
import Title from '../comps/Title';
import TextDivider from '../comps/TextDivider';
import styled from 'styled-components';

const HeaderCont = styled.View`
    padding: 10px;
    width: 100%;
    flex: 1;
    height: 268px;
    background-image: "../../assets/imgBg.png";
`

const TopHeader = ({

}) => {
    <HeaderCont>
        <Title titleText="Title" />
        <Title titleText="Subtitle" />
    </HeaderCont>
}