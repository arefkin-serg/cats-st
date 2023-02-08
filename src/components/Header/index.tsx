import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import './header.scss';

const Header = () => {
  return (
    <header className="header container container--wide">
      <div className="header__content">
        <Link to="/" className="header__logo-link">
          <img src={logo} className="header__logo-img" alt="logo" />
        </Link>
        <h1 className="header__page-title">Checkout</h1>
      </div>
    </header>
  );
};

export default Header;
