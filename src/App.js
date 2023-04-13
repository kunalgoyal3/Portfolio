
import './App.css';

import Intro from './components/Intro';
import Skills from './components/Skills';
import Topbar from './components/Topbar';
import Test from './components/Test';
import Contact from './components/Contact';
import { useState } from 'react';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className='topbar'>
          <Topbar/>
        </div>

        <div className='section'>
      
            <>
              <Intro />
              <Skills />
              <Test />
              <Contact />
            </>
          
      
        </div>
      </div>
    </Router>
  );
}

export default App;
