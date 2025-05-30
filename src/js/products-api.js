// Функції для роботи з бекендом
import axios from "axios";


export async function getProductList() {
  try {
    const response = await axios.get("https://dummyjson.com/products/category-list");
    return response;
  } catch(error) {
    console.log(error.message);
  }
}
export const limit = 12;

export async function getAllProducts(currentPage) {
  const params = {
    limit,
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

export async function getCategoryItems(category, currentPage) {
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
