import React from 'react';
import styles from './CheckoutItem.module.scss';

export const CheckoutItem = ({
  item,
  addItemToCart,
  removeItemFormCart,
  clearItemFromCart,
}) => {
  const { id, name, quantity, image, price } = item || {};

  const addItemHandler = () => {
    addItemToCart(item);
  };

  const removeItemHandler = () => {
    removeItemFormCart(id);
  };

  const clearHandler = () => {
    clearItemFromCart(id);
  };

  return (
    <div className={styles.container} key={id}>
      <div className={styles['image-container']}>
        <img src={image} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>

      <div className={styles.quantity}>
        <span className={styles.arrow} onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className={styles.value}>{quantity}</span>
        <span className={styles.arrow} onClick={addItemHandler}>
          &#10095;
        </span>
      </div>

      <span className={styles.price}>{price}</span>

      <div className={styles['remove-button']} onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  );
};
