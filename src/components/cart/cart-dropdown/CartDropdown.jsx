import React, { useContext } from 'react';

import { CartContext } from '../../../contexts';
import { Button, CartItem } from '../../../components';
import styles from './CartDropdown.module.scss';

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles['cart-items']}>
        {cartItems.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
      </div>
      <Button>checkout</Button>
    </div>
  );
};
