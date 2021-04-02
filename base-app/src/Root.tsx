import React from 'react';
import ReactDOM from "react-dom";
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger));

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("app"));
