import { cartIconAffterElement } from "../constans.js";

export function getExistingCart() {
  const cartProducts = localStorage.getItem("cartProducts");

  if (!cartProducts) {
    return [];
  } else {
    return JSON.parse(cartProducts);
  }
}
function cartChecker() {
  const cart = localStorage.getItem("cart");
  if (!cart) {
    const currentCart = getExistingCart();
    saveCart(currentCart);
  }
}

export function saveToCart(cartItem) {
  localStorage.setItem("cartProducts", JSON.stringify(cartItem));
  changeCartItemLenght();
}

function changeCartItemLenght() {
  let cartItemLength = JSON.parse(localStorage.cartProducts).length;
  console.log(cartItemLength);
  cartIconAffterElement.innerHTML = cartIconAffterElement.innerHTML.replace(
    'content: "0"',
    `content: "${cartItemLength}"`
  );
}
changeCartItemLenght();
