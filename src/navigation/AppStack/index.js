import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../screens/app/Home';
import Saved from '../../screens/app/Saved';
import Account from '../../screens/app/Account';
import Cart from '../../screens/app/Cart';

import {
  HOME_SCREEN,
  SAVED_SCREEN,
  ACCOUNT_SCREEN,
  CART_SCREEN,
} from '../../utils/constants/screenNames';

import {w, h} from '../../utils/responsive';

const Tab = createBottomTabNavigator();

function AppStack() {
  const iconSize = h(24);
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: 'rgb(255, 129, 55)',
        tabBarHideOnKeyboard: true,

        tabBarLabelStyle: {
          marginBottom: h(4),
        },
      }}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, size}) => (
            <Ionicons
              name="home-outline"
              size={iconSize}
              color={!focused ? 'rgb(64,72,77)' : 'rgb(255, 129, 55)'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SAVED_SCREEN}
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused, size}) => (
            <Ionicons
              name="star-outline"
              size={iconSize}
              color={!focused ? 'rgb(64,72,77)' : 'rgb(255, 129, 55)'}
            />
          ),
        }}
      />

      <Tab.Screen
        name={ACCOUNT_SCREEN}
        component={Account}
        options={{
          headerShown: false,

          tabBarLabel: 'Account',
          tabBarIcon: ({focused, size}) => (
            <Ionicons
              name="person-outline"
              size={iconSize}
              color={!focused ? 'rgb(64,72,77)' : 'rgb(255, 129, 55)'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CART_SCREEN}
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused, size}) => (
            <Ionicons
              name="cart-outline"
              size={iconSize}
              color={!focused ? 'rgb(64,72,77)' : 'rgb(255, 129, 55)'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppStack;
