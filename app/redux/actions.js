import {SET_LOGIN_STATE} from '~/redux/actionTypes';

// Set login state redux
export const setLoginState = loginData => {
  return {
    type: SET_LOGIN_STATE,
    payload: loginData,
  };
};
