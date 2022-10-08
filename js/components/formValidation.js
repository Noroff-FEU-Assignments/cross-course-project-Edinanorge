import { checkLength, displayMessage, validateEmail } from "../helperFunctions.js";
import {
  formCheckout,
  productsInCart,
  checkoutButton,
  formSuccess,
  fullName,
  fullNameError,
  message,
  messageError,
  email,
  emailError,
  address,
  addressError,
  date,
  dateError,
  cvc,
  cvcError,
} from "../constans.js";

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
    formChekout.reset();
    productsInCart.innerHTML = displayMessage("Thank you for your order!", "success");
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
    validateEmail(email.value) &&
    checkLength(message.value, 25)
  ) {
    form.reset();
    formSuccess.style.display = "block";
    formSuccess.innerHTML = "Thank you! Your message has been sent to our team.";
  }
}
