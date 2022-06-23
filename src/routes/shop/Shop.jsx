import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useActions } from '../../hooks';

import { Categories, Category } from '../../routes';

export const Shop = () => {
  const { fetchCategoryStart } = useActions();

  useEffect(() => {
    fetchCategoryStart();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Categories />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};
