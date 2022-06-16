import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getCategoriesAndDocuments } from '../../utils';

import { useActions } from '../../hooks';

import { Categories, Category } from '../../routes';

export const Shop = () => {
  const { setCategories } = useActions();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      setCategories(categoriesArray);
    };

    getCategoriesMap();

    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
