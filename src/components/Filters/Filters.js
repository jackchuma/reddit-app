import React from 'react';
import './Filters.css';
import {FaFire} from 'react-icons/fa';
import {BsGearWide} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {BsViewStacked} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';

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
            <button>Everywhere</button>
            <button id='united-states'>United States</button>
            <button>Argentina</button>
            <button>Australia</button>
            <button>Bulgaria</button>
            <button>Canada</button>
            <button>Chile</button>
            <button>Colombia</button>
            <button>Croatia</button>
            <button>Czech Republic</button>
            <button>Finland</button>
            <button>France</button>
            <button>Germany</button>
            <button>Greece</button>
            <button>Hungary</button>
            <button>Iceland</button>
            <button>India</button>
            <button>Ireland</button>
            <button>Italy</button>
            <button>Japan</button>
            <button>Malaysia</button>
            <button>Mexico</button>
            <button>New Zealand</button>
            <button>Philippines</button>
            <button>Poland</button>
            <button>Portugal</button>
            <button>Puerto Rico</button>
            <button>Romania</button>
            <button>Serbia</button>
            <button>Singapore</button>
            <button>Spain</button>
            <button>Sweden</button>
            <button>Taiwan</button>
            <button>Thailand</button>
            <button>Turkey</button>
            <button>United Kingdom</button>
          </div>
        </div>
        <div className='state-menu'>
          <button className='state-menu-button-visible' onClick={handleStateClick}>All <IoIosArrowDown /></button>
          <div className='state-list' id='state-list'>
            <button id='all'>All</button>
            <button>Alaska</button>
            <button>Alabama</button>
            <button>Arkansas</button>
            <button>Arizona</button>
            <button>California</button>
            <button>Colorado</button>
            <button>Connecticut</button>
            <button>District of Colombia</button>
            <button>Delaware</button>
            <button>Florida</button>
            <button>Georgia</button>
            <button>Hawaii</button>
            <button>Iowa</button>
            <button>Idaho</button>
            <button>Illinois</button>
            <button>Indiana</button>
            <button>Kansas</button>
            <button>Kentucky</button>
            <button>Louisiana</button>
            <button>Massachusetts</button>
            <button>Maryland</button>
            <button>Maine</button>
            <button>Michigan</button>
            <button>Minnesota</button>
            <button>Missouri</button>
            <button>Mississippi</button>
            <button>Montana</button>
            <button>North Carolina</button>
            <button>North Dakota</button>
            <button>Nebraska</button>
            <button>New Hampshire</button>
            <button>New Jersey</button>
            <button>New Mexico</button>
            <button>Nevada</button>
            <button>New York</button>
            <button>Ohio</button>
            <button>Oklahoma</button>
            <button>Oregon</button>
            <button>Pennsylvania</button>
            <button>Rhode Island</button>
            <button>South Carolina</button>
            <button>South Dakota</button>
            <button>Tennessee</button>
            <button>Texas</button>
            <button>Utah</button>
            <button>Virginia</button>
            <button>Vermont</button>
            <button>Washington</button>
            <button>Wisconsin</button>
            <button>West Virginia</button>
            <button>Wyoming</button>
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
