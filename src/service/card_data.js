import { getDatabase, ref, set, remove } from "firebase/database";

class CardData {
  constructor(app) {
    this.data = getDatabase(app);
  }

  saveCard(userId, content) {
    console.log(content.projectId);
    set(ref(this.data, `${userId}/cards/${content.projectId}`), content);
  }

  removeCard(userId, projectId) {
    remove(ref(this.data, `${userId}/cards/${projectId}`));
  }
}

export default CardData;
