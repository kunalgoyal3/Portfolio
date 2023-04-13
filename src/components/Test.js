import React from 'react';
import './Test.css';
import image60 from './images/image60.png';
import image80 from './images/image80.png';

export default function Test() {
  return (
    <div className='main-skills' id="test">
      <div className='head-text'>
        <h1>Skills</h1>
        <p>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum atque laudantium a autem ad laboriosam dolore harum maiores! Vel!ipsum dolor sit amet consectetur adipisicing elit. Libero, reprehenderit harum at non error accusamus deserunt aliquid officia quas natus.</p>

      </div>


      <div className="all_images">

        <div className='image1'>
          <img src={image80} alt="" />
          <div><h2>HTML/CSS</h2></div>
        </div>
        <div className="image2">
          <img src={image60} alt="" />
          <div><h2>JAVASCRIPT</h2></div>
        </div>
        <div className="image3">
          <img src={image80} alt="" />
          <div><h2>REACT JS</h2></div>
        </div>
        <div className="image4">
          <img src={image80} alt="" />
          <div><h2>C  </h2></div>
        </div>
        <div className="image5">
          <img src={image80} alt="" />
          <div><h2>C++ </h2></div>
        </div>
        <div className="image6">
          <img src={image60} alt="" />
          <div><h2>PYTHON </h2></div>
        </div>


      </div>
    </div>
  )
}
