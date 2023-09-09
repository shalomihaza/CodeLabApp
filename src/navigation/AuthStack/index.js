import React, {useContext, useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from '../../screens/auth/Onboarding';
import SignUp from '../../screens/auth/SignUp';
import LogIn from '../../screens/auth/LogIn';

import {
  ONBOARDING_SCREEN,
  LOGIN_SCREEN,
  SIGN_UP_SCREEN,
} from '../../utils/constants/screenNames';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ONBOARDING_SCREEN}>
      <Stack.Screen name={ONBOARDING_SCREEN} component={Onboarding} />

      <Stack.Screen name={SIGN_UP_SCREEN} component={SignUp} />
      <Stack.Screen name={LOGIN_SCREEN} component={LogIn} />
    </Stack.Navigator>
  );
};

export default AuthStack;
