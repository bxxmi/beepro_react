import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./navigation.module.css";

const Navigation = ({ authService }) => {
  let [userName, setUserName] = useState("");
  let [userImage, setUserImage] = useState("");

  const nameRef = useRef();
  const imgRef = useRef();

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUserName(user.displayName);
        setUserImage(user.photoURL);
      }
    });
  });

  console.log(nameRef.current);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Beepro</h1>
      </div>
      <div className={styles.userinfo}>
        <p ref={nameRef}>반갑습니다. {userName}님</p>
        <img src={userImage} alt="profile" ref={imgRef} />
      </div>
      <div className={styles.menu}>카드만들기</div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Navigation;
