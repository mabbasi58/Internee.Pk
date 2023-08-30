import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 

function Headers() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h2 className="logo" width="100" height="90" > Internee.Com </h2>
        </a>
    
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link green" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link green" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link green" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
