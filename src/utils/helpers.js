export const addCartItem = (cartItems, item) => {
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

export const removeCartItem = (cartItems, id) => {
  const existsItem = cartItems.find((el) => el.id === id);

  if (!existsItem) return;

  if (existsItem.quantity === 1) {
    return cartItems.filter((el) => el.id !== existsItem.id);
  }

  return cartItems.map((el) =>
    el.id === existsItem.id
      ? {
          ...existsItem,
          quantity: --existsItem.quantity,
          amount: existsItem.price * existsItem.quantity,
        }
      : el,
  );
};

export const cleanProductFromCart = (cartItems, id) => {
  return cartItems.filter((el) => el.id !== id);
};
