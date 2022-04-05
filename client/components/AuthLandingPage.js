import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from './Images';

export const AuthLandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className='auth'>
      <div>
        <Images />
        <h1>Welcome</h1>
        <p>Only a few more steps to go to view your runs!</p>
      </div>
      <div>
        <p>Already have an accout?</p>
        <button onClick={() => navigate('/login')}>Log In</button>
        <p>New to Run Coach? Sign Up.</p>
        <button onClick={() => navigate('/signup')}>Sign up</button>
      </div>
    </div>
  );
};
