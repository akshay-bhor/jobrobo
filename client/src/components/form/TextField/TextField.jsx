/* eslint-disable */
import styles from "./TextField.module.scss";
import { useField } from "formik";
import clsx from "clsx";
import closeIcon from "../../../assets/xmark.svg";

const TextField = ({
  id,
  disabled = false,
  placeholder,
  className,
  allowClear,
  handleChange,
  type,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  const handleOnChange = (e) => {
    helpers.setValue(e.target.value);
    if (handleChange) handleChange(e.target.value);
  };

  const clear = () => {
    helpers.setValue("");
    if (handleChange) handleChange("");
};

  return (
    <div className={styles.container}>
      <div className={styles.textfieldcontainer}>
        <div className={styles.textfield}>
          <input
            id={id}
            type={type ? type : `text`}
            className={clsx(className)}
            {...field}
            onChange={handleOnChange}
            disabled={disabled ? true : false}
            placeholder={placeholder ? placeholder : ""}
          />
          {allowClear && <img src={closeIcon} onClick={clear}></img>}
        </div>
      </div>
      {!!errorText && (
        <div
          className={clsx(styles.errortext)}
          id={`${field.name}-error-field`}
        >
          {errorText}
        </div>
      )}
    </div>
  );
};

export default TextField;
