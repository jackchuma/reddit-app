import React from 'react';
import './Header.css';
import logo from './Logo.png';
import searchIcon from './search-icon.png';

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt='App Logo' />
        <p className="logo-text">Jack's Reddit App</p>
      </div>
      <div className='search'>
        <img src={searchIcon} alt='Search Icon'></img>
        <input type='search' placeholder='Search' />
      </div>
      <div className='buttons'>
        <p className='log-in-button'>Log In</p>
        <p className='sign-up-button'>Sign Up</p>
      </div>
    </div>
  );
}

export default Header;
