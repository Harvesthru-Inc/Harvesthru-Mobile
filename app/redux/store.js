import {createStore, combineReducers} from '@reduxjs/toolkit';
import {loginReducer} from '~/redux/reducer';

const rootReducer = combineReducers({
  loginReducer: loginReducer,
});

export const store = createStore(rootReducer);
