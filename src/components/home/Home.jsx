import React, { useState } from "react";
import Navigation from "./nav/Navigation";
import CardForm from "./card_form/CardForm";
import CardList from "./card_list/CardList";
import styles from "./home.module.css";
import { useLocation } from "react-router";

const Home = ({ authService, cardData }) => {
  const locationState = JSON.parse(useLocation().state).user.uid;
  console.log(locationState);
  const [card, setCard] = useState([]);
  const [userId, setUserId] = useState(locationState);

  const addCard = (content) => {
    const updated = [...card, content];
    setCard(updated);
    cardData.saveCard(userId, content);
  };

  const deleteCard = (id) => {
    console.log(id);
    const cards = card.filter((item) => item.projectId !== id);
    setCard(cards);
    cardData.removeCard(userId, id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav_area}>
        <Navigation authService={authService} />
      </div>
      <div className={styles.card_area}>
        <CardForm onAdd={addCard} />
        <CardList card={card} onDelete={deleteCard} />
      </div>
    </div>
  );
};

export default Home;
