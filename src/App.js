import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Navigation, Auth, Shop } from './routes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};
