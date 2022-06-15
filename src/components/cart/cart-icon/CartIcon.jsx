import React, { useContext } from 'react';

import { CartContext } from '../../../contexts';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

export const CartIcon = () => {
  const { toggleCart, cartCount } = useContext(CartContext);

  return (
    <div className={styles.container} onClick={toggleCart}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <span className={styles['item-count']}>{cartCount}</span>
    </div>
  );
};
