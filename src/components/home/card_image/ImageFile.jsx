import React, { useRef } from "react";
import styles from "./image_file.module.css";

const ImageFile = ({ uploadImage, onFileChange }) => {
  const onChange = async (event) => {
    const upload = await uploadImage.upload(event.target.files[0]);
    onFileChange({
      name: upload.original_filename,
      url: upload.url,
    });
  };

  return (
    <div className={styles.container}>
      <input type="file" accept="image/*" name="file" onChange={onChange} />
    </div>
  );
};

export default ImageFile;
