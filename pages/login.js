import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Video } from 'expo-av';

import BigButton from '../components/buttons/BigButton';
import Input from '../components/global/Input';
import SmallButton from '../components/buttons/SmallButton';
import Title from '../components/text/Title';
import TextLink from '../components/text/TextLink';
import TextDivider from '../components/text/TextDivider';

//back-end
import app from '../utils/firebase';
import { GoogleAuthProvider, getAuth, signInWithCredential, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import * as Google from 'expo-google-app-auth';

const ImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`;

const CenterCont = styled.View`
  align-items: center;
  width: 100%;
`;

const ColCont = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 10px;
`;

const RowCont = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const InputCont = styled.View`
width: 100%;
height: auto;
`

const EmptyCont = styled.View`
  flex: 0.5;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default function Login({navigation}) {

  const auth = getAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigation.navigate('Dashboard');
    }
    else {
      console.log("Not Signed In");
    }
  })

  const SignInEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate('Dashboard');
    }).catch((err) => {
      alert(err.message);
    })
  }

  const SignInGoogle = async () => {
    try {
    const result = await Google.logInAsync({
      androidClientId: '108300065119-dff8fg1n852gm6rqltstmc3m3docl4gr.apps.googleusercontent.com',
      iosClientId: '108300065119-7eujeanfp5k38hmtpa7gngmco603egse.apps.googleusercontent.com',
      expoClientId: '108300065119-hrp12dvecq7kdbo1mkvj14l23javki8t.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    });

    console.log(result);
    if (result.type === 'success') {
      const provider = GoogleAuthProvider.credential(
        result.idToken,
        result.accessToken
      )

      const fbresult = await signInWithCredential(auth, provider);
      console.log('added to firebase', fbresult);
      navigation.navigate('Dashboard');
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
    } catch (e) {
      return { error: true };
  };

}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Video
        source={require("../assets/video-1.mp4")}
        style={styles.backgroundVideo}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        volume={1}
        isMuted={true}
        resizeMode="cover"
      />
        <ColCont>
          <EmptyCont />
          <Title alignSelf="flex-start" />
          <InputCont>
            <Input 
              textInputPlaceholder = "Email" 
              textInputLabelSize="0px"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCompleteType="email"
              textContentType="emailAddress"/>
            <Input 
              textInputPlaceholder = "Password" 
              textInputLabelSize="0px"
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCompleteType="password"
              textContentType="newPassword"
              secureTextEntry={true} />
            <TextLink textColor="#fff" alignSelf="flex-end" />
          </InputCont>
          <CenterCont>
            <BigButton onPress={SignInEmail} />
            <BigButton 
              onPress={() => navigation.navigate('Sign Up')}
              bgColor = "#BCB5B7" 
              buttonText = "Sign Up"
            />
          </CenterCont>
          <TextDivider textColor="#fff" />
          <RowCont>
            <SmallButton iconName="logo-google" iconColor="#EC452E" onPress={SignInGoogle} />
          </RowCont>
        </ColCont>
    </SafeAreaView>
  );
}