import React from "react";
import CardItem from "../card_item/CardItem";
import styles from "./card_list.module.css";

const CardList = ({ card, onDelete }) => {
  return (
    <div className={styles.cards}>
      {card ? (
        Object.keys(card).map((key) => {
          return (
            <div key={key}>
              <CardItem card={card[key]} onDelete={onDelete} />
            </div>
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
