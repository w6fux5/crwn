import React, { useState } from 'react';

import { FormInput, Button } from '..';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword,
} from '../../utils';

import styles from './SignInForm.module.scss';

const defaultFormFields = {
  signInEmail: '',
  signInPassword: '',
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { signInEmail, signInPassword } = formFields;

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

    try {
      const { user } = await signAuthUserWithEmailAndPassword(
        signInEmail,
        signInPassword,
      );
      console.log('email and password login', user);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('帳號不存在');
          break;

        case 'auth/wrong-password':
          alert('無效的帳號或是密碼');
          break;

        case 'auth/too-many-requests':
          alert('太多請求');
          break;

        default:
          console.log(error?.code || error);
      }
    }
  };

  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    console.log('google login', user);
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
          <Button buttonType="google" type="button" onClick={loginWithGoogle}>
            google 帳號登入
          </Button>
        </div>
      </form>
    </section>
  );
};
