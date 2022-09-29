import { products } from "./products.js";
const searchedProducts = document.querySelector(".searched-products");

const searchInput = document.querySelector(".search");

searchInput.addEventListener("change", (e) => {
  const searchInput = e.target.value.toLowerCase();

  products.forEach((product) => {
    const search = product.name.toLowerCase().includes(searchInput);

    if (search) {
      searchedProducts.innerHTML = `${searchInput}`;
      console.log(search);
    } else {
      searchedProducts.innerHTML = ``;
    }
  });
});
