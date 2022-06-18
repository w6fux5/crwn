import React from 'react';

import { useSelector } from 'react-redux';

import { cartSelector } from '../../store';

import { Button } from '../../components';

import { useActions } from '../../hooks';

import styles from './ProductCard.module.scss';

export const ProductCard = ({ id, name, image, price }) => {
  const { addItemToCart } = useActions();

  const cartItems = useSelector(cartSelector.selectCartItems);

  const addProductToCard = () =>
    addItemToCart(cartItems, { name, image, price, id });

  return (
    <div className={styles.container}>
      <img src={image} alt={name} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button onClick={addProductToCard} buttonType="inverted">
        ADD
      </Button>
    </div>
  );
};
