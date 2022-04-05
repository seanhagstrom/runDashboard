import React from 'react';
import { useMatch } from 'react-router-dom';
import RouteConfig from './RouteConfig';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      {useMatch('/login') && <Navbar />}
      {useMatch('/signup') && <Navbar />}
      <RouteConfig />
    </div>
  );
};

export default App;
