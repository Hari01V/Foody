import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import '../styles/OverView.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

export default function OverView(props) {
  let { details } = props;
  let { _id, isPromoted, name, desc, about, time, rating, travelling_time, rate, menuPics, location, popular_dishes } = details;

  const copyToClipboard = () => {
    var range = document.createRange();
    range.selectNode(document.getElementById("overview-map-address"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    const copiedMsg = document.querySelector(".overview-map-details .copy-btn .copied-msg");
    copiedMsg.style.display = "flex";
    copiedMsg.animate([{
      transform: 'scale(0.1)'
    }, {
      transform: 'scale(1)'
    }], {
      duration: 100,
      iterations: 1
    })
    setTimeout(() => {
      copiedMsg.animate([{
        transform: 'scale(1)'
      }, {
        transform: 'scale(0.1)'
      }], {
        duration: 100,
        iterations: 1
      })
    }, 800);
    setTimeout(() => {
      copiedMsg.style.display = "none";
    }, 900);
  }

  return (
    <div className="overview">
      <div className="overview-info">
        <h1 className="overview-title">About this Place</h1>
        {isPromoted ?
          <div className="overview-promoted"><LoyaltyIcon /> Promoted Restaurant</div>
          : ''}
        <p className="overview-p">{about}</p>
        <div className="overview-section">
          <h3 className="overview-subtitle">Menu</h3>
          <div className="overview-menu">
            <div className="menu-img-container">
              {menuPics.length > 0 ?
                <div className="menu-img">
                  <img src={menuPics[0].src} alt={menuPics[0].alt} />
                  <p className="empty-space"></p>
                </div>
                : <p className="overview-p">Menu has not been uploaded</p>}
              {menuPics.length > 1 ?
                <div className="menu-img">
                  <img src={menuPics[1].src} alt={menuPics[1].alt} />
                  <p className="empty-space all-menu-btn">
                    <Link to={`/restaurants/${_id}/menu`}>
                      See all menus <DoubleArrowIcon />
                    </Link>
                  </p>
                </div> : ''}
            </div>
          </div>
        </div>
        <div className="overview-section">
          <h3 className="overview-subtitle">Popular Dishes</h3>
          <p className="overview-p">{popular_dishes.join(", ")}</p>
        </div>
        <div className="overview-section">
          <h3 className="overview-subtitle">Average Cost</h3>
          <p className="overview-p">Approximately {rate}</p>
        </div>
      </div>
      <div className="overview-map-container">
        <div className="overview-map"
        // style={{ width: '280px', height: '280px' }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: MAP_API_KEY, language: 'en' }}
            defaultCenter={location.coordinates}
            defaultZoom={11}
          >
            <AnyReactComponent
              lat={location.coordinates.lat}
              lng={location.coordinates.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <div className="overview-map-details">
          <h3 className="overview-subtitle">Address</h3>
          <p id="overview-map-address" className="overview-p">{location.address}</p>
          <button id="map-address-copy-btn" className="copy-btn" onClick={copyToClipboard}
            data-toggle="tooltip" data-placement="bottom" title="Copy to clipboard">
            <FileCopyIcon /> Copy
            <div className="copied-msg">✓ Copied</div>
          </button>
        </div>
      </div>
    </div>
  )
}