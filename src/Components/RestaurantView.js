import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';
import OrderNow from './OrderNow';
import RestaurantMenu from './RestaurantMenu';
import OverView from './OverView';
import RestaurantPhotos from './RestaurantPhotos';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import FlareIcon from '@material-ui/icons/Flare';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { getRestaurant } from '../HelperDatabase';

import '../styles/RestaurantView.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className="tab-panel">
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
}));

export default function RestaurantView(props) {

  let { routeProps, setTabValue } = props;
  const path = routeProps.match.url;
  const restaurant_id = routeProps.match.params.id;

  const [details, setDetails] = useState(null);

  useEffect(() => {
    //GET DATA FROM DATABASE HERE
    const id = parseInt(routeProps.match.params.id);
    setDetails(getRestaurant(id));
  }, []);

  const classes = useStyles();
  const [value, setValue] = useState(parseInt(setTabValue));

  useEffect(() => {
    setValue(setTabValue);
  }, [setTabValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const scrollToViewTabs = () => {
    document.querySelector("#restaurant-view-navbar").scrollIntoView();
  }

  return (
    <div className="restaurant-view">
      <Navbar />
      {details &&
        <div className="restaurant-intro container">
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
            <Link to="/">Home</Link>
            <Link to="/">All Restaurants</Link>
            <Typography color="textPrimary" component={'span'}>{details.name}</Typography>
          </Breadcrumbs>
          <ul className="small-gallery">
            {details.restaurants_pics && details.restaurants_pics.slice(0, 4).map((pic, index) =>
              <li className="small-gallery-photo" key={`small-gallery-photo-${index}`}>
                {index === 3 ?
                  <p className="view-gallery-btn">
                    <Link to={`/restaurants/${restaurant_id}/photos`} onClick={scrollToViewTabs}>
                      View Gallery
                    </Link>
                  </p> : <p className="empty-space"></p>}
                <img src={pic.src} alt="" />
              </li>
            )}
            <li className="small-gallery-photo add-photo">
              Add Photo <AddAPhotoIcon />
            </li>
          </ul>
          <div id="restaurant-view-navbar" className="view-navbar">
            <div className="intro-details">
              <div className="details-1">
                <h1>{details.name}</h1>
                {details.isPromoted ? <p className="details-1-promoted">Promoted</p> : <></>}
                <p>{details.desc}</p>
                <p>{details.time}</p>
              </div>
              <div className="details-2">
                <div className="restaurants-rating">
                  <svg width="88" height="84" viewBox="0 0 88 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M42.0979 1.8541C42.6966 0.0114782 45.3034 0.0114802 45.9021 1.8541L54.7767 29.1672C55.0444 29.9912 55.8123 30.5491 56.6788 30.5491H85.3975C87.3349 30.5491 88.1405 33.0284 86.573 34.1672L63.3391 51.0476C62.6382 51.5569 62.3448 52.4596 62.6126 53.2837L71.4872 80.5968C72.0859 82.4394 69.9769 83.9716 68.4095 82.8328L45.1756 65.9524C44.4746 65.4431 43.5254 65.4431 42.8244 65.9524L19.5905 82.8328C18.0231 83.9716 15.9141 82.4394 16.5128 80.5967L25.3874 53.2837C25.6552 52.4596 25.3618 51.5569 24.6609 51.0476L1.42697 34.1672C-0.14046 33.0284 0.665094 30.5491 2.60254 30.5491H31.3212C32.1877 30.5491 32.9556 29.9912 33.2233 29.1672L42.0979 1.8541Z"
                      fill="#fff" />
                  </svg>
                  {details.rating} Rated
                </div>
                <div className="add-review">
                  <FlareIcon /> Add Rating
                </div>
              </div>
            </div>

            {/* RESTAURANT VIEW SECTION */}
            <div className={classes.root}>
              <div className="view-section-tab-container">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Link to={`/restaurants/${restaurant_id}/`} className="tab-link">
                    <Tab label="Overview" {...a11yProps(0)} />
                  </Link>
                  <Link to={`/restaurants/${restaurant_id}/order`} className="tab-link">
                    <Tab label="Order Now" {...a11yProps(1)} />
                  </Link>
                  <Link to={`/restaurants/${restaurant_id}/reviews`} className="tab-link">
                    <Tab label="Reviews" {...a11yProps(2)} />
                  </Link>
                  <Link to={`/restaurants/${restaurant_id}/menu`} className="tab-link">
                    <Tab label="Menu" {...a11yProps(3)} />
                  </Link>
                  <Link to={`/restaurants/${restaurant_id}/photos`} className="tab-link">
                    <Tab label="Photos" {...a11yProps(4)} />
                  </Link>
                </Tabs>
              </div>
            </div>
          </div>
          <TabPanel value={value} index={0}>
            <OverView details={details} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <OrderNow menu={details.menu} details={details} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            REVIEW SECTION HERE
          </TabPanel>
          <TabPanel value={value} index={3}>
            <RestaurantMenu menuPics={details.menuPics} name={details.name} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <RestaurantPhotos pics={details.restaurants_pics} name={details.name} />
          </TabPanel>
        </div>
      }
      <Footer />
      {/* <BottomNavbar /> */}
    </div>
  )
}