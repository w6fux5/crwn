import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Categories, Category } from '../../routes';

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
