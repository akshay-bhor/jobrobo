import connection from "../lib/axios";

export const getCategoryTreeAPI = () => connection.get("/categories");

export const searchProductsAPI = (query) =>
  connection.get("/search?searchTerm=" + encodeURIComponent(query));

export const fetchProductsAPI = () => connection.get("/products");

export const authenticationAPI = (data) => connection.post("/auth", data);

export const getProductsByCategoryAPI = (category_id) =>
  connection.get("/category/" + category_id + "/products");
