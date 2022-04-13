/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../store/auth';
import { Images } from './Images';

export const SignUpPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleSignUp = async () => {
    dispatch(
      signup({
        email: emailValue,
        password: passwordValue,
      })
    );
  };

  return (
    <section>
      <Images />
      <div className='flex'>
        <h1>Sign Up</h1>
        {error && error.response && (
          <div className='fail'>{error.response.data}</div>
        )}
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
