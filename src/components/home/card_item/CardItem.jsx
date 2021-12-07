import React, { useRef } from "react";
import styles from "./card_item.module.css";
import DeleteButton from "../button/DeleteButton";

const DEFAULT_IMAGE = "/ghost-icon.jpg";

const CardItem = ({ card, onDelete, onEdit, FileInput }) => {
  const titleRef = useRef();
  const roleRef = useRef();
  const descriptionRef = useRef();
  const startDateRef = useRef();
  const dueDateRef = useRef();

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

  const onFileChange = (file) => {
    onEdit({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    onEdit({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <li className={`${styles.card} ${pickColor(color)}`}>
      <div className={styles.photo}>
        <img src={url} alt="profile image" />
      </div>
      <div className={styles.info}>
        <div className={styles.info_title}>
          <input
            type="text"
            name="projectName"
            ref={titleRef}
            defaultValue={projectName}
            onChange={onChange}
          />
        </div>
        <div className={styles.info_role}>
          <span>역할</span>
          <input
            type="text"
            name="projectRole"
            ref={roleRef}
            defaultValue={projectRole}
            onChange={onChange}
          />
        </div>
        <div className={styles.info_description}>
          <span>프로젝트 상세</span>
          <input
            type="text"
            name="description"
            ref={descriptionRef}
            defaultValue={description}
            onChange={onChange}
          />
        </div>
        <div className={styles.info_startDate}>
          <span>시작일</span>
          <input
            type="date"
            name="startDate"
            ref={startDateRef}
            defaultValue={startDate}
            onChange={onChange}
          />
        </div>
        <div className={styles.info_dueDate}>
          <span>마감일</span>
          <input
            type="date"
            name="dueDate"
            ref={dueDateRef}
            defaultValue={dueDate}
            onChange={onChange}
          />
        </div>
        <FileInput onChange={onChange} onFileChange={onFileChange} />
        <div className={styles.info_buttons}>
          <DeleteButton id={projectId} onDelete={onDelete} />
        </div>
      </div>
    </li>
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
