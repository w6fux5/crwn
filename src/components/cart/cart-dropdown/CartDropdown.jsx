import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { cartSelector } from '../../../store';

import { Button, CartItem } from '../../../components';
import styles from './CartDropdown.module.scss';

export const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(cartSelector.selectCartItems);

  const checkHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className={styles.container}>
      <div className={styles['cart-items']}>
        {cartItems.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
      </div>
      <Button onClick={checkHandler}>checkout</Button>
    </div>
  );
};
