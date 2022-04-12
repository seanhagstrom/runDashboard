/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Images } from './Images';
import { useToken } from '../utils/useToken';
import { useUser } from '../utils/useUser';

export const LogInPage = (props) => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate = useNavigate();
  const user = useUser();

  const handleLogIn = async () => {
    const response = await axios.post('/auth/login', {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    await setToken(token);
    navigate('/dashboard', { replace: true });
  };

  return (
    <section>
      <Images />
      <div className='flex'>
        <h1>Log IN</h1>
        {errorMessage && <div className='fail'>{errorMessage}</div>}
        {/* {user && <Navigate to='/dashboard' replace={true} />} */}
        <input
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder='youremail@gmail.com'
        />
        <input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type='password'
          placeholder='password'
        />
        <button disabled={!emailValue || !passwordValue} onClick={handleLogIn}>
          Log In
        </button>
        <Link to='/forgot-password'>Forgot Password</Link>
      </div>
    </section>
  );
};
