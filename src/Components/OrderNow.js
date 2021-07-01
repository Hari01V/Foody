import React, { useEffect, useState } from 'react';
import '../styles/OrderNow.css';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import emptyCart from '../pics/cart.png';
import { cart } from '../HelperDatabase';

export default function OrderNow(props) {

  let { menu } = props;

  const [cart_now, set_cart] = useState(cart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let menu_title = [];
  for (const title in menu) {
    menu_title.push(title);
  }

  const scrollToSection = (title, index) => {
    const section = document.getElementById(`section-${title}-${index}`);
    section.scrollIntoView({ behavior: 'smooth' });

    document.querySelectorAll(".menu-title").forEach(element => {
      if (element.id === `${title}-${index}`) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    })

    // var headerOffset = 200;
    var headerOffset = document.getElementById("restaurant-view-navbar").clientHeight + 10;
    var section_position = section.getBoundingClientRect().top;

    window.scrollBy({
      top: section_position - headerOffset,
      behavior: 'smooth'
    })
  }

  // FOR EFFECTS LIKE SCROLLSPY
  let observer = null;
  useEffect(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const title_id = id.slice(8);
        if (document.getElementById(title_id)) {
          if (entry.intersectionRatio > 0) {
            document.getElementById(title_id).classList.add("active");
          } else {
            document.getElementById(title_id).classList.remove("active");
          }
        }
      })
    }, { rootMargin: '0px' });
    document.querySelectorAll(".items-section").forEach(target => {
      observer.observe(target);
    });


    document.addEventListener("scroll", () => {
      const element = document.querySelector("#ordernow-pop-up-menu");
      if (element) {
        if (window.scrollY >= 600 && document.querySelector("html").clientWidth < 576) {
          //CHANGE DISPLAY OF POP-UP-MENU
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      }
    })
  })


  return (
    <div className="ordernow">
      <ul className="ordernow-menu">
        {menu_title.map((title, index) =>
          <li id={`${title}-${index}`} className="menu-title" key={`menu-title-${index}`}
            onClick={() => scrollToSection(title, index)}
          >
            {title}
          </li>
        )}
      </ul>
      {/* FOR SMALL WIDTH SCREENS - ORDERNOW_MENU */}
      <div id="ordernow-pop-up-menu" className="pop-up-menu">
        <Button className="pop-up-menu-btn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <RestaurantMenuIcon />Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {menu_title.map((title, index) =>
            <MenuItem onClick={() => {
              scrollToSection(title, index);
              handleClose();
            }}>{title}</MenuItem>
          )}
        </Menu>
      </div>
      <div className="ordernow-items">
        {Object.keys(menu).map((title, section_index) =>
          <div id={`section-${title}-${section_index}`} className="items-section" key={`section-${title}-${section_index}`}>
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
        {cart_now.ordered_items.length ?
          <div className="cart-container">
            <h1>Cart</h1>
            <p className="cart-info">{`${cart_now.ordered_items.length} ITEMS from ${cart_now.restaurant.name}`}</p>
            <div className="cart-items">
              {cart_now.ordered_items.map(item =>
                <li className="cart-item">
                  <div className="item-info">
                    <div className={item.isVeg ? "veg-icon" : "nonVeg-icon"}></div>
                    <h4>{item.name}</h4>
                  </div>
                  <div className="item-count">
                    <RemoveIcon /> {item.count} <AddIcon />
                  </div>
                  <h4 className="item-cost">$ {item.cost * item.count}</h4>
                </li>
              )}
            </div>
            <div className="cart-total">
              <div className="cart-total-label">
                <h4>Subtotal</h4>
                <p>Extra Charges may apply</p>
              </div>
              <h4 className="cart-total-amount">
                {/* {cart_now.ordered_items.forEach(item => {
                  subtotal += item.cost * item.count;
                })} */}
                $ {cart_now.subtotal}
              </h4>
            </div>
            <button className="cart-checkout-btn"
              onClick={() => { console.log("ORDERED") }}>CHECKOUT -></button>
          </div>
          :
          <div className="cart-empty">
            <img src={emptyCart} alt="empty-cart" />
            <div>Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
          </div>}

      </div>
    </div>
  )
}