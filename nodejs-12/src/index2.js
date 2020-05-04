const { products } = require("../src/data/products");
const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

let cart = {
  products: [],
  promotion: "",
  totalPrice: 0,
  discountValue: 0,
  discount: "",
};

let listCategories = [];

function classifierItems(product, cart, listCategories) {
  let products = [];
  cart.products.push({
    name: product.name,
    category: product.category,
  });

  if (!listCategories.includes(product.category))
    listCategories.push(product.category);

  return cart;
}

function findPromotion(listCateg) {
  const tipPromotion = promotions.length;
  if (listCateg > tipPromotion) cart.promotion = promotions[tipPromotion - 1];
  else cart.promotion = promotions[listCateg - 1];
}

function findPrice(prodSelect) {
  let regularPrice = 0;
  let promoPrice = 0;
  prodSelect.forEach((prod) => {
    regularPrice += prod.regularPrice;
    let checkValue = prod.regularPrice;
    prod.promotions.forEach((pricesLooks) => {
      if (pricesLooks.looks.includes(cart.promotion)) {
        checkValue = pricesLooks.price;
      }
    });
    promoPrice += checkValue;
  });
  cart.totalPrice = promoPrice.toFixed(2).toString();
  cart.discountValue = (regularPrice - promoPrice).toFixed(2).toString();
  cart.discount = ((cart.discountValue * 100) / regularPrice).toFixed(2) + "%";
}

function getShoppingCart(ids, productsList) {
  cart = {
    products: [],
    promotion: "",
    totalPrice: 0,
    discountValue: 0,
    discount: "",
  };

  listCategories = [];

  let productSelect = productsList.filter((prod) => {
    if (ids.includes(prod.id)) {
      classifierItems(prod, cart, listCategories);
      return true;
    }
    return false;
  });

  findPromotion(listCategories.length);

  findPrice(productSelect);

  //console.log(cart);
  return cart;
}
//getShoppingCart([130, 140, 230, 260], products);
module.exports = { getShoppingCart };
