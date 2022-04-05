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
