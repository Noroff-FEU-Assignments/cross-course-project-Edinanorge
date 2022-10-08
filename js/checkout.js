import { formCheckout, checkoutButton } from "./constans.js";

import { displayMessage } from "./helperFunctions.js";
import { validateFormCheckout } from "./components/formValidation.js";

const cartProductsContainer = document.querySelector(".cart-product-container");

// geting product from local sorage
let cartItems = localStorage.getItem("cartProducts");
if (!cartItems) {
  cartItems = [];
} else {
  cartItems = JSON.parse(cartItems);
}

//  if no product in cart
if (cartItems.length == 0) {
  // display message that the cart is emty
  cartProductsContainer.innerHTML = displayMessage("Your cart is currently empty.", "success");
  // make the form button diabled
  checkoutButton.disabled = true;
  // stop submiting the form
  formCheckout.addEventListener("submit", function (e) {
    e.preventDefault;
  });
} else {
  // validat the form
  formCheckout.addEventListener("submit", validateFormCheckout);
  // dispaly products
  displayHtml(cartItems);
  // update the total price
  updateTotalPrice();
  // add event listener to delete buttons
  const btnDelete = document.querySelectorAll(".btn-delete");
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", removeProduct);
  }
  //add event listener to quantity inputs
  const quantityInputs = document.querySelectorAll(".cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", changeQuantity);
  }
}

function displayHtml(product) {
  for (let i = 0; i < product.length; i++) {
    const cartItem = document.querySelector(".cart-item");
    cartItem.innerHTML += `<div class="cart-column cart-row">
                            <div class="cart-image">
                              <img src="${product[i].image}" alt="${product[i].name}" width=100px height=auto/>
                              <h4 class="cart-item-name">${product[i].name}</h4>
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

function removeProduct(event) {
  const btnClicked = event.target;
  const clickedItem = btnClicked.parentElement.parentElement;
  clickedItem.remove();

  //repalcing the local sorage hvit the array which don't contains the deleted item
  const clickedItemName = clickedItem.getElementsByClassName("cart-item-name")[0].innerText;
  const remainingItem = cartItems.filter((item) => item.name !== clickedItemName);

  localStorage.setItem("cartProducts", JSON.stringify(remainingItem));

  updateTotalPrice();
}

function changeQuantity() {
  const quantityInput = event.target;
  if (isNaN(quantityInput.value) || quantityInput.value == 0) {
    quantityInput.value = 1;
  }
  updateTotalPrice();
}

function updateTotalPrice() {
  const cartItemsContainer = document.getElementsByClassName("cart-item")[0];
  const cartRows = cartItemsContainer.getElementsByClassName("cart-row");

  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    // getting the elements whitch has the class names
    const cartPriceElement = cartRows[i].getElementsByClassName("cart-item-price")[0];

    const cartQuantityElement = cartRows[i].getElementsByClassName("cart-quantity-input")[0];

    // getting the information from the cartPriceElements, and cartQuantityElement:
    //replacing the kr to "" and converting to number
    const price = parseFloat(cartPriceElement.innerText.replace("kr", ""));
    const quantity = cartQuantityElement.value;

    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerHTML = `<h2>Total</h2> 
                                                                        <span class="cart-tolal"><strong>${total}</strong> kr</span>`;
}
