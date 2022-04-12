import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../utils/useUser';

const loggedInUser = {
  name: 'Sean',
};

export const Dashboard = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      {!user && <Navigate to='/' replace={true} />}
      <h1>Welcome Coach {loggedInUser.name}</h1>
    </div>
  );
};
