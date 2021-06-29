import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Restaurants from './Restaurants';

import '../styles/HomePage.css';

import { offers, brands } from '../HelperDatabase';

export default function HomePage(props) {

  return (
    <>
      <Navbar />
      <div className="home container">
        <span className="left-slide-btn">
          <img src="https://img.icons8.com/glyph-neue/64/000000/chevron-left.png" alt="left-btn" />
        </span>
        <span className="right-slide-btn">
          <img src="https://img.icons8.com/glyph-neue/64/000000/chevron-right.png" alt="right-btn" />
        </span>
        <div className="offers">
          {offers.map(offer =>
            <a className="offers-item" href="/">
              <img className="offers-image" src={offer.img} alt={offer.alt} />
            </a>
          )}
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
    </>
  )
}