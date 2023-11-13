import React from 'react';
import '../css/Forum.css';
import Navbar from  './Navbar.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js'
//import Widget from './Widget.js';

function Quora() {
  return (
    <div className='quora'>
        <Navbar />
        <div className='quora_content'>
          <Sidebar />
          <Feed />
          {/*
            Not being used as of now
            <Widget />
          */}
        </div>
    </div>
  )
}

export default Quora
