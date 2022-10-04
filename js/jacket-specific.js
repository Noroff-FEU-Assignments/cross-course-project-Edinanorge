import { products } from "./products.js";
import { jacketSpecificContainer } from "./constans.js";
import { getExistingCart } from "./components/cartFunctionality.js";
import { saveToCart } from "./components/cartFunctionality.js";

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");
const product = products.find(({ id }) => id == productId);

// display single product
displayProductDetails(product);

// save product to cart
const btnAddToCart = document.querySelector(".btn-buy");

btnAddToCart.addEventListener("click", handleCart);

function handleCart() {
  const currentCart = getExistingCart();

  const cartExists = currentCart.find((item) => item.id === product.id);

  if (!cartExists) {
    const productToCart = product;

    currentCart.push(productToCart);

    saveToCart(currentCart);
  } else {
    const newCart = currentCart.filter((item) => item.id !== product.id);
    saveToCart(newCart);
  }
}

function displayProductDetails(product) {
  jacketSpecificContainer.innerHTML = `<div class="grid-2cols">
                                          <img  class="jacket-specific-img"src="${product.image}" alt="${product.name}"/>
                                          <div class="text-container">
                                            <a class="back-link" href="jackets.html"><i class="fa-solid fa-arrow-left back-icon"></i>Back to our products</a>
                                            <h1 class="heading-primary">${product.name}</h1>
                                            <h2 class="price">${product.price} kr</h2>
                                            <ul class="description-list jacket-description-list">
                                              <li><i class="fa-solid fa-cloud-rain"></i>waterproof</li>
                                              <li><i class="fa-solid fa-wind"></i>windproof</li>
                                              <li><i class="fa-solid fa-recycle"></i>recycled material</li>
                                              <li><i class="fa-solid fa-check"></i>all activities</li>
                                            </ul>
                                            <p class="jacket-description">${product.description}</p>
                                            <p class="subheading">Size:</p>
                                            <select name="size" id="size" >
                                              <option value="${product.size[0]}">${product.size[0]}</option>
                                              <option value="${product.size[1]}">${product.size[1]}</option>
                                              <option value="${product.size[2]}">${product.size[2]}</option>
                                              <option value="${product.size[3]}">${product.size[3]}</option>
                                            </select>
                                          <a href="success.html" class="btn-cta btn-buy" >Add To Cart</a>
                                          </div>
                                        </div> 
                                        <div class="extra-info">
                                          <p><i class="fa-solid fa-truck"></i>Free delivery</p>
                                          <p><i class="fa-solid fa-arrow-right-arrow-left"></i>30 days free return</p>
                                          <p><i class="fa-solid fa-money-bill-1"></i>Money-back guarantee</p>
                                        </div>`;
}
