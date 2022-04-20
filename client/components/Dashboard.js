/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../store/teams';

export const Dashboard = () => {
  const dispatch = useDispatch();

  const coach = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  return (
    <div>
      <h1>Welcome Coach {coach.email}</h1>
      {teams.map((team) => (
        <ul>
          <li>{team.name}</li>
          <img src={team.imageURL} alt='Team Logo' />
        </ul>
      ))}
    </div>
  );
};
