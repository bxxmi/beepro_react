import React, { useRef } from "react";
import styles from "./card_item.module.css";
import DeleteButton from "../button/DeleteButton";
import EditButton from "../button/EditButton";

const DEFAULT_IMAGE = "/ghost-icon.jpg";

const CardItem = ({ card, onDelete }) => {
  const cardRef = useRef();

  const {
    projectId,
    projectName,
    projectRole,
    description,
    startDate,
    dueDate,
    color,
    fileName,
    fileURL,
  } = card;

  const url = fileURL || DEFAULT_IMAGE;

  return (
    <ul>
      <li ref={cardRef} className={`${styles.card} ${pickColor(color)}`}>
        <div className={styles.photo}>
          <img src={url} alt="profile image" />
        </div>
        <div className={styles.info}>
          <h2>{projectName}</h2>
          <p className={styles.role}>{projectRole}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.startDate}>{startDate}</p>
          <p className={styles.dueDate}>{dueDate}</p>
          <EditButton />
          <DeleteButton id={projectId} onDelete={onDelete} />
        </div>
      </li>
    </ul>
  );
};

function pickColor(color) {
  switch (color) {
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
