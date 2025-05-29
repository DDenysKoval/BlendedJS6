// Функції, які передаються колбеками в addEventListners
import { getCategoryItems, getProductList } from "./products-api";
import { refs } from "./refs";
import { createCategoriesMarkup } from "./render-function";
import { getAllProducts } from "./products-api";
import { createProductsMarkup } from "./render-function";

export async function renderPage() {
  try {
    const response = await getProductList();
    refs.categoriesList.innerHTML = createCategoriesMarkup(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

export let currentPage = 1;
export let category;

export async function renderProducts(e) {
  e.preventDefault();
  currentPage = 1;
  try {
    const response = await getAllProducts();
    refs.productsList.innerHTML = createProductsMarkup(response.data.products);
  } catch (error) {
    console.log(error.message);
  }
}

export async function renderSelectCategory(e) {
  currentPage = 1;
  const allButtons = document.querySelectorAll(".categories__btn")
  allButtons.forEach(btn => btn.classList.remove("categories__btn--active"));
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  category = e.target.textContent;
  const selectedCategory = e.target.closest(".categories__btn");
  selectedCategory.classList.add("categories__btn--active");

  try {
    const response = await getCategoryItems(category);
    refs.productsList.innerHTML = createProductsMarkup(response.data.products);
    if (category === "All") {
      const response = await getAllProducts();
      refs.productsList.innerHTML = createProductsMarkup(response.data.products);
    }
  } catch (error) {
    console.log(error.message);
  }
}
