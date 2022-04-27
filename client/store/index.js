import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import auth from './auth';
import teams from './teams';

const store = configureStore({
  reducer: {
    auth,
    teams,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from './auth';

/***Redux-Toolkit documentation:
 * Store refactor: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
 * Middleware reference: https://redux-toolkit.js.org/api/getDefaultMiddleware
 */
