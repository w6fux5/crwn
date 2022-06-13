import React, { useContext } from 'react';

import { Button } from '../../components';

import { CartContext } from '../../contexts';

import styles from './ProductCard.module.scss';

export const ProductCard = ({ id, name, image, price }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCard = () => addItemToCart({ name, image, price, id });

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
