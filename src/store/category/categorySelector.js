import { createSelector } from 'reselect';

const categoryReducer = (state) => state.category;

export const selectCategoryLoading = createSelector(
  [categoryReducer],
  (categorySlice) => categorySlice.isLoading,
);

export const selectCategory = createSelector(
  [categoryReducer],
  (categorySlice) => categorySlice.categories,
);

export const selectCategoryError = createSelector(
  [categoryReducer],
  (categorySlice) => categorySlice.error,
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
