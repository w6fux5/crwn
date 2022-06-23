import React, { useState } from 'react';

import { FormInput, Button } from '../../components';

import { useActions } from '../../hooks';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils';

import styles from './SignUpForm.module.scss';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const { signUpStart } = useActions();

  const handleChange = ({ target }) => {
    const { id, value } = target || {};

    setFormFields((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validForm = () => {
    if (password.length < 6) {
      alert('密碼至少6位數');
      return false;
    }

    if (password !== confirmPassword) {
      alert('密碼不一致');
      return false;
    }

    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const isValid = validForm();
    if (!isValid) return;

    try {
      signUpStart(email, password, name);

      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles['sign-up-container']}>
      <h2>沒有帳號嗎？</h2>
      <span>使用電子信箱和密碼註冊</span>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Name"
          inputOptions={{
            id: 'name',
            type: 'text',
            value: name,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            id: 'email',
            type: 'email',
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            id: 'password',
            type: 'password',
            value: password,
            onChange: handleChange,
            required: true,
            autoComplete: 'off',
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            id: 'confirmPassword',
            type: 'password',
            value: confirmPassword,
            onChange: handleChange,
            required: true,
            autoComplete: 'off',
          }}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </section>
  );
};
