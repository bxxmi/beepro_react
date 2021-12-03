import React from "react";
import styles from "./delete_button.module.css";

const DeleteButtons = ({ id, onDelete }) => {
  const checkId = () => {
    onDelete(id);
  };

  return (
    <button className={styles.delete} onClick={checkId}>
      <i className="fas fa-eraser"></i>
    </button>
  );
};

export default DeleteButtons;
