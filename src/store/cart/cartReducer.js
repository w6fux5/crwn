import { cartActionTypes } from './cartTypes';

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case cartActionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};
