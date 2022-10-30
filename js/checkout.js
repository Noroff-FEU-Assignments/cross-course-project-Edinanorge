import { formCheckout, checkoutButton, validateFormCheckout } from "./components/formValidation.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";
import { displayMessage } from "./components/helperFunctions.js";
import { url } from "./config.js";

const cartProductsContainer = document.querySelector(".cart-product-container");
let cartItems = localStorage.getItem("cartProducts");

// geting product from local sorage

if (!cartItems) {
  cartItems = [];
  cartProductsContainer.innerHTML = displayMessage("Your cart is currently empty.", "error");
  checkoutButton.disabled = true;
  formCheckout.addEventListener("submit", (e) => e.preventDefault);
} else {
  cartItems = JSON.parse(cartItems);
  formCheckout.addEventListener("submit", validateFormCheckout);
  displayProductsInCart(cartItems);
  updateTotalPrice();

  const btnDelete = document.querySelectorAll(".btn-delete");
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", removeProduct);
  }

  const quantityInputs = document.querySelectorAll(".cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", changeQuantity);
  }
}

function displayProductsInCart(product) {
  for (let i = 0; i < product.length; i++) {
    const cartItem = document.querySelector(".cart-item");
    cartItem.innerHTML += `<div class="cart-column cart-row">
                            <div class="cart-image">
                              <img src="${product[i].images.map((image) => image.src)}"
                                  alt="${product[i].name}" width=100px height=auto/>
                              <h4 class="cart-item-name">${product[i].name}</h4>
                              <p>Product id: <span class="product-id">${product[i].id}</span></p>
                            </div>
                            <p class="cart-item-price">${product[i].prices.price} kr</p>
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

  //repalcing the local sorage whit the array which don't contains the deleted item
  const clickedItemId = clickedItem.getElementsByClassName("product-id")[0].innerText;
  const remainingItem = cartItems.filter((item) => item.id !== +clickedItemId); // clickedItemId converted to nr.
  console.log(remainingItem);

  localStorage.setItem("cartProducts", JSON.stringify(remainingItem));
  cartIconIndicator();
  updateTotalPrice();
}

function changeQuantity(event) {
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
    // replacing the kr to "" and converting to number
    const price = parseFloat(cartPriceElement.innerText.replace("kr", ""));
    const quantity = cartQuantityElement.value;

    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerHTML = `<h2>Total</h2>
                                                                        <span class="cart-tolal"><strong>${total}</strong> kr</span>`;
}
