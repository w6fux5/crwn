import { categoryTypes } from './categoryTypes';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case categoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        isLoading: false,
        categories: action.payload,
        error: null,
      };
    case categoryTypes.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
