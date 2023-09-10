import {postMethodCall, getMethodCall} from '../methods';
import {endpoints} from '../endpoints';

export const tryLogin = async credentialObj => {
  const payLoad = {...credentialObj};
  const headers = {'Content-Type': 'application/json'};
  try {
    const response = await postMethodCall(endpoints.login, payLoad, headers);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export const getAllUsers = async credentialObj => {
  const payLoad = {...credentialObj};
  const headers = {'Content-Type': 'application/json'};
  try {
    const response = await getMethodCall(endpoints.users, payLoad, headers);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export const tryLogout = async () => {
  const payLoad = {};
  const headers = {'Content-Type': 'application/json'};
  const response = await postMethodCall(endpoints.logout, payLoad, headers);
  return response;
};
