import { products } from "./products.js";
import { productsInCart, form } from "./constans.js";
import { formChekout } from "./constans.js";
import { checkoutButton, cartItem } from "./constans.js";
import { displayMessage } from "./helperFunctions.js";
import { validateFormCheckout } from "./components/formValidation.js";

const cartProductsContainer = document.querySelector(".cart-product-container");

// geting product from cart
let cartItems = localStorage.getItem("cartProducts");
if (!cartItems) {
  cartItems = [];
} else {
  cartItems = JSON.parse(cartItems);
}

//  if no product in cart
if (cartItems.length == 0) {
  cartProductsContainer.innerHTML = displayMessage("Your cart is currently empty.", "success");
  checkoutButton.disabled = true;
  formChekout.addEventListener("submit", function (e) {
    e.preventDefault;
  });
} else {
  formChekout.addEventListener("submit", validateFormCheckout);
  // dispaly product
  displayHtml(cartItems);
}
//display html
function displayHtml(product) {
  for (let i = 0; i < product.length; i++) {
    cartItem.innerHTML += `<div class="cart-column ">
                          <div class="cart-image">
                            <img src="${product[i].image}" alt="${product[i].name}" width=100px height=auto/>
                               <h4>${product[i].name}</h4>
                              <p>${product[i].product_code}</p>
                           </div>
                            <p class="cart-item-price">${product[i].price} kr</p>
                            <div class="cart-quantity" >
                              <input class="cart-quantity-input" min="1" type="number" value="1">
                              <button class="btn-delete" type="button">DELETE</button>
                             </div>
                            </div>`;
  }
}
//<i class="fa-solid fa-trash"></i>
// cart item remove
const btnDelete = document.querySelectorAll(".btn-delete");
for (let i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener("click", removeProduct);
}

function removeProduct(event) {
  const btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
}
// remove from local storage

// changing the total price
// const productPrice = document.querySelectorAll(".cart-item-price");
// for (let i = 0; i < productPrice.length; i++) {}

// const cartQuantityInputs = document.querySelectorAll("cart-quantity-input");

// for (let i = 0; i < cartQuantityInputs.length; i++) {
//   cartQuantityInputs[i].addEventListener("change", quantityChanged);
// }

// function quantityChanged(event) {
//   const quantityInput = event.target;
//   console.log(quantityInput.value);
//   if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
//     quantityInput.value = 1;
//   }

//   totalPrice.innerHTML = ` <h2>Total</h2>
// <span class="cart-tolal">${product.price * quantityInput.value} kr</span>`;
// }

// const cartItem = document.querySelector(".cart-item");

// cart item quantity change

//   totalPrice.innerHTML = ` <h2>Total</h2>
//                             <span class="cart-tolal">${product.price} kr</span>`;

// checkout form validation

// }
