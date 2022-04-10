import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import { AuthLandingPage } from './components/AuthLandingPage';
import { LogInPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';
import { Dashboard } from './components/Dashboard';

const RouteConfig = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AuthLandingPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
};
export default RouteConfig;
