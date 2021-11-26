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
import BackButton from '../components/global/BackButton';

//back-end
import app from '../utils/firebase.js';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

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
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const SignUpUser = async () => {
    const auth = getAuth();
    if(password === passwordConfirm)
    {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
          const user = userCredential.user;
          console.log(auth.currentUser);

          updateProfile(auth.currentUser, {
            displayName: firstName
          }).then(() => {
            console.log(auth.currentUser.displayName);
          })

          navigation.navigate("Dashboard");
        })
        .catch((err)=>{
          alert(err.message);
        })
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <BackButton 
        onPress={() => navigation.navigate('Login')} 
        onPress={() => navigation.goBack()} 
      />
      <Title titleColor="#A57760" titleSize="32px" titleWeight="700" titleText="Sign Up" />
      <Title titleSize="32px" titleText="Create your account" />
      <RowCont>
        <FlexInput 
        textInputLabel="Name" 
        textInputPlaceholder="First Name"
        value={firstName} 
        onChangeText={(text) => setFirstName(text)} />
        <FlexInput 
        textInputPlaceholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)} />
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
        <Input 
        textInputLabel="Confirm Password"
        textInputPlaceholder="Confirm Password"
        value={passwordConfirm}
        onChangeText={(text) => setPasswordConfirm(text)}
        secureTextEntry={true}/>
      </RowCont>
      <CenterCont>
        <BigButton 
        onPress={SignUpUser}
        buttonText="Sign Up" />
        <TextDivider textColor="#888" borderColor="#888" />
        <RowCont>
          <SmallButton iconColor="#699BF7" />
          <SmallButton iconName="logo-google" iconColor="#EC452E"/>
        </RowCont>
      </CenterCont>
    </SafeAreaView>
  );
}