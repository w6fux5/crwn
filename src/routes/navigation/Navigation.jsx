import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils';

import { CartIcon, CartDropdown } from '../../components';

import { UserContext, CartContext } from '../../contexts';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className={styles.navigation}>
        <Link to="/" className={styles['logo-container']}>
          <CrwnLogo />
        </Link>

        <div className={styles['nav-links-container']}>
          <Link to="/shop" className={styles['nav-link']}>
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className={styles['nav-link']}>
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className={styles['nav-link']}>
              Sign In
            </Link>
          )}

          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};
