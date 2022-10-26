import { checkLength, validateEmail, displayMessage } from "./helperFunctions.js";

// contact form
export const form = document.querySelector("#form");
const formSuccess = document.querySelector(".form-success");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

// checkot form
export const formCheckout = document.querySelector(".form-checkout");
const cardNumber = document.querySelector("#cardNumber");
const cardError = document.querySelector("#cardError");
const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");
export const checkoutButton = document.querySelector(".btn-checkout");
const productsInCart = document.querySelector(".cart-product-container");

export function validateFormCheckout(event) {
  event.preventDefault();
  if (checkLength(fullName.value, 0) && isNaN(fullName.value)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (checkLength(cardNumber.value, 15)) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
  }
  if (checkLength(address.value, 0)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (date.value) {
    dateError.style.display = "none";
  } else {
    dateError.style.display = "block";
  }
  if (checkLength(cvc.value, 2)) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
  }
  if (
    checkLength(fullName.value, 0) &&
    isNaN(fullName.value) &&
    checkLength(address.value, 0) &&
    checkLength(cardNumber.value, 15) &&
    checkLength(cvc.value, 2) &&
    date.value
  ) {
    formCheckout.reset();
    productsInCart.innerHTML = displayMessage(
      `<i class="fa-solid fa-thumbs-up"></i> Thank you for your order!`,
      "success"
    );
    checkoutButton.disabled = true;
    checkoutButton.classList.add("disabled");
    localStorage.clear();
  }
}

export function validateForm(event) {
  event.preventDefault();
  formSuccess.innerText = "";
  formSuccess.style.display = "none";

  if (checkLength(fullName.value, 0) && isNaN(fullName.value)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 25)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (
    checkLength(fullName.value, 0) &&
    isNaN(fullName.value) &&
    validateEmail(email.value) &&
    checkLength(message.value, 25)
  ) {
    form.reset();
    formSuccess.style.display = "block";
    formSuccess.innerHTML = "Thank you! Your message has been sent to our team.";
  }
}
