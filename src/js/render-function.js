//Функцію для створення, рендеру або видалення розмітки
import { refs } from "./refs";

export function createCategoriesMarkup(arr) {
  return arr.map(item => `
    <li class="categories-item">${item}</li>`)
    .join("");
}

export function createProductsMarkup(arr) {
  return arr.map(product => `
    <li class="product-item">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-text">${product.brand}</p>
      <img src="${product.thumbnail}" alt="${product.description}">
      <p class="product-price">$${product.price}</p>
    </li>`)
    .join("");;
}