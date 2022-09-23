const cartProducts = document.querySelector(".cart-product-container");

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

const product = products.find(({ id }) => id == productId);

cartProducts.innerHTML += `<div class="cart-products">
                          <img src="${product.image}" alt="${product.name}"/>
                            <div>
                              <p><strong>${product.name}</strong></p>
                              <p>${product.product_code}</p>
                            </div>
                            <select name="quantity" id="quantity">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="0">0</option>
                            </select>
                            <p><strong>${product.price} kr</strong></p>
                            </div>`;

// const quantity = document.querySelectorAll("option");
// for (let i = 0; i < quantity.length; i++) {
//   console.log(quantity[i].value);

//   if (quantity[i].value === 0) {
//     cartProducts.innerHTML = "";
//   }
// }
