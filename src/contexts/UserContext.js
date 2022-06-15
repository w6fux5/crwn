import { createContext, useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  createActions,
} from '../utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const userActionTypes = {
  SET_CURRENT_USER: '[User]: SET_CURRENT_USER',
};

const initialState = {
  currentUser: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      throw new Error(`Unhandled type ${action.type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch(createActions(userActionTypes.SET_CURRENT_USER, user));
  };

  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((currentUser) => {
      if (currentUser) {
        createUserDocumentFromAuth(currentUser);
      }
      setCurrentUser(currentUser);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
