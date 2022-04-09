/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import { useToken } from './useToken';

export const useUser = () => {
  const [token] = useToken();

  const [user, setUser] = useState(() => {
    if (!token) return null;
    return token;
  });

  useEffect(() => {
    if (!token) {
      setUser(null);
    } else {
      setUser(token);
    }
  }, [token]);

  return user;
};
