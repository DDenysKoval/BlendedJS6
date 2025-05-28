//Логіка сторінки Home
import { refs } from "./js/refs";
import { getProductList } from "./js/products-api";
import { createCategoriesMarkup } from "./js/render-function";
import { renderPage, renderProducts } from "./js/handlers";
import { getAllProducts } from "./js/products-api";

document.addEventListener("DOMContentLoaded", renderPage)


refs.form.addEventListener("submit", renderProducts)
