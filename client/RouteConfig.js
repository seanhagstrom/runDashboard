import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import { AuthLandingPage } from './components/AuthLandingPage';
import { Login } from './components/LoginPage';

const RouteConfig = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AuthLandingPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default RouteConfig;
