import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class CardData {
  constructor(app) {
    this.data = getDatabase(app);
  }

  syncCards(userId, updateCard) {
    console.log(userId, updateCard);
    const query = ref(this.data, `${userId}/cards`);
    onValue(query, (DataSnapshot) => {
      const value = DataSnapshot.val();
      value && updateCard(value);
    });
    return () => off(query);
  }

  saveCard(userId, content) {
    set(ref(this.data, `${userId}/cards/${content.projectId}`), content);
  }

  deleteCard(userId, projectId) {
    remove(ref(this.data, `${userId}/cards/${projectId}`));
  }
}

export default CardData;
