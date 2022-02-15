import React from "react";
import LoginHeader from "./header/LoginHeader";
import LoginFooter from "./footer/LoginFooter";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((response) => goHome(JSON.stringify(response.user.uid)));
  };

  const goHome = (userInfo) => {
    navigate("/main", {
      state: userInfo,
    });
  };

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
