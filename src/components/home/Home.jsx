import React from "react";
import Navigation from "./nav/Navigation";
import Card from "./card/Card";
import styles from "./home.module.css";

const Home = ({ authService }) => {
  return (
    <div className={styles.container}>
      <Navigation authService={authService} />
      <Card />
    </div>
  );
};

export default Home;
