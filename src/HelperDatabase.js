import pizza from './pics/pizza.jpg';
import dominos from './pics/domino.webp';
import mcdonalds from './pics/mcdonalds.webp';
import burger1 from './pics/burger1.webp';
import burger2 from './pics/burger2.webp';
import burger3 from './pics/burger3.webp';
import chickenFries from './pics/chickenFries.jpg';
import menu1 from './pics/menu1.webp';
import menu2 from './pics/menu2.webp';
import menu3 from './pics/menu3.webp';
import menu4 from './pics/menu4.webp';

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
  about: "Chirpy Crowd, Drive through, Economical, Cute Little Place, Great Recommendations, Prompt Service",
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
  menu: {
    Recommended: [{
      id: 1,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 2,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 3,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 4,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 5,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }, {
      id: 6,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 7,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 8,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 9,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 10,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }],
    Fries: [{
      id: 11,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 12,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 13,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 14,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 15,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 16,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 17,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 18,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }, {
      id: 19,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 20,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }],
    Appetizers: [{
      id: 21,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 22,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 23,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 24,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 25,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }],
    Sandwiches: [{
      id: 26,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 27,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 28,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 29,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 30,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }],
    Burgers: [{
      id: 31,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 32,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 33,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 34,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 35,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 36,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 37,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 38,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 39,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }, {
      id: 40,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }],
    Milkshakes: [{
      id: 41,
      name: "Regular French Fries",
      img: burger3,
      cost: "20",
      desc: "Perfectly deep fried crispy French potatoes seasoned with salt and  served with tomato ketchup",
      isVeg: true,
      rating: "4.7",
      numberOfVotes: 10
    }, {
      id: 42,
      name: "Chilli Cheezy Chicken Fries",
      img: chickenFries,
      cost: "35",
      desc: "Perfectly deep fried potato fries,   topped with southern spiced chicken, topped with red chili , blended cheese and chili flakes",
      isVeg: false,
      rating: "4.9",
      numberOfVotes: 15
    }, {
      id: 43,
      name: "McChicken™ Happy Meal™",
      img: burger1,
      cost: "60",
      desc: "Combo of your Favorite Burger with Beverage and Surprise Toy!",
      isVeg: false,
      rating: "4.0",
      numberOfVotes: 6
    }, {
      id: 44,
      name: "Mcspicy™ Paneer Wrap",
      img: burger2,
      cost: "25",
      desc: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
      isVeg: true,
      rating: "3.2",
      numberOfVotes: 3
    }, {
      id: 45,
      name: "McVeggie™ Extra Value Meal",
      img: pizza,
      cost: "75",
      desc: "Save ₹43 on combo of your favourite burger with fries [M] and beverage [M].",
      isVeg: true,
      rating: "4.8",
      numberOfVotes: 8
    }]
  },
  menuPics: [{
    src: menu1,
    alt: menu1
  }, {
    src: menu2,
    alt: menu2
  }, {
    src: menu3,
    alt: menu3
  }, {
    src: menu4,
    alt: menu4
  }],
  location: {
    address: "Dukes Complex, 120, Bharathiar Salai, Melapudur, Cantonment, Tiruchirappalli, Tamil Nadu 620001",
    coordinates: {
      lat: 10.799403000481698,
      lng: 78.68708356941423
    }
  },
  popular_dishes: ["Deluxe Veggie Pizza", "Veg Extravaganza Pizza", "Veggie Paradise", "Calzone Pockets", "Farmhouse Pizza", "Choco Lava Cake"]
}];

function getRestaurant(id) {
  return restaurants.find((restaurant) => restaurant._id === id);
}

// FOR EXAMPLE: CART STORES restaurant_ID AND FOOD_ID
let cart = {
  subtotal: 20,
  restaurant: {
    _id: 1,
    isPromoted: true,
    name: "Ovenstory pizza",
    desc: "American, fast foods, snacks",
  },
  ordered_items: [{
    id: 11,
    name: "Regular French Fries",
    cost: "20",
    isVeg: true,
    count: 1
  }, {
    id: 45,
    name: "McVeggie™ Extra Value Meal",
    cost: "75",
    isVeg: true,
    count: 2
  }]
};

export { offers, brands, restaurants, getRestaurant, cart };
