import { products } from "./products.js";

const salesContainer = document.querySelector(".products");

displaySaleProducts(products);

function displaySaleProducts(products) {
  salesContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let html;
    if (products[i].sale === true) {
      html = `<a href="jacket-specific.html?id=${products[i].id}" >
                                        <figure class="jacket product">
                                        <div class="sale">${products[i].sale_nr}</div>
                                          <img class="product-img" src="${products[i].image}" alt="${products[i].name}"/>
  
                                          <figcaption class="jacket-text">
                                          <p class="jacket-nr">${products[i].product_code}</p>
                                          <h3 class="heading-tertiary">${products[i].name}</h3>
                                          <span class="product-rating">${products[i].rating} (${products[i].id}) </span>
                                          <p class="product-price">${products[i].price} <strong>kr</strong></p>
                                        </figcaption>
                                        </figure>
                                    </a>`;
      salesContainer.innerHTML += html;
    }
  }
}
