import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(254, 67, 112)',
    background: 'rgb(46, 46, 46)',
    card: 'rgb(46, 46, 46)',
    text: 'rgb(138, 138, 138)',
    border: 'rgb(83, 83, 83)',
    notification: 'rgb(255, 255, 255)',
  },
};

const MidIcon = styled.Image`
  width: 65px;
  height: 65px;
`;

function OnMeTabs() {
  return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false, 
        tabBarStyle: { 
          height: '11%',
          borderTopWidth: 2,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        }
      }}
    >      
      <Tab.Screen 
        name="OnMeRoot" 
        component={OnMeRoot} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({}) => (
            <Icon 
              name='home'
              type='foundation'
              color='#8A8A8A'
              size={30}
            />
          ),
          tabBarIconStyle: {
            top: '10%'
          }
        }}
      />
      <Tab.Screen 
        name="Restaurant Menu" 
        component={RestaurantMenu} 
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({}) => (
            <MidIcon source={require('./assets/midIcon.png')}/>
          ),
          tabBarIconStyle: {
            top: '20%'
          }
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({}) => (
            <Icon 
              name='widget'
              type='foundation'
              color='#8A8A8A'
              size={30}
            />
          ),
          tabBarIconStyle: {
            top: '10%'
          }
        }}
      />
    </Tab.Navigator>
  );
}

function OnMeRoot() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false,  }}>
      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        
      />
      <Stack.Screen 
        name="Frequently Visited" 
        component={FrequentlyVisited} 
        
      />
      <Stack.Screen 
        name="Recent Items" 
        component={RecentItems} 
        
      />
      <Stack.Screen 
        name="Restaurant Selection" 
        component={RestaurantSelection} 
        
      />

      <Stack.Screen 
        name="Order Summary" 
        component={OrderSummary} 
        
      />
      <Stack.Screen 
        name="Seat Map" 
        component={SeatMap} 
        
      />
      <Stack.Screen 
        name="Order Confirmation" 
        component={OrderConfirmation} 
        
      />
    </Stack.Navigator>
  );
}

// export {default} from './storybook'; 

export default function App() {
  return (
    <NavigationContainer styles={styles.centerCont} theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen 
          name="OnMeTabs" 
          component={OnMeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCont: {
    alignItems: 'center',
  }
});
