import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// setup react-redux

import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import {rootReducer} from './redux/reducer/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
   window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={ store}>
    <App  />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
