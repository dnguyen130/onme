import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import BigButton from '../components/buttons/BigButton';
import Input from '../components/global/Input';
import FlexInput from '../components/global/FlexInput';
import Title from '../components/text/Title';

//back-end
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../utils/firebase';

const CenterCont = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`

const RowCont = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  flex: 1;
`

const InputCont = styled.View`
  height: 60%;
  max-height: 600px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  }
});

export default function SignUp({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const HandleSignUp = async(email, password) => {
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Title titleColor="#A57760" titleSize="32px" titleWeight="700" titleText="Sign Up" />
      <Title titleSize="32px" titleText="Create your account" />
      <InputCont>
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
            autoCompleteType="email"
            onChangeText={text => setEmail(text)} />
        </RowCont>
        <RowCont>
          <Input 
            textInputLabel="Create Password"
            textInputPlaceholder="Password"
            value={password}
            autoCompleteType="password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)} />
        </RowCont>
        <RowCont>
          <Input
            textInputLabel="Confirm Password"
            textInputPlaceholder="Password"
            value={passwordConfirm}
            autoCompleteType="password"
            secureTextEntry={true}
            onChangeText={text => setPasswordConfirm(text)}
          />
        </RowCont>
      </InputCont>
      <CenterCont>
        <BigButton 
          // onPress={() => navigation.navigate('Dashboard')} 
          onPress={HandleSignUp}
          buttonText="Sign Up" />
      </CenterCont>
    </SafeAreaView>
  );
}