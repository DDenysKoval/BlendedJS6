//Функцію для створення, рендеру або видалення розмітки
import { refs } from "./refs";

export function createCategoriesMarkup(arr) {
  arr.unshift("All");
  return arr.map(item => `
    <li class="categories__item">
      <button class="categories__btn" type="button">${item}</button>
    </li>`)
    .join("");
}

export function createProductsMarkup(arr) {
  return arr.map(product => `
    <li class="products__item" data-id="${product.id}">
      <img class="products__image" src="${product.thumbnail}" alt="${product.description}"/>
      <p class="products__title">${product.title}</p>
      <p class="products__brand"><span class="products__brand--bold">Brand: ${product.brand}</span></p>
      <p class="products__category">Category: ${product.category}  </p>
      <p class="products__price">Price: ${product.price}$</p>
    </li>`)
    .join("");;
}

export function hideLoadMoreBtn() {
  refs.loadMore.classList.add("hidden");
}

export function showLoadMoreBtn() {
  refs.loadMore.classList.remove("hidden");
}
