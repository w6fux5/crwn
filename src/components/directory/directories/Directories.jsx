import React from 'react';
import { DirectoryItem } from '../..';
import styles from './Directories.module.scss';

export const Directories = ({ directories }) => {
  return (
    <section className={styles['directory-container']}>
      {directories.map((directory) => (
        <DirectoryItem key={directory.id} {...directory} />
      ))}
    </section>
  );
};
