import { products } from "./products.js";
import { cartProducts, form } from "./constans.js";
import { formChekout } from "./constans.js";
import { checkoutButton } from "./constans.js";
import { displayMessage } from "./helperFunctions.js";
import { validateFormCheckout } from "./formValidation.js";

const cartQuantityInputs = document.getElementsByClassName("cart-quantity-input");
const totalPrice = document.querySelector(".cart-total-price");

const cartItem = document.querySelector(".cart-item");

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

const product = products.find(({ id }) => id == productId);

if (!product) {
  cartProducts.innerHTML = displayMessage("Your cart is currently empty.");
  checkoutButton.disabled = true;
  form.addEventListener("submit", function (e) {
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

totalPrice.innerHTML = ` <h2>Total</h2>
                          <span class="cart-tolal">${product.price} kr</span>`;

for (let i = 0; i < cartQuantityInputs.length; i++) {
  cartQuantityInputs[i].addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
  const quantityInput = event.target;
  if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
    quantityInput.value = 1;
  }
  totalPrice.innerHTML = ` <h2>Total</h2>
                            <span class="cart-tolal">${product.price * quantityInput.value} kr</span>`;
}

// cart item remove
const btnDelete = document.querySelector(".btn-delete");
btnDelete.addEventListener("click", function () {
  cartItem.innerHTML = "";
  totalPrice.innerHTML = ` <h2>Total</h2>
                          <span class="cart-tolal">0 kr</span>`;
});

// checkout form validation
formChekout.addEventListener("submit", validateFormCheckout);
