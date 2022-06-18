import React from 'react';
import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container} />
    </div>
  );
};
