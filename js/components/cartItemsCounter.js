export function cartIconIndicator() {
  const indicator = document.querySelector(".cart-icon-indicator");
  let itemsCounter = 0;
  let cartContent = JSON.parse(localStorage.getItem("cartProducts"));
  console.log(cartContent);

  if (cartContent.length == 0) {
    indicator.innerHTML = itemsCounter;
  } else {
    indicator.innerHTML = cartContent.length;
  }
}
cartIconIndicator();
