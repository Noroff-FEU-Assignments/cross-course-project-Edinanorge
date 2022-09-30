import { products } from "./products.js";
import { cartProducts, form } from "./constans.js";
import { formChekout } from "./constans.js";
import { cardNumber } from "./constans.js";
import { cardError } from "./constans.js";
import { fullName } from "./constans.js";
import { fullNameError } from "./constans.js";
import { date } from "./constans.js";
import { dateError } from "./constans.js";
import { cvc } from "./constans.js";
import { cvcError } from "./constans.js";
import { checkoutButton } from "./constans.js";
import { checkLength } from "./helperFunctions.js";
import { displayMessage } from "./helperFunctions.js";
const cartItem = document.querySelector(".cart-item");

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

const product = products.find(({ id }) => id == productId);

if (!product) {
  cartProducts.innerHTML = displayMessage("Your cart is currently empty.");
  checkoutButton.disabled = true;
  form.addEventListener("click", function (e) {
    e.preventDefault;
  });
} else {
  cartItem.innerHTML += `<div class="cart-image">
                              <img src="${product.image}" alt="${product.name}" width=100px height=auto/>
                              <h4>${product.name}</h4>
                              <p>${product.product_code}</p>
                            </div>
                            <p class="cart-item-price">${product.price} kr</p>
                            <div class="cart-quantity" >
                              <input class="cart-quantity-input" min="1" type="number" value="1">
                              <button class="btn-delete" type="button"><i class="fa-solid fa-trash"></i></button>
                            </div>`;
}

// cart item quantity change
const cartQuantityInputs = document.getElementsByClassName("cart-quantity-input");

for (let i = 0; i < cartQuantityInputs.length; i++) {
  cartQuantityInputs[i].addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
  const quantityInput = event.target;
  if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
    quantityInput.value = 1;
  }
  const price = document.querySelector(".cart-total-price");
  price.innerHTML = ` <h2>Total</h2>
                      <span class="cart-tolal">${product.price * quantityInput.value} kr</span>`;
}
// cart item remove
const btnDelete = document.querySelector(".btn-delete");
btnDelete.addEventListener("click", function () {
  cartItem.innerHTML = "";
});

// checkout form validation
formChekout.addEventListener("click", validateFormCheckout);

function validateFormCheckout(event) {
  event.preventDefault();
  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (checkLength(cardNumber.value, 15) === true) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
  }
  if (!date) {
    dateError.style.display = "block";
  } else {
    dateError.style.display = "none";
  }
  if (checkLength(cvc.value, 2) === true) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
  }
  if (checkLength(fullName.value, 0) && checkLength(cardNumber.value, 15) && checkLength(cvc.value, 2) && date) {
    formChekout.reset();
    cartProducts.innerHTML = displayMessage("Thank you for your order!");
    checkoutButton.disabled = true;
  }
}
