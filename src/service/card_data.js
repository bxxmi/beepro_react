import { getDatabase, ref, set } from "firebase/database";

class CardData {
  constructor(app) {
    this.data = getDatabase(app);
  }

  saveCard(userId, content) {
    console.log(content.projectId);
    set(ref(this.data, `${userId}/cards/${content.projectId}`), content);
  }
}

export default CardData;
