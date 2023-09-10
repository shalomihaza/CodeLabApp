import React, {createContext, useState, useContext} from 'react';
import localStorage, {storageKeys} from '../../../setup/db/localStorage';
import {tryLogin} from '../../../api/handlers/authHandler';
import {L} from '../../../utils/helpers';
const UserDataContext = createContext();

//create context's provider
const UserDataContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState('');

  return (
    <UserDataContext.Provider
      value={{
        loggedIn,
        userInfo,

        setUserInfo,
        setLoggedIn,
        setAccessToken,
        accessToken,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error(
      'UserDataContext component must be rendered as child of navigator component',
    );
  }
  return context;
};

//export provider
export default UserDataContextProvider;
