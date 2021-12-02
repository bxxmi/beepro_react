import React from "react";
import styles from "./card_item.module.css";

const DEFAULT_IMAGE = "/ghost-icon.jpg";

const CardItem = ({ card }) => {
  const {
    projectName,
    projectRole,
    description,
    startDate,
    dueDate,
    cardTheme,
    fileName,
    fileURL,
  } = card;

  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${pickColor(cardTheme)}`}>
      <div className={styles.photo}>
        <img src={url} alt="profile image" />
      </div>
      <div className={styles.info}>
        <h2>{projectName}</h2>
        <p className={styles.role}>{projectRole}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.startDate}>{startDate}</p>
        <p className={styles.dueDate}>{dueDate}</p>
      </div>
    </li>
  );
};

function pickColor(cardTheme) {
  switch (cardTheme) {
    case "red":
      return styles.red;
    case "yellow":
      return styles.yellow;
    case "green":
      return styles.green;
    case "blue":
      return styles.blue;
    case "purple":
      return styles.purple;
    default:
      return styles.basic;
  }
}
export default CardItem;
