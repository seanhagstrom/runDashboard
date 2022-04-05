/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Images } from './Images';

export const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate = useNavigate();
  return (
    <section>
      <Images />
      <div className='flex'>
        <h1>Log IN</h1>
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
        <button>Log In</button>
        <Link to='/forgotpassword'>Forgot Password</Link>
      </div>
    </section>
  );
};
