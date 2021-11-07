import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/login';
import Signup from './pages/signUp';
import Dashboard from './pages/dashboard';
import OrderSummary from './pages/orderSummary';


const Stack = createNativeStackNavigator();

// export {default} from './storybook'; 

export default function App() {
  return (
    <NavigationContainer styles={styles.centerCont}>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
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
  }
});
