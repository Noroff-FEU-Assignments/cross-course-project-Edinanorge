const form = document.querySelector("#form");
const formSuccess = document.querySelector(".form-success");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm(event) {
  event.preventDefault();
  formSuccess.innerText = "";
  formSuccess.style.display = "none";

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (
    checkLength(fullName.value, 0) === true &&
    validateEmail(email.value) === true &&
    checkLength(message.value, 25) === true
  ) {
    form.reset();
    formSuccess.style.display = "block";
    formSuccess.innerHTML = "Thank you! Your message has been sent to our team.";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
