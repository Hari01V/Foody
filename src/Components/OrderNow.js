import React, { useEffect } from 'react';
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

    var headerOffset = 200;
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
        <div className="cart-empty">
          <img src={emptyCart} alt="empty-cart" />
          <div>Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
        </div>
      </div>
    </div>
  )
}