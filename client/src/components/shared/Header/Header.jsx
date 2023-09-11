import styles from "./Header.module.scss";
import logo from "../../../assets/logo.webp";
import SearchForm from "./SearchForm";
import Button from "../Button/Button";
import { useState } from "react";
import MenuContainer from "./Menu";
import UserInfo from "./UserInfo";
import cartImg from "../../../assets/shopping-cart.png";
import useCart from "../../../store/cart";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const cart = useCart((state) => state.cart);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.dropdownBtnContainer}>
          <Button
            className="mt-2"
            onClick={() => setShowMenu((prevState) => !prevState)}
          >
            Shop by Category
          </Button>
          {showMenu && <MenuContainer setShowMenu={setShowMenu} />}
        </div>
        <div className={styles.search}>
          <SearchForm />
        </div>
        <div className={styles.userContainer}>
          <UserInfo />
        </div>
        <div className={styles.cartContainer}>
          <img src={cartImg} />
          <div className={styles.cartCount}>{cart.length > 0 && cart.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
