import { displayMessage } from "./components/helperFunctions.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";
import { url, per_page } from "./config.js";

const jacketsConatiner = document.querySelector(".jackets");
const categories = document.querySelectorAll(".categories");
console.log(categories);

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  jacketsConatiner.innerHTML = "";

  cartIconIndicator();
  displayProducts(products);
  try {
  } catch (error) {
    jacketsConatiner.innerHTML = displayMessage(`An error has occurred: ${error}`, "error");
    console.error(error);
  }
}
getProducts(url);

//add event listener to category button
categories.forEach(function (category) {
  category.onclick = function (event) {
    let newUrl;
    if (event.target.id === "all") {
      getProducts(url);
    } else {
      const categoryChosen = event.target.value;
      newUrl = `https://edinaisztojka.store/rainydays/wp-json/wc/store/products?category=${categoryChosen}&per_page=20`;
    }
    jacketsConatiner.innerHTML = "";
    getProducts(newUrl);
  };
});

function displayProducts(products) {
  jacketsConatiner.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    jacketsConatiner.innerHTML += `<a href="jacket-specific.html?id=${products[i].id}" >
                  <figure class="jacket">
                    <img class="product-img" src="${products[i].images[0].src}" alt="${products[i].name}"/>
                  <figcaption class="jacket-text">
                    <p class="jacket-nr">${products[i].short_description}</p>
                    <h2 class="heading-tertiary">${products[i].name}</h2>
                    <span class="product-rating">&#11088; &#11088; &#11088; &#11088; (${products[i].id}) </span>
                    <p class="product-price">${products[i].prices.price} kr</p>
                    </figcaption>
                  </figure>
                </a>`;
  }
}
