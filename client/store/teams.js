import axios from 'axios';

const SET_TEAMS = 'SET_TEAMS';

const setTeams = (teams) => ({
  type: SET_TEAMS,
  teams,
});

export const fetchTeams = () => async (dispatch) => {
  try {
    // Will have to check for authenticated user and send with req below,
    // or send header with token...?
    const { data: teams } = await axios.get('/api/teams');
    dispatch(setTeams(teams));
  } catch (error) {
    console.error(error);
  }
};

export default function (state = [], action) {
  switch (action.type) {
    case SET_TEAMS:
      return action.teams;
    default:
      return state;
  }
}
