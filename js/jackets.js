import { displayMessage } from "./components/helperFunctions.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";
import { url, per_page } from "./config.js";

const jacketsConatiner = document.querySelector(".jackets");
const categoriBtn = document.querySelectorAll(".btn-category");

async function getProduct(url) {
  try {
    const respons = await fetch(url);
    const products = await respons.json();
    displayProduct(products);
  } catch (error) {
    jacketsConatiner.innerHTML = displayMessage("An error has occurred", "error");
  }
}
getProduct(url);

categoriBtn.forEach((category) => {
  category.onclick = (event) => {
    changeAvtiveStyle(category);
    const categoryChosen = event.target.value;

    jacketsConatiner.innerHTML = "";
    const newUrl = `https://edinaisztojka.store/rainydays/wp-json/wc/v3/products?category=${categoryChosen}&per_page=${per_page}&consumer_key=ck_f07b7741347d56ee139639a72347557cdc7abcb8&consumer_secret=cs_e18ec68d36df4889d53332ac9359abcd504d98e3`;

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
                      <p class="product-price">${products[i].price} kr</p>
                    </figcaption>
                  </figure>
                </a>`;
    jacketsConatiner.innerHTML += html;
  }
}
