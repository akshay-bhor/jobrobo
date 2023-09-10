import useCategories from "../../store/categories";
import { getCategoryTreeAPI } from "../apis";

export const getCategoryTree = async () => {
  try {
    const res = await getCategoryTreeAPI();
    const categoryData = res.data;

    console.log("res", categoryData);
    useCategories.getState().updateCategories(categoryData);

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
