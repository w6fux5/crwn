import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils';

// import PRODUCTS from '../shop-data.js';

export const CategoryContext = createContext({
  categoryMap: [],
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoryMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoryMap };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
