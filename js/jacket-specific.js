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
              <a class="back-link" href="jackets.html"><i class="fa-solid fa-arrow-left back-icon"></i>Back to our products</a>
              <h1 class="heading-primary">${product.name}</h1>
              <h2 class="product-price">${product.price} kr</h2>
              <ul class="description-list jacket-description-list">
                <li><i class="fa-solid fa-cloud-rain"></i>waterproof</li>
                <li><i class="fa-solid fa-wind"></i>windproof</li>
                <li><i class="fa-solid fa-recycle"></i>recycled material</li>
                <li><i class="fa-solid fa-check"></i>all activities</li>
              </ul>
              <p class="jacket-description">${product.description}</p>
              <p class="subheading">Size:</p>
              <select name="size" id="size" >
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <a href="success.html" class="btn-cta btn-buy">Add To Cart</a>
            </div>
          </div>
          <div class="extra-info">
            <p><i class="fa-solid fa-truck"></i>Free delivery</p>
            <p><i class="fa-solid fa-arrow-right-arrow-left"></i>30 days free return</p>
            <p><i class="fa-solid fa-money-bill-1"></i>Money-back guarantee</p>
          </div>`;
  jacketSpecificContainer.innerHTML = html;
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
