import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Input, Avatar } from 'react-native-elements';
import styled from 'styled-components/native';

import Header from '../components/global/Header';
import SmallButton from '../components/buttons/SmallButton';

import { getAuth, signOut } from 'firebase/auth';

const PaddingCont = styled.View`
  padding: 10px 10px 0px 10px;
  flex: 1;
`

const ScrollCont = styled.ScrollView`
  flex: 1;
`;

const PaddingContHorizontal = styled.View`
  padding: 0 30px;
`

const RowCont = styled.View`
  flex-direction: row;
  align-self: flex-end;
`

const AvatarCont = styled.View`
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E'
  }
});

export default function Settings({navigation}) {

  const auth = getAuth();
  const UserSignOut = () => {
    signOut(auth).then(() => {
      navigation.navigate('Login');
      console.log('Logged out');
    }).catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header 
        subTitle="My Settings" subWeight="700"
        onPress={() => navigation.goBack()} 
      />
      <PaddingCont>
        <RowCont>
        <SmallButton
          buttonColor="#2E2E2E"
          buttonText="Edit"
          buttonTextcolor="#A57760"
          buttonTextWeight="700"
          buttonBorderWidth="0px"
          iconName="new-message" 
          iconBrand="entypo" 
          iconColor="#FE4370"/>
        <SmallButton 
          buttonColor="#2E2E2E"
          buttonText="Logout"
          buttonTextcolor="#A57760"
          buttonTextWeight="700"
          buttonBorderWidth="0px"
          iconName="login" 
          iconBrand="entypo" 
          iconColor="#FE4370"
          onPress={UserSignOut} />
        </RowCont>
        <ScrollCont>
          <PaddingContHorizontal>
            <RowCont>
              <Input 
                label="Name" 
                placeholder='Name'
                labelStyle={{color: '#fff' }}
                containerStyle={{flex: 2}}
                inputStyle={{color: '#fff'}}  
                inputContainerStyle={{borderBottomColor: '#A57760'}}  
              />
              <Input 
                label="Age" 
                placeholder='Name'
                labelStyle={{color: '#fff' }}
                containerStyle={{flex: 1}}
                inputStyle={{color: '#fff'}}  
                inputContainerStyle={{borderBottomColor: '#A57760'}}  
              />
            </RowCont>
            <Input 
              label="Email" 
              placeholder='Email'
              labelStyle={{color: '#fff' }}
              inputStyle={{color: '#fff'}} 
              inputContainerStyle={{borderBottomColor: '#A57760'}}  
            />
            <Input 
              label="Password"
              placeholder='Password'
              secureTextEntry={true}
              labelStyle={{color: '#fff' }}
              inputStyle={{color: '#fff'}} 
              inputContainerStyle={{borderBottomColor: '#A57760'}}  
            />
            <Input
              label="Two Truths and a Lie" 
              placeholder='1'
              labelStyle={{color: '#fff' }}
              inputStyle={{color: '#fff'}} 
              inputContainerStyle={{borderBottomColor: '#A57760'}}  
            />
            <Input 
              placeholder='2'
              inputStyle={{color: '#fff'}} 
              inputContainerStyle={{borderBottomColor: '#A57760'}} 
            />
            <Input 
              placeholder='3'
              inputStyle={{color: '#fff'}} 
              inputContainerStyle={{borderBottomColor: '#A57760'}} 
            />
            <AvatarCont>
              <Avatar
                rounded
                size="large"
                icon={{name: 'user', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{backgroundColor: '#B5B5B5', borderColor: '#FE4370', borderWidth: 3}}
                source={{uri:'http://placekitten.com/300/300'}}
              />
              <Avatar
                rounded
                size="large"
                icon={{name: 'user', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{backgroundColor: '#B5B5B5'}}
              />
              <Avatar
                rounded
                size="large"
                icon={{name: 'user', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{backgroundColor: '#B5B5B5'}}
              />
              <Avatar
                rounded
                size="large"
                icon={{name: 'plus', type: 'font-awesome'}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{backgroundColor: '#FE4370'}}
              />
            </AvatarCont>
          </PaddingContHorizontal>
        </ScrollCont>
      </PaddingCont>
    </View>
  );
}
