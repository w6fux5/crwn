import { categoryTypes } from './categoryTypes';
import { createActions } from '../../utils';

export const fetchCategoryStart = () =>
  createActions(categoryTypes.FETCH_CATEGORIES_START);

export const fetchCategorySuccess = (categoryArray) =>
  createActions(categoryTypes.FETCH_CATEGORIES_SUCCESS, categoryArray);

export const fetchCategoryFailed = (error) =>
  createActions(categoryTypes.FETCH_CATEGORIES_FAILED, error.message);
