import React, { memo, useRef, useState } from "react";
import styles from "./card_form.module.css";

const CardForm = memo(({ FileInput, onAdd }) => {
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const [show, setShow] = useState(false);

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
      projectId: Date.now(),
      projectName: nameRef.current.value || "No Title",
      projectRole: roleRef.current.value || "No Role",
      description: descriptionRef.current.value || "No Description",
      startDate: startRef.current.value || "No Date",
      dueDate: dueRef.current.value || "No Date",
      color: colorRef.current,
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };

    formRef.current.reset();
    showHideForm();

    setFile({
      fileName: null,
      fileURL: null,
    });

    onAdd(card);
  };

  const showHideForm = () => {
    setShow((show) => !show);
  };

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <>
      <button className={styles.toggle_button} onClick={showHideForm}>
        <i className="fas fa-plus-circle"></i>
      </button>
      <form
        ref={formRef}
        className={show ? styles.form_show : styles.form_hide}
      >
        <div className={styles.info_1}>
          <input
            ref={nameRef}
            type="text"
            name="projectName"
            placeholder="Project Name"
          />
          <FileInput onFileChange={onFileChange} />
        </div>
        <div className={styles.info_2}>
          <input
            ref={startRef}
            type="date"
            name="startDate"
            placeholder="Start Date"
          />
          <input
            ref={dueRef}
            type="date"
            name="dueDate"
            placeholder="Due Date"
          />
          <input
            ref={roleRef}
            type="text"
            name="projectRole"
            placeholder="Role"
          />
        </div>
        <div className={styles.info_3}>
          <input
            ref={descriptionRef}
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
        <div className={styles.info_4}>
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
        </div>
        <div className={styles.form_submit}>
          <button onClick={onSubmit}>등 록</button>
        </div>
      </form>
    </>
  );
});

export default CardForm;
