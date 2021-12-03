import React from "react";
import CardItem from "../card_item/CardItem";
import styles from "./card_list.module.css";

const CardList = ({ card, onDelete }) => {
  return (
    <div className={styles.no_cards}>
      {card.length > 0 ? (
        Object.keys(card).map((key) => {
          return (
            <div className={styles.cards}>
              <div key={key}>
                <CardItem card={card[key]} onDelete={onDelete} />
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.notice}>
          <i className="fas fa-ghost"></i>
          <p>
            DO YOU WANNA <span>BEEPRO?</span>
          </p>
          <p>현재 등록된 프로젝트가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default CardList;
