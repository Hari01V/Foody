import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Restaurants.css';

import { restaurants } from '../HelperDatabase';

export default function Restaurants(props) {

  return (
    <div className="restaurants container">
      <div className="restaurants-header">
        <span className="restaurants-heading">161 restaurants</span>
        <ul className="restaurants-header-list">
          <li className="restaurants-header-item active">Relevance</li>
          <li className="restaurants-header-item">Cost for two</li>
          <li className="restaurants-header-item">Delivery time</li>
          <li className="restaurants-header-item">Rating</li>
          <li className="restaurants-header-item restaurants-filter-btn">Filters</li>
        </ul>
      </div>
      <ul className="restaurants-list">
        {
          restaurants.map(restaurant =>
            <li className="restaurants-item">
              <Link className="restaurants-item-link" to={`/restaurants/${restaurant._id}`}>
                <div className={`restaurants-img-container ${restaurant.isPromoted ? "promoted-tag" : ""}`}>
                  <img src={restaurant.img} alt="" />
                </div>
                <div className="restaurants-item-info">
                  <h3 className="restaurants-name">{restaurant.name}</h3>
                  <p className="restaurants-desc">{restaurant.desc}</p>
                  <div className="restaurants-info-detail">
                    <span className="restaurants-rating">
                      <svg width="88" height="84" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M42.0979 1.8541C42.6966 0.0114782 45.3034 0.0114802 45.9021 1.8541L54.7767 29.1672C55.0444 29.9912 55.8123 30.5491 56.6788 30.5491H85.3975C87.3349 30.5491 88.1405 33.0284 86.573 34.1672L63.3391 51.0476C62.6382 51.5569 62.3448 52.4596 62.6126 53.2837L71.4872 80.5968C72.0859 82.4394 69.9769 83.9716 68.4095 82.8328L45.1756 65.9524C44.4746 65.4431 43.5254 65.4431 42.8244 65.9524L19.5905 82.8328C18.0231 83.9716 15.9141 82.4394 16.5128 80.5967L25.3874 53.2837C25.6552 52.4596 25.3618 51.5569 24.6609 51.0476L1.42697 34.1672C-0.14046 33.0284 0.665094 30.5491 2.60254 30.5491H31.3212C32.1877 30.5491 32.9556 29.9912 33.2233 29.1672L42.0979 1.8541Z"
                          fill="#fff" />
                      </svg>
                      {restaurant.rating}</span>
                    <span className="restaurants-time">{restaurant.travelling_time}</span>
                    <span className="restaurants-rate">{restaurant.rate}</span>
                  </div>
                  <div className="restaurants-view">Quick View</div>
                </div>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}