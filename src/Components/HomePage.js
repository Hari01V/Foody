import React from 'react';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import Restaurants from './Restaurants';

import '../styles/HomePage.css';

import { offers, brands } from '../HelperDatabase';

export default function HomePage(props) {

  let count_slide = 0;
  let slide_offset = 34;
  const slideLeft = () => {
    const slider = document.querySelector(".offers");
    const slide_item = document.querySelector(".offers-item");
    const slide_size = slide_item.getBoundingClientRect().width + slide_offset;
    if (count_slide != 0) {
      count_slide++;
      slider.style.transform = `translateX(${count_slide * slide_size}px)`;
    } else {
      // left slide btn disable
    }
  }
  const slideRight = () => {
    const slider = document.querySelector(".offers");
    const slide_item = document.querySelector(".offers-item");
    const slide_size = slide_item.getBoundingClientRect().width + slide_offset;
    if (count_slide != 4 - offers.length) {
      count_slide--;
      slider.style.transform = `translateX(${count_slide * slide_size}px)`;
    } else {
      // right slide btn disable
    }
  }

  return (
    <>
      <Navbar />
      <div className="home container">
        <span className="left-slide-btn" onClick={slideLeft}>
          <img src="https://img.icons8.com/glyph-neue/64/000000/chevron-left.png" alt="left-btn" />
        </span>
        <span className="right-slide-btn" onClick={slideRight}>
          <img src="https://img.icons8.com/glyph-neue/64/000000/chevron-right.png" alt="right-btn" />
        </span>
        <div className="offers-slider-container">
          <div className="offers">
            {offers.map(offer =>
              <a className="offers-item" href="/">
                <img className="offers-image" src={offer.img} alt={offer.alt} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* TOP BRANDS IN SPOTLIGHT */}
      <div className="top-brands container">
        <h1 className="top-brands-heading">Top brands in spotlight</h1>
        <ul className="brands">
          {brands.map(brand =>
            <a href="/" className="brands-item">
              <img src={brand.img} alt={brand.alt} />
              <span className="brand-time">{brand.time}</span>
            </a>
          )}
        </ul>
      </div>

      <Restaurants />
      <Footer />
      <BottomNavbar />
    </>
  )
}