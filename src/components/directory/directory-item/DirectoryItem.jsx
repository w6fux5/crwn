import React from 'react';
import styles from './DirectoryItem.module.scss';

export const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <div className={styles['category-container']}>
      <div
        className={styles['background-image']}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.category}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
