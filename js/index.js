import { products } from "./products.js";

const salesContainer = document.querySelector(".products");

for (let i = 0; i < products.length; i++) {
  if (products[i].sale === true) {
    salesContainer.innerHTML += `<div class="product">
                                    <div class="sale">${products[i].sale_nr}</div>
                                    <img class="product-img" src="${products[i].image}" alt="${products[i].name}" />
                                    <h3 class="product-name">${products[i].name}</h3>
                                    <p class="product-code">${products[i].product_code}</p>
                                    <span class="product-rating">${products[i].rating} (${products[i].id}) </span>
                                    <p class="product-price">${products[i].price} kr</p> 
                                    <a href="jacket-specific.html?id=${products[i].id}" class="btn-cta">Buy Now</a>
                                  </div>`;
  }
}
