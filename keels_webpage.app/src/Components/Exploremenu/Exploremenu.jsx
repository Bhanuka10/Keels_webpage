import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const Exploremenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Discover an endless variety of fresh, high-quality products—all in one place, just for you at Keells!</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div key={index} className='explore-menu-list-item'>
              <img src={item.menu_image }alt="" />
              <p>{item.menu_name}</p>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exploremenu;
