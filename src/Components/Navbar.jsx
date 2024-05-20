import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="main-nav-content">
      <nav className="navbar">
        <div className="navbar-container">
          <img src="./src/assets/icon.jpg" alt="logo" className="logo" />
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <a href="/" className="navbar-link">Home</a>
            <a href="/about" className="navbar-link">About</a>
            <a href="/projects" className="navbar-link">Projects</a>
            <a href="/connect" className="navbar-link">Connect</a>
            <a href="/download-cv" className="navbar-link">CV</a>
          </div>
          <div id="btn-content">
            <button className="navbar-toggle" onClick={toggleNavbar}>
              <span className="navbar-toggle-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
