import { products } from "./products.js";
import { cartProducts } from "./constans.js";
import { formChekout } from "./constans.js";
import { cardNumber } from "./constans.js";
import { cardError } from "./constans.js";
import { fullName } from "./constans.js";
import { fullNameError } from "./constans.js";
import { cvc } from "./constans.js";
import { cvcError } from "./constans.js";
import { checkoutButton } from "./constans.js";
import { checkLength } from "./helperFunctions.js";
import { displayMessage } from "./helperFunctions.js";

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

const product = products.find(({ id }) => id == productId);

if (!product) {
  cartProducts.innerHTML = displayMessage("Your cart is currently empty.");
  checkoutButton.disabled = true;
} else {
  cartProducts.innerHTML += `<div class="cart-products">
                              <div>
                                <h2>ITEM</h2>
                                <img src="${product.image}" alt="${product.name}" width=100px height=auto/>
                              
                                
                                <h4>${product.name}</h4>
                                <p>${product.product_code}</p>
                              </div>
                              <div>
                                <h2>QUANTITY</h2>
                                <select name="quantity" id="quantity">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="0">0</option>
                                </select>
                              </div>
                              <div>
                                <h2>PRICE</h2>
                                <h3>${product.price} kr</h3>
                              </div>`;
}

// const quantity = document.querySelectorAll("option");
// for (let i = 0; i < quantity.length; i++) {
//   console.log(quantity[i].value);

//   if (quantity[i].value === 0) {
//     cartProducts.innerHTML = "";
//   }
// }

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
  if (checkLength(cvc.value, 2) === true) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
  }
  if (checkLength(fullName.value, 0) && checkLength(cardNumber.value, 15) && checkLength(cvc.value, 2)) {
    formChekout.reset();
    cartProducts.innerHTML = displayMessage("Thank you for your order!");
    checkoutButton.disabled = true;
  }
}
