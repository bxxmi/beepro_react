import React from "react";
import styles from "./edit_button.module.css";

const EditButton = ({ id, card, onEdit }) => {
  const handleEdit = () => {
    onEdit(card);
  };
  return (
    <button className={styles.edit} onClick={handleEdit}>
      <i className="fas fa-pencil-alt"></i>
    </button>
  );
};

export default EditButton;
