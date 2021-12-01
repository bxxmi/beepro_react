import React from "react";
import Navigation from "./nav/Navigation";
import CardList from "./card/CardList";
import styles from "./home.module.css";

const Home = ({ authService }) => {
  return (
    <div className={styles.container}>
      <Navigation authService={authService} />
      <CardList />
    </div>
  );
};

export default Home;
