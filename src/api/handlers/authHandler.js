import {postMethodCall} from '../methods';
import {endpoints} from '../endpoints';

export const tryLogin = async credentialObj => {
  const payLoad = {...credentialObj};
  const headers = {'Content-Type': 'application/json'};
  const response = await postMethodCall(endpoints.login, payLoad, headers);
  return response;
};

export const tryLogout = async () => {
  const payLoad = {};
  const headers = {'Content-Type': 'application/json'};
  const response = await postMethodCall(endpoints.logout, payLoad, headers);
  return response;
};
