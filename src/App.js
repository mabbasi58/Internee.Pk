import './App.css';

import React from 'react';
import Header from './Component/Headers';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import AboutMe from './Component/AboutMe';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
        
      
      
    </div>
  );
}

export default App;

