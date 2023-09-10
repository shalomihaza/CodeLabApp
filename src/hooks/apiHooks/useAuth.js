import {useCallback, useEffect, useRef, useState} from 'react';

import localStorage, {storageKeys} from '../../setup/db/localStorage';

import useIsMounted from '../useIsMounted';

import {tryLogin, getAllUsers} from '../../api/handlers/authHandler';
import {L} from '../../utils/helpers';

function useAuth() {
  const isMounted = useIsMounted();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const clearError = () => setError('');
  //   const getUsers = async () => {
  //     setLoading(true);
  //     L('hhgh');

  //     try {
  //       const res = await getAllUsers();
  //       L('res', res);
  //       if (res.status == 200) {
  //       }
  //     } catch (error) {
  //     }
  //   };
  const loginUser = async ({username, password}) => {
    setLoading(true);
    try {
      const res = await tryLogin({
        username,
        password,
      });
      setLoading(false);

      L('resStatus', res?.status);
      L('resData', res?.data);

      if (res.status == 200) {
        if (!isMounted()) return;
        setData(res?.data);
        L('resToken', res?.data?.token);
        L('resEmail', res?.data?.email);
        await localStorage.setItem(storageKeys.USER_EMAIL, res?.data?.email);
        await localStorage.setItem(
          storageKeys.LOGIN_ACCESS_TOKEN,
          res?.data?.token,
        );
      }
    } catch (error) {
      L('loginErr', error);
      setLoading(false);
      setError(error);
      setData(null);
    }
  };

  return {loading, error, data, postLogin: loginUser, clearError};
}

export default useAuth;
