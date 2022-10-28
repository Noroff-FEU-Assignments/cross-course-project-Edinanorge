import { displayMessage } from "./components/helperFunctions.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";
import { url, per_page } from "./config.js";

const jacketsConatiner = document.querySelector(".jackets");
const categoriBtn = document.querySelectorAll(".btn-category");

async function getProduct(url) {
  try {
    const respons = await fetch(url);
    const products = await respons.json();
    cartIconIndicator();
    displayProduct(products);
  } catch (error) {
    jacketsConatiner.innerHTML = displayMessage("An error has occurred", "error");
  }
}
getProduct(url);

categoriBtn.forEach((category) => {
  category.onclick = function (event) {
    changeAvtiveStyle(category);
    const categoryChosen = event.target.value;

    jacketsConatiner.innerHTML = "";
    const newUrl = url + `&category=${categoryChosen}`;

    getProduct(newUrl);
  };
});

function changeAvtiveStyle(activeItem) {
  const categoriBtn = document.querySelectorAll(".btn-category");
  for (let i = 0; i < categoriBtn.length; i++) {
    categoriBtn[i].classList.remove("active");
  }
  activeItem.classList.add("active");
}

function displayProduct(products) {
  jacketsConatiner.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let html = `<a href="jacket-specific.html?id=${products[i].id}" >
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
    jacketsConatiner.innerHTML += html;
  }
}
