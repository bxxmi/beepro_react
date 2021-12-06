import React, { useRef } from "react";
import styles from "./image_file.module.css";

const ImageFile = ({ uploadImage, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const upload = await uploadImage.upload(event.target.files[0]);
    onFileChange({
      name: upload.original_filename,
      url: upload.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "NO FILE"}
      </button>
    </div>
  );
};

export default ImageFile;
