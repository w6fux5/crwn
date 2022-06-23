import { userActionTypes } from './userTypes';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.CHECK_USER_SESSION:
      return {
        currentUser: null,
        error: null,
        isLoading: true,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        currentUser: action.payload,
        isLoading: false,
        error: null,
      };

    case userActionTypes.SIGN_IN_FAILED:
      return {
        currentUser: null,
        error: action.payload,
        isLoading: false,
      };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return initialState;

    case userActionTypes.SIGN_OUT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
