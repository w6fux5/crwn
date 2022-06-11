import React from 'react';
import { Category } from '../category-item';
import styles from './Directory.module.scss';

export const Directory = ({ categories }) => {
  return (
    <section className={styles['directory-container']}>
      {categories.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </section>
  );
};
