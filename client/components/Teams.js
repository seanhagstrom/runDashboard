/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../store/teams';

export const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  return (
    <div>
      {teams.length < 1 && (
        <p>You don't have any teams yet. Create your first team!</p>
      )}
      {teams &&
        teams.map((team) => (
          <div key={team.id} className='card'>
            <p className='card-item'>{team.name}</p>
            <img className='card-item' src={team.imageURL} alt='Team Logo' />
          </div>
        ))}
    </div>
  );
};
