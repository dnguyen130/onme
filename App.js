import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import OrderSummary from './pages/OrderSummary';
import RestaurantSelection from './pages/RestaurantSelection';
import RestaurantMenuFood from './pages/RestaurantMenuFood';
import OrderConfirmation from './pages/OrderReceived';
import RestaurantMenuDrink from './pages/RestaurantMenuDrink';
import Settings from './pages/Settings';

const Stack = createNativeStackNavigator();

// export {default} from './storybook'; 

export default function App() {
  return (
    <NavigationContainer styles={styles.centerCont}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Restaurant Selection" component={RestaurantSelection} />
        <Stack.Screen name="Restaurant Menu Food" component={RestaurantMenuFood} />
        <Stack.Screen name="Restaurant Menu Drinks" component={RestaurantMenuDrink} />
        <Stack.Screen name="Order Summary" component={OrderSummary} />
        <Stack.Screen name="Order Confirmation" component={OrderConfirmation} />
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
