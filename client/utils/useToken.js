/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

// custom hook to set new tokens and get existing token from local storage.
export const useToken = () => {
  const [token, setLocalToken] = useState(() => {
    return localStorage.getItem('token');
  });

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setLocalToken(newToken);
  };

  return [token, setToken];
};
