import { displayMessage } from "./components/helperFunctions.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";
import { url } from "./config.js";

const salesContainer = document.querySelector(".products");

async function getProducts(url) {
  try {
    const respons = await fetch(url);
    const products = await respons.json();

    salesContainer.innerHTML = "";
    displayProductsOnSale(products);
  } catch (error) {
    salesContainer.innerHTML = displayMessage(`${error}`, "error");
  }
}
getProducts(url);

function displayProductsOnSale(products) {
  for (let i = 1; i < products.length; i++) {
    if (products[i].featured) {
      salesContainer.innerHTML += `<a href="jacket-specific.html?id=${products[i].id}" >
                                            <figure class="jacket product">
                                              <div class="sale">SALE</div>
                                              <img class="product-img" src="${products[i].images[0].src}" alt="${products[i].name}"/>
                                            <figcaption class="jacket-text">
                                              <p class="jacket-nr">${products[i].short_description}</p>
                                              <h2 class="heading-tertiary">${products[i].name}</h2>
                                              <span class="product-rating">&#11088; &#11088; &#11088; &#11088; (${products[i].id}) </span>
                                              <p class="product-price">${products[i].price} kr</p>
                                            </figcaption>
                                            </figure>
                                           </a>`;
    }
  }
}
