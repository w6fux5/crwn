import React from 'react';
import { Button } from '../../components';
import styles from './CartDropdown.module.scss';

export const CartDropdown = () => {
  return (
    <div className={styles.container}>
      <div className={styles['cart-items']} />
      <Button>Go to checkout</Button>
    </div>
  );
};
