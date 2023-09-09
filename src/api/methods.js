import axios from 'axios';
import {commonHeaders, endpoints} from './endpoints';
import baseUrl from './config/config';
import {errorLogger} from '../utils/helpers';

export const errorMsgs = {
  TRY_AGAIN: 'Unable to process request at this time\n\nPlease try again later',
  LOGIN: 'Unable to login at this time\n\nPlease try again later',
  SWITCH_CLIENT:
    'Unable to Switch Clients at this time\n\nPlease try again later',
  CHECK_NETWORK: 'Please check that you have Internet Access',
};

//put call
export const putMethodCall = async (endPoint, payLoad, headers = null) => {
  try {
    let config = {
      method: 'put',
      url: `${baseUrl}/${endPoint}`,
      headers: {
        ...(await commonHeaders()),
        ...headers,
      },
      data: JSON.stringify(payLoad),
    };
    //api call
    const response = await axios(config);

    return response.data;
  } catch (e) {
    errorLogger(e, endPoint);
    throw new Error(errorMsgs.CHECK_NETWORK);
    // return e.response.data
  }
};

//post call
export const postMethodCall = async (endPoint, payLoad, headers = null) => {
  try {
    let config = {
      method: 'post',
      url: `${baseUrl}/${endPoint}`,
      headers: {
        ...(await commonHeaders()),
        ...headers,
      },
      data: JSON.stringify(payLoad),
    };
    //api call
    const response = await axios(config);

    return response.data;
  } catch (e) {
    errorLogger(e, endPoint);
    throw new Error(errorMsgs.TRY_AGAIN);
  }
};

//get call
export const getMethodCall = async (
  endPoint,
  payLoad = null,
  headers = null,
) => {
  try {
    // console.log(payLoad)

    let config = {
      method: 'get',
      url: `${baseUrl}/${endPoint}`,
      headers: {
        ...(await commonHeaders()),
        ...headers,
      },
      params: payLoad ? payLoad : null,
      // data: (payLoad) ? JSON.stringify(payLoad) : null
    };
    // console.log(config)
    //api call
    const response = await axios(config);
    // console.log(response)
    return response.data;
  } catch (e) {
    errorLogger(e, endPoint);
    throw new Error(errorMsgs.TRY_AGAIN);
  }
};

export const getMethodCallWithQueryStrings = async (
  endPoint,
  payLoad = null,
  headers = null,
) => {
  try {
    //console.log(payLoad)

    let config = {
      method: 'get',
      url: `${baseUrl}/${endPoint}`,
      headers: {
        ...(await commonHeaders()),
        ...headers,
      },
      params: payLoad ? payLoad : {},
    };
    //console.log(config)
    //api call

    let axInstance = axios.create({
      paramsSerializer: params => {
        // Sample implementation of query string building
        let result = '';
        Object.keys(params).forEach(key => {
          result += `${key}=${encodeURIComponent(params[key])}&`;
        });
        return result.substring(0, result.length - 1);
      },
    });

    const response = await axInstance(config);
    //console.log(response)
    return response.data;
  } catch (e) {
    errorLogger(e, endPoint);
    throw new Error('Please check that you have internet access.');
    // return e.response.data
  }
};
