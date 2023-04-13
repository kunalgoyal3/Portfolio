import React from 'react';
import './About_me1.css';
import logo_personal from './images/personal_logo4.jpg';
import education_logo from './images/education_logo.avif';
import experience_logo from './images/experience_logo.jpg';

export default function About_me1({ head }) {
  return (
    <div className='card_complete'>
      <div className='card_inside'>
        {head === 'Personal Information' && <div className='logo-1'><img src={logo_personal} alt="logo" /></div>}
        {head === 'Education' && <div className='logo-2'><img src={education_logo} alt="logo" /></div>}
        {head === 'Experience/Work' && <div className='logo-3'><img src={experience_logo} alt="logo" /></div>}
       
        <div className='heading_here'>{head}</div>
        {head === 'Personal Information' && <div className='personal1'>
          
         
            <p>Name - Kunal Goyal</p>
            <p>Age - 20</p>
            <p>Email id- kunal2103goyal@gmail.com</p>
            <p>Contact No - 9462209343</p>
            </div>}

        {head === 'Education' && <div className='educational'>
            <p>Secondary - 84.65% (RBSE)</p>
            <p>Senior Secondary - 84.4 (RBSE) </p>
            <p>B.teck - current</p>
            </div>}

        {head === 'Experience/Work' && <div className='experience1'>
            <p>Chegg Expert (2022 - Present)</p>
            <p>Frontend Developer </p>
            <p>Programmer</p>
            </div>}
        


      </div>
    </div>
  );
}
