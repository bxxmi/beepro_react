import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./navigation.module.css";

const Navigation = memo(({ authService }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    image: "",
  });

  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      } else {
        setUser({
          id: user.uid,
          name: user.displayName,
          image: user.photoURL,
        });
      }
    });
  }, [user, authService, navigate]);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>π Beepro</h1>
      </div>
      <div className={styles.userinfo}>
        <p>
          λ°κ°μ΅λλ€ <span>{user.name}</span> λ π
        </p>
        <img src={user.image} alt="profile" />
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_title}>
          <i className="fas fa-plus-circle"></i>
          <p>νλ‘μ νΈ μΉ΄λ</p>
        </div>
      </div>
      <button onClick={onLogout} className={styles.logout}>
        <i className="fas fa-sign-out-alt"></i>
        Logout
      </button>
    </div>
  );
});

export default Navigation;
