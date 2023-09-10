/* eslint-disable */
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import useCategories from "../../../store/categories";

const MenuContainer = () => {
  const categoryTree = useCategories((state) => state.categories);

  return (
    <div className={styles.container}>
      <MenuList list={categoryTree} />
    </div>
  );
};

export default MenuContainer;

const MenuList = (props) => {
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

  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {treelist.map((l, idx) => (
          <div
            key={idx}
            onClick={() => selectMenu(l.category_id)}
            className={styles.item}
          >
            <span>{l.category_name}</span>
            <span>{l.children && ">"}</span>
          </div>
        ))}
      </div>
      {newMenu && <MenuList list={newMenu} />}
    </div>
  );
};
