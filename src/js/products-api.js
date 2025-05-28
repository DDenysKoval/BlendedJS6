// Функції для роботи з бекендом
import axios from "axios";
import { params } from "./constants";

export async function getProductList() {
  try {
    const response = await axios.get("https://dummyjson.com/products/category-list");
    return response;
  } catch(error) {
    console.log(error.message);
  }
}

export async function getAllProducts() {
  try {
    const response = await axios.get("https://dummyjson.com/products/", { params });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
