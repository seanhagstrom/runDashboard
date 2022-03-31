import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { registerServiceWorker } from '../registerServiceWorker';
import App from './App';
// import sw from '../public/sw';

registerServiceWorker();
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
