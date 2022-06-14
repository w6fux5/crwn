import React from 'react';
import { ProductCard } from '../../../components';
import styles from './CategoryPreview.module.scss';

export const CategoryPreview = ({ title, products }) => {
  return (
    <div className={styles.container}>
      <h2>
        <span className={styles.title}>{title.toUpperCase()}</span>
      </h2>
      <div className={styles.preview}>
        {products.slice(0, 4).map(({ id, name, imageUrl, price }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            image={imageUrl}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};
