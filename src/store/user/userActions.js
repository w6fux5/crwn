import { userActionTypes } from './userTypes';

import { createActions } from '../../utils';

export const setCurrentUser = (user) =>
  createActions(userActionTypes.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createActions(userActionTypes.CHECK_USER_SESSION);

// ==== Sign in ==== //
export const googleSignIn = () =>
  createActions(userActionTypes.GOOGLE_SIGN_IN_START);

export const emailSignIn = ({ email, password }) =>
  createActions(userActionTypes.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createActions(userActionTypes.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createActions(userActionTypes.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createActions(userActionTypes.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  createActions(userActionTypes.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createActions(userActionTypes.SIGN_UP_FAILED, error);

// ==== Sign out ==== //
export const signOutStart = () => createActions(userActionTypes.SIGN_OUT_START);

export const signOutSuccess = () => {
  return createActions(userActionTypes.SIGN_OUT_SUCCESS);
};

export const signOutFailed = () =>
  createActions(userActionTypes.SIGN_OUT_FAILED);
