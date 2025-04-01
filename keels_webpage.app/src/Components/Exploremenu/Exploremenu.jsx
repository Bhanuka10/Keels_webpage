import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const Exploremenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>At Keells, we bring you an unbeatable variety of the freshest produce, finest groceries, and everyday essentials, carefully selected to meet your needs, ensuring quality, convenience, and great value all in one place!</p>
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
