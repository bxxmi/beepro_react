import React from "react";
import Navigation from "./nav/Navigation";
import CardList from "./card/CardList";
import styles from "./home.module.css";

const Home = ({ authService }) => {
  const userName = authService.auth.currentUser.displayName;
  const userImageSrc = authService.auth.currentUser.photoURL;

  return (
    <div className={styles.container}>
      <Navigation
        authService={authService}
        userName={userName}
        userImage={userImageSrc}
      />
      <CardList />
    </div>
  );
};

export default Home;
