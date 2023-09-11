/* eslint-disable */
import useCart from "../../store/cart";
import Button from "./Button/Button";
import styles from "./Product.module.scss";

const Product = (props) => {
  const addToCart = useCart((state) => state.addToCart);

  const add = (product) => {
    addToCart(product);
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.imgContainer}>
        <img
          src={`/images/${props.img_url}`}
          alt=""
          className={styles.productImg}
        />
      </div>
      <div className={styles.productName}>{props.product_name}</div>
      <div className={styles.productPrice}>{props.price}</div>
      <Button onClick={() => add(props)}>Add to Cart</Button>
    </div>
  );
};

export default Product;
