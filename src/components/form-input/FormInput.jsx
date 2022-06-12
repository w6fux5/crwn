import React from 'react';
import styles from './FormInput.module.scss';

export const FormInput = ({ label, inputOptions }) => {
  const { id, value } = inputOptions;
  return (
    <div className={styles.group}>
      <input className={styles['form-input']} {...inputOptions} />

      {label && (
        <label
          className={`${value.length > 0 && styles.shrink} ${
            styles['form-input-label']
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};
