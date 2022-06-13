import React, { useContext } from 'react';

import { ProductCard } from '../../components';
import { ProductContext } from '../../contexts';
import styles from './Shop.module.scss';

export const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className={styles.container}>
      {products.map(({ id, name, imageUrl, price }) => (
        <ProductCard key={id} name={name} image={imageUrl} price={price} />
      ))}
    </div>
  );
};
