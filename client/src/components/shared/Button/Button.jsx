/* eslint-disable */
import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        styles.button,
        props.className && props.className,
        props.variant == "dark" && styles.dark,
        props.disabled && styles.disabled
      )}
      disabled={props.disabled ? "true" : ""}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
