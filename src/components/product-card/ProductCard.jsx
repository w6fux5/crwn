import React from 'react';

import { Button } from '../../components';

import styles from './ProductCard.module.scss';

export const ProductCard = ({ name, image, price }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button buttonType="inverted">ADD</Button>
    </div>
  );
};
