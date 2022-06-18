import React from 'react';
import { useSelector } from 'react-redux';

import { CategoryPreview, Spinner } from '../../components';

import { categorySelector } from '../../store';

import styles from './Categories.module.scss';

export const Categories = () => {
  const categoryMap = useSelector(categorySelector.selectorCategoriesMap);
  const isLoading = useSelector(categorySelector.selectCategoryLoading);
  const error = useSelector(categorySelector.selectCategoryError);

  return (
    <div className={styles.container}>
      {isLoading && <Spinner />}
      {error && <h3>{error}</h3>}

      {Object.entries(categoryMap).map(([title, products]) => (
        <CategoryPreview key={title} title={title} products={products} />
      ))}
    </div>
  );
};
