import React, { useState, useEffect } from 'react';
import './Navigation.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Needed for sidebar toggle
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`nav_bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav_glow"></div>
      <div className='nav_sidebar'>
        <i className="bi bi-list" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
      </div>
      
      <div className={`searchbar ${searchFocused ? 'focused' : ''}`}>
        <input 
          type='text' 
          placeholder='Search here...' 
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
        <i className="bi bi-search"></i>
      </div>
      
      <div className="nav_content">
        <ul>
          <li><a href="#" className="nav-link">Home</a></li>
          <p className="divider">|</p>
          <li><a href="#" className="nav-link">About</a></li>
          <p className="divider">|</p>
          <li><a href="#" className="nav-link">Services</a></li>
          <p className="divider">|</p>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </div>
      
      <div className='nav_user'>
        <div className="login">
          <a href="#" className="login-btn">Login</a>
          <a href="#" className="signup-btn">Sign Up</a>
        </div>
        <div className="cart">
          <div className="cart-icon-container">
            <i className="bi bi-cart"></i>
            <span className="cart-badge">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
