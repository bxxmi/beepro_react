import React from "react";
import styles from "./edit_button.module.css";

const EditButton = () => {
  return (
    <button className={styles.edit}>
      <i className="fas fa-pencil-alt"></i>
    </button>
  );
};

export default EditButton;
