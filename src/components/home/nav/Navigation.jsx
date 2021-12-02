import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./navigation.module.css";

const Navigation = ({ authService }) => {
  const [user, setUser] = useState({
    name: "",
    image: "",
  });

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUser({
          name: user.displayName,
          image: user.photoURL,
        });
      }
    });
  });

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Beepro</h1>
      </div>
      <div className={styles.userinfo}>
        <p>반갑습니다. {user.name}님</p>
        <img src={user.image} alt="profile" />
      </div>
      <div className={styles.menu}>카드만들기</div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Navigation;
