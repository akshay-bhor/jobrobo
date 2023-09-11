import useProducts from "../store/product";
import styles from "./ProductList.module.scss";
import Product from "./shared/Product";

const CategoryProducts = () => {
  const products = useProducts((state) => state.products);

  return (
    <div className={styles.productsContainer}>
      <h3>Category: {products[0].category_name}</h3>
      <div className="mt-2"></div>
      <div className={styles.productListContainer}>
        {products.map((p) => (
          <Product {...p} key={p.product_id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
