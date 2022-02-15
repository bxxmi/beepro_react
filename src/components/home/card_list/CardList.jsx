import React, { memo } from "react";
import CardItem from "../card_item/CardItem";
import styles from "./card_list.module.css";

const CardList = memo(({ card, onDelete, onEdit, FileInput }) => {
  return (
    <div className={styles.no_cards}>
      {Object.keys(card).length !== 0 ? (
        Object.keys(card).map((key) => {
          return (
            <ul className={styles.cards} key={key}>
              <CardItem
                card={card[key]}
                onDelete={onDelete}
                onEdit={onEdit}
                FileInput={FileInput}
              />
            </ul>
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
});

export default CardList;
