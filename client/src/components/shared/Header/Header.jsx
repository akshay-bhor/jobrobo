import styles from "./Header.module.scss";
import logo from "../../../assets/logo.webp";
import SearchForm from "./SearchForm";
import Button from "../Button/Button";
import { useState } from "react";
import MenuContainer from "./Menu";
import UserInfo from "./UserInfo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          {showMenu && <MenuContainer />}
        </div>
        <div className={styles.search}>
          <SearchForm />
        </div>
        <div className={styles.userContainer}>
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Header;
