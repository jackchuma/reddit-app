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

  const [selectedCountry, setSelectedCountry] = useState({name: 'United States', id: 'united-states'});
  const [selectedState, setSelectedState] = useState({name: 'All', id: 'All'});

  const handleStateClick = () => {
    const stateBox = document.getElementById('state-list');
    const countryBox = document.getElementById('country-list');
    const dotsBox = document.getElementById('dots-dropdown');

    if (stateBox.style.display === 'flex') {
      stateBox.style.display = 'none';
    } else {
      stateBox.style.display = 'flex';
      countryBox.style.display = 'none';
      dotsBox.style.display = 'none';
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
    const stateBox = document.getElementById('state-list');
    const countryBox = document.getElementById('country-list');
    const dotsBox = document.getElementById('dots-dropdown');

    if (countryBox.style.display === 'flex') {
      countryBox.style.display = 'none';
    } else {
      countryBox.style.display = 'flex';
      stateBox.style.display = 'none';
      dotsBox.style.display = 'none';
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

  const handleHotClick = (e) => {
    //const stateMenu = document.getElementById('state-menu');

    //if (selectedCountry.name === 'United States') {
      //stateMenu.style.display = 'flex';
    //}

    //const countryMenu = document.getElementById('country-menu');
    //countryMenu.style.display = 'flex';

    const hotButton = document.getElementById('hot');
    hotButton.style.backgroundColor = '#e5e6e7';
    hotButton.style.color = '#0079d3';

    const newButton = document.getElementById('new');
    newButton.style.backgroundColor = 'white';
    newButton.style.color = '#878a8c';

    const topButton = document.getElementById('top');
    topButton.style.backgroundColor = 'white';
    topButton.style.color = '#878a8c';

    const dots = document.getElementById('extra-menu');
    dots.style.display = 'flex';

    const risingMenu = document.getElementById('rising-view');
    risingMenu.style.display = 'none';
  }

  const handleNewClick = (e) => {

    const stateMenu = document.getElementById('state-menu');
    stateMenu.style.display = 'none';

    const countryMenu = document.getElementById('country-menu');
    countryMenu.style.display = 'none';

    const hotButton = document.getElementById('hot');
    hotButton.style.backgroundColor = 'white';
    hotButton.style.color = '#878a8c';

    const newButton = document.getElementById('new');
    newButton.style.backgroundColor = '#e5e6e7';
    newButton.style.color = '#0079d3';

    const topButton = document.getElementById('top');
    topButton.style.backgroundColor = 'white';
    topButton.style.color = '#878a8c';

    const risingMenu = document.getElementById('rising-view');
    risingMenu.style.display = 'none';
  };

  const handleTopClick = (e) => {
    const stateMenu = document.getElementById('state-menu');
    stateMenu.style.display = 'none';

    const countryMenu = document.getElementById('country-menu');
    countryMenu.style.display = 'none';

    const hotButton = document.getElementById('hot');
    hotButton.style.backgroundColor = 'white';
    hotButton.style.color = '#878a8c';

    const newButton = document.getElementById('new');
    newButton.style.backgroundColor = 'white';
    newButton.style.color = '#878a8c';

    const topButton = document.getElementById('top');
    topButton.style.backgroundColor = '#e5e6e7';
    topButton.style.color = '#0079d3';

    const risingMenu = document.getElementById('rising-view');
    risingMenu.style.display = 'none';
  }

  const handleDotsClick = () => {
    const stateBox = document.getElementById('state-list');
    const countryBox = document.getElementById('country-list');
    const dotsBox = document.getElementById('dots-dropdown');

    if (dotsBox.style.display === 'flex') {
      dotsBox.style.display = 'none';
    } else {
      dotsBox.style.display = 'flex';
      stateBox.style.display = 'none';
      countryBox.style.display = 'none';
    }
  };

  const handleRisingClick = (e) => {
    const stateMenu = document.getElementById('state-menu');
    stateMenu.style.display = 'none';

    const countryMenu = document.getElementById('country-menu');
    countryMenu.style.display = 'none';

    const hotButton = document.getElementById('hot');
    hotButton.style.backgroundColor = 'white';
    hotButton.style.color = '#878a8c';

    const newButton = document.getElementById('new');
    newButton.style.backgroundColor = 'white';
    newButton.style.color = '#878a8c';

    const topButton = document.getElementById('top');
    topButton.style.backgroundColor = 'white';
    topButton.style.color = '#878a8c';

    const dotsMenu = document.getElementById('extra-menu');
    dotsMenu.style.display = 'none';

    const dotsList = document.getElementById('dots-dropdown');
    dotsList.style.display = 'none';

    const risingButton = document.getElementById('rising-view');
    risingButton.style.display = 'flex';
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
        <div className='country-menu' id='country-menu'>
          <button className='country-menu-button-visible' onClick={handleCountryClick}>{selectedCountry.name} <IoIosArrowDown /></button>
          <div className='country-list' id='country-list'>
            {countryList.map((countryName) => {
              return <button key={countryName.id} id={countryName.id} value={countryName.name} onClick={handleCountryListClick}>{countryName.name}</button>
            })}
          </div>
        </div>
        <div className='state-menu' id='state-menu'>
          <button className='state-menu-button-visible' onClick={handleStateClick}>{selectedState.id} <IoIosArrowDown /></button>
          <div className='state-list' id='state-list'>
            {stateList.map((stateName) => {
              return <button key={stateName.id} id={stateName.id} value={stateName.name} onClick={handleStateListClick}>{stateName.name}</button>
            })}
          </div>
        </div>
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
        <div className='extra-menu' id='extra-menu'>
          <button className='dots' onClick={handleDotsClick}>&#8226;&#8226;&#8226;</button>
          <div className='dots-dropdown' id='dots-dropdown'>
            <Link style={{textDecoration: 'none'}} to='/rising'>
              <button id='rising' value='rising' onClick={handleRisingClick}><BsArrowUpRight /> Rising</button>
            </Link>
          </div>
        </div>
        <div className='rising' id='rising-view'>
          <BsArrowUpRight />
          <p>Rising</p>
        </div>
      </div>
    </div>
  );
};

export default Filters;
