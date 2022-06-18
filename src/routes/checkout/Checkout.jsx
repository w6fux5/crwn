import React from 'react';

import { useSelector } from 'react-redux';

import { cartSelector } from '../../store';

import { CheckoutItem } from '../../components';

import { useActions } from '../../hooks';

import styles from './Checkout.module.scss';

const HEADER_LIST = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

export const Checkout = () => {
  const { addItemToCart, removeItemFormCart, clearItemFromCart } = useActions();

  const cartItems = useSelector(cartSelector.selectCartItems);
  const totalAmount = useSelector(cartSelector.selectCartTotalAmount);

  const addHandler = (item) => {
    addItemToCart(cartItems, item);
  };

  const removeHandler = (id) => {
    removeItemFormCart(cartItems, id);
  };

  const clearHandler = (id) => {
    clearItemFromCart(cartItems, id);
  };
  return (
    <section className={styles.container}>
      <header className={styles['checkout-header']}>
        {HEADER_LIST.map((h) => (
          <div key={h} className={styles['header-block']}>
            {h}
          </div>
        ))}
      </header>

      {cartItems.map((item) => {
        return (
          <CheckoutItem
            key={item.id}
            item={item}
            addItemToCart={addHandler}
            removeItemFormCart={removeHandler}
            clearItemFromCart={clearHandler}
          />
        );
      })}
      <span className={styles.total}>Total: ${totalAmount}</span>
    </section>
  );
};
