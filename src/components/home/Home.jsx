import React, { useState } from "react";
import Navigation from "./nav/Navigation";
import CardForm from "./card_form/CardForm";
import CardList from "./card_list/CardList";
import styles from "./home.module.css";

const Home = ({ authService }) => {
  const [card, setCard] = useState([
    {
      projectId: "1",
      projectName: "beepro",
      projectRole: "Front End Developer",
      description: "프로젝트입니다",
      startDate: "2021-11-11",
      dueDate: "2021-12-12",
      cardTheme: "red",
      fileName: "bomi",
      fileURL: "bomi.png",
    },
    {
      projectId: "2",
      projectName: "pickurcolor",
      projectRole: "Front End Developer",
      description: "프로젝트입니다",
      startDate: "2021-11-11",
      dueDate: "2021-12-12",
      cardTheme: "yellow",
      fileName: "bomi",
      fileURL: null,
    },
    {
      projectId: "3",
      projectName: "slowcampus",
      projectRole: "Front End Developer",
      description: "프로젝트입니다",
      startDate: "2021-11-11",
      dueDate: "2021-12-12",
      cardTheme: "purple",
      fileName: "bomi",
      fileURL: null,
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.nav_area}>
        <Navigation authService={authService} />
      </div>
      <div className={styles.card_area}>
        <CardForm card={card} />
        <CardList card={card} />
      </div>
    </div>
  );
};

export default Home;
