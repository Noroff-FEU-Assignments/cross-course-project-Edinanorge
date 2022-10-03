import { checkLength } from "./helperFunctions.js";
import { formChekout } from "./constans.js";
import { cartProducts } from "./constans.js";
import { checkoutButton } from "./constans.js";
import { displayMessage } from "./helperFunctions.js";
import { formSuccess } from "./constans.js";
import { fullName } from "./constans.js";
import { fullNameError } from "./constans.js";
import { message } from "./constans.js";
import { messageError } from "./constans.js";
import { email } from "./constans.js";
import { emailError } from "./constans.js";
import { validateEmail } from "./helperFunctions.js";

export function validateFormCheckout(event) {
  event.preventDefault();
  if (checkLength(fullName.value, 0) && isNaN(fullName.value)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (checkLength(cardNumber.value, 15) === true) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
  }
  if (checkLength(date.value, 0)) {
    dateError.style.display = "none";
  } else {
    dateError.style.display = "block";
  }
  if (checkLength(cvc.value, 2) === true) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
  }
  if (
    checkLength(fullName.value, 0) &&
    isNaN(fullName.value) &&
    checkLength(cardNumber.value, 15) &&
    checkLength(cvc.value, 2) &&
    checkLength(date.value, 0)
  ) {
    formChekout.reset();
    cartProducts.innerHTML = displayMessage("Thank you for your order!");
    checkoutButton.disabled = true;
    checkoutButton.classList.add("disabled");
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
    validateEmail(email.value) === true &&
    checkLength(message.value, 25) === true
  ) {
    form.reset();
    formSuccess.style.display = "block";
    formSuccess.innerHTML = "Thank you! Your message has been sent to our team.";
  }
}
