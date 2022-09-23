const jacketsConatiner = document.querySelector(".jackets");

for (let i = 0; i < products.length; i++) {
  jacketsConatiner.innerHTML += `<a href="jacket-specific.html?id=${products[i].id}">
                                  <figure class="jacket">
                                   <img class="product-img" src="${products[i].image}" alt="${products[i].name}"/>
                                  <figcaption class="jacket-text">
                                    <h3 class="heading-tertiary">${products[i].name}</h3>
                                    <p class="jacket-nr">${products[i].product_code}</p>
                                    <span class="product-rating">${products[i].rating} (${products[i].id}) </span>
                                    <p class="price">${products[i].price} kr</p>
                                  </figcaption>
                                  </figure>
                                </a> `;
}
