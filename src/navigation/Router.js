import React, {useContext, useEffect} from 'react';

import {useUserDataContext} from '../store/context/auth/UserDataContext';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Router = () => {
  const {loggedIn, setLoggedIn} = useUserDataContext();

  useEffect(() => {
    loggedIn && setLoggedIn(false);
  }, []);

  return <>{loggedIn ? <AppStack /> : <AuthStack />}</>;
};

export default Router;
