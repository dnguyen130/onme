import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import BigButton from '../components/buttons/BigButton';
import Input from '../components/global/Input';
import FlexInput from '../components/global/FlexInput';
import SmallButton from '../components/buttons/SmallButton';
import Title from '../components/text/Title';
import TextDivider from '../components/text/TextDivider';

//back-end
import app from '../utils/firebase.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CenterCont = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`

const RowCont = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  flex: 1;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'flex-start',
    padding: 30,
  }
});

export default function SignUp({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignUpUser = async() => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=> {
        const user = userCredential.user;
        console.log(user.email);
        navigation.navigate("Dashboard");
      })
      .catch((err)=>{
        alert(err.message);
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Title titleColor="#A57760" titleSize="32px" titleWeight="700" titleText="Sign Up" />
      <Title titleSize="32px" titleText="Create your account" />
      <RowCont>
        <FlexInput textInputLabel="Name" textInputPlaceholder="First Name"/>
        <FlexInput textInputPlaceholder="Last Name" />
      </RowCont>
      <RowCont>
        <FlexInput textInputLabel="Date of Birth" textInputPlaceholder="Month" />
        <FlexInput textInputPlaceholder="Day"/>
        <FlexInput textInputPlaceholder="Year"/>
      </RowCont>
      <RowCont>
        <Input 
        textInputLabel="Email"
        textInputPlaceholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCompleteType="email"
        textContentType="emailAddress"/>
      </RowCont>
      <RowCont>
        <Input 
          textInputLabel="Create Password"
          textInputPlaceholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCompleteType="password"
          textContentType="newPassword"
          secureTextEntry={true} />
      </RowCont>
      <RowCont>
        <Input textInputLabel="Confirm Password"/>
      </RowCont>
      <CenterCont>
        <BigButton 
        onPress={SignUpUser}
        buttonText="Sign Up" />
        <TextDivider />
        <RowCont>
          <SmallButton />
          <SmallButton />
        </RowCont>
      </CenterCont>
    </SafeAreaView>
  );
}