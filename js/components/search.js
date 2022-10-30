import { displayMessage } from "./helperFunctions.js";
import { url } from "../config.js";

// const searchedProductsContainer = document.querySelector(".searched-products");
const searchButton = document.querySelector(".search-btn");

async function getSearchedProducts(url) {
  try {
    const respons = await fetch(url);
    const searchedProducts = await respons.json();
    console.log(searchedProducts.length);

    dispalySearchedProducts(searchedProducts);
  } catch (error) {
    console.log(displayMessage(`An error has occurred: ${error}`, "error"));
  }
}

searchButton.onclick = () => {
  const searchInput = document.querySelector(".search-input").value;
  const newUrl = url + `?search=${searchInput}`;

  if (!searchInput) {
    console.log("error");
    valami();
  } else {
    getSearchedProducts(newUrl);
  }
};

function dispalySearchedProducts(searchedProducts) {
  const searchedProductsContainer = document.createElement("div");
  console.log(searchedProductsContainer);

  searchedProductsContainer.className = "searched-products grid-4cols";
  document.querySelector(".search").appendChild(searchedProductsContainer);
  if (searchedProducts.length > 0) {
    searchedProducts.forEach((product) => {
      searchedProductsContainer.innerHTML += `<a href="jacket-specific.html?id=${product.id}"  >
                                                <figure class="jacket">
                                                  <img class="product-img" src="${product.images[0].src}" alt="${product.name}"/>
                                                  <figcaption class="jacket-text">
                                                    <p class="jacket-nr">${product.short_description}</p>
                                                    <h2 class="heading-tertiary">${product.name}</h2>
                                                    <span class="product-rating">&#11088; &#11088; &#11088; &#11088; (${product.id}) </span>
                                                    <p class="product-price">${product.prices.price} kr</p>
                                                  </figcaption>
                                                </figure>
                                              </a>`;
    });
  } else {
    searchedProductsContainer.innerHTML = `<p class="search-input-fail">Please type in words like: running, kid, cyckling.</p>`;
  }
}

function valami() {
  const searchedProductsContainer = document.createElement("div");
  console.log(searchedProductsContainer);
  searchedProductsContainer.innerHTML = "";
}
