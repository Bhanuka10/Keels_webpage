import React from 'react';
import './Navbar.css';
import KeellsLogo from '../../assets/keells-logo-png_seeklogo-431833.png'; // Ensure correct path
import serch from '../../assets/icons8-search-50.png';
import basket from '../../assets/icons8-basket-64.png';

function Navbar() {
  return (
    <div className='navbar'>
      <img className='kells_logo' src={KeellsLogo} alt="Keells Logo" />
      <div className='navbar-men'>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img className='serch' src={serch} alt="Search Icon" />
        <div className='navbar-serch-icon'>
          <img src={basket} alt="Basket Icon" />
          <div className='dot'></div>
        </div>
        <button> Sign IN</button>
      </div>
    </div>
  );
}

export default Navbar;