/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Images } from './Images';

export const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async () => {
    alert('sign up not implemented yet');
  };

  return (
    <section>
      <Images />
      <div className='flex'>
        <h1>Sign Up</h1>
        {errorMessage && <div className='fail'>{errorMessage}</div>}
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
        <input
          value={confirmPasswordValue}
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          type='password'
          placeholder='confirm password'
        />
        <hr />
        <button
          disabled={
            !emailValue ||
            !passwordValue ||
            passwordValue !== confirmPasswordValue
          }
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <Link to='/login'>Already have an account? Log In</Link>
      </div>
    </section>
  );
};