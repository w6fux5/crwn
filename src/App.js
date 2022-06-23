import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Navigation, Auth, Shop, Checkout } from './routes';

import { useActions } from './hooks';

export const App = () => {
  const { checkUserSession } = useActions();

  useEffect(() => {
    checkUserSession();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
