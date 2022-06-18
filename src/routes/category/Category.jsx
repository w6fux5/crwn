import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { categorySelector } from '../../store';

import { ProductCard } from '../../components';
import styles from './Category.module.scss';

export const Category = () => {
  const { category } = useParams();

  const categoryMap = useSelector(categorySelector.selectorCategoriesMap);

  const [products, setProducts] = useState(categoryMap[category]);

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
