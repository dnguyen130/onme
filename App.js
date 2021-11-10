import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/login';
import SignUp from './pages/signUp';
import Dashboard from './pages/dashboard';
import RestaurantSelection from './pages/restaurantSelection';
import RestaurantMenuFood from './pages/restaurantMenuFood';

const Stack = createNativeStackNavigator();

// export {default} from './storybook'; 

export default function App() {
  return (
    <NavigationContainer styles={styles.centerCont}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Restaurant Selection" component={RestaurantSelection} />
        <Stack.Screen name="Restaurant Menu Food" component={RestaurantMenuFood} />
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
