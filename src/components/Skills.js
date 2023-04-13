import React, { useState } from 'react';
import './Skills.css';
import About_me1 from './About_me1';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Skills() {
  const [current_state, new_state] = useState("Personal Information");
  
  const handleItemClick = (item) => {
    new_state(item);
  }
  
  return (
    <Router> {/* Wrap the component with Router */}
      <div className='card-main' id='skills'>
        <div className='nav-cards'>
          <div className={`item-1 ${current_state === "Personal Information" ? "active" : ""}`}>
            <Link to="/" onClick={() => handleItemClick("Personal Information")}>Personal Information</Link>
          </div>
          {/* it is also possible to use this method */}
          {/* <div className='item-2' id={current_state==="Education" ? "right2":"not"}>
            <Link to="/education" onClick={() => handleItemClick("Education")}>Education</Link>
          </div> */}

          <div className={`item-2 ${current_state === "Education" ? "active" : ""}`}>
            <Link to="/education" onClick={() => handleItemClick("Education")}>Education</Link>
          </div>
          <div className={`item-3 ${current_state === "Experience/Work" ? "active" : ""}`}>
            <Link to="/experience" onClick={() => handleItemClick("Experience/Work")}>Experience/Work</Link>
          </div>
        </div>
        <div className='card'>
          <About_me1 head={current_state} />
        </div>
      </div>
    </Router> 
  )
}
