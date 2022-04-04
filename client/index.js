import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { registerServiceWorker } from '../registerServiceWorker';
import App from './App';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

registerServiceWorker();
