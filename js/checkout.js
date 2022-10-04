import { products } from "./products.js";
import { productsInCart, form } from "./constans.js";
import { formChekout } from "./constans.js";
import { checkoutButton, cartItem } from "./constans.js";
import { displayMessage } from "./helperFunctions.js";
import { validateFormCheckout } from "./components/formValidation.js";
import { getExistingCart } from "./components/cartFunctionality.js";

const cartItems = getExistingCart();
if (!cartItems) {
  productsInCart.innerHTML = displayMessage("Your cart is currently empty.", "success");
  checkoutButton.disabled = true;
  form.addEventListener("submit", function (e) {
    e.preventDefault;
  });
} else {
  for (let i = 0; i < cartItems.length; i++) {
    cartItem.innerHTML += `<div class="cart-column ">
                          <div class="cart-image">                               
                            <img src="${cartItems[i].image}" alt="${cartItems[i].name}" width=100px height=auto/>
                               <h4>${cartItems[i].name}</h4>
                              <p>${cartItems[i].product_code}</p>
                           </div>
                            <p class="cart-item-price">${cartItems[i].price} kr</p>
                            <div class="cart-quantity" >
                              <input class="cart-quantity-input" min="1" type="number" value="1">
                              <button class="btn-delete" type="button"><i class="fa-solid fa-trash"></i></button>
                             </div>
                            </div>`;
  }
}

// const cartQuantityInputs = document.getElementsByClassName("cart-quantity-input");
// const totalPrice = document.querySelector(".cart-total-price");

// const cartItem = document.querySelector(".cart-item");

// const querySring = document.location.search;
// const prams = new URLSearchParams(querySring);
// const productId = prams.get("id");

// const product = products.find(({ id }) => id == productId);

// if (!product) {
//   cartProducts.innerHTML = displayMessage("Your cart is currently empty.", "success");
//   checkoutButton.disabled = true;
//   form.addEventListener("submit", function (e) {
//     e.preventDefault;
//   });
// } else {
//   cartItem.innerHTML += `<div class="cart-image">
//                               <img src="${product.image}" alt="${product.name}" width=100px height=auto/>
//                               <h4>${product.name}</h4>
//                               <p>${product.product_code}</p>
//                             </div>
//                             <p class="cart-item-price">${product.price} kr</p>
//                             <div class="cart-quantity" >
//                               <input class="cart-quantity-input" min="1" type="number" value="1">
//                               <button class="btn-delete" type="button"><i class="fa-solid fa-trash"></i></button>
//                             </div>`;

//   // cart item quantity change

//   totalPrice.innerHTML = ` <h2>Total</h2>
//                             <span class="cart-tolal">${product.price} kr</span>`;

//   for (let i = 0; i < cartQuantityInputs.length; i++) {
//     cartQuantityInputs[i].addEventListener("change", quantityChanged);
//   }

//   function quantityChanged(event) {
//     const quantityInput = event.target;
//     if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
//       quantityInput.value = 1;
//     }
//     totalPrice.innerHTML = ` <h2>Total</h2>
//   <span class="cart-tolal">${product.price * quantityInput.value} kr</span>`;
//   }

//   // cart item remove
//   const btnDelete = document.querySelector(".btn-delete");
//   btnDelete.addEventListener("click", function () {
//     cartItem.innerHTML = "";
//     totalPrice.innerHTML = ` <h2>Total</h2>
//                               <span class="cart-tolal">0 kr</span>`;
//     checkoutButton.disabled = true;
//   });

//   // checkout form validation
//   formChekout.addEventListener("submit", validateFormCheckout);
// }
