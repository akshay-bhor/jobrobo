import connection from "../lib/axios";

export const getCategoryTreeAPI = () => connection.get("/categories");

export const searchProductsAPI = (query) => connection.get("/search?searchTerm=" + encodeURIComponent(query))

export const fetchProductsAPI = () => connection.get("/products")
