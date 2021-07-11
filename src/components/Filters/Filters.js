import React from 'react';
import './Filters.css';
import {FaFire} from 'react-icons/fa';
import {BsGearWide} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {BsViewStacked} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';

function Filters() {
  return (
    <div className="Filters">
      <div className='left'>
        <div className='hot'>
          <FaFire />
         <p>Hot</p>
        </div>
        <div className='country-container'>
          <select className='country' defaultValue='United States'>
            <option value='Everywhere'>Everywhere</option>
            <option value='United States' selected>United States</option>
            <option value='Argentina'>Argentina</option>
            <option value='Australia'>Australia</option>
            <option value='Bulgaria'>Bulgaria</option>
            <option value='Canada'>Canada</option>
            <option value='Chile'>Chile</option>
            <option value='Colombia'>Colombia</option>
            <option value='Croatia'>Croatia</option>
            <option value='Czech Republic'>Czech Republic</option>
            <option value='Finland'>Finland</option>
            <option value='France'>France</option>
            <option value='Germany'>Germany</option>
            <option value='Greece'>Greece</option>
            <option value='Hungary'>Hungary</option>
            <option value='Iceland'>Iceland</option>
            <option value='India'>India</option>
            <option value='Ireland'>Ireland</option>
            <option value='Italy'>Italy</option>
            <option value='Japan'>Japan</option>
            <option value='Malaysia'>Malaysia</option>
            <option value='Mexico'>Mexico</option>
            <option value='New Zealand'>New Zealand</option>
            <option value='Philippines'>Philippines</option>
            <option value='Poland'>Poland</option>
            <option value='Portugal'>Portugal</option>
            <option value='Puerto Rico'>Puerto Rico</option>
            <option value='Romania'>Romania</option>
            <option value='Serbia'>Serbia</option>
            <option value='Singapore'>Singapore</option>
            <option value='Spain'>Spain</option>
            <option value='Sweden'>Sweden</option>
            <option value='Taiwan'>Taiwan</option>
            <option value='Thailand'>Thailand</option>
            <option value='Turkey'>Turkey</option>
            <option value='United Kingdom'>United Kingdom</option>
          </select>
        </div>
        <div className='state-container'>
          <select className='state' defaultValue='All'>
            <option value='All' selected>All</option>
            <option value='Alaska'>Alaska</option>
            <option value='Alabama'>Alabama</option>
            <option value='Arkansas'>Arkansas</option>
            <option value='Arizona'>Arizona</option>
            <option value='California'>California</option>
            <option value='Colorado'>Colorado</option>
            <option value='Connecticut'>Connecticut</option>
            <option value='District of Colombia'>District of Colombia</option>
            <option value='Delaware'>Delaware</option>
            <option value='Florida'>Florida</option>
            <option value='Georgia'>Georgia</option>
            <option value='Hawaii'>Hawaii</option>
            <option value='Iowa'>Iowa</option>
            <option value='Idaho'>Idaho</option>
            <option value='Illinois'>Illinois</option>
            <option value='Indiana'>Indiana</option>
            <option value='Kansas'>Kansas</option>
            <option value='Kentucky'>Kentucky</option>
            <option value='Louisiana'>Louisiana</option>
            <option value='MA'>Massachusetts</option>
            <option value='Maryland'>Maryland</option>
            <option value='Maine'>Maine</option>
            <option value='Michigan'>Michigan</option>
            <option value='Minnesota'>Minnesota</option>
            <option value='Missouri'>Missouri</option>
            <option value='Mississippi'>Mississippi</option>
            <option value='Montana'>Montana</option>
            <option value='North Carolina'>North Carolina</option>
            <option value='North Dakota'>North Dakota</option>
            <option value='Nebraska'>Nebraska</option>
            <option value='New Hampshire'>New Hampshire</option>
            <option value='New Jersey'>New Jersey</option>
            <option value='New Mexico'>New Mexico</option>
            <option value='Nevada'>Nevada</option>
            <option value='New York'>New York</option>
            <option value='Ohio'>Ohio</option>
            <option value='Oklahoma'>Oklahoma</option>
            <option value='Oregon'>Oregon</option>
            <option value='Pennsylvania'>Pennsylvania</option>
            <option value='Rhode Island'>Rhode Island</option>
            <option value='South Carolina'>South Carolina</option>
            <option value='South Dakota'>South Dakota</option>
            <option value='Tennessee'>Tennessee</option>
            <option value='Texas'>Texas</option>
            <option value='Utah'>Utah</option>
            <option value='Virginia'>Virginia</option>
            <option value='Vermont'>Vermont</option>
            <option value='Washington'>Washington</option>
            <option value='Wisconsin'>Wisconsin</option>
            <option value='West Virginia'>West Virginia</option>
            <option value='Wyoming'>Wyoming</option>
          </select>
        </div>
        <div className='new'>
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
