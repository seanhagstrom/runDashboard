/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { registerServiceWorker } from '../registerServiceWorker';

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

// registerServiceWorker();
