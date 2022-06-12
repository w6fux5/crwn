import React from 'react';
import { SignUpForm, SignInForm } from '../../components';
import styles from './Auth.module.scss';

export const Auth = () => {
  return (
    <div className={styles.container}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
