import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Navigation, Auth, Shop, Checkout } from './routes';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils';

import { useActions } from './hooks';

export const App = () => {
  const { setCurrentUser } = useActions();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((currentUser) => {
      if (currentUser) {
        createUserDocumentFromAuth(currentUser);
      }
      setCurrentUser(currentUser);
    });

    return unsubscribe;

    // eslint-disable-next-line
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
