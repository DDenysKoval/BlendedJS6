//Логіка сторінки Home
import { refs } from "./js/refs";
import { renderPage, renderSelectCategory, renderLoadMore } from "./js/handlers";

document.addEventListener("DOMContentLoaded", renderPage);

refs.categoriesList.addEventListener("click", renderSelectCategory);

refs.loadMore.addEventListener("click", renderLoadMore);