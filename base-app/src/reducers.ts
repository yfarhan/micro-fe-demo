import { combineReducers } from 'redux';
import store from './store';

const rootReducers = combineReducers({
  store
});

const reducers = (state, action) => {
  return rootReducers(state, action);
};

export default reducers;
