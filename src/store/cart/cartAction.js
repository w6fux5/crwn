import { cartActionTypes } from './cartTypes';

import {
  createActions,
  addCartItem,
  removeCartItem,
  cleanProductFromCart,
} from '../../utils';

export const toggleCart = () => createActions(cartActionTypes.TOGGLE_CART);

export const addItemToCart = (cartItems, item) => {
  const newItems = addCartItem(cartItems, item);
  return createActions(cartActionTypes.SET_CART_ITEMS, newItems);
};

export const removeItemFormCart = (cartItems, id) => {
  const newItems = removeCartItem(cartItems, id);
  return createActions(cartActionTypes.SET_CART_ITEMS, newItems);
};

export const clearItemFromCart = (cartItems, id) => {
  const newItems = cleanProductFromCart(cartItems, id);
  return createActions(cartActionTypes.SET_CART_ITEMS, newItems);
};
