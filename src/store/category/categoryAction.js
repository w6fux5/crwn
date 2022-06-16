import { categoryTypes } from './categoryTypes';
import { createActions } from '../../utils';

export const setCategories = (categoryArray) =>
  createActions(categoryTypes.SET_CATEGORIES, categoryArray);
