import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import BigButton from '../components/buttons/BigButton';
import Input from '../components/global/Input';
import Title from '../components/text/Title';
import BackButton from '../components/global/BackButton';

//back-end
import app from '../utils/firebase.js';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const RowCont = styled.View`
  justify-content: center;
  align-items: center;
  width: 86%;
  margin-top: 10%;
`;

const BackBtnCont = styled.View`
  width: 86%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
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
      <BackBtnCont>
        <BackButton 
          onPress={() => navigation.navigate('Login')} 
          onPress={() => navigation.goBack()}
        />
      </BackBtnCont>
      <RowCont>
        <Title titleColor="#A57760" titleSize="32px" titleWeight="700" titleText="Reset" />
        <Title titleSize="32px" titleText="Password" />
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
          textInputLabel="New Password"
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
      <RowCont>
        <BigButton 
        onPress={SignUpUser}
        buttonText="Save" />
      </RowCont>
    </SafeAreaView>
  );
}