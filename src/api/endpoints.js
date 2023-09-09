import localStorage, {storageKeys} from '../setup/db/localStorage';

//common headers
export const commonHeaders = async () => {
  //common headers
  const storedToken = await localStorage.getItem(
    storageKeys.LOGIN_ACCESS_TOKEN,
  );
  console.log('storedToken', storedToken);

  const accessToken = storedToken ? storedToken : '';
  const authorization = 'Bearer ' + accessToken;
  console.log('accessToken', accessToken);

  const cHeaders = {
    Authorization: authorization,
    'Access-Control-Allow-Origin': '*.*',
  };
  return cHeaders;
};

//enpoints
export const endpoints = {
  login: 'auth/login',
  fetchAllProducts: 'products',
};
