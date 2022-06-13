import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import styles from './CartIcon.module.scss';

export const CartIcon = () => {
  return (
    <div className={styles.container}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <span className={styles['item-count']}>0</span>
    </div>
  );
};
