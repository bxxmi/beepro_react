import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from './navigation.module.css';

const Navigation = ({ authService, userName, userImage }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/login');
      }
    });
  });

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Beepro</h1>
      </div>
      <div className={styles.userinfo}>
        <p>반갑습니다. {userName}님</p>
        <img src={userImage} alt="profile" />
      </div>
      <div className={styles.menu}>
        card
      </div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Navigation;
