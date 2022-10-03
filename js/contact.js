import { form } from "./constans.js";
import { validateForm } from "./formValidation.js";

form.addEventListener("submit", validateForm);
