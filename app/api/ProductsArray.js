const productsArray = [
  {
    id: 1,
    name: "Shrimp Shumai (5 Pcs)",
    title: "shrimp-shumai",
    category: "appetizer",
    desc: "Fried Shrimp",
    price: 3.99,
    image: "/images/products/menu2_img_1.jpg"
  },
  {
    id: 2,
    name: "Gyoza (4 Pcs)",
    title: "shrimp-shumai",
    category: "appetizer",
    desc: "Fried Dumpling",
    price: 3.99,
    image: "/images/products/menu2_img_2.jpg"
  },
  {
    id: 3,
    name: "Crabstick Tempura (4 Pcs)",
    title: "crabstick-tempura",
    category: "appetizer",
    desc: "Fried Crab Stick",
    price: 3.99,
    image: "/images/products/menu2_img_3.jpg"
  },
  {
    id: 4,
    name: "Crab Rangoon (4 Pcs)",
    title: "crab-rangoon",
    category: "appetizer",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 3.99,
    image: "/images/products/menu2_img_4.jpg"
  },
  {
    id: 5,
    name: "Egg Roll (2 Pcs)",
    title: "eeg-roll",
    category: "appetizer",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 2.99,
    image: "/images/products/menu2_img_5.jpg"
  },
  {
    id: 6,
    name: "Spring Roll (4 Pcs)",
    title: "spring-roll",
    category: "appetizer",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 2.99,
    image: "/images/products/menu2_img_6.jpg"
  },
  {
    id: 7,
    name: "Lobster Roll (Cooked)",
    title: "lobster-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 13.99,
    image: "/images/products/menu2_img_7.jpg"
  },
  {
    id: 8,
    name: "Warrensburg Roll (Deep Fried)",
    title: "warrensburg-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 11.99,
    image: "/images/products/menu2_img_1.jpg"
  },
  {
    id: 9,
    name: "OMG Roll (Deep Fried)",
    title: "omg-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 11.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 10,
    name: "Kansha Roll (Deep Fried)",
    title: "kansha-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 10.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 11,
    name: "Volcano Roll (Cooked)",
    title: "volcano-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 9.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 12,
    name: "Crunchy Roll (Cooked)",
    title: "crunchy-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 8.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 13,
    name: "Philadelphia Roll (Cooked)",
    title: "philadelphia-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 5.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 14,
    name: "California Roll (Cooked)",
    title: "california-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 4.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 15,
    name: "Veggie Roll (Cooked)",
    title: "veggie-roll",
    category: "roll",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 3.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 16,
    name: "Seafood Lover (Pick 3)",
    title: "seafood-lover",
    category: "hibachi",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 19.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 17,
    name: "Kansha Special (Pick 3)",
    title: "kansha-special",
    category: "hibachi",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 15.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 18,
    name: "Kansha Super (Pick 3)",
    title: "hibachi",
    category: "hibachi",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 15.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 19,
    name: "Kansha Super (Pick 3)",
    title: "kansha-super",
    category: "hibachi",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 15.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 20,
    name: "Kansha Duos (Pick 2)",
    title: "kansha-duos",
    category: "hibachi",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 3.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 21,
    name: "Hibachi Lobster",
    title: "hibachi-lobster",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 11.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 22,
    name: "Hibachi Tuna",
    title: "hibachi-tuna",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 11.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 23,
    name: "Hibachi Scallop",
    title: "hibachi-scallop",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 11.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 24,
    name: "Hibachi Steak",
    title: "hibachi-steak",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 10.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 25,
    name: "Hibachi Calamari",
    title: "hibachi-calamari",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 10.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 26,
    name: "Hibachi Salmon",
    title: "hibachi-salmon",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 10.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 27,
    name: "Hibachi Shrimp",
    title: "hibachi-shrimp",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 10.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 28,
    name: "Sukiyaki Steak",
    title: "sukiyaki-steak",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 10.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 29,
    name: "Hibachi Chiken",
    title: "hibachi-chiken",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 9.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 30,
    name: "Hibachi Chiken",
    title: "hibachi-chiken",
    category: "entrees",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 7.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 31,
    name: "Lobster",
    title: "lobster",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 7.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 31,
    name: "Tuna",
    title: "tuna",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 7.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 32,
    name: "Scallop",
    title: "scallop",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 7.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 33,
    name: "Salmon",
    title: "salmon",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 7.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 34,
    name: "Steak",
    title: "steak",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 6.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 35,
    name: "Shrimp",
    title: "shrimp",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 6.49,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 36,
    name: "Calamari",
    title: "calamari",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 6.49,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 37,
    name: "Chiken",
    title: "chiken",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 5.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 38,
    name: "Noodles",
    title: "noodles",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 3.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 39,
    name: "Vegetables",
    title: "vegetables",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 3.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 40,
    name: "Fried Rice",
    title: "fried-rice",
    category: "sideorders",
    desc: "lorem Ipsum dolor sit amet lorem ipsum dolor sit amet",
    price: 3.99,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 41,
    name: "Yum Yum Sauce",
    title: "yumyum-sauce",
    category: "sideorders",
    desc: "Cup",
    price: 0.50,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },
  {
    id: 42,
    name: "Yum Yum Sauce (Large)",
    title: "yumyum-sauce-large",
    category: "sideorders",
    desc: "Large Cup",
    price: 4.50,
    image: "/images/products/albacore-toro-bintoro-sushi.jpg"
  },

];

// function getProductData(id) {
//   let productData = productsArray.find(product => product.id === id);

//   if (productData == undefined) {
//       console.log("Product data does not exist for ID: " + id);
//       return undefined;
//   }

//   return productData;
// }

export { productsArray };