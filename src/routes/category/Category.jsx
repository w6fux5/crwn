import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryContext } from '../../contexts';

import { ProductCard } from '../../components';
import styles from './Category.module.scss';

export const Category = () => {
  const { category } = useParams();

  const { categoryMap } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <div className={styles.container}>
      {products?.map(({ id, name, imageUrl, price }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          image={imageUrl}
          price={price}
        />
      ))}
    </div>
  );
};
