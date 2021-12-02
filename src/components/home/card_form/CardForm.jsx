import React, { useRef } from "react";
import styles from "./card_form.module.css";

const CardForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const roleRef = useRef();
  const descriptionRef = useRef();
  const startRef = useRef();
  const dueRef = useRef();
  const colorRef = useRef();

  const handleRadio = (event) => {
    const color = event.target.value;
    colorRef.current = color;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      projectId: Date.now(), //uuid 사용하기
      projectName: nameRef.current.value || "No Title",
      projectRole: roleRef.current.value || "No Role",
      description: descriptionRef.current.value || "No Description",
      startDate: startRef.current.value || "No Date",
      dueDate: dueRef.current.value || "No Date",
      color: colorRef.current,
      fileName: "",
      fileURL: "",
    };

    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        name="projectName"
        placeholder="Project Name"
      />
      <input ref={roleRef} type="text" name="projectRole" placeholder="Role" />
      <input
        ref={descriptionRef}
        type="text"
        name="description"
        placeholder="Description"
      />
      <input
        ref={startRef}
        type="date"
        name="startDate"
        placeholder="Start Date"
      />
      <input ref={dueRef} type="date" name="dueDate" placeholder="Due Date" />
      <input
        ref={colorRef}
        type="radio"
        name="color"
        value="basic"
        onChange={handleRadio}
      />
      Basic
      <input
        ref={colorRef}
        type="radio"
        name="color"
        value="red"
        onChange={handleRadio}
      />
      Red
      <input
        ref={colorRef}
        type="radio"
        name="color"
        value="yellow"
        onChange={handleRadio}
      />
      Yellow
      <input
        ref={colorRef}
        type="radio"
        name="color"
        value="green"
        onChange={handleRadio}
      />
      Green
      <input
        ref={colorRef}
        type="radio"
        name="color"
        value="blue"
        onChange={handleRadio}
      />
      Blue
      <input
        ref={colorRef}
        type="radio"
        name="color"
        value="purple"
        onChange={handleRadio}
      />
      Purple
      <input type="text" placeholder="image" />
      <button onClick={onSubmit}>등록</button>
    </form>
  );
};

export default CardForm;
