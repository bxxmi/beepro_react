import React, { useEffect } from "react";
import LoginHeader from "./header/LoginHeader";
import LoginFooter from "./footer/LoginFooter";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((response) => goHome(JSON.stringify(response)));
  };

  const goHome = (userInfo) => {
    navigate("/main", {
      state: userInfo,
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goHome(user);
    });
  });

  return (
    <div className={styles.login_area}>
      <div className={styles.login}>
        <LoginHeader />
        <section className={styles.social}>
          <button onClick={onLogin} className={styles.google}>
            <img src="/google-icon.png" alt="google" />
            LOGIN WITH GOOGLE
          </button>
          <button onClick={onLogin} className={styles.github}>
            <img src="/github-icon.png" alt="github" />
            LOGIN WITH GITHUB
          </button>
        </section>
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
