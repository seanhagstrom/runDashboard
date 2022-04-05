import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from './Images';

export const AuthLandingPage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Images />
      <div className='flex'>
        <h1>Welcome</h1>
        <p>Only a few more steps to go to view your runs!</p>

        <p>Already have an accout?</p>
        <button onClick={() => navigate('/login')}>Log In</button>
        <p>New to Run Coach? Sign Up.</p>
        <button onClick={() => navigate('/signup')}>Sign up</button>
      </div>
    </section>
  );
};
