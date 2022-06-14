import React, { useContext } from 'react';

import { CategoryPreview } from '../../components';
import { CategoryContext } from '../../contexts';
import styles from './Categories.module.scss';

export const Categories = () => {
  const { categoryMap } = useContext(CategoryContext);
  return (
    <div className={styles.container}>
      {Object.entries(categoryMap).map(([title, products]) => (
        <CategoryPreview key={title} title={title} products={products} />
      ))}
    </div>
  );
};
