import React from 'react';

import '../styles/RestaurantPhotos.css';

export default function RestaurantPhotos(props) {

  let { pics, name } = props;

  return (
    <div className="photos-container">
      <h1 className="photos-title">{name}'s Photos</h1>
      <div className="photos-img-container">
        {pics.map((pic) =>
          <div className="photos-img">
            <img src={pic.src} alt={pic.alt} />
            <p className="empty-space"></p>
          </div>
        )}
      </div>
    </div>
  )
}