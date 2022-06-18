import React from 'react';
import { useSelector } from 'react-redux';

import { CategoryPreview } from '../../components';

import { categorySelector } from '../../store';

import styles from './Categories.module.scss';

export const Categories = () => {
  const categoryMap = useSelector(categorySelector.selectorCategoriesMap);

  return (
    <div className={styles.container}>
      {Object.entries(categoryMap).map(([title, products]) => (
        <CategoryPreview key={title} title={title} products={products} />
      ))}
    </div>
  );
};
