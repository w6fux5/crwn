import { userActionTypes } from './userTypes';

import { createActions } from '../../utils';

export const setCurrentUser = (user) =>
  createActions(userActionTypes.SET_CURRENT_USER, user);
