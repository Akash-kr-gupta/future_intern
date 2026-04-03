import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="/">
            Aangan
          </a>
        </div>
        
        <nav className="nav-links">
          <a href="#about">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
        </nav>
        
        <div className="nav-actions">
          <a href="#visit" className="btn btn-primary nav-btn">Reserve Table</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
