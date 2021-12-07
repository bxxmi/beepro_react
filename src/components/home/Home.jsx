import React, { useState, useEffect } from "react";
import Navigation from "./nav/Navigation";
import CardForm from "./card_form/CardForm";
import CardList from "./card_list/CardList";
import styles from "./home.module.css";
import { useLocation } from "react-router";
import LoadingSpinner from "./loading/LoadingSpinner";

const Home = ({ FileInput, authService, cardData }) => {
  const locationState = JSON.parse(useLocation().state).user.uid;
  const [card, setCard] = useState({});
  const [userId, setUserId] = useState(locationState);
  const [loading, setLoading] = useState(true);

  const addCard = (content) => {
    const updated = { ...card };
    updated[content.projectId] = content;
    setCard(updated);
    cardData.saveCard(userId, content);
  };

  const editCard = (content) => {
    const updated = { ...card, content };
    updated[content.projectId] = content;
    setCard(updated);
    cardData.saveCard(userId, content);
  };

  const deleteCard = (id) => {
    const updated = { ...card };
    delete updated[id];
    setCard(updated);
    cardData.deleteCard(userId, id);
  };

  useEffect(() => {
    setUserId(userId);
    if (!userId) {
      return;
    }
    const stopSync = cardData.syncCards(userId, (card) => {
      setCard(card);
      setLoading(false);
    });
    return () => stopSync();
  }, [userId, cardData]);

  return (
    <div className={styles.container}>
      <div className={styles.nav_area}>
        <Navigation authService={authService} />
      </div>
      <div className={styles.card_area}>
        <div className={styles.card_form}>
          <CardForm onAdd={addCard} FileInput={FileInput} />
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className={styles.card_list}>
            <CardList
              card={card}
              onDelete={deleteCard}
              onEdit={editCard}
              FileInput={FileInput}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
