const url =
  "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const discountCalc = (oldPrice, newPrice) => {
  let discount = Math.ceil(((oldPrice - newPrice) / oldPrice) * 100);
  return discount;
};
const productsList = [
  {
    name: "Green Colored Kurti",
    category: "kurti",
    keywords: ["women", "ladies", "kurtis", "kurti", "green", "women-wear"],
    price: 750,
    oldPrice: 1500,
    url: url,
    _id: 1,
  },
  {
    name: "Red Colored Kurti",
    category: "kurti",
    keywords: ["women", "ladies", "kurtis", "kurti", "green", "women-wear"],
    price: 750,
    url: url,
    _id: 7,
  },
  {
    name: "Blue Jeans",
    category: "jeans",
    keywords: ["jeans", "men", "women", "blue", "blue jeans"],
    price: 2000,
    oldPrice: 2500,
    url: url,
    _id: 2,
  },
  {
    name: "White Shirt",
    category: "shirts",
    keywords: ["white", "shirts", "shirt", "men", "boys"],
    price: 1500,
    oldPrice: 2000,
    url: url,
    _id: 3,
  },
  {
    name: "Red Colored Saree",
    category: "sarees",
    keywords: ["sarees", "saree", "red", "women", "ladies"],
    price: 1250,
    oldPrice: 2500,
    url: url,
    _id: 4,
  },
];
export { productsList, discountCalc };
