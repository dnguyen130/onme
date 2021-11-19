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
import RestaurantMenu from './pages/RestaurantMenu';
import OrderConfirmation from './pages/OrderReceived';
import Settings from './pages/Settings';
import FrequentlyVisited from './pages/FrequentlyVisited';
import RecentItems from './pages/RecentItems';
import SeatMap from './pages/SeatMap';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(254, 67, 112)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(254, 67, 112)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 255, 255)',
  },
};

// export {default} from './storybook'; 

export default function App() {
  return (
    <NavigationContainer styles={styles.centerCont} theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Frequently Visited" component={FrequentlyVisited} />
        <Stack.Screen name="Recent Items" component={RecentItems} />
        <Stack.Screen name="Restaurant Selection" component={RestaurantSelection} />
        <Stack.Screen name="Restaurant Menu" component={RestaurantMenu} />
        <Stack.Screen name="Order Summary" component={OrderSummary} />
        <Stack.Screen name="Order Confirmation" component={OrderConfirmation} />
        <Stack.Screen name="Seat Map" component={SeatMap} />
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
