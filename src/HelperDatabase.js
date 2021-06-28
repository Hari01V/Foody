import pizza from './pics/pizza.jpg';
import dominos from './pics/domino.webp';
import mcdonalds from './pics/mcdonalds.webp';
import burger1 from './pics/burger1.webp';
import burger2 from './pics/burger2.webp';
import burger3 from './pics/burger3.webp';

const offers = [{
  img: pizza,
  alt: "offers"
}, {
  img: pizza,
  alt: "offers"
}, {
  img: pizza,
  alt: "offers"
}, {
  img: pizza,
  alt: "offers"
}, {
  img: pizza,
  alt: "offers"
}, {
  img: pizza,
  alt: "offers"
}, {
  img: pizza,
  alt: "offers"
}, {
  img: pizza,
  alt: "offers"
}];

const brands = [{
  img: mcdonalds,
  alt: "mcdonalds",
  time: "34mins"
}, {
  img: dominos,
  alt: "dominos",
  time: "28mins"
}, {
  img: mcdonalds,
  alt: "mcdonalds",
  time: "34mins"
}, {
  img: dominos,
  alt: "dominos",
  time: "28mins"
}, {
  img: mcdonalds,
  alt: "mcdonalds",
  time: "34mins"
}, {
  img: dominos,
  alt: "dominos",
  time: "28mins"
}];

const restaurants = [{
  _id: 1,
  isPromoted: true,
  img: pizza,
  name: "Ovenstory pizza",
  desc: "American, fast foods, snacks",
  time: "9am - 2am (Everyday)",
  rating: "3.9",
  travelling_time: "38 mins",
  rate: "$20 for two",
  restaurants_pics: [{
    src: burger1
  }, {
    src: burger2
  }, {
    src: burger3
  }, {
    src: burger1
  }, {
    src: burger1
  }, {
    src: burger2
  }, {
    src: burger1
  }, {
    src: burger3
  }],

}];

function getRestaurant(id) {
  return restaurants.find((restaurant) => restaurant._id === id);
}

export { offers, brands, restaurants, getRestaurant };
