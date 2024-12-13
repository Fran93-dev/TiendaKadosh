// src/components/Header.js
import React from 'react';
import Navbar from './Navbar';

const Header = () => (
  <header className="header-v2">
    <div className="container-menu-desktop trans-03">
      <div className="wrap-menu-desktop">
        <Navbar />
      </div>
    </div>
  </header>
);

export default Header;
