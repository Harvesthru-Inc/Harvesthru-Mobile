import {initialState} from '~/redux/initialState';
import {SET_LOGIN_STATE} from '~/redux/actionTypes';

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        ...action.payload,
        // Set login to true
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
