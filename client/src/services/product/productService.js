import useProducts from "../../store/product";
import { fetchProductsAPI, searchProductsAPI } from "../apis";

export const searchProduct = async (query) => {
  try {
    const res = await searchProductsAPI(query);
    const productData = res.data;

    console.log("res", productData);
    useProducts.getState().updateProducts(productData);

    return {
      error: false,
      message: "Success",
    };
  } catch (err) {
    console.error(err);
    return {
      error: true,
      message: "Something went wrong",
    };
  }
};

export const fetchProducts = async () => {
    try {
      const res = await fetchProductsAPI();
      const productData = res.data;
  
      console.log("res", productData);
      useProducts.getState().updateProducts(productData);
  
      return {
        error: false,
        message: "Success",
      };
    } catch (err) {
      console.error(err);
      return {
        error: true,
        message: "Something went wrong",
      };
    }
  };
