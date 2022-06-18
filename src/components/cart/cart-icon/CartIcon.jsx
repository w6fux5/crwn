import React from 'react';

import { useSelector } from 'react-redux';

import { cartSelector } from '../../../store';

import { useActions } from '../../../hooks';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

export const CartIcon = () => {
  const { toggleCart } = useActions();

  const cartCount = useSelector(cartSelector.selectCartCount);

  return (
    <div className={styles.container} onClick={toggleCart}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <span className={styles['item-count']}>{cartCount}</span>
    </div>
  );
};
