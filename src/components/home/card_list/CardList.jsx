import React from "react";
import CardItem from "../card_item/CardItem";
import styles from "./card_list.module.css";

const CardList = ({ card, onDelete }) => {
  return (
    <div className={styles.cards}>
      {card ? (
        card.map((card) => {
          return (
            <CardItem card={card} key={card.projectId} onDelete={onDelete} />
          );
        })
      ) : (
        <>
          <i className="fas fa-ghost"></i>
          <p>현재 등록된 프로젝트가 없습니다.</p>
        </>
      )}
    </div>
  );
};

export default CardList;