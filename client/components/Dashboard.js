import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const coach = useSelector((state) => state.auth);
  console.log(coach);

  return (
    <div>
      <h1>Welcome Coach {coach.email}</h1>
    </div>
  );
};
