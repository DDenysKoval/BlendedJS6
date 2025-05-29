//Логіка сторінки Home
import { refs } from "./js/refs";
import { renderPage, renderProducts, renderSelectCategory } from "./js/handlers";

document.addEventListener("DOMContentLoaded", renderPage);


refs.form.addEventListener("submit", renderProducts);

refs.categoriesList.addEventListener("click", renderSelectCategory);