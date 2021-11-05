import React, { useState } from 'react';
import './Filters.css';
import {FaFire} from 'react-icons/fa';
import {BsGearWide} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {BsArrowUpRight} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {stateList} from './states';
import {countryList} from './countries';
import {Link} from 'react-router-dom';

function Filters() {

  const handleHotClick = (e) => {
    const hotButton = document.getElementById('hot');
    hotButton.style.backgroundColor = '#e5e6e7';
    hotButton.style.color = '#0079d3';

    const newButton = document.getElementById('new');
    newButton.style.backgroundColor = 'white';
    newButton.style.color = '#878a8c';

    const topButton = document.getElementById('top');
    topButton.style.backgroundColor = 'white';
    topButton.style.color = '#878a8c';
  }

  const handleNewClick = (e) => {
    const hotButton = document.getElementById('hot');
    hotButton.style.backgroundColor = 'white';
    hotButton.style.color = '#878a8c';

    const newButton = document.getElementById('new');
    newButton.style.backgroundColor = '#e5e6e7';
    newButton.style.color = '#0079d3';

    const topButton = document.getElementById('top');
    topButton.style.backgroundColor = 'white';
    topButton.style.color = '#878a8c';
  };

  const handleTopClick = (e) => {
    const hotButton = document.getElementById('hot');
    hotButton.style.backgroundColor = 'white';
    hotButton.style.color = '#878a8c';

    const newButton = document.getElementById('new');
    newButton.style.backgroundColor = 'white';
    newButton.style.color = '#878a8c';

    const topButton = document.getElementById('top');
    topButton.style.backgroundColor = '#e5e6e7';
    topButton.style.color = '#0079d3';
  }

  return (
    <div className="Filters">
      <div className='left'>
        <Link style={{textDecoration: 'none'}} to='/hot'>
          <div className='hot' id='hot' onClick={handleHotClick}>
            <FaFire />
            <p>Hot</p>
          </div>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/new'>
          <div onClick={handleNewClick} className='new' id='new'>
            <BsGearWide />
            <p>New</p>
          </div>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/top'>
          <div className='top' id='top' onClick={handleTopClick}>
            <AiOutlineArrowUp />
            <p>Top</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Filters;
