/* eslint-disable */
import styles from "./Modal.module.scss";

const Modal = (props) => {
  if (!props.open) return null;

  return (
    <div className={styles.modal} onClick={props.close}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={props.close}>
            &times;
          </span>
          <h3>{props.header}</h3>
        </div>
        <div className={styles.modalBody}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
