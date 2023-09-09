export const L = (k = '', v = '') => {
  __DEV__ && console.log(k, v);
};

export const errorLogger = (error = '', endPointCalled = '') => {
  if (!__DEV__) return;

  L('error', error);
  L('endpointCalled', endPointCalled);
  L('errconfig', error?.config);

  if (error?.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    L('errdata', error.response.data);
    L('errstatus', error.response.status);
    L('headers', error.response.headers);
  } else if (error?.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    L('requesterr', error.request);
  }
};
