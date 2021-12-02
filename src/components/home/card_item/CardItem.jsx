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
      <img src={url} alt="profile image" />
      <h1>{projectName}</h1>
      <p>{projectRole}</p>
      <p>{description}</p>
      <p>{startDate}</p>
      <p>{dueDate}</p>
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
