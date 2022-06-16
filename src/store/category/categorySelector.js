export const selectorCategoriesMap = (state) => {
  // Array 轉 hash table
  const categoryMap = state.category.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
