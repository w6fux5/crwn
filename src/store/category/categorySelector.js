import { createSelector } from 'reselect';

const categoryReducer = (state) => state.category;

export const selectCategory = createSelector(
  [categoryReducer],
  (categorySlice) => categorySlice.categories,
);

export const selectorCategoriesMap = createSelector(
  [selectCategory],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {}),
);
