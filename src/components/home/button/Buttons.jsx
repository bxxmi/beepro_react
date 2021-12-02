import React from "react";
import styles from "./button.module.css";

const Buttons = ({ card }) => {
  const deleteCard = (id) => {
    console.log(id);
  };

  return (
    <div className={styles.buttons}>
      <button className={styles.edit}>
        <i className="fas fa-pencil-alt"></i>
      </button>
      <button className={styles.delete} onClick={deleteCard(card.projectId)}>
        <i className="fas fa-eraser"></i>
      </button>
    </div>
  );
};

export default Buttons;
