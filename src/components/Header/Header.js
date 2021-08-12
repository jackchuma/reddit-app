import React from 'react';
import './Header.css';
import logo from './Logo.png';
import searchIcon from './search-icon.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from './searchSlice';
import { useHistory } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  let history = useHistory();

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value))
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push('/filtered');
    }
  }

  return (
    <div className="Header">
      <Link style={{textDecoration: 'none', color: '#1a1a1b'}} to='/'>
        <div className="logo">
          <img src={logo} alt='App Logo' />
          <p className="logo-text">Jack's Reddit App</p>
        </div>
      </Link>
      <div className='search'>
        <Link to='/filtered'>
          <img src={searchIcon} alt='Search Icon'></img>
        </Link>
        <input type='text' placeholder='Search' id='search' value={searchTerm} onChange={onSearchChangeHandler} onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
}

export default Header;
