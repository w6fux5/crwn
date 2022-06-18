import { categoryTypes } from './categoryTypes';
import { createActions, getCategoriesAndDocuments } from '../../utils';

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(createActions(categoryTypes.FETCH_CATEGORIES_START));
  try {
    const categoryArray = await getCategoriesAndDocuments();
    dispatch(
      createActions(categoryTypes.FETCH_CATEGORIES_SUCCESS, categoryArray),
    );
  } catch (error) {
    dispatch(
      createActions(categoryTypes.FETCH_CATEGORIES_FAILED, error.message),
    );
  }
};
