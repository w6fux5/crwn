import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Navigation } from './routes';

const Shop = () => (
  <>
    <h1>Shop</h1>
  </>
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
