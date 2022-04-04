import React from 'react';
import { Images } from './Images';

export const AuthLandingPage = () => {
  return (
    <div className='auth'>
      <div>
        <Images />
        <h1>Welcome</h1>
        <p>Only a few more steps to go to view your runs!</p>
      </div>
      <div>
        <p>Already have an accout?</p>
        <button>Log In</button>
        <p>New to Run Coach? Sign Up.</p>
        <button>Sign up</button>
      </div>
    </div>
  );
};
