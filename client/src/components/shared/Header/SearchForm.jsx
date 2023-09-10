import { Formik, Form } from "formik";
import TextField from "../../form/TextField/TextField";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import {
  fetchProducts,
  searchProduct,
} from "../../../services/product/productService";
import useProducts from "../../../store/product";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const updateProductMode = useProducts((state) => state.updateMode);

  useEffect(() => {
    if (debouncedSearchTerm) {
      updateProductMode("search");
      searchProduct(debouncedSearchTerm);
    } else {
      updateProductMode("all");
      fetchProducts();
    }
  }, [debouncedSearchTerm]);

  return (
    <Formik
      initialValues={{
        search: searchTerm,
      }}
      onSubmit={() => {
        // onSubmit call handled via useEffect
      }}
      className="w-full"
    >
      <Form>
        <TextField
          id="search"
          name="search"
          className={`w-100`}
          handleChange={(val) => setSearchTerm(val)}
          placeholder={`Search for products`}
        />
      </Form>
    </Formik>
  );
};

export default SearchForm;
