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
      <div class="home container">
        <span class="left-slide-btn">
          <img src="https://img.icons8.com/glyph-neue/64/000000/chevron-left.png" />
        </span>
        <span class="right-slide-btn">
          <img src="https://img.icons8.com/glyph-neue/64/000000/chevron-right.png" />
        </span>
        <div class="offers">
          {offers.map(offer =>
            <a class="offers-item" href="/">
              <img class="offers-image" src={offer.img} alt={offer.alt} />
            </a>
          )}
        </div>
      </div>

      {/* TOP BRANDS IN SPOTLIGHT */}
      <div class="top-brands container">
        <h1 class="top-brands-heading">Top brands in spotlight</h1>
        <ul class="brands">
          {brands.map(brand =>
            <a href="/" class="brands-item">
              <img src={brand.img} alt={brand.alt} />
              <span class="brand-time">{brand.time}</span>
            </a>
          )}
        </ul>
      </div>

      <Restaurants />
      <Footer />
    </>
  )
}