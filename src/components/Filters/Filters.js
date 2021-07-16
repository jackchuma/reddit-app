import React, { useState } from 'react';
import './Filters.css';
import {FaFire} from 'react-icons/fa';
import {BsGearWide, BsLayoutThreeColumns} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {BsViewStacked, BsArrowUpRight} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import {stateList} from './states';
import {countryList} from './countries';
import {VscListFlat} from 'react-icons/vsc';

function Filters() {

  const [selectedCountry, setSelectedCountry] = useState({name: 'United States', id: 'united-states'});
  const [selectedState, setSelectedState] = useState({name: 'All', id: 'All'});
  const [selectedView, setSelectedView] = useState({icon: <BsViewStacked />, id: 'card'})

  const handleStateClick = () => {
    const stateBox = document.getElementById('state-list');
    const countryBox = document.getElementById('country-list');
    const dotsBox = document.getElementById('dots-dropdown');
    const viewBox = document.getElementById('view-dropdown');

    if (stateBox.style.display === 'flex') {
      stateBox.style.display = 'none';
    } else {
      stateBox.style.display = 'flex';
      countryBox.style.display = 'none';
      dotsBox.style.display = 'none';
      viewBox.style.display = 'none';
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
    const viewBox = document.getElementById('view-dropdown');

    if (countryBox.style.display === 'flex') {
      countryBox.style.display = 'none';
    } else {
      countryBox.style.display = 'flex';
      stateBox.style.display = 'none';
      dotsBox.style.display = 'none';
      viewBox.style.display = 'none';
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
    const stateBox = document.getElementById('state-list');
    const countryBox = document.getElementById('country-list');
    const dotsBox = document.getElementById('dots-dropdown');
    const viewBox = document.getElementById('view-dropdown');

    if (dotsBox.style.display === 'flex') {
      dotsBox.style.display = 'none';
    } else {
      dotsBox.style.display = 'flex';
      stateBox.style.display = 'none';
      countryBox.style.display = 'none';
      viewBox.style.display = 'none';
    }
  };

  const handleViewClick = () => {
    const stateBox = document.getElementById('state-list');
    const countryBox = document.getElementById('country-list');
    const dotsBox = document.getElementById('dots-dropdown');
    const viewBox = document.getElementById('view-dropdown');

    if (viewBox.style.display === 'flex') {
      viewBox.style.display = 'none';
    } else {
      viewBox.style.display = 'flex';
      stateBox.style.display = 'none';
      countryBox.style.display = 'none';
      dotsBox.style.display = 'none';
    }
  };

  const handleViewListClick = (e) => {
    const oldLink = document.getElementById(selectedView.id);
    oldLink.style.color = '#878a8c';

    if (e.target.id === 'card') {
      setSelectedView({icon: <BsViewStacked />, id: 'card'});
    } else if (e.target.id === 'classic') {
      setSelectedView({icon: <BsLayoutThreeColumns style={{transform: 'rotate(90deg)'}} />, id: 'classic'});
    } else {
      setSelectedView({icon: <VscListFlat />, id: 'compact'});
    }

    const box = document.getElementById('view-dropdown');
    const selected = document.getElementById(e.target.id);
    box.style.display = 'none';
    selected.style.color = '#0079d3';
  }

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
          <button className='state-menu-button-visible' onClick={handleStateClick}>{selectedState.id} <IoIosArrowDown /></button>
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
          <button className='view-button' onClick={handleViewClick}>{selectedView.icon} <IoIosArrowDown /></button>
          <div className='view-dropdown' id='view-dropdown'>
            <button id='card' onClick={handleViewListClick}><BsViewStacked /> Card</button>
            <button id='classic' onClick={handleViewListClick}><BsLayoutThreeColumns style={{transform: 'rotate(90deg)'}} /> Classic</button>
            <button id='compact' onClick={handleViewListClick}><VscListFlat /> Compact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
