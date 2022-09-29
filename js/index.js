import { products } from "./products.js";

const salesContainer = document.querySelector(".products");

for (let i = 0; i < products.length; i++) {
  if (products[i].sale === true) {
    salesContainer.innerHTML += `<a href="jacket-specific.html?id=${products[i].id}" >
                                    <figure class="jacket product">
                                    <div class="sale">${products[i].sale_nr}</div>
                                      <img class="product-img" src="${products[i].image}" alt="${products[i].name}"/>
                                    <figcaption class="jacket-text">
                                      <h3 class="heading-tertiary">${products[i].name}</h3>
                                      <p class="jacket-nr">${products[i].product_code}</p>
                                      <p class="product-price">${products[i].price} kr</p>
                                      <span class="product-rating">${products[i].rating} (${products[i].id}) </span>
                                      
                                    </figcaption>
                                    </figure>
                                  </a>`;
  }
}
