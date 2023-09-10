import localStorage, {storageKeys} from '../setup/db/localStorage';
import {L} from '../utils/helpers';
//common headers
export const commonHeaders = async () => {
  //common headers
  const storedToken = await localStorage.getItem(
    storageKeys.LOGIN_ACCESS_TOKEN,
  );
  L('storedToken', storedToken);

  const accessToken = storedToken ? storedToken : '';
  const authorization = 'Bearer ' + accessToken;
  L('accessToken', accessToken);

  const cHeaders = {
    Authorization: authorization,
    'Access-Control-Allow-Origin': '*.*',
  };
  return cHeaders;
};

//enpoints
export const endpoints = {
  login: 'auth/login',
  logout: 'auth/logout',
  fetchAllProducts: 'products',
  users: 'users',
};
