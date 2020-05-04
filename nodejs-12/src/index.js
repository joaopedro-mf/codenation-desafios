const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function createObjects() {
  let cart = {
    products: [],
    promotion: "",
    totalPrice: 0,
    discountValue: 0,
    discount: "",
  };

  let listCategories = [];

  return { cart, listCategories };
}

function addItems(product, cart, listCategories) {
  cart.products.push({
    name: product.name,
    category: product.category,
  });

  if (!listCategories.includes(product.category))
    listCategories.push(product.category);
}

function findPromotion(listCateg, cart) {
  const tipPromotion = promotions.length;
  if (listCateg > tipPromotion) cart.promotion = promotions[tipPromotion - 1];
  else cart.promotion = promotions[listCateg - 1];
}

function findPrice(prodSelect, cart) {
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
  cart.totalPrice = `${promoPrice.toFixed(2)}`;
  cart.discountValue = `${(regularPrice - promoPrice).toFixed(2)}`;
  cart.discount = `${((cart.discountValue * 100) / regularPrice).toFixed(2)}%`;
}

function getShoppingCart(ids, productsList) {
  let { cart, listCategories } = createObjects();

  let productSelect = productsList.filter((prod) => {
    if (ids.includes(prod.id)) {
      addItems(prod, cart, listCategories);
      return true;
    }
    return false;
  });

  findPromotion(listCategories.length, cart);

  findPrice(productSelect, cart);

  return cart;
}

module.exports = { getShoppingCart };
