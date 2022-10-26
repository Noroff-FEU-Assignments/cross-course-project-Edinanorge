import { displayMessage } from "./helperFunctions.js";
import { url } from "../config.js";

const searchedProducts = document.querySelector(".searched-products");
const searchInput = document.querySelector(".search");
const searchButton = document.querySelector(".search-btn");

searchButton.onclick = () => {
  const searchInput = document.querySelector(".search").value;
  const newUrl = url + `&search=${searchInput}`;

  async function getSerachedProducts(url) {
    try {
      const respons = await fetch(url);
      const searchedProducts = await respons.json();
      console.log(searchedProducts);

      for (let i = 0; i < searchedProducts.length; i++) {
        searchedProducts.innerHTML += `<a href="jacket-specific.html?id=${searchedProducts[i].id}" >
                                        <figure class="jacket">
                                          <img class="product-img" src="${searchedProducts[i].images[0].src}" alt="${searchedProducts[i].name}"/>
                                        <figcaption class="jacket-text">
                                          <p class="jacket-nr">${searchedProducts[i].short_description}</p>
                                          <h2 class="heading-tertiary">${searchedProducts[i].name}</h2>
                                          <span class="product-rating">&#11088; &#11088; &#11088; &#11088; (${searchedProducts[i].id}) </span>
                                          <p class="product-price">${searchedProducts[i].price} kr</p>
    
                                        </figcaption>
                                        </figure>
                                      </a>`;
      }
    } catch (error) {
      searchedProducts.innerHTML = displayMessage("Error", "error");
      console.log(error);
    }
  }
  getSerachedProducts(newUrl);
};

// let searchItem = [];

// searchInput.addEventListener("change", (e) => {
//   const searchInput = e.target.value.toLowerCase();
//   console.log(searchInput);
//   products.forEach((product) => {
//     const search = product.name.toLowerCase().includes(searchInput);
//     console.log(search);

//     if (search) {
//       searchedProducts.innerHTML = `${searchInput}`;
//     } else {
//       searchedProducts.innerHTML = ``;
//     }
//   });
// });
