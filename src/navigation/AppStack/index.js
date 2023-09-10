import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME_SCREEN} component={Home} />
      <Tab.Screen name={SAVED_SCREEN} component={Saved} />

      <Tab.Screen name={ACCOUNT_SCREEN} component={Account} />
      <Tab.Screen name={CART_SCREEN} component={Cart} />
    </Tab.Navigator>
  );
}

export default AppStack;
