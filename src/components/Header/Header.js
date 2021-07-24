import React from 'react';
import './Header.css';
import logo from './Logo.png';
import searchIcon from './search-icon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link style={{textDecoration: 'none', color: '#1a1a1b'}} to='/'>
        <div className="logo">
          <img src={logo} alt='App Logo' />
          <p className="logo-text">Jack's Reddit App</p>
        </div>
      </Link>
      <div className='search'>
        <img src={searchIcon} alt='Search Icon'></img>
        <input type='search' placeholder='Search' />
      </div>
    </div>
  );
}

export default Header;
