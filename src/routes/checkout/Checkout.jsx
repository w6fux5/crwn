import React, { useContext } from 'react';
import { CheckoutItem } from '../../components';
import { CartContext } from '../../contexts';
import styles from './Checkout.module.scss';

const HEADER_LIST = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

export const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFormCart,
    clearItemFromCart,
    totalAmount,
  } = useContext(CartContext);
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
            addItemToCart={addItemToCart}
            removeItemFormCart={removeItemFormCart}
            clearItemFromCart={clearItemFromCart}
          />
        );
      })}
      <span className={styles.total}>Total: ${totalAmount}</span>
    </section>
  );
};
