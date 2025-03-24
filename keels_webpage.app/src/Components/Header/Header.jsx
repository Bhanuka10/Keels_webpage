import React from 'react';
import './Header.css'; // Ensure the CSS file is imported

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h1>Keels</h1>
        <h2>Freshness, Value, Convenience Keells Delivers!</h2>

        <p>
          Keells is your go-to supermarket for fresh products, great value, and convenience. We offer high-quality groceries, fresh produce, and essentials while ensuring a seamless shopping experience.
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
}

export default Header;