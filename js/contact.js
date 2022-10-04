import { form } from "./constans.js";
import { validateForm } from "./components/formValidation.js";

form.addEventListener("submit", validateForm);
