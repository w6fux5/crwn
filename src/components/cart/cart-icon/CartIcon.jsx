import React, { useContext } from 'react';

import { CartContext } from '../../../contexts';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

export const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  return (
    <div className={styles.container} onClick={toggleCart}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <span className={styles['item-count']}>{cartCount}</span>
    </div>
  );
};
