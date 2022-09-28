const cartProducts = document.querySelector(".cart-product-container");

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

const product = products.find(({ id }) => id == productId);

if (!product) {
  cartProducts.innerHTML = `<h2 class="heading-secondary">Your cart is currently empty.</h2>`;
} else {
  cartProducts.innerHTML += `<div class="cart-products">
                              <div>
                                <h2>ITEM</h2>
                                <img src="${product.image}" alt="${product.name}" width=100px height=100px/>
                              
                                
                                <h4>${product.name}</h4>
                                <p>${product.product_code}</p>
                              </div>
                              <div>
                                <h2>QUANTITY</h2>
                                <select name="quantity" id="quantity">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="0">0</option>
                                </select>
                              </div>
                              <div>
                                <h2>PRICE</h2>
                                <h3>${product.price} kr</h3>
                              </div>`;
}

// const quantity = document.querySelectorAll("option");
// for (let i = 0; i < quantity.length; i++) {
//   console.log(quantity[i].value);

//   if (quantity[i].value === 0) {
//     cartProducts.innerHTML = "";
//   }
// }
