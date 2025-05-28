// Функції, які передаються колбеками в addEventListners
import { getProductList } from "./products-api";
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

export async function renderProducts(e) {
  e.preventDefault();
  try {
    const response = await getAllProducts();
    refs.productsList.innerHTML = createProductsMarkup(response.data.products);
  } catch (error) {
    console.log(error.message);
  }
}

