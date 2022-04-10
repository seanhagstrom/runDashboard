/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-cycle */
import React from 'react';
import { useMatch } from 'react-router-dom';
import RouteConfig from './RouteConfig';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      {!useMatch('/') && <Navbar />}
      <RouteConfig />
    </div>
  );
};

export default App;
