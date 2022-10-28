import { form, validateForm } from "./components/formValidation.js";
import { cartIconIndicator } from "./components/cartItemsCounter.js";

form.addEventListener("submit", validateForm);
cartIconIndicator();
