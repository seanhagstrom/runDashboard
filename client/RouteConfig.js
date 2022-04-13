/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { me } from './store/auth';

import { AuthLandingPage } from './components/AuthLandingPage';
import { LogInPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';
import { Dashboard } from './components/Dashboard';

const RouteConfig = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => !!state.auth.id);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {loggedInUser ? (
        <div>
          <Routes>
            <Route
              path='/login'
              element={<Navigate replace to='/dashboard' />}
            />
            <Route
              path='/signup'
              element={<Navigate replace to='/dashboard' />}
            />

            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<AuthLandingPage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='*' element={<Navigate replace to='/login' />} />
        </Routes>
      )}
    </div>
  );
};
export default RouteConfig;
