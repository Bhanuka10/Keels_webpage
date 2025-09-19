import React from 'react';
import './Navigation.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Needed for sidebar toggle
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navigation() {
  return (
<div className='nav_bar'>
  <div className='nav_sidebar'>
    <i className="bi bi-list" style={{ fontSize: '20px', cursor: 'pointer' }}></i>


  </div>
  <div className='searchbar'>
    <input type='text' placeholder='Search here...' />
    <i className="bi bi-search" style={{ fontSize: '16px', cursor: 'pointer' }}></i>

  </div>
  <div className="nav_content">
    
      <ul>
        <li><a href="#">Home</a></li>
        <p>|</p>
        <li><a href="#">About</a></li>
        <p>|</p>
        <li><a href="#">Services</a></li>
        <p>|</p>
        <li><a href="#">Contact</a></li>
      </ul>
    
  </div>
  <div className='nav_user'>
  <div className="login">
    <a href="#">Login</a>
    <a href="#">Sign Up</a>
  </div>
<div className="cart">

  <i className="bi bi-cart"></i> 


  </div>
  </div>
  

</div>

  );
}

export default Navigation;
