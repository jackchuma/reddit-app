import React from 'react';
import './Main.css';
import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';

function Main() {
  return (
    <div className="Main">
      <div className='content'>
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Main;
