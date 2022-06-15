import { createContext, useReducer } from 'react';

import {
  addCartItem,
  removeCartItem,
  cleanProductFromCart,
  createActions,
} from '../utils';

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalAmount: 0,
  toggleCart: () => {},
  addItemToCart: () => {},
  removeItemFormCart: () => {},
  clearItemFromCart: () => {},
});

const cartActionTypes = {
  TOGGLE_CART: '[Cart]: TOGGLE_CART',
  SET_CART_ITEMS: '[Cart]: SET_CART_ITEMS',
};

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case cartActionTypes.SET_CART_ITEMS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      throw new Error(`Unhandled type ${action.type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, totalAmount }, dispatch] =
    useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    const newItems = addCartItem(cartItems, item);
    updateCartItems(newItems);
  };

  const removeItemFormCart = (id) => {
    const newItems = removeCartItem(cartItems, id);
    updateCartItems(newItems);
  };

  const clearItemFromCart = (id) => {
    const newItems = cleanProductFromCart(cartItems, id);
    updateCartItems(newItems);
  };

  const toggleCart = () => {
    dispatch({ type: cartActionTypes.TOGGLE_CART });
  };

  const updateCartItems = (cartItems) => {
    const totalAmount = cartItems.reduce((prev, curr) => prev + curr.amount, 0);
    const cartCount = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);

    dispatch(
      createActions(cartActionTypes.SET_CART_ITEMS, {
        totalAmount,
        cartCount,
        cartItems,
      }),
    );
  };

  const value = {
    isCartOpen,
    toggleCart,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFormCart,
    clearItemFromCart,
    totalAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
