import React from 'react';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Needed for sidebar toggle
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navigation() {
  return (
    <div>
        <div className='navbar'>
            <div>
                <button
  className="btn btn-outline-secondary"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#sidebar"
  aria-controls="sidebar"
>
  <span className="navbar-toggler-icon" style={{ width: '15px', height: '10px' , }}></span>
</button>

            </div>
            <div className='navbar-content'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <p>|</p>
                    <li><a href="#">About Us</a></li>
                    <p>|</p>
                    <li><a href="#">Services</a></li>
                    <p>|</p>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='login-part'>
                <div><a href="#">Login</a></div>
                <div><a href="#">Register</a></div>
                
            </div>
            <div>
                    <i className="bi bi-cart" style={{ fontSize: '25px', paddingLeft: '0', fontWeight: 'bold' }}></i> 
                </div>

        </div>
    </div>

  );
}

export default Navigation;
