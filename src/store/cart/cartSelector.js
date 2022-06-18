import { createSelector } from 'reselect';

const selectorCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectorCartReducer],
  (cartSlice) => cartSlice.cartItems,
);

export const selectIsCartOpen = createSelector(
  [selectorCartReducer],
  (cartSlice) => cartSlice.isCartOpen,
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((prev, curr) => prev + curr.quantity, 0),
);

export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((prev, curr) => prev + curr.amount, 0),
);
