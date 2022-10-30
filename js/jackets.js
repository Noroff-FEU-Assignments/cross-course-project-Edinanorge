import { displayMessage } from "./components/helperFunctions.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";
import { url, per_page } from "./config.js";

const jacketsConatiner = document.querySelector(".jackets");
const categories = document.querySelectorAll(".category");

const urlAll = url + `?${per_page}`;

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  cartIconIndicator();
  displayProducts(products);
  try {
  } catch (error) {
    jacketsConatiner.innerHTML = displayMessage(`An error has occurred: ${error}`, "error");
    console.error(error);
  }
}
getProducts(urlAll);

// add event listener to category button
categories.forEach(function (category) {
  category.onclick = function (event) {
    changeAvtiveStyle(category);
    let urlCategory;
    if (event.target.id === "all") {
      getProducts(urlAll);
    } else {
      const categoryChosen = event.target.value;
      urlCategory = url + `?category=${categoryChosen}`;
    }

    jacketsConatiner.innerHTML = "";
    getProducts(urlCategory);
  };
});

function changeAvtiveStyle(activeItem) {
  const categoriBtn = document.querySelectorAll(".category-btn");
  for (let i = 0; i < categoriBtn.length; i++) {
    categoriBtn[i].classList.remove("active");
  }
  activeItem.classList.add("active");
}

function displayProducts(products) {
  jacketsConatiner.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    jacketsConatiner.innerHTML += `<a href="jacket-specific.html?id=${products[i].id}">
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
