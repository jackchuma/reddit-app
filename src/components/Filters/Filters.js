import React from 'react';
import './Filters.css';
import {FaFire} from 'react-icons/fa';
import {BsGearWide} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {BsViewStacked} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {stateList} from './states';
import {countryList} from './countries';

function Filters() {

  const handleStateClick = () => {
    const box = document.getElementById('state-list');
    const newLink = document.getElementById('new');
    if (box.style.display === 'flex') {
      box.style.display = 'none';
      newLink.style.marginLeft = 0;
    } else {
      box.style.display = 'flex';
      newLink.style.marginLeft = '-77px';
    }
  }

  const handleCountryClick = () => {
    const box = document.getElementById('country-list');
    if (box.style.display === 'flex') {
      box.style.display = 'none';
    } else {
      box.style.display = 'flex';
    }
  }

  return (
    <div className="Filters">
      <div className='left'>
        <div className='hot'>
          <FaFire />
         <p>Hot</p>
        </div>
        <div className='country-menu'>
          <button className='country-menu-button-visible' onClick={handleCountryClick}>United States <IoIosArrowDown /></button>
          <div className='country-list' id='country-list'>
            {countryList.map((countryName) => {
              return <button id={countryName}>{countryName}</button>
            })}
          </div>
        </div>
        <div className='state-menu'>
          <button className='state-menu-button-visible' onClick={handleStateClick}>All <IoIosArrowDown /></button>
          <div className='state-list' id='state-list'>
            {stateList.map((stateName) => {
              return <button id={stateName}>{stateName}</button>
            })}
          </div>
        </div>
        <div className='new' id='new'>
          <BsGearWide />
          <p>New</p>
        </div>
        <div className='top'>
          <AiOutlineArrowUp />
          <p>Top</p>
        </div>
        <div className='extra-menu'>
          <p className='dots'>&#8226;&#8226;&#8226;</p>
        </div>
      </div>
      <div className='right'>
        <div className='view'>
          <BsViewStacked />
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Filters;
