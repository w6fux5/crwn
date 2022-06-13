import React from 'react';
import styles from './CartItem.module.scss';

export const CartItem = ({ name, quantity, price, amount, image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} />
      <div className={styles['item-details']}>
        <span className={styles.name}>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
        <span>Amount: {amount}</span>
      </div>
    </div>
  );
};
