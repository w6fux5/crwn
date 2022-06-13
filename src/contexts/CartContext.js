import { createContext, useState, useEffect } from 'react';

import { addCartItem, removeCartItem, cleanProductFromCart } from '../utils';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFormCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const removeItemFormCart = (id) => {
    setCartItems(removeCartItem(cartItems, id));
  };

  const clearItemFromCart = (id) => {
    setCartItems(cleanProductFromCart(cartItems, id));
  };

  useEffect(() => {
    const total = cartItems.reduce((prev, curr) => prev + curr.amount, 0);
    setTotalAmount(total);
  }, [cartItems]);

  useEffect(() => {
    const count = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFormCart,
    clearItemFromCart,
    totalAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
