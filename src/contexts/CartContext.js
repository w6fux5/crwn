import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, item) => {
  const existsItem = cartItems.find((el) => el.id === item.id);

  if (existsItem) {
    return cartItems.map((el) =>
      el.id === existsItem.id
        ? {
            ...existsItem,
            quantity: ++existsItem.quantity,
            amount: item.price * existsItem.quantity,
          }
        : el,
    );
  }

  return [...cartItems, { ...item, quantity: 1, amount: item.price }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  count: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
