/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import axios from 'axios';

const TOKEN = 'token';

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH';

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

export const me = () => async (dispatch) => {
  try {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data } = await axios.get('/auth/me', {
        headers: {
          authorization: token,
        },
      });
      return dispatch(setAuth(data));
    }
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post('/auth/login', {
        email,
        password,
      });
      window.localStorage.setItem(TOKEN, data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const signup =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.post('/auth/signup', {
        email,
        password,
      });
      window.localStorage.setItem(TOKEN, data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
