// Функції для роботи з бекендом
import axios from "axios";
import { currentPage, renderSelectCategory } from "./handlers";


export async function getProductList() {
  try {
    const response = await axios.get("https://dummyjson.com/products/category-list");
    return response;
  } catch(error) {
    console.log(error.message);
  }
}


export async function getAllProducts() {
  const params = {
    limit: 12,
    skip: (currentPage - 1) * 12,
    orientation: "portrait",
  }
  try {
    const response = await axios.get("https://dummyjson.com/products/", { params });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCategoryItems(category) {
  const params = {
    limit: 12,
    skip: (currentPage - 1) * 12,
    orientation: "portrait",
  }
  try {
    const response = await axios.get(`https://dummyjson.com/products/category/${category}`, { params });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
