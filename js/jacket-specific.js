import { displayMessage } from "./components/helperFunctions.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";
import { url } from "./config.js";

const jacketSpecificContainer = document.querySelector(".section-jacket-specific");

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

async function getProduct(url) {
  try {
    const respons = await fetch(url);
    const products = await respons.json();
    const product = products.find(({ id }) => id == productId);

    // display single product
    displayProductDetails(product);

    // click event to Add To Cart button
    const btnAddToCart = document.querySelector(".btn-buy");

    btnAddToCart.addEventListener("click", () => {
      saveProdactsToLocal(product);
      displaySuccess();
      cartIconIndicator();
    });
  } catch (error) {
    jacketSpecificContainer.innerHTML = displayMessage("Something went wrong", "error");
    console.log(error);
  }
}
getProduct(url);

// display HTML
function displayProductDetails(product) {
  let html = `<div class="grid-2cols">
                <img  class="jacket-specific-img"src="${product.images[0].src}" alt="${product.name}"/>
                <div class="text-container">
                  <a class="back-link" href="index.html"><i class="fa-solid fa-arrow-left back-icon"></i>Back to our products </a>
                  <h1 class="heading-primary">${product.name}</h1>
                  <h2 class="product-price">${product.prices.price} kr</h2>
                  <ul class="description-list jacket-description-list">
                    <li><i class="fa-solid fa-cloud-rain"></i>waterproof</li>
                    <li><i class="fa-solid fa-wind"></i>windproof</li>
                    <li><i class="fa-solid fa-recycle"></i>recycled material</li>
                    <li><i class="fa-solid fa-check"></i>all activities</li>
                  </ul>
                  <p class="jacket-description">${product.description}</p>
                  <p class="subheading">Size:</p>
                  <input type="radio" id="extra-small" name="size" value="extra-small">
                  <label for="extra-small">XS</label>
              
                  <input type="radio" id="small" name="size" value="small">
                  <label for="small">S</label>

                  <input type="radio" id="medium" name="size" value="medium">
                  <label for="medium">M</label>

                  <input type="radio" id="large" name="size" value="large">
                  <label for="large">L</label>

                  <input type="radio" id="extra-large" name="size" value="extra-large">
                  <label for="extra-large">XL</label>
                  <button class="btn-cta btn-buy">Add To Cart</button>
                </div>
              </div>
              <div class="extra-info">
                <p><i class="fa-solid fa-truck"></i>Free delivery</p>
                <p><i class="fa-solid fa-arrow-right-arrow-left"></i>30 days free return</p>
                <p><i class="fa-solid fa-money-bill-1"></i>Money-back guarantee</p>
              </div>`;
  jacketSpecificContainer.innerHTML = html;
}

//display success page
function displaySuccess() {
  const successMessageContainer = document.querySelector(".success-message");
  let html = `<div class="section-success grid-2cols">
                <div class="success-icon">
                  <i class="fa-regular fa-circle-check"></i>
                </div>
                <div>
                  <h1 class="heading-primary">Thank you!</h1>
                  <h2 class="heading-secondary">The item is added to your shopping cart.</h2>
                  <a class="btn-cta" href="cart.html">Checkout Now </a>
                  <a class="btn-secondary" href="jackets.html">Continue Shopping </a>
                </div>
              </div>`;
  successMessageContainer.innerHTML = html;
}

// save product to local
function saveProdactsToLocal(product) {
  const existingCartProducts = getExistingProducts();
  const cartProduct = existingCartProducts.find((item) => item.id === product.id);

  if (!cartProduct) {
    existingCartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(existingCartProducts));
  } else {
    alert("This product is already in the cart");
  }
}
// Get products from local
function getExistingProducts() {
  const cartProducts = localStorage.getItem("cartProducts");

  if (!cartProducts) {
    return [];
  } else {
    return JSON.parse(cartProducts);
  }
}
