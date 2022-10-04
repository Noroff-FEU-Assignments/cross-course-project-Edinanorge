import { products } from "./products.js";
import { jacketsConatiner } from "./constans.js";
import { categoriBtn } from "./constans.js";
import { displayMessage } from "./helperFunctions.js";

if (!products) {
  jacketsConatiner.innerHTML = displayMessage("An error has occurred", "error");
} else {
  displayProduct(products);
}

for (let i = 0; i < categoriBtn.length; i++) {
  categoriBtn[i].addEventListener("click", filterProducts.bind(this, categoriBtn[i]));
}

function filterProducts(item) {
  changeAvtiveStyle(item);
  console.log(item.attributes.id.value);

  if (item.attributes.id.value == "all") {
    displayProduct(products);
  } else {
    const filterdProduct = products.filter(({ category }) => category == item.attributes.id.value);
    displayProduct(filterdProduct);
  }
}

function changeAvtiveStyle(activeItem) {
  for (let i = 0; i < categoriBtn.length; i++) {
    categoriBtn[i].classList.remove("active");
  }
  activeItem.classList.add("active");
}

function displayProduct(products) {
  jacketsConatiner.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    jacketsConatiner.innerHTML += `<a href="jacket-specific.html?id=${products[i].id}" >
                                    <figure class="jacket">
                                      <img class="product-img" src="${products[i].image}" alt="${products[i].name}"/>
                                    <figcaption class="jacket-text">
                                      <p class="jacket-nr">${products[i].product_code}</p>
                                      <h3 class="heading-tertiary">${products[i].name}</h3>
                                      <span class="product-rating">${products[i].rating} (${products[i].id}) </span>
                                      <p class="product-price">${products[i].price} kr</p>
                                      
                                    </figcaption>
                                    </figure>
                                  </a>`;
  }
}
