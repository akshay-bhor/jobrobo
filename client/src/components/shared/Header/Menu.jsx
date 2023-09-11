/* eslint-disable */
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import useCategories from "../../../store/categories";
import useProducts from "../../../store/product";
import { fetchProductByCategory } from "../../../services/product/productService";

const MenuContainer = (props) => {
  const categoryTree = useCategories((state) => state.categories);

  return (
    <div className={styles.container}>
      <MenuList list={categoryTree} {...props} />
    </div>
  );
};

export default MenuContainer;

const MenuList = (props) => {
  const updateProductMode = useProducts((state) => state.updateMode);
  const [newMenu, setNewMenu] = useState();
  const treelist = props.list;

  useEffect(() => {
    setNewMenu();
  }, [props.list]);

  const selectMenu = (id) => {
    const selected = treelist.find((l) => l.category_id == id);
    if (selected && selected.children != null) {
      setNewMenu(selected.children);
    }
  };

  const filterProductsByCategory = (categoryId) => {
    updateProductMode("category");
    fetchProductByCategory(categoryId);
    props.setShowMenu(false);
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {treelist.map((l, idx) => (
          <div key={idx} className={styles.item}>
            <span
              className="cursor-pointer"
              onClick={() => filterProductsByCategory(l.category_id)}
            >
              {l.category_name}
            </span>
            <span
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                selectMenu(l.category_id);
              }}
            >
              {l.children && ">"}
            </span>
          </div>
        ))}
      </div>
      {newMenu && <MenuList list={newMenu} setShowMenu={props.setShowMenu} />}
    </div>
  );
};
