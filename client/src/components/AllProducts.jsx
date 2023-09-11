import useCategories from "../store/categories";
import useProducts from "../store/product";
import styles from "./ProductList.module.scss";
import Product from "./shared/Product";

const AllProducts = () => {
  const products = useProducts((state) => state.products);
  const categories = useCategories((state) => state.categories);

  const filterProductsByCategory = (category_id) => {
    return products.filter((p) => p.category_id == category_id);
  };

  return (
    <div className={styles.productsContainer}>
      {categories.map((c, idx) => (
        <div key={idx}>
          <h3>{c.category_name}</h3>
          <div className="mt-2"></div>
          <div className={styles.productListContainer}>
            {filterProductsByCategory(c.category_id).map((p) => (
              <Product {...p} key={p.product_id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
