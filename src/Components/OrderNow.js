import React from 'react';
import '../styles/OrderNow.css';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import emptyCart from '../pics/cart.png';

export default function OrderNow(props) {

  let { menu } = props;
  let menu_title = [];

  for (const title in menu) {
    menu_title.push(title);
  }

  return (
    <div className="ordernow">
      <ul className="ordernow-menu">
        {menu_title.map((title, index) =>
          <li className="menu-title active" key={`menu-title-${index}`}>
            {title}
          </li>
        )}
      </ul>
      <div className="ordernow-items">
        {Object.keys(menu).map((title, section_index) =>
          <div className="items-section" key={`section-${title}-${section_index}`}>
            <h1 className="section-title">{title}</h1>
            <p className="section-count-items">{menu[title].length} Items</p>
            {menu[title].map((item, index) =>
              <div className="single-item" key={`section-${title}-single-${index}`}>
                <div className="single-item-info">
                  <div className={item.isVeg ? "veg-icon" : "nonVeg-icon"}></div>
                  <div className="item-info-name">{item.name}</div>
                  <div className="item-info-cost">{item.cost}</div>
                  <div className="item-info-desc">{item.desc}</div>
                </div>
                <div className="single-item-img">
                  <img src={item.img} alt={item.name} />
                  <div className="Add-btn">Add</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="ordernow-cart">
        <div className="cart-empty">
          <img src={emptyCart} alt="empty-cart" />
          <div>Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
        </div>
      </div>
    </div>
  )
}