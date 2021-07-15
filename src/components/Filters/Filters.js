import React, { useState } from 'react';
import './Filters.css';
import {FaFire} from 'react-icons/fa';
import {BsGearWide} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {BsViewStacked, BsArrowUpRight} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {stateList} from './states';
import {countryList} from './countries';

function Filters() {

  const [selectedCountry, setSelectedCountry] = useState({name: 'United States', id: 'united-states'});
  const [selectedState, setSelectedState] = useState({name: 'All', id: 'all'});

  const handleStateClick = () => {
    const box = document.getElementById('state-list');

    if (box.style.display === 'flex') {
      box.style.display = 'none';
    } else {
      box.style.display = 'flex';
    }
  };

  const handleStateListClick = (e) => {
    const oldLink = document.getElementById(selectedState.id);
    oldLink.style.color = '#878a8c';
    setSelectedState({name: e.target.value, id: e.target.id});

    const box = document.getElementById('state-list');
    const newLink = document.getElementById('new');
    const selected = document.getElementById(e.target.id);
    
    box.style.display = 'none';
    newLink.style.marginLeft = 0;

    selected.style.color = '#0079d3';
  };

  const handleCountryClick = () => {
    const box = document.getElementById('country-list');
    if (box.style.display === 'flex') {
      box.style.display = 'none';
    } else {
      box.style.display = 'flex';
    }
  };

  const handleCountryListClick = (e) => {
    const oldLink = document.getElementById(selectedCountry.id);
    oldLink.style.color = '#878a8c';
    setSelectedCountry({name: e.target.value, id: e.target.id});

    const box = document.getElementById('country-list');
    const selected = document.getElementById(e.target.id);
    box.style.display = 'none';
    selected.style.color = '#0079d3';

    const stateMenu = document.getElementById('state-menu');

    if (e.target.value === 'United States') {
      stateMenu.style.display = 'flex';
    } else {
      stateMenu.style.display = 'none';
    }
  };

  const handleDotsClick = () => {
    const box = document.getElementById('dots-dropdown');
    if (box.style.display === 'flex') {
      box.style.display = 'none';
    } else {
      box.style.display = 'flex';
    }
  };

  const handleViewClick = () => {
    const box = document.getElementById('view-dropdown');
    if (box.style.display === 'flex') {
      box.style.display = 'none';
    } else {
      box.style.display = 'flex';
    }
  };

  return (
    <div className="Filters">
      <div className='left'>
        <div className='hot'>
          <FaFire />
         <p>Hot</p>
        </div>
        <div className='country-menu'>
          <button className='country-menu-button-visible' onClick={handleCountryClick}>{selectedCountry.name} <IoIosArrowDown /></button>
          <div className='country-list' id='country-list'>
            {countryList.map((countryName) => {
              return <button id={countryName.id} value={countryName.name} onClick={handleCountryListClick}>{countryName.name}</button>
            })}
          </div>
        </div>
        <div className='state-menu' id='state-menu'>
          <button className='state-menu-button-visible' onClick={handleStateClick}>{selectedState.name} <IoIosArrowDown /></button>
          <div className='state-list' id='state-list'>
            {stateList.map((stateName) => {
              return <button id={stateName.id} value={stateName.name} onClick={handleStateListClick}>{stateName.name}</button>
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
          <button className='dots' onClick={handleDotsClick}>&#8226;&#8226;&#8226;</button>
          <div className='dots-dropdown' id='dots-dropdown'>
            <button id='rising' value='rising'><BsArrowUpRight /> Rising</button>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='view'>
          <button className='view-button' onClick={handleViewClick}><BsViewStacked /> <IoIosArrowDown /></button>
          <div className='view-dropdown' id='view-dropdown'>
            <button id='card'>Card</button>
            <button id='classic'>Classic</button>
            <button id='compact'>Compact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
