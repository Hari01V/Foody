import React from 'react';

import '../styles/RestaurantMenu.css';

export default function RestaurantMenu(props) {

  let { menuPics, name } = props;

  return (
    <div className="menu-container">
      <h1 className="menus-title">{name}'s Menu</h1>
      <div className="menu-img-container">
        {menuPics.map((menu) =>
          <div className="menu-img">
            <img src={menu.src} alt={menu.alt} />
            <p className="empty-space"></p>
          </div>
        )}
      </div>
    </div>
  )
}