import React from 'react';
import '../styles/OrderNow.css';

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
        {menu_title.map((title) =>
          <li className="menu-title active">
            {title}
          </li>
        )}
      </ul>
      <div className="ordernow-items">
        {Object.keys(menu).map((title) =>
          <div className="items-section">
            <h1 className="section-title">{title}</h1>
            {menu[title].map((item) =>
              <div className="single-item">
                <div className="single-item-info">
                  {item.isVeg ? <div>Veg</div> : <div>Non-Veg</div>}
                  <div className="item-info-name">{item.name}</div>
                  <div className="item-info-cost">{item.cost}</div>
                  <div className="item-info-desc">{item.desc}</div>
                </div>
                <div className="single-item-img">
                  <img src={item.img} alt={item.name} />
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