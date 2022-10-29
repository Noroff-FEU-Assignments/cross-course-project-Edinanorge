import { formCheckout, checkoutButton, validateFormCheckout } from "./components/formValidation.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";
import { displayMessage } from "./components/helperFunctions.js";
import { url } from "./config.js";

const cartProductsContainer = document.querySelector(".cart-product-container");
const btnDelete = document.querySelectorAll(".btn-delete");
const quantityInputs = document.querySelectorAll(".cart-quantity-input");

// geting product from local sorage
async function getProductsFromCart(url) {
  try {
    const respons = await fetch(url);
    const products = await respons.json();

    const productsInCart = getExistingProducts();

    if (!productsInCart) {
      cartProductsContainer.innerHTML = displayMessage("Your cart is currently empty.", "error");
    } else {
      displayProductsInCart(productsInCart);
      formCheckout.addEventListener("submit", validateFormCheckout);
      updateTotalPrice();
    }
  } catch {
    cartProductsContainer.innerHTML = displayMessage(`Something went wrong: ${error}`, "error");
  }
}
getProductsFromCart(url);

function getExistingProducts() {
  const cartItems = localStorage.getItem("cartProducts");

  if (!cartItems) {
    return [];
  } else {
    return JSON.parse(cartItems);
  }
}

for (let i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener("click", removeProduct());
}

for (let i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener("change", changeQuantity);
}
// let cartItems = localStorage.getItem("cartProducts");
// console.log(cartItems);

// if (!cartItems) {
//   cartItems = [];
//   // display message that the cart is emty
//   cartProductsContainer.innerHTML = displayMessage("Your cart is currently empty.", "error");
//   // make the form button diabled
//   checkoutButton.disabled = true;
//   // stop submiting the form
//   formCheckout.addEventListener("submit", (e) => e.preventDefault);
// } else {
//   cartItems = JSON.parse(cartItems);
//   console.log(cartItems);
//   // validat the form
//   formCheckout.addEventListener("submit", validateFormCheckout);
//   // dispaly products
//   displayProductsInCart(cartItems);
//   // update the total price
//   updateTotalPrice();
//   // add event listener to delete buttons

//   for (let i = 0; i < btnDelete.length; i++) {
//     btnDelete[i].addEventListener("click", removeProduct());
//   }
//   //add event listener to quantity inputs
//   const quantityInputs = document.querySelectorAll(".cart-quantity-input");
//   for (let i = 0; i < quantityInputs.length; i++) {
//     quantityInputs[i].addEventListener("change", changeQuantity);
//   }
// }

function displayProductsInCart(product) {
  for (let i = 0; i < product.length; i++) {
    const cartItem = document.querySelector(".cart-item");
    cartItem.innerHTML += `<div class="cart-column cart-row">
                            <div class="cart-image">
                              <img src="${product[i].images.map((image) => image.src)}"
                                  alt="${product[i].name}" width=100px height=auto/>
                              <h4 class="cart-item-name">${product[i].name}</h4>
                              <p>${product[i].short_description}</p>
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
  const clickedItemName = clickedItem.getElementsByClassName("cart-item-name")[0].innerText;
  const remainingItem = cartItems.filter((item) => item.name !== clickedItemName);

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
