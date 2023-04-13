import React from 'react';
import './Intro.css';
import myselfimage from './images/myself.png';

export default function Intro() {
  return (
    <div className='back_complete' id='home'>

    <div className='main'>
      <div className='myself_pic'>
        <img src={myselfimage} alt="myself" />
      </div>

      <div className='myname'>
        <h1>
          <span className='animated-text'>Hello,</span>
     
          <span className='animated-text'>I'm Kunal Goyal</span>
          <br /><br/>
          <span className='animated-text'>Front end developer</span>
        </h1>
      </div>

      <div className='start'>
        <div className='first'>
          <a href="#contact">Contact me</a>
        </div>
        <div className='second'>
          <a href="#">Download Resume</a>
        </div>
      </div>
    </div>
    </div>
  );
}
