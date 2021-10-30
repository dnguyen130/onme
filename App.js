import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/index';

const Stack = createNativeStackNavigator();

// export {default} from './storybook'; 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCont: {
    alignItems: 'center',
  },
  rowCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    paddingLeft: 50,
    paddingRight: 50,
  }
});
