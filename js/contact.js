import { form } from "./constans.js";
import { formSuccess } from "./constans.js";
import { fullName } from "./constans.js";
import { fullNameError } from "./constans.js";
import { message } from "./constans.js";
import { messageError } from "./constans.js";
import { email } from "./constans.js";
import { emailError } from "./constans.js";
import { checkLength } from "./helperFunctions.js";
import { validateEmail } from "./helperFunctions.js";

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
