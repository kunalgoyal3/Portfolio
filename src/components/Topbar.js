import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import "./Topbar.css";


export default function Topbar() {
  const [topstate, top_newstate] = useState("Home");

  const click_on_navoption = (item) => {
    top_newstate(item);
  }

  return (
    <>
     
        <div className='topbar'>
          <div className='topbar1'>
            <a href='#home' className={`navbar_option1 ${topstate==="Home"?"active" : ""}`} onClick={() => click_on_navoption("Home")}>
              Home
            </a>
            <a href='#skills' className={`navbar_option2 ${topstate==="About me"?"active" : ""}`} onClick={() => click_on_navoption("About me")}>
              About me
            </a>
            <a href='#test' className={`navbar_option3 ${topstate==="Skills"?"active" : ""}`} onClick={() => click_on_navoption("Skills")}>
              Skills
            </a>
            <Link to="/" className={`navbar_option4 ${topstate==="Resume"?"active" : ""}`} onClick={() => click_on_navoption("Resume")}>
              Resume
            </Link>
            <a href='#contact' className={`navbar_option5 ${topstate==="Contact"?"active" : ""}`} onClick={() => click_on_navoption("Contact ")}>
              Contact me
            </a>
          </div>
        </div>

     
    
    </>
  )
}
