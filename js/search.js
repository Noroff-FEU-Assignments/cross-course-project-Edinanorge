import { products } from "./products.js";
const searchedProducts = document.querySelector(".searched-products");
const searchInput = document.querySelector(".search");

let searchItem = [];

searchInput.addEventListener("change", (e) => {
  const searchInput = e.target.value.toLowerCase();
  console.log(searchInput);
  products.forEach((product) => {
    const search = product.name.toLowerCase().includes(searchInput);
    console.log(search);

    if (search) {
      searchedProducts.innerHTML = `${searchInput}`;
    } else {
      searchedProducts.innerHTML = ``;
    }
  });
});
