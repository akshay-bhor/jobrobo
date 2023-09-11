import useProducts from "../../store/product";
import {
  fetchProductsAPI,
  getProductsByCategoryAPI,
  searchProductsAPI,
} from "../apis";

export const searchProduct = async (query) => {
  try {
    useProducts.getState().setLoading(true);
    const res = await searchProductsAPI(query);
    const productData = res.data;

    console.log("res", productData);
    useProducts.getState().updateProducts(productData);
    useProducts.getState().setLoading(false);

    return {
      error: false,
      message: "Success",
    };
  } catch (err) {
    useProducts.getState().setLoading(false);
    console.error(err);
    return {
      error: true,
      message: "Something went wrong",
    };
  }
};

export const fetchProducts = async () => {
  try {
    useProducts.getState().setLoading(true);
    const res = await fetchProductsAPI();
    const productData = res.data;

    console.log("res", productData);
    useProducts.getState().updateProducts(productData);
    useProducts.getState().setLoading(false);

    return {
      error: false,
      message: "Success",
    };
  } catch (err) {
    useProducts.getState().setLoading(false);
    console.error(err);
    return {
      error: true,
      message: "Something went wrong",
    };
  }
};

export const fetchProductByCategory = async (categoryId) => {
  try {
    useProducts.getState().setLoading(true);
    const res = await getProductsByCategoryAPI(categoryId);
    const productData = res.data;

    console.log("res", productData);
    useProducts.getState().updateProducts(productData);
    useProducts.getState().setLoading(false);

    return {
      error: false,
      message: "Success",
    };
  } catch (err) {
    useProducts.getState().setLoading(false);
    console.error(err);
    return {
      error: true,
      message: "Something went wrong",
    };
  }
};
