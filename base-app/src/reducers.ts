import { combineReducers } from 'redux';
import store from './store';
import storeRed from 'appRed/storeRed';

const rootReducers = combineReducers({
  store,
  storeRed
});

const reducers = (state, action) => {
  return rootReducers(state, action);
};

export default reducers;
