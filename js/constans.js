export const form = document.querySelector("#form");
export const formSuccess = document.querySelector(".form-success");
export const fullName = document.querySelector("#fullName");
export const fullNameError = document.querySelector("#fullNameError");
export const message = document.querySelector("#message");
export const messageError = document.querySelector("#messageError");
export const email = document.querySelector("#email");
export const emailError = document.querySelector("#emailError");
export const jacketsConatiner = document.querySelector(".jackets");
export const categoriBtn = document.querySelectorAll(".btn-category");
export const jacketSpecificContainer = document.querySelector(".section-jacket-specific");
export const productsInCart = document.querySelector(".cart-product-container");
export const formChekout = document.querySelector(".form-checkout");
export const cardNumber = document.querySelector("#cardNumber");
export const cardError = document.querySelector("#cardError");
export const date = document.querySelector("#date");
export const dateError = document.querySelector("#dateError");
export const cvc = document.querySelector("#cvc");
export const cvcError = document.querySelector("#cvcError");
export const checkoutButton = document.querySelector(".btn-checkout");
export const addToCartButton = document.querySelector(".btn-buy");
export const cartItem = document.querySelector(".cart-item");

export const cartIconAffterElement = document.createElement("style");

cartIconAffterElement.innerHTML = `.cart-icon:after {
  content: "0";
  width: 8px;
  height: 8px;
  border-radius: 80%;
  background-color: #cdeff2;
  padding: 0.4rem;
  font-size: 1rem;
  text-align: center;

  position: absolute;
  top: 0;
  right: 0;
}`;
document.head.appendChild(cartIconAffterElement);
