/**
 *  Default button
 *  Inverted button
 *  Google sign in button
 */

import React from 'react';
import styles from './Button.module.scss';

const BUTTON_TYPE_CLASSES = {
  google: styles['google-sign-in'],
  inverted: styles.inverted,
};

export const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`
        ${styles['button-container']} 
        ${buttonType && BUTTON_TYPE_CLASSES[buttonType]}
      `}
      {...otherProps}
    >
      {children}
    </button>
  );
};
