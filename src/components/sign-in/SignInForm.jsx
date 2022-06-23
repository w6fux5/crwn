import React, { useState } from 'react';

import { FormInput, Button } from '../../components';

import styles from './SignInForm.module.scss';
import { useActions } from '../../hooks/useActions';

const defaultFormFields = {
  signInEmail: '',
  signInPassword: '',
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { signInEmail, signInPassword } = formFields;

  const { googleSignIn, emailSignIn } = useActions();

  const handleChange = ({ target }) => {
    const { id, value } = target || {};
    setFormFields((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validForm = () => {
    if (signInPassword.length < 6) {
      alert('密碼至少6位數');
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const isValid = validForm();

    if (!isValid) return;

    emailSignIn({ email: signInEmail, password: signInPassword });
    setFormFields(defaultFormFields);
  };

  return (
    <section className={styles['sign-in-container']}>
      <h2>已經有帳號了？</h2>
      <span>輸入帳號密碼登入</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            id: 'signInEmail',
            type: 'email',
            value: signInEmail,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            id: 'signInPassword',
            type: 'password',
            value: signInPassword,
            onChange: handleChange,
            required: true,
            autoComplete: 'off',
          }}
        />
        <div className={styles['button-container']}>
          <Button type="submit">登入</Button>
          <Button buttonType="google" type="button" onClick={googleSignIn}>
            google 帳號登入
          </Button>
        </div>
      </form>
    </section>
  );
};
