// Функції, які передаються колбеками в addEventListners
import { getCategoryItems, getProductList } from "./products-api";
import { refs } from "./refs";
import { createCategoriesMarkup, hideLoadMoreBtn, showLoadMoreBtn } from "./render-function";
import { getAllProducts } from "./products-api";
import { createProductsMarkup } from "./render-function";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { limit } from "./products-api";

let currentPage = 1;
let totalPages;
let category;
let inputData;

export async function renderPage() {
  currentPage = 1;
  hideLoadMoreBtn()
  try {
    
    const productListResponse = await getProductList();
    refs.categoriesList.innerHTML = createCategoriesMarkup(productListResponse.data);
    
    const allBtn = document.querySelector(".categories__btn");
    allBtn.closest(".categories__btn").classList.add("categories__btn--active");
    category = "All";

    const allProductResponse = await getAllProducts(currentPage);
    if (allProductResponse.data.products === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images. Please try again!',
      });
      throw new Error("Sorry, there are no images. Please try again!");
    }
    refs.productsList.innerHTML = createProductsMarkup(allProductResponse.data.products);
    totalPages = Math.ceil(allProductResponse.data.total / limit);
    console.log(totalPages);
    

    showLoadMoreBtn()
  } catch (error) {
    console.log(error.message);
  }
}

export async function renderSelectCategory(e) {
  hideLoadMoreBtn()
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
    const response = await getCategoryItems(category, currentPage);
    
    refs.productsList.innerHTML = createProductsMarkup(response.data.products);
    totalPages = Math.ceil(response.data.total / limit);
    console.log(totalPages);
    
    if (category === "All") {
      const response = await getAllProducts(currentPage);
      refs.productsList.innerHTML = createProductsMarkup(response.data.products);
    }
    
    showLoadMoreBtn();
  } catch (error) {
    console.log(error.message);
  }
}

export async function renderLoadMore() {
  currentPage += 1;
  
  hideLoadMoreBtn();
  
  try {
    const card = document.querySelector(".products__item");
    const cardHeight = card.getBoundingClientRect().height;
    if (category === "All") {
      const response = await getAllProducts(currentPage);
      refs.productsList.insertAdjacentHTML("beforeend", createProductsMarkup(response.data.products));
      
      window.scrollBy({
        top: cardHeight,
        behavior: "smooth"
      })
      showLoadMoreBtn();
    }
    const response = await getCategoryItems(category, currentPage);
    refs.productsList.insertAdjacentHTML("beforeend", createProductsMarkup(response.data.products));
    window.scrollBy({
      top: cardHeight,
      behavior: "smooth"
    })
    showLoadMoreBtn()
  } catch (error) {
    console.log(error.message);
  }
}
