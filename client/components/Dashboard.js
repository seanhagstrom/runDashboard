/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const coach = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome Coach {coach.email}</h1>
    </div>
  );
};
