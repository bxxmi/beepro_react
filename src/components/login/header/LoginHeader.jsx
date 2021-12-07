import React from "react";
import styles from "./login_header.module.css";

const HEADER_IMAGE = "/bee-icon.png";

const LoginHeader = () => {
  return (
    <div className={styles.login_header}>
      <p>Beepro</p>
      <img src={HEADER_IMAGE} alt="header" />
    </div>
  );
};

export default LoginHeader;
